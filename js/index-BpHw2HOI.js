(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();function px(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var J0={exports:{}},Dc={},Q0={exports:{}},Je={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ba=Symbol.for("react.element"),mx=Symbol.for("react.portal"),gx=Symbol.for("react.fragment"),vx=Symbol.for("react.strict_mode"),_x=Symbol.for("react.profiler"),xx=Symbol.for("react.provider"),yx=Symbol.for("react.context"),Sx=Symbol.for("react.forward_ref"),Mx=Symbol.for("react.suspense"),Ex=Symbol.for("react.memo"),wx=Symbol.for("react.lazy"),Rp=Symbol.iterator;function Tx(t){return t===null||typeof t!="object"?null:(t=Rp&&t[Rp]||t["@@iterator"],typeof t=="function"?t:null)}var eg={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},tg=Object.assign,ng={};function ho(t,e,n){this.props=t,this.context=e,this.refs=ng,this.updater=n||eg}ho.prototype.isReactComponent={};ho.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};ho.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function ig(){}ig.prototype=ho.prototype;function sd(t,e,n){this.props=t,this.context=e,this.refs=ng,this.updater=n||eg}var od=sd.prototype=new ig;od.constructor=sd;tg(od,ho.prototype);od.isPureReactComponent=!0;var bp=Array.isArray,rg=Object.prototype.hasOwnProperty,ad={current:null},sg={key:!0,ref:!0,__self:!0,__source:!0};function og(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)rg.call(e,i)&&!sg.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ba,type:t,key:s,ref:o,props:r,_owner:ad.current}}function Ax(t,e){return{$$typeof:ba,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function ld(t){return typeof t=="object"&&t!==null&&t.$$typeof===ba}function Cx(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Pp=/\/+/g;function ru(t,e){return typeof t=="object"&&t!==null&&t.key!=null?Cx(""+t.key):e.toString(36)}function Nl(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ba:case mx:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+ru(o,0):i,bp(r)?(n="",t!=null&&(n=t.replace(Pp,"$&/")+"/"),Nl(r,e,n,"",function(c){return c})):r!=null&&(ld(r)&&(r=Ax(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Pp,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",bp(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+ru(s,a);o+=Nl(s,e,n,l,r)}else if(l=Tx(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+ru(s,a++),o+=Nl(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Ba(t,e,n){if(t==null)return t;var i=[],r=0;return Nl(t,i,"","",function(s){return e.call(n,s,r++)}),i}function Rx(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var fn={current:null},Il={transition:null},bx={ReactCurrentDispatcher:fn,ReactCurrentBatchConfig:Il,ReactCurrentOwner:ad};function ag(){throw Error("act(...) is not supported in production builds of React.")}Je.Children={map:Ba,forEach:function(t,e,n){Ba(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Ba(t,function(){e++}),e},toArray:function(t){return Ba(t,function(e){return e})||[]},only:function(t){if(!ld(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Je.Component=ho;Je.Fragment=gx;Je.Profiler=_x;Je.PureComponent=sd;Je.StrictMode=vx;Je.Suspense=Mx;Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bx;Je.act=ag;Je.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=tg({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=ad.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)rg.call(e,l)&&!sg.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ba,type:t.type,key:r,ref:s,props:i,_owner:o}};Je.createContext=function(t){return t={$$typeof:yx,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:xx,_context:t},t.Consumer=t};Je.createElement=og;Je.createFactory=function(t){var e=og.bind(null,t);return e.type=t,e};Je.createRef=function(){return{current:null}};Je.forwardRef=function(t){return{$$typeof:Sx,render:t}};Je.isValidElement=ld;Je.lazy=function(t){return{$$typeof:wx,_payload:{_status:-1,_result:t},_init:Rx}};Je.memo=function(t,e){return{$$typeof:Ex,type:t,compare:e===void 0?null:e}};Je.startTransition=function(t){var e=Il.transition;Il.transition={};try{t()}finally{Il.transition=e}};Je.unstable_act=ag;Je.useCallback=function(t,e){return fn.current.useCallback(t,e)};Je.useContext=function(t){return fn.current.useContext(t)};Je.useDebugValue=function(){};Je.useDeferredValue=function(t){return fn.current.useDeferredValue(t)};Je.useEffect=function(t,e){return fn.current.useEffect(t,e)};Je.useId=function(){return fn.current.useId()};Je.useImperativeHandle=function(t,e,n){return fn.current.useImperativeHandle(t,e,n)};Je.useInsertionEffect=function(t,e){return fn.current.useInsertionEffect(t,e)};Je.useLayoutEffect=function(t,e){return fn.current.useLayoutEffect(t,e)};Je.useMemo=function(t,e){return fn.current.useMemo(t,e)};Je.useReducer=function(t,e,n){return fn.current.useReducer(t,e,n)};Je.useRef=function(t){return fn.current.useRef(t)};Je.useState=function(t){return fn.current.useState(t)};Je.useSyncExternalStore=function(t,e,n){return fn.current.useSyncExternalStore(t,e,n)};Je.useTransition=function(){return fn.current.useTransition()};Je.version="18.3.1";Q0.exports=Je;var Ge=Q0.exports;const Lp=px(Ge);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Px=Ge,Lx=Symbol.for("react.element"),Nx=Symbol.for("react.fragment"),Ix=Object.prototype.hasOwnProperty,Dx=Px.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ux={key:!0,ref:!0,__self:!0,__source:!0};function lg(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)Ix.call(e,i)&&!Ux.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:Lx,type:t,key:s,ref:o,props:r,_owner:Dx.current}}Dc.Fragment=Nx;Dc.jsx=lg;Dc.jsxs=lg;J0.exports=Dc;var A=J0.exports,cg={exports:{}},Nn={},ug={exports:{}},fg={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(I,q){var J=I.length;I.push(q);e:for(;0<J;){var le=J-1>>>1,Ce=I[le];if(0<r(Ce,q))I[le]=q,I[J]=Ce,J=le;else break e}}function n(I){return I.length===0?null:I[0]}function i(I){if(I.length===0)return null;var q=I[0],J=I.pop();if(J!==q){I[0]=J;e:for(var le=0,Ce=I.length,je=Ce>>>1;le<je;){var K=2*(le+1)-1,re=I[K],_e=K+1,de=I[_e];if(0>r(re,J))_e<Ce&&0>r(de,re)?(I[le]=de,I[_e]=J,le=_e):(I[le]=re,I[K]=J,le=K);else if(_e<Ce&&0>r(de,J))I[le]=de,I[_e]=J,le=_e;else break e}}return q}function r(I,q){var J=I.sortIndex-q.sortIndex;return J!==0?J:I.id-q.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],u=1,f=null,h=3,p=!1,g=!1,S=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(I){for(var q=n(c);q!==null;){if(q.callback===null)i(c);else if(q.startTime<=I)i(c),q.sortIndex=q.expirationTime,e(l,q);else break;q=n(c)}}function y(I){if(S=!1,_(I),!g)if(n(l)!==null)g=!0,H(b);else{var q=n(c);q!==null&&ee(y,q.startTime-I)}}function b(I,q){g=!1,S&&(S=!1,d(L),L=-1),p=!0;var J=h;try{for(_(q),f=n(l);f!==null&&(!(f.expirationTime>q)||I&&!E());){var le=f.callback;if(typeof le=="function"){f.callback=null,h=f.priorityLevel;var Ce=le(f.expirationTime<=q);q=t.unstable_now(),typeof Ce=="function"?f.callback=Ce:f===n(l)&&i(l),_(q)}else i(l);f=n(l)}if(f!==null)var je=!0;else{var K=n(c);K!==null&&ee(y,K.startTime-q),je=!1}return je}finally{f=null,h=J,p=!1}}var C=!1,w=null,L=-1,G=5,x=-1;function E(){return!(t.unstable_now()-x<G)}function z(){if(w!==null){var I=t.unstable_now();x=I;var q=!0;try{q=w(!0,I)}finally{q?B():(C=!1,w=null)}}else C=!1}var B;if(typeof v=="function")B=function(){v(z)};else if(typeof MessageChannel<"u"){var j=new MessageChannel,Q=j.port2;j.port1.onmessage=z,B=function(){Q.postMessage(null)}}else B=function(){m(z,0)};function H(I){w=I,C||(C=!0,B())}function ee(I,q){L=m(function(){I(t.unstable_now())},q)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(I){I.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,H(b))},t.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):G=0<I?Math.floor(1e3/I):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(I){switch(h){case 1:case 2:case 3:var q=3;break;default:q=h}var J=h;h=q;try{return I()}finally{h=J}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(I,q){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var J=h;h=I;try{return q()}finally{h=J}},t.unstable_scheduleCallback=function(I,q,J){var le=t.unstable_now();switch(typeof J=="object"&&J!==null?(J=J.delay,J=typeof J=="number"&&0<J?le+J:le):J=le,I){case 1:var Ce=-1;break;case 2:Ce=250;break;case 5:Ce=1073741823;break;case 4:Ce=1e4;break;default:Ce=5e3}return Ce=J+Ce,I={id:u++,callback:q,priorityLevel:I,startTime:J,expirationTime:Ce,sortIndex:-1},J>le?(I.sortIndex=J,e(c,I),n(l)===null&&I===n(c)&&(S?(d(L),L=-1):S=!0,ee(y,J-le))):(I.sortIndex=Ce,e(l,I),g||p||(g=!0,H(b))),I},t.unstable_shouldYield=E,t.unstable_wrapCallback=function(I){var q=h;return function(){var J=h;h=q;try{return I.apply(this,arguments)}finally{h=J}}}})(fg);ug.exports=fg;var Fx=ug.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kx=Ge,Ln=Fx;function ae(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hg=new Set,oa={};function ts(t,e){Qs(t,e),Qs(t+"Capture",e)}function Qs(t,e){for(oa[t]=e,t=0;t<e.length;t++)hg.add(e[t])}var Fi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Sf=Object.prototype.hasOwnProperty,Ox=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Np={},Ip={};function zx(t){return Sf.call(Ip,t)?!0:Sf.call(Np,t)?!1:Ox.test(t)?Ip[t]=!0:(Np[t]=!0,!1)}function Bx(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Vx(t,e,n,i){if(e===null||typeof e>"u"||Bx(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function hn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Yt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Yt[t]=new hn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Yt[e]=new hn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Yt[t]=new hn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Yt[t]=new hn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Yt[t]=new hn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Yt[t]=new hn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Yt[t]=new hn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Yt[t]=new hn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Yt[t]=new hn(t,5,!1,t.toLowerCase(),null,!1,!1)});var cd=/[\-:]([a-z])/g;function ud(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(cd,ud);Yt[e]=new hn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(cd,ud);Yt[e]=new hn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(cd,ud);Yt[e]=new hn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Yt[t]=new hn(t,1,!1,t.toLowerCase(),null,!1,!1)});Yt.xlinkHref=new hn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Yt[t]=new hn(t,1,!1,t.toLowerCase(),null,!0,!0)});function fd(t,e,n,i){var r=Yt.hasOwnProperty(e)?Yt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(Vx(e,n,r,i)&&(n=null),i||r===null?zx(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var Hi=kx.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Va=Symbol.for("react.element"),Ts=Symbol.for("react.portal"),As=Symbol.for("react.fragment"),hd=Symbol.for("react.strict_mode"),Mf=Symbol.for("react.profiler"),dg=Symbol.for("react.provider"),pg=Symbol.for("react.context"),dd=Symbol.for("react.forward_ref"),Ef=Symbol.for("react.suspense"),wf=Symbol.for("react.suspense_list"),pd=Symbol.for("react.memo"),Zi=Symbol.for("react.lazy"),mg=Symbol.for("react.offscreen"),Dp=Symbol.iterator;function xo(t){return t===null||typeof t!="object"?null:(t=Dp&&t[Dp]||t["@@iterator"],typeof t=="function"?t:null)}var At=Object.assign,su;function Bo(t){if(su===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);su=e&&e[1]||""}return`
`+su+t}var ou=!1;function au(t,e){if(!t||ou)return"";ou=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{ou=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Bo(t):""}function Hx(t){switch(t.tag){case 5:return Bo(t.type);case 16:return Bo("Lazy");case 13:return Bo("Suspense");case 19:return Bo("SuspenseList");case 0:case 2:case 15:return t=au(t.type,!1),t;case 11:return t=au(t.type.render,!1),t;case 1:return t=au(t.type,!0),t;default:return""}}function Tf(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case As:return"Fragment";case Ts:return"Portal";case Mf:return"Profiler";case hd:return"StrictMode";case Ef:return"Suspense";case wf:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case pg:return(t.displayName||"Context")+".Consumer";case dg:return(t._context.displayName||"Context")+".Provider";case dd:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case pd:return e=t.displayName||null,e!==null?e:Tf(t.type)||"Memo";case Zi:e=t._payload,t=t._init;try{return Tf(t(e))}catch{}}return null}function Gx(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Tf(e);case 8:return e===hd?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function pr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function gg(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function Wx(t){var e=gg(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ha(t){t._valueTracker||(t._valueTracker=Wx(t))}function vg(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=gg(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Jl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Af(t,e){var n=e.checked;return At({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Up(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=pr(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function _g(t,e){e=e.checked,e!=null&&fd(t,"checked",e,!1)}function Cf(t,e){_g(t,e);var n=pr(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Rf(t,e.type,n):e.hasOwnProperty("defaultValue")&&Rf(t,e.type,pr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function Fp(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Rf(t,e,n){(e!=="number"||Jl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Vo=Array.isArray;function Vs(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+pr(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function bf(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ae(91));return At({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function kp(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(ae(92));if(Vo(n)){if(1<n.length)throw Error(ae(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:pr(n)}}function xg(t,e){var n=pr(e.value),i=pr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function Op(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function yg(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Pf(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?yg(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Ga,Sg=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Ga=Ga||document.createElement("div"),Ga.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Ga.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function aa(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Xo={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},jx=["Webkit","ms","Moz","O"];Object.keys(Xo).forEach(function(t){jx.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Xo[e]=Xo[t]})});function Mg(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Xo.hasOwnProperty(t)&&Xo[t]?(""+e).trim():e+"px"}function Eg(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=Mg(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var Xx=At({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Lf(t,e){if(e){if(Xx[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ae(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ae(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ae(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ae(62))}}function Nf(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var If=null;function md(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Df=null,Hs=null,Gs=null;function zp(t){if(t=Na(t)){if(typeof Df!="function")throw Error(ae(280));var e=t.stateNode;e&&(e=zc(e),Df(t.stateNode,t.type,e))}}function wg(t){Hs?Gs?Gs.push(t):Gs=[t]:Hs=t}function Tg(){if(Hs){var t=Hs,e=Gs;if(Gs=Hs=null,zp(t),e)for(t=0;t<e.length;t++)zp(e[t])}}function Ag(t,e){return t(e)}function Cg(){}var lu=!1;function Rg(t,e,n){if(lu)return t(e,n);lu=!0;try{return Ag(t,e,n)}finally{lu=!1,(Hs!==null||Gs!==null)&&(Cg(),Tg())}}function la(t,e){var n=t.stateNode;if(n===null)return null;var i=zc(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(ae(231,e,typeof n));return n}var Uf=!1;if(Fi)try{var yo={};Object.defineProperty(yo,"passive",{get:function(){Uf=!0}}),window.addEventListener("test",yo,yo),window.removeEventListener("test",yo,yo)}catch{Uf=!1}function Kx(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(u){this.onError(u)}}var Ko=!1,Ql=null,ec=!1,Ff=null,qx={onError:function(t){Ko=!0,Ql=t}};function Yx(t,e,n,i,r,s,o,a,l){Ko=!1,Ql=null,Kx.apply(qx,arguments)}function $x(t,e,n,i,r,s,o,a,l){if(Yx.apply(this,arguments),Ko){if(Ko){var c=Ql;Ko=!1,Ql=null}else throw Error(ae(198));ec||(ec=!0,Ff=c)}}function ns(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function bg(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bp(t){if(ns(t)!==t)throw Error(ae(188))}function Zx(t){var e=t.alternate;if(!e){if(e=ns(t),e===null)throw Error(ae(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return Bp(r),t;if(s===i)return Bp(r),e;s=s.sibling}throw Error(ae(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(ae(189))}}if(n.alternate!==i)throw Error(ae(190))}if(n.tag!==3)throw Error(ae(188));return n.stateNode.current===n?t:e}function Pg(t){return t=Zx(t),t!==null?Lg(t):null}function Lg(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Lg(t);if(e!==null)return e;t=t.sibling}return null}var Ng=Ln.unstable_scheduleCallback,Vp=Ln.unstable_cancelCallback,Jx=Ln.unstable_shouldYield,Qx=Ln.unstable_requestPaint,Lt=Ln.unstable_now,ey=Ln.unstable_getCurrentPriorityLevel,gd=Ln.unstable_ImmediatePriority,Ig=Ln.unstable_UserBlockingPriority,tc=Ln.unstable_NormalPriority,ty=Ln.unstable_LowPriority,Dg=Ln.unstable_IdlePriority,Uc=null,gi=null;function ny(t){if(gi&&typeof gi.onCommitFiberRoot=="function")try{gi.onCommitFiberRoot(Uc,t,void 0,(t.current.flags&128)===128)}catch{}}var oi=Math.clz32?Math.clz32:sy,iy=Math.log,ry=Math.LN2;function sy(t){return t>>>=0,t===0?32:31-(iy(t)/ry|0)|0}var Wa=64,ja=4194304;function Ho(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function nc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=Ho(a):(s&=o,s!==0&&(i=Ho(s)))}else o=n&~r,o!==0?i=Ho(o):s!==0&&(i=Ho(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-oi(e),r=1<<n,i|=t[n],e&=~r;return i}function oy(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ay(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-oi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=oy(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function kf(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ug(){var t=Wa;return Wa<<=1,!(Wa&4194240)&&(Wa=64),t}function cu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Pa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-oi(e),t[e]=n}function ly(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-oi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function vd(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-oi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ut=0;function Fg(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var kg,_d,Og,zg,Bg,Of=!1,Xa=[],rr=null,sr=null,or=null,ca=new Map,ua=new Map,Qi=[],cy="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hp(t,e){switch(t){case"focusin":case"focusout":rr=null;break;case"dragenter":case"dragleave":sr=null;break;case"mouseover":case"mouseout":or=null;break;case"pointerover":case"pointerout":ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":ua.delete(e.pointerId)}}function So(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=Na(e),e!==null&&_d(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function uy(t,e,n,i,r){switch(e){case"focusin":return rr=So(rr,t,e,n,i,r),!0;case"dragenter":return sr=So(sr,t,e,n,i,r),!0;case"mouseover":return or=So(or,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return ca.set(s,So(ca.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,ua.set(s,So(ua.get(s)||null,t,e,n,i,r)),!0}return!1}function Vg(t){var e=Or(t.target);if(e!==null){var n=ns(e);if(n!==null){if(e=n.tag,e===13){if(e=bg(n),e!==null){t.blockedOn=e,Bg(t.priority,function(){Og(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function Dl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=zf(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);If=i,n.target.dispatchEvent(i),If=null}else return e=Na(n),e!==null&&_d(e),t.blockedOn=n,!1;e.shift()}return!0}function Gp(t,e,n){Dl(t)&&n.delete(e)}function fy(){Of=!1,rr!==null&&Dl(rr)&&(rr=null),sr!==null&&Dl(sr)&&(sr=null),or!==null&&Dl(or)&&(or=null),ca.forEach(Gp),ua.forEach(Gp)}function Mo(t,e){t.blockedOn===e&&(t.blockedOn=null,Of||(Of=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,fy)))}function fa(t){function e(r){return Mo(r,t)}if(0<Xa.length){Mo(Xa[0],t);for(var n=1;n<Xa.length;n++){var i=Xa[n];i.blockedOn===t&&(i.blockedOn=null)}}for(rr!==null&&Mo(rr,t),sr!==null&&Mo(sr,t),or!==null&&Mo(or,t),ca.forEach(e),ua.forEach(e),n=0;n<Qi.length;n++)i=Qi[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<Qi.length&&(n=Qi[0],n.blockedOn===null);)Vg(n),n.blockedOn===null&&Qi.shift()}var Ws=Hi.ReactCurrentBatchConfig,ic=!0;function hy(t,e,n,i){var r=ut,s=Ws.transition;Ws.transition=null;try{ut=1,xd(t,e,n,i)}finally{ut=r,Ws.transition=s}}function dy(t,e,n,i){var r=ut,s=Ws.transition;Ws.transition=null;try{ut=4,xd(t,e,n,i)}finally{ut=r,Ws.transition=s}}function xd(t,e,n,i){if(ic){var r=zf(t,e,n,i);if(r===null)xu(t,e,i,rc,n),Hp(t,i);else if(uy(r,t,e,n,i))i.stopPropagation();else if(Hp(t,i),e&4&&-1<cy.indexOf(t)){for(;r!==null;){var s=Na(r);if(s!==null&&kg(s),s=zf(t,e,n,i),s===null&&xu(t,e,i,rc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else xu(t,e,i,null,n)}}var rc=null;function zf(t,e,n,i){if(rc=null,t=md(i),t=Or(t),t!==null)if(e=ns(t),e===null)t=null;else if(n=e.tag,n===13){if(t=bg(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return rc=t,null}function Hg(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ey()){case gd:return 1;case Ig:return 4;case tc:case ty:return 16;case Dg:return 536870912;default:return 16}default:return 16}}var nr=null,yd=null,Ul=null;function Gg(){if(Ul)return Ul;var t,e=yd,n=e.length,i,r="value"in nr?nr.value:nr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return Ul=r.slice(t,1<i?1-i:void 0)}function Fl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Ka(){return!0}function Wp(){return!1}function In(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Ka:Wp,this.isPropagationStopped=Wp,this}return At(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Ka)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Ka)},persist:function(){},isPersistent:Ka}),e}var po={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Sd=In(po),La=At({},po,{view:0,detail:0}),py=In(La),uu,fu,Eo,Fc=At({},La,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Md,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Eo&&(Eo&&t.type==="mousemove"?(uu=t.screenX-Eo.screenX,fu=t.screenY-Eo.screenY):fu=uu=0,Eo=t),uu)},movementY:function(t){return"movementY"in t?t.movementY:fu}}),jp=In(Fc),my=At({},Fc,{dataTransfer:0}),gy=In(my),vy=At({},La,{relatedTarget:0}),hu=In(vy),_y=At({},po,{animationName:0,elapsedTime:0,pseudoElement:0}),xy=In(_y),yy=At({},po,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Sy=In(yy),My=At({},po,{data:0}),Xp=In(My),Ey={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},wy={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ty={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Ay(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=Ty[t])?!!e[t]:!1}function Md(){return Ay}var Cy=At({},La,{key:function(t){if(t.key){var e=Ey[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Fl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?wy[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Md,charCode:function(t){return t.type==="keypress"?Fl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Fl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),Ry=In(Cy),by=At({},Fc,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Kp=In(by),Py=At({},La,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Md}),Ly=In(Py),Ny=At({},po,{propertyName:0,elapsedTime:0,pseudoElement:0}),Iy=In(Ny),Dy=At({},Fc,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),Uy=In(Dy),Fy=[9,13,27,32],Ed=Fi&&"CompositionEvent"in window,qo=null;Fi&&"documentMode"in document&&(qo=document.documentMode);var ky=Fi&&"TextEvent"in window&&!qo,Wg=Fi&&(!Ed||qo&&8<qo&&11>=qo),qp=" ",Yp=!1;function jg(t,e){switch(t){case"keyup":return Fy.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Xg(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Cs=!1;function Oy(t,e){switch(t){case"compositionend":return Xg(e);case"keypress":return e.which!==32?null:(Yp=!0,qp);case"textInput":return t=e.data,t===qp&&Yp?null:t;default:return null}}function zy(t,e){if(Cs)return t==="compositionend"||!Ed&&jg(t,e)?(t=Gg(),Ul=yd=nr=null,Cs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Wg&&e.locale!=="ko"?null:e.data;default:return null}}var By={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function $p(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!By[t.type]:e==="textarea"}function Kg(t,e,n,i){wg(i),e=sc(e,"onChange"),0<e.length&&(n=new Sd("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var Yo=null,ha=null;function Vy(t){rv(t,0)}function kc(t){var e=Ps(t);if(vg(e))return t}function Hy(t,e){if(t==="change")return e}var qg=!1;if(Fi){var du;if(Fi){var pu="oninput"in document;if(!pu){var Zp=document.createElement("div");Zp.setAttribute("oninput","return;"),pu=typeof Zp.oninput=="function"}du=pu}else du=!1;qg=du&&(!document.documentMode||9<document.documentMode)}function Jp(){Yo&&(Yo.detachEvent("onpropertychange",Yg),ha=Yo=null)}function Yg(t){if(t.propertyName==="value"&&kc(ha)){var e=[];Kg(e,ha,t,md(t)),Rg(Vy,e)}}function Gy(t,e,n){t==="focusin"?(Jp(),Yo=e,ha=n,Yo.attachEvent("onpropertychange",Yg)):t==="focusout"&&Jp()}function Wy(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kc(ha)}function jy(t,e){if(t==="click")return kc(e)}function Xy(t,e){if(t==="input"||t==="change")return kc(e)}function Ky(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var li=typeof Object.is=="function"?Object.is:Ky;function da(t,e){if(li(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!Sf.call(e,r)||!li(t[r],e[r]))return!1}return!0}function Qp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function em(t,e){var n=Qp(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Qp(n)}}function $g(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?$g(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Zg(){for(var t=window,e=Jl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Jl(t.document)}return e}function wd(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function qy(t){var e=Zg(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&$g(n.ownerDocument.documentElement,n)){if(i!==null&&wd(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=em(n,s);var o=em(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var Yy=Fi&&"documentMode"in document&&11>=document.documentMode,Rs=null,Bf=null,$o=null,Vf=!1;function tm(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Vf||Rs==null||Rs!==Jl(i)||(i=Rs,"selectionStart"in i&&wd(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),$o&&da($o,i)||($o=i,i=sc(Bf,"onSelect"),0<i.length&&(e=new Sd("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Rs)))}function qa(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var bs={animationend:qa("Animation","AnimationEnd"),animationiteration:qa("Animation","AnimationIteration"),animationstart:qa("Animation","AnimationStart"),transitionend:qa("Transition","TransitionEnd")},mu={},Jg={};Fi&&(Jg=document.createElement("div").style,"AnimationEvent"in window||(delete bs.animationend.animation,delete bs.animationiteration.animation,delete bs.animationstart.animation),"TransitionEvent"in window||delete bs.transitionend.transition);function Oc(t){if(mu[t])return mu[t];if(!bs[t])return t;var e=bs[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Jg)return mu[t]=e[n];return t}var Qg=Oc("animationend"),ev=Oc("animationiteration"),tv=Oc("animationstart"),nv=Oc("transitionend"),iv=new Map,nm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function _r(t,e){iv.set(t,e),ts(e,[t])}for(var gu=0;gu<nm.length;gu++){var vu=nm[gu],$y=vu.toLowerCase(),Zy=vu[0].toUpperCase()+vu.slice(1);_r($y,"on"+Zy)}_r(Qg,"onAnimationEnd");_r(ev,"onAnimationIteration");_r(tv,"onAnimationStart");_r("dblclick","onDoubleClick");_r("focusin","onFocus");_r("focusout","onBlur");_r(nv,"onTransitionEnd");Qs("onMouseEnter",["mouseout","mouseover"]);Qs("onMouseLeave",["mouseout","mouseover"]);Qs("onPointerEnter",["pointerout","pointerover"]);Qs("onPointerLeave",["pointerout","pointerover"]);ts("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ts("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ts("onBeforeInput",["compositionend","keypress","textInput","paste"]);ts("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ts("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Jy=new Set("cancel close invalid load scroll toggle".split(" ").concat(Go));function im(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,$x(i,e,void 0,t),t.currentTarget=null}function rv(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;im(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;im(r,a,c),s=l}}}if(ec)throw t=Ff,ec=!1,Ff=null,t}function xt(t,e){var n=e[Xf];n===void 0&&(n=e[Xf]=new Set);var i=t+"__bubble";n.has(i)||(sv(e,t,2,!1),n.add(i))}function _u(t,e,n){var i=0;e&&(i|=4),sv(n,t,i,e)}var Ya="_reactListening"+Math.random().toString(36).slice(2);function pa(t){if(!t[Ya]){t[Ya]=!0,hg.forEach(function(n){n!=="selectionchange"&&(Jy.has(n)||_u(n,!1,t),_u(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[Ya]||(e[Ya]=!0,_u("selectionchange",!1,e))}}function sv(t,e,n,i){switch(Hg(e)){case 1:var r=hy;break;case 4:r=dy;break;default:r=xd}n=r.bind(null,e,n,t),r=void 0,!Uf||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function xu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Or(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}Rg(function(){var c=s,u=md(n),f=[];e:{var h=iv.get(t);if(h!==void 0){var p=Sd,g=t;switch(t){case"keypress":if(Fl(n)===0)break e;case"keydown":case"keyup":p=Ry;break;case"focusin":g="focus",p=hu;break;case"focusout":g="blur",p=hu;break;case"beforeblur":case"afterblur":p=hu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=jp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=gy;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Ly;break;case Qg:case ev:case tv:p=xy;break;case nv:p=Iy;break;case"scroll":p=py;break;case"wheel":p=Uy;break;case"copy":case"cut":case"paste":p=Sy;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Kp}var S=(e&4)!==0,m=!S&&t==="scroll",d=S?h!==null?h+"Capture":null:h;S=[];for(var v=c,_;v!==null;){_=v;var y=_.stateNode;if(_.tag===5&&y!==null&&(_=y,d!==null&&(y=la(v,d),y!=null&&S.push(ma(v,y,_)))),m)break;v=v.return}0<S.length&&(h=new p(h,g,null,n,u),f.push({event:h,listeners:S}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==If&&(g=n.relatedTarget||n.fromElement)&&(Or(g)||g[ki]))break e;if((p||h)&&(h=u.window===u?u:(h=u.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?Or(g):null,g!==null&&(m=ns(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(S=jp,y="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(S=Kp,y="onPointerLeave",d="onPointerEnter",v="pointer"),m=p==null?h:Ps(p),_=g==null?h:Ps(g),h=new S(y,v+"leave",p,n,u),h.target=m,h.relatedTarget=_,y=null,Or(u)===c&&(S=new S(d,v+"enter",g,n,u),S.target=_,S.relatedTarget=m,y=S),m=y,p&&g)t:{for(S=p,d=g,v=0,_=S;_;_=rs(_))v++;for(_=0,y=d;y;y=rs(y))_++;for(;0<v-_;)S=rs(S),v--;for(;0<_-v;)d=rs(d),_--;for(;v--;){if(S===d||d!==null&&S===d.alternate)break t;S=rs(S),d=rs(d)}S=null}else S=null;p!==null&&rm(f,h,p,S,!1),g!==null&&m!==null&&rm(f,m,g,S,!0)}}e:{if(h=c?Ps(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var b=Hy;else if($p(h))if(qg)b=Xy;else{b=Wy;var C=Gy}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(b=jy);if(b&&(b=b(t,c))){Kg(f,b,n,u);break e}C&&C(t,h,c),t==="focusout"&&(C=h._wrapperState)&&C.controlled&&h.type==="number"&&Rf(h,"number",h.value)}switch(C=c?Ps(c):window,t){case"focusin":($p(C)||C.contentEditable==="true")&&(Rs=C,Bf=c,$o=null);break;case"focusout":$o=Bf=Rs=null;break;case"mousedown":Vf=!0;break;case"contextmenu":case"mouseup":case"dragend":Vf=!1,tm(f,n,u);break;case"selectionchange":if(Yy)break;case"keydown":case"keyup":tm(f,n,u)}var w;if(Ed)e:{switch(t){case"compositionstart":var L="onCompositionStart";break e;case"compositionend":L="onCompositionEnd";break e;case"compositionupdate":L="onCompositionUpdate";break e}L=void 0}else Cs?jg(t,n)&&(L="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(L="onCompositionStart");L&&(Wg&&n.locale!=="ko"&&(Cs||L!=="onCompositionStart"?L==="onCompositionEnd"&&Cs&&(w=Gg()):(nr=u,yd="value"in nr?nr.value:nr.textContent,Cs=!0)),C=sc(c,L),0<C.length&&(L=new Xp(L,t,null,n,u),f.push({event:L,listeners:C}),w?L.data=w:(w=Xg(n),w!==null&&(L.data=w)))),(w=ky?Oy(t,n):zy(t,n))&&(c=sc(c,"onBeforeInput"),0<c.length&&(u=new Xp("onBeforeInput","beforeinput",null,n,u),f.push({event:u,listeners:c}),u.data=w))}rv(f,e)})}function ma(t,e,n){return{instance:t,listener:e,currentTarget:n}}function sc(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=la(t,n),s!=null&&i.unshift(ma(t,s,r)),s=la(t,e),s!=null&&i.push(ma(t,s,r))),t=t.return}return i}function rs(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function rm(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=la(n,s),l!=null&&o.unshift(ma(n,l,a))):r||(l=la(n,s),l!=null&&o.push(ma(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Qy=/\r\n?/g,eS=/\u0000|\uFFFD/g;function sm(t){return(typeof t=="string"?t:""+t).replace(Qy,`
`).replace(eS,"")}function $a(t,e,n){if(e=sm(e),sm(t)!==e&&n)throw Error(ae(425))}function oc(){}var Hf=null,Gf=null;function Wf(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var jf=typeof setTimeout=="function"?setTimeout:void 0,tS=typeof clearTimeout=="function"?clearTimeout:void 0,om=typeof Promise=="function"?Promise:void 0,nS=typeof queueMicrotask=="function"?queueMicrotask:typeof om<"u"?function(t){return om.resolve(null).then(t).catch(iS)}:jf;function iS(t){setTimeout(function(){throw t})}function yu(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),fa(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);fa(e)}function ar(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function am(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var mo=Math.random().toString(36).slice(2),di="__reactFiber$"+mo,ga="__reactProps$"+mo,ki="__reactContainer$"+mo,Xf="__reactEvents$"+mo,rS="__reactListeners$"+mo,sS="__reactHandles$"+mo;function Or(t){var e=t[di];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ki]||n[di]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=am(t);t!==null;){if(n=t[di])return n;t=am(t)}return e}t=n,n=t.parentNode}return null}function Na(t){return t=t[di]||t[ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Ps(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(ae(33))}function zc(t){return t[ga]||null}var Kf=[],Ls=-1;function xr(t){return{current:t}}function St(t){0>Ls||(t.current=Kf[Ls],Kf[Ls]=null,Ls--)}function vt(t,e){Ls++,Kf[Ls]=t.current,t.current=e}var mr={},nn=xr(mr),_n=xr(!1),Kr=mr;function eo(t,e){var n=t.type.contextTypes;if(!n)return mr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function xn(t){return t=t.childContextTypes,t!=null}function ac(){St(_n),St(nn)}function lm(t,e,n){if(nn.current!==mr)throw Error(ae(168));vt(nn,e),vt(_n,n)}function ov(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ae(108,Gx(t)||"Unknown",r));return At({},n,i)}function lc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||mr,Kr=nn.current,vt(nn,t),vt(_n,_n.current),!0}function cm(t,e,n){var i=t.stateNode;if(!i)throw Error(ae(169));n?(t=ov(t,e,Kr),i.__reactInternalMemoizedMergedChildContext=t,St(_n),St(nn),vt(nn,t)):St(_n),vt(_n,n)}var Ri=null,Bc=!1,Su=!1;function av(t){Ri===null?Ri=[t]:Ri.push(t)}function oS(t){Bc=!0,av(t)}function yr(){if(!Su&&Ri!==null){Su=!0;var t=0,e=ut;try{var n=Ri;for(ut=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Ri=null,Bc=!1}catch(r){throw Ri!==null&&(Ri=Ri.slice(t+1)),Ng(gd,yr),r}finally{ut=e,Su=!1}}return null}var Ns=[],Is=0,cc=null,uc=0,On=[],zn=0,qr=null,bi=1,Pi="";function Lr(t,e){Ns[Is++]=uc,Ns[Is++]=cc,cc=t,uc=e}function lv(t,e,n){On[zn++]=bi,On[zn++]=Pi,On[zn++]=qr,qr=t;var i=bi;t=Pi;var r=32-oi(i)-1;i&=~(1<<r),n+=1;var s=32-oi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,bi=1<<32-oi(e)+r|n<<r|i,Pi=s+t}else bi=1<<s|n<<r|i,Pi=t}function Td(t){t.return!==null&&(Lr(t,1),lv(t,1,0))}function Ad(t){for(;t===cc;)cc=Ns[--Is],Ns[Is]=null,uc=Ns[--Is],Ns[Is]=null;for(;t===qr;)qr=On[--zn],On[zn]=null,Pi=On[--zn],On[zn]=null,bi=On[--zn],On[zn]=null}var Pn=null,bn=null,Mt=!1,ni=null;function cv(t,e){var n=Hn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function um(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,Pn=t,bn=ar(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,Pn=t,bn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=qr!==null?{id:bi,overflow:Pi}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Hn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,Pn=t,bn=null,!0):!1;default:return!1}}function qf(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Yf(t){if(Mt){var e=bn;if(e){var n=e;if(!um(t,e)){if(qf(t))throw Error(ae(418));e=ar(n.nextSibling);var i=Pn;e&&um(t,e)?cv(i,n):(t.flags=t.flags&-4097|2,Mt=!1,Pn=t)}}else{if(qf(t))throw Error(ae(418));t.flags=t.flags&-4097|2,Mt=!1,Pn=t}}}function fm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Pn=t}function Za(t){if(t!==Pn)return!1;if(!Mt)return fm(t),Mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Wf(t.type,t.memoizedProps)),e&&(e=bn)){if(qf(t))throw uv(),Error(ae(418));for(;e;)cv(t,e),e=ar(e.nextSibling)}if(fm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(ae(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){bn=ar(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}bn=null}}else bn=Pn?ar(t.stateNode.nextSibling):null;return!0}function uv(){for(var t=bn;t;)t=ar(t.nextSibling)}function to(){bn=Pn=null,Mt=!1}function Cd(t){ni===null?ni=[t]:ni.push(t)}var aS=Hi.ReactCurrentBatchConfig;function wo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(ae(309));var i=n.stateNode}if(!i)throw Error(ae(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(ae(284));if(!n._owner)throw Error(ae(290,t))}return t}function Ja(t,e){throw t=Object.prototype.toString.call(e),Error(ae(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function hm(t){var e=t._init;return e(t._payload)}function fv(t){function e(d,v){if(t){var _=d.deletions;_===null?(d.deletions=[v],d.flags|=16):_.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=fr(d,v),d.index=0,d.sibling=null,d}function s(d,v,_){return d.index=_,t?(_=d.alternate,_!==null?(_=_.index,_<v?(d.flags|=2,v):_):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,v,_,y){return v===null||v.tag!==6?(v=Ru(_,d.mode,y),v.return=d,v):(v=r(v,_),v.return=d,v)}function l(d,v,_,y){var b=_.type;return b===As?u(d,v,_.props.children,y,_.key):v!==null&&(v.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Zi&&hm(b)===v.type)?(y=r(v,_.props),y.ref=wo(d,v,_),y.return=d,y):(y=Gl(_.type,_.key,_.props,null,d.mode,y),y.ref=wo(d,v,_),y.return=d,y)}function c(d,v,_,y){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=bu(_,d.mode,y),v.return=d,v):(v=r(v,_.children||[]),v.return=d,v)}function u(d,v,_,y,b){return v===null||v.tag!==7?(v=jr(_,d.mode,y,b),v.return=d,v):(v=r(v,_),v.return=d,v)}function f(d,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=Ru(""+v,d.mode,_),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Va:return _=Gl(v.type,v.key,v.props,null,d.mode,_),_.ref=wo(d,null,v),_.return=d,_;case Ts:return v=bu(v,d.mode,_),v.return=d,v;case Zi:var y=v._init;return f(d,y(v._payload),_)}if(Vo(v)||xo(v))return v=jr(v,d.mode,_,null),v.return=d,v;Ja(d,v)}return null}function h(d,v,_,y){var b=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return b!==null?null:a(d,v,""+_,y);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case Va:return _.key===b?l(d,v,_,y):null;case Ts:return _.key===b?c(d,v,_,y):null;case Zi:return b=_._init,h(d,v,b(_._payload),y)}if(Vo(_)||xo(_))return b!==null?null:u(d,v,_,y,null);Ja(d,_)}return null}function p(d,v,_,y,b){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(_)||null,a(v,d,""+y,b);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Va:return d=d.get(y.key===null?_:y.key)||null,l(v,d,y,b);case Ts:return d=d.get(y.key===null?_:y.key)||null,c(v,d,y,b);case Zi:var C=y._init;return p(d,v,_,C(y._payload),b)}if(Vo(y)||xo(y))return d=d.get(_)||null,u(v,d,y,b,null);Ja(v,y)}return null}function g(d,v,_,y){for(var b=null,C=null,w=v,L=v=0,G=null;w!==null&&L<_.length;L++){w.index>L?(G=w,w=null):G=w.sibling;var x=h(d,w,_[L],y);if(x===null){w===null&&(w=G);break}t&&w&&x.alternate===null&&e(d,w),v=s(x,v,L),C===null?b=x:C.sibling=x,C=x,w=G}if(L===_.length)return n(d,w),Mt&&Lr(d,L),b;if(w===null){for(;L<_.length;L++)w=f(d,_[L],y),w!==null&&(v=s(w,v,L),C===null?b=w:C.sibling=w,C=w);return Mt&&Lr(d,L),b}for(w=i(d,w);L<_.length;L++)G=p(w,d,L,_[L],y),G!==null&&(t&&G.alternate!==null&&w.delete(G.key===null?L:G.key),v=s(G,v,L),C===null?b=G:C.sibling=G,C=G);return t&&w.forEach(function(E){return e(d,E)}),Mt&&Lr(d,L),b}function S(d,v,_,y){var b=xo(_);if(typeof b!="function")throw Error(ae(150));if(_=b.call(_),_==null)throw Error(ae(151));for(var C=b=null,w=v,L=v=0,G=null,x=_.next();w!==null&&!x.done;L++,x=_.next()){w.index>L?(G=w,w=null):G=w.sibling;var E=h(d,w,x.value,y);if(E===null){w===null&&(w=G);break}t&&w&&E.alternate===null&&e(d,w),v=s(E,v,L),C===null?b=E:C.sibling=E,C=E,w=G}if(x.done)return n(d,w),Mt&&Lr(d,L),b;if(w===null){for(;!x.done;L++,x=_.next())x=f(d,x.value,y),x!==null&&(v=s(x,v,L),C===null?b=x:C.sibling=x,C=x);return Mt&&Lr(d,L),b}for(w=i(d,w);!x.done;L++,x=_.next())x=p(w,d,L,x.value,y),x!==null&&(t&&x.alternate!==null&&w.delete(x.key===null?L:x.key),v=s(x,v,L),C===null?b=x:C.sibling=x,C=x);return t&&w.forEach(function(z){return e(d,z)}),Mt&&Lr(d,L),b}function m(d,v,_,y){if(typeof _=="object"&&_!==null&&_.type===As&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case Va:e:{for(var b=_.key,C=v;C!==null;){if(C.key===b){if(b=_.type,b===As){if(C.tag===7){n(d,C.sibling),v=r(C,_.props.children),v.return=d,d=v;break e}}else if(C.elementType===b||typeof b=="object"&&b!==null&&b.$$typeof===Zi&&hm(b)===C.type){n(d,C.sibling),v=r(C,_.props),v.ref=wo(d,C,_),v.return=d,d=v;break e}n(d,C);break}else e(d,C);C=C.sibling}_.type===As?(v=jr(_.props.children,d.mode,y,_.key),v.return=d,d=v):(y=Gl(_.type,_.key,_.props,null,d.mode,y),y.ref=wo(d,v,_),y.return=d,d=y)}return o(d);case Ts:e:{for(C=_.key;v!==null;){if(v.key===C)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(d,v.sibling),v=r(v,_.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=bu(_,d.mode,y),v.return=d,d=v}return o(d);case Zi:return C=_._init,m(d,v,C(_._payload),y)}if(Vo(_))return g(d,v,_,y);if(xo(_))return S(d,v,_,y);Ja(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,_),v.return=d,d=v):(n(d,v),v=Ru(_,d.mode,y),v.return=d,d=v),o(d)):n(d,v)}return m}var no=fv(!0),hv=fv(!1),fc=xr(null),hc=null,Ds=null,Rd=null;function bd(){Rd=Ds=hc=null}function Pd(t){var e=fc.current;St(fc),t._currentValue=e}function $f(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function js(t,e){hc=t,Rd=Ds=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(gn=!0),t.firstContext=null)}function Kn(t){var e=t._currentValue;if(Rd!==t)if(t={context:t,memoizedValue:e,next:null},Ds===null){if(hc===null)throw Error(ae(308));Ds=t,hc.dependencies={lanes:0,firstContext:t}}else Ds=Ds.next=t;return e}var zr=null;function Ld(t){zr===null?zr=[t]:zr.push(t)}function dv(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Ld(e)):(n.next=r.next,r.next=n),e.interleaved=n,Oi(t,i)}function Oi(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var Ji=!1;function Nd(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function pv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Ii(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function lr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,tt&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Oi(t,n)}return r=i.interleaved,r===null?(e.next=e,Ld(i)):(e.next=r.next,r.next=e),i.interleaved=e,Oi(t,n)}function kl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,vd(t,n)}}function dm(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function dc(t,e,n,i){var r=t.updateQueue;Ji=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var u=t.alternate;u!==null&&(u=u.updateQueue,a=u.lastBaseUpdate,a!==o&&(a===null?u.firstBaseUpdate=c:a.next=c,u.lastBaseUpdate=l))}if(s!==null){var f=r.baseState;o=0,u=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){u!==null&&(u=u.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,S=a;switch(h=e,p=n,S.tag){case 1:if(g=S.payload,typeof g=="function"){f=g.call(p,f,h);break e}f=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=S.payload,h=typeof g=="function"?g.call(p,f,h):g,h==null)break e;f=At({},f,h);break e;case 2:Ji=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},u===null?(c=u=p,l=f):u=u.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(u===null&&(l=f),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=u,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);$r|=o,t.lanes=o,t.memoizedState=f}}function pm(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(ae(191,r));r.call(i)}}}var Ia={},vi=xr(Ia),va=xr(Ia),_a=xr(Ia);function Br(t){if(t===Ia)throw Error(ae(174));return t}function Id(t,e){switch(vt(_a,e),vt(va,t),vt(vi,Ia),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Pf(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Pf(e,t)}St(vi),vt(vi,e)}function io(){St(vi),St(va),St(_a)}function mv(t){Br(_a.current);var e=Br(vi.current),n=Pf(e,t.type);e!==n&&(vt(va,t),vt(vi,n))}function Dd(t){va.current===t&&(St(vi),St(va))}var Et=xr(0);function pc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Mu=[];function Ud(){for(var t=0;t<Mu.length;t++)Mu[t]._workInProgressVersionPrimary=null;Mu.length=0}var Ol=Hi.ReactCurrentDispatcher,Eu=Hi.ReactCurrentBatchConfig,Yr=0,Tt=null,Ft=null,Vt=null,mc=!1,Zo=!1,xa=0,lS=0;function $t(){throw Error(ae(321))}function Fd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!li(t[n],e[n]))return!1;return!0}function kd(t,e,n,i,r,s){if(Yr=s,Tt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ol.current=t===null||t.memoizedState===null?hS:dS,t=n(i,r),Zo){s=0;do{if(Zo=!1,xa=0,25<=s)throw Error(ae(301));s+=1,Vt=Ft=null,e.updateQueue=null,Ol.current=pS,t=n(i,r)}while(Zo)}if(Ol.current=gc,e=Ft!==null&&Ft.next!==null,Yr=0,Vt=Ft=Tt=null,mc=!1,e)throw Error(ae(300));return t}function Od(){var t=xa!==0;return xa=0,t}function fi(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Vt===null?Tt.memoizedState=Vt=t:Vt=Vt.next=t,Vt}function qn(){if(Ft===null){var t=Tt.alternate;t=t!==null?t.memoizedState:null}else t=Ft.next;var e=Vt===null?Tt.memoizedState:Vt.next;if(e!==null)Vt=e,Ft=t;else{if(t===null)throw Error(ae(310));Ft=t,t={memoizedState:Ft.memoizedState,baseState:Ft.baseState,baseQueue:Ft.baseQueue,queue:Ft.queue,next:null},Vt===null?Tt.memoizedState=Vt=t:Vt=Vt.next=t}return Vt}function ya(t,e){return typeof e=="function"?e(t):e}function wu(t){var e=qn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=Ft,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var u=c.lane;if((Yr&u)===u)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var f={lane:u,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=f,o=i):l=l.next=f,Tt.lanes|=u,$r|=u}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,li(i,e.memoizedState)||(gn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,Tt.lanes|=s,$r|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function Tu(t){var e=qn(),n=e.queue;if(n===null)throw Error(ae(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);li(s,e.memoizedState)||(gn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function gv(){}function vv(t,e){var n=Tt,i=qn(),r=e(),s=!li(i.memoizedState,r);if(s&&(i.memoizedState=r,gn=!0),i=i.queue,zd(yv.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||Vt!==null&&Vt.memoizedState.tag&1){if(n.flags|=2048,Sa(9,xv.bind(null,n,i,r,e),void 0,null),Ht===null)throw Error(ae(349));Yr&30||_v(n,e,r)}return r}function _v(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function xv(t,e,n,i){e.value=n,e.getSnapshot=i,Sv(e)&&Mv(t)}function yv(t,e,n){return n(function(){Sv(e)&&Mv(t)})}function Sv(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!li(t,n)}catch{return!0}}function Mv(t){var e=Oi(t,1);e!==null&&ai(e,t,1,-1)}function mm(t){var e=fi();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ya,lastRenderedState:t},e.queue=t,t=t.dispatch=fS.bind(null,Tt,t),[e.memoizedState,t]}function Sa(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=Tt.updateQueue,e===null?(e={lastEffect:null,stores:null},Tt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function Ev(){return qn().memoizedState}function zl(t,e,n,i){var r=fi();Tt.flags|=t,r.memoizedState=Sa(1|e,n,void 0,i===void 0?null:i)}function Vc(t,e,n,i){var r=qn();i=i===void 0?null:i;var s=void 0;if(Ft!==null){var o=Ft.memoizedState;if(s=o.destroy,i!==null&&Fd(i,o.deps)){r.memoizedState=Sa(e,n,s,i);return}}Tt.flags|=t,r.memoizedState=Sa(1|e,n,s,i)}function gm(t,e){return zl(8390656,8,t,e)}function zd(t,e){return Vc(2048,8,t,e)}function wv(t,e){return Vc(4,2,t,e)}function Tv(t,e){return Vc(4,4,t,e)}function Av(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Cv(t,e,n){return n=n!=null?n.concat([t]):null,Vc(4,4,Av.bind(null,e,t),n)}function Bd(){}function Rv(t,e){var n=qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Fd(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function bv(t,e){var n=qn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Fd(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function Pv(t,e,n){return Yr&21?(li(n,e)||(n=Ug(),Tt.lanes|=n,$r|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,gn=!0),t.memoizedState=n)}function cS(t,e){var n=ut;ut=n!==0&&4>n?n:4,t(!0);var i=Eu.transition;Eu.transition={};try{t(!1),e()}finally{ut=n,Eu.transition=i}}function Lv(){return qn().memoizedState}function uS(t,e,n){var i=ur(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},Nv(t))Iv(e,n);else if(n=dv(t,e,n,i),n!==null){var r=cn();ai(n,t,i,r),Dv(n,e,i)}}function fS(t,e,n){var i=ur(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(Nv(t))Iv(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,li(a,o)){var l=e.interleaved;l===null?(r.next=r,Ld(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=dv(t,e,r,i),n!==null&&(r=cn(),ai(n,t,i,r),Dv(n,e,i))}}function Nv(t){var e=t.alternate;return t===Tt||e!==null&&e===Tt}function Iv(t,e){Zo=mc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Dv(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,vd(t,n)}}var gc={readContext:Kn,useCallback:$t,useContext:$t,useEffect:$t,useImperativeHandle:$t,useInsertionEffect:$t,useLayoutEffect:$t,useMemo:$t,useReducer:$t,useRef:$t,useState:$t,useDebugValue:$t,useDeferredValue:$t,useTransition:$t,useMutableSource:$t,useSyncExternalStore:$t,useId:$t,unstable_isNewReconciler:!1},hS={readContext:Kn,useCallback:function(t,e){return fi().memoizedState=[t,e===void 0?null:e],t},useContext:Kn,useEffect:gm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,zl(4194308,4,Av.bind(null,e,t),n)},useLayoutEffect:function(t,e){return zl(4194308,4,t,e)},useInsertionEffect:function(t,e){return zl(4,2,t,e)},useMemo:function(t,e){var n=fi();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=fi();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=uS.bind(null,Tt,t),[i.memoizedState,t]},useRef:function(t){var e=fi();return t={current:t},e.memoizedState=t},useState:mm,useDebugValue:Bd,useDeferredValue:function(t){return fi().memoizedState=t},useTransition:function(){var t=mm(!1),e=t[0];return t=cS.bind(null,t[1]),fi().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=Tt,r=fi();if(Mt){if(n===void 0)throw Error(ae(407));n=n()}else{if(n=e(),Ht===null)throw Error(ae(349));Yr&30||_v(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,gm(yv.bind(null,i,s,t),[t]),i.flags|=2048,Sa(9,xv.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=fi(),e=Ht.identifierPrefix;if(Mt){var n=Pi,i=bi;n=(i&~(1<<32-oi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=xa++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=lS++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},dS={readContext:Kn,useCallback:Rv,useContext:Kn,useEffect:zd,useImperativeHandle:Cv,useInsertionEffect:wv,useLayoutEffect:Tv,useMemo:bv,useReducer:wu,useRef:Ev,useState:function(){return wu(ya)},useDebugValue:Bd,useDeferredValue:function(t){var e=qn();return Pv(e,Ft.memoizedState,t)},useTransition:function(){var t=wu(ya)[0],e=qn().memoizedState;return[t,e]},useMutableSource:gv,useSyncExternalStore:vv,useId:Lv,unstable_isNewReconciler:!1},pS={readContext:Kn,useCallback:Rv,useContext:Kn,useEffect:zd,useImperativeHandle:Cv,useInsertionEffect:wv,useLayoutEffect:Tv,useMemo:bv,useReducer:Tu,useRef:Ev,useState:function(){return Tu(ya)},useDebugValue:Bd,useDeferredValue:function(t){var e=qn();return Ft===null?e.memoizedState=t:Pv(e,Ft.memoizedState,t)},useTransition:function(){var t=Tu(ya)[0],e=qn().memoizedState;return[t,e]},useMutableSource:gv,useSyncExternalStore:vv,useId:Lv,unstable_isNewReconciler:!1};function ei(t,e){if(t&&t.defaultProps){e=At({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Zf(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:At({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Hc={isMounted:function(t){return(t=t._reactInternals)?ns(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=cn(),r=ur(t),s=Ii(i,r);s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,r),e!==null&&(ai(e,t,r,i),kl(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=cn(),r=ur(t),s=Ii(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=lr(t,s,r),e!==null&&(ai(e,t,r,i),kl(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=cn(),i=ur(t),r=Ii(n,i);r.tag=2,e!=null&&(r.callback=e),e=lr(t,r,i),e!==null&&(ai(e,t,i,n),kl(e,t,i))}};function vm(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!da(n,i)||!da(r,s):!0}function Uv(t,e,n){var i=!1,r=mr,s=e.contextType;return typeof s=="object"&&s!==null?s=Kn(s):(r=xn(e)?Kr:nn.current,i=e.contextTypes,s=(i=i!=null)?eo(t,r):mr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Hc,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function _m(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&Hc.enqueueReplaceState(e,e.state,null)}function Jf(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},Nd(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Kn(s):(s=xn(e)?Kr:nn.current,r.context=eo(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Zf(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&Hc.enqueueReplaceState(r,r.state,null),dc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function ro(t,e){try{var n="",i=e;do n+=Hx(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function Au(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Qf(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var mS=typeof WeakMap=="function"?WeakMap:Map;function Fv(t,e,n){n=Ii(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){_c||(_c=!0,ch=i),Qf(t,e)},n}function kv(t,e,n){n=Ii(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Qf(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Qf(t,e),typeof i!="function"&&(cr===null?cr=new Set([this]):cr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function xm(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new mS;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=bS.bind(null,t,e,n),e.then(t,t))}function ym(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sm(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Ii(-1,1),e.tag=2,lr(n,e,1))),n.lanes|=1),t)}var gS=Hi.ReactCurrentOwner,gn=!1;function ln(t,e,n,i){e.child=t===null?hv(e,null,n,i):no(e,t.child,n,i)}function Mm(t,e,n,i,r){n=n.render;var s=e.ref;return js(e,r),i=kd(t,e,n,i,s,r),n=Od(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,zi(t,e,r)):(Mt&&n&&Td(e),e.flags|=1,ln(t,e,i,r),e.child)}function Em(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!qd(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Ov(t,e,s,i,r)):(t=Gl(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:da,n(o,i)&&t.ref===e.ref)return zi(t,e,r)}return e.flags|=1,t=fr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Ov(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(da(s,i)&&t.ref===e.ref)if(gn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(gn=!0);else return e.lanes=t.lanes,zi(t,e,r)}return eh(t,e,n,i,r)}function zv(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},vt(Fs,An),An|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,vt(Fs,An),An|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,vt(Fs,An),An|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,vt(Fs,An),An|=i;return ln(t,e,r,n),e.child}function Bv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function eh(t,e,n,i,r){var s=xn(n)?Kr:nn.current;return s=eo(e,s),js(e,r),n=kd(t,e,n,i,s,r),i=Od(),t!==null&&!gn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,zi(t,e,r)):(Mt&&i&&Td(e),e.flags|=1,ln(t,e,n,r),e.child)}function wm(t,e,n,i,r){if(xn(n)){var s=!0;lc(e)}else s=!1;if(js(e,r),e.stateNode===null)Bl(t,e),Uv(e,n,i),Jf(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Kn(c):(c=xn(n)?Kr:nn.current,c=eo(e,c));var u=n.getDerivedStateFromProps,f=typeof u=="function"||typeof o.getSnapshotBeforeUpdate=="function";f||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&_m(e,o,i,c),Ji=!1;var h=e.memoizedState;o.state=h,dc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||_n.current||Ji?(typeof u=="function"&&(Zf(e,n,u,i),l=e.memoizedState),(a=Ji||vm(e,n,a,i,h,l,c))?(f||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,pv(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ei(e.type,a),o.props=c,f=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Kn(l):(l=xn(n)?Kr:nn.current,l=eo(e,l));var p=n.getDerivedStateFromProps;(u=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==f||h!==l)&&_m(e,o,i,l),Ji=!1,h=e.memoizedState,o.state=h,dc(e,i,o,r);var g=e.memoizedState;a!==f||h!==g||_n.current||Ji?(typeof p=="function"&&(Zf(e,n,p,i),g=e.memoizedState),(c=Ji||vm(e,n,c,i,h,g,l)||!1)?(u||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return th(t,e,n,i,s,r)}function th(t,e,n,i,r,s){Bv(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&cm(e,n,!1),zi(t,e,s);i=e.stateNode,gS.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=no(e,t.child,null,s),e.child=no(e,null,a,s)):ln(t,e,a,s),e.memoizedState=i.state,r&&cm(e,n,!0),e.child}function Vv(t){var e=t.stateNode;e.pendingContext?lm(t,e.pendingContext,e.pendingContext!==e.context):e.context&&lm(t,e.context,!1),Id(t,e.containerInfo)}function Tm(t,e,n,i,r){return to(),Cd(r),e.flags|=256,ln(t,e,n,i),e.child}var nh={dehydrated:null,treeContext:null,retryLane:0};function ih(t){return{baseLanes:t,cachePool:null,transitions:null}}function Hv(t,e,n){var i=e.pendingProps,r=Et.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),vt(Et,r&1),t===null)return Yf(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=jc(o,i,0,null),t=jr(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=ih(n),e.memoizedState=nh,t):Vd(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return vS(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=fr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=fr(a,s):(s=jr(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?ih(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=nh,i}return s=t.child,t=s.sibling,i=fr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function Vd(t,e){return e=jc({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Qa(t,e,n,i){return i!==null&&Cd(i),no(e,t.child,null,n),t=Vd(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function vS(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=Au(Error(ae(422))),Qa(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=jc({mode:"visible",children:i.children},r,0,null),s=jr(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&no(e,t.child,null,o),e.child.memoizedState=ih(o),e.memoizedState=nh,s);if(!(e.mode&1))return Qa(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ae(419)),i=Au(s,i,void 0),Qa(t,e,o,i)}if(a=(o&t.childLanes)!==0,gn||a){if(i=Ht,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Oi(t,r),ai(i,t,r,-1))}return Kd(),i=Au(Error(ae(421))),Qa(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=PS.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,bn=ar(r.nextSibling),Pn=e,Mt=!0,ni=null,t!==null&&(On[zn++]=bi,On[zn++]=Pi,On[zn++]=qr,bi=t.id,Pi=t.overflow,qr=e),e=Vd(e,i.children),e.flags|=4096,e)}function Am(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),$f(t.return,e,n)}function Cu(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Gv(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(ln(t,e,i.children,n),i=Et.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Am(t,n,e);else if(t.tag===19)Am(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(vt(Et,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&pc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),Cu(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&pc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}Cu(e,!0,n,null,s);break;case"together":Cu(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Bl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function zi(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),$r|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(ae(153));if(e.child!==null){for(t=e.child,n=fr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=fr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function _S(t,e,n){switch(e.tag){case 3:Vv(e),to();break;case 5:mv(e);break;case 1:xn(e.type)&&lc(e);break;case 4:Id(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;vt(fc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(vt(Et,Et.current&1),e.flags|=128,null):n&e.child.childLanes?Hv(t,e,n):(vt(Et,Et.current&1),t=zi(t,e,n),t!==null?t.sibling:null);vt(Et,Et.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Gv(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),vt(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,zv(t,e,n)}return zi(t,e,n)}var Wv,rh,jv,Xv;Wv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};rh=function(){};jv=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,Br(vi.current);var s=null;switch(n){case"input":r=Af(t,r),i=Af(t,i),s=[];break;case"select":r=At({},r,{value:void 0}),i=At({},i,{value:void 0}),s=[];break;case"textarea":r=bf(t,r),i=bf(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=oc)}Lf(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(oa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(oa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&xt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Xv=function(t,e,n,i){n!==i&&(e.flags|=4)};function To(t,e){if(!Mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function Zt(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function xS(t,e,n){var i=e.pendingProps;switch(Ad(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Zt(e),null;case 1:return xn(e.type)&&ac(),Zt(e),null;case 3:return i=e.stateNode,io(),St(_n),St(nn),Ud(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(Za(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ni!==null&&(hh(ni),ni=null))),rh(t,e),Zt(e),null;case 5:Dd(e);var r=Br(_a.current);if(n=e.type,t!==null&&e.stateNode!=null)jv(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ae(166));return Zt(e),null}if(t=Br(vi.current),Za(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[di]=e,i[ga]=s,t=(e.mode&1)!==0,n){case"dialog":xt("cancel",i),xt("close",i);break;case"iframe":case"object":case"embed":xt("load",i);break;case"video":case"audio":for(r=0;r<Go.length;r++)xt(Go[r],i);break;case"source":xt("error",i);break;case"img":case"image":case"link":xt("error",i),xt("load",i);break;case"details":xt("toggle",i);break;case"input":Up(i,s),xt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},xt("invalid",i);break;case"textarea":kp(i,s),xt("invalid",i)}Lf(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&$a(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&$a(i.textContent,a,t),r=["children",""+a]):oa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&xt("scroll",i)}switch(n){case"input":Ha(i),Fp(i,s,!0);break;case"textarea":Ha(i),Op(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=oc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=yg(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[di]=e,t[ga]=i,Wv(t,e,!1,!1),e.stateNode=t;e:{switch(o=Nf(n,i),n){case"dialog":xt("cancel",t),xt("close",t),r=i;break;case"iframe":case"object":case"embed":xt("load",t),r=i;break;case"video":case"audio":for(r=0;r<Go.length;r++)xt(Go[r],t);r=i;break;case"source":xt("error",t),r=i;break;case"img":case"image":case"link":xt("error",t),xt("load",t),r=i;break;case"details":xt("toggle",t),r=i;break;case"input":Up(t,i),r=Af(t,i),xt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=At({},i,{value:void 0}),xt("invalid",t);break;case"textarea":kp(t,i),r=bf(t,i),xt("invalid",t);break;default:r=i}Lf(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Eg(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Sg(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&aa(t,l):typeof l=="number"&&aa(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(oa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&xt("scroll",t):l!=null&&fd(t,s,l,o))}switch(n){case"input":Ha(t),Fp(t,i,!1);break;case"textarea":Ha(t),Op(t);break;case"option":i.value!=null&&t.setAttribute("value",""+pr(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?Vs(t,!!i.multiple,s,!1):i.defaultValue!=null&&Vs(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=oc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Zt(e),null;case 6:if(t&&e.stateNode!=null)Xv(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ae(166));if(n=Br(_a.current),Br(vi.current),Za(e)){if(i=e.stateNode,n=e.memoizedProps,i[di]=e,(s=i.nodeValue!==n)&&(t=Pn,t!==null))switch(t.tag){case 3:$a(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&$a(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[di]=e,e.stateNode=i}return Zt(e),null;case 13:if(St(Et),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Mt&&bn!==null&&e.mode&1&&!(e.flags&128))uv(),to(),e.flags|=98560,s=!1;else if(s=Za(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(ae(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ae(317));s[di]=e}else to(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Zt(e),s=!1}else ni!==null&&(hh(ni),ni=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Et.current&1?kt===0&&(kt=3):Kd())),e.updateQueue!==null&&(e.flags|=4),Zt(e),null);case 4:return io(),rh(t,e),t===null&&pa(e.stateNode.containerInfo),Zt(e),null;case 10:return Pd(e.type._context),Zt(e),null;case 17:return xn(e.type)&&ac(),Zt(e),null;case 19:if(St(Et),s=e.memoizedState,s===null)return Zt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)To(s,!1);else{if(kt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=pc(t),o!==null){for(e.flags|=128,To(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return vt(Et,Et.current&1|2),e.child}t=t.sibling}s.tail!==null&&Lt()>so&&(e.flags|=128,i=!0,To(s,!1),e.lanes=4194304)}else{if(!i)if(t=pc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),To(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Mt)return Zt(e),null}else 2*Lt()-s.renderingStartTime>so&&n!==1073741824&&(e.flags|=128,i=!0,To(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Lt(),e.sibling=null,n=Et.current,vt(Et,i?n&1|2:n&1),e):(Zt(e),null);case 22:case 23:return Xd(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?An&1073741824&&(Zt(e),e.subtreeFlags&6&&(e.flags|=8192)):Zt(e),null;case 24:return null;case 25:return null}throw Error(ae(156,e.tag))}function yS(t,e){switch(Ad(e),e.tag){case 1:return xn(e.type)&&ac(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return io(),St(_n),St(nn),Ud(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Dd(e),null;case 13:if(St(Et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(ae(340));to()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return St(Et),null;case 4:return io(),null;case 10:return Pd(e.type._context),null;case 22:case 23:return Xd(),null;case 24:return null;default:return null}}var el=!1,en=!1,SS=typeof WeakSet=="function"?WeakSet:Set,Ee=null;function Us(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){bt(t,e,i)}else n.current=null}function sh(t,e,n){try{n()}catch(i){bt(t,e,i)}}var Cm=!1;function MS(t,e){if(Hf=ic,t=Zg(),wd(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,u=0,f=t,h=null;t:for(;;){for(var p;f!==n||r!==0&&f.nodeType!==3||(a=o+r),f!==s||i!==0&&f.nodeType!==3||(l=o+i),f.nodeType===3&&(o+=f.nodeValue.length),(p=f.firstChild)!==null;)h=f,f=p;for(;;){if(f===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++u===i&&(l=o),(p=f.nextSibling)!==null)break;f=h,h=f.parentNode}f=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Gf={focusedElem:t,selectionRange:n},ic=!1,Ee=e;Ee!==null;)if(e=Ee,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Ee=t;else for(;Ee!==null;){e=Ee;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var S=g.memoizedProps,m=g.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?S:ei(e.type,S),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ae(163))}}catch(y){bt(e,e.return,y)}if(t=e.sibling,t!==null){t.return=e.return,Ee=t;break}Ee=e.return}return g=Cm,Cm=!1,g}function Jo(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&sh(e,n,s)}r=r.next}while(r!==i)}}function Gc(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function oh(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Kv(t){var e=t.alternate;e!==null&&(t.alternate=null,Kv(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[di],delete e[ga],delete e[Xf],delete e[rS],delete e[sS])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function qv(t){return t.tag===5||t.tag===3||t.tag===4}function Rm(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||qv(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ah(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=oc));else if(i!==4&&(t=t.child,t!==null))for(ah(t,e,n),t=t.sibling;t!==null;)ah(t,e,n),t=t.sibling}function lh(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for(lh(t,e,n),t=t.sibling;t!==null;)lh(t,e,n),t=t.sibling}var jt=null,ti=!1;function Wi(t,e,n){for(n=n.child;n!==null;)Yv(t,e,n),n=n.sibling}function Yv(t,e,n){if(gi&&typeof gi.onCommitFiberUnmount=="function")try{gi.onCommitFiberUnmount(Uc,n)}catch{}switch(n.tag){case 5:en||Us(n,e);case 6:var i=jt,r=ti;jt=null,Wi(t,e,n),jt=i,ti=r,jt!==null&&(ti?(t=jt,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):jt.removeChild(n.stateNode));break;case 18:jt!==null&&(ti?(t=jt,n=n.stateNode,t.nodeType===8?yu(t.parentNode,n):t.nodeType===1&&yu(t,n),fa(t)):yu(jt,n.stateNode));break;case 4:i=jt,r=ti,jt=n.stateNode.containerInfo,ti=!0,Wi(t,e,n),jt=i,ti=r;break;case 0:case 11:case 14:case 15:if(!en&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&sh(n,e,o),r=r.next}while(r!==i)}Wi(t,e,n);break;case 1:if(!en&&(Us(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){bt(n,e,a)}Wi(t,e,n);break;case 21:Wi(t,e,n);break;case 22:n.mode&1?(en=(i=en)||n.memoizedState!==null,Wi(t,e,n),en=i):Wi(t,e,n);break;default:Wi(t,e,n)}}function bm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new SS),e.forEach(function(i){var r=LS.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function $n(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:jt=a.stateNode,ti=!1;break e;case 3:jt=a.stateNode.containerInfo,ti=!0;break e;case 4:jt=a.stateNode.containerInfo,ti=!0;break e}a=a.return}if(jt===null)throw Error(ae(160));Yv(s,o,r),jt=null,ti=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){bt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)$v(e,t),e=e.sibling}function $v(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if($n(e,t),ci(t),i&4){try{Jo(3,t,t.return),Gc(3,t)}catch(S){bt(t,t.return,S)}try{Jo(5,t,t.return)}catch(S){bt(t,t.return,S)}}break;case 1:$n(e,t),ci(t),i&512&&n!==null&&Us(n,n.return);break;case 5:if($n(e,t),ci(t),i&512&&n!==null&&Us(n,n.return),t.flags&32){var r=t.stateNode;try{aa(r,"")}catch(S){bt(t,t.return,S)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&_g(r,s),Nf(a,o);var c=Nf(a,s);for(o=0;o<l.length;o+=2){var u=l[o],f=l[o+1];u==="style"?Eg(r,f):u==="dangerouslySetInnerHTML"?Sg(r,f):u==="children"?aa(r,f):fd(r,u,f,c)}switch(a){case"input":Cf(r,s);break;case"textarea":xg(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?Vs(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?Vs(r,!!s.multiple,s.defaultValue,!0):Vs(r,!!s.multiple,s.multiple?[]:"",!1))}r[ga]=s}catch(S){bt(t,t.return,S)}}break;case 6:if($n(e,t),ci(t),i&4){if(t.stateNode===null)throw Error(ae(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(S){bt(t,t.return,S)}}break;case 3:if($n(e,t),ci(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{fa(e.containerInfo)}catch(S){bt(t,t.return,S)}break;case 4:$n(e,t),ci(t);break;case 13:$n(e,t),ci(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Wd=Lt())),i&4&&bm(t);break;case 22:if(u=n!==null&&n.memoizedState!==null,t.mode&1?(en=(c=en)||u,$n(e,t),en=c):$n(e,t),ci(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!u&&t.mode&1)for(Ee=t,u=t.child;u!==null;){for(f=Ee=u;Ee!==null;){switch(h=Ee,p=h.child,h.tag){case 0:case 11:case 14:case 15:Jo(4,h,h.return);break;case 1:Us(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(S){bt(i,n,S)}}break;case 5:Us(h,h.return);break;case 22:if(h.memoizedState!==null){Lm(f);continue}}p!==null?(p.return=h,Ee=p):Lm(f)}u=u.sibling}e:for(u=null,f=t;;){if(f.tag===5){if(u===null){u=f;try{r=f.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=f.stateNode,l=f.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Mg("display",o))}catch(S){bt(t,t.return,S)}}}else if(f.tag===6){if(u===null)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(S){bt(t,t.return,S)}}else if((f.tag!==22&&f.tag!==23||f.memoizedState===null||f===t)&&f.child!==null){f.child.return=f,f=f.child;continue}if(f===t)break e;for(;f.sibling===null;){if(f.return===null||f.return===t)break e;u===f&&(u=null),f=f.return}u===f&&(u=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:$n(e,t),ci(t),i&4&&bm(t);break;case 21:break;default:$n(e,t),ci(t)}}function ci(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(qv(n)){var i=n;break e}n=n.return}throw Error(ae(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(aa(r,""),i.flags&=-33);var s=Rm(t);lh(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Rm(t);ah(t,a,o);break;default:throw Error(ae(161))}}catch(l){bt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function ES(t,e,n){Ee=t,Zv(t)}function Zv(t,e,n){for(var i=(t.mode&1)!==0;Ee!==null;){var r=Ee,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||el;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||en;a=el;var c=en;if(el=o,(en=l)&&!c)for(Ee=r;Ee!==null;)o=Ee,l=o.child,o.tag===22&&o.memoizedState!==null?Nm(r):l!==null?(l.return=o,Ee=l):Nm(r);for(;s!==null;)Ee=s,Zv(s),s=s.sibling;Ee=r,el=a,en=c}Pm(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Ee=s):Pm(t)}}function Pm(t){for(;Ee!==null;){var e=Ee;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:en||Gc(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!en)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ei(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&pm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}pm(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var u=c.memoizedState;if(u!==null){var f=u.dehydrated;f!==null&&fa(f)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ae(163))}en||e.flags&512&&oh(e)}catch(h){bt(e,e.return,h)}}if(e===t){Ee=null;break}if(n=e.sibling,n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Lm(t){for(;Ee!==null;){var e=Ee;if(e===t){Ee=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Ee=n;break}Ee=e.return}}function Nm(t){for(;Ee!==null;){var e=Ee;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Gc(4,e)}catch(l){bt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){bt(e,r,l)}}var s=e.return;try{oh(e)}catch(l){bt(e,s,l)}break;case 5:var o=e.return;try{oh(e)}catch(l){bt(e,o,l)}}}catch(l){bt(e,e.return,l)}if(e===t){Ee=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Ee=a;break}Ee=e.return}}var wS=Math.ceil,vc=Hi.ReactCurrentDispatcher,Hd=Hi.ReactCurrentOwner,Wn=Hi.ReactCurrentBatchConfig,tt=0,Ht=null,It=null,qt=0,An=0,Fs=xr(0),kt=0,Ma=null,$r=0,Wc=0,Gd=0,Qo=null,mn=null,Wd=0,so=1/0,Ci=null,_c=!1,ch=null,cr=null,tl=!1,ir=null,xc=0,ea=0,uh=null,Vl=-1,Hl=0;function cn(){return tt&6?Lt():Vl!==-1?Vl:Vl=Lt()}function ur(t){return t.mode&1?tt&2&&qt!==0?qt&-qt:aS.transition!==null?(Hl===0&&(Hl=Ug()),Hl):(t=ut,t!==0||(t=window.event,t=t===void 0?16:Hg(t.type)),t):1}function ai(t,e,n,i){if(50<ea)throw ea=0,uh=null,Error(ae(185));Pa(t,n,i),(!(tt&2)||t!==Ht)&&(t===Ht&&(!(tt&2)&&(Wc|=n),kt===4&&er(t,qt)),yn(t,i),n===1&&tt===0&&!(e.mode&1)&&(so=Lt()+500,Bc&&yr()))}function yn(t,e){var n=t.callbackNode;ay(t,e);var i=nc(t,t===Ht?qt:0);if(i===0)n!==null&&Vp(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&Vp(n),e===1)t.tag===0?oS(Im.bind(null,t)):av(Im.bind(null,t)),nS(function(){!(tt&6)&&yr()}),n=null;else{switch(Fg(i)){case 1:n=gd;break;case 4:n=Ig;break;case 16:n=tc;break;case 536870912:n=Dg;break;default:n=tc}n=s_(n,Jv.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Jv(t,e){if(Vl=-1,Hl=0,tt&6)throw Error(ae(327));var n=t.callbackNode;if(Xs()&&t.callbackNode!==n)return null;var i=nc(t,t===Ht?qt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=yc(t,i);else{e=i;var r=tt;tt|=2;var s=e_();(Ht!==t||qt!==e)&&(Ci=null,so=Lt()+500,Wr(t,e));do try{CS();break}catch(a){Qv(t,a)}while(!0);bd(),vc.current=s,tt=r,It!==null?e=0:(Ht=null,qt=0,e=kt)}if(e!==0){if(e===2&&(r=kf(t),r!==0&&(i=r,e=fh(t,r))),e===1)throw n=Ma,Wr(t,0),er(t,i),yn(t,Lt()),n;if(e===6)er(t,i);else{if(r=t.current.alternate,!(i&30)&&!TS(r)&&(e=yc(t,i),e===2&&(s=kf(t),s!==0&&(i=s,e=fh(t,s))),e===1))throw n=Ma,Wr(t,0),er(t,i),yn(t,Lt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(ae(345));case 2:Nr(t,mn,Ci);break;case 3:if(er(t,i),(i&130023424)===i&&(e=Wd+500-Lt(),10<e)){if(nc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){cn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=jf(Nr.bind(null,t,mn,Ci),e);break}Nr(t,mn,Ci);break;case 4:if(er(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-oi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*wS(i/1960))-i,10<i){t.timeoutHandle=jf(Nr.bind(null,t,mn,Ci),i);break}Nr(t,mn,Ci);break;case 5:Nr(t,mn,Ci);break;default:throw Error(ae(329))}}}return yn(t,Lt()),t.callbackNode===n?Jv.bind(null,t):null}function fh(t,e){var n=Qo;return t.current.memoizedState.isDehydrated&&(Wr(t,e).flags|=256),t=yc(t,e),t!==2&&(e=mn,mn=n,e!==null&&hh(e)),t}function hh(t){mn===null?mn=t:mn.push.apply(mn,t)}function TS(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!li(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function er(t,e){for(e&=~Gd,e&=~Wc,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-oi(e),i=1<<n;t[n]=-1,e&=~i}}function Im(t){if(tt&6)throw Error(ae(327));Xs();var e=nc(t,0);if(!(e&1))return yn(t,Lt()),null;var n=yc(t,e);if(t.tag!==0&&n===2){var i=kf(t);i!==0&&(e=i,n=fh(t,i))}if(n===1)throw n=Ma,Wr(t,0),er(t,e),yn(t,Lt()),n;if(n===6)throw Error(ae(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Nr(t,mn,Ci),yn(t,Lt()),null}function jd(t,e){var n=tt;tt|=1;try{return t(e)}finally{tt=n,tt===0&&(so=Lt()+500,Bc&&yr())}}function Zr(t){ir!==null&&ir.tag===0&&!(tt&6)&&Xs();var e=tt;tt|=1;var n=Wn.transition,i=ut;try{if(Wn.transition=null,ut=1,t)return t()}finally{ut=i,Wn.transition=n,tt=e,!(tt&6)&&yr()}}function Xd(){An=Fs.current,St(Fs)}function Wr(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,tS(n)),It!==null)for(n=It.return;n!==null;){var i=n;switch(Ad(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&ac();break;case 3:io(),St(_n),St(nn),Ud();break;case 5:Dd(i);break;case 4:io();break;case 13:St(Et);break;case 19:St(Et);break;case 10:Pd(i.type._context);break;case 22:case 23:Xd()}n=n.return}if(Ht=t,It=t=fr(t.current,null),qt=An=e,kt=0,Ma=null,Gd=Wc=$r=0,mn=Qo=null,zr!==null){for(e=0;e<zr.length;e++)if(n=zr[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}zr=null}return t}function Qv(t,e){do{var n=It;try{if(bd(),Ol.current=gc,mc){for(var i=Tt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}mc=!1}if(Yr=0,Vt=Ft=Tt=null,Zo=!1,xa=0,Hd.current=null,n===null||n.return===null){kt=1,Ma=e,It=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=qt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,u=a,f=u.tag;if(!(u.mode&1)&&(f===0||f===11||f===15)){var h=u.alternate;h?(u.updateQueue=h.updateQueue,u.memoizedState=h.memoizedState,u.lanes=h.lanes):(u.updateQueue=null,u.memoizedState=null)}var p=ym(o);if(p!==null){p.flags&=-257,Sm(p,o,a,s,e),p.mode&1&&xm(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var S=new Set;S.add(l),e.updateQueue=S}else g.add(l);break e}else{if(!(e&1)){xm(s,c,e),Kd();break e}l=Error(ae(426))}}else if(Mt&&a.mode&1){var m=ym(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Sm(m,o,a,s,e),Cd(ro(l,a));break e}}s=l=ro(l,a),kt!==4&&(kt=2),Qo===null?Qo=[s]:Qo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Fv(s,l,e);dm(s,d);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(cr===null||!cr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=kv(s,a,e);dm(s,y);break e}}s=s.return}while(s!==null)}n_(n)}catch(b){e=b,It===n&&n!==null&&(It=n=n.return);continue}break}while(!0)}function e_(){var t=vc.current;return vc.current=gc,t===null?gc:t}function Kd(){(kt===0||kt===3||kt===2)&&(kt=4),Ht===null||!($r&268435455)&&!(Wc&268435455)||er(Ht,qt)}function yc(t,e){var n=tt;tt|=2;var i=e_();(Ht!==t||qt!==e)&&(Ci=null,Wr(t,e));do try{AS();break}catch(r){Qv(t,r)}while(!0);if(bd(),tt=n,vc.current=i,It!==null)throw Error(ae(261));return Ht=null,qt=0,kt}function AS(){for(;It!==null;)t_(It)}function CS(){for(;It!==null&&!Jx();)t_(It)}function t_(t){var e=r_(t.alternate,t,An);t.memoizedProps=t.pendingProps,e===null?n_(t):It=e,Hd.current=null}function n_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=yS(n,e),n!==null){n.flags&=32767,It=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{kt=6,It=null;return}}else if(n=xS(n,e,An),n!==null){It=n;return}if(e=e.sibling,e!==null){It=e;return}It=e=t}while(e!==null);kt===0&&(kt=5)}function Nr(t,e,n){var i=ut,r=Wn.transition;try{Wn.transition=null,ut=1,RS(t,e,n,i)}finally{Wn.transition=r,ut=i}return null}function RS(t,e,n,i){do Xs();while(ir!==null);if(tt&6)throw Error(ae(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(ae(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(ly(t,s),t===Ht&&(It=Ht=null,qt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||tl||(tl=!0,s_(tc,function(){return Xs(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Wn.transition,Wn.transition=null;var o=ut;ut=1;var a=tt;tt|=4,Hd.current=null,MS(t,n),$v(n,t),qy(Gf),ic=!!Hf,Gf=Hf=null,t.current=n,ES(n),Qx(),tt=a,ut=o,Wn.transition=s}else t.current=n;if(tl&&(tl=!1,ir=t,xc=r),s=t.pendingLanes,s===0&&(cr=null),ny(n.stateNode),yn(t,Lt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(_c)throw _c=!1,t=ch,ch=null,t;return xc&1&&t.tag!==0&&Xs(),s=t.pendingLanes,s&1?t===uh?ea++:(ea=0,uh=t):ea=0,yr(),null}function Xs(){if(ir!==null){var t=Fg(xc),e=Wn.transition,n=ut;try{if(Wn.transition=null,ut=16>t?16:t,ir===null)var i=!1;else{if(t=ir,ir=null,xc=0,tt&6)throw Error(ae(331));var r=tt;for(tt|=4,Ee=t.current;Ee!==null;){var s=Ee,o=s.child;if(Ee.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Ee=c;Ee!==null;){var u=Ee;switch(u.tag){case 0:case 11:case 15:Jo(8,u,s)}var f=u.child;if(f!==null)f.return=u,Ee=f;else for(;Ee!==null;){u=Ee;var h=u.sibling,p=u.return;if(Kv(u),u===c){Ee=null;break}if(h!==null){h.return=p,Ee=h;break}Ee=p}}}var g=s.alternate;if(g!==null){var S=g.child;if(S!==null){g.child=null;do{var m=S.sibling;S.sibling=null,S=m}while(S!==null)}}Ee=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Ee=o;else e:for(;Ee!==null;){if(s=Ee,s.flags&2048)switch(s.tag){case 0:case 11:case 15:Jo(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Ee=d;break e}Ee=s.return}}var v=t.current;for(Ee=v;Ee!==null;){o=Ee;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Ee=_;else e:for(o=v;Ee!==null;){if(a=Ee,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Gc(9,a)}}catch(b){bt(a,a.return,b)}if(a===o){Ee=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,Ee=y;break e}Ee=a.return}}if(tt=r,yr(),gi&&typeof gi.onPostCommitFiberRoot=="function")try{gi.onPostCommitFiberRoot(Uc,t)}catch{}i=!0}return i}finally{ut=n,Wn.transition=e}}return!1}function Dm(t,e,n){e=ro(n,e),e=Fv(t,e,1),t=lr(t,e,1),e=cn(),t!==null&&(Pa(t,1,e),yn(t,e))}function bt(t,e,n){if(t.tag===3)Dm(t,t,n);else for(;e!==null;){if(e.tag===3){Dm(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(cr===null||!cr.has(i))){t=ro(n,t),t=kv(e,t,1),e=lr(e,t,1),t=cn(),e!==null&&(Pa(e,1,t),yn(e,t));break}}e=e.return}}function bS(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=cn(),t.pingedLanes|=t.suspendedLanes&n,Ht===t&&(qt&n)===n&&(kt===4||kt===3&&(qt&130023424)===qt&&500>Lt()-Wd?Wr(t,0):Gd|=n),yn(t,e)}function i_(t,e){e===0&&(t.mode&1?(e=ja,ja<<=1,!(ja&130023424)&&(ja=4194304)):e=1);var n=cn();t=Oi(t,e),t!==null&&(Pa(t,e,n),yn(t,n))}function PS(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),i_(t,n)}function LS(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(ae(314))}i!==null&&i.delete(e),i_(t,n)}var r_;r_=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||_n.current)gn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return gn=!1,_S(t,e,n);gn=!!(t.flags&131072)}else gn=!1,Mt&&e.flags&1048576&&lv(e,uc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;Bl(t,e),t=e.pendingProps;var r=eo(e,nn.current);js(e,n),r=kd(null,e,i,t,r,n);var s=Od();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,xn(i)?(s=!0,lc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Nd(e),r.updater=Hc,e.stateNode=r,r._reactInternals=e,Jf(e,i,t,n),e=th(null,e,i,!0,s,n)):(e.tag=0,Mt&&s&&Td(e),ln(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(Bl(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=IS(i),t=ei(i,t),r){case 0:e=eh(null,e,i,t,n);break e;case 1:e=wm(null,e,i,t,n);break e;case 11:e=Mm(null,e,i,t,n);break e;case 14:e=Em(null,e,i,ei(i.type,t),n);break e}throw Error(ae(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),eh(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),wm(t,e,i,r,n);case 3:e:{if(Vv(e),t===null)throw Error(ae(387));i=e.pendingProps,s=e.memoizedState,r=s.element,pv(t,e),dc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=ro(Error(ae(423)),e),e=Tm(t,e,i,n,r);break e}else if(i!==r){r=ro(Error(ae(424)),e),e=Tm(t,e,i,n,r);break e}else for(bn=ar(e.stateNode.containerInfo.firstChild),Pn=e,Mt=!0,ni=null,n=hv(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(to(),i===r){e=zi(t,e,n);break e}ln(t,e,i,n)}e=e.child}return e;case 5:return mv(e),t===null&&Yf(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Wf(i,r)?o=null:s!==null&&Wf(i,s)&&(e.flags|=32),Bv(t,e),ln(t,e,o,n),e.child;case 6:return t===null&&Yf(e),null;case 13:return Hv(t,e,n);case 4:return Id(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=no(e,null,i,n):ln(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Mm(t,e,i,r,n);case 7:return ln(t,e,e.pendingProps,n),e.child;case 8:return ln(t,e,e.pendingProps.children,n),e.child;case 12:return ln(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,vt(fc,i._currentValue),i._currentValue=o,s!==null)if(li(s.value,o)){if(s.children===r.children&&!_n.current){e=zi(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Ii(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var u=c.pending;u===null?l.next=l:(l.next=u.next,u.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),$f(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ae(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),$f(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}ln(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,js(e,n),r=Kn(r),i=i(r),e.flags|=1,ln(t,e,i,n),e.child;case 14:return i=e.type,r=ei(i,e.pendingProps),r=ei(i.type,r),Em(t,e,i,r,n);case 15:return Ov(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ei(i,r),Bl(t,e),e.tag=1,xn(i)?(t=!0,lc(e)):t=!1,js(e,n),Uv(e,i,r),Jf(e,i,r,n),th(null,e,i,!0,t,n);case 19:return Gv(t,e,n);case 22:return zv(t,e,n)}throw Error(ae(156,e.tag))};function s_(t,e){return Ng(t,e)}function NS(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(t,e,n,i){return new NS(t,e,n,i)}function qd(t){return t=t.prototype,!(!t||!t.isReactComponent)}function IS(t){if(typeof t=="function")return qd(t)?1:0;if(t!=null){if(t=t.$$typeof,t===dd)return 11;if(t===pd)return 14}return 2}function fr(t,e){var n=t.alternate;return n===null?(n=Hn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Gl(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")qd(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case As:return jr(n.children,r,s,e);case hd:o=8,r|=8;break;case Mf:return t=Hn(12,n,e,r|2),t.elementType=Mf,t.lanes=s,t;case Ef:return t=Hn(13,n,e,r),t.elementType=Ef,t.lanes=s,t;case wf:return t=Hn(19,n,e,r),t.elementType=wf,t.lanes=s,t;case mg:return jc(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case dg:o=10;break e;case pg:o=9;break e;case dd:o=11;break e;case pd:o=14;break e;case Zi:o=16,i=null;break e}throw Error(ae(130,t==null?t:typeof t,""))}return e=Hn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function jr(t,e,n,i){return t=Hn(7,t,i,e),t.lanes=n,t}function jc(t,e,n,i){return t=Hn(22,t,i,e),t.elementType=mg,t.lanes=n,t.stateNode={isHidden:!1},t}function Ru(t,e,n){return t=Hn(6,t,null,e),t.lanes=n,t}function bu(t,e,n){return e=Hn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function DS(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=cu(0),this.expirationTimes=cu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=cu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Yd(t,e,n,i,r,s,o,a,l){return t=new DS(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Hn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nd(s),t}function US(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ts,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function o_(t){if(!t)return mr;t=t._reactInternals;e:{if(ns(t)!==t||t.tag!==1)throw Error(ae(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(xn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ae(171))}if(t.tag===1){var n=t.type;if(xn(n))return ov(t,n,e)}return e}function a_(t,e,n,i,r,s,o,a,l){return t=Yd(n,i,!0,t,r,s,o,a,l),t.context=o_(null),n=t.current,i=cn(),r=ur(n),s=Ii(i,r),s.callback=e??null,lr(n,s,r),t.current.lanes=r,Pa(t,r,i),yn(t,i),t}function Xc(t,e,n,i){var r=e.current,s=cn(),o=ur(r);return n=o_(n),e.context===null?e.context=n:e.pendingContext=n,e=Ii(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=lr(r,e,o),t!==null&&(ai(t,r,o,s),kl(t,r,o)),o}function Sc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Um(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function $d(t,e){Um(t,e),(t=t.alternate)&&Um(t,e)}function FS(){return null}var l_=typeof reportError=="function"?reportError:function(t){console.error(t)};function Zd(t){this._internalRoot=t}Kc.prototype.render=Zd.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(ae(409));Xc(t,e,null,null)};Kc.prototype.unmount=Zd.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;Zr(function(){Xc(null,t,null,null)}),e[ki]=null}};function Kc(t){this._internalRoot=t}Kc.prototype.unstable_scheduleHydration=function(t){if(t){var e=zg();t={blockedOn:null,target:t,priority:e};for(var n=0;n<Qi.length&&e!==0&&e<Qi[n].priority;n++);Qi.splice(n,0,t),n===0&&Vg(t)}};function Jd(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function qc(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function Fm(){}function kS(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=Sc(o);s.call(c)}}var o=a_(e,i,t,0,null,!1,!1,"",Fm);return t._reactRootContainer=o,t[ki]=o.current,pa(t.nodeType===8?t.parentNode:t),Zr(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=Sc(l);a.call(c)}}var l=Yd(t,0,!1,null,null,!1,!1,"",Fm);return t._reactRootContainer=l,t[ki]=l.current,pa(t.nodeType===8?t.parentNode:t),Zr(function(){Xc(e,l,n,i)}),l}function Yc(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Sc(o);a.call(l)}}Xc(e,o,t,r)}else o=kS(n,e,t,r,i);return Sc(o)}kg=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=Ho(e.pendingLanes);n!==0&&(vd(e,n|1),yn(e,Lt()),!(tt&6)&&(so=Lt()+500,yr()))}break;case 13:Zr(function(){var i=Oi(t,1);if(i!==null){var r=cn();ai(i,t,1,r)}}),$d(t,1)}};_d=function(t){if(t.tag===13){var e=Oi(t,134217728);if(e!==null){var n=cn();ai(e,t,134217728,n)}$d(t,134217728)}};Og=function(t){if(t.tag===13){var e=ur(t),n=Oi(t,e);if(n!==null){var i=cn();ai(n,t,e,i)}$d(t,e)}};zg=function(){return ut};Bg=function(t,e){var n=ut;try{return ut=t,e()}finally{ut=n}};Df=function(t,e,n){switch(e){case"input":if(Cf(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=zc(i);if(!r)throw Error(ae(90));vg(i),Cf(i,r)}}}break;case"textarea":xg(t,n);break;case"select":e=n.value,e!=null&&Vs(t,!!n.multiple,e,!1)}};Ag=jd;Cg=Zr;var OS={usingClientEntryPoint:!1,Events:[Na,Ps,zc,wg,Tg,jd]},Ao={findFiberByHostInstance:Or,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},zS={bundleType:Ao.bundleType,version:Ao.version,rendererPackageName:Ao.rendererPackageName,rendererConfig:Ao.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Hi.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Pg(t),t===null?null:t.stateNode},findFiberByHostInstance:Ao.findFiberByHostInstance||FS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var nl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!nl.isDisabled&&nl.supportsFiber)try{Uc=nl.inject(zS),gi=nl}catch{}}Nn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=OS;Nn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Jd(e))throw Error(ae(200));return US(t,e,null,n)};Nn.createRoot=function(t,e){if(!Jd(t))throw Error(ae(299));var n=!1,i="",r=l_;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Yd(t,1,!1,null,null,n,!1,i,r),t[ki]=e.current,pa(t.nodeType===8?t.parentNode:t),new Zd(e)};Nn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(ae(188)):(t=Object.keys(t).join(","),Error(ae(268,t)));return t=Pg(e),t=t===null?null:t.stateNode,t};Nn.flushSync=function(t){return Zr(t)};Nn.hydrate=function(t,e,n){if(!qc(e))throw Error(ae(200));return Yc(null,t,e,!0,n)};Nn.hydrateRoot=function(t,e,n){if(!Jd(t))throw Error(ae(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=l_;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=a_(e,null,t,1,n??null,r,!1,s,o),t[ki]=e.current,pa(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new Kc(e)};Nn.render=function(t,e,n){if(!qc(e))throw Error(ae(200));return Yc(null,t,e,!1,n)};Nn.unmountComponentAtNode=function(t){if(!qc(t))throw Error(ae(40));return t._reactRootContainer?(Zr(function(){Yc(null,null,t,!1,function(){t._reactRootContainer=null,t[ki]=null})}),!0):!1};Nn.unstable_batchedUpdates=jd;Nn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!qc(n))throw Error(ae(200));if(t==null||t._reactInternals===void 0)throw Error(ae(38));return Yc(t,e,n,!1,i)};Nn.version="18.3.1-next-f1338f8080-20240426";function c_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c_)}catch(t){console.error(t)}}c_(),cg.exports=Nn;var BS=cg.exports,u_,km=BS;u_=km.createRoot,km.hydrateRoot;/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qd="169",VS=0,Om=1,HS=2,f_=1,h_=2,Ai=3,gr=0,Sn=1,Bn=2,hr=0,Ks=1,Ea=2,zm=3,Bm=4,GS=5,Ur=100,WS=101,jS=102,XS=103,KS=104,qS=200,YS=201,$S=202,ZS=203,dh=204,ph=205,JS=206,QS=207,eM=208,tM=209,nM=210,iM=211,rM=212,sM=213,oM=214,mh=0,gh=1,vh=2,oo=3,_h=4,xh=5,yh=6,Sh=7,d_=0,aM=1,lM=2,dr=0,cM=1,uM=2,fM=3,hM=4,dM=5,pM=6,p_=7,m_=300,ao=301,lo=302,Mh=303,Eh=304,$c=306,Xr=1e3,Vr=1001,wh=1002,Gn=1003,mM=1004,il=1005,ri=1006,Pu=1007,Hr=1008,Bi=1009,g_=1010,v_=1011,wa=1012,ep=1013,Jr=1014,Li=1015,Da=1016,tp=1017,np=1018,co=1020,__=35902,x_=1021,y_=1022,si=1023,S_=1024,M_=1025,qs=1026,uo=1027,E_=1028,ip=1029,w_=1030,rp=1031,sp=1033,Wl=33776,jl=33777,Xl=33778,Kl=33779,Th=35840,Ah=35841,Ch=35842,Rh=35843,bh=36196,Ph=37492,Lh=37496,Nh=37808,Ih=37809,Dh=37810,Uh=37811,Fh=37812,kh=37813,Oh=37814,zh=37815,Bh=37816,Vh=37817,Hh=37818,Gh=37819,Wh=37820,jh=37821,ql=36492,Xh=36494,Kh=36495,T_=36283,qh=36284,Yh=36285,$h=36286,gM=3200,vM=3201,A_=0,_M=1,tr="",Cn="srgb",Sr="srgb-linear",op="display-p3",Zc="display-p3-linear",Mc="linear",yt="srgb",Ec="rec709",wc="p3",ss=7680,Vm=519,xM=512,yM=513,SM=514,C_=515,MM=516,EM=517,wM=518,TM=519,Zh=35044,Hm="300 es",Ni=2e3,Tc=2001;class go{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Jt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lu=Math.PI/180,Jh=180/Math.PI;function Di(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Jt[t&255]+Jt[t>>8&255]+Jt[t>>16&255]+Jt[t>>24&255]+"-"+Jt[e&255]+Jt[e>>8&255]+"-"+Jt[e>>16&15|64]+Jt[e>>24&255]+"-"+Jt[n&63|128]+Jt[n>>8&255]+"-"+Jt[n>>16&255]+Jt[n>>24&255]+Jt[i&255]+Jt[i>>8&255]+Jt[i>>16&255]+Jt[i>>24&255]).toLowerCase()}function Kt(t,e,n){return Math.max(e,Math.min(n,t))}function AM(t,e){return(t%e+e)%e}function Nu(t,e,n){return(1-n)*t+n*e}function pi(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function ft(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class ue{constructor(e=0,n=0){ue.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class qe{constructor(e,n,i,r,s,o,a,l,c){qe.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],h=i[2],p=i[5],g=i[8],S=r[0],m=r[3],d=r[6],v=r[1],_=r[4],y=r[7],b=r[2],C=r[5],w=r[8];return s[0]=o*S+a*v+l*b,s[3]=o*m+a*_+l*C,s[6]=o*d+a*y+l*w,s[1]=c*S+u*v+f*b,s[4]=c*m+u*_+f*C,s[7]=c*d+u*y+f*w,s[2]=h*S+p*v+g*b,s[5]=h*m+p*_+g*C,s[8]=h*d+p*y+g*w,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,h=a*l-u*s,p=c*s-o*l,g=n*f+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const S=1/g;return e[0]=f*S,e[1]=(r*c-u*i)*S,e[2]=(a*i-r*o)*S,e[3]=h*S,e[4]=(u*n-r*l)*S,e[5]=(r*s-a*n)*S,e[6]=p*S,e[7]=(i*l-c*n)*S,e[8]=(o*n-i*s)*S,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(Iu.makeScale(e,n)),this}rotate(e){return this.premultiply(Iu.makeRotation(-e)),this}translate(e,n){return this.premultiply(Iu.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Iu=new qe;function R_(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Ac(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function CM(){const t=Ac("canvas");return t.style.display="block",t}const Gm={};function Yl(t){t in Gm||(Gm[t]=!0,console.warn(t))}function RM(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}function bM(t){const e=t.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function PM(t){const e=t.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Wm=new qe().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),jm=new qe().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Co={[Sr]:{transfer:Mc,primaries:Ec,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t,fromReference:t=>t},[Cn]:{transfer:yt,primaries:Ec,luminanceCoefficients:[.2126,.7152,.0722],toReference:t=>t.convertSRGBToLinear(),fromReference:t=>t.convertLinearToSRGB()},[Zc]:{transfer:Mc,primaries:wc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.applyMatrix3(jm),fromReference:t=>t.applyMatrix3(Wm)},[op]:{transfer:yt,primaries:wc,luminanceCoefficients:[.2289,.6917,.0793],toReference:t=>t.convertSRGBToLinear().applyMatrix3(jm),fromReference:t=>t.applyMatrix3(Wm).convertLinearToSRGB()}},LM=new Set([Sr,Zc]),ot={enabled:!0,_workingColorSpace:Sr,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(t){if(!LM.has(t))throw new Error(`Unsupported working color space, "${t}".`);this._workingColorSpace=t},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=Co[e].toReference,r=Co[n].fromReference;return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this._workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this._workingColorSpace)},getPrimaries:function(t){return Co[t].primaries},getTransfer:function(t){return t===tr?Mc:Co[t].transfer},getLuminanceCoefficients:function(t,e=this._workingColorSpace){return t.fromArray(Co[e].luminanceCoefficients)}};function Ys(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Du(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let os;class NM{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{os===void 0&&(os=Ac("canvas")),os.width=e.width,os.height=e.height;const i=os.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=os}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Ac("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Ys(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ys(n[i]/255)*255):n[i]=Ys(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let IM=0;class b_{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=Di(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Uu(r[o].image)):s.push(Uu(r[o]))}else s=Uu(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function Uu(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?NM.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let DM=0;class un extends go{constructor(e=un.DEFAULT_IMAGE,n=un.DEFAULT_MAPPING,i=Vr,r=Vr,s=ri,o=Hr,a=si,l=Bi,c=un.DEFAULT_ANISOTROPY,u=tr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:DM++}),this.uuid=Di(),this.name="",this.source=new b_(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ue(0,0),this.repeat=new ue(1,1),this.center=new ue(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==m_)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xr:e.x=e.x-Math.floor(e.x);break;case Vr:e.x=e.x<0?0:1;break;case wh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xr:e.y=e.y-Math.floor(e.y);break;case Vr:e.y=e.y<0?0:1;break;case wh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}un.DEFAULT_IMAGE=null;un.DEFAULT_MAPPING=m_;un.DEFAULT_ANISOTROPY=1;class ht{constructor(e=0,n=0,i=0,r=1){ht.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],h=l[1],p=l[5],g=l[9],S=l[2],m=l[6],d=l[10];if(Math.abs(u-h)<.01&&Math.abs(f-S)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+S)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,y=(p+1)/2,b=(d+1)/2,C=(u+h)/4,w=(f+S)/4,L=(g+m)/4;return _>y&&_>b?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=C/i,s=w/i):y>b?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=C/r,s=L/r):b<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(b),i=w/s,r=L/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(f-S)*(f-S)+(h-u)*(h-u));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(f-S)/v,this.z=(h-u)/v,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class UM extends go{constructor(e=1,n=1,i={}){super(),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new ht(0,0,e,n),this.scissorTest=!1,this.viewport=new ht(0,0,e,n);const r={width:e,height:n,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ri,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const s=new un(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);s.flipY=!1,s.generateMipmaps=i.generateMipmaps,s.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i;this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let i=0,r=e.textures.length;i<r;i++)this.textures[i]=e.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new b_(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Qr extends UM{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class P_ extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class FM extends un{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Gn,this.minFilter=Gn,this.wrapR=Vr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ua{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const h=s[o+0],p=s[o+1],g=s[o+2],S=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=S;return}if(f!==S||l!==h||c!==p||u!==g){let m=1-a;const d=l*h+c*p+u*g+f*S,v=d>=0?1:-1,_=1-d*d;if(_>Number.EPSILON){const b=Math.sqrt(_),C=Math.atan2(b,d*v);m=Math.sin(m*C)/b,a=Math.sin(a*C)/b}const y=a*v;if(l=l*m+h*y,c=c*m+p*y,u=u*m+g*y,f=f*m+S*y,m===1-a){const b=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=b,c*=b,u*=b,f*=b}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*p-c*h,e[n+1]=l*g+u*h+c*f-a*p,e[n+2]=c*g+u*p+a*h-l*f,e[n+3]=u*g-a*f-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"YXZ":this._x=h*u*f+c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"ZXY":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f-h*p*g;break;case"ZYX":this._x=h*u*f-c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f+h*p*g;break;case"YZX":this._x=h*u*f+c*p*g,this._y=c*p*f+h*u*g,this._z=c*u*g-h*p*f,this._w=c*u*f-h*p*g;break;case"XZY":this._x=h*u*f-c*p*g,this._y=c*p*f-h*u*g,this._z=c*u*g+h*p*f,this._w=c*u*f+h*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],h=i+a+f;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(u-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>f){const p=2*Math.sqrt(1+i-a-f);this._w=(u-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>f){const p=2*Math.sqrt(1+a-i-f);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+f-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Kt(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-n;return this._w=p*o+n*this._w,this._x=p*i+n*this._x,this._y=p*r+n*this._y,this._z=p*s+n*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,h=Math.sin(n*u)/c;return this._w=o*f+this._w*h,this._x=i*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class N{constructor(e=0,n=0,i=0){N.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(Xm.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(Xm.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),u=2*(a*n-s*r),f=2*(s*i-o*n);return this.x=n+l*c+o*f-a*u,this.y=i+l*u+a*c-s*f,this.z=r+l*f+s*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Fu.copy(this).projectOnVector(e),this.sub(Fu)}reflect(e){return this.sub(Fu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Kt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Fu=new N,Xm=new Ua;class Fa{constructor(e=new N(1/0,1/0,1/0),n=new N(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Zn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Zn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Zn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zn):Zn.fromBufferAttribute(s,o),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),rl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),rl.copy(i.boundingBox)),rl.applyMatrix4(e.matrixWorld),this.union(rl)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ro),sl.subVectors(this.max,Ro),as.subVectors(e.a,Ro),ls.subVectors(e.b,Ro),cs.subVectors(e.c,Ro),ji.subVectors(ls,as),Xi.subVectors(cs,ls),wr.subVectors(as,cs);let n=[0,-ji.z,ji.y,0,-Xi.z,Xi.y,0,-wr.z,wr.y,ji.z,0,-ji.x,Xi.z,0,-Xi.x,wr.z,0,-wr.x,-ji.y,ji.x,0,-Xi.y,Xi.x,0,-wr.y,wr.x,0];return!ku(n,as,ls,cs,sl)||(n=[1,0,0,0,1,0,0,0,1],!ku(n,as,ls,cs,sl))?!1:(ol.crossVectors(ji,Xi),n=[ol.x,ol.y,ol.z],ku(n,as,ls,cs,sl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Si=[new N,new N,new N,new N,new N,new N,new N,new N],Zn=new N,rl=new Fa,as=new N,ls=new N,cs=new N,ji=new N,Xi=new N,wr=new N,Ro=new N,sl=new N,ol=new N,Tr=new N;function ku(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Tr.fromArray(t,s);const a=r.x*Math.abs(Tr.x)+r.y*Math.abs(Tr.y)+r.z*Math.abs(Tr.z),l=e.dot(Tr),c=n.dot(Tr),u=i.dot(Tr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const kM=new Fa,bo=new N,Ou=new N;class ap{constructor(e=new N,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):kM.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bo.subVectors(e,this.center);const n=bo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(bo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ou.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bo.copy(e.center).add(Ou)),this.expandByPoint(bo.copy(e.center).sub(Ou))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Mi=new N,zu=new N,al=new N,Ki=new N,Bu=new N,ll=new N,Vu=new N;class OM{constructor(e=new N,n=new N(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Mi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Mi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Mi.copy(this.origin).addScaledVector(this.direction,n),Mi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){zu.copy(e).add(n).multiplyScalar(.5),al.copy(n).sub(e).normalize(),Ki.copy(this.origin).sub(zu);const s=e.distanceTo(n)*.5,o=-this.direction.dot(al),a=Ki.dot(this.direction),l=-Ki.dot(al),c=Ki.lengthSq(),u=Math.abs(1-o*o);let f,h,p,g;if(u>0)if(f=o*l-a,h=o*a-l,g=s*u,f>=0)if(h>=-g)if(h<=g){const S=1/u;f*=S,h*=S,p=f*(f+o*h+2*a)+h*(o*f+h+2*l)+c}else h=s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h=-s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;else h<=-g?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c):h<=g?(f=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-l),s),p=-f*f+h*(h+2*l)+c);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),p=-f*f+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(zu).addScaledVector(al,h),p}intersectSphere(e,n){Mi.subVectors(e.center,this.origin);const i=Mi.dot(this.direction),r=Mi.dot(Mi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,l=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,l=(e.min.z-h.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Mi)!==null}intersectTriangle(e,n,i,r,s){Bu.subVectors(n,e),ll.subVectors(i,e),Vu.crossVectors(Bu,ll);let o=this.direction.dot(Vu),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,e);const l=a*this.direction.dot(ll.crossVectors(Ki,ll));if(l<0)return null;const c=a*this.direction.dot(Bu.cross(Ki));if(c<0||l+c>o)return null;const u=-a*Ki.dot(Vu);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dt{constructor(e,n,i,r,s,o,a,l,c,u,f,h,p,g,S,m){dt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,h,p,g,S,m)}set(e,n,i,r,s,o,a,l,c,u,f,h,p,g,S,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=u,d[10]=f,d[14]=h,d[3]=p,d[7]=g,d[11]=S,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new dt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/us.setFromMatrixColumn(e,0).length(),s=1/us.setFromMatrixColumn(e,1).length(),o=1/us.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,p=o*f,g=a*u,S=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=p+g*c,n[5]=h-S*c,n[9]=-a*l,n[2]=S-h*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*u,p=l*f,g=c*u,S=c*f;n[0]=h+S*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=p*a-g,n[6]=S+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*u,p=l*f,g=c*u,S=c*f;n[0]=h-S*a,n[4]=-o*f,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*u,n[9]=S-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*u,p=o*f,g=a*u,S=a*f;n[0]=l*u,n[4]=g*c-p,n[8]=h*c+S,n[1]=l*f,n[5]=S*c+h,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,S=a*c;n[0]=l*u,n[4]=S-h*f,n[8]=g*f+p,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=p*f+g,n[10]=h-S*f}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,S=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=h*f+S,n[5]=o*u,n[9]=p*f-g,n[2]=g*f-p,n[6]=a*u,n[10]=S*f+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zM,e,BM)}lookAt(e,n,i){const r=this.elements;return wn.subVectors(e,n),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),qi.crossVectors(i,wn),qi.lengthSq()===0&&(Math.abs(i.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),qi.crossVectors(i,wn)),qi.normalize(),cl.crossVectors(wn,qi),r[0]=qi.x,r[4]=cl.x,r[8]=wn.x,r[1]=qi.y,r[5]=cl.y,r[9]=wn.y,r[2]=qi.z,r[6]=cl.z,r[10]=wn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],h=i[9],p=i[13],g=i[2],S=i[6],m=i[10],d=i[14],v=i[3],_=i[7],y=i[11],b=i[15],C=r[0],w=r[4],L=r[8],G=r[12],x=r[1],E=r[5],z=r[9],B=r[13],j=r[2],Q=r[6],H=r[10],ee=r[14],I=r[3],q=r[7],J=r[11],le=r[15];return s[0]=o*C+a*x+l*j+c*I,s[4]=o*w+a*E+l*Q+c*q,s[8]=o*L+a*z+l*H+c*J,s[12]=o*G+a*B+l*ee+c*le,s[1]=u*C+f*x+h*j+p*I,s[5]=u*w+f*E+h*Q+p*q,s[9]=u*L+f*z+h*H+p*J,s[13]=u*G+f*B+h*ee+p*le,s[2]=g*C+S*x+m*j+d*I,s[6]=g*w+S*E+m*Q+d*q,s[10]=g*L+S*z+m*H+d*J,s[14]=g*G+S*B+m*ee+d*le,s[3]=v*C+_*x+y*j+b*I,s[7]=v*w+_*E+y*Q+b*q,s[11]=v*L+_*z+y*H+b*J,s[15]=v*G+_*B+y*ee+b*le,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],h=e[10],p=e[14],g=e[3],S=e[7],m=e[11],d=e[15];return g*(+s*l*f-r*c*f-s*a*h+i*c*h+r*a*p-i*l*p)+S*(+n*l*p-n*c*h+s*o*h-r*o*p+r*c*u-s*l*u)+m*(+n*c*f-n*a*p-s*o*f+i*o*p+s*a*u-i*c*u)+d*(-r*a*u-n*l*f+n*a*h+r*o*f-i*o*h+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],h=e[10],p=e[11],g=e[12],S=e[13],m=e[14],d=e[15],v=f*m*c-S*h*c+S*l*p-a*m*p-f*l*d+a*h*d,_=g*h*c-u*m*c-g*l*p+o*m*p+u*l*d-o*h*d,y=u*S*c-g*f*c+g*a*p-o*S*p-u*a*d+o*f*d,b=g*f*l-u*S*l-g*a*h+o*S*h+u*a*m-o*f*m,C=n*v+i*_+r*y+s*b;if(C===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/C;return e[0]=v*w,e[1]=(S*h*s-f*m*s-S*r*p+i*m*p+f*r*d-i*h*d)*w,e[2]=(a*m*s-S*l*s+S*r*c-i*m*c-a*r*d+i*l*d)*w,e[3]=(f*l*s-a*h*s-f*r*c+i*h*c+a*r*p-i*l*p)*w,e[4]=_*w,e[5]=(u*m*s-g*h*s+g*r*p-n*m*p-u*r*d+n*h*d)*w,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*d-n*l*d)*w,e[7]=(o*h*s-u*l*s+u*r*c-n*h*c-o*r*p+n*l*p)*w,e[8]=y*w,e[9]=(g*f*s-u*S*s-g*i*p+n*S*p+u*i*d-n*f*d)*w,e[10]=(o*S*s-g*a*s+g*i*c-n*S*c-o*i*d+n*a*d)*w,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*p-n*a*p)*w,e[12]=b*w,e[13]=(u*S*r-g*f*r+g*i*h-n*S*h-u*i*m+n*f*m)*w,e[14]=(g*a*r-o*S*r-g*i*l+n*S*l+o*i*m-n*a*m)*w,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*h+n*a*h)*w,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,h=s*c,p=s*u,g=s*f,S=o*u,m=o*f,d=a*f,v=l*c,_=l*u,y=l*f,b=i.x,C=i.y,w=i.z;return r[0]=(1-(S+d))*b,r[1]=(p+y)*b,r[2]=(g-_)*b,r[3]=0,r[4]=(p-y)*C,r[5]=(1-(h+d))*C,r[6]=(m+v)*C,r[7]=0,r[8]=(g+_)*w,r[9]=(m-v)*w,r[10]=(1-(h+S))*w,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=us.set(r[0],r[1],r[2]).length();const o=us.set(r[4],r[5],r[6]).length(),a=us.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Jn.copy(this);const c=1/s,u=1/o,f=1/a;return Jn.elements[0]*=c,Jn.elements[1]*=c,Jn.elements[2]*=c,Jn.elements[4]*=u,Jn.elements[5]*=u,Jn.elements[6]*=u,Jn.elements[8]*=f,Jn.elements[9]*=f,Jn.elements[10]*=f,n.setFromRotationMatrix(Jn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ni){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),h=(i+r)/(i-r);let p,g;if(a===Ni)p=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===Tc)p=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ni){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),h=(n+e)*c,p=(i+r)*u;let g,S;if(a===Ni)g=(o+s)*f,S=-2*f;else if(a===Tc)g=s*f,S=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=S,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const us=new N,Jn=new dt,zM=new N(0,0,0),BM=new N(1,1,1),qi=new N,cl=new N,wn=new N,Km=new dt,qm=new Ua;class _i{constructor(e=0,n=0,i=0,r=_i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(Kt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Kt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Kt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Kt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Kt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Kt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Km.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Km,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return qm.setFromEuler(this),this.setFromQuaternion(qm,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}_i.DEFAULT_ORDER="XYZ";class L_{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let VM=0;const Ym=new N,fs=new Ua,Ei=new dt,ul=new N,Po=new N,HM=new N,GM=new Ua,$m=new N(1,0,0),Zm=new N(0,1,0),Jm=new N(0,0,1),Qm={type:"added"},WM={type:"removed"},hs={type:"childadded",child:null},Hu={type:"childremoved",child:null};class Gt extends go{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:VM++}),this.uuid=Di(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gt.DEFAULT_UP.clone();const e=new N,n=new _i,i=new Ua,r=new N(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new dt},normalMatrix:{value:new qe}}),this.matrix=new dt,this.matrixWorld=new dt,this.matrixAutoUpdate=Gt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new L_,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return fs.setFromAxisAngle(e,n),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,n){return fs.setFromAxisAngle(e,n),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis($m,e)}rotateY(e){return this.rotateOnAxis(Zm,e)}rotateZ(e){return this.rotateOnAxis(Jm,e)}translateOnAxis(e,n){return Ym.copy(e).applyQuaternion(this.quaternion),this.position.add(Ym.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis($m,e)}translateY(e){return this.translateOnAxis(Zm,e)}translateZ(e){return this.translateOnAxis(Jm,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ei.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?ul.copy(e):ul.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Po.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ei.lookAt(Po,ul,this.up):Ei.lookAt(ul,Po,this.up),this.quaternion.setFromRotationMatrix(Ei),r&&(Ei.extractRotation(r.matrixWorld),fs.setFromRotationMatrix(Ei),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Qm),hs.child=e,this.dispatchEvent(hs),hs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(WM),Hu.child=e,this.dispatchEvent(Hu),Hu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ei.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ei.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ei),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Qm),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,e,HM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Po,GM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Gt.DEFAULT_UP=new N(0,1,0);Gt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new N,wi=new N,Gu=new N,Ti=new N,ds=new N,ps=new N,e0=new N,Wu=new N,ju=new N,Xu=new N,Ku=new ht,qu=new ht,Yu=new ht;class Vn{constructor(e=new N,n=new N,i=new N){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),Qn.subVectors(e,n),r.cross(Qn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){Qn.subVectors(r,n),wi.subVectors(i,n),Gu.subVectors(e,n);const o=Qn.dot(Qn),a=Qn.dot(wi),l=Qn.dot(Gu),c=wi.dot(wi),u=wi.dot(Gu),f=o*c-a*a;if(f===0)return s.set(0,0,0),null;const h=1/f,p=(c*l-a*u)*h,g=(o*u-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Ti)===null?!1:Ti.x>=0&&Ti.y>=0&&Ti.x+Ti.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Ti)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Ti.x),l.addScaledVector(o,Ti.y),l.addScaledVector(a,Ti.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return Ku.setScalar(0),qu.setScalar(0),Yu.setScalar(0),Ku.fromBufferAttribute(e,n),qu.fromBufferAttribute(e,i),Yu.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(Ku,s.x),o.addScaledVector(qu,s.y),o.addScaledVector(Yu,s.z),o}static isFrontFacing(e,n,i,r){return Qn.subVectors(i,n),wi.subVectors(e,n),Qn.cross(wi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),wi.subVectors(this.a,this.b),Qn.cross(wi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Vn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return Vn.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return Vn.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return Vn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Vn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;ds.subVectors(r,i),ps.subVectors(s,i),Wu.subVectors(e,i);const l=ds.dot(Wu),c=ps.dot(Wu);if(l<=0&&c<=0)return n.copy(i);ju.subVectors(e,r);const u=ds.dot(ju),f=ps.dot(ju);if(u>=0&&f<=u)return n.copy(r);const h=l*f-u*c;if(h<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(ds,o);Xu.subVectors(e,s);const p=ds.dot(Xu),g=ps.dot(Xu);if(g>=0&&p<=g)return n.copy(s);const S=p*c-l*g;if(S<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(ps,a);const m=u*g-p*f;if(m<=0&&f-u>=0&&p-g>=0)return e0.subVectors(s,r),a=(f-u)/(f-u+(p-g)),n.copy(r).addScaledVector(e0,a);const d=1/(m+S+h);return o=S*d,a=h*d,n.copy(i).addScaledVector(ds,o).addScaledVector(ps,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const N_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Yi={h:0,s:0,l:0},fl={h:0,s:0,l:0};function $u(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class Qe{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Cn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=ot.workingColorSpace){return this.r=e,this.g=n,this.b=i,ot.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=ot.workingColorSpace){if(e=AM(e,1),n=Kt(n,0,1),i=Kt(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=$u(o,s,e+1/3),this.g=$u(o,s,e),this.b=$u(o,s,e-1/3)}return ot.toWorkingColorSpace(this,r),this}setStyle(e,n=Cn){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Cn){const i=N_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}copyLinearToSRGB(e){return this.r=Du(e.r),this.g=Du(e.g),this.b=Du(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Cn){return ot.fromWorkingColorSpace(Qt.copy(this),e),Math.round(Kt(Qt.r*255,0,255))*65536+Math.round(Kt(Qt.g*255,0,255))*256+Math.round(Kt(Qt.b*255,0,255))}getHexString(e=Cn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=ot.workingColorSpace){ot.fromWorkingColorSpace(Qt.copy(this),n);const i=Qt.r,r=Qt.g,s=Qt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=ot.workingColorSpace){return ot.fromWorkingColorSpace(Qt.copy(this),n),e.r=Qt.r,e.g=Qt.g,e.b=Qt.b,e}getStyle(e=Cn){ot.fromWorkingColorSpace(Qt.copy(this),e);const n=Qt.r,i=Qt.g,r=Qt.b;return e!==Cn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(Yi),this.setHSL(Yi.h+e,Yi.s+n,Yi.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(Yi),e.getHSL(fl);const i=Nu(Yi.h,fl.h,n),r=Nu(Yi.s,fl.s,n),s=Nu(Yi.l,fl.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Qt=new Qe;Qe.NAMES=N_;let jM=0;class vo extends go{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:jM++}),this.uuid=Di(),this.name="",this.type="Material",this.blending=Ks,this.side=gr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dh,this.blendDst=ph,this.blendEquation=Ur,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Qe(0,0,0),this.blendAlpha=0,this.depthFunc=oo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Vm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ss,this.stencilZFail=ss,this.stencilZPass=ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ks&&(i.blending=this.blending),this.side!==gr&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dh&&(i.blendSrc=this.blendSrc),this.blendDst!==ph&&(i.blendDst=this.blendDst),this.blendEquation!==Ur&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==oo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Vm&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Cc extends vo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.combine=d_,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Nt=new N,hl=new ue;class jn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Zh,this.updateRanges=[],this.gpuType=Li,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)hl.fromBufferAttribute(this,n),hl.applyMatrix3(e),this.setXY(n,hl.x,hl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix3(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyMatrix4(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.applyNormalMatrix(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Nt.fromBufferAttribute(this,n),Nt.transformDirection(e),this.setXYZ(n,Nt.x,Nt.y,Nt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=pi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ft(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=pi(n,this.array)),n}setX(e,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=pi(n,this.array)),n}setY(e,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=pi(n,this.array)),n}setZ(e,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=pi(n,this.array)),n}setW(e,n){return this.normalized&&(n=ft(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array),s=ft(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Zh&&(e.usage=this.usage),e}}class I_ extends jn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class D_ extends jn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class pt extends jn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let XM=0;const Un=new dt,Zu=new Gt,ms=new N,Tn=new Fa,Lo=new Fa,Bt=new N;class rn extends go{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:XM++}),this.uuid=Di(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(R_(e)?D_:I_)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new qe().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Un.makeRotationFromQuaternion(e),this.applyMatrix4(Un),this}rotateX(e){return Un.makeRotationX(e),this.applyMatrix4(Un),this}rotateY(e){return Un.makeRotationY(e),this.applyMatrix4(Un),this}rotateZ(e){return Un.makeRotationZ(e),this.applyMatrix4(Un),this}translate(e,n,i){return Un.makeTranslation(e,n,i),this.applyMatrix4(Un),this}scale(e,n,i){return Un.makeScale(e,n,i),this.applyMatrix4(Un),this}lookAt(e){return Zu.lookAt(e),Zu.updateMatrix(),this.applyMatrix4(Zu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ms).negate(),this.translate(ms.x,ms.y,ms.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new pt(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new N(-1/0,-1/0,-1/0),new N(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Tn.setFromBufferAttribute(s),this.morphTargetsRelative?(Bt.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Bt),Bt.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Bt)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ap);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new N,1/0);return}if(e){const i=this.boundingSphere.center;if(Tn.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];Lo.setFromBufferAttribute(a),this.morphTargetsRelative?(Bt.addVectors(Tn.min,Lo.min),Tn.expandByPoint(Bt),Bt.addVectors(Tn.max,Lo.max),Tn.expandByPoint(Bt)):(Tn.expandByPoint(Lo.min),Tn.expandByPoint(Lo.max))}Tn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Bt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)Bt.fromBufferAttribute(a,c),l&&(ms.fromBufferAttribute(e,c),Bt.add(ms)),r=Math.max(r,i.distanceToSquared(Bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new jn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let L=0;L<i.count;L++)a[L]=new N,l[L]=new N;const c=new N,u=new N,f=new N,h=new ue,p=new ue,g=new ue,S=new N,m=new N;function d(L,G,x){c.fromBufferAttribute(i,L),u.fromBufferAttribute(i,G),f.fromBufferAttribute(i,x),h.fromBufferAttribute(s,L),p.fromBufferAttribute(s,G),g.fromBufferAttribute(s,x),u.sub(c),f.sub(c),p.sub(h),g.sub(h);const E=1/(p.x*g.y-g.x*p.y);isFinite(E)&&(S.copy(u).multiplyScalar(g.y).addScaledVector(f,-p.y).multiplyScalar(E),m.copy(f).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(E),a[L].add(S),a[G].add(S),a[x].add(S),l[L].add(m),l[G].add(m),l[x].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let L=0,G=v.length;L<G;++L){const x=v[L],E=x.start,z=x.count;for(let B=E,j=E+z;B<j;B+=3)d(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const _=new N,y=new N,b=new N,C=new N;function w(L){b.fromBufferAttribute(r,L),C.copy(b);const G=a[L];_.copy(G),_.sub(b.multiplyScalar(b.dot(G))).normalize(),y.crossVectors(C,G);const E=y.dot(l[L])<0?-1:1;o.setXYZW(L,_.x,_.y,_.z,E)}for(let L=0,G=v.length;L<G;++L){const x=v[L],E=x.start,z=x.count;for(let B=E,j=E+z;B<j;B+=3)w(e.getX(B+0)),w(e.getX(B+1)),w(e.getX(B+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new jn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new N,s=new N,o=new N,a=new N,l=new N,c=new N,u=new N,f=new N;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),S=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,S),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,S),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(S,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(h+0,u.x,u.y,u.z),i.setXYZ(h+1,u.x,u.y,u.z),i.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Bt.fromBufferAttribute(e,n),Bt.normalize(),e.setXYZ(n,Bt.x,Bt.y,Bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,h=new c.constructor(l.length*u);let p=0,g=0;for(let S=0,m=l.length;S<m;S++){a.isInterleavedBufferAttribute?p=l[S]*a.data.stride+a.offset:p=l[S]*u;for(let d=0;d<u;d++)h[g++]=c[p++]}return new jn(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new rn,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const h=c[u],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,h=c.length;f<h;f++){const p=c[f];u.push(p.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let h=0,p=f.length;h<p;h++)u.push(f[h].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const t0=new dt,Ar=new OM,dl=new ap,n0=new N,pl=new N,ml=new N,gl=new N,Ju=new N,vl=new N,i0=new N,_l=new N;class ct extends Gt{constructor(e=new rn,n=new Cc){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){vl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(Ju.fromBufferAttribute(f,e),o?vl.addScaledVector(Ju,u):vl.addScaledVector(Ju.sub(n),u))}n.add(vl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),dl.copy(i.boundingSphere),dl.applyMatrix4(s),Ar.copy(e.ray).recast(e.near),!(dl.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(dl,n0)===null||Ar.origin.distanceToSquared(n0)>(e.far-e.near)**2))&&(t0.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(t0),!(i.boundingBox!==null&&Ar.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ar)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,S=h.length;g<S;g++){const m=h[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,b=_;y<b;y+=3){const C=a.getX(y),w=a.getX(y+1),L=a.getX(y+2);r=xl(this,d,e,i,c,u,f,C,w,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),S=Math.min(a.count,p.start+p.count);for(let m=g,d=S;m<d;m+=3){const v=a.getX(m),_=a.getX(m+1),y=a.getX(m+2);r=xl(this,o,e,i,c,u,f,v,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,S=h.length;g<S;g++){const m=h[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=v,b=_;y<b;y+=3){const C=y,w=y+1,L=y+2;r=xl(this,d,e,i,c,u,f,C,w,L),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),S=Math.min(l.count,p.start+p.count);for(let m=g,d=S;m<d;m+=3){const v=m,_=m+1,y=m+2;r=xl(this,o,e,i,c,u,f,v,_,y),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function KM(t,e,n,i,r,s,o,a){let l;if(e.side===Sn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===gr,a),l===null)return null;_l.copy(a),_l.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(_l);return c<n.near||c>n.far?null:{distance:c,point:_l.clone(),object:t}}function xl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,pl),t.getVertexPosition(l,ml),t.getVertexPosition(c,gl);const u=KM(t,e,n,i,pl,ml,gl,i0);if(u){const f=new N;Vn.getBarycoord(i0,pl,ml,gl,f),r&&(u.uv=Vn.getInterpolatedAttribute(r,a,l,c,f,new ue)),s&&(u.uv1=Vn.getInterpolatedAttribute(s,a,l,c,f,new ue)),o&&(u.normal=Vn.getInterpolatedAttribute(o,a,l,c,f,new N),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new N,materialIndex:0};Vn.getNormal(pl,ml,gl,h.normal),u.face=h,u.barycoord=f}return u}class Mr extends rn{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new pt(c,3)),this.setAttribute("normal",new pt(u,3)),this.setAttribute("uv",new pt(f,2));function g(S,m,d,v,_,y,b,C,w,L,G){const x=y/w,E=b/L,z=y/2,B=b/2,j=C/2,Q=w+1,H=L+1;let ee=0,I=0;const q=new N;for(let J=0;J<H;J++){const le=J*E-B;for(let Ce=0;Ce<Q;Ce++){const je=Ce*x-z;q[S]=je*v,q[m]=le*_,q[d]=j,c.push(q.x,q.y,q.z),q[S]=0,q[m]=0,q[d]=C>0?1:-1,u.push(q.x,q.y,q.z),f.push(Ce/w),f.push(1-J/L),ee+=1}}for(let J=0;J<L;J++)for(let le=0;le<w;le++){const Ce=h+le+Q*J,je=h+le+Q*(J+1),K=h+(le+1)+Q*(J+1),re=h+(le+1)+Q*J;l.push(Ce,je,re),l.push(je,K,re),I+=6}a.addGroup(p,I,G),p+=I,h+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mr(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fo(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function an(t){const e={};for(let n=0;n<t.length;n++){const i=fo(t[n]);for(const r in i)e[r]=i[r]}return e}function qM(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function U_(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const YM={clone:fo,merge:an};var $M=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ZM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vi extends vo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=$M,this.fragmentShader=ZM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fo(e.uniforms),this.uniformsGroups=qM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class F_ extends Gt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dt,this.projectionMatrix=new dt,this.projectionMatrixInverse=new dt,this.coordinateSystem=Ni}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $i=new N,r0=new ue,s0=new ue;class Rn extends F_{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Jh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Jh*2*Math.atan(Math.tan(Lu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){$i.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($i.x,$i.y).multiplyScalar(-e/$i.z),$i.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($i.x,$i.y).multiplyScalar(-e/$i.z)}getViewSize(e,n){return this.getViewBounds(e,r0,s0),n.subVectors(s0,r0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(Lu*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const gs=-90,vs=1;class JM extends Gt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Rn(gs,vs,e,n);r.layers=this.layers,this.add(r);const s=new Rn(gs,vs,e,n);s.layers=this.layers,this.add(s);const o=new Rn(gs,vs,e,n);o.layers=this.layers,this.add(o);const a=new Rn(gs,vs,e,n);a.layers=this.layers,this.add(a);const l=new Rn(gs,vs,e,n);l.layers=this.layers,this.add(l);const c=new Rn(gs,vs,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ni)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Tc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,u]=this.children,f=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const S=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=S,e.setRenderTarget(i,5,r),e.render(n,u),e.setRenderTarget(f,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class k_ extends un{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:ao,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class QM extends Qr{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new k_(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:ri}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new Mr(5,5,5),s=new Vi({name:"CubemapFromEquirect",uniforms:fo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Sn,blending:hr});s.uniforms.tEquirect.value=n;const o=new ct(r,s),a=n.minFilter;return n.minFilter===Hr&&(n.minFilter=ri),new JM(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Qu=new N,e1=new N,t1=new qe;class Ir{constructor(e=new N(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Qu.subVectors(i,n).cross(e1.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Qu),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||t1.getNormalMatrix(e),r=this.coplanarPoint(Qu).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Cr=new ap,yl=new N;class lp{constructor(e=new Ir,n=new Ir,i=new Ir,r=new Ir,s=new Ir,o=new Ir){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ni){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],h=r[7],p=r[8],g=r[9],S=r[10],m=r[11],d=r[12],v=r[13],_=r[14],y=r[15];if(i[0].setComponents(l-s,h-c,m-p,y-d).normalize(),i[1].setComponents(l+s,h+c,m+p,y+d).normalize(),i[2].setComponents(l+o,h+u,m+g,y+v).normalize(),i[3].setComponents(l-o,h-u,m-g,y-v).normalize(),i[4].setComponents(l-a,h-f,m-S,y-_).normalize(),n===Ni)i[5].setComponents(l+a,h+f,m+S,y+_).normalize();else if(n===Tc)i[5].setComponents(a,f,S,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Cr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Cr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Cr)}intersectsSprite(e){return Cr.center.set(0,0,0),Cr.radius=.7071067811865476,Cr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Cr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(yl.x=r.normal.x>0?e.max.x:e.min.x,yl.y=r.normal.y>0?e.max.y:e.min.y,yl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(yl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function O_(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function n1(t){const e=new WeakMap;function n(a,l){const c=a.array,u=a.usage,f=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:f}}function i(a,l,c){const u=l.array,f=l.updateRanges;if(t.bindBuffer(c,a),f.length===0)t.bufferSubData(c,0,u);else{f.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<f.length;p++){const g=f[h],S=f[p];S.start<=g.start+g.count+1?g.count=Math.max(g.count,S.start+S.count-g.start):(++h,f[h]=S)}f.length=h+1;for(let p=0,g=f.length;p<g;p++){const S=f[p];t.bufferSubData(c,S.start*u.BYTES_PER_ELEMENT,u,S.start,S.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}class Xn extends rn{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,h=n/l,p=[],g=[],S=[],m=[];for(let d=0;d<u;d++){const v=d*h-o;for(let _=0;_<c;_++){const y=_*f-s;g.push(y,-v,0),S.push(0,0,1),m.push(_/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const _=v+c*d,y=v+c*(d+1),b=v+1+c*(d+1),C=v+1+c*d;p.push(_,y,C),p.push(y,b,C)}this.setIndex(p),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(S,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Xn(e.width,e.height,e.widthSegments,e.heightSegments)}}var i1=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,r1=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,s1=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,o1=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,a1=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,l1=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,c1=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,u1=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,f1=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,h1=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,d1=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,p1=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,m1=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,g1=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,v1=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,_1=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,x1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,y1=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,S1=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,M1=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,E1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,w1=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,T1=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,A1=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,C1=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,R1=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,b1=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P1=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L1=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N1=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,I1="gl_FragColor = linearToOutputTexel( gl_FragColor );",D1=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,U1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,F1=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,k1=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,O1=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z1=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,B1=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,V1=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,H1=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,G1=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,W1=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,j1=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,X1=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,K1=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,q1=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Y1=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,$1=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Z1=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,J1=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Q1=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,eE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,tE=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,nE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,iE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rE=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,sE=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,oE=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aE=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lE=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,cE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,hE=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,dE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,pE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,mE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,gE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,vE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,_E=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,xE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,SE=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,ME=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,EE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,TE=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,AE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,CE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,RE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,bE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,PE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,LE=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,NE=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,IE=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,DE=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,UE=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,FE=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kE=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,OE=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,zE=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,BE=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,VE=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,HE=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,GE=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,WE=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,jE=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,XE=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,KE=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,qE=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,YE=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$E=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ZE=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,JE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,QE=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ew=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,tw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const nw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,iw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,sw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ow=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,aw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,cw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,uw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,hw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,dw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,mw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,gw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,vw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_w=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,xw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Sw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mw=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Ew=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ww=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Tw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Aw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cw=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Lw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Iw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Dw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Uw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:i1,alphahash_pars_fragment:r1,alphamap_fragment:s1,alphamap_pars_fragment:o1,alphatest_fragment:a1,alphatest_pars_fragment:l1,aomap_fragment:c1,aomap_pars_fragment:u1,batching_pars_vertex:f1,batching_vertex:h1,begin_vertex:d1,beginnormal_vertex:p1,bsdfs:m1,iridescence_fragment:g1,bumpmap_pars_fragment:v1,clipping_planes_fragment:_1,clipping_planes_pars_fragment:x1,clipping_planes_pars_vertex:y1,clipping_planes_vertex:S1,color_fragment:M1,color_pars_fragment:E1,color_pars_vertex:w1,color_vertex:T1,common:A1,cube_uv_reflection_fragment:C1,defaultnormal_vertex:R1,displacementmap_pars_vertex:b1,displacementmap_vertex:P1,emissivemap_fragment:L1,emissivemap_pars_fragment:N1,colorspace_fragment:I1,colorspace_pars_fragment:D1,envmap_fragment:U1,envmap_common_pars_fragment:F1,envmap_pars_fragment:k1,envmap_pars_vertex:O1,envmap_physical_pars_fragment:Y1,envmap_vertex:z1,fog_vertex:B1,fog_pars_vertex:V1,fog_fragment:H1,fog_pars_fragment:G1,gradientmap_pars_fragment:W1,lightmap_pars_fragment:j1,lights_lambert_fragment:X1,lights_lambert_pars_fragment:K1,lights_pars_begin:q1,lights_toon_fragment:$1,lights_toon_pars_fragment:Z1,lights_phong_fragment:J1,lights_phong_pars_fragment:Q1,lights_physical_fragment:eE,lights_physical_pars_fragment:tE,lights_fragment_begin:nE,lights_fragment_maps:iE,lights_fragment_end:rE,logdepthbuf_fragment:sE,logdepthbuf_pars_fragment:oE,logdepthbuf_pars_vertex:aE,logdepthbuf_vertex:lE,map_fragment:cE,map_pars_fragment:uE,map_particle_fragment:fE,map_particle_pars_fragment:hE,metalnessmap_fragment:dE,metalnessmap_pars_fragment:pE,morphinstance_vertex:mE,morphcolor_vertex:gE,morphnormal_vertex:vE,morphtarget_pars_vertex:_E,morphtarget_vertex:xE,normal_fragment_begin:yE,normal_fragment_maps:SE,normal_pars_fragment:ME,normal_pars_vertex:EE,normal_vertex:wE,normalmap_pars_fragment:TE,clearcoat_normal_fragment_begin:AE,clearcoat_normal_fragment_maps:CE,clearcoat_pars_fragment:RE,iridescence_pars_fragment:bE,opaque_fragment:PE,packing:LE,premultiplied_alpha_fragment:NE,project_vertex:IE,dithering_fragment:DE,dithering_pars_fragment:UE,roughnessmap_fragment:FE,roughnessmap_pars_fragment:kE,shadowmap_pars_fragment:OE,shadowmap_pars_vertex:zE,shadowmap_vertex:BE,shadowmask_pars_fragment:VE,skinbase_vertex:HE,skinning_pars_vertex:GE,skinning_vertex:WE,skinnormal_vertex:jE,specularmap_fragment:XE,specularmap_pars_fragment:KE,tonemapping_fragment:qE,tonemapping_pars_fragment:YE,transmission_fragment:$E,transmission_pars_fragment:ZE,uv_pars_fragment:JE,uv_pars_vertex:QE,uv_vertex:ew,worldpos_vertex:tw,background_vert:nw,background_frag:iw,backgroundCube_vert:rw,backgroundCube_frag:sw,cube_vert:ow,cube_frag:aw,depth_vert:lw,depth_frag:cw,distanceRGBA_vert:uw,distanceRGBA_frag:fw,equirect_vert:hw,equirect_frag:dw,linedashed_vert:pw,linedashed_frag:mw,meshbasic_vert:gw,meshbasic_frag:vw,meshlambert_vert:_w,meshlambert_frag:xw,meshmatcap_vert:yw,meshmatcap_frag:Sw,meshnormal_vert:Mw,meshnormal_frag:Ew,meshphong_vert:ww,meshphong_frag:Tw,meshphysical_vert:Aw,meshphysical_frag:Cw,meshtoon_vert:Rw,meshtoon_frag:bw,points_vert:Pw,points_frag:Lw,shadow_vert:Nw,shadow_frag:Iw,sprite_vert:Dw,sprite_frag:Uw},ve={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new ue(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new ue(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},hi={basic:{uniforms:an([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:an([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:an([ve.common,ve.specularmap,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:an([ve.common,ve.envmap,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.roughnessmap,ve.metalnessmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:an([ve.common,ve.aomap,ve.lightmap,ve.emissivemap,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.gradientmap,ve.fog,ve.lights,{emissive:{value:new Qe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:an([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,ve.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:an([ve.points,ve.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:an([ve.common,ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:an([ve.common,ve.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:an([ve.common,ve.bumpmap,ve.normalmap,ve.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:an([ve.sprite,ve.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distanceRGBA:{uniforms:an([ve.common,ve.displacementmap,{referencePosition:{value:new N},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distanceRGBA_vert,fragmentShader:Ke.distanceRGBA_frag},shadow:{uniforms:an([ve.lights,ve.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};hi.physical={uniforms:an([hi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new ue(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new ue},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new ue},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const Sl={r:0,b:0,g:0},Rr=new _i,Fw=new dt;function kw(t,e,n,i,r,s,o){const a=new Qe(0);let l=s===!0?0:1,c,u,f=null,h=0,p=null;function g(v){let _=v.isScene===!0?v.background:null;return _&&_.isTexture&&(_=(v.backgroundBlurriness>0?n:e).get(_)),_}function S(v){let _=!1;const y=g(v);y===null?d(a,l):y&&y.isColor&&(d(y,1),_=!0);const b=t.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,o):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||_)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(v,_){const y=g(_);y&&(y.isCubeTexture||y.mapping===$c)?(u===void 0&&(u=new ct(new Mr(1,1,1),new Vi({name:"BackgroundCubeMaterial",uniforms:fo(hi.backgroundCube.uniforms),vertexShader:hi.backgroundCube.vertexShader,fragmentShader:hi.backgroundCube.fragmentShader,side:Sn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(b,C,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),Rr.copy(_.backgroundRotation),Rr.x*=-1,Rr.y*=-1,Rr.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Rr.y*=-1,Rr.z*=-1),u.material.uniforms.envMap.value=y,u.material.uniforms.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(Fw.makeRotationFromEuler(Rr)),u.material.toneMapped=ot.getTransfer(y.colorSpace)!==yt,(f!==y||h!==y.version||p!==t.toneMapping)&&(u.material.needsUpdate=!0,f=y,h=y.version,p=t.toneMapping),u.layers.enableAll(),v.unshift(u,u.geometry,u.material,0,0,null)):y&&y.isTexture&&(c===void 0&&(c=new ct(new Xn(2,2),new Vi({name:"BackgroundMaterial",uniforms:fo(hi.background.uniforms),vertexShader:hi.background.vertexShader,fragmentShader:hi.background.fragmentShader,side:gr,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=y,c.material.uniforms.backgroundIntensity.value=_.backgroundIntensity,c.material.toneMapped=ot.getTransfer(y.colorSpace)!==yt,y.matrixAutoUpdate===!0&&y.updateMatrix(),c.material.uniforms.uvTransform.value.copy(y.matrix),(f!==y||h!==y.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,f=y,h=y.version,p=t.toneMapping),c.layers.enableAll(),v.unshift(c,c.geometry,c.material,0,0,null))}function d(v,_){v.getRGB(Sl,U_(t)),i.buffers.color.setClear(Sl.r,Sl.g,Sl.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(v,_=1){a.set(v),l=_,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(v){l=v,d(a,l)},render:S,addToRenderList:m}}function Ow(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(x,E,z,B,j){let Q=!1;const H=f(B,z,E);s!==H&&(s=H,c(s.object)),Q=p(x,B,z,j),Q&&g(x,B,z,j),j!==null&&e.update(j,t.ELEMENT_ARRAY_BUFFER),(Q||o)&&(o=!1,y(x,E,z,B),j!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(j).buffer))}function l(){return t.createVertexArray()}function c(x){return t.bindVertexArray(x)}function u(x){return t.deleteVertexArray(x)}function f(x,E,z){const B=z.wireframe===!0;let j=i[x.id];j===void 0&&(j={},i[x.id]=j);let Q=j[E.id];Q===void 0&&(Q={},j[E.id]=Q);let H=Q[B];return H===void 0&&(H=h(l()),Q[B]=H),H}function h(x){const E=[],z=[],B=[];for(let j=0;j<n;j++)E[j]=0,z[j]=0,B[j]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:z,attributeDivisors:B,object:x,attributes:{},index:null}}function p(x,E,z,B){const j=s.attributes,Q=E.attributes;let H=0;const ee=z.getAttributes();for(const I in ee)if(ee[I].location>=0){const J=j[I];let le=Q[I];if(le===void 0&&(I==="instanceMatrix"&&x.instanceMatrix&&(le=x.instanceMatrix),I==="instanceColor"&&x.instanceColor&&(le=x.instanceColor)),J===void 0||J.attribute!==le||le&&J.data!==le.data)return!0;H++}return s.attributesNum!==H||s.index!==B}function g(x,E,z,B){const j={},Q=E.attributes;let H=0;const ee=z.getAttributes();for(const I in ee)if(ee[I].location>=0){let J=Q[I];J===void 0&&(I==="instanceMatrix"&&x.instanceMatrix&&(J=x.instanceMatrix),I==="instanceColor"&&x.instanceColor&&(J=x.instanceColor));const le={};le.attribute=J,J&&J.data&&(le.data=J.data),j[I]=le,H++}s.attributes=j,s.attributesNum=H,s.index=B}function S(){const x=s.newAttributes;for(let E=0,z=x.length;E<z;E++)x[E]=0}function m(x){d(x,0)}function d(x,E){const z=s.newAttributes,B=s.enabledAttributes,j=s.attributeDivisors;z[x]=1,B[x]===0&&(t.enableVertexAttribArray(x),B[x]=1),j[x]!==E&&(t.vertexAttribDivisor(x,E),j[x]=E)}function v(){const x=s.newAttributes,E=s.enabledAttributes;for(let z=0,B=E.length;z<B;z++)E[z]!==x[z]&&(t.disableVertexAttribArray(z),E[z]=0)}function _(x,E,z,B,j,Q,H){H===!0?t.vertexAttribIPointer(x,E,z,j,Q):t.vertexAttribPointer(x,E,z,B,j,Q)}function y(x,E,z,B){S();const j=B.attributes,Q=z.getAttributes(),H=E.defaultAttributeValues;for(const ee in Q){const I=Q[ee];if(I.location>=0){let q=j[ee];if(q===void 0&&(ee==="instanceMatrix"&&x.instanceMatrix&&(q=x.instanceMatrix),ee==="instanceColor"&&x.instanceColor&&(q=x.instanceColor)),q!==void 0){const J=q.normalized,le=q.itemSize,Ce=e.get(q);if(Ce===void 0)continue;const je=Ce.buffer,K=Ce.type,re=Ce.bytesPerElement,_e=K===t.INT||K===t.UNSIGNED_INT||q.gpuType===ep;if(q.isInterleavedBufferAttribute){const de=q.data,Ie=de.stride,Fe=q.offset;if(de.isInstancedInterleavedBuffer){for(let ze=0;ze<I.locationSize;ze++)d(I.location+ze,de.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let ze=0;ze<I.locationSize;ze++)m(I.location+ze);t.bindBuffer(t.ARRAY_BUFFER,je);for(let ze=0;ze<I.locationSize;ze++)_(I.location+ze,le/I.locationSize,K,J,Ie*re,(Fe+le/I.locationSize*ze)*re,_e)}else{if(q.isInstancedBufferAttribute){for(let de=0;de<I.locationSize;de++)d(I.location+de,q.meshPerAttribute);x.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=q.meshPerAttribute*q.count)}else for(let de=0;de<I.locationSize;de++)m(I.location+de);t.bindBuffer(t.ARRAY_BUFFER,je);for(let de=0;de<I.locationSize;de++)_(I.location+de,le/I.locationSize,K,J,le*re,le/I.locationSize*de*re,_e)}}else if(H!==void 0){const J=H[ee];if(J!==void 0)switch(J.length){case 2:t.vertexAttrib2fv(I.location,J);break;case 3:t.vertexAttrib3fv(I.location,J);break;case 4:t.vertexAttrib4fv(I.location,J);break;default:t.vertexAttrib1fv(I.location,J)}}}}v()}function b(){L();for(const x in i){const E=i[x];for(const z in E){const B=E[z];for(const j in B)u(B[j].object),delete B[j];delete E[z]}delete i[x]}}function C(x){if(i[x.id]===void 0)return;const E=i[x.id];for(const z in E){const B=E[z];for(const j in B)u(B[j].object),delete B[j];delete E[z]}delete i[x.id]}function w(x){for(const E in i){const z=i[E];if(z[x.id]===void 0)continue;const B=z[x.id];for(const j in B)u(B[j].object),delete B[j];delete z[x.id]}}function L(){G(),o=!0,s!==r&&(s=r,c(s.object))}function G(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:L,resetDefaultState:G,dispose:b,releaseStatesOfGeometry:C,releaseStatesOfProgram:w,initAttributes:S,enableAttribute:m,disableUnusedAttributes:v}}function zw(t,e,n){let i;function r(c){i=c}function s(c,u){t.drawArrays(i,c,u),n.update(u,i,1)}function o(c,u,f){f!==0&&(t.drawArraysInstanced(i,c,u,f),n.update(u,i,f))}function a(c,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,f);let p=0;for(let g=0;g<f;g++)p+=u[g];n.update(p,i,1)}function l(c,u,f,h){if(f===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,u,0,h,0,f);let g=0;for(let S=0;S<f;S++)g+=u[S];for(let S=0;S<h.length;S++)n.update(g,i,h[S])}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Bw(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const w=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(w){return!(w!==si&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(w){const L=w===Da&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(w!==Bi&&i.convert(w)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Li&&!L)}function l(w){if(w==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const f=n.logarithmicDepthBuffer===!0,h=n.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(h===!0){const w=e.get("EXT_clip_control");w.clipControlEXT(w.LOWER_LEFT_EXT,w.ZERO_TO_ONE_EXT)}const p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),S=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),y=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),b=g>0,C=t.getParameter(t.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:f,reverseDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:S,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:b,maxSamples:C}}function Vw(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Ir,a=new qe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h){const p=f.length!==0||h||i!==0||r;return r=h,i=f.length,p},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,h){n=u(f,h,0)},this.setState=function(f,h,p){const g=f.clippingPlanes,S=f.clipIntersection,m=f.clipShadows,d=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const v=s?0:i,_=v*4;let y=d.clippingState||null;l.value=y,y=u(g,h,_,p);for(let b=0;b!==_;++b)y[b]=n[b];d.clippingState=y,this.numIntersection=S?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,h,p,g){const S=f!==null?f.length:0;let m=null;if(S!==0){if(m=l.value,g!==!0||m===null){const d=p+S*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,y=p;_!==S;++_,y+=4)o.copy(f[_]).applyMatrix4(v,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=S,e.numIntersection=0,m}}function Hw(t){let e=new WeakMap;function n(o,a){return a===Mh?o.mapping=ao:a===Eh&&(o.mapping=lo),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Mh||a===Eh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new QM(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class z_ extends F_{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const ks=4,o0=[.125,.215,.35,.446,.526,.582],Fr=20,ef=new z_,a0=new Qe;let tf=null,nf=0,rf=0,sf=!1;const Dr=(1+Math.sqrt(5))/2,_s=1/Dr,l0=[new N(-Dr,_s,0),new N(Dr,_s,0),new N(-_s,0,Dr),new N(_s,0,Dr),new N(0,Dr,-_s),new N(0,Dr,_s),new N(-1,1,-1),new N(1,1,-1),new N(-1,1,1),new N(1,1,1)];class c0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){tf=this._renderer.getRenderTarget(),nf=this._renderer.getActiveCubeFace(),rf=this._renderer.getActiveMipmapLevel(),sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=h0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=f0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(tf,nf,rf),this._renderer.xr.enabled=sf,e.scissorTest=!1,Ml(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===ao||e.mapping===lo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),tf=this._renderer.getRenderTarget(),nf=this._renderer.getActiveCubeFace(),rf=this._renderer.getActiveMipmapLevel(),sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:ri,minFilter:ri,generateMipmaps:!1,type:Da,format:si,colorSpace:Sr,depthBuffer:!1},r=u0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=u0(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Gw(s)),this._blurMaterial=Ww(s,e,n)}return r}_compileMaterial(e){const n=new ct(this._lodPlanes[0],e);this._renderer.compile(n,ef)}_sceneToCubeUV(e,n,i,r){const a=new Rn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(a0),u.toneMapping=dr,u.autoClear=!1;const p=new Cc({name:"PMREM.Background",side:Sn,depthWrite:!1,depthTest:!1}),g=new ct(new Mr,p);let S=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,S=!0):(p.color.copy(a0),S=!0);for(let d=0;d<6;d++){const v=d%3;v===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):v===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const _=this._cubeSize;Ml(r,v*_,d>2?_:0,_,_),u.setRenderTarget(r),S&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===ao||e.mapping===lo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=h0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=f0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new ct(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Ml(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,ef)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=l0[(r-s-1)%l0.length];this._blur(e,s-1,s,o,a)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new ct(this._lodPlanes[r],c),h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Fr-1),S=s/g,m=isFinite(s)?1+Math.floor(u*S):Fr;m>Fr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Fr}`);const d=[];let v=0;for(let w=0;w<Fr;++w){const L=w/S,G=Math.exp(-L*L/2);d.push(G),w===0?v+=G:w<m&&(v+=2*G)}for(let w=0;w<d.length;w++)d[w]=d[w]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-i;const y=this._sizeLods[r],b=3*y*(r>_-ks?r-_+ks:0),C=4*(this._cubeSize-y);Ml(n,b,C,3*y,2*y),l.setRenderTarget(n),l.render(f,ef)}}function Gw(t){const e=[],n=[],i=[];let r=t;const s=t-ks+1+o0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-ks?l=o0[o-t+ks-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,h=[u,u,f,u,f,f,u,u,f,f,u,f],p=6,g=6,S=3,m=2,d=1,v=new Float32Array(S*g*p),_=new Float32Array(m*g*p),y=new Float32Array(d*g*p);for(let C=0;C<p;C++){const w=C%3*2/3-1,L=C>2?0:-1,G=[w,L,0,w+2/3,L,0,w+2/3,L+1,0,w,L,0,w+2/3,L+1,0,w,L+1,0];v.set(G,S*g*C),_.set(h,m*g*C);const x=[C,C,C,C,C,C];y.set(x,d*g*C)}const b=new rn;b.setAttribute("position",new jn(v,S)),b.setAttribute("uv",new jn(_,m)),b.setAttribute("faceIndex",new jn(y,d)),e.push(b),r>ks&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function u0(t,e,n){const i=new Qr(t,e,n);return i.texture.mapping=$c,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ml(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function Ww(t,e,n){const i=new Float32Array(Fr),r=new N(0,1,0);return new Vi({name:"SphericalGaussianBlur",defines:{n:Fr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function f0(){return new Vi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function h0(){return new Vi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function cp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function jw(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Mh||l===Eh,u=l===ao||l===lo;if(c||u){let f=e.get(a);const h=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new c0(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),f.texture;if(f!==void 0)return f.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&r(p)?(n===null&&(n=new c0(t)),f=c?n.fromEquirectangular(a):n.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,e.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function Xw(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&Yl("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function Kw(t,e,n,i){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);for(const g in h.morphAttributes){const S=h.morphAttributes[g];for(let m=0,d=S.length;m<d;m++)e.remove(S[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(f){const h=f.attributes;for(const g in h)e.update(h[g],t.ARRAY_BUFFER);const p=f.morphAttributes;for(const g in p){const S=p[g];for(let m=0,d=S.length;m<d;m++)e.update(S[m],t.ARRAY_BUFFER)}}function c(f){const h=[],p=f.index,g=f.attributes.position;let S=0;if(p!==null){const v=p.array;S=p.version;for(let _=0,y=v.length;_<y;_+=3){const b=v[_+0],C=v[_+1],w=v[_+2];h.push(b,C,C,w,w,b)}}else if(g!==void 0){const v=g.array;S=g.version;for(let _=0,y=v.length/3-1;_<y;_+=3){const b=_+0,C=_+1,w=_+2;h.push(b,C,C,w,w,b)}}else return;const m=new(R_(h)?D_:I_)(h,1);m.version=S;const d=s.get(f);d&&e.remove(d),s.set(f,m)}function u(f){const h=s.get(f);if(h){const p=f.index;p!==null&&h.version<p.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function qw(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,h*o,g),n.update(p,i,g))}function u(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];n.update(m,i,1)}function f(h,p,g,S){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],S[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,S,0,g);let d=0;for(let v=0;v<g;v++)d+=p[v];for(let v=0;v<S.length;v++)n.update(d,i,S[v])}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=f}function Yw(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function $w(t,e,n){const i=new WeakMap,r=new ht;function s(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=u!==void 0?u.length:0;let h=i.get(a);if(h===void 0||h.count!==f){let x=function(){L.dispose(),i.delete(a),a.removeEventListener("dispose",x)};var p=x;h!==void 0&&h.texture.dispose();const g=a.morphAttributes.position!==void 0,S=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],v=a.morphAttributes.normal||[],_=a.morphAttributes.color||[];let y=0;g===!0&&(y=1),S===!0&&(y=2),m===!0&&(y=3);let b=a.attributes.position.count*y,C=1;b>e.maxTextureSize&&(C=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const w=new Float32Array(b*C*4*f),L=new P_(w,b,C,f);L.type=Li,L.needsUpdate=!0;const G=y*4;for(let E=0;E<f;E++){const z=d[E],B=v[E],j=_[E],Q=b*C*4*E;for(let H=0;H<z.count;H++){const ee=H*G;g===!0&&(r.fromBufferAttribute(z,H),w[Q+ee+0]=r.x,w[Q+ee+1]=r.y,w[Q+ee+2]=r.z,w[Q+ee+3]=0),S===!0&&(r.fromBufferAttribute(B,H),w[Q+ee+4]=r.x,w[Q+ee+5]=r.y,w[Q+ee+6]=r.z,w[Q+ee+7]=0),m===!0&&(r.fromBufferAttribute(j,H),w[Q+ee+8]=r.x,w[Q+ee+9]=r.y,w[Q+ee+10]=r.z,w[Q+ee+11]=j.itemSize===4?r.w:1)}}h={count:f,texture:L,size:new ue(b,C)},i.set(a,h),a.addEventListener("dispose",x)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const S=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(t,"morphTargetBaseInfluence",S),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function Zw(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);if(r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}class B_ extends un{constructor(e,n,i,r,s,o,a,l,c,u=qs){if(u!==qs&&u!==uo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===qs&&(i=Jr),i===void 0&&u===uo&&(i=co),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:Gn,this.minFilter=l!==void 0?l:Gn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}const V_=new un,d0=new B_(1,1),H_=new P_,G_=new FM,W_=new k_,p0=[],m0=[],g0=new Float32Array(16),v0=new Float32Array(9),_0=new Float32Array(4);function _o(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=p0[r];if(s===void 0&&(s=new Float32Array(r),p0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Ot(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function zt(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Jc(t,e){let n=m0[e];n===void 0&&(n=new Int32Array(e),m0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function Jw(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function Qw(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2fv(this.addr,e),zt(n,e)}}function eT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Ot(n,e))return;t.uniform3fv(this.addr,e),zt(n,e)}}function tT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4fv(this.addr,e),zt(n,e)}}function nT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),zt(n,e)}else{if(Ot(n,i))return;_0.set(i),t.uniformMatrix2fv(this.addr,!1,_0),zt(n,i)}}function iT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),zt(n,e)}else{if(Ot(n,i))return;v0.set(i),t.uniformMatrix3fv(this.addr,!1,v0),zt(n,i)}}function rT(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Ot(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),zt(n,e)}else{if(Ot(n,i))return;g0.set(i),t.uniformMatrix4fv(this.addr,!1,g0),zt(n,i)}}function sT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function oT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2iv(this.addr,e),zt(n,e)}}function aT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3iv(this.addr,e),zt(n,e)}}function lT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4iv(this.addr,e),zt(n,e)}}function cT(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function uT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Ot(n,e))return;t.uniform2uiv(this.addr,e),zt(n,e)}}function fT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Ot(n,e))return;t.uniform3uiv(this.addr,e),zt(n,e)}}function hT(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Ot(n,e))return;t.uniform4uiv(this.addr,e),zt(n,e)}}function dT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(d0.compareFunction=C_,s=d0):s=V_,n.setTexture2D(e||s,r)}function pT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||G_,r)}function mT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||W_,r)}function gT(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||H_,r)}function vT(t){switch(t){case 5126:return Jw;case 35664:return Qw;case 35665:return eT;case 35666:return tT;case 35674:return nT;case 35675:return iT;case 35676:return rT;case 5124:case 35670:return sT;case 35667:case 35671:return oT;case 35668:case 35672:return aT;case 35669:case 35673:return lT;case 5125:return cT;case 36294:return uT;case 36295:return fT;case 36296:return hT;case 35678:case 36198:case 36298:case 36306:case 35682:return dT;case 35679:case 36299:case 36307:return pT;case 35680:case 36300:case 36308:case 36293:return mT;case 36289:case 36303:case 36311:case 36292:return gT}}function _T(t,e){t.uniform1fv(this.addr,e)}function xT(t,e){const n=_o(e,this.size,2);t.uniform2fv(this.addr,n)}function yT(t,e){const n=_o(e,this.size,3);t.uniform3fv(this.addr,n)}function ST(t,e){const n=_o(e,this.size,4);t.uniform4fv(this.addr,n)}function MT(t,e){const n=_o(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function ET(t,e){const n=_o(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function wT(t,e){const n=_o(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function TT(t,e){t.uniform1iv(this.addr,e)}function AT(t,e){t.uniform2iv(this.addr,e)}function CT(t,e){t.uniform3iv(this.addr,e)}function RT(t,e){t.uniform4iv(this.addr,e)}function bT(t,e){t.uniform1uiv(this.addr,e)}function PT(t,e){t.uniform2uiv(this.addr,e)}function LT(t,e){t.uniform3uiv(this.addr,e)}function NT(t,e){t.uniform4uiv(this.addr,e)}function IT(t,e,n){const i=this.cache,r=e.length,s=Jc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||V_,s[o])}function DT(t,e,n){const i=this.cache,r=e.length,s=Jc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||G_,s[o])}function UT(t,e,n){const i=this.cache,r=e.length,s=Jc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||W_,s[o])}function FT(t,e,n){const i=this.cache,r=e.length,s=Jc(n,r);Ot(i,s)||(t.uniform1iv(this.addr,s),zt(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||H_,s[o])}function kT(t){switch(t){case 5126:return _T;case 35664:return xT;case 35665:return yT;case 35666:return ST;case 35674:return MT;case 35675:return ET;case 35676:return wT;case 5124:case 35670:return TT;case 35667:case 35671:return AT;case 35668:case 35672:return CT;case 35669:case 35673:return RT;case 5125:return bT;case 36294:return PT;case 36295:return LT;case 36296:return NT;case 35678:case 36198:case 36298:case 36306:case 35682:return IT;case 35679:case 36299:case 36307:return DT;case 35680:case 36300:case 36308:case 36293:return UT;case 36289:case 36303:case 36311:case 36292:return FT}}class OT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=vT(n.type)}}class zT{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=kT(n.type)}}class BT{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const of=/(\w+)(\])?(\[|\.)?/g;function x0(t,e){t.seq.push(e),t.map[e.id]=e}function VT(t,e,n){const i=t.name,r=i.length;for(of.lastIndex=0;;){const s=of.exec(i),o=of.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){x0(n,c===void 0?new OT(a,t,e):new zT(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new BT(a),x0(n,f)),n=f}}}class $l{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);VT(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function y0(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const HT=37297;let GT=0;function WT(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function jT(t){const e=ot.getPrimaries(ot.workingColorSpace),n=ot.getPrimaries(t);let i;switch(e===n?i="":e===wc&&n===Ec?i="LinearDisplayP3ToLinearSRGB":e===Ec&&n===wc&&(i="LinearSRGBToLinearDisplayP3"),t){case Sr:case Zc:return[i,"LinearTransferOETF"];case Cn:case op:return[i,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),[i,"LinearTransferOETF"]}}function S0(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+WT(t.getShaderSource(e),o)}else return r}function XT(t,e){const n=jT(e);return`vec4 ${t}( vec4 value ) { return ${n[0]}( ${n[1]}( value ) ); }`}function KT(t,e){let n;switch(e){case cM:n="Linear";break;case uM:n="Reinhard";break;case fM:n="Cineon";break;case hM:n="ACESFilmic";break;case pM:n="AgX";break;case p_:n="Neutral";break;case dM:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const El=new N;function qT(){ot.getLuminanceCoefficients(El);const t=El.x.toFixed(4),e=El.y.toFixed(4),n=El.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function YT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Wo).join(`
`)}function $T(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function ZT(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function Wo(t){return t!==""}function M0(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function E0(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const JT=/^[ \t]*#include +<([\w\d./]+)>/gm;function Qh(t){return t.replace(JT,eA)}const QT=new Map;function eA(t,e){let n=Ke[e];if(n===void 0){const i=QT.get(e);if(i!==void 0)n=Ke[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return Qh(n)}const tA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function w0(t){return t.replace(tA,nA)}function nA(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function T0(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function iA(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===f_?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===h_?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Ai&&(e="SHADOWMAP_TYPE_VSM"),e}function rA(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case ao:case lo:e="ENVMAP_TYPE_CUBE";break;case $c:e="ENVMAP_TYPE_CUBE_UV";break}return e}function sA(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case lo:e="ENVMAP_MODE_REFRACTION";break}return e}function oA(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case d_:e="ENVMAP_BLENDING_MULTIPLY";break;case aM:e="ENVMAP_BLENDING_MIX";break;case lM:e="ENVMAP_BLENDING_ADD";break}return e}function aA(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function lA(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=iA(n),c=rA(n),u=sA(n),f=oA(n),h=aA(n),p=YT(n),g=$T(s),S=r.createProgram();let m,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Wo).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(Wo).join(`
`),d.length>0&&(d+=`
`)):(m=[T0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Wo).join(`
`),d=[T0(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==dr?"#define TONE_MAPPING":"",n.toneMapping!==dr?Ke.tonemapping_pars_fragment:"",n.toneMapping!==dr?KT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,XT("linearToOutputTexel",n.outputColorSpace),qT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Wo).join(`
`)),o=Qh(o),o=M0(o,n),o=E0(o,n),a=Qh(a),a=M0(a,n),a=E0(a,n),o=w0(o),a=w0(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===Hm?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Hm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=v+m+o,y=v+d+a,b=y0(r,r.VERTEX_SHADER,_),C=y0(r,r.FRAGMENT_SHADER,y);r.attachShader(S,b),r.attachShader(S,C),n.index0AttributeName!==void 0?r.bindAttribLocation(S,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(S,0,"position"),r.linkProgram(S);function w(E){if(t.debug.checkShaderErrors){const z=r.getProgramInfoLog(S).trim(),B=r.getShaderInfoLog(b).trim(),j=r.getShaderInfoLog(C).trim();let Q=!0,H=!0;if(r.getProgramParameter(S,r.LINK_STATUS)===!1)if(Q=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,S,b,C);else{const ee=S0(r,b,"vertex"),I=S0(r,C,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(S,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+z+`
`+ee+`
`+I)}else z!==""?console.warn("THREE.WebGLProgram: Program Info Log:",z):(B===""||j==="")&&(H=!1);H&&(E.diagnostics={runnable:Q,programLog:z,vertexShader:{log:B,prefix:m},fragmentShader:{log:j,prefix:d}})}r.deleteShader(b),r.deleteShader(C),L=new $l(r,S),G=ZT(r,S)}let L;this.getUniforms=function(){return L===void 0&&w(this),L};let G;this.getAttributes=function(){return G===void 0&&w(this),G};let x=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=r.getProgramParameter(S,HT)),x},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(S),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=GT++,this.cacheKey=e,this.usedTimes=1,this.program=S,this.vertexShader=b,this.fragmentShader=C,this}let cA=0;class uA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new fA(e),n.set(e,i)),i}}class fA{constructor(e){this.id=cA++,this.code=e,this.usedTimes=0}}function hA(t,e,n,i,r,s,o){const a=new L_,l=new uA,c=new Set,u=[],f=r.logarithmicDepthBuffer,h=r.reverseDepthBuffer,p=r.vertexTextures;let g=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function d(x,E,z,B,j){const Q=B.fog,H=j.geometry,ee=x.isMeshStandardMaterial?B.environment:null,I=(x.isMeshStandardMaterial?n:e).get(x.envMap||ee),q=I&&I.mapping===$c?I.image.height:null,J=S[x.type];x.precision!==null&&(g=r.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const le=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Ce=le!==void 0?le.length:0;let je=0;H.morphAttributes.position!==void 0&&(je=1),H.morphAttributes.normal!==void 0&&(je=2),H.morphAttributes.color!==void 0&&(je=3);let K,re,_e,de;if(J){const dn=hi[J];K=dn.vertexShader,re=dn.fragmentShader}else K=x.vertexShader,re=x.fragmentShader,l.update(x),_e=l.getVertexShaderID(x),de=l.getFragmentShaderID(x);const Ie=t.getRenderTarget(),Fe=j.isInstancedMesh===!0,ze=j.isBatchedMesh===!0,Xe=!!x.map,ne=!!x.matcap,P=!!I,me=!!x.aoMap,fe=!!x.lightMap,se=!!x.bumpMap,pe=!!x.normalMap,Re=!!x.displacementMap,xe=!!x.emissiveMap,R=!!x.metalnessMap,M=!!x.roughnessMap,k=x.anisotropy>0,Z=x.clearcoat>0,te=x.dispersion>0,$=x.iridescence>0,Te=x.sheen>0,ge=x.transmission>0,Se=k&&!!x.anisotropyMap,$e=Z&&!!x.clearcoatMap,oe=Z&&!!x.clearcoatNormalMap,ye=Z&&!!x.clearcoatRoughnessMap,De=$&&!!x.iridescenceMap,ke=$&&!!x.iridescenceThicknessMap,we=Te&&!!x.sheenColorMap,Ze=Te&&!!x.sheenRoughnessMap,Ve=!!x.specularMap,it=!!x.specularColorMap,D=!!x.specularIntensityMap,Y=ge&&!!x.transmissionMap,O=ge&&!!x.thicknessMap,X=!!x.gradientMap,ie=!!x.alphaMap,ce=x.alphaTest>0,Ue=!!x.alphaHash,mt=!!x.extensions;let Ct=dr;x.toneMapped&&(Ie===null||Ie.isXRRenderTarget===!0)&&(Ct=t.toneMapping);const et={shaderID:J,shaderType:x.type,shaderName:x.name,vertexShader:K,fragmentShader:re,defines:x.defines,customVertexShaderID:_e,customFragmentShaderID:de,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:ze,batchingColor:ze&&j._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&j.instanceColor!==null,instancingMorph:Fe&&j.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Ie===null?t.outputColorSpace:Ie.isXRRenderTarget===!0?Ie.texture.colorSpace:Sr,alphaToCoverage:!!x.alphaToCoverage,map:Xe,matcap:ne,envMap:P,envMapMode:P&&I.mapping,envMapCubeUVHeight:q,aoMap:me,lightMap:fe,bumpMap:se,normalMap:pe,displacementMap:p&&Re,emissiveMap:xe,normalMapObjectSpace:pe&&x.normalMapType===_M,normalMapTangentSpace:pe&&x.normalMapType===A_,metalnessMap:R,roughnessMap:M,anisotropy:k,anisotropyMap:Se,clearcoat:Z,clearcoatMap:$e,clearcoatNormalMap:oe,clearcoatRoughnessMap:ye,dispersion:te,iridescence:$,iridescenceMap:De,iridescenceThicknessMap:ke,sheen:Te,sheenColorMap:we,sheenRoughnessMap:Ze,specularMap:Ve,specularColorMap:it,specularIntensityMap:D,transmission:ge,transmissionMap:Y,thicknessMap:O,gradientMap:X,opaque:x.transparent===!1&&x.blending===Ks&&x.alphaToCoverage===!1,alphaMap:ie,alphaTest:ce,alphaHash:Ue,combine:x.combine,mapUv:Xe&&m(x.map.channel),aoMapUv:me&&m(x.aoMap.channel),lightMapUv:fe&&m(x.lightMap.channel),bumpMapUv:se&&m(x.bumpMap.channel),normalMapUv:pe&&m(x.normalMap.channel),displacementMapUv:Re&&m(x.displacementMap.channel),emissiveMapUv:xe&&m(x.emissiveMap.channel),metalnessMapUv:R&&m(x.metalnessMap.channel),roughnessMapUv:M&&m(x.roughnessMap.channel),anisotropyMapUv:Se&&m(x.anisotropyMap.channel),clearcoatMapUv:$e&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:oe&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ye&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:De&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:ke&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:we&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Ze&&m(x.sheenRoughnessMap.channel),specularMapUv:Ve&&m(x.specularMap.channel),specularColorMapUv:it&&m(x.specularColorMap.channel),specularIntensityMapUv:D&&m(x.specularIntensityMap.channel),transmissionMapUv:Y&&m(x.transmissionMap.channel),thicknessMapUv:O&&m(x.thicknessMap.channel),alphaMapUv:ie&&m(x.alphaMap.channel),vertexTangents:!!H.attributes.tangent&&(pe||k),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!H.attributes.uv&&(Xe||ie),fog:!!Q,useFog:x.fog===!0,fogExp2:!!Q&&Q.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:f,reverseDepthBuffer:h,skinning:j.isSkinnedMesh===!0,morphTargets:H.morphAttributes.position!==void 0,morphNormals:H.morphAttributes.normal!==void 0,morphColors:H.morphAttributes.color!==void 0,morphTargetsCount:Ce,morphTextureStride:je,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:t.shadowMap.enabled&&z.length>0,shadowMapType:t.shadowMap.type,toneMapping:Ct,decodeVideoTexture:Xe&&x.map.isVideoTexture===!0&&ot.getTransfer(x.map.colorSpace)===yt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Bn,flipSided:x.side===Sn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:mt&&x.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(mt&&x.extensions.multiDraw===!0||ze)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return et.vertexUv1s=c.has(1),et.vertexUv2s=c.has(2),et.vertexUv3s=c.has(3),c.clear(),et}function v(x){const E=[];if(x.shaderID?E.push(x.shaderID):(E.push(x.customVertexShaderID),E.push(x.customFragmentShaderID)),x.defines!==void 0)for(const z in x.defines)E.push(z),E.push(x.defines[z]);return x.isRawShaderMaterial===!1&&(_(E,x),y(E,x),E.push(t.outputColorSpace)),E.push(x.customProgramCacheKey),E.join()}function _(x,E){x.push(E.precision),x.push(E.outputColorSpace),x.push(E.envMapMode),x.push(E.envMapCubeUVHeight),x.push(E.mapUv),x.push(E.alphaMapUv),x.push(E.lightMapUv),x.push(E.aoMapUv),x.push(E.bumpMapUv),x.push(E.normalMapUv),x.push(E.displacementMapUv),x.push(E.emissiveMapUv),x.push(E.metalnessMapUv),x.push(E.roughnessMapUv),x.push(E.anisotropyMapUv),x.push(E.clearcoatMapUv),x.push(E.clearcoatNormalMapUv),x.push(E.clearcoatRoughnessMapUv),x.push(E.iridescenceMapUv),x.push(E.iridescenceThicknessMapUv),x.push(E.sheenColorMapUv),x.push(E.sheenRoughnessMapUv),x.push(E.specularMapUv),x.push(E.specularColorMapUv),x.push(E.specularIntensityMapUv),x.push(E.transmissionMapUv),x.push(E.thicknessMapUv),x.push(E.combine),x.push(E.fogExp2),x.push(E.sizeAttenuation),x.push(E.morphTargetsCount),x.push(E.morphAttributeCount),x.push(E.numDirLights),x.push(E.numPointLights),x.push(E.numSpotLights),x.push(E.numSpotLightMaps),x.push(E.numHemiLights),x.push(E.numRectAreaLights),x.push(E.numDirLightShadows),x.push(E.numPointLightShadows),x.push(E.numSpotLightShadows),x.push(E.numSpotLightShadowsWithMaps),x.push(E.numLightProbes),x.push(E.shadowMapType),x.push(E.toneMapping),x.push(E.numClippingPlanes),x.push(E.numClipIntersection),x.push(E.depthPacking)}function y(x,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.alphaToCoverage&&a.enable(20),x.push(a.mask)}function b(x){const E=S[x.type];let z;if(E){const B=hi[E];z=YM.clone(B.uniforms)}else z=x.uniforms;return z}function C(x,E){let z;for(let B=0,j=u.length;B<j;B++){const Q=u[B];if(Q.cacheKey===E){z=Q,++z.usedTimes;break}}return z===void 0&&(z=new lA(t,E,x,s),u.push(z)),z}function w(x){if(--x.usedTimes===0){const E=u.indexOf(x);u[E]=u[u.length-1],u.pop(),x.destroy()}}function L(x){l.remove(x)}function G(){l.dispose()}return{getParameters:d,getProgramCacheKey:v,getUniforms:b,acquireProgram:C,releaseProgram:w,releaseShaderCache:L,programs:u,dispose:G}}function dA(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function pA(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function A0(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function C0(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,h,p,g,S,m){let d=t[e];return d===void 0?(d={id:f.id,object:f,geometry:h,material:p,groupOrder:g,renderOrder:f.renderOrder,z:S,group:m},t[e]=d):(d.id=f.id,d.object=f,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=f.renderOrder,d.z=S,d.group=m),e++,d}function a(f,h,p,g,S,m){const d=o(f,h,p,g,S,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(f,h,p,g,S,m){const d=o(f,h,p,g,S,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(f,h){n.length>1&&n.sort(f||pA),i.length>1&&i.sort(h||A0),r.length>1&&r.sort(h||A0)}function u(){for(let f=e,h=t.length;f<h;f++){const p=t[f];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function mA(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new C0,t.set(i,[o])):r>=s.length?(o=new C0,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function gA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new N,color:new Qe};break;case"SpotLight":n={position:new N,direction:new N,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new N,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":n={direction:new N,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":n={color:new Qe,position:new N,halfWidth:new N,halfHeight:new N};break}return t[e.id]=n,n}}}function vA(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ue,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let _A=0;function xA(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function yA(t){const e=new gA,n=vA(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new N);const r=new N,s=new dt,o=new dt;function a(c){let u=0,f=0,h=0;for(let G=0;G<9;G++)i.probe[G].set(0,0,0);let p=0,g=0,S=0,m=0,d=0,v=0,_=0,y=0,b=0,C=0,w=0;c.sort(xA);for(let G=0,x=c.length;G<x;G++){const E=c[G],z=E.color,B=E.intensity,j=E.distance,Q=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)u+=z.r*B,f+=z.g*B,h+=z.b*B;else if(E.isLightProbe){for(let H=0;H<9;H++)i.probe[H].addScaledVector(E.sh.coefficients[H],B);w++}else if(E.isDirectionalLight){const H=e.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const ee=E.shadow,I=n.get(E);I.shadowIntensity=ee.intensity,I.shadowBias=ee.bias,I.shadowNormalBias=ee.normalBias,I.shadowRadius=ee.radius,I.shadowMapSize=ee.mapSize,i.directionalShadow[p]=I,i.directionalShadowMap[p]=Q,i.directionalShadowMatrix[p]=E.shadow.matrix,v++}i.directional[p]=H,p++}else if(E.isSpotLight){const H=e.get(E);H.position.setFromMatrixPosition(E.matrixWorld),H.color.copy(z).multiplyScalar(B),H.distance=j,H.coneCos=Math.cos(E.angle),H.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),H.decay=E.decay,i.spot[S]=H;const ee=E.shadow;if(E.map&&(i.spotLightMap[b]=E.map,b++,ee.updateMatrices(E),E.castShadow&&C++),i.spotLightMatrix[S]=ee.matrix,E.castShadow){const I=n.get(E);I.shadowIntensity=ee.intensity,I.shadowBias=ee.bias,I.shadowNormalBias=ee.normalBias,I.shadowRadius=ee.radius,I.shadowMapSize=ee.mapSize,i.spotShadow[S]=I,i.spotShadowMap[S]=Q,y++}S++}else if(E.isRectAreaLight){const H=e.get(E);H.color.copy(z).multiplyScalar(B),H.halfWidth.set(E.width*.5,0,0),H.halfHeight.set(0,E.height*.5,0),i.rectArea[m]=H,m++}else if(E.isPointLight){const H=e.get(E);if(H.color.copy(E.color).multiplyScalar(E.intensity),H.distance=E.distance,H.decay=E.decay,E.castShadow){const ee=E.shadow,I=n.get(E);I.shadowIntensity=ee.intensity,I.shadowBias=ee.bias,I.shadowNormalBias=ee.normalBias,I.shadowRadius=ee.radius,I.shadowMapSize=ee.mapSize,I.shadowCameraNear=ee.camera.near,I.shadowCameraFar=ee.camera.far,i.pointShadow[g]=I,i.pointShadowMap[g]=Q,i.pointShadowMatrix[g]=E.shadow.matrix,_++}i.point[g]=H,g++}else if(E.isHemisphereLight){const H=e.get(E);H.skyColor.copy(E.color).multiplyScalar(B),H.groundColor.copy(E.groundColor).multiplyScalar(B),i.hemi[d]=H,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ve.LTC_FLOAT_1,i.rectAreaLTC2=ve.LTC_FLOAT_2):(i.rectAreaLTC1=ve.LTC_HALF_1,i.rectAreaLTC2=ve.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=f,i.ambient[2]=h;const L=i.hash;(L.directionalLength!==p||L.pointLength!==g||L.spotLength!==S||L.rectAreaLength!==m||L.hemiLength!==d||L.numDirectionalShadows!==v||L.numPointShadows!==_||L.numSpotShadows!==y||L.numSpotMaps!==b||L.numLightProbes!==w)&&(i.directional.length=p,i.spot.length=S,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=y+b-C,i.spotLightMap.length=b,i.numSpotLightShadowsWithMaps=C,i.numLightProbes=w,L.directionalLength=p,L.pointLength=g,L.spotLength=S,L.rectAreaLength=m,L.hemiLength=d,L.numDirectionalShadows=v,L.numPointShadows=_,L.numSpotShadows=y,L.numSpotMaps=b,L.numLightProbes=w,i.version=_A++)}function l(c,u){let f=0,h=0,p=0,g=0,S=0;const m=u.matrixWorldInverse;for(let d=0,v=c.length;d<v;d++){const _=c[d];if(_.isDirectionalLight){const y=i.directional[f];y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),f++}else if(_.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),y.direction.sub(r),y.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),y.halfWidth.set(_.width*.5,0,0),y.halfHeight.set(0,_.height*.5,0),y.halfWidth.applyMatrix4(o),y.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const y=i.point[h];y.position.setFromMatrixPosition(_.matrixWorld),y.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){const y=i.hemi[S];y.direction.setFromMatrixPosition(_.matrixWorld),y.direction.transformDirection(m),S++}}}return{setup:a,setupView:l,state:i}}function R0(t){const e=new yA(t),n=[],i=[];function r(u){c.camera=u,n.length=0,i.length=0}function s(u){n.push(u)}function o(u){i.push(u)}function a(){e.setup(n)}function l(u){e.setupView(n,u)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function SA(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new R0(t),e.set(r,[a])):s>=o.length?(a=new R0(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}class MA extends vo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=gM,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class EA extends vo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const wA=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TA=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function AA(t,e,n){let i=new lp;const r=new ue,s=new ue,o=new ht,a=new MA({depthPacking:vM}),l=new EA,c={},u=n.maxTextureSize,f={[gr]:Sn,[Sn]:gr,[Bn]:Bn},h=new Vi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ue},radius:{value:4}},vertexShader:wA,fragmentShader:TA}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new rn;g.setAttribute("position",new jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const S=new ct(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=f_;let d=this.type;this.render=function(C,w,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||C.length===0)return;const G=t.getRenderTarget(),x=t.getActiveCubeFace(),E=t.getActiveMipmapLevel(),z=t.state;z.setBlending(hr),z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const B=d!==Ai&&this.type===Ai,j=d===Ai&&this.type!==Ai;for(let Q=0,H=C.length;Q<H;Q++){const ee=C[Q],I=ee.shadow;if(I===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(I.autoUpdate===!1&&I.needsUpdate===!1)continue;r.copy(I.mapSize);const q=I.getFrameExtents();if(r.multiply(q),s.copy(I.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/q.x),r.x=s.x*q.x,I.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/q.y),r.y=s.y*q.y,I.mapSize.y=s.y)),I.map===null||B===!0||j===!0){const le=this.type!==Ai?{minFilter:Gn,magFilter:Gn}:{};I.map!==null&&I.map.dispose(),I.map=new Qr(r.x,r.y,le),I.map.texture.name=ee.name+".shadowMap",I.camera.updateProjectionMatrix()}t.setRenderTarget(I.map),t.clear();const J=I.getViewportCount();for(let le=0;le<J;le++){const Ce=I.getViewport(le);o.set(s.x*Ce.x,s.y*Ce.y,s.x*Ce.z,s.y*Ce.w),z.viewport(o),I.updateMatrices(ee,le),i=I.getFrustum(),y(w,L,I.camera,ee,this.type)}I.isPointLightShadow!==!0&&this.type===Ai&&v(I,L),I.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(G,x,E)};function v(C,w){const L=e.update(S);h.defines.VSM_SAMPLES!==C.blurSamples&&(h.defines.VSM_SAMPLES=C.blurSamples,p.defines.VSM_SAMPLES=C.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),C.mapPass===null&&(C.mapPass=new Qr(r.x,r.y)),h.uniforms.shadow_pass.value=C.map.texture,h.uniforms.resolution.value=C.mapSize,h.uniforms.radius.value=C.radius,t.setRenderTarget(C.mapPass),t.clear(),t.renderBufferDirect(w,null,L,h,S,null),p.uniforms.shadow_pass.value=C.mapPass.texture,p.uniforms.resolution.value=C.mapSize,p.uniforms.radius.value=C.radius,t.setRenderTarget(C.map),t.clear(),t.renderBufferDirect(w,null,L,p,S,null)}function _(C,w,L,G){let x=null;const E=L.isPointLight===!0?C.customDistanceMaterial:C.customDepthMaterial;if(E!==void 0)x=E;else if(x=L.isPointLight===!0?l:a,t.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const z=x.uuid,B=w.uuid;let j=c[z];j===void 0&&(j={},c[z]=j);let Q=j[B];Q===void 0&&(Q=x.clone(),j[B]=Q,w.addEventListener("dispose",b)),x=Q}if(x.visible=w.visible,x.wireframe=w.wireframe,G===Ai?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:f[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,L.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=t.properties.get(x);z.light=L}return x}function y(C,w,L,G,x){if(C.visible===!1)return;if(C.layers.test(w.layers)&&(C.isMesh||C.isLine||C.isPoints)&&(C.castShadow||C.receiveShadow&&x===Ai)&&(!C.frustumCulled||i.intersectsObject(C))){C.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,C.matrixWorld);const B=e.update(C),j=C.material;if(Array.isArray(j)){const Q=B.groups;for(let H=0,ee=Q.length;H<ee;H++){const I=Q[H],q=j[I.materialIndex];if(q&&q.visible){const J=_(C,q,G,x);C.onBeforeShadow(t,C,w,L,B,J,I),t.renderBufferDirect(L,null,B,J,C,I),C.onAfterShadow(t,C,w,L,B,J,I)}}}else if(j.visible){const Q=_(C,j,G,x);C.onBeforeShadow(t,C,w,L,B,Q,null),t.renderBufferDirect(L,null,B,Q,C,null),C.onAfterShadow(t,C,w,L,B,Q,null)}}const z=C.children;for(let B=0,j=z.length;B<j;B++)y(z[B],w,L,G,x)}function b(C){C.target.removeEventListener("dispose",b);for(const L in c){const G=c[L],x=C.target.uuid;x in G&&(G[x].dispose(),delete G[x])}}}const CA={[mh]:gh,[vh]:yh,[_h]:Sh,[oo]:xh,[gh]:mh,[yh]:vh,[Sh]:_h,[xh]:oo};function RA(t){function e(){let D=!1;const Y=new ht;let O=null;const X=new ht(0,0,0,0);return{setMask:function(ie){O!==ie&&!D&&(t.colorMask(ie,ie,ie,ie),O=ie)},setLocked:function(ie){D=ie},setClear:function(ie,ce,Ue,mt,Ct){Ct===!0&&(ie*=mt,ce*=mt,Ue*=mt),Y.set(ie,ce,Ue,mt),X.equals(Y)===!1&&(t.clearColor(ie,ce,Ue,mt),X.copy(Y))},reset:function(){D=!1,O=null,X.set(-1,0,0,0)}}}function n(){let D=!1,Y=!1,O=null,X=null,ie=null;return{setReversed:function(ce){Y=ce},setTest:function(ce){ce?_e(t.DEPTH_TEST):de(t.DEPTH_TEST)},setMask:function(ce){O!==ce&&!D&&(t.depthMask(ce),O=ce)},setFunc:function(ce){if(Y&&(ce=CA[ce]),X!==ce){switch(ce){case mh:t.depthFunc(t.NEVER);break;case gh:t.depthFunc(t.ALWAYS);break;case vh:t.depthFunc(t.LESS);break;case oo:t.depthFunc(t.LEQUAL);break;case _h:t.depthFunc(t.EQUAL);break;case xh:t.depthFunc(t.GEQUAL);break;case yh:t.depthFunc(t.GREATER);break;case Sh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}X=ce}},setLocked:function(ce){D=ce},setClear:function(ce){ie!==ce&&(t.clearDepth(ce),ie=ce)},reset:function(){D=!1,O=null,X=null,ie=null}}}function i(){let D=!1,Y=null,O=null,X=null,ie=null,ce=null,Ue=null,mt=null,Ct=null;return{setTest:function(et){D||(et?_e(t.STENCIL_TEST):de(t.STENCIL_TEST))},setMask:function(et){Y!==et&&!D&&(t.stencilMask(et),Y=et)},setFunc:function(et,dn,yi){(O!==et||X!==dn||ie!==yi)&&(t.stencilFunc(et,dn,yi),O=et,X=dn,ie=yi)},setOp:function(et,dn,yi){(ce!==et||Ue!==dn||mt!==yi)&&(t.stencilOp(et,dn,yi),ce=et,Ue=dn,mt=yi)},setLocked:function(et){D=et},setClear:function(et){Ct!==et&&(t.clearStencil(et),Ct=et)},reset:function(){D=!1,Y=null,O=null,X=null,ie=null,ce=null,Ue=null,mt=null,Ct=null}}}const r=new e,s=new n,o=new i,a=new WeakMap,l=new WeakMap;let c={},u={},f=new WeakMap,h=[],p=null,g=!1,S=null,m=null,d=null,v=null,_=null,y=null,b=null,C=new Qe(0,0,0),w=0,L=!1,G=null,x=null,E=null,z=null,B=null;const j=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Q=!1,H=0;const ee=t.getParameter(t.VERSION);ee.indexOf("WebGL")!==-1?(H=parseFloat(/^WebGL (\d)/.exec(ee)[1]),Q=H>=1):ee.indexOf("OpenGL ES")!==-1&&(H=parseFloat(/^OpenGL ES (\d)/.exec(ee)[1]),Q=H>=2);let I=null,q={};const J=t.getParameter(t.SCISSOR_BOX),le=t.getParameter(t.VIEWPORT),Ce=new ht().fromArray(J),je=new ht().fromArray(le);function K(D,Y,O,X){const ie=new Uint8Array(4),ce=t.createTexture();t.bindTexture(D,ce),t.texParameteri(D,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(D,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ue=0;Ue<O;Ue++)D===t.TEXTURE_3D||D===t.TEXTURE_2D_ARRAY?t.texImage3D(Y,0,t.RGBA,1,1,X,0,t.RGBA,t.UNSIGNED_BYTE,ie):t.texImage2D(Y+Ue,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ie);return ce}const re={};re[t.TEXTURE_2D]=K(t.TEXTURE_2D,t.TEXTURE_2D,1),re[t.TEXTURE_CUBE_MAP]=K(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),re[t.TEXTURE_2D_ARRAY]=K(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),re[t.TEXTURE_3D]=K(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),o.setClear(0),_e(t.DEPTH_TEST),s.setFunc(oo),fe(!1),se(Om),_e(t.CULL_FACE),P(hr);function _e(D){c[D]!==!0&&(t.enable(D),c[D]=!0)}function de(D){c[D]!==!1&&(t.disable(D),c[D]=!1)}function Ie(D,Y){return u[D]!==Y?(t.bindFramebuffer(D,Y),u[D]=Y,D===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=Y),D===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=Y),!0):!1}function Fe(D,Y){let O=h,X=!1;if(D){O=f.get(Y),O===void 0&&(O=[],f.set(Y,O));const ie=D.textures;if(O.length!==ie.length||O[0]!==t.COLOR_ATTACHMENT0){for(let ce=0,Ue=ie.length;ce<Ue;ce++)O[ce]=t.COLOR_ATTACHMENT0+ce;O.length=ie.length,X=!0}}else O[0]!==t.BACK&&(O[0]=t.BACK,X=!0);X&&t.drawBuffers(O)}function ze(D){return p!==D?(t.useProgram(D),p=D,!0):!1}const Xe={[Ur]:t.FUNC_ADD,[WS]:t.FUNC_SUBTRACT,[jS]:t.FUNC_REVERSE_SUBTRACT};Xe[XS]=t.MIN,Xe[KS]=t.MAX;const ne={[qS]:t.ZERO,[YS]:t.ONE,[$S]:t.SRC_COLOR,[dh]:t.SRC_ALPHA,[nM]:t.SRC_ALPHA_SATURATE,[eM]:t.DST_COLOR,[JS]:t.DST_ALPHA,[ZS]:t.ONE_MINUS_SRC_COLOR,[ph]:t.ONE_MINUS_SRC_ALPHA,[tM]:t.ONE_MINUS_DST_COLOR,[QS]:t.ONE_MINUS_DST_ALPHA,[iM]:t.CONSTANT_COLOR,[rM]:t.ONE_MINUS_CONSTANT_COLOR,[sM]:t.CONSTANT_ALPHA,[oM]:t.ONE_MINUS_CONSTANT_ALPHA};function P(D,Y,O,X,ie,ce,Ue,mt,Ct,et){if(D===hr){g===!0&&(de(t.BLEND),g=!1);return}if(g===!1&&(_e(t.BLEND),g=!0),D!==GS){if(D!==S||et!==L){if((m!==Ur||_!==Ur)&&(t.blendEquation(t.FUNC_ADD),m=Ur,_=Ur),et)switch(D){case Ks:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ea:t.blendFunc(t.ONE,t.ONE);break;case zm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Bm:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Ks:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Ea:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case zm:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Bm:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}d=null,v=null,y=null,b=null,C.set(0,0,0),w=0,S=D,L=et}return}ie=ie||Y,ce=ce||O,Ue=Ue||X,(Y!==m||ie!==_)&&(t.blendEquationSeparate(Xe[Y],Xe[ie]),m=Y,_=ie),(O!==d||X!==v||ce!==y||Ue!==b)&&(t.blendFuncSeparate(ne[O],ne[X],ne[ce],ne[Ue]),d=O,v=X,y=ce,b=Ue),(mt.equals(C)===!1||Ct!==w)&&(t.blendColor(mt.r,mt.g,mt.b,Ct),C.copy(mt),w=Ct),S=D,L=!1}function me(D,Y){D.side===Bn?de(t.CULL_FACE):_e(t.CULL_FACE);let O=D.side===Sn;Y&&(O=!O),fe(O),D.blending===Ks&&D.transparent===!1?P(hr):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),s.setFunc(D.depthFunc),s.setTest(D.depthTest),s.setMask(D.depthWrite),r.setMask(D.colorWrite);const X=D.stencilWrite;o.setTest(X),X&&(o.setMask(D.stencilWriteMask),o.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),o.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),Re(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?_e(t.SAMPLE_ALPHA_TO_COVERAGE):de(t.SAMPLE_ALPHA_TO_COVERAGE)}function fe(D){G!==D&&(D?t.frontFace(t.CW):t.frontFace(t.CCW),G=D)}function se(D){D!==VS?(_e(t.CULL_FACE),D!==x&&(D===Om?t.cullFace(t.BACK):D===HS?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):de(t.CULL_FACE),x=D}function pe(D){D!==E&&(Q&&t.lineWidth(D),E=D)}function Re(D,Y,O){D?(_e(t.POLYGON_OFFSET_FILL),(z!==Y||B!==O)&&(t.polygonOffset(Y,O),z=Y,B=O)):de(t.POLYGON_OFFSET_FILL)}function xe(D){D?_e(t.SCISSOR_TEST):de(t.SCISSOR_TEST)}function R(D){D===void 0&&(D=t.TEXTURE0+j-1),I!==D&&(t.activeTexture(D),I=D)}function M(D,Y,O){O===void 0&&(I===null?O=t.TEXTURE0+j-1:O=I);let X=q[O];X===void 0&&(X={type:void 0,texture:void 0},q[O]=X),(X.type!==D||X.texture!==Y)&&(I!==O&&(t.activeTexture(O),I=O),t.bindTexture(D,Y||re[D]),X.type=D,X.texture=Y)}function k(){const D=q[I];D!==void 0&&D.type!==void 0&&(t.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{t.compressedTexImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function te(){try{t.compressedTexImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $(){try{t.texSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Te(){try{t.texSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ge(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Se(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function $e(){try{t.texStorage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function oe(){try{t.texStorage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ye(){try{t.texImage2D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function De(){try{t.texImage3D.apply(t,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ke(D){Ce.equals(D)===!1&&(t.scissor(D.x,D.y,D.z,D.w),Ce.copy(D))}function we(D){je.equals(D)===!1&&(t.viewport(D.x,D.y,D.z,D.w),je.copy(D))}function Ze(D,Y){let O=l.get(Y);O===void 0&&(O=new WeakMap,l.set(Y,O));let X=O.get(D);X===void 0&&(X=t.getUniformBlockIndex(Y,D.name),O.set(D,X))}function Ve(D,Y){const X=l.get(Y).get(D);a.get(Y)!==X&&(t.uniformBlockBinding(Y,X,D.__bindingPointIndex),a.set(Y,X))}function it(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),c={},I=null,q={},u={},f=new WeakMap,h=[],p=null,g=!1,S=null,m=null,d=null,v=null,_=null,y=null,b=null,C=new Qe(0,0,0),w=0,L=!1,G=null,x=null,E=null,z=null,B=null,Ce.set(0,0,t.canvas.width,t.canvas.height),je.set(0,0,t.canvas.width,t.canvas.height),r.reset(),s.reset(),o.reset()}return{buffers:{color:r,depth:s,stencil:o},enable:_e,disable:de,bindFramebuffer:Ie,drawBuffers:Fe,useProgram:ze,setBlending:P,setMaterial:me,setFlipSided:fe,setCullFace:se,setLineWidth:pe,setPolygonOffset:Re,setScissorTest:xe,activeTexture:R,bindTexture:M,unbindTexture:k,compressedTexImage2D:Z,compressedTexImage3D:te,texImage2D:ye,texImage3D:De,updateUBOMapping:Ze,uniformBlockBinding:Ve,texStorage2D:$e,texStorage3D:oe,texSubImage2D:$,texSubImage3D:Te,compressedTexSubImage2D:ge,compressedTexSubImage3D:Se,scissor:ke,viewport:we,reset:it}}function b0(t,e,n,i){const r=bA(i);switch(n){case x_:return t*e;case S_:return t*e;case M_:return t*e*2;case E_:return t*e/r.components*r.byteLength;case ip:return t*e/r.components*r.byteLength;case w_:return t*e*2/r.components*r.byteLength;case rp:return t*e*2/r.components*r.byteLength;case y_:return t*e*3/r.components*r.byteLength;case si:return t*e*4/r.components*r.byteLength;case sp:return t*e*4/r.components*r.byteLength;case Wl:case jl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Xl:case Kl:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ah:case Rh:return Math.max(t,16)*Math.max(e,8)/4;case Th:case Ch:return Math.max(t,8)*Math.max(e,8)/2;case bh:case Ph:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Lh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Nh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Ih:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Dh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case Uh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Fh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case kh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Oh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case zh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Bh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Vh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Hh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Gh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Wh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case jh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case ql:case Xh:case Kh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case T_:case qh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Yh:case $h:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function bA(t){switch(t){case Bi:case g_:return{byteLength:1,components:1};case wa:case v_:case Da:return{byteLength:2,components:1};case tp:case np:return{byteLength:2,components:4};case Jr:case ep:case Li:return{byteLength:4,components:1};case __:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}function PA(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ue,u=new WeakMap;let f;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(R,M){return p?new OffscreenCanvas(R,M):Ac("canvas")}function S(R,M,k){let Z=1;const te=xe(R);if((te.width>k||te.height>k)&&(Z=k/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const $=Math.floor(Z*te.width),Te=Math.floor(Z*te.height);f===void 0&&(f=g($,Te));const ge=M?g($,Te):f;return ge.width=$,ge.height=Te,ge.getContext("2d").drawImage(R,0,0,$,Te),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+$+"x"+Te+")."),ge}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),R;return R}function m(R){return R.generateMipmaps&&R.minFilter!==Gn&&R.minFilter!==ri}function d(R){t.generateMipmap(R)}function v(R,M,k,Z,te=!1){if(R!==null){if(t[R]!==void 0)return t[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let $=M;if(M===t.RED&&(k===t.FLOAT&&($=t.R32F),k===t.HALF_FLOAT&&($=t.R16F),k===t.UNSIGNED_BYTE&&($=t.R8)),M===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&($=t.R8UI),k===t.UNSIGNED_SHORT&&($=t.R16UI),k===t.UNSIGNED_INT&&($=t.R32UI),k===t.BYTE&&($=t.R8I),k===t.SHORT&&($=t.R16I),k===t.INT&&($=t.R32I)),M===t.RG&&(k===t.FLOAT&&($=t.RG32F),k===t.HALF_FLOAT&&($=t.RG16F),k===t.UNSIGNED_BYTE&&($=t.RG8)),M===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&($=t.RG8UI),k===t.UNSIGNED_SHORT&&($=t.RG16UI),k===t.UNSIGNED_INT&&($=t.RG32UI),k===t.BYTE&&($=t.RG8I),k===t.SHORT&&($=t.RG16I),k===t.INT&&($=t.RG32I)),M===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&($=t.RGB8UI),k===t.UNSIGNED_SHORT&&($=t.RGB16UI),k===t.UNSIGNED_INT&&($=t.RGB32UI),k===t.BYTE&&($=t.RGB8I),k===t.SHORT&&($=t.RGB16I),k===t.INT&&($=t.RGB32I)),M===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&($=t.RGBA8UI),k===t.UNSIGNED_SHORT&&($=t.RGBA16UI),k===t.UNSIGNED_INT&&($=t.RGBA32UI),k===t.BYTE&&($=t.RGBA8I),k===t.SHORT&&($=t.RGBA16I),k===t.INT&&($=t.RGBA32I)),M===t.RGB&&k===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),M===t.RGBA){const Te=te?Mc:ot.getTransfer(Z);k===t.FLOAT&&($=t.RGBA32F),k===t.HALF_FLOAT&&($=t.RGBA16F),k===t.UNSIGNED_BYTE&&($=Te===yt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(R,M){let k;return R?M===null||M===Jr||M===co?k=t.DEPTH24_STENCIL8:M===Li?k=t.DEPTH32F_STENCIL8:M===wa&&(k=t.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):M===null||M===Jr||M===co?k=t.DEPTH_COMPONENT24:M===Li?k=t.DEPTH_COMPONENT32F:M===wa&&(k=t.DEPTH_COMPONENT16),k}function y(R,M){return m(R)===!0||R.isFramebufferTexture&&R.minFilter!==Gn&&R.minFilter!==ri?Math.log2(Math.max(M.width,M.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?M.mipmaps.length:1}function b(R){const M=R.target;M.removeEventListener("dispose",b),w(M),M.isVideoTexture&&u.delete(M)}function C(R){const M=R.target;M.removeEventListener("dispose",C),G(M)}function w(R){const M=i.get(R);if(M.__webglInit===void 0)return;const k=R.source,Z=h.get(k);if(Z){const te=Z[M.__cacheKey];te.usedTimes--,te.usedTimes===0&&L(R),Object.keys(Z).length===0&&h.delete(k)}i.remove(R)}function L(R){const M=i.get(R);t.deleteTexture(M.__webglTexture);const k=R.source,Z=h.get(k);delete Z[M.__cacheKey],o.memory.textures--}function G(R){const M=i.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(M.__webglFramebuffer[Z]))for(let te=0;te<M.__webglFramebuffer[Z].length;te++)t.deleteFramebuffer(M.__webglFramebuffer[Z][te]);else t.deleteFramebuffer(M.__webglFramebuffer[Z]);M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer[Z])}else{if(Array.isArray(M.__webglFramebuffer))for(let Z=0;Z<M.__webglFramebuffer.length;Z++)t.deleteFramebuffer(M.__webglFramebuffer[Z]);else t.deleteFramebuffer(M.__webglFramebuffer);if(M.__webglDepthbuffer&&t.deleteRenderbuffer(M.__webglDepthbuffer),M.__webglMultisampledFramebuffer&&t.deleteFramebuffer(M.__webglMultisampledFramebuffer),M.__webglColorRenderbuffer)for(let Z=0;Z<M.__webglColorRenderbuffer.length;Z++)M.__webglColorRenderbuffer[Z]&&t.deleteRenderbuffer(M.__webglColorRenderbuffer[Z]);M.__webglDepthRenderbuffer&&t.deleteRenderbuffer(M.__webglDepthRenderbuffer)}const k=R.textures;for(let Z=0,te=k.length;Z<te;Z++){const $=i.get(k[Z]);$.__webglTexture&&(t.deleteTexture($.__webglTexture),o.memory.textures--),i.remove(k[Z])}i.remove(R)}let x=0;function E(){x=0}function z(){const R=x;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),x+=1,R}function B(R){const M=[];return M.push(R.wrapS),M.push(R.wrapT),M.push(R.wrapR||0),M.push(R.magFilter),M.push(R.minFilter),M.push(R.anisotropy),M.push(R.internalFormat),M.push(R.format),M.push(R.type),M.push(R.generateMipmaps),M.push(R.premultiplyAlpha),M.push(R.flipY),M.push(R.unpackAlignment),M.push(R.colorSpace),M.join()}function j(R,M){const k=i.get(R);if(R.isVideoTexture&&pe(R),R.isRenderTargetTexture===!1&&R.version>0&&k.__version!==R.version){const Z=R.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{je(k,R,M);return}}n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+M)}function Q(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){je(k,R,M);return}n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+M)}function H(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){je(k,R,M);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+M)}function ee(R,M){const k=i.get(R);if(R.version>0&&k.__version!==R.version){K(k,R,M);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+M)}const I={[Xr]:t.REPEAT,[Vr]:t.CLAMP_TO_EDGE,[wh]:t.MIRRORED_REPEAT},q={[Gn]:t.NEAREST,[mM]:t.NEAREST_MIPMAP_NEAREST,[il]:t.NEAREST_MIPMAP_LINEAR,[ri]:t.LINEAR,[Pu]:t.LINEAR_MIPMAP_NEAREST,[Hr]:t.LINEAR_MIPMAP_LINEAR},J={[xM]:t.NEVER,[TM]:t.ALWAYS,[yM]:t.LESS,[C_]:t.LEQUAL,[SM]:t.EQUAL,[wM]:t.GEQUAL,[MM]:t.GREATER,[EM]:t.NOTEQUAL};function le(R,M){if(M.type===Li&&e.has("OES_texture_float_linear")===!1&&(M.magFilter===ri||M.magFilter===Pu||M.magFilter===il||M.magFilter===Hr||M.minFilter===ri||M.minFilter===Pu||M.minFilter===il||M.minFilter===Hr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(R,t.TEXTURE_WRAP_S,I[M.wrapS]),t.texParameteri(R,t.TEXTURE_WRAP_T,I[M.wrapT]),(R===t.TEXTURE_3D||R===t.TEXTURE_2D_ARRAY)&&t.texParameteri(R,t.TEXTURE_WRAP_R,I[M.wrapR]),t.texParameteri(R,t.TEXTURE_MAG_FILTER,q[M.magFilter]),t.texParameteri(R,t.TEXTURE_MIN_FILTER,q[M.minFilter]),M.compareFunction&&(t.texParameteri(R,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(R,t.TEXTURE_COMPARE_FUNC,J[M.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(M.magFilter===Gn||M.minFilter!==il&&M.minFilter!==Hr||M.type===Li&&e.has("OES_texture_float_linear")===!1)return;if(M.anisotropy>1||i.get(M).__currentAnisotropy){const k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(R,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),i.get(M).__currentAnisotropy=M.anisotropy}}}function Ce(R,M){let k=!1;R.__webglInit===void 0&&(R.__webglInit=!0,M.addEventListener("dispose",b));const Z=M.source;let te=h.get(Z);te===void 0&&(te={},h.set(Z,te));const $=B(M);if($!==R.__cacheKey){te[$]===void 0&&(te[$]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,k=!0),te[$].usedTimes++;const Te=te[R.__cacheKey];Te!==void 0&&(te[R.__cacheKey].usedTimes--,Te.usedTimes===0&&L(M)),R.__cacheKey=$,R.__webglTexture=te[$].texture}return k}function je(R,M,k){let Z=t.TEXTURE_2D;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(Z=t.TEXTURE_2D_ARRAY),M.isData3DTexture&&(Z=t.TEXTURE_3D);const te=Ce(R,M),$=M.source;n.bindTexture(Z,R.__webglTexture,t.TEXTURE0+k);const Te=i.get($);if($.version!==Te.__version||te===!0){n.activeTexture(t.TEXTURE0+k);const ge=ot.getPrimaries(ot.workingColorSpace),Se=M.colorSpace===tr?null:ot.getPrimaries(M.colorSpace),$e=M.colorSpace===tr||ge===Se?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,$e);let oe=S(M.image,!1,r.maxTextureSize);oe=Re(M,oe);const ye=s.convert(M.format,M.colorSpace),De=s.convert(M.type);let ke=v(M.internalFormat,ye,De,M.colorSpace,M.isVideoTexture);le(Z,M);let we;const Ze=M.mipmaps,Ve=M.isVideoTexture!==!0,it=Te.__version===void 0||te===!0,D=$.dataReady,Y=y(M,oe);if(M.isDepthTexture)ke=_(M.format===uo,M.type),it&&(Ve?n.texStorage2D(t.TEXTURE_2D,1,ke,oe.width,oe.height):n.texImage2D(t.TEXTURE_2D,0,ke,oe.width,oe.height,0,ye,De,null));else if(M.isDataTexture)if(Ze.length>0){Ve&&it&&n.texStorage2D(t.TEXTURE_2D,Y,ke,Ze[0].width,Ze[0].height);for(let O=0,X=Ze.length;O<X;O++)we=Ze[O],Ve?D&&n.texSubImage2D(t.TEXTURE_2D,O,0,0,we.width,we.height,ye,De,we.data):n.texImage2D(t.TEXTURE_2D,O,ke,we.width,we.height,0,ye,De,we.data);M.generateMipmaps=!1}else Ve?(it&&n.texStorage2D(t.TEXTURE_2D,Y,ke,oe.width,oe.height),D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe.width,oe.height,ye,De,oe.data)):n.texImage2D(t.TEXTURE_2D,0,ke,oe.width,oe.height,0,ye,De,oe.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ve&&it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Y,ke,Ze[0].width,Ze[0].height,oe.depth);for(let O=0,X=Ze.length;O<X;O++)if(we=Ze[O],M.format!==si)if(ye!==null)if(Ve){if(D)if(M.layerUpdates.size>0){const ie=b0(we.width,we.height,M.format,M.type);for(const ce of M.layerUpdates){const Ue=we.data.subarray(ce*ie/we.data.BYTES_PER_ELEMENT,(ce+1)*ie/we.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,O,0,0,ce,we.width,we.height,1,ye,Ue,0,0)}M.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,O,0,0,0,we.width,we.height,oe.depth,ye,we.data,0,0)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,O,ke,we.width,we.height,oe.depth,0,we.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ve?D&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,O,0,0,0,we.width,we.height,oe.depth,ye,De,we.data):n.texImage3D(t.TEXTURE_2D_ARRAY,O,ke,we.width,we.height,oe.depth,0,ye,De,we.data)}else{Ve&&it&&n.texStorage2D(t.TEXTURE_2D,Y,ke,Ze[0].width,Ze[0].height);for(let O=0,X=Ze.length;O<X;O++)we=Ze[O],M.format!==si?ye!==null?Ve?D&&n.compressedTexSubImage2D(t.TEXTURE_2D,O,0,0,we.width,we.height,ye,we.data):n.compressedTexImage2D(t.TEXTURE_2D,O,ke,we.width,we.height,0,we.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?D&&n.texSubImage2D(t.TEXTURE_2D,O,0,0,we.width,we.height,ye,De,we.data):n.texImage2D(t.TEXTURE_2D,O,ke,we.width,we.height,0,ye,De,we.data)}else if(M.isDataArrayTexture)if(Ve){if(it&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Y,ke,oe.width,oe.height,oe.depth),D)if(M.layerUpdates.size>0){const O=b0(oe.width,oe.height,M.format,M.type);for(const X of M.layerUpdates){const ie=oe.data.subarray(X*O/oe.data.BYTES_PER_ELEMENT,(X+1)*O/oe.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,X,oe.width,oe.height,1,ye,De,ie)}M.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,ye,De,oe.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,ke,oe.width,oe.height,oe.depth,0,ye,De,oe.data);else if(M.isData3DTexture)Ve?(it&&n.texStorage3D(t.TEXTURE_3D,Y,ke,oe.width,oe.height,oe.depth),D&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,ye,De,oe.data)):n.texImage3D(t.TEXTURE_3D,0,ke,oe.width,oe.height,oe.depth,0,ye,De,oe.data);else if(M.isFramebufferTexture){if(it)if(Ve)n.texStorage2D(t.TEXTURE_2D,Y,ke,oe.width,oe.height);else{let O=oe.width,X=oe.height;for(let ie=0;ie<Y;ie++)n.texImage2D(t.TEXTURE_2D,ie,ke,O,X,0,ye,De,null),O>>=1,X>>=1}}else if(Ze.length>0){if(Ve&&it){const O=xe(Ze[0]);n.texStorage2D(t.TEXTURE_2D,Y,ke,O.width,O.height)}for(let O=0,X=Ze.length;O<X;O++)we=Ze[O],Ve?D&&n.texSubImage2D(t.TEXTURE_2D,O,0,0,ye,De,we):n.texImage2D(t.TEXTURE_2D,O,ke,ye,De,we);M.generateMipmaps=!1}else if(Ve){if(it){const O=xe(oe);n.texStorage2D(t.TEXTURE_2D,Y,ke,O.width,O.height)}D&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ye,De,oe)}else n.texImage2D(t.TEXTURE_2D,0,ke,ye,De,oe);m(M)&&d(Z),Te.__version=$.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function K(R,M,k){if(M.image.length!==6)return;const Z=Ce(R,M),te=M.source;n.bindTexture(t.TEXTURE_CUBE_MAP,R.__webglTexture,t.TEXTURE0+k);const $=i.get(te);if(te.version!==$.__version||Z===!0){n.activeTexture(t.TEXTURE0+k);const Te=ot.getPrimaries(ot.workingColorSpace),ge=M.colorSpace===tr?null:ot.getPrimaries(M.colorSpace),Se=M.colorSpace===tr||Te===ge?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,M.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,M.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,M.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Se);const $e=M.isCompressedTexture||M.image[0].isCompressedTexture,oe=M.image[0]&&M.image[0].isDataTexture,ye=[];for(let X=0;X<6;X++)!$e&&!oe?ye[X]=S(M.image[X],!0,r.maxCubemapSize):ye[X]=oe?M.image[X].image:M.image[X],ye[X]=Re(M,ye[X]);const De=ye[0],ke=s.convert(M.format,M.colorSpace),we=s.convert(M.type),Ze=v(M.internalFormat,ke,we,M.colorSpace),Ve=M.isVideoTexture!==!0,it=$.__version===void 0||Z===!0,D=te.dataReady;let Y=y(M,De);le(t.TEXTURE_CUBE_MAP,M);let O;if($e){Ve&&it&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Y,Ze,De.width,De.height);for(let X=0;X<6;X++){O=ye[X].mipmaps;for(let ie=0;ie<O.length;ie++){const ce=O[ie];M.format!==si?ke!==null?Ve?D&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,0,0,ce.width,ce.height,ke,ce.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,Ze,ce.width,ce.height,0,ce.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ve?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,0,0,ce.width,ce.height,ke,we,ce.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie,Ze,ce.width,ce.height,0,ke,we,ce.data)}}}else{if(O=M.mipmaps,Ve&&it){O.length>0&&Y++;const X=xe(ye[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Y,Ze,X.width,X.height)}for(let X=0;X<6;X++)if(oe){Ve?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ye[X].width,ye[X].height,ke,we,ye[X].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ze,ye[X].width,ye[X].height,0,ke,we,ye[X].data);for(let ie=0;ie<O.length;ie++){const Ue=O[ie].image[X].image;Ve?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,0,0,Ue.width,Ue.height,ke,we,Ue.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,Ze,Ue.width,Ue.height,0,ke,we,Ue.data)}}else{Ve?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,0,0,ke,we,ye[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,0,Ze,ke,we,ye[X]);for(let ie=0;ie<O.length;ie++){const ce=O[ie];Ve?D&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,0,0,ke,we,ce.image[X]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+X,ie+1,Ze,ke,we,ce.image[X])}}}m(M)&&d(t.TEXTURE_CUBE_MAP),$.__version=te.version,M.onUpdate&&M.onUpdate(M)}R.__version=M.version}function re(R,M,k,Z,te,$){const Te=s.convert(k.format,k.colorSpace),ge=s.convert(k.type),Se=v(k.internalFormat,Te,ge,k.colorSpace);if(!i.get(M).__hasExternalTextures){const oe=Math.max(1,M.width>>$),ye=Math.max(1,M.height>>$);te===t.TEXTURE_3D||te===t.TEXTURE_2D_ARRAY?n.texImage3D(te,$,Se,oe,ye,M.depth,0,Te,ge,null):n.texImage2D(te,$,Se,oe,ye,0,Te,ge,null)}n.bindFramebuffer(t.FRAMEBUFFER,R),se(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Z,te,i.get(k).__webglTexture,0,fe(M)):(te===t.TEXTURE_2D||te>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Z,te,i.get(k).__webglTexture,$),n.bindFramebuffer(t.FRAMEBUFFER,null)}function _e(R,M,k){if(t.bindRenderbuffer(t.RENDERBUFFER,R),M.depthBuffer){const Z=M.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,$=_(M.stencilBuffer,te),Te=M.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ge=fe(M);se(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ge,$,M.width,M.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,ge,$,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,$,M.width,M.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Te,t.RENDERBUFFER,R)}else{const Z=M.textures;for(let te=0;te<Z.length;te++){const $=Z[te],Te=s.convert($.format,$.colorSpace),ge=s.convert($.type),Se=v($.internalFormat,Te,ge,$.colorSpace),$e=fe(M);k&&se(M)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,$e,Se,M.width,M.height):se(M)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,$e,Se,M.width,M.height):t.renderbufferStorage(t.RENDERBUFFER,Se,M.width,M.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function de(R,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,R),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),j(M.depthTexture,0);const Z=i.get(M.depthTexture).__webglTexture,te=fe(M);if(M.depthTexture.format===qs)se(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,Z,0);else if(M.depthTexture.format===uo)se(M)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0,te):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ie(R){const M=i.get(R),k=R.isWebGLCubeRenderTarget===!0;if(M.__boundDepthTexture!==R.depthTexture){const Z=R.depthTexture;if(M.__depthDisposeCallback&&M.__depthDisposeCallback(),Z){const te=()=>{delete M.__boundDepthTexture,delete M.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),M.__depthDisposeCallback=te}M.__boundDepthTexture=Z}if(R.depthTexture&&!M.__autoAllocateDepthBuffer){if(k)throw new Error("target.depthTexture not supported in Cube render targets");de(M.__webglFramebuffer,R)}else if(k){M.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer[Z]),M.__webglDepthbuffer[Z]===void 0)M.__webglDepthbuffer[Z]=t.createRenderbuffer(),_e(M.__webglDepthbuffer[Z],R,!1);else{const te=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,$=M.__webglDepthbuffer[Z];t.bindRenderbuffer(t.RENDERBUFFER,$),t.framebufferRenderbuffer(t.FRAMEBUFFER,te,t.RENDERBUFFER,$)}}else if(n.bindFramebuffer(t.FRAMEBUFFER,M.__webglFramebuffer),M.__webglDepthbuffer===void 0)M.__webglDepthbuffer=t.createRenderbuffer(),_e(M.__webglDepthbuffer,R,!1);else{const Z=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,te=M.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,te),t.framebufferRenderbuffer(t.FRAMEBUFFER,Z,t.RENDERBUFFER,te)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Fe(R,M,k){const Z=i.get(R);M!==void 0&&re(Z.__webglFramebuffer,R,R.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&Ie(R)}function ze(R){const M=R.texture,k=i.get(R),Z=i.get(M);R.addEventListener("dispose",C);const te=R.textures,$=R.isWebGLCubeRenderTarget===!0,Te=te.length>1;if(Te||(Z.__webglTexture===void 0&&(Z.__webglTexture=t.createTexture()),Z.__version=M.version,o.memory.textures++),$){k.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer[ge]=[];for(let Se=0;Se<M.mipmaps.length;Se++)k.__webglFramebuffer[ge][Se]=t.createFramebuffer()}else k.__webglFramebuffer[ge]=t.createFramebuffer()}else{if(M.mipmaps&&M.mipmaps.length>0){k.__webglFramebuffer=[];for(let ge=0;ge<M.mipmaps.length;ge++)k.__webglFramebuffer[ge]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(Te)for(let ge=0,Se=te.length;ge<Se;ge++){const $e=i.get(te[ge]);$e.__webglTexture===void 0&&($e.__webglTexture=t.createTexture(),o.memory.textures++)}if(R.samples>0&&se(R)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let ge=0;ge<te.length;ge++){const Se=te[ge];k.__webglColorRenderbuffer[ge]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[ge]);const $e=s.convert(Se.format,Se.colorSpace),oe=s.convert(Se.type),ye=v(Se.internalFormat,$e,oe,Se.colorSpace,R.isXRRenderTarget===!0),De=fe(R);t.renderbufferStorageMultisample(t.RENDERBUFFER,De,ye,R.width,R.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ge,t.RENDERBUFFER,k.__webglColorRenderbuffer[ge])}t.bindRenderbuffer(t.RENDERBUFFER,null),R.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),_e(k.__webglDepthRenderbuffer,R,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if($){n.bindTexture(t.TEXTURE_CUBE_MAP,Z.__webglTexture),le(t.TEXTURE_CUBE_MAP,M);for(let ge=0;ge<6;ge++)if(M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)re(k.__webglFramebuffer[ge][Se],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,Se);else re(k.__webglFramebuffer[ge],R,M,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);m(M)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Te){for(let ge=0,Se=te.length;ge<Se;ge++){const $e=te[ge],oe=i.get($e);n.bindTexture(t.TEXTURE_2D,oe.__webglTexture),le(t.TEXTURE_2D,$e),re(k.__webglFramebuffer,R,$e,t.COLOR_ATTACHMENT0+ge,t.TEXTURE_2D,0),m($e)&&d(t.TEXTURE_2D)}n.unbindTexture()}else{let ge=t.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(ge=R.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(ge,Z.__webglTexture),le(ge,M),M.mipmaps&&M.mipmaps.length>0)for(let Se=0;Se<M.mipmaps.length;Se++)re(k.__webglFramebuffer[Se],R,M,t.COLOR_ATTACHMENT0,ge,Se);else re(k.__webglFramebuffer,R,M,t.COLOR_ATTACHMENT0,ge,0);m(M)&&d(ge),n.unbindTexture()}R.depthBuffer&&Ie(R)}function Xe(R){const M=R.textures;for(let k=0,Z=M.length;k<Z;k++){const te=M[k];if(m(te)){const $=R.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,Te=i.get(te).__webglTexture;n.bindTexture($,Te),d($),n.unbindTexture()}}}const ne=[],P=[];function me(R){if(R.samples>0){if(se(R)===!1){const M=R.textures,k=R.width,Z=R.height;let te=t.COLOR_BUFFER_BIT;const $=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Te=i.get(R),ge=M.length>1;if(ge)for(let Se=0;Se<M.length;Se++)n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Te.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglFramebuffer);for(let Se=0;Se<M.length;Se++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(te|=t.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(te|=t.STENCIL_BUFFER_BIT)),ge){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Se]);const $e=i.get(M[Se]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,$e,0)}t.blitFramebuffer(0,0,k,Z,0,0,k,Z,te,t.NEAREST),l===!0&&(ne.length=0,P.length=0,ne.push(t.COLOR_ATTACHMENT0+Se),R.depthBuffer&&R.resolveDepthBuffer===!1&&(ne.push($),P.push($),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,P)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,ne))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),ge)for(let Se=0;Se<M.length;Se++){n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.RENDERBUFFER,Te.__webglColorRenderbuffer[Se]);const $e=i.get(M[Se]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Te.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Se,t.TEXTURE_2D,$e,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Te.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const M=R.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[M])}}}function fe(R){return Math.min(r.maxSamples,R.samples)}function se(R){const M=i.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function pe(R){const M=o.render.frame;u.get(R)!==M&&(u.set(R,M),R.update())}function Re(R,M){const k=R.colorSpace,Z=R.format,te=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||k!==Sr&&k!==tr&&(ot.getTransfer(k)===yt?(Z!==si||te!==Bi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",k)),M}function xe(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=E,this.setTexture2D=j,this.setTexture2DArray=Q,this.setTexture3D=H,this.setTextureCube=ee,this.rebindTextures=Fe,this.setupRenderTarget=ze,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=me,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=re,this.useMultisampledRTT=se}function LA(t,e){function n(i,r=tr){let s;const o=ot.getTransfer(r);if(i===Bi)return t.UNSIGNED_BYTE;if(i===tp)return t.UNSIGNED_SHORT_4_4_4_4;if(i===np)return t.UNSIGNED_SHORT_5_5_5_1;if(i===__)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===g_)return t.BYTE;if(i===v_)return t.SHORT;if(i===wa)return t.UNSIGNED_SHORT;if(i===ep)return t.INT;if(i===Jr)return t.UNSIGNED_INT;if(i===Li)return t.FLOAT;if(i===Da)return t.HALF_FLOAT;if(i===x_)return t.ALPHA;if(i===y_)return t.RGB;if(i===si)return t.RGBA;if(i===S_)return t.LUMINANCE;if(i===M_)return t.LUMINANCE_ALPHA;if(i===qs)return t.DEPTH_COMPONENT;if(i===uo)return t.DEPTH_STENCIL;if(i===E_)return t.RED;if(i===ip)return t.RED_INTEGER;if(i===w_)return t.RG;if(i===rp)return t.RG_INTEGER;if(i===sp)return t.RGBA_INTEGER;if(i===Wl||i===jl||i===Xl||i===Kl)if(o===yt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===Wl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===jl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Kl)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===Wl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===jl)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xl)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Kl)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Th||i===Ah||i===Ch||i===Rh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===Th)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Ah)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Ch)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===bh||i===Ph||i===Lh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===bh||i===Ph)return o===yt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===Lh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Nh||i===Ih||i===Dh||i===Uh||i===Fh||i===kh||i===Oh||i===zh||i===Bh||i===Vh||i===Hh||i===Gh||i===Wh||i===jh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Nh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ih)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Dh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Uh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Fh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===kh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Oh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===zh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Bh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Vh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Hh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Gh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===jh)return o===yt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ql||i===Xh||i===Kh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===ql)return o===yt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Xh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Kh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===T_||i===qh||i===Yh||i===$h)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===ql)return s.COMPRESSED_RED_RGTC1_EXT;if(i===qh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===$h)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===co?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}class NA extends Rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class gt extends Gt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const IA={type:"move"};class af{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new gt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new gt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new N,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new N),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new gt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new N,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new N),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const S of e.hand.values()){const m=n.getJointPose(S,i),d=this._getHandJoint(c,S);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],h=u.position.distanceTo(f.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(IA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new gt;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}const DA=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,UA=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class FA{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n,i){if(this.texture===null){const r=new un,s=e.properties.get(r);s.__webglTexture=n.texture,(n.depthNear!=i.depthNear||n.depthFar!=i.depthFar)&&(this.depthNear=n.depthNear,this.depthFar=n.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Vi({vertexShader:DA,fragmentShader:UA,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new ct(new Xn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kA extends go{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,h=null,p=null,g=null;const S=new FA,m=n.getContextAttributes();let d=null,v=null;const _=[],y=[],b=new ue;let C=null;const w=new Rn;w.layers.enable(1),w.viewport=new ht;const L=new Rn;L.layers.enable(2),L.viewport=new ht;const G=[w,L],x=new NA;x.layers.enable(1),x.layers.enable(2);let E=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let re=_[K];return re===void 0&&(re=new af,_[K]=re),re.getTargetRaySpace()},this.getControllerGrip=function(K){let re=_[K];return re===void 0&&(re=new af,_[K]=re),re.getGripSpace()},this.getHand=function(K){let re=_[K];return re===void 0&&(re=new af,_[K]=re),re.getHandSpace()};function B(K){const re=y.indexOf(K.inputSource);if(re===-1)return;const _e=_[re];_e!==void 0&&(_e.update(K.inputSource,K.frame,c||o),_e.dispatchEvent({type:K.type,data:K.inputSource}))}function j(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",j),r.removeEventListener("inputsourceschange",Q);for(let K=0;K<_.length;K++){const re=y[K];re!==null&&(y[K]=null,_[K].disconnect(re))}E=null,z=null,S.reset(),e.setRenderTarget(d),p=null,h=null,f=null,r=null,v=null,je.stop(),i.isPresenting=!1,e.setPixelRatio(C),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){s=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){a=K,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(K){c=K},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(K){if(r=K,r!==null){if(d=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",j),r.addEventListener("inputsourceschange",Q),m.xrCompatible!==!0&&await n.makeXRCompatible(),C=e.getPixelRatio(),e.getSize(b),r.renderState.layers===void 0){const re={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,re),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),v=new Qr(p.framebufferWidth,p.framebufferHeight,{format:si,type:Bi,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let re=null,_e=null,de=null;m.depth&&(de=m.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,re=m.stencil?uo:qs,_e=m.stencil?co:Jr);const Ie={colorFormat:n.RGBA8,depthFormat:de,scaleFactor:s};f=new XRWebGLBinding(r,n),h=f.createProjectionLayer(Ie),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),v=new Qr(h.textureWidth,h.textureHeight,{format:si,type:Bi,depthTexture:new B_(h.textureWidth,h.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,re),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1})}v.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),je.setContext(r),je.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function Q(K){for(let re=0;re<K.removed.length;re++){const _e=K.removed[re],de=y.indexOf(_e);de>=0&&(y[de]=null,_[de].disconnect(_e))}for(let re=0;re<K.added.length;re++){const _e=K.added[re];let de=y.indexOf(_e);if(de===-1){for(let Fe=0;Fe<_.length;Fe++)if(Fe>=y.length){y.push(_e),de=Fe;break}else if(y[Fe]===null){y[Fe]=_e,de=Fe;break}if(de===-1)break}const Ie=_[de];Ie&&Ie.connect(_e)}}const H=new N,ee=new N;function I(K,re,_e){H.setFromMatrixPosition(re.matrixWorld),ee.setFromMatrixPosition(_e.matrixWorld);const de=H.distanceTo(ee),Ie=re.projectionMatrix.elements,Fe=_e.projectionMatrix.elements,ze=Ie[14]/(Ie[10]-1),Xe=Ie[14]/(Ie[10]+1),ne=(Ie[9]+1)/Ie[5],P=(Ie[9]-1)/Ie[5],me=(Ie[8]-1)/Ie[0],fe=(Fe[8]+1)/Fe[0],se=ze*me,pe=ze*fe,Re=de/(-me+fe),xe=Re*-me;if(re.matrixWorld.decompose(K.position,K.quaternion,K.scale),K.translateX(xe),K.translateZ(Re),K.matrixWorld.compose(K.position,K.quaternion,K.scale),K.matrixWorldInverse.copy(K.matrixWorld).invert(),Ie[10]===-1)K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse);else{const R=ze+Re,M=Xe+Re,k=se-xe,Z=pe+(de-xe),te=ne*Xe/M*R,$=P*Xe/M*R;K.projectionMatrix.makePerspective(k,Z,te,$,R,M),K.projectionMatrixInverse.copy(K.projectionMatrix).invert()}}function q(K,re){re===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(re.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(r===null)return;let re=K.near,_e=K.far;S.texture!==null&&(S.depthNear>0&&(re=S.depthNear),S.depthFar>0&&(_e=S.depthFar)),x.near=L.near=w.near=re,x.far=L.far=w.far=_e,(E!==x.near||z!==x.far)&&(r.updateRenderState({depthNear:x.near,depthFar:x.far}),E=x.near,z=x.far);const de=K.parent,Ie=x.cameras;q(x,de);for(let Fe=0;Fe<Ie.length;Fe++)q(Ie[Fe],de);Ie.length===2?I(x,w,L):x.projectionMatrix.copy(w.projectionMatrix),J(K,x,de)};function J(K,re,_e){_e===null?K.matrix.copy(re.matrixWorld):(K.matrix.copy(_e.matrixWorld),K.matrix.invert(),K.matrix.multiply(re.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(re.projectionMatrix),K.projectionMatrixInverse.copy(re.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Jh*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(K){l=K,h!==null&&(h.fixedFoveation=K),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=K)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(x)};let le=null;function Ce(K,re){if(u=re.getViewerPose(c||o),g=re,u!==null){const _e=u.views;p!==null&&(e.setRenderTargetFramebuffer(v,p.framebuffer),e.setRenderTarget(v));let de=!1;_e.length!==x.cameras.length&&(x.cameras.length=0,de=!0);for(let Fe=0;Fe<_e.length;Fe++){const ze=_e[Fe];let Xe=null;if(p!==null)Xe=p.getViewport(ze);else{const P=f.getViewSubImage(h,ze);Xe=P.viewport,Fe===0&&(e.setRenderTargetTextures(v,P.colorTexture,h.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(v))}let ne=G[Fe];ne===void 0&&(ne=new Rn,ne.layers.enable(Fe),ne.viewport=new ht,G[Fe]=ne),ne.matrix.fromArray(ze.transform.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale),ne.projectionMatrix.fromArray(ze.projectionMatrix),ne.projectionMatrixInverse.copy(ne.projectionMatrix).invert(),ne.viewport.set(Xe.x,Xe.y,Xe.width,Xe.height),Fe===0&&(x.matrix.copy(ne.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),de===!0&&x.cameras.push(ne)}const Ie=r.enabledFeatures;if(Ie&&Ie.includes("depth-sensing")){const Fe=f.getDepthInformation(_e[0]);Fe&&Fe.isValid&&Fe.texture&&S.init(e,Fe,r.renderState)}}for(let _e=0;_e<_.length;_e++){const de=y[_e],Ie=_[_e];de!==null&&Ie!==void 0&&Ie.update(de,re,c||o)}le&&le(K,re),re.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:re}),g=null}const je=new O_;je.setAnimationLoop(Ce),this.setAnimationLoop=function(K){le=K},this.dispose=function(){}}}const br=new _i,OA=new dt;function zA(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,U_(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,_,y){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),f(m,d)):d.isMeshPhongMaterial?(s(m,d),u(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,y)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),S(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,v,_):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Sn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Sn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),_=v.envMap,y=v.envMapRotation;_&&(m.envMap.value=_,br.copy(y),br.x*=-1,br.y*=-1,br.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(br.y*=-1,br.z*=-1),m.envMapRotation.value.setFromMatrix4(OA.makeRotationFromEuler(br)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=_*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function u(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function f(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Sn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function S(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function BA(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const y=_.program;i.uniformBlockBinding(v,y)}function c(v,_){let y=r[v.id];y===void 0&&(g(v),y=u(v),r[v.id]=y,v.addEventListener("dispose",m));const b=_.program;i.updateUBOMapping(v,b);const C=e.render.frame;s[v.id]!==C&&(h(v),s[v.id]=C)}function u(v){const _=f();v.__bindingPointIndex=_;const y=t.createBuffer(),b=v.__size,C=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,y),t.bufferData(t.UNIFORM_BUFFER,b,C),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,y),y}function f(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const _=r[v.id],y=v.uniforms,b=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let C=0,w=y.length;C<w;C++){const L=Array.isArray(y[C])?y[C]:[y[C]];for(let G=0,x=L.length;G<x;G++){const E=L[G];if(p(E,C,G,b)===!0){const z=E.__offset,B=Array.isArray(E.value)?E.value:[E.value];let j=0;for(let Q=0;Q<B.length;Q++){const H=B[Q],ee=S(H);typeof H=="number"||typeof H=="boolean"?(E.__data[0]=H,t.bufferSubData(t.UNIFORM_BUFFER,z+j,E.__data)):H.isMatrix3?(E.__data[0]=H.elements[0],E.__data[1]=H.elements[1],E.__data[2]=H.elements[2],E.__data[3]=0,E.__data[4]=H.elements[3],E.__data[5]=H.elements[4],E.__data[6]=H.elements[5],E.__data[7]=0,E.__data[8]=H.elements[6],E.__data[9]=H.elements[7],E.__data[10]=H.elements[8],E.__data[11]=0):(H.toArray(E.__data,j),j+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,z,E.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,_,y,b){const C=v.value,w=_+"_"+y;if(b[w]===void 0)return typeof C=="number"||typeof C=="boolean"?b[w]=C:b[w]=C.clone(),!0;{const L=b[w];if(typeof C=="number"||typeof C=="boolean"){if(L!==C)return b[w]=C,!0}else if(L.equals(C)===!1)return L.copy(C),!0}return!1}function g(v){const _=v.uniforms;let y=0;const b=16;for(let w=0,L=_.length;w<L;w++){const G=Array.isArray(_[w])?_[w]:[_[w]];for(let x=0,E=G.length;x<E;x++){const z=G[x],B=Array.isArray(z.value)?z.value:[z.value];for(let j=0,Q=B.length;j<Q;j++){const H=B[j],ee=S(H),I=y%b,q=I%ee.boundary,J=I+q;y+=q,J!==0&&b-J<ee.storage&&(y+=b-J),z.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=y,y+=ee.storage}}}const C=y%b;return C>0&&(y+=b-C),v.__size=y,v.__cache={},this}function S(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const y=o.indexOf(_.__bindingPointIndex);o.splice(y,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}class VA{constructor(e={}){const{canvas:n=CM(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let h;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");h=i.getContextAttributes().alpha}else h=o;const p=new Uint32Array(4),g=new Int32Array(4);let S=null,m=null;const d=[],v=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Cn,this.toneMapping=dr,this.toneMappingExposure=1;const _=this;let y=!1,b=0,C=0,w=null,L=-1,G=null;const x=new ht,E=new ht;let z=null;const B=new Qe(0);let j=0,Q=n.width,H=n.height,ee=1,I=null,q=null;const J=new ht(0,0,Q,H),le=new ht(0,0,Q,H);let Ce=!1;const je=new lp;let K=!1,re=!1;const _e=new dt,de=new dt,Ie=new N,Fe=new ht,ze={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function ne(){return w===null?ee:1}let P=i;function me(T,U){return n.getContext(T,U)}try{const T={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Qd}`),n.addEventListener("webglcontextlost",X,!1),n.addEventListener("webglcontextrestored",ie,!1),n.addEventListener("webglcontextcreationerror",ce,!1),P===null){const U="webgl2";if(P=me(U,T),P===null)throw me(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(T){throw console.error("THREE.WebGLRenderer: "+T.message),T}let fe,se,pe,Re,xe,R,M,k,Z,te,$,Te,ge,Se,$e,oe,ye,De,ke,we,Ze,Ve,it,D;function Y(){fe=new Xw(P),fe.init(),Ve=new LA(P,fe),se=new Bw(P,fe,e,Ve),pe=new RA(P),se.reverseDepthBuffer&&pe.buffers.depth.setReversed(!0),Re=new Yw(P),xe=new dA,R=new PA(P,fe,pe,xe,se,Ve,Re),M=new Hw(_),k=new jw(_),Z=new n1(P),it=new Ow(P,Z),te=new Kw(P,Z,Re,it),$=new Zw(P,te,Z,Re),ke=new $w(P,se,R),oe=new Vw(xe),Te=new hA(_,M,k,fe,se,it,oe),ge=new zA(_,xe),Se=new mA,$e=new SA(fe),De=new kw(_,M,k,pe,$,h,l),ye=new AA(_,$,se),D=new BA(P,Re,se,pe),we=new zw(P,fe,Re),Ze=new qw(P,fe,Re),Re.programs=Te.programs,_.capabilities=se,_.extensions=fe,_.properties=xe,_.renderLists=Se,_.shadowMap=ye,_.state=pe,_.info=Re}Y();const O=new kA(_,P);this.xr=O,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){const T=fe.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=fe.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return ee},this.setPixelRatio=function(T){T!==void 0&&(ee=T,this.setSize(Q,H,!1))},this.getSize=function(T){return T.set(Q,H)},this.setSize=function(T,U,V=!0){if(O.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Q=T,H=U,n.width=Math.floor(T*ee),n.height=Math.floor(U*ee),V===!0&&(n.style.width=T+"px",n.style.height=U+"px"),this.setViewport(0,0,T,U)},this.getDrawingBufferSize=function(T){return T.set(Q*ee,H*ee).floor()},this.setDrawingBufferSize=function(T,U,V){Q=T,H=U,ee=V,n.width=Math.floor(T*V),n.height=Math.floor(U*V),this.setViewport(0,0,T,U)},this.getCurrentViewport=function(T){return T.copy(x)},this.getViewport=function(T){return T.copy(J)},this.setViewport=function(T,U,V,W){T.isVector4?J.set(T.x,T.y,T.z,T.w):J.set(T,U,V,W),pe.viewport(x.copy(J).multiplyScalar(ee).round())},this.getScissor=function(T){return T.copy(le)},this.setScissor=function(T,U,V,W){T.isVector4?le.set(T.x,T.y,T.z,T.w):le.set(T,U,V,W),pe.scissor(E.copy(le).multiplyScalar(ee).round())},this.getScissorTest=function(){return Ce},this.setScissorTest=function(T){pe.setScissorTest(Ce=T)},this.setOpaqueSort=function(T){I=T},this.setTransparentSort=function(T){q=T},this.getClearColor=function(T){return T.copy(De.getClearColor())},this.setClearColor=function(){De.setClearColor.apply(De,arguments)},this.getClearAlpha=function(){return De.getClearAlpha()},this.setClearAlpha=function(){De.setClearAlpha.apply(De,arguments)},this.clear=function(T=!0,U=!0,V=!0){let W=0;if(T){let F=!1;if(w!==null){const he=w.texture.format;F=he===sp||he===rp||he===ip}if(F){const he=w.texture.type,Me=he===Bi||he===Jr||he===wa||he===co||he===tp||he===np,Ae=De.getClearColor(),be=De.getClearAlpha(),Oe=Ae.r,Be=Ae.g,Le=Ae.b;Me?(p[0]=Oe,p[1]=Be,p[2]=Le,p[3]=be,P.clearBufferuiv(P.COLOR,0,p)):(g[0]=Oe,g[1]=Be,g[2]=Le,g[3]=be,P.clearBufferiv(P.COLOR,0,g))}else W|=P.COLOR_BUFFER_BIT}U&&(W|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),V&&(W|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",X,!1),n.removeEventListener("webglcontextrestored",ie,!1),n.removeEventListener("webglcontextcreationerror",ce,!1),Se.dispose(),$e.dispose(),xe.dispose(),M.dispose(),k.dispose(),$.dispose(),it.dispose(),D.dispose(),Te.dispose(),O.dispose(),O.removeEventListener("sessionstart",yp),O.removeEventListener("sessionend",Sp),Er.stop()};function X(T){T.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function ie(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const T=Re.autoReset,U=ye.enabled,V=ye.autoUpdate,W=ye.needsUpdate,F=ye.type;Y(),Re.autoReset=T,ye.enabled=U,ye.autoUpdate=V,ye.needsUpdate=W,ye.type=F}function ce(T){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Ue(T){const U=T.target;U.removeEventListener("dispose",Ue),mt(U)}function mt(T){Ct(T),xe.remove(T)}function Ct(T){const U=xe.get(T).programs;U!==void 0&&(U.forEach(function(V){Te.releaseProgram(V)}),T.isShaderMaterial&&Te.releaseShaderCache(T))}this.renderBufferDirect=function(T,U,V,W,F,he){U===null&&(U=ze);const Me=F.isMesh&&F.matrixWorld.determinant()<0,Ae=ux(T,U,V,W,F);pe.setMaterial(W,Me);let be=V.index,Oe=1;if(W.wireframe===!0){if(be=te.getWireframeAttribute(V),be===void 0)return;Oe=2}const Be=V.drawRange,Le=V.attributes.position;let at=Be.start*Oe,_t=(Be.start+Be.count)*Oe;he!==null&&(at=Math.max(at,he.start*Oe),_t=Math.min(_t,(he.start+he.count)*Oe)),be!==null?(at=Math.max(at,0),_t=Math.min(_t,be.count)):Le!=null&&(at=Math.max(at,0),_t=Math.min(_t,Le.count));const Rt=_t-at;if(Rt<0||Rt===1/0)return;it.setup(F,W,Ae,V,be);let Mn,rt=we;if(be!==null&&(Mn=Z.get(be),rt=Ze,rt.setIndex(Mn)),F.isMesh)W.wireframe===!0?(pe.setLineWidth(W.wireframeLinewidth*ne()),rt.setMode(P.LINES)):rt.setMode(P.TRIANGLES);else if(F.isLine){let Ne=W.linewidth;Ne===void 0&&(Ne=1),pe.setLineWidth(Ne*ne()),F.isLineSegments?rt.setMode(P.LINES):F.isLineLoop?rt.setMode(P.LINE_LOOP):rt.setMode(P.LINE_STRIP)}else F.isPoints?rt.setMode(P.POINTS):F.isSprite&&rt.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)rt.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(fe.get("WEBGL_multi_draw"))rt.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Ne=F._multiDrawStarts,Wt=F._multiDrawCounts,st=F._multiDrawCount,Yn=be?Z.get(be).bytesPerElement:1,is=xe.get(W).currentProgram.getUniforms();for(let En=0;En<st;En++)is.setValue(P,"_gl_DrawID",En),rt.render(Ne[En]/Yn,Wt[En])}else if(F.isInstancedMesh)rt.renderInstances(at,Rt,F.count);else if(V.isInstancedBufferGeometry){const Ne=V._maxInstanceCount!==void 0?V._maxInstanceCount:1/0,Wt=Math.min(V.instanceCount,Ne);rt.renderInstances(at,Rt,Wt)}else rt.render(at,Rt)};function et(T,U,V){T.transparent===!0&&T.side===Bn&&T.forceSinglePass===!1?(T.side=Sn,T.needsUpdate=!0,za(T,U,V),T.side=gr,T.needsUpdate=!0,za(T,U,V),T.side=Bn):za(T,U,V)}this.compile=function(T,U,V=null){V===null&&(V=T),m=$e.get(V),m.init(U),v.push(m),V.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),T!==V&&T.traverseVisible(function(F){F.isLight&&F.layers.test(U.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();const W=new Set;return T.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const he=F.material;if(he)if(Array.isArray(he))for(let Me=0;Me<he.length;Me++){const Ae=he[Me];et(Ae,V,F),W.add(Ae)}else et(he,V,F),W.add(he)}),v.pop(),m=null,W},this.compileAsync=function(T,U,V=null){const W=this.compile(T,U,V);return new Promise(F=>{function he(){if(W.forEach(function(Me){xe.get(Me).currentProgram.isReady()&&W.delete(Me)}),W.size===0){F(T);return}setTimeout(he,10)}fe.get("KHR_parallel_shader_compile")!==null?he():setTimeout(he,10)})};let dn=null;function yi(T){dn&&dn(T)}function yp(){Er.stop()}function Sp(){Er.start()}const Er=new O_;Er.setAnimationLoop(yi),typeof self<"u"&&Er.setContext(self),this.setAnimationLoop=function(T){dn=T,O.setAnimationLoop(T),T===null?Er.stop():Er.start()},O.addEventListener("sessionstart",yp),O.addEventListener("sessionend",Sp),this.render=function(T,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),O.enabled===!0&&O.isPresenting===!0&&(O.cameraAutoUpdate===!0&&O.updateCamera(U),U=O.getCamera()),T.isScene===!0&&T.onBeforeRender(_,T,U,w),m=$e.get(T,v.length),m.init(U),v.push(m),de.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),je.setFromProjectionMatrix(de),re=this.localClippingEnabled,K=oe.init(this.clippingPlanes,re),S=Se.get(T,d.length),S.init(),d.push(S),O.enabled===!0&&O.isPresenting===!0){const he=_.xr.getDepthSensingMesh();he!==null&&eu(he,U,-1/0,_.sortObjects)}eu(T,U,0,_.sortObjects),S.finish(),_.sortObjects===!0&&S.sort(I,q),Xe=O.enabled===!1||O.isPresenting===!1||O.hasDepthSensing()===!1,Xe&&De.addToRenderList(S,T),this.info.render.frame++,K===!0&&oe.beginShadows();const V=m.state.shadowsArray;ye.render(V,T,U),K===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=S.opaque,F=S.transmissive;if(m.setupLights(),U.isArrayCamera){const he=U.cameras;if(F.length>0)for(let Me=0,Ae=he.length;Me<Ae;Me++){const be=he[Me];Ep(W,F,T,be)}Xe&&De.render(T);for(let Me=0,Ae=he.length;Me<Ae;Me++){const be=he[Me];Mp(S,T,be,be.viewport)}}else F.length>0&&Ep(W,F,T,U),Xe&&De.render(T),Mp(S,T,U);w!==null&&(R.updateMultisampleRenderTarget(w),R.updateRenderTargetMipmap(w)),T.isScene===!0&&T.onAfterRender(_,T,U),it.resetDefaultState(),L=-1,G=null,v.pop(),v.length>0?(m=v[v.length-1],K===!0&&oe.setGlobalState(_.clippingPlanes,m.state.camera)):m=null,d.pop(),d.length>0?S=d[d.length-1]:S=null};function eu(T,U,V,W){if(T.visible===!1)return;if(T.layers.test(U.layers)){if(T.isGroup)V=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(U);else if(T.isLight)m.pushLight(T),T.castShadow&&m.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||je.intersectsSprite(T)){W&&Fe.setFromMatrixPosition(T.matrixWorld).applyMatrix4(de);const Me=$.update(T),Ae=T.material;Ae.visible&&S.push(T,Me,Ae,V,Fe.z,null)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||je.intersectsObject(T))){const Me=$.update(T),Ae=T.material;if(W&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),Fe.copy(T.boundingSphere.center)):(Me.boundingSphere===null&&Me.computeBoundingSphere(),Fe.copy(Me.boundingSphere.center)),Fe.applyMatrix4(T.matrixWorld).applyMatrix4(de)),Array.isArray(Ae)){const be=Me.groups;for(let Oe=0,Be=be.length;Oe<Be;Oe++){const Le=be[Oe],at=Ae[Le.materialIndex];at&&at.visible&&S.push(T,Me,at,V,Fe.z,Le)}}else Ae.visible&&S.push(T,Me,Ae,V,Fe.z,null)}}const he=T.children;for(let Me=0,Ae=he.length;Me<Ae;Me++)eu(he[Me],U,V,W)}function Mp(T,U,V,W){const F=T.opaque,he=T.transmissive,Me=T.transparent;m.setupLightsView(V),K===!0&&oe.setGlobalState(_.clippingPlanes,V),W&&pe.viewport(x.copy(W)),F.length>0&&Oa(F,U,V),he.length>0&&Oa(he,U,V),Me.length>0&&Oa(Me,U,V),pe.buffers.depth.setTest(!0),pe.buffers.depth.setMask(!0),pe.buffers.color.setMask(!0),pe.setPolygonOffset(!1)}function Ep(T,U,V,W){if((V.isScene===!0?V.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[W.id]===void 0&&(m.state.transmissionRenderTarget[W.id]=new Qr(1,1,{generateMipmaps:!0,type:fe.has("EXT_color_buffer_half_float")||fe.has("EXT_color_buffer_float")?Da:Bi,minFilter:Hr,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const he=m.state.transmissionRenderTarget[W.id],Me=W.viewport||x;he.setSize(Me.z,Me.w);const Ae=_.getRenderTarget();_.setRenderTarget(he),_.getClearColor(B),j=_.getClearAlpha(),j<1&&_.setClearColor(16777215,.5),_.clear(),Xe&&De.render(V);const be=_.toneMapping;_.toneMapping=dr;const Oe=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),m.setupLightsView(W),K===!0&&oe.setGlobalState(_.clippingPlanes,W),Oa(T,V,W),R.updateMultisampleRenderTarget(he),R.updateRenderTargetMipmap(he),fe.has("WEBGL_multisampled_render_to_texture")===!1){let Be=!1;for(let Le=0,at=U.length;Le<at;Le++){const _t=U[Le],Rt=_t.object,Mn=_t.geometry,rt=_t.material,Ne=_t.group;if(rt.side===Bn&&Rt.layers.test(W.layers)){const Wt=rt.side;rt.side=Sn,rt.needsUpdate=!0,wp(Rt,V,W,Mn,rt,Ne),rt.side=Wt,rt.needsUpdate=!0,Be=!0}}Be===!0&&(R.updateMultisampleRenderTarget(he),R.updateRenderTargetMipmap(he))}_.setRenderTarget(Ae),_.setClearColor(B,j),Oe!==void 0&&(W.viewport=Oe),_.toneMapping=be}function Oa(T,U,V){const W=U.isScene===!0?U.overrideMaterial:null;for(let F=0,he=T.length;F<he;F++){const Me=T[F],Ae=Me.object,be=Me.geometry,Oe=W===null?Me.material:W,Be=Me.group;Ae.layers.test(V.layers)&&wp(Ae,U,V,be,Oe,Be)}}function wp(T,U,V,W,F,he){T.onBeforeRender(_,U,V,W,F,he),T.modelViewMatrix.multiplyMatrices(V.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),F.onBeforeRender(_,U,V,W,T,he),F.transparent===!0&&F.side===Bn&&F.forceSinglePass===!1?(F.side=Sn,F.needsUpdate=!0,_.renderBufferDirect(V,U,W,F,T,he),F.side=gr,F.needsUpdate=!0,_.renderBufferDirect(V,U,W,F,T,he),F.side=Bn):_.renderBufferDirect(V,U,W,F,T,he),T.onAfterRender(_,U,V,W,F,he)}function za(T,U,V){U.isScene!==!0&&(U=ze);const W=xe.get(T),F=m.state.lights,he=m.state.shadowsArray,Me=F.state.version,Ae=Te.getParameters(T,F.state,he,U,V),be=Te.getProgramCacheKey(Ae);let Oe=W.programs;W.environment=T.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(T.isMeshStandardMaterial?k:M).get(T.envMap||W.environment),W.envMapRotation=W.environment!==null&&T.envMap===null?U.environmentRotation:T.envMapRotation,Oe===void 0&&(T.addEventListener("dispose",Ue),Oe=new Map,W.programs=Oe);let Be=Oe.get(be);if(Be!==void 0){if(W.currentProgram===Be&&W.lightsStateVersion===Me)return Ap(T,Ae),Be}else Ae.uniforms=Te.getUniforms(T),T.onBeforeCompile(Ae,_),Be=Te.acquireProgram(Ae,be),Oe.set(be,Be),W.uniforms=Ae.uniforms;const Le=W.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Le.clippingPlanes=oe.uniform),Ap(T,Ae),W.needsLights=hx(T),W.lightsStateVersion=Me,W.needsLights&&(Le.ambientLightColor.value=F.state.ambient,Le.lightProbe.value=F.state.probe,Le.directionalLights.value=F.state.directional,Le.directionalLightShadows.value=F.state.directionalShadow,Le.spotLights.value=F.state.spot,Le.spotLightShadows.value=F.state.spotShadow,Le.rectAreaLights.value=F.state.rectArea,Le.ltc_1.value=F.state.rectAreaLTC1,Le.ltc_2.value=F.state.rectAreaLTC2,Le.pointLights.value=F.state.point,Le.pointLightShadows.value=F.state.pointShadow,Le.hemisphereLights.value=F.state.hemi,Le.directionalShadowMap.value=F.state.directionalShadowMap,Le.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Le.spotShadowMap.value=F.state.spotShadowMap,Le.spotLightMatrix.value=F.state.spotLightMatrix,Le.spotLightMap.value=F.state.spotLightMap,Le.pointShadowMap.value=F.state.pointShadowMap,Le.pointShadowMatrix.value=F.state.pointShadowMatrix),W.currentProgram=Be,W.uniformsList=null,Be}function Tp(T){if(T.uniformsList===null){const U=T.currentProgram.getUniforms();T.uniformsList=$l.seqWithValue(U.seq,T.uniforms)}return T.uniformsList}function Ap(T,U){const V=xe.get(T);V.outputColorSpace=U.outputColorSpace,V.batching=U.batching,V.batchingColor=U.batchingColor,V.instancing=U.instancing,V.instancingColor=U.instancingColor,V.instancingMorph=U.instancingMorph,V.skinning=U.skinning,V.morphTargets=U.morphTargets,V.morphNormals=U.morphNormals,V.morphColors=U.morphColors,V.morphTargetsCount=U.morphTargetsCount,V.numClippingPlanes=U.numClippingPlanes,V.numIntersection=U.numClipIntersection,V.vertexAlphas=U.vertexAlphas,V.vertexTangents=U.vertexTangents,V.toneMapping=U.toneMapping}function ux(T,U,V,W,F){U.isScene!==!0&&(U=ze),R.resetTextureUnits();const he=U.fog,Me=W.isMeshStandardMaterial?U.environment:null,Ae=w===null?_.outputColorSpace:w.isXRRenderTarget===!0?w.texture.colorSpace:Sr,be=(W.isMeshStandardMaterial?k:M).get(W.envMap||Me),Oe=W.vertexColors===!0&&!!V.attributes.color&&V.attributes.color.itemSize===4,Be=!!V.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Le=!!V.morphAttributes.position,at=!!V.morphAttributes.normal,_t=!!V.morphAttributes.color;let Rt=dr;W.toneMapped&&(w===null||w.isXRRenderTarget===!0)&&(Rt=_.toneMapping);const Mn=V.morphAttributes.position||V.morphAttributes.normal||V.morphAttributes.color,rt=Mn!==void 0?Mn.length:0,Ne=xe.get(W),Wt=m.state.lights;if(K===!0&&(re===!0||T!==G)){const Dn=T===G&&W.id===L;oe.setState(W,T,Dn)}let st=!1;W.version===Ne.__version?(Ne.needsLights&&Ne.lightsStateVersion!==Wt.state.version||Ne.outputColorSpace!==Ae||F.isBatchedMesh&&Ne.batching===!1||!F.isBatchedMesh&&Ne.batching===!0||F.isBatchedMesh&&Ne.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Ne.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Ne.instancing===!1||!F.isInstancedMesh&&Ne.instancing===!0||F.isSkinnedMesh&&Ne.skinning===!1||!F.isSkinnedMesh&&Ne.skinning===!0||F.isInstancedMesh&&Ne.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Ne.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Ne.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Ne.instancingMorph===!1&&F.morphTexture!==null||Ne.envMap!==be||W.fog===!0&&Ne.fog!==he||Ne.numClippingPlanes!==void 0&&(Ne.numClippingPlanes!==oe.numPlanes||Ne.numIntersection!==oe.numIntersection)||Ne.vertexAlphas!==Oe||Ne.vertexTangents!==Be||Ne.morphTargets!==Le||Ne.morphNormals!==at||Ne.morphColors!==_t||Ne.toneMapping!==Rt||Ne.morphTargetsCount!==rt)&&(st=!0):(st=!0,Ne.__version=W.version);let Yn=Ne.currentProgram;st===!0&&(Yn=za(W,U,F));let is=!1,En=!1,tu=!1;const Pt=Yn.getUniforms(),Gi=Ne.uniforms;if(pe.useProgram(Yn.program)&&(is=!0,En=!0,tu=!0),W.id!==L&&(L=W.id,En=!0),is||G!==T){se.reverseDepthBuffer?(_e.copy(T.projectionMatrix),bM(_e),PM(_e),Pt.setValue(P,"projectionMatrix",_e)):Pt.setValue(P,"projectionMatrix",T.projectionMatrix),Pt.setValue(P,"viewMatrix",T.matrixWorldInverse);const Dn=Pt.map.cameraPosition;Dn!==void 0&&Dn.setValue(P,Ie.setFromMatrixPosition(T.matrixWorld)),se.logarithmicDepthBuffer&&Pt.setValue(P,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&Pt.setValue(P,"isOrthographic",T.isOrthographicCamera===!0),G!==T&&(G=T,En=!0,tu=!0)}if(F.isSkinnedMesh){Pt.setOptional(P,F,"bindMatrix"),Pt.setOptional(P,F,"bindMatrixInverse");const Dn=F.skeleton;Dn&&(Dn.boneTexture===null&&Dn.computeBoneTexture(),Pt.setValue(P,"boneTexture",Dn.boneTexture,R))}F.isBatchedMesh&&(Pt.setOptional(P,F,"batchingTexture"),Pt.setValue(P,"batchingTexture",F._matricesTexture,R),Pt.setOptional(P,F,"batchingIdTexture"),Pt.setValue(P,"batchingIdTexture",F._indirectTexture,R),Pt.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&Pt.setValue(P,"batchingColorTexture",F._colorsTexture,R));const nu=V.morphAttributes;if((nu.position!==void 0||nu.normal!==void 0||nu.color!==void 0)&&ke.update(F,V,Yn),(En||Ne.receiveShadow!==F.receiveShadow)&&(Ne.receiveShadow=F.receiveShadow,Pt.setValue(P,"receiveShadow",F.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(Gi.envMap.value=be,Gi.flipEnvMap.value=be.isCubeTexture&&be.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(Gi.envMapIntensity.value=U.environmentIntensity),En&&(Pt.setValue(P,"toneMappingExposure",_.toneMappingExposure),Ne.needsLights&&fx(Gi,tu),he&&W.fog===!0&&ge.refreshFogUniforms(Gi,he),ge.refreshMaterialUniforms(Gi,W,ee,H,m.state.transmissionRenderTarget[T.id]),$l.upload(P,Tp(Ne),Gi,R)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&($l.upload(P,Tp(Ne),Gi,R),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&Pt.setValue(P,"center",F.center),Pt.setValue(P,"modelViewMatrix",F.modelViewMatrix),Pt.setValue(P,"normalMatrix",F.normalMatrix),Pt.setValue(P,"modelMatrix",F.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const Dn=W.uniformsGroups;for(let iu=0,dx=Dn.length;iu<dx;iu++){const Cp=Dn[iu];D.update(Cp,Yn),D.bind(Cp,Yn)}}return Yn}function fx(T,U){T.ambientLightColor.needsUpdate=U,T.lightProbe.needsUpdate=U,T.directionalLights.needsUpdate=U,T.directionalLightShadows.needsUpdate=U,T.pointLights.needsUpdate=U,T.pointLightShadows.needsUpdate=U,T.spotLights.needsUpdate=U,T.spotLightShadows.needsUpdate=U,T.rectAreaLights.needsUpdate=U,T.hemisphereLights.needsUpdate=U}function hx(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return w},this.setRenderTargetTextures=function(T,U,V){xe.get(T.texture).__webglTexture=U,xe.get(T.depthTexture).__webglTexture=V;const W=xe.get(T);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=V===void 0,W.__autoAllocateDepthBuffer||fe.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(T,U){const V=xe.get(T);V.__webglFramebuffer=U,V.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(T,U=0,V=0){w=T,b=U,C=V;let W=!0,F=null,he=!1,Me=!1;if(T){const be=xe.get(T);if(be.__useDefaultFramebuffer!==void 0)pe.bindFramebuffer(P.FRAMEBUFFER,null),W=!1;else if(be.__webglFramebuffer===void 0)R.setupRenderTarget(T);else if(be.__hasExternalTextures)R.rebindTextures(T,xe.get(T.texture).__webglTexture,xe.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Le=T.depthTexture;if(be.__boundDepthTexture!==Le){if(Le!==null&&xe.has(Le)&&(T.width!==Le.image.width||T.height!==Le.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");R.setupDepthRenderbuffer(T)}}const Oe=T.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(Me=!0);const Be=xe.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Be[U])?F=Be[U][V]:F=Be[U],he=!0):T.samples>0&&R.useMultisampledRTT(T)===!1?F=xe.get(T).__webglMultisampledFramebuffer:Array.isArray(Be)?F=Be[V]:F=Be,x.copy(T.viewport),E.copy(T.scissor),z=T.scissorTest}else x.copy(J).multiplyScalar(ee).floor(),E.copy(le).multiplyScalar(ee).floor(),z=Ce;if(pe.bindFramebuffer(P.FRAMEBUFFER,F)&&W&&pe.drawBuffers(T,F),pe.viewport(x),pe.scissor(E),pe.setScissorTest(z),he){const be=xe.get(T.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+U,be.__webglTexture,V)}else if(Me){const be=xe.get(T.texture),Oe=U||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,be.__webglTexture,V||0,Oe)}L=-1},this.readRenderTargetPixels=function(T,U,V,W,F,he,Me){if(!(T&&T.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=xe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae){pe.bindFramebuffer(P.FRAMEBUFFER,Ae);try{const be=T.texture,Oe=be.format,Be=be.type;if(!se.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!se.textureTypeReadable(Be)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=T.width-W&&V>=0&&V<=T.height-F&&P.readPixels(U,V,W,F,Ve.convert(Oe),Ve.convert(Be),he)}finally{const be=w!==null?xe.get(w).__webglFramebuffer:null;pe.bindFramebuffer(P.FRAMEBUFFER,be)}}},this.readRenderTargetPixelsAsync=async function(T,U,V,W,F,he,Me){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=xe.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Me!==void 0&&(Ae=Ae[Me]),Ae){const be=T.texture,Oe=be.format,Be=be.type;if(!se.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!se.textureTypeReadable(Be))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=T.width-W&&V>=0&&V<=T.height-F){pe.bindFramebuffer(P.FRAMEBUFFER,Ae);const Le=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Le),P.bufferData(P.PIXEL_PACK_BUFFER,he.byteLength,P.STREAM_READ),P.readPixels(U,V,W,F,Ve.convert(Oe),Ve.convert(Be),0);const at=w!==null?xe.get(w).__webglFramebuffer:null;pe.bindFramebuffer(P.FRAMEBUFFER,at);const _t=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await RM(P,_t,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Le),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,he),P.deleteBuffer(Le),P.deleteSync(_t),he}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(T,U=null,V=0){T.isTexture!==!0&&(Yl("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,T=arguments[1]);const W=Math.pow(2,-V),F=Math.floor(T.image.width*W),he=Math.floor(T.image.height*W),Me=U!==null?U.x:0,Ae=U!==null?U.y:0;R.setTexture2D(T,0),P.copyTexSubImage2D(P.TEXTURE_2D,V,0,0,Me,Ae,F,he),pe.unbindTexture()},this.copyTextureToTexture=function(T,U,V=null,W=null,F=0){T.isTexture!==!0&&(Yl("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,T=arguments[1],U=arguments[2],F=arguments[3]||0,V=null);let he,Me,Ae,be,Oe,Be;V!==null?(he=V.max.x-V.min.x,Me=V.max.y-V.min.y,Ae=V.min.x,be=V.min.y):(he=T.image.width,Me=T.image.height,Ae=0,be=0),W!==null?(Oe=W.x,Be=W.y):(Oe=0,Be=0);const Le=Ve.convert(U.format),at=Ve.convert(U.type);R.setTexture2D(U,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const _t=P.getParameter(P.UNPACK_ROW_LENGTH),Rt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Mn=P.getParameter(P.UNPACK_SKIP_PIXELS),rt=P.getParameter(P.UNPACK_SKIP_ROWS),Ne=P.getParameter(P.UNPACK_SKIP_IMAGES),Wt=T.isCompressedTexture?T.mipmaps[F]:T.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,Wt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Wt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Ae),P.pixelStorei(P.UNPACK_SKIP_ROWS,be),T.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,F,Oe,Be,he,Me,Le,at,Wt.data):T.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,F,Oe,Be,Wt.width,Wt.height,Le,Wt.data):P.texSubImage2D(P.TEXTURE_2D,F,Oe,Be,he,Me,Le,at,Wt),P.pixelStorei(P.UNPACK_ROW_LENGTH,_t),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Rt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Mn),P.pixelStorei(P.UNPACK_SKIP_ROWS,rt),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ne),F===0&&U.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),pe.unbindTexture()},this.copyTextureToTexture3D=function(T,U,V=null,W=null,F=0){T.isTexture!==!0&&(Yl("WebGLRenderer: copyTextureToTexture3D function signature has changed."),V=arguments[0]||null,W=arguments[1]||null,T=arguments[2],U=arguments[3],F=arguments[4]||0);let he,Me,Ae,be,Oe,Be,Le,at,_t;const Rt=T.isCompressedTexture?T.mipmaps[F]:T.image;V!==null?(he=V.max.x-V.min.x,Me=V.max.y-V.min.y,Ae=V.max.z-V.min.z,be=V.min.x,Oe=V.min.y,Be=V.min.z):(he=Rt.width,Me=Rt.height,Ae=Rt.depth,be=0,Oe=0,Be=0),W!==null?(Le=W.x,at=W.y,_t=W.z):(Le=0,at=0,_t=0);const Mn=Ve.convert(U.format),rt=Ve.convert(U.type);let Ne;if(U.isData3DTexture)R.setTexture3D(U,0),Ne=P.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)R.setTexture2DArray(U,0),Ne=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,U.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,U.unpackAlignment);const Wt=P.getParameter(P.UNPACK_ROW_LENGTH),st=P.getParameter(P.UNPACK_IMAGE_HEIGHT),Yn=P.getParameter(P.UNPACK_SKIP_PIXELS),is=P.getParameter(P.UNPACK_SKIP_ROWS),En=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,Rt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,Rt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,be),P.pixelStorei(P.UNPACK_SKIP_ROWS,Oe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Be),T.isDataTexture||T.isData3DTexture?P.texSubImage3D(Ne,F,Le,at,_t,he,Me,Ae,Mn,rt,Rt.data):U.isCompressedArrayTexture?P.compressedTexSubImage3D(Ne,F,Le,at,_t,he,Me,Ae,Mn,Rt.data):P.texSubImage3D(Ne,F,Le,at,_t,he,Me,Ae,Mn,rt,Rt),P.pixelStorei(P.UNPACK_ROW_LENGTH,Wt),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,st),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Yn),P.pixelStorei(P.UNPACK_SKIP_ROWS,is),P.pixelStorei(P.UNPACK_SKIP_IMAGES,En),F===0&&U.generateMipmaps&&P.generateMipmap(Ne),pe.unbindTexture()},this.initRenderTarget=function(T){xe.get(T).__webglFramebuffer===void 0&&R.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?R.setTextureCube(T,0):T.isData3DTexture?R.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?R.setTexture2DArray(T,0):R.setTexture2D(T,0),pe.unbindTexture()},this.resetState=function(){b=0,C=0,w=null,pe.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ni}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=e===op?"display-p3":"srgb",n.unpackColorSpace=ot.workingColorSpace===Zc?"display-p3":"srgb"}}class up{constructor(e,n=1,i=1e3){this.isFog=!0,this.name="",this.color=new Qe(e),this.near=n,this.far=i}clone(){return new up(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class HA extends Gt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new _i,this.environmentIntensity=1,this.environmentRotation=new _i,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class GA{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Zh,this.updateRanges=[],this.version=0,this.uuid=Di()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=n.array[i+r];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const n=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(n,this.stride);return i.setUsage(this.usage),i}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Di()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const sn=new N;class Rc{constructor(e,n,i,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.applyMatrix4(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.applyNormalMatrix(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)sn.fromBufferAttribute(this,n),sn.transformDirection(e),this.setXYZ(n,sn.x,sn.y,sn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=pi(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=ft(i,this.array)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=ft(n,this.array)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=pi(n,this.array)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=pi(n,this.array)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=pi(n,this.array)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=pi(n,this.array)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=ft(n,this.array),i=ft(i,this.array),r=ft(r,this.array),s=ft(s,this.array)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return new jn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Rc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const n=[];for(let i=0;i<this.count;i++){const r=i*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)n.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class fp extends vo{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Qe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let xs;const No=new N,ys=new N,Ss=new N,Ms=new ue,Io=new ue,j_=new dt,wl=new N,Do=new N,Tl=new N,P0=new ue,lf=new ue,L0=new ue;class X_ extends Gt{constructor(e=new fp){if(super(),this.isSprite=!0,this.type="Sprite",xs===void 0){xs=new rn;const n=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new GA(n,5);xs.setIndex([0,1,2,0,2,3]),xs.setAttribute("position",new Rc(i,3,0,!1)),xs.setAttribute("uv",new Rc(i,2,3,!1))}this.geometry=xs,this.material=e,this.center=new ue(.5,.5)}raycast(e,n){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ys.setFromMatrixScale(this.matrixWorld),j_.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ss.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ys.multiplyScalar(-Ss.z);const i=this.material.rotation;let r,s;i!==0&&(s=Math.cos(i),r=Math.sin(i));const o=this.center;Al(wl.set(-.5,-.5,0),Ss,o,ys,r,s),Al(Do.set(.5,-.5,0),Ss,o,ys,r,s),Al(Tl.set(.5,.5,0),Ss,o,ys,r,s),P0.set(0,0),lf.set(1,0),L0.set(1,1);let a=e.ray.intersectTriangle(wl,Do,Tl,!1,No);if(a===null&&(Al(Do.set(-.5,.5,0),Ss,o,ys,r,s),lf.set(0,1),a=e.ray.intersectTriangle(wl,Tl,Do,!1,No),a===null))return;const l=e.ray.origin.distanceTo(No);l<e.near||l>e.far||n.push({distance:l,point:No.clone(),uv:Vn.getInterpolation(No,wl,Do,Tl,P0,lf,L0,new ue),face:null,object:this})}copy(e,n){return super.copy(e,n),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Al(t,e,n,i,r,s){Ms.subVectors(t,n).addScalar(.5).multiply(i),r!==void 0?(Io.x=s*Ms.x-r*Ms.y,Io.y=r*Ms.x+s*Ms.y):Io.copy(Ms),t.copy(e),t.x+=Io.x,t.y+=Io.y,t.applyMatrix4(j_)}class hp extends un{constructor(e,n,i,r,s,o,a,l,c){super(e,n,i,r,s,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class xi{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,n){const i=this.getUtoTmapping(e);return this.getPoint(i,n)}getPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return n}getSpacedPoints(e=5){const n=[];for(let i=0;i<=e;i++)n.push(this.getPointAt(i/e));return n}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const n=[];let i,r=this.getPoint(0),s=0;n.push(0);for(let o=1;o<=e;o++)i=this.getPoint(o/e),s+=i.distanceTo(r),n.push(s),r=i;return this.cacheArcLengths=n,n}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,n){const i=this.getLengths();let r=0;const s=i.length;let o;n?o=n:o=e*i[s-1];let a=0,l=s-1,c;for(;a<=l;)if(r=Math.floor(a+(l-a)/2),c=i[r]-o,c<0)a=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,i[r]===o)return r/(s-1);const u=i[r],h=i[r+1]-u,p=(o-u)/h;return(r+p)/(s-1)}getTangent(e,n){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const o=this.getPoint(r),a=this.getPoint(s),l=n||(o.isVector2?new ue:new N);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,n){const i=this.getUtoTmapping(e);return this.getTangent(i,n)}computeFrenetFrames(e,n){const i=new N,r=[],s=[],o=[],a=new N,l=new dt;for(let p=0;p<=e;p++){const g=p/e;r[p]=this.getTangentAt(g,new N)}s[0]=new N,o[0]=new N;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),f=Math.abs(r[0].y),h=Math.abs(r[0].z);u<=c&&(c=u,i.set(1,0,0)),f<=c&&(c=f,i.set(0,1,0)),h<=c&&i.set(0,0,1),a.crossVectors(r[0],i).normalize(),s[0].crossVectors(r[0],a),o[0].crossVectors(r[0],s[0]);for(let p=1;p<=e;p++){if(s[p]=s[p-1].clone(),o[p]=o[p-1].clone(),a.crossVectors(r[p-1],r[p]),a.length()>Number.EPSILON){a.normalize();const g=Math.acos(Kt(r[p-1].dot(r[p]),-1,1));s[p].applyMatrix4(l.makeRotationAxis(a,g))}o[p].crossVectors(r[p],s[p])}if(n===!0){let p=Math.acos(Kt(s[0].dot(s[e]),-1,1));p/=e,r[0].dot(a.crossVectors(s[0],s[e]))>0&&(p=-p);for(let g=1;g<=e;g++)s[g].applyMatrix4(l.makeRotationAxis(r[g],p*g)),o[g].crossVectors(r[g],s[g])}return{tangents:r,normals:s,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class dp extends xi{constructor(e=0,n=0,i=1,r=1,s=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=n,this.xRadius=i,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,n=new ue){const i=n,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const o=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(o?s=0:s=r),this.aClockwise===!0&&!o&&(s===r?s=-r:s=s-r);const a=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const u=Math.cos(this.aRotation),f=Math.sin(this.aRotation),h=l-this.aX,p=c-this.aY;l=h*u-p*f+this.aX,c=h*f+p*u+this.aY}return i.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class WA extends dp{constructor(e,n,i,r,s,o){super(e,n,i,i,r,s,o),this.isArcCurve=!0,this.type="ArcCurve"}}function pp(){let t=0,e=0,n=0,i=0;function r(s,o,a,l){t=s,e=a,n=-3*s+3*o-2*a-l,i=2*s-2*o+a+l}return{initCatmullRom:function(s,o,a,l,c){r(o,a,c*(a-s),c*(l-o))},initNonuniformCatmullRom:function(s,o,a,l,c,u,f){let h=(o-s)/c-(a-s)/(c+u)+(a-o)/u,p=(a-o)/u-(l-o)/(u+f)+(l-a)/f;h*=u,p*=u,r(o,a,h,p)},calc:function(s){const o=s*s,a=o*s;return t+e*s+n*o+i*a}}}const Cl=new N,cf=new pp,uf=new pp,ff=new pp;class jA extends xi{constructor(e=[],n=!1,i="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=n,this.curveType=i,this.tension=r}getPoint(e,n=new N){const i=n,r=this.points,s=r.length,o=(s-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/s)+1)*s:l===0&&a===s-1&&(a=s-2,l=1);let c,u;this.closed||a>0?c=r[(a-1)%s]:(Cl.subVectors(r[0],r[1]).add(r[0]),c=Cl);const f=r[a%s],h=r[(a+1)%s];if(this.closed||a+2<s?u=r[(a+2)%s]:(Cl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Cl),this.curveType==="centripetal"||this.curveType==="chordal"){const p=this.curveType==="chordal"?.5:.25;let g=Math.pow(c.distanceToSquared(f),p),S=Math.pow(f.distanceToSquared(h),p),m=Math.pow(h.distanceToSquared(u),p);S<1e-4&&(S=1),g<1e-4&&(g=S),m<1e-4&&(m=S),cf.initNonuniformCatmullRom(c.x,f.x,h.x,u.x,g,S,m),uf.initNonuniformCatmullRom(c.y,f.y,h.y,u.y,g,S,m),ff.initNonuniformCatmullRom(c.z,f.z,h.z,u.z,g,S,m)}else this.curveType==="catmullrom"&&(cf.initCatmullRom(c.x,f.x,h.x,u.x,this.tension),uf.initCatmullRom(c.y,f.y,h.y,u.y,this.tension),ff.initCatmullRom(c.z,f.z,h.z,u.z,this.tension));return i.set(cf.calc(l),uf.calc(l),ff.calc(l)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new N().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function N0(t,e,n,i,r){const s=(i-e)*.5,o=(r-n)*.5,a=t*t,l=t*a;return(2*n-2*i+s+o)*l+(-3*n+3*i-2*s-o)*a+s*t+n}function XA(t,e){const n=1-t;return n*n*e}function KA(t,e){return 2*(1-t)*t*e}function qA(t,e){return t*t*e}function ta(t,e,n,i){return XA(t,e)+KA(t,n)+qA(t,i)}function YA(t,e){const n=1-t;return n*n*n*e}function $A(t,e){const n=1-t;return 3*n*n*t*e}function ZA(t,e){return 3*(1-t)*t*t*e}function JA(t,e){return t*t*t*e}function na(t,e,n,i,r){return YA(t,e)+$A(t,n)+ZA(t,i)+JA(t,r)}class K_ extends xi{constructor(e=new ue,n=new ue,i=new ue,r=new ue){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new ue){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(na(e,r.x,s.x,o.x,a.x),na(e,r.y,s.y,o.y,a.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class QA extends xi{constructor(e=new N,n=new N,i=new N,r=new N){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=n,this.v2=i,this.v3=r}getPoint(e,n=new N){const i=n,r=this.v0,s=this.v1,o=this.v2,a=this.v3;return i.set(na(e,r.x,s.x,o.x,a.x),na(e,r.y,s.y,o.y,a.y),na(e,r.z,s.z,o.z,a.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class q_ extends xi{constructor(e=new ue,n=new ue){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=n}getPoint(e,n=new ue){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new ue){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class e2 extends xi{constructor(e=new N,n=new N){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=n}getPoint(e,n=new N){const i=n;return e===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(e).add(this.v1)),i}getPointAt(e,n){return this.getPoint(e,n)}getTangent(e,n=new N){return n.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,n){return this.getTangent(e,n)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class Y_ extends xi{constructor(e=new ue,n=new ue,i=new ue){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new ue){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ta(e,r.x,s.x,o.x),ta(e,r.y,s.y,o.y)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class t2 extends xi{constructor(e=new N,n=new N,i=new N){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=n,this.v2=i}getPoint(e,n=new N){const i=n,r=this.v0,s=this.v1,o=this.v2;return i.set(ta(e,r.x,s.x,o.x),ta(e,r.y,s.y,o.y),ta(e,r.z,s.z,o.z)),i}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class $_ extends xi{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,n=new ue){const i=n,r=this.points,s=(r.length-1)*e,o=Math.floor(s),a=s-o,l=r[o===0?o:o-1],c=r[o],u=r[o>r.length-2?r.length-1:o+1],f=r[o>r.length-3?r.length-1:o+2];return i.set(N0(a,l.x,c.x,u.x,f.x),N0(a,l.y,c.y,u.y,f.y)),i}copy(e){super.copy(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let n=0,i=this.points.length;n<i;n++){const r=this.points[n];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let n=0,i=e.points.length;n<i;n++){const r=e.points[n];this.points.push(new ue().fromArray(r))}return this}}var ed=Object.freeze({__proto__:null,ArcCurve:WA,CatmullRomCurve3:jA,CubicBezierCurve:K_,CubicBezierCurve3:QA,EllipseCurve:dp,LineCurve:q_,LineCurve3:e2,QuadraticBezierCurve:Y_,QuadraticBezierCurve3:t2,SplineCurve:$_});class n2 extends xi{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),n=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(n)){const i=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new ed[i](n,e))}return this}getPoint(e,n){const i=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=i){const o=r[s]-i,a=this.curves[s],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,n)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let n=0;for(let i=0,r=this.curves.length;i<r;i++)n+=this.curves[i].getLength(),e.push(n);return this.cacheLengths=e,e}getSpacedPoints(e=40){const n=[];for(let i=0;i<=e;i++)n.push(this.getPoint(i/e));return this.autoClose&&n.push(n[0]),n}getPoints(e=12){const n=[];let i;for(let r=0,s=this.curves;r<s.length;r++){const o=s[r],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const u=l[c];i&&i.equals(u)||(n.push(u),i=u)}}return this.autoClose&&n.length>1&&!n[n.length-1].equals(n[0])&&n.push(n[0]),n}copy(e){super.copy(e),this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let n=0,i=this.curves.length;n<i;n++){const r=this.curves[n];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let n=0,i=e.curves.length;n<i;n++){const r=e.curves[n];this.curves.push(new ed[r.type]().fromJSON(r))}return this}}class td extends n2{constructor(e){super(),this.type="Path",this.currentPoint=new ue,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let n=1,i=e.length;n<i;n++)this.lineTo(e[n].x,e[n].y);return this}moveTo(e,n){return this.currentPoint.set(e,n),this}lineTo(e,n){const i=new q_(this.currentPoint.clone(),new ue(e,n));return this.curves.push(i),this.currentPoint.set(e,n),this}quadraticCurveTo(e,n,i,r){const s=new Y_(this.currentPoint.clone(),new ue(e,n),new ue(i,r));return this.curves.push(s),this.currentPoint.set(i,r),this}bezierCurveTo(e,n,i,r,s,o){const a=new K_(this.currentPoint.clone(),new ue(e,n),new ue(i,r),new ue(s,o));return this.curves.push(a),this.currentPoint.set(s,o),this}splineThru(e){const n=[this.currentPoint.clone()].concat(e),i=new $_(n);return this.curves.push(i),this.currentPoint.copy(e[e.length-1]),this}arc(e,n,i,r,s,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,n+l,i,r,s,o),this}absarc(e,n,i,r,s,o){return this.absellipse(e,n,i,i,r,s,o),this}ellipse(e,n,i,r,s,o,a,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,n+u,i,r,s,o,a,l),this}absellipse(e,n,i,r,s,o,a,l){const c=new dp(e,n,i,r,s,o,a,l);if(this.curves.length>0){const f=c.getPoint(0);f.equals(this.currentPoint)||this.lineTo(f.x,f.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class mp extends rn{constructor(e=[new ue(0,-.5),new ue(.5,0),new ue(0,.5)],n=12,i=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:n,phiStart:i,phiLength:r},n=Math.floor(n),r=Kt(r,0,Math.PI*2);const s=[],o=[],a=[],l=[],c=[],u=1/n,f=new N,h=new ue,p=new N,g=new N,S=new N;let m=0,d=0;for(let v=0;v<=e.length-1;v++)switch(v){case 0:m=e[v+1].x-e[v].x,d=e[v+1].y-e[v].y,p.x=d*1,p.y=-m,p.z=d*0,S.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(S.x,S.y,S.z);break;default:m=e[v+1].x-e[v].x,d=e[v+1].y-e[v].y,p.x=d*1,p.y=-m,p.z=d*0,g.copy(p),p.x+=S.x,p.y+=S.y,p.z+=S.z,p.normalize(),l.push(p.x,p.y,p.z),S.copy(g)}for(let v=0;v<=n;v++){const _=i+v*u*r,y=Math.sin(_),b=Math.cos(_);for(let C=0;C<=e.length-1;C++){f.x=e[C].x*y,f.y=e[C].y,f.z=e[C].x*b,o.push(f.x,f.y,f.z),h.x=v/n,h.y=C/(e.length-1),a.push(h.x,h.y);const w=l[3*C+0]*y,L=l[3*C+1],G=l[3*C+0]*b;c.push(w,L,G)}}for(let v=0;v<n;v++)for(let _=0;_<e.length-1;_++){const y=_+v*e.length,b=y,C=y+e.length,w=y+e.length+1,L=y+1;s.push(b,C,L),s.push(w,L,C)}this.setIndex(s),this.setAttribute("position",new pt(o,3)),this.setAttribute("uv",new pt(a,2)),this.setAttribute("normal",new pt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mp(e.points,e.segments,e.phiStart,e.phiLength)}}class Os extends mp{constructor(e=1,n=1,i=4,r=8){const s=new td;s.absarc(0,-n/2,e,Math.PI*1.5,0),s.absarc(0,n/2,e,0,Math.PI*.5),super(s.getPoints(i),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:n,capSegments:i,radialSegments:r}}static fromJSON(e){return new Os(e.radius,e.length,e.capSegments,e.radialSegments)}}class gp extends rn{constructor(e=1,n=32,i=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:r},n=Math.max(3,n);const s=[],o=[],a=[],l=[],c=new N,u=new ue;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let f=0,h=3;f<=n;f++,h+=3){const p=i+f/n*r;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[h]/e+1)/2,u.y=(o[h+1]/e+1)/2,l.push(u.x,u.y)}for(let f=1;f<=n;f++)s.push(f,f+1,0);this.setIndex(s),this.setAttribute("position",new pt(o,3)),this.setAttribute("normal",new pt(a,3)),this.setAttribute("uv",new pt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new gp(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class vr extends rn{constructor(e=1,n=1,i=1,r=32,s=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:n,height:i,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],p=[];let g=0;const S=[],m=i/2;let d=0;v(),o===!1&&(e>0&&_(!0),n>0&&_(!1)),this.setIndex(u),this.setAttribute("position",new pt(f,3)),this.setAttribute("normal",new pt(h,3)),this.setAttribute("uv",new pt(p,2));function v(){const y=new N,b=new N;let C=0;const w=(n-e)/i;for(let L=0;L<=s;L++){const G=[],x=L/s,E=x*(n-e)+e;for(let z=0;z<=r;z++){const B=z/r,j=B*l+a,Q=Math.sin(j),H=Math.cos(j);b.x=E*Q,b.y=-x*i+m,b.z=E*H,f.push(b.x,b.y,b.z),y.set(Q,w,H).normalize(),h.push(y.x,y.y,y.z),p.push(B,1-x),G.push(g++)}S.push(G)}for(let L=0;L<r;L++)for(let G=0;G<s;G++){const x=S[G][L],E=S[G+1][L],z=S[G+1][L+1],B=S[G][L+1];e>0&&(u.push(x,E,B),C+=3),n>0&&(u.push(E,z,B),C+=3)}c.addGroup(d,C,0),d+=C}function _(y){const b=g,C=new ue,w=new N;let L=0;const G=y===!0?e:n,x=y===!0?1:-1;for(let z=1;z<=r;z++)f.push(0,m*x,0),h.push(0,x,0),p.push(.5,.5),g++;const E=g;for(let z=0;z<=r;z++){const j=z/r*l+a,Q=Math.cos(j),H=Math.sin(j);w.x=G*H,w.y=m*x,w.z=G*Q,f.push(w.x,w.y,w.z),h.push(0,x,0),C.x=Q*.5+.5,C.y=H*.5*x+.5,p.push(C.x,C.y),g++}for(let z=0;z<r;z++){const B=b+z,j=E+z;y===!0?u.push(j,j+1,B):u.push(j+1,j,B),L+=3}c.addGroup(d,L,y===!0?1:2),d+=L}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vr(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class bc extends vr{constructor(e=1,n=1,i=32,r=1,s=!1,o=0,a=Math.PI*2){super(0,e,n,i,r,s,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:n,radialSegments:i,heightSegments:r,openEnded:s,thetaStart:o,thetaLength:a}}static fromJSON(e){return new bc(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vp extends rn{constructor(e=[],n=[],i=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:n,radius:i,detail:r};const s=[],o=[];a(r),c(i),u(),this.setAttribute("position",new pt(s,3)),this.setAttribute("normal",new pt(s.slice(),3)),this.setAttribute("uv",new pt(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(v){const _=new N,y=new N,b=new N;for(let C=0;C<n.length;C+=3)p(n[C+0],_),p(n[C+1],y),p(n[C+2],b),l(_,y,b,v)}function l(v,_,y,b){const C=b+1,w=[];for(let L=0;L<=C;L++){w[L]=[];const G=v.clone().lerp(y,L/C),x=_.clone().lerp(y,L/C),E=C-L;for(let z=0;z<=E;z++)z===0&&L===C?w[L][z]=G:w[L][z]=G.clone().lerp(x,z/E)}for(let L=0;L<C;L++)for(let G=0;G<2*(C-L)-1;G++){const x=Math.floor(G/2);G%2===0?(h(w[L][x+1]),h(w[L+1][x]),h(w[L][x])):(h(w[L][x+1]),h(w[L+1][x+1]),h(w[L+1][x]))}}function c(v){const _=new N;for(let y=0;y<s.length;y+=3)_.x=s[y+0],_.y=s[y+1],_.z=s[y+2],_.normalize().multiplyScalar(v),s[y+0]=_.x,s[y+1]=_.y,s[y+2]=_.z}function u(){const v=new N;for(let _=0;_<s.length;_+=3){v.x=s[_+0],v.y=s[_+1],v.z=s[_+2];const y=m(v)/2/Math.PI+.5,b=d(v)/Math.PI+.5;o.push(y,1-b)}g(),f()}function f(){for(let v=0;v<o.length;v+=6){const _=o[v+0],y=o[v+2],b=o[v+4],C=Math.max(_,y,b),w=Math.min(_,y,b);C>.9&&w<.1&&(_<.2&&(o[v+0]+=1),y<.2&&(o[v+2]+=1),b<.2&&(o[v+4]+=1))}}function h(v){s.push(v.x,v.y,v.z)}function p(v,_){const y=v*3;_.x=e[y+0],_.y=e[y+1],_.z=e[y+2]}function g(){const v=new N,_=new N,y=new N,b=new N,C=new ue,w=new ue,L=new ue;for(let G=0,x=0;G<s.length;G+=9,x+=6){v.set(s[G+0],s[G+1],s[G+2]),_.set(s[G+3],s[G+4],s[G+5]),y.set(s[G+6],s[G+7],s[G+8]),C.set(o[x+0],o[x+1]),w.set(o[x+2],o[x+3]),L.set(o[x+4],o[x+5]),b.copy(v).add(_).add(y).divideScalar(3);const E=m(b);S(C,x+0,v,E),S(w,x+2,_,E),S(L,x+4,y,E)}}function S(v,_,y,b){b<0&&v.x===1&&(o[_]=v.x-1),y.x===0&&y.z===0&&(o[_]=b/2/Math.PI+.5)}function m(v){return Math.atan2(v.z,-v.x)}function d(v){return Math.atan2(-v.y,Math.sqrt(v.x*v.x+v.z*v.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vp(e.vertices,e.indices,e.radius,e.details)}}class Pc extends vp{constructor(e=1,n=0){const i=(1+Math.sqrt(5))/2,r=1/i,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-i,0,-r,i,0,r,-i,0,r,i,-r,-i,0,-r,i,0,r,-i,0,r,i,0,-i,0,-r,i,0,-r,-i,0,r,i,0,r],o=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,o,e,n),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:n}}static fromJSON(e){return new Pc(e.radius,e.detail)}}class Z_ extends td{constructor(e){super(e),this.uuid=Di(),this.type="Shape",this.holes=[]}getPointsHoles(e){const n=[];for(let i=0,r=this.holes.length;i<r;i++)n[i]=this.holes[i].getPoints(e);return n}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let n=0,i=this.holes.length;n<i;n++){const r=this.holes[n];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let n=0,i=e.holes.length;n<i;n++){const r=e.holes[n];this.holes.push(new td().fromJSON(r))}return this}}const i2={triangulate:function(t,e,n=2){const i=e&&e.length,r=i?e[0]*n:t.length;let s=J_(t,0,r,n,!0);const o=[];if(!s||s.next===s.prev)return o;let a,l,c,u,f,h,p;if(i&&(s=l2(t,e,s,n)),t.length>80*n){a=c=t[0],l=u=t[1];for(let g=n;g<r;g+=n)f=t[g],h=t[g+1],f<a&&(a=f),h<l&&(l=h),f>c&&(c=f),h>u&&(u=h);p=Math.max(c-a,u-l),p=p!==0?32767/p:0}return Ta(s,o,n,a,l,p,0),o}};function J_(t,e,n,i,r){let s,o;if(r===x2(t,e,n,i)>0)for(s=e;s<n;s+=i)o=I0(s,t[s],t[s+1],o);else for(s=n-i;s>=e;s-=i)o=I0(s,t[s],t[s+1],o);return o&&Qc(o,o.next)&&(Ca(o),o=o.next),o}function es(t,e){if(!t)return t;e||(e=t);let n=t,i;do if(i=!1,!n.steiner&&(Qc(n,n.next)||wt(n.prev,n,n.next)===0)){if(Ca(n),n=e=n.prev,n===n.next)break;i=!0}else n=n.next;while(i||n!==e);return e}function Ta(t,e,n,i,r,s,o){if(!t)return;!o&&s&&d2(t,i,r,s);let a=t,l,c;for(;t.prev!==t.next;){if(l=t.prev,c=t.next,s?s2(t,i,r,s):r2(t)){e.push(l.i/n|0),e.push(t.i/n|0),e.push(c.i/n|0),Ca(t),t=c.next,a=c.next;continue}if(t=c,t===a){o?o===1?(t=o2(es(t),e,n),Ta(t,e,n,i,r,s,2)):o===2&&a2(t,e,n,i,r,s):Ta(es(t),e,n,i,r,s,1);break}}}function r2(t){const e=t.prev,n=t,i=t.next;if(wt(e,n,i)>=0)return!1;const r=e.x,s=n.x,o=i.x,a=e.y,l=n.y,c=i.y,u=r<s?r<o?r:o:s<o?s:o,f=a<l?a<c?a:c:l<c?l:c,h=r>s?r>o?r:o:s>o?s:o,p=a>l?a>c?a:c:l>c?l:c;let g=i.next;for(;g!==e;){if(g.x>=u&&g.x<=h&&g.y>=f&&g.y<=p&&zs(r,a,s,l,o,c,g.x,g.y)&&wt(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function s2(t,e,n,i){const r=t.prev,s=t,o=t.next;if(wt(r,s,o)>=0)return!1;const a=r.x,l=s.x,c=o.x,u=r.y,f=s.y,h=o.y,p=a<l?a<c?a:c:l<c?l:c,g=u<f?u<h?u:h:f<h?f:h,S=a>l?a>c?a:c:l>c?l:c,m=u>f?u>h?u:h:f>h?f:h,d=nd(p,g,e,n,i),v=nd(S,m,e,n,i);let _=t.prevZ,y=t.nextZ;for(;_&&_.z>=d&&y&&y.z<=v;){if(_.x>=p&&_.x<=S&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&zs(a,u,l,f,c,h,_.x,_.y)&&wt(_.prev,_,_.next)>=0||(_=_.prevZ,y.x>=p&&y.x<=S&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&zs(a,u,l,f,c,h,y.x,y.y)&&wt(y.prev,y,y.next)>=0))return!1;y=y.nextZ}for(;_&&_.z>=d;){if(_.x>=p&&_.x<=S&&_.y>=g&&_.y<=m&&_!==r&&_!==o&&zs(a,u,l,f,c,h,_.x,_.y)&&wt(_.prev,_,_.next)>=0)return!1;_=_.prevZ}for(;y&&y.z<=v;){if(y.x>=p&&y.x<=S&&y.y>=g&&y.y<=m&&y!==r&&y!==o&&zs(a,u,l,f,c,h,y.x,y.y)&&wt(y.prev,y,y.next)>=0)return!1;y=y.nextZ}return!0}function o2(t,e,n){let i=t;do{const r=i.prev,s=i.next.next;!Qc(r,s)&&Q_(r,i,i.next,s)&&Aa(r,s)&&Aa(s,r)&&(e.push(r.i/n|0),e.push(i.i/n|0),e.push(s.i/n|0),Ca(i),Ca(i.next),i=t=s),i=i.next}while(i!==t);return es(i)}function a2(t,e,n,i,r,s){let o=t;do{let a=o.next.next;for(;a!==o.prev;){if(o.i!==a.i&&g2(o,a)){let l=ex(o,a);o=es(o,o.next),l=es(l,l.next),Ta(o,e,n,i,r,s,0),Ta(l,e,n,i,r,s,0);return}a=a.next}o=o.next}while(o!==t)}function l2(t,e,n,i){const r=[];let s,o,a,l,c;for(s=0,o=e.length;s<o;s++)a=e[s]*i,l=s<o-1?e[s+1]*i:t.length,c=J_(t,a,l,i,!1),c===c.next&&(c.steiner=!0),r.push(m2(c));for(r.sort(c2),s=0;s<r.length;s++)n=u2(r[s],n);return n}function c2(t,e){return t.x-e.x}function u2(t,e){const n=f2(t,e);if(!n)return e;const i=ex(n,t);return es(i,i.next),es(n,n.next)}function f2(t,e){let n=e,i=-1/0,r;const s=t.x,o=t.y;do{if(o<=n.y&&o>=n.next.y&&n.next.y!==n.y){const h=n.x+(o-n.y)*(n.next.x-n.x)/(n.next.y-n.y);if(h<=s&&h>i&&(i=h,r=n.x<n.next.x?n:n.next,h===s))return r}n=n.next}while(n!==e);if(!r)return null;const a=r,l=r.x,c=r.y;let u=1/0,f;n=r;do s>=n.x&&n.x>=l&&s!==n.x&&zs(o<c?s:i,o,l,c,o<c?i:s,o,n.x,n.y)&&(f=Math.abs(o-n.y)/(s-n.x),Aa(n,t)&&(f<u||f===u&&(n.x>r.x||n.x===r.x&&h2(r,n)))&&(r=n,u=f)),n=n.next;while(n!==a);return r}function h2(t,e){return wt(t.prev,t,e.prev)<0&&wt(e.next,t,t.next)<0}function d2(t,e,n,i){let r=t;do r.z===0&&(r.z=nd(r.x,r.y,e,n,i)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==t);r.prevZ.nextZ=null,r.prevZ=null,p2(r)}function p2(t){let e,n,i,r,s,o,a,l,c=1;do{for(n=t,t=null,s=null,o=0;n;){for(o++,i=n,a=0,e=0;e<c&&(a++,i=i.nextZ,!!i);e++);for(l=c;a>0||l>0&&i;)a!==0&&(l===0||!i||n.z<=i.z)?(r=n,n=n.nextZ,a--):(r=i,i=i.nextZ,l--),s?s.nextZ=r:t=r,r.prevZ=s,s=r;n=i}s.nextZ=null,c*=2}while(o>1);return t}function nd(t,e,n,i,r){return t=(t-n)*r|0,e=(e-i)*r|0,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,t|e<<1}function m2(t){let e=t,n=t;do(e.x<n.x||e.x===n.x&&e.y<n.y)&&(n=e),e=e.next;while(e!==t);return n}function zs(t,e,n,i,r,s,o,a){return(r-o)*(e-a)>=(t-o)*(s-a)&&(t-o)*(i-a)>=(n-o)*(e-a)&&(n-o)*(s-a)>=(r-o)*(i-a)}function g2(t,e){return t.next.i!==e.i&&t.prev.i!==e.i&&!v2(t,e)&&(Aa(t,e)&&Aa(e,t)&&_2(t,e)&&(wt(t.prev,t,e.prev)||wt(t,e.prev,e))||Qc(t,e)&&wt(t.prev,t,t.next)>0&&wt(e.prev,e,e.next)>0)}function wt(t,e,n){return(e.y-t.y)*(n.x-e.x)-(e.x-t.x)*(n.y-e.y)}function Qc(t,e){return t.x===e.x&&t.y===e.y}function Q_(t,e,n,i){const r=bl(wt(t,e,n)),s=bl(wt(t,e,i)),o=bl(wt(n,i,t)),a=bl(wt(n,i,e));return!!(r!==s&&o!==a||r===0&&Rl(t,n,e)||s===0&&Rl(t,i,e)||o===0&&Rl(n,t,i)||a===0&&Rl(n,e,i))}function Rl(t,e,n){return e.x<=Math.max(t.x,n.x)&&e.x>=Math.min(t.x,n.x)&&e.y<=Math.max(t.y,n.y)&&e.y>=Math.min(t.y,n.y)}function bl(t){return t>0?1:t<0?-1:0}function v2(t,e){let n=t;do{if(n.i!==t.i&&n.next.i!==t.i&&n.i!==e.i&&n.next.i!==e.i&&Q_(n,n.next,t,e))return!0;n=n.next}while(n!==t);return!1}function Aa(t,e){return wt(t.prev,t,t.next)<0?wt(t,e,t.next)>=0&&wt(t,t.prev,e)>=0:wt(t,e,t.prev)<0||wt(t,t.next,e)<0}function _2(t,e){let n=t,i=!1;const r=(t.x+e.x)/2,s=(t.y+e.y)/2;do n.y>s!=n.next.y>s&&n.next.y!==n.y&&r<(n.next.x-n.x)*(s-n.y)/(n.next.y-n.y)+n.x&&(i=!i),n=n.next;while(n!==t);return i}function ex(t,e){const n=new id(t.i,t.x,t.y),i=new id(e.i,e.x,e.y),r=t.next,s=e.prev;return t.next=e,e.prev=t,n.next=r,r.prev=n,i.next=n,n.prev=i,s.next=i,i.prev=s,i}function I0(t,e,n,i){const r=new id(t,e,n);return i?(r.next=i.next,r.prev=i,i.next.prev=r,i.next=r):(r.prev=r,r.next=r),r}function Ca(t){t.next.prev=t.prev,t.prev.next=t.next,t.prevZ&&(t.prevZ.nextZ=t.nextZ),t.nextZ&&(t.nextZ.prevZ=t.prevZ)}function id(t,e,n){this.i=t,this.x=e,this.y=n,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function x2(t,e,n,i){let r=0;for(let s=e,o=n-i;s<n;s+=i)r+=(t[o]-t[s])*(t[s+1]+t[o+1]),o=s;return r}class ia{static area(e){const n=e.length;let i=0;for(let r=n-1,s=0;s<n;r=s++)i+=e[r].x*e[s].y-e[s].x*e[r].y;return i*.5}static isClockWise(e){return ia.area(e)<0}static triangulateShape(e,n){const i=[],r=[],s=[];D0(e),U0(i,e);let o=e.length;n.forEach(D0);for(let l=0;l<n.length;l++)r.push(o),o+=n[l].length,U0(i,n[l]);const a=i2.triangulate(i,r);for(let l=0;l<a.length;l+=3)s.push(a.slice(l,l+3));return s}}function D0(t){const e=t.length;e>2&&t[e-1].equals(t[0])&&t.pop()}function U0(t,e){for(let n=0;n<e.length;n++)t.push(e[n].x),t.push(e[n].y)}class _p extends rn{constructor(e=new Z_([new ue(.5,.5),new ue(-.5,.5),new ue(-.5,-.5),new ue(.5,-.5)]),n={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:n},e=Array.isArray(e)?e:[e];const i=this,r=[],s=[];for(let a=0,l=e.length;a<l;a++){const c=e[a];o(c)}this.setAttribute("position",new pt(r,3)),this.setAttribute("uv",new pt(s,2)),this.computeVertexNormals();function o(a){const l=[],c=n.curveSegments!==void 0?n.curveSegments:12,u=n.steps!==void 0?n.steps:1,f=n.depth!==void 0?n.depth:1;let h=n.bevelEnabled!==void 0?n.bevelEnabled:!0,p=n.bevelThickness!==void 0?n.bevelThickness:.2,g=n.bevelSize!==void 0?n.bevelSize:p-.1,S=n.bevelOffset!==void 0?n.bevelOffset:0,m=n.bevelSegments!==void 0?n.bevelSegments:3;const d=n.extrudePath,v=n.UVGenerator!==void 0?n.UVGenerator:y2;let _,y=!1,b,C,w,L;d&&(_=d.getSpacedPoints(u),y=!0,h=!1,b=d.computeFrenetFrames(u,!1),C=new N,w=new N,L=new N),h||(m=0,p=0,g=0,S=0);const G=a.extractPoints(c);let x=G.shape;const E=G.holes;if(!ia.isClockWise(x)){x=x.reverse();for(let ne=0,P=E.length;ne<P;ne++){const me=E[ne];ia.isClockWise(me)&&(E[ne]=me.reverse())}}const B=ia.triangulateShape(x,E),j=x;for(let ne=0,P=E.length;ne<P;ne++){const me=E[ne];x=x.concat(me)}function Q(ne,P,me){return P||console.error("THREE.ExtrudeGeometry: vec does not exist"),ne.clone().addScaledVector(P,me)}const H=x.length,ee=B.length;function I(ne,P,me){let fe,se,pe;const Re=ne.x-P.x,xe=ne.y-P.y,R=me.x-ne.x,M=me.y-ne.y,k=Re*Re+xe*xe,Z=Re*M-xe*R;if(Math.abs(Z)>Number.EPSILON){const te=Math.sqrt(k),$=Math.sqrt(R*R+M*M),Te=P.x-xe/te,ge=P.y+Re/te,Se=me.x-M/$,$e=me.y+R/$,oe=((Se-Te)*M-($e-ge)*R)/(Re*M-xe*R);fe=Te+Re*oe-ne.x,se=ge+xe*oe-ne.y;const ye=fe*fe+se*se;if(ye<=2)return new ue(fe,se);pe=Math.sqrt(ye/2)}else{let te=!1;Re>Number.EPSILON?R>Number.EPSILON&&(te=!0):Re<-Number.EPSILON?R<-Number.EPSILON&&(te=!0):Math.sign(xe)===Math.sign(M)&&(te=!0),te?(fe=-xe,se=Re,pe=Math.sqrt(k)):(fe=Re,se=xe,pe=Math.sqrt(k/2))}return new ue(fe/pe,se/pe)}const q=[];for(let ne=0,P=j.length,me=P-1,fe=ne+1;ne<P;ne++,me++,fe++)me===P&&(me=0),fe===P&&(fe=0),q[ne]=I(j[ne],j[me],j[fe]);const J=[];let le,Ce=q.concat();for(let ne=0,P=E.length;ne<P;ne++){const me=E[ne];le=[];for(let fe=0,se=me.length,pe=se-1,Re=fe+1;fe<se;fe++,pe++,Re++)pe===se&&(pe=0),Re===se&&(Re=0),le[fe]=I(me[fe],me[pe],me[Re]);J.push(le),Ce=Ce.concat(le)}for(let ne=0;ne<m;ne++){const P=ne/m,me=p*Math.cos(P*Math.PI/2),fe=g*Math.sin(P*Math.PI/2)+S;for(let se=0,pe=j.length;se<pe;se++){const Re=Q(j[se],q[se],fe);de(Re.x,Re.y,-me)}for(let se=0,pe=E.length;se<pe;se++){const Re=E[se];le=J[se];for(let xe=0,R=Re.length;xe<R;xe++){const M=Q(Re[xe],le[xe],fe);de(M.x,M.y,-me)}}}const je=g+S;for(let ne=0;ne<H;ne++){const P=h?Q(x[ne],Ce[ne],je):x[ne];y?(w.copy(b.normals[0]).multiplyScalar(P.x),C.copy(b.binormals[0]).multiplyScalar(P.y),L.copy(_[0]).add(w).add(C),de(L.x,L.y,L.z)):de(P.x,P.y,0)}for(let ne=1;ne<=u;ne++)for(let P=0;P<H;P++){const me=h?Q(x[P],Ce[P],je):x[P];y?(w.copy(b.normals[ne]).multiplyScalar(me.x),C.copy(b.binormals[ne]).multiplyScalar(me.y),L.copy(_[ne]).add(w).add(C),de(L.x,L.y,L.z)):de(me.x,me.y,f/u*ne)}for(let ne=m-1;ne>=0;ne--){const P=ne/m,me=p*Math.cos(P*Math.PI/2),fe=g*Math.sin(P*Math.PI/2)+S;for(let se=0,pe=j.length;se<pe;se++){const Re=Q(j[se],q[se],fe);de(Re.x,Re.y,f+me)}for(let se=0,pe=E.length;se<pe;se++){const Re=E[se];le=J[se];for(let xe=0,R=Re.length;xe<R;xe++){const M=Q(Re[xe],le[xe],fe);y?de(M.x,M.y+_[u-1].y,_[u-1].x+me):de(M.x,M.y,f+me)}}}K(),re();function K(){const ne=r.length/3;if(h){let P=0,me=H*P;for(let fe=0;fe<ee;fe++){const se=B[fe];Ie(se[2]+me,se[1]+me,se[0]+me)}P=u+m*2,me=H*P;for(let fe=0;fe<ee;fe++){const se=B[fe];Ie(se[0]+me,se[1]+me,se[2]+me)}}else{for(let P=0;P<ee;P++){const me=B[P];Ie(me[2],me[1],me[0])}for(let P=0;P<ee;P++){const me=B[P];Ie(me[0]+H*u,me[1]+H*u,me[2]+H*u)}}i.addGroup(ne,r.length/3-ne,0)}function re(){const ne=r.length/3;let P=0;_e(j,P),P+=j.length;for(let me=0,fe=E.length;me<fe;me++){const se=E[me];_e(se,P),P+=se.length}i.addGroup(ne,r.length/3-ne,1)}function _e(ne,P){let me=ne.length;for(;--me>=0;){const fe=me;let se=me-1;se<0&&(se=ne.length-1);for(let pe=0,Re=u+m*2;pe<Re;pe++){const xe=H*pe,R=H*(pe+1),M=P+fe+xe,k=P+se+xe,Z=P+se+R,te=P+fe+R;Fe(M,k,Z,te)}}}function de(ne,P,me){l.push(ne),l.push(P),l.push(me)}function Ie(ne,P,me){ze(ne),ze(P),ze(me);const fe=r.length/3,se=v.generateTopUV(i,r,fe-3,fe-2,fe-1);Xe(se[0]),Xe(se[1]),Xe(se[2])}function Fe(ne,P,me,fe){ze(ne),ze(P),ze(fe),ze(P),ze(me),ze(fe);const se=r.length/3,pe=v.generateSideWallUV(i,r,se-6,se-3,se-2,se-1);Xe(pe[0]),Xe(pe[1]),Xe(pe[3]),Xe(pe[1]),Xe(pe[2]),Xe(pe[3])}function ze(ne){r.push(l[ne*3+0]),r.push(l[ne*3+1]),r.push(l[ne*3+2])}function Xe(ne){s.push(ne.x),s.push(ne.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),n=this.parameters.shapes,i=this.parameters.options;return S2(n,i,e)}static fromJSON(e,n){const i=[];for(let s=0,o=e.shapes.length;s<o;s++){const a=n[e.shapes[s]];i.push(a)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new ed[r.type]().fromJSON(r)),new _p(i,e.options)}}const y2={generateTopUV:function(t,e,n,i,r){const s=e[n*3],o=e[n*3+1],a=e[i*3],l=e[i*3+1],c=e[r*3],u=e[r*3+1];return[new ue(s,o),new ue(a,l),new ue(c,u)]},generateSideWallUV:function(t,e,n,i,r,s){const o=e[n*3],a=e[n*3+1],l=e[n*3+2],c=e[i*3],u=e[i*3+1],f=e[i*3+2],h=e[r*3],p=e[r*3+1],g=e[r*3+2],S=e[s*3],m=e[s*3+1],d=e[s*3+2];return Math.abs(a-u)<Math.abs(o-c)?[new ue(o,1-l),new ue(c,1-f),new ue(h,1-g),new ue(S,1-d)]:[new ue(a,1-l),new ue(u,1-f),new ue(p,1-g),new ue(m,1-d)]}};function S2(t,e,n){if(n.shapes=[],Array.isArray(t))for(let i=0,r=t.length;i<r;i++){const s=t[i];n.shapes.push(s.uuid)}else n.shapes.push(t.uuid);return n.options=Object.assign({},e),e.extrudePath!==void 0&&(n.options.extrudePath=e.extrudePath.toJSON()),n}class Ut extends rn{constructor(e=1,n=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:n,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},n=Math.max(3,Math.floor(n)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let c=0;const u=[],f=new N,h=new N,p=[],g=[],S=[],m=[];for(let d=0;d<=i;d++){const v=[],_=d/i;let y=0;d===0&&o===0?y=.5/n:d===i&&l===Math.PI&&(y=-.5/n);for(let b=0;b<=n;b++){const C=b/n;f.x=-e*Math.cos(r+C*s)*Math.sin(o+_*a),f.y=e*Math.cos(o+_*a),f.z=e*Math.sin(r+C*s)*Math.sin(o+_*a),g.push(f.x,f.y,f.z),h.copy(f).normalize(),S.push(h.x,h.y,h.z),m.push(C+y,1-_),v.push(c++)}u.push(v)}for(let d=0;d<i;d++)for(let v=0;v<n;v++){const _=u[d][v+1],y=u[d][v],b=u[d+1][v],C=u[d+1][v+1];(d!==0||o>0)&&p.push(_,y,C),(d!==i-1||l<Math.PI)&&p.push(y,b,C)}this.setIndex(p),this.setAttribute("position",new pt(g,3)),this.setAttribute("normal",new pt(S,3)),this.setAttribute("uv",new pt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ut(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ra extends rn{constructor(e=1,n=.4,i=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:n,radialSegments:i,tubularSegments:r,arc:s},i=Math.floor(i),r=Math.floor(r);const o=[],a=[],l=[],c=[],u=new N,f=new N,h=new N;for(let p=0;p<=i;p++)for(let g=0;g<=r;g++){const S=g/r*s,m=p/i*Math.PI*2;f.x=(e+n*Math.cos(m))*Math.cos(S),f.y=(e+n*Math.cos(m))*Math.sin(S),f.z=n*Math.sin(m),a.push(f.x,f.y,f.z),u.x=e*Math.cos(S),u.y=e*Math.sin(S),h.subVectors(f,u).normalize(),l.push(h.x,h.y,h.z),c.push(g/r),c.push(p/i)}for(let p=1;p<=i;p++)for(let g=1;g<=r;g++){const S=(r+1)*p+g-1,m=(r+1)*(p-1)+g-1,d=(r+1)*(p-1)+g,v=(r+1)*p+g;o.push(S,m,v),o.push(m,d,v)}this.setIndex(o),this.setAttribute("position",new pt(a,3)),this.setAttribute("normal",new pt(l,3)),this.setAttribute("uv",new pt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ra(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class vn extends vo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=A_,this.normalScale=new ue(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new _i,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class xp extends Gt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(n.object.target=this.target.uuid),n}}class M2 extends xp{constructor(e,n,i){super(e,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Qe(n)}copy(e,n){return super.copy(e,n),this.groundColor.copy(e.groundColor),this}}const hf=new dt,F0=new N,k0=new N;class tx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ue(512,512),this.map=null,this.mapPass=null,this.matrix=new dt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lp,this._frameExtents=new ue(1,1),this._viewportCount=1,this._viewports=[new ht(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;F0.setFromMatrixPosition(e.matrixWorld),n.position.copy(F0),k0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(k0),n.updateMatrixWorld(),hf.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const O0=new dt,Uo=new N,df=new N;class E2 extends tx{constructor(){super(new Rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ue(4,2),this._viewportCount=6,this._viewports=[new ht(2,1,1,1),new ht(0,1,1,1),new ht(3,1,1,1),new ht(1,1,1,1),new ht(3,0,1,1),new ht(1,0,1,1)],this._cubeDirections=[new N(1,0,0),new N(-1,0,0),new N(0,0,1),new N(0,0,-1),new N(0,1,0),new N(0,-1,0)],this._cubeUps=[new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,1,0),new N(0,0,1),new N(0,0,-1)]}updateMatrices(e,n=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),Uo.setFromMatrixPosition(e.matrixWorld),i.position.copy(Uo),df.copy(i.position),df.add(this._cubeDirections[n]),i.up.copy(this._cubeUps[n]),i.lookAt(df),i.updateMatrixWorld(),r.makeTranslation(-Uo.x,-Uo.y,-Uo.z),O0.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(O0)}}class w2 extends xp{constructor(e,n,i=0,r=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new E2}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class T2 extends tx{constructor(){super(new z_(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class z0 extends xp{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gt.DEFAULT_UP),this.updateMatrix(),this.target=new Gt,this.shadow=new T2}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class A2{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=B0(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=B0();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function B0(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qd);const Fo=new N;function Fn(t,e,n,i,r,s){const o=2*Math.PI*r/4,a=Math.max(s-2*r,0),l=Math.PI/4;Fo.copy(e),Fo[i]=0,Fo.normalize();const c=.5*o/(o+a),u=1-Fo.angleTo(t)/l;return Math.sign(Fo[n])===1?u*c:a/(o+a)+c+c*(1-u)}class Es extends Mr{constructor(e=1,n=1,i=1,r=2,s=.1){if(r=r*2+1,s=Math.min(e/2,n/2,i/2,s),super(1,1,1,r,r,r),r===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new N,l=new N,c=new N(e,n,i).divideScalar(2).subScalar(s),u=this.attributes.position.array,f=this.attributes.normal.array,h=this.attributes.uv.array,p=u.length/6,g=new N,S=.5/r;for(let m=0,d=0;m<u.length;m+=3,d+=2)switch(a.fromArray(u,m),l.copy(a),l.x-=Math.sign(l.x)*S,l.y-=Math.sign(l.y)*S,l.z-=Math.sign(l.z)*S,l.normalize(),u[m+0]=c.x*Math.sign(a.x)+l.x*s,u[m+1]=c.y*Math.sign(a.y)+l.y*s,u[m+2]=c.z*Math.sign(a.z)+l.z*s,f[m+0]=l.x,f[m+1]=l.y,f[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),h[d+0]=Fn(g,l,"z","y",s,i),h[d+1]=1-Fn(g,l,"y","z",s,n);break;case 1:g.set(-1,0,0),h[d+0]=1-Fn(g,l,"z","y",s,i),h[d+1]=1-Fn(g,l,"y","z",s,n);break;case 2:g.set(0,1,0),h[d+0]=1-Fn(g,l,"x","z",s,e),h[d+1]=Fn(g,l,"z","x",s,i);break;case 3:g.set(0,-1,0),h[d+0]=1-Fn(g,l,"x","z",s,e),h[d+1]=1-Fn(g,l,"z","x",s,i);break;case 4:g.set(0,0,1),h[d+0]=1-Fn(g,l,"x","y",s,e),h[d+1]=1-Fn(g,l,"y","x",s,n);break;case 5:g.set(0,0,-1),h[d+0]=Fn(g,l,"x","y",s,e),h[d+1]=1-Fn(g,l,"y","x",s,n);break}}}let Pr=null;function C2(){if(Pr)return Pr;const t=document.createElement("canvas");t.width=t.height=128;const e=t.getContext("2d"),n=e.createImageData(128,128);for(let i=0;i<n.data.length;i+=4){const r=128+(Math.random()-.5)*60;n.data[i]=n.data[i+1]=n.data[i+2]=r,n.data[i+3]=255}return e.putImageData(n,0,0),Pr=new hp(t),Pr.wrapS=Pr.wrapT=Xr,Pr.repeat.set(3,3),Pr}const pf=new Map;function Ye(t,e={}){const n=t+JSON.stringify(e);if(pf.has(n))return pf.get(n);const i=new vn({color:t,roughness:e.roughness??.72,metalness:e.metalness??0,bumpMap:e.noBump?null:C2(),bumpScale:.6,emissive:e.emissive??0,emissiveIntensity:e.emissiveIntensity??1});return pf.set(n,i),i}function R2(t=1,e=.45,n=5){const i=new Z_;for(let r=0;r<=n*2;r++){const s=r%2===0?t:e,o=r/(n*2)*Math.PI*2+Math.PI/2,a=Math.cos(o)*s,l=Math.sin(o)*s;r===0?i.moveTo(a,l):i.lineTo(a,l)}return i}const mf=new Map;function Ra(t=1,e=.25){const n=t+":"+e;if(mf.has(n))return mf.get(n);const i=new _p(R2(t,t*.48),{depth:e,bevelEnabled:!0,bevelThickness:e*.5,bevelSize:t*.12,bevelSegments:4,curveSegments:4});return i.center(),mf.set(n,i),i}function ii(t,e,n){const i=document.createElement("canvas");i.width=t,i.height=e,n(i.getContext("2d"),t,e);const r=new hp(i);return r.colorSpace=Cn,r.anisotropy=4,r}const nx={amir:{skin:"#FFDCC2",top:"#FFD21F",trim:"#1976D2",pants:"#1E4FB3",shoe:"#E53935",bag:"#1976D2",bag2:"#1557A8",hair:"#3A2418",sleeveSkin:!0},aina:{skin:"#FFDCC2",top:"#F25C93",trim:"#D81B60",pants:"#6A2C8E",shoe:"#EC407A",bag:"#8E24AA",bag2:"#6A1B9A",hijab:"#F06AA8",sleeveSkin:!1}},rd=512,ix=384,V0=1.9,b2=.95,P2=1.25;function L2(t,e,n,i){t.clearRect(0,0,rd,ix);const r=rd/2,s=196,o=104,a="#2B1810";t.fillStyle="rgba(255,120,120,0.35)";for(const u of[-1,1])t.beginPath(),t.ellipse(r+u*168,272,40,24,0,0,Math.PI*2),t.fill();const l=n||e==="bangga";for(const u of[-1,1]){const f=r+u*o;if(l){t.strokeStyle=a,t.lineWidth=11,t.lineCap="round",t.beginPath(),e==="bangga"||e==="gembira"||e==="teruja"?t.arc(f,s+22,40,Math.PI*1.15,Math.PI*1.85):t.arc(f,s-8,40,Math.PI*.15,Math.PI*.85),t.stroke();continue}const h=e==="terkejut"?1.1:1,p=54*h,g=(e==="fokus"?54:64)*h;t.fillStyle="#fff",t.strokeStyle=a,t.lineWidth=7,t.beginPath(),t.ellipse(f,s,p,g,0,0,Math.PI*2),t.fill(),t.stroke();const S=e==="terkejut"?.62:.86,m=t.createRadialGradient(f,s+10,4,f,s+6,p*S*1.2);m.addColorStop(0,"#7A4524"),m.addColorStop(.6,"#4A2512"),m.addColorStop(1,"#22100A"),t.fillStyle=m,t.beginPath(),t.ellipse(f,s+6,p*S,g*S,0,0,Math.PI*2),t.fill(),t.fillStyle="#140805",t.beginPath(),t.ellipse(f,s+8,p*S*.45,g*S*.45,0,0,Math.PI*2),t.fill(),t.fillStyle="#fff",t.beginPath(),t.arc(f-p*.3,s-g*.25,p*.3,0,Math.PI*2),t.fill(),t.beginPath(),t.arc(f+p*.28,s+g*.32,p*.13,0,Math.PI*2),t.fill(),e==="teruja"&&(t.fillStyle="#FFF59D",t.beginPath(),t.arc(f+p*.25,s-g*.35,8,0,Math.PI*2),t.fill()),e==="fokus"&&(t.fillStyle=nx[i].skin,t.beginPath(),t.ellipse(f,s-g*.95,p+8,g*.55,0,0,Math.PI*2),t.fill(),t.strokeStyle=a,t.lineWidth=7,t.beginPath(),t.moveTo(f-p,s-g*.42),t.lineTo(f+p,s-g*.42),t.stroke()),i==="aina"&&(t.strokeStyle=a,t.lineWidth=6,t.lineCap="round",t.beginPath(),t.moveTo(f+u*p*.85,s-g*.6),t.lineTo(f+u*(p+16),s-g*.85),t.stroke())}t.strokeStyle=i==="aina"?"#4A2A1A":a,t.lineWidth=i==="aina"?9:14,t.lineCap="round";for(const u of[-1,1]){const f=r+u*o;t.beginPath(),e==="terkejut"?t.arc(f,104,40,Math.PI*1.2,Math.PI*1.8):e==="sedih"?(t.moveTo(f-u*34,104),t.lineTo(f+u*32,122)):e==="fokus"?(t.moveTo(f-u*36,122),t.lineTo(f+u*34,106)):t.arc(f,136,40,Math.PI*1.25,Math.PI*1.75),t.stroke()}const c=322;if(t.lineWidth=8,t.strokeStyle=a,e==="terkejut")t.fillStyle="#7A2525",t.beginPath(),t.ellipse(r,c,26,32,0,0,Math.PI*2),t.fill(),t.stroke();else if(e==="sedih")t.beginPath(),t.arc(r,c+34,30,Math.PI*1.2,Math.PI*1.8),t.stroke();else if(e==="fokus")t.beginPath(),t.arc(r,c-22,26,Math.PI*.3,Math.PI*.7),t.stroke();else{const u=e==="teruja"||e==="bangga"?62:54;t.fillStyle="#8C2B2B",t.beginPath(),t.moveTo(r-u,c-16),t.quadraticCurveTo(r,c-22,r+u,c-16),t.quadraticCurveTo(r+u*.8,c+44,r,c+46),t.quadraticCurveTo(r-u*.8,c+44,r-u,c-16),t.closePath(),t.fill(),t.save(),t.clip(),t.fillStyle="#fff",t.fillRect(r-u,c-24,u*2,16),t.fillStyle="#F07C8A",t.beginPath(),t.ellipse(r,c+42,u*.55,18,0,0,Math.PI*2),t.fill(),t.restore(),t.stroke()}}function lt(t,e,n=0,i=0,r=0,s){const o=new ct(t,e);return o.position.set(n,i,r),o.castShadow=!0,s&&s.add(o),o}class H0{constructor(e="amir"){this.type=e,this.root=new gt,this.expr="gembira",this.blinkT=0,this.nextBlink=2.5,this.blinking=!1,this.state="idle",this.stateT=0,this.phase=0,this.y=0,this.vy=0,this.airborne=!1,this.lean=0,this.leanTarget=0,this.runSpeed=1,this.build(),this.buildShield()}build(){const e=nx[this.type],n=this.root;this.body=new gt,n.add(this.body);const i=Ye(e.skin),r=Ye(e.top),s=Ye(e.trim),o=Ye(e.pants),a=Ye(e.shoe),l=Ye("#FAFAFA"),c=Ye(e.bag),u=Ye(e.bag2);this.legs=[];for(const y of[-1,1]){const b=new gt;b.position.set(y*.17,.8,0),this.body.add(b),lt(new Os(.15,.36,6,14),o,0,-.3,0,b);const C=new gt;C.position.set(0,-.66,-.05),b.add(C);const w=lt(new Os(.13,.17,6,14),a,0,.02,-.02,C);w.rotation.x=Math.PI/2,w.scale.set(1.1,1,.9),lt(new Es(.29,.07,.48,3,.03),l,0,-.1,-.02,C),lt(new Ut(.1,14,10),l,0,-.03,-.2,C).scale.set(1.2,.7,.9),this.legs.push(b)}if(lt(new Ut(.33,20,14),o,0,.82,0,this.body).scale.set(1.05,.6,.85),this.torso=new gt,this.torso.position.y=.82,this.body.add(this.torso),lt(new Os(.31,.3,8,18),r,0,.28,0,this.torso).scale.set(1.05,1,.85),this.type==="aina")lt(new vr(.3,.38,.32,20),r,0,0,0,this.torso);else{const y=lt(new ra(.17,.055,10,24),s,0,.58,-.02,this.torso);y.rotation.x=Math.PI/2-.25,lt(new Es(.1,.2,.05,2,.02),s,0,.48,-.26,this.torso);for(const b of[.43,.36])lt(new Ut(.018,8,6),l,0,b,-.29,this.torso)}for(const y of[-1,1]){const b=lt(new Es(.08,.5,.05,2,.02),c,y*.2,.33,-.25,this.torso);b.rotation.x=.12}this.bag=new gt,this.bag.position.set(0,.32,.3),this.torso.add(this.bag),lt(new Es(.56,.6,.28,4,.1),c,0,0,0,this.bag),lt(new Es(.42,.26,.12,3,.05),u,0,-.14,.14,this.bag),lt(Ra(.12,.03),Ye("#FFD54F",{emissive:"#5a4000",emissiveIntensity:.3}),0,.12,.16,this.bag).scale.set(1,1,1),this.arms=[];for(const y of[-1,1]){const b=new gt;if(b.position.set(y*.38,1.3,0),this.body.add(b),lt(new Ut(.15,16,12),r,0,-.04,0,b),lt(new Os(.085,.26,6,12),e.sleeveSkin?i:r,0,-.26,0,b),e.sleeveSkin){const C=lt(new ra(.11,.03,8,18),s,0,-.14,0,b);C.rotation.x=Math.PI/2}lt(new Ut(.105,14,10),i,0,-.47,0,b),this.arms.push(b)}this.head=new gt,this.head.position.y=1.42,this.body.add(this.head);const g=.44;let S=new N(0,.42,0),m=g;if(this.type==="amir"){lt(new Ut(g,32,24),i,0,.42,0,this.head);for(const w of[-1,1]){const L=lt(new Ut(.1,12,10),i,w*.43,.4,.02,this.head);L.scale.z=.6}const y=Ye(e.hair,{roughness:.6}),b=lt(new Ut(g+.03,32,16,0,Math.PI*2,0,1.45),y,0,.44,.03,this.head);b.rotation.x=.5,lt(new Ut(.4,20,14),y,0,.36,.14,this.head).scale.set(1.08,.95,1);const C=[[-.22,.8,-.2,.17],[0,.85,-.25,.18],[.22,.79,-.2,.16],[-.32,.66,-.25,.13],[.33,.66,-.24,.13],[.12,.92,.02,.18],[-.15,.9,.08,.18],[.3,.75,.15,.17],[-.3,.76,.18,.17],[0,.6,.38,.2],[.25,.48,.3,.16],[-.25,.48,.3,.16]];for(const[w,L,G,x]of C)lt(new Ut(x,14,10),y,w,L,G,this.head);for(const w of[-1,1])lt(new Ut(.12,10,8),y,w*.41,.56,0,this.head).scale.set(.6,1.1,1)}else{const y=Ye(e.hijab,{roughness:.8});lt(new Ut(g+.04,32,24),y,0,.44,.04,this.head),S=new N(0,.39,-.13),m=.385,lt(new Ut(m,32,24),i,S.x,S.y,S.z,this.head);const b=lt(new ra(.35,.05,12,32),y,0,.42,-.37,this.head);b.scale.y=1.1;const C=lt(new vr(.3,.5,.42,28,1,!0),y,0,.02,.02,this.head);C.material=y,C.material.side=Bn,lt(new Ut(.34,20,14),y,0,.06,-.08,this.head).scale.set(1.15,.6,1)}this.faceCanvas=document.createElement("canvas"),this.faceCanvas.width=rd,this.faceCanvas.height=ix,this.faceCtx=this.faceCanvas.getContext("2d"),this.faceTex=new hp(this.faceCanvas),this.faceTex.colorSpace=Cn,this.faceTex.anisotropy=4;const d=new Ut(m+.006,40,24,Math.PI*1.5-V0/2,V0,b2,P2),v=new vn({map:this.faceTex,transparent:!0,roughness:.45,depthWrite:!1}),_=new ct(d,v);_.position.copy(S),_.renderOrder=2,this.head.add(_),this.redrawFace(),n.traverse(y=>{y.isMesh&&(y.castShadow=!0)})}buildShield(){this.shield=new gt,this.shield.visible=!1,this.shield.position.y=1.15;const e=new Vi({transparent:!0,depthWrite:!1,blending:Ea,side:Bn,uniforms:{t:{value:0}},vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix*vec4(position,1.0); vN = normalize(normalMatrix*normal); vV = normalize(-mv.xyz); gl_Position = projectionMatrix*mv; }",fragmentShader:"uniform float t; varying vec3 vN; varying vec3 vV; void main(){ float f = pow(1.0-abs(dot(vN,vV)), 2.2); float p = 0.75+0.25*sin(t*6.0); vec3 c = mix(vec3(1.0,0.85,0.25), vec3(1.0,1.0,0.7), f); gl_FragColor = vec4(c, (0.12+f*0.85)*p); }"});this.shieldMat=e,this.shield.add(new ct(new Ut(1.25,32,24),e)),this.orbit=new gt,this.shield.add(this.orbit);const n=Ye("#FFE36E",{emissive:"#FFB300",emissiveIntensity:.9,noBump:!0});for(let i=0;i<6;i++){const r=new ct(Ra(.11,.04),n),s=i/6*Math.PI*2;r.position.set(Math.cos(s)*1.3,Math.sin(i*1.7)*.5,Math.sin(s)*1.3),this.orbit.add(r)}this.shieldLight=new w2("#FFD54F",0,6),this.shield.add(this.shieldLight),this.root.add(this.shield)}setShield(e){this.shield.visible=e,this.shieldLight.intensity=e?6:0}setExpr(e){this.expr!==e&&(this.expr=e,this.redrawFace())}redrawFace(){L2(this.faceCtx,this.expr,this.blinking,this.type),this.faceTex.needsUpdate=!0}play(e){this.state=e,this.stateT=0;const n={idle:"gembira",run:"teruja",celebrate:"bangga",sad:"terkejut",victory:"bangga",stumble:"terkejut",focus:"fokus"};n[e]&&this.setExpr(n[e])}jump(){return this.airborne?!1:(this.vy=8.6,this.airborne=!0,!0)}update(e,n){this.stateT+=e,this.blinkT+=e,!this.blinking&&this.blinkT>this.nextBlink&&this.expr!=="bangga"?(this.blinking=!0,this.blinkT=0,this.redrawFace()):this.blinking&&this.blinkT>.13&&(this.blinking=!1,this.blinkT=0,this.nextBlink=2+Math.random()*2.5,this.redrawFace()),this.shield.visible&&(this.shieldMat.uniforms.t.value=n,this.orbit.rotation.y+=e*2.5,this.orbit.children.forEach((f,h)=>{f.rotation.y+=e*4,f.position.y=Math.sin(n*2+h)*.6})),this.airborne&&(this.vy-=24*e,this.y+=this.vy*e,this.y<=0&&(this.y=0,this.vy=0,this.airborne=!1,this.landT=.15)),this.landT>0&&(this.landT-=e);const[i,r]=this.legs,[s,o]=this.arms,a=this.body,l=this.head;let c=0;a.rotation.set(0,0,0),l.rotation.set(0,0,0),this.torso.rotation.set(0,0,0),this.bag.rotation.set(0,0,0),a.scale.set(1,1,1),i.rotation.set(0,0,0),r.rotation.set(0,0,0),s.rotation.set(0,0,0),o.rotation.set(0,0,0),this.lean+=(this.leanTarget-this.lean)*Math.min(1,e*10);const u=this.state;if(u==="run"||u==="stumble"){this.phase+=e*11*this.runSpeed;const f=Math.sin(this.phase);if(this.airborne?(i.rotation.x=1,r.rotation.x=.3,s.rotation.z=-2.2,o.rotation.z=2.2,a.rotation.x=-.1):(i.rotation.x=f*.85,r.rotation.x=-f*.85,s.rotation.x=-f*.9,o.rotation.x=f*.9,s.rotation.z=-.15,o.rotation.z=.15,c=Math.abs(Math.cos(this.phase))*.09,this.torso.rotation.y=f*.12,this.bag.rotation.x=Math.cos(this.phase*2)*.06,a.rotation.x=-.12,l.rotation.x=.05+Math.cos(this.phase*2)*.03),this.landT>0&&a.scale.set(1.05,.93,1.05),a.rotation.z=-this.lean*.25,u==="stumble"){const h=Math.max(0,1-this.stateT/.6);a.rotation.x+=.35*Math.sin(this.stateT*18)*h,l.rotation.z=Math.sin(this.stateT*25)*.15*h,this.stateT>.7&&this.play("run")}}else if(u==="idle"||u==="focus"){const f=Math.sin(n*2.2);a.scale.set(1+f*.01,1+f*.015,1),s.rotation.z=-.15-f*.05,o.rotation.z=.15+f*.05,o.rotation.x=Math.sin(n*1.3)*.12,l.rotation.z=Math.sin(n*.9)*.06,l.rotation.x=Math.sin(n*1.1)*.03}else if(u==="celebrate"||u==="victory"){const f=this.stateT,h=u==="victory"?.9:.75,p=f%h/h;c=Math.sin(p*Math.PI)*(u==="victory"?.9:.7);const g=2.6+Math.sin(f*10)*.2;s.rotation.z=-g,o.rotation.z=g,i.rotation.x=Math.sin(p*Math.PI)*.7,r.rotation.x=Math.sin(p*Math.PI)*.2,l.rotation.z=Math.sin(f*4)*.12,u==="victory"&&(a.rotation.y=Math.floor(f/h)%3===2?p*Math.PI*2:0),(p<.08||p>.92)&&a.scale.set(1.06,.92,1.06)}else if(u==="sad"){const f=this.stateT;f>.6&&this.expr==="terkejut"&&this.setExpr("sedih");const h=Math.min(1,f/.35);f<.45?(c=Math.sin(Math.min(1,f/.45)*Math.PI)*.25,s.rotation.z=-1.2*h,o.rotation.z=1.2*h):(o.rotation.z=.3,s.rotation.z=-2.4,s.rotation.x=-.4,s.rotation.y=Math.sin(f*6)*.15,l.rotation.x=.18,l.rotation.z=Math.sin(f*1.5)*.1,a.rotation.x=.08)}a.position.y=c+this.y}}function rx(t,e=!1){const n=t[0].index!==null,i=new Set(Object.keys(t[0].attributes)),r=new Set(Object.keys(t[0].morphAttributes)),s={},o={},a=t[0].morphTargetsRelative,l=new rn;let c=0;for(let u=0;u<t.length;++u){const f=t[u];let h=0;if(n!==(f.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const p in f.attributes){if(!i.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+'. All geometries must have compatible attributes; make sure "'+p+'" attribute exists among all geometries, or in none of them.'),null;s[p]===void 0&&(s[p]=[]),s[p].push(f.attributes[p]),h++}if(h!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". Make sure all geometries have the same number of attributes."),null;if(a!==f.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const p in f.morphAttributes){if(!r.has(p))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+".  .morphAttributes must be consistent throughout all geometries."),null;o[p]===void 0&&(o[p]=[]),o[p].push(f.morphAttributes[p])}if(e){let p;if(n)p=f.index.count;else if(f.attributes.position!==void 0)p=f.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+u+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,p,u),c+=p}}if(n){let u=0;const f=[];for(let h=0;h<t.length;++h){const p=t[h].index;for(let g=0;g<p.count;++g)f.push(p.getX(g)+u);u+=t[h].attributes.position.count}l.setIndex(f)}for(const u in s){const f=G0(s[u]);if(!f)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" attribute."),null;l.setAttribute(u,f)}for(const u in o){const f=o[u][0].length;if(f===0)break;l.morphAttributes=l.morphAttributes||{},l.morphAttributes[u]=[];for(let h=0;h<f;++h){const p=[];for(let S=0;S<o[u].length;++S)p.push(o[u][S][h]);const g=G0(p);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+u+" morphAttribute."),null;l.morphAttributes[u].push(g)}}return l}function G0(t){let e,n,i,r=-1,s=0;for(let c=0;c<t.length;++c){const u=t[c];if(e===void 0&&(e=u.array.constructor),e!==u.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(n===void 0&&(n=u.itemSize),n!==u.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=u.normalized),i!==u.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(r===-1&&(r=u.gpuType),r!==u.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;s+=u.count*n}const o=new e(s),a=new jn(o,n,i);let l=0;for(let c=0;c<t.length;++c){const u=t[c];if(u.isInterleavedBufferAttribute){const f=l/n;for(let h=0,p=u.count;h<p;h++)for(let g=0;g<n;g++){const S=u.getComponent(h,g);a.setComponent(h+f,g,S)}}else o.set(u.array,l);l+=u.count*n}return r!==void 0&&(a.gpuType=r),a}const Zl=[-2.4,0,2.4],sx=["#FF8F00","#2E9E4F","#8E24AA"],ko=12,N2=11,Xt=(t,e)=>t+Math.random()*(e-t),Lc=t=>t[Math.floor(Math.random()*t.length)];function nt(t,e,n=0,i=0,r=0,s,o=!0){const a=new ct(t,e);return a.position.set(n,i,r),a.castShadow=o,a.receiveShadow=!0,s&&s.add(a),a}const Pe={box:new Es(1,1,1,3,.08),sphere:new Ut(1,18,14),cyl:new vr(1,1,1,16),roof:new bc(1,1,4),coin:new vr(.42,.42,.12,28),cone:new bc(.34,.95,20)};Pe.coin.rotateX(Math.PI/2);const on={};function Nc(){return on.road||(on.road=ii(512,512,(t,e,n)=>{t.fillStyle="#C9A98A",t.fillRect(0,0,e,n);const i=64,r=32;for(let s=0;s<n;s+=r){const o=s/r%2?i/2:0;for(let a=-i;a<e;a+=i){const l=Xt(-14,14);t.fillStyle=`rgb(${205+l},${172+l},${140+l})`,t.beginPath(),t.roundRect(a+o+2,s+2,i-4,r-4,6),t.fill()}}t.fillStyle="#F2C94C";for(const s of[e/3,2*e/3])for(let o=0;o<n;o+=128)t.beginPath(),t.roundRect(s-7,o+20,14,80,7),t.fill()}),on.road.wrapS=on.road.wrapT=Xr,on.walk=ii(256,256,(t,e,n)=>{t.fillStyle="#D9CBB5",t.fillRect(0,0,e,n);for(let i=0;i<n;i+=64)for(let r=0;r<e;r+=64){const s=Xt(-10,10);t.fillStyle=`rgb(${236+s},${226+s},${208+s})`,t.beginPath(),t.roundRect(r+3,i+3,58,58,8),t.fill()}}),on.walk.wrapS=on.walk.wrapT=Xr,on.curb=ii(64,256,(t,e,n)=>{for(let i=0;i<n;i+=64)t.fillStyle=i/64%2?"#F5F5F5":"#E53935",t.fillRect(0,i,e,64)}),on.curb.wrapS=on.curb.wrapT=Xr,on.crate=ii(256,256,(t,e,n)=>{t.fillStyle="#B97A45",t.fillRect(0,0,e,n),t.strokeStyle="#8A5428",t.lineWidth=6;for(let i=40;i<n;i+=44)t.beginPath(),t.moveTo(0,i),t.lineTo(e,i),t.stroke();t.fillStyle="#9C6233",t.lineWidth=26,t.strokeStyle="#9C6233",t.strokeRect(13,13,e-26,n-26),t.beginPath(),t.moveTo(20,20),t.lineTo(e-20,n-20),t.moveTo(e-20,20),t.lineTo(20,n-20),t.stroke(),t.fillStyle="#5E3A1A";for(const[i,r]of[[22,22],[e-22,22],[22,n-22],[e-22,n-22]])t.beginPath(),t.arc(i,r,7,0,7),t.fill()}),on.stripe=ii(256,64,(t,e,n)=>{t.fillStyle="#fff",t.fillRect(0,0,e,n),t.fillStyle="#E53935";for(let i=-64;i<e+64;i+=64)t.beginPath(),t.moveTo(i,n),t.lineTo(i+32,0),t.lineTo(i+64,0),t.lineTo(i+32,n),t.fill()}),on.window=ii(64,64,t=>{const e=t.createLinearGradient(0,0,64,64);e.addColorStop(0,"#BFE6FF"),e.addColorStop(1,"#5AA9E6"),t.fillStyle=e,t.fillRect(0,0,64,64),t.fillStyle="rgba(255,255,255,0.6)",t.beginPath(),t.moveTo(8,40),t.lineTo(30,8),t.lineTo(40,8),t.lineTo(18,40),t.fill(),t.fillStyle="#fff",t.fillRect(30,0,4,64),t.fillRect(0,30,64,4)})),on}function I2(t,e="#F7D774",n="#1565C0"){return ii(512,160,(i,r,s)=>{i.fillStyle=e,i.beginPath(),i.roundRect(4,4,r-8,s-8,30),i.fill(),i.strokeStyle="#C79A2E",i.lineWidth=8,i.stroke(),i.fillStyle=n,i.font="700 96px Azim, sans-serif",i.textAlign="center",i.textBaseline="middle",i.fillText(t,r/2,s/2+6)})}const D2=["#FFD3A5","#FFB7C5","#B5E3FF","#FFE08A","#C8F2C2","#E3C8FF","#FFC9A8"],U2=["#E8505B","#3E7BD6","#8E44AD","#F28C28","#2E9E4F","#E05297"];function F2(t,e,n,i=1){const r=new gt;r.position.set(e,0,n),r.scale.setScalar(i),t.add(r),nt(Pe.cyl,Ye("#8D5A3B"),0,.8,0,r).scale.set(.16,1.6,.16);const s=Ye(Lc(["#5CC14A","#4DB33C","#6BD15A"]));for(const[o,a,l,c]of[[0,2.1,0,.95],[-.55,1.75,.1,.65],[.55,1.8,-.1,.65],[.1,2.75,.05,.62]])nt(Pe.sphere,s,o,a,l,r).scale.setScalar(c);return r}function k2(t,e,n){const i=new gt;i.position.set(e,0,n),t.add(i);const r=Ye("#59BF47");nt(Pe.sphere,r,0,.35,0,i).scale.set(.6,.45,.5);const s=Ye(Lc(["#FF6F91","#FFD54F","#FF8A65","#BA68C8","#FFFFFF"]));for(let o=0;o<5;o++)nt(Pe.sphere,s,Xt(-.4,.4),Xt(.55,.75),Xt(-.3,.3),i,!1).scale.setScalar(.09)}function O2(t,e,n){const i=new gt;i.position.set(e,0,n),t.add(i);const r=Ye("#2C3E66");nt(Pe.cyl,r,0,1.5,0,i).scale.set(.07,3,.07),nt(Pe.cyl,r,0,.12,0,i).scale.set(.2,.24,.2),nt(Pe.box,r,0,3.05,0,i).scale.set(.38,.12,.38),nt(Pe.sphere,Ye("#FFE9A8",{emissive:"#FFC94A",emissiveIntensity:.8,noBump:!0}),0,3.3,0,i,!1).scale.set(.2,.26,.2),nt(Pe.roof,r,0,3.62,0,i).scale.set(.3,.3,.3)}function z2(t,e,n,i){const r=Ye("#F7F3EA");for(let s=0;s<i;s+=1.5)nt(Pe.box,r,e,.45,n-s,t).scale.set(.18,.9,.18);for(const s of[.35,.7])nt(Pe.box,r,e,s,n-i/2+.75,t).scale.set(.1,.12,i)}function gf(t,e,n,i={}){const r=new gt;t.add(r);const s=i.w??Xt(4.5,6),o=i.h??Xt(3.5,6),a=Xt(4,5.5),l=e*(9.5+s/2+Xt(0,1.2));r.position.set(l,0,n);const c=i.color??Lc(D2);nt(Pe.box,Ye(c),0,o/2,0,r).scale.set(s,o,a),nt(Pe.box,Ye("#FFFFFF"),0,o+.1,0,r).scale.set(s+.3,.25,a+.3);const u=nt(Pe.roof,Ye(i.roof??Lc(U2)),0,o+.2+1.1,0,r);u.scale.set(Math.max(s,a)*.78,2.2,Math.max(s,a)*.78),u.rotation.y=Math.PI/4;const f=Nc(),h=Pe.winMat||(Pe.winMat=new vn({map:f.window,roughness:.3})),p=-e,g=p*(s/2+.02),S=Math.max(1,Math.floor((o-1.2)/1.6));for(let m=0;m<S;m++)for(const d of[-a*.25,a*.25]){const v=1.9+m*1.6;if(m===0&&Math.abs(d)<.1)continue;nt(Pe.box,Ye("#FFFFFF"),g,v,d,r,!1).scale.set(.12,1.1,1.05);const y=new ct(new Xn(.85,.9),h);y.position.set(g+p*.07,v,d),y.rotation.y=p*Math.PI/2,r.add(y)}if(nt(Pe.box,Ye("#2F6BD8"),g,.8,0,r,!1).scale.set(.15,1.6,1.1),i.awning){const m=new ct(new Mr(.9,.12,a*.9),Pe.awnMat||(Pe.awnMat=new vn({map:Nc().stripe})));m.position.set(g+p*.45,2.7,0),m.rotation.z=p*.35,r.add(m)}if(i.sign){const m=new ct(new Xn(3.2,1),new vn({map:I2(i.sign),roughness:.5}));m.position.set(g+p*.1,o-.6,0),m.rotation.y=p*Math.PI/2,r.add(m)}if(i.flag){nt(Pe.cyl,Ye("#DDDDDD"),0,o+3.5,a*.3,r).scale.set(.05,3,.05);const m=ii(192,96,(v,_,y)=>{for(let b=0;b<14;b++)v.fillStyle=b%2?"#fff":"#CC0001",v.fillRect(0,b*y/14,_,y/14+1);v.fillStyle="#010066",v.fillRect(0,0,_/2,y*8/14),v.fillStyle="#FFCC00",v.beginPath(),v.arc(38,27,18,0,7),v.fill(),v.fillStyle="#010066",v.beginPath(),v.arc(44,27,15,0,7),v.fill(),v.fillStyle="#FFCC00",v.beginPath(),v.arc(70,27,8,0,7),v.fill()}),d=new ct(new Xn(1.4,.7),new vn({map:m,side:Bn}));d.position.set(0,o+4.6,a*.3-.72),d.rotation.y=Math.PI/2,r.add(d)}return r}function B2(t,e,n,i,r){const s=new gt;s.position.set(e,n,i),s.scale.setScalar(r),t.add(s);const o=new vn({color:"#ffffff",roughness:1,emissive:"#ffffff",emissiveIntensity:.35,fog:!1});for(const[a,l,c]of[[0,0,1.4],[1.4,-.2,1.1],[-1.4,-.25,1],[.6,.6,1],[-.7,.5,.9]]){const u=new ct(Pe.sphere,o);u.position.set(a,l,0),u.scale.set(c,c*.8,c*.7),s.add(u)}return s}const V2=()=>Ye("#FFC93C",{metalness:.45,roughness:.32,emissive:"#7A5200",emissiveIntensity:.35,noBump:!0});let vf=null;function Oo(){const t=new gt,e=new ct(Pe.coin,V2());if(t.add(e),!vf){const n=Ra(.2,.04).clone();n.translate(0,0,.07);const i=Ra(.2,.04).clone();i.translate(0,0,-.07),vf=rx([n.index?n.toNonIndexed():n,i.index?i.toNonIndexed():i])}return t.add(new ct(vf,Ye("#FFE27A",{emissive:"#8A6000",emissiveIntensity:.4,noBump:!0}))),t}function H2(){const t=new gt,e=Ye("#FFD740",{emissive:"#FFB300",emissiveIntensity:.9,roughness:.35,noBump:!0}),n=new ct(Ra(.62,.22),e);n.castShadow=!0,t.add(n);const i=new X_(new fp({map:ii(128,128,r=>{const s=r.createRadialGradient(64,64,0,64,64,64);s.addColorStop(0,"rgba(255,240,150,0.95)"),s.addColorStop(.4,"rgba(255,200,60,0.45)"),s.addColorStop(1,"rgba(255,200,60,0)"),r.fillStyle=s,r.fillRect(0,0,128,128)}),transparent:!0,depthWrite:!1,blending:Ea}));return i.scale.set(2.6,2.6,1),t.add(i),t}function Pl(t){const e=new gt,n=Nc();let i=.9;if(t==="cone")nt(Pe.box,Ye("#2B2B2B"),0,.06,0,e).scale.set(.8,.12,.8),nt(Pe.cone,Ye("#FF7A1A"),0,.55,0,e),nt(Pe.band||(Pe.band=new vr(.2,.25,.16,20)),Ye("#FFFFFF"),0,.55,0,e).scale.setScalar(1),i=1;else if(t==="crate"){const r=Pe.crateMat||(Pe.crateMat=new vn({map:n.crate,roughness:.8}));nt(Pe.box,r,0,.5,0,e).scale.set(1.15,1,1),i=1}else if(t==="rock")nt(Pe.rock1||(Pe.rock1=new Pc(.6,1)),Ye("#A7A9AC"),0,.4,0,e).scale.set(1.2,.75,.9),nt(Pe.rock2||(Pe.rock2=new Pc(.3,1)),Ye("#B9BBBE"),.45,.22,.1,e),i=.85;else if(t==="barrier"){const r=Pe.stripeMat||(Pe.stripeMat=new vn({map:n.stripe,roughness:.55}));nt(Pe.box,r,0,.7,0,e).scale.set(1.9,.45,.16);const s=Ye("#5D4037");for(const o of[-1,1])nt(Pe.box,s,o*.75,.35,0,e).scale.set(.14,.7,.14),nt(Pe.box,Ye("#3A2A20"),o*.75,.05,0,e).scale.set(.2,.1,.6);for(const o of[-1,1])nt(Pe.sphere,Ye("#FFB300",{emissive:"#FF8F00",emissiveIntensity:.6,noBump:!0}),o*.75,.98,0,e).scale.setScalar(.09);i=.95}else if(t==="puddle"){const r=nt(Pe.puddle||(Pe.puddle=new gp(.85,28)),Pe.puddleMat||(Pe.puddleMat=new vn({color:"#6EC6FF",roughness:.1,metalness:.2,transparent:!0,opacity:.85})),0,.02,0,e,!1);r.rotation.x=-Math.PI/2,r.scale.set(1.15,.75,1),i=.3}return e.userData.h=i,e}function G2(){const t=new gt,e=Ye("#9B6B43"),n=Ye("#7A4E2C");for(const i of[-1,1])nt(Pe.box,e,i*4.1,2.2,0,t).scale.set(.45,4.4,.45),nt(Pe.sphere,Ye("#FFD54F",{emissive:"#FFB300",emissiveIntensity:.4}),i*4.1,4.6,0,t).scale.setScalar(.35);return nt(Pe.box,n,0,4.1,0,t).scale.set(8.6,.35,.4),Zl.forEach((i,r)=>{const s=sx[r];nt(Pe.box,Ye(s,{emissive:s,emissiveIntensity:.25}),i,3.6,0,t).scale.set(1.9,.6,.3);const a=ii(256,96,(u,f,h)=>{u.fillStyle="#fff",u.font="700 70px Azim, sans-serif",u.textAlign="center",u.textBaseline="middle",u.fillText(["KIRI","TENGAH","KANAN"][r],f/2,h/2+4)}),l=new ct(new Xn(1.7,.55),new Cc({map:a,transparent:!0}));l.position.set(i,3.6,.17),t.add(l);const c=new ct(new Xn(2,6),new Cc({color:s,transparent:!0,opacity:.32,depthWrite:!1}));c.rotation.x=-Math.PI/2,c.position.set(i,.03,-2.5),t.add(c)}),t}function W2(t){t.updateMatrixWorld(!0);const e=new dt().copy(t.matrixWorld).invert(),n=new Map,i=[];t.traverse(r=>{r.isMesh&&i.push(r)});for(const r of i){const s=r.material.uuid;n.has(s)||n.set(s,{mat:r.material,geos:[],shadow:!1});const o=r.geometry.index?r.geometry.toNonIndexed():r.geometry.clone();for(const l of Object.keys(o.attributes))["position","normal","uv"].includes(l)||o.deleteAttribute(l);o.applyMatrix4(new dt().multiplyMatrices(e,r.matrixWorld));const a=n.get(s);a.geos.push(o),a.shadow=a.shadow||r.castShadow}for(;t.children.length;)t.remove(t.children[0]);for(const{mat:r,geos:s,shadow:o}of n.values()){const a=rx(s,!1);if(s.forEach(c=>c.dispose()),!a)continue;const l=new ct(a,r);l.castShadow=o,l.receiveShadow=!0,t.add(l)}}class j2{constructor(e){this.scene=e;const n=Nc();this.ground=new gt,e.add(this.ground);const i=260;n.road.repeat.set(1,i/8);const r=new ct(new Xn(7.4,i),new vn({map:n.road,roughness:.9}));r.rotation.x=-Math.PI/2,r.receiveShadow=!0,this.ground.add(r),n.walk.repeat.set(1,i/3),n.curb.repeat.set(1,i/4);for(const o of[-1,1]){const a=new ct(new Xn(4.2,i),new vn({map:n.walk,roughness:.9}));a.rotation.x=-Math.PI/2,a.position.set(o*6.05,.12,0),a.receiveShadow=!0,this.ground.add(a);const l=new ct(new Mr(.35,.24,i),new vn({map:n.curb,roughness:.7}));l.position.set(o*3.85,.06,0),l.receiveShadow=!0,this.ground.add(l)}const s=new ct(new Xn(140,i),new vn({color:"#7CCB5E",roughness:1}));s.rotation.x=-Math.PI/2,s.position.y=-.02,s.receiveShadow=!0,this.ground.add(s),this.groundLen=i,this.chunks=[];for(let o=0;o<N2;o++){const a=new gt;a.position.z=-o*ko+10,this.fillChunk(a,o),W2(a),e.add(a),this.chunks.push(a)}this.clouds=new gt,e.add(this.clouds);for(let o=0;o<9;o++)B2(this.clouds,Xt(-70,70),Xt(20,34),-Xt(110,170),Xt(2.2,4))}fillChunk(e,n){for(const i of[-1,1])n%2===0&&O2(e,i*4.4,-2),k2(e,i*7,-Xt(1,4)),Math.random()<.8&&F2(e,i*Xt(7.3,7.8),-Xt(6,10),Xt(.85,1.15)),z2(e,i*8.7,0,ko-.5),n===3&&i===1?gf(e,i,-6,{w:7,h:5.5,color:"#FFE08A",roof:"#E8505B",sign:"SEKOLAH",flag:!0}):n===7&&i===-1?gf(e,i,-6,{w:6,h:4,color:"#FFD3A5",roof:"#E05297",sign:"KEDAI",awning:!0}):gf(e,i,-6,{awning:Math.random()<.3})}update(e){const n=Math.round(e/8)*8;this.ground.position.z=n-this.groundLen/2+40;for(const i of this.chunks)if(i.position.z-ko>e+20){let r=1/0;for(const s of this.chunks)r=Math.min(r,s.position.z);i.position.z=r-ko}this.clouds.position.z=e}resetTo(e){this.chunks.forEach((n,i)=>{n.position.z=e-i*ko+10}),this.update(e)}}let He=null,kr=null,$s=null,sa=null,ka=!1;try{ka=localStorage.getItem("lb_muted")==="1"}catch{}let zo=0,ws=0,W0=!1;function X2(){if(He)return!0;const t=window.AudioContext||window.webkitAudioContext;if(!t)return!1;try{return He=new t,kr=He.createGain(),kr.gain.value=ka?0:1,kr.connect(He.destination),$s=He.createGain(),$s.gain.value=.09,$s.connect(kr),sa=He.createGain(),sa.gain.value=.5,sa.connect(kr),!0}catch{return He=null,!1}}function j0(){X2()&&He.state==="suspended"&&He.resume().catch(()=>{})}function K2(){return ka}function q2(t){ka=t;try{localStorage.setItem("lb_muted",t?"1":"0")}catch{}kr&&kr.gain.setTargetAtTime(t?0:1,He.currentTime,.05),t&&window.speechSynthesis&&window.speechSynthesis.cancel()}function Dt(t,e,n,{type:i="sine",vol:r=.3,slideTo:s=null,dest:o=null}={}){if(!He)return;const a=He.createOscillator(),l=He.createGain();a.type=i,a.frequency.setValueAtTime(t,e),s&&a.frequency.exponentialRampToValueAtTime(s,e+n),l.gain.setValueAtTime(1e-4,e),l.gain.exponentialRampToValueAtTime(r,e+.012),l.gain.exponentialRampToValueAtTime(1e-4,e+n),a.connect(l),l.connect(o||sa),a.start(e),a.stop(e+n+.05)}function _f(t,e,n=.2,i=800){if(!He)return;const r=Math.floor(He.sampleRate*e),s=He.createBuffer(1,r,He.sampleRate),o=s.getChannelData(0);for(let u=0;u<r;u++)o[u]=(Math.random()*2-1)*(1-u/r);const a=He.createBufferSource();a.buffer=s;const l=He.createBiquadFilter();l.type="bandpass",l.frequency.value=i;const c=He.createGain();c.gain.value=n,a.connect(l),l.connect(c),c.connect(sa),a.start(t)}const kn=()=>He?He.currentTime:0,pn={button(){if(!He)return;const t=kn();Dt(660,t,.08,{type:"triangle",vol:.25}),Dt(990,t+.05,.08,{type:"triangle",vol:.2})},coin(){if(!He)return;const t=kn();Dt(1318,t,.07,{type:"square",vol:.08}),Dt(1975,t+.06,.14,{type:"square",vol:.08})},jump(){He&&Dt(380,kn(),.22,{type:"triangle",vol:.22,slideTo:760})},step(){He&&_f(kn(),.05,.05,500)},hit(){if(!He)return;const t=kn();_f(t,.18,.35,260),Dt(180,t,.2,{type:"triangle",vol:.2,slideTo:90})},smash(){if(!He)return;const t=kn();_f(t,.2,.3,1400),Dt(880,t,.15,{type:"triangle",vol:.15,slideTo:1760})},power(){if(!He)return;const t=kn();[523,659,784,1047,1319].forEach((e,n)=>Dt(e,t+n*.06,.25,{type:"triangle",vol:.18})),Dt(300,t,.6,{type:"sawtooth",vol:.05,slideTo:1200})},powerEnd(){if(!He)return;const t=kn();Dt(880,t,.15,{type:"triangle",vol:.12,slideTo:440})},correct(){if(!He)return;const t=kn();[523,659,784,1047].forEach((e,n)=>Dt(e,t+n*.09,.3,{type:"triangle",vol:.25})),Dt(1568,t+.4,.5,{type:"sine",vol:.15})},wrong(){if(!He)return;const t=kn();Dt(440,t,.22,{type:"triangle",vol:.2}),Dt(370,t+.2,.35,{type:"triangle",vol:.2})},victory(){if(!He)return;const t=kn();[[523,0],[523,.12],[523,.24],[659,.36],[784,.6],[659,.78],[784,.9],[1047,1.05]].forEach(([e,n])=>{Dt(e,t+n,.3,{type:"square",vol:.09}),Dt(e/2,t+n,.3,{type:"triangle",vol:.12})})},countdown(t){He&&Dt(t?1046:660,kn(),t?.35:.15,{type:"triangle",vol:.25})}},X0=[72,76,79,76,81,79,76,74,72,74,76,79,76,74,72,null,74,77,81,77,79,76,74,72,69,72,74,76,74,72,67,null],K0=[48,48,55,55,53,53,55,55],q0=t=>440*Math.pow(2,(t-69)/12);function Y2(){const t=.22727272727272727;for(;ws<He.currentTime+.2;){const e=X0[zo%X0.length];if(e&&Dt(q0(e),ws,t*.9,{type:"triangle",vol:.5,dest:$s}),zo%4===0&&Dt(q0(K0[zo/4%K0.length]),ws,t*3.5,{type:"sine",vol:.6,dest:$s}),zo%2===1){const n=Math.floor(He.sampleRate*.03),i=He.createBuffer(1,n,He.sampleRate),r=i.getChannelData(0);for(let l=0;l<n;l++)r[l]=(Math.random()*2-1)*(1-l/n);const s=He.createBufferSource();s.buffer=i;const o=He.createBiquadFilter();o.type="highpass",o.frequency.value=6e3;const a=He.createGain();a.gain.value=.25,s.connect(o),o.connect(a),a.connect($s),s.start(ws)}ws+=t,zo++}}function Y0(){!He||W0||(W0=!0,ws=He.currentTime+.1,setInterval(Y2,60))}function ox(){return typeof window<"u"&&"speechSynthesis"in window}function $2(t){if(!(!ox()||ka))try{const e=window.speechSynthesis;e.cancel();const n=new SpeechSynthesisUtterance(t),i=e.getVoices(),r=i.find(s=>/^ms/i.test(s.lang))||i.find(s=>/^id/i.test(s.lang));r&&(n.voice=r),n.lang=r?r.lang:"ms-MY",n.rate=.75,e.speak(n)}catch{}}const $0=8.5,Z2=4.6,J2=5,xf=["cone","crate","rock","barrier","puddle"],ui=(t,e)=>t+Math.random()*(e-t),Ll=t=>t[Math.floor(Math.random()*t.length)],Q2=t=>1+2.70158*Math.pow(t-1,3)+1.70158*Math.pow(t-1,2);class eC{constructor(e,n){this.emit=n||(()=>{}),this.renderer=new VA({canvas:e,antialias:!0,alpha:!0,powerPreference:"high-performance"}),this.renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,1.5)),this.renderer.outputColorSpace=Cn,this.renderer.toneMapping=p_,this.renderer.toneMappingExposure=1,this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=h_,this.scene=new HA,this.scene.fog=new up("#D7EEFF",45,125),this.camera=new Rn(50,16/9,.1,300);const i=new M2("#FFFFFF","#B9A27E",1.25);this.scene.add(i),this.sun=new z0("#FFF4DC",2.1),this.sun.castShadow=!0,this.sun.shadow.mapSize.set(1024,1024);const r=this.sun.shadow.camera;r.left=-14,r.right=14,r.top=14,r.bottom=-14,r.near=1,r.far=60,this.sun.shadow.bias=-8e-4,this.sun.shadow.normalBias=.03,this.scene.add(this.sun),this.scene.add(this.sun.target);const s=new z0("#FFF8EE",.75);s.position.set(0,.5,0),s.target.position.set(0,-.3,-1),this.camera.add(s),this.camera.add(s.target),this.scene.add(this.camera),this.world=new j2(this.scene),this.chars={amir:new H0("amir"),aina:new H0("aina")};for(const a of Object.values(this.chars))a.root.visible=!1,this.scene.add(a.root);this.char=this.chars.amir,this.items=[],this.particles=[],this.sparkTex=ii(64,64,a=>{const l=a.createRadialGradient(32,32,0,32,32,32);l.addColorStop(0,"rgba(255,255,220,1)"),l.addColorStop(.35,"rgba(255,215,80,0.85)"),l.addColorStop(1,"rgba(255,200,50,0)"),a.fillStyle=l,a.fillRect(0,0,64,64)}),this.mode="menu",this.phase="run",this.pz=0,this.px=0,this.lane=1,this.speed=0,this.slowT=0,this.shieldT=0,this.paused=!1,this.camPos=new N(0,5,8),this.camLook=new N(0,2,-10),this.camera.position.copy(this.camPos),this.shake=0,this.clock=new A2,this.t=0,this.stepAcc=0,this.onResize=()=>this.resize(),window.addEventListener("resize",this.onResize),this.resize(),this.running=!0;const o=()=>{this.running&&(this.raf=requestAnimationFrame(o),this.frame())};o()}resize(){const e=window.innerWidth,n=window.innerHeight;this.renderer.setSize(e,n,!1),this.camera.aspect=e/n,this.camera.fov=e/n<1.5?58:50,this.camera.updateProjectionMatrix()}dispose(){this.running=!1,cancelAnimationFrame(this.raf),window.removeEventListener("resize",this.onResize),this.renderer.dispose()}setCharacter(e){const n=this.char.root.visible;this.char.root.visible=!1,this.char=this.chars[e]||this.chars.amir,this.char.root.visible=n}showMenu(){this.mode="menu",this.paused=!1,this.clearItems(),this.char.root.visible=!1,this.char.setShield(!1),this.shieldT=0}startMission(){this.mode="play",this.paused=!1,this.clearItems(),this.pz=Math.round(this.pz/12)*12,this.world.resetTo(this.pz),this.lane=1,this.px=0,this.qIndex=0,this.shieldT=0,this.char.setShield(!1),this.slowT=0,this.char.root.visible=!0,this.char.y=0,this.char.vy=0,this.char.airborne=!1,this.char.root.position.set(0,0,this.pz),this.char.play("idle"),this.speed=0,this.starPlan=new Set([1+Math.floor(Math.random()*2)]),this.phase="countdown",this.countT=0,this.newSegment(!0),this.snapCamera()}beginRun(){this.phase="run",this.char.play("run")}feedback(e){this.mode="feedback",this.speed=0,this.char.airborne=!1,this.char.y=0,this.char.vy=0,this.char.leanTarget=0,this.clearItems(n=>n.z>this.pz-14),this.char.play(e?"celebrate":"sad"),e&&this.burst(new N(this.px,2.2,this.pz),40,3.5)}resumeRun(){this.mode="play",this.qIndex++,this.clearItems(),this.newSegment(!1),this.phase="run",this.char.play("run")}victory(){this.mode="results",this.speed=0,this.clearItems(),this.char.setShield(!1),this.shieldT=0,this.char.play("victory")}pause(e){this.paused=e}moveLeft(){this.canControl()&&(this.lane=Math.max(0,this.lane-1),this.char.leanTarget=-1,this.emit("lane",this.lane))}moveRight(){this.canControl()&&(this.lane=Math.min(2,this.lane+1),this.char.leanTarget=1,this.emit("lane",this.lane))}jump(){this.canControl()&&this.char.jump()&&pn.jump()}canControl(){return this.mode==="play"&&!this.paused&&(this.phase==="run"||this.phase==="question")}clearItems(e){const n=[];for(const i of this.items)!e||e(i)?this.scene.remove(i.obj):n.push(i);this.items=n}add(e,n,i,r,s=0,o={}){const a=Zl[i];n.position.set(a,s,r),n.scale.setScalar(.001),this.scene.add(n);const l={type:e,obj:n,lane:i,x:a,z:r,y:s,popT:0,done:!1,...o};return this.items.push(l),l}newSegment(e){const n=e?34:48,i=44,r=this.pz-(e?14:10),s=r-n;let o=r,a=!1;const l=this.starPlan.has(this.qIndex)||!e&&Math.random()<.3;for(;o>s+4;){const f=Math.random();if(l&&!a&&o<r-12){const h=Math.floor(Math.random()*3);this.add("star",H2(),h,o,1.3);const p=(h+1+Math.floor(Math.random()*2))%3;this.add("obstacle",Pl(Ll(xf)),p,o-3,0),a=!0,o-=9;continue}if(f<.45){const h=Math.floor(Math.random()*3),p=this.add("obstacle",Pl(Ll(xf)),h,o,0);if(p.h=p.obj.userData.h,Math.random()<.35){const g=(h+1+Math.floor(Math.random()*2))%3,S=this.add("obstacle",Pl(Ll(xf)),g,o,0);S.h=S.obj.userData.h;const m=3-h-g;for(let d=0;d<4;d++)this.add("coin",Oo(),m,o+3-d*2,.9)}else{const g=(h+1+Math.floor(Math.random()*2))%3;for(let S=0;S<4;S++)this.add("coin",Oo(),g,o+3-S*2,.9)}}else if(f<.75){const h=Math.floor(Math.random()*3),p=this.add("obstacle",Pl(Ll(["cone","puddle","barrier","rock"])),h,o,0);p.h=p.obj.userData.h;for(let g=-2;g<=2;g++)this.add("coin",Oo(),h,o+g*1.4,.9+(1-g*g/5)*1.3)}else{const h=Math.floor(Math.random()*3);for(let p=0;p<6;p++)this.add("coin",Oo(),h,o+4-p*1.8,.9)}o-=9}const c=s-i;for(let f=0;f<3;f++)for(const h of[s-10,s-26])for(let p=0;p<4;p++)this.add("coin",Oo(),f,h-p*1.8,.9);const u=G2();u.position.set(0,0,c),u.scale.setScalar(.001),this.scene.add(u),this.items.push({type:"gate",obj:u,x:0,z:c,y:0,popT:0,done:!1,lane:-1}),this.qTriggerZ=s,this.gateZ=c}burst(e,n=12,i=2.5){for(let r=0;r<n;r++){const s=new X_(new fp({map:this.sparkTex,transparent:!0,depthWrite:!1,blending:Ea}));s.position.copy(e);const o=ui(.25,.55);s.scale.set(o,o,1),this.scene.add(s),this.particles.push({s,v:new N(ui(-1,1),ui(.2,1.4),ui(-1,1)).multiplyScalar(i),life:ui(.4,.8),t:0})}}project(e){const n=e.clone().project(this.camera);return{nx:(n.x+1)/2,ny:(1-n.y)/2}}cameraTarget(){const e=this.char.root.position;if(this.mode==="menu")return[new N(Math.sin(this.t*.15)*1.5,5.2,this.pz+6),new N(0,2.6,this.pz-22)];if(this.mode==="feedback"||this.mode==="results"){const n=this.mode==="results"?2.35:2.2;return[new N(e.x-n,1.75,e.z-5.3),new N(e.x-n,1.3,e.z)]}return[new N(this.px*.55,4.3,this.pz+7.4),new N(this.px*.75,1.5,this.pz-7)]}snapCamera(){const[e,n]=this.cameraTarget();this.camPos.copy(e),this.camLook.copy(n)}frame(){let e=Math.min(this.maxDt||.05,this.clock.getDelta());this.paused&&(e=0),this.t+=e,e>0&&this.update(e);const[n,i]=this.cameraTarget(),r=this.mode==="play"?1-Math.pow(5e-4,e):1-Math.pow(.02,e);this.camPos.lerp(n,r),this.camLook.lerp(i,r),this.camera.position.copy(this.camPos),this.shake>0&&(this.camera.position.x+=ui(-1,1)*this.shake,this.camera.position.y+=ui(-1,1)*this.shake,this.shake=Math.max(0,this.shake-e*1.5)),this.camera.lookAt(this.camLook);const s=this.mode==="feedback"||this.mode==="results";this.sun.position.set(this.px+(s?-6:8),18,this.pz+(s?-12:6)),this.sun.target.position.set(this.px,0,this.pz-6),this.renderer.render(this.scene,this.camera)}update(e){const n=this.char;if(this.mode==="menu"){this.pz-=3.2*e,this.world.update(this.pz);return}if(this.mode==="play"){this.phase==="countdown"&&(this.countT+=e);let i=this.phase==="run"?$0:this.phase==="question"?Z2:0;if(this.slowT>0&&(this.slowT-=e,i*=.45),this.speed+=(i-this.speed)*Math.min(1,e*3),this.pz-=this.speed*e,n.runSpeed=.55+this.speed/$0*.55,this.phase==="run"&&this.pz<=this.qTriggerZ&&(this.phase="question",n.setExpr("fokus"),this.emit("needQuestion",this.qIndex)),this.phase==="question"){const s=this.pz-this.gateZ;this.emit("gateProgress",Math.max(0,Math.min(1,1-s/44))),this.pz<=this.gateZ&&(this.phase="answered",this.emit("answer",this.lane))}const r=Zl[this.lane];this.px+=(r-this.px)*Math.min(1,e*12),Math.abs(r-this.px)<.15&&(n.leanTarget=0),this.shieldT>0&&(this.shieldT-=e,this.emit("shield",Math.max(0,this.shieldT)),this.shieldT<=0&&(n.setShield(!1),pn.powerEnd(),this.emit("shieldEnd"))),this.speed>1&&!n.airborne&&(this.stepAcc+=e*n.runSpeed*3.5,this.stepAcc>1&&(this.stepAcc=0,pn.step())),this.collide()}(this.mode==="feedback"||this.mode==="results")&&(this.px+=(Zl[2]-this.px)*Math.min(1,e*4)),n.root.position.set(this.px,0,this.pz),n.update(e,this.t),this.world.update(this.pz),this.animateItems(e),this.animateParticles(e)}collide(){const e=this.char,n=e.y;for(const i of this.items){if(i.done)continue;const r=i.z-this.pz;if(r>2||r<-2)continue;const s=Math.abs(i.x-this.px);i.type==="coin"?s<.95&&Math.abs(r)<.75&&Math.abs(n+.9-i.y)<1.25&&(i.done=!0,i.collectT=0,pn.coin(),this.burst(i.obj.position.clone(),6,2),this.emit("coin",this.project(i.obj.position.clone().add(new N(0,.6,0))))):i.type==="star"?s<1&&Math.abs(r)<.9&&(i.done=!0,i.collectT=0,this.shieldT=J2,e.setShield(!0),pn.power(),this.burst(i.obj.position.clone(),24,3.5),this.emit("star")):i.type==="obstacle"&&s<1&&Math.abs(r)<.6&&n<(i.h??.9)-.1&&(i.done=!0,this.shieldT>0?(i.fly={v:new N((i.x-this.px||ui(-1,1))*4+ui(-3,3),7,-6),r:ui(4,9)},pn.smash(),this.burst(i.obj.position.clone().add(new N(0,.6,0)),14,3),this.emit("smash")):(this.slowT=.9,this.shake=.25,e.play("stumble"),pn.hit(),i.wobble=0,this.emit("hit")))}}animateItems(e){const n=[];for(const i of this.items){const r=i.obj;i.popT<1&&(i.popT=Math.min(1,i.popT+e/.35),(!i.done||i.type==="gate")&&r.scale.setScalar(Math.max(.001,Q2(i.popT)))),i.type==="coin"?i.done?(i.collectT+=e,r.position.y+=e*4,r.rotation.y+=e*25,r.scale.setScalar(Math.max(.001,1-i.collectT/.25)),i.collectT>.25&&n.push(i)):r.rotation.y+=e*3.5:i.type==="star"?i.done?(i.collectT+=e,r.scale.setScalar(Math.max(.001,1+i.collectT*3)*(1-i.collectT/.3)),i.collectT>.3&&n.push(i)):(r.rotation.y+=e*2.5,r.position.y=i.y+Math.sin(this.t*3)*.2):i.type==="obstacle"&&(i.fly?(i.fly.v.y-=20*e,r.position.addScaledVector(i.fly.v,e),r.rotation.x+=i.fly.r*e,r.rotation.z+=i.fly.r*e*.7,r.position.y<-6&&n.push(i)):i.wobble!==void 0&&i.wobble<.5&&(i.wobble+=e,r.rotation.z=Math.sin(i.wobble*30)*.2*(1-i.wobble/.5))),i.z>this.pz+14&&i.type!=="gate"&&n.push(i)}if(n.length){const i=new Set(n);for(const r of n)this.scene.remove(r.obj);this.items=this.items.filter(r=>!i.has(r))}}animateParticles(e){this.particles=this.particles.filter(n=>(n.t+=e,n.v.y-=6*e,n.s.position.addScaledVector(n.v,e),n.s.material.opacity=Math.max(0,1-n.t/n.life),n.t>=n.life?(this.scene.remove(n.s),n.s.material.dispose(),!1):!0))}}const Ui=[{id:1,kemahiran:"KVKK",pola:["KVKK"],warna:"#FFC107",ikon:"wang",kata:[["wang",["wang"]],["gong",["gong"]],["tong",["tong"]],["bank",["bank"]],["zink",["zink"]],["geng",["geng"]]]},{id:2,kemahiran:"KV + KVKK",pola:["KV","KVKK"],warna:"#1E88E5",ikon:"payung",kata:[["payung",["pa","yung"]],["kucing",["ku","cing"]],["burung",["bu","rung"]],["jagung",["ja","gung"]],["pisang",["pi","sang"]],["terung",["te","rung"]]]},{id:3,kemahiran:"V + KVKK",pola:["V","KVKK"],warna:"#43A047",ikon:"udang",kata:[["abang",["a","bang"]],["udang",["u","dang"]],["arang",["a","rang"]],["orang",["o","rang"]],["usang",["u","sang"]],["usung",["u","sung"]]]},{id:4,kemahiran:"KVK + KVKK",pola:["KVK","KVKK"],warna:"#8E24AA",ikon:"gendang",kata:[["bintang",["bin","tang"]],["kentang",["ken","tang"]],["gendang",["gen","dang"]],["kandang",["kan","dang"]],["kumbang",["kum","bang"]],["kambing",["kam","bing"]]]},{id:5,kemahiran:"KVKK + KV",pola:["KVKK","KV"],warna:"#E53950",ikon:"bangku",kata:[["bangku",["bang","ku"]],["tangga",["tang","ga"]],["mangga",["mang","ga"]],["singki",["sing","ki"]],["nangka",["nang","ka"]],["rangka",["rang","ka"]]]},{id:6,kemahiran:"KVKK + KVK",pola:["KVKK","KVK"],warna:"#FB8C00",ikon:"tingkap",kata:[["tingkap",["ting","kap"]],["langsir",["lang","sir"]],["tongkat",["tong","kat"]],["songkok",["song","kok"]],["mangkuk",["mang","kuk"]],["pinggan",["ping","gan"]]]},{id:7,kemahiran:"KVKK + KVKK",pola:["KVKK","KVKK"],warna:"#D81B9C",ikon:"tanglung",kata:[["longkang",["long","kang"]],["kangkung",["kang","kung"]],["jengking",["jeng","king"]],["tanglung",["tang","lung"]],["jongkong",["jong","kong"]],["pinggang",["ping","gang"]]]},{id:8,kemahiran:"KV + KV + KVKK",pola:["KV","KV","KVKK"],warna:"#039BE5",ikon:"pepatung",kata:[["senapang",["se","na","pang"]],["terowong",["te","ro","wong"]],["pepatung",["pe","pa","tung"]],["belalang",["be","la","lang"]],["seruling",["se","ru","ling"]],["binatang",["bi","na","tang"]]]},{id:9,kemahiran:"KV + KVK + KVKK",pola:["KV","KVK","KVKK"],warna:"#00ACC1",ikon:"kerincing",kata:[["belimbing",["be","lim","bing"]],["kedondong",["ke","don","dong"]],["kepompong",["ke","pom","pong"]],["pelampung",["pe","lam","pung"]],["kerincing",["ke","rin","cing"]],["penumpang",["pe","num","pang"]]]},{id:10,kemahiran:"KVK + KV + KVKK",pola:["KVK","KV","KVKK"],warna:"#7E57C2",ikon:"tempurung",kata:[["tempurung",["tem","pu","rung"]],["sembilang",["sem","bi","lang"]],["pencawang",["pen","ca","wang"]],["pendayung",["pen","da","yung"]],["jembalang",["jem","ba","lang"]],["mendukung",["men","du","kung"]]]},{id:11,kemahiran:"KVKK + KV + KVK",pola:["KVKK","KV","KVK"],warna:"#2E9E4F",ikon:"tengkolok",kata:[["tengkolok",["teng","ko","lok"]],["tengkorak",["teng","ko","rak"]],["tengkujuh",["teng","ku","juh"]],["cengkerik",["ceng","ke","rik"]],["tenggelam",["teng","ge","lam"]],["bangsawan",["bang","sa","wan"]]]},{id:12,kemahiran:"KV + KVKK + KVK",pola:["KV","KVKK","KVK"],warna:"#F4B400",ikon:"perangkap",kata:[["belangkas",["be","lang","kas"]],["gelongsor",["ge","long","sor"]],["merangkak",["me","rang","kak"]],["semangkuk",["se","mang","kuk"]],["perangkap",["pe","rang","kap"]],["melanggar",["me","lang","gar"]]]}].map(t=>({...t,nama:`MISI ${t.id}`,kata:t.kata.map(([e,n])=>({word:e,syllables:n,misi:t.id,img:`assets/images/${e}.png`}))})),Zs=Ui.flatMap(t=>t.kata);Object.fromEntries(Zs.map(t=>[t.word,t]));const tC={V:"vokal (a, e, i, o, u)",KV:"konsonan + vokal",KVK:"konsonan + vokal + konsonan",KVKK:"konsonan + vokal + ng / nk"},nC=["","satu","dua","tiga"];function iC(t){const e=t.pola.length;if(e===1)return["Perkataan ini ada satu suku kata sahaja.","Suku kata berakhir dengan bunyi ng atau nk."];const n=["pertama","kedua","ketiga"];return[`Perkataan terdiri daripada ${nC[e]} suku kata.`,t.pola.map((i,r)=>`Suku kata ${n[r]} ${i}`).join(" + ")+"."]}function Bs(t){const e=t.slice();for(let n=e.length-1;n>0;n--){const i=Math.floor(Math.random()*(n+1));[e[n],e[i]]=[e[i],e[n]]}return e}function rC(t){return(t==="campuran"?Bs(Zs).slice(0,12):Bs(Ui[t-1].kata)).map(n=>{const i=Ui[n.misi-1].kata.filter(o=>o.word!==n.word),r=Bs(i).slice(0,2),s=Bs([n,...r]);return{jawapan:n,pilihan:s,betulIndex:s.indexOf(n)}})}function sC(){const t=[];return Ui.length!==12&&t.push("Bilangan misi bukan 12"),Ui.forEach(e=>{e.kata.length!==6&&t.push(`Misi ${e.id} tidak ada 6 perkataan`)}),Zs.length!==72&&t.push("Jumlah perkataan bukan 72"),new Set(Zs.map(e=>e.word)).size!==72&&t.push("Ada perkataan berganda"),Zs.forEach(e=>{e.syllables.join("")!==e.word&&t.push(`Suku kata salah: ${e.word}`)}),t}const oC=["#111111","#D32F2F","#1565C0"];function Gr({syllables:t,start:e=0,size:n=64,fit:i=null,className:r="",style:s={}}){const o=t.join("");let a=n;return i&&(a=Math.min(n,i/(o.length*.56))),A.jsx("span",{className:"perkataan "+r,style:{fontSize:a,...s},"aria-label":o,children:t.map((l,c)=>A.jsx("span",{style:{color:oC[Math.min(c+e,2)]},children:l},c))})}function mi({children:t,size:e=120,fill:n="linear-gradient(#FFE04A,#FF9F1A)",stroke:i="#1A4FB8",outline:r="#fff",className:s="",style:o={}}){return A.jsxs("span",{className:"bigtext "+s,style:{fontSize:e,...o},children:[A.jsx("span",{className:"bt-outline",style:{WebkitTextStroke:`${e*.2}px ${r}`},children:t}),A.jsx("span",{className:"bt-stroke",style:{WebkitTextStroke:`${e*.11}px ${i}`},children:t}),A.jsx("span",{className:"bt-fill",style:{backgroundImage:n},children:t})]})}function tn({color:t="green",className:e="",children:n,onClick:i,style:r,icon:s,...o}){return A.jsxs("button",{className:`btn btn-${t} ${e}`,onClick:i,style:r,...o,children:[s&&A.jsx("span",{className:"btn-icon",children:s}),A.jsx("span",{className:"btn-label",children:n})]})}const We={play:A.jsx("svg",{viewBox:"0 0 24 24",children:A.jsx("path",{d:"M7 4.5v15a1 1 0 0 0 1.5.9l12-7.5a1 1 0 0 0 0-1.8l-12-7.5A1 1 0 0 0 7 4.5z",fill:"currentColor"})}),home:A.jsx("svg",{viewBox:"0 0 24 24",children:A.jsx("path",{d:"M3 11.5 12 4l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z",fill:"currentColor"})}),back:A.jsx("svg",{viewBox:"0 0 24 24",children:A.jsx("path",{d:"M11 5 4 12l7 7v-4.5h9v-5h-9z",fill:"currentColor"})}),retry:A.jsx("svg",{viewBox:"0 0 24 24",children:A.jsx("path",{d:"M12 4a8 8 0 1 0 7.7 10h-3.1A5 5 0 1 1 12 7c1.4 0 2.6.6 3.5 1.5L13 11h7V4l-2.4 2.4A8 8 0 0 0 12 4z",fill:"currentColor"})}),pad:A.jsx("svg",{viewBox:"0 0 24 24",children:A.jsx("path",{d:"M7 7h10a5 5 0 0 1 4.9 6l-.8 4a2.5 2.5 0 0 1-4.3 1.2L14.5 16h-5l-2.3 2.2A2.5 2.5 0 0 1 2.9 17l-.8-4A5 5 0 0 1 7 7zm0 3v1.5H5.5v1.5H7v1.5h1.5V13H10v-1.5H8.5V10zm9 .2a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm2 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2z",fill:"currentColor"})}),cal:A.jsx("svg",{viewBox:"0 0 24 24",children:A.jsx("path",{d:"M6 3v2H4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-2V3h-2v2H8V3zm-1 6h14v10H5zm4.3 4.3 1.7 1.7 4-4 1.4 1.4-5.4 5.4-3.1-3.1z",fill:"currentColor"})}),user:A.jsxs("svg",{viewBox:"0 0 24 24",children:[A.jsx("circle",{cx:"12",cy:"8",r:"4.5",fill:"currentColor"}),A.jsx("path",{d:"M3.5 21a8.5 8.5 0 0 1 17 0z",fill:"currentColor"})]}),sound:A.jsxs("svg",{viewBox:"0 0 24 24",children:[A.jsx("path",{d:"M4 9v6h4l5 4V5L8 9z",fill:"currentColor"}),A.jsx("path",{d:"M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round"})]}),mute:A.jsxs("svg",{viewBox:"0 0 24 24",children:[A.jsx("path",{d:"M4 9v6h4l5 4V5L8 9z",fill:"currentColor"}),A.jsx("path",{d:"m16 9 5 6m0-6-5 6",stroke:"currentColor",strokeWidth:"2.2",strokeLinecap:"round"})]}),pause:A.jsxs("svg",{viewBox:"0 0 24 24",children:[A.jsx("rect",{x:"6",y:"5",width:"4",height:"14",rx:"1.5",fill:"currentColor"}),A.jsx("rect",{x:"14",y:"5",width:"4",height:"14",rx:"1.5",fill:"currentColor"})]}),left:A.jsx("svg",{viewBox:"0 0 24 24",children:A.jsx("path",{d:"M10 5 3 12l7 7v-4.5h10v-5H10z",fill:"currentColor"})}),right:A.jsx("svg",{viewBox:"0 0 24 24",children:A.jsx("path",{d:"M14 5l7 7-7 7v-4.5H4v-5h10z",fill:"currentColor"})}),up:A.jsx("svg",{viewBox:"0 0 24 24",children:A.jsx("path",{d:"M5 11l7-7 7 7h-4.5v9h-5v-9z",fill:"currentColor"})}),star:A.jsx("svg",{viewBox:"0 0 24 24",children:A.jsx("path",{d:"M12 2.5l2.9 6 6.6.8-4.9 4.6 1.3 6.6L12 17.2l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z",fill:"currentColor"})}),check:A.jsx("svg",{viewBox:"0 0 24 24",children:A.jsx("path",{d:"M4 12.5l5 5L20 6.5",stroke:"currentColor",strokeWidth:"3.5",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"})}),cross:A.jsx("svg",{viewBox:"0 0 24 24",children:A.jsx("path",{d:"M6 6l12 12M18 6 6 18",stroke:"currentColor",strokeWidth:"3.5",strokeLinecap:"round"})}),book:A.jsx("svg",{viewBox:"0 0 24 24",children:A.jsx("path",{d:"M2 5.5C4.5 4 8 4 11 5.5V20c-3-1.5-6.5-1.5-9 0zm11 0c3-1.5 6.5-1.5 9 0V20c-2.5-1.5-6-1.5-9 0z",fill:"currentColor"})})};function Ic({size:t=56}){return A.jsx("span",{className:"coin-ico",style:{width:t,height:t},children:A.jsx("svg",{viewBox:"0 0 24 24",width:t*.55,height:t*.55,children:A.jsx("path",{d:"M12 2.5l2.9 6 6.6.8-4.9 4.6 1.3 6.6L12 17.2l-5.9 3.3 1.3-6.6-4.9-4.6 6.6-.8z",fill:"#FFE57A",stroke:"#D99A00",strokeWidth:"1.2"})})})}function jo({kata:t,className:e=""}){const[n,i]=Lp.useState(!1);return Lp.useEffect(()=>i(!1),[t.word]),n?A.jsxs("div",{className:"img-placeholder "+e,children:["Gambar belum tersedia",A.jsx("br",{}),A.jsxs("b",{children:[t.word,".png"]})]}):A.jsx("img",{className:"word-img "+e,src:t.img,alt:t.word,draggable:!1,onError:()=>i(!0)})}function ax({count:t=110,big:e=!1}){const n=Ge.useMemo(()=>Array.from({length:t},(i,r)=>({left:Math.random()*100,delay:Math.random()*(e?1.6:.6),dur:2.2+Math.random()*2,color:["#FFC107","#1E88E5","#E53935","#43A047","#EC407A","#8E24AA","#FFFFFF"][r%7],rot:Math.random()*360,w:12+Math.random()*14,shape:r%3})),[t,e]);return A.jsx("div",{className:"confetti","aria-hidden":!0,children:n.map((i,r)=>A.jsx("span",{style:{left:i.left+"%",animationDelay:i.delay+"s",animationDuration:i.dur+"s",background:i.color,width:i.w,height:i.shape===2?i.w:i.w*.45,borderRadius:i.shape===2?"50%":3,transform:`rotate(${i.rot}deg)`}},r))})}function aC(){return A.jsxs("svg",{className:"trophy",viewBox:"0 0 200 240",children:[A.jsx("defs",{children:A.jsxs("linearGradient",{id:"tg",x1:"0",x2:"1",children:[A.jsx("stop",{offset:"0",stopColor:"#FFB300"}),A.jsx("stop",{offset:".45",stopColor:"#FFE57F"}),A.jsx("stop",{offset:"1",stopColor:"#E09000"})]})}),A.jsx("path",{d:"M45 40c-30 0-35 50 5 62M155 40c30 0 35 50-5 62",stroke:"url(#tg)",strokeWidth:"14",fill:"none",strokeLinecap:"round"}),A.jsx("path",{d:"M40 22h120c0 70-20 100-60 105C60 122 40 92 40 22z",fill:"url(#tg)",stroke:"#C77F00",strokeWidth:"4"}),A.jsx("path",{d:"M100 45l9 18 20 3-14.5 14 3.5 20L100 91l-18 9.5 3.5-20L71 66l20-3z",fill:"#FFF3B0",stroke:"#D99A00",strokeWidth:"3"}),A.jsx("rect",{x:"88",y:"125",width:"24",height:"30",fill:"url(#tg)"}),A.jsx("rect",{x:"62",y:"152",width:"76",height:"22",rx:"8",fill:"url(#tg)",stroke:"#C77F00",strokeWidth:"3"}),A.jsx("rect",{x:"45",y:"172",width:"110",height:"46",rx:"10",fill:"#8D5A3B"}),A.jsx("rect",{x:"62",y:"182",width:"76",height:"26",rx:"6",fill:"#F7D774"}),A.jsx("path",{d:"M58 150c-20 8-26 20-14 22M142 150c20 8 26 20 14 22",stroke:"#E53935",strokeWidth:"9",fill:"none",strokeLinecap:"round"})]})}const lx=1920,cx=1080,lC=["KIRI","TENGAH","KANAN"],Js={amir:{nama:"AMIR",full:"assets/ui/amir_full.png",face:"assets/ui/amir_face.png"},aina:{nama:"AINA",full:"assets/ui/aina_full.png",face:"assets/ui/aina_face.png"}},Z0=sC();Z0.length&&console.error("Ralat bank perkataan:",Z0);function cC(){const[t,e]=Ge.useState(1);return Ge.useEffect(()=>{const n=()=>e(Math.min(window.innerWidth/lx,window.innerHeight/cx));return n(),window.addEventListener("resize",n),()=>window.removeEventListener("resize",n)},[]),t}function yf(t){t.forEach(e=>{const n=new Image;n.src=e.img})}function uC(){const t=Ge.useRef(null),e=Ge.useRef(null),n=cC(),[i,r]=Ge.useState(!1),[s,o]=Ge.useState("home"),[a,l]=Ge.useState(""),[c,u]=Ge.useState("amir"),[f,h]=Ge.useState(!1),[p,g]=Ge.useState(!1),[S,m]=Ge.useState(K2()),[d,v]=Ge.useState(1),[_,y]=Ge.useState(null),[b,C]=Ge.useState([]),[w,L]=Ge.useState(0),[G,x]=Ge.useState(!1),[E,z]=Ge.useState(1),[B,j]=Ge.useState(0),[Q,H]=Ge.useState(0),[ee,I]=Ge.useState(0),[q,J]=Ge.useState(null),[le,Ce]=Ge.useState(!1),[je,K]=Ge.useState(0),[re,_e]=Ge.useState(null),[de,Ie]=Ge.useState(!1),[Fe,ze]=Ge.useState([]),[Xe,ne]=Ge.useState(0),[P,me]=Ge.useState(0),fe=Ge.useRef({});fe.current={soalan:b,qi:w,screen:s,feedback:q,paused:de,countdown:re,scale:n};const se=Ge.useRef(null),pe=Ge.useRef(null),Re=Ge.useRef([]),xe=(Y,O)=>{const X=setTimeout(Y,O);return Re.current.push(X),X},R=()=>{Re.current.forEach(clearTimeout),Re.current=[]},M=Ge.useCallback((Y,O)=>{const X=fe.current;if(Y==="needQuestion")x(!0),se.current&&(se.current.style.width="0%");else if(Y==="lane")z(O);else if(Y==="gateProgress")se.current&&(se.current.style.width=(O*100).toFixed(1)+"%");else if(Y==="answer"){const ie=X.soalan[X.qi];if(!ie)return;const ce=O===ie.betulIndex;ce?(j(Ue=>Ue+1),pn.correct(),ne(Ue=>Ue+1)):(H(Ue=>Ue+1),pn.wrong()),J({ok:ce,pilih:ie.pilihan[O],q:ie}),x(!1),e.current.feedback(ce)}else if(Y==="coin"){I(Ct=>Ct+1),ne(Ct=>Ct+1);const ie=X.scale,ce=(window.innerWidth-lx*ie)/2,Ue=(window.innerHeight-cx*ie)/2,mt=Math.random();ze(Ct=>[...Ct.slice(-8),{id:mt,x:(O.nx*window.innerWidth-ce)/ie,y:(O.ny*window.innerHeight-Ue)/ie}]),setTimeout(()=>ze(Ct=>Ct.filter(et=>et.id!==mt)),800)}else if(Y==="star")Ce(!0),K(5),setTimeout(()=>Ce(!1),1900);else if(Y==="shield"){const ie=Math.ceil(O);K(ce=>ce!==ie?ie:ce),pe.current&&(pe.current.style.width=O/5*100+"%")}else Y==="shieldEnd"?K(0):Y==="hit"&&me(ie=>ie+1)},[]);Ge.useEffect(()=>{let Y=!0;const O=Promise.all(["300","500","700"].map(ie=>document.fonts.load(`${ie} 40px Azim`))).catch(()=>{});Promise.race([O,new Promise(ie=>setTimeout(ie,2500))]).then(()=>{Y&&(e.current=new eC(t.current,(ie,ce)=>M(ie,ce)),e.current.showMenu(),window.__LB=e.current,r(!0))});const X=()=>{j0(),Y0()};return window.addEventListener("pointerdown",X,{once:!0}),window.addEventListener("keydown",X,{once:!0}),()=>{Y=!1,e.current&&e.current.dispose()}},[M]),Ge.useEffect(()=>{e.current&&e.current.setCharacter(c)},[c,i]);const k=()=>pn.button(),Z=()=>a.trim()?!0:(h(!0),pn.wrong(),setTimeout(()=>h(!1),2600),!1),te=()=>{var Y;R(),o("home"),Ie(!1),J(null),x(!1),(Y=e.current)==null||Y.showMenu()},$=()=>{var Y;s==="home"&&!Z()||(R(),k(),o("misi"),Ie(!1),J(null),x(!1),(Y=e.current)==null||Y.showMenu())},Te=Y=>{if(k(),v(Y),Y==="campuran"){const O=Bs(Ui).slice(0,6).map(X=>Bs(X.kata)[0]);y(O),yf(Zs)}else y(null),yf(Ui[Y-1].kata);o("nota")},ge=()=>{Z()&&Te(1)},Se=()=>{k(),R();const Y=rC(d);yf(Y.flatMap(ie=>ie.pilihan)),C(Y),L(0),j(0),H(0),I(0),J(null),x(!1),z(1),K(0),Ce(!1),Ie(!1),o("play");const O=e.current;O.setCharacter(c),O.startMission(),["3","2","1","MULA!"].forEach((ie,ce)=>xe(()=>{_e(ie),pn.countdown(ce===3)},300+ce*750)),xe(()=>{_e(null),O.beginRun()},300+4*750-200)},$e=()=>{k();const Y=e.current;w+1>=b.length?(J(null),o("results"),Y.victory(),pn.victory()):(J(null),L(w+1),Y.resumeRun())},oe=Y=>{var O;k(),Ie(Y),(O=e.current)==null||O.pause(Y)},ye=()=>{j0();const Y=!S;m(Y),q2(Y),Y||(Y0(),pn.button())};Ge.useEffect(()=>{const Y=X=>{var mt;const ie=fe.current,ce=e.current;if(!ce||ie.screen!=="play")return;if(ie.feedback){(X.key==="Enter"||X.key===" ")&&(X.preventDefault(),(mt=document.getElementById("btn-next"))==null||mt.click());return}if(ie.paused)return;const Ue=X.key.toLowerCase();Ue==="arrowleft"||Ue==="a"?(X.preventDefault(),ce.moveLeft()):Ue==="arrowright"||Ue==="d"?(X.preventDefault(),ce.moveRight()):Ue==="arrowup"||Ue===" "||Ue==="w"?(X.preventDefault(),ce.jump()):(Ue==="escape"||Ue==="p")&&oe(!0)};window.addEventListener("keydown",Y);const O=()=>{document.hidden&&fe.current.screen==="play"&&!fe.current.feedback&&oe(!0)};return document.addEventListener("visibilitychange",O),()=>{window.removeEventListener("keydown",Y),document.removeEventListener("visibilitychange",O)}},[]);const De=Ge.useRef(null),ke=Y=>{const O=Y.touches[0];De.current={x:O.clientX,y:O.clientY}},we=Y=>{if(!De.current||s!=="play"||q||de)return;const O=Y.changedTouches[0],X=O.clientX-De.current.x,ie=O.clientY-De.current.y;De.current=null;const ce=e.current;Math.max(Math.abs(X),Math.abs(ie))<40||(Math.abs(X)>Math.abs(ie)?X<0?ce.moveLeft():ce.moveRight():ie<0&&ce.jump())},Ze=d==="campuran"?null:Ui[d-1],Ve=B*100+ee,it=b[w],D=Js[c];return A.jsxs("div",{className:"app",onTouchStart:ke,onTouchEnd:we,children:[A.jsx("div",{className:"sky"}),A.jsx("canvas",{ref:t,className:"gl"}),s!=="play"&&A.jsx("div",{className:"menu-veil"}),A.jsxs("div",{className:"stage",style:{transform:`translate(-50%,-50%) scale(${n})`},children:[!i&&A.jsxs("div",{className:"loading",children:[A.jsx(mi,{size:90,children:"LARIAN BIJAK"}),A.jsx("p",{children:"Memuatkan..."})]}),i&&s==="home"&&A.jsx(fC,{nama:a,setNama:l,namaErr:f,watak:c,setWatak:u,mulaBermain:ge,keMisi:$,setHowTo:g,howTo:p,muted:S,toggleMute:ye,click:k}),i&&s==="misi"&&A.jsx(hC,{pilihMisi:Te,keHome:()=>{k(),te()},muted:S,toggleMute:ye}),i&&s==="nota"&&A.jsx(dC,{misi:Ze,misiId:d,contoh:_,ch:D,mulaMisi:Se,back:()=>{k(),o("misi")}}),i&&s==="play"&&A.jsxs(A.Fragment,{children:[A.jsx(pC,{nama:a,ch:D,markah:Ve,syiling:ee,qi:w,total:b.length,muted:S,toggleMute:ye,pulse:Xe,onPause:()=>oe(!0)}),G&&it&&!q&&A.jsxs("div",{className:"question",children:[A.jsxs("div",{className:"q-sign",children:[A.jsx("div",{className:"q-title",children:"PILIH PERKATAAN YANG BETUL"}),A.jsx("div",{className:"q-img",children:A.jsx(jo,{kata:it.jawapan})})]}),A.jsx("div",{className:"answers",children:it.pilihan.map((Y,O)=>A.jsxs("div",{className:"answer"+(E===O?" sel":""),style:{"--lc":sx[O]},children:[E===O&&A.jsx("div",{className:"sel-arrow",children:"▼"}),A.jsx("div",{className:"answer-board",children:A.jsx(Gr,{syllables:Y.syllables,size:96,fit:430})}),A.jsxs("div",{className:"answer-lane",children:[O===0?"◀ ":"",lC[O],O===2?" ▶":"",O===1?" ▲":""]})]},Y.word))}),A.jsxs("div",{className:"gate-track",children:[A.jsx("div",{className:"gate-label",children:"Larian ke gerbang untuk memilih jawapan"}),A.jsx("div",{className:"gate-bar",children:A.jsx("div",{ref:se})})]})]}),le&&A.jsxs("div",{className:"super-banner",children:[A.jsx("div",{className:"sb-star",children:We.star}),A.jsxs("div",{children:[A.jsx(mi,{size:110,fill:"linear-gradient(#FFF27A,#FFB300)",stroke:"#1A4FB8",children:"SUPER POWER!"}),A.jsx("div",{className:"ribbon wood",children:"PERISAI BINTANG AKTIF!"})]})]}),je>0&&A.jsxs("div",{className:"shield-timer",children:[A.jsx("span",{className:"st-star",children:We.star}),A.jsx("div",{className:"st-bar",children:A.jsx("div",{ref:pe,style:{width:"100%"}})}),A.jsxs("b",{children:[je," saat"]})]}),Fe.map(Y=>A.jsx("div",{className:"plus1",style:{left:Y.x,top:Y.y},children:"+1"},Y.id)),P>0&&A.jsx("div",{className:"hit-flash"},P),re&&A.jsxs("div",{className:"countdown",children:[A.jsx(mi,{size:re.length>2?200:260,children:re}),re==="3"&&A.jsx("div",{className:"cd-hint",children:"Kutip syiling • Elak halangan • Ambil bintang!"})]},re),!q&&A.jsxs("div",{className:"controls",children:[A.jsxs("button",{className:"ctl ctl-blue",style:{left:70},onPointerDown:Y=>{Y.preventDefault(),e.current.moveLeft()},children:[We.left,A.jsx("span",{children:"KIRI"})]}),A.jsxs("button",{className:"ctl ctl-yellow",style:{left:290},onPointerDown:Y=>{Y.preventDefault(),e.current.jump()},children:[We.up,A.jsx("span",{children:"LOMPAT"})]}),A.jsxs("button",{className:"ctl ctl-blue",style:{right:70},onPointerDown:Y=>{Y.preventDefault(),e.current.moveRight()},children:[We.right,A.jsx("span",{children:"KANAN"})]})]}),q&&q.ok&&A.jsxs("div",{className:"fb fb-ok",children:[A.jsx(ax,{count:90}),A.jsxs("div",{className:"fb-head",children:[A.jsx(mi,{size:150,fill:"linear-gradient(#B9F56B,#3DBB2F)",stroke:"#1B6E1B",children:"BETUL!"}),A.jsx("div",{className:"ribbon red",children:"TAHNIAH!"})]}),A.jsxs("div",{className:"fb-card ok",children:[A.jsx("div",{className:"fb-check",children:We.check}),A.jsx(jo,{kata:q.q.jawapan,className:"fb-img"}),A.jsx(Gr,{syllables:q.q.jawapan.syllables,size:110,fit:520})]}),A.jsxs("div",{className:"pill wood big",children:[A.jsx(Ic,{size:56})," +100 MARKAH"]}),A.jsx(tn,{id:"btn-next",color:"green",className:"btn-next",onClick:$e,icon:We.play,children:"SETERUSNYA"})]}),q&&!q.ok&&A.jsxs("div",{className:"fb fb-no",children:[A.jsxs("div",{className:"fb-head",children:[A.jsx("span",{className:"xcircle",children:We.cross}),A.jsx(mi,{size:130,fill:"linear-gradient(#FFFFFF,#FFC1CC)",stroke:"#C62839",children:"BELUM TEPAT!"}),A.jsx("div",{className:"ribbon wood",children:"JOM TERUSKAN!"})]}),A.jsxs("div",{className:"fb-row",children:[A.jsxs("div",{className:"fb-card no",children:[A.jsx("div",{className:"fb-cap",children:"JAWAPAN YANG BETUL:"}),A.jsxs("div",{className:"fb-inner",children:[A.jsx(jo,{kata:q.q.jawapan,className:"fb-img sm"}),A.jsx(Gr,{syllables:q.q.jawapan.syllables,size:110,fit:460})]})]}),A.jsxs("div",{className:"fb-chosen",children:[A.jsx("div",{className:"fc-cap",children:"Pilihan anda"}),A.jsxs("div",{className:"fc-item",children:[A.jsx(jo,{kata:q.pilih,className:"fc-img"}),A.jsx(Gr,{syllables:q.pilih.syllables,size:54,fit:230}),A.jsx("span",{className:"fc-x",children:We.cross})]})]})]}),A.jsx(tn,{id:"btn-next",color:"green",className:"btn-next",onClick:$e,icon:We.play,children:"SETERUSNYA"})]}),de&&A.jsx("div",{className:"modal-bg",children:A.jsxs("div",{className:"modal",children:[A.jsx("h2",{children:"BERHENTI SEKEJAP"}),A.jsx(tn,{color:"green",icon:We.play,onClick:()=>oe(!1),children:"TERUSKAN"}),A.jsx(tn,{color:"orange",icon:We.cal,onClick:$,children:"PILIH MISI"}),A.jsx(tn,{color:"blue",icon:We.home,onClick:()=>{k(),te()},children:"HALAMAN UTAMA"})]})})]}),i&&s==="results"&&A.jsx(mC,{nama:a,ch:D,misi:Ze,misiId:d,betul:B,salah:Q,syiling:ee,markah:Ve,total:b.length,mainLagi:Se,keMisi:$,keHome:()=>{k(),te()}})]})]})}function fC({nama:t,setNama:e,namaErr:n,watak:i,setWatak:r,mulaBermain:s,keMisi:o,setHowTo:a,howTo:l,muted:c,toggleMute:u,click:f}){return A.jsxs("div",{className:"screen home",children:[A.jsx("button",{className:"round-btn blue",style:{right:40,top:30},onClick:u,"aria-label":"Bunyi",children:c?We.mute:We.sound}),A.jsxs("div",{className:"logo",children:[A.jsx(mi,{size:190,fill:"linear-gradient(#FFE84A 20%,#FF9A1A)",children:"LARIAN"}),A.jsx(mi,{size:190,fill:"linear-gradient(#4FD2FF,#1565E0)",stroke:"#0D3A8C",style:{marginTop:-40},children:"BIJAK"}),A.jsx("div",{className:"ribbon red tag",children:"MISI PANTAS, JAWAPAN TEPAT!"})]}),["amir","aina"].map(h=>A.jsxs("button",{className:"char-pick "+h+(i===h?" on":""),onClick:()=>{f(),r(h)},children:[A.jsx("img",{src:Js[h].full,alt:Js[h].nama,draggable:!1}),A.jsx("span",{className:"cp-name",children:Js[h].nama}),i===h&&A.jsx("span",{className:"cp-check",children:We.check})]},h)),A.jsxs("div",{className:"name-box",children:[A.jsx("span",{className:"nb-ico",children:We.user}),A.jsx("input",{value:t,maxLength:14,placeholder:"Masukkan nama anda...",onChange:h=>e(h.target.value.toUpperCase()),onKeyDown:h=>{h.key==="Enter"&&s()}})]}),n&&A.jsx("div",{className:"name-err",children:"Sila masukkan nama dahulu!"}),A.jsx(tn,{color:"green",className:"btn-mula",icon:We.play,onClick:s,children:"MULA BERMAIN"}),A.jsxs("div",{className:"home-row",children:[A.jsx(tn,{color:"orange",icon:We.cal,onClick:o,children:"PILIH MISI"}),A.jsx(tn,{color:"purple",icon:We.pad,onClick:()=>{f(),a(!0)},children:"CARA BERMAIN"}),A.jsx("button",{className:"round-btn blue inline",onClick:u,"aria-label":"Bunyi",children:c?We.mute:We.sound})]}),A.jsx("div",{className:"credit",children:"♥ BBM Cikgu Safia Waheeda ♥"}),l&&A.jsx("div",{className:"modal-bg",onClick:()=>a(!1),children:A.jsxs("div",{className:"modal howto",onClick:h=>h.stopPropagation(),children:[A.jsx("h2",{children:"CARA BERMAIN"}),A.jsxs("ol",{children:[A.jsxs("li",{children:[A.jsx("b",{children:"Tulis nama"})," dan pilih watak AMIR atau AINA."]}),A.jsxs("li",{children:[A.jsx("b",{children:"Pilih misi"})," dan baca Nota Ringkas."]}),A.jsxs("li",{children:["Watak berlari sendiri. Tekan ",A.jsx("kbd",{children:"◀"})," ",A.jsx("kbd",{children:"▶"})," atau ",A.jsx("kbd",{children:"A"})," ",A.jsx("kbd",{children:"D"})," untuk tukar lorong."]}),A.jsxs("li",{children:["Tekan ",A.jsx("kbd",{children:"▲"})," atau ",A.jsx("kbd",{children:"SPACE"})," untuk melompat halangan."]}),A.jsxs("li",{children:["Lihat gambar, kemudian ",A.jsx("b",{children:"pergi ke lorong perkataan yang betul"})," sebelum sampai ke gerbang."]}),A.jsxs("li",{children:["Syiling = ",A.jsx("b",{children:"+1"}),". Jawapan betul = ",A.jsx("b",{children:"+100"}),". Bintang = perisai 5 saat!"]})]}),A.jsx(tn,{color:"green",icon:We.check,onClick:()=>{f(),a(!1)},children:"FAHAM!"})]})})]})}function hC({pilihMisi:t,keHome:e,muted:n,toggleMute:i}){return A.jsxs("div",{className:"screen misi",children:[A.jsxs("div",{className:"misi-title",children:[A.jsx(mi,{size:140,children:"PILIH MISI"}),A.jsx("div",{className:"ribbon red",children:"Pilih kemahiran untuk mula bermain"})]}),A.jsx("img",{className:"side-char l",src:Js.amir.full,alt:""}),A.jsx("img",{className:"side-char r",src:Js.aina.full,alt:""}),A.jsx("div",{className:"misi-grid",children:Ui.map(r=>A.jsxs("button",{className:"misi-card",style:{"--mc":r.warna},onClick:()=>t(r.id),children:[A.jsx("span",{className:"mc-num",children:r.id}),A.jsx("span",{className:"mc-skill",children:r.kemahiran}),A.jsx("span",{className:"mc-img",children:A.jsx("img",{src:`assets/images/${r.ikon}.png`,alt:"",draggable:!1})})]},r.id))}),A.jsx(tn,{color:"pink",className:"btn-campuran",icon:We.star,onClick:()=>t("campuran"),children:"MISI CAMPURAN"}),A.jsx(tn,{color:"orange",className:"btn-home-corner",icon:We.home,onClick:e,children:"HALAMAN UTAMA"}),A.jsx("button",{className:"round-btn blue",style:{right:50,bottom:50},onClick:i,children:n?We.mute:We.sound})]})}function dC({misi:t,misiId:e,contoh:n,ch:i,mulaMisi:r,back:s}){const o=e==="campuran",a=o?n.slice(0,3):t.kata.slice(0,3),l=o?n.slice(3,6):t.kata.slice(3,6),c=o?["12 soalan rawak daripada semua misi.","Ingat warna: suku kata 1 hitam, 2 merah, 3 biru."]:iC(t),u=a[0];return A.jsxs("div",{className:"screen nota",children:[A.jsx(tn,{color:"blue",className:"btn-back",icon:We.back,onClick:s,children:"KEMBALI"}),A.jsxs("div",{className:"nota-title",children:[A.jsx("div",{className:"plaque",children:A.jsx(mi,{size:110,fill:"linear-gradient(#fff,#e8f2ff)",stroke:"#1A4FB8",children:o?"MISI CAMPURAN":`MISI ${t.id}`})}),A.jsx("div",{className:"skill-pill",children:o?"SEMUA KEMAHIRAN":t.kemahiran})]}),A.jsxs("div",{className:"nota-tag",children:[A.jsx("span",{children:We.book}),"NOTA RINGKAS"]}),A.jsx("img",{className:"nota-char",src:i.full,alt:""}),A.jsx("div",{className:"nota-bubble",children:"Jom baca!"}),A.jsxs("div",{className:"nota-board",children:[A.jsxs("p",{className:"nota-desc",children:[c[0],A.jsx("br",{}),c[1]]}),!o&&A.jsx("div",{className:"pola",children:t.pola.map((f,h)=>A.jsxs("div",{className:"pola-chip",style:{"--pc":["#111111","#D32F2F","#1565C0"][h]},children:[A.jsx("b",{children:f}),A.jsx("span",{children:tC[f]}),A.jsxs("em",{children:["contoh: ",A.jsx(Gr,{syllables:[u.syllables[h]],start:h,size:46})]})]},h))}),A.jsx("div",{className:"contoh",children:a.map(f=>A.jsxs("div",{className:"contoh-card",children:[A.jsx(jo,{kata:f}),A.jsx(Gr,{syllables:f.syllables,size:78,fit:300}),ox()&&A.jsx("button",{className:"speak",onClick:()=>$2(f.word),"aria-label":"Sebut "+f.word,children:We.sound})]},f.word))})]}),A.jsxs("div",{className:"notepad",children:[A.jsx("div",{className:"np-rings",children:Array.from({length:6},(f,h)=>A.jsx("i",{},h))}),A.jsx("div",{className:"np-title",children:"CONTOH LAIN"}),l.map(f=>A.jsxs("div",{className:"np-item",children:["• ",A.jsx(Gr,{syllables:f.syllables,size:58,fit:260})]},f.word))]}),A.jsx(tn,{color:"green",className:"btn-faham",icon:We.play,onClick:r,children:"FAHAM, JOM MAIN!"})]})}function pC({nama:t,ch:e,markah:n,syiling:i,qi:r,total:s,muted:o,toggleMute:a,pulse:l,onPause:c}){return A.jsxs("div",{className:"hud",children:[A.jsxs("div",{className:"hud-player",children:[A.jsx("img",{src:e.face,alt:""}),A.jsxs("div",{children:[A.jsx("small",{children:"PEMAIN:"}),A.jsx("b",{children:t})]})]}),A.jsxs("div",{className:"hud-score",children:[A.jsx(Ic,{size:70}),A.jsxs("div",{children:[A.jsx("small",{children:"MARKAH:"}),A.jsx("b",{className:"pulse",children:n},l)]})]}),A.jsxs("div",{className:"hud-pill",children:[A.jsx(Ic,{size:50}),A.jsx("b",{children:i})]}),A.jsxs("div",{className:"hud-pill q",children:["SOALAN: ",A.jsxs("b",{children:[Math.min(r+1,s),"/",s]})]}),A.jsx("button",{className:"round-btn blue hud-r1",onClick:a,children:o?We.mute:We.sound}),A.jsx("button",{className:"round-btn red hud-r2",onClick:c,children:We.pause})]})}function mC({nama:t,ch:e,misi:n,misiId:i,betul:r,salah:s,syiling:o,markah:a,total:l,mainLagi:c,keMisi:u,keHome:f}){const h=l?r/l:0,p=h===1?3:h>=.7?2:1,g=p===3?"CEMERLANG!":p===2?"HEBAT! TERUSKAN USAHA!":"BAGUS! CUBA LAGI!";return A.jsxs("div",{className:"screen results",children:[A.jsx(ax,{count:160,big:!0}),A.jsxs("div",{className:"res-head",children:[A.jsx(mi,{size:170,children:"TAHNIAH!"}),A.jsx("div",{className:"ribbon wood",children:"MISI SELESAI!"})]}),A.jsxs("div",{className:"res-board",children:[A.jsxs("div",{className:"res-info",children:[A.jsxs("span",{children:[A.jsx("small",{children:"Pemain"}),A.jsx("b",{children:t})]}),A.jsxs("span",{children:[A.jsx("small",{children:"Watak"}),A.jsx("b",{children:e.nama})]}),A.jsxs("span",{children:[A.jsx("small",{children:"Misi"}),A.jsx("b",{children:i==="campuran"?"MISI CAMPURAN":`MISI ${n.id} · ${n.kemahiran}`})]})]}),A.jsxs("div",{className:"res-stats",children:[A.jsxs("div",{className:"rs green",children:[A.jsx("i",{children:We.star}),A.jsx("small",{children:"JAWAPAN BETUL"}),A.jsx("b",{children:r})]}),A.jsxs("div",{className:"rs red",children:[A.jsx("i",{children:We.cross}),A.jsx("small",{children:"JAWAPAN SALAH"}),A.jsx("b",{children:s})]}),A.jsxs("div",{className:"rs gold",children:[A.jsx("i",{children:A.jsx(Ic,{size:54})}),A.jsx("small",{children:"JUMLAH SYILING"}),A.jsx("b",{children:o})]}),A.jsxs("div",{className:"rs blue",children:[A.jsx("i",{children:We.star}),A.jsx("small",{children:"MARKAH AKHIR"}),A.jsx("b",{children:a})]})]}),A.jsxs("div",{className:"res-formula",children:["(",r," × 100) + ",o," syiling = ",A.jsxs("b",{children:[a," markah"]})," · Ketepatan ",Math.round(h*1e3)/10,"%"]}),A.jsxs("div",{className:"res-stars",children:[A.jsx("span",{children:"BINTANG PENCAPAIAN:"}),[0,1,2].map(S=>A.jsx("i",{className:S<p?"on":"",style:{animationDelay:.4+S*.35+"s"},children:We.star},S))]})]}),A.jsxs("div",{className:"res-trophy",children:[A.jsx(aC,{}),A.jsx("div",{className:"sign-wood",children:g})]}),A.jsxs("div",{className:"res-btns",children:[A.jsx(tn,{color:"blue",icon:We.home,onClick:f,children:"HALAMAN UTAMA"}),A.jsx(tn,{color:"yellow",icon:We.retry,onClick:c,children:"MAIN LAGI"}),A.jsx(tn,{color:"green",icon:We.play,onClick:u,children:"PILIH MISI"})]})]})}u_(document.getElementById("root")).render(A.jsx(uC,{}));
