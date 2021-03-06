/*!
 * CoreUI v3.2.0 (https://coreui.io)
 * Copyright 2020 creativeLabs Łukasz Holeczek
 * Licensed under MIT (https://coreui.io)
 */
! function(t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = t || self).coreui = e()
}(this, (function() {
    "use strict";

    function t(t, e) {
        for (var n = 0; n < e.length; n++) {
            var i = e[n];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(t, i.key, i)
        }
    }

    function e(e, n, i) {
        return n && t(e.prototype, n), i && t(e, i), e
    }

    function n(t, e, n) {
        return e in t ? Object.defineProperty(t, e, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = n, t
    }

    function i(t, e) {
        var n = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var i = Object.getOwnPropertySymbols(t);
            e && (i = i.filter((function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable
            }))), n.push.apply(n, i)
        }
        return n
    }

    function o(t) {
        for (var e = 1; e < arguments.length; e++) {
            var o = null != arguments[e] ? arguments[e] : {};
            e % 2 ? i(Object(o), !0).forEach((function(e) {
                n(t, e, o[e])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(o)) : i(Object(o)).forEach((function(e) {
                Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(o, e))
            }))
        }
        return t
    }
    var r, s, a, l, c = function(t) {
            do {
                t += Math.floor(1e6 * Math.random())
            } while (document.getElementById(t));
            return t
        },
        u = function(t) {
            var e = t.getAttribute("data-target");
            if (!e || "#" === e) {
                var n = t.getAttribute("href");
                e = n && "#" !== n ? n.trim() : null
            }
            return e
        },
        f = function(t) {
            var e = u(t);
            return e && document.querySelector(e) ? e : null
        },
        d = function(t) {
            var e = u(t);
            return e ? document.querySelector(e) : null
        },
        h = function(t) {
            if (!t) return 0;
            var e = window.getComputedStyle(t),
                n = e.transitionDuration,
                i = e.transitionDelay,
                o = parseFloat(n),
                r = parseFloat(i);
            return o || r ? (n = n.split(",")[0], i = i.split(",")[0], 1e3 * (parseFloat(n) + parseFloat(i))) : 0
        },
        p = function(t) {
            t.dispatchEvent(new Event("transitionend"))
        },
        g = function(t) {
            return (t[0] || t).nodeType
        },
        m = function(t, e) {
            var n = !1,
                i = e + 5;
            t.addEventListener("transitionend", (function e() {
                n = !0, t.removeEventListener("transitionend", e)
            })), setTimeout((function() {
                n || p(t)
            }), i)
        },
        v = function(t, e, n) {
            Object.keys(n).forEach((function(i) {
                var o, r = n[i],
                    s = e[i],
                    a = s && g(s) ? "element" : null == (o = s) ? "" + o : {}.toString.call(o).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!new RegExp(r).test(a)) throw new Error(t.toUpperCase() + ': Option "' + i + '" provided type "' + a + '" but expected type "' + r + '".')
            }))
        },
        _ = function(t) {
            if (!t) return !1;
            if (t.style && t.parentNode && t.parentNode.style) {
                var e = getComputedStyle(t),
                    n = getComputedStyle(t.parentNode);
                return "none" !== e.display && "none" !== n.display && "hidden" !== e.visibility
            }
            return !1
        },
        b = function() {
            return function() {}
        },
        y = function(t) {
            return t.offsetHeight
        },
        w = function() {
            var t = window.jQuery;
            return t && !document.body.hasAttribute("data-no-jquery") ? t : null
        },
        E = (r = {}, s = 1, {
            set: function(t, e, n) {
                "undefined" == typeof t.key && (t.key = {
                    key: e,
                    id: s
                }, s++), r[t.key.id] = n
            },
            get: function(t, e) {
                if (!t || "undefined" == typeof t.key) return null;
                var n = t.key;
                return n.key === e ? r[n.id] : null
            },
            delete: function(t, e) {
                if ("undefined" != typeof t.key) {
                    var n = t.key;
                    n.key === e && (delete r[n.id], delete t.key)
                }
            }
        }),
        L = function(t, e, n) {
            E.set(t, e, n)
        },
        k = function(t, e) {
            return E.get(t, e)
        },
        T = function(t, e) {
            E.delete(t, e)
        },
        A = Element.prototype.querySelectorAll,
        O = Element.prototype.querySelector,
        S = (a = new CustomEvent("Bootstrap", {
            cancelable: !0
        }), (l = document.createElement("div")).addEventListener("Bootstrap", (function() {
            return null
        })), a.preventDefault(), l.dispatchEvent(a), a.defaultPrevented),
        C = /:scope\b/;
    (function() {
        var t = document.createElement("div");
        try {
            t.querySelectorAll(":scope *")
        } catch (t) {
            return !1
        }
        return !0
    })() || (A = function(t) {
        if (!C.test(t)) return this.querySelectorAll(t);
        var e = Boolean(this.id);
        e || (this.id = c("scope"));
        var n = null;
        try {
            t = t.replace(C, "#" + this.id), n = this.querySelectorAll(t)
        } finally {
            e || this.removeAttribute("id")
        }
        return n
    }, O = function(t) {
        if (!C.test(t)) return this.querySelector(t);
        var e = A.call(this, t);
        return "undefined" != typeof e[0] ? e[0] : null
    });
    var D = w(),
        x = /[^.]*(?=\..*)\.|.*/,
        j = /\..*/,
        N = /::\d+$/,
        I = {},
        P = 1,
        R = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        },
        M = ["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"];

    function H(t, e) {
        return e && e + "::" + P++ || t.uidEvent || P++
    }

    function W(t) {
        var e = H(t);
        return t.uidEvent = e, I[e] = I[e] || {}, I[e]
    }

    function Y(t, e, n) {
        void 0 === n && (n = null);
        for (var i = Object.keys(t), o = 0, r = i.length; o < r; o++) {
            var s = t[i[o]];
            if (s.originalHandler === e && s.delegationSelector === n) return s
        }
        return null
    }

    function X(t, e, n) {
        var i = "string" == typeof e,
            o = i ? n : e,
            r = t.replace(j, ""),
            s = R[r];
        return s && (r = s), M.indexOf(r) > -1 || (r = t), [i, o, r]
    }

    function B(t, e, n, i, o) {
        if ("string" == typeof e && t) {
            n || (n = i, i = null);
            var r = X(e, n, i),
                s = r[0],
                a = r[1],
                l = r[2],
                c = W(t),
                u = c[l] || (c[l] = {}),
                f = Y(u, a, s ? n : null);
            if (f) f.oneOff = f.oneOff && o;
            else {
                var d = H(a, e.replace(x, "")),
                    h = s ? function(t, e, n) {
                        return function i(o) {
                            for (var r = t.querySelectorAll(e), s = o.target; s && s !== this; s = s.parentNode)
                                for (var a = r.length; a--;)
                                    if (r[a] === s) return i.oneOff && q.off(t, o.type, n), n.apply(s, [o]);
                            return null
                        }
                    }(t, n, i) : function(t, e) {
                        return function n(i) {
                            return n.oneOff && q.off(t, i.type, e), e.apply(t, [i])
                        }
                    }(t, n);
                h.delegationSelector = s ? n : null, h.originalHandler = a, h.oneOff = o, h.uidEvent = d, u[d] = h, t.addEventListener(l, h, s)
            }
        }
    }

    function U(t, e, n, i, o) {
        var r = Y(e[n], i, o);
        r && (t.removeEventListener(n, r, Boolean(o)), delete e[n][r.uidEvent])
    }
    var q = {
            on: function(t, e, n, i) {
                B(t, e, n, i, !1)
            },
            one: function(t, e, n, i) {
                B(t, e, n, i, !0)
            },
            off: function(t, e, n, i) {
                if ("string" == typeof e && t) {
                    var o = X(e, n, i),
                        r = o[0],
                        s = o[1],
                        a = o[2],
                        l = a !== e,
                        c = W(t),
                        u = "." === e.charAt(0);
                    if ("undefined" == typeof s) {
                        u && Object.keys(c).forEach((function(n) {
                            ! function(t, e, n, i) {
                                var o = e[n] || {};
                                Object.keys(o).forEach((function(r) {
                                    if (r.indexOf(i) > -1) {
                                        var s = o[r];
                                        U(t, e, n, s.originalHandler, s.delegationSelector)
                                    }
                                }))
                            }(t, c, n, e.slice(1))
                        }));
                        var f = c[a] || {};
                        Object.keys(f).forEach((function(n) {
                            var i = n.replace(N, "");
                            if (!l || e.indexOf(i) > -1) {
                                var o = f[n];
                                U(t, c, a, o.originalHandler, o.delegationSelector)
                            }
                        }))
                    } else {
                        if (!c || !c[a]) return;
                        U(t, c, a, s, r ? n : null)
                    }
                }
            },
            trigger: function(t, e, n) {
                if ("string" != typeof e || !t) return null;
                var i, o = e.replace(j, ""),
                    r = e !== o,
                    s = M.indexOf(o) > -1,
                    a = !0,
                    l = !0,
                    c = !1,
                    u = null;
                return r && D && (i = D.Event(e, n), D(t).trigger(i), a = !i.isPropagationStopped(), l = !i.isImmediatePropagationStopped(), c = i.isDefaultPrevented()), s ? (u = document.createEvent("HTMLEvents")).initEvent(o, a, !0) : u = new CustomEvent(e, {
                    bubbles: a,
                    cancelable: !0
                }), "undefined" != typeof n && Object.keys(n).forEach((function(t) {
                    Object.defineProperty(u, t, {
                        get: function() {
                            return n[t]
                        }
                    })
                })), c && (u.preventDefault(), S || Object.defineProperty(u, "defaultPrevented", {
                    get: function() {
                        return !0
                    }
                })), l && t.dispatchEvent(u), u.defaultPrevented && "undefined" != typeof i && i.preventDefault(), u
            }
        },
        F = "asyncLoad",
        Q = ".c-xhr-link, .c-sidebar-nav-link",
        z = {
            defaultPage: "main.html",
            errorPage: "404.html",
            subpagesDirectory: "views/"
        },
        V = function() {
            function t(t, e) {
                this._config = this._getConfig(e), this._element = t;
                var n = location.hash.replace(/^#/, "");
                "" !== n ? this._setUpUrl(n) : this._setUpUrl(this._config.defaultPage), this._addEventListeners()
            }
            var n = t.prototype;
            return n._getConfig = function(t) {
                return t = o(o({}, z), t)
            }, n._loadPage = function(t) {
                var e = this,
                    n = this._element,
                    i = this._config,
                    o = new XMLHttpRequest;
                o.open("GET", i.subpagesDirectory + t);
                var r = new CustomEvent("xhr", {
                    detail: {
                        url: t,
                        status: o.status
                    }
                });
                n.dispatchEvent(r), o.onload = function(s) {
                    if (200 === o.status) {
                        r = new CustomEvent("xhr", {
                            detail: {
                                url: t,
                                status: o.status
                            }
                        }), n.dispatchEvent(r);
                        var a = document.createElement("div");
                        a.innerHTML = s.target.response;
                        var l = Array.from(a.querySelectorAll("script")).map((function(t) {
                            return t.attributes.getNamedItem("src").nodeValue
                        }));
                        a.querySelectorAll("script").forEach((function(t) {
                            return t.remove(t)
                        })), window.scrollTo(0, 0), n.innerHTML = "", n.appendChild(a), (c = document.querySelectorAll(".view-script")).length && c.forEach((function(t) {
                            t.remove()
                        })), l.length && function t(n, i) {
                            void 0 === i && (i = 0);
                            var o = document.createElement("script");
                            o.type = "text/javascript", o.src = n[i], o.className = "view-script", o.onload = o.onreadystatechange = function() {
                                e.readyState && "complete" !== e.readyState || n.length > i + 1 && t(n, i + 1)
                            }, document.getElementsByTagName("body")[0].appendChild(o)
                        }(l), window.location.hash = t
                    } else window.location.href = i.errorPage;
                    var c
                }, o.send()
            }, n._setUpUrl = function(t) {
                t = t.replace(/^\//, "").split("?")[0], Array.from(document.querySelectorAll(Q)).forEach((function(t) {
                    t.classList.remove("c-active")
                })), Array.from(document.querySelectorAll(Q)).forEach((function(t) {
                    t.classList.remove("c-active")
                })), Array.from(document.querySelectorAll(".c-sidebar-nav-dropdown")).forEach((function(t) {
                    t.classList.remove("c-show")
                })), Array.from(document.querySelectorAll(".c-sidebar-nav-dropdown")).forEach((function(e) {
                    Array.from(e.querySelectorAll('a[href*="' + t + '"]')).length > 0 && e.classList.add("c-show")
                })), Array.from(document.querySelectorAll('.c-sidebar-nav-item a[href*="' + t + '"]')).forEach((function(t) {
                    t.classList.add("c-active")
                })), this._loadPage(t)
            }, n._loadBlank = function(t) {
                window.open(t)
            }, n._loadTop = function(t) {
                window.location = t
            }, n._update = function(t) {
                "#" !== t.href && ("undefined" != typeof t.dataset.toggle && "null" !== t.dataset.toggle || ("_top" === t.target ? this._loadTop(t.href) : "_blank" === t.target ? this._loadBlank(t.href) : this._setUpUrl(t.getAttribute("href"))))
            }, n._addEventListeners = function() {
                var t = this;
                q.on(document, "click.coreui.asyncLoad.data-api", Q, (function(e) {
                    e.preventDefault();
                    var n = e.target;
                    n.classList.contains("c-sidebar-nav-link") || (n = n.closest(Q)), n.classList.contains("c-sidebar-nav-dropdown-toggle") || "#" === n.getAttribute("href") || t._update(n)
                }))
            }, t._asyncLoadInterface = function(e, n) {
                var i = k(e, "coreui.asyncLoad");
                if (i || (i = new t(e, "object" == typeof n && n)), "string" == typeof n) {
                    if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                    i[n]()
                }
            }, t.jQueryInterface = function(e) {
                return this.each((function() {
                    t._asyncLoadInterface(this, e)
                }))
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "3.2.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return z
                }
            }]), t
        }(),
        K = w();
    if (K) {
        var $ = K.fn[F];
        K.fn[F] = V.jQueryInterface, K.fn[F].Constructor = V, K.fn[F].noConflict = function() {
            return K.fn[F] = $, V.jQueryInterface
        }
    }
    var J = function() {
        function t(t) {
            this._element = t, this._element && L(t, "coreui.alert", this)
        }
        var n = t.prototype;
        return n.close = function(t) {
            var e = this._element;
            t && (e = this._getRootElement(t));
            var n = this._triggerCloseEvent(e);
            null === n || n.defaultPrevented || this._removeElement(e)
        }, n.dispose = function() {
            T(this._element, "coreui.alert"), this._element = null
        }, n._getRootElement = function(t) {
            return d(t) || t.closest(".alert")
        }, n._triggerCloseEvent = function(t) {
            return q.trigger(t, "close.coreui.alert")
        }, n._removeElement = function(t) {
            var e = this;
            if (t.classList.remove("show"), t.classList.contains("fade")) {
                var n = h(t);
                q.one(t, "transitionend", (function() {
                    return e._destroyElement(t)
                })), m(t, n)
            } else this._destroyElement(t)
        }, n._destroyElement = function(t) {
            t.parentNode && t.parentNode.removeChild(t), q.trigger(t, "closed.coreui.alert")
        }, t.jQueryInterface = function(e) {
            return this.each((function() {
                var n = k(this, "coreui.alert");
                n || (n = new t(this)), "close" === e && n[e](this)
            }))
        }, t.handleDismiss = function(t) {
            return function(e) {
                e && e.preventDefault(), t.close(this)
            }
        }, t.getInstance = function(t) {
            return k(t, "coreui.alert")
        }, e(t, null, [{
            key: "VERSION",
            get: function() {
                return "3.2.0"
            }
        }]), t
    }();
    q.on(document, "click.coreui.alert.data-api", '[data-dismiss="alert"]', J.handleDismiss(new J));
    var G = w();
    if (G) {
        var Z = G.fn.alert;
        G.fn.alert = J.jQueryInterface, G.fn.alert.Constructor = J, G.fn.alert.noConflict = function() {
            return G.fn.alert = Z, J.jQueryInterface
        }
    }
    var tt = {
            matches: function(t, e) {
                return t.matches(e)
            },
            find: function(t, e) {
                var n;
                return void 0 === e && (e = document.documentElement), (n = []).concat.apply(n, A.call(e, t))
            },
            findOne: function(t, e) {
                return void 0 === e && (e = document.documentElement), O.call(e, t)
            },
            children: function(t, e) {
                var n, i = (n = []).concat.apply(n, t.children);
                return i.filter((function(t) {
                    return t.matches(e)
                }))
            },
            parents: function(t, e) {
                for (var n = [], i = t.parentNode; i && i.nodeType === Node.ELEMENT_NODE && 3 !== i.nodeType;) this.matches(i, e) && n.push(i), i = i.parentNode;
                return n
            },
            prev: function(t, e) {
                for (var n = t.previousElementSibling; n;) {
                    if (n.matches(e)) return [n];
                    n = n.previousElementSibling
                }
                return []
            },
            next: function(t, e) {
                for (var n = t.nextElementSibling; n;) {
                    if (this.matches(n, e)) return [n];
                    n = n.nextElementSibling
                }
                return []
            }
        },
        et = "coreui.button",
        nt = function() {
            function t(t) {
                this._element = t, L(t, et, this)
            }
            var n = t.prototype;
            return n.toggle = function() {
                var t = !0,
                    e = !0,
                    n = this._element.closest('[data-toggle="buttons"]');
                if (n) {
                    var i = tt.findOne('input:not([type="hidden"])', this._element);
                    if (i && "radio" === i.type) {
                        if (i.checked && this._element.classList.contains("active")) t = !1;
                        else {
                            var o = tt.findOne(".active", n);
                            o && o.classList.remove("active")
                        }
                        if (t) {
                            if (i.hasAttribute("disabled") || n.hasAttribute("disabled") || i.classList.contains("disabled") || n.classList.contains("disabled")) return;
                            i.checked = !this._element.classList.contains("active"), q.trigger(i, "change")
                        }
                        i.focus(), e = !1
                    }
                }
                e && this._element.setAttribute("aria-pressed", !this._element.classList.contains("active")), t && this._element.classList.toggle("active")
            }, n.dispose = function() {
                T(this._element, et), this._element = null
            }, t.jQueryInterface = function(e) {
                return this.each((function() {
                    var n = k(this, et);
                    n || (n = new t(this)), "toggle" === e && n[e]()
                }))
            }, t.getInstance = function(t) {
                return k(t, et)
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "3.2.0"
                }
            }]), t
        }();
    q.on(document, "click.coreui.button.data-api", '[data-toggle^="button"]', (function(t) {
        t.preventDefault();
        var e = t.target.closest(".btn"),
            n = k(e, et);
        n || (n = new nt(e)), n.toggle()
    })), q.on(document, "focus.coreui.button.data-api", '[data-toggle^="button"]', (function(t) {
        var e = t.target.closest(".btn");
        e && e.classList.add("focus")
    })), q.on(document, "blur.coreui.button.data-api", '[data-toggle^="button"]', (function(t) {
        var e = t.target.closest(".btn");
        e && e.classList.remove("focus")
    }));
    var it = w();
    if (it) {
        var ot = it.fn.button;
        it.fn.button = nt.jQueryInterface, it.fn.button.Constructor = nt, it.fn.button.noConflict = function() {
            return it.fn.button = ot, nt.jQueryInterface
        }
    }

    function rt(t) {
        return "true" === t || "false" !== t && (t === Number(t).toString() ? Number(t) : "" === t || "null" === t ? null : t)
    }

    function st(t) {
        return t.replace(/[A-Z]/g, (function(t) {
            return "-" + t.toLowerCase()
        }))
    }
    var at = {
            setDataAttribute: function(t, e, n) {
                t.setAttribute("data-" + st(e), n)
            },
            removeDataAttribute: function(t, e) {
                t.removeAttribute("data-" + st(e))
            },
            getDataAttributes: function(t) {
                if (!t) return {};
                var e = o({}, t.dataset);
                return Object.keys(e).forEach((function(t) {
                    e[t] = rt(e[t])
                })), e
            },
            getDataAttribute: function(t, e) {
                return rt(t.getAttribute("data-" + st(e)))
            },
            offset: function(t) {
                var e = t.getBoundingClientRect();
                return {
                    top: e.top + document.body.scrollTop,
                    left: e.left + document.body.scrollLeft
                }
            },
            position: function(t) {
                return {
                    top: t.offsetTop,
                    left: t.offsetLeft
                }
            },
            toggleClass: function(t, e) {
                t && (t.classList.contains(e) ? t.classList.remove(e) : t.classList.add(e))
            }
        },
        lt = "carousel",
        ct = "coreui.carousel",
        ut = "." + ct,
        ft = {
            interval: 5e3,
            keyboard: !0,
            slide: !1,
            pause: "hover",
            wrap: !0,
            touch: !0
        },
        dt = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            slide: "(boolean|string)",
            pause: "(string|boolean)",
            wrap: "boolean",
            touch: "boolean"
        },
        ht = "slid" + ut,
        pt = {
            TOUCH: "touch",
            PEN: "pen"
        },
        gt = function() {
            function t(t, e) {
                this._items = null, this._interval = null, this._activeElement = null, this._isPaused = !1, this._isSliding = !1, this.touchTimeout = null, this.touchStartX = 0, this.touchDeltaX = 0, this._config = this._getConfig(e), this._element = t, this._indicatorsElement = tt.findOne(".carousel-indicators", this._element), this._touchSupported = "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0, this._pointerEvent = Boolean(window.PointerEvent || window.MSPointerEvent), this._addEventListeners(), L(t, ct, this)
            }
            var n = t.prototype;
            return n.next = function() {
                this._isSliding || this._slide("next")
            }, n.nextWhenVisible = function() {
                !document.hidden && _(this._element) && this.next()
            }, n.prev = function() {
                this._isSliding || this._slide("prev")
            }, n.pause = function(t) {
                t || (this._isPaused = !0), tt.findOne(".carousel-item-next, .carousel-item-prev", this._element) && (p(this._element), this.cycle(!0)), clearInterval(this._interval), this._interval = null
            }, n.cycle = function(t) {
                t || (this._isPaused = !1), this._interval && (clearInterval(this._interval), this._interval = null), this._config && this._config.interval && !this._isPaused && (this._interval = setInterval((document.visibilityState ? this.nextWhenVisible : this.next).bind(this), this._config.interval))
            }, n.to = function(t) {
                var e = this;
                this._activeElement = tt.findOne(".active.carousel-item", this._element);
                var n = this._getItemIndex(this._activeElement);
                if (!(t > this._items.length - 1 || t < 0))
                    if (this._isSliding) q.one(this._element, ht, (function() {
                        return e.to(t)
                    }));
                    else {
                        if (n === t) return this.pause(), void this.cycle();
                        var i = t > n ? "next" : "prev";
                        this._slide(i, this._items[t])
                    }
            }, n.dispose = function() {
                q.off(this._element, ut), T(this._element, ct), this._items = null, this._config = null, this._element = null, this._interval = null, this._isPaused = null, this._isSliding = null, this._activeElement = null, this._indicatorsElement = null
            }, n._getConfig = function(t) {
                return t = o(o({}, ft), t), v(lt, t, dt), t
            }, n._handleSwipe = function() {
                var t = Math.abs(this.touchDeltaX);
                if (!(t <= 40)) {
                    var e = t / this.touchDeltaX;
                    this.touchDeltaX = 0, e > 0 && this.prev(), e < 0 && this.next()
                }
            }, n._addEventListeners = function() {
                var t = this;
                this._config.keyboard && q.on(this._element, "keydown.coreui.carousel", (function(e) {
                    return t._keydown(e)
                })), "hover" === this._config.pause && (q.on(this._element, "mouseenter.coreui.carousel", (function(e) {
                    return t.pause(e)
                })), q.on(this._element, "mouseleave.coreui.carousel", (function(e) {
                    return t.cycle(e)
                }))), this._config.touch && this._touchSupported && this._addTouchEventListeners()
            }, n._addTouchEventListeners = function() {
                var t = this,
                    e = function(e) {
                        t._pointerEvent && pt[e.pointerType.toUpperCase()] ? t.touchStartX = e.clientX : t._pointerEvent || (t.touchStartX = e.touches[0].clientX)
                    },
                    n = function(e) {
                        t._pointerEvent && pt[e.pointerType.toUpperCase()] && (t.touchDeltaX = e.clientX - t.touchStartX), t._handleSwipe(), "hover" === t._config.pause && (t.pause(), t.touchTimeout && clearTimeout(t.touchTimeout), t.touchTimeout = setTimeout((function(e) {
                            return t.cycle(e)
                        }), 500 + t._config.interval))
                    };
                tt.find(".carousel-item img", this._element).forEach((function(t) {
                    q.on(t, "dragstart.coreui.carousel", (function(t) {
                        return t.preventDefault()
                    }))
                })), this._pointerEvent ? (q.on(this._element, "pointerdown.coreui.carousel", (function(t) {
                    return e(t)
                })), q.on(this._element, "pointerup.coreui.carousel", (function(t) {
                    return n(t)
                })), this._element.classList.add("pointer-event")) : (q.on(this._element, "touchstart.coreui.carousel", (function(t) {
                    return e(t)
                })), q.on(this._element, "touchmove.coreui.carousel", (function(e) {
                    return function(e) {
                        e.touches && e.touches.length > 1 ? t.touchDeltaX = 0 : t.touchDeltaX = e.touches[0].clientX - t.touchStartX
                    }(e)
                })), q.on(this._element, "touchend.coreui.carousel", (function(t) {
                    return n(t)
                })))
            }, n._keydown = function(t) {
                if (!/input|textarea/i.test(t.target.tagName)) switch (t.key) {
                    case "ArrowLeft":
                        t.preventDefault(), this.prev();
                        break;
                    case "ArrowRight":
                        t.preventDefault(), this.next()
                }
            }, n._getItemIndex = function(t) {
                return this._items = t && t.parentNode ? tt.find(".carousel-item", t.parentNode) : [], this._items.indexOf(t)
            }, n._getItemByDirection = function(t, e) {
                var n = "next" === t,
                    i = "prev" === t,
                    o = this._getItemIndex(e),
                    r = this._items.length - 1;
                if ((i && 0 === o || n && o === r) && !this._config.wrap) return e;
                var s = (o + ("prev" === t ? -1 : 1)) % this._items.length;
                return -1 === s ? this._items[this._items.length - 1] : this._items[s]
            }, n._triggerSlideEvent = function(t, e) {
                var n = this._getItemIndex(t),
                    i = this._getItemIndex(tt.findOne(".active.carousel-item", this._element));
                return q.trigger(this._element, "slide.coreui.carousel", {
                    relatedTarget: t,
                    direction: e,
                    from: i,
                    to: n
                })
            }, n._setActiveIndicatorElement = function(t) {
                if (this._indicatorsElement) {
                    for (var e = tt.find(".active", this._indicatorsElement), n = 0; n < e.length; n++) e[n].classList.remove("active");
                    var i = this._indicatorsElement.children[this._getItemIndex(t)];
                    i && i.classList.add("active")
                }
            }, n._slide = function(t, e) {
                var n, i, o, r = this,
                    s = tt.findOne(".active.carousel-item", this._element),
                    a = this._getItemIndex(s),
                    l = e || s && this._getItemByDirection(t, s),
                    c = this._getItemIndex(l),
                    u = Boolean(this._interval);
                if ("next" === t ? (n = "carousel-item-left", i = "carousel-item-next", o = "left") : (n = "carousel-item-right", i = "carousel-item-prev", o = "right"), l && l.classList.contains("active")) this._isSliding = !1;
                else if (!this._triggerSlideEvent(l, o).defaultPrevented && s && l) {
                    if (this._isSliding = !0, u && this.pause(), this._setActiveIndicatorElement(l), this._element.classList.contains("slide")) {
                        l.classList.add(i), y(l), s.classList.add(n), l.classList.add(n);
                        var f = parseInt(l.getAttribute("data-interval"), 10);
                        f ? (this._config.defaultInterval = this._config.defaultInterval || this._config.interval, this._config.interval = f) : this._config.interval = this._config.defaultInterval || this._config.interval;
                        var d = h(s);
                        q.one(s, "transitionend", (function() {
                            l.classList.remove(n, i), l.classList.add("active"), s.classList.remove("active", i, n), r._isSliding = !1, setTimeout((function() {
                                q.trigger(r._element, ht, {
                                    relatedTarget: l,
                                    direction: o,
                                    from: a,
                                    to: c
                                })
                            }), 0)
                        })), m(s, d)
                    } else s.classList.remove("active"), l.classList.add("active"), this._isSliding = !1, q.trigger(this._element, ht, {
                        relatedTarget: l,
                        direction: o,
                        from: a,
                        to: c
                    });
                    u && this.cycle()
                }
            }, t.carouselInterface = function(e, n) {
                var i = k(e, ct),
                    r = o(o({}, ft), at.getDataAttributes(e));
                "object" == typeof n && (r = o(o({}, r), n));
                var s = "string" == typeof n ? n : r.slide;
                if (i || (i = new t(e, r)), "number" == typeof n) i.to(n);
                else if ("string" == typeof s) {
                    if ("undefined" == typeof i[s]) throw new TypeError('No method named "' + s + '"');
                    i[s]()
                } else r.interval && r.ride && (i.pause(), i.cycle())
            }, t.jQueryInterface = function(e) {
                return this.each((function() {
                    t.carouselInterface(this, e)
                }))
            }, t.dataApiClickHandler = function(e) {
                var n = d(this);
                if (n && n.classList.contains("carousel")) {
                    var i = o(o({}, at.getDataAttributes(n)), at.getDataAttributes(this)),
                        r = this.getAttribute("data-slide-to");
                    r && (i.interval = !1), t.carouselInterface(n, i), r && k(n, ct).to(r), e.preventDefault()
                }
            }, t.getInstance = function(t) {
                return k(t, ct)
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "3.2.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return ft
                }
            }]), t
        }();
    q.on(document, "click.coreui.carousel.data-api", "[data-slide], [data-slide-to]", gt.dataApiClickHandler), q.on(window, "load.coreui.carousel.data-api", (function() {
        for (var t = tt.find('[data-ride="carousel"]'), e = 0, n = t.length; e < n; e++) gt.carouselInterface(t[e], k(t[e], ct))
    }));
    var mt = w();
    if (mt) {
        var vt = mt.fn[lt];
        mt.fn[lt] = gt.jQueryInterface, mt.fn[lt].Constructor = gt, mt.fn[lt].noConflict = function() {
            return mt.fn[lt] = vt, gt.jQueryInterface
        }
    }
    var _t = "class-toggler",
        bt = "-sm,-md,-lg,-xl",
        yt = "-show",
        wt = !1,
        Et = "body",
        Lt = function() {
            function t(t) {
                this._element = t
            }
            var n = t.prototype;
            return n.toggle = function() {
                var t = this;
                this._getElementDataAttributes(this._element).forEach((function(e) {
                    var n, i = e.target,
                        o = e.toggle;
                    n = "_parent" === i || "parent" === i ? t._element.parentNode : document.querySelector(i), o.forEach((function(e) {
                        var o = e.className,
                            r = e.responsive,
                            s = e.postfix,
                            a = "undefined" == typeof e.breakpoints || null === e.breakpoints ? null : t._arrayFromString(e.breakpoints);
                        if (r) {
                            var l;
                            a.forEach((function(t) {
                                o.includes(t) && (l = t)
                            }));
                            var c = [];
                            "undefined" == typeof l ? c.push(o) : (c.push(o.replace("" + l + s, s)), a.splice(0, a.indexOf(l) + 1).forEach((function(t) {
                                c.push(o.replace("" + l + s, "" + t + s))
                            })));
                            var u = !1;
                            if (c.forEach((function(t) {
                                    n.classList.contains(t) && (u = !0)
                                })), u) c.forEach((function(t) {
                                n.classList.remove(t);
                                var e = new CustomEvent("classtoggle", {
                                    detail: {
                                        target: i,
                                        add: !1,
                                        className: t
                                    }
                                });
                                n.dispatchEvent(e)
                            }));
                            else {
                                n.classList.add(o);
                                var f = new CustomEvent("classtoggle", {
                                    detail: {
                                        target: i,
                                        add: !0,
                                        className: o
                                    }
                                });
                                n.dispatchEvent(f)
                            }
                        } else {
                            var d = n.classList.toggle(o),
                                h = new CustomEvent("classtoggle", {
                                    detail: {
                                        target: i,
                                        add: d,
                                        className: o
                                    }
                                });
                            n.dispatchEvent(h)
                        }
                    }))
                }))
            }, n._arrayFromString = function(t) {
                return t.replace(/ /g, "").split(",")
            }, n._isArray = function(t) {
                try {
                    return JSON.parse(t.replace(/'/g, '"')), !0
                } catch (t) {
                    return !1
                }
            }, n._convertToArray = function(t) {
                return JSON.parse(t.replace(/'/g, '"'))
            }, n._getDataAttributes = function(t, e) {
                var n = t[e];
                return this._isArray(n) ? this._convertToArray(n) : n
            }, n._getToggleDetails = function(t, e, n, i) {
                var o = function(t, e, n, i) {
                        void 0 === e && (e = wt), this.className = t, this.responsive = e, this.breakpoints = n, this.postfix = i
                    },
                    r = [];
                return Array.isArray(t) ? t.forEach((function(t, s) {
                    e = Array.isArray(e) ? e[s] : e, n = e ? Array.isArray(n) ? n[s] : n : null, i = e ? Array.isArray(i) ? i[s] : i : null, r.push(new o(t, e, n, i))
                })) : (n = e ? n : null, i = e ? i : null, r.push(new o(t, e, n, i))), r
            }, n._ifArray = function(t, e) {
                return Array.isArray(t) ? t[e] : t
            }, n._getElementDataAttributes = function(t) {
                var e = this,
                    n = t.dataset,
                    i = "undefined" == typeof n.target ? Et : this._getDataAttributes(n, "target"),
                    o = "undefined" == typeof n.class ? "undefined" : this._getDataAttributes(n, "class"),
                    r = "undefined" == typeof n.responsive ? wt : this._getDataAttributes(n, "responsive"),
                    s = "undefined" == typeof n.breakpoints ? bt : this._getDataAttributes(n, "breakpoints"),
                    a = "undefined" == typeof n.postfix ? yt : this._getDataAttributes(n, "postfix"),
                    l = [],
                    c = function(t, e) {
                        this.target = t, this.toggle = e
                    };
                return Array.isArray(i) ? i.forEach((function(t, n) {
                    l.push(new c(t, e._getToggleDetails(e._ifArray(o, n), e._ifArray(r, n), e._ifArray(s, n), e._ifArray(a, n))))
                })) : l.push(new c(i, this._getToggleDetails(o, r, s, a))), l
            }, t._classTogglerInterface = function(e, n) {
                var i = k(e, "coreui.class-toggler");
                if (i || (i = new t(e, "object" == typeof n && n)), "string" == typeof n) {
                    if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                    i[n]()
                }
            }, t.jQueryInterface = function(e) {
                return this.each((function() {
                    t._classTogglerInterface(this, e)
                }))
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "3.2.0"
                }
            }]), t
        }();
    q.on(document, "click.coreui.class-toggler.data-api", ".c-class-toggler", (function(t) {
        t.preventDefault();
        var e = t.target;
        e.classList.contains("c-class-toggler") || (e = e.closest(".c-class-toggler")), Lt._classTogglerInterface(e, "toggle")
    }));
    var kt = w();
    if (kt) {
        var Tt = kt.fn[_t];
        kt.fn[_t] = Lt.jQueryInterface, kt.fn[_t].Constructor = Lt, kt.fn[_t].noConflict = function() {
            return kt.fn[_t] = Tt, Lt.jQueryInterface
        }
    }
    var At = "collapse",
        Ot = "coreui.collapse",
        St = {
            toggle: !0,
            parent: ""
        },
        Ct = {
            toggle: "boolean",
            parent: "(string|element)"
        },
        Dt = function() {
            function t(t, e) {
                this._isTransitioning = !1, this._element = t, this._config = this._getConfig(e), this._triggerArray = tt.find('[data-toggle="collapse"][href="#' + t.id + '"],[data-toggle="collapse"][data-target="#' + t.id + '"]');
                for (var n = tt.find('[data-toggle="collapse"]'), i = 0, o = n.length; i < o; i++) {
                    var r = n[i],
                        s = f(r),
                        a = tt.find(s).filter((function(e) {
                            return e === t
                        }));
                    null !== s && a.length && (this._selector = s, this._triggerArray.push(r))
                }
                this._parent = this._config.parent ? this._getParent() : null, this._config.parent || this._addAriaAndCollapsedClass(this._element, this._triggerArray), this._config.toggle && this.toggle(), L(t, Ot, this)
            }
            var n = t.prototype;
            return n.toggle = function() {
                this._element.classList.contains("show") ? this.hide() : this.show()
            }, n.show = function() {
                var e = this;
                if (!this._isTransitioning && !this._element.classList.contains("show")) {
                    var n, i;
                    this._parent && 0 === (n = tt.find(".show, .collapsing", this._parent).filter((function(t) {
                        return "string" == typeof e._config.parent ? t.getAttribute("data-parent") === e._config.parent : t.classList.contains("collapse")
                    }))).length && (n = null);
                    var o = tt.findOne(this._selector);
                    if (n) {
                        var r = n.filter((function(t) {
                            return o !== t
                        }));
                        if ((i = r[0] ? k(r[0], Ot) : null) && i._isTransitioning) return
                    }
                    if (!q.trigger(this._element, "show.coreui.collapse").defaultPrevented) {
                        n && n.forEach((function(e) {
                            o !== e && t.collapseInterface(e, "hide"), i || L(e, Ot, null)
                        }));
                        var s = this._getDimension();
                        this._element.classList.remove("collapse"), this._element.classList.add("collapsing"), this._element.style[s] = 0, this._triggerArray.length && this._triggerArray.forEach((function(t) {
                            t.classList.remove("collapsed"), t.setAttribute("aria-expanded", !0)
                        })), this.setTransitioning(!0);
                        var a = "scroll" + (s[0].toUpperCase() + s.slice(1)),
                            l = h(this._element);
                        q.one(this._element, "transitionend", (function() {
                            e._element.classList.remove("collapsing"), e._element.classList.add("collapse", "show"), e._element.style[s] = "", e.setTransitioning(!1), q.trigger(e._element, "shown.coreui.collapse")
                        })), m(this._element, l), this._element.style[s] = this._element[a] + "px"
                    }
                }
            }, n.hide = function() {
                var t = this;
                if (!this._isTransitioning && this._element.classList.contains("show") && !q.trigger(this._element, "hide.coreui.collapse").defaultPrevented) {
                    var e = this._getDimension();
                    this._element.style[e] = this._element.getBoundingClientRect()[e] + "px", y(this._element), this._element.classList.add("collapsing"), this._element.classList.remove("collapse", "show");
                    var n = this._triggerArray.length;
                    if (n > 0)
                        for (var i = 0; i < n; i++) {
                            var o = this._triggerArray[i],
                                r = d(o);
                            r && !r.classList.contains("show") && (o.classList.add("collapsed"), o.setAttribute("aria-expanded", !1))
                        }
                    this.setTransitioning(!0);
                    this._element.style[e] = "";
                    var s = h(this._element);
                    q.one(this._element, "transitionend", (function() {
                        t.setTransitioning(!1), t._element.classList.remove("collapsing"), t._element.classList.add("collapse"), q.trigger(t._element, "hidden.coreui.collapse")
                    })), m(this._element, s)
                }
            }, n.setTransitioning = function(t) {
                this._isTransitioning = t
            }, n.dispose = function() {
                T(this._element, Ot), this._config = null, this._parent = null, this._element = null, this._triggerArray = null, this._isTransitioning = null
            }, n._getConfig = function(t) {
                return (t = o(o({}, St), t)).toggle = Boolean(t.toggle), v(At, t, Ct), t
            }, n._getDimension = function() {
                return this._element.classList.contains("width") ? "width" : "height"
            }, n._getParent = function() {
                var t = this,
                    e = this._config.parent;
                g(e) ? "undefined" == typeof e.jquery && "undefined" == typeof e[0] || (e = e[0]) : e = tt.findOne(e);
                var n = '[data-toggle="collapse"][data-parent="' + e + '"]';
                return tt.find(n, e).forEach((function(e) {
                    var n = d(e);
                    t._addAriaAndCollapsedClass(n, [e])
                })), e
            }, n._addAriaAndCollapsedClass = function(t, e) {
                if (t) {
                    var n = t.classList.contains("show");
                    e.length && e.forEach((function(t) {
                        n ? t.classList.remove("collapsed") : t.classList.add("collapsed"), t.setAttribute("aria-expanded", n)
                    }))
                }
            }, t.collapseInterface = function(e, n) {
                var i = k(e, Ot),
                    r = o(o(o({}, St), at.getDataAttributes(e)), "object" == typeof n && n ? n : {});
                if (!i && r.toggle && "string" == typeof n && /show|hide/.test(n) && (r.toggle = !1), i || (i = new t(e, r)), "string" == typeof n) {
                    if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                    i[n]()
                }
            }, t.jQueryInterface = function(e) {
                return this.each((function() {
                    t.collapseInterface(this, e)
                }))
            }, t.getInstance = function(t) {
                return k(t, Ot)
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "3.2.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return St
                }
            }]), t
        }();
    q.on(document, "click.coreui.collapse.data-api", '[data-toggle="collapse"]', (function(t) {
        "A" === t.target.tagName && t.preventDefault();
        var e = at.getDataAttributes(this),
            n = f(this);
        tt.find(n).forEach((function(t) {
            var n, i = k(t, Ot);
            i ? (null === i._parent && "string" == typeof e.parent && (i._config.parent = e.parent, i._parent = i._getParent()), n = "toggle") : n = e, Dt.collapseInterface(t, n)
        }))
    }));
    var xt = w();
    if (xt) {
        var jt = xt.fn[At];
        xt.fn[At] = Dt.jQueryInterface, xt.fn[At].Constructor = Dt, xt.fn[At].noConflict = function() {
            return xt.fn[At] = jt, Dt.jQueryInterface
        }
    }

    function Nt(t) {
        var e = t.getBoundingClientRect();
        return {
            width: e.width,
            height: e.height,
            top: e.top,
            right: e.right,
            bottom: e.bottom,
            left: e.left,
            x: e.left,
            y: e.top
        }
    }

    function It(t) {
        if ("[object Window]" !== t.toString()) {
            var e = t.ownerDocument;
            return e ? e.defaultView : window
        }
        return t
    }

    function Pt(t) {
        var e = It(t);
        return {
            scrollLeft: e.pageXOffset,
            scrollTop: e.pageYOffset
        }
    }

    function Rt(t) {
        return t instanceof It(t).Element || t instanceof Element
    }

    function Mt(t) {
        return t instanceof It(t).HTMLElement || t instanceof HTMLElement
    }

    function Ht(t) {
        return t ? (t.nodeName || "").toLowerCase() : null
    }

    function Wt(t) {
        return (Rt(t) ? t.ownerDocument : t.document).documentElement
    }

    function Yt(t) {
        return Nt(Wt(t)).left + Pt(t).scrollLeft
    }

    function Xt(t) {
        return It(t).getComputedStyle(t)
    }

    function Bt(t) {
        var e = Xt(t),
            n = e.overflow,
            i = e.overflowX,
            o = e.overflowY;
        return /auto|scroll|overlay|hidden/.test(n + o + i)
    }

    function Ut(t, e, n) {
        void 0 === n && (n = !1);
        var i, o = Wt(e),
            r = Nt(t),
            s = {
                scrollLeft: 0,
                scrollTop: 0
            },
            a = {
                x: 0,
                y: 0
            };
        return n || (("body" !== Ht(e) || Bt(o)) && (s = (i = e) !== It(i) && Mt(i) ? function(t) {
            return {
                scrollLeft: t.scrollLeft,
                scrollTop: t.scrollTop
            }
        }(i) : Pt(i)), Mt(e) ? ((a = Nt(e)).x += e.clientLeft, a.y += e.clientTop) : o && (a.x = Yt(o))), {
            x: r.left + s.scrollLeft - a.x,
            y: r.top + s.scrollTop - a.y,
            width: r.width,
            height: r.height
        }
    }

    function qt(t) {
        return {
            x: t.offsetLeft,
            y: t.offsetTop,
            width: t.offsetWidth,
            height: t.offsetHeight
        }
    }

    function Ft(t) {
        return "html" === Ht(t) ? t : t.assignedSlot || t.parentNode || t.host || Wt(t)
    }

    function Qt(t, e) {
        void 0 === e && (e = []);
        var n = function t(e) {
                return ["html", "body", "#document"].indexOf(Ht(e)) >= 0 ? e.ownerDocument.body : Mt(e) && Bt(e) ? e : t(Ft(e))
            }(t),
            i = "body" === Ht(n),
            o = It(n),
            r = i ? [o].concat(o.visualViewport || [], Bt(n) ? n : []) : n,
            s = e.concat(r);
        return i ? s : s.concat(Qt(Ft(r)))
    }

    function zt(t) {
        return ["table", "td", "th"].indexOf(Ht(t)) >= 0
    }

    function Vt(t) {
        return Mt(t) && "fixed" !== Xt(t).position ? t.offsetParent : null
    }

    function Kt(t) {
        for (var e = It(t), n = Vt(t); n && zt(n);) n = Vt(n);
        return n && "body" === Ht(n) && "static" === Xt(n).position ? e : n || e
    }
    var $t = "top",
        Jt = "bottom",
        Gt = "right",
        Zt = "left",
        te = [$t, Jt, Gt, Zt],
        ee = te.reduce((function(t, e) {
            return t.concat([e + "-start", e + "-end"])
        }), []),
        ne = [].concat(te, ["auto"]).reduce((function(t, e) {
            return t.concat([e, e + "-start", e + "-end"])
        }), []),
        ie = ["beforeRead", "read", "afterRead", "beforeMain", "main", "afterMain", "beforeWrite", "write", "afterWrite"];

    function oe(t) {
        var e = new Map,
            n = new Set,
            i = [];
        return t.forEach((function(t) {
            e.set(t.name, t)
        })), t.forEach((function(t) {
            n.has(t.name) || function t(o) {
                n.add(o.name), [].concat(o.requires || [], o.requiresIfExists || []).forEach((function(i) {
                    if (!n.has(i)) {
                        var o = e.get(i);
                        o && t(o)
                    }
                })), i.push(o)
            }(t)
        })), i
    }

    function re(t) {
        return t.split("-")[0]
    }
    var se = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };

    function ae() {
        for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++) e[n] = arguments[n];
        return !e.some((function(t) {
            return !(t && "function" == typeof t.getBoundingClientRect)
        }))
    }

    function le(t) {
        void 0 === t && (t = {});
        var e = t,
            n = e.defaultModifiers,
            i = void 0 === n ? [] : n,
            o = e.defaultOptions,
            r = void 0 === o ? se : o;
        return function(t, e, n) {
            void 0 === n && (n = r);
            var o, s, a = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, se, {}, r),
                    modifiersData: {},
                    elements: {
                        reference: t,
                        popper: e
                    },
                    attributes: {},
                    styles: {}
                },
                l = [],
                c = !1,
                u = {
                    state: a,
                    setOptions: function(n) {
                        f(), a.options = Object.assign({}, r, {}, a.options, {}, n), a.scrollParents = {
                            reference: Rt(t) ? Qt(t) : t.contextElement ? Qt(t.contextElement) : [],
                            popper: Qt(e)
                        };
                        var o, s, c = function(t) {
                            var e = oe(t);
                            return ie.reduce((function(t, n) {
                                return t.concat(e.filter((function(t) {
                                    return t.phase === n
                                })))
                            }), [])
                        }((o = [].concat(i, a.options.modifiers), s = o.reduce((function(t, e) {
                            var n = t[e.name];
                            return t[e.name] = n ? Object.assign({}, n, {}, e, {
                                options: Object.assign({}, n.options, {}, e.options),
                                data: Object.assign({}, n.data, {}, e.data)
                            }) : e, t
                        }), {}), Object.keys(s).map((function(t) {
                            return s[t]
                        }))));
                        return a.orderedModifiers = c.filter((function(t) {
                            return t.enabled
                        })), a.orderedModifiers.forEach((function(t) {
                            var e = t.name,
                                n = t.options,
                                i = void 0 === n ? {} : n,
                                o = t.effect;
                            if ("function" == typeof o) {
                                var r = o({
                                    state: a,
                                    name: e,
                                    instance: u,
                                    options: i
                                });
                                l.push(r || function() {})
                            }
                        })), u.update()
                    },
                    forceUpdate: function() {
                        if (!c) {
                            var t = a.elements,
                                e = t.reference,
                                n = t.popper;
                            if (ae(e, n)) {
                                a.rects = {
                                    reference: Ut(e, Kt(n), "fixed" === a.options.strategy),
                                    popper: qt(n)
                                }, a.reset = !1, a.placement = a.options.placement, a.orderedModifiers.forEach((function(t) {
                                    return a.modifiersData[t.name] = Object.assign({}, t.data)
                                }));
                                for (var i = 0; i < a.orderedModifiers.length; i++)
                                    if (!0 !== a.reset) {
                                        var o = a.orderedModifiers[i],
                                            r = o.fn,
                                            s = o.options,
                                            l = void 0 === s ? {} : s,
                                            f = o.name;
                                        "function" == typeof r && (a = r({
                                            state: a,
                                            options: l,
                                            name: f,
                                            instance: u
                                        }) || a)
                                    } else a.reset = !1, i = -1
                            }
                        }
                    },
                    update: (o = function() {
                        return new Promise((function(t) {
                            u.forceUpdate(), t(a)
                        }))
                    }, function() {
                        return s || (s = new Promise((function(t) {
                            Promise.resolve().then((function() {
                                s = void 0, t(o())
                            }))
                        }))), s
                    }),
                    destroy: function() {
                        f(), c = !0
                    }
                };
            if (!ae(t, e)) return u;

            function f() {
                l.forEach((function(t) {
                    return t()
                })), l = []
            }
            return u.setOptions(n).then((function(t) {
                !c && n.onFirstUpdate && n.onFirstUpdate(t)
            })), u
        }
    }
    var ce = {
        passive: !0
    };

    function ue(t) {
        return t.split("-")[1]
    }

    function fe(t) {
        return ["top", "bottom"].indexOf(t) >= 0 ? "x" : "y"
    }

    function de(t) {
        var e, n = t.reference,
            i = t.element,
            o = t.placement,
            r = o ? re(o) : null,
            s = o ? ue(o) : null,
            a = n.x + n.width / 2 - i.width / 2,
            l = n.y + n.height / 2 - i.height / 2;
        switch (r) {
            case $t:
                e = {
                    x: a,
                    y: n.y - i.height
                };
                break;
            case Jt:
                e = {
                    x: a,
                    y: n.y + n.height
                };
                break;
            case Gt:
                e = {
                    x: n.x + n.width,
                    y: l
                };
                break;
            case Zt:
                e = {
                    x: n.x - i.width,
                    y: l
                };
                break;
            default:
                e = {
                    x: n.x,
                    y: n.y
                }
        }
        var c = r ? fe(r) : null;
        if (null != c) {
            var u = "y" === c ? "height" : "width";
            switch (s) {
                case "start":
                    e[c] = Math.floor(e[c]) - Math.floor(n[u] / 2 - i[u] / 2);
                    break;
                case "end":
                    e[c] = Math.floor(e[c]) + Math.ceil(n[u] / 2 - i[u] / 2)
            }
        }
        return e
    }
    var he = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };

    function pe(t) {
        var e, n = t.popper,
            i = t.popperRect,
            o = t.placement,
            r = t.offsets,
            s = t.position,
            a = t.gpuAcceleration,
            l = t.adaptive,
            c = function(t) {
                var e = t.x,
                    n = t.y,
                    i = window.devicePixelRatio || 1;
                return {
                    x: Math.round(e * i) / i || 0,
                    y: Math.round(n * i) / i || 0
                }
            }(r),
            u = c.x,
            f = c.y,
            d = r.hasOwnProperty("x"),
            h = r.hasOwnProperty("y"),
            p = Zt,
            g = $t,
            m = window;
        if (l) {
            var v = Kt(n);
            v === It(n) && (v = Wt(n)), o === $t && (g = Jt, f -= v.clientHeight - i.height, f *= a ? 1 : -1), o === Zt && (p = Gt, u -= v.clientWidth - i.width, u *= a ? 1 : -1)
        }
        var _, b = Object.assign({
            position: s
        }, l && he);
        return a ? Object.assign({}, b, ((_ = {})[g] = h ? "0" : "", _[p] = d ? "0" : "", _.transform = (m.devicePixelRatio || 1) < 2 ? "translate(" + u + "px, " + f + "px)" : "translate3d(" + u + "px, " + f + "px, 0)", _)) : Object.assign({}, b, ((e = {})[g] = h ? f + "px" : "", e[p] = d ? u + "px" : "", e.transform = "", e))
    }
    var ge = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };

    function me(t) {
        return t.replace(/left|right|bottom|top/g, (function(t) {
            return ge[t]
        }))
    }
    var ve = {
        start: "end",
        end: "start"
    };

    function _e(t) {
        return t.replace(/start|end/g, (function(t) {
            return ve[t]
        }))
    }

    function be(t) {
        return parseFloat(t) || 0
    }

    function ye(t) {
        var e = It(t),
            n = function(t) {
                var e = Mt(t) ? Xt(t) : {};
                return {
                    top: be(e.borderTopWidth),
                    right: be(e.borderRightWidth),
                    bottom: be(e.borderBottomWidth),
                    left: be(e.borderLeftWidth)
                }
            }(t),
            i = "html" === Ht(t),
            o = Yt(t),
            r = t.clientWidth + n.right,
            s = t.clientHeight + n.bottom;
        return i && e.innerHeight - t.clientHeight > 50 && (s = e.innerHeight - n.bottom), {
            top: i ? 0 : t.clientTop,
            right: t.clientLeft > n.left ? n.right : i ? e.innerWidth - r - o : t.offsetWidth - r,
            bottom: i ? e.innerHeight - s : t.offsetHeight - s,
            left: i ? o : t.clientLeft
        }
    }

    function we(t, e) {
        var n = Boolean(e.getRootNode && e.getRootNode().host);
        if (t.contains(e)) return !0;
        if (n) {
            var i = e;
            do {
                if (i && t.isSameNode(i)) return !0;
                i = i.parentNode || i.host
            } while (i)
        }
        return !1
    }

    function Ee(t) {
        return Object.assign({}, t, {
            left: t.x,
            top: t.y,
            right: t.x + t.width,
            bottom: t.y + t.height
        })
    }

    function Le(t, e) {
        return "viewport" === e ? Ee(function(t) {
            var e = It(t),
                n = e.visualViewport,
                i = e.innerWidth,
                o = e.innerHeight;
            return n && /iPhone|iPod|iPad/.test(navigator.platform) && (i = n.width, o = n.height), {
                width: i,
                height: o,
                x: 0,
                y: 0
            }
        }(t)) : Mt(e) ? Nt(e) : Ee(function(t) {
            var e = It(t),
                n = Pt(t),
                i = Ut(Wt(t), e);
            return i.height = Math.max(i.height, e.innerHeight), i.width = Math.max(i.width, e.innerWidth), i.x = -n.scrollLeft, i.y = -n.scrollTop, i
        }(Wt(t)))
    }

    function ke(t, e, n) {
        var i = "clippingParents" === e ? function(t) {
                var e = Qt(t),
                    n = ["absolute", "fixed"].indexOf(Xt(t).position) >= 0 && Mt(t) ? Kt(t) : t;
                return Rt(n) ? e.filter((function(t) {
                    return Rt(t) && we(t, n)
                })) : []
            }(t) : [].concat(e),
            o = [].concat(i, [n]),
            r = o[0],
            s = o.reduce((function(e, n) {
                var i = Le(t, n),
                    o = ye(Mt(n) ? n : Wt(t));
                return e.top = Math.max(i.top + o.top, e.top), e.right = Math.min(i.right - o.right, e.right), e.bottom = Math.min(i.bottom - o.bottom, e.bottom), e.left = Math.max(i.left + o.left, e.left), e
            }), Le(t, r));
        return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s
    }

    function Te(t) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, {}, t)
    }

    function Ae(t, e) {
        return e.reduce((function(e, n) {
            return e[n] = t, e
        }), {})
    }

    function Oe(t, e) {
        void 0 === e && (e = {});
        var n = e,
            i = n.placement,
            o = void 0 === i ? t.placement : i,
            r = n.boundary,
            s = void 0 === r ? "clippingParents" : r,
            a = n.rootBoundary,
            l = void 0 === a ? "viewport" : a,
            c = n.elementContext,
            u = void 0 === c ? "popper" : c,
            f = n.altBoundary,
            d = void 0 !== f && f,
            h = n.padding,
            p = void 0 === h ? 0 : h,
            g = Te("number" != typeof p ? p : Ae(p, te)),
            m = "popper" === u ? "reference" : "popper",
            v = t.elements.reference,
            _ = t.rects.popper,
            b = t.elements[d ? m : u],
            y = ke(Rt(b) ? b : b.contextElement || Wt(t.elements.popper), s, l),
            w = Nt(v),
            E = de({
                reference: w,
                element: _,
                strategy: "absolute",
                placement: o
            }),
            L = Ee(Object.assign({}, _, {}, E)),
            k = "popper" === u ? L : w,
            T = {
                top: y.top - k.top + g.top,
                bottom: k.bottom - y.bottom + g.bottom,
                left: y.left - k.left + g.left,
                right: k.right - y.right + g.right
            },
            A = t.modifiersData.offset;
        if ("popper" === u && A) {
            var O = A[o];
            Object.keys(T).forEach((function(t) {
                var e = [Gt, Jt].indexOf(t) >= 0 ? 1 : -1,
                    n = [$t, Jt].indexOf(t) >= 0 ? "y" : "x";
                T[t] += O[n] * e
            }))
        }
        return T
    }

    function Se(t, e) {
        void 0 === e && (e = {});
        var n = e,
            i = n.placement,
            o = n.boundary,
            r = n.rootBoundary,
            s = n.padding,
            a = n.flipVariations,
            l = n.allowedAutoPlacements,
            c = void 0 === l ? ne : l,
            u = ue(i),
            f = (u ? a ? ee : ee.filter((function(t) {
                return ue(t) === u
            })) : te).filter((function(t) {
                return c.indexOf(t) >= 0
            })).reduce((function(e, n) {
                return e[n] = Oe(t, {
                    placement: n,
                    boundary: o,
                    rootBoundary: r,
                    padding: s
                })[re(n)], e
            }), {});
        return Object.keys(f).sort((function(t, e) {
            return f[t] - f[e]
        }))
    }

    function Ce(t, e, n) {
        return Math.max(t, Math.min(e, n))
    }

    function De(t, e, n) {
        return void 0 === n && (n = {
            x: 0,
            y: 0
        }), {
            top: t.top - e.height - n.y,
            right: t.right - e.width + n.x,
            bottom: t.bottom - e.height + n.y,
            left: t.left - e.width - n.x
        }
    }

    function xe(t) {
        return [$t, Gt, Jt, Zt].some((function(e) {
            return t[e] >= 0
        }))
    }
    var je = le({
            defaultModifiers: [{
                name: "eventListeners",
                enabled: !0,
                phase: "write",
                fn: function() {},
                effect: function(t) {
                    var e = t.state,
                        n = t.instance,
                        i = t.options,
                        o = i.scroll,
                        r = void 0 === o || o,
                        s = i.resize,
                        a = void 0 === s || s,
                        l = It(e.elements.popper),
                        c = [].concat(e.scrollParents.reference, e.scrollParents.popper);
                    return r && c.forEach((function(t) {
                            t.addEventListener("scroll", n.update, ce)
                        })), a && l.addEventListener("resize", n.update, ce),
                        function() {
                            r && c.forEach((function(t) {
                                t.removeEventListener("scroll", n.update, ce)
                            })), a && l.removeEventListener("resize", n.update, ce)
                        }
                },
                data: {}
            }, {
                name: "popperOffsets",
                enabled: !0,
                phase: "read",
                fn: function(t) {
                    var e = t.state,
                        n = t.name;
                    e.modifiersData[n] = de({
                        reference: e.rects.reference,
                        element: e.rects.popper,
                        strategy: "absolute",
                        placement: e.placement
                    })
                },
                data: {}
            }, {
                name: "computeStyles",
                enabled: !0,
                phase: "beforeWrite",
                fn: function(t) {
                    var e = t.state,
                        n = t.options,
                        i = n.gpuAcceleration,
                        o = void 0 === i || i,
                        r = n.adaptive,
                        s = void 0 === r || r,
                        a = {
                            placement: re(e.placement),
                            popper: e.elements.popper,
                            popperRect: e.rects.popper,
                            gpuAcceleration: o
                        };
                    null != e.modifiersData.popperOffsets && (e.styles.popper = Object.assign({}, e.styles.popper, {}, pe(Object.assign({}, a, {
                        offsets: e.modifiersData.popperOffsets,
                        position: e.options.strategy,
                        adaptive: s
                    })))), null != e.modifiersData.arrow && (e.styles.arrow = Object.assign({}, e.styles.arrow, {}, pe(Object.assign({}, a, {
                        offsets: e.modifiersData.arrow,
                        position: "absolute",
                        adaptive: !1
                    })))), e.attributes.popper = Object.assign({}, e.attributes.popper, {
                        "data-popper-placement": e.placement
                    })
                },
                data: {}
            }, {
                name: "applyStyles",
                enabled: !0,
                phase: "write",
                fn: function(t) {
                    var e = t.state;
                    Object.keys(e.elements).forEach((function(t) {
                        var n = e.styles[t] || {},
                            i = e.attributes[t] || {},
                            o = e.elements[t];
                        Mt(o) && Ht(o) && (Object.assign(o.style, n), Object.keys(i).forEach((function(t) {
                            var e = i[t];
                            !1 === e ? o.removeAttribute(t) : o.setAttribute(t, !0 === e ? "" : e)
                        })))
                    }))
                },
                effect: function(t) {
                    var e = t.state,
                        n = {
                            popper: {
                                position: e.options.strategy,
                                left: "0",
                                top: "0",
                                margin: "0"
                            },
                            arrow: {
                                position: "absolute"
                            },
                            reference: {}
                        };
                    return Object.assign(e.elements.popper.style, n.popper), e.elements.arrow && Object.assign(e.elements.arrow.style, n.arrow),
                        function() {
                            Object.keys(e.elements).forEach((function(t) {
                                var i = e.elements[t],
                                    o = e.attributes[t] || {},
                                    r = Object.keys(e.styles.hasOwnProperty(t) ? e.styles[t] : n[t]).reduce((function(t, e) {
                                        return t[e] = "", t
                                    }), {});
                                Mt(i) && Ht(i) && (Object.assign(i.style, r), Object.keys(o).forEach((function(t) {
                                    i.removeAttribute(t)
                                })))
                            }))
                        }
                },
                requires: ["computeStyles"]
            }, {
                name: "offset",
                enabled: !0,
                phase: "main",
                requires: ["popperOffsets"],
                fn: function(t) {
                    var e = t.state,
                        n = t.options,
                        i = t.name,
                        o = n.offset,
                        r = void 0 === o ? [0, 0] : o,
                        s = ne.reduce((function(t, n) {
                            return t[n] = function(t, e, n) {
                                var i = re(t),
                                    o = [Zt, $t].indexOf(i) >= 0 ? -1 : 1,
                                    r = "function" == typeof n ? n(Object.assign({}, e, {
                                        placement: t
                                    })) : n,
                                    s = r[0],
                                    a = r[1];
                                return s = s || 0, a = (a || 0) * o, [Zt, Gt].indexOf(i) >= 0 ? {
                                    x: a,
                                    y: s
                                } : {
                                    x: s,
                                    y: a
                                }
                            }(n, e.rects, r), t
                        }), {}),
                        a = s[e.placement],
                        l = a.x,
                        c = a.y;
                    null != e.modifiersData.popperOffsets && (e.modifiersData.popperOffsets.x += l, e.modifiersData.popperOffsets.y += c), e.modifiersData[i] = s
                }
            }, {
                name: "flip",
                enabled: !0,
                phase: "main",
                fn: function(t) {
                    var e = t.state,
                        n = t.options,
                        i = t.name;
                    if (!e.modifiersData[i]._skip) {
                        for (var o = n.mainAxis, r = void 0 === o || o, s = n.altAxis, a = void 0 === s || s, l = n.fallbackPlacements, c = n.padding, u = n.boundary, f = n.rootBoundary, d = n.altBoundary, h = n.flipVariations, p = void 0 === h || h, g = n.allowedAutoPlacements, m = e.options.placement, v = re(m), _ = l || (v === m || !p ? [me(m)] : function(t) {
                                if ("auto" === re(t)) return [];
                                var e = me(t);
                                return [_e(t), e, _e(e)]
                            }(m)), b = [m].concat(_).reduce((function(t, n) {
                                return t.concat("auto" === re(n) ? Se(e, {
                                    placement: n,
                                    boundary: u,
                                    rootBoundary: f,
                                    padding: c,
                                    flipVariations: p,
                                    allowedAutoPlacements: g
                                }) : n)
                            }), []), y = e.rects.reference, w = e.rects.popper, E = new Map, L = !0, k = b[0], T = 0; T < b.length; T++) {
                            var A = b[T],
                                O = re(A),
                                S = "start" === ue(A),
                                C = [$t, Jt].indexOf(O) >= 0,
                                D = C ? "width" : "height",
                                x = Oe(e, {
                                    placement: A,
                                    boundary: u,
                                    rootBoundary: f,
                                    altBoundary: d,
                                    padding: c
                                }),
                                j = C ? S ? Gt : Zt : S ? Jt : $t;
                            y[D] > w[D] && (j = me(j));
                            var N = me(j),
                                I = [];
                            if (r && I.push(x[O] <= 0), a && I.push(x[j] <= 0, x[N] <= 0), I.every((function(t) {
                                    return t
                                }))) {
                                k = A, L = !1;
                                break
                            }
                            E.set(A, I)
                        }
                        if (L)
                            for (var P = function(t) {
                                    var e = b.find((function(e) {
                                        var n = E.get(e);
                                        if (n) return n.slice(0, t).every((function(t) {
                                            return t
                                        }))
                                    }));
                                    if (e) return k = e, "break"
                                }, R = p ? 3 : 1; R > 0; R--) {
                                if ("break" === P(R)) break
                            }
                        e.placement !== k && (e.modifiersData[i]._skip = !0, e.placement = k, e.reset = !0)
                    }
                },
                requiresIfExists: ["offset"],
                data: {
                    _skip: !1
                }
            }, {
                name: "preventOverflow",
                enabled: !0,
                phase: "main",
                fn: function(t) {
                    var e = t.state,
                        n = t.options,
                        i = t.name,
                        o = n.mainAxis,
                        r = void 0 === o || o,
                        s = n.altAxis,
                        a = void 0 !== s && s,
                        l = n.boundary,
                        c = n.rootBoundary,
                        u = n.altBoundary,
                        f = n.padding,
                        d = n.tether,
                        h = void 0 === d || d,
                        p = n.tetherOffset,
                        g = void 0 === p ? 0 : p,
                        m = Oe(e, {
                            boundary: l,
                            rootBoundary: c,
                            padding: f,
                            altBoundary: u
                        }),
                        v = re(e.placement),
                        _ = ue(e.placement),
                        b = !_,
                        y = fe(v),
                        w = "x" === y ? "y" : "x",
                        E = e.modifiersData.popperOffsets,
                        L = e.rects.reference,
                        k = e.rects.popper,
                        T = "function" == typeof g ? g(Object.assign({}, e.rects, {
                            placement: e.placement
                        })) : g,
                        A = {
                            x: 0,
                            y: 0
                        };
                    if (E) {
                        if (r) {
                            var O = "y" === y ? $t : Zt,
                                S = "y" === y ? Jt : Gt,
                                C = "y" === y ? "height" : "width",
                                D = E[y],
                                x = E[y] + m[O],
                                j = E[y] - m[S],
                                N = h ? -k[C] / 2 : 0,
                                I = "start" === _ ? L[C] : k[C],
                                P = "start" === _ ? -k[C] : -L[C],
                                R = e.elements.arrow,
                                M = h && R ? qt(R) : {
                                    width: 0,
                                    height: 0
                                },
                                H = e.modifiersData["arrow#persistent"] ? e.modifiersData["arrow#persistent"].padding : {
                                    top: 0,
                                    right: 0,
                                    bottom: 0,
                                    left: 0
                                },
                                W = H[O],
                                Y = H[S],
                                X = Ce(0, L[C], M[C]),
                                B = b ? L[C] / 2 - N - X - W - T : I - X - W - T,
                                U = b ? -L[C] / 2 + N + X + Y + T : P + X + Y + T,
                                q = e.elements.arrow && Kt(e.elements.arrow),
                                F = q ? "y" === y ? q.clientTop || 0 : q.clientLeft || 0 : 0,
                                Q = e.modifiersData.offset ? e.modifiersData.offset[e.placement][y] : 0,
                                z = E[y] + B - Q - F,
                                V = E[y] + U - Q,
                                K = Ce(h ? Math.min(x, z) : x, D, h ? Math.max(j, V) : j);
                            E[y] = K, A[y] = K - D
                        }
                        if (a) {
                            var $ = "x" === y ? $t : Zt,
                                J = "x" === y ? Jt : Gt,
                                G = E[w],
                                Z = Ce(G + m[$], G, G - m[J]);
                            E[w] = Z, A[w] = Z - G
                        }
                        e.modifiersData[i] = A
                    }
                },
                requiresIfExists: ["offset"]
            }, {
                name: "arrow",
                enabled: !0,
                phase: "main",
                fn: function(t) {
                    var e, n = t.state,
                        i = t.name,
                        o = n.elements.arrow,
                        r = n.modifiersData.popperOffsets,
                        s = re(n.placement),
                        a = fe(s),
                        l = [Zt, Gt].indexOf(s) >= 0 ? "height" : "width";
                    if (o && r) {
                        var c = n.modifiersData[i + "#persistent"].padding,
                            u = qt(o),
                            f = "y" === a ? $t : Zt,
                            d = "y" === a ? Jt : Gt,
                            h = n.rects.reference[l] + n.rects.reference[a] - r[a] - n.rects.popper[l],
                            p = r[a] - n.rects.reference[a],
                            g = Kt(o),
                            m = g ? "y" === a ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
                            v = h / 2 - p / 2,
                            _ = c[f],
                            b = m - u[l] - c[d],
                            y = m / 2 - u[l] / 2 + v,
                            w = Ce(_, y, b),
                            E = a;
                        n.modifiersData[i] = ((e = {})[E] = w, e.centerOffset = w - y, e)
                    }
                },
                effect: function(t) {
                    var e = t.state,
                        n = t.options,
                        i = t.name,
                        o = n.element,
                        r = void 0 === o ? "[data-popper-arrow]" : o,
                        s = n.padding,
                        a = void 0 === s ? 0 : s;
                    null != r && ("string" != typeof r || (r = e.elements.popper.querySelector(r))) && we(e.elements.popper, r) && (e.elements.arrow = r, e.modifiersData[i + "#persistent"] = {
                        padding: Te("number" != typeof a ? a : Ae(a, te))
                    })
                },
                requires: ["popperOffsets"],
                requiresIfExists: ["preventOverflow"]
            }, {
                name: "hide",
                enabled: !0,
                phase: "main",
                requiresIfExists: ["preventOverflow"],
                fn: function(t) {
                    var e = t.state,
                        n = t.name,
                        i = e.rects.reference,
                        o = e.rects.popper,
                        r = e.modifiersData.preventOverflow,
                        s = Oe(e, {
                            elementContext: "reference"
                        }),
                        a = Oe(e, {
                            altBoundary: !0
                        }),
                        l = De(s, i),
                        c = De(a, o, r),
                        u = xe(l),
                        f = xe(c);
                    e.modifiersData[n] = {
                        referenceClippingOffsets: l,
                        popperEscapeOffsets: c,
                        isReferenceHidden: u,
                        hasPopperEscaped: f
                    }, e.attributes.popper = Object.assign({}, e.attributes.popper, {
                        "data-popper-reference-hidden": u,
                        "data-popper-escaped": f
                    })
                }
            }]
        }),
        Ne = "dropdown",
        Ie = "coreui.dropdown",
        Pe = "." + Ie,
        Re = new RegExp("ArrowUp|ArrowDown|Escape"),
        Me = {
            offset: [0, 0],
            flip: !0,
            boundary: "scrollParent",
            reference: "toggle",
            display: "dynamic",
            popperConfig: null
        },
        He = {
            offset: "(array|function)",
            flip: "boolean",
            boundary: "(string|element)",
            reference: "(string|element)",
            display: "string",
            popperConfig: "(null|object)"
        },
        We = function() {
            function t(t, e) {
                this._element = t, this._popper = null, this._config = this._getConfig(e), this._menu = this._getMenuElement(), this._inNavbar = this._detectNavbar(), this._inHeader = this._detectHeader(), this._addEventListeners(), L(t, Ie, this)
            }
            var n = t.prototype;
            return n.toggle = function() {
                if (!this._element.disabled && !this._element.classList.contains("disabled")) {
                    var e = this._menu.classList.contains("show");
                    t.clearMenus(), e || this.show()
                }
            }, n.show = function() {
                if (!(this._element.disabled || this._element.classList.contains("disabled") || this._menu.classList.contains("show"))) {
                    var e = t.getParentFromElement(this._element),
                        n = {
                            relatedTarget: this._element
                        };
                    if (!q.trigger(e, "show.coreui.dropdown", n).defaultPrevented) {
                        if (!this._inNavbar && !this._inHeader) {
                            if ("undefined" == typeof je) throw new TypeError("CoreUI's dropdowns require Popper.js (https://popper.js.org)");
                            var i = this._element;
                            "parent" === this._config.reference ? i = e : g(this._config.reference) && (i = this._config.reference, "undefined" != typeof this._config.reference.jquery && (i = this._config.reference[0])), "scrollParent" !== this._config.boundary && e.classList.add("position-static"), this._popper = je(i, this._menu, this._getPopperConfig())
                        }
                        var o, r;
                        if ("ontouchstart" in document.documentElement && !e.closest(".navbar-nav"))(o = []).concat.apply(o, document.body.children).forEach((function(t) {
                            return q.on(t, "mouseover", null, (function() {}))
                        }));
                        if ("ontouchstart" in document.documentElement && !e.closest(".c-header-nav"))(r = []).concat.apply(r, document.body.children).forEach((function(t) {
                            return q.on(t, "mouseover", null, (function() {}))
                        }));
                        this._element.focus(), this._element.setAttribute("aria-expanded", !0), at.toggleClass(this._menu, "show"), at.toggleClass(e, "show"), q.trigger(e, "shown.coreui.dropdown", n)
                    }
                }
            }, n.hide = function() {
                if (!this._element.disabled && !this._element.classList.contains("disabled") && this._menu.classList.contains("show")) {
                    var e = t.getParentFromElement(this._element),
                        n = {
                            relatedTarget: this._element
                        };
                    q.trigger(e, "hide.coreui.dropdown", n).defaultPrevented || (this._popper && this._popper.destroy(), at.toggleClass(this._menu, "show"), at.toggleClass(e, "show"), q.trigger(e, "hidden.coreui.dropdown", n))
                }
            }, n.dispose = function() {
                T(this._element, Ie), q.off(this._element, Pe), this._element = null, this._menu = null, this._popper && (this._popper.destroy(), this._popper = null)
            }, n.update = function() {
                this._inNavbar = this._detectNavbar(), this._inHeader = this._detectHeader(), this._popper && this._popper.scheduleUpdate()
            }, n._addEventListeners = function() {
                var t = this;
                q.on(this._element, "click.coreui.dropdown", (function(e) {
                    e.preventDefault(), e.stopPropagation(), t.toggle()
                }))
            }, n._getConfig = function(t) {
                return t = o(o(o({}, this.constructor.Default), at.getDataAttributes(this._element)), t), v(Ne, t, this.constructor.DefaultType), t
            }, n._getMenuElement = function() {
                var e = t.getParentFromElement(this._element);
                return tt.findOne(".dropdown-menu", e)
            }, n._getPlacement = function() {
                var t = this._element.parentNode,
                    e = "bottom-start";
                return t.classList.contains("dropup") ? (e = "top-start", this._menu.classList.contains("dropdown-menu-right") && (e = "top-end")) : t.classList.contains("dropright") ? e = "right-start" : t.classList.contains("dropleft") ? e = "left-start" : this._menu.classList.contains("dropdown-menu-right") && (e = "bottom-end"), e
            }, n._detectNavbar = function() {
                return Boolean(this._element.closest(".navbar"))
            }, n._detectHeader = function() {
                return Boolean(this._element.closest(".c-header"))
            }, n._getOffset = function() {
                var t = this,
                    e = {};
                return "function" == typeof this._config.offset ? e.fn = function(e) {
                    return e.offsets = o(o({}, e.offsets), t._config.offset(e.offsets, t._element) || {}), e
                } : e.offset = this._config.offset, e
            }, n._getPopperConfig = function() {
                var t = {
                    placement: this._getPlacement(),
                    modifiers: [{
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }, {
                        name: "flip",
                        enabled: this._config.flip
                    }, {
                        name: "preventOverflow",
                        options: {
                            boundary: this._config.boundary
                        }
                    }]
                };
                return "static" === this._config.display && (t.modifiers.applyStyle = {
                    enabled: !1
                }), o(o({}, t), this._config.popperConfig)
            }, t.dropdownInterface = function(e, n) {
                var i = k(e, Ie);
                if (i || (i = new t(e, "object" == typeof n ? n : null)), "string" == typeof n) {
                    if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                    i[n]()
                }
            }, t.jQueryInterface = function(e) {
                return this.each((function() {
                    t.dropdownInterface(this, e)
                }))
            }, t.clearMenus = function(e) {
                if (!e || 2 !== e.button && ("keyup" !== e.type || "Tab" === e.key))
                    for (var n = tt.find('[data-toggle="dropdown"]'), i = 0, o = n.length; i < o; i++) {
                        var r = t.getParentFromElement(n[i]),
                            s = k(n[i], Ie),
                            a = {
                                relatedTarget: n[i]
                            };
                        if (e && "click" === e.type && (a.clickEvent = e), s) {
                            var l = s._menu;
                            if (r.classList.contains("show"))
                                if (!(e && ("click" === e.type && /input|textarea/i.test(e.target.tagName) || "keyup" === e.type && "Tab" === e.key) && r.contains(e.target)))
                                    if (!q.trigger(r, "hide.coreui.dropdown", a).defaultPrevented) {
                                        var c;
                                        if ("ontouchstart" in document.documentElement)(c = []).concat.apply(c, document.body.children).forEach((function(t) {
                                            return q.off(t, "mouseover", null, (function() {}))
                                        }));
                                        n[i].setAttribute("aria-expanded", "false"), s._popper && s._popper.destroy(), l.classList.remove("show"), r.classList.remove("show"), q.trigger(r, "hidden.coreui.dropdown", a)
                                    }
                        }
                    }
            }, t.getParentFromElement = function(t) {
                return d(t) || t.parentNode
            }, t.dataApiKeydownHandler = function(e) {
                if (!(/input|textarea/i.test(e.target.tagName) ? "Space" === e.key || "Escape" !== e.key && ("ArrowDown" !== e.key && "ArrowUp" !== e.key || e.target.closest(".dropdown-menu")) : !Re.test(e.key)) && (e.preventDefault(), e.stopPropagation(), !this.disabled && !this.classList.contains("disabled"))) {
                    var n = t.getParentFromElement(this),
                        i = n.classList.contains("show");
                    if ("Escape" === e.key) return (this.matches('[data-toggle="dropdown"]') ? this : tt.prev(this, '[data-toggle="dropdown"]')[0]).focus(), void t.clearMenus();
                    if (i && "Space" !== e.key) {
                        var o = tt.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", n).filter(_);
                        if (o.length) {
                            var r = o.indexOf(e.target);
                            "ArrowUp" === e.key && r > 0 && r--, "ArrowDown" === e.key && r < o.length - 1 && r++, o[r = -1 === r ? 0 : r].focus()
                        }
                    } else t.clearMenus()
                }
            }, t.getInstance = function(t) {
                return k(t, Ie)
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "3.2.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return Me
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return He
                }
            }]), t
        }();
    q.on(document, "keydown.coreui.dropdown.data-api", '[data-toggle="dropdown"]', We.dataApiKeydownHandler), q.on(document, "keydown.coreui.dropdown.data-api", ".dropdown-menu", We.dataApiKeydownHandler), q.on(document, "click.coreui.dropdown.data-api", We.clearMenus), q.on(document, "keyup.coreui.dropdown.data-api", We.clearMenus), q.on(document, "click.coreui.dropdown.data-api", '[data-toggle="dropdown"]', (function(t) {
        t.preventDefault(), t.stopPropagation(), We.dropdownInterface(this, "toggle")
    })), q.on(document, "click.coreui.dropdown.data-api", ".dropdown form", (function(t) {
        return t.stopPropagation()
    }));
    var Ye = w();
    if (Ye) {
        var Xe = Ye.fn[Ne];
        Ye.fn[Ne] = We.jQueryInterface, Ye.fn[Ne].Constructor = We, Ye.fn[Ne].noConflict = function() {
            return Ye.fn[Ne] = Xe, We.jQueryInterface
        }
    }
    var Be = ".coreui.modal",
        Ue = {
            backdrop: !0,
            keyboard: !0,
            focus: !0,
            show: !0
        },
        qe = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            focus: "boolean",
            show: "boolean"
        },
        Fe = function() {
            function t(t, e) {
                this._config = this._getConfig(e), this._element = t, this._dialog = tt.findOne(".modal-dialog", t), this._backdrop = null, this._isShown = !1, this._isBodyOverflowing = !1, this._ignoreBackdropClick = !1, this._isTransitioning = !1, this._scrollbarWidth = 0, L(t, "coreui.modal", this)
            }
            var n = t.prototype;
            return n.toggle = function(t) {
                return this._isShown ? this.hide() : this.show(t)
            }, n.show = function(t) {
                var e = this;
                if (!this._isShown && !this._isTransitioning) {
                    this._element.classList.contains("fade") && (this._isTransitioning = !0);
                    var n = q.trigger(this._element, "show.coreui.modal", {
                        relatedTarget: t
                    });
                    this._isShown || n.defaultPrevented || (this._isShown = !0, this._checkScrollbar(), this._setScrollbar(), this._adjustDialog(), this._setEscapeEvent(), this._setResizeEvent(), q.on(this._element, "click.dismiss.coreui.modal", '[data-dismiss="modal"]', (function(t) {
                        return e.hide(t)
                    })), q.on(this._dialog, "mousedown.dismiss.coreui.modal", (function() {
                        q.one(e._element, "mouseup.dismiss.coreui.modal", (function(t) {
                            t.target === e._element && (e._ignoreBackdropClick = !0)
                        }))
                    })), this._showBackdrop((function() {
                        return e._showElement(t)
                    })))
                }
            }, n.hide = function(t) {
                var e = this;
                if ((t && t.preventDefault(), this._isShown && !this._isTransitioning) && !q.trigger(this._element, "hide.coreui.modal").defaultPrevented) {
                    this._isShown = !1;
                    var n = this._element.classList.contains("fade");
                    if (n && (this._isTransitioning = !0), this._setEscapeEvent(), this._setResizeEvent(), q.off(document, "focusin.coreui.modal"), this._element.classList.remove("show"), q.off(this._element, "click.dismiss.coreui.modal"), q.off(this._dialog, "mousedown.dismiss.coreui.modal"), n) {
                        var i = h(this._element);
                        q.one(this._element, "transitionend", (function(t) {
                            return e._hideModal(t)
                        })), m(this._element, i)
                    } else this._hideModal()
                }
            }, n.dispose = function() {
                [window, this._element, this._dialog].forEach((function(t) {
                    return q.off(t, Be)
                })), q.off(document, "focusin.coreui.modal"), T(this._element, "coreui.modal"), this._config = null, this._element = null, this._dialog = null, this._backdrop = null, this._isShown = null, this._isBodyOverflowing = null, this._ignoreBackdropClick = null, this._isTransitioning = null, this._scrollbarWidth = null
            }, n.handleUpdate = function() {
                this._adjustDialog()
            }, n._getConfig = function(t) {
                return t = o(o({}, Ue), t), v("modal", t, qe), t
            }, n._showElement = function(t) {
                var e = this,
                    n = this._element.classList.contains("fade"),
                    i = tt.findOne(".modal-body", this._dialog);
                this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE || document.body.appendChild(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.scrollTop = 0, i && (i.scrollTop = 0), n && y(this._element), this._element.classList.add("show"), this._config.focus && this._enforceFocus();
                var o = function() {
                    e._config.focus && e._element.focus(), e._isTransitioning = !1, q.trigger(e._element, "shown.coreui.modal", {
                        relatedTarget: t
                    })
                };
                if (n) {
                    var r = h(this._dialog);
                    q.one(this._dialog, "transitionend", o), m(this._dialog, r)
                } else o()
            }, n._enforceFocus = function() {
                var t = this;
                q.off(document, "focusin.coreui.modal"), q.on(document, "focusin.coreui.modal", (function(e) {
                    document === e.target || t._element === e.target || t._element.contains(e.target) || t._element.focus()
                }))
            }, n._setEscapeEvent = function() {
                var t = this;
                this._isShown ? q.on(this._element, "keydown.dismiss.coreui.modal", (function(e) {
                    t._config.keyboard && "Escape" === e.key ? (e.preventDefault(), t.hide()) : t._config.keyboard || "Escape" !== e.key || t._triggerBackdropTransition()
                })) : q.off(this._element, "keydown.dismiss.coreui.modal")
            }, n._setResizeEvent = function() {
                var t = this;
                this._isShown ? q.on(window, "resize.coreui.modal", (function() {
                    return t._adjustDialog()
                })) : q.off(window, "resize.coreui.modal")
            }, n._hideModal = function() {
                var t = this;
                this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._isTransitioning = !1, this._showBackdrop((function() {
                    document.body.classList.remove("modal-open"), t._resetAdjustments(), t._resetScrollbar(), q.trigger(t._element, "hidden.coreui.modal")
                }))
            }, n._removeBackdrop = function() {
                this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null
            }, n._showBackdrop = function(t) {
                var e = this,
                    n = this._element.classList.contains("fade") ? "fade" : "";
                if (this._isShown && this._config.backdrop) {
                    if (this._backdrop = document.createElement("div"), this._backdrop.className = "modal-backdrop", n && this._backdrop.classList.add(n), document.body.appendChild(this._backdrop), q.on(this._element, "click.dismiss.coreui.modal", (function(t) {
                            e._ignoreBackdropClick ? e._ignoreBackdropClick = !1 : t.target === t.currentTarget && e._triggerBackdropTransition()
                        })), n && y(this._backdrop), this._backdrop.classList.add("show"), !n) return void t();
                    var i = h(this._backdrop);
                    q.one(this._backdrop, "transitionend", t), m(this._backdrop, i)
                } else if (!this._isShown && this._backdrop) {
                    this._backdrop.classList.remove("show");
                    var o = function() {
                        e._removeBackdrop(), t()
                    };
                    if (this._element.classList.contains("fade")) {
                        var r = h(this._backdrop);
                        q.one(this._backdrop, "transitionend", o), m(this._backdrop, r)
                    } else o()
                } else t()
            }, n._triggerBackdropTransition = function() {
                var t = this;
                if ("static" === this._config.backdrop) {
                    if (q.trigger(this._element, "hidePrevented.coreui.modal").defaultPrevented) return;
                    this._element.classList.add("modal-static");
                    var e = h(this._element);
                    q.one(this._element, "transitionend", (function() {
                        t._element.classList.remove("modal-static")
                    })), m(this._element, e), this._element.focus()
                } else this.hide()
            }, n._adjustDialog = function() {
                var t = this._element.scrollHeight > document.documentElement.clientHeight;
                !this._isBodyOverflowing && t && (this._element.style.paddingLeft = this._scrollbarWidth + "px"), this._isBodyOverflowing && !t && (this._element.style.paddingRight = this._scrollbarWidth + "px")
            }, n._resetAdjustments = function() {
                this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
            }, n._checkScrollbar = function() {
                var t = document.body.getBoundingClientRect();
                this._isBodyOverflowing = Math.round(t.left + t.right) < window.innerWidth, this._scrollbarWidth = this._getScrollbarWidth()
            }, n._setScrollbar = function() {
                var t = this;
                if (this._isBodyOverflowing) {
                    tt.find(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top").forEach((function(e) {
                        var n = e.style.paddingRight,
                            i = window.getComputedStyle(e)["padding-right"];
                        at.setDataAttribute(e, "padding-right", n), e.style.paddingRight = parseFloat(i) + t._scrollbarWidth + "px"
                    })), tt.find(".sticky-top").forEach((function(e) {
                        var n = e.style.marginRight,
                            i = window.getComputedStyle(e)["margin-right"];
                        at.setDataAttribute(e, "margin-right", n), e.style.marginRight = parseFloat(i) - t._scrollbarWidth + "px"
                    }));
                    var e = document.body.style.paddingRight,
                        n = window.getComputedStyle(document.body)["padding-right"];
                    at.setDataAttribute(document.body, "padding-right", e), document.body.style.paddingRight = parseFloat(n) + this._scrollbarWidth + "px"
                }
                document.body.classList.add("modal-open")
            }, n._resetScrollbar = function() {
                tt.find(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top").forEach((function(t) {
                    var e = at.getDataAttribute(t, "padding-right");
                    "undefined" != typeof e && (at.removeDataAttribute(t, "padding-right"), t.style.paddingRight = e)
                })), tt.find(".sticky-top").forEach((function(t) {
                    var e = at.getDataAttribute(t, "margin-right");
                    "undefined" != typeof e && (at.removeDataAttribute(t, "margin-right"), t.style.marginRight = e)
                }));
                var t = at.getDataAttribute(document.body, "padding-right");
                "undefined" == typeof t ? document.body.style.paddingRight = "" : (at.removeDataAttribute(document.body, "padding-right"), document.body.style.paddingRight = t)
            }, n._getScrollbarWidth = function() {
                var t = document.createElement("div");
                t.className = "modal-scrollbar-measure", document.body.appendChild(t);
                var e = t.getBoundingClientRect().width - t.clientWidth;
                return document.body.removeChild(t), e
            }, t.jQueryInterface = function(e, n) {
                return this.each((function() {
                    var i = k(this, "coreui.modal"),
                        r = o(o(o({}, Ue), at.getDataAttributes(this)), "object" == typeof e && e ? e : {});
                    if (i || (i = new t(this, r)), "string" == typeof e) {
                        if ("undefined" == typeof i[e]) throw new TypeError('No method named "' + e + '"');
                        i[e](n)
                    } else r.show && i.show(n)
                }))
            }, t.getInstance = function(t) {
                return k(t, "coreui.modal")
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "3.2.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return Ue
                }
            }]), t
        }();
    q.on(document, "click.coreui.modal.data-api", '[data-toggle="modal"]', (function(t) {
        var e = this,
            n = d(this);
        "A" !== this.tagName && "AREA" !== this.tagName || t.preventDefault(), q.one(n, "show.coreui.modal", (function(t) {
            t.defaultPrevented || q.one(n, "hidden.coreui.modal", (function() {
                _(e) && e.focus()
            }))
        }));
        var i = k(n, "coreui.modal");
        if (!i) {
            var r = o(o({}, at.getDataAttributes(n)), at.getDataAttributes(this));
            i = new Fe(n, r)
        }
        i.show(this)
    }));
    var Qe = w();
    if (Qe) {
        var ze = Qe.fn.modal;
        Qe.fn.modal = Fe.jQueryInterface, Qe.fn.modal.Constructor = Fe, Qe.fn.modal.noConflict = function() {
            return Qe.fn.modal = ze, Fe.jQueryInterface
        }
    }
    var Ve = ["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"],
        Ke = /^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/gi,
        $e = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        Je = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        };

    function Ge(t, e, n) {
        var i;
        if (!t.length) return t;
        if (n && "function" == typeof n) return n(t);
        for (var o = (new window.DOMParser).parseFromString(t, "text/html"), r = Object.keys(e), s = (i = []).concat.apply(i, o.body.querySelectorAll("*")), a = function(t, n) {
                var i, o = s[t],
                    a = o.nodeName.toLowerCase();
                if (-1 === r.indexOf(a)) return o.parentNode.removeChild(o), "continue";
                var l = (i = []).concat.apply(i, o.attributes),
                    c = [].concat(e["*"] || [], e[a] || []);
                l.forEach((function(t) {
                    (function(t, e) {
                        var n = t.nodeName.toLowerCase();
                        if (-1 !== e.indexOf(n)) return -1 === Ve.indexOf(n) || Boolean(t.nodeValue.match(Ke) || t.nodeValue.match($e));
                        for (var i = e.filter((function(t) {
                                return t instanceof RegExp
                            })), o = 0, r = i.length; o < r; o++)
                            if (n.match(i[o])) return !0;
                        return !1
                    })(t, c) || o.removeAttribute(t.nodeName)
                }))
            }, l = 0, c = s.length; l < c; l++) a(l);
        return o.body.innerHTML
    }
    var Ze = "tooltip",
        tn = ".coreui.tooltip",
        en = new RegExp("(^|\\s)bs-tooltip\\S+", "g"),
        nn = ["sanitize", "whiteList", "sanitizeFn"],
        on = {
            animation: "boolean",
            template: "string",
            title: "(string|element|function)",
            trigger: "string",
            delay: "(number|object)",
            html: "boolean",
            selector: "(string|boolean)",
            placement: "(string|function)",
            offset: "(number|string|function)",
            container: "(string|element|boolean)",
            boundary: "(string|element)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            whiteList: "object",
            popperConfig: "(null|object)"
        },
        rn = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: "right",
            BOTTOM: "bottom",
            LEFT: "left"
        },
        sn = {
            animation: !0,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            selector: !1,
            placement: "top",
            offset: 0,
            container: !1,
            boundary: "scrollParent",
            sanitize: !0,
            sanitizeFn: null,
            whiteList: Je,
            popperConfig: null
        },
        an = {
            HIDE: "hide" + tn,
            HIDDEN: "hidden" + tn,
            SHOW: "show" + tn,
            SHOWN: "shown" + tn,
            INSERTED: "inserted" + tn,
            CLICK: "click" + tn,
            FOCUSIN: "focusin" + tn,
            FOCUSOUT: "focusout" + tn,
            MOUSEENTER: "mouseenter" + tn,
            MOUSELEAVE: "mouseleave" + tn
        },
        ln = function() {
            function t(t, e) {
                if ("undefined" == typeof je) throw new TypeError("CoreUI's tooltips require Popper.js (https://popper.js.org)");
                this._isEnabled = !0, this._timeout = 0, this._hoverState = "", this._activeTrigger = {}, this._popper = null, this.element = t, this.config = this._getConfig(e), this.tip = null, this._setListeners(), L(t, this.constructor.DATA_KEY, this)
            }
            var n = t.prototype;
            return n.enable = function() {
                this._isEnabled = !0
            }, n.disable = function() {
                this._isEnabled = !1
            }, n.toggleEnabled = function() {
                this._isEnabled = !this._isEnabled
            }, n.toggle = function(t) {
                if (this._isEnabled)
                    if (t) {
                        var e = this.constructor.DATA_KEY,
                            n = k(t.target, e);
                        n || (n = new this.constructor(t.target, this._getDelegateConfig()), L(t.target, e, n)), n._activeTrigger.click = !n._activeTrigger.click, n._isWithActiveTrigger() ? n._enter(null, n) : n._leave(null, n)
                    } else {
                        if (this.getTipElement().classList.contains("show")) return void this._leave(null, this);
                        this._enter(null, this)
                    }
            }, n.dispose = function() {
                clearTimeout(this._timeout), T(this.element, this.constructor.DATA_KEY), q.off(this.element, this.constructor.EVENT_KEY), q.off(this.element.closest(".modal"), "hide.coreui.modal", this._hideModalHandler), this.tip && this.tip.parentNode.removeChild(this.tip), this._isEnabled = null, this._timeout = null, this._hoverState = null, this._activeTrigger = null, this._popper && this._popper.destroy(), this._popper = null, this.element = null, this.config = null, this.tip = null
            }, n.show = function() {
                var t = this;
                if ("none" === this.element.style.display) throw new Error("Please use show on visible elements");
                if (this.isWithContent() && this._isEnabled) {
                    var e = q.trigger(this.element, this.constructor.Event.SHOW),
                        n = function t(e) {
                            if (!document.documentElement.attachShadow) return null;
                            if ("function" == typeof e.getRootNode) {
                                var n = e.getRootNode();
                                return n instanceof ShadowRoot ? n : null
                            }
                            return e instanceof ShadowRoot ? e : e.parentNode ? t(e.parentNode) : null
                        }(this.element),
                        i = null === n ? this.element.ownerDocument.documentElement.contains(this.element) : n.contains(this.element);
                    if (e.defaultPrevented || !i) return;
                    var o = this.getTipElement(),
                        r = c(this.constructor.NAME);
                    o.setAttribute("id", r), this.element.setAttribute("aria-describedby", r), this.setContent(), this.config.animation && o.classList.add("fade");
                    var s, a = "function" == typeof this.config.placement ? this.config.placement.call(this, o, this.element) : this.config.placement,
                        l = this._getAttachment(a),
                        u = this._getContainer();
                    if (L(o, this.constructor.DATA_KEY, this), this.element.ownerDocument.documentElement.contains(this.tip) || u.appendChild(o), q.trigger(this.element, this.constructor.Event.INSERTED), this._popper = je(this.element, o, this._getPopperConfig(l)), o.classList.add("show"), "ontouchstart" in document.documentElement)(s = []).concat.apply(s, document.body.children).forEach((function(t) {
                        q.on(t, "mouseover", (function() {}))
                    }));
                    var f = function() {
                        t.config.animation && t._fixTransition();
                        var e = t._hoverState;
                        t._hoverState = null, q.trigger(t.element, t.constructor.Event.SHOWN), "out" === e && t._leave(null, t)
                    };
                    if (this.tip.classList.contains("fade")) {
                        var d = h(this.tip);
                        q.one(this.tip, "transitionend", f), m(this.tip, d)
                    } else f()
                }
            }, n.hide = function() {
                var t = this,
                    e = this.getTipElement(),
                    n = function() {
                        "show" !== t._hoverState && e.parentNode && e.parentNode.removeChild(e), t._cleanTipClass(), t.element.removeAttribute("aria-describedby"), q.trigger(t.element, t.constructor.Event.HIDDEN), t._popper.destroy()
                    };
                if (!q.trigger(this.element, this.constructor.Event.HIDE).defaultPrevented) {
                    var i;
                    if (e.classList.remove("show"), "ontouchstart" in document.documentElement)(i = []).concat.apply(i, document.body.children).forEach((function(t) {
                        return q.off(t, "mouseover", b)
                    }));
                    if (this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this.tip.classList.contains("fade")) {
                        var o = h(e);
                        q.one(e, "transitionend", n), m(e, o)
                    } else n();
                    this._hoverState = ""
                }
            }, n.update = function() {
                null !== this._popper && this._popper.scheduleUpdate()
            }, n.isWithContent = function() {
                return Boolean(this.getTitle())
            }, n.getTipElement = function() {
                if (this.tip) return this.tip;
                var t = document.createElement("div");
                return t.innerHTML = this.config.template, this.tip = t.children[0], this.tip
            }, n.setContent = function() {
                var t = this.getTipElement();
                this.setElementContent(tt.findOne(".tooltip-inner", t), this.getTitle()), t.classList.remove("fade", "show")
            }, n.setElementContent = function(t, e) {
                if (null !== t) return "object" == typeof e && g(e) ? (e.jquery && (e = e[0]), void(this.config.html ? e.parentNode !== t && (t.innerHTML = "", t.appendChild(e)) : t.textContent = e.textContent)) : void(this.config.html ? (this.config.sanitize && (e = Ge(e, this.config.whiteList, this.config.sanitizeFn)), t.innerHTML = e) : t.textContent = e)
            }, n.getTitle = function() {
                var t = this.element.getAttribute("data-original-title");
                return t || (t = "function" == typeof this.config.title ? this.config.title.call(this.element) : this.config.title), t
            }, n._getPopperConfig = function(t) {
                var e = this;
                return o(o({}, {
                    placement: t,
                    modifiers: [{
                        name: "offset",
                        options: {
                            offset: this._getOffset()
                        }
                    }, {
                        name: "arrow",
                        options: {
                            element: "." + this.constructor.NAME + "-arrow"
                        }
                    }, {
                        name: "preventOverflow",
                        options: {
                            boundary: this.config.boundary
                        }
                    }],
                    onFirstUpdate: function(t) {
                        t.originalPlacement !== t.placement && e._popper.update()
                    }
                }), this.config.popperConfig)
            }, n._getOffset = function() {
                var t = this,
                    e = {};
                return "function" == typeof this.config.offset ? e.fn = function(e) {
                    return e.offsets = o(o({}, e.offsets), t.config.offset(e.offsets, t.element) || {}), e
                } : e.offset = this.config.offset, e
            }, n._getContainer = function() {
                return !1 === this.config.container ? document.body : g(this.config.container) ? this.config.container : tt.findOne(this.config.container)
            }, n._getAttachment = function(t) {
                return rn[t.toUpperCase()]
            }, n._setListeners = function() {
                var t = this;
                this.config.trigger.split(" ").forEach((function(e) {
                    if ("click" === e) q.on(t.element, t.constructor.Event.CLICK, t.config.selector, (function(e) {
                        return t.toggle(e)
                    }));
                    else if ("manual" !== e) {
                        var n = "hover" === e ? t.constructor.Event.MOUSEENTER : t.constructor.Event.FOCUSIN,
                            i = "hover" === e ? t.constructor.Event.MOUSELEAVE : t.constructor.Event.FOCUSOUT;
                        q.on(t.element, n, t.config.selector, (function(e) {
                            return t._enter(e)
                        })), q.on(t.element, i, t.config.selector, (function(e) {
                            return t._leave(e)
                        }))
                    }
                })), this._hideModalHandler = function() {
                    t.element && t.hide()
                }, q.on(this.element.closest(".modal"), "hide.coreui.modal", this._hideModalHandler), this.config.selector ? this.config = o(o({}, this.config), {}, {
                    trigger: "manual",
                    selector: ""
                }) : this._fixTitle()
            }, n._fixTitle = function() {
                var t = typeof this.element.getAttribute("data-original-title");
                (this.element.getAttribute("title") || "string" !== t) && (this.element.setAttribute("data-original-title", this.element.getAttribute("title") || ""), this.element.setAttribute("title", ""))
            }, n._enter = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || k(t.target, n)) || (e = new this.constructor(t.target, this._getDelegateConfig()), L(t.target, n, e)), t && (e._activeTrigger["focusin" === t.type ? "focus" : "hover"] = !0), e.getTipElement().classList.contains("show") || "show" === e._hoverState ? e._hoverState = "show" : (clearTimeout(e._timeout), e._hoverState = "show", e.config.delay && e.config.delay.show ? e._timeout = setTimeout((function() {
                    "show" === e._hoverState && e.show()
                }), e.config.delay.show) : e.show())
            }, n._leave = function(t, e) {
                var n = this.constructor.DATA_KEY;
                (e = e || k(t.target, n)) || (e = new this.constructor(t.target, this._getDelegateConfig()), L(t.target, n, e)), t && (e._activeTrigger["focusout" === t.type ? "focus" : "hover"] = !1), e._isWithActiveTrigger() || (clearTimeout(e._timeout), e._hoverState = "out", e.config.delay && e.config.delay.hide ? e._timeout = setTimeout((function() {
                    "out" === e._hoverState && e.hide()
                }), e.config.delay.hide) : e.hide())
            }, n._isWithActiveTrigger = function() {
                for (var t in this._activeTrigger)
                    if (this._activeTrigger[t]) return !0;
                return !1
            }, n._getConfig = function(t) {
                var e = at.getDataAttributes(this.element);
                return Object.keys(e).forEach((function(t) {
                    -1 !== nn.indexOf(t) && delete e[t]
                })), t && "object" == typeof t.container && t.container.jquery && (t.container = t.container[0]), "number" == typeof(t = o(o(o({}, this.constructor.Default), e), "object" == typeof t && t ? t : {})).delay && (t.delay = {
                    show: t.delay,
                    hide: t.delay
                }), "number" == typeof t.title && (t.title = t.title.toString()), "number" == typeof t.content && (t.content = t.content.toString()), v(Ze, t, this.constructor.DefaultType), t.sanitize && (t.template = Ge(t.template, t.whiteList, t.sanitizeFn)), t
            }, n._getDelegateConfig = function() {
                var t = {};
                if (this.config)
                    for (var e in this.config) this.constructor.Default[e] !== this.config[e] && (t[e] = this.config[e]);
                return t
            }, n._cleanTipClass = function() {
                var t = this.getTipElement();
                var e = t.getAttribute("class").match(en);
                null !== e && e.length > 0 && e.map((function(t) {
                    return t.trim()
                })).forEach((function(e) {
                    return t.classList.remove(e)
                }))
            }, n._fixTransition = function() {
                var t = this.getTipElement(),
                    e = this.config.animation;
                null === t.getAttribute("data-popper-placement") && (t.classList.remove("fade"), this.config.animation = !1, this.hide(), this.show(), this.config.animation = e)
            }, t.jQueryInterface = function(e) {
                return this.each((function() {
                    var n = k(this, "coreui.tooltip"),
                        i = "object" == typeof e && e;
                    if ((n || !/dispose|hide/.test(e)) && (n || (n = new t(this, i)), "string" == typeof e)) {
                        if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                }))
            }, t.getInstance = function(t) {
                return k(t, "coreui.tooltip")
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "3.2.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return sn
                }
            }, {
                key: "NAME",
                get: function() {
                    return Ze
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return "coreui.tooltip"
                }
            }, {
                key: "Event",
                get: function() {
                    return an
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return tn
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return on
                }
            }]), t
        }(),
        cn = w();
    if (cn) {
        var un = cn.fn[Ze];
        cn.fn[Ze] = ln.jQueryInterface, cn.fn[Ze].Constructor = ln, cn.fn[Ze].noConflict = function() {
            return cn.fn[Ze] = un, ln.jQueryInterface
        }
    }
    var fn = "popover",
        dn = "coreui.popover",
        hn = "." + dn,
        pn = new RegExp("(^|\\s)bs-popover\\S+", "g"),
        gn = o(o({}, ln.Default), {}, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'
        }),
        mn = o(o({}, ln.DefaultType), {}, {
            content: "(string|element|function)"
        }),
        vn = {
            HIDE: "hide" + hn,
            HIDDEN: "hidden" + hn,
            SHOW: "show" + hn,
            SHOWN: "shown" + hn,
            INSERTED: "inserted" + hn,
            CLICK: "click" + hn,
            FOCUSIN: "focusin" + hn,
            FOCUSOUT: "focusout" + hn,
            MOUSEENTER: "mouseenter" + hn,
            MOUSELEAVE: "mouseleave" + hn
        },
        _n = function(t) {
            var n, i;

            function o() {
                return t.apply(this, arguments) || this
            }
            i = t, (n = o).prototype = Object.create(i.prototype), n.prototype.constructor = n, n.__proto__ = i;
            var r = o.prototype;
            return r.isWithContent = function() {
                return this.getTitle() || this._getContent()
            }, r.setContent = function() {
                var t = this.getTipElement();
                this.setElementContent(tt.findOne(".popover-header", t), this.getTitle());
                var e = this._getContent();
                "function" == typeof e && (e = e.call(this.element)), this.setElementContent(tt.findOne(".popover-body", t), e), t.classList.remove("fade", "show")
            }, r._addAttachmentClass = function(t) {
                this.getTipElement().classList.add("bs-popover-" + t)
            }, r._getContent = function() {
                return this.element.getAttribute("data-content") || this.config.content
            }, r._cleanTipClass = function() {
                var t = this.getTipElement(),
                    e = t.getAttribute("class").match(pn);
                null !== e && e.length > 0 && e.map((function(t) {
                    return t.trim()
                })).forEach((function(e) {
                    return t.classList.remove(e)
                }))
            }, o.jQueryInterface = function(t) {
                return this.each((function() {
                    var e = k(this, dn),
                        n = "object" == typeof t ? t : null;
                    if ((e || !/dispose|hide/.test(t)) && (e || (e = new o(this, n), L(this, dn, e)), "string" == typeof t)) {
                        if ("undefined" == typeof e[t]) throw new TypeError('No method named "' + t + '"');
                        e[t]()
                    }
                }))
            }, o.getInstance = function(t) {
                return k(t, dn)
            }, e(o, null, [{
                key: "VERSION",
                get: function() {
                    return "3.2.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return gn
                }
            }, {
                key: "NAME",
                get: function() {
                    return fn
                }
            }, {
                key: "DATA_KEY",
                get: function() {
                    return dn
                }
            }, {
                key: "Event",
                get: function() {
                    return vn
                }
            }, {
                key: "EVENT_KEY",
                get: function() {
                    return hn
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return mn
                }
            }]), o
        }(ln),
        bn = w();
    if (bn) {
        var yn = bn.fn[fn];
        bn.fn[fn] = _n.jQueryInterface, bn.fn[fn].Constructor = _n, bn.fn[fn].noConflict = function() {
            return bn.fn[fn] = yn, _n.jQueryInterface
        }
    }
    var wn = "scrollspy",
        En = "coreui.scrollspy",
        Ln = {
            offset: 10,
            method: "auto",
            target: ""
        },
        kn = {
            offset: "number",
            method: "string",
            target: "(string|element)"
        },
        Tn = function() {
            function t(t, e) {
                var n = this;
                this._element = t, this._scrollElement = "BODY" === t.tagName ? window : t, this._config = this._getConfig(e), this._selector = this._config.target + " .nav-link," + this._config.target + " .list-group-item," + this._config.target + " .dropdown-item", this._offsets = [], this._targets = [], this._activeTarget = null, this._scrollHeight = 0, q.on(this._scrollElement, "scroll.coreui.scrollspy", (function(t) {
                    return n._process(t)
                })), this.refresh(), this._process(), L(t, En, this)
            }
            var n = t.prototype;
            return n.refresh = function() {
                var t = this,
                    e = this._scrollElement === this._scrollElement.window ? "offset" : "position",
                    n = "auto" === this._config.method ? e : this._config.method,
                    i = "position" === n ? this._getScrollTop() : 0;
                this._offsets = [], this._targets = [], this._scrollHeight = this._getScrollHeight(), tt.find(this._selector).map((function(t) {
                    var e, o = f(t);
                    if (o && (e = tt.findOne(o)), e) {
                        var r = e.getBoundingClientRect();
                        if (r.width || r.height) return [at[n](e).top + i, o]
                    }
                    return null
                })).filter((function(t) {
                    return t
                })).sort((function(t, e) {
                    return t[0] - e[0]
                })).forEach((function(e) {
                    t._offsets.push(e[0]), t._targets.push(e[1])
                }))
            }, n.dispose = function() {
                T(this._element, En), q.off(this._scrollElement, ".coreui.scrollspy"), this._element = null, this._scrollElement = null, this._config = null, this._selector = null, this._offsets = null, this._targets = null, this._activeTarget = null, this._scrollHeight = null
            }, n._getConfig = function(t) {
                if ("string" != typeof(t = o(o({}, Ln), "object" == typeof t && t ? t : {})).target && g(t.target)) {
                    var e = t.target.id;
                    e || (e = c(wn), t.target.id = e), t.target = "#" + e
                }
                return v(wn, t, kn), t
            }, n._getScrollTop = function() {
                return this._scrollElement === window ? this._scrollElement.pageYOffset : this._scrollElement.scrollTop
            }, n._getScrollHeight = function() {
                return this._scrollElement.scrollHeight || Math.max(document.body.scrollHeight, document.documentElement.scrollHeight)
            }, n._getOffsetHeight = function() {
                return this._scrollElement === window ? window.innerHeight : this._scrollElement.getBoundingClientRect().height
            }, n._process = function() {
                var t = this._getScrollTop() + this._config.offset,
                    e = this._getScrollHeight(),
                    n = this._config.offset + e - this._getOffsetHeight();
                if (this._scrollHeight !== e && this.refresh(), t >= n) {
                    var i = this._targets[this._targets.length - 1];
                    this._activeTarget !== i && this._activate(i)
                } else {
                    if (this._activeTarget && t < this._offsets[0] && this._offsets[0] > 0) return this._activeTarget = null, void this._clear();
                    for (var o = this._offsets.length; o--;) {
                        this._activeTarget !== this._targets[o] && t >= this._offsets[o] && ("undefined" == typeof this._offsets[o + 1] || t < this._offsets[o + 1]) && this._activate(this._targets[o])
                    }
                }
            }, n._activate = function(t) {
                this._activeTarget = t, this._clear();
                var e = this._selector.split(",").map((function(e) {
                        return e + '[data-target="' + t + '"],' + e + '[href="' + t + '"]'
                    })),
                    n = tt.findOne(e.join(","));
                n.classList.contains("dropdown-item") ? (tt.findOne(".dropdown-toggle", n.closest(".dropdown")).classList.add("active"), n.classList.add("active")) : (n.classList.add("active"), tt.parents(n, ".nav, .list-group").forEach((function(t) {
                    tt.prev(t, ".nav-link, .list-group-item").forEach((function(t) {
                        return t.classList.add("active")
                    })), tt.prev(t, ".nav-item").forEach((function(t) {
                        tt.children(t, ".nav-link").forEach((function(t) {
                            return t.classList.add("active")
                        }))
                    }))
                }))), q.trigger(this._scrollElement, "activate.coreui.scrollspy", {
                    relatedTarget: t
                })
            }, n._clear = function() {
                tt.find(this._selector).filter((function(t) {
                    return t.classList.contains("active")
                })).forEach((function(t) {
                    return t.classList.remove("active")
                }))
            }, t.jQueryInterface = function(e) {
                return this.each((function() {
                    var n = k(this, En);
                    if (n || (n = new t(this, "object" == typeof e && e)), "string" == typeof e) {
                        if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e]()
                    }
                }))
            }, t.getInstance = function(t) {
                return k(t, En)
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "3.2.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return Ln
                }
            }]), t
        }();
    q.on(window, "load.coreui.scrollspy.data-api", (function() {
        tt.find('[data-spy="scroll"]').forEach((function(t) {
            return new Tn(t, at.getDataAttributes(t))
        }))
    }));
    var An = w();
    if (An) {
        var On = An.fn[wn];
        An.fn[wn] = Tn.jQueryInterface, An.fn[wn].Constructor = Tn, An.fn[wn].noConflict = function() {
            return An.fn[wn] = On, Tn.jQueryInterface
        }
    }
    /*!
     * perfect-scrollbar v1.5.0
     * Copyright 2020 Hyunje Jun, MDBootstrap and Contributors
     * Licensed under MIT
     */
    function Sn(t) {
        return getComputedStyle(t)
    }

    function Cn(t, e) {
        for (var n in e) {
            var i = e[n];
            "number" == typeof i && (i += "px"), t.style[n] = i
        }
        return t
    }

    function Dn(t) {
        var e = document.createElement("div");
        return e.className = t, e
    }
    var xn = "undefined" != typeof Element && (Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector);

    function jn(t, e) {
        if (!xn) throw new Error("No element matching method supported");
        return xn.call(t, e)
    }

    function Nn(t) {
        t.remove ? t.remove() : t.parentNode && t.parentNode.removeChild(t)
    }

    function In(t, e) {
        return Array.prototype.filter.call(t.children, (function(t) {
            return jn(t, e)
        }))
    }
    var Pn = "ps",
        Rn = "ps__rtl",
        Mn = {
            thumb: function(t) {
                return "ps__thumb-" + t
            },
            rail: function(t) {
                return "ps__rail-" + t
            },
            consuming: "ps__child--consume"
        },
        Hn = {
            focus: "ps--focus",
            clicking: "ps--clicking",
            active: function(t) {
                return "ps--active-" + t
            },
            scrolling: function(t) {
                return "ps--scrolling-" + t
            }
        },
        Wn = {
            x: null,
            y: null
        };

    function Yn(t, e) {
        var n = t.element.classList,
            i = Hn.scrolling(e);
        n.contains(i) ? clearTimeout(Wn[e]) : n.add(i)
    }

    function Xn(t, e) {
        Wn[e] = setTimeout((function() {
            return t.isAlive && t.element.classList.remove(Hn.scrolling(e))
        }), t.settings.scrollingThreshold)
    }
    var Bn = function(t) {
            this.element = t, this.handlers = {}
        },
        Un = {
            isEmpty: {
                configurable: !0
            }
        };
    Bn.prototype.bind = function(t, e) {
        "undefined" == typeof this.handlers[t] && (this.handlers[t] = []), this.handlers[t].push(e), this.element.addEventListener(t, e, !1)
    }, Bn.prototype.unbind = function(t, e) {
        var n = this;
        this.handlers[t] = this.handlers[t].filter((function(i) {
            return !(!e || i === e) || (n.element.removeEventListener(t, i, !1), !1)
        }))
    }, Bn.prototype.unbindAll = function() {
        for (var t in this.handlers) this.unbind(t)
    }, Un.isEmpty.get = function() {
        var t = this;
        return Object.keys(this.handlers).every((function(e) {
            return 0 === t.handlers[e].length
        }))
    }, Object.defineProperties(Bn.prototype, Un);
    var qn = function() {
        this.eventElements = []
    };

    function Fn(t) {
        if ("function" == typeof window.CustomEvent) return new CustomEvent(t);
        var e = document.createEvent("CustomEvent");
        return e.initCustomEvent(t, !1, !1, void 0), e
    }

    function Qn(t, e, n, i, o) {
        var r;
        if (void 0 === i && (i = !0), void 0 === o && (o = !1), "top" === e) r = ["contentHeight", "containerHeight", "scrollTop", "y", "up", "down"];
        else {
            if ("left" !== e) throw new Error("A proper axis should be provided");
            r = ["contentWidth", "containerWidth", "scrollLeft", "x", "left", "right"]
        }! function(t, e, n, i, o) {
            var r = n[0],
                s = n[1],
                a = n[2],
                l = n[3],
                c = n[4],
                u = n[5];
            void 0 === i && (i = !0);
            void 0 === o && (o = !1);
            var f = t.element;
            t.reach[l] = null, f[a] < 1 && (t.reach[l] = "start");
            f[a] > t[r] - t[s] - 1 && (t.reach[l] = "end");
            e && (f.dispatchEvent(Fn("ps-scroll-" + l)), e < 0 ? f.dispatchEvent(Fn("ps-scroll-" + c)) : e > 0 && f.dispatchEvent(Fn("ps-scroll-" + u)), i && function(t, e) {
                Yn(t, e), Xn(t, e)
            }(t, l));
            t.reach[l] && (e || o) && f.dispatchEvent(Fn("ps-" + l + "-reach-" + t.reach[l]))
        }(t, n, r, i, o)
    }

    function zn(t) {
        return parseInt(t, 10) || 0
    }
    qn.prototype.eventElement = function(t) {
        var e = this.eventElements.filter((function(e) {
            return e.element === t
        }))[0];
        return e || (e = new Bn(t), this.eventElements.push(e)), e
    }, qn.prototype.bind = function(t, e, n) {
        this.eventElement(t).bind(e, n)
    }, qn.prototype.unbind = function(t, e, n) {
        var i = this.eventElement(t);
        i.unbind(e, n), i.isEmpty && this.eventElements.splice(this.eventElements.indexOf(i), 1)
    }, qn.prototype.unbindAll = function() {
        this.eventElements.forEach((function(t) {
            return t.unbindAll()
        })), this.eventElements = []
    }, qn.prototype.once = function(t, e, n) {
        var i = this.eventElement(t),
            o = function(t) {
                i.unbind(e, o), n(t)
            };
        i.bind(e, o)
    };
    var Vn = {
        isWebKit: "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style,
        supportsTouch: "undefined" != typeof window && ("ontouchstart" in window || "maxTouchPoints" in window.navigator && window.navigator.maxTouchPoints > 0 || window.DocumentTouch && document instanceof window.DocumentTouch),
        supportsIePointer: "undefined" != typeof navigator && navigator.msMaxTouchPoints,
        isChrome: "undefined" != typeof navigator && /Chrome/i.test(navigator && navigator.userAgent)
    };

    function Kn(t) {
        var e = t.element,
            n = Math.floor(e.scrollTop),
            i = e.getBoundingClientRect();
        t.containerWidth = Math.ceil(i.width), t.containerHeight = Math.ceil(i.height), t.contentWidth = e.scrollWidth, t.contentHeight = e.scrollHeight, e.contains(t.scrollbarXRail) || (In(e, Mn.rail("x")).forEach((function(t) {
                return Nn(t)
            })), e.appendChild(t.scrollbarXRail)), e.contains(t.scrollbarYRail) || (In(e, Mn.rail("y")).forEach((function(t) {
                return Nn(t)
            })), e.appendChild(t.scrollbarYRail)), !t.settings.suppressScrollX && t.containerWidth + t.settings.scrollXMarginOffset < t.contentWidth ? (t.scrollbarXActive = !0, t.railXWidth = t.containerWidth - t.railXMarginWidth, t.railXRatio = t.containerWidth / t.railXWidth, t.scrollbarXWidth = $n(t, zn(t.railXWidth * t.containerWidth / t.contentWidth)), t.scrollbarXLeft = zn((t.negativeScrollAdjustment + e.scrollLeft) * (t.railXWidth - t.scrollbarXWidth) / (t.contentWidth - t.containerWidth))) : t.scrollbarXActive = !1, !t.settings.suppressScrollY && t.containerHeight + t.settings.scrollYMarginOffset < t.contentHeight ? (t.scrollbarYActive = !0, t.railYHeight = t.containerHeight - t.railYMarginHeight, t.railYRatio = t.containerHeight / t.railYHeight, t.scrollbarYHeight = $n(t, zn(t.railYHeight * t.containerHeight / t.contentHeight)), t.scrollbarYTop = zn(n * (t.railYHeight - t.scrollbarYHeight) / (t.contentHeight - t.containerHeight))) : t.scrollbarYActive = !1, t.scrollbarXLeft >= t.railXWidth - t.scrollbarXWidth && (t.scrollbarXLeft = t.railXWidth - t.scrollbarXWidth), t.scrollbarYTop >= t.railYHeight - t.scrollbarYHeight && (t.scrollbarYTop = t.railYHeight - t.scrollbarYHeight),
            function(t, e) {
                var n = {
                        width: e.railXWidth
                    },
                    i = Math.floor(t.scrollTop);
                e.isRtl ? n.left = e.negativeScrollAdjustment + t.scrollLeft + e.containerWidth - e.contentWidth : n.left = t.scrollLeft;
                e.isScrollbarXUsingBottom ? n.bottom = e.scrollbarXBottom - i : n.top = e.scrollbarXTop + i;
                Cn(e.scrollbarXRail, n);
                var o = {
                    top: i,
                    height: e.railYHeight
                };
                e.isScrollbarYUsingRight ? e.isRtl ? o.right = e.contentWidth - (e.negativeScrollAdjustment + t.scrollLeft) - e.scrollbarYRight - e.scrollbarYOuterWidth - 9 : o.right = e.scrollbarYRight - t.scrollLeft : e.isRtl ? o.left = e.negativeScrollAdjustment + t.scrollLeft + 2 * e.containerWidth - e.contentWidth - e.scrollbarYLeft - e.scrollbarYOuterWidth : o.left = e.scrollbarYLeft + t.scrollLeft;
                Cn(e.scrollbarYRail, o), Cn(e.scrollbarX, {
                    left: e.scrollbarXLeft,
                    width: e.scrollbarXWidth - e.railBorderXWidth
                }), Cn(e.scrollbarY, {
                    top: e.scrollbarYTop,
                    height: e.scrollbarYHeight - e.railBorderYWidth
                })
            }(e, t), t.scrollbarXActive ? e.classList.add(Hn.active("x")) : (e.classList.remove(Hn.active("x")), t.scrollbarXWidth = 0, t.scrollbarXLeft = 0, e.scrollLeft = !0 === t.isRtl ? t.contentWidth : 0), t.scrollbarYActive ? e.classList.add(Hn.active("y")) : (e.classList.remove(Hn.active("y")), t.scrollbarYHeight = 0, t.scrollbarYTop = 0, e.scrollTop = 0)
    }

    function $n(t, e) {
        return t.settings.minScrollbarLength && (e = Math.max(e, t.settings.minScrollbarLength)), t.settings.maxScrollbarLength && (e = Math.min(e, t.settings.maxScrollbarLength)), e
    }

    function Jn(t, e) {
        var n = e[0],
            i = e[1],
            o = e[2],
            r = e[3],
            s = e[4],
            a = e[5],
            l = e[6],
            c = e[7],
            u = e[8],
            f = t.element,
            d = null,
            h = null,
            p = null;

        function g(e) {
            e.touches && e.touches[0] && (e[o] = e.touches[0].pageY), f[l] = d + p * (e[o] - h), Yn(t, c), Kn(t), e.stopPropagation(), e.preventDefault()
        }

        function m() {
            Xn(t, c), t[u].classList.remove(Hn.clicking), t.event.unbind(t.ownerDocument, "mousemove", g)
        }

        function v(e, s) {
            d = f[l], s && e.touches && (e[o] = e.touches[0].pageY), h = e[o], p = (t[i] - t[n]) / (t[r] - t[a]), s ? t.event.bind(t.ownerDocument, "touchmove", g) : (t.event.bind(t.ownerDocument, "mousemove", g), t.event.once(t.ownerDocument, "mouseup", m), e.preventDefault()), t[u].classList.add(Hn.clicking), e.stopPropagation()
        }
        t.event.bind(t[s], "mousedown", (function(t) {
            v(t)
        })), t.event.bind(t[s], "touchstart", (function(t) {
            v(t, !0)
        }))
    }
    var Gn = {
            "click-rail": function(t) {
                t.element, t.event.bind(t.scrollbarY, "mousedown", (function(t) {
                    return t.stopPropagation()
                })), t.event.bind(t.scrollbarYRail, "mousedown", (function(e) {
                    var n = e.pageY - window.pageYOffset - t.scrollbarYRail.getBoundingClientRect().top > t.scrollbarYTop ? 1 : -1;
                    t.element.scrollTop += n * t.containerHeight, Kn(t), e.stopPropagation()
                })), t.event.bind(t.scrollbarX, "mousedown", (function(t) {
                    return t.stopPropagation()
                })), t.event.bind(t.scrollbarXRail, "mousedown", (function(e) {
                    var n = e.pageX - window.pageXOffset - t.scrollbarXRail.getBoundingClientRect().left > t.scrollbarXLeft ? 1 : -1;
                    t.element.scrollLeft += n * t.containerWidth, Kn(t), e.stopPropagation()
                }))
            },
            "drag-thumb": function(t) {
                Jn(t, ["containerWidth", "contentWidth", "pageX", "railXWidth", "scrollbarX", "scrollbarXWidth", "scrollLeft", "x", "scrollbarXRail"]), Jn(t, ["containerHeight", "contentHeight", "pageY", "railYHeight", "scrollbarY", "scrollbarYHeight", "scrollTop", "y", "scrollbarYRail"])
            },
            keyboard: function(t) {
                var e = t.element;
                t.event.bind(t.ownerDocument, "keydown", (function(n) {
                    if (!(n.isDefaultPrevented && n.isDefaultPrevented() || n.defaultPrevented) && (jn(e, ":hover") || jn(t.scrollbarX, ":focus") || jn(t.scrollbarY, ":focus"))) {
                        var i, o = document.activeElement ? document.activeElement : t.ownerDocument.activeElement;
                        if (o) {
                            if ("IFRAME" === o.tagName) o = o.contentDocument.activeElement;
                            else
                                for (; o.shadowRoot;) o = o.shadowRoot.activeElement;
                            if (jn(i = o, "input,[contenteditable]") || jn(i, "select,[contenteditable]") || jn(i, "textarea,[contenteditable]") || jn(i, "button,[contenteditable]")) return
                        }
                        var r = 0,
                            s = 0;
                        switch (n.which) {
                            case 37:
                                r = n.metaKey ? -t.contentWidth : n.altKey ? -t.containerWidth : -30;
                                break;
                            case 38:
                                s = n.metaKey ? t.contentHeight : n.altKey ? t.containerHeight : 30;
                                break;
                            case 39:
                                r = n.metaKey ? t.contentWidth : n.altKey ? t.containerWidth : 30;
                                break;
                            case 40:
                                s = n.metaKey ? -t.contentHeight : n.altKey ? -t.containerHeight : -30;
                                break;
                            case 32:
                                s = n.shiftKey ? t.containerHeight : -t.containerHeight;
                                break;
                            case 33:
                                s = t.containerHeight;
                                break;
                            case 34:
                                s = -t.containerHeight;
                                break;
                            case 36:
                                s = t.contentHeight;
                                break;
                            case 35:
                                s = -t.contentHeight;
                                break;
                            default:
                                return
                        }
                        t.settings.suppressScrollX && 0 !== r || t.settings.suppressScrollY && 0 !== s || (e.scrollTop -= s, e.scrollLeft += r, Kn(t), function(n, i) {
                            var o = Math.floor(e.scrollTop);
                            if (0 === n) {
                                if (!t.scrollbarYActive) return !1;
                                if (0 === o && i > 0 || o >= t.contentHeight - t.containerHeight && i < 0) return !t.settings.wheelPropagation
                            }
                            var r = e.scrollLeft;
                            if (0 === i) {
                                if (!t.scrollbarXActive) return !1;
                                if (0 === r && n < 0 || r >= t.contentWidth - t.containerWidth && n > 0) return !t.settings.wheelPropagation
                            }
                            return !0
                        }(r, s) && n.preventDefault())
                    }
                }))
            },
            wheel: function(t) {
                var e = t.element;

                function n(n) {
                    var i = function(t) {
                            var e = t.deltaX,
                                n = -1 * t.deltaY;
                            return "undefined" != typeof e && "undefined" != typeof n || (e = -1 * t.wheelDeltaX / 6, n = t.wheelDeltaY / 6), t.deltaMode && 1 === t.deltaMode && (e *= 10, n *= 10), e != e && n != n && (e = 0, n = t.wheelDelta), t.shiftKey ? [-n, -e] : [e, n]
                        }(n),
                        o = i[0],
                        r = i[1];
                    if (! function(t, n, i) {
                            if (!Vn.isWebKit && e.querySelector("select:focus")) return !0;
                            if (!e.contains(t)) return !1;
                            for (var o = t; o && o !== e;) {
                                if (o.classList.contains(Mn.consuming)) return !0;
                                var r = Sn(o);
                                if (i && r.overflowY.match(/(scroll|auto)/)) {
                                    var s = o.scrollHeight - o.clientHeight;
                                    if (s > 0 && (o.scrollTop > 0 && i < 0 || o.scrollTop < s && i > 0)) return !0
                                }
                                if (n && r.overflowX.match(/(scroll|auto)/)) {
                                    var a = o.scrollWidth - o.clientWidth;
                                    if (a > 0 && (o.scrollLeft > 0 && n < 0 || o.scrollLeft < a && n > 0)) return !0
                                }
                                o = o.parentNode
                            }
                            return !1
                        }(n.target, o, r)) {
                        var s = !1;
                        t.settings.useBothWheelAxes ? t.scrollbarYActive && !t.scrollbarXActive ? (r ? e.scrollTop -= r * t.settings.wheelSpeed : e.scrollTop += o * t.settings.wheelSpeed, s = !0) : t.scrollbarXActive && !t.scrollbarYActive && (o ? e.scrollLeft += o * t.settings.wheelSpeed : e.scrollLeft -= r * t.settings.wheelSpeed, s = !0) : (e.scrollTop -= r * t.settings.wheelSpeed, e.scrollLeft += o * t.settings.wheelSpeed), Kn(t), (s = s || function(n, i) {
                            var o = Math.floor(e.scrollTop),
                                r = 0 === e.scrollTop,
                                s = o + e.offsetHeight === e.scrollHeight,
                                a = 0 === e.scrollLeft,
                                l = e.scrollLeft + e.offsetWidth === e.scrollWidth;
                            return !(Math.abs(i) > Math.abs(n) ? r || s : a || l) || !t.settings.wheelPropagation
                        }(o, r)) && !n.ctrlKey && (n.stopPropagation(), n.preventDefault())
                    }
                }
                "undefined" != typeof window.onwheel ? t.event.bind(e, "wheel", n) : "undefined" != typeof window.onmousewheel && t.event.bind(e, "mousewheel", n)
            },
            touch: function(t) {
                if (Vn.supportsTouch || Vn.supportsIePointer) {
                    var e = t.element,
                        n = {},
                        i = 0,
                        o = {},
                        r = null;
                    Vn.supportsTouch ? (t.event.bind(e, "touchstart", c), t.event.bind(e, "touchmove", u), t.event.bind(e, "touchend", f)) : Vn.supportsIePointer && (window.PointerEvent ? (t.event.bind(e, "pointerdown", c), t.event.bind(e, "pointermove", u), t.event.bind(e, "pointerup", f)) : window.MSPointerEvent && (t.event.bind(e, "MSPointerDown", c), t.event.bind(e, "MSPointerMove", u), t.event.bind(e, "MSPointerUp", f)))
                }

                function s(n, i) {
                    e.scrollTop -= i, e.scrollLeft -= n, Kn(t)
                }

                function a(t) {
                    return t.targetTouches ? t.targetTouches[0] : t
                }

                function l(t) {
                    return (!t.pointerType || "pen" !== t.pointerType || 0 !== t.buttons) && (!(!t.targetTouches || 1 !== t.targetTouches.length) || !(!t.pointerType || "mouse" === t.pointerType || t.pointerType === t.MSPOINTER_TYPE_MOUSE))
                }

                function c(t) {
                    if (l(t)) {
                        var e = a(t);
                        n.pageX = e.pageX, n.pageY = e.pageY, i = (new Date).getTime(), null !== r && clearInterval(r)
                    }
                }

                function u(r) {
                    if (l(r)) {
                        var c = a(r),
                            u = {
                                pageX: c.pageX,
                                pageY: c.pageY
                            },
                            f = u.pageX - n.pageX,
                            d = u.pageY - n.pageY;
                        if (function(t, n, i) {
                                if (!e.contains(t)) return !1;
                                for (var o = t; o && o !== e;) {
                                    if (o.classList.contains(Mn.consuming)) return !0;
                                    var r = Sn(o);
                                    if (i && r.overflowY.match(/(scroll|auto)/)) {
                                        var s = o.scrollHeight - o.clientHeight;
                                        if (s > 0 && (o.scrollTop > 0 && i < 0 || o.scrollTop < s && i > 0)) return !0
                                    }
                                    if (n && r.overflowX.match(/(scroll|auto)/)) {
                                        var a = o.scrollWidth - o.clientWidth;
                                        if (a > 0 && (o.scrollLeft > 0 && n < 0 || o.scrollLeft < a && n > 0)) return !0
                                    }
                                    o = o.parentNode
                                }
                                return !1
                            }(r.target, f, d)) return;
                        s(f, d), n = u;
                        var h = (new Date).getTime(),
                            p = h - i;
                        p > 0 && (o.x = f / p, o.y = d / p, i = h),
                            function(n, i) {
                                var o = Math.floor(e.scrollTop),
                                    r = e.scrollLeft,
                                    s = Math.abs(n),
                                    a = Math.abs(i);
                                if (a > s) {
                                    if (i < 0 && o === t.contentHeight - t.containerHeight || i > 0 && 0 === o) return 0 === window.scrollY && i > 0 && Vn.isChrome
                                } else if (s > a && (n < 0 && r === t.contentWidth - t.containerWidth || n > 0 && 0 === r)) return !0;
                                return !0
                            }(f, d) && r.preventDefault()
                    }
                }

                function f() {
                    t.settings.swipeEasing && (clearInterval(r), r = setInterval((function() {
                        t.isInitialized ? clearInterval(r) : o.x || o.y ? Math.abs(o.x) < .01 && Math.abs(o.y) < .01 ? clearInterval(r) : (s(30 * o.x, 30 * o.y), o.x *= .8, o.y *= .8) : clearInterval(r)
                    }), 10))
                }
            }
        },
        Zn = function(t, e) {
            var n = this;
            if (void 0 === e && (e = {}), "string" == typeof t && (t = document.querySelector(t)), !t || !t.nodeName) throw new Error("no element is specified to initialize PerfectScrollbar");
            for (var i in this.element = t, t.classList.add(Pn), this.settings = {
                    handlers: ["click-rail", "drag-thumb", "keyboard", "wheel", "touch"],
                    maxScrollbarLength: null,
                    minScrollbarLength: null,
                    scrollingThreshold: 1e3,
                    scrollXMarginOffset: 0,
                    scrollYMarginOffset: 0,
                    suppressScrollX: !1,
                    suppressScrollY: !1,
                    swipeEasing: !0,
                    useBothWheelAxes: !1,
                    wheelPropagation: !0,
                    wheelSpeed: 1
                }, e) this.settings[i] = e[i];
            this.containerWidth = null, this.containerHeight = null, this.contentWidth = null, this.contentHeight = null;
            var o, r, s = function() {
                    return t.classList.add(Hn.focus)
                },
                a = function() {
                    return t.classList.remove(Hn.focus)
                };
            this.isRtl = "rtl" === Sn(t).direction, !0 === this.isRtl && t.classList.add(Rn), this.isNegativeScroll = (r = t.scrollLeft, t.scrollLeft = -1, o = t.scrollLeft < 0, t.scrollLeft = r, o), this.negativeScrollAdjustment = this.isNegativeScroll ? t.scrollWidth - t.clientWidth : 0, this.event = new qn, this.ownerDocument = t.ownerDocument || document, this.scrollbarXRail = Dn(Mn.rail("x")), t.appendChild(this.scrollbarXRail), this.scrollbarX = Dn(Mn.thumb("x")), this.scrollbarXRail.appendChild(this.scrollbarX), this.scrollbarX.setAttribute("tabindex", 0), this.event.bind(this.scrollbarX, "focus", s), this.event.bind(this.scrollbarX, "blur", a), this.scrollbarXActive = null, this.scrollbarXWidth = null, this.scrollbarXLeft = null;
            var l = Sn(this.scrollbarXRail);
            this.scrollbarXBottom = parseInt(l.bottom, 10), isNaN(this.scrollbarXBottom) ? (this.isScrollbarXUsingBottom = !1, this.scrollbarXTop = zn(l.top)) : this.isScrollbarXUsingBottom = !0, this.railBorderXWidth = zn(l.borderLeftWidth) + zn(l.borderRightWidth), Cn(this.scrollbarXRail, {
                display: "block"
            }), this.railXMarginWidth = zn(l.marginLeft) + zn(l.marginRight), Cn(this.scrollbarXRail, {
                display: ""
            }), this.railXWidth = null, this.railXRatio = null, this.scrollbarYRail = Dn(Mn.rail("y")), t.appendChild(this.scrollbarYRail), this.scrollbarY = Dn(Mn.thumb("y")), this.scrollbarYRail.appendChild(this.scrollbarY), this.scrollbarY.setAttribute("tabindex", 0), this.event.bind(this.scrollbarY, "focus", s), this.event.bind(this.scrollbarY, "blur", a), this.scrollbarYActive = null, this.scrollbarYHeight = null, this.scrollbarYTop = null;
            var c = Sn(this.scrollbarYRail);
            this.scrollbarYRight = parseInt(c.right, 10), isNaN(this.scrollbarYRight) ? (this.isScrollbarYUsingRight = !1, this.scrollbarYLeft = zn(c.left)) : this.isScrollbarYUsingRight = !0, this.scrollbarYOuterWidth = this.isRtl ? function(t) {
                var e = Sn(t);
                return zn(e.width) + zn(e.paddingLeft) + zn(e.paddingRight) + zn(e.borderLeftWidth) + zn(e.borderRightWidth)
            }(this.scrollbarY) : null, this.railBorderYWidth = zn(c.borderTopWidth) + zn(c.borderBottomWidth), Cn(this.scrollbarYRail, {
                display: "block"
            }), this.railYMarginHeight = zn(c.marginTop) + zn(c.marginBottom), Cn(this.scrollbarYRail, {
                display: ""
            }), this.railYHeight = null, this.railYRatio = null, this.reach = {
                x: t.scrollLeft <= 0 ? "start" : t.scrollLeft >= this.contentWidth - this.containerWidth ? "end" : null,
                y: t.scrollTop <= 0 ? "start" : t.scrollTop >= this.contentHeight - this.containerHeight ? "end" : null
            }, this.isAlive = !0, this.settings.handlers.forEach((function(t) {
                return Gn[t](n)
            })), this.lastScrollTop = Math.floor(t.scrollTop), this.lastScrollLeft = t.scrollLeft, this.event.bind(this.element, "scroll", (function(t) {
                return n.onScroll(t)
            })), Kn(this)
        };
    Zn.prototype.update = function() {
        this.isAlive && (this.negativeScrollAdjustment = this.isNegativeScroll ? this.element.scrollWidth - this.element.clientWidth : 0, Cn(this.scrollbarXRail, {
            display: "block"
        }), Cn(this.scrollbarYRail, {
            display: "block"
        }), this.railXMarginWidth = zn(Sn(this.scrollbarXRail).marginLeft) + zn(Sn(this.scrollbarXRail).marginRight), this.railYMarginHeight = zn(Sn(this.scrollbarYRail).marginTop) + zn(Sn(this.scrollbarYRail).marginBottom), Cn(this.scrollbarXRail, {
            display: "none"
        }), Cn(this.scrollbarYRail, {
            display: "none"
        }), Kn(this), Qn(this, "top", 0, !1, !0), Qn(this, "left", 0, !1, !0), Cn(this.scrollbarXRail, {
            display: ""
        }), Cn(this.scrollbarYRail, {
            display: ""
        }))
    }, Zn.prototype.onScroll = function(t) {
        this.isAlive && (Kn(this), Qn(this, "top", this.element.scrollTop - this.lastScrollTop), Qn(this, "left", this.element.scrollLeft - this.lastScrollLeft), this.lastScrollTop = Math.floor(this.element.scrollTop), this.lastScrollLeft = this.element.scrollLeft)
    }, Zn.prototype.destroy = function() {
        this.isAlive && (this.event.unbindAll(), Nn(this.scrollbarX), Nn(this.scrollbarY), Nn(this.scrollbarXRail), Nn(this.scrollbarYRail), this.removePsClasses(), this.element = null, this.scrollbarX = null, this.scrollbarY = null, this.scrollbarXRail = null, this.scrollbarYRail = null, this.isAlive = !1)
    }, Zn.prototype.removePsClasses = function() {
        this.element.className = this.element.className.split(" ").filter((function(t) {
            return !t.match(/^ps([-_].+|)$/)
        })).join(" ")
    };
    var ti = "sidebar",
        ei = {
            breakpoints: {
                xs: "c-sidebar-show",
                sm: "c-sidebar-sm-show",
                md: "c-sidebar-md-show",
                lg: "c-sidebar-lg-show",
                xl: "c-sidebar-xl-show"
            },
            dropdownAccordion: !0
        },
        ni = {
            breakpoints: "object",
            dropdownAccordion: "(string|boolean)"
        },
        ii = function() {
            function t(t, e) {
                if ("undefined" == typeof Zn) throw new TypeError("CoreUI's sidebar require Perfect Scrollbar");
                this._element = t, this._config = this._getConfig(e), this._open = this._isVisible(), this._mobile = this._isMobile(), this._overlaid = this._isOverlaid(), this._minimize = this._isMinimized(), this._unfoldable = this._isUnfoldable(), this._setActiveLink(), this._ps = null, this._backdrop = null, this._psInit(), this._addEventListeners(), L(t, "coreui.sidebar", this)
            }
            var n = t.prototype;
            return n.open = function(t) {
                var e = this;
                q.trigger(this._element, "open.coreui.sidebar"), this._isMobile() ? (this._addClassName(this._firstBreakpointClassName()), this._showBackdrop(), q.one(this._element, "transitionend", (function() {
                    e._addClickOutListener()
                }))) : t ? (this._addClassName(this._getBreakpointClassName(t)), this._isOverlaid() && q.one(this._element, "transitionend", (function() {
                    e._addClickOutListener()
                }))) : (this._addClassName(this._firstBreakpointClassName()), this._isOverlaid() && q.one(this._element, "transitionend", (function() {
                    e._addClickOutListener()
                })));
                q.one(this._element, "transitionend", (function() {
                    !0 === e._isVisible() && (e._open = !0, q.trigger(e._element, "opened.coreui.sidebar"))
                }))
            }, n.close = function(t) {
                var e = this;
                q.trigger(this._element, "close.coreui.sidebar"), this._isMobile() ? (this._element.classList.remove(this._firstBreakpointClassName()), this._removeBackdrop(), this._removeClickOutListener()) : t ? (this._element.classList.remove(this._getBreakpointClassName(t)), this._isOverlaid() && this._removeClickOutListener()) : (this._element.classList.remove(this._firstBreakpointClassName()), this._isOverlaid() && this._removeClickOutListener());
                q.one(this._element, "transitionend", (function() {
                    !1 === e._isVisible() && (e._open = !1, q.trigger(e._element, "closed.coreui.sidebar"))
                }))
            }, n.toggle = function(t) {
                this._open ? this.close(t) : this.open(t)
            }, n.minimize = function() {
                this._isMobile() || (this._addClassName("c-sidebar-minimized"), this._minimize = !0, this._psDestroy())
            }, n.unfoldable = function() {
                this._isMobile() || (this._addClassName("c-sidebar-unfoldable"), this._unfoldable = !0)
            }, n.reset = function() {
                this._element.classList.contains("c-sidebar-minimized") && (this._element.classList.remove("c-sidebar-minimized"), this._minimize = !1, q.one(this._element, "transitionend", this._psInit())), this._element.classList.contains("c-sidebar-unfoldable") && (this._element.classList.remove("c-sidebar-unfoldable"), this._unfoldable = !1)
            }, n._getConfig = function(t) {
                return t = o(o(o({}, this.constructor.Default), at.getDataAttributes(this._element)), t), v(ti, t, this.constructor.DefaultType), t
            }, n._isMobile = function() {
                return Boolean(window.getComputedStyle(this._element, null).getPropertyValue("--is-mobile"))
            }, n._isIOS = function() {
                var t = ["iPad Simulator", "iPhone Simulator", "iPod Simulator", "iPad", "iPhone", "iPod"];
                if (Boolean(navigator.platform))
                    for (; t.length;)
                        if (navigator.platform === t.pop()) return !0;
                return !1
            }, n._isMinimized = function() {
                return this._element.classList.contains("c-sidebar-minimized")
            }, n._isOverlaid = function() {
                return this._element.classList.contains("c-sidebar-overlaid")
            }, n._isUnfoldable = function() {
                return this._element.classList.contains("c-sidebar-unfoldable")
            }, n._isVisible = function() {
                var t = this._element.getBoundingClientRect();
                return t.top >= 0 && t.left >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight) && t.right <= (window.innerWidth || document.documentElement.clientWidth)
            }, n._addClassName = function(t) {
                this._element.classList.add(t)
            }, n._firstBreakpointClassName = function() {
                return Object.keys(ei.breakpoints).map((function(t) {
                    return ei.breakpoints[t]
                }))[0]
            }, n._getBreakpointClassName = function(t) {
                return ei.breakpoints[t]
            }, n._removeBackdrop = function() {
                this._backdrop && (this._backdrop.parentNode.removeChild(this._backdrop), this._backdrop = null)
            }, n._showBackdrop = function() {
                this._backdrop || (this._backdrop = document.createElement("div"), this._backdrop.className = "c-sidebar-backdrop", this._backdrop.classList.add("c-fade"), document.body.appendChild(this._backdrop), y(this._backdrop), this._backdrop.classList.add("c-show"))
            }, n._clickOutListener = function(t, e) {
                null === t.target.closest(".c-sidebar") && (t.preventDefault(), t.stopPropagation(), e.close())
            }, n._addClickOutListener = function() {
                var t = this;
                q.on(document, "click.coreui.sidebar.data-api", (function(e) {
                    t._clickOutListener(e, t)
                }))
            }, n._removeClickOutListener = function() {
                q.off(document, "click.coreui.sidebar.data-api")
            }, n._getAllSiblings = function(t, e) {
                var n = [];
                t = t.parentNode.firstChild;
                do {
                    3 !== t.nodeType && (e && !e(t) || n.push(t))
                } while (t = t.nextSibling);
                return n
            }, n._toggleDropdown = function(t, e) {
                var n = t.target;
                n.classList.contains("c-sidebar-nav-dropdown-toggle") || (n = n.closest(".c-sidebar-nav-dropdown-toggle"));
                var i = n.closest(".c-sidebar-nav").dataset;
                "undefined" != typeof i.dropdownAccordion && (ei.dropdownAccordion = JSON.parse(i.dropdownAccordion)), !0 === ei.dropdownAccordion && this._getAllSiblings(n.parentElement).forEach((function(t) {
                    t !== n.parentNode && t.classList.contains("c-sidebar-nav-dropdown") && t.classList.remove("c-show")
                })), n.parentNode.classList.toggle("c-show"), e._psUpdate()
            }, n._psInit = function() {
                this._element.querySelector(".c-sidebar-nav") && !this._isIOS() && (this._ps = new Zn(this._element.querySelector(".c-sidebar-nav"), {
                    suppressScrollX: !0,
                    wheelPropagation: !1
                }))
            }, n._psUpdate = function() {
                this._ps && this._ps.update()
            }, n._psDestroy = function() {
                this._ps && (this._ps.destroy(), this._ps = null)
            }, n._getParents = function(t, e) {
                for (var n = []; t && t !== document; t = t.parentNode) e ? t.matches(e) && n.push(t) : n.push(t);
                return n
            }, n._setActiveLink = function() {
                var t = this;
                Array.from(this._element.querySelectorAll(".c-sidebar-nav-link")).forEach((function(e) {
                    var n;
                    "#" === (n = /\\?.*=/.test(String(window.location)) || /\\?./.test(String(window.location)) ? String(window.location).split("?")[0] : /#./.test(String(window.location)) ? String(window.location).split("#")[0] : String(window.location)).slice(-1) && (n = n.slice(0, -1)), e.href === n && (e.classList.add("c-active"), Array.from(t._getParents(e, ".c-sidebar-nav-dropdown")).forEach((function(t) {
                        t.classList.add("c-show")
                    })))
                }))
            }, n._addEventListeners = function() {
                var t = this;
                this._mobile && this._open && this._addClickOutListener(), this._overlaid && this._open && this._addClickOutListener(), q.on(this._element, "classtoggle", (function(e) {
                    if ("c-sidebar-minimized" === e.detail.className && (t._element.classList.contains("c-sidebar-minimized") ? t.minimize() : t.reset()), "c-sidebar-unfoldable" === e.detail.className && (t._element.classList.contains("c-sidebar-unfoldable") ? t.unfoldable() : t.reset()), "undefined" != typeof Object.keys(ei.breakpoints).find((function(t) {
                            return ei.breakpoints[t] === e.detail.className
                        }))) {
                        var n = e.detail.className,
                            i = Object.keys(ei.breakpoints).find((function(t) {
                                return ei.breakpoints[t] === n
                            }));
                        e.detail.add ? t.open(i) : t.close(i)
                    }
                })), q.on(this._element, "click.coreui.sidebar.data-api", ".c-sidebar-nav-dropdown-toggle", (function(e) {
                    e.preventDefault(), t._toggleDropdown(e, t)
                })), q.on(this._element, "click.coreui.sidebar.data-api", ".c-sidebar-nav-link", (function() {
                    t._isMobile() && t.close()
                }))
            }, t._sidebarInterface = function(e, n) {
                var i = k(e, "coreui.sidebar");
                if (i || (i = new t(e, "object" == typeof n && n)), "string" == typeof n) {
                    if ("undefined" == typeof i[n]) throw new TypeError('No method named "' + n + '"');
                    i[n]()
                }
            }, t.jQueryInterface = function(e) {
                return this.each((function() {
                    t._sidebarInterface(this, e)
                }))
            }, t.getInstance = function(t) {
                return k(t, "coreui.sidebar")
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "3.2.0"
                }
            }, {
                key: "Default",
                get: function() {
                    return ei
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return ni
                }
            }]), t
        }();
    q.on(window, "load.coreui.sidebar.data-api", (function() {
        Array.from(document.querySelectorAll(".c-sidebar")).forEach((function(t) {
            ii._sidebarInterface(t)
        }))
    }));
    var oi = w();
    if (oi) {
        var ri = oi.fn[ti];
        oi.fn[ti] = ii.jQueryInterface, oi.fn[ti].Constructor = ii, oi.fn[ti].noConflict = function() {
            return oi.fn[ti] = ri, ii.jQueryInterface
        }
    }
    var si = function() {
        function t(t) {
            this._element = t, L(this._element, "coreui.tab", this)
        }
        var n = t.prototype;
        return n.show = function() {
            var t = this;
            if (!(this._element.parentNode && this._element.parentNode.nodeType === Node.ELEMENT_NODE && this._element.classList.contains("active") || this._element.classList.contains("disabled"))) {
                var e, n = d(this._element),
                    i = this._element.closest(".nav, .list-group");
                if (i) {
                    var o = "UL" === i.nodeName || "OL" === i.nodeName ? ":scope > li > .active" : ".active";
                    e = (e = tt.find(o, i))[e.length - 1]
                }
                var r = null;
                if (e && (r = q.trigger(e, "hide.coreui.tab", {
                        relatedTarget: this._element
                    })), !(q.trigger(this._element, "show.coreui.tab", {
                        relatedTarget: e
                    }).defaultPrevented || null !== r && r.defaultPrevented)) {
                    this._activate(this._element, i);
                    var s = function() {
                        q.trigger(e, "hidden.coreui.tab", {
                            relatedTarget: t._element
                        }), q.trigger(t._element, "shown.coreui.tab", {
                            relatedTarget: e
                        })
                    };
                    n ? this._activate(n, n.parentNode, s) : s()
                }
            }
        }, n.dispose = function() {
            T(this._element, "coreui.tab"), this._element = null
        }, n._activate = function(t, e, n) {
            var i = this,
                o = (!e || "UL" !== e.nodeName && "OL" !== e.nodeName ? tt.children(e, ".active") : tt.find(":scope > li > .active", e))[0],
                r = n && o && o.classList.contains("fade"),
                s = function() {
                    return i._transitionComplete(t, o, n)
                };
            if (o && r) {
                var a = h(o);
                o.classList.remove("show"), q.one(o, "transitionend", s), m(o, a)
            } else s()
        }, n._transitionComplete = function(t, e, n) {
            if (e) {
                e.classList.remove("active");
                var i = tt.findOne(":scope > .dropdown-menu .active", e.parentNode);
                i && i.classList.remove("active"), "tab" === e.getAttribute("role") && e.setAttribute("aria-selected", !1)
            }(t.classList.add("active"), "tab" === t.getAttribute("role") && t.setAttribute("aria-selected", !0), y(t), t.classList.contains("fade") && t.classList.add("show"), t.parentNode && t.parentNode.classList.contains("dropdown-menu")) && (t.closest(".dropdown") && tt.find(".dropdown-toggle").forEach((function(t) {
                return t.classList.add("active")
            })), t.setAttribute("aria-expanded", !0));
            n && n()
        }, t.jQueryInterface = function(e) {
            return this.each((function() {
                var n = k(this, "coreui.tab") || new t(this);
                if ("string" == typeof e) {
                    if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                    n[e]()
                }
            }))
        }, t.getInstance = function(t) {
            return k(t, "coreui.tab")
        }, e(t, null, [{
            key: "VERSION",
            get: function() {
                return "3.2.0"
            }
        }]), t
    }();
    q.on(document, "click.coreui.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]', (function(t) {
        t.preventDefault(), (k(this, "coreui.tab") || new si(this)).show()
    }));
    var ai = w();
    if (ai) {
        var li = ai.fn.tab;
        ai.fn.tab = si.jQueryInterface, ai.fn.tab.Constructor = si, ai.fn.tab.noConflict = function() {
            return ai.fn.tab = li, si.jQueryInterface
        }
    }
    var ci, ui, fi, di, hi, pi = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        gi = {
            animation: !0,
            autohide: !0,
            delay: 500
        },
        mi = function() {
            function t(t, e) {
                this._element = t, this._config = this._getConfig(e), this._timeout = null, this._setListeners(), L(t, "coreui.toast", this)
            }
            var n = t.prototype;
            return n.show = function() {
                var t = this;
                if (!q.trigger(this._element, "show.coreui.toast").defaultPrevented) {
                    this._config.animation && this._element.classList.add("fade");
                    var e = function() {
                        t._element.classList.remove("showing"), t._element.classList.add("show"), q.trigger(t._element, "shown.coreui.toast"), t._config.autohide && (t._timeout = setTimeout((function() {
                            t.hide()
                        }), t._config.delay))
                    };
                    if (this._element.classList.remove("hide"), y(this._element), this._element.classList.add("showing"), this._config.animation) {
                        var n = h(this._element);
                        q.one(this._element, "transitionend", e), m(this._element, n)
                    } else e()
                }
            }, n.hide = function() {
                var t = this;
                if (this._element.classList.contains("show") && !q.trigger(this._element, "hide.coreui.toast").defaultPrevented) {
                    var e = function() {
                        t._element.classList.add("hide"), q.trigger(t._element, "hidden.coreui.toast")
                    };
                    if (this._element.classList.remove("show"), this._config.animation) {
                        var n = h(this._element);
                        q.one(this._element, "transitionend", e), m(this._element, n)
                    } else e()
                }
            }, n.dispose = function() {
                clearTimeout(this._timeout), this._timeout = null, this._element.classList.contains("show") && this._element.classList.remove("show"), q.off(this._element, "click.dismiss.coreui.toast"), T(this._element, "coreui.toast"), this._element = null, this._config = null
            }, n._getConfig = function(t) {
                return t = o(o(o({}, gi), at.getDataAttributes(this._element)), "object" == typeof t && t ? t : {}), v("toast", t, this.constructor.DefaultType), t
            }, n._setListeners = function() {
                var t = this;
                q.on(this._element, "click.dismiss.coreui.toast", '[data-dismiss="toast"]', (function() {
                    return t.hide()
                }))
            }, t.jQueryInterface = function(e) {
                return this.each((function() {
                    var n = k(this, "coreui.toast");
                    if (n || (n = new t(this, "object" == typeof e && e)), "string" == typeof e) {
                        if ("undefined" == typeof n[e]) throw new TypeError('No method named "' + e + '"');
                        n[e](this)
                    }
                }))
            }, t.getInstance = function(t) {
                return k(t, "coreui.toast")
            }, e(t, null, [{
                key: "VERSION",
                get: function() {
                    return "3.2.0"
                }
            }, {
                key: "DefaultType",
                get: function() {
                    return pi
                }
            }, {
                key: "Default",
                get: function() {
                    return gi
                }
            }]), t
        }(),
        vi = w();
    if (vi) {
        var _i = vi.fn.toast;
        vi.fn.toast = mi.jQueryInterface, vi.fn.toast.Constructor = mi, vi.fn.toast.noConflict = function() {
            return vi.fn.toast = _i, mi.jQueryInterface
        }
    }
    return Array.from || (Array.from = (ci = Object.prototype.toString, ui = function(t) {
            return "function" == typeof t || "[object Function]" === ci.call(t)
        }, fi = Math.pow(2, 53) - 1, di = function(t) {
            var e = function(t) {
                var e = Number(t);
                return isNaN(e) ? 0 : 0 !== e && isFinite(e) ? (e > 0 ? 1 : -1) * Math.floor(Math.abs(e)) : e
            }(t);
            return Math.min(Math.max(e, 0), fi)
        }, function(t) {
            var e = this,
                n = Object(t);
            if (null == t) throw new TypeError("Array.from requires an array-like object - not null or undefined");
            var i, o = arguments.length > 1 ? arguments[1] : void 0;
            if ("undefined" != typeof o) {
                if (!ui(o)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                arguments.length > 2 && (i = arguments[2])
            }
            for (var r, s = di(n.length), a = ui(e) ? Object(new e(s)) : new Array(s), l = 0; l < s;) r = n[l], a[l] = o ? "undefined" == typeof i ? o(r, l) : o.call(i, r, l) : r, l += 1;
            return a.length = s, a
        })), Element.prototype.matches || (Element.prototype.matches = Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector), Element.prototype.closest || (Element.prototype.closest = function(t) {
            var e = this;
            do {
                if (e.matches(t)) return e;
                e = e.parentElement || e.parentNode
            } while (null !== e && 1 === e.nodeType);
            return null
        }),
        function() {
            if ("function" == typeof window.CustomEvent) return !1;
            window.CustomEvent = function(t, e) {
                e = e || {
                    bubbles: !1,
                    cancelable: !1,
                    detail: null
                };
                var n = document.createEvent("CustomEvent");
                return n.initCustomEvent(t, e.bubbles, e.cancelable, e.detail), n
            }
        }(), Element.prototype.matches || (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector || function(t) {
            for (var e = (this.document || this.ownerDocument).querySelectorAll(t), n = e.length; --n >= 0 && e.item(n) !== this;);
            return n > -1
        }), Array.prototype.find || Object.defineProperty(Array.prototype, "find", {
            value: function(t) {
                if (null == this) throw new TypeError('"this" is null or not defined');
                var e = Object(this),
                    n = e.length >>> 0;
                if ("function" != typeof t) throw new TypeError("predicate must be a function");
                for (var i = arguments[1], o = 0; o < n;) {
                    var r = e[o];
                    if (t.call(i, r, o, e)) return r;
                    o++
                }
            }
        }), "function" != typeof Object.assign && (Object.assign = function(t, e) {
            if (null == t) throw new TypeError("Cannot convert undefined or null to object");
            for (var n = Object(t), i = 1; i < arguments.length; i++) {
                var o = arguments[i];
                if (null != o)
                    for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (n[r] = o[r])
            }
            return n
        }), hi = function() {
            function t(t) {
                var e = this.constructor;
                return this.then((function(n) {
                    return e.resolve(t()).then((function() {
                        return n
                    }))
                }), (function(n) {
                    return e.resolve(t()).then((function() {
                        return e.reject(n)
                    }))
                }))
            }
            var e = setTimeout;

            function n(t) {
                return Boolean(t && "undefined" != typeof t.length)
            }

            function i() {}

            function o(t) {
                if (!(this instanceof o)) throw new TypeError("Promises must be constructed via new");
                if ("function" != typeof t) throw new TypeError("not a function");
                this._state = 0, this._handled = !1, this._value = void 0, this._deferreds = [], u(t, this)
            }

            function r(t, e) {
                for (; 3 === t._state;) t = t._value;
                0 !== t._state ? (t._handled = !0, o._immediateFn((function() {
                    var n = 1 === t._state ? e.onFulfilled : e.onRejected;
                    if (null !== n) {
                        var i;
                        try {
                            i = n(t._value)
                        } catch (t) {
                            return void a(e.promise, t)
                        }
                        s(e.promise, i)
                    } else(1 === t._state ? s : a)(e.promise, t._value)
                }))) : t._deferreds.push(e)
            }

            function s(t, e) {
                try {
                    if (e === t) throw new TypeError("A promise cannot be resolved with itself.");
                    if (e && ("object" == typeof e || "function" == typeof e)) {
                        var n = e.then;
                        if (e instanceof o) return t._state = 3, t._value = e, void l(t);
                        if ("function" == typeof n) return void u((i = n, r = e, function() {
                            i.apply(r, arguments)
                        }), t)
                    }
                    t._state = 1, t._value = e, l(t)
                } catch (e) {
                    a(t, e)
                }
                var i, r
            }

            function a(t, e) {
                t._state = 2, t._value = e, l(t)
            }

            function l(t) {
                2 === t._state && 0 === t._deferreds.length && o._immediateFn((function() {
                    t._handled || o._unhandledRejectionFn(t._value)
                }));
                for (var e = 0, n = t._deferreds.length; e < n; e++) r(t, t._deferreds[e]);
                t._deferreds = null
            }

            function c(t, e, n) {
                this.onFulfilled = "function" == typeof t ? t : null, this.onRejected = "function" == typeof e ? e : null, this.promise = n
            }

            function u(t, e) {
                var n = !1;
                try {
                    t((function(t) {
                        n || (n = !0, s(e, t))
                    }), (function(t) {
                        n || (n = !0, a(e, t))
                    }))
                } catch (t) {
                    if (n) return;
                    n = !0, a(e, t)
                }
            }
            o.prototype.catch = function(t) {
                return this.then(null, t)
            }, o.prototype.then = function(t, e) {
                var n = new this.constructor(i);
                return r(this, new c(t, e, n)), n
            }, o.prototype.finally = t, o.all = function(t) {
                return new o((function(e, i) {
                    if (!n(t)) return i(new TypeError("Promise.all accepts an array"));
                    var o = Array.prototype.slice.call(t);
                    if (0 === o.length) return e([]);
                    var r = o.length;

                    function s(t, n) {
                        try {
                            if (n && ("object" == typeof n || "function" == typeof n)) {
                                var a = n.then;
                                if ("function" == typeof a) return void a.call(n, (function(e) {
                                    s(t, e)
                                }), i)
                            }
                            o[t] = n, 0 == --r && e(o)
                        } catch (t) {
                            i(t)
                        }
                    }
                    for (var a = 0; a < o.length; a++) s(a, o[a])
                }))
            }, o.resolve = function(t) {
                return t && "object" == typeof t && t.constructor === o ? t : new o((function(e) {
                    e(t)
                }))
            }, o.reject = function(t) {
                return new o((function(e, n) {
                    n(t)
                }))
            }, o.race = function(t) {
                return new o((function(e, i) {
                    if (!n(t)) return i(new TypeError("Promise.race accepts an array"));
                    for (var r = 0, s = t.length; r < s; r++) o.resolve(t[r]).then(e, i)
                }))
            }, o._immediateFn = "function" == typeof setImmediate && function(t) {
                setImmediate(t)
            } || function(t) {
                e(t, 0)
            }, o._unhandledRejectionFn = function(t) {
                "undefined" != typeof console && console && console.warn("Possible Unhandled Promise Rejection:", t)
            };
            var f = function() {
                if ("undefined" != typeof self) return self;
                if ("undefined" != typeof window) return window;
                if ("undefined" != typeof global) return global;
                throw new Error("unable to locate global object")
            }();
            "Promise" in f ? f.Promise.prototype.finally || (f.Promise.prototype.finally = t) : f.Promise = o
        }, "object" == typeof exports && "undefined" != typeof module ? hi() : "function" == typeof define && define.amd ? define(hi) : hi(), {
            AsyncLoad: V,
            Alert: J,
            Button: nt,
            Carousel: gt,
            ClassToggler: Lt,
            Collapse: Dt,
            Dropdown: We,
            Modal: Fe,
            Popover: _n,
            Scrollspy: Tn,
            Sidebar: ii,
            Tab: si,
            Toast: mi,
            Tooltip: ln
        }
}));
//# sourceMappingURL=coreui.bundle.min.js.map