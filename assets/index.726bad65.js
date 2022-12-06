(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=n(o);fetch(o.href,i)}})();function Fp(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var w={exports:{}},V={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var to=Symbol.for("react.element"),Ap=Symbol.for("react.portal"),Rp=Symbol.for("react.fragment"),Op=Symbol.for("react.strict_mode"),Mp=Symbol.for("react.profiler"),jp=Symbol.for("react.provider"),Dp=Symbol.for("react.context"),Ip=Symbol.for("react.forward_ref"),Bp=Symbol.for("react.suspense"),Hp=Symbol.for("react.memo"),Up=Symbol.for("react.lazy"),ds=Symbol.iterator;function Vp(e){return e===null||typeof e!="object"?null:(e=ds&&e[ds]||e["@@iterator"],typeof e=="function"?e:null)}var Bc={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Hc=Object.assign,Uc={};function ir(e,t,n){this.props=e,this.context=t,this.refs=Uc,this.updater=n||Bc}ir.prototype.isReactComponent={};ir.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};ir.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Vc(){}Vc.prototype=ir.prototype;function eu(e,t,n){this.props=e,this.context=t,this.refs=Uc,this.updater=n||Bc}var tu=eu.prototype=new Vc;tu.constructor=eu;Hc(tu,ir.prototype);tu.isPureReactComponent=!0;var fs=Array.isArray,Wc=Object.prototype.hasOwnProperty,nu={current:null},Qc={key:!0,ref:!0,__self:!0,__source:!0};function bc(e,t,n){var r,o={},i=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(i=""+t.key),t)Wc.call(t,r)&&!Qc.hasOwnProperty(r)&&(o[r]=t[r]);var a=arguments.length-2;if(a===1)o.children=n;else if(1<a){for(var u=Array(a),s=0;s<a;s++)u[s]=arguments[s+2];o.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)o[r]===void 0&&(o[r]=a[r]);return{$$typeof:to,type:e,key:i,ref:l,props:o,_owner:nu.current}}function Wp(e,t){return{$$typeof:to,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function ru(e){return typeof e=="object"&&e!==null&&e.$$typeof===to}function Qp(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var ps=/\/+/g;function pl(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Qp(""+e.key):t.toString(36)}function Fo(e,t,n,r,o){var i=typeof e;(i==="undefined"||i==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(i){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case to:case Ap:l=!0}}if(l)return l=e,o=o(l),e=r===""?"."+pl(l,0):r,fs(o)?(n="",e!=null&&(n=e.replace(ps,"$&/")+"/"),Fo(o,t,n,"",function(s){return s})):o!=null&&(ru(o)&&(o=Wp(o,n+(!o.key||l&&l.key===o.key?"":(""+o.key).replace(ps,"$&/")+"/")+e)),t.push(o)),1;if(l=0,r=r===""?".":r+":",fs(e))for(var a=0;a<e.length;a++){i=e[a];var u=r+pl(i,a);l+=Fo(i,t,n,u,o)}else if(u=Vp(e),typeof u=="function")for(e=u.call(e),a=0;!(i=e.next()).done;)i=i.value,u=r+pl(i,a++),l+=Fo(i,t,n,u,o);else if(i==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function co(e,t,n){if(e==null)return e;var r=[],o=0;return Fo(e,r,"","",function(i){return t.call(n,i,o++)}),r}function bp(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var He={current:null},Ao={transition:null},Yp={ReactCurrentDispatcher:He,ReactCurrentBatchConfig:Ao,ReactCurrentOwner:nu};V.Children={map:co,forEach:function(e,t,n){co(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return co(e,function(){t++}),t},toArray:function(e){return co(e,function(t){return t})||[]},only:function(e){if(!ru(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};V.Component=ir;V.Fragment=Rp;V.Profiler=Mp;V.PureComponent=eu;V.StrictMode=Op;V.Suspense=Bp;V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Yp;V.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Hc({},e.props),o=e.key,i=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(i=t.ref,l=nu.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Wc.call(t,u)&&!Qc.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var s=0;s<u;s++)a[s]=arguments[s+2];r.children=a}return{$$typeof:to,type:e.type,key:o,ref:i,props:r,_owner:l}};V.createContext=function(e){return e={$$typeof:Dp,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:jp,_context:e},e.Consumer=e};V.createElement=bc;V.createFactory=function(e){var t=bc.bind(null,e);return t.type=e,t};V.createRef=function(){return{current:null}};V.forwardRef=function(e){return{$$typeof:Ip,render:e}};V.isValidElement=ru;V.lazy=function(e){return{$$typeof:Up,_payload:{_status:-1,_result:e},_init:bp}};V.memo=function(e,t){return{$$typeof:Hp,type:e,compare:t===void 0?null:t}};V.startTransition=function(e){var t=Ao.transition;Ao.transition={};try{e()}finally{Ao.transition=t}};V.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};V.useCallback=function(e,t){return He.current.useCallback(e,t)};V.useContext=function(e){return He.current.useContext(e)};V.useDebugValue=function(){};V.useDeferredValue=function(e){return He.current.useDeferredValue(e)};V.useEffect=function(e,t){return He.current.useEffect(e,t)};V.useId=function(){return He.current.useId()};V.useImperativeHandle=function(e,t,n){return He.current.useImperativeHandle(e,t,n)};V.useInsertionEffect=function(e,t){return He.current.useInsertionEffect(e,t)};V.useLayoutEffect=function(e,t){return He.current.useLayoutEffect(e,t)};V.useMemo=function(e,t){return He.current.useMemo(e,t)};V.useReducer=function(e,t,n){return He.current.useReducer(e,t,n)};V.useRef=function(e){return He.current.useRef(e)};V.useState=function(e){return He.current.useState(e)};V.useSyncExternalStore=function(e,t,n){return He.current.useSyncExternalStore(e,t,n)};V.useTransition=function(){return He.current.useTransition()};V.version="18.2.0";(function(e){e.exports=V})(w);const ge=Fp(w.exports);var Yl={},ou={exports:{}},Je={},Yc={exports:{}},Gc={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,j){var M=_.length;_.push(j);e:for(;0<M;){var ee=M-1>>>1,T=_[ee];if(0<o(T,j))_[ee]=j,_[M]=T,M=ee;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var j=_[0],M=_.pop();if(M!==j){_[0]=M;e:for(var ee=0,T=_.length,A=T>>>1;ee<A;){var R=2*(ee+1)-1,I=_[R],y=R+1,W=_[y];if(0>o(I,M))y<T&&0>o(W,I)?(_[ee]=W,_[y]=M,ee=y):(_[ee]=I,_[R]=M,ee=R);else if(y<T&&0>o(W,M))_[ee]=W,_[y]=M,ee=y;else break e}}return j}function o(_,j){var M=_.sortIndex-j.sortIndex;return M!==0?M:_.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var i=performance;e.unstable_now=function(){return i.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],s=[],f=1,p=null,g=3,k=!1,v=!1,S=!1,P=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,c=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(_){for(var j=n(s);j!==null;){if(j.callback===null)r(s);else if(j.startTime<=_)r(s),j.sortIndex=j.expirationTime,t(u,j);else break;j=n(s)}}function x(_){if(S=!1,h(_),!v)if(n(u)!==null)v=!0,te(E);else{var j=n(s);j!==null&&J(x,j.startTime-_)}}function E(_,j){v=!1,S&&(S=!1,d(F),F=-1),k=!0;var M=g;try{for(h(j),p=n(u);p!==null&&(!(p.expirationTime>j)||_&&!re());){var ee=p.callback;if(typeof ee=="function"){p.callback=null,g=p.priorityLevel;var T=ee(p.expirationTime<=j);j=e.unstable_now(),typeof T=="function"?p.callback=T:p===n(u)&&r(u),h(j)}else r(u);p=n(u)}if(p!==null)var A=!0;else{var R=n(s);R!==null&&J(x,R.startTime-j),A=!1}return A}finally{p=null,g=M,k=!1}}var L=!1,N=null,F=-1,U=5,D=-1;function re(){return!(e.unstable_now()-D<U)}function oe(){if(N!==null){var _=e.unstable_now();D=_;var j=!0;try{j=N(!0,_)}finally{j?ue():(L=!1,N=null)}}else L=!1}var ue;if(typeof c=="function")ue=function(){c(oe)};else if(typeof MessageChannel<"u"){var ke=new MessageChannel,ye=ke.port2;ke.port1.onmessage=oe,ue=function(){ye.postMessage(null)}}else ue=function(){P(oe,0)};function te(_){N=_,L||(L=!0,ue())}function J(_,j){F=P(function(){_(e.unstable_now())},j)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){v||k||(v=!0,te(E))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(_){switch(g){case 1:case 2:case 3:var j=3;break;default:j=g}var M=g;g=j;try{return _()}finally{g=M}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,j){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var M=g;g=_;try{return j()}finally{g=M}},e.unstable_scheduleCallback=function(_,j,M){var ee=e.unstable_now();switch(typeof M=="object"&&M!==null?(M=M.delay,M=typeof M=="number"&&0<M?ee+M:ee):M=ee,_){case 1:var T=-1;break;case 2:T=250;break;case 5:T=1073741823;break;case 4:T=1e4;break;default:T=5e3}return T=M+T,_={id:f++,callback:j,priorityLevel:_,startTime:M,expirationTime:T,sortIndex:-1},M>ee?(_.sortIndex=M,t(s,_),n(u)===null&&_===n(s)&&(S?(d(F),F=-1):S=!0,J(x,M-ee))):(_.sortIndex=T,t(u,_),v||k||(v=!0,te(E))),_},e.unstable_shouldYield=re,e.unstable_wrapCallback=function(_){var j=g;return function(){var M=g;g=j;try{return _.apply(this,arguments)}finally{g=M}}}})(Gc);(function(e){e.exports=Gc})(Yc);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kc=w.exports,Ze=Yc.exports;function C(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Xc=new Set,Mr={};function Pn(e,t){Xn(e,t),Xn(e+"Capture",t)}function Xn(e,t){for(Mr[e]=t,e=0;e<t.length;e++)Xc.add(t[e])}var Rt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Gl=Object.prototype.hasOwnProperty,Gp=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,hs={},ms={};function Kp(e){return Gl.call(ms,e)?!0:Gl.call(hs,e)?!1:Gp.test(e)?ms[e]=!0:(hs[e]=!0,!1)}function Xp(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function qp(e,t,n,r){if(t===null||typeof t>"u"||Xp(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Ue(e,t,n,r,o,i,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=l}var Fe={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Fe[e]=new Ue(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Fe[t]=new Ue(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Fe[e]=new Ue(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Fe[e]=new Ue(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Fe[e]=new Ue(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Fe[e]=new Ue(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Fe[e]=new Ue(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Fe[e]=new Ue(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Fe[e]=new Ue(e,5,!1,e.toLowerCase(),null,!1,!1)});var iu=/[\-:]([a-z])/g;function lu(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(iu,lu);Fe[t]=new Ue(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(iu,lu);Fe[t]=new Ue(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(iu,lu);Fe[t]=new Ue(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Fe[e]=new Ue(e,1,!1,e.toLowerCase(),null,!1,!1)});Fe.xlinkHref=new Ue("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Fe[e]=new Ue(e,1,!1,e.toLowerCase(),null,!0,!0)});function au(e,t,n,r){var o=Fe.hasOwnProperty(t)?Fe[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(qp(t,n,o,r)&&(n=null),r||o===null?Kp(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Dt=Kc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fo=Symbol.for("react.element"),Nn=Symbol.for("react.portal"),Ln=Symbol.for("react.fragment"),uu=Symbol.for("react.strict_mode"),Kl=Symbol.for("react.profiler"),qc=Symbol.for("react.provider"),Zc=Symbol.for("react.context"),su=Symbol.for("react.forward_ref"),Xl=Symbol.for("react.suspense"),ql=Symbol.for("react.suspense_list"),cu=Symbol.for("react.memo"),Wt=Symbol.for("react.lazy"),Jc=Symbol.for("react.offscreen"),gs=Symbol.iterator;function fr(e){return e===null||typeof e!="object"?null:(e=gs&&e[gs]||e["@@iterator"],typeof e=="function"?e:null)}var de=Object.assign,hl;function kr(e){if(hl===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);hl=t&&t[1]||""}return`
`+hl+e}var ml=!1;function gl(e,t){if(!e||ml)return"";ml=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(s){var r=s}Reflect.construct(e,[],t)}else{try{t.call()}catch(s){r=s}e.call(t.prototype)}else{try{throw Error()}catch(s){r=s}e()}}catch(s){if(s&&r&&typeof s.stack=="string"){for(var o=s.stack.split(`
`),i=r.stack.split(`
`),l=o.length-1,a=i.length-1;1<=l&&0<=a&&o[l]!==i[a];)a--;for(;1<=l&&0<=a;l--,a--)if(o[l]!==i[a]){if(l!==1||a!==1)do if(l--,a--,0>a||o[l]!==i[a]){var u=`
`+o[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{ml=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?kr(e):""}function Zp(e){switch(e.tag){case 5:return kr(e.type);case 16:return kr("Lazy");case 13:return kr("Suspense");case 19:return kr("SuspenseList");case 0:case 2:case 15:return e=gl(e.type,!1),e;case 11:return e=gl(e.type.render,!1),e;case 1:return e=gl(e.type,!0),e;default:return""}}function Zl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case Ln:return"Fragment";case Nn:return"Portal";case Kl:return"Profiler";case uu:return"StrictMode";case Xl:return"Suspense";case ql:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zc:return(e.displayName||"Context")+".Consumer";case qc:return(e._context.displayName||"Context")+".Provider";case su:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case cu:return t=e.displayName||null,t!==null?t:Zl(e.type)||"Memo";case Wt:t=e._payload,e=e._init;try{return Zl(e(t))}catch{}}return null}function Jp(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Zl(t);case 8:return t===uu?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function an(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function ed(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function e0(e){var t=ed(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(l){r=""+l,i.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function po(e){e._valueTracker||(e._valueTracker=e0(e))}function td(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=ed(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Qo(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Jl(e,t){var n=t.checked;return de({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function vs(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=an(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function nd(e,t){t=t.checked,t!=null&&au(e,"checked",t,!1)}function ea(e,t){nd(e,t);var n=an(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?ta(e,t.type,n):t.hasOwnProperty("defaultValue")&&ta(e,t.type,an(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ys(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function ta(e,t,n){(t!=="number"||Qo(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Er=Array.isArray;function Vn(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+an(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function na(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(C(91));return de({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function xs(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(C(92));if(Er(n)){if(1<n.length)throw Error(C(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:an(n)}}function rd(e,t){var n=an(t.value),r=an(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function ws(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function od(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function ra(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?od(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var ho,id=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(ho=ho||document.createElement("div"),ho.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ho.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function jr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Pr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},t0=["Webkit","ms","Moz","O"];Object.keys(Pr).forEach(function(e){t0.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Pr[t]=Pr[e]})});function ld(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Pr.hasOwnProperty(e)&&Pr[e]?(""+t).trim():t+"px"}function ad(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=ld(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var n0=de({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function oa(e,t){if(t){if(n0[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(C(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(C(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(C(61))}if(t.style!=null&&typeof t.style!="object")throw Error(C(62))}}function ia(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var la=null;function du(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var aa=null,Wn=null,Qn=null;function Ss(e){if(e=oo(e)){if(typeof aa!="function")throw Error(C(280));var t=e.stateNode;t&&(t=_i(t),aa(e.stateNode,e.type,t))}}function ud(e){Wn?Qn?Qn.push(e):Qn=[e]:Wn=e}function sd(){if(Wn){var e=Wn,t=Qn;if(Qn=Wn=null,Ss(e),t)for(e=0;e<t.length;e++)Ss(t[e])}}function cd(e,t){return e(t)}function dd(){}var vl=!1;function fd(e,t,n){if(vl)return e(t,n);vl=!0;try{return cd(e,t,n)}finally{vl=!1,(Wn!==null||Qn!==null)&&(dd(),sd())}}function Dr(e,t){var n=e.stateNode;if(n===null)return null;var r=_i(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(C(231,t,typeof n));return n}var ua=!1;if(Rt)try{var pr={};Object.defineProperty(pr,"passive",{get:function(){ua=!0}}),window.addEventListener("test",pr,pr),window.removeEventListener("test",pr,pr)}catch{ua=!1}function r0(e,t,n,r,o,i,l,a,u){var s=Array.prototype.slice.call(arguments,3);try{t.apply(n,s)}catch(f){this.onError(f)}}var zr=!1,bo=null,Yo=!1,sa=null,o0={onError:function(e){zr=!0,bo=e}};function i0(e,t,n,r,o,i,l,a,u){zr=!1,bo=null,r0.apply(o0,arguments)}function l0(e,t,n,r,o,i,l,a,u){if(i0.apply(this,arguments),zr){if(zr){var s=bo;zr=!1,bo=null}else throw Error(C(198));Yo||(Yo=!0,sa=s)}}function zn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function pd(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function ks(e){if(zn(e)!==e)throw Error(C(188))}function a0(e){var t=e.alternate;if(!t){if(t=zn(e),t===null)throw Error(C(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var i=o.alternate;if(i===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===i.child){for(i=o.child;i;){if(i===n)return ks(o),e;if(i===r)return ks(o),t;i=i.sibling}throw Error(C(188))}if(n.return!==r.return)n=o,r=i;else{for(var l=!1,a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l){for(a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l)throw Error(C(189))}}if(n.alternate!==r)throw Error(C(190))}if(n.tag!==3)throw Error(C(188));return n.stateNode.current===n?e:t}function hd(e){return e=a0(e),e!==null?md(e):null}function md(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=md(e);if(t!==null)return t;e=e.sibling}return null}var gd=Ze.unstable_scheduleCallback,Es=Ze.unstable_cancelCallback,u0=Ze.unstable_shouldYield,s0=Ze.unstable_requestPaint,me=Ze.unstable_now,c0=Ze.unstable_getCurrentPriorityLevel,fu=Ze.unstable_ImmediatePriority,vd=Ze.unstable_UserBlockingPriority,Go=Ze.unstable_NormalPriority,d0=Ze.unstable_LowPriority,yd=Ze.unstable_IdlePriority,Si=null,Ct=null;function f0(e){if(Ct&&typeof Ct.onCommitFiberRoot=="function")try{Ct.onCommitFiberRoot(Si,e,void 0,(e.current.flags&128)===128)}catch{}}var vt=Math.clz32?Math.clz32:m0,p0=Math.log,h0=Math.LN2;function m0(e){return e>>>=0,e===0?32:31-(p0(e)/h0|0)|0}var mo=64,go=4194304;function Cr(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ko(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,i=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~o;a!==0?r=Cr(a):(i&=l,i!==0&&(r=Cr(i)))}else l=n&~o,l!==0?r=Cr(l):i!==0&&(r=Cr(i));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,i=t&-t,o>=i||o===16&&(i&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-vt(t),o=1<<n,r|=e[n],t&=~o;return r}function g0(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function v0(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,i=e.pendingLanes;0<i;){var l=31-vt(i),a=1<<l,u=o[l];u===-1?((a&n)===0||(a&r)!==0)&&(o[l]=g0(a,t)):u<=t&&(e.expiredLanes|=a),i&=~a}}function ca(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function xd(){var e=mo;return mo<<=1,(mo&4194240)===0&&(mo=64),e}function yl(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function no(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-vt(t),e[t]=n}function y0(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-vt(n),i=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~i}}function pu(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-vt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var X=0;function wd(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var Sd,hu,kd,Ed,Cd,da=!1,vo=[],Xt=null,qt=null,Zt=null,Ir=new Map,Br=new Map,bt=[],x0="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Cs(e,t){switch(e){case"focusin":case"focusout":Xt=null;break;case"dragenter":case"dragleave":qt=null;break;case"mouseover":case"mouseout":Zt=null;break;case"pointerover":case"pointerout":Ir.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Br.delete(t.pointerId)}}function hr(e,t,n,r,o,i){return e===null||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[o]},t!==null&&(t=oo(t),t!==null&&hu(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function w0(e,t,n,r,o){switch(t){case"focusin":return Xt=hr(Xt,e,t,n,r,o),!0;case"dragenter":return qt=hr(qt,e,t,n,r,o),!0;case"mouseover":return Zt=hr(Zt,e,t,n,r,o),!0;case"pointerover":var i=o.pointerId;return Ir.set(i,hr(Ir.get(i)||null,e,t,n,r,o)),!0;case"gotpointercapture":return i=o.pointerId,Br.set(i,hr(Br.get(i)||null,e,t,n,r,o)),!0}return!1}function _d(e){var t=mn(e.target);if(t!==null){var n=zn(t);if(n!==null){if(t=n.tag,t===13){if(t=pd(n),t!==null){e.blockedOn=t,Cd(e.priority,function(){kd(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Ro(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=fa(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);la=r,n.target.dispatchEvent(r),la=null}else return t=oo(n),t!==null&&hu(t),e.blockedOn=n,!1;t.shift()}return!0}function _s(e,t,n){Ro(e)&&n.delete(t)}function S0(){da=!1,Xt!==null&&Ro(Xt)&&(Xt=null),qt!==null&&Ro(qt)&&(qt=null),Zt!==null&&Ro(Zt)&&(Zt=null),Ir.forEach(_s),Br.forEach(_s)}function mr(e,t){e.blockedOn===t&&(e.blockedOn=null,da||(da=!0,Ze.unstable_scheduleCallback(Ze.unstable_NormalPriority,S0)))}function Hr(e){function t(o){return mr(o,e)}if(0<vo.length){mr(vo[0],e);for(var n=1;n<vo.length;n++){var r=vo[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Xt!==null&&mr(Xt,e),qt!==null&&mr(qt,e),Zt!==null&&mr(Zt,e),Ir.forEach(t),Br.forEach(t),n=0;n<bt.length;n++)r=bt[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<bt.length&&(n=bt[0],n.blockedOn===null);)_d(n),n.blockedOn===null&&bt.shift()}var bn=Dt.ReactCurrentBatchConfig,Xo=!0;function k0(e,t,n,r){var o=X,i=bn.transition;bn.transition=null;try{X=1,mu(e,t,n,r)}finally{X=o,bn.transition=i}}function E0(e,t,n,r){var o=X,i=bn.transition;bn.transition=null;try{X=4,mu(e,t,n,r)}finally{X=o,bn.transition=i}}function mu(e,t,n,r){if(Xo){var o=fa(e,t,n,r);if(o===null)$l(e,t,r,qo,n),Cs(e,r);else if(w0(o,e,t,n,r))r.stopPropagation();else if(Cs(e,r),t&4&&-1<x0.indexOf(e)){for(;o!==null;){var i=oo(o);if(i!==null&&Sd(i),i=fa(e,t,n,r),i===null&&$l(e,t,r,qo,n),i===o)break;o=i}o!==null&&r.stopPropagation()}else $l(e,t,r,null,n)}}var qo=null;function fa(e,t,n,r){if(qo=null,e=du(r),e=mn(e),e!==null)if(t=zn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=pd(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return qo=e,null}function Pd(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(c0()){case fu:return 1;case vd:return 4;case Go:case d0:return 16;case yd:return 536870912;default:return 16}default:return 16}}var Gt=null,gu=null,Oo=null;function zd(){if(Oo)return Oo;var e,t=gu,n=t.length,r,o="value"in Gt?Gt.value:Gt.textContent,i=o.length;for(e=0;e<n&&t[e]===o[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===o[i-r];r++);return Oo=o.slice(e,1<r?1-r:void 0)}function Mo(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function yo(){return!0}function Ps(){return!1}function et(e){function t(n,r,o,i,l){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=i,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(i):i[a]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?yo:Ps,this.isPropagationStopped=Ps,this}return de(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=yo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=yo)},persist:function(){},isPersistent:yo}),t}var lr={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},vu=et(lr),ro=de({},lr,{view:0,detail:0}),C0=et(ro),xl,wl,gr,ki=de({},ro,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:yu,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==gr&&(gr&&e.type==="mousemove"?(xl=e.screenX-gr.screenX,wl=e.screenY-gr.screenY):wl=xl=0,gr=e),xl)},movementY:function(e){return"movementY"in e?e.movementY:wl}}),zs=et(ki),_0=de({},ki,{dataTransfer:0}),P0=et(_0),z0=de({},ro,{relatedTarget:0}),Sl=et(z0),$0=de({},lr,{animationName:0,elapsedTime:0,pseudoElement:0}),T0=et($0),N0=de({},lr,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),L0=et(N0),F0=de({},lr,{data:0}),$s=et(F0),A0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},R0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},O0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function M0(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=O0[e])?!!t[e]:!1}function yu(){return M0}var j0=de({},ro,{key:function(e){if(e.key){var t=A0[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Mo(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?R0[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:yu,charCode:function(e){return e.type==="keypress"?Mo(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Mo(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),D0=et(j0),I0=de({},ki,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ts=et(I0),B0=de({},ro,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:yu}),H0=et(B0),U0=de({},lr,{propertyName:0,elapsedTime:0,pseudoElement:0}),V0=et(U0),W0=de({},ki,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Q0=et(W0),b0=[9,13,27,32],xu=Rt&&"CompositionEvent"in window,$r=null;Rt&&"documentMode"in document&&($r=document.documentMode);var Y0=Rt&&"TextEvent"in window&&!$r,$d=Rt&&(!xu||$r&&8<$r&&11>=$r),Ns=String.fromCharCode(32),Ls=!1;function Td(e,t){switch(e){case"keyup":return b0.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nd(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var Fn=!1;function G0(e,t){switch(e){case"compositionend":return Nd(t);case"keypress":return t.which!==32?null:(Ls=!0,Ns);case"textInput":return e=t.data,e===Ns&&Ls?null:e;default:return null}}function K0(e,t){if(Fn)return e==="compositionend"||!xu&&Td(e,t)?(e=zd(),Oo=gu=Gt=null,Fn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return $d&&t.locale!=="ko"?null:t.data;default:return null}}var X0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fs(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!X0[e.type]:t==="textarea"}function Ld(e,t,n,r){ud(r),t=Zo(t,"onChange"),0<t.length&&(n=new vu("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Tr=null,Ur=null;function q0(e){Ud(e,0)}function Ei(e){var t=On(e);if(td(t))return e}function Z0(e,t){if(e==="change")return t}var Fd=!1;if(Rt){var kl;if(Rt){var El="oninput"in document;if(!El){var As=document.createElement("div");As.setAttribute("oninput","return;"),El=typeof As.oninput=="function"}kl=El}else kl=!1;Fd=kl&&(!document.documentMode||9<document.documentMode)}function Rs(){Tr&&(Tr.detachEvent("onpropertychange",Ad),Ur=Tr=null)}function Ad(e){if(e.propertyName==="value"&&Ei(Ur)){var t=[];Ld(t,Ur,e,du(e)),fd(q0,t)}}function J0(e,t,n){e==="focusin"?(Rs(),Tr=t,Ur=n,Tr.attachEvent("onpropertychange",Ad)):e==="focusout"&&Rs()}function eh(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ei(Ur)}function th(e,t){if(e==="click")return Ei(t)}function nh(e,t){if(e==="input"||e==="change")return Ei(t)}function rh(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var xt=typeof Object.is=="function"?Object.is:rh;function Vr(e,t){if(xt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Gl.call(t,o)||!xt(e[o],t[o]))return!1}return!0}function Os(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Ms(e,t){var n=Os(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Os(n)}}function Rd(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Rd(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function Od(){for(var e=window,t=Qo();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Qo(e.document)}return t}function wu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function oh(e){var t=Od(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Rd(n.ownerDocument.documentElement,n)){if(r!==null&&wu(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,i=Math.min(r.start,o);r=r.end===void 0?i:Math.min(r.end,o),!e.extend&&i>r&&(o=r,r=i,i=o),o=Ms(n,i);var l=Ms(n,r);o&&l&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var ih=Rt&&"documentMode"in document&&11>=document.documentMode,An=null,pa=null,Nr=null,ha=!1;function js(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ha||An==null||An!==Qo(r)||(r=An,"selectionStart"in r&&wu(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Nr&&Vr(Nr,r)||(Nr=r,r=Zo(pa,"onSelect"),0<r.length&&(t=new vu("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=An)))}function xo(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var Rn={animationend:xo("Animation","AnimationEnd"),animationiteration:xo("Animation","AnimationIteration"),animationstart:xo("Animation","AnimationStart"),transitionend:xo("Transition","TransitionEnd")},Cl={},Md={};Rt&&(Md=document.createElement("div").style,"AnimationEvent"in window||(delete Rn.animationend.animation,delete Rn.animationiteration.animation,delete Rn.animationstart.animation),"TransitionEvent"in window||delete Rn.transitionend.transition);function Ci(e){if(Cl[e])return Cl[e];if(!Rn[e])return e;var t=Rn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Md)return Cl[e]=t[n];return e}var jd=Ci("animationend"),Dd=Ci("animationiteration"),Id=Ci("animationstart"),Bd=Ci("transitionend"),Hd=new Map,Ds="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function sn(e,t){Hd.set(e,t),Pn(t,[e])}for(var _l=0;_l<Ds.length;_l++){var Pl=Ds[_l],lh=Pl.toLowerCase(),ah=Pl[0].toUpperCase()+Pl.slice(1);sn(lh,"on"+ah)}sn(jd,"onAnimationEnd");sn(Dd,"onAnimationIteration");sn(Id,"onAnimationStart");sn("dblclick","onDoubleClick");sn("focusin","onFocus");sn("focusout","onBlur");sn(Bd,"onTransitionEnd");Xn("onMouseEnter",["mouseout","mouseover"]);Xn("onMouseLeave",["mouseout","mouseover"]);Xn("onPointerEnter",["pointerout","pointerover"]);Xn("onPointerLeave",["pointerout","pointerover"]);Pn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Pn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Pn("onBeforeInput",["compositionend","keypress","textInput","paste"]);Pn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Pn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var _r="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uh=new Set("cancel close invalid load scroll toggle".split(" ").concat(_r));function Is(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,l0(r,t,void 0,e),e.currentTarget=null}function Ud(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,s=a.currentTarget;if(a=a.listener,u!==i&&o.isPropagationStopped())break e;Is(o,a,s),i=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,s=a.currentTarget,a=a.listener,u!==i&&o.isPropagationStopped())break e;Is(o,a,s),i=u}}}if(Yo)throw e=sa,Yo=!1,sa=null,e}function ie(e,t){var n=t[xa];n===void 0&&(n=t[xa]=new Set);var r=e+"__bubble";n.has(r)||(Vd(t,e,2,!1),n.add(r))}function zl(e,t,n){var r=0;t&&(r|=4),Vd(n,e,r,t)}var wo="_reactListening"+Math.random().toString(36).slice(2);function Wr(e){if(!e[wo]){e[wo]=!0,Xc.forEach(function(n){n!=="selectionchange"&&(uh.has(n)||zl(n,!1,e),zl(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[wo]||(t[wo]=!0,zl("selectionchange",!1,t))}}function Vd(e,t,n,r){switch(Pd(t)){case 1:var o=k0;break;case 4:o=E0;break;default:o=mu}n=o.bind(null,t,n,e),o=void 0,!ua||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function $l(e,t,n,r,o){var i=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===o||a.nodeType===8&&a.parentNode===o)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===o||u.nodeType===8&&u.parentNode===o))return;l=l.return}for(;a!==null;){if(l=mn(a),l===null)return;if(u=l.tag,u===5||u===6){r=i=l;continue e}a=a.parentNode}}r=r.return}fd(function(){var s=i,f=du(n),p=[];e:{var g=Hd.get(e);if(g!==void 0){var k=vu,v=e;switch(e){case"keypress":if(Mo(n)===0)break e;case"keydown":case"keyup":k=D0;break;case"focusin":v="focus",k=Sl;break;case"focusout":v="blur",k=Sl;break;case"beforeblur":case"afterblur":k=Sl;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=zs;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=P0;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=H0;break;case jd:case Dd:case Id:k=T0;break;case Bd:k=V0;break;case"scroll":k=C0;break;case"wheel":k=Q0;break;case"copy":case"cut":case"paste":k=L0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=Ts}var S=(t&4)!==0,P=!S&&e==="scroll",d=S?g!==null?g+"Capture":null:g;S=[];for(var c=s,h;c!==null;){h=c;var x=h.stateNode;if(h.tag===5&&x!==null&&(h=x,d!==null&&(x=Dr(c,d),x!=null&&S.push(Qr(c,x,h)))),P)break;c=c.return}0<S.length&&(g=new k(g,v,null,n,f),p.push({event:g,listeners:S}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",g&&n!==la&&(v=n.relatedTarget||n.fromElement)&&(mn(v)||v[Ot]))break e;if((k||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,k?(v=n.relatedTarget||n.toElement,k=s,v=v?mn(v):null,v!==null&&(P=zn(v),v!==P||v.tag!==5&&v.tag!==6)&&(v=null)):(k=null,v=s),k!==v)){if(S=zs,x="onMouseLeave",d="onMouseEnter",c="mouse",(e==="pointerout"||e==="pointerover")&&(S=Ts,x="onPointerLeave",d="onPointerEnter",c="pointer"),P=k==null?g:On(k),h=v==null?g:On(v),g=new S(x,c+"leave",k,n,f),g.target=P,g.relatedTarget=h,x=null,mn(f)===s&&(S=new S(d,c+"enter",v,n,f),S.target=h,S.relatedTarget=P,x=S),P=x,k&&v)t:{for(S=k,d=v,c=0,h=S;h;h=$n(h))c++;for(h=0,x=d;x;x=$n(x))h++;for(;0<c-h;)S=$n(S),c--;for(;0<h-c;)d=$n(d),h--;for(;c--;){if(S===d||d!==null&&S===d.alternate)break t;S=$n(S),d=$n(d)}S=null}else S=null;k!==null&&Bs(p,g,k,S,!1),v!==null&&P!==null&&Bs(p,P,v,S,!0)}}e:{if(g=s?On(s):window,k=g.nodeName&&g.nodeName.toLowerCase(),k==="select"||k==="input"&&g.type==="file")var E=Z0;else if(Fs(g))if(Fd)E=nh;else{E=eh;var L=J0}else(k=g.nodeName)&&k.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(E=th);if(E&&(E=E(e,s))){Ld(p,E,n,f);break e}L&&L(e,g,s),e==="focusout"&&(L=g._wrapperState)&&L.controlled&&g.type==="number"&&ta(g,"number",g.value)}switch(L=s?On(s):window,e){case"focusin":(Fs(L)||L.contentEditable==="true")&&(An=L,pa=s,Nr=null);break;case"focusout":Nr=pa=An=null;break;case"mousedown":ha=!0;break;case"contextmenu":case"mouseup":case"dragend":ha=!1,js(p,n,f);break;case"selectionchange":if(ih)break;case"keydown":case"keyup":js(p,n,f)}var N;if(xu)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else Fn?Td(e,n)&&(F="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&($d&&n.locale!=="ko"&&(Fn||F!=="onCompositionStart"?F==="onCompositionEnd"&&Fn&&(N=zd()):(Gt=f,gu="value"in Gt?Gt.value:Gt.textContent,Fn=!0)),L=Zo(s,F),0<L.length&&(F=new $s(F,e,null,n,f),p.push({event:F,listeners:L}),N?F.data=N:(N=Nd(n),N!==null&&(F.data=N)))),(N=Y0?G0(e,n):K0(e,n))&&(s=Zo(s,"onBeforeInput"),0<s.length&&(f=new $s("onBeforeInput","beforeinput",null,n,f),p.push({event:f,listeners:s}),f.data=N))}Ud(p,t)})}function Qr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Zo(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,i=o.stateNode;o.tag===5&&i!==null&&(o=i,i=Dr(e,n),i!=null&&r.unshift(Qr(e,i,o)),i=Dr(e,t),i!=null&&r.push(Qr(e,i,o))),e=e.return}return r}function $n(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Bs(e,t,n,r,o){for(var i=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,s=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&s!==null&&(a=s,o?(u=Dr(n,i),u!=null&&l.unshift(Qr(n,u,a))):o||(u=Dr(n,i),u!=null&&l.push(Qr(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var sh=/\r\n?/g,ch=/\u0000|\uFFFD/g;function Hs(e){return(typeof e=="string"?e:""+e).replace(sh,`
`).replace(ch,"")}function So(e,t,n){if(t=Hs(t),Hs(e)!==t&&n)throw Error(C(425))}function Jo(){}var ma=null,ga=null;function va(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var ya=typeof setTimeout=="function"?setTimeout:void 0,dh=typeof clearTimeout=="function"?clearTimeout:void 0,Us=typeof Promise=="function"?Promise:void 0,fh=typeof queueMicrotask=="function"?queueMicrotask:typeof Us<"u"?function(e){return Us.resolve(null).then(e).catch(ph)}:ya;function ph(e){setTimeout(function(){throw e})}function Tl(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Hr(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Hr(t)}function Jt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Vs(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var ar=Math.random().toString(36).slice(2),Et="__reactFiber$"+ar,br="__reactProps$"+ar,Ot="__reactContainer$"+ar,xa="__reactEvents$"+ar,hh="__reactListeners$"+ar,mh="__reactHandles$"+ar;function mn(e){var t=e[Et];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Ot]||n[Et]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Vs(e);e!==null;){if(n=e[Et])return n;e=Vs(e)}return t}e=n,n=e.parentNode}return null}function oo(e){return e=e[Et]||e[Ot],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function On(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(C(33))}function _i(e){return e[br]||null}var wa=[],Mn=-1;function cn(e){return{current:e}}function le(e){0>Mn||(e.current=wa[Mn],wa[Mn]=null,Mn--)}function ne(e,t){Mn++,wa[Mn]=e.current,e.current=t}var un={},De=cn(un),be=cn(!1),wn=un;function qn(e,t){var n=e.type.contextTypes;if(!n)return un;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},i;for(i in n)o[i]=t[i];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function Ye(e){return e=e.childContextTypes,e!=null}function ei(){le(be),le(De)}function Ws(e,t,n){if(De.current!==un)throw Error(C(168));ne(De,t),ne(be,n)}function Wd(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(C(108,Jp(e)||"Unknown",o));return de({},n,r)}function ti(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||un,wn=De.current,ne(De,e),ne(be,be.current),!0}function Qs(e,t,n){var r=e.stateNode;if(!r)throw Error(C(169));n?(e=Wd(e,t,wn),r.__reactInternalMemoizedMergedChildContext=e,le(be),le(De),ne(De,e)):le(be),ne(be,n)}var zt=null,Pi=!1,Nl=!1;function Qd(e){zt===null?zt=[e]:zt.push(e)}function gh(e){Pi=!0,Qd(e)}function dn(){if(!Nl&&zt!==null){Nl=!0;var e=0,t=X;try{var n=zt;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}zt=null,Pi=!1}catch(o){throw zt!==null&&(zt=zt.slice(e+1)),gd(fu,dn),o}finally{X=t,Nl=!1}}return null}var jn=[],Dn=0,ni=null,ri=0,rt=[],ot=0,Sn=null,$t=1,Tt="";function pn(e,t){jn[Dn++]=ri,jn[Dn++]=ni,ni=e,ri=t}function bd(e,t,n){rt[ot++]=$t,rt[ot++]=Tt,rt[ot++]=Sn,Sn=e;var r=$t;e=Tt;var o=32-vt(r)-1;r&=~(1<<o),n+=1;var i=32-vt(t)+o;if(30<i){var l=o-o%5;i=(r&(1<<l)-1).toString(32),r>>=l,o-=l,$t=1<<32-vt(t)+o|n<<o|r,Tt=i+e}else $t=1<<i|n<<o|r,Tt=e}function Su(e){e.return!==null&&(pn(e,1),bd(e,1,0))}function ku(e){for(;e===ni;)ni=jn[--Dn],jn[Dn]=null,ri=jn[--Dn],jn[Dn]=null;for(;e===Sn;)Sn=rt[--ot],rt[ot]=null,Tt=rt[--ot],rt[ot]=null,$t=rt[--ot],rt[ot]=null}var qe=null,Xe=null,ae=!1,gt=null;function Yd(e,t){var n=it(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function bs(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,qe=e,Xe=Jt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,qe=e,Xe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Sn!==null?{id:$t,overflow:Tt}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=it(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,qe=e,Xe=null,!0):!1;default:return!1}}function Sa(e){return(e.mode&1)!==0&&(e.flags&128)===0}function ka(e){if(ae){var t=Xe;if(t){var n=t;if(!bs(e,t)){if(Sa(e))throw Error(C(418));t=Jt(n.nextSibling);var r=qe;t&&bs(e,t)?Yd(r,n):(e.flags=e.flags&-4097|2,ae=!1,qe=e)}}else{if(Sa(e))throw Error(C(418));e.flags=e.flags&-4097|2,ae=!1,qe=e}}}function Ys(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;qe=e}function ko(e){if(e!==qe)return!1;if(!ae)return Ys(e),ae=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!va(e.type,e.memoizedProps)),t&&(t=Xe)){if(Sa(e))throw Gd(),Error(C(418));for(;t;)Yd(e,t),t=Jt(t.nextSibling)}if(Ys(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(C(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Xe=Jt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Xe=null}}else Xe=qe?Jt(e.stateNode.nextSibling):null;return!0}function Gd(){for(var e=Xe;e;)e=Jt(e.nextSibling)}function Zn(){Xe=qe=null,ae=!1}function Eu(e){gt===null?gt=[e]:gt.push(e)}var vh=Dt.ReactCurrentBatchConfig;function ht(e,t){if(e&&e.defaultProps){t=de({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var oi=cn(null),ii=null,In=null,Cu=null;function _u(){Cu=In=ii=null}function Pu(e){var t=oi.current;le(oi),e._currentValue=t}function Ea(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Yn(e,t){ii=e,Cu=In=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(Qe=!0),e.firstContext=null)}function at(e){var t=e._currentValue;if(Cu!==e)if(e={context:e,memoizedValue:t,next:null},In===null){if(ii===null)throw Error(C(308));In=e,ii.dependencies={lanes:0,firstContext:e}}else In=In.next=e;return t}var gn=null;function zu(e){gn===null?gn=[e]:gn.push(e)}function Kd(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,zu(t)):(n.next=o.next,o.next=n),t.interleaved=n,Mt(e,r)}function Mt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Qt=!1;function $u(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Xd(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Ft(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function en(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(Q&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,Mt(e,n)}return o=r.interleaved,o===null?(t.next=t,zu(r)):(t.next=o.next,o.next=t),r.interleaved=t,Mt(e,n)}function jo(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pu(e,n)}}function Gs(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,i=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};i===null?o=i=l:i=i.next=l,n=n.next}while(n!==null);i===null?o=i=t:i=i.next=t}else o=i=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:i,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function li(e,t,n,r){var o=e.updateQueue;Qt=!1;var i=o.firstBaseUpdate,l=o.lastBaseUpdate,a=o.shared.pending;if(a!==null){o.shared.pending=null;var u=a,s=u.next;u.next=null,l===null?i=s:l.next=s,l=u;var f=e.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==l&&(a===null?f.firstBaseUpdate=s:a.next=s,f.lastBaseUpdate=u))}if(i!==null){var p=o.baseState;l=0,f=s=u=null,a=i;do{var g=a.lane,k=a.eventTime;if((r&g)===g){f!==null&&(f=f.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=e,S=a;switch(g=t,k=n,S.tag){case 1:if(v=S.payload,typeof v=="function"){p=v.call(k,p,g);break e}p=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=S.payload,g=typeof v=="function"?v.call(k,p,g):v,g==null)break e;p=de({},p,g);break e;case 2:Qt=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,g=o.effects,g===null?o.effects=[a]:g.push(a))}else k={eventTime:k,lane:g,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(s=f=k,u=p):f=f.next=k,l|=g;if(a=a.next,a===null){if(a=o.shared.pending,a===null)break;g=a,a=g.next,g.next=null,o.lastBaseUpdate=g,o.shared.pending=null}}while(1);if(f===null&&(u=p),o.baseState=u,o.firstBaseUpdate=s,o.lastBaseUpdate=f,t=o.shared.interleaved,t!==null){o=t;do l|=o.lane,o=o.next;while(o!==t)}else i===null&&(o.shared.lanes=0);En|=l,e.lanes=l,e.memoizedState=p}}function Ks(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(C(191,o));o.call(r)}}}var qd=new Kc.Component().refs;function Ca(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:de({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var zi={isMounted:function(e){return(e=e._reactInternals)?zn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Be(),o=nn(e),i=Ft(r,o);i.payload=t,n!=null&&(i.callback=n),t=en(e,i,o),t!==null&&(yt(t,e,o,r),jo(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Be(),o=nn(e),i=Ft(r,o);i.tag=1,i.payload=t,n!=null&&(i.callback=n),t=en(e,i,o),t!==null&&(yt(t,e,o,r),jo(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Be(),r=nn(e),o=Ft(n,r);o.tag=2,t!=null&&(o.callback=t),t=en(e,o,r),t!==null&&(yt(t,e,r,n),jo(t,e,r))}};function Xs(e,t,n,r,o,i,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,i,l):t.prototype&&t.prototype.isPureReactComponent?!Vr(n,r)||!Vr(o,i):!0}function Zd(e,t,n){var r=!1,o=un,i=t.contextType;return typeof i=="object"&&i!==null?i=at(i):(o=Ye(t)?wn:De.current,r=t.contextTypes,i=(r=r!=null)?qn(e,o):un),t=new t(n,i),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=zi,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=i),t}function qs(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&zi.enqueueReplaceState(t,t.state,null)}function _a(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=qd,$u(e);var i=t.contextType;typeof i=="object"&&i!==null?o.context=at(i):(i=Ye(t)?wn:De.current,o.context=qn(e,i)),o.state=e.memoizedState,i=t.getDerivedStateFromProps,typeof i=="function"&&(Ca(e,t,i,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&zi.enqueueReplaceState(o,o.state,null),li(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function vr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(C(309));var r=n.stateNode}if(!r)throw Error(C(147,e));var o=r,i=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===i?t.ref:(t=function(l){var a=o.refs;a===qd&&(a=o.refs={}),l===null?delete a[i]:a[i]=l},t._stringRef=i,t)}if(typeof e!="string")throw Error(C(284));if(!n._owner)throw Error(C(290,e))}return e}function Eo(e,t){throw e=Object.prototype.toString.call(t),Error(C(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function Zs(e){var t=e._init;return t(e._payload)}function Jd(e){function t(d,c){if(e){var h=d.deletions;h===null?(d.deletions=[c],d.flags|=16):h.push(c)}}function n(d,c){if(!e)return null;for(;c!==null;)t(d,c),c=c.sibling;return null}function r(d,c){for(d=new Map;c!==null;)c.key!==null?d.set(c.key,c):d.set(c.index,c),c=c.sibling;return d}function o(d,c){return d=rn(d,c),d.index=0,d.sibling=null,d}function i(d,c,h){return d.index=h,e?(h=d.alternate,h!==null?(h=h.index,h<c?(d.flags|=2,c):h):(d.flags|=2,c)):(d.flags|=1048576,c)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,c,h,x){return c===null||c.tag!==6?(c=jl(h,d.mode,x),c.return=d,c):(c=o(c,h),c.return=d,c)}function u(d,c,h,x){var E=h.type;return E===Ln?f(d,c,h.props.children,x,h.key):c!==null&&(c.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Wt&&Zs(E)===c.type)?(x=o(c,h.props),x.ref=vr(d,c,h),x.return=d,x):(x=Vo(h.type,h.key,h.props,null,d.mode,x),x.ref=vr(d,c,h),x.return=d,x)}function s(d,c,h,x){return c===null||c.tag!==4||c.stateNode.containerInfo!==h.containerInfo||c.stateNode.implementation!==h.implementation?(c=Dl(h,d.mode,x),c.return=d,c):(c=o(c,h.children||[]),c.return=d,c)}function f(d,c,h,x,E){return c===null||c.tag!==7?(c=xn(h,d.mode,x,E),c.return=d,c):(c=o(c,h),c.return=d,c)}function p(d,c,h){if(typeof c=="string"&&c!==""||typeof c=="number")return c=jl(""+c,d.mode,h),c.return=d,c;if(typeof c=="object"&&c!==null){switch(c.$$typeof){case fo:return h=Vo(c.type,c.key,c.props,null,d.mode,h),h.ref=vr(d,null,c),h.return=d,h;case Nn:return c=Dl(c,d.mode,h),c.return=d,c;case Wt:var x=c._init;return p(d,x(c._payload),h)}if(Er(c)||fr(c))return c=xn(c,d.mode,h,null),c.return=d,c;Eo(d,c)}return null}function g(d,c,h,x){var E=c!==null?c.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return E!==null?null:a(d,c,""+h,x);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case fo:return h.key===E?u(d,c,h,x):null;case Nn:return h.key===E?s(d,c,h,x):null;case Wt:return E=h._init,g(d,c,E(h._payload),x)}if(Er(h)||fr(h))return E!==null?null:f(d,c,h,x,null);Eo(d,h)}return null}function k(d,c,h,x,E){if(typeof x=="string"&&x!==""||typeof x=="number")return d=d.get(h)||null,a(c,d,""+x,E);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case fo:return d=d.get(x.key===null?h:x.key)||null,u(c,d,x,E);case Nn:return d=d.get(x.key===null?h:x.key)||null,s(c,d,x,E);case Wt:var L=x._init;return k(d,c,h,L(x._payload),E)}if(Er(x)||fr(x))return d=d.get(h)||null,f(c,d,x,E,null);Eo(c,x)}return null}function v(d,c,h,x){for(var E=null,L=null,N=c,F=c=0,U=null;N!==null&&F<h.length;F++){N.index>F?(U=N,N=null):U=N.sibling;var D=g(d,N,h[F],x);if(D===null){N===null&&(N=U);break}e&&N&&D.alternate===null&&t(d,N),c=i(D,c,F),L===null?E=D:L.sibling=D,L=D,N=U}if(F===h.length)return n(d,N),ae&&pn(d,F),E;if(N===null){for(;F<h.length;F++)N=p(d,h[F],x),N!==null&&(c=i(N,c,F),L===null?E=N:L.sibling=N,L=N);return ae&&pn(d,F),E}for(N=r(d,N);F<h.length;F++)U=k(N,d,F,h[F],x),U!==null&&(e&&U.alternate!==null&&N.delete(U.key===null?F:U.key),c=i(U,c,F),L===null?E=U:L.sibling=U,L=U);return e&&N.forEach(function(re){return t(d,re)}),ae&&pn(d,F),E}function S(d,c,h,x){var E=fr(h);if(typeof E!="function")throw Error(C(150));if(h=E.call(h),h==null)throw Error(C(151));for(var L=E=null,N=c,F=c=0,U=null,D=h.next();N!==null&&!D.done;F++,D=h.next()){N.index>F?(U=N,N=null):U=N.sibling;var re=g(d,N,D.value,x);if(re===null){N===null&&(N=U);break}e&&N&&re.alternate===null&&t(d,N),c=i(re,c,F),L===null?E=re:L.sibling=re,L=re,N=U}if(D.done)return n(d,N),ae&&pn(d,F),E;if(N===null){for(;!D.done;F++,D=h.next())D=p(d,D.value,x),D!==null&&(c=i(D,c,F),L===null?E=D:L.sibling=D,L=D);return ae&&pn(d,F),E}for(N=r(d,N);!D.done;F++,D=h.next())D=k(N,d,F,D.value,x),D!==null&&(e&&D.alternate!==null&&N.delete(D.key===null?F:D.key),c=i(D,c,F),L===null?E=D:L.sibling=D,L=D);return e&&N.forEach(function(oe){return t(d,oe)}),ae&&pn(d,F),E}function P(d,c,h,x){if(typeof h=="object"&&h!==null&&h.type===Ln&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case fo:e:{for(var E=h.key,L=c;L!==null;){if(L.key===E){if(E=h.type,E===Ln){if(L.tag===7){n(d,L.sibling),c=o(L,h.props.children),c.return=d,d=c;break e}}else if(L.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===Wt&&Zs(E)===L.type){n(d,L.sibling),c=o(L,h.props),c.ref=vr(d,L,h),c.return=d,d=c;break e}n(d,L);break}else t(d,L);L=L.sibling}h.type===Ln?(c=xn(h.props.children,d.mode,x,h.key),c.return=d,d=c):(x=Vo(h.type,h.key,h.props,null,d.mode,x),x.ref=vr(d,c,h),x.return=d,d=x)}return l(d);case Nn:e:{for(L=h.key;c!==null;){if(c.key===L)if(c.tag===4&&c.stateNode.containerInfo===h.containerInfo&&c.stateNode.implementation===h.implementation){n(d,c.sibling),c=o(c,h.children||[]),c.return=d,d=c;break e}else{n(d,c);break}else t(d,c);c=c.sibling}c=Dl(h,d.mode,x),c.return=d,d=c}return l(d);case Wt:return L=h._init,P(d,c,L(h._payload),x)}if(Er(h))return v(d,c,h,x);if(fr(h))return S(d,c,h,x);Eo(d,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,c!==null&&c.tag===6?(n(d,c.sibling),c=o(c,h),c.return=d,d=c):(n(d,c),c=jl(h,d.mode,x),c.return=d,d=c),l(d)):n(d,c)}return P}var Jn=Jd(!0),ef=Jd(!1),io={},_t=cn(io),Yr=cn(io),Gr=cn(io);function vn(e){if(e===io)throw Error(C(174));return e}function Tu(e,t){switch(ne(Gr,t),ne(Yr,e),ne(_t,io),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:ra(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=ra(t,e)}le(_t),ne(_t,t)}function er(){le(_t),le(Yr),le(Gr)}function tf(e){vn(Gr.current);var t=vn(_t.current),n=ra(t,e.type);t!==n&&(ne(Yr,e),ne(_t,n))}function Nu(e){Yr.current===e&&(le(_t),le(Yr))}var se=cn(0);function ai(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var Ll=[];function Lu(){for(var e=0;e<Ll.length;e++)Ll[e]._workInProgressVersionPrimary=null;Ll.length=0}var Do=Dt.ReactCurrentDispatcher,Fl=Dt.ReactCurrentBatchConfig,kn=0,ce=null,we=null,Ee=null,ui=!1,Lr=!1,Kr=0,yh=0;function Re(){throw Error(C(321))}function Fu(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!xt(e[n],t[n]))return!1;return!0}function Au(e,t,n,r,o,i){if(kn=i,ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Do.current=e===null||e.memoizedState===null?kh:Eh,e=n(r,o),Lr){i=0;do{if(Lr=!1,Kr=0,25<=i)throw Error(C(301));i+=1,Ee=we=null,t.updateQueue=null,Do.current=Ch,e=n(r,o)}while(Lr)}if(Do.current=si,t=we!==null&&we.next!==null,kn=0,Ee=we=ce=null,ui=!1,t)throw Error(C(300));return e}function Ru(){var e=Kr!==0;return Kr=0,e}function kt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ee===null?ce.memoizedState=Ee=e:Ee=Ee.next=e,Ee}function ut(){if(we===null){var e=ce.alternate;e=e!==null?e.memoizedState:null}else e=we.next;var t=Ee===null?ce.memoizedState:Ee.next;if(t!==null)Ee=t,we=e;else{if(e===null)throw Error(C(310));we=e,e={memoizedState:we.memoizedState,baseState:we.baseState,baseQueue:we.baseQueue,queue:we.queue,next:null},Ee===null?ce.memoizedState=Ee=e:Ee=Ee.next=e}return Ee}function Xr(e,t){return typeof t=="function"?t(e):t}function Al(e){var t=ut(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=we,o=r.baseQueue,i=n.pending;if(i!==null){if(o!==null){var l=o.next;o.next=i.next,i.next=l}r.baseQueue=o=i,n.pending=null}if(o!==null){i=o.next,r=r.baseState;var a=l=null,u=null,s=i;do{var f=s.lane;if((kn&f)===f)u!==null&&(u=u.next={lane:0,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null}),r=s.hasEagerState?s.eagerState:e(r,s.action);else{var p={lane:f,action:s.action,hasEagerState:s.hasEagerState,eagerState:s.eagerState,next:null};u===null?(a=u=p,l=r):u=u.next=p,ce.lanes|=f,En|=f}s=s.next}while(s!==null&&s!==i);u===null?l=r:u.next=a,xt(r,t.memoizedState)||(Qe=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do i=o.lane,ce.lanes|=i,En|=i,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function Rl(e){var t=ut(),n=t.queue;if(n===null)throw Error(C(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,i=t.memoizedState;if(o!==null){n.pending=null;var l=o=o.next;do i=e(i,l.action),l=l.next;while(l!==o);xt(i,t.memoizedState)||(Qe=!0),t.memoizedState=i,t.baseQueue===null&&(t.baseState=i),n.lastRenderedState=i}return[i,r]}function nf(){}function rf(e,t){var n=ce,r=ut(),o=t(),i=!xt(r.memoizedState,o);if(i&&(r.memoizedState=o,Qe=!0),r=r.queue,Ou(af.bind(null,n,r,e),[e]),r.getSnapshot!==t||i||Ee!==null&&Ee.memoizedState.tag&1){if(n.flags|=2048,qr(9,lf.bind(null,n,r,o,t),void 0,null),_e===null)throw Error(C(349));(kn&30)!==0||of(n,t,o)}return o}function of(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function lf(e,t,n,r){t.value=n,t.getSnapshot=r,uf(t)&&sf(e)}function af(e,t,n){return n(function(){uf(t)&&sf(e)})}function uf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!xt(e,n)}catch{return!0}}function sf(e){var t=Mt(e,1);t!==null&&yt(t,e,1,-1)}function Js(e){var t=kt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Xr,lastRenderedState:e},t.queue=e,e=e.dispatch=Sh.bind(null,ce,e),[t.memoizedState,e]}function qr(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ce.updateQueue,t===null?(t={lastEffect:null,stores:null},ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function cf(){return ut().memoizedState}function Io(e,t,n,r){var o=kt();ce.flags|=e,o.memoizedState=qr(1|t,n,void 0,r===void 0?null:r)}function $i(e,t,n,r){var o=ut();r=r===void 0?null:r;var i=void 0;if(we!==null){var l=we.memoizedState;if(i=l.destroy,r!==null&&Fu(r,l.deps)){o.memoizedState=qr(t,n,i,r);return}}ce.flags|=e,o.memoizedState=qr(1|t,n,i,r)}function ec(e,t){return Io(8390656,8,e,t)}function Ou(e,t){return $i(2048,8,e,t)}function df(e,t){return $i(4,2,e,t)}function ff(e,t){return $i(4,4,e,t)}function pf(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function hf(e,t,n){return n=n!=null?n.concat([e]):null,$i(4,4,pf.bind(null,t,e),n)}function Mu(){}function mf(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fu(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function gf(e,t){var n=ut();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Fu(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function vf(e,t,n){return(kn&21)===0?(e.baseState&&(e.baseState=!1,Qe=!0),e.memoizedState=n):(xt(n,t)||(n=xd(),ce.lanes|=n,En|=n,e.baseState=!0),t)}function xh(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=Fl.transition;Fl.transition={};try{e(!1),t()}finally{X=n,Fl.transition=r}}function yf(){return ut().memoizedState}function wh(e,t,n){var r=nn(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},xf(e))wf(t,n);else if(n=Kd(e,t,n,r),n!==null){var o=Be();yt(n,e,r,o),Sf(n,t,r)}}function Sh(e,t,n){var r=nn(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(xf(e))wf(t,o);else{var i=e.alternate;if(e.lanes===0&&(i===null||i.lanes===0)&&(i=t.lastRenderedReducer,i!==null))try{var l=t.lastRenderedState,a=i(l,n);if(o.hasEagerState=!0,o.eagerState=a,xt(a,l)){var u=t.interleaved;u===null?(o.next=o,zu(t)):(o.next=u.next,u.next=o),t.interleaved=o;return}}catch{}finally{}n=Kd(e,t,o,r),n!==null&&(o=Be(),yt(n,e,r,o),Sf(n,t,r))}}function xf(e){var t=e.alternate;return e===ce||t!==null&&t===ce}function wf(e,t){Lr=ui=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Sf(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,pu(e,n)}}var si={readContext:at,useCallback:Re,useContext:Re,useEffect:Re,useImperativeHandle:Re,useInsertionEffect:Re,useLayoutEffect:Re,useMemo:Re,useReducer:Re,useRef:Re,useState:Re,useDebugValue:Re,useDeferredValue:Re,useTransition:Re,useMutableSource:Re,useSyncExternalStore:Re,useId:Re,unstable_isNewReconciler:!1},kh={readContext:at,useCallback:function(e,t){return kt().memoizedState=[e,t===void 0?null:t],e},useContext:at,useEffect:ec,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Io(4194308,4,pf.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Io(4194308,4,e,t)},useInsertionEffect:function(e,t){return Io(4,2,e,t)},useMemo:function(e,t){var n=kt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=kt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=wh.bind(null,ce,e),[r.memoizedState,e]},useRef:function(e){var t=kt();return e={current:e},t.memoizedState=e},useState:Js,useDebugValue:Mu,useDeferredValue:function(e){return kt().memoizedState=e},useTransition:function(){var e=Js(!1),t=e[0];return e=xh.bind(null,e[1]),kt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ce,o=kt();if(ae){if(n===void 0)throw Error(C(407));n=n()}else{if(n=t(),_e===null)throw Error(C(349));(kn&30)!==0||of(r,t,n)}o.memoizedState=n;var i={value:n,getSnapshot:t};return o.queue=i,ec(af.bind(null,r,i,e),[e]),r.flags|=2048,qr(9,lf.bind(null,r,i,n,t),void 0,null),n},useId:function(){var e=kt(),t=_e.identifierPrefix;if(ae){var n=Tt,r=$t;n=(r&~(1<<32-vt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Kr++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=yh++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},Eh={readContext:at,useCallback:mf,useContext:at,useEffect:Ou,useImperativeHandle:hf,useInsertionEffect:df,useLayoutEffect:ff,useMemo:gf,useReducer:Al,useRef:cf,useState:function(){return Al(Xr)},useDebugValue:Mu,useDeferredValue:function(e){var t=ut();return vf(t,we.memoizedState,e)},useTransition:function(){var e=Al(Xr)[0],t=ut().memoizedState;return[e,t]},useMutableSource:nf,useSyncExternalStore:rf,useId:yf,unstable_isNewReconciler:!1},Ch={readContext:at,useCallback:mf,useContext:at,useEffect:Ou,useImperativeHandle:hf,useInsertionEffect:df,useLayoutEffect:ff,useMemo:gf,useReducer:Rl,useRef:cf,useState:function(){return Rl(Xr)},useDebugValue:Mu,useDeferredValue:function(e){var t=ut();return we===null?t.memoizedState=e:vf(t,we.memoizedState,e)},useTransition:function(){var e=Rl(Xr)[0],t=ut().memoizedState;return[e,t]},useMutableSource:nf,useSyncExternalStore:rf,useId:yf,unstable_isNewReconciler:!1};function tr(e,t){try{var n="",r=t;do n+=Zp(r),r=r.return;while(r);var o=n}catch(i){o=`
Error generating stack: `+i.message+`
`+i.stack}return{value:e,source:t,stack:o,digest:null}}function Ol(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Pa(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var _h=typeof WeakMap=="function"?WeakMap:Map;function kf(e,t,n){n=Ft(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){di||(di=!0,Ma=r),Pa(e,t)},n}function Ef(e,t,n){n=Ft(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){Pa(e,t)}}var i=e.stateNode;return i!==null&&typeof i.componentDidCatch=="function"&&(n.callback=function(){Pa(e,t),typeof r!="function"&&(tn===null?tn=new Set([this]):tn.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function tc(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new _h;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=Ih.bind(null,e,t,n),t.then(e,e))}function nc(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function rc(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=Ft(-1,1),t.tag=2,en(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var Ph=Dt.ReactCurrentOwner,Qe=!1;function Ie(e,t,n,r){t.child=e===null?ef(t,null,n,r):Jn(t,e.child,n,r)}function oc(e,t,n,r,o){n=n.render;var i=t.ref;return Yn(t,o),r=Au(e,t,n,r,i,o),n=Ru(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,jt(e,t,o)):(ae&&n&&Su(t),t.flags|=1,Ie(e,t,r,o),t.child)}function ic(e,t,n,r,o){if(e===null){var i=n.type;return typeof i=="function"&&!Wu(i)&&i.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=i,Cf(e,t,i,r,o)):(e=Vo(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(i=e.child,(e.lanes&o)===0){var l=i.memoizedProps;if(n=n.compare,n=n!==null?n:Vr,n(l,r)&&e.ref===t.ref)return jt(e,t,o)}return t.flags|=1,e=rn(i,r),e.ref=t.ref,e.return=t,t.child=e}function Cf(e,t,n,r,o){if(e!==null){var i=e.memoizedProps;if(Vr(i,r)&&e.ref===t.ref)if(Qe=!1,t.pendingProps=r=i,(e.lanes&o)!==0)(e.flags&131072)!==0&&(Qe=!0);else return t.lanes=e.lanes,jt(e,t,o)}return za(e,t,n,r,o)}function _f(e,t,n){var r=t.pendingProps,o=r.children,i=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ne(Hn,Ke),Ke|=n;else{if((n&1073741824)===0)return e=i!==null?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ne(Hn,Ke),Ke|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=i!==null?i.baseLanes:n,ne(Hn,Ke),Ke|=r}else i!==null?(r=i.baseLanes|n,t.memoizedState=null):r=n,ne(Hn,Ke),Ke|=r;return Ie(e,t,o,n),t.child}function Pf(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function za(e,t,n,r,o){var i=Ye(n)?wn:De.current;return i=qn(t,i),Yn(t,o),n=Au(e,t,n,r,i,o),r=Ru(),e!==null&&!Qe?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,jt(e,t,o)):(ae&&r&&Su(t),t.flags|=1,Ie(e,t,n,o),t.child)}function lc(e,t,n,r,o){if(Ye(n)){var i=!0;ti(t)}else i=!1;if(Yn(t,o),t.stateNode===null)Bo(e,t),Zd(t,n,r),_a(t,n,r,o),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,s=n.contextType;typeof s=="object"&&s!==null?s=at(s):(s=Ye(n)?wn:De.current,s=qn(t,s));var f=n.getDerivedStateFromProps,p=typeof f=="function"||typeof l.getSnapshotBeforeUpdate=="function";p||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==s)&&qs(t,l,r,s),Qt=!1;var g=t.memoizedState;l.state=g,li(t,r,l,o),u=t.memoizedState,a!==r||g!==u||be.current||Qt?(typeof f=="function"&&(Ca(t,n,f,r),u=t.memoizedState),(a=Qt||Xs(t,n,a,r,g,u,s))?(p||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=s,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Xd(e,t),a=t.memoizedProps,s=t.type===t.elementType?a:ht(t.type,a),l.props=s,p=t.pendingProps,g=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=at(u):(u=Ye(n)?wn:De.current,u=qn(t,u));var k=n.getDerivedStateFromProps;(f=typeof k=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==p||g!==u)&&qs(t,l,r,u),Qt=!1,g=t.memoizedState,l.state=g,li(t,r,l,o);var v=t.memoizedState;a!==p||g!==v||be.current||Qt?(typeof k=="function"&&(Ca(t,n,k,r),v=t.memoizedState),(s=Qt||Xs(t,n,s,r,g,v,u)||!1)?(f||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,v,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,v,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=v),l.props=r,l.state=v,l.context=u,r=s):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return $a(e,t,n,r,i,o)}function $a(e,t,n,r,o,i){Pf(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return o&&Qs(t,n,!1),jt(e,t,i);r=t.stateNode,Ph.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Jn(t,e.child,null,i),t.child=Jn(t,null,a,i)):Ie(e,t,a,i),t.memoizedState=r.state,o&&Qs(t,n,!0),t.child}function zf(e){var t=e.stateNode;t.pendingContext?Ws(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ws(e,t.context,!1),Tu(e,t.containerInfo)}function ac(e,t,n,r,o){return Zn(),Eu(o),t.flags|=256,Ie(e,t,n,r),t.child}var Ta={dehydrated:null,treeContext:null,retryLane:0};function Na(e){return{baseLanes:e,cachePool:null,transitions:null}}function $f(e,t,n){var r=t.pendingProps,o=se.current,i=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(o&2)!==0),a?(i=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ne(se,o&1),e===null)return ka(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,i?(r=t.mode,i=t.child,l={mode:"hidden",children:l},(r&1)===0&&i!==null?(i.childLanes=0,i.pendingProps=l):i=Li(l,r,0,null),e=xn(e,r,n,null),i.return=t,e.return=t,i.sibling=e,t.child=i,t.child.memoizedState=Na(n),t.memoizedState=Ta,e):ju(t,l));if(o=e.memoizedState,o!==null&&(a=o.dehydrated,a!==null))return zh(e,t,l,r,a,o,n);if(i){i=r.fallback,l=t.mode,o=e.child,a=o.sibling;var u={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=rn(o,u),r.subtreeFlags=o.subtreeFlags&14680064),a!==null?i=rn(a,i):(i=xn(i,l,n,null),i.flags|=2),i.return=t,r.return=t,r.sibling=i,t.child=r,r=i,i=t.child,l=e.child.memoizedState,l=l===null?Na(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},i.memoizedState=l,i.childLanes=e.childLanes&~n,t.memoizedState=Ta,r}return i=e.child,e=i.sibling,r=rn(i,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ju(e,t){return t=Li({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Co(e,t,n,r){return r!==null&&Eu(r),Jn(t,e.child,null,n),e=ju(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function zh(e,t,n,r,o,i,l){if(n)return t.flags&256?(t.flags&=-257,r=Ol(Error(C(422))),Co(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(i=r.fallback,o=t.mode,r=Li({mode:"visible",children:r.children},o,0,null),i=xn(i,o,l,null),i.flags|=2,r.return=t,i.return=t,r.sibling=i,t.child=r,(t.mode&1)!==0&&Jn(t,e.child,null,l),t.child.memoizedState=Na(l),t.memoizedState=Ta,i);if((t.mode&1)===0)return Co(e,t,l,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var a=r.dgst;return r=a,i=Error(C(419)),r=Ol(i,r,void 0),Co(e,t,l,r)}if(a=(l&e.childLanes)!==0,Qe||a){if(r=_e,r!==null){switch(l&-l){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|l))!==0?0:o,o!==0&&o!==i.retryLane&&(i.retryLane=o,Mt(e,o),yt(r,e,o,-1))}return Vu(),r=Ol(Error(C(421))),Co(e,t,l,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=Bh.bind(null,e),o._reactRetry=t,null):(e=i.treeContext,Xe=Jt(o.nextSibling),qe=t,ae=!0,gt=null,e!==null&&(rt[ot++]=$t,rt[ot++]=Tt,rt[ot++]=Sn,$t=e.id,Tt=e.overflow,Sn=t),t=ju(t,r.children),t.flags|=4096,t)}function uc(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Ea(e.return,t,n)}function Ml(e,t,n,r,o){var i=e.memoizedState;i===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=o)}function Tf(e,t,n){var r=t.pendingProps,o=r.revealOrder,i=r.tail;if(Ie(e,t,r.children,n),r=se.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&uc(e,n,t);else if(e.tag===19)uc(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ne(se,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&ai(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),Ml(t,!1,o,n,i);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&ai(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}Ml(t,!0,n,null,i);break;case"together":Ml(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Bo(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function jt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),En|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(C(153));if(t.child!==null){for(e=t.child,n=rn(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=rn(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function $h(e,t,n){switch(t.tag){case 3:zf(t),Zn();break;case 5:tf(t);break;case 1:Ye(t.type)&&ti(t);break;case 4:Tu(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ne(oi,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ne(se,se.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?$f(e,t,n):(ne(se,se.current&1),e=jt(e,t,n),e!==null?e.sibling:null);ne(se,se.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return Tf(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ne(se,se.current),r)break;return null;case 22:case 23:return t.lanes=0,_f(e,t,n)}return jt(e,t,n)}var Nf,La,Lf,Ff;Nf=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};La=function(){};Lf=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,vn(_t.current);var i=null;switch(n){case"input":o=Jl(e,o),r=Jl(e,r),i=[];break;case"select":o=de({},o,{value:void 0}),r=de({},r,{value:void 0}),i=[];break;case"textarea":o=na(e,o),r=na(e,r),i=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Jo)}oa(n,r);var l;n=null;for(s in o)if(!r.hasOwnProperty(s)&&o.hasOwnProperty(s)&&o[s]!=null)if(s==="style"){var a=o[s];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else s!=="dangerouslySetInnerHTML"&&s!=="children"&&s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Mr.hasOwnProperty(s)?i||(i=[]):(i=i||[]).push(s,null));for(s in r){var u=r[s];if(a=o!=null?o[s]:void 0,r.hasOwnProperty(s)&&u!==a&&(u!=null||a!=null))if(s==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(i||(i=[]),i.push(s,n)),n=u;else s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(i=i||[]).push(s,u)):s==="children"?typeof u!="string"&&typeof u!="number"||(i=i||[]).push(s,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&(Mr.hasOwnProperty(s)?(u!=null&&s==="onScroll"&&ie("scroll",e),i||a===u||(i=[])):(i=i||[]).push(s,u))}n&&(i=i||[]).push("style",n);var s=i;(t.updateQueue=s)&&(t.flags|=4)}};Ff=function(e,t,n,r){n!==r&&(t.flags|=4)};function yr(e,t){if(!ae)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Oe(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Th(e,t,n){var r=t.pendingProps;switch(ku(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Oe(t),null;case 1:return Ye(t.type)&&ei(),Oe(t),null;case 3:return r=t.stateNode,er(),le(be),le(De),Lu(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ko(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,gt!==null&&(Ia(gt),gt=null))),La(e,t),Oe(t),null;case 5:Nu(t);var o=vn(Gr.current);if(n=t.type,e!==null&&t.stateNode!=null)Lf(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(C(166));return Oe(t),null}if(e=vn(_t.current),ko(t)){r=t.stateNode,n=t.type;var i=t.memoizedProps;switch(r[Et]=t,r[br]=i,e=(t.mode&1)!==0,n){case"dialog":ie("cancel",r),ie("close",r);break;case"iframe":case"object":case"embed":ie("load",r);break;case"video":case"audio":for(o=0;o<_r.length;o++)ie(_r[o],r);break;case"source":ie("error",r);break;case"img":case"image":case"link":ie("error",r),ie("load",r);break;case"details":ie("toggle",r);break;case"input":vs(r,i),ie("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!i.multiple},ie("invalid",r);break;case"textarea":xs(r,i),ie("invalid",r)}oa(n,i),o=null;for(var l in i)if(i.hasOwnProperty(l)){var a=i[l];l==="children"?typeof a=="string"?r.textContent!==a&&(i.suppressHydrationWarning!==!0&&So(r.textContent,a,e),o=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(i.suppressHydrationWarning!==!0&&So(r.textContent,a,e),o=["children",""+a]):Mr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ie("scroll",r)}switch(n){case"input":po(r),ys(r,i,!0);break;case"textarea":po(r),ws(r);break;case"select":case"option":break;default:typeof i.onClick=="function"&&(r.onclick=Jo)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=od(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[Et]=t,e[br]=r,Nf(e,t,!1,!1),t.stateNode=e;e:{switch(l=ia(n,r),n){case"dialog":ie("cancel",e),ie("close",e),o=r;break;case"iframe":case"object":case"embed":ie("load",e),o=r;break;case"video":case"audio":for(o=0;o<_r.length;o++)ie(_r[o],e);o=r;break;case"source":ie("error",e),o=r;break;case"img":case"image":case"link":ie("error",e),ie("load",e),o=r;break;case"details":ie("toggle",e),o=r;break;case"input":vs(e,r),o=Jl(e,r),ie("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=de({},r,{value:void 0}),ie("invalid",e);break;case"textarea":xs(e,r),o=na(e,r),ie("invalid",e);break;default:o=r}oa(n,o),a=o;for(i in a)if(a.hasOwnProperty(i)){var u=a[i];i==="style"?ad(e,u):i==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&id(e,u)):i==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&jr(e,u):typeof u=="number"&&jr(e,""+u):i!=="suppressContentEditableWarning"&&i!=="suppressHydrationWarning"&&i!=="autoFocus"&&(Mr.hasOwnProperty(i)?u!=null&&i==="onScroll"&&ie("scroll",e):u!=null&&au(e,i,u,l))}switch(n){case"input":po(e),ys(e,r,!1);break;case"textarea":po(e),ws(e);break;case"option":r.value!=null&&e.setAttribute("value",""+an(r.value));break;case"select":e.multiple=!!r.multiple,i=r.value,i!=null?Vn(e,!!r.multiple,i,!1):r.defaultValue!=null&&Vn(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Jo)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Oe(t),null;case 6:if(e&&t.stateNode!=null)Ff(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(C(166));if(n=vn(Gr.current),vn(_t.current),ko(t)){if(r=t.stateNode,n=t.memoizedProps,r[Et]=t,(i=r.nodeValue!==n)&&(e=qe,e!==null))switch(e.tag){case 3:So(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&So(r.nodeValue,n,(e.mode&1)!==0)}i&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Et]=t,t.stateNode=r}return Oe(t),null;case 13:if(le(se),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ae&&Xe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Gd(),Zn(),t.flags|=98560,i=!1;else if(i=ko(t),r!==null&&r.dehydrated!==null){if(e===null){if(!i)throw Error(C(318));if(i=t.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(C(317));i[Et]=t}else Zn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Oe(t),i=!1}else gt!==null&&(Ia(gt),gt=null),i=!0;if(!i)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(se.current&1)!==0?Se===0&&(Se=3):Vu())),t.updateQueue!==null&&(t.flags|=4),Oe(t),null);case 4:return er(),La(e,t),e===null&&Wr(t.stateNode.containerInfo),Oe(t),null;case 10:return Pu(t.type._context),Oe(t),null;case 17:return Ye(t.type)&&ei(),Oe(t),null;case 19:if(le(se),i=t.memoizedState,i===null)return Oe(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)yr(i,!1);else{if(Se!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=ai(e),l!==null){for(t.flags|=128,yr(i,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)i=n,e=r,i.flags&=14680066,l=i.alternate,l===null?(i.childLanes=0,i.lanes=e,i.child=null,i.subtreeFlags=0,i.memoizedProps=null,i.memoizedState=null,i.updateQueue=null,i.dependencies=null,i.stateNode=null):(i.childLanes=l.childLanes,i.lanes=l.lanes,i.child=l.child,i.subtreeFlags=0,i.deletions=null,i.memoizedProps=l.memoizedProps,i.memoizedState=l.memoizedState,i.updateQueue=l.updateQueue,i.type=l.type,e=l.dependencies,i.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ne(se,se.current&1|2),t.child}e=e.sibling}i.tail!==null&&me()>nr&&(t.flags|=128,r=!0,yr(i,!1),t.lanes=4194304)}else{if(!r)if(e=ai(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),yr(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!ae)return Oe(t),null}else 2*me()-i.renderingStartTime>nr&&n!==1073741824&&(t.flags|=128,r=!0,yr(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(n=i.last,n!==null?n.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(t=i.tail,i.rendering=t,i.tail=t.sibling,i.renderingStartTime=me(),t.sibling=null,n=se.current,ne(se,r?n&1|2:n&1),t):(Oe(t),null);case 22:case 23:return Uu(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(Ke&1073741824)!==0&&(Oe(t),t.subtreeFlags&6&&(t.flags|=8192)):Oe(t),null;case 24:return null;case 25:return null}throw Error(C(156,t.tag))}function Nh(e,t){switch(ku(t),t.tag){case 1:return Ye(t.type)&&ei(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return er(),le(be),le(De),Lu(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Nu(t),null;case 13:if(le(se),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(C(340));Zn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return le(se),null;case 4:return er(),null;case 10:return Pu(t.type._context),null;case 22:case 23:return Uu(),null;case 24:return null;default:return null}}var _o=!1,Me=!1,Lh=typeof WeakSet=="function"?WeakSet:Set,O=null;function Bn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){pe(e,t,r)}else n.current=null}function Fa(e,t,n){try{n()}catch(r){pe(e,t,r)}}var sc=!1;function Fh(e,t){if(ma=Xo,e=Od(),wu(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,i=r.focusNode;r=r.focusOffset;try{n.nodeType,i.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,s=0,f=0,p=e,g=null;t:for(;;){for(var k;p!==n||o!==0&&p.nodeType!==3||(a=l+o),p!==i||r!==0&&p.nodeType!==3||(u=l+r),p.nodeType===3&&(l+=p.nodeValue.length),(k=p.firstChild)!==null;)g=p,p=k;for(;;){if(p===e)break t;if(g===n&&++s===o&&(a=l),g===i&&++f===r&&(u=l),(k=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=k}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ga={focusedElem:e,selectionRange:n},Xo=!1,O=t;O!==null;)if(t=O,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,O=e;else for(;O!==null;){t=O;try{var v=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var S=v.memoizedProps,P=v.memoizedState,d=t.stateNode,c=d.getSnapshotBeforeUpdate(t.elementType===t.type?S:ht(t.type,S),P);d.__reactInternalSnapshotBeforeUpdate=c}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(C(163))}}catch(x){pe(t,t.return,x)}if(e=t.sibling,e!==null){e.return=t.return,O=e;break}O=t.return}return v=sc,sc=!1,v}function Fr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var i=o.destroy;o.destroy=void 0,i!==void 0&&Fa(t,n,i)}o=o.next}while(o!==r)}}function Ti(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Aa(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Af(e){var t=e.alternate;t!==null&&(e.alternate=null,Af(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Et],delete t[br],delete t[xa],delete t[hh],delete t[mh])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Rf(e){return e.tag===5||e.tag===3||e.tag===4}function cc(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Rf(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ra(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Jo));else if(r!==4&&(e=e.child,e!==null))for(Ra(e,t,n),e=e.sibling;e!==null;)Ra(e,t,n),e=e.sibling}function Oa(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Oa(e,t,n),e=e.sibling;e!==null;)Oa(e,t,n),e=e.sibling}var Ne=null,mt=!1;function Ht(e,t,n){for(n=n.child;n!==null;)Of(e,t,n),n=n.sibling}function Of(e,t,n){if(Ct&&typeof Ct.onCommitFiberUnmount=="function")try{Ct.onCommitFiberUnmount(Si,n)}catch{}switch(n.tag){case 5:Me||Bn(n,t);case 6:var r=Ne,o=mt;Ne=null,Ht(e,t,n),Ne=r,mt=o,Ne!==null&&(mt?(e=Ne,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ne.removeChild(n.stateNode));break;case 18:Ne!==null&&(mt?(e=Ne,n=n.stateNode,e.nodeType===8?Tl(e.parentNode,n):e.nodeType===1&&Tl(e,n),Hr(e)):Tl(Ne,n.stateNode));break;case 4:r=Ne,o=mt,Ne=n.stateNode.containerInfo,mt=!0,Ht(e,t,n),Ne=r,mt=o;break;case 0:case 11:case 14:case 15:if(!Me&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var i=o,l=i.destroy;i=i.tag,l!==void 0&&((i&2)!==0||(i&4)!==0)&&Fa(n,t,l),o=o.next}while(o!==r)}Ht(e,t,n);break;case 1:if(!Me&&(Bn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){pe(n,t,a)}Ht(e,t,n);break;case 21:Ht(e,t,n);break;case 22:n.mode&1?(Me=(r=Me)||n.memoizedState!==null,Ht(e,t,n),Me=r):Ht(e,t,n);break;default:Ht(e,t,n)}}function dc(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new Lh),t.forEach(function(r){var o=Hh.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function pt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var i=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ne=a.stateNode,mt=!1;break e;case 3:Ne=a.stateNode.containerInfo,mt=!0;break e;case 4:Ne=a.stateNode.containerInfo,mt=!0;break e}a=a.return}if(Ne===null)throw Error(C(160));Of(i,l,o),Ne=null,mt=!1;var u=o.alternate;u!==null&&(u.return=null),o.return=null}catch(s){pe(o,t,s)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)Mf(t,e),t=t.sibling}function Mf(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(pt(t,e),St(e),r&4){try{Fr(3,e,e.return),Ti(3,e)}catch(S){pe(e,e.return,S)}try{Fr(5,e,e.return)}catch(S){pe(e,e.return,S)}}break;case 1:pt(t,e),St(e),r&512&&n!==null&&Bn(n,n.return);break;case 5:if(pt(t,e),St(e),r&512&&n!==null&&Bn(n,n.return),e.flags&32){var o=e.stateNode;try{jr(o,"")}catch(S){pe(e,e.return,S)}}if(r&4&&(o=e.stateNode,o!=null)){var i=e.memoizedProps,l=n!==null?n.memoizedProps:i,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&i.type==="radio"&&i.name!=null&&nd(o,i),ia(a,l);var s=ia(a,i);for(l=0;l<u.length;l+=2){var f=u[l],p=u[l+1];f==="style"?ad(o,p):f==="dangerouslySetInnerHTML"?id(o,p):f==="children"?jr(o,p):au(o,f,p,s)}switch(a){case"input":ea(o,i);break;case"textarea":rd(o,i);break;case"select":var g=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!i.multiple;var k=i.value;k!=null?Vn(o,!!i.multiple,k,!1):g!==!!i.multiple&&(i.defaultValue!=null?Vn(o,!!i.multiple,i.defaultValue,!0):Vn(o,!!i.multiple,i.multiple?[]:"",!1))}o[br]=i}catch(S){pe(e,e.return,S)}}break;case 6:if(pt(t,e),St(e),r&4){if(e.stateNode===null)throw Error(C(162));o=e.stateNode,i=e.memoizedProps;try{o.nodeValue=i}catch(S){pe(e,e.return,S)}}break;case 3:if(pt(t,e),St(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Hr(t.containerInfo)}catch(S){pe(e,e.return,S)}break;case 4:pt(t,e),St(e);break;case 13:pt(t,e),St(e),o=e.child,o.flags&8192&&(i=o.memoizedState!==null,o.stateNode.isHidden=i,!i||o.alternate!==null&&o.alternate.memoizedState!==null||(Bu=me())),r&4&&dc(e);break;case 22:if(f=n!==null&&n.memoizedState!==null,e.mode&1?(Me=(s=Me)||f,pt(t,e),Me=s):pt(t,e),St(e),r&8192){if(s=e.memoizedState!==null,(e.stateNode.isHidden=s)&&!f&&(e.mode&1)!==0)for(O=e,f=e.child;f!==null;){for(p=O=f;O!==null;){switch(g=O,k=g.child,g.tag){case 0:case 11:case 14:case 15:Fr(4,g,g.return);break;case 1:Bn(g,g.return);var v=g.stateNode;if(typeof v.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,v.props=t.memoizedProps,v.state=t.memoizedState,v.componentWillUnmount()}catch(S){pe(r,n,S)}}break;case 5:Bn(g,g.return);break;case 22:if(g.memoizedState!==null){pc(p);continue}}k!==null?(k.return=g,O=k):pc(p)}f=f.sibling}e:for(f=null,p=e;;){if(p.tag===5){if(f===null){f=p;try{o=p.stateNode,s?(i=o.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none"):(a=p.stateNode,u=p.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=ld("display",l))}catch(S){pe(e,e.return,S)}}}else if(p.tag===6){if(f===null)try{p.stateNode.nodeValue=s?"":p.memoizedProps}catch(S){pe(e,e.return,S)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;f===p&&(f=null),p=p.return}f===p&&(f=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:pt(t,e),St(e),r&4&&dc(e);break;case 21:break;default:pt(t,e),St(e)}}function St(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Rf(n)){var r=n;break e}n=n.return}throw Error(C(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(jr(o,""),r.flags&=-33);var i=cc(e);Oa(e,i,o);break;case 3:case 4:var l=r.stateNode.containerInfo,a=cc(e);Ra(e,a,l);break;default:throw Error(C(161))}}catch(u){pe(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function Ah(e,t,n){O=e,jf(e)}function jf(e,t,n){for(var r=(e.mode&1)!==0;O!==null;){var o=O,i=o.child;if(o.tag===22&&r){var l=o.memoizedState!==null||_o;if(!l){var a=o.alternate,u=a!==null&&a.memoizedState!==null||Me;a=_o;var s=Me;if(_o=l,(Me=u)&&!s)for(O=o;O!==null;)l=O,u=l.child,l.tag===22&&l.memoizedState!==null?hc(o):u!==null?(u.return=l,O=u):hc(o);for(;i!==null;)O=i,jf(i),i=i.sibling;O=o,_o=a,Me=s}fc(e)}else(o.subtreeFlags&8772)!==0&&i!==null?(i.return=o,O=i):fc(e)}}function fc(e){for(;O!==null;){var t=O;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Me||Ti(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Me)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:ht(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var i=t.updateQueue;i!==null&&Ks(t,i,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}Ks(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var s=t.alternate;if(s!==null){var f=s.memoizedState;if(f!==null){var p=f.dehydrated;p!==null&&Hr(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(C(163))}Me||t.flags&512&&Aa(t)}catch(g){pe(t,t.return,g)}}if(t===e){O=null;break}if(n=t.sibling,n!==null){n.return=t.return,O=n;break}O=t.return}}function pc(e){for(;O!==null;){var t=O;if(t===e){O=null;break}var n=t.sibling;if(n!==null){n.return=t.return,O=n;break}O=t.return}}function hc(e){for(;O!==null;){var t=O;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{Ti(4,t)}catch(u){pe(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(u){pe(t,o,u)}}var i=t.return;try{Aa(t)}catch(u){pe(t,i,u)}break;case 5:var l=t.return;try{Aa(t)}catch(u){pe(t,l,u)}}}catch(u){pe(t,t.return,u)}if(t===e){O=null;break}var a=t.sibling;if(a!==null){a.return=t.return,O=a;break}O=t.return}}var Rh=Math.ceil,ci=Dt.ReactCurrentDispatcher,Du=Dt.ReactCurrentOwner,lt=Dt.ReactCurrentBatchConfig,Q=0,_e=null,xe=null,Le=0,Ke=0,Hn=cn(0),Se=0,Zr=null,En=0,Ni=0,Iu=0,Ar=null,We=null,Bu=0,nr=1/0,Pt=null,di=!1,Ma=null,tn=null,Po=!1,Kt=null,fi=0,Rr=0,ja=null,Ho=-1,Uo=0;function Be(){return(Q&6)!==0?me():Ho!==-1?Ho:Ho=me()}function nn(e){return(e.mode&1)===0?1:(Q&2)!==0&&Le!==0?Le&-Le:vh.transition!==null?(Uo===0&&(Uo=xd()),Uo):(e=X,e!==0||(e=window.event,e=e===void 0?16:Pd(e.type)),e)}function yt(e,t,n,r){if(50<Rr)throw Rr=0,ja=null,Error(C(185));no(e,n,r),((Q&2)===0||e!==_e)&&(e===_e&&((Q&2)===0&&(Ni|=n),Se===4&&Yt(e,Le)),Ge(e,r),n===1&&Q===0&&(t.mode&1)===0&&(nr=me()+500,Pi&&dn()))}function Ge(e,t){var n=e.callbackNode;v0(e,t);var r=Ko(e,e===_e?Le:0);if(r===0)n!==null&&Es(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Es(n),t===1)e.tag===0?gh(mc.bind(null,e)):Qd(mc.bind(null,e)),fh(function(){(Q&6)===0&&dn()}),n=null;else{switch(wd(r)){case 1:n=fu;break;case 4:n=vd;break;case 16:n=Go;break;case 536870912:n=yd;break;default:n=Go}n=Qf(n,Df.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Df(e,t){if(Ho=-1,Uo=0,(Q&6)!==0)throw Error(C(327));var n=e.callbackNode;if(Gn()&&e.callbackNode!==n)return null;var r=Ko(e,e===_e?Le:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=pi(e,r);else{t=r;var o=Q;Q|=2;var i=Bf();(_e!==e||Le!==t)&&(Pt=null,nr=me()+500,yn(e,t));do try{jh();break}catch(a){If(e,a)}while(1);_u(),ci.current=i,Q=o,xe!==null?t=0:(_e=null,Le=0,t=Se)}if(t!==0){if(t===2&&(o=ca(e),o!==0&&(r=o,t=Da(e,o))),t===1)throw n=Zr,yn(e,0),Yt(e,r),Ge(e,me()),n;if(t===6)Yt(e,r);else{if(o=e.current.alternate,(r&30)===0&&!Oh(o)&&(t=pi(e,r),t===2&&(i=ca(e),i!==0&&(r=i,t=Da(e,i))),t===1))throw n=Zr,yn(e,0),Yt(e,r),Ge(e,me()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(C(345));case 2:hn(e,We,Pt);break;case 3:if(Yt(e,r),(r&130023424)===r&&(t=Bu+500-me(),10<t)){if(Ko(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){Be(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=ya(hn.bind(null,e,We,Pt),t);break}hn(e,We,Pt);break;case 4:if(Yt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var l=31-vt(r);i=1<<l,l=t[l],l>o&&(o=l),r&=~i}if(r=o,r=me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Rh(r/1960))-r,10<r){e.timeoutHandle=ya(hn.bind(null,e,We,Pt),r);break}hn(e,We,Pt);break;case 5:hn(e,We,Pt);break;default:throw Error(C(329))}}}return Ge(e,me()),e.callbackNode===n?Df.bind(null,e):null}function Da(e,t){var n=Ar;return e.current.memoizedState.isDehydrated&&(yn(e,t).flags|=256),e=pi(e,t),e!==2&&(t=We,We=n,t!==null&&Ia(t)),e}function Ia(e){We===null?We=e:We.push.apply(We,e)}function Oh(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],i=o.getSnapshot;o=o.value;try{if(!xt(i(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Yt(e,t){for(t&=~Iu,t&=~Ni,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-vt(t),r=1<<n;e[n]=-1,t&=~r}}function mc(e){if((Q&6)!==0)throw Error(C(327));Gn();var t=Ko(e,0);if((t&1)===0)return Ge(e,me()),null;var n=pi(e,t);if(e.tag!==0&&n===2){var r=ca(e);r!==0&&(t=r,n=Da(e,r))}if(n===1)throw n=Zr,yn(e,0),Yt(e,t),Ge(e,me()),n;if(n===6)throw Error(C(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,hn(e,We,Pt),Ge(e,me()),null}function Hu(e,t){var n=Q;Q|=1;try{return e(t)}finally{Q=n,Q===0&&(nr=me()+500,Pi&&dn())}}function Cn(e){Kt!==null&&Kt.tag===0&&(Q&6)===0&&Gn();var t=Q;Q|=1;var n=lt.transition,r=X;try{if(lt.transition=null,X=1,e)return e()}finally{X=r,lt.transition=n,Q=t,(Q&6)===0&&dn()}}function Uu(){Ke=Hn.current,le(Hn)}function yn(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,dh(n)),xe!==null)for(n=xe.return;n!==null;){var r=n;switch(ku(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&ei();break;case 3:er(),le(be),le(De),Lu();break;case 5:Nu(r);break;case 4:er();break;case 13:le(se);break;case 19:le(se);break;case 10:Pu(r.type._context);break;case 22:case 23:Uu()}n=n.return}if(_e=e,xe=e=rn(e.current,null),Le=Ke=t,Se=0,Zr=null,Iu=Ni=En=0,We=Ar=null,gn!==null){for(t=0;t<gn.length;t++)if(n=gn[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,i=n.pending;if(i!==null){var l=i.next;i.next=o,r.next=l}n.pending=r}gn=null}return e}function If(e,t){do{var n=xe;try{if(_u(),Do.current=si,ui){for(var r=ce.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}ui=!1}if(kn=0,Ee=we=ce=null,Lr=!1,Kr=0,Du.current=null,n===null||n.return===null){Se=1,Zr=t,xe=null;break}e:{var i=e,l=n.return,a=n,u=t;if(t=Le,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var s=u,f=a,p=f.tag;if((f.mode&1)===0&&(p===0||p===11||p===15)){var g=f.alternate;g?(f.updateQueue=g.updateQueue,f.memoizedState=g.memoizedState,f.lanes=g.lanes):(f.updateQueue=null,f.memoizedState=null)}var k=nc(l);if(k!==null){k.flags&=-257,rc(k,l,a,i,t),k.mode&1&&tc(i,s,t),t=k,u=s;var v=t.updateQueue;if(v===null){var S=new Set;S.add(u),t.updateQueue=S}else v.add(u);break e}else{if((t&1)===0){tc(i,s,t),Vu();break e}u=Error(C(426))}}else if(ae&&a.mode&1){var P=nc(l);if(P!==null){(P.flags&65536)===0&&(P.flags|=256),rc(P,l,a,i,t),Eu(tr(u,a));break e}}i=u=tr(u,a),Se!==4&&(Se=2),Ar===null?Ar=[i]:Ar.push(i),i=l;do{switch(i.tag){case 3:i.flags|=65536,t&=-t,i.lanes|=t;var d=kf(i,u,t);Gs(i,d);break e;case 1:a=u;var c=i.type,h=i.stateNode;if((i.flags&128)===0&&(typeof c.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(tn===null||!tn.has(h)))){i.flags|=65536,t&=-t,i.lanes|=t;var x=Ef(i,a,t);Gs(i,x);break e}}i=i.return}while(i!==null)}Uf(n)}catch(E){t=E,xe===n&&n!==null&&(xe=n=n.return);continue}break}while(1)}function Bf(){var e=ci.current;return ci.current=si,e===null?si:e}function Vu(){(Se===0||Se===3||Se===2)&&(Se=4),_e===null||(En&268435455)===0&&(Ni&268435455)===0||Yt(_e,Le)}function pi(e,t){var n=Q;Q|=2;var r=Bf();(_e!==e||Le!==t)&&(Pt=null,yn(e,t));do try{Mh();break}catch(o){If(e,o)}while(1);if(_u(),Q=n,ci.current=r,xe!==null)throw Error(C(261));return _e=null,Le=0,Se}function Mh(){for(;xe!==null;)Hf(xe)}function jh(){for(;xe!==null&&!u0();)Hf(xe)}function Hf(e){var t=Wf(e.alternate,e,Ke);e.memoizedProps=e.pendingProps,t===null?Uf(e):xe=t,Du.current=null}function Uf(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=Th(n,t,Ke),n!==null){xe=n;return}}else{if(n=Nh(n,t),n!==null){n.flags&=32767,xe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Se=6,xe=null;return}}if(t=t.sibling,t!==null){xe=t;return}xe=t=e}while(t!==null);Se===0&&(Se=5)}function hn(e,t,n){var r=X,o=lt.transition;try{lt.transition=null,X=1,Dh(e,t,n,r)}finally{lt.transition=o,X=r}return null}function Dh(e,t,n,r){do Gn();while(Kt!==null);if((Q&6)!==0)throw Error(C(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(C(177));e.callbackNode=null,e.callbackPriority=0;var i=n.lanes|n.childLanes;if(y0(e,i),e===_e&&(xe=_e=null,Le=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||Po||(Po=!0,Qf(Go,function(){return Gn(),null})),i=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||i){i=lt.transition,lt.transition=null;var l=X;X=1;var a=Q;Q|=4,Du.current=null,Fh(e,n),Mf(n,e),oh(ga),Xo=!!ma,ga=ma=null,e.current=n,Ah(n),s0(),Q=a,X=l,lt.transition=i}else e.current=n;if(Po&&(Po=!1,Kt=e,fi=o),i=e.pendingLanes,i===0&&(tn=null),f0(n.stateNode),Ge(e,me()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(di)throw di=!1,e=Ma,Ma=null,e;return(fi&1)!==0&&e.tag!==0&&Gn(),i=e.pendingLanes,(i&1)!==0?e===ja?Rr++:(Rr=0,ja=e):Rr=0,dn(),null}function Gn(){if(Kt!==null){var e=wd(fi),t=lt.transition,n=X;try{if(lt.transition=null,X=16>e?16:e,Kt===null)var r=!1;else{if(e=Kt,Kt=null,fi=0,(Q&6)!==0)throw Error(C(331));var o=Q;for(Q|=4,O=e.current;O!==null;){var i=O,l=i.child;if((O.flags&16)!==0){var a=i.deletions;if(a!==null){for(var u=0;u<a.length;u++){var s=a[u];for(O=s;O!==null;){var f=O;switch(f.tag){case 0:case 11:case 15:Fr(8,f,i)}var p=f.child;if(p!==null)p.return=f,O=p;else for(;O!==null;){f=O;var g=f.sibling,k=f.return;if(Af(f),f===s){O=null;break}if(g!==null){g.return=k,O=g;break}O=k}}}var v=i.alternate;if(v!==null){var S=v.child;if(S!==null){v.child=null;do{var P=S.sibling;S.sibling=null,S=P}while(S!==null)}}O=i}}if((i.subtreeFlags&2064)!==0&&l!==null)l.return=i,O=l;else e:for(;O!==null;){if(i=O,(i.flags&2048)!==0)switch(i.tag){case 0:case 11:case 15:Fr(9,i,i.return)}var d=i.sibling;if(d!==null){d.return=i.return,O=d;break e}O=i.return}}var c=e.current;for(O=c;O!==null;){l=O;var h=l.child;if((l.subtreeFlags&2064)!==0&&h!==null)h.return=l,O=h;else e:for(l=c;O!==null;){if(a=O,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:Ti(9,a)}}catch(E){pe(a,a.return,E)}if(a===l){O=null;break e}var x=a.sibling;if(x!==null){x.return=a.return,O=x;break e}O=a.return}}if(Q=o,dn(),Ct&&typeof Ct.onPostCommitFiberRoot=="function")try{Ct.onPostCommitFiberRoot(Si,e)}catch{}r=!0}return r}finally{X=n,lt.transition=t}}return!1}function gc(e,t,n){t=tr(n,t),t=kf(e,t,1),e=en(e,t,1),t=Be(),e!==null&&(no(e,1,t),Ge(e,t))}function pe(e,t,n){if(e.tag===3)gc(e,e,n);else for(;t!==null;){if(t.tag===3){gc(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(tn===null||!tn.has(r))){e=tr(n,e),e=Ef(t,e,1),t=en(t,e,1),e=Be(),t!==null&&(no(t,1,e),Ge(t,e));break}}t=t.return}}function Ih(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Be(),e.pingedLanes|=e.suspendedLanes&n,_e===e&&(Le&n)===n&&(Se===4||Se===3&&(Le&130023424)===Le&&500>me()-Bu?yn(e,0):Iu|=n),Ge(e,t)}function Vf(e,t){t===0&&((e.mode&1)===0?t=1:(t=go,go<<=1,(go&130023424)===0&&(go=4194304)));var n=Be();e=Mt(e,t),e!==null&&(no(e,t,n),Ge(e,n))}function Bh(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Vf(e,n)}function Hh(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(C(314))}r!==null&&r.delete(t),Vf(e,n)}var Wf;Wf=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||be.current)Qe=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return Qe=!1,$h(e,t,n);Qe=(e.flags&131072)!==0}else Qe=!1,ae&&(t.flags&1048576)!==0&&bd(t,ri,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Bo(e,t),e=t.pendingProps;var o=qn(t,De.current);Yn(t,n),o=Au(null,t,r,e,o,n);var i=Ru();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,Ye(r)?(i=!0,ti(t)):i=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,$u(t),o.updater=zi,t.stateNode=o,o._reactInternals=t,_a(t,r,e,n),t=$a(null,t,r,!0,i,n)):(t.tag=0,ae&&i&&Su(t),Ie(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Bo(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=Vh(r),e=ht(r,e),o){case 0:t=za(null,t,r,e,n);break e;case 1:t=lc(null,t,r,e,n);break e;case 11:t=oc(null,t,r,e,n);break e;case 14:t=ic(null,t,r,ht(r.type,e),n);break e}throw Error(C(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),za(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),lc(e,t,r,o,n);case 3:e:{if(zf(t),e===null)throw Error(C(387));r=t.pendingProps,i=t.memoizedState,o=i.element,Xd(e,t),li(t,r,null,n);var l=t.memoizedState;if(r=l.element,i.isDehydrated)if(i={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=i,t.memoizedState=i,t.flags&256){o=tr(Error(C(423)),t),t=ac(e,t,r,n,o);break e}else if(r!==o){o=tr(Error(C(424)),t),t=ac(e,t,r,n,o);break e}else for(Xe=Jt(t.stateNode.containerInfo.firstChild),qe=t,ae=!0,gt=null,n=ef(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Zn(),r===o){t=jt(e,t,n);break e}Ie(e,t,r,n)}t=t.child}return t;case 5:return tf(t),e===null&&ka(t),r=t.type,o=t.pendingProps,i=e!==null?e.memoizedProps:null,l=o.children,va(r,o)?l=null:i!==null&&va(r,i)&&(t.flags|=32),Pf(e,t),Ie(e,t,l,n),t.child;case 6:return e===null&&ka(t),null;case 13:return $f(e,t,n);case 4:return Tu(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Jn(t,null,r,n):Ie(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),oc(e,t,r,o,n);case 7:return Ie(e,t,t.pendingProps,n),t.child;case 8:return Ie(e,t,t.pendingProps.children,n),t.child;case 12:return Ie(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,i=t.memoizedProps,l=o.value,ne(oi,r._currentValue),r._currentValue=l,i!==null)if(xt(i.value,l)){if(i.children===o.children&&!be.current){t=jt(e,t,n);break e}}else for(i=t.child,i!==null&&(i.return=t);i!==null;){var a=i.dependencies;if(a!==null){l=i.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(i.tag===1){u=Ft(-1,n&-n),u.tag=2;var s=i.updateQueue;if(s!==null){s=s.shared;var f=s.pending;f===null?u.next=u:(u.next=f.next,f.next=u),s.pending=u}}i.lanes|=n,u=i.alternate,u!==null&&(u.lanes|=n),Ea(i.return,n,t),a.lanes|=n;break}u=u.next}}else if(i.tag===10)l=i.type===t.type?null:i.child;else if(i.tag===18){if(l=i.return,l===null)throw Error(C(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Ea(l,n,t),l=i.sibling}else l=i.child;if(l!==null)l.return=i;else for(l=i;l!==null;){if(l===t){l=null;break}if(i=l.sibling,i!==null){i.return=l.return,l=i;break}l=l.return}i=l}Ie(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,Yn(t,n),o=at(o),r=r(o),t.flags|=1,Ie(e,t,r,n),t.child;case 14:return r=t.type,o=ht(r,t.pendingProps),o=ht(r.type,o),ic(e,t,r,o,n);case 15:return Cf(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:ht(r,o),Bo(e,t),t.tag=1,Ye(r)?(e=!0,ti(t)):e=!1,Yn(t,n),Zd(t,r,o),_a(t,r,o,n),$a(null,t,r,!0,e,n);case 19:return Tf(e,t,n);case 22:return _f(e,t,n)}throw Error(C(156,t.tag))};function Qf(e,t){return gd(e,t)}function Uh(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function it(e,t,n,r){return new Uh(e,t,n,r)}function Wu(e){return e=e.prototype,!(!e||!e.isReactComponent)}function Vh(e){if(typeof e=="function")return Wu(e)?1:0;if(e!=null){if(e=e.$$typeof,e===su)return 11;if(e===cu)return 14}return 2}function rn(e,t){var n=e.alternate;return n===null?(n=it(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Vo(e,t,n,r,o,i){var l=2;if(r=e,typeof e=="function")Wu(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case Ln:return xn(n.children,o,i,t);case uu:l=8,o|=8;break;case Kl:return e=it(12,n,t,o|2),e.elementType=Kl,e.lanes=i,e;case Xl:return e=it(13,n,t,o),e.elementType=Xl,e.lanes=i,e;case ql:return e=it(19,n,t,o),e.elementType=ql,e.lanes=i,e;case Jc:return Li(n,o,i,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case qc:l=10;break e;case Zc:l=9;break e;case su:l=11;break e;case cu:l=14;break e;case Wt:l=16,r=null;break e}throw Error(C(130,e==null?e:typeof e,""))}return t=it(l,n,t,o),t.elementType=e,t.type=r,t.lanes=i,t}function xn(e,t,n,r){return e=it(7,e,r,t),e.lanes=n,e}function Li(e,t,n,r){return e=it(22,e,r,t),e.elementType=Jc,e.lanes=n,e.stateNode={isHidden:!1},e}function jl(e,t,n){return e=it(6,e,null,t),e.lanes=n,e}function Dl(e,t,n){return t=it(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Wh(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=yl(0),this.expirationTimes=yl(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=yl(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function Qu(e,t,n,r,o,i,l,a,u){return e=new Wh(e,t,n,a,u),t===1?(t=1,i===!0&&(t|=8)):t=0,i=it(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$u(i),e}function Qh(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Nn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function bf(e){if(!e)return un;e=e._reactInternals;e:{if(zn(e)!==e||e.tag!==1)throw Error(C(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(Ye(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(C(171))}if(e.tag===1){var n=e.type;if(Ye(n))return Wd(e,n,t)}return t}function Yf(e,t,n,r,o,i,l,a,u){return e=Qu(n,r,!0,e,o,i,l,a,u),e.context=bf(null),n=e.current,r=Be(),o=nn(n),i=Ft(r,o),i.callback=t!=null?t:null,en(n,i,o),e.current.lanes=o,no(e,o,r),Ge(e,r),e}function Fi(e,t,n,r){var o=t.current,i=Be(),l=nn(o);return n=bf(n),t.context===null?t.context=n:t.pendingContext=n,t=Ft(i,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=en(o,t,l),e!==null&&(yt(e,o,l,i),jo(e,o,l)),l}function hi(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function vc(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function bu(e,t){vc(e,t),(e=e.alternate)&&vc(e,t)}function bh(){return null}var Gf=typeof reportError=="function"?reportError:function(e){console.error(e)};function Yu(e){this._internalRoot=e}Ai.prototype.render=Yu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(C(409));Fi(e,t,null,null)};Ai.prototype.unmount=Yu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Cn(function(){Fi(null,e,null,null)}),t[Ot]=null}};function Ai(e){this._internalRoot=e}Ai.prototype.unstable_scheduleHydration=function(e){if(e){var t=Ed();e={blockedOn:null,target:e,priority:t};for(var n=0;n<bt.length&&t!==0&&t<bt[n].priority;n++);bt.splice(n,0,e),n===0&&_d(e)}};function Gu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Ri(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function yc(){}function Yh(e,t,n,r,o){if(o){if(typeof r=="function"){var i=r;r=function(){var s=hi(l);i.call(s)}}var l=Yf(t,r,e,0,null,!1,!1,"",yc);return e._reactRootContainer=l,e[Ot]=l.current,Wr(e.nodeType===8?e.parentNode:e),Cn(),l}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var a=r;r=function(){var s=hi(u);a.call(s)}}var u=Qu(e,0,!1,null,null,!1,!1,"",yc);return e._reactRootContainer=u,e[Ot]=u.current,Wr(e.nodeType===8?e.parentNode:e),Cn(function(){Fi(t,u,n,r)}),u}function Oi(e,t,n,r,o){var i=n._reactRootContainer;if(i){var l=i;if(typeof o=="function"){var a=o;o=function(){var u=hi(l);a.call(u)}}Fi(t,l,e,o)}else l=Yh(n,t,e,o,r);return hi(l)}Sd=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Cr(t.pendingLanes);n!==0&&(pu(t,n|1),Ge(t,me()),(Q&6)===0&&(nr=me()+500,dn()))}break;case 13:Cn(function(){var r=Mt(e,1);if(r!==null){var o=Be();yt(r,e,1,o)}}),bu(e,1)}};hu=function(e){if(e.tag===13){var t=Mt(e,134217728);if(t!==null){var n=Be();yt(t,e,134217728,n)}bu(e,134217728)}};kd=function(e){if(e.tag===13){var t=nn(e),n=Mt(e,t);if(n!==null){var r=Be();yt(n,e,t,r)}bu(e,t)}};Ed=function(){return X};Cd=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};aa=function(e,t,n){switch(t){case"input":if(ea(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=_i(r);if(!o)throw Error(C(90));td(r),ea(r,o)}}}break;case"textarea":rd(e,n);break;case"select":t=n.value,t!=null&&Vn(e,!!n.multiple,t,!1)}};cd=Hu;dd=Cn;var Gh={usingClientEntryPoint:!1,Events:[oo,On,_i,ud,sd,Hu]},xr={findFiberByHostInstance:mn,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},Kh={bundleType:xr.bundleType,version:xr.version,rendererPackageName:xr.rendererPackageName,rendererConfig:xr.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Dt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=hd(e),e===null?null:e.stateNode},findFiberByHostInstance:xr.findFiberByHostInstance||bh,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var zo=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!zo.isDisabled&&zo.supportsFiber)try{Si=zo.inject(Kh),Ct=zo}catch{}}Je.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Gh;Je.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Gu(t))throw Error(C(200));return Qh(e,t,null,n)};Je.createRoot=function(e,t){if(!Gu(e))throw Error(C(299));var n=!1,r="",o=Gf;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=Qu(e,1,!1,null,null,n,!1,r,o),e[Ot]=t.current,Wr(e.nodeType===8?e.parentNode:e),new Yu(t)};Je.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(C(188)):(e=Object.keys(e).join(","),Error(C(268,e)));return e=hd(t),e=e===null?null:e.stateNode,e};Je.flushSync=function(e){return Cn(e)};Je.hydrate=function(e,t,n){if(!Ri(t))throw Error(C(200));return Oi(null,e,t,!0,n)};Je.hydrateRoot=function(e,t,n){if(!Gu(e))throw Error(C(405));var r=n!=null&&n.hydratedSources||null,o=!1,i="",l=Gf;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(i=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Yf(t,null,e,1,n!=null?n:null,o,!1,i,l),e[Ot]=t.current,Wr(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Ai(t)};Je.render=function(e,t,n){if(!Ri(t))throw Error(C(200));return Oi(null,e,t,!1,n)};Je.unmountComponentAtNode=function(e){if(!Ri(e))throw Error(C(40));return e._reactRootContainer?(Cn(function(){Oi(null,null,e,!1,function(){e._reactRootContainer=null,e[Ot]=null})}),!0):!1};Je.unstable_batchedUpdates=Hu;Je.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Ri(n))throw Error(C(200));if(e==null||e._reactInternals===void 0)throw Error(C(38));return Oi(e,t,n,!1,r)};Je.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Je})(ou);var xc=ou.exports;Yl.createRoot=xc.createRoot,Yl.hydrateRoot=xc.hydrateRoot;var Ku={exports:{}},q={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xu=Symbol.for("react.element"),qu=Symbol.for("react.portal"),Mi=Symbol.for("react.fragment"),ji=Symbol.for("react.strict_mode"),Di=Symbol.for("react.profiler"),Ii=Symbol.for("react.provider"),Bi=Symbol.for("react.context"),Xh=Symbol.for("react.server_context"),Hi=Symbol.for("react.forward_ref"),Ui=Symbol.for("react.suspense"),Vi=Symbol.for("react.suspense_list"),Wi=Symbol.for("react.memo"),Qi=Symbol.for("react.lazy"),qh=Symbol.for("react.offscreen"),Kf;Kf=Symbol.for("react.module.reference");function st(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Xu:switch(e=e.type,e){case Mi:case Di:case ji:case Ui:case Vi:return e;default:switch(e=e&&e.$$typeof,e){case Xh:case Bi:case Hi:case Qi:case Wi:case Ii:return e;default:return t}}case qu:return t}}}q.ContextConsumer=Bi;q.ContextProvider=Ii;q.Element=Xu;q.ForwardRef=Hi;q.Fragment=Mi;q.Lazy=Qi;q.Memo=Wi;q.Portal=qu;q.Profiler=Di;q.StrictMode=ji;q.Suspense=Ui;q.SuspenseList=Vi;q.isAsyncMode=function(){return!1};q.isConcurrentMode=function(){return!1};q.isContextConsumer=function(e){return st(e)===Bi};q.isContextProvider=function(e){return st(e)===Ii};q.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Xu};q.isForwardRef=function(e){return st(e)===Hi};q.isFragment=function(e){return st(e)===Mi};q.isLazy=function(e){return st(e)===Qi};q.isMemo=function(e){return st(e)===Wi};q.isPortal=function(e){return st(e)===qu};q.isProfiler=function(e){return st(e)===Di};q.isStrictMode=function(e){return st(e)===ji};q.isSuspense=function(e){return st(e)===Ui};q.isSuspenseList=function(e){return st(e)===Vi};q.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Mi||e===Di||e===ji||e===Ui||e===Vi||e===qh||typeof e=="object"&&e!==null&&(e.$$typeof===Qi||e.$$typeof===Wi||e.$$typeof===Ii||e.$$typeof===Bi||e.$$typeof===Hi||e.$$typeof===Kf||e.getModuleId!==void 0)};q.typeOf=st;(function(e){e.exports=q})(Ku);function Zh(e){function t(T,A,R,I,y){for(var W=0,$=0,fe=0,Y=0,K,H,ze=0,Ve=0,b,Ae=b=K=0,G=0,$e=0,cr=0,Te=0,so=R.length,dr=so-1,ft,B="",he="",dl="",fl="",Bt;G<so;){if(H=R.charCodeAt(G),G===dr&&$+Y+fe+W!==0&&($!==0&&(H=$===47?10:47),Y=fe=W=0,so++,dr++),$+Y+fe+W===0){if(G===dr&&(0<$e&&(B=B.replace(g,"")),0<B.trim().length)){switch(H){case 32:case 9:case 59:case 13:case 10:break;default:B+=R.charAt(G)}H=59}switch(H){case 123:for(B=B.trim(),K=B.charCodeAt(0),b=1,Te=++G;G<so;){switch(H=R.charCodeAt(G)){case 123:b++;break;case 125:b--;break;case 47:switch(H=R.charCodeAt(G+1)){case 42:case 47:e:{for(Ae=G+1;Ae<dr;++Ae)switch(R.charCodeAt(Ae)){case 47:if(H===42&&R.charCodeAt(Ae-1)===42&&G+2!==Ae){G=Ae+1;break e}break;case 10:if(H===47){G=Ae+1;break e}}G=Ae}}break;case 91:H++;case 40:H++;case 34:case 39:for(;G++<dr&&R.charCodeAt(G)!==H;);}if(b===0)break;G++}switch(b=R.substring(Te,G),K===0&&(K=(B=B.replace(p,"").trim()).charCodeAt(0)),K){case 64:switch(0<$e&&(B=B.replace(g,"")),H=B.charCodeAt(1),H){case 100:case 109:case 115:case 45:$e=A;break;default:$e=te}if(b=t(A,$e,b,H,y+1),Te=b.length,0<_&&($e=n(te,B,cr),Bt=a(3,b,$e,A,ue,oe,Te,H,y,I),B=$e.join(""),Bt!==void 0&&(Te=(b=Bt.trim()).length)===0&&(H=0,b="")),0<Te)switch(H){case 115:B=B.replace(L,l);case 100:case 109:case 45:b=B+"{"+b+"}";break;case 107:B=B.replace(c,"$1 $2"),b=B+"{"+b+"}",b=ye===1||ye===2&&i("@"+b,3)?"@-webkit-"+b+"@"+b:"@"+b;break;default:b=B+b,I===112&&(b=(he+=b,""))}else b="";break;default:b=t(A,n(A,B,cr),b,I,y+1)}dl+=b,b=cr=$e=Ae=K=0,B="",H=R.charCodeAt(++G);break;case 125:case 59:if(B=(0<$e?B.replace(g,""):B).trim(),1<(Te=B.length))switch(Ae===0&&(K=B.charCodeAt(0),K===45||96<K&&123>K)&&(Te=(B=B.replace(" ",":")).length),0<_&&(Bt=a(1,B,A,T,ue,oe,he.length,I,y,I))!==void 0&&(Te=(B=Bt.trim()).length)===0&&(B="\0\0"),K=B.charCodeAt(0),H=B.charCodeAt(1),K){case 0:break;case 64:if(H===105||H===99){fl+=B+R.charAt(G);break}default:B.charCodeAt(Te-1)!==58&&(he+=o(B,K,H,B.charCodeAt(2)))}cr=$e=Ae=K=0,B="",H=R.charCodeAt(++G)}}switch(H){case 13:case 10:$===47?$=0:1+K===0&&I!==107&&0<B.length&&($e=1,B+="\0"),0<_*M&&a(0,B,A,T,ue,oe,he.length,I,y,I),oe=1,ue++;break;case 59:case 125:if($+Y+fe+W===0){oe++;break}default:switch(oe++,ft=R.charAt(G),H){case 9:case 32:if(Y+W+$===0)switch(ze){case 44:case 58:case 9:case 32:ft="";break;default:H!==32&&(ft=" ")}break;case 0:ft="\\0";break;case 12:ft="\\f";break;case 11:ft="\\v";break;case 38:Y+$+W===0&&($e=cr=1,ft="\f"+ft);break;case 108:if(Y+$+W+ke===0&&0<Ae)switch(G-Ae){case 2:ze===112&&R.charCodeAt(G-3)===58&&(ke=ze);case 8:Ve===111&&(ke=Ve)}break;case 58:Y+$+W===0&&(Ae=G);break;case 44:$+fe+Y+W===0&&($e=1,ft+="\r");break;case 34:case 39:$===0&&(Y=Y===H?0:Y===0?H:Y);break;case 91:Y+$+fe===0&&W++;break;case 93:Y+$+fe===0&&W--;break;case 41:Y+$+W===0&&fe--;break;case 40:if(Y+$+W===0){if(K===0)switch(2*ze+3*Ve){case 533:break;default:K=1}fe++}break;case 64:$+fe+Y+W+Ae+b===0&&(b=1);break;case 42:case 47:if(!(0<Y+W+fe))switch($){case 0:switch(2*H+3*R.charCodeAt(G+1)){case 235:$=47;break;case 220:Te=G,$=42}break;case 42:H===47&&ze===42&&Te+2!==G&&(R.charCodeAt(Te+2)===33&&(he+=R.substring(Te,G+1)),ft="",$=0)}}$===0&&(B+=ft)}Ve=ze,ze=H,G++}if(Te=he.length,0<Te){if($e=A,0<_&&(Bt=a(2,he,$e,T,ue,oe,Te,I,y,I),Bt!==void 0&&(he=Bt).length===0))return fl+he+dl;if(he=$e.join(",")+"{"+he+"}",ye*ke!==0){switch(ye!==2||i(he,2)||(ke=0),ke){case 111:he=he.replace(x,":-moz-$1")+he;break;case 112:he=he.replace(h,"::-webkit-input-$1")+he.replace(h,"::-moz-$1")+he.replace(h,":-ms-input-$1")+he}ke=0}}return fl+he+dl}function n(T,A,R){var I=A.trim().split(P);A=I;var y=I.length,W=T.length;switch(W){case 0:case 1:var $=0;for(T=W===0?"":T[0]+" ";$<y;++$)A[$]=r(T,A[$],R).trim();break;default:var fe=$=0;for(A=[];$<y;++$)for(var Y=0;Y<W;++Y)A[fe++]=r(T[Y]+" ",I[$],R).trim()}return A}function r(T,A,R){var I=A.charCodeAt(0);switch(33>I&&(I=(A=A.trim()).charCodeAt(0)),I){case 38:return A.replace(d,"$1"+T.trim());case 58:return T.trim()+A.replace(d,"$1"+T.trim());default:if(0<1*R&&0<A.indexOf("\f"))return A.replace(d,(T.charCodeAt(0)===58?"":"$1")+T.trim())}return T+A}function o(T,A,R,I){var y=T+";",W=2*A+3*R+4*I;if(W===944){T=y.indexOf(":",9)+1;var $=y.substring(T,y.length-1).trim();return $=y.substring(0,T).trim()+$+";",ye===1||ye===2&&i($,1)?"-webkit-"+$+$:$}if(ye===0||ye===2&&!i(y,1))return y;switch(W){case 1015:return y.charCodeAt(10)===97?"-webkit-"+y+y:y;case 951:return y.charCodeAt(3)===116?"-webkit-"+y+y:y;case 963:return y.charCodeAt(5)===110?"-webkit-"+y+y:y;case 1009:if(y.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+y+y;case 978:return"-webkit-"+y+"-moz-"+y+y;case 1019:case 983:return"-webkit-"+y+"-moz-"+y+"-ms-"+y+y;case 883:if(y.charCodeAt(8)===45)return"-webkit-"+y+y;if(0<y.indexOf("image-set(",11))return y.replace(re,"$1-webkit-$2")+y;break;case 932:if(y.charCodeAt(4)===45)switch(y.charCodeAt(5)){case 103:return"-webkit-box-"+y.replace("-grow","")+"-webkit-"+y+"-ms-"+y.replace("grow","positive")+y;case 115:return"-webkit-"+y+"-ms-"+y.replace("shrink","negative")+y;case 98:return"-webkit-"+y+"-ms-"+y.replace("basis","preferred-size")+y}return"-webkit-"+y+"-ms-"+y+y;case 964:return"-webkit-"+y+"-ms-flex-"+y+y;case 1023:if(y.charCodeAt(8)!==99)break;return $=y.substring(y.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+$+"-webkit-"+y+"-ms-flex-pack"+$+y;case 1005:return v.test(y)?y.replace(k,":-webkit-")+y.replace(k,":-moz-")+y:y;case 1e3:switch($=y.substring(13).trim(),A=$.indexOf("-")+1,$.charCodeAt(0)+$.charCodeAt(A)){case 226:$=y.replace(E,"tb");break;case 232:$=y.replace(E,"tb-rl");break;case 220:$=y.replace(E,"lr");break;default:return y}return"-webkit-"+y+"-ms-"+$+y;case 1017:if(y.indexOf("sticky",9)===-1)break;case 975:switch(A=(y=T).length-10,$=(y.charCodeAt(A)===33?y.substring(0,A):y).substring(T.indexOf(":",7)+1).trim(),W=$.charCodeAt(0)+($.charCodeAt(7)|0)){case 203:if(111>$.charCodeAt(8))break;case 115:y=y.replace($,"-webkit-"+$)+";"+y;break;case 207:case 102:y=y.replace($,"-webkit-"+(102<W?"inline-":"")+"box")+";"+y.replace($,"-webkit-"+$)+";"+y.replace($,"-ms-"+$+"box")+";"+y}return y+";";case 938:if(y.charCodeAt(5)===45)switch(y.charCodeAt(6)){case 105:return $=y.replace("-items",""),"-webkit-"+y+"-webkit-box-"+$+"-ms-flex-"+$+y;case 115:return"-webkit-"+y+"-ms-flex-item-"+y.replace(F,"")+y;default:return"-webkit-"+y+"-ms-flex-line-pack"+y.replace("align-content","").replace(F,"")+y}break;case 973:case 989:if(y.charCodeAt(3)!==45||y.charCodeAt(4)===122)break;case 931:case 953:if(D.test(T)===!0)return($=T.substring(T.indexOf(":")+1)).charCodeAt(0)===115?o(T.replace("stretch","fill-available"),A,R,I).replace(":fill-available",":stretch"):y.replace($,"-webkit-"+$)+y.replace($,"-moz-"+$.replace("fill-",""))+y;break;case 962:if(y="-webkit-"+y+(y.charCodeAt(5)===102?"-ms-"+y:"")+y,R+I===211&&y.charCodeAt(13)===105&&0<y.indexOf("transform",10))return y.substring(0,y.indexOf(";",27)+1).replace(S,"$1-webkit-$2")+y}return y}function i(T,A){var R=T.indexOf(A===1?":":"{"),I=T.substring(0,A!==3?R:10);return R=T.substring(R+1,T.length-1),j(A!==2?I:I.replace(U,"$1"),R,A)}function l(T,A){var R=o(A,A.charCodeAt(0),A.charCodeAt(1),A.charCodeAt(2));return R!==A+";"?R.replace(N," or ($1)").substring(4):"("+A+")"}function a(T,A,R,I,y,W,$,fe,Y,K){for(var H=0,ze=A,Ve;H<_;++H)switch(Ve=J[H].call(f,T,ze,R,I,y,W,$,fe,Y,K)){case void 0:case!1:case!0:case null:break;default:ze=Ve}if(ze!==A)return ze}function u(T){switch(T){case void 0:case null:_=J.length=0;break;default:if(typeof T=="function")J[_++]=T;else if(typeof T=="object")for(var A=0,R=T.length;A<R;++A)u(T[A]);else M=!!T|0}return u}function s(T){return T=T.prefix,T!==void 0&&(j=null,T?typeof T!="function"?ye=1:(ye=2,j=T):ye=0),s}function f(T,A){var R=T;if(33>R.charCodeAt(0)&&(R=R.trim()),ee=R,R=[ee],0<_){var I=a(-1,A,R,R,ue,oe,0,0,0,0);I!==void 0&&typeof I=="string"&&(A=I)}var y=t(te,R,A,0,0);return 0<_&&(I=a(-2,y,R,R,ue,oe,y.length,0,0,0),I!==void 0&&(y=I)),ee="",ke=0,oe=ue=1,y}var p=/^\0+/g,g=/[\0\r\f]/g,k=/: */g,v=/zoo|gra/,S=/([,: ])(transform)/g,P=/,\r+?/g,d=/([\t\r\n ])*\f?&/g,c=/@(k\w+)\s*(\S*)\s*/,h=/::(place)/g,x=/:(read-only)/g,E=/[svh]\w+-[tblr]{2}/,L=/\(\s*(.*)\s*\)/g,N=/([\s\S]*?);/g,F=/-self|flex-/g,U=/[^]*?(:[rp][el]a[\w-]+)[^]*/,D=/stretch|:\s*\w+\-(?:conte|avail)/,re=/([^-])(image-set\()/,oe=1,ue=1,ke=0,ye=1,te=[],J=[],_=0,j=null,M=0,ee="";return f.use=u,f.set=s,e!==void 0&&s(e),f}var Jh={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function e1(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var t1=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,wc=e1(function(e){return t1.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Xf={exports:{}},Z={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pe=typeof Symbol=="function"&&Symbol.for,Zu=Pe?Symbol.for("react.element"):60103,Ju=Pe?Symbol.for("react.portal"):60106,bi=Pe?Symbol.for("react.fragment"):60107,Yi=Pe?Symbol.for("react.strict_mode"):60108,Gi=Pe?Symbol.for("react.profiler"):60114,Ki=Pe?Symbol.for("react.provider"):60109,Xi=Pe?Symbol.for("react.context"):60110,es=Pe?Symbol.for("react.async_mode"):60111,qi=Pe?Symbol.for("react.concurrent_mode"):60111,Zi=Pe?Symbol.for("react.forward_ref"):60112,Ji=Pe?Symbol.for("react.suspense"):60113,n1=Pe?Symbol.for("react.suspense_list"):60120,el=Pe?Symbol.for("react.memo"):60115,tl=Pe?Symbol.for("react.lazy"):60116,r1=Pe?Symbol.for("react.block"):60121,o1=Pe?Symbol.for("react.fundamental"):60117,i1=Pe?Symbol.for("react.responder"):60118,l1=Pe?Symbol.for("react.scope"):60119;function tt(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case Zu:switch(e=e.type,e){case es:case qi:case bi:case Gi:case Yi:case Ji:return e;default:switch(e=e&&e.$$typeof,e){case Xi:case Zi:case tl:case el:case Ki:return e;default:return t}}case Ju:return t}}}function qf(e){return tt(e)===qi}Z.AsyncMode=es;Z.ConcurrentMode=qi;Z.ContextConsumer=Xi;Z.ContextProvider=Ki;Z.Element=Zu;Z.ForwardRef=Zi;Z.Fragment=bi;Z.Lazy=tl;Z.Memo=el;Z.Portal=Ju;Z.Profiler=Gi;Z.StrictMode=Yi;Z.Suspense=Ji;Z.isAsyncMode=function(e){return qf(e)||tt(e)===es};Z.isConcurrentMode=qf;Z.isContextConsumer=function(e){return tt(e)===Xi};Z.isContextProvider=function(e){return tt(e)===Ki};Z.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===Zu};Z.isForwardRef=function(e){return tt(e)===Zi};Z.isFragment=function(e){return tt(e)===bi};Z.isLazy=function(e){return tt(e)===tl};Z.isMemo=function(e){return tt(e)===el};Z.isPortal=function(e){return tt(e)===Ju};Z.isProfiler=function(e){return tt(e)===Gi};Z.isStrictMode=function(e){return tt(e)===Yi};Z.isSuspense=function(e){return tt(e)===Ji};Z.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===bi||e===qi||e===Gi||e===Yi||e===Ji||e===n1||typeof e=="object"&&e!==null&&(e.$$typeof===tl||e.$$typeof===el||e.$$typeof===Ki||e.$$typeof===Xi||e.$$typeof===Zi||e.$$typeof===o1||e.$$typeof===i1||e.$$typeof===l1||e.$$typeof===r1)};Z.typeOf=tt;(function(e){e.exports=Z})(Xf);var ts=Xf.exports,a1={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},u1={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s1={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Zf={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},ns={};ns[ts.ForwardRef]=s1;ns[ts.Memo]=Zf;function Sc(e){return ts.isMemo(e)?Zf:ns[e.$$typeof]||a1}var c1=Object.defineProperty,d1=Object.getOwnPropertyNames,kc=Object.getOwnPropertySymbols,f1=Object.getOwnPropertyDescriptor,p1=Object.getPrototypeOf,Ec=Object.prototype;function Jf(e,t,n){if(typeof t!="string"){if(Ec){var r=p1(t);r&&r!==Ec&&Jf(e,r,n)}var o=d1(t);kc&&(o=o.concat(kc(t)));for(var i=Sc(e),l=Sc(t),a=0;a<o.length;++a){var u=o[a];if(!u1[u]&&!(n&&n[u])&&!(l&&l[u])&&!(i&&i[u])){var s=f1(t,u);try{c1(e,u,s)}catch{}}}}return e}var h1=Jf;function Nt(){return(Nt=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Cc=function(e,t){for(var n=[e[0]],r=0,o=t.length;r<o;r+=1)n.push(t[r],e[r+1]);return n},Ba=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!Ku.exports.typeOf(e)},mi=Object.freeze([]),on=Object.freeze({});function Jr(e){return typeof e=="function"}function _c(e){return e.displayName||e.name||"Component"}function rs(e){return e&&typeof e.styledComponentId=="string"}var rr=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",os=typeof window<"u"&&"HTMLElement"in window,m1=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1);function lo(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var g1=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,o=0;o<n;o++)r+=this.groupSizes[o];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var o=this.groupSizes,i=o.length,l=i;n>=l;)(l<<=1)<0&&lo(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(o),this.length=l;for(var a=i;a<l;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(n+1),s=0,f=r.length;s<f;s++)this.tag.insertRule(u,r[s])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],o=this.indexOfGroup(n),i=o+r;this.groupSizes[n]=0;for(var l=o;l<i;l++)this.tag.deleteRule(o)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var o=this.groupSizes[n],i=this.indexOfGroup(n),l=i+o,a=i;a<l;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),Wo=new Map,gi=new Map,Or=1,$o=function(e){if(Wo.has(e))return Wo.get(e);for(;gi.has(Or);)Or++;var t=Or++;return Wo.set(e,t),gi.set(t,e),t},v1=function(e){return gi.get(e)},y1=function(e,t){t>=Or&&(Or=t+1),Wo.set(e,t),gi.set(t,e)},x1="style["+rr+'][data-styled-version="5.3.6"]',w1=new RegExp("^"+rr+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),S1=function(e,t,n){for(var r,o=n.split(","),i=0,l=o.length;i<l;i++)(r=o[i])&&e.registerName(t,r)},k1=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],o=0,i=n.length;o<i;o++){var l=n[o].trim();if(l){var a=l.match(w1);if(a){var u=0|parseInt(a[1],10),s=a[2];u!==0&&(y1(s,u),S1(e,s,a[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(l)}}},E1=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},ep=function(e){var t=document.head,n=e||t,r=document.createElement("style"),o=function(a){for(var u=a.childNodes,s=u.length;s>=0;s--){var f=u[s];if(f&&f.nodeType===1&&f.hasAttribute(rr))return f}}(n),i=o!==void 0?o.nextSibling:null;r.setAttribute(rr,"active"),r.setAttribute("data-styled-version","5.3.6");var l=E1();return l&&r.setAttribute("nonce",l),n.insertBefore(r,i),r},C1=function(){function e(n){var r=this.element=ep(n);r.appendChild(document.createTextNode("")),this.sheet=function(o){if(o.sheet)return o.sheet;for(var i=document.styleSheets,l=0,a=i.length;l<a;l++){var u=i[l];if(u.ownerNode===o)return u}lo(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),_1=function(){function e(n){var r=this.element=ep(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var o=document.createTextNode(r),i=this.nodes[n];return this.element.insertBefore(o,i||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),P1=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Pc=os,z1={isServer:!os,useCSSOMInjection:!m1},tp=function(){function e(n,r,o){n===void 0&&(n=on),r===void 0&&(r={}),this.options=Nt({},z1,{},n),this.gs=r,this.names=new Map(o),this.server=!!n.isServer,!this.server&&os&&Pc&&(Pc=!1,function(i){for(var l=document.querySelectorAll(x1),a=0,u=l.length;a<u;a++){var s=l[a];s&&s.getAttribute(rr)!=="active"&&(k1(i,s),s.parentNode&&s.parentNode.removeChild(s))}}(this))}e.registerId=function(n){return $o(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Nt({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(o=(r=this.options).isServer,i=r.useCSSOMInjection,l=r.target,n=o?new P1(l):i?new C1(l):new _1(l),new g1(n)));var n,r,o,i,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if($o(n),this.names.has(n))this.names.get(n).add(r);else{var o=new Set;o.add(r),this.names.set(n,o)}},t.insertRules=function(n,r,o){this.registerName(n,r),this.getTag().insertRules($o(n),o)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup($o(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),o=r.length,i="",l=0;l<o;l++){var a=v1(l);if(a!==void 0){var u=n.names.get(a),s=r.getGroup(l);if(u&&s&&u.size){var f=rr+".g"+l+'[id="'+a+'"]',p="";u!==void 0&&u.forEach(function(g){g.length>0&&(p+=g+",")}),i+=""+s+f+'{content:"'+p+`"}/*!sc*/
`}}}return i}(this)},e}(),$1=/(a)(d)/gi,zc=function(e){return String.fromCharCode(e+(e>25?39:97))};function Ha(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=zc(t%52)+n;return(zc(t%52)+n).replace($1,"$1-$2")}var Un=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},np=function(e){return Un(5381,e)};function T1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Jr(n)&&!rs(n))return!1}return!0}var N1=np("5.3.6"),L1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&T1(t),this.componentId=n,this.baseHash=Un(N1,n),this.baseStyle=r,tp.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var o=this.componentId,i=[];if(this.baseStyle&&i.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(o,this.staticRulesId))i.push(this.staticRulesId);else{var l=or(this.rules,t,n,r).join(""),a=Ha(Un(this.baseHash,l)>>>0);if(!n.hasNameForId(o,a)){var u=r(l,"."+a,void 0,o);n.insertRules(o,a,u)}i.push(a),this.staticRulesId=a}else{for(var s=this.rules.length,f=Un(this.baseHash,r.hash),p="",g=0;g<s;g++){var k=this.rules[g];if(typeof k=="string")p+=k;else if(k){var v=or(k,t,n,r),S=Array.isArray(v)?v.join(""):v;f=Un(f,S+g),p+=S}}if(p){var P=Ha(f>>>0);if(!n.hasNameForId(o,P)){var d=r(p,"."+P,void 0,o);n.insertRules(o,P,d)}i.push(P)}}return i.join(" ")},e}(),F1=/^\s*\/\/.*$/gm,A1=[":","[",".","#"];function R1(e){var t,n,r,o,i=e===void 0?on:e,l=i.options,a=l===void 0?on:l,u=i.plugins,s=u===void 0?mi:u,f=new Zh(a),p=[],g=function(S){function P(d){if(d)try{S(d+"}")}catch{}}return function(d,c,h,x,E,L,N,F,U,D){switch(d){case 1:if(U===0&&c.charCodeAt(0)===64)return S(c+";"),"";break;case 2:if(F===0)return c+"/*|*/";break;case 3:switch(F){case 102:case 112:return S(h[0]+c),"";default:return c+(D===0?"/*|*/":"")}case-2:c.split("/*|*/}").forEach(P)}}}(function(S){p.push(S)}),k=function(S,P,d){return P===0&&A1.indexOf(d[n.length])!==-1||d.match(o)?S:"."+t};function v(S,P,d,c){c===void 0&&(c="&");var h=S.replace(F1,""),x=P&&d?d+" "+P+" { "+h+" }":h;return t=c,n=P,r=new RegExp("\\"+n+"\\b","g"),o=new RegExp("(\\"+n+"\\b){2,}"),f(d||!P?"":P,x)}return f.use([].concat(s,[function(S,P,d){S===2&&d.length&&d[0].lastIndexOf(n)>0&&(d[0]=d[0].replace(r,k))},g,function(S){if(S===-2){var P=p;return p=[],P}}])),v.hash=s.length?s.reduce(function(S,P){return P.name||lo(15),Un(S,P.name)},5381).toString():"",v}var rp=ge.createContext();rp.Consumer;var op=ge.createContext(),O1=(op.Consumer,new tp),Ua=R1();function M1(){return w.exports.useContext(rp)||O1}function j1(){return w.exports.useContext(op)||Ua}var D1=function(){function e(t,n){var r=this;this.inject=function(o,i){i===void 0&&(i=Ua);var l=r.name+i.hash;o.hasNameForId(r.id,l)||o.insertRules(r.id,l,i(r.rules,l,"@keyframes"))},this.toString=function(){return lo(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=Ua),this.name+t.hash},e}(),I1=/([A-Z])/,B1=/([A-Z])/g,H1=/^ms-/,U1=function(e){return"-"+e.toLowerCase()};function $c(e){return I1.test(e)?e.replace(B1,U1).replace(H1,"-ms-"):e}var Tc=function(e){return e==null||e===!1||e===""};function or(e,t,n,r){if(Array.isArray(e)){for(var o,i=[],l=0,a=e.length;l<a;l+=1)(o=or(e[l],t,n,r))!==""&&(Array.isArray(o)?i.push.apply(i,o):i.push(o));return i}if(Tc(e))return"";if(rs(e))return"."+e.styledComponentId;if(Jr(e)){if(typeof(s=e)!="function"||s.prototype&&s.prototype.isReactComponent||!t)return e;var u=e(t);return or(u,t,n,r)}var s;return e instanceof D1?n?(e.inject(n,r),e.getName(r)):e:Ba(e)?function f(p,g){var k,v,S=[];for(var P in p)p.hasOwnProperty(P)&&!Tc(p[P])&&(Array.isArray(p[P])&&p[P].isCss||Jr(p[P])?S.push($c(P)+":",p[P],";"):Ba(p[P])?S.push.apply(S,f(p[P],P)):S.push($c(P)+": "+(k=P,(v=p[P])==null||typeof v=="boolean"||v===""?"":typeof v!="number"||v===0||k in Jh?String(v).trim():v+"px")+";"));return g?[g+" {"].concat(S,["}"]):S}(e):e.toString()}var Nc=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function V1(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return Jr(e)||Ba(e)?Nc(or(Cc(mi,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Nc(or(Cc(e,n)))}var W1=function(e,t,n){return n===void 0&&(n=on),e.theme!==n.theme&&e.theme||t||n.theme},Q1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,b1=/(^-|-$)/g;function Il(e){return e.replace(Q1,"-").replace(b1,"")}var Y1=function(e){return Ha(np(e)>>>0)};function To(e){return typeof e=="string"&&!0}var Va=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},G1=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function K1(e,t,n){var r=e[n];Va(t)&&Va(r)?ip(r,t):e[n]=t}function ip(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var o=0,i=n;o<i.length;o++){var l=i[o];if(Va(l))for(var a in l)G1(a)&&K1(e,l[a],a)}return e}var lp=ge.createContext();lp.Consumer;var Bl={};function ap(e,t,n){var r=rs(e),o=!To(e),i=t.attrs,l=i===void 0?mi:i,a=t.componentId,u=a===void 0?function(c,h){var x=typeof c!="string"?"sc":Il(c);Bl[x]=(Bl[x]||0)+1;var E=x+"-"+Y1("5.3.6"+x+Bl[x]);return h?h+"-"+E:E}(t.displayName,t.parentComponentId):a,s=t.displayName,f=s===void 0?function(c){return To(c)?"styled."+c:"Styled("+_c(c)+")"}(e):s,p=t.displayName&&t.componentId?Il(t.displayName)+"-"+t.componentId:t.componentId||u,g=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,k=t.shouldForwardProp;r&&e.shouldForwardProp&&(k=t.shouldForwardProp?function(c,h,x){return e.shouldForwardProp(c,h,x)&&t.shouldForwardProp(c,h,x)}:e.shouldForwardProp);var v,S=new L1(n,p,r?e.componentStyle:void 0),P=S.isStatic&&l.length===0,d=function(c,h){return function(x,E,L,N){var F=x.attrs,U=x.componentStyle,D=x.defaultProps,re=x.foldedComponentIds,oe=x.shouldForwardProp,ue=x.styledComponentId,ke=x.target,ye=function(I,y,W){I===void 0&&(I=on);var $=Nt({},y,{theme:I}),fe={};return W.forEach(function(Y){var K,H,ze,Ve=Y;for(K in Jr(Ve)&&(Ve=Ve($)),Ve)$[K]=fe[K]=K==="className"?(H=fe[K],ze=Ve[K],H&&ze?H+" "+ze:H||ze):Ve[K]}),[$,fe]}(W1(E,w.exports.useContext(lp),D)||on,E,F),te=ye[0],J=ye[1],_=function(I,y,W,$){var fe=M1(),Y=j1(),K=y?I.generateAndInjectStyles(on,fe,Y):I.generateAndInjectStyles(W,fe,Y);return K}(U,N,te),j=L,M=J.$as||E.$as||J.as||E.as||ke,ee=To(M),T=J!==E?Nt({},E,{},J):E,A={};for(var R in T)R[0]!=="$"&&R!=="as"&&(R==="forwardedAs"?A.as=T[R]:(oe?oe(R,wc,M):!ee||wc(R))&&(A[R]=T[R]));return E.style&&J.style!==E.style&&(A.style=Nt({},E.style,{},J.style)),A.className=Array.prototype.concat(re,ue,_!==ue?_:null,E.className,J.className).filter(Boolean).join(" "),A.ref=j,w.exports.createElement(M,A)}(v,c,h,P)};return d.displayName=f,(v=ge.forwardRef(d)).attrs=g,v.componentStyle=S,v.displayName=f,v.shouldForwardProp=k,v.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):mi,v.styledComponentId=p,v.target=r?e.target:e,v.withComponent=function(c){var h=t.componentId,x=function(L,N){if(L==null)return{};var F,U,D={},re=Object.keys(L);for(U=0;U<re.length;U++)F=re[U],N.indexOf(F)>=0||(D[F]=L[F]);return D}(t,["componentId"]),E=h&&h+"-"+(To(c)?c:Il(_c(c)));return ap(c,Nt({},x,{attrs:g,componentId:E}),n)},Object.defineProperty(v,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(c){this._foldedDefaultProps=r?ip({},e.defaultProps,c):c}}),v.toString=function(){return"."+v.styledComponentId},o&&h1(v,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),v}var Wa=function(e){return function t(n,r,o){if(o===void 0&&(o=on),!Ku.exports.isValidElementType(r))return lo(1,String(r));var i=function(){return n(r,o,V1.apply(void 0,arguments))};return i.withConfig=function(l){return t(n,r,Nt({},o,{},l))},i.attrs=function(l){return t(n,r,Nt({},o,{attrs:Array.prototype.concat(o.attrs,l).filter(Boolean)}))},i}(ap,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Wa[e]=Wa(e)});const ct=Wa,up="/ManuelChomer/assets/brand.5e063394.png";var nl={exports:{}},rl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X1=w.exports,q1=Symbol.for("react.element"),Z1=Symbol.for("react.fragment"),J1=Object.prototype.hasOwnProperty,em=X1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,tm={key:!0,ref:!0,__self:!0,__source:!0};function sp(e,t,n){var r,o={},i=null,l=null;n!==void 0&&(i=""+n),t.key!==void 0&&(i=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)J1.call(t,r)&&!tm.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:q1,type:e,key:i,ref:l,props:o,_owner:em.current}}rl.Fragment=Z1;rl.jsx=sp;rl.jsxs=sp;(function(e){e.exports=rl})(nl);const nm=nl.exports.Fragment,m=nl.exports.jsx,z=nl.exports.jsxs,rm=ct.header`
    position: fixed;
    top: 0;
    left: 0;
    z-index: 10;

    width: 100%;
    height: max-content;
    padding: 10px 20px;

    background-color: transparent;
    transition: all .6s;

    & nav {
        width: 100%;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        & a img {
            width: 80px;

            object-fit: contain;
        }

        & ul {
            position: fixed;
            top: 0;
            right: -2000px;

            width: 100%;
            height: 100vh;

            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            background-color: white;

            text-align: center;

            & .data__header__mobile {
                width: 100%;
                margin-top: 40px;
                padding-top: 40px;

                border-top: 1px solid gainsboro;

                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: space-around;

                & div {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;

                    & h5 {
                        margin-bottom: 10px;
                        
                        color: grey;
                        font-size: 12px;
                        font-weight: 500;
                        text-transform: uppercase;
                        letter-spacing: 2px;
                    }

                    & a {
                        width: max-content;

                        transition: all .6s;

                        color: black;
                        font-size: 16px;
                        font-weight: 400;
                        text-decoration: none;

                        &:hover {
                            color: var(--colorHover);
                        }
                    }
                }
            }

            & li {
                margin: 14px 0;
                
                list-style: none;

                & a {
                    width: max-content;

                    transition: all .6s;
                    cursor: pointer;

                    color: black;
                    font-size: 18px;
                    font-weight: 400;
                    text-decoration: none;
                }
                
                &:hover a { 
                    color: var(--colorHover);
                }
            }
        }

        & .burger__menu {            
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;

            cursor: pointer;

            & span {
                width: 42px;
                height: 1px;
                margin: 6px 0;

                background-color: white;
            }

            @media only screen and (min-width: 1024px) {
                display: none;
            }
        }
    }

    &.add__scroll_effect:not(.open__menu) {
        background-color: white;

        & nav {
            & ul {
                & li {
                    & a {
                        color: black;
                    }
                }
            }

            & .burger__menu {
                & span {
                    background-color: black;
                }
            }
        }
    }

    &.open__menu {
        & nav {
            & ul {
                right: 0;
            }

            & .burger__menu {
                position: fixed;
                top: 60px;
                right: 36px;
                z-index: 10;

                & span {
                    width: 28px;
                    margin: 0;

                    background-color: black;

                    transform: rotate(120deg);

                    &:last-child {
                        transform: rotate(-120deg);
                    }
                }
            }
        }
    }

    @media only screen and (min-width: 1024px) {
        & nav {
            & a img {
                width: 120px;
            }
            
            & ul {
                position: unset;

                width: 100%;
                height: max-content;

                flex-direction: row;
                align-items: center;
                justify-content: flex-end;

                background-color: transparent;

                text-align: left;

                & .data__header__mobile {
                    display: none;
                }

                & li {
                    margin: 0;
                    margin-left: 40px;
                    
                    & a {
                        color: white;
                        font-weight: 400;
                    }
                }
            }
        }
    }

    @media only screen and (min-width: 1200px) {
        padding: 20px 200px;
    }
`;function om(){w.exports.useEffect(()=>{window.addEventListener("scroll",()=>{window.scrollY>=300||window.scrollY?document.querySelector("header").classList.add("add__scroll_effect"):document.querySelector("header").classList.remove("add__scroll_effect")})},[window.scrollY]);const e=()=>{document.querySelector("header").classList.toggle("open__menu")},t=()=>{document.querySelectorAll("ul li").forEach(()=>{document.querySelector("header").classList.remove("open__menu")})};return m(rm,{children:z("nav",{children:[m("a",{href:"#home",children:m("img",{src:up,alt:"Sol Home - Micro Viviendas"})}),z("ul",{children:[m("li",{onClick:t,children:m("a",{href:"#home",children:"Inicio"})}),m("li",{onClick:t,children:m("a",{href:"#productos",children:"Productos"})}),m("li",{onClick:t,children:m("a",{href:"#beneficios",children:"Beneficios"})}),m("li",{onClick:t,children:m("a",{href:"#compania",children:"Compa\xF1\xEDa"})}),m("li",{onClick:t,children:m("a",{href:"#contacto",children:"Contacto"})}),z("div",{className:"data__header__mobile",children:[z("div",{children:[m("h5",{children:"Email"}),m("a",{href:"mailto:solhomearg@gmail.com",target:"_blank",rel:"noopener noreferrer",children:"solhomearg@gmail.com"})]}),z("div",{children:[m("h5",{children:"Descargas"}),m("a",{href:"/",target:"_blank",rel:"noopener noreferrer",children:"Brochure"})]})]})]}),z("div",{className:"burger__menu",onClick:e,children:[m("span",{}),m("span",{})]})]})})}var cp={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Lc=ge.createContext&&ge.createContext(cp),ln=globalThis&&globalThis.__assign||function(){return ln=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},ln.apply(this,arguments)},im=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var o=0,r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]]);return n};function dp(e){return e&&e.map(function(t,n){return ge.createElement(t.tag,ln({key:n},t.attr),dp(t.child))})}function ve(e){return function(t){return m(lm,{...ln({attr:ln({},e.attr)},t),children:dp(e.child)})}}function lm(e){var t=function(n){var r=e.attr,o=e.size,i=e.title,l=im(e,["attr","size","title"]),a=o||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),z("svg",{...ln({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:u,style:ln(ln({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),children:[i&&m("title",{children:i}),e.children]})};return Lc!==void 0?m(Lc.Consumer,{children:function(n){return t(n)}}):t(cp)}function am(e){return ve({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}}]})(e)}function um(e){return ve({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"}}]})(e)}function sm(e){return ve({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinejoin:"round",strokeWidth:"32",d:"M218.1 167.17c0 13 0 25.6 4.1 37.4-43.1 50.6-156.9 184.3-167.5 194.5a20.17 20.17 0 00-6.7 15c0 8.5 5.2 16.7 9.6 21.3 6.6 6.9 34.8 33 40 28 15.4-15 18.5-19 24.8-25.2 9.5-9.3-1-28.3 2.3-36s6.8-9.2 12.5-10.4 15.8 2.9 23.7 3c8.3.1 12.8-3.4 19-9.2 5-4.6 8.6-8.9 8.7-15.6.2-9-12.8-20.9-3.1-30.4s23.7 6.2 34 5 22.8-15.5 24.1-21.6-11.7-21.8-9.7-30.7c.7-3 6.8-10 11.4-11s25 6.9 29.6 5.9c5.6-1.2 12.1-7.1 17.4-10.4 15.5 6.7 29.6 9.4 47.7 9.4 68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.37-121.9 119.17zM400 144a32 32 0 11-32-32 32 32 0 0132 32z"}}]})(e)}function cm(e){return ve({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"}}]})(e)}function dm(e){return ve({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 19 22 12 13 5 13 19"}},{tag:"polygon",attr:{points:"2 19 11 12 2 5 2 19"}}]})(e)}function fm(e){return ve({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"}}]})(e)}function pm(e){return ve({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]})(e)}function hm(e){return ve({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64L128 192v384c0 212.1 171.9 384 384 384s384-171.9 384-384V192L512 64zm312 512c0 172.3-139.7 312-312 312S200 748.3 200 576V246l312-110 312 110v330z"}},{tag:"path",attr:{d:"M378.4 475.1a35.91 35.91 0 0 0-50.9 0 35.91 35.91 0 0 0 0 50.9l129.4 129.4 2.1 2.1a33.98 33.98 0 0 0 48.1 0L730.6 434a33.98 33.98 0 0 0 0-48.1l-2.8-2.8a33.98 33.98 0 0 0-48.1 0L483 579.7 378.4 475.1z"}}]})(e)}function mm(e){return ve({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"}}]})(e)}function gm(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"}}]})(e)}function vm(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"}}]})(e)}function No(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"}}]})(e)}function Ut(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"}}]})(e)}function fp(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"}},{tag:"path",attr:{d:"M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"}}]})(e)}function ym(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"}}]})(e)}function xm(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"}}]})(e)}function wm(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"}}]})(e)}function is(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"}}]})(e)}function Sm(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"}}]})(e)}function pp(e){return ve({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"}}]})(e)}function km(e){return ve({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm5 2h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h4v4h-4V5zM3 20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6zm2-5h4v4H5v-4zm8 5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6zm2-5h4v4h-4v-4z"}}]})(e)}const ol=typeof window>"u"||typeof document>"u";let It=ol?w.exports.useEffect:w.exports.useLayoutEffect;function At(e){let t=w.exports.useRef(e);return It(()=>{t.current=e},[e]),t}function il(e){typeof queueMicrotask=="function"?queueMicrotask(e):Promise.resolve().then(e).catch(t=>setTimeout(()=>{throw t}))}function ao(){let e=[],t=[],n={enqueue(r){t.push(r)},addEventListener(r,o,i,l){return r.addEventListener(o,i,l),n.add(()=>r.removeEventListener(o,i,l))},requestAnimationFrame(...r){let o=requestAnimationFrame(...r);return n.add(()=>cancelAnimationFrame(o))},nextFrame(...r){return n.requestAnimationFrame(()=>n.requestAnimationFrame(...r))},setTimeout(...r){let o=setTimeout(...r);return n.add(()=>clearTimeout(o))},microTask(...r){let o={current:!0};return il(()=>{o.current&&r[0]()}),n.add(()=>{o.current=!1})},add(r){return e.push(r),()=>{let o=e.indexOf(r);if(o>=0){let[i]=e.splice(o,1);i()}}},dispose(){for(let r of e.splice(0))r()},async workQueue(){for(let r of t.splice(0))await r()}};return n}function hp(){let[e]=w.exports.useState(ao);return w.exports.useEffect(()=>()=>e.dispose(),[e]),e}let je=function(e){let t=At(e);return ge.useCallback((...n)=>t.current(...n),[t])},Hl={serverHandoffComplete:!1};function ur(){let[e,t]=w.exports.useState(Hl.serverHandoffComplete);return w.exports.useEffect(()=>{e!==!0&&t(!0)},[e]),w.exports.useEffect(()=>{Hl.serverHandoffComplete===!1&&(Hl.serverHandoffComplete=!0)},[]),e}var Fc;let Em=0;function Ac(){return++Em}let sr=(Fc=ge.useId)!=null?Fc:function(){let e=ur(),[t,n]=ge.useState(e?Ac:null);return It(()=>{t===null&&n(Ac())},[t]),t!=null?""+t:void 0};function Ce(e,t,...n){if(e in t){let o=t[e];return typeof o=="function"?o(...n):o}let r=new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(o=>`"${o}"`).join(", ")}.`);throw Error.captureStackTrace&&Error.captureStackTrace(r,Ce),r}function ls(e){return ol?null:e instanceof Node?e.ownerDocument:e!=null&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}let Qa=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map(e=>`${e}:not([tabindex='-1'])`).join(",");var vi=(e=>(e[e.First=1]="First",e[e.Previous=2]="Previous",e[e.Next=4]="Next",e[e.Last=8]="Last",e[e.WrapAround=16]="WrapAround",e[e.NoScroll=32]="NoScroll",e))(vi||{}),mp=(e=>(e[e.Error=0]="Error",e[e.Overflow=1]="Overflow",e[e.Success=2]="Success",e[e.Underflow=3]="Underflow",e))(mp||{}),Cm=(e=>(e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e))(Cm||{});function _m(e=document.body){return e==null?[]:Array.from(e.querySelectorAll(Qa))}var gp=(e=>(e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e))(gp||{});function Pm(e,t=0){var n;return e===((n=ls(e))==null?void 0:n.body)?!1:Ce(t,{[0](){return e.matches(Qa)},[1](){let r=e;for(;r!==null;){if(r.matches(Qa))return!0;r=r.parentElement}return!1}})}function Kn(e){e==null||e.focus({preventScroll:!0})}let zm=["textarea","input"].join(",");function $m(e){var t,n;return(n=(t=e==null?void 0:e.matches)==null?void 0:t.call(e,zm))!=null?n:!1}function Tm(e,t=n=>n){return e.slice().sort((n,r)=>{let o=t(n),i=t(r);if(o===null||i===null)return 0;let l=o.compareDocumentPosition(i);return l&Node.DOCUMENT_POSITION_FOLLOWING?-1:l&Node.DOCUMENT_POSITION_PRECEDING?1:0})}function ba(e,t,n=!0,r=null){let o=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,i=Array.isArray(e)?n?Tm(e):e:_m(e);r=r!=null?r:o.activeElement;let l=(()=>{if(t&5)return 1;if(t&10)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),a=(()=>{if(t&1)return 0;if(t&2)return Math.max(0,i.indexOf(r))-1;if(t&4)return Math.max(0,i.indexOf(r))+1;if(t&8)return i.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")})(),u=t&32?{preventScroll:!0}:{},s=0,f=i.length,p;do{if(s>=f||s+f<=0)return 0;let g=a+s;if(t&16)g=(g+f)%f;else{if(g<0)return 3;if(g>=f)return 1}p=i[g],p==null||p.focus(u),s+=l}while(p!==o.activeElement);return t&6&&$m(p)&&p.select(),p.hasAttribute("tabindex")||p.setAttribute("tabindex","0"),2}function Ul(e,t,n){let r=At(t);w.exports.useEffect(()=>{function o(i){r.current(i)}return document.addEventListener(e,o,n),()=>document.removeEventListener(e,o,n)},[e,n])}function Nm(e,t,n=!0){let r=w.exports.useRef(!1);w.exports.useEffect(()=>{requestAnimationFrame(()=>{r.current=n})},[n]);function o(l,a){if(!r.current||l.defaultPrevented)return;let u=function f(p){return typeof p=="function"?f(p()):Array.isArray(p)||p instanceof Set?p:[p]}(e),s=a(l);if(s!==null&&!!s.getRootNode().contains(s)){for(let f of u){if(f===null)continue;let p=f instanceof HTMLElement?f:f.current;if(p!=null&&p.contains(s))return}return!Pm(s,gp.Loose)&&s.tabIndex!==-1&&l.preventDefault(),t(l,s)}}let i=w.exports.useRef(null);Ul("mousedown",l=>{var a,u;r.current&&(i.current=((u=(a=l.composedPath)==null?void 0:a.call(l))==null?void 0:u[0])||l.target)},!0),Ul("click",l=>{!i.current||(o(l,()=>i.current),i.current=null)},!0),Ul("blur",l=>o(l,()=>window.document.activeElement instanceof HTMLIFrameElement?window.document.activeElement:null),!0)}let vp=Symbol();function Lm(e,t=!0){return Object.assign(e,{[vp]:t})}function wt(...e){let t=w.exports.useRef(e);w.exports.useEffect(()=>{t.current=e},[e]);let n=je(r=>{for(let o of t.current)o!=null&&(typeof o=="function"?o(r):o.current=r)});return e.every(r=>r==null||(r==null?void 0:r[vp]))?void 0:n}var yi=(e=>(e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e))(yi||{}),Lt=(e=>(e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e))(Lt||{});function dt({ourProps:e,theirProps:t,slot:n,defaultTag:r,features:o,visible:i=!0,name:l}){let a=yp(t,e);if(i)return Lo(a,n,r,l);let u=o!=null?o:0;if(u&2){let{static:s=!1,...f}=a;if(s)return Lo(f,n,r,l)}if(u&1){let{unmount:s=!0,...f}=a;return Ce(s?0:1,{[0](){return null},[1](){return Lo({...f,hidden:!0,style:{display:"none"}},n,r,l)}})}return Lo(a,n,r,l)}function Lo(e,t={},n,r){let{as:o=n,children:i,refName:l="ref",...a}=Vl(e,["unmount","static"]),u=e.ref!==void 0?{[l]:e.ref}:{},s=typeof i=="function"?i(t):i;a.className&&typeof a.className=="function"&&(a.className=a.className(t));let f={};if(t){let p=!1,g=[];for(let[k,v]of Object.entries(t))typeof v=="boolean"&&(p=!0),v===!0&&g.push(k);p&&(f["data-headlessui-state"]=g.join(" "))}if(o===w.exports.Fragment&&Object.keys(Rc(a)).length>0){if(!w.exports.isValidElement(s)||Array.isArray(s)&&s.length>1)throw new Error(['Passing props on "Fragment"!',"",`The current component <${r} /> is rendering a "Fragment".`,"However we need to passthrough the following props:",Object.keys(a).map(p=>`  - ${p}`).join(`
`),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map(p=>`  - ${p}`).join(`
`)].join(`
`));return w.exports.cloneElement(s,Object.assign({},yp(s.props,Rc(Vl(a,["ref"]))),f,u,Fm(s.ref,u.ref)))}return w.exports.createElement(o,Object.assign({},Vl(a,["ref"]),o!==w.exports.Fragment&&u,o!==w.exports.Fragment&&f),s)}function Fm(...e){return{ref:e.every(t=>t==null)?void 0:t=>{for(let n of e)n!=null&&(typeof n=="function"?n(t):n.current=t)}}}function yp(...e){if(e.length===0)return{};if(e.length===1)return e[0];let t={},n={};for(let r of e)for(let o in r)o.startsWith("on")&&typeof r[o]=="function"?(n[o]!=null||(n[o]=[]),n[o].push(r[o])):t[o]=r[o];if(t.disabled||t["aria-disabled"])return Object.assign(t,Object.fromEntries(Object.keys(n).map(r=>[r,void 0])));for(let r in n)Object.assign(t,{[r](o,...i){let l=n[r];for(let a of l){if((o instanceof Event||(o==null?void 0:o.nativeEvent)instanceof Event)&&o.defaultPrevented)return;a(o,...i)}}});return t}function nt(e){var t;return Object.assign(w.exports.forwardRef(e),{displayName:(t=e.displayName)!=null?t:e.name})}function Rc(e){let t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}function Vl(e,t=[]){let n=Object.assign({},e);for(let r of t)r in n&&delete n[r];return n}function Am(e){let t=e.parentElement,n=null;for(;t&&!(t instanceof HTMLFieldSetElement);)t instanceof HTMLLegendElement&&(n=t),t=t.parentElement;let r=(t==null?void 0:t.getAttribute("disabled"))==="";return r&&Rm(n)?!1:r}function Rm(e){if(!e)return!1;let t=e.previousElementSibling;for(;t!==null;){if(t instanceof HTMLLegendElement)return!1;t=t.previousElementSibling}return!0}let Om="div";var xi=(e=>(e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e))(xi||{});let Ya=nt(function(e,t){let{features:n=1,...r}=e,o={ref:t,"aria-hidden":(n&2)===2?!0:void 0,style:{position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0",...(n&4)===4&&(n&2)!==2&&{display:"none"}}};return dt({ourProps:o,theirProps:r,slot:{},defaultTag:Om,name:"Hidden"})}),as=w.exports.createContext(null);as.displayName="OpenClosedContext";var _n=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(_n||{});function us(){return w.exports.useContext(as)}function Mm({value:e,children:t}){return ge.createElement(as.Provider,{value:e},t)}var xp=(e=>(e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e))(xp||{});function wp(e,t){let n=w.exports.useRef([]),r=je(e);w.exports.useEffect(()=>{let o=[...n.current];for(let[i,l]of t.entries())if(n.current[i]!==l){let a=r(t,o);return n.current=t,a}},[r,...t])}function jm(e,t,n){let r=At(t);w.exports.useEffect(()=>{function o(i){r.current(i)}return window.addEventListener(e,o,n),()=>window.removeEventListener(e,o,n)},[e,n])}var Ga=(e=>(e[e.Forwards=0]="Forwards",e[e.Backwards=1]="Backwards",e))(Ga||{});function Dm(){let e=w.exports.useRef(0);return jm("keydown",t=>{t.key==="Tab"&&(e.current=t.shiftKey?1:0)},!0),e}function ll(){let e=w.exports.useRef(!1);return It(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function al(...e){return w.exports.useMemo(()=>ls(...e),[...e])}function ss(e,t,n,r){let o=At(n);w.exports.useEffect(()=>{e=e!=null?e:window;function i(l){o.current(l)}return e.addEventListener(t,i,r),()=>e.removeEventListener(t,i,r)},[e,t,r])}let Im="div";var Sp=(e=>(e[e.None=1]="None",e[e.InitialFocus=2]="InitialFocus",e[e.TabLock=4]="TabLock",e[e.FocusLock=8]="FocusLock",e[e.RestoreFocus=16]="RestoreFocus",e[e.All=30]="All",e))(Sp||{});let wr=Object.assign(nt(function(e,t){let n=w.exports.useRef(null),r=wt(n,t),{initialFocus:o,containers:i,features:l=30,...a}=e;ur()||(l=1);let u=al(n);Bm({ownerDocument:u},Boolean(l&16));let s=Hm({ownerDocument:u,container:n,initialFocus:o},Boolean(l&2));Um({ownerDocument:u,container:n,containers:i,previousActiveElement:s},Boolean(l&8));let f=Dm(),p=je(()=>{let k=n.current;!k||Ce(f.current,{[Ga.Forwards]:()=>ba(k,vi.First),[Ga.Backwards]:()=>ba(k,vi.Last)})}),g={ref:r};return ge.createElement(ge.Fragment,null,Boolean(l&4)&&m(Ya,{as:"button",type:"button",onFocus:p,features:xi.Focusable}),dt({ourProps:g,theirProps:a,defaultTag:Im,name:"FocusTrap"}),Boolean(l&4)&&m(Ya,{as:"button",type:"button",onFocus:p,features:xi.Focusable}))}),{features:Sp});function Bm({ownerDocument:e},t){let n=w.exports.useRef(null);ss(e==null?void 0:e.defaultView,"focusout",o=>{!t||n.current||(n.current=o.target)},!0),wp(()=>{t||((e==null?void 0:e.activeElement)===(e==null?void 0:e.body)&&Kn(n.current),n.current=null)},[t]);let r=w.exports.useRef(!1);w.exports.useEffect(()=>(r.current=!1,()=>{r.current=!0,il(()=>{!r.current||(Kn(n.current),n.current=null)})}),[])}function Hm({ownerDocument:e,container:t,initialFocus:n},r){let o=w.exports.useRef(null),i=ll();return wp(()=>{if(!r)return;let l=t.current;!l||il(()=>{if(!i.current)return;let a=e==null?void 0:e.activeElement;if(n!=null&&n.current){if((n==null?void 0:n.current)===a){o.current=a;return}}else if(l.contains(a)){o.current=a;return}n!=null&&n.current?Kn(n.current):ba(l,vi.First)===mp.Error&&console.warn("There are no focusable elements inside the <FocusTrap />"),o.current=e==null?void 0:e.activeElement})},[r]),o}function Um({ownerDocument:e,container:t,containers:n,previousActiveElement:r},o){let i=ll();ss(e==null?void 0:e.defaultView,"focus",l=>{if(!o||!i.current)return;let a=new Set(n==null?void 0:n.current);a.add(t);let u=r.current;if(!u)return;let s=l.target;s&&s instanceof HTMLElement?Vm(a,s)?(r.current=s,Kn(s)):(l.preventDefault(),l.stopPropagation(),Kn(u)):Kn(r.current)},!0)}function Vm(e,t){var n;for(let r of e)if((n=r.current)!=null&&n.contains(t))return!0;return!1}let Tn=new Set,Vt=new Map;function Oc(e){e.setAttribute("aria-hidden","true"),e.inert=!0}function Mc(e){let t=Vt.get(e);!t||(t["aria-hidden"]===null?e.removeAttribute("aria-hidden"):e.setAttribute("aria-hidden",t["aria-hidden"]),e.inert=t.inert)}function Wm(e,t=!0){It(()=>{if(!t||!e.current)return;let n=e.current,r=ls(n);if(r){Tn.add(n);for(let o of Vt.keys())o.contains(n)&&(Mc(o),Vt.delete(o));return r.querySelectorAll("body > *").forEach(o=>{if(o instanceof HTMLElement){for(let i of Tn)if(o.contains(i))return;Tn.size===1&&(Vt.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),Oc(o))}}),()=>{if(Tn.delete(n),Tn.size>0)r.querySelectorAll("body > *").forEach(o=>{if(o instanceof HTMLElement&&!Vt.has(o)){for(let i of Tn)if(o.contains(i))return;Vt.set(o,{"aria-hidden":o.getAttribute("aria-hidden"),inert:o.inert}),Oc(o)}});else for(let o of Vt.keys())Mc(o),Vt.delete(o)}}},[t])}let kp=w.exports.createContext(!1);function Qm(){return w.exports.useContext(kp)}function Ka(e){return ge.createElement(kp.Provider,{value:e.force},e.children)}function bm(e){let t=Qm(),n=w.exports.useContext(Ep),r=al(e),[o,i]=w.exports.useState(()=>{if(!t&&n!==null||ol)return null;let l=r==null?void 0:r.getElementById("headlessui-portal-root");if(l)return l;if(r===null)return null;let a=r.createElement("div");return a.setAttribute("id","headlessui-portal-root"),r.body.appendChild(a)});return w.exports.useEffect(()=>{o!==null&&(r!=null&&r.body.contains(o)||r==null||r.body.appendChild(o))},[o,r]),w.exports.useEffect(()=>{t||n!==null&&i(n.current)},[n,i,t]),o}let Ym=w.exports.Fragment,Gm=nt(function(e,t){let n=e,r=w.exports.useRef(null),o=wt(Lm(f=>{r.current=f}),t),i=al(r),l=bm(r),[a]=w.exports.useState(()=>{var f;return ol?null:(f=i==null?void 0:i.createElement("div"))!=null?f:null}),u=ur(),s=w.exports.useRef(!1);return It(()=>{if(s.current=!1,!(!l||!a))return l.contains(a)||(a.setAttribute("data-headlessui-portal",""),l.appendChild(a)),()=>{s.current=!0,il(()=>{var f;!s.current||!l||!a||(l.removeChild(a),l.childNodes.length<=0&&((f=l.parentElement)==null||f.removeChild(l)))})}},[l,a]),u?!l||!a?null:ou.exports.createPortal(dt({ourProps:{ref:o},theirProps:n,defaultTag:Ym,name:"Portal"}),a):null}),Km=w.exports.Fragment,Ep=w.exports.createContext(null),Xm=nt(function(e,t){let{target:n,...r}=e,o={ref:wt(t)};return m(Ep.Provider,{value:n,children:dt({ourProps:o,theirProps:r,defaultTag:Km,name:"Popover.Group"})})}),Xa=Object.assign(Gm,{Group:Xm}),Cp=w.exports.createContext(null);function _p(){let e=w.exports.useContext(Cp);if(e===null){let t=new Error("You used a <Description /> component, but it is not inside a relevant parent.");throw Error.captureStackTrace&&Error.captureStackTrace(t,_p),t}return e}function qm(){let[e,t]=w.exports.useState([]);return[e.length>0?e.join(" "):void 0,w.exports.useMemo(()=>function(n){let r=je(i=>(t(l=>[...l,i]),()=>t(l=>{let a=l.slice(),u=a.indexOf(i);return u!==-1&&a.splice(u,1),a}))),o=w.exports.useMemo(()=>({register:r,slot:n.slot,name:n.name,props:n.props}),[r,n.slot,n.name,n.props]);return ge.createElement(Cp.Provider,{value:o},n.children)},[t])]}let Zm="p",Jm=nt(function(e,t){let n=_p(),r=`headlessui-description-${sr()}`,o=wt(t);It(()=>n.register(r),[r,n.register]);let i=e,l={ref:o,...n.props,id:r};return dt({ourProps:l,theirProps:i,slot:n.slot||{},defaultTag:Zm,name:n.name||"Description"})}),cs=w.exports.createContext(()=>{});cs.displayName="StackContext";var qa=(e=>(e[e.Add=0]="Add",e[e.Remove=1]="Remove",e))(qa||{});function eg(){return w.exports.useContext(cs)}function tg({children:e,onUpdate:t,type:n,element:r,enabled:o}){let i=eg(),l=je((...a)=>{t==null||t(...a),i(...a)});return It(()=>{let a=o===void 0||o===!0;return a&&l(0,n,r),()=>{a&&l(1,n,r)}},[l,n,r,o]),ge.createElement(cs.Provider,{value:l},e)}function ng(){return/iPhone/gi.test(window.navigator.platform)||/Mac/gi.test(window.navigator.platform)&&window.navigator.maxTouchPoints>0}var rg=(e=>(e[e.Open=0]="Open",e[e.Closed=1]="Closed",e))(rg||{}),og=(e=>(e[e.SetTitleId=0]="SetTitleId",e))(og||{});let ig={[0](e,t){return e.titleId===t.id?e:{...e,titleId:t.id}}},wi=w.exports.createContext(null);wi.displayName="DialogContext";function uo(e){let t=w.exports.useContext(wi);if(t===null){let n=new Error(`<${e} /> is missing a parent <Dialog /> component.`);throw Error.captureStackTrace&&Error.captureStackTrace(n,uo),n}return t}function lg(e,t){w.exports.useEffect(()=>{var n;if(!t||!e)return;let r=ao();function o(a,u,s){let f=a.style.getPropertyValue(u);return Object.assign(a.style,{[u]:s}),r.add(()=>{Object.assign(a.style,{[u]:f})})}let i=e.documentElement,l=((n=e.defaultView)!=null?n:window).innerWidth-i.clientWidth;if(o(i,"overflow","hidden"),l>0){let a=i.clientWidth-i.offsetWidth,u=l-a;o(i,"paddingRight",`${u}px`)}if(ng()){let a=window.pageYOffset;o(i,"position","fixed"),o(i,"marginTop",`-${a}px`),o(i,"width","100%"),r.add(()=>window.scrollTo(0,a))}return r.dispose},[e,t])}function ag(e,t){return Ce(t.type,ig,e,t)}let ug="div",sg=yi.RenderStrategy|yi.Static,cg=nt(function(e,t){let{open:n,onClose:r,initialFocus:o,__demoMode:i=!1,...l}=e,[a,u]=w.exports.useState(0),s=us();n===void 0&&s!==null&&(n=Ce(s,{[_n.Open]:!0,[_n.Closed]:!1}));let f=w.exports.useRef(new Set),p=w.exports.useRef(null),g=wt(p,t),k=w.exports.useRef(null),v=al(p),S=e.hasOwnProperty("open")||s!==null,P=e.hasOwnProperty("onClose");if(!S&&!P)throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");if(!S)throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");if(!P)throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");if(typeof n!="boolean")throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${n}`);if(typeof r!="function")throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${r}`);let d=n?0:1,[c,h]=w.exports.useReducer(ag,{titleId:null,descriptionId:null,panelRef:w.exports.createRef()}),x=je(()=>r(!1)),E=je(te=>h({type:0,id:te})),L=ur()?i?!1:d===0:!1,N=a>1,F=w.exports.useContext(wi)!==null,U=N?"parent":"leaf";Wm(p,N?L:!1),Nm(()=>{var te,J;return[...Array.from((te=v==null?void 0:v.querySelectorAll("body > *, [data-headlessui-portal]"))!=null?te:[]).filter(_=>!(!(_ instanceof HTMLElement)||_.contains(k.current)||c.panelRef.current&&_.contains(c.panelRef.current))),(J=c.panelRef.current)!=null?J:p.current]},x,L&&!N),ss(v==null?void 0:v.defaultView,"keydown",te=>{te.defaultPrevented||te.key===xp.Escape&&d===0&&(N||(te.preventDefault(),te.stopPropagation(),x()))}),lg(v,d===0&&!F),w.exports.useEffect(()=>{if(d!==0||!p.current)return;let te=new IntersectionObserver(J=>{for(let _ of J)_.boundingClientRect.x===0&&_.boundingClientRect.y===0&&_.boundingClientRect.width===0&&_.boundingClientRect.height===0&&x()});return te.observe(p.current),()=>te.disconnect()},[d,p,x]);let[D,re]=qm(),oe=`headlessui-dialog-${sr()}`,ue=w.exports.useMemo(()=>[{dialogState:d,close:x,setTitleId:E},c],[d,c,x,E]),ke=w.exports.useMemo(()=>({open:d===0}),[d]),ye={ref:g,id:oe,role:"dialog","aria-modal":d===0?!0:void 0,"aria-labelledby":c.titleId,"aria-describedby":D};return ge.createElement(tg,{type:"Dialog",enabled:d===0,element:p,onUpdate:je((te,J,_)=>{J==="Dialog"&&Ce(te,{[qa.Add](){f.current.add(_),u(j=>j+1)},[qa.Remove](){f.current.add(_),u(j=>j-1)}})})},m(Ka,{force:!0,children:m(Xa,{children:m(wi.Provider,{value:ue,children:m(Xa.Group,{target:p,children:m(Ka,{force:!1,children:m(re,{slot:ke,name:"Dialog.Description",children:m(wr,{initialFocus:o,containers:f,features:L?Ce(U,{parent:wr.features.RestoreFocus,leaf:wr.features.All&~wr.features.FocusLock}):wr.features.None,children:dt({ourProps:ye,theirProps:l,slot:ke,defaultTag:ug,features:sg,visible:d===0,name:"Dialog"})})})})})})})}),m(Ya,{features:xi.Hidden,ref:k}))}),dg="div",fg=nt(function(e,t){let[{dialogState:n,close:r}]=uo("Dialog.Overlay"),o=wt(t),i=`headlessui-dialog-overlay-${sr()}`,l=je(u=>{if(u.target===u.currentTarget){if(Am(u.currentTarget))return u.preventDefault();u.preventDefault(),u.stopPropagation(),r()}}),a=w.exports.useMemo(()=>({open:n===0}),[n]);return dt({ourProps:{ref:o,id:i,"aria-hidden":!0,onClick:l},theirProps:e,slot:a,defaultTag:dg,name:"Dialog.Overlay"})}),pg="div",hg=nt(function(e,t){let[{dialogState:n},r]=uo("Dialog.Backdrop"),o=wt(t),i=`headlessui-dialog-backdrop-${sr()}`;w.exports.useEffect(()=>{if(r.panelRef.current===null)throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")},[r.panelRef]);let l=w.exports.useMemo(()=>({open:n===0}),[n]);return m(Ka,{force:!0,children:m(Xa,{children:dt({ourProps:{ref:o,id:i,"aria-hidden":!0},theirProps:e,slot:l,defaultTag:pg,name:"Dialog.Backdrop"})})})}),mg="div",gg=nt(function(e,t){let[{dialogState:n},r]=uo("Dialog.Panel"),o=wt(t,r.panelRef),i=`headlessui-dialog-panel-${sr()}`,l=w.exports.useMemo(()=>({open:n===0}),[n]),a=je(u=>{u.stopPropagation()});return dt({ourProps:{ref:o,id:i,onClick:a},theirProps:e,slot:l,defaultTag:mg,name:"Dialog.Panel"})}),vg="h2",yg=nt(function(e,t){let[{dialogState:n,setTitleId:r}]=uo("Dialog.Title"),o=`headlessui-dialog-title-${sr()}`,i=wt(t);w.exports.useEffect(()=>(r(o),()=>r(null)),[o,r]);let l=w.exports.useMemo(()=>({open:n===0}),[n]);return dt({ourProps:{ref:i,id:o},theirProps:e,slot:l,defaultTag:vg,name:"Dialog.Title"})}),jc=Object.assign(cg,{Backdrop:hg,Panel:gg,Overlay:fg,Title:yg,Description:Jm});function xg(e){let t={called:!1};return(...n)=>{if(!t.called)return t.called=!0,e(...n)}}function Wl(e,...t){e&&t.length>0&&e.classList.add(...t)}function Ql(e,...t){e&&t.length>0&&e.classList.remove(...t)}var Za=(e=>(e.Ended="ended",e.Cancelled="cancelled",e))(Za||{});function wg(e,t){let n=ao();if(!e)return n.dispose;let{transitionDuration:r,transitionDelay:o}=getComputedStyle(e),[i,l]=[r,o].map(a=>{let[u=0]=a.split(",").filter(Boolean).map(s=>s.includes("ms")?parseFloat(s):parseFloat(s)*1e3).sort((s,f)=>f-s);return u});if(i+l!==0){let a=[];a.push(n.addEventListener(e,"transitionrun",u=>{u.target===u.currentTarget&&(a.splice(0).forEach(s=>s()),a.push(n.addEventListener(e,"transitionend",s=>{s.target===s.currentTarget&&(t("ended"),a.splice(0).forEach(f=>f()))}),n.addEventListener(e,"transitioncancel",s=>{s.target===s.currentTarget&&(t("cancelled"),a.splice(0).forEach(f=>f()))})))}))}else t("ended");return n.add(()=>t("cancelled")),n.dispose}function Sg(e,t,n,r){let o=n?"enter":"leave",i=ao(),l=r!==void 0?xg(r):()=>{};o==="enter"&&(e.removeAttribute("hidden"),e.style.display="");let a=Ce(o,{enter:()=>t.enter,leave:()=>t.leave}),u=Ce(o,{enter:()=>t.enterTo,leave:()=>t.leaveTo}),s=Ce(o,{enter:()=>t.enterFrom,leave:()=>t.leaveFrom});return Ql(e,...t.enter,...t.enterTo,...t.enterFrom,...t.leave,...t.leaveFrom,...t.leaveTo,...t.entered),Wl(e,...a,...s),i.nextFrame(()=>{Ql(e,...s),Wl(e,...u),wg(e,f=>(f==="ended"&&(Ql(e,...a),Wl(e,...t.entered)),l(f)))}),i.dispose}function kg({container:e,direction:t,classes:n,onStart:r,onStop:o}){let i=ll(),l=hp(),a=At(t);It(()=>{let u=ao();l.add(u.dispose);let s=e.current;if(!!s&&a.current!=="idle"&&!!i.current)return u.dispose(),r.current(a.current),u.add(Sg(s,n.current,a.current==="enter",f=>{u.dispose(),Ce(f,{[Za.Ended](){o.current(a.current)},[Za.Cancelled]:()=>{}})})),u.dispose},[t])}function fn(e=""){return e.split(" ").filter(t=>t.trim().length>1)}let ul=w.exports.createContext(null);ul.displayName="TransitionContext";var Eg=(e=>(e.Visible="visible",e.Hidden="hidden",e))(Eg||{});function Cg(){let e=w.exports.useContext(ul);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}function _g(){let e=w.exports.useContext(sl);if(e===null)throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");return e}let sl=w.exports.createContext(null);sl.displayName="NestingContext";function cl(e){return"children"in e?cl(e.children):e.current.filter(({el:t})=>t.current!==null).filter(({state:t})=>t==="visible").length>0}function Pp(e,t){let n=At(e),r=w.exports.useRef([]),o=ll(),i=hp(),l=je((k,v=Lt.Hidden)=>{let S=r.current.findIndex(({el:P})=>P===k);S!==-1&&(Ce(v,{[Lt.Unmount](){r.current.splice(S,1)},[Lt.Hidden](){r.current[S].state="hidden"}}),i.microTask(()=>{var P;!cl(r)&&o.current&&((P=n.current)==null||P.call(n))}))}),a=je(k=>{let v=r.current.find(({el:S})=>S===k);return v?v.state!=="visible"&&(v.state="visible"):r.current.push({el:k,state:"visible"}),()=>l(k,Lt.Unmount)}),u=w.exports.useRef([]),s=w.exports.useRef(Promise.resolve()),f=w.exports.useRef({enter:[],leave:[],idle:[]}),p=je((k,v,S)=>{u.current.splice(0),t&&(t.chains.current[v]=t.chains.current[v].filter(([P])=>P!==k)),t==null||t.chains.current[v].push([k,new Promise(P=>{u.current.push(P)})]),t==null||t.chains.current[v].push([k,new Promise(P=>{Promise.all(f.current[v].map(([d,c])=>c)).then(()=>P())})]),v==="enter"?s.current=s.current.then(()=>t==null?void 0:t.wait.current).then(()=>S(v)):S(v)}),g=je((k,v,S)=>{Promise.all(f.current[v].splice(0).map(([P,d])=>d)).then(()=>{var P;(P=u.current.shift())==null||P()}).then(()=>S(v))});return w.exports.useMemo(()=>({children:r,register:a,unregister:l,onStart:p,onStop:g,wait:s,chains:f}),[a,l,r,p,g,f,s])}function Pg(){}let zg=["beforeEnter","afterEnter","beforeLeave","afterLeave"];function Dc(e){var t;let n={};for(let r of zg)n[r]=(t=e[r])!=null?t:Pg;return n}function $g(e){let t=w.exports.useRef(Dc(e));return w.exports.useEffect(()=>{t.current=Dc(e)},[e]),t}let Tg="div",zp=yi.RenderStrategy,$p=nt(function(e,t){let{beforeEnter:n,afterEnter:r,beforeLeave:o,afterLeave:i,enter:l,enterFrom:a,enterTo:u,entered:s,leave:f,leaveFrom:p,leaveTo:g,...k}=e,v=w.exports.useRef(null),S=wt(v,t),P=k.unmount?Lt.Unmount:Lt.Hidden,{show:d,appear:c,initial:h}=Cg(),[x,E]=w.exports.useState(d?"visible":"hidden"),L=_g(),{register:N,unregister:F}=L,U=w.exports.useRef(null);w.exports.useEffect(()=>N(v),[N,v]),w.exports.useEffect(()=>{if(P===Lt.Hidden&&!!v.current){if(d&&x!=="visible"){E("visible");return}return Ce(x,{hidden:()=>F(v),visible:()=>N(v)})}},[x,v,N,F,d,P]);let D=At({enter:fn(l),enterFrom:fn(a),enterTo:fn(u),entered:fn(s),leave:fn(f),leaveFrom:fn(p),leaveTo:fn(g)}),re=$g({beforeEnter:n,afterEnter:r,beforeLeave:o,afterLeave:i}),oe=ur();w.exports.useEffect(()=>{if(oe&&x==="visible"&&v.current===null)throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")},[v,x,oe]);let ue=h&&!c,ke=(()=>!oe||ue||U.current===d?"idle":d?"enter":"leave")(),ye=je(M=>Ce(M,{enter:()=>re.current.beforeEnter(),leave:()=>re.current.beforeLeave(),idle:()=>{}})),te=je(M=>Ce(M,{enter:()=>re.current.afterEnter(),leave:()=>re.current.afterLeave(),idle:()=>{}})),J=Pp(()=>{E("hidden"),F(v)},L);kg({container:v,classes:D,direction:ke,onStart:At(M=>{J.onStart(v,M,ye)}),onStop:At(M=>{J.onStop(v,M,te),M==="leave"&&!cl(J)&&(E("hidden"),F(v))})}),w.exports.useEffect(()=>{!ue||(P===Lt.Hidden?U.current=null:U.current=d)},[d,ue,x]);let _=k,j={ref:S};return m(sl.Provider,{value:J,children:m(Mm,{value:Ce(x,{visible:_n.Open,hidden:_n.Closed}),children:dt({ourProps:j,theirProps:_,defaultTag:Tg,features:zp,visible:x==="visible",name:"Transition.Child"})})})}),Ja=nt(function(e,t){let{show:n,appear:r=!1,unmount:o,...i}=e,l=w.exports.useRef(null),a=wt(l,t);ur();let u=us();if(n===void 0&&u!==null&&(n=Ce(u,{[_n.Open]:!0,[_n.Closed]:!1})),![!0,!1].includes(n))throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");let[s,f]=w.exports.useState(n?"visible":"hidden"),p=Pp(()=>{f("hidden")}),[g,k]=w.exports.useState(!0),v=w.exports.useRef([n]);It(()=>{g!==!1&&v.current[v.current.length-1]!==n&&(v.current.push(n),k(!1))},[v,n]);let S=w.exports.useMemo(()=>({show:n,appear:r,initial:g}),[n,r,g]);w.exports.useEffect(()=>{if(n)f("visible");else if(!cl(p))f("hidden");else{let d=l.current;if(!d)return;let c=d.getBoundingClientRect();c.x===0&&c.y===0&&c.width===0&&c.height===0&&f("hidden")}},[n,p]);let P={unmount:o};return m(sl.Provider,{value:p,children:m(ul.Provider,{value:S,children:dt({ourProps:{...P,as:w.exports.Fragment,children:ge.createElement($p,{ref:a,...P,...i})},theirProps:{},defaultTag:w.exports.Fragment,features:zp,visible:s==="visible",name:"Transition"})})})}),Ng=nt(function(e,t){let n=w.exports.useContext(ul)!==null,r=us()!==null;return m(nm,{children:!n&&r?ge.createElement(Ja,{ref:t,...e}):ge.createElement($p,{ref:t,...e})})}),bl=Object.assign(Ja,{Child:Ng,Root:Ja});const Lg=ct.video`
    width: 100%;
    max-height: 500px;
    margin-top: 60px;
    padding: 20px;

    object-fit: cover;

    @media only screen and (min-width: 425px) {
      min-width: 380px;
    }

    @media only screen and (min-width: 540px) {
      min-width: 500px;
    }

    @media only screen and (min-width: 768px) {
      min-width: 600px;
      margin-top: 80px;
    }
`;function Fg({openModal:e,handleClose:t}){const[n,r]=w.exports.useState(!1);w.exports.useEffect(()=>{r(e),t(e)});const o=()=>{r(!1),t(!1)},i=w.exports.useRef(null);return m(bl.Root,{show:n,as:w.exports.Fragment,children:z(jc,{as:"div",className:"relative z-10",initialFocus:i,onClose:o,children:[m(bl.Child,{as:w.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:m("div",{className:"fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"})}),m("div",{className:"fixed inset-0 z-10 overflow-y-auto",children:m("div",{className:"flex min-h-full justify-center text-center",children:m(bl.Child,{as:w.exports.Fragment,enter:"ease-out duration-300",enterFrom:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",enterTo:"opacity-100 translate-y-0 sm:scale-100",leave:"ease-in duration-200",leaveFrom:"opacity-100 translate-y-0 sm:scale-100",leaveTo:"opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95",children:z(jc.Panel,{className:"relative transform overflow-hidden transition-all",children:[z("div",{onClick:o,style:{position:"absolute",top:"32px",right:"20px",display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",cursor:"pointer",color:"white",fontSize:"14px"},children:[m(um,{style:{marginRight:"4px"}}),"CERRAR"]}),m(Lg,{controls:!0})]})})})})]})})}const Ag=ct.main`
    width: 100%;
    padding: 180px 20px 60px 20px;

    display: flex;
    flex-direction: column;

    background-color: rgba(0, 0, 0, 0.440);
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-blend-mode: multiply;

    & h6 {
        width: max-content;
        height: max-content;
        padding: 6px 12px;

        background-color: #ffffff16;
        border-radius: 40px;

        color: white;
        font-size: 16px;
        font-weight: 500;
    }

    & h1 {
        margin: 10px 0 14px 0;
        color: white;
        font-size: 42px;
        line-height: 48px;
        font-weight: 400;
    }

    & p {
        margin-bottom: 24px;

        color: white;
        font-size: 20px;
        line-height: 28px;
        font-weight: 300;
    }

    & div {
        display: flex;
        flex-direction: row;
        align-items: center;

        & a {
            width: max-content;
            height: 54px;
            padding: 0 28px;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            background-color: white;
            border: 1px solid white;
            border-radius: 40px;
            outline: none;
            cursor: pointer;
            transition: all .6s;

            color: black;
            font-size: 18px;
            font-weight: 500;
            text-decoration: none;

            & svg {
                margin-left: 16px;

                transition: all .6s;

                color: black;
                font-size: 18px;
            }

            &:hover {
                background-color: transparent;

                color: white;

                & svg {
                    color: white;
                }
            }
        }

        & button {
            width: 54px;
            height: 54px;
            margin-left: 18px;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            background-color: transparent;
            border: 1px solid white;
            border-radius: 50%;
            cursor: pointer;
            transition: all .6s;

            & svg {
                color: white;
                font-size: 24px;
            }

            &:hover {
                background-color: white;

                & svg {
                    color: black;
                }
            }
        }
    }

    @media only screen and (min-width: 425px) {
        & h1 {
            font-size: 44px;
            line-height: 54px;
        }
    }

    @media only screen and (min-width: 540px) {
        & h1 {
            width: 84%
        }

        & p {
            width: 70%;
        }
    }

    @media only screen and (min-width: 768px) {
        padding: 180px 20px 80px 20px;  

        & h1 {
            width: 60%;

            font-size: 48px;
            line-height: 58px;
        }

        & p {
            width: 50%;
        }

    }

    @media only screen and (min-width: 1024px) {        
        & h1 {
            width: 50%;

            font-size: 52px;
            line-height: 62px;
        }

        & p {
            width: 40%;

            font-size: 22px;
            line-height: 32px;
        }
    }

    @media only screen and (min-width: 1200px) {
        padding: 200px 200px 80px 200px;   
    }
`;function Rg(){const[e,t]=w.exports.useState(!1);return z(Ag,{id:"home",children:[m("h6",{children:"Sol Home"}),z("h1",{children:["Fabricantes de ",m("strong",{children:"micro viviendas"})," modulares."]}),m("p",{children:"Calidad, rapidez y confort al alcance de tus manos."}),z("div",{children:[z("a",{href:"#contacto",children:["Conoce m\xE1s ",m(is,{})]}),m("button",{onClick:()=>{t(!0)},children:m(xm,{})})]}),m(Fg,{handleClose:o=>{t(o)},openModal:e})]})}const Tp="/ManuelChomer/assets/image3.9a5fbf02.jpg",Og="/ManuelChomer/assets/image1.f4d06093.jpg",Mg="/ManuelChomer/assets/image2.98e3056c.jpg",jg="/ManuelChomer/assets/image4.f7a2c849.jpg",Dg="/ManuelChomer/assets/image5.b47d3f7d.jpg",Ig="/ManuelChomer/assets/image6.6648be0c.jpg",Bg="/ManuelChomer/assets/image7.b7026c60.jpg",Sr=[Og,Mg,Tp,jg,Dg,Ig,Bg],Hg=ct.div`
    position: relative;

    width: 100%;
    height: max-content;


    & button {
        position: absolute;
        bottom: -30px;
        z-index: 1;
        
        &:first-child {
            left: 0;
        }

        &:last-child {
            left: 60px;
        }

        min-width: 60px !important;
        height: 60px !important;

        display: flex;
        align-items: center;
        justify-content: center;

        background-color: var(--colorPrincipal);
        border: none;
        border-radius: 0;
        outline: none;
        cursor: pointer;
        transition: all .6s;

        & svg {
            color: white;
            font-size: 20px;
        }

        &:hover {
            opacity: .6;
        }
    }

    & div {
        max-width: 100%;
        height: auto;
        opacity: 0;
        transition: opacity .8s ease-in-out;

        &.active {
            opacity: 1;
        }

        & img {
            width: 100%;
            height: 420px;
            object-fit: cover;
        }
    }
`;function Ug(){const[e,t]=w.exports.useState(0),n=Sr==null?void 0:Sr.length;if(!Array.isArray(Sr)||n===0)return;const r=()=>{t(e===n-1?0:e+1)};return z(Hg,{children:[m("button",{onClick:()=>{t(e===0?n-1:e-1)},children:m(gm,{})}),Sr.map((i,l)=>m("div",{className:e===l?"active":"",children:e===l&&m("img",{src:i,alt:"Galer\xEDa de fotos - Sol Home"})},l)),m("button",{onClick:r,children:m(vm,{})})]})}const Vg=ct.div`
    width: 100%;
    min-height: max-content;
    margin: 100px 0 40px 0;
    padding: 0 20px;
    padding-bottom: 40px !important;

    display: flex;
    flex-direction: column;

    & img {
        width: 100%;
        height: 400px;

        object-fit: cover;
    }

    & div {
        margin-bottom: 60px;

        & h6 {
            width: max-content;
            height: max-content;
            margin-bottom: 12px;
            padding: 6px 12px;

            background-color: var(--colorRGBA);
            border-radius: 40px;

            color:  var(--colorPrincipal);
            font-size: 16px;
            font-weight: 500;
        }

        & h3 {
            color: black;
            font-size: 40px;
            line-height: 50px;
            font-weight: 400;
        }

        & h4 {
            margin-top: 12px;

            color: black;
            font-size: 18px;
            line-height: 28px;
            font-weight: 300;
        }

        & div {
            margin: 24px 0;

            & p {
                margin-bottom: 8px;

                &:last-child {
                    margin-bottom: 0;
                }

                display: flex;
                flex-direction: row;

                color: #838383;
                font-size: 18px;
                line-height: 28px;
                font-weight: 300;

                & span {
                    min-width: 18px;
                    min-height: 18px;
                    max-width: 18px;
                    max-height: 18px;
                    margin-top: 4px;
                    margin-right: 24px;

                    display: flex;
                    align-items: center;
                    justify-content: center;

                    border: 1px solid  #48da48;
                    border-radius: 50%;
                    
                    & svg {
                        color:  #48da48;
                        font-size: 12px;
                    }
                }
            }
        }

        & a {
            width: max-content;
            height: 54px;
            padding: 0 28px;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            background-color: var(--colorPrincipal);
            border-radius: 40px;
            transition: all .6s;

            color: white;
            font-size: 18px;
            font-weight: 400;
            text-decoration: none;

            & svg {
                margin-left: 16px;

                font-size: 22px;
            }

            &:hover {
                opacity: .7;

                color: white;
            }
        }
    }

    @media only screen and (min-width: 768px) {
       & img {
        height: 420px;
       }

        & div {
            & h3 {
                width: 50%;

                font-size: 48px;
                line-height: 58px;
            }

            & div {
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: space-between;

                & p {
                    width: 49%;
                    margin-bottom: 12px;

                    & span {
                        margin-right: 10px;
                    }
                }
            }
        }       
    }

    @media only screen and (min-width: 1024px) {       
       flex-direction: row;
       justify-content: space-between;

       & img {
        width: 45%;
        height: 660px;
       }

       & div {
        width: 45%;

        & h3 {
            width: 90%;

            font-size: 44px;
            line-height: 54px;
        }

        & div {
            width: 100%;
        }
       }
    }

    @media only screen and (min-width: 1200px) {  
        padding: 0 200px;

        & img {
            height: 700px;
        }

        & div {
            & h3 {
                width: 80%;
            }
        }
    }
`,Wg=ct.div`
    width: 100%;
    height: max-content;
    margin-bottom: 40px;
    padding: 80px 20px;

    border-top: 1px solid gainsboro;

    & span {
        & h6 {
            width: max-content;
            height: max-content;
            margin-bottom: 12px;
            padding: 6px 12px;

            background-color: var(--colorRGBA);
            border-radius: 40px;

            color:  var(--colorPrincipal);
            font-size: 16px;
            font-weight: 500;
        }

        & h3 {
            margin-bottom: 60px;

            color: black;
            font-size: 40px;
            line-height: 50px;
            font-weight: 500;
        }
    }

    @media only screen and (min-width: 768px)  {       
        & span {
            & h3 {
                width: 54%;

                font-size: 48px;
                line-height: 58px;
            }
        }
    }

    @media only screen and (min-width: 1024px) {
        padding: 80px 20px;

        & span {
            padding: 0;

            & h3 {
                width: 60%;
            }
        }
    }

    @media only screen and (min-width: 1200px) {       
        padding: 80px 200px;
    }
`;function Qg(){return z("div",{children:[z(Vg,{id:"productos",children:[z("div",{children:[m("h6",{children:"Productos"}),z("h3",{children:["Conoce nuestra ",m("strong",{children:"micro vivienda"}),"."]}),m("h4",{children:"La micro vivienda Sol Home es una unidad monol\xEDtica completa, que cumple con todas las especificaciones y necesidades de habitabilidad, seguridad, comodidad y confort habitacional."}),z("div",{children:[z("p",{children:[m("span",{children:m(No,{})}),"Los modulos cuentan con aproximamente 26 m2."]}),z("p",{children:[m("span",{children:m(No,{})}),"Tienen un tiempo estimado de fabricaci\xF3n de apenas 30 d\xEDas."]}),z("p",{children:[m("span",{children:m(No,{})}),"Ofrecen una soluci\xF3n creativa y moderna a las necesidades habitacionales, logrando un \xF3ptimo uso del espacio con el que se cuenta."]}),z("p",{children:[m("span",{children:m(No,{})}),"Un hogar confortable y funcional para sus necesidades, con lo m\xE1s elemental sin sacrificar su comodidad."]})]}),z("a",{href:"/",target:"_blank",rel:"noopener noreferrer",children:["Brochure ",m(fp,{})]})]}),m("img",{src:Tp,alt:"Sol Home - Micro Viviendas"})]}),z(Wg,{id:"galeria",children:[z("span",{children:[m("h6",{children:"Galer\xEDa"}),z("h3",{children:["No son simples casas. Son mini casas ",m("strong",{children:"Sol Home"}),"."]})]}),m(Ug,{})]})]})}const bg=ct.div`
    width: 100%;
    padding: 80px 20px;

    display: flex;
    flex-direction: column;

    background-color: black;

    & h6 {
        width: max-content;
        height: max-content;
        margin-bottom: 12px;
        padding: 6px 12px;

        background-color: var(--colorRGBA);
        border-radius: 40px;

        color:  var(--colorPrincipal);
        font-size: 16px;
        font-weight: 500;
    }

    & h3 {
        color: white;
        font-size: 40px;
        line-height: 50px;
        font-weight: 400;

        & span {
            text-decoration: underline;
        }
    }

    & div {
        width: 100%;
        margin-top: 40px;

        display: flex;
        flex-direction: column;

        & div {
            display: flex;
            flex-direction: column;
            margin-top: 24px;
            padding-bottom: 24px;

            border-bottom: 1px solid #ffffff45;

            &:last-child {
                margin-bottom: 0;
                padding-bottom: 0;

                border-bottom: none;
            }

            & div {
                margin: 0;
                padding: 0;

                display: flex;
                flex-direction: row;
                align-items: center;

                border: none;

                & svg {
                    color: var(--colorPrincipal);
                    font-size: 32px;
                }

                & h4 {
                    width: 100%;
                    margin-left: 28px;

                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;

                    color: white;
                    font-size: 24px;
                    font-weight: 400;

                    & svg {
                        color: gainsboro;
                        font-size: 18px;
                    }
                }
            }

            & p {
                height: 0;

                visibility: hidden;

                color: gainsboro;
                font-size: 18px;
                line-height: 28px;
                font-weight: 300;
            }

            &.active {
                & div {
                    & h4 {
                        & svg {
                            transform: rotate(180deg);
                        }
                    }
                }

                & p { 
                    height: max-content;
                    margin-top: 20px;
                    
                    visibility: visible;
                }
            }
        }
    }

    @media only screen and (min-width: 768px) {
        & h3 {
            width: 60%;

            font-size: 44px;
            line-height: 54px;
        }

        .BenefitsContainer {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;

            .BenefitsBox {
                width: 45%;

                &:last-child {
                    padding-bottom: 24px;
                    
                    border-bottom: 1px solid #ffffff45;
                }
            }
        }
    }

    @media only screen and (min-width: 1024px) {
        padding: 100px 20px;

        & h3 {
            width: 50%;

            font-size: 48px;
            line-height: 58px;
        }
    }

    @media only screen and (min-width: 1200px) {
        padding: 100px 200px;

        & h3 {
            width: 70%;
            
            font-size: 50px;
            line-height: 60px;
        }
    }
`;function Yg(){const e=t=>{document.querySelectorAll(".BenefitsContainer .BenefitsBox").forEach(n=>{n==t.target.parentNode.parentNode?n.classList.toggle("active"):n.classList.remove("active")})};return z(bg,{id:"beneficios",children:[m("h6",{children:"Beneficios"}),z("h3",{children:["Sol Home te ofrece una soluci\xF3n ",m("span",{children:"\xFAnica"}),"."]}),z("div",{className:"BenefitsContainer",children:[z("div",{className:"BenefitsBox",children:[z("div",{children:[m(mm,{}),z("h4",{onClick:e,children:["Calidad",m(Ut,{})]})]}),m("p",{children:"Construcci\xF3n de m\xF3dulos con sistemas Steel Framing. Agregar conceptos de durabilidad."})]}),z("div",{className:"BenefitsBox",children:[z("div",{children:[m(dm,{}),z("h4",{onClick:e,children:["Rapidez",m(Ut,{})]})]}),m("p",{children:"El modulo se fabrica en solamente 30 dias, siendo la empresa N\xB01 en este aspecto en el mercado."})]}),z("div",{className:"BenefitsBox",children:[z("div",{children:[m(sm,{}),z("h4",{onClick:e,children:["Llave en mano & 100% equipado",m(Ut,{})]})]}),m("p",{children:"El Modulo se entrega completamente equipado, listo para ser habitado. Viene con electrodom\xE9sticos como heladera, TV Smart 32\u2019, aire acondicionado, microondas y horno. Adem\xE1s, viene completo en muebler\xEDa de primera calidad y alto dise\xF1o."})]}),z("div",{className:"BenefitsBox",children:[z("div",{children:[m(cm,{}),z("h4",{onClick:e,children:["Economico",m(Ut,{})]})]}),m("p",{children:"Una de las virtudes de estas novedosas viviendas es que tiene costos m\xE1s bajos de los que se encuentran en el mercado, ofreciendo una oportunidad para pensar creativamente una soluci\xF3n que sea econ\xF3mica."})]}),z("div",{className:"BenefitsBox",children:[z("div",{children:[m(km,{}),z("h4",{onClick:e,children:["Ampliable",m(Ut,{})]})]}),m("p",{children:"Es una construcci\xF3n ver vers\xE1til, siempre se podr\xE1 ampliar con nuevos m\xF3dulos, por lo que se puede empezar con un proyecto peque\xF1o y luego planificar nuevos anexos."})]}),z("div",{className:"BenefitsBox",children:[z("div",{children:[m(wm,{}),z("h4",{onClick:e,children:["Excelente aislamiento",m(Ut,{})]})]}),m("p",{children:"Cuenta con termo paneles compuesto de aislaci\xF3n de espuma de poliuretano expandido de 50 mm en todas sus caras, otorgando un gran aislamiento t\xE9rmico siendo muy \xFAtil para zonas de fr\xEDo, calor y vientos extremos."})]}),z("div",{className:"BenefitsBox",children:[z("div",{children:[m(Sm,{}),z("h4",{onClick:e,children:["Transportable",m(Ut,{})]})]}),m("p",{children:"Estos m\xF3dulos se caracterizan por ser movibles, asentandose sobre pilotes, siendo f\xE1cil de transportar y de instalar."})]}),z("div",{className:"BenefitsBox",children:[z("div",{children:[m(hm,{}),z("h4",{onClick:e,children:["Confort",m(Ut,{})]})]}),m("p",{children:"Est\xE1n dise\xF1adas para lograr un \xF3ptimo uso del espacio con el que se cuenta, siendo una soluci\xF3n creativa y moderna a las necesidades habitacionales de aquellos que quieren vivir con lo m\xE1s elemental sin sacrificar su comodidad."})]})]})]})}const Gg="/ManuelChomer/assets/main.4f3a63b1.jpg",Kg=ct.div`
    width: 100%;
    height: max-content;
    padding: 80px 20px;

    display: flex;
    flex-direction: column-reverse;

    & div:first-child {
        width: 100%;
        height: 360px;
        margin-top: 60px;
        
        & img {
            width: 100%;
            height: 100%;

            object-fit: cover;
        }
    }

    & div:last-child {
        & h6 {
            width: max-content;
            height: max-content;
            margin-bottom: 12px;
            padding: 6px 12px;

            background-color: var(--colorRGBA);
            border-radius: 40px;

            color:  var(--colorPrincipal);
            font-size: 16px;
            font-weight: 500;
        }

        & h3 {
            color: black;
            font-size: 40px;
            line-height: 50px;
            font-weight: 400;
        }

        & p {
            margin: 20px 0 30px 0;

            color: #838383;
            font-size: 18px;
            line-height: 28px;
            font-weight: 300;
        }

        & a {
            width: max-content;
            height: 54px;
            padding: 0 28px;

            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;

            background-color: var(--colorPrincipal);
            border-radius: 40px;
            transition: all .6s;

            color: white;
            font-size: 18px;
            font-weight: 400;
            text-decoration: none;

            & svg {
                margin-left: 16px;
            }

            &:hover {
                opacity: .7;

                color: white;
            }
        }
    }

    @media only screen and (min-width: 768px) {
        padding: 80px 20px 0 20px;
    }

    @media only screen and (min-width: 1024px) {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        & div:first-child {
            width: 45%;
            height: 500px;
            margin-top: 0;
        }

        & div:last-child {
            width: 45%;
        }
    }

    @media only screen and (min-width: 1200px) {
        padding: 80px 200px 0 200px;
    }
`;function Xg(){return z(Kg,{id:"compania",children:[m("div",{children:m("img",{src:Gg,alt:"Sol Home - Micro Viviendas"})}),z("div",{children:[m("h6",{children:"Compa\xF1\xEDa"}),z("h3",{children:["Tu empresa de ",m("strong",{children:"confianza"}),"."]}),z("p",{children:["Sol Home es una empresa dedicada a la fabricaci\xF3n y comercializaci\xF3n de Micro Viviendas modulares, las cuales se caracterizan por su alta calidad de estructura y dise\xF1o, y por su poco tiempo de fabricaci\xF3n. ",m("br",{}),m("br",{}),"Dedicados toda la vida a la construcci\xF3n, comenzamos esta nueva etapa con el deseo de abastecer espacios habitacionales \xF3ptimos para vivir y disfrutar."]}),z("a",{href:"#contacto",children:["Conoce m\xE1s ",m(is,{})]})]})]})}const qg=ct.div`
    width: 100%;
    height: max-content;
    padding: 40px 20px;

    background-color: var(--colorPrincipal);

    & div {
      display: flex;
      flex-direction: column;

      & span {
        margin-bottom: 24px;

        display: flex;
        flex-direction: column;

        & h4 {
          color: white;
          font-size: 32px;
          line-height: 42px;
          font-weight: 500;
        }

        & p {
          margin-top: 20px;

          color: white;
          font-size: 18px;
          line-height: 28px;
          font-weight: 300;
        }
      }

      & a {
        width: max-content;
        height: 54px;
        padding: 0 28px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;

        background-color: white;
        border-radius: 40px;
        transition: all .6s;

        color: var(--colorPrincipal);
        font-size: 18px;
        font-weight: 500;
        text-decoration: none;

        & svg {
          margin-left: 16px;
        }

        &:hover {
          opacity: .7;
          
          color: var(--colorPrincipal);
        }
      }
    }

    @media only screen and (min-width: 768px) {
      padding: 100px 20px;

      background-color: white;

      & div {
        padding: 40px 20px;

        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-between;

        background-color: var(--colorPrincipal);

        & span {
          width: 70%;
          margin-bottom: 0;

          text-align: left;
        }

        & a {
          height: 64px;
          padding: 0 32px;
        }
      }
    }

    @media only screen and (min-width: 1024px) {
      & div {
        & span {
          & h4 {
            font-size: 40px;
            line-height: 50px;
          }

          & p {
            font-size: 20px;
            line-height: 30px;
          }
        }

        & a {
          padding: 0 40px;

          font-size: 20px;
        }
      }
    }

    @media only screen and (min-width: 1200px) {
      padding: 100px 200px;
      
      & div {
        padding: 40px;
      }
    }
`;function Zg(){return m(qg,{children:z("div",{children:[z("span",{children:[m("h4",{children:"Conoce m\xE1s nuestras micro viviendas"}),m("p",{children:"Descargate nuestro brochure para enterarte de todos los detalles y sacarte todas tus dudas."})]}),z("a",{href:"/",target:"_blank",rel:"noopener noreferrer",children:["Descargar ",m(fp,{})]})]})})}const eo={_origin:"https://api.emailjs.com"},Jg=(e,t="https://api.emailjs.com")=>{eo._userID=e,eo._origin=t},Np=(e,t,n)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Ic{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const Lp=(e,t,n={})=>new Promise((r,o)=>{const i=new XMLHttpRequest;i.addEventListener("load",({target:l})=>{const a=new Ic(l);a.status===200||a.text==="OK"?r(a):o(a)}),i.addEventListener("error",({target:l})=>{o(new Ic(l))}),i.open("POST",eo._origin+e,!0),Object.keys(n).forEach(l=>{i.setRequestHeader(l,n[l])}),i.send(t)}),ev=(e,t,n,r)=>{const o=r||eo._userID;Np(o,e,t);const i={lib_version:"3.10.0",user_id:o,service_id:e,template_id:t,template_params:n};return Lp("/api/v1.0/email/send",JSON.stringify(i),{"Content-type":"application/json"})},tv=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},nv=(e,t,n,r)=>{const o=r||eo._userID,i=tv(n);Np(o,e,t);const l=new FormData(i);return l.append("lib_version","3.10.0"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",o),Lp("/api/v1.0/email/send-form",l)},rv={init:Jg,send:ev,sendForm:nv},ov=ct.div`
    width: 100%;
    height: max-content;
    padding: 80px 20px;

    display: flex;
    flex-direction: column;

    background-color: white;
    border-top: 1px solid gainsboro;

    & h6 {
        width: max-content;
        height: max-content;
        margin-bottom: 12px;
        padding: 6px 12px;

        background-color: var(--colorRGBA);
        border-radius: 40px;

        color:  var(--colorPrincipal);
        font-size: 16px;
        font-weight: 500;
    }

    & h2 {
        color: black;
        font-size: 42px;
        line-height: 52px;
        font-weight: 500;
    }

    & p {
        margin-top: 20px;

        transition: all .6s;

        color: gray;
        font-size: 18px;
        line-height: 28px;
        font-weight: 300;
    }

    & span {
        margin-top: 20px;

        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        align-items: center;

        & a {
            width: max-content;
            height: 48px;
            margin: 4px;
            padding: 0 20px;

            display: flex;
            align-items: center;
            justify-content: center;

            border-radius: 40px;

            color: white;
            font-size: 18px;
            font-weight: 500;
            text-decoration: none;

            & svg {
                margin-right: 8px;
            }

            &:first-child {
                background-color: #48da48;
            }

            &:nth-child(2n) {
                background-color: #d13d3d;
            }

            &:nth-child(3n) {
                background-color: #480861;
            }

            &:last-child {
                background-color: #e68647;
            }
        }
    }

    & form {
        width: 100%;
        height: max-content;
        margin-top: 60px;

        display: flex;
        flex-direction: column;

        & label {
            color: black;
            font-size: 16px;
            font-weight: 300;
        }

        & input,
        & textarea,
        & button {
            width: 100%;
            height: 54px;
            margin-top: 6px;
            margin-bottom: 20px;
            padding: 0 20px;

            background-color: white;
            border: 1px solid #b9b9b9;
            border-radius: 2px;
            outline: none;
            cursor: pointer;
            transition: all .6s;

            color: black;
            font-size: 16px;
            font-weight: 300;

            &::placeholder {
                color: gray;
            }
        }

        & textarea {
            height: 140px;
            padding-top: 20px;
        }

        & input,
        & textarea {
            &:out-of-range {
                border-color: red;
            }

            &:focus {
                &:invalid {
                    border-color: red;
                }
            }

            &:in-range,
            &:not(:empty),
            &:valid {
                border-color: #48da48;
            }
        }

        & div.InputRadioDiv {
            margin-bottom: 20px;
            display: flex;
            flex-direction: column;

            & div {
                & div {
                    margin-top: 8px;

                    display: flex;
                    flex-direction: row;
                    align-items: center;

                    & label {
                        color: #838383;
                        font-size: 16px;
                    }

                    & input {
                        width: 18px;
                        height: 18px;
                        margin: 0;
                        margin-right: 6px;
                    }
                }
            }
        }

        & button {
            width: max-content;
            margin-top: 0;
            margin-bottom: 0;
            padding: 0 40px;

            background-color: var(--colorPrincipal);
            border-color: var(--colorPrincipal);
            border-radius: 40px;

            color: white;
            font-size: 18px;
            font-weight: 400;

            &:hover {
                opacity: .7;

                color: white;
            }

            &.sendMail {
                background-color: #48da48;
                border-color: #48da48;
            }
        }
    }

    @media only screen and (min-width: 425px) {
        & h2 {
            width: 95%;
        }
    }

    @media only screen and (min-width: 540px) {
        & h2 {
            width: 80%;

            font-size: 48px;
            line-height: 58px;
        }
    }

    @media only screen and (min-width: 768px) {
        & h2 {
            width: 60%;

            font-size: 50px;
            line-height: 60px;
        }

        & form {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;

            & div {
                width: 48%;

                display: flex;
                flex-direction: column;

                &.TextAreaDiv {
                    width: 100%;
                }
            }
        }
    }

    @media only screen and (min-width: 1024px) {
        & h2 {
            width: 50%;

            font-size: 52px;
            line-height: 62px;
        }
    }    

    @media only screen and (min-width: 1200px) {
        padding: 80px 200px;  
    }
`;function iv(){const e=w.exports.useRef();return z(ov,{id:"contacto",children:[m("h6",{children:"Contacto"}),m("h2",{children:"Coordina tu visita en Sol Home."}),m("p",{children:"Te invitamos a conocer tu pr\xF3xima vivienda para comprobar la alta calidad constructiva. Contactanos en cualquiera de nuestros medios de comunicaci\xF3n o llena el siguiente formulario y nuestro equipo se pondra en contacto con vos para responder todas tus dudas."}),z("span",{children:[z("a",{href:"https://api.whatsapp.com/send?phone=+5491141403663&text=\xA1Hola%20Sol%20Home!%20Quiero%20m\xE1s%20informaci\xF3n%20acerca%20de%20la%20micro%20vivienda.",target:"_blank",rel:"noopener noreferrer",children:[m(pp,{}),"Whastapp"]}),z("a",{href:"mailto:solhomearg@gmail.com",children:[m(pm,{}),"Email"]}),z("a",{href:"tel:+5491141403663",children:[m(is,{}),"Tel\xE9fono"]}),z("a",{href:"https://goo.gl/maps/56xMuLBH1Sko2VwV7",target:"_blank",rel:"noopener noreferrer",children:[m(fm,{}),"Showroom"]})]}),z("form",{ref:e,onSubmit:n=>{n.preventDefault(),rv.sendForm("service_e6bwg0p","template_qp5qslq",e.current,"hwH8wj1eN-3bQW7te").then(()=>{document.querySelector("form button").classList.add("sendMail"),document.querySelector("form button").innerHTML="Enviado",setTimeout(()=>{location.reload()},2500)},r=>{console.log(r.text)})},children:[z("div",{children:[m("label",{htmlFor:"name",children:"Nombre completo"}),m("input",{type:"text",name:"name",id:"name",placeholder:"Nombre completo",minLength:"4",maxLength:"30",required:!0})]}),z("div",{children:[m("label",{htmlFor:"phone",children:"Tel\xE9fono"}),m("input",{type:"tel",name:"phone",id:"phone",placeholder:"Tel\xE9fono",minLength:"8",maxLength:"20",required:!0})]}),z("div",{children:[m("label",{htmlFor:"email",children:"Email"}),m("input",{type:"email",name:"email",id:"email",placeholder:"Email",minLength:"6",maxLength:"48",required:!0})]}),z("div",{className:"InputRadioDiv",children:[m("label",{htmlFor:"contact",children:"Elegi tu forma de contacto"}),z("div",{children:[z("div",{children:[m("input",{type:"radio",name:"contact",id:"whatsapp",value:"Whatsapp",required:!0}),m("label",{htmlFor:"wsp",children:"Whatsapp"})]}),z("div",{children:[m("input",{type:"radio",name:"contact",id:"mail",value:"Email",required:!0}),m("label",{htmlFor:"mail",children:"Email"})]})]})]}),z("div",{className:"TextAreaDiv",children:[m("label",{htmlFor:"message",children:"Mensaje"}),m("textarea",{name:"message",id:"message",placeholder:"Mensaje",minLength:"6",maxLength:"240",required:!0})]}),m("button",{type:"submit",children:"Enviar"})]})]})}const lv=ct.footer`
  position: relative;
  z-index: 1;

  width: 100%;
  height: max-content;
  padding: 40px 20px;

  display: flex;
  flex-direction: column;

  background-color: #f5f5f59f;

  @media only screen and (min-width: 600px) {
    display: grid;
    grid-template-areas: 
    'brand nav'
    'brand datos';
  }

  @media only screen and (min-width: 768px) {
    padding: 40px 20px;
  }

  @media only screen and (min-width: 900px) {
    padding-bottom: 100px !important;

    display: flex;
    flex-direction: row;
    justify-content: space-between;

    & div.FooterNavigation {
      & div {
        width: max-content;
        margin: 0 16px;
      }
    }

    & div.FooterDatos {
      margin-left: 32px;
    }

    & div.FooterCopyright {
      position: absolute;
      bottom: 0;
      
      margin-top: 100px;
      padding-bottom: 40px;
    }
  }

  @media only screen and (min-width: 1024px) {
    & div.FooterNavigation {
      & div {
        margin: 0 24px;
      }
    }

    & div.FooterDatos {
      margin-left: 60px;
    }

    & div.FooterCopyright {
      border: none !important;
    }
  }

  @media only screen and (min-width: 1200px) {
    padding: 100px 200px;

    & div.FooterNavigation {
      & div {
        margin: 0 20px;
      }
    }
  }

  & div {
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  & div.FooterBrand {
    grid-area: 'brand';
    display: flex;
    flex-direction: column;

    a:first-child {
      width: 100%;
      margin-top: 0;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    @media only screen and (min-width: 768px) {
      a:first-child {
        width: max-content;

        align-items: flex-start;
        justify-content: flex-start;
      }
    }

    a img {
      width: 152px;
      margin-bottom: 40px;

      object-fit: cover;
    }

    h4 {
      color: black;
      font-size: 17px;
      font-weight: 500;
    }

    a {
      margin-top: 16px;

      transition: all .6s;

      color: gray;
      font-size: 16px;
      line-height: 26px;
      font-weight: 300;
      text-decoration: none;

      &:hover {
        color: gray;

        opacity: .7;
      }
    }
  }

  & div.FooterNavigation {
    grid-area: 'nav';
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    div {      
      display: flex;
      flex-direction: column;

      h4 {
        margin-bottom: 16px;

        color: black;
        font-size: 16px;
        font-weight: 500;
      }

      a {
        width: max-content;
        margin-bottom: 6px;

        transition: all .6s;

        color: gray;
        font-size: 16px;
        font-weight: 300;
        text-decoration: none;

        &:last-child {
          margin-bottom: 0;
        }

        &:hover {
          color: gray;

          opacity: .7;
        }
      }
    }
  }

  & div.FooterDatos {
    & a {
      width: max-content;
      margin-bottom: 8px;

      grid-area: 'datos';
      display: block;

      transition: all .6s;

      color: gray;
      font-size: 16px;
      font-weight: 300;
      text-decoration: none;

      &:hover {
        color: gray;

        opacity: .7;
      }
    }

    & div {
      display: flex;
      flex-direction: row;
      align-items: center;
    }

    & div a {
      width: 32px;
      height: 32px;
      margin-top: 20px;
      margin-right: 10px;

      display: flex;
      align-items: center;
      justify-content: center;

      border: 1px solid gray;
      border-radius: 50%;
    }

    & div a svg {
      color: gray;
      font-size: 14px;
    }
  }

  & div.FooterCopyright {
    padding-top: 20px;

    grid-area: 'copyright';

    border-top: 1px solid gainsboro;

    h6 {
      color: gray;
      font-size: 16px;
      line-height: 26px;
      font-weight: 300;
    }
  }
`;function av(){return z(lv,{children:[z("div",{className:"FooterBrand",children:[m("a",{href:"#home",children:m("img",{src:up,alt:"Sol Home - Micro Viviendas"})}),m("h4",{children:"Estamos en"}),m("a",{href:"https://goo.gl/maps/56xMuLBH1Sko2VwV7",target:"_blank",rel:"noopener noreferrer",children:"Shopping Remeros Plaza. Ruta 27 y Camino de los Remeros 1648. Tigre, Buenos Aires"})]}),z("div",{className:"FooterNavigation",children:[z("div",{children:[m("h4",{children:"Productos"}),m("a",{href:"#productos",children:"Modulos"}),m("a",{href:"#galeria",children:"Galer\xEDa"}),m("a",{href:"/",children:"Brochure"})]}),z("div",{children:[m("h4",{children:"Nosotros"}),m("a",{href:"#compania",children:"Compa\xF1\xEDa"}),m("a",{href:"#beneficios",children:"Beneficios"})]}),z("div",{children:[m("h4",{children:"Conoce m\xE1s"}),m("a",{href:"#contacto",children:"Contacto"}),m("a",{href:"https://api.whatsapp.com/send?phone=+5491141403663&text=\xA1Hola%20Sol%20Home!%20Quiero%20m\xE1s%20informaci\xF3n%20acerca%20de%20la%20micro%20vivienda.",target:"_blank",rel:"noopener noreferrer",children:"Chat ahora"})]})]}),z("div",{className:"FooterDatos",children:[m("a",{href:"mailto:solhomearg@gmail.com",children:"solhomearg@gmail.com"}),m("a",{href:"https://api.whatsapp.com/send?phone=+5491141403663&text=\xA1Hola%20Sol%20Home!%20Quiero%20m\xE1s%20informaci\xF3n%20acerca%20de%20la%20micro%20vivienda.",target:"_blank",rel:"noopener noreferrer",children:"+54 (11) 41403663"}),z("div",{children:[m("a",{href:"/",target:"_blank",rel:"noopener noreferrer",children:m(ym,{})}),m("a",{href:"/",target:"_blank",rel:"noopener noreferrer",children:m(am,{})})]})]}),m("div",{className:"FooterCopyright",children:m("h6",{children:"Todos los derechos reservados. \xA9 Sol Home 2022"})})]})}const uv=ct.a`
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 2;

    @media only screen and (min-width: 1200px) {
      right: 200px;
    }

    width: 60px;
    height: 60px;

    display: flex;
    align-items: center;
    justify-content: center;

    background-color: #48da48;
    border-radius: 50%;
    transition: all .6s;

    color: white;
    font-size: 28px;
    text-decoration: none;

    &:hover {
        opacity: .7;

        color: white;
    }
`;function sv(){return m(uv,{href:"https://api.whatsapp.com/send?phone=+5491141403663&text=\xA1Hola%20Sol%20Home!%20Quiero%20m\xE1s%20informaci\xF3n%20acerca%20de%20la%20micro%20vivienda.",target:"_blank",rel:"noopener noreferrer",children:m(pp,{})})}function cv(){return z("div",{children:[m(om,{}),m(Rg,{}),m(Qg,{}),m(Yg,{}),m(Xg,{}),m(Zg,{}),m(iv,{}),m(av,{}),m(sv,{})]})}Yl.createRoot(document.getElementById("root")).render(m(ge.StrictMode,{children:m(cv,{})}));
