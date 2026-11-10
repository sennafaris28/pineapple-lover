(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function _w(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var vm={exports:{}},Pl={},wm={exports:{}},j={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var _s=Symbol.for("react.element"),yw=Symbol.for("react.portal"),vw=Symbol.for("react.fragment"),ww=Symbol.for("react.strict_mode"),Sw=Symbol.for("react.profiler"),Ew=Symbol.for("react.provider"),Cw=Symbol.for("react.context"),Iw=Symbol.for("react.forward_ref"),kw=Symbol.for("react.suspense"),Tw=Symbol.for("react.memo"),Nw=Symbol.for("react.lazy"),Lh=Symbol.iterator;function Rw(t){return t===null||typeof t!="object"?null:(t=Lh&&t[Lh]||t["@@iterator"],typeof t=="function"?t:null)}var Sm={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Em=Object.assign,Cm={};function Xr(t,e,n){this.props=t,this.context=e,this.refs=Cm,this.updater=n||Sm}Xr.prototype.isReactComponent={};Xr.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Xr.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Im(){}Im.prototype=Xr.prototype;function Mc(t,e,n){this.props=t,this.context=e,this.refs=Cm,this.updater=n||Sm}var Lc=Mc.prototype=new Im;Lc.constructor=Mc;Em(Lc,Xr.prototype);Lc.isPureReactComponent=!0;var bh=Array.isArray,km=Object.prototype.hasOwnProperty,bc={current:null},Tm={key:!0,ref:!0,__self:!0,__source:!0};function Nm(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)km.call(e,r)&&!Tm.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var a=Array(l),u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:_s,type:t,key:s,ref:o,props:i,_owner:bc.current}}function Pw(t,e){return{$$typeof:_s,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Fc(t){return typeof t=="object"&&t!==null&&t.$$typeof===_s}function xw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Fh=/\/+/g;function ma(t,e){return typeof t=="object"&&t!==null&&t.key!=null?xw(""+t.key):e.toString(36)}function oo(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case _s:case yw:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+ma(o,0):r,bh(i)?(n="",t!=null&&(n=t.replace(Fh,"$&/")+"/"),oo(i,e,n,"",function(u){return u})):i!=null&&(Fc(i)&&(i=Pw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Fh,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",bh(t))for(var l=0;l<t.length;l++){s=t[l];var a=r+ma(s,l);o+=oo(s,e,n,a,i)}else if(a=Rw(t),typeof a=="function")for(t=a.call(t),l=0;!(s=t.next()).done;)s=s.value,a=r+ma(s,l++),o+=oo(s,e,n,a,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Fs(t,e,n){if(t==null)return t;var r=[],i=0;return oo(t,r,"","",function(s){return e.call(n,s,i++)}),r}function Aw(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var Ae={current:null},lo={transition:null},Ow={ReactCurrentDispatcher:Ae,ReactCurrentBatchConfig:lo,ReactCurrentOwner:bc};function Rm(){throw Error("act(...) is not supported in production builds of React.")}j.Children={map:Fs,forEach:function(t,e,n){Fs(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Fs(t,function(){e++}),e},toArray:function(t){return Fs(t,function(e){return e})||[]},only:function(t){if(!Fc(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};j.Component=Xr;j.Fragment=vw;j.Profiler=Sw;j.PureComponent=Mc;j.StrictMode=ww;j.Suspense=kw;j.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ow;j.act=Rm;j.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Em({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=bc.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(a in e)km.call(e,a)&&!Tm.hasOwnProperty(a)&&(r[a]=e[a]===void 0&&l!==void 0?l[a]:e[a])}var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){l=Array(a);for(var u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:_s,type:t.type,key:i,ref:s,props:r,_owner:o}};j.createContext=function(t){return t={$$typeof:Cw,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:Ew,_context:t},t.Consumer=t};j.createElement=Nm;j.createFactory=function(t){var e=Nm.bind(null,t);return e.type=t,e};j.createRef=function(){return{current:null}};j.forwardRef=function(t){return{$$typeof:Iw,render:t}};j.isValidElement=Fc;j.lazy=function(t){return{$$typeof:Nw,_payload:{_status:-1,_result:t},_init:Aw}};j.memo=function(t,e){return{$$typeof:Tw,type:t,compare:e===void 0?null:e}};j.startTransition=function(t){var e=lo.transition;lo.transition={};try{t()}finally{lo.transition=e}};j.unstable_act=Rm;j.useCallback=function(t,e){return Ae.current.useCallback(t,e)};j.useContext=function(t){return Ae.current.useContext(t)};j.useDebugValue=function(){};j.useDeferredValue=function(t){return Ae.current.useDeferredValue(t)};j.useEffect=function(t,e){return Ae.current.useEffect(t,e)};j.useId=function(){return Ae.current.useId()};j.useImperativeHandle=function(t,e,n){return Ae.current.useImperativeHandle(t,e,n)};j.useInsertionEffect=function(t,e){return Ae.current.useInsertionEffect(t,e)};j.useLayoutEffect=function(t,e){return Ae.current.useLayoutEffect(t,e)};j.useMemo=function(t,e){return Ae.current.useMemo(t,e)};j.useReducer=function(t,e,n){return Ae.current.useReducer(t,e,n)};j.useRef=function(t){return Ae.current.useRef(t)};j.useState=function(t){return Ae.current.useState(t)};j.useSyncExternalStore=function(t,e,n){return Ae.current.useSyncExternalStore(t,e,n)};j.useTransition=function(){return Ae.current.useTransition()};j.version="18.3.1";wm.exports=j;var X=wm.exports;const Dw=_w(X);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Mw=X,Lw=Symbol.for("react.element"),bw=Symbol.for("react.fragment"),Fw=Object.prototype.hasOwnProperty,Uw=Mw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,jw={key:!0,ref:!0,__self:!0,__source:!0};function Pm(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)Fw.call(e,r)&&!jw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Lw,type:t,key:s,ref:o,props:i,_owner:Uw.current}}Pl.Fragment=bw;Pl.jsx=Pm;Pl.jsxs=Pm;vm.exports=Pl;var _=vm.exports,xm={exports:{}},Qe={},Am={exports:{}},Om={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,D){var L=P.length;P.push(D);e:for(;0<L;){var re=L-1>>>1,ce=P[re];if(0<i(ce,D))P[re]=D,P[L]=ce,L=re;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var D=P[0],L=P.pop();if(L!==D){P[0]=L;e:for(var re=0,ce=P.length,Ls=ce>>>1;re<Ls;){var An=2*(re+1)-1,pa=P[An],On=An+1,bs=P[On];if(0>i(pa,L))On<ce&&0>i(bs,pa)?(P[re]=bs,P[On]=L,re=On):(P[re]=pa,P[An]=L,re=An);else if(On<ce&&0>i(bs,L))P[re]=bs,P[On]=L,re=On;else break e}}return D}function i(P,D){var L=P.sortIndex-D.sortIndex;return L!==0?L:P.id-D.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}var a=[],u=[],c=1,d=null,h=3,m=!1,y=!1,w=!1,T=typeof setTimeout=="function"?setTimeout:null,p=typeof clearTimeout=="function"?clearTimeout:null,f=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function g(P){for(var D=n(u);D!==null;){if(D.callback===null)r(u);else if(D.startTime<=P)r(u),D.sortIndex=D.expirationTime,e(a,D);else break;D=n(u)}}function v(P){if(w=!1,g(P),!y)if(n(a)!==null)y=!0,ha(E);else{var D=n(u);D!==null&&fa(v,D.startTime-P)}}function E(P,D){y=!1,w&&(w=!1,p(N),N=-1),m=!0;var L=h;try{for(g(D),d=n(a);d!==null&&(!(d.expirationTime>D)||P&&!We());){var re=d.callback;if(typeof re=="function"){d.callback=null,h=d.priorityLevel;var ce=re(d.expirationTime<=D);D=t.unstable_now(),typeof ce=="function"?d.callback=ce:d===n(a)&&r(a),g(D)}else r(a);d=n(a)}if(d!==null)var Ls=!0;else{var An=n(u);An!==null&&fa(v,An.startTime-D),Ls=!1}return Ls}finally{d=null,h=L,m=!1}}var I=!1,k=null,N=-1,O=5,M=-1;function We(){return!(t.unstable_now()-M<O)}function li(){if(k!==null){var P=t.unstable_now();M=P;var D=!0;try{D=k(!0,P)}finally{D?ai():(I=!1,k=null)}}else I=!1}var ai;if(typeof f=="function")ai=function(){f(li)};else if(typeof MessageChannel<"u"){var Mh=new MessageChannel,gw=Mh.port2;Mh.port1.onmessage=li,ai=function(){gw.postMessage(null)}}else ai=function(){T(li,0)};function ha(P){k=P,I||(I=!0,ai())}function fa(P,D){N=T(function(){P(t.unstable_now())},D)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){y||m||(y=!0,ha(E))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):O=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(a)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var D=3;break;default:D=h}var L=h;h=D;try{return P()}finally{h=L}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,D){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var L=h;h=P;try{return D()}finally{h=L}},t.unstable_scheduleCallback=function(P,D,L){var re=t.unstable_now();switch(typeof L=="object"&&L!==null?(L=L.delay,L=typeof L=="number"&&0<L?re+L:re):L=re,P){case 1:var ce=-1;break;case 2:ce=250;break;case 5:ce=1073741823;break;case 4:ce=1e4;break;default:ce=5e3}return ce=L+ce,P={id:c++,callback:D,priorityLevel:P,startTime:L,expirationTime:ce,sortIndex:-1},L>re?(P.sortIndex=L,e(u,P),n(a)===null&&P===n(u)&&(w?(p(N),N=-1):w=!0,fa(v,L-re))):(P.sortIndex=ce,e(a,P),y||m||(y=!0,ha(E))),P},t.unstable_shouldYield=We,t.unstable_wrapCallback=function(P){var D=h;return function(){var L=h;h=D;try{return P.apply(this,arguments)}finally{h=L}}}})(Om);Am.exports=Om;var zw=Am.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bw=X,Ke=zw;function S(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Dm=new Set,Bi={};function ir(t,e){br(t,e),br(t+"Capture",e)}function br(t,e){for(Bi[t]=e,t=0;t<e.length;t++)Dm.add(e[t])}var jt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),uu=Object.prototype.hasOwnProperty,Ww=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Uh={},jh={};function Vw(t){return uu.call(jh,t)?!0:uu.call(Uh,t)?!1:Ww.test(t)?jh[t]=!0:(Uh[t]=!0,!1)}function $w(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Hw(t,e,n,r){if(e===null||typeof e>"u"||$w(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Oe(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Se={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Se[t]=new Oe(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Se[e]=new Oe(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Se[t]=new Oe(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Se[t]=new Oe(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Se[t]=new Oe(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Se[t]=new Oe(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Se[t]=new Oe(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Se[t]=new Oe(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Se[t]=new Oe(t,5,!1,t.toLowerCase(),null,!1,!1)});var Uc=/[\-:]([a-z])/g;function jc(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Uc,jc);Se[e]=new Oe(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Uc,jc);Se[e]=new Oe(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Uc,jc);Se[e]=new Oe(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Se[t]=new Oe(t,1,!1,t.toLowerCase(),null,!1,!1)});Se.xlinkHref=new Oe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Se[t]=new Oe(t,1,!1,t.toLowerCase(),null,!0,!0)});function zc(t,e,n,r){var i=Se.hasOwnProperty(e)?Se[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Hw(e,n,i,r)&&(n=null),r||i===null?Vw(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var qt=Bw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Us=Symbol.for("react.element"),dr=Symbol.for("react.portal"),hr=Symbol.for("react.fragment"),Bc=Symbol.for("react.strict_mode"),cu=Symbol.for("react.profiler"),Mm=Symbol.for("react.provider"),Lm=Symbol.for("react.context"),Wc=Symbol.for("react.forward_ref"),du=Symbol.for("react.suspense"),hu=Symbol.for("react.suspense_list"),Vc=Symbol.for("react.memo"),Jt=Symbol.for("react.lazy"),bm=Symbol.for("react.offscreen"),zh=Symbol.iterator;function ui(t){return t===null||typeof t!="object"?null:(t=zh&&t[zh]||t["@@iterator"],typeof t=="function"?t:null)}var ee=Object.assign,ga;function Si(t){if(ga===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ga=e&&e[1]||""}return`
`+ga+t}var _a=!1;function ya(t,e){if(!t||_a)return"";_a=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l]){var a=`
`+i[o].replace(" at new "," at ");return t.displayName&&a.includes("<anonymous>")&&(a=a.replace("<anonymous>",t.displayName)),a}while(1<=o&&0<=l);break}}}finally{_a=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Si(t):""}function Gw(t){switch(t.tag){case 5:return Si(t.type);case 16:return Si("Lazy");case 13:return Si("Suspense");case 19:return Si("SuspenseList");case 0:case 2:case 15:return t=ya(t.type,!1),t;case 11:return t=ya(t.type.render,!1),t;case 1:return t=ya(t.type,!0),t;default:return""}}function fu(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case hr:return"Fragment";case dr:return"Portal";case cu:return"Profiler";case Bc:return"StrictMode";case du:return"Suspense";case hu:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Lm:return(t.displayName||"Context")+".Consumer";case Mm:return(t._context.displayName||"Context")+".Provider";case Wc:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Vc:return e=t.displayName||null,e!==null?e:fu(t.type)||"Memo";case Jt:e=t._payload,t=t._init;try{return fu(t(e))}catch{}}return null}function Kw(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fu(e);case 8:return e===Bc?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Sn(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function Fm(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function qw(t){var e=Fm(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function js(t){t._valueTracker||(t._valueTracker=qw(t))}function Um(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Fm(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function No(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function pu(t,e){var n=e.checked;return ee({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Bh(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=Sn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function jm(t,e){e=e.checked,e!=null&&zc(t,"checked",e,!1)}function mu(t,e){jm(t,e);var n=Sn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?gu(t,e.type,n):e.hasOwnProperty("defaultValue")&&gu(t,e.type,Sn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Wh(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function gu(t,e,n){(e!=="number"||No(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Ei=Array.isArray;function Ir(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+Sn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function _u(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(S(91));return ee({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Vh(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(S(92));if(Ei(n)){if(1<n.length)throw Error(S(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Sn(n)}}function zm(t,e){var n=Sn(e.value),r=Sn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function $h(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Bm(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yu(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Bm(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var zs,Wm=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(zs=zs||document.createElement("div"),zs.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=zs.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Wi(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ti={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qw=["Webkit","ms","Moz","O"];Object.keys(Ti).forEach(function(t){Qw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ti[e]=Ti[t]})});function Vm(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ti.hasOwnProperty(t)&&Ti[t]?(""+e).trim():e+"px"}function $m(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Vm(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Yw=ee({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vu(t,e){if(e){if(Yw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(S(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(S(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(S(61))}if(e.style!=null&&typeof e.style!="object")throw Error(S(62))}}function wu(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Su=null;function $c(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Eu=null,kr=null,Tr=null;function Hh(t){if(t=ws(t)){if(typeof Eu!="function")throw Error(S(280));var e=t.stateNode;e&&(e=Ml(e),Eu(t.stateNode,t.type,e))}}function Hm(t){kr?Tr?Tr.push(t):Tr=[t]:kr=t}function Gm(){if(kr){var t=kr,e=Tr;if(Tr=kr=null,Hh(t),e)for(t=0;t<e.length;t++)Hh(e[t])}}function Km(t,e){return t(e)}function qm(){}var va=!1;function Qm(t,e,n){if(va)return t(e,n);va=!0;try{return Km(t,e,n)}finally{va=!1,(kr!==null||Tr!==null)&&(qm(),Gm())}}function Vi(t,e){var n=t.stateNode;if(n===null)return null;var r=Ml(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(S(231,e,typeof n));return n}var Cu=!1;if(jt)try{var ci={};Object.defineProperty(ci,"passive",{get:function(){Cu=!0}}),window.addEventListener("test",ci,ci),window.removeEventListener("test",ci,ci)}catch{Cu=!1}function Xw(t,e,n,r,i,s,o,l,a){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(c){this.onError(c)}}var Ni=!1,Ro=null,Po=!1,Iu=null,Jw={onError:function(t){Ni=!0,Ro=t}};function Zw(t,e,n,r,i,s,o,l,a){Ni=!1,Ro=null,Xw.apply(Jw,arguments)}function e0(t,e,n,r,i,s,o,l,a){if(Zw.apply(this,arguments),Ni){if(Ni){var u=Ro;Ni=!1,Ro=null}else throw Error(S(198));Po||(Po=!0,Iu=u)}}function sr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Ym(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Gh(t){if(sr(t)!==t)throw Error(S(188))}function t0(t){var e=t.alternate;if(!e){if(e=sr(t),e===null)throw Error(S(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Gh(i),t;if(s===r)return Gh(i),e;s=s.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?t:e}function Xm(t){return t=t0(t),t!==null?Jm(t):null}function Jm(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Jm(t);if(e!==null)return e;t=t.sibling}return null}var Zm=Ke.unstable_scheduleCallback,Kh=Ke.unstable_cancelCallback,n0=Ke.unstable_shouldYield,r0=Ke.unstable_requestPaint,ie=Ke.unstable_now,i0=Ke.unstable_getCurrentPriorityLevel,Hc=Ke.unstable_ImmediatePriority,eg=Ke.unstable_UserBlockingPriority,xo=Ke.unstable_NormalPriority,s0=Ke.unstable_LowPriority,tg=Ke.unstable_IdlePriority,xl=null,St=null;function o0(t){if(St&&typeof St.onCommitFiberRoot=="function")try{St.onCommitFiberRoot(xl,t,void 0,(t.current.flags&128)===128)}catch{}}var ft=Math.clz32?Math.clz32:u0,l0=Math.log,a0=Math.LN2;function u0(t){return t>>>=0,t===0?32:31-(l0(t)/a0|0)|0}var Bs=64,Ws=4194304;function Ci(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Ao(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var l=o&~i;l!==0?r=Ci(l):(s&=o,s!==0&&(r=Ci(s)))}else o=n&~i,o!==0?r=Ci(o):s!==0&&(r=Ci(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-ft(e),i=1<<n,r|=t[n],e&=~i;return r}function c0(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function d0(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-ft(s),l=1<<o,a=i[o];a===-1?(!(l&n)||l&r)&&(i[o]=c0(l,e)):a<=e&&(t.expiredLanes|=l),s&=~l}}function ku(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function ng(){var t=Bs;return Bs<<=1,!(Bs&4194240)&&(Bs=64),t}function wa(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function ys(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-ft(e),t[e]=n}function h0(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-ft(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function Gc(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-ft(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var W=0;function rg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var ig,Kc,sg,og,lg,Tu=!1,Vs=[],an=null,un=null,cn=null,$i=new Map,Hi=new Map,en=[],f0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qh(t,e){switch(t){case"focusin":case"focusout":an=null;break;case"dragenter":case"dragleave":un=null;break;case"mouseover":case"mouseout":cn=null;break;case"pointerover":case"pointerout":$i.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hi.delete(e.pointerId)}}function di(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ws(e),e!==null&&Kc(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function p0(t,e,n,r,i){switch(e){case"focusin":return an=di(an,t,e,n,r,i),!0;case"dragenter":return un=di(un,t,e,n,r,i),!0;case"mouseover":return cn=di(cn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return $i.set(s,di($i.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Hi.set(s,di(Hi.get(s)||null,t,e,n,r,i)),!0}return!1}function ag(t){var e=Fn(t.target);if(e!==null){var n=sr(e);if(n!==null){if(e=n.tag,e===13){if(e=Ym(n),e!==null){t.blockedOn=e,lg(t.priority,function(){sg(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ao(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Nu(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);Su=r,n.target.dispatchEvent(r),Su=null}else return e=ws(n),e!==null&&Kc(e),t.blockedOn=n,!1;e.shift()}return!0}function Qh(t,e,n){ao(t)&&n.delete(e)}function m0(){Tu=!1,an!==null&&ao(an)&&(an=null),un!==null&&ao(un)&&(un=null),cn!==null&&ao(cn)&&(cn=null),$i.forEach(Qh),Hi.forEach(Qh)}function hi(t,e){t.blockedOn===e&&(t.blockedOn=null,Tu||(Tu=!0,Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority,m0)))}function Gi(t){function e(i){return hi(i,t)}if(0<Vs.length){hi(Vs[0],t);for(var n=1;n<Vs.length;n++){var r=Vs[n];r.blockedOn===t&&(r.blockedOn=null)}}for(an!==null&&hi(an,t),un!==null&&hi(un,t),cn!==null&&hi(cn,t),$i.forEach(e),Hi.forEach(e),n=0;n<en.length;n++)r=en[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<en.length&&(n=en[0],n.blockedOn===null);)ag(n),n.blockedOn===null&&en.shift()}var Nr=qt.ReactCurrentBatchConfig,Oo=!0;function g0(t,e,n,r){var i=W,s=Nr.transition;Nr.transition=null;try{W=1,qc(t,e,n,r)}finally{W=i,Nr.transition=s}}function _0(t,e,n,r){var i=W,s=Nr.transition;Nr.transition=null;try{W=4,qc(t,e,n,r)}finally{W=i,Nr.transition=s}}function qc(t,e,n,r){if(Oo){var i=Nu(t,e,n,r);if(i===null)xa(t,e,r,Do,n),qh(t,r);else if(p0(i,t,e,n,r))r.stopPropagation();else if(qh(t,r),e&4&&-1<f0.indexOf(t)){for(;i!==null;){var s=ws(i);if(s!==null&&ig(s),s=Nu(t,e,n,r),s===null&&xa(t,e,r,Do,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else xa(t,e,r,null,n)}}var Do=null;function Nu(t,e,n,r){if(Do=null,t=$c(r),t=Fn(t),t!==null)if(e=sr(t),e===null)t=null;else if(n=e.tag,n===13){if(t=Ym(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Do=t,null}function ug(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(i0()){case Hc:return 1;case eg:return 4;case xo:case s0:return 16;case tg:return 536870912;default:return 16}default:return 16}}var on=null,Qc=null,uo=null;function cg(){if(uo)return uo;var t,e=Qc,n=e.length,r,i="value"in on?on.value:on.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return uo=i.slice(t,1<r?1-r:void 0)}function co(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function $s(){return!0}function Yh(){return!1}function Ye(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?$s:Yh,this.isPropagationStopped=Yh,this}return ee(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$s)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$s)},persist:function(){},isPersistent:$s}),e}var Jr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Yc=Ye(Jr),vs=ee({},Jr,{view:0,detail:0}),y0=Ye(vs),Sa,Ea,fi,Al=ee({},vs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Xc,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==fi&&(fi&&t.type==="mousemove"?(Sa=t.screenX-fi.screenX,Ea=t.screenY-fi.screenY):Ea=Sa=0,fi=t),Sa)},movementY:function(t){return"movementY"in t?t.movementY:Ea}}),Xh=Ye(Al),v0=ee({},Al,{dataTransfer:0}),w0=Ye(v0),S0=ee({},vs,{relatedTarget:0}),Ca=Ye(S0),E0=ee({},Jr,{animationName:0,elapsedTime:0,pseudoElement:0}),C0=Ye(E0),I0=ee({},Jr,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),k0=Ye(I0),T0=ee({},Jr,{data:0}),Jh=Ye(T0),N0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},R0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},P0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x0(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=P0[t])?!!e[t]:!1}function Xc(){return x0}var A0=ee({},vs,{key:function(t){if(t.key){var e=N0[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=co(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?R0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Xc,charCode:function(t){return t.type==="keypress"?co(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?co(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),O0=Ye(A0),D0=ee({},Al,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zh=Ye(D0),M0=ee({},vs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Xc}),L0=Ye(M0),b0=ee({},Jr,{propertyName:0,elapsedTime:0,pseudoElement:0}),F0=Ye(b0),U0=ee({},Al,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),j0=Ye(U0),z0=[9,13,27,32],Jc=jt&&"CompositionEvent"in window,Ri=null;jt&&"documentMode"in document&&(Ri=document.documentMode);var B0=jt&&"TextEvent"in window&&!Ri,dg=jt&&(!Jc||Ri&&8<Ri&&11>=Ri),ef=" ",tf=!1;function hg(t,e){switch(t){case"keyup":return z0.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function fg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var fr=!1;function W0(t,e){switch(t){case"compositionend":return fg(e);case"keypress":return e.which!==32?null:(tf=!0,ef);case"textInput":return t=e.data,t===ef&&tf?null:t;default:return null}}function V0(t,e){if(fr)return t==="compositionend"||!Jc&&hg(t,e)?(t=cg(),uo=Qc=on=null,fr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return dg&&e.locale!=="ko"?null:e.data;default:return null}}var $0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!$0[t.type]:e==="textarea"}function pg(t,e,n,r){Hm(r),e=Mo(e,"onChange"),0<e.length&&(n=new Yc("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var Pi=null,Ki=null;function H0(t){kg(t,0)}function Ol(t){var e=gr(t);if(Um(e))return t}function G0(t,e){if(t==="change")return e}var mg=!1;if(jt){var Ia;if(jt){var ka="oninput"in document;if(!ka){var rf=document.createElement("div");rf.setAttribute("oninput","return;"),ka=typeof rf.oninput=="function"}Ia=ka}else Ia=!1;mg=Ia&&(!document.documentMode||9<document.documentMode)}function sf(){Pi&&(Pi.detachEvent("onpropertychange",gg),Ki=Pi=null)}function gg(t){if(t.propertyName==="value"&&Ol(Ki)){var e=[];pg(e,Ki,t,$c(t)),Qm(H0,e)}}function K0(t,e,n){t==="focusin"?(sf(),Pi=e,Ki=n,Pi.attachEvent("onpropertychange",gg)):t==="focusout"&&sf()}function q0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return Ol(Ki)}function Q0(t,e){if(t==="click")return Ol(e)}function Y0(t,e){if(t==="input"||t==="change")return Ol(e)}function X0(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var _t=typeof Object.is=="function"?Object.is:X0;function qi(t,e){if(_t(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!uu.call(e,i)||!_t(t[i],e[i]))return!1}return!0}function of(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function lf(t,e){var n=of(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=of(n)}}function _g(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?_g(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function yg(){for(var t=window,e=No();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=No(t.document)}return e}function Zc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function J0(t){var e=yg(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&_g(n.ownerDocument.documentElement,n)){if(r!==null&&Zc(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=lf(n,s);var o=lf(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Z0=jt&&"documentMode"in document&&11>=document.documentMode,pr=null,Ru=null,xi=null,Pu=!1;function af(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Pu||pr==null||pr!==No(r)||(r=pr,"selectionStart"in r&&Zc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),xi&&qi(xi,r)||(xi=r,r=Mo(Ru,"onSelect"),0<r.length&&(e=new Yc("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=pr)))}function Hs(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var mr={animationend:Hs("Animation","AnimationEnd"),animationiteration:Hs("Animation","AnimationIteration"),animationstart:Hs("Animation","AnimationStart"),transitionend:Hs("Transition","TransitionEnd")},Ta={},vg={};jt&&(vg=document.createElement("div").style,"AnimationEvent"in window||(delete mr.animationend.animation,delete mr.animationiteration.animation,delete mr.animationstart.animation),"TransitionEvent"in window||delete mr.transitionend.transition);function Dl(t){if(Ta[t])return Ta[t];if(!mr[t])return t;var e=mr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in vg)return Ta[t]=e[n];return t}var wg=Dl("animationend"),Sg=Dl("animationiteration"),Eg=Dl("animationstart"),Cg=Dl("transitionend"),Ig=new Map,uf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Tn(t,e){Ig.set(t,e),ir(e,[t])}for(var Na=0;Na<uf.length;Na++){var Ra=uf[Na],eS=Ra.toLowerCase(),tS=Ra[0].toUpperCase()+Ra.slice(1);Tn(eS,"on"+tS)}Tn(wg,"onAnimationEnd");Tn(Sg,"onAnimationIteration");Tn(Eg,"onAnimationStart");Tn("dblclick","onDoubleClick");Tn("focusin","onFocus");Tn("focusout","onBlur");Tn(Cg,"onTransitionEnd");br("onMouseEnter",["mouseout","mouseover"]);br("onMouseLeave",["mouseout","mouseover"]);br("onPointerEnter",["pointerout","pointerover"]);br("onPointerLeave",["pointerout","pointerover"]);ir("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ir("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ir("onBeforeInput",["compositionend","keypress","textInput","paste"]);ir("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ir("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Ii="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),nS=new Set("cancel close invalid load scroll toggle".split(" ").concat(Ii));function cf(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,e0(r,e,void 0,t),t.currentTarget=null}function kg(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],a=l.instance,u=l.currentTarget;if(l=l.listener,a!==s&&i.isPropagationStopped())break e;cf(i,l,u),s=a}else for(o=0;o<r.length;o++){if(l=r[o],a=l.instance,u=l.currentTarget,l=l.listener,a!==s&&i.isPropagationStopped())break e;cf(i,l,u),s=a}}}if(Po)throw t=Iu,Po=!1,Iu=null,t}function K(t,e){var n=e[Mu];n===void 0&&(n=e[Mu]=new Set);var r=t+"__bubble";n.has(r)||(Tg(e,t,2,!1),n.add(r))}function Pa(t,e,n){var r=0;e&&(r|=4),Tg(n,t,r,e)}var Gs="_reactListening"+Math.random().toString(36).slice(2);function Qi(t){if(!t[Gs]){t[Gs]=!0,Dm.forEach(function(n){n!=="selectionchange"&&(nS.has(n)||Pa(n,!1,t),Pa(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Gs]||(e[Gs]=!0,Pa("selectionchange",!1,e))}}function Tg(t,e,n,r){switch(ug(e)){case 1:var i=g0;break;case 4:i=_0;break;default:i=qc}n=i.bind(null,e,n,t),i=void 0,!Cu||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function xa(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var a=o.tag;if((a===3||a===4)&&(a=o.stateNode.containerInfo,a===i||a.nodeType===8&&a.parentNode===i))return;o=o.return}for(;l!==null;){if(o=Fn(l),o===null)return;if(a=o.tag,a===5||a===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Qm(function(){var u=s,c=$c(n),d=[];e:{var h=Ig.get(t);if(h!==void 0){var m=Yc,y=t;switch(t){case"keypress":if(co(n)===0)break e;case"keydown":case"keyup":m=O0;break;case"focusin":y="focus",m=Ca;break;case"focusout":y="blur",m=Ca;break;case"beforeblur":case"afterblur":m=Ca;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":m=Xh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":m=w0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":m=L0;break;case wg:case Sg:case Eg:m=C0;break;case Cg:m=F0;break;case"scroll":m=y0;break;case"wheel":m=j0;break;case"copy":case"cut":case"paste":m=k0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":m=Zh}var w=(e&4)!==0,T=!w&&t==="scroll",p=w?h!==null?h+"Capture":null:h;w=[];for(var f=u,g;f!==null;){g=f;var v=g.stateNode;if(g.tag===5&&v!==null&&(g=v,p!==null&&(v=Vi(f,p),v!=null&&w.push(Yi(f,v,g)))),T)break;f=f.return}0<w.length&&(h=new m(h,y,null,n,c),d.push({event:h,listeners:w}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",m=t==="mouseout"||t==="pointerout",h&&n!==Su&&(y=n.relatedTarget||n.fromElement)&&(Fn(y)||y[zt]))break e;if((m||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,m?(y=n.relatedTarget||n.toElement,m=u,y=y?Fn(y):null,y!==null&&(T=sr(y),y!==T||y.tag!==5&&y.tag!==6)&&(y=null)):(m=null,y=u),m!==y)){if(w=Xh,v="onMouseLeave",p="onMouseEnter",f="mouse",(t==="pointerout"||t==="pointerover")&&(w=Zh,v="onPointerLeave",p="onPointerEnter",f="pointer"),T=m==null?h:gr(m),g=y==null?h:gr(y),h=new w(v,f+"leave",m,n,c),h.target=T,h.relatedTarget=g,v=null,Fn(c)===u&&(w=new w(p,f+"enter",y,n,c),w.target=g,w.relatedTarget=T,v=w),T=v,m&&y)t:{for(w=m,p=y,f=0,g=w;g;g=ar(g))f++;for(g=0,v=p;v;v=ar(v))g++;for(;0<f-g;)w=ar(w),f--;for(;0<g-f;)p=ar(p),g--;for(;f--;){if(w===p||p!==null&&w===p.alternate)break t;w=ar(w),p=ar(p)}w=null}else w=null;m!==null&&df(d,h,m,w,!1),y!==null&&T!==null&&df(d,T,y,w,!0)}}e:{if(h=u?gr(u):window,m=h.nodeName&&h.nodeName.toLowerCase(),m==="select"||m==="input"&&h.type==="file")var E=G0;else if(nf(h))if(mg)E=Y0;else{E=q0;var I=K0}else(m=h.nodeName)&&m.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=Q0);if(E&&(E=E(t,u))){pg(d,E,n,c);break e}I&&I(t,h,u),t==="focusout"&&(I=h._wrapperState)&&I.controlled&&h.type==="number"&&gu(h,"number",h.value)}switch(I=u?gr(u):window,t){case"focusin":(nf(I)||I.contentEditable==="true")&&(pr=I,Ru=u,xi=null);break;case"focusout":xi=Ru=pr=null;break;case"mousedown":Pu=!0;break;case"contextmenu":case"mouseup":case"dragend":Pu=!1,af(d,n,c);break;case"selectionchange":if(Z0)break;case"keydown":case"keyup":af(d,n,c)}var k;if(Jc)e:{switch(t){case"compositionstart":var N="onCompositionStart";break e;case"compositionend":N="onCompositionEnd";break e;case"compositionupdate":N="onCompositionUpdate";break e}N=void 0}else fr?hg(t,n)&&(N="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(N="onCompositionStart");N&&(dg&&n.locale!=="ko"&&(fr||N!=="onCompositionStart"?N==="onCompositionEnd"&&fr&&(k=cg()):(on=c,Qc="value"in on?on.value:on.textContent,fr=!0)),I=Mo(u,N),0<I.length&&(N=new Jh(N,t,null,n,c),d.push({event:N,listeners:I}),k?N.data=k:(k=fg(n),k!==null&&(N.data=k)))),(k=B0?W0(t,n):V0(t,n))&&(u=Mo(u,"onBeforeInput"),0<u.length&&(c=new Jh("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=k))}kg(d,e)})}function Yi(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Mo(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Vi(t,n),s!=null&&r.unshift(Yi(t,s,i)),s=Vi(t,e),s!=null&&r.push(Yi(t,s,i))),t=t.return}return r}function ar(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function df(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,a=l.alternate,u=l.stateNode;if(a!==null&&a===r)break;l.tag===5&&u!==null&&(l=u,i?(a=Vi(n,s),a!=null&&o.unshift(Yi(n,a,l))):i||(a=Vi(n,s),a!=null&&o.push(Yi(n,a,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var rS=/\r\n?/g,iS=/\u0000|\uFFFD/g;function hf(t){return(typeof t=="string"?t:""+t).replace(rS,`
`).replace(iS,"")}function Ks(t,e,n){if(e=hf(e),hf(t)!==e&&n)throw Error(S(425))}function Lo(){}var xu=null,Au=null;function Ou(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Du=typeof setTimeout=="function"?setTimeout:void 0,sS=typeof clearTimeout=="function"?clearTimeout:void 0,ff=typeof Promise=="function"?Promise:void 0,oS=typeof queueMicrotask=="function"?queueMicrotask:typeof ff<"u"?function(t){return ff.resolve(null).then(t).catch(lS)}:Du;function lS(t){setTimeout(function(){throw t})}function Aa(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),Gi(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);Gi(e)}function dn(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function pf(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Zr=Math.random().toString(36).slice(2),wt="__reactFiber$"+Zr,Xi="__reactProps$"+Zr,zt="__reactContainer$"+Zr,Mu="__reactEvents$"+Zr,aS="__reactListeners$"+Zr,uS="__reactHandles$"+Zr;function Fn(t){var e=t[wt];if(e)return e;for(var n=t.parentNode;n;){if(e=n[zt]||n[wt]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=pf(t);t!==null;){if(n=t[wt])return n;t=pf(t)}return e}t=n,n=t.parentNode}return null}function ws(t){return t=t[wt]||t[zt],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function gr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(S(33))}function Ml(t){return t[Xi]||null}var Lu=[],_r=-1;function Nn(t){return{current:t}}function Q(t){0>_r||(t.current=Lu[_r],Lu[_r]=null,_r--)}function G(t,e){_r++,Lu[_r]=t.current,t.current=e}var En={},Te=Nn(En),Fe=Nn(!1),Gn=En;function Fr(t,e){var n=t.type.contextTypes;if(!n)return En;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Ue(t){return t=t.childContextTypes,t!=null}function bo(){Q(Fe),Q(Te)}function mf(t,e,n){if(Te.current!==En)throw Error(S(168));G(Te,e),G(Fe,n)}function Ng(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(S(108,Kw(t)||"Unknown",i));return ee({},n,r)}function Fo(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||En,Gn=Te.current,G(Te,t),G(Fe,Fe.current),!0}function gf(t,e,n){var r=t.stateNode;if(!r)throw Error(S(169));n?(t=Ng(t,e,Gn),r.__reactInternalMemoizedMergedChildContext=t,Q(Fe),Q(Te),G(Te,t)):Q(Fe),G(Fe,n)}var Nt=null,Ll=!1,Oa=!1;function Rg(t){Nt===null?Nt=[t]:Nt.push(t)}function cS(t){Ll=!0,Rg(t)}function Rn(){if(!Oa&&Nt!==null){Oa=!0;var t=0,e=W;try{var n=Nt;for(W=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Nt=null,Ll=!1}catch(i){throw Nt!==null&&(Nt=Nt.slice(t+1)),Zm(Hc,Rn),i}finally{W=e,Oa=!1}}return null}var yr=[],vr=0,Uo=null,jo=0,Je=[],Ze=0,Kn=null,xt=1,At="";function Dn(t,e){yr[vr++]=jo,yr[vr++]=Uo,Uo=t,jo=e}function Pg(t,e,n){Je[Ze++]=xt,Je[Ze++]=At,Je[Ze++]=Kn,Kn=t;var r=xt;t=At;var i=32-ft(r)-1;r&=~(1<<i),n+=1;var s=32-ft(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,xt=1<<32-ft(e)+i|n<<i|r,At=s+t}else xt=1<<s|n<<i|r,At=t}function ed(t){t.return!==null&&(Dn(t,1),Pg(t,1,0))}function td(t){for(;t===Uo;)Uo=yr[--vr],yr[vr]=null,jo=yr[--vr],yr[vr]=null;for(;t===Kn;)Kn=Je[--Ze],Je[Ze]=null,At=Je[--Ze],Je[Ze]=null,xt=Je[--Ze],Je[Ze]=null}var Ge=null,$e=null,Y=!1,at=null;function xg(t,e){var n=et(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function _f(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Ge=t,$e=dn(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Ge=t,$e=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=Kn!==null?{id:xt,overflow:At}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=et(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Ge=t,$e=null,!0):!1;default:return!1}}function bu(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Fu(t){if(Y){var e=$e;if(e){var n=e;if(!_f(t,e)){if(bu(t))throw Error(S(418));e=dn(n.nextSibling);var r=Ge;e&&_f(t,e)?xg(r,n):(t.flags=t.flags&-4097|2,Y=!1,Ge=t)}}else{if(bu(t))throw Error(S(418));t.flags=t.flags&-4097|2,Y=!1,Ge=t}}}function yf(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Ge=t}function qs(t){if(t!==Ge)return!1;if(!Y)return yf(t),Y=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Ou(t.type,t.memoizedProps)),e&&(e=$e)){if(bu(t))throw Ag(),Error(S(418));for(;e;)xg(t,e),e=dn(e.nextSibling)}if(yf(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(S(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){$e=dn(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}$e=null}}else $e=Ge?dn(t.stateNode.nextSibling):null;return!0}function Ag(){for(var t=$e;t;)t=dn(t.nextSibling)}function Ur(){$e=Ge=null,Y=!1}function nd(t){at===null?at=[t]:at.push(t)}var dS=qt.ReactCurrentBatchConfig;function pi(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var l=i.refs;o===null?delete l[s]:l[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,t))}return t}function Qs(t,e){throw t=Object.prototype.toString.call(e),Error(S(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function vf(t){var e=t._init;return e(t._payload)}function Og(t){function e(p,f){if(t){var g=p.deletions;g===null?(p.deletions=[f],p.flags|=16):g.push(f)}}function n(p,f){if(!t)return null;for(;f!==null;)e(p,f),f=f.sibling;return null}function r(p,f){for(p=new Map;f!==null;)f.key!==null?p.set(f.key,f):p.set(f.index,f),f=f.sibling;return p}function i(p,f){return p=mn(p,f),p.index=0,p.sibling=null,p}function s(p,f,g){return p.index=g,t?(g=p.alternate,g!==null?(g=g.index,g<f?(p.flags|=2,f):g):(p.flags|=2,f)):(p.flags|=1048576,f)}function o(p){return t&&p.alternate===null&&(p.flags|=2),p}function l(p,f,g,v){return f===null||f.tag!==6?(f=ja(g,p.mode,v),f.return=p,f):(f=i(f,g),f.return=p,f)}function a(p,f,g,v){var E=g.type;return E===hr?c(p,f,g.props.children,v,g.key):f!==null&&(f.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Jt&&vf(E)===f.type)?(v=i(f,g.props),v.ref=pi(p,f,g),v.return=p,v):(v=yo(g.type,g.key,g.props,null,p.mode,v),v.ref=pi(p,f,g),v.return=p,v)}function u(p,f,g,v){return f===null||f.tag!==4||f.stateNode.containerInfo!==g.containerInfo||f.stateNode.implementation!==g.implementation?(f=za(g,p.mode,v),f.return=p,f):(f=i(f,g.children||[]),f.return=p,f)}function c(p,f,g,v,E){return f===null||f.tag!==7?(f=$n(g,p.mode,v,E),f.return=p,f):(f=i(f,g),f.return=p,f)}function d(p,f,g){if(typeof f=="string"&&f!==""||typeof f=="number")return f=ja(""+f,p.mode,g),f.return=p,f;if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Us:return g=yo(f.type,f.key,f.props,null,p.mode,g),g.ref=pi(p,null,f),g.return=p,g;case dr:return f=za(f,p.mode,g),f.return=p,f;case Jt:var v=f._init;return d(p,v(f._payload),g)}if(Ei(f)||ui(f))return f=$n(f,p.mode,g,null),f.return=p,f;Qs(p,f)}return null}function h(p,f,g,v){var E=f!==null?f.key:null;if(typeof g=="string"&&g!==""||typeof g=="number")return E!==null?null:l(p,f,""+g,v);if(typeof g=="object"&&g!==null){switch(g.$$typeof){case Us:return g.key===E?a(p,f,g,v):null;case dr:return g.key===E?u(p,f,g,v):null;case Jt:return E=g._init,h(p,f,E(g._payload),v)}if(Ei(g)||ui(g))return E!==null?null:c(p,f,g,v,null);Qs(p,g)}return null}function m(p,f,g,v,E){if(typeof v=="string"&&v!==""||typeof v=="number")return p=p.get(g)||null,l(f,p,""+v,E);if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Us:return p=p.get(v.key===null?g:v.key)||null,a(f,p,v,E);case dr:return p=p.get(v.key===null?g:v.key)||null,u(f,p,v,E);case Jt:var I=v._init;return m(p,f,g,I(v._payload),E)}if(Ei(v)||ui(v))return p=p.get(g)||null,c(f,p,v,E,null);Qs(f,v)}return null}function y(p,f,g,v){for(var E=null,I=null,k=f,N=f=0,O=null;k!==null&&N<g.length;N++){k.index>N?(O=k,k=null):O=k.sibling;var M=h(p,k,g[N],v);if(M===null){k===null&&(k=O);break}t&&k&&M.alternate===null&&e(p,k),f=s(M,f,N),I===null?E=M:I.sibling=M,I=M,k=O}if(N===g.length)return n(p,k),Y&&Dn(p,N),E;if(k===null){for(;N<g.length;N++)k=d(p,g[N],v),k!==null&&(f=s(k,f,N),I===null?E=k:I.sibling=k,I=k);return Y&&Dn(p,N),E}for(k=r(p,k);N<g.length;N++)O=m(k,p,N,g[N],v),O!==null&&(t&&O.alternate!==null&&k.delete(O.key===null?N:O.key),f=s(O,f,N),I===null?E=O:I.sibling=O,I=O);return t&&k.forEach(function(We){return e(p,We)}),Y&&Dn(p,N),E}function w(p,f,g,v){var E=ui(g);if(typeof E!="function")throw Error(S(150));if(g=E.call(g),g==null)throw Error(S(151));for(var I=E=null,k=f,N=f=0,O=null,M=g.next();k!==null&&!M.done;N++,M=g.next()){k.index>N?(O=k,k=null):O=k.sibling;var We=h(p,k,M.value,v);if(We===null){k===null&&(k=O);break}t&&k&&We.alternate===null&&e(p,k),f=s(We,f,N),I===null?E=We:I.sibling=We,I=We,k=O}if(M.done)return n(p,k),Y&&Dn(p,N),E;if(k===null){for(;!M.done;N++,M=g.next())M=d(p,M.value,v),M!==null&&(f=s(M,f,N),I===null?E=M:I.sibling=M,I=M);return Y&&Dn(p,N),E}for(k=r(p,k);!M.done;N++,M=g.next())M=m(k,p,N,M.value,v),M!==null&&(t&&M.alternate!==null&&k.delete(M.key===null?N:M.key),f=s(M,f,N),I===null?E=M:I.sibling=M,I=M);return t&&k.forEach(function(li){return e(p,li)}),Y&&Dn(p,N),E}function T(p,f,g,v){if(typeof g=="object"&&g!==null&&g.type===hr&&g.key===null&&(g=g.props.children),typeof g=="object"&&g!==null){switch(g.$$typeof){case Us:e:{for(var E=g.key,I=f;I!==null;){if(I.key===E){if(E=g.type,E===hr){if(I.tag===7){n(p,I.sibling),f=i(I,g.props.children),f.return=p,p=f;break e}}else if(I.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Jt&&vf(E)===I.type){n(p,I.sibling),f=i(I,g.props),f.ref=pi(p,I,g),f.return=p,p=f;break e}n(p,I);break}else e(p,I);I=I.sibling}g.type===hr?(f=$n(g.props.children,p.mode,v,g.key),f.return=p,p=f):(v=yo(g.type,g.key,g.props,null,p.mode,v),v.ref=pi(p,f,g),v.return=p,p=v)}return o(p);case dr:e:{for(I=g.key;f!==null;){if(f.key===I)if(f.tag===4&&f.stateNode.containerInfo===g.containerInfo&&f.stateNode.implementation===g.implementation){n(p,f.sibling),f=i(f,g.children||[]),f.return=p,p=f;break e}else{n(p,f);break}else e(p,f);f=f.sibling}f=za(g,p.mode,v),f.return=p,p=f}return o(p);case Jt:return I=g._init,T(p,f,I(g._payload),v)}if(Ei(g))return y(p,f,g,v);if(ui(g))return w(p,f,g,v);Qs(p,g)}return typeof g=="string"&&g!==""||typeof g=="number"?(g=""+g,f!==null&&f.tag===6?(n(p,f.sibling),f=i(f,g),f.return=p,p=f):(n(p,f),f=ja(g,p.mode,v),f.return=p,p=f),o(p)):n(p,f)}return T}var jr=Og(!0),Dg=Og(!1),zo=Nn(null),Bo=null,wr=null,rd=null;function id(){rd=wr=Bo=null}function sd(t){var e=zo.current;Q(zo),t._currentValue=e}function Uu(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function Rr(t,e){Bo=t,rd=wr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Me=!0),t.firstContext=null)}function nt(t){var e=t._currentValue;if(rd!==t)if(t={context:t,memoizedValue:e,next:null},wr===null){if(Bo===null)throw Error(S(308));wr=t,Bo.dependencies={lanes:0,firstContext:t}}else wr=wr.next=t;return e}var Un=null;function od(t){Un===null?Un=[t]:Un.push(t)}function Mg(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,od(e)):(n.next=i.next,i.next=n),e.interleaved=n,Bt(t,r)}function Bt(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Zt=!1;function ld(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Lg(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ft(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function hn(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,z&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Bt(t,n)}return i=r.interleaved,i===null?(e.next=e,od(r)):(e.next=i.next,i.next=e),r.interleaved=e,Bt(t,n)}function ho(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gc(t,n)}}function wf(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Wo(t,e,n,r){var i=t.updateQueue;Zt=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var a=l,u=a.next;a.next=null,o===null?s=u:o.next=u,o=a;var c=t.alternate;c!==null&&(c=c.updateQueue,l=c.lastBaseUpdate,l!==o&&(l===null?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=a))}if(s!==null){var d=i.baseState;o=0,c=u=a=null,l=s;do{var h=l.lane,m=l.eventTime;if((r&h)===h){c!==null&&(c=c.next={eventTime:m,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=t,w=l;switch(h=e,m=n,w.tag){case 1:if(y=w.payload,typeof y=="function"){d=y.call(m,d,h);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=w.payload,h=typeof y=="function"?y.call(m,d,h):y,h==null)break e;d=ee({},d,h);break e;case 2:Zt=!0}}l.callback!==null&&l.lane!==0&&(t.flags|=64,h=i.effects,h===null?i.effects=[l]:h.push(l))}else m={eventTime:m,lane:h,tag:l.tag,payload:l.payload,callback:l.callback,next:null},c===null?(u=c=m,a=d):c=c.next=m,o|=h;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;h=l,l=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(!0);if(c===null&&(a=d),i.baseState=a,i.firstBaseUpdate=u,i.lastBaseUpdate=c,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);Qn|=o,t.lanes=o,t.memoizedState=d}}function Sf(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Ss={},Et=Nn(Ss),Ji=Nn(Ss),Zi=Nn(Ss);function jn(t){if(t===Ss)throw Error(S(174));return t}function ad(t,e){switch(G(Zi,e),G(Ji,t),G(Et,Ss),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yu(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yu(e,t)}Q(Et),G(Et,e)}function zr(){Q(Et),Q(Ji),Q(Zi)}function bg(t){jn(Zi.current);var e=jn(Et.current),n=yu(e,t.type);e!==n&&(G(Ji,t),G(Et,n))}function ud(t){Ji.current===t&&(Q(Et),Q(Ji))}var J=Nn(0);function Vo(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Da=[];function cd(){for(var t=0;t<Da.length;t++)Da[t]._workInProgressVersionPrimary=null;Da.length=0}var fo=qt.ReactCurrentDispatcher,Ma=qt.ReactCurrentBatchConfig,qn=0,Z=null,le=null,he=null,$o=!1,Ai=!1,es=0,hS=0;function Ee(){throw Error(S(321))}function dd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!_t(t[n],e[n]))return!1;return!0}function hd(t,e,n,r,i,s){if(qn=s,Z=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,fo.current=t===null||t.memoizedState===null?gS:_S,t=n(r,i),Ai){s=0;do{if(Ai=!1,es=0,25<=s)throw Error(S(301));s+=1,he=le=null,e.updateQueue=null,fo.current=yS,t=n(r,i)}while(Ai)}if(fo.current=Ho,e=le!==null&&le.next!==null,qn=0,he=le=Z=null,$o=!1,e)throw Error(S(300));return t}function fd(){var t=es!==0;return es=0,t}function vt(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return he===null?Z.memoizedState=he=t:he=he.next=t,he}function rt(){if(le===null){var t=Z.alternate;t=t!==null?t.memoizedState:null}else t=le.next;var e=he===null?Z.memoizedState:he.next;if(e!==null)he=e,le=t;else{if(t===null)throw Error(S(310));le=t,t={memoizedState:le.memoizedState,baseState:le.baseState,baseQueue:le.baseQueue,queue:le.queue,next:null},he===null?Z.memoizedState=he=t:he=he.next=t}return he}function ts(t,e){return typeof e=="function"?e(t):e}function La(t){var e=rt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=le,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var l=o=null,a=null,u=s;do{var c=u.lane;if((qn&c)===c)a!==null&&(a=a.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};a===null?(l=a=d,o=r):a=a.next=d,Z.lanes|=c,Qn|=c}u=u.next}while(u!==null&&u!==s);a===null?o=r:a.next=l,_t(r,e.memoizedState)||(Me=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=a,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,Z.lanes|=s,Qn|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ba(t){var e=rt(),n=e.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);_t(s,e.memoizedState)||(Me=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function Fg(){}function Ug(t,e){var n=Z,r=rt(),i=e(),s=!_t(r.memoizedState,i);if(s&&(r.memoizedState=i,Me=!0),r=r.queue,pd(Bg.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||he!==null&&he.memoizedState.tag&1){if(n.flags|=2048,ns(9,zg.bind(null,n,r,i,e),void 0,null),me===null)throw Error(S(349));qn&30||jg(n,e,i)}return i}function jg(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function zg(t,e,n,r){e.value=n,e.getSnapshot=r,Wg(e)&&Vg(t)}function Bg(t,e,n){return n(function(){Wg(e)&&Vg(t)})}function Wg(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!_t(t,n)}catch{return!0}}function Vg(t){var e=Bt(t,1);e!==null&&pt(e,t,1,-1)}function Ef(t){var e=vt();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ts,lastRenderedState:t},e.queue=t,t=t.dispatch=mS.bind(null,Z,t),[e.memoizedState,t]}function ns(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Z.updateQueue,e===null?(e={lastEffect:null,stores:null},Z.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function $g(){return rt().memoizedState}function po(t,e,n,r){var i=vt();Z.flags|=t,i.memoizedState=ns(1|e,n,void 0,r===void 0?null:r)}function bl(t,e,n,r){var i=rt();r=r===void 0?null:r;var s=void 0;if(le!==null){var o=le.memoizedState;if(s=o.destroy,r!==null&&dd(r,o.deps)){i.memoizedState=ns(e,n,s,r);return}}Z.flags|=t,i.memoizedState=ns(1|e,n,s,r)}function Cf(t,e){return po(8390656,8,t,e)}function pd(t,e){return bl(2048,8,t,e)}function Hg(t,e){return bl(4,2,t,e)}function Gg(t,e){return bl(4,4,t,e)}function Kg(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function qg(t,e,n){return n=n!=null?n.concat([t]):null,bl(4,4,Kg.bind(null,e,t),n)}function md(){}function Qg(t,e){var n=rt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function Yg(t,e){var n=rt();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&dd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function Xg(t,e,n){return qn&21?(_t(n,e)||(n=ng(),Z.lanes|=n,Qn|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Me=!0),t.memoizedState=n)}function fS(t,e){var n=W;W=n!==0&&4>n?n:4,t(!0);var r=Ma.transition;Ma.transition={};try{t(!1),e()}finally{W=n,Ma.transition=r}}function Jg(){return rt().memoizedState}function pS(t,e,n){var r=pn(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Zg(t))e_(e,n);else if(n=Mg(t,e,n,r),n!==null){var i=Pe();pt(n,t,r,i),t_(n,e,r)}}function mS(t,e,n){var r=pn(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Zg(t))e_(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,l=s(o,n);if(i.hasEagerState=!0,i.eagerState=l,_t(l,o)){var a=e.interleaved;a===null?(i.next=i,od(e)):(i.next=a.next,a.next=i),e.interleaved=i;return}}catch{}finally{}n=Mg(t,e,i,r),n!==null&&(i=Pe(),pt(n,t,r,i),t_(n,e,r))}}function Zg(t){var e=t.alternate;return t===Z||e!==null&&e===Z}function e_(t,e){Ai=$o=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function t_(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,Gc(t,n)}}var Ho={readContext:nt,useCallback:Ee,useContext:Ee,useEffect:Ee,useImperativeHandle:Ee,useInsertionEffect:Ee,useLayoutEffect:Ee,useMemo:Ee,useReducer:Ee,useRef:Ee,useState:Ee,useDebugValue:Ee,useDeferredValue:Ee,useTransition:Ee,useMutableSource:Ee,useSyncExternalStore:Ee,useId:Ee,unstable_isNewReconciler:!1},gS={readContext:nt,useCallback:function(t,e){return vt().memoizedState=[t,e===void 0?null:e],t},useContext:nt,useEffect:Cf,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,po(4194308,4,Kg.bind(null,e,t),n)},useLayoutEffect:function(t,e){return po(4194308,4,t,e)},useInsertionEffect:function(t,e){return po(4,2,t,e)},useMemo:function(t,e){var n=vt();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=vt();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=pS.bind(null,Z,t),[r.memoizedState,t]},useRef:function(t){var e=vt();return t={current:t},e.memoizedState=t},useState:Ef,useDebugValue:md,useDeferredValue:function(t){return vt().memoizedState=t},useTransition:function(){var t=Ef(!1),e=t[0];return t=fS.bind(null,t[1]),vt().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=Z,i=vt();if(Y){if(n===void 0)throw Error(S(407));n=n()}else{if(n=e(),me===null)throw Error(S(349));qn&30||jg(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,Cf(Bg.bind(null,r,s,t),[t]),r.flags|=2048,ns(9,zg.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=vt(),e=me.identifierPrefix;if(Y){var n=At,r=xt;n=(r&~(1<<32-ft(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=es++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=hS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},_S={readContext:nt,useCallback:Qg,useContext:nt,useEffect:pd,useImperativeHandle:qg,useInsertionEffect:Hg,useLayoutEffect:Gg,useMemo:Yg,useReducer:La,useRef:$g,useState:function(){return La(ts)},useDebugValue:md,useDeferredValue:function(t){var e=rt();return Xg(e,le.memoizedState,t)},useTransition:function(){var t=La(ts)[0],e=rt().memoizedState;return[t,e]},useMutableSource:Fg,useSyncExternalStore:Ug,useId:Jg,unstable_isNewReconciler:!1},yS={readContext:nt,useCallback:Qg,useContext:nt,useEffect:pd,useImperativeHandle:qg,useInsertionEffect:Hg,useLayoutEffect:Gg,useMemo:Yg,useReducer:ba,useRef:$g,useState:function(){return ba(ts)},useDebugValue:md,useDeferredValue:function(t){var e=rt();return le===null?e.memoizedState=t:Xg(e,le.memoizedState,t)},useTransition:function(){var t=ba(ts)[0],e=rt().memoizedState;return[t,e]},useMutableSource:Fg,useSyncExternalStore:Ug,useId:Jg,unstable_isNewReconciler:!1};function ot(t,e){if(t&&t.defaultProps){e=ee({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function ju(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:ee({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Fl={isMounted:function(t){return(t=t._reactInternals)?sr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=Pe(),i=pn(t),s=Ft(r,i);s.payload=e,n!=null&&(s.callback=n),e=hn(t,s,i),e!==null&&(pt(e,t,i,r),ho(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=Pe(),i=pn(t),s=Ft(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=hn(t,s,i),e!==null&&(pt(e,t,i,r),ho(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=Pe(),r=pn(t),i=Ft(n,r);i.tag=2,e!=null&&(i.callback=e),e=hn(t,i,r),e!==null&&(pt(e,t,r,n),ho(e,t,r))}};function If(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!qi(n,r)||!qi(i,s):!0}function n_(t,e,n){var r=!1,i=En,s=e.contextType;return typeof s=="object"&&s!==null?s=nt(s):(i=Ue(e)?Gn:Te.current,r=e.contextTypes,s=(r=r!=null)?Fr(t,i):En),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Fl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function kf(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Fl.enqueueReplaceState(e,e.state,null)}function zu(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs={},ld(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=nt(s):(s=Ue(e)?Gn:Te.current,i.context=Fr(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(ju(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Fl.enqueueReplaceState(i,i.state,null),Wo(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function Br(t,e){try{var n="",r=e;do n+=Gw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function Fa(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bu(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var vS=typeof WeakMap=="function"?WeakMap:Map;function r_(t,e,n){n=Ft(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){Ko||(Ko=!0,Xu=r),Bu(t,e)},n}function i_(t,e,n){n=Ft(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){Bu(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Bu(t,e),typeof r!="function"&&(fn===null?fn=new Set([this]):fn.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Tf(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new vS;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=DS.bind(null,t,e,n),e.then(t,t))}function Nf(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Rf(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ft(-1,1),e.tag=2,hn(n,e,1))),n.lanes|=1),t)}var wS=qt.ReactCurrentOwner,Me=!1;function Re(t,e,n,r){e.child=t===null?Dg(e,null,n,r):jr(e,t.child,n,r)}function Pf(t,e,n,r,i){n=n.render;var s=e.ref;return Rr(e,i),r=hd(t,e,n,r,s,i),n=fd(),t!==null&&!Me?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wt(t,e,i)):(Y&&n&&ed(e),e.flags|=1,Re(t,e,r,i),e.child)}function xf(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!Cd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,s_(t,e,s,r,i)):(t=yo(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:qi,n(o,r)&&t.ref===e.ref)return Wt(t,e,i)}return e.flags|=1,t=mn(s,r),t.ref=e.ref,t.return=e,e.child=t}function s_(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if(qi(s,r)&&t.ref===e.ref)if(Me=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Me=!0);else return e.lanes=t.lanes,Wt(t,e,i)}return Wu(t,e,n,r,i)}function o_(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(Er,Ve),Ve|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,G(Er,Ve),Ve|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,G(Er,Ve),Ve|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,G(Er,Ve),Ve|=r;return Re(t,e,i,n),e.child}function l_(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Wu(t,e,n,r,i){var s=Ue(n)?Gn:Te.current;return s=Fr(e,s),Rr(e,i),n=hd(t,e,n,r,s,i),r=fd(),t!==null&&!Me?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Wt(t,e,i)):(Y&&r&&ed(e),e.flags|=1,Re(t,e,n,i),e.child)}function Af(t,e,n,r,i){if(Ue(n)){var s=!0;Fo(e)}else s=!1;if(Rr(e,i),e.stateNode===null)mo(t,e),n_(e,n,r),zu(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var a=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=nt(u):(u=Ue(n)?Gn:Te.current,u=Fr(e,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||a!==u)&&kf(e,o,r,u),Zt=!1;var h=e.memoizedState;o.state=h,Wo(e,r,o,i),a=e.memoizedState,l!==r||h!==a||Fe.current||Zt?(typeof c=="function"&&(ju(e,n,c,r),a=e.memoizedState),(l=Zt||If(e,n,l,r,h,a,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=a),o.props=r,o.state=a,o.context=u,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,Lg(t,e),l=e.memoizedProps,u=e.type===e.elementType?l:ot(e.type,l),o.props=u,d=e.pendingProps,h=o.context,a=n.contextType,typeof a=="object"&&a!==null?a=nt(a):(a=Ue(n)?Gn:Te.current,a=Fr(e,a));var m=n.getDerivedStateFromProps;(c=typeof m=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==d||h!==a)&&kf(e,o,r,a),Zt=!1,h=e.memoizedState,o.state=h,Wo(e,r,o,i);var y=e.memoizedState;l!==d||h!==y||Fe.current||Zt?(typeof m=="function"&&(ju(e,n,m,r),y=e.memoizedState),(u=Zt||If(e,n,u,r,h,y,a)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,y,a),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,y,a)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=y),o.props=r,o.state=y,o.context=a,r=u):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),r=!1)}return Vu(t,e,n,r,s,i)}function Vu(t,e,n,r,i,s){l_(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&gf(e,n,!1),Wt(t,e,s);r=e.stateNode,wS.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=jr(e,t.child,null,s),e.child=jr(e,null,l,s)):Re(t,e,l,s),e.memoizedState=r.state,i&&gf(e,n,!0),e.child}function a_(t){var e=t.stateNode;e.pendingContext?mf(t,e.pendingContext,e.pendingContext!==e.context):e.context&&mf(t,e.context,!1),ad(t,e.containerInfo)}function Of(t,e,n,r,i){return Ur(),nd(i),e.flags|=256,Re(t,e,n,r),e.child}var $u={dehydrated:null,treeContext:null,retryLane:0};function Hu(t){return{baseLanes:t,cachePool:null,transitions:null}}function u_(t,e,n){var r=e.pendingProps,i=J.current,s=!1,o=(e.flags&128)!==0,l;if((l=o)||(l=t!==null&&t.memoizedState===null?!1:(i&2)!==0),l?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),G(J,i&1),t===null)return Fu(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=zl(o,r,0,null),t=$n(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Hu(n),e.memoizedState=$u,t):gd(e,o));if(i=t.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return SS(t,e,o,r,l,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,l=i.sibling;var a={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=a,e.deletions=null):(r=mn(i,a),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?s=mn(l,s):(s=$n(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Hu(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=$u,r}return s=t.child,t=s.sibling,r=mn(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function gd(t,e){return e=zl({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Ys(t,e,n,r){return r!==null&&nd(r),jr(e,t.child,null,n),t=gd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function SS(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=Fa(Error(S(422))),Ys(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=zl({mode:"visible",children:r.children},i,0,null),s=$n(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&jr(e,t.child,null,o),e.child.memoizedState=Hu(o),e.memoizedState=$u,s);if(!(e.mode&1))return Ys(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,s=Error(S(419)),r=Fa(s,r,void 0),Ys(t,e,o,r)}if(l=(o&t.childLanes)!==0,Me||l){if(r=me,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Bt(t,i),pt(r,t,i,-1))}return Ed(),r=Fa(Error(S(421))),Ys(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=MS.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,$e=dn(i.nextSibling),Ge=e,Y=!0,at=null,t!==null&&(Je[Ze++]=xt,Je[Ze++]=At,Je[Ze++]=Kn,xt=t.id,At=t.overflow,Kn=e),e=gd(e,r.children),e.flags|=4096,e)}function Df(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),Uu(t.return,e,n)}function Ua(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function c_(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(Re(t,e,r.children,n),r=J.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Df(t,n,e);else if(t.tag===19)Df(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(G(J,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Vo(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Ua(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Vo(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Ua(e,!0,n,null,s);break;case"together":Ua(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function mo(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Wt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),Qn|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(S(153));if(e.child!==null){for(t=e.child,n=mn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=mn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function ES(t,e,n){switch(e.tag){case 3:a_(e),Ur();break;case 5:bg(e);break;case 1:Ue(e.type)&&Fo(e);break;case 4:ad(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;G(zo,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(G(J,J.current&1),e.flags|=128,null):n&e.child.childLanes?u_(t,e,n):(G(J,J.current&1),t=Wt(t,e,n),t!==null?t.sibling:null);G(J,J.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return c_(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),G(J,J.current),r)break;return null;case 22:case 23:return e.lanes=0,o_(t,e,n)}return Wt(t,e,n)}var d_,Gu,h_,f_;d_=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Gu=function(){};h_=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,jn(Et.current);var s=null;switch(n){case"input":i=pu(t,i),r=pu(t,r),s=[];break;case"select":i=ee({},i,{value:void 0}),r=ee({},r,{value:void 0}),s=[];break;case"textarea":i=_u(t,i),r=_u(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Lo)}vu(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Bi.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var a=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&a!==l&&(a!=null||l!=null))if(u==="style")if(l){for(o in l)!l.hasOwnProperty(o)||a&&a.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in a)a.hasOwnProperty(o)&&l[o]!==a[o]&&(n||(n={}),n[o]=a[o])}else n||(s||(s=[]),s.push(u,n)),n=a;else u==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,l=l?l.__html:void 0,a!=null&&l!==a&&(s=s||[]).push(u,a)):u==="children"?typeof a!="string"&&typeof a!="number"||(s=s||[]).push(u,""+a):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Bi.hasOwnProperty(u)?(a!=null&&u==="onScroll"&&K("scroll",t),s||l===a||(s=[])):(s=s||[]).push(u,a))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};f_=function(t,e,n,r){n!==r&&(e.flags|=4)};function mi(t,e){if(!Y)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function Ce(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function CS(t,e,n){var r=e.pendingProps;switch(td(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ce(e),null;case 1:return Ue(e.type)&&bo(),Ce(e),null;case 3:return r=e.stateNode,zr(),Q(Fe),Q(Te),cd(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(qs(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,at!==null&&(ec(at),at=null))),Gu(t,e),Ce(e),null;case 5:ud(e);var i=jn(Zi.current);if(n=e.type,t!==null&&e.stateNode!=null)h_(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(S(166));return Ce(e),null}if(t=jn(Et.current),qs(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[wt]=e,r[Xi]=s,t=(e.mode&1)!==0,n){case"dialog":K("cancel",r),K("close",r);break;case"iframe":case"object":case"embed":K("load",r);break;case"video":case"audio":for(i=0;i<Ii.length;i++)K(Ii[i],r);break;case"source":K("error",r);break;case"img":case"image":case"link":K("error",r),K("load",r);break;case"details":K("toggle",r);break;case"input":Bh(r,s),K("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},K("invalid",r);break;case"textarea":Vh(r,s),K("invalid",r)}vu(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var l=s[o];o==="children"?typeof l=="string"?r.textContent!==l&&(s.suppressHydrationWarning!==!0&&Ks(r.textContent,l,t),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(s.suppressHydrationWarning!==!0&&Ks(r.textContent,l,t),i=["children",""+l]):Bi.hasOwnProperty(o)&&l!=null&&o==="onScroll"&&K("scroll",r)}switch(n){case"input":js(r),Wh(r,s,!0);break;case"textarea":js(r),$h(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Lo)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Bm(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[wt]=e,t[Xi]=r,d_(t,e,!1,!1),e.stateNode=t;e:{switch(o=wu(n,r),n){case"dialog":K("cancel",t),K("close",t),i=r;break;case"iframe":case"object":case"embed":K("load",t),i=r;break;case"video":case"audio":for(i=0;i<Ii.length;i++)K(Ii[i],t);i=r;break;case"source":K("error",t),i=r;break;case"img":case"image":case"link":K("error",t),K("load",t),i=r;break;case"details":K("toggle",t),i=r;break;case"input":Bh(t,r),i=pu(t,r),K("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=ee({},r,{value:void 0}),K("invalid",t);break;case"textarea":Vh(t,r),i=_u(t,r),K("invalid",t);break;default:i=r}vu(n,i),l=i;for(s in l)if(l.hasOwnProperty(s)){var a=l[s];s==="style"?$m(t,a):s==="dangerouslySetInnerHTML"?(a=a?a.__html:void 0,a!=null&&Wm(t,a)):s==="children"?typeof a=="string"?(n!=="textarea"||a!=="")&&Wi(t,a):typeof a=="number"&&Wi(t,""+a):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Bi.hasOwnProperty(s)?a!=null&&s==="onScroll"&&K("scroll",t):a!=null&&zc(t,s,a,o))}switch(n){case"input":js(t),Wh(t,r,!1);break;case"textarea":js(t),$h(t);break;case"option":r.value!=null&&t.setAttribute("value",""+Sn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Ir(t,!!r.multiple,s,!1):r.defaultValue!=null&&Ir(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Lo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Ce(e),null;case 6:if(t&&e.stateNode!=null)f_(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(S(166));if(n=jn(Zi.current),jn(Et.current),qs(e)){if(r=e.stateNode,n=e.memoizedProps,r[wt]=e,(s=r.nodeValue!==n)&&(t=Ge,t!==null))switch(t.tag){case 3:Ks(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&Ks(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wt]=e,e.stateNode=r}return Ce(e),null;case 13:if(Q(J),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Y&&$e!==null&&e.mode&1&&!(e.flags&128))Ag(),Ur(),e.flags|=98560,s=!1;else if(s=qs(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(S(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(S(317));s[wt]=e}else Ur(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Ce(e),s=!1}else at!==null&&(ec(at),at=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||J.current&1?ue===0&&(ue=3):Ed())),e.updateQueue!==null&&(e.flags|=4),Ce(e),null);case 4:return zr(),Gu(t,e),t===null&&Qi(e.stateNode.containerInfo),Ce(e),null;case 10:return sd(e.type._context),Ce(e),null;case 17:return Ue(e.type)&&bo(),Ce(e),null;case 19:if(Q(J),s=e.memoizedState,s===null)return Ce(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)mi(s,!1);else{if(ue!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Vo(t),o!==null){for(e.flags|=128,mi(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return G(J,J.current&1|2),e.child}t=t.sibling}s.tail!==null&&ie()>Wr&&(e.flags|=128,r=!0,mi(s,!1),e.lanes=4194304)}else{if(!r)if(t=Vo(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),mi(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Y)return Ce(e),null}else 2*ie()-s.renderingStartTime>Wr&&n!==1073741824&&(e.flags|=128,r=!0,mi(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=ie(),e.sibling=null,n=J.current,G(J,r?n&1|2:n&1),e):(Ce(e),null);case 22:case 23:return Sd(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ve&1073741824&&(Ce(e),e.subtreeFlags&6&&(e.flags|=8192)):Ce(e),null;case 24:return null;case 25:return null}throw Error(S(156,e.tag))}function IS(t,e){switch(td(e),e.tag){case 1:return Ue(e.type)&&bo(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return zr(),Q(Fe),Q(Te),cd(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return ud(e),null;case 13:if(Q(J),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(S(340));Ur()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return Q(J),null;case 4:return zr(),null;case 10:return sd(e.type._context),null;case 22:case 23:return Sd(),null;case 24:return null;default:return null}}var Xs=!1,Ie=!1,kS=typeof WeakSet=="function"?WeakSet:Set,R=null;function Sr(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){te(t,e,r)}else n.current=null}function Ku(t,e,n){try{n()}catch(r){te(t,e,r)}}var Mf=!1;function TS(t,e){if(xu=Oo,t=yg(),Zc(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,l=-1,a=-1,u=0,c=0,d=t,h=null;t:for(;;){for(var m;d!==n||i!==0&&d.nodeType!==3||(l=o+i),d!==s||r!==0&&d.nodeType!==3||(a=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(m=d.firstChild)!==null;)h=d,d=m;for(;;){if(d===t)break t;if(h===n&&++u===i&&(l=o),h===s&&++c===r&&(a=o),(m=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=m}n=l===-1||a===-1?null:{start:l,end:a}}else n=null}n=n||{start:0,end:0}}else n=null;for(Au={focusedElem:t,selectionRange:n},Oo=!1,R=e;R!==null;)if(e=R,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,R=t;else for(;R!==null;){e=R;try{var y=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var w=y.memoizedProps,T=y.memoizedState,p=e.stateNode,f=p.getSnapshotBeforeUpdate(e.elementType===e.type?w:ot(e.type,w),T);p.__reactInternalSnapshotBeforeUpdate=f}break;case 3:var g=e.stateNode.containerInfo;g.nodeType===1?g.textContent="":g.nodeType===9&&g.documentElement&&g.removeChild(g.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(v){te(e,e.return,v)}if(t=e.sibling,t!==null){t.return=e.return,R=t;break}R=e.return}return y=Mf,Mf=!1,y}function Oi(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Ku(e,n,s)}i=i.next}while(i!==r)}}function Ul(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function qu(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function p_(t){var e=t.alternate;e!==null&&(t.alternate=null,p_(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[wt],delete e[Xi],delete e[Mu],delete e[aS],delete e[uS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function m_(t){return t.tag===5||t.tag===3||t.tag===4}function Lf(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||m_(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Qu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Lo));else if(r!==4&&(t=t.child,t!==null))for(Qu(t,e,n),t=t.sibling;t!==null;)Qu(t,e,n),t=t.sibling}function Yu(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Yu(t,e,n),t=t.sibling;t!==null;)Yu(t,e,n),t=t.sibling}var _e=null,lt=!1;function Yt(t,e,n){for(n=n.child;n!==null;)g_(t,e,n),n=n.sibling}function g_(t,e,n){if(St&&typeof St.onCommitFiberUnmount=="function")try{St.onCommitFiberUnmount(xl,n)}catch{}switch(n.tag){case 5:Ie||Sr(n,e);case 6:var r=_e,i=lt;_e=null,Yt(t,e,n),_e=r,lt=i,_e!==null&&(lt?(t=_e,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):_e.removeChild(n.stateNode));break;case 18:_e!==null&&(lt?(t=_e,n=n.stateNode,t.nodeType===8?Aa(t.parentNode,n):t.nodeType===1&&Aa(t,n),Gi(t)):Aa(_e,n.stateNode));break;case 4:r=_e,i=lt,_e=n.stateNode.containerInfo,lt=!0,Yt(t,e,n),_e=r,lt=i;break;case 0:case 11:case 14:case 15:if(!Ie&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Ku(n,e,o),i=i.next}while(i!==r)}Yt(t,e,n);break;case 1:if(!Ie&&(Sr(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){te(n,e,l)}Yt(t,e,n);break;case 21:Yt(t,e,n);break;case 22:n.mode&1?(Ie=(r=Ie)||n.memoizedState!==null,Yt(t,e,n),Ie=r):Yt(t,e,n);break;default:Yt(t,e,n)}}function bf(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new kS),e.forEach(function(r){var i=LS.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function st(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,l=o;e:for(;l!==null;){switch(l.tag){case 5:_e=l.stateNode,lt=!1;break e;case 3:_e=l.stateNode.containerInfo,lt=!0;break e;case 4:_e=l.stateNode.containerInfo,lt=!0;break e}l=l.return}if(_e===null)throw Error(S(160));g_(s,o,i),_e=null,lt=!1;var a=i.alternate;a!==null&&(a.return=null),i.return=null}catch(u){te(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)__(e,t),e=e.sibling}function __(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(st(e,t),yt(t),r&4){try{Oi(3,t,t.return),Ul(3,t)}catch(w){te(t,t.return,w)}try{Oi(5,t,t.return)}catch(w){te(t,t.return,w)}}break;case 1:st(e,t),yt(t),r&512&&n!==null&&Sr(n,n.return);break;case 5:if(st(e,t),yt(t),r&512&&n!==null&&Sr(n,n.return),t.flags&32){var i=t.stateNode;try{Wi(i,"")}catch(w){te(t,t.return,w)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,l=t.type,a=t.updateQueue;if(t.updateQueue=null,a!==null)try{l==="input"&&s.type==="radio"&&s.name!=null&&jm(i,s),wu(l,o);var u=wu(l,s);for(o=0;o<a.length;o+=2){var c=a[o],d=a[o+1];c==="style"?$m(i,d):c==="dangerouslySetInnerHTML"?Wm(i,d):c==="children"?Wi(i,d):zc(i,c,d,u)}switch(l){case"input":mu(i,s);break;case"textarea":zm(i,s);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var m=s.value;m!=null?Ir(i,!!s.multiple,m,!1):h!==!!s.multiple&&(s.defaultValue!=null?Ir(i,!!s.multiple,s.defaultValue,!0):Ir(i,!!s.multiple,s.multiple?[]:"",!1))}i[Xi]=s}catch(w){te(t,t.return,w)}}break;case 6:if(st(e,t),yt(t),r&4){if(t.stateNode===null)throw Error(S(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(w){te(t,t.return,w)}}break;case 3:if(st(e,t),yt(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Gi(e.containerInfo)}catch(w){te(t,t.return,w)}break;case 4:st(e,t),yt(t);break;case 13:st(e,t),yt(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(vd=ie())),r&4&&bf(t);break;case 22:if(c=n!==null&&n.memoizedState!==null,t.mode&1?(Ie=(u=Ie)||c,st(e,t),Ie=u):st(e,t),yt(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!c&&t.mode&1)for(R=t,c=t.child;c!==null;){for(d=R=c;R!==null;){switch(h=R,m=h.child,h.tag){case 0:case 11:case 14:case 15:Oi(4,h,h.return);break;case 1:Sr(h,h.return);var y=h.stateNode;if(typeof y.componentWillUnmount=="function"){r=h,n=h.return;try{e=r,y.props=e.memoizedProps,y.state=e.memoizedState,y.componentWillUnmount()}catch(w){te(r,n,w)}}break;case 5:Sr(h,h.return);break;case 22:if(h.memoizedState!==null){Uf(d);continue}}m!==null?(m.return=h,R=m):Uf(d)}c=c.sibling}e:for(c=null,d=t;;){if(d.tag===5){if(c===null){c=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(l=d.stateNode,a=d.memoizedProps.style,o=a!=null&&a.hasOwnProperty("display")?a.display:null,l.style.display=Vm("display",o))}catch(w){te(t,t.return,w)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(w){te(t,t.return,w)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:st(e,t),yt(t),r&4&&bf(t);break;case 21:break;default:st(e,t),yt(t)}}function yt(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(m_(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Wi(i,""),r.flags&=-33);var s=Lf(t);Yu(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,l=Lf(t);Qu(t,l,o);break;default:throw Error(S(161))}}catch(a){te(t,t.return,a)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function NS(t,e,n){R=t,y_(t)}function y_(t,e,n){for(var r=(t.mode&1)!==0;R!==null;){var i=R,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||Xs;if(!o){var l=i.alternate,a=l!==null&&l.memoizedState!==null||Ie;l=Xs;var u=Ie;if(Xs=o,(Ie=a)&&!u)for(R=i;R!==null;)o=R,a=o.child,o.tag===22&&o.memoizedState!==null?jf(i):a!==null?(a.return=o,R=a):jf(i);for(;s!==null;)R=s,y_(s),s=s.sibling;R=i,Xs=l,Ie=u}Ff(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,R=s):Ff(t)}}function Ff(t){for(;R!==null;){var e=R;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Ie||Ul(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!Ie)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:ot(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Sf(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Sf(e,o,n)}break;case 5:var l=e.stateNode;if(n===null&&e.flags&4){n=l;var a=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":a.autoFocus&&n.focus();break;case"img":a.src&&(n.src=a.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Gi(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Ie||e.flags&512&&qu(e)}catch(h){te(e,e.return,h)}}if(e===t){R=null;break}if(n=e.sibling,n!==null){n.return=e.return,R=n;break}R=e.return}}function Uf(t){for(;R!==null;){var e=R;if(e===t){R=null;break}var n=e.sibling;if(n!==null){n.return=e.return,R=n;break}R=e.return}}function jf(t){for(;R!==null;){var e=R;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Ul(4,e)}catch(a){te(e,n,a)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(a){te(e,i,a)}}var s=e.return;try{qu(e)}catch(a){te(e,s,a)}break;case 5:var o=e.return;try{qu(e)}catch(a){te(e,o,a)}}}catch(a){te(e,e.return,a)}if(e===t){R=null;break}var l=e.sibling;if(l!==null){l.return=e.return,R=l;break}R=e.return}}var RS=Math.ceil,Go=qt.ReactCurrentDispatcher,_d=qt.ReactCurrentOwner,tt=qt.ReactCurrentBatchConfig,z=0,me=null,oe=null,we=0,Ve=0,Er=Nn(0),ue=0,rs=null,Qn=0,jl=0,yd=0,Di=null,De=null,vd=0,Wr=1/0,Tt=null,Ko=!1,Xu=null,fn=null,Js=!1,ln=null,qo=0,Mi=0,Ju=null,go=-1,_o=0;function Pe(){return z&6?ie():go!==-1?go:go=ie()}function pn(t){return t.mode&1?z&2&&we!==0?we&-we:dS.transition!==null?(_o===0&&(_o=ng()),_o):(t=W,t!==0||(t=window.event,t=t===void 0?16:ug(t.type)),t):1}function pt(t,e,n,r){if(50<Mi)throw Mi=0,Ju=null,Error(S(185));ys(t,n,r),(!(z&2)||t!==me)&&(t===me&&(!(z&2)&&(jl|=n),ue===4&&tn(t,we)),je(t,r),n===1&&z===0&&!(e.mode&1)&&(Wr=ie()+500,Ll&&Rn()))}function je(t,e){var n=t.callbackNode;d0(t,e);var r=Ao(t,t===me?we:0);if(r===0)n!==null&&Kh(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&Kh(n),e===1)t.tag===0?cS(zf.bind(null,t)):Rg(zf.bind(null,t)),oS(function(){!(z&6)&&Rn()}),n=null;else{switch(rg(r)){case 1:n=Hc;break;case 4:n=eg;break;case 16:n=xo;break;case 536870912:n=tg;break;default:n=xo}n=T_(n,v_.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function v_(t,e){if(go=-1,_o=0,z&6)throw Error(S(327));var n=t.callbackNode;if(Pr()&&t.callbackNode!==n)return null;var r=Ao(t,t===me?we:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=Qo(t,r);else{e=r;var i=z;z|=2;var s=S_();(me!==t||we!==e)&&(Tt=null,Wr=ie()+500,Vn(t,e));do try{AS();break}catch(l){w_(t,l)}while(!0);id(),Go.current=s,z=i,oe!==null?e=0:(me=null,we=0,e=ue)}if(e!==0){if(e===2&&(i=ku(t),i!==0&&(r=i,e=Zu(t,i))),e===1)throw n=rs,Vn(t,0),tn(t,r),je(t,ie()),n;if(e===6)tn(t,r);else{if(i=t.current.alternate,!(r&30)&&!PS(i)&&(e=Qo(t,r),e===2&&(s=ku(t),s!==0&&(r=s,e=Zu(t,s))),e===1))throw n=rs,Vn(t,0),tn(t,r),je(t,ie()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(S(345));case 2:Mn(t,De,Tt);break;case 3:if(tn(t,r),(r&130023424)===r&&(e=vd+500-ie(),10<e)){if(Ao(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){Pe(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=Du(Mn.bind(null,t,De,Tt),e);break}Mn(t,De,Tt);break;case 4:if(tn(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-ft(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=ie()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*RS(r/1960))-r,10<r){t.timeoutHandle=Du(Mn.bind(null,t,De,Tt),r);break}Mn(t,De,Tt);break;case 5:Mn(t,De,Tt);break;default:throw Error(S(329))}}}return je(t,ie()),t.callbackNode===n?v_.bind(null,t):null}function Zu(t,e){var n=Di;return t.current.memoizedState.isDehydrated&&(Vn(t,e).flags|=256),t=Qo(t,e),t!==2&&(e=De,De=n,e!==null&&ec(e)),t}function ec(t){De===null?De=t:De.push.apply(De,t)}function PS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!_t(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function tn(t,e){for(e&=~yd,e&=~jl,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-ft(e),r=1<<n;t[n]=-1,e&=~r}}function zf(t){if(z&6)throw Error(S(327));Pr();var e=Ao(t,0);if(!(e&1))return je(t,ie()),null;var n=Qo(t,e);if(t.tag!==0&&n===2){var r=ku(t);r!==0&&(e=r,n=Zu(t,r))}if(n===1)throw n=rs,Vn(t,0),tn(t,e),je(t,ie()),n;if(n===6)throw Error(S(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Mn(t,De,Tt),je(t,ie()),null}function wd(t,e){var n=z;z|=1;try{return t(e)}finally{z=n,z===0&&(Wr=ie()+500,Ll&&Rn())}}function Yn(t){ln!==null&&ln.tag===0&&!(z&6)&&Pr();var e=z;z|=1;var n=tt.transition,r=W;try{if(tt.transition=null,W=1,t)return t()}finally{W=r,tt.transition=n,z=e,!(z&6)&&Rn()}}function Sd(){Ve=Er.current,Q(Er)}function Vn(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,sS(n)),oe!==null)for(n=oe.return;n!==null;){var r=n;switch(td(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&bo();break;case 3:zr(),Q(Fe),Q(Te),cd();break;case 5:ud(r);break;case 4:zr();break;case 13:Q(J);break;case 19:Q(J);break;case 10:sd(r.type._context);break;case 22:case 23:Sd()}n=n.return}if(me=t,oe=t=mn(t.current,null),we=Ve=e,ue=0,rs=null,yd=jl=Qn=0,De=Di=null,Un!==null){for(e=0;e<Un.length;e++)if(n=Un[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Un=null}return t}function w_(t,e){do{var n=oe;try{if(id(),fo.current=Ho,$o){for(var r=Z.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}$o=!1}if(qn=0,he=le=Z=null,Ai=!1,es=0,_d.current=null,n===null||n.return===null){ue=1,rs=e,oe=null;break}e:{var s=t,o=n.return,l=n,a=e;if(e=we,l.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){var u=a,c=l,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var m=Nf(o);if(m!==null){m.flags&=-257,Rf(m,o,l,s,e),m.mode&1&&Tf(s,u,e),e=m,a=u;var y=e.updateQueue;if(y===null){var w=new Set;w.add(a),e.updateQueue=w}else y.add(a);break e}else{if(!(e&1)){Tf(s,u,e),Ed();break e}a=Error(S(426))}}else if(Y&&l.mode&1){var T=Nf(o);if(T!==null){!(T.flags&65536)&&(T.flags|=256),Rf(T,o,l,s,e),nd(Br(a,l));break e}}s=a=Br(a,l),ue!==4&&(ue=2),Di===null?Di=[s]:Di.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var p=r_(s,a,e);wf(s,p);break e;case 1:l=a;var f=s.type,g=s.stateNode;if(!(s.flags&128)&&(typeof f.getDerivedStateFromError=="function"||g!==null&&typeof g.componentDidCatch=="function"&&(fn===null||!fn.has(g)))){s.flags|=65536,e&=-e,s.lanes|=e;var v=i_(s,l,e);wf(s,v);break e}}s=s.return}while(s!==null)}C_(n)}catch(E){e=E,oe===n&&n!==null&&(oe=n=n.return);continue}break}while(!0)}function S_(){var t=Go.current;return Go.current=Ho,t===null?Ho:t}function Ed(){(ue===0||ue===3||ue===2)&&(ue=4),me===null||!(Qn&268435455)&&!(jl&268435455)||tn(me,we)}function Qo(t,e){var n=z;z|=2;var r=S_();(me!==t||we!==e)&&(Tt=null,Vn(t,e));do try{xS();break}catch(i){w_(t,i)}while(!0);if(id(),z=n,Go.current=r,oe!==null)throw Error(S(261));return me=null,we=0,ue}function xS(){for(;oe!==null;)E_(oe)}function AS(){for(;oe!==null&&!n0();)E_(oe)}function E_(t){var e=k_(t.alternate,t,Ve);t.memoizedProps=t.pendingProps,e===null?C_(t):oe=e,_d.current=null}function C_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=IS(n,e),n!==null){n.flags&=32767,oe=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{ue=6,oe=null;return}}else if(n=CS(n,e,Ve),n!==null){oe=n;return}if(e=e.sibling,e!==null){oe=e;return}oe=e=t}while(e!==null);ue===0&&(ue=5)}function Mn(t,e,n){var r=W,i=tt.transition;try{tt.transition=null,W=1,OS(t,e,n,r)}finally{tt.transition=i,W=r}return null}function OS(t,e,n,r){do Pr();while(ln!==null);if(z&6)throw Error(S(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(S(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(h0(t,s),t===me&&(oe=me=null,we=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Js||(Js=!0,T_(xo,function(){return Pr(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=tt.transition,tt.transition=null;var o=W;W=1;var l=z;z|=4,_d.current=null,TS(t,n),__(n,t),J0(Au),Oo=!!xu,Au=xu=null,t.current=n,NS(n),r0(),z=l,W=o,tt.transition=s}else t.current=n;if(Js&&(Js=!1,ln=t,qo=i),s=t.pendingLanes,s===0&&(fn=null),o0(n.stateNode),je(t,ie()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Ko)throw Ko=!1,t=Xu,Xu=null,t;return qo&1&&t.tag!==0&&Pr(),s=t.pendingLanes,s&1?t===Ju?Mi++:(Mi=0,Ju=t):Mi=0,Rn(),null}function Pr(){if(ln!==null){var t=rg(qo),e=tt.transition,n=W;try{if(tt.transition=null,W=16>t?16:t,ln===null)var r=!1;else{if(t=ln,ln=null,qo=0,z&6)throw Error(S(331));var i=z;for(z|=4,R=t.current;R!==null;){var s=R,o=s.child;if(R.flags&16){var l=s.deletions;if(l!==null){for(var a=0;a<l.length;a++){var u=l[a];for(R=u;R!==null;){var c=R;switch(c.tag){case 0:case 11:case 15:Oi(8,c,s)}var d=c.child;if(d!==null)d.return=c,R=d;else for(;R!==null;){c=R;var h=c.sibling,m=c.return;if(p_(c),c===u){R=null;break}if(h!==null){h.return=m,R=h;break}R=m}}}var y=s.alternate;if(y!==null){var w=y.child;if(w!==null){y.child=null;do{var T=w.sibling;w.sibling=null,w=T}while(w!==null)}}R=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,R=o;else e:for(;R!==null;){if(s=R,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Oi(9,s,s.return)}var p=s.sibling;if(p!==null){p.return=s.return,R=p;break e}R=s.return}}var f=t.current;for(R=f;R!==null;){o=R;var g=o.child;if(o.subtreeFlags&2064&&g!==null)g.return=o,R=g;else e:for(o=f;R!==null;){if(l=R,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:Ul(9,l)}}catch(E){te(l,l.return,E)}if(l===o){R=null;break e}var v=l.sibling;if(v!==null){v.return=l.return,R=v;break e}R=l.return}}if(z=i,Rn(),St&&typeof St.onPostCommitFiberRoot=="function")try{St.onPostCommitFiberRoot(xl,t)}catch{}r=!0}return r}finally{W=n,tt.transition=e}}return!1}function Bf(t,e,n){e=Br(n,e),e=r_(t,e,1),t=hn(t,e,1),e=Pe(),t!==null&&(ys(t,1,e),je(t,e))}function te(t,e,n){if(t.tag===3)Bf(t,t,n);else for(;e!==null;){if(e.tag===3){Bf(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(fn===null||!fn.has(r))){t=Br(n,t),t=i_(e,t,1),e=hn(e,t,1),t=Pe(),e!==null&&(ys(e,1,t),je(e,t));break}}e=e.return}}function DS(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=Pe(),t.pingedLanes|=t.suspendedLanes&n,me===t&&(we&n)===n&&(ue===4||ue===3&&(we&130023424)===we&&500>ie()-vd?Vn(t,0):yd|=n),je(t,e)}function I_(t,e){e===0&&(t.mode&1?(e=Ws,Ws<<=1,!(Ws&130023424)&&(Ws=4194304)):e=1);var n=Pe();t=Bt(t,e),t!==null&&(ys(t,e,n),je(t,n))}function MS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),I_(t,n)}function LS(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(e),I_(t,n)}var k_;k_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||Fe.current)Me=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Me=!1,ES(t,e,n);Me=!!(t.flags&131072)}else Me=!1,Y&&e.flags&1048576&&Pg(e,jo,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;mo(t,e),t=e.pendingProps;var i=Fr(e,Te.current);Rr(e,n),i=hd(null,e,r,t,i,n);var s=fd();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Ue(r)?(s=!0,Fo(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ld(e),i.updater=Fl,e.stateNode=i,i._reactInternals=e,zu(e,r,t,n),e=Vu(null,e,r,!0,s,n)):(e.tag=0,Y&&s&&ed(e),Re(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(mo(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=FS(r),t=ot(r,t),i){case 0:e=Wu(null,e,r,t,n);break e;case 1:e=Af(null,e,r,t,n);break e;case 11:e=Pf(null,e,r,t,n);break e;case 14:e=xf(null,e,r,ot(r.type,t),n);break e}throw Error(S(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ot(r,i),Wu(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ot(r,i),Af(t,e,r,i,n);case 3:e:{if(a_(e),t===null)throw Error(S(387));r=e.pendingProps,s=e.memoizedState,i=s.element,Lg(t,e),Wo(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=Br(Error(S(423)),e),e=Of(t,e,r,n,i);break e}else if(r!==i){i=Br(Error(S(424)),e),e=Of(t,e,r,n,i);break e}else for($e=dn(e.stateNode.containerInfo.firstChild),Ge=e,Y=!0,at=null,n=Dg(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Ur(),r===i){e=Wt(t,e,n);break e}Re(t,e,r,n)}e=e.child}return e;case 5:return bg(e),t===null&&Fu(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Ou(r,i)?o=null:s!==null&&Ou(r,s)&&(e.flags|=32),l_(t,e),Re(t,e,o,n),e.child;case 6:return t===null&&Fu(e),null;case 13:return u_(t,e,n);case 4:return ad(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=jr(e,null,r,n):Re(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ot(r,i),Pf(t,e,r,i,n);case 7:return Re(t,e,e.pendingProps,n),e.child;case 8:return Re(t,e,e.pendingProps.children,n),e.child;case 12:return Re(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,G(zo,r._currentValue),r._currentValue=o,s!==null)if(_t(s.value,o)){if(s.children===i.children&&!Fe.current){e=Wt(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var l=s.dependencies;if(l!==null){o=s.child;for(var a=l.firstContext;a!==null;){if(a.context===r){if(s.tag===1){a=Ft(-1,n&-n),a.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?a.next=a:(a.next=c.next,c.next=a),u.pending=a}}s.lanes|=n,a=s.alternate,a!==null&&(a.lanes|=n),Uu(s.return,n,e),l.lanes|=n;break}a=a.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(S(341));o.lanes|=n,l=o.alternate,l!==null&&(l.lanes|=n),Uu(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}Re(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,Rr(e,n),i=nt(i),r=r(i),e.flags|=1,Re(t,e,r,n),e.child;case 14:return r=e.type,i=ot(r,e.pendingProps),i=ot(r.type,i),xf(t,e,r,i,n);case 15:return s_(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:ot(r,i),mo(t,e),e.tag=1,Ue(r)?(t=!0,Fo(e)):t=!1,Rr(e,n),n_(e,r,i),zu(e,r,i,n),Vu(null,e,r,!0,t,n);case 19:return c_(t,e,n);case 22:return o_(t,e,n)}throw Error(S(156,e.tag))};function T_(t,e){return Zm(t,e)}function bS(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function et(t,e,n,r){return new bS(t,e,n,r)}function Cd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function FS(t){if(typeof t=="function")return Cd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Wc)return 11;if(t===Vc)return 14}return 2}function mn(t,e){var n=t.alternate;return n===null?(n=et(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function yo(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Cd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case hr:return $n(n.children,i,s,e);case Bc:o=8,i|=8;break;case cu:return t=et(12,n,e,i|2),t.elementType=cu,t.lanes=s,t;case du:return t=et(13,n,e,i),t.elementType=du,t.lanes=s,t;case hu:return t=et(19,n,e,i),t.elementType=hu,t.lanes=s,t;case bm:return zl(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Mm:o=10;break e;case Lm:o=9;break e;case Wc:o=11;break e;case Vc:o=14;break e;case Jt:o=16,r=null;break e}throw Error(S(130,t==null?t:typeof t,""))}return e=et(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function $n(t,e,n,r){return t=et(7,t,r,e),t.lanes=n,t}function zl(t,e,n,r){return t=et(22,t,r,e),t.elementType=bm,t.lanes=n,t.stateNode={isHidden:!1},t}function ja(t,e,n){return t=et(6,t,null,e),t.lanes=n,t}function za(t,e,n){return e=et(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function US(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=wa(0),this.expirationTimes=wa(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=wa(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Id(t,e,n,r,i,s,o,l,a){return t=new US(t,e,n,l,a),e===1?(e=1,s===!0&&(e|=8)):e=0,s=et(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},ld(s),t}function jS(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:dr,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function N_(t){if(!t)return En;t=t._reactInternals;e:{if(sr(t)!==t||t.tag!==1)throw Error(S(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Ue(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(S(171))}if(t.tag===1){var n=t.type;if(Ue(n))return Ng(t,n,e)}return e}function R_(t,e,n,r,i,s,o,l,a){return t=Id(n,r,!0,t,i,s,o,l,a),t.context=N_(null),n=t.current,r=Pe(),i=pn(n),s=Ft(r,i),s.callback=e??null,hn(n,s,i),t.current.lanes=i,ys(t,i,r),je(t,r),t}function Bl(t,e,n,r){var i=e.current,s=Pe(),o=pn(i);return n=N_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ft(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=hn(i,e,o),t!==null&&(pt(t,i,o,s),ho(t,i,o)),o}function Yo(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Wf(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function kd(t,e){Wf(t,e),(t=t.alternate)&&Wf(t,e)}function zS(){return null}var P_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Td(t){this._internalRoot=t}Wl.prototype.render=Td.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(S(409));Bl(t,e,null,null)};Wl.prototype.unmount=Td.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Yn(function(){Bl(null,t,null,null)}),e[zt]=null}};function Wl(t){this._internalRoot=t}Wl.prototype.unstable_scheduleHydration=function(t){if(t){var e=og();t={blockedOn:null,target:t,priority:e};for(var n=0;n<en.length&&e!==0&&e<en[n].priority;n++);en.splice(n,0,t),n===0&&ag(t)}};function Nd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Vl(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Vf(){}function BS(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=Yo(o);s.call(u)}}var o=R_(e,r,t,0,null,!1,!1,"",Vf);return t._reactRootContainer=o,t[zt]=o.current,Qi(t.nodeType===8?t.parentNode:t),Yn(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=Yo(a);l.call(u)}}var a=Id(t,0,!1,null,null,!1,!1,"",Vf);return t._reactRootContainer=a,t[zt]=a.current,Qi(t.nodeType===8?t.parentNode:t),Yn(function(){Bl(e,a,n,r)}),a}function $l(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var l=i;i=function(){var a=Yo(o);l.call(a)}}Bl(e,o,t,i)}else o=BS(n,e,t,i,r);return Yo(o)}ig=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ci(e.pendingLanes);n!==0&&(Gc(e,n|1),je(e,ie()),!(z&6)&&(Wr=ie()+500,Rn()))}break;case 13:Yn(function(){var r=Bt(t,1);if(r!==null){var i=Pe();pt(r,t,1,i)}}),kd(t,1)}};Kc=function(t){if(t.tag===13){var e=Bt(t,134217728);if(e!==null){var n=Pe();pt(e,t,134217728,n)}kd(t,134217728)}};sg=function(t){if(t.tag===13){var e=pn(t),n=Bt(t,e);if(n!==null){var r=Pe();pt(n,t,e,r)}kd(t,e)}};og=function(){return W};lg=function(t,e){var n=W;try{return W=t,e()}finally{W=n}};Eu=function(t,e,n){switch(e){case"input":if(mu(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Ml(r);if(!i)throw Error(S(90));Um(r),mu(r,i)}}}break;case"textarea":zm(t,n);break;case"select":e=n.value,e!=null&&Ir(t,!!n.multiple,e,!1)}};Km=wd;qm=Yn;var WS={usingClientEntryPoint:!1,Events:[ws,gr,Ml,Hm,Gm,wd]},gi={findFiberByHostInstance:Fn,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},VS={bundleType:gi.bundleType,version:gi.version,rendererPackageName:gi.rendererPackageName,rendererConfig:gi.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qt.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Xm(t),t===null?null:t.stateNode},findFiberByHostInstance:gi.findFiberByHostInstance||zS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Zs=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Zs.isDisabled&&Zs.supportsFiber)try{xl=Zs.inject(VS),St=Zs}catch{}}Qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WS;Qe.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Nd(e))throw Error(S(200));return jS(t,e,null,n)};Qe.createRoot=function(t,e){if(!Nd(t))throw Error(S(299));var n=!1,r="",i=P_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=Id(t,1,!1,null,null,n,!1,r,i),t[zt]=e.current,Qi(t.nodeType===8?t.parentNode:t),new Td(e)};Qe.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(S(188)):(t=Object.keys(t).join(","),Error(S(268,t)));return t=Xm(e),t=t===null?null:t.stateNode,t};Qe.flushSync=function(t){return Yn(t)};Qe.hydrate=function(t,e,n){if(!Vl(e))throw Error(S(200));return $l(null,t,e,!0,n)};Qe.hydrateRoot=function(t,e,n){if(!Nd(t))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=P_;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=R_(e,null,t,1,n??null,i,!1,s,o),t[zt]=e.current,Qi(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Wl(e)};Qe.render=function(t,e,n){if(!Vl(e))throw Error(S(200));return $l(null,t,e,!1,n)};Qe.unmountComponentAtNode=function(t){if(!Vl(t))throw Error(S(40));return t._reactRootContainer?(Yn(function(){$l(null,null,t,!1,function(){t._reactRootContainer=null,t[zt]=null})}),!0):!1};Qe.unstable_batchedUpdates=wd;Qe.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!Vl(n))throw Error(S(200));if(t==null||t._reactInternals===void 0)throw Error(S(38));return $l(t,e,n,!1,r)};Qe.version="18.3.1-next-f1338f8080-20240426";function x_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(x_)}catch(t){console.error(t)}}x_(),xm.exports=Qe;var $S=xm.exports,A_,$f=$S;A_=$f.createRoot,$f.hydrateRoot;var O_={exports:{}},D_={};/**
 * @license React
 * use-sync-external-store-with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Es=X;function HS(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var GS=typeof Object.is=="function"?Object.is:HS,KS=Es.useSyncExternalStore,qS=Es.useRef,QS=Es.useEffect,YS=Es.useMemo,XS=Es.useDebugValue;D_.useSyncExternalStoreWithSelector=function(t,e,n,r,i){var s=qS(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=YS(function(){function a(m){if(!u){if(u=!0,c=m,m=r(m),i!==void 0&&o.hasValue){var y=o.value;if(i(y,m))return d=y}return d=m}if(y=d,GS(c,m))return y;var w=r(m);return i!==void 0&&i(y,w)?(c=m,y):(c=m,d=w)}var u=!1,c,d,h=n===void 0?null:n;return[function(){return a(e())},h===null?void 0:function(){return a(h())}]},[e,n,r,i]);var l=KS(t,s[0],s[1]);return QS(function(){o.hasValue=!0,o.value=l},[l]),XS(l),l};O_.exports=D_;var JS=O_.exports;function ZS(t){t()}function eE(){let t=null,e=null;return{clear(){t=null,e=null},notify(){ZS(()=>{let n=t;for(;n;)n.callback(),n=n.next})},get(){const n=[];let r=t;for(;r;)n.push(r),r=r.next;return n},subscribe(n){let r=!0;const i=e={callback:n,next:null,prev:e};return i.prev?i.prev.next=i:t=i,function(){!r||t===null||(r=!1,i.next?i.next.prev=i.prev:e=i.prev,i.prev?i.prev.next=i.next:t=i.next)}}}}const Hf={notify(){},get:()=>[]};function tE(t,e){let n,r=Hf,i=0,s=!1;function o(w){c();const T=r.subscribe(w);let p=!1;return()=>{p||(p=!0,T(),d())}}function l(){r.notify()}function a(){y.onStateChange&&y.onStateChange()}function u(){return s}function c(){i++,n||(n=t.subscribe(a),r=eE())}function d(){i--,n&&i===0&&(n(),n=void 0,r.clear(),r=Hf)}function h(){s||(s=!0,c())}function m(){s&&(s=!1,d())}const y={addNestedSub:o,notifyNestedSubs:l,handleChangeWrapper:a,isSubscribed:u,trySubscribe:h,tryUnsubscribe:m,getListeners:()=>r};return y}const nE=()=>typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",rE=nE(),iE=()=>typeof navigator<"u"&&navigator.product==="ReactNative",sE=iE(),oE=()=>rE||sE?X.useLayoutEffect:X.useEffect,lE=oE(),Ba=Symbol.for("react-redux-context"),Wa=typeof globalThis<"u"?globalThis:{};function aE(){if(!X.createContext)return{};const t=Wa[Ba]??(Wa[Ba]=new Map);let e=t.get(X.createContext);return e||(e=X.createContext(null),t.set(X.createContext,e)),e}const Cn=aE();function uE(t){const{children:e,context:n,serverState:r,store:i}=t,s=X.useMemo(()=>{const a=tE(i);return{store:i,subscription:a,getServerState:r!=null?()=>r:void 0}},[i,r]),o=X.useMemo(()=>i.getState(),[i]);lE(()=>{const{subscription:a}=s;return a.onStateChange=a.notifyNestedSubs,a.trySubscribe(),o!==i.getState()&&a.notifyNestedSubs(),()=>{a.tryUnsubscribe(),a.onStateChange=void 0}},[s,o]);const l=n||Cn;return X.createElement(l.Provider,{value:s},e)}function Rd(t=Cn){return function(){return X.useContext(t)}}const M_=Rd();function L_(t=Cn){const e=t===Cn?M_:Rd(t),n=()=>{const{store:r}=e();return r};return Object.assign(n,{withTypes:()=>n}),n}const cE=L_();function dE(t=Cn){const e=t===Cn?cE:L_(t),n=()=>e().dispatch;return Object.assign(n,{withTypes:()=>n}),n}const or=dE(),hE=(t,e)=>t===e;function fE(t=Cn){const e=t===Cn?M_:Rd(t),n=(r,i={})=>{const{equalityFn:s=hE}=typeof i=="function"?{equalityFn:i}:i,o=e(),{store:l,subscription:a,getServerState:u}=o;X.useRef(!0);const c=X.useCallback({[r.name](h){return r(h)}}[r.name],[r]),d=JS.useSyncExternalStoreWithSelector(a.addNestedSub,l.getState,u||l.getState,c,s);return X.useDebugValue(d),d};return Object.assign(n,{withTypes:()=>n}),n}const qe=fE();function ge(t){return`Minified Redux error #${t}; visit https://redux.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}var pE=typeof Symbol=="function"&&Symbol.observable||"@@observable",Gf=pE,Va=()=>Math.random().toString(36).substring(7).split("").join("."),mE={INIT:`@@redux/INIT${Va()}`,REPLACE:`@@redux/REPLACE${Va()}`,PROBE_UNKNOWN_ACTION:()=>`@@redux/PROBE_UNKNOWN_ACTION${Va()}`},Xo=mE;function Pd(t){if(typeof t!="object"||t===null)return!1;let e=t;for(;Object.getPrototypeOf(e)!==null;)e=Object.getPrototypeOf(e);return Object.getPrototypeOf(t)===e||Object.getPrototypeOf(t)===null}function b_(t,e,n){if(typeof t!="function")throw new Error(ge(2));if(typeof e=="function"&&typeof n=="function"||typeof n=="function"&&typeof arguments[3]=="function")throw new Error(ge(0));if(typeof e=="function"&&typeof n>"u"&&(n=e,e=void 0),typeof n<"u"){if(typeof n!="function")throw new Error(ge(1));return n(b_)(t,e)}let r=t,i=e,s=new Map,o=s,l=0,a=!1;function u(){o===s&&(o=new Map,s.forEach((T,p)=>{o.set(p,T)}))}function c(){if(a)throw new Error(ge(3));return i}function d(T){if(typeof T!="function")throw new Error(ge(4));if(a)throw new Error(ge(5));let p=!0;u();const f=l++;return o.set(f,T),function(){if(p){if(a)throw new Error(ge(6));p=!1,u(),o.delete(f),s=null}}}function h(T){if(!Pd(T))throw new Error(ge(7));if(typeof T.type>"u")throw new Error(ge(8));if(typeof T.type!="string")throw new Error(ge(17));if(a)throw new Error(ge(9));try{a=!0,i=r(i,T)}finally{a=!1}return(s=o).forEach(f=>{f()}),T}function m(T){if(typeof T!="function")throw new Error(ge(10));r=T,h({type:Xo.REPLACE})}function y(){const T=d;return{subscribe(p){if(typeof p!="object"||p===null)throw new Error(ge(11));function f(){const v=p;v.next&&v.next(c())}return f(),{unsubscribe:T(f)}},[Gf](){return this}}}return h({type:Xo.INIT}),{dispatch:h,subscribe:d,getState:c,replaceReducer:m,[Gf]:y}}function gE(t){Object.keys(t).forEach(e=>{const n=t[e];if(typeof n(void 0,{type:Xo.INIT})>"u")throw new Error(ge(12));if(typeof n(void 0,{type:Xo.PROBE_UNKNOWN_ACTION()})>"u")throw new Error(ge(13))})}function _E(t){const e=Object.keys(t),n={};for(let s=0;s<e.length;s++){const o=e[s];typeof t[o]=="function"&&(n[o]=t[o])}const r=Object.keys(n);let i;try{gE(n)}catch(s){i=s}return function(o={},l){if(i)throw i;let a=!1;const u={};for(let c=0;c<r.length;c++){const d=r[c],h=n[d],m=o[d],y=h(m,l);if(typeof y>"u")throw l&&l.type,new Error(ge(14));u[d]=y,a=a||y!==m}return a=a||r.length!==Object.keys(o).length,a?u:o}}function Jo(...t){return t.length===0?e=>e:t.length===1?t[0]:t.reduce((e,n)=>(...r)=>e(n(...r)))}function yE(...t){return e=>(n,r)=>{const i=e(n,r);let s=()=>{throw new Error(ge(15))};const o={getState:i.getState,dispatch:(a,...u)=>s(a,...u)},l=t.map(a=>a(o));return s=Jo(...l)(i.dispatch),{...i,dispatch:s}}}function vE(t){return Pd(t)&&"type"in t&&typeof t.type=="string"}var F_=Symbol.for("immer-nothing"),Kf=Symbol.for("immer-draftable"),Ne=Symbol.for("immer-state");function ut(t,...e){throw new Error(`[Immer] minified error nr: ${t}. Full error at: https://bit.ly/3cXEKWf`)}var He=Object,Vr=He.getPrototypeOf,Zo="constructor",Hl="prototype",tc="configurable",el="enumerable",vo="writable",is="value",Vt=t=>!!t&&!!t[Ne];function it(t){var e;return t?U_(t)||Kl(t)||!!t[Kf]||!!((e=t[Zo])!=null&&e[Kf])||ql(t)||Is(t):!1}var wE=He[Hl][Zo].toString(),qf=new WeakMap;function U_(t){if(!t||!xd(t))return!1;const e=Vr(t);if(e===null||e===He[Hl])return!0;const n=He.hasOwnProperty.call(e,Zo)&&e[Zo];if(n===Object)return!0;if(!cr(n))return!1;let r=qf.get(n);return r===void 0&&(r=Function.toString.call(n),qf.set(n,r)),r===wE}function Gl(t,e,n=!0){Cs(t)===0?(n?Reflect.ownKeys(t):He.keys(t)).forEach(i=>{e(i,t[i],t)}):t.forEach((r,i)=>e(i,r,t))}function Cs(t){const e=t[Ne];return e?e.type_:Kl(t)?1:ql(t)?2:Is(t)?3:0}var $a=(t,e,n=Cs(t))=>n===2?t.has(e):He[Hl].hasOwnProperty.call(t,e),nc=(t,e,n=Cs(t))=>n===2?t.get(e):t[e],tl=(t,e,n,r=Cs(t))=>{r===2?t.set(e,n):r===3?t.add(n):t[e]=n};function SE(t,e){return t===e?t!==0||1/t===1/e:t!==t&&e!==e}var Kl=Array.isArray,ql=t=>t instanceof Map,Is=t=>t instanceof Set,xd=t=>typeof t=="object",cr=t=>typeof t=="function",Ha=t=>typeof t=="boolean";function EE(t){const e=+t;return Number.isInteger(e)&&String(e)===t}var Rt=t=>t.copy_||t.base_,Ad=t=>t.modified_?t.copy_:t.base_;function rc(t,e){if(ql(t))return new Map(t);if(Is(t))return new Set(t);if(Kl(t))return Array[Hl].slice.call(t);const n=U_(t);if(e===!0||e==="class_only"&&!n){const r=He.getOwnPropertyDescriptors(t);delete r[Ne];let i=Reflect.ownKeys(r);for(let s=0;s<i.length;s++){const o=i[s],l=r[o];l[vo]===!1&&(l[vo]=!0,l[tc]=!0),(l.get||l.set)&&(r[o]={[tc]:!0,[vo]:!0,[el]:l[el],[is]:t[o]})}return He.create(Vr(t),r)}else{const r=Vr(t);if(r!==null&&n)return{...t};const i=He.create(r);return He.assign(i,t)}}function Od(t,e=!1){return Ql(t)||Vt(t)||!it(t)||(Cs(t)>1&&He.defineProperties(t,{set:eo,add:eo,clear:eo,delete:eo}),He.freeze(t),e&&Gl(t,(n,r)=>{Od(r,!0)},!1)),t}function CE(){ut(2)}var eo={[is]:CE};function Ql(t){return t===null||!xd(t)?!0:He.isFrozen(t)}var nl="MapSet",ic="Patches",Qf="ArrayMethods",j_={};function Xn(t){const e=j_[t];return e||ut(0,t),e}var Yf=t=>!!j_[t],ss,z_=()=>ss,IE=(t,e)=>({drafts_:[],parent_:t,immer_:e,canAutoFreeze_:!0,unfinalizedDrafts_:0,handledSet_:new Set,processedForPatches_:new Set,mapSetPlugin_:Yf(nl)?Xn(nl):void 0,arrayMethodsPlugin_:Yf(Qf)?Xn(Qf):void 0});function Xf(t,e){e&&(t.patchPlugin_=Xn(ic),t.patches_=[],t.inversePatches_=[],t.patchListener_=e)}function sc(t){oc(t),t.drafts_.forEach(kE),t.drafts_=null}function oc(t){t===ss&&(ss=t.parent_)}var Jf=t=>ss=IE(ss,t);function kE(t){const e=t[Ne];e.type_===0||e.type_===1?e.revoke_():e.revoked_=!0}function Zf(t,e){e.unfinalizedDrafts_=e.drafts_.length;const n=e.drafts_[0];if(t!==void 0&&t!==n){n[Ne].modified_&&(sc(e),ut(4)),it(t)&&(t=ep(e,t));const{patchPlugin_:i}=e;i&&i.generateReplacementPatches_(n[Ne].base_,t,e)}else t=ep(e,n);return TE(e,t,!0),sc(e),e.patches_&&e.patchListener_(e.patches_,e.inversePatches_),t!==F_?t:void 0}function ep(t,e){if(Ql(e))return e;const n=e[Ne];if(!n)return rl(e,t.handledSet_,t);if(!Yl(n,t))return e;if(!n.modified_)return n.base_;if(!n.finalized_){const{callbacks_:r}=n;if(r)for(;r.length>0;)r.pop()(t);V_(n,t)}return n.copy_}function TE(t,e,n=!1){!t.parent_&&t.immer_.autoFreeze_&&t.canAutoFreeze_&&Od(e,n)}function B_(t){t.finalized_=!0,t.scope_.unfinalizedDrafts_--}var Yl=(t,e)=>t.scope_===e,NE=[];function W_(t,e,n,r){const i=Rt(t),s=t.type_;if(r!==void 0&&nc(i,r,s)===e){tl(i,r,n,s);return}if(!t.draftLocations_){const l=t.draftLocations_=new Map;Gl(i,(a,u)=>{if(Vt(u)){const c=l.get(u)||[];c.push(a),l.set(u,c)}})}const o=t.draftLocations_.get(e)??NE;for(const l of o)tl(i,l,n,s)}function RE(t,e,n){t.callbacks_.push(function(i){var l;const s=e;if(!s||!Yl(s,i))return;(l=i.mapSetPlugin_)==null||l.fixSetContents(s);const o=Ad(s);W_(t,s.draft_??s,o,n),V_(s,i)})}function V_(t,e){var r;if(t.modified_&&!t.finalized_&&(t.type_===3||t.type_===1&&t.allIndicesReassigned_||(((r=t.assigned_)==null?void 0:r.size)??0)>0)){const{patchPlugin_:i}=e;if(i){const s=i.getPath(t);s&&i.generatePatches_(t,s,e)}B_(t)}}function PE(t,e,n){const{scope_:r}=t;if(Vt(n)){const i=n[Ne];Yl(i,r)&&i.callbacks_.push(function(){wo(t);const o=Ad(i);W_(t,n,o,e)})}else it(n)&&t.callbacks_.push(function(){const s=Rt(t);t.type_===3?s.has(n)&&rl(n,r.handledSet_,r):nc(s,e,t.type_)===n&&r.drafts_.length>1&&(t.assigned_.get(e)??!1)===!0&&t.copy_&&rl(nc(t.copy_,e,t.type_),r.handledSet_,r)})}function rl(t,e,n){return!n.immer_.autoFreeze_&&n.unfinalizedDrafts_<1||Vt(t)||e.has(t)||!it(t)||Ql(t)||(e.add(t),Gl(t,(r,i)=>{if(Vt(i)){const s=i[Ne];if(Yl(s,n)){const o=Ad(s);tl(t,r,o,t.type_),B_(s)}}else it(i)&&rl(i,e,n)})),t}function xE(t,e){const n=Kl(t),r={type_:n?1:0,scope_:e?e.scope_:z_(),modified_:!1,finalized_:!1,assigned_:void 0,parent_:e,base_:t,draft_:null,copy_:null,revoke_:null,isManual_:!1,callbacks_:void 0};let i=r,s=il;n&&(i=[r],s=os);const{revoke:o,proxy:l}=Proxy.revocable(i,s);return r.draft_=l,r.revoke_=o,[l,r]}var il={get(t,e){if(e===Ne)return t;let n=t.scope_.arrayMethodsPlugin_;const r=t.type_===1&&typeof e=="string";if(r&&n!=null&&n.isArrayOperationMethod(e))return n.createMethodInterceptor(t,e);const i=Rt(t);if(!$a(i,e,t.type_))return OE(t,i,e);const s=i[e];if(t.finalized_||!it(s)||r&&t.operationMethod&&(n!=null&&n.isMutatingArrayMethod(t.operationMethod))&&EE(e))return s;if(s===Ga(t.base_,e)||AE(t,e,s)){wo(t);const o=t.type_===1?+e:e,l=ac(t.scope_,s,t,o);return t.copy_[o]=l}return s},has(t,e){return e in Rt(t)},ownKeys(t){return Reflect.ownKeys(Rt(t))},set(t,e,n){const r=$_(Rt(t),e);if(r!=null&&r.set)return r.set.call(t.draft_,n),!0;if(!t.modified_){const i=Ga(Rt(t),e),s=i==null?void 0:i[Ne];if(s&&s.base_===n)return t.copy_[e]=n,t.assigned_.delete(e),!0;if(SE(n,i)&&(n!==void 0||$a(t.base_,e,t.type_)))return!0;wo(t),lc(t)}return t.copy_[e]===n&&(n!==void 0||$a(t.copy_,e,t.type_))||Number.isNaN(n)&&Number.isNaN(t.copy_[e])||(t.copy_[e]=n,t.assigned_.set(e,!0),PE(t,e,n)),!0},deleteProperty(t,e){return wo(t),Ga(t.base_,e)!==void 0||e in t.base_?(t.assigned_.set(e,!1),lc(t)):t.assigned_.delete(e),t.copy_&&delete t.copy_[e],!0},getOwnPropertyDescriptor(t,e){const n=Rt(t),r=Reflect.getOwnPropertyDescriptor(n,e);return r&&{[vo]:!0,[tc]:t.type_!==1||e!=="length",[el]:r[el],[is]:n[e]}},defineProperty(){ut(11)},getPrototypeOf(t){return Vr(t.base_)},setPrototypeOf(){ut(12)}},os={};for(let t in il){let e=il[t];os[t]=function(){const n=arguments;return n[0]=n[0][0],e.apply(this,n)}}os.deleteProperty=function(t,e){return os.set.call(this,t,e,void 0)};os.set=function(t,e,n){return il.set.call(this,t[0],e,n,t[0])};function Ga(t,e){const n=t[Ne];return(n?Rt(n):t)[e]}function AE(t,e,n){return t.type_!==1||!t.allIndicesReassigned_||!it(n)||n[Ne]?!1:t.baseRefs_.has(n)}function OE(t,e,n){var i;const r=$_(e,n);return r?is in r?r[is]:(i=r.get)==null?void 0:i.call(t.draft_):void 0}function $_(t,e){if(!(e in t))return;let n=Vr(t);for(;n;){const r=Object.getOwnPropertyDescriptor(n,e);if(r)return r;n=Vr(n)}}function lc(t){t.modified_||(t.modified_=!0,t.parent_&&lc(t.parent_))}function wo(t){t.copy_||(t.assigned_=new Map,t.copy_=rc(t.base_,t.scope_.immer_.useStrictShallowCopy_))}var DE=class{constructor(t){this.autoFreeze_=!0,this.useStrictShallowCopy_=!1,this.useStrictIteration_=!1,this.produce=(e,n,r)=>{if(cr(e)&&!cr(n)){const s=n;n=e;const o=this;return function(a=s,...u){return o.produce(a,c=>n.call(this,c,...u))}}cr(n)||ut(6),r!==void 0&&!cr(r)&&ut(7);let i;if(it(e)){const s=Jf(this),o=ac(s,e,void 0);let l=!0;try{i=n(o),l=!1}finally{l?sc(s):oc(s)}return Xf(s,r),Zf(i,s)}else if(!e||!xd(e)){if(i=n(e),i===void 0&&(i=e),i===F_&&(i=void 0),this.autoFreeze_&&Od(i,!0),r){const s=[],o=[];Xn(ic).generateReplacementPatches_(e,i,{patches_:s,inversePatches_:o}),r(s,o)}return i}else ut(1,e)},this.produceWithPatches=(e,n)=>{if(cr(e))return(o,...l)=>this.produceWithPatches(o,a=>e(a,...l));let r,i;return[this.produce(e,n,(o,l)=>{r=o,i=l}),r,i]},Ha(t==null?void 0:t.autoFreeze)&&this.setAutoFreeze(t.autoFreeze),Ha(t==null?void 0:t.useStrictShallowCopy)&&this.setUseStrictShallowCopy(t.useStrictShallowCopy),Ha(t==null?void 0:t.useStrictIteration)&&this.setUseStrictIteration(t.useStrictIteration)}createDraft(t){it(t)||ut(8),Vt(t)&&(t=ME(t));const e=Jf(this),n=ac(e,t,void 0);return n[Ne].isManual_=!0,oc(e),n}finishDraft(t,e){const n=t&&t[Ne];(!n||!n.isManual_)&&ut(9);const{scope_:r}=n;return Xf(r,e),Zf(void 0,r)}setAutoFreeze(t){this.autoFreeze_=t}setUseStrictShallowCopy(t){this.useStrictShallowCopy_=t}setUseStrictIteration(t){this.useStrictIteration_=t}shouldUseStrictIteration(){return this.useStrictIteration_}applyPatches(t,e){let n;for(n=e.length-1;n>=0;n--){const i=e[n];if(i.path.length===0&&i.op==="replace"){t=i.value;break}}n>-1&&(e=e.slice(n+1));const r=Xn(ic).applyPatches_;return Vt(t)?r(t,e):this.produce(t,i=>r(i,e))}};function ac(t,e,n,r){const[i,s]=ql(e)?Xn(nl).proxyMap_(e,n):Is(e)?Xn(nl).proxySet_(e,n):xE(e,n);return((n==null?void 0:n.scope_)??z_()).drafts_.push(i),s.callbacks_=(n==null?void 0:n.callbacks_)??[],s.key_=r,n&&r!==void 0?RE(n,s,r):s.callbacks_.push(function(a){var c;(c=a.mapSetPlugin_)==null||c.fixSetContents(s);const{patchPlugin_:u}=a;s.modified_&&u&&u.generatePatches_(s,[],a)}),i}function ME(t){return Vt(t)||ut(10,t),H_(t)}function H_(t){if(!it(t)||Ql(t))return t;const e=t[Ne];let n,r=!0;if(e){if(!e.modified_)return e.base_;e.finalized_=!0,n=rc(t,e.scope_.immer_.useStrictShallowCopy_),r=e.scope_.immer_.shouldUseStrictIteration()}else n=rc(t,!0);const i=n;return Is(n)&&(n=new Set),Gl(i,(s,o)=>{tl(n,s,H_(o))},r),e&&(e.finalized_=!1),n}var Ka=globalThis.Iterator;Ka==null||Ka.from;var LE=new DE,G_=LE.produce;function K_(t){return({dispatch:n,getState:r})=>i=>s=>typeof s=="function"?s(n,r,t):i(s)}var bE=K_(),FE=K_;const UE=typeof window<"u"&&window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__?window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__:function(){if(arguments.length!==0)return typeof arguments[0]=="object"?Jo:Jo.apply(null,arguments)};function tp(t,e){function n(...r){if(e){let i=e(...r);if(!i)throw new Error(Ct(0));return{type:t,payload:i.payload,..."meta"in i&&{meta:i.meta},..."error"in i&&{error:i.error}}}return{type:t,payload:r[0]}}return n.toString=()=>`${t}`,n.type=t,n.match=r=>r!=null&&r.type===t&&vE(r),n}var q_=class ki extends Array{constructor(...e){super(...e),Object.setPrototypeOf(this,ki.prototype)}static get[Symbol.species](){return ki}concat(...e){return super.concat.apply(this,e)}prepend(...e){return e.length===1&&Array.isArray(e[0])?new ki(...e[0].concat(this)):new ki(...e.concat(this))}};function np(t){return it(t)?G_(t,()=>{}):t}function to(t,e,n){return t.has(e)?t.get(e):t.set(e,n(e)).get(e)}function jE(t){return typeof t=="boolean"}const zE=()=>function(e){const{thunk:n=!0,immutableCheck:r=!0,serializableCheck:i=!0,actionCreatorCheck:s=!0}=e??{};let o=new q_;return n&&(jE(n)?o.push(bE):o.push(FE(n.extraArgument))),o},BE="RTK_autoBatch",rp=t=>e=>{setTimeout(e,t)},WE=(t,e,n)=>r=>{let i=!1,s,o;const l=()=>{i||(i=!0,e==null||e(s),clearTimeout(o),r())};s=t(l),o=setTimeout(l,n)},VE=(t={type:"raf"})=>e=>(...n)=>{const r=e(...n);let i=!0,s=!1,o=!1;const l=new Set,a=t.type==="tick"?queueMicrotask:t.type==="raf"?typeof window<"u"&&window.requestAnimationFrame?WE(window.requestAnimationFrame,window.cancelAnimationFrame,100):rp(10):t.type==="callback"?t.queueNotification:rp(t.timeout),u=()=>{o=!1,s&&(s=!1,l.forEach(c=>c()))};return Object.assign({},r,{subscribe(c){const d=()=>i&&c(),h=r.subscribe(d);return l.add(c),()=>{h(),l.delete(c)}},dispatch(c){var d;try{return i=!((d=c==null?void 0:c.meta)!=null&&d[BE]),s=!i,s&&(o||(o=!0,a(u))),r.dispatch(c)}finally{i=!0}}})},$E=t=>function(n){const{autoBatch:r=!0}=n??{};let i=new q_(t);return r&&i.push(VE(typeof r=="object"?r:void 0)),i};function HE(t){const e=zE(),{reducer:n=void 0,middleware:r,devTools:i=!0,preloadedState:s=void 0,enhancers:o=void 0}=t||{};let l;if(typeof n=="function")l=n;else if(Pd(n))l=_E(n);else throw new Error(Ct(1));let a;typeof r=="function"?a=r(e):a=e();let u=Jo;i&&(u=UE({trace:!1,...typeof i=="object"&&i}));const c=yE(...a),d=$E(c);let h=typeof o=="function"?o(d):d();const m=u(...h);return b_(l,s,m)}function Q_(t){const e={},n=[];let r;const i={addCase(s,o){const l=typeof s=="string"?s:s.type;if(!l)throw new Error(Ct(28));if(l in e)throw new Error(Ct(29));return e[l]=o,i},addAsyncThunk(s,o){return o.pending&&(e[s.pending.type]=o.pending),o.rejected&&(e[s.rejected.type]=o.rejected),o.fulfilled&&(e[s.fulfilled.type]=o.fulfilled),o.settled&&n.push({matcher:s.settled,reducer:o.settled}),i},addMatcher(s,o){return n.push({matcher:s,reducer:o}),i},addDefaultCase(s){return r=s,i}};return t(i),[e,n,r]}function GE(t){return typeof t=="function"}function KE(t,e){let[n,r,i]=Q_(e),s;if(GE(t))s=()=>np(t());else{const a=np(t);s=()=>a}function o(a,u,c){if(Vt(a)){const d=u(a,c);return d===void 0?a:d}else{if(it(a))return G_(a,d=>u(d,c));{const d=u(a,c);if(d===void 0){if(a===null)return a;throw new Error(Ct(9))}return d}}}function l(a=s(),u){const c=n[u.type];let d;for(const{matcher:h,reducer:m}of r)h(u)&&m&&(d??(d=[])).push(m);if(!c&&!d)return i?o(a,i,u):a;if(c&&(a=o(a,c,u)),d)for(const h of d)a=o(a,h,u);return a}return l.getInitialState=s,l}const qE=Symbol.for("rtk-slice-createasyncthunk");function QE(t,e){return`${t}/${e}`}function YE({creators:t}={}){var n;const e=(n=t==null?void 0:t.asyncThunk)==null?void 0:n[qE];return function(i){const{name:s,reducerPath:o=s}=i;if(!s)throw new Error(Ct(11));const l=(typeof i.reducers=="function"?i.reducers(JE()):i.reducers)||{},a=Object.keys(l),u={sliceCaseReducersByName:{},sliceCaseReducersByType:{},actionCreators:{},sliceMatchers:[]},c={addCase(v,E){const I=typeof v=="string"?v:v.type;if(!I)throw new Error(Ct(12));if(I in u.sliceCaseReducersByType)throw new Error(Ct(13));return u.sliceCaseReducersByType[I]=E,c},addMatcher(v,E){return u.sliceMatchers.push({matcher:v,reducer:E}),c},exposeAction(v,E){return u.actionCreators[v]=E,c},exposeCaseReducer(v,E){return u.sliceCaseReducersByName[v]=E,c}};a.forEach(v=>{const E=l[v],I={reducerName:v,type:QE(s,v),createNotation:typeof i.reducers=="function"};eC(E)?nC(I,E,c,e):ZE(I,E,c)});function d(){const[v={},E=[],I=void 0]=typeof i.extraReducers=="function"?Q_(i.extraReducers):[i.extraReducers],k={...v,...u.sliceCaseReducersByType};return KE(i.initialState,N=>{for(let O in k)N.addCase(O,k[O]);for(let O of u.sliceMatchers)N.addMatcher(O.matcher,O.reducer);for(let O of E)N.addMatcher(O.matcher,O.reducer);I&&N.addDefaultCase(I)})}const h=v=>v,m=new Map,y=new WeakMap;let w;function T(v,E){return w||(w=d()),w(v,E)}function p(){return w||(w=d()),w.getInitialState()}function f(v,E=!1){function I(N){let O=N[v];return typeof O>"u"&&E&&(O=to(y,I,p)),O}function k(N=h){return to(to(m,E,()=>new WeakMap),N,()=>{const O={};for(const[M,We]of Object.entries(i.selectors??{}))O[M]=XE(We,N,()=>to(y,N,p),E);return O})}return{reducerPath:v,getSelectors:k,get selectors(){return k(I)},selectSlice:I}}const g={name:s,reducer:T,actions:u.actionCreators,caseReducers:u.sliceCaseReducersByName,getInitialState:p,...f(o),injectInto(v,{reducerPath:E,...I}={}){const k=E??o;return v.inject({reducerPath:k,reducer:T},I),{...g,...f(k,!0)}}};return g}}function XE(t,e,n,r){function i(s,...o){let l=e(s);return typeof l>"u"&&r&&(l=n()),t(l,...o)}return i.unwrapped=t,i}const Y_=YE();function JE(){function t(e,n){return{_reducerDefinitionType:"asyncThunk",payloadCreator:e,...n}}return t.withTypes=()=>t,{reducer(e){return Object.assign({[e.name](...n){return e(...n)}}[e.name],{_reducerDefinitionType:"reducer"})},preparedReducer(e,n){return{_reducerDefinitionType:"reducerWithPrepare",prepare:e,reducer:n}},asyncThunk:t}}function ZE({type:t,reducerName:e,createNotation:n},r,i){let s,o;if("reducer"in r){if(n&&!tC(r))throw new Error(Ct(17));s=r.reducer,o=r.prepare}else s=r;i.addCase(t,s).exposeCaseReducer(e,s).exposeAction(e,o?tp(t,o):tp(t))}function eC(t){return t._reducerDefinitionType==="asyncThunk"}function tC(t){return t._reducerDefinitionType==="reducerWithPrepare"}function nC({type:t,reducerName:e},n,r,i){if(!i)throw new Error(Ct(18));const{payloadCreator:s,fulfilled:o,pending:l,rejected:a,settled:u,options:c}=n,d=i(t,s,c);r.exposeAction(e,d),o&&r.addCase(d.fulfilled,o),l&&r.addCase(d.pending,l),a&&r.addCase(d.rejected,a),u&&r.addMatcher(d.settled,u),r.exposeCaseReducer(e,{fulfilled:o||no,pending:l||no,rejected:a||no,settled:u||no})}function no(){}function Ct(t){return`Minified Redux Toolkit error #${t}; visit https://redux-toolkit.js.org/Errors?code=${t} for the full message or use the non-minified dev environment for full errors. `}function Dd(){return{p1:"",p2:"",wdate:"",totalBudget:"",mahar:"",timeline:[{t:"12 mo — Set date, budget & guest-count target",d:!1},{t:"12 mo — Book venue/gedung & lock the big date",d:!1},{t:"9 mo — Book Wedding Organizer, catering, MUA & photographer",d:!1},{t:"6 mo — Decor, attire (busana pengantin), invitations design",d:!1},{t:"3 mo — Start legal paperwork (KUA/Simkah or Catatan Sipil)",d:!1},{t:"3 mo — Finalize guest list & send invitations",d:!1},{t:"1 mo — Confirm all vendors, pay balances, prep seserahan & mahar",d:!1},{t:"1 wk — Final headcount to caterer, confirm rundown with WO",d:!1},{t:"Day-of — Relax and enjoy 🎉",d:!1}],ceremony:[["Venue / Gedung","1","","","no","",""],["Catering","1","","","no","",""],["Wedding Organizer (WO)","1","","","no","",""],["MUA (makeup & hair)","1","","","no","",""],["Dekorasi","1","","","no","",""],["Fotografi & Videografi","1","","","no","",""],["Busana Pengantin","1","","","no","",""],["Undangan","1","","","no","",""],["Souvenir / Hampers","1","","","no","",""],["Mahar & Cincin","1","","","no","",""],["Dokumen / KUA","1","","","no","",""],["Lain-lain","1","","","no","",""]],guests:[],vendors:[],seserahan:[["Hijab / prayer set","1","","","no","",""],["Cosmetics","1 set","","","no","",""],["Shoes","1 pair","","","no","",""],["Sweets / fruits","","","","no","",""]],maharkawin:[["Cincin nikah","1","","","no","",""],["Mahar (emas / replika)","1","","","no","",""],["Uang mahar (cash)","1","","","no","",""],["Ring box / keepsake","1","","","no","",""]],rundown:[["08:00","Siraman / prep",""],["09:00","MUA & dressing",""],["10:00","Akad / Pemberkatan",""],["12:00","Lunch",""],["13:00","Resepsi / reception",""],["16:00","Close",""]],adat:[{t:"Lamaran / Tunangan (proposal & engagement)",d:!1},{t:"Siraman (pre-wedding cleansing ritual)",d:!1},{t:"Midodareni (Javanese — night before)",d:!1},{t:"Seserahan / Hantaran handover",d:!1},{t:"Akad Nikah (Muslim) / Pemberkatan (Christian) / ceremony per your faith",d:!1},{t:"Sungkeman (paying respects to parents)",d:!1},{t:"Resepsi (reception)",d:!1},{t:"Unduh Mantu (groom-side reception)",d:!1}],legal:[{t:"Muslim: Register via KUA / Simkah online (simkah4.kemenag.go.id)",d:!1,n:"Start ~1–3 months ahead"},{t:"Muslim: Surat pengantar RT/RW → Kelurahan (N1–N4 / model forms)",d:!1,n:""},{t:"Muslim: Surat keterangan belum menikah",d:!1,n:""},{t:"Muslim: Numpang nikah letter if marrying outside your domicile",d:!1,n:""},{t:"Muslim: Imunisasi TT (required in some regions)",d:!1,n:""},{t:"Non-Muslim: Pemberkatan at place of worship",d:!1,n:""},{t:"Non-Muslim: Pencatatan at Dinas Dukcapil / Catatan Sipil",d:!1,n:"Within set days of ceremony"},{t:"Both: KTP, Kartu Keluarga (KK), akta kelahiran (birth cert)",d:!1,n:""},{t:"Both: Pas foto (check background color & size rules)",d:!1,n:""},{t:"Both: Collect buku nikah / akta perkawinan after",d:!1,n:""}]}}const X_={apiKey:"AIzaSyCUt0mzlONnY0w91Bg2UiWBgM8Oz9t3iH4",authDomain:"pineapple-lover.firebaseapp.com",databaseURL:"https://pineapple-lover-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"pineapple-lover",storageBucket:"pineapple-lover.firebasestorage.app",messagingSenderId:"1004730650139",appId:"1:1004730650139:web:bed40a2503a6c4529b72be"},J_="pineapple-wedding",ks=!!X_.databaseURL,Z_="weddingDashReactV1",ey=[["overview","Overview"],["budget","Budget"],["ceremony","Wedding Ceremony"],["seserahan","Seserahan"],["mahar","Mahar & Mas Kawin"],["guests","Guests"],["vendors","Vendors"],["adat","Adat & Rituals"],["legal","Legal"],["rundown","Rundown"],["data","Backup"]],qa=t=>[{h:"Item",type:"text"},{h:"Qty",type:"text"},{h:"Unit price",type:"num"},{h:"Vendor",type:"text"},{h:t,type:"select",opts:["no","yes"]},{h:"Notes",type:"text"},{h:"Marketplace link",type:"link"}],Xl={ceremony:qa("Paid"),seserahan:qa("Bought"),maharkawin:qa("Bought"),guests:[{h:"Guest Name",type:"text"},{h:"Side",type:"select",opts:["","Groom","Bride","Both"]},{h:"Bringing +1?",type:"select",opts:["No","Yes"]},{h:"+1 Name",type:"text"},{h:"RSVP",type:"select",opts:["","Pending","Confirmed","Declined"]},{h:"Notes",type:"text"},{h:"Pax",type:"num"}],vendors:[{h:"Category",type:"text"},{h:"Vendor",type:"text"},{h:"Contact",type:"text"},{h:"Quote",type:"num"},{h:"DP paid",type:"num"},{h:"Booked",type:"select",opts:["no","yes"]},{h:"Notes",type:"text"}],rundown:[{h:"Time",type:"text"},{h:"Event (acara)",type:"text"},{h:"PIC",type:"text"}]};function ty(t){const e=Dd();for(const n in e)n in t||(t[n]=e[n]);return t}function rC(){try{const t=localStorage.getItem(Z_);if(t){const e=JSON.parse(t);if(e&&typeof e=="object")return ty(e)}}catch{}return Dd()}const ny=Y_({name:"wedding",initialState:rC(),reducers:{setField:(t,{payload:{field:e,value:n}})=>{t[e]=n},setCell:(t,{payload:{table:e,row:n,col:r,value:i}})=>{t[e][n][r]=i},addRow:(t,{payload:{table:e,blank:n}})=>{t[e].push(n)},delRow:(t,{payload:{table:e,row:n}})=>{t[e].splice(n,1)},setTable:(t,{payload:{table:e,rows:n}})=>{t[e]=n},toggleCheck:(t,{payload:{list:e,index:n,done:r}})=>{t[e][n].d=r},addCheck:(t,{payload:{list:e,text:n}})=>{t[e].push({t:n,d:!1,n:""})},delCheck:(t,{payload:{list:e,index:n}})=>{t[e].splice(n,1)},replaceAll:(t,{payload:e})=>ty({...e}),resetAll:()=>Dd()}}),{setField:sl,setCell:iC,addRow:sC,delRow:oC,setTable:lC,toggleCheck:aC,addCheck:uC,delCheck:cC,replaceAll:ry,resetAll:dC}=ny.actions,hC=ny.reducer,iy=Y_({name:"auth",initialState:{user:null,status:ks?"connecting":"local",error:""},reducers:{setUser:(t,{payload:e})=>{t.user=e},setStatus:(t,{payload:e})=>{t.status=e},setAuthError:(t,{payload:e})=>{t.error=e}}}),{setUser:ip,setStatus:gn,setAuthError:uc}=iy.actions,fC=iy.reducer;var sp={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sy={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C=function(t,e){if(!t)throw ei(e)},ei=function(t){return new Error("Firebase Database ("+sy.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},pC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],a=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(a>>10)),e[r++]=String.fromCharCode(56320+(a&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Md={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,a=i+2<t.length,u=a?t[i+2]:0,c=s>>2,d=(s&3)<<4|l>>4;let h=(l&15)<<2|u>>6,m=u&63;a||(m=64,o||(h=64)),r.push(n[c],n[d],n[h],n[m])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(oy(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):pC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||u==null||d==null)throw new mC;const h=s<<2|l>>4;if(r.push(h),u!==64){const m=l<<4&240|u>>2;if(r.push(m),d!==64){const y=u<<6&192|d;r.push(y)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class mC extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ly=function(t){const e=oy(t);return Md.encodeByteArray(e,!0)},ol=function(t){return ly(t).replace(/\./g,"")},ll=function(t){try{return Md.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gC(t){return ay(void 0,t)}function ay(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!_C(n)||(t[n]=ay(t[n],e[n]));return t}function _C(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vC=()=>yC().__FIREBASE_DEFAULTS__,wC=()=>{if(typeof process>"u"||typeof sp>"u")return;const t=sp.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},SC=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&ll(t[1]);return e&&JSON.parse(e)},Ld=()=>{try{return vC()||wC()||SC()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},uy=t=>{var e,n;return(n=(e=Ld())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},EC=t=>{const e=uy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},cy=()=>{var t;return(t=Ld())===null||t===void 0?void 0:t.config},dy=t=>{var e;return(e=Ld())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jl{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function CC(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[ol(JSON.stringify(n)),ol(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bd(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(xe())}function IC(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function kC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function hy(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function TC(){const t=xe();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function NC(){return sy.NODE_ADMIN===!0}function RC(){try{return typeof indexedDB=="object"}catch{return!1}}function PC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xC="FirebaseError";class Pn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=xC,Object.setPrototypeOf(this,Pn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ts.prototype.create)}}class Ts{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?AC(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Pn(i,l,r)}}function AC(t,e){return t.replace(OC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const OC=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ls(t){return JSON.parse(t)}function pe(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fy=function(t){let e={},n={},r={},i="";try{const s=t.split(".");e=ls(ll(s[0])||""),n=ls(ll(s[1])||""),i=s[2],r=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:r,signature:i}},DC=function(t){const e=fy(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},MC=function(t){const e=fy(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function $r(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function cc(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function al(t,e,n){const r={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(r[i]=e.call(n,t[i],i,t));return r}function ul(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(op(s)&&op(o)){if(!ul(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function op(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ti(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LC{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const r=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)r[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)r[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=r[d-3]^r[d-8]^r[d-14]^r[d-16];r[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],s=this.chain_[1],o=this.chain_[2],l=this.chain_[3],a=this.chain_[4],u,c;for(let d=0;d<80;d++){d<40?d<20?(u=l^s&(o^l),c=1518500249):(u=s^o^l,c=1859775393):d<60?(u=s&o|l&(s|o),c=2400959708):(u=s^o^l,c=3395469782);const h=(i<<5|i>>>27)+u+a+c+r[d]&4294967295;a=l,l=o,o=(s<<30|s>>>2)&4294967295,s=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+s&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+a&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const r=n-this.blockSize;let i=0;const s=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=r;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(s[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}else for(;i<n;)if(s[o]=e[i],++o,++i,o===this.blockSize){this.compress_(s),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let r=0;for(let i=0;i<5;i++)for(let s=24;s>=0;s-=8)e[r]=this.chain_[i]>>s&255,++r;return e}}function bC(t,e){const n=new FC(t,e);return n.subscribe.bind(n)}class FC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");UC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Qa),i.error===void 0&&(i.error=Qa),i.complete===void 0&&(i.complete=Qa);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function UC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Qa(){}function Fd(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);if(i>=55296&&i<=56319){const s=i-55296;r++,C(r<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(r)-56320;i=65536+(s<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Zl=function(t){let e=0;for(let n=0;n<t.length;n++){const r=t.charCodeAt(n);r<128?e++:r<2048?e+=2:r>=55296&&r<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xe(t){return t&&t._delegate?t._delegate:t}class Jn{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ln="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zC{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Jl;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(WC(e))try{this.getOrInitializeService({instanceIdentifier:Ln})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=Ln){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ln){return this.instances.has(e)}getOptions(e=Ln){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:BC(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ln){return this.component?this.component.multipleInstances?e:Ln:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function BC(t){return t===Ln?void 0:t}function WC(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VC{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new zC(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var V;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(V||(V={}));const $C={debug:V.DEBUG,verbose:V.VERBOSE,info:V.INFO,warn:V.WARN,error:V.ERROR,silent:V.SILENT},HC=V.INFO,GC={[V.DEBUG]:"log",[V.VERBOSE]:"log",[V.INFO]:"info",[V.WARN]:"warn",[V.ERROR]:"error"},KC=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=GC[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ud{constructor(e){this.name=e,this._logLevel=HC,this._logHandler=KC,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in V))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?$C[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,V.DEBUG,...e),this._logHandler(this,V.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,V.VERBOSE,...e),this._logHandler(this,V.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,V.INFO,...e),this._logHandler(this,V.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,V.WARN,...e),this._logHandler(this,V.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,V.ERROR,...e),this._logHandler(this,V.ERROR,...e)}}const qC=(t,e)=>e.some(n=>t instanceof n);let lp,ap;function QC(){return lp||(lp=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function YC(){return ap||(ap=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const py=new WeakMap,dc=new WeakMap,my=new WeakMap,Ya=new WeakMap,jd=new WeakMap;function XC(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(_n(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&py.set(n,t)}).catch(()=>{}),jd.set(e,t),e}function JC(t){if(dc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});dc.set(t,e)}let hc={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return dc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||my.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return _n(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ZC(t){hc=t(hc)}function eI(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Xa(this),e,...n);return my.set(r,e.sort?e.sort():[e]),_n(r)}:YC().includes(t)?function(...e){return t.apply(Xa(this),e),_n(py.get(this))}:function(...e){return _n(t.apply(Xa(this),e))}}function tI(t){return typeof t=="function"?eI(t):(t instanceof IDBTransaction&&JC(t),qC(t,QC())?new Proxy(t,hc):t)}function _n(t){if(t instanceof IDBRequest)return XC(t);if(Ya.has(t))return Ya.get(t);const e=tI(t);return e!==t&&(Ya.set(t,e),jd.set(e,t)),e}const Xa=t=>jd.get(t);function nI(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=_n(o);return r&&o.addEventListener("upgradeneeded",a=>{r(_n(o.result),a.oldVersion,a.newVersion,_n(o.transaction),a)}),n&&o.addEventListener("blocked",a=>n(a.oldVersion,a.newVersion,a)),l.then(a=>{s&&a.addEventListener("close",()=>s()),i&&a.addEventListener("versionchange",u=>i(u.oldVersion,u.newVersion,u))}).catch(()=>{}),l}const rI=["get","getKey","getAll","getAllKeys","count"],iI=["put","add","delete","clear"],Ja=new Map;function up(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Ja.get(e))return Ja.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=iI.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||rI.includes(n)))return;const s=async function(o,...l){const a=this.transaction(o,i?"readwrite":"readonly");let u=a.store;return r&&(u=u.index(l.shift())),(await Promise.all([u[n](...l),i&&a.done]))[0]};return Ja.set(e,s),s}ZC(t=>({...t,get:(e,n,r)=>up(e,n)||t.get(e,n,r),has:(e,n)=>!!up(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sI{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(oI(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function oI(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const fc="@firebase/app",cp="0.10.13";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $t=new Ud("@firebase/app"),lI="@firebase/app-compat",aI="@firebase/analytics-compat",uI="@firebase/analytics",cI="@firebase/app-check-compat",dI="@firebase/app-check",hI="@firebase/auth",fI="@firebase/auth-compat",pI="@firebase/database",mI="@firebase/data-connect",gI="@firebase/database-compat",_I="@firebase/functions",yI="@firebase/functions-compat",vI="@firebase/installations",wI="@firebase/installations-compat",SI="@firebase/messaging",EI="@firebase/messaging-compat",CI="@firebase/performance",II="@firebase/performance-compat",kI="@firebase/remote-config",TI="@firebase/remote-config-compat",NI="@firebase/storage",RI="@firebase/storage-compat",PI="@firebase/firestore",xI="@firebase/vertexai-preview",AI="@firebase/firestore-compat",OI="firebase",DI="10.14.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pc="[DEFAULT]",MI={[fc]:"fire-core",[lI]:"fire-core-compat",[uI]:"fire-analytics",[aI]:"fire-analytics-compat",[dI]:"fire-app-check",[cI]:"fire-app-check-compat",[hI]:"fire-auth",[fI]:"fire-auth-compat",[pI]:"fire-rtdb",[mI]:"fire-data-connect",[gI]:"fire-rtdb-compat",[_I]:"fire-fn",[yI]:"fire-fn-compat",[vI]:"fire-iid",[wI]:"fire-iid-compat",[SI]:"fire-fcm",[EI]:"fire-fcm-compat",[CI]:"fire-perf",[II]:"fire-perf-compat",[kI]:"fire-rc",[TI]:"fire-rc-compat",[NI]:"fire-gcs",[RI]:"fire-gcs-compat",[PI]:"fire-fst",[AI]:"fire-fst-compat",[xI]:"fire-vertex","fire-js":"fire-js",[OI]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cl=new Map,LI=new Map,mc=new Map;function dp(t,e){try{t.container.addComponent(e)}catch(n){$t.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Hr(t){const e=t.name;if(mc.has(e))return $t.debug(`There were multiple attempts to register component ${e}.`),!1;mc.set(e,t);for(const n of cl.values())dp(n,t);for(const n of LI.values())dp(n,t);return!0}function zd(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Ot(t){return t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},yn=new Ts("app","Firebase",bI);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FI{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Jn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw yn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni=DI;function gy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:pc,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw yn.create("bad-app-name",{appName:String(i)});if(n||(n=cy()),!n)throw yn.create("no-options");const s=cl.get(i);if(s){if(ul(n,s.options)&&ul(r,s.config))return s;throw yn.create("duplicate-app",{appName:i})}const o=new VC(i);for(const a of mc.values())o.addComponent(a);const l=new FI(n,r,o);return cl.set(i,l),l}function _y(t=pc){const e=cl.get(t);if(!e&&t===pc&&cy())return gy();if(!e)throw yn.create("no-app",{appName:t});return e}function vn(t,e,n){var r;let i=(r=MI[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),$t.warn(l.join(" "));return}Hr(new Jn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const UI="firebase-heartbeat-database",jI=1,as="firebase-heartbeat-store";let Za=null;function yy(){return Za||(Za=nI(UI,jI,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(as)}catch(n){console.warn(n)}}}}).catch(t=>{throw yn.create("idb-open",{originalErrorMessage:t.message})})),Za}async function zI(t){try{const n=(await yy()).transaction(as),r=await n.objectStore(as).get(vy(t));return await n.done,r}catch(e){if(e instanceof Pn)$t.warn(e.message);else{const n=yn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});$t.warn(n.message)}}}async function hp(t,e){try{const r=(await yy()).transaction(as,"readwrite");await r.objectStore(as).put(e,vy(t)),await r.done}catch(n){if(n instanceof Pn)$t.warn(n.message);else{const r=yn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});$t.warn(r.message)}}}function vy(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=1024,WI=30*24*60*60*1e3;class VI{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new HI(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=fp();return((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)?void 0:(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=WI}),this._storage.overwrite(this._heartbeatsCache))}catch(r){$t.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=fp(),{heartbeatsToSend:r,unsentEntries:i}=$I(this._heartbeatsCache.heartbeats),s=ol(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return $t.warn(n),""}}}function fp(){return new Date().toISOString().substring(0,10)}function $I(t,e=BI){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),pp(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),pp(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class HI{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return RC()?PC().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await zI(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return hp(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function pp(t){return ol(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function GI(t){Hr(new Jn("platform-logger",e=>new sI(e),"PRIVATE")),Hr(new Jn("heartbeat",e=>new VI(e),"PRIVATE")),vn(fc,cp,t),vn(fc,cp,"esm2017"),vn("fire-js","")}GI("");function Bd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function wy(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const KI=wy,Sy=new Ts("auth","Firebase",wy());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dl=new Ud("@firebase/auth");function qI(t,...e){dl.logLevel<=V.WARN&&dl.warn(`Auth (${ni}): ${t}`,...e)}function So(t,...e){dl.logLevel<=V.ERROR&&dl.error(`Auth (${ni}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(t,...e){throw Vd(t,...e)}function mt(t,...e){return Vd(t,...e)}function Wd(t,e,n){const r=Object.assign(Object.assign({},KI()),{[e]:n});return new Ts("auth","Firebase",r).create(e,{appName:t.name})}function Hn(t){return Wd(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function QI(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&kt(t,"argument-error"),Wd(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Vd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Sy.create(t,...e)}function A(t,e,...n){if(!t)throw Vd(e,...n)}function Dt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw So(e),new Error(e)}function Ht(t,e){t||Dt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gc(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function YI(){return mp()==="http:"||mp()==="https:"}function mp(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XI(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(YI()||kC()||"connection"in navigator)?navigator.onLine:!0}function JI(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ns{constructor(e,n){this.shortDelay=e,this.longDelay=n,Ht(n>e,"Short delay should be less than long delay!"),this.isMobile=bd()||hy()}get(){return XI()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $d(t,e){Ht(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ey{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Dt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Dt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Dt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZI={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ek=new Ns(3e4,6e4);function Hd(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ri(t,e,n,r,i={}){return Cy(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ti(Object.assign({key:t.config.apiKey},o)).slice(1),a=await t._getAdditionalHeaders();a["Content-Type"]="application/json",t.languageCode&&(a["X-Firebase-Locale"]=t.languageCode);const u=Object.assign({method:e,headers:a},s);return IC()||(u.referrerPolicy="no-referrer"),Ey.fetch()(Iy(t,t.config.apiHost,n,l),u)})}async function Cy(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},ZI),e);try{const i=new nk(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw ro(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[a,u]=l.split(" : ");if(a==="FEDERATED_USER_ID_ALREADY_LINKED")throw ro(t,"credential-already-in-use",o);if(a==="EMAIL_EXISTS")throw ro(t,"email-already-in-use",o);if(a==="USER_DISABLED")throw ro(t,"user-disabled",o);const c=r[a]||a.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Wd(t,c,u);kt(t,c)}}catch(i){if(i instanceof Pn)throw i;kt(t,"network-request-failed",{message:String(i)})}}async function tk(t,e,n,r,i={}){const s=await ri(t,e,n,r,i);return"mfaPendingCredential"in s&&kt(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Iy(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?$d(t.config,i):`${t.config.apiScheme}://${i}`}class nk{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(mt(this.auth,"network-request-failed")),ek.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function ro(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=mt(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rk(t,e){return ri(t,"POST","/v1/accounts:delete",e)}async function ky(t,e){return ri(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Li(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function ik(t,e=!1){const n=Xe(t),r=await n.getIdToken(e),i=Gd(r);A(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Li(eu(i.auth_time)),issuedAtTime:Li(eu(i.iat)),expirationTime:Li(eu(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function eu(t){return Number(t)*1e3}function Gd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return So("JWT malformed, contained fewer than 3 sections"),null;try{const i=ll(n);return i?JSON.parse(i):(So("Failed to decode base64 JWT payload"),null)}catch(i){return So("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function gp(t){const e=Gd(t);return A(e,"internal-error"),A(typeof e.exp<"u","internal-error"),A(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function us(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Pn&&sk(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function sk({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ok{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _c{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Li(this.lastLoginAt),this.creationTime=Li(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await us(t,ky(n,{idToken:r}));A(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ty(s.providerUserInfo):[],l=ak(t.providerData,o),a=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),c=a?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new _c(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(t,d)}async function lk(t){const e=Xe(t);await hl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function ak(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ty(t){return t.map(e=>{var{providerId:n}=e,r=Bd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function uk(t,e){const n=await Cy(t,{},async()=>{const r=ti({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Iy(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Ey.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ck(t,e){return ri(t,"POST","/v2/accounts:revokeToken",Hd(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){A(e.idToken,"internal-error"),A(typeof e.idToken<"u","internal-error"),A(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):gp(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){A(e.length!==0,"internal-error");const n=gp(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(A(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await uk(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new xr;return r&&(A(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(A(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(A(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new xr,this.toJSON())}_performRefresh(){return Dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(t,e){A(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Mt{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Bd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ok(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new _c(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await us(this,this.stsTokenManager.getToken(this.auth,e));return A(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return ik(this,e)}reload(){return lk(this)}_assign(e){this!==e&&(A(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Mt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){A(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await hl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Ot(this.auth.app))return Promise.reject(Hn(this.auth));const e=await this.getIdToken();return await us(this,rk(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,a,u,c;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=n.photoURL)!==null&&o!==void 0?o:void 0,w=(l=n.tenantId)!==null&&l!==void 0?l:void 0,T=(a=n._redirectEventId)!==null&&a!==void 0?a:void 0,p=(u=n.createdAt)!==null&&u!==void 0?u:void 0,f=(c=n.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:g,emailVerified:v,isAnonymous:E,providerData:I,stsTokenManager:k}=n;A(g&&k,e,"internal-error");const N=xr.fromJSON(this.name,k);A(typeof g=="string",e,"internal-error"),Xt(d,e.name),Xt(h,e.name),A(typeof v=="boolean",e,"internal-error"),A(typeof E=="boolean",e,"internal-error"),Xt(m,e.name),Xt(y,e.name),Xt(w,e.name),Xt(T,e.name),Xt(p,e.name),Xt(f,e.name);const O=new Mt({uid:g,auth:e,email:h,emailVerified:v,displayName:d,isAnonymous:E,photoURL:y,phoneNumber:m,tenantId:w,stsTokenManager:N,createdAt:p,lastLoginAt:f});return I&&Array.isArray(I)&&(O.providerData=I.map(M=>Object.assign({},M))),T&&(O._redirectEventId=T),O}static async _fromIdTokenResponse(e,n,r=!1){const i=new xr;i.updateFromServerResponse(n);const s=new Mt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await hl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];A(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?Ty(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new xr;l.updateFromIdToken(r);const a=new Mt({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),u={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new _c(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(a,u),a}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _p=new Map;function Lt(t){Ht(t instanceof Function,"Expected a class definition");let e=_p.get(t);return e?(Ht(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,_p.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ny{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Ny.type="NONE";const yp=Ny;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t,e,n){return`firebase:${t}:${e}:${n}`}class Ar{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Eo(this.userKey,i.apiKey,s),this.fullPersistenceKey=Eo("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Mt._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ar(Lt(yp),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||Lt(yp);const o=Eo(r,e.config.apiKey,e.name);let l=null;for(const u of n)try{const c=await u._get(o);if(c){const d=Mt._fromJSON(e,c);u!==s&&(l=d),s=u;break}}catch{}const a=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!a.length?new Ar(s,e,r):(s=a[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ar(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vp(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Ay(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Ry(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Dy(e))return"Blackberry";if(My(e))return"Webos";if(Py(e))return"Safari";if((e.includes("chrome/")||xy(e))&&!e.includes("edge/"))return"Chrome";if(Oy(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Ry(t=xe()){return/firefox\//i.test(t)}function Py(t=xe()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function xy(t=xe()){return/crios\//i.test(t)}function Ay(t=xe()){return/iemobile/i.test(t)}function Oy(t=xe()){return/android/i.test(t)}function Dy(t=xe()){return/blackberry/i.test(t)}function My(t=xe()){return/webos/i.test(t)}function Kd(t=xe()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function dk(t=xe()){var e;return Kd(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function hk(){return TC()&&document.documentMode===10}function Ly(t=xe()){return Kd(t)||Oy(t)||My(t)||Dy(t)||/windows phone/i.test(t)||Ay(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function by(t,e=[]){let n;switch(t){case"Browser":n=vp(xe());break;case"Worker":n=`${vp(xe())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${ni}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fk{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const a=e(s);o(a)}catch(a){l(a)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pk(t,e={}){return ri(t,"GET","/v2/passwordPolicy",Hd(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mk=6;class gk{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:mk,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const a={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,a),this.validatePasswordCharacterOptions(e,a),a.isValid&&(a.isValid=(n=a.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),a.isValid&&(a.isValid=(r=a.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),a.isValid&&(a.isValid=(i=a.containsLowercaseLetter)!==null&&i!==void 0?i:!0),a.isValid&&(a.isValid=(s=a.containsUppercaseLetter)!==null&&s!==void 0?s:!0),a.isValid&&(a.isValid=(o=a.containsNumericCharacter)!==null&&o!==void 0?o:!0),a.isValid&&(a.isValid=(l=a.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),a}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _k{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new wp(this),this.idTokenSubscription=new wp(this),this.beforeStateQueue=new fk(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Sy,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Lt(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ar.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ky(this,{idToken:e}),r=await Mt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Ot(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,a=await this.tryRedirectSignIn(e);(!o||o===l)&&(a!=null&&a.user)&&(i=a.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return A(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await hl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=JI()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Ot(this.app))return Promise.reject(Hn(this));const n=e?Xe(e):null;return n&&A(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&A(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Ot(this.app)?Promise.reject(Hn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Ot(this.app)?Promise.reject(Hn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Lt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await pk(this),n=new gk(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ts("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await ck(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Lt(e)||this._popupRedirectResolver;A(n,this,"argument-error"),this.redirectPersistenceManager=await Ar.create(this,[Lt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(A(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const a=e.addObserver(n,r,i);return()=>{o=!0,a()}}else{const a=e.addObserver(n);return()=>{o=!0,a()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return A(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=by(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&qI(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ea(t){return Xe(t)}class wp{constructor(e){this.auth=e,this.observer=null,this.addObserver=bC(n=>this.observer=n)}get next(){return A(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qd={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function yk(t){qd=t}function vk(t){return qd.loadJS(t)}function wk(){return qd.gapiScript}function Sk(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ek(t,e){const n=zd(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(ul(s,e??{}))return i;kt(i,"already-initialized")}return n.initialize({options:e})}function Ck(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Lt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function Ik(t,e,n){const r=ea(t);A(r._canInitEmulator,r,"emulator-config-failed"),A(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!1,s=Fy(e),{host:o,port:l}=kk(e),a=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${a}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),Tk()}function Fy(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function kk(t){const e=Fy(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:Sp(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:Sp(o)}}}function Sp(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Tk(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Dt("not implemented")}_getIdTokenResponse(e){return Dt("not implemented")}_linkToIdToken(e,n){return Dt("not implemented")}_getReauthenticationResolver(e){return Dt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Or(t,e){return tk(t,"POST","/v1/accounts:signInWithIdp",Hd(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nk="http://localhost";class Zn extends Uy{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Zn(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):kt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Bd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Zn(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Or(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,Or(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Or(e,n)}buildRequest(){const e={requestUri:Nk,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ti(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qd{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rs extends Qd{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nn extends Rs{constructor(){super("facebook.com")}static credential(e){return Zn._fromParams({providerId:nn.PROVIDER_ID,signInMethod:nn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return nn.credentialFromTaggedObject(e)}static credentialFromError(e){return nn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return nn.credential(e.oauthAccessToken)}catch{return null}}}nn.FACEBOOK_SIGN_IN_METHOD="facebook.com";nn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pt extends Rs{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Zn._fromParams({providerId:Pt.PROVIDER_ID,signInMethod:Pt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Pt.credentialFromTaggedObject(e)}static credentialFromError(e){return Pt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Pt.credential(n,r)}catch{return null}}}Pt.GOOGLE_SIGN_IN_METHOD="google.com";Pt.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn extends Rs{constructor(){super("github.com")}static credential(e){return Zn._fromParams({providerId:rn.PROVIDER_ID,signInMethod:rn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return rn.credentialFromTaggedObject(e)}static credentialFromError(e){return rn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return rn.credential(e.oauthAccessToken)}catch{return null}}}rn.GITHUB_SIGN_IN_METHOD="github.com";rn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sn extends Rs{constructor(){super("twitter.com")}static credential(e,n){return Zn._fromParams({providerId:sn.PROVIDER_ID,signInMethod:sn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return sn.credentialFromTaggedObject(e)}static credentialFromError(e){return sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return sn.credential(n,r)}catch{return null}}}sn.TWITTER_SIGN_IN_METHOD="twitter.com";sn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await Mt._fromIdTokenResponse(e,r,i),o=Ep(r);return new Gr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=Ep(r);return new Gr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function Ep(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl extends Pn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,fl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new fl(e,n,r,i)}}function jy(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?fl._fromErrorAndOperation(t,s,e,r):s})}async function Rk(t,e,n=!1){const r=await us(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Gr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pk(t,e,n=!1){const{auth:r}=t;if(Ot(r.app))return Promise.reject(Hn(r));const i="reauthenticate";try{const s=await us(t,jy(r,i,e,t),n);A(s.idToken,r,"internal-error");const o=Gd(s.idToken);A(o,r,"internal-error");const{sub:l}=o;return A(t.uid===l,r,"user-mismatch"),Gr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&kt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xk(t,e,n=!1){if(Ot(t.app))return Promise.reject(Hn(t));const r="signIn",i=await jy(t,r,e),s=await Gr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}function Ak(t,e,n,r){return Xe(t).onIdTokenChanged(e,n,r)}function Ok(t,e,n){return Xe(t).beforeAuthStateChanged(e,n)}function Dk(t,e,n,r){return Xe(t).onAuthStateChanged(e,n,r)}function Mk(t){return Xe(t).signOut()}const pl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zy{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(pl,"1"),this.storage.removeItem(pl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lk=1e3,bk=10;class By extends zy{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Ly(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,a)=>{this.notifyListeners(o,a)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);hk()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,bk):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Lk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}By.type="LOCAL";const Fk=By;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy extends zy{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Wy.type="SESSION";const Vy=Wy;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Uk(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ta{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new ta(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async u=>u(n.origin,s)),a=await Uk(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:a})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}ta.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jk{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,a)=>{const u=Yd("",20);i.port1.start();const c=setTimeout(()=>{a(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{a(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(h.data.response);break;default:clearTimeout(c),clearTimeout(s),a(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(){return window}function zk(t){It().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $y(){return typeof It().WorkerGlobalScope<"u"&&typeof It().importScripts=="function"}async function Bk(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Wk(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Vk(){return $y()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hy="firebaseLocalStorageDb",$k=1,ml="firebaseLocalStorage",Gy="fbase_key";class Ps{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function na(t,e){return t.transaction([ml],e?"readwrite":"readonly").objectStore(ml)}function Hk(){const t=indexedDB.deleteDatabase(Hy);return new Ps(t).toPromise()}function yc(){const t=indexedDB.open(Hy,$k);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(ml,{keyPath:Gy})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(ml)?e(r):(r.close(),await Hk(),e(await yc()))})})}async function Cp(t,e,n){const r=na(t,!0).put({[Gy]:e,value:n});return new Ps(r).toPromise()}async function Gk(t,e){const n=na(t,!1).get(e),r=await new Ps(n).toPromise();return r===void 0?null:r.value}function Ip(t,e){const n=na(t,!0).delete(e);return new Ps(n).toPromise()}const Kk=800,qk=3;class Ky{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await yc(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>qk)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return $y()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=ta._getInstance(Vk()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Bk(),!this.activeServiceWorker)return;this.sender=new jk(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||Wk()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await yc();return await Cp(e,pl,"1"),await Ip(e,pl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Cp(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Gk(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ip(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=na(i,!1).getAll();return new Ps(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Kk)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ky.type="LOCAL";const Qk=Ky;new Ns(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qy(t,e){return e?Lt(e):(A(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xd extends Uy{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Or(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Or(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Or(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function Yk(t){return xk(t.auth,new Xd(t),t.bypassAuthState)}function Xk(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),Pk(n,new Xd(t),t.bypassAuthState)}async function Jk(t){const{auth:e,user:n}=t;return A(n,e,"internal-error"),Rk(n,new Xd(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qy{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const a={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(a))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Yk;case"linkViaPopup":case"linkViaRedirect":return Jk;case"reauthViaPopup":case"reauthViaRedirect":return Xk;default:kt(this.auth,"internal-error")}}resolve(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Ht(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zk=new Ns(2e3,1e4);async function eT(t,e,n){if(Ot(t.app))return Promise.reject(mt(t,"operation-not-supported-in-this-environment"));const r=ea(t);QI(t,e,Qd);const i=qy(r,n);return new zn(r,"signInViaPopup",e,i).executeNotNull()}class zn extends Qy{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,zn.currentPopupAction&&zn.currentPopupAction.cancel(),zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return A(e,this.auth,"internal-error"),e}async onExecution(){Ht(this.filter.length===1,"Popup operations only handle one event");const e=Yd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Zk.get())};e()}}zn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tT="pendingRedirect",Co=new Map;class nT extends Qy{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Co.get(this.auth._key());if(!e){try{const r=await rT(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Co.set(this.auth._key(),e)}return this.bypassAuthState||Co.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function rT(t,e){const n=oT(e),r=sT(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function iT(t,e){Co.set(t._key(),e)}function sT(t){return Lt(t._redirectPersistence)}function oT(t){return Eo(tT,t.config.apiKey,t.name)}async function lT(t,e,n=!1){if(Ot(t.app))return Promise.reject(Hn(t));const r=ea(t),i=qy(r,e),o=await new nT(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aT=10*60*1e3;class uT{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!cT(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Yy(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(mt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=aT&&this.cachedEventUids.clear(),this.cachedEventUids.has(kp(e))}saveEventToCache(e){this.cachedEventUids.add(kp(e)),this.lastProcessedEventTime=Date.now()}}function kp(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Yy({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function cT(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Yy(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function dT(t,e={}){return ri(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hT=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,fT=/^https?/;async function pT(t){if(t.config.emulator)return;const{authorizedDomains:e}=await dT(t);for(const n of e)try{if(mT(n))return}catch{}kt(t,"unauthorized-domain")}function mT(t){const e=gc(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!fT.test(n))return!1;if(hT.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gT=new Ns(3e4,6e4);function Tp(){const t=It().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function _T(t){return new Promise((e,n)=>{var r,i,s;function o(){Tp(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Tp(),n(mt(t,"network-request-failed"))},timeout:gT.get()})}if(!((i=(r=It().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=It().gapi)===null||s===void 0)&&s.load)o();else{const l=Sk("iframefcb");return It()[l]=()=>{gapi.load?o():n(mt(t,"network-request-failed"))},vk(`${wk()}?onload=${l}`).catch(a=>n(a))}}).catch(e=>{throw Io=null,e})}let Io=null;function yT(t){return Io=Io||_T(t),Io}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vT=new Ns(5e3,15e3),wT="__/auth/iframe",ST="emulator/auth/iframe",ET={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},CT=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function IT(t){const e=t.config;A(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?$d(e,ST):`https://${t.config.authDomain}/${wT}`,r={apiKey:e.apiKey,appName:t.name,v:ni},i=CT.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ti(r).slice(1)}`}async function kT(t){const e=await yT(t),n=It().gapi;return A(n,t,"internal-error"),e.open({where:document.body,url:IT(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ET,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=mt(t,"network-request-failed"),l=It().setTimeout(()=>{s(o)},vT.get());function a(){It().clearTimeout(l),i(r)}r.ping(a).then(a,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TT={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},NT=500,RT=600,PT="_blank",xT="http://localhost";class Np{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function AT(t,e,n,r=NT,i=RT){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const a=Object.assign(Object.assign({},TT),{width:r.toString(),height:i.toString(),top:s,left:o}),u=xe().toLowerCase();n&&(l=xy(u)?PT:n),Ry(u)&&(e=e||xT,a.scrollbars="yes");const c=Object.entries(a).reduce((h,[m,y])=>`${h}${m}=${y},`,"");if(dk(u)&&l!=="_self")return OT(e||"",l),new Np(null);const d=window.open(e||"",l,c);A(d,t,"popup-blocked");try{d.focus()}catch{}return new Np(d)}function OT(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DT="__/auth/handler",MT="emulator/auth/handler",LT=encodeURIComponent("fac");async function Rp(t,e,n,r,i,s){A(t.config.authDomain,t,"auth-domain-config-required"),A(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:ni,eventId:i};if(e instanceof Qd){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",cc(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,d]of Object.entries({}))o[c]=d}if(e instanceof Rs){const c=e.getScopes().filter(d=>d!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const c of Object.keys(l))l[c]===void 0&&delete l[c];const a=await t._getAppCheckToken(),u=a?`#${LT}=${encodeURIComponent(a)}`:"";return`${bT(t)}?${ti(l).slice(1)}${u}`}function bT({config:t}){return t.emulator?$d(t,MT):`https://${t.authDomain}/${DT}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tu="webStorageSupport";class FT{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Vy,this._completeRedirectFn=lT,this._overrideRedirectResult=iT}async _openPopup(e,n,r,i){var s;Ht((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await Rp(e,n,r,gc(),i);return AT(e,o,Yd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await Rp(e,n,r,gc(),i);return zk(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Ht(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await kT(e),r=new uT(e);return n.register("authEvent",i=>(A(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(tu,{type:tu},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[tu];o!==void 0&&n(!!o),kt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=pT(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Ly()||Py()||Kd()}}const UT=FT;var Pp="@firebase/auth",xp="1.7.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jT{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){A(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zT(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function BT(t){Hr(new Jn("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;A(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const a={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:by(t)},u=new _k(r,i,s,a);return Ck(u,n),u},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Hr(new Jn("auth-internal",e=>{const n=ea(e.getProvider("auth").getImmediate());return(r=>new jT(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),vn(Pp,xp,zT(t)),vn(Pp,xp,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WT=5*60,VT=dy("authIdTokenMaxAge")||WT;let Ap=null;const $T=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>VT)return;const i=n==null?void 0:n.token;Ap!==i&&(Ap=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function HT(t=_y()){const e=zd(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Ek(t,{popupRedirectResolver:UT,persistence:[Qk,Fk,Vy]}),r=dy("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=$T(s.toString());Ok(n,o,()=>o(n.currentUser)),Ak(n,l=>o(l))}}const i=uy("auth");return i&&Ik(n,`http://${i}`),n}function GT(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}yk({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=mt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",GT().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});BT("Browser");var Op={};const Dp="@firebase/database",Mp="1.0.8";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Xy="";function KT(t){Xy=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qT{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),pe(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:ls(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QT{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Qt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jy=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new qT(e)}}catch{}return new QT},Bn=Jy("localStorage"),YT=Jy("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dr=new Ud("@firebase/database"),XT=function(){let t=1;return function(){return t++}}(),Zy=function(t){const e=jC(t),n=new LC;n.update(e);const r=n.digest();return Md.encodeByteArray(r)},xs=function(...t){let e="";for(let n=0;n<t.length;n++){const r=t[n];Array.isArray(r)||r&&typeof r=="object"&&typeof r.length=="number"?e+=xs.apply(null,r):typeof r=="object"?e+=pe(r):e+=r,e+=" "}return e};let bi=null,Lp=!0;const JT=function(t,e){C(!0,"Can't turn on custom loggers persistently."),Dr.logLevel=V.VERBOSE,bi=Dr.log.bind(Dr)},ke=function(...t){if(Lp===!0&&(Lp=!1,bi===null&&YT.get("logging_enabled")===!0&&JT()),bi){const e=xs.apply(null,t);bi(e)}},As=function(t){return function(...e){ke(t,...e)}},vc=function(...t){const e="FIREBASE INTERNAL ERROR: "+xs(...t);Dr.error(e)},Gt=function(...t){const e=`FIREBASE FATAL ERROR: ${xs(...t)}`;throw Dr.error(e),new Error(e)},ze=function(...t){const e="FIREBASE WARNING: "+xs(...t);Dr.warn(e)},ZT=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ze("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},ev=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},eN=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Kr="[MIN_NAME]",er="[MAX_NAME]",ii=function(t,e){if(t===e)return 0;if(t===Kr||e===er)return-1;if(e===Kr||t===er)return 1;{const n=bp(t),r=bp(e);return n!==null?r!==null?n-r===0?t.length-e.length:n-r:-1:r!==null?1:t<e?-1:1}},tN=function(t,e){return t===e?0:t<e?-1:1},_i=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+pe(e))},Jd=function(t){if(typeof t!="object"||t===null)return pe(t);const e=[];for(const r in t)e.push(r);e.sort();let n="{";for(let r=0;r<e.length;r++)r!==0&&(n+=","),n+=pe(e[r]),n+=":",n+=Jd(t[e[r]]);return n+="}",n},tv=function(t,e){const n=t.length;if(n<=e)return[t];const r=[];for(let i=0;i<n;i+=e)i+e>n?r.push(t.substring(i,n)):r.push(t.substring(i,i+e));return r};function Be(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const nv=function(t){C(!ev(t),"Invalid JSON number");const e=11,n=52,r=(1<<e-1)-1;let i,s,o,l,a;t===0?(s=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-r)?(l=Math.min(Math.floor(Math.log(t)/Math.LN2),r),s=l+r,o=Math.round(t*Math.pow(2,n-l)-Math.pow(2,n))):(s=0,o=Math.round(t/Math.pow(2,1-r-n))));const u=[];for(a=n;a;a-=1)u.push(o%2?1:0),o=Math.floor(o/2);for(a=e;a;a-=1)u.push(s%2?1:0),s=Math.floor(s/2);u.push(i?1:0),u.reverse();const c=u.join("");let d="";for(a=0;a<64;a+=8){let h=parseInt(c.substr(a,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},nN=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},rN=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function iN(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const r=new Error(t+" at "+e._path.toString()+": "+n);return r.code=t.toUpperCase(),r}const sN=new RegExp("^-?(0*)\\d{1,10}$"),oN=-2147483648,lN=2147483647,bp=function(t){if(sN.test(t)){const e=Number(t);if(e>=oN&&e<=lN)return e}return null},si=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ze("Exception was thrown by user callback.",n),e},Math.floor(0))}},aN=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Fi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uN{constructor(e,n){this.appName_=e,this.appCheckProvider=n,this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(r=>this.appCheck=r)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((n,r)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(r=>r.addTokenListener(e))}notifyForInvalidToken(){ze(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cN{constructor(e,n,r){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=r,this.auth_=null,this.auth_=r.getImmediate({optional:!0}),this.auth_||r.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(ke("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,r)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,r):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ze(e)}}class ko{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}ko.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd="5",rv="v",iv="s",sv="r",ov="f",lv=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,av="ls",uv="p",wc="ac",cv="websocket",dv="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hv{constructor(e,n,r,i,s=!1,o="",l=!1,a=!1){this.secure=n,this.namespace=r,this.webSocketOnly=i,this.nodeAdmin=s,this.persistenceKey=o,this.includeNamespaceInQueryParams=l,this.isUsingEmulator=a,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Bn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Bn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function dN(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function fv(t,e,n){C(typeof e=="string","typeof type must == string"),C(typeof n=="object","typeof params must == object");let r;if(e===cv)r=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===dv)r=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);dN(t)&&(n.ns=t.namespace);const i=[];return Be(n,(s,o)=>{i.push(s+"="+o)}),r+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hN{constructor(){this.counters_={}}incrementCounter(e,n=1){Qt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return gC(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nu={},ru={};function eh(t){const e=t.toString();return nu[e]||(nu[e]=new hN),nu[e]}function fN(t,e){const n=t.toString();return ru[n]||(ru[n]=e()),ru[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pN{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const r=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<r.length;++i)r[i]&&si(()=>{this.onMessage_(r[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fp="start",mN="close",gN="pLPCommand",_N="pRTLPCB",pv="id",mv="pw",gv="ser",yN="cb",vN="seg",wN="ts",SN="d",EN="dframe",_v=1870,yv=30,CN=_v-yv,IN=25e3,kN=3e4;class Cr{constructor(e,n,r,i,s,o,l){this.connId=e,this.repoInfo=n,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.transportSessionId=o,this.lastSessionId=l,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=As(e),this.stats_=eh(n),this.urlFn=a=>(this.appCheckToken&&(a[wc]=this.appCheckToken),fv(n,dv,a))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new pN(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(kN)),eN(()=>{if(this.isClosed_)return;this.scriptTagHolder=new th((...s)=>{const[o,l,a,u,c]=s;if(this.incrementIncomingBytes_(s),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Fp)this.id=l,this.password=a;else if(o===mN)l?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(l,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...s)=>{const[o,l]=s;this.incrementIncomingBytes_(s),this.myPacketOrderer.handleResponse(o,l)},()=>{this.onClosed_()},this.urlFn);const r={};r[Fp]="t",r[gv]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(r[yN]=this.scriptTagHolder.uniqueCallbackIdentifier),r[rv]=Zd,this.transportSessionId&&(r[iv]=this.transportSessionId),this.lastSessionId&&(r[av]=this.lastSessionId),this.applicationId&&(r[uv]=this.applicationId),this.appCheckToken&&(r[wc]=this.appCheckToken),typeof location<"u"&&location.hostname&&lv.test(location.hostname)&&(r[sv]=ov);const i=this.urlFn(r);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Cr.forceAllow_=!0}static forceDisallow(){Cr.forceDisallow_=!0}static isAvailable(){return Cr.forceAllow_?!0:!Cr.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!nN()&&!rN()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=ly(n),i=tv(r,CN);for(let s=0;s<i.length;s++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[s]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const r={};r[EN]="t",r[pv]=e,r[mv]=n,this.myDisconnFrame.src=this.urlFn(r),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=pe(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class th{constructor(e,n,r,i){this.onDisconnect=r,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=XT(),window[gN+this.uniqueCallbackIdentifier]=e,window[_N+this.uniqueCallbackIdentifier]=n,this.myIFrame=th.createIFrame_();let s="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(s='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+s+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(l){ke("frame writing exception"),l.stack&&ke(l.stack),ke(l)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||ke("No IE domain setting required")}catch{const r=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+r+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[pv]=this.myID,e[mv]=this.myPW,e[gv]=this.currentSerial;let n=this.urlFn(e),r="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+yv+r.length<=_v;){const o=this.pendingSegs.shift();r=r+"&"+vN+i+"="+o.seg+"&"+wN+i+"="+o.ts+"&"+SN+i+"="+o.d,i++}return n=n+r,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,r){this.pendingSegs.push({seg:e,ts:n,d:r}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const r=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(r,Math.floor(IN)),s=()=>{clearTimeout(i),r()};this.addTag(e,s)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const r=this.myIFrame.doc.createElement("script");r.type="text/javascript",r.async=!0,r.src=e,r.onload=r.onreadystatechange=function(){const i=r.readyState;(!i||i==="loaded"||i==="complete")&&(r.onload=r.onreadystatechange=null,r.parentNode&&r.parentNode.removeChild(r),n())},r.onerror=()=>{ke("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(r)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TN=16384,NN=45e3;let gl=null;typeof MozWebSocket<"u"?gl=MozWebSocket:typeof WebSocket<"u"&&(gl=WebSocket);class ct{constructor(e,n,r,i,s,o,l){this.connId=e,this.applicationId=r,this.appCheckToken=i,this.authToken=s,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=As(this.connId),this.stats_=eh(n),this.connURL=ct.connectionURL_(n,o,l,i,r),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,r,i,s){const o={};return o[rv]=Zd,typeof location<"u"&&location.hostname&&lv.test(location.hostname)&&(o[sv]=ov),n&&(o[iv]=n),r&&(o[av]=r),i&&(o[wc]=i),s&&(o[uv]=s),fv(e,cv,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Bn.set("previous_websocket_failure",!0);try{let r;NC(),this.mySock=new gl(this.connURL,[],r)}catch(r){this.log_("Error instantiating WebSocket.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=r=>{this.handleIncomingFrame(r)},this.mySock.onerror=r=>{this.log_("WebSocket error.  Closing connection.");const i=r.message||r.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ct.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,r=navigator.userAgent.match(n);r&&r.length>1&&parseFloat(r[1])<4.4&&(e=!0)}return!e&&gl!==null&&!ct.forceDisallow_}static previouslyFailed(){return Bn.isInMemoryStorage||Bn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Bn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const r=ls(n);this.onMessage(r)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(C(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const r=this.extractFrameCount_(n);r!==null&&this.appendFrame_(r)}}send(e){this.resetKeepAlive();const n=pe(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const r=tv(n,TN);r.length>1&&this.sendString_(String(r.length));for(let i=0;i<r.length;i++)this.sendString_(r[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(NN))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ct.responsesRequiredToBeHealthy=2;ct.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cs{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Cr,ct]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const n=ct&&ct.isAvailable();let r=n&&!ct.previouslyFailed();if(e.webSocketOnly&&(n||ze("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),r=!0),r)this.transports_=[ct];else{const i=this.transports_=[];for(const s of cs.ALL_TRANSPORTS)s&&s.isAvailable()&&i.push(s);cs.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}cs.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const RN=6e4,PN=5e3,xN=10*1024,AN=100*1024,iu="t",Up="d",ON="s",jp="r",DN="e",zp="o",Bp="a",Wp="n",Vp="p",MN="h";class LN{constructor(e,n,r,i,s,o,l,a,u,c){this.id=e,this.repoInfo_=n,this.applicationId_=r,this.appCheckToken_=i,this.authToken_=s,this.onMessage_=o,this.onReady_=l,this.onDisconnect_=a,this.onKill_=u,this.lastSessionId=c,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=As("c:"+this.id+":"),this.transportManager_=new cs(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),r=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,r)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Fi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>AN?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>xN?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(iu in e){const n=e[iu];n===Bp?this.upgradeIfSecondaryHealthy_():n===jp?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===zp&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=_i("t",e),r=_i("d",e);if(n==="c")this.onSecondaryControl_(r);else if(n==="d")this.pendingDataMessages.push(r);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Vp,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Bp,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Wp,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=_i("t",e),r=_i("d",e);n==="c"?this.onControl_(r):n==="d"&&this.onDataMessage_(r)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=_i(iu,e);if(Up in e){const r=e[Up];if(n===MN){const i=Object.assign({},r);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Wp){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===ON?this.onConnectionShutdown_(r):n===jp?this.onReset_(r):n===DN?vc("Server Error: "+r):n===zp?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):vc("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,r=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Zd!==r&&ze("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),r=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,r),Fi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(RN))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Fi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(PN))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Vp,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Bn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{put(e,n,r,i){}merge(e,n,r,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,r){}onDisconnectMerge(e,n,r){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wv{constructor(e){this.allowedEvents_=e,this.listeners_={},C(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const r=[...this.listeners_[e]];for(let i=0;i<r.length;i++)r[i].callback.apply(r[i].context,n)}}on(e,n,r){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:r});const i=this.getInitialEvent(e);i&&n.apply(r,i)}off(e,n,r){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let s=0;s<i.length;s++)if(i[s].callback===n&&(!r||r===i[s].context)){i.splice(s,1);return}}validateEventType_(e){C(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l extends wv{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!bd()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new _l}getInitialEvent(e){return C(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $p=32,Hp=768;class ${constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let r=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[r]=this.pieces_[i],r++);this.pieces_.length=r,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function B(){return new $("")}function b(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function In(t){return t.pieces_.length-t.pieceNum_}function H(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new $(t.pieces_,e)}function Sv(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function bN(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ev(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Cv(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new $(e,0)}function ae(t,e){const n=[];for(let r=t.pieceNum_;r<t.pieces_.length;r++)n.push(t.pieces_[r]);if(e instanceof $)for(let r=e.pieceNum_;r<e.pieces_.length;r++)n.push(e.pieces_[r]);else{const r=e.split("/");for(let i=0;i<r.length;i++)r[i].length>0&&n.push(r[i])}return new $(n,0)}function U(t){return t.pieceNum_>=t.pieces_.length}function Le(t,e){const n=b(t),r=b(e);if(n===null)return e;if(n===r)return Le(H(t),H(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function nh(t,e){if(In(t)!==In(e))return!1;for(let n=t.pieceNum_,r=e.pieceNum_;n<=t.pieces_.length;n++,r++)if(t.pieces_[n]!==e.pieces_[r])return!1;return!0}function dt(t,e){let n=t.pieceNum_,r=e.pieceNum_;if(In(t)>In(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[r])return!1;++n,++r}return!0}class FN{constructor(e,n){this.errorPrefix_=n,this.parts_=Ev(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let r=0;r<this.parts_.length;r++)this.byteLength_+=Zl(this.parts_[r]);Iv(this)}}function UN(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Zl(e),Iv(t)}function jN(t){const e=t.parts_.pop();t.byteLength_-=Zl(e),t.parts_.length>0&&(t.byteLength_-=1)}function Iv(t){if(t.byteLength_>Hp)throw new Error(t.errorPrefix_+"has a key path longer than "+Hp+" bytes ("+t.byteLength_+").");if(t.parts_.length>$p)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+$p+") or object contains a cycle "+bn(t))}function bn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rh extends wv{constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const r=!document[e];r!==this.visible_&&(this.visible_=r,this.trigger("visible",r))},!1)}static getInstance(){return new rh}getInitialEvent(e){return C(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yi=1e3,zN=60*5*1e3,Gp=30*1e3,BN=1.3,WN=3e4,VN="server_kill",Kp=3;class Ut extends vv{constructor(e,n,r,i,s,o,l,a){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=r,this.onConnectStatus_=i,this.onServerInfoUpdate_=s,this.authTokenProvider_=o,this.appCheckTokenProvider_=l,this.authOverride_=a,this.id=Ut.nextPersistentConnectionId_++,this.log_=As("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=yi,this.maxReconnectDelay_=zN,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,a)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");rh.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&_l.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,r){const i=++this.requestNumber_,s={r:i,a:e,b:n};this.log_(pe(s)),C(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(s),r&&(this.requestCBHash_[i]=r)}get(e){this.initConnection_();const n=new Jl,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const l=o.d;o.s==="ok"?n.resolve(l):n.reject(l)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const s=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(s),n.promise}listen(e,n,r,i){this.initConnection_();const s=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+s),this.listens.has(o)||this.listens.set(o,new Map),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),C(!this.listens.get(o).has(s),"listen() called twice for same path/queryId.");const l={onComplete:i,hashFn:n,query:e,tag:r};this.listens.get(o).set(s,l),this.connected_&&this.sendListen_(l)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,r=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(r)})}sendListen_(e){const n=e.query,r=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+r+" for "+i);const s={p:r},o="q";e.tag&&(s.q=n._queryObject,s.t=e.tag),s.h=e.hashFn(),this.sendRequest(o,s,l=>{const a=l.d,u=l.s;Ut.warnOnListenWarnings_(a,n),(this.listens.get(r)&&this.listens.get(r).get(i))===e&&(this.log_("listen response",l),u!=="ok"&&this.removeListen_(r,i),e.onComplete&&e.onComplete(u,a))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Qt(e,"w")){const r=$r(e,"w");if(Array.isArray(r)&&~r.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',s=n._path.toString();ze(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${s} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||MC(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Gp)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=DC(e)?"auth":"gauth",r={cred:e};this.authOverride_===null?r.noauth=!0:typeof this.authOverride_=="object"&&(r.authvar=this.authOverride_),this.sendRequest(n,r,i=>{const s=i.s,o=i.d||"error";this.authToken_===e&&(s==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(s,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,r=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,r)})}unlisten(e,n){const r=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+r+" "+i),C(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(r,i)&&this.connected_&&this.sendUnlisten_(r,i,e._queryObject,n)}sendUnlisten_(e,n,r,i){this.log_("Unlisten on "+e+" for "+n);const s={p:e},o="n";i&&(s.q=r,s.t=i),this.sendRequest(o,s)}onDisconnectPut(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:r})}onDisconnectMerge(e,n,r){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,r):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:r})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,r,i){const s={p:n,d:r};this.log_("onDisconnect "+e,s),this.sendRequest(e,s,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,r,i){this.putInternal("p",e,n,r,i)}merge(e,n,r,i){this.putInternal("m",e,n,r,i)}putInternal(e,n,r,i,s){this.initConnection_();const o={p:n,d:r};s!==void 0&&(o.h=s),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const l=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(l):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,r=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,r,s=>{this.log_(n+" response",s),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(s.s,s.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,r=>{if(r.s!=="ok"){const s=r.d;this.log_("reportStats","Error sending stats: "+s)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+pe(e));const n=e.r,r=this.requestCBHash_[n];r&&(delete this.requestCBHash_[n],r(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):vc("Unrecognized action received from server: "+pe(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){C(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=yi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=yi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>WN&&(this.reconnectDelay_=yi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*BN)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),r=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+Ut.nextConnectionId_++,s=this.lastSessionId;let o=!1,l=null;const a=function(){l?l.close():(o=!0,r())},u=function(d){C(l,"sendRequest call when we're not connected not allowed."),l.sendRequest(d)};this.realtime_={close:a,sendRequest:u};const c=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(c),this.appCheckTokenProvider_.getToken(c)]);o?ke("getToken() completed but was canceled"):(ke("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,l=new LN(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,r,m=>{ze(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(VN)},s))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&ze(d),a())}}}interrupt(e){ke("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){ke("Resuming connection for reason: "+e),delete this.interruptReasons_[e],cc(this.interruptReasons_)&&(this.reconnectDelay_=yi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let r;n?r=n.map(s=>Jd(s)).join("$"):r="default";const i=this.removeListen_(e,r);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const r=new $(e).toString();let i;if(this.listens.has(r)){const s=this.listens.get(r);i=s.get(n),s.delete(n),s.size===0&&this.listens.delete(r)}else i=void 0;return i}onAuthRevoked_(e,n){ke("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Kp&&(this.reconnectDelay_=Gp,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){ke("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Kp&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Xy.replace(/\./g,"-")]=1,bd()?e["framework.cordova"]=1:hy()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=_l.getInstance().currentlyOnline();return cc(this.interruptReasons_)&&e}}Ut.nextPersistentConnectionId_=0;Ut.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new F(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ra{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const r=new F(Kr,e),i=new F(Kr,n);return this.compare(r,i)!==0}minPost(){return F.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let io;class kv extends ra{static get __EMPTY_NODE(){return io}static set __EMPTY_NODE(e){io=e}compare(e,n){return ii(e.name,n.name)}isDefinedOn(e){throw ei("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return F.MIN}maxPost(){return new F(er,io)}makePost(e,n){return C(typeof e=="string","KeyIndex indexValue must always be a string."),new F(e,io)}toString(){return".key"}}const Mr=new kv;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class so{constructor(e,n,r,i,s=null){this.isReverse_=i,this.resultGenerator_=s,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?r(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class fe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??fe.RED,this.left=i??be.EMPTY_NODE,this.right=s??be.EMPTY_NODE}copy(e,n,r,i,s){return new fe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return s<0?i=i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return be.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let r,i;if(r=this,n(e,r.key)<0)!r.left.isEmpty()&&!r.left.isRed_()&&!r.left.left.isRed_()&&(r=r.moveRedLeft_()),r=r.copy(null,null,null,r.left.remove(e,n),null);else{if(r.left.isRed_()&&(r=r.rotateRight_()),!r.right.isEmpty()&&!r.right.isRed_()&&!r.right.left.isRed_()&&(r=r.moveRedRight_()),n(e,r.key)===0){if(r.right.isEmpty())return be.EMPTY_NODE;i=r.right.min_(),r=r.copy(i.key,i.value,null,null,r.right.removeMin_())}r=r.copy(null,null,null,null,r.right.remove(e,n))}return r.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}fe.RED=!0;fe.BLACK=!1;class $N{copy(e,n,r,i,s){return this}insert(e,n,r){return new fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class be{constructor(e,n=be.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new be(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,fe.BLACK,null,null))}remove(e){return new be(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,fe.BLACK,null,null))}get(e){let n,r=this.root_;for(;!r.isEmpty();){if(n=this.comparator_(e,r.key),n===0)return r.value;n<0?r=r.left:n>0&&(r=r.right)}return null}getPredecessorKey(e){let n,r=this.root_,i=null;for(;!r.isEmpty();)if(n=this.comparator_(e,r.key),n===0){if(r.left.isEmpty())return i?i.key:null;for(r=r.left;!r.right.isEmpty();)r=r.right;return r.key}else n<0?r=r.left:n>0&&(i=r,r=r.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new so(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new so(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new so(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new so(this.root_,null,this.comparator_,!0,e)}}be.EMPTY_NODE=new $N;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HN(t,e){return ii(t.name,e.name)}function ih(t,e){return ii(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Sc;function GN(t){Sc=t}const Tv=function(t){return typeof t=="number"?"number:"+nv(t):"string:"+t},Nv=function(t){if(t.isLeafNode()){const e=t.val();C(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Qt(e,".sv"),"Priority must be a string or number.")}else C(t===Sc||t.isEmpty(),"priority of unexpected type.");C(t===Sc||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qp;class de{constructor(e,n=de.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,C(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Nv(this.priorityNode_)}static set __childrenNodeConstructor(e){qp=e}static get __childrenNodeConstructor(){return qp}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new de(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return U(e)?this:b(e)===".priority"?this.priorityNode_:de.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:de.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const r=b(e);return r===null?n:n.isEmpty()&&r!==".priority"?this:(C(r!==".priority"||In(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(r,de.__childrenNodeConstructor.EMPTY_NODE.updateChild(H(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Tv(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=nv(this.value_):e+=this.value_,this.lazyHash_=Zy(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===de.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof de.__childrenNodeConstructor?-1:(C(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,r=typeof this.value_,i=de.VALUE_TYPE_ORDER.indexOf(n),s=de.VALUE_TYPE_ORDER.indexOf(r);return C(i>=0,"Unknown leaf type: "+n),C(s>=0,"Unknown leaf type: "+r),i===s?r==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:s-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}de.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Rv,Pv;function KN(t){Rv=t}function qN(t){Pv=t}class QN extends ra{compare(e,n){const r=e.node.getPriority(),i=n.node.getPriority(),s=r.compareTo(i);return s===0?ii(e.name,n.name):s}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return F.MIN}maxPost(){return new F(er,new de("[PRIORITY-POST]",Pv))}makePost(e,n){const r=Rv(e);return new F(n,new de("[PRIORITY-POST]",r))}toString(){return".priority"}}const ne=new QN;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YN=Math.log(2);class XN{constructor(e){const n=s=>parseInt(Math.log(s)/YN,10),r=s=>parseInt(Array(s+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=r(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const yl=function(t,e,n,r){t.sort(e);const i=function(a,u){const c=u-a;let d,h;if(c===0)return null;if(c===1)return d=t[a],h=n?n(d):d,new fe(h,d.node,fe.BLACK,null,null);{const m=parseInt(c/2,10)+a,y=i(a,m),w=i(m+1,u);return d=t[m],h=n?n(d):d,new fe(h,d.node,fe.BLACK,y,w)}},s=function(a){let u=null,c=null,d=t.length;const h=function(y,w){const T=d-y,p=d;d-=y;const f=i(T+1,p),g=t[T],v=n?n(g):g;m(new fe(v,g.node,w,null,f))},m=function(y){u?(u.left=y,u=y):(c=y,u=y)};for(let y=0;y<a.count;++y){const w=a.nextBitIsOne(),T=Math.pow(2,a.count-(y+1));w?h(T,fe.BLACK):(h(T,fe.BLACK),h(T,fe.RED))}return c},o=new XN(t.length),l=s(o);return new be(r||e,l)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let su;const ur={};class bt{constructor(e,n){this.indexes_=e,this.indexSet_=n}static get Default(){return C(ur&&ne,"ChildrenNode.ts has not been loaded"),su=su||new bt({".priority":ur},{".priority":ne}),su}get(e){const n=$r(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof be?n:null}hasIndex(e){return Qt(this.indexSet_,e.toString())}addIndex(e,n){C(e!==Mr,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const r=[];let i=!1;const s=n.getIterator(F.Wrap);let o=s.getNext();for(;o;)i=i||e.isDefinedOn(o.node),r.push(o),o=s.getNext();let l;i?l=yl(r,e.getCompare()):l=ur;const a=e.toString(),u=Object.assign({},this.indexSet_);u[a]=e;const c=Object.assign({},this.indexes_);return c[a]=l,new bt(c,u)}addToIndexes(e,n){const r=al(this.indexes_,(i,s)=>{const o=$r(this.indexSet_,s);if(C(o,"Missing index implementation for "+s),i===ur)if(o.isDefinedOn(e.node)){const l=[],a=n.getIterator(F.Wrap);let u=a.getNext();for(;u;)u.name!==e.name&&l.push(u),u=a.getNext();return l.push(e),yl(l,o.getCompare())}else return ur;else{const l=n.get(e.name);let a=i;return l&&(a=a.remove(new F(e.name,l))),a.insert(e,e.node)}});return new bt(r,this.indexSet_)}removeFromIndexes(e,n){const r=al(this.indexes_,i=>{if(i===ur)return i;{const s=n.get(e.name);return s?i.remove(new F(e.name,s)):i}});return new bt(r,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let vi;class x{constructor(e,n,r){this.children_=e,this.priorityNode_=n,this.indexMap_=r,this.lazyHash_=null,this.priorityNode_&&Nv(this.priorityNode_),this.children_.isEmpty()&&C(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return vi||(vi=new x(new be(ih),null,bt.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||vi}updatePriority(e){return this.children_.isEmpty()?this:new x(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?vi:n}}getChild(e){const n=b(e);return n===null?this:this.getImmediateChild(n).getChild(H(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(C(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const r=new F(e,n);let i,s;n.isEmpty()?(i=this.children_.remove(e),s=this.indexMap_.removeFromIndexes(r,this.children_)):(i=this.children_.insert(e,n),s=this.indexMap_.addToIndexes(r,this.children_));const o=i.isEmpty()?vi:this.priorityNode_;return new x(i,o,s)}}updateChild(e,n){const r=b(e);if(r===null)return n;{C(b(e)!==".priority"||In(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(r).updateChild(H(e),n);return this.updateImmediateChild(r,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let r=0,i=0,s=!0;if(this.forEachChild(ne,(o,l)=>{n[o]=l.val(e),r++,s&&x.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):s=!1}),!e&&s&&i<2*r){const o=[];for(const l in n)o[l]=n[l];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Tv(this.getPriority().val())+":"),this.forEachChild(ne,(n,r)=>{const i=r.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Zy(e)}return this.lazyHash_}getPredecessorChildName(e,n,r){const i=this.resolveIndex_(r);if(i){const s=i.getPredecessorKey(new F(e,n));return s?s.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.minKey();return r&&r.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new F(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const r=n.maxKey();return r&&r.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new F(n,this.children_.get(n)):null}forEachChild(e,n){const r=this.resolveIndex_(e);return r?r.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)<0;)i.getNext(),s=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const r=this.resolveIndex_(n);if(r)return r.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,F.Wrap);let s=i.peek();for(;s!=null&&n.compare(s,e)>0;)i.getNext(),s=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Os?-1:0}withIndex(e){if(e===Mr||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new x(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Mr||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const r=this.getIterator(ne),i=n.getIterator(ne);let s=r.getNext(),o=i.getNext();for(;s&&o;){if(s.name!==o.name||!s.node.equals(o.node))return!1;s=r.getNext(),o=i.getNext()}return s===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Mr?null:this.indexMap_.get(e.toString())}}x.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class JN extends x{constructor(){super(new be(ih),x.EMPTY_NODE,bt.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return x.EMPTY_NODE}isEmpty(){return!1}}const Os=new JN;Object.defineProperties(F,{MIN:{value:new F(Kr,x.EMPTY_NODE)},MAX:{value:new F(er,Os)}});kv.__EMPTY_NODE=x.EMPTY_NODE;de.__childrenNodeConstructor=x;GN(Os);qN(Os);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZN=!0;function ye(t,e=null){if(t===null)return x.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),C(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new de(n,ye(e))}if(!(t instanceof Array)&&ZN){const n=[];let r=!1;if(Be(t,(o,l)=>{if(o.substring(0,1)!=="."){const a=ye(l);a.isEmpty()||(r=r||!a.getPriority().isEmpty(),n.push(new F(o,a)))}}),n.length===0)return x.EMPTY_NODE;const s=yl(n,HN,o=>o.name,ih);if(r){const o=yl(n,ne.getCompare());return new x(s,ye(e),new bt({".priority":o},{".priority":ne}))}else return new x(s,ye(e),bt.Default)}else{let n=x.EMPTY_NODE;return Be(t,(r,i)=>{if(Qt(t,r)&&r.substring(0,1)!=="."){const s=ye(i);(s.isLeafNode()||!s.isEmpty())&&(n=n.updateImmediateChild(r,s))}}),n.updatePriority(ye(e))}}KN(ye);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class e1 extends ra{constructor(e){super(),this.indexPath_=e,C(!U(e)&&b(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const r=this.extractChild(e.node),i=this.extractChild(n.node),s=r.compareTo(i);return s===0?ii(e.name,n.name):s}makePost(e,n){const r=ye(e),i=x.EMPTY_NODE.updateChild(this.indexPath_,r);return new F(n,i)}maxPost(){const e=x.EMPTY_NODE.updateChild(this.indexPath_,Os);return new F(er,e)}toString(){return Ev(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class t1 extends ra{compare(e,n){const r=e.node.compareTo(n.node);return r===0?ii(e.name,n.name):r}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return F.MIN}maxPost(){return F.MAX}makePost(e,n){const r=ye(e);return new F(n,r)}toString(){return".value"}}const n1=new t1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xv(t){return{type:"value",snapshotNode:t}}function qr(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function ds(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function hs(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function r1(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e){this.index_=e}updateChild(e,n,r,i,s,o){C(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const l=e.getImmediateChild(n);return l.getChild(i).equals(r.getChild(i))&&l.isEmpty()===r.isEmpty()||(o!=null&&(r.isEmpty()?e.hasChild(n)?o.trackChildChange(ds(n,l)):C(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):l.isEmpty()?o.trackChildChange(qr(n,r)):o.trackChildChange(hs(n,r,l))),e.isLeafNode()&&r.isEmpty())?e:e.updateImmediateChild(n,r).withIndex(this.index_)}updateFullNode(e,n,r){return r!=null&&(e.isLeafNode()||e.forEachChild(ne,(i,s)=>{n.hasChild(i)||r.trackChildChange(ds(i,s))}),n.isLeafNode()||n.forEachChild(ne,(i,s)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(s)||r.trackChildChange(hs(i,s,o))}else r.trackChildChange(qr(i,s))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?x.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fs{constructor(e){this.indexedFilter_=new sh(e.getIndex()),this.index_=e.getIndex(),this.startPost_=fs.getStartPost_(e),this.endPost_=fs.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,r=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&r}updateChild(e,n,r,i,s,o){return this.matches(new F(n,r))||(r=x.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,r,i,s,o)}updateFullNode(e,n,r){n.isLeafNode()&&(n=x.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(x.EMPTY_NODE);const s=this;return n.forEachChild(ne,(o,l)=>{s.matches(new F(o,l))||(i=i.updateImmediateChild(o,x.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i1{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const r=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?r<=0:r<0},this.withinEndPost=n=>{const r=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?r<=0:r<0},this.rangedFilter_=new fs(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,r,i,s,o){return this.rangedFilter_.matches(new F(n,r))||(r=x.EMPTY_NODE),e.getImmediateChild(n).equals(r)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,r,i,s,o):this.fullLimitUpdateChild_(e,n,r,s,o)}updateFullNode(e,n,r){let i;if(n.isLeafNode()||n.isEmpty())i=x.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=x.EMPTY_NODE.withIndex(this.index_);let s;this.reverse_?s=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):s=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;s.hasNext()&&o<this.limit_;){const l=s.getNext();if(this.withinDirectionalStart(l))if(this.withinDirectionalEnd(l))i=i.updateImmediateChild(l.name,l.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(x.EMPTY_NODE);let s;this.reverse_?s=i.getReverseIterator(this.index_):s=i.getIterator(this.index_);let o=0;for(;s.hasNext();){const l=s.getNext();o<this.limit_&&this.withinDirectionalStart(l)&&this.withinDirectionalEnd(l)?o++:i=i.updateImmediateChild(l.name,x.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,r)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,r,i,s){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,m)=>d(m,h)}else o=this.index_.getCompare();const l=e;C(l.numChildren()===this.limit_,"");const a=new F(n,r),u=this.reverse_?l.getFirstChild(this.index_):l.getLastChild(this.index_),c=this.rangedFilter_.matches(a);if(l.hasChild(n)){const d=l.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,u,this.reverse_);for(;h!=null&&(h.name===n||l.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,a);if(c&&!r.isEmpty()&&m>=0)return s!=null&&s.trackChildChange(hs(n,r,d)),l.updateImmediateChild(n,r);{s!=null&&s.trackChildChange(ds(n,d));const w=l.updateImmediateChild(n,x.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(s!=null&&s.trackChildChange(qr(h.name,h.node)),w.updateImmediateChild(h.name,h.node)):w}}else return r.isEmpty()?e:c&&o(u,a)>=0?(s!=null&&(s.trackChildChange(ds(u.name,u.node)),s.trackChildChange(qr(n,r))),l.updateImmediateChild(n,r).updateImmediateChild(u.name,x.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oh{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=ne}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return C(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return C(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Kr}hasEnd(){return this.endSet_}getIndexEndValue(){return C(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return C(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:er}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return C(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===ne}copy(){const e=new oh;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function s1(t){return t.loadsAllData()?new sh(t.getIndex()):t.hasLimit()?new i1(t):new fs(t)}function Qp(t){const e={};if(t.isDefault())return e;let n;if(t.index_===ne?n="$priority":t.index_===n1?n="$value":t.index_===Mr?n="$key":(C(t.index_ instanceof e1,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=pe(n),t.startSet_){const r=t.startAfterSet_?"startAfter":"startAt";e[r]=pe(t.indexStartValue_),t.startNameSet_&&(e[r]+=","+pe(t.indexStartName_))}if(t.endSet_){const r=t.endBeforeSet_?"endBefore":"endAt";e[r]=pe(t.indexEndValue_),t.endNameSet_&&(e[r]+=","+pe(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Yp(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==ne&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vl extends vv{constructor(e,n,r,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=r,this.appCheckTokenProvider_=i,this.log_=As("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(C(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,n,r,i){const s=e._path.toString();this.log_("Listen called for "+s+" "+e._queryIdentifier);const o=vl.getListenId_(e,r),l={};this.listens_[o]=l;const a=Qp(e._queryParams);this.restRequest_(s+".json",a,(u,c)=>{let d=c;if(u===404&&(d=null,u=null),u===null&&this.onDataUpdate_(s,d,!1,r),$r(this.listens_,o)===l){let h;u?u===401?h="permission_denied":h="rest_error:"+u:h="ok",i(h,null)}})}unlisten(e,n){const r=vl.getListenId_(e,n);delete this.listens_[r]}get(e){const n=Qp(e._queryParams),r=e._path.toString(),i=new Jl;return this.restRequest_(r+".json",n,(s,o)=>{let l=o;s===404&&(l=null,s=null),s===null?(this.onDataUpdate_(r,l,!1,null),i.resolve(l)):i.reject(new Error(l))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},r){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,s])=>{i&&i.accessToken&&(n.auth=i.accessToken),s&&s.token&&(n.ac=s.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+ti(n);this.log_("Sending REST request for "+o);const l=new XMLHttpRequest;l.onreadystatechange=()=>{if(r&&l.readyState===4){this.log_("REST Response for "+o+" received. status:",l.status,"response:",l.responseText);let a=null;if(l.status>=200&&l.status<300){try{a=ls(l.responseText)}catch{ze("Failed to parse JSON response for "+o+": "+l.responseText)}r(null,a)}else l.status!==401&&l.status!==404&&ze("Got unsuccessful REST response for "+o+" Status: "+l.status),r(l.status);r=null}},l.open("GET",o,!0),l.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o1{constructor(){this.rootNode_=x.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wl(){return{value:null,children:new Map}}function Av(t,e,n){if(U(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const r=b(e);t.children.has(r)||t.children.set(r,wl());const i=t.children.get(r);e=H(e),Av(i,e,n)}}function Ec(t,e,n){t.value!==null?n(e,t.value):l1(t,(r,i)=>{const s=new $(e.toString()+"/"+r);Ec(i,s,n)})}function l1(t,e){t.children.forEach((n,r)=>{e(r,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a1{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&Be(this.last_,(r,i)=>{n[r]=n[r]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xp=10*1e3,u1=30*1e3,c1=5*60*1e3;class d1{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new a1(e);const r=Xp+(u1-Xp)*Math.random();Fi(this.reportStats_.bind(this),Math.floor(r))}reportStats_(){const e=this.statsListener_.get(),n={};let r=!1;Be(e,(i,s)=>{s>0&&Qt(this.statsToReport_,i)&&(n[i]=s,r=!0)}),r&&this.server_.reportStats(n),Fi(this.reportStats_.bind(this),Math.floor(Math.random()*2*c1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ht;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(ht||(ht={}));function Ov(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function lh(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function ah(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,n,r){this.path=e,this.affectedTree=n,this.revert=r,this.type=ht.ACK_USER_WRITE,this.source=Ov()}operationForChild(e){if(U(this.path)){if(this.affectedTree.value!=null)return C(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new $(e));return new Sl(B(),n,this.revert)}}else return C(b(this.path)===e,"operationForChild called for unrelated child."),new Sl(H(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,n){this.source=e,this.path=n,this.type=ht.LISTEN_COMPLETE}operationForChild(e){return U(this.path)?new ps(this.source,B()):new ps(this.source,H(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(e,n,r){this.source=e,this.path=n,this.snap=r,this.type=ht.OVERWRITE}operationForChild(e){return U(this.path)?new tr(this.source,B(),this.snap.getImmediateChild(e)):new tr(this.source,H(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ms{constructor(e,n,r){this.source=e,this.path=n,this.children=r,this.type=ht.MERGE}operationForChild(e){if(U(this.path)){const n=this.children.subtree(new $(e));return n.isEmpty()?null:n.value?new tr(this.source,B(),n.value):new ms(this.source,B(),n)}else return C(b(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new ms(this.source,H(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nr{constructor(e,n,r){this.node_=e,this.fullyInitialized_=n,this.filtered_=r}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(U(e))return this.isFullyInitialized()&&!this.filtered_;const n=b(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class h1{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function f1(t,e,n,r){const i=[],s=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&s.push(r1(o.childName,o.snapshotNode))}),wi(t,i,"child_removed",e,r,n),wi(t,i,"child_added",e,r,n),wi(t,i,"child_moved",s,r,n),wi(t,i,"child_changed",e,r,n),wi(t,i,"value",e,r,n),i}function wi(t,e,n,r,i,s){const o=r.filter(l=>l.type===n);o.sort((l,a)=>m1(t,l,a)),o.forEach(l=>{const a=p1(t,l,s);i.forEach(u=>{u.respondsTo(l.type)&&e.push(u.createEvent(a,t.query_))})})}function p1(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function m1(t,e,n){if(e.childName==null||n.childName==null)throw ei("Should only compare child_ events.");const r=new F(e.childName,e.snapshotNode),i=new F(n.childName,n.snapshotNode);return t.index_.compare(r,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(t,e){return{eventCache:t,serverCache:e}}function Ui(t,e,n,r){return ia(new nr(e,n,r),t.serverCache)}function Dv(t,e,n,r){return ia(t.eventCache,new nr(e,n,r))}function Cc(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function rr(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ou;const g1=()=>(ou||(ou=new be(tN)),ou);class q{constructor(e,n=g1()){this.value=e,this.children=n}static fromObject(e){let n=new q(null);return Be(e,(r,i)=>{n=n.set(new $(r),i)}),n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:B(),value:this.value};if(U(e))return null;{const r=b(e),i=this.children.get(r);if(i!==null){const s=i.findRootMostMatchingPathAndValue(H(e),n);return s!=null?{path:ae(new $(r),s.path),value:s.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(U(e))return this;{const n=b(e),r=this.children.get(n);return r!==null?r.subtree(H(e)):new q(null)}}set(e,n){if(U(e))return new q(n,this.children);{const r=b(e),s=(this.children.get(r)||new q(null)).set(H(e),n),o=this.children.insert(r,s);return new q(this.value,o)}}remove(e){if(U(e))return this.children.isEmpty()?new q(null):new q(null,this.children);{const n=b(e),r=this.children.get(n);if(r){const i=r.remove(H(e));let s;return i.isEmpty()?s=this.children.remove(n):s=this.children.insert(n,i),this.value===null&&s.isEmpty()?new q(null):new q(this.value,s)}else return this}}get(e){if(U(e))return this.value;{const n=b(e),r=this.children.get(n);return r?r.get(H(e)):null}}setTree(e,n){if(U(e))return n;{const r=b(e),s=(this.children.get(r)||new q(null)).setTree(H(e),n);let o;return s.isEmpty()?o=this.children.remove(r):o=this.children.insert(r,s),new q(this.value,o)}}fold(e){return this.fold_(B(),e)}fold_(e,n){const r={};return this.children.inorderTraversal((i,s)=>{r[i]=s.fold_(ae(e,i),n)}),n(e,this.value,r)}findOnPath(e,n){return this.findOnPath_(e,B(),n)}findOnPath_(e,n,r){const i=this.value?r(n,this.value):!1;if(i)return i;if(U(e))return null;{const s=b(e),o=this.children.get(s);return o?o.findOnPath_(H(e),ae(n,s),r):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,B(),n)}foreachOnPath_(e,n,r){if(U(e))return this;{this.value&&r(n,this.value);const i=b(e),s=this.children.get(i);return s?s.foreachOnPath_(H(e),ae(n,i),r):new q(null)}}foreach(e){this.foreach_(B(),e)}foreach_(e,n){this.children.inorderTraversal((r,i)=>{i.foreach_(ae(e,r),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,r)=>{r.value&&e(n,r.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e){this.writeTree_=e}static empty(){return new gt(new q(null))}}function ji(t,e,n){if(U(e))return new gt(new q(n));{const r=t.writeTree_.findRootMostValueAndPath(e);if(r!=null){const i=r.path;let s=r.value;const o=Le(i,e);return s=s.updateChild(o,n),new gt(t.writeTree_.set(i,s))}else{const i=new q(n),s=t.writeTree_.setTree(e,i);return new gt(s)}}}function Jp(t,e,n){let r=t;return Be(n,(i,s)=>{r=ji(r,ae(e,i),s)}),r}function Zp(t,e){if(U(e))return gt.empty();{const n=t.writeTree_.setTree(e,new q(null));return new gt(n)}}function Ic(t,e){return lr(t,e)!=null}function lr(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(Le(n.path,e)):null}function em(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(ne,(r,i)=>{e.push(new F(r,i))}):t.writeTree_.children.inorderTraversal((r,i)=>{i.value!=null&&e.push(new F(r,i.value))}),e}function wn(t,e){if(U(e))return t;{const n=lr(t,e);return n!=null?new gt(new q(n)):new gt(t.writeTree_.subtree(e))}}function kc(t){return t.writeTree_.isEmpty()}function Qr(t,e){return Mv(B(),t.writeTree_,e)}function Mv(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let r=null;return e.children.inorderTraversal((i,s)=>{i===".priority"?(C(s.value!==null,"Priority writes must always be leaf nodes"),r=s.value):n=Mv(ae(t,i),s,n)}),!n.getChild(t).isEmpty()&&r!==null&&(n=n.updateChild(ae(t,".priority"),r)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uh(t,e){return Uv(e,t)}function _1(t,e,n,r,i){C(r>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:r,visible:i}),i&&(t.visibleWrites=ji(t.visibleWrites,e,n)),t.lastWriteId=r}function y1(t,e){for(let n=0;n<t.allWrites.length;n++){const r=t.allWrites[n];if(r.writeId===e)return r}return null}function v1(t,e){const n=t.allWrites.findIndex(l=>l.writeId===e);C(n>=0,"removeWrite called with nonexistent writeId.");const r=t.allWrites[n];t.allWrites.splice(n,1);let i=r.visible,s=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const l=t.allWrites[o];l.visible&&(o>=n&&w1(l,r.path)?i=!1:dt(r.path,l.path)&&(s=!0)),o--}if(i){if(s)return S1(t),!0;if(r.snap)t.visibleWrites=Zp(t.visibleWrites,r.path);else{const l=r.children;Be(l,a=>{t.visibleWrites=Zp(t.visibleWrites,ae(r.path,a))})}return!0}else return!1}function w1(t,e){if(t.snap)return dt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&dt(ae(t.path,n),e))return!0;return!1}function S1(t){t.visibleWrites=Lv(t.allWrites,E1,B()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function E1(t){return t.visible}function Lv(t,e,n){let r=gt.empty();for(let i=0;i<t.length;++i){const s=t[i];if(e(s)){const o=s.path;let l;if(s.snap)dt(n,o)?(l=Le(n,o),r=ji(r,l,s.snap)):dt(o,n)&&(l=Le(o,n),r=ji(r,B(),s.snap.getChild(l)));else if(s.children){if(dt(n,o))l=Le(n,o),r=Jp(r,l,s.children);else if(dt(o,n))if(l=Le(o,n),U(l))r=Jp(r,B(),s.children);else{const a=$r(s.children,b(l));if(a){const u=a.getChild(H(l));r=ji(r,B(),u)}}}else throw ei("WriteRecord should have .snap or .children")}}return r}function bv(t,e,n,r,i){if(!r&&!i){const s=lr(t.visibleWrites,e);if(s!=null)return s;{const o=wn(t.visibleWrites,e);if(kc(o))return n;if(n==null&&!Ic(o,B()))return null;{const l=n||x.EMPTY_NODE;return Qr(o,l)}}}else{const s=wn(t.visibleWrites,e);if(!i&&kc(s))return n;if(!i&&n==null&&!Ic(s,B()))return null;{const o=function(u){return(u.visible||i)&&(!r||!~r.indexOf(u.writeId))&&(dt(u.path,e)||dt(e,u.path))},l=Lv(t.allWrites,o,e),a=n||x.EMPTY_NODE;return Qr(l,a)}}}function C1(t,e,n){let r=x.EMPTY_NODE;const i=lr(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(ne,(s,o)=>{r=r.updateImmediateChild(s,o)}),r;if(n){const s=wn(t.visibleWrites,e);return n.forEachChild(ne,(o,l)=>{const a=Qr(wn(s,new $(o)),l);r=r.updateImmediateChild(o,a)}),em(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}else{const s=wn(t.visibleWrites,e);return em(s).forEach(o=>{r=r.updateImmediateChild(o.name,o.node)}),r}}function I1(t,e,n,r,i){C(r||i,"Either existingEventSnap or existingServerSnap must exist");const s=ae(e,n);if(Ic(t.visibleWrites,s))return null;{const o=wn(t.visibleWrites,s);return kc(o)?i.getChild(n):Qr(o,i.getChild(n))}}function k1(t,e,n,r){const i=ae(e,n),s=lr(t.visibleWrites,i);if(s!=null)return s;if(r.isCompleteForChild(n)){const o=wn(t.visibleWrites,i);return Qr(o,r.getNode().getImmediateChild(n))}else return null}function T1(t,e){return lr(t.visibleWrites,e)}function N1(t,e,n,r,i,s,o){let l;const a=wn(t.visibleWrites,e),u=lr(a,B());if(u!=null)l=u;else if(n!=null)l=Qr(a,n);else return[];if(l=l.withIndex(o),!l.isEmpty()&&!l.isLeafNode()){const c=[],d=o.getCompare(),h=s?l.getReverseIteratorFrom(r,o):l.getIteratorFrom(r,o);let m=h.getNext();for(;m&&c.length<i;)d(m,r)!==0&&c.push(m),m=h.getNext();return c}else return[]}function R1(){return{visibleWrites:gt.empty(),allWrites:[],lastWriteId:-1}}function El(t,e,n,r){return bv(t.writeTree,t.treePath,e,n,r)}function ch(t,e){return C1(t.writeTree,t.treePath,e)}function tm(t,e,n,r){return I1(t.writeTree,t.treePath,e,n,r)}function Cl(t,e){return T1(t.writeTree,ae(t.treePath,e))}function P1(t,e,n,r,i,s){return N1(t.writeTree,t.treePath,e,n,r,i,s)}function dh(t,e,n){return k1(t.writeTree,t.treePath,e,n)}function Fv(t,e){return Uv(ae(t.treePath,e),t.writeTree)}function Uv(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x1{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,r=e.childName;C(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),C(r!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(r);if(i){const s=i.type;if(n==="child_added"&&s==="child_removed")this.changeMap.set(r,hs(r,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&s==="child_added")this.changeMap.delete(r);else if(n==="child_removed"&&s==="child_changed")this.changeMap.set(r,ds(r,i.oldSnap));else if(n==="child_changed"&&s==="child_added")this.changeMap.set(r,qr(r,e.snapshotNode));else if(n==="child_changed"&&s==="child_changed")this.changeMap.set(r,hs(r,e.snapshotNode,i.oldSnap));else throw ei("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(r,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A1{getCompleteChild(e){return null}getChildAfterChild(e,n,r){return null}}const jv=new A1;class hh{constructor(e,n,r=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=r}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const r=this.optCompleteServerCache_!=null?new nr(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return dh(this.writes_,e,r)}}getChildAfterChild(e,n,r){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:rr(this.viewCache_),s=P1(this.writes_,i,n,1,r,e);return s.length===0?null:s[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O1(t){return{filter:t}}function D1(t,e){C(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),C(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function M1(t,e,n,r,i){const s=new x1;let o,l;if(n.type===ht.OVERWRITE){const u=n;u.source.fromUser?o=Tc(t,e,u.path,u.snap,r,i,s):(C(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered()&&!U(u.path),o=Il(t,e,u.path,u.snap,r,i,l,s))}else if(n.type===ht.MERGE){const u=n;u.source.fromUser?o=b1(t,e,u.path,u.children,r,i,s):(C(u.source.fromServer,"Unknown source."),l=u.source.tagged||e.serverCache.isFiltered(),o=Nc(t,e,u.path,u.children,r,i,l,s))}else if(n.type===ht.ACK_USER_WRITE){const u=n;u.revert?o=j1(t,e,u.path,r,i,s):o=F1(t,e,u.path,u.affectedTree,r,i,s)}else if(n.type===ht.LISTEN_COMPLETE)o=U1(t,e,n.path,r,s);else throw ei("Unknown operation type: "+n.type);const a=s.getChanges();return L1(e,o,a),{viewCache:o,changes:a}}function L1(t,e,n){const r=e.eventCache;if(r.isFullyInitialized()){const i=r.getNode().isLeafNode()||r.getNode().isEmpty(),s=Cc(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!r.getNode().equals(s)||!r.getNode().getPriority().equals(s.getPriority()))&&n.push(xv(Cc(e)))}}function zv(t,e,n,r,i,s){const o=e.eventCache;if(Cl(r,n)!=null)return e;{let l,a;if(U(n))if(C(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const u=rr(e),c=u instanceof x?u:x.EMPTY_NODE,d=ch(r,c);l=t.filter.updateFullNode(e.eventCache.getNode(),d,s)}else{const u=El(r,rr(e));l=t.filter.updateFullNode(e.eventCache.getNode(),u,s)}else{const u=b(n);if(u===".priority"){C(In(n)===1,"Can't have a priority with additional path components");const c=o.getNode();a=e.serverCache.getNode();const d=tm(r,n,c,a);d!=null?l=t.filter.updatePriority(c,d):l=o.getNode()}else{const c=H(n);let d;if(o.isCompleteForChild(u)){a=e.serverCache.getNode();const h=tm(r,n,o.getNode(),a);h!=null?d=o.getNode().getImmediateChild(u).updateChild(c,h):d=o.getNode().getImmediateChild(u)}else d=dh(r,u,e.serverCache);d!=null?l=t.filter.updateChild(o.getNode(),u,d,c,i,s):l=o.getNode()}}return Ui(e,l,o.isFullyInitialized()||U(n),t.filter.filtersNodes())}}function Il(t,e,n,r,i,s,o,l){const a=e.serverCache;let u;const c=o?t.filter:t.filter.getIndexedFilter();if(U(n))u=c.updateFullNode(a.getNode(),r,null);else if(c.filtersNodes()&&!a.isFiltered()){const m=a.getNode().updateChild(n,r);u=c.updateFullNode(a.getNode(),m,null)}else{const m=b(n);if(!a.isCompleteForPath(n)&&In(n)>1)return e;const y=H(n),T=a.getNode().getImmediateChild(m).updateChild(y,r);m===".priority"?u=c.updatePriority(a.getNode(),T):u=c.updateChild(a.getNode(),m,T,y,jv,null)}const d=Dv(e,u,a.isFullyInitialized()||U(n),c.filtersNodes()),h=new hh(i,d,s);return zv(t,d,n,i,h,l)}function Tc(t,e,n,r,i,s,o){const l=e.eventCache;let a,u;const c=new hh(i,e,s);if(U(n))u=t.filter.updateFullNode(e.eventCache.getNode(),r,o),a=Ui(e,u,!0,t.filter.filtersNodes());else{const d=b(n);if(d===".priority")u=t.filter.updatePriority(e.eventCache.getNode(),r),a=Ui(e,u,l.isFullyInitialized(),l.isFiltered());else{const h=H(n),m=l.getNode().getImmediateChild(d);let y;if(U(h))y=r;else{const w=c.getCompleteChild(d);w!=null?Sv(h)===".priority"&&w.getChild(Cv(h)).isEmpty()?y=w:y=w.updateChild(h,r):y=x.EMPTY_NODE}if(m.equals(y))a=e;else{const w=t.filter.updateChild(l.getNode(),d,y,h,c,o);a=Ui(e,w,l.isFullyInitialized(),t.filter.filtersNodes())}}}return a}function nm(t,e){return t.eventCache.isCompleteForChild(e)}function b1(t,e,n,r,i,s,o){let l=e;return r.foreach((a,u)=>{const c=ae(n,a);nm(e,b(c))&&(l=Tc(t,l,c,u,i,s,o))}),r.foreach((a,u)=>{const c=ae(n,a);nm(e,b(c))||(l=Tc(t,l,c,u,i,s,o))}),l}function rm(t,e,n){return n.foreach((r,i)=>{e=e.updateChild(r,i)}),e}function Nc(t,e,n,r,i,s,o,l){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let a=e,u;U(n)?u=r:u=new q(null).setTree(n,r);const c=e.serverCache.getNode();return u.children.inorderTraversal((d,h)=>{if(c.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),y=rm(t,m,h);a=Il(t,a,new $(d),y,i,s,o,l)}}),u.children.inorderTraversal((d,h)=>{const m=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!c.hasChild(d)&&!m){const y=e.serverCache.getNode().getImmediateChild(d),w=rm(t,y,h);a=Il(t,a,new $(d),w,i,s,o,l)}}),a}function F1(t,e,n,r,i,s,o){if(Cl(i,n)!=null)return e;const l=e.serverCache.isFiltered(),a=e.serverCache;if(r.value!=null){if(U(n)&&a.isFullyInitialized()||a.isCompleteForPath(n))return Il(t,e,n,a.getNode().getChild(n),i,s,l,o);if(U(n)){let u=new q(null);return a.getNode().forEachChild(Mr,(c,d)=>{u=u.set(new $(c),d)}),Nc(t,e,n,u,i,s,l,o)}else return e}else{let u=new q(null);return r.foreach((c,d)=>{const h=ae(n,c);a.isCompleteForPath(h)&&(u=u.set(c,a.getNode().getChild(h)))}),Nc(t,e,n,u,i,s,l,o)}}function U1(t,e,n,r,i){const s=e.serverCache,o=Dv(e,s.getNode(),s.isFullyInitialized()||U(n),s.isFiltered());return zv(t,o,n,r,jv,i)}function j1(t,e,n,r,i,s){let o;if(Cl(r,n)!=null)return e;{const l=new hh(r,e,i),a=e.eventCache.getNode();let u;if(U(n)||b(n)===".priority"){let c;if(e.serverCache.isFullyInitialized())c=El(r,rr(e));else{const d=e.serverCache.getNode();C(d instanceof x,"serverChildren would be complete if leaf node"),c=ch(r,d)}c=c,u=t.filter.updateFullNode(a,c,s)}else{const c=b(n);let d=dh(r,c,e.serverCache);d==null&&e.serverCache.isCompleteForChild(c)&&(d=a.getImmediateChild(c)),d!=null?u=t.filter.updateChild(a,c,d,H(n),l,s):e.eventCache.getNode().hasChild(c)?u=t.filter.updateChild(a,c,x.EMPTY_NODE,H(n),l,s):u=a,u.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=El(r,rr(e)),o.isLeafNode()&&(u=t.filter.updateFullNode(u,o,s)))}return o=e.serverCache.isFullyInitialized()||Cl(r,B())!=null,Ui(e,u,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const r=this.query_._queryParams,i=new sh(r.getIndex()),s=s1(r);this.processor_=O1(s);const o=n.serverCache,l=n.eventCache,a=i.updateFullNode(x.EMPTY_NODE,o.getNode(),null),u=s.updateFullNode(x.EMPTY_NODE,l.getNode(),null),c=new nr(a,o.isFullyInitialized(),i.filtersNodes()),d=new nr(u,l.isFullyInitialized(),s.filtersNodes());this.viewCache_=ia(d,c),this.eventGenerator_=new h1(this.query_)}get query(){return this.query_}}function B1(t){return t.viewCache_.serverCache.getNode()}function W1(t,e){const n=rr(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!U(e)&&!n.getImmediateChild(b(e)).isEmpty())?n.getChild(e):null}function im(t){return t.eventRegistrations_.length===0}function V1(t,e){t.eventRegistrations_.push(e)}function sm(t,e,n){const r=[];if(n){C(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(s=>{const o=s.createCancelEvent(n,i);o&&r.push(o)})}if(e){let i=[];for(let s=0;s<t.eventRegistrations_.length;++s){const o=t.eventRegistrations_[s];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(s+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return r}function om(t,e,n,r){e.type===ht.MERGE&&e.source.queryId!==null&&(C(rr(t.viewCache_),"We should always have a full cache before handling merges"),C(Cc(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,s=M1(t.processor_,i,e,n,r);return D1(t.processor_,s.viewCache),C(s.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=s.viewCache,Bv(t,s.changes,s.viewCache.eventCache.getNode(),null)}function $1(t,e){const n=t.viewCache_.eventCache,r=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(ne,(s,o)=>{r.push(qr(s,o))}),n.isFullyInitialized()&&r.push(xv(n.getNode())),Bv(t,r,n.getNode(),e)}function Bv(t,e,n,r){const i=r?[r]:t.eventRegistrations_;return f1(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kl;class H1{constructor(){this.views=new Map}}function G1(t){C(!kl,"__referenceConstructor has already been defined"),kl=t}function K1(){return C(kl,"Reference.ts has not been loaded"),kl}function q1(t){return t.views.size===0}function fh(t,e,n,r){const i=e.source.queryId;if(i!==null){const s=t.views.get(i);return C(s!=null,"SyncTree gave us an op for an invalid query."),om(s,e,n,r)}else{let s=[];for(const o of t.views.values())s=s.concat(om(o,e,n,r));return s}}function Q1(t,e,n,r,i){const s=e._queryIdentifier,o=t.views.get(s);if(!o){let l=El(n,i?r:null),a=!1;l?a=!0:r instanceof x?(l=ch(n,r),a=!1):(l=x.EMPTY_NODE,a=!1);const u=ia(new nr(l,a,!1),new nr(r,i,!1));return new z1(e,u)}return o}function Y1(t,e,n,r,i,s){const o=Q1(t,e,r,i,s);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),V1(o,n),$1(o,n)}function X1(t,e,n,r){const i=e._queryIdentifier,s=[];let o=[];const l=kn(t);if(i==="default")for(const[a,u]of t.views.entries())o=o.concat(sm(u,n,r)),im(u)&&(t.views.delete(a),u.query._queryParams.loadsAllData()||s.push(u.query));else{const a=t.views.get(i);a&&(o=o.concat(sm(a,n,r)),im(a)&&(t.views.delete(i),a.query._queryParams.loadsAllData()||s.push(a.query)))}return l&&!kn(t)&&s.push(new(K1())(e._repo,e._path)),{removed:s,events:o}}function Wv(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Lr(t,e){let n=null;for(const r of t.views.values())n=n||W1(r,e);return n}function Vv(t,e){if(e._queryParams.loadsAllData())return sa(t);{const r=e._queryIdentifier;return t.views.get(r)}}function $v(t,e){return Vv(t,e)!=null}function kn(t){return sa(t)!=null}function sa(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Tl;function J1(t){C(!Tl,"__referenceConstructor has already been defined"),Tl=t}function Z1(){return C(Tl,"Reference.ts has not been loaded"),Tl}let eR=1;class lm{constructor(e){this.listenProvider_=e,this.syncPointTree_=new q(null),this.pendingWriteTree_=R1(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Hv(t,e,n,r,i){return _1(t.pendingWriteTree_,e,n,r,i),i?Ds(t,new tr(Ov(),e,n)):[]}function Wn(t,e,n=!1){const r=y1(t.pendingWriteTree_,e);if(v1(t.pendingWriteTree_,e)){let s=new q(null);return r.snap!=null?s=s.set(B(),!0):Be(r.children,o=>{s=s.set(new $(o),!0)}),Ds(t,new Sl(r.path,s,n))}else return[]}function oa(t,e,n){return Ds(t,new tr(lh(),e,n))}function tR(t,e,n){const r=q.fromObject(n);return Ds(t,new ms(lh(),e,r))}function nR(t,e){return Ds(t,new ps(lh(),e))}function rR(t,e,n){const r=mh(t,n);if(r){const i=gh(r),s=i.path,o=i.queryId,l=Le(s,e),a=new ps(ah(o),l);return _h(t,s,a)}else return[]}function Rc(t,e,n,r,i=!1){const s=e._path,o=t.syncPointTree_.get(s);let l=[];if(o&&(e._queryIdentifier==="default"||$v(o,e))){const a=X1(o,e,n,r);q1(o)&&(t.syncPointTree_=t.syncPointTree_.remove(s));const u=a.removed;if(l=a.events,!i){const c=u.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(s,(h,m)=>kn(m));if(c&&!d){const h=t.syncPointTree_.subtree(s);if(!h.isEmpty()){const m=oR(h);for(let y=0;y<m.length;++y){const w=m[y],T=w.query,p=qv(t,w);t.listenProvider_.startListening(zi(T),Nl(t,T),p.hashFn,p.onComplete)}}}!d&&u.length>0&&!r&&(c?t.listenProvider_.stopListening(zi(e),null):u.forEach(h=>{const m=t.queryToTagMap.get(la(h));t.listenProvider_.stopListening(zi(h),m)}))}lR(t,u)}return l}function iR(t,e,n,r){const i=mh(t,r);if(i!=null){const s=gh(i),o=s.path,l=s.queryId,a=Le(o,e),u=new tr(ah(l),a,n);return _h(t,o,u)}else return[]}function sR(t,e,n,r){const i=mh(t,r);if(i){const s=gh(i),o=s.path,l=s.queryId,a=Le(o,e),u=q.fromObject(n),c=new ms(ah(l),a,u);return _h(t,o,c)}else return[]}function am(t,e,n,r=!1){const i=e._path;let s=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,m)=>{const y=Le(h,i);s=s||Lr(m,y),o=o||kn(m)});let l=t.syncPointTree_.get(i);l?(o=o||kn(l),s=s||Lr(l,B())):(l=new H1,t.syncPointTree_=t.syncPointTree_.set(i,l));let a;s!=null?a=!0:(a=!1,s=x.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,y)=>{const w=Lr(y,B());w&&(s=s.updateImmediateChild(m,w))}));const u=$v(l,e);if(!u&&!e._queryParams.loadsAllData()){const h=la(e);C(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=aR();t.queryToTagMap.set(h,m),t.tagToQueryMap.set(m,h)}const c=uh(t.pendingWriteTree_,i);let d=Y1(l,e,n,c,s,a);if(!u&&!o&&!r){const h=Vv(l,e);d=d.concat(uR(t,e,h))}return d}function ph(t,e,n){const i=t.pendingWriteTree_,s=t.syncPointTree_.findOnPath(e,(o,l)=>{const a=Le(o,e),u=Lr(l,a);if(u)return u});return bv(i,e,s,n,!0)}function Ds(t,e){return Gv(e,t.syncPointTree_,null,uh(t.pendingWriteTree_,B()))}function Gv(t,e,n,r){if(U(t.path))return Kv(t,e,n,r);{const i=e.get(B());n==null&&i!=null&&(n=Lr(i,B()));let s=[];const o=b(t.path),l=t.operationForChild(o),a=e.children.get(o);if(a&&l){const u=n?n.getImmediateChild(o):null,c=Fv(r,o);s=s.concat(Gv(l,a,u,c))}return i&&(s=s.concat(fh(i,t,r,n))),s}}function Kv(t,e,n,r){const i=e.get(B());n==null&&i!=null&&(n=Lr(i,B()));let s=[];return e.children.inorderTraversal((o,l)=>{const a=n?n.getImmediateChild(o):null,u=Fv(r,o),c=t.operationForChild(o);c&&(s=s.concat(Kv(c,l,a,u)))}),i&&(s=s.concat(fh(i,t,r,n))),s}function qv(t,e){const n=e.query,r=Nl(t,n);return{hashFn:()=>(B1(e)||x.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return r?rR(t,n._path,r):nR(t,n._path);{const s=iN(i,n);return Rc(t,n,null,s)}}}}function Nl(t,e){const n=la(e);return t.queryToTagMap.get(n)}function la(t){return t._path.toString()+"$"+t._queryIdentifier}function mh(t,e){return t.tagToQueryMap.get(e)}function gh(t){const e=t.indexOf("$");return C(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new $(t.substr(0,e))}}function _h(t,e,n){const r=t.syncPointTree_.get(e);C(r,"Missing sync point for query tag that we're tracking");const i=uh(t.pendingWriteTree_,e);return fh(r,n,i,null)}function oR(t){return t.fold((e,n,r)=>{if(n&&kn(n))return[sa(n)];{let i=[];return n&&(i=Wv(n)),Be(r,(s,o)=>{i=i.concat(o)}),i}})}function zi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(Z1())(t._repo,t._path):t}function lR(t,e){for(let n=0;n<e.length;++n){const r=e[n];if(!r._queryParams.loadsAllData()){const i=la(r),s=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(s)}}}function aR(){return eR++}function uR(t,e,n){const r=e._path,i=Nl(t,e),s=qv(t,n),o=t.listenProvider_.startListening(zi(e),i,s.hashFn,s.onComplete),l=t.syncPointTree_.subtree(r);if(i)C(!kn(l.value),"If we're adding a query, it shouldn't be shadowed");else{const a=l.fold((u,c,d)=>{if(!U(u)&&c&&kn(c))return[sa(c).query];{let h=[];return c&&(h=h.concat(Wv(c).map(m=>m.query))),Be(d,(m,y)=>{h=h.concat(y)}),h}});for(let u=0;u<a.length;++u){const c=a[u];t.listenProvider_.stopListening(zi(c),Nl(t,c))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yh{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new yh(n)}node(){return this.node_}}class vh{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ae(this.path_,e);return new vh(this.syncTree_,n)}node(){return ph(this.syncTree_,this.path_)}}const cR=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},um=function(t,e,n){if(!t||typeof t!="object")return t;if(C(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return dR(t[".sv"],e,n);if(typeof t[".sv"]=="object")return hR(t[".sv"],e);C(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},dR=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:C(!1,"Unexpected server value: "+t)}},hR=function(t,e,n){t.hasOwnProperty("increment")||C(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const r=t.increment;typeof r!="number"&&C(!1,"Unexpected increment value: "+r);const i=e.node();if(C(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return r;const o=i.getValue();return typeof o!="number"?r:o+r},fR=function(t,e,n,r){return wh(e,new vh(n,t),r)},Qv=function(t,e,n){return wh(t,new yh(e),n)};function wh(t,e,n){const r=t.getPriority().val(),i=um(r,e.getImmediateChild(".priority"),n);let s;if(t.isLeafNode()){const o=t,l=um(o.getValue(),e,n);return l!==o.getValue()||i!==o.getPriority().val()?new de(l,ye(i)):t}else{const o=t;return s=o,i!==o.getPriority().val()&&(s=s.updatePriority(new de(i))),o.forEachChild(ne,(l,a)=>{const u=wh(a,e.getImmediateChild(l),n);u!==a&&(s=s.updateImmediateChild(l,u))}),s}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sh{constructor(e="",n=null,r={children:{},childCount:0}){this.name=e,this.parent=n,this.node=r}}function Eh(t,e){let n=e instanceof $?e:new $(e),r=t,i=b(n);for(;i!==null;){const s=$r(r.node.children,i)||{children:{},childCount:0};r=new Sh(i,r,s),n=H(n),i=b(n)}return r}function oi(t){return t.node.value}function Yv(t,e){t.node.value=e,Pc(t)}function Xv(t){return t.node.childCount>0}function pR(t){return oi(t)===void 0&&!Xv(t)}function aa(t,e){Be(t.node.children,(n,r)=>{e(new Sh(n,t,r))})}function Jv(t,e,n,r){n&&e(t),aa(t,i=>{Jv(i,e,!0)})}function mR(t,e,n){let r=t.parent;for(;r!==null;){if(e(r))return!0;r=r.parent}return!1}function Ms(t){return new $(t.parent===null?t.name:Ms(t.parent)+"/"+t.name)}function Pc(t){t.parent!==null&&gR(t.parent,t.name,t)}function gR(t,e,n){const r=pR(n),i=Qt(t.node.children,e);r&&i?(delete t.node.children[e],t.node.childCount--,Pc(t)):!r&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Pc(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _R=/[\[\].#$\/\u0000-\u001F\u007F]/,yR=/[\[\].#$\u0000-\u001F\u007F]/,lu=10*1024*1024,Zv=function(t){return typeof t=="string"&&t.length!==0&&!_R.test(t)},ew=function(t){return typeof t=="string"&&t.length!==0&&!yR.test(t)},vR=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),ew(t)},wR=function(t,e,n,r){Ch(Fd(t,"value"),e,n)},Ch=function(t,e,n){const r=n instanceof $?new FN(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+bn(r));if(typeof e=="function")throw new Error(t+"contains a function "+bn(r)+" with contents = "+e.toString());if(ev(e))throw new Error(t+"contains "+e.toString()+" "+bn(r));if(typeof e=="string"&&e.length>lu/3&&Zl(e)>lu)throw new Error(t+"contains a string greater than "+lu+" utf8 bytes "+bn(r)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,s=!1;if(Be(e,(o,l)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(s=!0,!Zv(o)))throw new Error(t+" contains an invalid key ("+o+") "+bn(r)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);UN(r,o),Ch(t,l,r),jN(r)}),i&&s)throw new Error(t+' contains ".value" child '+bn(r)+" in addition to actual children.")}},tw=function(t,e,n,r){if(!ew(n))throw new Error(Fd(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},SR=function(t,e,n,r){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),tw(t,e,n)},ER=function(t,e){if(b(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},CR=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!Zv(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!vR(n))throw new Error(Fd(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class IR{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Ih(t,e){let n=null;for(let r=0;r<e.length;r++){const i=e[r],s=i.getPath();n!==null&&!nh(s,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:s}),n.events.push(i)}n&&t.eventLists_.push(n)}function nw(t,e,n){Ih(t,n),rw(t,r=>nh(r,e))}function Kt(t,e,n){Ih(t,n),rw(t,r=>dt(r,e)||dt(e,r))}function rw(t,e){t.recursionDepth_++;let n=!0;for(let r=0;r<t.eventLists_.length;r++){const i=t.eventLists_[r];if(i){const s=i.path;e(s)?(kR(t.eventLists_[r]),t.eventLists_[r]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function kR(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const r=n.getEventRunner();bi&&ke("event: "+n.toString()),si(r)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TR="repo_interrupt",NR=25;class RR{constructor(e,n,r,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=r,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new IR,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=wl(),this.transactionQueueTree_=new Sh,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function PR(t,e,n){if(t.stats_=eh(t.repoInfo_),t.forceRestClient_||aN())t.server_=new vl(t.repoInfo_,(r,i,s,o)=>{cm(t,r,i,s,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>dm(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{pe(n)}catch(r){throw new Error("Invalid authOverride provided: "+r)}}t.persistentConnection_=new Ut(t.repoInfo_,e,(r,i,s,o)=>{cm(t,r,i,s,o)},r=>{dm(t,r)},r=>{AR(t,r)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(r=>{t.server_.refreshAuthToken(r)}),t.appCheckProvider_.addTokenChangeListener(r=>{t.server_.refreshAppCheckToken(r.token)}),t.statsReporter_=fN(t.repoInfo_,()=>new d1(t.stats_,t.server_)),t.infoData_=new o1,t.infoSyncTree_=new lm({startListening:(r,i,s,o)=>{let l=[];const a=t.infoData_.getNode(r._path);return a.isEmpty()||(l=oa(t.infoSyncTree_,r._path,a),setTimeout(()=>{o("ok")},0)),l},stopListening:()=>{}}),Th(t,"connected",!1),t.serverSyncTree_=new lm({startListening:(r,i,s,o)=>(t.server_.listen(r,s,i,(l,a)=>{const u=o(l,a);Kt(t.eventQueue_,r._path,u)}),[]),stopListening:(r,i)=>{t.server_.unlisten(r,i)}})}function xR(t){const n=t.infoData_.getNode(new $(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function kh(t){return cR({timestamp:xR(t)})}function cm(t,e,n,r,i){t.dataUpdateCount++;const s=new $(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(r){const a=al(n,u=>ye(u));o=sR(t.serverSyncTree_,s,a,i)}else{const a=ye(n);o=iR(t.serverSyncTree_,s,a,i)}else if(r){const a=al(n,u=>ye(u));o=tR(t.serverSyncTree_,s,a)}else{const a=ye(n);o=oa(t.serverSyncTree_,s,a)}let l=s;o.length>0&&(l=ua(t,s)),Kt(t.eventQueue_,l,o)}function dm(t,e){Th(t,"connected",e),e===!1&&DR(t)}function AR(t,e){Be(e,(n,r)=>{Th(t,n,r)})}function Th(t,e,n){const r=new $("/.info/"+e),i=ye(n);t.infoData_.updateSnapshot(r,i);const s=oa(t.infoSyncTree_,r,i);Kt(t.eventQueue_,r,s)}function iw(t){return t.nextWriteId_++}function OR(t,e,n,r,i){Nh(t,"set",{path:e.toString(),value:n,priority:r});const s=kh(t),o=ye(n,r),l=ph(t.serverSyncTree_,e),a=Qv(o,l,s),u=iw(t),c=Hv(t.serverSyncTree_,e,a,u,!0);Ih(t.eventQueue_,c),t.server_.put(e.toString(),o.val(!0),(h,m)=>{const y=h==="ok";y||ze("set at "+e+" failed: "+h);const w=Wn(t.serverSyncTree_,u,!y);Kt(t.eventQueue_,e,w),bR(t,i,h,m)});const d=uw(t,e);ua(t,d),Kt(t.eventQueue_,d,[])}function DR(t){Nh(t,"onDisconnectEvents");const e=kh(t),n=wl();Ec(t.onDisconnect_,B(),(i,s)=>{const o=fR(i,s,t.serverSyncTree_,e);Av(n,i,o)});let r=[];Ec(n,B(),(i,s)=>{r=r.concat(oa(t.serverSyncTree_,i,s));const o=uw(t,i);ua(t,o)}),t.onDisconnect_=wl(),Kt(t.eventQueue_,B(),r)}function MR(t,e,n){let r;b(e._path)===".info"?r=am(t.infoSyncTree_,e,n):r=am(t.serverSyncTree_,e,n),nw(t.eventQueue_,e._path,r)}function hm(t,e,n){let r;b(e._path)===".info"?r=Rc(t.infoSyncTree_,e,n):r=Rc(t.serverSyncTree_,e,n),nw(t.eventQueue_,e._path,r)}function LR(t){t.persistentConnection_&&t.persistentConnection_.interrupt(TR)}function Nh(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),ke(n,...e)}function bR(t,e,n,r){e&&si(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let s=i;r&&(s+=": "+r);const o=new Error(s);o.code=i,e(o)}})}function sw(t,e,n){return ph(t.serverSyncTree_,e,n)||x.EMPTY_NODE}function Rh(t,e=t.transactionQueueTree_){if(e||ca(t,e),oi(e)){const n=lw(t,e);C(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&FR(t,Ms(e),n)}else Xv(e)&&aa(e,n=>{Rh(t,n)})}function FR(t,e,n){const r=n.map(u=>u.currentWriteId),i=sw(t,e,r);let s=i;const o=i.hash();for(let u=0;u<n.length;u++){const c=n[u];C(c.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),c.status=1,c.retryCount++;const d=Le(e,c.path);s=s.updateChild(d,c.currentOutputSnapshotRaw)}const l=s.val(!0),a=e;t.server_.put(a.toString(),l,u=>{Nh(t,"transaction put response",{path:a.toString(),status:u});let c=[];if(u==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,c=c.concat(Wn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();ca(t,Eh(t.transactionQueueTree_,e)),Rh(t,t.transactionQueueTree_),Kt(t.eventQueue_,e,c);for(let h=0;h<d.length;h++)si(d[h])}else{if(u==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{ze("transaction at "+a.toString()+" failed: "+u);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=u}ua(t,e)}},o)}function ua(t,e){const n=ow(t,e),r=Ms(n),i=lw(t,n);return UR(t,i,r),r}function UR(t,e,n){if(e.length===0)return;const r=[];let i=[];const o=e.filter(l=>l.status===0).map(l=>l.currentWriteId);for(let l=0;l<e.length;l++){const a=e[l],u=Le(n,a.path);let c=!1,d;if(C(u!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),a.status===4)c=!0,d=a.abortReason,i=i.concat(Wn(t.serverSyncTree_,a.currentWriteId,!0));else if(a.status===0)if(a.retryCount>=NR)c=!0,d="maxretry",i=i.concat(Wn(t.serverSyncTree_,a.currentWriteId,!0));else{const h=sw(t,a.path,o);a.currentInputSnapshot=h;const m=e[l].update(h.val());if(m!==void 0){Ch("transaction failed: Data returned ",m,a.path);let y=ye(m);typeof m=="object"&&m!=null&&Qt(m,".priority")||(y=y.updatePriority(h.getPriority()));const T=a.currentWriteId,p=kh(t),f=Qv(y,h,p);a.currentOutputSnapshotRaw=y,a.currentOutputSnapshotResolved=f,a.currentWriteId=iw(t),o.splice(o.indexOf(T),1),i=i.concat(Hv(t.serverSyncTree_,a.path,f,a.currentWriteId,a.applyLocally)),i=i.concat(Wn(t.serverSyncTree_,T,!0))}else c=!0,d="nodata",i=i.concat(Wn(t.serverSyncTree_,a.currentWriteId,!0))}Kt(t.eventQueue_,n,i),i=[],c&&(e[l].status=2,function(h){setTimeout(h,Math.floor(0))}(e[l].unwatcher),e[l].onComplete&&(d==="nodata"?r.push(()=>e[l].onComplete(null,!1,e[l].currentInputSnapshot)):r.push(()=>e[l].onComplete(new Error(d),!1,null))))}ca(t,t.transactionQueueTree_);for(let l=0;l<r.length;l++)si(r[l]);Rh(t,t.transactionQueueTree_)}function ow(t,e){let n,r=t.transactionQueueTree_;for(n=b(e);n!==null&&oi(r)===void 0;)r=Eh(r,n),e=H(e),n=b(e);return r}function lw(t,e){const n=[];return aw(t,e,n),n.sort((r,i)=>r.order-i.order),n}function aw(t,e,n){const r=oi(e);if(r)for(let i=0;i<r.length;i++)n.push(r[i]);aa(e,i=>{aw(t,i,n)})}function ca(t,e){const n=oi(e);if(n){let r=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[r]=n[i],r++);n.length=r,Yv(e,n.length>0?n:void 0)}aa(e,r=>{ca(t,r)})}function uw(t,e){const n=Ms(ow(t,e)),r=Eh(t.transactionQueueTree_,e);return mR(r,i=>{au(t,i)}),au(t,r),Jv(r,i=>{au(t,i)}),n}function au(t,e){const n=oi(e);if(n){const r=[];let i=[],s=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(C(s===o-1,"All SENT items should be at beginning of queue."),s=o,n[o].status=3,n[o].abortReason="set"):(C(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Wn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&r.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));s===-1?Yv(e,void 0):n.length=s+1,Kt(t.eventQueue_,Ms(e),i);for(let o=0;o<r.length;o++)si(r[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jR(t){let e="";const n=t.split("/");for(let r=0;r<n.length;r++)if(n[r].length>0){let i=n[r];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function zR(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const r=n.split("=");r.length===2?e[decodeURIComponent(r[0])]=decodeURIComponent(r[1]):ze(`Invalid query segment '${n}' in query '${t}'`)}return e}const fm=function(t,e){const n=BR(t),r=n.namespace;n.domain==="firebase.com"&&Gt(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!r||r==="undefined")&&n.domain!=="localhost"&&Gt("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||ZT();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new hv(n.host,n.secure,r,i,e,"",r!==n.subdomain),path:new $(n.pathString)}},BR=function(t){let e="",n="",r="",i="",s="",o=!0,l="https",a=443;if(typeof t=="string"){let u=t.indexOf("//");u>=0&&(l=t.substring(0,u-1),t=t.substring(u+2));let c=t.indexOf("/");c===-1&&(c=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(c,d)),c<d&&(i=jR(t.substring(c,d)));const h=zR(t.substring(Math.min(t.length,d)));u=e.indexOf(":"),u>=0?(o=l==="https"||l==="wss",a=parseInt(e.substring(u+1),10)):u=e.length;const m=e.slice(0,u);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const y=e.indexOf(".");r=e.substring(0,y).toLowerCase(),n=e.substring(y+1),s=r}"ns"in h&&(s=h.ns)}return{host:e,port:a,domain:n,subdomain:r,secure:o,scheme:l,pathString:i,namespace:s}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WR{constructor(e,n,r,i){this.eventType=e,this.eventRegistration=n,this.snapshot=r,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+pe(this.snapshot.exportVal())}}class VR{constructor(e,n,r){this.eventRegistration=e,this.error=n,this.path=r}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $R{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return C(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ph{constructor(e,n,r,i){this._repo=e,this._path=n,this._queryParams=r,this._orderByCalled=i}get key(){return U(this._path)?null:Sv(this._path)}get ref(){return new xn(this._repo,this._path)}get _queryIdentifier(){const e=Yp(this._queryParams),n=Jd(e);return n==="{}"?"default":n}get _queryObject(){return Yp(this._queryParams)}isEqual(e){if(e=Xe(e),!(e instanceof Ph))return!1;const n=this._repo===e._repo,r=nh(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&r&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+bN(this._path)}}class xn extends Ph{constructor(e,n){super(e,n,new oh,!1)}get parent(){const e=Cv(this._path);return e===null?null:new xn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Rl{constructor(e,n,r){this._node=e,this.ref=n,this._index=r}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new $(e),r=xc(this.ref,e);return new Rl(this._node.getChild(n),r,ne)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(r,i)=>e(new Rl(i,xc(this.ref,r),ne)))}hasChild(e){const n=new $(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function cw(t,e){return t=Xe(t),t._checkNotDeleted("ref"),xc(t._root,e)}function xc(t,e){return t=Xe(t),b(t._path)===null?SR("child","path",e):tw("child","path",e),new xn(t._repo,ae(t._path,e))}function dw(t,e){t=Xe(t),ER("set",t._path),wR("set",e,t._path);const n=new Jl;return OR(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}class xh{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const r=n._queryParams.getIndex();return new WR("value",this,new Rl(e.snapshotNode,new xn(n._repo,n._path),r))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new VR(this,e,n):null}matches(e){return e instanceof xh?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function HR(t,e,n,r,i){let s;if(typeof r=="object"&&(s=void 0,i=r),typeof r=="function"&&(s=r),i&&i.onlyOnce){const a=n,u=(c,d)=>{hm(t._repo,t,l),a(c,d)};u.userCallback=n.userCallback,u.context=n.context,n=u}const o=new $R(n,s||void 0),l=new xh(o);return MR(t._repo,t,l),()=>hm(t._repo,t,l)}function GR(t,e,n,r){return HR(t,"value",e,n,r)}G1(xn);J1(xn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KR="FIREBASE_DATABASE_EMULATOR_HOST",Ac={};let qR=!1;function QR(t,e,n,r){t.repoInfo_=new hv(`${e}:${n}`,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0),r&&(t.authTokenProvider_=r)}function YR(t,e,n,r,i){let s=r||t.options.databaseURL;s===void 0&&(t.options.projectId||Gt("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),ke("Using default host for project ",t.options.projectId),s=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=fm(s,i),l=o.repoInfo,a;typeof process<"u"&&Op&&(a=Op[KR]),a?(s=`http://${a}?ns=${l.namespace}`,o=fm(s,i),l=o.repoInfo):o.repoInfo.secure;const u=new cN(t.name,t.options,e);CR("Invalid Firebase Database URL",o),U(o.path)||Gt("Database URL must point to the root of a Firebase Database (not including a child path).");const c=JR(l,t,u,new uN(t.name,n));return new ZR(c,t)}function XR(t,e){const n=Ac[e];(!n||n[t.key]!==t)&&Gt(`Database ${e}(${t.repoInfo_}) has already been deleted.`),LR(t),delete n[t.key]}function JR(t,e,n,r){let i=Ac[e.name];i||(i={},Ac[e.name]=i);let s=i[t.toURLString()];return s&&Gt("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),s=new RR(t,qR,n,r),i[t.toURLString()]=s,s}class ZR{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(PR(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new xn(this._repo,B())),this._rootInternal}_delete(){return this._rootInternal!==null&&(XR(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&Gt("Cannot call "+e+" on a deleted database.")}}function eP(t=_y(),e){const n=zd(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const r=EC("database");r&&tP(n,...r)}return n}function tP(t,e,n,r={}){t=Xe(t),t._checkNotDeleted("useEmulator"),t._instanceStarted&&Gt("Cannot call useEmulator() after instance has already been initialized.");const i=t._repoInternal;let s;if(i.repoInfo_.nodeAdmin)r.mockUserToken&&Gt('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),s=new ko(ko.OWNER);else if(r.mockUserToken){const o=typeof r.mockUserToken=="string"?r.mockUserToken:CC(r.mockUserToken,t.app.options.projectId);s=new ko(o)}QR(i,e,n,s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nP(t){KT(ni),Hr(new Jn("database",(e,{instanceIdentifier:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return YR(r,i,s,n)},"PUBLIC").setMultipleInstances(!0)),vn(Dp,Mp,t),vn(Dp,Mp,"esm2017")}Ut.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};Ut.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};nP();var rP="firebase",iP="10.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vn(rP,iP,"app");let gs=null,Ah=null,hw=null;if(ks){const t=gy(X_);gs=HT(t),Ah=eP(t),hw=new Pt}let ve=null,Oc=!1,Dc=!1,pm=null;const sP=()=>Dc;function oP(t){try{localStorage.setItem(Z_,JSON.stringify(t))}catch{}}function lP(t){if(ve=t,!ks){ve.dispatch(gn("local"));return}ve.dispatch(gn("connecting")),Dk(gs,e=>{e?(ve.dispatch(ip({uid:e.uid,email:e.email})),aP()):(ve.dispatch(ip(null)),ve.dispatch(gn("connecting")))})}function aP(){if(Oc)return;Oc=!0;const t=cw(Ah,"weddings/"+J_);GR(t,e=>{const n=e.val();n?JSON.stringify(n)!==JSON.stringify(ve.getState().wedding)&&(Dc=!0,ve.dispatch(ry(n)),Dc=!1):dw(t,ve.getState().wedding),ve.dispatch(gn("synced"))},()=>{ve.dispatch(gn("error")),ve.dispatch(uc("Access denied — ask the admin to allow your account in the database rules."))})}function uP(t){!ks||!Oc||(ve.dispatch(gn("saving")),clearTimeout(pm),pm=setTimeout(()=>{dw(cw(Ah,"weddings/"+J_),t).then(()=>ve.dispatch(gn("synced"))).catch(()=>ve.dispatch(gn("error")))},400))}function cP(){ve.dispatch(uc("")),eT(gs,hw).catch(t=>ve.dispatch(uc(t.message)))}function dP(){gs&&Mk(gs)}const hP=t=>e=>n=>{const r=e(n);if(typeof n.type=="string"&&n.type.startsWith("wedding/")){const i=t.getState().wedding;oP(i),sP()||uP(i)}return r},fw=HE({reducer:{wedding:hC,auth:fC},middleware:t=>t().concat(hP)}),se=t=>"Rp "+(Number(t)||0).toLocaleString("id-ID");function mm(t){const e=String(t||"").match(/^(\d{4})-(\d{2})-(\d{2})$/);return e?`${e[3]}/${e[2]}/${e[1]}`:""}function fP(t){const e=String(t||"").trim().match(/^(\d{1,2})\D?(\d{1,2})\D?(\d{4})$/);if(!e)return"";const n=+e[1],r=+e[2],i=+e[3],s=`${i}-${String(r).padStart(2,"0")}-${String(n).padStart(2,"0")}`,o=new Date(s+"T00:00:00");return o.getFullYear()!==i||o.getMonth()+1!==r||o.getDate()!==n?"":s}function pP(t){if(!t)return"Set your date →";const e=new Date(t+"T00:00:00"),n=new Date;n.setHours(0,0,0,0);const r=Math.round((e-n)/864e5),i=e.toLocaleDateString("en-GB",{day:"2-digit",month:"short",year:"numeric"});return r>0?`${r} days to go · ${i}`:r===0?`🎉 Today! · ${i}`:`Married ${Math.abs(r)} days ago · ${i}`}const mP={local:"💾 Local only",connecting:"⟳ Connecting…",saving:"⟳ Saving…",synced:"☁ Synced",error:"⚠ Sync error (local saved)"};function gP({value:t,onCommit:e}){const[n,r]=X.useState(mm(t));X.useEffect(()=>{r(mm(t))},[t]);const i=s=>{const o=s.target.value;r(o);const l=fP(o);l?e(l):o.trim()===""&&e("")};return _.jsx("input",{type:"text",inputMode:"numeric",placeholder:"dd/mm/yyyy",maxLength:10,style:{width:"130px",display:"inline-block"},value:n,onChange:i})}function _P(){const t=or(),{p1:e,p2:n,wdate:r}=qe(o=>o.wedding),i=qe(o=>o.auth.status),s=o=>l=>t(sl({field:o,value:l.target.value}));return _.jsxs("header",{children:[_.jsx("h1",{children:"💍 Wedding Planning Dashboard"}),_.jsxs("div",{className:"names",children:[_.jsx("input",{placeholder:"Partner 1",value:e,onChange:s("p1")}),_.jsx("span",{children:"&"}),_.jsx("input",{placeholder:"Partner 2",value:n,onChange:s("p2")})]}),_.jsxs("div",{className:"date-row",children:[_.jsxs("label",{children:["Wedding date:"," ",_.jsx(gP,{value:r,onCommit:o=>t(sl({field:"wdate",value:o}))})]}),_.jsx("span",{className:"countdown",children:pP(r)}),_.jsx("span",{className:"chip",title:"Data sync status",children:mP[i]||i})]})]})}function yP({tab:t,setTab:e}){return _.jsx("nav",{children:ey.map(([n,r])=>_.jsx("button",{className:t===n?"active":"",onClick:()=>e(n),children:r},n))})}function vP(){const t=qe(e=>e.auth.error);return _.jsx("div",{className:"gate",children:_.jsxs("div",{className:"box",children:[_.jsx("h2",{children:"💍 Sign in"}),_.jsx("p",{className:"sub",children:"Log in to your shared wedding planner."}),_.jsx("button",{className:"btn",style:{width:"100%"},onClick:cP,children:"Continue with Google"}),_.jsx("div",{className:"err",children:t}),_.jsx("p",{className:"hint",children:"Sign in with your Google account. First time? Just sign in once, then the admin adds your account to the database rules so you can access the data."})]})})}function Yr({items:t}){return _.jsx("div",{className:"cards",children:t.map(([e,n],r)=>_.jsxs("div",{className:"card",children:[_.jsx("div",{className:"label",children:e}),_.jsx("div",{className:"val",children:n})]},r))})}function Oh({listKey:t,placeholder:e="Add an item...",showAdd:n=!0}){const r=or(),i=qe(a=>a.wedding[t]),[s,o]=X.useState(""),l=()=>{const a=s.trim();a&&(r(uC({list:t,text:a})),o(""))};return _.jsxs("div",{className:"panel",children:[_.jsx("ul",{className:"check",children:i.map((a,u)=>_.jsxs("li",{className:a.d?"done":"",children:[_.jsx("input",{type:"checkbox",checked:a.d,onChange:c=>r(aC({list:t,index:u,done:c.target.checked}))}),_.jsxs("div",{className:"body",children:[_.jsx("div",{className:"ttl",children:a.t}),a.n?_.jsx("div",{className:"note",children:a.n}):null]}),_.jsx("button",{className:"del",title:"Delete",onClick:()=>r(cC({list:t,index:u})),children:"✕"})]},u))}),n&&_.jsxs("div",{className:"toolbar",children:[_.jsx("input",{style:{maxWidth:320},placeholder:e,value:s,onChange:a=>o(a.target.value),onKeyDown:a=>{a.key==="Enter"&&l()}}),_.jsx("button",{className:"btn sm",onClick:l,children:"+ Add"})]})]})}function To(t){t=t||[];const e=i=>(Number(i[2])||0)*(Number(i[1])||1),n=t.reduce((i,s)=>i+e(s),0),r=t.reduce((i,s)=>i+(s[4]==="yes"?e(s):0),0);return{items:t.length,total:n,paid:r,outstanding:n-r}}function pw(t){const e=To(t.ceremony),n=To(t.seserahan),r=To(t.maharkawin),i=e.total+n.total+r.total,s=e.paid+n.paid+r.paid,o=Number(t.totalBudget)||0;return{sections:[["Wedding Ceremony",e],["Seserahan",n],["Mahar & Mas Kawin",r]],allocated:i,paid:s,target:o,items:e.items+n.items+r.items}}const gm=(t,e)=>(t||[]).reduce((n,r)=>n+(Number(r[e])||0),0);function mw(t){t=(t||[]).filter(i=>String(i[0]||"").trim());const e=i=>Number(i[6])||0,n=i=>t.filter(s=>s[4]===i).length,r=i=>t.filter(s=>s[1]===i).reduce((s,o)=>s+e(o),0);return{invites:t.length,pax:t.reduce((i,s)=>i+e(s),0),confirmed:n("Confirmed"),pending:n("Pending"),declined:n("Declined"),noReply:t.filter(i=>!String(i[4]||"").trim()).length,bride:r("Bride"),groom:r("Groom"),both:r("Both")}}function wP(){const t=qe(s=>s.wedding),e=t.timeline.filter(s=>s.d).length,n=pw(t),r=mw(t.guests),i=n.target-n.allocated;return _.jsxs("section",{children:[_.jsx("h2",{children:"Overview & Timeline"}),_.jsx("p",{className:"sub",children:"Your countdown and planning milestones. Tick them off as you go."}),_.jsx(Yr,{items:[["Milestones done",`${e} / ${t.timeline.length}`],["Budget",se(n.target)],["Remaining",se(i)],["Guests (pax)",String(r.pax)]]}),_.jsx(Oh,{listKey:"timeline",showAdd:!1})]})}function SP(){const t=or(),e=qe(o=>o.wedding),n=pw(e),r=n.target-n.allocated,i=r<0,s=i?"var(--warn)":"var(--ok)";return _.jsxs("section",{children:[_.jsx("h2",{children:"Budget (IDR)"}),_.jsxs("p",{className:"sub",children:["Set your total budget — every cost you add on the Wedding Ceremony, Seserahan and Mahar tabs is",_.jsx("strong",{children:" deducted"})," from it, and what's left updates live."]}),_.jsxs("label",{className:"field narrow",children:["Total budget you're working with (Rp)",_.jsx("input",{type:"number",placeholder:"e.g. 150000000",value:e.totalBudget,onChange:o=>t(sl({field:"totalBudget",value:o.target.value}))})]}),_.jsx(Yr,{items:[["Budget set",se(n.target)],["Deducted (allocated)",se(n.allocated)],["Paid so far",se(n.paid)]]}),_.jsx("div",{className:"panel",children:_.jsx("table",{children:_.jsxs("tbody",{children:[_.jsxs("tr",{style:{fontWeight:600},children:[_.jsx("td",{children:"Budget set"}),_.jsx("td",{className:"num",children:se(n.target)})]}),n.sections.map(([o,l])=>_.jsxs("tr",{children:[_.jsxs("td",{style:{color:"var(--muted)"},children:["− ",o]}),_.jsx("td",{className:"num",style:{color:"var(--muted)"},children:se(l.total)})]},o)),_.jsxs("tr",{style:{fontWeight:700,borderTop:"2px solid var(--line)"},children:[_.jsxs("td",{children:["= Remaining",i?" (over budget!)":""]}),_.jsx("td",{className:"num",style:{color:s},children:se(r)})]})]})})}),_.jsx("div",{className:"panel",style:{marginTop:16},children:_.jsxs("table",{children:[_.jsx("thead",{children:_.jsxs("tr",{children:[_.jsx("th",{children:"Section"}),_.jsx("th",{className:"num",children:"Items"}),_.jsx("th",{className:"num",children:"Allocated"}),_.jsx("th",{className:"num",children:"Paid"}),_.jsx("th",{className:"num",children:"Outstanding"})]})}),_.jsxs("tbody",{children:[n.sections.map(([o,l])=>_.jsxs("tr",{children:[_.jsx("td",{children:o}),_.jsx("td",{className:"num",children:l.items}),_.jsx("td",{className:"num",children:se(l.total)}),_.jsx("td",{className:"num",children:se(l.paid)}),_.jsx("td",{className:"num",children:se(l.outstanding)})]},o)),_.jsxs("tr",{style:{fontWeight:600},children:[_.jsx("td",{children:"Total"}),_.jsx("td",{className:"num",children:n.items}),_.jsx("td",{className:"num",children:se(n.allocated)}),_.jsx("td",{className:"num",children:se(n.paid)}),_.jsx("td",{className:"num",children:se(n.allocated-n.paid)})]})]})]})})]})}function EP(t){let e=(t||"").trim();if(!e){alert("Add a link first.");return}/^https?:\/\//i.test(e)||(e="https://"+e),window.open(e,"_blank","noopener")}function da({tableKey:t,cols:e,addLabel:n="+ Add row",itemTable:r=!1}){const i=or(),s=qe(a=>a.wedding[t]),o=(a,u,c)=>i(iC({table:t,row:a,col:u,value:c})),l=()=>{const a=e.map(u=>u.type==="select"?u.opts[0]:"");i(sC({table:t,blank:a}))};return _.jsxs("div",{className:"panel",children:[_.jsxs("table",{className:r?"item-table":"",children:[_.jsx("thead",{children:_.jsxs("tr",{children:[e.map((a,u)=>_.jsx("th",{className:a.type==="num"?"num":"",children:a.h},u)),_.jsx("th",{})]})}),_.jsx("tbody",{children:s.map((a,u)=>_.jsxs("tr",{children:[e.map((c,d)=>_.jsx("td",{children:c.type==="select"?_.jsx("select",{value:a[d]??c.opts[0],onChange:h=>o(u,d,h.target.value),children:c.opts.map(h=>_.jsx("option",{value:h,children:h},h))}):c.type==="link"?_.jsxs("div",{className:"linkcell",children:[_.jsx("input",{type:"url",placeholder:"https://...",value:a[d]??"",onChange:h=>o(u,d,h.target.value)}),_.jsx("button",{className:"btn sm ghost",title:"Open link",onClick:()=>EP(a[d]),children:"↗"})]}):_.jsx("input",{type:c.type==="num"?"number":"text",className:c.type==="num"?"num":"",value:a[d]??"",onChange:h=>o(u,d,h.target.value)})},d)),_.jsx("td",{children:_.jsx("button",{className:"del",title:"Delete",onClick:()=>i(oC({table:t,row:u})),children:"✕"})})]},u))})]}),_.jsx("div",{className:"toolbar",children:_.jsx("button",{className:"btn sm",onClick:l,children:n})})]})}function Dh({title:t,sub:e,tableKey:n,paidLabel:r,children:i}){const s=qe(l=>l.wedding[n]),o=To(s);return _.jsxs("section",{children:[_.jsx("h2",{children:t}),_.jsx("p",{className:"sub",children:e}),i,_.jsx(Yr,{items:[["Items",String(o.items)],["Total cost",se(o.total)],[r,se(o.paid)],["Remaining",se(o.outstanding)]]}),_.jsx(da,{tableKey:n,cols:Xl[n],addLabel:"+ Add item",itemTable:!0})]})}function CP(){return _.jsx(Dh,{title:"Wedding Ceremony",sub:"All ceremony & reception costs — venue, catering, decor, MUA, attire, documentation, souvenir, invitations, MC/WO, KUA, mahar & rings.",tableKey:"ceremony",paidLabel:"Paid"})}function IP(){return _.jsx(Dh,{title:"Seserahan",sub:"Hantaran / seserahan gift items for the bride.",tableKey:"seserahan",paidLabel:"Bought"})}function kP(){const t=or(),e=qe(n=>n.wedding.mahar);return _.jsx(Dh,{title:"Mahar & Mas Kawin",sub:"The dowry and its components — ring, gold/replica, cash, ring box & keepsake materials.",tableKey:"maharkawin",paidLabel:"Bought",children:_.jsx("div",{className:"panel",style:{marginBottom:16},children:_.jsxs("label",{className:"field",children:["Agreed mahar (summary)",_.jsx("input",{placeholder:"e.g. 10 grams gold + cash Rp 500.000 + prayer set",value:e,onChange:n=>t(sl({field:"mahar",value:n.target.value}))})]})})})}const TP="modulepreload",NP=function(t,e){return new URL(t,e).href},_m={},RP=function(e,n,r){let i=Promise.resolve();if(n&&n.length>0){const o=document.getElementsByTagName("link"),l=document.querySelector("meta[property=csp-nonce]"),a=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));i=Promise.allSettled(n.map(u=>{if(u=NP(u,r),u in _m)return;_m[u]=!0;const c=u.endsWith(".css"),d=c?'[rel="stylesheet"]':"";if(!!r)for(let y=o.length-1;y>=0;y--){const w=o[y];if(w.href===u&&(!c||w.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${u}"]${d}`))return;const m=document.createElement("link");if(m.rel=c?"stylesheet":TP,c||(m.as="script"),m.crossOrigin="",m.href=u,a&&m.setAttribute("nonce",a),document.head.appendChild(m),c)return new Promise((y,w)=>{m.addEventListener("load",y),m.addEventListener("error",()=>w(new Error(`Unable to preload CSS for ${u}`)))})}))}function s(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return i.then(o=>{for(const l of o||[])l.status==="rejected"&&s(l.reason);return e().catch(s)})};function PP(t){return t=String(t).toLowerCase().trim(),/\+?1\s*name|plus.?one\s*name/.test(t)?"plusName":/guest\s*name|^name$/.test(t)?"name":/^side$/.test(t)?"side":/bringing|\+\s*1|plus.?one/.test(t)?"plus":/rsvp/.test(t)?"rsvp":/note/.test(t)?"notes":/attending|pax|headcount|total/.test(t)?"pax":null}const ym=(t,e)=>{const n=String(t||"").trim();return e.find(r=>r.toLowerCase()===n.toLowerCase())??""};function xP(t){const e=t.findIndex(i=>i.some(s=>/guest\s*name|^name$/i.test(String(s||""))));if(e<0)throw new Error('No "Guest Name" header found in that sheet.');const n={};if(t[e].forEach((i,s)=>{const o=PP(i);o&&!(o in n)&&(n[o]=s)}),!("name"in n))throw new Error("Could not find the guest-name column.");const r=[];for(let i=e+1;i<t.length;i++){const s=t[i]||[],o=String(s[n.name]??"").trim();if(!o)continue;const l=String(s[n.plus]??"").trim().toLowerCase(),a=s[n.pax];r.push([o,ym(s[n.side],["Groom","Bride","Both"]),l.startsWith("y")?"Yes":"No",String(s[n.plusName]??"").trim(),ym(s[n.rsvp],["Pending","Confirmed","Declined"]),String(s[n.notes]??"").trim(),a===""||a==null?"":String(Number(a)||0)])}return r}function AP(){const t=or(),e=qe(l=>l.wedding.guests),n=X.useRef(null),[r,i]=X.useState(!1),s=mw(e),o=async l=>{const a=l.target.files[0];if(l.target.value="",!!a){i(!0);try{const u=await RP(()=>import("./xlsx-Cznzrv2E.js"),[],import.meta.url),c=u.read(await a.arrayBuffer()),d=c.SheetNames.find(w=>/guest/i.test(w))||c.SheetNames[0],h=u.utils.sheet_to_json(c.Sheets[d],{header:1,defval:""}),m=xP(h);if(!m.length){alert("No guest rows found in that file.");return}const y=m.reduce((w,T)=>w+(Number(T[6])||0),0);confirm(`Import ${m.length} guests (${y} pax) from "${d}"?

This REPLACES the current guest list.`)&&(t(lC({table:"guests",rows:m})),alert(`Imported ${m.length} guests.`))}catch(u){alert("Import failed: "+((u==null?void 0:u.message)||u))}finally{i(!1)}}};return _.jsxs("section",{children:[_.jsx("h2",{children:"Guest List & RSVP"}),_.jsxs("p",{className:"sub",children:["Import from Excel, then edit inline. ",_.jsx("strong",{children:"Pax"})," is the real headcount for that invitation (a household can be more than 2) — the counters below sum it."]}),_.jsx(Yr,{items:[["Invites sent",String(s.invites)],["Total pax",String(s.pax)],["Confirmed",String(s.confirmed)],["Pending",String(s.pending)],["Declined",String(s.declined)],["No reply",String(s.noReply)]]}),_.jsx(Yr,{items:[["Attending · Bride",String(s.bride)],["Attending · Groom",String(s.groom)],["Attending · Both",String(s.both)]]}),_.jsxs("div",{className:"toolbar",children:[_.jsx("button",{className:"btn",disabled:r,onClick:()=>n.current.click(),children:r?"⟳ Importing…":"⬆ Import from Excel (.xlsx)"}),_.jsx("input",{ref:n,type:"file",accept:".xlsx,.xls,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",style:{display:"none"},onChange:o})]}),_.jsx(da,{tableKey:"guests",cols:Xl.guests,addLabel:"+ Add guest"})]})}function OP(){const t=qe(i=>i.wedding.vendors),e=gm(t,3),n=gm(t,4),r=t.filter(i=>i[5]==="yes").length;return _.jsxs("section",{children:[_.jsx("h2",{children:"Vendors"}),_.jsx("p",{className:"sub",children:"Quotes, deposits (DP), balances, and booking status."}),_.jsx(Yr,{items:[["Vendors",String(t.length)],["Booked",String(r)],["Total quotes",se(e)],["DP paid",se(n)],["Balance",se(e-n)]]}),_.jsx(da,{tableKey:"vendors",cols:Xl.vendors,addLabel:"+ Add vendor"})]})}function DP(){return _.jsxs("section",{children:[_.jsx("h2",{children:"Adat & Rituals"}),_.jsx("p",{className:"sub",children:"Customary stages vary by ethnicity (Jawa, Sunda, Batak, Minang, Bali, etc.). Remove what doesn't apply and add your own."}),_.jsx(Oh,{listKey:"adat",placeholder:"Add a ceremony/stage..."})]})}function MP(){return _.jsxs("section",{children:[_.jsx("h2",{children:"Legal & Administrasi"}),_.jsx("p",{className:"sub",children:"Marriage paperwork in Indonesia. Requirements and lead times vary by region & faith — treat as a guide, confirm with your KUA / Dukcapil."}),_.jsx(Oh,{listKey:"legal",placeholder:"Add a document/step..."})]})}function LP(){return _.jsxs("section",{children:[_.jsx("h2",{children:"Day-of Rundown"}),_.jsx("p",{className:"sub",children:"Minute-by-minute schedule for the big day."}),_.jsx(da,{tableKey:"rundown",cols:Xl.rundown,addLabel:"+ Add slot"})]})}function bP(){const t=or(),e=qe(o=>o.wedding),n=X.useRef(null),r=()=>{const o=new Blob([JSON.stringify(e,null,2)],{type:"application/json"}),l=document.createElement("a");l.href=URL.createObjectURL(o),l.download="wedding-data.json",l.click(),URL.revokeObjectURL(l.href)},i=o=>{const l=o.target.files[0];if(!l)return;const a=new FileReader;a.onload=()=>{try{t(ry(JSON.parse(a.result))),alert("Data imported.")}catch{alert("Could not read that file.")}},a.readAsText(l),o.target.value=""},s=()=>{confirm("Erase ALL data and start fresh? This can't be undone.")&&t(dC())};return _.jsxs("section",{children:[_.jsx("h2",{children:"Backup & Data"}),_.jsx("p",{className:"sub",children:"Data is cached in your browser and synced to Firebase. Export regularly for a hard backup."}),_.jsxs("div",{className:"panel",children:[_.jsxs("div",{className:"toolbar",children:[_.jsx("button",{className:"btn",onClick:r,children:"⬇ Export (JSON)"}),_.jsx("button",{className:"btn ghost",onClick:()=>n.current.click(),children:"⬆ Import (JSON)"}),_.jsx("input",{ref:n,type:"file",accept:"application/json",style:{display:"none"},onChange:i}),_.jsx("button",{className:"btn ghost",onClick:dP,children:"🔓 Sign out"}),_.jsx("button",{className:"btn ghost right",style:{color:"var(--warn)",borderColor:"var(--warn)"},onClick:s,children:"🗑 Reset all"})]}),_.jsxs("p",{className:"sub",style:{margin:"4px 0 0"},children:["Export writes a ",_.jsx("code",{children:"wedding-data.json"})," file. Import replaces current data."]})]})]})}const FP={overview:wP,budget:SP,ceremony:CP,seserahan:IP,mahar:kP,guests:AP,vendors:OP,adat:DP,legal:MP,rundown:LP,data:bP};function UP(){const[t,e]=X.useState(ey[0][0]),n=qe(i=>i.auth.user),r=FP[t];return _.jsxs(_.Fragment,{children:[ks&&!n&&_.jsx(vP,{}),_.jsx(_P,{}),_.jsx(yP,{tab:t,setTab:e}),_.jsx("main",{children:_.jsx(r,{})}),_.jsx("footer",{className:"foot",children:"This dashboard is a general planning guide. Adat customs and legal/administrative requirements differ by ethnicity, faith, and region — always verify current rules with your local KUA, Dukcapil / Catatan Sipil, and family elders."})]})}lP(fw);A_(document.getElementById("root")).render(_.jsx(Dw.StrictMode,{children:_.jsx(uE,{store:fw,children:_.jsx(UP,{})})}));
