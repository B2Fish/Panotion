!function(){function t(e,i,n){function o(r,l){if(!i[r]){if(!e[r]){var c="function"==typeof require&&require;if(!l&&c)return c(r,!0);if(a)return a(r,!0);var s=new Error("Cannot find module '"+r+"'");throw s.code="MODULE_NOT_FOUND",s}var p=i[r]={exports:{}};e[r][0].call(p.exports,function(t){return o(e[r][1][t]||t)},p,p.exports,t,e,i,n)}return i[r].exports}for(var a="function"==typeof require&&require,r=0;r<n.length;r++)o(n[r]);return o}return t}()({1:[function(t,e,i){"use strict";t(5).controller("annoDetailCtrl",["$rootScope","$scope",function(t,e){$(document).ready(function(){})}])},{5:5}],2:[function(t,e,i){"use strict";t(5).controller("annoListCtrl",["$rootScope","$scope",function(t,e){}])},{5:5}],3:[function(t,e,i){"use strict";t(5).controller("headerCtrl",["$rootScope","$scope",function(t,e){e.isMenu=!1,e.selected=1,e.topbarpc=!1,e.menuClick=function(){e.isMenu=!0,$(".pagination-menu").addClass("-theme-dark _menu-open"),$("body").addClass("fp-viewing-0 _fixed")},e.ismenuClick=function(){e.isMenu=!1,$(".pagination-menu").removeClass("-theme-dark _menu-open"),$("body").removeClass("fp-viewing-0 _fixed")},e.switchList=function(t){e.selected=t},e.togglelaug=function(){$(".language").animate({right:"+=300px"}),$(".language-cover").show(),$("body").addClass("fp-viewing-0 _fixed")},e.backlang=function(){$(".language").animate({right:"-=300px"}),$(".language-cover").hide(),$("body").removeClass("fp-viewing-0 _fixed")},e.togglesearch=function(){e.topbarpc=!0,$(".top-bar-pc .search-nav").animate({top:"+=110px"})},e.SearchClose=function(){e.topbarpc=!1,$(".top-bar-pc .search-nav").animate({top:"-=110px"}),$(".show-ul").fadeOut(500)},e.searchUl=function(){$(".show-ul").fadeIn(500)},e.offsearchUl=function(){$(".show-ul").fadeOut(500)}}])},{5:5}],4:[function(t,e,i){"use strict";t(1),t(2),t(3)},{1:1,2:2,3:3}],5:[function(t,e,i){"use strict";var n=angular.module("PortalApp",["ui.router","ui-notification","oc.lazyLoad"]);n.config(["$stateProvider","$locationProvider","NotificationProvider",function(t,e,i){function n(e,i,n,o,a,r,l,c){var s={};i&&(s.url=i),n&&(s.controller=n),o&&(s.templateUrl=o),s.abstract=a,r&&(r.bgGrey=!r.bgWhite,s.data=r),l&&(s.views=l),c&&(s.resolve=c),t.state(e,s)}i.setOptions({delay:3e3,startTop:33,startRight:10,verticalSpacing:20,horizontalSpacing:20,positionX:"center",positionY:"top",templateUrl:"portal-notification.html"}),e.html5Mode(!1).hashPrefix(""),n("index","/index","annoDetailCtrl","page/home.html",!1,{pageTitle:"首页"},null,{deps:["$ocLazyLoad",function(t){t.load([" ./libs/pantion/fullpage.js","./libs/pantion/runtime.js"])}]}),n("market","/market","annoListCtrl","page/market.html",!1,{pageTitle:"行业详情"}),n("marketIndex","/marketIndex","annoListCtrl","page/marketIndex.html",!1,{pageTitle:"行业"}),n("abilityIndex","/abilityIndex","annoListCtrl","page/abilityIndex.html",!1,{pageTitle:"能力"}),n("ability","/ability","annoListCtrl","page/ability.html",!1,{pageTitle:"能力详情"}),n("insight","/insight","annoListCtrl","page/insight.html",!1,{pageTitle:"洞察"}),n("insightIndex","/insightIndex","annoListCtrl","page/insightIndex.html",!1,{pageTitle:"洞察详情"}),n("recruit","/recruit","annoListCtrl","page/recruit.html",!1,{pageTitle:"招聘"}),n("aboutUs","/aboutUs","annoListCtrl","page/aboutUs.html",!1,{pageTitle:"关于我们"}),n("office","/office","annoListCtrl","page/office.html",!1,{pageTitle:"办公室"}),n("legalProvision","/legalProvision","annoListCtrl","page/legalProvision.html",!1,{pageTitle:"法律条款"}),n("PrivacyProtection","/PrivacyProtection","annoListCtrl","page/PrivacyProtection.html",!1,{pageTitle:"隐私保护"}),n("cookie","/cookie","annoListCtrl","page/cookie.html",!1,{pageTitle:"cookie信息"}),n("disclaimer","/disclaimer","annoListCtrl","page/disclaimer.html",!1,{pageTitle:"无障碍声明"})}]),n.run(["$rootScope","$state","Notification",function(t,e,i){t.pageLoading=!0,t.$state=e,t.$Notification=i}]),e.exports=n},{}]},{},[4]);