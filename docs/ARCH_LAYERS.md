# Core Architecture Layers

This Python project combines **Clean Architecture** dependency rules with
**Ports & Adapters** boundaries and Kratos-style service layering. The strict
Python business boundary and `internal/modules/` layout are project policies,
not mandatory directories or library choices imposed by Go-Kratos v3. See the
[official baseline research](2026-09-15-kratos-v3-official-baseline.md) for the
distinction between framework APIs, template practices, and local policy.

The core business logic resides in `internal/modules/<module>/biz/`. Protocol adapters
live in `service.py`, and infrastructure implementations live in `data/`.

---

## 1. Business Logic Layer (`biz/`)

The `biz` layer owns business rules. It must not import concrete frameworks,
SQLAlchemy models or sessions, gRPC/protobuf request or response DTOs, external
SDKs, or `data` implementations. A pure function library does not need a port
solely because it is third-party code.

### 1.1 `domain/` (Domain Model)

Defines basic business objects and rules:

- `entities.py`: Core business entities (domain objects), when the module needs them.
- `errors.py`: Domain-specific exceptions ensuring consistent error reporting, when needed.
- Domain objects do not perform network, filesystem, or persistence IO.

### 1.2 `port/` (Interface Contracts / Ports)

Defines interface contracts for external capabilities required by business logic:

- `repository_port.py`: Contract for persistence operations (e.g., `save_record`), when a usecase needs persistence.
- `source_port.py`: Contract for external data acquisition (e.g., `fetch_resource`), when a usecase needs an external source.
- **Note**: Only interfaces are defined here. Implementations reside in the `data` layer.
- Port arguments and results are business values, not ORM models, sessions, driver types, or protocol DTOs.
- A port may have multiple implementations, decorators, or composed adapters. There is no one-to-one file or class requirement.

### 1.3 `usecase/` (Use Cases / Business Flows)

Orchestrates specific business logic flows:

- `process_item.py`: Concrete business logic flow (e.g.: Call Source to get data -> Call Repo to save -> Handle Errors).
- Application commands/results may be defined when they clarify a boundary. They are distinct from protocol DTOs and need not live in a dedicated `dto.py`.
- Simple inputs/results such as `str` are valid. Create domain objects, ports, and application DTOs only when the business needs them.
- Usecases may await IO through ports; this runtime call does not permit importing the concrete implementation.
- Business invariants belong in usecase/domain so that they hold for HTTP, gRPC, and any other implemented entrypoint. Protocol structure validation belongs at the service boundary.

---

## 2. Data Access Layer (`data/`)

The `data` layer implements `biz/port` contracts and may contain persistence
objects (POs), ORM models, clients, mappers, caches, and shared resource factories.
Its business-facing methods convert storage/provider shapes into business
values. Known driver failures are translated at this boundary; the service
maps business failures into protocol errors without exposing internal details.

### 2.1 `repo/` (Persistence Adapters)

Implements database operations:

- `models.py`: Database models (e.g., SQLAlchemy ORM Models).
- `*_repo.py`: Implementation of `repository_port.py` interfaces.

### 2.2 `source/` (External Data Adapters)

Implements external API acquisition:

- `clients.py`: Encapsulates base API clients.
- `*_source.py`: Implementation of `source_port.py` interfaces.

These subdirectories are examples, not a requirement to create empty layers.
A resource factory may return an engine, session factory, client, or cleanup
function to the composition root. That is an infrastructure assembly boundary,
not a business port that exposes those resources to a usecase.

---

## 3. Communication Rules & Dependencies

### 3.1 Source imports

```text
server -> service -> biz/usecase -> biz/port, biz/domain
data ---------------------------> biz/port, biz/domain
server/service -----------------> protocol framework and generated API types
composition root ---------------> all layers needed for assembly
```

`biz` must not import `data`, `service`, or `server`. Service must not import
concrete repositories or clients. Server owns transport setup, middleware, and
registration; service converts protocol DTOs to and from business values.
Entities can be shared business values rather than a final function called at
the end of a linear chain.

### 3.2 Runtime request flow

```text
HTTP/gRPC handler -> service -> usecase -> business port
  -> injected data implementation -> database or external system
```

Data is an outbound adapter and participates in request execution. Calling it
through a port does not reverse the source dependency: the business owns the
interface, and data implements it. A usecase with no external IO does not need
this outbound portion of the flow.

### 3.3 Dependency injection and resource lifecycle

```text
resources -> repository -> usecase -> service -> server -> application
```

This is the construction order of the whole composition root, not import
direction or a requirement to put every constructor in one file. The composition
root spans the `cmd` startup logic and `internal/conf/injector.py`. The injector
assembles business objects and owns foundational resources such as the database
engine; `cmd` coordinates server construction, startup, and shutdown. Both may
import the layers needed for their assembly responsibilities.

The injector may call data resource factories, which encapsulate initialization
details. It owns cleanup for those foundational resources; `cmd` coordinates
server shutdown and injector cleanup. Handlers, services, and usecases must not
create concrete repositories or clients themselves.

Normal shutdown and partial initialization failure must both release resources
already created. Cleanup must handle resources that have not fully started and
repeated closing; one cleanup failure must not prevent the remaining cleanup.
Verify these paths for the resources a module actually introduces.

## 4. Contract and Verification Boundaries

- Public API changes start with `api/proto/`; outbound IO capabilities start with a business port when needed.
- Keep HTTP annotations, gateway registration, JSON/error encoding, OpenAPI, and actual responses consistent. Regenerate via `make proto` and verify HTTP and direct gRPC behavior for affected contracts.
- Preserve identity and trace context where used; propagate deadlines and cancellation into downstream IO. Add retries only where the operation and errors permit them.
- Usecase tests run without real infrastructure. Adapter contract and lifecycle tests cover actual external capabilities; a pure usecase does not need a database test.
- Swapping a port implementation may change outer assembly/configuration, while preserving usecase business logic and the port's semantics.

Use the [Clean Architecture checklist](agent-guides/clean-architecture-review-checklist.md)
and [Kratos checklist](agent-guides/kratos-review-checklist.md) to review changes.
