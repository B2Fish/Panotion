(window.webpackJsonp = window.webpackJsonp || []).push([[69], {
  524: function(e, t, n) {
    var o;
    !function(r, i, a, l, c) {
      void 0 === (o = function() {
        return r.fullpage = l(i, a),
          r.fullpage
      }
        .call(t, n, t, e)) || (e.exports = o)
    }(this, window, document, (function(e, t) {
        "use strict";
        var n = "fullpage-wrapper"
          , o = "." + n
          , r = "fp-responsive"
          , i = "fp-notransition"
          , a = "fp-destroyed"
          , l = "fp-enabled"
          , c = "fp-viewing"
          , s = "active"
          , u = "." + s
          , f = "fp-completely"
          , d = "." + f
          , v = ".section"
          , p = "fp-section"
          , h = "." + p
          , g = h + u
          , m = "fp-tableCell"
          , w = "." + m
          , S = "fp-auto-height"
          , b = "." + S
          , y = ".fp-auto-height-responsive"
          , E = "fp-normal-scroll"
          , L = "fp-nav"
          , x = "#" + L
          , A = "fp-tooltip"
          , T = "." + A
          , k = "fp-show-active"
          , O = ".slide"
          , M = "fp-slide"
          , C = "." + M
          , B = C + u
          , H = "fp-slides"
          , I = "." + H
          , R = "fp-slidesContainer"
          , N = "." + R
          , z = "fp-table"
          , j = "fp-slidesNav"
          , P = "." + j
          , D = P + " a"
          , V = ".fp-controlArrow"
          , W = "fp-prev"
          , Y = "fp-controlArrow " + W
          , F = V + ("." + W)
          , U = "fp-controlArrow fp-next"
          , X = V + ".fp-next";
        function K(t, n) {
          e.console && e.console[t] && e.console[t]("fullPage: " + n)
        }
        function _(e, n) {
          return (n = arguments.length > 1 ? n : t) ? n.querySelectorAll(e) : null
        }
        function $(e) {
          e = e || {};
          for (var t = 1, n = arguments.length; t < n; ++t) {
            var o = arguments[t];
            if (o)
              for (var r in o)
                o.hasOwnProperty(r) && ("[object Object]" !== Object.prototype.toString.call(o[r]) ? e[r] = o[r] : e[r] = $(e[r], o[r]))
          }
          return e
        }
        function q(e, t) {
          return null != e && (e.classList ? e.classList.contains(t) : new RegExp("(^| )" + t + "( |$)","gi").test(e.className))
        }
        function Q() {
          return "innerHeight"in e ? e.innerHeight : t.documentElement.offsetHeight
        }
        function G() {
          return e.innerWidth
        }
        function J(e, t) {
          var n;
          for (n in e = ae(e),
            t)
            if (t.hasOwnProperty(n) && null !== n)
              for (var o = 0; o < e.length; o++) {
                e[o].style[n] = t[n]
              }
          return e
        }
        function Z(e, t, n) {
          if(!e || !t){
            return
          }
          for (var o = e[n]; o && !Te(o, t); )
            o = o[n];
          return o
        }
        function ee(e, t) {
          if(!e || !t){
            return
          }
          return Z(e, t, "previousElementSibling")
        }
        function te(e, t) {
          if(!e || !t){
            return
          }
          return Z(e, t, "nextElementSibling")
        }
        function ne(e) {
          return e.previousElementSibling
        }
        function oe(e) {
          return e.nextElementSibling
        }
        function re(e) {
          return e[e.length - 1]
        }
        function ie(e, t) {
          e = se(e) ? e[0] : e;
          for (var n = null != t ? _(t, e.parentNode) : e.parentNode.childNodes, o = 0, r = 0; r < n.length; r++) {
            if (n[r] == e)
              return o;
            1 == n[r].nodeType && o++
          }
          return -1
        }
        function ae(e) {
          return se(e) ? e : [e]
        }
        function le(e) {
          e = ae(e);
          for (var t = 0; t < e.length; t++)
            e[t].style.display = "none";
          return e
        }
        function ce(e) {
          e = ae(e);
          for (var t = 0; t < e.length; t++)
            e[t].style.display = "block";
          return e
        }
        function se(e) {
          return "[object Array]" === Object.prototype.toString.call(e) || "[object NodeList]" === Object.prototype.toString.call(e)
        }
        function ue(e, t) {
          e = ae(e);
          for (var n = 0; n < e.length; n++) {
            var o = e[n];
            o.classList ? o.classList.add(t) : o.className += " " + t
          }
          return e
        }
        function fe(e, t) {
          e = ae(e);
          for (var n = t.split(" "), o = 0; o < n.length; o++) {
            t = n[o];
            for (var r = 0; r < e.length; r++) {
              var i = e[r];
              i.classList ? i.classList.remove(t) : i.className = i.className.replace(new RegExp("(^|\\b)" + t.split(" ").join("|") + "(\\b|$)","gi"), " ")
            }
          }
          return e
        }
        function de(e, t) {
          t.appendChild(e)
        }
        function ve(e, n, o) {
          var r;
          n = n || t.createElement("div");
          for (var i = 0; i < e.length; i++) {
            var a = e[i];
            (o && !i || !o) && (r = n.cloneNode(!0),
              a.parentNode.insertBefore(r, a)),
              r.appendChild(a)
          }
          return e
        }
        function pe(e, t) {
          ve(e, t, !0)
        }
        function he(e, t) {
          for ("string" == typeof t && (t = Oe(t)),
            e.appendChild(t); e.firstChild !== t; )
            t.appendChild(e.firstChild)
        }
        function ge(e) {
          for (var n = t.createDocumentFragment(); e.firstChild; )
            n.appendChild(e.firstChild);
          e.parentNode.replaceChild(n, e)
        }
        function me(e, t) {
          return e && 1 === e.nodeType ? Te(e, t) ? e : me(e.parentNode, t) : null
        }
        function we(e, t) {
          be(e, e.nextSibling, t)
        }
        function Se(e, t) {
          be(e, e, t)
        }
        function be(e, t, n) {
          se(n) || ("string" == typeof n && (n = Oe(n)),
            n = [n]);
          for (var o = 0; o < n.length; o++)
            e.parentNode.insertBefore(n[o], t)
        }
        function ye() {
          var n = t.documentElement;
          return (e.pageYOffset || n.scrollTop) - (n.clientTop || 0)
        }
        function Ee(e) {
          return Array.prototype.filter.call(e.parentNode.children, (function(t) {
              return t !== e
            }
          ))
        }
        function Le(e) {
          e.preventDefault ? e.preventDefault() : e.returnValue = !1
        }
        function xe(e) {
          if ("function" == typeof e)
            return !0;
          var t = Object.prototype.toString(e);
          return "[object Function]" === t || "[object GeneratorFunction]" === t
        }
        function Ae(n, o, r) {
          var i;
          r = void 0 === r ? {} : r,
            "function" == typeof e.CustomEvent ? i = new CustomEvent(o,{
              detail: r
            }) : (i = t.createEvent("CustomEvent")).initCustomEvent(o, !0, !0, r),
            n.dispatchEvent(i)
        }
        function Te(e, t) {
          return (e.matches || e.matchesSelector || e.msMatchesSelector || e.mozMatchesSelector || e.webkitMatchesSelector || e.oMatchesSelector).call(e, t)
        }
        function ke(e, t) {
          if ("boolean" == typeof t)
            for (var n = 0; n < e.length; n++)
              e[n].style.display = t ? "block" : "none";
          return e
        }
        function Oe(e) {
          var n = t.createElement("div");
          return n.innerHTML = e.trim(),
            n.firstChild
        }
        function Me(e) {
          e = ae(e);
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            n && n.parentElement && n.parentNode.removeChild(n)
          }
        }
        function Ce(e, t, n) {
          for (var o = e[n], r = []; o; )
            (Te(o, t) || null == t) && r.push(o),
              o = o[n];
          return r
        }
        function Be(e, t) {
          return Ce(e, t, "nextElementSibling")
        }
        function He(e, t) {
          return Ce(e, t, "previousElementSibling")
        }
        return e.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = function(t, n) {
            n = n || e;
            for (var o = 0; o < this.length; o++)
              t.call(n, this[o], o, this)
          }
        ),
          e.fp_utils = {
            $: _,
            deepExtend: $,
            hasClass: q,
            getWindowHeight: Q,
            css: J,
            until: Z,
            prevUntil: ee,
            nextUntil: te,
            prev: ne,
            next: oe,
            last: re,
            index: ie,
            getList: ae,
            hide: le,
            show: ce,
            isArrayOrList: se,
            addClass: ue,
            removeClass: fe,
            appendTo: de,
            wrap: ve,
            wrapAll: pe,
            wrapInner: he,
            unwrap: ge,
            closest: me,
            after: we,
            before: Se,
            insertBefore: be,
            getScrollTop: ye,
            siblings: Ee,
            preventDefault: Le,
            isFunction: xe,
            trigger: Ae,
            matches: Te,
            toggle: ke,
            createElementFromHTML: Oe,
            remove: Me,
            filter: function(e, t) {
              Array.prototype.filter.call(e, t)
            },
            untilAll: Ce,
            nextAll: Be,
            prevAll: He,
            showError: K
          },
          function(Z, ae) {
            var se = ae && new RegExp("([\\d\\w]{8}-){3}[\\d\\w]{8}|^(?=.*?[A-Y])(?=.*?[a-y])(?=.*?[0-8])(?=.*?[#?!@$%^&*-]).{8,}$").test(ae.licenseKey) || t.domain.indexOf("alvarotrigo.com") > -1
              , ve = _("html, body")
              , be = _("html")[0]
              , Ce = _("body")[0];
            if (!q(be, l)) {
              var Ie = {};
              ae = $({
                menu: !1,
                anchors: [],
                lockAnchors: !1,
                navigation: !1,
                navigationPosition: "right",
                navigationTooltips: [],
                showActiveTooltip: !1,
                slidesNavigation: !1,
                slidesNavPosition: "bottom",
                scrollBar: !1,
                hybrid: !1,
                css3: !0,
                scrollingSpeed: 700,
                autoScrolling: !0,
                fitToSection: !0,
                fitToSectionDelay: 1e3,
                easing: "easeInOutCubic",
                easingcss3: "ease",
                loopBottom: !1,
                loopTop: !1,
                loopHorizontal: !0,
                continuousVertical: !1,
                continuousHorizontal: !1,
                scrollHorizontally: !1,
                interlockedSlides: !1,
                dragAndMove: !1,
                offsetSections: !1,
                resetSliders: !1,
                fadingEffect: !1,
                normalScrollElements: null,
                scrollOverflow: !1,
                scrollOverflowReset: !1,
                scrollOverflowHandler: e.fp_scrolloverflow ? e.fp_scrolloverflow.iscrollHandler : null,
                scrollOverflowOptions: null,
                touchSensitivity: 5,
                touchWrapper: "string" == typeof Z ? _(Z)[0] : Z,
                bigSectionsDestination: null,
                keyboardScrolling: !0,
                animateAnchor: !0,
                recordHistory: !0,
                controlArrows: !0,
                controlArrowColor: "#fff",
                verticalCentered: !0,
                sectionsColor: [],
                paddingTop: 0,
                paddingBottom: 0,
                fixedElements: null,
                responsive: 0,
                responsiveWidth: 0,
                responsiveHeight: 0,
                responsiveSlides: !1,
                parallax: !1,
                parallaxOptions: {
                  type: "reveal",
                  percentage: 62,
                  property: "translate"
                },
                cards: !1,
                cardsOptions: {
                  perspective: 100,
                  fadeContent: !0,
                  fadeBackground: !0
                },
                sectionSelector: v,
                slideSelector: O,
                v2compatible: !1,
                afterLoad: null,
                onLeave: null,
                afterRender: null,
                afterResize: null,
                afterReBuild: null,
                afterSlideLoad: null,
                onSlideLeave: null,
                afterResponsive: null,
                lazyLoading: !0
              }, ae);
              var Re, Ne, ze, je, Pe = !1, De = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|playbook|silk|BlackBerry|BB10|Windows Phone|Tizen|Bada|webOS|IEMobile|Opera Mini)/), Ve = "ontouchstart"in e || navigator.msMaxTouchPoints > 0 || navigator.maxTouchPoints, We = "string" == typeof Z ? _(Z)[0] : Z, Ye = Q(), Fe = G(), Ue = !1, Xe = !0, Ke = !0, _e = [], $e = {
                m: {
                  up: !0,
                  down: !0,
                  left: !0,
                  right: !0
                }
              };
              $e.k = $({}, $e.m);
              var qe, Qe, Ge, Je, Ze, et, tt, nt, ot, rt = function() {
                var t;
                t = e.PointerEvent ? {
                  down: "pointerdown",
                  move: "pointermove"
                } : {
                  down: "MSPointerDown",
                  move: "MSPointerMove"
                };
                return t
              }(), it = {
                touchmove: "ontouchmove"in e ? "touchmove" : rt.move,
                touchstart: "ontouchstart"in e ? "touchstart" : rt.down
              }, at = 'a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, [tabindex="0"], [contenteditable]', lt = !1;
              try {
                var ct = Object.defineProperty({}, "passive", {
                  get: function() {
                    lt = !0
                  }
                });
                e.addEventListener("testPassive", null, ct),
                  e.removeEventListener("testPassive", null, ct)
              } catch (e) {}
              var st, ut, ft = $({}, ae), dt = !1, vt = !0, pt = ["parallax", "scrollOverflowReset", "dragAndMove", "offsetSections", "fadingEffect", "responsiveSlides", "continuousHorizontal", "interlockedSlides", "scrollHorizontally", "resetSliders", "cards"];
              so(),
                e.fp_easings = $(e.fp_easings, {
                  easeInOutCubic: function(e, t, n, o) {
                    return (e /= o / 2) < 1 ? n / 2 * e * e * e + t : n / 2 * ((e -= 2) * e * e + 2) + t
                  }
                }),
              We && (Ie.version = "3.0.5",
                Ie.setAutoScrolling = At,
                Ie.setRecordHistory = Tt,
                Ie.setScrollingSpeed = kt,
                Ie.setFitToSection = Ot,
                Ie.setLockAnchors = function(e) {
                  ae.lockAnchors = e
                }
                ,
                Ie.setMouseWheelScrolling = Mt,
                Ie.setAllowScrolling = Ct,
                Ie.setKeyboardScrolling = Ht,
                Ie.moveSectionUp = It,
                Ie.moveSectionDown = Rt,
                Ie.silentMoveTo = Nt,
                Ie.moveTo = zt,
                Ie.moveSlideRight = jt,
                Ie.moveSlideLeft = Pt,
                Ie.fitToSection = Jt,
                Ie.reBuild = Dt,
                Ie.setResponsive = Wt,
                Ie.getFullpageData = function() {
                  return ae
                }
                ,
                Ie.destroy = function(n) {
                  At(!1, "internal"),
                    Ct(!0),
                    Bt(!1),
                    Ht(!1),
                    ue(We, a),
                    [Ze, Je, Qe, et, tt, ot, Ge].forEach((function(e) {
                        clearTimeout(e)
                      }
                    )),
                    e.removeEventListener("scroll", Gt),
                    e.removeEventListener("hashchange", xn),
                    e.removeEventListener("resize", Vn),
                    t.removeEventListener("keydown", Tn),
                    t.removeEventListener("keyup", On),
                    ["click", "touchstart"].forEach((function(e) {
                        t.removeEventListener(e, Yt)
                      }
                    )),
                    ["mouseenter", "touchstart", "mouseleave", "touchend"].forEach((function(e) {
                        t.removeEventListener(e, Ut, !0)
                      }
                    )),
                  n && (io(0),
                    _("img[data-src], source[data-src], audio[data-src], iframe[data-src]", We).forEach((function(e) {
                        hn(e, "src")
                      }
                    )),
                    _("img[data-srcset]").forEach((function(e) {
                        hn(e, "srcset")
                      }
                    )),
                    Me(_(x + ", " + P + ", " + V)),
                    J(_(h), {
                      height: "",
                      "background-color": "",
                      padding: ""
                    }),
                    J(_(C), {
                      width: ""
                    }),
                    J(We, {
                      height: "",
                      position: "",
                      "-ms-touch-action": "",
                      "touch-action": ""
                    }),
                    J(ve, {
                      overflow: "",
                      height: ""
                    }),
                    fe(be, l),
                    fe(Ce, r),
                    Ce.className.split(/\s+/).forEach((function(e) {
                        0 === e.indexOf(c) && fe(Ce, e)
                      }
                    )),
                    _(h + ", " + C).forEach((function(e) {
                        ae.scrollOverflowHandler && ae.scrollOverflow && ae.scrollOverflowHandler.remove(e),
                          fe(e, z + " " + s + " " + f),
                        e.getAttribute("data-fp-styles") && e.setAttribute("style", e.getAttribute("data-fp-styles")),
                        q(e, p) && !dt && e.removeAttribute("data-anchor")
                      }
                    )),
                    Un(We),
                    [w, N, I].forEach((function(e) {
                        _(e, We).forEach((function(e) {
                            ge(e)
                          }
                        ))
                      }
                    )),
                    J(We, {
                      "-webkit-transition": "none",
                      transition: "none"
                    }),
                    e.scrollTo(0, 0),
                    [p, M, R].forEach((function(e) {
                        fe(_("." + e), e)
                      }
                    )))
                }
                ,
                Ie.getActiveSection = function() {
                  return new po(_(g)[0])
                }
                ,
                Ie.getActiveSlide = function() {
                  return dn(_(B, _(g)[0])[0])
                }
                ,
                Ie.test = {
                  top: "0px",
                  translate3d: "translate3d(0px, 0px, 0px)",
                  translate3dH: function() {
                    for (var e = [], t = 0; t < _(ae.sectionSelector, We).length; t++)
                      e.push("translate3d(0px, 0px, 0px)");
                    return e
                  }(),
                  left: function() {
                    for (var e = [], t = 0; t < _(ae.sectionSelector, We).length; t++)
                      e.push(0);
                    return e
                  }(),
                  options: ae,
                  setAutoScrolling: At
                },
                Ie.shared = {
                  afterRenderActions: Qt,
                  isNormalScrollElement: !1
                },
                e.fullpage_api = Ie,
              ae.$ && Object.keys(Ie).forEach((function(e) {
                  ae.$.fn.fullpage[e] = Ie[e]
                }
              )),
                function() {
                  ae.css3 && (ae.css3 = function() {
                    var n, o = t.createElement("p"), r = {
                      webkitTransform: "-webkit-transform",
                      OTransform: "-o-transform",
                      msTransform: "-ms-transform",
                      MozTransform: "-moz-transform",
                      transform: "transform"
                    };
                    for (var i in o.style.display = "block",
                      t.body.insertBefore(o, null),
                      r)
                      void 0 !== o.style[i] && (o.style[i] = "translate3d(1px,1px,1px)",
                        n = e.getComputedStyle(o).getPropertyValue(r[i]));
                    return t.body.removeChild(o),
                    void 0 !== n && n.length > 0 && "none" !== n
                  }());
                  ae.scrollBar = ae.scrollBar || ae.hybrid,
                    function() {
                      if (!ae.anchors.length) {
                        var e = "[data-anchor]"
                          , t = _(ae.sectionSelector.split(",").join(e + ",") + e, We);
                        t.length && (dt = !0,
                          t.forEach((function(e) {
                              ae.anchors.push(e.getAttribute("data-anchor").toString())
                            }
                          )))
                      }
                      if (!ae.navigationTooltips.length) {
                        e = "[data-tooltip]";
                        var n = _(ae.sectionSelector.split(",").join(e + ",") + e, We);
                        n.length && n.forEach((function(e) {
                            ae.navigationTooltips.push(e.getAttribute("data-tooltip").toString())
                          }
                        ))
                      }
                    }(),
                    function() {
                      J(We, {
                        height: "100%",
                        position: "relative"
                      }),
                        ue(We, n),
                        ue(be, l),
                        Ye = Q(),
                        fe(We, a),
                        ue(_(ae.sectionSelector, We), p),
                        ue(_(ae.slideSelector, We), M);
                      for (var e = _(h), o = 0; o < e.length; o++) {
                        var r = o
                          , i = e[o]
                          , c = _(C, i)
                          , u = c.length;
                        i.setAttribute("data-fp-styles", i.getAttribute("style")),
                          _t(i, r),
                          $t(i, r),
                          u > 0 ? Kt(i, c, u) : ae.verticalCentered && _n(i)
                      }
                      ae.fixedElements && ae.css3 && _(ae.fixedElements).forEach((function(e) {
                          Ce.appendChild(e)
                        }
                      ));
                      ae.navigation && function() {
                        var e = t.createElement("div");
                        e.setAttribute("id", L);
                        var n = t.createElement("ul");
                        e.appendChild(n),
                          de(e, Ce);
                        var o = _(x)[0];
                        ue(o, "fp-" + ae.navigationPosition),
                        ae.showActiveTooltip && ue(o, k);
                        for (var r = "", i = 0; i < _(h).length; i++) {
                          var a = "";
                          ae.anchors.length && (a = ae.anchors[i]),
                            r += '<li><a href="#' + a + '"><span class="fp-sr-only">' + qt(i, "Section") + "</span><span></span></a>";
                          var l = ae.navigationTooltips[i];
                          void 0 !== l && "" !== l && (r += '<div class="' + A + " fp-" + ae.navigationPosition + '">' + l + "</div>"),
                            r += "</li>"
                        }
                        _("ul", o)[0].innerHTML = r,
                          J(_(x), {
                            "margin-top": "-" + _(x)[0].offsetHeight / 2 + "px"
                          });
                        var c = _("li", _(x)[0])[ie(_(g)[0], h)];
                        ue(_("a", c), s)
                      }();
                      void _('iframe[src*="youtube.com/embed/"]', We).forEach((function(e) {
                          var t, n, o;
                          n = "enablejsapi=1",
                            o = (t = e).getAttribute("src"),
                            t.setAttribute("src", o + (/\?/.test(o) ? "&" : "?") + n)
                        }
                      )),
                      ae.scrollOverflow && (qe = ae.scrollOverflowHandler.init(ae))
                    }(),
                    Ct(!0),
                    Bt(!0),
                    At(ae.autoScrolling, "internal"),
                    Yn(),
                    no(),
                  "complete" === t.readyState && Ln();
                  e.addEventListener("load", Ln),
                  ae.scrollOverflow || Qt();
                  !function() {
                    for (var e = 1; e < 4; e++)
                      ot = setTimeout(Xt, 350 * e)
                  }()
                }(),
                e.addEventListener("scroll", Gt),
                e.addEventListener("hashchange", xn),
                e.addEventListener("blur", In),
                e.addEventListener("resize", Vn),
                t.addEventListener("keydown", Tn),
                t.addEventListener("keyup", On),
                ["click", "touchstart"].forEach((function(e) {
                    t.addEventListener(e, Yt)
                  }
                )),
              ae.normalScrollElements && (["mouseenter", "touchstart"].forEach((function(e) {
                  Ft(e, !1)
                }
              )),
                ["mouseleave", "touchend"].forEach((function(e) {
                    Ft(e, !0)
                  }
                ))));
              var ht = !1
                , gt = 0
                , mt = 0
                , wt = 0
                , St = 0
                , bt = 0
                , yt = (new Date).getTime()
                , Et = 0
                , Lt = 0
                , xt = Ye;
              return Ie
            }
            function At(e, t) {
              e || io(0),
                co("autoScrolling", e, t);
              var n = _(g)[0];
              if (ae.autoScrolling && !ae.scrollBar)
                J(ve, {
                  overflow: "hidden",
                  height: "100%"
                }),
                  Tt(ft.recordHistory, "internal"),
                  J(We, {
                    "-ms-touch-action": "none",
                    "touch-action": "none"
                  }),
                null != n && io(n.offsetTop);
              else if (J(ve, {
                overflow: "visible",
                height: "initial"
              }),
                Tt(!!ae.autoScrolling && ft.recordHistory, "internal"),
                J(We, {
                  "-ms-touch-action": "",
                  "touch-action": ""
                }),
              null != n) {
                var o = vn(n.offsetTop);
                o.element.scrollTo(0, o.options)
              }
            }
            function Tt(e, t) {
              co("recordHistory", e, t)
            }
            function kt(e, t) {
              co("scrollingSpeed", e, t)
            }
            function Ot(e, t) {
              co("fitToSection", e, t)
            }
            function Mt(n) {
              n ? (!function() {
                var n, o = "";
                e.addEventListener ? n = "addEventListener" : (n = "attachEvent",
                  o = "on");
                var r = "onwheel"in t.createElement("div") ? "wheel" : void 0 !== t.onmousewheel ? "mousewheel" : "DOMMouseScroll"
                  , i = !!lt && {
                  passive: !1
                };
                "DOMMouseScroll" == r ? t[n](o + "MozMousePixelScroll", an, i) : t[n](o + r, an, i)
              }(),
                We.addEventListener("mousedown", Mn),
                We.addEventListener("mouseup", Cn)) : (t.addEventListener ? (t.removeEventListener("mousewheel", an, !1),
                t.removeEventListener("wheel", an, !1),
                t.removeEventListener("MozMousePixelScroll", an, !1)) : t.detachEvent("onmousewheel", an),
                We.removeEventListener("mousedown", Mn),
                We.removeEventListener("mouseup", Cn))
            }
            function Ct(e, t) {
              void 0 !== t ? (t = t.replace(/ /g, "").split(",")).forEach((function(t) {
                  lo(e, t, "m")
                }
              )) : lo(e, "all", "m")
            }
            function Bt(e) {
              e ? (Mt(!0),
                function() {
                  if (De || Ve) {
                    ae.autoScrolling && (Ce.removeEventListener(it.touchmove, en, {
                      passive: !1
                    }),
                      Ce.addEventListener(it.touchmove, en, {
                        passive: !1
                      }));
                    var e = ae.touchWrapper;
                    e.removeEventListener(it.touchstart, on),
                      e.removeEventListener(it.touchmove, tn, {
                        passive: !1
                      }),
                      e.addEventListener(it.touchstart, on),
                      e.addEventListener(it.touchmove, tn, {
                        passive: !1
                      })
                  }
                }()) : (Mt(!1),
                function() {
                  if (De || Ve) {
                    ae.autoScrolling && (Ce.removeEventListener(it.touchmove, tn, {
                      passive: !1
                    }),
                      Ce.removeEventListener(it.touchmove, en, {
                        passive: !1
                      }));
                    var e = ae.touchWrapper;
                    e.removeEventListener(it.touchstart, on),
                      e.removeEventListener(it.touchmove, tn, {
                        passive: !1
                      })
                  }
                }())
            }
            function Ht(e, t) {
              void 0 !== t ? (t = t.replace(/ /g, "").split(",")).forEach((function(t) {
                  lo(e, t, "k")
                }
              )) : (lo(e, "all", "k"),
                ae.keyboardScrolling = e)
            }
            function It() {
              var e = ee(_(g)[0], h);
              e || !ae.loopTop && !ae.continuousVertical || (e = re(_(h))),
              null != e && sn(e, null, !0)
            }
            function Rt() {
              var e = te(_(g)[0], h);
              e || !ae.loopBottom && !ae.continuousVertical || (e = _(h)[0]),
              null != e && sn(e, null, !1)
            }
            function Nt(e, t) {
              kt(0, "internal"),
                zt(e, t),
                kt(ft.scrollingSpeed, "internal")
            }
            function zt(e, t) {
              var n = Qn(e);
              void 0 !== t ? Gn(e, t) : null != n && sn(n)
            }
            function jt(e) {
              ln("right", e)
            }
            function Pt(e) {
              ln("left", e)
            }
            function Dt(t) {
              if (!q(We, a)) {
                Ue = !0,
                  Ye = Q(),
                  Fe = G();
                for (var n = _(h), o = 0; o < n.length; ++o) {
                  var r = n[o]
                    , i = _(I, r)[0]
                    , l = _(C, r);
                  ae.verticalCentered && J(_(w, r), {
                    height: $n(r) + "px"
                  }),
                    J(r, {
                      height: Ye + "px"
                    }),
                  l.length > 1 && Pn(i, _(B, i)[0])
                }
                ae.scrollOverflow && qe.createScrollBarForAll();
                var c = ie(_(g)[0], h);
                c && Nt(c + 1),
                  Ue = !1,
                xe(ae.afterResize) && t && ae.afterResize.call(We, e.innerWidth, e.innerHeight),
                xe(ae.afterReBuild) && !t && ae.afterReBuild.call(We)
              }
            }
            function Vt() {
              return q(Ce, r)
            }
            function Wt(e) {
              var t = Vt();
              e ? t || (At(!1, "internal"),
                Ot(!1, "internal"),
                le(_(x)),
                ue(Ce, r),
              xe(ae.afterResponsive) && ae.afterResponsive.call(We, e),
              ae.scrollOverflow && qe.createScrollBarForAll()) : t && (At(ft.autoScrolling, "internal"),
                Ot(ft.autoScrolling, "internal"),
                ce(_(x)),
                fe(Ce, r),
              xe(ae.afterResponsive) && ae.afterResponsive.call(We, e))
            }
            function Yt(e) {
              var t = e.target;
              t && me(t, x + " a") ? Rn.call(t, e) : Te(t, T) ? kn.call(t) : Te(t, V) ? Hn.call(t, e) : Te(t, D) || null != me(t, D) ? Nn.call(t, e) : me(t, ae.menu + " [data-menuanchor]") && zn.call(t, e)
            }
            function Ft(e, n) {
              t["fp_" + e] = n,
                t.addEventListener(e, Ut, !0)
            }
            function Ut(e) {
              var n = event.toElement || e.relatedTarget || e.target
                , o = e.type
                , r = !1;
              n != t && n ? ("touchend" === o && (vt = !1,
                setTimeout((function() {
                    vt = !0
                  }
                ), 800)),
              ("mouseenter" !== o || vt) && (ae.normalScrollElements.split(",").forEach((function(e) {
                  if (!r) {
                    var t = Te(n, e)
                      , o = me(n, e);
                    (t || o) && (Ie.shared.isNormalScrollElement || Bt(!1),
                      Ie.shared.isNormalScrollElement = !0,
                      r = !0)
                  }
                }
              )),
              !r && Ie.shared.isNormalScrollElement && (Bt(!0),
                Ie.shared.isNormalScrollElement = !1))) : Bt(!0)
            }
            function Xt() {
              var e = Q()
                , t = G();
              Ye === e && Fe === t || (Ye = e,
                Fe = t,
                Dt(!0))
            }
            function Kt(e, n, o) {
              var r = 100 * o
                , i = 100 / o
                , a = t.createElement("div");
              a.className = H,
                pe(n, a);
              var l = t.createElement("div");
              l.className = R,
                pe(n, l),
                J(_(N, e), {
                  width: r + "%"
                }),
              o > 1 && (ae.controlArrows && function(e) {
                var t = [Oe('<div class="' + Y + '"></div>'), Oe('<div class="' + U + '"></div>')];
                we(_(I, e)[0], t),
                "#fff" !== ae.controlArrowColor && (J(_(X, e), {
                  "border-color": "transparent transparent transparent " + ae.controlArrowColor
                }),
                  J(_(F, e), {
                    "border-color": "transparent " + ae.controlArrowColor + " transparent transparent"
                  }));
                ae.loopHorizontal || le(_(F, e))
              }(e),
              ae.slidesNavigation && function(e, t) {
                de(Oe('<div class="' + j + '"><ul></ul></div>'), e);
                var n = _(P, e)[0];
                ue(n, "fp-" + ae.slidesNavPosition);
                for (var o = 0; o < t; o++)
                  de(Oe('<li><a href="#"><span class="fp-sr-only">' + qt(o, "Slide") + "</span><span></span></a></li>"), _("ul", n)[0]);
                J(n, {
                  "margin-left": "-" + n.innerWidth / 2 + "px"
                }),
                  ue(_("a", _("li", n)[0]), s)
              }(e, o)),
                n.forEach((function(e) {
                    J(e, {
                      width: i + "%"
                    }),
                    ae.verticalCentered && _n(e)
                  }
                ));
              var c = _(B, e)[0];
              null != c && (0 !== ie(_(g), h) || 0 === ie(_(g), h) && 0 !== ie(c)) ? ro(c, "internal") : ue(n[0], s)
            }
            function _t(e, t) {
              t || null != _(g)[0] || ue(e, s),
                je = _(g)[0],
                J(e, {
                  height: Ye + "px"
                }),
              ae.paddingTop && J(e, {
                "padding-top": ae.paddingTop
              }),
              ae.paddingBottom && J(e, {
                "padding-bottom": ae.paddingBottom
              }),
              void 0 !== ae.sectionsColor[t] && J(e, {
                "background-color": ae.sectionsColor[t]
              }),
              void 0 !== ae.anchors[t] && e.setAttribute("data-anchor", ae.anchors[t])
            }
            function $t(e, t) {
              void 0 !== ae.anchors[t] && q(e, s) && Xn(ae.anchors[t], t),
              ae.menu && ae.css3 && null != me(_(ae.menu)[0], o) && _(ae.menu).forEach((function(e) {
                  Ce.appendChild(e)
                }
              ))
            }
            function qt(e, t) {
              return ae.navigationTooltips[e] || ae.anchors[e] || t + " " + (e + 1)
            }
            function Qt() {
              var e, t, n = _(g)[0];
              ue(n, f),
                mn(n),
                gn(),
                Sn(n),
              ae.scrollOverflow && ae.scrollOverflowHandler.afterLoad(),
                e = An(),
                t = Qn(e.section),
              e.section && t && (void 0 === t || ie(t) !== ie(je)) || !xe(ae.afterLoad) || un("afterLoad", {
                activeSection: n,
                element: n,
                direction: null,
                anchorLink: n.getAttribute("data-anchor"),
                sectionIndex: ie(n, h)
              }),
              xe(ae.afterRender) && un("afterRender")
            }
            function Gt() {
              var e;
              if (!ae.autoScrolling || ae.scrollBar) {
                var t = ye()
                  , n = function(e) {
                  var t = e > gt ? "down" : "up";
                  return gt = e,
                    Et = e,
                    t
                }(t)
                  , o = 0
                  , r = t + Q() / 2
                  , i = Ce.offsetHeight - Q() === t
                  , a = _(h);
                if (i)
                  o = a.length - 1;
                else if (t)
                  for (var l = 0; l < a.length; ++l) {
                    a[l].offsetTop <= r && (o = l)
                  }
                else
                  o = 0;
                if (function(e) {
                  var t = _(g)[0].offsetTop
                    , n = t + Q();
                  if ("up" == e)
                    return n >= ye() + Q();
                  return t <= ye()
                }(n) && (q(_(g)[0], f) || (ue(_(g)[0], f),
                  fe(Ee(_(g)[0]), f))),
                  !q(e = a[o], s)) {
                  ht = !0;
                  var c, u, d = _(g)[0], v = ie(d, h) + 1, p = Kn(e), m = e.getAttribute("data-anchor"), w = ie(e, h) + 1, S = _(B, e)[0], b = {
                    activeSection: d,
                    sectionIndex: w - 1,
                    anchorLink: m,
                    element: e,
                    leavingSection: v,
                    direction: p
                  };
                  S && (u = S.getAttribute("data-anchor"),
                    c = ie(S)),
                  Ke && (ue(e, s),
                    fe(Ee(e), s),
                  xe(ae.onLeave) && un("onLeave", b),
                  xe(ae.afterLoad) && un("afterLoad", b),
                    yn(d),
                    mn(e),
                    Sn(e),
                    Xn(m, w - 1),
                  ae.anchors.length && (Re = m),
                    Zn(c, u, m, w)),
                    clearTimeout(et),
                    et = setTimeout((function() {
                        ht = !1
                      }
                    ), 100)
                }
                ae.fitToSection && (clearTimeout(tt),
                  tt = setTimeout((function() {
                      ae.fitToSection && _(g)[0].offsetHeight <= Ye && Jt()
                    }
                  ), ae.fitToSectionDelay))
              }
            }
            function Jt() {
              Ke && (Ue = !0,
                sn(_(g)[0]),
                Ue = !1)
            }
            function Zt(e) {
              if ($e.m[e]) {
                var t = "down" === e ? Rt : It;
                if (ae.scrollOverflow) {
                  var n = ae.scrollOverflowHandler.scrollable(_(g)[0])
                    , o = "down" === e ? "bottom" : "top";
                  if (null != n) {
                    if (!ae.scrollOverflowHandler.isScrolled(o, n))
                      return !0;
                    t()
                  } else
                    t()
                } else
                  t()
              }
            }
            function en(e) {
              ae.autoScrolling && nn(e) && $e.m.up && Le(e)
            }
            function tn(t) {
              var n = me(t.target, h) || _(g)[0];
              if (nn(t)) {
                ae.autoScrolling && Le(t);
                var o = oo(t);
                St = o.y,
                  bt = o.x,
                  _(I, n).length && Math.abs(wt - bt) > Math.abs(mt - St) ? !Pe && Math.abs(wt - bt) > G() / 100 * ae.touchSensitivity && (wt > bt ? $e.m.right && jt(n) : $e.m.left && Pt(n)) : ae.autoScrolling && Ke && Math.abs(mt - St) > e.innerHeight / 100 * ae.touchSensitivity && (mt > St ? Zt("down") : St > mt && Zt("up"))
              }
            }
            function nn(e) {
              return void 0 === e.pointerType || "mouse" != e.pointerType
            }
            function on(e) {
              if (ae.fitToSection && (st = !1),
                nn(e)) {
                var t = oo(e);
                mt = t.y,
                  wt = t.x
              }
            }
            function rn(e, t) {
              for (var n = 0, o = e.slice(Math.max(e.length - t, 1)), r = 0; r < o.length; r++)
                n += o[r];
              return Math.ceil(n / t)
            }
            function an(t) {
              var n = (new Date).getTime()
                , o = q(_(d)[0], E);
              if (!$e.m.down && !$e.m.up)
                return Le(t),
                  !1;
              if (ae.autoScrolling && !ze && !o) {
                var r = (t = t || e.event).wheelDelta || -t.deltaY || -t.detail
                  , i = Math.max(-1, Math.min(1, r))
                  , a = void 0 !== t.wheelDeltaX || void 0 !== t.deltaX
                  , l = Math.abs(t.wheelDeltaX) < Math.abs(t.wheelDelta) || Math.abs(t.deltaX) < Math.abs(t.deltaY) || !a;
                _e.length > 149 && _e.shift(),
                  _e.push(Math.abs(r)),
                ae.scrollBar && Le(t);
                var c = n - yt;
                if (yt = n,
                c > 200 && (_e = []),
                  Ke)
                  rn(_e, 10) >= rn(_e, 70) && l && Zt(i < 0 ? "down" : "up");
                return !1
              }
              ae.fitToSection && (st = !1)
            }
            function ln(e, t) {
              var n = null == t ? _(g)[0] : t
                , o = _(I, n)[0];
              if (!(null == o || Pe || _(C, o).length < 2)) {
                var r = _(B, o)[0]
                  , i = null;
                if (null == (i = "left" === e ? ee(r, C) : te(r, C))) {
                  if (!ae.loopHorizontal)
                    return;
                  var a = Ee(r);
                  i = "left" === e ? a[a.length - 1] : a[0]
                }
                Pe = !Ie.test.isTesting,
                  Pn(o, i, e)
              }
            }
            function cn() {
              for (var e = _(B), t = 0; t < e.length; t++)
                ro(e[t], "internal")
            }
            function sn(e, t, n) {
              if (null != e) {
                var o, r, i = {
                  element: e,
                  callback: t,
                  isMovementUp: n,
                  dtop: function(e) {
                    var t = e.offsetHeight
                      , n = e.offsetTop
                      , o = n
                      , r = n > Et
                      , i = o - Ye + t
                      , a = ae.bigSectionsDestination;
                    return t > Ye ? (r || a) && "bottom" !== a || (o = i) : (r || Ue && null == oe(e)) && (o = i),
                      Et = o,
                      o
                  }(e),
                  yMovement: Kn(e),
                  anchorLink: e.getAttribute("data-anchor"),
                  sectionIndex: ie(e, h),
                  activeSlide: _(B, e)[0],
                  activeSection: _(g)[0],
                  leavingSection: ie(_(g), h) + 1,
                  localIsResizing: Ue
                };
                if (!(i.activeSection == e && !Ue || ae.scrollBar && ye() === i.dtop && !q(e, S))) {
                  if (null != i.activeSlide && (o = i.activeSlide.getAttribute("data-anchor"),
                    r = ie(i.activeSlide)),
                    !i.localIsResizing) {
                    var a = i.yMovement;
                    if (void 0 !== n && (a = n ? "up" : "down"),
                      i.direction = a,
                    xe(ae.onLeave) && !1 === un("onLeave", i))
                      return
                  }
                  ae.autoScrolling && ae.continuousVertical && void 0 !== i.isMovementUp && (!i.isMovementUp && "up" == i.yMovement || i.isMovementUp && "down" == i.yMovement) && (i = function(e) {
                    e.isMovementUp ? Se(_(g)[0], Be(e.activeSection, h)) : we(_(g)[0], He(e.activeSection, h).reverse());
                    return io(_(g)[0].offsetTop),
                      cn(),
                      e.wrapAroundElements = e.activeSection,
                      e.dtop = e.element.offsetTop,
                      e.yMovement = Kn(e.element),
                      e
                  }(i)),
                  i.localIsResizing || yn(i.activeSection),
                  ae.scrollOverflow && ae.scrollOverflowHandler.beforeLeave(),
                    ue(e, s),
                    fe(Ee(e), s),
                    mn(e),
                  ae.scrollOverflow && ae.scrollOverflowHandler.onLeave(),
                    Ke = Ie.test.isTesting,
                    Zn(r, o, i.anchorLink, i.sectionIndex),
                    function(e) {
                      if (ae.css3 && ae.autoScrolling && !ae.scrollBar) {
                        qn("translate3d(0px, -" + Math.round(e.dtop) + "px, 0px)", !0),
                          ae.scrollingSpeed ? (clearTimeout(Je),
                            Je = setTimeout((function() {
                                pn(e)
                              }
                            ), ae.scrollingSpeed)) : pn(e)
                      } else {
                        var t = vn(e.dtop);
                        Ie.test.top = -e.dtop + "px",
                          uo(t.element, t.options, ae.scrollingSpeed, (function() {
                              ae.scrollBar ? setTimeout((function() {
                                  pn(e)
                                }
                              ), 30) : pn(e)
                            }
                          ))
                      }
                    }(i),
                    Re = i.anchorLink,
                    Xn(i.anchorLink, i.sectionIndex)
                }
              }
            }
            function un(e, t) {
              var n, o = function(e, t) {
                var n;
                n = ae.v2compatible ? {
                  afterRender: function() {
                    return [We]
                  },
                  onLeave: function() {
                    return [t.activeSection, t.leavingSection, t.sectionIndex + 1, t.direction]
                  },
                  afterLoad: function() {
                    return [t.element, t.anchorLink, t.sectionIndex + 1]
                  },
                  afterSlideLoad: function() {
                    return [t.destiny, t.anchorLink, t.sectionIndex + 1, t.slideAnchor, t.slideIndex]
                  },
                  onSlideLeave: function() {
                    return [t.prevSlide, t.anchorLink, t.sectionIndex + 1, t.prevSlideIndex, t.direction, t.slideIndex]
                  }
                } : {
                  afterRender: function() {
                    return {
                      section: fn(_(g)[0]),
                      slide: dn(_(B, _(g)[0])[0])
                    }
                  },
                  onLeave: function() {
                    return {
                      origin: fn(t.activeSection),
                      destination: fn(t.element),
                      direction: t.direction
                    }
                  },
                  afterLoad: function() {
                    return n.onLeave()
                  },
                  afterSlideLoad: function() {
                    return {
                      section: fn(t.section),
                      origin: dn(t.prevSlide),
                      destination: dn(t.destiny),
                      direction: t.direction
                    }
                  },
                  onSlideLeave: function() {
                    return n.afterSlideLoad()
                  }
                };
                return n[e]()
              }(e, t);
              if (ae.v2compatible) {
                if (!1 === ae[e].apply(o[0], o.slice(1)))
                  return !1
              } else if (Ae(We, e, o),
              !1 === ae[e].apply(o[Object.keys(o)[0]], (n = o,
                Object.keys(n).map((function(e) {
                    return n[e]
                  }
                )))))
                return !1;
              return !0
            }
            function fn(e) {
              return e ? new po(e) : null
            }
            function dn(e) {
              return e ? new ho(e) : null
            }
            function vn(t) {
              var n = {};
              return ae.autoScrolling && !ae.scrollBar ? (n.options = -t,
                n.element = _(o)[0]) : (n.options = t,
                n.element = e),
                n
            }
            function pn(e) {
              !function(e) {
                null != e.wrapAroundElements && (e.isMovementUp ? Se(_(h)[0], e.wrapAroundElements) : we(_(h)[_(h).length - 1], e.wrapAroundElements),
                  io(_(g)[0].offsetTop),
                  cn())
              }(e),
              xe(ae.afterLoad) && !e.localIsResizing && un("afterLoad", e),
              ae.scrollOverflow && ae.scrollOverflowHandler.afterLoad(),
              e.localIsResizing || Sn(e.element),
                ue(e.element, f),
                fe(Ee(e.element), f),
                gn(),
                Ke = !0,
              xe(e.callback) && e.callback()
            }
            function hn(e, t) {
              e.setAttribute(t, e.getAttribute("data-" + t)),
                e.removeAttribute("data-" + t)
            }
            function gn() {
              var e = _(b)[0] || Vt() && _(y)[0];
              ae.lazyLoading && e && _(h + ":not(" + u + ")").forEach((function(e) {
                  var t, n, o;
                  t = e.getBoundingClientRect(),
                    n = t.top,
                    o = t.bottom,
                  (n + 2 < Ye && n > 0 || o > 2 && o < Ye) && mn(e)
                }
              ))
            }
            function mn(e) {
              ae.lazyLoading && _("img[data-src], img[data-srcset], source[data-src], source[data-srcset], video[data-src], audio[data-src], iframe[data-src]", En(e)).forEach((function(t) {
                  if (["src", "srcset"].forEach((function(n) {
                      var o = t.getAttribute("data-" + n);
                      null != o && o && (hn(t, n),
                        t.addEventListener("load", (function() {
                            wn(e)
                          }
                        )))
                    }
                  )),
                    Te(t, "source")) {
                    var n = me(t, "video, audio");
                    n && (n.load(),
                        n.onloadeddata = function() {
                          wn(e)
                        }
                    )
                  }
                }
              ))
            }
            function wn(e) {
              ae.scrollOverflow && (clearTimeout(ut),
                ut = setTimeout((function() {
                    qe.createScrollBar(e)
                  }
                ), 200))
            }
            function Sn(e) {
              var t = En(e);
              _("video, audio", t).forEach((function(e) {
                  e.hasAttribute("data-autoplay") && "function" == typeof e.play && e.play()
                }
              )),
                _('iframe[src*="youtube.com/embed/"]', t).forEach((function(e) {
                    e.hasAttribute("data-autoplay") && bn(e),
                      e.onload = function() {
                        e.hasAttribute("data-autoplay") && bn(e)
                      }
                  }
                ))
            }
            function bn(e) {
              e.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*")
            }
            function yn(e) {
              var t = En(e);
              _("video, audio", t).forEach((function(e) {
                  e.hasAttribute("data-keepplaying") || "function" != typeof e.pause || e.pause()
                }
              )),
                _('iframe[src*="youtube.com/embed/"]', t).forEach((function(e) {
                    /youtube\.com\/embed\//.test(e.getAttribute("src")) && !e.hasAttribute("data-keepplaying") && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*")
                  }
                ))
            }
            function En(e) {
              var t = _(B, e);
              return t.length && (e = t[0]),
                e
            }
            function Ln() {
              var e = An()
                , t = e.section
                , n = e.slide;
              t && (ae.animateAnchor ? Gn(t, n) : Nt(t, n))
            }
            function xn() {
              if (!ht && !ae.lockAnchors) {
                var e = An()
                  , t = e.section
                  , n = e.slide
                  , o = void 0 === Re
                  , r = void 0 === Re && void 0 === n && !Pe;
                t && t.length && (t && t !== Re && !o || r || !Pe && Ne != n) && Gn(t, n)
              }
            }
            function An() {
              var t, n, o = e.location.hash;
              if (o.length) {
                var r = o.replace("#", "").split("/")
                  , i = o.indexOf("#/") > -1;
                t = i ? "/" + r[1] : decodeURIComponent(r[0]);
                var a = i ? r[2] : r[1];
                a && a.length && (n = decodeURIComponent(a))
              }
              return {
                section: t,
                slide: n
              }
            }
            function Tn(e) {
              clearTimeout(nt);
              var n = t.activeElement
                , o = e.keyCode;
              if (9 === o)
                !function(e) {
                  var n = e.shiftKey
                    , o = t.activeElement
                    , r = Bn(En(_(g)[0]));
                  function i(e) {
                    return Le(e),
                      r[0] ? r[0].focus() : null
                  }
                  if (function(e) {
                    var n = Bn(t)
                      , o = n.indexOf(t.activeElement)
                      , r = e.shiftKey ? o - 1 : o + 1
                      , i = n[r]
                      , a = dn(me(i, C))
                      , l = fn(me(i, h));
                    return !a && !l
                  }(e))
                    return;
                  o ? null == me(o, g + "," + g + " " + B) && (o = i(e)) : i(e);
                  (!n && o == r[r.length - 1] || n && o == r[0]) && Le(e)
                }(e);
              else if (!Te(n, "textarea") && !Te(n, "input") && !Te(n, "select") && "true" !== n.getAttribute("contentEditable") && "" !== n.getAttribute("contentEditable") && ae.keyboardScrolling && ae.autoScrolling) {
                [40, 38, 32, 33, 34].indexOf(o) > -1 && Le(e),
                  ze = e.ctrlKey,
                  nt = setTimeout((function() {
                      !function(e) {
                        var n = e.shiftKey
                          , o = t.activeElement
                          , r = Te(o, "video") || Te(o, "audio");
                        if (!Ke && [37, 39].indexOf(e.keyCode) < 0)
                          return;
                        switch (e.keyCode) {
                          case 38:
                          case 33:
                            $e.k.up && It();
                            break;
                          case 32:
                            if (n && $e.k.up && !r) {
                              It();
                              break
                            }
                          case 40:
                          case 34:
                            $e.k.down && (32 === e.keyCode && r || Rt());
                            break;
                          case 36:
                            $e.k.up && zt(1);
                            break;
                          case 35:
                            $e.k.down && zt(_(h).length);
                            break;
                          case 37:
                            $e.k.left && Pt();
                            break;
                          case 39:
                            $e.k.right && jt();
                            break;
                          default:
                            ;
                        }
                      }(e)
                    }
                  ), 150)
              }
            }
            function kn() {
              Ae(ne(this), "click")
            }
            function On(e) {
              Xe && (ze = e.ctrlKey)
            }
            function Mn(e) {
              2 == e.which && (Lt = e.pageY,
                We.addEventListener("mousemove", jn))
            }
            function Cn(e) {
              2 == e.which && We.removeEventListener("mousemove", jn)
            }
            function Bn(e) {
              return [].slice.call(_(at, e)).filter((function(e) {
                  return "-1" !== e.getAttribute("tabindex") && null !== e.offsetParent
                }
              ))
            }
            function Hn() {
              var e = me(this, h);
              q(this, W) ? $e.m.left && Pt(e) : $e.m.right && jt(e)
            }
            function In() {
              Xe = !1,
                ze = !1
            }
            function Rn(e) {
              Le(e);
              var t = ie(me(this, x + " li"));
              sn(_(h)[t])
            }
            function Nn(e) {
              Le(e);
              var t = _(I, me(this, h))[0];
              Pn(t, _(C, t)[ie(me(this, "li"))])
            }
            function zn(e) {
              !_(ae.menu)[0] || !ae.lockAnchors && ae.anchors.length || (Le(e),
                zt(this.getAttribute("data-menuanchor")))
            }
            function jn(e) {
              ae.autoScrolling && (Ke && (e.pageY < Lt && $e.m.up ? It() : e.pageY > Lt && $e.m.down && Rt()),
                Lt = e.pageY)
            }
            function Pn(e, t, n) {
              var o = me(e, h)
                , r = {
                slides: e,
                destiny: t,
                direction: n,
                destinyPos: {
                  left: t.offsetLeft
                },
                slideIndex: ie(t),
                section: o,
                sectionIndex: ie(o, h),
                anchorLink: o.getAttribute("data-anchor"),
                slidesNav: _(P, o)[0],
                slideAnchor: to(t),
                prevSlide: _(B, o)[0],
                prevSlideIndex: ie(_(B, o)[0]),
                localIsResizing: Ue
              };
              r.xMovement = function(e, t) {
                if (e == t)
                  return "none";
                if (e > t)
                  return "left";
                return "right"
              }(r.prevSlideIndex, r.slideIndex),
                r.direction = r.direction ? r.direction : r.xMovement,
              r.localIsResizing || (Ke = !1),
                ae.onSlideLeave && !r.localIsResizing && "none" !== r.xMovement && xe(ae.onSlideLeave) && !1 === un("onSlideLeave", r) ? Pe = !1 : (ue(t, s),
                  fe(Ee(t), s),
                r.localIsResizing || (yn(r.prevSlide),
                  mn(t)),
                !ae.loopHorizontal && ae.controlArrows && (ke(_(F, o), 0 !== r.slideIndex),
                  ke(_(X, o), null != oe(t))),
                q(o, s) && !r.localIsResizing && Zn(r.slideIndex, r.slideAnchor, r.anchorLink, r.sectionIndex),
                  function(e, t, n) {
                    var o = t.destinyPos;
                    if (ae.css3) {
                      var r = "translate3d(-" + Math.round(o.left) + "px, 0px, 0px)";
                      Ie.test.translate3dH[t.sectionIndex] = r,
                        J(Fn(_(N, e)), ao(r)),
                        Ze = setTimeout((function() {
                            n && Dn(t)
                          }
                        ), ae.scrollingSpeed)
                    } else
                      Ie.test.left[t.sectionIndex] = Math.round(o.left),
                        uo(e, Math.round(o.left), ae.scrollingSpeed, (function() {
                            n && Dn(t)
                          }
                        ))
                  }(e, r, !0))
            }
            function Dn(e) {
              var t, n;
              t = e.slidesNav,
                n = e.slideIndex,
              ae.slidesNavigation && null != t && (fe(_(u, t), s),
                ue(_("a", _("li", t)[n]), s)),
              e.localIsResizing || (xe(ae.afterSlideLoad) && un("afterSlideLoad", e),
                Ke = !0,
                Sn(e.destiny)),
                Pe = !1
            }
            function Vn() {
              clearTimeout(Qe),
                Qe = setTimeout((function() {
                    for (var e = 0; e < 4; e++)
                      Ge = setTimeout(Wn, 200 * e)
                  }
                ), 200)
            }
            function Wn() {
              if (Yn(),
                De) {
                var e = t.activeElement;
                if (!Te(e, "textarea") && !Te(e, "input") && !Te(e, "select")) {
                  var n = Q();
                  Math.abs(n - xt) > 20 * Math.max(xt, n) / 100 && (Dt(!0),
                    xt = n)
                }
              } else
                Xt()
            }
            function Yn() {
              var t = ae.responsive || ae.responsiveWidth
                , n = ae.responsiveHeight
                , o = t && e.innerWidth < t
                , r = n && e.innerHeight < n;
              t && n ? Wt(o || r) : t ? Wt(o) : n && Wt(r)
            }
            function Fn(e) {
              var t = "all " + ae.scrollingSpeed + "ms " + ae.easingcss3;
              return fe(e, i),
                J(e, {
                  "-webkit-transition": t,
                  transition: t
                })
            }
            function Un(e) {
              return ue(e, i)
            }
            function Xn(e, t) {
              var n;
              n = e,
                _(ae.menu).forEach((function(e) {
                    ae.menu && null != e && (fe(_(u, e), s),
                      ue(_('[data-menuanchor="' + n + '"]', e), s))
                  }
                )),
                function(e, t) {
                  ae.navigation && null != _(x)[0] && (fe(_(u, _(x)[0]), s),
                    ue(e ? _('a[href="#' + e + '"]', _(x)[0]) : _("a", _("li", _(x)[0])[t]), s))
                }(e, t)
            }
            function Kn(e) {
              var t = ie(_(g)[0], h)
                , n = ie(e, h);
              return t == n ? "none" : t > n ? "up" : "down"
            }
            function _n(e) {
              if (!q(e, z)) {
                var n = t.createElement("div");
                n.className = m,
                  n.style.height = $n(e) + "px",
                  ue(e, z),
                  he(e, n)
              }
            }
            function $n(e) {
              var t = Ye;
              if (ae.paddingTop || ae.paddingBottom) {
                var n = e;
                q(n, p) || (n = me(e, h));
                var o = parseInt(getComputedStyle(n)["padding-top"]) + parseInt(getComputedStyle(n)["padding-bottom"]);
                t = Ye - o
              }
              return t
            }
            function qn(e, t) {
              t ? Fn(We) : Un(We),
                J(We, ao(e)),
                Ie.test.translate3d = e,
                setTimeout((function() {
                    fe(We, i)
                  }
                ), 10)
            }
            function Qn(e) {
              var t = _(h + '[data-anchor="' + e + '"]', We)[0];
              if (!t) {
                var n = void 0 !== e ? e - 1 : 0;
                t = _(h)[n]
              }
              return t
            }
            function Gn(e, t) {
              var n = Qn(e);
              if (null != n) {
                var o = function(e, t) {
                  var n = _(C + '[data-anchor="' + e + '"]', t)[0];
                  return null == n && (e = void 0 !== e ? e : 0,
                    n = _(C, t)[e]),
                    n
                }(t, n);
                to(n) === Re || q(n, s) ? Jn(o) : sn(n, (function() {
                    Jn(o)
                  }
                ))
              }
            }
            function Jn(e) {
              null != e && Pn(me(e, I), e)
            }
            function Zn(e, t, n, o) {
              var r = "";
              ae.anchors.length && !ae.lockAnchors && (e ? (null != n && (r = n),
              null == t && (t = e),
                Ne = t,
                eo(r + "/" + t)) : null != e ? (Ne = t,
                eo(n)) : eo(n)),
                no()
            }
            function eo(t) {
              if (ae.recordHistory)
                location.hash = t;
              else if (De || Ve)
                e.history.replaceState(void 0, void 0, "#" + t);
              else {
                var n = e.location.href.split("#")[0];
                e.location.replace(n + "#" + t)
              }
            }
            function to(e) {
              if (!e)
                return null;
              var t = e.getAttribute("data-anchor")
                , n = ie(e);
              return null == t && (t = n),
                t
            }
            function no() {
              var e = _(g)[0]
                , t = _(B, e)[0]
                , n = to(e)
                , o = to(t)
                , r = String(n);
              t && (r = r + "-" + o),
                r = r.replace("/", "-").replace("#", "");
              var i = new RegExp("\\b\\s?" + c + "-[^\\s]+\\b","g");
              Ce.className = Ce.className.replace(i, ""),
                ue(Ce, c + "-" + r)
            }
            function oo(e) {
              var t = [];
              return t.y = void 0 !== e.pageY && (e.pageY || e.pageX) ? e.pageY : e.touches[0].pageY,
                t.x = void 0 !== e.pageX && (e.pageY || e.pageX) ? e.pageX : e.touches[0].pageX,
              Ve && nn(e) && ae.scrollBar && void 0 !== e.touches && (t.y = e.touches[0].pageY,
                t.x = e.touches[0].pageX),
                t
            }
            function ro(e, t) {
              kt(0, "internal"),
              void 0 !== t && (Ue = !0),
                Pn(me(e, I), e),
              void 0 !== t && (Ue = !1),
                kt(ft.scrollingSpeed, "internal")
            }
            function io(e) {
              var t = Math.round(e);
              if (ae.css3 && ae.autoScrolling && !ae.scrollBar)
                qn("translate3d(0px, -" + t + "px, 0px)", !1);
              else if (ae.autoScrolling && !ae.scrollBar)
                J(We, {
                  top: -t + "px"
                }),
                  Ie.test.top = -t + "px";
              else {
                var n = vn(t);
                fo(n.element, n.options)
              }
            }
            function ao(e) {
              return {
                "-webkit-transform": e,
                "-moz-transform": e,
                "-ms-transform": e,
                transform: e
              }
            }
            function lo(e, t, n) {
              "all" !== t ? $e[n][t] = e : Object.keys($e[n]).forEach((function(t) {
                  $e[n][t] = e
                }
              ))
            }
            function co(e, t, n) {
              ae[e] = t,
              "internal" !== n && (ft[e] = t)
            }
            function so() {
              var e = ae.licenseKey
                , t = "font-size: 15px;background:yellow;";
              se ? e && e.length < 20 && (console.warn("%c This website was made using fullPage.js slider. More info on the following website:", t),
                console.warn("%c https://alvarotrigo.com/fullPage/", t)) : (K("error", "Fullpage.js version 3 has changed its license to GPLv3 and it requires a `licenseKey` option. Read about it here:"),
                K("error", "https://github.com/alvarotrigo/fullPage.js#options.")),
                q(be, l) ? K("error", "Fullpage.js can only be initialized once and you are doing it multiple times!") : (ae.continuousVertical && (ae.loopTop || ae.loopBottom) && (ae.continuousVertical = !1,
                  K("warn", "Option `loopTop/loopBottom` is mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
                !ae.scrollOverflow || !ae.scrollBar && ae.autoScrolling || K("warn", "Options scrollBar:true and autoScrolling:false are mutually exclusive with scrollOverflow:true. Sections with scrollOverflow might not work well in Firefox"),
                !ae.continuousVertical || !ae.scrollBar && ae.autoScrolling || (ae.continuousVertical = !1,
                  K("warn", "Scroll bars (`scrollBar:true` or `autoScrolling:false`) are mutually exclusive with `continuousVertical`; `continuousVertical` disabled")),
                ae.scrollOverflow && null == ae.scrollOverflowHandler && (ae.scrollOverflow = !1,
                  K("error", "The option `scrollOverflow:true` requires the file `scrolloverflow.min.js`. Please include it before fullPage.js.")),
                  pt.forEach((function(e) {
                      ae[e] && K("warn", "fullpage.js extensions require fullpage.extensions.min.js file instead of the usual fullpage.js. Requested: " + e)
                    }
                  )),
                  ae.anchors.forEach((function(e) {
                      var t = [].slice.call(_("[name]")).filter((function(t) {
                          return t.getAttribute("name") && t.getAttribute("name").toLowerCase() == e.toLowerCase()
                        }
                      ))
                        , n = [].slice.call(_("[id]")).filter((function(t) {
                          return t.getAttribute("id") && t.getAttribute("id").toLowerCase() == e.toLowerCase()
                        }
                      ));
                      if (n.length || t.length) {
                        K("error", "data-anchor tags can not have the same value as any `id` element on the site (or `name` element for IE).");
                        var o = n.length ? "id" : "name";
                        (n.length || t.length) && K("error", '"' + e + '" is is being used by another element `' + o + "` property")
                      }
                    }
                  )))
            }
            function uo(t, n, o, r) {
              var i = function(t) {
                return t.self != e && q(t, H) ? t.scrollLeft : !ae.autoScrolling || ae.scrollBar ? ye() : t.offsetTop
              }(t)
                , a = n - i
                , l = 0;
              st = !0;
              var c = function() {
                if (st) {
                  var s = n;
                  l += 20,
                  o && (s = e.fp_easings[ae.easing](l, i, a, o)),
                    fo(t, s),
                    l < o ? setTimeout(c, 20) : void 0 !== r && r()
                } else
                  l < o && r()
              };
              c()
            }
            function fo(t, n) {
              !ae.autoScrolling || ae.scrollBar || t.self != e && q(t, H) ? t.self != e && q(t, H) ? t.scrollLeft = n : t.scrollTo(0, n) : t.style.top = n + "px"
            }
            function vo(e, t) {
              this.anchor = e.getAttribute("data-anchor"),
                this.item = e,
                this.index = ie(e, t),
                this.isLast = this.index === e.parentElement.querySelectorAll(t).length - 1,
                this.isFirst = !this.index
            }
            function po(e) {
              vo.call(this, e, h)
            }
            function ho(e) {
              vo.call(this, e, C)
            }
            so()
          }
      }
    )),
    window.jQuery && window.fullpage && function(e, t) {
      "use strict";
      e && t ? e.fn.fullpage = function(n) {
          n = e.extend({}, n, {
            $: e
          }),
            new t(this[0],n)
        }
        : window.fp_utils.showError("error", "jQuery is required to use the jQuery fullpage adapter!")
    }(window.jQuery, window.fullpage)
  }
}]);
