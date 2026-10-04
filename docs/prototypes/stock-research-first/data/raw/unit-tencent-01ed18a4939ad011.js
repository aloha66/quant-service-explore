! function (t, e) {
	if ("object" == typeof exports && "object" == typeof module) module.exports = e();
	else if ("function" == typeof define && define.amd) define([], e);
	else {
		var n = e();
		for (var r in n)("object" == typeof exports ? exports : t)[r] = n[r]
	}
}(this, function () {
	return function (t) {
		function e(n) {
			if (r[n]) return r[n].exports;
			var i = r[n] = {
				exports: {},
				id: n,
				loaded: !1
			};
			return t[n].call(i.exports, i, i.exports, e), i.loaded = !0, i.exports
		}
		var n = window.webpackJsonp;
		window.webpackJsonp = function (r, a) {
			for (var o, s, l = 0, u = []; l < r.length; l++) s = r[l], i[s] && u.push.apply(u, i[s]), i[s] = 0;
			for (o in a) t[o] = a[o];
			for (n && n(r, a); u.length;) u.shift().call(null, e)
		};
		var r = {},
			i = {
				0: 0
			};
		return e.e = function (t, n) {
			if (0 === i[t]) return n.call(null, e);
			if (void 0 !== i[t]) i[t].push(n);
			else {
				i[t] = [n];
				var r = document.getElementsByTagName("head")[0],
					a = document.createElement("script");
				a.type = "text/javascript", a.charset = "utf-8", a.async = !0, a.src = e.p + "" + t + ".f3b118c16a6072697fc6.bundle.js", r.appendChild(a)
			}
		}, e.m = t, e.c = r, e.p = "//finance.qq.com/js/", e(0)
	}([function (t, e, n) {
		n(1), n(2), n(3);
		var r = n(4);
		t.exports = r
	}, function (t, e, n) {
		var r, i;
		! function (a, o) {
			"use strict";
			r = o, i = "function" == typeof r ? r.call(e, n, e, t) : r, !(void 0 !== i && (t.exports = i))
		}(void 0, function () {
			function t(t) {
				var e = typeof t;
				return null === t || "undefined" === e || "boolean" === e || "number" === e || "string" === e
			}
			var e, n = Array.prototype,
				r = Object.prototype,
				i = Function.prototype,
				a = String.prototype,
				o = Number.prototype,
				s = n.slice,
				l = n.splice,
				u = n.push,
				c = n.unshift,
				h = i.call,
				f = r.toString,
				g = Array.isArray || function (t) {
					return "[object Array]" === f.call(t)
				},
				d = "function" == typeof Symbol && "symbol" == typeof Symbol.toStringTag,
				p = Function.prototype.toString,
				A = function (t) {
					try {
						return p.call(t), !0
					} catch (e) {
						return !1
					}
				},
				C = "[object Function]",
				v = "[object GeneratorFunction]";
			e = function (t) {
				if ("function" != typeof t) return !1;
				if (d) return A(t);
				var e = f.call(t);
				return e === C || e === v
			};
			var I, m = RegExp.prototype.exec,
				y = function (t) {
					try {
						return m.call(t), !0
					} catch (e) {
						return !1
					}
				},
				b = "[object RegExp]";
			I = function (t) {
				return "object" != typeof t ? !1 : d ? y(t) : f.call(t) === b
			};
			var _, x = String.prototype.valueOf,
				w = function (t) {
					try {
						return x.call(t), !0
					} catch (e) {
						return !1
					}
				},
				k = "[object String]";
			_ = function (t) {
				return "string" == typeof t ? !0 : "object" != typeof t ? !1 : d ? w(t) : f.call(t) === k
			};
			var T = function (t) {
					var n = f.call(t),
						r = "[object Arguments]" === n;
					return r || (r = !g(t) && null !== t && "object" == typeof t && "number" == typeof t.length && t.length >= 0 && e(t.callee)), r
				},
				E = function (t) {
					var e, n = Object.defineProperty && function () {
						try {
							return Object.defineProperty({}, "x", {}), !0
						} catch (t) {
							return !1
						}
					}();
					return e = n ? function (t, e, n, r) {
							!r && e in t || Object.defineProperty(t, e, {
								configurable: !0,
								enumerable: !1,
								writable: !0,
								value: n
							})
						} : function (t, e, n, r) {
							!r && e in t || (t[e] = n)
						},
						function (n, r, i) {
							for (var a in r) t.call(r, a) && e(n, a, r[a], i)
						}
				}(r.hasOwnProperty),
				S = {
					ToInteger: function (t) {
						var e = +t;
						return e !== e ? e = 0 : 0 !== e && e !== 1 / 0 && e !== -(1 / 0) && (e = (e > 0 || -1) * Math.floor(Math.abs(e))), e
					},
					ToPrimitive: function (n) {
						var r, i, a;
						if (t(n)) return n;
						if (i = n.valueOf, e(i) && (r = i.call(n), t(r))) return r;
						if (a = n.toString, e(a) && (r = a.call(n), t(r))) return r;
						throw new TypeError
					},
					ToObject: function (t) {
						if (null == t) throw new TypeError("can't convert " + t + " to object");
						return Object(t)
					},
					ToUint32: function (t) {
						return t >>> 0
					}
				},
				D = function () {};
			E(i, {
				bind: function (t) {
					var n = this;
					if (!e(n)) throw new TypeError("Function.prototype.bind called on incompatible " + n);
					for (var r, i = s.call(arguments, 1), a = function () {
							if (this instanceof r) {
								var e = n.apply(this, i.concat(s.call(arguments)));
								return Object(e) === e ? e : this
							}
							return n.apply(t, i.concat(s.call(arguments)))
						}, o = Math.max(0, n.length - i.length), l = [], u = 0; o > u; u++) l.push("$" + u);
					return r = Function("binder", "return function (" + l.join(",") + "){ return binder.apply(this, arguments); }")(a), n.prototype && (D.prototype = n.prototype, r.prototype = new D, D.prototype = null), r
				}
			});
			var P = h.bind(r.hasOwnProperty),
				O = function () {
					var t = [1, 2],
						e = t.splice();
					return 2 === t.length && g(e) && 0 === e.length
				}();
			E(n, {
				splice: function (t, e) {
					return 0 === arguments.length ? [] : l.apply(this, arguments)
				}
			}, !O);
			var M = function () {
				var t = {};
				return n.splice.call(t, 0, 0, 1), 1 === t.length
			}();
			E(n, {
				splice: function (t, e) {
					if (0 === arguments.length) return [];
					var n = arguments;
					return this.length = Math.max(S.ToInteger(this.length), 0), arguments.length > 0 && "number" != typeof e && (n = s.call(arguments), n.length < 2 ? n.push(this.length - t) : n[1] = S.ToInteger(e)), l.apply(this, n)
				}
			}, !M);
			var L = 1 !== [].unshift(0);
			E(n, {
				unshift: function () {
					return c.apply(this, arguments), this.length
				}
			}, L), E(Array, {
				isArray: g
			});
			var j = Object("a"),
				F = "a" !== j[0] || !(0 in j),
				N = function (t) {
					var e = !0,
						n = !0;
					return t && (t.call("foo", function (t, n, r) {
						"object" != typeof r && (e = !1)
					}), t.call([1], function () {
						"use strict";
						n = "string" == typeof this
					}, "x")), !!t && e && n
				};
			E(n, {
				forEach: function (t) {
					var n = S.ToObject(this),
						r = F && _(this) ? this.split("") : n,
						i = arguments[1],
						a = -1,
						o = r.length >>> 0;
					if (!e(t)) throw new TypeError;
					for (; ++a < o;) a in r && t.call(i, r[a], a, n)
				}
			}, !N(n.forEach)), E(n, {
				map: function (t) {
					var n = S.ToObject(this),
						r = F && _(this) ? this.split("") : n,
						i = r.length >>> 0,
						a = Array(i),
						o = arguments[1];
					if (!e(t)) throw new TypeError(t + " is not a function");
					for (var s = 0; i > s; s++) s in r && (a[s] = t.call(o, r[s], s, n));
					return a
				}
			}, !N(n.map)), E(n, {
				filter: function (t) {
					var n, r = S.ToObject(this),
						i = F && _(this) ? this.split("") : r,
						a = i.length >>> 0,
						o = [],
						s = arguments[1];
					if (!e(t)) throw new TypeError(t + " is not a function");
					for (var l = 0; a > l; l++) l in i && (n = i[l], t.call(s, n, l, r) && o.push(n));
					return o
				}
			}, !N(n.filter)), E(n, {
				every: function (t) {
					var n = S.ToObject(this),
						r = F && _(this) ? this.split("") : n,
						i = r.length >>> 0,
						a = arguments[1];
					if (!e(t)) throw new TypeError(t + " is not a function");
					for (var o = 0; i > o; o++)
						if (o in r && !t.call(a, r[o], o, n)) return !1;
					return !0
				}
			}, !N(n.every)), E(n, {
				some: function (t) {
					var n = S.ToObject(this),
						r = F && _(this) ? this.split("") : n,
						i = r.length >>> 0,
						a = arguments[1];
					if (!e(t)) throw new TypeError(t + " is not a function");
					for (var o = 0; i > o; o++)
						if (o in r && t.call(a, r[o], o, n)) return !0;
					return !1
				}
			}, !N(n.some));
			var q = !1;
			n.reduce && (q = "object" == typeof n.reduce.call("es5", function (t, e, n, r) {
				return r
			})), E(n, {
				reduce: function (t) {
					var n = S.ToObject(this),
						r = F && _(this) ? this.split("") : n,
						i = r.length >>> 0;
					if (!e(t)) throw new TypeError(t + " is not a function");
					if (!i && 1 === arguments.length) throw new TypeError("reduce of empty array with no initial value");
					var a, o = 0;
					if (arguments.length >= 2) a = arguments[1];
					else
						for (;;) {
							if (o in r) {
								a = r[o++];
								break
							}
							if (++o >= i) throw new TypeError("reduce of empty array with no initial value")
						}
					for (; i > o; o++) o in r && (a = t.call(void 0, a, r[o], o, n));
					return a
				}
			}, !q);
			var R = !1;
			n.reduceRight && (R = "object" == typeof n.reduceRight.call("es5", function (t, e, n, r) {
				return r
			})), E(n, {
				reduceRight: function (t) {
					var n = S.ToObject(this),
						r = F && _(this) ? this.split("") : n,
						i = r.length >>> 0;
					if (!e(t)) throw new TypeError(t + " is not a function");
					if (!i && 1 === arguments.length) throw new TypeError("reduceRight of empty array with no initial value");
					var a, o = i - 1;
					if (arguments.length >= 2) a = arguments[1];
					else
						for (;;) {
							if (o in r) {
								a = r[o--];
								break
							}
							if (--o < 0) throw new TypeError("reduceRight of empty array with no initial value")
						}
					if (0 > o) return a;
					do o in r && (a = t.call(void 0, a, r[o], o, n)); while (o--);
					return a
				}
			}, !R);
			var B = Array.prototype.indexOf && -1 !== [0, 1].indexOf(1, 2);
			E(n, {
				indexOf: function (t) {
					var e = F && _(this) ? this.split("") : S.ToObject(this),
						n = e.length >>> 0;
					if (!n) return -1;
					var r = 0;
					for (arguments.length > 1 && (r = S.ToInteger(arguments[1])), r = r >= 0 ? r : Math.max(0, n + r); n > r; r++)
						if (r in e && e[r] === t) return r;
					return -1
				}
			}, B);
			var V = Array.prototype.lastIndexOf && -1 !== [0, 1].lastIndexOf(0, -3);
			E(n, {
				lastIndexOf: function (t) {
					var e = F && _(this) ? this.split("") : S.ToObject(this),
						n = e.length >>> 0;
					if (!n) return -1;
					var r = n - 1;
					for (arguments.length > 1 && (r = Math.min(r, S.ToInteger(arguments[1]))), r = r >= 0 ? r : n - Math.abs(r); r >= 0; r--)
						if (r in e && t === e[r]) return r;
					return -1
				}
			}, V);
			var X = !{
					toString: null
				}.propertyIsEnumerable("toString"),
				U = function () {}.propertyIsEnumerable("prototype"),
				z = !P("x", "0"),
				W = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
				H = W.length;
			E(Object, {
				keys: function (t) {
					var n = e(t),
						r = T(t),
						i = null !== t && "object" == typeof t,
						a = i && _(t);
					if (!i && !n && !r) throw new TypeError("Object.keys called on a non-object");
					var o = [],
						s = U && n;
					if (a && z || r)
						for (var l = 0; l < t.length; ++l) o.push(String(l));
					if (!r)
						for (var u in t) s && "prototype" === u || !P(t, u) || o.push(String(u));
					if (X)
						for (var c = t.constructor, h = c && c.prototype === t, f = 0; H > f; f++) {
							var g = W[f];
							h && "constructor" === g || !P(t, g) || o.push(g)
						}
					return o
				}
			});
			var G = Object.keys && function () {
					return 2 === Object.keys(arguments).length
				}(1, 2),
				Y = Object.keys;
			E(Object, {
				keys: function (t) {
					return Y(T(t) ? n.slice.call(t) : t)
				}
			}, !G);
			var $ = -621987552e5,
				Z = "-000001",
				Q = Date.prototype.toISOString && -1 === new Date($).toISOString().indexOf(Z);
			E(Date.prototype, {
				toISOString: function () {
					var t, e, n, r, i;
					if (!isFinite(this)) throw new RangeError("Date.prototype.toISOString called on non-finite value.");
					for (r = this.getUTCFullYear(), i = this.getUTCMonth(), r += Math.floor(i / 12), i = (i % 12 + 12) % 12, t = [i + 1, this.getUTCDate(), this.getUTCHours(), this.getUTCMinutes(), this.getUTCSeconds()], r = (0 > r ? "-" : r > 9999 ? "+" : "") + ("00000" + Math.abs(r)).slice(r >= 0 && 9999 >= r ? -4 : -6), e = t.length; e--;) n = t[e], 10 > n && (t[e] = "0" + n);
					return r + "-" + t.slice(0, 2).join("-") + "T" + t.slice(2).join(":") + "." + ("000" + this.getUTCMilliseconds()).slice(-3) + "Z"
				}
			}, Q);
			var J = function () {
				try {
					return Date.prototype.toJSON && null === new Date(NaN).toJSON() && -1 !== new Date($).toJSON().indexOf(Z) && Date.prototype.toJSON.call({
						toISOString: function () {
							return !0
						}
					})
				} catch (t) {
					return !1
				}
			}();
			J || (Date.prototype.toJSON = function (t) {
				var n = Object(this),
					r = S.ToPrimitive(n);
				if ("number" == typeof r && !isFinite(r)) return null;
				var i = n.toISOString;
				if (!e(i)) throw new TypeError("toISOString property is not callable");
				return i.call(n)
			});
			var K = 1e15 === Date.parse("+033658-09-27T01:46:40.000Z"),
				tt = !isNaN(Date.parse("2012-04-04T24:00:00.500Z")) || !isNaN(Date.parse("2012-11-31T23:59:59.000Z")),
				et = isNaN(Date.parse("2000-01-01T00:00:00.000Z"));
			(!Date.parse || et || tt || !K) && (Date = function (t) {
				function e(n, r, i, a, o, s, l) {
					var u = arguments.length;
					if (this instanceof t) {
						var c = 1 === u && String(n) === n ? new t(e.parse(n)) : u >= 7 ? new t(n, r, i, a, o, s, l) : u >= 6 ? new t(n, r, i, a, o, s) : u >= 5 ? new t(n, r, i, a, o) : u >= 4 ? new t(n, r, i, a) : u >= 3 ? new t(n, r, i) : u >= 2 ? new t(n, r) : u >= 1 ? new t(n) : new t;
						return E(c, {
							constructor: e
						}, !0), c
					}
					return t.apply(this, arguments)
				}

				function n(t, e) {
					var n = e > 1 ? 1 : 0;
					return a[e] + Math.floor((t - 1969 + n) / 4) - Math.floor((t - 1901 + n) / 100) + Math.floor((t - 1601 + n) / 400) + 365 * (t - 1970)
				}

				function r(e) {
					return Number(new t(1970, 0, 1, 0, 0, 0, e))
				}
				var i = new RegExp("^(\\d{4}|[+-]\\d{6})(?:-(\\d{2})(?:-(\\d{2})(?:T(\\d{2}):(\\d{2})(?::(\\d{2})(?:(\\.\\d{1,}))?)?(Z|(?:([-+])(\\d{2}):(\\d{2})))?)?)?)?$"),
					a = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365];
				for (var o in t) e[o] = t[o];
				return e.now = t.now, e.UTC = t.UTC, e.prototype = t.prototype, e.prototype.constructor = e, e.parse = function (e) {
					var a = i.exec(e);
					if (a) {
						var o, s = Number(a[1]),
							l = Number(a[2] || 1) - 1,
							u = Number(a[3] || 1) - 1,
							c = Number(a[4] || 0),
							h = Number(a[5] || 0),
							f = Number(a[6] || 0),
							g = Math.floor(1e3 * Number(a[7] || 0)),
							d = Boolean(a[4] && !a[8]),
							p = "-" === a[9] ? 1 : -1,
							A = Number(a[10] || 0),
							C = Number(a[11] || 0);
						return (h > 0 || f > 0 || g > 0 ? 24 : 25) > c && 60 > h && 60 > f && 1e3 > g && l > -1 && 12 > l && 24 > A && 60 > C && u > -1 && u < n(s, l + 1) - n(s, l) && (o = 60 * (24 * (n(s, l) + u) + c + A * p), o = 1e3 * (60 * (o + h + C * p) + f) + g, d && (o = r(o)), o >= -864e13 && 864e13 >= o) ? o : NaN
					}
					return t.parse.apply(this, arguments)
				}, e
			}(Date)), Date.now || (Date.now = function () {
				return (new Date).getTime()
			});
			var nt = o.toFixed && ("0.000" !== 8e-5.toFixed(3) || "1" !== .9.toFixed(0) || "1.25" !== 1.255.toFixed(2)),
				rt = {
					base: 1e7,
					size: 6,
					data: [0, 0, 0, 0, 0, 0],
					multiply: function (t, e) {
						for (var n = -1, r = e; ++n < rt.size;) r += t * rt.data[n], rt.data[n] = r % rt.base, r = Math.floor(r / rt.base)
					},
					divide: function (t) {
						for (var e = rt.size, n = 0; --e >= 0;) n += rt.data[e], rt.data[e] = Math.floor(n / t), n = n % t * rt.base
					},
					numToString: function () {
						for (var t = rt.size, e = ""; --t >= 0;)
							if ("" !== e || 0 === t || 0 !== rt.data[t]) {
								var n = String(rt.data[t]);
								"" === e ? e = n : e += "0000000".slice(0, 7 - n.length) + n
							} return e
					},
					pow: function (t, e, n) {
						for (var r = !0; r;) {
							var i = t,
								a = e,
								o = n;
							if (r = !1, 0 === a) return o;
							a % 2 !== 1 ? (t = i * i, e = a / 2, n = o, r = !0) : (t = i, e = a - 1, n = o * i, r = !0)
						}
					},
					log: function (t) {
						for (var e = 0, n = t; n >= 4096;) e += 12, n /= 4096;
						for (; n >= 2;) e += 1, n /= 2;
						return e
					}
				};
			E(o, {
				toFixed: function (t) {
					var e, n, r, i, a, o, s, l;
					if (e = Number(t), e = e !== e ? 0 : Math.floor(e), 0 > e || e > 20) throw new RangeError("Number.toFixed called with invalid number of decimals");
					if (n = Number(this), n !== n) return "NaN";
					if (-1e21 >= n || n >= 1e21) return String(n);
					if (r = "", 0 > n && (r = "-", n = -n), i = "0", n > 1e-21)
						if (a = rt.log(n * rt.pow(2, 69, 1)) - 69, o = 0 > a ? n * rt.pow(2, -a, 1) : n / rt.pow(2, a, 1), o *= 4503599627370496, a = 52 - a, a > 0) {
							for (rt.multiply(0, o), s = e; s >= 7;) rt.multiply(1e7, 0), s -= 7;
							for (rt.multiply(rt.pow(10, s, 1), 0), s = a - 1; s >= 23;) rt.divide(1 << 23), s -= 23;
							rt.divide(1 << s), rt.multiply(1, 1), rt.divide(2), i = rt.numToString()
						} else rt.multiply(0, o), rt.multiply(1 << -a, 0), i = rt.numToString() + "0.00000000000000000000".slice(2, 2 + e);
					return e > 0 ? (l = i.length, i = e >= l ? r + "0.0000000000000000000".slice(0, e - l + 2) + i : r + i.slice(0, l - e) + "." + i.slice(l - e)) : i = r + i, i
				}
			}, nt);
			var it = a.split;
			2 !== "ab".split(/(?:ab)*/).length || 4 !== ".".split(/(.?)(.?)/).length || "t" === "tesst".split(/(s)*/)[1] || 4 !== "test".split(/(?:)/, -1).length || "".split(/.?/).length || ".".split(/()()/).length > 1 ? ! function () {
				var t = "undefined" == typeof /()??/.exec("")[1];
				a.split = function (e, n) {
					var r = this;
					if ("undefined" == typeof e && 0 === n) return [];
					if (!I(e)) return it.call(this, e, n);
					var i, a, o, s, l = [],
						c = (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.extended ? "x" : "") + (e.sticky ? "y" : ""),
						h = 0,
						f = new RegExp(e.source, c + "g");
					r += "", t || (i = new RegExp("^" + f.source + "$(?!\\s)", c));
					var g = "undefined" == typeof n ? -1 >>> 0 : S.ToUint32(n);
					for (a = f.exec(r); a && (o = a.index + a[0].length, !(o > h && (l.push(r.slice(h, a.index)), !t && a.length > 1 && a[0].replace(i, function () {
							for (var t = 1; t < arguments.length - 2; t++) "undefined" == typeof arguments[t] && (a[t] = void 0)
						}), a.length > 1 && a.index < r.length && u.apply(l, a.slice(1)), s = a[0].length, h = o, l.length >= g)));) f.lastIndex === a.index && f.lastIndex++, a = f.exec(r);
					return h === r.length ? (s || !f.test("")) && l.push("") : l.push(r.slice(h)), l.length > g ? l.slice(0, g) : l
				}
			}() : "0".split(void 0, 0).length && (a.split = function (t, e) {
				return "undefined" == typeof t && 0 === e ? [] : it.call(this, t, e)
			});
			var at = a.replace,
				ot = function () {
					var t = [];
					return "x".replace(/x(.)?/g, function (e, n) {
						t.push(n)
					}), 1 === t.length && "undefined" == typeof t[0]
				}();
			ot || (a.replace = function (t, n) {
				var r = e(n),
					i = I(t) && /\)[*?]/.test(t.source);
				if (r && i) {
					var a = function (e) {
						var r = arguments.length,
							i = t.lastIndex;
						t.lastIndex = 0;
						var a = t.exec(e) || [];
						return t.lastIndex = i, a.push(arguments[r - 2], arguments[r - 1]), n.apply(this, a)
					};
					return at.call(this, t, a)
				}
				return at.call(this, t, n)
			});
			var st = a.substr,
				lt = "".substr && "b" !== "0b".substr(-1);
			E(a, {
				substr: function (t, e) {
					var n = t;
					return 0 > t && (n = Math.max(this.length + t, 0)), st.call(this, n, e)
				}
			}, lt);
			var ut = "	\n\x0B\f\r   ᠎             　\u2028\u2029\ufeff",
				ct = "​",
				ht = "[" + ut + "]",
				ft = new RegExp("^" + ht + ht + "*"),
				gt = new RegExp(ht + ht + "*$"),
				dt = a.trim && (ut.trim() || !ct.trim());
			E(a, {
				trim: function () {
					if ("undefined" == typeof this || null === this) throw new TypeError("can't convert " + this + " to object");
					return String(this).replace(ft, "").replace(gt, "")
				}
			}, dt), (8 !== parseInt(ut + "08") || 22 !== parseInt(ut + "0x16")) && (parseInt = function (t) {
				var e = /^0[xX]/;
				return function (n, r) {
					var i = String(n).trim(),
						a = Number(r) || (e.test(i) ? 16 : 10);
					return t(i, a)
				}
			}(parseInt))
		})
	}, function (t, e, n) {
		var r, i;
		! function (a, o) {
			"use strict";
			r = o, i = "function" == typeof r ? r.call(e, n, e, t) : r, !(void 0 !== i && (t.exports = i))
		}(void 0, function () {
			var t, e, n, r, i = Function.prototype.call,
				a = Object.prototype,
				o = i.bind(a.hasOwnProperty),
				s = i.bind(a.propertyIsEnumerable),
				l = i.bind(a.toString),
				u = o(a, "__defineGetter__");
			u && (t = i.bind(a.__defineGetter__), e = i.bind(a.__defineSetter__), n = i.bind(a.__lookupGetter__), r = i.bind(a.__lookupSetter__)), Object.getPrototypeOf || (Object.getPrototypeOf = function (t) {
				var e = t.__proto__;
				return e || null === e ? e : "[object Function]" === l(t.constructor) ? t.constructor.prototype : t instanceof Object ? a : null
			});
			var c = function (t) {
				try {
					return t.sentinel = 0, 0 === Object.getOwnPropertyDescriptor(t, "sentinel").value
				} catch (e) {
					return !1
				}
			};
			if (Object.defineProperty) {
				var h = c({}),
					f = "undefined" == typeof document || c(document.createElement("div"));
				if (!f || !h) var g = Object.getOwnPropertyDescriptor
			}
			if (!Object.getOwnPropertyDescriptor || g) {
				var d = "Object.getOwnPropertyDescriptor called on a non-object: ";
				Object.getOwnPropertyDescriptor = function (t, e) {
					if ("object" != typeof t && "function" != typeof t || null === t) throw new TypeError(d + t);
					if (g) try {
						return g.call(Object, t, e)
					} catch (i) {}
					var l;
					if (!o(t, e)) return l;
					if (l = {
							enumerable: s(t, e),
							configurable: !0
						}, u) {
						var c = t.__proto__,
							h = t !== a;
						h && (t.__proto__ = a);
						var f = n(t, e),
							p = r(t, e);
						if (h && (t.__proto__ = c), f || p) return f && (l.get = f), p && (l.set = p), l
					}
					return l.value = t[e], l.writable = !0, l
				}
			}
			if (Object.getOwnPropertyNames || (Object.getOwnPropertyNames = function (t) {
					return Object.keys(t)
				}), !Object.create) {
				var p, A = !({
							__proto__: null
						}
						instanceof Object),
					C = function () {
						if (!document.domain) return !1;
						try {
							return !!new ActiveXObject("htmlfile")
						} catch (t) {
							return !1
						}
					},
					v = function () {
						var t, e;
						return e = new ActiveXObject("htmlfile"), e.write("<script><\/script>"), e.close(), t = e.parentWindow.Object.prototype, e = null, t
					},
					I = function () {
						var t, e = document.createElement("iframe"),
							n = document.body || document.documentElement;
						return e.style.display = "none", n.appendChild(e), e.src = "javascript:", t = e.contentWindow.Object.prototype, n.removeChild(e), e = null, t
					};
				p = A || "undefined" == typeof document ? function () {
					return {
						__proto__: null
					}
				} : function () {
					var t = C() ? v() : I();
					delete t.constructor, delete t.hasOwnProperty, delete t.propertyIsEnumerable, delete t.isPrototypeOf, delete t.toLocaleString, delete t.toString, delete t.valueOf;
					var e = function () {};
					return e.prototype = t, p = function () {
						return new e
					}, new e
				}, Object.create = function (t, e) {
					var n, r = function () {};
					if (null === t) n = p();
					else {
						if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object prototype may only be an Object or null");
						r.prototype = t, n = new r, n.__proto__ = t
					}
					return void 0 !== e && Object.defineProperties(n, e), n
				}
			}
			var m = function (t) {
				try {
					return Object.defineProperty(t, "sentinel", {}), "sentinel" in t
				} catch (e) {
					return !1
				}
			};
			if (Object.defineProperty) {
				var y = m({}),
					b = "undefined" == typeof document || m(document.createElement("div"));
				if (!y || !b) var _ = Object.defineProperty,
					x = Object.defineProperties
			}
			if (!Object.defineProperty || _) {
				var w = "Property description must be an object: ",
					k = "Object.defineProperty called on non-object: ",
					T = "getters & setters can not be defined on this javascript engine";
				Object.defineProperty = function (i, o, s) {
					if ("object" != typeof i && "function" != typeof i || null === i) throw new TypeError(k + i);
					if ("object" != typeof s && "function" != typeof s || null === s) throw new TypeError(w + s);
					if (_) try {
						return _.call(Object, i, o, s)
					} catch (l) {}
					if ("value" in s)
						if (u && (n(i, o) || r(i, o))) {
							var c = i.__proto__;
							i.__proto__ = a, delete i[o], i[o] = s.value, i.__proto__ = c
						} else i[o] = s.value;
					else {
						if (!u && ("get" in s || "set" in s)) throw new TypeError(T);
						"get" in s && t(i, o, s.get), "set" in s && e(i, o, s.set)
					}
					return i
				}
			}(!Object.defineProperties || x) && (Object.defineProperties = function (t, e) {
				if (x) try {
					return x.call(Object, t, e)
				} catch (n) {}
				return Object.keys(e).forEach(function (n) {
					"__proto__" !== n && Object.defineProperty(t, n, e[n])
				}), t
			}), Object.seal || (Object.seal = function (t) {
				if (Object(t) !== t) throw new TypeError("Object.seal can only be called on Objects.");
				return t
			}), Object.freeze || (Object.freeze = function (t) {
				if (Object(t) !== t) throw new TypeError("Object.freeze can only be called on Objects.");
				return t
			});
			try {
				Object.freeze(function () {})
			} catch (E) {
				Object.freeze = function (t) {
					return function (e) {
						return "function" == typeof e ? e : t(e)
					}
				}(Object.freeze)
			}
			Object.preventExtensions || (Object.preventExtensions = function (t) {
				if (Object(t) !== t) throw new TypeError("Object.preventExtensions can only be called on Objects.");
				return t
			}), Object.isSealed || (Object.isSealed = function (t) {
				if (Object(t) !== t) throw new TypeError("Object.isSealed can only be called on Objects.");
				return !1
			}), Object.isFrozen || (Object.isFrozen = function (t) {
				if (Object(t) !== t) throw new TypeError("Object.isFrozen can only be called on Objects.");
				return !1
			}), Object.isExtensible || (Object.isExtensible = function (t) {
				if (Object(t) !== t) throw new TypeError("Object.isExtensible can only be called on Objects.");
				for (var e = ""; o(t, e);) e += "?";
				t[e] = !0;
				var n = o(t, e);
				return delete t[e], n
			})
		})
	}, function (t, e) {
		"use strict";
		document.createElement("canvas").getContext || ! function () {
			function t() {
				return this.context_ || (this.context_ = new y(this))
			}

			function e(t) {
				for (var e, n, r = "white", i = t; i && (!(n = i.currentStyle) || (r = n.backgroundColor, r === V));) i = i.parentNode;
				return e = r === V ? "#fff" : r
			}

			function n(t, e, n) {
				var r = $.call(arguments, 2);
				return function () {
					return t.apply(e, r.concat($.call(arguments)))
				}
			}

			function r(t) {
				return String(t).replace(/&/g, "&amp;").replace(/"/g, "&quot;")
			}

			function i(t, e, n) {
				t.namespaces[e] || t.namespaces.add(e, n, "#default#VML")
			}

			function a(t) {
				if (i(t, "g_vml_", "urn:schemas-microsoft-com:vml"), i(t, "g_o_", "urn:schemas-microsoft-com:office:office"), !t.styleSheets.ex_canvas_) {
					var e = t.createStyleSheet();
					e.owningElement.id = "ex_canvas_", e.cssText = "canvas{display:inline-block;overflow:hidden;text-align:left;width:300px;height:150px}"
				}
			}

			function o(t) {
				var e = t.srcElement;
				switch (t.propertyName) {
					case "width":
						e.getContext().clearRect(), e.style.width = e.attributes.width.nodeValue + "px", e.firstChild && (e.firstChild.style.width = e.clientWidth + "px");
						break;
					case "height":
						e.getContext().clearRect(), e.style.height = e.attributes.height.nodeValue + "px", e.firstChild && (e.firstChild.style.height = e.clientHeight + "px")
				}
			}

			function s(t) {
				var e = t.srcElement;
				e.firstChild && (e.firstChild.style.width = e.clientWidth + "px", e.firstChild.style.height = e.clientHeight + "px")
			}

			function l() {
				return [
					[1, 0, 0],
					[0, 1, 0],
					[0, 0, 1]
				]
			}

			function u(t, e) {
				for (var n = l(), r = 0; 3 > r; r++)
					for (var i = 0; 3 > i; i++) {
						for (var a = 0, o = 0; 3 > o; o++) a += t[r][o] * e[o][i];
						n[r][i] = a
					}
				return n
			}

			function c(t, e) {
				e.fillStyle = t.fillStyle, e.lineCap = t.lineCap, e.lineJoin = t.lineJoin, e.lineWidth = t.lineWidth, e.miterLimit = t.miterLimit, e.shadowBlur = t.shadowBlur, e.shadowColor = t.shadowColor, e.shadowOffsetX = t.shadowOffsetX, e.shadowOffsetY = t.shadowOffsetY, e.strokeStyle = t.strokeStyle, e.globalAlpha = t.globalAlpha, e.font = t.font, e.textAlign = t.textAlign, e.textBaseline = t.textBaseline, e.arcScaleX_ = t.arcScaleX_, e.arcScaleY_ = t.arcScaleY_, e.lineScale_ = t.lineScale_
			}

			function h(t) {
				var e = t.indexOf("(", 3),
					n = t.indexOf(")", e + 1),
					r = t.substring(e + 1, n).split(",");
				return (4 != r.length || "a" != t.charAt(3)) && (r[3] = 1), r
			}

			function f(t) {
				return parseFloat(t) / 100
			}

			function g(t, e, n) {
				return Math.min(n, Math.max(e, t))
			}

			function d(t) {
				var e, n, r, i, a, o;
				if (i = parseFloat(t[0]) / 360 % 360, 0 > i && i++, a = g(f(t[1]), 0, 1), o = g(f(t[2]), 0, 1), 0 == a) e = n = r = o;
				else {
					var s = .5 > o ? o * (1 + a) : o + a - o * a,
						l = 2 * o - s;
					e = p(l, s, i + 1 / 3), n = p(l, s, i), r = p(l, s, i - 1 / 3)
				}
				return "#" + Q[Math.floor(255 * e)] + Q[Math.floor(255 * n)] + Q[Math.floor(255 * r)]
			}

			function p(t, e, n) {
				return 0 > n && n++, n > 1 && n--, 1 > 6 * n ? t + 6 * (e - t) * n : 1 > 2 * n ? e : 2 > 3 * n ? t + (e - t) * (2 / 3 - n) * 6 : t
			}

			function A(t) {
				if (t in et) return et[t];
				var e, n = 1;
				if (t = String(t), "#" == t.charAt(0)) e = t;
				else if (/^rgb/.test(t)) {
					for (var r, i = h(t), e = "#", a = 0; 3 > a; a++) r = -1 != i[a].indexOf("%") ? Math.floor(255 * f(i[a])) : +i[a], e += Q[g(r, 0, 255)];
					n = +i[3]
				} else if (/^hsl/.test(t)) {
					var i = h(t);
					e = d(i), n = i[3]
				} else e = tt[t] || t;
				return et[t] = {
					color: e,
					alpha: n
				}
			}

			function C(t) {
				if (rt[t]) return rt[t];
				var e = document.createElement("div"),
					n = e.style;
				try {
					n.font = t
				} catch (r) {}
				return rt[t] = {
					style: n.fontStyle || nt.style,
					variant: n.fontVariant || nt.variant,
					weight: n.fontWeight || nt.weight,
					size: n.fontSize || nt.size,
					family: n.fontFamily || nt.family
				}
			}

			function v(t, e) {
				var n = {};
				for (var r in t) n[r] = t[r];
				var i = parseFloat(e.currentStyle.fontSize),
					a = parseFloat(t.size);
				return "number" == typeof t.size ? n.size = t.size : -1 != t.size.indexOf("px") ? n.size = a : -1 != t.size.indexOf("em") ? n.size = i * a : -1 != t.size.indexOf("%") ? n.size = i / 100 * a : -1 != t.size.indexOf("pt") ? n.size = a / .75 : n.size = i, n
			}

			function I(t) {
				return t.style + " " + t.variant + " " + t.weight + " " + t.size + "px " + t.family
			}

			function m(t) {
				return it[t] || "square"
			}

			function y(t) {
				this.m_ = l(), this.mStack_ = [], this.aStack_ = [], this.currentPath_ = [], this.strokeStyle = "#000", this.fillStyle = "#000", this.lineWidth = 1, this.lineJoin = "miter", this.lineCap = "butt", this.miterLimit = 1 * R, this.globalAlpha = 1, this.font = "10px sans-serif", this.textAlign = "left", this.textBaseline = "alphabetic", this.canvas = t, this.bg = e(t), this.xClipStyle = this.bg;
				var n = "width:" + t.clientWidth + "px;height:" + t.clientHeight + "px;overflow:hidden;position:absolute",
					r = t.ownerDocument.createElement("div");
				r.style.cssText = n, t.appendChild(r), this.element_ = r, this.arcScaleX_ = 1, this.arcScaleY_ = 1, this.lineScale_ = 1
			}

			function b(t, e, n, r) {
				t.currentPath_.push({
					type: "bezierCurveTo",
					cp1x: e.x,
					cp1y: e.y,
					cp2x: n.x,
					cp2y: n.y,
					x: r.x,
					y: r.y
				}), t.currentX_ = r.x, t.currentY_ = r.y
			}

			function _(t, e) {
				var n = A(t.strokeStyle),
					r = n.color,
					i = n.alpha * t.globalAlpha,
					a = t.lineScale_ * t.lineWidth;
				1 > a && (i *= a), e.push("<g_vml_:stroke", ' opacity="', i, '"', ' joinstyle="', t.lineJoin, '"', ' miterlimit="', t.miterLimit, '"', ' endcap="', m(t.lineCap), '"', ' weight="', a, 'px"', ' color="', r, '" />')
			}

			function x(t, e, n, r) {
				var i = t.fillStyle,
					a = t.arcScaleX_,
					o = t.arcScaleY_,
					s = r.x - n.x,
					l = r.y - n.y;
				if (i instanceof E) {
					var u = 0,
						c = {
							x: 0,
							y: 0
						},
						h = 0,
						f = 1;
					if ("gradient" == i.type_) {
						var g = i.x0_ / a,
							d = i.y0_ / o,
							p = i.x1_ / a,
							C = i.y1_ / o,
							v = w(t, g, d),
							I = w(t, p, C),
							m = I.x - v.x,
							y = I.y - v.y;
						u = 180 * Math.atan2(m, y) / Math.PI, 0 > u && (u += 360), 1e-6 > u && (u = 0)
					} else {
						var v = w(t, i.x0_, i.y0_);
						c = {
							x: (v.x - n.x) / s,
							y: (v.y - n.y) / l
						}, s /= a * R, l /= o * R;
						var b = M.max(s, l);
						h = 2 * i.r0_ / b, f = 2 * i.r1_ / b - h
					}
					var _ = i.colors_;
					_.sort(function (t, e) {
						return t.offset - e.offset
					});
					for (var x = _.length, k = _[0].color, T = _[x - 1].color, D = _[0].alpha * t.globalAlpha, P = _[x - 1].alpha * t.globalAlpha, O = [], L = 0; x > L; L++) {
						var j = _[L];
						O.push(j.offset * f + h + " " + j.color)
					}
					e.push('<g_vml_:fill type="', i.type_, '"', ' method="none" focus="100%"', ' color="', k, '"', ' color2="', T, '"', ' colors="', O.join(","), '"', ' opacity="', P, '"', ' g_o_:opacity2="', D, '"', ' angle="', u, '"', ' focusposition="', c.x, ",", c.y, '" />')
				} else if (i instanceof S) {
					if (s && l) {
						var F = -n.x,
							N = -n.y;
						e.push("<g_vml_:fill", ' position="', F / s * a * a, ",", N / l * o * o, '"', ' type="tile"', ' src="', i.src_, '" />')
					}
				} else {
					var q = A(t.fillStyle),
						B = q.color,
						V = q.alpha * t.globalAlpha;
					e.push('<g_vml_:fill color="', B, '" opacity="', V, '" />')
				}
			}

			function w(t, e, n) {
				var r = t.m_;
				return {
					x: Math.round(R * (e * r[0][0] + n * r[1][0] + r[2][0]) - B),
					y: Math.round(R * (e * r[0][1] + n * r[1][1] + r[2][1]) - B)
				}
			}

			function k(t) {
				return isFinite(t[0][0]) && isFinite(t[0][1]) && isFinite(t[1][0]) && isFinite(t[1][1]) && isFinite(t[2][0]) && isFinite(t[2][1])
			}

			function T(t, e, n) {
				if (k(e) && (t.m_ = e, n)) {
					var r = e[0][0] * e[1][1] - e[0][1] * e[1][0];
					t.lineScale_ = q(N(r))
				}
			}

			function E(t) {
				this.type_ = t, this.x0_ = 0, this.y0_ = 0, this.r0_ = 0, this.x1_ = 0, this.y1_ = 0, this.r1_ = 0, this.colors_ = []
			}

			function S(t, e) {
				switch (P(t), e) {
					case "repeat":
					case null:
					case "":
						this.repetition_ = "repeat";
						break;
					case "repeat-x":
					case "repeat-y":
					case "no-repeat":
						this.repetition_ = e;
						break;
					default:
						D("SYNTAX_ERR")
				}
				this.src_ = t.src, this.width_ = t.width, this.height_ = t.height
			}

			function D(t) {
				throw new O(t)
			}

			function P(t) {
				t && 1 == t.nodeType && "IMG" == t.tagName || D("TYPE_MISMATCH_ERR"), "complete" != t.readyState && D("INVALID_STATE_ERR")
			}

			function O(t) {
				this.code = this[t], this.message = t + ": DOM Exception " + this.code
			}
			var M = Math,
				L = M.round,
				j = M.sin,
				F = M.cos,
				N = M.abs,
				q = M.sqrt,
				R = 10,
				B = R / 2,
				V = (+navigator.userAgent.match(/MSIE ([\d.]+)?/)[1], "transparent"),
				X = '" coordsize="100,100',
				U = '" filled="t" stroked="f',
				z = '" path="',
				W = '" color="',
				H = ' type="',
				G = '" /></g_vml_:shape>',
				Y = '"><g_vml_:fill',
				$ = Array.prototype.slice;
			a(document);
			var Z = {
				init: function (t) {
					var e = t || document;
					e.createElement("canvas"), e.attachEvent("onreadystatechange", n(this.init_, this, e))
				},
				init_: function (t) {
					for (var e = t.getElementsByTagName("canvas"), n = 0; n < e.length; n++) this.initElement(e[n])
				},
				initElement: function (e) {
					if (!e.getContext) {
						e.getContext = t, a(e.ownerDocument), e.innerHTML = "", e.attachEvent("onpropertychange", o), e.attachEvent("onresize", s);
						var n = e.attributes;
						n.width && n.width.specified ? e.style.width = n.width.nodeValue + "px" : e.width = e.clientWidth, n.height && n.height.specified ? e.style.height = n.height.nodeValue + "px" : e.height = e.clientHeight
					}
					return e
				}
			};
			Z.init();
			for (var Q = [], J = 0; 16 > J; J++)
				for (var K = 0; 16 > K; K++) Q[16 * J + K] = J.toString(16) + K.toString(16);
			var tt = {
					aliceblue: "#F0F8FF",
					antiquewhite: "#FAEBD7",
					aquamarine: "#7FFFD4",
					azure: "#F0FFFF",
					beige: "#F5F5DC",
					bisque: "#FFE4C4",
					black: "#000000",
					blanchedalmond: "#FFEBCD",
					blueviolet: "#8A2BE2",
					brown: "#A52A2A",
					burlywood: "#DEB887",
					cadetblue: "#5F9EA0",
					chartreuse: "#7FFF00",
					chocolate: "#D2691E",
					coral: "#FF7F50",
					cornflowerblue: "#6495ED",
					cornsilk: "#FFF8DC",
					crimson: "#DC143C",
					cyan: "#00FFFF",
					darkblue: "#00008B",
					darkcyan: "#008B8B",
					darkgoldenrod: "#B8860B",
					darkgray: "#A9A9A9",
					darkgreen: "#006400",
					darkgrey: "#A9A9A9",
					darkkhaki: "#BDB76B",
					darkmagenta: "#8B008B",
					darkolivegreen: "#556B2F",
					darkorange: "#FF8C00",
					darkorchid: "#9932CC",
					darkred: "#8B0000",
					darksalmon: "#E9967A",
					darkseagreen: "#8FBC8F",
					darkslateblue: "#483D8B",
					darkslategray: "#2F4F4F",
					darkslategrey: "#2F4F4F",
					darkturquoise: "#00CED1",
					darkviolet: "#9400D3",
					deeppink: "#FF1493",
					deepskyblue: "#00BFFF",
					dimgray: "#696969",
					dimgrey: "#696969",
					dodgerblue: "#1E90FF",
					firebrick: "#B22222",
					floralwhite: "#FFFAF0",
					forestgreen: "#228B22",
					gainsboro: "#DCDCDC",
					ghostwhite: "#F8F8FF",
					gold: "#FFD700",
					goldenrod: "#DAA520",
					grey: "#808080",
					greenyellow: "#ADFF2F",
					honeydew: "#F0FFF0",
					hotpink: "#FF69B4",
					indianred: "#CD5C5C",
					indigo: "#4B0082",
					ivory: "#FFFFF0",
					khaki: "#F0E68C",
					lavender: "#E6E6FA",
					lavenderblush: "#FFF0F5",
					lawngreen: "#7CFC00",
					lemonchiffon: "#FFFACD",
					lightblue: "#ADD8E6",
					lightcoral: "#F08080",
					lightcyan: "#E0FFFF",
					lightgoldenrodyellow: "#FAFAD2",
					lightgreen: "#90EE90",
					lightgrey: "#D3D3D3",
					lightpink: "#FFB6C1",
					lightsalmon: "#FFA07A",
					lightseagreen: "#20B2AA",
					lightskyblue: "#87CEFA",
					lightslategray: "#778899",
					lightslategrey: "#778899",
					lightsteelblue: "#B0C4DE",
					lightyellow: "#FFFFE0",
					limegreen: "#32CD32",
					linen: "#FAF0E6",
					magenta: "#FF00FF",
					mediumaquamarine: "#66CDAA",
					mediumblue: "#0000CD",
					mediumorchid: "#BA55D3",
					mediumpurple: "#9370DB",
					mediumseagreen: "#3CB371",
					mediumslateblue: "#7B68EE",
					mediumspringgreen: "#00FA9A",
					mediumturquoise: "#48D1CC",
					mediumvioletred: "#C71585",
					midnightblue: "#191970",
					mintcream: "#F5FFFA",
					mistyrose: "#FFE4E1",
					moccasin: "#FFE4B5",
					navajowhite: "#FFDEAD",
					oldlace: "#FDF5E6",
					olivedrab: "#6B8E23",
					orange: "#FFA500",
					orangered: "#FF4500",
					orchid: "#DA70D6",
					palegoldenrod: "#EEE8AA",
					palegreen: "#98FB98",
					paleturquoise: "#AFEEEE",
					palevioletred: "#DB7093",
					papayawhip: "#FFEFD5",
					peachpuff: "#FFDAB9",
					peru: "#CD853F",
					pink: "#FFC0CB",
					plum: "#DDA0DD",
					powderblue: "#B0E0E6",
					rosybrown: "#BC8F8F",
					royalblue: "#4169E1",
					saddlebrown: "#8B4513",
					salmon: "#FA8072",
					sandybrown: "#F4A460",
					seagreen: "#2E8B57",
					seashell: "#FFF5EE",
					sienna: "#A0522D",
					skyblue: "#87CEEB",
					slateblue: "#6A5ACD",
					slategray: "#708090",
					slategrey: "#708090",
					snow: "#FFFAFA",
					springgreen: "#00FF7F",
					steelblue: "#4682B4",
					tan: "#D2B48C",
					thistle: "#D8BFD8",
					tomato: "#FF6347",
					turquoise: "#40E0D0",
					violet: "#EE82EE",
					wheat: "#F5DEB3",
					whitesmoke: "#F5F5F5",
					yellowgreen: "#9ACD32"
				},
				et = {},
				nt = {
					style: "normal",
					variant: "normal",
					weight: "normal",
					size: 10,
					family: "sans-serif"
				},
				rt = {},
				it = {
					butt: "flat",
					round: "round"
				},
				at = y.prototype;
			at.clearRect = function () {
				this.textMeasureEl_ && (this.textMeasureEl_.removeNode(!0), this.textMeasureEl_ = null), this.element_.innerHTML = ""
			}, at.beginPath = function () {
				this.currentPath_ = []
			}, at.moveTo = function (t, e) {
				var n = w(this, t, e);
				this.currentPath_.push({
					type: "moveTo",
					x: n.x,
					y: n.y
				}), this.currentX_ = n.x, this.currentY_ = n.y
			}, at.lineTo = function (t, e) {
				var n = w(this, t, e);
				this.currentPath_.push({
					type: "lineTo",
					x: n.x,
					y: n.y
				}), this.currentX_ = n.x, this.currentY_ = n.y
			}, at.bezierCurveTo = function (t, e, n, r, i, a) {
				var o = w(this, i, a),
					s = w(this, t, e),
					l = w(this, n, r);
				b(this, s, l, o)
			}, at.quadraticCurveTo = function (t, e, n, r) {
				var i = w(this, t, e),
					a = w(this, n, r),
					o = {
						x: this.currentX_ + 2 / 3 * (i.x - this.currentX_),
						y: this.currentY_ + 2 / 3 * (i.y - this.currentY_)
					},
					s = {
						x: o.x + (a.x - this.currentX_) / 3,
						y: o.y + (a.y - this.currentY_) / 3
					};
				b(this, o, s, a)
			}, at.arc = function (t, e, n, r, i, a) {
				n *= R;
				var o = a ? "at" : "wa",
					s = t + F(r) * n - B,
					l = e + j(r) * n - B,
					u = t + F(i) * n - B,
					c = e + j(i) * n - B;
				a || (s.toExponential(5) === u.toExponential(5) && (s += .125), l.toExponential(5) === c.toExponential(5) && (l += .125));
				var h = w(this, t, e),
					f = w(this, s, l),
					g = w(this, u, c);
				this.currentPath_.push({
					type: o,
					x: h.x,
					y: h.y,
					radius: n,
					xStart: f.x,
					yStart: f.y,
					xEnd: g.x,
					yEnd: g.y
				})
			}, at.rect = function (t, e, n, r) {
				this.moveTo(t, e), this.lineTo(t + n, e), this.lineTo(t + n, e + r), this.lineTo(t, e + r), this.closePath()
			}, at.strokeRect = function (t, e, n, r) {
				var i = this.currentPath_;
				this.beginPath(), this.moveTo(t, e), this.lineTo(t + n, e), this.lineTo(t + n, e + r), this.lineTo(t, e + r), this.closePath(), this.stroke(), this.currentPath_ = i
			}, at.fillRect = function (t, e, n, r) {
				var i = this.currentPath_;
				this.beginPath(), this.moveTo(t, e), this.lineTo(t + n, e), this.lineTo(t + n, e + r), this.lineTo(t, e + r), this.closePath(), this.fill(), this.currentPath_ = i
			}, at.createLinearGradient = function (t, e, n, r) {
				var i = new E("gradient");
				return i.x0_ = t, i.y0_ = e, i.x1_ = n, i.y1_ = r, i
			}, at.createRadialGradient = function (t, e, n, r, i, a) {
				var o = new E("gradientradial");
				return o.x0_ = t, o.y0_ = e, o.r0_ = n, o.x1_ = r, o.y1_ = i, o.r1_ = a, o
			}, at.drawImage = function (t, e) {
				var n, r, i, a, o, s, l, u, c = t.runtimeStyle.width,
					h = t.runtimeStyle.height;
				t.runtimeStyle.width = "auto", t.runtimeStyle.height = "auto";
				var f = t.width,
					g = t.height;
				if (t.runtimeStyle.width = c, t.runtimeStyle.height = h, 3 == arguments.length) n = arguments[1], r = arguments[2], o = s = 0, l = i = f, u = a = g;
				else if (5 == arguments.length) n = arguments[1], r = arguments[2], i = arguments[3], a = arguments[4], o = s = 0, l = f, u = g;
				else {
					if (9 != arguments.length) throw Error("Invalid number of arguments");
					o = arguments[1], s = arguments[2], l = arguments[3], u = arguments[4], n = arguments[5], r = arguments[6], i = arguments[7], a = arguments[8]
				}
				var d = w(this, n, r),
					p = [],
					A = 10,
					C = 10;
				if (p.push(" <g_vml_:group", ' coordsize="', R * A, ",", R * C, '"', ' coordorigin="0,0"', ' style="width:', A, "px;height:", C, "px;position:absolute;"), 1 != this.m_[0][0] || this.m_[0][1] || 1 != this.m_[1][1] || this.m_[1][0]) {
					var v = [];
					v.push("M11=", this.m_[0][0], ",", "M12=", this.m_[1][0], ",", "M21=", this.m_[0][1], ",", "M22=", this.m_[1][1], ",", "Dx=", L(d.x / R), ",", "Dy=", L(d.y / R), "");
					var I = d,
						m = w(this, n + i, r),
						y = w(this, n, r + a),
						b = w(this, n + i, r + a);
					I.x = M.max(I.x, m.x, y.x, b.x), I.y = M.max(I.y, m.y, y.y, b.y), p.push("padding:0 ", L(I.x / R), "px ", L(I.y / R), "px 0;filter:progid:DXImageTransform.Microsoft.Matrix(", v.join(""), ", sizingmethod='clip');")
				} else p.push("top:", L(d.y / R), "px;left:", L(d.x / R), "px;");
				p.push(' ">', '<g_vml_:image src="', t.src, '"', ' style="width:', R * i, "px;", " height:", R * a, 'px"', ' cropleft="', o / f, '"', ' croptop="', s / g, '"', ' cropright="', (f - o - l) / f, '"', ' cropbottom="', (g - s - u) / g, '"', " />", "</g_vml_:group>"), this.element_.insertAdjacentHTML("BeforeEnd", p.join(""))
			}, at.stroke = function (t) {
				var e = [],
					n = 10,
					r = 10;
				e.push("<g_vml_:shape", ' filled="', !!t, '"', ' style="position:absolute;width:', n, "px;height:", r, 'px;"', ' coordorigin="0,0"', ' coordsize="', R * n, ",", R * r, '"', ' stroked="', !t, '"', ' path="');
				for (var i = {
						x: null,
						y: null
					}, a = {
						x: null,
						y: null
					}, o = 0; o < this.currentPath_.length; o++) {
					var s, l = this.currentPath_[o];
					switch (l.type) {
						case "moveTo":
							s = l, e.push(" m ", L(l.x), ",", L(l.y));
							break;
						case "lineTo":
							e.push(" l ", L(l.x), ",", L(l.y));
							break;
						case "close":
							e.push(" x "), l = null;
							break;
						case "bezierCurveTo":
							e.push(" c ", L(l.cp1x), ",", L(l.cp1y), ",", L(l.cp2x), ",", L(l.cp2y), ",", L(l.x), ",", L(l.y));
							break;
						case "at":
						case "wa":
							e.push(" ", l.type, " ", L(l.x - this.arcScaleX_ * l.radius), ",", L(l.y - this.arcScaleY_ * l.radius), " ", L(l.x + this.arcScaleX_ * l.radius), ",", L(l.y + this.arcScaleY_ * l.radius), " ", L(l.xStart), ",", L(l.yStart), " ", L(l.xEnd), ",", L(l.yEnd))
					}
					l && ((null == i.x || l.x < i.x) && (i.x = l.x), (null == a.x || l.x > a.x) && (a.x = l.x), (null == i.y || l.y < i.y) && (i.y = l.y), (null == a.y || l.y > a.y) && (a.y = l.y))
				}
				e.push(' ">'), t ? x(this, e, i, a) : _(this, e), e.push("</g_vml_:shape>"), this.element_.insertAdjacentHTML("beforeEnd", this._clippy(e.join("")))
			}, at.fill = function () {
				this.stroke(!0)
			}, at.closePath = function () {
				this.currentPath_.push({
					type: "close"
				})
			}, at.save = function () {
				var t = {};
				c(this, t), this.aStack_.push(t), this.mStack_.push(this.m_), this.m_ = u(l(), this.m_)
			}, at.restore = function () {
				this.aStack_.length && (c(this.aStack_.pop(), this), this.m_ = this.mStack_.pop())
			}, at.translate = function (t, e) {
				var n = [
					[1, 0, 0],
					[0, 1, 0],
					[t, e, 1]
				];
				T(this, u(n, this.m_), !1)
			}, at.rotate = function (t) {
				var e = F(t),
					n = j(t),
					r = [
						[e, n, 0],
						[-n, e, 0],
						[0, 0, 1]
					];
				T(this, u(r, this.m_), !1)
			}, at.scale = function (t, e) {
				this.arcScaleX_ *= t, this.arcScaleY_ *= e;
				var n = [
					[t, 0, 0],
					[0, e, 0],
					[0, 0, 1]
				];
				T(this, u(n, this.m_), !0)
			}, at.transform = function (t, e, n, r, i, a) {
				var o = [
					[t, e, 0],
					[n, r, 0],
					[i, a, 1]
				];
				T(this, u(o, this.m_), !0)
			}, at.setTransform = function (t, e, n, r, i, a) {
				var o = [
					[t, e, 0],
					[n, r, 0],
					[i, a, 1]
				];
				T(this, o, !0)
			}, at.drawText_ = function (t, e, n, i, a) {
				var o = this.m_,
					s = 1e3,
					l = 0,
					u = s,
					c = {
						x: 0,
						y: 0
					},
					h = [],
					f = v(C(this.font), this.element_),
					g = I(f),
					d = this.element_.currentStyle,
					p = this.textAlign.toLowerCase();
				switch (p) {
					case "left":
					case "center":
					case "right":
						break;
					case "end":
						p = "ltr" == d.direction ? "right" : "left";
						break;
					case "start":
						p = "rtl" == d.direction ? "right" : "left";
						break;
					default:
						p = "left"
				}
				switch (this.textBaseline) {
					case "hanging":
					case "top":
						c.y = f.size / 1.75;
						break;
					case "middle":
						break;
					default:
					case null:
					case "alphabetic":
					case "ideographic":
					case "bottom":
						c.y = -f.size / 2.25
				}
				switch (p) {
					case "right":
						l = s, u = .05;
						break;
					case "center":
						l = u = s / 2
				}
				var A = w(this, e + c.x, n + c.y);
				h.push('<g_vml_:line from="', -l, ' 0" to="', u, ' 0.05" ', ' coordsize="100 100" coordorigin="0 0"', ' filled="', !a, '" stroked="', !!a, '" style="position:absolute;width:1px;height:1px;">'), a ? _(this, h) : x(this, h, {
					x: -l,
					y: 0
				}, {
					x: u,
					y: f.size
				});
				var m = o[0][0].toFixed(3) + "," + o[1][0].toFixed(3) + "," + o[0][1].toFixed(3) + "," + o[1][1].toFixed(3) + ",0,0";
				if (i) {
					var y = this.measureText(t).width;
					if (y > i) {
						var b = i / y;
						m = (o[0][0] * b).toFixed(3) + "," + o[1][0].toFixed(3) + "," + (o[0][1] * b).toFixed(3) + "," + o[1][1].toFixed(3) + ",0,0"
					}
				}
				var k = L(A.x / R) + "," + L(A.y / R);
				h.push('<g_vml_:skew on="t" matrix="', m, '" ', ' offset="', k, '" origin="', l, ' 0" />', '<g_vml_:path textpathok="true" />', '<g_vml_:textpath on="true" string="', r(t), '" style="v-text-align:', p, ";font:", r(g), '" /></g_vml_:line>'), this.element_.insertAdjacentHTML("beforeEnd", h.join(""))
			}, at.fillText = function (t, e, n, r) {
				this.drawText_(t, e, n, r, !1)
			}, at.strokeText = function (t, e, n, r) {
				this.drawText_(t, e, n, r, !0)
			}, at.measureText = function (t) {
				if (!this.textMeasureEl_) {
					var e = '<span style="position:absolute;top:-20000px;left:0;padding:0;margin:0;border:none;white-space:pre;"></span>';
					this.element_.insertAdjacentHTML("beforeEnd", e), this.textMeasureEl_ = this.element_.lastChild
				}
				var n = this.element_.ownerDocument;
				return this.textMeasureEl_.innerHTML = "", this.textMeasureEl_.style.font = this.font, this.textMeasureEl_.appendChild(n.createTextNode(t)), {
					width: this.textMeasureEl_.offsetWidth
				}
			}, at.clip = function () {
				var t = this.currentPath_;
				this._clipRect = this._rect(0, 0, this.canvas.width, this.canvas.height), this._clipPath = this._clipRect + " x " + this._joinPath(t)
			}, at._clippy = function (t) {
				return this._clipPath ? [t, '<g_vml_:shape style="position:absolute;width:10px;height:10px;', U, X, z, this._clipPath, Y, H, "solid", W, "#000", G].join("") : t
			}, at._joinPath = function (t) {
				for (var e = "", n = 0, r = t.length; r > n; n++) {
					var i = t[n];
					switch (i.type) {
						case "at":
						case "wa":
							var a = this.arcScaleX_ * i.radius,
								o = this.arcScaleY_ * i.radius;
							e += [i.type, i.x - a, i.y - o, i.x + a, i.y + o, i.xStart, i.yStart, i.xEnd, i.yEnd].join(" ");
							break;
						case "moveTo":
							e += ["m", i.x, i.y, ""].join(" ");
							break;
						case "lineTo":
							e += ["l", i.x, i.y, ""].join(" ")
					}
				}
				return e
			}, at._rect = function (t, e, n, r) {
				var i = this._map(t, e),
					a = this._map(t + n, e),
					o = this._map(t + n, e + r),
					s = this._map(t, e + r);
				return [" m", i.x, " ", i.y, " l", a.x, " ", a.y, " l", o.x, " ", o.y, " l", s.x, " ", s.y, " x"].join("")
			}, at._map = function (t, e) {
				var n = this.m_;
				return {
					x: L((t * n[0][0] + e * n[0][1] + n[0][2]) * R - B),
					y: L((t * n[1][0] + e * n[1][1] + n[1][2]) * R - B)
				}
			}, at.arcTo = function () {}, at.createPattern = function (t, e) {
				return new S(t, e)
			}, E.prototype.addColorStop = function (t, e) {
				e = A(e), this.colors_.push({
					offset: t,
					color: e.color,
					alpha: e.alpha
				})
			};
			var ot = O.prototype = new Error;
			ot.INDEX_SIZE_ERR = 1, ot.DOMSTRING_SIZE_ERR = 2, ot.HIERARCHY_REQUEST_ERR = 3, ot.WRONG_DOCUMENT_ERR = 4, ot.INVALID_CHARACTER_ERR = 5, ot.NO_DATA_ALLOWED_ERR = 6, ot.NO_MODIFICATION_ALLOWED_ERR = 7, ot.NOT_FOUND_ERR = 8, ot.NOT_SUPPORTED_ERR = 9, ot.INUSE_ATTRIBUTE_ERR = 10, ot.INVALID_STATE_ERR = 11, ot.SYNTAX_ERR = 12, ot.INVALID_MODIFICATION_ERR = 13, ot.NAMESPACE_ERR = 14, ot.INVALID_ACCESS_ERR = 15, ot.VALIDATION_ERR = 16, ot.TYPE_MISMATCH_ERR = 17, G_vmlCanvasManager = Z, CanvasRenderingContext2D = y, CanvasGradient = E, CanvasPattern = S, DOMException = O
		}()
	}, function (t, e, n) {
		(function (r, i) {
			"use strict";

			function a(t) {
				return t && t.__esModule ? t : {
					"default": t
				}
			}

			function o(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var s = function () {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function (e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}(),
				l = n(8),
				u = a(l),
				c = n(10),
				h = a(c),
				f = n(9),
				g = a(f),
				d = n(30),
				p = a(d),
				A = n(14),
				C = a(A);
			n(114);
			var v = n(18);
			n(118);
			var I = function () {
				function t(e) {
					o(this, t);
					var n = C["default"].BOSS_MONITOR;
					v.init({
						BossId: n,
						Pwd: 0
					}), v.monitor(n, {
						name: e.proj
					}), this._init().attr(e)
				}
				return s(t, [{
					key: "_init",
					value: function () {
						return this.config = {}, this
					}
				}, {
					key: "draw",
					value: function () {
						return this._draw(), this
					}
				}, {
					key: "_draw",
					value: function () {
						this.config.outer && this.config.symbol && (this._beforeDraw(), this._new(), this.show())
					}
				}, {
					key: "destroy",
					value: function () {
						return this.painter && this.painter.destroy(), g["default"]._clearData(), "all clear!"
					}
				}, {
					key: "renew",
					value: function (t) {
						return r(this.config.outer).show(), this.set("symbol", t), this._beforeDraw(), this._renew(), this.show(), this
					}
				}, {
					key: "setQtData",
					value: function (t, e) {
						this.painter && this.painter.setQtData(t, e)
					}
				}, {
					key: "repaint",
					value: function () {
						this._beforeDraw(), this.painter._init(), this.painter.repaint()
					}
				}, {
					key: "refresh",
					value: function () {
						this.show()
					}
				}, {
					key: "show",
					value: function () {
						return this.painter && this.painter.show(), this
					}
				}, {
					key: "hide",
					value: function () {
						this.painter && this.painter.hide()
					}
				}, {
					key: "compare",
					value: function (t) {
						var e = i.cloneDeep(t),
							n = this.config;
						g["default"].cfg(n.symbol, {
							outer: n.outer,
							cmpList: e
						}), this.painter.show()
					}
				}, {
					key: "setColorize",
					value: function (t) {
						this._setColorize(t), g["default"].cfg(this.config.symbol, {
							outer: this.config.outer,
							color: t
						}), this.painter.repaint()
					}
				}, {
					key: "_setPainter",
					value: function (t) {
						return t && this.set("symbol", t), this._beforeDraw(), this._new(), this
					}
				}, {
					key: "_resetPainter",
					value: function (t) {
						return this.set("symbol", t), this._beforeDraw(), this._renew(), this
					}
				}, {
					key: "_beforeDraw",
					value: function () {
						var t = this.config,
							e = t.outer;
						"string" == typeof e && (t.outer = document.getElementById(e)), this._setColorize(t.color), g["default"].cfg(t.symbol, t)
					}
				}, {
					key: "_new",
					value: function () {
						var t = this.config;
						this.painter = this.painter || (new u["default"]).setSymbol(t.symbol, t.outer.id)
					}
				}, {
					key: "_renew",
					value: function () {
						var t = this.config;
						this.painter._destroyScene(), this.painter.setSymbol(t.symbol, t.outer.id)
					}
				}, {
					key: "_setColorize",
					value: function (t) {
						t ? p["default"].HZLD = p["default"]["_" + t] : p["default"].HZLD = p["default"]._HZLD
					}
				}, {
					key: "attr",
					value: function () {
						for (var t = this, e = arguments.length, n = Array(e), r = 0; e > r; r++) n[r] = arguments[r];
						n = h["default"].params(n);
						var i = n.object,
							a = n.string;
						if (i && i.forEach(function (e) {
								for (var n in e) t.set(n, e[n])
							}), a)
							for (var o = 0, s = 2 * Math.floor(a.length / 2); s > o; o += 2) this.set(a[o], a[o + 1]);
						return this
					}
				}, {
					key: "set",
					value: function (t, e) {
						var n = this.config[t];
						return n && "object" == typeof n && "object" == typeof e ? i.extend(n, i.cloneDeep(e)) : "object" == typeof e ? this.config[t] = i.cloneDeep(e) : this.config[t] = e, this
					}
				}]), t
			}();
			e["default"] = I, window.Alpine = I, t.exports = e["default"]
		}).call(e, n(5), n(6))
	}, function (t, e, n) {
		var r, i;
		/*!
		 * jQuery JavaScript Library v1.11.3
		 * http://jquery.com/
		 *
		 * Includes Sizzle.js
		 * http://sizzlejs.com/
		 *
		 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
		 * Released under the MIT license
		 * http://jquery.org/license
		 *
		 * Date: 2015-04-28T16:19Z
		 */
		! function (e, n) {
			"object" == typeof t && "object" == typeof t.exports ? t.exports = e.document ? n(e, !0) : function (t) {
				if (!t.document) throw new Error("jQuery requires a window with a document");
				return n(t)
			} : n(e)
		}("undefined" != typeof window ? window : this, function (n, a) {
			function o(t) {
				var e = "length" in t && t.length,
					n = lt.type(t);
				return "function" === n || lt.isWindow(t) ? !1 : 1 === t.nodeType && e ? !0 : "array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t
			}

			function s(t, e, n) {
				if (lt.isFunction(e)) return lt.grep(t, function (t, r) {
					return !!e.call(t, r, t) !== n
				});
				if (e.nodeType) return lt.grep(t, function (t) {
					return t === e !== n
				});
				if ("string" == typeof e) {
					if (At.test(e)) return lt.filter(e, t, n);
					e = lt.filter(e, t)
				}
				return lt.grep(t, function (t) {
					return lt.inArray(t, e) >= 0 !== n
				})
			}

			function l(t, e) {
				do t = t[e]; while (t && 1 !== t.nodeType);
				return t
			}

			function u(t) {
				var e = xt[t] = {};
				return lt.each(t.match(_t) || [], function (t, n) {
					e[n] = !0
				}), e
			}

			function c() {
				vt.addEventListener ? (vt.removeEventListener("DOMContentLoaded", h, !1), n.removeEventListener("load", h, !1)) : (vt.detachEvent("onreadystatechange", h), n.detachEvent("onload", h))
			}

			function h() {
				(vt.addEventListener || "load" === event.type || "complete" === vt.readyState) && (c(), lt.ready())
			}

			function f(t, e, n) {
				if (void 0 === n && 1 === t.nodeType) {
					var r = "data-" + e.replace(St, "-$1").toLowerCase();
					if (n = t.getAttribute(r), "string" == typeof n) {
						try {
							n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Et.test(n) ? lt.parseJSON(n) : n
						} catch (i) {}
						lt.data(t, e, n)
					} else n = void 0
				}
				return n
			}

			function g(t) {
				var e;
				for (e in t)
					if (("data" !== e || !lt.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
				return !0
			}

			function d(t, e, n, r) {
				if (lt.acceptData(t)) {
					var i, a, o = lt.expando,
						s = t.nodeType,
						l = s ? lt.cache : t,
						u = s ? t[o] : t[o] && o;
					if (u && l[u] && (r || l[u].data) || void 0 !== n || "string" != typeof e) return u || (u = s ? t[o] = J.pop() || lt.guid++ : o), l[u] || (l[u] = s ? {} : {
						toJSON: lt.noop
					}), ("object" == typeof e || "function" == typeof e) && (r ? l[u] = lt.extend(l[u], e) : l[u].data = lt.extend(l[u].data, e)), a = l[u], r || (a.data || (a.data = {}), a = a.data), void 0 !== n && (a[lt.camelCase(e)] = n), "string" == typeof e ? (i = a[e], null == i && (i = a[lt.camelCase(e)])) : i = a, i
				}
			}

			function p(t, e, n) {
				if (lt.acceptData(t)) {
					var r, i, a = t.nodeType,
						o = a ? lt.cache : t,
						s = a ? t[lt.expando] : lt.expando;
					if (o[s]) {
						if (e && (r = n ? o[s] : o[s].data)) {
							lt.isArray(e) ? e = e.concat(lt.map(e, lt.camelCase)) : e in r ? e = [e] : (e = lt.camelCase(e), e = e in r ? [e] : e.split(" ")), i = e.length;
							for (; i--;) delete r[e[i]];
							if (n ? !g(r) : !lt.isEmptyObject(r)) return
						}(n || (delete o[s].data, g(o[s]))) && (a ? lt.cleanData([t], !0) : ot.deleteExpando || o != o.window ? delete o[s] : o[s] = null)
					}
				}
			}

			function A() {
				return !0
			}

			function C() {
				return !1
			}

			function v() {
				try {
					return vt.activeElement
				} catch (t) {}
			}

			function I(t) {
				var e = Bt.split("|"),
					n = t.createDocumentFragment();
				if (n.createElement)
					for (; e.length;) n.createElement(e.pop());
				return n
			}

			function m(t, e) {
				var n, r, i = 0,
					a = typeof t.getElementsByTagName !== Tt ? t.getElementsByTagName(e || "*") : typeof t.querySelectorAll !== Tt ? t.querySelectorAll(e || "*") : void 0;
				if (!a)
					for (a = [], n = t.childNodes || t; null != (r = n[i]); i++) !e || lt.nodeName(r, e) ? a.push(r) : lt.merge(a, m(r, e));
				return void 0 === e || e && lt.nodeName(t, e) ? lt.merge([t], a) : a
			}

			function y(t) {
				Lt.test(t.type) && (t.defaultChecked = t.checked)
			}

			function b(t, e) {
				return lt.nodeName(t, "table") && lt.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
			}

			function _(t) {
				return t.type = (null !== lt.find.attr(t, "type")) + "/" + t.type, t
			}

			function x(t) {
				var e = Qt.exec(t.type);
				return e ? t.type = e[1] : t.removeAttribute("type"), t
			}

			function w(t, e) {
				for (var n, r = 0; null != (n = t[r]); r++) lt._data(n, "globalEval", !e || lt._data(e[r], "globalEval"))
			}

			function k(t, e) {
				if (1 === e.nodeType && lt.hasData(t)) {
					var n, r, i, a = lt._data(t),
						o = lt._data(e, a),
						s = a.events;
					if (s) {
						delete o.handle, o.events = {};
						for (n in s)
							for (r = 0, i = s[n].length; i > r; r++) lt.event.add(e, n, s[n][r])
					}
					o.data && (o.data = lt.extend({}, o.data))
				}
			}

			function T(t, e) {
				var n, r, i;
				if (1 === e.nodeType) {
					if (n = e.nodeName.toLowerCase(), !ot.noCloneEvent && e[lt.expando]) {
						i = lt._data(e);
						for (r in i.events) lt.removeEvent(e, r, i.handle);
						e.removeAttribute(lt.expando)
					}
					"script" === n && e.text !== t.text ? (_(e).text = t.text, x(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), ot.html5Clone && t.innerHTML && !lt.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && Lt.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : ("input" === n || "textarea" === n) && (e.defaultValue = t.defaultValue)
				}
			}

			function E(t, e) {
				var r, i = lt(e.createElement(t)).appendTo(e.body),
					a = n.getDefaultComputedStyle && (r = n.getDefaultComputedStyle(i[0])) ? r.display : lt.css(i[0], "display");
				return i.detach(), a
			}

			function S(t) {
				var e = vt,
					n = re[t];
				return n || (n = E(t, e), "none" !== n && n || (ne = (ne || lt("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement), e = (ne[0].contentWindow || ne[0].contentDocument).document, e.write(), e.close(), n = E(t, e), ne.detach()), re[t] = n), n
			}

			function D(t, e) {
				return {
					get: function () {
						var n = t();
						if (null != n) return n ? void delete this.get : (this.get = e).apply(this, arguments)
					}
				}
			}

			function P(t, e) {
				if (e in t) return e;
				for (var n = e.charAt(0).toUpperCase() + e.slice(1), r = e, i = Ae.length; i--;)
					if (e = Ae[i] + n, e in t) return e;
				return r
			}

			function O(t, e) {
				for (var n, r, i, a = [], o = 0, s = t.length; s > o; o++) r = t[o], r.style && (a[o] = lt._data(r, "olddisplay"), n = r.style.display, e ? (a[o] || "none" !== n || (r.style.display = ""), "" === r.style.display && Ot(r) && (a[o] = lt._data(r, "olddisplay", S(r.nodeName)))) : (i = Ot(r), (n && "none" !== n || !i) && lt._data(r, "olddisplay", i ? n : lt.css(r, "display"))));
				for (o = 0; s > o; o++) r = t[o], r.style && (e && "none" !== r.style.display && "" !== r.style.display || (r.style.display = e ? a[o] || "" : "none"));
				return t
			}

			function M(t, e, n) {
				var r = fe.exec(e);
				return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : e
			}

			function L(t, e, n, r, i) {
				for (var a = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, o = 0; 4 > a; a += 2) "margin" === n && (o += lt.css(t, n + Pt[a], !0, i)), r ? ("content" === n && (o -= lt.css(t, "padding" + Pt[a], !0, i)), "margin" !== n && (o -= lt.css(t, "border" + Pt[a] + "Width", !0, i))) : (o += lt.css(t, "padding" + Pt[a], !0, i), "padding" !== n && (o += lt.css(t, "border" + Pt[a] + "Width", !0, i)));
				return o
			}

			function j(t, e, n) {
				var r = !0,
					i = "width" === e ? t.offsetWidth : t.offsetHeight,
					a = ie(t),
					o = ot.boxSizing && "border-box" === lt.css(t, "boxSizing", !1, a);
				if (0 >= i || null == i) {
					if (i = ae(t, e, a), (0 > i || null == i) && (i = t.style[e]), se.test(i)) return i;
					r = o && (ot.boxSizingReliable() || i === t.style[e]), i = parseFloat(i) || 0
				}
				return i + L(t, e, n || (o ? "border" : "content"), r, a) + "px"
			}

			function F(t, e, n, r, i) {
				return new F.prototype.init(t, e, n, r, i)
			}

			function N() {
				return setTimeout(function () {
					Ce = void 0
				}), Ce = lt.now()
			}

			function q(t, e) {
				var n, r = {
						height: t
					},
					i = 0;
				for (e = e ? 1 : 0; 4 > i; i += 2 - e) n = Pt[i], r["margin" + n] = r["padding" + n] = t;
				return e && (r.opacity = r.width = t), r
			}

			function R(t, e, n) {
				for (var r, i = (_e[e] || []).concat(_e["*"]), a = 0, o = i.length; o > a; a++)
					if (r = i[a].call(n, e, t)) return r
			}

			function B(t, e, n) {
				var r, i, a, o, s, l, u, c, h = this,
					f = {},
					g = t.style,
					d = t.nodeType && Ot(t),
					p = lt._data(t, "fxshow");
				n.queue || (s = lt._queueHooks(t, "fx"), null == s.unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
					s.unqueued || l()
				}), s.unqueued++, h.always(function () {
					h.always(function () {
						s.unqueued--, lt.queue(t, "fx").length || s.empty.fire()
					})
				})), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [g.overflow, g.overflowX, g.overflowY], u = lt.css(t, "display"), c = "none" === u ? lt._data(t, "olddisplay") || S(t.nodeName) : u, "inline" === c && "none" === lt.css(t, "float") && (ot.inlineBlockNeedsLayout && "inline" !== S(t.nodeName) ? g.zoom = 1 : g.display = "inline-block")), n.overflow && (g.overflow = "hidden", ot.shrinkWrapBlocks() || h.always(function () {
					g.overflow = n.overflow[0], g.overflowX = n.overflow[1], g.overflowY = n.overflow[2]
				}));
				for (r in e)
					if (i = e[r], Ie.exec(i)) {
						if (delete e[r], a = a || "toggle" === i, i === (d ? "hide" : "show")) {
							if ("show" !== i || !p || void 0 === p[r]) continue;
							d = !0
						}
						f[r] = p && p[r] || lt.style(t, r)
					} else u = void 0;
				if (lt.isEmptyObject(f)) "inline" === ("none" === u ? S(t.nodeName) : u) && (g.display = u);
				else {
					p ? "hidden" in p && (d = p.hidden) : p = lt._data(t, "fxshow", {}), a && (p.hidden = !d), d ? lt(t).show() : h.done(function () {
						lt(t).hide()
					}), h.done(function () {
						var e;
						lt._removeData(t, "fxshow");
						for (e in f) lt.style(t, e, f[e])
					});
					for (r in f) o = R(d ? p[r] : 0, r, h), r in p || (p[r] = o.start, d && (o.end = o.start, o.start = "width" === r || "height" === r ? 1 : 0))
				}
			}

			function V(t, e) {
				var n, r, i, a, o;
				for (n in t)
					if (r = lt.camelCase(n), i = e[r], a = t[n], lt.isArray(a) && (i = a[1], a = t[n] = a[0]), n !== r && (t[r] = a, delete t[n]), o = lt.cssHooks[r], o && "expand" in o) {
						a = o.expand(a), delete t[r];
						for (n in a) n in t || (t[n] = a[n], e[n] = i)
					} else e[r] = i
			}

			function X(t, e, n) {
				var r, i, a = 0,
					o = be.length,
					s = lt.Deferred().always(function () {
						delete l.elem
					}),
					l = function () {
						if (i) return !1;
						for (var e = Ce || N(), n = Math.max(0, u.startTime + u.duration - e), r = n / u.duration || 0, a = 1 - r, o = 0, l = u.tweens.length; l > o; o++) u.tweens[o].run(a);
						return s.notifyWith(t, [u, a, n]), 1 > a && l ? n : (s.resolveWith(t, [u]), !1)
					},
					u = s.promise({
						elem: t,
						props: lt.extend({}, e),
						opts: lt.extend(!0, {
							specialEasing: {}
						}, n),
						originalProperties: e,
						originalOptions: n,
						startTime: Ce || N(),
						duration: n.duration,
						tweens: [],
						createTween: function (e, n) {
							var r = lt.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
							return u.tweens.push(r), r
						},
						stop: function (e) {
							var n = 0,
								r = e ? u.tweens.length : 0;
							if (i) return this;
							for (i = !0; r > n; n++) u.tweens[n].run(1);
							return e ? s.resolveWith(t, [u, e]) : s.rejectWith(t, [u, e]), this
						}
					}),
					c = u.props;
				for (V(c, u.opts.specialEasing); o > a; a++)
					if (r = be[a].call(u, t, c, u.opts)) return r;
				return lt.map(c, R, u), lt.isFunction(u.opts.start) && u.opts.start.call(t, u), lt.fx.timer(lt.extend(l, {
					elem: t,
					anim: u,
					queue: u.opts.queue
				})), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
			}

			function U(t) {
				return function (e, n) {
					"string" != typeof e && (n = e, e = "*");
					var r, i = 0,
						a = e.toLowerCase().match(_t) || [];
					if (lt.isFunction(n))
						for (; r = a[i++];) "+" === r.charAt(0) ? (r = r.slice(1) || "*", (t[r] = t[r] || []).unshift(n)) : (t[r] = t[r] || []).push(n)
				}
			}

			function z(t, e, n, r) {
				function i(s) {
					var l;
					return a[s] = !0, lt.each(t[s] || [], function (t, s) {
						var u = s(e, n, r);
						return "string" != typeof u || o || a[u] ? o ? !(l = u) : void 0 : (e.dataTypes.unshift(u), i(u), !1)
					}), l
				}
				var a = {},
					o = t === Ge;
				return i(e.dataTypes[0]) || !a["*"] && i("*")
			}

			function W(t, e) {
				var n, r, i = lt.ajaxSettings.flatOptions || {};
				for (r in e) void 0 !== e[r] && ((i[r] ? t : n || (n = {}))[r] = e[r]);
				return n && lt.extend(!0, t, n), t
			}

			function H(t, e, n) {
				for (var r, i, a, o, s = t.contents, l = t.dataTypes;
					"*" === l[0];) l.shift(), void 0 === i && (i = t.mimeType || e.getResponseHeader("Content-Type"));
				if (i)
					for (o in s)
						if (s[o] && s[o].test(i)) {
							l.unshift(o);
							break
						} if (l[0] in n) a = l[0];
				else {
					for (o in n) {
						if (!l[0] || t.converters[o + " " + l[0]]) {
							a = o;
							break
						}
						r || (r = o)
					}
					a = a || r
				}
				return a ? (a !== l[0] && l.unshift(a), n[a]) : void 0
			}

			function G(t, e, n, r) {
				var i, a, o, s, l, u = {},
					c = t.dataTypes.slice();
				if (c[1])
					for (o in t.converters) u[o.toLowerCase()] = t.converters[o];
				for (a = c.shift(); a;)
					if (t.responseFields[a] && (n[t.responseFields[a]] = e), !l && r && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = a, a = c.shift())
						if ("*" === a) a = l;
						else if ("*" !== l && l !== a) {
					if (o = u[l + " " + a] || u["* " + a], !o)
						for (i in u)
							if (s = i.split(" "), s[1] === a && (o = u[l + " " + s[0]] || u["* " + s[0]])) {
								o === !0 ? o = u[i] : u[i] !== !0 && (a = s[0], c.unshift(s[1]));
								break
							} if (o !== !0)
						if (o && t["throws"]) e = o(e);
						else try {
							e = o(e)
						} catch (h) {
							return {
								state: "parsererror",
								error: o ? h : "No conversion from " + l + " to " + a
							}
						}
				}
				return {
					state: "success",
					data: e
				}
			}

			function Y(t, e, n, r) {
				var i;
				if (lt.isArray(e)) lt.each(e, function (e, i) {
					n || Qe.test(t) ? r(t, i) : Y(t + "[" + ("object" == typeof i ? e : "") + "]", i, n, r)
				});
				else if (n || "object" !== lt.type(e)) r(t, e);
				else
					for (i in e) Y(t + "[" + i + "]", e[i], n, r)
			}

			function $() {
				try {
					return new n.XMLHttpRequest
				} catch (t) {}
			}

			function Z() {
				try {
					return new n.ActiveXObject("Microsoft.XMLHTTP")
				} catch (t) {}
			}

			function Q(t) {
				return lt.isWindow(t) ? t : 9 === t.nodeType ? t.defaultView || t.parentWindow : !1
			}
			var J = [],
				K = J.slice,
				tt = J.concat,
				et = J.push,
				nt = J.indexOf,
				rt = {},
				it = rt.toString,
				at = rt.hasOwnProperty,
				ot = {},
				st = "1.11.3",
				lt = function (t, e) {
					return new lt.fn.init(t, e)
				},
				ut = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
				ct = /^-ms-/,
				ht = /-([\da-z])/gi,
				ft = function (t, e) {
					return e.toUpperCase()
				};
			lt.fn = lt.prototype = {
				jquery: st,
				constructor: lt,
				selector: "",
				length: 0,
				toArray: function () {
					return K.call(this)
				},
				get: function (t) {
					return null != t ? 0 > t ? this[t + this.length] : this[t] : K.call(this)
				},
				pushStack: function (t) {
					var e = lt.merge(this.constructor(), t);
					return e.prevObject = this, e.context = this.context, e
				},
				each: function (t, e) {
					return lt.each(this, t, e)
				},
				map: function (t) {
					return this.pushStack(lt.map(this, function (e, n) {
						return t.call(e, n, e)
					}))
				},
				slice: function () {
					return this.pushStack(K.apply(this, arguments))
				},
				first: function () {
					return this.eq(0)
				},
				last: function () {
					return this.eq(-1)
				},
				eq: function (t) {
					var e = this.length,
						n = +t + (0 > t ? e : 0);
					return this.pushStack(n >= 0 && e > n ? [this[n]] : [])
				},
				end: function () {
					return this.prevObject || this.constructor(null)
				},
				push: et,
				sort: J.sort,
				splice: J.splice
			}, lt.extend = lt.fn.extend = function () {
				var t, e, n, r, i, a, o = arguments[0] || {},
					s = 1,
					l = arguments.length,
					u = !1;
				for ("boolean" == typeof o && (u = o, o = arguments[s] || {}, s++), "object" == typeof o || lt.isFunction(o) || (o = {}), s === l && (o = this, s--); l > s; s++)
					if (null != (i = arguments[s]))
						for (r in i) t = o[r], n = i[r], o !== n && (u && n && (lt.isPlainObject(n) || (e = lt.isArray(n))) ? (e ? (e = !1, a = t && lt.isArray(t) ? t : []) : a = t && lt.isPlainObject(t) ? t : {}, o[r] = lt.extend(u, a, n)) : void 0 !== n && (o[r] = n));
				return o
			}, lt.extend({
				expando: "jQuery" + (st + Math.random()).replace(/\D/g, ""),
				isReady: !0,
				error: function (t) {
					throw new Error(t)
				},
				noop: function () {},
				isFunction: function (t) {
					return "function" === lt.type(t)
				},
				isArray: Array.isArray || function (t) {
					return "array" === lt.type(t)
				},
				isWindow: function (t) {
					return null != t && t == t.window
				},
				isNumeric: function (t) {
					return !lt.isArray(t) && t - parseFloat(t) + 1 >= 0
				},
				isEmptyObject: function (t) {
					var e;
					for (e in t) return !1;
					return !0
				},
				isPlainObject: function (t) {
					var e;
					if (!t || "object" !== lt.type(t) || t.nodeType || lt.isWindow(t)) return !1;
					try {
						if (t.constructor && !at.call(t, "constructor") && !at.call(t.constructor.prototype, "isPrototypeOf")) return !1
					} catch (n) {
						return !1
					}
					if (ot.ownLast)
						for (e in t) return at.call(t, e);
					for (e in t);
					return void 0 === e || at.call(t, e)
				},
				type: function (t) {
					return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? rt[it.call(t)] || "object" : typeof t
				},
				globalEval: function (t) {
					t && lt.trim(t) && (n.execScript || function (t) {
						n.eval.call(n, t)
					})(t)
				},
				camelCase: function (t) {
					return t.replace(ct, "ms-").replace(ht, ft)
				},
				nodeName: function (t, e) {
					return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
				},
				each: function (t, e, n) {
					var r, i = 0,
						a = t.length,
						s = o(t);
					if (n) {
						if (s)
							for (; a > i && (r = e.apply(t[i], n), r !== !1); i++);
						else
							for (i in t)
								if (r = e.apply(t[i], n), r === !1) break
					} else if (s)
						for (; a > i && (r = e.call(t[i], i, t[i]), r !== !1); i++);
					else
						for (i in t)
							if (r = e.call(t[i], i, t[i]), r === !1) break;
					return t
				},
				trim: function (t) {
					return null == t ? "" : (t + "").replace(ut, "")
				},
				makeArray: function (t, e) {
					var n = e || [];
					return null != t && (o(Object(t)) ? lt.merge(n, "string" == typeof t ? [t] : t) : et.call(n, t)), n
				},
				inArray: function (t, e, n) {
					var r;
					if (e) {
						if (nt) return nt.call(e, t, n);
						for (r = e.length, n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
							if (n in e && e[n] === t) return n
					}
					return -1
				},
				merge: function (t, e) {
					for (var n = +e.length, r = 0, i = t.length; n > r;) t[i++] = e[r++];
					if (n !== n)
						for (; void 0 !== e[r];) t[i++] = e[r++];
					return t.length = i, t
				},
				grep: function (t, e, n) {
					for (var r, i = [], a = 0, o = t.length, s = !n; o > a; a++) r = !e(t[a], a), r !== s && i.push(t[a]);
					return i
				},
				map: function (t, e, n) {
					var r, i = 0,
						a = t.length,
						s = o(t),
						l = [];
					if (s)
						for (; a > i; i++) r = e(t[i], i, n), null != r && l.push(r);
					else
						for (i in t) r = e(t[i], i, n), null != r && l.push(r);
					return tt.apply([], l)
				},
				guid: 1,
				proxy: function (t, e) {
					var n, r, i;
					return "string" == typeof e && (i = t[e], e = t, t = i), lt.isFunction(t) ? (n = K.call(arguments, 2), r = function () {
						return t.apply(e || this, n.concat(K.call(arguments)))
					}, r.guid = t.guid = t.guid || lt.guid++, r) : void 0
				},
				now: function () {
					return +new Date
				},
				support: ot
			}), lt.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (t, e) {
				rt["[object " + e + "]"] = e.toLowerCase()
			});
			var gt =
				/*!
				 * Sizzle CSS Selector Engine v2.2.0-pre
				 * http://sizzlejs.com/
				 *
				 * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
				 * Released under the MIT license
				 * http://jquery.org/license
				 *
				 * Date: 2014-12-16
				 */
				function (t) {
					function e(t, e, n, r) {
						var i, a, o, s, l, u, h, g, d, p;
						if ((e ? e.ownerDocument || e : B) !== O && P(e), e = e || O, n = n || [], s = e.nodeType, "string" != typeof t || !t || 1 !== s && 9 !== s && 11 !== s) return n;
						if (!r && L) {
							if (11 !== s && (i = vt.exec(t)))
								if (o = i[1]) {
									if (9 === s) {
										if (a = e.getElementById(o), !a || !a.parentNode) return n;
										if (a.id === o) return n.push(a), n
									} else if (e.ownerDocument && (a = e.ownerDocument.getElementById(o)) && q(e, a) && a.id === o) return n.push(a), n
								} else {
									if (i[2]) return J.apply(n, e.getElementsByTagName(t)), n;
									if ((o = i[3]) && y.getElementsByClassName) return J.apply(n, e.getElementsByClassName(o)), n
								} if (y.qsa && (!j || !j.test(t))) {
								if (g = h = R, d = e, p = 1 !== s && t, 1 === s && "object" !== e.nodeName.toLowerCase()) {
									for (u = w(t), (h = e.getAttribute("id")) ? g = h.replace(mt, "\\$&") : e.setAttribute("id", g), g = "[id='" + g + "'] ", l = u.length; l--;) u[l] = g + f(u[l]);
									d = It.test(t) && c(e.parentNode) || e, p = u.join(",")
								}
								if (p) try {
									return J.apply(n, d.querySelectorAll(p)), n
								} catch (A) {} finally {
									h || e.removeAttribute("id")
								}
							}
						}
						return T(t.replace(lt, "$1"), e, n, r)
					}

					function n() {
						function t(n, r) {
							return e.push(n + " ") > b.cacheLength && delete t[e.shift()], t[n + " "] = r
						}
						var e = [];
						return t
					}

					function r(t) {
						return t[R] = !0, t
					}

					function i(t) {
						var e = O.createElement("div");
						try {
							return !!t(e)
						} catch (n) {
							return !1
						} finally {
							e.parentNode && e.parentNode.removeChild(e), e = null
						}
					}

					function a(t, e) {
						for (var n = t.split("|"), r = t.length; r--;) b.attrHandle[n[r]] = e
					}

					function o(t, e) {
						var n = e && t,
							r = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || G) - (~t.sourceIndex || G);
						if (r) return r;
						if (n)
							for (; n = n.nextSibling;)
								if (n === e) return -1;
						return t ? 1 : -1
					}

					function s(t) {
						return function (e) {
							var n = e.nodeName.toLowerCase();
							return "input" === n && e.type === t
						}
					}

					function l(t) {
						return function (e) {
							var n = e.nodeName.toLowerCase();
							return ("input" === n || "button" === n) && e.type === t
						}
					}

					function u(t) {
						return r(function (e) {
							return e = +e, r(function (n, r) {
								for (var i, a = t([], n.length, e), o = a.length; o--;) n[i = a[o]] && (n[i] = !(r[i] = n[i]))
							})
						})
					}

					function c(t) {
						return t && "undefined" != typeof t.getElementsByTagName && t
					}

					function h() {}

					function f(t) {
						for (var e = 0, n = t.length, r = ""; n > e; e++) r += t[e].value;
						return r
					}

					function g(t, e, n) {
						var r = e.dir,
							i = n && "parentNode" === r,
							a = X++;
						return e.first ? function (e, n, a) {
							for (; e = e[r];)
								if (1 === e.nodeType || i) return t(e, n, a)
						} : function (e, n, o) {
							var s, l, u = [V, a];
							if (o) {
								for (; e = e[r];)
									if ((1 === e.nodeType || i) && t(e, n, o)) return !0
							} else
								for (; e = e[r];)
									if (1 === e.nodeType || i) {
										if (l = e[R] || (e[R] = {}), (s = l[r]) && s[0] === V && s[1] === a) return u[2] = s[2];
										if (l[r] = u, u[2] = t(e, n, o)) return !0
									}
						}
					}

					function d(t) {
						return t.length > 1 ? function (e, n, r) {
							for (var i = t.length; i--;)
								if (!t[i](e, n, r)) return !1;
							return !0
						} : t[0]
					}

					function p(t, n, r) {
						for (var i = 0, a = n.length; a > i; i++) e(t, n[i], r);
						return r
					}

					function A(t, e, n, r, i) {
						for (var a, o = [], s = 0, l = t.length, u = null != e; l > s; s++)(a = t[s]) && (!n || n(a, r, i)) && (o.push(a), u && e.push(s));
						return o
					}

					function C(t, e, n, i, a, o) {
						return i && !i[R] && (i = C(i)), a && !a[R] && (a = C(a, o)), r(function (r, o, s, l) {
							var u, c, h, f = [],
								g = [],
								d = o.length,
								C = r || p(e || "*", s.nodeType ? [s] : s, []),
								v = !t || !r && e ? C : A(C, f, t, s, l),
								I = n ? a || (r ? t : d || i) ? [] : o : v;
							if (n && n(v, I, s, l), i)
								for (u = A(I, g), i(u, [], s, l), c = u.length; c--;)(h = u[c]) && (I[g[c]] = !(v[g[c]] = h));
							if (r) {
								if (a || t) {
									if (a) {
										for (u = [], c = I.length; c--;)(h = I[c]) && u.push(v[c] = h);
										a(null, I = [], u, l)
									}
									for (c = I.length; c--;)(h = I[c]) && (u = a ? tt(r, h) : f[c]) > -1 && (r[u] = !(o[u] = h))
								}
							} else I = A(I === o ? I.splice(d, I.length) : I), a ? a(null, o, I, l) : J.apply(o, I)
						})
					}

					function v(t) {
						for (var e, n, r, i = t.length, a = b.relative[t[0].type], o = a || b.relative[" "], s = a ? 1 : 0, l = g(function (t) {
								return t === e
							}, o, !0), u = g(function (t) {
								return tt(e, t) > -1
							}, o, !0), c = [function (t, n, r) {
								var i = !a && (r || n !== E) || ((e = n).nodeType ? l(t, n, r) : u(t, n, r));
								return e = null, i
							}]; i > s; s++)
							if (n = b.relative[t[s].type]) c = [g(d(c), n)];
							else {
								if (n = b.filter[t[s].type].apply(null, t[s].matches), n[R]) {
									for (r = ++s; i > r && !b.relative[t[r].type]; r++);
									return C(s > 1 && d(c), s > 1 && f(t.slice(0, s - 1).concat({
										value: " " === t[s - 2].type ? "*" : ""
									})).replace(lt, "$1"), n, r > s && v(t.slice(s, r)), i > r && v(t = t.slice(r)), i > r && f(t))
								}
								c.push(n)
							} return d(c)
					}

					function I(t, n) {
						var i = n.length > 0,
							a = t.length > 0,
							o = function (r, o, s, l, u) {
								var c, h, f, g = 0,
									d = "0",
									p = r && [],
									C = [],
									v = E,
									I = r || a && b.find.TAG("*", u),
									m = V += null == v ? 1 : Math.random() || .1,
									y = I.length;
								for (u && (E = o !== O && o); d !== y && null != (c = I[d]); d++) {
									if (a && c) {
										for (h = 0; f = t[h++];)
											if (f(c, o, s)) {
												l.push(c);
												break
											} u && (V = m)
									}
									i && ((c = !f && c) && g--, r && p.push(c))
								}
								if (g += d, i && d !== g) {
									for (h = 0; f = n[h++];) f(p, C, o, s);
									if (r) {
										if (g > 0)
											for (; d--;) p[d] || C[d] || (C[d] = Z.call(l));
										C = A(C)
									}
									J.apply(l, C), u && !r && C.length > 0 && g + n.length > 1 && e.uniqueSort(l)
								}
								return u && (V = m, E = v), p
							};
						return i ? r(o) : o
					}
					var m, y, b, _, x, w, k, T, E, S, D, P, O, M, L, j, F, N, q, R = "sizzle" + 1 * new Date,
						B = t.document,
						V = 0,
						X = 0,
						U = n(),
						z = n(),
						W = n(),
						H = function (t, e) {
							return t === e && (D = !0), 0
						},
						G = 1 << 31,
						Y = {}.hasOwnProperty,
						$ = [],
						Z = $.pop,
						Q = $.push,
						J = $.push,
						K = $.slice,
						tt = function (t, e) {
							for (var n = 0, r = t.length; r > n; n++)
								if (t[n] === e) return n;
							return -1
						},
						et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
						nt = "[\\x20\\t\\r\\n\\f]",
						rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
						it = rt.replace("w", "w#"),
						at = "\\[" + nt + "*(" + rt + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
						ot = ":(" + rt + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + at + ")*)|.*)\\)|)",
						st = new RegExp(nt + "+", "g"),
						lt = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
						ut = new RegExp("^" + nt + "*," + nt + "*"),
						ct = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
						ht = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
						ft = new RegExp(ot),
						gt = new RegExp("^" + it + "$"),
						dt = {
							ID: new RegExp("^#(" + rt + ")"),
							CLASS: new RegExp("^\\.(" + rt + ")"),
							TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
							ATTR: new RegExp("^" + at),
							PSEUDO: new RegExp("^" + ot),
							CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
							bool: new RegExp("^(?:" + et + ")$", "i"),
							needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
						},
						pt = /^(?:input|select|textarea|button)$/i,
						At = /^h\d$/i,
						Ct = /^[^{]+\{\s*\[native \w/,
						vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
						It = /[+~]/,
						mt = /'|\\/g,
						yt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
						bt = function (t, e, n) {
							var r = "0x" + e - 65536;
							return r !== r || n ? e : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
						},
						_t = function () {
							P()
						};
					try {
						J.apply($ = K.call(B.childNodes), B.childNodes), $[B.childNodes.length].nodeType
					} catch (xt) {
						J = {
							apply: $.length ? function (t, e) {
								Q.apply(t, K.call(e))
							} : function (t, e) {
								for (var n = t.length, r = 0; t[n++] = e[r++];);
								t.length = n - 1
							}
						}
					}
					y = e.support = {}, x = e.isXML = function (t) {
						var e = t && (t.ownerDocument || t).documentElement;
						return e ? "HTML" !== e.nodeName : !1
					}, P = e.setDocument = function (t) {
						var e, n, r = t ? t.ownerDocument || t : B;
						return r !== O && 9 === r.nodeType && r.documentElement ? (O = r, M = r.documentElement, n = r.defaultView, n && n !== n.top && (n.addEventListener ? n.addEventListener("unload", _t, !1) : n.attachEvent && n.attachEvent("onunload", _t)), L = !x(r), y.attributes = i(function (t) {
							return t.className = "i", !t.getAttribute("className")
						}), y.getElementsByTagName = i(function (t) {
							return t.appendChild(r.createComment("")), !t.getElementsByTagName("*").length
						}), y.getElementsByClassName = Ct.test(r.getElementsByClassName), y.getById = i(function (t) {
							return M.appendChild(t).id = R, !r.getElementsByName || !r.getElementsByName(R).length
						}), y.getById ? (b.find.ID = function (t, e) {
							if ("undefined" != typeof e.getElementById && L) {
								var n = e.getElementById(t);
								return n && n.parentNode ? [n] : []
							}
						}, b.filter.ID = function (t) {
							var e = t.replace(yt, bt);
							return function (t) {
								return t.getAttribute("id") === e
							}
						}) : (delete b.find.ID, b.filter.ID = function (t) {
							var e = t.replace(yt, bt);
							return function (t) {
								var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
								return n && n.value === e
							}
						}), b.find.TAG = y.getElementsByTagName ? function (t, e) {
							return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : y.qsa ? e.querySelectorAll(t) : void 0
						} : function (t, e) {
							var n, r = [],
								i = 0,
								a = e.getElementsByTagName(t);
							if ("*" === t) {
								for (; n = a[i++];) 1 === n.nodeType && r.push(n);
								return r
							}
							return a
						}, b.find.CLASS = y.getElementsByClassName && function (t, e) {
							return L ? e.getElementsByClassName(t) : void 0
						}, F = [], j = [], (y.qsa = Ct.test(r.querySelectorAll)) && (i(function (t) {
							M.appendChild(t).innerHTML = "<a id='" + R + "'></a><select id='" + R + "-\f]' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && j.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || j.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + R + "-]").length || j.push("~="), t.querySelectorAll(":checked").length || j.push(":checked"), t.querySelectorAll("a#" + R + "+*").length || j.push(".#.+[+~]")
						}), i(function (t) {
							var e = r.createElement("input");
							e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && j.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || j.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), j.push(",.*:")
						})), (y.matchesSelector = Ct.test(N = M.matches || M.webkitMatchesSelector || M.mozMatchesSelector || M.oMatchesSelector || M.msMatchesSelector)) && i(function (t) {
							y.disconnectedMatch = N.call(t, "div"), N.call(t, "[s!='']:x"), F.push("!=", ot)
						}), j = j.length && new RegExp(j.join("|")), F = F.length && new RegExp(F.join("|")), e = Ct.test(M.compareDocumentPosition), q = e || Ct.test(M.contains) ? function (t, e) {
							var n = 9 === t.nodeType ? t.documentElement : t,
								r = e && e.parentNode;
							return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
						} : function (t, e) {
							if (e)
								for (; e = e.parentNode;)
									if (e === t) return !0;
							return !1
						}, H = e ? function (t, e) {
							if (t === e) return D = !0, 0;
							var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
							return n ? n : (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1, 1 & n || !y.sortDetached && e.compareDocumentPosition(t) === n ? t === r || t.ownerDocument === B && q(B, t) ? -1 : e === r || e.ownerDocument === B && q(B, e) ? 1 : S ? tt(S, t) - tt(S, e) : 0 : 4 & n ? -1 : 1)
						} : function (t, e) {
							if (t === e) return D = !0, 0;
							var n, i = 0,
								a = t.parentNode,
								s = e.parentNode,
								l = [t],
								u = [e];
							if (!a || !s) return t === r ? -1 : e === r ? 1 : a ? -1 : s ? 1 : S ? tt(S, t) - tt(S, e) : 0;
							if (a === s) return o(t, e);
							for (n = t; n = n.parentNode;) l.unshift(n);
							for (n = e; n = n.parentNode;) u.unshift(n);
							for (; l[i] === u[i];) i++;
							return i ? o(l[i], u[i]) : l[i] === B ? -1 : u[i] === B ? 1 : 0
						}, r) : O
					}, e.matches = function (t, n) {
						return e(t, null, null, n)
					}, e.matchesSelector = function (t, n) {
						if ((t.ownerDocument || t) !== O && P(t), n = n.replace(ht, "='$1']"), y.matchesSelector && L && (!F || !F.test(n)) && (!j || !j.test(n))) try {
							var r = N.call(t, n);
							if (r || y.disconnectedMatch || t.document && 11 !== t.document.nodeType) return r
						} catch (i) {}
						return e(n, O, null, [t]).length > 0
					}, e.contains = function (t, e) {
						return (t.ownerDocument || t) !== O && P(t), q(t, e)
					}, e.attr = function (t, e) {
						(t.ownerDocument || t) !== O && P(t);
						var n = b.attrHandle[e.toLowerCase()],
							r = n && Y.call(b.attrHandle, e.toLowerCase()) ? n(t, e, !L) : void 0;
						return void 0 !== r ? r : y.attributes || !L ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
					}, e.error = function (t) {
						throw new Error("Syntax error, unrecognized expression: " + t)
					}, e.uniqueSort = function (t) {
						var e, n = [],
							r = 0,
							i = 0;
						if (D = !y.detectDuplicates, S = !y.sortStable && t.slice(0), t.sort(H), D) {
							for (; e = t[i++];) e === t[i] && (r = n.push(i));
							for (; r--;) t.splice(n[r], 1)
						}
						return S = null, t
					}, _ = e.getText = function (t) {
						var e, n = "",
							r = 0,
							i = t.nodeType;
						if (i) {
							if (1 === i || 9 === i || 11 === i) {
								if ("string" == typeof t.textContent) return t.textContent;
								for (t = t.firstChild; t; t = t.nextSibling) n += _(t)
							} else if (3 === i || 4 === i) return t.nodeValue
						} else
							for (; e = t[r++];) n += _(e);
						return n
					}, b = e.selectors = {
						cacheLength: 50,
						createPseudo: r,
						match: dt,
						attrHandle: {},
						find: {},
						relative: {
							">": {
								dir: "parentNode",
								first: !0
							},
							" ": {
								dir: "parentNode"
							},
							"+": {
								dir: "previousSibling",
								first: !0
							},
							"~": {
								dir: "previousSibling"
							}
						},
						preFilter: {
							ATTR: function (t) {
								return t[1] = t[1].replace(yt, bt), t[3] = (t[3] || t[4] || t[5] || "").replace(yt, bt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
							},
							CHILD: function (t) {
								return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
							},
							PSEUDO: function (t) {
								var e, n = !t[6] && t[2];
								return dt.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && ft.test(n) && (e = w(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
							}
						},
						filter: {
							TAG: function (t) {
								var e = t.replace(yt, bt).toLowerCase();
								return "*" === t ? function () {
									return !0
								} : function (t) {
									return t.nodeName && t.nodeName.toLowerCase() === e
								}
							},
							CLASS: function (t) {
								var e = U[t + " "];
								return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && U(t, function (t) {
									return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
								})
							},
							ATTR: function (t, n, r) {
								return function (i) {
									var a = e.attr(i, t);
									return null == a ? "!=" === n : n ? (a += "", "=" === n ? a === r : "!=" === n ? a !== r : "^=" === n ? r && 0 === a.indexOf(r) : "*=" === n ? r && a.indexOf(r) > -1 : "$=" === n ? r && a.slice(-r.length) === r : "~=" === n ? (" " + a.replace(st, " ") + " ").indexOf(r) > -1 : "|=" === n ? a === r || a.slice(0, r.length + 1) === r + "-" : !1) : !0
								}
							},
							CHILD: function (t, e, n, r, i) {
								var a = "nth" !== t.slice(0, 3),
									o = "last" !== t.slice(-4),
									s = "of-type" === e;
								return 1 === r && 0 === i ? function (t) {
									return !!t.parentNode
								} : function (e, n, l) {
									var u, c, h, f, g, d, p = a !== o ? "nextSibling" : "previousSibling",
										A = e.parentNode,
										C = s && e.nodeName.toLowerCase(),
										v = !l && !s;
									if (A) {
										if (a) {
											for (; p;) {
												for (h = e; h = h[p];)
													if (s ? h.nodeName.toLowerCase() === C : 1 === h.nodeType) return !1;
												d = p = "only" === t && !d && "nextSibling"
											}
											return !0
										}
										if (d = [o ? A.firstChild : A.lastChild], o && v) {
											for (c = A[R] || (A[R] = {}), u = c[t] || [], g = u[0] === V && u[1], f = u[0] === V && u[2], h = g && A.childNodes[g]; h = ++g && h && h[p] || (f = g = 0) || d.pop();)
												if (1 === h.nodeType && ++f && h === e) {
													c[t] = [V, g, f];
													break
												}
										} else if (v && (u = (e[R] || (e[R] = {}))[t]) && u[0] === V) f = u[1];
										else
											for (;
												(h = ++g && h && h[p] || (f = g = 0) || d.pop()) && ((s ? h.nodeName.toLowerCase() !== C : 1 !== h.nodeType) || !++f || (v && ((h[R] || (h[R] = {}))[t] = [V, f]), h !== e)););
										return f -= i, f === r || f % r === 0 && f / r >= 0
									}
								}
							},
							PSEUDO: function (t, n) {
								var i, a = b.pseudos[t] || b.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
								return a[R] ? a(n) : a.length > 1 ? (i = [t, t, "", n], b.setFilters.hasOwnProperty(t.toLowerCase()) ? r(function (t, e) {
									for (var r, i = a(t, n), o = i.length; o--;) r = tt(t, i[o]), t[r] = !(e[r] = i[o])
								}) : function (t) {
									return a(t, 0, i)
								}) : a
							}
						},
						pseudos: {
							not: r(function (t) {
								var e = [],
									n = [],
									i = k(t.replace(lt, "$1"));
								return i[R] ? r(function (t, e, n, r) {
									for (var a, o = i(t, null, r, []), s = t.length; s--;)(a = o[s]) && (t[s] = !(e[s] = a))
								}) : function (t, r, a) {
									return e[0] = t, i(e, null, a, n), e[0] = null, !n.pop()
								}
							}),
							has: r(function (t) {
								return function (n) {
									return e(t, n).length > 0
								}
							}),
							contains: r(function (t) {
								return t = t.replace(yt, bt),
									function (e) {
										return (e.textContent || e.innerText || _(e)).indexOf(t) > -1
									}
							}),
							lang: r(function (t) {
								return gt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(yt, bt).toLowerCase(),
									function (e) {
										var n;
										do
											if (n = L ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return n = n.toLowerCase(), n === t || 0 === n.indexOf(t + "-"); while ((e = e.parentNode) && 1 === e.nodeType);
										return !1
									}
							}),
							target: function (e) {
								var n = t.location && t.location.hash;
								return n && n.slice(1) === e.id
							},
							root: function (t) {
								return t === M
							},
							focus: function (t) {
								return t === O.activeElement && (!O.hasFocus || O.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
							},
							enabled: function (t) {
								return t.disabled === !1
							},
							disabled: function (t) {
								return t.disabled === !0
							},
							checked: function (t) {
								var e = t.nodeName.toLowerCase();
								return "input" === e && !!t.checked || "option" === e && !!t.selected
							},
							selected: function (t) {
								return t.parentNode && t.parentNode.selectedIndex, t.selected === !0
							},
							empty: function (t) {
								for (t = t.firstChild; t; t = t.nextSibling)
									if (t.nodeType < 6) return !1;
								return !0
							},
							parent: function (t) {
								return !b.pseudos.empty(t)
							},
							header: function (t) {
								return At.test(t.nodeName)
							},
							input: function (t) {
								return pt.test(t.nodeName)
							},
							button: function (t) {
								var e = t.nodeName.toLowerCase();
								return "input" === e && "button" === t.type || "button" === e
							},
							text: function (t) {
								var e;
								return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
							},
							first: u(function () {
								return [0]
							}),
							last: u(function (t, e) {
								return [e - 1]
							}),
							eq: u(function (t, e, n) {
								return [0 > n ? n + e : n]
							}),
							even: u(function (t, e) {
								for (var n = 0; e > n; n += 2) t.push(n);
								return t
							}),
							odd: u(function (t, e) {
								for (var n = 1; e > n; n += 2) t.push(n);
								return t
							}),
							lt: u(function (t, e, n) {
								for (var r = 0 > n ? n + e : n; --r >= 0;) t.push(r);
								return t
							}),
							gt: u(function (t, e, n) {
								for (var r = 0 > n ? n + e : n; ++r < e;) t.push(r);
								return t
							})
						}
					}, b.pseudos.nth = b.pseudos.eq;
					for (m in {
							radio: !0,
							checkbox: !0,
							file: !0,
							password: !0,
							image: !0
						}) b.pseudos[m] = s(m);
					for (m in {
							submit: !0,
							reset: !0
						}) b.pseudos[m] = l(m);
					return h.prototype = b.filters = b.pseudos, b.setFilters = new h, w = e.tokenize = function (t, n) {
						var r, i, a, o, s, l, u, c = z[t + " "];
						if (c) return n ? 0 : c.slice(0);
						for (s = t, l = [], u = b.preFilter; s;) {
							(!r || (i = ut.exec(s))) && (i && (s = s.slice(i[0].length) || s), l.push(a = [])), r = !1, (i = ct.exec(s)) && (r = i.shift(), a.push({
								value: r,
								type: i[0].replace(lt, " ")
							}), s = s.slice(r.length));
							for (o in b.filter) !(i = dt[o].exec(s)) || u[o] && !(i = u[o](i)) || (r = i.shift(), a.push({
								value: r,
								type: o,
								matches: i
							}), s = s.slice(r.length));
							if (!r) break
						}
						return n ? s.length : s ? e.error(t) : z(t, l).slice(0)
					}, k = e.compile = function (t, e) {
						var n, r = [],
							i = [],
							a = W[t + " "];
						if (!a) {
							for (e || (e = w(t)), n = e.length; n--;) a = v(e[n]), a[R] ? r.push(a) : i.push(a);
							a = W(t, I(i, r)), a.selector = t
						}
						return a
					}, T = e.select = function (t, e, n, r) {
						var i, a, o, s, l, u = "function" == typeof t && t,
							h = !r && w(t = u.selector || t);
						if (n = n || [], 1 === h.length) {
							if (a = h[0] = h[0].slice(0), a.length > 2 && "ID" === (o = a[0]).type && y.getById && 9 === e.nodeType && L && b.relative[a[1].type]) {
								if (e = (b.find.ID(o.matches[0].replace(yt, bt), e) || [])[0], !e) return n;
								u && (e = e.parentNode), t = t.slice(a.shift().value.length)
							}
							for (i = dt.needsContext.test(t) ? 0 : a.length; i-- && (o = a[i], !b.relative[s = o.type]);)
								if ((l = b.find[s]) && (r = l(o.matches[0].replace(yt, bt), It.test(a[0].type) && c(e.parentNode) || e))) {
									if (a.splice(i, 1), t = r.length && f(a), !t) return J.apply(n, r), n;
									break
								}
						}
						return (u || k(t, h))(r, e, !L, n, It.test(t) && c(e.parentNode) || e), n
					}, y.sortStable = R.split("").sort(H).join("") === R, y.detectDuplicates = !!D, P(), y.sortDetached = i(function (t) {
						return 1 & t.compareDocumentPosition(O.createElement("div"))
					}), i(function (t) {
						return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
					}) || a("type|href|height|width", function (t, e, n) {
						return n ? void 0 : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
					}), y.attributes && i(function (t) {
						return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
					}) || a("value", function (t, e, n) {
						return n || "input" !== t.nodeName.toLowerCase() ? void 0 : t.defaultValue
					}), i(function (t) {
						return null == t.getAttribute("disabled")
					}) || a(et, function (t, e, n) {
						var r;
						return n ? void 0 : t[e] === !0 ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
					}), e
				}(n);
			lt.find = gt, lt.expr = gt.selectors, lt.expr[":"] = lt.expr.pseudos, lt.unique = gt.uniqueSort, lt.text = gt.getText, lt.isXMLDoc = gt.isXML, lt.contains = gt.contains;
			var dt = lt.expr.match.needsContext,
				pt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
				At = /^.[^:#\[\.,]*$/;
			lt.filter = function (t, e, n) {
				var r = e[0];
				return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? lt.find.matchesSelector(r, t) ? [r] : [] : lt.find.matches(t, lt.grep(e, function (t) {
					return 1 === t.nodeType
				}))
			}, lt.fn.extend({
				find: function (t) {
					var e, n = [],
						r = this,
						i = r.length;
					if ("string" != typeof t) return this.pushStack(lt(t).filter(function () {
						for (e = 0; i > e; e++)
							if (lt.contains(r[e], this)) return !0
					}));
					for (e = 0; i > e; e++) lt.find(t, r[e], n);
					return n = this.pushStack(i > 1 ? lt.unique(n) : n), n.selector = this.selector ? this.selector + " " + t : t, n
				},
				filter: function (t) {
					return this.pushStack(s(this, t || [], !1))
				},
				not: function (t) {
					return this.pushStack(s(this, t || [], !0))
				},
				is: function (t) {
					return !!s(this, "string" == typeof t && dt.test(t) ? lt(t) : t || [], !1).length
				}
			});
			var Ct, vt = n.document,
				It = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
				mt = lt.fn.init = function (t, e) {
					var n, r;
					if (!t) return this;
					if ("string" == typeof t) {
						if (n = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : It.exec(t), !n || !n[1] && e) return !e || e.jquery ? (e || Ct).find(t) : this.constructor(e).find(t);
						if (n[1]) {
							if (e = e instanceof lt ? e[0] : e, lt.merge(this, lt.parseHTML(n[1], e && e.nodeType ? e.ownerDocument || e : vt, !0)), pt.test(n[1]) && lt.isPlainObject(e))
								for (n in e) lt.isFunction(this[n]) ? this[n](e[n]) : this.attr(n, e[n]);
							return this
						}
						if (r = vt.getElementById(n[2]), r && r.parentNode) {
							if (r.id !== n[2]) return Ct.find(t);
							this.length = 1, this[0] = r
						}
						return this.context = vt, this.selector = t, this
					}
					return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : lt.isFunction(t) ? "undefined" != typeof Ct.ready ? Ct.ready(t) : t(lt) : (void 0 !== t.selector && (this.selector = t.selector, this.context = t.context), lt.makeArray(t, this))
				};
			mt.prototype = lt.fn, Ct = lt(vt);
			var yt = /^(?:parents|prev(?:Until|All))/,
				bt = {
					children: !0,
					contents: !0,
					next: !0,
					prev: !0
				};
			lt.extend({
				dir: function (t, e, n) {
					for (var r = [], i = t[e]; i && 9 !== i.nodeType && (void 0 === n || 1 !== i.nodeType || !lt(i).is(n));) 1 === i.nodeType && r.push(i), i = i[e];
					return r
				},
				sibling: function (t, e) {
					for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
					return n
				}
			}), lt.fn.extend({
				has: function (t) {
					var e, n = lt(t, this),
						r = n.length;
					return this.filter(function () {
						for (e = 0; r > e; e++)
							if (lt.contains(this, n[e])) return !0
					})
				},
				closest: function (t, e) {
					for (var n, r = 0, i = this.length, a = [], o = dt.test(t) || "string" != typeof t ? lt(t, e || this.context) : 0; i > r; r++)
						for (n = this[r]; n && n !== e; n = n.parentNode)
							if (n.nodeType < 11 && (o ? o.index(n) > -1 : 1 === n.nodeType && lt.find.matchesSelector(n, t))) {
								a.push(n);
								break
							} return this.pushStack(a.length > 1 ? lt.unique(a) : a)
				},
				index: function (t) {
					return t ? "string" == typeof t ? lt.inArray(this[0], lt(t)) : lt.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
				},
				add: function (t, e) {
					return this.pushStack(lt.unique(lt.merge(this.get(), lt(t, e))))
				},
				addBack: function (t) {
					return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
				}
			}), lt.each({
				parent: function (t) {
					var e = t.parentNode;
					return e && 11 !== e.nodeType ? e : null
				},
				parents: function (t) {
					return lt.dir(t, "parentNode")
				},
				parentsUntil: function (t, e, n) {
					return lt.dir(t, "parentNode", n)
				},
				next: function (t) {
					return l(t, "nextSibling")
				},
				prev: function (t) {
					return l(t, "previousSibling")
				},
				nextAll: function (t) {
					return lt.dir(t, "nextSibling")
				},
				prevAll: function (t) {
					return lt.dir(t, "previousSibling")
				},
				nextUntil: function (t, e, n) {
					return lt.dir(t, "nextSibling", n)
				},
				prevUntil: function (t, e, n) {
					return lt.dir(t, "previousSibling", n)
				},
				siblings: function (t) {
					return lt.sibling((t.parentNode || {}).firstChild, t)
				},
				children: function (t) {
					return lt.sibling(t.firstChild)
				},
				contents: function (t) {
					return lt.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : lt.merge([], t.childNodes)
				}
			}, function (t, e) {
				lt.fn[t] = function (n, r) {
					var i = lt.map(this, e, n);
					return "Until" !== t.slice(-5) && (r = n), r && "string" == typeof r && (i = lt.filter(r, i)), this.length > 1 && (bt[t] || (i = lt.unique(i)), yt.test(t) && (i = i.reverse())), this.pushStack(i)
				}
			});
			var _t = /\S+/g,
				xt = {};
			lt.Callbacks = function (t) {
				t = "string" == typeof t ? xt[t] || u(t) : lt.extend({}, t);
				var e, n, r, i, a, o, s = [],
					l = !t.once && [],
					c = function (u) {
						for (n = t.memory && u, r = !0, a = o || 0, o = 0, i = s.length, e = !0; s && i > a; a++)
							if (s[a].apply(u[0], u[1]) === !1 && t.stopOnFalse) {
								n = !1;
								break
							} e = !1, s && (l ? l.length && c(l.shift()) : n ? s = [] : h.disable())
					},
					h = {
						add: function () {
							if (s) {
								var r = s.length;
								! function a(e) {
									lt.each(e, function (e, n) {
										var r = lt.type(n);
										"function" === r ? t.unique && h.has(n) || s.push(n) : n && n.length && "string" !== r && a(n)
									})
								}(arguments), e ? i = s.length : n && (o = r, c(n))
							}
							return this
						},
						remove: function () {
							return s && lt.each(arguments, function (t, n) {
								for (var r;
									(r = lt.inArray(n, s, r)) > -1;) s.splice(r, 1), e && (i >= r && i--, a >= r && a--)
							}), this
						},
						has: function (t) {
							return t ? lt.inArray(t, s) > -1 : !(!s || !s.length)
						},
						empty: function () {
							return s = [], i = 0, this
						},
						disable: function () {
							return s = l = n = void 0, this
						},
						disabled: function () {
							return !s
						},
						lock: function () {
							return l = void 0, n || h.disable(), this
						},
						locked: function () {
							return !l
						},
						fireWith: function (t, n) {
							return !s || r && !l || (n = n || [], n = [t, n.slice ? n.slice() : n], e ? l.push(n) : c(n)), this
						},
						fire: function () {
							return h.fireWith(this, arguments), this
						},
						fired: function () {
							return !!r
						}
					};
				return h
			}, lt.extend({
				Deferred: function (t) {
					var e = [
							["resolve", "done", lt.Callbacks("once memory"), "resolved"],
							["reject", "fail", lt.Callbacks("once memory"), "rejected"],
							["notify", "progress", lt.Callbacks("memory")]
						],
						n = "pending",
						r = {
							state: function () {
								return n
							},
							always: function () {
								return i.done(arguments).fail(arguments), this
							},
							then: function () {
								var t = arguments;
								return lt.Deferred(function (n) {
									lt.each(e, function (e, a) {
										var o = lt.isFunction(t[e]) && t[e];
										i[a[1]](function () {
											var t = o && o.apply(this, arguments);
											t && lt.isFunction(t.promise) ? t.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[a[0] + "With"](this === r ? n.promise() : this, o ? [t] : arguments)
										})
									}), t = null
								}).promise()
							},
							promise: function (t) {
								return null != t ? lt.extend(t, r) : r
							}
						},
						i = {};
					return r.pipe = r.then, lt.each(e, function (t, a) {
						var o = a[2],
							s = a[3];
						r[a[1]] = o.add, s && o.add(function () {
							n = s
						}, e[1 ^ t][2].disable, e[2][2].lock), i[a[0]] = function () {
							return i[a[0] + "With"](this === i ? r : this, arguments), this
						}, i[a[0] + "With"] = o.fireWith
					}), r.promise(i), t && t.call(i, i), i
				},
				when: function (t) {
					var e, n, r, i = 0,
						a = K.call(arguments),
						o = a.length,
						s = 1 !== o || t && lt.isFunction(t.promise) ? o : 0,
						l = 1 === s ? t : lt.Deferred(),
						u = function (t, n, r) {
							return function (i) {
								n[t] = this, r[t] = arguments.length > 1 ? K.call(arguments) : i, r === e ? l.notifyWith(n, r) : --s || l.resolveWith(n, r)
							}
						};
					if (o > 1)
						for (e = new Array(o), n = new Array(o), r = new Array(o); o > i; i++) a[i] && lt.isFunction(a[i].promise) ? a[i].promise().done(u(i, r, a)).fail(l.reject).progress(u(i, n, e)) : --s;
					return s || l.resolveWith(r, a), l.promise()
				}
			});
			var wt;
			lt.fn.ready = function (t) {
				return lt.ready.promise().done(t), this
			}, lt.extend({
				isReady: !1,
				readyWait: 1,
				holdReady: function (t) {
					t ? lt.readyWait++ : lt.ready(!0)
				},
				ready: function (t) {
					if (t === !0 ? !--lt.readyWait : !lt.isReady) {
						if (!vt.body) return setTimeout(lt.ready);
						lt.isReady = !0, t !== !0 && --lt.readyWait > 0 || (wt.resolveWith(vt, [lt]), lt.fn.triggerHandler && (lt(vt).triggerHandler("ready"), lt(vt).off("ready")))
					}
				}
			}), lt.ready.promise = function (t) {
				if (!wt)
					if (wt = lt.Deferred(), "complete" === vt.readyState) setTimeout(lt.ready);
					else if (vt.addEventListener) vt.addEventListener("DOMContentLoaded", h, !1), n.addEventListener("load", h, !1);
				else {
					vt.attachEvent("onreadystatechange", h), n.attachEvent("onload", h);
					var e = !1;
					try {
						e = null == n.frameElement && vt.documentElement
					} catch (r) {}
					e && e.doScroll && ! function i() {
						if (!lt.isReady) {
							try {
								e.doScroll("left")
							} catch (t) {
								return setTimeout(i, 50)
							}
							c(), lt.ready()
						}
					}()
				}
				return wt.promise(t)
			};
			var kt, Tt = "undefined";
			for (kt in lt(ot)) break;
			ot.ownLast = "0" !== kt, ot.inlineBlockNeedsLayout = !1, lt(function () {
					var t, e, n, r;
					n = vt.getElementsByTagName("body")[0], n && n.style && (e = vt.createElement("div"), r = vt.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(e), typeof e.style.zoom !== Tt && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ot.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(r))
				}),
				function () {
					var t = vt.createElement("div");
					if (null == ot.deleteExpando) {
						ot.deleteExpando = !0;
						try {
							delete t.test
						} catch (e) {
							ot.deleteExpando = !1
						}
					}
					t = null
				}(), lt.acceptData = function (t) {
					var e = lt.noData[(t.nodeName + " ").toLowerCase()],
						n = +t.nodeType || 1;
					return 1 !== n && 9 !== n ? !1 : !e || e !== !0 && t.getAttribute("classid") === e
				};
			var Et = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
				St = /([A-Z])/g;
			lt.extend({
				cache: {},
				noData: {
					"applet ": !0,
					"embed ": !0,
					"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
				},
				hasData: function (t) {
					return t = t.nodeType ? lt.cache[t[lt.expando]] : t[lt.expando], !!t && !g(t)
				},
				data: function (t, e, n) {
					return d(t, e, n)
				},
				removeData: function (t, e) {
					return p(t, e)
				},
				_data: function (t, e, n) {
					return d(t, e, n, !0)
				},
				_removeData: function (t, e) {
					return p(t, e, !0)
				}
			}), lt.fn.extend({
				data: function (t, e) {
					var n, r, i, a = this[0],
						o = a && a.attributes;
					if (void 0 === t) {
						if (this.length && (i = lt.data(a), 1 === a.nodeType && !lt._data(a, "parsedAttrs"))) {
							for (n = o.length; n--;) o[n] && (r = o[n].name, 0 === r.indexOf("data-") && (r = lt.camelCase(r.slice(5)), f(a, r, i[r])));
							lt._data(a, "parsedAttrs", !0)
						}
						return i
					}
					return "object" == typeof t ? this.each(function () {
						lt.data(this, t)
					}) : arguments.length > 1 ? this.each(function () {
						lt.data(this, t, e)
					}) : a ? f(a, t, lt.data(a, t)) : void 0
				},
				removeData: function (t) {
					return this.each(function () {
						lt.removeData(this, t)
					})
				}
			}), lt.extend({
				queue: function (t, e, n) {
					var r;
					return t ? (e = (e || "fx") + "queue", r = lt._data(t, e), n && (!r || lt.isArray(n) ? r = lt._data(t, e, lt.makeArray(n)) : r.push(n)), r || []) : void 0
				},
				dequeue: function (t, e) {
					e = e || "fx";
					var n = lt.queue(t, e),
						r = n.length,
						i = n.shift(),
						a = lt._queueHooks(t, e),
						o = function () {
							lt.dequeue(t, e)
						};
					"inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete a.stop, i.call(t, o, a)), !r && a && a.empty.fire()
				},
				_queueHooks: function (t, e) {
					var n = e + "queueHooks";
					return lt._data(t, n) || lt._data(t, n, {
						empty: lt.Callbacks("once memory").add(function () {
							lt._removeData(t, e + "queue"), lt._removeData(t, n)
						})
					})
				}
			}), lt.fn.extend({
				queue: function (t, e) {
					var n = 2;
					return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? lt.queue(this[0], t) : void 0 === e ? this : this.each(function () {
						var n = lt.queue(this, t, e);
						lt._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && lt.dequeue(this, t)
					})
				},
				dequeue: function (t) {
					return this.each(function () {
						lt.dequeue(this, t)
					})
				},
				clearQueue: function (t) {
					return this.queue(t || "fx", [])
				},
				promise: function (t, e) {
					var n, r = 1,
						i = lt.Deferred(),
						a = this,
						o = this.length,
						s = function () {
							--r || i.resolveWith(a, [a])
						};
					for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; o--;) n = lt._data(a[o], t + "queueHooks"), n && n.empty && (r++, n.empty.add(s));
					return s(), i.promise(e)
				}
			});
			var Dt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
				Pt = ["Top", "Right", "Bottom", "Left"],
				Ot = function (t, e) {
					return t = e || t, "none" === lt.css(t, "display") || !lt.contains(t.ownerDocument, t)
				},
				Mt = lt.access = function (t, e, n, r, i, a, o) {
					var s = 0,
						l = t.length,
						u = null == n;
					if ("object" === lt.type(n)) {
						i = !0;
						for (s in n) lt.access(t, e, s, n[s], !0, a, o)
					} else if (void 0 !== r && (i = !0, lt.isFunction(r) || (o = !0), u && (o ? (e.call(t, r), e = null) : (u = e, e = function (t, e, n) {
							return u.call(lt(t), n)
						})), e))
						for (; l > s; s++) e(t[s], n, o ? r : r.call(t[s], s, e(t[s], n)));
					return i ? t : u ? e.call(t) : l ? e(t[0], n) : a
				},
				Lt = /^(?:checkbox|radio)$/i;
			! function () {
				var t = vt.createElement("input"),
					e = vt.createElement("div"),
					n = vt.createDocumentFragment();
				if (e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ot.leadingWhitespace = 3 === e.firstChild.nodeType, ot.tbody = !e.getElementsByTagName("tbody").length, ot.htmlSerialize = !!e.getElementsByTagName("link").length, ot.html5Clone = "<:nav></:nav>" !== vt.createElement("nav").cloneNode(!0).outerHTML, t.type = "checkbox", t.checked = !0, n.appendChild(t), ot.appendChecked = t.checked, e.innerHTML = "<textarea>x</textarea>", ot.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue, n.appendChild(e), e.innerHTML = "<input type='radio' checked='checked' name='t'/>", ot.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked, ot.noCloneEvent = !0, e.attachEvent && (e.attachEvent("onclick", function () {
						ot.noCloneEvent = !1
					}), e.cloneNode(!0).click()), null == ot.deleteExpando) {
					ot.deleteExpando = !0;
					try {
						delete e.test
					} catch (r) {
						ot.deleteExpando = !1
					}
				}
			}(),
			function () {
				var t, e, r = vt.createElement("div");
				for (t in {
						submit: !0,
						change: !0,
						focusin: !0
					}) e = "on" + t, (ot[t + "Bubbles"] = e in n) || (r.setAttribute(e, "t"), ot[t + "Bubbles"] = r.attributes[e].expando === !1);
				r = null
			}();
			var jt = /^(?:input|select|textarea)$/i,
				Ft = /^key/,
				Nt = /^(?:mouse|pointer|contextmenu)|click/,
				qt = /^(?:focusinfocus|focusoutblur)$/,
				Rt = /^([^.]*)(?:\.(.+)|)$/;
			lt.event = {
				global: {},
				add: function (t, e, n, r, i) {
					var a, o, s, l, u, c, h, f, g, d, p, A = lt._data(t);
					if (A) {
						for (n.handler && (l = n, n = l.handler, i = l.selector), n.guid || (n.guid = lt.guid++), (o = A.events) || (o = A.events = {}), (c = A.handle) || (c = A.handle = function (t) {
								return typeof lt === Tt || t && lt.event.triggered === t.type ? void 0 : lt.event.dispatch.apply(c.elem, arguments)
							}, c.elem = t), e = (e || "").match(_t) || [""], s = e.length; s--;) a = Rt.exec(e[s]) || [], g = p = a[1], d = (a[2] || "").split(".").sort(), g && (u = lt.event.special[g] || {}, g = (i ? u.delegateType : u.bindType) || g, u = lt.event.special[g] || {}, h = lt.extend({
							type: g,
							origType: p,
							data: r,
							handler: n,
							guid: n.guid,
							selector: i,
							needsContext: i && lt.expr.match.needsContext.test(i),
							namespace: d.join(".")
						}, l), (f = o[g]) || (f = o[g] = [], f.delegateCount = 0, u.setup && u.setup.call(t, r, d, c) !== !1 || (t.addEventListener ? t.addEventListener(g, c, !1) : t.attachEvent && t.attachEvent("on" + g, c))), u.add && (u.add.call(t, h), h.handler.guid || (h.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, h) : f.push(h), lt.event.global[g] = !0);
						t = null
					}
				},
				remove: function (t, e, n, r, i) {
					var a, o, s, l, u, c, h, f, g, d, p, A = lt.hasData(t) && lt._data(t);
					if (A && (c = A.events)) {
						for (e = (e || "").match(_t) || [""], u = e.length; u--;)
							if (s = Rt.exec(e[u]) || [], g = p = s[1], d = (s[2] || "").split(".").sort(), g) {
								for (h = lt.event.special[g] || {}, g = (r ? h.delegateType : h.bindType) || g, f = c[g] || [], s = s[2] && new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"),
									l = a = f.length; a--;) o = f[a], !i && p !== o.origType || n && n.guid !== o.guid || s && !s.test(o.namespace) || r && r !== o.selector && ("**" !== r || !o.selector) || (f.splice(a, 1), o.selector && f.delegateCount--, h.remove && h.remove.call(t, o));
								l && !f.length && (h.teardown && h.teardown.call(t, d, A.handle) !== !1 || lt.removeEvent(t, g, A.handle), delete c[g])
							} else
								for (g in c) lt.event.remove(t, g + e[u], n, r, !0);
						lt.isEmptyObject(c) && (delete A.handle, lt._removeData(t, "events"))
					}
				},
				trigger: function (t, e, r, i) {
					var a, o, s, l, u, c, h, f = [r || vt],
						g = at.call(t, "type") ? t.type : t,
						d = at.call(t, "namespace") ? t.namespace.split(".") : [];
					if (s = c = r = r || vt, 3 !== r.nodeType && 8 !== r.nodeType && !qt.test(g + lt.event.triggered) && (g.indexOf(".") >= 0 && (d = g.split("."), g = d.shift(), d.sort()), o = g.indexOf(":") < 0 && "on" + g, t = t[lt.expando] ? t : new lt.Event(g, "object" == typeof t && t), t.isTrigger = i ? 2 : 3, t.namespace = d.join("."), t.namespace_re = t.namespace ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = r), e = null == e ? [t] : lt.makeArray(e, [t]), u = lt.event.special[g] || {}, i || !u.trigger || u.trigger.apply(r, e) !== !1)) {
						if (!i && !u.noBubble && !lt.isWindow(r)) {
							for (l = u.delegateType || g, qt.test(l + g) || (s = s.parentNode); s; s = s.parentNode) f.push(s), c = s;
							c === (r.ownerDocument || vt) && f.push(c.defaultView || c.parentWindow || n)
						}
						for (h = 0;
							(s = f[h++]) && !t.isPropagationStopped();) t.type = h > 1 ? l : u.bindType || g, a = (lt._data(s, "events") || {})[t.type] && lt._data(s, "handle"), a && a.apply(s, e), a = o && s[o], a && a.apply && lt.acceptData(s) && (t.result = a.apply(s, e), t.result === !1 && t.preventDefault());
						if (t.type = g, !i && !t.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), e) === !1) && lt.acceptData(r) && o && r[g] && !lt.isWindow(r)) {
							c = r[o], c && (r[o] = null), lt.event.triggered = g;
							try {
								r[g]()
							} catch (p) {}
							lt.event.triggered = void 0, c && (r[o] = c)
						}
						return t.result
					}
				},
				dispatch: function (t) {
					t = lt.event.fix(t);
					var e, n, r, i, a, o = [],
						s = K.call(arguments),
						l = (lt._data(this, "events") || {})[t.type] || [],
						u = lt.event.special[t.type] || {};
					if (s[0] = t, t.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, t) !== !1) {
						for (o = lt.event.handlers.call(this, t, l), e = 0;
							(i = o[e++]) && !t.isPropagationStopped();)
							for (t.currentTarget = i.elem, a = 0;
								(r = i.handlers[a++]) && !t.isImmediatePropagationStopped();)(!t.namespace_re || t.namespace_re.test(r.namespace)) && (t.handleObj = r, t.data = r.data, n = ((lt.event.special[r.origType] || {}).handle || r.handler).apply(i.elem, s), void 0 !== n && (t.result = n) === !1 && (t.preventDefault(), t.stopPropagation()));
						return u.postDispatch && u.postDispatch.call(this, t), t.result
					}
				},
				handlers: function (t, e) {
					var n, r, i, a, o = [],
						s = e.delegateCount,
						l = t.target;
					if (s && l.nodeType && (!t.button || "click" !== t.type))
						for (; l != this; l = l.parentNode || this)
							if (1 === l.nodeType && (l.disabled !== !0 || "click" !== t.type)) {
								for (i = [], a = 0; s > a; a++) r = e[a], n = r.selector + " ", void 0 === i[n] && (i[n] = r.needsContext ? lt(n, this).index(l) >= 0 : lt.find(n, this, null, [l]).length), i[n] && i.push(r);
								i.length && o.push({
									elem: l,
									handlers: i
								})
							} return s < e.length && o.push({
						elem: this,
						handlers: e.slice(s)
					}), o
				},
				fix: function (t) {
					if (t[lt.expando]) return t;
					var e, n, r, i = t.type,
						a = t,
						o = this.fixHooks[i];
					for (o || (this.fixHooks[i] = o = Nt.test(i) ? this.mouseHooks : Ft.test(i) ? this.keyHooks : {}), r = o.props ? this.props.concat(o.props) : this.props, t = new lt.Event(a), e = r.length; e--;) n = r[e], t[n] = a[n];
					return t.target || (t.target = a.srcElement || vt), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, o.filter ? o.filter(t, a) : t
				},
				props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
				fixHooks: {},
				keyHooks: {
					props: "char charCode key keyCode".split(" "),
					filter: function (t, e) {
						return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
					}
				},
				mouseHooks: {
					props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
					filter: function (t, e) {
						var n, r, i, a = e.button,
							o = e.fromElement;
						return null == t.pageX && null != e.clientX && (r = t.target.ownerDocument || vt, i = r.documentElement, n = r.body, t.pageX = e.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)), !t.relatedTarget && o && (t.relatedTarget = o === t.target ? e.toElement : o), t.which || void 0 === a || (t.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), t
					}
				},
				special: {
					load: {
						noBubble: !0
					},
					focus: {
						trigger: function () {
							if (this !== v() && this.focus) try {
								return this.focus(), !1
							} catch (t) {}
						},
						delegateType: "focusin"
					},
					blur: {
						trigger: function () {
							return this === v() && this.blur ? (this.blur(), !1) : void 0
						},
						delegateType: "focusout"
					},
					click: {
						trigger: function () {
							return lt.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
						},
						_default: function (t) {
							return lt.nodeName(t.target, "a")
						}
					},
					beforeunload: {
						postDispatch: function (t) {
							void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result)
						}
					}
				},
				simulate: function (t, e, n, r) {
					var i = lt.extend(new lt.Event, n, {
						type: t,
						isSimulated: !0,
						originalEvent: {}
					});
					r ? lt.event.trigger(i, null, e) : lt.event.dispatch.call(e, i), i.isDefaultPrevented() && n.preventDefault()
				}
			}, lt.removeEvent = vt.removeEventListener ? function (t, e, n) {
				t.removeEventListener && t.removeEventListener(e, n, !1)
			} : function (t, e, n) {
				var r = "on" + e;
				t.detachEvent && (typeof t[r] === Tt && (t[r] = null), t.detachEvent(r, n))
			}, lt.Event = function (t, e) {
				return this instanceof lt.Event ? (t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && t.returnValue === !1 ? A : C) : this.type = t, e && lt.extend(this, e), this.timeStamp = t && t.timeStamp || lt.now(), void(this[lt.expando] = !0)) : new lt.Event(t, e)
			}, lt.Event.prototype = {
				isDefaultPrevented: C,
				isPropagationStopped: C,
				isImmediatePropagationStopped: C,
				preventDefault: function () {
					var t = this.originalEvent;
					this.isDefaultPrevented = A, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
				},
				stopPropagation: function () {
					var t = this.originalEvent;
					this.isPropagationStopped = A, t && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
				},
				stopImmediatePropagation: function () {
					var t = this.originalEvent;
					this.isImmediatePropagationStopped = A, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
				}
			}, lt.each({
				mouseenter: "mouseover",
				mouseleave: "mouseout",
				pointerenter: "pointerover",
				pointerleave: "pointerout"
			}, function (t, e) {
				lt.event.special[t] = {
					delegateType: e,
					bindType: e,
					handle: function (t) {
						var n, r = this,
							i = t.relatedTarget,
							a = t.handleObj;
						return (!i || i !== r && !lt.contains(r, i)) && (t.type = a.origType, n = a.handler.apply(this, arguments), t.type = e), n
					}
				}
			}), ot.submitBubbles || (lt.event.special.submit = {
				setup: function () {
					return lt.nodeName(this, "form") ? !1 : void lt.event.add(this, "click._submit keypress._submit", function (t) {
						var e = t.target,
							n = lt.nodeName(e, "input") || lt.nodeName(e, "button") ? e.form : void 0;
						n && !lt._data(n, "submitBubbles") && (lt.event.add(n, "submit._submit", function (t) {
							t._submit_bubble = !0
						}), lt._data(n, "submitBubbles", !0))
					})
				},
				postDispatch: function (t) {
					t._submit_bubble && (delete t._submit_bubble, this.parentNode && !t.isTrigger && lt.event.simulate("submit", this.parentNode, t, !0))
				},
				teardown: function () {
					return lt.nodeName(this, "form") ? !1 : void lt.event.remove(this, "._submit")
				}
			}), ot.changeBubbles || (lt.event.special.change = {
				setup: function () {
					return jt.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (lt.event.add(this, "propertychange._change", function (t) {
						"checked" === t.originalEvent.propertyName && (this._just_changed = !0)
					}), lt.event.add(this, "click._change", function (t) {
						this._just_changed && !t.isTrigger && (this._just_changed = !1), lt.event.simulate("change", this, t, !0)
					})), !1) : void lt.event.add(this, "beforeactivate._change", function (t) {
						var e = t.target;
						jt.test(e.nodeName) && !lt._data(e, "changeBubbles") && (lt.event.add(e, "change._change", function (t) {
							!this.parentNode || t.isSimulated || t.isTrigger || lt.event.simulate("change", this.parentNode, t, !0)
						}), lt._data(e, "changeBubbles", !0))
					})
				},
				handle: function (t) {
					var e = t.target;
					return this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type ? t.handleObj.handler.apply(this, arguments) : void 0
				},
				teardown: function () {
					return lt.event.remove(this, "._change"), !jt.test(this.nodeName)
				}
			}), ot.focusinBubbles || lt.each({
				focus: "focusin",
				blur: "focusout"
			}, function (t, e) {
				var n = function (t) {
					lt.event.simulate(e, t.target, lt.event.fix(t), !0)
				};
				lt.event.special[e] = {
					setup: function () {
						var r = this.ownerDocument || this,
							i = lt._data(r, e);
						i || r.addEventListener(t, n, !0), lt._data(r, e, (i || 0) + 1)
					},
					teardown: function () {
						var r = this.ownerDocument || this,
							i = lt._data(r, e) - 1;
						i ? lt._data(r, e, i) : (r.removeEventListener(t, n, !0), lt._removeData(r, e))
					}
				}
			}), lt.fn.extend({
				on: function (t, e, n, r, i) {
					var a, o;
					if ("object" == typeof t) {
						"string" != typeof e && (n = n || e, e = void 0);
						for (a in t) this.on(a, e, n, t[a], i);
						return this
					}
					if (null == n && null == r ? (r = e, n = e = void 0) : null == r && ("string" == typeof e ? (r = n, n = void 0) : (r = n, n = e, e = void 0)), r === !1) r = C;
					else if (!r) return this;
					return 1 === i && (o = r, r = function (t) {
						return lt().off(t), o.apply(this, arguments)
					}, r.guid = o.guid || (o.guid = lt.guid++)), this.each(function () {
						lt.event.add(this, t, r, n, e)
					})
				},
				one: function (t, e, n, r) {
					return this.on(t, e, n, r, 1)
				},
				off: function (t, e, n) {
					var r, i;
					if (t && t.preventDefault && t.handleObj) return r = t.handleObj, lt(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;
					if ("object" == typeof t) {
						for (i in t) this.off(i, e, t[i]);
						return this
					}
					return (e === !1 || "function" == typeof e) && (n = e, e = void 0), n === !1 && (n = C), this.each(function () {
						lt.event.remove(this, t, n, e)
					})
				},
				trigger: function (t, e) {
					return this.each(function () {
						lt.event.trigger(t, e, this)
					})
				},
				triggerHandler: function (t, e) {
					var n = this[0];
					return n ? lt.event.trigger(t, e, n, !0) : void 0
				}
			});
			var Bt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
				Vt = / jQuery\d+="(?:null|\d+)"/g,
				Xt = new RegExp("<(?:" + Bt + ")[\\s/>]", "i"),
				Ut = /^\s+/,
				zt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
				Wt = /<([\w:]+)/,
				Ht = /<tbody/i,
				Gt = /<|&#?\w+;/,
				Yt = /<(?:script|style|link)/i,
				$t = /checked\s*(?:[^=]|=\s*.checked.)/i,
				Zt = /^$|\/(?:java|ecma)script/i,
				Qt = /^true\/(.*)/,
				Jt = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
				Kt = {
					option: [1, "<select multiple='multiple'>", "</select>"],
					legend: [1, "<fieldset>", "</fieldset>"],
					area: [1, "<map>", "</map>"],
					param: [1, "<object>", "</object>"],
					thead: [1, "<table>", "</table>"],
					tr: [2, "<table><tbody>", "</tbody></table>"],
					col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
					td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
					_default: ot.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
				},
				te = I(vt),
				ee = te.appendChild(vt.createElement("div"));
			Kt.optgroup = Kt.option, Kt.tbody = Kt.tfoot = Kt.colgroup = Kt.caption = Kt.thead, Kt.th = Kt.td, lt.extend({
				clone: function (t, e, n) {
					var r, i, a, o, s, l = lt.contains(t.ownerDocument, t);
					if (ot.html5Clone || lt.isXMLDoc(t) || !Xt.test("<" + t.nodeName + ">") ? a = t.cloneNode(!0) : (ee.innerHTML = t.outerHTML, ee.removeChild(a = ee.firstChild)), !(ot.noCloneEvent && ot.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || lt.isXMLDoc(t)))
						for (r = m(a), s = m(t), o = 0; null != (i = s[o]); ++o) r[o] && T(i, r[o]);
					if (e)
						if (n)
							for (s = s || m(t), r = r || m(a), o = 0; null != (i = s[o]); o++) k(i, r[o]);
						else k(t, a);
					return r = m(a, "script"), r.length > 0 && w(r, !l && m(t, "script")), r = s = i = null, a
				},
				buildFragment: function (t, e, n, r) {
					for (var i, a, o, s, l, u, c, h = t.length, f = I(e), g = [], d = 0; h > d; d++)
						if (a = t[d], a || 0 === a)
							if ("object" === lt.type(a)) lt.merge(g, a.nodeType ? [a] : a);
							else if (Gt.test(a)) {
						for (s = s || f.appendChild(e.createElement("div")), l = (Wt.exec(a) || ["", ""])[1].toLowerCase(), c = Kt[l] || Kt._default, s.innerHTML = c[1] + a.replace(zt, "<$1></$2>") + c[2], i = c[0]; i--;) s = s.lastChild;
						if (!ot.leadingWhitespace && Ut.test(a) && g.push(e.createTextNode(Ut.exec(a)[0])), !ot.tbody)
							for (a = "table" !== l || Ht.test(a) ? "<table>" !== c[1] || Ht.test(a) ? 0 : s : s.firstChild, i = a && a.childNodes.length; i--;) lt.nodeName(u = a.childNodes[i], "tbody") && !u.childNodes.length && a.removeChild(u);
						for (lt.merge(g, s.childNodes), s.textContent = ""; s.firstChild;) s.removeChild(s.firstChild);
						s = f.lastChild
					} else g.push(e.createTextNode(a));
					for (s && f.removeChild(s), ot.appendChecked || lt.grep(m(g, "input"), y), d = 0; a = g[d++];)
						if ((!r || -1 === lt.inArray(a, r)) && (o = lt.contains(a.ownerDocument, a), s = m(f.appendChild(a), "script"), o && w(s), n))
							for (i = 0; a = s[i++];) Zt.test(a.type || "") && n.push(a);
					return s = null, f
				},
				cleanData: function (t, e) {
					for (var n, r, i, a, o = 0, s = lt.expando, l = lt.cache, u = ot.deleteExpando, c = lt.event.special; null != (n = t[o]); o++)
						if ((e || lt.acceptData(n)) && (i = n[s], a = i && l[i])) {
							if (a.events)
								for (r in a.events) c[r] ? lt.event.remove(n, r) : lt.removeEvent(n, r, a.handle);
							l[i] && (delete l[i], u ? delete n[s] : typeof n.removeAttribute !== Tt ? n.removeAttribute(s) : n[s] = null, J.push(i))
						}
				}
			}), lt.fn.extend({
				text: function (t) {
					return Mt(this, function (t) {
						return void 0 === t ? lt.text(this) : this.empty().append((this[0] && this[0].ownerDocument || vt).createTextNode(t))
					}, null, t, arguments.length)
				},
				append: function () {
					return this.domManip(arguments, function (t) {
						if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
							var e = b(this, t);
							e.appendChild(t)
						}
					})
				},
				prepend: function () {
					return this.domManip(arguments, function (t) {
						if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
							var e = b(this, t);
							e.insertBefore(t, e.firstChild)
						}
					})
				},
				before: function () {
					return this.domManip(arguments, function (t) {
						this.parentNode && this.parentNode.insertBefore(t, this)
					})
				},
				after: function () {
					return this.domManip(arguments, function (t) {
						this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
					})
				},
				remove: function (t, e) {
					for (var n, r = t ? lt.filter(t, this) : this, i = 0; null != (n = r[i]); i++) e || 1 !== n.nodeType || lt.cleanData(m(n)), n.parentNode && (e && lt.contains(n.ownerDocument, n) && w(m(n, "script")), n.parentNode.removeChild(n));
					return this
				},
				empty: function () {
					for (var t, e = 0; null != (t = this[e]); e++) {
						for (1 === t.nodeType && lt.cleanData(m(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
						t.options && lt.nodeName(t, "select") && (t.options.length = 0)
					}
					return this
				},
				clone: function (t, e) {
					return t = null == t ? !1 : t, e = null == e ? t : e, this.map(function () {
						return lt.clone(this, t, e)
					})
				},
				html: function (t) {
					return Mt(this, function (t) {
						var e = this[0] || {},
							n = 0,
							r = this.length;
						if (void 0 === t) return 1 === e.nodeType ? e.innerHTML.replace(Vt, "") : void 0;
						if ("string" == typeof t && !Yt.test(t) && (ot.htmlSerialize || !Xt.test(t)) && (ot.leadingWhitespace || !Ut.test(t)) && !Kt[(Wt.exec(t) || ["", ""])[1].toLowerCase()]) {
							t = t.replace(zt, "<$1></$2>");
							try {
								for (; r > n; n++) e = this[n] || {}, 1 === e.nodeType && (lt.cleanData(m(e, !1)), e.innerHTML = t);
								e = 0
							} catch (i) {}
						}
						e && this.empty().append(t)
					}, null, t, arguments.length)
				},
				replaceWith: function () {
					var t = arguments[0];
					return this.domManip(arguments, function (e) {
						t = this.parentNode, lt.cleanData(m(this)), t && t.replaceChild(e, this)
					}), t && (t.length || t.nodeType) ? this : this.remove()
				},
				detach: function (t) {
					return this.remove(t, !0)
				},
				domManip: function (t, e) {
					t = tt.apply([], t);
					var n, r, i, a, o, s, l = 0,
						u = this.length,
						c = this,
						h = u - 1,
						f = t[0],
						g = lt.isFunction(f);
					if (g || u > 1 && "string" == typeof f && !ot.checkClone && $t.test(f)) return this.each(function (n) {
						var r = c.eq(n);
						g && (t[0] = f.call(this, n, r.html())), r.domManip(t, e)
					});
					if (u && (s = lt.buildFragment(t, this[0].ownerDocument, !1, this), n = s.firstChild, 1 === s.childNodes.length && (s = n), n)) {
						for (a = lt.map(m(s, "script"), _), i = a.length; u > l; l++) r = s, l !== h && (r = lt.clone(r, !0, !0), i && lt.merge(a, m(r, "script"))), e.call(this[l], r, l);
						if (i)
							for (o = a[a.length - 1].ownerDocument, lt.map(a, x), l = 0; i > l; l++) r = a[l], Zt.test(r.type || "") && !lt._data(r, "globalEval") && lt.contains(o, r) && (r.src ? lt._evalUrl && lt._evalUrl(r.src) : lt.globalEval((r.text || r.textContent || r.innerHTML || "").replace(Jt, "")));
						s = n = null
					}
					return this
				}
			}), lt.each({
				appendTo: "append",
				prependTo: "prepend",
				insertBefore: "before",
				insertAfter: "after",
				replaceAll: "replaceWith"
			}, function (t, e) {
				lt.fn[t] = function (t) {
					for (var n, r = 0, i = [], a = lt(t), o = a.length - 1; o >= r; r++) n = r === o ? this : this.clone(!0), lt(a[r])[e](n), et.apply(i, n.get());
					return this.pushStack(i)
				}
			});
			var ne, re = {};
			! function () {
				var t;
				ot.shrinkWrapBlocks = function () {
					if (null != t) return t;
					t = !1;
					var e, n, r;
					return n = vt.getElementsByTagName("body")[0], n && n.style ? (e = vt.createElement("div"), r = vt.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(r).appendChild(e), typeof e.style.zoom !== Tt && (e.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", e.appendChild(vt.createElement("div")).style.width = "5px", t = 3 !== e.offsetWidth), n.removeChild(r), t) : void 0
				}
			}();
			var ie, ae, oe = /^margin/,
				se = new RegExp("^(" + Dt + ")(?!px)[a-z%]+$", "i"),
				le = /^(top|right|bottom|left)$/;
			n.getComputedStyle ? (ie = function (t) {
					return t.ownerDocument.defaultView.opener ? t.ownerDocument.defaultView.getComputedStyle(t, null) : n.getComputedStyle(t, null)
				}, ae = function (t, e, n) {
					var r, i, a, o, s = t.style;
					return n = n || ie(t), o = n ? n.getPropertyValue(e) || n[e] : void 0, n && ("" !== o || lt.contains(t.ownerDocument, t) || (o = lt.style(t, e)), se.test(o) && oe.test(e) && (r = s.width, i = s.minWidth, a = s.maxWidth, s.minWidth = s.maxWidth = s.width = o, o = n.width, s.width = r, s.minWidth = i, s.maxWidth = a)), void 0 === o ? o : o + ""
				}) : vt.documentElement.currentStyle && (ie = function (t) {
					return t.currentStyle
				}, ae = function (t, e, n) {
					var r, i, a, o, s = t.style;
					return n = n || ie(t), o = n ? n[e] : void 0, null == o && s && s[e] && (o = s[e]), se.test(o) && !le.test(e) && (r = s.left, i = t.runtimeStyle, a = i && i.left, a && (i.left = t.currentStyle.left), s.left = "fontSize" === e ? "1em" : o, o = s.pixelLeft + "px", s.left = r, a && (i.left = a)), void 0 === o ? o : o + "" || "auto"
				}),
				function () {
					function t() {
						var t, e, r, i;
						e = vt.getElementsByTagName("body")[0], e && e.style && (t = vt.createElement("div"), r = vt.createElement("div"), r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", e.appendChild(r).appendChild(t), t.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", a = o = !1, l = !0, n.getComputedStyle && (a = "1%" !== (n.getComputedStyle(t, null) || {}).top, o = "4px" === (n.getComputedStyle(t, null) || {
							width: "4px"
						}).width, i = t.appendChild(vt.createElement("div")), i.style.cssText = t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", t.style.width = "1px", l = !parseFloat((n.getComputedStyle(i, null) || {}).marginRight), t.removeChild(i)), t.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = t.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", s = 0 === i[0].offsetHeight, s && (i[0].style.display = "", i[1].style.display = "none", s = 0 === i[0].offsetHeight), e.removeChild(r))
					}
					var e, r, i, a, o, s, l;
					e = vt.createElement("div"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", i = e.getElementsByTagName("a")[0], r = i && i.style, r && (r.cssText = "float:left;opacity:.5", ot.opacity = "0.5" === r.opacity, ot.cssFloat = !!r.cssFloat, e.style.backgroundClip = "content-box", e.cloneNode(!0).style.backgroundClip = "", ot.clearCloneStyle = "content-box" === e.style.backgroundClip, ot.boxSizing = "" === r.boxSizing || "" === r.MozBoxSizing || "" === r.WebkitBoxSizing, lt.extend(ot, {
						reliableHiddenOffsets: function () {
							return null == s && t(), s
						},
						boxSizingReliable: function () {
							return null == o && t(), o
						},
						pixelPosition: function () {
							return null == a && t(), a
						},
						reliableMarginRight: function () {
							return null == l && t(), l
						}
					}))
				}(), lt.swap = function (t, e, n, r) {
					var i, a, o = {};
					for (a in e) o[a] = t.style[a], t.style[a] = e[a];
					i = n.apply(t, r || []);
					for (a in e) t.style[a] = o[a];
					return i
				};
			var ue = /alpha\([^)]*\)/i,
				ce = /opacity\s*=\s*([^)]*)/,
				he = /^(none|table(?!-c[ea]).+)/,
				fe = new RegExp("^(" + Dt + ")(.*)$", "i"),
				ge = new RegExp("^([+-])=(" + Dt + ")", "i"),
				de = {
					position: "absolute",
					visibility: "hidden",
					display: "block"
				},
				pe = {
					letterSpacing: "0",
					fontWeight: "400"
				},
				Ae = ["Webkit", "O", "Moz", "ms"];
			lt.extend({
				cssHooks: {
					opacity: {
						get: function (t, e) {
							if (e) {
								var n = ae(t, "opacity");
								return "" === n ? "1" : n
							}
						}
					}
				},
				cssNumber: {
					columnCount: !0,
					fillOpacity: !0,
					flexGrow: !0,
					flexShrink: !0,
					fontWeight: !0,
					lineHeight: !0,
					opacity: !0,
					order: !0,
					orphans: !0,
					widows: !0,
					zIndex: !0,
					zoom: !0
				},
				cssProps: {
					"float": ot.cssFloat ? "cssFloat" : "styleFloat"
				},
				style: function (t, e, n, r) {
					if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
						var i, a, o, s = lt.camelCase(e),
							l = t.style;
						if (e = lt.cssProps[s] || (lt.cssProps[s] = P(l, s)), o = lt.cssHooks[e] || lt.cssHooks[s], void 0 === n) return o && "get" in o && void 0 !== (i = o.get(t, !1, r)) ? i : l[e];
						if (a = typeof n, "string" === a && (i = ge.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(lt.css(t, e)), a = "number"), null != n && n === n && ("number" !== a || lt.cssNumber[s] || (n += "px"), ot.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(o && "set" in o && void 0 === (n = o.set(t, n, r))))) try {
							l[e] = n
						} catch (u) {}
					}
				},
				css: function (t, e, n, r) {
					var i, a, o, s = lt.camelCase(e);
					return e = lt.cssProps[s] || (lt.cssProps[s] = P(t.style, s)), o = lt.cssHooks[e] || lt.cssHooks[s], o && "get" in o && (a = o.get(t, !0, n)), void 0 === a && (a = ae(t, e, r)), "normal" === a && e in pe && (a = pe[e]), "" === n || n ? (i = parseFloat(a), n === !0 || lt.isNumeric(i) ? i || 0 : a) : a
				}
			}), lt.each(["height", "width"], function (t, e) {
				lt.cssHooks[e] = {
					get: function (t, n, r) {
						return n ? he.test(lt.css(t, "display")) && 0 === t.offsetWidth ? lt.swap(t, de, function () {
							return j(t, e, r)
						}) : j(t, e, r) : void 0
					},
					set: function (t, n, r) {
						var i = r && ie(t);
						return M(t, n, r ? L(t, e, r, ot.boxSizing && "border-box" === lt.css(t, "boxSizing", !1, i), i) : 0)
					}
				}
			}), ot.opacity || (lt.cssHooks.opacity = {
				get: function (t, e) {
					return ce.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
				},
				set: function (t, e) {
					var n = t.style,
						r = t.currentStyle,
						i = lt.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
						a = r && r.filter || n.filter || "";
					n.zoom = 1, (e >= 1 || "" === e) && "" === lt.trim(a.replace(ue, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || r && !r.filter) || (n.filter = ue.test(a) ? a.replace(ue, i) : a + " " + i)
				}
			}), lt.cssHooks.marginRight = D(ot.reliableMarginRight, function (t, e) {
				return e ? lt.swap(t, {
					display: "inline-block"
				}, ae, [t, "marginRight"]) : void 0
			}), lt.each({
				margin: "",
				padding: "",
				border: "Width"
			}, function (t, e) {
				lt.cssHooks[t + e] = {
					expand: function (n) {
						for (var r = 0, i = {}, a = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++) i[t + Pt[r] + e] = a[r] || a[r - 2] || a[0];
						return i
					}
				}, oe.test(t) || (lt.cssHooks[t + e].set = M)
			}), lt.fn.extend({
				css: function (t, e) {
					return Mt(this, function (t, e, n) {
						var r, i, a = {},
							o = 0;
						if (lt.isArray(e)) {
							for (r = ie(t), i = e.length; i > o; o++) a[e[o]] = lt.css(t, e[o], !1, r);
							return a
						}
						return void 0 !== n ? lt.style(t, e, n) : lt.css(t, e)
					}, t, e, arguments.length > 1)
				},
				show: function () {
					return O(this, !0)
				},
				hide: function () {
					return O(this)
				},
				toggle: function (t) {
					return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
						Ot(this) ? lt(this).show() : lt(this).hide()
					})
				}
			}), lt.Tween = F, F.prototype = {
				constructor: F,
				init: function (t, e, n, r, i, a) {
					this.elem = t, this.prop = n, this.easing = i || "swing", this.options = e, this.start = this.now = this.cur(), this.end = r, this.unit = a || (lt.cssNumber[n] ? "" : "px")
				},
				cur: function () {
					var t = F.propHooks[this.prop];
					return t && t.get ? t.get(this) : F.propHooks._default.get(this)
				},
				run: function (t) {
					var e, n = F.propHooks[this.prop];
					return this.options.duration ? this.pos = e = lt.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this
				}
			}, F.prototype.init.prototype = F.prototype, F.propHooks = {
				_default: {
					get: function (t) {
						var e;
						return null == t.elem[t.prop] || t.elem.style && null != t.elem.style[t.prop] ? (e = lt.css(t.elem, t.prop, ""), e && "auto" !== e ? e : 0) : t.elem[t.prop]
					},
					set: function (t) {
						lt.fx.step[t.prop] ? lt.fx.step[t.prop](t) : t.elem.style && (null != t.elem.style[lt.cssProps[t.prop]] || lt.cssHooks[t.prop]) ? lt.style(t.elem, t.prop, t.now + t.unit) : t.elem[t.prop] = t.now
					}
				}
			}, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
				set: function (t) {
					t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
				}
			}, lt.easing = {
				linear: function (t) {
					return t
				},
				swing: function (t) {
					return .5 - Math.cos(t * Math.PI) / 2
				}
			}, lt.fx = F.prototype.init, lt.fx.step = {};
			var Ce, ve, Ie = /^(?:toggle|show|hide)$/,
				me = new RegExp("^(?:([+-])=|)(" + Dt + ")([a-z%]*)$", "i"),
				ye = /queueHooks$/,
				be = [B],
				_e = {
					"*": [function (t, e) {
						var n = this.createTween(t, e),
							r = n.cur(),
							i = me.exec(e),
							a = i && i[3] || (lt.cssNumber[t] ? "" : "px"),
							o = (lt.cssNumber[t] || "px" !== a && +r) && me.exec(lt.css(n.elem, t)),
							s = 1,
							l = 20;
						if (o && o[3] !== a) {
							a = a || o[3], i = i || [], o = +r || 1;
							do s = s || ".5", o /= s, lt.style(n.elem, t, o + a); while (s !== (s = n.cur() / r) && 1 !== s && --l)
						}
						return i && (o = n.start = +o || +r || 0, n.unit = a, n.end = i[1] ? o + (i[1] + 1) * i[2] : +i[2]), n
					}]
				};
			lt.Animation = lt.extend(X, {
					tweener: function (t, e) {
						lt.isFunction(t) ? (e = t, t = ["*"]) : t = t.split(" ");
						for (var n, r = 0, i = t.length; i > r; r++) n = t[r], _e[n] = _e[n] || [], _e[n].unshift(e)
					},
					prefilter: function (t, e) {
						e ? be.unshift(t) : be.push(t)
					}
				}), lt.speed = function (t, e, n) {
					var r = t && "object" == typeof t ? lt.extend({}, t) : {
						complete: n || !n && e || lt.isFunction(t) && t,
						duration: t,
						easing: n && e || e && !lt.isFunction(e) && e
					};
					return r.duration = lt.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in lt.fx.speeds ? lt.fx.speeds[r.duration] : lt.fx.speeds._default, (null == r.queue || r.queue === !0) && (r.queue = "fx"), r.old = r.complete, r.complete = function () {
						lt.isFunction(r.old) && r.old.call(this), r.queue && lt.dequeue(this, r.queue)
					}, r
				}, lt.fn.extend({
					fadeTo: function (t, e, n, r) {
						return this.filter(Ot).css("opacity", 0).show().end().animate({
							opacity: e
						}, t, n, r)
					},
					animate: function (t, e, n, r) {
						var i = lt.isEmptyObject(t),
							a = lt.speed(e, n, r),
							o = function () {
								var e = X(this, lt.extend({}, t), a);
								(i || lt._data(this, "finish")) && e.stop(!0)
							};
						return o.finish = o, i || a.queue === !1 ? this.each(o) : this.queue(a.queue, o)
					},
					stop: function (t, e, n) {
						var r = function (t) {
							var e = t.stop;
							delete t.stop, e(n)
						};
						return "string" != typeof t && (n = e, e = t, t = void 0), e && t !== !1 && this.queue(t || "fx", []), this.each(function () {
							var e = !0,
								i = null != t && t + "queueHooks",
								a = lt.timers,
								o = lt._data(this);
							if (i) o[i] && o[i].stop && r(o[i]);
							else
								for (i in o) o[i] && o[i].stop && ye.test(i) && r(o[i]);
							for (i = a.length; i--;) a[i].elem !== this || null != t && a[i].queue !== t || (a[i].anim.stop(n), e = !1, a.splice(i, 1));
							(e || !n) && lt.dequeue(this, t)
						})
					},
					finish: function (t) {
						return t !== !1 && (t = t || "fx"), this.each(function () {
							var e, n = lt._data(this),
								r = n[t + "queue"],
								i = n[t + "queueHooks"],
								a = lt.timers,
								o = r ? r.length : 0;
							for (n.finish = !0, lt.queue(this, t, []), i && i.stop && i.stop.call(this, !0), e = a.length; e--;) a[e].elem === this && a[e].queue === t && (a[e].anim.stop(!0), a.splice(e, 1));
							for (e = 0; o > e; e++) r[e] && r[e].finish && r[e].finish.call(this);
							delete n.finish
						})
					}
				}), lt.each(["toggle", "show", "hide"], function (t, e) {
					var n = lt.fn[e];
					lt.fn[e] = function (t, r, i) {
						return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(q(e, !0), t, r, i)
					}
				}), lt.each({
					slideDown: q("show"),
					slideUp: q("hide"),
					slideToggle: q("toggle"),
					fadeIn: {
						opacity: "show"
					},
					fadeOut: {
						opacity: "hide"
					},
					fadeToggle: {
						opacity: "toggle"
					}
				}, function (t, e) {
					lt.fn[t] = function (t, n, r) {
						return this.animate(e, t, n, r)
					}
				}), lt.timers = [], lt.fx.tick = function () {
					var t, e = lt.timers,
						n = 0;
					for (Ce = lt.now(); n < e.length; n++) t = e[n], t() || e[n] !== t || e.splice(n--, 1);
					e.length || lt.fx.stop(), Ce = void 0
				}, lt.fx.timer = function (t) {
					lt.timers.push(t), t() ? lt.fx.start() : lt.timers.pop()
				}, lt.fx.interval = 13, lt.fx.start = function () {
					ve || (ve = setInterval(lt.fx.tick, lt.fx.interval))
				}, lt.fx.stop = function () {
					clearInterval(ve), ve = null
				}, lt.fx.speeds = {
					slow: 600,
					fast: 200,
					_default: 400
				}, lt.fn.delay = function (t, e) {
					return t = lt.fx ? lt.fx.speeds[t] || t : t, e = e || "fx", this.queue(e, function (e, n) {
						var r = setTimeout(e, t);
						n.stop = function () {
							clearTimeout(r)
						}
					})
				},
				function () {
					var t, e, n, r, i;
					e = vt.createElement("div"), e.setAttribute("className", "t"), e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", r = e.getElementsByTagName("a")[0], n = vt.createElement("select"), i = n.appendChild(vt.createElement("option")), t = e.getElementsByTagName("input")[0], r.style.cssText = "top:1px", ot.getSetAttribute = "t" !== e.className, ot.style = /top/.test(r.getAttribute("style")), ot.hrefNormalized = "/a" === r.getAttribute("href"), ot.checkOn = !!t.value, ot.optSelected = i.selected, ot.enctype = !!vt.createElement("form").enctype, n.disabled = !0, ot.optDisabled = !i.disabled, t = vt.createElement("input"), t.setAttribute("value", ""), ot.input = "" === t.getAttribute("value"), t.value = "t", t.setAttribute("type", "radio"), ot.radioValue = "t" === t.value
				}();
			var xe = /\r/g;
			lt.fn.extend({
				val: function (t) {
					var e, n, r, i = this[0]; {
						if (arguments.length) return r = lt.isFunction(t), this.each(function (n) {
							var i;
							1 === this.nodeType && (i = r ? t.call(this, n, lt(this).val()) : t, null == i ? i = "" : "number" == typeof i ? i += "" : lt.isArray(i) && (i = lt.map(i, function (t) {
								return null == t ? "" : t + ""
							})), e = lt.valHooks[this.type] || lt.valHooks[this.nodeName.toLowerCase()], e && "set" in e && void 0 !== e.set(this, i, "value") || (this.value = i))
						});
						if (i) return e = lt.valHooks[i.type] || lt.valHooks[i.nodeName.toLowerCase()], e && "get" in e && void 0 !== (n = e.get(i, "value")) ? n : (n = i.value, "string" == typeof n ? n.replace(xe, "") : null == n ? "" : n)
					}
				}
			}), lt.extend({
				valHooks: {
					option: {
						get: function (t) {
							var e = lt.find.attr(t, "value");
							return null != e ? e : lt.trim(lt.text(t))
						}
					},
					select: {
						get: function (t) {
							for (var e, n, r = t.options, i = t.selectedIndex, a = "select-one" === t.type || 0 > i, o = a ? null : [], s = a ? i + 1 : r.length, l = 0 > i ? s : a ? i : 0; s > l; l++)
								if (n = r[l], (n.selected || l === i) && (ot.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !lt.nodeName(n.parentNode, "optgroup"))) {
									if (e = lt(n).val(), a) return e;
									o.push(e)
								} return o
						},
						set: function (t, e) {
							for (var n, r, i = t.options, a = lt.makeArray(e), o = i.length; o--;)
								if (r = i[o], lt.inArray(lt.valHooks.option.get(r), a) >= 0) try {
									r.selected = n = !0
								} catch (s) {
									r.scrollHeight
								} else r.selected = !1;
							return n || (t.selectedIndex = -1), i
						}
					}
				}
			}), lt.each(["radio", "checkbox"], function () {
				lt.valHooks[this] = {
					set: function (t, e) {
						return lt.isArray(e) ? t.checked = lt.inArray(lt(t).val(), e) >= 0 : void 0
					}
				}, ot.checkOn || (lt.valHooks[this].get = function (t) {
					return null === t.getAttribute("value") ? "on" : t.value
				})
			});
			var we, ke, Te = lt.expr.attrHandle,
				Ee = /^(?:checked|selected)$/i,
				Se = ot.getSetAttribute,
				De = ot.input;
			lt.fn.extend({
				attr: function (t, e) {
					return Mt(this, lt.attr, t, e, arguments.length > 1)
				},
				removeAttr: function (t) {
					return this.each(function () {
						lt.removeAttr(this, t)
					})
				}
			}), lt.extend({
				attr: function (t, e, n) {
					var r, i, a = t.nodeType;
					if (t && 3 !== a && 8 !== a && 2 !== a) return typeof t.getAttribute === Tt ? lt.prop(t, e, n) : (1 === a && lt.isXMLDoc(t) || (e = e.toLowerCase(), r = lt.attrHooks[e] || (lt.expr.match.bool.test(e) ? ke : we)), void 0 === n ? r && "get" in r && null !== (i = r.get(t, e)) ? i : (i = lt.find.attr(t, e), null == i ? void 0 : i) : null !== n ? r && "set" in r && void 0 !== (i = r.set(t, n, e)) ? i : (t.setAttribute(e, n + ""), n) : void lt.removeAttr(t, e))
				},
				removeAttr: function (t, e) {
					var n, r, i = 0,
						a = e && e.match(_t);
					if (a && 1 === t.nodeType)
						for (; n = a[i++];) r = lt.propFix[n] || n, lt.expr.match.bool.test(n) ? De && Se || !Ee.test(n) ? t[r] = !1 : t[lt.camelCase("default-" + n)] = t[r] = !1 : lt.attr(t, n, ""), t.removeAttribute(Se ? n : r)
				},
				attrHooks: {
					type: {
						set: function (t, e) {
							if (!ot.radioValue && "radio" === e && lt.nodeName(t, "input")) {
								var n = t.value;
								return t.setAttribute("type", e), n && (t.value = n), e
							}
						}
					}
				}
			}), ke = {
				set: function (t, e, n) {
					return e === !1 ? lt.removeAttr(t, n) : De && Se || !Ee.test(n) ? t.setAttribute(!Se && lt.propFix[n] || n, n) : t[lt.camelCase("default-" + n)] = t[n] = !0, n
				}
			}, lt.each(lt.expr.match.bool.source.match(/\w+/g), function (t, e) {
				var n = Te[e] || lt.find.attr;
				Te[e] = De && Se || !Ee.test(e) ? function (t, e, r) {
					var i, a;
					return r || (a = Te[e], Te[e] = i, i = null != n(t, e, r) ? e.toLowerCase() : null, Te[e] = a), i
				} : function (t, e, n) {
					return n ? void 0 : t[lt.camelCase("default-" + e)] ? e.toLowerCase() : null
				}
			}), De && Se || (lt.attrHooks.value = {
				set: function (t, e, n) {
					return lt.nodeName(t, "input") ? void(t.defaultValue = e) : we && we.set(t, e, n)
				}
			}), Se || (we = {
				set: function (t, e, n) {
					var r = t.getAttributeNode(n);
					return r || t.setAttributeNode(r = t.ownerDocument.createAttribute(n)), r.value = e += "", "value" === n || e === t.getAttribute(n) ? e : void 0
				}
			}, Te.id = Te.name = Te.coords = function (t, e, n) {
				var r;
				return n ? void 0 : (r = t.getAttributeNode(e)) && "" !== r.value ? r.value : null
			}, lt.valHooks.button = {
				get: function (t, e) {
					var n = t.getAttributeNode(e);
					return n && n.specified ? n.value : void 0
				},
				set: we.set
			}, lt.attrHooks.contenteditable = {
				set: function (t, e, n) {
					we.set(t, "" === e ? !1 : e, n)
				}
			}, lt.each(["width", "height"], function (t, e) {
				lt.attrHooks[e] = {
					set: function (t, n) {
						return "" === n ? (t.setAttribute(e, "auto"), n) : void 0
					}
				}
			})), ot.style || (lt.attrHooks.style = {
				get: function (t) {
					return t.style.cssText || void 0
				},
				set: function (t, e) {
					return t.style.cssText = e + ""
				}
			});
			var Pe = /^(?:input|select|textarea|button|object)$/i,
				Oe = /^(?:a|area)$/i;
			lt.fn.extend({
				prop: function (t, e) {
					return Mt(this, lt.prop, t, e, arguments.length > 1)
				},
				removeProp: function (t) {
					return t = lt.propFix[t] || t, this.each(function () {
						try {
							this[t] = void 0, delete this[t]
						} catch (e) {}
					})
				}
			}), lt.extend({
				propFix: {
					"for": "htmlFor",
					"class": "className"
				},
				prop: function (t, e, n) {
					var r, i, a, o = t.nodeType;
					if (t && 3 !== o && 8 !== o && 2 !== o) return a = 1 !== o || !lt.isXMLDoc(t), a && (e = lt.propFix[e] || e, i = lt.propHooks[e]),
						void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e]
				},
				propHooks: {
					tabIndex: {
						get: function (t) {
							var e = lt.find.attr(t, "tabindex");
							return e ? parseInt(e, 10) : Pe.test(t.nodeName) || Oe.test(t.nodeName) && t.href ? 0 : -1
						}
					}
				}
			}), ot.hrefNormalized || lt.each(["href", "src"], function (t, e) {
				lt.propHooks[e] = {
					get: function (t) {
						return t.getAttribute(e, 4)
					}
				}
			}), ot.optSelected || (lt.propHooks.selected = {
				get: function (t) {
					var e = t.parentNode;
					return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
				}
			}), lt.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
				lt.propFix[this.toLowerCase()] = this
			}), ot.enctype || (lt.propFix.enctype = "encoding");
			var Me = /[\t\r\n\f]/g;
			lt.fn.extend({
				addClass: function (t) {
					var e, n, r, i, a, o, s = 0,
						l = this.length,
						u = "string" == typeof t && t;
					if (lt.isFunction(t)) return this.each(function (e) {
						lt(this).addClass(t.call(this, e, this.className))
					});
					if (u)
						for (e = (t || "").match(_t) || []; l > s; s++)
							if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Me, " ") : " ")) {
								for (a = 0; i = e[a++];) r.indexOf(" " + i + " ") < 0 && (r += i + " ");
								o = lt.trim(r), n.className !== o && (n.className = o)
							} return this
				},
				removeClass: function (t) {
					var e, n, r, i, a, o, s = 0,
						l = this.length,
						u = 0 === arguments.length || "string" == typeof t && t;
					if (lt.isFunction(t)) return this.each(function (e) {
						lt(this).removeClass(t.call(this, e, this.className))
					});
					if (u)
						for (e = (t || "").match(_t) || []; l > s; s++)
							if (n = this[s], r = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Me, " ") : "")) {
								for (a = 0; i = e[a++];)
									for (; r.indexOf(" " + i + " ") >= 0;) r = r.replace(" " + i + " ", " ");
								o = t ? lt.trim(r) : "", n.className !== o && (n.className = o)
							} return this
				},
				toggleClass: function (t, e) {
					var n = typeof t;
					return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : lt.isFunction(t) ? this.each(function (n) {
						lt(this).toggleClass(t.call(this, n, this.className, e), e)
					}) : this.each(function () {
						if ("string" === n)
							for (var e, r = 0, i = lt(this), a = t.match(_t) || []; e = a[r++];) i.hasClass(e) ? i.removeClass(e) : i.addClass(e);
						else(n === Tt || "boolean" === n) && (this.className && lt._data(this, "__className__", this.className), this.className = this.className || t === !1 ? "" : lt._data(this, "__className__") || "")
					})
				},
				hasClass: function (t) {
					for (var e = " " + t + " ", n = 0, r = this.length; r > n; n++)
						if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Me, " ").indexOf(e) >= 0) return !0;
					return !1
				}
			}), lt.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
				lt.fn[e] = function (t, n) {
					return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
				}
			}), lt.fn.extend({
				hover: function (t, e) {
					return this.mouseenter(t).mouseleave(e || t)
				},
				bind: function (t, e, n) {
					return this.on(t, null, e, n)
				},
				unbind: function (t, e) {
					return this.off(t, null, e)
				},
				delegate: function (t, e, n, r) {
					return this.on(e, t, n, r)
				},
				undelegate: function (t, e, n) {
					return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
				}
			});
			var Le = lt.now(),
				je = /\?/,
				Fe = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
			lt.parseJSON = function (t) {
				if (n.JSON && n.JSON.parse) return n.JSON.parse(t + "");
				var e, r = null,
					i = lt.trim(t + "");
				return i && !lt.trim(i.replace(Fe, function (t, n, i, a) {
					return e && n && (r = 0), 0 === r ? t : (e = i || n, r += !a - !i, "")
				})) ? Function("return " + i)() : lt.error("Invalid JSON: " + t)
			}, lt.parseXML = function (t) {
				var e, r;
				if (!t || "string" != typeof t) return null;
				try {
					n.DOMParser ? (r = new DOMParser, e = r.parseFromString(t, "text/xml")) : (e = new ActiveXObject("Microsoft.XMLDOM"), e.async = "false", e.loadXML(t))
				} catch (i) {
					e = void 0
				}
				return e && e.documentElement && !e.getElementsByTagName("parsererror").length || lt.error("Invalid XML: " + t), e
			};
			var Ne, qe, Re = /#.*$/,
				Be = /([?&])_=[^&]*/,
				Ve = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
				Xe = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
				Ue = /^(?:GET|HEAD)$/,
				ze = /^\/\//,
				We = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
				He = {},
				Ge = {},
				Ye = "*/".concat("*");
			try {
				qe = location.href
			} catch ($e) {
				qe = vt.createElement("a"), qe.href = "", qe = qe.href
			}
			Ne = We.exec(qe.toLowerCase()) || [], lt.extend({
				active: 0,
				lastModified: {},
				etag: {},
				ajaxSettings: {
					url: qe,
					type: "GET",
					isLocal: Xe.test(Ne[1]),
					global: !0,
					processData: !0,
					async: !0,
					contentType: "application/x-www-form-urlencoded; charset=UTF-8",
					accepts: {
						"*": Ye,
						text: "text/plain",
						html: "text/html",
						xml: "application/xml, text/xml",
						json: "application/json, text/javascript"
					},
					contents: {
						xml: /xml/,
						html: /html/,
						json: /json/
					},
					responseFields: {
						xml: "responseXML",
						text: "responseText",
						json: "responseJSON"
					},
					converters: {
						"* text": String,
						"text html": !0,
						"text json": lt.parseJSON,
						"text xml": lt.parseXML
					},
					flatOptions: {
						url: !0,
						context: !0
					}
				},
				ajaxSetup: function (t, e) {
					return e ? W(W(t, lt.ajaxSettings), e) : W(lt.ajaxSettings, t)
				},
				ajaxPrefilter: U(He),
				ajaxTransport: U(Ge),
				ajax: function (t, e) {
					function n(t, e, n, r) {
						var i, c, C, v, m, b = e;
						2 !== I && (I = 2, s && clearTimeout(s), u = void 0, o = r || "", y.readyState = t > 0 ? 4 : 0, i = t >= 200 && 300 > t || 304 === t, n && (v = H(h, y, n)), v = G(h, v, y, i), i ? (h.ifModified && (m = y.getResponseHeader("Last-Modified"), m && (lt.lastModified[a] = m), m = y.getResponseHeader("etag"), m && (lt.etag[a] = m)), 204 === t || "HEAD" === h.type ? b = "nocontent" : 304 === t ? b = "notmodified" : (b = v.state, c = v.data, C = v.error, i = !C)) : (C = b, (t || !b) && (b = "error", 0 > t && (t = 0))), y.status = t, y.statusText = (e || b) + "", i ? d.resolveWith(f, [c, b, y]) : d.rejectWith(f, [y, b, C]), y.statusCode(A), A = void 0, l && g.trigger(i ? "ajaxSuccess" : "ajaxError", [y, h, i ? c : C]), p.fireWith(f, [y, b]), l && (g.trigger("ajaxComplete", [y, h]), --lt.active || lt.event.trigger("ajaxStop")))
					}
					"object" == typeof t && (e = t, t = void 0), e = e || {};
					var r, i, a, o, s, l, u, c, h = lt.ajaxSetup({}, e),
						f = h.context || h,
						g = h.context && (f.nodeType || f.jquery) ? lt(f) : lt.event,
						d = lt.Deferred(),
						p = lt.Callbacks("once memory"),
						A = h.statusCode || {},
						C = {},
						v = {},
						I = 0,
						m = "canceled",
						y = {
							readyState: 0,
							getResponseHeader: function (t) {
								var e;
								if (2 === I) {
									if (!c)
										for (c = {}; e = Ve.exec(o);) c[e[1].toLowerCase()] = e[2];
									e = c[t.toLowerCase()]
								}
								return null == e ? null : e
							},
							getAllResponseHeaders: function () {
								return 2 === I ? o : null
							},
							setRequestHeader: function (t, e) {
								var n = t.toLowerCase();
								return I || (t = v[n] = v[n] || t, C[t] = e), this
							},
							overrideMimeType: function (t) {
								return I || (h.mimeType = t), this
							},
							statusCode: function (t) {
								var e;
								if (t)
									if (2 > I)
										for (e in t) A[e] = [A[e], t[e]];
									else y.always(t[y.status]);
								return this
							},
							abort: function (t) {
								var e = t || m;
								return u && u.abort(e), n(0, e), this
							}
						};
					if (d.promise(y).complete = p.add, y.success = y.done, y.error = y.fail, h.url = ((t || h.url || qe) + "").replace(Re, "").replace(ze, Ne[1] + "//"), h.type = e.method || e.type || h.method || h.type, h.dataTypes = lt.trim(h.dataType || "*").toLowerCase().match(_t) || [""], null == h.crossDomain && (r = We.exec(h.url.toLowerCase()), h.crossDomain = !(!r || r[1] === Ne[1] && r[2] === Ne[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (Ne[3] || ("http:" === Ne[1] ? "80" : "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = lt.param(h.data, h.traditional)), z(He, h, e, y), 2 === I) return y;
					l = lt.event && h.global, l && 0 === lt.active++ && lt.event.trigger("ajaxStart"), h.type = h.type.toUpperCase(), h.hasContent = !Ue.test(h.type), a = h.url, h.hasContent || (h.data && (a = h.url += (je.test(a) ? "&" : "?") + h.data, delete h.data), h.cache === !1 && (h.url = Be.test(a) ? a.replace(Be, "$1_=" + Le++) : a + (je.test(a) ? "&" : "?") + "_=" + Le++)), h.ifModified && (lt.lastModified[a] && y.setRequestHeader("If-Modified-Since", lt.lastModified[a]), lt.etag[a] && y.setRequestHeader("If-None-Match", lt.etag[a])), (h.data && h.hasContent && h.contentType !== !1 || e.contentType) && y.setRequestHeader("Content-Type", h.contentType), y.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Ye + "; q=0.01" : "") : h.accepts["*"]);
					for (i in h.headers) y.setRequestHeader(i, h.headers[i]);
					if (h.beforeSend && (h.beforeSend.call(f, y, h) === !1 || 2 === I)) return y.abort();
					m = "abort";
					for (i in {
							success: 1,
							error: 1,
							complete: 1
						}) y[i](h[i]);
					if (u = z(Ge, h, e, y)) {
						y.readyState = 1, l && g.trigger("ajaxSend", [y, h]), h.async && h.timeout > 0 && (s = setTimeout(function () {
							y.abort("timeout")
						}, h.timeout));
						try {
							I = 1, u.send(C, n)
						} catch (b) {
							if (!(2 > I)) throw b;
							n(-1, b)
						}
					} else n(-1, "No Transport");
					return y
				},
				getJSON: function (t, e, n) {
					return lt.get(t, e, n, "json")
				},
				getScript: function (t, e) {
					return lt.get(t, void 0, e, "script")
				}
			}), lt.each(["get", "post"], function (t, e) {
				lt[e] = function (t, n, r, i) {
					return lt.isFunction(n) && (i = i || r, r = n, n = void 0), lt.ajax({
						url: t,
						type: e,
						dataType: i,
						data: n,
						success: r
					})
				}
			}), lt._evalUrl = function (t) {
				return lt.ajax({
					url: t,
					type: "GET",
					dataType: "script",
					async: !1,
					global: !1,
					"throws": !0
				})
			}, lt.fn.extend({
				wrapAll: function (t) {
					if (lt.isFunction(t)) return this.each(function (e) {
						lt(this).wrapAll(t.call(this, e))
					});
					if (this[0]) {
						var e = lt(t, this[0].ownerDocument).eq(0).clone(!0);
						this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
							for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
							return t
						}).append(this)
					}
					return this
				},
				wrapInner: function (t) {
					return lt.isFunction(t) ? this.each(function (e) {
						lt(this).wrapInner(t.call(this, e))
					}) : this.each(function () {
						var e = lt(this),
							n = e.contents();
						n.length ? n.wrapAll(t) : e.append(t)
					})
				},
				wrap: function (t) {
					var e = lt.isFunction(t);
					return this.each(function (n) {
						lt(this).wrapAll(e ? t.call(this, n) : t)
					})
				},
				unwrap: function () {
					return this.parent().each(function () {
						lt.nodeName(this, "body") || lt(this).replaceWith(this.childNodes)
					}).end()
				}
			}), lt.expr.filters.hidden = function (t) {
				return t.offsetWidth <= 0 && t.offsetHeight <= 0 || !ot.reliableHiddenOffsets() && "none" === (t.style && t.style.display || lt.css(t, "display"))
			}, lt.expr.filters.visible = function (t) {
				return !lt.expr.filters.hidden(t)
			};
			var Ze = /%20/g,
				Qe = /\[\]$/,
				Je = /\r?\n/g,
				Ke = /^(?:submit|button|image|reset|file)$/i,
				tn = /^(?:input|select|textarea|keygen)/i;
			lt.param = function (t, e) {
				var n, r = [],
					i = function (t, e) {
						e = lt.isFunction(e) ? e() : null == e ? "" : e, r[r.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
					};
				if (void 0 === e && (e = lt.ajaxSettings && lt.ajaxSettings.traditional), lt.isArray(t) || t.jquery && !lt.isPlainObject(t)) lt.each(t, function () {
					i(this.name, this.value)
				});
				else
					for (n in t) Y(n, t[n], e, i);
				return r.join("&").replace(Ze, "+")
			}, lt.fn.extend({
				serialize: function () {
					return lt.param(this.serializeArray())
				},
				serializeArray: function () {
					return this.map(function () {
						var t = lt.prop(this, "elements");
						return t ? lt.makeArray(t) : this
					}).filter(function () {
						var t = this.type;
						return this.name && !lt(this).is(":disabled") && tn.test(this.nodeName) && !Ke.test(t) && (this.checked || !Lt.test(t))
					}).map(function (t, e) {
						var n = lt(this).val();
						return null == n ? null : lt.isArray(n) ? lt.map(n, function (t) {
							return {
								name: e.name,
								value: t.replace(Je, "\r\n")
							}
						}) : {
							name: e.name,
							value: n.replace(Je, "\r\n")
						}
					}).get()
				}
			}), lt.ajaxSettings.xhr = void 0 !== n.ActiveXObject ? function () {
				return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && $() || Z()
			} : $;
			var en = 0,
				nn = {},
				rn = lt.ajaxSettings.xhr();
			n.attachEvent && n.attachEvent("onunload", function () {
				for (var t in nn) nn[t](void 0, !0)
			}), ot.cors = !!rn && "withCredentials" in rn, rn = ot.ajax = !!rn, rn && lt.ajaxTransport(function (t) {
				if (!t.crossDomain || ot.cors) {
					var e;
					return {
						send: function (n, r) {
							var i, a = t.xhr(),
								o = ++en;
							if (a.open(t.type, t.url, t.async, t.username, t.password), t.xhrFields)
								for (i in t.xhrFields) a[i] = t.xhrFields[i];
							t.mimeType && a.overrideMimeType && a.overrideMimeType(t.mimeType), t.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest");
							for (i in n) void 0 !== n[i] && a.setRequestHeader(i, n[i] + "");
							a.send(t.hasContent && t.data || null), e = function (n, i) {
								var s, l, u;
								if (e && (i || 4 === a.readyState))
									if (delete nn[o], e = void 0, a.onreadystatechange = lt.noop, i) 4 !== a.readyState && a.abort();
									else {
										u = {}, s = a.status, "string" == typeof a.responseText && (u.text = a.responseText);
										try {
											l = a.statusText
										} catch (c) {
											l = ""
										}
										s || !t.isLocal || t.crossDomain ? 1223 === s && (s = 204) : s = u.text ? 200 : 404
									} u && r(s, l, u, a.getAllResponseHeaders())
							}, t.async ? 4 === a.readyState ? setTimeout(e) : a.onreadystatechange = nn[o] = e : e()
						},
						abort: function () {
							e && e(void 0, !0)
						}
					}
				}
			}), lt.ajaxSetup({
				accepts: {
					script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
				},
				contents: {
					script: /(?:java|ecma)script/
				},
				converters: {
					"text script": function (t) {
						return lt.globalEval(t), t
					}
				}
			}), lt.ajaxPrefilter("script", function (t) {
				void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
			}), lt.ajaxTransport("script", function (t) {
				if (t.crossDomain) {
					var e, n = vt.head || lt("head")[0] || vt.documentElement;
					return {
						send: function (r, i) {
							e = vt.createElement("script"), e.async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, n) {
								(n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || i(200, "success"))
							}, n.insertBefore(e, n.firstChild)
						},
						abort: function () {
							e && e.onload(void 0, !0)
						}
					}
				}
			});
			var an = [],
				on = /(=)\?(?=&|$)|\?\?/;
			lt.ajaxSetup({
				jsonp: "callback",
				jsonpCallback: function () {
					var t = an.pop() || lt.expando + "_" + Le++;
					return this[t] = !0, t
				}
			}), lt.ajaxPrefilter("json jsonp", function (t, e, r) {
				var i, a, o, s = t.jsonp !== !1 && (on.test(t.url) ? "url" : "string" == typeof t.data && !(t.contentType || "").indexOf("application/x-www-form-urlencoded") && on.test(t.data) && "data");
				return s || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = lt.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback, s ? t[s] = t[s].replace(on, "$1" + i) : t.jsonp !== !1 && (t.url += (je.test(t.url) ? "&" : "?") + t.jsonp + "=" + i), t.converters["script json"] = function () {
					return o || lt.error(i + " was not called"), o[0]
				}, t.dataTypes[0] = "json", a = n[i], n[i] = function () {
					o = arguments
				}, r.always(function () {
					n[i] = a, t[i] && (t.jsonpCallback = e.jsonpCallback, an.push(i)), o && lt.isFunction(a) && a(o[0]), o = a = void 0
				}), "script") : void 0
			}), lt.parseHTML = function (t, e, n) {
				if (!t || "string" != typeof t) return null;
				"boolean" == typeof e && (n = e, e = !1), e = e || vt;
				var r = pt.exec(t),
					i = !n && [];
				return r ? [e.createElement(r[1])] : (r = lt.buildFragment([t], e, i), i && i.length && lt(i).remove(), lt.merge([], r.childNodes))
			};
			var sn = lt.fn.load;
			lt.fn.load = function (t, e, n) {
				if ("string" != typeof t && sn) return sn.apply(this, arguments);
				var r, i, a, o = this,
					s = t.indexOf(" ");
				return s >= 0 && (r = lt.trim(t.slice(s, t.length)), t = t.slice(0, s)), lt.isFunction(e) ? (n = e, e = void 0) : e && "object" == typeof e && (a = "POST"), o.length > 0 && lt.ajax({
					url: t,
					type: a,
					dataType: "html",
					data: e
				}).done(function (t) {
					// i = arguments, o.text(r ? lt("<div>").append(lt.parseHTML(t)).find(r) : t)
				}).complete(n && function (t, e) {
					o.each(n, i || [t.responseText, e, t])
				}), this
			}, lt.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
				lt.fn[e] = function (t) {
					return this.on(e, t)
				}
			}), lt.expr.filters.animated = function (t) {
				return lt.grep(lt.timers, function (e) {
					return t === e.elem
				}).length
			};
			var ln = n.document.documentElement;
			lt.offset = {
				setOffset: function (t, e, n) {
					var r, i, a, o, s, l, u, c = lt.css(t, "position"),
						h = lt(t),
						f = {};
					"static" === c && (t.style.position = "relative"), s = h.offset(), a = lt.css(t, "top"), l = lt.css(t, "left"), u = ("absolute" === c || "fixed" === c) && lt.inArray("auto", [a, l]) > -1, u ? (r = h.position(), o = r.top, i = r.left) : (o = parseFloat(a) || 0, i = parseFloat(l) || 0), lt.isFunction(e) && (e = e.call(t, n, s)), null != e.top && (f.top = e.top - s.top + o), null != e.left && (f.left = e.left - s.left + i), "using" in e ? e.using.call(t, f) : h.css(f)
				}
			}, lt.fn.extend({
				offset: function (t) {
					if (arguments.length) return void 0 === t ? this : this.each(function (e) {
						lt.offset.setOffset(this, t, e)
					});
					var e, n, r = {
							top: 0,
							left: 0
						},
						i = this[0],
						a = i && i.ownerDocument;
					if (a) return e = a.documentElement, lt.contains(e, i) ? (typeof i.getBoundingClientRect !== Tt && (r = i.getBoundingClientRect()), n = Q(a), {
						top: r.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
						left: r.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
					}) : r
				},
				position: function () {
					if (this[0]) {
						var t, e, n = {
								top: 0,
								left: 0
							},
							r = this[0];
						return "fixed" === lt.css(r, "position") ? e = r.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), lt.nodeName(t[0], "html") || (n = t.offset()), n.top += lt.css(t[0], "borderTopWidth", !0), n.left += lt.css(t[0], "borderLeftWidth", !0)), {
							top: e.top - n.top - lt.css(r, "marginTop", !0),
							left: e.left - n.left - lt.css(r, "marginLeft", !0)
						}
					}
				},
				offsetParent: function () {
					return this.map(function () {
						for (var t = this.offsetParent || ln; t && !lt.nodeName(t, "html") && "static" === lt.css(t, "position");) t = t.offsetParent;
						return t || ln
					})
				}
			}), lt.each({
				scrollLeft: "pageXOffset",
				scrollTop: "pageYOffset"
			}, function (t, e) {
				var n = /Y/.test(e);
				lt.fn[t] = function (r) {
					return Mt(this, function (t, r, i) {
						var a = Q(t);
						return void 0 === i ? a ? e in a ? a[e] : a.document.documentElement[r] : t[r] : void(a ? a.scrollTo(n ? lt(a).scrollLeft() : i, n ? i : lt(a).scrollTop()) : t[r] = i)
					}, t, r, arguments.length, null)
				}
			}), lt.each(["top", "left"], function (t, e) {
				lt.cssHooks[e] = D(ot.pixelPosition, function (t, n) {
					return n ? (n = ae(t, e), se.test(n) ? lt(t).position()[e] + "px" : n) : void 0
				})
			}), lt.each({
				Height: "height",
				Width: "width"
			}, function (t, e) {
				lt.each({
					padding: "inner" + t,
					content: e,
					"": "outer" + t
				}, function (n, r) {
					lt.fn[r] = function (r, i) {
						var a = arguments.length && (n || "boolean" != typeof r),
							o = n || (r === !0 || i === !0 ? "margin" : "border");
						return Mt(this, function (e, n, r) {
							var i;
							return lt.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (i = e.documentElement, Math.max(e.body["scroll" + t], i["scroll" + t], e.body["offset" + t], i["offset" + t], i["client" + t])) : void 0 === r ? lt.css(e, n, o) : lt.style(e, n, r, o)
						}, e, a ? r : void 0, a, null)
					}
				})
			}), lt.fn.size = function () {
				return this.length
			}, lt.fn.andSelf = lt.fn.addBack, r = [], i = function () {
				return lt
			}.apply(e, r), !(void 0 !== i && (t.exports = i));
			var un = n.jQuery,
				cn = n.$;
			return lt.noConflict = function (t) {
				return n.$ === lt && (n.$ = cn), t && n.jQuery === lt && (n.jQuery = un), lt
			}, typeof a === Tt && (n.jQuery = n.$ = lt), lt
		})
	}, function (t, e, n) {
		var r;
		(function (t, i, a) {
			(function () {
				function a(t, e) {
					if (t !== e) {
						var n = null === t,
							r = t === T,
							i = t === t,
							a = null === e,
							o = e === T,
							s = e === e;
						if (t > e && !a || !i || n && !o && s || r && s) return 1;
						if (e > t && !n || !s || a && !r && i || o && i) return -1
					}
					return 0
				}

				function o(t, e, n) {
					for (var r = t.length, i = n ? r : -1; n ? i-- : ++i < r;)
						if (e(t[i], i, t)) return i;
					return -1
				}

				function s(t, e, n) {
					if (e !== e) return v(t, n);
					for (var r = n - 1, i = t.length; ++r < i;)
						if (t[r] === e) return r;
					return -1
				}

				function l(t) {
					return "function" == typeof t || !1
				}

				function u(t) {
					return null == t ? "" : t + ""
				}

				function c(t, e) {
					for (var n = -1, r = t.length; ++n < r && e.indexOf(t.charAt(n)) > -1;);
					return n
				}

				function h(t, e) {
					for (var n = t.length; n-- && e.indexOf(t.charAt(n)) > -1;);
					return n
				}

				function f(t, e) {
					return a(t.criteria, e.criteria) || t.index - e.index
				}

				function g(t, e, n) {
					for (var r = -1, i = t.criteria, o = e.criteria, s = i.length, l = n.length; ++r < s;) {
						var u = a(i[r], o[r]);
						if (u) {
							if (r >= l) return u;
							var c = n[r];
							return u * ("asc" === c || c === !0 ? 1 : -1)
						}
					}
					return t.index - e.index
				}

				function d(t) {
					return Ht[t]
				}

				function p(t) {
					return Gt[t]
				}

				function A(t, e, n) {
					return e ? t = Zt[t] : n && (t = Qt[t]), "\\" + t
				}

				function C(t) {
					return "\\" + Qt[t]
				}

				function v(t, e, n) {
					for (var r = t.length, i = e + (n ? 0 : -1); n ? i-- : ++i < r;) {
						var a = t[i];
						if (a !== a) return i
					}
					return -1
				}

				function I(t) {
					return !!t && "object" == typeof t
				}

				function m(t) {
					return 160 >= t && t >= 9 && 13 >= t || 32 == t || 160 == t || 5760 == t || 6158 == t || t >= 8192 && (8202 >= t || 8232 == t || 8233 == t || 8239 == t || 8287 == t || 12288 == t || 65279 == t)
				}

				function y(t, e) {
					for (var n = -1, r = t.length, i = -1, a = []; ++n < r;) t[n] === e && (t[n] = H, a[++i] = n);
					return a
				}

				function b(t, e) {
					for (var n, r = -1, i = t.length, a = -1, o = []; ++r < i;) {
						var s = t[r],
							l = e ? e(s, r, t) : s;
						r && n === l || (n = l, o[++a] = s)
					}
					return o
				}

				function _(t) {
					for (var e = -1, n = t.length; ++e < n && m(t.charCodeAt(e)););
					return e
				}

				function x(t) {
					for (var e = t.length; e-- && m(t.charCodeAt(e)););
					return e
				}

				function w(t) {
					return Yt[t]
				}

				function k(t) {
					function e(t) {
						if (I(t) && !Ss(t) && !(t instanceof i)) {
							if (t instanceof r) return t;
							if (to.call(t, "__chain__") && to.call(t, "__wrapped__")) return gr(t)
						}
						return new r(t)
					}

					function n() {}

					function r(t, e, n) {
						this.__wrapped__ = t, this.__actions__ = n || [], this.__chain__ = !!e
					}

					function i(t) {
						this.__wrapped__ = t, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = Eo, this.__views__ = []
					}

					function m() {
						var t = new i(this.__wrapped__);
						return t.__actions__ = te(this.__actions__), t.__dir__ = this.__dir__, t.__filtered__ = this.__filtered__, t.__iteratees__ = te(this.__iteratees__), t.__takeCount__ = this.__takeCount__, t.__views__ = te(this.__views__), t
					}

					function K() {
						if (this.__filtered__) {
							var t = new i(this);
							t.__dir__ = -1, t.__filtered__ = !0
						} else t = this.clone(), t.__dir__ *= -1;
						return t
					}

					function rt() {
						var t = this.__wrapped__.value(),
							e = this.__dir__,
							n = Ss(t),
							r = 0 > e,
							i = n ? t.length : 0,
							a = Hn(0, i, this.__views__),
							o = a.start,
							s = a.end,
							l = s - o,
							u = r ? s : o - 1,
							c = this.__iteratees__,
							h = c.length,
							f = 0,
							g = _o(l, this.__takeCount__);
						if (!n || X > i || i == l && g == l) return nn(r && n ? t.reverse() : t, this.__actions__);
						var d = [];
						t: for (; l-- && g > f;) {
							u += e;
							for (var p = -1, A = t[u]; ++p < h;) {
								var C = c[p],
									v = C.iteratee,
									I = C.type,
									m = v(A);
								if (I == z) A = m;
								else if (!m) {
									if (I == U) continue t;
									break t
								}
							}
							d[f++] = A
						}
						return d
					}

					function at() {
						this.__data__ = {}
					}

					function Ht(t) {
						return this.has(t) && delete this.__data__[t]
					}

					function Gt(t) {
						return "__proto__" == t ? T : this.__data__[t]
					}

					function Yt(t) {
						return "__proto__" != t && to.call(this.__data__, t)
					}

					function $t(t, e) {
						return "__proto__" != t && (this.__data__[t] = e), this
					}

					function Zt(t) {
						var e = t ? t.length : 0;
						for (this.data = {
								hash: Co(null),
								set: new co
							}; e--;) this.push(t[e])
					}

					function Qt(t, e) {
						var n = t.data,
							r = "string" == typeof e || Li(e) ? n.set.has(e) : n.hash[e];
						return r ? 0 : -1
					}

					function Jt(t) {
						var e = this.data;
						"string" == typeof t || Li(t) ? e.set.add(t) : e.hash[t] = !0
					}

					function Kt(t, e) {
						for (var n = -1, r = t.length, i = -1, a = e.length, o = Ba(r + a); ++n < r;) o[n] = t[n];
						for (; ++i < a;) o[n++] = e[i];
						return o
					}

					function te(t, e) {
						var n = -1,
							r = t.length;
						for (e || (e = Ba(r)); ++n < r;) e[n] = t[n];
						return e
					}

					function ee(t, e) {
						for (var n = -1, r = t.length; ++n < r && e(t[n], n, t) !== !1;);
						return t
					}

					function ne(t, e) {
						for (var n = t.length; n-- && e(t[n], n, t) !== !1;);
						return t
					}

					function ae(t, e) {
						for (var n = -1, r = t.length; ++n < r;)
							if (!e(t[n], n, t)) return !1;
						return !0
					}

					function oe(t, e, n, r) {
						for (var i = -1, a = t.length, o = r, s = o; ++i < a;) {
							var l = t[i],
								u = +e(l);
							n(u, o) && (o = u, s = l)
						}
						return s
					}

					function se(t, e) {
						for (var n = -1, r = t.length, i = -1, a = []; ++n < r;) {
							var o = t[n];
							e(o, n, t) && (a[++i] = o)
						}
						return a
					}

					function le(t, e) {
						for (var n = -1, r = t.length, i = Ba(r); ++n < r;) i[n] = e(t[n], n, t);
						return i
					}

					function ue(t, e) {
						for (var n = -1, r = e.length, i = t.length; ++n < r;) t[i + n] = e[n];
						return t
					}

					function ce(t, e, n, r) {
						var i = -1,
							a = t.length;
						for (r && a && (n = t[++i]); ++i < a;) n = e(n, t[i], i, t);
						return n
					}

					function he(t, e, n, r) {
						var i = t.length;
						for (r && i && (n = t[--i]); i--;) n = e(n, t[i], i, t);
						return n
					}

					function fe(t, e) {
						for (var n = -1, r = t.length; ++n < r;)
							if (e(t[n], n, t)) return !0;
						return !1
					}

					function ge(t, e) {
						for (var n = t.length, r = 0; n--;) r += +e(t[n]) || 0;
						return r
					}

					function de(t, e) {
						return t === T ? e : t
					}

					function pe(t, e, n, r) {
						return t !== T && to.call(r, n) ? t : e
					}

					function Ae(t, e, n) {
						for (var r = -1, i = Bs(e), a = i.length; ++r < a;) {
							var o = i[r],
								s = t[o],
								l = n(s, e[o], o, t, e);
							(l === l ? l === s : s !== s) && (s !== T || o in t) || (t[o] = l)
						}
						return t
					}

					function Ce(t, e) {
						return null == e ? t : Ie(e, Bs(e), t)
					}

					function ve(t, e) {
						for (var n = -1, r = null == t, i = !r && Qn(t), a = i ? t.length : 0, o = e.length, s = Ba(o); ++n < o;) {
							var l = e[n];
							i ? s[n] = Jn(l, a) ? t[l] : T : s[n] = r ? T : t[l]
						}
						return s
					}

					function Ie(t, e, n) {
						n || (n = {});
						for (var r = -1, i = e.length; ++r < i;) {
							var a = e[r];
							n[a] = t[a]
						}
						return n
					}

					function me(t, e, n) {
						var r = typeof t;
						return "function" == r ? e === T ? t : on(t, e, n) : null == t ? Ta : "object" == r ? Re(t) : e === T ? Ma(t) : Be(t, e)
					}

					function ye(t, e, n, r, i, a, o) {
						var s;
						if (n && (s = i ? n(t, r, i) : n(t)), s !== T) return s;
						if (!Li(t)) return t;
						var l = Ss(t);
						if (l) {
							if (s = Gn(t), !e) return te(t, s)
						} else {
							var u = no.call(t),
								c = u == J;
							if (u != et && u != G && (!c || i)) return Wt[u] ? $n(t, u, e) : i ? t : {};
							if (s = Yn(c ? {} : t), !e) return Ce(s, t)
						}
						a || (a = []), o || (o = []);
						for (var h = a.length; h--;)
							if (a[h] == t) return o[h];
						return a.push(t), o.push(s), (l ? ee : Pe)(t, function (r, i) {
							s[i] = ye(r, e, n, i, t, a, o)
						}), s
					}

					function be(t, e, n) {
						if ("function" != typeof t) throw new $a(W);
						return ho(function () {
							t.apply(T, n)
						}, e)
					}

					function _e(t, e) {
						var n = t ? t.length : 0,
							r = [];
						if (!n) return r;
						var i = -1,
							a = Un(),
							o = a == s,
							l = o && e.length >= X ? pn(e) : null,
							u = e.length;
						l && (a = Qt, o = !1, e = l);
						t: for (; ++i < n;) {
							var c = t[i];
							if (o && c === c) {
								for (var h = u; h--;)
									if (e[h] === c) continue t;
								r.push(c)
							} else a(e, c, 0) < 0 && r.push(c)
						}
						return r
					}

					function xe(t, e) {
						var n = !0;
						return Fo(t, function (t, r, i) {
							return n = !!e(t, r, i)
						}), n
					}

					function we(t, e, n, r) {
						var i = r,
							a = i;
						return Fo(t, function (t, o, s) {
							var l = +e(t, o, s);
							(n(l, i) || l === r && l === a) && (i = l, a = t)
						}), a
					}

					function ke(t, e, n, r) {
						var i = t.length;
						for (n = null == n ? 0 : +n || 0, 0 > n && (n = -n > i ? 0 : i + n), r = r === T || r > i ? i : +r || 0, 0 > r && (r += i), i = n > r ? 0 : r >>> 0, n >>>= 0; i > n;) t[n++] = e;
						return t
					}

					function Te(t, e) {
						var n = [];
						return Fo(t, function (t, r, i) {
							e(t, r, i) && n.push(t)
						}), n
					}

					function Ee(t, e, n, r) {
						var i;
						return n(t, function (t, n, a) {
							return e(t, n, a) ? (i = r ? n : t, !1) : void 0
						}), i
					}

					function Se(t, e, n, r) {
						r || (r = []);
						for (var i = -1, a = t.length; ++i < a;) {
							var o = t[i];
							I(o) && Qn(o) && (n || Ss(o) || wi(o)) ? e ? Se(o, e, n, r) : ue(r, o) : n || (r[r.length] = o)
						}
						return r
					}

					function De(t, e) {
						return qo(t, e, ta)
					}

					function Pe(t, e) {
						return qo(t, e, Bs)
					}

					function Oe(t, e) {
						return Ro(t, e, Bs)
					}

					function Me(t, e) {
						for (var n = -1, r = e.length, i = -1, a = []; ++n < r;) {
							var o = e[n];
							Mi(t[o]) && (a[++i] = o)
						}
						return a
					}

					function Le(t, e, n) {
						if (null != t) {
							n !== T && n in hr(t) && (e = [n]);
							for (var r = 0, i = e.length; null != t && i > r;) t = t[e[r++]];
							return r && r == i ? t : T
						}
					}

					function je(t, e, n, r, i, a) {
						return t === e ? !0 : null == t || null == e || !Li(t) && !I(e) ? t !== t && e !== e : Fe(t, e, je, n, r, i, a)
					}

					function Fe(t, e, n, r, i, a, o) {
						var s = Ss(t),
							l = Ss(e),
							u = Y,
							c = Y;
						s || (u = no.call(t), u == G ? u = et : u != et && (s = Ui(t))), l || (c = no.call(e), c == G ? c = et : c != et && (l = Ui(e)));
						var h = u == et,
							f = c == et,
							g = u == c;
						if (g && !s && !h) return Rn(t, e, u);
						if (!i) {
							var d = h && to.call(t, "__wrapped__"),
								p = f && to.call(e, "__wrapped__");
							if (d || p) return n(d ? t.value() : t, p ? e.value() : e, r, i, a, o)
						}
						if (!g) return !1;
						a || (a = []), o || (o = []);
						for (var A = a.length; A--;)
							if (a[A] == t) return o[A] == e;
						a.push(t), o.push(e);
						var C = (s ? qn : Bn)(t, e, n, r, i, a, o);
						return a.pop(), o.pop(), C
					}

					function Ne(t, e, n) {
						var r = e.length,
							i = r,
							a = !n;
						if (null == t) return !i;
						for (t = hr(t); r--;) {
							var o = e[r];
							if (a && o[2] ? o[1] !== t[o[0]] : !(o[0] in t)) return !1
						}
						for (; ++r < i;) {
							o = e[r];
							var s = o[0],
								l = t[s],
								u = o[1];
							if (a && o[2]) {
								if (l === T && !(s in t)) return !1
							} else {
								var c = n ? n(l, u, s) : T;
								if (!(c === T ? je(u, l, n, !0) : c)) return !1
							}
						}
						return !0
					}

					function qe(t, e) {
						var n = -1,
							r = Qn(t) ? Ba(t.length) : [];
						return Fo(t, function (t, i, a) {
							r[++n] = e(t, i, a)
						}), r
					}

					function Re(t) {
						var e = zn(t);
						if (1 == e.length && e[0][2]) {
							var n = e[0][0],
								r = e[0][1];
							return function (t) {
								return null == t ? !1 : t[n] === r && (r !== T || n in hr(t))
							}
						}
						return function (t) {
							return Ne(t, e)
						}
					}

					function Be(t, e) {
						var n = Ss(t),
							r = tr(t) && rr(e),
							i = t + "";
						return t = fr(t),
							function (a) {
								if (null == a) return !1;
								var o = i;
								if (a = hr(a), (n || !r) && !(o in a)) {
									if (a = 1 == t.length ? a : Le(a, Ye(t, 0, -1)), null == a) return !1;
									o = kr(t), a = hr(a)
								}
								return a[o] === e ? e !== T || o in a : je(e, a[o], T, !0)
							}
					}

					function Ve(t, e, n, r, i) {
						if (!Li(t)) return t;
						var a = Qn(e) && (Ss(e) || Ui(e)),
							o = a ? T : Bs(e);
						return ee(o || e, function (s, l) {
							if (o && (l = s, s = e[l]), I(s)) r || (r = []), i || (i = []), Xe(t, e, l, Ve, n, r, i);
							else {
								var u = t[l],
									c = n ? n(u, s, l, t, e) : T,
									h = c === T;
								h && (c = s), c === T && (!a || l in t) || !h && (c === c ? c === u : u !== u) || (t[l] = c)
							}
						}), t
					}

					function Xe(t, e, n, r, i, a, o) {
						for (var s = a.length, l = e[n]; s--;)
							if (a[s] == l) return void(t[n] = o[s]);
						var u = t[n],
							c = i ? i(u, l, n, t, e) : T,
							h = c === T;
						h && (c = l, Qn(l) && (Ss(l) || Ui(l)) ? c = Ss(u) ? u : Qn(u) ? te(u) : [] : Bi(l) || wi(l) ? c = wi(u) ? Yi(u) : Bi(u) ? u : {} : h = !1), a.push(l), o.push(c), h ? t[n] = r(c, l, i, a, o) : (c === c ? c !== u : u === u) && (t[n] = c)
					}

					function Ue(t) {
						return function (e) {
							return null == e ? T : e[t]
						}
					}

					function ze(t) {
						var e = t + "";
						return t = fr(t),
							function (n) {
								return Le(n, t, e)
							}
					}

					function We(t, e) {
						for (var n = t ? e.length : 0; n--;) {
							var r = e[n];
							if (r != i && Jn(r)) {
								var i = r;
								fo.call(t, r, 1)
							}
						}
						return t
					}

					function He(t, e) {
						return t + vo(ko() * (e - t + 1))
					}

					function Ge(t, e, n, r, i) {
						return i(t, function (t, i, a) {
							n = r ? (r = !1, t) : e(n, t, i, a)
						}), n
					}

					function Ye(t, e, n) {
						var r = -1,
							i = t.length;
						e = null == e ? 0 : +e || 0, 0 > e && (e = -e > i ? 0 : i + e), n = n === T || n > i ? i : +n || 0, 0 > n && (n += i), i = e > n ? 0 : n - e >>> 0, e >>>= 0;
						for (var a = Ba(i); ++r < i;) a[r] = t[r + e];
						return a
					}

					function $e(t, e) {
						var n;
						return Fo(t, function (t, r, i) {
							return n = e(t, r, i), !n
						}), !!n
					}

					function Ze(t, e) {
						var n = t.length;
						for (t.sort(e); n--;) t[n] = t[n].value;
						return t
					}

					function Qe(t, e, n) {
						var r = Vn(),
							i = -1;
						e = le(e, function (t) {
							return r(t)
						});
						var a = qe(t, function (t) {
							var n = le(e, function (e) {
								return e(t)
							});
							return {
								criteria: n,
								index: ++i,
								value: t
							}
						});
						return Ze(a, function (t, e) {
							return g(t, e, n)
						})
					}

					function Je(t, e) {
						var n = 0;
						return Fo(t, function (t, r, i) {
							n += +e(t, r, i) || 0
						}), n
					}

					function Ke(t, e) {
						var n = -1,
							r = Un(),
							i = t.length,
							a = r == s,
							o = a && i >= X,
							l = o ? pn() : null,
							u = [];
						l ? (r = Qt, a = !1) : (o = !1, l = e ? [] : u);
						t: for (; ++n < i;) {
							var c = t[n],
								h = e ? e(c, n, t) : c;
							if (a && c === c) {
								for (var f = l.length; f--;)
									if (l[f] === h) continue t;
								e && l.push(h), u.push(c)
							} else r(l, h, 0) < 0 && ((e || o) && l.push(h), u.push(c))
						}
						return u
					}

					function tn(t, e) {
						for (var n = -1, r = e.length, i = Ba(r); ++n < r;) i[n] = t[e[n]];
						return i
					}

					function en(t, e, n, r) {
						for (var i = t.length, a = r ? i : -1;
							(r ? a-- : ++a < i) && e(t[a], a, t););
						return n ? Ye(t, r ? 0 : a, r ? a + 1 : i) : Ye(t, r ? a + 1 : 0, r ? i : a)
					}

					function nn(t, e) {
						var n = t;
						n instanceof i && (n = n.value());
						for (var r = -1, a = e.length; ++r < a;) {
							var o = e[r];
							n = o.func.apply(o.thisArg, ue([n], o.args))
						}
						return n
					}

					function rn(t, e, n) {
						var r = 0,
							i = t ? t.length : r;
						if ("number" == typeof e && e === e && Po >= i) {
							for (; i > r;) {
								var a = r + i >>> 1,
									o = t[a];
								(n ? e >= o : e > o) && null !== o ? r = a + 1 : i = a
							}
							return i
						}
						return an(t, e, Ta, n)
					}

					function an(t, e, n, r) {
						e = n(e);
						for (var i = 0, a = t ? t.length : 0, o = e !== e, s = null === e, l = e === T; a > i;) {
							var u = vo((i + a) / 2),
								c = n(t[u]),
								h = c !== T,
								f = c === c;
							if (o) var g = f || r;
							else g = s ? f && h && (r || null != c) : l ? f && (r || h) : null == c ? !1 : r ? e >= c : e > c;
							g ? i = u + 1 : a = u
						}
						return _o(a, Do)
					}

					function on(t, e, n) {
						if ("function" != typeof t) return Ta;
						if (e === T) return t;
						switch (n) {
							case 1:
								return function (n) {
									return t.call(e, n)
								};
							case 3:
								return function (n, r, i) {
									return t.call(e, n, r, i)
								};
							case 4:
								return function (n, r, i, a) {
									return t.call(e, n, r, i, a)
								};
							case 5:
								return function (n, r, i, a, o) {
									return t.call(e, n, r, i, a, o)
								}
						}
						return function () {
							return t.apply(e, arguments)
						}
					}

					function sn(t) {
						var e = new ao(t.byteLength),
							n = new go(e);
						return n.set(new go(t)), e
					}

					function ln(t, e, n) {
						for (var r = n.length, i = -1, a = bo(t.length - r, 0), o = -1, s = e.length, l = Ba(s + a); ++o < s;) l[o] = e[o];
						for (; ++i < r;) l[n[i]] = t[i];
						for (; a--;) l[o++] = t[i++];
						return l
					}

					function un(t, e, n) {
						for (var r = -1, i = n.length, a = -1, o = bo(t.length - i, 0), s = -1, l = e.length, u = Ba(o + l); ++a < o;) u[a] = t[a];
						for (var c = a; ++s < l;) u[c + s] = e[s];
						for (; ++r < i;) u[c + n[r]] = t[a++];
						return u
					}

					function cn(t, e) {
						return function (n, r, i) {
							var a = e ? e() : {};
							if (r = Vn(r, i, 3), Ss(n))
								for (var o = -1, s = n.length; ++o < s;) {
									var l = n[o];
									t(a, l, r(l, o, n), n)
								} else Fo(n, function (e, n, i) {
									t(a, e, r(e, n, i), i)
								});
							return a
						}
					}

					function hn(t) {
						return Ci(function (e, n) {
							var r = -1,
								i = null == e ? 0 : n.length,
								a = i > 2 ? n[i - 2] : T,
								o = i > 2 ? n[2] : T,
								s = i > 1 ? n[i - 1] : T;
							for ("function" == typeof a ? (a = on(a, s, 5), i -= 2) : (a = "function" == typeof s ? s : T, i -= a ? 1 : 0), o && Kn(n[0], n[1], o) && (a = 3 > i ? T : a, i = 1); ++r < i;) {
								var l = n[r];
								l && t(e, l, a)
							}
							return e
						})
					}

					function fn(t, e) {
						return function (n, r) {
							var i = n ? Xo(n) : 0;
							if (!nr(i)) return t(n, r);
							for (var a = e ? i : -1, o = hr(n);
								(e ? a-- : ++a < i) && r(o[a], a, o) !== !1;);
							return n
						}
					}

					function gn(t) {
						return function (e, n, r) {
							for (var i = hr(e), a = r(e), o = a.length, s = t ? o : -1; t ? s-- : ++s < o;) {
								var l = a[s];
								if (n(i[l], l, i) === !1) break
							}
							return e
						}
					}

					function dn(t, e) {
						function n() {
							var i = this && this !== re && this instanceof n ? r : t;
							return i.apply(e, arguments)
						}
						var r = Cn(t);
						return n
					}

					function pn(t) {
						return Co && co ? new Zt(t) : null
					}

					function An(t) {
						return function (e) {
							for (var n = -1, r = xa(ca(e)), i = r.length, a = ""; ++n < i;) a = t(a, r[n], n);
							return a
						}
					}

					function Cn(t) {
						return function () {
							var e = arguments;
							switch (e.length) {
								case 0:
									return new t;
								case 1:
									return new t(e[0]);
								case 2:
									return new t(e[0], e[1]);
								case 3:
									return new t(e[0], e[1], e[2]);
								case 4:
									return new t(e[0], e[1], e[2], e[3]);
								case 5:
									return new t(e[0], e[1], e[2], e[3], e[4]);
								case 6:
									return new t(e[0], e[1], e[2], e[3], e[4], e[5]);
								case 7:
									return new t(e[0], e[1], e[2], e[3], e[4], e[5], e[6])
							}
							var n = jo(t.prototype),
								r = t.apply(n, e);
							return Li(r) ? r : n
						}
					}

					function vn(t) {
						function e(n, r, i) {
							i && Kn(n, r, i) && (r = T);
							var a = Nn(n, t, T, T, T, T, T, r);
							return a.placeholder = e.placeholder, a
						}
						return e
					}

					function In(t, e) {
						return Ci(function (n) {
							var r = n[0];
							return null == r ? r : (n.push(e), t.apply(T, n))
						})
					}

					function mn(t, e) {
						return function (n, r, i) {
							if (i && Kn(n, r, i) && (r = T), r = Vn(r, i, 3), 1 == r.length) {
								n = Ss(n) ? n : cr(n);
								var a = oe(n, r, t, e);
								if (!n.length || a !== e) return a
							}
							return we(n, r, t, e)
						}
					}

					function yn(t, e) {
						return function (n, r, i) {
							if (r = Vn(r, i, 3), Ss(n)) {
								var a = o(n, r, e);
								return a > -1 ? n[a] : T
							}
							return Ee(n, r, t)
						}
					}

					function bn(t) {
						return function (e, n, r) {
							return e && e.length ? (n = Vn(n, r, 3), o(e, n, t)) : -1
						}
					}

					function _n(t) {
						return function (e, n, r) {
							return n = Vn(n, r, 3), Ee(e, n, t, !0)
						}
					}

					function xn(t) {
						return function () {
							for (var e, n = arguments.length, i = t ? n : -1, a = 0, o = Ba(n); t ? i-- : ++i < n;) {
								var s = o[a++] = arguments[i];
								if ("function" != typeof s) throw new $a(W);
								!e && r.prototype.thru && "wrapper" == Xn(s) && (e = new r([], !0))
							}
							for (i = e ? -1 : n; ++i < n;) {
								s = o[i];
								var l = Xn(s),
									u = "wrapper" == l ? Vo(s) : T;
								e = u && er(u[0]) && u[1] == (F | O | L | N) && !u[4].length && 1 == u[9] ? e[Xn(u[0])].apply(e, u[3]) : 1 == s.length && er(s) ? e[l]() : e.thru(s)
							}
							return function () {
								var t = arguments,
									r = t[0];
								if (e && 1 == t.length && Ss(r) && r.length >= X) return e.plant(r).value();
								for (var i = 0, a = n ? o[i].apply(this, t) : r; ++i < n;) a = o[i].call(this, a);
								return a
							}
						}
					}

					function wn(t, e) {
						return function (n, r, i) {
							return "function" == typeof r && i === T && Ss(n) ? t(n, r) : e(n, on(r, i, 3))
						}
					}

					function kn(t) {
						return function (e, n, r) {
							return ("function" != typeof n || r !== T) && (n = on(n, r, 3)), t(e, n, ta)
						}
					}

					function Tn(t) {
						return function (e, n, r) {
							return ("function" != typeof n || r !== T) && (n = on(n, r, 3)),
								t(e, n)
						}
					}

					function En(t) {
						return function (e, n, r) {
							var i = {};
							return n = Vn(n, r, 3), Pe(e, function (e, r, a) {
								var o = n(e, r, a);
								r = t ? o : r, e = t ? e : o, i[r] = e
							}), i
						}
					}

					function Sn(t) {
						return function (e, n, r) {
							return e = u(e), (t ? e : "") + Mn(e, n, r) + (t ? "" : e)
						}
					}

					function Dn(t) {
						var e = Ci(function (n, r) {
							var i = y(r, e.placeholder);
							return Nn(n, t, T, r, i)
						});
						return e
					}

					function Pn(t, e) {
						return function (n, r, i, a) {
							var o = arguments.length < 3;
							return "function" == typeof r && a === T && Ss(n) ? t(n, r, i, o) : Ge(n, Vn(r, a, 4), i, o, e)
						}
					}

					function On(t, e, n, r, i, a, o, s, l, u) {
						function c() {
							for (var v = arguments.length, I = v, m = Ba(v); I--;) m[I] = arguments[I];
							if (r && (m = ln(m, r, i)), a && (m = un(m, a, o)), d || A) {
								var b = c.placeholder,
									_ = y(m, b);
								if (v -= _.length, u > v) {
									var x = s ? te(s) : T,
										w = bo(u - v, 0),
										k = d ? _ : T,
										E = d ? T : _,
										P = d ? m : T,
										O = d ? T : m;
									e |= d ? L : j, e &= ~(d ? j : L), p || (e &= ~(S | D));
									var M = [t, e, n, P, k, O, E, x, l, w],
										F = On.apply(T, M);
									return er(t) && Uo(F, M), F.placeholder = b, F
								}
							}
							var N = f ? n : this,
								q = g ? N[t] : t;
							return s && (m = lr(m, s)), h && l < m.length && (m.length = l), this && this !== re && this instanceof c && (q = C || Cn(t)), q.apply(N, m)
						}
						var h = e & F,
							f = e & S,
							g = e & D,
							d = e & O,
							p = e & P,
							A = e & M,
							C = g ? T : Cn(t);
						return c
					}

					function Mn(t, e, n) {
						var r = t.length;
						if (e = +e, r >= e || !mo(e)) return "";
						var i = e - r;
						return n = null == n ? " " : n + "", Aa(n, Ao(i / n.length)).slice(0, i)
					}

					function Ln(t, e, n, r) {
						function i() {
							for (var e = -1, s = arguments.length, l = -1, u = r.length, c = Ba(u + s); ++l < u;) c[l] = r[l];
							for (; s--;) c[l++] = arguments[++e];
							var h = this && this !== re && this instanceof i ? o : t;
							return h.apply(a ? n : this, c)
						}
						var a = e & S,
							o = Cn(t);
						return i
					}

					function jn(t) {
						var e = za[t];
						return function (t, n) {
							return n = n === T ? 0 : +n || 0, n ? (n = lo(10, n), e(t * n) / n) : e(t)
						}
					}

					function Fn(t) {
						return function (e, n, r, i) {
							var a = Vn(r);
							return null == r && a === me ? rn(e, n, t) : an(e, n, a(r, i, 1), t)
						}
					}

					function Nn(t, e, n, r, i, a, o, s) {
						var l = e & D;
						if (!l && "function" != typeof t) throw new $a(W);
						var u = r ? r.length : 0;
						if (u || (e &= ~(L | j), r = i = T), u -= i ? i.length : 0, e & j) {
							var c = r,
								h = i;
							r = i = T
						}
						var f = l ? T : Vo(t),
							g = [t, e, n, r, i, c, h, a, o, s];
						if (f && (ir(g, f), e = g[1], s = g[9]), g[9] = null == s ? l ? 0 : t.length : bo(s - u, 0) || 0, e == S) var d = dn(g[0], g[2]);
						else d = e != L && e != (S | L) || g[4].length ? On.apply(T, g) : Ln.apply(T, g);
						var p = f ? Bo : Uo;
						return p(d, g)
					}

					function qn(t, e, n, r, i, a, o) {
						var s = -1,
							l = t.length,
							u = e.length;
						if (l != u && !(i && u > l)) return !1;
						for (; ++s < l;) {
							var c = t[s],
								h = e[s],
								f = r ? r(i ? h : c, i ? c : h, s) : T;
							if (f !== T) {
								if (f) continue;
								return !1
							}
							if (i) {
								if (!fe(e, function (t) {
										return c === t || n(c, t, r, i, a, o)
									})) return !1
							} else if (c !== h && !n(c, h, r, i, a, o)) return !1
						}
						return !0
					}

					function Rn(t, e, n) {
						switch (n) {
							case $:
							case Z:
								return +t == +e;
							case Q:
								return t.name == e.name && t.message == e.message;
							case tt:
								return t != +t ? e != +e : t == +e;
							case nt:
							case it:
								return t == e + ""
						}
						return !1
					}

					function Bn(t, e, n, r, i, a, o) {
						var s = Bs(t),
							l = s.length,
							u = Bs(e),
							c = u.length;
						if (l != c && !i) return !1;
						for (var h = l; h--;) {
							var f = s[h];
							if (!(i ? f in e : to.call(e, f))) return !1
						}
						for (var g = i; ++h < l;) {
							f = s[h];
							var d = t[f],
								p = e[f],
								A = r ? r(i ? p : d, i ? d : p, f) : T;
							if (!(A === T ? n(d, p, r, i, a, o) : A)) return !1;
							g || (g = "constructor" == f)
						}
						if (!g) {
							var C = t.constructor,
								v = e.constructor;
							if (C != v && "constructor" in t && "constructor" in e && !("function" == typeof C && C instanceof C && "function" == typeof v && v instanceof v)) return !1
						}
						return !0
					}

					function Vn(t, n, r) {
						var i = e.callback || wa;
						return i = i === wa ? me : i, r ? i(t, n, r) : i
					}

					function Xn(t) {
						for (var e = t.name, n = Lo[e], r = n ? n.length : 0; r--;) {
							var i = n[r],
								a = i.func;
							if (null == a || a == t) return i.name
						}
						return e
					}

					function Un(t, n, r) {
						var i = e.indexOf || xr;
						return i = i === xr ? s : i, t ? i(t, n, r) : i
					}

					function zn(t) {
						for (var e = ea(t), n = e.length; n--;) e[n][2] = rr(e[n][1]);
						return e
					}

					function Wn(t, e) {
						var n = null == t ? T : t[e];
						return Ni(n) ? n : T
					}

					function Hn(t, e, n) {
						for (var r = -1, i = n.length; ++r < i;) {
							var a = n[r],
								o = a.size;
							switch (a.type) {
								case "drop":
									t += o;
									break;
								case "dropRight":
									e -= o;
									break;
								case "take":
									e = _o(e, t + o);
									break;
								case "takeRight":
									t = bo(t, e - o)
							}
						}
						return {
							start: t,
							end: e
						}
					}

					function Gn(t) {
						var e = t.length,
							n = new t.constructor(e);
						return e && "string" == typeof t[0] && to.call(t, "index") && (n.index = t.index, n.input = t.input), n
					}

					function Yn(t) {
						var e = t.constructor;
						return "function" == typeof e && e instanceof e || (e = Ha), new e
					}

					function $n(t, e, n) {
						var r = t.constructor;
						switch (e) {
							case ot:
								return sn(t);
							case $:
							case Z:
								return new r(+t);
							case st:
							case lt:
							case ut:
							case ct:
							case ht:
							case ft:
							case gt:
							case dt:
							case pt:
								var i = t.buffer;
								return new r(n ? sn(i) : i, t.byteOffset, t.length);
							case tt:
							case it:
								return new r(t);
							case nt:
								var a = new r(t.source, Lt.exec(t));
								a.lastIndex = t.lastIndex
						}
						return a
					}

					function Zn(t, e, n) {
						null == t || tr(e, t) || (e = fr(e), t = 1 == e.length ? t : Le(t, Ye(e, 0, -1)), e = kr(e));
						var r = null == t ? t : t[e];
						return null == r ? T : r.apply(t, n)
					}

					function Qn(t) {
						return null != t && nr(Xo(t))
					}

					function Jn(t, e) {
						return t = "number" == typeof t || Nt.test(t) ? +t : -1, e = null == e ? Oo : e, t > -1 && t % 1 == 0 && e > t
					}

					function Kn(t, e, n) {
						if (!Li(n)) return !1;
						var r = typeof e;
						if ("number" == r ? Qn(n) && Jn(e, n.length) : "string" == r && e in n) {
							var i = n[e];
							return t === t ? t === i : i !== i
						}
						return !1
					}

					function tr(t, e) {
						var n = typeof t;
						if ("string" == n && Tt.test(t) || "number" == n) return !0;
						if (Ss(t)) return !1;
						var r = !kt.test(t);
						return r || null != e && t in hr(e)
					}

					function er(t) {
						var n = Xn(t);
						if (!(n in i.prototype)) return !1;
						var r = e[n];
						if (t === r) return !0;
						var a = Vo(r);
						return !!a && t === a[0]
					}

					function nr(t) {
						return "number" == typeof t && t > -1 && t % 1 == 0 && Oo >= t
					}

					function rr(t) {
						return t === t && !Li(t)
					}

					function ir(t, e) {
						var n = t[1],
							r = e[1],
							i = n | r,
							a = F > i,
							o = r == F && n == O || r == F && n == N && t[7].length <= e[8] || r == (F | N) && n == O;
						if (!a && !o) return t;
						r & S && (t[2] = e[2], i |= n & S ? 0 : P);
						var s = e[3];
						if (s) {
							var l = t[3];
							t[3] = l ? ln(l, s, e[4]) : te(s), t[4] = l ? y(t[3], H) : te(e[4])
						}
						return s = e[5], s && (l = t[5], t[5] = l ? un(l, s, e[6]) : te(s), t[6] = l ? y(t[5], H) : te(e[6])), s = e[7], s && (t[7] = te(s)), r & F && (t[8] = null == t[8] ? e[8] : _o(t[8], e[8])), null == t[9] && (t[9] = e[9]), t[0] = e[0], t[1] = i, t
					}

					function ar(t, e) {
						return t === T ? e : Ds(t, e, ar)
					}

					function or(t, e) {
						t = hr(t);
						for (var n = -1, r = e.length, i = {}; ++n < r;) {
							var a = e[n];
							a in t && (i[a] = t[a])
						}
						return i
					}

					function sr(t, e) {
						var n = {};
						return De(t, function (t, r, i) {
							e(t, r, i) && (n[r] = t)
						}), n
					}

					function lr(t, e) {
						for (var n = t.length, r = _o(e.length, n), i = te(t); r--;) {
							var a = e[r];
							t[r] = Jn(a, n) ? i[a] : T
						}
						return t
					}

					function ur(t) {
						for (var e = ta(t), n = e.length, r = n && t.length, i = !!r && nr(r) && (Ss(t) || wi(t)), a = -1, o = []; ++a < n;) {
							var s = e[a];
							(i && Jn(s, r) || to.call(t, s)) && o.push(s)
						}
						return o
					}

					function cr(t) {
						return null == t ? [] : Qn(t) ? Li(t) ? t : Ha(t) : aa(t)
					}

					function hr(t) {
						return Li(t) ? t : Ha(t)
					}

					function fr(t) {
						if (Ss(t)) return t;
						var e = [];
						return u(t).replace(Et, function (t, n, r, i) {
							e.push(r ? i.replace(Ot, "$1") : n || t)
						}), e
					}

					function gr(t) {
						return t instanceof i ? t.clone() : new r(t.__wrapped__, t.__chain__, te(t.__actions__))
					}

					function dr(t, e, n) {
						e = (n ? Kn(t, e, n) : null == e) ? 1 : bo(vo(e) || 1, 1);
						for (var r = 0, i = t ? t.length : 0, a = -1, o = Ba(Ao(i / e)); i > r;) o[++a] = Ye(t, r, r += e);
						return o
					}

					function pr(t) {
						for (var e = -1, n = t ? t.length : 0, r = -1, i = []; ++e < n;) {
							var a = t[e];
							a && (i[++r] = a)
						}
						return i
					}

					function Ar(t, e, n) {
						var r = t ? t.length : 0;
						return r ? ((n ? Kn(t, e, n) : null == e) && (e = 1), Ye(t, 0 > e ? 0 : e)) : []
					}

					function Cr(t, e, n) {
						var r = t ? t.length : 0;
						return r ? ((n ? Kn(t, e, n) : null == e) && (e = 1), e = r - (+e || 0), Ye(t, 0, 0 > e ? 0 : e)) : []
					}

					function vr(t, e, n) {
						return t && t.length ? en(t, Vn(e, n, 3), !0, !0) : []
					}

					function Ir(t, e, n) {
						return t && t.length ? en(t, Vn(e, n, 3), !0) : []
					}

					function mr(t, e, n, r) {
						var i = t ? t.length : 0;
						return i ? (n && "number" != typeof n && Kn(t, e, n) && (n = 0, r = i), ke(t, e, n, r)) : []
					}

					function yr(t) {
						return t ? t[0] : T
					}

					function br(t, e, n) {
						var r = t ? t.length : 0;
						return n && Kn(t, e, n) && (e = !1), r ? Se(t, e) : []
					}

					function _r(t) {
						var e = t ? t.length : 0;
						return e ? Se(t, !0) : []
					}

					function xr(t, e, n) {
						var r = t ? t.length : 0;
						if (!r) return -1;
						if ("number" == typeof n) n = 0 > n ? bo(r + n, 0) : n;
						else if (n) {
							var i = rn(t, e);
							return r > i && (e === e ? e === t[i] : t[i] !== t[i]) ? i : -1
						}
						return s(t, e, n || 0)
					}

					function wr(t) {
						return Cr(t, 1)
					}

					function kr(t) {
						var e = t ? t.length : 0;
						return e ? t[e - 1] : T
					}

					function Tr(t, e, n) {
						var r = t ? t.length : 0;
						if (!r) return -1;
						var i = r;
						if ("number" == typeof n) i = (0 > n ? bo(r + n, 0) : _o(n || 0, r - 1)) + 1;
						else if (n) {
							i = rn(t, e, !0) - 1;
							var a = t[i];
							return (e === e ? e === a : a !== a) ? i : -1
						}
						if (e !== e) return v(t, i, !0);
						for (; i--;)
							if (t[i] === e) return i;
						return -1
					}

					function Er() {
						var t = arguments,
							e = t[0];
						if (!e || !e.length) return e;
						for (var n = 0, r = Un(), i = t.length; ++n < i;)
							for (var a = 0, o = t[n];
								(a = r(e, o, a)) > -1;) fo.call(e, a, 1);
						return e
					}

					function Sr(t, e, n) {
						var r = [];
						if (!t || !t.length) return r;
						var i = -1,
							a = [],
							o = t.length;
						for (e = Vn(e, n, 3); ++i < o;) {
							var s = t[i];
							e(s, i, t) && (r.push(s), a.push(i))
						}
						return We(t, a), r
					}

					function Dr(t) {
						return Ar(t, 1)
					}

					function Pr(t, e, n) {
						var r = t ? t.length : 0;
						return r ? (n && "number" != typeof n && Kn(t, e, n) && (e = 0, n = r), Ye(t, e, n)) : []
					}

					function Or(t, e, n) {
						var r = t ? t.length : 0;
						return r ? ((n ? Kn(t, e, n) : null == e) && (e = 1), Ye(t, 0, 0 > e ? 0 : e)) : []
					}

					function Mr(t, e, n) {
						var r = t ? t.length : 0;
						return r ? ((n ? Kn(t, e, n) : null == e) && (e = 1), e = r - (+e || 0), Ye(t, 0 > e ? 0 : e)) : []
					}

					function Lr(t, e, n) {
						return t && t.length ? en(t, Vn(e, n, 3), !1, !0) : []
					}

					function jr(t, e, n) {
						return t && t.length ? en(t, Vn(e, n, 3)) : []
					}

					function Fr(t, e, n, r) {
						var i = t ? t.length : 0;
						if (!i) return [];
						null != e && "boolean" != typeof e && (r = n, n = Kn(t, e, r) ? T : e, e = !1);
						var a = Vn();
						return (null != n || a !== me) && (n = a(n, r, 3)), e && Un() == s ? b(t, n) : Ke(t, n)
					}

					function Nr(t) {
						if (!t || !t.length) return [];
						var e = -1,
							n = 0;
						t = se(t, function (t) {
							return Qn(t) ? (n = bo(t.length, n), !0) : void 0
						});
						for (var r = Ba(n); ++e < n;) r[e] = le(t, Ue(e));
						return r
					}

					function qr(t, e, n) {
						var r = t ? t.length : 0;
						if (!r) return [];
						var i = Nr(t);
						return null == e ? i : (e = on(e, n, 4), le(i, function (t) {
							return ce(t, e, T, !0)
						}))
					}

					function Rr() {
						for (var t = -1, e = arguments.length; ++t < e;) {
							var n = arguments[t];
							if (Qn(n)) var r = r ? ue(_e(r, n), _e(n, r)) : n
						}
						return r ? Ke(r) : []
					}

					function Br(t, e) {
						var n = -1,
							r = t ? t.length : 0,
							i = {};
						for (!r || e || Ss(t[0]) || (e = []); ++n < r;) {
							var a = t[n];
							e ? i[a] = e[n] : a && (i[a[0]] = a[1])
						}
						return i
					}

					function Vr(t) {
						var n = e(t);
						return n.__chain__ = !0, n
					}

					function Xr(t, e, n) {
						return e.call(n, t), t
					}

					function Ur(t, e, n) {
						return e.call(n, t)
					}

					function zr() {
						return Vr(this)
					}

					function Wr() {
						return new r(this.value(), this.__chain__)
					}

					function Hr(t) {
						for (var e, r = this; r instanceof n;) {
							var i = gr(r);
							e ? a.__wrapped__ = i : e = i;
							var a = i;
							r = r.__wrapped__
						}
						return a.__wrapped__ = t, e
					}

					function Gr() {
						var t = this.__wrapped__,
							e = function (t) {
								return n && n.__dir__ < 0 ? t : t.reverse()
							};
						if (t instanceof i) {
							var n = t;
							return this.__actions__.length && (n = new i(this)), n = n.reverse(), n.__actions__.push({
								func: Ur,
								args: [e],
								thisArg: T
							}), new r(n, this.__chain__)
						}
						return this.thru(e)
					}

					function Yr() {
						return this.value() + ""
					}

					function $r() {
						return nn(this.__wrapped__, this.__actions__)
					}

					function Zr(t, e, n) {
						var r = Ss(t) ? ae : xe;
						return n && Kn(t, e, n) && (e = T), ("function" != typeof e || n !== T) && (e = Vn(e, n, 3)), r(t, e)
					}

					function Qr(t, e, n) {
						var r = Ss(t) ? se : Te;
						return e = Vn(e, n, 3), r(t, e)
					}

					function Jr(t, e) {
						return is(t, Re(e))
					}

					function Kr(t, e, n, r) {
						var i = t ? Xo(t) : 0;
						return nr(i) || (t = aa(t), i = t.length), n = "number" != typeof n || r && Kn(e, n, r) ? 0 : 0 > n ? bo(i + n, 0) : n || 0, "string" == typeof t || !Ss(t) && Xi(t) ? i >= n && t.indexOf(e, n) > -1 : !!i && Un(t, e, n) > -1
					}

					function ti(t, e, n) {
						var r = Ss(t) ? le : qe;
						return e = Vn(e, n, 3), r(t, e)
					}

					function ei(t, e) {
						return ti(t, Ma(e))
					}

					function ni(t, e, n) {
						var r = Ss(t) ? se : Te;
						return e = Vn(e, n, 3), r(t, function (t, n, r) {
							return !e(t, n, r)
						})
					}

					function ri(t, e, n) {
						if (n ? Kn(t, e, n) : null == e) {
							t = cr(t);
							var r = t.length;
							return r > 0 ? t[He(0, r - 1)] : T
						}
						var i = -1,
							a = Gi(t),
							r = a.length,
							o = r - 1;
						for (e = _o(0 > e ? 0 : +e || 0, r); ++i < e;) {
							var s = He(i, o),
								l = a[s];
							a[s] = a[i], a[i] = l
						}
						return a.length = e, a
					}

					function ii(t) {
						return ri(t, Eo)
					}

					function ai(t) {
						var e = t ? Xo(t) : 0;
						return nr(e) ? e : Bs(t).length
					}

					function oi(t, e, n) {
						var r = Ss(t) ? fe : $e;
						return n && Kn(t, e, n) && (e = T), ("function" != typeof e || n !== T) && (e = Vn(e, n, 3)), r(t, e)
					}

					function si(t, e, n) {
						if (null == t) return [];
						n && Kn(t, e, n) && (e = T);
						var r = -1;
						e = Vn(e, n, 3);
						var i = qe(t, function (t, n, i) {
							return {
								criteria: e(t, n, i),
								index: ++r,
								value: t
							}
						});
						return Ze(i, f)
					}

					function li(t, e, n, r) {
						return null == t ? [] : (r && Kn(e, n, r) && (n = T), Ss(e) || (e = null == e ? [] : [e]), Ss(n) || (n = null == n ? [] : [n]), Qe(t, e, n))
					}

					function ui(t, e) {
						return Qr(t, Re(e))
					}

					function ci(t, e) {
						if ("function" != typeof e) {
							if ("function" != typeof t) throw new $a(W);
							var n = t;
							t = e, e = n
						}
						return t = mo(t = +t) ? t : 0,
							function () {
								return --t < 1 ? e.apply(this, arguments) : void 0
							}
					}

					function hi(t, e, n) {
						return n && Kn(t, e, n) && (e = T), e = t && null == e ? t.length : bo(+e || 0, 0), Nn(t, F, T, T, T, T, e)
					}

					function fi(t, e) {
						var n;
						if ("function" != typeof e) {
							if ("function" != typeof t) throw new $a(W);
							var r = t;
							t = e, e = r
						}
						return function () {
							return --t > 0 && (n = e.apply(this, arguments)), 1 >= t && (e = T), n
						}
					}

					function gi(t, e, n) {
						function r() {
							g && oo(g), u && oo(u), p = 0, u = g = d = T
						}

						function i(e, n) {
							n && oo(n), u = g = d = T, e && (p = ps(), c = t.apply(f, l), g || u || (l = f = T))
						}

						function a() {
							var t = e - (ps() - h);
							0 >= t || t > e ? i(d, u) : g = ho(a, t)
						}

						function o() {
							i(C, g)
						}

						function s() {
							if (l = arguments, h = ps(), f = this, d = C && (g || !v), A === !1) var n = v && !g;
							else {
								u || v || (p = h);
								var r = A - (h - p),
									i = 0 >= r || r > A;
								i ? (u && (u = oo(u)), p = h, c = t.apply(f, l)) : u || (u = ho(o, r))
							}
							return i && g ? g = oo(g) : g || e === A || (g = ho(a, e)), n && (i = !0, c = t.apply(f, l)), !i || g || u || (l = f = T), c
						}
						var l, u, c, h, f, g, d, p = 0,
							A = !1,
							C = !0;
						if ("function" != typeof t) throw new $a(W);
						if (e = 0 > e ? 0 : +e || 0, n === !0) {
							var v = !0;
							C = !1
						} else Li(n) && (v = !!n.leading, A = "maxWait" in n && bo(+n.maxWait || 0, e), C = "trailing" in n ? !!n.trailing : C);
						return s.cancel = r, s
					}

					function di(t, e) {
						if ("function" != typeof t || e && "function" != typeof e) throw new $a(W);
						var n = function () {
							var r = arguments,
								i = e ? e.apply(this, r) : r[0],
								a = n.cache;
							if (a.has(i)) return a.get(i);
							var o = t.apply(this, r);
							return n.cache = a.set(i, o), o
						};
						return n.cache = new di.Cache, n
					}

					function pi(t) {
						if ("function" != typeof t) throw new $a(W);
						return function () {
							return !t.apply(this, arguments)
						}
					}

					function Ai(t) {
						return fi(2, t)
					}

					function Ci(t, e) {
						if ("function" != typeof t) throw new $a(W);
						return e = bo(e === T ? t.length - 1 : +e || 0, 0),
							function () {
								for (var n = arguments, r = -1, i = bo(n.length - e, 0), a = Ba(i); ++r < i;) a[r] = n[e + r];
								switch (e) {
									case 0:
										return t.call(this, a);
									case 1:
										return t.call(this, n[0], a);
									case 2:
										return t.call(this, n[0], n[1], a)
								}
								var o = Ba(e + 1);
								for (r = -1; ++r < e;) o[r] = n[r];
								return o[e] = a, t.apply(this, o)
							}
					}

					function vi(t) {
						if ("function" != typeof t) throw new $a(W);
						return function (e) {
							return t.apply(this, e)
						}
					}

					function Ii(t, e, n) {
						var r = !0,
							i = !0;
						if ("function" != typeof t) throw new $a(W);
						return n === !1 ? r = !1 : Li(n) && (r = "leading" in n ? !!n.leading : r, i = "trailing" in n ? !!n.trailing : i), gi(t, e, {
							leading: r,
							maxWait: +e,
							trailing: i
						})
					}

					function mi(t, e) {
						return e = null == e ? Ta : e, Nn(e, L, T, [t], [])
					}

					function yi(t, e, n, r) {
						return e && "boolean" != typeof e && Kn(t, e, n) ? e = !1 : "function" == typeof e && (r = n, n = e, e = !1), "function" == typeof n ? ye(t, e, on(n, r, 1)) : ye(t, e)
					}

					function bi(t, e, n) {
						return "function" == typeof e ? ye(t, !0, on(e, n, 1)) : ye(t, !0)
					}

					function _i(t, e) {
						return t > e
					}

					function xi(t, e) {
						return t >= e
					}

					function wi(t) {
						return I(t) && Qn(t) && to.call(t, "callee") && !uo.call(t, "callee")
					}

					function ki(t) {
						return t === !0 || t === !1 || I(t) && no.call(t) == $
					}

					function Ti(t) {
						return I(t) && no.call(t) == Z
					}

					function Ei(t) {
						return !!t && 1 === t.nodeType && I(t) && !Bi(t)
					}

					function Si(t) {
						return null == t ? !0 : Qn(t) && (Ss(t) || Xi(t) || wi(t) || I(t) && Mi(t.splice)) ? !t.length : !Bs(t).length
					}

					function Di(t, e, n, r) {
						n = "function" == typeof n ? on(n, r, 3) : T;
						var i = n ? n(t, e) : T;
						return i === T ? je(t, e, n) : !!i
					}

					function Pi(t) {
						return I(t) && "string" == typeof t.message && no.call(t) == Q
					}

					function Oi(t) {
						return "number" == typeof t && mo(t)
					}

					function Mi(t) {
						return Li(t) && no.call(t) == J
					}

					function Li(t) {
						var e = typeof t;
						return !!t && ("object" == e || "function" == e)
					}

					function ji(t, e, n, r) {
						return n = "function" == typeof n ? on(n, r, 3) : T, Ne(t, zn(e), n)
					}

					function Fi(t) {
						return Ri(t) && t != +t
					}

					function Ni(t) {
						return null == t ? !1 : Mi(t) ? io.test(Ka.call(t)) : I(t) && Ft.test(t)
					}

					function qi(t) {
						return null === t
					}

					function Ri(t) {
						return "number" == typeof t || I(t) && no.call(t) == tt
					}

					function Bi(t) {
						var e;
						if (!I(t) || no.call(t) != et || wi(t) || !to.call(t, "constructor") && (e = t.constructor, "function" == typeof e && !(e instanceof e))) return !1;
						var n;
						return De(t, function (t, e) {
							n = e
						}), n === T || to.call(t, n)
					}

					function Vi(t) {
						return Li(t) && no.call(t) == nt
					}

					function Xi(t) {
						return "string" == typeof t || I(t) && no.call(t) == it
					}

					function Ui(t) {
						return I(t) && nr(t.length) && !!zt[no.call(t)]
					}

					function zi(t) {
						return t === T
					}

					function Wi(t, e) {
						return e > t
					}

					function Hi(t, e) {
						return e >= t
					}

					function Gi(t) {
						var e = t ? Xo(t) : 0;
						return nr(e) ? e ? te(t) : [] : aa(t)
					}

					function Yi(t) {
						return Ie(t, ta(t))
					}

					function $i(t, e, n) {
						var r = jo(t);
						return n && Kn(t, e, n) && (e = T), e ? Ce(r, e) : r
					}

					function Zi(t) {
						return Me(t, ta(t))
					}

					function Qi(t, e, n) {
						var r = null == t ? T : Le(t, fr(e), e + "");
						return r === T ? n : r
					}

					function Ji(t, e) {
						if (null == t) return !1;
						var n = to.call(t, e);
						if (!n && !tr(e)) {
							if (e = fr(e), t = 1 == e.length ? t : Le(t, Ye(e, 0, -1)), null == t) return !1;
							e = kr(e), n = to.call(t, e)
						}
						return n || nr(t.length) && Jn(e, t.length) && (Ss(t) || wi(t))
					}

					function Ki(t, e, n) {
						n && Kn(t, e, n) && (e = T);
						for (var r = -1, i = Bs(t), a = i.length, o = {}; ++r < a;) {
							var s = i[r],
								l = t[s];
							e ? to.call(o, l) ? o[l].push(s) : o[l] = [s] : o[l] = s
						}
						return o
					}

					function ta(t) {
						if (null == t) return [];
						Li(t) || (t = Ha(t));
						var e = t.length;
						e = e && nr(e) && (Ss(t) || wi(t)) && e || 0;
						for (var n = t.constructor, r = -1, i = "function" == typeof n && n.prototype === t, a = Ba(e), o = e > 0; ++r < e;) a[r] = r + "";
						for (var s in t) o && Jn(s, e) || "constructor" == s && (i || !to.call(t, s)) || a.push(s);
						return a
					}

					function ea(t) {
						t = hr(t);
						for (var e = -1, n = Bs(t), r = n.length, i = Ba(r); ++e < r;) {
							var a = n[e];
							i[e] = [a, t[a]]
						}
						return i
					}

					function na(t, e, n) {
						var r = null == t ? T : t[e];
						return r === T && (null == t || tr(e, t) || (e = fr(e), t = 1 == e.length ? t : Le(t, Ye(e, 0, -1)), r = null == t ? T : t[kr(e)]), r = r === T ? n : r), Mi(r) ? r.call(t) : r
					}

					function ra(t, e, n) {
						if (null == t) return t;
						var r = e + "";
						e = null != t[r] || tr(e, t) ? [r] : fr(e);
						for (var i = -1, a = e.length, o = a - 1, s = t; null != s && ++i < a;) {
							var l = e[i];
							Li(s) && (i == o ? s[l] = n : null == s[l] && (s[l] = Jn(e[i + 1]) ? [] : {})), s = s[l]
						}
						return t
					}

					function ia(t, e, n, r) {
						var i = Ss(t) || Ui(t);
						if (e = Vn(e, r, 4), null == n)
							if (i || Li(t)) {
								var a = t.constructor;
								n = i ? Ss(t) ? new a : [] : jo(Mi(a) ? a.prototype : T)
							} else n = {};
						return (i ? ee : Pe)(t, function (t, r, i) {
							return e(n, t, r, i)
						}), n
					}

					function aa(t) {
						return tn(t, Bs(t))
					}

					function oa(t) {
						return tn(t, ta(t))
					}

					function sa(t, e, n) {
						return e = +e || 0, n === T ? (n = e, e = 0) : n = +n || 0, t >= _o(e, n) && t < bo(e, n)
					}

					function la(t, e, n) {
						n && Kn(t, e, n) && (e = n = T);
						var r = null == t,
							i = null == e;
						if (null == n && (i && "boolean" == typeof t ? (n = t, t = 1) : "boolean" == typeof e && (n = e, i = !0)), r && i && (e = 1, i = !1), t = +t || 0, i ? (e = t, t = 0) : e = +e || 0, n || t % 1 || e % 1) {
							var a = ko();
							return _o(t + a * (e - t + so("1e-" + ((a + "").length - 1))), e)
						}
						return He(t, e)
					}

					function ua(t) {
						return t = u(t), t && t.charAt(0).toUpperCase() + t.slice(1)
					}

					function ca(t) {
						return t = u(t), t && t.replace(qt, d).replace(Pt, "")
					}

					function ha(t, e, n) {
						t = u(t), e += "";
						var r = t.length;
						return n = n === T ? r : _o(0 > n ? 0 : +n || 0, r), n -= e.length, n >= 0 && t.indexOf(e, n) == n
					}

					function fa(t) {
						return t = u(t), t && bt.test(t) ? t.replace(mt, p) : t
					}

					function ga(t) {
						return t = u(t), t && Dt.test(t) ? t.replace(St, A) : t || "(?:)"
					}

					function da(t, e, n) {
						t = u(t), e = +e;
						var r = t.length;
						if (r >= e || !mo(e)) return t;
						var i = (e - r) / 2,
							a = vo(i),
							o = Ao(i);
						return n = Mn("", o, n), n.slice(0, a) + t + n
					}

					function pa(t, e, n) {
						return (n ? Kn(t, e, n) : null == e) ? e = 0 : e && (e = +e), t = Ia(t), wo(t, e || (jt.test(t) ? 16 : 10))
					}

					function Aa(t, e) {
						var n = "";
						if (t = u(t), e = +e, 1 > e || !t || !mo(e)) return n;
						do e % 2 && (n += t), e = vo(e / 2), t += t; while (e);
						return n
					}

					function Ca(t, e, n) {
						return t = u(t), n = null == n ? 0 : _o(0 > n ? 0 : +n || 0, t.length), t.lastIndexOf(e, n) == n
					}

					function va(t, n, r) {
						var i = e.templateSettings;
						r && Kn(t, n, r) && (n = r = T), t = u(t), n = Ae(Ce({}, r || n), i, pe);
						var a, o, s = Ae(Ce({}, n.imports), i.imports, pe),
							l = Bs(s),
							c = tn(s, l),
							h = 0,
							f = n.interpolate || Rt,
							g = "__p += '",
							d = Ga((n.escape || Rt).source + "|" + f.source + "|" + (f === wt ? Mt : Rt).source + "|" + (n.evaluate || Rt).source + "|$", "g"),
							p = "//# sourceURL=" + ("sourceURL" in n ? n.sourceURL : "lodash.templateSources[" + ++Ut + "]") + "\n";
						t.replace(d, function (e, n, r, i, s, l) {
							return r || (r = i), g += t.slice(h, l).replace(Bt, C), n && (a = !0, g += "' +\n__e(" + n + ") +\n'"), s && (o = !0, g += "';\n" + s + ";\n__p += '"), r && (g += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"), h = l + e.length, e
						}), g += "';\n";
						var A = n.variable;
						A || (g = "with (obj) {\n" + g + "\n}\n"), g = (o ? g.replace(At, "") : g).replace(Ct, "$1").replace(vt, "$1;"), g = "function(" + (A || "obj") + ") {\n" + (A ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (a ? ", __e = _.escape" : "") + (o ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + g + "return __p\n}";
						var v = Qs(function () {
							return Ua(l, p + "return " + g).apply(T, c)
						});
						if (v.source = g, Pi(v)) throw v;
						return v
					}

					function Ia(t, e, n) {
						var r = t;
						return (t = u(t)) ? (n ? Kn(r, e, n) : null == e) ? t.slice(_(t), x(t) + 1) : (e += "", t.slice(c(t, e), h(t, e) + 1)) : t
					}

					function ma(t, e, n) {
						var r = t;
						return t = u(t), t ? (n ? Kn(r, e, n) : null == e) ? t.slice(_(t)) : t.slice(c(t, e + "")) : t
					}

					function ya(t, e, n) {
						var r = t;
						return t = u(t), t ? (n ? Kn(r, e, n) : null == e) ? t.slice(0, x(t) + 1) : t.slice(0, h(t, e + "") + 1) : t
					}

					function ba(t, e, n) {
						n && Kn(t, e, n) && (e = T);
						var r = q,
							i = R;
						if (null != e)
							if (Li(e)) {
								var a = "separator" in e ? e.separator : a;
								r = "length" in e ? +e.length || 0 : r, i = "omission" in e ? u(e.omission) : i
							} else r = +e || 0;
						if (t = u(t), r >= t.length) return t;
						var o = r - i.length;
						if (1 > o) return i;
						var s = t.slice(0, o);
						if (null == a) return s + i;
						if (Vi(a)) {
							if (t.slice(o).search(a)) {
								var l, c, h = t.slice(0, o);
								for (a.global || (a = Ga(a.source, (Lt.exec(a) || "") + "g")), a.lastIndex = 0; l = a.exec(h);) c = l.index;
								s = s.slice(0, null == c ? o : c)
							}
						} else if (t.indexOf(a, o) != o) {
							var f = s.lastIndexOf(a);
							f > -1 && (s = s.slice(0, f))
						}
						return s + i
					}

					function _a(t) {
						return t = u(t), t && yt.test(t) ? t.replace(It, w) : t
					}

					function xa(t, e, n) {
						return n && Kn(t, e, n) && (e = T), t = u(t), t.match(e || Vt) || []
					}

					function wa(t, e, n) {
						return n && Kn(t, e, n) && (e = T), I(t) ? Ea(t) : me(t, e)
					}

					function ka(t) {
						return function () {
							return t
						}
					}

					function Ta(t) {
						return t
					}

					function Ea(t) {
						return Re(ye(t, !0))
					}

					function Sa(t, e) {
						return Be(t, ye(e, !0))
					}

					function Da(t, e, n) {
						if (null == n) {
							var r = Li(e),
								i = r ? Bs(e) : T,
								a = i && i.length ? Me(e, i) : T;
							(a ? a.length : r) || (a = !1, n = e, e = t, t = this)
						}
						a || (a = Me(e, Bs(e)));
						var o = !0,
							s = -1,
							l = Mi(t),
							u = a.length;
						n === !1 ? o = !1 : Li(n) && "chain" in n && (o = n.chain);
						for (; ++s < u;) {
							var c = a[s],
								h = e[c];
							t[c] = h, l && (t.prototype[c] = function (e) {
								return function () {
									var n = this.__chain__;
									if (o || n) {
										var r = t(this.__wrapped__),
											i = r.__actions__ = te(this.__actions__);
										return i.push({
											func: e,
											args: arguments,
											thisArg: t
										}), r.__chain__ = n, r
									}
									return e.apply(t, ue([this.value()], arguments))
								}
							}(h))
						}
						return t
					}

					function Pa() {
						return re._ = ro, this
					}

					function Oa() {}

					function Ma(t) {
						return tr(t) ? Ue(t) : ze(t)
					}

					function La(t) {
						return function (e) {
							return Le(t, fr(e), e + "")
						}
					}

					function ja(t, e, n) {
						n && Kn(t, e, n) && (e = n = T), t = +t || 0, n = null == n ? 1 : +n || 0, null == e ? (e = t, t = 0) : e = +e || 0;
						for (var r = -1, i = bo(Ao((e - t) / (n || 1)), 0), a = Ba(i); ++r < i;) a[r] = t, t += n;
						return a
					}

					function Fa(t, e, n) {
						if (t = vo(t), 1 > t || !mo(t)) return [];
						var r = -1,
							i = Ba(_o(t, So));
						for (e = on(e, n, 1); ++r < t;) So > r ? i[r] = e(r) : e(r);
						return i
					}

					function Na(t) {
						var e = ++eo;
						return u(t) + e
					}

					function qa(t, e) {
						return (+t || 0) + (+e || 0)
					}

					function Ra(t, e, n) {
						return n && Kn(t, e, n) && (e = T), e = Vn(e, n, 3), 1 == e.length ? ge(Ss(t) ? t : cr(t), e) : Je(t, e)
					}
					t = t ? ie.defaults(re.Object(), t, ie.pick(re, Xt)) : re;
					var Ba = t.Array,
						Va = t.Date,
						Xa = t.Error,
						Ua = t.Function,
						za = t.Math,
						Wa = t.Number,
						Ha = t.Object,
						Ga = t.RegExp,
						Ya = t.String,
						$a = t.TypeError,
						Za = Ba.prototype,
						Qa = Ha.prototype,
						Ja = Ya.prototype,
						Ka = Ua.prototype.toString,
						to = Qa.hasOwnProperty,
						eo = 0,
						no = Qa.toString,
						ro = re._,
						io = Ga("^" + Ka.call(to).replace(/[\\^$.*+?()[\]{}|]/g, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"),
						ao = t.ArrayBuffer,
						oo = t.clearTimeout,
						so = t.parseFloat,
						lo = za.pow,
						uo = Qa.propertyIsEnumerable,
						co = Wn(t, "Set"),
						ho = t.setTimeout,
						fo = Za.splice,
						go = t.Uint8Array,
						po = Wn(t, "WeakMap"),
						Ao = za.ceil,
						Co = Wn(Ha, "create"),
						vo = za.floor,
						Io = Wn(Ba, "isArray"),
						mo = t.isFinite,
						yo = Wn(Ha, "keys"),
						bo = za.max,
						_o = za.min,
						xo = Wn(Va, "now"),
						wo = t.parseInt,
						ko = za.random,
						To = Wa.NEGATIVE_INFINITY,
						Eo = Wa.POSITIVE_INFINITY,
						So = 4294967295,
						Do = So - 1,
						Po = So >>> 1,
						Oo = 9007199254740991,
						Mo = po && new po,
						Lo = {};
					e.support = {};
					e.templateSettings = {
						escape: _t,
						evaluate: xt,
						interpolate: wt,
						variable: "",
						imports: {
							_: e
						}
					};
					var jo = function () {
							function t() {}
							return function (e) {
								if (Li(e)) {
									t.prototype = e;
									var n = new t;
									t.prototype = T
								}
								return n || {}
							}
						}(),
						Fo = fn(Pe),
						No = fn(Oe, !0),
						qo = gn(),
						Ro = gn(!0),
						Bo = Mo ? function (t, e) {
							return Mo.set(t, e), t
						} : Ta,
						Vo = Mo ? function (t) {
							return Mo.get(t)
						} : Oa,
						Xo = Ue("length"),
						Uo = function () {
							var t = 0,
								e = 0;
							return function (n, r) {
								var i = ps(),
									a = V - (i - e);
								if (e = i, a > 0) {
									if (++t >= B) return n
								} else t = 0;
								return Bo(n, r)
							}
						}(),
						zo = Ci(function (t, e) {
							return I(t) && Qn(t) ? _e(t, Se(e, !1, !0)) : []
						}),
						Wo = bn(),
						Ho = bn(!0),
						Go = Ci(function (t) {
							for (var e = t.length, n = e, r = Ba(h), i = Un(), a = i == s, o = []; n--;) {
								var l = t[n] = Qn(l = t[n]) ? l : [];
								r[n] = a && l.length >= 120 ? pn(n && l) : null
							}
							var u = t[0],
								c = -1,
								h = u ? u.length : 0,
								f = r[0];
							t: for (; ++c < h;)
								if (l = u[c], (f ? Qt(f, l) : i(o, l, 0)) < 0) {
									for (var n = e; --n;) {
										var g = r[n];
										if ((g ? Qt(g, l) : i(t[n], l, 0)) < 0) continue t
									}
									f && f.push(l), o.push(l)
								}
							return o
						}),
						Yo = Ci(function (t, e) {
							e = Se(e);
							var n = ve(t, e);
							return We(t, e.sort(a)), n
						}),
						$o = Fn(),
						Zo = Fn(!0),
						Qo = Ci(function (t) {
							return Ke(Se(t, !1, !0))
						}),
						Jo = Ci(function (t, e) {
							return Qn(t) ? _e(t, e) : []
						}),
						Ko = Ci(Nr),
						ts = Ci(function (t) {
							var e = t.length,
								n = e > 2 ? t[e - 2] : T,
								r = e > 1 ? t[e - 1] : T;
							return e > 2 && "function" == typeof n ? e -= 2 : (n = e > 1 && "function" == typeof r ? (--e, r) : T, r = T), t.length = e, qr(t, n, r)
						}),
						es = Ci(function (t) {
							return t = Se(t), this.thru(function (e) {
								return Kt(Ss(e) ? e : [hr(e)], t)
							})
						}),
						ns = Ci(function (t, e) {
							return ve(t, Se(e))
						}),
						rs = cn(function (t, e, n) {
							to.call(t, n) ? ++t[n] : t[n] = 1
						}),
						is = yn(Fo),
						as = yn(No, !0),
						os = wn(ee, Fo),
						ss = wn(ne, No),
						ls = cn(function (t, e, n) {
							to.call(t, n) ? t[n].push(e) : t[n] = [e]
						}),
						us = cn(function (t, e, n) {
							t[n] = e
						}),
						cs = Ci(function (t, e, n) {
							var r = -1,
								i = "function" == typeof e,
								a = tr(e),
								o = Qn(t) ? Ba(t.length) : [];
							return Fo(t, function (t) {
								var s = i ? e : a && null != t ? t[e] : T;
								o[++r] = s ? s.apply(t, n) : Zn(t, e, n)
							}), o
						}),
						hs = cn(function (t, e, n) {
							t[n ? 0 : 1].push(e)
						}, function () {
							return [
								[],
								[]
							]
						}),
						fs = Pn(ce, Fo),
						gs = Pn(he, No),
						ds = Ci(function (t, e) {
							if (null == t) return [];
							var n = e[2];
							return n && Kn(e[0], e[1], n) && (e.length = 1), Qe(t, Se(e), [])
						}),
						ps = xo || function () {
							return (new Va).getTime()
						},
						As = Ci(function (t, e, n) {
							var r = S;
							if (n.length) {
								var i = y(n, As.placeholder);
								r |= L
							}
							return Nn(t, r, e, n, i)
						}),
						Cs = Ci(function (t, e) {
							e = e.length ? Se(e) : Zi(t);
							for (var n = -1, r = e.length; ++n < r;) {
								var i = e[n];
								t[i] = Nn(t[i], S, t)
							}
							return t
						}),
						vs = Ci(function (t, e, n) {
							var r = S | D;
							if (n.length) {
								var i = y(n, vs.placeholder);
								r |= L
							}
							return Nn(e, r, t, n, i)
						}),
						Is = vn(O),
						ms = vn(M),
						ys = Ci(function (t, e) {
							return be(t, 1, e)
						}),
						bs = Ci(function (t, e, n) {
							return be(t, e, n)
						}),
						_s = xn(),
						xs = xn(!0),
						ws = Ci(function (t, e) {
							if (e = Se(e), "function" != typeof t || !ae(e, l)) throw new $a(W);
							var n = e.length;
							return Ci(function (r) {
								for (var i = _o(r.length, n); i--;) r[i] = e[i](r[i]);
								return t.apply(this, r)
							})
						}),
						ks = Dn(L),
						Ts = Dn(j),
						Es = Ci(function (t, e) {
							return Nn(t, N, T, T, T, Se(e))
						}),
						Ss = Io || function (t) {
							return I(t) && nr(t.length) && no.call(t) == Y
						},
						Ds = hn(Ve),
						Ps = hn(function (t, e, n) {
							return n ? Ae(t, e, n) : Ce(t, e)
						}),
						Os = In(Ps, de),
						Ms = In(Ds, ar),
						Ls = _n(Pe),
						js = _n(Oe),
						Fs = kn(qo),
						Ns = kn(Ro),
						qs = Tn(Pe),
						Rs = Tn(Oe),
						Bs = yo ? function (t) {
							var e = null == t ? T : t.constructor;
							return "function" == typeof e && e.prototype === t || "function" != typeof t && Qn(t) ? ur(t) : Li(t) ? yo(t) : []
						} : ur,
						Vs = En(!0),
						Xs = En(),
						Us = Ci(function (t, e) {
							if (null == t) return {};
							if ("function" != typeof e[0]) {
								var e = le(Se(e), Ya);
								return or(t, _e(ta(t), e))
							}
							var n = on(e[0], e[1], 3);
							return sr(t, function (t, e, r) {
								return !n(t, e, r)
							})
						}),
						zs = Ci(function (t, e) {
							return null == t ? {} : "function" == typeof e[0] ? sr(t, on(e[0], e[1], 3)) : or(t, Se(e))
						}),
						Ws = An(function (t, e, n) {
							return e = e.toLowerCase(), t + (n ? e.charAt(0).toUpperCase() + e.slice(1) : e)
						}),
						Hs = An(function (t, e, n) {
							return t + (n ? "-" : "") + e.toLowerCase()
						}),
						Gs = Sn(),
						Ys = Sn(!0),
						$s = An(function (t, e, n) {
							return t + (n ? "_" : "") + e.toLowerCase()
						}),
						Zs = An(function (t, e, n) {
							return t + (n ? " " : "") + (e.charAt(0).toUpperCase() + e.slice(1))
						}),
						Qs = Ci(function (t, e) {
							try {
								return t.apply(T, e)
							} catch (n) {
								return Pi(n) ? n : new Xa(n)
							}
						}),
						Js = Ci(function (t, e) {
							return function (n) {
								return Zn(n, t, e)
							}
						}),
						Ks = Ci(function (t, e) {
							return function (n) {
								return Zn(t, n, e)
							}
						}),
						tl = jn("ceil"),
						el = jn("floor"),
						nl = mn(_i, To),
						rl = mn(Wi, Eo),
						il = jn("round");
					return e.prototype = n.prototype, r.prototype = jo(n.prototype), r.prototype.constructor = r, i.prototype = jo(n.prototype), i.prototype.constructor = i, at.prototype["delete"] = Ht, at.prototype.get = Gt, at.prototype.has = Yt, at.prototype.set = $t, Zt.prototype.push = Jt, di.Cache = at, e.after = ci, e.ary = hi, e.assign = Ps, e.at = ns, e.before = fi, e.bind = As, e.bindAll = Cs, e.bindKey = vs, e.callback = wa, e.chain = Vr, e.chunk = dr, e.compact = pr, e.constant = ka, e.countBy = rs, e.create = $i, e.curry = Is, e.curryRight = ms, e.debounce = gi, e.defaults = Os, e.defaultsDeep = Ms, e.defer = ys, e.delay = bs, e.difference = zo, e.drop = Ar, e.dropRight = Cr, e.dropRightWhile = vr, e.dropWhile = Ir, e.fill = mr, e.filter = Qr, e.flatten = br, e.flattenDeep = _r, e.flow = _s, e.flowRight = xs, e.forEach = os, e.forEachRight = ss, e.forIn = Fs, e.forInRight = Ns, e.forOwn = qs, e.forOwnRight = Rs, e.functions = Zi, e.groupBy = ls, e.indexBy = us, e.initial = wr, e.intersection = Go, e.invert = Ki, e.invoke = cs, e.keys = Bs, e.keysIn = ta, e.map = ti, e.mapKeys = Vs, e.mapValues = Xs, e.matches = Ea, e.matchesProperty = Sa, e.memoize = di, e.merge = Ds, e.method = Js, e.methodOf = Ks, e.mixin = Da, e.modArgs = ws, e.negate = pi, e.omit = Us, e.once = Ai, e.pairs = ea, e.partial = ks, e.partialRight = Ts, e.partition = hs, e.pick = zs, e.pluck = ei, e.property = Ma, e.propertyOf = La, e.pull = Er, e.pullAt = Yo, e.range = ja, e.rearg = Es, e.reject = ni, e.remove = Sr, e.rest = Dr, e.restParam = Ci, e.set = ra, e.shuffle = ii, e.slice = Pr, e.sortBy = si, e.sortByAll = ds, e.sortByOrder = li, e.spread = vi, e.take = Or, e.takeRight = Mr, e.takeRightWhile = Lr, e.takeWhile = jr, e.tap = Xr, e.throttle = Ii, e.thru = Ur, e.times = Fa, e.toArray = Gi, e.toPlainObject = Yi, e.transform = ia, e.union = Qo, e.uniq = Fr, e.unzip = Nr, e.unzipWith = qr, e.values = aa, e.valuesIn = oa, e.where = ui, e.without = Jo, e.wrap = mi, e.xor = Rr, e.zip = Ko, e.zipObject = Br, e.zipWith = ts, e.backflow = xs, e.collect = ti, e.compose = xs, e.each = os, e.eachRight = ss, e.extend = Ps, e.iteratee = wa, e.methods = Zi, e.object = Br, e.select = Qr, e.tail = Dr, e.unique = Fr, Da(e, e), e.add = qa, e.attempt = Qs, e.camelCase = Ws, e.capitalize = ua, e.ceil = tl, e.clone = yi, e.cloneDeep = bi, e.deburr = ca, e.endsWith = ha, e.escape = fa, e.escapeRegExp = ga, e.every = Zr, e.find = is, e.findIndex = Wo, e.findKey = Ls, e.findLast = as, e.findLastIndex = Ho, e.findLastKey = js, e.findWhere = Jr, e.first = yr, e.floor = el, e.get = Qi, e.gt = _i, e.gte = xi, e.has = Ji, e.identity = Ta, e.includes = Kr, e.indexOf = xr, e.inRange = sa, e.isArguments = wi, e.isArray = Ss, e.isBoolean = ki, e.isDate = Ti, e.isElement = Ei, e.isEmpty = Si, e.isEqual = Di, e.isError = Pi, e.isFinite = Oi, e.isFunction = Mi, e.isMatch = ji, e.isNaN = Fi, e.isNative = Ni, e.isNull = qi, e.isNumber = Ri, e.isObject = Li, e.isPlainObject = Bi, e.isRegExp = Vi, e.isString = Xi, e.isTypedArray = Ui, e.isUndefined = zi, e.kebabCase = Hs, e.last = kr, e.lastIndexOf = Tr, e.lt = Wi, e.lte = Hi, e.max = nl, e.min = rl, e.noConflict = Pa, e.noop = Oa, e.now = ps, e.pad = da, e.padLeft = Gs, e.padRight = Ys, e.parseInt = pa, e.random = la, e.reduce = fs, e.reduceRight = gs, e.repeat = Aa, e.result = na, e.round = il, e.runInContext = k, e.size = ai, e.snakeCase = $s, e.some = oi, e.sortedIndex = $o, e.sortedLastIndex = Zo, e.startCase = Zs, e.startsWith = Ca, e.sum = Ra, e.template = va, e.trim = Ia, e.trimLeft = ma, e.trimRight = ya, e.trunc = ba, e.unescape = _a, e.uniqueId = Na, e.words = xa, e.all = Zr, e.any = oi, e.contains = Kr, e.eq = Di, e.detect = is, e.foldl = fs, e.foldr = gs, e.head = yr, e.include = Kr, e.inject = fs, Da(e, function () {
						var t = {};
						return Pe(e, function (n, r) {
							e.prototype[r] || (t[r] = n)
						}), t
					}(), !1), e.sample = ri, e.prototype.sample = function (t) {
						return this.__chain__ || null != t ? this.thru(function (e) {
							return ri(e, t)
						}) : ri(this.value())
					}, e.VERSION = E, ee(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function (t) {
						e[t].placeholder = e
					}), ee(["drop", "take"], function (t, e) {
						i.prototype[t] = function (n) {
							var r = this.__filtered__;
							if (r && !e) return new i(this);
							n = null == n ? 1 : bo(vo(n) || 0, 0);
							var a = this.clone();
							return r ? a.__takeCount__ = _o(a.__takeCount__, n) : a.__views__.push({
								size: n,
								type: t + (a.__dir__ < 0 ? "Right" : "")
							}), a
						}, i.prototype[t + "Right"] = function (e) {
							return this.reverse()[t](e).reverse()
						}
					}), ee(["filter", "map", "takeWhile"], function (t, e) {
						var n = e + 1,
							r = n != z;
						i.prototype[t] = function (t, e) {
							var i = this.clone();
							return i.__iteratees__.push({
								iteratee: Vn(t, e, 1),
								type: n
							}), i.__filtered__ = i.__filtered__ || r, i
						}
					}), ee(["first", "last"], function (t, e) {
						var n = "take" + (e ? "Right" : "");
						i.prototype[t] = function () {
							return this[n](1).value()[0]
						}
					}), ee(["initial", "rest"], function (t, e) {
						var n = "drop" + (e ? "" : "Right");
						i.prototype[t] = function () {
							return this.__filtered__ ? new i(this) : this[n](1)
						}
					}), ee(["pluck", "where"], function (t, e) {
						var n = e ? "filter" : "map",
							r = e ? Re : Ma;
						i.prototype[t] = function (t) {
							return this[n](r(t))
						}
					}), i.prototype.compact = function () {
						return this.filter(Ta)
					}, i.prototype.reject = function (t, e) {
						return t = Vn(t, e, 1), this.filter(function (e) {
							return !t(e)
						})
					}, i.prototype.slice = function (t, e) {
						t = null == t ? 0 : +t || 0;
						var n = this;
						return n.__filtered__ && (t > 0 || 0 > e) ? new i(n) : (0 > t ? n = n.takeRight(-t) : t && (n = n.drop(t)), e !== T && (e = +e || 0, n = 0 > e ? n.dropRight(-e) : n.take(e - t)), n)
					}, i.prototype.takeRightWhile = function (t, e) {
						return this.reverse().takeWhile(t, e).reverse()
					}, i.prototype.toArray = function () {
						return this.take(Eo)
					}, Pe(i.prototype, function (t, n) {
						var a = /^(?:filter|map|reject)|While$/.test(n),
							o = /^(?:first|last)$/.test(n),
							s = e[o ? "take" + ("last" == n ? "Right" : "") : n];
						s && (e.prototype[n] = function () {
							var e = o ? [1] : arguments,
								n = this.__chain__,
								l = this.__wrapped__,
								u = !!this.__actions__.length,
								c = l instanceof i,
								h = e[0],
								f = c || Ss(l);
							f && a && "function" == typeof h && 1 != h.length && (c = f = !1);
							var g = function (t) {
									return o && n ? s(t, 1)[0] : s.apply(T, ue([t], e))
								},
								d = {
									func: Ur,
									args: [g],
									thisArg: T
								},
								p = c && !u;
							if (o && !n) return p ? (l = l.clone(), l.__actions__.push(d), t.call(l)) : s.call(T, this.value())[0];
							if (!o && f) {
								l = p ? l : new i(this);
								var A = t.apply(l, e);
								return A.__actions__.push(d), new r(A, n)
							}
							return this.thru(g)
						})
					}), ee(["join", "pop", "push", "replace", "shift", "sort", "splice", "split", "unshift"], function (t) {
						var n = (/^(?:replace|split)$/.test(t) ? Ja : Za)[t],
							r = /^(?:push|sort|unshift)$/.test(t) ? "tap" : "thru",
							i = /^(?:join|pop|replace|shift)$/.test(t);
						e.prototype[t] = function () {
							var t = arguments;
							return i && !this.__chain__ ? n.apply(this.value(), t) : this[r](function (e) {
								return n.apply(e, t)
							})
						}
					}), Pe(i.prototype, function (t, n) {
						var r = e[n];
						if (r) {
							var i = r.name,
								a = Lo[i] || (Lo[i] = []);
							a.push({
								name: n,
								func: r
							})
						}
					}), Lo[On(T, D).name] = [{
						name: "wrapper",
						func: T
					}], i.prototype.clone = m, i.prototype.reverse = K, i.prototype.value = rt, e.prototype.chain = zr, e.prototype.commit = Wr, e.prototype.concat = es, e.prototype.plant = Hr, e.prototype.reverse = Gr, e.prototype.toString = Yr, e.prototype.run = e.prototype.toJSON = e.prototype.valueOf = e.prototype.value = $r, e.prototype.collect = e.prototype.map, e.prototype.head = e.prototype.first, e.prototype.select = e.prototype.filter, e.prototype.tail = e.prototype.rest, e
				}
				var T, E = "3.10.1",
					S = 1,
					D = 2,
					P = 4,
					O = 8,
					M = 16,
					L = 32,
					j = 64,
					F = 128,
					N = 256,
					q = 30,
					R = "...",
					B = 150,
					V = 16,
					X = 200,
					U = 1,
					z = 2,
					W = "Expected a function",
					H = "__lodash_placeholder__",
					G = "[object Arguments]",
					Y = "[object Array]",
					$ = "[object Boolean]",
					Z = "[object Date]",
					Q = "[object Error]",
					J = "[object Function]",
					K = "[object Map]",
					tt = "[object Number]",
					et = "[object Object]",
					nt = "[object RegExp]",
					rt = "[object Set]",
					it = "[object String]",
					at = "[object WeakMap]",
					ot = "[object ArrayBuffer]",
					st = "[object Float32Array]",
					lt = "[object Float64Array]",
					ut = "[object Int8Array]",
					ct = "[object Int16Array]",
					ht = "[object Int32Array]",
					ft = "[object Uint8Array]",
					gt = "[object Uint8ClampedArray]",
					dt = "[object Uint16Array]",
					pt = "[object Uint32Array]",
					At = /\b__p \+= '';/g,
					Ct = /\b(__p \+=) '' \+/g,
					vt = /(__e\(.*?\)|\b__t\)) \+\n'';/g,
					It = /&(?:amp|lt|gt|quot|#39|#96);/g,
					mt = /[&<>"'`]/g,
					yt = RegExp(It.source),
					bt = RegExp(mt.source),
					_t = /<%-([\s\S]+?)%>/g,
					xt = /<%([\s\S]+?)%>/g,
					wt = /<%=([\s\S]+?)%>/g,
					kt = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
					Tt = /^\w*$/,
					Et = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g,
					St = /^[:!,]|[\\^$.*+?()[\]{}|\/]|(^[0-9a-fA-Fnrtuvx])|([\n\r\u2028\u2029])/g,
					Dt = RegExp(St.source),
					Pt = /[\u0300-\u036f\ufe20-\ufe23]/g,
					Ot = /\\(\\)?/g,
					Mt = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,
					Lt = /\w*$/,
					jt = /^0[xX]/,
					Ft = /^\[object .+?Constructor\]$/,
					Nt = /^\d+$/,
					qt = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g,
					Rt = /($^)/,
					Bt = /['\n\r\u2028\u2029\\]/g,
					Vt = function () {
						var t = "[A-Z\\xc0-\\xd6\\xd8-\\xde]",
							e = "[a-z\\xdf-\\xf6\\xf8-\\xff]+";
						return RegExp(t + "+(?=" + t + e + ")|" + t + "?" + e + "|" + t + "+|[0-9]+", "g")
					}(),
					Xt = ["Array", "ArrayBuffer", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Math", "Number", "Object", "RegExp", "Set", "String", "_", "clearTimeout", "isFinite", "parseFloat", "parseInt", "setTimeout", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap"],
					Ut = -1,
					zt = {};
				zt[st] = zt[lt] = zt[ut] = zt[ct] = zt[ht] = zt[ft] = zt[gt] = zt[dt] = zt[pt] = !0, zt[G] = zt[Y] = zt[ot] = zt[$] = zt[Z] = zt[Q] = zt[J] = zt[K] = zt[tt] = zt[et] = zt[nt] = zt[rt] = zt[it] = zt[at] = !1;
				var Wt = {};
				Wt[G] = Wt[Y] = Wt[ot] = Wt[$] = Wt[Z] = Wt[st] = Wt[lt] = Wt[ut] = Wt[ct] = Wt[ht] = Wt[tt] = Wt[et] = Wt[nt] = Wt[it] = Wt[ft] = Wt[gt] = Wt[dt] = Wt[pt] = !0, Wt[Q] = Wt[J] = Wt[K] = Wt[rt] = Wt[at] = !1;
				var Ht = {
						"À": "A",
						"Á": "A",
						"Â": "A",
						"Ã": "A",
						"Ä": "A",
						"Å": "A",
						"à": "a",
						"á": "a",
						"â": "a",
						"ã": "a",
						"ä": "a",
						"å": "a",
						"Ç": "C",
						"ç": "c",
						"Ð": "D",
						"ð": "d",
						"È": "E",
						"É": "E",
						"Ê": "E",
						"Ë": "E",
						"è": "e",
						"é": "e",
						"ê": "e",
						"ë": "e",
						"Ì": "I",
						"Í": "I",
						"Î": "I",
						"Ï": "I",
						"ì": "i",
						"í": "i",
						"î": "i",
						"ï": "i",
						"Ñ": "N",
						"ñ": "n",
						"Ò": "O",
						"Ó": "O",
						"Ô": "O",
						"Õ": "O",
						"Ö": "O",
						"Ø": "O",
						"ò": "o",
						"ó": "o",
						"ô": "o",
						"õ": "o",
						"ö": "o",
						"ø": "o",
						"Ù": "U",
						"Ú": "U",
						"Û": "U",
						"Ü": "U",
						"ù": "u",
						"ú": "u",
						"û": "u",
						"ü": "u",
						"Ý": "Y",
						"ý": "y",
						"ÿ": "y",
						"Æ": "Ae",
						"æ": "ae",
						"Þ": "Th",
						"þ": "th",
						"ß": "ss"
					},
					Gt = {
						"&": "&amp;",
						"<": "&lt;",
						">": "&gt;",
						'"': "&quot;",
						"'": "&#39;",
						"`": "&#96;"
					},
					Yt = {
						"&amp;": "&",
						"&lt;": "<",
						"&gt;": ">",
						"&quot;": '"',
						"&#39;": "'",
						"&#96;": "`"
					},
					$t = {
						"function": !0,
						object: !0
					},
					Zt = {
						0: "x30",
						1: "x31",
						2: "x32",
						3: "x33",
						4: "x34",
						5: "x35",
						6: "x36",
						7: "x37",
						8: "x38",
						9: "x39",
						A: "x41",
						B: "x42",
						C: "x43",
						D: "x44",
						E: "x45",
						F: "x46",
						a: "x61",
						b: "x62",
						c: "x63",
						d: "x64",
						e: "x65",
						f: "x66",
						n: "x6e",
						r: "x72",
						t: "x74",
						u: "x75",
						v: "x76",
						x: "x78"
					},
					Qt = {
						"\\": "\\",
						"'": "'",
						"\n": "n",
						"\r": "r",
						"\u2028": "u2028",
						"\u2029": "u2029"
					},
					Jt = $t[typeof e] && e && !e.nodeType && e,
					Kt = $t[typeof t] && t && !t.nodeType && t,
					te = Jt && Kt && "object" == typeof i && i && i.Object && i,
					ee = $t[typeof self] && self && self.Object && self,
					ne = $t[typeof window] && window && window.Object && window,
					re = (Kt && Kt.exports === Jt && Jt, te || ne !== (this && this.window) && ne || ee || this),
					ie = k();
				re._ = ie, r = function () {
					return ie
				}.call(e, n, e, t), !(r !== T && (t.exports = r))
			}).call(this)
		}).call(e, n(7)(t), function () {
			return this
		}(), n(6))
	}, function (t, e) {
		t.exports = function (t) {
			return t.webpackPolyfill || (t.deprecate = function () {}, t.paths = [], t.children = [], t.webpackPolyfill = 1), t
		}
	}, function (t, e, n) {
		(function (r, i) {
			"use strict";

			function a(t) {
				return t && t.__esModule ? t : {
					"default": t
				}
			}

			function o(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var s = function () {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function (e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}(),
				l = n(9),
				u = a(l),
				c = n(10),
				h = a(c),
				f = n(11),
				g = (a(f), n(12)),
				d = a(g),
				p = n(14),
				A = (a(p), n(15)),
				C = a(A),
				v = n(20),
				I = a(v),
				m = n(110),
				y = a(m),
				b = n(111),
				_ = a(b),
				x = n(112),
				w = a(x),
				k = n(113),
				T = a(k),
				E = n(57),
				S = {
					minute: function (t, e) {
						return new I["default"](t, e)
					},
					day: function (t, e) {
						return new y["default"](t, e)
					},
					fdays: function (t, e) {
						return new I["default"](t, e)
					},
					week: function (t, e) {
						return new _["default"](t, e)
					},
					month: function (t, e) {
						return new w["default"](t, e)
					},
					year1: function (t, e) {
						return new T["default"](t, e)
					},
					year3: function (t, e) {
						return new T["default"](t, e)
					},
					year5: function (t, e) {
						return new T["default"](t, e)
					},
					m5: function (t, e) {
						return new y["default"](t, e)
					},
					m15: function (t, e) {
						return new y["default"](t, e)
					},
					m30: function (t, e) {
						return new y["default"](t, e)
					},
					m60: function (t, e) {
						return new y["default"](t, e)
					}
				},
				D = function () {
					function t() {
						return o(this, t), this
					}
					return s(t, [{
						key: "setSymbol",
						value: function (t, e) {
							this.symbol = t, this.config = u["default"].cfg(t)[e];
							window.stock = t;
							this.channel = d["default"].channel(e);
							return this._init(), this
						}
					}, {
						key: "_init",
						value: function () {
							return this._initMenu(), this._initCoord(), this._initCanvas(), this._initLayer(), this._initScene(), this
						}
					}, {
						key: "_initMenu",
						value: function () {
							var t = this;
							this.sub1 = this.channel.subscribe("draw", function () {
								t.draw()
							}), this.sub2 = this.channel.subscribe("stop", function () {
								t._destroyScene()
							});
							var e = this.config;
							this.menu ? this.menu.reset(e) : this.menu = new C["default"](e)
						}
					}, {
						key: "_initCoord",
						value: function () {
							var t = this.config.container,
								e = r(t).width(),
								n = r(t).height();
							this.coord = {
								x: 0,
								y: 0,
								w: e,
								h: n,
								width: e,
								height: n
							}, u["default"].cfg(this.symbol, {
								outer: this.config.outer,
								coord: this.coord
							})
						}
					}, {
						key: "_initCanvas",
						value: function () {
							if (this.canvas) {
								var t = this.canvas,
									e = this.coord,
									n = e.height,
									r = e.width;
								(t.getAttr("height") !== n || t.getAttr("width") !== r) && (t.width(this.coord.width), t.height(this.coord.height))
							} else this.canvas = E(this.config.container.id, this.coord)
						}
					}, {
						key: "_initLayer",
						value: function () {
							if (!this.layer) {
								var t = this.canvas;
								this.layer = {
									back: t.layer(),
									paper: t.layer(),
									paint: t.layer(),
									fore: t.layer(),
									drag: t.layer()
								}
							}
							u["default"].cfg(this.symbol, {
								outer: this.config.outer,
								layer: this.layer,
								canvas: this.canvas
							})
						}
					}, {
						key: "_initScene",
						value: function () {
							this.menu.getScenes()
						}
					}, {
						key: "_saveConfig",
						value: function (t) {
							switch (t) {
								case 0:
									i.extend(this.config, {
										canvas: this.canvas,
										layer: this.layer,
										coord: this.coord,
										scene: this.scene
									});
									break;
								case 1:
									i.extend(this.config, {
										coord: this.coord
									})
							}
						}
					}, {
						key: "show",
						value: function () {
							this.menu.show()
						}
					}, {
						key: "hide",
						value: function () {
							this.menu.hide(), this._destroyScene()
						}
					}, {
						key: "draw",
						value: function () {
							this._destroyScene(), this._checkScene(), this._drawScene()
						}
					}, {
						key: "destroy",
						value: function () {
							this.sub1 && this.sub1.unsubscribe(), this.sub2 && this.sub2.unsubscribe(), i.forIn(this.layer, function (t) {
								t.empty()
							})
						}
					}, {
						key: "compare",
						value: function () {
							var t = this.symbol,
								e = this.config,
								n = this.channel || d["default"].channel(t);
							n.publish(e.outer.id + ".compare")
						}
					}, {
						key: "_destroyScene",
						value: function () {
							var t = this._getC("scene", "current"),
								e = t.scene;
							t.current;
							i.forIn(e, function (t) {
								t.scene && t.scene.status && (t.scene.destroy(), t.scene.status = 0)
							}), i.forIn(this.layer, function (t) {
								t.empty()
							})
						}
					}, {
						key: "repaint",
						value: function () {
							i.forIn(this.layer, function (t) {
								t.empty()
							});
							var t = this._getC("current", "symbol", "scene"),
								e = t.current,
								n = t.scene;
							if (n) {
								var r = n[e];
								r.scene.repaint()
							}
						}
					}, {
						key: "_checkScene",
						value: function () {
							var t = this._getC("current", "symbol", "scene"),
								e = t.current,
								n = t.symbol,
								r = t.scene;
							if (r) {
								var a = r[e];
								a.scene || i.extend(a, {
									name: a.name,
									scene: S[e](n, this.config.outer.id)
								})
							}
						}
					}, {
						key: "_drawScene",
						value: function () {
							var t = this._getC("scene", "current"),
								e = t.scene,
								n = t.current;
							e && e[n] && e[n].scene.init().draw()
						}
					}, {
						key: "setQtData",
						value: function (t, e) {
							var n = this._getC("scene", "current"),
								r = n.scene,
								i = n.current;
							r && r[i] && r[i].scene.setQtData(t, e)
						}
					}, {
						key: "_setC",
						value: function (t) {
							u["default"].cfg(this.symbol, t)
						}
					}, {
						key: "_getC",
						value: function () {
							for (var t = this.config, e = arguments.length, n = Array(e), r = 0; e > r; r++) n[r] = arguments[r];
							return 1 === n.length && n[0] ? t[n[0]] : i.zipObject(n.map(function (e) {
								return [h["default"].rmTag(e), t[e]]
							}))
						}
					}]), t
				}();
			e["default"] = D, t.exports = e["default"]
		}).call(e, n(5), n(6))
	}, function (t, e, n) {
		(function (n) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var i = function () {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function (e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}(),
				a = "alpineDataset",
				o = void 0;
			window[a] = window[a] || {};
			var s = function () {
				function t() {
					r(this, t)
				}
				return i(t, null, [{
					key: "cfg",
					value: function e() {
						for (var t = arguments.length, r = Array(t), i = 0; t > i; i++) r[i] = arguments[i];
						var o = r[0];
						switch (this._initStock(o), r.length) {
							case 1:
								return window[a][o].configAry;
							case 2:
								var e = r[1];
								window[a][o].configAry[e.outer.id] ? n.extend(window[a][o].configAry[e.outer.id], e) : window[a][o].configAry[e.outer.id] = n.extend({
									fqType: this.getFqType(o, this.getMarket(o)),
									market: this.getMarket(o),
									isIndex: this.isIndex(o),
									cmpList: [],
									relatedList: []
								}, e)
						}
					}
				}, {
					key: "delCfg",
					value: function () {
						var t = arguments[0],
							e = arguments[1];
						window[a][t].config[e] = o
					}
				}, {
					key: "data",
					value: function s() {
						for (var t = arguments.length, e = Array(t), n = 0; t > n; n++) e[n] = arguments[n];
						var r = e[0];
						switch (this._initStock(r), e.length) {
							case 1:
								return window[a][r].data;
							case 3:
								var i = e[1],
									s = e[2];
								window[a][r].data[i] = s
						}
					}
				}, {
					key: "_initStock",
					value: function (t) {
						var e = window[a];
						e[t] || void 0 === t || (e[t] = {
							configAry: {},
							data: {
								minute: o,
								fdays: o,
								jingzhi: o,
								shouyi: o,
								dayqfq: o,
								weekqfq: o,
								monthqfq: o,
								dayhfq: o,
								weekhfq: o,
								monthhfq: o,
								day: o,
								week: o,
								month: o
							}
						})
					}
				}, {
					key: "isIndex",
					value: function (t) {
						return t.match(/sh000|sz399|nq899|hkHSI$|hkHSCEI$|hkHSCCI$|hkCES100$|hkCES300$|usDJI$|usIXIC$|usINX$/)
					}
				}, {
					key: "getMarket",
					value: function (t) {
						var e = /^sh5(0|1)\d{4}$/i,
							n = /^jj\d{5}[0-9A-Z]$/i,
							r = /^sz1[568]\d{4}$/i,
							i = /^qhIF|^qhTF|^qhIC|^qhIH|^qhT\d{4}$/i;
						return n.test(t) || e.test(t) || r.test(t) ? "fund" : i.test(t) ? "if" : t.substr(0, 2)
					}
				}, {
					key: "getFqType",
					value: function (t, e) {
						return /sz|sh|hk|us|nq/.test(e) ? "qfq" : ""
					}
				}, {
					key: "_clearData",
					value: function () {
						var t = window[a];
						n.forIn(t, function (t) {
							n.forIn(t.config, function (t) {
								n.forIn(t.scene, function (t) {
									t.scene && t.scene.destroy()
								})
							})
						}), window[a] = {}
					}
				}]), t
			}();
			e["default"] = s, t.exports = e["default"]
		}).call(e, n(6))
	}, function (t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = {
			params: function (t) {
				var e = {};
				return t.forEach(function (t) {
					var n = typeof t;
					switch (n) {
						case "object":
							Array.isArray(t) ? n = "array" : t instanceof Date && (n = "date");
							break;
						case "string":
							/http:\/\//.test(t) && (n = "url")
					}
					n && e[n] ? e[n].push(t) : e[n] = [t]
				}), e
			},
			rmTag: function (t) {
				return t.replace(/\w+_/, "")
			},
			binarySearch: function (t, e, n) {
				var r = t.length,
					i = Math.floor(r / 2),
					a = 0;
				if (0 == r) return n ? -1 : !1;
				if (1 * t[i][0] == e) return i;
				if (1 * t[i][0] < e) {
					var o = this.binarySearch(t.slice(i + 1, r), e, n);
					if (o === !1) return o;
					a = i + 1 + o
				} else 1 * t[i][0] > e && (a = this.binarySearch(t.slice(0, i), e, n));
				return a
			}
		};
		e["default"] = n, t.exports = e["default"]
	}, function (t, e, n) {
		(function (r) {
			"use strict";

			function i(t) {
				return t && t.__esModule ? t : {
					"default": t
				}
			}

			function a(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function o() {
				for (var t = {}, e = arguments.length, n = Array(e), i = 0; e > i; i++) n[i] = arguments[i];
				return n.length > 1 && n.map(function (e) {
					e in u && (t[e] = r.clone(u[e]))
				}), t
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var s = function () {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function (e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}(),
				l = n(10),
				u = (i(l), {
					minute: {
						name: "分时"
					},
					fdays: {
						name: "五日"
					},
					day: {
						name: "日 K"
					},
					week: {
						name: "周 K"
					},
					month: {
						name: "月 K"
					},
					m5: {
						name: "5分"
					},
					m15: {
						name: "15分"
					},
					m30: {
						name: "30分"
					},
					m60: {
						name: "60分"
					},
					year1: {
						name: "1 年"
					},
					year3: {
						name: "3 年"
					},
					year5: {
						name: "5 年"
					}
				}),
				c = function () {
					function t() {
						a(this, t)
					}
					return s(t, null, [{
						key: "getScenes",
						value: function (t, e, n) {
							var r = {};
							if (!t) return void console.error("Scences Error: symbol not found!");
							switch (e) {
								case "sz":
								case "sh":
									r = o("minute", "fdays", "day", "week", "month", "m5", "m30", "m60", "year1", "year3", "year5");
									break;
								case "hk":
								case "us":
									r = o("minute", "fdays", "day", "week", "month", "year1", "year3", "year5");
									break;
								case "nq":
								case "fund":
									r = o("minute", "fdays", "day", "week", "month");
									break;
								case "if":
								case "qh":
								case "wh":
									r = o("minute", "day", "week", "month");
									break;
								default:
									console.error("Scences Error: Wrong Type!")
							}
							n(r)
						}
					}]), t
				}();
			e["default"] = c, t.exports = e["default"]
		}).call(e, n(6))
	}, function (t, e, n) {
		(function (r) {
			"use strict";

			function i(t, e) {
				return function () {
					if (console.warn || console.log) {
						var n = "Warning, the " + t + " method has been deprecated. Please use " + e + " instead.";
						console.warn ? console.warn(n) : console.log(n)
					}
					return A.prototype[e].apply(this, arguments)
				}
			}

			function a() {
				for (; x.length;) g.unsubscribe(x.shift())
			}

			function o(t, e, n) {
				return function (r, i, a) {
					r === t && a.splice(i, 1), 0 === a.length && delete n[e]
				}
			}

			function s(t, e, n, r, i) {
				var a = i && i.headers || {};
				return function (i) {
					var o;
					d.resolver.compare(i.topic, t, a) && (a.resolverNoCache || (o = e[n] = e[n] || [], o.push(i)), i.cacheKeys.push(n), r && r(i))
				}
			}

			function l(t, e) {
				return {
					channel: d.SYSTEM_CHANNEL,
					topic: "subscription." + t,
					data: {
						event: "subscription." + t,
						channel: e.channel,
						topic: e.topic
					}
				}
			}

			function u(t, e) {
				return "function" == typeof t ? t : t ? function (n) {
					var i = 0,
						a = 0;
					return r.each(t, function (r, o) {
						i += 1, ("topic" === o && e.compare(n.topic, t.topic, {
							resolverNoCache: !0
						}) || "context" === o && t.context === n._context || n[o] === t[o]) && (a += 1)
					}), i === a
				} : function () {
					return !0
				}
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var c = window,
				h = c.postal,
				f = {
					DEFAULT_CHANNEL: "/",
					SYSTEM_CHANNEL: "postal",
					enableSystemMessages: !0,
					cacheKeyDelimiter: "|",
					autoCompactResolver: !1
				},
				g = {
					configuration: r.extend({}, f)
				},
				d = g.configuration,
				p = function (t, e) {
					this.bus = e, this.channel = t || d.DEFAULT_CHANNEL
				};
			p.prototype.subscribe = function () {
				return this.bus.subscribe({
					channel: this.channel,
					topic: 1 === arguments.length ? arguments[0].topic : arguments[0],
					callback: 1 === arguments.length ? arguments[0].callback : arguments[1]
				})
			}, p.prototype.publish = function () {
				var t, e = {};
				"string" == typeof arguments[0] ? (e.topic = arguments[0], e.data = arguments[1], t = arguments[2]) : (e = arguments[0], t = arguments[1]), e.channel = this.channel, this.bus.publish(e, t)
			};
			var A = function (t, e, n) {
					if (3 !== arguments.length) throw new Error("You must provide a channel, topic and callback when creating a SubscriptionDefinition instance.");
					if (0 === e.length) throw new Error("Topics cannot be empty");
					this.channel = t, this.topic = e, this.callback = n, this.pipeline = [], this.cacheKeys = [], this._context = void 0
				},
				C = function () {
					var t;
					return function (e) {
						var n = !1;
						return "string" == typeof e ? (n = e === t, t = e) : (n = r.isEqual(e, t), t = r.extend({}, e)), !n
					}
				},
				v = function () {
					var t = [];
					return function (e) {
						var n = !r.any(t, function (t) {
							return r.isEqual(e, t)
						});
						return n && t.push(e), n
					}
				};
			A.prototype = {
				"catch": function (t) {
					var e = this.callback,
						n = function () {
							try {
								e.apply(this, arguments)
							} catch (n) {
								t(n, arguments[0])
							}
						};
					return this.callback = n, this
				},
				defer: function () {
					return this.delay(0)
				},
				disposeAfter: function (t) {
					if ("number" != typeof t || 0 >= t) throw new Error("The value provided to disposeAfter (maxCalls) must be a number greater than zero.");
					var e = this,
						n = r.after(t, r.bind(function () {
							e.unsubscribe()
						}));
					return e.pipeline.push(function (t, e, r) {
						r(t, e), n()
					}), e
				},
				distinct: function () {
					return this.constraint(new v)
				},
				distinctUntilChanged: function () {
					return this.constraint(new C)
				},
				invokeSubscriber: function (t, e) {
					if (!this.inactive) {
						var n = this,
							r = n.pipeline,
							i = r.length,
							a = n._context,
							o = -1,
							s = !1;
						if (i) {
							r = r.concat([n.callback]);
							var l = function u(t, e) {
								o += 1, i > o ? r[o].call(a, t, e, u) : (n.callback.call(a, t, e), s = !0)
							};
							l(t, e, 0)
						} else n.callback.call(a, t, e), s = !0;
						return s
					}
				},
				logError: function () {
					if (console) {
						var t;
						t = console.warn ? console.warn : console.log, this["catch"](t)
					}
					return this
				},
				once: function () {
					return this.disposeAfter(1)
				},
				subscribe: function (t) {
					return this.callback = t, this
				},
				unsubscribe: function () {
					this.inactive || g.unsubscribe(this)
				},
				constraint: function (t) {
					if ("function" != typeof t) throw new Error("Predicate constraint must be a function");
					return this.pipeline.push(function (e, n, r) {
						t.call(this, e, n) && r(e, n)
					}), this
				},
				constraints: function (t) {
					var e = this;
					return r.each(t, function (t) {
						e.constraint(t)
					}), e
				},
				context: function (t) {
					return this._context = t, this
				},
				debounce: function (t, e) {
					if ("number" != typeof t) throw new Error("Milliseconds must be a number");
					return this.pipeline.push(r.debounce(function (t, e, n) {
						n(t, e)
					}, t, !!e)), this
				},
				delay: function (t) {
					if ("number" != typeof t) throw new Error("Milliseconds must be a number");
					var e = this;
					return e.pipeline.push(function (e, n, r) {
						setTimeout(function () {
							r(e, n)
						}, t)
					}), this
				},
				throttle: function (t) {
					if ("number" != typeof t) throw new Error("Milliseconds must be a number");
					var e = function (t, e, n) {
						n(t, e)
					};
					return this.pipeline.push(r.throttle(e, t)), this
				}
			};
			for (var I = ["withConstraint", "withConstraints", "withContext", "withDebounce", "withDelay", "withThrottle"], m = ["constraint", "constraints", "context", "debounce", "delay", "throttle"], y = 0; 6 > y; y++) {
				var b = I[y];
				A.prototype[b] = i(b, m[y])
			}
			var _ = (d.resolver = {
					cache: {},
					regex: {},
					enableCache: !0,
					compare: function (t, e, n) {
						var i, a, o, s = e + d.cacheKeyDelimiter + t,
							l = this.cache[s],
							u = n || {},
							c = this.enableCache && !u.resolverNoCache;
						return l === !0 ? l : -1 === t.indexOf("#") && -1 === t.indexOf("*") ? (l = e === t, c && (this.cache[s] = l), l) : ((a = this.regex[t]) || (i = "^" + r.map(t.split("."), function (t) {
							var e = "";
							return o && (e = "#" !== o ? "\\.\\b" : "\\b"), e += "#" === t ? "[\\s\\S]*" : "*" === t ? "[^.]+" : t, o = t, e
						}).join("") + "$", a = this.regex[t] = new RegExp(i)), l = a.test(e), c && (this.cache[s] = l), l)
					},
					reset: function () {
						this.cache = {}, this.regex = {}
					},
					purge: function (t) {
						var e = this,
							n = d.cacheKeyDelimiter,
							i = function (r, i) {
								var a = i.split(n),
									o = a[0],
									s = a[1];
								"undefined" != typeof t.topic && t.topic !== o || "undefined" != typeof t.binding && t.binding !== s || delete e.cache[i]
							},
							a = function (t, r) {
								var i = r.split(n);
								0 === g.getSubscribersFor({
									topic: i[0]
								}).length && delete e.cache[r]
							};
						if ("undefined" == typeof t) this.reset();
						else {
							var o = t.compact === !0 ? a : i;
							r.each(this.cache, o)
						}
					}
				}, 0),
				x = [],
				w = 0,
				k = r.bind(l, void 0, "created"),
				T = r.bind(l, void 0, "removed");
			if (r.extend(g, {
					cache: {},
					subscriptions: {},
					wireTaps: [],
					ChannelDefinition: p,
					SubscriptionDefinition: A,
					channel: function (t) {
						return new p(t, this)
					},
					addWireTap: function (t) {
						var e = this;
						return e.wireTaps.push(t),
							function () {
								var n = e.wireTaps.indexOf(t); - 1 !== n && e.wireTaps.splice(n, 1)
							}
					},
					noConflict: function () {
						if ("undefined" == typeof window || "undefined" != typeof window && n(13)) throw new Error("noConflict can only be used in browser clients which aren't using AMD modules");
						return c.postal = h, this
					},
					getSubscribersFor: function (t) {
						var e = [],
							n = this;
						return r.each(n.subscriptions, function (n) {
							r.each(n, function (n) {
								e = e.concat(r.filter(n, u(t, d.resolver)))
							})
						}), e
					},
					publish: function (t, e) {
						++_;
						var n = t.channel = t.channel || d.DEFAULT_CHANNEL,
							i = t.topic;
						t.timeStamp = new Date, this.wireTaps.length && r.each(this.wireTaps, function (e) {
							e(t.data, t, _)
						});
						var o = n + d.cacheKeyDelimiter + i,
							l = this.cache[o],
							u = 0,
							c = 0;
						if (l) r.each(l, function (e) {
							e.invokeSubscriber(t.data, t) ? c++ : u++
						});
						else {
							var h = s(i, this.cache, o, function (e) {
								e.invokeSubscriber(t.data, t) ? c++ : u++
							}, t);
							r.each(this.subscriptions[n], function (t) {
								r.each(t, h)
							})
						}
						0 === --_ && a(), e && e({
							activated: c,
							skipped: u
						})
					},
					reset: function () {
						this.unsubscribeFor(), d.resolver.reset(), this.subscriptions = {}, this.cache = {}
					},
					subscribe: function (t) {
						var e, n = this.subscriptions,
							i = new A(t.channel || d.DEFAULT_CHANNEL, t.topic, t.callback),
							a = n[i.channel],
							o = i.channel.length;
						return a || (a = n[i.channel] = {}), e = n[i.channel][i.topic], e || (e = n[i.channel][i.topic] = []), e.push(i), r.each(this.cache, function (t, e) {
							e.substr(0, o) === i.channel && s(e.split(d.cacheKeyDelimiter)[1], t, e)(i)
						}), d.enableSystemMessages && this.publish(k(i)), i
					},
					unsubscribe: function () {
						for (var t, e, n, i, a = arguments.length, s = 0; a > s; s++) {
							if (t = arguments[s], t.inactive = !0, _) return void x.push(t);
							if (e = this.subscriptions[t.channel], n = e && e[t.topic]) {
								var l = n.length;
								for (i = 0; l > i;) {
									if (n[i] === t) {
										n.splice(i, 1);
										break
									}
									i += 1
								}
								if (0 === n.length && (delete e[t.topic], r.keys(e).length || delete this.subscriptions[t.channel]), t.cacheKeys && t.cacheKeys.length)
									for (var u; u = t.cacheKeys.pop();) r.each(this.cache[u], o(t, u, this.cache));
								if ("function" == typeof d.resolver.purge) {
									var c = d.autoCompactResolver === !0 ? 0 : "number" == typeof d.autoCompactResolver ? d.autoCompactResolver - 1 : !1;
									c >= 0 && w === c ? (d.resolver.purge({
										compact: !0
									}), w = 0) : c >= 0 && c > w && (w += 1)
								}
							}
							d.enableSystemMessages && this.publish(T(t))
						}
					},
					unsubscribeFor: function (t) {
						var e = [];
						this.subscriptions && (e = this.getSubscribersFor(t), this.unsubscribe.apply(this, e))
					}
				}), c && Object.prototype.hasOwnProperty.call(c, "__postalReady__") && r.isArray(c.__postalReady__))
				for (; c.__postalReady__.length;) c.__postalReady__.shift().onReady(g);
			e["default"] = g, t.exports = e["default"]
		}).call(e, n(6))
	}, function (t, e) {
		(function (e) {
			t.exports = e
		}).call(e, {})
	}, function (t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = {
			CANVAS_SIZE: {
				width: 525,
				height: 430
			},
			LARGER_SIZE: {
				width: 800,
				height: 600
			},
			FIRST_BATCH_TOTAL: 320,
			BATCH_TOTAL: 640,
			INIT_KLINE_TOTAL: 60,
			INIT_JJ_TOTAL: 33,
			LOOP_FREQUENCY: {
				KLINE: 6e5,
				MINUTE: 6e4,
				FDAYS: 6e5,
				SQT: 5e3,
				JINGZHI: 6e5,
				SHOUYI: 6e5,
				LONG_LOOP: 36e5,
				MID_LOOP: 3e5,
				SHORT_LOOP: 5e3,
				M5_LOOP: 6e4,
				M15_LOOP: 6e4,
				M30_LOOP: 6e5,
				M60_LOOP: 6e5
			},
			STOCK_UNIT: {
				sz: "手",
				sh: "手",
				nq: "手",
				hk: "股",
				us: "股",
				"if": "手",
				jj: "手"
			},
			MINUTE_VOLUME_GAP: .5,
			MAX_MINUTE_PERCENTAGE: 1.1,
			MAX_VOLUME_PERCENTAGE: 1.1,
			MAX_MACD_PERCENTAGE: 1.1,
			FONT: "11.5px Aria",
			LIGHT_FONT: "11.5px Aria",
			BORD_FONT: "bold 11.5px Aria",
			PANEL_FONT: "11.5px Aria",
			PANEL_LINEHEIGHT: 20,
			FDAYS_SAMPLING: 4,
			MAX_COMPARE: 4,
			BOSS_MONITOR: 2735,
			BOSS_CLICK: 1665
		};
		e["default"] = n, t.exports = e["default"]
	}, function (t, e, n) {
		(function (r, i) {
			"use strict";

			function a(t) {
				return t && t.__esModule ? t : {
					"default": t
				}
			}

			function o(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var s = function () {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function (e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}(),
				l = n(9),
				u = a(l),
				c = n(11),
				h = a(c),
				f = n(16),
				g = a(f),
				d = n(12),
				p = a(d),
				A = n(14),
				C = a(A),
				v = n(17),
				I = a(v),
				m = n(4),
				y = a(m),
				b = n(18),
				_ = n(19),
				x = function () {
					function t(e) {
						return o(this, t), this.config = e, this.symbol = e.symbol, this._init(), this
					}
					return s(t, [{
						key: "_init",
						value: function () {
							var t = this,
								e = this.config;
							e.outer;
							e.boss || this.initBoss();
							var n = (this.channel = p["default"].channel(e.outer.id), e.size || C["default"].CANVAS_SIZE);
							this.$outer = this._createOuter(n), this.$sideBar = e.userGraphic && this._createSideBar(), this.$sideBar && this.$sideBar.click(function (e) {
								t._sideBarEvent(e)
							}), this.$nav = !e.singleChart && this._createNav(n), this.$canvas = this._createContainer(n), e.container = this.$canvas[0]
						}
					}, {
						key: "initBoss",
						value: function () {
							var t = C["default"].BOSS_CLICK;
							this.bossId = t, b.init({
								BossId: t,
								Pwd: 0
							});
							var e = this.config.market;
							("sz" === e || "sh" === e) && (e = "hs"), b.config(t, {
								sBiz: e
							}), b.click(this.bossId, 1)
						}
					}, {
						key: "reset",
						value: function (t) {
							u["default"].cfg(t.symbol, {
								outer: t.outer,
								container: this.config.container
							}), this.config = t, this.symbol = t.symbol, this._init()
						}
					}, {
						key: "_destroy",
						value: function () {}
					}, {
						key: "getScenes",
						value: function () {
							var t = this,
								e = this.config,
								n = this.config.scene;
							void 0 !== n ? (this.scenes = n, this.buildMenu(), this.resetSenceMenu()) : ! function () {
								var n = t.config.symbol,
									r = t.config.market;
								h["default"].getScenes(n, r, function (r) {
									t.scenes = r, u["default"].cfg(n, {
										outer: e.outer,
										scene: t.scenes
									}), t.buildMenu(), t.resetSenceMenu()
								})
							}()
						}
					}, {
						key: "show",
						value: function () {
							this.config.fullScreen && r(".overlay").show(), r(this.config.outer).show(), this.resetScene(), this.resetSenceMenu()
						}
					}, {
						key: "hide",
						value: function () {
							this.stop(), this.config.fullScreen && r(".overlay").hide(), r(this.config.outer).hide()
						}
					}, {
						key: "buildMenu",
						value: function () {
							this._buildScenes(), this._buildCompare(), this._buildFqList()
						}
					}, {
						key: "_createNav",
						value: function (t) {
							var e = this,
								n = this.config,
								i = this.$outer,
								a = n.outer.id,
								o = r("#" + a + " .graphic-nav-ul");
							return o[0] || (o = r('<ul class= "graphic-nav-ul"></ul>'), o.css({
								width: t.width - 2
							}), o.click(function (t) {
								e._menuEvent(t)
							}), o.mouseover(function (t) {
								e._menuEventOver(t)
							}), i.append(o)), o
						}
					}, {
						// key: "_createCompare",
						// value: function () {
						// 	var t = this.config,
						// 		e = this.$outer,
						// 		n = t.outer.id;
						// 	if (t.compare === !1) return null;
						// 	var i = r("#" + n + " .compare");
						// 	if (!i[0]) {
						// 		i = r('<div class = "compare"><div class=\'compare-left\'><label>股票对比:</label><input class="text" type="text">\n                        <input class="button" type="button" value="对比"></div>\n                        <div class = \'portfolio-ad\'><a class="ad-app" href="http://finance.qq.com/products/portfolio/download.htm?pgv_ref=stockhtm.finance.middle.pic" target="_blank" alt="手机版自选股"></a></div>\n                        <div class = "compare-panel"></div></div>');
						// 		var a = this.$popTips;
						// 		console.log(a,'对比')
						// 		a || (a = this.$popTips = r('<div class ="popup cmp-tips"><div>最多同时对比' + (C["default"].MAX_COMPARE + 1) + '只股票，请调整后再进行对比。</div>\n                        <input type="button" class = "cmp-ok-button" value="确定"/></div>')), a.find(".cmp-ok-button").click(function () {
						// 			r(this).parent().hide()
						// 		}), e.append(i, a)
						// 	}
						// 	return i
						// }
					}, {
						key: "_createSideBar",
						value: function (t) {
							var e = this.config,
								n = this.$outer,
								i = e.outer.id,
								a = r("#" + i + " .sideBar");
							return a[0] || (a = r(_), n.append(a)), a
						}
					}, {
						key: "_createContainer",
						value: function (t) {
							var e = this.config,
								n = this.$outer,
								i = e.outer.id,
								a = r("#" + i + "-alpine");
							a[0] || (a = r("<div id = " + i + "-alpine></div>"), n.append(a));
							var o = t.width,
								s = t.height;
							return this.$nav && (s -= this.$nav.height()), a.css({
								height: s + "px",
								width: o + "px"
							}), a
						}
					}, {
						key: "_createOuter",
						value: function (t) {
							var e = this.config.outer.id,
								n = r(this.config.outer).find("#" + e + "-container");
							n.length || (n = r("<div id=" + e + "-container></div>"), r(this.config.outer).append(n));
							var i = t.width,
								a = t.height;
							return n.css({
								position: "absolute",
								width: i + "px",
								height: a + "px"
							}), r(this.config.outer).css({
								width: i + "px",
								height: a + "px"
							}), n
						}
					}, {
						key: "_buildScenes",
						value: function () {
							var t = this.config,
								e = this.scenes,
								n = this.$nav;
							n && n.empty(), this._buildLarger();
							var i = t.current || t.defaultChart,
								a = void 0;
							for (var o in e) {
								var s = r('<li class="chart" value="' + o + '"></li>');
								s.text(e[o].name), n && n.append(s), o === i && (a = s)
							}
							a = a || n.children(".chart")[0], r(a).addClass("graphic-menu-active"), u["default"].cfg(t.symbol, {
								outer: t.outer,
								current: r(a)[0].getAttribute("value")
							})
						}
					}, {
						key: "_buildLarger",
						value: function () {
							if (this.$nav) {
								var t = this.config;
								if (t.larger !== !1) {
									var e = r('<li class="zoom" value = "zoom"> </li>');
									this.$nav && this.$nav.append(e)
								}
								if (t.fullScreen) {
									var n = r('<li class="popup popup-close" value = "close"></li>');
									this.$nav && this.$nav.append(n)
								}
							}
						}
					}, {
						key: "_buildOverlay",
						value: function () {
							var t = this.config,
								e = r(".overlay");
							e[0] || (e = r('<div class="overlay"></div>'), r("body").append(e));
							var n = this.config.outer.id + "-larger",
								i = r("#" + n);
							if (i[0]) {
								var a = this.setLargerChartStyle();
								this.larger.painter ? (i.show(), this.larger.attr({
									chartStyle: a
								}), this.larger._resetPainter(this.symbol)) : (this.larger.attr({
									chartStyle: a
								}), this.larger._setPainter(this.symbol))
							} else {
								i = r("<div id =" + n + ' class = "alpine-graphic-larger ">\n                                <div class="larger-title">\n                                        <span class="larger-name"></span>\n                                        <span class="larger-code"></span>\n                                        <span class="larger-status"></span>\n                                </div>\n                            </div>'), r("body").append(i);
								var o = i.find(".larger-title");
								this.dragTitle(o), this.$larger = i;
								var a = this.setLargerChartStyle(),
									s = {
										outer: n,
										proj: t.proj,
										size: C["default"].LARGER_SIZE,
										isIndex: t.isIndex,
										color: t.color,
										chartStyle: a,
										symbol: t.symbol,
										compare: t.compare,
										larger: !1,
										fullScreen: !0,
										userGraphic: t.larger ? t.larger.userGraphic : !0
									};
								this.larger = new y["default"](s)._setPainter(), this.larger.painter.menu.main = this
							}
							this.larger.hide()
						}
					}, {
						key: "dragTitle",
						value: function (t) {
							var e = this;
							t.mousedown(function (t) {
								e.dragging = !0, e.draggingStartPos = {
									x: t.pageX,
									y: t.pageY
								}
							}), t.mousemove(function (t) {
								if (e.dragging) {
									var n = e.$larger,
										r = e.draggingStartPos,
										i = n.offset(),
										a = i.top,
										o = i.left;
									a += t.pageY - r.y, o += t.pageX - r.x, e.$larger.css({
										left: o + "px",
										top: a + "px",
										margin: 0
									}), e.draggingStartPos = {
										x: t.pageX,
										y: t.pageY
									}
								}
							}), t.mouseup(function (t) {
								e.dragging = !1
							})
						}
					}, {
						key: "_buildCompare",
						value: function () {
							var t = this,
								e = this.config;
							e.compare !== !1 && ! function () {
								var 
								// n = t.$compare,
									r = e.market;
								r = {
									sz: "gp",
									sh: "gp",
									nq: "nq",
									hk: "hk",
									us: "us",
									"if": "if",
									wh: "wh"
								} [r], 
								// n.find("input[type=text]").smartbox({
								// 	defaultType: r,
								// 	$button: n.find("input[type=button]"),
								// 	onclick: function (e) {
								// 		var n = "",
								// 			i = e[0],
								// 			a = e[1],
								// 			o = e[2];
								// 		switch (i) {
								// 			case "us":
								// 				n = i + a.toUpperCase();
								// 				break;
								// 			case "hk":
								// 				n = "ZS" === e[4] ? i + a.toUpperCase() : i + a;
								// 				break;
								// 			case "qh":
								// 				n = r + a;
								// 				break;
								// 			default:
								// 				n = i + a
								// 		}
								// 		t.addCmp({
								// 			symbol: n,
								// 			name: o
								// 		}) && t._showCmpPanel()
								// 	}
								// }),
								 ("minute" === e.current || "fdays" === e.current) && (t._showCmpPanel())
							}()
						}
					}, {
						key: "_buildFqList",
						value: function () {
							var t = this;
							if (this.$nav && this.hasFqType()) {
								var e = this.config,
									n = r('<div class = "fqList"></div>');
								"us" === e.market ? n.html('<ul><li class="fqType" value="nfq">不复权</li><li class="fqType" value="qfq" style ="color:#ddd">前复权</li></ul>') : n.html('<ul><li class="fqType" value="nfq">不复权</li><li class="fqType" value="qfq" style ="color:#ddd">前复权</li><li class="fqType" value="hfq">后复权</li></ul>'), this.$fqList = n, this.$nav.append(n), n.click(function (e) {
									t._fqEvent(e)
								}), n.mouseleave(function (e) {
									t._menuEventOut(e)
								})
							}
						}
					}, {
						key:"cookie",
						value:function(){
							var cookieArr = document.cookie.split(";");
							var obj = {};
              cookieArr.forEach(function(i) {
								var arr = i.replace(/^\s|\s$/g,'').split("=");
								obj[arr[0]] =arr[1];
							});
							return obj
						}
					},{
						key:"registerReport",
						value:function (){
					  }
					},{
						key: "addCmp",
						value: function (t) {
							var e = this.config.cmpList;
							this.registerReport("quotpage_stockcompare_hs",{stockid:this.symbol})
							if (t.symbol === this.symbol) return !1;
							for (var n = 0, r = e.length; r > n; n++)
								if (e[n].symbol === t.symbol) return !1;
							return e.length === C["default"].MAX_COMPARE ? (this.$popTips.show(), !1) : (t.src ? e.push(t) : e.push(i.clone(t)), t.selected = !0, this.config.boss || b.click(this.bossId, 23), this.repaint(), !0)
						}
					}, {
						key: "removeCmp",
						value: function (t) {
							for (var e = this.config.cmpList, n = 0, r = e.length; r > n; n++)
								if (e[n].symbol === t.symbol) return p["default"].channel(t.symbol).publish(this.config.outer.id + ".compare.delete"), t.selected = !1, !0
						}
					}, {
						key: "repaint",
						value: function () {
							this.channel.publish("draw")
						}
					}, {
						key: "stop",
						value: function () {
							this.channel.publish("stop")
						}
					}, {
						key: "_fqEvent",
						value: function (t) {
							var e = this.config,
								n = t.target || t.srcElement,
								i = this.$fqList.children().children(),
								a = i.length,
								o = n.getAttribute("value");
							if ("nfq" == o && (o = ""), o !== e.fqType || e.current !== this.hoverChartType) {
								for (var s = a - 1; s >= 0; s--) r(i[s]).css("color", "#1b6393");
								r(n).css("color", "#ddd"), this.$fqList.hide();
								for (var l = this.$nav, c = l.children(), h = c.length, s = h - 1; s >= 0; s--) {
									var f = c[s].getAttribute("value");
									f in this.scenes && (c[s].className = "graphic-menu-inactive", f === this.hoverChartType && (c[s].className = "graphic-menu-active"))
								}
								if (!this.config.boss) {
									if (this.hoverChartType !== e.current) {
										var g = {
											day: 11,
											week: 12,
											month: 13
										}[this.hoverChartType];
										b.click(this.bossId, g)
									}
									o !== e.fqType && b.click(this.bossId, o || "nfq")
								}
								u["default"].cfg(this.symbol, {
									outer: e.outer,
									fqType: o,
									current: this.hoverChartType
								}), this.resetSenceMenu(), this.repaint()
							}
						}
					}, {
						key: "_menuEvent",
						value: function (t) {
							var e = t.target || t.srcElement,
								n = e.getAttribute("value"),
								r = this.config;
							this.$nav;
							switch (n) {
								case "zoom":
									document.body.style.overflow = 'hidden';
									this._buildOverlay(), this._showLargerTitle(), this._showCmpPanel(), u["default"].cfg(r.symbol, {
										outer: this.larger.config.outer,
										fqType: r.fqType,
										current: r.current
									}), this.larger.show(), r.boss || b.click(this.bossId, 21);
									break;
								case "close":
									document.body.style.overflow = '';
									u["default"].cfg(r.symbol, {
										outer: this.main.config.outer,
										fqType: r.fqType,
										current: r.current
									}), this.main.show(), this.hide();
									break;
								case "qfq":
								case "hfq":
								case "nfq":
									break;
								default:
									if (!n || n == r.current) return;
									if (u["default"].cfg(r.symbol, {
											outer: r.outer,
											current: n
										}), !r.boss) {
										var i = {
											minute: 1,
											fdays: 2,
											m5: 3,
											m30: 4,
											m60: 5,
											year1: 6,
											year3: 7,
											year5: 8,
											day: 11,
											week: 12,
											month: 13
										} [n];
										this.registerReport("quotpage_kline_click_hs",{stockid:r.symbol})
										b.click(this.bossId, i)
									}
									this.resetSenceMenu(), this.resetScene()
							}
						}
					}, {
						key: "resetSenceMenu",
						value: function () {
							this.resetCompare(), this.resetSideBar(), this.resetBottomTips()
						}
					}, {
						key: "resetScene",
						value: function () {
							for (var t = this.$nav ? this.$nav.children() : [], e = t.length, n = 0; e > n; n++) {
								var i = t[n],
									a = i.getAttribute("value");
									window.isMinute = this.config.current
									console.log(this.config.current,'菜单')
								a in this.scenes && (a === this.config.current ? i.className = "graphic-menu-active" : i.className = "graphic-menu-inactive")
							}
							if (this.$fqList)
								for (var o = this.$fqList.children().children(), s = o.length, l = this.config.fqType || "nfq", n = s - 1; n >= 0; n--) {
									r(o[n]).css("color", "#1b6393");
									o[n].getAttribute("value");
									o[n].getAttribute("value") === l && r(o[n]).css("color", "#ddd")
								}
							this.repaint()
						}
					}, {
						key: "resetSideBar",
						value: function () {
							if (this.$sideBar) {
								var t = this.config.current;
								this.$sideBar.find(".invalid").removeClass("invalid"), t.match(/^day|^week|^month|^year|m5|m15|m30|m60/) ? t.match(/^year/) && this.$sideBar.find(".graphic").addClass("invalid") : this.$sideBar.find("ul li").addClass("invalid");
								var e = this.$outer.find(".user-graphic-panel");
								this.config.userPaint = !1, e.find(".cur").removeClass("cur"), e.find(".cur-type").removeClass("cur-type"), e.hide(), this.$sideBar.find(".graphic").removeClass("cur")
							}
						}
					}, {
						key: "resetCompare",
						value: function () {
							// if (this.$compare) {
							// 	var t = this.config.current;
							// 	t.match(/minute|fdays/) ? this.$compare.show() : this.$compare.hide()
							// }
						}
					}, {
						key: "resetBottomTips",
						value: function () {
							if (this.$bottomTips)
								if (this.config.fullScreen) this.$bottomTips.hide();
								else {
									var t = this.config.current;
									t.match(/minute|fdays/) ? this.$bottomTips.show() : this.$bottomTips.hide()
								}
						}
					}, {
						key: "_menuEventOver",
						value: function (t) {
							var e = t.target || t.srcElement,
								n = e.getAttribute("value"),
								r = this.$fqList;
							if (r)
								if ("string" == typeof n && n.match(/^day|week|month|year/)) {
									var i = e.offsetLeft - 2;
									r.css("left", i + "px"), r.show(), this.hoverChartType = n
								} else e.className && "fqType" === e.className || r.hide()
						}
					}, {
						key: "_menuEventOut",
						value: function () {
							var t = this.$fqList;
							t.hide()
						}
					}, {
						key: "_sideBarEvent",
						value: function (t) {
							var e = this.config.current;
							if (e.match(/^day|^week|^month|^year|m5|m15|m30|m60/)) {
								var n = t.target.getAttribute("value");
								if (n && !t.target.className.match(/cur/)) {
									var i = r(t.target),
										a = this.$outer.find(".user-graphic-panel"),
										o = this.$sideBar;
									switch (this.config.boss || b.click(this.bossId, 22), n) {
										case "normal":
										case "log":
											this._toggleMathType(n);
											break;
										case "userGraphic":
											this.config.userPaint = !0, a.show(), i.addClass("cur");
											break;
										case "close":
											this.config.userPaint = !1, a.hide(), o.find(".graphic").removeClass("cur"), a.find(".cur").removeClass("cur"), a.find(".cur-type").removeClass("cur-type");
											break;
										case "clear":
											this.config.userPaint = "clear", a.find(".cur").removeClass("cur"), a.find(".cur-type").removeClass("cur-type");
											break;
										default:
											return this.config.userPaint = n, a.find(".cur").removeClass("cur"), a.find(".cur-type").removeClass("cur-type"), i.parent().addClass("cur"), void i.addClass("cur-type")
									}
									this.repaint()
								}
							}
						}
					}, {
						key: "_toggleMathType",
						value: function (t) {
							this.config.mathType = t;
							var e = this.$sideBar,
								n = e.find(".norm"),
								r = e.find(".log");
							"normal" === t ? (r.removeClass("cur"), n.addClass("cur")) : "log" === t && (n.removeClass("cur"), r.addClass("cur"))
						}
					}, {
						key: "_showLargerTitle",
						value: function () {
							var t = this.config.current,
								e = this.config.market,
								n = this.symbol;
							t.match(/^day|week|month|year/) && (t.match(/^year/) && (t = "day"), t += this.config.fqType);
							var r = u["default"].data(n)[t].calData,
								i = r.name || r.o && r.o.name,
								a = this.$larger.find(".larger-name");
							a.html(i);
							var o = this.$larger.find(".larger-code");
							if ("us" === e) {
								var s = n.lastIndexOf(".");
								e = s > 0 ? n.substr(s + 1) : e
							}
							var l = {
								sz: "深圳",
								sh: "上海",
								hk: "香港",
								us: "美国",
								nq: "新三板",
								OQ: "NASDAQ",
								N: "NYSE",
								AM: "AMEX",
								AR: "ARCA",
								"if": "股指期货",
								qh: "期货",
								wh: "外汇",
								fund: "基金"
							} [e];
							o.html(l + ": " + this.symbol.substr(2));
							var c = this.$larger.find(".larger-status");
							this._getMarketStatus(this.config.market, function (t) {
								t ? c.html(t) : c.hide()
							})
						}
					}, {
						key: "_getRelatedList",
						value: function (t) {
							var e = this.config.relatedList;
							if (e.length) t();
							else {
								var n = void 0,
									r = void 0;
								switch (this.config.market) {
									case "sz":
									case "sh":
										n = ["sh000001", "sz399001"], this._addRelateMkt(n), this.config.isIndex ? this._getHotAll(t) : (r = "//web.ifzq.gtimg.cn/stock/relate/data/relate?_var=_RELATE&code=" + this.symbol, this._getRelate(r, t));
										break;
									case "nq":
										n = ["nq899001", "nq899002"], this._addRelateMkt(n);
										break;
									case "hk":
										n = ["hkHSI"], this._addRelateMkt(n), this.config.isIndex ? this._getHotAll(t, "hk") : (r = "//web.ifzq.gtimg.cn/hk/aastocks/relate/relate?_var=_RELATE&code=" + this.symbol, this._getRelate(r, t));
										break;
									case "us":
										n = ["usDJI", "usIXIC", "usINX"], this._addRelateMkt(n), this.config.isIndex ? this._getTop10(t) : (r = "//web.ifzq.gtimg.cn/hk/aastocks/relate/usRelate?_var=_RELATE&code=" + this.symbol, this._getRelate(r, t));
										break;
									default:
										t()
								}
							}
						}
					}, {
						key: "_addRelateMkt",
						value: function (t) {
							var e = this.symbol,
								n = this.config.relatedList;
							t.forEach(function (t) {
								t !== e && n.push("s_" + t)
							})
						}
					}, {
						key: "_getRelate",
						value: function (t, e) {
							var n = this,
								r = this.config.relatedList;
							I["default"].get(t, function () {
								var t = window._RELATE && window._RELATE.data;
								return t ? (t = t.slice(0, 10), "us" === n.config.market ? t.forEach(function (t) {
									var e = t.code,
										n = e.lastIndexOf(".");
									e = -1 == n ? e : e.slice(0, n).replace(/\./g, "__"), r.push("s_" + e)
								}) : "hk" === n.config.market ? t.forEach(function (t) {
									r.push("s_hk" + t.code)
								}) : t.forEach(function (t) {
									r.push("s_" + t.code)
								}), window._RELATE = null, void e()) : void e()
							})
						}
					}, {
						key: "_getHotAll",
						value: function (t, e) {
							var n = this;
							e = e || "sstock";
							var r = this.config.relatedList,
								i = "//stockhtm.finance.qq.com/" + e + "/quotpage/inc_hot/hot_all.js";
							I["default"].get(i, function () {
								var e = window.v_hot_all.split("|");
								e = e.slice(0, 10), e.forEach(function (t) {
									var e = t.split("_")[0],
										i = t.split("_")[1];
									switch (i) {
										case "1":
											i = "sh";
											break;
										case "51":
											i = "sz";
											break;
										case "100":
											i = "hk"
									}
									e !== n.symbol.substr(2) && r.push("s_" + i + e)
								}), t()
							})
						}
					}, {
						key: "_getTop10",
						value: function (t) {
							var e = this,
								n = this.config.relatedList,
								r = "//qt.gtimg.cn/?q=us_imp_zdftop10";
							I["default"].get(r, function () {
								var r = window.v_us_imp_zdftop10.split("^");
								r = r.slice(0, 10), r.forEach(function (t) {
									var r = t.split("~")[3];
									if (r !== e.symbol.substr(2)) {
										var i = r.lastIndexOf(".");
										r = -1 == i ? r : r.slice(0, i).replace(/\./g, "__"), n.push("s_us" + r)
									}
								}), t()
							})
						}
					}, {
						key: "_showCmpPanel",
						value: function () {
							var t = this,
								e = this.config;
							if (e.fullScreen) {
								// var n = this.$compare.find(".compare-panel");
								this._getRelatedList(function () {
									var r = e.cmpList;
									if (r.length)
										for (var i = 0, a = r.length; a > i; i++) {
											var o = r[i];
											o.selected = !0, t._appendCmpItem(n, o)
										}
									var s = e.relatedList;
									if (s.length) {
										var l = "//qt.gtimg.cn/?q=" + s.join(",");
										I["default"].get(l, function () {
											s.forEach(function (r) {
												var i = window["v_" + r].split("~"),
													a = void 0;
												"us" === e.market && (a = i[2], i[2].match(/^\./) && (a = a.substr(1)), a = "us" + a);
												var o = {
														symbol: a || r.substr(2),
														name: i[1],
														selected: !1
													},
													s = e.cmpList,
													l = !1;
												s.forEach(function (t) {
													t.symbol === o.symbol && (l = !0)
												}), l || t._appendCmpItem(n, o)
											})
										})
									}
								})
							}
						}
					}, {
						key: "_appendCmpItem",
						value: function (t, e) {
							var n = this,
								i = r('<div class="compare-item ' + (e.selected ? "checked" : "") + '" id="item-' + e.symbol + " \">\n                            <span class = 'checkbox'><span class='checkmark'>&radic;</span></span>\n                            <label >" + e.name + "</label></div>");
							// t.append(i), t.children().length > 8, i.click(function (t) {
							// 	t.preventDefault(), n._toggleCmpItem(t, e)
							// })
						}
					}, {
						key: "_toggleCmpItem",
						value: function (t, e) {
							var n = e.selected;
							n ? this.removeCmp(e) && (r(t.target).removeClass("checked"), r(t.target).parents(".compare-item").removeClass("checked")) : this.addCmp(e) && (r(t.target).addClass("checked"), r(t.target).parents(".compare-item").addClass("checked"))
						}
					}, {
						key: "_getMarketStatus",
						value: function (t, e) {
							I["default"].get("//sqt.gtimg.cn/q=marketStat", function () {
								var n = window.v_marketStat.split("|"),
									r = {
										sz: 3,
										sh: 2,
										hk: 1,
										us: 4
									} [t];
								r = n[r], e(r && r.split("_")[2])
							})
						}
					}, {
						key: "hasFqType",
						value: function () {
							return this.config.market.match(/sz|sh|us|hk|nq/) ? this.config.isIndex ? !1 : !0 : !1
						}
					}, {
						key: "setLargerChartStyle",
						value: function () {
							var t = this.config,
								e = g["default"].larger,
								n = g["default"]["larger-" + t.market] || {},
								r = i.cloneDeep(n);
							if (i.defaultsDeep(r, e), !t.larger) return r;
							var a = i.cloneDeep(t.larger.style || {});
							return i.defaultsDeep(a, r), a
						}
					}]), t
				}();
			e["default"] = x, t.exports = e["default"]
		}).call(e, n(5), n(6))
	}, function (t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = 0,
			r = 1,
			i = {
				"default": {
					minute: {
						titleArea: {
							display: !0,
							volume_text: !0,
							position: {
								top: 5,
								left: 10,
								height: 25,
								right: 10
							},
							cmpPanelType: r
						},
						minuteArea: {
							display: !0,
							minuteEl: !0,
							minuteAvgEl: !0,
							position: {
								top: 10,
								left: 65,
								height: 190,
								right: 65
							}
						},
						volumeArea: {
							display: !0,
							position: {
								top: 40,
								left: 65,
								height: 65,
								right: 65
							}
						}
					},
					kline: {
						titleArea: {
							display: !0,
							volume_text: !0,
							position: {
								top: 5,
								left: 10,
								height: 25,
								right: 5
							}
						},
						klineArea: {
							display: !0,
							shape: "candle",
							position: {
								top: 10,
								left: 65,
								height: 157,
								right: 40
							},
							ma: !0
						},
						volumeArea: {
							display: !0,
							position: {
								top: 35,
								left: 65,
								height: 40,
								right: 40
							},
							ma: !0
						},
						indexArea: {
							display: !0,
							position: {
								top: 15,
								left: 65,
								height: 40,
								right: 40
							}
						},
						trendArea: {
							display: !0,
							position: {
								top: 20,
								left: 65,
								height: 35,
								right: 40
							}
						},
						panel: {
							display: !0,
							volume_text: !0
						}
					},
					year: {
						titleArea: {
							display: !0,
							volume_text: !0,
							position: {
								top: 5,
								left: 10,
								height: 25,
								right: 5
							}
						},
						klineArea: {
							display: !0,
							shape: "line",
							position: {
								top: 10,
								left: 65,
								height: 157,
								right: 40
							},
							ma: !1
						},
						volumeArea: {
							display: !0,
							position: {
								top: 35,
								left: 65,
								height: 40,
								right: 40
							},
							ma: !0
						},
						indexArea: {
							display: !0,
							position: {
								top: 15,
								left: 65,
								height: 40,
								right: 40
							}
						},
						trendArea: {
							display: !0,
							position: {
								top: 20,
								left: 65,
								height: 35,
								right: 40
							}
						},
						panel: {
							display: !1
						}
					}
				},
				wh: {
					minute: {
						titleArea: {
							volume_text: !1
						},
						minuteArea: {
							minuteAvgEl: !1,
							position: {
								top: 10,
								left: 65,
								height: 240,
								right: 65
							}
						},
						volumeArea: {
							display: !1
						}
					},
					kline: {
						titleArea: {
							volume_text: !1
						},
						klineArea: {
							position: {
								top: 10,
								left: 65,
								height: 150,
								right: 40
							}
						},
						volumeArea: {
							display: !1
						},
						indexArea: {
							position: {
								top: 38,
								left: 65,
								height: 50,
								right: 40
							}
						},
						panel: {
							volume_text: !1
						}
					},
					year: {
						titleArea: {
							volume_text: !1
						},
						volumeArea: {
							display: !1
						},
						indexArea: {
							display: !0,
							position: {
								top: 38,
								left: 65,
								height: 50,
								right: 40
							}
						}
					}
				},
				larger: {
					minute: {
						titleArea: {
							display: !0,
							volume_text: !0,
							position: {
								top: 15,
								left: 15,
								height: 25,
								right: 15
							},
							cmpPanelType: n
						},
						minuteArea: {
							display: !0,
							minuteEl: !0,
							minuteAvgEl: !0,
							position: {
								top: 20,
								left: 65,
								height: 225,
								right: 65
							}
						},
						volumeArea: {
							display: !0,
							position: {
								top: 40,
								left: 65,
								height: 65,
								right: 65
							}
						}
					},
					kline: {
						titleArea: {
							display: !0,
							volume_text: !0,
							position: {
								top: 15,
								left: 15,
								height: 25,
								right: 15
							}
						},
						klineArea: {
							display: !0,
							shape: "candle",
							position: {
								top: 20,
								left: 65,
								height: 225,
								right: 65
							},
							ma: !0
						},
						volumeArea: {
							display: !0,
							position: {
								top: 40,
								left: 65,
								height: 40,
								right: 65
							},
							ma: !0
						},
						indexArea: {
							display: !0,
							position: {
								top: 15,
								left: 65,
								height: 50,
								right: 65
							}
						},
						trendArea: {
							display: !0,
							position: {
								top: 25,
								left: 65,
								height: 35,
								right: 65
							}
						},
						panel: {
							display: !0,
							volume_text: !0
						}
					},
					year: {
						titleArea: {
							display: !0,
							volume_text: !0,
							position: {
								top: 15,
								left: 15,
								height: 25,
								right: 15
							}
						},
						klineArea: {
							display: !0,
							shape: "line",
							position: {
								top: 20,
								left: 65,
								height: 225,
								right: 40
							},
							ma: !1
						},
						volumeArea: {
							display: !0,
							position: {
								top: 40,
								left: 65,
								height: 40,
								right: 40
							},
							ma: !0
						},
						indexArea: {
							display: !0,
							position: {
								top: 15,
								left: 65,
								height: 50,
								right: 40
							}
						},
						trendArea: {
							display: !0,
							position: {
								top: 25,
								left: 65,
								height: 35,
								right: 40
							}
						},
						panel: {
							display: !1
						}
					}
				},
				"larger-wh": {
					minute: {
						titleArea: {
							volume_text: !1
						},
						minuteArea: {
							minuteAvgEl: !1,
							position: {
								height: 300
							}
						},
						volumeArea: {
							display: !1
						}
					},
					kline: {
						titleArea: {
							volume_text: !1
						},
						klineArea: {
							position: {
								height: 280
							}
						},
						volumeArea: {
							display: !1
						},
						indexArea: {
							position: {
								top: 40,
								height: 50
							}
						},
						trendArea: {
							position: {
								top: 30
							}
						},
						panel: {
							volume_text: !1
						}
					},
					year: {
						titleArea: {
							volume_text: !1
						},
						klineArea: {
							position: {
								height: 280
							}
						},
						volumeArea: {
							display: !1
						},
						indexArea: {
							position: {
								top: 40,
								height: 50
							}
						},
						trendArea: {
							position: {
								top: 30
							}
						}
					}
				}
			};
		e["default"] = i, t.exports = e["default"]
	}, function (t, e) {
		"use strict";

		function n(t, e) {
			if (o) a.push({
				url: t,
				callback: e
			});
			else {
				o = !0;
				var r = document.createElement("script"),
					s = document.getElementsByTagName("head")[0];
				r.id = new Date + Math.random(), r.src = i(t), r.async = !1, r.onload = r.onerror = r.onreadystatechange = function () {
					if (/loaded|complete|undefined/.test(r.readyState) && (e(), s.removeChild(r), o = !1, a.length)) {
						var t = a.shift();
						n(t.url, t.callback)
					}
				}, s.appendChild(r)
			}
		}

		function r(t, e) {
			var n = document.createElement("script"),
				r = document.getElementsByTagName("head")[0];
			n.id = new Date + Math.random(), n.src = i(t), n.async = !0, n.onload = n.onerror = n.onreadystatechange = function () {
				/loaded|complete|undefined/.test(n.readyState) && (e(), r.removeChild(n))
			}, r.appendChild(n)
		}

		function i(t) {
			var e = -1 !== t.indexOf("?");
			return t + (e ? "&r=" : "?r=") + Math.random()
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = [],
			o = !1;
		e["default"] = {
			get: r,
			getSync: n
		}, t.exports = e["default"]
	}, function (t, e, n) {
		var r;
		(function () {
			window;
			window.BossImg = new Image;
			var i;
			! function () {
				var t;
				i = function () {
					if (t) return t;
					t = this;
					var e, n = {
							total: 0
						},
						r = function (t) {
							// var e = ["//btrace.qq.com/kvcollect?"];
							// for (var n in t) e.push(n, "=", t[n], "&");
							// return e.push("_dc=", Math.random()), e.join("")
						},
						i = function () {
							return navigator.connection
						}(),
						a = function () {
							var t = navigator.userAgent,
								e = t.toLowerCase(),
								n = {
									msie: /(?:msie\s|trident.*rv:)([\w.]+)/i,
									firefox: /Firefox\/([\w.]+)/i,
									chrome: /Chrome\/([\w.]+)/i,
									safari: /version\/([\w.]+).*Safari/i,
									opera: /(?:OPR\/|Opera.+version\/)([\w.]+)/i
								},
								r = {
									MSIE: /(compatible;\smsie\s|Trident\/)[\w.]+/i,
									Camino: /Camino/i,
									KHTML: /KHTML/i,
									Presto: /Presto\/[\w.]+/i,
									Gecko: /Gecko\/[\w.]+/i,
									WebKit: /AppleWebKit\/[\w.]+/i
								},
								i = {
									kernel: "unknow",
									version: "unknow"
								};
							for (var a in n) {
								var o = e.match(n[a]);
								i[a] = o ? !0 : !1, o && (i.version = o[1], i.bname = a)
							}
							for (var a in r) {
								var o = e.match(r[a]);
								o && (i.kernel = o[0])
							}
							var s = e.match(/(Windows\sNT\s|Mac\sOS\sX\s|Android\s|ipad.*\sos\s|iphone\sos\s)([\d._-]+)/i);
							return i.os = null !== s ? s[0] : !1, i.mobile = null !== e.match(/Mobile/i) ? "mobile" : "", [i.bname, i.kernel, i.os, i.mobile, i.version].join(",")
						}(),
						o = function () {
							var t = [];
							if ("number" == typeof arguments[0]) return void 0 === n[arguments[0]] || "number" != typeof arguments[0] ? void 0 : arguments;
							if (1 !== n.total) throw new Error("Please specify the bossId");
							for (var e = arguments.length; e > 0; e--) t[e] = arguments[e - 1];
							for (var r in n) return t[0] = Number(r), t
						},
						s = [],
						l = function (t, i) {
							if (n[t])
								for (var a in n[t]) i[a] = n[t][a];
							return e ? void s.push(i) : void(e = setTimeout(function () {
								e = null,s.length && l(t, s.shift())
							}, 100))
						};
					this.init = function () {
						for (var t = arguments.length - 1; t >= 0; t--) {
							var e = arguments[t];
							if (void 0 === e.BossId || "number" != typeof e.BossId) throw new Error("BossId is missing or not a number");
							if (void 0 === e.Pwd || "number" != typeof e.Pwd) throw new Error("Pwd is missing or not a number");
							n[e.BossId] || (n[e.BossId] = e, n.total++)
						}
					}, this.add = function () {
						this.init.apply(this, arguments)
					}, this.config = function () {
						var t = o.apply(this, arguments),
							e = t[0],
							r = t[1];
						for (var i in r) n[e][i] = r[i]
					}, this.monitor = function () {
						var t = o.apply(this, arguments),
							e = t[0],
							n = t[1];
						window.onerror = function (t, r, o) {
							var s = {
								cginame: {
									hangqing: 1,
									portfolio: 2,
									qqPanel: 3
								} [n.name],
								err_desc: encodeURIComponent(t),
								err_file: encodeURIComponent(location.href + "," + r),
								err_line: o,
								version: a,
								nettype: i
							};
							l(e, s)
						}
					}, this.click = function () {
						var t = o.apply(this, arguments);
						if (t) {
							var e = t[0],
								n = t[1],
								r = document.cookie.match(/( |^)(l?)uin=(o0*)(.*?)(;|$)/),
								i = r && r.length && r[4],
								a = {
									iQQ: i,
									sOp: n
								};
							l(e, a)
						}
					}, this.report = function () {
						var t = o.apply(this, arguments),
							e = t[0],
							n = t[1],
							r = t[2],
							s = t[3],
							u = "";
						if (n && n.params) {
							if ("object" != typeof n.params) u = n.params;
							else {
								u = [];
								for (var c in n.params) u.push(c, n.params[c]);
								u = u.join(",")
							}
							u = encodeURIComponent(u)
						}
						var h = {
							rcode: r && r.code,
							err_desc: r && encodeURIComponent(r.msg),
							hcode: r && r.hcode,
							sDomain: n && encodeURIComponent(n.url),
							url_param: u,
							cginame: s && s.name,
							iAction: s && s.action,
							all_time: s && s.all_time,
							conn_time: s && s.conn_time,
							tran_time: s && s.tran_time,
							retry_count: s && s.retry_count,
							err_file: encodeURIComponent(location.href),
							version: a,
							nettype: i
						};
						l(e, h)
					}
				}
			}(), r = function () {
				return new i
			}.call(e, n, e, t), !(void 0 !== r && (t.exports = r))
		}).call(this)
	}, function (t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = "<div class = \"sideBar\">\n                    <ul>\n                        <li value=\"normal\" class=\"norm invalid cur\">普通</li>\n                        <li value=\"log\" class=\"log invalid\">对数</li>\n                           </ul>\n                </div>\n                <div class = \"user-graphic-panel\">\n                    <ul>\n                        <li class=\"panel-top\"><span class = 'popup menu'></span>\n                        <span class = 'popup popup-close' value=\"close\" title='关闭绘画'></span></li>\n                        <li ><span  class = 'popup line' value =\"line\" title='线段'></span></li>\n                        <li ><span  class = 'popup horizon' value =\"horizon\" title='撑/压线'></span></li>\n                        <li ><span  class = 'popup regression'  value ='regression' title='回归线'></span> </li>\n\n                        <li ><span  class = 'popup rect' value =\"rect\"  title='矩形'></span></li>\n                        <li ><span  class = 'popup cycle' value = 'cycle' title = '周期线'></span></li>\n                        <li ><span  class = 'popup division' value ='division' title = '黄金分割线' ></span> </li>\n                        <li ><span  class = 'popup percentage' value ='percentage' title='百分比线' ></span></li>\n                        <li ><span  class = 'popup band' value ='band' title='波段线' ></span></li>\n                        <li ><span  class = 'popup fibonacci' value ='fib' title='斐波那契线' ></span></li>\n\n                        <li><span  class = 'popup up'  value=\"up\" title = '涨标记'></span></li>\n                        <li><span  class = 'popup down' value=\"down\" title = '跌标记'></span></li>\n                        <li><span  class = 'popup text'  value =\"text\" title = '文本'></span></li>\n                        <li ><span class= 'popup pointer' value =\"pointer\" title = '指针'></span></li>\n                        <li ><span class= 'popup remove' value =\"remove\" title = '删除'></span></li>\n                        <li ><span class= 'clear popup' value=\"clear\" title = '清除全部'></span></li>\n                    </ul>\n                </div>";
		e["default"] = n, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function a(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			s = function (t, e, n) {
				for (var r = !0; r;) {
					var i = t,
						a = e,
						o = n;
					s = u = l = void 0, r = !1, null === i && (i = Function.prototype);
					var s = Object.getOwnPropertyDescriptor(i, a);
					if (void 0 !== s) {
						if ("value" in s) return s.value;
						var l = s.get;
						if (void 0 === l) return;
						return l.call(o)
					}
					var u = Object.getPrototypeOf(i);
					if (null === u) return;
					t = u, e = a, n = o, r = !0
				}
			},
			l = n(12),
			u = (r(l), n(21)),
			c = function (t) {
				function e(t, n) {
					i(this, e), s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t, n)
				}
				return a(e, t), o(e, [{
					key: "destroy",
					value: function () {
						this.source.stop(), this.sqt.stop(), this.data.stop(), this.chart.destroy();
						var t = this.cfg.cmpList;
						this.stopCmp(t), this.changeSub && this.changeSub.unsubscribe()
					}
				}, {
					key: "draw",
					value: function () {
						this.status = 1;
						var t = this.setChartCfg();
						if (this.chart.init(t).drawAll(), this.data.start(), this._sourceNoCache(), !this.cfg.pushQt) {
							"hk" !== this.cfg.market || this.cfg.isIndex ? this.sqt.start() : this.sqt.startOnce();
							var e = this.cfg.cmpList;
							this.addCmpList(e), this.listenToCmpListChange()
						}
					}
				}]), e
			}(u);
		e["default"] = c, t.exports = e["default"]
	}, function (t, e, n) {
		(function (r) {
			"use strict";

			function i(t) {
				return t && t.__esModule ? t : {
					"default": t
				}
			}

			function a(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function o(t) {
				return {
					"if": C["default"],
					sz: y["default"],
					sh: y["default"],
					hk: w["default"],
					us: S["default"],
					wh: M["default"],
					nq: N["default"]
				} [t]
			}

			function s(t) {
				return {
					"if": I["default"],
					sz: _["default"],
					sh: _["default"],
					hk: T["default"],
					us: P["default"],
					wh: j["default"],
					nq: R["default"]
				} [t]
			}

			function l(t) {
				return {
					minute: V["default"],
					fdays: U["default"],
					day: W["default"],
					week: W["default"],
					month: W["default"],
					m5: W["default"],
					m15: W["default"],
					m30: W["default"],
					m60: W["default"],
					year1: G["default"],
					year3: G["default"],
					year5: G["default"]
				} [t]
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var u = function () {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function (e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}(),
				c = n(12),
				h = i(c),
				f = n(9),
				g = i(f),
				d = n(22),
				p = i(d),
				A = n(39),
				C = i(A),
				v = n(40),
				I = i(v),
				m = n(41),
				y = i(m),
				b = n(43),
				_ = i(b),
				x = n(44),
				w = i(x),
				k = n(45),
				T = i(k),
				E = n(46),
				S = i(E),
				D = n(47),
				P = i(D),
				O = n(48),
				M = i(O),
				L = n(49),
				j = i(L),
				F = n(50),
				N = i(F),
				q = n(51),
				R = i(q),
				B = n(52),
				V = i(B),
				X = n(80),
				U = i(X),
				z = n(81),
				W = i(z),
				H = n(109),
				G = i(H),
				Y = n(16),
				$ = i(Y),
				Z = function () {
					function t(e, n) {
						a(this, t);
						var r = g["default"].cfg(e)[n];
						this.symbol = e, this.cfg = r, this.init()
					}
					return u(t, [{
						key: "destroy",
						value: function () {
							this.fetchSub && this.fetchSub.unsubscribe(), this.chart && this.chart.destroy(), this.data && this.data.stop(), this.source && this.source.stop(), this.sqt && this.sqt.stop()
						}
					}, {
						key: "init",
						value: function () {
							if (!this.source) {
								var t = this.symbol,
									e = this.cfg.market,
									n = this.cfg.outer.id;
								"fund" === e && (e = t.substr(0, 2));
								var r = this.cfg.current,
									i = l(r),
									a = this.setChartCfg(),
									u = o(e),
									c = s(e);
								this.source = new u(t, n), this.data = new c(t, n), this.chart = new i(t, a), this.sqt = new p["default"](t, n)
							}
							return this._afterInit(), this
						}
					}, {
						key: "_afterInit",
						value: function () {}
					}, {
						key: "draw",
						value: function () {
							this.status = 1;
							var t = this.setChartCfg();
							this.data.start(), this.cfg.current.match(/m5|m15|m30|m60/) ? (this._sourceNoCache(), this.sqt.startOnce()) : (this._sourceCache(), this.listenToFetch()), this.chart.init(t).drawAll(), this.cfg.pushQt || ("hk" === this.cfg.market && !this.cfg.isIndex || this.cfg.current.match(/year/) ? this.sqt.startOnce() : this.sqt.start())
						}
					}, {
						key: "_sourceCache",
						value: function () {
							var t = this.cfg.current,
								e = this.cfg.fqType;
							t.match(/year/) && (t = "day"), t.match(/m5|m15|m30|m60/) && (e = ""), this.source.startCache()
						}
					}, {
						key: "_sourceNoCache",
						value: function () {
							"hk" !== this.cfg.market || this.cfg.isIndex ? this.source.start() : this.source.startOnce()
						}
					}, {
						key: "repaint",
						value: function () {
							this.chart.destroy();
							var t = this.setChartCfg();
							this.chart.init(t).drawAll()
						}
					}, {
						key: "setQtData",
						value: function (t, e) {
							this.sqt.setQtData(t, e)
						}
					}, {
						key: "setChartCfg",
						value: function () {
							var t = this.cfg,
								e = this.getChartCfgType(t.current),
								n = this.cfg.market,
								i = this.cfg.chartStyle && this.cfg.chartStyle[e] || {},
								a = $["default"]["default"][e],
								o = $["default"][n] && $["default"][n][e] || a,
								s = r.cloneDeep(o);
							r.defaultsDeep(s, a);
							var l = r.cloneDeep(s);
							return s = r.cloneDeep(i), r.defaultsDeep(s, l), s.chartId = this.cfg.outer.id, s
						}
					}, {
						key: "getChartCfgType",
						value: function (t) {
							return /^day|week|month|m5|m15|m30|m60/.test(t) ? t = "kline" : /minute|fdays/.test(t) ? t = "minute" : /year/.test(t) && (t = "year"), t
						}
					}, {
						key: "listenToFetch",
						value: function () {
							var t = this,
								e = h["default"].channel(this.symbol),
								n = this.cfg,
								r = n.outer.id;
							this.fetchSub = e.subscribe(r + ".fetch.*", function (e) {
								t.source.startCache(e)
							})
						}
					}, {
						key: "listenToCmpListChange",
						value: function () {
							var t = this,
								e = h["default"].channel(this.symbol),
								n = this.cfg,
								r = n.outer.id;
							this.changeSub = e.subscribe(r + ".compare", function () {
								t.destroy(), t.draw()
							})
						}
					}, {
						key: "addCmpList",
						value: function (t) {
							var e = this;
							t && (t = t.map(function (t, n, r) {
								return e.addCompare(t)
							}))
						}
					}, {
						key: "addCompare",
						value: function (t) {
							var e = t.symbol,
								n = this.cfg.outer.id,
								r = this.cfg.market;
							"fund" === r && (r = e.substr(0, 2));
							var i = o(r),
								a = s(r);
							return g["default"].cfg(e, {
								symbol: e,
								outer: this.cfg.outer,
								current: this.cfg.current
							}), t.src = new i(e, n), t.data = new a(e, n), t.sqt || (t.sqt = new p["default"](e, n)), t.sub = this.listenToCmpDel(e), t.data.start(), t.src.start(), "hk" === this.cfg.market ? (t.sqt.startOnce(), t.src.stop()) : t.sqt.start(), t
						}
					}, {
						key: "stopCmp",
						value: function (t) {
							t && t.forEach(function (t, e, n) {
								t.sub && t.sub.unsubscribe(), t.src && t.src.stop(), t.data && t.data.stop(), t.sqt && t.sqt.stop()
							})
						}
					}, {
						key: "listenToCmpDel",
						value: function (t) {
							var e = this,
								n = h["default"].channel(t),
								r = n.subscribe(this.cfg.outer.id + ".compare.delete", function () {
									e.deleteCompare(t)
								});
							return r
						}
					}, {
						key: "deleteCompare",
						value: function (t) {
							var e = this,
								n = -1,
								r = this.cfg.cmpList;
							r.map(function (r, i, a) {
								r.symbol == t && (r.src.stop(), r.sqt.stop(), r.data.stop(), r.sub.unsubscribe(), e.chart.removeCmp(t), n = i)
							}), n >= 0 && (r.splice(n, 1), r.maxPct = null, this.destroy(), this.draw())
						}
					}]), t
				}();
			e["default"] = Z, t.exports = e["default"]
		}).call(e, n(6))
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function a(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			s = function (t, e, n) {
				for (var r = !0; r;) {
					var i = t,
						a = e,
						o = n;
					s = u = l = void 0, r = !1, null === i && (i = Function.prototype);
					var s = Object.getOwnPropertyDescriptor(i, a);
					if (void 0 !== s) {
						if ("value" in s) return s.value;
						var l = s.get;
						if (void 0 === l) return;
						return l.call(o)
					}
					var u = Object.getPrototypeOf(i);
					if (null === u) return;
					t = u, e = a, n = o, r = !0
				}
			},
			l = n(23),
			u = r(l),
			c = n(9),
			h = r(c),
			f = n(14),
			g = r(f),
			d = n(25),
			p = r(d),
			A = function (t) {
				function e(t, n, r) {
					i(this, e), s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t), this.symbol = t;
					this.cfg = h["default"].cfg(t)[n]
				}
				return a(e, t), o(e, [{
					key: "_init",
					value: function () {
						this.symbol;
						this.type = this.type || this.cfg.current, this.topic = this.type, this.FREQUENCY = g["default"].LOOP_FREQUENCY.SQT;
						var t = this.getParams(),
							e = t.handler,
							n = t.url;
						this.handler = e, this.url = n
					}
				}, {
					key: "getParams",
					value: function () {
						var t = this.symbol,
							e = this.cfg.market;
						"fund" == e && (e = t.substr(0, 2));
						var n = void 0,
							r = void 0;
						switch (e) {
							case "if":
								r = "v_if" + t.substr(2), n = "//web.sqt.gtimg.cn/q=if" + t.substr(2);
								break;
							case "wh":
								r = "v_" + t, n = "//web.sqt.gtimg.cn/q=" + t;
								break;
							case "sz":
							case "sh":
							case "nq":
								r = "v_" + t, n = "//web.sqt.gtimg.cn/q=" + t;
								break;
							case "hk":
								r = "v_r_" + t, n = "//web.sqt.gtimg.cn/q=r_" + t, "hkHSI" !== t && (n += ",r_hkHSI");
								break;
							case "us":
								var i = void 0,
									a = t.lastIndexOf(".");
								i = -1 == a ? t : t.slice(0, a).replace(/\./g, "__"), r = "v_" + i, n = "//web.sqt.gtimg.cn/q=usDJI," + i
						}
						return {
							url: n,
							handler: r
						}
					}
				}, {
					key: "publish",
					value: function (t) {
						var e = this.cfg.current,
							n = this.cfg.outer.id;
						this.channel.publish([n, "qt", e].join("."), t)
					}
				}, {
					key: "loop",
					value: function () {
						this.getData()
					}
				}, {
					key: "getData",
					value: function () {
						var t = this,
						e = this.cfg.market;
						// 如果是盘后阶段，则不需要再轮询接口了
						if (window.isPanhou) {
							return;
						}
						if (window.StockDataUtils.isHSAdapter(window.stock) && window.isMinute === "minute") {
							window.StockDataUtils.processMinsAsLegacy(window.stock).then(function(res) {
								var resData = res.data || {};
								// 通过 channel 发布 source 数据，触发 Src.this.data 及 Data.updateSrc 更新
								var outerId = t.cfg.outer.id;
								var curType = t.cfg.current;
								t.channel.publish([outerId, ".source.", curType].join(""), res);
								// 继续发布 qt 数据
								var qtData = (resData[window.stock] && resData[window.stock].qt) || {};
								var qtJoin = qtData[window.stock].join('~');
								t.setQtData(qtJoin);
							})
							return;
						}
						p["default"].get(this.url, function () {
							var n = window[t.handler];
							"us" === e ? t.setQtData(n, window.v_usDJI) : "hk" === e ? t.setQtData(n, window.v_r_hkHSI) : t.setQtData(n)
						})
					}
				}, {
					key: "setQtData",
					value: function (t, e) {
						if (e) {
							e = e.Symbol ? e : e.split(/~|,/), t = t.Symbol ? t : t.split(/~|,/);
							var n = e.TimeStamp || e[30];
							t.TimeStamp ? t.TimeStamp = n : t[30] && (t[30] = n)
						}
						this.publish(t)
					}
				}]), e
			}(u["default"]);
		e["default"] = A, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			o = n(9),
			s = r(o),
			l = n(12),
			u = r(l),
			c = n(17),
			h = r(c),
			f = n(24),
			g = r(f),
			d = n(26),
			p = r(d),
			A = function () {
				function t(e) {
					return i(this, t), this.channel = u["default"].channel(e), this._counter = 0, this
				}
				return a(t, [{
					key: "_init",
					value: function () {}
				}, {
					key: "start",
					value: function () {
						var t = this;
						this.stop(), this._init(), this.loop(), this.timer = setInterval(function () {
							t.loop()
						}, this.FREQUENCY)
					}
				}, {
					key: "stop",
					value: function () {
						this._counter++, this.data = null, clearInterval(this.timer), this.timer = null
					}
				}, {
					key: "loop",
					value: function () {
						this.data = null, this.getData()
					}
				}, {
					key: "startOnce",
					value: function () {
						this.stop(), this._init(), this.loop()
					}
				}, {
					key: "startCache",
					value: function (t) {
						this.stop(), this._init();
						var e = this.type,
							n = (this.symbol, this.fqType);
						e.match(/year/) && (e = "day");
						var r = s["default"].data(this.symbol)[e + n];
						this.fetchYear = t;
						var i = s["default"].data(this.symbol)["trend" + n];
						this.trend = i ? i.calData : null, this.trend == [] && (i = null), r ? (this.data = r.sourceData, this.fetchYear && this.fetchYear.length && this.fetchMore(this._counter)) : this.getCacheData()
					}
				}, {
					key: "fetchMore",
					value: function (t) {
						var e = this.fetchYear,
							n = this.type;
						n = n.match(/year/) ? "day" : n;
						for (var r = this.trend.o.trendYearList[n], i = 0, a = 0, o = 0, s = e.length; s > o; o++)
							if (i) i = 0;
							else {
								if (1 === e.length) {
									var l = this.getKlineUrl(e[0]);
									return void this.getData(t, l)
								}
								for (var u = e[o], c = e[o + 1], h = !1, f = r.length; f - 1 > a; a++)
									if (r[a][0] === u) {
										r[a + 1][0] === c && (h = !0);
										break
									} var g = void 0,
									d = this.handler;
								h ? (g = this.getKlineUrl(u, c), i = 1) : (g = this.getKlineUrl(u), i = 0), g = g.replace(d, d + u), this.getData(t, g, d + u)
							}
					}
				}, {
					key: "mergeYearData",
					value: function () {
						var t = this.type.match(/year/) ? "day" : this.type,
							e = this.trend.o.trendYearList[t],
							n = [];
						return e.forEach(function (t) {
							var e = n.length ? n[n.length - 1][0] : "",
								r = t.data,
								i = void 0;
							r && (i = r[0][0], e === i && n.pop(), n = n.concat(r))
						}), n
					}
				}, {
					key: "getData",
					value: function (t, e, n) {
						var r = this;
						t = t || this._counter, e = e || this.url, n = n || this.handler;
						//请求数据,区分是否是沪深交易新规则适配的股票
						if (window.StockDataUtils.isHSAdapter(this.symbol) && window.isMinute === 'minute') {
							window.StockDataUtils.processMinsAsLegacy(this.symbol).then(function () {
								r._getSrcData(t, n);
							}, function (err) {
								console && console.warn && console.warn("processMinsAsLegacy failed", err);
							});
							return;
						}
						h["default"].get(e, function (e) {
							r._getSrcData(t, n);

						})
					}
				}, {
					key: "getCacheData",
					value: function () {
						var t = this,
							e = this._counter,
							n = this.cfg.outer.id,
							r = this.symbol,
							i = this.trend;
						(this.type.match(/year/) && !i || (this.getData(e), !this.cfg.market.match(/wh|if/) && !this.type.match(/m5|m15|m30|m60/))) && (i || (this.channel.subscribe(n + ".data.trend", function (n) {
							s["default"].data(r, "trend" + t.cfg.fqType, n), t.trend = n.calData, t.trend.length || (t.trend = null), t.type.match(/year/) ? t.getData(e) : t.publish()
						}).disposeAfter(1), new p["default"](r, n).start(), new g["default"](r, n).startOnce()))
					}
				}, {
					key: "_getSrcData",
					value: function () {
						this.data = window[this.handler]
					}
				}, {
					key: "publish",
					value: function () {
						this.data && this.channel.publish(this.cfg.outer.id + ".source." + this.type, this.data)
					}
				}]), t
			}();
		e["default"] = A, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			o = n(23),
			s = (r(o), n(9)),
			l = r(s),
			u = n(14),
			c = (r(u), n(25)),
			h = r(c),
			f = n(12),
			g = r(f),
			d = function () {
				function t(e, n) {
					i(this, t), this.channel = g["default"].channel(e), this.symbol = e;
					this.cfg = l["default"].cfg(e)[n];
					return this
				}
				return a(t, [{
					key: "_init",
					value: function () {
						this.symbol;
						this.type = "trend", this.fqType = this.cfg.fqType;
						var t = this.getParams(),
							e = t.handler,
							n = t.url;
						this.handler = e, this.url = n
					}
				}, {
					key: "startOnce",
					value: function () {
						this._init(), this.getData()
					}
				}, {
					key: "getParams",
					value: function () {
						var t = this.symbol,
							e = this.fqType;
						e = e ? e : "raw";
						var n = "trend_" + e;
						"us" === this.cfg.market && this.cfg.isIndex && (t = "us." + this.symbol.substr(2)), e = this.cfg.isIndex ? "raw" : e;
						var r = "//web.ifzq.gtimg.cn/other/klineweb/klineWeb/weekTrends?code=" + t + "&type=" + e + "&_var=" + n;
						return {
							url: r,
							handler: n
						}
					}
				}, {
					key: "getData",
					value: function () {
						var t = this;
						h["default"].get(this.url, function () {
							t.data = window[t.handler].data, t.publish()
						})
					}
				}, {
					key: "publish",
					value: function () {
						this.data && this.channel.publish(this.cfg.outer.id + ".source." + this.type, this.data)
					}
				}]), t
			}();
		e["default"] = d, t.exports = e["default"]
	}, function (t, e) {
		"use strict";

		function n(t, e) {
			if (o) a.push({
				url: t,
				callback: e
			});
			else {
				o = !0;
				var r = document.createElement("script"),
					s = document.getElementsByTagName("head")[0];
				r.id = new Date + Math.random(), r.src = i(t), r.async = !1, r.onload = r.onerror = r.onreadystatechange = function () {
					if (/loaded|complete|undefined/.test(r.readyState) && (e(), s.removeChild(r), o = !1, a.length)) {
						var t = a.shift();
						n(t.url, t.callback)
					}
				}, s.appendChild(r)
			}
		}

		function r(t, e) {
			var n = document.createElement("script"),
				r = document.getElementsByTagName("head")[0];
			n.id = new Date + Math.random(), n.src = i(t), n.async = !0, n.onload = n.onerror = n.onreadystatechange = function () {
				/loaded|complete|undefined/.test(n.readyState) && (e(), r.removeChild(n))
			}, r.appendChild(n)
		}

		function i(t) {
			var e = -1 !== t.indexOf("?");
			return t + (e ? "&r=" : "?r=") + Math.random()
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = [],
			o = !1;
		e["default"] = {
			get: r,
			getSync: n
		}, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function a(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			s = function (t, e, n) {
				for (var r = !0; r;) {
					var i = t,
						a = e,
						o = n;
					s = u = l = void 0, r = !1, null === i && (i = Function.prototype);
					var s = Object.getOwnPropertyDescriptor(i, a);
					if (void 0 !== s) {
						if ("value" in s) return s.value;
						var l = s.get;
						if (void 0 === l) return;
						return l.call(o)
					}
					var u = Object.getPrototypeOf(i);
					if (null === u) return;
					t = u, e = a, n = o, r = !0
				}
			},
			l = n(27),
			u = r(l),
			c = n(29),
			h = r(c),
			f = n(34),
			g = (r(f), n(38)),
			d = r(g),
			p = n(9),
			A = r(p),
			C = n(12),
			v = r(C),
			I = function (t) {
				function e(t, n) {
					i(this, e);
					var r = A["default"].cfg(t)[n];
					s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t, r)
				}
				return a(e, t), o(e, [{
					key: "listen",
					value: function () {
						var t = this;
						this.channel = v["default"].channel(this.symbol);
						var e = this.cfg.outer.id,
							n = e + ".source." + this.type;
						this.subSrc = this.channel.subscribe(n, function (e) {
							t.updateSrc(e)
						}).disposeAfter(1)
					}
				}, {
					key: "updateSrc",
					value: function (t) {
						this.data = {}, this.data.sourceData = t, this.data.processData = this._processSrc(t), this.data.calData = this._calculate(), this.publish()
					}
				}, {
					key: "_processSrc",
					value: function (t) {
						var e = u["default"].trend(t);
						return {
							data: e
						}
					}
				}, {
					key: "_calculate",
					value: function () {
						var t = (this.type, this.data);
						return h["default"].calTrend(t.processData.data)
					}
				}, {
					key: "start",
					value: function () {
						this.stop();
						this.cfg;
						this.type = "trend";
						this.type, this.fqType;
						this.listen()
					}
				}]), e
			}(d["default"]);
		e["default"] = I, t.exports = e["default"]
	}, function (t, e, n) {
		(function (r) {
			"use strict";

			function i(t) {
				return t && t.__esModule ? t : {
					"default": t
				}
			}

			function a(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function o(t, e) {
				var n = parseInt(t.substr(0, 2), 10),
					r = parseInt(t.substr(2), 10) + 1;
				r >= 60 && (n++, r %= 60);
				var i = (10 > n ? "0" : "") + n + (10 > r ? "0" : "") + r;
				return 4 == e.length && i > e[1] && i < e[2] ? e[2] : i
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var s = function () {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function (e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}(),
				l = n(28),
				u = i(l),
				c = function () {
					//u["default"] 13717 processMinuteData
					function t() {
						a(this, t)
					}
					//处理分时data
					return s(t, null, [{
						key: "min",
						value: function (t, e, n) {
							// debugger
							if (t.length) {
								var r = t.cfg,
									i = 1;
								"hk" == e && r && r.isIndex && (i = 1e4), "" === t[t.length - 1] && t.pop();
								for (var a = 0, s = 0, l = u["default"].marketTime(e), c = l.length, h = l[0], f = l[c - 1], g = 0; g < t.length; g++) {
									var d = t[g]; //每一个数据
									"string" == typeof d && (d = d.split(" "));//转数组
									var p = g ? o(h, l) : h; //每个点的时间
									//d = (5) 0930 48.29 7563 365217.00, t = Array(267), i = 1,  f = "1530"
									//将最后一项 d[0] > p && f > p  直接替换成 false ，沪深与科创板
									for (d[1] = 1 * d[1], 0 === d[1] && (d[1] = 0 == g ? 0 : t[g - 1][1]), d[2] = d[2] * i, d[3] = d[2] - a, s += d[1] * d[3], d[3] < 0 && (d[3] = 0), a = d[2], d[4] = 0 === d[2] ? d[1] : s / d[2];false;) {
										var A = [],
											C = t[g - 1];
											C || (C = d),A[0] = p, A[1] = C[1], A[2] = C[2], A[3] = 0, A[4] = C[4], t.splice(g, 0, A), p = o(p, l), g++;
									}
									h = d[0], t[g] = d
								}
								if (n)

									for (var d = t[t.length - 1], p = o(d[0], l); f >= p;) {
										var A = [];
										A[0] = p, A[1] = d[1], A[2] = d[2], A[3] = 0, A[4] = d[4], t.push(A), p = o(p, l)
									}
								for (; t.length >= 1 && t[0][0] < l[0];) t.shift();
								for (; t.length >= 1 && t[t.length - 1][0] > f;) t.pop();
								return t.counter = a, t.turnover = s, t.last = t[t.length - 1] || ["0000"], t
							}
						}
					}, {
						key: "kline",
						value: function (t) {
							for (var e = [], n = 0, i = t.length; i > n; n++) {
								var a = t[n],
									o = [];
								o = "string" == typeof a ? a.split(" ") : r.clone(a), o[0] = o[0].replace(/-/g, "");
								for (var s = 1, l = a.length; l > s; s++) o[s] = 1 * o[s];
								e.push(o)
							}
							return e
						}
					}, {
						key: "fDays",
						value: function (t, e) {
							for (var n = 0, r = t.cfg, i = 5, a = i - 1; a >= 0; a--)
								if (t[a] && t[a].data) t[a].data.cfg = r, t[a].data = 0 === a ? this.min(t[a].data, e) : this.min(t[a].data, e, "all"), n || (n = 1 * t[a].prec);
								else {
									t[a] = {};
									var o = u["default"].marketTime(e),
										s = o.length,
										l = o[s - 1];
									t[a].data = this.min([l + " 0 0"], e)
								} return t.close = n, t
						}
					}, {
						key: "klineIF",
						value: function (t) {
							return t = t.map(function (t, e, n) {
								"string" == typeof t && (t = t.split(" ")), t[0] = "20" + t[0];
								for (var r = 1; 6 > r; r++) t[r] = 1 * (t[r] || 0);
								return t
							})
						}
					}, {
						key: "trend",
						value: function (t) {
							return t.forEach(function (t) {
								t[0] = t[0].replace(/-/g, ""), t[1] *= 1
							}), t
						}
					}]), t
				}();
			e["default"] = c, t.exports = e["default"]
		}).call(e, n(6))
	}, function (t, e) {
		"use strict";

		function n(t) {
			var stock = window.stock
			if(window.StockDataUtils.isHSAdapter(stock)&&window.isMinute === 'minute'){
				return {
					sh: {
						timeTags: ["9:30", "10:30", "11:30/13:00", "14:00", "15:00", "15:30"],
						step: [2, 2, 2, 2, 1]
					},
					sz: {
						timeTags: ["9:30", "10:30", "11:30/13:00", "14:00", "15:00", "15:30"],
						step: [2, 2, 2, 2, 1]
					},
					nq: {
						timeTags: ["9:30", "10:30", "11:30/13:00", "14:00", "15:00"],
						step: [2, 2, 2, 2]
					},
					hk: {
						timeTags: ["9:30", "10:00", "11:00", "12:00/13:00", "14:00", "15:00", "16:00"],
						step: [1, 2, 2, 2, 2, 2]
					},
					us: {
						timeTags: ["9:30", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"],
						step: [1, 2, 2, 2, 2, 2, 2]
					},
					"if": {
						timeTags: ["9:15", "10:00", "10:45", "11:30/13:00", "13:45", "14:30", "15:15"],
						step: [1, 1, 1, 1, 1, 1]
					},
					qh: {
						timeTags: ["9:15", "10:00", "10:45", "11:30/13:00", "13:45", "14:30", "15:15"],
						step: [1, 1, 1, 1, 1, 1]
					},
					wh: {
						timeTags: ["0:00", "3:00", "6:00", "9:00", "12:00", "15:00", "18:00", "21:00", "24:00"],
						step: [1, 1, 1, 1, 1, 1, 1, 1]
					},
					fund: {
						timeTags: ["9:30", "10:30", "11:30/13:00", "14:00", "15:00"],
						step: [2, 2, 2, 2]
					}
				} [t]
			}else{
				return {
					sh: {
						timeTags: ["9:30", "10:30", "11:30/13:00", "14:00", "15:00"],
						step: [2, 2, 2, 2]
					},
					sz: {
						timeTags: ["9:30", "10:30", "11:30/13:00", "14:00", "15:00"],
						step: [2, 2, 2, 2]
					},
					nq: {
						timeTags: ["9:30", "10:30", "11:30/13:00", "14:00", "15:00"],
						step: [2, 2, 2, 2]
					},
					hk: {
						timeTags: ["9:30", "10:00", "11:00", "12:00/13:00", "14:00", "15:00", "16:00"],
						step: [1, 2, 2, 2, 2, 2]
					},
					us: {
						timeTags: ["9:30", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"],
						step: [1, 2, 2, 2, 2, 2, 2]
					},
					"if": {
						timeTags: ["9:15", "10:00", "10:45", "11:30/13:00", "13:45", "14:30", "15:15"],
						step: [1, 1, 1, 1, 1, 1]
					},
					qh: {
						timeTags: ["9:15", "10:00", "10:45", "11:30/13:00", "13:45", "14:30", "15:15"],
						step: [1, 1, 1, 1, 1, 1]
					},
					wh: {
						timeTags: ["0:00", "3:00", "6:00", "9:00", "12:00", "15:00", "18:00", "21:00", "24:00"],
						step: [1, 1, 1, 1, 1, 1, 1, 1]
					},
					fund: {
						timeTags: ["9:30", "10:30", "11:30/13:00", "14:00", "15:00"],
						step: [2, 2, 2, 2]
					}
				} [t]
			}

		}

		function r(t) {
			var stock = window.stock
			if(window.StockDataUtils.isHSAdapter(stock)&&window.isMinute === 'minute'){
			return {
				sh: ["0930", "1130", "1300", "1500", "1530"],
				1: ["0930", "1130", "1300", "1500","1530"],
				sz: ["0930", "1130", "1300", "1500", "1530"],
				51: ["0930", "1130", "1300", "1500", "1530"],
				nq: ["0930", "1130", "1300", "1500"],
				61: ["0930", "1130", "1300", "1500"],
				hk: ["0930", "1201", "1300", "1600"],
				100: ["0930", "1201", "1300", "1600"],
				us: ["0930", "1600"],
				200: ["0930", "1600"],
				"if": ["0915", "1130", "1300", "1515"],
				qh: ["0915", "1130", "1300", "1515"],
				300: ["0915", "1130", "1300", "1515"],
				wh: ["0000", "2400"]
			} [t]
			}else{
				return {
					sh: ["0930", "1130", "1300", "1500"],
					1: ["0930", "1130", "1300", "1500"],
					sz: ["0930", "1130", "1300", "1500"],
					51: ["0930", "1130", "1300", "1500"],
					nq: ["0930", "1130", "1300", "1500"],
					61: ["0930", "1130", "1300", "1500"],
					hk: ["0930", "1201", "1300", "1600"],
					100: ["0930", "1201", "1300", "1600"],
					us: ["0930", "1600"],
					200: ["0930", "1600"],
					"if": ["0915", "1130", "1300", "1515"],
					qh: ["0915", "1130", "1300", "1515"],
					300: ["0915", "1130", "1300", "1515"],
					wh: ["0000", "2400"]
				} [t]
			}
		}

		function i(t) {
			var stock = window.stock
			if(window.StockDataUtils.isHSAdapter(stock)&&window.isMinute === 'minute'){
			return {
				minute: {
					sh: 272,
					sz: 272,
					nq: 242,
					hk: 333,
					us: 391,
					"if": 272,
					300: 272,
					wh: 1440
				} [t],
				fdays: {
					sh: a(243),
					sz: a(243),
					nq: a(243),
					hk: a(333),
					us: a(391)
				} [t]
			}
		}else{
			return {
				minute: {
					sh: 242,
					sz: 242,
					nq: 242,
					hk: 333,
					us: 391,
					"if": 272,
					300: 272,
					wh: 1440
				} [t],
				fdays: {
					sh: a(243),
					sz: a(243),
					nq: a(243),
					hk: a(333),
					us: a(391)
				} [t]
			}
		}
		}

		function a(t) {
			return (t - 1) % 4 ? 5 * (Math.ceil(t / 4) + 1) : 5 * Math.ceil(t / 4)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = {
			timeTags: n,
			marketTime: r,
			marketMaxX: i
		};
		e["default"] = o, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = function () {
				function t(t, e) {
					var n = [],
						r = !0,
						i = !1,
						a = void 0;
					try {
						for (var o, s = t[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !e || n.length !== e); r = !0);
					} catch (l) {
						i = !0, a = l
					} finally {
						try {
							!r && s["return"] && s["return"]()
						} finally {
							if (i) throw a
						}
					}
					return n
				}
				return function (e, n) {
					if (Array.isArray(e)) return e;
					if (Symbol.iterator in Object(e)) return t(e, n);
					throw new TypeError("Invalid attempt to destructure non-iterable instance")
				}
			}(),
			o = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			s = n(14),
			l = r(s),
			u = n(30),
			c = (r(u), n(32)),
			h = r(c),
			f = n(33),
			g = r(f),
			d = function () {
				function t() {
					i(this, t)
				}
				return o(t, null, [{
					key: "calMinute",
					value: function (t) {
						var e = {};
						t.data = this.calQtMinute(t);
						var n = t.data,
							r = t.date,
							i = (t.status, t.close),
							o = t.open,
							s = t.name;
						i = i || o;
						var l = [],
							u = [],
							c = [],
							h = [],
							f = [],
							g = -Number.MAX_VALUE,
							d = Number.MAX_VALUE,
							p = 0,
							A = 0;
						n.forEach(function (t, e, n) {
							var r = a(t, 5),
								o = r[0],
								s = r[1],
								C = r[2],
								v = r[3],
								I = r[4];
							l.push(s);
							var m = 100 * (s / i - 1);
							m = m ? m : 0, u.push(m), c.push(I);
							var y = s - A;
							y || (y = f.length ? f[f.length - 1][1] : 0), f.push([v, y]), h.push([o, s, m, v, y, I, C]), g = Math.max(s, g), d = Math.min(s, d), p = Math.max(v, p), A = s
						});
						var C = Math.abs(g - i),
							v = Math.abs(d - i),
							I = C > v ? C : v,
							m = I / i || .001,
							y = t.decimalPosition,
							b = h.length;
						return e = {
							name: s,
							price: {
								data: l,
								percent: u,
								abs: I,
								maxPct: 100 * m,
								average: c,
								fixed: y
							},
							volume: {
								data: f,
								max: p
							},
							fullData: h,
							rawdata: n,
							last: h[b - 1],
							close: i,
							date: r
						}, e.status = t.status, e
					}
				}, {
					key: "calQtMinute",
					value: function (t, e) {
						e = e || t.data;
						var n = t.marketTime,
							r = t.qtTime,
							i = t.qtDate,
							a = t.date;
							// 沪深交易规则适配，1501-1505都是属于盘后准备中，和1500是一样的，不展示
							var isHSAdapter = window.StockDataUtils.isHSAdapter(window.stock) && window.isMinute === 'minute';
							if (isHSAdapter && r > "1500" && r < "1506") {
								r = "1500";
							}
						if (n.length > 2 && r > n[1] && r < n[2] && (r = n[1]), !a || a.replace(/-/g, "") < i) e = [], e.last = ["0000"], e.counter = 0, e.turnover = 0, t.date = i;
						else if (a > i) return e;

						var o = (t.market, t.close, t.open),
							s = t.qtPrice,
							l = t.qtVolume,
							u = n[n.length - 1],
							c = n[0],
							h = e.last[0],
							f = l - e.counter,
							g = e.turnover + s * f,
							d = e.length;
						e.cfg ? e.cfg.isIndex : !1;
						if (r > h && u >= r && r >= c || !e.length) {
							d || (e.push([c, o, l, 0, o]), d++);
							for (var p = e[d - 1]; p[0] < r && p[0] < u;) {
								var __nextTime = this.getNextTime(p[0], n);
								// 沪深交易规则适配，1501-1505都是属于盘后准备中，和1500是一样的，不展示，直接跳到1506
								if (isHSAdapter && __nextTime > '1500' && __nextTime < '1506') {
									__nextTime = '1506';
								}
								p = e[d++] = [__nextTime, p[1], 0, p[3], p[4]];
							}
							p[1] = s || p[1], p[2] = l, p[3] = f, p[4] = g / p[2] || p[1], e.last = p, e.counter = l, e.turnover = g
						} else if ((r === h || c > r) && s) {
							var p = e[d - 1],
								A = d > 1 ? e[d - 2][2] : 0;
							f = l - A, (p[1] !== s || p[3] !== f) && (p[1] = s, p[2] = l, p[3] = f, p[4] = g / p[2] || p[1], e.last = p)
						}

						return e
					}
				}, {
					key: "kline",
					value: function (t) {
						for (var e = t.data, n = (t.qtDate, t.name), r = t.trendUnit, i = 0, a = 0, o = 0, s = 0, l = 0, u = 0, c = -Number.MAX_VALUE, f = +Number.MAX_VALUE, g = [], d = [], p = [], A = [], C = [], v = 0, I = (e.length, 0), m = e.length; m > I; I++) {
							var y = e[I].slice(0, 6),
								b = y[0],
								_ = y[1],
								x = y[2],
								w = y[3],
								k = y[4],
								T = y[5];
							g.push(x), d.push(w), p.push(k), C.push(T);
							var E = x - _;
							E || (E = I > 0 ? x - g[I - 1] : 0), y = y.concat([E]), i += x, a += x, o += x, s += T, l += T, u += T, I >= 19 ? (i -= e[I - 5][2], a -= e[I - 10][2], o -= 19 == I ? 0 : e[I - 20][2], s -= e[I - 5][5], l -= e[I - 10][5], u -= 19 == I ? 0 : e[I - 20][5], e[I] = y.concat([i / 5, a / 10, o / 20, s / 5, l / 10, u / 20])) : I >= 9 ? (i -= e[I - 5][2], a -= 9 == I ? 0 : e[I - 10][2], s -= e[I - 5][5], l -= 9 == I ? 0 : e[I - 10][5], e[I] = y.concat([i / 5, a / 10, "", s / 5, l / 10, ""])) : I >= 4 ? (i -= 4 == I ? 0 : e[I - 5][2], s -= 4 == I ? 0 : e[I - 5][5], e[I] = y.concat([i / 5, "", "", s / 5, "", ""])) : e[I] = y.concat(["", "", "", "", "", ""]);
							var S = "date" === r ? b.slice(0, 8) : b.slice(0, 4);
							S !== v && (v = S, A.push(["date" === r ? [v.slice(0, 4), v.slice(4, 6), v.slice(6, 8)].join("/") : v, I])), c = Math.max(c, x), f = Math.min(f, x)
						}
						return A.push([" ", e.length]), e.rawdata = e, e.o = {
							name: n,
							len: g.length,
							MACD: h["default"].MACD(g),
							maxValAll: c,
							minValAll: f,
							fixed: t.decimalPosition,
							closingPrice: g,
							highPrice: d,
							lowPrice: p,
							volume: C,
							trendTimeTags: A,
							status: t.status,
							open: e[0] && e[0][1]
						}, e
					}
				}, {
					key: "klineQT",
					value: function (t, e) {
						if (!t.data || !t.data.length) return [];
						if (t.status || !t.open || !t.close || !t.qtPrice || !t.qtMaxVal || !t.qtMinVal) return t.data;
						var n = t.data,
							r = t.qtDate,
							i = t.open,
							a = t.qtPrice,
							o = t.qtMaxVal,
							s = t.qtMinVal,
							l = t.qtVolume,
							u = n.length - 1,
							c = n[u],
							h = c[0],
							f = [r, i, a, o, s, l],
							g = f[2] - f[1];
						if (f[2] === f[1] && (g = u > 0 ? f[2] - n[u - 1][2] : 0), f = f.concat(g), r === h) {
							if ("month" === e || "week" === e) {
								var d = c[5] + l - (n.volumeAll || l);
								n.volumeAll = l, f = [r, c[1], a, Math.max(o, c[3]), Math.min(o, c[4]), d];
								var p = f[2] - f[1];
								f[2] === f[1] && (p = u > 0 ? f[2] - n[u - 1][2] : 0), f = f.concat(p)
							}
							n[u] = f;
							var A = this.calMA(n, u, 5),
								C = this.calMA(n, u, 10),
								v = this.calMA(n, u, 20),
								I = this.calMA(n, u, 5, "v"),
								m = this.calMA(n, u, 10, "v"),
								y = this.calMA(n, u, 20, "v");
							f = f.concat([A, C, v, I, m, y]), n[u] = f
						} else r > h && (n.push(f), this.kline(t));
						return n
					}
				}, {
					key: "calMklineQT",
					value: function (t, e) {
						if (!t.data) return [];
						if (t.status || !t.close || !t.qtPrice || !t.qtMaxVal || !t.qtMinVal) return t.data;
						var n = t.data,
							r = t.qtDate,
							i = t.qtTime,
							a = t.qtPrice,
							o = t.qtVolume,
							s = t.marketTime;
						if (i < s[0] || i > s[1] && i < s[2] || i > s[3]) return n;
						var l = n.length - 1,
							u = n[l],
							c = n[l - 1],
							h = u[0].slice(0, 8),
							f = u[0].substr(8),
							g = c ? c[0].substr(8) : s[0];
						g = g > f ? s[0] : g;
						var d = 1 * e.substr(1);
						if (void 0 === n.volumeAll) return r > h ? n.volumeAll = 0 : n.volumeAll = o - u[5], n;
						if (r > h || f - g >= d && i > f) {
							var p = [r + "" + i, a, a, a, a, r > h ? o : o - n.volumeAll],
								A = p[2] - u[2];
							p = p.concat(A), n.push(p), n.volumeAll = o, this.calMKline(t)
						} else if (i >= f) {
							var C = u[1],
								v = u[3],
								I = u[4],
								p = [r + "" + i, C, a, a > v ? a : v, I > a ? a : I, o - n.volumeAll],
								A = l > 0 ? p[2] - c[2] : 0;
							p = p.concat(A), n[l] = p;
							var m = this.calMA(n, l, 5),
								y = this.calMA(n, l, 10),
								b = this.calMA(n, l, 20),
								_ = this.calMA(n, l, 5, "v"),
								x = this.calMA(n, l, 10, "v"),
								w = this.calMA(n, l, 20, "v");
							p = p.concat([m, y, b, _, x, w]), n[l] = p
						}
						return n
					}
				}, {
					key: "calMKline",
					value: function (t) {
						t.trendUnit = "date";
						var e = this.kline(t),
							n = e.o.trendTimeTags,
							r = n.length;
						if (5 >= r) return e;
						var i = n[r - 5 - 1][1],
							a = e.slice(i, e.length);
						return t.data = a, this.kline(t)
					}
				}, {
					key: "calMA",
					value: function (t, e, n, r) {
						var i = r ? 5 : 2,
							a = 0;
						if (e >= n - 1) {
							for (var o = 0; n > o; o++) a += t[e - o][i];
							return a / n
						}
						return ""
					}
				}, {
					key: "klineIndex",
					value: function () {
						var t = arguments[0],
							e = arguments[1],
							n = void 0,
							r = void 0,
							i = void 0,
							a = void 0,
							o = void 0;
						switch (t) {
							case "RSI":
								return n = e.closingPrice, {
									RSI6: h["default"].RSI(n, 6),
									RSI12: h["default"].RSI(n, 12),
									RSI24: h["default"].RSI(n, 24)
								};
							case "KDJ":
								return n = e.closingPrice, r = e.highPrice, i = e.lowPrice, h["default"].KDJ(n, i, r, 9, 3, 3);
							case "DMI":
								return n = e.closingPrice, r = e.highPrice, i = e.lowPrice, h["default"].DMI(r, i, n);
							case "OBV":
								return n = e.closingPrice, a = e.volume, o = e.open, h["default"].OBV(n, a, o);
							case "W&R":
								return n = e.closingPrice, r = e.highPrice, i = e.lowPrice, h["default"].WR(n, i, r, 10, 6);
							case "BOLL":
								return n = e.closingPrice, h["default"].BOLL(n, 20, 2);
							case "SAR":
								return r = e.highPrice, i = e.lowPrice, h["default"].SAR(r, i, 10, 2, 20)
						}
					}
				}, {
					key: "calFDays",
					value: function (t) {
						var e = {};
						t.date = t.data[0].date, t.data[0].data = this.calQtFDays(t.data[0].data, t);
						for (var n = [], r = [], i = [], o = [], s = [], u = [], c = -Number.MAX_VALUE, h = Number.MAX_VALUE, f = 0, d = t.data, p = 1 * d.close, A = l["default"].FDAYS_SAMPLING, C = function (t, e) {
								var l = d[t].data,
									C = d[t].date;
								if (C) {
									C = g["default"]["new"](C);
									var v = g["default"].getDayCh(C.getDay());
									C = g["default"].dash(C), C = C + " " + v, u.push(C)
								}
								var I = l.length,
									m = 0;
								l.forEach(function (t, e, l) {
									if (!(e % A) || e === I - 1) {
										var u = a(t, 5),
											g = u[0],
											d = u[1],
											v = u[2],
											y = u[3],
											b = u[4];
										n.push(d);
										var _ = 100 * (d / p - 1);
										_ = _ ? _ : 0, s.push(_), r.push(b), m = e ? l[e - 1][1] : m;
										var x = d - m;
										x || (x = o.length ? o[o.length - 1][1] : 0), o.push([y, x]), i.push([g, d, _, y, x, b, C, v]), c = Math.max(d, c), h = Math.min(d, h), f = Math.max(y, f)
									}
								})
							}, v = t.data.length, I = v - 1; I >= 0; I--) C(I, v);
						if (!u.length) {
							var m = g["default"]["new"](t.qtDate),
								y = g["default"].getDayCh(m.getDay());
							m = g["default"].dash(m), m = m + " " + y, u.push(m)
						}
						var b = Math.abs(c - p),
							_ = Math.abs(h - p),
							x = b > _ ? b : _,
							w = x / p || .001,
							k = t.decimalPosition,
							T = i.length;
						return e = {
							name: t.name,
							price: {
								data: n,
								percent: s,
								abs: x,
								maxPct: 100 * w,
								average: r,
								fixed: k
							},
							volume: {
								data: o,
								max: f
							},
							date: u,
							fullData: i,
							rawdata: d,
							last: i[T - 1],
							close: p
						}, e.status = t.status, e
					}
				}, {
					key: "calQtFDays",
					value: function (t, e) {
						return e.data ? t = this.calQtMinute(e, t) : null
					}
				}, {
					key: "calTrend",
					value: function (t) {
						for (var e = [], n = 0, r = Number.MAX_VALUE, i = "", a = [], o = {
								day: [],
								week: [],
								month: []
							}, s = 0, l = t.length; l > s; s++) {
							var u = t[s][0],
								c = t[s][1];
							e.push(c), n = Math.max(n, c), r = Math.min(r, c), u.slice(0, 4) !== i && (i = u.slice(0, 4), a.push([i, s]), o.day.push([i, !1]), o.week.push([i, !1]), o.month.push([i, !1]))
						}
						a.push([" ", t.length]), t.rawdata = t;
						var h = n - r;
						return t.o = {
							len: e.length,
							maxValAll: h ? n : n + .1,
							minValAll: h ? r : r - .1,
							closingPrice: e,
							trendTimeTags: a,
							trendYearList: o
						}, t
					}
				}, {
					key: "getNextTime",
					value: function (t, e) {
						var n = parseInt(t.substr(0, 2), 10),
							r = parseInt(t.substr(2), 10) + 1;
						r >= 60 && (n++, r %= 60);
						var i = (10 > n ? "0" : "") + n + (10 > r ? "0" : "") + r;
						return 4 == e.length && i > e[1] && i < e[2] ? e[2] : i
					}
				}]), t
			}();
		e["default"] = d, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			o = n(31),
			s = r(o),
			l = function () {
				function t() {
					i(this, t)
				}
				return a(t, null, [{
					key: "HZLD",
					value: function (t) {
						return this._HZLD(t)
					}
				}, {
					key: "_HZLD",
					value: function (t, e) {
						return "string" == typeof t && t.replace(/%/, ""), t > 0 ? s["default"].change.red : 0 > t ? s["default"].change.green : e ? s["default"].change.red : s["default"].change.gray
					}
				}, {
					key: "_LZHD",
					value: function (t, e) {
						return "string" == typeof t && t.replace(/%/, ""), t >= 0 ? s["default"].change.green : 0 > t ? s["default"].change.red : e ? s["default"].change.greend : s["default"].change.gray
					}
				}]), t
			}();
		e["default"] = l, t.exports = e["default"]
	}, function (t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = {
			background: {
				color: "rgba(240, 247, 252, 1)",
				gridColor: "#f0f7fc"
			},
			border: {
				width: 1,
				color: "#d9e6ef",
				inner: "#d9e6ef"
			},
			title: {
				background: "#f4f4f4",
				text: "#385e7c"
			},
			change: {
				red: "#d91a2a",
				green: "#17a63a",
				gray: "#385e7c"
			},
			text: {
				ma5: "#85a1ef",
				ma10: "#f99a61",
				ma20: "#ee6ac5",
				label: "#82a2c4"
			},
			index: {
				MACD: "#ee6ac5",
				DIFF: "#85a1ef",
				DEA: "#f99a61",
				RSI6: "#6283ec",
				RSI12: "#ff9351",
				RSI24: "#006000",
				PDI: "#6283ec",
				MDI: "#ff9351",
				ADX: "#00ff60",
				ADXR: "#006000",
				K: "#6283ec",
				D: "#ff9351",
				J: "#006000",
				OBV: "#85a1ef",
				WR1: "#85a1ef",
				WR2: "#006000",
				UPPER: "#85a1ef",
				MID: "#f99a61",
				LOWER: "#006000",
				SAR: "#85a1ef",
				background: "#f0f7fc",
				text: "#98b2cf",
				stroke: "#1044ba"
			},
			index_menu: {
				background: "#dde9f1",
				text: "#99a5b0",
				selected_text: "#1c91fe",
				selected_background: "#ebf3f9"
			},
			trend: {
				width: 1,
				strokeColor: "#e0eefd",
				fillColor: "#c2d4e6"
			},
			halfLine: "1px #67b4e7",
			minute: {
				strokeColor: "1px #136aa1",
				gradientColorTop: "rgba(175,219,252,1)",
				gradientColorBottom: "rgba(175,219,252,0)",
				avgColor: "1px #e79c4a",
				dotColor: "1px #dd6f44",
				dotFill: "#fff"
			},
			cross: {
				color: "#b3b6b8"
			},
			crossBox: {
				stroke: "#5ba6e0",
				fill: "#80b9e6",
				text: "#fff"
			},
			panel: {
				background: "rgba(255,255,255,0.8)",
				text: "#878774",
				border: "#d6d5ce"
			},
			dragbar: {
				border: "#8cb3da",
				background: "rgba(249, 242, 192, 0.5)",
				barColor: "#ecf3fc"
			},
			userGraphic: {
				lineColor: "red",
				textColor: "black",
				label: {
					border: "green",
					rectColor: "green",
					defaultColor: "black",
					height: 14
				},
				anchor: {
					width: 5,
					hitWidth: 10,
					color: "black",
					border: "red"
				}
			},
			jingzhi: {
				unit: "2px #3fb4de",
				sum: "2px #fd9e4c"
			},
			compareMain: {
				lineWidth: "2px",
				color: "#6dc6e6"
			},
			compare: [{
				lineWidth: "2px",
				color: "#fd9e4c"
			}, {
				lineWidth: "2px",
				color: "#c176f5"
			}, {
				lineWidth: "2px",
				color: "#c1b4ac"
			}, {
				lineWidth: "2px",
				color: "#fb5b3b"
			}],
			status: {
				line: "#333",
				color: "#333",
				background: "rgba(255,255,255,0.8)",
				font: "20px 微软雅黑"
			}
		};
		e["default"] = n, t.exports = e["default"]
	}, function (t, e) {
		"use strict";

		function n(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			i = function () {
				function t() {
					n(this, t)
				}
				return r(t, null, [{
					key: "MACD",
					value: function e(t, n, r, i) {
						var a = this;
						r = r || 12, n = n || 26, i = i || 9;
						var o = a.SUB(a.EMA(t, r), a.EMA(t, n)),
							s = a.EMA(o, i),
							e = a.MUL(2, a.SUB(o, s));
						return {
							DIF: o,
							DEA: s,
							MACD: e
						}
					}
				}, {
					key: "RSI",
					value: function (t, e) {
						var n = this,
							r = arguments,
							i = r.length,
							a = n.REF(t, 1),
							o = n.SUB(t, a),
							s = n.MAX(o, 0),
							l = n.ABS(o);
              				l[0] = 0;
						if (2 == i) return n.MUL(100, n.DIV(n.SMA(s, e, 1), n.SMA(l, e, 1)));
						for (var u = {}, c = 1; i > c; c++) e = r[c], u["RSI" + e] = n.MUL(100, n.DIV(n.SMA(s, e, 1), n.SMA(l, e, 1)));
						return u
					}
				}, {
					key: "KDJ",
					value: function (t, e, n, r, i, a) {
						function o(t) {
							return 0 > t ? 0 : t > 100 ? 100 : t
						}
						var s = this,
							l = s.LLV(e, r),
							u = s.DIV(s.MUL(s.SUB(t, l), 100), s.SUB(s.HHV(n, r), l)),
							c = s.SMA(u, i, 1),
							h = s.SMA(c, a, 1),
							f = s.SUB(s.MUL(3, c), s.MUL(2, h));
						return {
							K: s.forEach([c], o),
							D: s.forEach([h], o),
							J: s.forEach([f], o)
						}
					}
				}, {
					key: "DMI",
					value: function (t, e, n, r, i) {
						var a = this;
						r = r || 14, i = i || 6;
						var o = [],
							s = [],
							l = [];
						a.forEach([t, e], function (r, i) {
							var u = this.index,
								c = u - 1,
								h = r - t[c],
								f = e[c] - i,
								g = n[c];
							a.isNumber(h) && a.isNumber(f) && (o[u] = h > 0 && h > f ? h : 0, s[u] = f > 0 && f > h ? f : 0), l[this.index] = Math.max(r - i, Math.abs(r - g), Math.abs(i - g))
						});
						var u = a.SUM(l, r),
							c = a.SUM(o, r),
							h = a.SUM(s, r),
							f = [],
							g = [],
							d = [];
						a.forEach([c, h, u], function (t, e, n) {
							var r = f[this.index] = 100 * t / n,
								i = g[this.index] = 100 * e / n;
							d[this.index] = 100 * Math.abs(i - r) / (r + i)
						});
						var p = a.MA(d, i),
							A = a.DIV(a.ADD(p, a.REF(p, i)), 2);
						return {
							PDI: f,
							MDI: g,
							ADX: p,
							ADXR: A
						}
					}
				}, {
					key: "WR",
					value: function (t, e, n, r) {
						for (var i = this, a = arguments.length, o = 3, s = {}; a > o; o++) {
							r = arguments[o];
							var l = i.HHV(n, r);
							s["WR" + r] = i.DIV(i.MUL(i.SUB(l, t), 100), i.SUB(l, i.LLV(e, r)))
						}
						return 4 == a ? s["WR" + r] : s
					}
				}, {
					key: "OBV",
					value: function (t, e, n) {
						for (var r = [t[0] > n ? e[0] : t[0] < n ? -e[0] : 0], i = 1, a = t.length; a > i; i++) t[i] > t[i - 1] ? r[i] = r[i - 1] + e[i] : t[i] < t[i - 1] ? r[i] = r[i - 1] - e[i] : r[i] = r[i - 1];
						return {
							OBV: r
						}
					}
				}, {
					key: "BOLL",
					value: function (t, e, n) {
						var r = this;
						e = e || 20, n = n || 2;
						var i = r.MA(t, e),
							a = r.MUL(r.STD(t, e), n),
							o = r.ADD(i, a),
							s = r.SUB(i, a);
						return {
							UPPER: o,
							MID: i,
							LOWER: s
						}
					}
				}, {
					key: "SAR",
					value: function i(t, e, n, r, a) {
						n = n || 10, r = r || 2, a = a || 20;
						var i = [],
							o = [],
							s = [],
							l = t.length,
							u = [],
							c = function (c) {
								if (!(c >= l))
									if (i[c] = Math.min.apply(null, e.slice(c - n, c)), u[c] = 1, i[c] > e[c]) h(c + 1);
									else
										for (s[c] = Math.max.apply(null, t.slice(c - n + 1, c + 1)), o[c] = r; l - 1 > c;) {
											if (i[c + 1] = i[c] + o[c] * (s[c] - i[c]) / 100, u[c + 1] = 1, i[c + 1] > e[c + 1]) return void h(c + 2);
											s[c + 1] = Math.max.apply(null, t.slice(c - n + 2, c + 2)), t[c + 1] > s[c] ? (o[c + 1] = o[c] + r, o[c + 1] > a && (o[c + 1] = a)) : o[c + 1] = o[c], c++
										}
							},
							h = function (h) {
								if (!(h >= l)) {
									if (i[h] = Math.max.apply(null, t.slice(h - n, h)), u[h] = -1, i[h] < t[h]) return void c(h + 1);
									for (s[h] = Math.min.apply(null, e.slice(h - n + 1, h + 1)), o[h] = r; l - 1 > h;) {
										if (i[h + 1] = i[h] + o[h] * (s[h] - i[h]) / 100, u[h + 1] = -1, i[h + 1] < t[h + 1]) return void c(h + 2);
										s[h + 1] = Math.min.apply(null, e.slice(h - n + 2, h + 2)), e[h + 1] < s[h] ? (o[h + 1] = o[h] + r, o[h + 1] > a && (o[h + 1] = a)) : o[h + 1] = o[h], h++
									}
								}
							};
						return t[n] > t[0] || e[n] > e[0] ? c(n) : h(n), {
							SAR: {
								data: i,
								direction: u
							}
						}
					}
				}, {
					key: "ADD",
					value: function () {
						for (var t = this, e = arguments.length, n = Array(e), r = 0; e > r; r++) n[r] = arguments[r];
						return this.forEach(n, function () {
							for (var e = arguments.length, n = Array(e), r = 0; e > r; r++) n[r] = arguments[r];
							return t.reduce(n, function (t, e) {
								return t + e
							}, !0)
						})
					}
				}, {
					key: "SUB",
					value: function () {
						for (var t = this, e = arguments.length, n = Array(e), r = 0; e > r; r++) n[r] = arguments[r];
						return this.forEach(n, function () {
							for (var e = arguments.length, n = Array(e), r = 0; e > r; r++) n[r] = arguments[r];
							return t.reduce(n, function (t, e) {
								return t - e
							}, !0)
						})
					}
				}, {
					key: "MUL",
					value: function () {
						for (var t = this, e = arguments.length, n = Array(e), r = 0; e > r; r++) n[r] = arguments[r];
						return this.forEach(n, function () {
							for (var e = arguments.length, n = Array(e), r = 0; e > r; r++) n[r] = arguments[r];
							return t.reduce(n, function (t, e) {
								return t * e
							}, !0)
						})
					}
				}, {
					key: "DIV",
					value: function () {
						for (var t = this, e = arguments.length, n = Array(e), r = 0; e > r; r++) n[r] = arguments[r];
						return this.forEach(n, function () {
							for (var e = arguments.length, n = Array(e), r = 0; e > r; r++) n[r] = arguments[r];
							return t.reduce(n, function (t, e) {
								return t / e
							}, !0)
						})
					}
				}, {
					key: "POW",
					value: function () {
						for (var t = arguments.length, e = Array(t), n = 0; t > n; n++) e[n] = arguments[n];
						return this.forEach(e, function (t, e) {
							return Math.pow(t, e)
						})
					}
				}, {
					key: "MAX",
					value: function () {
						for (var t = this, e = arguments.length, n = Array(e), r = 0; e > r; r++) n[r] = arguments[r];
						return this.forEach(n, function () {
							for (var e = arguments.length, n = Array(e), r = 0; e > r; r++) n[r] = arguments[r];
							return t.reduce(n, function (t, e) {
								return e > t ? e : t
							})
						})
					}
				}, {
					key: "ABS",
					value: function (t) {
						return this.forEach([t], function (t) {
							return Math.abs(t)
						})
					}
				}, {
					key: "REF",
					value: function (t, e) {
						return Array(e).concat(t).slice(0, t.length)
					}
				}, {
					key: "HHV",
					value: function (t, e) {
						return this.hhvllv(t, e, function (t, e) {
							return e > t ? e : t
						})
					}
				}, {
					key: "LLV",
					value: function (t, e) {
						return this.hhvllv(t, e, function (t, e) {
							return t > e ? e : t
						})
					}
				}, {
					key: "SUM",
					value: function (t, e) {
						var n = t.length,
							r = 0,
							i = 0,
							a = 0,
							o = [];
						if (e > n) return Array(n);
						if (0 >= e) return this.reduce(t, function (t, e) {
							return t + e
						});
						if (1 >= e) return t.slice();
						for (; e - 1 > a && n > r;) this.isNumber(t[r]) && (i += t[r], a++), r++;
						for (; n > r; r++) this.isNumber(t[r]) && (this.isNumber(i) ? i += t[r] : i = t[r]), o[r] = i, this.isNumber(t[r - e + 1]) && (i -= t[r - e + 1]);
						return o
					}
				}, {
					key: "MA",
					value: function (e, n) {
						var r = e.length,
							i = 0,
							a = -1,
							o = 0,
							s = 0,
							l = [];
						if (0 >= n) return s = t.reduce(e, function (t, e) {
							return t + e
						}), s / r;
						if (1 >= n) return e.slice();
						if (n > r) return Array(r);
						for (; r > i && n - 1 > o;) t.isNumber(e[i]) && (s += e[i], o++), i++;
						for (; r > i; i++, a++) t.isNumber(e[i]) && (s += e[i]), t.isNumber(e[i - n]) && (s -= e[i - n]), l[i] = s / n;
						return l
					}
				}, {
					key: "DMA",
					value: function (e, n, r) {
						var i = e.length,
							a = 0,
							o = 1 - n,
							s = 0,
							l = [];
						t.isArray(n);
						if (n > 1) return Array(i);
						if (1 == n) return e.slice();
						if (t.isArray(n)) {
							for (; i > a; a++)
								if (t.isNumber(e[a]) && t.isNumber(n[a])) {
									l[a] = 1 == r ? 0 : e[a], s = e[a], a++;
									break
								} for (; i > a; a++) t.isNumber(e[a]) && t.isNumber(n[a]) ? s = l[a] = n[a] * e[a] + (1 - n[a]) * s : l[a] = l[a - 1]
						} else {
							for (; i > a; a++)
								if (t.isNumber(e[a])) {
									l[a] = 1 == r ? 0 : e[a], s = e[a], a++;
									break
								} for (; i > a; a++) t.isNumber(e[a]) ? s = l[a] = n * e[a] + o * s : l[a] = l[a - 1]
						}
						return l
					}
				}, {
					key: "SMA",
					value: function (t, e, n) {
						var r = this;
						return r.DMA(t, n / e, 1)
					}
				}, {
					key: "EMA",
					value: function (e, n) {
						return t.DMA(e, 2 / (n + 1))
					}
				}, {
					key: "WMA",
					value: function (e, n) {
						var r = e.length,
							i = 0,
							a = -1,
							o = [];
						if (1 >= n) return e.slice();
						if (n > r) return Array(r);
						for (var s = n * (n + 1) / 2, l = 0, u = 0; n - 1 > i; i++) t.isNumber(e[i]) && (l += e[i], u += (i + 1) * e[i]);
						for (; r > i; i++, a++) t.isNumber(e[i]) && (l += e[i], u += e[i] * n), a >= 0 && t.isNumber(e[a]) && (l -= e[a]), o[i] = u / s, u -= l;
						return o
					}
				}, {
					key: "STD",
					value: function (e, n) {
						for (var r = [], i = t.MA(e, n), a = n - 1, o = e.length; o > a; a++) {
							for (var s = 0, l = a - n + 1; a >= l; l++) s += Math.pow(e[l] - i[a], 2);
							r[a] = Math.sqrt(s / n)
						}
						return r
					}
				}, {
					key: "forEach",
					value: function (t, e) {
						var n, r, i, a = t.length,
							o = [],
							s = -1,
							l = [];
						for (r = 0; a > r; r++) o[r] = this.isArray(t[r]) ? t[r].length : -1, o[r] > s && (s = o[r]);
						for (r = 0; s > r; r++) {
							for (n = [], i = 0; a > i; i++) n[i] = o[i] < 0 ? t[i] : t[i][r];
							l[r] = e.apply({
								index: r
							}, n)
						}
						return l
					}
				}, {
					key: "reduce",
					value: function (t, e, n, r, i) {
						var a, o = 0,
							s = t.length;
						for ("number" == typeof e && (o = e, s = n, e = r, n = i); s > o; o++)
							if (n || this.isNumber(t[o])) {
								a = +t[o];
								break
							} for (o++; s > o; o++)(n || this.isNumber(t[o])) && (a = e(a, +t[o], o));
						return a
					}
				}, {
					key: "isArray",
					value: function (t) {
						return "[object Array]" == {}.toString.call(t)
					}
				}, {
					key: "isNumber",
					value: function (t) {
						return null !== t && "" !== t && isFinite(t)
					}
				}, {
					key: "hhvllv",
					value: function (t, e, n) {
						var r = [],
							i = e - 1,
							a = t.length;
						if (e > a) return Array(a);
						if (0 >= e) return this.reduce(t, n);
						if (1 >= e) return t.slice();
						for (; a > i; i++) r[i] = this.reduce(t, i - e + 1, i + 1, n);
						return r
					}
				}]), t
			}();
		e["default"] = i, t.exports = e["default"]
	}, function (t, e) {
		"use strict";

		function n(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			i = function () {
				function t() {
					n(this, t)
				}
				return r(t, null, [{
					key: "pad",
					value: function (t) {
						return 10 > t ? "0" + t : t
					}
				}, {
					key: "dash",
					value: function (t) {
						return t ? t.getUTCFullYear() + "-" + this.pad(t.getUTCMonth() + 1) + "-" + this.pad(t.getUTCDate()) : void 0
					}
				}, {
					key: "new",
					value: function (t) {
						var e = t.substr(0, 4) + "-" + t.substr(4, 2) + "-" + t.substr(6, 2);
						return new Date(e)
					}
				}, {
					key: "getDayCh",
					value: function (t) {
						return {
							1: "周一",
							2: "周二",
							3: "周三",
							4: "周四",
							5: "周五",
							6: "周六",
							7: "周日"
						} [t]
					}
				}, {
					key: "timing",
					value: function (t) {
						return t.substr(8, 4)
					}
				}]), t
			}();
		e["default"] = i, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			o = n(35),
			s = r(o),
			l = n(36),
			u = r(l),
			c = n(37),
			h = r(c),
			f = n(28),
			g = r(f),
			d = function () {
				function t() {
					i(this, t)
				}
				return a(t, null, [{
					key: "formatIF",
					value: function (t, e) {
						var n = t.data,
							r = t.date;
						"string" == typeof e && (e = e.split(","));
						var i = e[(0, u["default"])("TIME")];
						i = i.slice(0, 2) + i.slice(3, 5);
						var a = e[(0, u["default"])("DATE")];
						return a = a.replace(/-/g, ""), r = r && "20" + r.substr(5) || a, {
							data: n,
							date: r,
							status: e[(0, u["default"])("STATUS")],
							symbol: e[(0, u["default"])("NAME")].slice(-6, 0),
							market: "if",
							marketTime: g["default"].marketTime("if"),
							close: 1 * e[(0, u["default"])("CP")],
							open: 1 * e[(0, u["default"])("OP")],
							name: e[(0, u["default"])("NAME")],
							qtTime: i,
							qtDate: a,
							qtPrice: 1 * e[(0, u["default"])("PRICE")],
							qtVolume: 1 * e[(0, u["default"])("VOLUME")],
							qtMaxVal: 1 * e[(0, u["default"])("MAX_VAL")],
							qtMinVal: 1 * e[(0, u["default"])("MIN_VAL")],
							decimalPosition: 1
						}
					}
				}, {
					key: "formatWH",
					value: function (t, e) {
						var n = t.data,
							r = t.date;
						"string" == typeof e && (e = e.split("~"));
						var i = e[(0, h["default"])("TIME")];
						i = i.slice(0, 8);
						var a = e[(0, h["default"])("TIME")].substr(8);
						return a = a.slice(0, 2) + a.slice(2, 4), r = r && "20" + r.substr(5) || i, {
							data: n,
							date: r,
							status: e[(0, h["default"])("STATUS")],
							symbol: e[(0, s["default"])("CODE")],
							market: "wh",
							marketTime: g["default"].marketTime("wh"),
							close: 1 * e[(0, h["default"])("CP")],
							open: 1 * e[(0, h["default"])("OP")],
							name: e[(0, h["default"])("NAME")],
							qtTime: a,
							qtDate: i,
							qtPrice: 1 * e[(0, h["default"])("PRICE")],
							qtVolume: 1 * e[(0, h["default"])("VOLUME")],
							qtMaxVal: 1 * e[(0, h["default"])("MAX_VAL")],
							qtMinVal: 1 * e[(0, h["default"])("MIN_VAL")],
							decimalPosition: 4
						}
					}
				}, {
					key: "formatHS",
					value: function (t, e) {
						if (e.Symbol) return this.formatPushQt(t, e);
						var n = t.data,
							r = t.date;
						"string" == typeof e && (e = e.split("~"));
						var i = e[(0, s["default"])("MK")],
							a = e[(0, s["default"])("TIME")].slice(0, 8);
						r = r || a;
						var o = e[(0, s["default"])("STATUS")],
							l = t.fqFactor;
						return {
							data: n,
							date: r,
							symbol: e[(0, s["default"])("CODE")],
							status: o,
							market: i,
							marketTime: g["default"].marketTime(i),
							close: this.calFqQt(l, e[(0, s["default"])("CP")]),
							open: this.calFqQt(l, e[(0, s["default"])("OP")]),
							name: e[(0, s["default"])("NAME")],
							qtTime: e[(0, s["default"])("TIME")].slice(8, 12),
							qtDate: a,
							qtPrice: this.calFqQt(l, e[(0, s["default"])("PRICE")]),
							qtVolume: 1 * e[(0, s["default"])("VOLUME")],
							qtMaxVal: this.calFqQt(l, e[(0, s["default"])("MAX_VAL")]),
							qtMinVal: this.calFqQt(l, e[(0, s["default"])("MIN_VAL")]),
							decimalPosition: e[(0, s["default"])("CODE")].match(/^200|^900/) ? 3 : 2
						}
					}
				}, {
					key: "formatHK",
					value: function (t, e) {
						if (e.Symbol) return this.formatPushQt(t, e);
						var n = t.data,
							r = t.date;
						"string" == typeof e && (e = e.split("~"));
						var i = "hk",
							a = e[(0, s["default"])("TIME")].replace(/\/| |\:/g, ""),
							o = a.slice(8, 12);
						a = a.slice(0, 8), r = r || a;
						var l = t.fqFactor;
						return {
							data: n,
							date: r,
							status: e[(0, s["default"])("STATUS")],
							symbol: e[(0, s["default"])("CODE")],
							market: i,
							marketTime: g["default"].marketTime(i),
							close: this.calFqQt(l, e[(0, s["default"])("CP")]),
							open: this.calFqQt(l, e[(0, s["default"])("OP")]),
							name: e[(0, s["default"])("NAME")],
							qtTime: o,
							qtDate: a,
							qtPrice: this.calFqQt(l, e[(0, s["default"])("PRICE")]),
							qtVolume: 1 * e[(0, s["default"])("VOLUME")],
							qtMaxVal: this.calFqQt(l, e[(0, s["default"])("MAX_VAL")]),
							qtMinVal: this.calFqQt(l, e[(0, s["default"])("MIN_VAL")]),
							decimalPosition: 1 * e[(0, s["default"])("PRICE")] > .5 ? 2 : 3
						}
					}
				}, {
					key: "calFqQt",
					value: function (t, e) {
						var n = 1 * e;
						return t ? n * t : n
					}
				}, {
					key: "formatUS",
					value: function (t, e) {
						if (e.Symbol) return this.formatPushQt(t, e, "us");
						var n = t.data,
							r = t.date,
							i = "us";
						"string" == typeof e && (e = e.split("~"));
						var a = e[(0, s["default"])("STATUS")];
						a = "0" === a ? "" : a;
						var o = e[(0, s["default"])("TIME")].slice(0, 10).replace(/-/g, "");
						return r = r || o, {
							data: n,
							date: r,
							status: a,
							symbol: e[(0, s["default"])("CODE")].replace(/^\./, ""),
							market: "us",
							marketTime: g["default"].marketTime(i),
							close: 1 * e[(0, s["default"])("CP")],
							open: 1 * e[(0, s["default"])("OP")] || 1 * e[(0, s["default"])("CP")],
							name: e[(0, s["default"])("NAME")],
							qtTime: e[(0, s["default"])("TIME")].slice(11, 16).replace(/:/g, ""),
							qtDate: o,
							qtPrice: 1 * e[(0, s["default"])("PRICE")],
							qtVolume: 1 * e[(0, s["default"])("VOLUME")],
							qtMaxVal: 1 * e[(0, s["default"])("MAX_VAL")],
							qtMinVal: 1 * e[(0, s["default"])("MIN_VAL")],
							decimalPosition: 2
						}
					}
				}, {
					key: "formatPushQt",
					value: function (t, e, n) {
						var r = t.data,
							i = t.date;
						n = n || e.Mkt;
						var a = e.TimeStamp.replace(/\/|-| |\:/g, "").slice(0, 8);
						i = i || a;
						var o = e.Status,
							s = t.fqFactor;
						return {
							data: r,
							date: i,
							symbol: e.Symbol,
							status: o,
							market: n,
							marketTime: g["default"].marketTime(n),
							close: this.calFqQt(s, e.PrevClose),
							open: this.calFqQt(s, e.Open),
							name: e.Name,
							qtTime: e.TimeStamp.replace(/\/|-| |\:/g, "").slice(8, 12),
							qtDate: a,
							qtPrice: this.calFqQt(s, e.Price),
							qtVolume: 1 * (e._Vol || e.Vol),
							qtMaxVal: this.calFqQt(s, e.High),
							qtMinVal: this.calFqQt(s, e.Low),
							decimalPosition: e.Symbol.match(/^200|^900/) ? 3 : 2
						}
					}
				}, {
					key: "trend",
					value: function (t, e) {
						var n = t.data,
							r = e.index;
						r && (e = e[0]), "string" == typeof e && (e = e.split("~")), "string" == typeof r && (r = r.split("~"));
						var i = (r ? r : e)[(0, s["default"])("TIME")].replace(/-/g, "").slice(0, 8);
						return {
							data: n,
							qtDate: i,
							qtPrice: 1 * e[(0, s["default"])("PRICE")]
						}
					}
				}, {
					key: "unit",
					value: function (t, e) {
						e = void 0 == e ? 2 : e;
						var n = Math.abs(t);
						return 1e4 > n ? t.toFixed(e) : 1e8 > n ? (t / 1e4).toFixed(2) + "万" : (t / 1e8).toFixed(2) + "亿"
					}
				}, {
					key: "isValidNum",
					value: function (t) {
						return isNaN(t) || t === 1 / 0 || t === -(1 / 0) || t === Number.MAX_VALUE || t === -Number.MAX_VALUE ? !1 : !0
					}
				}]), t
			}();
		e["default"] = d, t.exports = e["default"]
	}, function (t, e) {
		"use strict";

		function n(t) {
			return {
				MK: 0,
				NAME: 1,
				CODE: 2,
				PRICE: 3,
				CP: 4,
				OP: 5,
				TOTAL: 6,
				OUTER_DISC: 7,
				INNER_DISC: 8,
				B1_VAL: 9,
				B1_VOL: 10,
				B2_VAL: 11,
				B2_VOL: 12,
				B3_VAL: 13,
				B3_VOL: 14,
				B4_VAL: 15,
				B4_VOL: 16,
				B5_VAL: 17,
				B5_VOL: 18,
				S1_VAL: 19,
				S1_VOL: 20,
				S2_VAL: 21,
				S2_VOL: 22,
				S3_VAL: 23,
				S3_VOL: 24,
				S4_VAL: 25,
				S4_VOL: 26,
				S5_VAL: 27,
				S5_VOL: 28,
				DETAIL: 29,
				TIME: 30,
				CHANGE: 31,
				CHANGE_RATE: 32,
				MAX_VAL: 33,
				MIN_VAL: 34,
				FORMER: 35,
				VOLUME: 36,
				TURNOVER: 37,
				TURNOVER_RATE: 38,
				PE_RATIO: 39,
				STATUS: 40,
				MAX_VAL_2: 41,
				MIN_VAL_2: 42,
				AMPLITUDE: 43,
				MCCS: 44,
				MARKET_CAP: 45,
				RISE_STOP: 47,
				FALL_STOP: 48,
				VOLUME_RATIO: 49
			} [t]
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e["default"] = n, t.exports = e["default"]
	}, function (t, e) {
		"use strict";

		function n(t) {
			return {
				NAME: 0,
				OP: 1,
				MAX_VAL: 2,
				MIN_VAL: 3,
				PRICE: 4,
				VOLUME: 5,
				TURNOVER: 6,
				THOLD: 7,
				TCL: 8,
				TSE: 9,
				RISE_STOP: 10,
				FALL_STOP: 11,
				YFOT: 12,
				TFOT: 13,
				CP: 14,
				SE: 15,
				HOLD: 16,
				B1_VAL: 17,
				B1_VOL: 18,
				B2_VAL: 19,
				B2_VOL: 20,
				B3_VAL: 21,
				B3_VOL: 22,
				B4_VAL: 23,
				B4_VOL: 24,
				B5_VAL: 25,
				B5_VOL: 26,
				S1_VAL: 27,
				S1_VOL: 28,
				S2_VAL: 29,
				S2_VOL: 30,
				S3_VAL: 31,
				S3_VOL: 32,
				S4_VAL: 33,
				S4_VOL: 34,
				S5_VAL: 35,
				S5_VOL: 36,
				DATE: 37,
				TIME: 38,
				MILLI: 39
			} [t]
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e["default"] = n, t.exports = e["default"]
	}, function (t, e) {
		"use strict";

		function n(t) {
			return {
				MK: 0,
				NAME: 1,
				CODE: 2,
				PRICE: 3,
				VOLUME: 4,
				TIME: 5,
				CP: 6,
				OP: 7,
				MAX_VAL: 8,
				MIN_VAL: 9
			} [t]
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e["default"] = n, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			o = n(12),
			s = r(o),
			l = n(9),
			u = r(l),
			c = function () {
				function t(e, n) {
					i(this, t), this.symbol = e, this.cfg = n
				}
				return a(t, [{
					key: "listen",
					value: function () {
						this.ListenToSource(), this.ListenToQt()
					}
				}, {
					key: "ListenToSource",
					value: function () {
						var t = this;
						this.channel = s["default"].channel(this.symbol);
						var e = this.cfg.outer.id,
							n = e + ".source." + this.type;
						this.subSrc = this.channel.subscribe(n, function (e) {
							t.updateSrc(e)
						})
					}
				}, {
					key: "ListenToQt",
					value: function () {
						var t = this,
							e = this.cfg.outer.id,
							n = e + ".qt." + this.type;
						this.type.match(/year/) || (this.subQt = this.channel.subscribe(n, function (e) {
							t.updateQt(e)
						}))
					}
				}, {
					key: "updateSrc",
					value: function (t) {
						this.data = {}, this.data.sourceData = t, this.data.processData = this._processSrc(t);
						var e = this.type.match(/year/) ? "day" : this.type;
						e.match(/^day|week|month/) && u["default"].data(this.symbol, e + this.cfg.fqType, this.data), this.qt && this.updateQt(this.qt)
					}
				}, {
					key: "updateQt",
					value: function (t) {
						this.qt = t;
						var e = this.type.match(/year/) ? "day" : this.type;
						this.data = u["default"].data(this.symbol)[e + this.cfg.fqType] || this.data, this.data && this.data.processData && (this.data.formatData = this._format(), this.data.calData = this._calculate(), this.publish())

					}
				}, {
					key: "_processSrc",
					value: function (t) {
						return t
					}
				}, {
					key: "_format",
					value: function () {}
				}, {
					key: "_calculate",
					value: function () {}
				}, {
					key: "publish",
					value: function () {
						var t = this.cfg,
							e = t.outer.id,
							n = this.type;
						this.channel.publish([e, ".data.", n].join(""), this.data)
					}
				}, {
					key: "stop",
					value: function () {
						this.data = null, this.subSrc && this.subSrc.unsubscribe(), this.subQt && this.subQt.unsubscribe()
					}
				}, {
					key: "start",
					value: function () {
						this.stop();
						var t = this.cfg;
						this.type = t.current, this.fqType = t.fqType;
						var e = this.type,
							n = this.fqType;
						this.type.match(/year/) && (e = "day"), this.type.match(/m5|m15|m30|m60/) && (n = ""), this.data = u["default"].data(this.symbol)[e + n], this.listen()
					}
				}]), t
			}();
		e["default"] = c, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function a(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			s = function (t, e, n) {
				for (var r = !0; r;) {
					var i = t,
						a = e,
						o = n;
					s = u = l = void 0, r = !1, null === i && (i = Function.prototype);
					var s = Object.getOwnPropertyDescriptor(i, a);
					if (void 0 !== s) {
						if ("value" in s) return s.value;
						var l = s.get;
						if (void 0 === l) return;
						return l.call(o)
					}
					var u = Object.getPrototypeOf(i);
					if (null === u) return;
					t = u, e = a, n = o, r = !0
				}
			},
			l = n(23),
			u = r(l),
			c = n(14),
			h = r(c),
			f = n(9),
			g = r(f),
			d = n(22),
			p = (r(d), n(17)),
			A = r(p),
			C = function (t) {
				function e(t, n) {
					i(this, e), s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t), this.symbol = t, this.cfg = g["default"].cfg(t)[n]
				}
				return a(e, t), o(e, [{
					key: "_init",
					value: function () {
						var t = (this.symbol, this.cfg),
							e = (this.type = t.current, this.getParams()),
							n = e.handler,
							r = e.url,
							i = e.frequency;
						this.FREQUENCY = i, this.handler = n, this.url = r
					}
				}, {
					key: "getParams",
					value: function () {
						var t = this.symbol.substr(2),
							e = this.type,
							n = void 0,
							r = void 0,
							i = void 0;
						switch (e) {
							case "minute":
								r = "min_data", n = ["//data.gtimg.cn/flashdata/indexfuture/minute/if", t, ".js"].join(""), i = h["default"].LOOP_FREQUENCY.MID_LOOP;
								break;
							case "day":
							case "year1":
							case "year3":
							case "year5":
								r = "latest_daily_data", n = ["//data.gtimg.cn/flashdata/indexfuture/latest/daily/if", t, ".js"].join(""), i = h["default"].LOOP_FREQUENCY.LONG_LOOP;
								break;
							case "week":
							case "month":
								r = e + "ly_data", n = ["//data.gtimg.cn/flashdata/indexfuture/", e, "ly/if", t, ".js"].join(""), i = h["default"].LOOP_FREQUENCY.LONG_LOOP
						}
						return {
							frequency: i,
							url: n,
							handler: r
						}
					}
				}, {
					key: "_getSrcData",
					value: function (t) {
						var e = {
							minute: this.getMinuteSrcData,
							year1: this.getDaySrcData,
							year3: this.getDaySrcData,
							year5: this.getDaySrcData,
							day: this.getDaySrcData,
							week: this.getWMSrcData,
							month: this.getWMSrcData
						} [this.type];
						return e.call(this, t)
					}
				}, {
					key: "getMinuteSrcData",
					value: function () {
						this.data = window[this.handler], this.publish()

					}
				}, {
					key: "getWMSrcData",
					value: function () {
						var t = window[this.handler].split("\n");
						t.shift(), t.pop(), this.data = t, this.publish()
					}
				}, {
					key: "getDaySrcData",
					value: function (t) {
						if (t !== this._counter) return void(this.data = null);
						var e = window[this.handler].split("\n");
						e.shift(), e.pop(), this.setYearList(e.shift()), this.data = e, this.getNextYearDayData(t)
					}
				}, {
					key: "getData",
					value: function (t, e) {
						var n = this;
						t = t || this._counter, A["default"].getSync(e || this.url, function (e) {
							n._getSrcData(t)
						})
					}
				}, {
					key: "getNextYearDayData",
					value: function (t) {
						var e = this;
						if (t !== this._counter) return void(this.data = null);
						var n = this.currentNum,
							r = this.all;
						if (n == r) return void this.publish();
						var i = this.yearList,
							a = (i.length, this.nextI),
							o = i[a][0],
							s = this.yearData,
							l = ["//data.gtimg.cn/flashdata/indexfuture/daily/", o, "/if", this.symbol.substr(2), ".js"].join(""),
							u = "daily_data_" + o;
						A["default"].getSync(l, function () {
							var r = window[u].split("\n");
							r.shift(), r.pop(), s = r.concat(s), e.yearData = s;
							var i = s.length;
							i > n && (e.data = s, e.currentNum = i, e.publish()), e.nextI--, e.getNextYearDayData(t)
						})
					}
				}, {
					key: "setYearList",
					value: function (t) {
						this.yearList = [];
						var e = t.split(" ");
						this.currentNum = 1 * e[0].substr(4), this.all = 1 * e[1].substr(6), this.yearData = [];
						for (var n = e.length, r = 3; n > r; r++) {
							var i = e[r].split(":");
							i[1] *= 1, this.yearList.push(i)
						}
						this.nextI = this.yearList.length - 1
					}
				}]), e
			}(u["default"]);
		e["default"] = C, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function a(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			s = function (t, e, n) {
				for (var r = !0; r;) {
					var i = t,
						a = e,
						o = n;
					s = u = l = void 0, r = !1, null === i && (i = Function.prototype);
					var s = Object.getOwnPropertyDescriptor(i, a);
					if (void 0 !== s) {
						if ("value" in s) return s.value;
						var l = s.get;
						if (void 0 === l) return;
						return l.call(o)
					}
					var u = Object.getPrototypeOf(i);
					if (null === u) return;
					t = u, e = a, n = o, r = !0
				}
			},
			l = n(27),
			u = r(l),
			c = n(29),
			h = r(c),
			f = n(34),
			g = r(f),
			d = n(38),
			p = r(d),
			A = n(9),
			C = r(A),
			v = function (t) {
				function e(t, n) {
					i(this, e);
					var r = C["default"].cfg(t)[n];
					s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t, r)
				}
				return a(e, t), o(e, [{
					key: "_processSrc",
					value: function (t) {
						var e = void 0;
						return e = "minute" === this.type ? this.processMinuteData : this.processKlineData, e.call(this, t)
					}
				}, {
					key: "processMinuteData",
					value: function (t) {
						t = t.split("\n"), "" == t[0] && t.shift(0);
						var e = t.shift(0),
							n = u["default"].min(t, "if");
						return {
							data: n,
							date: e
						}
					}
				}, {
					key: "processKlineData",
					value: function (t) {
						var e = u["default"].klineIF(t);
						return {
							data: e
						}
					}
				}, {
					key: "_format",
					value: function () {
						var t = this.data,
							e = this.qt,
							n = t.processData;
						return g["default"].formatIF(n, e)
					}
				}, {
					key: "_calculate",
					value: function () {
						var t = this.type,
							e = this.data,
							n = e.formatData,
							r = this.data.calData;
						if (!this.symbol.match(n.symbol)) return r;
						switch (t) {
							case "minute":
								r = h["default"].calMinute(n);
								break;
							case "day":
								r || (r = h["default"].kline(n)), n.data = r, r = h["default"].klineQT(n);
								break;
							case "month":
							case "week":
								r || (r = h["default"].kline(n)), n.data = r, r = h["default"].klineQT(n)
						}
						return r
					}
				}]), e
			}(p["default"]);
		e["default"] = v, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function a(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			s = function (t, e, n) {
				for (var r = !0; r;) {
					var i = t,
						a = e,
						o = n;
					s = u = l = void 0, r = !1, null === i && (i = Function.prototype);
					var s = Object.getOwnPropertyDescriptor(i, a);
					if (void 0 !== s) {
						if ("value" in s) return s.value;
						var l = s.get;
						if (void 0 === l) return;
						return l.call(o)
					}
					var u = Object.getPrototypeOf(i);
					if (null === u) return;
					t = u, e = a, n = o, r = !0
				}
			},
			l = n(23),
			u = r(l),
			c = n(42),
			h = (r(c), n(14)),
			f = r(h),
			g = n(9),
			d = r(g),
			p = n(17),
			A = (r(p), n(33)),
			C = (r(A), function (t) {
				function e(t, n) {
					i(this, e), s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t), this.symbol = t, this.cfg = d["default"].cfg(t)[n]
				}
				return a(e, t), o(e, [{
					key: "_init",
					value: function () {
						var t = (this.symbol, this.cfg),
							e = this.type = t.current;
						this.urlType = e, this.fqType = t.fqType;
						/year/.test(e) && (this.urlType = "day"), this.isFund = "fund" === t.market ? "fund" : "";
						var n = this.getParams(),
							r = n.handler,
							i = n.url,
							a = n.frequency;
						this.FREQUENCY = a, this.handler = r, this.url = i
					}
				}, {
					key: "getParams",
					value: function () {
						// debugger
						var t = this.symbol,
							e = this.type,
							n = this.urlType,
							r = this.fqType,
							i = void 0,
							a = void 0,
							o = void 0;
						switch (e) {
							case "minute":
								a = "min_data_" + t, i = ["//web.ifzq.gtimg.cn/appstock/app/minute/query?_var=", a, "&code=", t].join(""), o = f["default"].LOOP_FREQUENCY.MID_LOOP;
								break;
							case "fdays":
								// debugger
								a = "fdays_data_" + t, i = ["//web.ifzq.gtimg.cn/appstock/app/day/query?_var=", a, "&code=", t].join(""), o = f["default"].LOOP_FREQUENCY.MID_LOOP;
								break;
							case "day":
							case "week":
							case "month":
							case "year1":
							case "year3":
							case "year5":
								a = "kline_" + n + r, i = this.getKlineUrl(), o = f["default"].LOOP_FREQUENCY.LONG_LOOP;
								break;
							case "m5":
							case "m15":
							case "m30":
							case "m60":
								a = e + "_today", i = ["//ifzq.gtimg.cn/appstock/app/kline/mkline?param=" + this.symbol, e, "", 320].join(",") + "&_var=" + a, o = f["default"].LOOP_FREQUENCY[e.toUpperCase() + "_LOOP"]
						}
						return {
							frequency: o,
							url: i,
							handler: a
						}
					}
				}, {
					key: "_getSrcData",
					value: function (t, e) {
						var n = void 0,
							r = this.type;
						return n = "minute" === r || "fdays" === r ? this.getMinuteSrcData : r.match(/m5|m15|m30|m60/) ? this.getMMSrcData : this.getKlineSrcData, n.call(this, t, e)
					}
				},
				{
					key: "getMinuteSrcData",
					value: function () {
						// debugger
								this.data = window[this.handler],this.publish()

					}
				}, {
					key: "getMMSrcData",
					value: function (t) {
						var e = this.symbol,
							n = window[this.handler].data[e];
						n.qt[e];
						this.data = n[this.type], this.publish()

					}
				}, {
					key: "getKlineSrcData",
					value: function (t, e) {
						var n = this,
							r = this.symbol;
						e = e || this.handler;
						var i = window[e].data[r],
							a = i.qt[r],
							o = i[this.fqType + this.urlType] || i[this.urlType],
							s = this.urlType,
							l = this.trend;
						if (window[e].data[r].prec.length > 1) {
							window['prec'] = Number(window[e].data[r].prec)
						};
						if (!l || !l.length) return this.data = {
							data: o,
							qt: a
						}, void this.publish();
						var u = this.trend.o.trendYearList[s],
							c = [],
							h = void 0,
							f = u[0][0];
						if (this.fetchYear ? ! function () {
								for (var t = 0, e = o.length; e > t; t++) {
									var r = o[t][0].slice(0, 4);
									r !== h && r >= f && c.push([r, t]), h = r
								}
								var i = 0,
									a = c[i],
									s = c.length;
								u.forEach(function (t) {
									if (!(i >= c.length) && t[0] === a[0]) {
										var e = a[1],
											r = i + 1 >= s ? o.length : c[i + 1][1];
										t.data = o.slice(e, r), t[1] = !0;
										var l = void 0;
										n.fetchYear.forEach(function (t, e) {
											t === a[0] && (l = e)
										}), n.fetchYear.splice(l, 1), i++, a = c[i]
									}
								})
							}() : ! function () {
								for (var t = 0, e = o.length; e > t; t++) {
									var n = o[t][0].slice(0, 4);
									n !== h && n >= f && c.push([n, t]), h = n
								}
								var r = 0,
									i = c[r],
									a = c.length;
								u.forEach(function (t) {
									if (t[0] === i[0]) {
										var e = i[1],
											n = r + 1 >= a ? o.length : c[r + 1][1];
										t.data = o.slice(e, n), t[1] = 0 == r ? o[0][0].replace(/-/g, "") : !0, r++, i = c[r]
									}
								})
							}(), !this.fetchYear || !this.fetchYear.length) {
							var g = this.mergeYearData();
							this.data = {
								data: g,
								qt: a
							}, this.publish()
						}
					}
				}, {
					key: "getKlineUrl",
					value: function () {
						for (var t = arguments.length, e = Array(t), n = 0; t > n; n++) e[n] = arguments[n];
						var r = e.length;
						r || (e = "");
						var i = this.symbol,
							a = this.urlType,
							o = this.fqType,
							s = "kline_" + a + o,
							l = this.isFund,
							u = f["default"].FIRST_BATCH_TOTAL * (2 == r ? 2 : 1),
							c = e ? e[0] + "-01-01" : "",
							h = e ? e[r - 1] + "-12-31" : "";
						return o ? ["https://proxy.finance.qq.com/ifzqgtimg/appstock/app/newfqkline/get?_var=" + s + "&param=" + i, a, c, h, u, o].join(",") : ["https://proxy.finance.qq.com/ifzqgtimg/appstock/app/newkline/newkline?_var=" + s + "&param=" + i, a, c, h, u, l].join(",")
					}
				}]), e
			}(u["default"]));
		e["default"] = C, t.exports = e["default"]
	}, function (t, e) {
		"use strict";

		function n(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			i = function () {
				function t() {
					n(this, t)
				}
				return r(t, null, [{
					key: "split",
					value: function (t) {
						var e = {};
						return t.forEach(function (t) {
							var n = typeof t;
							switch (n) {
								case "object":
									Array.isArray(t) ? n = "array" : t instanceof Date && (n = "date");
									break;
								case "string":
									/http:\/\//.test(t) && (n = "url")
							}
							n && e[n] ? e[n].push(t) : e[n] = [t]
						}), e
					}
				}]), t
			}();
		e["default"] = i, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function a(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			s = function (t, e, n) {
				for (var r = !0; r;) {
					var i = t,
						a = e,
						o = n;
					s = u = l = void 0, r = !1, null === i && (i = Function.prototype);
					var s = Object.getOwnPropertyDescriptor(i, a);
					if (void 0 !== s) {
						if ("value" in s) return s.value;
						var l = s.get;
						if (void 0 === l) return;
						return l.call(o)
					}
					var u = Object.getPrototypeOf(i);
					if (null === u) return;
					t = u, e = a, n = o, r = !0
				}
			},
			l = n(27),
			u = r(l),
			c = n(34),
			h = r(c),
			f = n(29),
			g = r(f),
			d = n(38),
			p = r(d),
			A = n(9),
			C = r(A),
			v = function (t) {
				function e(t, n) {
					i(this, e);
					var r = C["default"].cfg(t)[n];
					s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t, r)
				}
				return a(e, t), o(e, [{
					key: "_processSrc",
					value: function (t) {
						var e = this.type,
							n = void 0;
						return n = "minute" === e ? this.processMinuteData : "fdays" === e ? this.processFDaysData : e.match(/m5|m15|m30|m60/) ? this.processMMData : this.processKlineData,n.call(this, t)
					}
				}, {
					//取出数据
					key: "processMinuteData",
					value: function (t) {
						var e = this.symbol,
							n = t.data[e].qt[e];
						this.qt = n;
						var r = t.data[e].data.date,
							i = t.data[e].data.data;
						return i = u["default"].min(i, e.substr(0, 2)), {
							data: i,
							date: r
						}

					}
				}, {
					key: "processFDaysData",
					value: function (t) {
						var e = this.symbol,
							n = t.data[e].qt[e];
						this.qt = n;
						var r = t.data[e].data;
						return r = u["default"].fDays(r, this.symbol.substr(0, 2)), {
							data: r
						}
					}
				}, {
					key: "processMMData",
					value: function (t) {
						var e = u["default"].kline(t);
						return {
							data: e
						}
					}
				}, {
					key: "processKlineData",
					value: function (t) {
						var e = t.qt;
						this.qt = e;
						var n = u["default"].kline(t.data);
						return "hfq" === this.cfg.fqType && (n.fqFactor = this.calFqFactor(n, e)), {
							data: n,
							fqFactor: n.fqFactor
						}
					}
				}, {
					key: "calFqFactor",
					value: function (t, e) {
						var n = t.length ? t[t.length - 1] : [],
							r = n[0],
							i = e[30].replace(/-|:|\//g, "").slice(0, 8);
						return i === r ? n[2] / e[3] : void 0
					}
				}, {
					key: "_format",
					value: function () {
						var t = this.data,
							e = this.qt,
							n = t.processData;
						return h["default"].formatHS(n, e)
					}
				}, {
					key: "_calculate",
					value: function () {
						var t = this.type,
							e = this.data,
							n = e.formatData,
							r = this.data.calData;
						if (!this.symbol.match(n.symbol)) return r;
						switch (t) {
							case "minute":
								r = g["default"].calMinute(n);
								break;
							case "fdays":
								r = g["default"].calFDays(n);
								break;
							case "day":
								r || (r = g["default"].kline(n)), n.data = r, r = g["default"].klineQT(n);
								break;
							case "month":
							case "week":
								r || (r = g["default"].kline(n)), n.data = r, r = g["default"].klineQT(n, t);
								break;
							case "year1":
							case "year3":
							case "year5":
								r || (r = g["default"].kline(n));
								break;
							case "m5":
							case "m15":
							case "m30":
							case "m60":
								r || (r = g["default"].calMKline(n)), n.data = r, r = g["default"].calMklineQT(n, t)
						}
						return r
					}
				}]), e
			}(p["default"]);
		e["default"] = v, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function a(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			s = function (t, e, n) {
				for (var r = !0; r;) {
					var i = t,
						a = e,
						o = n;
					s = u = l = void 0, r = !1, null === i && (i = Function.prototype);
					var s = Object.getOwnPropertyDescriptor(i, a);
					if (void 0 !== s) {
						if ("value" in s) return s.value;
						var l = s.get;
						if (void 0 === l) return;
						return l.call(o)
					}
					var u = Object.getPrototypeOf(i);
					if (null === u) return;
					t = u, e = a, n = o, r = !0
				}
			},
			l = n(23),
			u = r(l),
			c = n(42),
			h = (r(c), n(14)),
			f = r(h),
			g = n(9),
			d = r(g),
			p = function (t) {
				function e(t, n) {
					i(this, e), s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t), this.symbol = t, this.cfg = d["default"].cfg(t)[n]
				}
				return a(e, t), o(e, [{
					key: "_init",
					value: function () {
						var t = (this.symbol, this.cfg),
							e = this.type = t.current;
						this.fqType = t.fqType, this.urlType = e;
						/year/.test(e) && (this.urlType = "day");
						var n = this.getParams(),
							r = n.handler,
							i = n.url,
							a = n.frequency;
						this.FREQUENCY = a, this.handler = r, this.url = i
					}
				}, {
					key: "getParams",
					value: function () {
						var t = this.symbol,
							e = this.type,
							n = this.urlType,
							r = this.fqType,
							i = void 0,
							a = void 0,
							o = void 0;
						switch (e) {
							case "minute":
								a = "min_data_" + t, i = ["//web.ifzq.gtimg.cn/appstock/app/hkMinute/query?_var=", a, "&code=", t].join(""), o = f["default"].LOOP_FREQUENCY.MID_LOOP;
								break;
							case "fdays":
								a = "fdays_data_" + t, i = ["//web.ifzq.gtimg.cn/appstock/app/day/query?_var=", a, "&code=", t].join(""), o = f["default"].LOOP_FREQUENCY.MID_LOOP;
								break;
							case "day":
							case "week":
							case "month":
							case "year1":
							case "year3":
							case "year5":
								a = "kline_" + n + r, i = this.getKlineUrl(), o = f["default"].LOOP_FREQUENCY.LONG_LOOP
						}
						return {
							frequency: o,
							url: i,
							handler: a
						}
					}
				}, {
					key: "_getSrcData",
					value: function (t, e) {
						var n = void 0,
							r = this.type;
						return n = "minute" === r || "fdays" === r ? this.getMinuteSrcData : this.getKlineSrcData, n.call(this, t, e)
					}
				}, {
					key: "getMinuteSrcData",
					value: function () {
						this.data = window[this.handler], this.publish()
					}
				}, {
					key: "getKlineSrcData",
					value: function (t, e) {
						var n = this,
							r = this.symbol;
						e = e || this.handler;
						var i = window[e].data[r],
							a = i.qt[r],
							o = i[this.fqType + this.urlType] || i[this.urlType],
							s = this.urlType,
							l = this.trend;
						if (!l || !l.length) return this.data = {
							data: o,
							qt: a
						}, void this.publish();
						var u = this.trend.o.trendYearList[s],
							c = [],
							h = void 0,
							f = u[0][0];
						if (this.fetchYear ? ! function () {
								for (var t = 0, e = o.length; e > t; t++) {
									var r = o[t][0].slice(0, 4);
									r !== h && r >= f && c.push([r, t]), h = r
								}
								var i = 0,
									a = c[i],
									s = c.length;
								u.forEach(function (t) {
									if (!(i >= c.length) && t[0] === a[0]) {
										var e = a[1],
											r = i + 1 >= s ? o.length : c[i + 1][1];
										t.data = o.slice(e, r), t[1] = !0;
										var l = void 0;
										n.fetchYear.forEach(function (t, e) {
											t === a[0] && (l = e)
										}), n.fetchYear.splice(l, 1), i++, a = c[i]
									}
								})
							}() : ! function () {
								for (var t = 0, e = o.length; e > t; t++) {
									var n = o[t][0].slice(0, 4);
									n !== h && n >= f && c.push([n, t]), h = n
								}
								var r = 0,
									i = c[r],
									a = c.length;
								u.forEach(function (t) {
									if (t[0] === i[0]) {
										var e = i[1],
											n = r + 1 >= a ? o.length : c[r + 1][1];
										t.data = o.slice(e, n), t[1] = 0 == r ? o[0][0].replace(/-/g, "") : !0, r++, i = c[r]
									}
								})
							}(), !this.fetchYear || !this.fetchYear.length) {
							var g = this.mergeYearData();
							this.data = {
								data: g,
								qt: a
							}, this.publish()
						}
					}
				}, {
					key: "getKlineUrl",
					value: function () {
						for (var t = arguments.length, e = Array(t), n = 0; t > n; n++) e[n] = arguments[n];
						var r = e.length;
						r || (e = "");
						var i = this.symbol,
							a = (this.type, this.urlType),
							o = this.fqType,
							s = "kline_" + a + o,
							l = f["default"].FIRST_BATCH_TOTAL * (2 == r ? 2 : 1),
							u = e ? e[0] + "-01-01" : "",
							c = e ? e[r - 1] + "-12-31" : "";
						return this.cfg.isIndex && (o = ""), o ? ["https://proxy.finance.qq.com/ifzqgtimg/appstock/app/hkfqkline/get?_var=" + s + "&param=" + i, a, u, c, l, o].join(",") : ["https://proxy.finance.qq.com/ifzqgtimg/appstock/app/newkline/newkline?_var=" + s + "&param=" + i, a, u, c, l, ""].join(",")
					}
				}]), e
			}(u["default"]);
		e["default"] = p, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function a(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			s = function (t, e, n) {
				for (var r = !0; r;) {
					var i = t,
						a = e,
						o = n;
					s = u = l = void 0, r = !1, null === i && (i = Function.prototype);
					var s = Object.getOwnPropertyDescriptor(i, a);
					if (void 0 !== s) {
						if ("value" in s) return s.value;
						var l = s.get;
						if (void 0 === l) return;
						return l.call(o)
					}
					var u = Object.getPrototypeOf(i);
					if (null === u) return;
					t = u, e = a, n = o, r = !0
				}
			},
			l = n(27),
			u = r(l),
			c = n(34),
			h = r(c),
			f = n(29),
			g = r(f),
			d = n(38),
			p = r(d),
			A = n(9),
			C = r(A),
			v = function (t) {
				function e(t, n) {
					i(this, e);
					var r = C["default"].cfg(t)[n];
					s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t, r)
				}
				return a(e, t), o(e, [{
					key: "_processSrc",
					value: function (t) {
						var e = this.type,
							n = void 0;
						return n = "minute" === e ? this.processMinuteData : "fdays" === e ? this.processFDaysData : this.processKlineData, n.call(this, t)
					}
				}, {
					key: "processMinuteData",
					value: function (t) {
						var e = this.symbol,
							n = t.data[e].qt[e];
						this.qt = n;
						var r = t.data[e].data.date,
							i = t.data[e].data.data;
						return i.cfg = this.cfg, i = u["default"].min(i, "hk"), {
							data: i,
							date: r
						}
					}
				}, {
					key: "calFqFactor",
					value: function (t, e) {
						var n = t.length ? t[t.length - 1] : [],
							r = n[0],
							i = e[30].replace(/-|:|\//g, "").slice(0, 8);
						return i === r ? n[2] / e[3] : void 0
					}
				}, {
					key: "processFDaysData",
					value: function (t) {
						var e = this.symbol,
							n = t.data[e].qt[e];
						this.qt = n;
						var r = t.data[e].data;
						return r.cfg = this.cfg, r = u["default"].fDays(r, "hk"), {
							data: r
						}
					}
				}, {
					key: "processKlineData",
					value: function (t) {
						var e = t.qt;
						this.qt = e;
						var n = u["default"].kline(t.data);
						return "hfq" === this.cfg.fqType && (n.fqFactor = this.calFqFactor(n, e)), {
							data: n,
							fqFactor: n.fqFactor
						}
					}
				}, {
					key: "_format",
					value: function () {
						var t = this.data,
							e = this.qt,
							n = t.processData,
							r = h["default"].formatHK(n, e);
						return r.qtVolume = this.cfg.isIndex ? 1e4 * r.qtVolume : r.qtVolume, r
					}
				}, {
					key: "_calculate",
					value: function () {
						var t = this.type,
							e = this.data,
							n = e.formatData,
							r = this.data.calData;
						if (!this.symbol.match(n.symbol)) return r;
						switch (t) {
							case "minute":
								r = g["default"].calMinute(n);
								break;
							case "fdays":
								r = g["default"].calFDays(n);
								break;
							case "day":
								r || (r = g["default"].kline(n)), n.data = r, r = g["default"].klineQT(n, t);
								break;
							case "month":
							case "week":
								r || (r = g["default"].kline(n)), n.data = r, r = g["default"].klineQT(n, t);
								break;
							case "year1":
							case "year3":
							case "year5":
								r || (r = g["default"].kline(n)), n.data = r
						}
						return r
					}
				}]), e
			}(p["default"]);
		e["default"] = v, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function a(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			s = function (t, e, n) {
				for (var r = !0; r;) {
					var i = t,
						a = e,
						o = n;
					s = u = l = void 0, r = !1, null === i && (i = Function.prototype);
					var s = Object.getOwnPropertyDescriptor(i, a);
					if (void 0 !== s) {
						if ("value" in s) return s.value;
						var l = s.get;
						if (void 0 === l) return;
						return l.call(o)
					}
					var u = Object.getPrototypeOf(i);
					if (null === u) return;
					t = u, e = a, n = o, r = !0
				}
			},
			l = n(23),
			u = r(l),
			c = n(42),
			h = (r(c), n(14)),
			f = r(h),
			g = n(9),
			d = r(g),
			p = function (t) {
				function e(t, n) {
					i(this, e), s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t), this.symbol = t, this.cfg = d["default"].cfg(t)[n]
				}
				return a(e, t), o(e, [{
					key: "_init",
					value: function () {
						var t = (this.symbol, this.cfg),
							e = this.type = t.current;
						this.fqType = t.fqType, this.urlType = e;
						/year/.test(e) && (this.urlType = "day");
						var n = this.getParams(),
							r = n.handler,
							i = n.url,
							a = n.frequency;
						this.FREQUENCY = a, this.handler = r, this.url = i
					}
				}, {
					key: "getParams",
					value: function () {
						var t = this.symbol,
							e = this.type,
							n = this.urlType,
							r = this.fqType,
							i = void 0,
							a = void 0,
							o = void 0;
						switch (("usDJI" === t || "usIXIC" === t || "usINX" === t) && (t = "us." + t.substr(2)), e) {
							case "minute":
								a = "min_data_" + this.symbol.replace(/[\.-]/g, ""), i = ["//web.ifzq.gtimg.cn/appstock/app/UsMinute/query?_var=", a, "&code=", t].join(""), o = f["default"].LOOP_FREQUENCY.MID_LOOP;
								break;
							case "fdays":
								a = "fdays_data_" + this.symbol.replace(/[\.-]/g, ""), i = ["//web.ifzq.gtimg.cn/appstock/app/dayus/query?_var=", a, "&code=", t].join(""), o = f["default"].LOOP_FREQUENCY.MID_LOOP;
								break;
							case "day":
							case "week":
							case "month":
							case "year1":
							case "year3":
							case "year5":
								a = "kline_" + n + r, i = this.getKlineUrl()
						}
						return {
							frequency: o,
							url: i,
							handler: a
						}
					}
				}, {
					key: "_getSrcData",
					value: function (t, e) {
						var n = void 0,
							r = this.type;
						return n = "minute" === r || "fdays" === r ? this.getMinuteSrcData : this.getKlineSrcData, n.call(this, t, e)
					}
				}, {
					key: "getMinuteSrcData",
					value: function () {
						this.data = window[this.handler], this.publish()
					}
				}, {
					key: "getKlineSrcData",
					value: function (t, e) {
						var n = this;
						e = e || this.handler;
						var r = this.symbol;
						("usDJI" == r || "usIXIC" == r || "usINX" == r) && (r = "us." + r.substr(2));
						var i = window[e].data[r],
							a = i.qt[r],
							o = i[this.fqType + this.urlType] || i[this.urlType],
							s = this.urlType,
							l = this.trend;
						if (!l || !l.length) return this.data = {
							data: o,
							qt: a
						}, void this.publish();
						var u = this.trend.o.trendYearList[s],
							c = [],
							h = void 0,
							f = u[0][0];
						if (this.fetchYear ? ! function () {
								for (var t = 0, e = o.length; e > t; t++) {
									var r = o[t][0].slice(0, 4);
									r !== h && r >= f && c.push([r, t]), h = r
								}
								var i = 0,
									a = c[i],
									s = c.length;
								u.forEach(function (t) {
									if (!(i >= c.length) && t[0] === a[0]) {
										var e = a[1],
											r = i + 1 >= s ? o.length : c[i + 1][1];
										t.data = o.slice(e, r), t[1] = !0;
										var l = void 0;
										n.fetchYear.forEach(function (t, e) {
											t === a[0] && (l = e)
										}), n.fetchYear.splice(l, 1), i++, a = c[i]
									}
								})
							}() : ! function () {
								for (var t = 0, e = o.length; e > t; t++) {
									var n = o[t][0].slice(0, 4);
									n !== h && n >= f && c.push([n, t]), h = n
								}
								var r = 0,
									i = c[r],
									a = c.length;
								u.forEach(function (t) {
									if (t[0] === i[0]) {
										var e = i[1],
											n = r + 1 >= a ? o.length : c[r + 1][1];
										t.data = o.slice(e, n), t[1] = 0 == r ? o[0][0].replace(/-/g, "") : !0, r++, i = c[r]
									}
								})
							}(), !this.fetchYear || !this.fetchYear.length) {
							var g = this.mergeYearData();
							this.data = {
								data: g,
								qt: a
							}, this.publish()
						}
					}
				}, {
					key: "getKlineUrl",
					value: function () {
						for (var t = arguments.length, e = Array(t), n = 0; t > n; n++) e[n] = arguments[n];
						var r = e.length;
						r || (e = "");
						var i = this.symbol,
							a = this.urlType,
							o = this.fqType,
							s = "kline_" + a + o,
							l = f["default"].FIRST_BATCH_TOTAL * (2 == r ? 2 : 1),
							u = e ? e[0] + "-01-01" : "",
							c = e ? e[r - 1] + "-12-31" : "";
						return ("usDJI" == i || "usIXIC" == i || "usINX" == i) && (i = "us." + i.substr(2)), o ? ["https://proxy.finance.qq.com/ifzqgtimg/appstock/app/Usfqkline/get?_var=" + s + "&param=" + i, a, u, c, l, o].join(",") : ["https://proxy.finance.qq.com/ifzqgtimg/appstock/app/newkline/newkline?_var=" + s + "&param=" + i, a, u, c, l, ""].join(",")
					}
				}]), e
			}(u["default"]);
		e["default"] = p, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function a(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			s = function (t, e, n) {
				for (var r = !0; r;) {
					var i = t,
						a = e,
						o = n;
					s = u = l = void 0, r = !1, null === i && (i = Function.prototype);
					var s = Object.getOwnPropertyDescriptor(i, a);
					if (void 0 !== s) {
						if ("value" in s) return s.value;
						var l = s.get;
						if (void 0 === l) return;
						return l.call(o)
					}
					var u = Object.getPrototypeOf(i);
					if (null === u) return;
					t = u, e = a, n = o, r = !0
				}
			},
			l = n(27),
			u = r(l),
			c = n(34),
			h = r(c),
			f = n(29),
			g = r(f),
			d = n(38),
			p = r(d),
			A = n(9),
			C = r(A),
			v = function (t) {
				function e(t, n) {
					i(this, e);
					var r = C["default"].cfg(t)[n];
					s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t, r)
				}
				return a(e, t), o(e, [{
					key: "_processSrc",
					value: function (t) {
						var e = this.type,
							n = void 0;
						return n = "minute" === e ? this.processMinuteData : "fdays" === e ? this.processFDaysData : this.processKlineData, n.call(this, t)
					}
				}, {
					key: "processMinuteData",
					value: function (t) {
						var e = this.symbol;
						e.match(/usDJI$|usIXIC$|usINX$/) && (e = "us." + e.substr(2));
						var n = t.data[e].qt[e];
						this.qt = n;
						var r = t.data[e].data.date,
							i = t.data[e].data.data;
						return i.cfg = this.cfg, i = u["default"].min(i, "us"), {
							data: i,
							date: r
						}
					}
				}, {
					key: "processFDaysData",
					value: function (t) {
						var e = this.symbol;
						e.match(/usDJI$|usIXIC$|usINX$/) && (e = "us." + e.substr(2));
						var n = t.data[e].qt[e];
						this.qt = n;
						var r = t.data[e].data;
						return r.cfg = this.cfg,
							r = u["default"].fDays(r, "us"), {
								data: r
							}
					}
				}, {
					key: "processKlineData",
					value: function (t) {
						var e = t.qt;
						this.qt = e;
						var n = u["default"].kline(t.data);
						return {
							data: n
						}
					}
				}, {
					key: "_format",
					value: function () {
						var t = this.data,
							e = this.qt,
							n = t.processData;
						return h["default"].formatUS(n, e)
					}
				}, {
					key: "_calculate",
					value: function () {
						var t = this.type,
							e = this.data,
							n = e.formatData,
							r = this.data.calData;
						if (!this.symbol.match(n.symbol)) return r;
						switch (t) {
							case "minute":
								r = g["default"].calMinute(n);
								break;
							case "fdays":
								r = g["default"].calFDays(n);
								break;
							case "day":
								r || (r = g["default"].kline(n)), n.data = r, r = g["default"].klineQT(n);
								break;
							case "month":
							case "week":
								r || (r = g["default"].kline(n)), n.data = r, r = g["default"].klineQT(n, t);
								break;
							case "year1":
							case "year3":
							case "year5":
								r || (r = g["default"].kline(n))
						}
						return r
					}
				}]), e
			}(p["default"]);
		e["default"] = v, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function a(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			s = function (t, e, n) {
				for (var r = !0; r;) {
					var i = t,
						a = e,
						o = n;
					s = u = l = void 0, r = !1, null === i && (i = Function.prototype);
					var s = Object.getOwnPropertyDescriptor(i, a);
					if (void 0 !== s) {
						if ("value" in s) return s.value;
						var l = s.get;
						if (void 0 === l) return;
						return l.call(o)
					}
					var u = Object.getPrototypeOf(i);
					if (null === u) return;
					t = u, e = a, n = o, r = !0
				}
			},
			l = n(23),
			u = r(l),
			c = n(14),
			h = r(c),
			f = n(9),
			g = r(f),
			d = n(22),
			p = (r(d), n(17)),
			A = r(p),
			C = function (t) {
				function e(t, n) {
					i(this, e), s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t), this.symbol = t, this.cfg = g["default"].cfg(t)[n]
				}
				return a(e, t), o(e, [{
					key: "_init",
					value: function () {
						var t = (this.symbol, this.cfg),
							e = (this.type = t.current, this.getParams()),
							n = e.handler,
							r = e.url,
							i = e.frequency;
						this.FREQUENCY = i, this.handler = n, this.url = r
					}
				}, {
					key: "getParams",
					value: function () {
						var t = this.symbol,
							e = this.type;
						t.match(/USD/) && (t = t.replace(/USD/, ""));
						var n = void 0,
							r = void 0,
							i = void 0;
						switch (e) {
							case "minute":
								r = "min_data", n = ["//data.gtimg.cn/flashdata/wh/minute/", t.substr(2), ".js"].join(""), i = h["default"].LOOP_FREQUENCY.MID_LOOP;
								break;
							case "day":
							case "year1":
							case "year3":
							case "year5":
								r = "latest_daily_data", n = ["//data.gtimg.cn/flashdata/wh/latest/daily/", t, ".js"].join(""), i = h["default"].LOOP_FREQUENCY.LONG_LOOP;
								break;
							case "week":
							case "month":
								r = e + "ly_data", n = ["//data.gtimg.cn/flashdata/wh/", e, "ly/", t, ".js"].join(""), i = h["default"].LOOP_FREQUENCY.LONG_LOOP
						}
						return {
							frequency: i,
							url: n,
							handler: r
						}
					}
				}, {
					key: "_getSrcData",
					value: function (t) {
						var e = {
							minute: this.getMinuteSrcData,
							day: this.getDaySrcData,
							year1: this.getDaySrcData,
							year3: this.getDaySrcData,
							year5: this.getDaySrcData,
							week: this.getWMSrcData,
							month: this.getWMSrcData
						} [this.type];
						return e.call(this, t)
					}
				}, {
					key: "getMinuteSrcData",
					value: function () {
						this.data = window[this.handler], this.publish()
					}
				}, {
					key: "getWMSrcData",
					value: function () {
						var t = window[this.handler].split("\n");
						t.shift(), t.pop(), this.data = t, this.publish()
					}
				}, {
					key: "getDaySrcData",
					value: function (t) {
						if (t !== this._counter) return void(this.data = null);
						var e = window[this.handler].split("\n");
						e.shift(), e.pop(), this.setYearList(e.shift()), this.data = e, this.getNextYearDayData(t)
					}
				}, {
					key: "getData",
					value: function (t, e) {
						var n = this;
						t = t || this._counter, A["default"].getSync(e || this.url, function (e) {
							n._getSrcData(t)
						})
					}
				}, {
					key: "getNextYearDayData",
					value: function (t) {
						var e = this;
						if (t !== this._counter) return void(this.data = null);
						var n = this.currentNum,
							r = this.all;
						if (n == r) return void this.publish();
						var i = this.yearList,
							a = (i.length, this.nextI);
						if (!(0 > a)) {
							var o = i[a][0],
								s = this.yearData,
								l = this.symbol;
							l.match(/USD/) && (l = l.replace(/USD/, ""));
							var u = ["//data.gtimg.cn/flashdata/wh/daily/", o, "/", l, ".js"].join(""),
								c = "daily_data_" + o;
							A["default"].getSync(u, function () {
								var r = window[c].split("\n");
								r.shift(), r.pop(), s = r.concat(s), e.yearData = s;
								var i = s.length;
								i > n && (e.data = s, e.currentNum = i, e.publish()), e.nextI--, e.getNextYearDayData(t)
							})
						}
					}
				}, {
					key: "setYearList",
					value: function (t) {
						this.yearList = [];
						var e = t.split(" ");
						this.currentNum = 1 * e[0].substr(4), this.all = 1 * e[1].substr(6), this.yearData = [];
						for (var n = e.length, r = 3; n > r; r++) {
							var i = e[r].split(":");
							i[1] *= 1, this.yearList.push(i)
						}
						this.nextI = this.yearList.length - 1
					}
				}]), e
			}(u["default"]);
		e["default"] = C, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function a(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			s = function (t, e, n) {
				for (var r = !0; r;) {
					var i = t,
						a = e,
						o = n;
					s = u = l = void 0, r = !1, null === i && (i = Function.prototype);
					var s = Object.getOwnPropertyDescriptor(i, a);
					if (void 0 !== s) {
						if ("value" in s) return s.value;
						var l = s.get;
						if (void 0 === l) return;
						return l.call(o)
					}
					var u = Object.getPrototypeOf(i);
					if (null === u) return;
					t = u, e = a, n = o, r = !0
				}
			},
			l = n(27),
			u = r(l),
			c = n(29),
			h = r(c),
			f = n(34),
			g = r(f),
			d = n(38),
			p = r(d),
			A = n(9),
			C = r(A),
			v = function (t) {
				function e(t, n) {
					i(this, e);
					var r = C["default"].cfg(t)[n];
					s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t, r)
				}
				return a(e, t), o(e, [{
					key: "_processSrc",
					value: function (t) {
						var e = void 0;
						return e = "minute" === this.type ? this.processMinuteData : this.processKlineData, e.call(this, t)
					}
				}, {
					key: "processMinuteData",
					value: function (t) {
						t = t.split("\n"), "" == t[0] && t.shift(0);
						var e = t.shift(0),
							n = u["default"].min(t, "wh");
						return {
							data: n,
							date: e
						}
					}
				}, {
					key: "processKlineData",
					value: function (t) {
						var e = u["default"].klineIF(t);
						return {
							data: e
						}
					}
				}, {
					key: "_format",
					value: function () {
						var t = this.data,
							e = this.qt,
							n = t.processData;
						return g["default"].formatWH(n, e)
					}
				}, {
					key: "_calculate",
					value: function () {
						var t = this.type,
							e = this.data,
							n = e.formatData,
							r = this.data.calData;
						if (!this.symbol.match(n.symbol)) return r;
						switch (t) {
							case "minute":
								r = h["default"].calMinute(n);
								break;
							case "day":
								r || (r = h["default"].kline(n)), r = h["default"].klineQT(n);
								break;
							case "month":
							case "week":
								r || (r = h["default"].kline(n))
						}
						return r
					}
				}]), e
			}(p["default"]);
		e["default"] = v, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function a(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			s = function (t, e, n) {
				for (var r = !0; r;) {
					var i = t,
						a = e,
						o = n;
					s = u = l = void 0, r = !1, null === i && (i = Function.prototype);
					var s = Object.getOwnPropertyDescriptor(i, a);
					if (void 0 !== s) {
						if ("value" in s) return s.value;
						var l = s.get;
						if (void 0 === l) return;
						return l.call(o)
					}
					var u = Object.getPrototypeOf(i);
					if (null === u) return;
					t = u, e = a, n = o, r = !0
				}
			},
			l = n(23),
			u = r(l),
			c = n(42),
			h = (r(c), n(14)),
			f = r(h),
			g = n(9),
			d = r(g),
			p = n(17),
			A = (r(p), n(33)),
			C = (r(A), function (t) {
				function e(t, n) {
					i(this, e), s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t), this.symbol = t, this.cfg = d["default"].cfg(t)[n]
				}
				return a(e, t), o(e, [{
					key: "_init",
					value: function () {
						var t = (this.symbol, this.cfg),
							e = this.type = t.current;
						this.urlType = e, this.fqType = t.fqType;
						/year/.test(e) && (this.urlType = "day"), this.isFund = "fund" === t.market ? "fund" : "";
						var n = this.getParams(),
							r = n.handler,
							i = n.url,
							a = n.frequency;
						this.FREQUENCY = a, this.handler = r, this.url = i
					}
				}, {
					key: "getParams",
					value: function () {
						var t = this.symbol,
							e = this.type,
							n = this.urlType,
							r = this.fqType,
							i = void 0,
							a = void 0,
							o = void 0;
						switch (e) {
							case "minute":
								a = "min_data_" + t, i = ["//web.ifzq.gtimg.cn/appstock/app/minute/query?_var=", a, "&code=", t].join(""), o = f["default"].LOOP_FREQUENCY.MID_LOOP;
								break;
							case "fdays":
								a = "fdays_data_" + t, i = ["//web.ifzq.gtimg.cn/appstock/app/day/query?_var=", a, "&code=", t].join(""), o = f["default"].LOOP_FREQUENCY.MID_LOOP;
								break;
							case "day":
							case "week":
							case "month":
								a = "kline_" + n + r, i = this.getKlineUrl(), o = f["default"].LOOP_FREQUENCY.LONG_LOOP
						}
						return {
							frequency: o,
							url: i,
							handler: a
						}
					}
				}, {
					key: "_getSrcData",
					value: function (t, e) {
						var n = void 0,
							r = this.type;
						return n = "minute" === r || "fdays" === r ? this.getMinuteSrcData : this.getKlineSrcData, n.call(this, t, e)
					}
				}, {
					key: "getMinuteSrcData",
					value: function () {
						this.data = window[this.handler], this.publish()
					}
				}, {
					key: "getKlineSrcData",
					value: function (t, e) {
						var n = this,
							r = this.symbol;
						e = e || this.handler;
						var i = window[e].data[r],
							a = i.qt[r],
							o = i[this.fqType + this.urlType] || i[this.urlType],
							s = this.urlType,
							l = this.trend;
						if (!l || !l.length) return this.data = {
							data: o,
							qt: a
						}, void this.publish();
						var u = this.trend.o.trendYearList[s],
							c = [],
							h = void 0,
							f = u[0][0];
						if (this.fetchYear ? ! function () {
								for (var t = 0, e = o.length; e > t; t++) {
									var r = o[t][0].slice(0, 4);
									r !== h && r >= f && c.push([r, t]), h = r
								}
								var i = 0,
									a = c[i],
									s = c.length;
								u.forEach(function (t) {
									if (!(i >= c.length) && t[0] === a[0]) {
										var e = a[1],
											r = i + 1 >= s ? o.length : c[i + 1][1];
										t.data = o.slice(e, r), t[1] = !0;
										var l = void 0;
										n.fetchYear.forEach(function (t, e) {
											t === a[0] && (l = e)
										}), n.fetchYear.splice(l, 1), i++, a = c[i]
									}
								})
							}() : ! function () {
								for (var t = 0, e = o.length; e > t; t++) {
									var n = o[t][0].slice(0, 4);
									n !== h && n >= f && c.push([n, t]), h = n
								}
								var r = 0,
									i = c[r],
									a = c.length;
								u.forEach(function (t) {
									if (t[0] === i[0]) {
										var e = i[1],
											n = r + 1 >= a ? o.length : c[r + 1][1];
										t.data = o.slice(e, n), t[1] = 0 == r ? o[0][0].replace(/-/g, "") : !0, r++, i = c[r]
									}
								})
							}(), !this.fetchYear || !this.fetchYear.length) {
							var g = this.mergeYearData();
							this.data = {
								data: g,
								qt: a
							}, this.publish()
						}
					}
				}, {
					key: "getKlineUrl",
					value: function () {
						for (var t = arguments.length, e = Array(t), n = 0; t > n; n++) e[n] = arguments[n];
						var r = e.length;
						r || (e = "");
						var i = this.symbol,
							a = this.urlType,
							o = this.fqType,
							s = "kline_" + a + o,
							l = this.isFund,
							u = f["default"].FIRST_BATCH_TOTAL * (2 == r ? 2 : 1),
							c = e ? e[0] + "-01-01" : "",
							h = e ? e[r - 1] + "-12-31" : "";
						return o ? ["https://proxy.finance.qq.com/ifzqgtimg/appstock/app/newfqkline/get?_var=" + s + "&param=" + i, a, c, h, u, o].join(",") : ["https://proxy.finance.qq.com/ifzqgtimg/appstock/app/newkline/newkline?_var=" + s + "&param=" + i, a, c, h, u, l].join(",")
					}
				}]), e
			}(u["default"]));
		e["default"] = C, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function a(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			s = function (t, e, n) {
				for (var r = !0; r;) {
					var i = t,
						a = e,
						o = n;
					s = u = l = void 0, r = !1, null === i && (i = Function.prototype);
					var s = Object.getOwnPropertyDescriptor(i, a);
					if (void 0 !== s) {
						if ("value" in s) return s.value;
						var l = s.get;
						if (void 0 === l) return;
						return l.call(o)
					}
					var u = Object.getPrototypeOf(i);
					if (null === u) return;
					t = u, e = a, n = o, r = !0
				}
			},
			l = n(27),
			u = r(l),
			c = n(34),
			h = r(c),
			f = n(29),
			g = r(f),
			d = n(38),
			p = r(d),
			A = n(9),
			C = r(A),
			v = function (t) {
				function e(t, n) {
					i(this, e);
					var r = C["default"].cfg(t)[n];
					s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t, r)
				}
				return a(e, t), o(e, [{
					key: "_processSrc",
					value: function (t) {
						var e = this.type,
							n = void 0;
						return n = "minute" === e ? this.processMinuteData : "fdays" === e ? this.processFDaysData : this.processKlineData, n.call(this, t)
					}
				}, {
					key: "processMinuteData",
					value: function (t) {
						var e = this.symbol,
							n = t.data[e].qt[e];
						this.qt = n;
						var r = t.data[e].data.date,
							i = t.data[e].data.data;
						return i = u["default"].min(i, e.substr(0, 2)), {
							data: i,
							date: r
						}
					}
				}, {
					key: "processFDaysData",
					value: function (t) {
						var e = this.symbol,
							n = t.data[e].qt[e];
						this.qt = n;
						var r = t.data[e].data;
						return r = u["default"].fDays(r, this.symbol.substr(0, 2)), {
							data: r
						}
					}
				}, {
					key: "processMMData",
					value: function (t) {
						var e = u["default"].kline(t);
						return {
							data: e
						}
					}
				}, {
					key: "processKlineData",
					value: function (t) {
						var e = t.qt;
						this.qt = e;
						var n = u["default"].kline(t.data);
						return "hfq" === this.cfg.fqType && (n.fqFactor = this.calFqFactor(n, e)), {
							data: n,
							fqFactor: n.fqFactor
						}
					}
				}, {
					key: "calFqFactor",
					value: function (t, e) {
						var n = t.length ? t[t.length - 1] : [],
							r = n[0],
							i = e[30].replace(/-|:|\//g, "").slice(0, 8);
						return i === r ? n[2] / e[3] : void 0
					}
				}, {
					key: "_format",
					value: function () {
						var t = this.data,
							e = this.qt,
							n = t.processData;
						return h["default"].formatHS(n, e)
					}
				}, {
					key: "_calculate",
					value: function () {
						var t = this.type,
							e = this.data,
							n = e.formatData,
							r = this.data.calData;
						if (!this.symbol.match(n.symbol)) return r;
						switch (t) {
							case "minute":
								r = g["default"].calMinute(n);
								break;
							case "fdays":
								r = g["default"].calFDays(n);
								break;
							case "day":
								r || (r = g["default"].kline(n)), n.data = r, r = g["default"].klineQT(n);
								break;
							case "month":
							case "week":
								r || (r = g["default"].kline(n)), n.data = r, r = g["default"].klineQT(n, t)
						}
						return r
					}
				}]), e
			}(p["default"]);
		e["default"] = v, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function a(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			s = function (t, e, n) {
				for (var r = !0; r;) {
					var i = t,
						a = e,
						o = n;
					s = u = l = void 0, r = !1, null === i && (i = Function.prototype);
					var s = Object.getOwnPropertyDescriptor(i, a);
					if (void 0 !== s) {
						if ("value" in s) return s.value;
						var l = s.get;
						if (void 0 === l) return;
						return l.call(o)
					}
					var u = Object.getPrototypeOf(i);
					if (null === u) return;
					t = u, e = a, n = o, r = !0
				}
			},
			l = n(53),
			u = r(l),
			c = function (t) {
				function e(t, n) {
					i(this, e), s(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t, n), this.symbol = t, this.chartCfg = n
				}
				//绘制价格线
				return a(e, t), o(e, [{
					key: "draw_minute",
					value: function () {
						var t = this.data,
							e = t.price.abs,
							n = t.close,
							r = t.price,
							i = this.coord.minuteArea;
						e = 1e-5 > e ? .01 * n || .01 : e, i.reAxis([0, this.maxX], [n - e, n + e]), this.paperEl.$("minuteEl").attr({
							data: r.data,
							coord: i
						}), this.chartCfg.minuteArea.minuteAvgEl && this.paperEl.$("minuteAvgEl").attr({
							data: r.average,
							coord: i
						})
					}
				}]), e
			}(u["default"]);
		e["default"] = c, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function a(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = function () {
				function t(t, e) {
					var n = [],
						r = !0,
						i = !1,
						a = void 0;
					try {
						for (var o, s = t[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !e || n.length !== e); r = !0);
					} catch (l) {
						i = !0, a = l
					} finally {
						try {
							!r && s["return"] && s["return"]()
						} finally {
							if (i) throw a
						}
					}
					return n
				}
				return function (e, n) {
					if (Array.isArray(e)) return e;
					if (Symbol.iterator in Object(e)) return t(e, n);
					throw new TypeError("Invalid attempt to destructure non-iterable instance")
				}
			}(),
			s = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			l = function (t, e, n) {
				for (var r = !0; r;) {
					var i = t,
						a = e,
						o = n;
					s = u = l = void 0, r = !1, null === i && (i = Function.prototype);
					var s = Object.getOwnPropertyDescriptor(i, a);
					if (void 0 !== s) {
						if ("value" in s) return s.value;
						var l = s.get;
						if (void 0 === l) return;
						return l.call(o)
					}
					var u = Object.getPrototypeOf(i);
					if (null === u) return;
					t = u, e = a, n = o, r = !0
				}
			},
			u = n(9),
			c = r(u),
			h = n(12),
			f = r(h),
			g = n(54),
			d = (r(g), n(56)),
			p = r(d),
			A = n(30),
			C = r(A),
			v = n(58),
			I = r(v),
			m = n(60),
			y = r(m),
			b = n(61),
			_ = r(b),
			x = n(62),
			w = r(x),
			k = n(63),
			T = r(k),
			E = n(64),
			S = r(E),
			D = n(70),
			P = r(D),
			O = n(71),
			M = r(O),
			L = n(72),
			j = r(L),
			F = n(73),
			N = r(F),
			q = n(74),
			R = r(q),
			B = n(75),
			V = (r(B), n(76)),
			X = r(V),
			U = n(77),
			z = r(U),
			W = n(78),
			H = r(W),
			G = n(31),
			Y = r(G),
			$ = n(14),
			Z = r($),
			Q = n(79),
			J = r(Q),
			K = n(69),
			tt = r(K),
			et = n(65),
			nt = r(et),
			rt = n(57),
			it = function (t) {
				function e(t, n) {
					i(this, e), l(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t, n);
					var r = this.cfg,
						a = this.type = r.current;
					this.topic = this.dataTopic = a;
					var o = r.market;
					"fund" == o && (o = t.substr(0, 2)), this.market = o, this.maxX = tt["default"].marketMaxX(o)[a], this.subscribeArray = {}, this.nTimeStep = tt["default"].timeTags(o).step, this.timeTags = tt["default"].timeTags(o).timeTags
				}
				return a(e, t), s(e, [{
					key: "init",
					value: function (t) {
						var e = this;
						this.chartCfg = t || this.chartCfg, this.backEl = this.back.group(), this.paperEl = this.paper.group(), this.paperCmpEl = this.paper.group(), this.staticForeEl = this.fore.group(), this.staticForeCmpEl = this.fore.group(), this.dynamicForeEl = this.fore.group(), this.dynamicForeCmpEl = this.fore.group(), this.loadingEl = this.back.group(), this._isCoordChange() && this.getCoord(), this.setElement(), this._onMouse(), this.listenToData();
						var n = this._getCmpList();
						return n && n.forEach(function (t, n, r) {
							e.listenToData(t.symbol)
						}), this
					}
				}, {
					key: "destroy",
					value: function () {
						if (this._unMouse(), this.stopListenToData(), this.subscribeArray) {
							var t = this.subscribeArray;
							for (var e in t) t[e].unsubscribe()
						}
						this._getCmpList() && (this._getCmpList().maxPct = null), this.clearLayer()
					}
				}, {
					key: "getCoord",
					value: function () {
						this.coord = this.coord || {};
						var t = this.coord,
							e = this.chartCfg,
							n = this.w - 2,
							r = (this.h - 2, 0);
						if (e.titleArea.display) {
							var i = e.titleArea.position,
								a = i.left,
								o = i.top,
								s = i.height,
								l = i.right;
							r += o, t.titleGrid = {
								x: a,
								y: r,
								w: n - a - l,
								h: s
							}, r += s, this._axis("title", t.titleGrid)
						}
						if (e.minuteArea.display) {
							var u = e.minuteArea.position,
								a = u.left,
								c = u.top,
								s = u.height,
								l = u.right;
							r += c;
							var h = 0;
							this.nTimeStep.forEach(function (t) {
								h += t;
							}), h = "minute" === this.type ? h : 5, t.minuteGrid = {
								x: a,
								y: r,
								w: n - a - l,
								h: s,
								m: 8,
								n: h
							};
							var f = 4,
								g = 5;
							t.minuteLabelGrid = {
								x: a - f - g,
								y: r,
								w: a - f - g - 1,
								h: s
							}, t.minuteLabelRightGrid = {
								x: n - a + f + g,
								y: r,
								w: a - f - g - 1,
								h: s
							}, t.minuteLabelBottomGrid = {
								x: a,
								y: r + s + g,
								w: n - a - l,
								h: 40 - 2 * g
							}, r += s, this._axis("minuteArea", t.minuteGrid), this._axis("minuteLabel", t.minuteLabelGrid), this._axis("minuteLabelRight", t.minuteLabelRightGrid), this._axis("minuteLabelBottom", t.minuteLabelBottomGrid)
						}
						if (e.volumeArea.display) {
							var d = e.volumeArea.position,
								a = d.left,
								p = d.top,
								s = d.height,
								l = d.right;
							r += p, t.volumeGrid = {
								x: a,
								y: r,
								w: n - a - l,
								h: s,
								m: 3,
								n: 1
							}, t.volumeBarGrid = {
								x: a + 1,
								y: r,
								w: n - a - l,
								h: s
							};
							var f = 4,
								g = 5;
							t.volumeLabelGrid = {
								x: a - f - g,
								y: r,
								w: a - f - g - 1,
								h: 2 * s / 3
							}, r += s, this._axis("volumeArea", t.volumeBarGrid), this._axis("volumeLabel", t.volumeLabelGrid)
						}
					}
				}, {
					key: "setElement",
					value: function () {
						this.setBack(), this.setPaper(), this.setLoading(), this.setFore()
					}
				}, {
					key: "setBack",
					value: function () {
						var t = this.backEl;
						t.hide();
						var e = this.coord,
							n = Y["default"].border.color,
							r = Y["default"].background.gridColor,
							i = Y["default"].border.inner;
						if (e.title && t.custom(z["default"]).attr({
								coord: e.title,
								stroke: n,
								fill: r,
								r: 4
							}), e.minuteArea && (t.custom(y["default"]).attr(e.minuteGrid).stroke(n).inner(i).fill(r), this.set_timeLabel()), e.volumeArea) {
							t.custom(y["default"]).attr(e.volumeGrid).stroke(n).inner(i).fill(r);
							var a = Z["default"].STOCK_UNIT[this.market];
							"hk" === this.cfg.market && this.cfg.isIndex && (a = "元"), t.text(a, e.volumeArea.l - 10, e.volumeArea.b).textBaseline("middle").textAlign("right").font(Z["default"].FONT).fill(Y["default"].text.label)
						}
					}
				}, {
					//绘制时间轴
					key: "set_timeLabel",
					value: function () {
						this.backEl.custom(T["default"]).attr({
							coord: this.coord.minuteLabelBottom,
							data: this.timeTags,
							step: this.nTimeStep,
							align: "center"
						})
					}
				}, {
					key: "setPaper",
					value: function () {
						var t = this.paperEl,
							e = this.paperCmpEl;
						t.hide(), e.hide();
						var n = this.coord,
							r = this.maxX,
							i = Y["default"].minute.strokeColor,
							a = [Y["default"].minute.gradientColorTop, Y["default"].minute.gradientColorBottom],
							o = Y["default"].minute.avgColor,
							s = Y["default"].text.label,
							l = Y["default"].halfLine,
							u = Y["default"].compareMain.lineWidth + " " + Y["default"].compareMain.color;
						if (n.minuteArea) {
							var c = n.minuteLabel;
							t.custom(S["default"]).id("minuteLabelEl").attr({
								align: "right",
								coord: c,
								color: !1,
								fill: s
							});
							var h = n.minuteLabelRight;
							t.custom(S["default"]).id("minuteLabelRightEl").attr({
								align: "left",
								percentage: !0,
								symbol: !0,
								coord: h
							}), e.custom(S["default"]).id("cmpLabelRightEl").attr({
								align: "left",
								percentage: !0,
								symbol: !0,
								coord: h
							}), t.custom(w["default"]).id("minuteEl").attr({
								maxX: r,
								stroke: i,
								gradient: a
							}), e.custom(w["default"]).id("mainLineEl").attr({
								maxX: r,
								stroke: u
							}), e.group().id("cmpLineEl"), t.custom(w["default"]).id("minuteAvgEl").attr({
								maxX: r,
								stroke: o,
								coord: n.minuteArea,
								gradient: !1
							}), t.custom(_["default"]).id("midlineEl").attr({
								coord: n.minuteGrid,
								stroke: l,
								dash: "",
								position: .5
							})
						}
						var f = n.volumeArea;
						if (f) {
							var g = n.volumeLabel;
							t.custom(S["default"]).id("volumeLabelEl").attr({
								align: "right",
								coord: g,
								color: !1,
								fill: s,
								fixed: 0,
								unit: !0
							}), e.custom(S["default"]).id("volumeLabelEl").attr({
								align: "right",
								coord: g,
								color: !1,
								fill: s,
								fixed: 0,
								unit: !0
							}), t.custom(P["default"]).id("volumeEl").attr({
								maxX: r,
								coord: f
							}), e.custom(P["default"]).id("volumeEl").attr({
								maxX: r,
								coord: f
							})
						}
					}
				}, {
					key: "setLoading",
					value: function () {
						this.loading = this.loadingEl.custom(p["default"]).x(this.w / 2).y(this.h / 2)
					}
				}, {
					key: "setFore",
					value: function () {
						var t = this.staticForeEl,
							e = this.staticForeCmpEl,
							n = this.dynamicForeEl,
							r = this.dynamicForeCmpEl;
						t.hide(), n.hide(), e.hide(), r.hide();
						var i = this.coord,
							a = (this.maxX, Y["default"].title.text),
							o = Y["default"].cross.color,
							s = Y["default"].minute.dotColor,
							l = Y["default"].minute.dotFill,
							u = (Y["default"].cross.color, Y["default"].background.minuteGrid, i.title);
						u && (t.custom(H["default"]).id("titleTextEl").attr({
							coord: u,
							fill: a,
							market: this.cfg.market
						}), e.custom(X["default"]).id("titleCmpEl").attr({
							coord: u,
							outerId: this.cfg.outer.id,
							click: !!this.chartCfg.titleArea.cmpPanelType
						}));
						var c = i.minuteArea;
						c && (n.custom(M["default"]).id("minCrossEl").attr({
							coord: c,
							stroke: o
						}).setAttr("z-index", 20), r.custom(M["default"]).id("mainCrossEl").attr({
							coord: c,
							stroke: o
						}).setAttr("z-index", 20), r.group().id("cmpCrossEl").setAttr("z-index", 20), n.custom(R["default"]).id("dotMinEl").attr({
							coord: c,
							r: 3,
							stroke: s,
							fill: l
						}).setAttr("z-index", 50), r.custom(R["default"]).id("mainDotEl").attr({
							coord: c,
							r: 3,
							stroke: s,
							fill: l
						}).setAttr("z-index", 50), r.group().id("cmpDotEl").setAttr("z-index", 50), n.custom(j["default"]).id("crossBoxEl").attr({
							coord: c,
							position: "LRB",
							padding: 4,
							boxWidth: i.minuteLabel.width
						}).setAttr("z-index", 90), r.custom(j["default"]).id("crossBoxEl").attr({
							coord: c,
							position: "LRB",
							padding: 4,
							boxWidth: i.minuteLabel.width
						}).setAttr("z-index", 99), r.group().id("cmpCrossBoxEl").setAttr("z-index", 90));
						var h = i.volumeArea;
						h && (n.custom(M["default"]).id("volCrossEl").attr({
							coord: h,
							stroke: o
						}).setAttr("z-index", 20), n.rect(0, 0, 0, 0).id("rectVolEl"), r.custom(M["default"]).id("volCrossEl").attr({
							coord: h,
							stroke: o
						}).setAttr("z-index", 20), r.rect(0, 0, 0, 0).id("rectVolEl"))
					}
				}, {
					key: "listenToData",
					value: function (t) {
						var e = this;
						t = t || this.symbol;
						var n = f["default"].channel(t),
							r = n.subscribe(this.cfg.outer.id + ".data." + this.type, function (n) {
								c["default"].data(t, e.type, n), e.drawAll()
							});
						this.subscribeArray[t] = r
					}
				}, {
					key: "stopListenToData",
					value: function (t) {
						t = t || this.symbol, this.subscribeArray[t] && this.subscribeArray[t].unsubscribe()
					}
				}, {
					key: "_over",
					value: function (t, e) {
						this.data && (this._getCmpList() ? this.showDynamicForeCmp(t, e) : this.showDynamicFore(t, e))
					}
				}, {
					key: "_out",
					value: function () {
						this.data && (this.dynamicForeEl.hide(), this.dynamicForeCmpEl.hide(), this._getCmpList() ? this.showStaticForeCmp() : this.showStaticFore())
					}
				}, {
					key: "drawAll",
					value: function () {
						if (this.showBack(), this.loading.start(), this.data = this._getData(this.symbol), this.data) {
							if (this.loading.stop(), this._getCmpList()) this.compareMax(), this.showPaperCmp(), this.overState ? this.showDynamicForeCmp(this.overX, this.overY) : this.showStaticForeCmp();
							else {
								if ("D" === this.data.status) return this.draw_status(), void this.fore.show();
								this.showPaper(), this.overState ? this.showDynamicFore(this.overX, this.overY) : this.showStaticFore()
							}
							this.cfg.cb && (this.cfg.cb(), c["default"].cfg(this.symbol, {
								outer: this.cfg.outer,
								cb: null
							}), this.cfg.cb = null)
						}
					}
				}, {
					key: "showBack",
					value: function () {
						this.backEl && this.backEl.show()
					}
				}, {
					key: "showPaper",
					value: function () {
						this.paperEl && (this.coord.minuteArea && (this.draw_minuteLabel(), this.draw_minuteLabelRight(), this.draw_minute(), "fdays" === this.type && this.draw_timeLabel()), this.coord.volumeArea && (this.draw_volumeLabel(), this.draw_volume()), this.paperEl.show())
					}
				}, {
					key: "showPaperCmp",
					value: function () {
						this.paperCmpEl && (this.coord.minuteArea && (this.draw_cmpLabelRight(), this.draw_cmp(), "fdays" === this.type && this.draw_cmpTimeLabel()), this.coord.volumeArea && (this.draw_volumeLabel(), this.draw_volume()), this.paperCmpEl.show())
					}
				}, {
					key: "showStaticFore",
					value: function () {
						this.staticForeEl && (this.coord.title && this.draw_title(), this.staticForeEl.show())
					}
				}, {
					key: "showStaticForeCmp",
					value: function () {
						this.staticForeCmpEl && (this.coord.title && this.draw_titleCmpPanel(), this.staticForeCmpEl.show())
					}
				}, {
					key: "showDynamicFore",
					value: function (t, e) {
						if (this.dynamicForeEl) {
							var n = this.coord.minuteArea,
								r = this.data.fullData,
								i = this.coord.volumeArea,
								a = this.data.volume,
								o = this.maxX,
								s = n.w / (o - 1),
								l = n.x2dLine(t);
							0 > l && (l = 0), l > r.length && (l = r.length - 1);
							var u = this.fdaysDataStart ? r[l + this.fdaysDataStart] : r[l];
							if (u) {
								var c = rt.util.shift(n.baseX + l * s),
									h = n.d2y(u[1]);
								this.dynamicForeEl.$("minCrossEl").attr({
									x: c,
									y: h
								}), this.dynamicForeEl.$("dotMinEl").attr({
									x: c,
									y: h
								});
								var f = this.data.price.fixed,
									g = u[1].toFixed(f),
									d = u[2],
									p = d >= 0 ? "+" : "";
								isFinite(d) || (d = 0, p = "+");
								d = p + d.toFixed(2) + "%";
								var A = u[0].slice(0, 2) + ":" + u[0].slice(2, 4);
								if (this.dynamicForeEl.$("crossBoxEl").attr({
										data: {
											left: g,
											right: d,
											bottom: A
										},
										x: c,
										y: h
									}), i) {
									var v = this.fdaysDataStart ? a.data[l + this.fdaysDataStart][0] : a.data[l][0];
									if (v < 0) v = 0;
									// x轴步长对齐
									var _volStepX = (i.maxX > 1 ? i.w / (i.maxX) : i.stepX);
									if (c = i.baseX + l * _volStepX, h = i.d2y(v), this.dynamicForeEl.$("volCrossEl").attr({
										x: c,
									}).show(), v) {
										var I = C["default"].HZLD(this.fdaysDataStart ? a.data[l + this.fdaysDataStart][1] : a.data[l][1], "noGray");
										this.dynamicForeEl.$("rectVolEl").attr({
											x: rt.util.shift(c) - 1,
											y: rt.util.shift(h) - 2,
											width: 2,
											height: rt.util.shift(i.b) - rt.util.shift(h) + 2,
											fill: I,
											stroke: I
										}).show()
									} else this.dynamicForeEl.$("rectVolEl").hide()
								}
								this.coord.title && this.draw_title(u), this.dynamicForeEl.show(), this.staticForeEl.show()
							}
						}
					}
				}, {
					//浮窗
					key: "cal_titleData",
					value: function (t) {
						var e = this.data,
							n = (e.close, e.date),
							stock = window.stock,
							isKcb = stock.slice(2,5),
						n = [n.slice(4, 6), n.slice(6, 8)].join("/");
						// 判断是沪深新规的股票
						var isHSAdapter = window.StockDataUtils.isHSAdapter(stock);
						var r = e.price.fixed,
							i = o(e.last, 7),
							a = i[0],
							s = i[1],
							l = i[2],
							u = isKcb === '688' ?i[6]<1e5?i[6]:i[6]<1e8?i[6]/1e6:i[6]/1e10:i[6],
							c = a.slice(0, 2) + ":" + a.slice(2, 4),
							h = C["default"].HZLD(l),
							f = Y["default"].text.title,
							l = isFinite(l) ? l : (l = 0.0);
						l = l >= 0 ? "+" + l.toFixed(2) : l.toFixed(2);
						var g = [
							["价 格", s.toFixed(r), h],
							["涨跌幅", l + "%", h]
						];
						if (t) {
							var isPanHouHSRule = isHSAdapter && a > '1500';
							var titleTxt = isPanHouHSRule ? "固" : "竞";
							// 是沪深新规且进入盘后时间都为成交量固
							var d = "hk" === this.cfg.market && this.cfg.isIndex ? "成交额" : isHSAdapter ? "成交量" + titleTxt : "成交量";
							g.push([d, nt["default"].unit(u, 2), f])
						}
						console.log(g,'gg')
						return {
							time: n + " " + c,
							data: g
						}
					}
				}, {
					key: "cal_currentTitle",
					value: function (t, e) {
						var n = this.data,
							r = n.close,
							i = n.date,
							stock = window.stock;
						i = [i.slice(4, 6), i.slice(6, 8)].join("/");
						var isKcb = stock.slice(2,5);
						var a = n.price.fixed,
							s = o(t, 6),
							l = s[0],
							u = s[1],
							c = s[2],
							h = isKcb === '688'? s[3]/100:s[3],
							f = s[5],
							g = l.slice(0, 2) + ":" + l.slice(2, 4),
							d = C["default"].HZLD(c),
							p = C["default"].HZLD(f - r),
							A = Y["default"].text.title,
							date = [n.date.slice(0, 4),n.date.slice(4, 6), n.date.slice(6, 8)].join("-") + " "+ l.slice(0, 2) + ":" + l.slice(2, 4),
							dateT = [n.date.slice(0, 4),n.date.slice(4, 6), n.date.slice(6, 8)].join("-") + " "+"15:05";
						isFinite(c) || (c = 0);
						h = h < 0 ? 0 : h;
						c = c >= 0 ? "+" + c.toFixed(2) : c.toFixed(2);
						var v = [
							["价 格", u.toFixed(a), d],
							["涨跌幅", c + "%", d]
						];

						if (e) {
							var I;
							var isHSAdapter = window.StockDataUtils.isHSAdapter(stock);
							if("hk" === this.cfg.market && this.cfg.isIndex){
								I = "成交额"
							}else if(isHSAdapter){
								if(new Date(date).getTime() >= new Date(dateT).getTime()){
									I = "成交量固";
								}else{
									I = "成交量竞"
								}
							}else{
								I = "成交量"
							}
							v.push([I, nt["default"].unit(h, 2), A]), v.push(["均 价", f.toFixed(a), p])
						}
						return {
							time: i + " " + g,
							data: v
						}
					}
				}, {
					key: "draw_status",
					value: function () {
						var t = this.data.status,
							e = this.coord.minuteGrid;
						this.fore.$("statusBox") || (this.fore.custom(N["default"]).id("statusBox").attr({
							coord: e,
							status: t
						}), this._unMouse())
					}
				}, {
					key: "draw_title",
					value: function (t) {
						var e = void 0,
							n = this.chartCfg.titleArea.volume_text;
						e = t ? this.cal_currentTitle(t, n) : this.cal_titleData(n), this.staticForeEl.$("titleTextEl").attr({
							data: e
						})
					}
				}, {
					//图左边数据
					key: "draw_minuteLabel",
					value: function () {
						var t = this.data.price.abs,
							e = this.data.close;
						t = 1e-5 > t ? .001 * e || .01 : t;
						var n = this.data.price.fixed;
						this.paperEl.$("minuteLabelEl").attr({
							data: {
								maxVal: e + t,
								minVal: e - t,
								n: 9
							},
							fixed: n
						})
					}
				}, {
					//图右边数据
					key: "draw_minuteLabelRight",
					value: function () {
						var t = this.data.price,
							e = 0 === t.maxPct ? .1 : t.maxPct;
						this.paperEl.$("minuteLabelRightEl").data({
							maxVal: e,
							minVal: -e,
							n: 9
						})
					}
				}, {
					key: "draw_volumeLabel",
					value: function () {
						var t = (this.coord.volumeLabel, this.data.volume),
							e = t.max * Z["default"].MAX_VOLUME_PERCENTAGE;
						this.paperEl.$("volumeLabelEl").data({
							maxVal: e,
							minVal: e / 3,
							n: 3
						}), this.paperCmpEl.$("volumeLabelEl").data({
							maxVal: e,
							minVal: e / 3,
							n: 3
						})
					}
				}, {
					key: "draw_volume",
					value: function () {
						var t = this.data,
							e = t.volume,
							n = this.coord.volumeArea,
							r = 0 === t.volume.max ? 1 : t.volume.max * Z["default"].MAX_VOLUME_PERCENTAGE;
						n.reAxis([0, this.maxX], [0, r]), this.paperEl.$("volumeEl").attr({
							data: e.data,
							coord: n
						}), this.paperCmpEl.$("volumeEl").attr({
							data: e.data,
							coord: n
						})
					}
				}, {
					key: "showDynamicForeCmp",
					value: function (t, e) {
						var n = this;
						if (this.dynamicForeCmpEl) {
							var r = this.coord.minuteArea,
								i = this.data,
								a = this.coord.volumeArea,
								o = this.data.volume,
								s = this.maxX,
								l = this._getCmpList(),
								u = void 0,
								c = void 0,
								h = r.w / (s - 1),
								f = r.x2dLine(t);
							0 > f && (f = 0), f >= i.fullData.length && (f = i.fullData.length - 1);
							var g = i.fullData[f];
							if (g) {
								u = rt.util.shift(r.baseX + f * h), c = r.d2y(g[2]), this.dynamicForeCmpEl.$("mainCrossEl").attr({
									x: u,
									y: c
								}), this.dynamicForeCmpEl.$("mainDotEl").attr({
									x: u,
									y: c
								});
								var d = this.data.price.fixed,
									p = g[1].toFixed(d),
									A = g[2],
									v = A >= 0 ? "+" : "";
								isFinite(A) || (A = 0, v = "+");
								A = v + A.toFixed(2) + "%";
								var I = g[0].slice(0, 2) + ":" + g[0].slice(2, 4);
								if (this.dynamicForeCmpEl.$("crossBoxEl").attr({
										data: {
											left: p,
											right: A,
											bottom: I
										},
										x: u,
										y: c
									}), l.forEach(function (t, e, i) {
										var a = n._getData(t.symbol);
										if (a && (g = a.fullData[f])) {
											c = r.d2y(g[2]);
											var o = n.dynamicForeCmpEl.$("cmpCrossEl").$(t.symbol);
											if (o) o.attr({
												y: c
											});
											else {
												var s = Y["default"].cross.color;
												n.dynamicForeCmpEl.$("cmpCrossEl").custom(M["default"]).id(t.symbol).attr({
													y: c,
													coord: r,
													stroke: s
												})
											}
											var l = n.dynamicForeCmpEl.$("cmpDotEl").$(t.symbol);
											if (l) l.attr({
												x: u,
												y: c
											});
											else {
												var h = Y["default"].minute.dotColor,
													d = Y["default"].minute.dotFill;
												n.dynamicForeCmpEl.$("cmpDotEl").custom(R["default"]).id(t.symbol).attr({
													x: u,
													y: c,
													coord: r,
													r: 3,
													stroke: h,
													fill: d
												})
											}
											var C = n.dynamicForeCmpEl.$("cmpCrossBoxEl").$(t.symbol);
											if (C) {
											var v = a.price.fixed,
												I = g[1].toFixed(v),
												m = g[2],
												y = m >= 0 ? "+" : "";
											isFinite(m) || (m = 0, y = "+");
											m = y + m.toFixed(2) + "%", C.attr({
													data: {
														left: I,
														right: m
													},
													y: c
												})
											} else {
												var b = Y["default"].compare[e].color;
												n.dynamicForeCmpEl.$("cmpCrossBoxEl").custom(j["default"]).id(t.symbol).attr({
													data: {
														left: p,
														right: A
													},
													fill: b,
													stroke: b,
													y: c,
													coord: r,
													position: "LR",
													padding: 4,
													boxWidth: n.coord.minuteLabel.width
												})
											}
										}
									}), a) {
									var m = this.fdaysDataStart ? o.data[f + this.fdaysDataStart] : o.data[f];
									if (m)
										if (m = m[0], u = a.d2x(f), c = a.d2y(m), this.dynamicForeCmpEl.$("volCrossEl").attr({
												x: u
											}), m) {
											var y = C["default"].HZLD(this.fdaysDataStart ? o.data[f + this.fdaysDataStart][1] : o.data[f][1], "noGray");
											this.dynamicForeCmpEl.$("rectVolEl").attr({
												x: rt.util.shift(u) - 1,
												y: rt.util.shift(c) - 2,
												width: 2,
												height: rt.util.shift(a.b) - rt.util.shift(c) + 2,
												fill: y,
												stroke: y
											}).show()
										} else this.dynamicForeCmpEl.$("rectVolEl").hide()
								}
								this.coord.title && this.draw_titleCmpPanel(f), this.dynamicForeCmpEl.show(), this.staticForeCmpEl.show()
							}
						}
					}
				}, {
					key: "compareMax",
					value: function () {
						var t = this,
							e = -Number.MAX_VALUE,
							n = this.data;
						n && (e = Math.max(n.price.maxPct, e));
						var r = this._getCmpList();
						r.forEach(function (n, i, a) {
							var o = t._getData(n.symbol);
							o && (e = Math.max(o.price.maxPct, e), r.maxX = o.maxX)
						}), r.maxPct = e
					}
				}, {
					key: "draw_cmpLabelRight",
					value: function () {
						var t = this._getCmpList();
						this.coord.minuteLabelRight;
						this.paperCmpEl.$("cmpLabelRightEl").data({
							maxVal: t.maxPct,
							minVal: -t.maxPct,
							n: 9,
							fixed: 2
						})
					}
				}, {
					key: "draw_cmp",
					value: function () {
						var t = this,
							e = this._getCmpList();
						if (void 0 !== e.maxPct) {
							var n = this.coord.minuteArea,
								r = e.maxPct || .01;
							n.reAxis([0, this.maxX], [-r, r]);
							var i = new I["default"](n.x, n.y, n.w, n.h).axis([0, this.maxX], [-r, r]),
								a = this.data;
							this.paperCmpEl.$("mainLineEl").attr({
								data: a.price.percent,
								coord: i
							}), e.forEach(function (e, n, r) {
								var a = t._getData(e.symbol);
								if (a) {
									var o = t.paperCmpEl.$("cmpLineEl").$(e.symbol);
									if (o) o.attr({
										data: a.price.percent,
										coord: i
									});
									else {
										var s = Y["default"].compare[n].lineWidth + " " + Y["default"].compare[n].color;
										t.paperCmpEl.$("cmpLineEl").custom(w["default"]).id(e.symbol).attr({
											data: a.price.percent,
											coord: i,
											maxX: t.maxX,
											stroke: s
										})
									}
								}
							})
						}
					}
				}, {
					key: "draw_titleCmpPanel",
					value: function (t) {
						var e = void 0;
						e = t ? this.cal_currentCmpPanelData(t) : this.cal_cmpPanelData(), this.staticForeCmpEl.$("titleCmpEl").attr({
							data: e
						})
					}
				}, {
					key: "draw_currentCmpBox",
					value: function (t, e, n) {
						this.fore.custom(j["default"]).attr({
							coord: this.coord.minuteArea,
							data: t,
							x: e,
							y: n,
							boxes: "R"
						})
					}
				}, {
					key: "cal_cmpPanelData",
					value: function () {
						var t = this,
							e = [],
							n = this.data;
						e.push({
							name: n.name,
							percent: 100 * (n.last[1] / n.close - 1) || 0,
							symbol: this.symbol,
							color: Y["default"].compareMain.color
						});
						var r = this._getCmpList();
						return r.forEach(function (n, r, i) {
							var a = t._getData(n.symbol);
							if (a) {
								var o = {
									name: a.name,
									percent: 100 * (a.last[1] / a.close - 1) || 0,
									symbol: n.symbol,
									color: Y["default"].compare[r].color
								};
								e.push(o)
							}
						}), e
					}
				}, {
					key: "cal_currentCmpData",
					value: function (t) {
						var e = o(t, 1),
							n = e[0],
							r = n.slice(0, 2) + ":" + n.slice(2, 4);
						return {
							crossTime: r
						}
					}
				}, {
					key: "cal_currentCmpPanelData",
					value: function (t) {
						var e = this,
							n = [],
							r = this.data,
							i = r.fullData[t];
						n.push({
							name: r.name,
							percent: i[2],
							symbol: this.symbol,
							color: Y["default"].compareMain.color
						});
						var a = this._getCmpList();
						return a.forEach(function (r, i, a) {
							var o = e._getData(r.symbol);
							if (o) {
								var s = o.fullData[t],
									l = {
										name: o.name,
										color: Y["default"].compare[i].color,
										symbol: r.symbol,
										percent: s && s[2]
									};
								n.push(l)
							}
						}), n
					}
				}, {
					key: "removeCmp",
					value: function (t) {
						this.stopListenToData(t), delete this.subscribeArray[t], this._getCmpList().maxPct = null, this.drawAll()
					}
				}]), e
			}(J["default"]);
		e["default"] = it, t.exports = e["default"];
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = function () {
				function t(t, e) {
					var n = [],
						r = !0,
						i = !1,
						a = void 0;
					try {
						for (var o, s = t[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !e || n.length !== e); r = !0);
					} catch (l) {
						i = !0, a = l
					} finally {
						try {
							!r && s["return"] && s["return"]()
						} finally {
							if (i) throw a
						}
					}
					return n
				}
				return function (e, n) {
					if (Array.isArray(e)) return e;
					if (Symbol.iterator in Object(e)) return t(e, n);
					throw new TypeError("Invalid attempt to destructure non-iterable instance")
				}
			}(),
			o = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			s = n(14),
			l = r(s),
			u = n(30),
			c = (r(u), n(32)),
			h = r(c),
			f = n(55),
			g = r(f),
			d = function () {
				function t() {
					i(this, t)
				}
				return o(t, null, [{
					key: "calMinute",
					value: function (t) {
						var e = {};
						t.data = this.calQtMinute(t);
						var n = t.data,
							r = t.date,
							i = (t.status, t.close),
							o = t.open,
							s = t.name;
						i = i || o;
						var l = [],
							u = [],
							c = [],
							h = [],
							f = [],
							g = -Number.MAX_VALUE,
							d = Number.MAX_VALUE,
							p = 0,
							A = 0;
						n.forEach(function (t, e, n) {
							var r = a(t, 5),
								o = r[0],
								s = r[1],
								C = r[2],
								v = r[3],
								I = r[4];
							l.push(s);
							var m = 100 * (s / i - 1);
							m = m ? m : 0, u.push(m), c.push(I);
							var y = s - A;
							y || (y = f.length ? f[f.length - 1][1] : 0), f.push([v, y]), h.push([o, s, m, v, y, I, C]), g = Math.max(s, g), d = Math.min(s, d), p = Math.max(v, p), A = s
						});
						var C = Math.abs(g - i),
							v = Math.abs(d - i),
							I = C > v ? C : v,
							m = I / i || .001,
							y = t.decimalPosition,
							b = h.length;
						return e = {
							name: s,
							price: {
								data: l,
								percent: u,
								abs: I,
								maxPct: 100 * m,
								average: c,
								fixed: y
							},
							volume: {
								data: f,
								max: p
							},
							fullData: h,
							rawdata: n,
							last: h[b - 1],
							close: i,
							date: r
						}, e.status = t.status, e
					}
				}, {
					key: "calQtMinute",
					value: function (t, e) {
						e = e || t.data;
						var n = t.marketTime,
							r = t.qtTime,
							i = t.qtDate,
							a = t.date;
						if (n.length > 2 && r > n[1] && r < n[2] && (r = n[1]), !a || a.replace(/-/g, "") < i) e = [], e.last = ["0000"], e.counter = 0, e.turnover = 0, t.date = i;
						else if (a > i) return e;
						var o = (t.market, t.close, t.open),
							s = t.qtPrice,
							l = t.qtVolume,
							u = n[n.length - 1],
							c = n[0],
							h = e.last[0],
							f = l - e.counter,
							g = e.turnover + s * f,
							d = e.length;
						e.cfg ? e.cfg.isIndex : !1;
						if (r > h && u >= r && r >= c || !e.length) {
							d || (e.push([c, o, l, 0, o]), d++);
							for (var p = e[d - 1]; p[0] < r && p[0] < u;) p = e[d++] = [this.getNextTime(p[0], n), p[1], 0, p[3], p[4]];
							p[1] = s || p[1], p[2] = l, p[3] = f, p[4] = g / p[2] || p[1], e.last = p, e.counter = l, e.turnover = g
						} else if ((r === h || c > r) && s) {
							var p = e[d - 1],
								A = d > 1 ? e[d - 2][2] : 0;
							f = l - A, (p[1] !== s || p[3] !== f) && (p[1] = s, p[2] = l, p[3] = f, p[4] = g / p[2] || p[1], e.last = p)
						}
						return e
					}
				}, {
					key: "kline",
					value: function (t) {
						for (var e = t.data, n = (t.qtDate, t.name), r = t.trendUnit, i = 0, a = 0, o = 0, s = 0, l = 0, u = 0, c = -Number.MAX_VALUE, f = +Number.MAX_VALUE, g = [], d = [], p = [], A = [], C = [], v = 0, I = (e.length, 0), m = e.length; m > I; I++) {
							var y = e[I].slice(0, 6),
								b = y[0],
								_ = y[1],
								x = y[2],
								w = y[3],
								k = y[4],
								T = y[5];
							g.push(x), d.push(w), p.push(k), C.push(T);
							var E = x - _;
							E || (E = I > 0 ? x - g[I - 1] : 0), y = y.concat([E]), i += x, a += x, o += x, s += T, l += T, u += T, I >= 19 ? (i -= e[I - 5][2], a -= e[I - 10][2], o -= 19 == I ? 0 : e[I - 20][2], s -= e[I - 5][5], l -= e[I - 10][5], u -= 19 == I ? 0 : e[I - 20][5], e[I] = y.concat([i / 5, a / 10, o / 20, s / 5, l / 10, u / 20])) : I >= 9 ? (i -= e[I - 5][2], a -= 9 == I ? 0 : e[I - 10][2], s -= e[I - 5][5], l -= 9 == I ? 0 : e[I - 10][5], e[I] = y.concat([i / 5, a / 10, "", s / 5, l / 10, ""])) : I >= 4 ? (i -= 4 == I ? 0 : e[I - 5][2], s -= 4 == I ? 0 : e[I - 5][5], e[I] = y.concat([i / 5, "", "", s / 5, "", ""])) : e[I] = y.concat(["", "", "", "", "", ""]);
							var S = "date" === r ? b.slice(0, 8) : b.slice(0, 4);
							S !== v && (v = S, A.push(["date" === r ? [v.slice(0, 4), v.slice(4, 6), v.slice(6, 8)].join("/") : v, I])), c = Math.max(c, x), f = Math.min(f, x)
						}
						return A.push([" ", e.length]), e.rawdata = e, e.o = {
							name: n,
							len: g.length,
							MACD: h["default"].MACD(g),
							maxValAll: c,
							minValAll: f,
							fixed: t.decimalPosition,
							closingPrice: g,
							highPrice: d,
							lowPrice: p,
							volume: C,
							trendTimeTags: A,
							status: t.status,
							open: e[0] && e[0][1]
						}, e
					}
				}, {
					key: "klineQT",
					value: function (t, e) {
						if (!t.data || !t.data.length) return [];
						if (t.status || !t.open || !t.close || !t.qtPrice || !t.qtMaxVal || !t.qtMinVal) return t.data;
						var n = t.data,
							r = t.qtDate,
							i = t.open,
							a = t.qtPrice,
							o = t.qtMaxVal,
							s = t.qtMinVal,
							l = t.qtVolume,
							u = n.length - 1,
							c = n[u],
							h = c[0],
							f = [r, i, a, o, s, l],
							g = f[2] - f[1];
						if (f[2] === f[1] && (g = u > 0 ? f[2] - n[u - 1][2] : 0), f = f.concat(g), r === h) {
							if ("month" === e || "week" === e) {
								var d = c[5] + l - (n.volumeAll || l);
								n.volumeAll = l, f = [r, c[1], a, Math.max(o, c[3]), Math.min(o, c[4]), d];
								var p = f[2] - f[1];
								f[2] === f[1] && (p = u > 0 ? f[2] - n[u - 1][2] : 0), f = f.concat(p)
							}
							n[u] = f;
							var A = this.calMA(n, u, 5),
								C = this.calMA(n, u, 10),
								v = this.calMA(n, u, 20),
								I = this.calMA(n, u, 5, "v"),
								m = this.calMA(n, u, 10, "v"),
								y = this.calMA(n, u, 20, "v");
							f = f.concat([A, C, v, I, m, y]), n[u] = f
						} else r > h && (n.push(f), this.kline(t));
						return n
					}
				}, {
					key: "calMklineQT",
					value: function (t, e) {
						if (!t.data) return [];
						if (t.status || !t.close || !t.qtPrice || !t.qtMaxVal || !t.qtMinVal) return t.data;
						var n = t.data,
							r = t.qtDate,
							i = t.qtTime,
							a = t.qtPrice,
							o = t.qtVolume,
							s = t.marketTime;
						if (i < s[0] || i > s[1] && i < s[2] || i > s[3]) return n;
						var l = n.length - 1,
							u = n[l],
							c = n[l - 1],
							h = u[0].slice(0, 8),
							f = u[0].substr(8),
							g = c ? c[0].substr(8) : s[0];
						g = g > f ? s[0] : g;
						var d = 1 * e.substr(1);
						if (void 0 === n.volumeAll) return r > h ? n.volumeAll = 0 : n.volumeAll = o - u[5], n;
						if (r > h || f - g >= d && i > f) {
							var p = [r + "" + i, a, a, a, a, r > h ? o : o - n.volumeAll],
								A = p[2] - u[2];
							p = p.concat(A), n.push(p), n.volumeAll = o, this.calMKline(t)
						} else if (i >= f) {
							var C = u[1],
								v = u[3],
								I = u[4],
								p = [r + "" + i, C, a, a > v ? a : v, I > a ? a : I, o - n.volumeAll],
								A = l > 0 ? p[2] - c[2] : 0;
							p = p.concat(A), n[l] = p;
							var m = this.calMA(n, l, 5),
								y = this.calMA(n, l, 10),
								b = this.calMA(n, l, 20),
								_ = this.calMA(n, l, 5, "v"),
								x = this.calMA(n, l, 10, "v"),
								w = this.calMA(n, l, 20, "v");
							p = p.concat([m, y, b, _, x, w]), n[l] = p
						}
						return n
					}
				}, {
					key: "calMKline",
					value: function (t) {
						t.trendUnit = "date";
						var e = this.kline(t),
							n = e.o.trendTimeTags,
							r = n.length;
						if (5 >= r) return e;
						var i = n[r - 5 - 1][1],
							a = e.slice(i, e.length);
						return t.data = a, this.kline(t)
					}
				}, {
					key: "calMA",
					value: function (t, e, n, r) {
						var i = r ? 5 : 2,
							a = 0;
						if (e >= n - 1) {
							for (var o = 0; n > o; o++) a += t[e - o][i];
							return a / n
						}
						return ""
					}
				}, {
					key: "klineIndex",
					value: function () {
						var t = arguments[0],
							e = arguments[1],
							n = void 0,
							r = void 0,
							i = void 0,
							a = void 0,
							o = void 0;
						switch (t) {
							case "RSI":
								return n = e.closingPrice, {
									RSI6: h["default"].RSI(n, 6),
									RSI12: h["default"].RSI(n, 12),
									RSI24: h["default"].RSI(n, 24)
								};
							case "KDJ":
								return n = e.closingPrice, r = e.highPrice, i = e.lowPrice, h["default"].KDJ(n, i, r, 9, 3, 3);
							case "DMI":
								return n = e.closingPrice, r = e.highPrice, i = e.lowPrice, h["default"].DMI(r, i, n);
							case "OBV":
								return n = e.closingPrice, a = e.volume, o = e.open, h["default"].OBV(n, a, o);
							case "W&R":
								return n = e.closingPrice, r = e.highPrice, i = e.lowPrice, h["default"].WR(n, i, r, 10, 6);
							case "BOLL":
								return n = e.closingPrice, h["default"].BOLL(n, 20, 2);
							case "SAR":
								return r = e.highPrice, i = e.lowPrice, h["default"].SAR(r, i, 10, 2, 20)
						}
					}
				}, {
					key: "calFDays",
					value: function (t) {
						var e = {};
						t.date = t.data[0].date, t.data[0].data = this.calQtFDays(t.data[0].data, t);
						for (var n = [], r = [], i = [], o = [], s = [], u = [], c = -Number.MAX_VALUE, h = Number.MAX_VALUE, f = 0, d = t.data, p = 1 * d.close, A = l["default"].FDAYS_SAMPLING, C = function (t, e) {
								var l = d[t].data,
									C = d[t].date;
								if (C) {
									C = g["default"]["new"](C);
									var v = g["default"].getDayCh(C.getDay());
									C = g["default"].dash(C), C = C + " " + v, u.push(C)
								}
								var I = l.length,
									m = 0;
								l.forEach(function (t, e, l) {
									if (!(e % A) || e === I - 1) {
										var u = a(t, 5),
											g = u[0],
											d = u[1],
											v = u[2],
											y = u[3],
											b = u[4];
										n.push(d);
										var _ = 100 * (d / p - 1);
										_ = _ ? _ : 0, s.push(_), r.push(b), m = e ? l[e - 1][1] : m;
										var x = d - m;
										x || (x = o.length ? o[o.length - 1][1] : 0), o.push([y, x]), i.push([g, d, _, y, x, b, C, v]), c = Math.max(d, c), h = Math.min(d, h), f = Math.max(y, f)
									}
								})
							}, v = t.data.length, I = v - 1; I >= 0; I--) C(I, v);
						if (!u.length) {
							var m = g["default"]["new"](t.qtDate),
								y = g["default"].getDayCh(m.getDay());
							m = g["default"].dash(m), m = m + " " + y, u.push(m)
						}
						var b = Math.abs(c - p),
							_ = Math.abs(h - p),
							x = b > _ ? b : _,
							w = x / p || .001,
							k = t.decimalPosition,
							T = i.length;
						return e = {
							name: t.name,
							price: {
								data: n,
								percent: s,
								abs: x,
								maxPct: 100 * w,
								average: r,
								fixed: k
							},
							volume: {
								data: o,
								max: f
							},
							date: u,
							fullData: i,
							rawdata: d,
							last: i[T - 1],
							close: p
						}, e.status = t.status, e
					}
				}, {
					key: "calQtFDays",
					value: function (t, e) {
						return e.data ? t = this.calQtMinute(e, t) : null
					}
				}, {
					key: "calTrend",
					value: function (t) {
						for (var e = [], n = 0, r = Number.MAX_VALUE, i = "", a = [], o = {
								day: [],
								week: [],
								month: []
							}, s = 0, l = t.length; l > s; s++) {
							var u = t[s][0],
								c = t[s][1];
							e.push(c), n = Math.max(n, c), r = Math.min(r, c), u.slice(0, 4) !== i && (i = u.slice(0, 4), a.push([i, s]), o.day.push([i, !1]), o.week.push([i, !1]), o.month.push([i, !1]))
						}
						a.push([" ", t.length]), t.rawdata = t;
						var h = n - r;
						return t.o = {
							len: e.length,
							maxValAll: h ? n : n + .1,
							minValAll: h ? r : r - .1,
							closingPrice: e,
							trendTimeTags: a,
							trendYearList: o
						}, t
					}
				}, {
					key: "getNextTime",
					value: function (t, e) {
						var n = parseInt(t.substr(0, 2), 10),
							r = parseInt(t.substr(2), 10) + 1;
						r >= 60 && (n++, r %= 60);
						var i = (10 > n ? "0" : "") + n + (10 > r ? "0" : "") + r;
						return 4 == e.length && i > e[1] && i < e[2] ? e[2] : i
					}
				}]), t
			}();
		e["default"] = d, t.exports = e["default"]
	}, function (t, e) {
		"use strict";

		function n(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			i = function () {
				function t() {
					n(this, t)
				}
				return r(t, null, [{
					key: "pad",
					value: function (t) {
						return 10 > t ? "0" + t : t
					}
				}, {
					key: "dash",
					value: function (t) {
						return t ? t.getUTCFullYear() + "-" + this.pad(t.getUTCMonth() + 1) + "-" + this.pad(t.getUTCDate()) : void 0
					}
				}, {
					key: "new",
					value: function (t) {
						var e = t.substr(0, 4) + "-" + t.substr(4, 2) + "-" + t.substr(6, 2);
						return new Date(e)
					}
				}, {
					key: "getDayCh",
					value: function (t) {
						return {
							1: "周一",
							2: "周二",
							3: "周三",
							4: "周四",
							5: "周五",
							6: "周六",
							7: "周日"
						} [t]
					}
				}, {
					key: "timing",
					value: function (t) {
						return t.substr(8, 4)
					}
				}]), t
			}();
		e["default"] = i, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(31),
			a = (r(i), n(30)),
			o = (r(a), n(14)),
			s = (r(o), n(57)),
			l = s.Shape.custom({
				_afterInit: function () {
					var t = this;
					this._anim = new s.Animate(function (e) {
						var n = t.rotation(),
							r = t.dashes();
						t.position((t.position() + Math.round(e * r / n)) % r)
					}), this.hide()
				},
				start: function (t) {
					if (this._timer && (clearTimeout(this._timer), this._timer = !1), this._anim.start(), this.show(), t) {
						var e = this;
						this._timer = setTimeout(function () {
							e.stop()
						}, t)
					}
				},
				stop: function () {
					this._anim.stop(), this.hide()
				},
				_afterRemove: function () {
					this._anim.stop()
				},
				_draw: function (t) {
					var e = this.dashes(),
						n = this.radius(),
						r = this.position(),
						i = this.height(),
						a = this.width(),
						o = this.x(),
						l = this.y(),
						u = s.Color(this.color());
					t.lineWidth = a;
					for (var c = 0, h = e; h > c; c++) t.save(), t.translate(o, l), t.rotate((r + c) * Math.PI * 2 / h), t.beginPath(), t.moveTo(n, 0), t.lineTo(n + i, 0), u.a = (c + 1) / h, t.strokeStyle = u.getString(), t.stroke(), t.restore();
					t.beginPath()
				}
			}, {
				x: 0,
				y: 0,
				color: "#000000",
				dashes: 30,
				radius: 30,
				height: 10,
				width: 2.5,
				rotation: 700,
				position: 0
			});
		e["default"] = l, t.exports = e["default"]
	}, function (t, e, n) {
		var r, i, a = function (t, e) {
			return new a.Canvas(t, e)
		};
		! function (a, o) {
			r = o, i = "function" == typeof r ? r.call(e, n, e, t) : r, !(void 0 !== i && (t.exports = i))
		}(this, function () {
			return a
		}),
		function () {
			function t(t) {
				return t && "object" == typeof t && "number" == typeof t.nodeType && "string" == typeof t.nodeName
			}
			var e = a.util = {},
				n = document.createElement("canvas");
			e.bind = function (t, e) {
				return t.bind ? t.bind(e) : function () {
					return t.apply(e)
				}
			}, e.canvas = !!n.getContext, e.PIXEL_RATIO = function () {
				if (e.canvas) {
					var t = n.getContext("2d"),
						r = window.devicePixelRatio || 1,
						i = t.webkitBackingStorePixelRatio || t.mozBackingStorePixelRatio || t.msBackingStorePixelRatio || t.oBackingStorePixelRatio || t.backingStorePixelRatio || 1;
					return r / i
				}
				return 1
			}(), e.round = function (t) {
				return .5 + t << 0
			}, e.shift = function (t) {
				return (t << 0) + .5
			};
			var r = Object.prototype.toString;
			e.is = function (t, e) {
				switch (e) {
					case "null":
						return null === t;
					case "undefined":
						return void 0 === t;
					case "boolean":
					case "bool":
						return t === !0 || t === !1 || "[object Boolean]" === r.call(t);
					case "finite":
						return isFinite(t) && !isNaN(parseFloat(t));
					case "object":
						return e = typeof t, "object" === e && !!t;
					default:
						return r.call(t).slice(8, -1).toLowerCase() == e
				}
			}, e.each = function (t, e, n) {
				for (var r = 0; r < t.length; r++) e.call(n, t[r], r)
			}, e.camelize = function (t) {
				t = t.split("-");
				for (var e = 1; e < t.length; e++) t[e] = t[e].charAt(0).toUpperCase() + t[e].substr(1);
				return t.join("")
			}, e.clone = function (t) {
				var n = {};
				for (var r in t) t.hasOwnProperty(r) && (t[r] && e.is(t[r].clone, "function") ? n[r] = t[r].clone() : e.is(t[r], "array") ? n[r] = t[r].slice() : e.is(t[r], "object") ? n[r] = e.clone(t[r]) : n[r] = t[r]);
				return n
			}, e.extend = function (t, n) {
				for (var r, i = Array.prototype.slice.call(arguments, 1), a = e.is(t, "array") ? t : [t], o = 0; o < a.length; o++) {
					t = a[o];
					for (var s = 0; s < i.length; s++) {
						n = i[s];
						for (r in n) t[r] = n[r]
					}
				}
				return t
			}, e.mkClass = function (t, n) {
				function r(e, n, i, a, o, s, l, u) {
					if (this instanceof r) {
						var c = t.apply(this, arguments);
						return this instanceof r || (c = this), c
					}
					switch (arguments.length) {
						case 0:
							return new r;
						case 1:
							return new r(e);
						case 2:
							return new r(e, n);
						case 3:
							return new r(e, n, i);
						case 4:
							return new r(e, n, i, a);
						case 5:
							return new r(e, n, i, a, o);
						case 6:
							return new r(e, n, i, a, o, s);
						case 7:
							return new r(e, n, i, a, o, s, l);
						case 8:
							return new r(e, n, i, a, o, s, l, u);
						default:
							throw new Error("too many arguments")
					}
				}
				"function" != typeof t && (n = t, t = function () {}), n && (r.prototype = n, r.prototype.constructor = r);
				for (var i = 2; i < arguments.length; i++) {
					n = arguments[i];
					for (var a in n) r.prototype[a] = n[a]
				}
				return r.$init = t, r.extend = function (t, n) {
					function i() {}
					i.prototype = r.prototype, e.is(t, "object") && (n = t, t = function () {
						return r.$init.apply(this, arguments)
					});
					var a = e.mkClass(function () {
						return t.apply(this, arguments)
					}, new i, n, {
						$base: function (t) {
							for (var e = Array.prototype.slice.call(arguments, 1), n = r; n;) {
								if (n.prototype[t]) return n.prototype[t].apply(this, e);
								n = n.$superClass
							}
							throw Error("父类中不存在函数：" + t)
						}
					});
					return a.$super = function (t) {
						return r.$init.apply(t, [].slice.call(arguments, 1))
					}, a.$superClass = r, a
				}, r
			}, e.keys = function (t) {
				if (!e.is(t, "object")) return [];
				if (Object.keys) return Object.keys(t);
				var n = [];
				for (var r in t) t.hasOwnProperty(r) && n.push(r);
				if (!{
						toString: null
					}.propertyIsEnumerable("toString"))
					for (var i = ["constructor", "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], a = i.length, o = "function" == typeof t.constructor ? Function.prototype : Object.prototype; a--;) {
						var s = i[a];
						if ("constructor" === s ? t.hasOwnProperty(s) : s in t && t[s] !== o[s]) {
							for (var l = !1, u = 0; u < n.length; u++)
								if (n[u] === s) {
									l = !0;
									break
								} l || n.push(s)
						}
					}
				return n
			};
			var i = function (n, r, a, o) {
				if (n === r) return 0 !== n || 1 / n === 1 / r;
				if (null === n || null === r) return n === r;
				var s = Object.prototype.toString.call(n);
				if (s !== Object.prototype.toString.call(r)) return !1;
				switch (s) {
					case "[object RegExp]":
					case "[object String]":
						return "" + n == "" + r;
					case "[object Number]":
						return +n !== +n ? +r !== +r : 0 === +n ? 1 / +n === 1 / r : +n === +r;
					case "[object Date]":
					case "[object Boolean]":
						return +n === +r
				}
				var l = "[object Array]" === s;
				if (!l) {
					if ("object" != typeof n || "object" != typeof r) return !1;
					var u = n.constructor,
						c = r.constructor;
					if (u !== c && !(e.is(u, "function") && u instanceof u && e.is(c, "function") && c instanceof c) && "constructor" in n && "constructor" in r) return !1
				}
				for (var h = a.length; h--;)
					if (a[h] === n) return o[h] === r;
				if (a.push(n), o.push(r), l) {
					if (h = n.length, h !== r.length) return !1;
					for (; h--;)
						if (!i(n[h], r[h], a, o)) return !1
				} else {
					if (t(n) || t(r)) return n === r;
					var f, g = e.keys(n);
					if (h = g.length, e.keys(r).length !== h) return !1;
					for (; h--;)
						if (f = g[h], !r.hasOwnProperty(f) || !i(n[f], r[f], a, o)) return !1
				}
				return a.pop(), o.pop(), !0
			};
			e.isEqual = function (t, e) {
				return i(t, e, [], [])
			}, e.now = Date.now || function () {
				return (new Date).getTime()
			}, e.cloneEvent = function (t) {
				function e() {
					for (var e in t) "function" != typeof t[e] && (this[e] = t[e])
				}
				return e.prototype = t.prototype, new e
			}, e.throttle = function (t, n, r) {
				var i, a, o, s = null,
					l = 0;
				n = n > 0 ? n : 10, r || (r = {});
				var u = function () {
					l = r.leading === !1 ? 0 : e.now(), s = null, o = t.apply(i, a), s || (i = a = null)
				};
				return function () {
					var c = e.now();
					l || r.leading !== !1 || (l = c);
					var h = n - (c - l);
					return i = this, a = arguments, 0 >= h || h > n ? (clearTimeout(s), s = null, l = c, o = t.apply(i, a), s || (i = a = null)) : s || r.trailing === !1 || (s = setTimeout(u, h)), o
				}
			}, e.isPointInCircle = function (t, e, n, r, i) {
				return Math.pow(n - t, 2) + Math.pow(r - e, 2) <= Math.pow(i, 2)
			}, e.isPointInPolygon = function (t, e, n) {
				for (var r, i, a = 0, o = n.length, s = 0; o > a; a++) r = n[a], i = n[a + 1 == o ? 0 : a + 1], (r[1] <= e && i[1] >= e || i[1] <= e && r[1] >= e) && (r[0] <= t || i[0] <= t) && (s ^= r[0] + (e - r[1]) * (i[0] - r[0]) / (i[1] - r[1]) <= t);
				return s
			}, e.isPointInArea = function (t, n, r) {
				return r.circle ? e.isPointInCircle(t, n, r.x, r.y, r.r) : r.polygon ? e.isPointInPolygon(t, n, r.vertex) : !1
			}, e.getAreaCenter = function (t) {
				e.is("areas", "array") || (t = [t]);
				var n = 0,
					r = 0,
					i = t.length;
				return e.each(t, function (t) {
					if (t.circle) n += t.x, r += t.y;
					else if (t.polygon) {
						var i = 0,
							a = 0,
							o = t.vertex.length;
						e.each(t.vertex, function (t) {
							i += t[0], a += t[1]
						}), n += i / o, r += a / o
					}
				}), {
					x: n / i,
					y: r / i
				}
			}
		}(),
		function () {
			var t = a.util,
				e = t.mkClass(function () {
					this.children = [], this.exp = ""
				}, {
					appendChild: function (t) {
						this.children.push(t)
					},
					getString: function () {
						for (var t = this.children, e = [this.exp], n = 0; n < t.length; n++) e.push(t[n].getString());
						return e = e.join("\\s*"), this.type && (e = "\\s*(\\s*" + e + "\\s*)\\s*"), e
					},
					getValue: function (t) {
						var e, n = this.children; {
							if (!this.type) return t[this.index];
							for (var r = [], i = 0; i < n.length; i++) n[i].type && (e = n[i].getValue(t), "undefined" != typeof e && r.push(e));
							if (r.length || (e = t[this.index], "" !== e && "undefined" != typeof e && r.push(e)), r.length) return this.fn.apply(this, r)
						}
					}
				}),
				n = a.Lex = t.mkClass(function (e, n) {
					function r() {
						return [].slice.call(arguments)
					}
					for (var i in n) t.is(n[i], "array") ? n[i][0] = n[i][0].source || n[i][0] : n[i] = [n[i].source, r];
					this._rule = n, this._buildIndex = 0, this.tree = this._build("<" + e + ">"), this.rule = new RegExp("^" + this.tree.getString() + "$")
				}, {
					_build: function (n) {
						var r = this._rule,
							i = new e;
						if (/^<([^>]+)>$/.test(n)) {
							if (n = n.substr(1, n.length - 2), !r[n]) return i.exp = n, i;
							i.type = n, i.fn = r[n][1], n = r[n][0], this._buildIndex += 1
						}
						i.index = this._buildIndex;
						for (var a, o = /<([^>]+)>/g, s = 0; !t.is(a = o.exec(n), "null");) s != a.index && i.appendChild(this._build(n.substr(s, a.index - s))), s = o.lastIndex, i.appendChild(this._build(a[0]));
						return s != n.length && (0 === s ? (i.exp = n, this._buildIndex += n.replace(/\\.|\[(?:\\.|[^\]])*\]|(\((?!\?[!:=]))|./g, function (t, e) {
							return e ? "." : ""
						}).length) : i.appendChild(this._build(n.substr(s)))), i
					},
					parse: function (t) {
						var e = t.match(this.rule);
						return e ? this.tree.getValue(e) : void 0
					},
					extend: function (t, e) {
						for (var r in this._rule) e[r] = this._rule[r];
						return new n(t, e)
					}
				})
		}(),
		function () {
			var t = a.util,
				e = new a.Lex("font", {
					font: [/((<svw>)?<font-size>(\/<line-height>)? <font-family>)|<named>/, function (e) {
						var n = a.Font();
						if (1 == arguments.length) n.named = e;
						else {
							var r = [].slice.apply(arguments);
							r.unshift(n.attrs), t.extend.apply(t, r)
						}
						return n
					}],
					svw: [/(<s-v-w> )?(<s-v-w> )?(<s-v-w> )?/, function (e, n, r) {
						return t.extend({}, e, n, r)
					}],
					"s-v-w": [/<font-style>|<font-variant>|<font-weight>/, function (t) {
						return t
					}],
					named: [/caption|icon|menu|message-box|small-caption|status-bar/, function (t) {
						return t
					}],
					"font-style": [/normal|italic|oblique/, function (t) {
						return {
							style: t
						}
					}],
					"font-variant": [/normal|small-caps/, function (t) {
						return {
							variant: t
						}
					}],
					"font-weight": [/normal|bold|bolder|lighter|<num>/, function (t) {
						return {
							weight: t
						}
					}],
					"font-size": [/<absolute-size>|<relative-size>|<length>/, function (t) {
						return {
							size: t
						}
					}],
					"line-height": [/normal|<length>/, function (t) {
						return {
							height: t
						}
					}],
					"absolute-size": [/xx-small|x-small|small|medium|large|x-large|xx-large/, function (t) {
						return t
					}],
					"relative-size": [/smaller|larger/i, function (t) {
						return t
					}],
					length: [/<num>(<unit>)?/, function (t, e) {
						return 0 === t ? 0 : t + (e || "px")
					}],
					unit: [/em|ex|ch|rem|vw|vh|vm|%|cm|mm|in|pt|pc|px/, function (t) {
						return t
					}],
					"font-family": [/[\S\s]+/, function (t) {
						return {
							family: t
						}
					}],
					num: [/[0-9]*(\.?)[0-9]*/, function (t) {
						return parseFloat(t)
					}]
				}),
				n = {
					style: "normal",
					variant: "normal",
					weight: "normal",
					size: "10px",
					height: "normal",
					family: "sans-serif"
				},
				r = a.Font = t.mkClass(function (i) {
					if (i) {
						if (i instanceof r) return i;
						if (i = e.parse(i)) return i
					}
					this.named = "", this.attrs = t.extend({}, n)
				}, {
					font: function (t) {
						return arguments.length ? (t = e.parse(t), t && (this.named = t.named, this.attrs = t.attrs), this) : this.getString()
					},
					fontStyle: function (t) {
						return arguments.length ? (this.named = "", this.attrs.style = t, this) : this.attrs.style
					},
					fontVariant: function (t) {
						return arguments.length ? (this.named = "", this.attrs.variant = t, this) : this.attrs.variant
					},
					fontWeight: function (t) {
						return arguments.length ? (this.named = "", this.attrs.weight = t, this) : this.attrs.weight
					},
					fontSize: function (t) {
						return arguments.length ? (this.named = "", this.attrs.size = t, this) : this.attrs.size
					},
					lineHeight: function (t) {
						return arguments.length ? (this.named = "", void(this.attrs.height = t)) : this.attrs.height
					},
					fontFamily: function (t) {
						return arguments.length ? (this.named = "", void(this.attrs.family = t)) : this.attrs.family
					},
					getString: function () {
						var t = this.attrs;
						if (this.named) return this.named;
						var e = [];
						t.style != n.style && e.push(t.style), t.variant != n.variant && e.push(t.variant), t.weight != n.weight && e.push(t.weight);
						var r = t.size;
						return /^[a-z-]{4,}$/.test(r) || (parseInt(r, 10) ? /^\d+$/.test("" + r) && (r += "px") : r = 0), t.height != n.height && (r += "/" + t.height), e.push(r, t.family), e.join(" ")
					}
				})
		}(),
		function () {
			function t(t) {
				return 0 > t ? 0 : t > 255 ? 255 : Math.round(t)
			}
			var e = a.util,
				n = a.Color = e.mkClass(function (r, i, a, o) {
					var s = arguments.length;
					if (0 === s) return new n.random;
					if (1 == s) {
						if (e.is(r, "string")) return n.lex.parse(r);
						e.is(r, "number") && (this.a = 1, this.b = 255 & r, this.g = r >> 8 & 255, this.r = r >> 16 & 255)
					} else s >= 3 && (this.r = t(r), this.g = t(i), this.b = t(a), "undefined" != typeof o ? this.a = o : this.a = 1)
				});
			n.lex = new a.Lex("color", {
				color: [/<rgb>|<rgba>|<hsl>|<hsla>|<hex>|<transparent>|<name>/, function (t) {
					return t
				}],
				transparent: [/transparent/, function () {
					return new n(255, 255, 255, 0)
				}],
				rgb: [/rgb\(<num>,<num>,<num>\)/, function (t, e, r) {
					return new n(t, e, r)
				}],
				rgba: [/rgba\(<num>,<num>,<num>,<num>\)/, function (t, e, r, i) {
					return new n(t, e, r, i)
				}],
				hsl: [/hsl\(<num>,(<num>|<percent>),(<num>|<percent>)\)/, function (t, e, r) {
					return n.hsl(t, e, r)
				}],
				hsla: [/hsla\(<num>,(<num>|<percent>),(<num>|<percent>),<num>\)/, function (t, e, r, i) {
					return n.hsl(t, e, r, i)
				}],
				name: [/[a-z]+/, function (t) {
					return t = n.names[t] || "#000", new n.hex(t)
				}],
				hex: [/#([0-9a-f]{3}|[0-9a-f]{6})/i, function (t) {
					return new n.hex(t)
				}],
				percent: [/<num>%/, function (t) {
					return 0 > t ? 0 : t > 100 ? 1 : t / 100
				}],
				num: [/[0-9]*(\.?)[0-9]*/, function (t) {
					return parseFloat(t)
				}]
			}), n.random = function () {
				return new n(255 * Math.random() | 0, 255 * Math.random() | 0, 255 * Math.random() | 0)
			}, n.hex = function (t) {
				var e = t.replace("#", ""),
					r = parseInt;
				return "3" == e.length ? new n(r(e.charAt(0) + e.charAt(0), 16), r(e.charAt(1) + e.charAt(1), 16), r(e.charAt(2) + e.charAt(2), 16)) : new n(r(e.substr(0, 2), 16), r(e.substr(2, 2), 16), r(e.substr(4, 2), 16))
			}, n.hsb = function (t, e, r, i) {
				var a = 0,
					o = 0,
					s = 0,
					l = r * e,
					u = l * (1 - Math.abs(t / 60 % 2 - 1)),
					c = r - l;
				switch (Math.floor(t / 60)) {
					case 0:
						a = l, o = u;
						break;
					case 1:
						a = u, o = l;
						break;
					case 2:
						o = l, s = u;
						break;
					case 3:
						o = u, s = l;
						break;
					case 4:
						a = u, s = l;
						break;
					case 5:
						a = l, s = u
				}
				return new n(255 * (a + c), 255 * (o + c), 255 * (s + c), i)
			}, n.hsl = function (t, e, r, i) {
				function a(t) {
					return t = 0 > t ? t + 1 : t > 1 ? t - 1 : t, 1 > 6 * t ? s + (o - s) * t * 6 : 1 > 2 * t ? o : 2 > 3 * t ? s + (o - s) * (2 / 3 - t) * 6 : s
				}
				t = t % 360 / 360;
				var o = .5 >= r ? r * (e + 1) : r + e - r * e,
					s = 2 * r - o;
				return new n(255 * a(t + 1 / 3), 255 * a(t), 255 * a(t - 1 / 3), i)
			}, n.names = {
				aliceblue: "#f0f8ff",
				antiquewhite: "#faebd7",
				aqua: "#00ffff",
				aquamarine: "#7fffd4",
				azure: "#f0ffff",
				beige: "#f5f5dc",
				bisque: "#ffe4c4",
				black: "#000000",
				blanchedalmond: "#ffebcd",
				blue: "#0000ff",
				blueviolet: "#8a2be2",
				brown: "#a52a2a",
				burlywood: "#deb887",
				cadetblue: "#5f9ea0",
				chartreuse: "#7fff00",
				chocolate: "#d2691e",
				coral: "#ff7f50",
				cornflowerblue: "#6495ed",
				cornsilk: "#fff8dc",
				crimson: "#dc143c",
				cyan: "#00ffff",
				darkblue: "#00008b",
				darkcyan: "#008b8b",
				darkgoldenrod: "#b8860b",
				darkgray: "#a9a9a9",
				darkgreen: "#006400",
				darkgrey: "#a9a9a9",
				darkkhaki: "#bdb76b",
				darkmagenta: "#8b008b",
				darkolivegreen: "#556b2f",
				darkorange: "#ff8c00",
				darkorchid: "#9932cc",
				darkred: "#8b0000",
				darksalmon: "#e9967a",
				darkseagreen: "#8fbc8f",
				darkslateblue: "#483d8b",
				darkslategray: "#2f4f4f",
				darkslategrey: "#2f4f4f",
				darkturquoise: "#00ced1",
				darkviolet: "#9400d3",
				deeppink: "#ff1493",
				deepskyblue: "#00bfff",
				dimgray: "#696969",
				dimgrey: "#696969",
				dodgerblue: "#1e90ff",
				firebrick: "#b22222",
				floralwhite: "#fffaf0",
				forestgreen: "#228b22",
				fuchsia: "#ff00ff",
				gainsboro: "#dcdcdc",
				ghostwhite: "#f8f8ff",
				gold: "#ffd700",
				goldenrod: "#daa520",
				gray: "#808080",
				green: "#008000",
				greenyellow: "#adff2f",
				grey: "#808080",
				honeydew: "#f0fff0",
				hotpink: "#ff69b4",
				indianred: "#cd5c5c",
				indigo: "#4b0082",
				ivory: "#fffff0",
				khaki: "#f0e68c",
				lavender: "#e6e6fa",
				lavenderblush: "#fff0f5",
				lawngreen: "#7cfc00",
				lemonchiffon: "#fffacd",
				lightblue: "#add8e6",
				lightcoral: "#f08080",
				lightcyan: "#e0ffff",
				lightgoldenrodyellow: "#fafad2",
				lightgray: "#d3d3d3",
				lightgreen: "#90ee90",
				lightgrey: "#d3d3d3",
				lightpink: "#ffb6c1",
				lightsalmon: "#ffa07a",
				lightseagreen: "#20b2aa",
				lightskyblue: "#87cefa",
				lightslategray: "#778899",
				lightslategrey: "#778899",
				lightsteelblue: "#b0c4de",
				lightyellow: "#ffffe0",
				lime: "#00ff00",
				limegreen: "#32cd32",
				linen: "#faf0e6",
				magenta: "#ff00ff",
				maroon: "#800000",
				mediumaquamarine: "#66cdaa",
				mediumblue: "#0000cd",
				mediumorchid: "#ba55d3",
				mediumpurple: "#9370d8",
				mediumseagreen: "#3cb371",
				mediumslateblue: "#7b68ee",
				mediumspringgreen: "#00fa9a",
				mediumturquoise: "#48d1cc",
				mediumvioletred: "#c71585",
				midnightblue: "#191970",
				mintcream: "#f5fffa",
				mistyrose: "#ffe4e1",
				moccasin: "#ffe4b5",
				navajowhite: "#ffdead",
				navy: "#000080",
				oldlace: "#fdf5e6",
				olive: "#808000",
				olivedrab: "#6b8e23",
				orange: "#ffa500",
				orangered: "#ff4500",
				orchid: "#da70d6",
				palegoldenrod: "#eee8aa",
				palegreen: "#98fb98",
				paleturquoise: "#afeeee",
				palevioletred: "#d87093",
				papayawhip: "#ffefd5",
				peachpuff: "#ffdab9",
				peru: "#cd853f",
				pink: "#ffc0cb",
				plum: "#dda0dd",
				powderblue: "#b0e0e6",
				purple: "#800080",
				red: "#ff0000",
				rosybrown: "#bc8f8f",
				royalblue: "#4169e1",
				saddlebrown: "#8b4513",
				salmon: "#fa8072",
				sandybrown: "#f4a460",
				seagreen: "#2e8b57",
				seashell: "#fff5ee",
				sienna: "#a0522d",
				silver: "#c0c0c0",
				skyblue: "#87ceeb",
				slateblue: "#6a5acd",
				slategray: "#708090",
				slategrey: "#708090",
				snow: "#fffafa",
				springgreen: "#00ff7f",
				steelblue: "#4682b4",
				tan: "#d2b48c",
				teal: "#008080",
				thistle: "#d8bfd8",
				tomato: "#ff6347",
				turquoise: "#40e0d0",
				violet: "#ee82ee",
				wheat: "#f5deb3",
				white: "#ffffff",
				whitesmoke: "#f5f5f5",
				yellow: "#ffff00",
				yellowgreen: "#9acd32"
			}, n.prototype = {
				hex: function () {
					return "#" + ((1 << 24) + (this.r << 16) + (this.g << 8) + (this.b << 0)).toString(16).slice(1)
				},
				getString: function () {
					return this.a < 1 ? "rgba(" + this.r + "," + this.g + "," + this.b + "," + this.a + ")" : this.hex()
				},
				clone: function () {
					return new n(this.r, this.g, this.b, this.a)
				}
			}
		}(),
		function () {
			var t = a.Color.lex.extend("linear", {
					linear: [/linear\(<num> <num> <num> <num>,<colors>\)/, function (t, n, r, i, a) {
						return new e(t, n, r, i, a)
					}],
					colors: [/<colorstop>(,<colorstop>)*/, function () {
						return [].slice.call(arguments)
					}],
					colorstop: [/<color> <num>/, function (t, e) {
						return [t, 0 > e ? 0 : e > 1 ? 1 : e]
					}]
				}),
				e = a.LinearGradient = a.util.mkClass(function (e, n, r, i, a) {
					this.x0 = this.x1 = this.y0 = this.y1 = 0, this.colors = [];
					var o = arguments.length;
					return 1 == o ? t.parse(e) : void(o > 4 && (this.x0 = e, this.y0 = n, this.x1 = r, this.y1 = i, this.colors = a))
				}, {
					getString: function () {
						for (var t = ["linear(", this.x0, " ", this.y0, " ", this.x1, " ", this.y1, ","], e = [], n = 0; n < this.colors.length; n++) e.push(this.colors[n][0].getString() + " " + this.colors[n][1]);
						return t.push(e.join(","), ")"), t.join("")
					},
					toContext: function (t) {
						for (var e = t.createLinearGradient(this.x0, this.y0, this.x1, this.y1), n = 0; n < this.colors.length; n++) e.addColorStop(this.colors[n][1], this.colors[n][0].getString());
						return e
					},
					clone: function () {
						var t = new e;
						return t.x0 = this.x0, t.y0 = this.y0, t.x1 = this.x1, t.y1 = this.y1, t.colors = this.colors.slice(), t
					}
				})
		}(),
		function () {
			var t = a,
				e = t.Color.lex.extend("radial", {
					radial: [/radial\(<position>,<colors>\)/, function (e, n) {
						return new t.RadialGradient(e[0], e[1], e[2], e[3], e[4], e[5], n)
					}],
					position: [/(<num> <num> <num>)|(<num> <num> <num> <num>)||(<num> <num> <num> <num> <num>)|(<num> <num> <num> <num> <num> <num>)/, function () {
						var t = [].slice.call(arguments),
							e = t.length;
						return 3 == e ? (t[3] = t[0], t[4] = t[1], t[5] = t[2], t[2] = 0) : 4 == e ? (t[5] = t[3], t[3] = t[0], t[4] = t[1]) : 5 == e && (t[5] = t[2]), t
					}],
					colors: [/<colorstop>(,<colorstop>)*/, function () {
						return [].slice.call(arguments)
					}],
					colorstop: [/<color> <num>/, function (t, e) {
						return [t, 0 > e ? 0 : e > 1 ? 1 : e]
					}]
				}),
				n = t.RadialGradient = t.util.mkClass(function (t, n, r, i, a, o, s) {
					this.x0 = this.x1 = this.y0 = this.y1 = this.r0 = this.r1 = 0, this.colors = [];
					var l = arguments.length;
					if (1 == l) return e.parse(t);
					if (4 == l) s = i, i = t, a = n, o = r, r = 0;
					else if (5 == l) s = a, o = i, a = n, i = t;
					else if (6 == l) s = o, o = r;
					else if (7 != l) throw new Error("wrong number of arguments");
					this.x0 = t, this.y0 = n, this.r0 = r, this.x1 = i, this.y1 = a, this.r1 = o, this.colors = s
				}, {
					getString: function () {
						for (var t = ["radial(", this.x0, " ", this.y0, " ", this.r0, " ", this.x1, " ", this.y1, " ", this.r1, ","], e = [], n = 0; n < this.colors.length; n++) e.push(this.colors[n][0].getString() + " " + this.colors[n][1]);
						return t.push(e.join(","), ")"), t.join("")
					},
					toContext: function (t) {
						for (var e = t.createRadialGradient(this.x0, this.y0, this.r0, this.x1, this.y1, this.r1), n = 0; n < this.colors.length; n++) e.addColorStop(this.colors[n][1], this.colors[n][0].getString());
						return e
					},
					clone: function () {
						var t = new n;
						return t.x0 = this.x0, t.y0 = this.y0, t.r0 = this.r0, t.x1 = this.x1, t.y1 = this.y1, t.r1 = this.r1, t.colors = this.colors.slice(), t
					}
				})
		}(),
		function () {
			var t = a,
				e = t.Style = t.util.mkClass(function (e) {
					if (!e) return this.type = "color", void(this.o = new t.Color(0, 0, 0));
					var n = e.split(/[( ]+/)[0];
					"linear" == n ? this.o = new t.LinearGradient(e) : "radial" == n ? this.o = new t.RadialGradient(e) : (n = "color", this.o = new t.Color(e)), this.type = n
				}, {
					getString: function () {
						return this.o.getString()
					},
					toContext: function (t) {
						return "color" == this.type ? this.o.getString() : this.o.toContext(t)
					},
					clone: function () {
						var t = new e;
						return t.type = this.type, t.o = this.o.clone(), t
					},
					add: function (t, e) {
						e = e || 0;
						var n = this.clone();
						return t.type == n.type && "color" == n.type && (n.o.r += e * t.o.r, n.o.g += e * t.o.g, n.o.b += e * t.o.b, n.o.a += e * t.o.a), n
					}
				})
		}(),
		function () {
			function t(t) {
				var e = t[1];
				switch (t[0]) {
					case "c":
					case "C":
						return ["c", [e[0], e[1]]];
					case "t":
					case "T":
						return ["t", [0, 0]];
					case "r":
					case "R":
						return ["r", [0, e[1], e[2]]];
					case "s":
					case "S":
						return ["s", [1, 1, e[2], e[3]]];
					case "m":
					case "M":
						return ["m", [1, 0, 0, 1, 0, 0]]
				}
			}

			function e(e, n) {
				for (var r, i, a = 0; a < e.length || a < n.length; a++) r = e[a], i = n[a], r ? i ? r[0] != i[0] && (e.splice(a, 0, t(i)), n.splice(a + 1, 0, t(r))) : n.push(t(r)) : e.push(t(i))
			}
			var n = a.util;
			a.Transform = n.mkClass(function (t) {
				this.transform = [], this._matrix = new r, t && this.parseStr(t)
			}, {
				parseStr: function (t) {
					function e(t) {
						t && s.push(parseFloat(t));
					}
					var r, i = "t,r,s,m,c".split(",");
					for (r = 0; r < i.length; r++) t = t.replace(new RegExp(i[r], "ig"), "|" + i[r]);
					var a = t.split(/\|+/);
					for (r = 0; r < a.length; r++)
						if (a[r]) {
							var o = a[r].charAt(0),
								s = [];
							switch (n.each(a[r].substr(1).split(/[, ]+/), e), o) {
								case "c":
								case "C":
									this.transform.push(["c", s]), this._matrix.center.apply(this._matrix, s);
									break;
								case "t":
								case "T":
									this.transform.push(["t", s]), this._matrix.translate.apply(this._matrix, s);
									break;
								case "r":
								case "R":
									this.transform.push(["r", s]), this._matrix.rotate.apply(this._matrix, s);
									break;
								case "s":
								case "S":
									1 == s.length && s.push(s[0]), this.transform.push(["s", s]), this._matrix.scale.apply(this._matrix, s);
									break;
								case "m":
								case "M":
									this.transform.push(["m", s]), this._matrix.transform.apply(this._matrix, [s])
							}
						}
				},
				_parseMatrix: function () {
					var t = this._matrix = new r;
					n.each(this.transform, function (e) {
						var n = e[0],
							r = e[1];
						switch (n) {
							case "c":
							case "C":
								t.center.apply(t, r);
								break;
							case "t":
							case "T":
								t.translate.apply(t, r);
								break;
							case "r":
							case "R":
								t.rotate.apply(t, r);
								break;
							case "s":
							case "S":
								t.scale.apply(t, r);
								break;
							case "m":
							case "M":
								t.transform.apply(t, r)
						}
					})
				},
				clone: function () {
					var t = new a.Transform;
					return t.transform = [], n.each(this.transform, function (e) {
						t.transform.push([e[0], e[1].slice()])
					}), t._matrix = this._matrix.clone(), t
				},
				add: function (t, n) {
					n = n || 1;
					var r = this.clone();
					e(r.transform, t.transform);
					for (var i = 0; i < r.transform.length; i++)
						for (var a = r.transform[i][1], o = t.transform[i][1], s = 0; s < a.length; s++) a[s] += n * o[s];
					return r._parseMatrix(), r
				},
				getMatrix: function () {
					return this._matrix.getMatrix()
				},
				getString: function () {
					var t, e, n = [];
					for (t = 0; t < this.transform.length; t++) e = this.transform[t], n.push(e[0], e[1].join(","));
					return n.join("")
				},
				transformed: function (t, e) {
					return this._matrix.transformed(t, e)
				},
				inversed: function (t, e) {
					return this._matrix.inversed(t, e)
				}
			});
			var r = n.mkClass(function () {
				this.m = [1, 0, 0, 1, 0, 0], this.cx = this.cy = 0
			}, {
				clone: function () {
					var t = new r;
					return t.m = this.m.slice(), t.cx = this.cx, t.cy = this.cy, t
				},
				center: function (t, e) {
					this.cx = t, this.cy = e
				},
				translate: function (t, e) {
					this.transform([1, 0, 0, 1, t, e])
				},
				scale: function (t, e, n, r) {
					n = n || this.cx, r = r || this.cy, this.transform([t, 0, 0, e, n * (1 - t), r * (1 - e)])
				},
				rotate: function (t, e, n) {
					e = e || this.cx, n = n || this.cy;
					var r = t * Math.PI / 180,
						i = Math.cos(r),
						a = Math.sin(r),
						o = e - i * e + a * n,
						s = n - a * e - i * n;
					this.transform([i, a, -a, i, o, s])
				},
				transform: function (t) {
					var e = this.m,
						n = t[0] * e[0] + t[2] * e[1],
						r = t[1] * e[0] + t[3] * e[1],
						i = t[0] * e[2] + t[2] * e[3],
						a = t[1] * e[2] + t[3] * e[3],
						o = t[0] * e[4] + t[2] * e[5] + t[4],
						s = t[1] * e[4] + t[3] * e[5] + t[5];
					this.m[0] = n, this.m[1] = r, this.m[2] = i, this.m[3] = a, this.m[4] = o, this.m[5] = s
				},
				getMatrix: function () {
					return this.m
				},
				transformed: function (t, e) {
					var n = this.m;
					return {
						x: n[0] * t + n[2] * e + n[4],
						y: n[1] * t + n[3] * e + n[5]
					}
				},
				inversed: function (t, e) {
					var n = this.m,
						r = n[1] * n[2] - n[0] * n[3];
					return {
						x: (n[2] * e - n[3] * t + n[3] * n[4] - n[2] * n[5]) / r,
						y: (n[1] * t - n[0] * e + n[0] * n[5] - n[1] * n[4]) / r
					}
				}
			})
		}(),
		function () {
			function t(e, n, r, i, a, o, s, l, u, c) {
				var h, f, g, d, p, A = Math,
					C = A.PI,
					v = 120 * C / 180,
					I = C / 180 * (+a || 0),
					m = [],
					y = function (t, e, n) {
						var r = t * A.cos(n) - e * A.sin(n),
							i = t * A.sin(n) + e * A.cos(n);
						return {
							x: r,
							y: i
						}
					};
				if (c) f = c[0], g = c[1], d = c[2], p = c[3];
				else {
					h = y(e, n, -I), e = h.x, n = h.y, h = y(l, u, -I), l = h.x, u = h.y;
					var b = (e - l) / 2,
						_ = (n - u) / 2,
						x = b * b / (r * r) + _ * _ / (i * i);
					x > 1 && (x = A.sqrt(x), r = x * r, i = x * i);
					var w = r * r,
						k = i * i,
						T = (o == s ? -1 : 1) * A.sqrt(A.abs((w * k - w * _ * _ - k * b * b) / (w * _ * _ + k * b * b)));
					d = T * r * _ / i + (e + l) / 2, p = T * -i * b / r + (n + u) / 2, f = A.asin(((n - p) / i).toFixed(9)), g = A.asin(((u - p) / i).toFixed(9)), f = d > e ? C - f : f, g = d > l ? C - g : g, 0 > f && (f = 2 * C + f), 0 > g && (g = 2 * C + g), s && f > g && (f -= 2 * C), !s && g > f && (g -= 2 * C)
				}
				var E = g - f;
				if (A.abs(E) > v) {
					var S = g,
						D = l,
						P = u;
					g = f + v * (s && g > f ? 1 : -1), l = d + r * A.cos(g), u = p + i * A.sin(g), m = t(l, u, r, i, a, 0, s, D, P, [g, S, d, p])
				}
				E = g - f;
				var O = A.cos(f),
					M = A.sin(f),
					L = A.cos(g),
					j = A.sin(g),
					F = A.tan(E / 4),
					N = 4 / 3 * r * F,
					q = 4 / 3 * i * F,
					R = [e, n],
					B = [e + N * M, n - q * O],
					V = [l + N * j, u - q * L],
					X = [l, u];
				if (B[0] = 2 * R[0] - B[0], B[1] = 2 * R[1] - B[1], c) return [B, V, X].concat(m);
				m = [B, V, X].concat(m).join().split(",");
				for (var U = [], z = 0, W = m.length; W > z; z++) U[z] = z % 2 ? y(m[z - 1], m[z], I).y : y(m[z], m[z + 1], I).x;
				return U
			}

			function e(t, e, n, r, i, a) {
				var o = 1 / 3,
					s = 2 / 3;
				return [o * t + s * n, o * e + s * r, o * i + s * n, o * a + s * r, i, a]
			}

			function n(e) {
				var n, r = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"];
				for (n = 0; n < r.length; n++) e = e.replace(new RegExp(r[n], "g"), "|" + r[n]);
				var i, a, o, s, l, u, c, h, f, g, d = e.split("|"),
					p = 0,
					A = 0,
					C = [];
				for (n = 1; n < d.length; n++) {
					var v = d[n].charAt(0);
					e = d[n].substr(1);
					var I = e.replace(/\-/g, ",-").replace(/e,\-/g, "e-").split(/[, ]+/);
					I.length > 0 && "" === I[0] && I.shift();
					for (var m = 0; m < I.length; m++) I[m] = parseFloat(I[m]);
					for (; I.length > 0 && !isNaN(I[0]);) {
						var y = [],
							b = v;
						switch (v) {
							case "M":
								p = I.shift(), A = I.shift(), y.push(p, A), b = "moveTo", v = "L";
								break;
							case "m":
								p += I.shift(), A += I.shift(), y.push(p, A), b = "moveTo", v = "l";
								break;
							case "L":
								p = I.shift(), A = I.shift(), y.push(p, A), b = "lineTo";
								break;
							case "l":
								p += I.shift(), A += I.shift(), y.push(p, A), b = "lineTo";
								break;
							case "v":
								A += I.shift(), y.push(p, A), b = "lineTo";
								break;
							case "V":
								A = I.shift(), y.push(p, A), b = "lineTo";
								break;
							case "h":
								p += I.shift(), y.push(p, A), b = "lineTo";
								break;
							case "H":
								p = I.shift(), y.push(p, A), b = "lineTo";
								break;
							case "z":
							case "Z":
								b = "closePath";
								break;
							case "c":
								y.push(p + I.shift(), A + I.shift(), p + I.shift(), A + I.shift()), p += I.shift(), A += I.shift(), y.push(p, A), b = "bezierCurveTo";
								break;
							case "C":
								y.push(I.shift(), I.shift(), I.shift(), I.shift()), p = I.shift(), A = I.shift(), y.push(p, A), b = "bezierCurveTo";
								break;
							case "q":
								y.push(p + I.shift(), A + I.shift()), p += I.shift(), A += I.shift(), y.push(p, A), b = "quadraticCurveTo";
								break;
							case "Q":
								y.push(I.shift(), I.shift()), p = I.shift(), A = I.shift(), y.push(p, A), b = "quadraticCurveTo";
								break;
							case "t":
								h = p, f = A, g = C[C.length - 1], g && "quadraticCurveTo" === g[0] && (h = p + (p - g[1][0]), f = A + (A - g[1][1])), p += I.shift(), A += I.shift(), y.push(h, f, p, A), b = "quadraticCurveTo";
								break;
							case "T":
								h = p, f = A, g = C[C.length - 1], g && "quadraticCurveTo" === g[0] && (h = p + (p - g[1][0]), f = A + (A - g[1][1])), p = I.shift(), A = I.shift(), y.push(h, f, p, A), b = "quadraticCurveTo";
								break;
							case "s":
								h = p, f = A, g = C[C.length - 1], g && "bezierCurveTo" === g[0] && (h = p + (p - g[1][2]), f = A + (A - g[1][3])), y.push(h, f, I.shift(), I.shift()), p += I.shift(), A += I.shift(), y.push(p, A), b = "bezierCurveTo";
								break;
							case "S":
								h = p, f = A, g = C[C.length - 1], g && "bezierCurveTo" === g[0] && (h = p + (p - g[1][2]), f = A + (A - g[1][3])), y.push(h, f, I.shift(), I.shift()), p = I.shift(), A = I.shift(), y.push(p, A), b = "bezierCurveTo";
								break;
							case "a":
								for (i = I.shift(), a = I.shift(), o = I.shift(), s = I.shift(), l = I.shift(), u = p, c = A, p += I.shift(), A += I.shift(), b = "bezierCurveTo", y = t(u, c, i, a, o, s, l, p, A); y.length > 6;) C.push([b, y.splice(0, 6)]);
								break;
							case "A":
								for (i = I.shift(), a = I.shift(), o = I.shift(), s = I.shift(), l = I.shift(), u = p, c = A, p = I.shift(), A = I.shift(), b = "bezierCurveTo", y = t(u, c, i, a, o, s, l, p, A); y.length > 6;) C.push([b, y.splice(0, 6)])
						}
						C.push([b, y])
					}("z" == v || "Z" == v) && C.push(["closePath", []])
				}
				return C
			}

			function r(n) {
				for (var r, i, a, o, s = [], l = 0; l < n.length; l++) {
					var u = n[l][0],
						c = n[l][1].slice();
					switch (u) {
						case "moveTo":
							u = "moveTo", c = [c[0], c[1], c[0], c[1], c[0], c[1]];
							break;
						case "lineTo":
							u = "bezierCurveTo", c = [r, i, c[0], c[1], c[0], c[1]];
							break;
						case "A":
							u = "bezierCurveTo", c = t(0, [r, i].concat(s.slice(1)));
							break;
						case "quadraticCurveTo":
							u = "bezierCurveTo", c = e(r, i, c[0], c[1], c[2], c[3]);
							break;
						case "closePath":
							u = "bezierCurveTo", c = [r, i, a, o, a, o]
					}
					s.push([u, c]);
					var h = c.length;
					h && (r = c[h - 2], i = c[h - 1]), 0 === l && (a = r, o = i)
				}
				return s
			}

			function i(t) {
				var e = [];
				if (t)
					for (var n = 0; n < t.length; n++) e.push([t[n][0], t[n][1].slice()]);
				return e
			}

			function o(t, e) {
				var n, r, i, a, o, s, l = Math.max(t.length, e.length);
				o = t[0] && t[0][1] || e[0][1], s = e[0] && e[0][1] || t[0][1], n = o[o.length - 2], r = o[o.length - 1], i = s[s.length - 2], a = s[s.length - 1];
				for (var u = 0; l > u; u++) o = t[u], s = e[u], o ? s ? o[0] != s[0] && ("moveTo" == s[0] ? (o = [s[0],
					[n, r, n, r, n, r]
				], t.splice(u, 0, o)) : "moveTo" == o[0] && (s = [o[0],
					[i, a, i, a, i, a]
				], e.splice(u, 0, s))) : (s = [o[0],
					[i, a, i, a, i, a]
				], e.splice(u, 0, s)) : (o = [s[0],
					[n, r, n, r, n, r]
				], t.splice(u, 0, o)), o = o[1], n = o[o.length - 2], r = o[o.length - 1], s = s[1], i = s[s.length - 2], a = s[s.length - 1];
				return u
			}
			var s = a.util;
			a.Path = s.mkClass(function (t) {
				this.path = [], t && (this.path = n(t))
			}, {
				clone: function () {
					var t = new a.Path;
					return t.path = i(this.path), t.curve = this.curve, t
				},
				push: function (t) {
					var e = [].slice.call(arguments, 1);
					this.path.push([t, e]), this.curve = !1
				},
				getLastPosition: function () {
					for (var t = 0, e = 0, n = this.path.length - 1; n >= 0; n--) {
						var r = this.path[n][1].length;
						if (r > 1) {
							t = this.path[n][1][r - 2], e = this.path[n][1][r - 1];
							break
						}
					}
					return {
						x: t,
						y: e
					}
				},
				arcTo: function (e, n, r, i, a, o, s) {
					for (var l = this.getLastPosition(), u = t(l.x, l.y, e, n, r, i, a, o, s); u.length >= 6;) this.path.push(["bezierCurveTo", u.splice(0, 6)]);
					this.curve = !1
				},
				getVertex: function () {
					for (var t = this.path, e = [], n = [], r = 0; r < t.length; r++) {
						var i = t[r][1],
							a = i.length;
						a > 1 ? n.push([i[a - 2], i[a - 1]]) : n.length && (e.push({
							polygon: !0,
							vertex: n
						}), n = [])
					}
					return e
				},
				add: function (t, e) {
					e = e || 1;
					var n = this.clone();
					n.curve || (n.curve = !0, n.path = r(n.path)), t.curve || (t.curve = !0, t.path = r(t.path));
					for (var i, a, s = o(n.path, t.path), l = 0; s > l; l++) {
						i = n.path[l], a = t.path[l];
						for (var u = 0; u < i[1].length; u++) i[1][u] += e * a[1][u]
					}
					return n
				},
				getString: function () {
					var t = [];
					return s.each(this.path, function (e) {
						var n = "";
						switch (e[0]) {
							case "moveTo":
								n = "M";
								break;
							case "lineTo":
								n = "L";
								break;
							case "closePath":
								n = "Z";
								break;
							case "bezierCurveTo":
								n = "C";
								break;
							case "quadraticCurveTo":
								n = "Q";
								break;
							default:
								n = e[0]
						}
						t.push(n + e[1].join(","))
					}), t.join("")
				}
			})
		}(),
		function () {
			function t(t) {
				n.prototype[t] = function () {
					var e = [].slice.call(arguments);
					this.each(function (n) {
						n[t].apply(n, e)
					})
				}
			}
			var e = a,
				n = e.Collection = function () {
					var t, e;
					e = Array.prototype.slice.apply(arguments), t = [], t.push.apply(t, e);
					for (var r in n.prototype) n.prototype.hasOwnProperty(r) && (t[r] = n.prototype[r]);
					return t
				};
			n.prototype.each = function (t) {
				for (var e = 0; e < this.length; e++) t(this[e], e)
			}, n.addMethod = function (e) {
				e = e.split(/[, ]+/);
				for (var n = 0; n < e.length; n++) t(e[n])
			}
		}(),
		function () {
			var t = a,
				e = t.util,
				n = e.is,
				r = 1,
				i = t.Node = e.mkClass(function (e) {
					this.children = new t.Collection, this.parent = null, this.type = e || "node", this._attrs = {}, this._attrsCompiled = {}, this._datas = {}, this._colorKey = new t.Color(r++).hex()
				}, {
					method: function (t) {
						for (var e in t) this[e] = t[e];
						return this
					},
					id: function (t) {
						return arguments.length ? (this._id = "" + t, this) : this._id
					},
					$: function (t, e) {
						var n = arguments.length;
						return n ? (1 == n && (e = t, t = "_id"), this.filter(function () {
							return this[t] == e
						}, !0)) : void 0
					},
					filter: function (e, n) {
						for (var r = new t.Collection, i = 0, a = this.children.length; a > i; i++) {
							var o = this.children[i];
							if (e.call(o) && (r.push(o), n)) return o;
							var s = o.filter(e, n);
							if (s) {
								if (n) return s;
								s.length && r.push.apply(r, s)
							}
						}
						return n ? r[0] : r
					},
					shift: e.shift,
					show: function () {
						return this.display(!0)
					},
					hide: function () {
						return this.display(!1)
					},
					visible: function () {
						return this.display() && (!this.parent && "canvas" === this.type || this.parent && this.parent.visible())
					},
					append: function (t) {
						return t && (t.remove(), t.parent = this, this.children.push(t), this.dirty()), this
					},
					appendTo: function (t) {
						return t && t.append(this), this
					},
					contains: function (t) {
						if (!t) return !1;
						for (; t;) {
							if (t == this) return !0;
							t = t.parent
						}
						return !1
					},
					_afterRemove: function () {},
					remove: function () {
						if (this.parent) {
							this.empty();
							for (var t = this.parent.children, e = 0; e < t.length; e++)
								if (t[e] == this) {
									t.splice(e, 1);
									break
								} this._afterRemove(), this.parent = null
						}
						return this.dirty(), this
					},
					empty: function () {
						for (var t = this.children, e = 0; e < t.length; e++) t[e]._afterRemove(), t[e].empty(), t[e].parent = null;
						return t.length = 0, this.dirty(), this
					},
					clone: function () {
						return null
					},
					toFront: function () {
						var t, e = 0,
							n = this.parent.children;
						for (t = 0; t < n.length; t++) e = Math.max(e, n[t].zIndex());
						return this.zIndex(++e), this
					},
					toBack: function () {
						var t, e = Number.MAX_VALUE,
							n = this.parent.children;
						for (t = 0; t < n.length; t++) e = Math.min(e, n[t].zIndex());
						return this.zIndex(--e), this
					},
					_compileAttrs: function () {},
					_clearCache: function () {},
					compileAttrs: function () {
						this._dirtyAttr && (this._dirtyAttr = !1, this._compileAttrs(), this._clearCache()), e.each(this.children, function (t) {
							t.compileAttrs()
						})
					},
					_getChildrenByZIndex: function () {
						var t, e, n = [],
							r = 0;
						return this.children.each(function (i) {
							for (e = i.zIndex(), t = r; t > 0 && !(n[t - 1].zIndex() <= e); t--);
							n.splice(t, 0, i), r++
						}), n
					},
					draw: function () {
						return this.visible() && e.each(this._getChildrenByZIndex(), function (t) {
							t.draw()
						}), this
					},
					dirty: function (t) {
						return t && (this._dirtyAttr = !0), this
					}
				});
			i.addGetAndSet = function (t, r) {
				t = t.prototype;
				var i = "_" + r + "s",
					a = r.charAt(0).toUpperCase() + r.slice(1),
					o = "get" + a,
					s = "_" + o,
					l = "set" + a,
					u = "_" + l;
				t[s] = t[u] = function () {}, t[o] = function (t) {
					var e = this[s](t);
					return n(e, "undefined") && (e = this[i][t]), e
				}, t[l] = function (t, n) {
					return e.isEqual(this[o](t), n) || (this[u](t, n) || (this[i][t] = n), this.dirty(!0)), this
				}, t[r] = function (t, e) {
					var r, a, s, u = this[i],
						c = {};
					if (n(t, "null") || n(t, "undefined")) {
						for (s in u) c[s] = this[o](s);
						return c
					}
					if (n(e, "null") || n(e, "undefined")) {
						if (n(t, "string")) {
							var h = t.split(/[, ]+/);
							for (r = 0, a = h.length; a > r; r++) t = h[r], c[t] = this[o](t);
							return a - 1 ? c : c[h[0]]
						}
						if (n(t, "array")) {
							for (c = {}, r = 0, a = t.length; a > r; r++) c[t[r]] = this[o](t[r]);
							return c
						}
					}
					if (n(t, "object"))
						for (s in t) this[l](s, t[s]);
					else this[l](t, e);
					return this
				}
			}, i.addGetSet = function (t, r, a) {
				if (n(r, "object"))
					for (var o in r) i.addGetSet(t, o, r[o]);
				else {
					if (n(r, "string")) {
						if (r = r.split(/[, ]+/), r.length > 1) {
							for (var s = 0; s < r.length; s++) i.addGetSet(t, r[s], a);
							return
						}
						r = r[0]
					}
					if (n(t, "array")) return void e.each(t, function (t) {
						i.addGetSet(t, r, a)
					});
					t = t.prototype;
					var l = "Attr",
						u = "set" + l,
						c = "get" + l;
					t[e.camelize(r)] = function (t) {
						var e = arguments.length;
						return e ? (e > 1 && (t = Array.prototype.slice.call(arguments)), this[u](r, t), this) : (t = this[c](r), n(t, "undefined") && (t = a), t)
					}
				}
			}, i.addGetAndSet(i, "attr"), i.addGetAndSet(i, "data"), i.addGetSet(i, "display", !0), i.addGetSet(i, "z-index", 0), t.Collection.addMethod("show hide remove attr")
		}(),
		function () {
			var t = a,
				e = t.util,
				n = {
					_getEvents: function (t) {
						var e = this._events;
						e || (e = this._events = {});
						var n = e[t];
						return n || (n = e[t] = []), n
					},
					on: function (t, n, r) {
						var i = this;
						return r = r || this, e.each(t.split(/[, ]/), function (t) {
							var e = i._getEvents(t);
							e.push([n, r])
						}), this
					},
					off: function (t, n) {
						var r = this;
						return e.each(t.split(/[, ]/), function (t) {
							var e = r._getEvents(t);
							if (n) {
								for (var i = 0; i < e.length; i++)
									if (e[i][0] == n) {
										e.splice(i, 1);
										break
									}
							} else e.length = 0
						}), this
					},
					fire: function (t, e) {
						for (var n = this._getEvents(t), r = 0; r < n.length; r++) {
							var i = n[r];
							if (i && (i[0].call(i[1], e), e && e.cancelBubble)) break
						}
						return e && e.cancelBubble || !this.parent || !this.parent.fire || this.parent.fire(t, e), this
					}
				};
			t.EventEmitter = e.mkClass(n), e.extend(t.Node.prototype, n, {
				hasEventListener: function () {
					var t = this._events;
					for (var e in t)
						if (t[e].length) return !0;
					return this.parent && "group" == this.parent.type ? this.parent.hasEventListener() : !1
				}
			});
			var r = ["mousedown", "mousemove", "mouseover", "mouseup", "mouseout", "click", "dbclick", "touchstart", "touchmove", "touchend", "tap", "dbtap"];
			e.each(r, function (e) {
				t.Node.prototype[e] = function (t) {
					return this.on(e, t), this
				}, t.Node.prototype["un" + e] = function (t) {
					return this.off(e, t), this
				}, t.Collection.addMethod(e + " un" + e)
			}), t.Collection.addMethod("on off"), t.Node.prototype.drag = function (t, e, n) {
				var r = this;
				this.undrag();
				var i = r._dragConfig = {},
					a = !!document.attachEvent,
					o = function (t) {
						return t.touches && (t = t.touches[0]), {
							x: t.clientX - i.point.x,
							y: t.clientY - i.point.y
						}
					};
				return i.onDrag = function (t) {
					if (t = t || window.event, i.mousedown) {
						var n = o(t);
						e && e.call(r, t, n.x, n.y)
					}
				}, i.onEnd = function (t) {
					if (t = t || window.event, i.mousedown) {
						i.mousedown = !1;
						var e = o(t);
						n && n.call(r, t, e.x, e.y), i.removeEventListener()
					}
				}, i.onBeg = function (e) {
					i.mousedown = !0, i.point = {
						x: e.rel.clientX,
						y: e.rel.clientY
					}, a ? (document.attachEvent("onmousemove", i.onDrag), document.attachEvent("onmouseup", i.onEnd), i.removeEventListener = function () {
						document.detachEvent("onmousemove", i.onDrag), document.detachEvent("onmouseup", i.onEnd)
					}) : (document.addEventListener("mousemove", i.onDrag, !1), document.addEventListener("touchmove", i.onDrag, !1), document.addEventListener("mouseup", i.onEnd, !1), document.addEventListener("touchend", i.onEnd, !1), i.removeEventListener = function () {
						document.removeEventListener("mousemove", i.onDrag), document.removeEventListener("touchmove", i.onDrag), document.removeEventListener("mouseup", i.onEnd), document.removeEventListener("touchend", i.onEnd)
					}), t && t.call(r, e)
				}, r.on("mousedown touchstart", i.onBeg), this
			}, t.Node.prototype.undrag = function () {
				var t = this._dragConfig;
				return t && (t.removeEventListener && t.removeEventListener(), this.off("mousedown touchstart", t.onBeg), this._dragConfig = null), this
			}, t.Collection.addMethod("drag undrag")
		}(),
		function () {
			var t = a,
				e = t.util,
				n = t.DBCLICKWINDOW = 400,
				r = t.DBTAPWINDOW = 400,
				i = t.Event = function (t, e, n, r, a) {
					this.type = t, this.x = e, this.y = n, this.target = r, this.rel = a, this.time = +new Date, this.button = a.button, r && r.__hitArea && (this.hitArea = r.__hitArea), this.clone = function (t, e) {
						return new i(t || this.type, this.x, this.y, e || this.target, this.rel)
					}
				},
				o = ["mousedown", "mousemove", "mouseup", "mouseout", "touchstart", "touchmove", "touchend"],
				s = t.Canvas = t.Node.extend(function (n, r, i) {
					s.$super(this, "canvas");
					var a = e.is(n, "string") ? document.getElementById(n) : n || document.body,
						o = {};
					o = 3 == arguments.length ? {
						width: r,
						height: i,
						zoom: e.PIXEL_RATIO
					} : t.util.extend(r || {}, {
						zoom: e.PIXEL_RATIO
					});
					var l = this.node = document.createElement("div");
					l.style.cssText = "position:relative;-moz-user-select:none;-webkit-user-select:none;z-index:0;", l.unselectable = "on", l.onselectstart = function () {
						return !1
					}, a.appendChild(l), this._init(), this.attr(o)
				}, {
					_init: function () {
						var t = this;
						if (e.canvas) {
							e.each(o, function (n) {
								var r = e.throttle(function (e) {
									e = t._crtEvent(n, e), t["_" + n](e)
								});
								t.node.addEventListener(n, function (t) {
									r(e.cloneEvent(t))
								}, !1)
							});
							var n = document.createElement("img");
							n.setAttribute("draggable", "false"), n.ondragstart = function () {
								return !1
							}, n.style.cssText = 'position:absolute;left:0;top:0;width:100%;height:100%;z-index:999;-ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";-webkit-filter:opacity(0);filter:opacity(0);opacity:0;', this.node.appendChild(n);
							var r = !0;
							this.node.addEventListener("contextmenu", function () {
								n.src = t.toDataUrl(r)
							})
						}
					},
					_resize: function () {
						var t = this.width(),
							n = this.height(),
							r = this.zoom(),
							i = (r[0] || 1) * t,
							a = (r[1] || 1) * n;
						this.node.style.width = t + "px", this.node.style.height = n + "px", e.each(this.children, function (e) {
							e.node.width = i, e.node.height = a, e.node.style.width = t + "px", e.node.style.height = n + "px", e.draw()
						})
					},
					_setAttr: function (t, n) {
						return "width" == t || "height" == t || "zoom" == t ? ("zoom" == t && (e.is(n, "array") || (n = [n || 1, n || 1])), this._attrs[t] = n, this._resize(), !0) : void 0
					},
					clear: function () {
						return e.each(this.children, function (t) {
							t.clear()
						}), this
					},
					remove: function () {
						this.node.parentNode.removeChild(this.node), this._afterRemove()
					},
					_crtEvent: function (t, e) {
						var n, r, a = this.node.getBoundingClientRect();
						e.touches && e.touches[0] ? (n = e.touches[0].clientX - a.left || 0, r = e.touches[0].clientY - a.top || 0) : (n = e.clientX - a.left || 0, r = e.clientY - a.top || 0);
						for (var o, s = this.hidenLayer().context(), l = this.children, u = l.length - 1; u >= 0 && !(o = l[u]._isPointInShape(n, r, s)); u--);
						return new i(t, n, r, o || this, e)
					},
					_fireEvent: function (t) {
						t.target ? t.target.fire(t.type, t) : e.each(this.children, function (e) {
							e.contains(t.target) || e.fire(t.type, t)
						})
					},
					_mousemove: function (t) {
						if (this._fireEvent(t), this._currentTarget != t.target) {
							var e = t.clone("mouseover");
							e.relatedTarget = this._currentTarget, this._fireEvent(e), this._currentTarget && (e = t.clone("mouseout", this._currentTarget), e.relatedTarget = t.target, this._fireEvent(e)), this._currentTarget = t.target
						}
					},
					_mouseout: function (t) {
						if (this._currentTarget) {
							var e = t.clone("mouseout", this._currentTarget);
							this._fireEvent(e), this._currentTarget = !1
						} else this._fireEvent(t)
					},
					_mousedown: function (t) {
						this._fireEvent(t), this._mouseDownEvent = t
					},
					_mouseup: function (t) {
						if (this._fireEvent(t), this._mouseDownEvent && this._mouseDownEvent.target == t.target) {
							var e = t.clone("click");
							this._fireEvent(e), this._inDbClickWindow && this._fireEvent(t.clone("dbclick")), this._inDbClickWindow = !0;
							var r = this;
							setTimeout(function () {
								r._inDbClickWindow = !1
							}, n)
						}
						this._mouseDownEvent = !1
					},
					_touchstart: function (t) {
						this._fireEvent(t), this._touchStartEvent = t
					},
					_touchmove: function (t) {
						if (this._fireEvent(t), this._currentTarget != t.target) {
							var e = t.clone("touchover");
							this._fireEvent(e), this._currentTarget && (e = t.clone("touchout", this._currentTarget), this._fireEvent(e)), this._currentTarget = t.target
						}
					},
					_touchend: function (t) {
						if (this._fireEvent(t), this._touchStartEvent && this._touchStartEvent.target == t.target) {
							var e = t.clone("tap");
							this._fireEvent(e), this._inDbTapWindow && this._fireEvent(t.clone("dbtap")), this._inDbTapWindow = !0;
							var n = this;
							setTimeout(function () {
								n._inDbTapWindow = !1
							}, r)
						}
						this._touchStartEvent = !1
					}
				});
			t.Node.addGetSet(s, {
				width: 300,
				height: 150,
				zoom: [1, 1]
			})
		}(),
		function () {
			var t = a,
				e = t.util,
				n = t.Layer = t.Node.extend(function (t) {
					n.$super(this, "layer");
					var e = this.node = document.createElement("canvas");
					this._init(t), this.canvas = t, this._context = e.getContext("2d"), this._readyFns = [], t.append(this)
				}, {
					_init: function (t) {
						var e = t.width(),
							n = t.height(),
							r = t.zoom();
						this.node.width = (r[0] || 1) * e, this.node.height = (r[1] || 1) * n, this.node.style.cssText = "position:absolute;left:0;top:0;width:" + e + "px;height:" + n + "px;", t.node.appendChild(this.node)
					},
					remove: function (t) {
						return this.$base("remove"), t && this.node.parentNode.removeChild(this.node), this
					},
					_setAttr: function (t, e) {
						switch (t) {
							case "display":
								return this._attrs.display = e, this.node.style.display = e ? "block" : "none", !0;
							case "z-index":
								return this._attrs["z-index"] = e, this.node.style.zIndex = e, !0
						}
					},
					context: function () {
						return this._context
					},
					_draw: function () {
						if (this.compileAttrs(), this.parent) {
							var t = this.parent.zoom(),
								e = this.context();
							e.setTransform(t[0], 0, 0, t[1], 0, 0), e.clearRect(0, 0, this.parent.width(), this.parent.height()), this.$base("draw")
						}
					},
					draw: function (e) {
						if (e) this._draw();
						else if (!this._drawTimer) {
							var n, r = this,
								i = this._readyFns;
							this._drawTimer = !0, t.Animate.requestAnimFrame(function () {
								for (r._drawTimer = null, r._draw(); n = i.pop();) n()
							})
						}
					},
					clear: function () {
						return this.empty(), this
					},
					_isPointInShape: function (t, e, n) {
						this.compileAttrs();
						for (var r = this.children, i = r.length - 1; i >= 0; i--) {
							var a = r[i]._isPointInShape(t, e, n, t, e);
							if (a) return a
						}
					},
					getImageData: function (t, e, n, r, i) {
						var a = this.parent.zoom();
						if (i || 1 === a[0] && 1 === a[1]) return this.context().getImageData(t, e, n, r);
						var o, s = this.context().getImageData(t, e, n * a[0], r * a[1]),
							l = this.context().createImageData(n, r),
							u = 0;
						for (e = 0; r > e; e++)
							for (o = (a[1] * e << 0) * s.width, t = 0; n > t; t++) {
								var c = o << 2;
								l.data[u++] = s.data[c++], l.data[u++] = s.data[c++], l.data[u++] = s.data[c++], l.data[u++] = s.data[c++], o += a[0]
							}
						return l
					}
				});
			e.extend(t.Canvas.prototype, {
				layer: function () {
					return new n(this)
				},
				lastLayer: function () {
					var t = this.children.length;
					return t ? this.children[t - 1] : this.layer()
				},
				hidenLayer: function () {
					return this._hidenLayer || (this._hidenLayer = new n(this).remove(!0)), this._hidenLayer
				},
				getImageData: function (t, n, r, i, a, o) {
					if (arguments.length < 4 && (r = this.width(), i = this.height()), arguments.length < 2 && (t = 0, n = 0), a) {
						var s = this.zoom();
						r *= s[0], i *= s[1]
					}
					var l, u, c;
					return e.each(this._getChildrenByZIndex(), function (e) {
						if (e.visible())
							if (l) {
								var s = e.getImageData(t, n, r, i, a, o).data,
									h = l.data;
								for (u = 0; u < h.length; u += 4) {
									var f = s[u + 3] / 255,
										g = h[u + 3] / 255;
									if (0 !== f) {
										for (c = u; u + 3 > c; c++) h[c] = s[c] * f + h[c] * (1 - f);
										h[u + 3] = 255 * (f + (1 - f) * g)
									}
								}
							} else if (l = e.getImageData(t, n, r, i, a, o), o) {
							var d = l.data;
							for (u = 0; u < d.length; u += 4) {
								for (c = u; u + 3 > c; c++) d[c] = (d[c] / 255 - 1) * d[u + 3] + 255;
								d[u + 3] = 255
							}
						}
					}), l || (l = this.layer().getImageData(t, n, r, i, a, o)), l
				},
				toDataUrl: function (t) {
					var e = this.getImageData(0, 0, this.width(), this.height(), !0, t),
						n = this.hidenLayer();
					return n.context().putImageData(e, 0, 0), n.node.toDataURL.apply(n.node, arguments)
				}
			}), t.Node.prototype.ready = function (t) {
				var n = this;
				t = e.bind(t, n);
				var r = function () {
					setTimeout(function () {
						t()
					})
				};
				if ("canvas" === n.type) n = n.lastLayer();
				else
					for (; n && "layer" != n.type;) n = n.parent;
				return n && n._readyFns.push(r), n.dirty(), this
			}
		}(),
		function () {
			var t = a,
				e = t.util,
				n = t.Group = t.Node.extend(function (t) {
					n.$super(this, "group"), t.append(this), this.canvas = t.canvas
				}, {
					context: function () {
						return this.parent.context()
					},
					_isPointInShape: function (t, e, n, r, i) {
						if (this.visible()) {
							n.save(), this._beforeDraw(n);
							var a = this._attrs.transform;
							a && (a = a.inversed(r, i), r = a.x, i = a.y);
							for (var o = this.children, s = o.length - 1; s >= 0; s--) {
								var l = o[s]._isPointInShape(t, e, n, r, i);
								if (l) return l
							}
							n.restore()
						}
					},
					_getAttr: function (t) {
						var e, n = this._attrs;
						switch (t) {
							case "translate":
							case "rotate":
							case "scale":
							case "transform":
								var r = n.transform;
								return r && (r = r.getString()), r;
							case "opacity":
								return n[t];
							default:
								return n[t]
						}
						return e
					},
					_setAttr: function (n, r) {
						var i = this._attrs;
						switch (n) {
							case "translate":
								i.transform = i.transform || new t.Transform, i.transform.parseStr("t" + r.join(","));
								break;
							case "rotate":
								i.transform = i.transform || new t.Transform, i.transform.parseStr("r" + r);
								break;
							case "scale":
								i.transform = i.transform || new t.Transform, i.transform.parseStr("s" + r);
								break;
							case "transform":
								e.is(r, "string") && (r = new t.Transform(r)), i[n] = r;
								break;
							case "opacity":
								i[n] = r;
								break;
							default:
								i[n] = r
						}
						return !0
					},
					_beforeDraw: function (t) {
						var e = this._attrs.transform;
						e && t.transform.apply(t, e.getMatrix());
						var n = this.opacity();
						1 > n && (t.globalAlpha = n)
					},
					draw: function () {
						if (this.visible()) {
							var e = this.context();
							e.save(), e.beginPath(), this._beforeDraw(e, this), t.Node.prototype.draw.call(this, e), e.restore()
						}
					}
				});
			t.Node.addGetSet(t.Group, "opacity transform translate rotate scale"), e.extend([t.Layer.prototype, t.Group.prototype], {
				group: function () {
					return new t.Group(this)
				}
			}), e.extend(t.Canvas.prototype, {
				group: function () {
					return new t.Group(this.lastLayer())
				}
			})
		}(),
		function () {
			var t = a,
				e = {
					LINECAP: {
						b: "butt",
						r: "round",
						s: "square"
					},
					LINEJOIN: {
						r: "round",
						b: "bevel",
						m: "miter"
					},
					TEXTALIGN: {
						s: "start",
						e: "end",
						l: "left",
						r: "right",
						c: "center"
					},
					BASELINE: {
						t: "top",
						h: "hanging",
						m: "middle",
						a: "alphabetic",
						i: "ideographic",
						b: "bottom"
					}
				},
				n = {
					path: [],
					"global-alpha": 1,
					"global-composite-operation": "source-over",
					"line-width": 1,
					"line-cap": e.LINECAP.b,
					"line-join": e.LINEJOIN.m,
					"miter-limit": 10,
					stroke: "black",
					fill: "black",
					"fill-opacity": 1,
					"stroke-opacity": 1,
					"shadow-offset-x": 0,
					"shadow-offset-y": 0,
					"shadow-blur": 0,
					"shadow-color": "black",
					font: "10px sans-serif",
					"font-style": "normal",
					"font-variant": "normal",
					"font-weight": "normal",
					"line-height": "normal",
					"font-size": 10,
					"font-family": "sans-serif",
					"text-align": e.TEXTALIGN.s,
					"text-baseline": e.BASELINE.a,
					dash: "",
					"dash-array": []
				},
				r = t.util,
				i = r.is,
				o = t.Shape = t.Node.extend(function (t, e, n) {
					o.$super(this, "shape"), t && t.append(this), this.canvas = t.canvas, e && (this._draw = e) && this.dirty(), this.attr(n), this._afterInit()
				}, {
					clone: function () {
						var t = new this.constructor(this.parent);
						return t._attrs = r.clone(this._attrs), t
					},
					_afterInit: function () {},
					_draw: function () {},
					_beforeDraw: function (t) {
						var e = this._attrs.transform;
						e && t.transform.apply(t, e.getMatrix());
						var n = this.globalAlpha();
						1 > n && (t.globalAlpha = n), t.globalCompositeOperation = this.globalCompositeOperation()
					},
					_useShadow: function (t) {
						var e = {
							x: this.shadowOffsetX(),
							y: this.shadowOffsetY(),
							b: this.shadowBlur(),
							c: this.shadowColor()
						};
						return e.x || e.y || e.b ? (t.shadowOffsetX = e.x, t.shadowOffsetY = e.y, t.shadowBlur = e.b, t.shadowColor = e.c, !0) : void 0
					},
					_useDash: function (t) {
						var e = this.dashArray();
						return e.length ? (t.setLineDash ? t.setLineDash(e) : "mozDash" in t ? t.mozDash = e : "webkitLineDash" in t && (t.webkitLineDash = e), !0) : void 0
					},
					_useFill: function (t) {
						var e = this._attrs.fill;
						return e && e.toContext ? (t.fillStyle = e.toContext(t), !0) : void 0
					},
					_useStroke: function (t) {
						var e = this._attrs.stroke,
							n = this.lineWidth();
						return e && n > 0 ? (t.lineJoin = this.lineJoin(), t.lineCap = this.lineCap(), t.lineWidth = n, t.strokeStyle = e.toContext(t), !0) : void 0
					},
					_afterDraw: function (t) {
						this._useShadow(t), this._useStroke(t) && (this._useDash(t), t.stroke()), this._useFill(t) && t.fill()
					},
					draw: function () {
						if (this.visible()) {
							var t = this.context();
							t.save(), t.beginPath(), this._beforeDraw(t, this), this._draw(t, this) !== !1 && this._afterDraw(t, this), t.restore()
						}
					},
					_drawArea: function (t) {
						this._beforeDraw(t, this), this._draw(t, this), this._useStroke(t) && (t.strokeStyle = this._colorKey, t.stroke()), this._useFill(t) && (t.fillStyle = this._colorKey, t.fill())
					},
					area: function (t) {
						return t && (this._drawArea = t), this
					},
					drawArea: function (t) {
						this.visible() && (t.save(), this._drawArea(t), t.restore())
					},
					hitArea: function (t) {
						return t && (this._hitArea = t), this
					},
					_hitArea: function () {},
					_transfromPoint: function (t, e) {
						var n = this._attrs.transform;
						return n && (n = n.inversed(t, e), t = n.x, e = n.y), {
							x: t,
							y: e
						}
					},
					_isPointInShape: function (e, n, a, o, s) {
						if (this.visible() && this.hasEventListener()) {
							var l = this._transfromPoint(o, s);
							l && (o = l.x, s = l.y);
							var u = this._hitArea();
							if (i(u, "undefined")) {
								this.drawArea(a);
								var c = a.getImageData(e, n, 1, 1).data;
								if (c[3] > 0 && new t.Color(c[0], c[1], c[2]).hex() == this._colorKey) return this
							} else if (u)
								if (r.is(u, "function")) {
									if (u.call(this, o, s)) return this
								} else if (r.is(u, "array")) {
								for (var h = 0; h < u.length; h++)
									if (r.isPointInArea(o, s, u[h])) return this.__hitArea = u[h], this
							} else if (r.isPointInArea(o, s, u)) return this.__hitArea = u, this
						}
					},
					context: function () {
						return this.parent.context()
					},
					_getAttr: function (t) {
						var e, n = this._attrs;
						switch (t) {
							case "font":
								return n.font && n.font.getString() || void 0;
							case "font-size":
								return n.font && n.font.fontSize() || void 0;
							case "font-weight":
								return n.font && n.font.fontWeight() || void 0;
							case "font-style":
								return n.font && n.font.fontStyle() || void 0;
							case "font-variant":
								return n.font && n.font.fontVariant() || void 0;
							case "font-family":
								return n.font && n.font.fontFamily() || void 0;
							case "line-height":
								return n.font && n.font.lineHeight() || void 0;
							case "translate":
							case "rotate":
							case "scale":
							case "center":
							case "transform":
								var r = n.transform;
								return r && (r = r.getString()), r;
							case "opacity":
								return this.globalAlpha();
							case "stroke-opacity":
							case "fill-opacity":
								var i = n[t.replace("-opacity", "")];
								return i && "color" == i.type ? i.o.a : n[t];
							case "stroke":
							case "fill":
							case "path":
								var a = n[t];
								return a && (a = a.getString()), a;
							case "dash":
								return this.dashArray().join(" ");
							case "shadow":
								return this.shadowOffsetX() + " " + this.shadowOffsetY() + " " + this.shadowBlur() + " " + this.shadowColor();
							default:
								return n[t]
						}
						return e
					},
					_setAttr: function (e, n) {
						var r, o = this._attrs;
						switch (e) {
							case "path":
								i(n, "array") ? (r = new t.Path, r.path = n) : r = i(n, "string") ? new t.Path(n) : n, o.path = r;
								break;
							case "font":
								o.font = a.Font(n);
								break;
							case "font-size":
								o.font = o.font || a.Font(), o.font.fontSize(n);
								break;
							case "font-weight":
								o.font = o.font || a.Font(), o.font.fontWeight(n);
								break;
							case "font-style":
								o.font = o.font || a.Font(), o.font.fontStyle(n);
								break;
							case "font-variant":
								o.font = o.font || a.Font(), o.font.fontVariant(n);
								break;
							case "font-family":
								o.font = o.font || a.Font(), o.font.fontFamily(n);
								break;
							case "line-height":
								o.font = o.font || a.Font(), o.font.lineHeight(n);
								break;
							case "center":
								o.transform = o.transform || new t.Transform, o.transform.parseStr("c" + n.join(","));
								break;
							case "translate":
								o.transform = o.transform || new t.Transform, o.transform.parseStr("t" + n.join(","));
								break;
							case "rotate":
								o.transform = o.transform || new t.Transform, o.transform.parseStr("r" + n);
								break;
							case "scale":
								o.transform = o.transform || new t.Transform, o.transform.parseStr("s" + n);
								break;
							case "transform":
								i(n, "string") && (n = new t.Transform(n)), o[e] = n;
								break;
							case "opacity":
								this.globalAlpha(n);
								break;
							case "stroke":
								i(n, "string") && (n = n.split(" "), 2 == n.length ? (this.lineWidth(parseInt(n[0], 10)), n = n[1]) : n = n[0], n = new t.Style(n), "color" == n.type && 1 == n.o.a && (n.o.a = o[e + "-opacity"] || 1)), o[e] = n;
								break;
							case "fill":
								i(n, "string") && (n = new t.Style(n), "color" == n.type && 1 == n.o.a && (n.o.a = o[e + "-opacity"] || 1)), o[e] = n;
								break;
							case "stroke-opacity":
							case "fill-opacity":
								var s = o[e.replace("-opacity", "")];
								s && "color" == s.type && (s.o.a = n), o[e] = n;
								break;
							case "dash":
								n = n.split(/[, ]+/);
								for (var l = [], u = 0; u < n.length; u++) l.push(parseFloat(n[u]));
								this.dashArray(l);
								break;
							case "shadow":
								n = n.split(/[ ]+/);
								var c = n.length;
								if (1 == c) this.shadowColor(n[0]);
								else if (2 == c) {
									var h = parseFloat(n[0]);
									this.shadowOffsetX(h).shadowOffsetY(h).shadowColor(n[1])
								} else 3 == c ? this.shadowOffsetX(parseFloat(n[0])).shadowOffsetY(parseFloat(n[1])).shadowColor(n[2]) : 4 == c && this.shadowOffsetX(parseFloat(n[0])).shadowOffsetY(parseFloat(n[1])).shadowBlur(parseFloat(n[2])).shadowColor(n[3]);
								break;
							default:
								o[e] = n
						}
						return !0
					},
					dirty: function (t) {
						return t && (this._dirtyAttr = !0), this.parent && this.parent.dirty(), this
					}
				});
			for (var s in n) t.Node.addGetSet(t.Shape, s, n[s]);
			t.Node.addGetSet(t.Shape, "shadow opacity transform translate rotate scale");
			var l = {
				shape: function (e) {
					return new t.Shape(this, e)
				},
				custom: function (t, e) {
					return new t(this, e)
				}
			};
			o.custom = function (e, n) {
				"function" == typeof e && (e = {
					_draw: e
				});
				var i = this.extend(function (t, e) {
					e = r.extend(r.is(n, "object") && n || {}, e || {}), i.$super(this, t, null, e), r.is(n, "object") && this.attr(r.clone(n)), e && this.attr(e)
				}, e);
				return i.custom = o.custom, n && t.Node.addGetSet(i, n), i
			}, r.extend(t.Group.prototype, l, {
				dirty: function (t) {
					return t && (this._dirtyAttr = !0), this.parent && this.parent.dirty(), this
				}
			}), r.extend(t.Layer.prototype, l, {
				dirty: function (t) {
					return t && (this._dirtyAttr = !0), this.draw(), this
				}
			}), r.extend(t.Canvas.prototype, {
				shape: function (e) {
					return new t.Shape(this.lastLayer(), e)
				},
				custom: function (t) {
					return this.lastLayer().custom(t)
				}
			}, e), r.extend(t, e);
		}(),
		function () {
			function t(t, r, i, a, c) {
				t._animate && u(t);
				var h, f = {},
					g = {},
					d = {
						fill: "Style",
						stroke: "Style",
						transform: "Transform",
						path: "Path"
					};
				if ("function" == typeof r) h = r;
				else {
					for (var p in r) {
						var A = d[p],
							C = r[p];
						A ? (f[p] = t._attrs[p], f[p] || (f[p] = new e[A]), C instanceof e[A] || (C = new e[A](C)), g[p] = C.add(f[p], -1)) : (f[p] = t.getAttr(p), n.is(f[p], "undefined") && n.is(t[n.camelize(p)], "function") && (f[p] = t[n.camelize(p)]()), g[p] = (parseFloat(C) || 0) - (parseFloat(f[p]) || 0))
					}
					h = function (t) {
						if (t >= 1) return this.attr(r);
						for (var e in r) this.attr(e, f[e].add ? f[e].add(g[e], t) : f[e] + t * g[e])
					}
				}
				t._animate = !0, o.push({
					el: t,
					start: +new Date,
					ms: i || 300,
					easing: n.is(a, "function") ? a : s[a] || s.linear,
					done: c,
					run: h
				}), l.start()
			}
			var e = a,
				n = e.util,
				r = e.Animate = n.mkClass(function (t) {
					this._runner = t || function () {}, this._status = 0
				}, {
					_run: function () {
						var t = this;
						t._timer = t._timer || +new Date, i(function () {
							if (t._status) {
								var e = +new Date,
									n = e - t._timer;
								t._runner.call(t, n, e), t._timer = e, t._status && t._run()
							}
						})
					},
					start: function () {
						var t = this;
						t._status || (t._status = 1, t._run())
					},
					stop: function () {
						this._status = 0
					}
				}),
				i = function () {
					var t = 0;
					return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
						var n = (new Date).getTime(),
							r = Math.max(0, 16 - Math.max(0, n - t)),
							i = window.setTimeout(function () {
								e(n + r)
							}, r);
						return t = n + r, i
					}
				}();
			r.requestAnimFrame = function (t) {
				i.call(window, t)
			};
			var o = [],
				s = {
					linear: function (t) {
						return t
					},
					"ease-in": function (t) {
						return Math.pow(t, 1.7)
					},
					"ease-out": function (t) {
						return Math.pow(t, .48)
					},
					"ease-in-out": function (t) {
						var e = .48 - t / 1.04,
							n = Math.sqrt(.1734 + e * e),
							r = n - e,
							i = Math.pow(Math.abs(r), 1 / 3) * (0 > r ? -1 : 1),
							a = -n - e,
							o = Math.pow(Math.abs(a), 1 / 3) * (0 > a ? -1 : 1),
							s = i + o + .5;
						return 3 * (1 - s) * s * s + s * s * s
					},
					"back-in": function (t) {
						var e = 1.70158;
						return t * t * ((e + 1) * t - e)
					},
					"back-out": function (t) {
						t -= 1;
						var e = 1.70158;
						return t * t * ((e + 1) * t + e) + 1
					},
					elastic: function (t) {
						return Math.pow(2, -10 * t) * Math.sin((t - .075) * (2 * Math.PI) / .3) + 1
					},
					bounce: function (t) {
						var e, n = 7.5625,
							r = 2.75;
						return 1 / r > t ? e = n * t * t : 2 / r > t ? (t -= 1.5 / r, e = n * t * t + .75) : 2.5 / r > t ? (t -= 2.25 / r, e = n * t * t + .9375) : (t -= 2.625 / r, e = n * t * t + .984375), e
					}
				},
				l = new r(function (t, e) {
					for (var n = 0; n < o.length; n++) {
						var r = o[n],
							i = e - r.start;
						i >= r.ms ? (r.run.call(r.el, 1), u(r.el) && n--) : r.run.call(r.el, r.easing(i / r.ms))
					}
					n || this.stop()
				}),
				u = function (t) {
					for (var e = 0; e < o.length; e++)
						if (o[e].el == t) return t._animate = !1, n.is(o[e].done, "function") && o[e].done.call(t), o.splice(e, 1), !0;
					return !1
				};
			n.extend([e.Shape.prototype, e.Group.prototype], {
				anim: function (e, n, r, i) {
					return t(this, e, n, r, i), this
				},
				stop: function () {
					return this._animate && u(this), this
				}
			})
		}(),
		function () {
			var t = a,
				e = t.util,
				n = t.Shape.Rect = t.Shape.custom({
					_compileAttrs: function () {
						var t = this._attrs,
							e = t.rx || t.r || 0,
							n = t.ry || t.r || 0;
						this._attrsCompiled.rxry = e && n, this._attrsCompiled.x = [t.x, t.x + e, t.x + t.width - e, t.x + t.width], this._attrsCompiled.y = [t.y, t.y + n, t.y + t.height - n, t.y + t.height]
					},
					_hitArea: function () {
						var t = this._attrs;
						return {
							polygon: !0,
							vertex: [
								[t.x, t.y],
								[t.x + t.width, t.y],
								[t.x + t.width, t.y + t.height],
								[t.x, t.y + t.height]
							]
						}
					},
					_draw: function (t) {
						var e = this._attrsCompiled.x,
							n = this._attrsCompiled.y,
							r = this._attrsCompiled.rxry;
						t.beginPath(), t.moveTo(e[1], n[0]), t.lineTo(e[2], n[0]), r && t.quadraticCurveTo(e[3], n[0], e[3], n[1]), t.lineTo(e[3], n[2]), r && t.quadraticCurveTo(e[3], n[3], e[2], n[3]), t.lineTo(e[1], n[3]), r && t.quadraticCurveTo(e[0], n[3], e[0], n[2]), t.lineTo(e[0], n[1]), r && t.quadraticCurveTo(e[0], n[0], e[1], n[0]), t.closePath()
					}
				}, "x y width height r rx ry");
			e.extend([t.Group.prototype, t.Layer.prototype, t.Canvas.prototype], {
				rect: function (t, e, r, i, a) {
					var o = this.lastLayer ? this.lastLayer() : this;
					return new n(o, {
						x: t,
						y: e,
						width: r,
						height: i,
						r: a
					})
				}
			})
		}(),
		function () {
			var t = a,
				e = t.util,
				n = t.Shape.Circle = t.Shape.custom({
					_hitArea: function () {
						var t = this._attrs;
						return {
							circle: !0,
							x: t.x,
							y: t.y,
							r: t.r
						}
					},
					_draw: function (t) {
						var e = this._attrs;
						t.beginPath(), t.arc(e.x, e.y, e.r, 0, 2 * Math.PI, !0), t.closePath()
					}
				}, {
					x: 0,
					y: 0,
					r: 0
				});
			e.extend([t.Group.prototype, t.Layer.prototype, t.Canvas.prototype], {
				circle: function (t, e, r) {
					var i = this.lastLayer ? this.lastLayer() : this;
					return new n(i, {
						x: t,
						y: e,
						r: r
					})
				}
			})
		}(),
		function () {
			var t = a,
				e = t.util,
				n = t.Shape.Ellipse = t.Shape.custom({
					_compileAttrs: function () {
						var t = this._attrs,
							e = .5522848 * t.rx,
							n = .5522848 * t.ry,
							r = t.x - t.rx,
							i = t.x + t.rx,
							a = t.y - t.ry,
							o = t.y + t.ry,
							s = t.x,
							l = t.y;
						this._attrsCompiled.points = [r, a, i, o, s, l, s - e, s + e, l + n, l - n]
					},
					_draw: function (t) {
						var e = this._attrsCompiled.points;
						t.beginPath(), t.moveTo(e[0], e[5]), t.bezierCurveTo(e[0], e[9], e[6], e[1], e[4], e[1]), t.bezierCurveTo(e[7], e[1], e[2], e[9], e[2], e[5]), t.bezierCurveTo(e[2], e[8], e[7], e[3], e[4], e[3]), t.bezierCurveTo(e[6], e[3], e[0], e[8], e[0], e[5]), t.closePath()
					}
				}, {
					x: 0,
					y: 0,
					rx: 0,
					ry: 0
				});
			e.extend([t.Group.prototype, t.Layer.prototype, t.Canvas.prototype], {
				ellipse: function (t, e, r, i) {
					var a = this.lastLayer ? this.lastLayer() : this;
					return new n(a, {
						x: t,
						y: e,
						rx: r,
						ry: i
					})
				}
			})
		}(),
		function () {
			var t = a,
				e = t.util,
				n = t.Shape.Image = t.Shape.custom({
					_hitArea: function () {
						var t = this._attrs;
						return {
							polygon: !0,
							vertex: [
								[t.x, t.y],
								[t.x + t.width, t.y],
								[t.x + t.width, t.y + t.height],
								[t.x, t.y + t.height]
							]
						}
					},
					_setAttr: function (t, e) {
						if ("src" == t && e) {
							var n = this,
								r = new Image;
							return r.onload = function () {
								n.image(r)
							}, r.src = e, !0
						}
						return "image" == t && e ? (this.width() || this.width(e.width), this.height() || this.height(e.height), this._attrs[t] = e, !0) : this.$base("_setAttr", t, e)
					},
					_draw: function (t) {
						var n = this.image();
						n && (t.drawImage(n, this.x(), this.y(), this.width(), this.height()), this._readyFn && this.parent && (this.parent.ready(e.bind(this._readyFn, this)), this._readyFn = null))
					},
					_afterDraw: function () {},
					ready: function (t) {
						return t && (this._readyFn = t), this
					}
				}, {
					x: 0,
					y: 0,
					width: 0,
					height: 0,
					src: "",
					image: null
				});
			e.extend([t.Group.prototype, t.Layer.prototype, t.Canvas.prototype], {
				image: function (t, e, r) {
					var i = this.lastLayer ? this.lastLayer() : this;
					return new n(i, {
						x: t,
						y: e,
						src: r
					})
				}
			})
		}(),
		function () {
			var t = a,
				e = t.util,
				n = t.Shape.Line = t.Shape.custom({
					_getAttr: function (e) {
						var n = this._getPoints();
						switch (e) {
							case "x1":
								return n[0];
							case "y1":
								return n[1];
							case "x2":
								return n[2];
							case "y2":
								return n[3];
							default:
								return t.Shape.prototype._getAttr.call(this, e)
						}
					},
					_setAttr: function (t, e) {
						var n = this._getPoints();
						switch (t) {
							case "x1":
								return n[0] = e, !0;
							case "y1":
								return n[1] = e, !0;
							case "x2":
								return n[2] = e, !0;
							case "y2":
								return n[3] = e, !0;
							default:
								return this.$base("_setAttr", t, e)
						}
					},
					_getPoints: function () {
						var t = this._attrs.points;
						return t || (t = this._attrs.points = []), t
					},
					shift: function (t, e) {
						t = t || 0, e = e || 0;
						for (var n = this._getPoints(), r = 0, i = n.length - 1; i > r; r += 2) "M" == n[r] ? r++ : "L" == n[r] && r++, n[r] += t, n[r + 1] += e;
						return this
					},
					move: function (t, e) {
						var n = this._getPoints();
						return n.length && n.push("M"), n.push(t, e), this
					},
					line: function (t, e) {
						var n = this._getPoints();
						return n.push(t, e), this
					},
					_draw: function (t) {
						var e = this._getPoints();
						t.beginPath();
						for (var n = "moveTo", r = 0, i = e.length - 1; i > r; r += 2) "M" == e[r] ? (n = "moveTo", r++) : "L" == e[r] && (n = "lineTo", r++), t[n](e[r], e[r + 1]), n = "lineTo"
					}
				}, "x1 y1 x2 y2");
			e.extend([t.Group.prototype, t.Layer.prototype, t.Canvas.prototype], {
				line: function () {
					var t = this.lastLayer ? this.lastLayer() : this,
						e = new n(t, {
							fill: !1
						}),
						r = Array.prototype.slice.call(arguments);
					return r.length && e.attr({
						points: r
					}), e

				}
			})
		}(),
		function () {
			var t = a,
				e = t.util,
				n = t.Shape.Path = t.Shape.custom({
					_hitArea: function () {
						var t = this._attrs.path;
						return t && t.getVertex()
					},
					_draw: function (t) {
						var e = this._attrs.path;
						if (e) {
							e = e.path, t.beginPath();
							for (var n = 0, r = e.length; r > n;) {
								if ("A" == e[n][0]) {
									var i = e[n][1][0],
										a = e[n][1][1],
										o = e[n][1][2],
										s = e[n][1][3],
										l = e[n][1][4],
										u = e[n][1][5],
										c = e[n][1][6],
										h = e[n][1][7],
										f = o > s ? o : s,
										g = o > s ? 1 : o / s,
										d = o > s ? s / o : 1;
									t.translate(i, a), t.rotate(c), t.scale(g, d), t.arc(0, 0, f, l, l + u, 1 - h), t.scale(1 / g, 1 / d), t.rotate(-c), t.translate(-i, -a)
								} else t[e[n][0]].apply(t, e[n][1]);
								n++
							}
						}
					},
					_getPathObj: function () {
						var e = this._attrs.path;
						return e || (e = this._attrs.path = new t.Path("")), e
					},
					moveTo: function (t, e) {
						return this._getPathObj().push("moveTo", t, e), this
					},
					lineTo: function (t, e) {
						return this._getPathObj().push("lineTo", t, e), this
					},
					bezierCurveTo: function (t, e, n, r, i, a) {
						return this._getPathObj().push("bezierCurveTo", t, e, n, r, i, a), this
					},
					quadraticCurveTo: function (t, e, n, r) {
						return this._getPathObj().push("quadraticCurveTo", t, e, n, r), this
					},
					closePath: function () {
						return this._getPathObj().push("closePath"), this
					},
					arcTo: function (t, e, n, r, i, a, o) {
						return this._getPathObj().arcTo(t, e, n, r, i, a, o), this
					},
					getLastPosition: function () {
						return this._getPathObj().getLastPosition()
					}
				});
			e.extend([t.Group.prototype, t.Layer.prototype, t.Canvas.prototype], {
				path: function (t) {
					var e = this.lastLayer ? this.lastLayer() : this;
					return new n(e, {
						path: t
					})
				}
			})
		}(),
		function () {
			var t = a,
				e = t.util,
				n = t.Shape.Text = t.Shape.custom({
					_useFont: function (t) {
						t.font = this.font(), t.textAlign = this.textAlign(), t.textBaseline = this.textBaseline()
					},
					getWidth: function (t) {
						var e = this.width();
						if (!e || t) {
							var n = this.canvas.hidenLayer().context();
							this._useFont(n), e = n.measureText(t || this.text()).width
						}
						return e
					},
					_afterDraw: function (t) {
						var e = this.width(),
							n = this.x(),
							r = this.y(),
							i = this.text();
						this._useFont(t), this._useStroke(t) && (this._useDash(t), e ? t.strokeText(i, n, r, e) : t.strokeText(i, n, r)), this._useFill(t) && (e ? t.fillText(i, n, r, e) : t.fillText(i, n, r))
					}
				}, "x y text width");
			e.extend([t.Group.prototype, t.Layer.prototype, t.Canvas.prototype], {
				text: function (t, e, r) {
					var i = this.lastLayer ? this.lastLayer() : this;
					return new n(i, {
						x: e,
						y: r,
						text: t,
						stroke: null
					})
				}
			})
		}(),
		function () {
			function t(t) {
				for (var e = [], n = 0, r = t.length; r > n; n++) {
					for (var i = t[n], a = i.zIndex(), o = e.length - 1; o >= 0 && !(e[o].zIndex() <= a); o--);
					e.splice(o + 1, 0, i)
				}
				return e
			}

			function e(t) {
				return t.children.length ? e(t.children[0]) : t
			}
			var n = a;
			if (!n.canvas && window.G_vmlCanvasManager) {
				var r = n.util;
				n.Node.prototype.draw = function () {
					var t, e, n, r = this.children,
						i = [];
					for (e = 0; e < r.length; e++) t = r[e].zIndex(), i[t] ? i[t].push(r[e]) : i[t] = [r[e]];
					for (e = 0; e < i.length; e++)
						for (r = i[e], n = 0; r && n < r.length; n++) r[n].draw()
				}, n.Canvas.prototype._init = function () {
					n.util.each(["mousedown", "mousemove", "mouseup", "mouseout"], function (t) {
						var e = this,
							r = n.util.throttle(function (n) {
								"mouseout" == t && e.node.contains(n.toElement) || (n = e._crtEvent(t, n), e["_" + t](n))
							}, 100);
						this.node.attachEvent("on" + t, function (t) {
							r(n.util.cloneEvent(t || window.event))
						}, this)
					}, this)
				}, n.Canvas.prototype._resize = function () {
					var t = this.width(),
						e = this.height();
					this.node.style.width = t + "px", this.node.style.height = e + "px", r.each(this.children, function (n) {
						n.node.style.width = t + "px", n.node.style.height = e + "px", n.draw()
					})
				}, n.Canvas.prototype._crtEvent = function (t, e) {
					var r, i, a = this.node.getBoundingClientRect();
					r = e.clientX - a.left || 0, i = e.clientY - a.top || 0;
					for (var o, s = this.children, l = s.length - 1; l >= 0 && !(o = s[l]._isPointInShape(r, i, e.srcElement)); l--);
					return new n.Event(t, r, i, o, e)
				}, n.Layer.prototype._init = function (t) {
					var e = t.width(),
						n = t.height();
					this.node.style.cssText = "position:absolute;left:0;top:0;width:" + e + "px;height:" + n + "px;", t.node.appendChild(this.node), G_vmlCanvasManager.initElement(this.node)
				}, n.Layer.prototype.draw = function () {
					this.compileAttrs(), this.visible() ? this.node.style.display = "block" : this.node.style.display = "none"
				}, n.Group.prototype.dirty = function (t) {
					return t && (this._dirtyAttr = !0), this.compileAttrs(), n.Animate.requestAnimFrame(n.util.bind(function () {
						this.draw()
					}, this)), this
				}, n.Group.prototype.draw = function (t) {
					r.each(this._getChildrenByZIndex(), function (e) {
						e.draw(t)
					})
				}, n.Group.prototype._isPointInShape = function (t, e, n, r, i) {
					if (this.visible()) {
						var a = this._attrs.transform;
						a && (a = a.inversed(r, i), r = a.x, i = a.y);
						for (var o = this.children, s = o.length - 1; s >= 0; s--) {
							var l = o[s]._isPointInShape(t, e, n, r, i);
							if (l) return l
						}
					}
				}, n.Group.prototype.empty = function () {
					for (var t; t = this.children.pop();) t.remove();
					return this.dirty(), this
				}, n.Shape.prototype._isPointInShape = function (t, e, n, i, a) {
					if (this.visible() && this.hasEventListener()) {
						var o = this._transfromPoint(i, a);
						o && (i = o.x, a = o.y);
						var s, l = this._hitArea();
						if (r.is(l, "undefined")) {
							var u = this._elements || [];
							for (s = 0; s < u.length; s++)
								if (u[s] == n) return this
						} else if (l)
							if (r.is(l, "function")) {
								if (l.call(this, i, a)) return this
							} else if (r.is(l, "array")) {
							for (s = 0; s < l.length; s++)
								if (r.isPointInArea(i, a, l[s])) return this.__hitArea = l[s], this
						} else if (r.isPointInArea(i, a, l)) return this.__hitArea = l, this
					}
				}, n.Node.prototype.nextSibling = function () {
					if (!this.parent) return null;
					if ("layer" == this.type) return null;
					for (var n = t(this.parent.children), r = 0; r < n.length; r++)
						if (n[r] == this && n[r + 1]) {
							var i = e(n[r + 1]);
							return i._elements && i._elements[0] ? i._elements[0] : i.nextSibling()
						} return this.parent.nextSibling()
				};
				var i = n.Shape.prototype.remove;
				n.Shape.prototype.remove = function () {
					i.call(this);
					for (var t = this._elements = this._elements || [], e = 0; e < t.length; e++) t[e].removeNode(!0);
					t.length = 0
				}, n.Shape.prototype.__draw = function () {
					this._locked = !1;
					var t;
					this.compileAttrs();
					var e = this._elements = this._elements || [];
					for (t = 0; t < e.length; t++) e[t].removeNode(!0);
					if (e.length = 0, this.visible() && this.parent) {
						var n = this.context(),
							i = this.nextSibling();
						n.textMeasureEl_ || n.measureText("");
						var a = n.element_.insertAdjacentHTML,
							o = [];
						n.element_.insertAdjacentHTML = function (t, e) {
							o.push(e)
						};
						for (var s = this.parent, l = []; s && "layer" !== s.type;) l.unshift(s), s = s.parent;
						n.save(), r.each(l, function (t) {
							t._beforeDraw(n, t)
						}), n.beginPath(), this._beforeDraw(n, this), this._draw(n, this), this._afterDraw(n, this), n.restore(), n.element_.insertAdjacentHTML = a;
						var u;
						for (i ? (u = i.previousSibling, i.insertAdjacentHTML("beforeBegin", o.join(""))) : (u = n.element_.lastChild, n.element_.insertAdjacentHTML("beforeEnd", o.join(""))), u = u ? u.nextSibling : n.element_.firstChild; u && u !== i;) u !== n.textMeasureEl_ && e.push(u), u = u.nextSibling
					}
				}, n.Shape.prototype.draw = function (t) {
					return t ? this.__draw() : void(this._locked || (this._locked = !0, n.Animate.requestAnimFrame(n.util.bind(function () {
						this._locked && this.__draw()
					}, this))))
				}, n.Shape.prototype.dirty = function (t) {
					return t && (this._dirtyAttr = !0), n.Animate.requestAnimFrame(n.util.bind(function () {
						this.draw()
					}, this)), this
				}
			}
		}()
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			o = n(59),
			s = (r(o), n(57)),
			l = function () {
				function t(e, n, r, a) {
					i(this, t), this.config = s.util.extend({
						centerX: !1,
						centerY: !1
					}, arguments[4]), this.x = e, this.y = n, this.left = this.l = s.util.shift(e), this.right = this.r = s.util.shift(e + r), this.top = this.t = n, this.bottom = this.b = n + a, this.width = this.w = r, this.height = this.h = a, this.init()
				}
				return a(t, [{
					key: "init",
					value: function () {
						return this.minX = this.minY = Number.MAX_VALUE, this.maxX = this.maxY = -Number.MAX_VALUE, this.stepX = this.stepY = 0, this.baseX = this.left, this.baseY = this.top, this._draw = [], this._y2 = this.baseY + this.maxY * this.stepY, this._x2 = this.baseX + this.minX * this.stepX, this
					}
				}, {
					key: "axis",
					value: function (t, e) {
						e || (e = t, t = !1);
						var n = !1,
							r = !1;
						if (t && 2 === t.length && (t[0] < this.minX && (n = !0) && (this.minX = t[0]), t[1] > this.maxX && (n = !0) && (this.maxX = t[1]), n && (this.config.centerX ? (this.stepX = this.w / (this.maxX - this.minX + 1), this.baseX = this.x + this.stepX / 2) : this.stepX = this.w / (this.maxX - this.minX + 1), this._x2 = this.baseX + this.minX * this.stepX)), e && 2 === e.length && (e[0] < this.minY && (r = !0) && (this.minY = e[0]), e[1] > this.maxY && (r = !0) && (this.maxY = e[1]), r && (this.config.centerY ? (this.stepY = this.h / (this.maxY - this.minY + 1), this.baseY = this.y + this.stepY / 2) : this.stepY = this.h / (this.maxY - this.minY), this._y2 = this.baseY + this.maxY * this.stepY)), n || r)
							for (var i in this._binds) this._binds[i] && this._binds[i].dirty(!0);
						return this
					}
				}, {
					key: "reAxis",
					value: function (t, e, n) {
						e || (e = t, t = !1), this.isLog = n;
						var r = !1,
							i = !1;
						if (t && 2 === t.length && ((this.minX != t[0] || this.maxX != t[1]) && (this.minX = t[0], this.maxX = t[1], r = !0), r && (this.stepX = this.w / (this.maxX - this.minX + 1), this._x2 = this.baseX + this.minX * this.stepX)), e && 2 === e.length && (this.isLog ? ((this.minY != Math.log(e[0]) || this.maxY != Math.log(e[1])) && (this.minY = Math.log(e[0]), this.maxY = Math.log(e[1]), i = !0), i && (this.stepY = this.h / (this.maxY - this.minY), this._y2 = this.baseY + this.maxY * this.stepY)) : ((this.minY != e[0] || this.maxY != e[1]) && (this.minY = e[0], this.maxY = e[1], i = !0), i && (this.stepY = this.h / (this.maxY - this.minY), this._y2 = this.baseY + this.maxY * this.stepY))), r || i)
							for (var a in this._binds) this._binds[a] && this._binds[a].dirty(!0);
						return this
					}
				}, {
					key: "d2y",
					value: function (t) {
						return "" !== t ? (this.isLog && (t = Math.log(t)), this._y2 - t * this.stepY) : void 0
					}
				}, {
					key: "d2x",
					value: function (t) {
						return this._x2 + t * this.stepX
					}
				}, {
					key: "x2dLine",
					value: function (t) {
						var e = this.w / (this.maxX - this.minX);
						if (t < this.baseX) t = this.minX;
						else {
							var n = (t - this.baseX) % e;
							t = n > e / 2 ? this.minX + Math.ceil((t - this.baseX) / e) : this.minX + Math.floor((t - this.baseX) / e), t > this.maxX && (t = this.maxX)
						}
						return t
					}
				}, {
					key: "x2d",
					value: function (t) {
						return t < this.baseX ? t = this.minX : (t = this.minX + Math.floor((t - this.baseX) / this.stepX), t > this.maxX && (t = this.maxX)), t
					}
				}, {
					key: "d2xLine",
					value: function (t) {
						t > this.maxX ? t = this.maxX : t < this.minX && (t = this.minX);
						var e = this.w / (this.maxX - this.minX);
						return this._x2 + t * e
					}
				}, {
					key: "y2d",
					value: function (t) {
						var e = this.maxY - (t - this.baseY) / this.stepY;
						return this.isLog ? Math.pow(Math.E, e) : e
					}
				}, {
					key: "x2x",
					value: function (t) {
						return this._x2 + (this.x2d(t) + .5) * this.stepX
					}
				}]), t
			}();
		e["default"] = l, t.exports = e["default"]
	}, function (t, e) {
		"use strict";

		function n(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var r = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			i = function () {
				function t() {
					n(this, t)
				}
				return r(t, null, [{
					key: "split",
					value: function (t) {
						var e = {};
						return t.forEach(function (t) {
							var n = typeof t;
							switch (n) {
								case "object":
									Array.isArray(t) ? n = "array" : t instanceof Date && (n = "date");
									break;
								case "string":
									/http:\/\//.test(t) && (n = "url")
							}
							n && e[n] ? e[n].push(t) : e[n] = [t]
						}), e
					}
				}]), t
			}();
		e["default"] = i, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(31),
			a = r(i),
			o = n(57),
			s = o.Shape.custom({
				_draw: function (t) {
					var e = this._attrs,
						n = e.inner,
						r = (e.fill, this.x()),
						i = this.y(),
						a = this.w(),
						s = this.h(),
						l = r + a,
						u = i + s,
						c = this.m(),
						h = this.n(),
						f = o.util.shift;
					// 为了适配沪深交易规则，15:00-15:30并不完整的30组数据，15:01-15:06数据不存在，所以这里需要减去(i.w / 9) * (5 / 30)个像素
					var _hsLastCellShrink = (window.StockDataUtils && window.StockDataUtils.isHSAdapter && window.StockDataUtils.isHSAdapter(window.stock) && window.isMinute === 'minute') ? a / 54 : 0;
						var lRight = l - _hsLastCellShrink;
						//横向
					if (this._useFill(t), t.fillRect(r, i, a - _hsLastCellShrink, s), c > 0 && (t.moveTo(f(r), f(i)), t.lineTo(f(lRight), f(i)), t.moveTo(f(r), f(u)), t.lineTo(f(lRight), f(u))), h > 0 && (t.moveTo(f(r), f(i)), t.lineTo(f(r), f(u)), t.moveTo(f(lRight), f(i)), t.lineTo(f(lRight), f(u))), this.dashRect() || (this._useStroke(t), t.stroke(), t.beginPath()), r++, t.strokeStyle = n, c > 0)
						for (var g = s / c; --c > 0;) {
							t.beginPath();
							var d = f(i + c * g);
							t.moveTo(f(r), d), t.lineTo(f(lRight), d), t.stroke()
						}
					if (i++, h > 0)
						for (var g = a / h; --h > 0;) {
							t.beginPath();
							var p = f(r + h * g);
							t.moveTo(p, f(i)), t.lineTo(p, f(u)), t.stroke()
						}
						// 仅在主图（分时价格图）绘制盘后蓝色遮罩：主图 n=分钟数(>1)，副图(成交量) n=1
						if(window.StockDataUtils.isHSAdapter(window.stock) && window.isMinute === 'minute' && this.n() > 1){
							// 基于当前网格实际尺寸动态计算，避免放大后错位
							// 原硬编码 fillRect(f(l)-42.5, 40, 395/9-7, 191) 在小图下对应关系：
							//   42.5 ≈ 395/9 - 1（一格宽度 - 1）
							//   40 ≈ 网格顶部 + 1
							//   395/9 * (25 / 30) ≈ 一格宽度收缩
							//   191 ≈ 网格高度 - 1
							var _postCellW = a / 9;                    // 盘后段占网格 1/9
							var _postRectW = _postCellW * 25 / 30;     // 少了1501-1505数据, 收缩
							var _postRectX = f(l) - _postCellW + 1;    // 从右边界往左推一格
							var _postRectY = i;                        // i 已 ++，即网格顶部 +1
							var _postRectH = s - 1;                    // 高度扣掉顶部偏移
							t.beginPath();
							t.fillStyle = 'rgba(0,121,255,.22)';
							t.fillRect(_postRectX, _postRectY, _postRectW, _postRectH);
							t.fillStyle = '#888';
							t.font = "12px 黑体";
							// 文字水平居中于蓝色矩形；"盘"和"后"都靠底部紧挨显示（"盘"在"后"上方约 14px，字号 12px 留 2px 间距）
							var _postTextX = _postRectX + _postRectW / 2 - 6; // -6 补偿字符宽度
							t.fillText('盘', _postTextX, f(u) - 20);
							t.fillText('后', _postTextX, f(u) - 3);
						}

						t.beginPath();
				}
			}, {
				x: 0,
				y: 0,
				w: 0,
				h: 0,
				m: 0,
				n: 0,
				"dash-rect": !1,
				stroke: a["default"].border.color,
				inner: a["default"].border.inner,
				fill: a["default"].background.gridColor
			});
		e["default"] = s, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(31),
			a = (r(i), n(30)),
			o = (r(a), n(14)),
			s = (r(o), n(57)),
		l = s.Shape.custom({
				_draw: function (t) {
					var e = this._attrs,
						n = (e.data || [], e.position),
						r = e.background || "#fff",
						i = this.coord(),
						a = s.util.shift,
						o = i.y + i.h * n;
					// 为了适配沪深交易规则，15:00-15:30并不完整的30组数据，15:01-15:06数据不存在，所以这里需要减去(i.w / 9) * (5 / 30)个像素
					var _hsMinuteAdjust = 0;
					try {
						if (window.StockDataUtils && window.StockDataUtils.isHSAdapter && window.StockDataUtils.isHSAdapter(window.stock) && window.isMinute === 'minute') {
							_hsMinuteAdjust = i.w / 54;
						}
					} catch (err) { _hsMinuteAdjust = 0; }
					var _rightX = i.x + i.w - _hsMinuteAdjust;
					t.beginPath(), t.strokeStyle = r, t.moveTo(i.x + 1, a(o)), t.lineTo(_rightX, a(o)), t.stroke(), this._useStroke(t), t.beginPath(), t.moveTo(i.x, a(o)), t.lineTo(_rightX, a(o)), t.stroke()
				}
			}, {
				coord: null,
				background: null,
				stroke: "black",
				dash: "5,2",
				position: .5
			});
		e["default"] = l, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(31),
			a = (r(i), n(30)),
			o = (r(a), n(14)),
			s = (r(o), n(57)),
			l = s.Shape.custom({
				_compileAttrs: function () {
					var t = this._attrs,
						e = this._attrsCompiled,
						n = t.gradient,
						r = t.data || [],
						i = t.coord,
						a = [];
					if (i) {
						var o = r.length,
							s = t.maxX || r.length,
							l = 1;
						if (!t.seperation) {
							var u = i.width;
							l = Math.ceil(s / (u - 1)), s /= l
						}
						for (var c = 0; o > c; c += l) a.push(i.d2y(r[c]));

						e.points = a, e.coord = i, e.maxX = s, e.seperation = t.seperation, e.gradient = n
					}
				},
				//上图
				_draw: function (t) {
					var e = this._attrsCompiled,
						n = e.points,
						r = (e.pointsAvg, e.coord),
						i = e.gradient;
					if (r) {
						var a = r.width,
							o = n.length,
							l = e.maxX,
							u = r.baseX,
							c = a / (l - 1);
						if (i) {
							var h = t.createLinearGradient(0, r.t + 3 * r.h / 8, 0, r.b);
							h.addColorStop(0, i[0]), h.addColorStop(1, i[1]), t.fillStyle = h
						}
						var f = e.seperation,
							g = s.util.shift;
						if (f) {
							if (i) {
								t.beginPath(), t.moveTo(g(u), n[0]);
								for (var d = 0, p = o; p > d; d++) t.lineTo(g(u + d * c), n[d]);
								t.lineTo(g(u + (o - 1) * c), g(r.b)), t.lineTo(g(u), g(r.b)), t.closePath(), t.fill()
							}
							t.beginPath();
							for (var A = 0; o / f > A; A++) {
								t.beginPath();
								var C = A * f,
									v = u + C * c;
								t.moveTo(g(v), n[C]);
								for (var d = C, p = o; C + f > d && !(d >= p); d++) t.lineTo(g(u + d * c), n[d]);
								this._useStroke(t), t.lineJoin = "round", t.stroke(), t.closePath()
							}
							t.beginPath()
						} else {
							if (i) {
								t.beginPath(), t.moveTo(g(u), n[0]);
								for (var d = 0, p = o; p > d; d++) t.lineTo(g(u + d * c), n[d]);
								t.lineTo(g(u + (o - 1) * c), g(r.b)), t.lineTo(g(u), g(r.b)), t.closePath(), t.fill()
							}
							t.beginPath(), t.moveTo(g(u), n[0]);
							for (var d = 0, p = o; p > d; d++) t.lineTo(g(u + d * c), n[d]);
							this._useStroke(t), t.lineJoin = "round", t.stroke(), t.beginPath()
						}
					}
				}
			}, {
				data: [],
				coord: null,
				maxX: null,
				stroke: null,
				seperation: !1,
				gradient: !1
			});
		e["default"] = l, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(31),
			a = r(i),
			o = n(30),
			s = (r(o), n(14)),
			l = r(s),
			u = n(57),
			c = u.Shape.custom({
				_draw: function (t) {
					var e = this._attrs,
						n = (this._attrsCompiled, e.data || []),
						r = n.length,
						i = this.coord(),
						a = e.align,
						o = e.step,
						s = e.maxNum,
						u = i.l,
						c = void 0;
					if (o.length) {
						var h = 0;
						o.forEach(function (t) {
							h += t
						}), c = i.w / h
					} else c = i.w / (r - 1);
					this._useFill(t), t.font = l["default"].FONT, t.textBaseline = "middle";
					for (var f = 0, g = r > s ? Math.ceil(r / s) : 1, d = 0; r > d; d++) {
						switch (d) {
							case 0:
								t.textAlign = "default" == a ? "left" : a;
								break;
							case r - 1:
								t.textAlign = "default" == a ? "right" : a;
								break;
							default:
								t.textAlign = "default" == a ? "center" : a
						}
						var p = n[d];
						"object" == typeof p && (t.fillStyle = n[d][1], p = n[d][0]);
						var A = u,
							C = t.measureText(p).width;
						"center" === t.textAlign ? A -= .5 * C : "right" === t.textAlign && (A -= C), A > f && !(d % g) && (t.fillText(p, u, (i.t + i.b) / 2), f = A + C), u += c * (o[d] || 1)
					}
				}
			}, {
				coord: null,
				data: [],
				align: "default",
				fill: a["default"].text.label,
				step: [],
				maxNum: 10
			});
		e["default"] = c, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(31),
			a = r(i),
			o = n(30),
			s = r(o),
			l = n(14),
			u = r(l),
			c = n(65),
			h = r(c),
			f = n(57),
			g = f.Shape.custom({
				_draw: function (t) {
					var e = this._attrs,
						n = e.data || [],
						r = this.coord(),
						i = e.fixed,
						o = e.unit,
						l = e.percentage,
						c = e.symbol,
						f = e.color,
						g = e.mathType || "normal";
					if (r) {
						var d = r.l,
							p = r.b,
							A = r.t,
							C = n.n,
							v = (C - 1) / 2,
							I = (p - A) / (C - 1),
							m = n.minVal,
							y = n.maxVal,
							b = (y - m) / (C - 1);
						// HS minute chart: right y-axis (percentage) labels shift left to be closer to the chart area
						if (l && window.StockDataUtils && window.StockDataUtils.isHSAdapter && window.StockDataUtils.isHSAdapter(window.stock) && window.isMinute === 'minute') {
							d = d - 6;
						}
						t.textAlign = e.align, t.textBaseline = "middle", t.font = u["default"].FONT;
						for (var _ = void 0; C-- > 0;) {
							var x = m + b * C;
							if ("log" === g && (x = Math.pow(Math.E, x)), f ? (_ = Math.abs(x), t.fillStyle = s["default"].HZLD(C - v), C == v && (t.fillStyle = a["default"].text.label)) : (_ = x, this._useFill(t)), isFinite(_) || (_ = 0), _ = o ? h["default"].unit(_, i) : _.toFixed(i), l && (_ += "%"), c && (_ = C > v ? "+" + _ : C == v ? _ : "-" + _), t.fillText(_, d, p - I * C, r.w), 0 === b) break
						}
					}
				}
			}, {
				coord: null,
				data: null,
				mathType: "normal",
				font: u["default"].FONT,
				align: "left",
				percentage: !1,
				color: !0,
				fill: a["default"].text.label,
				fixed: 2,
				symbol: !1,
				unit: !1
			});
		e["default"] = g, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var a = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			o = n(66),
			s = r(o),
			l = n(67),
			u = r(l),
			c = n(68),
			h = r(c),
			f = n(69),
			g = r(f),
			d = function () {
				function t() {
					i(this, t)
				}
				return a(t, null, [{
					key: "formatIF",
					value: function (t, e) {
						var n = t.data,
							r = t.date;
						"string" == typeof e && (e = e.split(","));
						var i = e[(0, u["default"])("TIME")];
						i = i.slice(0, 2) + i.slice(3, 5);
						var a = e[(0, u["default"])("DATE")];
						return a = a.replace(/-/g, ""), r = r && "20" + r.substr(5) || a, {
							data: n,
							date: r,
							status: e[(0, u["default"])("STATUS")],
							symbol: e[(0, u["default"])("NAME")].slice(-6, 0),
							market: "if",
							marketTime: g["default"].marketTime("if"),
							close: 1 * e[(0, u["default"])("CP")],
							open: 1 * e[(0, u["default"])("OP")],
							name: e[(0, u["default"])("NAME")],
							qtTime: i,
							qtDate: a,
							qtPrice: 1 * e[(0, u["default"])("PRICE")],
							qtVolume: 1 * e[(0, u["default"])("VOLUME")],
							qtMaxVal: 1 * e[(0, u["default"])("MAX_VAL")],
							qtMinVal: 1 * e[(0, u["default"])("MIN_VAL")],
							decimalPosition: 1
						}
					}
				}, {
					key: "formatWH",
					value: function (t, e) {
						var n = t.data,
							r = t.date;
						"string" == typeof e && (e = e.split("~"));
						var i = e[(0, h["default"])("TIME")];
						i = i.slice(0, 8);
						var a = e[(0, h["default"])("TIME")].substr(8);
						return a = a.slice(0, 2) + a.slice(2, 4), r = r && "20" + r.substr(5) || i, {
							data: n,
							date: r,
							status: e[(0, h["default"])("STATUS")],
							symbol: e[(0, s["default"])("CODE")],
							market: "wh",
							marketTime: g["default"].marketTime("wh"),
							close: 1 * e[(0, h["default"])("CP")],
							open: 1 * e[(0, h["default"])("OP")],
							name: e[(0, h["default"])("NAME")],
							qtTime: a,
							qtDate: i,
							qtPrice: 1 * e[(0, h["default"])("PRICE")],
							qtVolume: 1 * e[(0, h["default"])("VOLUME")],
							qtMaxVal: 1 * e[(0, h["default"])("MAX_VAL")],
							qtMinVal: 1 * e[(0, h["default"])("MIN_VAL")],
							decimalPosition: 4
						}
					}
				}, {
					key: "formatHS",
					value: function (t, e) {
						if (e.Symbol) return this.formatPushQt(t, e);
						var n = t.data,
							r = t.date;
						"string" == typeof e && (e = e.split("~"));
						var i = e[(0, s["default"])("MK")],
							a = e[(0, s["default"])("TIME")].slice(0, 8);
						r = r || a;
						var o = e[(0, s["default"])("STATUS")],
							l = t.fqFactor;

						return {
							data: n,
							date: r,
							symbol: e[(0, s["default"])("CODE")],
							status: o,
							market: i,
							marketTime: g["default"].marketTime(i),
							close: this.calFqQt(l, e[(0, s["default"])("CP")]),
							open: this.calFqQt(l, e[(0, s["default"])("OP")]),
							name: e[(0, s["default"])("NAME")],
							qtTime: e[(0, s["default"])("TIME")].slice(8, 12),
							qtDate: a,
							qtPrice: this.calFqQt(l, e[(0, s["default"])("PRICE")]),
							qtVolume: 1 * e[(0, s["default"])("VOLUME")],
							qtMaxVal: this.calFqQt(l, e[(0, s["default"])("MAX_VAL")]),
							qtMinVal: this.calFqQt(l, e[(0, s["default"])("MIN_VAL")]),
							decimalPosition: e[(0, s["default"])("CODE")].match(/^200|^900/) ? 3 : 2
						}
					}
				}, {
					key: "formatHK",
					value: function (t, e) {
						if (e.Symbol) return this.formatPushQt(t, e);
						var n = t.data,
							r = t.date;
						"string" == typeof e && (e = e.split("~"));
						var i = "hk",
							a = e[(0, s["default"])("TIME")].replace(/\/| |\:/g, ""),
							o = a.slice(8, 12);
						a = a.slice(0, 8), r = r || a;
						var l = t.fqFactor;
						return {
							data: n,
							date: r,
							status: e[(0, s["default"])("STATUS")],
							symbol: e[(0, s["default"])("CODE")],
							market: i,
							marketTime: g["default"].marketTime(i),
							close: this.calFqQt(l, e[(0, s["default"])("CP")]),
							open: this.calFqQt(l, e[(0, s["default"])("OP")]),
							name: e[(0, s["default"])("NAME")],
							qtTime: o,
							qtDate: a,
							qtPrice: this.calFqQt(l, e[(0, s["default"])("PRICE")]),
							qtVolume: 1 * e[(0, s["default"])("VOLUME")],
							qtMaxVal: this.calFqQt(l, e[(0, s["default"])("MAX_VAL")]),
							qtMinVal: this.calFqQt(l, e[(0, s["default"])("MIN_VAL")]),
							decimalPosition: 1 * e[(0, s["default"])("PRICE")] > .5 ? 2 : 3
						}
					}
				}, {
					key: "calFqQt",
					value: function (t, e) {
						var n = 1 * e;
						return t ? n * t : n
					}
				}, {
					key: "formatUS",
					value: function (t, e) {
						if (e.Symbol) return this.formatPushQt(t, e, "us");
						var n = t.data,
							r = t.date,
							i = "us";
						"string" == typeof e && (e = e.split("~"));
						var a = e[(0, s["default"])("STATUS")];
						a = "0" === a ? "" : a;
						var o = e[(0, s["default"])("TIME")].slice(0, 10).replace(/-/g, "");
						return r = r || o, {
							data: n,
							date: r,
							status: a,
							symbol: e[(0, s["default"])("CODE")].replace(/^\./, ""),
							market: "us",
							marketTime: g["default"].marketTime(i),
							close: 1 * e[(0, s["default"])("CP")],
							open: 1 * e[(0, s["default"])("OP")] || 1 * e[(0, s["default"])("CP")],
							name: e[(0, s["default"])("NAME")],
							qtTime: e[(0, s["default"])("TIME")].slice(11, 16).replace(/:/g, ""),
							qtDate: o,
							qtPrice: 1 * e[(0, s["default"])("PRICE")],
							qtVolume: 1 * e[(0, s["default"])("VOLUME")],
							qtMaxVal: 1 * e[(0, s["default"])("MAX_VAL")],
							qtMinVal: 1 * e[(0, s["default"])("MIN_VAL")],
							decimalPosition: 2
						}
					}
				}, {
					key: "formatPushQt",
					value: function (t, e, n) {
						var r = t.data,
							i = t.date;
						n = n || e.Mkt;
						var a = e.TimeStamp.replace(/\/|-| |\:/g, "").slice(0, 8);
						i = i || a;
						var o = e.Status,
							s = t.fqFactor;
						return {
							data: r,
							date: i,
							symbol: e.Symbol,
							status: o,
							market: n,
							marketTime: g["default"].marketTime(n),
							close: this.calFqQt(s, e.PrevClose),
							open: this.calFqQt(s, e.Open),
							name: e.Name,
							qtTime: e.TimeStamp.replace(/\/|-| |\:/g, "").slice(8, 12),
							qtDate: a,
							qtPrice: this.calFqQt(s, e.Price),
							qtVolume: 1 * (e._Vol || e.Vol),
							qtMaxVal: this.calFqQt(s, e.High),
							qtMinVal: this.calFqQt(s, e.Low),
							decimalPosition: e.Symbol.match(/^200|^900/) ? 3 : 2
						}
					}
				}, {
					key: "trend",
					value: function (t, e) {
						var n = t.data,
							r = e.index;
						r && (e = e[0]), "string" == typeof e && (e = e.split("~")), "string" == typeof r && (r = r.split("~"));
						var i = (r ? r : e)[(0, s["default"])("TIME")].replace(/-/g, "").slice(0, 8);
						return {
							data: n,
							qtDate: i,
							qtPrice: 1 * e[(0, s["default"])("PRICE")]
						}
					}
				}, {
					key: "unit",
					value: function (t, e) {
						e = void 0 == e ? 2 : e;
						var n = Math.abs(t);
						return 1e4 > n ? t.toFixed(e) : 1e8 > n ? (t / 1e4).toFixed(2) + "万" : (t / 1e8).toFixed(2) + "亿"
					}
				}, {
					key: "isValidNum",
					value: function (t) {
						return isNaN(t) || t === 1 / 0 || t === -(1 / 0) || t === Number.MAX_VALUE || t === -Number.MAX_VALUE ? !1 : !0
					}
				}]), t
			}();
		e["default"] = d, t.exports = e["default"]
	}, function (t, e) {
		"use strict";

		function n(t) {
			return {
				MK: 0,
				NAME: 1,
				CODE: 2,
				PRICE: 3,
				CP: 4,
				OP: 5,
				TOTAL: 6,
				OUTER_DISC: 7,
				INNER_DISC: 8,
				B1_VAL: 9,
				B1_VOL: 10,
				B2_VAL: 11,
				B2_VOL: 12,
				B3_VAL: 13,
				B3_VOL: 14,
				B4_VAL: 15,
				B4_VOL: 16,
				B5_VAL: 17,
				B5_VOL: 18,
				S1_VAL: 19,
				S1_VOL: 20,
				S2_VAL: 21,
				S2_VOL: 22,
				S3_VAL: 23,
				S3_VOL: 24,
				S4_VAL: 25,
				S4_VOL: 26,
				S5_VAL: 27,
				S5_VOL: 28,
				DETAIL: 29,
				TIME: 30,
				CHANGE: 31,
				CHANGE_RATE: 32,
				MAX_VAL: 33,
				MIN_VAL: 34,
				FORMER: 35,
				VOLUME: 36,
				TURNOVER: 37,
				TURNOVER_RATE: 38,
				PE_RATIO: 39,
				STATUS: 40,
				MAX_VAL_2: 41,
				MIN_VAL_2: 42,
				AMPLITUDE: 43,
				MCCS: 44,
				MARKET_CAP: 45,
				RISE_STOP: 47,
				FALL_STOP: 48,
				VOLUME_RATIO: 49
			} [t]
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e["default"] = n, t.exports = e["default"]
	}, function (t, e) {
		"use strict";

		function n(t) {
			return {
				NAME: 0,
				OP: 1,
				MAX_VAL: 2,
				MIN_VAL: 3,
				PRICE: 4,
				VOLUME: 5,
				TURNOVER: 6,
				THOLD: 7,
				TCL: 8,
				TSE: 9,
				RISE_STOP: 10,
				FALL_STOP: 11,
				YFOT: 12,
				TFOT: 13,
				CP: 14,
				SE: 15,
				HOLD: 16,
				B1_VAL: 17,
				B1_VOL: 18,
				B2_VAL: 19,
				B2_VOL: 20,
				B3_VAL: 21,
				B3_VOL: 22,
				B4_VAL: 23,
				B4_VOL: 24,
				B5_VAL: 25,
				B5_VOL: 26,
				S1_VAL: 27,
				S1_VOL: 28,
				S2_VAL: 29,
				S2_VOL: 30,
				S3_VAL: 31,
				S3_VOL: 32,
				S4_VAL: 33,
				S4_VOL: 34,
				S5_VAL: 35,
				S5_VOL: 36,
				DATE: 37,
				TIME: 38,
				MILLI: 39
			} [t]
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e["default"] = n, t.exports = e["default"]
	}, function (t, e) {
		"use strict";

		function n(t) {
			return {
				MK: 0,
				NAME: 1,
				CODE: 2,
				PRICE: 3,
				VOLUME: 4,
				TIME: 5,
				CP: 6,
				OP: 7,
				MAX_VAL: 8,
				MIN_VAL: 9
			} [t]
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		}), e["default"] = n, t.exports = e["default"];
	}, function (t, e) {
		"use strict";
		function n(t,stock) {
			var stock = window.stock
			if(window.StockDataUtils.isHSAdapter(stock)&&window.isMinute === 'minute'){
				return {
					sh: {
						timeTags: ["9:30", "10:30", "11:30/13:00", "14:00", "15:00", '15:30'],
						step: [2, 2, 2, 2, 1]
					},
					sz: {
						timeTags: ["9:30", "10:30", "11:30/13:00", "14:00", "15:00", "15:30"],
						step: [2, 2, 2, 2, 1]
					},
					nq: {
						timeTags: ["9:30", "10:30", "11:30/13:00", "14:00", "15:00"],
						step: [2, 2, 2, 2]
					},
					hk: {
						timeTags: ["9:30", "10:00", "11:00", "12:00/13:00", "14:00", "15:00", "16:00"],
						step: [1, 2, 2, 2, 2, 2]
					},
					us: {
						timeTags: ["9:30", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"],
						step: [1, 2, 2, 2, 2, 2, 2]
					},
					"if": {
						timeTags: ["9:15", "10:00", "10:45", "11:30/13:00", "13:45", "14:30", "15:15"],
						step: [1, 1, 1, 1, 1, 1]
					},
					qh: {
						timeTags: ["9:15", "10:00", "10:45", "11:30/13:00", "13:45", "14:30", "15:15"],
						step: [1, 1, 1, 1, 1, 1]
					},
					wh: {
						timeTags: ["0:00", "3:00", "6:00", "9:00", "12:00", "15:00", "18:00", "21:00", "24:00"],
						step: [1, 1, 1, 1, 1, 1, 1, 1]
					},
					fund: {
						timeTags: ["9:30", "10:30", "11:30/13:00", "14:00", "15:00"],
						step: [2, 2, 2, 2]
					}
				} [t]
			}else{
				return {
					sh: {
						timeTags: ["9:30", "10:30", "11:30/13:00", "14:00", "15:00"],
						step: [2, 2, 2, 2]
					},
					sz: {
						timeTags: ["9:30", "10:30", "11:30/13:00", "14:00", "15:00"],
						step: [2, 2, 2, 2]
					},
					nq: {
						timeTags: ["9:30", "10:30", "11:30/13:00", "14:00", "15:00"],
						step: [2, 2, 2, 2]
					},
					hk: {
						timeTags: ["9:30", "10:00", "11:00", "12:00/13:00", "14:00", "15:00", "16:00"],
						step: [1, 2, 2, 2, 2, 2]
					},
					us: {
						timeTags: ["9:30", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"],
						step: [1, 2, 2, 2, 2, 2, 2]
					},
					"if": {
						timeTags: ["9:15", "10:00", "10:45", "11:30/13:00", "13:45", "14:30", "15:15"],
						step: [1, 1, 1, 1, 1, 1]
					},
					qh: {
						timeTags: ["9:15", "10:00", "10:45", "11:30/13:00", "13:45", "14:30", "15:15"],
						step: [1, 1, 1, 1, 1, 1]
					},
					wh: {
						timeTags: ["0:00", "3:00", "6:00", "9:00", "12:00", "15:00", "18:00", "21:00", "24:00"],
						step: [1, 1, 1, 1, 1, 1, 1, 1]
					},
					fund: {
						timeTags: ["9:30", "10:30", "11:30/13:00", "14:00", "15:00"],
						step: [2, 2, 2, 2]
					}
				} [t]
			}

		}

		function r(t) {
			var stock = window.stock
			if(window.StockDataUtils.isHSAdapter(stock)&&window.isMinute === 'minute'){
				return {
					sh: ["0930", "1130", "1300", "1500", "1530"],
					1: ["0930", "1130", "1300", "1500", "1530"],
					sz: ["0930", "1130", "1300", "1500", "1530"],
					51: ["0930", "1130", "1300", "1500", "1530"],
					nq: ["0930", "1130", "1300", "1500"],
					61: ["0930", "1130", "1300", "1500"],
					hk: ["0930", "1201", "1300", "1600"],
					100: ["0930", "1201", "1300", "1600"],
					us: ["0930", "1600"],
					200: ["0930", "1600"],
					"if": ["0915", "1130", "1300", "1515"],
					qh: ["0915", "1130", "1300", "1515"],
					300: ["0915", "1130", "1300", "1515"],
					wh: ["0000", "2400"]
				} [t]
			}else{
				return {
					sh: ["0930", "1130", "1300", "1500"],
					1: ["0930", "1130", "1300", "1500"],
					sz: ["0930", "1130", "1300", "1500"],
					51: ["0930", "1130", "1300", "1500"],
					nq: ["0930", "1130", "1300", "1500"],
					61: ["0930", "1130", "1300", "1500"],
					hk: ["0930", "1201", "1300", "1600"],
					100: ["0930", "1201", "1300", "1600"],
					us: ["0930", "1600"],
					200: ["0930", "1600"],
					"if": ["0915", "1130", "1300", "1515"],
					qh: ["0915", "1130", "1300", "1515"],
					300: ["0915", "1130", "1300", "1515"],
					wh: ["0000", "2400"]
				} [t]
			}

		}

		function i(t) {
			var stock = window.stock;
			if(window.StockDataUtils.isHSAdapter(stock)&&window.isMinute === 'minute'){
				return {
					minute: {
						sh:272,
						sz: 272,
						nq: 242,
						hk: 333,
						us: 391,
						"if": 272,
						300: 272,
						wh: 1440
					} [t],
					fdays: {
						sh: a(243),
						sz: a(243),
						nq: a(243),
						hk: a(333),
						us: a(391)
					} [t]
				}
			}else{
				return {
					minute: {
						sh: 242,
						sz: 242,
						nq: 242,
						hk: 333,
						us: 391,
						"if": 272,
						300: 272,
						wh: 1440
					} [t],
					fdays: {
						sh: a(243),
						sz: a(243),
						nq: a(243),
						hk: a(333),
						us: a(391)
					} [t]
				}
			}

		}

		function a(t) {
			return (t - 1) % 4 ? 5 * (Math.ceil(t / 4) + 1) : 5 * Math.ceil(t / 4)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = {
			timeTags: n,
			marketTime: r,
			marketMaxX: i
		};
		e["default"] = o, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";
		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(31),
			a = (r(i), n(30)),
			o = r(a),
			s = n(14),
			l = r(s),
			u = n(57),
			c = u.Shape.custom({
				_compileAttrs: function () {
					for (var t = this._attrs, e = (this._attrsCompiled, t.data || []), n = this.coord(), r = t.sampling, i = e.length, a = (l["default"].MINUTE_VOLUME_GAP, t.maxX || i), s = [], u = 0; i > u; u += r){
						var _dvol = e[u][0] < 0 ? 0 : e[u][0];
						s.push([n.d2y(_dvol),
						 o["default"].HZLD(e[u][1], "noGray")])
						};
					1 != r && (a = s.length), this.bars = s
				},
				//下图
				_draw: function (t) {
					var e = this._attrs,
						n = (this._attrsCompiled, e.data || [], this.coord());
					if (n) {
						var r = this.bars,
							i = (r.length, n.b),
							a = n.baseX, // 66.5
							o = (n.maxX > 1 ? n.w / (n.maxX) : n.stepX), // 与主图分时线一致的步长
							s = u.util.shift;
						r.forEach(function (e, n) {
							t.beginPath(), t.moveTo(s(a), i), t.lineTo(s(a), e[0]), t.strokeStyle = e[1], t.lineWidth = 1, t.stroke(), a += o
						})
					}
				}
			}, {
				coord: null,
				data: [],
				sampling: 1,
				maxX: null
			});
		e["default"] = c, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(31),
			a = r(i),
			o = n(30),
			s = (r(o), n(14)),
			l = (r(s), n(57)),
		u = l.Shape.custom({
			_draw: function (t) {
				var e = this._attrs,
					n = (e.data || [], e.x),
					r = e.y,
					i = this.coord(),
					a = i.l,
					o = i.r,
					s = i.t,
					u = i.b;
				var _rightEdge = o;
				t.beginPath(), n && (n = Math.max(n, a), n = Math.min(n, _rightEdge), n = l.util.shift(n), t.moveTo(n, i.t + 1), t.lineTo(n, i.b)), r && (r = Math.max(r, s), r = Math.min(r, u), r = l.util.shift(r), t.moveTo(a, r), t.lineTo(_rightEdge - 1, r)), this._useStroke(t), t.stroke(), t.closePath(), t.beginPath()
			}
		}, {
				coord: null,
				x: 0,
				y: 0,
				stroke: a["default"].cross.color
			});
		e["default"] = u, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(31),
			a = r(i),
			o = n(30),
			s = (r(o), n(14)),
			l = r(s),
			u = n(57),
			c = u.Shape.custom({
				_draw: function (t) {
					var e = this._attrs,
						n = e.data || [],
						r = (e.fixed, e.text),
						i = e.x,
						a = e.y,
						o = e.position,
						s = e.padding,
						c = e.triangle,
						h = e.boxHeight,
						f = e.boxWidth,
						g = this.coord(),
						d = g.l,
						p = g.r,
						A = g.t,
						C = g.b;
					g.w, g.h;
					i && (i = Math.max(i, d), i = Math.min(i, p)), a && (a = Math.max(a, A), a = Math.min(a, C));
					var v = u.util.shift;
					if (t.textBaseline = "middle", t.font = l["default"].FONT, o.match(/L/) && (t.textAlign = "right", this._useFill(t), this._useStroke(t), t.beginPath(), t.moveTo(v(d - f - c - s), v(a - h / 2)), t.lineTo(v(d - c), v(a - h / 2)), t.lineTo(v(d - c), v(a - 4)), t.lineTo(v(d), v(a)), t.lineTo(v(d - c), v(a + 4)), t.lineTo(v(d - c), v(a + h / 2)), t.lineTo(v(d - f - c - s), v(a + h / 2)), t.lineTo(v(d - f - c - s), v(a - h / 2)), t.fill(), t.stroke(), t.closePath(), t.fillStyle = r, t.fillText(n.left, v(d - c - s), v(a), c + f + s)), o.match(/R/) && (t.textAlign = "left", this._useFill(t), this._useStroke(t), t.beginPath(), t.moveTo(v(p + c), v(a - h / 2)), t.lineTo(v(p + c + f + s), v(a - h / 2)), t.lineTo(v(p + c + f + s), v(a + h / 2)), t.lineTo(v(p + c), v(a + h / 2)), t.lineTo(v(p + c), v(a + 4)), t.lineTo(v(p), v(a)), t.lineTo(v(p + c), v(a - 4)), t.lineTo(v(p + c), v(a - h / 2)), t.fill(), t.stroke(), t.closePath(), t.fillStyle = r, t.fillText(n.right, v(p + c + s), v(a), c + f + s)), o.match(/B/)) {
						t.textAlign = "center";
						var I = t.measureText(n.bottom).width + 18;
						this._useFill(t), this._useStroke(t), t.beginPath(), t.moveTo(v(i - I / 2), v(C + c)), t.lineTo(v(i - 4), v(C + c)), t.lineTo(v(i), v(C)), t.lineTo(v(i + 4), v(C + c)), t.lineTo(v(i + I / 2), v(C + c)), t.lineTo(v(i + I / 2), v(C + h + c)), t.lineTo(v(i - I / 2), v(C + h + c)), t.lineTo(v(i - I / 2), v(C + c)), t.fill(), t.stroke(), t.closePath(), t.fillStyle = r, t.fillText(n.bottom, v(i), v(C + c + h / 2))
					}
					t.beginPath()
				}
			}, {
				coord: null,
				x: 0,
				y: 0,
				data: {},
				stroke: a["default"].crossBox.stroke,
				fill: a["default"].crossBox.fill,
				text: a["default"].crossBox.text,
				positon: "left",
				triangle: 5,
				padding: 5,
				boxHeight: 18,
				boxWidth: 40
			});
		e["default"] = c, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(31),
			a = r(i),
			o = n(30),
			s = (r(o), n(14)),
			l = (r(s), n(57)),
			u = l.Shape.custom({
				_draw: function (t) {
					var e = this._attrs,
						n = (this._attrsCompiled, e.status || ""),
						r = this.coord(),
						i = r.x,
						o = r.y,
						s = r.h,
						l = r.w,
						u = i + l / 2,
						c = o + s / 2,
						h = 92.25,
						f = 47.5,
						g = {
							U: "未上市",
							S: "停牌",
							D: "已退市"
						} [n] || n;
					t.rect(u - h / 2, c - f / 2, h, f), this._useStroke(t), t.stroke(), t.fillStyle = a["default"].status.background, t.fill(), t.textAlign = "center", t.font = a["default"].status.font, t.fillStyle = a["default"].status.color, t.fillText(g, u, c + 4)
				}
			}, {
				coord: null,
				status: "",
				stroke: a["default"].status.line
			});
		e["default"] = u, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(31),
			a = r(i),
			o = n(30),
			s = (r(o), n(14)),
			l = (r(s), n(57)),
			u = l.Shape.custom({
				_draw: function (t) {
					var e = this._attrs,
						n = (e.data || [], e.x),
						r = e.y,
						i = e.r,
						a = this.coord();
					a.l, a.r;
					t.beginPath(), t.arc(l.util.shift(n), l.util.shift(r), i, 0, 2 * Math.PI), t.closePath(), this._useFill(t) && t.fill(), this._useStroke(t) && t.stroke(), t.beginPath()
				}
			}, {
				coord: null,
				x: 0,
				y: 0,
				r: 1,
				fill: a["default"].background.gridColor,
				stroke: a["default"].cross.color
			});
		e["default"] = u, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(31),
			a = r(i),
			o = n(30),
			s = (r(o), n(14)),
			l = r(s),
			u = n(57),
			c = u.Shape.custom({
				_draw: function (t) {
					var e = this._attrs,
						n = (this._attrsCompiled, e.data || []),
						r = e.time || [],
						i = (e.date, e.text, e.titleStroke),
						a = this.coord(),
						o = this.x(),
						s = n.length,
						c = a.l,
						h = a.r,
						f = a.t,
						g = (a.b, (s + 1) * l["default"].PANEL_LINEHEIGHT),
						d = 150;
					o > (c + h) / 2 ? h = c + d : c = h - d;
					var p = u.util.shift;
					c = p(c), h = p(h), f = p(f);
					var A = (c + h) / 2,
						C = l["default"].PANEL_LINEHEIGHT;
					t.beginPath(), this._useStroke(t), this._useFill(t), t.fillRect(c, f, d, g), t.strokeRect(c, f, d, g);
					var v = this.text();
					t.fillStyle = v, t.textAlign = "center", t.textBaseline = "top", t.font = l["default"].FONT, t.fillText(r, A, f + 2), f += C, i && (t.beginPath(), t.moveTo(c, f - 2), t.lineTo(h, f - 2), t.closePath(), t.stroke()), c += 10, h -= 10;
					for (var I = 0; s > I; I++) t.fillStyle = v, t.textAlign = "left", t.font = l["default"].FONT, n[I][3] && (t.font = l["default"].BORD_FONT), t.fillText(n[I][0], c, f + C * I), t.textAlign = "right", t.fillStyle = n[I][2], t.fillText(n[I][1], h, f + C * I);
					t.closePath()
				}
			}, {
				coord: null,
				data: [],
				x: 0,
				time: "",
				date: !1,
				fill: a["default"].panel.background,
				stroke: a["default"].panel.border,
				text: a["default"].panel.text,
				titleStroke: !1
			});
		e["default"] = c, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(31),
			a = r(i),
			o = n(30),
			s = r(o),
			l = n(14),
			u = r(l),
			c = n(12),
			h = r(c),
			f = n(57),
			g = f.Shape.custom({
				_afterInit: function () {
					this._attrsCompiled;
					this.mouseup(function (t) {
						this._handleClick(t.hitArea.symbol)
					}).mouseover(function (t) {
						this.canvas.node.style.cursor = "pointer"
					}).mouseout(function (t) {
						this.canvas.node.style.cursor = "default"
					})
				},
				_handleClick: function (t) {
					var e = h["default"].channel(t);
					e.publish(this._attrs.outerId + ".compare.delete")
				},
				_hitArea: function () {
					var t = [],
						e = this._attrs,
						n = e.data || [],
						r = this.coord();
					return e.click && ! function () {
						var e = r.l,
							i = r.t,
							a = r.h,
							o = r.w / n.length;
						n.forEach(function (n, r, s) {
							var l = e + o * r - 7,
								u = i;
							0 != r && t.push({
								polygon: !0,
								symbol: n.symbol,
								index: r,
								vertex: [
									[l, u],
									[l + a, u],
									[l + a, u + a],
									[l, u + a]
								]
							})
						})
					}(), t
				},
				_draw: function (t) {
					this.ctx = t;
					var e = this._attrs,
						n = e.data || [],
						r = e.text,
						i = this.coord(),
						a = 2 * e.r || e.side,
						o = i.l,
						l = i.t,
						c = i.h,
						h = i.w / n.length,
						g = f.util.shift;
					t.textAlign = "left", n.forEach(function (n, i, f) {
						var d = o + h * i,
							p = l + c / 2;
						t.fillStyle = n.color, e.click ? "circle" == e.shape ? (t.beginPath(), t.arc(d + a / 2, p, a / 2, 0, 2 * Math.PI), t.closePath(), t.fill()) : "rect" == e.shape && t.fillRect(g(d) + .5, g(p - a / 2) + .5, a, a) : t.fillRect(g(d) + .5, g(p - a / 2) + .5, 5, a), e.click && 0 != i && (t.strokeStyle = "white", t.beginPath(), t.moveTo(d + a / 4, p - a / 4), t.lineTo(d + a / 4 + a / 2, p + a / 4), t.stroke(), t.beginPath(), t.moveTo(d + a / 4 + a / 2, p - a / 4), t.lineTo(d + a / 4, p + a / 4), t.stroke(), t.closePath()), t.textAlign = "left", t.textBaseline = "middle", t.font = u["default"].PANEL_FONT;
						var A = t.measureText(n.name).width,
							C = n.percent,
							v = n.data;
						void 0 !== C && (C = n.percent.toFixed(2), 1 * C >= 0 && (C = "+" + C), C += "%");
						var I = v ? v + " " + C : C,
							m = t.measureText(I).width,
							y = 5;
						0 > h - a - A - m - y && (A = (h - a) * A / (A + m + y), m = h - a - A - y), t.fillStyle = r, t.fillText(n.name, d + a, p, A), t.fillStyle = s["default"].HZLD(n.percent), t.fillText(I, d + a + A + y, p, m)
					})
				}
			}, {
				coord: null,
				data: [],
				text: a["default"].title.text,
				click: "",
				shape: "circle",
				r: 7,
				outerId: ""
			});
		e["default"] = g, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(31),
			a = r(i),
			o = n(30),
			s = (r(o), n(14)),
			l = (r(s), n(57)),
			u = l.Shape.custom({
				_draw: function (t) {
					var e = this._attrs,
						n = this.coord(),
						r = e.stroke,
						i = e.r,
						a = e.fill;
					if (n) {
						var o = n.l,
							s = n.t,
							u = n.w,
							c = n.h,
							h = l.util.shift;
						t.beginPath(), t.beginPath(), t.moveTo(h(o + i), h(s)), t.lineTo(h(o + u - i), h(s)), t.arc(h(o + u - i), h(s + i), i, Math.PI / 2 * 3, 0), t.lineTo(h(o + u), h(s + c - i)), t.arc(h(o + u - i), h(s + c - i), i, 0, Math.PI / 2), t.lineTo(h(o + i), h(s + c)), t.arc(h(o + i), h(s + c - i), i, Math.PI / 2, Math.PI), t.lineTo(h(o), h(s + i)), t.arc(h(o + i), h(s + i), i, Math.PI, Math.PI / 2 * 3), t.closePath(), r && (this._useStroke(t), t.stroke()), a && (this._useFill(t), t.fill())
					}
				}
			}, {
				coord: null,
				r: 3,
				stroke: a["default"].border.color,
				fill: a["default"].background.color
			});
		e["default"] = u, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(31),
			a = r(i),
			o = n(30),
			s = (r(o), n(14)),
			l = r(s),
			u = n(57),
			c = u.Shape.custom({
				_draw: function (t) {
					if (this._attrs.data) {
						var e = this._attrs,
							n = e.data.data,
							r = (e.fill, e.data.time),
							i = e.market,
							a = this.coord(),
							o = a.l,
							s = a.t,
							u = a.w,
							c = a.h,
							h = 7,
							f = 5;
						this._useFill(t), t.textBaseline = "middle", t.textAlign = "right";
						var g = s + c / 2;
						t.font = l["default"].FONT, r = "us" === i ? "美东时间: " + r : "时间: " + r, t.fillText(r, o + u - h, s + c / 2);
						var d = t.measureText(r).width + 2 * h + f,
							p = n.length,
							A = (u - d) / 4;
						2 === p && (A = (u - d) / 3);
						for (var C = 0; p > C; C++) {
							this._useFill(t), t.textAlign = "left", t.fillText(n[C][0], o + A * C + h, g);
							var v = t.measureText(n[C][0]).width;
							t.textAlign = "left", t.fillStyle = n[C][2], t.fillText(n[C][1], o + A * C + v + h + f, g)
						}
						t.closePath()
					}
				}
			}, {
				coord: null,
				data: null,
				fill: a["default"].title.text
			});
		e["default"] = c, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function a(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = function () {
				function t(t, e) {
					var n = [],
						r = !0,
						i = !1,
						a = void 0;
					try {
						for (var o, s = t[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !e || n.length !== e); r = !0);
					} catch (l) {
						i = !0, a = l
					} finally {
						try {
							!r && s["return"] && s["return"]()
						} finally {
							if (i) throw a
						}
					}
					return n
				}
				return function (e, n) {
					if (Array.isArray(e)) return e;
					if (Symbol.iterator in Object(e)) return t(e, n);
					throw new TypeError("Invalid attempt to destructure non-iterable instance")
				}
			}(),
			s = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			l = function (t, e, n) {
				for (var r = !0; r;) {
					var i = t,
						a = e,
						o = n;
					s = u = l = void 0, r = !1, null === i && (i = Function.prototype);
					var s = Object.getOwnPropertyDescriptor(i, a);
					if (void 0 !== s) {
						if ("value" in s) return s.value;
						var l = s.get;
						if (void 0 === l) return;
						return l.call(o)
					}
					var u = Object.getPrototypeOf(i);
					if (null === u) return;
					t = u, e = a, n = o, r = !0
				}
			},
			u = n(9),
			c = r(u),
			h = n(12),
			f = r(h),
			g = n(58),
			d = r(g),
			p = n(57),
			A = function (t) {
				function e(t, n) {
					i(this, e), l(Object.getPrototypeOf(e.prototype), "constructor", this).call(this), this.symbol = t, this.cfg = c["default"].cfg(t)[n.chartId], this.channel = f["default"].channel(t);
					var r = this.cfg.layer;
					this.back = r.back, this.paper = r.paper, this.fore = r.fore, this.drag = r.drag, this.paint = r.paint
				}
				return a(e, t), s(e, [{
					key: "clearLayer",
					value: function () {
						this.back.empty(), this.paper.empty(), this.fore.empty(), this.drag.empty()
					}
				}, {
					key: "_onMouse",
					value: function () {
						var t = this;
						this.cfg.canvas;
						this.cfg.canvas.mousemove(function (e) {
							t.overState = 1, t.overX = e.x, t.overY = e.y, t.over(e.x, e.y)
						}).mouseout(function (e) {
							e.relatedTarget && (e.target.contains(e.relatedTarget) || e.relatedTarget.contains(e.target)) || (t.overState = 0, t.out())
						})
					}
				}, {
					key: "_unMouse",
					value: function () {
						this.cfg.canvas.unmousemove().unmouseout()
					}
				}, {
					key: "over",
					value: function (t, e) {
						this._over(t, e)
					}
				}, {
					key: "out",
					value: function () {
						this._out()
					}
				}, {
					key: "_isCoordChange",
					value: function () {
						var t = this.cfg.coord;
						if (this.w !== t.w || this.h !== t.h) {
							var e, n = (e = [t.x, t.y, t.w, t.h], this.x = e[0], this.y = e[1], this.w = e[2], this.h = e[3], e),
								r = o(n, 4),
								i = r[0],
								a = r[1],
								s = r[2],
								l = r[3];
							return this.coord = new d["default"](i, a, s, l), !0
						}
						return !1
					}
				}, {
					key: "_axis",
					value: function (t, e) {
						this.coord[t] = new d["default"](e.x, e.y, e.w, e.h)
					}
				}, {
					key: "_getData",
					value: function (t) {
						t = t || this.symbol;
						var e = this.dataTopic;
						return c["default"].data(t)[e] && c["default"].data(t)[e].calData
					}
				}, {
					key: "_getCmpList",
					value: function () {
						return this.cfg.cmpList.length ? this.cfg.cmpList : !1
					}
				}]), e
			}(p.EventEmitter);
		e["default"] = A, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}

		function i(t, e) {
			if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
		}

		function a(t, e) {
			if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
			t.prototype = Object.create(e && e.prototype, {
				constructor: {
					value: t,
					enumerable: !1,
					writable: !0,
					configurable: !0
				}
			}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var o = function () {
				function t(t, e) {
					var n = [],
						r = !0,
						i = !1,
						a = void 0;
					try {
						for (var o, s = t[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !e || n.length !== e); r = !0);
					} catch (l) {
						i = !0, a = l
					} finally {
						try {
							!r && s["return"] && s["return"]()
						} finally {
							if (i) throw a
						}
					}
					return n
				}
				return function (e, n) {
					if (Array.isArray(e)) return e;
					if (Symbol.iterator in Object(e)) return t(e, n);
					throw new TypeError("Invalid attempt to destructure non-iterable instance")
				}
			}(),
			s = function () {
				function t(t, e) {
					for (var n = 0; n < e.length; n++) {
						var r = e[n];
						r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
					}
				}
				return function (e, n, r) {
					return n && t(e.prototype, n), r && t(e, r), e
				}
			}(),
			l = function (t, e, n) {
				for (var r = !0; r;) {
					var i = t,
						a = e,
						o = n;
					s = u = l = void 0, r = !1, null === i && (i = Function.prototype);
					var s = Object.getOwnPropertyDescriptor(i, a);
					if (void 0 !== s) {
						if ("value" in s) return s.value;
						var l = s.get;
						if (void 0 === l) return;
						return l.call(o)
					}
					var u = Object.getPrototypeOf(i);
					if (null === u) return;
					t = u, e = a, n = o, r = !0
				}
			},
			u = n(58),
			c = r(u),
			h = n(63),
			f = r(h),
			g = n(53),
			d = r(g),
			p = n(31),
			A = r(p),
			C = n(30),
			v = r(C),
			I = n(65),
			m = r(I),
			y = n(14),
			b = r(y),
			_ = function (t) {
				function e(t, n) {
					i(this, e), l(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t, n), this.symbol = t, this.chartCfg = n
				}
				return a(e, t), s(e, [{
					key: "set_timeLabel",
					value: function () {
						this.paperEl.custom(f["default"]).id("fDaysTimeLabel").attr({
							align: "center"
						}), this.paperCmpEl.custom(f["default"]).id("fDaysTimeLabel").attr({
							align: "center"
						})
					}
				}, {
					key: "draw_timeLabel",
					value: function () {
						var t = this.coord.minuteLabelBottom,
							e = t.w / 5,
							n = new c["default"](t.x + e / 2, t.y, e * (this.data.date.length - 1), t.h);
						this.paperEl.$("fDaysTimeLabel").attr({
							coord: n,
							data: this.data.date.map(function (t) {
								return t && t.substr(5)
							})
						})
					}
				}, {
					key: "draw_cmpTimeLabel",
					value: function () {
						var t = this,
							e = this._getCmpList(),
							n = [];
						e && e.forEach(function (e, r, i) {
							var a = t._getData(e.symbol);
							a && a.date.length && (n = a.date)
						});
						var r = this.data.date;
						5 !== r.length && n.length && (r = n);
						var i = this.coord.minuteLabelBottom,
							a = i.w / 5,
							o = new c["default"](i.x + a / 2, i.y, a * (r.length - 1), i.h);
						this.paperCmpEl.$("fDaysTimeLabel").attr({
							coord: o,
							data: r.map(function (t) {
								return t && t.substr(5)
							})
						})
					}
				}, {
					key: "draw_minute",
					value: function () {
						var t = this.data,
							e = t.price.abs,
							n = this.maxX,
							r = t.close,
							i = t.price,
							a = this.coord.minuteArea;
						e = 0 === e ? .01 * r || .01 : e, a.reAxis([0, this.maxX], [r - e, r + e]);
						var o = i.data,
							s = i.average,
							l = Math.floor(n / 5),
							u = this.fdaysDataStart = l * (5 - this.data.date.length);
						s = s.slice(u, o.length), o = o.slice(u, o.length);
						this.fdaysDataLength = o.length;
						this.paperEl.$("minuteEl").attr({
							data: o,
							coord: a,
							seperation: l
						}), this.chartCfg.minuteArea.minuteAvgEl && this.paperEl.$("minuteAvgEl").attr({
							data: s,
							coord: a,
							seperation: l
						})
					}
				}, {
					key: "draw_volume",
					value: function () {
						var t = this.data,
							e = t.volume,
							n = this.coord.volumeArea,
							r = 0 === t.volume.max ? 1 : t.volume.max * b["default"].MAX_VOLUME_PERCENTAGE;
						n.reAxis([0, this.maxX], [0, r]);
						var i = this.fdaysDataStart,
							a = e.data.slice(i, e.data.length);
						this.paperEl.$("volumeEl").attr({
							data: a,
							coord: n
						}), this.paperCmpEl.$("volumeEl").attr({
							data: a,
							coord: n
						})
					}
				}, {

					key: "cal_titleData",
					value: function (t) {
						var e = this.data,
						stock = window.stock,
						isKcb = stock.slice(2,5),
							n = (e.close, e.date),
							r = e.price.fixed,
							i = o(e.last, 8),
							a = i[0],
							s = i[1],
							l = i[2],
							u = i[6],
							c = isKcb === '688'?i[7]<1e5?i[7]:i[7]<1e8?i[7]/1e6:i[7]/1e10:i[7];
						u || (u = n[0]);
						var h = a.slice(0, 2) + ":" + a.slice(2, 4),
							f = v["default"].HZLD(l),
							g = A["default"].text.title,
							d = [
								["价 格", s.toFixed(r), f]
							];
						if (t) {
							var isHSAdapter = window.StockDataUtils.isHSAdapter(stock);
							var p = "hk" === this.cfg.market && this.cfg.isIndex ? "成交额" : isHSAdapter? "成交量竞" : "成交量";
							d.push([p, m["default"].unit(c, 2), g])
						}
						return {
							time: u.substr(5).replace(/-/g, "/") + " " + h,
							data: d
						}
					}
				}, {
					key: "cal_currentTitle",
					value: function (t, e) {
						var n = this.data,
						stock = window.stock,
						isKcb = stock.slice(2,5),
							r = (n.close, n.date),
							i = n.price.fixed,
							a = o(t, 7),
							s = a[0],
							l = a[1],
							u = a[2],
							c = isKcb === '688'? a[3]/100:a[3],
							h = a[6];
						h || (h = r[0]);
						var f = s.slice(0, 2) + ":" + s.slice(2, 4),
							g = v["default"].HZLD(u),
							d = void 0,
							p = [
								["价 格", l.toFixed(i), g]
							];
						if (e) {
							var isHSAdapter = window.StockDataUtils.isHSAdapter(stock);
							var A = "hk" === this.cfg.market && this.cfg.isIndex ? "成交额" : isHSAdapter ? "成交量竞" : "成交量";
							p.push([A, m["default"].unit(c, 2), d])
						}
						return {
							time: h.substr(5).replace(/-/g, "/") + " " + f,
							data: p
						}
					}
				}]), e
			}(d["default"]);
		e["default"] = _, t.exports = e["default"]
	}, function (t, e, n) {
		(function (r) {
			"use strict";

			function i(t) {
				return t && t.__esModule ? t : {
					"default": t
				}
			}

			function a(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function o(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var s = function () {
					function t(t, e) {
						var n = [],
							r = !0,
							i = !1,
							a = void 0;
						try {
							for (var o, s = t[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !e || n.length !== e); r = !0);
						} catch (l) {
							i = !0, a = l
						} finally {
							try {
								!r && s["return"] && s["return"]()
							} finally {
								if (i) throw a
							}
						}
						return n
					}
					return function (e, n) {
						if (Array.isArray(e)) return e;
						if (Symbol.iterator in Object(e)) return t(e, n);
						throw new TypeError("Invalid attempt to destructure non-iterable instance")
					}
				}(),
				l = function () {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function (e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}(),
				u = function (t, e, n) {
					for (var r = !0; r;) {
						var i = t,
							a = e,
							o = n;
						s = u = l = void 0, r = !1, null === i && (i = Function.prototype);
						var s = Object.getOwnPropertyDescriptor(i, a);
						if (void 0 !== s) {
							if ("value" in s) return s.value;
							var l = s.get;
							if (void 0 === l) return;
							return l.call(o)
						}
						var u = Object.getPrototypeOf(i);
						if (null === u) return;
						t = u, e = a, n = o, r = !0
					}
				},
				c = n(30),
				h = i(c),
				f = n(65),
				g = i(f),
				d = n(54),
				p = i(d),
				A = n(9),
				C = i(A),
				v = n(58),
				I = (i(v), n(60)),
				m = i(I),
				y = n(82),
				b = i(y),
				_ = n(83),
				x = i(_),
				w = n(84),
				k = i(w),
				T = n(85),
				E = i(T),
				S = n(86),
				D = i(S),
				P = n(87),
				O = i(P),
				M = n(88),
				L = i(M),
				j = n(89),
				F = i(j),
				N = n(64),
				q = i(N),
				R = n(63),
				B = i(R),
				V = n(71),
				X = i(V),
				U = n(90),
				z = i(U),
				W = n(74),
				H = i(W),
				G = n(72),
				Y = i(G),
				$ = n(75),
				Z = i($),
				Q = n(77),
				J = i(Q),
				K = n(78),
				tt = i(K),
				et = n(56),
				nt = i(et),
				rt = n(73),
				it = i(rt),
				at = n(91),
				ot = i(at),
				st = n(31),
				lt = i(st),
				ut = n(14),
				ct = i(ut),
				ht = n(79),
				ft = i(ht),
				gt = n(18),
				dt = n(57),
				pt = {
					MACD: D["default"],
					RSI: O["default"],
					KDJ: O["default"],
					DMI: O["default"],
					OBV: O["default"],
					"W&R": O["default"],
					BOLL: L["default"],
					SAR: F["default"]
				},
				At = {
					MACD: [
						["DIFF"],
						["DEA"],
						["MACD"]
					],
					RSI: [
						["RSI6"],
						["RSI12"],
						["RSI24"]
					],
					KDJ: [
						["K"],
						["D"],
						["J"]
					],
					DMI: [
						["PDI"],
						["MDI"],
						["ADX"],
						["ADXR"]
					],
					OBV: [
						["OBV"]
					],
					"W&R": [
						["WR1"],
						["WR2"]
					],
					BOLL: [
						["UPPER"],
						["MID"],
						["LOWER"]
					],
					SAR: [
						["SAR"]
					]
				},
				Ct = function (t) {
					function e(t, n) {
						a(this, e), u(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t, n), this.chartCfg = n;
						var r = this.cfg,
							i = (this.type = r.current, r.market);
						"fund" == i && (i = t.substr(0, 2)), this.market = i, this.minX = 20, this.maxX = 60, this.maxCandleWidth = 11, this.currentIndex = "MACD";
						var o = this.fqType = r.fqType;
						this.type.match(/m5|m15|m30|m60/) && (o = this.fqType = ""), this.topic = this.type + o
					}
					return o(e, t), l(e, [{
						key: "init",
						value: function (t) {
							this.chartCfg = t || this.chartCfg;
							var e = this.cfg;
							e.coord;
							this._isCoordChange() && this.getCoord();
							var n = this.fqType = e.fqType;
							return this.type.match(/m5|m15|m30|m60/) && (n = this.fqType = ""), this.topic !== this.type + n && (this.data = null, this.topic = this.type + n, this.setPeriod(0, 0), this.trendData = null, this.startDate = null, this.endDate = null), this.dataTopic = this.topic, this.type.match(/^year/) && (this.dataTopic = "day" + n), this.trendData = this.getTrendData(), this.data = this.updateData(), this.trendTopic = this.market.match(/if|wh/) || "month" === this.type ? this.type + this.fqType : "trend" + this.fqType, this.trendTopic = this.type.match(/m5|m15|m30|m60/) ? this.type : this.trendTopic, this.backEl = this.back.group(), this.paperEl = this.paper.group(), this.dragEl = this.drag.group(), this.staticForeEl = this.fore.group(), this.dynamicForeEl = this.fore.group(), this.loadingEl = this.back.group(), this.setElement(), this._onMouse(), t.trendArea.display && this._onMouseWheel(), this.listenToData(), this.listenToDrag(), this.listenToIndex(), this
						}
					}, {
						key: "destroy",
						value: function () {
							this._unMouse(), this.chartCfg.trendArea.display && this._unMouseWheel(), this.userGraphic && this.userGraphic.destroy(), this.subMain && this.subMain.unsubscribe(), this.subDrag && this.subDrag.unsubscribe(), this.subIndex && this.subIndex.unsubscribe(), this.clearLayer(), this.startIndex = null, this.endIndex = null
						}
					}, {
						key: "setPeriod",
						value: function (t, e) {
							this.startIndex = t, this.endIndex = e
						}
					}, {
						key: "getPeriod",
						value: function () {
							return this.startIndex || this.endIndex ? {
								startIndex: this.startIndex,
								endIndex: this.endIndex
							} : !1
						}
					}, {
						key: "getCoord",
						value: function () {
							this.coord = this.coord || {};
							var t = this.coord,
								e = this.chartCfg,
								n = this.w - 2,
								r = 0;
							if (e.titleArea.display) {
								var i = e.titleArea.position,
									a = i.left,
									o = i.top,
									s = i.height,
									l = i.right;
								r += o, t.titleGrid = {
									x: a,
									y: r,
									w: n - a - l,
									h: s
								}, r += s, this._axis("title", t.titleGrid)
							}
							if (e.klineArea.display) {
								var u = e.klineArea.position,
									a = u.left,
									c = u.top,
									s = u.height,
									l = u.right;
								r += c;
								var h = n - a - l;
								t.klineGrid = {
									x: a,
									y: r,
									w: h,
									h: s,
									m: 8,
									n: 12
								};
								var f = 4,
									g = 5;
								t.klineLabelGrid = {
									x: a - f - g,
									y: r,
									w: a - f - g - 1,
									h: s
								}, t.klineLabelBottomGrid = {
									x: a,
									y: r + s + g,
									w: h,
									h: 35 - 2 * g
								};
								var d = 0;
								e.klineArea.ma && (d = 20, t.klineMaGrid = {
									x: a,
									y: r,
									w: h - 1,
									h: d
								}, this._axis("klineMa", t.klineMaGrid)), this._axis("klineArea", t.klineGrid), this._axis("klineLabel", t.klineLabelGrid), this._axis("klineLabelBottom", t.klineLabelBottomGrid), e.panel.display && (t.panelGrid = {
									x: a,
									y: r + d - 1,
									w: h,
									h: s
								}, this._axis("klinePanel", t.panelGrid)), r += s
							}
							if (e.volumeArea.display) {
								var p = e.volumeArea.position,
									a = p.left,
									A = p.top,
									s = p.height,
									l = p.right;
								r += A;
								var h = n - a - l;
								t.volumeGrid = {
									x: a,
									y: r,
									w: h,
									h: s,
									m: 3,
									n: 1
								}, t.volumeBarsGrid = {
									x: a,
									y: r,
									w: h,
									h: s - 2
								};
								var f = 4,
									g = 5;
								if (t.volumeLabelGrid = {
										x: a - f - g,
										y: r,
										w: a - f - g - 1,
										h: 2 * s / 3
									}, e.volumeArea.ma) {
									var C = 15;
									t.volumeMaGrid = {
										x: a,
										y: r - C,
										w: h - 1,
										h: C
									}, this._axis("volumeMa", t.volumeMaGrid)
								}
								this._axis("volumeArea", t.volumeGrid), this._axis("volumeBarsArea", t.volumeBarsGrid), this._axis("volumeLabel", t.volumeLabelGrid), r += s
							}
							if (e.indexArea.display) {
								var v = e.indexArea.position,
									a = v.left,
									I = v.top,
									s = v.height,
									l = v.right;
								r += I;
								var h = n - a - l;
								t.indexGrid = {
									x: a,
									y: r,
									w: h,
									h: s,
									m: 5,
									n: 1
								};
								var f = 4,
									g = 5;
								t.indexLabelGrid = {
									x: a - f - g,
									y: r,
									w: a - f - g - 1,
									h: s
								}, t.indexSloganGrid = {
									x: a,
									y: r - 15,
									w: h - 1,
									h: 15
								}, t.indexMenuGrid = {
									x: a + 1,
									y: r + s,
									w: h - 2,
									h: 15
								}, r += s, this._axis("indexArea", t.indexGrid), this._axis("indexLabel", t.indexLabelGrid), this._axis("indexSlogan", t.indexSloganGrid), this._axis("indexMenu", t.indexMenuGrid)
							}
							if (e.trendArea.display) {
								var m = e.trendArea.position,
									a = m.left,
									y = m.top,
									s = m.height,
									l = m.right;
								r += y;
								var h = n - a - l;
								t.trendGrid = {
									x: a,
									y: r,
									w: h,
									h: s,
									m: 1,
									n: 1
								};
								var b = 15;
								t.trendLabelGrid = {
									x: a,
									y: r + s + 3,
									w: h,
									h: b
								}, this._axis("trendArea", t.trendGrid), this._axis("trendLabelArea", t.trendLabelGrid)
							}
						}
					}, {
						key: "listenToData",
						value: function (t) {
							var e = this,
								n = this.cfg.outer.id,
								r = this.channel.subscribe(n + ".data." + this.type, function (t) {
									C["default"].data(e.symbol, e.dataTopic, t), e.trendData = e.getTrendData(), e.data = e.updateData(), e.drawAll()
								});
							this.subMain = r
						}
					}, {
						key: "getTrendData",
						value: function () {
							var t = this.trendTopic;
							if (C["default"].data(this.symbol)[t]) {
								var e = C["default"].data(this.symbol)[t].calData;
								return e.o && e.o.len >= 64 ? e : (this._replaceData = !0, this._getData())
							}
							return null
						}
					}, {
						key: "draw_trendArea",
						value: function () {
							this.coord.trendArea && (this.draw_trend(), this.draw_trendLabel())
						}
					}, {
						key: "getFetchYear",
						value: function (t, e) {
							var n = t.slice(0, 4),
								r = e.slice(0, 4),
								i = this.type.match(/year/) ? "day" : this.type,
								a = this.trendData.o.trendYearList[i],
								o = [];
							return a.forEach(function (t) {
								var e = t[0],
									i = t[1];
								i !== !0 && "fetching" !== i && e >= n && r >= e && (o.push(e), t[1] = "fetching")
							}), o
						}
					}, {
						key: "listenToDrag",
						value: function () {
							var t = this;
							this.subDrag = this.channel.subscribe(this.cfg.outer.id + ".drag." + this.type, function (e) {
								var n = t.trendData[e.x1][0],
									r = t.trendData[e.x2 - 1][0],
									i = t.trendData.o.trendYearList;
								if (i) {
									var a = t.getFetchYear(n, r);
									if (a.length) return t.startDate = n, t.endDate = r, void t.channel.publish(t.cfg.outer.id + ".fetch." + t.cfg.current, a)
								}
								if (t.isFetchedData()) {
									var o = ot["default"].binarySearch(t._getData(), n, !0),
										s = e.x2 === t.trendData.length ? t._getData().o.len - 1 : ot["default"].binarySearch(t._getData(), r, !0);
									0 > o && (o = 0);
									var l = t.minLength,
										u = t._getData().o.len;
									l - 1 > s - o && ("beg" == e.type ? (o = s - (l - 1), 0 > o && (o = 0, s = o + l - 1, s > u - 1 && (s = u - 1))) : (s = o + (l - 1), s > u - 1 && (s = u - 1, o = s - l + 1, 0 > o && (o = 0)))), t.startDate = t._getData()[o][0], t.endDate = t._getData()[s][0], t.setPeriod(o, s + 1), t.data = t.updateViewData(), t.drawAll()
								}
							})
						}
					}, {
						key: "listenToIndex",
						value: function () {
							var t = this;
							this.subIndex = this.channel.subscribe(this.cfg.outer.id + ".index." + this.type, function (e) {
								t.currentIndex = e, t.data = t.updateViewData(), t.drawAll()
							})
						}
					}, {
						key: "setElement",
						value: function () {
							this.setBack(), this.setPaper(), this.setLoading(), this.setDrag(), this.setFore()
						}
					}, {
						key: "setBack",
						value: function () {
							var t = this.backEl;
							t.hide();
							var e = this.coord,
								n = lt["default"].border.color,
								r = lt["default"].background.gridColor,
								i = lt["default"].border.inner,
								a = e.title;
							if (a && t.custom(J["default"]).attr({
									coord: a,
									stroke: n,
									fill: r,
									r: 4
								}), e.klineGrid && t.custom(m["default"]).attr(e.klineGrid).stroke(n).inner(i).fill(r), e.volumeArea) {
								t.custom(m["default"]).attr(e.volumeGrid).stroke(n).inner(i).fill(r);
								var o = ct["default"].STOCK_UNIT[this.market];
								"hk" === this.cfg.market && this.cfg.isIndex && (o = "元"), t.text(o, e.volumeArea.l - 10, e.volumeArea.b).textBaseline("middle").textAlign("right").font(ct["default"].FONT).fill(lt["default"].text.label)
							}
							e.indexGrid && t.custom(m["default"]).attr(e.indexGrid).stroke(n).inner(i).fill(r), e.trendGrid && t.custom(m["default"]).attr(e.trendGrid).stroke(n).inner(i).fill(r)
						}
					}, {
						key: "setPaper",
						value: function () {
							var t = this.paperEl;
							t.hide();
							var e = this.coord,
								n = lt["default"].text.label;
							if (e.klineArea && this.setKline(), e.volumeArea) {
								var r = e.volumeLabel;
								t.custom(q["default"]).id("volumeLabelEl").attr({
									align: "right",
									coord: r,
									color: !1,
									fill: n,
									unit: !0,
									fixed: 0
								});
								e.volumeArea;
								t.custom(E["default"]).id("volumeEl")
							}
							var i = e.trendArea;
							i && (t.custom(x["default"]).id("trendEl").attr({
								isLine: !0
							}), t.custom(B["default"]).id("trendLabelEl").attr({
								coord: e.trendLabelArea,
								align: "center"
							}));
							var a = e.indexMenu;
							if (a) {
								t.custom(b["default"]).id("indexMenuEl").attr({
									data: ["MACD", "RSI", "KDJ", "DMI", "OBV", "W&R", "BOLL", "SAR"],
									currentIndex: this.currentIndex,
									coord: a,
									topic: this.type,
									symbol: this.symbol,
									outerId: this.cfg.outer.id
								});
								var o = t.group().id("indexGroupEL");
								for (var s in pt) pt[s] && o.custom(pt[s]).id(s).hide();
								t.custom(q["default"]).id("indexLabelEl").attr({
									align: "right",
									color: !1,
									fill: n,
									unit: !0
								})
							}
						}
					}, {
						key: "setKline",
						value: function () {
							var t = this.coord,
								e = this.paperEl,
								n = lt["default"].text.label;
							e.custom(k["default"]).id("klineEl").attr({
								mathType: this.cfg.mathType
							});
							var r = t.klineLabel;
							e.custom(q["default"]).id("klineLabelEl").attr({
								align: "right",
								coord: r,
								color: !1,
								fill: n,
								mathType: this.cfg.mathType
							});
							var i = t.klineLabelBottom;
							e.custom(B["default"]).id("klineLabelBottomEl").attr({
								coord: i
							})
						}
					}, {
						key: "setLoading",
						value: function () {
							this.loading = this.loadingEl.custom(nt["default"]).x(this.w / 2).y(this.h / 2)
						}
					}, {
						key: "setDrag",
						value: function () {
							var t = this.dragEl;
							t && t.hide(), this.coord.trendArea && t.custom(z["default"]).id("trendDragEl").attr({
								topic: this.type,
								symbol: this.symbol,
								outerId: this.cfg.outer.id
							})
						}
					}, {
						key: "setFore",
						value: function () {
							var t = this.staticForeEl,
								e = this.dynamicForeEl;
							t && t.hide(), e && e.hide();
							var n = this.coord,
								r = lt["default"].title.text,
								i = lt["default"].cross.color,
								a = lt["default"].minute.dotColor,
								o = lt["default"].minute.dotFill;
							lt["default"].cross.color, lt["default"].background.minuteGrid;
							n.title && t.custom(tt["default"]).id("titleTextEl").attr({
								coord: n.title,
								fill: r,
								market: this.cfg.market
							}), n.klineArea && (n.klineMa && t.custom(B["default"]).id("klineMaEl").attr({
								coord: n.klineMa
							}), e.custom(X["default"]).id("klineCrossEl").attr({
								coord: n.klineArea,
								stroke: i
							}).setAttr("z-index", 20), e.custom(H["default"]).id("dotEl").attr({
								coord: n.klineArea,
								r: 3,
								stroke: a,
								fill: o
							}).setAttr("z-index", 50), e.custom(Y["default"]).id("crossBoxEl").attr({
								coord: n.klineArea,
								position: "LB",
								padding: 4,
								boxWidth: n.klineLabel.width
							}).setAttr("z-index", 90), n.klinePanel && e.custom(Z["default"]).id("panelEl").attr({
								coord: n.klinePanel,
								titleStroke: !0
							}).setAttr("z-index", 100)), n.volumeArea && (n.volumeMa && t.custom(B["default"]).id("volumeMaEl").attr({
								coord: n.volumeMa
							}), e.custom(X["default"]).id("volCrossEl").attr({
								coord: n.volumeArea,
								stroke: i
							}).setAttr("z-index", 20), e.rect(0, 0, 0, 0).id("rectVolEl")), n.indexArea && (t.custom(B["default"]).id("indexSloganEl").attr({
								coord: n.indexSlogan
							}), e.custom(X["default"]).id("indexCrossEl").attr({
								coord: n.indexArea,
								stroke: i
							}).setAttr("z-index", 20))
						}
					}, {
						key: "draw_status",
						value: function (t) {
							t = t || this.data.o.status;
							var e = this.coord.klineGrid;
							this.fore.$("statusBox") || (this.fore.custom(it["default"]).id("statusBox").attr({
								coord: e,
								status: t
							}), this._unMouse())
						}
					}, {
						key: "drawAll",
						value: function () {
							if (this.showBack(), this.loading.start(), this.data && this._getData() && this.isFetchedData()) {
								if (this.loading.stop(), 0 === this.data.length) return void this.draw_status("暂无数据");
								this.getTrendData() && (this.paperEl.show(), this.trendData = this.getTrendData(), this.trendData.length && this.draw_trendArea()), this.showPaper(), this.overState ? this.showDynamicFore(this.overX, this.overY) : this.showStaticFore()
							}
						}
					}, {
						key: "isFetchedData",
						value: function () {
							var t = this.type.match(/year/) ? "day" : this.type;
							if (!this.trendData || !this.trendData.length || !this.trendData.o.trendYearList) return !0;
							var e = this.trendData.o.trendYearList[t],
								n = !0;
							return e.forEach(function (t) {
								var e = (t[0], t[1]);
								"fetching" === e && (n = !1)
							}), n
						}
					}, {
						key: "showBack",
						value: function () {
							this.backEl && this.backEl.show()
						}
					}, {
						key: "showPaper",
						value: function () {
							this.paperEl && (this.cal_barWidth(), this.coord.klineArea && (this.draw_kline(), this.draw_klineLabel(), this.draw_klineLabelBottom()), this.coord.volumeArea && (this.draw_volumeLabel(), this.draw_volume()), this.coord.indexArea && (this.draw_index(), this.draw_indexMenu()), this.coord.trendArea && this.trendData && (this.draw_dragBar(), this.showDrag()), this.paperEl.show())
						}
					}, {
						key: "showDrag",
						value: function () {
							this.dragEl && this.dragEl.show()
						}
					}, {
						key: "showUserGraphic",
						value: function () {
							var t = this;
							(this.userGraphic || this.cfg.userPaint) && ! function () {
								var e = t;
								n.e(1, function () {
									e.cfg.userPaint && e._paintHide();
									var t = n(92),
										r = e.userGraphic = e.userGraphic ? e.userGraphic : new t(e, e.coord.klineArea, e.paint);
									r.show(e, e.coord.klineArea, e.paint)
								})
							}()
						}
					}, {
						key: "_paintHide",
						value: function () {
							this._unMouseWheel(), this.dynamicForeEl.$("panelEl") && this.dynamicForeEl.$("panelEl").hide(), this.dynamicForeEl.$("klineCrossEl") && this.dynamicForeEl.$("klineCrossEl").hide(), this.dynamicForeEl.$("crossBoxEl") && this.dynamicForeEl.$("crossBoxEl").hide(), this.dynamicForeEl.$("dotEl") && this.dynamicForeEl.$("dotEl").hide()
						}
					}, {
						key: "showStaticFore",
						value: function () {
							this.staticForeEl && (this.coord.title && this.draw_title(), this.coord.klineMa && this.draw_ma("klineMaEl"), this.coord.volumeMa && this.draw_ma("volumeMaEl"), this.coord.indexArea && this.draw_indexSlogan(), this.staticForeEl.show())
						}
					}, {
						key: "showDynamicFore",
						value: function (t, e) {
							if (e < this.y1) return void this.showStaticFore();
							var n = this.dynamicForeEl,
								r = this.staticForeEl,
								i = this.data,
								a = this.coord.klineArea,
								o = this.coord.volumeBarsArea,
								s = this.chartCfg.klineArea.shape,
								l = void 0;
							"candle" === s ? l = a.x2d(t) : "line" === s && (l = a.x2dLine(t)), l >= i.length && (l = i.length - 1);
							var u = i[l];
							this.coord.klineMa && this.draw_ma("klineMaEl", u.slice(7, 10)), this.coord.volumeMa && this.draw_ma("volumeMaEl", u.slice(10, 14));
							var c = void 0,
								f = a.d2x(l) + a.stepX / 2,
								g = f;
							if ("candle" === s) {
								for (var d = Number.MAX_VALUE, p = 1, A = 1; 5 > A; A++) {
									var C = Math.pow(a.d2y(u[A]) - e, 2);
									d > C && (p = A, d = C)
								}
								c = u[p], u.nearest = c
							} else if ("line" === s) {
								c = u[2];
								var v = a.w / (a.maxX - a.minX);
								f = dt.util.shift(a.baseX + l * v)
							}
							var I = a.d2y(c);
							n.$("klineCrossEl").attr({
								x: f,
								y: I
							}), n.$("dotEl").attr({
								x: f,
								y: I
							});
							var m = u[0],
								y = void 0;
							if (y = this.type.match(/m5|15|m30|m60/) ? m.slice(4, 6) + "/" + m.slice(6, 8) + " " + m.slice(8, 10) + ":" + m.slice(10, 12) : m.slice(0, 4) + "/" + m.slice(4, 6) + "/" + m.slice(6, 8), n.$("crossBoxEl").attr({
									data: {
										left: c.toFixed(this.data.o.fixed),
										bottom: y
									},
									x: f,
									y: I
								}), this.coord.volumeArea)
								if (n.$("volCrossEl").attr({
										x: g
									}), u[5]) {
									I = o.d2y(u[5]);
									var b = this.barWidth,
										_ = h["default"].HZLD(u[6], "noGray");
									n.$("rectVolEl").attr({
										x: dt.util.shift(g) - b / 2 - .5,
										y: dt.util.shift(I) - 1,
										width: b + 1,
										height: dt.util.shift(o.b - I + 2) + .5,
										fill: _,
										stroke: _
									}).show()
								} else n.$("rectVolEl").hide();
							this.coord.indexArea && (n.$("indexCrossEl").attr({
								x: g
							}), this.draw_indexSlogan(l)), u.close = i.o.closingPrice[this.startIndex + l - 1], this.coord.klinePanel && this.draw_currentPanel(u, f), this.coord.title && this.draw_title(u), n.show(), r.show()
						}
					}, {
						key: "updateData",
						value: function () {
							var t = this._getData();
							if (!t || !t.length) return t;
							var e = this.startDate,
								n = this.endDate;
							if (e && n) {
								var r = ot["default"].binarySearch(t, e, !0),
									i = ot["default"].binarySearch(t, n, !0);
								return r = -1 === r ? 0 : r, i = i === t.length - 2 ? t.length - 1 : i, this.setPeriod(r, i + 1), this.updateViewData()
							}
							if (this.getPeriod()) {
								if (this.data && t.o.len - this.data.o.len) {
									var a = t.o.len - this.data.o.len;
									this.setPeriod(this.startIndex, this.endIndex + a)
								}
							} else {
								var o = t.o.len;
								this.minLength = o >= this.minX ? this.minX : o;
								var s = o > this.maxX ? o - this.maxX : 0,
									l = o;
								this.setPeriod(s, l)
							}
							return this.updateViewData()
						}
					}, {
						key: "updateViewData",
						value: function () {
							var t = this._getData(),
								e = t.slice(this.startIndex, this.endIndex),
								n = -Number.MAX_VALUE,
								i = Number.MAX_VALUE,
								a = 0,
								o = 0 == this.startIndex ? t.o.open : t.o.closingPrice[this.startIndex - 1];
							return e.forEach(function (t, e, r) {
								n = Math.max(n, t[1]), n = Math.max(n, t[2]), n = Math.max(n, t[3]), n = "" === t[7] ? n : Math.max(n, t[7]), n = "" === t[8] ? n : Math.max(n, t[8]), n = "" === t[9] ? n : Math.max(n, t[9]), i = Math.min(i, t[1]), i = Math.min(i, t[2]), i = Math.min(i, t[4]), i = "" === t[7] ? i : Math.min(i, t[7]), i = "" === t[8] ? i : Math.min(i, t[8]), i = "" === t[9] ? i : Math.min(i, t[9]), a = Math.max(a, t[5]), a = Math.max(a, t[10]), a = Math.max(a, t[11]), a = Math.max(a, t[12])
							}), e.o = r.extend({}, t.o, {
								maxVal: n,
								minVal: i,
								maxVol: a,
								open: o,
								closingPrice: t.o.closingPrice
							}), e.o = r.extend({}, e.o, this._updateIndexData()), e
						}
					}, {
						key: "_updateIndexData",
						value: function () {
							var t = this._getData(),
								e = this.currentIndex,
								n = this.startIndex,
								r = this.endIndex;
							switch (t.o[e] || (t.o[e] = p["default"].klineIndex(e, t.o)), e) {
								case "MACD":
									var i = t.o.MACD;
									return {
										MACD: {
											DIFF: i.DIF.slice(n, r),
											DEA: i.DEA.slice(n, r),
											MACD: i.MACD.slice(n, r)
										}
									};
								case "RSI":
									var a = t.o.RSI;
									return {
										RSI: {
											RSI6: a.RSI6.slice(n, r),
											RSI12: a.RSI12.slice(n, r),
											RSI24: a.RSI24.slice(n, r)
										}
									};
								case "KDJ":
									var o = t.o.KDJ;
									return {
										KDJ: {
											K: o.K.slice(n, r),
											D: o.D.slice(n, r),
											J: o.J.slice(n, r)
										}
									};
								case "DMI":
									var s = t.o.DMI;
									return {
										DMI: {
											PDI: s.PDI.slice(n, r),
											MDI: s.MDI.slice(n, r),
											ADX: s.ADX.slice(n, r),
											ADXR: s.ADXR.slice(n, r)
										}
									};
								case "OBV":
									var l = t.o.OBV;
									return {
										OBV: {
											OBV: l.OBV.slice(n, r)
										}
									};
								case "W&R":
									var u = t.o["W&R"];
									return {
										"W&R": {
											WR1: u.WR10.slice(n, r),
											WR2: u.WR6.slice(n, r)
										}
									};
								case "BOLL":
									var c = t.o.BOLL;
									return {
										BOLL: {
											UPPER: c.UPPER.slice(n, r),
											MID: c.MID.slice(n, r),
											LOWER: c.LOWER.slice(n, r)
										}
									};
								case "SAR":
									var h = t.o.SAR;
									return {
										SAR: {
											SAR: {
												data: h.SAR.data.slice(n, r),
												direction: h.SAR.direction.slice(n, r)
											}
										}
									}
							}
						}
					}, {
						key: "_over",
						value: function (t, e) {
							this.data && !this.data.status && this.showDynamicFore(t, e)
						}
					}, {
						key: "_out",
						value: function () {
							this.data && !this.data.status && (this.dynamicForeEl.hide(), this.showStaticFore())
						}
					}, {
						key: "draw_kline",
						value: function () {
							var t = this.data,
								e = t.length,
								n = this.coord.klineArea,
								r = t.o.maxVal - t.o.minVal;
							r = 1e-5 > r ? .001 * t.o.open || .01 : r;
							var i = t.o.maxVal + r / 7,
								a = t.o.minVal - r / 7;
							if ("log" === this.cfg.mathType) {
								var o = Math.pow(Math.E, 1 / 7 * Math.log(t.o.maxVal / t.o.minVal));
								i = t.o.maxVal * o, a = t.o.minVal / o
							}
							n.reAxis([0, e < this.minX ? this.minX - 1 : e - 1], [a, i], "log" === this.cfg.mathType), this.paperEl.$("klineEl").attr({
								data: t,
								coord: n,
								barWidth: this.barWidth
							}), this.showUserGraphic(n, t)
						}
					}, {
						key: "draw_klineLabel",
						value: function () {
							var t = (this.data.o, this.data.o.fixed),
								e = this.coord.klineArea;
							this.paperEl.$("klineLabelEl").attr({
								data: {
									maxVal: e.maxY,
									minVal: e.minY,
									n: 9
								},
								fixed: t
							})
						}
					}, {
						key: "draw_klineLabelBottom",
						value: function () {
							for (var t = this.data, e = t.length > this.minX ? t.length : this.minX, n = [], r = this.type.match(/m5|m15|m30|m60/) ? 3 : 4, i = 0; r > i; i++) {
								var a = i === r - 1 ? t[e - 1] : t[Math.floor(e * i / (r - 1))];
								n[i] = a ? a[0] : ""
							}
							n = n.map(function (t) {
								return "" != t && (t = t.slice(0, 4) + "/" + t.slice(4, 6) + "/" + t.slice(6, 8)), t
							}), this.paperEl.$("klineLabelBottomEl").attr({
								data: n
							})
						}
					}, {
						key: "draw_volume",
						value: function () {
							var t = this.data,
								e = t.length,
								n = this.coord.volumeBarsArea,
								r = 0 === t.o.maxVol ? 1 : t.o.maxVol * ct["default"].MAX_VOLUME_PERCENTAGE;
							n.reAxis([0, e < this.minX ? this.minX - 1 : e - 1], [0, r]), this.paperEl.$("volumeEl").attr({
								data: t,
								coord: n,
								barWidth: this.barWidth
							})
						}
					}, {
						key: "draw_volumeLabel",
						value: function () {
							var t = (this.coord.volumeLabel, this.data.o),
								e = t.maxVol * ct["default"].MAX_VOLUME_PERCENTAGE;
							this.paperEl.$("volumeLabelEl").data({
								maxVal: e,
								minVal: e / 3,
								n: 3
							})
						}
					}, {
						key: "draw_trend",
						value: function () {
							var t = this.trendData.o,
								e = this.coord.trendArea;
							e.reAxis([0, t.len], [t.minValAll, t.maxValAll]), this.paperEl.$("trendEl").attr({
								data: t.closingPrice,
								coord: e
							})
						}
					}, {
						key: "draw_trendLabel",
						value: function () {
							var t = this.trendData;
							if (t) {
								var e = t.o.trendTimeTags,
									n = [],
									r = [],
									i = 0;
								e.forEach(function (t) {
									n.push(t[0]), r.push(t[1] - i), i = t[1]
								}), r.shift(), this.paperEl.$("trendLabelEl").attr({
									data: n,
									step: r
								})
							}
						}
					}, {
						key: "draw_dragBar",
						value: function () {
							var t = (this.getPeriod(), this.coord.trendArea),
								e = this.data[0][0],
								n = this.data[this.data.length - 1][0],
								r = this.dragIndStart = ot["default"].binarySearch(this.trendData, e, !0),
								i = this.dragIndEnd = ot["default"].binarySearch(this.trendData, n, !0),
								a = t.d2xLine(r),
								o = t.d2xLine(i + 1);
							this.dragEl.$("trendDragEl").attr({
								coord: t,
								x: t.l,
								w: t.w,
								beg: a,
								end: o,
								klineCoord: this.cfg.userPaint ? null : this.coord.klineArea,
								dataReplaced: this._replaceData
							})
						}
					}, {
						key: "draw_index",
						value: function () {
							var t = this.currentIndex,
								e = this.data.o[t],
								n = -Number.MAX_VALUE,
								i = Number.MAX_VALUE;
							if ("BOLL" === t || "SAR" === t) {
								r.forEach(e, function (t, e) {
									t = t.data || t, r.forEach(t, function (t) {
										g["default"].isValidNum(t) && (n = Math.max(n, t), i = Math.min(i, t))
									})
								}), n = Math.max(n, this.data.o.maxVal), i = Math.min(i, this.data.o.minVal);
								var a = this.data;
								a = r.extend([], a, this.data.o[t]), e = a
							} else r.forEach(e, function (t, e) {
								r.forEach(t, function (t) {
									g["default"].isValidNum(t) && (n = Math.max(n, t), i = Math.min(i, t))
								})
							});
							var o = void 0,
								s = void 0;
							if ("MACD" == this.currentIndex) {
								var l = Math.max(Math.abs(n), Math.abs(i));
								l = g["default"].isValidNum(l) ? l * ct["default"].MAX_MACD_PERCENTAGE : .1, l = 1e-5 > l ? .1 : l, o = l, s = -l
							} else {
								n = g["default"].isValidNum(n) ? n : 0, i = g["default"].isValidNum(i) ? i : 0;
								var u = n - i;
								u = 1e-5 > u ? .1 : u, o = n + (ct["default"].MAX_MACD_PERCENTAGE - 1) * u, s = i - (ct["default"].MAX_MACD_PERCENTAGE - 1) * u
							}
							var c = this.coord.indexArea,
								h = this.data.length;
							c.reAxis([0, h < this.minX ? this.minX - 1 : h - 1], [s, o]), this.paperEl.$("indexGroupEL").children.forEach(function (t) {
								t.hide()
							}), this.paperEl.$("indexGroupEL").$(t).attr({
								data: e,
								coord: c,
								barWidth: this.barWidth
							}).show();
							var f = this.coord.indexLabel,
								d = 2;
							this.paperEl.$("indexLabelEl").attr({
								data: {
									maxVal: o,
									minVal: s,
									n: 3
								},
								fixed: d,
								coord: f
							})
						}
					}, {
						key: "draw_indexMenu",
						value: function () {
							var t = this.currentIndex;
							this.paperEl.$("indexMenuEl").attr({
								currentIndex: t
							}).show()
						}
					}, {
						key: "draw_title",
						value: function (t) {
							if (this.coord.title) {
								var e = void 0;
								e = t ? this.cal_currentTitle(t) : this.cal_titleData(), this.staticForeEl.$("titleTextEl").attr({
									data: e
								})
							}
						}
					}, {
						key: "draw_ma",
						value: function (t, e) {
							var n = this;
							e = e ? e.map(function (t, e, r) {
								return g["default"].isValidNum(t) && "" !== t ? "：" + g["default"].unit(t, n.data.o.fixed) : ""
							}) : ["", "", ""];
							var r = lt["default"].text;
							this.staticForeEl.$(t).attr({
								data: [
									["MA5" + e[0], r.ma5],
									["MA10" + e[1], r.ma10],
									["MA20" + e[2], r.ma20]
								]
							})
						}
					}, {
						key: "draw_indexSlogan",
						value: function (t) {
							var e = this.cal_indexSlogan(t);
							this.staticForeEl.$("indexSloganEl").attr({
								data: e
							})
						}
					}, {
						key: "draw_currentPanel",
						value: function (t, e) {
							var n = this.coord;
							if (n.klinePanel) {
								var r = this.chartCfg.panel.volume_text,
									i = this.cal_currentPanelData(t, r);
								this.dynamicForeEl.$("panelEl").attr({
									data: i.data,
									time: i.panelTime,
									x: e
								})
							}
						}
					}, {
						key: "cal_titleData",
						value: function () {
							var t = this.data,
								e = t.length,
								n = 0 === this.startIndex ? t.o.open : t.o.closingPrice[this.startIndex - 1],
								r = t[e - 1][0].substr(4),
								i = t[e - 1][2],
								a = 100 * (i / n - 1);
							isFinite(a) || (a = 0);
							a = a >= 0 ? "+" + a.toFixed(2) : a.toFixed(2);
							var o = h["default"].HZLD(a),
								s = r.slice(0, 2) + "/" + r.slice(2, 4);
							s += this.type.match(/m5|m15|m30|m60/) ? " " + r.slice(4, 6) + ":" + r.slice(6, 8) : "";
							var l = this.cfg.isIndex ? "" : {
								"": "不复权",
								qfq: "前复权",
								hfq: "后复权"
							} [this.cfg.fqType] + " ";
							return {
								time: s,
								data: [
									[l + "涨跌幅", a + "%", o]
								]
							}
						}
					}, {
						key: "cal_currentTitle",
						value: function (t) {
							var e = s(t, 6),
								n = e[0],
								r = e[1],
								i = e[2],
								a = e[3],
								o = e[4],
								l = (e[5], t.close || i);
							n = n.substr(4);
							var u = h["default"].HZLD(r - l),
								c = h["default"].HZLD(a - l),
								f = h["default"].HZLD(o - l),
								g = h["default"].HZLD(i - l),
								d = this.data.o.fixed,
								p = n.slice(0, 2) + "/" + n.slice(2, 4);
							return p += this.type.match(/m5|m15|m30|m60/) ? " " + n.slice(4, 6) + ":" + n.slice(6, 8) : "", {
								time: p,
								data: [
									["开", r.toFixed(d), u],
									["高", a.toFixed(d), c],
									["低", o.toFixed(d), f],
									["收", i.toFixed(d), g]
								]
							}
						}
					}, {
						key: "cal_currentPanelData",
						value: function (t, e) {
							var n = s(t, 6),
								stock = window.stock,
								isKcb = stock.slice(2,5),
								r = n[0],
								i = n[1],
								a = n[2],
								o = n[3],
								l = n[4],
								u = isKcb === '688'?n[5]/100:n[5],
								c = t.close || window['prec'],
								f = r;

							var d = ["日", "一", "二", "三", "四", "五", "六"],
							    format = f.slice(0, 4) + '-' + f.slice(4, 6) + '-' + f.slice(6, 8),
								p = "周" + d[new Date(format).getDay()],
								A = format + " " + p;
							this.type.match(/m5|m15|m30|m60/) && (A += " " + r.slice(8, 10) + ":" + r.slice(10, 12))
							var C = h["default"].HZLD(i - c),
								v = h["default"].HZLD(o - c),
								I = h["default"].HZLD(l - c),
								m = h["default"].HZLD(a - c),
								y = lt["default"].panel.text,
								b = this.data.o.fixed,
								zdfVal = 100 * (a / c - 1),
								_ = [
									["开盘", i.toFixed(b), C, t.nearest == i],
									["最高", o.toFixed(b), v, t.nearest == o],
									["最低", l.toFixed(b), I, t.nearest == l],
									["收盘", a.toFixed(b), m, t.nearest == a],
									["涨跌幅", (isFinite(zdfVal) ? zdfVal : 0).toFixed(2) + "%", m],
									["涨跌额", (a - c).toFixed(b), m]
								];
							if (e) {
								var isHSAdapter = window.StockDataUtils.isHSAdapter(stock);
								var x = "hk" === this.cfg.market && this.cfg.isIndex ? "成交额" :isHSAdapter? "成交量竞" : "成交量";
								_.push([x, g["default"].unit(u, 2), y])
							}
							return {
								panelTime: A,
								data: _
							}
						}
					}, {
						key: "cal_indexSlogan",
						value: function (t) {
							var e = this.currentIndex,
								n = this.data.o[e],
								r = lt["default"].index,
								i = [],
								a = 2;
							if (void 0 == t) i = At[e];
							else
								for (var o in n) {
									var s = n[o].data || n[o];
									s = s[t], s = g["default"].isValidNum(s) ? "：" + g["default"].unit(s, a) : "";
									var l = [o, s];
									i.push(l)
								}
							return i = i.map(function (t, e) {
								return [t[0] + (t[1] || ""), r[t[0]]]
							})
						}
					}, {
						key: "cal_barWidth",
						value: function () {
							var t = this.coord.klineGrid,
								e = this.data.length,
								n = this.maxCandleWidth,
								r = e < this.minX ? .618 * t.w / this.minX : .618 * t.w / e;
							if (1 >= r) r = 1;
							else if (r > n) r = n;
							else {
								r = Math.floor(r) % 2 ? Math.floor(r) : Math.ceil(r);
								var i = (t.w - e * r) / (e - 1);
								1 > i && 1 != r && (r = 1)
							}
							this.barWidth = r
						}
					}, {
						key: "_onMouseWheel",
						value: function () {
							function t(t) {
								t = t || window.event;
								var e = t.clientX - a.getBoundingClientRect().left,
									n = t.clientY - a.getBoundingClientRect().top;
								e < i.l || e > i.r || n < i.t || n > i.b ? (window.onwheel = null, window.onmousewheel = document.onmousewheel = null) : (t.preventDefault && t.preventDefault(), t.returnValue = !1)
							}

							function e(e) {
								var s = (document.documentElement.scrollTop, e.wheelDelta || -e.detail),
									l = e.clientX - a.getBoundingClientRect().left,
									u = e.clientY - a.getBoundingClientRect().top;
								if (!(l < i.l || l > i.r || u < i.t || u > i.b)) {
									r.cfg.boss || (o && clearTimeout(o), o = setTimeout(function () {
										var t = ct["default"].BOSS_CLICK;
										gt.click(t, "wheel"), o = null
									}, 200)), e.detail ? window.addEventListener("DOMMouseScroll", t, !1) : (window.onwheel = t, window.onmousewheel = document.onmousewheel = t);
									var c = (r.trendData, r.dragIndStart),
										h = r.dragIndEnd;
									if (void 0 !== c && void 0 !== h) {
										var f = r.dataTopic.match(/day/) && !r._replaceData ? 4 : 20;
										s > 0 ? r.channel.publish(n.outer.id + ".drag." + r.type, {
											x1: c - f > 0 ? c - f : 0,
											x2: h + 1
										}) : h - c > 2 * f && r.channel.publish(n.outer.id + ".drag." + r.type, {
											x1: c + f,
											x2: h + 1
										})
									}
								}
							}
							var n = this.cfg,
								r = (this.symbol, this),
								i = r.coord.klineArea,
								a = n.canvas.node;
							a.addEventListener ? (a.addEventListener("mousewheel", e, !1), a.addEventListener("DOMMouseScroll", e, !1)) : a.attachEvent("onmousewheel", e);
							var o = void 0;
							this.MouseWheelHandler = e, this.preventDefault = t
						}
					}, {
						key: "_unMouseWheel",
						value: function () {
							var t = this.cfg,
								e = this.MouseWheelHandler,
								n = this.preventDefault;
							t.canvas.node.addEventListener ? (t.canvas.node.removeEventListener("mousewheel", e, !1), t.canvas.node.removeEventListener("DOMMouseScroll", e, !1), window.removeEventListener("DOMMouseScroll", n, !1)) : t.canvas.node.detachEvent("onmousewheel", e), this.MouseWheelHandler = null, this.preventDefault = null
						}
					}]), e
				}(ft["default"]);
			e["default"] = Ct, t.exports = e["default"]
		}).call(e, n(6))
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(31),
			a = r(i),
			o = n(30),
			s = (r(o), n(14)),
			l = r(s),
			u = n(12),
			c = r(u),
			h = n(57),
			f = h.Shape.custom({
				_afterInit: function () {
					var t = this;
					this.undrag(), this.drag(function (t) {}, function (t, e) {}, function (e, n) {
						t._handleClick(t.type)
					}).mousemove(function (e) {
						t.cancleBubble = !0, t.type = e.hitArea.type, t.canvas.node.style.cursor = "pointer"
					}).mouseout(function () {
						t.canvas.node.style.cursor = "default"
					})
				},
				_compileAttrs: function () {
					var t = this._attrs;
					this._attrsCompiled;
					this.Coord = this.coord(), this.topic = t.topic, this.currentIndex = t.currentIndex, this.outerId = t.outerId, this.channel = t.symbol ? c["default"].channel(t.symbol) : null
				},
				_handleClick: function (t) {
					this.channel.publish(this.outerId + ".index." + this.topic, t)
				},
				_hitArea: function () {
					var t = [],
						e = this._attrs,
						n = e.data || [],
						r = this.coord(),
						i = r.h,
						a = r.t,
						o = r.l,
						s = (r.t, r.w / 8);
					this.ctx;
					return n.forEach(function (e, n) {
						var r = o + s * n + 5,
							l = s - 5;
						t.push({
							polygon: !0,
							type: e,
							vertex: [
								[r, a],
								[r + l, a],
								[r + l, a + i],
								[r, a + i]
							]
						})
					}), t
				},
				_draw: function (t) {
					var e = this;
					this.ctx = t;
					var n = this._attrs,
						r = n.data || [],
						i = this.coord(),
						o = i.l,
						s = i.t,
						u = i.h,
						c = i.w,
						f = i.w / 8,
						g = h.util.shift;
					t.textAlign = "left", t.textBaseline = "top", t.fillStyle = a["default"].index_menu.background, t.fillRect(o, s, c, u), t.textAlign = "center", r.forEach(function (n, r) {
						var i = o + f * r + 5,
							c = f - 5;
						n == e.currentIndex ? (t.fillStyle = a["default"].index_menu.selected_background, t.fillRect(i, s, c, u), t.beginPath(), t.strokeStyle = "#b3bac0", t.moveTo(g(i), g(s + u - 1)), t.lineTo(g(i + c), g(s + u - 1)), t.stroke(), t.strokeStyle = "#b6d3f2", t.beginPath(), t.moveTo(g(i), g(s)), t.lineTo(g(i), g(s + u - 1)), t.moveTo(g(i + c), g(s)), t.lineTo(g(i + c), g(s + u - 1)), t.stroke(), t.closePath(), t.fillStyle = a["default"].index_menu.selected_text, t.font = l["default"].BORD_FONT) : (t.fillStyle = a["default"].index_menu.text, t.font = l["default"].LIGHT_FONT), t.fillText(n, i + c / 2, s)
					})
				}
			}, {
				coord: null,
				data: [],
				topic: "",
				symbol: "",
				currentIndex: "",
				outerId: ""
			});
		e["default"] = f, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(31),
			a = (r(i), n(57)),
			o = a.Shape.custom({
				_compileAttrs: function () {
					var t = this._attrs,
						e = this._attrsCompiled,
						n = t.data || [],
						r = this.coord(),
						i = t.isLine,
						a = [],
						o = n.length,
						s = void 0,
						l = void 0;
					r && (l = r.width, s = Math.ceil(o / l));
					for (var u = 0; o > u; u += s) a.push(r.d2y(n[u]));
					e.points = a, e.isLine = i
				},
				_draw: function (t) {
					var e = this._attrsCompiled,
						n = e.points,
						r = this.coord();
					if (r) {
						var i = r.width,
							a = n.length,
							o = i / a,
							s = r.baseX + 1;
						e.isLine && (o = i / (a - 1));
						var l = r.b;
						t.beginPath(), t.moveTo(s, l), t.lineTo(s, n[0]);
						for (var u = 0, c = a; c > u; u++) t.lineTo(s + u * o, n[u]);
						e.isLine ? t.lineTo(s + (a - 1) * o, l) : t.lineTo(s + a * o, l), t.lineTo(s, l), t.closePath(), this._useFill(t) && t.fill(), t.beginPath(), t.moveTo(s, n[0]);
						for (var u = 0, c = a; c > u; u++) t.lineTo(s + u * o, n[u]);
						this._useStroke(t) && t.stroke(), t.closePath(), t.beginPath()
					}
				}
			}, {
				data: [],
				coord: null,
				fill: "#c2d4e6",
				stroke: "#e0eefd",
				isLine: !1
			});
		e["default"] = o, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(31),
			a = r(i),
			o = n(30),
			s = r(o),
			l = n(14),
			u = (r(l), n(65)),
			c = r(u),
			h = n(57),
			f = h.Shape.custom({
				_compileAttrs: function () {
					var t = this._attrs,
						e = this._attrsCompiled,
						n = t.data || [],
						r = this.coord(),
						i = t.minX,
						a = t.maxWidth,
						o = t.barWidth,
						l = [],
						u = n.length,
						c = void 0;
					if (r) {
						r && !o && (o = i > u ? .618 * r.w / i : .618 * r.w / u, 1 >= o ? o = 1 : o > a ? o = a : (o = Math.floor(o) % 2 ? Math.floor(o) : Math.ceil(o), c = (r.w - u * o) / (u - 1), 1 > c && 1 != o && (o = 1)));
						for (var h = Math.ceil(n.length / r.w) || 1, f = 0; u > f; f += h) l.push({
							OP: r.d2y(n[f][1]),
							CP: r.d2y(n[f][2]),
							HP: r.d2y(n[f][3]),
							LP: r.d2y(n[f][4]),
							STYLE: n[f][6],
							CL: s["default"].HZLD(n[f][6]),
							MA5: r.d2y(n[f][7]),
							MA10: r.d2y(n[f][8]),
							MA20: r.d2y(n[f][9])
						});
						e.barWidth = o, e.bars = l, e.length = l.length, e.sample = h
					}
				},
				_draw: function (t) {
					var e = this._attrsCompiled,
						n = e.sample,
						r = e.barWidth,
						i = e.length,
						o = e.bars,
						s = this.coord();
					if (s) {
						var l = s.baseX,
							u = s.stepX * n,
							f = h.util.shift,
							g = c["default"].isValidNum,
							d = this.bgColor();
						o.forEach(function (e, i, a) {
							var o = f(s.d2x(i * n) + u / 2);
							t.fillStyle = e.CL, t.strokeStyle = e.CL, t.lineWidth = 1, t.beginPath(), t.moveTo(f(o), e.HP), t.lineTo(f(o), e.LP), t.stroke(), t.beginPath();
							var l = f(e.OP) - f(e.CP) || 1;
							1 !== r && 1 !== l ? (t.strokeRect(f(o) - r / 2 + .5, f(e.CP), r - 1, l), t.fillStyle = e.STYLE >= 0 ? d : t.fillStyle, t.fillRect(f(o) - r / 2 + 1, f(e.CP) + .5, r - 2, l - 1)) : t.fillRect(f(o) - r / 2, f(e.CP) + .5, r, l)
						}), l = s.baseX + u / 2, t.strokeStyle = a["default"].text.ma5, t.beginPath(), g(o[0].MA5) && t.moveTo(l, o[0].MA5);
						for (var p = 1; i > p; p++) l += u, g(o[p].MA5) && (g(o[p - 1].MA5) ? t.lineTo(l, o[p].MA5) : t.moveTo(l, o[p].MA5));
						t.stroke(), t.closePath(), l = s.baseX + u / 2, t.strokeStyle = a["default"].text.ma10, t.beginPath(), g(o[0].MA10) && t.moveTo(l, o[0].MA10);
						for (var p = 1; i > p; p++) l += u, g(o[p].MA10) && (g(o[p - 1].MA10) ? t.lineTo(l, o[p].MA10) : t.moveTo(l, o[p].MA10));
						t.stroke(), t.closePath(), l = s.baseX + u / 2, t.strokeStyle = a["default"].text.ma20, t.beginPath(), g(o[0].MA20) && t.moveTo(l, o[0].MA20);
						for (var p = 1; i > p; p++) l += u, g(o[p].MA20) && (g(o[p - 1].MA20) ? t.lineTo(l, o[p].MA20) : t.moveTo(l, o[p].MA20));
						t.stroke(), t.closePath(), t.beginPath()
					}
				}
			}, {
				data: [],
				minX: 20,
				maxWidth: 11,
				coord: null,
				barWidth: null,
				bgColor: a["default"].background.color
			});
		e["default"] = f, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(31),
			a = r(i),
			o = n(30),
			s = r(o),
			l = n(14),
			u = (r(l), n(65)),
			c = r(u),
			h = n(57),
			f = h.Shape.custom({
				_compileAttrs: function () {
					var t = this._attrs,
						e = t.data || [],
						n = t.minX,
						r = t.maxWidth,
						i = this.coord(),
						a = e.length,
						o = void 0,
						l = void 0;
					if (i) {
						i && !l && (l = n > a ? .618 * i.w / n : .618 * i.w / a, 1 >= l ? l = 1 : l > r ? l = r : (l = Math.floor(l) % 2 ? Math.floor(l) : Math.ceil(l), o = (i.w - a * l) / (a - 1), 1 > o && 1 != l && (l = 1)));
						for (var u = [], c = Math.ceil(e.length / i.w) || 1, h = 0; a > h; h += c) u.push([i.d2y(e[h][5]), i.d2y(e[h][10]), i.d2y(e[h][11]), i.d2y(e[h][12]), s["default"].HZLD(e[h][6], "noGray"), e[h][6]]);
						this.barWidth = l, this.bars = u, this.sample = c
					}
				},
				_draw: function (t) {
					if (this.coord()) {
						var e = this.coord(),
							n = this.bars,
							r = this.barWidth,
							i = this.sample,
							o = n.length,
							s = e.b,
							l = e.baseX,
							u = e.stepX * i,
							f = h.util.shift,
							g = c["default"].isValidNum,
							d = this.bgColor();
						n.forEach(function (n, a) {
							var o = f(e.d2x(a * i) + e.stepX / 2);
							if (r > 1)
								if (t.fillStyle = n[4], t.strokeStyle = n[4], n[5] >= 0) {
									t.fillStyle = d;
									var l = f(n[0]) - f(s);
									t.strokeRect(f(o) - r / 2 + .5, f(s), r - 1, l), t.fillRect(f(o) - r / 2 + 1, f(s) + .5, r - 2, f(n[0]) - f(s))
								} else t.fillRect(f(o) - r / 2, f(s) + .5, r, f(n[0]) - f(s));
							else t.strokeStyle = n[4], t.beginPath(), t.moveTo(f(o), f(s) + .5), t.lineTo(f(o), f(n[0]) + .5), t.closePath(), t.stroke()
						}), l = e.baseX + u / 2, t.strokeStyle = a["default"].text.ma5, t.beginPath(), g(n[0][1]) && t.moveTo(l, n[0][1]);
						for (var p = 1; o > p; p++) l += u, g(n[p][1]) && (g(n[p - 1][1]) ? t.lineTo(l, n[p][1]) : t.moveTo(l, n[p][1]));
						t.stroke(), t.closePath(), l = e.baseX + u / 2, t.strokeStyle = a["default"].text.ma10, t.beginPath(), g(n[0][2]) && t.moveTo(l, n[0][2]);
						for (var p = 1; o > p; p++) l += u, g(n[p][2]) && (g(n[p - 1][2]) ? t.lineTo(l, n[p][2]) : t.moveTo(l, n[p][2]));
						t.stroke(), t.closePath(), l = e.baseX + u / 2, t.strokeStyle = a["default"].text.ma20, t.beginPath(), g(n[0][3]) && t.moveTo(l, n[0][3]);
						for (var p = 1; o > p; p++) l += u, g(n[p][3]) && (g(n[p - 1][3]) ? t.lineTo(l, n[p][3]) : t.moveTo(l, n[p][3]));
						t.stroke(), t.closePath()
					}
				}
			}, {
				coord: null,
				data: [],
				minX: 20,
				maxWidth: 11,
				bgColor: a["default"].background.color
			});
		e["default"] = f, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(58),
			a = (r(i), n(31)),
			o = r(a),
			s = n(30),
			l = r(s),
			u = n(14),
			c = (r(u), n(57)),
			h = c.Shape.custom({
				_compileAttrs: function () {
					var t = this._attrs,
						e = (this._attrsCompiled, t.data || []),
						n = t.minX,
						r = t.maxWidth,
						i = this.coord(),
						a = e.MACD ? e.MACD.length : 0,
						o = void 0,
						s = void 0;
					if (i) {
						i && !s && (s = n > a ? .618 * i.w / n : .618 * i.w / a, 1 >= s ? s = 1 : s > r ? s = r : (s = Math.floor(s) % 2 ? Math.floor(s) : Math.ceil(s), o = (i.w - a * s) / (a - 1), 1 > o && 1 != s && (s = 1)));
						var l = Math.ceil(e.MACD.length / i.w) || 1;
						this.barWidth = s, this.sample = l
					}
				},
				_draw: function (t) {
					var e = this._attrs,
						n = (this._attrsCompiled, e.data || []),
						r = this.coord(),
						i = this.sample,
						a = r.stepX * i,
						s = r.baseX,
						u = (r.b, this.barWidth),
						h = (r.b + r.t) / 2,
						f = c.util.shift,
						g = n.MACD;
					g.forEach(function (e, n) {
						if (!(n % i)) {
							var o = f(r.d2x(n) + a / 2);
							t.fillStyle = l["default"].HZLD(e, "noGray"), t.fillRect(f(o) - u / 2, f(h) + .5, u, f(r.d2y(e)) - f(h) || 1)
						}
					});
					var d = n.DIFF;
					s = r.baseX + a / 2, t.strokeStyle = o["default"].index.DIFF, t.beginPath(), t.moveTo(s, r.d2y(d[0]));
					for (var p = i, A = d.length; A > p; p += i) s += a, t.lineTo(s, r.d2y(d[p]));
					t.stroke();
					var C = n.DEA;
					s = r.baseX + a / 2, t.strokeStyle = o["default"].index.DEA, t.beginPath(), t.moveTo(s, r.d2y(C[0]));
					for (var p = i, A = C.length; A > p; p += i) s += a, t.lineTo(s, r.d2y(C[p]));
					t.stroke()
				}
			}, {
				coord: null,
				data: [],
				minX: 20,
				maxWidth: 11
			});
		e["default"] = h, t.exports = e["default"]
	}, function (t, e, n) {
		(function (r) {
			"use strict";

			function i(t) {
				return t && t.__esModule ? t : {
					"default": t
				}
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var a = n(30),
				o = (i(a), n(31)),
				s = i(o),
				l = n(14),
				u = (i(l), n(65)),
				c = i(u),
				h = n(57),
				f = h.Shape.custom({
					_draw: function (t) {
						var e = this._attrs,
							n = (this._attrsCompiled, e.minX),
							i = e.data || [],
							a = this.coord();
						if (a) {
							var o = c["default"].isValidNum;
							r.each(i, function (e, r) {
								var i = e.length < n ? n : e.length,
									l = a.w / i,
									u = a.l + l / 2,
									c = Math.ceil(i / a.w) || 1;
								t.beginPath(), t.strokeStyle = s["default"].index[r], o(a.d2y(e[0])) && t.moveTo(u, a.d2y(e[0]));
								for (var h = c; i > h; h += c) {
									u += l * c;
									var f = a.d2y(e[h]);
									o(f) && (o(a.d2y(e[h - c])) ? t.lineTo(u, f) : t.moveTo(u, f))
								}
								t.stroke()
							}), t.beginPath()
						}
					}
				}, {
					coord: null,
					data: [],
					minX: 20
				});
			e["default"] = f, t.exports = e["default"]
		}).call(e, n(6))
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(30),
			a = r(i),
			o = n(31),
			s = r(o),
			l = n(14),
			u = (r(l), n(65)),
			c = r(u),
			h = n(57),
			f = h.Shape.custom({
				_compileAttrs: function () {
					var t = this._attrs,
						e = this._attrsCompiled,
						n = t.data || [],
						r = this.coord(),
						i = t.minX,
						o = t.maxWidth,
						s = t.barWidth,
						l = [];
					if (n && r) {
						var u = n.length,
							c = void 0;
						r && !s && (s = i > u ? .618 * r.w / i : .618 * r.w / u, 1 >= s ? s = 1 : s > o ? s = o : (s = Math.floor(s) % 2 ? Math.floor(s) : Math.ceil(s), c = (r.w - u * s) / (u - 1), 1 > c && 1 != s && (s = 1)));
						for (var h = Math.ceil(n.length / r.w) || 1, f = 0; u > f; f += h) l.push({
							OP: r.d2y(n[f][1]),
							CP: r.d2y(n[f][2]),
							HP: r.d2y(n[f][3]),
							LP: r.d2y(n[f][4]),
							CL: a["default"].HZLD(n[f][6], "noGray")
						});
						e.barWidth = s, e.bars = l, e.length = l.length, e.minX = i, e.sample = h
					}
				},
				_draw: function (t) {
					var e = this._attrsCompiled,
						n = e.barWidth,
						r = (e.length, e.sample),
						i = e.minX,
						a = e.bars,
						o = this.coord(),
						l = this.data(),
						u = (o.baseX, o.stepX * r),
						f = h.util.shift,
						g = c["default"].isValidNum;
					a.forEach(function (e, i, a) {
						t.fillStyle = e.CL, t.strokeStyle = e.CL;
						var s = f(o.d2x(i * r) + u / 2);
						n > 1 && (t.moveTo(f(s) - n / 2, f(e.OP) + .5), t.lineTo(f(s), f(e.OP) + .5), t.moveTo(f(s), f(e.CP) + .5), t.lineTo(f(s) + n / 2, f(e.CP) + .5), t.stroke()), t.beginPath(), t.moveTo(f(s), e.HP), t.lineTo(f(s), e.LP), t.stroke(), t.beginPath()
					});
					for (var d in l)
						if ("UPPER" === d || "MID" === d || "LOWER" === d) {
							var p = l[d],
								A = p.length < i ? i : p.length,
								C = o.w / A,
								v = o.l + C / 2;
							t.beginPath(), t.strokeStyle = s["default"].index[d], g(o.d2y(p[0])) && t.moveTo(v, o.d2y(p[0]));
							for (var I = r; A > I; I += r) {
								v += C * r;
								var m = o.d2y(p[I]);
								g(m) && (g(o.d2y(p[I - r])) ? t.lineTo(v, m) : t.moveTo(v, m))
							}
							t.stroke(), t.beginPath()
						} t.beginPath()
				}
			}, {
				coord: null,
				data: [],
				minX: 20
			});
		e["default"] = f, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(30),
			a = r(i),
			o = n(31),
			s = (r(o), n(14)),
			l = (r(s), n(65)),
			u = r(l),
			c = n(57),
			h = c.Shape.custom({
				_compileAttrs: function () {
					var t = this._attrs,
						e = this._attrsCompiled,
						n = t.data || [],
						r = this.coord(),
						i = t.minX,
						o = t.maxWidth,
						s = t.barWidth,
						l = [];
					if (n.length && r) {
						var h = n.length,
							f = void 0;
						r && !s && (s = i > h ? .618 * r.w / i : .618 * r.w / h, 1 >= s ? s = 1 : s > o ? s = o : (s = Math.floor(s) % 2 ? Math.floor(s) : Math.ceil(s), f = (r.w - h * s) / (h - 1), 1 > f && 1 != s && (s = 1)));
						for (var g = Math.ceil(n.length / r.w) || 1, d = 0; h > d; d += g) l.push({
							OP: r.d2y(n[d][1]),
							CP: r.d2y(n[d][2]),
							HP: r.d2y(n[d][3]),
							LP: r.d2y(n[d][4]),
							CL: a["default"].HZLD(n[d][6], "noGray")
						});
						for (var p = [
								[],
								[]
							], A = n.SAR.data, C = n.SAR.direction, v = void 0, I = c.util.shift, m = r.stepX, y = void 0, b = 0, _ = A.length; _ > b; b += g) u["default"].isValidNum(A[b]) && (v = C[b] >= 0 ? 0 : 1, y = I(r.d2x(b) + m / 2), p[v].push([y, r.d2y(A[b])]));
						e.barWidth = s, e.bars = l, e.minX = i, e.circle = p, e.sample = g
					}
				},
				_draw: function (t) {
					var e = this._attrsCompiled,
						n = e.barWidth,
						r = (e.minX, e.bars),
						i = e.circle,
						o = this.coord(),
						s = e.sample,
						l = o.stepX * s,
						h = c.util.shift;
					u["default"].isValidNum;
					r.forEach(function (e, r, i) {
						t.fillStyle = e.CL, t.strokeStyle = e.CL;
						var a = h(o.d2x(r * s) + l / 2);
						n > 1 && (t.moveTo(h(a) - n / 2, h(e.OP) + .5), t.lineTo(h(a), h(e.OP) + .5), t.moveTo(h(a), h(e.CP) + .5), t.lineTo(h(a) + n / 2, h(e.CP) + .5), t.stroke()), t.beginPath(), t.moveTo(h(a), e.HP), t.lineTo(h(a), e.LP), t.stroke(), t.beginPath()
					});
					for (var f = Math.min(2, e.barWidth), g = [a["default"].HZLD(1), a["default"].HZLD(-1)], d = 0; 2 > d; d++) {
						var p = i[d];
						t.strokeStyle = g[d];
						for (var A = 0, C = p.length; C > A; A++) t.beginPath(), t.arc(c.util.shift(p[A][0]), c.util.shift(p[A][1]), f, 0, 2 * Math.PI), t.stroke()
					}
					t.beginPath()
				}
			}, {
				coord: null,
				data: [],
				minX: 20
			});
		e["default"] = h, t.exports = e["default"]
	}, function (t, e, n) {
		"use strict";

		function r(t) {
			return t && t.__esModule ? t : {
				"default": t
			}
		}
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var i = n(12),
			a = r(i),
			o = n(31),
			s = r(o),
			l = n(14),
			u = r(l),
			c = n(9),
			h = (r(c), n(57)),
			f = n(18),
			g = h.Shape.custom({
				_afterInit: function () {
					var t = null;
					this.undrag(), this.drag(function (t) {
						this.drag = !0, this._dragOpt = {
							type: t.hitArea.type,
							beg: this.attr("beg"),
							end: this.attr("end")
						}
					}, function (e, n) {
						var r = this;
						if (this.changePos(e, n), "klineCoord" !== this._dragOpt.type) ! function () {
							clearTimeout(t);
							var e = r;
							t = setTimeout(function () {
								var t = e.Coord,
									n = t.x2dLine(e.attr("beg")),
									r = t.x2dLine(e.attr("end"));
								n === t.maxX && n--, r === t.minX && r++, e.channel.publish(e.outerId + ".drag." + e.attr("topic"), {
									x1: n,
									x2: r,
									type: e._dragOpt.type
								})
							}, 10)
						}();
						else {
							var i = this.Coord;
							this.channel.publish(this.outerId + ".drag." + this.attr("topic"), {
								x1: i.x2dLine(this.attr("beg")),
								x2: i.x2dLine(this.attr("end")),
								type: this._dragOpt.type
							})
						}
					}, function (t, e) {
						this.changePos(t, e);
						var n = this.Coord,
							r = n.x2dLine(this.attr("beg")),
							i = n.x2dLine(this.attr("end"));
						r === n.maxX && r--, i === n.minX && i++, this.channel.publish(this.outerId + ".drag." + this.attr("topic"), {
							x1: r,
							x2: i,
							type: this._dragOpt.type
						});
						var a = u["default"].BOSS_CLICK;
						f.click(a, "drag")
					}).mousemove(function (t) {
						"beg" === t.hitArea.type ? this.canvas.node.style.cursor = "w-resize" : "end" === t.hitArea.type ? this.canvas.node.style.cursor = "e-resize" : this.canvas.node.style.cursor = "pointer"
					}).mouseout(function () {
						this.canvas.node.style.cursor = "default"
					})
				},
				_hitArea: function () {
					var t = this._attrsCompiled,
						e = this.coord(),
						n = e.t,
						r = e.b,
						i = this.klineCoord(),
						a = [{
							polygon: !0,
							type: "beg",
							vertex: [
								[t.x1 - 5, n - 5],
								[t.x1 + 5, n - 5],
								[t.x1 + 5, r],
								[t.x1 - 5, r]
							]
						}, {
							polygon: !0,
							type: "end",
							vertex: [
								[t.x2 - 5, n - 5],
								[t.x2 + 5, n - 5],
								[t.x2 + 5, r],
								[t.x2 - 5, r]
							]
						}, {
							polygon: !0,
							vertex: [
								[t.x1, n],
								[t.x2, n],
								[t.x2, r],
								[t.x1, r]
							]
						}];
					return i && a.push({
						polygon: !0,
						type: "klineCoord",
						vertex: [
							[i.l, i.t],
							[i.r, i.t],
							[i.r, i.b],
							[i.l, i.b]
						]
					}), a
				},
				_compileAttrs: function () {
					var t = this._attrsCompiled;
					this.Coord = this.coord(), t.x1 = this.attr("beg"), t.x2 = this.attr("end"), this.outerId = this.attr("outerId"), this.channel = this._attrs.symbol ? a["default"].channel(this._attrs.symbol) : null
				},
				_draw: function (t) {
					var e = this._attrs,
						n = this._attrsCompiled,
						r = (e.data || [], this.coord(), n.x1),
						i = n.x2;
					this._drawBackground(r, i, t), this._drawBar(r, t), this._drawBar(i, t)
				},
				_drawBar: function (t, e) {
					var n = this.coord(),
						r = n.t,
						i = n.b,
						a = (r + i) / 2,
						o = 8,
						s = o / 2,
						l = 2,
						u = Math.PI,
						c = r + s,
						f = i - s,
						g = t - s,
						d = t - s / 2,
						p = t + s / 2,
						A = t + s,
						C = h.util.shift;
					this._useStroke(e), e.fillStyle = this._attrs.barColor, e.beginPath(), e.moveTo(C(g), C(c)), e.arc(C(t), C(c), C(s) - .5, u, 2 * u), e.lineTo(C(A), C(f)), e.arc(C(t), C(f), C(s) - .5, 0, u), e.lineTo(C(g), C(c)), e.closePath(), e.fill(), e.stroke(), e.beginPath(), e.moveTo(C(d), C(a + l)), e.lineTo(C(p), C(a + l)), e.moveTo(C(d), C(a)), e.lineTo(C(p), C(a)), e.moveTo(C(d), C(a - l)), e.lineTo(C(p), C(a - l)), e.closePath(), e.stroke(), e.beginPath()
				},
				_drawBackground: function (t, e, n) {
					var r = this.coord(),
						i = r.t,
						a = r.b,
						o = h.util.shift;
					n.fillStyle = this._attrs.background, n.rect(t, i, e - t, a - i), n.fill(), this._useStroke(n), n.strokeRect(t, o(i - 1), e - t, a - i + 2)
				},
				changePos: function (t, e) {
					var n, r, i = this.attr("x"),
						a = i + this.attr("w");
					if ("beg" === this._dragOpt.type) n = t.clientX - this.canvas.node.getBoundingClientRect().left, i > n && (n = i), this.attr("end") > n ? this.attr("beg", n) : (this._dragOpt.beg = this.attr("end"), this._dragOpt.end = n, this._dragOpt.type = "end", this.attr("end", n));
					else if ("end" === this._dragOpt.type) n = t.clientX - this.canvas.node.getBoundingClientRect().left, n > a && (n = a), n > this.attr("beg") ? this.attr("end", n) : (this._dragOpt.end = this.attr("beg"), this._dragOpt.beg = n, this._dragOpt.type = "beg", this.attr("beg", n));
					else if ("klineCoord" === this._dragOpt.type) {
						var o = this.klineCoord(),
							s = this.coord(),
							l = o.stepX,
							u = s.stepX;
						e = e / l * u, this.topic().match(/day|year/) && !this.dataReplaced() && (e /= 5), n = this._dragOpt.beg - e, r = this._dragOpt.end - e, i > n && (r += i - n, n = i), r > a && (n -= r - a, r = a), n >= i && a >= r && this.attr({
							beg: n,
							end: r
						})
					} else n = this._dragOpt.beg + e, r = this._dragOpt.end + e, i > n && (r += i - n, n = i), r > a && (n -= r - a, r = a), n >= i && a >= r && this.attr({
						beg: n,
						end: r
					})
				}
			}, {
				stroke: s["default"].dragbar.border,
				background: s["default"].dragbar.background,
				barColor: s["default"].dragbar.barColor,
				coord: null,
				x: 0,
				w: 0,
				beg: 0,
				end: 0,
				topic: "",
				symbol: "",
				outerId: "",
				klineCoord: null,
				dataReplaced: !1,
				klineDrag: !1
			});
		e["default"] = g, t.exports = e["default"]
	}, function (t, e) {
		"use strict";
		Object.defineProperty(e, "__esModule", {
			value: !0
		});
		var n = {
			params: function (t) {
				var e = {};
				return t.forEach(function (t) {
					var n = typeof t;
					switch (n) {
						case "object":
							Array.isArray(t) ? n = "array" : t instanceof Date && (n = "date");
							break;
						case "string":
							/http:\/\//.test(t) && (n = "url")
					}
					n && e[n] ? e[n].push(t) : e[n] = [t]
				}), e
			},
			rmTag: function (t) {
				return t.replace(/\w+_/, "")
			},
			binarySearch: function (t, e, n) {
				var r = t.length,
					i = Math.floor(r / 2),
					a = 0;
				if (0 == r) return n ? -1 : !1;
				if (1 * t[i][0] == e) return i;
				if (1 * t[i][0] < e) {
					var o = this.binarySearch(t.slice(i + 1, r), e, n);
					if (o === !1) return o;
					a = i + 1 + o
				} else 1 * t[i][0] > e && (a = this.binarySearch(t.slice(0, i), e, n));
				return a
			}
		};
		e["default"] = n, t.exports = e["default"]
	}, , , , , , , , , , , , , , , , , , function (t, e, n) {
		(function (r) {
			"use strict";

			function i(t) {
				return t && t.__esModule ? t : {
					"default": t
				}
			}

			function a(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function o(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var s = function () {
					function t(t, e) {
						var n = [],
							r = !0,
							i = !1,
							a = void 0;
						try {
							for (var o, s = t[Symbol.iterator](); !(r = (o = s.next()).done) && (n.push(o.value), !e || n.length !== e); r = !0);
						} catch (l) {
							i = !0, a = l
						} finally {
							try {
								!r && s["return"] && s["return"]()
							} finally {
								if (i) throw a
							}
						}
						return n
					}
					return function (e, n) {
						if (Array.isArray(e)) return e;
						if (Symbol.iterator in Object(e)) return t(e, n);
						throw new TypeError("Invalid attempt to destructure non-iterable instance")
					}
				}(),
				l = function () {
					function t(t, e) {
						for (var n = 0; n < e.length; n++) {
							var r = e[n];
							r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r)
						}
					}
					return function (e, n, r) {
						return n && t(e.prototype, n), r && t(e, r), e
					}
				}(),
				u = function (t, e, n) {
					for (var r = !0; r;) {
						var i = t,
							a = e,
							o = n;
						s = u = l = void 0, r = !1, null === i && (i = Function.prototype);
						var s = Object.getOwnPropertyDescriptor(i, a);
						if (void 0 !== s) {
							if ("value" in s) return s.value;
							var l = s.get;
							if (void 0 === l) return;
							return l.call(o)
						}
						var u = Object.getPrototypeOf(i);
						if (null === u) return;
						t = u, e = a, n = o, r = !0
					}
				},
				c = n(30),
				h = i(c),
				f = n(65),
				g = i(f),
				d = n(54),
				p = (i(d), n(9)),
				A = (i(p), n(91)),
				C = i(A),
				v = n(58),
				I = (i(v), n(60)),
				m = (i(I), n(83)),
				y = (i(m), n(84)),
				b = (i(y), n(85)),
				_ = (i(b), n(86)),
				x = (i(_), n(87)),
				w = (i(x), n(88)),
				k = (i(w), n(89)),
				T = (i(k), n(64)),
				E = i(T),
				S = n(63),
				D = i(S),
				P = n(71),
				O = (i(P), n(90)),
				M = (i(O), n(74)),
				L = (i(M), n(72)),
				j = (i(L), n(75)),
				F = (i(j), n(77)),
				N = (i(F), n(78)),
				q = (i(N), n(56)),
				R = (i(q), n(62)),
				B = i(R),
				V = n(31),
				X = i(V),
				U = n(14),
				z = (i(U), n(81)),
				W = i(z),
				H = (n(57), function (t) {
					function e(t, n) {
						a(this, e), u(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t, n), this.chartCfg = n
					}
					return o(e, t), l(e, [{
						key: "init",
						value: function (t) {
							this.chartCfg = t || this.chartCfg;
							var e = this.cfg;
							e.coord;
							(this._isCoordChange() || t) && this.getCoord();
							var n = this.fqType = e.fqType;
							return this.topic !== this.type + n && (this.data = null, this.topic = this.type + n, this.setPeriod(0, 0), this.trendData = null, this.startDate = null, this.endDate = null), this.dataTopic = "day" + n, this.trendTopic = this.market.match(/if|wh/) ? this.type : "trend" + this.fqType, this.trendData = this.getTrendData(), this.data = this.updateData(), this.backEl = this.back.group(), this.paperEl = this.paper.group(), this.dragEl = this.drag.group(), this.staticForeEl = this.fore.group(), this.dynamicForeEl = this.fore.group(), this.loadingEl = this.back.group(), this.setElement(), this._onMouse(), this._onMouseWheel(), this.listenToData(), this.listenToDrag(), this.listenToIndex(), this
						}
					}, {
						key: "updateData",
						value: function () {
							var t = this._getData();
							if (!t || !t.length) return t;
							if (null == this.startDate) {
								var e = t.o.len;
								this.minLength = e >= this.minX ? this.minX : e;
								var n = this.trendData,
									r = this.type.slice(4, 5),
									i = this.trendData.o.trendYearList;
								if (i) {
									i = i.day;
									var a = i[i.length - 1 - r] ? i[i.length - 1 - r][0] : i[0][0],
										o = t[t.o.len - 1][0],
										s = "" + a + o.substr(4),
										l = this.getFetchYear(a, n[n.length - 1][0]);
									if (l.length) return void this.channel.publish(this.cfg.outer.id + ".fetch." + this.cfg.current, l);
									this.startDate = this.startDate || s, this.endDate = this.endDate || o
								}
								var u = this.startDate ? C["default"].binarySearch(t, this.startDate, !0) : 0,
									c = this._getData().o.len - 1;
								0 > u && u++, this.setPeriod(u, c + 1)
							}
							var h = this.startDate,
								f = this.endDate;
							if (h && f) {
								var u = C["default"].binarySearch(this._getData(), h, !0),
									c = C["default"].binarySearch(this._getData(), f, !0);
								u = -1 === u ? 0 : u, this.setPeriod(u, c + 1)
							}
							return this.startDate = null, this.endDate = null, this.updateViewData()
						}
					}, {
						key: "updateViewData",
						value: function () {
							var t = this._getData(),
								e = t.slice(this.startIndex, this.endIndex),
								n = -Number.MAX_VALUE,
								i = Number.MAX_VALUE,
								a = 0;
							e.forEach(function (t) {
								n = Math.max(n, t[2]) || n, i = Math.min(i, t[2]) || i, a = Math.max(a, t[5]) || a, a = Math.max(a, t[10]) || a, a = Math.max(a, t[11]) || a, a = Math.max(a, t[12]) || a
							});
							var o = 0 == this.startIndex ? t.o.open : t.o.closingPrice[this.startIndex - 1];
							return e.o = r.extend({}, t.o, {
								maxVal: n,
								minVal: i,
								maxVol: a,
								open: o
							}), e.o = r.extend({}, e.o, this._updateIndexData()), e
						}
					}, {
						key: "setKline",
						value: function () {
							var t = this.coord,
								e = this.paperEl,
								n = X["default"].text.label,
								r = X["default"].minute.strokeColor,
								i = [X["default"].minute.gradientColorTop, X["default"].minute.gradientColorBottom];
							e.custom(B["default"]).id("klineEl").attr({
								stroke: r,
								gradient: i,
								coord: t.klineArea
							});
							var a = t.klineLabel;
							e.custom(E["default"]).id("klineLabelEl").attr({
								align: "right",
								coord: a,
								color: !1,
								fill: n,
								mathType: this.cfg.mathType
							});
							var o = t.klineLabelBottom;
							e.custom(D["default"]).id("klineLabelBottomEl").attr({
								coord: o
							})
						}
					}, {
						key: "draw_kline",
						value: function () {
							var t = this.data,
								e = t.o.closingPrice.slice(this.startIndex, this.endIndex),
								n = e.length,
								r = this.coord.klineArea,
								i = t.o.maxVal - t.o.minVal,
								a = t.o.maxVal;
							a = 1e-5 > i ? 1.01 * t.o.open || .01 : a, r.reAxis([0, n < this.minX ? this.minX - 1 : n - 1], [t.o.minVal, a], "log" === this.cfg.mathType), this.paperEl.$("klineEl").attr({
								data: e,
								coord: r,
								maxX: n < this.minX ? this.minX : n
							})
						}
					}, {
						key: "cal_currentTitle",
						value: function (t) {
							var e = s(t, 6),
								stock = window.stock,
								isKcb = stock.slice(2,5),
								n = e[0],
								r = e[1],
								i = e[2],
								a =isKcb === '688'? e[5]/100:e[5],
								o = t.close || r,
								l = i;
							n = n.substr(4);
							var u = 100 * (l / o - 1);
							isFinite(u) || (u = 0);
							u = u >= 0 ? "+" + u.toFixed(2) : u.toFixed(2);
							var isHSAdapter = window.StockDataUtils.isHSAdapter(stock);
							var c = h["default"].HZLD(u),
								f = X["default"].text.title,
								d = this.data.o.fixed,
								p = [
									["价 格", l.toFixed(d), c],
									["涨跌幅", u + "%", c],
									[isHSAdapter? "成交量竞":"成交量", g["default"].unit(a, 2), f]
								];
							return {
								time: n.slice(0, 2) + "/" + n.slice(2, 4),
								data: p
							}
						}
					}]), e
				}(W["default"]));
			e["default"] = H, t.exports = e["default"]
		}).call(e, n(6))
	}, function (t, e, n) {
		(function (n) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function i(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var a = function (t, e, n) {
					for (var r = !0; r;) {
						var i = t,
							a = e,
							o = n;
						s = u = l = void 0, r = !1, null === i && (i = Function.prototype);
						var s = Object.getOwnPropertyDescriptor(i, a);
						if (void 0 !== s) {
							if ("value" in s) return s.value;
							var l = s.get;
							if (void 0 === l) return;
							return l.call(o)
						}
						var u = Object.getPrototypeOf(i);
						if (null === u) return;
						t = u, e = a, n = o, r = !0
					}
				},
				o = function (t) {
					function e(t, n) {
						r(this, e), a(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t, n)
					}
					return i(e, t), e
				}(n);
			e["default"] = o, t.exports = e["default"]
		}).call(e, n(21))
	}, function (t, e, n) {
		(function (n) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function i(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var a = function (t, e, n) {
					for (var r = !0; r;) {
						var i = t,
							a = e,
							o = n;
						s = u = l = void 0, r = !1, null === i && (i = Function.prototype);
						var s = Object.getOwnPropertyDescriptor(i, a);
						if (void 0 !== s) {
							if ("value" in s) return s.value;
							var l = s.get;
							if (void 0 === l) return;
							return l.call(o)
						}
						var u = Object.getPrototypeOf(i);
						if (null === u) return;
						t = u, e = a, n = o, r = !0
					}
				},
				o = function (t) {
					function e(t, n) {
						r(this, e), a(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t, n)
					}
					return i(e, t), e
				}(n);
			e["default"] = o, t.exports = e["default"]
		}).call(e, n(21))
	}, function (t, e, n) {
		(function (n) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function i(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var a = function (t, e, n) {
					for (var r = !0; r;) {
						var i = t,
							a = e,
							o = n;
						s = u = l = void 0, r = !1, null === i && (i = Function.prototype);
						var s = Object.getOwnPropertyDescriptor(i, a);
						if (void 0 !== s) {
							if ("value" in s) return s.value;
							var l = s.get;
							if (void 0 === l) return;
							return l.call(o)
						}
						var u = Object.getPrototypeOf(i);
						if (null === u) return;
						t = u, e = a, n = o, r = !0
					}
				},
				o = function (t) {
					function e(t, n) {
						r(this, e), a(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t, n)
					}
					return i(e, t), e
				}(n);
			e["default"] = o, t.exports = e["default"]
		}).call(e, n(21))
	}, function (t, e, n) {
		(function (n) {
			"use strict";

			function r(t, e) {
				if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
			}

			function i(t, e) {
				if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function, not " + typeof e);
				t.prototype = Object.create(e && e.prototype, {
					constructor: {
						value: t,
						enumerable: !1,
						writable: !0,
						configurable: !0
					}
				}), e && (Object.setPrototypeOf ? Object.setPrototypeOf(t, e) : t.__proto__ = e)
			}
			Object.defineProperty(e, "__esModule", {
				value: !0
			});
			var a = function (t, e, n) {
					for (var r = !0; r;) {
						var i = t,
							a = e,
							o = n;
						s = u = l = void 0, r = !1, null === i && (i = Function.prototype);
						var s = Object.getOwnPropertyDescriptor(i, a);
						if (void 0 !== s) {
							if ("value" in s) return s.value;
							var l = s.get;
							if (void 0 === l) return;
							return l.call(o)
						}
						var u = Object.getPrototypeOf(i);
						if (null === u) return;
						t = u, e = a, n = o, r = !0
					}
				},
				o = function (t) {
					function e(t, n) {
						r(this, e), a(Object.getPrototypeOf(e.prototype), "constructor", this).call(this, t, n)
					}
					return i(e, t), e
				}(n);
			e["default"] = o, t.exports = e["default"]
		}).call(e, n(21))
	}, function (t, e, n) {
		"use strict";
		var r = n(115);
		"string" == typeof r && (r = [
			[t.id, r, ""]
		]);
		n(117)(r, {})
	}, function (t, e, n) {
		e = t.exports = n(116)(), e.push([t.id, "ul,li,input{padding:0;margin:0}li{list-style:none}.portfolio-ad{position:absolute;right:10px;height:31px;overflow-y:hidden}.portfolio-ad .ad-app{width:128px;height:21px;display:block;background:url(//mat1.gtimg.com/finance/images/stock/p/quotpage/flash_ad_app.png) no-repeat}.usVolume{position:absolute;right:65px;bottom:45px;color:#888;font-size:12px}.graphic-menu-active{background:#fff;color:#333!important}.graphic-menu-inactive{background:0 0;color:#1b6393}.graphic-nav-ul{font-size:0;border:1px solid #d9e6ef;height:30px;width:523px;text-align:left;background:#e8f5ff;background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJod…EiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);background:-moz-linear-gradient(top,#e8f5ff 0,#d7ecfc 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#e8f5ff),color-stop(100%,#d7ecfc));background:-webkit-linear-gradient(top,#e8f5ff 0,#d7ecfc 100%);background:-o-linear-gradient(top,#e8f5ff 0,#d7ecfc 100%);background:-ms-linear-gradient(top,#e8f5ff 0,#d7ecfc 100%);background:linear-gradient(to bottom,#e8f5ff 0,#d7ecfc 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#e8f5ff', endColorstr='#d7ecfc', GradientType=0)}.graphic-nav-ul .fqList{z-index:50;position:relative;width:60px;background:#fff;display:none}.graphic-nav-ul .fqList li{width:60px;display:block;border:1px solid #d9e6ef;border-top:none}.graphic-nav-ul li{display:inline-block;*display:inline;*zoom:1;width:40px;height:22px;text-align:center;font-size:12px;color:#1b6393;padding-top:9px;border-right:1px solid #d9e6ef;cursor:pointer}.graphic-nav-ul .popup-close{width:28px;height:25px;float:right;background-position:0 -89px;position:absolute;top:-32px;right:10px;border:none}.graphic-nav-ul .zoom{float:right;background:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAAQCAMAAADH72RtAAAAyVBMVEUBS3w4Xnz///8BS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3wBS3w4Xnz33rjiAAAAQnRSTlMAAAABAgMEBgcJCg4SFRggIiYsLjY8PUhJTE5RVlxeYGNucHFzdXd4fYCCjY6PkJGSk5SVlpeanKipvs/V2d/k7vbcRIt1AAAAmElEQVQY01XORxKCUBRE0fufqCDmhDlnVMw5sv9FOfiIZQ9PV3U1gLNbeq5bBgCB+LoTA4zWNBrIpqBLchMtlSYi4isR6kVAOERCYQwIW37SBYQd+DrQ/4pSyldKwQgQ3GQo9gAQsotwZ5bSf5rD4E/vFgi1c9XCco7txz2jhUTD28/rJunrM68ljH15lf4F8/Su/QvGyvsA1ZINvx4Uh/YAAAAASUVORK5CYII=) center center no-repeat}.fqType .currentFq{color:#ddd}.popup{background:url(//mat1.gtimg.com/finance/images/stock/p/quotpage/bg20130321.png) no-repeat}.compare{width:100%;position:absolute;bottom:0;font-size:12px;}.compare .compare-left{float:left;clear:both}.compare .compare-left label{font-weight:700;float:left;margin-left:10px;padding-top:5px}.compare .compare-left input{text-indent:2px;height:22px;width:110px;border:1px solid #A9C1D9;float:left;margin-left:10px;line-height:22px}.compare .compare-left input[type='button']{float:left;height:24px;width:43px;margin-left:0;border:1px solid #A9C1D9;border-left:none;background:url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/Pgo8c3ZnIHhtbG5zPSJod…EiIGhlaWdodD0iMSIgZmlsbD0idXJsKCNncmFkLXVjZ2ctZ2VuZXJhdGVkKSIgLz4KPC9zdmc+);background:-moz-linear-gradient(top,#f7f4fb 0,#e3ebf2 100%);background:-webkit-gradient(linear,left top,left bottom,color-stop(0,#f7f4fb),color-stop(100%,#e3ebf2));background:-webkit-linear-gradient(top,#f7f4fb 0,#e3ebf2 100%);background:-o-linear-gradient(top,#f7f4fb 0,#e3ebf2 100%);background:-ms-linear-gradient(top,#f7f4fb 0,#e3ebf2 100%);background:linear-gradient(to bottom,#f7f4fb 0,#e3ebf2 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#f7f4fb', endColorstr='#e3ebf2', GradientType=0)}.overlay{position:fixed;top:0;left:0;width:100%;height:100%;z-index:50;background:#000;opacity:.7;-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=70)\";filter:alpha(opacity=70);display:none}.alpine-graphic-larger{position:fixed;display:block;opacity:1;left:50%;margin-left:-400px;top:50%;margin-top:-300px;z-index:99;background:#fff;font-size:12px}.alpine-graphic-larger .portfolio-ad{display:none}.alpine-graphic-larger .larger-title{width:100%;height:39px;background:#c2dcee}.alpine-graphic-larger .larger-title .larger-name{color:#0062a5;font-size:14px;float:left;margin-left:20px;height:39px;line-height:39px;text-shadow:0 0 1px rgba(255,255,255,.5)}.alpine-graphic-larger .larger-title .larger-code{color:#5396c3;font-size:14px;float:left;margin-left:7px;height:39px;line-height:39px;text-shadow:0 0 1px rgba(255,255,255,.5)}.alpine-graphic-larger .larger-title .larger-status{font:12px SimSun;color:#1c628d;float:left;padding-left:8px;height:23px;line-height:23px;margin-top:8px}.alpine-graphic-larger .sideBar{position:absolute;overflow-x:hidden;top:82px;right:-57px;width:57px;background:#ccc9c7;border-radius:0 4px 4px 0;padding:10px 0}.alpine-graphic-larger .sideBar .invalid{cursor:default!important;color:#a8a5a3!important;border:none!important;background:none!important}.alpine-graphic-larger .sideBar li{width:100%;font-size:13px;font-family:\"Microsoft YaHei\",MicrosoftJhengHei,STHeiti,MingLiu;height:25px;text-align:center;cursor:pointer;padding-top:10px}.alpine-graphic-larger .sideBar .cur{background:#6f6259;cursor:default;color:#fff;border-top:1px solid #444;border-bottom:1px solid #444}.alpine-graphic-larger .user-graphic-panel{width:60px;position:absolute;right:0;z-index:100;border:1px solid #bab5b5;background:#ededed;background:rgba(237,237,237,.8);-ms-filter:\"progid:DXImageTransform.Microsoft.Alpha(Opacity=90)\";filter:alpha(opacity=90);border-radius:4px 4px;box-shadow:2px 0 2px rgba(50,50,50,.4);padding-bottom:5px;display:none}.alpine-graphic-larger .user-graphic-panel li{width:35px;height:35px;margin-left:13px}.alpine-graphic-larger .user-graphic-panel li .popup{display:inline-block;width:33px;height:33px;margin:1px;cursor:pointer}.alpine-graphic-larger .user-graphic-panel li .line{background-position:0 -118px}.alpine-graphic-larger .user-graphic-panel li .line.cur-type{background-position:-33px -118px}.alpine-graphic-larger .user-graphic-panel li .horizon{background-position:0 -151px}.alpine-graphic-larger .user-graphic-panel li .horizon.cur-type{background-position:-33px -151px}.alpine-graphic-larger .user-graphic-panel li .regression{background-position:0 -184px}.alpine-graphic-larger .user-graphic-panel li .regression.cur-type{background-position:-33px -184px}.alpine-graphic-larger .user-graphic-panel li .rect{background-position:0 -217px}.alpine-graphic-larger .user-graphic-panel li .rect.cur-type{background-position:-33px -217px}.alpine-graphic-larger .user-graphic-panel li .cycle{background-position:0 -250px}.alpine-graphic-larger .user-graphic-panel li .cycle.cur-type{background-position:-33px -250px}.alpine-graphic-larger .user-graphic-panel li .division{background-position:0 -283px}.alpine-graphic-larger .user-graphic-panel li .division.cur-type{background-position:-33px -283px}.alpine-graphic-larger .user-graphic-panel li .percentage{background-position:0 -316px}.alpine-graphic-larger .user-graphic-panel li .percentage.cur-type{background-position:-33px -316px}.alpine-graphic-larger .user-graphic-panel li .band{background-position:0 -349px}.alpine-graphic-larger .user-graphic-panel li .band.cur-type{background-position:-33px -349px}.alpine-graphic-larger .user-graphic-panel li .fibonacci{background-position:0 -382px}.alpine-graphic-larger .user-graphic-panel li .fibonacci.cur-type{background-position:-33px -382px}.alpine-graphic-larger .user-graphic-panel li .up{background-position:0 -415px}.alpine-graphic-larger .user-graphic-panel li .up.cur-type{background-position:-33px -415px}.alpine-graphic-larger .user-graphic-panel li .down{background-position:0 -448px}.alpine-graphic-larger .user-graphic-panel li .down.cur-type{background-position:-33px -448px}.alpine-graphic-larger .user-graphic-panel li .text{background-position:0 -481px}.alpine-graphic-larger .user-graphic-panel li .text.cur-type{background-position:-33px -481px}.alpine-graphic-larger .user-graphic-panel li .pointer{background-position:0 -514px}.alpine-graphic-larger .user-graphic-panel li .pointer.cur-type{background-position:-33px -514px}.alpine-graphic-larger .user-graphic-panel li .remove{background-position:0 -547px}.alpine-graphic-larger .user-graphic-panel li .remove.cur-type{background-position:-33px -547px}.alpine-graphic-larger .user-graphic-panel li .clear{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACEAAAAhCAYAAABX5MJvAAAACXBIWXMAAAsTAAALEwEAmpwYAAA57GlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU1NzcyLCAyMDE0LzAxLzEzLTE5OjQ0OjAwICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNCAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTUtMTEtMTdUMTY6NTk6MDcrMDg6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNS0xMS0xN1QxNzowODoyMCswODowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTUtMTEtMTdUMTc6MDg6MjArMDg6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6N2Y3OTc4NjYtMDMyYi03MzQ0LThlMmEtYzE2YzYxMWNmMjcwPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD5hZG9iZTpkb2NpZDpwaG90b3Nob3A6YjVlMzJhNjgtOGQwYS0xMWU1LWI2ZGItOTMzZDY1NTgxNzI1PC94bXBNTTpEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06T3JpZ2luYWxEb2N1bWVudElEPnhtcC5kaWQ6NjdjOWZhYjMtNmIzNi0zMTQ5LTk2ODUtODIzZDI1OGIxOWEyPC94bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpIaXN0b3J5PgogICAgICAgICAgICA8cmRmOlNlcT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+Y3JlYXRlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjY3YzlmYWIzLTZiMzYtMzE0OS05Njg1LTgyM2QyNThiMTlhMjwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNS0xMS0xN1QxNjo1OTowNyswODowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTQgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDphY3Rpb24+c2F2ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo3Zjc5Nzg2Ni0wMzJiLTczNDQtOGUyYS1jMTZjNjExY2YyNzA8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTUtMTEtMTdUMTc6MDg6MjArMDg6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE0IChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT42NTUzNTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MzM8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MzM8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/Pn9SNXsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAETVJREFUeAEAJRHa7gD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wAA////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AAP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wAA////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AAP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wAA////AP///wD///8Ae3t7NJWVla2VlZXHlJSUu5SUlLuUlJS7lJSUu5SUlLuUlJS7lJSUu5SUlLuUlJS7lJSUu5SUlLuUlJS7lJSUu5SUlLuUlJS7lJSUu5SUlLuUlJS7lJSUu5SUlLuUlJS7lJSUxJWVlbuKiopI////AP///wD///8AAP///wD///8A////AIODg5aVlZX/lZWV/5SUlP+UlJT/lJSU/5SUlP+UlJT/lJSU/5SUlP+UlJT/lJSU/5SUlP+UlJT/lJSU/5SUlP+UlJT/lJSU/5SUlP+UlJT/lJSU/5SUlP+UlJT/lJSU/5SUlP+UlJT/jo6Om////wD///8A////AAD///8A////AP///wCgoKCelJSU/5OTk/+UlJT/lJSU/5SUlP+UlJT/lJSU/5SUlP+UlJT/lJSU/5SUlP+UlJT/lJSU/5SUlP+UlJT/lJSU/5SUlP+UlJT/lJSU/5SUlP+UlJT/lJSU/5SUlP+UlJT/lJSU/5qamp7///8A////AP///wAA////AP///wD///8AlJSUkqCgoP+UlJT/lJSU/5aWlv+Tk5P/mJiY/5qamv+Xl5f/mpqa/5GRkf+YmJj/mJiY/5aWlv+UlJT/lJSU/5OTk/+Wlpb/l5eX/5ubm/+Wlpb/kpKS/5aWlv+VlZX/k5OT/5ubm/+YmJiY////AP///wD///8AAP///wD///8A////ACsrKxJlZWV+np6e/5SUlP+WlpaYnp6e1IWFheV/f39mnJyc/46OjraZmZl+kpKSnZSUlP+Li4vJnZ2d+pqamqWTk5N5k5OTwZWVlf98fHxbjIyM156envCWlpaMkZGR/p2dnf9/f3+YPz8/H////wD///8A////AAD///8A////AP///wArKysAZWVlAJmZma+cnJz/YmJiMZ6engCOjo6JhoaGqFFRUYCOjo4AmZmZAJKSkgBMTExRn5+f/35+fmOampoAk5OTAJOTkwBmZmaLeHh4h5OTk6iampoWg4ODAI+Pj/+dnZ3pf39/AD8/PwD///8A////AP///wAA////AP///wD///8AKysrAIODgwCDg4OEnZ2d/35+fmasrKwAqampmKWlpf9CQkJTREREAIKCggB7e3sAbW1tlJiYmO5tbW2cl5eXAIeHhwA/Pz8AOzs7RLCwsP92dnaXXV1dAIODg0ienp7/hoaGpIaGhgA/Pz8A////AP///wD///8AAP///wD///8A////AIyMjACMjIwAjIyMWJaWlv+VlZWBrKysmVdXV7ClpaUAtLS030RERGOCgoIAe3t7z7y8vKCYmJgAV1dXh5eXl9OHh4cAPz8/UZqamvWVlZUOdnZ2q11dXYGEhIRRnJyc/46OjoGOjo4Ajo6OAP///wD///8A////AAD///8A////AP///wCRkZEAkZGRAJGRkSuWlpb/mZmZ/2VlZaVXV1cAqKioAKioqASNjY2+goKC+5WVlXy8vLwAmJiYAFdXVwBaWlprh4eH7ZKSks2jo6MflZWVAHZ2dgCAgIClkZGR/5aWlv+RkZFbkZGRAJGRkQD///8A////AP///wAA////AP///wD///8AeHh4AHh4eAB4eHgNmJiY/5OTk/8dHR0KHR0dAHFxcQBxcXEAhYWFtLGxsf9SUlJLQEBAAGJiYgBCQkIAMTExOqioqP+cnJy/hISEAJ2dnQCmpqYAgICAEJaWlv+VlZX/fHx8Jnx8fAB8fHwA////AP///wD///8AAP///wD///8A////AHh4eAB4eHgAeHh4AImJicqjo6P/enp6zm1tbQBxcXEAcXFx0qOjo4axsbEAmpqa50BAQHNiYmIAQkJCVZ+fn/+MjIwGZGRkcYSEhNadnZ0ApqamAaioqN+Xl5f/kJCQ9XBwcAhwcHAAcHBwAP///wD///8A////AAD///8A////AP///wCUlJQAlJSUAJSUlACUlJSnmJiY/46OjsFtbW2VcXFxp66urpOjo6MArq6uAK6urhGhoaG7YmJilZWVldS7u7syjIyMAGRkZABMTEx+nZ2du4SEhKxra2uQmZmZ/5WVldZwcHAAcHBwAHBwcAD///8A////AP///wAA////AP///wD///8Ai4uLAIuLiwCLi4sAi4uLhKCgoP9UVFRLiYmJyqysrP9OTk4LIiIiAE9PTwAnJycAZmZmVLi4uP9zc3N5KSkpAGVlZQC6uroAbm5uDqKiov+IiIjQXFxcHpaWlv+QkJCpkJCQAJCQkACQkJAA////AP///wD///8AAP///wD///8A////AHZ2dgB2dnYAdnZ2AHZ2dkuampr/k5OT/52dnUqFhYVRY2Nj5SIiIgFPT08AJycnUYqKivejo6Mnk5OTzikpKXJlZWUAurq6Faenp/5mZmZHZ2dnRpKSkv+enp7/fn5+gH5+fgB+fn4Afn5+AP///wD///8A////AAD///8A////AP///wCRkZEAkZGRAJGRkQCRkZEomZmZ/4yMjMWdnZ0AhYWFAHZ2dn15eXm0T09PR6Kiou24uLgzo6OjAJqamhiXl5fPZWVlYZGRkb85OTltZmZmAGdnZwB1dXWgoKCg/5CQkEmQkJAAkJCQAJCQkAD///8A////AP///wAA////AP///wD///8Ac3NzAHNzcwBzc3MAc3NzDZqamv+JiYnjhoaGAF1dXQAlJSUAdXV1pbKysv9zc3M/BAQEAHNzcwCysrIAiYmJNri4uP9jY2OfQEBAAFNTUwB/f38Af39/qKCgoP93d3cod3d3AHd3dwB3d3cA////AP///wD///8AAP///wD///8A////AHNzcwBzc3MAc3NzAHNzcwCRkZHWlZWV/4aGhhJdXV0AJSUlVpGRkcOmpqZwcHBwzQQEBBBzc3MAsrKyG5CQkOR+fn5YoKCgtUBAQHVTU1MAjY2NAI+Pj/KWlpb/g4ODB4ODgwCDg4MAg4ODAP///wD///8A////AAD///8A////AP///wCIiIgAiIiIAIiIiACIiIgAiIiIppubm/+dnZ1dXV1dKYuLi/ipqakspqamAIuLi4RgYGDNc3NzFKenp+E2NjZ3fn5+ALGxsRqamprvU1NTPI2NjTienp7/ioqKyIODgwCDg4MAg4ODAIODgwD///8A////AP///wAA////AP///wD///8AeXl5AHl5eQB5eXkAeXl5AHl5eX2bm5v/lpaW/6urq/+VlZUkqampAKWlpQClpaUAg4ODbby8vP9FRUVgGhoaABoaGgCxsbEAm5ubBampqeyYmJj/nJyc/4GBgaGBgYEAgYGBAIGBgQCBgYEA////AP///wD///8AAP///wD///8A////AImJiQCJiYkAiYmJAImJiQCJiYlGmZmZ/4uLi8WBgYGkhISElIyMjAClpaUApaWlGpqamr1zc3OrcnJyshoaGg4aGhoAtra2AKSkpHd6enqvhYWFt5ubm/+Ojo54jo6OAI6OjgCOjo4Ajo6OAP///wD///8A////AAD///8A////AP///wB9fX0AfX19AH19fQB9fX0AfX19JZubm/+Pj4+tQUFBAFdXV9uMjIyGpqamAJqamvY2NjZ8c3NzAHNzc4ZxcXHoo6OjALa2tnBsbGzqenp6AIGBgXyenp7/eHh4QHh4eAB4eHgAeHh4AHh4eAD///8A////AP///wAA////AP///wD///8AbW1tAG1tbQBtbW0AbW1tAG1tbQSZmZn9np6e/0FBQQxXV1cAgoKCpqampv9LS0tQpKSkAKKiogCXl5cAd3d3WaOjo/9tbW2ibGxsAISEhACZmZnhnp6e/4SEhB2EhIQAhISEAISEhACEhIQA////AP///wD///8AAP///wD///8A////AG1tbQBtbW0AbW1tAG1tbQBtbW0AcnJylbS0tP9vb2+0mpqaAJSUlLSSkpL/iIiIWaSkpAuioqIkl5eXC3t7ez+mpqb/ampqoZubmwCEhISWpqam/4eHh8OEhIQAhISEAISEhACEhIQAhISEAP///wD///8A////AAD///8A////AP///wAsLCwALCwsACwsLAAsLCwALCwsACwsLAeKiorcq6ur/5qamv+Xl5f/lJSU/5qamv+VlZX/k5OT/5SUlP+YmJj/k5OT/5ycnP+bm5v/oKCg/5qamvlBQUElQUFBAEFBQQBBQUEAQUFBAEFBQQD///8A////AP///wAA////AP///wD///8ALCwsACwsLAAsLCwALCwsACwsLAAsLCwAMDAwD42NjYacnJy1lJSUqpSUlKWUlJSqlJSUs5SUlLKUlJS0lZWVq5SUlKWUlJSplpaWtpmZmZtpaWkgQUFBAEFBQQBBQUEAQUFBAEFBQQBBQUEA////AP///wD///8AAP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AAEAAP//fgYRMN5OjgwAAAAASUVORK5CYII=)}.alpine-graphic-larger .user-graphic-panel li.cur,.alpine-graphic-larger .user-graphic-panel .cur{background:#6f6259;cursor:default;color:#fff}.alpine-graphic-larger .user-graphic-panel .panel-top{height:23px;width:100%;margin:0;border-bottom:1px solid #bab5b5;background:-webkit-gradient(linear,0 0,0 100%,from(rgba(255,255,255,.498039)),color-stop(.75,rgba(255,255,255,0)),to(#b8bfc5));filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#B8BFC5', GradientType=0)}.alpine-graphic-larger .user-graphic-panel .panel-top .popup-close{display:inline-block;background-position:-48px -90px;width:9px;height:9px;position:absolute;right:8px;top:8px}.alpine-graphic-larger .user-graphic-panel .panel-top .menu{display:inline-block;background-position:-38px -89px;width:9px;height:9px;position:absolute;left:8px;top:8px;cursor:default}.alpine-graphic-larger .compare{height:80px;background:#dde8f3;clear:both;color:#81a1c4}.alpine-graphic-larger .compare:before{display:block;height:10px;content:' ';border-top:1px solid #fff;margin-top:1px}.alpine-graphic-larger .compare .compare-left label{float:none;display:block;font-weight:400;padding-bottom:5px;margin-left:40px}.alpine-graphic-larger .compare .compare-left input[type=text]{padding:0 0 0 13px;height:32px;width:237px;border:1px solid #a0b5cb;border-right:none;box-shadow:0 0 1px #fff,inset 0 0 1px rgba(0,0,0,.4);background:#f5fbff;color:#b3b6b8;margin-left:40px;line-height:32px}.alpine-graphic-larger .compare .compare-left input[type=button]{width:77px;height:34px;background:#4f90c1;border:none;border-top:1px solid #8db5d8;border-bottom:1px solid #356790;font-family:\"Microsoft YaHei\",MicrosoftJhengHei,STHeiti,MingLiu;color:#fff;text-shadow:0 0 1px rgba(0,0,0,.3);box-shadow:0 0 2px #1a5481,inset 0 0 1px #70b6eb;margin-left:0;filter:none}.alpine-graphic-larger .compare .compare-panel{overflow:hidden;float:left;padding-top:10px;height:50px;border-left:1px solid #fff;box-shadow:-1px 0 0 #ddd;margin-left:20px;width:400px;font-size:12px;line-height:17px;white-space:nomal}.alpine-graphic-larger .compare .compare-panel .compare-item{padding-left:10px;display:inline-block;*display:inline;zoom:1;white-space:nowrap}.alpine-graphic-larger .compare .compare-panel .compare-item label{display:inline-block;margin:0 0 0 5px;cursor:pointer}.alpine-graphic-larger .compare .compare-panel .compare-item input[type='checkbox']{opacity:0;display:inline;width:0}.alpine-graphic-larger .compare .compare-panel .compare-item input[type='checkbox'] .checked+.checkbox{background:#81a1c4}.alpine-graphic-larger .compare .compare-panel .compare-item input[type='checkbox'] .checked+.checkbox .checkmark{display:block}.alpine-graphic-larger .compare .compare-panel .compare-item .checkbox{display:inline-block;width:10px;height:10px;box-shadow:0 0 1px #fff;border:1px solid #638eb0;background:#fff;cursor:pointer}.alpine-graphic-larger .compare .compare-panel .compare-item .checkmark{font-size:14px;overflow:hidden;display:none;height:11px;color:#fff;font-family:MicroSoft Yahei}.alpine-graphic-larger .compare .compare-panel .checked .checkmark{display:block}.alpine-graphic-larger .compare .compare-panel .checked .checkbox{background:#81a1c4}.cmp-tips{position:absolute;display:none;width:315px;height:190px;top:50%;left:50%;margin:-95px 0 0 -157px;font-size:14px;color:#105787;text-align:center;border:1px solid #DDE8F3;background:#f5fbff;box-shadow:0 2px 5px 0 rgba(3,30,49,.75);z-index:200}.cmp-tips div{margin-top:60px;font-family:\"Microsoft YaHei\",MicrosoftJhengHei,STHeiti,MingLiu}.cmp-tips input{display:block;position:absolute;left:50%;margin-left:-65px;margin-top:30px;width:130px;height:43px;color:#fff;font:700 18px \"Microsoft YaHei\",MicrosoftJhengHei,STHeiti,MingLiu;text-shadow:.5px 1px 1px rgba(0,0,0,.33);background:#2989cb;background-image:-webkit-gradient(linear,center top,center bottom,from(#59aae2),to(#2989cb));background-image:-webkit-linear-gradient(top,#59aae2,#2989cb);background-image:-moz-linear-gradient(top,#59aae2,#2989cb);background-image:-o-linear-gradient(top,#59aae2,#2989cb);background-image:-ms-linear-gradient(top,#59aae2,#2989cb);background-image:linear-gradient(to bottom,#59aae2,#2989cb);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#59aae2', endColorstr='#2989cb', GradientType=1);box-shadow:1px 2px 2px #3075a4,inset 1px 2px 1px rgba(255,255,255,.3);border-radius:5px;border:none;cursor:pointer}", ""]);
	}, function (t, e) {
		t.exports = function () {
			var t = [];
			return t.toString = function () {
				for (var t = [], e = 0; e < this.length; e++) {
					var n = this[e];
					n[2] ? t.push("@media " + n[2] + "{" + n[1] + "}") : t.push(n[1])
				}
				return t.join("")
			}, t
		}
	}, function (t, e, n) {
		function r(t, e) {
			for (var n = 0; n < t.length; n++) {
				var r = t[n],
					i = c[r.id];
				if (i) {
					i.refs++;
					for (var a = 0; a < i.parts.length; a++) i.parts[a](r.parts[a]);
					for (; a < r.parts.length; a++) i.parts.push(o(r.parts[a], e))
				} else {
					for (var s = [], a = 0; a < r.parts.length; a++) s.push(o(r.parts[a], e));
					c[r.id] = {
						id: r.id,
						refs: 1,
						parts: s
					}
				}
			}
		}

		function i(t) {
			for (var e = [], n = {}, r = 0; r < t.length; r++) {
				var i = t[r],
					a = i[0],
					o = i[1],
					s = i[2],
					l = i[3],
					u = {
						css: o,
						media: s,
						sourceMap: l
					};
				n[a] ? n[a].parts.push(u) : e.push(n[a] = {
					id: a,
					parts: [u]
				})
			}
			return e
		}

		function a() {
			var t = document.createElement("style"),
				e = g();
			return t.type = "text/css", e.appendChild(t), t
		}

		function o(t, e) {
			var n, r, i;
			if (e.singleton) {
				var o = p++;
				n = d || (d = a()), r = l.bind(null, n, o, !1), i = l.bind(null, n, o, !0)
			} else n = a(), r = u.bind(null, n), i = function () {
				n.parentNode.removeChild(n)
			};
			return r(t),
				function (e) {
					if (e) {
						if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap) return;
						r(t = e)
					} else i()
				}
		}

		function s(t, e, n) {
			var r = ["/** >>" + e + " **/", "/** " + e + "<< **/"],
				i = t.lastIndexOf(r[0]),
				a = n ? r[0] + n + r[1] : "";
			if (t.lastIndexOf(r[0]) >= 0) {
				var o = t.lastIndexOf(r[1]) + r[1].length;
				return t.slice(0, i) + a + t.slice(o)
			}
			return t + a
		}

		function l(t, e, n, r) {
			var i = n ? "" : r.css;
			if (t.styleSheet) t.styleSheet.cssText = s(t.styleSheet.cssText, e, i);
			else {
				var a = document.createTextNode(i),
					o = t.childNodes;
				o[e] && t.removeChild(o[e]), o.length ? t.insertBefore(a, o[e]) : t.appendChild(a)
			}
		}

		function u(t, e) {
			var n = e.css,
				r = e.media,
				i = e.sourceMap;
			if (i && "function" == typeof btoa) try {
				n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(JSON.stringify(i)) + " */", n = '@import url("data:text/css;base64,' + btoa(n) + '")'
			} catch (a) {}
			if (r && t.setAttribute("media", r), t.styleSheet) t.styleSheet.cssText = n;
			else {
				for (; t.firstChild;) t.removeChild(t.firstChild);
				t.appendChild(document.createTextNode(n))
			}
		}
		var c = {},
			h = function (t) {
				var e;
				return function () {
					return "undefined" == typeof e && (e = t.apply(this, arguments)), e
				}
			},
			f = h(function () {
				return /msie 9\b/.test(window.navigator.userAgent.toLowerCase())
			}),
			g = h(function () {
				return document.head || document.getElementsByTagName("head")[0]
			}),
			d = null,
			p = 0;
		t.exports = function (t, e) {
			e = e || {}, "undefined" == typeof e.singleton && (e.singleton = f());
			var n = i(t);
			return r(n, e),
				function (t) {
					for (var a = [], o = 0; o < n.length; o++) {
						var s = n[o],
							l = c[s.id];
						l.refs--, a.push(l)
					}
					if (t) {
						var u = i(t);
						r(u, e)
					}
					for (var o = 0; o < a.length; o++) {
						var l = a[o];
						if (0 === l.refs) {
							for (var h = 0; h < l.parts.length; h++) l.parts[h]();
							delete c[l.id]
						}
					}
				}
		}
	}, function (t, e, n) {
		(function (t) {
			"use strict";
			! function (t) {
				function e(e, n) {
					return e.replace(new RegExp(n.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1"), "g"), '<span style="color:#f45243;height:20px;line-height:20px;">' + t("<span></span>").text(n).html() + "</span>")
				}

				function n(t) {
					var e = a[t[0]];
					switch (t[4]) {
						case "QH-IF":
							e = "股期";
							break;
						case "ZQ":
							e = "债券";
							break;
						case "FJ":
						case "ETF":
							e = "基金"
					}
					return e
				}
				var r = {
					},
					i = {
						all: "全部",
						gp: "沪深",
						hk: "港股",
						jj: "基金",
						us: "美股",
						qh: "期货",
						"if": "期指",
						wh: "外汇"
					},
					a = {
						sh: "上海",
						sz: "深圳",
						jj: "基金",
						hk: "港股",
						us: "美股",
						qh: "期货",
						"if": "期指",
						wh: "外汇"
					},
					o = ["all", "gp", "hk", "jj", "us", "qh", "if", "wh"],
					s = {},
					l = function (e, n) {
						var i = this;
						this.$target = e, this.node = t('<ul style="background:#fff;font-size:12px;display:none;position:absolute;border:1px solid #9c9c9c;margin:5px 0;padding:0;z-index:999"></ul>').appendTo(t("body")), n = i.config = t.extend(!0, {}, r, n), n.preFill && n.$input.val(n.preFill), t(document).click(function (e) {
							var r = t(e.target);
							if (i._visible) {
								if (i.node.is(r) || i.node.has(r).length || n.$input.is(r)) return;
								i.hide()
							}
						}), n.$select.val(n.defaultType), n.$select.on("change", function () {
							console.log('change')
							n.$input.focus()
						}), n.$button.on("click", function () {
							console.log('changeclick')
							
							i._select()
						}), n.$input.on("keydown", function (t) {
							switch (t.keyCode) {
								case 40:
									i._next();
									break;
								case 38:
									i._next(!0);
									break;
								case 13:
									i._select();
									break;
								case 27:
									i.hide();
									break;
								default:
									i._query()
							}
						}).on("keypress input", function (t) {
							i._query()
						}).focus(function () {
							n.$input.css("color", "rgb(51, 51, 51)"), n.$input.val() === n.inputHint ? n.$input.val("") : i._query()
						}).on("blur", function () {
							i.hide()
						}), this.hide()
					};
				l.prototype._setting = function (e) {
					e = this.config = t.extend(!0, {}, this.config, e), e.preFill && e.$input.val(e.preFill), e.$select.val(e.defaultType)
				}, l.prototype._query = function () {
					var e = this;
					e._queryTimer && clearTimeout(e._queryTimer), e._queryTimer = setTimeout(function () {
						e._queryTimer = 0;
						var n = t.trim(e.config.$input.val()),
							r = e.config.$select.val();
						if (("sz" === r || "sh" === r) && (r = "gp"), "if" === r && (r = "qh"), !n || n === e.config.inputHint) return e._suggest(r, n, []);
						var i = r + "-" + n;
						//encodeURIComponent(r)
						return i in s ? e._suggest(r, n, s[i]) : void t.getScript("//proxy.finance.qq.com/smartboxgtimg/s3/index.php?t=all" + "&v=2"+ "&format=jsonp"+"_callback=GET_4"+"&q=" + encodeURIComponent(n), function () {
							var a = window.v_hint,                                 
								o = s[i] = [];
							a && t.each(a.split("^"), function (t, e) {
								e = e.split("~"), e.length > 4 && o.push(e)
							}),t.trim(e.config.$input.val()) === n && e._suggest(r, n, o), window.v_hint = null
						})
					}, e.config.typeWait)
				}, l.prototype.data = function () {
					return this._activeLi || (this._activeLi = this.node.children().first()), this._activeLi.data("__raw__")
				}, l.prototype.hide = function () {
					this._queryTimer && clearTimeout(this._queryTimer);
					var e = this;
					e.node.hide(), e._visible = !1, t.trim(this.config.$input.val()) || this.config.$input.val(this.config.inputHint), this.config.$input.val() === this.config.inputHint && this.config.$input.css("color", "rgb(180, 179, 179)")
				}, l.prototype._select = function () {
					var t = this.data();
					t && "function" == typeof this.config.onclick && (this.config.$input.val(t[1]), this.config.onclick(t))
				}, l.prototype._next = function (t) {
					var e = this.node.children("li"),
						n = t ? this._activeLi && !this._activeLi.is(e.first()) ? this._activeLi.prev() : e.last() : this._activeLi && !this._activeLi.is(e.last()) ? this._activeLi.next() : e.first();
					this._activeLi && this._activeLi.css("background", "transparent"), this._activeLi = n, n.css("background", "rgb(222, 239, 255)")
				}, l.prototype._suggest = function (r, i, a) {
					if (this._key === r + "-" + i) return this.show();
					var o = this.config.defaultType;
					if ("if" === o)
						for (var s = a.length - 1; s >= 0; s--) "QH-IF" !== a[s][4] && a.splice(s, 1);
					a = a.slice(0, this.config.maxLine), this._key = r + "-" + i, this.node.empty();
					var l = this,
						u = t('<li style="list-style:none;margin:0;padding:0 5px 0 5px;width:246px;height:20px;line-height:20px;overflow:hidden;cursor:pointer;"></li>').hover(function () {
							l._activeLi && l._activeLi.is(this) || (l._activeLi && l._activeLi.css("background", "transparent"), l._activeLi = t(this), l._activeLi.css("background", "rgb(222, 239, 255)"))
						}).mousedown(function () {
							l._select()
						});
					a.length ? t.each(a, function (r, a) {
						var o = u.clone(!0).data("__raw__", a),
							s = "float: left;margin-right:5px;height:20px;line-height:20px;overflow:hidden;";
						t('<span style="' + s + 'width:54px;"></span>').html(e(a[1], i)).appendTo(o), t('<span style="' + s + 'font-family:Arial;width:75px;"></span>').html(e(a[2], i)).appendTo(o), t('<span style="' + s + 'width:60px;"></span>').html(e(a[3].toUpperCase(), i.toUpperCase())).appendTo(o), t('<span style="' + s + 'width:40px;color:#a9a9a9;margin:0"></span>').text(n(a)).appendTo(o), o.appendTo(l.node)
					}) : u.clone().text(i ? "未找到符合条件的结果" : "请输入查询条件：代码/名称/拼音").appendTo(this.node), l._activeLi = null, l.show()
				}, l.prototype.show = function () {
					this.node.show(), this._visible = !0;
					var t = this.$target.offset();
					this.node.css({
						left: t.left + "px",
						top: t.top + this.$target.innerHeight() + "px"
					})
				}, t.fn.smartbox = function (e) {
					if (this.get(0)._smartbox) {
						var n = t.extend(!0, {}, r, e);
						return this.get(0)._smartbox._setting(n)
					}
					return this.each(function () {
						if (!this._smartbox) {
							var n = t.extend(!0, {}, r, e),
								a = t(this),
								s = this.tagName.toLowerCase();
							n.$select ? n.$select = t(n.$select) : n.$select = "select" === s ? a : a.find("select").first(), n.$select.size() || (n.$select = t("<select></select>"), t.each(o, function (e, r) {
								t("<option></option>").val(r).text(i[r]).appendTo(n.$select)
							}), n.$select.val(n.defaultType), "div" === s ? n.$select.appendTo(a) : n.$select.hide().appendTo(t("body"))), !n.$select.val() || e && e.defaultType || (n.defaultType = n.$select.val()), n.$input ? n.$input = t(n.$input) : n.$input = a.is("input[type=text]") ? a : a.find("input[type=text]").first(), n.$input.size() || (n.$input = t('<input type="text">').val(n.preFill), "div" === s ? n.$input.appendTo(a) : n.$input.hide().appendTo(t("body"))), n.$button ? n.$button = t(n.$button) : n.$button = a.is("input[type=button],button") ? a : a.find("input[type=button],button").first(), n.$button.size() || (n.$button = t('<input type="button" value="查询">'), "div" === s ? n.$button.appendTo(a) : n.$button.hide().appendTo(t("body"))), this._smartbox = new l(a, n)
						}
					})
				}
			}(t)
		}).call(e, n(5))
	}])
}); /*  |xGv00|4100df40ec8a7b1ef66b96ed8b6e1cc9 */
