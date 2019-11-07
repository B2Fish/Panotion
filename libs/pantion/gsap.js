(window.webpackJsonp = window.webpackJsonp || []).push([[1], {
  461: function(t, e, i) {
    "use strict";
    i.r(e),
      function(t, r) {
        i.d(e, "_gsScope", (function() {
            return s
          }
        )),
          i.d(e, "TweenLite", (function() {
              return n
            }
          )),
          i.d(e, "globals", (function() {
              return a
            }
          )),
          i.d(e, "default", (function() {
              return n
            }
          )),
          i.d(e, "SimpleTimeline", (function() {
              return l
            }
          )),
          i.d(e, "Animation", (function() {
              return h
            }
          )),
          i.d(e, "Ease", (function() {
              return _
            }
          )),
          i.d(e, "Linear", (function() {
              return u
            }
          )),
          i.d(e, "Power0", (function() {
              return c
            }
          )),
          i.d(e, "Power1", (function() {
              return f
            }
          )),
          i.d(e, "Power2", (function() {
              return p
            }
          )),
          i.d(e, "Power3", (function() {
              return m
            }
          )),
          i.d(e, "Power4", (function() {
              return d
            }
          )),
          i.d(e, "TweenPlugin", (function() {
              return g
            }
          )),
          i.d(e, "EventDispatcher", (function() {
              return v
            }
          ));
        var s = "undefined" != typeof window ? window : t.exports && void 0 !== r ? r : {}
          , n = function(t) {
          var e = {}
            , i = t.document
            , r = t.GreenSockGlobals = t.GreenSockGlobals || t;
          if (r.TweenLite)
            return r.TweenLite;
          var s, n, a, o, l, h, _, u = function(t) {
              var e, i = t.split("."), s = r;
              for (e = 0; e < i.length; e++)
                s[i[e]] = s = s[i[e]] || {};
              return s
            }, c = u("com.greensock"), f = function(t) {
              var e, i = [], r = t.length;
              for (e = 0; e !== r; i.push(t[e++]))
                ;
              return i
            }, p = function() {}, m = (h = Object.prototype.toString,
                _ = h.call([]),
                function(t) {
                  return null != t && (t instanceof Array || "object" == typeof t && !!t.push && h.call(t) === _)
                }
            ), d = {}, g = function(t, i, s, n) {
              this.sc = d[t] ? d[t].sc : [],
                d[t] = this,
                this.gsClass = null,
                this.func = s;
              var a = [];
              this.check = function(o) {
                for (var l, h, _, c, f = i.length, p = f; --f > -1; )
                  (l = d[i[f]] || new g(i[f],[])).gsClass ? (a[f] = l.gsClass,
                    p--) : o && l.sc.push(this);
                if (0 === p && s)
                  for (_ = (h = ("com.greensock." + t).split(".")).pop(),
                    c = u(h.join("."))[_] = this.gsClass = s.apply(s, a),
                  n && (r[_] = e[_] = c),
                    f = 0; f < this.sc.length; f++)
                    this.sc[f].check()
              }
                ,
                this.check(!0)
            }, v = t._gsDefine = function(t, e, i, r) {
              return new g(t,e,i,r)
            }
            , y = c._class = function(t, e, i) {
              return e = e || function() {}
                ,
                v(t, [], (function() {
                    return e
                  }
                ), i),
                e
            }
          ;
          v.globals = r;
          var T = [0, 0, 1, 1]
            , x = y("easing.Ease", (function(t, e, i, r) {
                this._func = t,
                  this._type = i || 0,
                  this._power = r || 0,
                  this._params = e ? T.concat(e) : T
              }
            ), !0)
            , w = x.map = {}
            , b = x.register = function(t, e, i, r) {
              for (var s, n, a, o, l = e.split(","), h = l.length, _ = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1; )
                for (n = l[h],
                  s = r ? y("easing." + n, null, !0) : c.easing[n] || {},
                  a = _.length; --a > -1; )
                  o = _[a],
                    w[n + "." + o] = w[o + n] = s[o] = t.getRatio ? t : t[o] || new t
            }
          ;
          for ((a = x.prototype)._calcEnd = !1,
            a.getRatio = function(t) {
              if (this._func)
                return this._params[0] = t,
                  this._func.apply(null, this._params);
              var e = this._type
                , i = this._power
                , r = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
              return 1 === i ? r *= r : 2 === i ? r *= r * r : 3 === i ? r *= r * r * r : 4 === i && (r *= r * r * r * r),
                1 === e ? 1 - r : 2 === e ? r : t < .5 ? r / 2 : 1 - r / 2
            }
            ,
            n = (s = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --n > -1; )
            a = s[n] + ",Power" + n,
              b(new x(null,null,1,n), a, "easeOut", !0),
              b(new x(null,null,2,n), a, "easeIn" + (0 === n ? ",easeNone" : "")),
              b(new x(null,null,3,n), a, "easeInOut");
          w.linear = c.easing.Linear.easeIn,
            w.swing = c.easing.Quad.easeInOut;
          var P = y("events.EventDispatcher", (function(t) {
              this._listeners = {},
                this._eventTarget = t || this
            }
          ));
          (a = P.prototype).addEventListener = function(t, e, i, r, s) {
            s = s || 0;
            var n, a, h = this._listeners[t], _ = 0;
            for (this !== o || l || o.wake(),
            null == h && (this._listeners[t] = h = []),
              a = h.length; --a > -1; )
              (n = h[a]).c === e && n.s === i ? h.splice(a, 1) : 0 === _ && n.pr < s && (_ = a + 1);
            h.splice(_, 0, {
              c: e,
              s: i,
              up: r,
              pr: s
            })
          }
            ,
            a.removeEventListener = function(t, e) {
              var i, r = this._listeners[t];
              if (r)
                for (i = r.length; --i > -1; )
                  if (r[i].c === e)
                    return void r.splice(i, 1)
            }
            ,
            a.dispatchEvent = function(t) {
              var e, i, r, s = this._listeners[t];
              if (s)
                for ((e = s.length) > 1 && (s = s.slice(0)),
                  i = this._eventTarget; --e > -1; )
                  (r = s[e]) && (r.up ? r.c.call(r.s || i, {
                    type: t,
                    target: i
                  }) : r.c.call(r.s || i))
            }
          ;
          var S = t.requestAnimationFrame
            , k = t.cancelAnimationFrame
            , O = Date.now || function() {
            return (new Date).getTime()
          }
            , R = O();
          for (n = (s = ["ms", "moz", "webkit", "o"]).length; --n > -1 && !S; )
            S = t[s[n] + "RequestAnimationFrame"],
              k = t[s[n] + "CancelAnimationFrame"] || t[s[n] + "CancelRequestAnimationFrame"];
          y("Ticker", (function(t, e) {
              var r, s, n, a, h, _ = this, u = O(), c = !(!1 === e || !S) && "auto", f = 500, m = 33, d = function(t) {
                var e, i, o = O() - R;
                o > f && (u += o - m),
                  R += o,
                  _.time = (R - u) / 1e3,
                  e = _.time - h,
                (!r || e > 0 || !0 === t) && (_.frame++,
                  h += e + (e >= a ? .004 : a - e),
                  i = !0),
                !0 !== t && (n = s(d)),
                i && _.dispatchEvent("tick")
              };
              P.call(_),
                _.time = _.frame = 0,
                _.tick = function() {
                  d(!0)
                }
                ,
                _.lagSmoothing = function(t, e) {
                  if (!arguments.length)
                    return f < 1e8;
                  f = t || 1e8,
                    m = Math.min(e, f, 0)
                }
                ,
                _.sleep = function() {
                  null != n && (c && k ? k(n) : clearTimeout(n),
                    s = p,
                    n = null,
                  _ === o && (l = !1))
                }
                ,
                _.wake = function(t) {
                  null !== n ? _.sleep() : t ? u += -R + (R = O()) : _.frame > 10 && (R = O() - f + 5),
                    s = 0 === r ? p : c && S ? S : function(t) {
                      return setTimeout(t, 1e3 * (h - _.time) + 1 | 0)
                    }
                    ,
                  _ === o && (l = !0),
                    d(2)
                }
                ,
                _.fps = function(t) {
                  if (!arguments.length)
                    return r;
                  a = 1 / ((r = t) || 60),
                    h = this.time + a,
                    _.wake()
                }
                ,
                _.useRAF = function(t) {
                  if (!arguments.length)
                    return c;
                  _.sleep(),
                    c = t,
                    _.fps(r)
                }
                ,
                _.fps(t),
                setTimeout((function() {
                    "auto" === c && _.frame < 5 && "hidden" !== (i || {}).visibilityState && _.useRAF(!1)
                  }
                ), 1500)
            }
          )),
            (a = c.Ticker.prototype = new c.events.EventDispatcher).constructor = c.Ticker;
          var C = y("core.Animation", (function(t, e) {
              if (this.vars = e = e || {},
                this._duration = this._totalDuration = t || 0,
                this._delay = Number(e.delay) || 0,
                this._timeScale = 1,
                this._active = !!e.immediateRender,
                this.data = e.data,
                this._reversed = !!e.reversed,
                H) {
                l || o.wake();
                var i = this.vars.useFrames ? Z : H;
                i.add(this, i._time),
                this.vars.paused && this.paused(!0)
              }
            }
          ));
          o = C.ticker = new c.Ticker,
            (a = C.prototype)._dirty = a._gc = a._initted = a._paused = !1,
            a._totalTime = a._time = 0,
            a._rawPrevTime = -1,
            a._next = a._last = a._onUpdate = a._timeline = a.timeline = null,
            a._paused = !1;
          var A = function() {
            l && O() - R > 2e3 && ("hidden" !== (i || {}).visibilityState || !o.lagSmoothing()) && o.wake();
            var t = setTimeout(A, 2e3);
            t.unref && t.unref()
          };
          A(),
            a.play = function(t, e) {
              return null != t && this.seek(t, e),
                this.reversed(!1).paused(!1)
            }
            ,
            a.pause = function(t, e) {
              return null != t && this.seek(t, e),
                this.paused(!0)
            }
            ,
            a.resume = function(t, e) {
              return null != t && this.seek(t, e),
                this.paused(!1)
            }
            ,
            a.seek = function(t, e) {
              return this.totalTime(Number(t), !1 !== e)
            }
            ,
            a.restart = function(t, e) {
              return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
            }
            ,
            a.reverse = function(t, e) {
              return null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
            }
            ,
            a.render = function(t, e, i) {}
            ,
            a.invalidate = function() {
              return this._time = this._totalTime = 0,
                this._initted = this._gc = !1,
                this._rawPrevTime = -1,
              !this._gc && this.timeline || this._enabled(!0),
                this
            }
            ,
            a.isActive = function() {
              var t, e = this._timeline, i = this._startTime;
              return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-8
            }
            ,
            a._enabled = function(t, e) {
              return l || o.wake(),
                this._gc = !t,
                this._active = this.isActive(),
              !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
                !1
            }
            ,
            a._kill = function(t, e) {
              return this._enabled(!1, !1)
            }
            ,
            a.kill = function(t, e) {
              return this._kill(t, e),
                this
            }
            ,
            a._uncache = function(t) {
              for (var e = t ? this : this.timeline; e; )
                e._dirty = !0,
                  e = e.timeline;
              return this
            }
            ,
            a._swapSelfInParams = function(t) {
              for (var e = t.length, i = t.concat(); --e > -1; )
                "{self}" === t[e] && (i[e] = this);
              return i
            }
            ,
            a._callback = function(t) {
              var e = this.vars
                , i = e[t]
                , r = e[t + "Params"]
                , s = e[t + "Scope"] || e.callbackScope || this;
              switch (r ? r.length : 0) {
                case 0:
                  i.call(s);
                  break;
                case 1:
                  i.call(s, r[0]);
                  break;
                case 2:
                  i.call(s, r[0], r[1]);
                  break;
                default:
                  i.apply(s, r)
              }
            }
            ,
            a.eventCallback = function(t, e, i, r) {
              if ("on" === (t || "").substr(0, 2)) {
                var s = this.vars;
                if (1 === arguments.length)
                  return s[t];
                null == e ? delete s[t] : (s[t] = e,
                  s[t + "Params"] = m(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i,
                  s[t + "Scope"] = r),
                "onUpdate" === t && (this._onUpdate = e)
              }
              return this
            }
            ,
            a.delay = function(t) {
              return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay),
                this._delay = t,
                this) : this._delay
            }
            ,
            a.duration = function(t) {
              return arguments.length ? (this._duration = this._totalDuration = t,
                this._uncache(!0),
              this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
                this) : (this._dirty = !1,
                this._duration)
            }
            ,
            a.totalDuration = function(t) {
              return this._dirty = !1,
                arguments.length ? this.duration(t) : this._totalDuration
            }
            ,
            a.time = function(t, e) {
              return arguments.length ? (this._dirty && this.totalDuration(),
                this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }
            ,
            a.totalTime = function(t, e, i) {
              if (l || o.wake(),
                !arguments.length)
                return this._totalTime;
              if (this._timeline) {
                if (t < 0 && !i && (t += this.totalDuration()),
                  this._timeline.smoothChildTiming) {
                  this._dirty && this.totalDuration();
                  var r = this._totalDuration
                    , s = this._timeline;
                  if (t > r && !i && (t = r),
                    this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? r - t : t) / this._timeScale,
                  s._dirty || this._uncache(!1),
                    s._timeline)
                    for (; s._timeline; )
                      s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0),
                        s = s._timeline
                }
                this._gc && this._enabled(!0, !1),
                this._totalTime === t && 0 !== this._duration || (E.length && Q(),
                  this.render(t, e, !1),
                E.length && Q())
              }
              return this
            }
            ,
            a.progress = a.totalProgress = function(t, e) {
              var i = this.duration();
              return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }
            ,
            a.startTime = function(t) {
              return arguments.length ? (t !== this._startTime && (this._startTime = t,
              this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)),
                this) : this._startTime
            }
            ,
            a.endTime = function(t) {
              return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }
            ,
            a.timeScale = function(t) {
              if (!arguments.length)
                return this._timeScale;
              var e, i;
              for (t = t || 1e-8,
              this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(),
                this._startTime = i - (i - this._startTime) * this._timeScale / t),
                this._timeScale = t,
                i = this.timeline; i && i.timeline; )
                i._dirty = !0,
                  i.totalDuration(),
                  i = i.timeline;
              return this
            }
            ,
            a.reversed = function(t) {
              return arguments.length ? (t != this._reversed && (this._reversed = t,
                this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
                this) : this._reversed
            }
            ,
            a.paused = function(t) {
              if (!arguments.length)
                return this._paused;
              var e, i, r = this._timeline;
              return t != this._paused && r && (l || t || o.wake(),
                i = (e = r.rawTime()) - this._pauseTime,
              !t && r.smoothChildTiming && (this._startTime += i,
                this._uncache(!1)),
                this._pauseTime = t ? e : null,
                this._paused = t,
                this._active = this.isActive(),
              !t && 0 !== i && this._initted && this.duration() && (e = r.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale,
                this.render(e, e === this._totalTime, !0))),
              this._gc && !t && this._enabled(!0, !1),
                this
            }
          ;
          var D = y("core.SimpleTimeline", (function(t) {
              C.call(this, 0, t),
                this.autoRemoveChildren = this.smoothChildTiming = !0
            }
          ));
          (a = D.prototype = new C).constructor = D,
            a.kill()._gc = !1,
            a._first = a._last = a._recent = null,
            a._sortChildren = !1,
            a.add = a.insert = function(t, e, i, r) {
              var s, n;
              if (t._startTime = Number(e || 0) + t._delay,
              t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)),
              t.timeline && t.timeline._remove(t, !0),
                t.timeline = t._timeline = this,
              t._gc && t._enabled(!0, !0),
                s = this._last,
                this._sortChildren)
                for (n = t._startTime; s && s._startTime > n; )
                  s = s._prev;
              return s ? (t._next = s._next,
                s._next = t) : (t._next = this._first,
                this._first = t),
                t._next ? t._next._prev = t : this._last = t,
                t._prev = s,
                this._recent = t,
              this._timeline && this._uncache(!0),
                this
            }
            ,
            a._remove = function(t, e) {
              return t.timeline === this && (e || t._enabled(!1, !0),
                t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next),
                t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev),
                t._next = t._prev = t.timeline = null,
              t === this._recent && (this._recent = this._last),
              this._timeline && this._uncache(!0)),
                this
            }
            ,
            a.render = function(t, e, i) {
              var r, s = this._first;
              for (this._totalTime = this._time = this._rawPrevTime = t; s; )
                r = s._next,
                (s._active || t >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                  s = r
            }
            ,
            a.rawTime = function() {
              return l || o.wake(),
                this._totalTime
            }
          ;
          var M = y("TweenLite", (function(e, i, r) {
              if (C.call(this, i, r),
                this.render = M.prototype.render,
              null == e)
                throw "Cannot tween a null target.";
              this.target = e = "string" != typeof e ? e : M.selector(e) || e;
              var s, n, a, o = e.jquery || e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType), l = this.vars.overwrite;
              if (this._overwrite = l = null == l ? G[M.defaultOverwrite] : "number" == typeof l ? l >> 0 : G[l],
              (o || e instanceof Array || e.push && m(e)) && "number" != typeof e[0])
                for (this._targets = a = f(e),
                  this._propLookup = [],
                  this._siblings = [],
                  s = 0; s < a.length; s++)
                  (n = a[s]) ? "string" != typeof n ? n.length && n !== t && n[0] && (n[0] === t || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(s--, 1),
                    this._targets = a = a.concat(f(n))) : (this._siblings[s] = K(n, this, !1),
                  1 === l && this._siblings[s].length > 1 && tt(n, this, null, 1, this._siblings[s])) : "string" == typeof (n = a[s--] = M.selector(n)) && a.splice(s + 1, 1) : a.splice(s--, 1);
              else
                this._propLookup = {},
                  this._siblings = K(e, this, !1),
                1 === l && this._siblings.length > 1 && tt(e, this, null, 1, this._siblings);
              (this.vars.immediateRender || 0 === i && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-8,
                this.render(Math.min(0, -this._delay)))
            }
          ), !0)
            , F = function(e) {
            return e && e.length && e !== t && e[0] && (e[0] === t || e[0].nodeType && e[0].style && !e.nodeType)
          };
          (a = M.prototype = new C).constructor = M,
            a.kill()._gc = !1,
            a.ratio = 0,
            a._firstPT = a._targets = a._overwrittenProps = a._startAt = null,
            a._notifyPluginsOfEnabled = a._lazy = !1,
            M.version = "2.1.3",
            M.defaultEase = a._ease = new x(null,null,1,1),
            M.defaultOverwrite = "auto",
            M.ticker = o,
            M.autoSleep = 120,
            M.lagSmoothing = function(t, e) {
              o.lagSmoothing(t, e)
            }
            ,
            M.selector = t.$ || t.jQuery || function(e) {
              var r = t.$ || t.jQuery;
              return r ? (M.selector = r,
                r(e)) : (i || (i = t.document),
                i ? i.querySelectorAll ? i.querySelectorAll(e) : i.getElementById("#" === e.charAt(0) ? e.substr(1) : e) : e)
            }
          ;
          var E = []
            , z = {}
            , L = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
            , I = /[\+-]=-?[\.\d]/
            , N = function(t) {
              for (var e, i = this._firstPT; i; )
                e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s,
                  i.m ? e = i.m.call(this._tween, e, this._target || i.t, this._tween) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0),
                  i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e,
                  i = i._next
            }
            , X = function(t) {
              return (1e3 * t | 0) / 1e3 + ""
            }
            , B = function(t, e, i, r) {
              var s, n, a, o, l, h, _, u = [], c = 0, f = "", p = 0;
              for (u.start = t,
                u.end = e,
                t = u[0] = t + "",
                e = u[1] = e + "",
              i && (i(u),
                t = u[0],
                e = u[1]),
                u.length = 0,
                s = t.match(L) || [],
                n = e.match(L) || [],
              r && (r._next = null,
                r.blob = 1,
                u._firstPT = u._applyPT = r),
                l = n.length,
                o = 0; o < l; o++)
                _ = n[o],
                  f += (h = e.substr(c, e.indexOf(_, c) - c)) || !o ? h : ",",
                  c += h.length,
                  p ? p = (p + 1) % 5 : "rgba(" === h.substr(-5) && (p = 1),
                  _ === s[o] || s.length <= o ? f += _ : (f && (u.push(f),
                    f = ""),
                    a = parseFloat(s[o]),
                    u.push(a),
                    u._firstPT = {
                      _next: u._firstPT,
                      t: u,
                      p: u.length - 1,
                      s: a,
                      c: ("=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * parseFloat(_.substr(2)) : parseFloat(_) - a) || 0,
                      f: 0,
                      m: p && p < 4 ? Math.round : X
                    }),
                  c += _.length;
              return (f += e.substr(c)) && u.push(f),
                u.setRatio = N,
              I.test(e) && (u.end = null),
                u
            }
            , j = function(t, e, i, r, s, n, a, o, l) {
              "function" == typeof r && (r = r(l || 0, t));
              var h = typeof t[e]
                , _ = "function" !== h ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3)
                , u = "get" !== i ? i : _ ? a ? t[_](a) : t[_]() : t[e]
                , c = "string" == typeof r && "=" === r.charAt(1)
                , f = {
                t: t,
                p: e,
                s: u,
                f: "function" === h,
                pg: 0,
                n: s || e,
                m: n ? "function" == typeof n ? n : Math.round : 0,
                pr: 0,
                c: c ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2)) : parseFloat(r) - u || 0
              };
              if (("number" != typeof u || "number" != typeof r && !c) && (a || isNaN(u) || !c && isNaN(r) || "boolean" == typeof u || "boolean" == typeof r ? (f.fp = a,
                f = {
                  t: B(u, c ? parseFloat(f.s) + f.c + (f.s + "").replace(/[0-9\-\.]/g, "") : r, o || M.defaultStringFilter, f),
                  p: "setRatio",
                  s: 0,
                  c: 1,
                  f: 2,
                  pg: 0,
                  n: s || e,
                  pr: 0,
                  m: 0
                }) : (f.s = parseFloat(u),
              c || (f.c = parseFloat(r) - f.s || 0))),
                f.c)
                return (f._next = this._firstPT) && (f._next._prev = f),
                  this._firstPT = f,
                  f
            }
            , Y = M._internals = {
              isArray: m,
              isSelector: F,
              lazyTweens: E,
              blobDif: B
            }
            , U = M._plugins = {}
            , V = Y.tweenLookup = {}
            , q = 0
            , W = Y.reservedProps = {
              ease: 1,
              delay: 1,
              overwrite: 1,
              onComplete: 1,
              onCompleteParams: 1,
              onCompleteScope: 1,
              useFrames: 1,
              runBackwards: 1,
              startAt: 1,
              onUpdate: 1,
              onUpdateParams: 1,
              onUpdateScope: 1,
              onStart: 1,
              onStartParams: 1,
              onStartScope: 1,
              onReverseComplete: 1,
              onReverseCompleteParams: 1,
              onReverseCompleteScope: 1,
              onRepeat: 1,
              onRepeatParams: 1,
              onRepeatScope: 1,
              easeParams: 1,
              yoyo: 1,
              immediateRender: 1,
              repeat: 1,
              repeatDelay: 1,
              data: 1,
              paused: 1,
              reversed: 1,
              autoCSS: 1,
              lazy: 1,
              onOverwrite: 1,
              callbackScope: 1,
              stringFilter: 1,
              id: 1,
              yoyoEase: 1,
              stagger: 1
            }
            , G = {
              none: 0,
              all: 1,
              auto: 2,
              concurrent: 3,
              allOnStart: 4,
              preexisting: 5,
              true: 1,
              false: 0
            }
            , Z = C._rootFramesTimeline = new D
            , H = C._rootTimeline = new D
            , $ = 30
            , Q = Y.lazyRender = function() {
              var t, e, i = E.length;
              for (z = {},
                t = 0; t < i; t++)
                (e = E[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0),
                  e._lazy = !1);
              E.length = 0
            }
          ;
          H._startTime = o.time,
            Z._startTime = o.frame,
            H._active = Z._active = !0,
            setTimeout(Q, 1),
            C._updateRoot = M.render = function() {
              var t, e, i;
              if (E.length && Q(),
                H.render((o.time - H._startTime) * H._timeScale, !1, !1),
                Z.render((o.frame - Z._startTime) * Z._timeScale, !1, !1),
              E.length && Q(),
              o.frame >= $) {
                for (i in $ = o.frame + (parseInt(M.autoSleep, 10) || 120),
                  V) {
                  for (t = (e = V[i].tweens).length; --t > -1; )
                    e[t]._gc && e.splice(t, 1);
                  0 === e.length && delete V[i]
                }
                if ((!(i = H._first) || i._paused) && M.autoSleep && !Z._first && 1 === o._listeners.tick.length) {
                  for (; i && i._paused; )
                    i = i._next;
                  i || o.sleep()
                }
              }
            }
            ,
            o.addEventListener("tick", C._updateRoot);
          var K = function(t, e, i) {
            var r, s, n = t._gsTweenID;
            if (V[n || (t._gsTweenID = n = "t" + q++)] || (V[n] = {
              target: t,
              tweens: []
            }),
            e && ((r = V[n].tweens)[s = r.length] = e,
              i))
              for (; --s > -1; )
                r[s] === e && r.splice(s, 1);
            return V[n].tweens
          }
            , J = function(t, e, i, r) {
            var s, n, a = t.vars.onOverwrite;
            return a && (s = a(t, e, i, r)),
            (a = M.onOverwrite) && (n = a(t, e, i, r)),
            !1 !== s && !1 !== n
          }
            , tt = function(t, e, i, r, s) {
            var n, a, o, l;
            if (1 === r || r >= 4) {
              for (l = s.length,
                n = 0; n < l; n++)
                if ((o = s[n]) !== e)
                  o._gc || o._kill(null, t, e) && (a = !0);
                else if (5 === r)
                  break;
              return a
            }
            var h, _ = e._startTime + 1e-8, u = [], c = 0, f = 0 === e._duration;
            for (n = s.length; --n > -1; )
              (o = s[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || et(e, 0, f),
              0 === et(o, h, f) && (u[c++] = o)) : o._startTime <= _ && o._startTime + o.totalDuration() / o._timeScale > _ && ((f || !o._initted) && _ - o._startTime <= 2e-8 || (u[c++] = o)));
            for (n = c; --n > -1; )
              if (l = (o = u[n])._firstPT,
              2 === r && o._kill(i, t, e) && (a = !0),
              2 !== r || !o._firstPT && o._initted && l) {
                if (2 !== r && !J(o, e))
                  continue;
                o._enabled(!1, !1) && (a = !0)
              }
            return a
          }
            , et = function(t, e, i) {
            for (var r = t._timeline, s = r._timeScale, n = t._startTime; r._timeline; ) {
              if (n += r._startTime,
                s *= r._timeScale,
                r._paused)
                return -100;
              r = r._timeline
            }
            return (n /= s) > e ? n - e : i && n === e || !t._initted && n - e < 2e-8 ? 1e-8 : (n += t.totalDuration() / t._timeScale / s) > e + 1e-8 ? 0 : n - e - 1e-8
          };
          a._init = function() {
            var t, e, i, r, s, n, a = this.vars, o = this._overwrittenProps, l = this._duration, h = !!a.immediateRender, _ = a.ease, u = this._startAt;
            if (a.startAt) {
              for (r in u && (u.render(-1, !0),
                u.kill()),
                s = {},
                a.startAt)
                s[r] = a.startAt[r];
              if (s.data = "isStart",
                s.overwrite = !1,
                s.immediateRender = !0,
                s.lazy = h && !1 !== a.lazy,
                s.startAt = s.delay = null,
                s.onUpdate = a.onUpdate,
                s.onUpdateParams = a.onUpdateParams,
                s.onUpdateScope = a.onUpdateScope || a.callbackScope || this,
                this._startAt = M.to(this.target || {}, 0, s),
                h)
                if (this._time > 0)
                  this._startAt = null;
                else if (0 !== l)
                  return
            } else if (a.runBackwards && 0 !== l)
              if (u)
                u.render(-1, !0),
                  u.kill(),
                  this._startAt = null;
              else {
                for (r in 0 !== this._time && (h = !1),
                  i = {},
                  a)
                  W[r] && "autoCSS" !== r || (i[r] = a[r]);
                if (i.overwrite = 0,
                  i.data = "isFromStart",
                  i.lazy = h && !1 !== a.lazy,
                  i.immediateRender = h,
                  this._startAt = M.to(this.target, 0, i),
                  h) {
                  if (0 === this._time)
                    return
                } else
                  this._startAt._init(),
                    this._startAt._enabled(!1),
                  this.vars.immediateRender && (this._startAt = null)
              }
            if (this._ease = _ = _ ? _ instanceof x ? _ : "function" == typeof _ ? new x(_,a.easeParams) : w[_] || M.defaultEase : M.defaultEase,
            a.easeParams instanceof Array && _.config && (this._ease = _.config.apply(_, a.easeParams)),
              this._easeType = this._ease._type,
              this._easePower = this._ease._power,
              this._firstPT = null,
              this._targets)
              for (n = this._targets.length,
                t = 0; t < n; t++)
                this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null, t) && (e = !0);
            else
              e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
            if (e && M._onPluginEvent("_onInitAllProps", this),
            o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
              a.runBackwards)
              for (i = this._firstPT; i; )
                i.s += i.c,
                  i.c = -i.c,
                  i = i._next;
            this._onUpdate = a.onUpdate,
              this._initted = !0
          }
            ,
            a._initProps = function(e, i, r, s, n) {
              var a, o, l, h, _, u;
              if (null == e)
                return !1;
              for (a in z[e._gsTweenID] && Q(),
              this.vars.css || e.style && e !== t && e.nodeType && U.css && !1 !== this.vars.autoCSS && function(t, e) {
                var i, r = {};
                for (i in t)
                  W[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!U[i] || U[i] && U[i]._autoCSS) || (r[i] = t[i],
                    delete t[i]);
                t.css = r
              }(this.vars, e),
                this.vars)
                if (u = this.vars[a],
                  W[a])
                  u && (u instanceof Array || u.push && m(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[a] = u = this._swapSelfInParams(u, this));
                else if (U[a] && (h = new U[a])._onInitTween(e, this.vars[a], this, n)) {
                  for (this._firstPT = _ = {
                    _next: this._firstPT,
                    t: h,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 1,
                    n: a,
                    pg: 1,
                    pr: h._priority,
                    m: 0
                  },
                    o = h._overwriteProps.length; --o > -1; )
                    i[h._overwriteProps[o]] = this._firstPT;
                  (h._priority || h._onInitAllProps) && (l = !0),
                  (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0),
                  _._next && (_._next._prev = _)
                } else
                  i[a] = j.call(this, e, a, "get", u, a, 0, null, this.vars.stringFilter, n);
              return s && this._kill(s, e) ? this._initProps(e, i, r, s, n) : this._overwrite > 1 && this._firstPT && r.length > 1 && tt(e, this, i, this._overwrite, r) ? (this._kill(i, e),
                this._initProps(e, i, r, s, n)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (z[e._gsTweenID] = !0),
                l)
            }
            ,
            a.render = function(t, e, i) {
              var r, s, n, a, o = this._time, l = this._duration, h = this._rawPrevTime;
              if (t >= l - 1e-8 && t >= 0)
                this._totalTime = this._time = l,
                  this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
                this._reversed || (r = !0,
                  s = "onComplete",
                  i = i || this._timeline.autoRemoveChildren),
                0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0),
                (h < 0 || t <= 0 && t >= -1e-8 || 1e-8 === h && "isPause" !== this.data) && h !== t && (i = !0,
                h > 1e-8 && (s = "onReverseComplete")),
                  this._rawPrevTime = a = !e || t || h === t ? t : 1e-8);
              else if (t < 1e-8)
                this._totalTime = this._time = 0,
                  this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                (0 !== o || 0 === l && h > 0) && (s = "onReverseComplete",
                  r = this._reversed),
                  t > -1e-8 ? t = 0 : t < 0 && (this._active = !1,
                  0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (1e-8 !== h || "isPause" !== this.data) && (i = !0),
                    this._rawPrevTime = a = !e || t || h === t ? t : 1e-8)),
                (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
              else if (this._totalTime = this._time = t,
                this._easeType) {
                var _ = t / l
                  , u = this._easeType
                  , c = this._easePower;
                (1 === u || 3 === u && _ >= .5) && (_ = 1 - _),
                3 === u && (_ *= 2),
                  1 === c ? _ *= _ : 2 === c ? _ *= _ * _ : 3 === c ? _ *= _ * _ * _ : 4 === c && (_ *= _ * _ * _ * _),
                  this.ratio = 1 === u ? 1 - _ : 2 === u ? _ : t / l < .5 ? _ / 2 : 1 - _ / 2
              } else
                this.ratio = this._ease.getRatio(t / l);
              if (this._time !== o || i) {
                if (!this._initted) {
                  if (this._init(),
                  !this._initted || this._gc)
                    return;
                  if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))
                    return this._time = this._totalTime = o,
                      this._rawPrevTime = h,
                      E.push(this),
                      void (this._lazy = [t, e]);
                  this._time && !r ? this.ratio = this._ease.getRatio(this._time / l) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (!1 !== this._lazy && (this._lazy = !1),
                this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0),
                0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : s || (s = "_dummyGS")),
                this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))),
                  n = this._firstPT; n; )
                  n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s,
                    n = n._next;
                this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i),
                e || (this._time !== o || r || i) && this._callback("onUpdate")),
                s && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i),
                r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                  this._active = !1),
                !e && this.vars[s] && this._callback(s),
                0 === l && 1e-8 === this._rawPrevTime && 1e-8 !== a && (this._rawPrevTime = 0)))
              }
            }
            ,
            a._kill = function(t, e, i) {
              if ("all" === t && (t = null),
              null == t && (null == e || e === this.target))
                return this._lazy = !1,
                  this._enabled(!1, !1);
              e = "string" != typeof e ? e || this._targets || this.target : M.selector(e) || e;
              var r, s, n, a, o, l, h, _, u, c = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline, f = this._firstPT;
              if ((m(e) || F(e)) && "number" != typeof e[0])
                for (r = e.length; --r > -1; )
                  this._kill(t, e[r], i) && (l = !0);
              else {
                if (this._targets) {
                  for (r = this._targets.length; --r > -1; )
                    if (e === this._targets[r]) {
                      o = this._propLookup[r] || {},
                        this._overwrittenProps = this._overwrittenProps || [],
                        s = this._overwrittenProps[r] = t ? this._overwrittenProps[r] || {} : "all";
                      break
                    }
                } else {
                  if (e !== this.target)
                    return !1;
                  o = this._propLookup,
                    s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (o) {
                  if (h = t || o,
                    _ = t !== s && "all" !== s && t !== o && ("object" != typeof t || !t._tempKill),
                  i && (M.onOverwrite || this.vars.onOverwrite)) {
                    for (n in h)
                      o[n] && (u || (u = []),
                        u.push(n));
                    if ((u || !t) && !J(this, i, e, u))
                      return !1
                  }
                  for (n in h)
                    (a = o[n]) && (c && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s,
                      l = !0),
                    a.pg && a.t._kill(h) && (l = !0),
                    a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next),
                    a._next && (a._next._prev = a._prev),
                      a._next = a._prev = null),
                      delete o[n]),
                    _ && (s[n] = 1);
                  !this._firstPT && this._initted && f && this._enabled(!1, !1)
                }
              }
              return l
            }
            ,
            a.invalidate = function() {
              this._notifyPluginsOfEnabled && M._onPluginEvent("_onDisable", this);
              var t = this._time;
              return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
                this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
                this._propLookup = this._targets ? {} : [],
                C.prototype.invalidate.call(this),
              this.vars.immediateRender && (this._time = -1e-8,
                this.render(t, !1, !1 !== this.vars.lazy)),
                this
            }
            ,
            a._enabled = function(t, e) {
              if (l || o.wake(),
              t && this._gc) {
                var i, r = this._targets;
                if (r)
                  for (i = r.length; --i > -1; )
                    this._siblings[i] = K(r[i], this, !0);
                else
                  this._siblings = K(this.target, this, !0)
              }
              return C.prototype._enabled.call(this, t, e),
              !(!this._notifyPluginsOfEnabled || !this._firstPT) && M._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }
            ,
            M.to = function(t, e, i) {
              return new M(t,e,i)
            }
            ,
            M.from = function(t, e, i) {
              return i.runBackwards = !0,
                i.immediateRender = 0 != i.immediateRender,
                new M(t,e,i)
            }
            ,
            M.fromTo = function(t, e, i, r) {
              return r.startAt = i,
                r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender,
                new M(t,e,r)
            }
            ,
            M.delayedCall = function(t, e, i, r, s) {
              return new M(e,0,{
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: r,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: s,
                overwrite: 0
              })
            }
            ,
            M.set = function(t, e) {
              return new M(t,0,e)
            }
            ,
            M.getTweensOf = function(t, e) {
              if (null == t)
                return [];
              var i, r, s, n;
              if (t = "string" != typeof t ? t : M.selector(t) || t,
              (m(t) || F(t)) && "number" != typeof t[0]) {
                for (i = t.length,
                  r = []; --i > -1; )
                  r = r.concat(M.getTweensOf(t[i], e));
                for (i = r.length; --i > -1; )
                  for (n = r[i],
                    s = i; --s > -1; )
                    n === r[s] && r.splice(i, 1)
              } else if (t._gsTweenID)
                for (i = (r = K(t).concat()).length; --i > -1; )
                  (r[i]._gc || e && !r[i].isActive()) && r.splice(i, 1);
              return r || []
            }
            ,
            M.killTweensOf = M.killDelayedCallsTo = function(t, e, i) {
              "object" == typeof e && (i = e,
                e = !1);
              for (var r = M.getTweensOf(t, e), s = r.length; --s > -1; )
                r[s]._kill(i, t)
            }
          ;
          var it = y("plugins.TweenPlugin", (function(t, e) {
              this._overwriteProps = (t || "").split(","),
                this._propName = this._overwriteProps[0],
                this._priority = e || 0,
                this._super = it.prototype
            }
          ), !0);
          if (a = it.prototype,
            it.version = "1.19.0",
            it.API = 2,
            a._firstPT = null,
            a._addTween = j,
            a.setRatio = N,
            a._kill = function(t) {
              var e, i = this._overwriteProps, r = this._firstPT;
              if (null != t[this._propName])
                this._overwriteProps = [];
              else
                for (e = i.length; --e > -1; )
                  null != t[i[e]] && i.splice(e, 1);
              for (; r; )
                null != t[r.n] && (r._next && (r._next._prev = r._prev),
                  r._prev ? (r._prev._next = r._next,
                    r._prev = null) : this._firstPT === r && (this._firstPT = r._next)),
                  r = r._next;
              return !1
            }
            ,
            a._mod = a._roundProps = function(t) {
              for (var e, i = this._firstPT; i; )
                (e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e),
                  i = i._next
            }
            ,
            M._onPluginEvent = function(t, e) {
              var i, r, s, n, a, o = e._firstPT;
              if ("_onInitAllProps" === t) {
                for (; o; ) {
                  for (a = o._next,
                    r = s; r && r.pr > o.pr; )
                    r = r._next;
                  (o._prev = r ? r._prev : n) ? o._prev._next = o : s = o,
                    (o._next = r) ? r._prev = o : n = o,
                    o = a
                }
                o = e._firstPT = s
              }
              for (; o; )
                o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0),
                  o = o._next;
              return i
            }
            ,
            it.activate = function(t) {
              for (var e = t.length; --e > -1; )
                t[e].API === it.API && (U[(new t[e])._propName] = t[e]);
              return !0
            }
            ,
            v.plugin = function(t) {
              if (!(t && t.propName && t.init && t.API))
                throw "illegal plugin definition.";
              var e, i = t.propName, r = t.priority || 0, s = t.overwriteProps, n = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_mod",
                mod: "_mod",
                initAll: "_onInitAllProps"
              }, a = y("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", (function() {
                  it.call(this, i, r),
                    this._overwriteProps = s || []
                }
              ), !0 === t.global), o = a.prototype = new it(i);
              for (e in o.constructor = a,
                a.API = t.API,
                n)
                "function" == typeof t[e] && (o[n[e]] = t[e]);
              return a.version = t.version,
                it.activate([a]),
                a
            }
            ,
            s = t._gsQueue) {
            for (n = 0; n < s.length; n++)
              s[n]();
            for (a in d)
              d[a].func || t.console.log("GSAP encountered missing dependency: " + a)
          }
          return l = !1,
            M
        }(s)
          , a = s.GreenSockGlobals
          , o = a.com.greensock
          , l = o.core.SimpleTimeline
          , h = o.core.Animation
          , _ = a.Ease
          , u = a.Linear
          , c = u
          , f = a.Power1
          , p = a.Power2
          , m = a.Power3
          , d = a.Power4
          , g = a.TweenPlugin
          , v = o.events.EventDispatcher
      }
        .call(this, i(444)(t), i(63))
  },
  468: function(t, e, i) {
    var r, s;
    void 0 === (s = "function" == typeof (r = function() {
        "use strict";
        var t = function() {};
        t.version = "2.0.5",
          window.addEventListener("mousewheel", (function() {}
          ));
        var e = "data-scrollmagic-pin-spacer";
        t.Controller = function(r) {
          var n, a, o = "REVERSE", l = "PAUSED", h = i.defaults, _ = this, u = s.extend({}, h, r), c = [], f = !1, p = 0, m = l, d = !0, g = 0, v = !0, y = function() {
            u.refreshInterval > 0 && (a = window.setTimeout(k, u.refreshInterval))
          }, T = function() {
            return u.vertical ? s.get.scrollTop(u.container) : s.get.scrollLeft(u.container)
          }, x = function() {
            return u.vertical ? s.get.height(u.container) : s.get.width(u.container)
          }, w = this._setScrollPos = function(t) {
            u.vertical ? d ? window.scrollTo(s.get.scrollLeft(), t) : u.container.scrollTop = t : d ? window.scrollTo(t, s.get.scrollTop()) : u.container.scrollLeft = t
          }
            , b = function() {
            if (v && f) {
              var t = s.type.Array(f) ? f : c.slice(0);
              f = !1;
              var e = p
                , i = (p = _.scrollPos()) - e;
              0 !== i && (m = i > 0 ? "FORWARD" : o),
              m === o && t.reverse(),
                t.forEach((function(t) {
                    t.update(!0)
                  }
                ))
            }
          }, P = function() {
            n = s.rAF(b)
          }, S = function(t) {
            "resize" == t.type && (g = x(),
              m = l),
            !0 !== f && (f = !0,
              P())
          }, k = function() {
            if (!d && g != x()) {
              var t;
              try {
                t = new Event("resize",{
                  bubbles: !1,
                  cancelable: !1
                })
              } catch (e) {
                (t = document.createEvent("Event")).initEvent("resize", !1, !1)
              }
              u.container.dispatchEvent(t)
            }
            c.forEach((function(t) {
                t.refresh()
              }
            )),
              y()
          };
          this._options = u;
          var O = function(t) {
            if (t.length <= 1)
              return t;
            var e = t.slice(0);
            return e.sort((function(t, e) {
                return t.scrollOffset() > e.scrollOffset() ? 1 : -1
              }
            )),
              e
          };
          return this.addScene = function(e) {
            if (s.type.Array(e))
              e.forEach((function(t) {
                  _.addScene(t)
                }
              ));
            else if (e instanceof t.Scene)
              if (e.controller() !== _)
                e.addTo(_);
              else if (c.indexOf(e) < 0)
                for (var i in c.push(e),
                  c = O(c),
                  e.on("shift.controller_sort", (function() {
                      c = O(c)
                    }
                  )),
                  u.globalSceneOptions)
                  e[i] && e[i].call(e, u.globalSceneOptions[i]);
            return _
          }
            ,
            this.removeScene = function(t) {
              if (s.type.Array(t))
                t.forEach((function(t) {
                    _.removeScene(t)
                  }
                ));
              else {
                var e = c.indexOf(t);
                e > -1 && (t.off("shift.controller_sort"),
                  c.splice(e, 1),
                  t.remove())
              }
              return _
            }
            ,
            this.updateScene = function(e, i) {
              return s.type.Array(e) ? e.forEach((function(t) {
                  _.updateScene(t, i)
                }
              )) : i ? e.update(!0) : !0 !== f && e instanceof t.Scene && (-1 == (f = f || []).indexOf(e) && f.push(e),
                f = O(f),
                P()),
                _
            }
            ,
            this.update = function(t) {
              return S({
                type: "resize"
              }),
              t && b(),
                _
            }
            ,
            this.scrollTo = function(i, r) {
              if (s.type.Number(i))
                w.call(u.container, i, r);
              else if (i instanceof t.Scene)
                i.controller() === _ && _.scrollTo(i.scrollOffset(), r);
              else if (s.type.Function(i))
                w = i;
              else {
                var n = s.get.elements(i)[0];
                if (n) {
                  for (; n.parentNode.hasAttribute(e); )
                    n = n.parentNode;
                  var a = u.vertical ? "top" : "left"
                    , o = s.get.offset(u.container)
                    , l = s.get.offset(n);
                  d || (o[a] -= _.scrollPos()),
                    _.scrollTo(l[a] - o[a], r)
                }
              }
              return _
            }
            ,
            this.scrollPos = function(t) {
              return arguments.length ? (s.type.Function(t) && (T = t),
                _) : T.call(_)
            }
            ,
            this.info = function(t) {
              var e = {
                size: g,
                vertical: u.vertical,
                scrollPos: p,
                scrollDirection: m,
                container: u.container,
                isDocument: d
              };
              return arguments.length ? void 0 !== e[t] ? e[t] : void 0 : e
            }
            ,
            this.loglevel = function() {
              return _
            }
            ,
            this.enabled = function(t) {
              return arguments.length ? (v != t && (v = !!t,
                _.updateScene(c, !0)),
                _) : v
            }
            ,
            this.destroy = function(t) {
              window.clearTimeout(a);
              for (var e = c.length; e--; )
                c[e].destroy(t);
              return u.container.removeEventListener("resize", S),
                u.container.removeEventListener("scroll", S),
                s.cAF(n),
                null
            }
            ,
            function() {
              for (var t in u)
                h.hasOwnProperty(t) || delete u[t];
              if (u.container = s.get.elements(u.container)[0],
                !u.container)
                throw "ScrollMagic.Controller init failed.";
              (d = u.container === window || u.container === document.body || !document.body.contains(u.container)) && (u.container = window),
                g = x(),
                u.container.addEventListener("resize", S),
                u.container.addEventListener("scroll", S),
                u.refreshInterval = parseInt(u.refreshInterval) || h.refreshInterval,
                y()
            }(),
            _
        }
        ;
        var i = {
          defaults: {
            container: window,
            vertical: !0,
            globalSceneOptions: {},
            loglevel: 2,
            refreshInterval: 100
          }
        };
        t.Controller.addOption = function(t, e) {
          i.defaults[t] = e
        }
          ,
          t.Controller.extend = function(e) {
            var i = this;
            t.Controller = function() {
              return i.apply(this, arguments),
                this.$super = s.extend({}, this),
              e.apply(this, arguments) || this
            }
              ,
              s.extend(t.Controller, i),
              t.Controller.prototype = i.prototype,
              t.Controller.prototype.constructor = t.Controller
          }
          ,
          t.Scene = function(i) {
            var n, a, o = "BEFORE", l = "DURING", h = "AFTER", _ = r.defaults, u = this, c = s.extend({}, _, i), f = o, p = 0, m = {
              start: 0,
              end: 0
            }, d = 0, g = !0, v = {};
            this.on = function(t, e) {
              return s.type.Function(e) && (t = t.trim().split(" ")).forEach((function(t) {
                  var i = t.split(".")
                    , r = i[0]
                    , s = i[1];
                  "*" != r && (v[r] || (v[r] = []),
                    v[r].push({
                      namespace: s || "",
                      callback: e
                    }))
                }
              )),
                u
            }
              ,
              this.off = function(t, e) {
                return t ? ((t = t.trim().split(" ")).forEach((function(t) {
                    var i = t.split(".")
                      , r = i[0]
                      , s = i[1] || "";
                    ("*" === r ? Object.keys(v) : [r]).forEach((function(t) {
                        for (var i = v[t] || [], r = i.length; r--; ) {
                          var n = i[r];
                          !n || s !== n.namespace && "*" !== s || e && e != n.callback || i.splice(r, 1)
                        }
                        i.length || delete v[t]
                      }
                    ))
                  }
                )),
                  u) : u
              }
              ,
              this.trigger = function(e, i) {
                if (e) {
                  var r = e.trim().split(".")
                    , s = r[0]
                    , n = r[1]
                    , a = v[s];
                  a && a.forEach((function(e) {
                      n && n !== e.namespace || e.callback.call(u, new t.Event(s,e.namespace,u,i))
                    }
                  ))
                }
                return u
              }
              ,
              u.on("change.internal", (function(t) {
                  "loglevel" !== t.what && "tweenChanges" !== t.what && ("triggerElement" === t.what ? b() : "reverse" === t.what && u.update())
                }
              )).on("shift.internal", (function() {
                  x(),
                    u.update()
                }
              )),
              this.addTo = function(e) {
                return e instanceof t.Controller && a != e && (a && a.removeScene(u),
                  a = e,
                  k(),
                  w(!0),
                  b(!0),
                  x(),
                  a.info("container").addEventListener("resize", P),
                  e.addScene(u),
                  u.trigger("add", {
                    controller: a
                  }),
                  u.update()),
                  u
              }
              ,
              this.enabled = function(t) {
                return arguments.length ? (g != t && (g = !!t,
                  u.update(!0)),
                  u) : g
              }
              ,
              this.remove = function() {
                if (a) {
                  a.info("container").removeEventListener("resize", P);
                  var t = a;
                  a = void 0,
                    t.removeScene(u),
                    u.trigger("remove")
                }
                return u
              }
              ,
              this.destroy = function(t) {
                return u.trigger("destroy", {
                  reset: t
                }),
                  u.remove(),
                  u.off("*.*"),
                  null
              }
              ,
              this.update = function(t) {
                if (a)
                  if (t)
                    if (a.enabled() && g) {
                      var e, i = a.info("scrollPos");
                      e = c.duration > 0 ? (i - m.start) / (m.end - m.start) : i >= m.start ? 1 : 0,
                        u.trigger("update", {
                          startPos: m.start,
                          endPos: m.end,
                          scrollPos: i
                        }),
                        u.progress(e)
                    } else
                      y && f === l && C(!0);
                  else
                    a.updateScene(u, !1);
                return u
              }
              ,
              this.refresh = function() {
                return w(),
                  b(),
                  u
              }
              ,
              this.progress = function(t) {
                if (arguments.length) {
                  var e = !1
                    , i = f
                    , r = a ? a.info("scrollDirection") : "PAUSED"
                    , s = c.reverse || t >= p;
                  if (0 === c.duration ? (e = p != t,
                    f = 0 == (p = 1 > t && s ? 0 : 1) ? o : l) : 0 > t && f !== o && s ? (p = 0,
                    f = o,
                    e = !0) : t >= 0 && 1 > t && s ? (p = t,
                    f = l,
                    e = !0) : t >= 1 && f !== h ? (p = 1,
                    f = h,
                    e = !0) : f !== l || s || C(),
                    e) {
                    var n = {
                      progress: p,
                      state: f,
                      scrollDirection: r
                    }
                      , _ = f != i
                      , m = function(t) {
                      u.trigger(t, n)
                    };
                    _ && i !== l && (m("enter"),
                      m(i === o ? "start" : "end")),
                      m("progress"),
                    _ && f !== l && (m(f === o ? "start" : "end"),
                      m("leave"))
                  }
                  return u
                }
                return p
              }
            ;
            var y, T, x = function() {
              m = {
                start: d + c.offset
              },
              a && c.triggerElement && (m.start -= a.info("size") * c.triggerHook),
                m.end = m.start + c.duration
            }, w = function(t) {
              if (n) {
                var e = "duration";
                O(e, n.call(u)) && !t && (u.trigger("change", {
                  what: e,
                  newval: c[e]
                }),
                  u.trigger("shift", {
                    reason: e
                  }))
              }
            }, b = function(t) {
              var i = 0
                , r = c.triggerElement;
              if (a && r) {
                for (var n = a.info(), o = s.get.offset(n.container), l = n.vertical ? "top" : "left"; r.parentNode.hasAttribute(e); )
                  r = r.parentNode;
                var h = s.get.offset(r);
                n.isDocument || (o[l] -= a.scrollPos()),
                  i = h[l] - o[l]
              }
              var _ = i != d;
              d = i,
              _ && !t && u.trigger("shift", {
                reason: "triggerElementPosition"
              })
            }, P = function() {
              c.triggerHook > 0 && u.trigger("shift", {
                reason: "containerResize"
              })
            }, S = s.extend(r.validate, {
              duration: function(t) {
                if (s.type.String(t) && t.match(/^(\.|\d)*\d+%$/)) {
                  var e = parseFloat(t) / 100;
                  t = function() {
                    return a ? a.info("size") * e : 0
                  }
                }
                if (s.type.Function(t)) {
                  n = t;
                  try {
                    t = parseFloat(n())
                  } catch (e) {
                    t = -1
                  }
                }
                if (t = parseFloat(t),
                !s.type.Number(t) || 0 > t)
                  throw n ? (n = void 0,
                    0) : 0;
                return t
              }
            }), k = function(t) {
              (t = arguments.length ? [t] : Object.keys(S)).forEach((function(t) {
                  var e;
                  if (S[t])
                    try {
                      e = S[t](c[t])
                    } catch (i) {
                      e = _[t]
                    } finally {
                      c[t] = e
                    }
                }
              ))
            }, O = function(t, e) {
              var i = !1
                , r = c[t];
              return c[t] != e && (c[t] = e,
                k(t),
                i = r != c[t]),
                i
            }, R = function(t) {
              u[t] || (u[t] = function(e) {
                  return arguments.length ? ("duration" === t && (n = void 0),
                  O(t, e) && (u.trigger("change", {
                    what: t,
                    newval: c[t]
                  }),
                  r.shifts.indexOf(t) > -1 && u.trigger("shift", {
                    reason: t
                  })),
                    u) : c[t]
                }
              )
            };
            this.controller = function() {
              return a
            }
              ,
              this.state = function() {
                return f
              }
              ,
              this.scrollOffset = function() {
                return m.start
              }
              ,
              this.triggerPosition = function() {
                var t = c.offset;
                return a && (t += c.triggerElement ? d : a.info("size") * u.triggerHook()),
                  t
              }
              ,
              u.on("shift.internal", (function(t) {
                  var e = "duration" === t.reason;
                  (f === h && e || f === l && 0 === c.duration) && C(),
                  e && A()
                }
              )).on("progress.internal", (function() {
                  C()
                }
              )).on("add.internal", (function() {
                  A()
                }
              )).on("destroy.internal", (function(t) {
                  u.removePin(t.reset)
                }
              ));
            var C = function(t) {
              if (y && a) {
                var e = a.info()
                  , i = T.spacer.firstChild;
                if (t || f !== l) {
                  var r = {
                    position: T.inFlow ? "relative" : "absolute",
                    top: 0,
                    left: 0
                  }
                    , n = s.css(i, "position") != r.position;
                  T.pushFollowers ? c.duration > 0 && (f === h && 0 === parseFloat(s.css(T.spacer, "padding-top")) ? n = !0 : f === o && 0 === parseFloat(s.css(T.spacer, "padding-bottom")) && (n = !0)) : r[e.vertical ? "top" : "left"] = c.duration * p,
                    s.css(i, r),
                  n && A()
                } else {
                  "fixed" != s.css(i, "position") && (s.css(i, {
                    position: "fixed"
                  }),
                    A());
                  var _ = s.get.offset(T.spacer, !0)
                    , u = c.reverse || 0 === c.duration ? e.scrollPos - m.start : Math.round(p * c.duration * 10) / 10;
                  _[e.vertical ? "top" : "left"] += u,
                    s.css(T.spacer.firstChild, {
                      top: _.top,
                      left: _.left
                    })
                }
              }
            }
              , A = function() {
              if (y && a && T.inFlow) {
                var t = f === l
                  , e = a.info("vertical")
                  , i = T.spacer.firstChild
                  , r = s.isMarginCollapseType(s.css(T.spacer, "display"))
                  , n = {};
                T.relSize.width || T.relSize.autoFullWidth ? t ? s.css(y, {
                  width: s.get.width(T.spacer)
                }) : s.css(y, {
                  width: "100%"
                }) : (n["min-width"] = s.get.width(e ? y : i, !0, !0),
                  n.width = t ? n["min-width"] : "auto"),
                  T.relSize.height ? t ? s.css(y, {
                    height: s.get.height(T.spacer) - (T.pushFollowers ? c.duration : 0)
                  }) : s.css(y, {
                    height: "100%"
                  }) : (n["min-height"] = s.get.height(e ? i : y, !0, !r),
                    n.height = t ? n["min-height"] : "auto"),
                T.pushFollowers && (n["padding" + (e ? "Top" : "Left")] = c.duration * p,
                  n["padding" + (e ? "Bottom" : "Right")] = c.duration * (1 - p)),
                  s.css(T.spacer, n)
              }
            }
              , D = function() {
              a && y && f === l && !a.info("isDocument") && C()
            }
              , M = function() {
              a && y && f === l && ((T.relSize.width || T.relSize.autoFullWidth) && s.get.width(window) != s.get.width(T.spacer.parentNode) || T.relSize.height && s.get.height(window) != s.get.height(T.spacer.parentNode)) && A()
            }
              , F = function(t) {
              a && y && f === l && !a.info("isDocument") && (t.preventDefault(),
                a._setScrollPos(a.info("scrollPos") - ((t.wheelDelta || t[a.info("vertical") ? "wheelDeltaY" : "wheelDeltaX"]) / 3 || 30 * -t.detail)))
            };
            this.setPin = function(t, i) {
              if (i = s.extend({}, {
                pushFollowers: !0,
                spacerClass: "scrollmagic-pin-spacer"
              }, i),
                !(t = s.get.elements(t)[0]))
                return u;
              if ("fixed" === s.css(t, "position"))
                return u;
              if (y) {
                if (y === t)
                  return u;
                u.removePin()
              }
              var r = (y = t).parentNode.style.display
                , n = ["top", "left", "bottom", "right", "margin", "marginLeft", "marginRight", "marginTop", "marginBottom"];
              y.parentNode.style.display = "none";
              var a = "absolute" != s.css(y, "position")
                , o = s.css(y, n.concat(["display"]))
                , l = s.css(y, ["width", "height"]);
              y.parentNode.style.display = r,
              !a && i.pushFollowers && (i.pushFollowers = !1);
              var h = y.parentNode.insertBefore(document.createElement("div"), y)
                , _ = s.extend(o, {
                position: a ? "relative" : "absolute",
                boxSizing: "content-box",
                mozBoxSizing: "content-box",
                webkitBoxSizing: "content-box"
              });
              if (a || s.extend(_, s.css(y, ["width", "height"])),
                s.css(h, _),
                h.setAttribute(e, ""),
                s.addClass(h, i.spacerClass),
                T = {
                  spacer: h,
                  relSize: {
                    width: "%" === l.width.slice(-1),
                    height: "%" === l.height.slice(-1),
                    autoFullWidth: "auto" === l.width && a && s.isMarginCollapseType(o.display)
                  },
                  pushFollowers: i.pushFollowers,
                  inFlow: a
                },
                !y.___origStyle) {
                y.___origStyle = {};
                var c = y.style;
                n.concat(["width", "height", "position", "boxSizing", "mozBoxSizing", "webkitBoxSizing"]).forEach((function(t) {
                    y.___origStyle[t] = c[t] || ""
                  }
                ))
              }
              return T.relSize.width && s.css(h, {
                width: l.width
              }),
              T.relSize.height && s.css(h, {
                height: l.height
              }),
                h.appendChild(y),
                s.css(y, {
                  position: a ? "relative" : "absolute",
                  margin: "auto",
                  top: "auto",
                  left: "auto",
                  bottom: "auto",
                  right: "auto"
                }),
              (T.relSize.width || T.relSize.autoFullWidth) && s.css(y, {
                boxSizing: "border-box",
                mozBoxSizing: "border-box",
                webkitBoxSizing: "border-box"
              }),
                window.addEventListener("scroll", D),
                window.addEventListener("resize", D),
                window.addEventListener("resize", M),
                y.addEventListener("mousewheel", F),
                y.addEventListener("DOMMouseScroll", F),
                C(),
                u
            }
              ,
              this.removePin = function(t) {
                if (y) {
                  if (f === l && C(!0),
                  t || !a) {
                    var i = T.spacer.firstChild;
                    if (i.hasAttribute(e)) {
                      var r = T.spacer.style;
                      margins = {},
                        ["margin", "marginLeft", "marginRight", "marginTop", "marginBottom"].forEach((function(t) {
                            margins[t] = r[t] || ""
                          }
                        )),
                        s.css(i, margins)
                    }
                    T.spacer.parentNode.insertBefore(i, T.spacer),
                      T.spacer.parentNode.removeChild(T.spacer),
                    y.parentNode.hasAttribute(e) || (s.css(y, y.___origStyle),
                      delete y.___origStyle)
                  }
                  window.removeEventListener("scroll", D),
                    window.removeEventListener("resize", D),
                    window.removeEventListener("resize", M),
                    y.removeEventListener("mousewheel", F),
                    y.removeEventListener("DOMMouseScroll", F),
                    y = void 0
                }
                return u
              }
            ;
            var E, z = [];
            return u.on("destroy.internal", (function(t) {
                u.removeClassToggle(t.reset)
              }
            )),
              this.setClassToggle = function(t, e) {
                var i = s.get.elements(t);
                return 0 !== i.length && s.type.String(e) ? (z.length > 0 && u.removeClassToggle(),
                  E = e,
                  z = i,
                  u.on("enter.internal_class leave.internal_class", (function(t) {
                      var e = "enter" === t.type ? s.addClass : s.removeClass;
                      z.forEach((function(t) {
                          e(t, E)
                        }
                      ))
                    }
                  )),
                  u) : u
              }
              ,
              this.removeClassToggle = function(t) {
                return t && z.forEach((function(t) {
                    s.removeClass(t, E)
                  }
                )),
                  u.off("start.internal_class end.internal_class"),
                  E = void 0,
                  z = [],
                  u
              }
              ,
              function() {
                for (var t in c)
                  _.hasOwnProperty(t) || delete c[t];
                for (var e in _)
                  R(e);
                k()
              }(),
              u
          }
        ;
        var r = {
          defaults: {
            duration: 0,
            offset: 0,
            triggerElement: void 0,
            triggerHook: .5,
            reverse: !0,
            loglevel: 2
          },
          validate: {
            offset: function(t) {
              if (t = parseFloat(t),
                !s.type.Number(t))
                throw 0;
              return t
            },
            triggerElement: function(t) {
              if (t = t || void 0) {
                var e = s.get.elements(t)[0];
                if (!e)
                  throw 0;
                t = e
              }
              return t
            },
            triggerHook: function(t) {
              var e = {
                onCenter: .5,
                onEnter: 1,
                onLeave: 0
              };
              if (s.type.Number(t))
                t = Math.max(0, Math.min(parseFloat(t), 1));
              else {
                if (!(t in e))
                  throw 0;
                t = e[t]
              }
              return t
            },
            reverse: function(t) {
              return !!t
            }
          },
          shifts: ["duration", "offset", "triggerHook"]
        };
        t.Scene.addOption = function(t, e, i, s) {
          t in r.defaults || (r.defaults[t] = e,
            r.validate[t] = i,
          s && r.shifts.push(t))
        }
          ,
          t.Scene.extend = function(e) {
            var i = this;
            t.Scene = function() {
              return i.apply(this, arguments),
                this.$super = s.extend({}, this),
              e.apply(this, arguments) || this
            }
              ,
              s.extend(t.Scene, i),
              t.Scene.prototype = i.prototype,
              t.Scene.prototype.constructor = t.Scene
          }
          ,
          t.Event = function(t, e, i, r) {
            for (var s in r = r || {})
              this[s] = r[s];
            return this.type = t,
              this.target = this.currentTarget = i,
              this.namespace = e || "",
              this.timeStamp = this.timestamp = Date.now(),
              this
          }
        ;
        var s = t._util = function(t) {
          var e, i = {}, r = function(t) {
            return parseFloat(t) || 0
          }, s = function(e) {
            return e.currentStyle ? e.currentStyle : t.getComputedStyle(e)
          }, n = function(e, i, n, a) {
            if ((i = i === document ? t : i) === t)
              a = !1;
            else if (!u.DomElement(i))
              return 0;
            e = e.charAt(0).toUpperCase() + e.substr(1).toLowerCase();
            var o = (n ? i["offset" + e] || i["outer" + e] : i["client" + e] || i["inner" + e]) || 0;
            if (n && a) {
              var l = s(i);
              o += "Height" === e ? r(l.marginTop) + r(l.marginBottom) : r(l.marginLeft) + r(l.marginRight)
            }
            return o
          }, a = function(t) {
            return t.replace(/^[^a-z]+([a-z])/g, "$1").replace(/-([a-z])/g, (function(t) {
                return t[1].toUpperCase()
              }
            ))
          };
          i.extend = function(t) {
            for (t = t || {},
              e = 1; e < arguments.length; e++)
              if (arguments[e])
                for (var i in arguments[e])
                  arguments[e].hasOwnProperty(i) && (t[i] = arguments[e][i]);
            return t
          }
            ,
            i.isMarginCollapseType = function(t) {
              return ["block", "flex", "list-item", "table", "-webkit-box"].indexOf(t) > -1
            }
          ;
          var o = 0
            , l = ["ms", "moz", "webkit", "o"]
            , h = t.requestAnimationFrame
            , _ = t.cancelAnimationFrame;
          for (e = 0; !h && e < l.length; ++e)
            h = t[l[e] + "RequestAnimationFrame"],
              _ = t[l[e] + "CancelAnimationFrame"] || t[l[e] + "CancelRequestAnimationFrame"];
          h || (h = function(e) {
              var i = (new Date).getTime()
                , r = Math.max(0, 16 - (i - o))
                , s = t.setTimeout((function() {
                  e(i + r)
                }
              ), r);
              return o = i + r,
                s
            }
          ),
          _ || (_ = function(e) {
              t.clearTimeout(e)
            }
          ),
            i.rAF = h.bind(t),
            i.cAF = _.bind(t);
          var u = i.type = function(t) {
              return Object.prototype.toString.call(t).replace(/^\[object (.+)\]$/, "$1").toLowerCase()
            }
          ;
          u.String = function(t) {
            return "string" === u(t)
          }
            ,
            u.Function = function(t) {
              return "function" === u(t)
            }
            ,
            u.Array = function(t) {
              return Array.isArray(t)
            }
            ,
            u.Number = function(t) {
              return !u.Array(t) && t - parseFloat(t) + 1 >= 0
            }
            ,
            u.DomElement = function(t) {
              return "object" == typeof HTMLElement ? t instanceof HTMLElement : t && "object" == typeof t && null !== t && 1 === t.nodeType && "string" == typeof t.nodeName
            }
          ;
          var c = i.get = {};
          return c.elements = function(e) {
            var i = [];
            if (u.String(e))
              try {
                e = document.querySelectorAll(e)
              } catch (t) {
                return i
              }
            if ("nodelist" === u(e) || u.Array(e))
              for (var r = 0, s = i.length = e.length; s > r; r++) {
                var n = e[r];
                i[r] = u.DomElement(n) ? n : c.elements(n)
              }
            else
              (u.DomElement(e) || e === document || e === t) && (i = [e]);
            return i
          }
            ,
            c.scrollTop = function(e) {
              return e && "number" == typeof e.scrollTop ? e.scrollTop : t.pageYOffset || 0
            }
            ,
            c.scrollLeft = function(e) {
              return e && "number" == typeof e.scrollLeft ? e.scrollLeft : t.pageXOffset || 0
            }
            ,
            c.width = function(t, e, i) {
              return n("width", t, e, i)
            }
            ,
            c.height = function(t, e, i) {
              return n("height", t, e, i)
            }
            ,
            c.offset = function(t, e) {
              var i = {
                top: 0,
                left: 0
              };
              if (t && t.getBoundingClientRect) {
                var r = t.getBoundingClientRect();
                i.top = r.top,
                  i.left = r.left,
                e || (i.top += c.scrollTop(),
                  i.left += c.scrollLeft())
              }
              return i
            }
            ,
            i.addClass = function(t, e) {
              e && (t.classList ? t.classList.add(e) : t.className += " " + e)
            }
            ,
            i.removeClass = function(t, e) {
              e && (t.classList ? t.classList.remove(e) : t.className = t.className.replace(RegExp("(^|\\b)" + e.split(" ").join("|") + "(\\b|$)", "gi"), " "))
            }
            ,
            i.css = function(t, e) {
              if (u.String(e))
                return s(t)[a(e)];
              if (u.Array(e)) {
                var i = {}
                  , r = s(t);
                return e.forEach((function(t) {
                    i[t] = r[a(t)]
                  }
                )),
                  i
              }
              for (var n in e) {
                var o = e[n];
                o == parseFloat(o) && (o += "px"),
                  t.style[a(n)] = o
              }
            }
            ,
            i
        }(window || {});
        return t
      }
    ) ? r.call(e, i, e, t) : r) || (t.exports = s)
  },
  469: function(t, e, i) {
    "use strict";
    i.r(e),
      i.d(e, "CSSPlugin", (function() {
          return s
        }
      )),
      i.d(e, "default", (function() {
          return s
        }
      ));
    var r = i(461);
    r._gsScope._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], (function() {
        var t, e, i, s, n = function() {
          r.TweenPlugin.call(this, "css"),
            this._overwriteProps.length = 0,
            this.setRatio = n.prototype.setRatio
        }, a = r._gsScope._gsDefine.globals, o = {}, l = n.prototype = new r.TweenPlugin("css");
        l.constructor = n,
          n.version = "2.1.3",
          n.API = 2,
          n.defaultTransformPerspective = 0,
          n.defaultSkewType = "compensated",
          n.defaultSmoothOrigin = !0,
          l = "px",
          n.suffixMap = {
            top: l,
            right: l,
            bottom: l,
            left: l,
            width: l,
            height: l,
            fontSize: l,
            padding: l,
            margin: l,
            perspective: l,
            lineHeight: ""
          };
        var h, _, u, c, f, p, m, d, g = /(?:\-|\.|\b)(\d|\.|e\-)+/g, v = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, y = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, T = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi, x = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, w = /(?:\d|\-|\+|=|#|\.)*/g, b = /opacity *= *([^)]*)/i, P = /opacity:([^;]*)/i, S = /alpha\(opacity *=.+?\)/i, k = /^(rgb|hsl)/, O = /([A-Z])/g, R = /-([a-z])/gi, C = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, A = function(t, e) {
          return e.toUpperCase()
        }, D = /(?:Left|Right|Width)/i, M = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, F = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, E = /,(?=[^\)]*(?:\(|$))/gi, z = /[\s,\(]/i, L = Math.PI / 180, I = 180 / Math.PI, N = {}, X = {
          style: {}
        }, B = r._gsScope.document || {
          createElement: function() {
            return X
          }
        }, j = function(t, e) {
          var i = B.createElementNS ? B.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : B.createElement(t);
          return i.style ? i : B.createElement(t)
        }, Y = j("div"), U = j("img"), V = n._internals = {
          _specialProps: o
        }, q = (r._gsScope.navigator || {}).userAgent || "", W = function() {
          var t = q.indexOf("Android")
            , e = j("a");
          return u = -1 !== q.indexOf("Safari") && -1 === q.indexOf("Chrome") && (-1 === t || parseFloat(q.substr(t + 8, 2)) > 3),
            f = u && parseFloat(q.substr(q.indexOf("Version/") + 8, 2)) < 6,
            c = -1 !== q.indexOf("Firefox"),
          (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(q) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(q)) && (p = parseFloat(RegExp.$1)),
          !!e && (e.style.cssText = "top:1px;opacity:.55;",
            /^0.55/.test(e.style.opacity))
        }(), G = function(t) {
          return b.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
        }, Z = function(t) {
          r._gsScope.console && console.log(t)
        }, H = "", $ = "", Q = function(t, e) {
          var i, r, s = (e = e || Y).style;
          if (void 0 !== s[t])
            return t;
          for (t = t.charAt(0).toUpperCase() + t.substr(1),
            i = ["O", "Moz", "ms", "Ms", "Webkit"],
            r = 5; --r > -1 && void 0 === s[i[r] + t]; )
            ;
          return r >= 0 ? (H = "-" + ($ = 3 === r ? "ms" : i[r]).toLowerCase() + "-",
          $ + t) : null
        }, K = "undefined" != typeof window ? window : B.defaultView || {
          getComputedStyle: function() {}
        }, J = function(t) {
          return K.getComputedStyle(t)
        }, tt = n.getStyle = function(t, e, i, r, s) {
          var n;
          return W || "opacity" !== e ? (!r && t.style[e] ? n = t.style[e] : (i = i || J(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(O, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]),
            null == s || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : s) : G(t)
        }
          , et = V.convertToPixels = function(t, e, i, s, a) {
          if ("px" === s || !s && "lineHeight" !== e)
            return i;
          if ("auto" === s || !i)
            return 0;
          var o, l, h, _ = D.test(e), u = t, c = Y.style, f = i < 0, p = 1 === i;
          if (f && (i = -i),
          p && (i *= 100),
          "lineHeight" !== e || s)
            if ("%" === s && -1 !== e.indexOf("border"))
              o = i / 100 * (_ ? t.clientWidth : t.clientHeight);
            else {
              if (c.cssText = "border:0 solid red;position:" + tt(t, "position") + ";line-height:0;",
              "%" !== s && u.appendChild && "v" !== s.charAt(0) && "rem" !== s)
                c[_ ? "borderLeftWidth" : "borderTopWidth"] = i + s;
              else {
                if (u = t.parentNode || B.body,
                -1 !== tt(u, "display").indexOf("flex") && (c.position = "absolute"),
                  l = u._gsCache,
                  h = r.default.ticker.frame,
                l && _ && l.time === h)
                  return l.width * i / 100;
                c[_ ? "width" : "height"] = i + s
              }
              u.appendChild(Y),
                o = parseFloat(Y[_ ? "offsetWidth" : "offsetHeight"]),
                u.removeChild(Y),
              _ && "%" === s && !1 !== n.cacheWidths && ((l = u._gsCache = u._gsCache || {}).time = h,
                l.width = o / i * 100),
              0 !== o || a || (o = et(t, e, i, s, !0))
            }
          else
            l = J(t).lineHeight,
              t.style.lineHeight = i,
              o = parseFloat(J(t).lineHeight),
              t.style.lineHeight = l;
          return p && (o /= 100),
            f ? -o : o
        }
          , it = V.calculateOffset = function(t, e, i) {
          if ("absolute" !== tt(t, "position", i))
            return 0;
          var r = "left" === e ? "Left" : "Top"
            , s = tt(t, "margin" + r, i);
          return t["offset" + r] - (et(t, e, parseFloat(s), s.replace(w, "")) || 0)
        }
          , rt = function(t, e) {
          var i, r, s, n = {};
          if (e = e || J(t))
            if (i = e.length)
              for (; --i > -1; )
                -1 !== (s = e[i]).indexOf("-transform") && Et !== s || (n[s.replace(R, A)] = e.getPropertyValue(s));
            else
              for (i in e)
                -1 !== i.indexOf("Transform") && Ft !== i || (n[i] = e[i]);
          else if (e = t.currentStyle || t.style)
            for (i in e)
              "string" == typeof i && void 0 === n[i] && (n[i.replace(R, A)] = e[i]);
          return W || (n.opacity = G(t)),
            r = Gt(t, e, !1),
            n.rotation = r.rotation,
            n.skewX = r.skewX,
            n.scaleX = r.scaleX,
            n.scaleY = r.scaleY,
            n.x = r.x,
            n.y = r.y,
          Lt && (n.z = r.z,
            n.rotationX = r.rotationX,
            n.rotationY = r.rotationY,
            n.scaleZ = r.scaleZ),
          n.filters && delete n.filters,
            n
        }, st = function(t, e, i, r, s) {
          var n, a, o, l = {}, h = t.style;
          for (a in i)
            "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || s && s[a]) && -1 === a.indexOf("Origin") && ("number" != typeof n && "string" != typeof n || (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(x, "") ? n : 0 : it(t, a),
            void 0 !== h[a] && (o = new yt(h,a,h[a],o))));
          if (r)
            for (a in r)
              "className" !== a && (l[a] = r[a]);
          return {
            difs: l,
            firstMPT: o
          }
        }, nt = {
          width: ["Left", "Right"],
          height: ["Top", "Bottom"]
        }, at = ["marginLeft", "marginRight", "marginTop", "marginBottom"], ot = function(t, e, i) {
          if ("svg" === (t.nodeName + "").toLowerCase())
            return (i || J(t))[e] || 0;
          if (t.getCTM && Vt(t))
            return t.getBBox()[e] || 0;
          var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight)
            , s = nt[e]
            , n = s.length;
          for (i = i || J(t); --n > -1; )
            r -= parseFloat(tt(t, "padding" + s[n], i, !0)) || 0,
              r -= parseFloat(tt(t, "border" + s[n] + "Width", i, !0)) || 0;
          return r
        }, lt = function(t, e) {
          if ("contain" === t || "auto" === t || "auto auto" === t)
            return t + " ";
          null != t && "" !== t || (t = "0 0");
          var i, r = t.split(" "), s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : r[0], n = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : r[1];
          if (r.length > 3 && !e) {
            for (r = t.split(", ").join(",").split(","),
              t = [],
              i = 0; i < r.length; i++)
              t.push(lt(r[i]));
            return t.join(",")
          }
          return null == n ? n = "center" === s ? "50%" : "0" : "center" === n && (n = "50%"),
          ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"),
            t = s + " " + n + (r.length > 2 ? " " + r[2] : ""),
          e && (e.oxp = -1 !== s.indexOf("%"),
            e.oyp = -1 !== n.indexOf("%"),
            e.oxr = "=" === s.charAt(1),
            e.oyr = "=" === n.charAt(1),
            e.ox = parseFloat(s.replace(x, "")),
            e.oy = parseFloat(n.replace(x, "")),
            e.v = t),
          e || t
        }, ht = function(t, e) {
          return "function" == typeof t && (t = t(d, m)),
            "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
        }, _t = function(t, e) {
          "function" == typeof t && (t = t(d, m));
          var i = "string" == typeof t && "=" === t.charAt(1);
          return "string" == typeof t && "v" === t.charAt(t.length - 2) && (t = (i ? t.substr(0, 2) : 0) + window["inner" + ("vh" === t.substr(-2) ? "Height" : "Width")] * (parseFloat(i ? t.substr(2) : t) / 100)),
            null == t ? e : i ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
        }, ut = function(t, e, i, r) {
          var s, n, a, o;
          return "function" == typeof t && (t = t(d, m)),
            null == t ? a = e : "number" == typeof t ? a = t : (360,
              s = t.split("_"),
              n = ((o = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : I) - (o ? 0 : e),
            s.length && (r && (r[i] = e + n),
            -1 !== t.indexOf("short") && (n %= 360) !== n % 180 && (n = n < 0 ? n + 360 : n - 360),
              -1 !== t.indexOf("_cw") && n < 0 ? n = (n + 3599999999640) % 360 - 360 * (n / 360 | 0) : -1 !== t.indexOf("ccw") && n > 0 && (n = (n - 3599999999640) % 360 - 360 * (n / 360 | 0))),
              a = e + n),
          a < 1e-6 && a > -1e-6 && (a = 0),
            a
        }, ct = {
          aqua: [0, 255, 255],
          lime: [0, 255, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, 255],
          navy: [0, 0, 128],
          white: [255, 255, 255],
          fuchsia: [255, 0, 255],
          olive: [128, 128, 0],
          yellow: [255, 255, 0],
          orange: [255, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [255, 0, 0],
          pink: [255, 192, 203],
          cyan: [0, 255, 255],
          transparent: [255, 255, 255, 0]
        }, ft = function(t, e, i) {
          return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
        }, pt = n.parseColor = function(t, e) {
          var i, r, s, n, a, o, l, h, _, u, c;
          if (t)
            if ("number" == typeof t)
              i = [t >> 16, t >> 8 & 255, 255 & t];
            else {
              if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)),
                ct[t])
                i = ct[t];
              else if ("#" === t.charAt(0))
                4 === t.length && (r = t.charAt(1),
                  s = t.charAt(2),
                  n = t.charAt(3),
                  t = "#" + r + r + s + s + n + n),
                  i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
              else if ("hsl" === t.substr(0, 3))
                if (i = c = t.match(g),
                  e) {
                  if (-1 !== t.indexOf("="))
                    return t.match(v)
                } else
                  a = Number(i[0]) % 360 / 360,
                    o = Number(i[1]) / 100,
                    r = 2 * (l = Number(i[2]) / 100) - (s = l <= .5 ? l * (o + 1) : l + o - l * o),
                  i.length > 3 && (i[3] = Number(i[3])),
                    i[0] = ft(a + 1 / 3, r, s),
                    i[1] = ft(a, r, s),
                    i[2] = ft(a - 1 / 3, r, s);
              else
                i = t.match(g) || ct.transparent;
              i[0] = Number(i[0]),
                i[1] = Number(i[1]),
                i[2] = Number(i[2]),
              i.length > 3 && (i[3] = Number(i[3]))
            }
          else
            i = ct.black;
          return e && !c && (r = i[0] / 255,
            s = i[1] / 255,
            n = i[2] / 255,
            l = ((h = Math.max(r, s, n)) + (_ = Math.min(r, s, n))) / 2,
            h === _ ? a = o = 0 : (u = h - _,
              o = l > .5 ? u / (2 - h - _) : u / (h + _),
              a = h === r ? (s - n) / u + (s < n ? 6 : 0) : h === s ? (n - r) / u + 2 : (r - s) / u + 4,
              a *= 60),
            i[0] = a + .5 | 0,
            i[1] = 100 * o + .5 | 0,
            i[2] = 100 * l + .5 | 0),
            i
        }
          , mt = function(t, e) {
          var i, r, s, n = t.match(dt) || [], a = 0, o = "";
          if (!n.length)
            return t;
          for (i = 0; i < n.length; i++)
            r = n[i],
              a += (s = t.substr(a, t.indexOf(r, a) - a)).length + r.length,
            3 === (r = pt(r, e)).length && r.push(1),
              o += s + (e ? "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + r[3] : "rgba(" + r.join(",")) + ")";
          return o + t.substr(a)
        }, dt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
        for (l in ct)
          dt += "|" + l + "\\b";
        dt = new RegExp(dt + ")","gi"),
          n.colorStringFilter = function(t) {
            var e, i = t[0] + " " + t[1];
            dt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("),
              t[0] = mt(t[0], e),
              t[1] = mt(t[1], e)),
              dt.lastIndex = 0
          }
          ,
        r.default.defaultStringFilter || (r.default.defaultStringFilter = n.colorStringFilter);
        var gt = function(t, e, i, r) {
          if (null == t)
            return function(t) {
              return t
            }
              ;
          var s, n = e ? (t.match(dt) || [""])[0] : "", a = t.split(n).join("").match(y) || [], o = t.substr(0, t.indexOf(a[0])), l = ")" === t.charAt(t.length - 1) ? ")" : "", h = -1 !== t.indexOf(" ") ? " " : ",", _ = a.length, u = _ > 0 ? a[0].replace(g, "") : "";
          return _ ? s = e ? function(t) {
              var e, c, f, p;
              if ("number" == typeof t)
                t += u;
              else if (r && E.test(t)) {
                for (p = t.replace(E, "|").split("|"),
                  f = 0; f < p.length; f++)
                  p[f] = s(p[f]);
                return p.join(",")
              }
              if (e = (t.match(dt) || [n])[0],
                f = (c = t.split(e).join("").match(y) || []).length,
              _ > f--)
                for (; ++f < _; )
                  c[f] = i ? c[(f - 1) / 2 | 0] : a[f];
              return o + c.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
            }
            : function(t) {
              var e, n, c;
              if ("number" == typeof t)
                t += u;
              else if (r && E.test(t)) {
                for (n = t.replace(E, "|").split("|"),
                  c = 0; c < n.length; c++)
                  n[c] = s(n[c]);
                return n.join(",")
              }
              if (c = (e = t.match("," === h ? y : T) || []).length,
              _ > c--)
                for (; ++c < _; )
                  e[c] = i ? e[(c - 1) / 2 | 0] : a[c];
              return (o && "none" !== t && t.substr(0, t.indexOf(e[0])) || o) + e.join(h) + l
            }
            : function(t) {
              return t
            }
        }
          , vt = function(t) {
          return t = t.split(","),
            function(e, i, r, s, n, a, o) {
              var l, h = (i + "").split(" ");
              for (o = {},
                l = 0; l < 4; l++)
                o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
              return s.parse(e, o, n, a)
            }
        }
          , yt = (V._setPluginRatio = function(t) {
            this.plugin.setRatio(t);
            for (var e, i, r, s, n, a = this.data, o = a.proxy, l = a.firstMPT; l; )
              e = o[l.v],
                l.r ? e = l.r(e) : e < 1e-6 && e > -1e-6 && (e = 0),
                l.t[l.p] = e,
                l = l._next;
            if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod.call(this._tween, o.rotation, this.t, this._tween) : o.rotation),
            1 === t || 0 === t)
              for (l = a.firstMPT,
                n = 1 === t ? "e" : "b"; l; ) {
                if ((i = l.t).type) {
                  if (1 === i.type) {
                    for (s = i.xs0 + i.s + i.xs1,
                      r = 1; r < i.l; r++)
                      s += i["xn" + r] + i["xs" + (r + 1)];
                    i[n] = s
                  }
                } else
                  i[n] = i.s + i.xs0;
                l = l._next
              }
          }
            ,
            function(t, e, i, r, s) {
              this.t = t,
                this.p = e,
                this.v = i,
                this.r = s,
              r && (r._prev = this,
                this._next = r)
            }
        )
          , Tt = (V._parseToProxy = function(t, e, i, r, s, n) {
            var a, o, l, h, _, u = r, c = {}, f = {}, p = i._transform, m = N;
            for (i._transform = null,
              N = e,
              r = _ = i.parse(t, e, r, s),
              N = m,
            n && (i._transform = p,
            u && (u._prev = null,
            u._prev && (u._prev._next = null))); r && r !== u; ) {
              if (r.type <= 1 && (f[o = r.p] = r.s + r.c,
                c[o] = r.s,
              n || (h = new yt(r,"s",o,h,r.r),
                r.c = 0),
              1 === r.type))
                for (a = r.l; --a > 0; )
                  l = "xn" + a,
                    f[o = r.p + "_" + l] = r.data[l],
                    c[o] = r[l],
                  n || (h = new yt(r,l,o,h,r.rxp[l]));
              r = r._next
            }
            return {
              proxy: c,
              end: f,
              firstMPT: h,
              pt: _
            }
          }
            ,
            V.CSSPropTween = function(e, i, r, n, a, o, l, h, _, u, c) {
              this.t = e,
                this.p = i,
                this.s = r,
                this.c = n,
                this.n = l || i,
              e instanceof Tt || s.push(this.n),
                this.r = h ? "function" == typeof h ? h : Math.round : h,
                this.type = o || 0,
              _ && (this.pr = _,
                t = !0),
                this.b = void 0 === u ? r : u,
                this.e = void 0 === c ? r + n : c,
              a && (this._next = a,
                a._prev = this)
            }
        )
          , xt = function(t, e, i, r, s, n) {
          var a = new Tt(t,e,i,r - i,s,-1,n);
          return a.b = i,
            a.e = a.xs0 = r,
            a
        }
          , wt = n.parseComplex = function(t, e, i, r, s, a, o, l, _, u) {
          i = i || a || "",
          "function" == typeof r && (r = r(d, m)),
            o = new Tt(t,e,0,0,o,u ? 2 : 1,null,!1,l,i,r),
            r += "",
          s && dt.test(r + i) && (r = [i, r],
            n.colorStringFilter(r),
            i = r[0],
            r = r[1]);
          var c, f, p, y, T, x, w, b, P, S, k, O, R, C = i.split(", ").join(",").split(" "), A = r.split(", ").join(",").split(" "), D = C.length, M = !1 !== h;
          for (-1 === r.indexOf(",") && -1 === i.indexOf(",") || (-1 !== (r + i).indexOf("rgb") || -1 !== (r + i).indexOf("hsl") ? (C = C.join(" ").replace(E, ", ").split(" "),
            A = A.join(" ").replace(E, ", ").split(" ")) : (C = C.join(" ").split(",").join(", ").split(" "),
            A = A.join(" ").split(",").join(", ").split(" ")),
            D = C.length),
          D !== A.length && (D = (C = (a || "").split(" ")).length),
            o.plugin = _,
            o.setRatio = u,
            dt.lastIndex = 0,
            c = 0; c < D; c++)
            if (y = C[c],
              T = A[c] + "",
            (b = parseFloat(y)) || 0 === b)
              o.appendXtra("", b, ht(T, b), T.replace(v, ""), !(!M || -1 === T.indexOf("px")) && Math.round, !0);
            else if (s && dt.test(y))
              O = ")" + ((O = T.indexOf(")") + 1) ? T.substr(O) : ""),
                R = -1 !== T.indexOf("hsl") && W,
                S = T,
                y = pt(y, R),
                T = pt(T, R),
                (P = y.length + T.length > 6) && !W && 0 === T[3] ? (o["xs" + o.l] += o.l ? " transparent" : "transparent",
                  o.e = o.e.split(A[c]).join("transparent")) : (W || (P = !1),
                  R ? o.appendXtra(S.substr(0, S.indexOf("hsl")) + (P ? "hsla(" : "hsl("), y[0], ht(T[0], y[0]), ",", !1, !0).appendXtra("", y[1], ht(T[1], y[1]), "%,", !1).appendXtra("", y[2], ht(T[2], y[2]), P ? "%," : "%" + O, !1) : o.appendXtra(S.substr(0, S.indexOf("rgb")) + (P ? "rgba(" : "rgb("), y[0], T[0] - y[0], ",", Math.round, !0).appendXtra("", y[1], T[1] - y[1], ",", Math.round).appendXtra("", y[2], T[2] - y[2], P ? "," : O, Math.round),
                P && (y = y.length < 4 ? 1 : y[3],
                  o.appendXtra("", y, (T.length < 4 ? 1 : T[3]) - y, O, !1))),
                dt.lastIndex = 0;
            else if (x = y.match(g)) {
              if (!(w = T.match(v)) || w.length !== x.length)
                return o;
              for (p = 0,
                f = 0; f < x.length; f++)
                k = x[f],
                  S = y.indexOf(k, p),
                  o.appendXtra(y.substr(p, S - p), Number(k), ht(w[f], k), "", !(!M || "px" !== y.substr(S + k.length, 2)) && Math.round, 0 === f),
                  p = S + k.length;
              o["xs" + o.l] += y.substr(p)
            } else
              o["xs" + o.l] += o.l || o["xs" + o.l] ? " " + T : T;
          if (-1 !== r.indexOf("=") && o.data) {
            for (O = o.xs0 + o.data.s,
              c = 1; c < o.l; c++)
              O += o["xs" + c] + o.data["xn" + c];
            o.e = O + o["xs" + c]
          }
          return o.l || (o.type = -1,
            o.xs0 = o.e),
          o.xfirst || o
        }
          , bt = 9;
        for ((l = Tt.prototype).l = l.pr = 0; --bt > 0; )
          l["xn" + bt] = 0,
            l["xs" + bt] = "";
        l.xs0 = "",
          l._next = l._prev = l.xfirst = l.data = l.plugin = l.setRatio = l.rxp = null,
          l.appendXtra = function(t, e, i, r, s, n) {
            var a = this
              , o = a.l;
            return a["xs" + o] += n && (o || a["xs" + o]) ? " " + t : t || "",
              i || 0 === o || a.plugin ? (a.l++,
                a.type = a.setRatio ? 2 : 1,
                a["xs" + a.l] = r || "",
                o > 0 ? (a.data["xn" + o] = e + i,
                  a.rxp["xn" + o] = s,
                  a["xn" + o] = e,
                a.plugin || (a.xfirst = new Tt(a,"xn" + o,e,i,a.xfirst || a,0,a.n,s,a.pr),
                  a.xfirst.xs0 = 0),
                  a) : (a.data = {
                  s: e + i
                },
                  a.rxp = {},
                  a.s = e,
                  a.c = i,
                  a.r = s,
                  a)) : (a["xs" + o] += e + (r || ""),
                a)
          }
        ;
        var Pt = function(t, e) {
            e = e || {},
              this.p = e.prefix && Q(t) || t,
              o[t] = o[this.p] = this,
              this.format = e.formatter || gt(e.defaultValue, e.color, e.collapsible, e.multi),
            e.parser && (this.parse = e.parser),
              this.clrs = e.color,
              this.multi = e.multi,
              this.keyword = e.keyword,
              this.dflt = e.defaultValue,
              this.allowFunc = e.allowFunc,
              this.pr = e.priority || 0
          }
          , St = V._registerComplexSpecialProp = function(t, e, i) {
            "object" != typeof e && (e = {
              parser: i
            });
            var r, s = t.split(","), n = e.defaultValue;
            for (i = i || [n],
              r = 0; r < s.length; r++)
              e.prefix = 0 === r && e.prefix,
                e.defaultValue = i[r] || n,
                new Pt(s[r],e)
          }
          , kt = V._registerPluginProp = function(t) {
            if (!o[t]) {
              var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
              St(t, {
                parser: function(t, i, r, s, n, l, h) {
                  var _ = a.com.greensock.plugins[e];
                  return _ ? (_._cssRegister(),
                    o[r].parse(t, i, r, s, n, l, h)) : (Z("Error: " + e + " js file not loaded."),
                    n)
                }
              })
            }
          }
        ;
        (l = Pt.prototype).parseComplex = function(t, e, i, r, s, n) {
          var a, o, l, h, _, u, c = this.keyword;
          if (this.multi && (E.test(i) || E.test(e) ? (o = e.replace(E, "|").split("|"),
            l = i.replace(E, "|").split("|")) : c && (o = [e],
            l = [i])),
            l) {
            for (h = l.length > o.length ? l.length : o.length,
              a = 0; a < h; a++)
              e = o[a] = o[a] || this.dflt,
                i = l[a] = l[a] || this.dflt,
              c && (_ = e.indexOf(c)) !== (u = i.indexOf(c)) && (-1 === u ? o[a] = o[a].split(c).join("") : -1 === _ && (o[a] += " " + c));
            e = o.join(", "),
              i = l.join(", ")
          }
          return wt(t, this.p, e, i, this.clrs, this.dflt, r, this.pr, s, n)
        }
          ,
          l.parse = function(t, e, r, s, n, a, o) {
            return this.parseComplex(t.style, this.format(tt(t, this.p, i, !1, this.dflt)), this.format(e), n, a)
          }
          ,
          n.registerSpecialProp = function(t, e, i) {
            St(t, {
              parser: function(t, r, s, n, a, o, l) {
                var h = new Tt(t,s,0,0,a,2,s,!1,i);
                return h.plugin = o,
                  h.setRatio = e(t, r, n._tween, s),
                  h
              },
              priority: i
            })
          }
          ,
          n.useSVGTransformAttr = !0;
        var Ot, Rt, Ct, At, Dt, Mt = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), Ft = Q("transform"), Et = H + "transform", zt = Q("transformOrigin"), Lt = null !== Q("perspective"), It = V.Transform = function() {
            this.perspective = parseFloat(n.defaultTransformPerspective) || 0,
              this.force3D = !(!1 === n.defaultForce3D || !Lt) && (n.defaultForce3D || "auto")
          }
          , Nt = r._gsScope.SVGElement, Xt = function(t, e, i) {
            var r, s = B.createElementNS("http://www.w3.org/2000/svg", t), n = /([a-z])([A-Z])/g;
            for (r in i)
              s.setAttributeNS(null, r.replace(n, "$1-$2").toLowerCase(), i[r]);
            return e.appendChild(s),
              s
          }, Bt = B.documentElement || {}, jt = (Dt = p || /Android/i.test(q) && !r._gsScope.chrome,
          B.createElementNS && Bt.appendChild && !Dt && (Rt = Xt("svg", Bt),
            At = (Ct = Xt("rect", Rt, {
              width: 100,
              height: 50,
              x: 100
            })).getBoundingClientRect().width,
            Ct.style[zt] = "50% 50%",
            Ct.style[Ft] = "scaleX(0.5)",
            Dt = At === Ct.getBoundingClientRect().width && !(c && Lt),
            Bt.removeChild(Rt)),
            Dt), Yt = function(t, e, i, r, s, a) {
            var o, l, h, _, u, c, f, p, m, d, g, v, y, T, x = t._gsTransform, w = Wt(t, !0);
            x && (y = x.xOrigin,
              T = x.yOrigin),
            (!r || (o = r.split(" ")).length < 2) && (0 === (f = t.getBBox()).x && 0 === f.y && f.width + f.height === 0 && (f = {
              x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
              y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
              width: 0,
              height: 0
            }),
              o = [(-1 !== (e = lt(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * f.width : parseFloat(e[0])) + f.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * f.height : parseFloat(e[1])) + f.y]),
              i.xOrigin = _ = parseFloat(o[0]),
              i.yOrigin = u = parseFloat(o[1]),
            r && w !== qt && (c = w[0],
              f = w[1],
              p = w[2],
              m = w[3],
              d = w[4],
              g = w[5],
            (v = c * m - f * p) && (l = _ * (m / v) + u * (-p / v) + (p * g - m * d) / v,
              h = _ * (-f / v) + u * (c / v) - (c * g - f * d) / v,
              _ = i.xOrigin = o[0] = l,
              u = i.yOrigin = o[1] = h)),
            x && (a && (i.xOffset = x.xOffset,
              i.yOffset = x.yOffset,
              x = i),
              s || !1 !== s && !1 !== n.defaultSmoothOrigin ? (l = _ - y,
                h = u - T,
                x.xOffset += l * w[0] + h * w[2] - l,
                x.yOffset += l * w[1] + h * w[3] - h) : x.xOffset = x.yOffset = 0),
            a || t.setAttribute("data-svg-origin", o.join(" "))
          }, Ut = function(t) {
            var e, i = j("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, s = this.nextSibling, n = this.style.cssText;
            if (Bt.appendChild(i),
              i.appendChild(this),
              this.style.display = "block",
              t)
              try {
                e = this.getBBox(),
                  this._originalGetBBox = this.getBBox,
                  this.getBBox = Ut
              } catch (t) {}
            else
              this._originalGetBBox && (e = this._originalGetBBox());
            return s ? r.insertBefore(this, s) : r.appendChild(this),
              Bt.removeChild(i),
              this.style.cssText = n,
              e
          }, Vt = function(t) {
            return !(!Nt || !t.getCTM || t.parentNode && !t.ownerSVGElement || !function(t) {
              try {
                return t.getBBox()
              } catch (e) {
                return Ut.call(t, !0)
              }
            }(t))
          }, qt = [1, 0, 0, 1, 0, 0], Wt = function(t, e) {
            var i, r, s, n, a, o, l, h = t._gsTransform || new It, _ = t.style;
            if (Ft ? r = tt(t, Et, null, !0) : t.currentStyle && (r = (r = t.currentStyle.filter.match(M)) && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), h.x || 0, h.y || 0].join(",") : ""),
              i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r,
            Ft && i && !t.offsetParent && t !== Bt && (n = _.display,
              _.display = "block",
            (l = t.parentNode) && t.offsetParent || (a = 1,
              o = t.nextSibling,
              Bt.appendChild(t)),
              i = !(r = tt(t, Et, null, !0)) || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r,
              n ? _.display = n : Qt(_, "display"),
            a && (o ? l.insertBefore(t, o) : l ? l.appendChild(t) : Bt.removeChild(t))),
            (h.svg || t.getCTM && Vt(t)) && (i && -1 !== (_[Ft] + "").indexOf("matrix") && (r = _[Ft],
              i = 0),
              s = t.getAttribute("transform"),
            i && s && (r = "matrix(" + (s = t.transform.baseVal.consolidate().matrix).a + "," + s.b + "," + s.c + "," + s.d + "," + s.e + "," + s.f + ")",
              i = 0)),
              i)
              return qt;
            for (s = (r || "").match(g) || [],
              bt = s.length; --bt > -1; )
              n = Number(s[bt]),
                s[bt] = (a = n - (n |= 0)) ? (1e5 * a + (a < 0 ? -.5 : .5) | 0) / 1e5 + n : n;
            return e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s
          }, Gt = V.getTransform = function(t, e, i, s) {
            if (t._gsTransform && i && !s)
              return t._gsTransform;
            var a, o, l, h, _, u, c = i && t._gsTransform || new It, f = c.scaleX < 0, p = Lt && (parseFloat(tt(t, zt, e, !1, "0 0 0").split(" ")[2]) || c.zOrigin) || 0, m = parseFloat(n.defaultTransformPerspective) || 0;
            if (c.svg = !(!t.getCTM || !Vt(t)),
            c.svg && (Yt(t, tt(t, zt, e, !1, "50% 50%") + "", c, t.getAttribute("data-svg-origin")),
              Ot = n.useSVGTransformAttr || jt),
            (a = Wt(t)) !== qt) {
              if (16 === a.length) {
                var d, g, v, y, T, x = a[0], w = a[1], b = a[2], P = a[3], S = a[4], k = a[5], O = a[6], R = a[7], C = a[8], A = a[9], D = a[10], M = a[12], F = a[13], E = a[14], z = a[11], L = Math.atan2(O, D);
                c.zOrigin && (M = C * (E = -c.zOrigin) - a[12],
                  F = A * E - a[13],
                  E = D * E + c.zOrigin - a[14]),
                  c.rotationX = L * I,
                L && (d = S * (y = Math.cos(-L)) + C * (T = Math.sin(-L)),
                  g = k * y + A * T,
                  v = O * y + D * T,
                  C = S * -T + C * y,
                  A = k * -T + A * y,
                  D = O * -T + D * y,
                  z = R * -T + z * y,
                  S = d,
                  k = g,
                  O = v),
                  L = Math.atan2(-b, D),
                  c.rotationY = L * I,
                L && (g = w * (y = Math.cos(-L)) - A * (T = Math.sin(-L)),
                  v = b * y - D * T,
                  A = w * T + A * y,
                  D = b * T + D * y,
                  z = P * T + z * y,
                  x = d = x * y - C * T,
                  w = g,
                  b = v),
                  L = Math.atan2(w, x),
                  c.rotation = L * I,
                L && (d = x * (y = Math.cos(L)) + w * (T = Math.sin(L)),
                  g = S * y + k * T,
                  v = C * y + A * T,
                  w = w * y - x * T,
                  k = k * y - S * T,
                  A = A * y - C * T,
                  x = d,
                  S = g,
                  C = v),
                c.rotationX && Math.abs(c.rotationX) + Math.abs(c.rotation) > 359.9 && (c.rotationX = c.rotation = 0,
                  c.rotationY = 180 - c.rotationY),
                  L = Math.atan2(S, k),
                  c.scaleX = (1e5 * Math.sqrt(x * x + w * w + b * b) + .5 | 0) / 1e5,
                  c.scaleY = (1e5 * Math.sqrt(k * k + O * O) + .5 | 0) / 1e5,
                  c.scaleZ = (1e5 * Math.sqrt(C * C + A * A + D * D) + .5 | 0) / 1e5,
                  x /= c.scaleX,
                  S /= c.scaleY,
                  w /= c.scaleX,
                  k /= c.scaleY,
                  Math.abs(L) > 2e-5 ? (c.skewX = L * I,
                    S = 0,
                  "simple" !== c.skewType && (c.scaleY *= 1 / Math.cos(L))) : c.skewX = 0,
                  c.perspective = z ? 1 / (z < 0 ? -z : z) : 0,
                  c.x = M,
                  c.y = F,
                  c.z = E,
                c.svg && (c.x -= c.xOrigin - (c.xOrigin * x - c.yOrigin * S),
                  c.y -= c.yOrigin - (c.yOrigin * w - c.xOrigin * k))
              } else if (!Lt || s || !a.length || c.x !== a[4] || c.y !== a[5] || !c.rotationX && !c.rotationY) {
                var N = a.length >= 6
                  , X = N ? a[0] : 1
                  , B = a[1] || 0
                  , j = a[2] || 0
                  , Y = N ? a[3] : 1;
                c.x = a[4] || 0,
                  c.y = a[5] || 0,
                  l = Math.sqrt(X * X + B * B),
                  h = Math.sqrt(Y * Y + j * j),
                  _ = X || B ? Math.atan2(B, X) * I : c.rotation || 0,
                  u = j || Y ? Math.atan2(j, Y) * I + _ : c.skewX || 0,
                  c.scaleX = l,
                  c.scaleY = h,
                  c.rotation = _,
                  c.skewX = u,
                Lt && (c.rotationX = c.rotationY = c.z = 0,
                  c.perspective = m,
                  c.scaleZ = 1),
                c.svg && (c.x -= c.xOrigin - (c.xOrigin * X + c.yOrigin * j),
                  c.y -= c.yOrigin - (c.xOrigin * B + c.yOrigin * Y))
              }
              for (o in Math.abs(c.skewX) > 90 && Math.abs(c.skewX) < 270 && (f ? (c.scaleX *= -1,
                c.skewX += c.rotation <= 0 ? 180 : -180,
                c.rotation += c.rotation <= 0 ? 180 : -180) : (c.scaleY *= -1,
                c.skewX += c.skewX <= 0 ? 180 : -180)),
                c.zOrigin = p,
                c)
                c[o] < 2e-5 && c[o] > -2e-5 && (c[o] = 0)
            }
            return i && (t._gsTransform = c,
            c.svg && (Ot && t.style[Ft] ? r.default.delayedCall(.001, (function() {
                Qt(t.style, Ft)
              }
            )) : !Ot && t.getAttribute("transform") && r.default.delayedCall(.001, (function() {
                t.removeAttribute("transform")
              }
            )))),
              c
          }
          , Zt = function(t) {
            var e, i, r = this.data, s = -r.rotation * L, n = s + r.skewX * L, a = (Math.cos(s) * r.scaleX * 1e5 | 0) / 1e5, o = (Math.sin(s) * r.scaleX * 1e5 | 0) / 1e5, l = (Math.sin(n) * -r.scaleY * 1e5 | 0) / 1e5, h = (Math.cos(n) * r.scaleY * 1e5 | 0) / 1e5, _ = this.t.style, u = this.t.currentStyle;
            if (u) {
              i = o,
                o = -l,
                l = -i,
                e = u.filter,
                _.filter = "";
              var c, f, m = this.t.offsetWidth, d = this.t.offsetHeight, g = "absolute" !== u.position, v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + o + ", M21=" + l + ", M22=" + h, y = r.x + m * r.xPercent / 100, T = r.y + d * r.yPercent / 100;
              if (null != r.ox && (y += (c = (r.oxp ? m * r.ox * .01 : r.ox) - m / 2) - (c * a + (f = (r.oyp ? d * r.oy * .01 : r.oy) - d / 2) * o),
                T += f - (c * l + f * h)),
                v += g ? ", Dx=" + ((c = m / 2) - (c * a + (f = d / 2) * o) + y) + ", Dy=" + (f - (c * l + f * h) + T) + ")" : ", sizingMethod='auto expand')",
                -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? _.filter = e.replace(F, v) : _.filter = v + " " + e,
              0 !== t && 1 !== t || 1 === a && 0 === o && 0 === l && 1 === h && (g && -1 === v.indexOf("Dx=0, Dy=0") || b.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && _.removeAttribute("filter")),
                !g) {
                var x, P, S, k = p < 8 ? 1 : -1;
                for (c = r.ieOffsetX || 0,
                  f = r.ieOffsetY || 0,
                  r.ieOffsetX = Math.round((m - ((a < 0 ? -a : a) * m + (o < 0 ? -o : o) * d)) / 2 + y),
                  r.ieOffsetY = Math.round((d - ((h < 0 ? -h : h) * d + (l < 0 ? -l : l) * m)) / 2 + T),
                  bt = 0; bt < 4; bt++)
                  S = (i = -1 !== (x = u[P = at[bt]]).indexOf("px") ? parseFloat(x) : et(this.t, P, parseFloat(x), x.replace(w, "")) || 0) !== r[P] ? bt < 2 ? -r.ieOffsetX : -r.ieOffsetY : bt < 2 ? c - r.ieOffsetX : f - r.ieOffsetY,
                    _[P] = (r[P] = Math.round(i - S * (0 === bt || 2 === bt ? 1 : k))) + "px"
              }
            }
          }, Ht = V.set3DTransformRatio = V.setTransformRatio = function(t) {
            var e, i, r, s, n, a, o, l, h, _, u, f, p, m, d, g, v, y, T, x, w = this.data, b = this.t.style, P = w.rotation, S = w.rotationX, k = w.rotationY, O = w.scaleX, R = w.scaleY, C = w.scaleZ, A = w.x, D = w.y, M = w.z, F = w.svg, E = w.perspective, z = w.force3D, I = w.skewY, N = w.skewX;
            if (I && (N += I,
              P += I),
            !((1 !== t && 0 !== t || "auto" !== z || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && z || M || E || k || S || 1 !== C) || Ot && F || !Lt)
              P || N || F ? (P *= L,
                x = N * L,
                1e5,
                i = Math.cos(P) * O,
                n = Math.sin(P) * O,
                r = Math.sin(P - x) * -R,
                a = Math.cos(P - x) * R,
              x && "simple" === w.skewType && (e = Math.tan(x - I * L),
                r *= e = Math.sqrt(1 + e * e),
                a *= e,
              I && (e = Math.tan(I * L),
                i *= e = Math.sqrt(1 + e * e),
                n *= e)),
              F && (A += w.xOrigin - (w.xOrigin * i + w.yOrigin * r) + w.xOffset,
                D += w.yOrigin - (w.xOrigin * n + w.yOrigin * a) + w.yOffset,
              Ot && (w.xPercent || w.yPercent) && (d = this.t.getBBox(),
                A += .01 * w.xPercent * d.width,
                D += .01 * w.yPercent * d.height),
              A < (d = 1e-6) && A > -d && (A = 0),
              D < d && D > -d && (D = 0)),
                T = (1e5 * i | 0) / 1e5 + "," + (1e5 * n | 0) / 1e5 + "," + (1e5 * r | 0) / 1e5 + "," + (1e5 * a | 0) / 1e5 + "," + A + "," + D + ")",
                F && Ot ? this.t.setAttribute("transform", "matrix(" + T) : b[Ft] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + T) : b[Ft] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + O + ",0,0," + R + "," + A + "," + D + ")";
            else {
              if (c && (O < (d = 1e-4) && O > -d && (O = C = 2e-5),
              R < d && R > -d && (R = C = 2e-5),
              !E || w.z || w.rotationX || w.rotationY || (E = 0)),
              P || N)
                P *= L,
                  g = i = Math.cos(P),
                  v = n = Math.sin(P),
                N && (P -= N * L,
                  g = Math.cos(P),
                  v = Math.sin(P),
                "simple" === w.skewType && (e = Math.tan((N - I) * L),
                  g *= e = Math.sqrt(1 + e * e),
                  v *= e,
                w.skewY && (e = Math.tan(I * L),
                  i *= e = Math.sqrt(1 + e * e),
                  n *= e))),
                  r = -v,
                  a = g;
              else {
                if (!(k || S || 1 !== C || E || F))
                  return void (b[Ft] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) translate3d(" : "translate3d(") + A + "px," + D + "px," + M + "px)" + (1 !== O || 1 !== R ? " scale(" + O + "," + R + ")" : ""));
                i = a = 1,
                  r = n = 0
              }
              _ = 1,
                s = o = l = h = u = f = 0,
                p = E ? -1 / E : 0,
                m = w.zOrigin,
                d = 1e-6,
                ",",
                "0",
              (P = k * L) && (g = Math.cos(P),
                l = -(v = Math.sin(P)),
                u = p * -v,
                s = i * v,
                o = n * v,
                _ = g,
                p *= g,
                i *= g,
                n *= g),
              (P = S * L) && (e = r * (g = Math.cos(P)) + s * (v = Math.sin(P)),
                y = a * g + o * v,
                h = _ * v,
                f = p * v,
                s = r * -v + s * g,
                o = a * -v + o * g,
                _ *= g,
                p *= g,
                r = e,
                a = y),
              1 !== C && (s *= C,
                o *= C,
                _ *= C,
                p *= C),
              1 !== R && (r *= R,
                a *= R,
                h *= R,
                f *= R),
              1 !== O && (i *= O,
                n *= O,
                l *= O,
                u *= O),
              (m || F) && (m && (A += s * -m,
                D += o * -m,
                M += _ * -m + m),
              F && (A += w.xOrigin - (w.xOrigin * i + w.yOrigin * r) + w.xOffset,
                D += w.yOrigin - (w.xOrigin * n + w.yOrigin * a) + w.yOffset),
              A < d && A > -d && (A = "0"),
              D < d && D > -d && (D = "0"),
              M < d && M > -d && (M = 0)),
                T = w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix3d(" : "matrix3d(",
                T += (i < d && i > -d ? "0" : i) + "," + (n < d && n > -d ? "0" : n) + "," + (l < d && l > -d ? "0" : l),
                T += "," + (u < d && u > -d ? "0" : u) + "," + (r < d && r > -d ? "0" : r) + "," + (a < d && a > -d ? "0" : a),
                S || k || 1 !== C ? (T += "," + (h < d && h > -d ? "0" : h) + "," + (f < d && f > -d ? "0" : f) + "," + (s < d && s > -d ? "0" : s),
                  T += "," + (o < d && o > -d ? "0" : o) + "," + (_ < d && _ > -d ? "0" : _) + "," + (p < d && p > -d ? "0" : p) + ",") : T += ",0,0,0,0,1,0,",
                T += A + "," + D + "," + M + "," + (E ? 1 + -M / E : 1) + ")",
                b[Ft] = T
            }
          }
        ;
        (l = It.prototype).x = l.y = l.z = l.skewX = l.skewY = l.rotation = l.rotationX = l.rotationY = l.zOrigin = l.xPercent = l.yPercent = l.xOffset = l.yOffset = 0,
          l.scaleX = l.scaleY = l.scaleZ = 1,
          St("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
            parser: function(t, e, r, s, a, o, l) {
              if (s._lastParsedTransform === l)
                return a;
              s._lastParsedTransform = l;
              var h = l.scale && "function" == typeof l.scale ? l.scale : 0;
              h && (l.scale = h(d, t));
              var _, u, c, f, p, g, v, y, T, x = t._gsTransform, w = t.style, b = Mt.length, P = l, S = {}, k = Gt(t, i, !0, P.parseTransform), O = P.transform && ("function" == typeof P.transform ? P.transform(d, m) : P.transform);
              if (k.skewType = P.skewType || k.skewType || n.defaultSkewType,
                s._transform = k,
              "rotationZ"in P && (P.rotation = P.rotationZ),
              O && "string" == typeof O && Ft)
                (u = Y.style)[Ft] = O,
                  u.display = "block",
                  u.position = "absolute",
                -1 !== O.indexOf("%") && (u.width = tt(t, "width"),
                  u.height = tt(t, "height")),
                  B.body.appendChild(Y),
                  _ = Gt(Y, null, !1),
                "simple" === k.skewType && (_.scaleY *= Math.cos(_.skewX * L)),
                k.svg && (g = k.xOrigin,
                  v = k.yOrigin,
                  _.x -= k.xOffset,
                  _.y -= k.yOffset,
                (P.transformOrigin || P.svgOrigin) && (O = {},
                  Yt(t, lt(P.transformOrigin), O, P.svgOrigin, P.smoothOrigin, !0),
                  g = O.xOrigin,
                  v = O.yOrigin,
                  _.x -= O.xOffset - k.xOffset,
                  _.y -= O.yOffset - k.yOffset),
                (g || v) && (y = Wt(Y, !0),
                  _.x -= g - (g * y[0] + v * y[2]),
                  _.y -= v - (g * y[1] + v * y[3]))),
                  B.body.removeChild(Y),
                _.perspective || (_.perspective = k.perspective),
                null != P.xPercent && (_.xPercent = _t(P.xPercent, k.xPercent)),
                null != P.yPercent && (_.yPercent = _t(P.yPercent, k.yPercent));
              else if ("object" == typeof P) {
                if (_ = {
                  scaleX: _t(null != P.scaleX ? P.scaleX : P.scale, k.scaleX),
                  scaleY: _t(null != P.scaleY ? P.scaleY : P.scale, k.scaleY),
                  scaleZ: _t(P.scaleZ, k.scaleZ),
                  x: _t(P.x, k.x),
                  y: _t(P.y, k.y),
                  z: _t(P.z, k.z),
                  xPercent: _t(P.xPercent, k.xPercent),
                  yPercent: _t(P.yPercent, k.yPercent),
                  perspective: _t(P.transformPerspective, k.perspective)
                },
                null != (p = P.directionalRotation))
                  if ("object" == typeof p)
                    for (u in p)
                      P[u] = p[u];
                  else
                    P.rotation = p;
                "string" == typeof P.x && -1 !== P.x.indexOf("%") && (_.x = 0,
                  _.xPercent = _t(P.x, k.xPercent)),
                "string" == typeof P.y && -1 !== P.y.indexOf("%") && (_.y = 0,
                  _.yPercent = _t(P.y, k.yPercent)),
                  _.rotation = ut("rotation"in P ? P.rotation : "shortRotation"in P ? P.shortRotation + "_short" : k.rotation, k.rotation, "rotation", S),
                Lt && (_.rotationX = ut("rotationX"in P ? P.rotationX : "shortRotationX"in P ? P.shortRotationX + "_short" : k.rotationX || 0, k.rotationX, "rotationX", S),
                  _.rotationY = ut("rotationY"in P ? P.rotationY : "shortRotationY"in P ? P.shortRotationY + "_short" : k.rotationY || 0, k.rotationY, "rotationY", S)),
                  _.skewX = ut(P.skewX, k.skewX),
                  _.skewY = ut(P.skewY, k.skewY)
              }
              for (Lt && null != P.force3D && (k.force3D = P.force3D,
                f = !0),
              (c = k.force3D || k.z || k.rotationX || k.rotationY || _.z || _.rotationX || _.rotationY || _.perspective) || null == P.scale || (_.scaleZ = 1); --b > -1; )
                ((O = _[T = Mt[b]] - k[T]) > 1e-6 || O < -1e-6 || null != P[T] || null != N[T]) && (f = !0,
                  a = new Tt(k,T,k[T],O,a),
                T in S && (a.e = S[T]),
                  a.xs0 = 0,
                  a.plugin = o,
                  s._overwriteProps.push(a.n));
              return O = "function" == typeof P.transformOrigin ? P.transformOrigin(d, m) : P.transformOrigin,
              k.svg && (O || P.svgOrigin) && (g = k.xOffset,
                v = k.yOffset,
                Yt(t, lt(O), _, P.svgOrigin, P.smoothOrigin),
                a = xt(k, "xOrigin", (x ? k : _).xOrigin, _.xOrigin, a, "transformOrigin"),
                a = xt(k, "yOrigin", (x ? k : _).yOrigin, _.yOrigin, a, "transformOrigin"),
              g === k.xOffset && v === k.yOffset || (a = xt(k, "xOffset", x ? g : k.xOffset, k.xOffset, a, "transformOrigin"),
                a = xt(k, "yOffset", x ? v : k.yOffset, k.yOffset, a, "transformOrigin")),
                O = "0px 0px"),
              (O || Lt && c && k.zOrigin) && (Ft ? (f = !0,
                T = zt,
              O || (O = (O = (tt(t, T, i, !1, "50% 50%") + "").split(" "))[0] + " " + O[1] + " " + k.zOrigin + "px"),
                O += "",
                (a = new Tt(w,T,0,0,a,-1,"transformOrigin")).b = w[T],
                a.plugin = o,
                Lt ? (u = k.zOrigin,
                  O = O.split(" "),
                  k.zOrigin = (O.length > 2 ? parseFloat(O[2]) : u) || 0,
                  a.xs0 = a.e = O[0] + " " + (O[1] || "50%") + " 0px",
                  (a = new Tt(k,"zOrigin",0,0,a,-1,a.n)).b = u,
                  a.xs0 = a.e = k.zOrigin) : a.xs0 = a.e = O) : lt(O + "", k)),
              f && (s._transformType = k.svg && Ot || !c && 3 !== this._transformType ? 2 : 3),
              h && (l.scale = h),
                a
            },
            allowFunc: !0,
            prefix: !0
          }),
          St("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset"
          }),
          St("clipPath", {
            defaultValue: "inset(0%)",
            prefix: !0,
            multi: !0,
            formatter: gt("inset(0% 0% 0% 0%)", !1, !0)
          }),
          St("borderRadius", {
            defaultValue: "0px",
            parser: function(t, r, s, n, a, o) {
              r = this.format(r);
              var l, h, _, u, c, f, p, m, d, g, v, y, T, x, w, b, P = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], S = t.style;
              for (d = parseFloat(t.offsetWidth),
                g = parseFloat(t.offsetHeight),
                l = r.split(" "),
                h = 0; h < P.length; h++)
                this.p.indexOf("border") && (P[h] = Q(P[h])),
                -1 !== (c = u = tt(t, P[h], i, !1, "0px")).indexOf(" ") && (u = c.split(" "),
                  c = u[0],
                  u = u[1]),
                  f = _ = l[h],
                  p = parseFloat(c),
                  y = c.substr((p + "").length),
                  (T = "=" === f.charAt(1)) ? (m = parseInt(f.charAt(0) + "1", 10),
                    f = f.substr(2),
                    m *= parseFloat(f),
                    v = f.substr((m + "").length - (m < 0 ? 1 : 0)) || "") : (m = parseFloat(f),
                    v = f.substr((m + "").length)),
                "" === v && (v = e[s] || y),
                v !== y && (x = et(t, "borderLeft", p, y),
                  w = et(t, "borderTop", p, y),
                  "%" === v ? (c = x / d * 100 + "%",
                    u = w / g * 100 + "%") : "em" === v ? (c = x / (b = et(t, "borderLeft", 1, "em")) + "em",
                    u = w / b + "em") : (c = x + "px",
                    u = w + "px"),
                T && (f = parseFloat(c) + m + v,
                  _ = parseFloat(u) + m + v)),
                  a = wt(S, P[h], c + " " + u, f + " " + _, !1, "0px", a);
              return a
            },
            prefix: !0,
            formatter: gt("0px 0px 0px 0px", !1, !0)
          }),
          St("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
            defaultValue: "0px",
            parser: function(t, e, r, s, n, a) {
              return wt(t.style, r, this.format(tt(t, r, i, !1, "0px 0px")), this.format(e), !1, "0px", n)
            },
            prefix: !0,
            formatter: gt("0px 0px", !1, !0)
          }),
          St("backgroundPosition", {
            defaultValue: "0 0",
            parser: function(t, e, r, s, n, a) {
              var o, l, h, _, u, c, f = "background-position", m = i || J(t), d = this.format((m ? p ? m.getPropertyValue(f + "-x") + " " + m.getPropertyValue(f + "-y") : m.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), g = this.format(e);
              if (-1 !== d.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && (c = tt(t, "backgroundImage").replace(C, "")) && "none" !== c) {
                for (o = d.split(" "),
                  l = g.split(" "),
                  U.setAttribute("src", c),
                  h = 2; --h > -1; )
                  (_ = -1 !== (d = o[h]).indexOf("%")) !== (-1 !== l[h].indexOf("%")) && (u = 0 === h ? t.offsetWidth - U.width : t.offsetHeight - U.height,
                    o[h] = _ ? parseFloat(d) / 100 * u + "px" : parseFloat(d) / u * 100 + "%");
                d = o.join(" ")
              }
              return this.parseComplex(t.style, d, g, n, a)
            },
            formatter: lt
          }),
          St("backgroundSize", {
            defaultValue: "0 0",
            formatter: function(t) {
              return "co" === (t += "").substr(0, 2) ? t : lt(-1 === t.indexOf(" ") ? t + " " + t : t)
            }
          }),
          St("perspective", {
            defaultValue: "0px",
            prefix: !0
          }),
          St("perspectiveOrigin", {
            defaultValue: "50% 50%",
            prefix: !0
          }),
          St("transformStyle", {
            prefix: !0
          }),
          St("backfaceVisibility", {
            prefix: !0
          }),
          St("userSelect", {
            prefix: !0
          }),
          St("margin", {
            parser: vt("marginTop,marginRight,marginBottom,marginLeft")
          }),
          St("padding", {
            parser: vt("paddingTop,paddingRight,paddingBottom,paddingLeft")
          }),
          St("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function(t, e, r, s, n, a) {
              var o, l, h;
              return p < 9 ? (l = t.currentStyle,
                h = p < 8 ? " " : ",",
                o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")",
                e = this.format(e).split(",").join(h)) : (o = this.format(tt(t, this.p, i, !1, this.dflt)),
                e = this.format(e)),
                this.parseComplex(t.style, o, e, n, a)
            }
          }),
          St("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0
          }),
          St("autoRound,strictUnits", {
            parser: function(t, e, i, r, s) {
              return s
            }
          }),
          St("border", {
            defaultValue: "0px solid #000",
            parser: function(t, e, r, s, n, a) {
              var o = tt(t, "borderTopWidth", i, !1, "0px")
                , l = this.format(e).split(" ")
                , h = l[0].replace(w, "");
              return "px" !== h && (o = parseFloat(o) / et(t, "borderTopWidth", 1, h) + h),
                this.parseComplex(t.style, this.format(o + " " + tt(t, "borderTopStyle", i, !1, "solid") + " " + tt(t, "borderTopColor", i, !1, "#000")), l.join(" "), n, a)
            },
            color: !0,
            formatter: function(t) {
              var e = t.split(" ");
              return e[0] + " " + (e[1] || "solid") + " " + (t.match(dt) || ["#000"])[0]
            }
          }),
          St("borderWidth", {
            parser: vt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
          }),
          St("float,cssFloat,styleFloat", {
            parser: function(t, e, i, r, s, n) {
              var a = t.style
                , o = "cssFloat"in a ? "cssFloat" : "styleFloat";
              return new Tt(a,o,0,0,s,-1,i,!1,0,a[o],e)
            }
          });
        var $t = function(t) {
          var e, i = this.t, r = i.filter || tt(this.data, "filter") || "", s = this.s + this.c * t | 0;
          100 === s && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (i.removeAttribute("filter"),
            e = !tt(this.data, "filter")) : (i.filter = r.replace(S, ""),
            e = !0)),
          e || (this.xn1 && (i.filter = r = r || "alpha(opacity=" + s + ")"),
            -1 === r.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = r + " alpha(opacity=" + s + ")") : i.filter = r.replace(b, "opacity=" + s))
        };
        St("opacity,alpha,autoAlpha", {
          defaultValue: "1",
          parser: function(t, e, r, s, n, a) {
            var o = parseFloat(tt(t, "opacity", i, !1, "1"))
              , l = t.style
              , h = "autoAlpha" === r;
            return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o),
            h && 1 === o && "hidden" === tt(t, "visibility", i) && 0 !== e && (o = 0),
              W ? n = new Tt(l,"opacity",o,e - o,n) : ((n = new Tt(l,"opacity",100 * o,100 * (e - o),n)).xn1 = h ? 1 : 0,
                l.zoom = 1,
                n.type = 2,
                n.b = "alpha(opacity=" + n.s + ")",
                n.e = "alpha(opacity=" + (n.s + n.c) + ")",
                n.data = t,
                n.plugin = a,
                n.setRatio = $t),
            h && ((n = new Tt(l,"visibility",0,0,n,-1,null,!1,0,0 !== o ? "inherit" : "hidden",0 === e ? "hidden" : "inherit")).xs0 = "inherit",
              s._overwriteProps.push(n.n),
              s._overwriteProps.push(r)),
              n
          }
        });
        var Qt = function(t, e) {
          e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
            t.removeProperty(e.replace(O, "-$1").toLowerCase())) : t.removeAttribute(e))
        }
          , Kt = function(t) {
          if (this.t._gsClassPT = this,
          1 === t || 0 === t) {
            this.t.setAttribute("class", 0 === t ? this.b : this.e);
            for (var e = this.data, i = this.t.style; e; )
              e.v ? i[e.p] = e.v : Qt(i, e.p),
                e = e._next;
            1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
          } else
            this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
        };
        St("className", {
          parser: function(e, r, s, n, a, o, l) {
            var h, _, u, c, f, p = e.getAttribute("class") || "", m = e.style.cssText;
            if ((a = n._classNamePT = new Tt(e,s,0,0,a,2)).setRatio = Kt,
              a.pr = -11,
              t = !0,
              a.b = p,
              _ = rt(e, i),
              u = e._gsClassPT) {
              for (c = {},
                f = u.data; f; )
                c[f.p] = 1,
                  f = f._next;
              u.setRatio(1)
            }
            return e._gsClassPT = a,
              a.e = "=" !== r.charAt(1) ? r : p.replace(new RegExp("(?:\\s|^)" + r.substr(2) + "(?![\\w-])"), "") + ("+" === r.charAt(0) ? " " + r.substr(2) : ""),
              e.setAttribute("class", a.e),
              h = st(e, _, rt(e), l, c),
              e.setAttribute("class", p),
              a.data = h.firstMPT,
            e.style.cssText !== m && (e.style.cssText = m),
              a = a.xfirst = n.parse(e, h.difs, a, o)
          }
        });
        var Jt = function(t) {
          if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
            var e, i, r, s, n, a = this.t.style, l = o.transform.parse;
            if ("all" === this.e)
              a.cssText = "",
                s = !0;
            else
              for (r = (e = this.e.split(" ").join("").split(",")).length; --r > -1; )
                i = e[r],
                o[i] && (o[i].parse === l ? s = !0 : i = "transformOrigin" === i ? zt : o[i].p),
                  Qt(a, i);
            s && (Qt(a, Ft),
            (n = this.t._gsTransform) && (n.svg && (this.t.removeAttribute("data-svg-origin"),
              this.t.removeAttribute("transform")),
              delete this.t._gsTransform))
          }
        };
        for (St("clearProps", {
          parser: function(e, i, r, s, n) {
            return (n = new Tt(e,r,0,0,n,2)).setRatio = Jt,
              n.e = i,
              n.pr = -10,
              n.data = s._tween,
              t = !0,
              n
          }
        }),
          l = "bezier,throwProps,physicsProps,physics2D".split(","),
          bt = l.length; bt--; )
          kt(l[bt]);
        (l = n.prototype)._firstPT = l._lastParsedTransform = l._transform = null,
          l._onInitTween = function(r, a, l, c) {
            if (!r.nodeType)
              return !1;
            this._target = m = r,
              this._tween = l,
              this._vars = a,
              d = c,
              h = a.autoRound,
              t = !1,
              e = a.suffixMap || n.suffixMap,
              i = J(r),
              s = this._overwriteProps;
            var p, g, v, y, T, x, w, b, S, k = r.style;
            if (_ && "" === k.zIndex && ("auto" !== (p = tt(r, "zIndex", i)) && "" !== p || this._addLazySet(k, "zIndex", 0)),
            "string" == typeof a && (y = k.cssText,
              p = rt(r, i),
              k.cssText = y + ";" + a,
              p = st(r, p, rt(r)).difs,
            !W && P.test(a) && (p.opacity = parseFloat(RegExp.$1)),
              a = p,
              k.cssText = y),
              a.className ? this._firstPT = g = o.className.parse(r, a.className, "className", this, null, null, a) : this._firstPT = g = this.parse(r, a, null),
              this._transformType) {
              for (S = 3 === this._transformType,
                Ft ? u && (_ = !0,
                "" === k.zIndex && ("auto" !== (w = tt(r, "zIndex", i)) && "" !== w || this._addLazySet(k, "zIndex", 0)),
                f && this._addLazySet(k, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (S ? "visible" : "hidden"))) : k.zoom = 1,
                v = g; v && v._next; )
                v = v._next;
              b = new Tt(r,"transform",0,0,null,2),
                this._linkCSSP(b, null, v),
                b.setRatio = Ft ? Ht : Zt,
                b.data = this._transform || Gt(r, i, !0),
                b.tween = l,
                b.pr = -1,
                s.pop()
            }
            if (t) {
              for (; g; ) {
                for (x = g._next,
                  v = y; v && v.pr > g.pr; )
                  v = v._next;
                (g._prev = v ? v._prev : T) ? g._prev._next = g : y = g,
                  (g._next = v) ? v._prev = g : T = g,
                  g = x
              }
              this._firstPT = y
            }
            return !0
          }
          ,
          l.parse = function(t, r, s, n) {
            var a, l, _, u, c, f, p, g, v, y, T = t.style;
            for (a in r) {
              if (f = r[a],
                l = o[a],
              "function" != typeof f || l && l.allowFunc || (f = f(d, m)),
                l)
                s = l.parse(t, f, a, this, s, n, r);
              else {
                if ("--" === a.substr(0, 2)) {
                  this._tween._propLookup[a] = this._addTween.call(this._tween, t.style, "setProperty", J(t).getPropertyValue(a) + "", f + "", a, !1, a);
                  continue
                }
                c = tt(t, a, i) + "",
                  v = "string" == typeof f,
                  "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || v && k.test(f) ? (v || (f = ((f = pt(f)).length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"),
                    s = wt(T, a, c, f, !0, "transparent", s, 0, n)) : v && z.test(f) ? s = wt(T, a, c, f, !0, null, s, 0, n) : (p = (_ = parseFloat(c)) || 0 === _ ? c.substr((_ + "").length) : "",
                  "" !== c && "auto" !== c || ("width" === a || "height" === a ? (_ = ot(t, a, i),
                    p = "px") : "left" === a || "top" === a ? (_ = it(t, a, i),
                    p = "px") : (_ = "opacity" !== a ? 0 : 1,
                    p = "")),
                    (y = v && "=" === f.charAt(1)) ? (u = parseInt(f.charAt(0) + "1", 10),
                      f = f.substr(2),
                      u *= parseFloat(f),
                      g = f.replace(w, "")) : (u = parseFloat(f),
                      g = v ? f.replace(w, "") : ""),
                  "" === g && (g = a in e ? e[a] : p),
                    f = u || 0 === u ? (y ? u + _ : u) + g : r[a],
                  p !== g && ("" === g && "lineHeight" !== a || (u || 0 === u) && _ && (_ = et(t, a, _, p),
                    "%" === g ? (_ /= et(t, a, 100, "%") / 100,
                    !0 !== r.strictUnits && (c = _ + "%")) : "em" === g || "rem" === g || "vw" === g || "vh" === g ? _ /= et(t, a, 1, g) : "px" !== g && (u = et(t, a, u, g),
                      g = "px"),
                  y && (u || 0 === u) && (f = u + _ + g))),
                  y && (u += _),
                    !_ && 0 !== _ || !u && 0 !== u ? void 0 !== T[a] && (f || f + "" != "NaN" && null != f) ? (s = new Tt(T,a,u || _ || 0,0,s,-1,a,!1,0,c,f)).xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f : c : Z("invalid " + a + " tween value: " + r[a]) : (s = new Tt(T,a,_,u - _,s,0,a,!1 !== h && ("px" === g || "zIndex" === a),0,c,f)).xs0 = g)
              }
              n && s && !s.plugin && (s.plugin = n)
            }
            return s
          }
          ,
          l.setRatio = function(t) {
            var e, i, r, s = this._firstPT;
            if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
              if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                for (; s; ) {
                  if (e = s.c * t + s.s,
                    s.r ? e = s.r(e) : e < 1e-6 && e > -1e-6 && (e = 0),
                    s.type)
                    if (1 === s.type)
                      if (2 === (r = s.l))
                        s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                      else if (3 === r)
                        s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                      else if (4 === r)
                        s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                      else if (5 === r)
                        s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                      else {
                        for (i = s.xs0 + e + s.xs1,
                          r = 1; r < s.l; r++)
                          i += s["xn" + r] + s["xs" + (r + 1)];
                        s.t[s.p] = i
                      }
                    else
                      -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
                  else
                    s.t[s.p] = e + s.xs0;
                  s = s._next
                }
              else
                for (; s; )
                  2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t),
                    s = s._next;
            else
              for (; s; ) {
                if (2 !== s.type)
                  if (s.r && -1 !== s.type)
                    if (e = s.r(s.s + s.c),
                      s.type) {
                      if (1 === s.type) {
                        for (r = s.l,
                          i = s.xs0 + e + s.xs1,
                          r = 1; r < s.l; r++)
                          i += s["xn" + r] + s["xs" + (r + 1)];
                        s.t[s.p] = i
                      }
                    } else
                      s.t[s.p] = e + s.xs0;
                  else
                    s.t[s.p] = s.e;
                else
                  s.setRatio(t);
                s = s._next
              }
          }
          ,
          l._enableTransforms = function(t) {
            this._transform = this._transform || Gt(this._target, i, !0),
              this._transformType = this._transform.svg && Ot || !t && 3 !== this._transformType ? 2 : 3
          }
        ;
        var te = function(t) {
          this.t[this.p] = this.e,
            this.data._linkCSSP(this, this._next, null, !0)
        };
        l._addLazySet = function(t, e, i) {
          var r = this._firstPT = new Tt(t,e,0,0,this._firstPT,2);
          r.e = i,
            r.setRatio = te,
            r.data = this
        }
          ,
          l._linkCSSP = function(t, e, i, r) {
            return t && (e && (e._prev = t),
            t._next && (t._next._prev = t._prev),
              t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next,
                r = !0),
              i ? i._next = t : r || null !== this._firstPT || (this._firstPT = t),
              t._next = e,
              t._prev = i),
              t
          }
          ,
          l._mod = function(t) {
            for (var e = this._firstPT; e; )
              "function" == typeof t[e.p] && (e.r = t[e.p]),
                e = e._next
          }
          ,
          l._kill = function(t) {
            var e, i, s, n = t;
            if (t.autoAlpha || t.alpha) {
              for (i in n = {},
                t)
                n[i] = t[i];
              n.opacity = 1,
              n.autoAlpha && (n.visibility = 1)
            }
            for (t.className && (e = this._classNamePT) && ((s = e.xfirst) && s._prev ? this._linkCSSP(s._prev, e._next, s._prev._prev) : s === this._firstPT && (this._firstPT = e._next),
            e._next && this._linkCSSP(e._next, e._next._next, s._prev),
              this._classNamePT = null),
              e = this._firstPT; e; )
              e.plugin && e.plugin !== i && e.plugin._kill && (e.plugin._kill(t),
                i = e.plugin),
                e = e._next;
            return r.TweenPlugin.prototype._kill.call(this, n)
          }
        ;
        var ee = function(t, e, i) {
          var r, s, n, a;
          if (t.slice)
            for (s = t.length; --s > -1; )
              ee(t[s], e, i);
          else
            for (s = (r = t.childNodes).length; --s > -1; )
              a = (n = r[s]).type,
              n.style && (e.push(rt(n)),
              i && i.push(n)),
              1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || ee(n, e, i)
        };
        return n.cascadeTo = function(t, e, i) {
          var s, n, a, o, l = r.default.to(t, e, i), h = [l], _ = [], u = [], c = [], f = r.default._internals.reservedProps;
          for (t = l._targets || l.target,
            ee(t, _, c),
            l.render(e, !0, !0),
            ee(t, u),
            l.render(0, !0, !0),
            l._enabled(!0),
            s = c.length; --s > -1; )
            if ((n = st(c[s], _[s], u[s])).firstMPT) {
              for (a in n = n.difs,
                i)
                f[a] && (n[a] = i[a]);
              for (a in o = {},
                n)
                o[a] = _[s][a];
              h.push(r.default.fromTo(c[s], e, o, n))
            }
          return h
        }
          ,
          r.TweenPlugin.activate([n]),
          n
      }
    ), !0);
    var s = r.globals.CSSPlugin
  },
  476: function(t, e, i) {
    (function(i) {
        var r, s = t.exports && void 0 !== i ? i : this || window;
        (s._gsQueue || (s._gsQueue = [])).push((function() {
            "use strict";
            var t, e, i, r, n, a, o, l, h, _, u, c, f, p;
            s._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], (function(t, e, i) {
                var r = function(t) {
                  var e, i = [], r = t.length;
                  for (e = 0; e !== r; i.push(t[e++]))
                    ;
                  return i
                }
                  , s = function(t, e, i) {
                  var r, s, n = t.cycle;
                  for (r in n)
                    s = n[r],
                      t[r] = "function" == typeof s ? s(i, e[i], e) : s[i % s.length];
                  delete t.cycle
                }
                  , n = function(t) {
                  if ("function" == typeof t)
                    return t;
                  var e = "object" == typeof t ? t : {
                    each: t
                  }
                    , i = e.ease
                    , r = e.from || 0
                    , s = e.base || 0
                    , n = {}
                    , a = isNaN(r)
                    , o = e.axis
                    , l = {
                    center: .5,
                    end: 1
                  }[r] || 0;
                  return function(t, h, _) {
                    var u, c, f, p, m, d, g, v, y, T = (_ || e).length, x = n[T];
                    if (!x) {
                      if (!(y = "auto" === e.grid ? 0 : (e.grid || [1 / 0])[0])) {
                        for (g = -1 / 0; g < (g = _[y++].getBoundingClientRect().left) && y < T; )
                          ;
                        y--
                      }
                      for (x = n[T] = [],
                        u = a ? Math.min(y, T) * l - .5 : r % y,
                        c = a ? T * l / y - .5 : r / y | 0,
                        g = 0,
                        v = 1 / 0,
                        d = 0; d < T; d++)
                        f = d % y - u,
                          p = c - (d / y | 0),
                          x[d] = m = o ? Math.abs("y" === o ? p : f) : Math.sqrt(f * f + p * p),
                        m > g && (g = m),
                        m < v && (v = m);
                      x.max = g - v,
                        x.min = v,
                        x.v = T = e.amount || e.each * (y > T ? T - 1 : o ? "y" === o ? T / y : y : Math.max(y, T / y)) || 0,
                        x.b = T < 0 ? s - T : s
                    }
                    return T = (x[t] - x.min) / x.max,
                    x.b + (i ? i.getRatio(T) : T) * x.v
                  }
                }
                  , a = function(t, e, r) {
                  i.call(this, t, e, r),
                    this._cycle = 0,
                    this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase,
                    this._repeat = this.vars.repeat || 0,
                    this._repeatDelay = this.vars.repeatDelay || 0,
                  this._repeat && this._uncache(!0),
                    this.render = a.prototype.render
                }
                  , o = i._internals
                  , l = o.isSelector
                  , h = o.isArray
                  , _ = a.prototype = i.to({}, .1, {})
                  , u = [];
                a.version = "2.1.3",
                  _.constructor = a,
                  _.kill()._gc = !1,
                  a.killTweensOf = a.killDelayedCallsTo = i.killTweensOf,
                  a.getTweensOf = i.getTweensOf,
                  a.lagSmoothing = i.lagSmoothing,
                  a.ticker = i.ticker,
                  a.render = i.render,
                  a.distribute = n,
                  _.invalidate = function() {
                    return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase,
                      this._repeat = this.vars.repeat || 0,
                      this._repeatDelay = this.vars.repeatDelay || 0,
                      this._yoyoEase = null,
                      this._uncache(!0),
                      i.prototype.invalidate.call(this)
                  }
                  ,
                  _.updateTo = function(t, e) {
                    var r, s = this.ratio, n = this.vars.immediateRender || t.immediateRender;
                    for (r in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time,
                      this._uncache(!1),
                      this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)),
                      t)
                      this.vars[r] = t[r];
                    if (this._initted || n)
                      if (e)
                        this._initted = !1,
                        n && this.render(0, !0, !0);
                      else if (this._gc && this._enabled(!0, !1),
                      this._notifyPluginsOfEnabled && this._firstPT && i._onPluginEvent("_onDisable", this),
                      this._time / this._duration > .998) {
                        var a = this._totalTime;
                        this.render(0, !0, !1),
                          this._initted = !1,
                          this.render(a, !0, !1)
                      } else if (this._initted = !1,
                        this._init(),
                      this._time > 0 || n)
                        for (var o, l = 1 / (1 - s), h = this._firstPT; h; )
                          o = h.s + h.c,
                            h.c *= l,
                            h.s = o - h.c,
                            h = h._next;
                    return this
                  }
                  ,
                  _.render = function(t, e, r) {
                    this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
                    var s, n, a, l, h, _, u, c, f, p = this._dirty ? this.totalDuration() : this._totalDuration, m = this._time, d = this._totalTime, g = this._cycle, v = this._duration, y = this._rawPrevTime;
                    if (t >= p - 1e-8 && t >= 0 ? (this._totalTime = p,
                      this._cycle = this._repeat,
                      this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0,
                        this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v,
                        this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
                    this._reversed || (s = !0,
                      n = "onComplete",
                      r = r || this._timeline.autoRemoveChildren),
                    0 === v && (this._initted || !this.vars.lazy || r) && (this._startTime === this._timeline._duration && (t = 0),
                    (y < 0 || t <= 0 && t >= -1e-8 || 1e-8 === y && "isPause" !== this.data) && y !== t && (r = !0,
                    y > 1e-8 && (n = "onReverseComplete")),
                      this._rawPrevTime = c = !e || t || y === t ? t : 1e-8)) : t < 1e-8 ? (this._totalTime = this._time = this._cycle = 0,
                      this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                    (0 !== d || 0 === v && y > 0) && (n = "onReverseComplete",
                      s = this._reversed),
                      t > -1e-8 ? t = 0 : t < 0 && (this._active = !1,
                      0 === v && (this._initted || !this.vars.lazy || r) && (y >= 0 && (r = !0),
                        this._rawPrevTime = c = !e || t || y === t ? t : 1e-8)),
                    this._initted || (r = !0)) : (this._totalTime = this._time = t,
                    0 !== this._repeat && (l = v + this._repeatDelay,
                      this._cycle = this._totalTime / l >> 0,
                    0 !== this._cycle && this._cycle === this._totalTime / l && d <= t && this._cycle--,
                      this._time = this._totalTime - this._cycle * l,
                    this._yoyo && 0 != (1 & this._cycle) && (this._time = v - this._time,
                    (f = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== f || this._initted ? this._yoyoEase = f = !0 === f ? this._ease : f instanceof Ease ? f : Ease.map[f] : (f = this.vars.ease,
                      this._yoyoEase = f = f ? f instanceof Ease ? f : "function" == typeof f ? new Ease(f,this.vars.easeParams) : Ease.map[f] || i.defaultEase : i.defaultEase)),
                      this.ratio = f ? 1 - f.getRatio((v - this._time) / v) : 0)),
                      this._time > v ? this._time = v : this._time < 0 && (this._time = 0)),
                      this._easeType && !f ? (h = this._time / v,
                      (1 === (_ = this._easeType) || 3 === _ && h >= .5) && (h = 1 - h),
                      3 === _ && (h *= 2),
                        1 === (u = this._easePower) ? h *= h : 2 === u ? h *= h * h : 3 === u ? h *= h * h * h : 4 === u && (h *= h * h * h * h),
                        this.ratio = 1 === _ ? 1 - h : 2 === _ ? h : this._time / v < .5 ? h / 2 : 1 - h / 2) : f || (this.ratio = this._ease.getRatio(this._time / v))),
                    m !== this._time || r || g !== this._cycle) {
                      if (!this._initted) {
                        if (this._init(),
                        !this._initted || this._gc)
                          return;
                        if (!r && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))
                          return this._time = m,
                            this._totalTime = d,
                            this._rawPrevTime = y,
                            this._cycle = g,
                            o.lazyTweens.push(this),
                            void (this._lazy = [t, e]);
                        !this._time || s || f ? s && this._ease._calcEnd && !f && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / v)
                      }
                      for (!1 !== this._lazy && (this._lazy = !1),
                      this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0),
                      0 === d && (2 === this._initted && t > 0 && this._init(),
                      this._startAt && (t >= 0 ? this._startAt.render(t, !0, r) : n || (n = "_dummyGS")),
                      this.vars.onStart && (0 === this._totalTime && 0 !== v || e || this._callback("onStart"))),
                        a = this._firstPT; a; )
                        a.f ? a.t[a.p](a.c * this.ratio + a.s) : a.t[a.p] = a.c * this.ratio + a.s,
                          a = a._next;
                      this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, !0, r),
                      e || (this._totalTime !== d || n) && this._callback("onUpdate")),
                      this._cycle !== g && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")),
                      n && (this._gc && !r || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, r),
                      s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                        this._active = !1),
                      !e && this.vars[n] && this._callback(n),
                      0 === v && 1e-8 === this._rawPrevTime && 1e-8 !== c && (this._rawPrevTime = 0)))
                    } else
                      d !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
                  }
                  ,
                  a.to = function(t, e, i) {
                    return new a(t,e,i)
                  }
                  ,
                  a.from = function(t, e, i) {
                    return i.runBackwards = !0,
                      i.immediateRender = 0 != i.immediateRender,
                      new a(t,e,i)
                  }
                  ,
                  a.fromTo = function(t, e, i, r) {
                    return r.startAt = i,
                      r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender,
                      new a(t,e,r)
                  }
                  ,
                  a.staggerTo = a.allTo = function(t, e, o, _, c, f, p) {
                    var m, d, g, v, y = [], T = n(o.stagger || _), x = o.cycle, w = (o.startAt || u).cycle;
                    for (h(t) || ("string" == typeof t && (t = i.selector(t) || t),
                    l(t) && (t = r(t))),
                      m = (t = t || []).length - 1,
                      g = 0; g <= m; g++) {
                      for (v in d = {},
                        o)
                        d[v] = o[v];
                      if (x && (s(d, t, g),
                      null != d.duration && (e = d.duration,
                        delete d.duration)),
                        w) {
                        for (v in w = d.startAt = {},
                          o.startAt)
                          w[v] = o.startAt[v];
                        s(d.startAt, t, g)
                      }
                      d.delay = T(g, t[g], t) + (d.delay || 0),
                      g === m && c && (d.onComplete = function() {
                          o.onComplete && o.onComplete.apply(o.onCompleteScope || this, arguments),
                            c.apply(p || o.callbackScope || this, f || u)
                        }
                      ),
                        y[g] = new a(t[g],e,d)
                    }
                    return y
                  }
                  ,
                  a.staggerFrom = a.allFrom = function(t, e, i, r, s, n, o) {
                    return i.runBackwards = !0,
                      i.immediateRender = 0 != i.immediateRender,
                      a.staggerTo(t, e, i, r, s, n, o)
                  }
                  ,
                  a.staggerFromTo = a.allFromTo = function(t, e, i, r, s, n, o, l) {
                    return r.startAt = i,
                      r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender,
                      a.staggerTo(t, e, r, s, n, o, l)
                  }
                  ,
                  a.delayedCall = function(t, e, i, r, s) {
                    return new a(e,0,{
                      delay: t,
                      onComplete: e,
                      onCompleteParams: i,
                      callbackScope: r,
                      onReverseComplete: e,
                      onReverseCompleteParams: i,
                      immediateRender: !1,
                      useFrames: s,
                      overwrite: 0
                    })
                  }
                  ,
                  a.set = function(t, e) {
                    return new a(t,0,e)
                  }
                  ,
                  a.isTweening = function(t) {
                    return i.getTweensOf(t, !0).length > 0
                  }
                ;
                var c = function(t, e) {
                    for (var r = [], s = 0, n = t._first; n; )
                      n instanceof i ? r[s++] = n : (e && (r[s++] = n),
                        s = (r = r.concat(c(n, e))).length),
                        n = n._next;
                    return r
                  }
                  , f = a.getAllTweens = function(e) {
                    return c(t._rootTimeline, e).concat(c(t._rootFramesTimeline, e))
                  }
                ;
                a.killAll = function(t, i, r, s) {
                  null == i && (i = !0),
                  null == r && (r = !0);
                  var n, a, o, l = f(0 != s), h = l.length, _ = i && r && s;
                  for (o = 0; o < h; o++)
                    a = l[o],
                    (_ || a instanceof e || (n = a.target === a.vars.onComplete) && r || i && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
                }
                  ,
                  a.killChildTweensOf = function(t, e) {
                    if (null != t) {
                      var s, n, _, u, c, f = o.tweenLookup;
                      if ("string" == typeof t && (t = i.selector(t) || t),
                      l(t) && (t = r(t)),
                        h(t))
                        for (u = t.length; --u > -1; )
                          a.killChildTweensOf(t[u], e);
                      else {
                        for (_ in s = [],
                          f)
                          for (n = f[_].target.parentNode; n; )
                            n === t && (s = s.concat(f[_].tweens)),
                              n = n.parentNode;
                        for (c = s.length,
                          u = 0; u < c; u++)
                          e && s[u].totalTime(s[u].totalDuration()),
                            s[u]._enabled(!1, !1)
                      }
                    }
                  }
                ;
                var p = function(t, i, r, s) {
                  i = !1 !== i,
                    r = !1 !== r;
                  for (var n, a, o = f(s = !1 !== s), l = i && r && s, h = o.length; --h > -1; )
                    a = o[h],
                    (l || a instanceof e || (n = a.target === a.vars.onComplete) && r || i && !n) && a.paused(t)
                };
                return a.pauseAll = function(t, e, i) {
                  p(!0, t, e, i)
                }
                  ,
                  a.resumeAll = function(t, e, i) {
                    p(!1, t, e, i)
                  }
                  ,
                  a.globalTimeScale = function(e) {
                    var r = t._rootTimeline
                      , s = i.ticker.time;
                    return arguments.length ? (e = e || 1e-8,
                      r._startTime = s - (s - r._startTime) * r._timeScale / e,
                      r = t._rootFramesTimeline,
                      s = i.ticker.frame,
                      r._startTime = s - (s - r._startTime) * r._timeScale / e,
                      r._timeScale = t._rootTimeline._timeScale = e,
                      e) : r._timeScale
                  }
                  ,
                  _.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this.duration() ? this._time / this._duration : this.ratio
                  }
                  ,
                  _.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
                  }
                  ,
                  _.time = function(t, e) {
                    if (!arguments.length)
                      return this._time;
                    this._dirty && this.totalDuration();
                    var i = this._duration
                      , r = this._cycle
                      , s = r * (i + this._repeatDelay);
                    return t > i && (t = i),
                      this.totalTime(this._yoyo && 1 & r ? i - t + s : this._repeat ? t + s : t, e)
                  }
                  ,
                  _.duration = function(e) {
                    return arguments.length ? t.prototype.duration.call(this, e) : this._duration
                  }
                  ,
                  _.totalDuration = function(t) {
                    return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat,
                      this._dirty = !1),
                      this._totalDuration)
                  }
                  ,
                  _.repeat = function(t) {
                    return arguments.length ? (this._repeat = t,
                      this._uncache(!0)) : this._repeat
                  }
                  ,
                  _.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t,
                      this._uncache(!0)) : this._repeatDelay
                  }
                  ,
                  _.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t,
                      this) : this._yoyo
                  }
                  ,
                  a
              }
            ), !0),
              s._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], (function(t, e, i) {
                  var r = function(t) {
                    e.call(this, t);
                    var i, r, s = this.vars;
                    for (r in this._labels = {},
                      this.autoRemoveChildren = !!s.autoRemoveChildren,
                      this.smoothChildTiming = !!s.smoothChildTiming,
                      this._sortChildren = !0,
                      this._onUpdate = s.onUpdate,
                      s)
                      i = s[r],
                      l(i) && -1 !== i.join("").indexOf("{self}") && (s[r] = this._swapSelfInParams(i));
                    l(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
                  }
                    , n = i._internals
                    , a = r._internals = {}
                    , o = n.isSelector
                    , l = n.isArray
                    , h = n.lazyTweens
                    , _ = n.lazyRender
                    , u = s._gsDefine.globals
                    , c = function(t) {
                    var e, i = {};
                    for (e in t)
                      i[e] = t[e];
                    return i
                  }
                    , f = function(t, e, i) {
                    var r, s, n = t.cycle;
                    for (r in n)
                      s = n[r],
                        t[r] = "function" == typeof s ? s(i, e[i], e) : s[i % s.length];
                    delete t.cycle
                  }
                    , p = a.pauseCallback = function() {}
                    , m = function(t, e, i, r) {
                    var s = "immediateRender";
                    return s in e || (e[s] = !(i && !1 === i[s] || r)),
                      e
                  }
                    , d = function(t) {
                    if ("function" == typeof t)
                      return t;
                    var e = "object" == typeof t ? t : {
                      each: t
                    }
                      , i = e.ease
                      , r = e.from || 0
                      , s = e.base || 0
                      , n = {}
                      , a = isNaN(r)
                      , o = e.axis
                      , l = {
                      center: .5,
                      end: 1
                    }[r] || 0;
                    return function(t, h, _) {
                      var u, c, f, p, m, d, g, v, y, T = (_ || e).length, x = n[T];
                      if (!x) {
                        if (!(y = "auto" === e.grid ? 0 : (e.grid || [1 / 0])[0])) {
                          for (g = -1 / 0; g < (g = _[y++].getBoundingClientRect().left) && y < T; )
                            ;
                          y--
                        }
                        for (x = n[T] = [],
                          u = a ? Math.min(y, T) * l - .5 : r % y,
                          c = a ? T * l / y - .5 : r / y | 0,
                          g = 0,
                          v = 1 / 0,
                          d = 0; d < T; d++)
                          f = d % y - u,
                            p = c - (d / y | 0),
                            x[d] = m = o ? Math.abs("y" === o ? p : f) : Math.sqrt(f * f + p * p),
                          m > g && (g = m),
                          m < v && (v = m);
                        x.max = g - v,
                          x.min = v,
                          x.v = T = e.amount || e.each * (y > T ? T - 1 : o ? "y" === o ? T / y : y : Math.max(y, T / y)) || 0,
                          x.b = T < 0 ? s - T : s
                      }
                      return T = (x[t] - x.min) / x.max,
                      x.b + (i ? i.getRatio(T) : T) * x.v
                    }
                  }
                    , g = r.prototype = new e;
                  return r.version = "2.1.3",
                    r.distribute = d,
                    g.constructor = r,
                    g.kill()._gc = g._forcingPlayhead = g._hasPause = !1,
                    g.to = function(t, e, r, s) {
                      var n = r.repeat && u.TweenMax || i;
                      return e ? this.add(new n(t,e,r), s) : this.set(t, r, s)
                    }
                    ,
                    g.from = function(t, e, r, s) {
                      return this.add((r.repeat && u.TweenMax || i).from(t, e, m(0, r)), s)
                    }
                    ,
                    g.fromTo = function(t, e, r, s, n) {
                      var a = s.repeat && u.TweenMax || i;
                      return s = m(0, s, r),
                        e ? this.add(a.fromTo(t, e, r, s), n) : this.set(t, s, n)
                    }
                    ,
                    g.staggerTo = function(t, e, s, n, a, l, h, _) {
                      var u, p, m = new r({
                        onComplete: l,
                        onCompleteParams: h,
                        callbackScope: _,
                        smoothChildTiming: this.smoothChildTiming
                      }), g = d(s.stagger || n), v = s.startAt, y = s.cycle;
                      for ("string" == typeof t && (t = i.selector(t) || t),
                      o(t = t || []) && (t = function(t) {
                        var e, i = [], r = t.length;
                        for (e = 0; e !== r; i.push(t[e++]))
                          ;
                        return i
                      }(t)),
                        p = 0; p < t.length; p++)
                        u = c(s),
                        v && (u.startAt = c(v),
                        v.cycle && f(u.startAt, t, p)),
                        y && (f(u, t, p),
                        null != u.duration && (e = u.duration,
                          delete u.duration)),
                          m.to(t[p], e, u, g(p, t[p], t));
                      return this.add(m, a)
                    }
                    ,
                    g.staggerFrom = function(t, e, i, r, s, n, a, o) {
                      return i.runBackwards = !0,
                        this.staggerTo(t, e, m(0, i), r, s, n, a, o)
                    }
                    ,
                    g.staggerFromTo = function(t, e, i, r, s, n, a, o, l) {
                      return r.startAt = i,
                        this.staggerTo(t, e, m(0, r, i), s, n, a, o, l)
                    }
                    ,
                    g.call = function(t, e, r, s) {
                      return this.add(i.delayedCall(0, t, e, r), s)
                    }
                    ,
                    g.set = function(t, e, r) {
                      return this.add(new i(t,0,m(0, e, null, !0)), r)
                    }
                    ,
                    r.exportRoot = function(t, e) {
                      null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                      var s, n, a, o, l = new r(t), h = l._timeline;
                      for (null == e && (e = !0),
                        h._remove(l, !0),
                        l._startTime = 0,
                        l._rawPrevTime = l._time = l._totalTime = h._time,
                        a = h._first; a; )
                        o = a._next,
                        e && a instanceof i && a.target === a.vars.onComplete || ((n = a._startTime - a._delay) < 0 && (s = 1),
                          l.add(a, n)),
                          a = o;
                      return h.add(l, 0),
                      s && l.totalDuration(),
                        l
                    }
                    ,
                    g.add = function(s, n, a, o) {
                      var h, _, u, c, f, p;
                      if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, s)),
                        !(s instanceof t)) {
                        if (s instanceof Array || s && s.push && l(s)) {
                          for (a = a || "normal",
                            o = o || 0,
                            h = n,
                            _ = s.length,
                            u = 0; u < _; u++)
                            l(c = s[u]) && (c = new r({
                              tweens: c
                            })),
                              this.add(c, h),
                            "string" != typeof c && "function" != typeof c && ("sequence" === a ? h = c._startTime + c.totalDuration() / c._timeScale : "start" === a && (c._startTime -= c.delay())),
                              h += o;
                          return this._uncache(!0)
                        }
                        if ("string" == typeof s)
                          return this.addLabel(s, n);
                        if ("function" != typeof s)
                          throw "Cannot add " + s + " into the timeline; it is not a tween, timeline, function, or string.";
                        s = i.delayedCall(0, s)
                      }
                      if (e.prototype.add.call(this, s, n),
                      (s._time || !s._duration && s._initted) && (h = (this.rawTime() - s._startTime) * s._timeScale,
                      (!s._duration || Math.abs(Math.max(0, Math.min(s.totalDuration(), h))) - s._totalTime > 1e-5) && s.render(h, !1, !1)),
                      (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (p = (f = this).rawTime() > s._startTime; f._timeline; )
                          p && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1),
                            f = f._timeline;
                      return this
                    }
                    ,
                    g.remove = function(e) {
                      if (e instanceof t) {
                        this._remove(e, !1);
                        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale,
                          this
                      }
                      if (e instanceof Array || e && e.push && l(e)) {
                        for (var r = e.length; --r > -1; )
                          this.remove(e[r]);
                        return this
                      }
                      return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                    }
                    ,
                    g._remove = function(t, i) {
                      return e.prototype._remove.call(this, t, i),
                        this._last ? this._time > this.duration() && (this._time = this._duration,
                          this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
                        this
                    }
                    ,
                    g.append = function(t, e) {
                      return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                    }
                    ,
                    g.insert = g.insertMultiple = function(t, e, i, r) {
                      return this.add(t, e || 0, i, r)
                    }
                    ,
                    g.appendMultiple = function(t, e, i, r) {
                      return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, r)
                    }
                    ,
                    g.addLabel = function(t, e) {
                      return this._labels[t] = this._parseTimeOrLabel(e),
                        this
                    }
                    ,
                    g.addPause = function(t, e, r, s) {
                      var n = i.delayedCall(0, p, r, s || this);
                      return n.vars.onComplete = n.vars.onReverseComplete = e,
                        n.data = "isPause",
                        this._hasPause = !0,
                        this.add(n, t)
                    }
                    ,
                    g.removeLabel = function(t) {
                      return delete this._labels[t],
                        this
                    }
                    ,
                    g.getLabelTime = function(t) {
                      return null != this._labels[t] ? this._labels[t] : -1
                    }
                    ,
                    g._parseTimeOrLabel = function(e, i, r, s) {
                      var n, a;
                      if (s instanceof t && s.timeline === this)
                        this.remove(s);
                      else if (s && (s instanceof Array || s.push && l(s)))
                        for (a = s.length; --a > -1; )
                          s[a]instanceof t && s[a].timeline === this && this.remove(s[a]);
                      if (n = "number" != typeof e || i ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0,
                      "string" == typeof i)
                        return this._parseTimeOrLabel(i, r && "number" == typeof e && null == this._labels[i] ? e - n : 0, r);
                      if (i = i || 0,
                      "string" != typeof e || !isNaN(e) && null == this._labels[e])
                        null == e && (e = n);
                      else {
                        if (-1 === (a = e.indexOf("=")))
                          return null == this._labels[e] ? r ? this._labels[e] = n + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(a - 1) + "1", 10) * Number(e.substr(a + 1)),
                          e = a > 1 ? this._parseTimeOrLabel(e.substr(0, a - 1), 0, r) : n
                      }
                      return Number(e) + i
                    }
                    ,
                    g.seek = function(t, e) {
                      return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
                    }
                    ,
                    g.stop = function() {
                      return this.paused(!0)
                    }
                    ,
                    g.gotoAndPlay = function(t, e) {
                      return this.play(t, e)
                    }
                    ,
                    g.gotoAndStop = function(t, e) {
                      return this.pause(t, e)
                    }
                    ,
                    g.render = function(t, e, i) {
                      this._gc && this._enabled(!0, !1);
                      var r, s, n, a, o, l, u, c, f = this._time, p = this._dirty ? this.totalDuration() : this._totalDuration, m = this._startTime, d = this._timeScale, g = this._paused;
                      if (f !== this._time && (t += this._time - f),
                      this._hasPause && !this._forcingPlayhead && !e) {
                        if (t > f)
                          for (r = this._first; r && r._startTime <= t && !l; )
                            r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (l = r),
                              r = r._next;
                        else
                          for (r = this._last; r && r._startTime >= t && !l; )
                            r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (l = r),
                              r = r._prev;
                        l && (this._time = this._totalTime = t = l._startTime,
                          c = this._startTime + (this._reversed ? this._duration - t : t) / this._timeScale)
                      }
                      if (t >= p - 1e-8 && t >= 0)
                        this._totalTime = this._time = p,
                        this._reversed || this._hasPausedChild() || (s = !0,
                          a = "onComplete",
                          o = !!this._timeline.autoRemoveChildren,
                        0 === this._duration && (t <= 0 && t >= -1e-8 || this._rawPrevTime < 0 || 1e-8 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (o = !0,
                        this._rawPrevTime > 1e-8 && (a = "onReverseComplete"))),
                          this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-8,
                          t = p + 1e-4;
                      else if (t < 1e-8)
                        if (this._totalTime = this._time = 0,
                        t > -1e-8 && (t = 0),
                        (0 !== f || 0 === this._duration && 1e-8 !== this._rawPrevTime && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (a = "onReverseComplete",
                          s = this._reversed),
                        t < 0)
                          this._active = !1,
                            this._timeline.autoRemoveChildren && this._reversed ? (o = s = !0,
                              a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (o = !0),
                            this._rawPrevTime = t;
                        else {
                          if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-8,
                          0 === t && s)
                            for (r = this._first; r && 0 === r._startTime; )
                              r._duration || (s = !1),
                                r = r._next;
                          t = 0,
                          this._initted || (o = !0)
                        }
                      else
                        this._totalTime = this._time = this._rawPrevTime = t;
                      if (this._time !== f && this._first || i || o || l) {
                        if (this._initted || (this._initted = !0),
                        this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0),
                        0 === f && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")),
                        (u = this._time) >= f)
                          for (r = this._first; r && (n = r._next,
                          u === this._time && (!this._paused || g)); )
                            (r._active || r._startTime <= u && !r._paused && !r._gc) && (l === r && (this.pause(),
                              this._pauseTime = c),
                              r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)),
                              r = n;
                        else
                          for (r = this._last; r && (n = r._prev,
                          u === this._time && (!this._paused || g)); ) {
                            if (r._active || r._startTime <= f && !r._paused && !r._gc) {
                              if (l === r) {
                                for (l = r._prev; l && l.endTime() > this._time; )
                                  l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, i),
                                    l = l._prev;
                                l = null,
                                  this.pause(),
                                  this._pauseTime = c
                              }
                              r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)
                            }
                            r = n
                          }
                        this._onUpdate && (e || (h.length && _(),
                          this._callback("onUpdate"))),
                        a && (this._gc || m !== this._startTime && d === this._timeScale || (0 === this._time || p >= this.totalDuration()) && (s && (h.length && _(),
                        this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                          this._active = !1),
                        !e && this.vars[a] && this._callback(a)))
                      }
                    }
                    ,
                    g._hasPausedChild = function() {
                      for (var t = this._first; t; ) {
                        if (t._paused || t instanceof r && t._hasPausedChild())
                          return !0;
                        t = t._next
                      }
                      return !1
                    }
                    ,
                    g.getChildren = function(t, e, r, s) {
                      s = s || -9999999999;
                      for (var n = [], a = this._first, o = 0; a; )
                        a._startTime < s || (a instanceof i ? !1 !== e && (n[o++] = a) : (!1 !== r && (n[o++] = a),
                        !1 !== t && (o = (n = n.concat(a.getChildren(!0, e, r))).length))),
                          a = a._next;
                      return n
                    }
                    ,
                    g.getTweensOf = function(t, e) {
                      var r, s, n = this._gc, a = [], o = 0;
                      for (n && this._enabled(!0, !0),
                        s = (r = i.getTweensOf(t)).length; --s > -1; )
                        (r[s].timeline === this || e && this._contains(r[s])) && (a[o++] = r[s]);
                      return n && this._enabled(!1, !0),
                        a
                    }
                    ,
                    g.recent = function() {
                      return this._recent
                    }
                    ,
                    g._contains = function(t) {
                      for (var e = t.timeline; e; ) {
                        if (e === this)
                          return !0;
                        e = e.timeline
                      }
                      return !1
                    }
                    ,
                    g.shiftChildren = function(t, e, i) {
                      i = i || 0;
                      for (var r, s = this._first, n = this._labels; s; )
                        s._startTime >= i && (s._startTime += t),
                          s = s._next;
                      if (e)
                        for (r in n)
                          n[r] >= i && (n[r] += t);
                      return this._uncache(!0)
                    }
                    ,
                    g._kill = function(t, e) {
                      if (!t && !e)
                        return this._enabled(!1, !1);
                      for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), r = i.length, s = !1; --r > -1; )
                        i[r]._kill(t, e) && (s = !0);
                      return s
                    }
                    ,
                    g.clear = function(t) {
                      var e = this.getChildren(!1, !0, !0)
                        , i = e.length;
                      for (this._time = this._totalTime = 0; --i > -1; )
                        e[i]._enabled(!1, !1);
                      return !1 !== t && (this._labels = {}),
                        this._uncache(!0)
                    }
                    ,
                    g.invalidate = function() {
                      for (var e = this._first; e; )
                        e.invalidate(),
                          e = e._next;
                      return t.prototype.invalidate.call(this)
                    }
                    ,
                    g._enabled = function(t, i) {
                      if (t === this._gc)
                        for (var r = this._first; r; )
                          r._enabled(t, !0),
                            r = r._next;
                      return e.prototype._enabled.call(this, t, i)
                    }
                    ,
                    g.totalTime = function(e, i, r) {
                      this._forcingPlayhead = !0;
                      var s = t.prototype.totalTime.apply(this, arguments);
                      return this._forcingPlayhead = !1,
                        s
                    }
                    ,
                    g.duration = function(t) {
                      return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t),
                        this) : (this._dirty && this.totalDuration(),
                        this._duration)
                    }
                    ,
                    g.totalDuration = function(t) {
                      if (!arguments.length) {
                        if (this._dirty) {
                          for (var e, i, r = 0, s = this, n = s._last, a = 999999999999; n; )
                            e = n._prev,
                            n._dirty && n.totalDuration(),
                              n._startTime > a && s._sortChildren && !n._paused && !s._calculatingDuration ? (s._calculatingDuration = 1,
                                s.add(n, n._startTime - n._delay),
                                s._calculatingDuration = 0) : a = n._startTime,
                            n._startTime < 0 && !n._paused && (r -= n._startTime,
                            s._timeline.smoothChildTiming && (s._startTime += n._startTime / s._timeScale,
                              s._time -= n._startTime,
                              s._totalTime -= n._startTime,
                              s._rawPrevTime -= n._startTime),
                              s.shiftChildren(-n._startTime, !1, -9999999999),
                              a = 0),
                            (i = n._startTime + n._totalDuration / n._timeScale) > r && (r = i),
                              n = e;
                          s._duration = s._totalDuration = r,
                            s._dirty = !1
                        }
                        return this._totalDuration
                      }
                      return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                    }
                    ,
                    g.paused = function(e) {
                      if (!1 === e && this._paused)
                        for (var i = this._first; i; )
                          i._startTime === this._time && "isPause" === i.data && (i._rawPrevTime = 0),
                            i = i._next;
                      return t.prototype.paused.apply(this, arguments)
                    }
                    ,
                    g.usesFrames = function() {
                      for (var e = this._timeline; e._timeline; )
                        e = e._timeline;
                      return e === t._rootFramesTimeline
                    }
                    ,
                    g.rawTime = function(t) {
                      return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
                    }
                    ,
                    r
                }
              ), !0),
              s._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], (function(t, e, i) {
                  var r = function(e) {
                    t.call(this, e),
                      this._repeat = this.vars.repeat || 0,
                      this._repeatDelay = this.vars.repeatDelay || 0,
                      this._cycle = 0,
                      this._yoyo = !!this.vars.yoyo,
                      this._dirty = !0
                  }
                    , n = e._internals
                    , a = n.lazyTweens
                    , o = n.lazyRender
                    , l = s._gsDefine.globals
                    , h = new i(null,null,1,0)
                    , _ = r.prototype = new t;
                  return _.constructor = r,
                    _.kill()._gc = !1,
                    r.version = "2.1.3",
                    _.invalidate = function() {
                      return this._yoyo = !!this.vars.yoyo,
                        this._repeat = this.vars.repeat || 0,
                        this._repeatDelay = this.vars.repeatDelay || 0,
                        this._uncache(!0),
                        t.prototype.invalidate.call(this)
                    }
                    ,
                    _.addCallback = function(t, i, r, s) {
                      return this.add(e.delayedCall(0, t, r, s), i)
                    }
                    ,
                    _.removeCallback = function(t, e) {
                      if (t)
                        if (null == e)
                          this._kill(null, t);
                        else
                          for (var i = this.getTweensOf(t, !1), r = i.length, s = this._parseTimeOrLabel(e); --r > -1; )
                            i[r]._startTime === s && i[r]._enabled(!1, !1);
                      return this
                    }
                    ,
                    _.removePause = function(e) {
                      return this.removeCallback(t._internals.pauseCallback, e)
                    }
                    ,
                    _.tweenTo = function(t, i) {
                      i = i || {};
                      var r, s, n, a = {
                        ease: h,
                        useFrames: this.usesFrames(),
                        immediateRender: !1,
                        lazy: !1
                      }, o = i.repeat && l.TweenMax || e;
                      for (s in i)
                        a[s] = i[s];
                      return a.time = this._parseTimeOrLabel(t),
                        r = Math.abs(Number(a.time) - this._time) / this._timeScale || .001,
                        n = new o(this,r,a),
                        a.onStart = function() {
                          n.target.paused(!0),
                          n.vars.time === n.target.time() || r !== n.duration() || n.isFromTo || n.duration(Math.abs(n.vars.time - n.target.time()) / n.target._timeScale).render(n.time(), !0, !0),
                          i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || n, i.onStartParams || [])
                        }
                        ,
                        n
                    }
                    ,
                    _.tweenFromTo = function(t, e, i) {
                      i = i || {},
                        t = this._parseTimeOrLabel(t),
                        i.startAt = {
                          onComplete: this.seek,
                          onCompleteParams: [t],
                          callbackScope: this
                        },
                        i.immediateRender = !1 !== i.immediateRender;
                      var r = this.tweenTo(e, i);
                      return r.isFromTo = 1,
                        r.duration(Math.abs(r.vars.time - t) / this._timeScale || .001)
                    }
                    ,
                    _.render = function(t, e, i) {
                      this._gc && this._enabled(!0, !1);
                      var r, s, n, l, h, _, u, c, f, p = this._time, m = this._dirty ? this.totalDuration() : this._totalDuration, d = this._duration, g = this._totalTime, v = this._startTime, y = this._timeScale, T = this._rawPrevTime, x = this._paused, w = this._cycle;
                      if (p !== this._time && (t += this._time - p),
                      t >= m - 1e-8 && t >= 0)
                        this._locked || (this._totalTime = m,
                          this._cycle = this._repeat),
                        this._reversed || this._hasPausedChild() || (s = !0,
                          l = "onComplete",
                          h = !!this._timeline.autoRemoveChildren,
                        0 === this._duration && (t <= 0 && t >= -1e-8 || T < 0 || 1e-8 === T) && T !== t && this._first && (h = !0,
                        T > 1e-8 && (l = "onReverseComplete"))),
                          this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-8,
                          this._yoyo && 1 & this._cycle ? this._time = t = 0 : (this._time = d,
                            t = d + 1e-4);
                      else if (t < 1e-8)
                        if (this._locked || (this._totalTime = this._cycle = 0),
                          this._time = 0,
                        t > -1e-8 && (t = 0),
                        (0 !== p || 0 === d && 1e-8 !== T && (T > 0 || t < 0 && T >= 0) && !this._locked) && (l = "onReverseComplete",
                          s = this._reversed),
                        t < 0)
                          this._active = !1,
                            this._timeline.autoRemoveChildren && this._reversed ? (h = s = !0,
                              l = "onReverseComplete") : T >= 0 && this._first && (h = !0),
                            this._rawPrevTime = t;
                        else {
                          if (this._rawPrevTime = d || !e || t || this._rawPrevTime === t ? t : 1e-8,
                          0 === t && s)
                            for (r = this._first; r && 0 === r._startTime; )
                              r._duration || (s = !1),
                                r = r._next;
                          t = 0,
                          this._initted || (h = !0)
                        }
                      else
                        0 === d && T < 0 && (h = !0),
                          this._time = this._rawPrevTime = t,
                        this._locked || (this._totalTime = t,
                        0 !== this._repeat && (_ = d + this._repeatDelay,
                          this._cycle = this._totalTime / _ >> 0,
                        this._cycle && this._cycle === this._totalTime / _ && g <= t && this._cycle--,
                          this._time = this._totalTime - this._cycle * _,
                        this._yoyo && 1 & this._cycle && (this._time = d - this._time),
                          this._time > d ? (this._time = d,
                            t = d + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time));
                      if (this._hasPause && !this._forcingPlayhead && !e) {
                        if ((t = this._time) > p || this._repeat && w !== this._cycle)
                          for (r = this._first; r && r._startTime <= t && !u; )
                            r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (u = r),
                              r = r._next;
                        else
                          for (r = this._last; r && r._startTime >= t && !u; )
                            r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (u = r),
                              r = r._prev;
                        u && (f = this._startTime + (this._reversed ? this._duration - u._startTime : u._startTime) / this._timeScale,
                        u._startTime < d && (this._time = this._rawPrevTime = t = u._startTime,
                          this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay)))
                      }
                      if (this._cycle !== w && !this._locked) {
                        var b = this._yoyo && 0 != (1 & w)
                          , P = b === (this._yoyo && 0 != (1 & this._cycle))
                          , S = this._totalTime
                          , k = this._cycle
                          , O = this._rawPrevTime
                          , R = this._time;
                        if (this._totalTime = w * d,
                          this._cycle < w ? b = !b : this._totalTime += d,
                          this._time = p,
                          this._rawPrevTime = 0 === d ? T - 1e-4 : T,
                          this._cycle = w,
                          this._locked = !0,
                          p = b ? 0 : d,
                          this.render(p, e, 0 === d),
                        e || this._gc || this.vars.onRepeat && (this._cycle = k,
                          this._locked = !1,
                          this._callback("onRepeat")),
                        p !== this._time)
                          return;
                        if (P && (this._cycle = w,
                          this._locked = !0,
                          p = b ? d + 1e-4 : -1e-4,
                          this.render(p, !0, !1)),
                          this._locked = !1,
                        this._paused && !x)
                          return;
                        this._time = R,
                          this._totalTime = S,
                          this._cycle = k,
                          this._rawPrevTime = O
                      }
                      if (this._time !== p && this._first || i || h || u) {
                        if (this._initted || (this._initted = !0),
                        this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0),
                        0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")),
                        (c = this._time) >= p)
                          for (r = this._first; r && (n = r._next,
                          c === this._time && (!this._paused || x)); )
                            (r._active || r._startTime <= this._time && !r._paused && !r._gc) && (u === r && (this.pause(),
                              this._pauseTime = f),
                              r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)),
                              r = n;
                        else
                          for (r = this._last; r && (n = r._prev,
                          c === this._time && (!this._paused || x)); ) {
                            if (r._active || r._startTime <= p && !r._paused && !r._gc) {
                              if (u === r) {
                                for (u = r._prev; u && u.endTime() > this._time; )
                                  u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i),
                                    u = u._prev;
                                u = null,
                                  this.pause(),
                                  this._pauseTime = f
                              }
                              r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)
                            }
                            r = n
                          }
                        this._onUpdate && (e || (a.length && o(),
                          this._callback("onUpdate"))),
                        l && (this._locked || this._gc || v !== this._startTime && y === this._timeScale || (0 === this._time || m >= this.totalDuration()) && (s && (a.length && o(),
                        this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                          this._active = !1),
                        !e && this.vars[l] && this._callback(l)))
                      } else
                        g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
                    }
                    ,
                    _.getActive = function(t, e, i) {
                      var r, s, n = [], a = this.getChildren(t || null == t, e || null == t, !!i), o = 0, l = a.length;
                      for (r = 0; r < l; r++)
                        (s = a[r]).isActive() && (n[o++] = s);
                      return n
                    }
                    ,
                    _.getLabelAfter = function(t) {
                      t || 0 !== t && (t = this._time);
                      var e, i = this.getLabelsArray(), r = i.length;
                      for (e = 0; e < r; e++)
                        if (i[e].time > t)
                          return i[e].name;
                      return null
                    }
                    ,
                    _.getLabelBefore = function(t) {
                      null == t && (t = this._time);
                      for (var e = this.getLabelsArray(), i = e.length; --i > -1; )
                        if (e[i].time < t)
                          return e[i].name;
                      return null
                    }
                    ,
                    _.getLabelsArray = function() {
                      var t, e = [], i = 0;
                      for (t in this._labels)
                        e[i++] = {
                          time: this._labels[t],
                          name: t
                        };
                      return e.sort((function(t, e) {
                          return t.time - e.time
                        }
                      )),
                        e
                    }
                    ,
                    _.invalidate = function() {
                      return this._locked = !1,
                        t.prototype.invalidate.call(this)
                    }
                    ,
                    _.progress = function(t, e) {
                      return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
                    }
                    ,
                    _.totalProgress = function(t, e) {
                      return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
                    }
                    ,
                    _.totalDuration = function(e) {
                      return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this),
                        this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),
                        this._totalDuration)
                    }
                    ,
                    _.time = function(t, e) {
                      if (!arguments.length)
                        return this._time;
                      this._dirty && this.totalDuration();
                      var i = this._duration
                        , r = this._cycle
                        , s = r * (i + this._repeatDelay);
                      return t > i && (t = i),
                        this.totalTime(this._yoyo && 1 & r ? i - t + s : this._repeat ? t + s : t, e)
                    }
                    ,
                    _.repeat = function(t) {
                      return arguments.length ? (this._repeat = t,
                        this._uncache(!0)) : this._repeat
                    }
                    ,
                    _.repeatDelay = function(t) {
                      return arguments.length ? (this._repeatDelay = t,
                        this._uncache(!0)) : this._repeatDelay
                    }
                    ,
                    _.yoyo = function(t) {
                      return arguments.length ? (this._yoyo = t,
                        this) : this._yoyo
                    }
                    ,
                    _.currentLabel = function(t) {
                      return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                    }
                    ,
                    r
                }
              ), !0),
              t = 180 / Math.PI,
              e = [],
              i = [],
              r = [],
              n = {},
              a = s._gsDefine.globals,
              o = function(t, e, i, r) {
                i === r && (i = r - (r - e) / 1e6),
                t === e && (e = t + (i - t) / 1e6),
                  this.a = t,
                  this.b = e,
                  this.c = i,
                  this.d = r,
                  this.da = r - t,
                  this.ca = i - t,
                  this.ba = e - t
              }
              ,
              l = function(t, e, i, r) {
                var s = {
                  a: t
                }
                  , n = {}
                  , a = {}
                  , o = {
                  c: r
                }
                  , l = (t + e) / 2
                  , h = (e + i) / 2
                  , _ = (i + r) / 2
                  , u = (l + h) / 2
                  , c = (h + _) / 2
                  , f = (c - u) / 8;
                return s.b = l + (t - l) / 4,
                  n.b = u + f,
                  s.c = n.a = (s.b + n.b) / 2,
                  n.c = a.a = (u + c) / 2,
                  a.b = c - f,
                  o.b = _ + (r - _) / 4,
                  a.c = o.a = (a.b + o.b) / 2,
                  [s, n, a, o]
              }
              ,
              h = function(t, s, n, a, o) {
                var h, _, u, c, f, p, m, d, g, v, y, T, x, w = t.length - 1, b = 0, P = t[0].a;
                for (h = 0; h < w; h++)
                  _ = (f = t[b]).a,
                    u = f.d,
                    c = t[b + 1].d,
                    o ? (y = e[h],
                      x = ((T = i[h]) + y) * s * .25 / (a ? .5 : r[h] || .5),
                      d = u - ((p = u - (u - _) * (a ? .5 * s : 0 !== y ? x / y : 0)) + (((m = u + (c - u) * (a ? .5 * s : 0 !== T ? x / T : 0)) - p) * (3 * y / (y + T) + .5) / 4 || 0))) : d = u - ((p = u - (u - _) * s * .5) + (m = u + (c - u) * s * .5)) / 2,
                    p += d,
                    m += d,
                    f.c = g = p,
                    f.b = 0 !== h ? P : P = f.a + .6 * (f.c - f.a),
                    f.da = u - _,
                    f.ca = g - _,
                    f.ba = P - _,
                    n ? (v = l(_, P, g, u),
                      t.splice(b, 1, v[0], v[1], v[2], v[3]),
                      b += 4) : b++,
                    P = m;
                (f = t[b]).b = P,
                  f.c = P + .4 * (f.d - P),
                  f.da = f.d - f.a,
                  f.ca = f.c - f.a,
                  f.ba = P - f.a,
                n && (v = l(f.a, P, f.c, f.d),
                  t.splice(b, 1, v[0], v[1], v[2], v[3]))
              }
              ,
              _ = function(t, r, s, n) {
                var a, l, h, _, u, c, f = [];
                if (n)
                  for (l = (t = [n].concat(t)).length; --l > -1; )
                    "string" == typeof (c = t[l][r]) && "=" === c.charAt(1) && (t[l][r] = n[r] + Number(c.charAt(0) + c.substr(2)));
                if ((a = t.length - 2) < 0)
                  return f[0] = new o(t[0][r],0,0,t[0][r]),
                    f;
                for (l = 0; l < a; l++)
                  h = t[l][r],
                    _ = t[l + 1][r],
                    f[l] = new o(h,0,0,_),
                  s && (u = t[l + 2][r],
                    e[l] = (e[l] || 0) + (_ - h) * (_ - h),
                    i[l] = (i[l] || 0) + (u - _) * (u - _));
                return f[l] = new o(t[l][r],0,0,t[l + 1][r]),
                  f
              }
              ,
              u = function(t, s, a, o, l, u) {
                var c, f, p, m, d, g, v, y, T = {}, x = [], w = u || t[0];
                for (f in l = "string" == typeof l ? "," + l + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
                null == s && (s = 1),
                  t[0])
                  x.push(f);
                if (t.length > 1) {
                  for (y = t[t.length - 1],
                    v = !0,
                    c = x.length; --c > -1; )
                    if (f = x[c],
                    Math.abs(w[f] - y[f]) > .05) {
                      v = !1;
                      break
                    }
                  v && (t = t.concat(),
                  u && t.unshift(u),
                    t.push(t[1]),
                    u = t[t.length - 3])
                }
                for (e.length = i.length = r.length = 0,
                  c = x.length; --c > -1; )
                  f = x[c],
                    n[f] = -1 !== l.indexOf("," + f + ","),
                    T[f] = _(t, f, n[f], u);
                for (c = e.length; --c > -1; )
                  e[c] = Math.sqrt(e[c]),
                    i[c] = Math.sqrt(i[c]);
                if (!o) {
                  for (c = x.length; --c > -1; )
                    if (n[f])
                      for (g = (p = T[x[c]]).length - 1,
                        m = 0; m < g; m++)
                        d = p[m + 1].da / i[m] + p[m].da / e[m] || 0,
                          r[m] = (r[m] || 0) + d * d;
                  for (c = r.length; --c > -1; )
                    r[c] = Math.sqrt(r[c])
                }
                for (c = x.length,
                  m = a ? 4 : 1; --c > -1; )
                  p = T[f = x[c]],
                    h(p, s, a, o, n[f]),
                  v && (p.splice(0, m),
                    p.splice(p.length - m, m));
                return T
              }
              ,
              c = function(t, e, i) {
                for (var r, s, n, a, o, l, h, _, u, c, f, p = 1 / i, m = t.length; --m > -1; )
                  for (n = (c = t[m]).a,
                    a = c.d - n,
                    o = c.c - n,
                    l = c.b - n,
                    r = s = 0,
                    _ = 1; _ <= i; _++)
                    r = s - (s = ((h = p * _) * h * a + 3 * (u = 1 - h) * (h * o + u * l)) * h),
                      e[f = m * i + _ - 1] = (e[f] || 0) + r * r
              }
              ,
              f = s._gsDefine.plugin({
                propName: "bezier",
                priority: -1,
                version: "1.3.9",
                API: 2,
                global: !0,
                init: function(t, e, i) {
                  this._target = t,
                  e instanceof Array && (e = {
                    values: e
                  }),
                    this._func = {},
                    this._mod = {},
                    this._props = [],
                    this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
                  var r, s, n, a, l, h = e.values || [], _ = {}, f = h[0], p = e.autoRotate || i.vars.orientToBezier;
                  for (r in this._autoRotate = p ? p instanceof Array ? p : [["x", "y", "rotation", !0 === p ? 0 : Number(p) || 0]] : null,
                    f)
                    this._props.push(r);
                  for (n = this._props.length; --n > -1; )
                    r = this._props[n],
                      this._overwriteProps.push(r),
                      s = this._func[r] = "function" == typeof t[r],
                      _[r] = s ? t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(t[r]),
                    l || _[r] !== h[0][r] && (l = _);
                  if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? u(h, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, l) : function(t, e, i) {
                    var r, s, n, a, l, h, _, u, c, f, p, m = {}, d = "cubic" === (e = e || "soft") ? 3 : 2, g = "soft" === e, v = [];
                    if (g && i && (t = [i].concat(t)),
                    null == t || t.length < d + 1)
                      throw "invalid Bezier data";
                    for (c in t[0])
                      v.push(c);
                    for (h = v.length; --h > -1; ) {
                      for (m[c = v[h]] = l = [],
                        f = 0,
                        u = t.length,
                        _ = 0; _ < u; _++)
                        r = null == i ? t[_][c] : "string" == typeof (p = t[_][c]) && "=" === p.charAt(1) ? i[c] + Number(p.charAt(0) + p.substr(2)) : Number(p),
                        g && _ > 1 && _ < u - 1 && (l[f++] = (r + l[f - 2]) / 2),
                          l[f++] = r;
                      for (u = f - d + 1,
                        f = 0,
                        _ = 0; _ < u; _ += d)
                        r = l[_],
                          s = l[_ + 1],
                          n = l[_ + 2],
                          a = 2 === d ? 0 : l[_ + 3],
                          l[f++] = p = 3 === d ? new o(r,s,n,a) : new o(r,(2 * s + r) / 3,(2 * s + n) / 3,n);
                      l.length = f
                    }
                    return m
                  }(h, e.type, _),
                    this._segCount = this._beziers[r].length,
                    this._timeRes) {
                    var m = function(t, e) {
                      var i, r, s, n, a = [], o = [], l = 0, h = 0, _ = (e = e >> 0 || 6) - 1, u = [], f = [];
                      for (i in t)
                        c(t[i], a, e);
                      for (s = a.length,
                        r = 0; r < s; r++)
                        l += Math.sqrt(a[r]),
                          f[n = r % e] = l,
                        n === _ && (h += l,
                          u[n = r / e >> 0] = f,
                          o[n] = h,
                          l = 0,
                          f = []);
                      return {
                        length: h,
                        lengths: o,
                        segments: u
                      }
                    }(this._beziers, this._timeRes);
                    this._length = m.length,
                      this._lengths = m.lengths,
                      this._segments = m.segments,
                      this._l1 = this._li = this._s1 = this._si = 0,
                      this._l2 = this._lengths[0],
                      this._curSeg = this._segments[0],
                      this._s2 = this._curSeg[0],
                      this._prec = 1 / this._curSeg.length
                  }
                  if (p = this._autoRotate)
                    for (this._initialRotations = [],
                    p[0]instanceof Array || (this._autoRotate = p = [p]),
                      n = p.length; --n > -1; ) {
                      for (a = 0; a < 3; a++)
                        r = p[n][a],
                          this._func[r] = "function" == typeof t[r] && t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)];
                      r = p[n][2],
                        this._initialRotations[n] = (this._func[r] ? this._func[r].call(this._target) : this._target[r]) || 0,
                        this._overwriteProps.push(r)
                    }
                  return this._startRatio = i.vars.runBackwards ? 1 : 0,
                    !0
                },
                set: function(e) {
                  var i, r, s, n, a, o, l, h, _, u, c, f = this._segCount, p = this._func, m = this._target, d = e !== this._startRatio;
                  if (this._timeRes) {
                    if (_ = this._lengths,
                      u = this._curSeg,
                      c = e * this._length,
                      s = this._li,
                    c > this._l2 && s < f - 1) {
                      for (h = f - 1; s < h && (this._l2 = _[++s]) <= c; )
                        ;
                      this._l1 = _[s - 1],
                        this._li = s,
                        this._curSeg = u = this._segments[s],
                        this._s2 = u[this._s1 = this._si = 0]
                    } else if (c < this._l1 && s > 0) {
                      for (; s > 0 && (this._l1 = _[--s]) >= c; )
                        ;
                      0 === s && c < this._l1 ? this._l1 = 0 : s++,
                        this._l2 = _[s],
                        this._li = s,
                        this._curSeg = u = this._segments[s],
                        this._s1 = u[(this._si = u.length - 1) - 1] || 0,
                        this._s2 = u[this._si]
                    }
                    if (i = s,
                      c -= this._l1,
                      s = this._si,
                    c > this._s2 && s < u.length - 1) {
                      for (h = u.length - 1; s < h && (this._s2 = u[++s]) <= c; )
                        ;
                      this._s1 = u[s - 1],
                        this._si = s
                    } else if (c < this._s1 && s > 0) {
                      for (; s > 0 && (this._s1 = u[--s]) >= c; )
                        ;
                      0 === s && c < this._s1 ? this._s1 = 0 : s++,
                        this._s2 = u[s],
                        this._si = s
                    }
                    o = 1 === e ? 1 : (s + (c - this._s1) / (this._s2 - this._s1)) * this._prec || 0
                  } else
                    o = (e - (i = e < 0 ? 0 : e >= 1 ? f - 1 : f * e >> 0) * (1 / f)) * f;
                  for (r = 1 - o,
                    s = this._props.length; --s > -1; )
                    n = this._props[s],
                      l = (o * o * (a = this._beziers[n][i]).da + 3 * r * (o * a.ca + r * a.ba)) * o + a.a,
                    this._mod[n] && (l = this._mod[n](l, m)),
                      p[n] ? m[n](l) : m[n] = l;
                  if (this._autoRotate) {
                    var g, v, y, T, x, w, b, P = this._autoRotate;
                    for (s = P.length; --s > -1; )
                      n = P[s][2],
                        w = P[s][3] || 0,
                        b = !0 === P[s][4] ? 1 : t,
                        a = this._beziers[P[s][0]],
                        g = this._beziers[P[s][1]],
                      a && g && (a = a[i],
                        g = g[i],
                        v = a.a + (a.b - a.a) * o,
                        v += ((T = a.b + (a.c - a.b) * o) - v) * o,
                        T += (a.c + (a.d - a.c) * o - T) * o,
                        y = g.a + (g.b - g.a) * o,
                        y += ((x = g.b + (g.c - g.b) * o) - y) * o,
                        x += (g.c + (g.d - g.c) * o - x) * o,
                        l = d ? Math.atan2(x - y, T - v) * b + w : this._initialRotations[s],
                      this._mod[n] && (l = this._mod[n](l, m)),
                        p[n] ? m[n](l) : m[n] = l)
                  }
                }
              }),
              p = f.prototype,
              f.bezierThrough = u,
              f.cubicToQuadratic = l,
              f._autoCSS = !0,
              f.quadraticToCubic = function(t, e, i) {
                return new o(t,(2 * e + t) / 3,(2 * e + i) / 3,i)
              }
              ,
              f._cssRegister = function() {
                var t = a.CSSPlugin;
                if (t) {
                  var e = t._internals
                    , i = e._parseToProxy
                    , r = e._setPluginRatio
                    , s = e.CSSPropTween;
                  e._registerComplexSpecialProp("bezier", {
                    parser: function(t, e, n, a, o, l) {
                      e instanceof Array && (e = {
                        values: e
                      }),
                        l = new f;
                      var h, _, u, c = e.values, p = c.length - 1, m = [], d = {};
                      if (p < 0)
                        return o;
                      for (h = 0; h <= p; h++)
                        u = i(t, c[h], a, o, l, p !== h),
                          m[h] = u.end;
                      for (_ in e)
                        d[_] = e[_];
                      return d.values = m,
                        (o = new s(t,"bezier",0,0,u.pt,2)).data = u,
                        o.plugin = l,
                        o.setRatio = r,
                      0 === d.autoRotate && (d.autoRotate = !0),
                      !d.autoRotate || d.autoRotate instanceof Array || (h = !0 === d.autoRotate ? 0 : Number(d.autoRotate),
                        d.autoRotate = null != u.end.left ? [["left", "top", "rotation", h, !1]] : null != u.end.x && [["x", "y", "rotation", h, !1]]),
                      d.autoRotate && (a._transform || a._enableTransforms(!1),
                        u.autoRotate = a._target._gsTransform,
                        u.proxy.rotation = u.autoRotate.rotation || 0,
                        a._overwriteProps.push("rotation")),
                        l._onInitTween(u.proxy, d, a._tween),
                        o
                    }
                  })
                }
              }
              ,
              p._mod = function(t) {
                for (var e, i = this._overwriteProps, r = i.length; --r > -1; )
                  (e = t[i[r]]) && "function" == typeof e && (this._mod[i[r]] = e)
              }
              ,
              p._kill = function(t) {
                var e, i, r = this._props;
                for (e in this._beziers)
                  if (e in t)
                    for (delete this._beziers[e],
                      delete this._func[e],
                      i = r.length; --i > -1; )
                      r[i] === e && r.splice(i, 1);
                if (r = this._autoRotate)
                  for (i = r.length; --i > -1; )
                    t[r[i][2]] && r.splice(i, 1);
                return this._super._kill.call(this, t)
              }
              ,
              s._gsDefine("plugins.CSSPlugin", ["plugins.TweenPlugin", "TweenLite"], (function(t, e) {
                  var i, r, n, a, o = function() {
                    t.call(this, "css"),
                      this._overwriteProps.length = 0,
                      this.setRatio = o.prototype.setRatio
                  }, l = s._gsDefine.globals, h = {}, _ = o.prototype = new t("css");
                  _.constructor = o,
                    o.version = "2.1.3",
                    o.API = 2,
                    o.defaultTransformPerspective = 0,
                    o.defaultSkewType = "compensated",
                    o.defaultSmoothOrigin = !0,
                    _ = "px",
                    o.suffixMap = {
                      top: _,
                      right: _,
                      bottom: _,
                      left: _,
                      width: _,
                      height: _,
                      fontSize: _,
                      padding: _,
                      margin: _,
                      perspective: _,
                      lineHeight: ""
                    };
                  var u, c, f, p, m, d, g, v, y = /(?:\-|\.|\b)(\d|\.|e\-)+/g, T = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g, x = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi, w = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b),?/gi, b = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g, P = /(?:\d|\-|\+|=|#|\.)*/g, S = /opacity *= *([^)]*)/i, k = /opacity:([^;]*)/i, O = /alpha\(opacity *=.+?\)/i, R = /^(rgb|hsl)/, C = /([A-Z])/g, A = /-([a-z])/gi, D = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi, M = function(t, e) {
                    return e.toUpperCase()
                  }, F = /(?:Left|Right|Width)/i, E = /(M11|M12|M21|M22)=[\d\-\.e]+/gi, z = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i, L = /,(?=[^\)]*(?:\(|$))/gi, I = /[\s,\(]/i, N = Math.PI / 180, X = 180 / Math.PI, B = {}, j = {
                    style: {}
                  }, Y = s.document || {
                    createElement: function() {
                      return j
                    }
                  }, U = function(t, e) {
                    var i = Y.createElementNS ? Y.createElementNS(e || "http://www.w3.org/1999/xhtml", t) : Y.createElement(t);
                    return i.style ? i : Y.createElement(t)
                  }, V = U("div"), q = U("img"), W = o._internals = {
                    _specialProps: h
                  }, G = (s.navigator || {}).userAgent || "", Z = function() {
                    var t = G.indexOf("Android")
                      , e = U("a");
                    return f = -1 !== G.indexOf("Safari") && -1 === G.indexOf("Chrome") && (-1 === t || parseFloat(G.substr(t + 8, 2)) > 3),
                      m = f && parseFloat(G.substr(G.indexOf("Version/") + 8, 2)) < 6,
                      p = -1 !== G.indexOf("Firefox"),
                    (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(G) || /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(G)) && (d = parseFloat(RegExp.$1)),
                    !!e && (e.style.cssText = "top:1px;opacity:.55;",
                      /^0.55/.test(e.style.opacity))
                  }(), H = function(t) {
                    return S.test("string" == typeof t ? t : (t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? parseFloat(RegExp.$1) / 100 : 1
                  }, $ = function(t) {
                    s.console && console.log(t)
                  }, Q = "", K = "", J = function(t, e) {
                    var i, r, s = (e = e || V).style;
                    if (void 0 !== s[t])
                      return t;
                    for (t = t.charAt(0).toUpperCase() + t.substr(1),
                      i = ["O", "Moz", "ms", "Ms", "Webkit"],
                      r = 5; --r > -1 && void 0 === s[i[r] + t]; )
                      ;
                    return r >= 0 ? (Q = "-" + (K = 3 === r ? "ms" : i[r]).toLowerCase() + "-",
                    K + t) : null
                  }, tt = "undefined" != typeof window ? window : Y.defaultView || {
                    getComputedStyle: function() {}
                  }, et = function(t) {
                    return tt.getComputedStyle(t)
                  }, it = o.getStyle = function(t, e, i, r, s) {
                    var n;
                    return Z || "opacity" !== e ? (!r && t.style[e] ? n = t.style[e] : (i = i || et(t)) ? n = i[e] || i.getPropertyValue(e) || i.getPropertyValue(e.replace(C, "-$1").toLowerCase()) : t.currentStyle && (n = t.currentStyle[e]),
                      null == s || n && "none" !== n && "auto" !== n && "auto auto" !== n ? n : s) : H(t)
                  }
                    , rt = W.convertToPixels = function(t, i, r, s, n) {
                    if ("px" === s || !s && "lineHeight" !== i)
                      return r;
                    if ("auto" === s || !r)
                      return 0;
                    var a, l, h, _ = F.test(i), u = t, c = V.style, f = r < 0, p = 1 === r;
                    if (f && (r = -r),
                    p && (r *= 100),
                    "lineHeight" !== i || s)
                      if ("%" === s && -1 !== i.indexOf("border"))
                        a = r / 100 * (_ ? t.clientWidth : t.clientHeight);
                      else {
                        if (c.cssText = "border:0 solid red;position:" + it(t, "position") + ";line-height:0;",
                        "%" !== s && u.appendChild && "v" !== s.charAt(0) && "rem" !== s)
                          c[_ ? "borderLeftWidth" : "borderTopWidth"] = r + s;
                        else {
                          if (u = t.parentNode || Y.body,
                          -1 !== it(u, "display").indexOf("flex") && (c.position = "absolute"),
                            l = u._gsCache,
                            h = e.ticker.frame,
                          l && _ && l.time === h)
                            return l.width * r / 100;
                          c[_ ? "width" : "height"] = r + s
                        }
                        u.appendChild(V),
                          a = parseFloat(V[_ ? "offsetWidth" : "offsetHeight"]),
                          u.removeChild(V),
                        _ && "%" === s && !1 !== o.cacheWidths && ((l = u._gsCache = u._gsCache || {}).time = h,
                          l.width = a / r * 100),
                        0 !== a || n || (a = rt(t, i, r, s, !0))
                      }
                    else
                      l = et(t).lineHeight,
                        t.style.lineHeight = r,
                        a = parseFloat(et(t).lineHeight),
                        t.style.lineHeight = l;
                    return p && (a /= 100),
                      f ? -a : a
                  }
                    , st = W.calculateOffset = function(t, e, i) {
                    if ("absolute" !== it(t, "position", i))
                      return 0;
                    var r = "left" === e ? "Left" : "Top"
                      , s = it(t, "margin" + r, i);
                    return t["offset" + r] - (rt(t, e, parseFloat(s), s.replace(P, "")) || 0)
                  }
                    , nt = function(t, e) {
                    var i, r, s, n = {};
                    if (e = e || et(t))
                      if (i = e.length)
                        for (; --i > -1; )
                          -1 !== (s = e[i]).indexOf("-transform") && Lt !== s || (n[s.replace(A, M)] = e.getPropertyValue(s));
                      else
                        for (i in e)
                          -1 !== i.indexOf("Transform") && zt !== i || (n[i] = e[i]);
                    else if (e = t.currentStyle || t.style)
                      for (i in e)
                        "string" == typeof i && void 0 === n[i] && (n[i.replace(A, M)] = e[i]);
                    return Z || (n.opacity = H(t)),
                      r = Ht(t, e, !1),
                      n.rotation = r.rotation,
                      n.skewX = r.skewX,
                      n.scaleX = r.scaleX,
                      n.scaleY = r.scaleY,
                      n.x = r.x,
                      n.y = r.y,
                    Nt && (n.z = r.z,
                      n.rotationX = r.rotationX,
                      n.rotationY = r.rotationY,
                      n.scaleZ = r.scaleZ),
                    n.filters && delete n.filters,
                      n
                  }, at = function(t, e, i, r, s) {
                    var n, a, o, l = {}, h = t.style;
                    for (a in i)
                      "cssText" !== a && "length" !== a && isNaN(a) && (e[a] !== (n = i[a]) || s && s[a]) && -1 === a.indexOf("Origin") && ("number" != typeof n && "string" != typeof n || (l[a] = "auto" !== n || "left" !== a && "top" !== a ? "" !== n && "auto" !== n && "none" !== n || "string" != typeof e[a] || "" === e[a].replace(b, "") ? n : 0 : st(t, a),
                      void 0 !== h[a] && (o = new xt(h,a,h[a],o))));
                    if (r)
                      for (a in r)
                        "className" !== a && (l[a] = r[a]);
                    return {
                      difs: l,
                      firstMPT: o
                    }
                  }, ot = {
                    width: ["Left", "Right"],
                    height: ["Top", "Bottom"]
                  }, lt = ["marginLeft", "marginRight", "marginTop", "marginBottom"], ht = function(t, e, i) {
                    if ("svg" === (t.nodeName + "").toLowerCase())
                      return (i || et(t))[e] || 0;
                    if (t.getCTM && Wt(t))
                      return t.getBBox()[e] || 0;
                    var r = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight)
                      , s = ot[e]
                      , n = s.length;
                    for (i = i || et(t); --n > -1; )
                      r -= parseFloat(it(t, "padding" + s[n], i, !0)) || 0,
                        r -= parseFloat(it(t, "border" + s[n] + "Width", i, !0)) || 0;
                    return r
                  }, _t = function(t, e) {
                    if ("contain" === t || "auto" === t || "auto auto" === t)
                      return t + " ";
                    null != t && "" !== t || (t = "0 0");
                    var i, r = t.split(" "), s = -1 !== t.indexOf("left") ? "0%" : -1 !== t.indexOf("right") ? "100%" : r[0], n = -1 !== t.indexOf("top") ? "0%" : -1 !== t.indexOf("bottom") ? "100%" : r[1];
                    if (r.length > 3 && !e) {
                      for (r = t.split(", ").join(",").split(","),
                        t = [],
                        i = 0; i < r.length; i++)
                        t.push(_t(r[i]));
                      return t.join(",")
                    }
                    return null == n ? n = "center" === s ? "50%" : "0" : "center" === n && (n = "50%"),
                    ("center" === s || isNaN(parseFloat(s)) && -1 === (s + "").indexOf("=")) && (s = "50%"),
                      t = s + " " + n + (r.length > 2 ? " " + r[2] : ""),
                    e && (e.oxp = -1 !== s.indexOf("%"),
                      e.oyp = -1 !== n.indexOf("%"),
                      e.oxr = "=" === s.charAt(1),
                      e.oyr = "=" === n.charAt(1),
                      e.ox = parseFloat(s.replace(b, "")),
                      e.oy = parseFloat(n.replace(b, "")),
                      e.v = t),
                    e || t
                  }, ut = function(t, e) {
                    return "function" == typeof t && (t = t(v, g)),
                      "string" == typeof t && "=" === t.charAt(1) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) : parseFloat(t) - parseFloat(e) || 0
                  }, ct = function(t, e) {
                    "function" == typeof t && (t = t(v, g));
                    var i = "string" == typeof t && "=" === t.charAt(1);
                    return "string" == typeof t && "v" === t.charAt(t.length - 2) && (t = (i ? t.substr(0, 2) : 0) + window["inner" + ("vh" === t.substr(-2) ? "Height" : "Width")] * (parseFloat(i ? t.substr(2) : t) / 100)),
                      null == t ? e : i ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e : parseFloat(t) || 0
                  }, ft = function(t, e, i, r) {
                    var s, n, a, o;
                    return "function" == typeof t && (t = t(v, g)),
                      null == t ? a = e : "number" == typeof t ? a = t : (360,
                        s = t.split("_"),
                        n = ((o = "=" === t.charAt(1)) ? parseInt(t.charAt(0) + "1", 10) * parseFloat(s[0].substr(2)) : parseFloat(s[0])) * (-1 === t.indexOf("rad") ? 1 : X) - (o ? 0 : e),
                      s.length && (r && (r[i] = e + n),
                      -1 !== t.indexOf("short") && (n %= 360) !== n % 180 && (n = n < 0 ? n + 360 : n - 360),
                        -1 !== t.indexOf("_cw") && n < 0 ? n = (n + 3599999999640) % 360 - 360 * (n / 360 | 0) : -1 !== t.indexOf("ccw") && n > 0 && (n = (n - 3599999999640) % 360 - 360 * (n / 360 | 0))),
                        a = e + n),
                    a < 1e-6 && a > -1e-6 && (a = 0),
                      a
                  }, pt = {
                    aqua: [0, 255, 255],
                    lime: [0, 255, 0],
                    silver: [192, 192, 192],
                    black: [0, 0, 0],
                    maroon: [128, 0, 0],
                    teal: [0, 128, 128],
                    blue: [0, 0, 255],
                    navy: [0, 0, 128],
                    white: [255, 255, 255],
                    fuchsia: [255, 0, 255],
                    olive: [128, 128, 0],
                    yellow: [255, 255, 0],
                    orange: [255, 165, 0],
                    gray: [128, 128, 128],
                    purple: [128, 0, 128],
                    green: [0, 128, 0],
                    red: [255, 0, 0],
                    pink: [255, 192, 203],
                    cyan: [0, 255, 255],
                    transparent: [255, 255, 255, 0]
                  }, mt = function(t, e, i) {
                    return 255 * (6 * (t = t < 0 ? t + 1 : t > 1 ? t - 1 : t) < 1 ? e + (i - e) * t * 6 : t < .5 ? i : 3 * t < 2 ? e + (i - e) * (2 / 3 - t) * 6 : e) + .5 | 0
                  }, dt = o.parseColor = function(t, e) {
                    var i, r, s, n, a, o, l, h, _, u, c;
                    if (t)
                      if ("number" == typeof t)
                        i = [t >> 16, t >> 8 & 255, 255 & t];
                      else {
                        if ("," === t.charAt(t.length - 1) && (t = t.substr(0, t.length - 1)),
                          pt[t])
                          i = pt[t];
                        else if ("#" === t.charAt(0))
                          4 === t.length && (r = t.charAt(1),
                            s = t.charAt(2),
                            n = t.charAt(3),
                            t = "#" + r + r + s + s + n + n),
                            i = [(t = parseInt(t.substr(1), 16)) >> 16, t >> 8 & 255, 255 & t];
                        else if ("hsl" === t.substr(0, 3))
                          if (i = c = t.match(y),
                            e) {
                            if (-1 !== t.indexOf("="))
                              return t.match(T)
                          } else
                            a = Number(i[0]) % 360 / 360,
                              o = Number(i[1]) / 100,
                              r = 2 * (l = Number(i[2]) / 100) - (s = l <= .5 ? l * (o + 1) : l + o - l * o),
                            i.length > 3 && (i[3] = Number(i[3])),
                              i[0] = mt(a + 1 / 3, r, s),
                              i[1] = mt(a, r, s),
                              i[2] = mt(a - 1 / 3, r, s);
                        else
                          i = t.match(y) || pt.transparent;
                        i[0] = Number(i[0]),
                          i[1] = Number(i[1]),
                          i[2] = Number(i[2]),
                        i.length > 3 && (i[3] = Number(i[3]))
                      }
                    else
                      i = pt.black;
                    return e && !c && (r = i[0] / 255,
                      s = i[1] / 255,
                      n = i[2] / 255,
                      l = ((h = Math.max(r, s, n)) + (_ = Math.min(r, s, n))) / 2,
                      h === _ ? a = o = 0 : (u = h - _,
                        o = l > .5 ? u / (2 - h - _) : u / (h + _),
                        a = h === r ? (s - n) / u + (s < n ? 6 : 0) : h === s ? (n - r) / u + 2 : (r - s) / u + 4,
                        a *= 60),
                      i[0] = a + .5 | 0,
                      i[1] = 100 * o + .5 | 0,
                      i[2] = 100 * l + .5 | 0),
                      i
                  }
                    , gt = function(t, e) {
                    var i, r, s, n = t.match(vt) || [], a = 0, o = "";
                    if (!n.length)
                      return t;
                    for (i = 0; i < n.length; i++)
                      r = n[i],
                        a += (s = t.substr(a, t.indexOf(r, a) - a)).length + r.length,
                      3 === (r = dt(r, e)).length && r.push(1),
                        o += s + (e ? "hsla(" + r[0] + "," + r[1] + "%," + r[2] + "%," + r[3] : "rgba(" + r.join(",")) + ")";
                    return o + t.substr(a)
                  }, vt = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";
                  for (_ in pt)
                    vt += "|" + _ + "\\b";
                  vt = new RegExp(vt + ")","gi"),
                    o.colorStringFilter = function(t) {
                      var e, i = t[0] + " " + t[1];
                      vt.test(i) && (e = -1 !== i.indexOf("hsl(") || -1 !== i.indexOf("hsla("),
                        t[0] = gt(t[0], e),
                        t[1] = gt(t[1], e)),
                        vt.lastIndex = 0
                    }
                    ,
                  e.defaultStringFilter || (e.defaultStringFilter = o.colorStringFilter);
                  var yt = function(t, e, i, r) {
                    if (null == t)
                      return function(t) {
                        return t
                      }
                        ;
                    var s, n = e ? (t.match(vt) || [""])[0] : "", a = t.split(n).join("").match(x) || [], o = t.substr(0, t.indexOf(a[0])), l = ")" === t.charAt(t.length - 1) ? ")" : "", h = -1 !== t.indexOf(" ") ? " " : ",", _ = a.length, u = _ > 0 ? a[0].replace(y, "") : "";
                    return _ ? s = e ? function(t) {
                        var e, c, f, p;
                        if ("number" == typeof t)
                          t += u;
                        else if (r && L.test(t)) {
                          for (p = t.replace(L, "|").split("|"),
                            f = 0; f < p.length; f++)
                            p[f] = s(p[f]);
                          return p.join(",")
                        }
                        if (e = (t.match(vt) || [n])[0],
                          f = (c = t.split(e).join("").match(x) || []).length,
                        _ > f--)
                          for (; ++f < _; )
                            c[f] = i ? c[(f - 1) / 2 | 0] : a[f];
                        return o + c.join(h) + h + e + l + (-1 !== t.indexOf("inset") ? " inset" : "")
                      }
                      : function(t) {
                        var e, n, c;
                        if ("number" == typeof t)
                          t += u;
                        else if (r && L.test(t)) {
                          for (n = t.replace(L, "|").split("|"),
                            c = 0; c < n.length; c++)
                            n[c] = s(n[c]);
                          return n.join(",")
                        }
                        if (c = (e = t.match("," === h ? x : w) || []).length,
                        _ > c--)
                          for (; ++c < _; )
                            e[c] = i ? e[(c - 1) / 2 | 0] : a[c];
                        return (o && "none" !== t && t.substr(0, t.indexOf(e[0])) || o) + e.join(h) + l
                      }
                      : function(t) {
                        return t
                      }
                  }
                    , Tt = function(t) {
                    return t = t.split(","),
                      function(e, i, r, s, n, a, o) {
                        var l, h = (i + "").split(" ");
                        for (o = {},
                          l = 0; l < 4; l++)
                          o[t[l]] = h[l] = h[l] || h[(l - 1) / 2 >> 0];
                        return s.parse(e, o, n, a)
                      }
                  }
                    , xt = (W._setPluginRatio = function(t) {
                      this.plugin.setRatio(t);
                      for (var e, i, r, s, n, a = this.data, o = a.proxy, l = a.firstMPT; l; )
                        e = o[l.v],
                          l.r ? e = l.r(e) : e < 1e-6 && e > -1e-6 && (e = 0),
                          l.t[l.p] = e,
                          l = l._next;
                      if (a.autoRotate && (a.autoRotate.rotation = a.mod ? a.mod.call(this._tween, o.rotation, this.t, this._tween) : o.rotation),
                      1 === t || 0 === t)
                        for (l = a.firstMPT,
                          n = 1 === t ? "e" : "b"; l; ) {
                          if ((i = l.t).type) {
                            if (1 === i.type) {
                              for (s = i.xs0 + i.s + i.xs1,
                                r = 1; r < i.l; r++)
                                s += i["xn" + r] + i["xs" + (r + 1)];
                              i[n] = s
                            }
                          } else
                            i[n] = i.s + i.xs0;
                          l = l._next
                        }
                    }
                      ,
                      function(t, e, i, r, s) {
                        this.t = t,
                          this.p = e,
                          this.v = i,
                          this.r = s,
                        r && (r._prev = this,
                          this._next = r)
                      }
                  )
                    , wt = (W._parseToProxy = function(t, e, i, r, s, n) {
                      var a, o, l, h, _, u = r, c = {}, f = {}, p = i._transform, m = B;
                      for (i._transform = null,
                        B = e,
                        r = _ = i.parse(t, e, r, s),
                        B = m,
                      n && (i._transform = p,
                      u && (u._prev = null,
                      u._prev && (u._prev._next = null))); r && r !== u; ) {
                        if (r.type <= 1 && (f[o = r.p] = r.s + r.c,
                          c[o] = r.s,
                        n || (h = new xt(r,"s",o,h,r.r),
                          r.c = 0),
                        1 === r.type))
                          for (a = r.l; --a > 0; )
                            l = "xn" + a,
                              f[o = r.p + "_" + l] = r.data[l],
                              c[o] = r[l],
                            n || (h = new xt(r,l,o,h,r.rxp[l]));
                        r = r._next
                      }
                      return {
                        proxy: c,
                        end: f,
                        firstMPT: h,
                        pt: _
                      }
                    }
                      ,
                      W.CSSPropTween = function(t, e, r, s, n, o, l, h, _, u, c) {
                        this.t = t,
                          this.p = e,
                          this.s = r,
                          this.c = s,
                          this.n = l || e,
                        t instanceof wt || a.push(this.n),
                          this.r = h ? "function" == typeof h ? h : Math.round : h,
                          this.type = o || 0,
                        _ && (this.pr = _,
                          i = !0),
                          this.b = void 0 === u ? r : u,
                          this.e = void 0 === c ? r + s : c,
                        n && (this._next = n,
                          n._prev = this)
                      }
                  )
                    , bt = function(t, e, i, r, s, n) {
                    var a = new wt(t,e,i,r - i,s,-1,n);
                    return a.b = i,
                      a.e = a.xs0 = r,
                      a
                  }
                    , Pt = o.parseComplex = function(t, e, i, r, s, n, a, l, h, _) {
                    i = i || n || "",
                    "function" == typeof r && (r = r(v, g)),
                      a = new wt(t,e,0,0,a,_ ? 2 : 1,null,!1,l,i,r),
                      r += "",
                    s && vt.test(r + i) && (r = [i, r],
                      o.colorStringFilter(r),
                      i = r[0],
                      r = r[1]);
                    var c, f, p, m, d, x, w, b, P, S, k, O, R, C = i.split(", ").join(",").split(" "), A = r.split(", ").join(",").split(" "), D = C.length, M = !1 !== u;
                    for (-1 === r.indexOf(",") && -1 === i.indexOf(",") || (-1 !== (r + i).indexOf("rgb") || -1 !== (r + i).indexOf("hsl") ? (C = C.join(" ").replace(L, ", ").split(" "),
                      A = A.join(" ").replace(L, ", ").split(" ")) : (C = C.join(" ").split(",").join(", ").split(" "),
                      A = A.join(" ").split(",").join(", ").split(" ")),
                      D = C.length),
                    D !== A.length && (D = (C = (n || "").split(" ")).length),
                      a.plugin = h,
                      a.setRatio = _,
                      vt.lastIndex = 0,
                      c = 0; c < D; c++)
                      if (m = C[c],
                        d = A[c] + "",
                      (b = parseFloat(m)) || 0 === b)
                        a.appendXtra("", b, ut(d, b), d.replace(T, ""), !(!M || -1 === d.indexOf("px")) && Math.round, !0);
                      else if (s && vt.test(m))
                        O = ")" + ((O = d.indexOf(")") + 1) ? d.substr(O) : ""),
                          R = -1 !== d.indexOf("hsl") && Z,
                          S = d,
                          m = dt(m, R),
                          d = dt(d, R),
                          (P = m.length + d.length > 6) && !Z && 0 === d[3] ? (a["xs" + a.l] += a.l ? " transparent" : "transparent",
                            a.e = a.e.split(A[c]).join("transparent")) : (Z || (P = !1),
                            R ? a.appendXtra(S.substr(0, S.indexOf("hsl")) + (P ? "hsla(" : "hsl("), m[0], ut(d[0], m[0]), ",", !1, !0).appendXtra("", m[1], ut(d[1], m[1]), "%,", !1).appendXtra("", m[2], ut(d[2], m[2]), P ? "%," : "%" + O, !1) : a.appendXtra(S.substr(0, S.indexOf("rgb")) + (P ? "rgba(" : "rgb("), m[0], d[0] - m[0], ",", Math.round, !0).appendXtra("", m[1], d[1] - m[1], ",", Math.round).appendXtra("", m[2], d[2] - m[2], P ? "," : O, Math.round),
                          P && (m = m.length < 4 ? 1 : m[3],
                            a.appendXtra("", m, (d.length < 4 ? 1 : d[3]) - m, O, !1))),
                          vt.lastIndex = 0;
                      else if (x = m.match(y)) {
                        if (!(w = d.match(T)) || w.length !== x.length)
                          return a;
                        for (p = 0,
                          f = 0; f < x.length; f++)
                          k = x[f],
                            S = m.indexOf(k, p),
                            a.appendXtra(m.substr(p, S - p), Number(k), ut(w[f], k), "", !(!M || "px" !== m.substr(S + k.length, 2)) && Math.round, 0 === f),
                            p = S + k.length;
                        a["xs" + a.l] += m.substr(p)
                      } else
                        a["xs" + a.l] += a.l || a["xs" + a.l] ? " " + d : d;
                    if (-1 !== r.indexOf("=") && a.data) {
                      for (O = a.xs0 + a.data.s,
                        c = 1; c < a.l; c++)
                        O += a["xs" + c] + a.data["xn" + c];
                      a.e = O + a["xs" + c]
                    }
                    return a.l || (a.type = -1,
                      a.xs0 = a.e),
                    a.xfirst || a
                  }
                    , St = 9;
                  for ((_ = wt.prototype).l = _.pr = 0; --St > 0; )
                    _["xn" + St] = 0,
                      _["xs" + St] = "";
                  _.xs0 = "",
                    _._next = _._prev = _.xfirst = _.data = _.plugin = _.setRatio = _.rxp = null,
                    _.appendXtra = function(t, e, i, r, s, n) {
                      var a = this
                        , o = a.l;
                      return a["xs" + o] += n && (o || a["xs" + o]) ? " " + t : t || "",
                        i || 0 === o || a.plugin ? (a.l++,
                          a.type = a.setRatio ? 2 : 1,
                          a["xs" + a.l] = r || "",
                          o > 0 ? (a.data["xn" + o] = e + i,
                            a.rxp["xn" + o] = s,
                            a["xn" + o] = e,
                          a.plugin || (a.xfirst = new wt(a,"xn" + o,e,i,a.xfirst || a,0,a.n,s,a.pr),
                            a.xfirst.xs0 = 0),
                            a) : (a.data = {
                            s: e + i
                          },
                            a.rxp = {},
                            a.s = e,
                            a.c = i,
                            a.r = s,
                            a)) : (a["xs" + o] += e + (r || ""),
                          a)
                    }
                  ;
                  var kt = function(t, e) {
                      e = e || {},
                        this.p = e.prefix && J(t) || t,
                        h[t] = h[this.p] = this,
                        this.format = e.formatter || yt(e.defaultValue, e.color, e.collapsible, e.multi),
                      e.parser && (this.parse = e.parser),
                        this.clrs = e.color,
                        this.multi = e.multi,
                        this.keyword = e.keyword,
                        this.dflt = e.defaultValue,
                        this.allowFunc = e.allowFunc,
                        this.pr = e.priority || 0
                    }
                    , Ot = W._registerComplexSpecialProp = function(t, e, i) {
                      "object" != typeof e && (e = {
                        parser: i
                      });
                      var r, s = t.split(","), n = e.defaultValue;
                      for (i = i || [n],
                        r = 0; r < s.length; r++)
                        e.prefix = 0 === r && e.prefix,
                          e.defaultValue = i[r] || n,
                          new kt(s[r],e)
                    }
                    , Rt = W._registerPluginProp = function(t) {
                      if (!h[t]) {
                        var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
                        Ot(t, {
                          parser: function(t, i, r, s, n, a, o) {
                            var _ = l.com.greensock.plugins[e];
                            return _ ? (_._cssRegister(),
                              h[r].parse(t, i, r, s, n, a, o)) : ($("Error: " + e + " js file not loaded."),
                              n)
                          }
                        })
                      }
                    }
                  ;
                  (_ = kt.prototype).parseComplex = function(t, e, i, r, s, n) {
                    var a, o, l, h, _, u, c = this.keyword;
                    if (this.multi && (L.test(i) || L.test(e) ? (o = e.replace(L, "|").split("|"),
                      l = i.replace(L, "|").split("|")) : c && (o = [e],
                      l = [i])),
                      l) {
                      for (h = l.length > o.length ? l.length : o.length,
                        a = 0; a < h; a++)
                        e = o[a] = o[a] || this.dflt,
                          i = l[a] = l[a] || this.dflt,
                        c && (_ = e.indexOf(c)) !== (u = i.indexOf(c)) && (-1 === u ? o[a] = o[a].split(c).join("") : -1 === _ && (o[a] += " " + c));
                      e = o.join(", "),
                        i = l.join(", ")
                    }
                    return Pt(t, this.p, e, i, this.clrs, this.dflt, r, this.pr, s, n)
                  }
                    ,
                    _.parse = function(t, e, i, r, s, a, o) {
                      return this.parseComplex(t.style, this.format(it(t, this.p, n, !1, this.dflt)), this.format(e), s, a)
                    }
                    ,
                    o.registerSpecialProp = function(t, e, i) {
                      Ot(t, {
                        parser: function(t, r, s, n, a, o, l) {
                          var h = new wt(t,s,0,0,a,2,s,!1,i);
                          return h.plugin = o,
                            h.setRatio = e(t, r, n._tween, s),
                            h
                        },
                        priority: i
                      })
                    }
                    ,
                    o.useSVGTransformAttr = !0;
                  var Ct, At, Dt, Mt, Ft, Et = "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","), zt = J("transform"), Lt = Q + "transform", It = J("transformOrigin"), Nt = null !== J("perspective"), Xt = W.Transform = function() {
                      this.perspective = parseFloat(o.defaultTransformPerspective) || 0,
                        this.force3D = !(!1 === o.defaultForce3D || !Nt) && (o.defaultForce3D || "auto")
                    }
                    , Bt = s.SVGElement, jt = function(t, e, i) {
                      var r, s = Y.createElementNS("http://www.w3.org/2000/svg", t), n = /([a-z])([A-Z])/g;
                      for (r in i)
                        s.setAttributeNS(null, r.replace(n, "$1-$2").toLowerCase(), i[r]);
                      return e.appendChild(s),
                        s
                    }, Yt = Y.documentElement || {}, Ut = (Ft = d || /Android/i.test(G) && !s.chrome,
                    Y.createElementNS && Yt.appendChild && !Ft && (At = jt("svg", Yt),
                      Mt = (Dt = jt("rect", At, {
                        width: 100,
                        height: 50,
                        x: 100
                      })).getBoundingClientRect().width,
                      Dt.style[It] = "50% 50%",
                      Dt.style[zt] = "scaleX(0.5)",
                      Ft = Mt === Dt.getBoundingClientRect().width && !(p && Nt),
                      Yt.removeChild(At)),
                      Ft), Vt = function(t, e, i, r, s, n) {
                      var a, l, h, _, u, c, f, p, m, d, g, v, y, T, x = t._gsTransform, w = Zt(t, !0);
                      x && (y = x.xOrigin,
                        T = x.yOrigin),
                      (!r || (a = r.split(" ")).length < 2) && (0 === (f = t.getBBox()).x && 0 === f.y && f.width + f.height === 0 && (f = {
                        x: parseFloat(t.hasAttribute("x") ? t.getAttribute("x") : t.hasAttribute("cx") ? t.getAttribute("cx") : 0) || 0,
                        y: parseFloat(t.hasAttribute("y") ? t.getAttribute("y") : t.hasAttribute("cy") ? t.getAttribute("cy") : 0) || 0,
                        width: 0,
                        height: 0
                      }),
                        a = [(-1 !== (e = _t(e).split(" "))[0].indexOf("%") ? parseFloat(e[0]) / 100 * f.width : parseFloat(e[0])) + f.x, (-1 !== e[1].indexOf("%") ? parseFloat(e[1]) / 100 * f.height : parseFloat(e[1])) + f.y]),
                        i.xOrigin = _ = parseFloat(a[0]),
                        i.yOrigin = u = parseFloat(a[1]),
                      r && w !== Gt && (c = w[0],
                        f = w[1],
                        p = w[2],
                        m = w[3],
                        d = w[4],
                        g = w[5],
                      (v = c * m - f * p) && (l = _ * (m / v) + u * (-p / v) + (p * g - m * d) / v,
                        h = _ * (-f / v) + u * (c / v) - (c * g - f * d) / v,
                        _ = i.xOrigin = a[0] = l,
                        u = i.yOrigin = a[1] = h)),
                      x && (n && (i.xOffset = x.xOffset,
                        i.yOffset = x.yOffset,
                        x = i),
                        s || !1 !== s && !1 !== o.defaultSmoothOrigin ? (l = _ - y,
                          h = u - T,
                          x.xOffset += l * w[0] + h * w[2] - l,
                          x.yOffset += l * w[1] + h * w[3] - h) : x.xOffset = x.yOffset = 0),
                      n || t.setAttribute("data-svg-origin", a.join(" "))
                    }, qt = function(t) {
                      var e, i = U("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"), r = this.parentNode, s = this.nextSibling, n = this.style.cssText;
                      if (Yt.appendChild(i),
                        i.appendChild(this),
                        this.style.display = "block",
                        t)
                        try {
                          e = this.getBBox(),
                            this._originalGetBBox = this.getBBox,
                            this.getBBox = qt
                        } catch (t) {}
                      else
                        this._originalGetBBox && (e = this._originalGetBBox());
                      return s ? r.insertBefore(this, s) : r.appendChild(this),
                        Yt.removeChild(i),
                        this.style.cssText = n,
                        e
                    }, Wt = function(t) {
                      return !(!Bt || !t.getCTM || t.parentNode && !t.ownerSVGElement || !function(t) {
                        try {
                          return t.getBBox()
                        } catch (e) {
                          return qt.call(t, !0)
                        }
                      }(t))
                    }, Gt = [1, 0, 0, 1, 0, 0], Zt = function(t, e) {
                      var i, r, s, n, a, o, l, h = t._gsTransform || new Xt, _ = t.style;
                      if (zt ? r = it(t, Lt, null, !0) : t.currentStyle && (r = (r = t.currentStyle.filter.match(E)) && 4 === r.length ? [r[0].substr(4), Number(r[2].substr(4)), Number(r[1].substr(4)), r[3].substr(4), h.x || 0, h.y || 0].join(",") : ""),
                        i = !r || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r,
                      zt && i && !t.offsetParent && t !== Yt && (n = _.display,
                        _.display = "block",
                      (l = t.parentNode) && t.offsetParent || (a = 1,
                        o = t.nextSibling,
                        Yt.appendChild(t)),
                        i = !(r = it(t, Lt, null, !0)) || "none" === r || "matrix(1, 0, 0, 1, 0, 0)" === r,
                        n ? _.display = n : Jt(_, "display"),
                      a && (o ? l.insertBefore(t, o) : l ? l.appendChild(t) : Yt.removeChild(t))),
                      (h.svg || t.getCTM && Wt(t)) && (i && -1 !== (_[zt] + "").indexOf("matrix") && (r = _[zt],
                        i = 0),
                        s = t.getAttribute("transform"),
                      i && s && (r = "matrix(" + (s = t.transform.baseVal.consolidate().matrix).a + "," + s.b + "," + s.c + "," + s.d + "," + s.e + "," + s.f + ")",
                        i = 0)),
                        i)
                        return Gt;
                      for (s = (r || "").match(y) || [],
                        St = s.length; --St > -1; )
                        n = Number(s[St]),
                          s[St] = (a = n - (n |= 0)) ? (1e5 * a + (a < 0 ? -.5 : .5) | 0) / 1e5 + n : n;
                      return e && s.length > 6 ? [s[0], s[1], s[4], s[5], s[12], s[13]] : s
                    }, Ht = W.getTransform = function(t, i, r, s) {
                      if (t._gsTransform && r && !s)
                        return t._gsTransform;
                      var n, a, l, h, _, u, c = r && t._gsTransform || new Xt, f = c.scaleX < 0, p = Nt && (parseFloat(it(t, It, i, !1, "0 0 0").split(" ")[2]) || c.zOrigin) || 0, m = parseFloat(o.defaultTransformPerspective) || 0;
                      if (c.svg = !(!t.getCTM || !Wt(t)),
                      c.svg && (Vt(t, it(t, It, i, !1, "50% 50%") + "", c, t.getAttribute("data-svg-origin")),
                        Ct = o.useSVGTransformAttr || Ut),
                      (n = Zt(t)) !== Gt) {
                        if (16 === n.length) {
                          var d, g, v, y, T, x = n[0], w = n[1], b = n[2], P = n[3], S = n[4], k = n[5], O = n[6], R = n[7], C = n[8], A = n[9], D = n[10], M = n[12], F = n[13], E = n[14], z = n[11], L = Math.atan2(O, D);
                          c.zOrigin && (M = C * (E = -c.zOrigin) - n[12],
                            F = A * E - n[13],
                            E = D * E + c.zOrigin - n[14]),
                            c.rotationX = L * X,
                          L && (d = S * (y = Math.cos(-L)) + C * (T = Math.sin(-L)),
                            g = k * y + A * T,
                            v = O * y + D * T,
                            C = S * -T + C * y,
                            A = k * -T + A * y,
                            D = O * -T + D * y,
                            z = R * -T + z * y,
                            S = d,
                            k = g,
                            O = v),
                            L = Math.atan2(-b, D),
                            c.rotationY = L * X,
                          L && (g = w * (y = Math.cos(-L)) - A * (T = Math.sin(-L)),
                            v = b * y - D * T,
                            A = w * T + A * y,
                            D = b * T + D * y,
                            z = P * T + z * y,
                            x = d = x * y - C * T,
                            w = g,
                            b = v),
                            L = Math.atan2(w, x),
                            c.rotation = L * X,
                          L && (d = x * (y = Math.cos(L)) + w * (T = Math.sin(L)),
                            g = S * y + k * T,
                            v = C * y + A * T,
                            w = w * y - x * T,
                            k = k * y - S * T,
                            A = A * y - C * T,
                            x = d,
                            S = g,
                            C = v),
                          c.rotationX && Math.abs(c.rotationX) + Math.abs(c.rotation) > 359.9 && (c.rotationX = c.rotation = 0,
                            c.rotationY = 180 - c.rotationY),
                            L = Math.atan2(S, k),
                            c.scaleX = (1e5 * Math.sqrt(x * x + w * w + b * b) + .5 | 0) / 1e5,
                            c.scaleY = (1e5 * Math.sqrt(k * k + O * O) + .5 | 0) / 1e5,
                            c.scaleZ = (1e5 * Math.sqrt(C * C + A * A + D * D) + .5 | 0) / 1e5,
                            x /= c.scaleX,
                            S /= c.scaleY,
                            w /= c.scaleX,
                            k /= c.scaleY,
                            Math.abs(L) > 2e-5 ? (c.skewX = L * X,
                              S = 0,
                            "simple" !== c.skewType && (c.scaleY *= 1 / Math.cos(L))) : c.skewX = 0,
                            c.perspective = z ? 1 / (z < 0 ? -z : z) : 0,
                            c.x = M,
                            c.y = F,
                            c.z = E,
                          c.svg && (c.x -= c.xOrigin - (c.xOrigin * x - c.yOrigin * S),
                            c.y -= c.yOrigin - (c.yOrigin * w - c.xOrigin * k))
                        } else if (!Nt || s || !n.length || c.x !== n[4] || c.y !== n[5] || !c.rotationX && !c.rotationY) {
                          var I = n.length >= 6
                            , N = I ? n[0] : 1
                            , B = n[1] || 0
                            , j = n[2] || 0
                            , Y = I ? n[3] : 1;
                          c.x = n[4] || 0,
                            c.y = n[5] || 0,
                            l = Math.sqrt(N * N + B * B),
                            h = Math.sqrt(Y * Y + j * j),
                            _ = N || B ? Math.atan2(B, N) * X : c.rotation || 0,
                            u = j || Y ? Math.atan2(j, Y) * X + _ : c.skewX || 0,
                            c.scaleX = l,
                            c.scaleY = h,
                            c.rotation = _,
                            c.skewX = u,
                          Nt && (c.rotationX = c.rotationY = c.z = 0,
                            c.perspective = m,
                            c.scaleZ = 1),
                          c.svg && (c.x -= c.xOrigin - (c.xOrigin * N + c.yOrigin * j),
                            c.y -= c.yOrigin - (c.xOrigin * B + c.yOrigin * Y))
                        }
                        for (a in Math.abs(c.skewX) > 90 && Math.abs(c.skewX) < 270 && (f ? (c.scaleX *= -1,
                          c.skewX += c.rotation <= 0 ? 180 : -180,
                          c.rotation += c.rotation <= 0 ? 180 : -180) : (c.scaleY *= -1,
                          c.skewX += c.skewX <= 0 ? 180 : -180)),
                          c.zOrigin = p,
                          c)
                          c[a] < 2e-5 && c[a] > -2e-5 && (c[a] = 0)
                      }
                      return r && (t._gsTransform = c,
                      c.svg && (Ct && t.style[zt] ? e.delayedCall(.001, (function() {
                          Jt(t.style, zt)
                        }
                      )) : !Ct && t.getAttribute("transform") && e.delayedCall(.001, (function() {
                          t.removeAttribute("transform")
                        }
                      )))),
                        c
                    }
                    , $t = function(t) {
                      var e, i, r = this.data, s = -r.rotation * N, n = s + r.skewX * N, a = (Math.cos(s) * r.scaleX * 1e5 | 0) / 1e5, o = (Math.sin(s) * r.scaleX * 1e5 | 0) / 1e5, l = (Math.sin(n) * -r.scaleY * 1e5 | 0) / 1e5, h = (Math.cos(n) * r.scaleY * 1e5 | 0) / 1e5, _ = this.t.style, u = this.t.currentStyle;
                      if (u) {
                        i = o,
                          o = -l,
                          l = -i,
                          e = u.filter,
                          _.filter = "";
                        var c, f, p = this.t.offsetWidth, m = this.t.offsetHeight, g = "absolute" !== u.position, v = "progid:DXImageTransform.Microsoft.Matrix(M11=" + a + ", M12=" + o + ", M21=" + l + ", M22=" + h, y = r.x + p * r.xPercent / 100, T = r.y + m * r.yPercent / 100;
                        if (null != r.ox && (y += (c = (r.oxp ? p * r.ox * .01 : r.ox) - p / 2) - (c * a + (f = (r.oyp ? m * r.oy * .01 : r.oy) - m / 2) * o),
                          T += f - (c * l + f * h)),
                          v += g ? ", Dx=" + ((c = p / 2) - (c * a + (f = m / 2) * o) + y) + ", Dy=" + (f - (c * l + f * h) + T) + ")" : ", sizingMethod='auto expand')",
                          -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(") ? _.filter = e.replace(z, v) : _.filter = v + " " + e,
                        0 !== t && 1 !== t || 1 === a && 0 === o && 0 === l && 1 === h && (g && -1 === v.indexOf("Dx=0, Dy=0") || S.test(e) && 100 !== parseFloat(RegExp.$1) || -1 === e.indexOf(e.indexOf("Alpha")) && _.removeAttribute("filter")),
                          !g) {
                          var x, w, b, k = d < 8 ? 1 : -1;
                          for (c = r.ieOffsetX || 0,
                            f = r.ieOffsetY || 0,
                            r.ieOffsetX = Math.round((p - ((a < 0 ? -a : a) * p + (o < 0 ? -o : o) * m)) / 2 + y),
                            r.ieOffsetY = Math.round((m - ((h < 0 ? -h : h) * m + (l < 0 ? -l : l) * p)) / 2 + T),
                            St = 0; St < 4; St++)
                            b = (i = -1 !== (x = u[w = lt[St]]).indexOf("px") ? parseFloat(x) : rt(this.t, w, parseFloat(x), x.replace(P, "")) || 0) !== r[w] ? St < 2 ? -r.ieOffsetX : -r.ieOffsetY : St < 2 ? c - r.ieOffsetX : f - r.ieOffsetY,
                              _[w] = (r[w] = Math.round(i - b * (0 === St || 2 === St ? 1 : k))) + "px"
                        }
                      }
                    }, Qt = W.set3DTransformRatio = W.setTransformRatio = function(t) {
                      var e, i, r, s, n, a, o, l, h, _, u, c, f, m, d, g, v, y, T, x, w = this.data, b = this.t.style, P = w.rotation, S = w.rotationX, k = w.rotationY, O = w.scaleX, R = w.scaleY, C = w.scaleZ, A = w.x, D = w.y, M = w.z, F = w.svg, E = w.perspective, z = w.force3D, L = w.skewY, I = w.skewX;
                      if (L && (I += L,
                        P += L),
                      !((1 !== t && 0 !== t || "auto" !== z || this.tween._totalTime !== this.tween._totalDuration && this.tween._totalTime) && z || M || E || k || S || 1 !== C) || Ct && F || !Nt)
                        P || I || F ? (P *= N,
                          x = I * N,
                          1e5,
                          i = Math.cos(P) * O,
                          n = Math.sin(P) * O,
                          r = Math.sin(P - x) * -R,
                          a = Math.cos(P - x) * R,
                        x && "simple" === w.skewType && (e = Math.tan(x - L * N),
                          r *= e = Math.sqrt(1 + e * e),
                          a *= e,
                        L && (e = Math.tan(L * N),
                          i *= e = Math.sqrt(1 + e * e),
                          n *= e)),
                        F && (A += w.xOrigin - (w.xOrigin * i + w.yOrigin * r) + w.xOffset,
                          D += w.yOrigin - (w.xOrigin * n + w.yOrigin * a) + w.yOffset,
                        Ct && (w.xPercent || w.yPercent) && (d = this.t.getBBox(),
                          A += .01 * w.xPercent * d.width,
                          D += .01 * w.yPercent * d.height),
                        A < (d = 1e-6) && A > -d && (A = 0),
                        D < d && D > -d && (D = 0)),
                          T = (1e5 * i | 0) / 1e5 + "," + (1e5 * n | 0) / 1e5 + "," + (1e5 * r | 0) / 1e5 + "," + (1e5 * a | 0) / 1e5 + "," + A + "," + D + ")",
                          F && Ct ? this.t.setAttribute("transform", "matrix(" + T) : b[zt] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + T) : b[zt] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix(" : "matrix(") + O + ",0,0," + R + "," + A + "," + D + ")";
                      else {
                        if (p && (O < (d = 1e-4) && O > -d && (O = C = 2e-5),
                        R < d && R > -d && (R = C = 2e-5),
                        !E || w.z || w.rotationX || w.rotationY || (E = 0)),
                        P || I)
                          P *= N,
                            g = i = Math.cos(P),
                            v = n = Math.sin(P),
                          I && (P -= I * N,
                            g = Math.cos(P),
                            v = Math.sin(P),
                          "simple" === w.skewType && (e = Math.tan((I - L) * N),
                            g *= e = Math.sqrt(1 + e * e),
                            v *= e,
                          w.skewY && (e = Math.tan(L * N),
                            i *= e = Math.sqrt(1 + e * e),
                            n *= e))),
                            r = -v,
                            a = g;
                        else {
                          if (!(k || S || 1 !== C || E || F))
                            return void (b[zt] = (w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) translate3d(" : "translate3d(") + A + "px," + D + "px," + M + "px)" + (1 !== O || 1 !== R ? " scale(" + O + "," + R + ")" : ""));
                          i = a = 1,
                            r = n = 0
                        }
                        _ = 1,
                          s = o = l = h = u = c = 0,
                          f = E ? -1 / E : 0,
                          m = w.zOrigin,
                          d = 1e-6,
                          ",",
                          "0",
                        (P = k * N) && (g = Math.cos(P),
                          l = -(v = Math.sin(P)),
                          u = f * -v,
                          s = i * v,
                          o = n * v,
                          _ = g,
                          f *= g,
                          i *= g,
                          n *= g),
                        (P = S * N) && (e = r * (g = Math.cos(P)) + s * (v = Math.sin(P)),
                          y = a * g + o * v,
                          h = _ * v,
                          c = f * v,
                          s = r * -v + s * g,
                          o = a * -v + o * g,
                          _ *= g,
                          f *= g,
                          r = e,
                          a = y),
                        1 !== C && (s *= C,
                          o *= C,
                          _ *= C,
                          f *= C),
                        1 !== R && (r *= R,
                          a *= R,
                          h *= R,
                          c *= R),
                        1 !== O && (i *= O,
                          n *= O,
                          l *= O,
                          u *= O),
                        (m || F) && (m && (A += s * -m,
                          D += o * -m,
                          M += _ * -m + m),
                        F && (A += w.xOrigin - (w.xOrigin * i + w.yOrigin * r) + w.xOffset,
                          D += w.yOrigin - (w.xOrigin * n + w.yOrigin * a) + w.yOffset),
                        A < d && A > -d && (A = "0"),
                        D < d && D > -d && (D = "0"),
                        M < d && M > -d && (M = 0)),
                          T = w.xPercent || w.yPercent ? "translate(" + w.xPercent + "%," + w.yPercent + "%) matrix3d(" : "matrix3d(",
                          T += (i < d && i > -d ? "0" : i) + "," + (n < d && n > -d ? "0" : n) + "," + (l < d && l > -d ? "0" : l),
                          T += "," + (u < d && u > -d ? "0" : u) + "," + (r < d && r > -d ? "0" : r) + "," + (a < d && a > -d ? "0" : a),
                          S || k || 1 !== C ? (T += "," + (h < d && h > -d ? "0" : h) + "," + (c < d && c > -d ? "0" : c) + "," + (s < d && s > -d ? "0" : s),
                            T += "," + (o < d && o > -d ? "0" : o) + "," + (_ < d && _ > -d ? "0" : _) + "," + (f < d && f > -d ? "0" : f) + ",") : T += ",0,0,0,0,1,0,",
                          T += A + "," + D + "," + M + "," + (E ? 1 + -M / E : 1) + ")",
                          b[zt] = T
                      }
                    }
                  ;
                  (_ = Xt.prototype).x = _.y = _.z = _.skewX = _.skewY = _.rotation = _.rotationX = _.rotationY = _.zOrigin = _.xPercent = _.yPercent = _.xOffset = _.yOffset = 0,
                    _.scaleX = _.scaleY = _.scaleZ = 1,
                    Ot("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin", {
                      parser: function(t, e, i, r, s, a, l) {
                        if (r._lastParsedTransform === l)
                          return s;
                        r._lastParsedTransform = l;
                        var h = l.scale && "function" == typeof l.scale ? l.scale : 0;
                        h && (l.scale = h(v, t));
                        var _, u, c, f, p, m, d, y, T, x = t._gsTransform, w = t.style, b = Et.length, P = l, S = {}, k = Ht(t, n, !0, P.parseTransform), O = P.transform && ("function" == typeof P.transform ? P.transform(v, g) : P.transform);
                        if (k.skewType = P.skewType || k.skewType || o.defaultSkewType,
                          r._transform = k,
                        "rotationZ"in P && (P.rotation = P.rotationZ),
                        O && "string" == typeof O && zt)
                          (u = V.style)[zt] = O,
                            u.display = "block",
                            u.position = "absolute",
                          -1 !== O.indexOf("%") && (u.width = it(t, "width"),
                            u.height = it(t, "height")),
                            Y.body.appendChild(V),
                            _ = Ht(V, null, !1),
                          "simple" === k.skewType && (_.scaleY *= Math.cos(_.skewX * N)),
                          k.svg && (m = k.xOrigin,
                            d = k.yOrigin,
                            _.x -= k.xOffset,
                            _.y -= k.yOffset,
                          (P.transformOrigin || P.svgOrigin) && (O = {},
                            Vt(t, _t(P.transformOrigin), O, P.svgOrigin, P.smoothOrigin, !0),
                            m = O.xOrigin,
                            d = O.yOrigin,
                            _.x -= O.xOffset - k.xOffset,
                            _.y -= O.yOffset - k.yOffset),
                          (m || d) && (y = Zt(V, !0),
                            _.x -= m - (m * y[0] + d * y[2]),
                            _.y -= d - (m * y[1] + d * y[3]))),
                            Y.body.removeChild(V),
                          _.perspective || (_.perspective = k.perspective),
                          null != P.xPercent && (_.xPercent = ct(P.xPercent, k.xPercent)),
                          null != P.yPercent && (_.yPercent = ct(P.yPercent, k.yPercent));
                        else if ("object" == typeof P) {
                          if (_ = {
                            scaleX: ct(null != P.scaleX ? P.scaleX : P.scale, k.scaleX),
                            scaleY: ct(null != P.scaleY ? P.scaleY : P.scale, k.scaleY),
                            scaleZ: ct(P.scaleZ, k.scaleZ),
                            x: ct(P.x, k.x),
                            y: ct(P.y, k.y),
                            z: ct(P.z, k.z),
                            xPercent: ct(P.xPercent, k.xPercent),
                            yPercent: ct(P.yPercent, k.yPercent),
                            perspective: ct(P.transformPerspective, k.perspective)
                          },
                          null != (p = P.directionalRotation))
                            if ("object" == typeof p)
                              for (u in p)
                                P[u] = p[u];
                            else
                              P.rotation = p;
                          "string" == typeof P.x && -1 !== P.x.indexOf("%") && (_.x = 0,
                            _.xPercent = ct(P.x, k.xPercent)),
                          "string" == typeof P.y && -1 !== P.y.indexOf("%") && (_.y = 0,
                            _.yPercent = ct(P.y, k.yPercent)),
                            _.rotation = ft("rotation"in P ? P.rotation : "shortRotation"in P ? P.shortRotation + "_short" : k.rotation, k.rotation, "rotation", S),
                          Nt && (_.rotationX = ft("rotationX"in P ? P.rotationX : "shortRotationX"in P ? P.shortRotationX + "_short" : k.rotationX || 0, k.rotationX, "rotationX", S),
                            _.rotationY = ft("rotationY"in P ? P.rotationY : "shortRotationY"in P ? P.shortRotationY + "_short" : k.rotationY || 0, k.rotationY, "rotationY", S)),
                            _.skewX = ft(P.skewX, k.skewX),
                            _.skewY = ft(P.skewY, k.skewY)
                        }
                        for (Nt && null != P.force3D && (k.force3D = P.force3D,
                          f = !0),
                        (c = k.force3D || k.z || k.rotationX || k.rotationY || _.z || _.rotationX || _.rotationY || _.perspective) || null == P.scale || (_.scaleZ = 1); --b > -1; )
                          ((O = _[T = Et[b]] - k[T]) > 1e-6 || O < -1e-6 || null != P[T] || null != B[T]) && (f = !0,
                            s = new wt(k,T,k[T],O,s),
                          T in S && (s.e = S[T]),
                            s.xs0 = 0,
                            s.plugin = a,
                            r._overwriteProps.push(s.n));
                        return O = "function" == typeof P.transformOrigin ? P.transformOrigin(v, g) : P.transformOrigin,
                        k.svg && (O || P.svgOrigin) && (m = k.xOffset,
                          d = k.yOffset,
                          Vt(t, _t(O), _, P.svgOrigin, P.smoothOrigin),
                          s = bt(k, "xOrigin", (x ? k : _).xOrigin, _.xOrigin, s, "transformOrigin"),
                          s = bt(k, "yOrigin", (x ? k : _).yOrigin, _.yOrigin, s, "transformOrigin"),
                        m === k.xOffset && d === k.yOffset || (s = bt(k, "xOffset", x ? m : k.xOffset, k.xOffset, s, "transformOrigin"),
                          s = bt(k, "yOffset", x ? d : k.yOffset, k.yOffset, s, "transformOrigin")),
                          O = "0px 0px"),
                        (O || Nt && c && k.zOrigin) && (zt ? (f = !0,
                          T = It,
                        O || (O = (O = (it(t, T, n, !1, "50% 50%") + "").split(" "))[0] + " " + O[1] + " " + k.zOrigin + "px"),
                          O += "",
                          (s = new wt(w,T,0,0,s,-1,"transformOrigin")).b = w[T],
                          s.plugin = a,
                          Nt ? (u = k.zOrigin,
                            O = O.split(" "),
                            k.zOrigin = (O.length > 2 ? parseFloat(O[2]) : u) || 0,
                            s.xs0 = s.e = O[0] + " " + (O[1] || "50%") + " 0px",
                            (s = new wt(k,"zOrigin",0,0,s,-1,s.n)).b = u,
                            s.xs0 = s.e = k.zOrigin) : s.xs0 = s.e = O) : _t(O + "", k)),
                        f && (r._transformType = k.svg && Ct || !c && 3 !== this._transformType ? 2 : 3),
                        h && (l.scale = h),
                          s
                      },
                      allowFunc: !0,
                      prefix: !0
                    }),
                    Ot("boxShadow", {
                      defaultValue: "0px 0px 0px 0px #999",
                      prefix: !0,
                      color: !0,
                      multi: !0,
                      keyword: "inset"
                    }),
                    Ot("clipPath", {
                      defaultValue: "inset(0%)",
                      prefix: !0,
                      multi: !0,
                      formatter: yt("inset(0% 0% 0% 0%)", !1, !0)
                    }),
                    Ot("borderRadius", {
                      defaultValue: "0px",
                      parser: function(t, e, i, s, a, o) {
                        e = this.format(e);
                        var l, h, _, u, c, f, p, m, d, g, v, y, T, x, w, b, P = ["borderTopLeftRadius", "borderTopRightRadius", "borderBottomRightRadius", "borderBottomLeftRadius"], S = t.style;
                        for (d = parseFloat(t.offsetWidth),
                          g = parseFloat(t.offsetHeight),
                          l = e.split(" "),
                          h = 0; h < P.length; h++)
                          this.p.indexOf("border") && (P[h] = J(P[h])),
                          -1 !== (c = u = it(t, P[h], n, !1, "0px")).indexOf(" ") && (u = c.split(" "),
                            c = u[0],
                            u = u[1]),
                            f = _ = l[h],
                            p = parseFloat(c),
                            y = c.substr((p + "").length),
                            (T = "=" === f.charAt(1)) ? (m = parseInt(f.charAt(0) + "1", 10),
                              f = f.substr(2),
                              m *= parseFloat(f),
                              v = f.substr((m + "").length - (m < 0 ? 1 : 0)) || "") : (m = parseFloat(f),
                              v = f.substr((m + "").length)),
                          "" === v && (v = r[i] || y),
                          v !== y && (x = rt(t, "borderLeft", p, y),
                            w = rt(t, "borderTop", p, y),
                            "%" === v ? (c = x / d * 100 + "%",
                              u = w / g * 100 + "%") : "em" === v ? (c = x / (b = rt(t, "borderLeft", 1, "em")) + "em",
                              u = w / b + "em") : (c = x + "px",
                              u = w + "px"),
                          T && (f = parseFloat(c) + m + v,
                            _ = parseFloat(u) + m + v)),
                            a = Pt(S, P[h], c + " " + u, f + " " + _, !1, "0px", a);
                        return a
                      },
                      prefix: !0,
                      formatter: yt("0px 0px 0px 0px", !1, !0)
                    }),
                    Ot("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius", {
                      defaultValue: "0px",
                      parser: function(t, e, i, r, s, a) {
                        return Pt(t.style, i, this.format(it(t, i, n, !1, "0px 0px")), this.format(e), !1, "0px", s)
                      },
                      prefix: !0,
                      formatter: yt("0px 0px", !1, !0)
                    }),
                    Ot("backgroundPosition", {
                      defaultValue: "0 0",
                      parser: function(t, e, i, r, s, a) {
                        var o, l, h, _, u, c, f = "background-position", p = n || et(t), m = this.format((p ? d ? p.getPropertyValue(f + "-x") + " " + p.getPropertyValue(f + "-y") : p.getPropertyValue(f) : t.currentStyle.backgroundPositionX + " " + t.currentStyle.backgroundPositionY) || "0 0"), g = this.format(e);
                        if (-1 !== m.indexOf("%") != (-1 !== g.indexOf("%")) && g.split(",").length < 2 && (c = it(t, "backgroundImage").replace(D, "")) && "none" !== c) {
                          for (o = m.split(" "),
                            l = g.split(" "),
                            q.setAttribute("src", c),
                            h = 2; --h > -1; )
                            (_ = -1 !== (m = o[h]).indexOf("%")) !== (-1 !== l[h].indexOf("%")) && (u = 0 === h ? t.offsetWidth - q.width : t.offsetHeight - q.height,
                              o[h] = _ ? parseFloat(m) / 100 * u + "px" : parseFloat(m) / u * 100 + "%");
                          m = o.join(" ")
                        }
                        return this.parseComplex(t.style, m, g, s, a)
                      },
                      formatter: _t
                    }),
                    Ot("backgroundSize", {
                      defaultValue: "0 0",
                      formatter: function(t) {
                        return "co" === (t += "").substr(0, 2) ? t : _t(-1 === t.indexOf(" ") ? t + " " + t : t)
                      }
                    }),
                    Ot("perspective", {
                      defaultValue: "0px",
                      prefix: !0
                    }),
                    Ot("perspectiveOrigin", {
                      defaultValue: "50% 50%",
                      prefix: !0
                    }),
                    Ot("transformStyle", {
                      prefix: !0
                    }),
                    Ot("backfaceVisibility", {
                      prefix: !0
                    }),
                    Ot("userSelect", {
                      prefix: !0
                    }),
                    Ot("margin", {
                      parser: Tt("marginTop,marginRight,marginBottom,marginLeft")
                    }),
                    Ot("padding", {
                      parser: Tt("paddingTop,paddingRight,paddingBottom,paddingLeft")
                    }),
                    Ot("clip", {
                      defaultValue: "rect(0px,0px,0px,0px)",
                      parser: function(t, e, i, r, s, a) {
                        var o, l, h;
                        return d < 9 ? (l = t.currentStyle,
                          h = d < 8 ? " " : ",",
                          o = "rect(" + l.clipTop + h + l.clipRight + h + l.clipBottom + h + l.clipLeft + ")",
                          e = this.format(e).split(",").join(h)) : (o = this.format(it(t, this.p, n, !1, this.dflt)),
                          e = this.format(e)),
                          this.parseComplex(t.style, o, e, s, a)
                      }
                    }),
                    Ot("textShadow", {
                      defaultValue: "0px 0px 0px #999",
                      color: !0,
                      multi: !0
                    }),
                    Ot("autoRound,strictUnits", {
                      parser: function(t, e, i, r, s) {
                        return s
                      }
                    }),
                    Ot("border", {
                      defaultValue: "0px solid #000",
                      parser: function(t, e, i, r, s, a) {
                        var o = it(t, "borderTopWidth", n, !1, "0px")
                          , l = this.format(e).split(" ")
                          , h = l[0].replace(P, "");
                        return "px" !== h && (o = parseFloat(o) / rt(t, "borderTopWidth", 1, h) + h),
                          this.parseComplex(t.style, this.format(o + " " + it(t, "borderTopStyle", n, !1, "solid") + " " + it(t, "borderTopColor", n, !1, "#000")), l.join(" "), s, a)
                      },
                      color: !0,
                      formatter: function(t) {
                        var e = t.split(" ");
                        return e[0] + " " + (e[1] || "solid") + " " + (t.match(vt) || ["#000"])[0]
                      }
                    }),
                    Ot("borderWidth", {
                      parser: Tt("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")
                    }),
                    Ot("float,cssFloat,styleFloat", {
                      parser: function(t, e, i, r, s, n) {
                        var a = t.style
                          , o = "cssFloat"in a ? "cssFloat" : "styleFloat";
                        return new wt(a,o,0,0,s,-1,i,!1,0,a[o],e)
                      }
                    });
                  var Kt = function(t) {
                    var e, i = this.t, r = i.filter || it(this.data, "filter") || "", s = this.s + this.c * t | 0;
                    100 === s && (-1 === r.indexOf("atrix(") && -1 === r.indexOf("radient(") && -1 === r.indexOf("oader(") ? (i.removeAttribute("filter"),
                      e = !it(this.data, "filter")) : (i.filter = r.replace(O, ""),
                      e = !0)),
                    e || (this.xn1 && (i.filter = r = r || "alpha(opacity=" + s + ")"),
                      -1 === r.indexOf("pacity") ? 0 === s && this.xn1 || (i.filter = r + " alpha(opacity=" + s + ")") : i.filter = r.replace(S, "opacity=" + s))
                  };
                  Ot("opacity,alpha,autoAlpha", {
                    defaultValue: "1",
                    parser: function(t, e, i, r, s, a) {
                      var o = parseFloat(it(t, "opacity", n, !1, "1"))
                        , l = t.style
                        , h = "autoAlpha" === i;
                      return "string" == typeof e && "=" === e.charAt(1) && (e = ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + o),
                      h && 1 === o && "hidden" === it(t, "visibility", n) && 0 !== e && (o = 0),
                        Z ? s = new wt(l,"opacity",o,e - o,s) : ((s = new wt(l,"opacity",100 * o,100 * (e - o),s)).xn1 = h ? 1 : 0,
                          l.zoom = 1,
                          s.type = 2,
                          s.b = "alpha(opacity=" + s.s + ")",
                          s.e = "alpha(opacity=" + (s.s + s.c) + ")",
                          s.data = t,
                          s.plugin = a,
                          s.setRatio = Kt),
                      h && ((s = new wt(l,"visibility",0,0,s,-1,null,!1,0,0 !== o ? "inherit" : "hidden",0 === e ? "hidden" : "inherit")).xs0 = "inherit",
                        r._overwriteProps.push(s.n),
                        r._overwriteProps.push(i)),
                        s
                    }
                  });
                  var Jt = function(t, e) {
                    e && (t.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e),
                      t.removeProperty(e.replace(C, "-$1").toLowerCase())) : t.removeAttribute(e))
                  }
                    , te = function(t) {
                    if (this.t._gsClassPT = this,
                    1 === t || 0 === t) {
                      this.t.setAttribute("class", 0 === t ? this.b : this.e);
                      for (var e = this.data, i = this.t.style; e; )
                        e.v ? i[e.p] = e.v : Jt(i, e.p),
                          e = e._next;
                      1 === t && this.t._gsClassPT === this && (this.t._gsClassPT = null)
                    } else
                      this.t.getAttribute("class") !== this.e && this.t.setAttribute("class", this.e)
                  };
                  Ot("className", {
                    parser: function(t, e, r, s, a, o, l) {
                      var h, _, u, c, f, p = t.getAttribute("class") || "", m = t.style.cssText;
                      if ((a = s._classNamePT = new wt(t,r,0,0,a,2)).setRatio = te,
                        a.pr = -11,
                        i = !0,
                        a.b = p,
                        _ = nt(t, n),
                        u = t._gsClassPT) {
                        for (c = {},
                          f = u.data; f; )
                          c[f.p] = 1,
                            f = f._next;
                        u.setRatio(1)
                      }
                      return t._gsClassPT = a,
                        a.e = "=" !== e.charAt(1) ? e : p.replace(new RegExp("(?:\\s|^)" + e.substr(2) + "(?![\\w-])"), "") + ("+" === e.charAt(0) ? " " + e.substr(2) : ""),
                        t.setAttribute("class", a.e),
                        h = at(t, _, nt(t), l, c),
                        t.setAttribute("class", p),
                        a.data = h.firstMPT,
                      t.style.cssText !== m && (t.style.cssText = m),
                        a = a.xfirst = s.parse(t, h.difs, a, o)
                    }
                  });
                  var ee = function(t) {
                    if ((1 === t || 0 === t) && this.data._totalTime === this.data._totalDuration && "isFromStart" !== this.data.data) {
                      var e, i, r, s, n, a = this.t.style, o = h.transform.parse;
                      if ("all" === this.e)
                        a.cssText = "",
                          s = !0;
                      else
                        for (r = (e = this.e.split(" ").join("").split(",")).length; --r > -1; )
                          i = e[r],
                          h[i] && (h[i].parse === o ? s = !0 : i = "transformOrigin" === i ? It : h[i].p),
                            Jt(a, i);
                      s && (Jt(a, zt),
                      (n = this.t._gsTransform) && (n.svg && (this.t.removeAttribute("data-svg-origin"),
                        this.t.removeAttribute("transform")),
                        delete this.t._gsTransform))
                    }
                  };
                  for (Ot("clearProps", {
                    parser: function(t, e, r, s, n) {
                      return (n = new wt(t,r,0,0,n,2)).setRatio = ee,
                        n.e = e,
                        n.pr = -10,
                        n.data = s._tween,
                        i = !0,
                        n
                    }
                  }),
                    _ = "bezier,throwProps,physicsProps,physics2D".split(","),
                    St = _.length; St--; )
                    Rt(_[St]);
                  (_ = o.prototype)._firstPT = _._lastParsedTransform = _._transform = null,
                    _._onInitTween = function(t, e, s, l) {
                      if (!t.nodeType)
                        return !1;
                      this._target = g = t,
                        this._tween = s,
                        this._vars = e,
                        v = l,
                        u = e.autoRound,
                        i = !1,
                        r = e.suffixMap || o.suffixMap,
                        n = et(t),
                        a = this._overwriteProps;
                      var _, p, d, y, T, x, w, b, P, S = t.style;
                      if (c && "" === S.zIndex && ("auto" !== (_ = it(t, "zIndex", n)) && "" !== _ || this._addLazySet(S, "zIndex", 0)),
                      "string" == typeof e && (y = S.cssText,
                        _ = nt(t, n),
                        S.cssText = y + ";" + e,
                        _ = at(t, _, nt(t)).difs,
                      !Z && k.test(e) && (_.opacity = parseFloat(RegExp.$1)),
                        e = _,
                        S.cssText = y),
                        e.className ? this._firstPT = p = h.className.parse(t, e.className, "className", this, null, null, e) : this._firstPT = p = this.parse(t, e, null),
                        this._transformType) {
                        for (P = 3 === this._transformType,
                          zt ? f && (c = !0,
                          "" === S.zIndex && ("auto" !== (w = it(t, "zIndex", n)) && "" !== w || this._addLazySet(S, "zIndex", 0)),
                          m && this._addLazySet(S, "WebkitBackfaceVisibility", this._vars.WebkitBackfaceVisibility || (P ? "visible" : "hidden"))) : S.zoom = 1,
                          d = p; d && d._next; )
                          d = d._next;
                        b = new wt(t,"transform",0,0,null,2),
                          this._linkCSSP(b, null, d),
                          b.setRatio = zt ? Qt : $t,
                          b.data = this._transform || Ht(t, n, !0),
                          b.tween = s,
                          b.pr = -1,
                          a.pop()
                      }
                      if (i) {
                        for (; p; ) {
                          for (x = p._next,
                            d = y; d && d.pr > p.pr; )
                            d = d._next;
                          (p._prev = d ? d._prev : T) ? p._prev._next = p : y = p,
                            (p._next = d) ? d._prev = p : T = p,
                            p = x
                        }
                        this._firstPT = y
                      }
                      return !0
                    }
                    ,
                    _.parse = function(t, e, i, s) {
                      var a, o, l, _, c, f, p, m, d, y, T = t.style;
                      for (a in e) {
                        if (f = e[a],
                          o = h[a],
                        "function" != typeof f || o && o.allowFunc || (f = f(v, g)),
                          o)
                          i = o.parse(t, f, a, this, i, s, e);
                        else {
                          if ("--" === a.substr(0, 2)) {
                            this._tween._propLookup[a] = this._addTween.call(this._tween, t.style, "setProperty", et(t).getPropertyValue(a) + "", f + "", a, !1, a);
                            continue
                          }
                          c = it(t, a, n) + "",
                            d = "string" == typeof f,
                            "color" === a || "fill" === a || "stroke" === a || -1 !== a.indexOf("Color") || d && R.test(f) ? (d || (f = ((f = dt(f)).length > 3 ? "rgba(" : "rgb(") + f.join(",") + ")"),
                              i = Pt(T, a, c, f, !0, "transparent", i, 0, s)) : d && I.test(f) ? i = Pt(T, a, c, f, !0, null, i, 0, s) : (p = (l = parseFloat(c)) || 0 === l ? c.substr((l + "").length) : "",
                            "" !== c && "auto" !== c || ("width" === a || "height" === a ? (l = ht(t, a, n),
                              p = "px") : "left" === a || "top" === a ? (l = st(t, a, n),
                              p = "px") : (l = "opacity" !== a ? 0 : 1,
                              p = "")),
                              (y = d && "=" === f.charAt(1)) ? (_ = parseInt(f.charAt(0) + "1", 10),
                                f = f.substr(2),
                                _ *= parseFloat(f),
                                m = f.replace(P, "")) : (_ = parseFloat(f),
                                m = d ? f.replace(P, "") : ""),
                            "" === m && (m = a in r ? r[a] : p),
                              f = _ || 0 === _ ? (y ? _ + l : _) + m : e[a],
                            p !== m && ("" === m && "lineHeight" !== a || (_ || 0 === _) && l && (l = rt(t, a, l, p),
                              "%" === m ? (l /= rt(t, a, 100, "%") / 100,
                              !0 !== e.strictUnits && (c = l + "%")) : "em" === m || "rem" === m || "vw" === m || "vh" === m ? l /= rt(t, a, 1, m) : "px" !== m && (_ = rt(t, a, _, m),
                                m = "px"),
                            y && (_ || 0 === _) && (f = _ + l + m))),
                            y && (_ += l),
                              !l && 0 !== l || !_ && 0 !== _ ? void 0 !== T[a] && (f || f + "" != "NaN" && null != f) ? (i = new wt(T,a,_ || l || 0,0,i,-1,a,!1,0,c,f)).xs0 = "none" !== f || "display" !== a && -1 === a.indexOf("Style") ? f : c : $("invalid " + a + " tween value: " + e[a]) : (i = new wt(T,a,l,_ - l,i,0,a,!1 !== u && ("px" === m || "zIndex" === a),0,c,f)).xs0 = m)
                        }
                        s && i && !i.plugin && (i.plugin = s)
                      }
                      return i
                    }
                    ,
                    _.setRatio = function(t) {
                      var e, i, r, s = this._firstPT;
                      if (1 !== t || this._tween._time !== this._tween._duration && 0 !== this._tween._time)
                        if (t || this._tween._time !== this._tween._duration && 0 !== this._tween._time || -1e-6 === this._tween._rawPrevTime)
                          for (; s; ) {
                            if (e = s.c * t + s.s,
                              s.r ? e = s.r(e) : e < 1e-6 && e > -1e-6 && (e = 0),
                              s.type)
                              if (1 === s.type)
                                if (2 === (r = s.l))
                                  s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2;
                                else if (3 === r)
                                  s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3;
                                else if (4 === r)
                                  s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4;
                                else if (5 === r)
                                  s.t[s.p] = s.xs0 + e + s.xs1 + s.xn1 + s.xs2 + s.xn2 + s.xs3 + s.xn3 + s.xs4 + s.xn4 + s.xs5;
                                else {
                                  for (i = s.xs0 + e + s.xs1,
                                    r = 1; r < s.l; r++)
                                    i += s["xn" + r] + s["xs" + (r + 1)];
                                  s.t[s.p] = i
                                }
                              else
                                -1 === s.type ? s.t[s.p] = s.xs0 : s.setRatio && s.setRatio(t);
                            else
                              s.t[s.p] = e + s.xs0;
                            s = s._next
                          }
                        else
                          for (; s; )
                            2 !== s.type ? s.t[s.p] = s.b : s.setRatio(t),
                              s = s._next;
                      else
                        for (; s; ) {
                          if (2 !== s.type)
                            if (s.r && -1 !== s.type)
                              if (e = s.r(s.s + s.c),
                                s.type) {
                                if (1 === s.type) {
                                  for (r = s.l,
                                    i = s.xs0 + e + s.xs1,
                                    r = 1; r < s.l; r++)
                                    i += s["xn" + r] + s["xs" + (r + 1)];
                                  s.t[s.p] = i
                                }
                              } else
                                s.t[s.p] = e + s.xs0;
                            else
                              s.t[s.p] = s.e;
                          else
                            s.setRatio(t);
                          s = s._next
                        }
                    }
                    ,
                    _._enableTransforms = function(t) {
                      this._transform = this._transform || Ht(this._target, n, !0),
                        this._transformType = this._transform.svg && Ct || !t && 3 !== this._transformType ? 2 : 3
                    }
                  ;
                  var ie = function(t) {
                    this.t[this.p] = this.e,
                      this.data._linkCSSP(this, this._next, null, !0)
                  };
                  _._addLazySet = function(t, e, i) {
                    var r = this._firstPT = new wt(t,e,0,0,this._firstPT,2);
                    r.e = i,
                      r.setRatio = ie,
                      r.data = this
                  }
                    ,
                    _._linkCSSP = function(t, e, i, r) {
                      return t && (e && (e._prev = t),
                      t._next && (t._next._prev = t._prev),
                        t._prev ? t._prev._next = t._next : this._firstPT === t && (this._firstPT = t._next,
                          r = !0),
                        i ? i._next = t : r || null !== this._firstPT || (this._firstPT = t),
                        t._next = e,
                        t._prev = i),
                        t
                    }
                    ,
                    _._mod = function(t) {
                      for (var e = this._firstPT; e; )
                        "function" == typeof t[e.p] && (e.r = t[e.p]),
                          e = e._next
                    }
                    ,
                    _._kill = function(e) {
                      var i, r, s, n = e;
                      if (e.autoAlpha || e.alpha) {
                        for (r in n = {},
                          e)
                          n[r] = e[r];
                        n.opacity = 1,
                        n.autoAlpha && (n.visibility = 1)
                      }
                      for (e.className && (i = this._classNamePT) && ((s = i.xfirst) && s._prev ? this._linkCSSP(s._prev, i._next, s._prev._prev) : s === this._firstPT && (this._firstPT = i._next),
                      i._next && this._linkCSSP(i._next, i._next._next, s._prev),
                        this._classNamePT = null),
                        i = this._firstPT; i; )
                        i.plugin && i.plugin !== r && i.plugin._kill && (i.plugin._kill(e),
                          r = i.plugin),
                          i = i._next;
                      return t.prototype._kill.call(this, n)
                    }
                  ;
                  var re = function(t, e, i) {
                    var r, s, n, a;
                    if (t.slice)
                      for (s = t.length; --s > -1; )
                        re(t[s], e, i);
                    else
                      for (s = (r = t.childNodes).length; --s > -1; )
                        a = (n = r[s]).type,
                        n.style && (e.push(nt(n)),
                        i && i.push(n)),
                        1 !== a && 9 !== a && 11 !== a || !n.childNodes.length || re(n, e, i)
                  };
                  return o.cascadeTo = function(t, i, r) {
                    var s, n, a, o, l = e.to(t, i, r), h = [l], _ = [], u = [], c = [], f = e._internals.reservedProps;
                    for (t = l._targets || l.target,
                      re(t, _, c),
                      l.render(i, !0, !0),
                      re(t, u),
                      l.render(0, !0, !0),
                      l._enabled(!0),
                      s = c.length; --s > -1; )
                      if ((n = at(c[s], _[s], u[s])).firstMPT) {
                        for (a in n = n.difs,
                          r)
                          f[a] && (n[a] = r[a]);
                        for (a in o = {},
                          n)
                          o[a] = _[s][a];
                        h.push(e.fromTo(c[s], i, o, n))
                      }
                    return h
                  }
                    ,
                    t.activate([o]),
                    o
                }
              ), !0),
              function() {
                var t = s._gsDefine.plugin({
                  propName: "roundProps",
                  version: "1.7.0",
                  priority: -1,
                  API: 2,
                  init: function(t, e, i) {
                    return this._tween = i,
                      !0
                  }
                })
                  , e = function(t) {
                  var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
                  return function(i) {
                    return (Math.round(i / t) * t * e | 0) / e
                  }
                }
                  , i = function(t, e) {
                  for (; t; )
                    t.f || t.blob || (t.m = e || Math.round),
                      t = t._next
                }
                  , r = t.prototype;
                r._onInitAllProps = function() {
                  var t, r, s, n, a = this._tween, o = a.vars.roundProps, l = {}, h = a._propLookup.roundProps;
                  if ("object" != typeof o || o.push)
                    for ("string" == typeof o && (o = o.split(",")),
                      s = o.length; --s > -1; )
                      l[o[s]] = Math.round;
                  else
                    for (n in o)
                      l[n] = e(o[n]);
                  for (n in l)
                    for (t = a._firstPT; t; )
                      r = t._next,
                        t.pg ? t.t._mod(l) : t.n === n && (2 === t.f && t.t ? i(t.t._firstPT, l[n]) : (this._add(t.t, n, t.s, t.c, l[n]),
                        r && (r._prev = t._prev),
                          t._prev ? t._prev._next = r : a._firstPT === t && (a._firstPT = r),
                          t._next = t._prev = null,
                          a._propLookup[n] = h)),
                        t = r;
                  return !1
                }
                  ,
                  r._add = function(t, e, i, r, s) {
                    this._addTween(t, e, i, i + r, e, s || Math.round),
                      this._overwriteProps.push(e)
                  }
              }(),
              s._gsDefine.plugin({
                propName: "attr",
                API: 2,
                version: "0.6.1",
                init: function(t, e, i, r) {
                  var s, n;
                  if ("function" != typeof t.setAttribute)
                    return !1;
                  for (s in e)
                    "function" == typeof (n = e[s]) && (n = n(r, t)),
                      this._addTween(t, "setAttribute", t.getAttribute(s) + "", n + "", s, !1, s),
                      this._overwriteProps.push(s);
                  return !0
                }
              }),
              s._gsDefine.plugin({
                propName: "directionalRotation",
                version: "0.3.1",
                API: 2,
                init: function(t, e, i, r) {
                  "object" != typeof e && (e = {
                    rotation: e
                  }),
                    this.finals = {};
                  var s, n, a, o, l, h, _ = !0 === e.useRadians ? 2 * Math.PI : 360;
                  for (s in e)
                    "useRadians" !== s && ("function" == typeof (o = e[s]) && (o = o(r, t)),
                      n = (h = (o + "").split("_"))[0],
                      a = parseFloat("function" != typeof t[s] ? t[s] : t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]()),
                      l = (o = this.finals[s] = "string" == typeof n && "=" === n.charAt(1) ? a + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0) - a,
                    h.length && (-1 !== (n = h.join("_")).indexOf("short") && (l %= _) !== l % (_ / 2) && (l = l < 0 ? l + _ : l - _),
                      -1 !== n.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * _) % _ - (l / _ | 0) * _ : -1 !== n.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * _) % _ - (l / _ | 0) * _)),
                    (l > 1e-6 || l < -1e-6) && (this._addTween(t, s, a, a + l, s),
                      this._overwriteProps.push(s)));
                  return !0
                },
                set: function(t) {
                  var e;
                  if (1 !== t)
                    this._super.setRatio.call(this, t);
                  else
                    for (e = this._firstPT; e; )
                      e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p],
                        e = e._next
                }
              })._autoCSS = !0,
              s._gsDefine("easing.Back", ["easing.Ease"], (function(t) {
                  var e, i, r, n, a = s.GreenSockGlobals || s, o = a.com.greensock, l = 2 * Math.PI, h = Math.PI / 2, _ = o._class, u = function(e, i) {
                    var r = _("easing." + e, (function() {}
                    ), !0)
                      , s = r.prototype = new t;
                    return s.constructor = r,
                      s.getRatio = i,
                      r
                  }, c = t.register || function() {}
                    , f = function(t, e, i, r, s) {
                    var n = _("easing." + t, {
                      easeOut: new e,
                      easeIn: new i,
                      easeInOut: new r
                    }, !0);
                    return c(n, t),
                      n
                  }, p = function(t, e, i) {
                    this.t = t,
                      this.v = e,
                    i && (this.next = i,
                      i.prev = this,
                      this.c = i.v - e,
                      this.gap = i.t - t)
                  }, m = function(e, i) {
                    var r = _("easing." + e, (function(t) {
                        this._p1 = t || 0 === t ? t : 1.70158,
                          this._p2 = 1.525 * this._p1
                      }
                    ), !0)
                      , s = r.prototype = new t;
                    return s.constructor = r,
                      s.getRatio = i,
                      s.config = function(t) {
                        return new r(t)
                      }
                      ,
                      r
                  }, d = f("Back", m("BackOut", (function(t) {
                      return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
                    }
                  )), m("BackIn", (function(t) {
                      return t * t * ((this._p1 + 1) * t - this._p1)
                    }
                  )), m("BackInOut", (function(t) {
                      return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
                    }
                  ))), g = _("easing.SlowMo", (function(t, e, i) {
                      e = e || 0 === e ? e : .7,
                        null == t ? t = .7 : t > 1 && (t = 1),
                        this._p = 1 !== t ? e : 0,
                        this._p1 = (1 - t) / 2,
                        this._p2 = t,
                        this._p3 = this._p1 + this._p2,
                        this._calcEnd = !0 === i
                    }
                  ), !0), v = g.prototype = new t;
                  return v.constructor = g,
                    v.getRatio = function(t) {
                      var e = t + (.5 - t) * this._p;
                      return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
                    }
                    ,
                    g.ease = new g(.7,.7),
                    v.config = g.config = function(t, e, i) {
                      return new g(t,e,i)
                    }
                    ,
                    (v = (e = _("easing.SteppedEase", (function(t, e) {
                        t = t || 1,
                          this._p1 = 1 / t,
                          this._p2 = t + (e ? 0 : 1),
                          this._p3 = e ? 1 : 0
                      }
                    ), !0)).prototype = new t).constructor = e,
                    v.getRatio = function(t) {
                      return t < 0 ? t = 0 : t >= 1 && (t = .999999999),
                      ((this._p2 * t | 0) + this._p3) * this._p1
                    }
                    ,
                    v.config = e.config = function(t, i) {
                      return new e(t,i)
                    }
                    ,
                    (v = (i = _("easing.ExpoScaleEase", (function(t, e, i) {
                        this._p1 = Math.log(e / t),
                          this._p2 = e - t,
                          this._p3 = t,
                          this._ease = i
                      }
                    ), !0)).prototype = new t).constructor = i,
                    v.getRatio = function(t) {
                      return this._ease && (t = this._ease.getRatio(t)),
                      (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
                    }
                    ,
                    v.config = i.config = function(t, e, r) {
                      return new i(t,e,r)
                    }
                    ,
                    (v = (r = _("easing.RoughEase", (function(e) {
                        for (var i, r, s, n, a, o, l = (e = e || {}).taper || "none", h = [], _ = 0, u = 0 | (e.points || 20), c = u, f = !1 !== e.randomize, m = !0 === e.clamp, d = e.template instanceof t ? e.template : null, g = "number" == typeof e.strength ? .4 * e.strength : .4; --c > -1; )
                          i = f ? Math.random() : 1 / u * c,
                            r = d ? d.getRatio(i) : i,
                            s = "none" === l ? g : "out" === l ? (n = 1 - i) * n * g : "in" === l ? i * i * g : i < .5 ? (n = 2 * i) * n * .5 * g : (n = 2 * (1 - i)) * n * .5 * g,
                            f ? r += Math.random() * s - .5 * s : c % 2 ? r += .5 * s : r -= .5 * s,
                          m && (r > 1 ? r = 1 : r < 0 && (r = 0)),
                            h[_++] = {
                              x: i,
                              y: r
                            };
                        for (h.sort((function(t, e) {
                            return t.x - e.x
                          }
                        )),
                          o = new p(1,1,null),
                          c = u; --c > -1; )
                          a = h[c],
                            o = new p(a.x,a.y,o);
                        this._prev = new p(0,0,0 !== o.t ? o : o.next)
                      }
                    ), !0)).prototype = new t).constructor = r,
                    v.getRatio = function(t) {
                      var e = this._prev;
                      if (t > e.t) {
                        for (; e.next && t >= e.t; )
                          e = e.next;
                        e = e.prev
                      } else
                        for (; e.prev && t <= e.t; )
                          e = e.prev;
                      return this._prev = e,
                      e.v + (t - e.t) / e.gap * e.c
                    }
                    ,
                    v.config = function(t) {
                      return new r(t)
                    }
                    ,
                    r.ease = new r,
                    f("Bounce", u("BounceOut", (function(t) {
                        return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                      }
                    )), u("BounceIn", (function(t) {
                        return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
                      }
                    )), u("BounceInOut", (function(t) {
                        var e = t < .5;
                        return (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
                          e ? .5 * (1 - t) : .5 * t + .5
                      }
                    ))),
                    f("Circ", u("CircOut", (function(t) {
                        return Math.sqrt(1 - (t -= 1) * t)
                      }
                    )), u("CircIn", (function(t) {
                        return -(Math.sqrt(1 - t * t) - 1)
                      }
                    )), u("CircInOut", (function(t) {
                        return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                      }
                    ))),
                    f("Elastic", (n = function(e, i, r) {
                        var s = _("easing." + e, (function(t, e) {
                            this._p1 = t >= 1 ? t : 1,
                              this._p2 = (e || r) / (t < 1 ? t : 1),
                              this._p3 = this._p2 / l * (Math.asin(1 / this._p1) || 0),
                              this._p2 = l / this._p2
                          }
                        ), !0)
                          , n = s.prototype = new t;
                        return n.constructor = s,
                          n.getRatio = i,
                          n.config = function(t, e) {
                            return new s(t,e)
                          }
                          ,
                          s
                      }
                    )("ElasticOut", (function(t) {
                        return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
                      }
                    ), .3), n("ElasticIn", (function(t) {
                        return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
                      }
                    ), .3), n("ElasticInOut", (function(t) {
                        return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
                      }
                    ), .45)),
                    f("Expo", u("ExpoOut", (function(t) {
                        return 1 - Math.pow(2, -10 * t)
                      }
                    )), u("ExpoIn", (function(t) {
                        return Math.pow(2, 10 * (t - 1)) - .001
                      }
                    )), u("ExpoInOut", (function(t) {
                        return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                      }
                    ))),
                    f("Sine", u("SineOut", (function(t) {
                        return Math.sin(t * h)
                      }
                    )), u("SineIn", (function(t) {
                        return 1 - Math.cos(t * h)
                      }
                    )), u("SineInOut", (function(t) {
                        return -.5 * (Math.cos(Math.PI * t) - 1)
                      }
                    ))),
                    _("easing.EaseLookup", {
                      find: function(e) {
                        return t.map[e]
                      }
                    }, !0),
                    c(a.SlowMo, "SlowMo", "ease,"),
                    c(r, "RoughEase", "ease,"),
                    c(e, "SteppedEase", "ease,"),
                    d
                }
              ), !0)
          }
        )),
        s._gsDefine && s._gsQueue.pop()(),
          function(i, s) {
            "use strict";
            var n = {}
              , a = i.document
              , o = i.GreenSockGlobals = i.GreenSockGlobals || i
              , l = o.TweenMax;
            if (l)
              return t.exports && (t.exports = l),
                l;
            var h, _, u, c, f, p, m, d = function(t) {
                var e, i = t.split("."), r = o;
                for (e = 0; e < i.length; e++)
                  r[i[e]] = r = r[i[e]] || {};
                return r
              }, g = d("com.greensock"), v = function(t) {
                var e, i = [], r = t.length;
                for (e = 0; e !== r; i.push(t[e++]))
                  ;
                return i
              }, y = function() {}, T = (p = Object.prototype.toString,
                  m = p.call([]),
                  function(t) {
                    return null != t && (t instanceof Array || "object" == typeof t && !!t.push && p.call(t) === m)
                  }
              ), x = {}, w = function(i, s, a, l) {
                this.sc = x[i] ? x[i].sc : [],
                  x[i] = this,
                  this.gsClass = null,
                  this.func = a;
                var h = [];
                this.check = function(_) {
                  for (var u, c, f, p, m = s.length, g = m; --m > -1; )
                    (u = x[s[m]] || new w(s[m],[])).gsClass ? (h[m] = u.gsClass,
                      g--) : _ && u.sc.push(this);
                  if (0 === g && a) {
                    if (f = (c = ("com.greensock." + i).split(".")).pop(),
                      p = d(c.join("."))[f] = this.gsClass = a.apply(a, h),
                      l)
                      if (o[f] = n[f] = p,
                        t.exports)
                        if ("TweenMax" === i)
                          for (m in t.exports = n.TweenMax = p,
                            n)
                            p[m] = n[m];
                        else
                          n.TweenMax && (n.TweenMax[f] = p);
                      else
                        void 0 === (r = function() {
                          return p
                        }
                          .apply(e, [])) || (t.exports = r);
                    for (m = 0; m < this.sc.length; m++)
                      this.sc[m].check()
                  }
                }
                  ,
                  this.check(!0)
              }, b = i._gsDefine = function(t, e, i, r) {
                return new w(t,e,i,r)
              }
              , P = g._class = function(t, e, i) {
                return e = e || function() {}
                  ,
                  b(t, [], (function() {
                      return e
                    }
                  ), i),
                  e
              }
            ;
            b.globals = o;
            var S = [0, 0, 1, 1]
              , k = P("easing.Ease", (function(t, e, i, r) {
                  this._func = t,
                    this._type = i || 0,
                    this._power = r || 0,
                    this._params = e ? S.concat(e) : S
                }
              ), !0)
              , O = k.map = {}
              , R = k.register = function(t, e, i, r) {
                for (var s, n, a, o, l = e.split(","), h = l.length, _ = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1; )
                  for (n = l[h],
                    s = r ? P("easing." + n, null, !0) : g.easing[n] || {},
                    a = _.length; --a > -1; )
                    o = _[a],
                      O[n + "." + o] = O[o + n] = s[o] = t.getRatio ? t : t[o] || new t
              }
            ;
            for ((u = k.prototype)._calcEnd = !1,
              u.getRatio = function(t) {
                if (this._func)
                  return this._params[0] = t,
                    this._func.apply(null, this._params);
                var e = this._type
                  , i = this._power
                  , r = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
                return 1 === i ? r *= r : 2 === i ? r *= r * r : 3 === i ? r *= r * r * r : 4 === i && (r *= r * r * r * r),
                  1 === e ? 1 - r : 2 === e ? r : t < .5 ? r / 2 : 1 - r / 2
              }
              ,
              _ = (h = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --_ > -1; )
              u = h[_] + ",Power" + _,
                R(new k(null,null,1,_), u, "easeOut", !0),
                R(new k(null,null,2,_), u, "easeIn" + (0 === _ ? ",easeNone" : "")),
                R(new k(null,null,3,_), u, "easeInOut");
            O.linear = g.easing.Linear.easeIn,
              O.swing = g.easing.Quad.easeInOut;
            var C = P("events.EventDispatcher", (function(t) {
                this._listeners = {},
                  this._eventTarget = t || this
              }
            ));
            (u = C.prototype).addEventListener = function(t, e, i, r, s) {
              s = s || 0;
              var n, a, o = this._listeners[t], l = 0;
              for (this !== c || f || c.wake(),
              null == o && (this._listeners[t] = o = []),
                a = o.length; --a > -1; )
                (n = o[a]).c === e && n.s === i ? o.splice(a, 1) : 0 === l && n.pr < s && (l = a + 1);
              o.splice(l, 0, {
                c: e,
                s: i,
                up: r,
                pr: s
              })
            }
              ,
              u.removeEventListener = function(t, e) {
                var i, r = this._listeners[t];
                if (r)
                  for (i = r.length; --i > -1; )
                    if (r[i].c === e)
                      return void r.splice(i, 1)
              }
              ,
              u.dispatchEvent = function(t) {
                var e, i, r, s = this._listeners[t];
                if (s)
                  for ((e = s.length) > 1 && (s = s.slice(0)),
                    i = this._eventTarget; --e > -1; )
                    (r = s[e]) && (r.up ? r.c.call(r.s || i, {
                      type: t,
                      target: i
                    }) : r.c.call(r.s || i))
              }
            ;
            var A = i.requestAnimationFrame
              , D = i.cancelAnimationFrame
              , M = Date.now || function() {
              return (new Date).getTime()
            }
              , F = M();
            for (_ = (h = ["ms", "moz", "webkit", "o"]).length; --_ > -1 && !A; )
              A = i[h[_] + "RequestAnimationFrame"],
                D = i[h[_] + "CancelAnimationFrame"] || i[h[_] + "CancelRequestAnimationFrame"];
            P("Ticker", (function(t, e) {
                var i, r, s, n, o, l = this, h = M(), _ = !(!1 === e || !A) && "auto", u = 500, p = 33, m = function(t) {
                  var e, a, _ = M() - F;
                  _ > u && (h += _ - p),
                    F += _,
                    l.time = (F - h) / 1e3,
                    e = l.time - o,
                  (!i || e > 0 || !0 === t) && (l.frame++,
                    o += e + (e >= n ? .004 : n - e),
                    a = !0),
                  !0 !== t && (s = r(m)),
                  a && l.dispatchEvent("tick")
                };
                C.call(l),
                  l.time = l.frame = 0,
                  l.tick = function() {
                    m(!0)
                  }
                  ,
                  l.lagSmoothing = function(t, e) {
                    if (!arguments.length)
                      return u < 1e8;
                    u = t || 1e8,
                      p = Math.min(e, u, 0)
                  }
                  ,
                  l.sleep = function() {
                    null != s && (_ && D ? D(s) : clearTimeout(s),
                      r = y,
                      s = null,
                    l === c && (f = !1))
                  }
                  ,
                  l.wake = function(t) {
                    null !== s ? l.sleep() : t ? h += -F + (F = M()) : l.frame > 10 && (F = M() - u + 5),
                      r = 0 === i ? y : _ && A ? A : function(t) {
                        return setTimeout(t, 1e3 * (o - l.time) + 1 | 0)
                      }
                      ,
                    l === c && (f = !0),
                      m(2)
                  }
                  ,
                  l.fps = function(t) {
                    if (!arguments.length)
                      return i;
                    n = 1 / ((i = t) || 60),
                      o = this.time + n,
                      l.wake()
                  }
                  ,
                  l.useRAF = function(t) {
                    if (!arguments.length)
                      return _;
                    l.sleep(),
                      _ = t,
                      l.fps(i)
                  }
                  ,
                  l.fps(t),
                  setTimeout((function() {
                      "auto" === _ && l.frame < 5 && "hidden" !== (a || {}).visibilityState && l.useRAF(!1)
                    }
                  ), 1500)
              }
            )),
              (u = g.Ticker.prototype = new g.events.EventDispatcher).constructor = g.Ticker;
            var E = P("core.Animation", (function(t, e) {
                if (this.vars = e = e || {},
                  this._duration = this._totalDuration = t || 0,
                  this._delay = Number(e.delay) || 0,
                  this._timeScale = 1,
                  this._active = !!e.immediateRender,
                  this.data = e.data,
                  this._reversed = !!e.reversed,
                  tt) {
                  f || c.wake();
                  var i = this.vars.useFrames ? J : tt;
                  i.add(this, i._time),
                  this.vars.paused && this.paused(!0)
                }
              }
            ));
            c = E.ticker = new g.Ticker,
              (u = E.prototype)._dirty = u._gc = u._initted = u._paused = !1,
              u._totalTime = u._time = 0,
              u._rawPrevTime = -1,
              u._next = u._last = u._onUpdate = u._timeline = u.timeline = null,
              u._paused = !1;
            var z = function() {
              f && M() - F > 2e3 && ("hidden" !== (a || {}).visibilityState || !c.lagSmoothing()) && c.wake();
              var t = setTimeout(z, 2e3);
              t.unref && t.unref()
            };
            z(),
              u.play = function(t, e) {
                return null != t && this.seek(t, e),
                  this.reversed(!1).paused(!1)
              }
              ,
              u.pause = function(t, e) {
                return null != t && this.seek(t, e),
                  this.paused(!0)
              }
              ,
              u.resume = function(t, e) {
                return null != t && this.seek(t, e),
                  this.paused(!1)
              }
              ,
              u.seek = function(t, e) {
                return this.totalTime(Number(t), !1 !== e)
              }
              ,
              u.restart = function(t, e) {
                return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
              }
              ,
              u.reverse = function(t, e) {
                return null != t && this.seek(t || this.totalDuration(), e),
                  this.reversed(!0).paused(!1)
              }
              ,
              u.render = function(t, e, i) {}
              ,
              u.invalidate = function() {
                return this._time = this._totalTime = 0,
                  this._initted = this._gc = !1,
                  this._rawPrevTime = -1,
                !this._gc && this.timeline || this._enabled(!0),
                  this
              }
              ,
              u.isActive = function() {
                var t, e = this._timeline, i = this._startTime;
                return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-8
              }
              ,
              u._enabled = function(t, e) {
                return f || c.wake(),
                  this._gc = !t,
                  this._active = this.isActive(),
                !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
                  !1
              }
              ,
              u._kill = function(t, e) {
                return this._enabled(!1, !1)
              }
              ,
              u.kill = function(t, e) {
                return this._kill(t, e),
                  this
              }
              ,
              u._uncache = function(t) {
                for (var e = t ? this : this.timeline; e; )
                  e._dirty = !0,
                    e = e.timeline;
                return this
              }
              ,
              u._swapSelfInParams = function(t) {
                for (var e = t.length, i = t.concat(); --e > -1; )
                  "{self}" === t[e] && (i[e] = this);
                return i
              }
              ,
              u._callback = function(t) {
                var e = this.vars
                  , i = e[t]
                  , r = e[t + "Params"]
                  , s = e[t + "Scope"] || e.callbackScope || this;
                switch (r ? r.length : 0) {
                  case 0:
                    i.call(s);
                    break;
                  case 1:
                    i.call(s, r[0]);
                    break;
                  case 2:
                    i.call(s, r[0], r[1]);
                    break;
                  default:
                    i.apply(s, r)
                }
              }
              ,
              u.eventCallback = function(t, e, i, r) {
                if ("on" === (t || "").substr(0, 2)) {
                  var s = this.vars;
                  if (1 === arguments.length)
                    return s[t];
                  null == e ? delete s[t] : (s[t] = e,
                    s[t + "Params"] = T(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i,
                    s[t + "Scope"] = r),
                  "onUpdate" === t && (this._onUpdate = e)
                }
                return this
              }
              ,
              u.delay = function(t) {
                return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay),
                  this._delay = t,
                  this) : this._delay
              }
              ,
              u.duration = function(t) {
                return arguments.length ? (this._duration = this._totalDuration = t,
                  this._uncache(!0),
                this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
                  this) : (this._dirty = !1,
                  this._duration)
              }
              ,
              u.totalDuration = function(t) {
                return this._dirty = !1,
                  arguments.length ? this.duration(t) : this._totalDuration
              }
              ,
              u.time = function(t, e) {
                return arguments.length ? (this._dirty && this.totalDuration(),
                  this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
              }
              ,
              u.totalTime = function(t, e, i) {
                if (f || c.wake(),
                  !arguments.length)
                  return this._totalTime;
                if (this._timeline) {
                  if (t < 0 && !i && (t += this.totalDuration()),
                    this._timeline.smoothChildTiming) {
                    this._dirty && this.totalDuration();
                    var r = this._totalDuration
                      , s = this._timeline;
                    if (t > r && !i && (t = r),
                      this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? r - t : t) / this._timeScale,
                    s._dirty || this._uncache(!1),
                      s._timeline)
                      for (; s._timeline; )
                        s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0),
                          s = s._timeline
                  }
                  this._gc && this._enabled(!0, !1),
                  this._totalTime === t && 0 !== this._duration || (X.length && it(),
                    this.render(t, e, !1),
                  X.length && it())
                }
                return this
              }
              ,
              u.progress = u.totalProgress = function(t, e) {
                var i = this.duration();
                return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
              }
              ,
              u.startTime = function(t) {
                return arguments.length ? (t !== this._startTime && (this._startTime = t,
                this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)),
                  this) : this._startTime
              }
              ,
              u.endTime = function(t) {
                return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
              }
              ,
              u.timeScale = function(t) {
                if (!arguments.length)
                  return this._timeScale;
                var e, i;
                for (t = t || 1e-8,
                this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(),
                  this._startTime = i - (i - this._startTime) * this._timeScale / t),
                  this._timeScale = t,
                  i = this.timeline; i && i.timeline; )
                  i._dirty = !0,
                    i.totalDuration(),
                    i = i.timeline;
                return this
              }
              ,
              u.reversed = function(t) {
                return arguments.length ? (t != this._reversed && (this._reversed = t,
                  this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
                  this) : this._reversed
              }
              ,
              u.paused = function(t) {
                if (!arguments.length)
                  return this._paused;
                var e, i, r = this._timeline;
                return t != this._paused && r && (f || t || c.wake(),
                  i = (e = r.rawTime()) - this._pauseTime,
                !t && r.smoothChildTiming && (this._startTime += i,
                  this._uncache(!1)),
                  this._pauseTime = t ? e : null,
                  this._paused = t,
                  this._active = this.isActive(),
                !t && 0 !== i && this._initted && this.duration() && (e = r.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale,
                  this.render(e, e === this._totalTime, !0))),
                this._gc && !t && this._enabled(!0, !1),
                  this
              }
            ;
            var L = P("core.SimpleTimeline", (function(t) {
                E.call(this, 0, t),
                  this.autoRemoveChildren = this.smoothChildTiming = !0
              }
            ));
            (u = L.prototype = new E).constructor = L,
              u.kill()._gc = !1,
              u._first = u._last = u._recent = null,
              u._sortChildren = !1,
              u.add = u.insert = function(t, e, i, r) {
                var s, n;
                if (t._startTime = Number(e || 0) + t._delay,
                t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)),
                t.timeline && t.timeline._remove(t, !0),
                  t.timeline = t._timeline = this,
                t._gc && t._enabled(!0, !0),
                  s = this._last,
                  this._sortChildren)
                  for (n = t._startTime; s && s._startTime > n; )
                    s = s._prev;
                return s ? (t._next = s._next,
                  s._next = t) : (t._next = this._first,
                  this._first = t),
                  t._next ? t._next._prev = t : this._last = t,
                  t._prev = s,
                  this._recent = t,
                this._timeline && this._uncache(!0),
                  this
              }
              ,
              u._remove = function(t, e) {
                return t.timeline === this && (e || t._enabled(!1, !0),
                  t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next),
                  t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev),
                  t._next = t._prev = t.timeline = null,
                t === this._recent && (this._recent = this._last),
                this._timeline && this._uncache(!0)),
                  this
              }
              ,
              u.render = function(t, e, i) {
                var r, s = this._first;
                for (this._totalTime = this._time = this._rawPrevTime = t; s; )
                  r = s._next,
                  (s._active || t >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                    s = r
              }
              ,
              u.rawTime = function() {
                return f || c.wake(),
                  this._totalTime
              }
            ;
            var I = P("TweenLite", (function(t, e, r) {
                if (E.call(this, e, r),
                  this.render = I.prototype.render,
                null == t)
                  throw "Cannot tween a null target.";
                this.target = t = "string" != typeof t ? t : I.selector(t) || t;
                var s, n, a, o = t.jquery || t.length && t !== i && t[0] && (t[0] === i || t[0].nodeType && t[0].style && !t.nodeType), l = this.vars.overwrite;
                if (this._overwrite = l = null == l ? K[I.defaultOverwrite] : "number" == typeof l ? l >> 0 : K[l],
                (o || t instanceof Array || t.push && T(t)) && "number" != typeof t[0])
                  for (this._targets = a = v(t),
                    this._propLookup = [],
                    this._siblings = [],
                    s = 0; s < a.length; s++)
                    (n = a[s]) ? "string" != typeof n ? n.length && n !== i && n[0] && (n[0] === i || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(s--, 1),
                      this._targets = a = a.concat(v(n))) : (this._siblings[s] = rt(n, this, !1),
                    1 === l && this._siblings[s].length > 1 && nt(n, this, null, 1, this._siblings[s])) : "string" == typeof (n = a[s--] = I.selector(n)) && a.splice(s + 1, 1) : a.splice(s--, 1);
                else
                  this._propLookup = {},
                    this._siblings = rt(t, this, !1),
                  1 === l && this._siblings.length > 1 && nt(t, this, null, 1, this._siblings);
                (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-8,
                  this.render(Math.min(0, -this._delay)))
              }
            ), !0)
              , N = function(t) {
              return t && t.length && t !== i && t[0] && (t[0] === i || t[0].nodeType && t[0].style && !t.nodeType)
            };
            (u = I.prototype = new E).constructor = I,
              u.kill()._gc = !1,
              u.ratio = 0,
              u._firstPT = u._targets = u._overwrittenProps = u._startAt = null,
              u._notifyPluginsOfEnabled = u._lazy = !1,
              I.version = "2.1.3",
              I.defaultEase = u._ease = new k(null,null,1,1),
              I.defaultOverwrite = "auto",
              I.ticker = c,
              I.autoSleep = 120,
              I.lagSmoothing = function(t, e) {
                c.lagSmoothing(t, e)
              }
              ,
              I.selector = i.$ || i.jQuery || function(t) {
                var e = i.$ || i.jQuery;
                return e ? (I.selector = e,
                  e(t)) : (a || (a = i.document),
                  a ? a.querySelectorAll ? a.querySelectorAll(t) : a.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t)
              }
            ;
            var X = []
              , B = {}
              , j = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
              , Y = /[\+-]=-?[\.\d]/
              , U = function(t) {
                for (var e, i = this._firstPT; i; )
                  e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s,
                    i.m ? e = i.m.call(this._tween, e, this._target || i.t, this._tween) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0),
                    i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e,
                    i = i._next
              }
              , V = function(t) {
                return (1e3 * t | 0) / 1e3 + ""
              }
              , q = function(t, e, i, r) {
                var s, n, a, o, l, h, _, u = [], c = 0, f = "", p = 0;
                for (u.start = t,
                  u.end = e,
                  t = u[0] = t + "",
                  e = u[1] = e + "",
                i && (i(u),
                  t = u[0],
                  e = u[1]),
                  u.length = 0,
                  s = t.match(j) || [],
                  n = e.match(j) || [],
                r && (r._next = null,
                  r.blob = 1,
                  u._firstPT = u._applyPT = r),
                  l = n.length,
                  o = 0; o < l; o++)
                  _ = n[o],
                    f += (h = e.substr(c, e.indexOf(_, c) - c)) || !o ? h : ",",
                    c += h.length,
                    p ? p = (p + 1) % 5 : "rgba(" === h.substr(-5) && (p = 1),
                    _ === s[o] || s.length <= o ? f += _ : (f && (u.push(f),
                      f = ""),
                      a = parseFloat(s[o]),
                      u.push(a),
                      u._firstPT = {
                        _next: u._firstPT,
                        t: u,
                        p: u.length - 1,
                        s: a,
                        c: ("=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * parseFloat(_.substr(2)) : parseFloat(_) - a) || 0,
                        f: 0,
                        m: p && p < 4 ? Math.round : V
                      }),
                    c += _.length;
                return (f += e.substr(c)) && u.push(f),
                  u.setRatio = U,
                Y.test(e) && (u.end = null),
                  u
              }
              , W = function(t, e, i, r, s, n, a, o, l) {
                "function" == typeof r && (r = r(l || 0, t));
                var h = typeof t[e]
                  , _ = "function" !== h ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3)
                  , u = "get" !== i ? i : _ ? a ? t[_](a) : t[_]() : t[e]
                  , c = "string" == typeof r && "=" === r.charAt(1)
                  , f = {
                  t: t,
                  p: e,
                  s: u,
                  f: "function" === h,
                  pg: 0,
                  n: s || e,
                  m: n ? "function" == typeof n ? n : Math.round : 0,
                  pr: 0,
                  c: c ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2)) : parseFloat(r) - u || 0
                };
                if (("number" != typeof u || "number" != typeof r && !c) && (a || isNaN(u) || !c && isNaN(r) || "boolean" == typeof u || "boolean" == typeof r ? (f.fp = a,
                  f = {
                    t: q(u, c ? parseFloat(f.s) + f.c + (f.s + "").replace(/[0-9\-\.]/g, "") : r, o || I.defaultStringFilter, f),
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 2,
                    pg: 0,
                    n: s || e,
                    pr: 0,
                    m: 0
                  }) : (f.s = parseFloat(u),
                c || (f.c = parseFloat(r) - f.s || 0))),
                  f.c)
                  return (f._next = this._firstPT) && (f._next._prev = f),
                    this._firstPT = f,
                    f
              }
              , G = I._internals = {
                isArray: T,
                isSelector: N,
                lazyTweens: X,
                blobDif: q
              }
              , Z = I._plugins = {}
              , H = G.tweenLookup = {}
              , $ = 0
              , Q = G.reservedProps = {
                ease: 1,
                delay: 1,
                overwrite: 1,
                onComplete: 1,
                onCompleteParams: 1,
                onCompleteScope: 1,
                useFrames: 1,
                runBackwards: 1,
                startAt: 1,
                onUpdate: 1,
                onUpdateParams: 1,
                onUpdateScope: 1,
                onStart: 1,
                onStartParams: 1,
                onStartScope: 1,
                onReverseComplete: 1,
                onReverseCompleteParams: 1,
                onReverseCompleteScope: 1,
                onRepeat: 1,
                onRepeatParams: 1,
                onRepeatScope: 1,
                easeParams: 1,
                yoyo: 1,
                immediateRender: 1,
                repeat: 1,
                repeatDelay: 1,
                data: 1,
                paused: 1,
                reversed: 1,
                autoCSS: 1,
                lazy: 1,
                onOverwrite: 1,
                callbackScope: 1,
                stringFilter: 1,
                id: 1,
                yoyoEase: 1,
                stagger: 1
              }
              , K = {
                none: 0,
                all: 1,
                auto: 2,
                concurrent: 3,
                allOnStart: 4,
                preexisting: 5,
                true: 1,
                false: 0
              }
              , J = E._rootFramesTimeline = new L
              , tt = E._rootTimeline = new L
              , et = 30
              , it = G.lazyRender = function() {
                var t, e, i = X.length;
                for (B = {},
                  t = 0; t < i; t++)
                  (e = X[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0),
                    e._lazy = !1);
                X.length = 0
              }
            ;
            tt._startTime = c.time,
              J._startTime = c.frame,
              tt._active = J._active = !0,
              setTimeout(it, 1),
              E._updateRoot = I.render = function() {
                var t, e, i;
                if (X.length && it(),
                  tt.render((c.time - tt._startTime) * tt._timeScale, !1, !1),
                  J.render((c.frame - J._startTime) * J._timeScale, !1, !1),
                X.length && it(),
                c.frame >= et) {
                  for (i in et = c.frame + (parseInt(I.autoSleep, 10) || 120),
                    H) {
                    for (t = (e = H[i].tweens).length; --t > -1; )
                      e[t]._gc && e.splice(t, 1);
                    0 === e.length && delete H[i]
                  }
                  if ((!(i = tt._first) || i._paused) && I.autoSleep && !J._first && 1 === c._listeners.tick.length) {
                    for (; i && i._paused; )
                      i = i._next;
                    i || c.sleep()
                  }
                }
              }
              ,
              c.addEventListener("tick", E._updateRoot);
            var rt = function(t, e, i) {
              var r, s, n = t._gsTweenID;
              if (H[n || (t._gsTweenID = n = "t" + $++)] || (H[n] = {
                target: t,
                tweens: []
              }),
              e && ((r = H[n].tweens)[s = r.length] = e,
                i))
                for (; --s > -1; )
                  r[s] === e && r.splice(s, 1);
              return H[n].tweens
            }
              , st = function(t, e, i, r) {
              var s, n, a = t.vars.onOverwrite;
              return a && (s = a(t, e, i, r)),
              (a = I.onOverwrite) && (n = a(t, e, i, r)),
              !1 !== s && !1 !== n
            }
              , nt = function(t, e, i, r, s) {
              var n, a, o, l;
              if (1 === r || r >= 4) {
                for (l = s.length,
                  n = 0; n < l; n++)
                  if ((o = s[n]) !== e)
                    o._gc || o._kill(null, t, e) && (a = !0);
                  else if (5 === r)
                    break;
                return a
              }
              var h, _ = e._startTime + 1e-8, u = [], c = 0, f = 0 === e._duration;
              for (n = s.length; --n > -1; )
                (o = s[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || at(e, 0, f),
                0 === at(o, h, f) && (u[c++] = o)) : o._startTime <= _ && o._startTime + o.totalDuration() / o._timeScale > _ && ((f || !o._initted) && _ - o._startTime <= 2e-8 || (u[c++] = o)));
              for (n = c; --n > -1; )
                if (l = (o = u[n])._firstPT,
                2 === r && o._kill(i, t, e) && (a = !0),
                2 !== r || !o._firstPT && o._initted && l) {
                  if (2 !== r && !st(o, e))
                    continue;
                  o._enabled(!1, !1) && (a = !0)
                }
              return a
            }
              , at = function(t, e, i) {
              for (var r = t._timeline, s = r._timeScale, n = t._startTime; r._timeline; ) {
                if (n += r._startTime,
                  s *= r._timeScale,
                  r._paused)
                  return -100;
                r = r._timeline
              }
              return (n /= s) > e ? n - e : i && n === e || !t._initted && n - e < 2e-8 ? 1e-8 : (n += t.totalDuration() / t._timeScale / s) > e + 1e-8 ? 0 : n - e - 1e-8
            };
            u._init = function() {
              var t, e, i, r, s, n, a = this.vars, o = this._overwrittenProps, l = this._duration, h = !!a.immediateRender, _ = a.ease, u = this._startAt;
              if (a.startAt) {
                for (r in u && (u.render(-1, !0),
                  u.kill()),
                  s = {},
                  a.startAt)
                  s[r] = a.startAt[r];
                if (s.data = "isStart",
                  s.overwrite = !1,
                  s.immediateRender = !0,
                  s.lazy = h && !1 !== a.lazy,
                  s.startAt = s.delay = null,
                  s.onUpdate = a.onUpdate,
                  s.onUpdateParams = a.onUpdateParams,
                  s.onUpdateScope = a.onUpdateScope || a.callbackScope || this,
                  this._startAt = I.to(this.target || {}, 0, s),
                  h)
                  if (this._time > 0)
                    this._startAt = null;
                  else if (0 !== l)
                    return
              } else if (a.runBackwards && 0 !== l)
                if (u)
                  u.render(-1, !0),
                    u.kill(),
                    this._startAt = null;
                else {
                  for (r in 0 !== this._time && (h = !1),
                    i = {},
                    a)
                    Q[r] && "autoCSS" !== r || (i[r] = a[r]);
                  if (i.overwrite = 0,
                    i.data = "isFromStart",
                    i.lazy = h && !1 !== a.lazy,
                    i.immediateRender = h,
                    this._startAt = I.to(this.target, 0, i),
                    h) {
                    if (0 === this._time)
                      return
                  } else
                    this._startAt._init(),
                      this._startAt._enabled(!1),
                    this.vars.immediateRender && (this._startAt = null)
                }
              if (this._ease = _ = _ ? _ instanceof k ? _ : "function" == typeof _ ? new k(_,a.easeParams) : O[_] || I.defaultEase : I.defaultEase,
              a.easeParams instanceof Array && _.config && (this._ease = _.config.apply(_, a.easeParams)),
                this._easeType = this._ease._type,
                this._easePower = this._ease._power,
                this._firstPT = null,
                this._targets)
                for (n = this._targets.length,
                  t = 0; t < n; t++)
                  this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null, t) && (e = !0);
              else
                e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
              if (e && I._onPluginEvent("_onInitAllProps", this),
              o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
                a.runBackwards)
                for (i = this._firstPT; i; )
                  i.s += i.c,
                    i.c = -i.c,
                    i = i._next;
              this._onUpdate = a.onUpdate,
                this._initted = !0
            }
              ,
              u._initProps = function(t, e, r, s, n) {
                var a, o, l, h, _, u;
                if (null == t)
                  return !1;
                for (a in B[t._gsTweenID] && it(),
                this.vars.css || t.style && t !== i && t.nodeType && Z.css && !1 !== this.vars.autoCSS && function(t, e) {
                  var i, r = {};
                  for (i in t)
                    Q[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!Z[i] || Z[i] && Z[i]._autoCSS) || (r[i] = t[i],
                      delete t[i]);
                  t.css = r
                }(this.vars, t),
                  this.vars)
                  if (u = this.vars[a],
                    Q[a])
                    u && (u instanceof Array || u.push && T(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[a] = u = this._swapSelfInParams(u, this));
                  else if (Z[a] && (h = new Z[a])._onInitTween(t, this.vars[a], this, n)) {
                    for (this._firstPT = _ = {
                      _next: this._firstPT,
                      t: h,
                      p: "setRatio",
                      s: 0,
                      c: 1,
                      f: 1,
                      n: a,
                      pg: 1,
                      pr: h._priority,
                      m: 0
                    },
                      o = h._overwriteProps.length; --o > -1; )
                      e[h._overwriteProps[o]] = this._firstPT;
                    (h._priority || h._onInitAllProps) && (l = !0),
                    (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0),
                    _._next && (_._next._prev = _)
                  } else
                    e[a] = W.call(this, t, a, "get", u, a, 0, null, this.vars.stringFilter, n);
                return s && this._kill(s, t) ? this._initProps(t, e, r, s, n) : this._overwrite > 1 && this._firstPT && r.length > 1 && nt(t, this, e, this._overwrite, r) ? (this._kill(e, t),
                  this._initProps(t, e, r, s, n)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (B[t._gsTweenID] = !0),
                  l)
              }
              ,
              u.render = function(t, e, i) {
                var r, s, n, a, o = this._time, l = this._duration, h = this._rawPrevTime;
                if (t >= l - 1e-8 && t >= 0)
                  this._totalTime = this._time = l,
                    this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
                  this._reversed || (r = !0,
                    s = "onComplete",
                    i = i || this._timeline.autoRemoveChildren),
                  0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0),
                  (h < 0 || t <= 0 && t >= -1e-8 || 1e-8 === h && "isPause" !== this.data) && h !== t && (i = !0,
                  h > 1e-8 && (s = "onReverseComplete")),
                    this._rawPrevTime = a = !e || t || h === t ? t : 1e-8);
                else if (t < 1e-8)
                  this._totalTime = this._time = 0,
                    this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                  (0 !== o || 0 === l && h > 0) && (s = "onReverseComplete",
                    r = this._reversed),
                    t > -1e-8 ? t = 0 : t < 0 && (this._active = !1,
                    0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (1e-8 !== h || "isPause" !== this.data) && (i = !0),
                      this._rawPrevTime = a = !e || t || h === t ? t : 1e-8)),
                  (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
                else if (this._totalTime = this._time = t,
                  this._easeType) {
                  var _ = t / l
                    , u = this._easeType
                    , c = this._easePower;
                  (1 === u || 3 === u && _ >= .5) && (_ = 1 - _),
                  3 === u && (_ *= 2),
                    1 === c ? _ *= _ : 2 === c ? _ *= _ * _ : 3 === c ? _ *= _ * _ * _ : 4 === c && (_ *= _ * _ * _ * _),
                    this.ratio = 1 === u ? 1 - _ : 2 === u ? _ : t / l < .5 ? _ / 2 : 1 - _ / 2
                } else
                  this.ratio = this._ease.getRatio(t / l);
                if (this._time !== o || i) {
                  if (!this._initted) {
                    if (this._init(),
                    !this._initted || this._gc)
                      return;
                    if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))
                      return this._time = this._totalTime = o,
                        this._rawPrevTime = h,
                        X.push(this),
                        void (this._lazy = [t, e]);
                    this._time && !r ? this.ratio = this._ease.getRatio(this._time / l) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                  }
                  for (!1 !== this._lazy && (this._lazy = !1),
                  this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0),
                  0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : s || (s = "_dummyGS")),
                  this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))),
                    n = this._firstPT; n; )
                    n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s,
                      n = n._next;
                  this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i),
                  e || (this._time !== o || r || i) && this._callback("onUpdate")),
                  s && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i),
                  r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                    this._active = !1),
                  !e && this.vars[s] && this._callback(s),
                  0 === l && 1e-8 === this._rawPrevTime && 1e-8 !== a && (this._rawPrevTime = 0)))
                }
              }
              ,
              u._kill = function(t, e, i) {
                if ("all" === t && (t = null),
                null == t && (null == e || e === this.target))
                  return this._lazy = !1,
                    this._enabled(!1, !1);
                e = "string" != typeof e ? e || this._targets || this.target : I.selector(e) || e;
                var r, s, n, a, o, l, h, _, u, c = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline, f = this._firstPT;
                if ((T(e) || N(e)) && "number" != typeof e[0])
                  for (r = e.length; --r > -1; )
                    this._kill(t, e[r], i) && (l = !0);
                else {
                  if (this._targets) {
                    for (r = this._targets.length; --r > -1; )
                      if (e === this._targets[r]) {
                        o = this._propLookup[r] || {},
                          this._overwrittenProps = this._overwrittenProps || [],
                          s = this._overwrittenProps[r] = t ? this._overwrittenProps[r] || {} : "all";
                        break
                      }
                  } else {
                    if (e !== this.target)
                      return !1;
                    o = this._propLookup,
                      s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                  }
                  if (o) {
                    if (h = t || o,
                      _ = t !== s && "all" !== s && t !== o && ("object" != typeof t || !t._tempKill),
                    i && (I.onOverwrite || this.vars.onOverwrite)) {
                      for (n in h)
                        o[n] && (u || (u = []),
                          u.push(n));
                      if ((u || !t) && !st(this, i, e, u))
                        return !1
                    }
                    for (n in h)
                      (a = o[n]) && (c && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s,
                        l = !0),
                      a.pg && a.t._kill(h) && (l = !0),
                      a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next),
                      a._next && (a._next._prev = a._prev),
                        a._next = a._prev = null),
                        delete o[n]),
                      _ && (s[n] = 1);
                    !this._firstPT && this._initted && f && this._enabled(!1, !1)
                  }
                }
                return l
              }
              ,
              u.invalidate = function() {
                this._notifyPluginsOfEnabled && I._onPluginEvent("_onDisable", this);
                var t = this._time;
                return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
                  this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
                  this._propLookup = this._targets ? {} : [],
                  E.prototype.invalidate.call(this),
                this.vars.immediateRender && (this._time = -1e-8,
                  this.render(t, !1, !1 !== this.vars.lazy)),
                  this
              }
              ,
              u._enabled = function(t, e) {
                if (f || c.wake(),
                t && this._gc) {
                  var i, r = this._targets;
                  if (r)
                    for (i = r.length; --i > -1; )
                      this._siblings[i] = rt(r[i], this, !0);
                  else
                    this._siblings = rt(this.target, this, !0)
                }
                return E.prototype._enabled.call(this, t, e),
                !(!this._notifyPluginsOfEnabled || !this._firstPT) && I._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
              }
              ,
              I.to = function(t, e, i) {
                return new I(t,e,i)
              }
              ,
              I.from = function(t, e, i) {
                return i.runBackwards = !0,
                  i.immediateRender = 0 != i.immediateRender,
                  new I(t,e,i)
              }
              ,
              I.fromTo = function(t, e, i, r) {
                return r.startAt = i,
                  r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender,
                  new I(t,e,r)
              }
              ,
              I.delayedCall = function(t, e, i, r, s) {
                return new I(e,0,{
                  delay: t,
                  onComplete: e,
                  onCompleteParams: i,
                  callbackScope: r,
                  onReverseComplete: e,
                  onReverseCompleteParams: i,
                  immediateRender: !1,
                  lazy: !1,
                  useFrames: s,
                  overwrite: 0
                })
              }
              ,
              I.set = function(t, e) {
                return new I(t,0,e)
              }
              ,
              I.getTweensOf = function(t, e) {
                if (null == t)
                  return [];
                var i, r, s, n;
                if (t = "string" != typeof t ? t : I.selector(t) || t,
                (T(t) || N(t)) && "number" != typeof t[0]) {
                  for (i = t.length,
                    r = []; --i > -1; )
                    r = r.concat(I.getTweensOf(t[i], e));
                  for (i = r.length; --i > -1; )
                    for (n = r[i],
                      s = i; --s > -1; )
                      n === r[s] && r.splice(i, 1)
                } else if (t._gsTweenID)
                  for (i = (r = rt(t).concat()).length; --i > -1; )
                    (r[i]._gc || e && !r[i].isActive()) && r.splice(i, 1);
                return r || []
              }
              ,
              I.killTweensOf = I.killDelayedCallsTo = function(t, e, i) {
                "object" == typeof e && (i = e,
                  e = !1);
                for (var r = I.getTweensOf(t, e), s = r.length; --s > -1; )
                  r[s]._kill(i, t)
              }
            ;
            var ot = P("plugins.TweenPlugin", (function(t, e) {
                this._overwriteProps = (t || "").split(","),
                  this._propName = this._overwriteProps[0],
                  this._priority = e || 0,
                  this._super = ot.prototype
              }
            ), !0);
            if (u = ot.prototype,
              ot.version = "1.19.0",
              ot.API = 2,
              u._firstPT = null,
              u._addTween = W,
              u.setRatio = U,
              u._kill = function(t) {
                var e, i = this._overwriteProps, r = this._firstPT;
                if (null != t[this._propName])
                  this._overwriteProps = [];
                else
                  for (e = i.length; --e > -1; )
                    null != t[i[e]] && i.splice(e, 1);
                for (; r; )
                  null != t[r.n] && (r._next && (r._next._prev = r._prev),
                    r._prev ? (r._prev._next = r._next,
                      r._prev = null) : this._firstPT === r && (this._firstPT = r._next)),
                    r = r._next;
                return !1
              }
              ,
              u._mod = u._roundProps = function(t) {
                for (var e, i = this._firstPT; i; )
                  (e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e),
                    i = i._next
              }
              ,
              I._onPluginEvent = function(t, e) {
                var i, r, s, n, a, o = e._firstPT;
                if ("_onInitAllProps" === t) {
                  for (; o; ) {
                    for (a = o._next,
                      r = s; r && r.pr > o.pr; )
                      r = r._next;
                    (o._prev = r ? r._prev : n) ? o._prev._next = o : s = o,
                      (o._next = r) ? r._prev = o : n = o,
                      o = a
                  }
                  o = e._firstPT = s
                }
                for (; o; )
                  o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0),
                    o = o._next;
                return i
              }
              ,
              ot.activate = function(t) {
                for (var e = t.length; --e > -1; )
                  t[e].API === ot.API && (Z[(new t[e])._propName] = t[e]);
                return !0
              }
              ,
              b.plugin = function(t) {
                if (!(t && t.propName && t.init && t.API))
                  throw "illegal plugin definition.";
                var e, i = t.propName, r = t.priority || 0, s = t.overwriteProps, n = {
                  init: "_onInitTween",
                  set: "setRatio",
                  kill: "_kill",
                  round: "_mod",
                  mod: "_mod",
                  initAll: "_onInitAllProps"
                }, a = P("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", (function() {
                    ot.call(this, i, r),
                      this._overwriteProps = s || []
                  }
                ), !0 === t.global), o = a.prototype = new ot(i);
                for (e in o.constructor = a,
                  a.API = t.API,
                  n)
                  "function" == typeof t[e] && (o[n[e]] = t[e]);
                return a.version = t.version,
                  ot.activate([a]),
                  a
              }
              ,
              h = i._gsQueue) {
              for (_ = 0; _ < h.length; _++)
                h[_]();
              for (u in x)
                x[u].func || i.console.log("GSAP encountered missing dependency: " + u)
            }
            f = !1
          }(t.exports && void 0 !== i ? i : this || window)
      }
    ).call(this, i(63))
  },
  477: function(t, e, i) {
    (function(r) {
        var s, n, a, o = t.exports && void 0 !== r ? r : this || window;
        (o._gsQueue || (o._gsQueue = [])).push((function() {
            "use strict";
            o._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], (function(t, e, i) {
                var r = function(e) {
                  t.call(this, e),
                    this._repeat = this.vars.repeat || 0,
                    this._repeatDelay = this.vars.repeatDelay || 0,
                    this._cycle = 0,
                    this._yoyo = !!this.vars.yoyo,
                    this._dirty = !0
                }
                  , s = e._internals
                  , n = s.lazyTweens
                  , a = s.lazyRender
                  , l = o._gsDefine.globals
                  , h = new i(null,null,1,0)
                  , _ = r.prototype = new t;
                return _.constructor = r,
                  _.kill()._gc = !1,
                  r.version = "2.1.3",
                  _.invalidate = function() {
                    return this._yoyo = !!this.vars.yoyo,
                      this._repeat = this.vars.repeat || 0,
                      this._repeatDelay = this.vars.repeatDelay || 0,
                      this._uncache(!0),
                      t.prototype.invalidate.call(this)
                  }
                  ,
                  _.addCallback = function(t, i, r, s) {
                    return this.add(e.delayedCall(0, t, r, s), i)
                  }
                  ,
                  _.removeCallback = function(t, e) {
                    if (t)
                      if (null == e)
                        this._kill(null, t);
                      else
                        for (var i = this.getTweensOf(t, !1), r = i.length, s = this._parseTimeOrLabel(e); --r > -1; )
                          i[r]._startTime === s && i[r]._enabled(!1, !1);
                    return this
                  }
                  ,
                  _.removePause = function(e) {
                    return this.removeCallback(t._internals.pauseCallback, e)
                  }
                  ,
                  _.tweenTo = function(t, i) {
                    i = i || {};
                    var r, s, n, a = {
                      ease: h,
                      useFrames: this.usesFrames(),
                      immediateRender: !1,
                      lazy: !1
                    }, o = i.repeat && l.TweenMax || e;
                    for (s in i)
                      a[s] = i[s];
                    return a.time = this._parseTimeOrLabel(t),
                      r = Math.abs(Number(a.time) - this._time) / this._timeScale || .001,
                      n = new o(this,r,a),
                      a.onStart = function() {
                        n.target.paused(!0),
                        n.vars.time === n.target.time() || r !== n.duration() || n.isFromTo || n.duration(Math.abs(n.vars.time - n.target.time()) / n.target._timeScale).render(n.time(), !0, !0),
                        i.onStart && i.onStart.apply(i.onStartScope || i.callbackScope || n, i.onStartParams || [])
                      }
                      ,
                      n
                  }
                  ,
                  _.tweenFromTo = function(t, e, i) {
                    i = i || {},
                      t = this._parseTimeOrLabel(t),
                      i.startAt = {
                        onComplete: this.seek,
                        onCompleteParams: [t],
                        callbackScope: this
                      },
                      i.immediateRender = !1 !== i.immediateRender;
                    var r = this.tweenTo(e, i);
                    return r.isFromTo = 1,
                      r.duration(Math.abs(r.vars.time - t) / this._timeScale || .001)
                  }
                  ,
                  _.render = function(t, e, i) {
                    this._gc && this._enabled(!0, !1);
                    var r, s, o, l, h, _, u, c, f, p = this._time, m = this._dirty ? this.totalDuration() : this._totalDuration, d = this._duration, g = this._totalTime, v = this._startTime, y = this._timeScale, T = this._rawPrevTime, x = this._paused, w = this._cycle;
                    if (p !== this._time && (t += this._time - p),
                    t >= m - 1e-8 && t >= 0)
                      this._locked || (this._totalTime = m,
                        this._cycle = this._repeat),
                      this._reversed || this._hasPausedChild() || (s = !0,
                        l = "onComplete",
                        h = !!this._timeline.autoRemoveChildren,
                      0 === this._duration && (t <= 0 && t >= -1e-8 || T < 0 || 1e-8 === T) && T !== t && this._first && (h = !0,
                      T > 1e-8 && (l = "onReverseComplete"))),
                        this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-8,
                        this._yoyo && 1 & this._cycle ? this._time = t = 0 : (this._time = d,
                          t = d + 1e-4);
                    else if (t < 1e-8)
                      if (this._locked || (this._totalTime = this._cycle = 0),
                        this._time = 0,
                      t > -1e-8 && (t = 0),
                      (0 !== p || 0 === d && 1e-8 !== T && (T > 0 || t < 0 && T >= 0) && !this._locked) && (l = "onReverseComplete",
                        s = this._reversed),
                      t < 0)
                        this._active = !1,
                          this._timeline.autoRemoveChildren && this._reversed ? (h = s = !0,
                            l = "onReverseComplete") : T >= 0 && this._first && (h = !0),
                          this._rawPrevTime = t;
                      else {
                        if (this._rawPrevTime = d || !e || t || this._rawPrevTime === t ? t : 1e-8,
                        0 === t && s)
                          for (r = this._first; r && 0 === r._startTime; )
                            r._duration || (s = !1),
                              r = r._next;
                        t = 0,
                        this._initted || (h = !0)
                      }
                    else
                      0 === d && T < 0 && (h = !0),
                        this._time = this._rawPrevTime = t,
                      this._locked || (this._totalTime = t,
                      0 !== this._repeat && (_ = d + this._repeatDelay,
                        this._cycle = this._totalTime / _ >> 0,
                      this._cycle && this._cycle === this._totalTime / _ && g <= t && this._cycle--,
                        this._time = this._totalTime - this._cycle * _,
                      this._yoyo && 1 & this._cycle && (this._time = d - this._time),
                        this._time > d ? (this._time = d,
                          t = d + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time));
                    if (this._hasPause && !this._forcingPlayhead && !e) {
                      if ((t = this._time) > p || this._repeat && w !== this._cycle)
                        for (r = this._first; r && r._startTime <= t && !u; )
                          r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (u = r),
                            r = r._next;
                      else
                        for (r = this._last; r && r._startTime >= t && !u; )
                          r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (u = r),
                            r = r._prev;
                      u && (f = this._startTime + (this._reversed ? this._duration - u._startTime : u._startTime) / this._timeScale,
                      u._startTime < d && (this._time = this._rawPrevTime = t = u._startTime,
                        this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay)))
                    }
                    if (this._cycle !== w && !this._locked) {
                      var b = this._yoyo && 0 != (1 & w)
                        , P = b === (this._yoyo && 0 != (1 & this._cycle))
                        , S = this._totalTime
                        , k = this._cycle
                        , O = this._rawPrevTime
                        , R = this._time;
                      if (this._totalTime = w * d,
                        this._cycle < w ? b = !b : this._totalTime += d,
                        this._time = p,
                        this._rawPrevTime = 0 === d ? T - 1e-4 : T,
                        this._cycle = w,
                        this._locked = !0,
                        p = b ? 0 : d,
                        this.render(p, e, 0 === d),
                      e || this._gc || this.vars.onRepeat && (this._cycle = k,
                        this._locked = !1,
                        this._callback("onRepeat")),
                      p !== this._time)
                        return;
                      if (P && (this._cycle = w,
                        this._locked = !0,
                        p = b ? d + 1e-4 : -1e-4,
                        this.render(p, !0, !1)),
                        this._locked = !1,
                      this._paused && !x)
                        return;
                      this._time = R,
                        this._totalTime = S,
                        this._cycle = k,
                        this._rawPrevTime = O
                    }
                    if (this._time !== p && this._first || i || h || u) {
                      if (this._initted || (this._initted = !0),
                      this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0),
                      0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")),
                      (c = this._time) >= p)
                        for (r = this._first; r && (o = r._next,
                        c === this._time && (!this._paused || x)); )
                          (r._active || r._startTime <= this._time && !r._paused && !r._gc) && (u === r && (this.pause(),
                            this._pauseTime = f),
                            r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)),
                            r = o;
                      else
                        for (r = this._last; r && (o = r._prev,
                        c === this._time && (!this._paused || x)); ) {
                          if (r._active || r._startTime <= p && !r._paused && !r._gc) {
                            if (u === r) {
                              for (u = r._prev; u && u.endTime() > this._time; )
                                u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, i),
                                  u = u._prev;
                              u = null,
                                this.pause(),
                                this._pauseTime = f
                            }
                            r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)
                          }
                          r = o
                        }
                      this._onUpdate && (e || (n.length && a(),
                        this._callback("onUpdate"))),
                      l && (this._locked || this._gc || v !== this._startTime && y === this._timeScale || (0 === this._time || m >= this.totalDuration()) && (s && (n.length && a(),
                      this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                        this._active = !1),
                      !e && this.vars[l] && this._callback(l)))
                    } else
                      g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
                  }
                  ,
                  _.getActive = function(t, e, i) {
                    var r, s, n = [], a = this.getChildren(t || null == t, e || null == t, !!i), o = 0, l = a.length;
                    for (r = 0; r < l; r++)
                      (s = a[r]).isActive() && (n[o++] = s);
                    return n
                  }
                  ,
                  _.getLabelAfter = function(t) {
                    t || 0 !== t && (t = this._time);
                    var e, i = this.getLabelsArray(), r = i.length;
                    for (e = 0; e < r; e++)
                      if (i[e].time > t)
                        return i[e].name;
                    return null
                  }
                  ,
                  _.getLabelBefore = function(t) {
                    null == t && (t = this._time);
                    for (var e = this.getLabelsArray(), i = e.length; --i > -1; )
                      if (e[i].time < t)
                        return e[i].name;
                    return null
                  }
                  ,
                  _.getLabelsArray = function() {
                    var t, e = [], i = 0;
                    for (t in this._labels)
                      e[i++] = {
                        time: this._labels[t],
                        name: t
                      };
                    return e.sort((function(t, e) {
                        return t.time - e.time
                      }
                    )),
                      e
                  }
                  ,
                  _.invalidate = function() {
                    return this._locked = !1,
                      t.prototype.invalidate.call(this)
                  }
                  ,
                  _.progress = function(t, e) {
                    return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
                  }
                  ,
                  _.totalProgress = function(t, e) {
                    return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
                  }
                  ,
                  _.totalDuration = function(e) {
                    return arguments.length ? -1 !== this._repeat && e ? this.timeScale(this.totalDuration() / e) : this : (this._dirty && (t.prototype.totalDuration.call(this),
                      this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),
                      this._totalDuration)
                  }
                  ,
                  _.time = function(t, e) {
                    if (!arguments.length)
                      return this._time;
                    this._dirty && this.totalDuration();
                    var i = this._duration
                      , r = this._cycle
                      , s = r * (i + this._repeatDelay);
                    return t > i && (t = i),
                      this.totalTime(this._yoyo && 1 & r ? i - t + s : this._repeat ? t + s : t, e)
                  }
                  ,
                  _.repeat = function(t) {
                    return arguments.length ? (this._repeat = t,
                      this._uncache(!0)) : this._repeat
                  }
                  ,
                  _.repeatDelay = function(t) {
                    return arguments.length ? (this._repeatDelay = t,
                      this._uncache(!0)) : this._repeatDelay
                  }
                  ,
                  _.yoyo = function(t) {
                    return arguments.length ? (this._yoyo = t,
                      this) : this._yoyo
                  }
                  ,
                  _.currentLabel = function(t) {
                    return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
                  }
                  ,
                  r
              }
            ), !0),
              o._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], (function(t, e, i) {
                  var r = function(t) {
                    e.call(this, t);
                    var i, r, s = this.vars;
                    for (r in this._labels = {},
                      this.autoRemoveChildren = !!s.autoRemoveChildren,
                      this.smoothChildTiming = !!s.smoothChildTiming,
                      this._sortChildren = !0,
                      this._onUpdate = s.onUpdate,
                      s)
                      i = s[r],
                      l(i) && -1 !== i.join("").indexOf("{self}") && (s[r] = this._swapSelfInParams(i));
                    l(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
                  }
                    , s = i._internals
                    , n = r._internals = {}
                    , a = s.isSelector
                    , l = s.isArray
                    , h = s.lazyTweens
                    , _ = s.lazyRender
                    , u = o._gsDefine.globals
                    , c = function(t) {
                    var e, i = {};
                    for (e in t)
                      i[e] = t[e];
                    return i
                  }
                    , f = function(t, e, i) {
                    var r, s, n = t.cycle;
                    for (r in n)
                      s = n[r],
                        t[r] = "function" == typeof s ? s(i, e[i], e) : s[i % s.length];
                    delete t.cycle
                  }
                    , p = n.pauseCallback = function() {}
                    , m = function(t, e, i, r) {
                    var s = "immediateRender";
                    return s in e || (e[s] = !(i && !1 === i[s] || r)),
                      e
                  }
                    , d = function(t) {
                    if ("function" == typeof t)
                      return t;
                    var e = "object" == typeof t ? t : {
                      each: t
                    }
                      , i = e.ease
                      , r = e.from || 0
                      , s = e.base || 0
                      , n = {}
                      , a = isNaN(r)
                      , o = e.axis
                      , l = {
                      center: .5,
                      end: 1
                    }[r] || 0;
                    return function(t, h, _) {
                      var u, c, f, p, m, d, g, v, y, T = (_ || e).length, x = n[T];
                      if (!x) {
                        if (!(y = "auto" === e.grid ? 0 : (e.grid || [1 / 0])[0])) {
                          for (g = -1 / 0; g < (g = _[y++].getBoundingClientRect().left) && y < T; )
                            ;
                          y--
                        }
                        for (x = n[T] = [],
                          u = a ? Math.min(y, T) * l - .5 : r % y,
                          c = a ? T * l / y - .5 : r / y | 0,
                          g = 0,
                          v = 1 / 0,
                          d = 0; d < T; d++)
                          f = d % y - u,
                            p = c - (d / y | 0),
                            x[d] = m = o ? Math.abs("y" === o ? p : f) : Math.sqrt(f * f + p * p),
                          m > g && (g = m),
                          m < v && (v = m);
                        x.max = g - v,
                          x.min = v,
                          x.v = T = e.amount || e.each * (y > T ? T - 1 : o ? "y" === o ? T / y : y : Math.max(y, T / y)) || 0,
                          x.b = T < 0 ? s - T : s
                      }
                      return T = (x[t] - x.min) / x.max,
                      x.b + (i ? i.getRatio(T) : T) * x.v
                    }
                  }
                    , g = r.prototype = new e;
                  return r.version = "2.1.3",
                    r.distribute = d,
                    g.constructor = r,
                    g.kill()._gc = g._forcingPlayhead = g._hasPause = !1,
                    g.to = function(t, e, r, s) {
                      var n = r.repeat && u.TweenMax || i;
                      return e ? this.add(new n(t,e,r), s) : this.set(t, r, s)
                    }
                    ,
                    g.from = function(t, e, r, s) {
                      return this.add((r.repeat && u.TweenMax || i).from(t, e, m(0, r)), s)
                    }
                    ,
                    g.fromTo = function(t, e, r, s, n) {
                      var a = s.repeat && u.TweenMax || i;
                      return s = m(0, s, r),
                        e ? this.add(a.fromTo(t, e, r, s), n) : this.set(t, s, n)
                    }
                    ,
                    g.staggerTo = function(t, e, s, n, o, l, h, _) {
                      var u, p, m = new r({
                        onComplete: l,
                        onCompleteParams: h,
                        callbackScope: _,
                        smoothChildTiming: this.smoothChildTiming
                      }), g = d(s.stagger || n), v = s.startAt, y = s.cycle;
                      for ("string" == typeof t && (t = i.selector(t) || t),
                      a(t = t || []) && (t = function(t) {
                        var e, i = [], r = t.length;
                        for (e = 0; e !== r; i.push(t[e++]))
                          ;
                        return i
                      }(t)),
                        p = 0; p < t.length; p++)
                        u = c(s),
                        v && (u.startAt = c(v),
                        v.cycle && f(u.startAt, t, p)),
                        y && (f(u, t, p),
                        null != u.duration && (e = u.duration,
                          delete u.duration)),
                          m.to(t[p], e, u, g(p, t[p], t));
                      return this.add(m, o)
                    }
                    ,
                    g.staggerFrom = function(t, e, i, r, s, n, a, o) {
                      return i.runBackwards = !0,
                        this.staggerTo(t, e, m(0, i), r, s, n, a, o)
                    }
                    ,
                    g.staggerFromTo = function(t, e, i, r, s, n, a, o, l) {
                      return r.startAt = i,
                        this.staggerTo(t, e, m(0, r, i), s, n, a, o, l)
                    }
                    ,
                    g.call = function(t, e, r, s) {
                      return this.add(i.delayedCall(0, t, e, r), s)
                    }
                    ,
                    g.set = function(t, e, r) {
                      return this.add(new i(t,0,m(0, e, null, !0)), r)
                    }
                    ,
                    r.exportRoot = function(t, e) {
                      null == (t = t || {}).smoothChildTiming && (t.smoothChildTiming = !0);
                      var s, n, a, o, l = new r(t), h = l._timeline;
                      for (null == e && (e = !0),
                        h._remove(l, !0),
                        l._startTime = 0,
                        l._rawPrevTime = l._time = l._totalTime = h._time,
                        a = h._first; a; )
                        o = a._next,
                        e && a instanceof i && a.target === a.vars.onComplete || ((n = a._startTime - a._delay) < 0 && (s = 1),
                          l.add(a, n)),
                          a = o;
                      return h.add(l, 0),
                      s && l.totalDuration(),
                        l
                    }
                    ,
                    g.add = function(s, n, a, o) {
                      var h, _, u, c, f, p;
                      if ("number" != typeof n && (n = this._parseTimeOrLabel(n, 0, !0, s)),
                        !(s instanceof t)) {
                        if (s instanceof Array || s && s.push && l(s)) {
                          for (a = a || "normal",
                            o = o || 0,
                            h = n,
                            _ = s.length,
                            u = 0; u < _; u++)
                            l(c = s[u]) && (c = new r({
                              tweens: c
                            })),
                              this.add(c, h),
                            "string" != typeof c && "function" != typeof c && ("sequence" === a ? h = c._startTime + c.totalDuration() / c._timeScale : "start" === a && (c._startTime -= c.delay())),
                              h += o;
                          return this._uncache(!0)
                        }
                        if ("string" == typeof s)
                          return this.addLabel(s, n);
                        if ("function" != typeof s)
                          throw "Cannot add " + s + " into the timeline; it is not a tween, timeline, function, or string.";
                        s = i.delayedCall(0, s)
                      }
                      if (e.prototype.add.call(this, s, n),
                      (s._time || !s._duration && s._initted) && (h = (this.rawTime() - s._startTime) * s._timeScale,
                      (!s._duration || Math.abs(Math.max(0, Math.min(s.totalDuration(), h))) - s._totalTime > 1e-5) && s.render(h, !1, !1)),
                      (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
                        for (p = (f = this).rawTime() > s._startTime; f._timeline; )
                          p && f._timeline.smoothChildTiming ? f.totalTime(f._totalTime, !0) : f._gc && f._enabled(!0, !1),
                            f = f._timeline;
                      return this
                    }
                    ,
                    g.remove = function(e) {
                      if (e instanceof t) {
                        this._remove(e, !1);
                        var i = e._timeline = e.vars.useFrames ? t._rootFramesTimeline : t._rootTimeline;
                        return e._startTime = (e._paused ? e._pauseTime : i._time) - (e._reversed ? e.totalDuration() - e._totalTime : e._totalTime) / e._timeScale,
                          this
                      }
                      if (e instanceof Array || e && e.push && l(e)) {
                        for (var r = e.length; --r > -1; )
                          this.remove(e[r]);
                        return this
                      }
                      return "string" == typeof e ? this.removeLabel(e) : this.kill(null, e)
                    }
                    ,
                    g._remove = function(t, i) {
                      return e.prototype._remove.call(this, t, i),
                        this._last ? this._time > this.duration() && (this._time = this._duration,
                          this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
                        this
                    }
                    ,
                    g.append = function(t, e) {
                      return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
                    }
                    ,
                    g.insert = g.insertMultiple = function(t, e, i, r) {
                      return this.add(t, e || 0, i, r)
                    }
                    ,
                    g.appendMultiple = function(t, e, i, r) {
                      return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, r)
                    }
                    ,
                    g.addLabel = function(t, e) {
                      return this._labels[t] = this._parseTimeOrLabel(e),
                        this
                    }
                    ,
                    g.addPause = function(t, e, r, s) {
                      var n = i.delayedCall(0, p, r, s || this);
                      return n.vars.onComplete = n.vars.onReverseComplete = e,
                        n.data = "isPause",
                        this._hasPause = !0,
                        this.add(n, t)
                    }
                    ,
                    g.removeLabel = function(t) {
                      return delete this._labels[t],
                        this
                    }
                    ,
                    g.getLabelTime = function(t) {
                      return null != this._labels[t] ? this._labels[t] : -1
                    }
                    ,
                    g._parseTimeOrLabel = function(e, i, r, s) {
                      var n, a;
                      if (s instanceof t && s.timeline === this)
                        this.remove(s);
                      else if (s && (s instanceof Array || s.push && l(s)))
                        for (a = s.length; --a > -1; )
                          s[a]instanceof t && s[a].timeline === this && this.remove(s[a]);
                      if (n = "number" != typeof e || i ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0,
                      "string" == typeof i)
                        return this._parseTimeOrLabel(i, r && "number" == typeof e && null == this._labels[i] ? e - n : 0, r);
                      if (i = i || 0,
                      "string" != typeof e || !isNaN(e) && null == this._labels[e])
                        null == e && (e = n);
                      else {
                        if (-1 === (a = e.indexOf("=")))
                          return null == this._labels[e] ? r ? this._labels[e] = n + i : i : this._labels[e] + i;
                        i = parseInt(e.charAt(a - 1) + "1", 10) * Number(e.substr(a + 1)),
                          e = a > 1 ? this._parseTimeOrLabel(e.substr(0, a - 1), 0, r) : n
                      }
                      return Number(e) + i
                    }
                    ,
                    g.seek = function(t, e) {
                      return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
                    }
                    ,
                    g.stop = function() {
                      return this.paused(!0)
                    }
                    ,
                    g.gotoAndPlay = function(t, e) {
                      return this.play(t, e)
                    }
                    ,
                    g.gotoAndStop = function(t, e) {
                      return this.pause(t, e)
                    }
                    ,
                    g.render = function(t, e, i) {
                      this._gc && this._enabled(!0, !1);
                      var r, s, n, a, o, l, u, c, f = this._time, p = this._dirty ? this.totalDuration() : this._totalDuration, m = this._startTime, d = this._timeScale, g = this._paused;
                      if (f !== this._time && (t += this._time - f),
                      this._hasPause && !this._forcingPlayhead && !e) {
                        if (t > f)
                          for (r = this._first; r && r._startTime <= t && !l; )
                            r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (l = r),
                              r = r._next;
                        else
                          for (r = this._last; r && r._startTime >= t && !l; )
                            r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (l = r),
                              r = r._prev;
                        l && (this._time = this._totalTime = t = l._startTime,
                          c = this._startTime + (this._reversed ? this._duration - t : t) / this._timeScale)
                      }
                      if (t >= p - 1e-8 && t >= 0)
                        this._totalTime = this._time = p,
                        this._reversed || this._hasPausedChild() || (s = !0,
                          a = "onComplete",
                          o = !!this._timeline.autoRemoveChildren,
                        0 === this._duration && (t <= 0 && t >= -1e-8 || this._rawPrevTime < 0 || 1e-8 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (o = !0,
                        this._rawPrevTime > 1e-8 && (a = "onReverseComplete"))),
                          this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-8,
                          t = p + 1e-4;
                      else if (t < 1e-8)
                        if (this._totalTime = this._time = 0,
                        t > -1e-8 && (t = 0),
                        (0 !== f || 0 === this._duration && 1e-8 !== this._rawPrevTime && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (a = "onReverseComplete",
                          s = this._reversed),
                        t < 0)
                          this._active = !1,
                            this._timeline.autoRemoveChildren && this._reversed ? (o = s = !0,
                              a = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (o = !0),
                            this._rawPrevTime = t;
                        else {
                          if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-8,
                          0 === t && s)
                            for (r = this._first; r && 0 === r._startTime; )
                              r._duration || (s = !1),
                                r = r._next;
                          t = 0,
                          this._initted || (o = !0)
                        }
                      else
                        this._totalTime = this._time = this._rawPrevTime = t;
                      if (this._time !== f && this._first || i || o || l) {
                        if (this._initted || (this._initted = !0),
                        this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0),
                        0 === f && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")),
                        (u = this._time) >= f)
                          for (r = this._first; r && (n = r._next,
                          u === this._time && (!this._paused || g)); )
                            (r._active || r._startTime <= u && !r._paused && !r._gc) && (l === r && (this.pause(),
                              this._pauseTime = c),
                              r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)),
                              r = n;
                        else
                          for (r = this._last; r && (n = r._prev,
                          u === this._time && (!this._paused || g)); ) {
                            if (r._active || r._startTime <= f && !r._paused && !r._gc) {
                              if (l === r) {
                                for (l = r._prev; l && l.endTime() > this._time; )
                                  l.render(l._reversed ? l.totalDuration() - (t - l._startTime) * l._timeScale : (t - l._startTime) * l._timeScale, e, i),
                                    l = l._prev;
                                l = null,
                                  this.pause(),
                                  this._pauseTime = c
                              }
                              r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)
                            }
                            r = n
                          }
                        this._onUpdate && (e || (h.length && _(),
                          this._callback("onUpdate"))),
                        a && (this._gc || m !== this._startTime && d === this._timeScale || (0 === this._time || p >= this.totalDuration()) && (s && (h.length && _(),
                        this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                          this._active = !1),
                        !e && this.vars[a] && this._callback(a)))
                      }
                    }
                    ,
                    g._hasPausedChild = function() {
                      for (var t = this._first; t; ) {
                        if (t._paused || t instanceof r && t._hasPausedChild())
                          return !0;
                        t = t._next
                      }
                      return !1
                    }
                    ,
                    g.getChildren = function(t, e, r, s) {
                      s = s || -9999999999;
                      for (var n = [], a = this._first, o = 0; a; )
                        a._startTime < s || (a instanceof i ? !1 !== e && (n[o++] = a) : (!1 !== r && (n[o++] = a),
                        !1 !== t && (o = (n = n.concat(a.getChildren(!0, e, r))).length))),
                          a = a._next;
                      return n
                    }
                    ,
                    g.getTweensOf = function(t, e) {
                      var r, s, n = this._gc, a = [], o = 0;
                      for (n && this._enabled(!0, !0),
                        s = (r = i.getTweensOf(t)).length; --s > -1; )
                        (r[s].timeline === this || e && this._contains(r[s])) && (a[o++] = r[s]);
                      return n && this._enabled(!1, !0),
                        a
                    }
                    ,
                    g.recent = function() {
                      return this._recent
                    }
                    ,
                    g._contains = function(t) {
                      for (var e = t.timeline; e; ) {
                        if (e === this)
                          return !0;
                        e = e.timeline
                      }
                      return !1
                    }
                    ,
                    g.shiftChildren = function(t, e, i) {
                      i = i || 0;
                      for (var r, s = this._first, n = this._labels; s; )
                        s._startTime >= i && (s._startTime += t),
                          s = s._next;
                      if (e)
                        for (r in n)
                          n[r] >= i && (n[r] += t);
                      return this._uncache(!0)
                    }
                    ,
                    g._kill = function(t, e) {
                      if (!t && !e)
                        return this._enabled(!1, !1);
                      for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), r = i.length, s = !1; --r > -1; )
                        i[r]._kill(t, e) && (s = !0);
                      return s
                    }
                    ,
                    g.clear = function(t) {
                      var e = this.getChildren(!1, !0, !0)
                        , i = e.length;
                      for (this._time = this._totalTime = 0; --i > -1; )
                        e[i]._enabled(!1, !1);
                      return !1 !== t && (this._labels = {}),
                        this._uncache(!0)
                    }
                    ,
                    g.invalidate = function() {
                      for (var e = this._first; e; )
                        e.invalidate(),
                          e = e._next;
                      return t.prototype.invalidate.call(this)
                    }
                    ,
                    g._enabled = function(t, i) {
                      if (t === this._gc)
                        for (var r = this._first; r; )
                          r._enabled(t, !0),
                            r = r._next;
                      return e.prototype._enabled.call(this, t, i)
                    }
                    ,
                    g.totalTime = function(e, i, r) {
                      this._forcingPlayhead = !0;
                      var s = t.prototype.totalTime.apply(this, arguments);
                      return this._forcingPlayhead = !1,
                        s
                    }
                    ,
                    g.duration = function(t) {
                      return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t),
                        this) : (this._dirty && this.totalDuration(),
                        this._duration)
                    }
                    ,
                    g.totalDuration = function(t) {
                      if (!arguments.length) {
                        if (this._dirty) {
                          for (var e, i, r = 0, s = this, n = s._last, a = 999999999999; n; )
                            e = n._prev,
                            n._dirty && n.totalDuration(),
                              n._startTime > a && s._sortChildren && !n._paused && !s._calculatingDuration ? (s._calculatingDuration = 1,
                                s.add(n, n._startTime - n._delay),
                                s._calculatingDuration = 0) : a = n._startTime,
                            n._startTime < 0 && !n._paused && (r -= n._startTime,
                            s._timeline.smoothChildTiming && (s._startTime += n._startTime / s._timeScale,
                              s._time -= n._startTime,
                              s._totalTime -= n._startTime,
                              s._rawPrevTime -= n._startTime),
                              s.shiftChildren(-n._startTime, !1, -9999999999),
                              a = 0),
                            (i = n._startTime + n._totalDuration / n._timeScale) > r && (r = i),
                              n = e;
                          s._duration = s._totalDuration = r,
                            s._dirty = !1
                        }
                        return this._totalDuration
                      }
                      return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
                    }
                    ,
                    g.paused = function(e) {
                      if (!1 === e && this._paused)
                        for (var i = this._first; i; )
                          i._startTime === this._time && "isPause" === i.data && (i._rawPrevTime = 0),
                            i = i._next;
                      return t.prototype.paused.apply(this, arguments)
                    }
                    ,
                    g.usesFrames = function() {
                      for (var e = this._timeline; e._timeline; )
                        e = e._timeline;
                      return e === t._rootFramesTimeline
                    }
                    ,
                    g.rawTime = function(t) {
                      return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
                    }
                    ,
                    r
                }
              ), !0)
          }
        )),
        o._gsDefine && o._gsQueue.pop()(),
          function(r) {
            "use strict";
            var l = function() {
              return (o.GreenSockGlobals || o).TimelineMax
            };
            t.exports ? (i(489),
              t.exports = l()) : (n = [i(489)],
            void 0 === (a = "function" == typeof (s = l) ? s.apply(e, n) : s) || (t.exports = a))
          }()
      }
    ).call(this, i(63))
  },
  489: function(t, e, i) {
    (function(i) {
        var r;
        !function(i, s) {
          "use strict";
          var n = {}
            , a = i.document
            , o = i.GreenSockGlobals = i.GreenSockGlobals || i
            , l = o.TweenLite;
          if (l)
            return t.exports && (t.exports = l),
              l;
          var h, _, u, c, f, p, m, d = function(t) {
              var e, i = t.split("."), r = o;
              for (e = 0; e < i.length; e++)
                r[i[e]] = r = r[i[e]] || {};
              return r
            }, g = d("com.greensock"), v = function(t) {
              var e, i = [], r = t.length;
              for (e = 0; e !== r; i.push(t[e++]))
                ;
              return i
            }, y = function() {}, T = (p = Object.prototype.toString,
                m = p.call([]),
                function(t) {
                  return null != t && (t instanceof Array || "object" == typeof t && !!t.push && p.call(t) === m)
                }
            ), x = {}, w = function(i, s, a, l) {
              this.sc = x[i] ? x[i].sc : [],
                x[i] = this,
                this.gsClass = null,
                this.func = a;
              var h = [];
              this.check = function(_) {
                for (var u, c, f, p, m = s.length, g = m; --m > -1; )
                  (u = x[s[m]] || new w(s[m],[])).gsClass ? (h[m] = u.gsClass,
                    g--) : _ && u.sc.push(this);
                if (0 === g && a) {
                  if (f = (c = ("com.greensock." + i).split(".")).pop(),
                    p = d(c.join("."))[f] = this.gsClass = a.apply(a, h),
                    l)
                    if (o[f] = n[f] = p,
                      t.exports)
                      if ("TweenLite" === i)
                        for (m in t.exports = n.TweenLite = p,
                          n)
                          p[m] = n[m];
                      else
                        n.TweenLite && (n.TweenLite[f] = p);
                    else
                      void 0 === (r = function() {
                        return p
                      }
                        .apply(e, [])) || (t.exports = r);
                  for (m = 0; m < this.sc.length; m++)
                    this.sc[m].check()
                }
              }
                ,
                this.check(!0)
            }, b = i._gsDefine = function(t, e, i, r) {
              return new w(t,e,i,r)
            }
            , P = g._class = function(t, e, i) {
              return e = e || function() {}
                ,
                b(t, [], (function() {
                    return e
                  }
                ), i),
                e
            }
          ;
          b.globals = o;
          var S = [0, 0, 1, 1]
            , k = P("easing.Ease", (function(t, e, i, r) {
                this._func = t,
                  this._type = i || 0,
                  this._power = r || 0,
                  this._params = e ? S.concat(e) : S
              }
            ), !0)
            , O = k.map = {}
            , R = k.register = function(t, e, i, r) {
              for (var s, n, a, o, l = e.split(","), h = l.length, _ = (i || "easeIn,easeOut,easeInOut").split(","); --h > -1; )
                for (n = l[h],
                  s = r ? P("easing." + n, null, !0) : g.easing[n] || {},
                  a = _.length; --a > -1; )
                  o = _[a],
                    O[n + "." + o] = O[o + n] = s[o] = t.getRatio ? t : t[o] || new t
            }
          ;
          for ((u = k.prototype)._calcEnd = !1,
            u.getRatio = function(t) {
              if (this._func)
                return this._params[0] = t,
                  this._func.apply(null, this._params);
              var e = this._type
                , i = this._power
                , r = 1 === e ? 1 - t : 2 === e ? t : t < .5 ? 2 * t : 2 * (1 - t);
              return 1 === i ? r *= r : 2 === i ? r *= r * r : 3 === i ? r *= r * r * r : 4 === i && (r *= r * r * r * r),
                1 === e ? 1 - r : 2 === e ? r : t < .5 ? r / 2 : 1 - r / 2
            }
            ,
            _ = (h = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"]).length; --_ > -1; )
            u = h[_] + ",Power" + _,
              R(new k(null,null,1,_), u, "easeOut", !0),
              R(new k(null,null,2,_), u, "easeIn" + (0 === _ ? ",easeNone" : "")),
              R(new k(null,null,3,_), u, "easeInOut");
          O.linear = g.easing.Linear.easeIn,
            O.swing = g.easing.Quad.easeInOut;
          var C = P("events.EventDispatcher", (function(t) {
              this._listeners = {},
                this._eventTarget = t || this
            }
          ));
          (u = C.prototype).addEventListener = function(t, e, i, r, s) {
            s = s || 0;
            var n, a, o = this._listeners[t], l = 0;
            for (this !== c || f || c.wake(),
            null == o && (this._listeners[t] = o = []),
              a = o.length; --a > -1; )
              (n = o[a]).c === e && n.s === i ? o.splice(a, 1) : 0 === l && n.pr < s && (l = a + 1);
            o.splice(l, 0, {
              c: e,
              s: i,
              up: r,
              pr: s
            })
          }
            ,
            u.removeEventListener = function(t, e) {
              var i, r = this._listeners[t];
              if (r)
                for (i = r.length; --i > -1; )
                  if (r[i].c === e)
                    return void r.splice(i, 1)
            }
            ,
            u.dispatchEvent = function(t) {
              var e, i, r, s = this._listeners[t];
              if (s)
                for ((e = s.length) > 1 && (s = s.slice(0)),
                  i = this._eventTarget; --e > -1; )
                  (r = s[e]) && (r.up ? r.c.call(r.s || i, {
                    type: t,
                    target: i
                  }) : r.c.call(r.s || i))
            }
          ;
          var A = i.requestAnimationFrame
            , D = i.cancelAnimationFrame
            , M = Date.now || function() {
            return (new Date).getTime()
          }
            , F = M();
          for (_ = (h = ["ms", "moz", "webkit", "o"]).length; --_ > -1 && !A; )
            A = i[h[_] + "RequestAnimationFrame"],
              D = i[h[_] + "CancelAnimationFrame"] || i[h[_] + "CancelRequestAnimationFrame"];
          P("Ticker", (function(t, e) {
              var i, r, s, n, o, l = this, h = M(), _ = !(!1 === e || !A) && "auto", u = 500, p = 33, m = function(t) {
                var e, a, _ = M() - F;
                _ > u && (h += _ - p),
                  F += _,
                  l.time = (F - h) / 1e3,
                  e = l.time - o,
                (!i || e > 0 || !0 === t) && (l.frame++,
                  o += e + (e >= n ? .004 : n - e),
                  a = !0),
                !0 !== t && (s = r(m)),
                a && l.dispatchEvent("tick")
              };
              C.call(l),
                l.time = l.frame = 0,
                l.tick = function() {
                  m(!0)
                }
                ,
                l.lagSmoothing = function(t, e) {
                  if (!arguments.length)
                    return u < 1e8;
                  u = t || 1e8,
                    p = Math.min(e, u, 0)
                }
                ,
                l.sleep = function() {
                  null != s && (_ && D ? D(s) : clearTimeout(s),
                    r = y,
                    s = null,
                  l === c && (f = !1))
                }
                ,
                l.wake = function(t) {
                  null !== s ? l.sleep() : t ? h += -F + (F = M()) : l.frame > 10 && (F = M() - u + 5),
                    r = 0 === i ? y : _ && A ? A : function(t) {
                      return setTimeout(t, 1e3 * (o - l.time) + 1 | 0)
                    }
                    ,
                  l === c && (f = !0),
                    m(2)
                }
                ,
                l.fps = function(t) {
                  if (!arguments.length)
                    return i;
                  n = 1 / ((i = t) || 60),
                    o = this.time + n,
                    l.wake()
                }
                ,
                l.useRAF = function(t) {
                  if (!arguments.length)
                    return _;
                  l.sleep(),
                    _ = t,
                    l.fps(i)
                }
                ,
                l.fps(t),
                setTimeout((function() {
                    "auto" === _ && l.frame < 5 && "hidden" !== (a || {}).visibilityState && l.useRAF(!1)
                  }
                ), 1500)
            }
          )),
            (u = g.Ticker.prototype = new g.events.EventDispatcher).constructor = g.Ticker;
          var E = P("core.Animation", (function(t, e) {
              if (this.vars = e = e || {},
                this._duration = this._totalDuration = t || 0,
                this._delay = Number(e.delay) || 0,
                this._timeScale = 1,
                this._active = !!e.immediateRender,
                this.data = e.data,
                this._reversed = !!e.reversed,
                tt) {
                f || c.wake();
                var i = this.vars.useFrames ? J : tt;
                i.add(this, i._time),
                this.vars.paused && this.paused(!0)
              }
            }
          ));
          c = E.ticker = new g.Ticker,
            (u = E.prototype)._dirty = u._gc = u._initted = u._paused = !1,
            u._totalTime = u._time = 0,
            u._rawPrevTime = -1,
            u._next = u._last = u._onUpdate = u._timeline = u.timeline = null,
            u._paused = !1;
          var z = function() {
            f && M() - F > 2e3 && ("hidden" !== (a || {}).visibilityState || !c.lagSmoothing()) && c.wake();
            var t = setTimeout(z, 2e3);
            t.unref && t.unref()
          };
          z(),
            u.play = function(t, e) {
              return null != t && this.seek(t, e),
                this.reversed(!1).paused(!1)
            }
            ,
            u.pause = function(t, e) {
              return null != t && this.seek(t, e),
                this.paused(!0)
            }
            ,
            u.resume = function(t, e) {
              return null != t && this.seek(t, e),
                this.paused(!1)
            }
            ,
            u.seek = function(t, e) {
              return this.totalTime(Number(t), !1 !== e)
            }
            ,
            u.restart = function(t, e) {
              return this.reversed(!1).paused(!1).totalTime(t ? -this._delay : 0, !1 !== e, !0)
            }
            ,
            u.reverse = function(t, e) {
              return null != t && this.seek(t || this.totalDuration(), e),
                this.reversed(!0).paused(!1)
            }
            ,
            u.render = function(t, e, i) {}
            ,
            u.invalidate = function() {
              return this._time = this._totalTime = 0,
                this._initted = this._gc = !1,
                this._rawPrevTime = -1,
              !this._gc && this.timeline || this._enabled(!0),
                this
            }
            ,
            u.isActive = function() {
              var t, e = this._timeline, i = this._startTime;
              return !e || !this._gc && !this._paused && e.isActive() && (t = e.rawTime(!0)) >= i && t < i + this.totalDuration() / this._timeScale - 1e-8
            }
            ,
            u._enabled = function(t, e) {
              return f || c.wake(),
                this._gc = !t,
                this._active = this.isActive(),
              !0 !== e && (t && !this.timeline ? this._timeline.add(this, this._startTime - this._delay) : !t && this.timeline && this._timeline._remove(this, !0)),
                !1
            }
            ,
            u._kill = function(t, e) {
              return this._enabled(!1, !1)
            }
            ,
            u.kill = function(t, e) {
              return this._kill(t, e),
                this
            }
            ,
            u._uncache = function(t) {
              for (var e = t ? this : this.timeline; e; )
                e._dirty = !0,
                  e = e.timeline;
              return this
            }
            ,
            u._swapSelfInParams = function(t) {
              for (var e = t.length, i = t.concat(); --e > -1; )
                "{self}" === t[e] && (i[e] = this);
              return i
            }
            ,
            u._callback = function(t) {
              var e = this.vars
                , i = e[t]
                , r = e[t + "Params"]
                , s = e[t + "Scope"] || e.callbackScope || this;
              switch (r ? r.length : 0) {
                case 0:
                  i.call(s);
                  break;
                case 1:
                  i.call(s, r[0]);
                  break;
                case 2:
                  i.call(s, r[0], r[1]);
                  break;
                default:
                  i.apply(s, r)
              }
            }
            ,
            u.eventCallback = function(t, e, i, r) {
              if ("on" === (t || "").substr(0, 2)) {
                var s = this.vars;
                if (1 === arguments.length)
                  return s[t];
                null == e ? delete s[t] : (s[t] = e,
                  s[t + "Params"] = T(i) && -1 !== i.join("").indexOf("{self}") ? this._swapSelfInParams(i) : i,
                  s[t + "Scope"] = r),
                "onUpdate" === t && (this._onUpdate = e)
              }
              return this
            }
            ,
            u.delay = function(t) {
              return arguments.length ? (this._timeline.smoothChildTiming && this.startTime(this._startTime + t - this._delay),
                this._delay = t,
                this) : this._delay
            }
            ,
            u.duration = function(t) {
              return arguments.length ? (this._duration = this._totalDuration = t,
                this._uncache(!0),
              this._timeline.smoothChildTiming && this._time > 0 && this._time < this._duration && 0 !== t && this.totalTime(this._totalTime * (t / this._duration), !0),
                this) : (this._dirty = !1,
                this._duration)
            }
            ,
            u.totalDuration = function(t) {
              return this._dirty = !1,
                arguments.length ? this.duration(t) : this._totalDuration
            }
            ,
            u.time = function(t, e) {
              return arguments.length ? (this._dirty && this.totalDuration(),
                this.totalTime(t > this._duration ? this._duration : t, e)) : this._time
            }
            ,
            u.totalTime = function(t, e, i) {
              if (f || c.wake(),
                !arguments.length)
                return this._totalTime;
              if (this._timeline) {
                if (t < 0 && !i && (t += this.totalDuration()),
                  this._timeline.smoothChildTiming) {
                  this._dirty && this.totalDuration();
                  var r = this._totalDuration
                    , s = this._timeline;
                  if (t > r && !i && (t = r),
                    this._startTime = (this._paused ? this._pauseTime : s._time) - (this._reversed ? r - t : t) / this._timeScale,
                  s._dirty || this._uncache(!1),
                    s._timeline)
                    for (; s._timeline; )
                      s._timeline._time !== (s._startTime + s._totalTime) / s._timeScale && s.totalTime(s._totalTime, !0),
                        s = s._timeline
                }
                this._gc && this._enabled(!0, !1),
                this._totalTime === t && 0 !== this._duration || (X.length && it(),
                  this.render(t, e, !1),
                X.length && it())
              }
              return this
            }
            ,
            u.progress = u.totalProgress = function(t, e) {
              var i = this.duration();
              return arguments.length ? this.totalTime(i * t, e) : i ? this._time / i : this.ratio
            }
            ,
            u.startTime = function(t) {
              return arguments.length ? (t !== this._startTime && (this._startTime = t,
              this.timeline && this.timeline._sortChildren && this.timeline.add(this, t - this._delay)),
                this) : this._startTime
            }
            ,
            u.endTime = function(t) {
              return this._startTime + (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
            }
            ,
            u.timeScale = function(t) {
              if (!arguments.length)
                return this._timeScale;
              var e, i;
              for (t = t || 1e-8,
              this._timeline && this._timeline.smoothChildTiming && (i = (e = this._pauseTime) || 0 === e ? e : this._timeline.totalTime(),
                this._startTime = i - (i - this._startTime) * this._timeScale / t),
                this._timeScale = t,
                i = this.timeline; i && i.timeline; )
                i._dirty = !0,
                  i.totalDuration(),
                  i = i.timeline;
              return this
            }
            ,
            u.reversed = function(t) {
              return arguments.length ? (t != this._reversed && (this._reversed = t,
                this.totalTime(this._timeline && !this._timeline.smoothChildTiming ? this.totalDuration() - this._totalTime : this._totalTime, !0)),
                this) : this._reversed
            }
            ,
            u.paused = function(t) {
              if (!arguments.length)
                return this._paused;
              var e, i, r = this._timeline;
              return t != this._paused && r && (f || t || c.wake(),
                i = (e = r.rawTime()) - this._pauseTime,
              !t && r.smoothChildTiming && (this._startTime += i,
                this._uncache(!1)),
                this._pauseTime = t ? e : null,
                this._paused = t,
                this._active = this.isActive(),
              !t && 0 !== i && this._initted && this.duration() && (e = r.smoothChildTiming ? this._totalTime : (e - this._startTime) / this._timeScale,
                this.render(e, e === this._totalTime, !0))),
              this._gc && !t && this._enabled(!0, !1),
                this
            }
          ;
          var L = P("core.SimpleTimeline", (function(t) {
              E.call(this, 0, t),
                this.autoRemoveChildren = this.smoothChildTiming = !0
            }
          ));
          (u = L.prototype = new E).constructor = L,
            u.kill()._gc = !1,
            u._first = u._last = u._recent = null,
            u._sortChildren = !1,
            u.add = u.insert = function(t, e, i, r) {
              var s, n;
              if (t._startTime = Number(e || 0) + t._delay,
              t._paused && this !== t._timeline && (t._pauseTime = this.rawTime() - (t._timeline.rawTime() - t._pauseTime)),
              t.timeline && t.timeline._remove(t, !0),
                t.timeline = t._timeline = this,
              t._gc && t._enabled(!0, !0),
                s = this._last,
                this._sortChildren)
                for (n = t._startTime; s && s._startTime > n; )
                  s = s._prev;
              return s ? (t._next = s._next,
                s._next = t) : (t._next = this._first,
                this._first = t),
                t._next ? t._next._prev = t : this._last = t,
                t._prev = s,
                this._recent = t,
              this._timeline && this._uncache(!0),
                this
            }
            ,
            u._remove = function(t, e) {
              return t.timeline === this && (e || t._enabled(!1, !0),
                t._prev ? t._prev._next = t._next : this._first === t && (this._first = t._next),
                t._next ? t._next._prev = t._prev : this._last === t && (this._last = t._prev),
                t._next = t._prev = t.timeline = null,
              t === this._recent && (this._recent = this._last),
              this._timeline && this._uncache(!0)),
                this
            }
            ,
            u.render = function(t, e, i) {
              var r, s = this._first;
              for (this._totalTime = this._time = this._rawPrevTime = t; s; )
                r = s._next,
                (s._active || t >= s._startTime && !s._paused && !s._gc) && (s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, i) : s.render((t - s._startTime) * s._timeScale, e, i)),
                  s = r
            }
            ,
            u.rawTime = function() {
              return f || c.wake(),
                this._totalTime
            }
          ;
          var I = P("TweenLite", (function(t, e, r) {
              if (E.call(this, e, r),
                this.render = I.prototype.render,
              null == t)
                throw "Cannot tween a null target.";
              this.target = t = "string" != typeof t ? t : I.selector(t) || t;
              var s, n, a, o = t.jquery || t.length && t !== i && t[0] && (t[0] === i || t[0].nodeType && t[0].style && !t.nodeType), l = this.vars.overwrite;
              if (this._overwrite = l = null == l ? K[I.defaultOverwrite] : "number" == typeof l ? l >> 0 : K[l],
              (o || t instanceof Array || t.push && T(t)) && "number" != typeof t[0])
                for (this._targets = a = v(t),
                  this._propLookup = [],
                  this._siblings = [],
                  s = 0; s < a.length; s++)
                  (n = a[s]) ? "string" != typeof n ? n.length && n !== i && n[0] && (n[0] === i || n[0].nodeType && n[0].style && !n.nodeType) ? (a.splice(s--, 1),
                    this._targets = a = a.concat(v(n))) : (this._siblings[s] = rt(n, this, !1),
                  1 === l && this._siblings[s].length > 1 && nt(n, this, null, 1, this._siblings[s])) : "string" == typeof (n = a[s--] = I.selector(n)) && a.splice(s + 1, 1) : a.splice(s--, 1);
              else
                this._propLookup = {},
                  this._siblings = rt(t, this, !1),
                1 === l && this._siblings.length > 1 && nt(t, this, null, 1, this._siblings);
              (this.vars.immediateRender || 0 === e && 0 === this._delay && !1 !== this.vars.immediateRender) && (this._time = -1e-8,
                this.render(Math.min(0, -this._delay)))
            }
          ), !0)
            , N = function(t) {
            return t && t.length && t !== i && t[0] && (t[0] === i || t[0].nodeType && t[0].style && !t.nodeType)
          };
          (u = I.prototype = new E).constructor = I,
            u.kill()._gc = !1,
            u.ratio = 0,
            u._firstPT = u._targets = u._overwrittenProps = u._startAt = null,
            u._notifyPluginsOfEnabled = u._lazy = !1,
            I.version = "2.1.3",
            I.defaultEase = u._ease = new k(null,null,1,1),
            I.defaultOverwrite = "auto",
            I.ticker = c,
            I.autoSleep = 120,
            I.lagSmoothing = function(t, e) {
              c.lagSmoothing(t, e)
            }
            ,
            I.selector = i.$ || i.jQuery || function(t) {
              var e = i.$ || i.jQuery;
              return e ? (I.selector = e,
                e(t)) : (a || (a = i.document),
                a ? a.querySelectorAll ? a.querySelectorAll(t) : a.getElementById("#" === t.charAt(0) ? t.substr(1) : t) : t)
            }
          ;
          var X = []
            , B = {}
            , j = /(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi
            , Y = /[\+-]=-?[\.\d]/
            , U = function(t) {
              for (var e, i = this._firstPT; i; )
                e = i.blob ? 1 === t && null != this.end ? this.end : t ? this.join("") : this.start : i.c * t + i.s,
                  i.m ? e = i.m.call(this._tween, e, this._target || i.t, this._tween) : e < 1e-6 && e > -1e-6 && !i.blob && (e = 0),
                  i.f ? i.fp ? i.t[i.p](i.fp, e) : i.t[i.p](e) : i.t[i.p] = e,
                  i = i._next
            }
            , V = function(t) {
              return (1e3 * t | 0) / 1e3 + ""
            }
            , q = function(t, e, i, r) {
              var s, n, a, o, l, h, _, u = [], c = 0, f = "", p = 0;
              for (u.start = t,
                u.end = e,
                t = u[0] = t + "",
                e = u[1] = e + "",
              i && (i(u),
                t = u[0],
                e = u[1]),
                u.length = 0,
                s = t.match(j) || [],
                n = e.match(j) || [],
              r && (r._next = null,
                r.blob = 1,
                u._firstPT = u._applyPT = r),
                l = n.length,
                o = 0; o < l; o++)
                _ = n[o],
                  f += (h = e.substr(c, e.indexOf(_, c) - c)) || !o ? h : ",",
                  c += h.length,
                  p ? p = (p + 1) % 5 : "rgba(" === h.substr(-5) && (p = 1),
                  _ === s[o] || s.length <= o ? f += _ : (f && (u.push(f),
                    f = ""),
                    a = parseFloat(s[o]),
                    u.push(a),
                    u._firstPT = {
                      _next: u._firstPT,
                      t: u,
                      p: u.length - 1,
                      s: a,
                      c: ("=" === _.charAt(1) ? parseInt(_.charAt(0) + "1", 10) * parseFloat(_.substr(2)) : parseFloat(_) - a) || 0,
                      f: 0,
                      m: p && p < 4 ? Math.round : V
                    }),
                  c += _.length;
              return (f += e.substr(c)) && u.push(f),
                u.setRatio = U,
              Y.test(e) && (u.end = null),
                u
            }
            , W = function(t, e, i, r, s, n, a, o, l) {
              "function" == typeof r && (r = r(l || 0, t));
              var h = typeof t[e]
                , _ = "function" !== h ? "" : e.indexOf("set") || "function" != typeof t["get" + e.substr(3)] ? e : "get" + e.substr(3)
                , u = "get" !== i ? i : _ ? a ? t[_](a) : t[_]() : t[e]
                , c = "string" == typeof r && "=" === r.charAt(1)
                , f = {
                t: t,
                p: e,
                s: u,
                f: "function" === h,
                pg: 0,
                n: s || e,
                m: n ? "function" == typeof n ? n : Math.round : 0,
                pr: 0,
                c: c ? parseInt(r.charAt(0) + "1", 10) * parseFloat(r.substr(2)) : parseFloat(r) - u || 0
              };
              if (("number" != typeof u || "number" != typeof r && !c) && (a || isNaN(u) || !c && isNaN(r) || "boolean" == typeof u || "boolean" == typeof r ? (f.fp = a,
                f = {
                  t: q(u, c ? parseFloat(f.s) + f.c + (f.s + "").replace(/[0-9\-\.]/g, "") : r, o || I.defaultStringFilter, f),
                  p: "setRatio",
                  s: 0,
                  c: 1,
                  f: 2,
                  pg: 0,
                  n: s || e,
                  pr: 0,
                  m: 0
                }) : (f.s = parseFloat(u),
              c || (f.c = parseFloat(r) - f.s || 0))),
                f.c)
                return (f._next = this._firstPT) && (f._next._prev = f),
                  this._firstPT = f,
                  f
            }
            , G = I._internals = {
              isArray: T,
              isSelector: N,
              lazyTweens: X,
              blobDif: q
            }
            , Z = I._plugins = {}
            , H = G.tweenLookup = {}
            , $ = 0
            , Q = G.reservedProps = {
              ease: 1,
              delay: 1,
              overwrite: 1,
              onComplete: 1,
              onCompleteParams: 1,
              onCompleteScope: 1,
              useFrames: 1,
              runBackwards: 1,
              startAt: 1,
              onUpdate: 1,
              onUpdateParams: 1,
              onUpdateScope: 1,
              onStart: 1,
              onStartParams: 1,
              onStartScope: 1,
              onReverseComplete: 1,
              onReverseCompleteParams: 1,
              onReverseCompleteScope: 1,
              onRepeat: 1,
              onRepeatParams: 1,
              onRepeatScope: 1,
              easeParams: 1,
              yoyo: 1,
              immediateRender: 1,
              repeat: 1,
              repeatDelay: 1,
              data: 1,
              paused: 1,
              reversed: 1,
              autoCSS: 1,
              lazy: 1,
              onOverwrite: 1,
              callbackScope: 1,
              stringFilter: 1,
              id: 1,
              yoyoEase: 1,
              stagger: 1
            }
            , K = {
              none: 0,
              all: 1,
              auto: 2,
              concurrent: 3,
              allOnStart: 4,
              preexisting: 5,
              true: 1,
              false: 0
            }
            , J = E._rootFramesTimeline = new L
            , tt = E._rootTimeline = new L
            , et = 30
            , it = G.lazyRender = function() {
              var t, e, i = X.length;
              for (B = {},
                t = 0; t < i; t++)
                (e = X[t]) && !1 !== e._lazy && (e.render(e._lazy[0], e._lazy[1], !0),
                  e._lazy = !1);
              X.length = 0
            }
          ;
          tt._startTime = c.time,
            J._startTime = c.frame,
            tt._active = J._active = !0,
            setTimeout(it, 1),
            E._updateRoot = I.render = function() {
              var t, e, i;
              if (X.length && it(),
                tt.render((c.time - tt._startTime) * tt._timeScale, !1, !1),
                J.render((c.frame - J._startTime) * J._timeScale, !1, !1),
              X.length && it(),
              c.frame >= et) {
                for (i in et = c.frame + (parseInt(I.autoSleep, 10) || 120),
                  H) {
                  for (t = (e = H[i].tweens).length; --t > -1; )
                    e[t]._gc && e.splice(t, 1);
                  0 === e.length && delete H[i]
                }
                if ((!(i = tt._first) || i._paused) && I.autoSleep && !J._first && 1 === c._listeners.tick.length) {
                  for (; i && i._paused; )
                    i = i._next;
                  i || c.sleep()
                }
              }
            }
            ,
            c.addEventListener("tick", E._updateRoot);
          var rt = function(t, e, i) {
            var r, s, n = t._gsTweenID;
            if (H[n || (t._gsTweenID = n = "t" + $++)] || (H[n] = {
              target: t,
              tweens: []
            }),
            e && ((r = H[n].tweens)[s = r.length] = e,
              i))
              for (; --s > -1; )
                r[s] === e && r.splice(s, 1);
            return H[n].tweens
          }
            , st = function(t, e, i, r) {
            var s, n, a = t.vars.onOverwrite;
            return a && (s = a(t, e, i, r)),
            (a = I.onOverwrite) && (n = a(t, e, i, r)),
            !1 !== s && !1 !== n
          }
            , nt = function(t, e, i, r, s) {
            var n, a, o, l;
            if (1 === r || r >= 4) {
              for (l = s.length,
                n = 0; n < l; n++)
                if ((o = s[n]) !== e)
                  o._gc || o._kill(null, t, e) && (a = !0);
                else if (5 === r)
                  break;
              return a
            }
            var h, _ = e._startTime + 1e-8, u = [], c = 0, f = 0 === e._duration;
            for (n = s.length; --n > -1; )
              (o = s[n]) === e || o._gc || o._paused || (o._timeline !== e._timeline ? (h = h || at(e, 0, f),
              0 === at(o, h, f) && (u[c++] = o)) : o._startTime <= _ && o._startTime + o.totalDuration() / o._timeScale > _ && ((f || !o._initted) && _ - o._startTime <= 2e-8 || (u[c++] = o)));
            for (n = c; --n > -1; )
              if (l = (o = u[n])._firstPT,
              2 === r && o._kill(i, t, e) && (a = !0),
              2 !== r || !o._firstPT && o._initted && l) {
                if (2 !== r && !st(o, e))
                  continue;
                o._enabled(!1, !1) && (a = !0)
              }
            return a
          }
            , at = function(t, e, i) {
            for (var r = t._timeline, s = r._timeScale, n = t._startTime; r._timeline; ) {
              if (n += r._startTime,
                s *= r._timeScale,
                r._paused)
                return -100;
              r = r._timeline
            }
            return (n /= s) > e ? n - e : i && n === e || !t._initted && n - e < 2e-8 ? 1e-8 : (n += t.totalDuration() / t._timeScale / s) > e + 1e-8 ? 0 : n - e - 1e-8
          };
          u._init = function() {
            var t, e, i, r, s, n, a = this.vars, o = this._overwrittenProps, l = this._duration, h = !!a.immediateRender, _ = a.ease, u = this._startAt;
            if (a.startAt) {
              for (r in u && (u.render(-1, !0),
                u.kill()),
                s = {},
                a.startAt)
                s[r] = a.startAt[r];
              if (s.data = "isStart",
                s.overwrite = !1,
                s.immediateRender = !0,
                s.lazy = h && !1 !== a.lazy,
                s.startAt = s.delay = null,
                s.onUpdate = a.onUpdate,
                s.onUpdateParams = a.onUpdateParams,
                s.onUpdateScope = a.onUpdateScope || a.callbackScope || this,
                this._startAt = I.to(this.target || {}, 0, s),
                h)
                if (this._time > 0)
                  this._startAt = null;
                else if (0 !== l)
                  return
            } else if (a.runBackwards && 0 !== l)
              if (u)
                u.render(-1, !0),
                  u.kill(),
                  this._startAt = null;
              else {
                for (r in 0 !== this._time && (h = !1),
                  i = {},
                  a)
                  Q[r] && "autoCSS" !== r || (i[r] = a[r]);
                if (i.overwrite = 0,
                  i.data = "isFromStart",
                  i.lazy = h && !1 !== a.lazy,
                  i.immediateRender = h,
                  this._startAt = I.to(this.target, 0, i),
                  h) {
                  if (0 === this._time)
                    return
                } else
                  this._startAt._init(),
                    this._startAt._enabled(!1),
                  this.vars.immediateRender && (this._startAt = null)
              }
            if (this._ease = _ = _ ? _ instanceof k ? _ : "function" == typeof _ ? new k(_,a.easeParams) : O[_] || I.defaultEase : I.defaultEase,
            a.easeParams instanceof Array && _.config && (this._ease = _.config.apply(_, a.easeParams)),
              this._easeType = this._ease._type,
              this._easePower = this._ease._power,
              this._firstPT = null,
              this._targets)
              for (n = this._targets.length,
                t = 0; t < n; t++)
                this._initProps(this._targets[t], this._propLookup[t] = {}, this._siblings[t], o ? o[t] : null, t) && (e = !0);
            else
              e = this._initProps(this.target, this._propLookup, this._siblings, o, 0);
            if (e && I._onPluginEvent("_onInitAllProps", this),
            o && (this._firstPT || "function" != typeof this.target && this._enabled(!1, !1)),
              a.runBackwards)
              for (i = this._firstPT; i; )
                i.s += i.c,
                  i.c = -i.c,
                  i = i._next;
            this._onUpdate = a.onUpdate,
              this._initted = !0
          }
            ,
            u._initProps = function(t, e, r, s, n) {
              var a, o, l, h, _, u;
              if (null == t)
                return !1;
              for (a in B[t._gsTweenID] && it(),
              this.vars.css || t.style && t !== i && t.nodeType && Z.css && !1 !== this.vars.autoCSS && function(t, e) {
                var i, r = {};
                for (i in t)
                  Q[i] || i in e && "transform" !== i && "x" !== i && "y" !== i && "width" !== i && "height" !== i && "className" !== i && "border" !== i || !(!Z[i] || Z[i] && Z[i]._autoCSS) || (r[i] = t[i],
                    delete t[i]);
                t.css = r
              }(this.vars, t),
                this.vars)
                if (u = this.vars[a],
                  Q[a])
                  u && (u instanceof Array || u.push && T(u)) && -1 !== u.join("").indexOf("{self}") && (this.vars[a] = u = this._swapSelfInParams(u, this));
                else if (Z[a] && (h = new Z[a])._onInitTween(t, this.vars[a], this, n)) {
                  for (this._firstPT = _ = {
                    _next: this._firstPT,
                    t: h,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: 1,
                    n: a,
                    pg: 1,
                    pr: h._priority,
                    m: 0
                  },
                    o = h._overwriteProps.length; --o > -1; )
                    e[h._overwriteProps[o]] = this._firstPT;
                  (h._priority || h._onInitAllProps) && (l = !0),
                  (h._onDisable || h._onEnable) && (this._notifyPluginsOfEnabled = !0),
                  _._next && (_._next._prev = _)
                } else
                  e[a] = W.call(this, t, a, "get", u, a, 0, null, this.vars.stringFilter, n);
              return s && this._kill(s, t) ? this._initProps(t, e, r, s, n) : this._overwrite > 1 && this._firstPT && r.length > 1 && nt(t, this, e, this._overwrite, r) ? (this._kill(e, t),
                this._initProps(t, e, r, s, n)) : (this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration) && (B[t._gsTweenID] = !0),
                l)
            }
            ,
            u.render = function(t, e, i) {
              var r, s, n, a, o = this._time, l = this._duration, h = this._rawPrevTime;
              if (t >= l - 1e-8 && t >= 0)
                this._totalTime = this._time = l,
                  this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1,
                this._reversed || (r = !0,
                  s = "onComplete",
                  i = i || this._timeline.autoRemoveChildren),
                0 === l && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0),
                (h < 0 || t <= 0 && t >= -1e-8 || 1e-8 === h && "isPause" !== this.data) && h !== t && (i = !0,
                h > 1e-8 && (s = "onReverseComplete")),
                  this._rawPrevTime = a = !e || t || h === t ? t : 1e-8);
              else if (t < 1e-8)
                this._totalTime = this._time = 0,
                  this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
                (0 !== o || 0 === l && h > 0) && (s = "onReverseComplete",
                  r = this._reversed),
                  t > -1e-8 ? t = 0 : t < 0 && (this._active = !1,
                  0 === l && (this._initted || !this.vars.lazy || i) && (h >= 0 && (1e-8 !== h || "isPause" !== this.data) && (i = !0),
                    this._rawPrevTime = a = !e || t || h === t ? t : 1e-8)),
                (!this._initted || this._startAt && this._startAt.progress()) && (i = !0);
              else if (this._totalTime = this._time = t,
                this._easeType) {
                var _ = t / l
                  , u = this._easeType
                  , c = this._easePower;
                (1 === u || 3 === u && _ >= .5) && (_ = 1 - _),
                3 === u && (_ *= 2),
                  1 === c ? _ *= _ : 2 === c ? _ *= _ * _ : 3 === c ? _ *= _ * _ * _ : 4 === c && (_ *= _ * _ * _ * _),
                  this.ratio = 1 === u ? 1 - _ : 2 === u ? _ : t / l < .5 ? _ / 2 : 1 - _ / 2
              } else
                this.ratio = this._ease.getRatio(t / l);
              if (this._time !== o || i) {
                if (!this._initted) {
                  if (this._init(),
                  !this._initted || this._gc)
                    return;
                  if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))
                    return this._time = this._totalTime = o,
                      this._rawPrevTime = h,
                      X.push(this),
                      void (this._lazy = [t, e]);
                  this._time && !r ? this.ratio = this._ease.getRatio(this._time / l) : r && this._ease._calcEnd && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1))
                }
                for (!1 !== this._lazy && (this._lazy = !1),
                this._active || !this._paused && this._time !== o && t >= 0 && (this._active = !0),
                0 === o && (this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : s || (s = "_dummyGS")),
                this.vars.onStart && (0 === this._time && 0 !== l || e || this._callback("onStart"))),
                  n = this._firstPT; n; )
                  n.f ? n.t[n.p](n.c * this.ratio + n.s) : n.t[n.p] = n.c * this.ratio + n.s,
                    n = n._next;
                this._onUpdate && (t < 0 && this._startAt && -1e-4 !== t && this._startAt.render(t, !0, i),
                e || (this._time !== o || r || i) && this._callback("onUpdate")),
                s && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && -1e-4 !== t && this._startAt.render(t, !0, i),
                r && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                  this._active = !1),
                !e && this.vars[s] && this._callback(s),
                0 === l && 1e-8 === this._rawPrevTime && 1e-8 !== a && (this._rawPrevTime = 0)))
              }
            }
            ,
            u._kill = function(t, e, i) {
              if ("all" === t && (t = null),
              null == t && (null == e || e === this.target))
                return this._lazy = !1,
                  this._enabled(!1, !1);
              e = "string" != typeof e ? e || this._targets || this.target : I.selector(e) || e;
              var r, s, n, a, o, l, h, _, u, c = i && this._time && i._startTime === this._startTime && this._timeline === i._timeline, f = this._firstPT;
              if ((T(e) || N(e)) && "number" != typeof e[0])
                for (r = e.length; --r > -1; )
                  this._kill(t, e[r], i) && (l = !0);
              else {
                if (this._targets) {
                  for (r = this._targets.length; --r > -1; )
                    if (e === this._targets[r]) {
                      o = this._propLookup[r] || {},
                        this._overwrittenProps = this._overwrittenProps || [],
                        s = this._overwrittenProps[r] = t ? this._overwrittenProps[r] || {} : "all";
                      break
                    }
                } else {
                  if (e !== this.target)
                    return !1;
                  o = this._propLookup,
                    s = this._overwrittenProps = t ? this._overwrittenProps || {} : "all"
                }
                if (o) {
                  if (h = t || o,
                    _ = t !== s && "all" !== s && t !== o && ("object" != typeof t || !t._tempKill),
                  i && (I.onOverwrite || this.vars.onOverwrite)) {
                    for (n in h)
                      o[n] && (u || (u = []),
                        u.push(n));
                    if ((u || !t) && !st(this, i, e, u))
                      return !1
                  }
                  for (n in h)
                    (a = o[n]) && (c && (a.f ? a.t[a.p](a.s) : a.t[a.p] = a.s,
                      l = !0),
                    a.pg && a.t._kill(h) && (l = !0),
                    a.pg && 0 !== a.t._overwriteProps.length || (a._prev ? a._prev._next = a._next : a === this._firstPT && (this._firstPT = a._next),
                    a._next && (a._next._prev = a._prev),
                      a._next = a._prev = null),
                      delete o[n]),
                    _ && (s[n] = 1);
                  !this._firstPT && this._initted && f && this._enabled(!1, !1)
                }
              }
              return l
            }
            ,
            u.invalidate = function() {
              this._notifyPluginsOfEnabled && I._onPluginEvent("_onDisable", this);
              var t = this._time;
              return this._firstPT = this._overwrittenProps = this._startAt = this._onUpdate = null,
                this._notifyPluginsOfEnabled = this._active = this._lazy = !1,
                this._propLookup = this._targets ? {} : [],
                E.prototype.invalidate.call(this),
              this.vars.immediateRender && (this._time = -1e-8,
                this.render(t, !1, !1 !== this.vars.lazy)),
                this
            }
            ,
            u._enabled = function(t, e) {
              if (f || c.wake(),
              t && this._gc) {
                var i, r = this._targets;
                if (r)
                  for (i = r.length; --i > -1; )
                    this._siblings[i] = rt(r[i], this, !0);
                else
                  this._siblings = rt(this.target, this, !0)
              }
              return E.prototype._enabled.call(this, t, e),
              !(!this._notifyPluginsOfEnabled || !this._firstPT) && I._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
            }
            ,
            I.to = function(t, e, i) {
              return new I(t,e,i)
            }
            ,
            I.from = function(t, e, i) {
              return i.runBackwards = !0,
                i.immediateRender = 0 != i.immediateRender,
                new I(t,e,i)
            }
            ,
            I.fromTo = function(t, e, i, r) {
              return r.startAt = i,
                r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender,
                new I(t,e,r)
            }
            ,
            I.delayedCall = function(t, e, i, r, s) {
              return new I(e,0,{
                delay: t,
                onComplete: e,
                onCompleteParams: i,
                callbackScope: r,
                onReverseComplete: e,
                onReverseCompleteParams: i,
                immediateRender: !1,
                lazy: !1,
                useFrames: s,
                overwrite: 0
              })
            }
            ,
            I.set = function(t, e) {
              return new I(t,0,e)
            }
            ,
            I.getTweensOf = function(t, e) {
              if (null == t)
                return [];
              var i, r, s, n;
              if (t = "string" != typeof t ? t : I.selector(t) || t,
              (T(t) || N(t)) && "number" != typeof t[0]) {
                for (i = t.length,
                  r = []; --i > -1; )
                  r = r.concat(I.getTweensOf(t[i], e));
                for (i = r.length; --i > -1; )
                  for (n = r[i],
                    s = i; --s > -1; )
                    n === r[s] && r.splice(i, 1)
              } else if (t._gsTweenID)
                for (i = (r = rt(t).concat()).length; --i > -1; )
                  (r[i]._gc || e && !r[i].isActive()) && r.splice(i, 1);
              return r || []
            }
            ,
            I.killTweensOf = I.killDelayedCallsTo = function(t, e, i) {
              "object" == typeof e && (i = e,
                e = !1);
              for (var r = I.getTweensOf(t, e), s = r.length; --s > -1; )
                r[s]._kill(i, t)
            }
          ;
          var ot = P("plugins.TweenPlugin", (function(t, e) {
              this._overwriteProps = (t || "").split(","),
                this._propName = this._overwriteProps[0],
                this._priority = e || 0,
                this._super = ot.prototype
            }
          ), !0);
          if (u = ot.prototype,
            ot.version = "1.19.0",
            ot.API = 2,
            u._firstPT = null,
            u._addTween = W,
            u.setRatio = U,
            u._kill = function(t) {
              var e, i = this._overwriteProps, r = this._firstPT;
              if (null != t[this._propName])
                this._overwriteProps = [];
              else
                for (e = i.length; --e > -1; )
                  null != t[i[e]] && i.splice(e, 1);
              for (; r; )
                null != t[r.n] && (r._next && (r._next._prev = r._prev),
                  r._prev ? (r._prev._next = r._next,
                    r._prev = null) : this._firstPT === r && (this._firstPT = r._next)),
                  r = r._next;
              return !1
            }
            ,
            u._mod = u._roundProps = function(t) {
              for (var e, i = this._firstPT; i; )
                (e = t[this._propName] || null != i.n && t[i.n.split(this._propName + "_").join("")]) && "function" == typeof e && (2 === i.f ? i.t._applyPT.m = e : i.m = e),
                  i = i._next
            }
            ,
            I._onPluginEvent = function(t, e) {
              var i, r, s, n, a, o = e._firstPT;
              if ("_onInitAllProps" === t) {
                for (; o; ) {
                  for (a = o._next,
                    r = s; r && r.pr > o.pr; )
                    r = r._next;
                  (o._prev = r ? r._prev : n) ? o._prev._next = o : s = o,
                    (o._next = r) ? r._prev = o : n = o,
                    o = a
                }
                o = e._firstPT = s
              }
              for (; o; )
                o.pg && "function" == typeof o.t[t] && o.t[t]() && (i = !0),
                  o = o._next;
              return i
            }
            ,
            ot.activate = function(t) {
              for (var e = t.length; --e > -1; )
                t[e].API === ot.API && (Z[(new t[e])._propName] = t[e]);
              return !0
            }
            ,
            b.plugin = function(t) {
              if (!(t && t.propName && t.init && t.API))
                throw "illegal plugin definition.";
              var e, i = t.propName, r = t.priority || 0, s = t.overwriteProps, n = {
                init: "_onInitTween",
                set: "setRatio",
                kill: "_kill",
                round: "_mod",
                mod: "_mod",
                initAll: "_onInitAllProps"
              }, a = P("plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin", (function() {
                  ot.call(this, i, r),
                    this._overwriteProps = s || []
                }
              ), !0 === t.global), o = a.prototype = new ot(i);
              for (e in o.constructor = a,
                a.API = t.API,
                n)
                "function" == typeof t[e] && (o[n[e]] = t[e]);
              return a.version = t.version,
                ot.activate([a]),
                a
            }
            ,
            h = i._gsQueue) {
            for (_ = 0; _ < h.length; _++)
              h[_]();
            for (u in x)
              x[u].func || i.console.log("GSAP encountered missing dependency: " + u)
          }
          f = !1
        }(t.exports && void 0 !== i ? i : this || window)
      }
    ).call(this, i(63))
  },
  551: function(t, e, i) {
    "use strict";
    i.r(e);
    var r = i(461);
    r._gsScope._gsDefine("TimelineLite", ["core.Animation", "core.SimpleTimeline", "TweenLite"], (function() {
        var t = function(t) {
          r.SimpleTimeline.call(this, t);
          var e, i, s = this.vars;
          for (i in this._labels = {},
            this.autoRemoveChildren = !!s.autoRemoveChildren,
            this.smoothChildTiming = !!s.smoothChildTiming,
            this._sortChildren = !0,
            this._onUpdate = s.onUpdate,
            s)
            e = s[i],
            n(e) && -1 !== e.join("").indexOf("{self}") && (s[i] = this._swapSelfInParams(e));
          n(s.tweens) && this.add(s.tweens, 0, s.align, s.stagger)
        }
          , e = r.default._internals
          , i = t._internals = {}
          , s = e.isSelector
          , n = e.isArray
          , a = e.lazyTweens
          , o = e.lazyRender
          , l = r._gsScope._gsDefine.globals
          , h = function(t) {
          var e, i = {};
          for (e in t)
            i[e] = t[e];
          return i
        }
          , _ = function(t, e, i) {
          var r, s, n = t.cycle;
          for (r in n)
            s = n[r],
              t[r] = "function" == typeof s ? s(i, e[i], e) : s[i % s.length];
          delete t.cycle
        }
          , u = i.pauseCallback = function() {}
          , c = function(t, e, i, r) {
          var s = "immediateRender";
          return s in e || (e[s] = !(i && !1 === i[s] || r)),
            e
        }
          , f = function(t) {
          if ("function" == typeof t)
            return t;
          var e = "object" == typeof t ? t : {
            each: t
          }
            , i = e.ease
            , r = e.from || 0
            , s = e.base || 0
            , n = {}
            , a = isNaN(r)
            , o = e.axis
            , l = {
            center: .5,
            end: 1
          }[r] || 0;
          return function(t, h, _) {
            var u, c, f, p, m, d, g, v, y, T = (_ || e).length, x = n[T];
            if (!x) {
              if (!(y = "auto" === e.grid ? 0 : (e.grid || [1 / 0])[0])) {
                for (g = -1 / 0; g < (g = _[y++].getBoundingClientRect().left) && y < T; )
                  ;
                y--
              }
              for (x = n[T] = [],
                u = a ? Math.min(y, T) * l - .5 : r % y,
                c = a ? T * l / y - .5 : r / y | 0,
                g = 0,
                v = 1 / 0,
                d = 0; d < T; d++)
                f = d % y - u,
                  p = c - (d / y | 0),
                  x[d] = m = o ? Math.abs("y" === o ? p : f) : Math.sqrt(f * f + p * p),
                m > g && (g = m),
                m < v && (v = m);
              x.max = g - v,
                x.min = v,
                x.v = T = e.amount || e.each * (y > T ? T - 1 : o ? "y" === o ? T / y : y : Math.max(y, T / y)) || 0,
                x.b = T < 0 ? s - T : s
            }
            return T = (x[t] - x.min) / x.max,
            x.b + (i ? i.getRatio(T) : T) * x.v
          }
        }
          , p = t.prototype = new r.SimpleTimeline;
        return t.version = "2.1.3",
          t.distribute = f,
          p.constructor = t,
          p.kill()._gc = p._forcingPlayhead = p._hasPause = !1,
          p.to = function(t, e, i, s) {
            var n = i.repeat && l.TweenMax || r.default;
            return e ? this.add(new n(t,e,i), s) : this.set(t, i, s)
          }
          ,
          p.from = function(t, e, i, s) {
            return this.add((i.repeat && l.TweenMax || r.default).from(t, e, c(0, i)), s)
          }
          ,
          p.fromTo = function(t, e, i, s, n) {
            var a = s.repeat && l.TweenMax || r.default;
            return s = c(0, s, i),
              e ? this.add(a.fromTo(t, e, i, s), n) : this.set(t, s, n)
          }
          ,
          p.staggerTo = function(e, i, n, a, o, l, u, c) {
            var p, m, d = new t({
              onComplete: l,
              onCompleteParams: u,
              callbackScope: c,
              smoothChildTiming: this.smoothChildTiming
            }), g = f(n.stagger || a), v = n.startAt, y = n.cycle;
            for ("string" == typeof e && (e = r.default.selector(e) || e),
            s(e = e || []) && (e = function(t) {
              var e, i = [], r = t.length;
              for (e = 0; e !== r; i.push(t[e++]))
                ;
              return i
            }(e)),
              m = 0; m < e.length; m++)
              p = h(n),
              v && (p.startAt = h(v),
              v.cycle && _(p.startAt, e, m)),
              y && (_(p, e, m),
              null != p.duration && (i = p.duration,
                delete p.duration)),
                d.to(e[m], i, p, g(m, e[m], e));
            return this.add(d, o)
          }
          ,
          p.staggerFrom = function(t, e, i, r, s, n, a, o) {
            return i.runBackwards = !0,
              this.staggerTo(t, e, c(0, i), r, s, n, a, o)
          }
          ,
          p.staggerFromTo = function(t, e, i, r, s, n, a, o, l) {
            return r.startAt = i,
              this.staggerTo(t, e, c(0, r, i), s, n, a, o, l)
          }
          ,
          p.call = function(t, e, i, s) {
            return this.add(r.default.delayedCall(0, t, e, i), s)
          }
          ,
          p.set = function(t, e, i) {
            return this.add(new r.default(t,0,c(0, e, null, !0)), i)
          }
          ,
          t.exportRoot = function(e, i) {
            null == (e = e || {}).smoothChildTiming && (e.smoothChildTiming = !0);
            var s, n, a, o, l = new t(e), h = l._timeline;
            for (null == i && (i = !0),
              h._remove(l, !0),
              l._startTime = 0,
              l._rawPrevTime = l._time = l._totalTime = h._time,
              a = h._first; a; )
              o = a._next,
              i && a instanceof r.default && a.target === a.vars.onComplete || ((n = a._startTime - a._delay) < 0 && (s = 1),
                l.add(a, n)),
                a = o;
            return h.add(l, 0),
            s && l.totalDuration(),
              l
          }
          ,
          p.add = function(e, i, s, a) {
            var o, l, h, _, u, c;
            if ("number" != typeof i && (i = this._parseTimeOrLabel(i, 0, !0, e)),
              !(e instanceof r.Animation)) {
              if (e instanceof Array || e && e.push && n(e)) {
                for (s = s || "normal",
                  a = a || 0,
                  o = i,
                  l = e.length,
                  h = 0; h < l; h++)
                  n(_ = e[h]) && (_ = new t({
                    tweens: _
                  })),
                    this.add(_, o),
                  "string" != typeof _ && "function" != typeof _ && ("sequence" === s ? o = _._startTime + _.totalDuration() / _._timeScale : "start" === s && (_._startTime -= _.delay())),
                    o += a;
                return this._uncache(!0)
              }
              if ("string" == typeof e)
                return this.addLabel(e, i);
              if ("function" != typeof e)
                throw "Cannot add " + e + " into the timeline; it is not a tween, timeline, function, or string.";
              e = r.default.delayedCall(0, e)
            }
            if (r.SimpleTimeline.prototype.add.call(this, e, i),
            (e._time || !e._duration && e._initted) && (o = (this.rawTime() - e._startTime) * e._timeScale,
            (!e._duration || Math.abs(Math.max(0, Math.min(e.totalDuration(), o))) - e._totalTime > 1e-5) && e.render(o, !1, !1)),
            (this._gc || this._time === this._duration) && !this._paused && this._duration < this.duration())
              for (c = (u = this).rawTime() > e._startTime; u._timeline; )
                c && u._timeline.smoothChildTiming ? u.totalTime(u._totalTime, !0) : u._gc && u._enabled(!0, !1),
                  u = u._timeline;
            return this
          }
          ,
          p.remove = function(t) {
            if (t instanceof r.Animation) {
              this._remove(t, !1);
              var e = t._timeline = t.vars.useFrames ? r.Animation._rootFramesTimeline : r.Animation._rootTimeline;
              return t._startTime = (t._paused ? t._pauseTime : e._time) - (t._reversed ? t.totalDuration() - t._totalTime : t._totalTime) / t._timeScale,
                this
            }
            if (t instanceof Array || t && t.push && n(t)) {
              for (var i = t.length; --i > -1; )
                this.remove(t[i]);
              return this
            }
            return "string" == typeof t ? this.removeLabel(t) : this.kill(null, t)
          }
          ,
          p._remove = function(t, e) {
            return r.SimpleTimeline.prototype._remove.call(this, t, e),
              this._last ? this._time > this.duration() && (this._time = this._duration,
                this._totalTime = this._totalDuration) : this._time = this._totalTime = this._duration = this._totalDuration = 0,
              this
          }
          ,
          p.append = function(t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t))
          }
          ,
          p.insert = p.insertMultiple = function(t, e, i, r) {
            return this.add(t, e || 0, i, r)
          }
          ,
          p.appendMultiple = function(t, e, i, r) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, r)
          }
          ,
          p.addLabel = function(t, e) {
            return this._labels[t] = this._parseTimeOrLabel(e),
              this
          }
          ,
          p.addPause = function(t, e, i, s) {
            var n = r.default.delayedCall(0, u, i, s || this);
            return n.vars.onComplete = n.vars.onReverseComplete = e,
              n.data = "isPause",
              this._hasPause = !0,
              this.add(n, t)
          }
          ,
          p.removeLabel = function(t) {
            return delete this._labels[t],
              this
          }
          ,
          p.getLabelTime = function(t) {
            return null != this._labels[t] ? this._labels[t] : -1
          }
          ,
          p._parseTimeOrLabel = function(t, e, i, s) {
            var a, o;
            if (s instanceof r.Animation && s.timeline === this)
              this.remove(s);
            else if (s && (s instanceof Array || s.push && n(s)))
              for (o = s.length; --o > -1; )
                s[o]instanceof r.Animation && s[o].timeline === this && this.remove(s[o]);
            if (a = "number" != typeof t || e ? this.duration() > 99999999999 ? this.recent().endTime(!1) : this._duration : 0,
            "string" == typeof e)
              return this._parseTimeOrLabel(e, i && "number" == typeof t && null == this._labels[e] ? t - a : 0, i);
            if (e = e || 0,
            "string" != typeof t || !isNaN(t) && null == this._labels[t])
              null == t && (t = a);
            else {
              if (-1 === (o = t.indexOf("=")))
                return null == this._labels[t] ? i ? this._labels[t] = a + e : e : this._labels[t] + e;
              e = parseInt(t.charAt(o - 1) + "1", 10) * Number(t.substr(o + 1)),
                t = o > 1 ? this._parseTimeOrLabel(t.substr(0, o - 1), 0, i) : a
            }
            return Number(t) + e
          }
          ,
          p.seek = function(t, e) {
            return this.totalTime("number" == typeof t ? t : this._parseTimeOrLabel(t), !1 !== e)
          }
          ,
          p.stop = function() {
            return this.paused(!0)
          }
          ,
          p.gotoAndPlay = function(t, e) {
            return this.play(t, e)
          }
          ,
          p.gotoAndStop = function(t, e) {
            return this.pause(t, e)
          }
          ,
          p.render = function(t, e, i) {
            this._gc && this._enabled(!0, !1);
            var r, s, n, l, h, _, u, c, f = this._time, p = this._dirty ? this.totalDuration() : this._totalDuration, m = this._startTime, d = this._timeScale, g = this._paused;
            if (f !== this._time && (t += this._time - f),
            this._hasPause && !this._forcingPlayhead && !e) {
              if (t > f)
                for (r = this._first; r && r._startTime <= t && !_; )
                  r._duration || "isPause" !== r.data || r.ratio || 0 === r._startTime && 0 === this._rawPrevTime || (_ = r),
                    r = r._next;
              else
                for (r = this._last; r && r._startTime >= t && !_; )
                  r._duration || "isPause" === r.data && r._rawPrevTime > 0 && (_ = r),
                    r = r._prev;
              _ && (this._time = this._totalTime = t = _._startTime,
                c = this._startTime + (this._reversed ? this._duration - t : t) / this._timeScale)
            }
            if (t >= p - 1e-8 && t >= 0)
              this._totalTime = this._time = p,
              this._reversed || this._hasPausedChild() || (s = !0,
                l = "onComplete",
                h = !!this._timeline.autoRemoveChildren,
              0 === this._duration && (t <= 0 && t >= -1e-8 || this._rawPrevTime < 0 || 1e-8 === this._rawPrevTime) && this._rawPrevTime !== t && this._first && (h = !0,
              this._rawPrevTime > 1e-8 && (l = "onReverseComplete"))),
                this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-8,
                t = p + 1e-4;
            else if (t < 1e-8)
              if (this._totalTime = this._time = 0,
              t > -1e-8 && (t = 0),
              (0 !== f || 0 === this._duration && 1e-8 !== this._rawPrevTime && (this._rawPrevTime > 0 || t < 0 && this._rawPrevTime >= 0)) && (l = "onReverseComplete",
                s = this._reversed),
              t < 0)
                this._active = !1,
                  this._timeline.autoRemoveChildren && this._reversed ? (h = s = !0,
                    l = "onReverseComplete") : this._rawPrevTime >= 0 && this._first && (h = !0),
                  this._rawPrevTime = t;
              else {
                if (this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-8,
                0 === t && s)
                  for (r = this._first; r && 0 === r._startTime; )
                    r._duration || (s = !1),
                      r = r._next;
                t = 0,
                this._initted || (h = !0)
              }
            else
              this._totalTime = this._time = this._rawPrevTime = t;
            if (this._time !== f && this._first || i || h || _) {
              if (this._initted || (this._initted = !0),
              this._active || !this._paused && this._time !== f && t > 0 && (this._active = !0),
              0 === f && this.vars.onStart && (0 === this._time && this._duration || e || this._callback("onStart")),
              (u = this._time) >= f)
                for (r = this._first; r && (n = r._next,
                u === this._time && (!this._paused || g)); )
                  (r._active || r._startTime <= u && !r._paused && !r._gc) && (_ === r && (this.pause(),
                    this._pauseTime = c),
                    r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)),
                    r = n;
              else
                for (r = this._last; r && (n = r._prev,
                u === this._time && (!this._paused || g)); ) {
                  if (r._active || r._startTime <= f && !r._paused && !r._gc) {
                    if (_ === r) {
                      for (_ = r._prev; _ && _.endTime() > this._time; )
                        _.render(_._reversed ? _.totalDuration() - (t - _._startTime) * _._timeScale : (t - _._startTime) * _._timeScale, e, i),
                          _ = _._prev;
                      _ = null,
                        this.pause(),
                        this._pauseTime = c
                    }
                    r._reversed ? r.render((r._dirty ? r.totalDuration() : r._totalDuration) - (t - r._startTime) * r._timeScale, e, i) : r.render((t - r._startTime) * r._timeScale, e, i)
                  }
                  r = n
                }
              this._onUpdate && (e || (a.length && o(),
                this._callback("onUpdate"))),
              l && (this._gc || m !== this._startTime && d === this._timeScale || (0 === this._time || p >= this.totalDuration()) && (s && (a.length && o(),
              this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
              !e && this.vars[l] && this._callback(l)))
            }
          }
          ,
          p._hasPausedChild = function() {
            for (var e = this._first; e; ) {
              if (e._paused || e instanceof t && e._hasPausedChild())
                return !0;
              e = e._next
            }
            return !1
          }
          ,
          p.getChildren = function(t, e, i, s) {
            s = s || -9999999999;
            for (var n = [], a = this._first, o = 0; a; )
              a._startTime < s || (a instanceof r.default ? !1 !== e && (n[o++] = a) : (!1 !== i && (n[o++] = a),
              !1 !== t && (o = (n = n.concat(a.getChildren(!0, e, i))).length))),
                a = a._next;
            return n
          }
          ,
          p.getTweensOf = function(t, e) {
            var i, s, n = this._gc, a = [], o = 0;
            for (n && this._enabled(!0, !0),
              s = (i = r.default.getTweensOf(t)).length; --s > -1; )
              (i[s].timeline === this || e && this._contains(i[s])) && (a[o++] = i[s]);
            return n && this._enabled(!1, !0),
              a
          }
          ,
          p.recent = function() {
            return this._recent
          }
          ,
          p._contains = function(t) {
            for (var e = t.timeline; e; ) {
              if (e === this)
                return !0;
              e = e.timeline
            }
            return !1
          }
          ,
          p.shiftChildren = function(t, e, i) {
            i = i || 0;
            for (var r, s = this._first, n = this._labels; s; )
              s._startTime >= i && (s._startTime += t),
                s = s._next;
            if (e)
              for (r in n)
                n[r] >= i && (n[r] += t);
            return this._uncache(!0)
          }
          ,
          p._kill = function(t, e) {
            if (!t && !e)
              return this._enabled(!1, !1);
            for (var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1), r = i.length, s = !1; --r > -1; )
              i[r]._kill(t, e) && (s = !0);
            return s
          }
          ,
          p.clear = function(t) {
            var e = this.getChildren(!1, !0, !0)
              , i = e.length;
            for (this._time = this._totalTime = 0; --i > -1; )
              e[i]._enabled(!1, !1);
            return !1 !== t && (this._labels = {}),
              this._uncache(!0)
          }
          ,
          p.invalidate = function() {
            for (var t = this._first; t; )
              t.invalidate(),
                t = t._next;
            return r.Animation.prototype.invalidate.call(this)
          }
          ,
          p._enabled = function(t, e) {
            if (t === this._gc)
              for (var i = this._first; i; )
                i._enabled(t, !0),
                  i = i._next;
            return r.SimpleTimeline.prototype._enabled.call(this, t, e)
          }
          ,
          p.totalTime = function(t, e, i) {
            this._forcingPlayhead = !0;
            var s = r.Animation.prototype.totalTime.apply(this, arguments);
            return this._forcingPlayhead = !1,
              s
          }
          ,
          p.duration = function(t) {
            return arguments.length ? (0 !== this.duration() && 0 !== t && this.timeScale(this._duration / t),
              this) : (this._dirty && this.totalDuration(),
              this._duration)
          }
          ,
          p.totalDuration = function(t) {
            if (!arguments.length) {
              if (this._dirty) {
                for (var e, i, r = 0, s = this, n = s._last, a = 999999999999; n; )
                  e = n._prev,
                  n._dirty && n.totalDuration(),
                    n._startTime > a && s._sortChildren && !n._paused && !s._calculatingDuration ? (s._calculatingDuration = 1,
                      s.add(n, n._startTime - n._delay),
                      s._calculatingDuration = 0) : a = n._startTime,
                  n._startTime < 0 && !n._paused && (r -= n._startTime,
                  s._timeline.smoothChildTiming && (s._startTime += n._startTime / s._timeScale,
                    s._time -= n._startTime,
                    s._totalTime -= n._startTime,
                    s._rawPrevTime -= n._startTime),
                    s.shiftChildren(-n._startTime, !1, -9999999999),
                    a = 0),
                  (i = n._startTime + n._totalDuration / n._timeScale) > r && (r = i),
                    n = e;
                s._duration = s._totalDuration = r,
                  s._dirty = !1
              }
              return this._totalDuration
            }
            return t && this.totalDuration() ? this.timeScale(this._totalDuration / t) : this
          }
          ,
          p.paused = function(t) {
            if (!1 === t && this._paused)
              for (var e = this._first; e; )
                e._startTime === this._time && "isPause" === e.data && (e._rawPrevTime = 0),
                  e = e._next;
            return r.Animation.prototype.paused.apply(this, arguments)
          }
          ,
          p.usesFrames = function() {
            for (var t = this._timeline; t._timeline; )
              t = t._timeline;
            return t === r.Animation._rootFramesTimeline
          }
          ,
          p.rawTime = function(t) {
            return t && (this._paused || this._repeat && this.time() > 0 && this.totalProgress() < 1) ? this._totalTime % (this._duration + this._repeatDelay) : this._paused ? this._totalTime : (this._timeline.rawTime(t) - this._startTime) * this._timeScale
          }
          ,
          t
      }
    ), !0);
    var s = r.globals.TimelineLite;
    r._gsScope._gsDefine("TimelineMax", ["TimelineLite", "TweenLite", "easing.Ease"], (function() {
        var t = function(t) {
          s.call(this, t),
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
            this._cycle = 0,
            this._yoyo = !!this.vars.yoyo,
            this._dirty = !0
        }
          , e = r.default._internals
          , i = e.lazyTweens
          , n = e.lazyRender
          , a = r._gsScope._gsDefine.globals
          , o = new r.Ease(null,null,1,0)
          , l = t.prototype = new s;
        return l.constructor = t,
          l.kill()._gc = !1,
          t.version = "2.1.3",
          l.invalidate = function() {
            return this._yoyo = !!this.vars.yoyo,
              this._repeat = this.vars.repeat || 0,
              this._repeatDelay = this.vars.repeatDelay || 0,
              this._uncache(!0),
              s.prototype.invalidate.call(this)
          }
          ,
          l.addCallback = function(t, e, i, s) {
            return this.add(r.default.delayedCall(0, t, i, s), e)
          }
          ,
          l.removeCallback = function(t, e) {
            if (t)
              if (null == e)
                this._kill(null, t);
              else
                for (var i = this.getTweensOf(t, !1), r = i.length, s = this._parseTimeOrLabel(e); --r > -1; )
                  i[r]._startTime === s && i[r]._enabled(!1, !1);
            return this
          }
          ,
          l.removePause = function(t) {
            return this.removeCallback(s._internals.pauseCallback, t)
          }
          ,
          l.tweenTo = function(t, e) {
            e = e || {};
            var i, s, n, l = {
              ease: o,
              useFrames: this.usesFrames(),
              immediateRender: !1,
              lazy: !1
            }, h = e.repeat && a.TweenMax || r.default;
            for (s in e)
              l[s] = e[s];
            return l.time = this._parseTimeOrLabel(t),
              i = Math.abs(Number(l.time) - this._time) / this._timeScale || .001,
              n = new h(this,i,l),
              l.onStart = function() {
                n.target.paused(!0),
                n.vars.time === n.target.time() || i !== n.duration() || n.isFromTo || n.duration(Math.abs(n.vars.time - n.target.time()) / n.target._timeScale).render(n.time(), !0, !0),
                e.onStart && e.onStart.apply(e.onStartScope || e.callbackScope || n, e.onStartParams || [])
              }
              ,
              n
          }
          ,
          l.tweenFromTo = function(t, e, i) {
            i = i || {},
              t = this._parseTimeOrLabel(t),
              i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                callbackScope: this
              },
              i.immediateRender = !1 !== i.immediateRender;
            var r = this.tweenTo(e, i);
            return r.isFromTo = 1,
              r.duration(Math.abs(r.vars.time - t) / this._timeScale || .001)
          }
          ,
          l.render = function(t, e, r) {
            this._gc && this._enabled(!0, !1);
            var s, a, o, l, h, _, u, c, f, p = this._time, m = this._dirty ? this.totalDuration() : this._totalDuration, d = this._duration, g = this._totalTime, v = this._startTime, y = this._timeScale, T = this._rawPrevTime, x = this._paused, w = this._cycle;
            if (p !== this._time && (t += this._time - p),
            t >= m - 1e-8 && t >= 0)
              this._locked || (this._totalTime = m,
                this._cycle = this._repeat),
              this._reversed || this._hasPausedChild() || (a = !0,
                l = "onComplete",
                h = !!this._timeline.autoRemoveChildren,
              0 === this._duration && (t <= 0 && t >= -1e-8 || T < 0 || 1e-8 === T) && T !== t && this._first && (h = !0,
              T > 1e-8 && (l = "onReverseComplete"))),
                this._rawPrevTime = this._duration || !e || t || this._rawPrevTime === t ? t : 1e-8,
                this._yoyo && 1 & this._cycle ? this._time = t = 0 : (this._time = d,
                  t = d + 1e-4);
            else if (t < 1e-8)
              if (this._locked || (this._totalTime = this._cycle = 0),
                this._time = 0,
              t > -1e-8 && (t = 0),
              (0 !== p || 0 === d && 1e-8 !== T && (T > 0 || t < 0 && T >= 0) && !this._locked) && (l = "onReverseComplete",
                a = this._reversed),
              t < 0)
                this._active = !1,
                  this._timeline.autoRemoveChildren && this._reversed ? (h = a = !0,
                    l = "onReverseComplete") : T >= 0 && this._first && (h = !0),
                  this._rawPrevTime = t;
              else {
                if (this._rawPrevTime = d || !e || t || this._rawPrevTime === t ? t : 1e-8,
                0 === t && a)
                  for (s = this._first; s && 0 === s._startTime; )
                    s._duration || (a = !1),
                      s = s._next;
                t = 0,
                this._initted || (h = !0)
              }
            else
              0 === d && T < 0 && (h = !0),
                this._time = this._rawPrevTime = t,
              this._locked || (this._totalTime = t,
              0 !== this._repeat && (_ = d + this._repeatDelay,
                this._cycle = this._totalTime / _ >> 0,
              this._cycle && this._cycle === this._totalTime / _ && g <= t && this._cycle--,
                this._time = this._totalTime - this._cycle * _,
              this._yoyo && 1 & this._cycle && (this._time = d - this._time),
                this._time > d ? (this._time = d,
                  t = d + 1e-4) : this._time < 0 ? this._time = t = 0 : t = this._time));
            if (this._hasPause && !this._forcingPlayhead && !e) {
              if ((t = this._time) > p || this._repeat && w !== this._cycle)
                for (s = this._first; s && s._startTime <= t && !u; )
                  s._duration || "isPause" !== s.data || s.ratio || 0 === s._startTime && 0 === this._rawPrevTime || (u = s),
                    s = s._next;
              else
                for (s = this._last; s && s._startTime >= t && !u; )
                  s._duration || "isPause" === s.data && s._rawPrevTime > 0 && (u = s),
                    s = s._prev;
              u && (f = this._startTime + (this._reversed ? this._duration - u._startTime : u._startTime) / this._timeScale,
              u._startTime < d && (this._time = this._rawPrevTime = t = u._startTime,
                this._totalTime = t + this._cycle * (this._totalDuration + this._repeatDelay)))
            }
            if (this._cycle !== w && !this._locked) {
              var b = this._yoyo && 0 != (1 & w)
                , P = b === (this._yoyo && 0 != (1 & this._cycle))
                , S = this._totalTime
                , k = this._cycle
                , O = this._rawPrevTime
                , R = this._time;
              if (this._totalTime = w * d,
                this._cycle < w ? b = !b : this._totalTime += d,
                this._time = p,
                this._rawPrevTime = 0 === d ? T - 1e-4 : T,
                this._cycle = w,
                this._locked = !0,
                p = b ? 0 : d,
                this.render(p, e, 0 === d),
              e || this._gc || this.vars.onRepeat && (this._cycle = k,
                this._locked = !1,
                this._callback("onRepeat")),
              p !== this._time)
                return;
              if (P && (this._cycle = w,
                this._locked = !0,
                p = b ? d + 1e-4 : -1e-4,
                this.render(p, !0, !1)),
                this._locked = !1,
              this._paused && !x)
                return;
              this._time = R,
                this._totalTime = S,
                this._cycle = k,
                this._rawPrevTime = O
            }
            if (this._time !== p && this._first || r || h || u) {
              if (this._initted || (this._initted = !0),
              this._active || !this._paused && this._totalTime !== g && t > 0 && (this._active = !0),
              0 === g && this.vars.onStart && (0 === this._totalTime && this._totalDuration || e || this._callback("onStart")),
              (c = this._time) >= p)
                for (s = this._first; s && (o = s._next,
                c === this._time && (!this._paused || x)); )
                  (s._active || s._startTime <= this._time && !s._paused && !s._gc) && (u === s && (this.pause(),
                    this._pauseTime = f),
                    s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, r) : s.render((t - s._startTime) * s._timeScale, e, r)),
                    s = o;
              else
                for (s = this._last; s && (o = s._prev,
                c === this._time && (!this._paused || x)); ) {
                  if (s._active || s._startTime <= p && !s._paused && !s._gc) {
                    if (u === s) {
                      for (u = s._prev; u && u.endTime() > this._time; )
                        u.render(u._reversed ? u.totalDuration() - (t - u._startTime) * u._timeScale : (t - u._startTime) * u._timeScale, e, r),
                          u = u._prev;
                      u = null,
                        this.pause(),
                        this._pauseTime = f
                    }
                    s._reversed ? s.render((s._dirty ? s.totalDuration() : s._totalDuration) - (t - s._startTime) * s._timeScale, e, r) : s.render((t - s._startTime) * s._timeScale, e, r)
                  }
                  s = o
                }
              this._onUpdate && (e || (i.length && n(),
                this._callback("onUpdate"))),
              l && (this._locked || this._gc || v !== this._startTime && y === this._timeScale || (0 === this._time || m >= this.totalDuration()) && (a && (i.length && n(),
              this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
              !e && this.vars[l] && this._callback(l)))
            } else
              g !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
          }
          ,
          l.getActive = function(t, e, i) {
            var r, s, n = [], a = this.getChildren(t || null == t, e || null == t, !!i), o = 0, l = a.length;
            for (r = 0; r < l; r++)
              (s = a[r]).isActive() && (n[o++] = s);
            return n
          }
          ,
          l.getLabelAfter = function(t) {
            t || 0 !== t && (t = this._time);
            var e, i = this.getLabelsArray(), r = i.length;
            for (e = 0; e < r; e++)
              if (i[e].time > t)
                return i[e].name;
            return null
          }
          ,
          l.getLabelBefore = function(t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1; )
              if (e[i].time < t)
                return e[i].name;
            return null
          }
          ,
          l.getLabelsArray = function() {
            var t, e = [], i = 0;
            for (t in this._labels)
              e[i++] = {
                time: this._labels[t],
                name: t
              };
            return e.sort((function(t, e) {
                return t.time - e.time
              }
            )),
              e
          }
          ,
          l.invalidate = function() {
            return this._locked = !1,
              s.prototype.invalidate.call(this)
          }
          ,
          l.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this._time / this.duration() || 0
          }
          ,
          l.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration() || 0
          }
          ,
          l.totalDuration = function(t) {
            return arguments.length ? -1 !== this._repeat && t ? this.timeScale(this.totalDuration() / t) : this : (this._dirty && (s.prototype.totalDuration.call(this),
              this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat),
              this._totalDuration)
          }
          ,
          l.time = function(t, e) {
            if (!arguments.length)
              return this._time;
            this._dirty && this.totalDuration();
            var i = this._duration
              , r = this._cycle
              , s = r * (i + this._repeatDelay);
            return t > i && (t = i),
              this.totalTime(this._yoyo && 1 & r ? i - t + s : this._repeat ? t + s : t, e)
          }
          ,
          l.repeat = function(t) {
            return arguments.length ? (this._repeat = t,
              this._uncache(!0)) : this._repeat
          }
          ,
          l.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t,
              this._uncache(!0)) : this._repeatDelay
          }
          ,
          l.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
              this) : this._yoyo
          }
          ,
          l.currentLabel = function(t) {
            return arguments.length ? this.seek(t, !0) : this.getLabelBefore(this._time + 1e-8)
          }
          ,
          t
      }
    ), !0);
    var n = r.globals.TimelineMax;
    r._gsScope._gsDefine("TweenMax", ["core.Animation", "core.SimpleTimeline", "TweenLite"], (function() {
        var t = function(t) {
          var e, i = [], r = t.length;
          for (e = 0; e !== r; i.push(t[e++]))
            ;
          return i
        }
          , e = function(t, e, i) {
          var r, s, n = t.cycle;
          for (r in n)
            s = n[r],
              t[r] = "function" == typeof s ? s(i, e[i], e) : s[i % s.length];
          delete t.cycle
        }
          , i = function(t) {
          if ("function" == typeof t)
            return t;
          var e = "object" == typeof t ? t : {
            each: t
          }
            , i = e.ease
            , r = e.from || 0
            , s = e.base || 0
            , n = {}
            , a = isNaN(r)
            , o = e.axis
            , l = {
            center: .5,
            end: 1
          }[r] || 0;
          return function(t, h, _) {
            var u, c, f, p, m, d, g, v, y, T = (_ || e).length, x = n[T];
            if (!x) {
              if (!(y = "auto" === e.grid ? 0 : (e.grid || [1 / 0])[0])) {
                for (g = -1 / 0; g < (g = _[y++].getBoundingClientRect().left) && y < T; )
                  ;
                y--
              }
              for (x = n[T] = [],
                u = a ? Math.min(y, T) * l - .5 : r % y,
                c = a ? T * l / y - .5 : r / y | 0,
                g = 0,
                v = 1 / 0,
                d = 0; d < T; d++)
                f = d % y - u,
                  p = c - (d / y | 0),
                  x[d] = m = o ? Math.abs("y" === o ? p : f) : Math.sqrt(f * f + p * p),
                m > g && (g = m),
                m < v && (v = m);
              x.max = g - v,
                x.min = v,
                x.v = T = e.amount || e.each * (y > T ? T - 1 : o ? "y" === o ? T / y : y : Math.max(y, T / y)) || 0,
                x.b = T < 0 ? s - T : s
            }
            return T = (x[t] - x.min) / x.max,
            x.b + (i ? i.getRatio(T) : T) * x.v
          }
        }
          , s = function(t, e, i) {
          r.default.call(this, t, e, i),
            this._cycle = 0,
            this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase,
            this._repeat = this.vars.repeat || 0,
            this._repeatDelay = this.vars.repeatDelay || 0,
          this._repeat && this._uncache(!0),
            this.render = s.prototype.render
        }
          , n = r.default._internals
          , a = n.isSelector
          , o = n.isArray
          , l = s.prototype = r.default.to({}, .1, {})
          , h = [];
        s.version = "2.1.3",
          l.constructor = s,
          l.kill()._gc = !1,
          s.killTweensOf = s.killDelayedCallsTo = r.default.killTweensOf,
          s.getTweensOf = r.default.getTweensOf,
          s.lagSmoothing = r.default.lagSmoothing,
          s.ticker = r.default.ticker,
          s.render = r.default.render,
          s.distribute = i,
          l.invalidate = function() {
            return this._yoyo = !0 === this.vars.yoyo || !!this.vars.yoyoEase,
              this._repeat = this.vars.repeat || 0,
              this._repeatDelay = this.vars.repeatDelay || 0,
              this._yoyoEase = null,
              this._uncache(!0),
              r.default.prototype.invalidate.call(this)
          }
          ,
          l.updateTo = function(t, e) {
            var i, s = this.ratio, n = this.vars.immediateRender || t.immediateRender;
            for (i in e && this._startTime < this._timeline._time && (this._startTime = this._timeline._time,
              this._uncache(!1),
              this._gc ? this._enabled(!0, !1) : this._timeline.insert(this, this._startTime - this._delay)),
              t)
              this.vars[i] = t[i];
            if (this._initted || n)
              if (e)
                this._initted = !1,
                n && this.render(0, !0, !0);
              else if (this._gc && this._enabled(!0, !1),
              this._notifyPluginsOfEnabled && this._firstPT && r.default._onPluginEvent("_onDisable", this),
              this._time / this._duration > .998) {
                var a = this._totalTime;
                this.render(0, !0, !1),
                  this._initted = !1,
                  this.render(a, !0, !1)
              } else if (this._initted = !1,
                this._init(),
              this._time > 0 || n)
                for (var o, l = 1 / (1 - s), h = this._firstPT; h; )
                  o = h.s + h.c,
                    h.c *= l,
                    h.s = o - h.c,
                    h = h._next;
            return this
          }
          ,
          l.render = function(t, e, i) {
            this._initted || 0 === this._duration && this.vars.repeat && this.invalidate();
            var s, a, o, l, h, _, u, c, f, p = this._dirty ? this.totalDuration() : this._totalDuration, m = this._time, d = this._totalTime, g = this._cycle, v = this._duration, y = this._rawPrevTime;
            if (t >= p - 1e-8 && t >= 0 ? (this._totalTime = p,
              this._cycle = this._repeat,
              this._yoyo && 0 != (1 & this._cycle) ? (this._time = 0,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0) : (this._time = v,
                this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
            this._reversed || (s = !0,
              a = "onComplete",
              i = i || this._timeline.autoRemoveChildren),
            0 === v && (this._initted || !this.vars.lazy || i) && (this._startTime === this._timeline._duration && (t = 0),
            (y < 0 || t <= 0 && t >= -1e-8 || 1e-8 === y && "isPause" !== this.data) && y !== t && (i = !0,
            y > 1e-8 && (a = "onReverseComplete")),
              this._rawPrevTime = c = !e || t || y === t ? t : 1e-8)) : t < 1e-8 ? (this._totalTime = this._time = this._cycle = 0,
              this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0,
            (0 !== d || 0 === v && y > 0) && (a = "onReverseComplete",
              s = this._reversed),
              t > -1e-8 ? t = 0 : t < 0 && (this._active = !1,
              0 === v && (this._initted || !this.vars.lazy || i) && (y >= 0 && (i = !0),
                this._rawPrevTime = c = !e || t || y === t ? t : 1e-8)),
            this._initted || (i = !0)) : (this._totalTime = this._time = t,
            0 !== this._repeat && (l = v + this._repeatDelay,
              this._cycle = this._totalTime / l >> 0,
            0 !== this._cycle && this._cycle === this._totalTime / l && d <= t && this._cycle--,
              this._time = this._totalTime - this._cycle * l,
            this._yoyo && 0 != (1 & this._cycle) && (this._time = v - this._time,
            (f = this._yoyoEase || this.vars.yoyoEase) && (this._yoyoEase || (!0 !== f || this._initted ? this._yoyoEase = f = !0 === f ? this._ease : f instanceof r.Ease ? f : r.Ease.map[f] : (f = this.vars.ease,
              this._yoyoEase = f = f ? f instanceof r.Ease ? f : "function" == typeof f ? new r.Ease(f,this.vars.easeParams) : r.Ease.map[f] || r.default.defaultEase : r.default.defaultEase)),
              this.ratio = f ? 1 - f.getRatio((v - this._time) / v) : 0)),
              this._time > v ? this._time = v : this._time < 0 && (this._time = 0)),
              this._easeType && !f ? (h = this._time / v,
              (1 === (_ = this._easeType) || 3 === _ && h >= .5) && (h = 1 - h),
              3 === _ && (h *= 2),
                1 === (u = this._easePower) ? h *= h : 2 === u ? h *= h * h : 3 === u ? h *= h * h * h : 4 === u && (h *= h * h * h * h),
                this.ratio = 1 === _ ? 1 - h : 2 === _ ? h : this._time / v < .5 ? h / 2 : 1 - h / 2) : f || (this.ratio = this._ease.getRatio(this._time / v))),
            m !== this._time || i || g !== this._cycle) {
              if (!this._initted) {
                if (this._init(),
                !this._initted || this._gc)
                  return;
                if (!i && this._firstPT && (!1 !== this.vars.lazy && this._duration || this.vars.lazy && !this._duration))
                  return this._time = m,
                    this._totalTime = d,
                    this._rawPrevTime = y,
                    this._cycle = g,
                    n.lazyTweens.push(this),
                    void (this._lazy = [t, e]);
                !this._time || s || f ? s && this._ease._calcEnd && !f && (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1)) : this.ratio = this._ease.getRatio(this._time / v)
              }
              for (!1 !== this._lazy && (this._lazy = !1),
              this._active || !this._paused && this._time !== m && t >= 0 && (this._active = !0),
              0 === d && (2 === this._initted && t > 0 && this._init(),
              this._startAt && (t >= 0 ? this._startAt.render(t, !0, i) : a || (a = "_dummyGS")),
              this.vars.onStart && (0 === this._totalTime && 0 !== v || e || this._callback("onStart"))),
                o = this._firstPT; o; )
                o.f ? o.t[o.p](o.c * this.ratio + o.s) : o.t[o.p] = o.c * this.ratio + o.s,
                  o = o._next;
              this._onUpdate && (t < 0 && this._startAt && this._startTime && this._startAt.render(t, !0, i),
              e || (this._totalTime !== d || a) && this._callback("onUpdate")),
              this._cycle !== g && (e || this._gc || this.vars.onRepeat && this._callback("onRepeat")),
              a && (this._gc && !i || (t < 0 && this._startAt && !this._onUpdate && this._startTime && this._startAt.render(t, !0, i),
              s && (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                this._active = !1),
              !e && this.vars[a] && this._callback(a),
              0 === v && 1e-8 === this._rawPrevTime && 1e-8 !== c && (this._rawPrevTime = 0)))
            } else
              d !== this._totalTime && this._onUpdate && (e || this._callback("onUpdate"))
          }
          ,
          s.to = function(t, e, i) {
            return new s(t,e,i)
          }
          ,
          s.from = function(t, e, i) {
            return i.runBackwards = !0,
              i.immediateRender = 0 != i.immediateRender,
              new s(t,e,i)
          }
          ,
          s.fromTo = function(t, e, i, r) {
            return r.startAt = i,
              r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender,
              new s(t,e,r)
          }
          ,
          s.staggerTo = s.allTo = function(n, l, _, u, c, f, p) {
            var m, d, g, v, y = [], T = i(_.stagger || u), x = _.cycle, w = (_.startAt || h).cycle;
            for (o(n) || ("string" == typeof n && (n = r.default.selector(n) || n),
            a(n) && (n = t(n))),
              m = (n = n || []).length - 1,
              g = 0; g <= m; g++) {
              for (v in d = {},
                _)
                d[v] = _[v];
              if (x && (e(d, n, g),
              null != d.duration && (l = d.duration,
                delete d.duration)),
                w) {
                for (v in w = d.startAt = {},
                  _.startAt)
                  w[v] = _.startAt[v];
                e(d.startAt, n, g)
              }
              d.delay = T(g, n[g], n) + (d.delay || 0),
              g === m && c && (d.onComplete = function() {
                  _.onComplete && _.onComplete.apply(_.onCompleteScope || this, arguments),
                    c.apply(p || _.callbackScope || this, f || h)
                }
              ),
                y[g] = new s(n[g],l,d)
            }
            return y
          }
          ,
          s.staggerFrom = s.allFrom = function(t, e, i, r, n, a, o) {
            return i.runBackwards = !0,
              i.immediateRender = 0 != i.immediateRender,
              s.staggerTo(t, e, i, r, n, a, o)
          }
          ,
          s.staggerFromTo = s.allFromTo = function(t, e, i, r, n, a, o, l) {
            return r.startAt = i,
              r.immediateRender = 0 != r.immediateRender && 0 != i.immediateRender,
              s.staggerTo(t, e, r, n, a, o, l)
          }
          ,
          s.delayedCall = function(t, e, i, r, n) {
            return new s(e,0,{
              delay: t,
              onComplete: e,
              onCompleteParams: i,
              callbackScope: r,
              onReverseComplete: e,
              onReverseCompleteParams: i,
              immediateRender: !1,
              useFrames: n,
              overwrite: 0
            })
          }
          ,
          s.set = function(t, e) {
            return new s(t,0,e)
          }
          ,
          s.isTweening = function(t) {
            return r.default.getTweensOf(t, !0).length > 0
          }
        ;
        var _ = function(t, e) {
            for (var i = [], s = 0, n = t._first; n; )
              n instanceof r.default ? i[s++] = n : (e && (i[s++] = n),
                s = (i = i.concat(_(n, e))).length),
                n = n._next;
            return i
          }
          , u = s.getAllTweens = function(t) {
            return _(r.Animation._rootTimeline, t).concat(_(r.Animation._rootFramesTimeline, t))
          }
        ;
        s.killAll = function(t, e, i, s) {
          null == e && (e = !0),
          null == i && (i = !0);
          var n, a, o, l = u(0 != s), h = l.length, _ = e && i && s;
          for (o = 0; o < h; o++)
            a = l[o],
            (_ || a instanceof r.SimpleTimeline || (n = a.target === a.vars.onComplete) && i || e && !n) && (t ? a.totalTime(a._reversed ? 0 : a.totalDuration()) : a._enabled(!1, !1))
        }
          ,
          s.killChildTweensOf = function(e, i) {
            if (null != e) {
              var l, h, _, u, c, f = n.tweenLookup;
              if ("string" == typeof e && (e = r.default.selector(e) || e),
              a(e) && (e = t(e)),
                o(e))
                for (u = e.length; --u > -1; )
                  s.killChildTweensOf(e[u], i);
              else {
                for (_ in l = [],
                  f)
                  for (h = f[_].target.parentNode; h; )
                    h === e && (l = l.concat(f[_].tweens)),
                      h = h.parentNode;
                for (c = l.length,
                  u = 0; u < c; u++)
                  i && l[u].totalTime(l[u].totalDuration()),
                    l[u]._enabled(!1, !1)
              }
            }
          }
        ;
        var c = function(t, e, i, s) {
          e = !1 !== e,
            i = !1 !== i;
          for (var n, a, o = u(s = !1 !== s), l = e && i && s, h = o.length; --h > -1; )
            a = o[h],
            (l || a instanceof r.SimpleTimeline || (n = a.target === a.vars.onComplete) && i || e && !n) && a.paused(t)
        };
        return s.pauseAll = function(t, e, i) {
          c(!0, t, e, i)
        }
          ,
          s.resumeAll = function(t, e, i) {
            c(!1, t, e, i)
          }
          ,
          s.globalTimeScale = function(t) {
            var e = r.Animation._rootTimeline
              , i = r.default.ticker.time;
            return arguments.length ? (t = t || 1e-8,
              e._startTime = i - (i - e._startTime) * e._timeScale / t,
              e = r.Animation._rootFramesTimeline,
              i = r.default.ticker.frame,
              e._startTime = i - (i - e._startTime) * e._timeScale / t,
              e._timeScale = r.Animation._rootTimeline._timeScale = t,
              t) : e._timeScale
          }
          ,
          l.progress = function(t, e) {
            return arguments.length ? this.totalTime(this.duration() * (this._yoyo && 0 != (1 & this._cycle) ? 1 - t : t) + this._cycle * (this._duration + this._repeatDelay), e) : this.duration() ? this._time / this._duration : this.ratio
          }
          ,
          l.totalProgress = function(t, e) {
            return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this._totalTime / this.totalDuration()
          }
          ,
          l.time = function(t, e) {
            if (!arguments.length)
              return this._time;
            this._dirty && this.totalDuration();
            var i = this._duration
              , r = this._cycle
              , s = r * (i + this._repeatDelay);
            return t > i && (t = i),
              this.totalTime(this._yoyo && 1 & r ? i - t + s : this._repeat ? t + s : t, e)
          }
          ,
          l.duration = function(t) {
            return arguments.length ? r.Animation.prototype.duration.call(this, t) : this._duration
          }
          ,
          l.totalDuration = function(t) {
            return arguments.length ? -1 === this._repeat ? this : this.duration((t - this._repeat * this._repeatDelay) / (this._repeat + 1)) : (this._dirty && (this._totalDuration = -1 === this._repeat ? 999999999999 : this._duration * (this._repeat + 1) + this._repeatDelay * this._repeat,
              this._dirty = !1),
              this._totalDuration)
          }
          ,
          l.repeat = function(t) {
            return arguments.length ? (this._repeat = t,
              this._uncache(!0)) : this._repeat
          }
          ,
          l.repeatDelay = function(t) {
            return arguments.length ? (this._repeatDelay = t,
              this._uncache(!0)) : this._repeatDelay
          }
          ,
          l.yoyo = function(t) {
            return arguments.length ? (this._yoyo = t,
              this) : this._yoyo
          }
          ,
          s
      }
    ), !0);
    var a = r.globals.TweenMax
      , o = i(469)
      , l = r._gsScope._gsDefine.plugin({
      propName: "attr",
      API: 2,
      version: "0.6.1",
      init: function(t, e, i, r) {
        var s, n;
        if ("function" != typeof t.setAttribute)
          return !1;
        for (s in e)
          "function" == typeof (n = e[s]) && (n = n(r, t)),
            this._addTween(t, "setAttribute", t.getAttribute(s) + "", n + "", s, !1, s),
            this._overwriteProps.push(s);
        return !0
      }
    })
      , h = r._gsScope._gsDefine.plugin({
      propName: "roundProps",
      version: "1.7.0",
      priority: -1,
      API: 2,
      init: function(t, e, i) {
        return this._tween = i,
          !0
      }
    })
      , _ = function(t) {
      var e = t < 1 ? Math.pow(10, (t + "").length - 2) : 1;
      return function(i) {
        return (Math.round(i / t) * t * e | 0) / e
      }
    }
      , u = function(t, e) {
      for (; t; )
        t.f || t.blob || (t.m = e || Math.round),
          t = t._next
    }
      , c = h.prototype;
    c._onInitAllProps = function() {
      var t, e, i, r, s = this._tween, n = s.vars.roundProps, a = {}, o = s._propLookup.roundProps;
      if ("object" != typeof n || n.push)
        for ("string" == typeof n && (n = n.split(",")),
          i = n.length; --i > -1; )
          a[n[i]] = Math.round;
      else
        for (r in n)
          a[r] = _(n[r]);
      for (r in a)
        for (t = s._firstPT; t; )
          e = t._next,
            t.pg ? t.t._mod(a) : t.n === r && (2 === t.f && t.t ? u(t.t._firstPT, a[r]) : (this._add(t.t, r, t.s, t.c, a[r]),
            e && (e._prev = t._prev),
              t._prev ? t._prev._next = e : s._firstPT === t && (s._firstPT = e),
              t._next = t._prev = null,
              s._propLookup[r] = o)),
            t = e;
      return !1
    }
      ,
      c._add = function(t, e, i, r, s) {
        this._addTween(t, e, i, i + r, e, s || Math.round),
          this._overwriteProps.push(e)
      }
    ;
    var f = r._gsScope._gsDefine.plugin({
      propName: "directionalRotation",
      version: "0.3.1",
      API: 2,
      init: function(t, e, i, r) {
        "object" != typeof e && (e = {
          rotation: e
        }),
          this.finals = {};
        var s, n, a, o, l, h, _ = !0 === e.useRadians ? 2 * Math.PI : 360;
        for (s in e)
          "useRadians" !== s && ("function" == typeof (o = e[s]) && (o = o(r, t)),
            n = (h = (o + "").split("_"))[0],
            a = parseFloat("function" != typeof t[s] ? t[s] : t[s.indexOf("set") || "function" != typeof t["get" + s.substr(3)] ? s : "get" + s.substr(3)]()),
            l = (o = this.finals[s] = "string" == typeof n && "=" === n.charAt(1) ? a + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)) : Number(n) || 0) - a,
          h.length && (-1 !== (n = h.join("_")).indexOf("short") && (l %= _) !== l % (_ / 2) && (l = l < 0 ? l + _ : l - _),
            -1 !== n.indexOf("_cw") && l < 0 ? l = (l + 9999999999 * _) % _ - (l / _ | 0) * _ : -1 !== n.indexOf("ccw") && l > 0 && (l = (l - 9999999999 * _) % _ - (l / _ | 0) * _)),
          (l > 1e-6 || l < -1e-6) && (this._addTween(t, s, a, a + l, s),
            this._overwriteProps.push(s)));
        return !0
      },
      set: function(t) {
        var e;
        if (1 !== t)
          this._super.setRatio.call(this, t);
        else
          for (e = this._firstPT; e; )
            e.f ? e.t[e.p](this.finals[e.p]) : e.t[e.p] = this.finals[e.p],
              e = e._next
      }
    });
    f._autoCSS = !0;
    var p = 180 / Math.PI
      , m = []
      , d = []
      , g = []
      , v = {}
      , y = r._gsScope._gsDefine.globals
      , T = function(t, e, i, r) {
      i === r && (i = r - (r - e) / 1e6),
      t === e && (e = t + (i - t) / 1e6),
        this.a = t,
        this.b = e,
        this.c = i,
        this.d = r,
        this.da = r - t,
        this.ca = i - t,
        this.ba = e - t
    }
      , x = function(t, e, i, r) {
      var s = {
        a: t
      }
        , n = {}
        , a = {}
        , o = {
        c: r
      }
        , l = (t + e) / 2
        , h = (e + i) / 2
        , _ = (i + r) / 2
        , u = (l + h) / 2
        , c = (h + _) / 2
        , f = (c - u) / 8;
      return s.b = l + (t - l) / 4,
        n.b = u + f,
        s.c = n.a = (s.b + n.b) / 2,
        n.c = a.a = (u + c) / 2,
        a.b = c - f,
        o.b = _ + (r - _) / 4,
        a.c = o.a = (a.b + o.b) / 2,
        [s, n, a, o]
    }
      , w = function(t, e, i, r, s) {
      var n, a, o, l, h, _, u, c, f, p, v, y, T, w = t.length - 1, b = 0, P = t[0].a;
      for (n = 0; n < w; n++)
        a = (h = t[b]).a,
          o = h.d,
          l = t[b + 1].d,
          s ? (v = m[n],
            T = ((y = d[n]) + v) * e * .25 / (r ? .5 : g[n] || .5),
            c = o - ((_ = o - (o - a) * (r ? .5 * e : 0 !== v ? T / v : 0)) + (((u = o + (l - o) * (r ? .5 * e : 0 !== y ? T / y : 0)) - _) * (3 * v / (v + y) + .5) / 4 || 0))) : c = o - ((_ = o - (o - a) * e * .5) + (u = o + (l - o) * e * .5)) / 2,
          _ += c,
          u += c,
          h.c = f = _,
          h.b = 0 !== n ? P : P = h.a + .6 * (h.c - h.a),
          h.da = o - a,
          h.ca = f - a,
          h.ba = P - a,
          i ? (p = x(a, P, f, o),
            t.splice(b, 1, p[0], p[1], p[2], p[3]),
            b += 4) : b++,
          P = u;
      (h = t[b]).b = P,
        h.c = P + .4 * (h.d - P),
        h.da = h.d - h.a,
        h.ca = h.c - h.a,
        h.ba = P - h.a,
      i && (p = x(h.a, P, h.c, h.d),
        t.splice(b, 1, p[0], p[1], p[2], p[3]))
    }
      , b = function(t, e, i, r) {
      var s, n, a, o, l, h, _ = [];
      if (r)
        for (n = (t = [r].concat(t)).length; --n > -1; )
          "string" == typeof (h = t[n][e]) && "=" === h.charAt(1) && (t[n][e] = r[e] + Number(h.charAt(0) + h.substr(2)));
      if ((s = t.length - 2) < 0)
        return _[0] = new T(t[0][e],0,0,t[0][e]),
          _;
      for (n = 0; n < s; n++)
        a = t[n][e],
          o = t[n + 1][e],
          _[n] = new T(a,0,0,o),
        i && (l = t[n + 2][e],
          m[n] = (m[n] || 0) + (o - a) * (o - a),
          d[n] = (d[n] || 0) + (l - o) * (l - o));
      return _[n] = new T(t[n][e],0,0,t[n + 1][e]),
        _
    }
      , P = function(t, e, i, r, s, n) {
      var a, o, l, h, _, u, c, f, p = {}, y = [], T = n || t[0];
      for (o in s = "string" == typeof s ? "," + s + "," : ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
      null == e && (e = 1),
        t[0])
        y.push(o);
      if (t.length > 1) {
        for (f = t[t.length - 1],
          c = !0,
          a = y.length; --a > -1; )
          if (o = y[a],
          Math.abs(T[o] - f[o]) > .05) {
            c = !1;
            break
          }
        c && (t = t.concat(),
        n && t.unshift(n),
          t.push(t[1]),
          n = t[t.length - 3])
      }
      for (m.length = d.length = g.length = 0,
        a = y.length; --a > -1; )
        o = y[a],
          v[o] = -1 !== s.indexOf("," + o + ","),
          p[o] = b(t, o, v[o], n);
      for (a = m.length; --a > -1; )
        m[a] = Math.sqrt(m[a]),
          d[a] = Math.sqrt(d[a]);
      if (!r) {
        for (a = y.length; --a > -1; )
          if (v[o])
            for (u = (l = p[y[a]]).length - 1,
              h = 0; h < u; h++)
              _ = l[h + 1].da / d[h] + l[h].da / m[h] || 0,
                g[h] = (g[h] || 0) + _ * _;
        for (a = g.length; --a > -1; )
          g[a] = Math.sqrt(g[a])
      }
      for (a = y.length,
        h = i ? 4 : 1; --a > -1; )
        l = p[o = y[a]],
          w(l, e, i, r, v[o]),
        c && (l.splice(0, h),
          l.splice(l.length - h, h));
      return p
    }
      , S = function(t, e, i) {
      for (var r, s, n, a, o, l, h, _, u, c, f, p = 1 / i, m = t.length; --m > -1; )
        for (n = (c = t[m]).a,
          a = c.d - n,
          o = c.c - n,
          l = c.b - n,
          r = s = 0,
          _ = 1; _ <= i; _++)
          r = s - (s = ((h = p * _) * h * a + 3 * (u = 1 - h) * (h * o + u * l)) * h),
            e[f = m * i + _ - 1] = (e[f] || 0) + r * r
    }
      , k = r._gsScope._gsDefine.plugin({
      propName: "bezier",
      priority: -1,
      version: "1.3.9",
      API: 2,
      global: !0,
      init: function(t, e, i) {
        this._target = t,
        e instanceof Array && (e = {
          values: e
        }),
          this._func = {},
          this._mod = {},
          this._props = [],
          this._timeRes = null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10);
        var r, s, n, a, o, l = e.values || [], h = {}, _ = l[0], u = e.autoRotate || i.vars.orientToBezier;
        for (r in this._autoRotate = u ? u instanceof Array ? u : [["x", "y", "rotation", !0 === u ? 0 : Number(u) || 0]] : null,
          _)
          this._props.push(r);
        for (n = this._props.length; --n > -1; )
          r = this._props[n],
            this._overwriteProps.push(r),
            s = this._func[r] = "function" == typeof t[r],
            h[r] = s ? t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)]() : parseFloat(t[r]),
          o || h[r] !== l[0][r] && (o = h);
        if (this._beziers = "cubic" !== e.type && "quadratic" !== e.type && "soft" !== e.type ? P(l, isNaN(e.curviness) ? 1 : e.curviness, !1, "thruBasic" === e.type, e.correlate, o) : function(t, e, i) {
          var r, s, n, a, o, l, h, _, u, c, f, p = {}, m = "cubic" === (e = e || "soft") ? 3 : 2, d = "soft" === e, g = [];
          if (d && i && (t = [i].concat(t)),
          null == t || t.length < m + 1)
            throw "invalid Bezier data";
          for (u in t[0])
            g.push(u);
          for (l = g.length; --l > -1; ) {
            for (p[u = g[l]] = o = [],
              c = 0,
              _ = t.length,
              h = 0; h < _; h++)
              r = null == i ? t[h][u] : "string" == typeof (f = t[h][u]) && "=" === f.charAt(1) ? i[u] + Number(f.charAt(0) + f.substr(2)) : Number(f),
              d && h > 1 && h < _ - 1 && (o[c++] = (r + o[c - 2]) / 2),
                o[c++] = r;
            for (_ = c - m + 1,
              c = 0,
              h = 0; h < _; h += m)
              r = o[h],
                s = o[h + 1],
                n = o[h + 2],
                a = 2 === m ? 0 : o[h + 3],
                o[c++] = f = 3 === m ? new T(r,s,n,a) : new T(r,(2 * s + r) / 3,(2 * s + n) / 3,n);
            o.length = c
          }
          return p
        }(l, e.type, h),
          this._segCount = this._beziers[r].length,
          this._timeRes) {
          var c = function(t, e) {
            var i, r, s, n, a = [], o = [], l = 0, h = 0, _ = (e = e >> 0 || 6) - 1, u = [], c = [];
            for (i in t)
              S(t[i], a, e);
            for (s = a.length,
              r = 0; r < s; r++)
              l += Math.sqrt(a[r]),
                c[n = r % e] = l,
              n === _ && (h += l,
                u[n = r / e >> 0] = c,
                o[n] = h,
                l = 0,
                c = []);
            return {
              length: h,
              lengths: o,
              segments: u
            }
          }(this._beziers, this._timeRes);
          this._length = c.length,
            this._lengths = c.lengths,
            this._segments = c.segments,
            this._l1 = this._li = this._s1 = this._si = 0,
            this._l2 = this._lengths[0],
            this._curSeg = this._segments[0],
            this._s2 = this._curSeg[0],
            this._prec = 1 / this._curSeg.length
        }
        if (u = this._autoRotate)
          for (this._initialRotations = [],
          u[0]instanceof Array || (this._autoRotate = u = [u]),
            n = u.length; --n > -1; ) {
            for (a = 0; a < 3; a++)
              r = u[n][a],
                this._func[r] = "function" == typeof t[r] && t[r.indexOf("set") || "function" != typeof t["get" + r.substr(3)] ? r : "get" + r.substr(3)];
            r = u[n][2],
              this._initialRotations[n] = (this._func[r] ? this._func[r].call(this._target) : this._target[r]) || 0,
              this._overwriteProps.push(r)
          }
        return this._startRatio = i.vars.runBackwards ? 1 : 0,
          !0
      },
      set: function(t) {
        var e, i, r, s, n, a, o, l, h, _, u, c = this._segCount, f = this._func, m = this._target, d = t !== this._startRatio;
        if (this._timeRes) {
          if (h = this._lengths,
            _ = this._curSeg,
            u = t * this._length,
            r = this._li,
          u > this._l2 && r < c - 1) {
            for (l = c - 1; r < l && (this._l2 = h[++r]) <= u; )
              ;
            this._l1 = h[r - 1],
              this._li = r,
              this._curSeg = _ = this._segments[r],
              this._s2 = _[this._s1 = this._si = 0]
          } else if (u < this._l1 && r > 0) {
            for (; r > 0 && (this._l1 = h[--r]) >= u; )
              ;
            0 === r && u < this._l1 ? this._l1 = 0 : r++,
              this._l2 = h[r],
              this._li = r,
              this._curSeg = _ = this._segments[r],
              this._s1 = _[(this._si = _.length - 1) - 1] || 0,
              this._s2 = _[this._si]
          }
          if (e = r,
            u -= this._l1,
            r = this._si,
          u > this._s2 && r < _.length - 1) {
            for (l = _.length - 1; r < l && (this._s2 = _[++r]) <= u; )
              ;
            this._s1 = _[r - 1],
              this._si = r
          } else if (u < this._s1 && r > 0) {
            for (; r > 0 && (this._s1 = _[--r]) >= u; )
              ;
            0 === r && u < this._s1 ? this._s1 = 0 : r++,
              this._s2 = _[r],
              this._si = r
          }
          a = 1 === t ? 1 : (r + (u - this._s1) / (this._s2 - this._s1)) * this._prec || 0
        } else
          a = (t - (e = t < 0 ? 0 : t >= 1 ? c - 1 : c * t >> 0) * (1 / c)) * c;
        for (i = 1 - a,
          r = this._props.length; --r > -1; )
          s = this._props[r],
            o = (a * a * (n = this._beziers[s][e]).da + 3 * i * (a * n.ca + i * n.ba)) * a + n.a,
          this._mod[s] && (o = this._mod[s](o, m)),
            f[s] ? m[s](o) : m[s] = o;
        if (this._autoRotate) {
          var g, v, y, T, x, w, b, P = this._autoRotate;
          for (r = P.length; --r > -1; )
            s = P[r][2],
              w = P[r][3] || 0,
              b = !0 === P[r][4] ? 1 : p,
              n = this._beziers[P[r][0]],
              g = this._beziers[P[r][1]],
            n && g && (n = n[e],
              g = g[e],
              v = n.a + (n.b - n.a) * a,
              v += ((T = n.b + (n.c - n.b) * a) - v) * a,
              T += (n.c + (n.d - n.c) * a - T) * a,
              y = g.a + (g.b - g.a) * a,
              y += ((x = g.b + (g.c - g.b) * a) - y) * a,
              x += (g.c + (g.d - g.c) * a - x) * a,
              o = d ? Math.atan2(x - y, T - v) * b + w : this._initialRotations[r],
            this._mod[s] && (o = this._mod[s](o, m)),
              f[s] ? m[s](o) : m[s] = o)
        }
      }
    })
      , O = k.prototype;
    k.bezierThrough = P,
      k.cubicToQuadratic = x,
      k._autoCSS = !0,
      k.quadraticToCubic = function(t, e, i) {
        return new T(t,(2 * e + t) / 3,(2 * e + i) / 3,i)
      }
      ,
      k._cssRegister = function() {
        var t = y.CSSPlugin;
        if (t) {
          var e = t._internals
            , i = e._parseToProxy
            , r = e._setPluginRatio
            , s = e.CSSPropTween;
          e._registerComplexSpecialProp("bezier", {
            parser: function(t, e, n, a, o, l) {
              e instanceof Array && (e = {
                values: e
              }),
                l = new k;
              var h, _, u, c = e.values, f = c.length - 1, p = [], m = {};
              if (f < 0)
                return o;
              for (h = 0; h <= f; h++)
                u = i(t, c[h], a, o, l, f !== h),
                  p[h] = u.end;
              for (_ in e)
                m[_] = e[_];
              return m.values = p,
                (o = new s(t,"bezier",0,0,u.pt,2)).data = u,
                o.plugin = l,
                o.setRatio = r,
              0 === m.autoRotate && (m.autoRotate = !0),
              !m.autoRotate || m.autoRotate instanceof Array || (h = !0 === m.autoRotate ? 0 : Number(m.autoRotate),
                m.autoRotate = null != u.end.left ? [["left", "top", "rotation", h, !1]] : null != u.end.x && [["x", "y", "rotation", h, !1]]),
              m.autoRotate && (a._transform || a._enableTransforms(!1),
                u.autoRotate = a._target._gsTransform,
                u.proxy.rotation = u.autoRotate.rotation || 0,
                a._overwriteProps.push("rotation")),
                l._onInitTween(u.proxy, m, a._tween),
                o
            }
          })
        }
      }
      ,
      O._mod = function(t) {
        for (var e, i = this._overwriteProps, r = i.length; --r > -1; )
          (e = t[i[r]]) && "function" == typeof e && (this._mod[i[r]] = e)
      }
      ,
      O._kill = function(t) {
        var e, i, r = this._props;
        for (e in this._beziers)
          if (e in t)
            for (delete this._beziers[e],
              delete this._func[e],
              i = r.length; --i > -1; )
              r[i] === e && r.splice(i, 1);
        if (r = this._autoRotate)
          for (i = r.length; --i > -1; )
            t[r[i][2]] && r.splice(i, 1);
        return this._super._kill.call(this, t)
      }
      ,
      r._gsScope._gsDefine("easing.Back", ["easing.Ease"], (function() {
          var t, e, i, s, n = r._gsScope.GreenSockGlobals || r._gsScope, a = n.com.greensock, o = 2 * Math.PI, l = Math.PI / 2, h = a._class, _ = function(t, e) {
            var i = h("easing." + t, (function() {}
            ), !0)
              , s = i.prototype = new r.Ease;
            return s.constructor = i,
              s.getRatio = e,
              i
          }, u = r.Ease.register || function() {}
            , c = function(t, e, i, r, s) {
            var n = h("easing." + t, {
              easeOut: new e,
              easeIn: new i,
              easeInOut: new r
            }, !0);
            return u(n, t),
              n
          }, f = function(t, e, i) {
            this.t = t,
              this.v = e,
            i && (this.next = i,
              i.prev = this,
              this.c = i.v - e,
              this.gap = i.t - t)
          }, p = function(t, e) {
            var i = h("easing." + t, (function(t) {
                this._p1 = t || 0 === t ? t : 1.70158,
                  this._p2 = 1.525 * this._p1
              }
            ), !0)
              , s = i.prototype = new r.Ease;
            return s.constructor = i,
              s.getRatio = e,
              s.config = function(t) {
                return new i(t)
              }
              ,
              i
          }, m = c("Back", p("BackOut", (function(t) {
              return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1
            }
          )), p("BackIn", (function(t) {
              return t * t * ((this._p1 + 1) * t - this._p1)
            }
          )), p("BackInOut", (function(t) {
              return (t *= 2) < 1 ? .5 * t * t * ((this._p2 + 1) * t - this._p2) : .5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2)
            }
          ))), d = h("easing.SlowMo", (function(t, e, i) {
              e = e || 0 === e ? e : .7,
                null == t ? t = .7 : t > 1 && (t = 1),
                this._p = 1 !== t ? e : 0,
                this._p1 = (1 - t) / 2,
                this._p2 = t,
                this._p3 = this._p1 + this._p2,
                this._calcEnd = !0 === i
            }
          ), !0), g = d.prototype = new r.Ease;
          return g.constructor = d,
            g.getRatio = function(t) {
              var e = t + (.5 - t) * this._p;
              return t < this._p1 ? this._calcEnd ? 1 - (t = 1 - t / this._p1) * t : e - (t = 1 - t / this._p1) * t * t * t * e : t > this._p3 ? this._calcEnd ? 1 === t ? 0 : 1 - (t = (t - this._p3) / this._p1) * t : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t : this._calcEnd ? 1 : e
            }
            ,
            d.ease = new d(.7,.7),
            g.config = d.config = function(t, e, i) {
              return new d(t,e,i)
            }
            ,
            (g = (t = h("easing.SteppedEase", (function(t, e) {
                t = t || 1,
                  this._p1 = 1 / t,
                  this._p2 = t + (e ? 0 : 1),
                  this._p3 = e ? 1 : 0
              }
            ), !0)).prototype = new r.Ease).constructor = t,
            g.getRatio = function(t) {
              return t < 0 ? t = 0 : t >= 1 && (t = .999999999),
              ((this._p2 * t | 0) + this._p3) * this._p1
            }
            ,
            g.config = t.config = function(e, i) {
              return new t(e,i)
            }
            ,
            (g = (e = h("easing.ExpoScaleEase", (function(t, e, i) {
                this._p1 = Math.log(e / t),
                  this._p2 = e - t,
                  this._p3 = t,
                  this._ease = i
              }
            ), !0)).prototype = new r.Ease).constructor = e,
            g.getRatio = function(t) {
              return this._ease && (t = this._ease.getRatio(t)),
              (this._p3 * Math.exp(this._p1 * t) - this._p3) / this._p2
            }
            ,
            g.config = e.config = function(t, i, r) {
              return new e(t,i,r)
            }
            ,
            (g = (i = h("easing.RoughEase", (function(t) {
                for (var e, i, s, n, a, o, l = (t = t || {}).taper || "none", h = [], _ = 0, u = 0 | (t.points || 20), c = u, p = !1 !== t.randomize, m = !0 === t.clamp, d = t.template instanceof r.Ease ? t.template : null, g = "number" == typeof t.strength ? .4 * t.strength : .4; --c > -1; )
                  e = p ? Math.random() : 1 / u * c,
                    i = d ? d.getRatio(e) : e,
                    s = "none" === l ? g : "out" === l ? (n = 1 - e) * n * g : "in" === l ? e * e * g : e < .5 ? (n = 2 * e) * n * .5 * g : (n = 2 * (1 - e)) * n * .5 * g,
                    p ? i += Math.random() * s - .5 * s : c % 2 ? i += .5 * s : i -= .5 * s,
                  m && (i > 1 ? i = 1 : i < 0 && (i = 0)),
                    h[_++] = {
                      x: e,
                      y: i
                    };
                for (h.sort((function(t, e) {
                    return t.x - e.x
                  }
                )),
                  o = new f(1,1,null),
                  c = u; --c > -1; )
                  a = h[c],
                    o = new f(a.x,a.y,o);
                this._prev = new f(0,0,0 !== o.t ? o : o.next)
              }
            ), !0)).prototype = new r.Ease).constructor = i,
            g.getRatio = function(t) {
              var e = this._prev;
              if (t > e.t) {
                for (; e.next && t >= e.t; )
                  e = e.next;
                e = e.prev
              } else
                for (; e.prev && t <= e.t; )
                  e = e.prev;
              return this._prev = e,
              e.v + (t - e.t) / e.gap * e.c
            }
            ,
            g.config = function(t) {
              return new i(t)
            }
            ,
            i.ease = new i,
            c("Bounce", _("BounceOut", (function(t) {
                return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
              }
            )), _("BounceIn", (function(t) {
                return (t = 1 - t) < 1 / 2.75 ? 1 - 7.5625 * t * t : t < 2 / 2.75 ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + .75) : t < 2.5 / 2.75 ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + .9375) : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + .984375)
              }
            )), _("BounceInOut", (function(t) {
                var e = t < .5;
                return (t = e ? 1 - 2 * t : 2 * t - 1) < 1 / 2.75 ? t *= 7.5625 * t : t = t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375,
                  e ? .5 * (1 - t) : .5 * t + .5
              }
            ))),
            c("Circ", _("CircOut", (function(t) {
                return Math.sqrt(1 - (t -= 1) * t)
              }
            )), _("CircIn", (function(t) {
                return -(Math.sqrt(1 - t * t) - 1)
              }
            )), _("CircInOut", (function(t) {
                return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
              }
            ))),
            c("Elastic", (s = function(t, e, i) {
                var s = h("easing." + t, (function(t, e) {
                    this._p1 = t >= 1 ? t : 1,
                      this._p2 = (e || i) / (t < 1 ? t : 1),
                      this._p3 = this._p2 / o * (Math.asin(1 / this._p1) || 0),
                      this._p2 = o / this._p2
                  }
                ), !0)
                  , n = s.prototype = new r.Ease;
                return n.constructor = s,
                  n.getRatio = e,
                  n.config = function(t, e) {
                    return new s(t,e)
                  }
                  ,
                  s
              }
            )("ElasticOut", (function(t) {
                return this._p1 * Math.pow(2, -10 * t) * Math.sin((t - this._p3) * this._p2) + 1
              }
            ), .3), s("ElasticIn", (function(t) {
                return -this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2)
              }
            ), .3), s("ElasticInOut", (function(t) {
                return (t *= 2) < 1 ? this._p1 * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * -.5 : this._p1 * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - this._p3) * this._p2) * .5 + 1
              }
            ), .45)),
            c("Expo", _("ExpoOut", (function(t) {
                return 1 - Math.pow(2, -10 * t)
              }
            )), _("ExpoIn", (function(t) {
                return Math.pow(2, 10 * (t - 1)) - .001
              }
            )), _("ExpoInOut", (function(t) {
                return (t *= 2) < 1 ? .5 * Math.pow(2, 10 * (t - 1)) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
              }
            ))),
            c("Sine", _("SineOut", (function(t) {
                return Math.sin(t * l)
              }
            )), _("SineIn", (function(t) {
                return 1 - Math.cos(t * l)
              }
            )), _("SineInOut", (function(t) {
                return -.5 * (Math.cos(Math.PI * t) - 1)
              }
            ))),
            h("easing.EaseLookup", {
              find: function(t) {
                return r.Ease.map[t]
              }
            }, !0),
            u(n.SlowMo, "SlowMo", "ease,"),
            u(i, "RoughEase", "ease,"),
            u(t, "SteppedEase", "ease,"),
            m
        }
      ), !0);
    var R = r.globals.Back
      , C = r.globals.Elastic
      , A = r.globals.Bounce
      , D = r.globals.RoughEase
      , M = r.globals.SlowMo
      , F = r.globals.SteppedEase
      , E = r.globals.Circ
      , z = r.globals.Expo
      , L = r.globals.Sine
      , I = r.globals.ExpoScaleEase
      , N = a;
    N._autoActivated = [s, n, o.default, l, k, h, f, R, C, A, D, M, F, E, z, L, I],
      i.d(e, "default", (function() {
          return N
        }
      )),
      i.d(e, "TweenLite", (function() {
          return r.default
        }
      )),
      i.d(e, "TweenMax", (function() {
          return N
        }
      )),
      i.d(e, "TimelineLite", (function() {
          return s
        }
      )),
      i.d(e, "TimelineMax", (function() {
          return n
        }
      )),
      i.d(e, "CSSPlugin", (function() {
          return o.default
        }
      )),
      i.d(e, "AttrPlugin", (function() {
          return l
        }
      )),
      i.d(e, "BezierPlugin", (function() {
          return k
        }
      )),
      i.d(e, "RoundPropsPlugin", (function() {
          return h
        }
      )),
      i.d(e, "DirectionalRotationPlugin", (function() {
          return f
        }
      )),
      i.d(e, "TweenPlugin", (function() {
          return r.TweenPlugin
        }
      )),
      i.d(e, "Ease", (function() {
          return r.Ease
        }
      )),
      i.d(e, "Power0", (function() {
          return r.Power0
        }
      )),
      i.d(e, "Power1", (function() {
          return r.Power1
        }
      )),
      i.d(e, "Power2", (function() {
          return r.Power2
        }
      )),
      i.d(e, "Power3", (function() {
          return r.Power3
        }
      )),
      i.d(e, "Power4", (function() {
          return r.Power4
        }
      )),
      i.d(e, "Linear", (function() {
          return r.Linear
        }
      )),
      i.d(e, "Back", (function() {
          return R
        }
      )),
      i.d(e, "Elastic", (function() {
          return C
        }
      )),
      i.d(e, "Bounce", (function() {
          return A
        }
      )),
      i.d(e, "RoughEase", (function() {
          return D
        }
      )),
      i.d(e, "SlowMo", (function() {
          return M
        }
      )),
      i.d(e, "SteppedEase", (function() {
          return F
        }
      )),
      i.d(e, "Circ", (function() {
          return E
        }
      )),
      i.d(e, "Expo", (function() {
          return z
        }
      )),
      i.d(e, "Sine", (function() {
          return L
        }
      )),
      i.d(e, "ExpoScaleEase", (function() {
          return I
        }
      )),
      i.d(e, "_gsScope", (function() {
          return r._gsScope
        }
      ))
  }
}]);
