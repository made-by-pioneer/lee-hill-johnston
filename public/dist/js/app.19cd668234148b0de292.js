!function(t){var e={};function n(i){if(e[i])return e[i].exports;var o=e[i]={i:i,l:!1,exports:{}};return t[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(i,o,function(e){return t[e]}.bind(null,o));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var i,o=n(1),r=((i=o)&&i.__esModule,n(4));var a=document.querySelector(".mobile-menu-button"),u=document.querySelector(".mobile-menu"),l=document.querySelector("body");if(a.onclick=function(){u.classList.toggle("mobile-menu-toggle"),u.classList.toggle("overflow-scroll"),l.classList.toggle("overflow-hidden")},document.querySelector(".close-menu").onclick=function(){u.classList.toggle("mobile-menu-toggle"),u.classList.toggle("overflow-scroll"),l.classList.toggle("overflow-hidden")},null!==document.getElementById("services-slider-items")){var s=(0,r.tns)({mode:"carousel",container:"#services-slider-items",items:1,controlsContainer:"#services-slider-controls",nav:!0,navPosition:"bottom",loop:!1,startIndex:1,touch:!1,speed:400,edgePadding:0,center:!0,mouseDrag:!1,arrowKeys:!1,responsive:{768:{edgePadding:150},1200:{edgePadding:294}}});window.onload=function(){var t=s.getInfo(),e=t.displayIndex;t.slideItems[e-1].classList.add("highlight"),console.log(t.displayIndex)},document.querySelector(".next-button").onclick=function(){var t=s.getInfo(),e=t.displayIndex;t.slideItems[e].classList.add("highlight"),t.slideItems[e-1].classList.remove("highlight"),console.log(t.displayIndex)},document.querySelector(".previous-button").onclick=function(){var t=s.getInfo(),e=t.displayIndex;t.slideItems[e-2].classList.add("highlight"),t.slideItems[e-1].classList.remove("highlight"),console.log(t.displayIndex)}}},function(t,e){},function(t,e){Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e})},function(t,e){"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})},function(t,e,n){"use strict";n.r(e);n(2),n(3);var i=window,o=i.requestAnimationFrame||i.webkitRequestAnimationFrame||i.mozRequestAnimationFrame||i.msRequestAnimationFrame||function(t){return setTimeout(t,16)},r=window,a=r.cancelAnimationFrame||r.mozCancelAnimationFrame||function(t){clearTimeout(t)};function u(){for(var t,e,n,i=arguments[0]||{},o=1,r=arguments.length;o<r;o++)if(null!==(t=arguments[o]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function l(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function s(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function c(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var f=document.documentElement;function d(t){var e="";return t.fake&&(e=f.style.overflow,t.style.background="",t.style.overflow=f.style.overflow="hidden",f.appendChild(t)),e}function v(t,e){t.fake&&(t.remove(),f.style.overflow=e,f.offsetHeight)}function p(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function m(t){return("insertRule"in t?t.cssRules:t.rules).length}function h(t,e,n){for(var i=0,o=t.length;i<o;i++)e.call(n,t[i],i)}var g="classList"in document.createElement("_"),y=g?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},x=g?function(t,e){y(t,e)||t.classList.add(e)}:function(t,e){y(t,e)||(t.className+=" "+e)},b=g?function(t,e){y(t,e)&&t.classList.remove(e)}:function(t,e){y(t,e)&&(t.className=t.className.replace(e,""))};function w(t,e){return t.hasAttribute(e)}function C(t,e){return t.getAttribute(e)}function M(t){return void 0!==t.item}function T(t,e){if(t=M(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function E(t,e){t=M(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var o=n;o--;)t[i].removeAttribute(e[o])}function L(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function S(t,e){"none"!==t.style.display&&(t.style.display="none")}function A(t,e){"none"===t.style.display&&(t.style.display="")}function I(t){return"none"!==window.getComputedStyle(t).display}function N(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach(function(i){"ms"===i&&"transform"!==t||e.push(i+n)}),t=e}for(var i=document.createElement("fakeelement"),o=(t.length,0);o<t.length;o++){var r=t[o];if(void 0!==i.style[r])return r}return!1}function B(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var O=!1;try{var P=Object.defineProperty({},"passive",{get:function(){O=!0}});window.addEventListener("test",null,P)}catch(t){}var k=!!O&&{passive:!0};function D(t,e,n){for(var i in e){var o=["touchstart","touchmove"].indexOf(i)>=0&&!n&&k;t.addEventListener(i,e[i],o)}}function H(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&k;t.removeEventListener(n,e[n],i)}}function R(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach(function(n){n(e,t)})}}}n.d(e,"tns",function(){return z});var z=function(t){t=u({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0},t||{});var e=document,n=window,i={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},r={},f=t.useLocalStorage;if(f){var g=navigator.userAgent,M=new Date;try{(r=n.localStorage)?(r.setItem(M,M),f=r.getItem(M)==M,r.removeItem(M)):f=!1,f||(r={})}catch(t){f=!1}f&&(r.tnsApp&&r.tnsApp!==g&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){r.removeItem(t)}),localStorage.tnsApp=g)}var O=r.tC?l(r.tC):s(r,"tC",function(){var t=document,e=c(),n=d(e),i=t.createElement("div"),o=!1;e.appendChild(i);try{for(var r,a="(10px * 10)",u=["calc"+a,"-moz-calc"+a,"-webkit-calc"+a],l=0;l<3;l++)if(r=u[l],i.style.width=r,100===i.offsetWidth){o=r.replace(a,"");break}}catch(t){}return e.fake?v(e,n):i.remove(),o}(),f),P=r.tPL?l(r.tPL):s(r,"tPL",function(){var t,e=document,n=c(),i=d(n),o=e.createElement("div"),r=e.createElement("div"),a="";o.className="tns-t-subp2",r.className="tns-t-ct";for(var u=0;u<70;u++)a+="<div></div>";return r.innerHTML=a,o.appendChild(r),n.appendChild(o),t=Math.abs(o.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?v(n,i):o.remove(),t}(),f),k=r.tMQ?l(r.tMQ):s(r,"tMQ",function(){var t,e=document,n=c(),i=d(n),o=e.createElement("div"),r=e.createElement("style"),a="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return r.type="text/css",o.className="tns-mq-test",n.appendChild(r),n.appendChild(o),r.styleSheet?r.styleSheet.cssText=a:r.appendChild(e.createTextNode(a)),t=window.getComputedStyle?window.getComputedStyle(o).position:o.currentStyle.position,n.fake?v(n,i):o.remove(),"absolute"===t}(),f),W=r.tTf?l(r.tTf):s(r,"tTf",N("transform"),f),q=r.t3D?l(r.t3D):s(r,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=c(),o=d(i),r=n.createElement("p"),a=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return a+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(a),i.fake?v(i,o):r.remove(),void 0!==e&&e.length>0&&"none"!==e}(W),f),j=r.tTDu?l(r.tTDu):s(r,"tTDu",N("transitionDuration"),f),F=r.tTDe?l(r.tTDe):s(r,"tTDe",N("transitionDelay"),f),_=r.tADu?l(r.tADu):s(r,"tADu",N("animationDuration"),f),V=r.tADe?l(r.tADe):s(r,"tADe",N("animationDelay"),f),G=r.tTE?l(r.tTE):s(r,"tTE",B(j,"Transition"),f),K=r.tAE?l(r.tAE):s(r,"tAE",B(_,"Animation"),f),Q=n.console&&"function"==typeof n.console.warn,X=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],Y={};if(X.forEach(function(n){if("string"==typeof t[n]){var i=t[n],o=e.querySelector(i);if(Y[n]=i,!o||!o.nodeName)return void(Q&&console.warn("Can't find",t[n]));t[n]=o}}),!(t.container.children.length<1)){var J=t.responsive,U=t.nested,Z="carousel"===t.mode;if(J){0 in J&&(t=u(t,J[0]),delete J[0]);var $={};for(var tt in J){var et=J[tt];et="number"==typeof et?{items:et}:et,$[tt]=et}J=$,$=null}if(Z||function t(e){for(var n in e)Z||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(t),!Z){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var nt=t.animateIn,it=t.animateOut,ot=t.animateDelay,rt=t.animateNormal}var at,ut,lt="horizontal"===t.axis,st=e.createElement("div"),ct=e.createElement("div"),ft=t.container,dt=ft.parentNode,vt=ft.outerHTML,pt=ft.children,mt=pt.length,ht=Nn(),gt=!1;J&&Jn(),Z&&(ft.className+=" tns-vpfix");var yt,xt,bt,wt,Ct,Mt,Tt,Et,Lt=t.autoWidth,St=kn("fixedWidth"),At=kn("edgePadding"),It=kn("gutter"),Nt=On(),Bt=kn("center"),Ot=Lt?1:Math.floor(kn("items")),Pt=kn("slideBy"),kt=t.viewportMax||t.fixedWidthViewportWidth,Dt=kn("arrowKeys"),Ht=kn("speed"),Rt=t.rewind,zt=!Rt&&t.loop,Wt=kn("autoHeight"),qt=kn("controls"),jt=kn("controlsText"),Ft=kn("nav"),_t=kn("touch"),Vt=kn("mouseDrag"),Gt=kn("autoplay"),Kt=kn("autoplayTimeout"),Qt=kn("autoplayText"),Xt=kn("autoplayHoverPause"),Yt=kn("autoplayResetOnVisibility"),Jt=(Et=document.createElement("style"),Tt&&Et.setAttribute("media",Tt),document.querySelector("head").appendChild(Et),Et.sheet?Et.sheet:Et.styleSheet),Ut=t.lazyload,Zt=(t.lazyloadSelector,[]),$t=zt?(Ct=function(){if(Lt||St&&!kt)return mt-1;var e=St?"fixedWidth":"items",n=[];if((St||t[e]<mt)&&n.push(t[e]),J)for(var i in J){var o=J[i][e];o&&(St||o<mt)&&n.push(o)}return n.length||n.push(0),Math.ceil(St?kt/Math.min.apply(null,n):Math.max.apply(null,n))}(),Mt=Z?Math.ceil((5*Ct-mt)/2):4*Ct-mt,Mt=Math.max(Ct,Mt),Pn("edgePadding")?Mt+1:Mt):0,te=Z?mt+2*$t:mt+$t,ee=!(!St&&!Lt||zt),ne=St?Mi():null,ie=!Z||!zt,oe=lt?"left":"top",re="",ae="",ue=St?function(){return Bt&&!zt?mt-1:Math.ceil(-ne/(St+It))}:Lt?function(){for(var t=te;t--;)if(yt[t]>=-ne)return t}:function(){return Bt&&Z&&!zt?mt-1:zt||Z?Math.max(0,te-Math.ceil(Ot)):te-1},le=Sn(kn("startIndex")),se=le,ce=(Ln(),0),fe=Lt?null:ue(),de=t.preventActionWhenRunning,ve=t.swipeAngle,pe=!ve||"?",me=!1,he=t.onInit,ge=new R,ye=" tns-slider tns-"+t.mode,xe=ft.id||(wt=window.tnsId,window.tnsId=wt?wt+1:1,"tns"+window.tnsId),be=kn("disable"),we=!1,Ce=t.freezable,Me=!(!Ce||Lt)&&Yn(),Te=!1,Ee={click:Oi,keydown:function(t){t=qi(t);var e=[i.LEFT,i.RIGHT].indexOf(t.keyCode);e>=0&&(0===e?Ke.disabled||Oi(t,-1):Qe.disabled||Oi(t,1))}},Le={click:function(t){if(me){if(de)return;Ni()}var e=ji(t=qi(t));for(;e!==Ue&&!w(e,"data-nav");)e=e.parentNode;if(w(e,"data-nav")){var n=en=Number(C(e,"data-nav")),i=St||Lt?n*mt/$e:n*Ot,o=ke?n:Math.min(Math.ceil(i),mt-1);Bi(o,t),nn===n&&(sn&&Ri(),en=-1)}},keydown:function(t){t=qi(t);var n=e.activeElement;if(!w(n,"data-nav"))return;var o=[i.LEFT,i.RIGHT,i.ENTER,i.SPACE].indexOf(t.keyCode),r=Number(C(n,"data-nav"));o>=0&&(0===o?r>0&&Wi(Je[r-1]):1===o?r<$e-1&&Wi(Je[r+1]):(en=r,Bi(r,t)))}},Se={mouseover:function(){sn&&(ki(),cn=!0)},mouseout:function(){cn&&(Pi(),cn=!1)}},Ae={visibilitychange:function(){e.hidden?sn&&(ki(),dn=!0):dn&&(Pi(),dn=!1)}},Ie={keydown:function(t){t=qi(t);var e=[i.LEFT,i.RIGHT].indexOf(t.keyCode);e>=0&&Oi(t,0===e?-1:1)}},Ne={touchstart:Gi,touchmove:Ki,touchend:Qi,touchcancel:Qi},Be={mousedown:Gi,mousemove:Ki,mouseup:Qi,mouseleave:Qi},Oe=Pn("controls"),Pe=Pn("nav"),ke=!!Lt||t.navAsThumbnails,De=Pn("autoplay"),He=Pn("touch"),Re=Pn("mouseDrag"),ze="tns-slide-active",We="tns-complete",qe={load:function(t){ri(ji(t))},error:function(t){e=ji(t),x(e,"failed"),ai(e);var e}},je="force"===t.preventScrollOnTouch;if(Oe)var Fe,_e,Ve=t.controlsContainer,Ge=t.controlsContainer?t.controlsContainer.outerHTML:"",Ke=t.prevButton,Qe=t.nextButton,Xe=t.prevButton?t.prevButton.outerHTML:"",Ye=t.nextButton?t.nextButton.outerHTML:"";if(Pe)var Je,Ue=t.navContainer,Ze=t.navContainer?t.navContainer.outerHTML:"",$e=Lt?mt:Yi(),tn=0,en=-1,nn=In(),on=nn,rn="tns-nav-active",an="Carousel Page ",un=" (Current Slide)";if(De)var ln,sn,cn,fn,dn,vn="forward"===t.autoplayDirection?1:-1,pn=t.autoplayButton,mn=t.autoplayButton?t.autoplayButton.outerHTML:"",hn=["<span class='tns-visually-hidden'>"," animation</span>"];if(He||Re)var gn,yn,xn={},bn={},wn=!1,Cn=lt?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};Lt||En(be||Me),W&&(oe=W,re="translate",q?(re+=lt?"3d(":"3d(0px, ",ae=lt?", 0px, 0px)":", 0px)"):(re+=lt?"X(":"Y(",ae=")")),Z&&(ft.className=ft.className.replace("tns-vpfix","")),function(){Pn("gutter");st.className="tns-outer",ct.className="tns-inner",st.id=xe+"-ow",ct.id=xe+"-iw",""===ft.id&&(ft.id=xe);ye+=P||Lt?" tns-subpixel":" tns-no-subpixel",ye+=O?" tns-calc":" tns-no-calc",Lt&&(ye+=" tns-autowidth");ye+=" tns-"+t.axis,ft.className+=ye,Z?((at=e.createElement("div")).id=xe+"-mw",at.className="tns-ovh",st.appendChild(at),at.appendChild(ct)):st.appendChild(ct);if(Wt){var n=at||ct;n.className+=" tns-ah"}if(dt.insertBefore(st,ft),ct.appendChild(ft),h(pt,function(t,e){x(t,"tns-item"),t.id||(t.id=xe+"-item"+e),!Z&&rt&&x(t,rt),T(t,{"aria-hidden":"true",tabindex:"-1"})}),$t){for(var i=e.createDocumentFragment(),o=e.createDocumentFragment(),r=$t;r--;){var a=r%mt,u=pt[a].cloneNode(!0);if(E(u,"id"),o.insertBefore(u,o.firstChild),Z){var l=pt[mt-1-a].cloneNode(!0);E(l,"id"),i.appendChild(l)}}ft.insertBefore(i,ft.firstChild),ft.appendChild(o),pt=ft.children}}(),function(){if(!Z)for(var e=le,i=le+Math.min(mt,Ot);e<i;e++){var o=pt[e];o.style.left=100*(e-le)/Ot+"%",x(o,nt),b(o,rt)}lt&&(P||Lt?(p(Jt,"#"+xe+" > .tns-item","font-size:"+n.getComputedStyle(pt[0]).fontSize+";",m(Jt)),p(Jt,"#"+xe,"font-size:0;",m(Jt))):Z&&h(pt,function(t,e){t.style.marginLeft=function(t){return O?O+"("+100*t+"% / "+te+")":100*t/te+"%"}(e)}));if(k){if(j){var r=at&&t.autoHeight?qn(t.speed):"";p(Jt,"#"+xe+"-mw",r,m(Jt))}r=Dn(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),p(Jt,"#"+xe+"-iw",r,m(Jt)),Z&&(r=lt&&!Lt?"width:"+Hn(t.fixedWidth,t.gutter,t.items)+";":"",j&&(r+=qn(Ht)),p(Jt,"#"+xe,r,m(Jt))),r=lt&&!Lt?Rn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(r+=zn(t.gutter)),Z||(j&&(r+=qn(Ht)),_&&(r+=jn(Ht))),r&&p(Jt,"#"+xe+" > .tns-item",r,m(Jt))}else{fi(),ct.style.cssText=Dn(At,It,St,Wt),Z&&lt&&!Lt&&(ft.style.width=Hn(St,It,Ot));var r=lt&&!Lt?Rn(St,It,Ot):"";It&&(r+=zn(It)),r&&p(Jt,"#"+xe+" > .tns-item",r,m(Jt))}if(J&&k)for(var a in J){a=parseInt(a);var u=J[a],r="",l="",s="",c="",f="",d=Lt?null:kn("items",a),v=kn("fixedWidth",a),g=kn("speed",a),y=kn("edgePadding",a),w=kn("autoHeight",a),C=kn("gutter",a);j&&at&&kn("autoHeight",a)&&"speed"in u&&(l="#"+xe+"-mw{"+qn(g)+"}"),("edgePadding"in u||"gutter"in u)&&(s="#"+xe+"-iw{"+Dn(y,C,v,g,w)+"}"),Z&&lt&&!Lt&&("fixedWidth"in u||"items"in u||St&&"gutter"in u)&&(c="width:"+Hn(v,C,d)+";"),j&&"speed"in u&&(c+=qn(g)),c&&(c="#"+xe+"{"+c+"}"),("fixedWidth"in u||St&&"gutter"in u||!Z&&"items"in u)&&(f+=Rn(v,C,d)),"gutter"in u&&(f+=zn(C)),!Z&&"speed"in u&&(j&&(f+=qn(g)),_&&(f+=jn(g))),f&&(f="#"+xe+" > .tns-item{"+f+"}"),(r=l+s+c+f)&&Jt.insertRule("@media (min-width: "+a/16+"em) {"+r+"}",Jt.cssRules.length)}}(),Fn();var Mn=zt?Z?function(){var t=ce,e=fe;t+=Pt,e-=Pt,At?(t+=1,e-=1):St&&(Nt+It)%(St+It)&&(e-=1),$t&&(le>e?le-=mt:le<t&&(le+=mt))}:function(){if(le>fe)for(;le>=ce+mt;)le-=mt;else if(le<ce)for(;le<=fe-mt;)le+=mt}:function(){le=Math.max(ce,Math.min(fe,le))},Tn=Z?function(){var t,e,n,i,o,r,a,u,l,s,c;wi(ft,""),j||!Ht?(Li(),Ht&&I(ft)||Ni()):(t=ft,e=oe,n=re,i=ae,o=Ti(),r=Ht,a=Ni,u=Math.min(r,10),l=o.indexOf("%")>=0?"%":"px",o=o.replace(l,""),s=Number(t.style[e].replace(n,"").replace(i,"").replace(l,"")),c=(o-s)/r*u,setTimeout(function o(){r-=u,s+=c,t.style[e]=n+s+l+i,r>0?setTimeout(o,u):a()},u)),lt||Xi()}:function(){Zt=[];var t={};t[G]=t[K]=Ni,H(pt[se],t),D(pt[le],t),Si(se,nt,it,!0),Si(le,rt,nt),G&&K&&Ht&&I(ft)||Ni()};return{version:"2.9.2",getInfo:Ui,events:ge,goTo:Bi,play:function(){Gt&&!sn&&(Hi(),fn=!1)},pause:function(){sn&&(Ri(),fn=!0)},isOn:gt,updateSliderHeight:vi,refresh:Fn,destroy:function(){if(Jt.disabled=!0,Jt.ownerNode&&Jt.ownerNode.remove(),H(n,{resize:Qn}),Dt&&H(e,Ie),Ve&&H(Ve,Ee),Ue&&H(Ue,Le),H(ft,Se),H(ft,Ae),pn&&H(pn,{click:zi}),Gt&&clearInterval(ln),Z&&G){var i={};i[G]=Ni,H(ft,i)}_t&&H(ft,Ne),Vt&&H(ft,Be);var o=[vt,Ge,Xe,Ye,Ze,mn];for(var r in X.forEach(function(e,n){var i="container"===e?st:t[e];if("object"==typeof i){var r=!!i.previousElementSibling&&i.previousElementSibling,a=i.parentNode;i.outerHTML=o[n],t[e]=r?r.nextElementSibling:a.firstElementChild}}),X=nt=it=ot=rt=lt=st=ct=ft=dt=vt=pt=mt=ut=ht=Lt=St=At=It=Nt=Ot=Pt=kt=Dt=Ht=Rt=zt=Wt=Jt=Ut=yt=Zt=$t=te=ee=ne=ie=oe=re=ae=ue=le=se=ce=fe=ve=pe=me=he=ge=ye=xe=be=we=Ce=Me=Te=Ee=Le=Se=Ae=Ie=Ne=Be=Oe=Pe=ke=De=He=Re=ze=We=qe=xt=qt=jt=Ve=Ge=Ke=Qe=Fe=_e=Ft=Ue=Ze=Je=$e=tn=en=nn=on=rn=an=un=Gt=Kt=vn=Qt=Xt=pn=mn=Yt=hn=ln=sn=cn=fn=dn=xn=bn=gn=wn=yn=Cn=_t=Vt=null,this)"rebuild"!==r&&(this[r]=null);gt=!1},rebuild:function(){return z(u(t,Y))}}}function En(t){t&&(qt=Ft=_t=Vt=Dt=Gt=Xt=Yt=!1)}function Ln(){for(var t=Z?le-$t:le;t<0;)t+=mt;return t%mt+1}function Sn(t){return t=t?Math.max(0,Math.min(zt?mt-1:mt-Ot,t)):0,Z?t+$t:t}function An(t){for(null==t&&(t=le),Z&&(t-=$t);t<0;)t+=mt;return Math.floor(t%mt)}function In(){var t,e=An();return t=ke?e:St||Lt?Math.ceil((e+1)*$e/mt-1):Math.floor(e/Ot),!zt&&Z&&le===fe&&(t=$e-1),t}function Nn(){return n.innerWidth||e.documentElement.clientWidth||e.body.clientWidth}function Bn(t){return"top"===t?"afterbegin":"beforeend"}function On(){var t=At?2*At-It:0;return function t(n){var i,o,r=e.createElement("div");return n.appendChild(r),o=(i=r.getBoundingClientRect()).right-i.left,r.remove(),o||t(n.parentNode)}(dt)-t}function Pn(e){if(t[e])return!0;if(J)for(var n in J)if(J[n][e])return!0;return!1}function kn(e,n){if(null==n&&(n=ht),"items"===e&&St)return Math.floor((Nt+It)/(St+It))||1;var i=t[e];if(J)for(var o in J)n>=parseInt(o)&&e in J[o]&&(i=J[o][e]);return"slideBy"===e&&"page"===i&&(i=kn("items")),Z||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function Dn(t,e,n,i,o){var r="";if(void 0!==t){var a=t;e&&(a-=e),r=lt?"margin: 0 "+a+"px 0 "+t+"px;":"margin: "+t+"px 0 "+a+"px 0;"}else if(e&&!n){var u="-"+e+"px";r="margin: 0 "+(lt?u+" 0 0":"0 "+u+" 0")+";"}return!Z&&o&&j&&i&&(r+=qn(i)),r}function Hn(t,e,n){return t?(t+e)*te+"px":O?O+"("+100*te+"% / "+n+")":100*te/n+"%"}function Rn(t,e,n){var i;if(t)i=t+e+"px";else{Z||(n=Math.floor(n));var o=Z?te:n;i=O?O+"(100% / "+o+")":100/o+"%"}return i="width:"+i,"inner"!==U?i+";":i+" !important;"}function zn(t){var e="";!1!==t&&(e=(lt?"padding-":"margin-")+(lt?"right":"bottom")+": "+t+"px;");return e}function Wn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function qn(t){return Wn(j,18)+"transition-duration:"+t/1e3+"s;"}function jn(t){return Wn(_,17)+"animation-duration:"+t/1e3+"s;"}function Fn(){if(Pn("autoHeight")||Lt||!lt){var t=ft.querySelectorAll("img");h(t,function(t){var e=t.src;e&&e.indexOf("data:image")<0?(D(t,qe),t.src="",t.src=e,x(t,"loading")):Ut||ri(t)}),o(function(){si(L(t),function(){xt=!0})}),!Lt&&lt&&(t=ui(le,Math.min(le+Ot-1,te-1))),Ut?_n():o(function(){si(L(t),_n)})}else Z&&Ei(),Gn(),Kn()}function _n(){if(Lt){var t=zt?le:mt-1;!function e(){pt[t-1].getBoundingClientRect().right.toFixed(2)===pt[t].getBoundingClientRect().left.toFixed(2)?Vn():setTimeout(function(){e()},16)}()}else Vn()}function Vn(){lt&&!Lt||(pi(),Lt?(ne=Mi(),Ce&&(Me=Yn()),fe=ue(),En(be||Me)):Xi()),Z&&Ei(),Gn(),Kn()}function Gn(){if(mi(),st.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+ni()+"</span>  of "+mt+"</div>"),bt=st.querySelector(".tns-liveregion .current"),De){var e=Gt?"stop":"start";pn?T(pn,{"data-action":e}):t.autoplayButtonOutput&&(st.insertAdjacentHTML(Bn(t.autoplayPosition),'<button data-action="'+e+'">'+hn[0]+e+hn[1]+Qt[0]+"</button>"),pn=st.querySelector("[data-action]")),pn&&D(pn,{click:zi}),Gt&&(Hi(),Xt&&D(ft,Se),Yt&&D(ft,Ae))}if(Pe){if(Ue)T(Ue,{"aria-label":"Carousel Pagination"}),h(Je=Ue.children,function(t,e){T(t,{"data-nav":e,tabindex:"-1","aria-label":an+(e+1),"aria-controls":xe})});else{for(var n="",i=ke?"":'style="display:none"',o=0;o<mt;o++)n+='<button data-nav="'+o+'" tabindex="-1" aria-controls="'+xe+'" '+i+' aria-label="'+an+(o+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",st.insertAdjacentHTML(Bn(t.navPosition),n),Ue=st.querySelector(".tns-nav"),Je=Ue.children}if(Ji(),j){var r=j.substring(0,j.length-18).toLowerCase(),a="transition: all "+Ht/1e3+"s";r&&(a="-"+r+"-"+a),p(Jt,"[aria-controls^="+xe+"-item]",a,m(Jt))}T(Je[nn],{"aria-label":an+(nn+1)+un}),E(Je[nn],"tabindex"),x(Je[nn],rn),D(Ue,Le)}Oe&&(Ve||Ke&&Qe||(st.insertAdjacentHTML(Bn(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+xe+'">'+jt[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+xe+'">'+jt[1]+"</button></div>"),Ve=st.querySelector(".tns-controls")),Ke&&Qe||(Ke=Ve.children[0],Qe=Ve.children[1]),t.controlsContainer&&T(Ve,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&T([Ke,Qe],{"aria-controls":xe,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(T(Ke,{"data-controls":"prev"}),T(Qe,{"data-controls":"next"})),Fe=gi(Ke),_e=gi(Qe),bi(),Ve?D(Ve,Ee):(D(Ke,Ee),D(Qe,Ee))),Un()}function Kn(){if(Z&&G){var i={};i[G]=Ni,D(ft,i)}_t&&D(ft,Ne,t.preventScrollOnTouch),Vt&&D(ft,Be),Dt&&D(e,Ie),"inner"===U?ge.on("outerResized",function(){Xn(),ge.emit("innerLoaded",Ui())}):(J||St||Lt||Wt||!lt)&&D(n,{resize:Qn}),Wt&&("outer"===U?ge.on("innerLoaded",li):be||li()),oi(),be?ti():Me&&$n(),ge.on("indexChanged",ci),"inner"===U&&ge.emit("innerLoaded",Ui()),"function"==typeof he&&he(Ui()),gt=!0}function Qn(t){o(function(){Xn(qi(t))})}function Xn(n){if(gt){"outer"===U&&ge.emit("outerResized",Ui(n)),ht=Nn();var i,o=ut,r=!1;J&&(Jn(),(i=o!==ut)&&ge.emit("newBreakpointStart",Ui(n)));var a,u,l=Ot,s=be,c=Me,f=Dt,d=qt,v=Ft,g=_t,y=Vt,w=Gt,C=Xt,M=Yt,T=le;if(i){var E=St,L=Wt,I=jt,N=Bt,B=Qt;if(!k)var O=It,P=At}if(Dt=kn("arrowKeys"),qt=kn("controls"),Ft=kn("nav"),_t=kn("touch"),Bt=kn("center"),Vt=kn("mouseDrag"),Gt=kn("autoplay"),Xt=kn("autoplayHoverPause"),Yt=kn("autoplayResetOnVisibility"),i&&(be=kn("disable"),St=kn("fixedWidth"),Ht=kn("speed"),Wt=kn("autoHeight"),jt=kn("controlsText"),Qt=kn("autoplayText"),Kt=kn("autoplayTimeout"),k||(At=kn("edgePadding"),It=kn("gutter"))),En(be),Nt=On(),lt&&!Lt||be||(pi(),lt||(Xi(),r=!0)),(St||Lt)&&(ne=Mi(),fe=ue()),(i||St)&&(Ot=kn("items"),Pt=kn("slideBy"),(u=Ot!==l)&&(St||Lt||(fe=ue()),Mn())),i&&be!==s&&(be?ti():function(){if(!we)return;if(Jt.disabled=!1,ft.className+=ye,Ei(),zt)for(var t=$t;t--;)Z&&A(pt[t]),A(pt[te-t-1]);if(!Z)for(var e=le,n=le+mt;e<n;e++){var i=pt[e],o=e<le+Ot?nt:rt;i.style.left=100*(e-le)/Ot+"%",x(i,o)}Zn(),we=!1}()),Ce&&(i||St||Lt)&&(Me=Yn())!==c&&(Me?(Li(Ti(Sn(0))),$n()):(!function(){if(!Te)return;At&&k&&(ct.style.margin="");if($t)for(var t="tns-transparent",e=$t;e--;)Z&&b(pt[e],t),b(pt[te-e-1],t);Zn(),Te=!1}(),r=!0)),En(be||Me),Gt||(Xt=Yt=!1),Dt!==f&&(Dt?D(e,Ie):H(e,Ie)),qt!==d&&(qt?Ve?A(Ve):(Ke&&A(Ke),Qe&&A(Qe)):Ve?S(Ve):(Ke&&S(Ke),Qe&&S(Qe))),Ft!==v&&(Ft?A(Ue):S(Ue)),_t!==g&&(_t?D(ft,Ne,t.preventScrollOnTouch):H(ft,Ne)),Vt!==y&&(Vt?D(ft,Be):H(ft,Be)),Gt!==w&&(Gt?(pn&&A(pn),sn||fn||Hi()):(pn&&S(pn),sn&&Ri())),Xt!==C&&(Xt?D(ft,Se):H(ft,Se)),Yt!==M&&(Yt?D(e,Ae):H(e,Ae)),i){if(St===E&&Bt===N||(r=!0),Wt!==L&&(Wt||(ct.style.height="")),qt&&jt!==I&&(Ke.innerHTML=jt[0],Qe.innerHTML=jt[1]),pn&&Qt!==B){var R=Gt?1:0,z=pn.innerHTML,W=z.length-B[R].length;z.substring(W)===B[R]&&(pn.innerHTML=z.substring(0,W)+Qt[R])}}else Bt&&(St||Lt)&&(r=!0);if((u||St&&!Lt)&&($e=Yi(),Ji()),(a=le!==T)?(ge.emit("indexChanged",Ui()),r=!0):u?a||ci():(St||Lt)&&(oi(),mi(),ei()),u&&!Z&&function(){for(var t=le+Math.min(mt,Ot),e=te;e--;){var n=pt[e];e>=le&&e<t?(x(n,"tns-moving"),n.style.left=100*(e-le)/Ot+"%",x(n,nt),b(n,rt)):n.style.left&&(n.style.left="",x(n,rt),b(n,nt)),b(n,it)}setTimeout(function(){h(pt,function(t){b(t,"tns-moving")})},300)}(),!be&&!Me){if(i&&!k&&(Wt===autoheightTem&&Ht===speedTem||fi(),At===P&&It===O||(ct.style.cssText=Dn(At,It,St,Ht,Wt)),lt)){Z&&(ft.style.width=Hn(St,It,Ot));var q=Rn(St,It,Ot)+zn(It);!function(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}(Jt,m(Jt)-1),p(Jt,"#"+xe+" > .tns-item",q,m(Jt))}Wt&&li(),r&&(Ei(),se=le)}i&&ge.emit("newBreakpointEnd",Ui(n))}}function Yn(){if(!St&&!Lt)return mt<=(Bt?Ot-(Ot-1)/2:Ot);var t=St?(St+It)*mt:yt[mt],e=At?Nt+2*At:Nt+It;return Bt&&(e-=St?(Nt-St)/2:(Nt-(yt[le+1]-yt[le]-It))/2),t<=e}function Jn(){for(var t in ut=0,J)t=parseInt(t),ht>=t&&(ut=t)}function Un(){!Gt&&pn&&S(pn),!Ft&&Ue&&S(Ue),qt||(Ve?S(Ve):(Ke&&S(Ke),Qe&&S(Qe)))}function Zn(){Gt&&pn&&A(pn),Ft&&Ue&&A(Ue),qt&&(Ve?A(Ve):(Ke&&A(Ke),Qe&&A(Qe)))}function $n(){if(!Te){if(At&&(ct.style.margin="0px"),$t)for(var t="tns-transparent",e=$t;e--;)Z&&x(pt[e],t),x(pt[te-e-1],t);Un(),Te=!0}}function ti(){if(!we){if(Jt.disabled=!0,ft.className=ft.className.replace(ye.substring(1),""),E(ft,["style"]),zt)for(var t=$t;t--;)Z&&S(pt[t]),S(pt[te-t-1]);if(lt&&Z||E(ct,["style"]),!Z)for(var e=le,n=le+mt;e<n;e++){var i=pt[e];E(i,["style"]),b(i,nt),b(i,rt)}Un(),we=!0}}function ei(){var t=ni();bt.innerHTML!==t&&(bt.innerHTML=t)}function ni(){var t=ii(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function ii(t){null==t&&(t=Ti());var e,n,i,o=le;if(Bt||At?(Lt||St)&&(n=-(parseFloat(t)+At),i=n+Nt+2*At):Lt&&(n=yt[le],i=n+Nt),Lt)yt.forEach(function(t,r){r<te&&((Bt||At)&&t<=n+.5&&(o=r),i-t>=.5&&(e=r))});else{if(St){var r=St+It;Bt||At?(o=Math.floor(n/r),e=Math.ceil(i/r-1)):e=o+Math.ceil(Nt/r)-1}else if(Bt||At){var a=Ot-1;if(Bt?(o-=a/2,e=le+a/2):e=le+a,At){var u=At*Ot/Nt;o-=u,e+=u}o=Math.floor(o),e=Math.ceil(e)}else e=o+Ot-1;o=Math.max(o,0),e=Math.min(e,te-1)}return[o,e]}function oi(){Ut&&!be&&ui.apply(null,ii()).forEach(function(t){if(!y(t,We)){var e={};e[G]=function(t){t.stopPropagation()},D(t,e),D(t,qe),t.src=C(t,"data-src");var n=C(t,"data-srcset");n&&(t.srcset=n),x(t,"loading")}})}function ri(t){x(t,"loaded"),ai(t)}function ai(t){x(t,"tns-complete"),b(t,"loading"),H(t,qe)}function ui(t,e){for(var n=[];t<=e;)h(pt[t].querySelectorAll("img"),function(t){n.push(t)}),t++;return n}function li(){var t=ui.apply(null,ii());o(function(){si(t,vi)})}function si(t,e){return xt?e():(t.forEach(function(e,n){y(e,We)&&t.splice(n,1)}),t.length?void o(function(){si(t,e)}):e())}function ci(){oi(),mi(),ei(),bi(),function(){if(Ft&&(nn=en>=0?en:In(),en=-1,nn!==on)){var t=Je[on],e=Je[nn];T(t,{tabindex:"-1","aria-label":an+(on+1)}),b(t,rn),T(e,{"aria-label":an+(nn+1)+un}),E(e,"tabindex"),x(e,rn),on=nn}}()}function fi(){Z&&Wt&&(at.style[j]=Ht/1e3+"s")}function di(t,e){for(var n=[],i=t,o=Math.min(t+e,te);i<o;i++)n.push(pt[i].offsetHeight);return Math.max.apply(null,n)}function vi(){var t=Wt?di(le,Ot):di($t,mt),e=at||ct;e.style.height!==t&&(e.style.height=t+"px")}function pi(){yt=[0];var t=lt?"left":"top",e=lt?"right":"bottom",n=pt[0].getBoundingClientRect()[t];h(pt,function(i,o){o&&yt.push(i.getBoundingClientRect()[t]-n),o===te-1&&yt.push(i.getBoundingClientRect()[e]-n)})}function mi(){var t=ii(),e=t[0],n=t[1];h(pt,function(t,i){i>=e&&i<=n?w(t,"aria-hidden")&&(E(t,["aria-hidden","tabindex"]),x(t,ze)):w(t,"aria-hidden")||(T(t,{"aria-hidden":"true",tabindex:"-1"}),b(t,ze))})}function hi(t){return t.nodeName.toLowerCase()}function gi(t){return"button"===hi(t)}function yi(t){return"true"===t.getAttribute("aria-disabled")}function xi(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function bi(){if(qt&&!Rt&&!zt){var t=Fe?Ke.disabled:yi(Ke),e=_e?Qe.disabled:yi(Qe),n=le<=ce,i=!Rt&&le>=fe;n&&!t&&xi(Fe,Ke,!0),!n&&t&&xi(Fe,Ke,!1),i&&!e&&xi(_e,Qe,!0),!i&&e&&xi(_e,Qe,!1)}}function wi(t,e){j&&(t.style[j]=e)}function Ci(t){return null==t&&(t=le),Lt?(Nt-(At?It:0)-(yt[t+1]-yt[t]-It))/2:St?(Nt-St)/2:(Ot-1)/2}function Mi(){var t=Nt+(At?It:0)-(St?(St+It)*te:yt[te]);return Bt&&!zt&&(t=St?-(St+It)*(te-1)-Ci():Ci(te-1)-yt[te-1]),t>0&&(t=0),t}function Ti(t){var e;if(null==t&&(t=le),lt&&!Lt)if(St)e=-(St+It)*t,Bt&&(e+=Ci());else{var n=W?te:Ot;Bt&&(t-=Ci()),e=100*-t/n}else e=-yt[t],Bt&&Lt&&(e+=Ci());return ee&&(e=Math.max(e,ne)),e+=!lt||Lt||St?"px":"%"}function Ei(t){wi(ft,"0s"),Li(t)}function Li(t){null==t&&(t=Ti()),ft.style[oe]=re+t+ae}function Si(t,e,n,i){var o=t+Ot;zt||(o=Math.min(o,te));for(var r=t;r<o;r++){var a=pt[r];i||(a.style.left=100*(r-le)/Ot+"%"),ot&&F&&(a.style[F]=a.style[V]=ot*(r-t)/1e3+"s"),b(a,e),x(a,n),i&&Zt.push(a)}}function Ai(t,e){ie&&Mn(),(le!==se||e)&&(ge.emit("indexChanged",Ui()),ge.emit("transitionStart",Ui()),Wt&&li(),sn&&t&&["click","keydown"].indexOf(t.type)>=0&&Ri(),me=!0,Tn())}function Ii(t){return t.toLowerCase().replace(/-/g,"")}function Ni(t){if(Z||me){if(ge.emit("transitionEnd",Ui(t)),!Z&&Zt.length>0)for(var e=0;e<Zt.length;e++){var n=Zt[e];n.style.left="",V&&F&&(n.style[V]="",n.style[F]=""),b(n,it),x(n,rt)}if(!t||!Z&&t.target.parentNode===ft||t.target===ft&&Ii(t.propertyName)===Ii(oe)){if(!ie){var i=le;Mn(),le!==i&&(ge.emit("indexChanged",Ui()),Ei())}"inner"===U&&ge.emit("innerLoaded",Ui()),me=!1,se=le}}}function Bi(t,e){if(!Me)if("prev"===t)Oi(e,-1);else if("next"===t)Oi(e,1);else{if(me){if(de)return;Ni()}var n=An(),i=0;if("first"===t?i=-n:"last"===t?i=Z?mt-Ot-n:mt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(mt-1,t))),i=t-n)),!Z&&i&&Math.abs(i)<Ot){var o=i>0?1:-1;i+=le+i-mt>=ce?mt*o:2*mt*o*-1}le+=i,Z&&zt&&(le<ce&&(le+=mt),le>fe&&(le-=mt)),An(le)!==An(se)&&Ai(e)}}function Oi(t,e){if(me){if(de)return;Ni()}var n;if(!e){for(var i=ji(t=qi(t));i!==Ve&&[Ke,Qe].indexOf(i)<0;)i=i.parentNode;var o=[Ke,Qe].indexOf(i);o>=0&&(n=!0,e=0===o?-1:1)}if(Rt){if(le===ce&&-1===e)return void Bi("last",t);if(le===fe&&1===e)return void Bi("first",t)}e&&(le+=Pt*e,Lt&&(le=Math.floor(le)),Ai(n||t&&"keydown"===t.type?t:null))}function Pi(){ln=setInterval(function(){Oi(null,vn)},Kt),sn=!0}function ki(){clearInterval(ln),sn=!1}function Di(t,e){T(pn,{"data-action":t}),pn.innerHTML=hn[0]+t+hn[1]+e}function Hi(){Pi(),pn&&Di("stop",Qt[1])}function Ri(){ki(),pn&&Di("start",Qt[0])}function zi(){sn?(Ri(),fn=!0):(Hi(),fn=!1)}function Wi(t){t.focus()}function qi(t){return Fi(t=t||n.event)?t.changedTouches[0]:t}function ji(t){return t.target||n.event.srcElement}function Fi(t){return t.type.indexOf("touch")>=0}function _i(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Vi(){return r=bn.y-xn.y,a=bn.x-xn.x,e=Math.atan2(r,a)*(180/Math.PI),n=ve,i=!1,(o=Math.abs(90-Math.abs(e)))>=90-n?i="horizontal":o<=n&&(i="vertical"),i===t.axis;var e,n,i,o,r,a}function Gi(t){if(me){if(de)return;Ni()}Gt&&sn&&ki(),wn=!0,yn&&(a(yn),yn=null);var e=qi(t);ge.emit(Fi(t)?"touchStart":"dragStart",Ui(t)),!Fi(t)&&["img","a"].indexOf(hi(ji(t)))>=0&&_i(t),bn.x=xn.x=e.clientX,bn.y=xn.y=e.clientY,Z&&(gn=parseFloat(ft.style[oe].replace(re,"")),wi(ft,"0s"))}function Ki(t){if(wn){var e=qi(t);bn.x=e.clientX,bn.y=e.clientY,Z?yn||(yn=o(function(){!function t(e){if(!pe)return void(wn=!1);a(yn);wn&&(yn=o(function(){t(e)}));"?"===pe&&(pe=Vi());if(pe){!je&&Fi(e)&&(je=!0);try{e.type&&ge.emit(Fi(e)?"touchMove":"dragMove",Ui(e))}catch(t){}var n=gn,i=Cn(bn,xn);if(!lt||St||Lt)n+=i,n+="px";else{var r=W?i*Ot*100/((Nt+It)*te):100*i/(Nt+It);n+=r,n+="%"}ft.style[oe]=re+n+ae}}(t)})):("?"===pe&&(pe=Vi()),pe&&(je=!0)),je&&t.preventDefault()}}function Qi(e){if(wn){yn&&(a(yn),yn=null),Z&&wi(ft,""),wn=!1;var n=qi(e);bn.x=n.clientX,bn.y=n.clientY;var i=Cn(bn,xn);if(Math.abs(i)){if(!Fi(e)){var r=ji(e);D(r,{click:function t(e){_i(e),H(r,{click:t})}})}Z?yn=o(function(){if(lt&&!Lt){var t=-i*Ot/(Nt+It);t=i>0?Math.floor(t):Math.ceil(t),le+=t}else{var n=-(gn+i);if(n<=0)le=ce;else if(n>=yt[te-1])le=fe;else for(var o=0;o<te&&n>=yt[o];)le=o,n>yt[o]&&i<0&&(le+=1),o++}Ai(e,i),ge.emit(Fi(e)?"touchEnd":"dragEnd",Ui(e))}):pe&&Oi(e,i>0?-1:1)}}"auto"===t.preventScrollOnTouch&&(je=!1),ve&&(pe="?"),Gt&&!sn&&Pi()}function Xi(){(at||ct).style.height=yt[le+Ot]-yt[le]+"px"}function Yi(){var t=St?(St+It)*mt/Nt:mt/Ot;return Math.min(Math.ceil(t),mt)}function Ji(){if(Ft&&!ke&&$e!==tn){var t=tn,e=$e,n=A;for(tn>$e&&(t=$e,e=tn,n=S);t<e;)n(Je[t]),t++;tn=$e}}function Ui(t){return{container:ft,slideItems:pt,navContainer:Ue,navItems:Je,controlsContainer:Ve,hasControls:Oe,prevButton:Ke,nextButton:Qe,items:Ot,slideBy:Pt,cloneCount:$t,slideCount:mt,slideCountNew:te,index:le,indexCached:se,displayIndex:Ln(),navCurrentIndex:nn,navCurrentIndexCached:on,pages:$e,pagesCached:tn,sheet:Jt,isOn:gt,event:t||{}}}Q&&console.warn("No slides found in",t.container)}}]);