# Core Architecture Layers

This project follows **Clean Architecture** (also known as Ports & Adapters) to decouple business logic from external infrastructure (databases, external APIs, frameworks).

The core business logic resides in `internal/modules/<module>/biz/`. Protocol adapters
live in `service.py`, and infrastructure implementations live in `data/`.

---

## 1. Business Logic Layer (`biz/`)

The `biz` layer defined the core business rules and is independent of external technologies (SQLAlchemy, gRPC, or specific data providers).

### 1.1 `domain/` (Domain Model)
Defines basic business objects and rules:
- `entities.py`: Core business entities (domain objects), when the module needs them.
- `errors.py`: Domain-specific exceptions ensuring consistent error reporting, when needed.

### 1.2 `port/` (Interface Contracts / Ports)
Defines interface contracts for external capabilities required by business logic:
- `repository_port.py`: Contract for persistence operations (e.g., `save_record`), when a usecase needs persistence.
- `source_port.py`: Contract for external data acquisition (e.g., `fetch_resource`), when a usecase needs an external source.
- **Note**: Only interfaces are defined here. Implementations reside in the `data` layer.

### 1.3 `usecase/` (Use Cases / Business Flows)
Orchestrates specific business logic flows:
- `process_item.py`: Concrete business logic flow (e.g.: Call Source to get data -> Call Repo to save -> Handle Errors).
- `dto.py`: Input/Output Data Transfer Objects for the application layer. Used to pass data between Service and Usecase, distinct from Domain Entities.
- Interacts with external systems only through `port` interfaces, keeping logic pure and testable.

---

## 2. Data Access Layer (`data/`)

The `data` layer (Adapter layer) implements the interfaces defined in `biz/port`, handling technical details.

### 2.1 `repo/` (Persistence Adapters)
Implements database operations:
- `models.py`: Database models (e.g., SQLAlchemy ORM Models).
- `*_repo.py`: Implementation of `repository_port.py` interfaces.

### 2.2 `source/` (External Data Adapters)
Implements external API acquisition:
- `clients.py`: Encapsulates base API clients.
- `*_source.py`: Implementation of `source_port.py` interfaces.

---

## 3. Communication Rules & Dependencies

Dependency direction is always **Inward**:
- `internal/server` -> `modules/service.py` -> `biz/usecase` -> `biz/domain`
- The `data/` layer implements `biz/port` interfaces, but the `biz/` layer remains unaware of the `data/` implementation.

This design ensures:
- **Testability**: Business logic can be unit-tested without a database or network.
- **Maintainability**: Swapping a database driver or data provider only requires changes in the `data/` layer without affecting core business processes.
