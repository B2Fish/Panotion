!function(){function e(o,t,n){function a(l,r){if(!t[l]){if(!o[l]){var c="function"==typeof require&&require;if(!r&&c)return c(l,!0);if(i)return i(l,!0);var s=new Error("Cannot find module '"+l+"'");throw s.code="MODULE_NOT_FOUND",s}var d=t[l]={exports:{}};o[l][0].call(d.exports,function(e){return a(o[l][1][e]||e)},d,d.exports,e,o,t,n)}return t[l].exports}for(var i="function"==typeof require&&require,l=0;l<n.length;l++)a(n[l]);return a}return e}()({1:[function(e,o,t){"use strict";e(17).controller("PrivacyProtectionCtrl",["$rootScope","$scope",function(e,o){$(".pagination-menu").addClass("-theme-light"),$(".pagination-menu").removeClass("-theme-dark"),-1==location.href.indexOf("#reloaded")&&(location.href=location.href+"#reloaded",location.reload())}])},{17:17}],2:[function(e,o,t){"use strict";e(17).controller("abilityCtrl",["$rootScope","$scope",function(e,o){$(".pagination-menu").addClass("-theme-dark"),$(".pagination-menu").removeClass("-theme-light"),-1==location.href.indexOf("#reloaded")&&(location.href=location.href+"#reloaded",location.reload())}])},{17:17}],3:[function(e,o,t){"use strict";e(17).controller("abilityIndexCtrl",["$rootScope","$scope",function(e,o){$(".pagination-menu").addClass("-theme-light"),$(".pagination-menu").removeClass("-theme-dark"),-1==location.href.indexOf("#reloaded")&&(location.href=location.href+"#reloaded",location.reload())}])},{17:17}],4:[function(e,o,t){"use strict";function n(e,o,t){return o in e?Object.defineProperty(e,o,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[o]=t,e}e(17).controller("aboutCtrl",["$rootScope","$scope",function(e,o){$(".pagination-menu").addClass("-theme-light"),$(".pagination-menu").removeClass("-theme-dark"),-1==location.href.indexOf("#reloaded")&&(location.href=location.href+"#reloaded",location.reload()),$(document).ready(function(){setTimeout(function(){var e;new Swiper(".swiper-container",(e={autoplay:!0,loop:!0},n(e,"autoplay",{disableOnInteraction:!1}),n(e,"pagination",{el:".swiper-pagination",clickable:!0}),n(e,"navigation",{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"}),n(e,"observer",!0),n(e,"observeParents",!0),e))},100)})}])},{17:17}],5:[function(e,o,t){"use strict";e(17).controller("cookieCtrl",["$rootScope","$scope",function(e,o){$(".pagination-menu").addClass("-theme-light"),$(".pagination-menu").removeClass("-theme-dark"),-1==location.href.indexOf("#reloaded")&&(location.href=location.href+"#reloaded",location.reload())}])},{17:17}],6:[function(e,o,t){"use strict";e(17).controller("disclaimerCtrl",["$rootScope","$scope",function(e,o){$(".pagination-menu").addClass("-theme-light"),$(".pagination-menu").removeClass("-theme-dark"),-1==location.href.indexOf("#reloaded")&&(location.href=location.href+"#reloaded",location.reload())}])},{17:17}],7:[function(e,o,t){"use strict";e(17).controller("headerCtrl",["$rootScope","$scope","$state","$http",function(e,o,t,n){function a(){var e=$("div.sm-box1"),t=$("div.pc-box1"),n=$("ul.model-select-option",e),a=($("ul.model-select-option1",t),$("div.model-select-text",e));$("div.model-select-text",t),$("b.bg1",e),a.click(function(e){$("div.sm-box1").find($(".model-select-option1")).hide(),l%2==0?($("div.sm-box1").find($(".model-select-option")).show(),$(".sm-box1").find($("b")).addClass("bg2"),$(".sm-box1").find($("b")).removeClass("bg1")):($("div.sm-box1").find($(".model-select-option")).hide(),$(".sm-box1").find($("b")).removeClass("bg2"),$(".sm-box1").find($("b")).addClass("bg1")),l++}),o.smallsearch=function(){return""!==o.allValue.searchValue&&$(".sm-box1").find($(".model-select-option1")).show(),$("div.sm-box1").find($(".model-select-option")).hide(),!1},o.smboxselect=function(){$(".sm-box1").find($(".model-select-option")).hide(),$(".sm-box1").find($("b")).removeClass("bg2"),$(".sm-box1").find($("b")).addClass("bg1")},o.smboxselect1=function(){$(".sm-box1").find($(".model-select-option1")).hide(),o.allValue.searchValue=""},n.find("li").each(function(e,o){$(this).hasClass("selected")&&$(this).parent(".model-select-option").siblings(".model-select-text").text($(this).text()),$(this).mousedown(function(){return $(this).parent().siblings("div.model-select-text").text($(this).text()).attr("value",$(this).attr("data-option")),n.slideUp(100,function(){}),$(this).addClass("selected").siblings("li").removeClass("selected"),!1}),$(this).on("mouseover",function(){$(this).addClass("selected").siblings("li").removeClass("selected")})}),$(document).click(function(e){})}var i,l=0;o.nowTime=(new Date).getTime(),o.isMenu=!1,o.selected=1,o.topbarpc=!1,o.allValue={searchValue:""},o.goIndex=function(){t.go("index")},o.menuClick=function(){o.isMenu=!0,$(".pagination-menu").addClass(" _menu-open"),$("body").addClass("fp-viewing-0 _fixed"),a(),n({method:"GET",url:"api/PantionOfficeWeb/GetLeftMenuData",params:{languageid:i}}).then(function(e){1===angular.lowercase(e.data.result)&&(o.languageMenu=e.data.data)})},o.ismenuClick=function(){o.isMenu=!1,$(".pagination-menu").removeClass(" _menu-open"),$("body").removeClass("fp-viewing-0 _fixed"),$("body").addClass("fp-viewing-0")},o.switchList=function(e){o.selected=e},o.togglelaug=function(){$(".language").animate({right:"+=300px"}),$(".language-cover").show(),$("body").addClass("fp-viewing-0 _fixed")},n({method:"GET",url:"api/PantionOfficeWeb/GetLanguageList",params:{}}).then(function(t){1===angular.lowercase(t.data.result)&&(o.languageList=t.data.data,o.languageCode=t.data.data[0].simplename,i=o.languageList[0].languageid,e.$broadcast("parent",{languageid:i}))}),o.selecteds=0,o.switchLists=function(t,n){o.selecteds=t,o.languageCode=n.simplename,i=n.languageid,e.$broadcast("parent",{languageid:n.languageid})},o.backlang=function(){$(".language").animate({right:"-=300px"}),$(".language-cover").hide(),$("body").removeClass("fp-viewing-0 _fixed")},o.togglesearch=function(){l=0,o.topbarpc=!0,$(".top-bar-pc .search-nav").animate({top:"+=110px"}),$(".language-cover").show()},o.SearchClose=function(){o.topbarpc=!1,$(".top-bar-pc .search-nav").animate({top:"-=110px"}),$(".show-ul").fadeOut(500),o.allValue.searchValue="",$(".language-cover").hide()},o.searchUl=function(){$("div.pc-box1").find($(".model-select-option")).hide(),""!==o.allValue.searchValue&&$(".show-ul").fadeIn(500)},o.offsearchUl=function(){$(".show-ul").fadeOut(500)},o.pcboxselect=function(){$(".show-ul").fadeOut(500),l%2==0?($("div.pc-box1").find($(".model-select-option")).fadeIn(500),$(".pc-box1").find($("b")).addClass("bg2"),$(".pc-box1").find($("b")).removeClass("bg1")):($("div.pc-box1").find($(".model-select-option")).fadeOut(500),$(".pc-box1").find($("b")).removeClass("bg2"),$(".pc-box1").find($("b")).addClass("bg1")),l++},o.offselect=function(){l=0,$("div.pc-box1").find($(".model-select-option")).fadeOut(500)}}])},{17:17}],8:[function(e,o,t){"use strict";e(17).controller("indexCtrl",["$rootScope","$scope","$state","$http",function(e,o,t,n){function a(){n({method:"GET",url:"api/PantionOfficeWeb/GetIndexData",params:{languageid:i}}).then(function(e){1===angular.lowercase(e.data.result)&&(o.indexList=e.data.data)})}$(document).ready(function(){function e(e,o){var t=document.createElement("script");t.type="text/javascript",t.src=e,document.getElementById("head").appendChild(t),t.readyState?t.onreadystatechange=function(){"loaded"!=t.readyState&&"complete"!=t.readyState||(t.onreadystatechange=null,o())}:t.onload=function(){o()}}e("./libs/pantion/gsap.js",function(){e("./libs/pantion/sectionscroll.js",function(){e("./libs/pantion/shared.js",function(){e("./libs/pantion/app.js",function(){e("./libs/pantion/fullpage.js",function(){e("./libs/pantion/runtime.js",function(){})})})})})})});var i;o.$on("parent",function(e,o){i=o.languageid,a()}),a(),o.marketUrl=function(){t.go("marketIndex")},o.abilityUrl=function(){t.go("abilityIndex")},o.insightUrl=function(){t.go("insightIndex")},o.recruitUrl=function(){t.go("recruit")},o.officeUrl=function(){t.go("office")}}])},{17:17}],9:[function(e,o,t){"use strict";e(17).controller("insightCtrl",["$rootScope","$scope",function(e,o){-1==location.href.indexOf("#reloaded")&&(location.href=location.href+"#reloaded",location.reload())}])},{17:17}],10:[function(e,o,t){"use strict";e(17).controller("insightIndexCtrl",["$rootScope","$scope",function(e,o){-1==location.href.indexOf("#reloaded")&&(location.href=location.href+"#reloaded",location.reload())}])},{17:17}],11:[function(e,o,t){"use strict";e(17).controller("legalProvisionCtrl",["$rootScope","$scope",function(e,o){$(".pagination-menu").addClass("-theme-light"),$(".pagination-menu").removeClass("-theme-dark"),-1==location.href.indexOf("#reloaded")&&(location.href=location.href+"#reloaded",location.reload())}])},{17:17}],12:[function(e,o,t){"use strict";e(17).controller("marketCtrl",["$rootScope","$scope",function(e,o){-1==location.href.indexOf("#reloaded")&&(location.href=location.href+"#reloaded",location.reload())}])},{17:17}],13:[function(e,o,t){"use strict";e(17).controller("marketIndexCtrl",["$rootScope","$scope",function(e,o){-1==location.href.indexOf("#reloaded")&&(location.href=location.href+"#reloaded",location.reload())}])},{17:17}],14:[function(e,o,t){"use strict";e(17).controller("officeCtrl",["$rootScope","$scope",function(e,o){$(".pagination-menu").addClass("-theme-light"),$(".pagination-menu").removeClass("-theme-dark")}])},{17:17}],15:[function(e,o,t){"use strict";e(17).controller("recruitCtrl",["$rootScope","$scope",function(e,o){-1==location.href.indexOf("#reloaded")&&(location.href=location.href+"#reloaded",location.reload())}])},{17:17}],16:[function(e,o,t){"use strict";e(2),e(3),e(4),e(5),e(6),e(7),e(8),e(9),e(10),e(11),e(12),e(13),e(14),e(1),e(15)},{1:1,10:10,11:11,12:12,13:13,14:14,15:15,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9}],17:[function(e,o,t){"use strict";var n=angular.module("PortalApp",["ui.router","ui-notification","oc.lazyLoad"]);n.config(["$stateProvider","$locationProvider","NotificationProvider",function(e,o,t){function n(o,t,n,a,i,l,r,c){var s={};t&&(s.url=t),n&&(s.controller=n),a&&(s.templateUrl=a),s.abstract=i,l&&(l.bgGrey=!l.bgWhite,s.reload=l.reload,s.cache=l.cache,s.data=l),r&&(s.views=r),c&&(s.resolve=c),e.state(o,s)}t.setOptions({delay:3e3,startTop:33,startRight:10,verticalSpacing:20,horizontalSpacing:20,positionX:"center",positionY:"top",templateUrl:"portal-notification.html"}),o.html5Mode(!0),n("index","/","indexCtrl","page/home.html",!1,{pageTitle:"首页",reload:!0,cache:!1}),n("market","/market","marketCtrl","page/market.html",!1,{pageTitle:"行业详情",reload:!0,cache:!1}),n("marketIndex","/marketIndex","marketIndexCtrl","page/marketIndex.html",!1,{pageTitle:"行业",reload:!0,cache:!1}),n("abilityIndex","/abilityIndex","abilityIndexCtrl","page/abilityIndex.html",!1,{pageTitle:"能力",reload:!0,cache:!1}),n("ability","/ability","abilityCtrl","page/ability.html",!1,{pageTitle:"能力详情",reload:!0,cache:!1}),n("insight","/insight","insightCtrl","page/insight.html",!1,{pageTitle:"洞察详情",reload:!0,cache:!1}),n("insightIndex","/insightIndex","insightIndexCtrl","page/insightIndex.html",!1,{pageTitle:"洞察",reload:!0,cache:!1}),n("recruit","/recruit","recruitCtrl","page/recruit.html",!1,{pageTitle:"招聘",reload:!0,cache:!1}),n("aboutUs","/aboutUs","aboutCtrl","page/aboutUs.html",!1,{pageTitle:"关于我们",reload:!0,cache:!1},null,{deps:["$ocLazyLoad",function(e){e.load(["./libs/swiper/swiper.min.js"])}]}),n("office","/office","officeCtrl","page/office.html",!1,{pageTitle:"办公室",reload:!0,cache:!1}),n("legalProvision","/legalProvision","legalProvisionCtrl","page/legalProvision.html",!1,{pageTitle:"法律条款",reload:!0,cache:!1}),n("PrivacyProtection","/PrivacyProtection","PrivacyProtectionCtrl","page/PrivacyProtection.html",!1,{pageTitle:"隐私保护",reload:!0,cache:!1}),n("cookie","/cookie","cookieCtrl","page/cookie.html",!1,{pageTitle:"cookie信息",reload:!0,cache:!1}),n("disclaimer","/disclaimer","disclaimerCtrl","page/disclaimer.html",!1,{pageTitle:"无障碍声明",reload:!0,cache:!1})}]),n.run(["$rootScope","$state","Notification",function(e,o,t){e.pageLoading=!0,e.$state=o,e.$Notification=t,e.$on("$stateChangeSuccess",function(e,o,t,n,a){})}]),o.exports=n},{}]},{},[16]);