(window.webpackJsonp = window.webpackJsonp || []).push([[22], {
  446: function(e, t, a) {
      "use strict";
      function n(e, t) {
          for (var a = 0; a < t.length; a++) {
              var n = t[a];
              n.enumerable = n.enumerable || !1,
              n.configurable = !0,
              "value"in n && (n.writable = !0),
              Object.defineProperty(e, n.key, n)
          }
      }
      function o(e, t, a) {
          return t in e ? Object.defineProperty(e, t, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
          }) : e[t] = a,
          e
      }
      Object.defineProperty(t, "__esModule", {
          value: !0
      }),
      t.default = void 0;
      var r = function() {
          function e() {
              var t = this;
              !function(e, t) {
                  if (!(e instanceof t))
                      throw new TypeError("Cannot call a class as a function")
              }(this, e),
              o(this, "updateGlobalNavTheme", (function() {
                  var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                  t.objects.el[e].classList.contains("-bg-deep-blue") || t.objects.el[e].classList.contains("-bg-dark-blue-gradient") ? t.objects.globalHeader.classList.add("-theme-dark") : t.objects.globalHeader.classList.add("-theme-light")
              }
              )),
              o(this, "firstRun", (function() {
                  if (!t.objects.globalHeader || t.objects.sectionalScroll)
                      return !1;
                  t.updateGlobalNavTheme()
              }
              )),
              o(this, "init", (function() {
                  t.firstRun()
              }
              )),
              this.objects = {
                  el: document.querySelectorAll('[data-module="HeroWithPartnershipMark"]'),
                  body: document.querySelector("body"),
                  globalHeader: document.querySelector(".global-header.is-transparent"),
                  sectionalScroll: document.querySelector(".sectional-scroll")
              }
          }
          var t, a, r;
          return t = e,
          (a = [{
              key: "name",
              value: function() {
                  return "HeroWithPartnershipMark"
              }
          }]) && n(t.prototype, a),
          r && n(t, r),
          e
      }();
      t.default = r
  }
}]);
