"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[143],{6674:function(e,t,n){n.d(t,{Ry:function(){return l}});var r=new WeakMap,o=new WeakMap,a={},c=0,i=function(e){return e&&(e.host||i(e.parentNode))},u=function(e,t,n,u){var l=(Array.isArray(e)?e:[e]).map(function(e){if(t.contains(e))return e;var n=i(e);return n&&t.contains(n)?n:(console.error("aria-hidden",e,"in not contained inside",t,". Doing nothing"),null)}).filter(function(e){return!!e});a[n]||(a[n]=new WeakMap);var d=a[n],f=[],s=new Set,v=new Set(l),p=function(e){!e||s.has(e)||(s.add(e),p(e.parentNode))};l.forEach(p);var m=function(e){!e||v.has(e)||Array.prototype.forEach.call(e.children,function(e){if(s.has(e))m(e);else{var t=e.getAttribute(u),a=null!==t&&"false"!==t,c=(r.get(e)||0)+1,i=(d.get(e)||0)+1;r.set(e,c),d.set(e,i),f.push(e),1===c&&a&&o.set(e,!0),1===i&&e.setAttribute(n,"true"),a||e.setAttribute(u,"true")}})};return m(t),s.clear(),c++,function(){f.forEach(function(e){var t=r.get(e)-1,a=d.get(e)-1;r.set(e,t),d.set(e,a),t||(o.has(e)||e.removeAttribute(u),o.delete(e)),a||e.removeAttribute(n)}),--c||(r=new WeakMap,r=new WeakMap,o=new WeakMap,a={})}},l=function(e,t,n){void 0===n&&(n="data-aria-hidden");var r=Array.from(Array.isArray(e)?e:[e]),o=t||("undefined"==typeof document?null:(Array.isArray(e)?e[0]:e).ownerDocument.body);return o?(r.push.apply(r,Array.from(o.querySelectorAll("[aria-live]"))),u(r,o,n,"aria-hidden")):function(){return null}}},9259:function(e,t,n){n.d(t,{Z:function(){return r}});/**
 * @license lucide-react v0.358.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let r=(0,n(843).Z)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]])},7225:function(e,t,n){n.d(t,{Z:function(){return q}});var r,o,a,c,i,u,l=function(){return(l=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function d(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&0>t.indexOf(r)&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols)for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)0>t.indexOf(r[o])&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n}"function"==typeof SuppressedError&&SuppressedError;var f=n(2265),s="right-scroll-bar-position",v="width-before-scroll-bar";function p(e,t){return"function"==typeof e?e(t):e&&(e.current=t),e}var m=new WeakMap,h=(void 0===o&&(o={}),(void 0===a&&(a=function(e){return e}),c=[],i=!1,u={read:function(){if(i)throw Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");return c.length?c[c.length-1]:null},useMedium:function(e){var t=a(e,i);return c.push(t),function(){c=c.filter(function(e){return e!==t})}},assignSyncMedium:function(e){for(i=!0;c.length;){var t=c;c=[],t.forEach(e)}c={push:function(t){return e(t)},filter:function(){return c}}},assignMedium:function(e){i=!0;var t=[];if(c.length){var n=c;c=[],n.forEach(e),t=c}var r=function(){var n=t;t=[],n.forEach(e)},o=function(){return Promise.resolve().then(r)};o(),c={push:function(e){t.push(e),o()},filter:function(e){return t=t.filter(e),c}}}}).options=l({async:!0,ssr:!1},o),u),g=function(){},y=f.forwardRef(function(e,t){var n,r,o,a,c=f.useRef(null),i=f.useState({onScrollCapture:g,onWheelCapture:g,onTouchMoveCapture:g}),u=i[0],s=i[1],v=e.forwardProps,y=e.children,E=e.className,b=e.removeScrollBar,w=e.enabled,S=e.shards,C=e.sideCar,k=e.noIsolation,A=e.inert,T=e.allowPinchZoom,L=e.as,M=d(e,["forwardProps","children","className","removeScrollBar","enabled","shards","sideCar","noIsolation","inert","allowPinchZoom","as"]),N=(n=[c,t],r=function(e){return n.forEach(function(t){return p(t,e)})},(o=(0,f.useState)(function(){return{value:null,callback:r,facade:{get current(){return o.value},set current(value){var e=o.value;e!==value&&(o.value=value,o.callback(value,e))}}}})[0]).callback=r,a=o.facade,f.useLayoutEffect(function(){var e=m.get(a);if(e){var t=new Set(e),r=new Set(n),o=a.current;t.forEach(function(e){r.has(e)||p(e,null)}),r.forEach(function(e){t.has(e)||p(e,o)})}m.set(a,n)},[n]),a),x=l(l({},M),u);return f.createElement(f.Fragment,null,w&&f.createElement(C,{sideCar:h,removeScrollBar:b,shards:S,noIsolation:k,inert:A,setCallbacks:s,allowPinchZoom:!!T,lockRef:c}),v?f.cloneElement(f.Children.only(y),l(l({},x),{ref:N})):f.createElement(void 0===L?"div":L,l({},x,{className:E,ref:N}),y))});y.defaultProps={enabled:!0,removeScrollBar:!0,inert:!1},y.classNames={fullWidth:v,zeroRight:s};var E=function(e){var t=e.sideCar,n=d(e,["sideCar"]);if(!t)throw Error("Sidecar: please provide `sideCar` property to import the right car");var r=t.read();if(!r)throw Error("Sidecar medium not found");return f.createElement(r,l({},n))};E.isSideCarExport=!0;var b=function(){var e=0,t=null;return{add:function(o){if(0==e&&(t=function(){if(!document)return null;var e=document.createElement("style");e.type="text/css";var t=r||n.nc;return t&&e.setAttribute("nonce",t),e}())){var a,c;(a=t).styleSheet?a.styleSheet.cssText=o:a.appendChild(document.createTextNode(o)),c=t,(document.head||document.getElementsByTagName("head")[0]).appendChild(c)}e++},remove:function(){--e||!t||(t.parentNode&&t.parentNode.removeChild(t),t=null)}}},w=function(){var e=b();return function(t,n){f.useEffect(function(){return e.add(t),function(){e.remove()}},[t&&n])}},S=function(){var e=w();return function(t){return e(t.styles,t.dynamic),null}},C={left:0,top:0,right:0,gap:0},k=function(e){return parseInt(e||"",10)||0},A=function(e){var t=window.getComputedStyle(document.body),n=t["padding"===e?"paddingLeft":"marginLeft"],r=t["padding"===e?"paddingTop":"marginTop"],o=t["padding"===e?"paddingRight":"marginRight"];return[k(n),k(r),k(o)]},T=function(e){if(void 0===e&&(e="margin"),"undefined"==typeof window)return C;var t=A(e),n=document.documentElement.clientWidth,r=window.innerWidth;return{left:t[0],top:t[1],right:t[2],gap:Math.max(0,r-n+t[2]-t[0])}},L=S(),M="data-scroll-locked",N=function(e,t,n,r){var o=e.left,a=e.top,c=e.right,i=e.gap;return void 0===n&&(n="margin"),"\n  .".concat("with-scroll-bars-hidden"," {\n   overflow: hidden ").concat(r,";\n   padding-right: ").concat(i,"px ").concat(r,";\n  }\n  body[").concat(M,"] {\n    overflow: hidden ").concat(r,";\n    overscroll-behavior: contain;\n    ").concat([t&&"position: relative ".concat(r,";"),"margin"===n&&"\n    padding-left: ".concat(o,"px;\n    padding-top: ").concat(a,"px;\n    padding-right: ").concat(c,"px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(i,"px ").concat(r,";\n    "),"padding"===n&&"padding-right: ".concat(i,"px ").concat(r,";")].filter(Boolean).join(""),"\n  }\n  \n  .").concat(s," {\n    right: ").concat(i,"px ").concat(r,";\n  }\n  \n  .").concat(v," {\n    margin-right: ").concat(i,"px ").concat(r,";\n  }\n  \n  .").concat(s," .").concat(s," {\n    right: 0 ").concat(r,";\n  }\n  \n  .").concat(v," .").concat(v," {\n    margin-right: 0 ").concat(r,";\n  }\n  \n  body[").concat(M,"] {\n    ").concat("--removed-body-scroll-bar-size",": ").concat(i,"px;\n  }\n")},x=function(){var e=parseInt(document.body.getAttribute(M)||"0",10);return isFinite(e)?e:0},R=function(){f.useEffect(function(){return document.body.setAttribute(M,(x()+1).toString()),function(){var e=x()-1;e<=0?document.body.removeAttribute(M):document.body.setAttribute(M,e.toString())}},[])},W=function(e){var t=e.noRelative,n=e.noImportant,r=e.gapMode,o=void 0===r?"margin":r;R();var a=f.useMemo(function(){return T(o)},[o]);return f.createElement(L,{styles:N(a,!t,o,n?"":"!important")})},I=!1;if("undefined"!=typeof window)try{var P=Object.defineProperty({},"passive",{get:function(){return I=!0,!0}});window.addEventListener("test",P,P),window.removeEventListener("test",P,P)}catch(e){I=!1}var O=!!I&&{passive:!1},F=function(e,t){var n=window.getComputedStyle(e);return"hidden"!==n[t]&&!(n.overflowY===n.overflowX&&"TEXTAREA"!==e.tagName&&"visible"===n[t])},D=function(e,t){var n=t;do{if("undefined"!=typeof ShadowRoot&&n instanceof ShadowRoot&&(n=n.host),j(e,n)){var r=Z(e,n);if(r[1]>r[2])return!0}n=n.parentNode}while(n&&n!==document.body);return!1},j=function(e,t){return"v"===e?F(t,"overflowY"):F(t,"overflowX")},Z=function(e,t){return"v"===e?[t.scrollTop,t.scrollHeight,t.clientHeight]:[t.scrollLeft,t.scrollWidth,t.clientWidth]},B=function(e,t,n,r,o){var a,c=(a=window.getComputedStyle(t).direction,"h"===e&&"rtl"===a?-1:1),i=c*r,u=n.target,l=t.contains(u),d=!1,f=i>0,s=0,v=0;do{var p=Z(e,u),m=p[0],h=p[1]-p[2]-c*m;(m||h)&&j(e,u)&&(s+=h,v+=m),u=u.parentNode}while(!l&&u!==document.body||l&&(t.contains(u)||t===u));return f&&(o&&0===s||!o&&i>s)?d=!0:!f&&(o&&0===v||!o&&-i>v)&&(d=!0),d},K=function(e){return"changedTouches"in e?[e.changedTouches[0].clientX,e.changedTouches[0].clientY]:[0,0]},_=function(e){return[e.deltaX,e.deltaY]},X=function(e){return e&&"current"in e?e.current:e},Y=0,z=[],H=(h.useMedium(function(e){var t=f.useRef([]),n=f.useRef([0,0]),r=f.useRef(),o=f.useState(Y++)[0],a=f.useState(function(){return S()})[0],c=f.useRef(e);f.useEffect(function(){c.current=e},[e]),f.useEffect(function(){if(e.inert){document.body.classList.add("block-interactivity-".concat(o));var t=(function(e,t,n){if(n||2==arguments.length)for(var r,o=0,a=t.length;o<a;o++)!r&&o in t||(r||(r=Array.prototype.slice.call(t,0,o)),r[o]=t[o]);return e.concat(r||Array.prototype.slice.call(t))})([e.lockRef.current],(e.shards||[]).map(X),!0).filter(Boolean);return t.forEach(function(e){return e.classList.add("allow-interactivity-".concat(o))}),function(){document.body.classList.remove("block-interactivity-".concat(o)),t.forEach(function(e){return e.classList.remove("allow-interactivity-".concat(o))})}}},[e.inert,e.lockRef.current,e.shards]);var i=f.useCallback(function(e,t){if("touches"in e&&2===e.touches.length)return!c.current.allowPinchZoom;var o,a=K(e),i=n.current,u="deltaX"in e?e.deltaX:i[0]-a[0],l="deltaY"in e?e.deltaY:i[1]-a[1],d=e.target,f=Math.abs(u)>Math.abs(l)?"h":"v";if("touches"in e&&"h"===f&&"range"===d.type)return!1;var s=D(f,d);if(!s)return!0;if(s?o=f:(o="v"===f?"h":"v",s=D(f,d)),!s)return!1;if(!r.current&&"changedTouches"in e&&(u||l)&&(r.current=o),!o)return!0;var v=r.current||o;return B(v,t,e,"h"===v?u:l,!0)},[]),u=f.useCallback(function(e){if(z.length&&z[z.length-1]===a){var n="deltaY"in e?_(e):K(e),r=t.current.filter(function(t){var r;return t.name===e.type&&t.target===e.target&&(r=t.delta)[0]===n[0]&&r[1]===n[1]})[0];if(r&&r.should){e.cancelable&&e.preventDefault();return}if(!r){var o=(c.current.shards||[]).map(X).filter(Boolean).filter(function(t){return t.contains(e.target)});(o.length>0?i(e,o[0]):!c.current.noIsolation)&&e.cancelable&&e.preventDefault()}}},[]),l=f.useCallback(function(e,n,r,o){var a={name:e,delta:n,target:r,should:o};t.current.push(a),setTimeout(function(){t.current=t.current.filter(function(e){return e!==a})},1)},[]),d=f.useCallback(function(e){n.current=K(e),r.current=void 0},[]),s=f.useCallback(function(t){l(t.type,_(t),t.target,i(t,e.lockRef.current))},[]),v=f.useCallback(function(t){l(t.type,K(t),t.target,i(t,e.lockRef.current))},[]);f.useEffect(function(){return z.push(a),e.setCallbacks({onScrollCapture:s,onWheelCapture:s,onTouchMoveCapture:v}),document.addEventListener("wheel",u,O),document.addEventListener("touchmove",u,O),document.addEventListener("touchstart",d,O),function(){z=z.filter(function(e){return e!==a}),document.removeEventListener("wheel",u,O),document.removeEventListener("touchmove",u,O),document.removeEventListener("touchstart",d,O)}},[]);var p=e.removeScrollBar,m=e.inert;return f.createElement(f.Fragment,null,m?f.createElement(a,{styles:"\n  .block-interactivity-".concat(o," {pointer-events: none;}\n  .allow-interactivity-").concat(o," {pointer-events: all;}\n")}):null,p?f.createElement(W,{gapMode:"margin"}):null)}),E),$=f.forwardRef(function(e,t){return f.createElement(y,l({},e,{ref:t,sideCar:H}))});$.classNames=y.classNames;var q=$},6007:function(e,t,n){n.d(t,{EW:function(){return a}});var r=n(2265);let o=0;function a(){(0,r.useEffect)(()=>{var e,t;let n=document.querySelectorAll("[data-radix-focus-guard]");return document.body.insertAdjacentElement("afterbegin",null!==(e=n[0])&&void 0!==e?e:c()),document.body.insertAdjacentElement("beforeend",null!==(t=n[1])&&void 0!==t?t:c()),o++,()=>{1===o&&document.querySelectorAll("[data-radix-focus-guard]").forEach(e=>e.remove()),o--}},[])}function c(){let e=document.createElement("span");return e.setAttribute("data-radix-focus-guard",""),e.tabIndex=0,e.style.cssText="outline: none; opacity: 0; position: fixed; pointer-events: none",e}},8082:function(e,t,n){let r;n.d(t,{M:function(){return s}});var o=n(2110),a=n(2265),c=n(1266),i=n(9586),u=n(9830);let l="focusScope.autoFocusOnMount",d="focusScope.autoFocusOnUnmount",f={bubbles:!1,cancelable:!0},s=(0,a.forwardRef)((e,t)=>{let{loop:n=!1,trapped:r=!1,onMountAutoFocus:s,onUnmountAutoFocus:g,...y}=e,[E,b]=(0,a.useState)(null),w=(0,u.W)(s),S=(0,u.W)(g),C=(0,a.useRef)(null),k=(0,c.e)(t,e=>b(e)),A=(0,a.useRef)({paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}}).current;(0,a.useEffect)(()=>{if(r){function e(e){if(A.paused||!E)return;let t=e.target;E.contains(t)?C.current=t:m(C.current,{select:!0})}function t(e){if(A.paused||!E)return;let t=e.relatedTarget;null===t||E.contains(t)||m(C.current,{select:!0})}document.addEventListener("focusin",e),document.addEventListener("focusout",t);let n=new MutationObserver(function(e){if(document.activeElement===document.body)for(let t of e)t.removedNodes.length>0&&m(E)});return E&&n.observe(E,{childList:!0,subtree:!0}),()=>{document.removeEventListener("focusin",e),document.removeEventListener("focusout",t),n.disconnect()}}},[r,E,A.paused]),(0,a.useEffect)(()=>{if(E){h.add(A);let e=document.activeElement;if(!E.contains(e)){let t=new CustomEvent(l,f);E.addEventListener(l,w),E.dispatchEvent(t),t.defaultPrevented||(function(e,{select:t=!1}={}){let n=document.activeElement;for(let r of e)if(m(r,{select:t}),document.activeElement!==n)return}(v(E).filter(e=>"A"!==e.tagName),{select:!0}),document.activeElement===e&&m(E))}return()=>{E.removeEventListener(l,w),setTimeout(()=>{let t=new CustomEvent(d,f);E.addEventListener(d,S),E.dispatchEvent(t),t.defaultPrevented||m(null!=e?e:document.body,{select:!0}),E.removeEventListener(d,S),h.remove(A)},0)}}},[E,w,S,A]);let T=(0,a.useCallback)(e=>{if(!n&&!r||A.paused)return;let t="Tab"===e.key&&!e.altKey&&!e.ctrlKey&&!e.metaKey,o=document.activeElement;if(t&&o){let t=e.currentTarget,[r,a]=function(e){let t=v(e);return[p(t,e),p(t.reverse(),e)]}(t);r&&a?e.shiftKey||o!==a?e.shiftKey&&o===r&&(e.preventDefault(),n&&m(a,{select:!0})):(e.preventDefault(),n&&m(r,{select:!0})):o===t&&e.preventDefault()}},[n,r,A.paused]);return(0,a.createElement)(i.WV.div,(0,o.Z)({tabIndex:-1},y,{ref:k,onKeyDown:T}))});function v(e){let t=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:e=>{let t="INPUT"===e.tagName&&"hidden"===e.type;return e.disabled||e.hidden||t?NodeFilter.FILTER_SKIP:e.tabIndex>=0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)t.push(n.currentNode);return t}function p(e,t){for(let n of e)if(!function(e,{upTo:t}){if("hidden"===getComputedStyle(e).visibility)return!0;for(;e&&(void 0===t||e!==t);){if("none"===getComputedStyle(e).display)return!0;e=e.parentElement}return!1}(n,{upTo:t}))return n}function m(e,{select:t=!1}={}){if(e&&e.focus){var n;let r=document.activeElement;e.focus({preventScroll:!0}),e!==r&&(n=e)instanceof HTMLInputElement&&"select"in n&&t&&e.select()}}let h=(r=[],{add(e){let t=r[0];e!==t&&(null==t||t.pause()),(r=g(r,e)).unshift(e)},remove(e){var t;null===(t=(r=g(r,e))[0])||void 0===t||t.resume()}});function g(e,t){let n=[...e],r=n.indexOf(t);return -1!==r&&n.splice(r,1),n}},8687:function(e,t,n){n.d(t,{M:function(){return u}});var r,o=n(2265),a=n(2618);let c=(r||(r=n.t(o,2)))["useId".toString()]||(()=>void 0),i=0;function u(e){let[t,n]=o.useState(c());return(0,a.b)(()=>{e||n(e=>null!=e?e:String(i++))},[e]),e||(t?`radix-${t}`:"")}},4602:function(e,t,n){n.d(t,{f:function(){return c}});var r=n(2110),o=n(2265),a=n(9586);let c=(0,o.forwardRef)((e,t)=>(0,o.createElement)(a.WV.label,(0,r.Z)({},e,{ref:t,onMouseDown:t=>{var n;null===(n=e.onMouseDown)||void 0===n||n.call(e,t),!t.defaultPrevented&&t.detail>1&&t.preventDefault()}})))},1014:function(e,t,n){n.d(t,{f:function(){return d}});var r=n(2110),o=n(2265),a=n(9586);let c="horizontal",i=["horizontal","vertical"],u=(0,o.forwardRef)((e,t)=>{let{decorative:n,orientation:i=c,...u}=e,d=l(i)?i:c;return(0,o.createElement)(a.WV.div,(0,r.Z)({"data-orientation":d},n?{role:"none"}:{"aria-orientation":"vertical"===d?d:void 0,role:"separator"},u,{ref:t}))});function l(e){return i.includes(e)}u.propTypes={orientation(e,t,n){let r=e[t],o=String(r);return r&&!l(r)?Error(`Invalid prop \`orientation\` of value \`${o}\` supplied to \`${n}\`, expected one of:
  - horizontal
  - vertical

Defaulting to \`${c}\`.`):null}};let d=u}}]);