(window.webpackJsonp = window.webpackJsonp || []).push([[43], {
  132: function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = void 0;
    var o, r, a = (r = (o = {}).hasOwnProperty,
      {
        subscribe: function(e, t) {
          r.call(o, e) || (o[e] = []);
          var n = o[e].push(t) - 1;
          return {
            remove: function() {
              delete o[e][n]
            }
          }
        },
        publish: function(e, t) {
          r.call(o, e) && o[e].forEach((function(e) {
              e(null != t ? t : {})
            }
          ))
        }
      });
    t.default = a
  },
  443: function(e, t, n) {
    "use strict";
    Object.defineProperty(t, "__esModule", {
      value: !0
    }),
      t.default = void 0;
    var o = n(551)
      , r = i(n(524))
      , a = i(n(132));
    i(n(525));
    function i(e) {
      return e && e.__esModule ? e : {
        default: e
      }
    }
    function s(e, t) {
      for (var n = 0; n < t.length; n++) {
        var o = t[n];
        o.enumerable = o.enumerable || !1,
          o.configurable = !0,
        "value"in o && (o.writable = !0),
          Object.defineProperty(e, o.key, o)
      }
    }
    function l(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n,
        enumerable: !0,
        configurable: !0,
        writable: !0
      }) : e[t] = n,
        e
    }
    var c = function() {
      function e(t, n) {
        var i = this;
        !function(e, t) {
          if (!(e instanceof t))
            throw new TypeError("Cannot call a class as a function")
        }(this, e),
          l(this, "transLines", (function(e, t) {
              var n = i.objects.marks.filter(":eq(".concat(e, ")")).attr("id")
                , r = i.objects.marks.filter(":eq(".concat(t, ")")).attr("id")
                , a = i.mainMark.attr("data-shape") || "";
              if (a === r)
                return !1;
              for (var s = i.fixTransformCheck(a, r), l = 1; l < 41; l++) {
                var c = "#".concat(n).concat(l)
                  , u = "#".concat(r).concat(l)
                  , h = o.Power3.easeOut;
                s ? o.TweenLite.to(c, i.markMorphSpeed, {
                  ease: h,
                  morphSVG: {
                    shape: u,
                    shapeIndex: "0"
                  }
                }) : o.TweenLite.to(c, i.markMorphSpeed, {
                  ease: h,
                  morphSVG: {
                    shape: u,
                    shapeIndex: "1"
                  }
                })
              }
              i.mainMark.attr("data-shape", r)
            }
          )),
          l(this, "fixTransformCheck", (function(e, t) {
              var n = "".concat(e, "-").concat(t)
                , o = "".concat(t, "-").concat(e);
              return !(!i.transitionsToTweak.includes(n) && !i.transitionsToTweak.includes(o))
            }
          )),
          l(this, "setupPager", (function() {
              for (var e = 0; e <= i.sectionCount; e++) {
                var t = document.createElement("a");
                t.setAttribute("href", "#"),
                  t.setAttribute("data-section", e + 1),
                0 === e && t.classList.add("on"),
                  i.objects.pager.append(t)
              }
              i.updatePager(0),
                i.bindPagerClickEvent()
            }
          )),
          l(this, "updatePager", (function(e) {
              i.objects.pager.find("a").removeClass("on").eq(e).addClass("on")
            }
          )),
          l(this, "bindPagerClickEvent", (function() {
              document.querySelectorAll(".pager > a").forEach((function(e) {
                  e.addEventListener("click", i.handlePagerClickEvent)
                }
              ))
            }
          )),
          l(this, "handlePagerClickEvent", (function(e) {
              e.preventDefault();
              var t = Number(e.target.getAttribute("data-section"));
              t > i.sectionCount ? (i.disableScrollJacking(),
                i.scrollToUniversalContent()) : (i.enableScrollJacking(),
                i.fullPageInstance.moveTo(t))
            }
          )),
          l(this, "updateGlobalNavTheme", (function() {
              var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
              if (!i.objects.globalHeader.hasClass("is-transparent"))
                return !1;
              i.objects.sections.eq(e).is(".-bg-deep-blue, .-bg-dark-blue-gradient") ? i.objects.globalHeader.removeClass("-theme-light").addClass("-theme-dark") : i.objects.globalHeader.removeClass("-theme-dark").addClass("-theme-light")
            }
          )),
          l(this, "initializeScrollJacking", (function() {
              var e = i;
              i.fullPageInstance = new r.default(".section-wrapper",{
                css3: !1,
                licenseKey: "99013373-38254EA6-BED3A887-1B9E5E09",
                normalScrollElements: ".hamburger-nav, .universal-page, .global-footer",
                afterRender: function() {
                  i.setupPager(),
                    setTimeout((function() {
                        e.objects.sections.eq(0).is(".disable-partnership-mark") && i.mainMarkContainer.addClass("disabled"),
                          i.transLines("0", "1")
                      }
                    ), 200)
                },
                onLeave: function(t, n, o) {
                  if (e.objects.html.is(".fp-scroll-free"))
                    return !1;
                  i.mainMarkContainer.is(".disabled") && i.mainMarkContainer.removeClass("disabled"),
                  e.objects.sections.eq(n.index).is(".disable-partnership-mark") && i.mainMarkContainer.addClass("disabled"),
                    i.transLines("0", n.index + 1),
                    i.updatePager(n.index),
                  "up" == o && e.objects.sections.find(".section-content").addClass("upward"),
                    i.updateGlobalNavTheme(n.index)
                },
                afterLoad: function(t, n, o) {
                  if (e.objects.html.is(".fp-scroll-free"))
                    return !1;
                  e.objects.sections.find(".section-content").removeClass("upward"),
                  n.isLast && i.disableScrollJacking()
                }
              })
            }
          )),
          l(this, "rebuildScrollJacking", (function() {
              i.fullPageInstance && i.fullPageInstance.reBuild()
            }
          )),
          l(this, "detectReturnFromFreeScroll", (function() {
              0 === pageYOffset && i.returnFromFreeScroll()
            }
          )),
          l(this, "returnFromFreeScroll", (function() {
              i.enableScrollJacking(),
                i.fullPageInstance.moveTo(i.sectionCount - 1)
            }
          )),
          l(this, "scrollToUniversalContent", (function() {
              i.$("html, body").animate({
                scrollTop: i.$(".universal-page").offset().top + 1
              }, 800)
            }
          )),
          l(this, "handleTouchStart", (function(e) {
              i.touchY = e.touches[0].clientY
            }
          )),
          l(this, "handleTouchEnd", (function(e) {
              var t = e.changedTouches[0].clientY;
              i.touchY > t + 5 ? (i.scrollToUniversalContent(),
                window.removeEventListener("touchstart", i.handleTouchStart),
                window.removeEventListener("touchend", i.handleTouchEnd)) : i.touchY < t - 5 && (i.returnFromFreeScroll(),
                window.removeEventListener("touchstart", i.handleTouchStart),
                window.removeEventListener("touchend", i.handleTouchEnd))
            }
          )),
          l(this, "handleDownArrowPress", (function(e) {
              "ArrowDown" === e.code ? window.pageYOffset < i.$(".universal-page").offset().top ? i.scrollToUniversalContent() : (i.$("html, body").stop(!0, !0),
                window.scrollBy(0, 50)) : "ArrowUp" === e.code && window.scrollBy(0, -50)
            }
          )),
          l(this, "disableScrollJacking", (function() {
              i.objects.html.addClass("fp-scroll-free"),
                window.addEventListener("keydown", i.handleDownArrowPress),
                window.addEventListener("scroll", i.detectReturnFromFreeScroll),
                window.addEventListener("touchstart", i.handleTouchStart),
                window.addEventListener("touchend", i.handleTouchEnd),
                i.objects.window.scrollTop(i.objects.window.scrollTop() + 1)
            }
          )),
          l(this, "enableScrollJacking", (function() {
              i.objects.html.removeClass("fp-scroll-free"),
                window.removeEventListener("keydown", i.handleDownArrowPress),
                window.removeEventListener("scroll", i.detectReturnFromFreeScroll),
                window.removeEventListener("touchstart", i.handleTouchStart),
                window.removeEventListener("touchend", i.handleTouchEnd)
            }
          )),
          l(this, "firstRun", (function() {
              i.updateGlobalNavTheme(),
              "small" !== i.Utils.getViewportSize() && (i.objects.sections.eq(0).is(".disable-partnership-mark") && i.mainMarkContainer.addClass("disabled"),
                i.initializeScrollJacking(),
                a.default.subscribe("hamburger-nav", (function(e) {
                    i.fullPageInstance.setAllowScrolling(!e.open)
                  }
                )))
            }
          )),
          l(this, "init", (function() {
              i.firstRun()
            }
          ));
        var s = t('[data-module="SectionalScroll"]');
        this.$ = t,
          this.Utils = n,
          this.objects = {
            window: t(window),
            el: s,
            body: t("body"),
            html: t("html"),
            globalHeader: t(".global-header"),
            pager: s.find(".pager"),
            sections: s.find(".section"),
            marks: s.find(".mark svg")
          },
          this.sectionCount = Number(this.objects.sections.length),
          this.fullPageInstance = null,
          this.mainMark = this.objects.marks.first(),
          this.mainMarkContainer = this.objects.el.find("> .mark"),
          this.markMorphSpeed = 1.8,
          this.touchY = null,
          this.touchDirection = "down",
          this.transitionsToTweak = ["-downRightBottom", "-downLeftCenter", "downLeftTop-downLeftCenter", "downLeftTop-downRightTop", "downLeftTop-downRightCenter", "downLeftTop-upLeftBottom", "downLeftTop-upRightBottom", "downLeftCenter-downRightTop", "downLeftCenter-downRightCenter", "downLeftCenter-upLeftBottom", "downLeftCenter-upRightBottom", "downLeftBottom-upLeftCenter", "downLeftBottom-upRightCenter", "downLeftBottom-upRightTop", "downRightTop-upLeftBottom", "downRightCenter-downRightTop", "downRightCenter-upRightBottom", "downRightCenter-upLeftBottom", "downRightBottom-upLeftTop", "downRightBottom-upLeftBottom", "downRightBottom-upLeftCenter", "upLeftTop-upLeftCenter", "upLeftTop-upRightCenter", "upLeftCenter-upRightTop", "upLeftCenter-upRightCenter", "upLeftBottom-upRightBottom", "upRightCenter-upRightTop"]
      }
      var t, n, i;
      return t = e,
      (n = [{
        key: "name",
        value: function() {
          return "SectionalScroll"
        }
      }]) && s(t.prototype, n),
      i && s(t, i),
        e
    }();
    t.default = c
  },
  525: function(e, t, n) {
    "use strict";
    (function(t) {
        function o(e) {
          return (o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                return typeof e
              }
              : function(e) {
                return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
              }
          )(e)
        }
        var r = e.exports && void 0 !== t ? t : window;
        (r._gsQueue || (r._gsQueue = [])).push((function() {
            var e = Math.PI / 180
              , t = 180 / Math.PI
              , n = /[achlmqstvz]|(-?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
              , a = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
              , i = /[achlmqstvz]/gi
              , s = /[\+\-]?\d*\.?\d+e[\+\-]?\d+/gi
              , l = r._gsDefine.globals.TweenLite
              , c = function(e) {
              window.console && console.log(e)
            }
              , u = function(n, o, r, a, i, s, l, c, u) {
              if (n !== c || o !== u) {
                r = Math.abs(r),
                  a = Math.abs(a);
                var h = i % 360 * e
                  , d = Math.cos(h)
                  , f = Math.sin(h)
                  , p = (n - c) / 2
                  , g = (o - u) / 2
                  , m = d * p + f * g
                  , b = -f * p + d * g
                  , v = r * r
                  , w = a * a
                  , C = m * m
                  , M = b * b
                  , T = C / v + M / w;
                T > 1 && (v = (r = Math.sqrt(T) * r) * r,
                  w = (a = Math.sqrt(T) * a) * a);
                var y = s === l ? -1 : 1
                  , L = (v * w - v * M - w * C) / (v * M + w * C);
                L < 0 && (L = 0);
                var S = y * Math.sqrt(L)
                  , A = S * (r * b / a)
                  , k = S * (-a * m / r)
                  , P = (n + c) / 2 + (d * A - f * k)
                  , x = (o + u) / 2 + (f * A + d * k)
                  , R = (m - A) / r
                  , E = (b - k) / a
                  , N = (-m - A) / r
                  , j = (-b - k) / a
                  , B = Math.sqrt(R * R + E * E)
                  , z = R
                  , I = (y = E < 0 ? -1 : 1) * Math.acos(z / B) * t;
                B = Math.sqrt((R * R + E * E) * (N * N + j * j)),
                  z = R * N + E * j;
                var F = (y = R * j - E * N < 0 ? -1 : 1) * Math.acos(z / B) * t;
                !l && F > 0 ? F -= 360 : l && F < 0 && (F += 360);
                var Y, q, _, G = function(t, n) {
                  var o, r, a, i, s, l, c = Math.ceil(Math.abs(n) / 90), u = 0, h = [];
                  for (t *= e,
                    o = (n *= e) / c,
                    r = 4 / 3 * Math.sin(o / 2) / (1 + Math.cos(o / 2)),
                    l = 0; l < c; l++)
                    a = t + l * o,
                      i = Math.cos(a),
                      s = Math.sin(a),
                      h[u++] = i - r * s,
                      h[u++] = s + r * i,
                      a += o,
                      i = Math.cos(a),
                      s = Math.sin(a),
                      h[u++] = i + r * s,
                      h[u++] = s - r * i,
                      h[u++] = i,
                      h[u++] = s;
                  return h
                }(I %= 360, F %= 360), O = d * r, D = f * r, V = f * -a, J = d * a, U = G.length - 2;
                for (Y = 0; Y < U; Y += 2)
                  q = G[Y],
                    _ = G[Y + 1],
                    G[Y] = q * O + _ * V + P,
                    G[Y + 1] = q * D + _ * J + x;
                return G[G.length - 2] = c,
                  G[G.length - 1] = u,
                  G
              }
            }
              , h = function(e) {
              var t, o, r, a, i, l, h, d, f, p, g, m, b, v = (e + "").replace(s, (function(e) {
                  var t = +e;
                  return t < 1e-4 && t > -1e-4 ? 0 : t
                }
              )).match(n) || [], w = [], C = 0, M = 0, T = v.length, y = 2, L = 0;
              if (!e || !isNaN(v[0]) || isNaN(v[1]))
                return c("ERROR: malformed path data: " + e),
                  w;
              for (t = 0; t < T; t++)
                if (b = i,
                  isNaN(v[t]) ? l = (i = v[t].toUpperCase()) !== v[t] : t--,
                  r = +v[t + 1],
                  a = +v[t + 2],
                l && (r += C,
                  a += M),
                0 === t && (d = r,
                  f = a),
                "M" === i)
                  h && h.length < 8 && (w.length -= 1,
                    y = 0),
                    C = d = r,
                    M = f = a,
                    h = [r, a],
                    L += y,
                    y = 2,
                    w.push(h),
                    t += 2,
                    i = "L";
                else if ("C" === i)
                  h || (h = [0, 0]),
                    h[y++] = r,
                    h[y++] = a,
                  l || (C = M = 0),
                    h[y++] = C + 1 * v[t + 3],
                    h[y++] = M + 1 * v[t + 4],
                    h[y++] = C += 1 * v[t + 5],
                    h[y++] = M += 1 * v[t + 6],
                    t += 6;
                else if ("S" === i)
                  "C" === b || "S" === b ? (p = C - h[y - 4],
                    g = M - h[y - 3],
                    h[y++] = C + p,
                    h[y++] = M + g) : (h[y++] = C,
                    h[y++] = M),
                    h[y++] = r,
                    h[y++] = a,
                  l || (C = M = 0),
                    h[y++] = C += 1 * v[t + 3],
                    h[y++] = M += 1 * v[t + 4],
                    t += 4;
                else if ("Q" === i)
                  p = r - C,
                    g = a - M,
                    h[y++] = C + 2 * p / 3,
                    h[y++] = M + 2 * g / 3,
                  l || (C = M = 0),
                    p = r - (C += 1 * v[t + 3]),
                    g = a - (M += 1 * v[t + 4]),
                    h[y++] = C + 2 * p / 3,
                    h[y++] = M + 2 * g / 3,
                    h[y++] = C,
                    h[y++] = M,
                    t += 4;
                else if ("T" === i)
                  p = C - h[y - 4],
                    g = M - h[y - 3],
                    h[y++] = C + p,
                    h[y++] = M + g,
                    p = C + 1.5 * p - r,
                    g = M + 1.5 * g - a,
                    h[y++] = r + 2 * p / 3,
                    h[y++] = a + 2 * g / 3,
                    h[y++] = C = r,
                    h[y++] = M = a,
                    t += 2;
                else if ("H" === i)
                  a = M,
                    h[y++] = C + (r - C) / 3,
                    h[y++] = M + (a - M) / 3,
                    h[y++] = C + 2 * (r - C) / 3,
                    h[y++] = M + 2 * (a - M) / 3,
                    h[y++] = C = r,
                    h[y++] = a,
                    t += 1;
                else if ("V" === i)
                  a = r,
                    r = C,
                  l && (a += M - C),
                    h[y++] = r,
                    h[y++] = M + (a - M) / 3,
                    h[y++] = r,
                    h[y++] = M + 2 * (a - M) / 3,
                    h[y++] = r,
                    h[y++] = M = a,
                    t += 1;
                else if ("L" === i || "Z" === i)
                  "Z" === i && (r = d,
                    a = f,
                    h.closed = !0),
                  ("L" === i || Math.abs(C - r) > .5 || Math.abs(M - a) > .5) && (h[y++] = C + (r - C) / 3,
                    h[y++] = M + (a - M) / 3,
                    h[y++] = C + 2 * (r - C) / 3,
                    h[y++] = M + 2 * (a - M) / 3,
                    h[y++] = r,
                    h[y++] = a,
                  "L" === i && (t += 2)),
                    C = r,
                    M = a;
                else if ("A" === i) {
                  for (m = u(C, M, 1 * v[t + 1], 1 * v[t + 2], 1 * v[t + 3], 1 * v[t + 4], 1 * v[t + 5], (l ? C : 0) + 1 * v[t + 6], (l ? M : 0) + 1 * v[t + 7]),
                    o = 0; o < m.length; o++)
                    h[y++] = m[o];
                  C = h[y - 2],
                    M = h[y - 1],
                    t += 7
                } else
                  c("Error: malformed path data: " + e);
              return w.totalPoints = L + y,
                w
            }
              , d = function(e, t) {
              var n, o, r, a, i, s, l, c, u, h, d, f, p, g, m = 0, b = e.length, v = t / ((b - 2) / 6);
              for (p = 2; p < b; p += 6)
                for (m += v; m > .999999; )
                  n = e[p - 2],
                    o = e[p - 1],
                    r = e[p],
                    a = e[p + 1],
                    i = e[p + 2],
                    s = e[p + 3],
                    l = e[p + 4],
                    c = e[p + 5],
                    u = n + (r - n) * (g = 1 / (Math.floor(m) + 1)),
                    u += ((d = r + (i - r) * g) - u) * g,
                    d += (i + (l - i) * g - d) * g,
                    h = o + (a - o) * g,
                    h += ((f = a + (s - a) * g) - h) * g,
                    f += (s + (c - s) * g - f) * g,
                    e.splice(p, 4, n + (r - n) * g, o + (a - o) * g, u, h, u + (d - u) * g, h + (f - h) * g, d, f, i + (l - i) * g, s + (c - s) * g),
                    p += 6,
                    b += 6,
                    m--;
              return e
            }
              , f = function(e) {
              var t, n, o, r, a = "", i = e.length;
              for (n = 0; n < i; n++) {
                for (a += "M" + (r = e[n])[0] + "," + r[1] + " C",
                  t = r.length,
                  o = 2; o < t; o++)
                  a += (100 * r[o++] | 0) / 100 + "," + (100 * r[o++] | 0) / 100 + " " + (100 * r[o++] | 0) / 100 + "," + (100 * r[o++] | 0) / 100 + " " + (100 * r[o++] | 0) / 100 + "," + (100 * r[o] | 0) / 100 + " ";
                r.closed && (a += "z")
              }
              return a
            }
              , p = function(e) {
              for (var t = [], n = e.length - 1, o = 0; --n > -1; )
                t[o++] = e[n],
                  t[o++] = e[n + 1],
                  n--;
              for (n = 0; n < o; n++)
                e[n] = t[n];
              e.reversed = !e.reversed
            }
              , g = function(e) {
              var t, n = e.length, o = 0, r = 0;
              for (t = 0; t < n; t++)
                o += e[t++],
                  r += e[t];
              return [o / (n / 2), r / (n / 2)]
            }
              , m = function(e) {
              var t, n, o, r = e.length, a = e[0], i = a, s = e[1], l = s;
              for (o = 6; o < r; o += 6)
                (t = e[o]) > a ? a = t : t < i && (i = t),
                  (n = e[o + 1]) > s ? s = n : n < l && (l = n);
              return e.centerX = (a + i) / 2,
                e.centerY = (s + l) / 2,
                e.size = (a - i) * (s - l)
            }
              , b = function(e) {
              for (var t, n, o, r, a, i = e.length, s = e[0][0], l = s, c = e[0][1], u = c; --i > -1; )
                for (t = (a = e[i]).length,
                  r = 6; r < t; r += 6)
                  (n = a[r]) > s ? s = n : n < l && (l = n),
                    (o = a[r + 1]) > c ? c = o : o < u && (u = o);
              return e.centerX = (s + l) / 2,
                e.centerY = (c + u) / 2,
                e.size = (s - l) * (c - u)
            }
              , v = function(e, t) {
              return t.length - e.length
            }
              , w = function(e, t) {
              var n = e.size || m(e)
                , o = t.size || m(t);
              return Math.abs(o - n) < (n + o) / 20 ? t.centerX - e.centerX || t.centerY - e.centerY : o - n
            }
              , C = function(e, t) {
              var n, o, r = e.slice(0), a = e.length, i = a - 2;
              for (t |= 0,
                n = 0; n < a; n++)
                o = (n + t) % i,
                  e[n++] = r[o],
                  e[n] = r[o + 1]
            }
              , M = function(e, t, n, o, r) {
              var a, i, s, l, c = e.length, u = 0, h = c - 2;
              for (n *= 6,
                i = 0; i < c; i += 6)
                l = e[a = (i + n) % h] - (t[i] - o),
                  s = e[a + 1] - (t[i + 1] - r),
                  u += Math.sqrt(s * s + l * l);
              return u
            }
              , T = function(e, t, n) {
              var o, r, a, i = e.length, s = g(e), l = g(t), c = l[0] - s[0], u = l[1] - s[1], h = M(e, t, 0, c, u), d = 0;
              for (a = 6; a < i; a += 6)
                (r = M(e, t, a / 6, c, u)) < h && (h = r,
                  d = a);
              if (n)
                for (o = e.slice(0),
                  p(o),
                  a = 6; a < i; a += 6)
                  (r = M(o, t, a / 6, c, u)) < h && (h = r,
                    d = -a);
              return d / 6
            }
              , y = function(e, t, n) {
              for (var o, r, a, i, s, l, c = e.length, u = 99999999999, h = 0, d = 0; --c > -1; )
                for (l = (o = e[c]).length,
                  s = 0; s < l; s += 6)
                  r = o[s] - t,
                    a = o[s + 1] - n,
                  (i = Math.sqrt(r * r + a * a)) < u && (u = i,
                    h = o[s],
                    d = o[s + 1]);
              return [h, d]
            }
              , L = function(e, t, n, o, r, a) {
              var i, s, l, c, u = t.length, h = 0, d = Math.min(e.size || m(e), t[n].size || m(t[n])) * o, f = 999999999999, p = e.centerX + r, g = e.centerY + a;
              for (i = n; i < u && !((t[i].size || m(t[i])) < d); i++)
                s = t[i].centerX - p,
                  l = t[i].centerY - g,
                (c = Math.sqrt(s * s + l * l)) < f && (h = i,
                  f = c);
              return c = t[h],
                t.splice(h, 1),
                c
            }
              , S = function(e, t, n, r) {
              var a, i, s, l, u, h, f, g = t.length - e.length, M = g > 0 ? t : e, S = g > 0 ? e : t, A = 0, k = "complexity" === r ? v : w, P = "position" === r ? 0 : "number" == typeof r ? r : .8, x = S.length, R = "object" === o(n) && n.push ? n.slice(0) : [n], E = "reverse" === R[0] || R[0] < 0, N = "log" === n;
              if (S[0]) {
                if (M.length > 1 && (e.sort(k),
                  t.sort(k),
                M.size || b(M),
                S.size || b(S),
                  h = M.centerX - S.centerX,
                  f = M.centerY - S.centerY,
                k === w))
                  for (x = 0; x < S.length; x++)
                    M.splice(x, 0, L(S[x], M, x, P, h, f));
                if (g)
                  for (g < 0 && (g = -g),
                  M[0].length > S[0].length && d(S[0], (M[0].length - S[0].length) / 6 | 0),
                    x = S.length; A < g; )
                    M[x].size || m(M[x]),
                      l = (s = y(S, M[x].centerX, M[x].centerY))[0],
                      u = s[1],
                      S[x++] = [l, u, l, u, l, u, l, u],
                      S.totalPoints += 8,
                      A++;
                for (x = 0; x < e.length; x++)
                  a = t[x],
                    i = e[x],
                    (g = a.length - i.length) < 0 ? d(a, -g / 6 | 0) : g > 0 && d(i, g / 6 | 0),
                  E && !i.reversed && p(i),
                  (n = R[x] || 0 === R[x] ? R[x] : "auto") && (i.closed || Math.abs(i[0] - i[i.length - 2]) < .5 && Math.abs(i[1] - i[i.length - 1]) < .5 ? "auto" === n || "log" === n ? (R[x] = n = T(i, a, 0 === x),
                  n < 0 && (E = !0,
                    p(i),
                    n = -n),
                    C(i, 6 * n)) : "reverse" !== n && (x && n < 0 && p(i),
                    C(i, 6 * (n < 0 ? -n : n))) : !E && ("auto" === n && Math.abs(a[0] - i[0]) + Math.abs(a[1] - i[1]) + Math.abs(a[a.length - 2] - i[i.length - 2]) + Math.abs(a[a.length - 1] - i[i.length - 1]) > Math.abs(a[0] - i[i.length - 2]) + Math.abs(a[1] - i[i.length - 1]) + Math.abs(a[a.length - 2] - i[0]) + Math.abs(a[a.length - 1] - i[1]) || n % 2) ? (p(i),
                    R[x] = -1,
                    E = !0) : "auto" === n ? R[x] = 0 : "reverse" === n && (R[x] = -1),
                  i.closed !== a.closed && (i.closed = a.closed = !1));
                return N && c("shapeIndex:[" + R.join(",") + "]"),
                  R
              }
            }
              , A = function(e, t, n, o) {
              var r = h(e[0])
                , a = h(e[1]);
              S(r, a, t || 0 === t ? t : "auto", n) && (e[0] = f(r),
                e[1] = f(a),
              "log" !== o && !0 !== o || c('precompile:["' + e[0] + '","' + e[1] + '"]'))
            }
              , k = function(e, t) {
              var n, o, r, a, i, s, l, c = 0, u = parseFloat(e[0]), h = parseFloat(e[1]), d = u + "," + h + " ";
              for (n = .5 * t / (.5 * (r = e.length) - 1),
                o = 0; o < r - 2; o += 2) {
                if (c += n,
                  s = parseFloat(e[o + 2]),
                  l = parseFloat(e[o + 3]),
                c > .999999)
                  for (i = 1 / (Math.floor(c) + 1),
                    a = 1; c > .999999; )
                    d += (u + (s - u) * i * a).toFixed(2) + "," + (h + (l - h) * i * a).toFixed(2) + " ",
                      c--,
                      a++;
                d += s + "," + l + " ",
                  u = s,
                  h = l
              }
              return d
            }
              , P = function(e) {
              var t = e[0].match(a) || []
                , n = e[1].match(a) || []
                , o = n.length - t.length;
              o > 0 ? e[0] = k(t, o) : e[1] = k(n, -o)
            }
              , x = function(e) {
              return isNaN(e) ? P : function(t) {
                P(t),
                  t[1] = function(e, t) {
                    if (!t)
                      return e;
                    var n, o, r, i = e.match(a) || [], s = i.length, l = "";
                    for ("reverse" === t ? (o = s - 1,
                      n = -2) : (o = (2 * (parseInt(t, 10) || 0) + 1 + 100 * s) % s,
                      n = 2),
                      r = 0; r < s; r += 2)
                      l += i[o - 1] + "," + i[o] + " ",
                        o = (o + n) % s;
                    return l
                  }(t[1], parseInt(e, 10))
              }
            }
              , R = function(e, t) {
              var n, o, r, i, s, l, c, u, h, d, f, p, g, m, b, v, w, C, M, T, y, L = e.tagName.toLowerCase(), S = .552284749831;
              return "path" !== L && e.getBBox ? (l = function(e, t) {
                var n = document.createElementNS("http://www.w3.org/2000/svg", "path")
                  , o = Array.prototype.slice.call(e.attributes)
                  , r = o.length;
                for (t = "," + t + ","; --r > -1; )
                  -1 === t.indexOf("," + o[r].nodeName + ",") && n.setAttributeNS(null, o[r].nodeName, o[r].nodeValue);
                return n
              }(e, "x,y,width,height,cx,cy,rx,ry,r,x1,x2,y1,y2,points"),
                "rect" === L ? (i = +e.getAttribute("rx") || 0,
                  s = +e.getAttribute("ry") || 0,
                  o = +e.getAttribute("x") || 0,
                  r = +e.getAttribute("y") || 0,
                  d = (+e.getAttribute("width") || 0) - 2 * i,
                  f = (+e.getAttribute("height") || 0) - 2 * s,
                  n = i || s ? "M" + (v = (m = (g = o + i) + d) + i) + "," + (C = r + s) + " V" + (M = C + f) + " C" + [v, T = M + s * S, b = m + i * S, y = M + s, m, y, m - (m - g) / 3, y, g + (m - g) / 3, y, g, y, p = o + i * (1 - S), y, o, T, o, M, o, M - (M - C) / 3, o, C + (M - C) / 3, o, C, o, w = r + s * (1 - S), p, r, g, r, g + (m - g) / 3, r, m - (m - g) / 3, r, m, r, b, r, v, w, v, C].join(",") + "z" : "M" + (o + d) + "," + r + " v" + f + " h" + -d + " v" + -f + " h" + d + "z") : "circle" === L || "ellipse" === L ? ("circle" === L ? u = (i = s = +e.getAttribute("r") || 0) * S : (i = +e.getAttribute("rx") || 0,
                  u = (s = +e.getAttribute("ry") || 0) * S),
                  n = "M" + ((o = +e.getAttribute("cx") || 0) + i) + "," + (r = +e.getAttribute("cy") || 0) + " C" + [o + i, r + u, o + (c = i * S), r + s, o, r + s, o - c, r + s, o - i, r + u, o - i, r, o - i, r - u, o - c, r - s, o, r - s, o + c, r - s, o + i, r - u, o + i, r].join(",") + "z") : "line" === L ? n = "M" + e.getAttribute("x1") + "," + e.getAttribute("y1") + " L" + e.getAttribute("x2") + "," + e.getAttribute("y2") : "polyline" !== L && "polygon" !== L || (n = "M" + (o = (h = (e.getAttribute("points") + "").match(a) || []).shift()) + "," + (r = h.shift()) + " L" + h.join(","),
                "polygon" === L && (n += "," + o + "," + r + "z")),
                l.setAttribute("d", n),
              t && e.parentNode && (e.parentNode.insertBefore(l, e),
                e.parentNode.removeChild(e)),
                l) : e
            }
              , E = function(e, t, n) {
              var o, r, i = "string" == typeof e;
              return (!i || (e.match(a) || []).length < 3) && ((o = i ? l.selector(e) : e && e[0] ? e : [e]) && o[0] ? (r = (o = o[0]).nodeName.toUpperCase(),
              t && "PATH" !== r && (o = R(o, !1),
                r = "PATH"),
                e = o.getAttribute("PATH" === r ? "d" : "points") || "",
              o === n && (e = o.getAttributeNS(null, "data-original") || e)) : (c("WARNING: invalid morph to: " + e),
                e = !1)),
                e
            }
              , N = "Use MorphSVGPlugin.convertToPath(elementOrSelectorText) to convert to a path before morphing."
              , j = r._gsDefine.plugin({
              propName: "morphSVG",
              API: 2,
              global: !0,
              version: "0.8.5",
              init: function(e, t, n) {
                var r, a, s, l, u, h, d, f;
                return "function" == typeof e.setAttribute && (u = "POLYLINE" === (r = e.nodeName.toUpperCase()) || "POLYGON" === r,
                  "PATH" === r || u ? (a = "PATH" === r ? "d" : "points",
                  ("string" == typeof t || t.getBBox || t[0]) && (t = {
                    shape: t
                  }),
                    l = E(t.shape || t.d || t.points || "", "d" === a, e),
                    u && i.test(l) ? (c("WARNING: a <" + r + "> cannot accept path data. " + N),
                      !1) : (l && (this._target = e,
                    e.getAttributeNS(null, "data-original") || e.setAttributeNS(null, "data-original", e.getAttribute(a)),
                    (s = this._addTween(e, "setAttribute", e.getAttribute(a) + "", l + "", "morphSVG", !1, a, "object" === o(t.precompile) ? function(e) {
                        e[0] = t.precompile[0],
                          e[1] = t.precompile[1]
                      }
                      : "d" === a ? (h = t.shapeIndex,
                        d = t.map || j.defaultMap,
                        f = t.precompile,
                        d || f || h || 0 === h ? function(e) {
                            A(e, h, d, f)
                          }
                          : A) : x(t.shapeIndex))) && (this._overwriteProps.push("morphSVG"),
                      s.end = l,
                      s.endProp = a)),
                      !0)) : (c("WARNING: cannot morph a <" + r + "> SVG element. " + N),
                    !1))
              },
              set: function(e) {
                var t;
                if (this._super.setRatio.call(this, e),
                1 === e)
                  for (t = this._firstPT; t; )
                    t.end && this._target.setAttribute(t.endProp, t.end),
                      t = t._next
              }
            });
            j.pathFilter = A,
              j.pointsFilter = P,
              j.subdivideRawBezier = d,
              j.defaultMap = "size",
              j.pathDataToRawBezier = function(e) {
                return h(E(e, !0))
              }
              ,
              j.equalizeSegmentQuantity = S,
              j.convertToPath = function(e, t) {
                "string" == typeof e && (e = l.selector(e));
                for (var n = e && 0 !== e.length ? e.length && e[0] && e[0].nodeType ? Array.prototype.slice.call(e, 0) : [e] : [], o = n.length; --o > -1; )
                  n[o] = R(n[o], !1 !== t);
                return n
              }
              ,
              j.pathDataToBezier = function(e, t) {
                var n, o, r, a, i, s, c, u, d = h(E(e, !0))[0] || [], f = 0;
                if (u = (t = t || {}).align || t.relative,
                  a = t.matrix || [1, 0, 0, 1, 0, 0],
                  i = t.offsetX || 0,
                  s = t.offsetY || 0,
                  "relative" === u || !0 === u ? (i -= d[0] * a[0] + d[1] * a[2],
                    s -= d[0] * a[1] + d[1] * a[3],
                    f = "+=") : (i += a[4],
                    s += a[5],
                  u && (u = "string" == typeof u ? l.selector(u) : u && u[0] ? u : [u]) && u[0] && (i -= (c = u[0].getBBox() || {
                    x: 0,
                    y: 0
                  }).x,
                    s -= c.y)),
                  n = [],
                  r = d.length,
                  a)
                  for (o = 0; o < r; o += 2)
                    n.push({
                      x: f + (d[o] * a[0] + d[o + 1] * a[2] + i),
                      y: f + (d[o] * a[1] + d[o + 1] * a[3] + s)
                    });
                else
                  for (o = 0; o < r; o += 2)
                    n.push({
                      x: f + (d[o] + i),
                      y: f + (d[o + 1] + s)
                    });
                return n
              }
          }
        )),
        r._gsDefine && r._gsQueue.pop()(),
        e.exports && (n(461),
          n(469),
          e.exports = (r.GreenSockGlobals || r).MorphSVGPlugin)
      }
    ).call(this, n(63))
  }
}]);
