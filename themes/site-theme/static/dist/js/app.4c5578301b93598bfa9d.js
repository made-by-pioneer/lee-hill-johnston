!function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var i,r=n(1),o=((i=r)&&i.__esModule,n(4));var a=document.querySelector(".mobile-menu-button"),u=document.querySelector(".mobile-menu"),l=document.querySelector("body");if(a.onclick=function(){u.classList.toggle("mobile-menu-toggle"),l.classList.toggle("overflow-hidden")},document.querySelector(".close-menu").onclick=function(){u.classList.toggle("mobile-menu-toggle"),l.classList.toggle("overflow-hidden")},null!==document.getElementById("services-slider-items"))(0,o.tns)({mode:"carousel",container:"#services-slider-items",items:1,controlsContainer:"#services-slider-controls",nav:!0,navPosition:"bottom",loop:!1,startIndex:1,swipeAngle:!1,speed:400,edgePadding:0,center:!0,mouseDrag:!0,responsive:{768:{edgePadding:150},1200:{edgePadding:294}}});var s=(0,o.tns)({mode:"carousel",container:"#testimonial-slider-items",items:1,controlsContainer:"#testimonial-slider-controls",nav:!0,navPosition:"bottom",loop:!1,startIndex:1,swipeAngle:!1,speed:400,edgePadding:0,center:!0,mouseDrag:!0,responsive:{768:{edgePadding:150},1200:{edgePadding:294}}}),c=s.getInfo().displayIndex,f=document.querySelector(".tns-item");2===c&&f.classList.add("active"),console.log(c);s.getInfo().displayIndex;document.querySelector(".next-button").onclick=function(){c.classList.add("active")}},function(t,e){},function(t,e){Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e})},function(t,e){"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)})},function(t,e,n){"use strict";n.r(e);n(2),n(3);var i=window,r=i.requestAnimationFrame||i.webkitRequestAnimationFrame||i.mozRequestAnimationFrame||i.msRequestAnimationFrame||function(t){return setTimeout(t,16)},o=window,a=o.cancelAnimationFrame||o.mozCancelAnimationFrame||function(t){clearTimeout(t)};function u(){for(var t,e,n,i=arguments[0]||{},r=1,o=arguments.length;r<o;r++)if(null!==(t=arguments[r]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function l(t){return["true","false"].indexOf(t)>=0?JSON.parse(t):t}function s(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function c(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var f=document.documentElement;function d(t){var e="";return t.fake&&(e=f.style.overflow,t.style.background="",t.style.overflow=f.style.overflow="hidden",f.appendChild(t)),e}function v(t,e){t.fake&&(t.remove(),f.style.overflow=e,f.offsetHeight)}function p(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function m(t){return("insertRule"in t?t.cssRules:t.rules).length}function h(t,e,n){for(var i=0,r=t.length;i<r;i++)e.call(n,t[i],i)}var g="classList"in document.createElement("_"),y=g?function(t,e){return t.classList.contains(e)}:function(t,e){return t.className.indexOf(e)>=0},x=g?function(t,e){y(t,e)||t.classList.add(e)}:function(t,e){y(t,e)||(t.className+=" "+e)},b=g?function(t,e){y(t,e)&&t.classList.remove(e)}:function(t,e){y(t,e)&&(t.className=t.className.replace(e,""))};function w(t,e){return t.hasAttribute(e)}function C(t,e){return t.getAttribute(e)}function M(t){return void 0!==t.item}function T(t,e){if(t=M(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function E(t,e){t=M(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var r=n;r--;)t[i].removeAttribute(e[r])}function S(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function L(t,e){"none"!==t.style.display&&(t.style.display="none")}function A(t,e){"none"===t.style.display&&(t.style.display="")}function N(t){return"none"!==window.getComputedStyle(t).display}function B(t){if("string"==typeof t){var e=[t],n=t.charAt(0).toUpperCase()+t.substr(1);["Webkit","Moz","ms","O"].forEach(function(i){"ms"===i&&"transform"!==t||e.push(i+n)}),t=e}for(var i=document.createElement("fakeelement"),r=(t.length,0);r<t.length;r++){var o=t[r];if(void 0!==i.style[o])return o}return!1}function O(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}var P=!1;try{var D=Object.defineProperty({},"passive",{get:function(){P=!0}});window.addEventListener("test",null,D)}catch(t){}var I=!!P&&{passive:!0};function k(t,e,n){for(var i in e){var r=["touchstart","touchmove"].indexOf(i)>=0&&!n&&I;t.addEventListener(i,e[i],r)}}function H(t,e){for(var n in e){var i=["touchstart","touchmove"].indexOf(n)>=0&&I;t.removeEventListener(n,e[n],i)}}function R(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(t,e){e.type=t,this.topics[t]&&this.topics[t].forEach(function(n){n(e,t)})}}}n.d(e,"tns",function(){return z});var z=function(t){t=u({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,center:!1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:!1,freezable:!0,onInit:!1,useLocalStorage:!0},t||{});var e=document,n=window,i={ENTER:13,SPACE:32,LEFT:37,RIGHT:39},o={},f=t.useLocalStorage;if(f){var g=navigator.userAgent,M=new Date;try{(o=n.localStorage)?(o.setItem(M,M),f=o.getItem(M)==M,o.removeItem(M)):f=!1,f||(o={})}catch(t){f=!1}f&&(o.tnsApp&&o.tnsApp!==g&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){o.removeItem(t)}),localStorage.tnsApp=g)}var P=o.tC?l(o.tC):s(o,"tC",function(){var t=document,e=c(),n=d(e),i=t.createElement("div"),r=!1;e.appendChild(i);try{for(var o,a="(10px * 10)",u=["calc"+a,"-moz-calc"+a,"-webkit-calc"+a],l=0;l<3;l++)if(o=u[l],i.style.width=o,100===i.offsetWidth){r=o.replace(a,"");break}}catch(t){}return e.fake?v(e,n):i.remove(),r}(),f),D=o.tPL?l(o.tPL):s(o,"tPL",function(){var t,e=document,n=c(),i=d(n),r=e.createElement("div"),o=e.createElement("div"),a="";r.className="tns-t-subp2",o.className="tns-t-ct";for(var u=0;u<70;u++)a+="<div></div>";return o.innerHTML=a,r.appendChild(o),n.appendChild(r),t=Math.abs(r.getBoundingClientRect().left-o.children[67].getBoundingClientRect().left)<2,n.fake?v(n,i):r.remove(),t}(),f),I=o.tMQ?l(o.tMQ):s(o,"tMQ",function(){var t,e=document,n=c(),i=d(n),r=e.createElement("div"),o=e.createElement("style"),a="@media all and (min-width:1px){.tns-mq-test{position:absolute}}";return o.type="text/css",r.className="tns-mq-test",n.appendChild(o),n.appendChild(r),o.styleSheet?o.styleSheet.cssText=a:o.appendChild(e.createTextNode(a)),t=window.getComputedStyle?window.getComputedStyle(r).position:r.currentStyle.position,n.fake?v(n,i):r.remove(),"absolute"===t}(),f),W=o.tTf?l(o.tTf):s(o,"tTf",B("transform"),f),q=o.t3D?l(o.t3D):s(o,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=c(),r=d(i),o=n.createElement("p"),a=t.length>9?"-"+t.slice(0,-9).toLowerCase()+"-":"";return a+="transform",i.insertBefore(o,null),o.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(o).getPropertyValue(a),i.fake?v(i,r):o.remove(),void 0!==e&&e.length>0&&"none"!==e}(W),f),j=o.tTDu?l(o.tTDu):s(o,"tTDu",B("transitionDuration"),f),F=o.tTDe?l(o.tTDe):s(o,"tTDe",B("transitionDelay"),f),_=o.tADu?l(o.tADu):s(o,"tADu",B("animationDuration"),f),V=o.tADe?l(o.tADe):s(o,"tADe",B("animationDelay"),f),G=o.tTE?l(o.tTE):s(o,"tTE",O(j,"Transition"),f),Q=o.tAE?l(o.tAE):s(o,"tAE",O(_,"Animation"),f),X=n.console&&"function"==typeof n.console.warn,Y=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],K={};if(Y.forEach(function(n){if("string"==typeof t[n]){var i=t[n],r=e.querySelector(i);if(K[n]=i,!r||!r.nodeName)return void(X&&console.warn("Can't find",t[n]));t[n]=r}}),!(t.container.children.length<1)){var J=t.responsive,U=t.nested,Z="carousel"===t.mode;if(J){0 in J&&(t=u(t,J[0]),delete J[0]);var $={};for(var tt in J){var et=J[tt];et="number"==typeof et?{items:et}:et,$[tt]=et}J=$,$=null}if(Z||function t(e){for(var n in e)Z||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"responsive"===n&&t(e[n])}(t),!Z){t.axis="horizontal",t.slideBy="page",t.edgePadding=!1;var nt=t.animateIn,it=t.animateOut,rt=t.animateDelay,ot=t.animateNormal}var at,ut,lt="horizontal"===t.axis,st=e.createElement("div"),ct=e.createElement("div"),ft=t.container,dt=ft.parentNode,vt=ft.outerHTML,pt=ft.children,mt=pt.length,ht=Bn(),gt=!1;J&&Jn(),Z&&(ft.className+=" tns-vpfix");var yt,xt,bt,wt,Ct,Mt,Tt,Et,St=t.autoWidth,Lt=In("fixedWidth"),At=In("edgePadding"),Nt=In("gutter"),Bt=Pn(),Ot=In("center"),Pt=St?1:Math.floor(In("items")),Dt=In("slideBy"),It=t.viewportMax||t.fixedWidthViewportWidth,kt=In("arrowKeys"),Ht=In("speed"),Rt=t.rewind,zt=!Rt&&t.loop,Wt=In("autoHeight"),qt=In("controls"),jt=In("controlsText"),Ft=In("nav"),_t=In("touch"),Vt=In("mouseDrag"),Gt=In("autoplay"),Qt=In("autoplayTimeout"),Xt=In("autoplayText"),Yt=In("autoplayHoverPause"),Kt=In("autoplayResetOnVisibility"),Jt=(Et=document.createElement("style"),Tt&&Et.setAttribute("media",Tt),document.querySelector("head").appendChild(Et),Et.sheet?Et.sheet:Et.styleSheet),Ut=t.lazyload,Zt=(t.lazyloadSelector,[]),$t=zt?(Ct=function(){if(St||Lt&&!It)return mt-1;var e=Lt?"fixedWidth":"items",n=[];if((Lt||t[e]<mt)&&n.push(t[e]),J)for(var i in J){var r=J[i][e];r&&(Lt||r<mt)&&n.push(r)}return n.length||n.push(0),Math.ceil(Lt?It/Math.min.apply(null,n):Math.max.apply(null,n))}(),Mt=Z?Math.ceil((5*Ct-mt)/2):4*Ct-mt,Mt=Math.max(Ct,Mt),Dn("edgePadding")?Mt+1:Mt):0,te=Z?mt+2*$t:mt+$t,ee=!(!Lt&&!St||zt),ne=Lt?Mi():null,ie=!Z||!zt,re=lt?"left":"top",oe="",ae="",ue=Lt?function(){return Ot&&!zt?mt-1:Math.ceil(-ne/(Lt+Nt))}:St?function(){for(var t=te;t--;)if(yt[t]>=-ne)return t}:function(){return Ot&&Z&&!zt?mt-1:zt||Z?Math.max(0,te-Math.ceil(Pt)):te-1},le=Ln(In("startIndex")),se=le,ce=(Sn(),0),fe=St?null:ue(),de=t.preventActionWhenRunning,ve=t.swipeAngle,pe=!ve||"?",me=!1,he=t.onInit,ge=new R,ye=" tns-slider tns-"+t.mode,xe=ft.id||(wt=window.tnsId,window.tnsId=wt?wt+1:1,"tns"+window.tnsId),be=In("disable"),we=!1,Ce=t.freezable,Me=!(!Ce||St)&&Kn(),Te=!1,Ee={click:Pi,keydown:function(t){t=qi(t);var e=[i.LEFT,i.RIGHT].indexOf(t.keyCode);e>=0&&(0===e?Qe.disabled||Pi(t,-1):Xe.disabled||Pi(t,1))}},Se={click:function(t){if(me){if(de)return;Bi()}var e=ji(t=qi(t));for(;e!==Ue&&!w(e,"data-nav");)e=e.parentNode;if(w(e,"data-nav")){var n=en=Number(C(e,"data-nav")),i=Lt||St?n*mt/$e:n*Pt,r=Ie?n:Math.min(Math.ceil(i),mt-1);Oi(r,t),nn===n&&(sn&&Ri(),en=-1)}},keydown:function(t){t=qi(t);var n=e.activeElement;if(!w(n,"data-nav"))return;var r=[i.LEFT,i.RIGHT,i.ENTER,i.SPACE].indexOf(t.keyCode),o=Number(C(n,"data-nav"));r>=0&&(0===r?o>0&&Wi(Je[o-1]):1===r?o<$e-1&&Wi(Je[o+1]):(en=o,Oi(o,t)))}},Le={mouseover:function(){sn&&(Ii(),cn=!0)},mouseout:function(){cn&&(Di(),cn=!1)}},Ae={visibilitychange:function(){e.hidden?sn&&(Ii(),dn=!0):dn&&(Di(),dn=!1)}},Ne={keydown:function(t){t=qi(t);var e=[i.LEFT,i.RIGHT].indexOf(t.keyCode);e>=0&&Pi(t,0===e?-1:1)}},Be={touchstart:Gi,touchmove:Qi,touchend:Xi,touchcancel:Xi},Oe={mousedown:Gi,mousemove:Qi,mouseup:Xi,mouseleave:Xi},Pe=Dn("controls"),De=Dn("nav"),Ie=!!St||t.navAsThumbnails,ke=Dn("autoplay"),He=Dn("touch"),Re=Dn("mouseDrag"),ze="tns-slide-active",We="tns-complete",qe={load:function(t){oi(ji(t))},error:function(t){e=ji(t),x(e,"failed"),ai(e);var e}},je="force"===t.preventScrollOnTouch;if(Pe)var Fe,_e,Ve=t.controlsContainer,Ge=t.controlsContainer?t.controlsContainer.outerHTML:"",Qe=t.prevButton,Xe=t.nextButton,Ye=t.prevButton?t.prevButton.outerHTML:"",Ke=t.nextButton?t.nextButton.outerHTML:"";if(De)var Je,Ue=t.navContainer,Ze=t.navContainer?t.navContainer.outerHTML:"",$e=St?mt:Ki(),tn=0,en=-1,nn=Nn(),rn=nn,on="tns-nav-active",an="Carousel Page ",un=" (Current Slide)";if(ke)var ln,sn,cn,fn,dn,vn="forward"===t.autoplayDirection?1:-1,pn=t.autoplayButton,mn=t.autoplayButton?t.autoplayButton.outerHTML:"",hn=["<span class='tns-visually-hidden'>"," animation</span>"];if(He||Re)var gn,yn,xn={},bn={},wn=!1,Cn=lt?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};St||En(be||Me),W&&(re=W,oe="translate",q?(oe+=lt?"3d(":"3d(0px, ",ae=lt?", 0px, 0px)":", 0px)"):(oe+=lt?"X(":"Y(",ae=")")),Z&&(ft.className=ft.className.replace("tns-vpfix","")),function(){Dn("gutter");st.className="tns-outer",ct.className="tns-inner",st.id=xe+"-ow",ct.id=xe+"-iw",""===ft.id&&(ft.id=xe);ye+=D||St?" tns-subpixel":" tns-no-subpixel",ye+=P?" tns-calc":" tns-no-calc",St&&(ye+=" tns-autowidth");ye+=" tns-"+t.axis,ft.className+=ye,Z?((at=e.createElement("div")).id=xe+"-mw",at.className="tns-ovh",st.appendChild(at),at.appendChild(ct)):st.appendChild(ct);if(Wt){var n=at||ct;n.className+=" tns-ah"}if(dt.insertBefore(st,ft),ct.appendChild(ft),h(pt,function(t,e){x(t,"tns-item"),t.id||(t.id=xe+"-item"+e),!Z&&ot&&x(t,ot),T(t,{"aria-hidden":"true",tabindex:"-1"})}),$t){for(var i=e.createDocumentFragment(),r=e.createDocumentFragment(),o=$t;o--;){var a=o%mt,u=pt[a].cloneNode(!0);if(E(u,"id"),r.insertBefore(u,r.firstChild),Z){var l=pt[mt-1-a].cloneNode(!0);E(l,"id"),i.appendChild(l)}}ft.insertBefore(i,ft.firstChild),ft.appendChild(r),pt=ft.children}}(),function(){if(!Z)for(var e=le,i=le+Math.min(mt,Pt);e<i;e++){var r=pt[e];r.style.left=100*(e-le)/Pt+"%",x(r,nt),b(r,ot)}lt&&(D||St?(p(Jt,"#"+xe+" > .tns-item","font-size:"+n.getComputedStyle(pt[0]).fontSize+";",m(Jt)),p(Jt,"#"+xe,"font-size:0;",m(Jt))):Z&&h(pt,function(t,e){t.style.marginLeft=function(t){return P?P+"("+100*t+"% / "+te+")":100*t/te+"%"}(e)}));if(I){if(j){var o=at&&t.autoHeight?qn(t.speed):"";p(Jt,"#"+xe+"-mw",o,m(Jt))}o=kn(t.edgePadding,t.gutter,t.fixedWidth,t.speed,t.autoHeight),p(Jt,"#"+xe+"-iw",o,m(Jt)),Z&&(o=lt&&!St?"width:"+Hn(t.fixedWidth,t.gutter,t.items)+";":"",j&&(o+=qn(Ht)),p(Jt,"#"+xe,o,m(Jt))),o=lt&&!St?Rn(t.fixedWidth,t.gutter,t.items):"",t.gutter&&(o+=zn(t.gutter)),Z||(j&&(o+=qn(Ht)),_&&(o+=jn(Ht))),o&&p(Jt,"#"+xe+" > .tns-item",o,m(Jt))}else{fi(),ct.style.cssText=kn(At,Nt,Lt,Wt),Z&&lt&&!St&&(ft.style.width=Hn(Lt,Nt,Pt));var o=lt&&!St?Rn(Lt,Nt,Pt):"";Nt&&(o+=zn(Nt)),o&&p(Jt,"#"+xe+" > .tns-item",o,m(Jt))}if(J&&I)for(var a in J){a=parseInt(a);var u=J[a],o="",l="",s="",c="",f="",d=St?null:In("items",a),v=In("fixedWidth",a),g=In("speed",a),y=In("edgePadding",a),w=In("autoHeight",a),C=In("gutter",a);j&&at&&In("autoHeight",a)&&"speed"in u&&(l="#"+xe+"-mw{"+qn(g)+"}"),("edgePadding"in u||"gutter"in u)&&(s="#"+xe+"-iw{"+kn(y,C,v,g,w)+"}"),Z&&lt&&!St&&("fixedWidth"in u||"items"in u||Lt&&"gutter"in u)&&(c="width:"+Hn(v,C,d)+";"),j&&"speed"in u&&(c+=qn(g)),c&&(c="#"+xe+"{"+c+"}"),("fixedWidth"in u||Lt&&"gutter"in u||!Z&&"items"in u)&&(f+=Rn(v,C,d)),"gutter"in u&&(f+=zn(C)),!Z&&"speed"in u&&(j&&(f+=qn(g)),_&&(f+=jn(g))),f&&(f="#"+xe+" > .tns-item{"+f+"}"),(o=l+s+c+f)&&Jt.insertRule("@media (min-width: "+a/16+"em) {"+o+"}",Jt.cssRules.length)}}(),Fn();var Mn=zt?Z?function(){var t=ce,e=fe;t+=Dt,e-=Dt,At?(t+=1,e-=1):Lt&&(Bt+Nt)%(Lt+Nt)&&(e-=1),$t&&(le>e?le-=mt:le<t&&(le+=mt))}:function(){if(le>fe)for(;le>=ce+mt;)le-=mt;else if(le<ce)for(;le<=fe-mt;)le+=mt}:function(){le=Math.max(ce,Math.min(fe,le))},Tn=Z?function(){var t,e,n,i,r,o,a,u,l,s,c;wi(ft,""),j||!Ht?(Si(),Ht&&N(ft)||Bi()):(t=ft,e=re,n=oe,i=ae,r=Ti(),o=Ht,a=Bi,u=Math.min(o,10),l=r.indexOf("%")>=0?"%":"px",r=r.replace(l,""),s=Number(t.style[e].replace(n,"").replace(i,"").replace(l,"")),c=(r-s)/o*u,setTimeout(function r(){o-=u,s+=c,t.style[e]=n+s+l+i,o>0?setTimeout(r,u):a()},u)),lt||Yi()}:function(){Zt=[];var t={};t[G]=t[Q]=Bi,H(pt[se],t),k(pt[le],t),Li(se,nt,it,!0),Li(le,ot,nt),G&&Q&&Ht&&N(ft)||Bi()};return{version:"2.9.2",getInfo:Ui,events:ge,goTo:Oi,play:function(){Gt&&!sn&&(Hi(),fn=!1)},pause:function(){sn&&(Ri(),fn=!0)},isOn:gt,updateSliderHeight:vi,refresh:Fn,destroy:function(){if(Jt.disabled=!0,Jt.ownerNode&&Jt.ownerNode.remove(),H(n,{resize:Xn}),kt&&H(e,Ne),Ve&&H(Ve,Ee),Ue&&H(Ue,Se),H(ft,Le),H(ft,Ae),pn&&H(pn,{click:zi}),Gt&&clearInterval(ln),Z&&G){var i={};i[G]=Bi,H(ft,i)}_t&&H(ft,Be),Vt&&H(ft,Oe);var r=[vt,Ge,Ye,Ke,Ze,mn];for(var o in Y.forEach(function(e,n){var i="container"===e?st:t[e];if("object"==typeof i){var o=!!i.previousElementSibling&&i.previousElementSibling,a=i.parentNode;i.outerHTML=r[n],t[e]=o?o.nextElementSibling:a.firstElementChild}}),Y=nt=it=rt=ot=lt=st=ct=ft=dt=vt=pt=mt=ut=ht=St=Lt=At=Nt=Bt=Pt=Dt=It=kt=Ht=Rt=zt=Wt=Jt=Ut=yt=Zt=$t=te=ee=ne=ie=re=oe=ae=ue=le=se=ce=fe=ve=pe=me=he=ge=ye=xe=be=we=Ce=Me=Te=Ee=Se=Le=Ae=Ne=Be=Oe=Pe=De=Ie=ke=He=Re=ze=We=qe=xt=qt=jt=Ve=Ge=Qe=Xe=Fe=_e=Ft=Ue=Ze=Je=$e=tn=en=nn=rn=on=an=un=Gt=Qt=vn=Xt=Yt=pn=mn=Kt=hn=ln=sn=cn=fn=dn=xn=bn=gn=wn=yn=Cn=_t=Vt=null,this)"rebuild"!==o&&(this[o]=null);gt=!1},rebuild:function(){return z(u(t,K))}}}function En(t){t&&(qt=Ft=_t=Vt=kt=Gt=Yt=Kt=!1)}function Sn(){for(var t=Z?le-$t:le;t<0;)t+=mt;return t%mt+1}function Ln(t){return t=t?Math.max(0,Math.min(zt?mt-1:mt-Pt,t)):0,Z?t+$t:t}function An(t){for(null==t&&(t=le),Z&&(t-=$t);t<0;)t+=mt;return Math.floor(t%mt)}function Nn(){var t,e=An();return t=Ie?e:Lt||St?Math.ceil((e+1)*$e/mt-1):Math.floor(e/Pt),!zt&&Z&&le===fe&&(t=$e-1),t}function Bn(){return n.innerWidth||e.documentElement.clientWidth||e.body.clientWidth}function On(t){return"top"===t?"afterbegin":"beforeend"}function Pn(){var t=At?2*At-Nt:0;return function t(n){var i,r,o=e.createElement("div");return n.appendChild(o),r=(i=o.getBoundingClientRect()).right-i.left,o.remove(),r||t(n.parentNode)}(dt)-t}function Dn(e){if(t[e])return!0;if(J)for(var n in J)if(J[n][e])return!0;return!1}function In(e,n){if(null==n&&(n=ht),"items"===e&&Lt)return Math.floor((Bt+Nt)/(Lt+Nt))||1;var i=t[e];if(J)for(var r in J)n>=parseInt(r)&&e in J[r]&&(i=J[r][e]);return"slideBy"===e&&"page"===i&&(i=In("items")),Z||"slideBy"!==e&&"items"!==e||(i=Math.floor(i)),i}function kn(t,e,n,i,r){var o="";if(void 0!==t){var a=t;e&&(a-=e),o=lt?"margin: 0 "+a+"px 0 "+t+"px;":"margin: "+t+"px 0 "+a+"px 0;"}else if(e&&!n){var u="-"+e+"px";o="margin: 0 "+(lt?u+" 0 0":"0 "+u+" 0")+";"}return!Z&&r&&j&&i&&(o+=qn(i)),o}function Hn(t,e,n){return t?(t+e)*te+"px":P?P+"("+100*te+"% / "+n+")":100*te/n+"%"}function Rn(t,e,n){var i;if(t)i=t+e+"px";else{Z||(n=Math.floor(n));var r=Z?te:n;i=P?P+"(100% / "+r+")":100/r+"%"}return i="width:"+i,"inner"!==U?i+";":i+" !important;"}function zn(t){var e="";!1!==t&&(e=(lt?"padding-":"margin-")+(lt?"right":"bottom")+": "+t+"px;");return e}function Wn(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function qn(t){return Wn(j,18)+"transition-duration:"+t/1e3+"s;"}function jn(t){return Wn(_,17)+"animation-duration:"+t/1e3+"s;"}function Fn(){if(Dn("autoHeight")||St||!lt){var t=ft.querySelectorAll("img");h(t,function(t){var e=t.src;e&&e.indexOf("data:image")<0?(k(t,qe),t.src="",t.src=e,x(t,"loading")):Ut||oi(t)}),r(function(){si(S(t),function(){xt=!0})}),!St&&lt&&(t=ui(le,Math.min(le+Pt-1,te-1))),Ut?_n():r(function(){si(S(t),_n)})}else Z&&Ei(),Gn(),Qn()}function _n(){if(St){var t=zt?le:mt-1;!function e(){pt[t-1].getBoundingClientRect().right.toFixed(2)===pt[t].getBoundingClientRect().left.toFixed(2)?Vn():setTimeout(function(){e()},16)}()}else Vn()}function Vn(){lt&&!St||(pi(),St?(ne=Mi(),Ce&&(Me=Kn()),fe=ue(),En(be||Me)):Yi()),Z&&Ei(),Gn(),Qn()}function Gn(){if(mi(),st.insertAdjacentHTML("afterbegin",'<div class="tns-liveregion tns-visually-hidden" aria-live="polite" aria-atomic="true">slide <span class="current">'+ni()+"</span>  of "+mt+"</div>"),bt=st.querySelector(".tns-liveregion .current"),ke){var e=Gt?"stop":"start";pn?T(pn,{"data-action":e}):t.autoplayButtonOutput&&(st.insertAdjacentHTML(On(t.autoplayPosition),'<button data-action="'+e+'">'+hn[0]+e+hn[1]+Xt[0]+"</button>"),pn=st.querySelector("[data-action]")),pn&&k(pn,{click:zi}),Gt&&(Hi(),Yt&&k(ft,Le),Kt&&k(ft,Ae))}if(De){if(Ue)T(Ue,{"aria-label":"Carousel Pagination"}),h(Je=Ue.children,function(t,e){T(t,{"data-nav":e,tabindex:"-1","aria-label":an+(e+1),"aria-controls":xe})});else{for(var n="",i=Ie?"":'style="display:none"',r=0;r<mt;r++)n+='<button data-nav="'+r+'" tabindex="-1" aria-controls="'+xe+'" '+i+' aria-label="'+an+(r+1)+'"></button>';n='<div class="tns-nav" aria-label="Carousel Pagination">'+n+"</div>",st.insertAdjacentHTML(On(t.navPosition),n),Ue=st.querySelector(".tns-nav"),Je=Ue.children}if(Ji(),j){var o=j.substring(0,j.length-18).toLowerCase(),a="transition: all "+Ht/1e3+"s";o&&(a="-"+o+"-"+a),p(Jt,"[aria-controls^="+xe+"-item]",a,m(Jt))}T(Je[nn],{"aria-label":an+(nn+1)+un}),E(Je[nn],"tabindex"),x(Je[nn],on),k(Ue,Se)}Pe&&(Ve||Qe&&Xe||(st.insertAdjacentHTML(On(t.controlsPosition),'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+xe+'">'+jt[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+xe+'">'+jt[1]+"</button></div>"),Ve=st.querySelector(".tns-controls")),Qe&&Xe||(Qe=Ve.children[0],Xe=Ve.children[1]),t.controlsContainer&&T(Ve,{"aria-label":"Carousel Navigation",tabindex:"0"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&T([Qe,Xe],{"aria-controls":xe,tabindex:"-1"}),(t.controlsContainer||t.prevButton&&t.nextButton)&&(T(Qe,{"data-controls":"prev"}),T(Xe,{"data-controls":"next"})),Fe=gi(Qe),_e=gi(Xe),bi(),Ve?k(Ve,Ee):(k(Qe,Ee),k(Xe,Ee))),Un()}function Qn(){if(Z&&G){var i={};i[G]=Bi,k(ft,i)}_t&&k(ft,Be,t.preventScrollOnTouch),Vt&&k(ft,Oe),kt&&k(e,Ne),"inner"===U?ge.on("outerResized",function(){Yn(),ge.emit("innerLoaded",Ui())}):(J||Lt||St||Wt||!lt)&&k(n,{resize:Xn}),Wt&&("outer"===U?ge.on("innerLoaded",li):be||li()),ri(),be?ti():Me&&$n(),ge.on("indexChanged",ci),"inner"===U&&ge.emit("innerLoaded",Ui()),"function"==typeof he&&he(Ui()),gt=!0}function Xn(t){r(function(){Yn(qi(t))})}function Yn(n){if(gt){"outer"===U&&ge.emit("outerResized",Ui(n)),ht=Bn();var i,r=ut,o=!1;J&&(Jn(),(i=r!==ut)&&ge.emit("newBreakpointStart",Ui(n)));var a,u,l=Pt,s=be,c=Me,f=kt,d=qt,v=Ft,g=_t,y=Vt,w=Gt,C=Yt,M=Kt,T=le;if(i){var E=Lt,S=Wt,N=jt,B=Ot,O=Xt;if(!I)var P=Nt,D=At}if(kt=In("arrowKeys"),qt=In("controls"),Ft=In("nav"),_t=In("touch"),Ot=In("center"),Vt=In("mouseDrag"),Gt=In("autoplay"),Yt=In("autoplayHoverPause"),Kt=In("autoplayResetOnVisibility"),i&&(be=In("disable"),Lt=In("fixedWidth"),Ht=In("speed"),Wt=In("autoHeight"),jt=In("controlsText"),Xt=In("autoplayText"),Qt=In("autoplayTimeout"),I||(At=In("edgePadding"),Nt=In("gutter"))),En(be),Bt=Pn(),lt&&!St||be||(pi(),lt||(Yi(),o=!0)),(Lt||St)&&(ne=Mi(),fe=ue()),(i||Lt)&&(Pt=In("items"),Dt=In("slideBy"),(u=Pt!==l)&&(Lt||St||(fe=ue()),Mn())),i&&be!==s&&(be?ti():function(){if(!we)return;if(Jt.disabled=!1,ft.className+=ye,Ei(),zt)for(var t=$t;t--;)Z&&A(pt[t]),A(pt[te-t-1]);if(!Z)for(var e=le,n=le+mt;e<n;e++){var i=pt[e],r=e<le+Pt?nt:ot;i.style.left=100*(e-le)/Pt+"%",x(i,r)}Zn(),we=!1}()),Ce&&(i||Lt||St)&&(Me=Kn())!==c&&(Me?(Si(Ti(Ln(0))),$n()):(!function(){if(!Te)return;At&&I&&(ct.style.margin="");if($t)for(var t="tns-transparent",e=$t;e--;)Z&&b(pt[e],t),b(pt[te-e-1],t);Zn(),Te=!1}(),o=!0)),En(be||Me),Gt||(Yt=Kt=!1),kt!==f&&(kt?k(e,Ne):H(e,Ne)),qt!==d&&(qt?Ve?A(Ve):(Qe&&A(Qe),Xe&&A(Xe)):Ve?L(Ve):(Qe&&L(Qe),Xe&&L(Xe))),Ft!==v&&(Ft?A(Ue):L(Ue)),_t!==g&&(_t?k(ft,Be,t.preventScrollOnTouch):H(ft,Be)),Vt!==y&&(Vt?k(ft,Oe):H(ft,Oe)),Gt!==w&&(Gt?(pn&&A(pn),sn||fn||Hi()):(pn&&L(pn),sn&&Ri())),Yt!==C&&(Yt?k(ft,Le):H(ft,Le)),Kt!==M&&(Kt?k(e,Ae):H(e,Ae)),i){if(Lt===E&&Ot===B||(o=!0),Wt!==S&&(Wt||(ct.style.height="")),qt&&jt!==N&&(Qe.innerHTML=jt[0],Xe.innerHTML=jt[1]),pn&&Xt!==O){var R=Gt?1:0,z=pn.innerHTML,W=z.length-O[R].length;z.substring(W)===O[R]&&(pn.innerHTML=z.substring(0,W)+Xt[R])}}else Ot&&(Lt||St)&&(o=!0);if((u||Lt&&!St)&&($e=Ki(),Ji()),(a=le!==T)?(ge.emit("indexChanged",Ui()),o=!0):u?a||ci():(Lt||St)&&(ri(),mi(),ei()),u&&!Z&&function(){for(var t=le+Math.min(mt,Pt),e=te;e--;){var n=pt[e];e>=le&&e<t?(x(n,"tns-moving"),n.style.left=100*(e-le)/Pt+"%",x(n,nt),b(n,ot)):n.style.left&&(n.style.left="",x(n,ot),b(n,nt)),b(n,it)}setTimeout(function(){h(pt,function(t){b(t,"tns-moving")})},300)}(),!be&&!Me){if(i&&!I&&(Wt===autoheightTem&&Ht===speedTem||fi(),At===D&&Nt===P||(ct.style.cssText=kn(At,Nt,Lt,Ht,Wt)),lt)){Z&&(ft.style.width=Hn(Lt,Nt,Pt));var q=Rn(Lt,Nt,Pt)+zn(Nt);!function(t,e){"deleteRule"in t?t.deleteRule(e):t.removeRule(e)}(Jt,m(Jt)-1),p(Jt,"#"+xe+" > .tns-item",q,m(Jt))}Wt&&li(),o&&(Ei(),se=le)}i&&ge.emit("newBreakpointEnd",Ui(n))}}function Kn(){if(!Lt&&!St)return mt<=(Ot?Pt-(Pt-1)/2:Pt);var t=Lt?(Lt+Nt)*mt:yt[mt],e=At?Bt+2*At:Bt+Nt;return Ot&&(e-=Lt?(Bt-Lt)/2:(Bt-(yt[le+1]-yt[le]-Nt))/2),t<=e}function Jn(){for(var t in ut=0,J)t=parseInt(t),ht>=t&&(ut=t)}function Un(){!Gt&&pn&&L(pn),!Ft&&Ue&&L(Ue),qt||(Ve?L(Ve):(Qe&&L(Qe),Xe&&L(Xe)))}function Zn(){Gt&&pn&&A(pn),Ft&&Ue&&A(Ue),qt&&(Ve?A(Ve):(Qe&&A(Qe),Xe&&A(Xe)))}function $n(){if(!Te){if(At&&(ct.style.margin="0px"),$t)for(var t="tns-transparent",e=$t;e--;)Z&&x(pt[e],t),x(pt[te-e-1],t);Un(),Te=!0}}function ti(){if(!we){if(Jt.disabled=!0,ft.className=ft.className.replace(ye.substring(1),""),E(ft,["style"]),zt)for(var t=$t;t--;)Z&&L(pt[t]),L(pt[te-t-1]);if(lt&&Z||E(ct,["style"]),!Z)for(var e=le,n=le+mt;e<n;e++){var i=pt[e];E(i,["style"]),b(i,nt),b(i,ot)}Un(),we=!0}}function ei(){var t=ni();bt.innerHTML!==t&&(bt.innerHTML=t)}function ni(){var t=ii(),e=t[0]+1,n=t[1]+1;return e===n?e+"":e+" to "+n}function ii(t){null==t&&(t=Ti());var e,n,i,r=le;if(Ot||At?(St||Lt)&&(n=-(parseFloat(t)+At),i=n+Bt+2*At):St&&(n=yt[le],i=n+Bt),St)yt.forEach(function(t,o){o<te&&((Ot||At)&&t<=n+.5&&(r=o),i-t>=.5&&(e=o))});else{if(Lt){var o=Lt+Nt;Ot||At?(r=Math.floor(n/o),e=Math.ceil(i/o-1)):e=r+Math.ceil(Bt/o)-1}else if(Ot||At){var a=Pt-1;if(Ot?(r-=a/2,e=le+a/2):e=le+a,At){var u=At*Pt/Bt;r-=u,e+=u}r=Math.floor(r),e=Math.ceil(e)}else e=r+Pt-1;r=Math.max(r,0),e=Math.min(e,te-1)}return[r,e]}function ri(){Ut&&!be&&ui.apply(null,ii()).forEach(function(t){if(!y(t,We)){var e={};e[G]=function(t){t.stopPropagation()},k(t,e),k(t,qe),t.src=C(t,"data-src");var n=C(t,"data-srcset");n&&(t.srcset=n),x(t,"loading")}})}function oi(t){x(t,"loaded"),ai(t)}function ai(t){x(t,"tns-complete"),b(t,"loading"),H(t,qe)}function ui(t,e){for(var n=[];t<=e;)h(pt[t].querySelectorAll("img"),function(t){n.push(t)}),t++;return n}function li(){var t=ui.apply(null,ii());r(function(){si(t,vi)})}function si(t,e){return xt?e():(t.forEach(function(e,n){y(e,We)&&t.splice(n,1)}),t.length?void r(function(){si(t,e)}):e())}function ci(){ri(),mi(),ei(),bi(),function(){if(Ft&&(nn=en>=0?en:Nn(),en=-1,nn!==rn)){var t=Je[rn],e=Je[nn];T(t,{tabindex:"-1","aria-label":an+(rn+1)}),b(t,on),T(e,{"aria-label":an+(nn+1)+un}),E(e,"tabindex"),x(e,on),rn=nn}}()}function fi(){Z&&Wt&&(at.style[j]=Ht/1e3+"s")}function di(t,e){for(var n=[],i=t,r=Math.min(t+e,te);i<r;i++)n.push(pt[i].offsetHeight);return Math.max.apply(null,n)}function vi(){var t=Wt?di(le,Pt):di($t,mt),e=at||ct;e.style.height!==t&&(e.style.height=t+"px")}function pi(){yt=[0];var t=lt?"left":"top",e=lt?"right":"bottom",n=pt[0].getBoundingClientRect()[t];h(pt,function(i,r){r&&yt.push(i.getBoundingClientRect()[t]-n),r===te-1&&yt.push(i.getBoundingClientRect()[e]-n)})}function mi(){var t=ii(),e=t[0],n=t[1];h(pt,function(t,i){i>=e&&i<=n?w(t,"aria-hidden")&&(E(t,["aria-hidden","tabindex"]),x(t,ze)):w(t,"aria-hidden")||(T(t,{"aria-hidden":"true",tabindex:"-1"}),b(t,ze))})}function hi(t){return t.nodeName.toLowerCase()}function gi(t){return"button"===hi(t)}function yi(t){return"true"===t.getAttribute("aria-disabled")}function xi(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function bi(){if(qt&&!Rt&&!zt){var t=Fe?Qe.disabled:yi(Qe),e=_e?Xe.disabled:yi(Xe),n=le<=ce,i=!Rt&&le>=fe;n&&!t&&xi(Fe,Qe,!0),!n&&t&&xi(Fe,Qe,!1),i&&!e&&xi(_e,Xe,!0),!i&&e&&xi(_e,Xe,!1)}}function wi(t,e){j&&(t.style[j]=e)}function Ci(t){return null==t&&(t=le),St?(Bt-(At?Nt:0)-(yt[t+1]-yt[t]-Nt))/2:Lt?(Bt-Lt)/2:(Pt-1)/2}function Mi(){var t=Bt+(At?Nt:0)-(Lt?(Lt+Nt)*te:yt[te]);return Ot&&!zt&&(t=Lt?-(Lt+Nt)*(te-1)-Ci():Ci(te-1)-yt[te-1]),t>0&&(t=0),t}function Ti(t){var e;if(null==t&&(t=le),lt&&!St)if(Lt)e=-(Lt+Nt)*t,Ot&&(e+=Ci());else{var n=W?te:Pt;Ot&&(t-=Ci()),e=100*-t/n}else e=-yt[t],Ot&&St&&(e+=Ci());return ee&&(e=Math.max(e,ne)),e+=!lt||St||Lt?"px":"%"}function Ei(t){wi(ft,"0s"),Si(t)}function Si(t){null==t&&(t=Ti()),ft.style[re]=oe+t+ae}function Li(t,e,n,i){var r=t+Pt;zt||(r=Math.min(r,te));for(var o=t;o<r;o++){var a=pt[o];i||(a.style.left=100*(o-le)/Pt+"%"),rt&&F&&(a.style[F]=a.style[V]=rt*(o-t)/1e3+"s"),b(a,e),x(a,n),i&&Zt.push(a)}}function Ai(t,e){ie&&Mn(),(le!==se||e)&&(ge.emit("indexChanged",Ui()),ge.emit("transitionStart",Ui()),Wt&&li(),sn&&t&&["click","keydown"].indexOf(t.type)>=0&&Ri(),me=!0,Tn())}function Ni(t){return t.toLowerCase().replace(/-/g,"")}function Bi(t){if(Z||me){if(ge.emit("transitionEnd",Ui(t)),!Z&&Zt.length>0)for(var e=0;e<Zt.length;e++){var n=Zt[e];n.style.left="",V&&F&&(n.style[V]="",n.style[F]=""),b(n,it),x(n,ot)}if(!t||!Z&&t.target.parentNode===ft||t.target===ft&&Ni(t.propertyName)===Ni(re)){if(!ie){var i=le;Mn(),le!==i&&(ge.emit("indexChanged",Ui()),Ei())}"inner"===U&&ge.emit("innerLoaded",Ui()),me=!1,se=le}}}function Oi(t,e){if(!Me)if("prev"===t)Pi(e,-1);else if("next"===t)Pi(e,1);else{if(me){if(de)return;Bi()}var n=An(),i=0;if("first"===t?i=-n:"last"===t?i=Z?mt-Pt-n:mt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(mt-1,t))),i=t-n)),!Z&&i&&Math.abs(i)<Pt){var r=i>0?1:-1;i+=le+i-mt>=ce?mt*r:2*mt*r*-1}le+=i,Z&&zt&&(le<ce&&(le+=mt),le>fe&&(le-=mt)),An(le)!==An(se)&&Ai(e)}}function Pi(t,e){if(me){if(de)return;Bi()}var n;if(!e){for(var i=ji(t=qi(t));i!==Ve&&[Qe,Xe].indexOf(i)<0;)i=i.parentNode;var r=[Qe,Xe].indexOf(i);r>=0&&(n=!0,e=0===r?-1:1)}if(Rt){if(le===ce&&-1===e)return void Oi("last",t);if(le===fe&&1===e)return void Oi("first",t)}e&&(le+=Dt*e,St&&(le=Math.floor(le)),Ai(n||t&&"keydown"===t.type?t:null))}function Di(){ln=setInterval(function(){Pi(null,vn)},Qt),sn=!0}function Ii(){clearInterval(ln),sn=!1}function ki(t,e){T(pn,{"data-action":t}),pn.innerHTML=hn[0]+t+hn[1]+e}function Hi(){Di(),pn&&ki("stop",Xt[1])}function Ri(){Ii(),pn&&ki("start",Xt[0])}function zi(){sn?(Ri(),fn=!0):(Hi(),fn=!1)}function Wi(t){t.focus()}function qi(t){return Fi(t=t||n.event)?t.changedTouches[0]:t}function ji(t){return t.target||n.event.srcElement}function Fi(t){return t.type.indexOf("touch")>=0}function _i(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Vi(){return o=bn.y-xn.y,a=bn.x-xn.x,e=Math.atan2(o,a)*(180/Math.PI),n=ve,i=!1,(r=Math.abs(90-Math.abs(e)))>=90-n?i="horizontal":r<=n&&(i="vertical"),i===t.axis;var e,n,i,r,o,a}function Gi(t){if(me){if(de)return;Bi()}Gt&&sn&&Ii(),wn=!0,yn&&(a(yn),yn=null);var e=qi(t);ge.emit(Fi(t)?"touchStart":"dragStart",Ui(t)),!Fi(t)&&["img","a"].indexOf(hi(ji(t)))>=0&&_i(t),bn.x=xn.x=e.clientX,bn.y=xn.y=e.clientY,Z&&(gn=parseFloat(ft.style[re].replace(oe,"")),wi(ft,"0s"))}function Qi(t){if(wn){var e=qi(t);bn.x=e.clientX,bn.y=e.clientY,Z?yn||(yn=r(function(){!function t(e){if(!pe)return void(wn=!1);a(yn);wn&&(yn=r(function(){t(e)}));"?"===pe&&(pe=Vi());if(pe){!je&&Fi(e)&&(je=!0);try{e.type&&ge.emit(Fi(e)?"touchMove":"dragMove",Ui(e))}catch(t){}var n=gn,i=Cn(bn,xn);if(!lt||Lt||St)n+=i,n+="px";else{var o=W?i*Pt*100/((Bt+Nt)*te):100*i/(Bt+Nt);n+=o,n+="%"}ft.style[re]=oe+n+ae}}(t)})):("?"===pe&&(pe=Vi()),pe&&(je=!0)),je&&t.preventDefault()}}function Xi(e){if(wn){yn&&(a(yn),yn=null),Z&&wi(ft,""),wn=!1;var n=qi(e);bn.x=n.clientX,bn.y=n.clientY;var i=Cn(bn,xn);if(Math.abs(i)){if(!Fi(e)){var o=ji(e);k(o,{click:function t(e){_i(e),H(o,{click:t})}})}Z?yn=r(function(){if(lt&&!St){var t=-i*Pt/(Bt+Nt);t=i>0?Math.floor(t):Math.ceil(t),le+=t}else{var n=-(gn+i);if(n<=0)le=ce;else if(n>=yt[te-1])le=fe;else for(var r=0;r<te&&n>=yt[r];)le=r,n>yt[r]&&i<0&&(le+=1),r++}Ai(e,i),ge.emit(Fi(e)?"touchEnd":"dragEnd",Ui(e))}):pe&&Pi(e,i>0?-1:1)}}"auto"===t.preventScrollOnTouch&&(je=!1),ve&&(pe="?"),Gt&&!sn&&Di()}function Yi(){(at||ct).style.height=yt[le+Pt]-yt[le]+"px"}function Ki(){var t=Lt?(Lt+Nt)*mt/Bt:mt/Pt;return Math.min(Math.ceil(t),mt)}function Ji(){if(Ft&&!Ie&&$e!==tn){var t=tn,e=$e,n=A;for(tn>$e&&(t=$e,e=tn,n=L);t<e;)n(Je[t]),t++;tn=$e}}function Ui(t){return{container:ft,slideItems:pt,navContainer:Ue,navItems:Je,controlsContainer:Ve,hasControls:Pe,prevButton:Qe,nextButton:Xe,items:Pt,slideBy:Dt,cloneCount:$t,slideCount:mt,slideCountNew:te,index:le,indexCached:se,displayIndex:Sn(),navCurrentIndex:nn,navCurrentIndexCached:rn,pages:$e,pagesCached:tn,sheet:Jt,isOn:gt,event:t||{}}}X&&console.warn("No slides found in",t.container)}}]);