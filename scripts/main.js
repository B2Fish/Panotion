!function(){function t(i,e,o){function n(r,l){if(!e[r]){if(!i[r]){var c="function"==typeof require&&require;if(!l&&c)return c(r,!0);if(a)return a(r,!0);var s=new Error("Cannot find module '"+r+"'");throw s.code="MODULE_NOT_FOUND",s}var p=e[r]={exports:{}};i[r][0].call(p.exports,function(t){return n(i[r][1][t]||t)},p,p.exports,t,i,e,o)}return e[r].exports}for(var a="function"==typeof require&&require,r=0;r<o.length;r++)n(o[r]);return n}return t}()({1:[function(t,i,e){"use strict";t(4).controller("annoDetailCtrl",["$rootScope",function(t){$(document).ready(function(){-1==location.href.indexOf("#reloaded")&&(location.href=location.href+"#reloaded",location.reload())})}])},{4:4}],2:[function(t,i,e){"use strict";t(4).controller("annoListCtrl",["$rootScope","$scope",function(t,i){}])},{4:4}],3:[function(t,i,e){"use strict";t(1),t(2)},{1:1,2:2}],4:[function(t,i,e){"use strict";var o=angular.module("PortalApp",["ui.router","ui-notification","oc.lazyLoad"]);o.config(["$stateProvider","$locationProvider","NotificationProvider",function(t,i,e){function o(i,e,o,n,a,r,l,c){var s={};e&&(s.url=e),o&&(s.controller=o),n&&(s.templateUrl=n),s.abstract=a,r&&(r.bgGrey=!r.bgWhite,s.data=r),l&&(s.views=l),c&&(s.resolve=c),t.state(i,s)}e.setOptions({delay:3e3,startTop:33,startRight:10,verticalSpacing:20,horizontalSpacing:20,positionX:"center",positionY:"top",templateUrl:"portal-notification.html"}),i.html5Mode(!1).hashPrefix(""),o("index","/index","annoDetailCtrl","page/home.html",!1,{pageTitle:"首页"},null,{deps:["$ocLazyLoad",function(t){t.load(["./libs/pantion/runtime.js"])}]}),o("market","/market","annoListCtrl","page/market.html",!1,{pageTitle:"行业详情"},null,{deps:["$ocLazyLoad",function(t){t.load(["./libs/pantion/runtime.js"])}]}),o("marketIndex","/marketIndex","annoListCtrl","page/marketIndex.html",!1,{pageTitle:"行业"}),o("abilityIndex","/abilityIndex","annoListCtrl","page/abilityIndex.html",!1,{pageTitle:"能力"}),o("ability","/ability","annoListCtrl","page/ability.html",!1,{pageTitle:"能力详情"}),o("insight","/insight","annoListCtrl","page/insight.html",!1,{pageTitle:"洞察"}),o("insightIndex","/insightIndex","annoListCtrl","page/insightIndex.html",!1,{pageTitle:"洞察详情"}),o("recruit","/recruit","annoListCtrl","page/recruit.html",!1,{pageTitle:"招聘"}),o("aboutUs","/aboutUs","annoListCtrl","page/aboutUs.html",!1,{pageTitle:"关于我们"}),o("office","/office","annoListCtrl","page/office.html",!1,{pageTitle:"办公室"}),o("legalProvision","/legalProvision","annoListCtrl","page/legalProvision.html",!1,{pageTitle:"法律条款"}),o("PrivacyProtection","/PrivacyProtection","annoListCtrl","page/PrivacyProtection.html",!1,{pageTitle:"隐私保护"}),o("cookie","/cookie","annoListCtrl","page/cookie.html",!1,{pageTitle:"cookie信息"}),o("disclaimer","/disclaimer","annoListCtrl","page/disclaimer.html",!1,{pageTitle:"无障碍声明"})}]),o.run(["$rootScope","$state","Notification",function(t,i,e){t.pageLoading=!0,t.$state=i,t.$Notification=e}]),i.exports=o},{}]},{},[3]);