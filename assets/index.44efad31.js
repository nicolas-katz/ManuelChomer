(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&r(l)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();function mf(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var tt={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dr=Symbol.for("react.element"),gf=Symbol.for("react.portal"),vf=Symbol.for("react.fragment"),yf=Symbol.for("react.strict_mode"),xf=Symbol.for("react.profiler"),wf=Symbol.for("react.provider"),Sf=Symbol.for("react.context"),kf=Symbol.for("react.forward_ref"),Cf=Symbol.for("react.suspense"),Ef=Symbol.for("react.memo"),_f=Symbol.for("react.lazy"),mu=Symbol.iterator;function zf(e){return e===null||typeof e!="object"?null:(e=mu&&e[mu]||e["@@iterator"],typeof e=="function"?e:null)}var js={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Is=Object.assign,Ds={};function Yn(e,t,n){this.props=e,this.context=t,this.refs=Ds,this.updater=n||js}Yn.prototype.isReactComponent={};Yn.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Yn.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Bs(){}Bs.prototype=Yn.prototype;function sa(e,t,n){this.props=e,this.context=t,this.refs=Ds,this.updater=n||js}var ca=sa.prototype=new Bs;ca.constructor=sa;Is(ca,Yn.prototype);ca.isPureReactComponent=!0;var gu=Array.isArray,Hs=Object.prototype.hasOwnProperty,da={current:null},Us={key:!0,ref:!0,__self:!0,__source:!0};function Vs(e,t,n){var r,i={},o=null,l=null;if(t!=null)for(r in t.ref!==void 0&&(l=t.ref),t.key!==void 0&&(o=""+t.key),t)Hs.call(t,r)&&!Us.hasOwnProperty(r)&&(i[r]=t[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var u=Array(a),c=0;c<a;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(r in a=e.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:Dr,type:e,key:o,ref:l,props:i,_owner:da.current}}function Pf(e,t){return{$$typeof:Dr,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function fa(e){return typeof e=="object"&&e!==null&&e.$$typeof===Dr}function Nf(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var vu=/\/+/g;function jo(e,t){return typeof e=="object"&&e!==null&&e.key!=null?Nf(""+e.key):t.toString(36)}function fi(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var l=!1;if(e===null)l=!0;else switch(o){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case Dr:case gf:l=!0}}if(l)return l=e,i=i(l),e=r===""?"."+jo(l,0):r,gu(i)?(n="",e!=null&&(n=e.replace(vu,"$&/")+"/"),fi(i,t,n,"",function(c){return c})):i!=null&&(fa(i)&&(i=Pf(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(vu,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=r===""?".":r+":",gu(e))for(var a=0;a<e.length;a++){o=e[a];var u=r+jo(o,a);l+=fi(o,t,n,u,i)}else if(u=zf(e),typeof u=="function")for(e=u.call(e),a=0;!(o=e.next()).done;)o=o.value,u=r+jo(o,a++),l+=fi(o,t,n,u,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function Yr(e,t,n){if(e==null)return e;var r=[],i=0;return fi(e,r,"","",function(o){return t.call(n,o,i++)}),r}function Lf(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var Oe={current:null},pi={transition:null},Tf={ReactCurrentDispatcher:Oe,ReactCurrentBatchConfig:pi,ReactCurrentOwner:da};H.Children={map:Yr,forEach:function(e,t,n){Yr(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Yr(e,function(){t++}),t},toArray:function(e){return Yr(e,function(t){return t})||[]},only:function(e){if(!fa(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=Yn;H.Fragment=vf;H.Profiler=xf;H.PureComponent=sa;H.StrictMode=yf;H.Suspense=Cf;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Tf;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=Is({},e.props),i=e.key,o=e.ref,l=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,l=da.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var a=e.type.defaultProps;for(u in t)Hs.call(t,u)&&!Us.hasOwnProperty(u)&&(r[u]=t[u]===void 0&&a!==void 0?a[u]:t[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){a=Array(u);for(var c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return{$$typeof:Dr,type:e.type,key:i,ref:o,props:r,_owner:l}};H.createContext=function(e){return e={$$typeof:Sf,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:wf,_context:e},e.Consumer=e};H.createElement=Vs;H.createFactory=function(e){var t=Vs.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:kf,render:e}};H.isValidElement=fa;H.lazy=function(e){return{$$typeof:_f,_payload:{_status:-1,_result:e},_init:Lf}};H.memo=function(e,t){return{$$typeof:Ef,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=pi.transition;pi.transition={};try{e()}finally{pi.transition=t}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(e,t){return Oe.current.useCallback(e,t)};H.useContext=function(e){return Oe.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return Oe.current.useDeferredValue(e)};H.useEffect=function(e,t){return Oe.current.useEffect(e,t)};H.useId=function(){return Oe.current.useId()};H.useImperativeHandle=function(e,t,n){return Oe.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return Oe.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return Oe.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return Oe.current.useMemo(e,t)};H.useReducer=function(e,t,n){return Oe.current.useReducer(e,t,n)};H.useRef=function(e){return Oe.current.useRef(e)};H.useState=function(e){return Oe.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return Oe.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return Oe.current.useTransition()};H.version="18.2.0";(function(e){e.exports=H})(tt);const Zt=mf(tt.exports);var dl={},Ws={exports:{}},Ke={},Qs={exports:{}},Ys={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(_,O){var F=_.length;_.push(O);e:for(;0<F;){var J=F-1>>>1,P=_[J];if(0<i(P,O))_[J]=O,_[F]=P,F=J;else break e}}function n(_){return _.length===0?null:_[0]}function r(_){if(_.length===0)return null;var O=_[0],F=_.pop();if(F!==O){_[0]=F;e:for(var J=0,P=_.length,N=P>>>1;J<N;){var A=2*(J+1)-1,j=_[A],m=A+1,U=_[m];if(0>i(j,F))m<P&&0>i(U,j)?(_[J]=U,_[m]=F,J=m):(_[J]=j,_[A]=F,J=A);else if(m<P&&0>i(U,F))_[J]=U,_[m]=F,J=m;else break e}}return O}function i(_,O){var F=_.sortIndex-O.sortIndex;return F!==0?F:_.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var l=Date,a=l.now();e.unstable_now=function(){return l.now()-a}}var u=[],c=[],v=1,g=null,h=3,k=!1,x=!1,w=!1,R=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,s=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function f(_){for(var O=n(c);O!==null;){if(O.callback===null)r(c);else if(O.startTime<=_)r(c),O.sortIndex=O.expirationTime,t(u,O);else break;O=n(c)}}function y(_){if(w=!1,f(_),!x)if(n(u)!==null)x=!0,xt(C);else{var O=n(c);O!==null&&Me(y,O.startTime-_)}}function C(_,O){x=!1,w&&(w=!1,d(T),T=-1),k=!0;var F=h;try{for(f(O),g=n(u);g!==null&&(!(g.expirationTime>O)||_&&!me());){var J=g.callback;if(typeof J=="function"){g.callback=null,h=g.priorityLevel;var P=J(g.expirationTime<=O);O=e.unstable_now(),typeof P=="function"?g.callback=P:g===n(u)&&r(u),f(O)}else r(u);g=n(u)}if(g!==null)var N=!0;else{var A=n(c);A!==null&&Me(y,A.startTime-O),N=!1}return N}finally{g=null,h=F,k=!1}}var L=!1,$=null,T=-1,W=5,I=-1;function me(){return!(e.unstable_now()-I<W)}function fe(){if($!==null){var _=e.unstable_now();I=_;var O=!0;try{O=$(!0,_)}finally{O?xe():(L=!1,$=null)}}else L=!1}var xe;if(typeof s=="function")xe=function(){s(fe)};else if(typeof MessageChannel<"u"){var Ve=new MessageChannel,ze=Ve.port2;Ve.port1.onmessage=fe,xe=function(){ze.postMessage(null)}}else xe=function(){R(fe,0)};function xt(_){$=_,L||(L=!0,xe())}function Me(_,O){T=R(function(){_(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(_){_.callback=null},e.unstable_continueExecution=function(){x||k||(x=!0,xt(C))},e.unstable_forceFrameRate=function(_){0>_||125<_?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):W=0<_?Math.floor(1e3/_):5},e.unstable_getCurrentPriorityLevel=function(){return h},e.unstable_getFirstCallbackNode=function(){return n(u)},e.unstable_next=function(_){switch(h){case 1:case 2:case 3:var O=3;break;default:O=h}var F=h;h=O;try{return _()}finally{h=F}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(_,O){switch(_){case 1:case 2:case 3:case 4:case 5:break;default:_=3}var F=h;h=_;try{return O()}finally{h=F}},e.unstable_scheduleCallback=function(_,O,F){var J=e.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?J+F:J):F=J,_){case 1:var P=-1;break;case 2:P=250;break;case 5:P=1073741823;break;case 4:P=1e4;break;default:P=5e3}return P=F+P,_={id:v++,callback:O,priorityLevel:_,startTime:F,expirationTime:P,sortIndex:-1},F>J?(_.sortIndex=F,t(c,_),n(u)===null&&_===n(c)&&(w?(d(T),T=-1):w=!0,Me(y,F-J))):(_.sortIndex=P,t(u,_),x||k||(x=!0,xt(C))),_},e.unstable_shouldYield=me,e.unstable_wrapCallback=function(_){var O=h;return function(){var F=h;h=O;try{return _.apply(this,arguments)}finally{h=F}}}})(Ys);(function(e){e.exports=Ys})(Qs);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gs=tt.exports,Ge=Qs.exports;function S(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var Ks=new Set,wr={};function mn(e,t){jn(e,t),jn(e+"Capture",t)}function jn(e,t){for(wr[e]=t,e=0;e<t.length;e++)Ks.add(t[e])}var zt=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),fl=Object.prototype.hasOwnProperty,Af=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,yu={},xu={};function Mf(e){return fl.call(xu,e)?!0:fl.call(yu,e)?!1:Af.test(e)?xu[e]=!0:(yu[e]=!0,!1)}function $f(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function Rf(e,t,n,r){if(t===null||typeof t>"u"||$f(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function Fe(e,t,n,r,i,o,l){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=l}var _e={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){_e[e]=new Fe(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];_e[t]=new Fe(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){_e[e]=new Fe(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){_e[e]=new Fe(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){_e[e]=new Fe(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){_e[e]=new Fe(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){_e[e]=new Fe(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){_e[e]=new Fe(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){_e[e]=new Fe(e,5,!1,e.toLowerCase(),null,!1,!1)});var pa=/[\-:]([a-z])/g;function ha(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(pa,ha);_e[t]=new Fe(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(pa,ha);_e[t]=new Fe(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(pa,ha);_e[t]=new Fe(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){_e[e]=new Fe(e,1,!1,e.toLowerCase(),null,!1,!1)});_e.xlinkHref=new Fe("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){_e[e]=new Fe(e,1,!1,e.toLowerCase(),null,!0,!0)});function ma(e,t,n,r){var i=_e.hasOwnProperty(t)?_e[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(Rf(t,n,i,r)&&(n=null),r||i===null?Mf(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Tt=Gs.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Gr=Symbol.for("react.element"),yn=Symbol.for("react.portal"),xn=Symbol.for("react.fragment"),ga=Symbol.for("react.strict_mode"),pl=Symbol.for("react.profiler"),Xs=Symbol.for("react.provider"),Zs=Symbol.for("react.context"),va=Symbol.for("react.forward_ref"),hl=Symbol.for("react.suspense"),ml=Symbol.for("react.suspense_list"),ya=Symbol.for("react.memo"),Rt=Symbol.for("react.lazy"),qs=Symbol.for("react.offscreen"),wu=Symbol.iterator;function qn(e){return e===null||typeof e!="object"?null:(e=wu&&e[wu]||e["@@iterator"],typeof e=="function"?e:null)}var oe=Object.assign,Io;function lr(e){if(Io===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Io=t&&t[1]||""}return`
`+Io+e}var Do=!1;function Bo(e,t){if(!e||Do)return"";Do=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(c){var r=c}Reflect.construct(e,[],t)}else{try{t.call()}catch(c){r=c}e.call(t.prototype)}else{try{throw Error()}catch(c){r=c}e()}}catch(c){if(c&&r&&typeof c.stack=="string"){for(var i=c.stack.split(`
`),o=r.stack.split(`
`),l=i.length-1,a=o.length-1;1<=l&&0<=a&&i[l]!==o[a];)a--;for(;1<=l&&0<=a;l--,a--)if(i[l]!==o[a]){if(l!==1||a!==1)do if(l--,a--,0>a||i[l]!==o[a]){var u=`
`+i[l].replace(" at new "," at ");return e.displayName&&u.includes("<anonymous>")&&(u=u.replace("<anonymous>",e.displayName)),u}while(1<=l&&0<=a);break}}}finally{Do=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?lr(e):""}function Of(e){switch(e.tag){case 5:return lr(e.type);case 16:return lr("Lazy");case 13:return lr("Suspense");case 19:return lr("SuspenseList");case 0:case 2:case 15:return e=Bo(e.type,!1),e;case 11:return e=Bo(e.type.render,!1),e;case 1:return e=Bo(e.type,!0),e;default:return""}}function gl(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case xn:return"Fragment";case yn:return"Portal";case pl:return"Profiler";case ga:return"StrictMode";case hl:return"Suspense";case ml:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case Zs:return(e.displayName||"Context")+".Consumer";case Xs:return(e._context.displayName||"Context")+".Provider";case va:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case ya:return t=e.displayName||null,t!==null?t:gl(e.type)||"Memo";case Rt:t=e._payload,e=e._init;try{return gl(e(t))}catch{}}return null}function Ff(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return gl(t);case 8:return t===ga?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function qt(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function Js(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function jf(e){var t=Js(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(l){r=""+l,o.call(this,l)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(l){r=""+l},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Kr(e){e._valueTracker||(e._valueTracker=jf(e))}function bs(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=Js(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function _i(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function vl(e,t){var n=t.checked;return oe({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function Su(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=qt(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function ec(e,t){t=t.checked,t!=null&&ma(e,"checked",t,!1)}function yl(e,t){ec(e,t);var n=qt(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?xl(e,t.type,n):t.hasOwnProperty("defaultValue")&&xl(e,t.type,qt(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function ku(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function xl(e,t,n){(t!=="number"||_i(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ar=Array.isArray;function An(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+qt(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function wl(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(S(91));return oe({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Cu(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(S(92));if(ar(n)){if(1<n.length)throw Error(S(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:qt(n)}}function tc(e,t){var n=qt(t.value),r=qt(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Eu(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function nc(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Sl(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?nc(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Xr,rc=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Xr=Xr||document.createElement("div"),Xr.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Xr.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Sr(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var cr={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},If=["Webkit","ms","Moz","O"];Object.keys(cr).forEach(function(e){If.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),cr[t]=cr[e]})});function ic(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||cr.hasOwnProperty(e)&&cr[e]?(""+t).trim():t+"px"}function oc(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=ic(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var Df=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function kl(e,t){if(t){if(Df[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(S(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(S(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(S(61))}if(t.style!=null&&typeof t.style!="object")throw Error(S(62))}}function Cl(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var El=null;function xa(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var _l=null,Mn=null,$n=null;function _u(e){if(e=Ur(e)){if(typeof _l!="function")throw Error(S(280));var t=e.stateNode;t&&(t=to(t),_l(e.stateNode,e.type,t))}}function lc(e){Mn?$n?$n.push(e):$n=[e]:Mn=e}function ac(){if(Mn){var e=Mn,t=$n;if($n=Mn=null,_u(e),t)for(e=0;e<t.length;e++)_u(t[e])}}function uc(e,t){return e(t)}function sc(){}var Ho=!1;function cc(e,t,n){if(Ho)return e(t,n);Ho=!0;try{return uc(e,t,n)}finally{Ho=!1,(Mn!==null||$n!==null)&&(sc(),ac())}}function kr(e,t){var n=e.stateNode;if(n===null)return null;var r=to(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(S(231,t,typeof n));return n}var zl=!1;if(zt)try{var Jn={};Object.defineProperty(Jn,"passive",{get:function(){zl=!0}}),window.addEventListener("test",Jn,Jn),window.removeEventListener("test",Jn,Jn)}catch{zl=!1}function Bf(e,t,n,r,i,o,l,a,u){var c=Array.prototype.slice.call(arguments,3);try{t.apply(n,c)}catch(v){this.onError(v)}}var dr=!1,zi=null,Pi=!1,Pl=null,Hf={onError:function(e){dr=!0,zi=e}};function Uf(e,t,n,r,i,o,l,a,u){dr=!1,zi=null,Bf.apply(Hf,arguments)}function Vf(e,t,n,r,i,o,l,a,u){if(Uf.apply(this,arguments),dr){if(dr){var c=zi;dr=!1,zi=null}else throw Error(S(198));Pi||(Pi=!0,Pl=c)}}function gn(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function dc(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function zu(e){if(gn(e)!==e)throw Error(S(188))}function Wf(e){var t=e.alternate;if(!t){if(t=gn(e),t===null)throw Error(S(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return zu(i),e;if(o===r)return zu(i),t;o=o.sibling}throw Error(S(188))}if(n.return!==r.return)n=i,r=o;else{for(var l=!1,a=i.child;a;){if(a===n){l=!0,n=i,r=o;break}if(a===r){l=!0,r=i,n=o;break}a=a.sibling}if(!l){for(a=o.child;a;){if(a===n){l=!0,n=o,r=i;break}if(a===r){l=!0,r=o,n=i;break}a=a.sibling}if(!l)throw Error(S(189))}}if(n.alternate!==r)throw Error(S(190))}if(n.tag!==3)throw Error(S(188));return n.stateNode.current===n?e:t}function fc(e){return e=Wf(e),e!==null?pc(e):null}function pc(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=pc(e);if(t!==null)return t;e=e.sibling}return null}var hc=Ge.unstable_scheduleCallback,Pu=Ge.unstable_cancelCallback,Qf=Ge.unstable_shouldYield,Yf=Ge.unstable_requestPaint,se=Ge.unstable_now,Gf=Ge.unstable_getCurrentPriorityLevel,wa=Ge.unstable_ImmediatePriority,mc=Ge.unstable_UserBlockingPriority,Ni=Ge.unstable_NormalPriority,Kf=Ge.unstable_LowPriority,gc=Ge.unstable_IdlePriority,qi=null,vt=null;function Xf(e){if(vt&&typeof vt.onCommitFiberRoot=="function")try{vt.onCommitFiberRoot(qi,e,void 0,(e.current.flags&128)===128)}catch{}}var dt=Math.clz32?Math.clz32:Jf,Zf=Math.log,qf=Math.LN2;function Jf(e){return e>>>=0,e===0?32:31-(Zf(e)/qf|0)|0}var Zr=64,qr=4194304;function ur(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Li(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,l=n&268435455;if(l!==0){var a=l&~i;a!==0?r=ur(a):(o&=l,o!==0&&(r=ur(o)))}else l=n&~i,l!==0?r=ur(l):o!==0&&(r=ur(o));if(r===0)return 0;if(t!==0&&t!==r&&(t&i)===0&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-dt(t),i=1<<n,r|=e[n],t&=~i;return r}function bf(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ep(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var l=31-dt(o),a=1<<l,u=i[l];u===-1?((a&n)===0||(a&r)!==0)&&(i[l]=bf(a,t)):u<=t&&(e.expiredLanes|=a),o&=~a}}function Nl(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function vc(){var e=Zr;return Zr<<=1,(Zr&4194240)===0&&(Zr=64),e}function Uo(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Br(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-dt(t),e[t]=n}function tp(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-dt(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function Sa(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-dt(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var X=0;function yc(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var xc,ka,wc,Sc,kc,Ll=!1,Jr=[],Bt=null,Ht=null,Ut=null,Cr=new Map,Er=new Map,Ft=[],np="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Nu(e,t){switch(e){case"focusin":case"focusout":Bt=null;break;case"dragenter":case"dragleave":Ht=null;break;case"mouseover":case"mouseout":Ut=null;break;case"pointerover":case"pointerout":Cr.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Er.delete(t.pointerId)}}function bn(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=Ur(t),t!==null&&ka(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function rp(e,t,n,r,i){switch(t){case"focusin":return Bt=bn(Bt,e,t,n,r,i),!0;case"dragenter":return Ht=bn(Ht,e,t,n,r,i),!0;case"mouseover":return Ut=bn(Ut,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Cr.set(o,bn(Cr.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,Er.set(o,bn(Er.get(o)||null,e,t,n,r,i)),!0}return!1}function Cc(e){var t=on(e.target);if(t!==null){var n=gn(t);if(n!==null){if(t=n.tag,t===13){if(t=dc(n),t!==null){e.blockedOn=t,kc(e.priority,function(){wc(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function hi(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=Tl(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);El=r,n.target.dispatchEvent(r),El=null}else return t=Ur(n),t!==null&&ka(t),e.blockedOn=n,!1;t.shift()}return!0}function Lu(e,t,n){hi(e)&&n.delete(t)}function ip(){Ll=!1,Bt!==null&&hi(Bt)&&(Bt=null),Ht!==null&&hi(Ht)&&(Ht=null),Ut!==null&&hi(Ut)&&(Ut=null),Cr.forEach(Lu),Er.forEach(Lu)}function er(e,t){e.blockedOn===t&&(e.blockedOn=null,Ll||(Ll=!0,Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority,ip)))}function _r(e){function t(i){return er(i,e)}if(0<Jr.length){er(Jr[0],e);for(var n=1;n<Jr.length;n++){var r=Jr[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Bt!==null&&er(Bt,e),Ht!==null&&er(Ht,e),Ut!==null&&er(Ut,e),Cr.forEach(t),Er.forEach(t),n=0;n<Ft.length;n++)r=Ft[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Ft.length&&(n=Ft[0],n.blockedOn===null);)Cc(n),n.blockedOn===null&&Ft.shift()}var Rn=Tt.ReactCurrentBatchConfig,Ti=!0;function op(e,t,n,r){var i=X,o=Rn.transition;Rn.transition=null;try{X=1,Ca(e,t,n,r)}finally{X=i,Rn.transition=o}}function lp(e,t,n,r){var i=X,o=Rn.transition;Rn.transition=null;try{X=4,Ca(e,t,n,r)}finally{X=i,Rn.transition=o}}function Ca(e,t,n,r){if(Ti){var i=Tl(e,t,n,r);if(i===null)Jo(e,t,r,Ai,n),Nu(e,r);else if(rp(i,e,t,n,r))r.stopPropagation();else if(Nu(e,r),t&4&&-1<np.indexOf(e)){for(;i!==null;){var o=Ur(i);if(o!==null&&xc(o),o=Tl(e,t,n,r),o===null&&Jo(e,t,r,Ai,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Jo(e,t,r,null,n)}}var Ai=null;function Tl(e,t,n,r){if(Ai=null,e=xa(r),e=on(e),e!==null)if(t=gn(e),t===null)e=null;else if(n=t.tag,n===13){if(e=dc(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Ai=e,null}function Ec(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Gf()){case wa:return 1;case mc:return 4;case Ni:case Kf:return 16;case gc:return 536870912;default:return 16}default:return 16}}var It=null,Ea=null,mi=null;function _c(){if(mi)return mi;var e,t=Ea,n=t.length,r,i="value"in It?It.value:It.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var l=n-e;for(r=1;r<=l&&t[n-r]===i[o-r];r++);return mi=i.slice(e,1<r?1-r:void 0)}function gi(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function br(){return!0}function Tu(){return!1}function Xe(e){function t(n,r,i,o,l){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=l,this.currentTarget=null;for(var a in e)e.hasOwnProperty(a)&&(n=e[a],this[a]=n?n(o):o[a]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?br:Tu,this.isPropagationStopped=Tu,this}return oe(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=br)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=br)},persist:function(){},isPersistent:br}),t}var Gn={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},_a=Xe(Gn),Hr=oe({},Gn,{view:0,detail:0}),ap=Xe(Hr),Vo,Wo,tr,Ji=oe({},Hr,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:za,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==tr&&(tr&&e.type==="mousemove"?(Vo=e.screenX-tr.screenX,Wo=e.screenY-tr.screenY):Wo=Vo=0,tr=e),Vo)},movementY:function(e){return"movementY"in e?e.movementY:Wo}}),Au=Xe(Ji),up=oe({},Ji,{dataTransfer:0}),sp=Xe(up),cp=oe({},Hr,{relatedTarget:0}),Qo=Xe(cp),dp=oe({},Gn,{animationName:0,elapsedTime:0,pseudoElement:0}),fp=Xe(dp),pp=oe({},Gn,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),hp=Xe(pp),mp=oe({},Gn,{data:0}),Mu=Xe(mp),gp={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},vp={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},yp={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function xp(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=yp[e])?!!t[e]:!1}function za(){return xp}var wp=oe({},Hr,{key:function(e){if(e.key){var t=gp[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=gi(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?vp[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:za,charCode:function(e){return e.type==="keypress"?gi(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?gi(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Sp=Xe(wp),kp=oe({},Ji,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$u=Xe(kp),Cp=oe({},Hr,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:za}),Ep=Xe(Cp),_p=oe({},Gn,{propertyName:0,elapsedTime:0,pseudoElement:0}),zp=Xe(_p),Pp=oe({},Ji,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Np=Xe(Pp),Lp=[9,13,27,32],Pa=zt&&"CompositionEvent"in window,fr=null;zt&&"documentMode"in document&&(fr=document.documentMode);var Tp=zt&&"TextEvent"in window&&!fr,zc=zt&&(!Pa||fr&&8<fr&&11>=fr),Ru=String.fromCharCode(32),Ou=!1;function Pc(e,t){switch(e){case"keyup":return Lp.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Nc(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var wn=!1;function Ap(e,t){switch(e){case"compositionend":return Nc(t);case"keypress":return t.which!==32?null:(Ou=!0,Ru);case"textInput":return e=t.data,e===Ru&&Ou?null:e;default:return null}}function Mp(e,t){if(wn)return e==="compositionend"||!Pa&&Pc(e,t)?(e=_c(),mi=Ea=It=null,wn=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return zc&&t.locale!=="ko"?null:t.data;default:return null}}var $p={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Fu(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!$p[e.type]:t==="textarea"}function Lc(e,t,n,r){lc(r),t=Mi(t,"onChange"),0<t.length&&(n=new _a("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var pr=null,zr=null;function Rp(e){Bc(e,0)}function bi(e){var t=Cn(e);if(bs(t))return e}function Op(e,t){if(e==="change")return t}var Tc=!1;if(zt){var Yo;if(zt){var Go="oninput"in document;if(!Go){var ju=document.createElement("div");ju.setAttribute("oninput","return;"),Go=typeof ju.oninput=="function"}Yo=Go}else Yo=!1;Tc=Yo&&(!document.documentMode||9<document.documentMode)}function Iu(){pr&&(pr.detachEvent("onpropertychange",Ac),zr=pr=null)}function Ac(e){if(e.propertyName==="value"&&bi(zr)){var t=[];Lc(t,zr,e,xa(e)),cc(Rp,t)}}function Fp(e,t,n){e==="focusin"?(Iu(),pr=t,zr=n,pr.attachEvent("onpropertychange",Ac)):e==="focusout"&&Iu()}function jp(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return bi(zr)}function Ip(e,t){if(e==="click")return bi(t)}function Dp(e,t){if(e==="input"||e==="change")return bi(t)}function Bp(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var pt=typeof Object.is=="function"?Object.is:Bp;function Pr(e,t){if(pt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!fl.call(t,i)||!pt(e[i],t[i]))return!1}return!0}function Du(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Bu(e,t){var n=Du(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Du(n)}}function Mc(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Mc(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function $c(){for(var e=window,t=_i();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=_i(e.document)}return t}function Na(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Hp(e){var t=$c(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Mc(n.ownerDocument.documentElement,n)){if(r!==null&&Na(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=Bu(n,o);var l=Bu(n,r);i&&l&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==l.node||e.focusOffset!==l.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(l.node,l.offset)):(t.setEnd(l.node,l.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Up=zt&&"documentMode"in document&&11>=document.documentMode,Sn=null,Al=null,hr=null,Ml=!1;function Hu(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ml||Sn==null||Sn!==_i(r)||(r=Sn,"selectionStart"in r&&Na(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),hr&&Pr(hr,r)||(hr=r,r=Mi(Al,"onSelect"),0<r.length&&(t=new _a("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=Sn)))}function ei(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kn={animationend:ei("Animation","AnimationEnd"),animationiteration:ei("Animation","AnimationIteration"),animationstart:ei("Animation","AnimationStart"),transitionend:ei("Transition","TransitionEnd")},Ko={},Rc={};zt&&(Rc=document.createElement("div").style,"AnimationEvent"in window||(delete kn.animationend.animation,delete kn.animationiteration.animation,delete kn.animationstart.animation),"TransitionEvent"in window||delete kn.transitionend.transition);function eo(e){if(Ko[e])return Ko[e];if(!kn[e])return e;var t=kn[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in Rc)return Ko[e]=t[n];return e}var Oc=eo("animationend"),Fc=eo("animationiteration"),jc=eo("animationstart"),Ic=eo("transitionend"),Dc=new Map,Uu="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function bt(e,t){Dc.set(e,t),mn(t,[e])}for(var Xo=0;Xo<Uu.length;Xo++){var Zo=Uu[Xo],Vp=Zo.toLowerCase(),Wp=Zo[0].toUpperCase()+Zo.slice(1);bt(Vp,"on"+Wp)}bt(Oc,"onAnimationEnd");bt(Fc,"onAnimationIteration");bt(jc,"onAnimationStart");bt("dblclick","onDoubleClick");bt("focusin","onFocus");bt("focusout","onBlur");bt(Ic,"onTransitionEnd");jn("onMouseEnter",["mouseout","mouseover"]);jn("onMouseLeave",["mouseout","mouseover"]);jn("onPointerEnter",["pointerout","pointerover"]);jn("onPointerLeave",["pointerout","pointerover"]);mn("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));mn("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));mn("onBeforeInput",["compositionend","keypress","textInput","paste"]);mn("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));mn("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var sr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Qp=new Set("cancel close invalid load scroll toggle".split(" ").concat(sr));function Vu(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,Vf(r,t,void 0,e),e.currentTarget=null}function Bc(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var l=r.length-1;0<=l;l--){var a=r[l],u=a.instance,c=a.currentTarget;if(a=a.listener,u!==o&&i.isPropagationStopped())break e;Vu(i,a,c),o=u}else for(l=0;l<r.length;l++){if(a=r[l],u=a.instance,c=a.currentTarget,a=a.listener,u!==o&&i.isPropagationStopped())break e;Vu(i,a,c),o=u}}}if(Pi)throw e=Pl,Pi=!1,Pl=null,e}function ee(e,t){var n=t[jl];n===void 0&&(n=t[jl]=new Set);var r=e+"__bubble";n.has(r)||(Hc(t,e,2,!1),n.add(r))}function qo(e,t,n){var r=0;t&&(r|=4),Hc(n,e,r,t)}var ti="_reactListening"+Math.random().toString(36).slice(2);function Nr(e){if(!e[ti]){e[ti]=!0,Ks.forEach(function(n){n!=="selectionchange"&&(Qp.has(n)||qo(n,!1,e),qo(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[ti]||(t[ti]=!0,qo("selectionchange",!1,t))}}function Hc(e,t,n,r){switch(Ec(t)){case 1:var i=op;break;case 4:i=lp;break;default:i=Ca}n=i.bind(null,t,n,e),i=void 0,!zl||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Jo(e,t,n,r,i){var o=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var l=r.tag;if(l===3||l===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(l===4)for(l=r.return;l!==null;){var u=l.tag;if((u===3||u===4)&&(u=l.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;l=l.return}for(;a!==null;){if(l=on(a),l===null)return;if(u=l.tag,u===5||u===6){r=o=l;continue e}a=a.parentNode}}r=r.return}cc(function(){var c=o,v=xa(n),g=[];e:{var h=Dc.get(e);if(h!==void 0){var k=_a,x=e;switch(e){case"keypress":if(gi(n)===0)break e;case"keydown":case"keyup":k=Sp;break;case"focusin":x="focus",k=Qo;break;case"focusout":x="blur",k=Qo;break;case"beforeblur":case"afterblur":k=Qo;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":k=Au;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":k=sp;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":k=Ep;break;case Oc:case Fc:case jc:k=fp;break;case Ic:k=zp;break;case"scroll":k=ap;break;case"wheel":k=Np;break;case"copy":case"cut":case"paste":k=hp;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":k=$u}var w=(t&4)!==0,R=!w&&e==="scroll",d=w?h!==null?h+"Capture":null:h;w=[];for(var s=c,f;s!==null;){f=s;var y=f.stateNode;if(f.tag===5&&y!==null&&(f=y,d!==null&&(y=kr(s,d),y!=null&&w.push(Lr(s,y,f)))),R)break;s=s.return}0<w.length&&(h=new k(h,x,null,n,v),g.push({event:h,listeners:w}))}}if((t&7)===0){e:{if(h=e==="mouseover"||e==="pointerover",k=e==="mouseout"||e==="pointerout",h&&n!==El&&(x=n.relatedTarget||n.fromElement)&&(on(x)||x[Pt]))break e;if((k||h)&&(h=v.window===v?v:(h=v.ownerDocument)?h.defaultView||h.parentWindow:window,k?(x=n.relatedTarget||n.toElement,k=c,x=x?on(x):null,x!==null&&(R=gn(x),x!==R||x.tag!==5&&x.tag!==6)&&(x=null)):(k=null,x=c),k!==x)){if(w=Au,y="onMouseLeave",d="onMouseEnter",s="mouse",(e==="pointerout"||e==="pointerover")&&(w=$u,y="onPointerLeave",d="onPointerEnter",s="pointer"),R=k==null?h:Cn(k),f=x==null?h:Cn(x),h=new w(y,s+"leave",k,n,v),h.target=R,h.relatedTarget=f,y=null,on(v)===c&&(w=new w(d,s+"enter",x,n,v),w.target=f,w.relatedTarget=R,y=w),R=y,k&&x)t:{for(w=k,d=x,s=0,f=w;f;f=vn(f))s++;for(f=0,y=d;y;y=vn(y))f++;for(;0<s-f;)w=vn(w),s--;for(;0<f-s;)d=vn(d),f--;for(;s--;){if(w===d||d!==null&&w===d.alternate)break t;w=vn(w),d=vn(d)}w=null}else w=null;k!==null&&Wu(g,h,k,w,!1),x!==null&&R!==null&&Wu(g,R,x,w,!0)}}e:{if(h=c?Cn(c):window,k=h.nodeName&&h.nodeName.toLowerCase(),k==="select"||k==="input"&&h.type==="file")var C=Op;else if(Fu(h))if(Tc)C=Dp;else{C=jp;var L=Fp}else(k=h.nodeName)&&k.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(C=Ip);if(C&&(C=C(e,c))){Lc(g,C,n,v);break e}L&&L(e,h,c),e==="focusout"&&(L=h._wrapperState)&&L.controlled&&h.type==="number"&&xl(h,"number",h.value)}switch(L=c?Cn(c):window,e){case"focusin":(Fu(L)||L.contentEditable==="true")&&(Sn=L,Al=c,hr=null);break;case"focusout":hr=Al=Sn=null;break;case"mousedown":Ml=!0;break;case"contextmenu":case"mouseup":case"dragend":Ml=!1,Hu(g,n,v);break;case"selectionchange":if(Up)break;case"keydown":case"keyup":Hu(g,n,v)}var $;if(Pa)e:{switch(e){case"compositionstart":var T="onCompositionStart";break e;case"compositionend":T="onCompositionEnd";break e;case"compositionupdate":T="onCompositionUpdate";break e}T=void 0}else wn?Pc(e,n)&&(T="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(T="onCompositionStart");T&&(zc&&n.locale!=="ko"&&(wn||T!=="onCompositionStart"?T==="onCompositionEnd"&&wn&&($=_c()):(It=v,Ea="value"in It?It.value:It.textContent,wn=!0)),L=Mi(c,T),0<L.length&&(T=new Mu(T,e,null,n,v),g.push({event:T,listeners:L}),$?T.data=$:($=Nc(n),$!==null&&(T.data=$)))),($=Tp?Ap(e,n):Mp(e,n))&&(c=Mi(c,"onBeforeInput"),0<c.length&&(v=new Mu("onBeforeInput","beforeinput",null,n,v),g.push({event:v,listeners:c}),v.data=$))}Bc(g,t)})}function Lr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Mi(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=kr(e,n),o!=null&&r.unshift(Lr(e,o,i)),o=kr(e,t),o!=null&&r.push(Lr(e,o,i))),e=e.return}return r}function vn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function Wu(e,t,n,r,i){for(var o=t._reactName,l=[];n!==null&&n!==r;){var a=n,u=a.alternate,c=a.stateNode;if(u!==null&&u===r)break;a.tag===5&&c!==null&&(a=c,i?(u=kr(n,o),u!=null&&l.unshift(Lr(n,u,a))):i||(u=kr(n,o),u!=null&&l.push(Lr(n,u,a)))),n=n.return}l.length!==0&&e.push({event:t,listeners:l})}var Yp=/\r\n?/g,Gp=/\u0000|\uFFFD/g;function Qu(e){return(typeof e=="string"?e:""+e).replace(Yp,`
`).replace(Gp,"")}function ni(e,t,n){if(t=Qu(t),Qu(e)!==t&&n)throw Error(S(425))}function $i(){}var $l=null,Rl=null;function Ol(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var Fl=typeof setTimeout=="function"?setTimeout:void 0,Kp=typeof clearTimeout=="function"?clearTimeout:void 0,Yu=typeof Promise=="function"?Promise:void 0,Xp=typeof queueMicrotask=="function"?queueMicrotask:typeof Yu<"u"?function(e){return Yu.resolve(null).then(e).catch(Zp)}:Fl;function Zp(e){setTimeout(function(){throw e})}function bo(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),_r(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);_r(t)}function Vt(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function Gu(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Kn=Math.random().toString(36).slice(2),gt="__reactFiber$"+Kn,Tr="__reactProps$"+Kn,Pt="__reactContainer$"+Kn,jl="__reactEvents$"+Kn,qp="__reactListeners$"+Kn,Jp="__reactHandles$"+Kn;function on(e){var t=e[gt];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pt]||n[gt]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=Gu(e);e!==null;){if(n=e[gt])return n;e=Gu(e)}return t}e=n,n=e.parentNode}return null}function Ur(e){return e=e[gt]||e[Pt],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function Cn(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(S(33))}function to(e){return e[Tr]||null}var Il=[],En=-1;function en(e){return{current:e}}function te(e){0>En||(e.current=Il[En],Il[En]=null,En--)}function b(e,t){En++,Il[En]=e.current,e.current=t}var Jt={},Ae=en(Jt),Be=en(!1),cn=Jt;function In(e,t){var n=e.type.contextTypes;if(!n)return Jt;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function He(e){return e=e.childContextTypes,e!=null}function Ri(){te(Be),te(Ae)}function Ku(e,t,n){if(Ae.current!==Jt)throw Error(S(168));b(Ae,t),b(Be,n)}function Uc(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(S(108,Ff(e)||"Unknown",i));return oe({},n,r)}function Oi(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Jt,cn=Ae.current,b(Ae,e),b(Be,Be.current),!0}function Xu(e,t,n){var r=e.stateNode;if(!r)throw Error(S(169));n?(e=Uc(e,t,cn),r.__reactInternalMemoizedMergedChildContext=e,te(Be),te(Ae),b(Ae,e)):te(Be),b(Be,n)}var St=null,no=!1,el=!1;function Vc(e){St===null?St=[e]:St.push(e)}function bp(e){no=!0,Vc(e)}function tn(){if(!el&&St!==null){el=!0;var e=0,t=X;try{var n=St;for(X=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}St=null,no=!1}catch(i){throw St!==null&&(St=St.slice(e+1)),hc(wa,tn),i}finally{X=t,el=!1}}return null}var _n=[],zn=0,Fi=null,ji=0,qe=[],Je=0,dn=null,kt=1,Ct="";function nn(e,t){_n[zn++]=ji,_n[zn++]=Fi,Fi=e,ji=t}function Wc(e,t,n){qe[Je++]=kt,qe[Je++]=Ct,qe[Je++]=dn,dn=e;var r=kt;e=Ct;var i=32-dt(r)-1;r&=~(1<<i),n+=1;var o=32-dt(t)+i;if(30<o){var l=i-i%5;o=(r&(1<<l)-1).toString(32),r>>=l,i-=l,kt=1<<32-dt(t)+i|n<<i|r,Ct=o+e}else kt=1<<o|n<<i|r,Ct=e}function La(e){e.return!==null&&(nn(e,1),Wc(e,1,0))}function Ta(e){for(;e===Fi;)Fi=_n[--zn],_n[zn]=null,ji=_n[--zn],_n[zn]=null;for(;e===dn;)dn=qe[--Je],qe[Je]=null,Ct=qe[--Je],qe[Je]=null,kt=qe[--Je],qe[Je]=null}var Ye=null,Qe=null,ne=!1,ct=null;function Qc(e,t){var n=be(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function Zu(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Ye=e,Qe=Vt(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Ye=e,Qe=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=dn!==null?{id:kt,overflow:Ct}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=be(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Ye=e,Qe=null,!0):!1;default:return!1}}function Dl(e){return(e.mode&1)!==0&&(e.flags&128)===0}function Bl(e){if(ne){var t=Qe;if(t){var n=t;if(!Zu(e,t)){if(Dl(e))throw Error(S(418));t=Vt(n.nextSibling);var r=Ye;t&&Zu(e,t)?Qc(r,n):(e.flags=e.flags&-4097|2,ne=!1,Ye=e)}}else{if(Dl(e))throw Error(S(418));e.flags=e.flags&-4097|2,ne=!1,Ye=e}}}function qu(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Ye=e}function ri(e){if(e!==Ye)return!1;if(!ne)return qu(e),ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!Ol(e.type,e.memoizedProps)),t&&(t=Qe)){if(Dl(e))throw Yc(),Error(S(418));for(;t;)Qc(e,t),t=Vt(t.nextSibling)}if(qu(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(S(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Qe=Vt(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Qe=null}}else Qe=Ye?Vt(e.stateNode.nextSibling):null;return!0}function Yc(){for(var e=Qe;e;)e=Vt(e.nextSibling)}function Dn(){Qe=Ye=null,ne=!1}function Aa(e){ct===null?ct=[e]:ct.push(e)}var e0=Tt.ReactCurrentBatchConfig;function ut(e,t){if(e&&e.defaultProps){t=oe({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var Ii=en(null),Di=null,Pn=null,Ma=null;function $a(){Ma=Pn=Di=null}function Ra(e){var t=Ii.current;te(Ii),e._currentValue=t}function Hl(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function On(e,t){Di=e,Ma=Pn=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(De=!0),e.firstContext=null)}function nt(e){var t=e._currentValue;if(Ma!==e)if(e={context:e,memoizedValue:t,next:null},Pn===null){if(Di===null)throw Error(S(308));Pn=e,Di.dependencies={lanes:0,firstContext:e}}else Pn=Pn.next=e;return t}var ln=null;function Oa(e){ln===null?ln=[e]:ln.push(e)}function Gc(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,Oa(t)):(n.next=i.next,i.next=n),t.interleaved=n,Nt(e,r)}function Nt(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Ot=!1;function Fa(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Kc(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function _t(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Wt(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(V&2)!==0){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,Nt(e,n)}return i=r.interleaved,i===null?(t.next=t,Oa(r)):(t.next=i.next,i.next=t),r.interleaved=t,Nt(e,n)}function vi(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sa(e,n)}}function Ju(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var l={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=l:o=o.next=l,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function Bi(e,t,n,r){var i=e.updateQueue;Ot=!1;var o=i.firstBaseUpdate,l=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var u=a,c=u.next;u.next=null,l===null?o=c:l.next=c,l=u;var v=e.alternate;v!==null&&(v=v.updateQueue,a=v.lastBaseUpdate,a!==l&&(a===null?v.firstBaseUpdate=c:a.next=c,v.lastBaseUpdate=u))}if(o!==null){var g=i.baseState;l=0,v=c=u=null,a=o;do{var h=a.lane,k=a.eventTime;if((r&h)===h){v!==null&&(v=v.next={eventTime:k,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var x=e,w=a;switch(h=t,k=n,w.tag){case 1:if(x=w.payload,typeof x=="function"){g=x.call(k,g,h);break e}g=x;break e;case 3:x.flags=x.flags&-65537|128;case 0:if(x=w.payload,h=typeof x=="function"?x.call(k,g,h):x,h==null)break e;g=oe({},g,h);break e;case 2:Ot=!0}}a.callback!==null&&a.lane!==0&&(e.flags|=64,h=i.effects,h===null?i.effects=[a]:h.push(a))}else k={eventTime:k,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},v===null?(c=v=k,u=g):v=v.next=k,l|=h;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;h=a,a=h.next,h.next=null,i.lastBaseUpdate=h,i.shared.pending=null}}while(1);if(v===null&&(u=g),i.baseState=u,i.firstBaseUpdate=c,i.lastBaseUpdate=v,t=i.shared.interleaved,t!==null){i=t;do l|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);pn|=l,e.lanes=l,e.memoizedState=g}}function bu(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(S(191,i));i.call(r)}}}var Xc=new Gs.Component().refs;function Ul(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:oe({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var ro={isMounted:function(e){return(e=e._reactInternals)?gn(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=Re(),i=Yt(e),o=_t(r,i);o.payload=t,n!=null&&(o.callback=n),t=Wt(e,o,i),t!==null&&(ft(t,e,i,r),vi(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=Re(),i=Yt(e),o=_t(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=Wt(e,o,i),t!==null&&(ft(t,e,i,r),vi(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=Re(),r=Yt(e),i=_t(n,r);i.tag=2,t!=null&&(i.callback=t),t=Wt(e,i,r),t!==null&&(ft(t,e,r,n),vi(t,e,r))}};function es(e,t,n,r,i,o,l){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,l):t.prototype&&t.prototype.isPureReactComponent?!Pr(n,r)||!Pr(i,o):!0}function Zc(e,t,n){var r=!1,i=Jt,o=t.contextType;return typeof o=="object"&&o!==null?o=nt(o):(i=He(t)?cn:Ae.current,r=t.contextTypes,o=(r=r!=null)?In(e,i):Jt),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=ro,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function ts(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&ro.enqueueReplaceState(t,t.state,null)}function Vl(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs=Xc,Fa(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=nt(o):(o=He(t)?cn:Ae.current,i.context=In(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(Ul(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&ro.enqueueReplaceState(i,i.state,null),Bi(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function nr(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(S(309));var r=n.stateNode}if(!r)throw Error(S(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(l){var a=i.refs;a===Xc&&(a=i.refs={}),l===null?delete a[o]:a[o]=l},t._stringRef=o,t)}if(typeof e!="string")throw Error(S(284));if(!n._owner)throw Error(S(290,e))}return e}function ii(e,t){throw e=Object.prototype.toString.call(t),Error(S(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function ns(e){var t=e._init;return t(e._payload)}function qc(e){function t(d,s){if(e){var f=d.deletions;f===null?(d.deletions=[s],d.flags|=16):f.push(s)}}function n(d,s){if(!e)return null;for(;s!==null;)t(d,s),s=s.sibling;return null}function r(d,s){for(d=new Map;s!==null;)s.key!==null?d.set(s.key,s):d.set(s.index,s),s=s.sibling;return d}function i(d,s){return d=Gt(d,s),d.index=0,d.sibling=null,d}function o(d,s,f){return d.index=f,e?(f=d.alternate,f!==null?(f=f.index,f<s?(d.flags|=2,s):f):(d.flags|=2,s)):(d.flags|=1048576,s)}function l(d){return e&&d.alternate===null&&(d.flags|=2),d}function a(d,s,f,y){return s===null||s.tag!==6?(s=al(f,d.mode,y),s.return=d,s):(s=i(s,f),s.return=d,s)}function u(d,s,f,y){var C=f.type;return C===xn?v(d,s,f.props.children,y,f.key):s!==null&&(s.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Rt&&ns(C)===s.type)?(y=i(s,f.props),y.ref=nr(d,s,f),y.return=d,y):(y=Ci(f.type,f.key,f.props,null,d.mode,y),y.ref=nr(d,s,f),y.return=d,y)}function c(d,s,f,y){return s===null||s.tag!==4||s.stateNode.containerInfo!==f.containerInfo||s.stateNode.implementation!==f.implementation?(s=ul(f,d.mode,y),s.return=d,s):(s=i(s,f.children||[]),s.return=d,s)}function v(d,s,f,y,C){return s===null||s.tag!==7?(s=sn(f,d.mode,y,C),s.return=d,s):(s=i(s,f),s.return=d,s)}function g(d,s,f){if(typeof s=="string"&&s!==""||typeof s=="number")return s=al(""+s,d.mode,f),s.return=d,s;if(typeof s=="object"&&s!==null){switch(s.$$typeof){case Gr:return f=Ci(s.type,s.key,s.props,null,d.mode,f),f.ref=nr(d,null,s),f.return=d,f;case yn:return s=ul(s,d.mode,f),s.return=d,s;case Rt:var y=s._init;return g(d,y(s._payload),f)}if(ar(s)||qn(s))return s=sn(s,d.mode,f,null),s.return=d,s;ii(d,s)}return null}function h(d,s,f,y){var C=s!==null?s.key:null;if(typeof f=="string"&&f!==""||typeof f=="number")return C!==null?null:a(d,s,""+f,y);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case Gr:return f.key===C?u(d,s,f,y):null;case yn:return f.key===C?c(d,s,f,y):null;case Rt:return C=f._init,h(d,s,C(f._payload),y)}if(ar(f)||qn(f))return C!==null?null:v(d,s,f,y,null);ii(d,f)}return null}function k(d,s,f,y,C){if(typeof y=="string"&&y!==""||typeof y=="number")return d=d.get(f)||null,a(s,d,""+y,C);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Gr:return d=d.get(y.key===null?f:y.key)||null,u(s,d,y,C);case yn:return d=d.get(y.key===null?f:y.key)||null,c(s,d,y,C);case Rt:var L=y._init;return k(d,s,f,L(y._payload),C)}if(ar(y)||qn(y))return d=d.get(f)||null,v(s,d,y,C,null);ii(s,y)}return null}function x(d,s,f,y){for(var C=null,L=null,$=s,T=s=0,W=null;$!==null&&T<f.length;T++){$.index>T?(W=$,$=null):W=$.sibling;var I=h(d,$,f[T],y);if(I===null){$===null&&($=W);break}e&&$&&I.alternate===null&&t(d,$),s=o(I,s,T),L===null?C=I:L.sibling=I,L=I,$=W}if(T===f.length)return n(d,$),ne&&nn(d,T),C;if($===null){for(;T<f.length;T++)$=g(d,f[T],y),$!==null&&(s=o($,s,T),L===null?C=$:L.sibling=$,L=$);return ne&&nn(d,T),C}for($=r(d,$);T<f.length;T++)W=k($,d,T,f[T],y),W!==null&&(e&&W.alternate!==null&&$.delete(W.key===null?T:W.key),s=o(W,s,T),L===null?C=W:L.sibling=W,L=W);return e&&$.forEach(function(me){return t(d,me)}),ne&&nn(d,T),C}function w(d,s,f,y){var C=qn(f);if(typeof C!="function")throw Error(S(150));if(f=C.call(f),f==null)throw Error(S(151));for(var L=C=null,$=s,T=s=0,W=null,I=f.next();$!==null&&!I.done;T++,I=f.next()){$.index>T?(W=$,$=null):W=$.sibling;var me=h(d,$,I.value,y);if(me===null){$===null&&($=W);break}e&&$&&me.alternate===null&&t(d,$),s=o(me,s,T),L===null?C=me:L.sibling=me,L=me,$=W}if(I.done)return n(d,$),ne&&nn(d,T),C;if($===null){for(;!I.done;T++,I=f.next())I=g(d,I.value,y),I!==null&&(s=o(I,s,T),L===null?C=I:L.sibling=I,L=I);return ne&&nn(d,T),C}for($=r(d,$);!I.done;T++,I=f.next())I=k($,d,T,I.value,y),I!==null&&(e&&I.alternate!==null&&$.delete(I.key===null?T:I.key),s=o(I,s,T),L===null?C=I:L.sibling=I,L=I);return e&&$.forEach(function(fe){return t(d,fe)}),ne&&nn(d,T),C}function R(d,s,f,y){if(typeof f=="object"&&f!==null&&f.type===xn&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case Gr:e:{for(var C=f.key,L=s;L!==null;){if(L.key===C){if(C=f.type,C===xn){if(L.tag===7){n(d,L.sibling),s=i(L,f.props.children),s.return=d,d=s;break e}}else if(L.elementType===C||typeof C=="object"&&C!==null&&C.$$typeof===Rt&&ns(C)===L.type){n(d,L.sibling),s=i(L,f.props),s.ref=nr(d,L,f),s.return=d,d=s;break e}n(d,L);break}else t(d,L);L=L.sibling}f.type===xn?(s=sn(f.props.children,d.mode,y,f.key),s.return=d,d=s):(y=Ci(f.type,f.key,f.props,null,d.mode,y),y.ref=nr(d,s,f),y.return=d,d=y)}return l(d);case yn:e:{for(L=f.key;s!==null;){if(s.key===L)if(s.tag===4&&s.stateNode.containerInfo===f.containerInfo&&s.stateNode.implementation===f.implementation){n(d,s.sibling),s=i(s,f.children||[]),s.return=d,d=s;break e}else{n(d,s);break}else t(d,s);s=s.sibling}s=ul(f,d.mode,y),s.return=d,d=s}return l(d);case Rt:return L=f._init,R(d,s,L(f._payload),y)}if(ar(f))return x(d,s,f,y);if(qn(f))return w(d,s,f,y);ii(d,f)}return typeof f=="string"&&f!==""||typeof f=="number"?(f=""+f,s!==null&&s.tag===6?(n(d,s.sibling),s=i(s,f),s.return=d,d=s):(n(d,s),s=al(f,d.mode,y),s.return=d,d=s),l(d)):n(d,s)}return R}var Bn=qc(!0),Jc=qc(!1),Vr={},yt=en(Vr),Ar=en(Vr),Mr=en(Vr);function an(e){if(e===Vr)throw Error(S(174));return e}function ja(e,t){switch(b(Mr,t),b(Ar,e),b(yt,Vr),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Sl(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Sl(t,e)}te(yt),b(yt,t)}function Hn(){te(yt),te(Ar),te(Mr)}function bc(e){an(Mr.current);var t=an(yt.current),n=Sl(t,e.type);t!==n&&(b(Ar,e),b(yt,n))}function Ia(e){Ar.current===e&&(te(yt),te(Ar))}var re=en(0);function Hi(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var tl=[];function Da(){for(var e=0;e<tl.length;e++)tl[e]._workInProgressVersionPrimary=null;tl.length=0}var yi=Tt.ReactCurrentDispatcher,nl=Tt.ReactCurrentBatchConfig,fn=0,ie=null,pe=null,ge=null,Ui=!1,mr=!1,$r=0,t0=0;function Ne(){throw Error(S(321))}function Ba(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!pt(e[n],t[n]))return!1;return!0}function Ha(e,t,n,r,i,o){if(fn=o,ie=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,yi.current=e===null||e.memoizedState===null?o0:l0,e=n(r,i),mr){o=0;do{if(mr=!1,$r=0,25<=o)throw Error(S(301));o+=1,ge=pe=null,t.updateQueue=null,yi.current=a0,e=n(r,i)}while(mr)}if(yi.current=Vi,t=pe!==null&&pe.next!==null,fn=0,ge=pe=ie=null,Ui=!1,t)throw Error(S(300));return e}function Ua(){var e=$r!==0;return $r=0,e}function mt(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return ge===null?ie.memoizedState=ge=e:ge=ge.next=e,ge}function rt(){if(pe===null){var e=ie.alternate;e=e!==null?e.memoizedState:null}else e=pe.next;var t=ge===null?ie.memoizedState:ge.next;if(t!==null)ge=t,pe=e;else{if(e===null)throw Error(S(310));pe=e,e={memoizedState:pe.memoizedState,baseState:pe.baseState,baseQueue:pe.baseQueue,queue:pe.queue,next:null},ge===null?ie.memoizedState=ge=e:ge=ge.next=e}return ge}function Rr(e,t){return typeof t=="function"?t(e):t}function rl(e){var t=rt(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=pe,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var l=i.next;i.next=o.next,o.next=l}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var a=l=null,u=null,c=o;do{var v=c.lane;if((fn&v)===v)u!==null&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var g={lane:v,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};u===null?(a=u=g,l=r):u=u.next=g,ie.lanes|=v,pn|=v}c=c.next}while(c!==null&&c!==o);u===null?l=r:u.next=a,pt(r,t.memoizedState)||(De=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,ie.lanes|=o,pn|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function il(e){var t=rt(),n=t.queue;if(n===null)throw Error(S(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var l=i=i.next;do o=e(o,l.action),l=l.next;while(l!==i);pt(o,t.memoizedState)||(De=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function ed(){}function td(e,t){var n=ie,r=rt(),i=t(),o=!pt(r.memoizedState,i);if(o&&(r.memoizedState=i,De=!0),r=r.queue,Va(id.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||ge!==null&&ge.memoizedState.tag&1){if(n.flags|=2048,Or(9,rd.bind(null,n,r,i,t),void 0,null),ve===null)throw Error(S(349));(fn&30)!==0||nd(n,t,i)}return i}function nd(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function rd(e,t,n,r){t.value=n,t.getSnapshot=r,od(t)&&ld(e)}function id(e,t,n){return n(function(){od(t)&&ld(e)})}function od(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!pt(e,n)}catch{return!0}}function ld(e){var t=Nt(e,1);t!==null&&ft(t,e,1,-1)}function rs(e){var t=mt();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Rr,lastRenderedState:e},t.queue=e,e=e.dispatch=i0.bind(null,ie,e),[t.memoizedState,e]}function Or(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=ie.updateQueue,t===null?(t={lastEffect:null,stores:null},ie.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function ad(){return rt().memoizedState}function xi(e,t,n,r){var i=mt();ie.flags|=e,i.memoizedState=Or(1|t,n,void 0,r===void 0?null:r)}function io(e,t,n,r){var i=rt();r=r===void 0?null:r;var o=void 0;if(pe!==null){var l=pe.memoizedState;if(o=l.destroy,r!==null&&Ba(r,l.deps)){i.memoizedState=Or(t,n,o,r);return}}ie.flags|=e,i.memoizedState=Or(1|t,n,o,r)}function is(e,t){return xi(8390656,8,e,t)}function Va(e,t){return io(2048,8,e,t)}function ud(e,t){return io(4,2,e,t)}function sd(e,t){return io(4,4,e,t)}function cd(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function dd(e,t,n){return n=n!=null?n.concat([e]):null,io(4,4,cd.bind(null,t,e),n)}function Wa(){}function fd(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ba(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function pd(e,t){var n=rt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Ba(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function hd(e,t,n){return(fn&21)===0?(e.baseState&&(e.baseState=!1,De=!0),e.memoizedState=n):(pt(n,t)||(n=vc(),ie.lanes|=n,pn|=n,e.baseState=!0),t)}function n0(e,t){var n=X;X=n!==0&&4>n?n:4,e(!0);var r=nl.transition;nl.transition={};try{e(!1),t()}finally{X=n,nl.transition=r}}function md(){return rt().memoizedState}function r0(e,t,n){var r=Yt(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},gd(e))vd(t,n);else if(n=Gc(e,t,n,r),n!==null){var i=Re();ft(n,e,r,i),yd(n,t,r)}}function i0(e,t,n){var r=Yt(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(gd(e))vd(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var l=t.lastRenderedState,a=o(l,n);if(i.hasEagerState=!0,i.eagerState=a,pt(a,l)){var u=t.interleaved;u===null?(i.next=i,Oa(t)):(i.next=u.next,u.next=i),t.interleaved=i;return}}catch{}finally{}n=Gc(e,t,i,r),n!==null&&(i=Re(),ft(n,e,r,i),yd(n,t,r))}}function gd(e){var t=e.alternate;return e===ie||t!==null&&t===ie}function vd(e,t){mr=Ui=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function yd(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Sa(e,n)}}var Vi={readContext:nt,useCallback:Ne,useContext:Ne,useEffect:Ne,useImperativeHandle:Ne,useInsertionEffect:Ne,useLayoutEffect:Ne,useMemo:Ne,useReducer:Ne,useRef:Ne,useState:Ne,useDebugValue:Ne,useDeferredValue:Ne,useTransition:Ne,useMutableSource:Ne,useSyncExternalStore:Ne,useId:Ne,unstable_isNewReconciler:!1},o0={readContext:nt,useCallback:function(e,t){return mt().memoizedState=[e,t===void 0?null:t],e},useContext:nt,useEffect:is,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,xi(4194308,4,cd.bind(null,t,e),n)},useLayoutEffect:function(e,t){return xi(4194308,4,e,t)},useInsertionEffect:function(e,t){return xi(4,2,e,t)},useMemo:function(e,t){var n=mt();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=mt();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=r0.bind(null,ie,e),[r.memoizedState,e]},useRef:function(e){var t=mt();return e={current:e},t.memoizedState=e},useState:rs,useDebugValue:Wa,useDeferredValue:function(e){return mt().memoizedState=e},useTransition:function(){var e=rs(!1),t=e[0];return e=n0.bind(null,e[1]),mt().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=ie,i=mt();if(ne){if(n===void 0)throw Error(S(407));n=n()}else{if(n=t(),ve===null)throw Error(S(349));(fn&30)!==0||nd(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,is(id.bind(null,r,o,e),[e]),r.flags|=2048,Or(9,rd.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=mt(),t=ve.identifierPrefix;if(ne){var n=Ct,r=kt;n=(r&~(1<<32-dt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=$r++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=t0++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},l0={readContext:nt,useCallback:fd,useContext:nt,useEffect:Va,useImperativeHandle:dd,useInsertionEffect:ud,useLayoutEffect:sd,useMemo:pd,useReducer:rl,useRef:ad,useState:function(){return rl(Rr)},useDebugValue:Wa,useDeferredValue:function(e){var t=rt();return hd(t,pe.memoizedState,e)},useTransition:function(){var e=rl(Rr)[0],t=rt().memoizedState;return[e,t]},useMutableSource:ed,useSyncExternalStore:td,useId:md,unstable_isNewReconciler:!1},a0={readContext:nt,useCallback:fd,useContext:nt,useEffect:Va,useImperativeHandle:dd,useInsertionEffect:ud,useLayoutEffect:sd,useMemo:pd,useReducer:il,useRef:ad,useState:function(){return il(Rr)},useDebugValue:Wa,useDeferredValue:function(e){var t=rt();return pe===null?t.memoizedState=e:hd(t,pe.memoizedState,e)},useTransition:function(){var e=il(Rr)[0],t=rt().memoizedState;return[e,t]},useMutableSource:ed,useSyncExternalStore:td,useId:md,unstable_isNewReconciler:!1};function Un(e,t){try{var n="",r=t;do n+=Of(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function ol(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function Wl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var u0=typeof WeakMap=="function"?WeakMap:Map;function xd(e,t,n){n=_t(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Qi||(Qi=!0,ea=r),Wl(e,t)},n}function wd(e,t,n){n=_t(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){Wl(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){Wl(e,t),typeof r!="function"&&(Qt===null?Qt=new Set([this]):Qt.add(this));var l=t.stack;this.componentDidCatch(t.value,{componentStack:l!==null?l:""})}),n}function os(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new u0;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=k0.bind(null,e,t,n),t.then(e,e))}function ls(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function as(e,t,n,r,i){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=_t(-1,1),t.tag=2,Wt(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=i,e)}var s0=Tt.ReactCurrentOwner,De=!1;function $e(e,t,n,r){t.child=e===null?Jc(t,null,n,r):Bn(t,e.child,n,r)}function us(e,t,n,r,i){n=n.render;var o=t.ref;return On(t,i),r=Ha(e,t,n,r,o,i),n=Ua(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Lt(e,t,i)):(ne&&n&&La(t),t.flags|=1,$e(e,t,r,i),t.child)}function ss(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ja(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,Sd(e,t,o,r,i)):(e=Ci(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,(e.lanes&i)===0){var l=o.memoizedProps;if(n=n.compare,n=n!==null?n:Pr,n(l,r)&&e.ref===t.ref)return Lt(e,t,i)}return t.flags|=1,e=Gt(o,r),e.ref=t.ref,e.return=t,t.child=e}function Sd(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Pr(o,r)&&e.ref===t.ref)if(De=!1,t.pendingProps=r=o,(e.lanes&i)!==0)(e.flags&131072)!==0&&(De=!0);else return t.lanes=e.lanes,Lt(e,t,i)}return Ql(e,t,n,r,i)}function kd(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},b(Ln,We),We|=n;else{if((n&1073741824)===0)return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,b(Ln,We),We|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,b(Ln,We),We|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,b(Ln,We),We|=r;return $e(e,t,i,n),t.child}function Cd(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Ql(e,t,n,r,i){var o=He(n)?cn:Ae.current;return o=In(t,o),On(t,i),n=Ha(e,t,n,r,o,i),r=Ua(),e!==null&&!De?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,Lt(e,t,i)):(ne&&r&&La(t),t.flags|=1,$e(e,t,n,i),t.child)}function cs(e,t,n,r,i){if(He(n)){var o=!0;Oi(t)}else o=!1;if(On(t,i),t.stateNode===null)wi(e,t),Zc(t,n,r),Vl(t,n,r,i),r=!0;else if(e===null){var l=t.stateNode,a=t.memoizedProps;l.props=a;var u=l.context,c=n.contextType;typeof c=="object"&&c!==null?c=nt(c):(c=He(n)?cn:Ae.current,c=In(t,c));var v=n.getDerivedStateFromProps,g=typeof v=="function"||typeof l.getSnapshotBeforeUpdate=="function";g||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==r||u!==c)&&ts(t,l,r,c),Ot=!1;var h=t.memoizedState;l.state=h,Bi(t,r,l,i),u=t.memoizedState,a!==r||h!==u||Be.current||Ot?(typeof v=="function"&&(Ul(t,n,v,r),u=t.memoizedState),(a=Ot||es(t,n,a,r,h,u,c))?(g||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=u),l.props=r,l.state=u,l.context=c,r=a):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{l=t.stateNode,Kc(e,t),a=t.memoizedProps,c=t.type===t.elementType?a:ut(t.type,a),l.props=c,g=t.pendingProps,h=l.context,u=n.contextType,typeof u=="object"&&u!==null?u=nt(u):(u=He(n)?cn:Ae.current,u=In(t,u));var k=n.getDerivedStateFromProps;(v=typeof k=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==g||h!==u)&&ts(t,l,r,u),Ot=!1,h=t.memoizedState,l.state=h,Bi(t,r,l,i);var x=t.memoizedState;a!==g||h!==x||Be.current||Ot?(typeof k=="function"&&(Ul(t,n,k,r),x=t.memoizedState),(c=Ot||es(t,n,c,r,h,x,u)||!1)?(v||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(r,x,u),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(r,x,u)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=x),l.props=r,l.state=x,l.context=u,r=c):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&h===e.memoizedState||(t.flags|=1024),r=!1)}return Yl(e,t,n,r,o,i)}function Yl(e,t,n,r,i,o){Cd(e,t);var l=(t.flags&128)!==0;if(!r&&!l)return i&&Xu(t,n,!1),Lt(e,t,o);r=t.stateNode,s0.current=t;var a=l&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&l?(t.child=Bn(t,e.child,null,o),t.child=Bn(t,null,a,o)):$e(e,t,a,o),t.memoizedState=r.state,i&&Xu(t,n,!0),t.child}function Ed(e){var t=e.stateNode;t.pendingContext?Ku(e,t.pendingContext,t.pendingContext!==t.context):t.context&&Ku(e,t.context,!1),ja(e,t.containerInfo)}function ds(e,t,n,r,i){return Dn(),Aa(i),t.flags|=256,$e(e,t,n,r),t.child}var Gl={dehydrated:null,treeContext:null,retryLane:0};function Kl(e){return{baseLanes:e,cachePool:null,transitions:null}}function _d(e,t,n){var r=t.pendingProps,i=re.current,o=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(i&2)!==0),a?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),b(re,i&1),e===null)return Bl(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(l=r.children,e=r.fallback,o?(r=t.mode,o=t.child,l={mode:"hidden",children:l},(r&1)===0&&o!==null?(o.childLanes=0,o.pendingProps=l):o=ao(l,r,0,null),e=sn(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=Kl(n),t.memoizedState=Gl,e):Qa(t,l));if(i=e.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return c0(e,t,l,r,a,i,n);if(o){o=r.fallback,l=t.mode,i=e.child,a=i.sibling;var u={mode:"hidden",children:r.children};return(l&1)===0&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=u,t.deletions=null):(r=Gt(i,u),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?o=Gt(a,o):(o=sn(o,l,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,l=e.child.memoizedState,l=l===null?Kl(n):{baseLanes:l.baseLanes|n,cachePool:null,transitions:l.transitions},o.memoizedState=l,o.childLanes=e.childLanes&~n,t.memoizedState=Gl,r}return o=e.child,e=o.sibling,r=Gt(o,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Qa(e,t){return t=ao({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function oi(e,t,n,r){return r!==null&&Aa(r),Bn(t,e.child,null,n),e=Qa(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function c0(e,t,n,r,i,o,l){if(n)return t.flags&256?(t.flags&=-257,r=ol(Error(S(422))),oi(e,t,l,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=ao({mode:"visible",children:r.children},i,0,null),o=sn(o,i,l,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,(t.mode&1)!==0&&Bn(t,e.child,null,l),t.child.memoizedState=Kl(l),t.memoizedState=Gl,o);if((t.mode&1)===0)return oi(e,t,l,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,o=Error(S(419)),r=ol(o,r,void 0),oi(e,t,l,r)}if(a=(l&e.childLanes)!==0,De||a){if(r=ve,r!==null){switch(l&-l){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=(i&(r.suspendedLanes|l))!==0?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,Nt(e,i),ft(r,e,i,-1))}return qa(),r=ol(Error(S(421))),oi(e,t,l,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=C0.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Qe=Vt(i.nextSibling),Ye=t,ne=!0,ct=null,e!==null&&(qe[Je++]=kt,qe[Je++]=Ct,qe[Je++]=dn,kt=e.id,Ct=e.overflow,dn=t),t=Qa(t,r.children),t.flags|=4096,t)}function fs(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),Hl(e.return,t,n)}function ll(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function zd(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if($e(e,t,r.children,n),r=re.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&fs(e,n,t);else if(e.tag===19)fs(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(b(re,r),(t.mode&1)===0)t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&Hi(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),ll(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&Hi(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}ll(t,!0,n,null,o);break;case"together":ll(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function wi(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Lt(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),pn|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(S(153));if(t.child!==null){for(e=t.child,n=Gt(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Gt(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function d0(e,t,n){switch(t.tag){case 3:Ed(t),Dn();break;case 5:bc(t);break;case 1:He(t.type)&&Oi(t);break;case 4:ja(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;b(Ii,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(b(re,re.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?_d(e,t,n):(b(re,re.current&1),e=Lt(e,t,n),e!==null?e.sibling:null);b(re,re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return zd(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),b(re,re.current),r)break;return null;case 22:case 23:return t.lanes=0,kd(e,t,n)}return Lt(e,t,n)}var Pd,Xl,Nd,Ld;Pd=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Xl=function(){};Nd=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,an(yt.current);var o=null;switch(n){case"input":i=vl(e,i),r=vl(e,r),o=[];break;case"select":i=oe({},i,{value:void 0}),r=oe({},r,{value:void 0}),o=[];break;case"textarea":i=wl(e,i),r=wl(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=$i)}kl(n,r);var l;n=null;for(c in i)if(!r.hasOwnProperty(c)&&i.hasOwnProperty(c)&&i[c]!=null)if(c==="style"){var a=i[c];for(l in a)a.hasOwnProperty(l)&&(n||(n={}),n[l]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(wr.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(a=i!=null?i[c]:void 0,r.hasOwnProperty(c)&&u!==a&&(u!=null||a!=null))if(c==="style")if(a){for(l in a)!a.hasOwnProperty(l)||u&&u.hasOwnProperty(l)||(n||(n={}),n[l]="");for(l in u)u.hasOwnProperty(l)&&a[l]!==u[l]&&(n||(n={}),n[l]=u[l])}else n||(o||(o=[]),o.push(c,n)),n=u;else c==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,a=a?a.__html:void 0,u!=null&&a!==u&&(o=o||[]).push(c,u)):c==="children"?typeof u!="string"&&typeof u!="number"||(o=o||[]).push(c,""+u):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(wr.hasOwnProperty(c)?(u!=null&&c==="onScroll"&&ee("scroll",e),o||a===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}};Ld=function(e,t,n,r){n!==r&&(t.flags|=4)};function rr(e,t){if(!ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Le(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function f0(e,t,n){var r=t.pendingProps;switch(Ta(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Le(t),null;case 1:return He(t.type)&&Ri(),Le(t),null;case 3:return r=t.stateNode,Hn(),te(Be),te(Ae),Da(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ri(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,ct!==null&&(ra(ct),ct=null))),Xl(e,t),Le(t),null;case 5:Ia(t);var i=an(Mr.current);if(n=t.type,e!==null&&t.stateNode!=null)Nd(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(S(166));return Le(t),null}if(e=an(yt.current),ri(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[gt]=t,r[Tr]=o,e=(t.mode&1)!==0,n){case"dialog":ee("cancel",r),ee("close",r);break;case"iframe":case"object":case"embed":ee("load",r);break;case"video":case"audio":for(i=0;i<sr.length;i++)ee(sr[i],r);break;case"source":ee("error",r);break;case"img":case"image":case"link":ee("error",r),ee("load",r);break;case"details":ee("toggle",r);break;case"input":Su(r,o),ee("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},ee("invalid",r);break;case"textarea":Cu(r,o),ee("invalid",r)}kl(n,o),i=null;for(var l in o)if(o.hasOwnProperty(l)){var a=o[l];l==="children"?typeof a=="string"?r.textContent!==a&&(o.suppressHydrationWarning!==!0&&ni(r.textContent,a,e),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(o.suppressHydrationWarning!==!0&&ni(r.textContent,a,e),i=["children",""+a]):wr.hasOwnProperty(l)&&a!=null&&l==="onScroll"&&ee("scroll",r)}switch(n){case"input":Kr(r),ku(r,o,!0);break;case"textarea":Kr(r),Eu(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=$i)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{l=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=nc(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=l.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=l.createElement(n,{is:r.is}):(e=l.createElement(n),n==="select"&&(l=e,r.multiple?l.multiple=!0:r.size&&(l.size=r.size))):e=l.createElementNS(e,n),e[gt]=t,e[Tr]=r,Pd(e,t,!1,!1),t.stateNode=e;e:{switch(l=Cl(n,r),n){case"dialog":ee("cancel",e),ee("close",e),i=r;break;case"iframe":case"object":case"embed":ee("load",e),i=r;break;case"video":case"audio":for(i=0;i<sr.length;i++)ee(sr[i],e);i=r;break;case"source":ee("error",e),i=r;break;case"img":case"image":case"link":ee("error",e),ee("load",e),i=r;break;case"details":ee("toggle",e),i=r;break;case"input":Su(e,r),i=vl(e,r),ee("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=oe({},r,{value:void 0}),ee("invalid",e);break;case"textarea":Cu(e,r),i=wl(e,r),ee("invalid",e);break;default:i=r}kl(n,i),a=i;for(o in a)if(a.hasOwnProperty(o)){var u=a[o];o==="style"?oc(e,u):o==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&rc(e,u)):o==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Sr(e,u):typeof u=="number"&&Sr(e,""+u):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(wr.hasOwnProperty(o)?u!=null&&o==="onScroll"&&ee("scroll",e):u!=null&&ma(e,o,u,l))}switch(n){case"input":Kr(e),ku(e,r,!1);break;case"textarea":Kr(e),Eu(e);break;case"option":r.value!=null&&e.setAttribute("value",""+qt(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?An(e,!!r.multiple,o,!1):r.defaultValue!=null&&An(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=$i)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Le(t),null;case 6:if(e&&t.stateNode!=null)Ld(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(S(166));if(n=an(Mr.current),an(yt.current),ri(t)){if(r=t.stateNode,n=t.memoizedProps,r[gt]=t,(o=r.nodeValue!==n)&&(e=Ye,e!==null))switch(e.tag){case 3:ni(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ni(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[gt]=t,t.stateNode=r}return Le(t),null;case 13:if(te(re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ne&&Qe!==null&&(t.mode&1)!==0&&(t.flags&128)===0)Yc(),Dn(),t.flags|=98560,o=!1;else if(o=ri(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(S(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(S(317));o[gt]=t}else Dn(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Le(t),o=!1}else ct!==null&&(ra(ct),ct=null),o=!0;if(!o)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(re.current&1)!==0?he===0&&(he=3):qa())),t.updateQueue!==null&&(t.flags|=4),Le(t),null);case 4:return Hn(),Xl(e,t),e===null&&Nr(t.stateNode.containerInfo),Le(t),null;case 10:return Ra(t.type._context),Le(t),null;case 17:return He(t.type)&&Ri(),Le(t),null;case 19:if(te(re),o=t.memoizedState,o===null)return Le(t),null;if(r=(t.flags&128)!==0,l=o.rendering,l===null)if(r)rr(o,!1);else{if(he!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=Hi(e),l!==null){for(t.flags|=128,rr(o,!1),r=l.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,l=o.alternate,l===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=l.childLanes,o.lanes=l.lanes,o.child=l.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=l.memoizedProps,o.memoizedState=l.memoizedState,o.updateQueue=l.updateQueue,o.type=l.type,e=l.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return b(re,re.current&1|2),t.child}e=e.sibling}o.tail!==null&&se()>Vn&&(t.flags|=128,r=!0,rr(o,!1),t.lanes=4194304)}else{if(!r)if(e=Hi(l),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),rr(o,!0),o.tail===null&&o.tailMode==="hidden"&&!l.alternate&&!ne)return Le(t),null}else 2*se()-o.renderingStartTime>Vn&&n!==1073741824&&(t.flags|=128,r=!0,rr(o,!1),t.lanes=4194304);o.isBackwards?(l.sibling=t.child,t.child=l):(n=o.last,n!==null?n.sibling=l:t.child=l,o.last=l)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=se(),t.sibling=null,n=re.current,b(re,r?n&1|2:n&1),t):(Le(t),null);case 22:case 23:return Za(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(We&1073741824)!==0&&(Le(t),t.subtreeFlags&6&&(t.flags|=8192)):Le(t),null;case 24:return null;case 25:return null}throw Error(S(156,t.tag))}function p0(e,t){switch(Ta(t),t.tag){case 1:return He(t.type)&&Ri(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Hn(),te(Be),te(Ae),Da(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Ia(t),null;case 13:if(te(re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(S(340));Dn()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return te(re),null;case 4:return Hn(),null;case 10:return Ra(t.type._context),null;case 22:case 23:return Za(),null;case 24:return null;default:return null}}var li=!1,Te=!1,h0=typeof WeakSet=="function"?WeakSet:Set,M=null;function Nn(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){ae(e,t,r)}else n.current=null}function Zl(e,t,n){try{n()}catch(r){ae(e,t,r)}}var ps=!1;function m0(e,t){if($l=Ti,e=$c(),Na(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var l=0,a=-1,u=-1,c=0,v=0,g=e,h=null;t:for(;;){for(var k;g!==n||i!==0&&g.nodeType!==3||(a=l+i),g!==o||r!==0&&g.nodeType!==3||(u=l+r),g.nodeType===3&&(l+=g.nodeValue.length),(k=g.firstChild)!==null;)h=g,g=k;for(;;){if(g===e)break t;if(h===n&&++c===i&&(a=l),h===o&&++v===r&&(u=l),(k=g.nextSibling)!==null)break;g=h,h=g.parentNode}g=k}n=a===-1||u===-1?null:{start:a,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rl={focusedElem:e,selectionRange:n},Ti=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var x=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(x!==null){var w=x.memoizedProps,R=x.memoizedState,d=t.stateNode,s=d.getSnapshotBeforeUpdate(t.elementType===t.type?w:ut(t.type,w),R);d.__reactInternalSnapshotBeforeUpdate=s}break;case 3:var f=t.stateNode.containerInfo;f.nodeType===1?f.textContent="":f.nodeType===9&&f.documentElement&&f.removeChild(f.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(S(163))}}catch(y){ae(t,t.return,y)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return x=ps,ps=!1,x}function gr(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&Zl(t,n,o)}i=i.next}while(i!==r)}}function oo(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function ql(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function Td(e){var t=e.alternate;t!==null&&(e.alternate=null,Td(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[gt],delete t[Tr],delete t[jl],delete t[qp],delete t[Jp])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Ad(e){return e.tag===5||e.tag===3||e.tag===4}function hs(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Ad(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Jl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=$i));else if(r!==4&&(e=e.child,e!==null))for(Jl(e,t,n),e=e.sibling;e!==null;)Jl(e,t,n),e=e.sibling}function bl(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(bl(e,t,n),e=e.sibling;e!==null;)bl(e,t,n),e=e.sibling}var Ce=null,st=!1;function Mt(e,t,n){for(n=n.child;n!==null;)Md(e,t,n),n=n.sibling}function Md(e,t,n){if(vt&&typeof vt.onCommitFiberUnmount=="function")try{vt.onCommitFiberUnmount(qi,n)}catch{}switch(n.tag){case 5:Te||Nn(n,t);case 6:var r=Ce,i=st;Ce=null,Mt(e,t,n),Ce=r,st=i,Ce!==null&&(st?(e=Ce,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):Ce.removeChild(n.stateNode));break;case 18:Ce!==null&&(st?(e=Ce,n=n.stateNode,e.nodeType===8?bo(e.parentNode,n):e.nodeType===1&&bo(e,n),_r(e)):bo(Ce,n.stateNode));break;case 4:r=Ce,i=st,Ce=n.stateNode.containerInfo,st=!0,Mt(e,t,n),Ce=r,st=i;break;case 0:case 11:case 14:case 15:if(!Te&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,l=o.destroy;o=o.tag,l!==void 0&&((o&2)!==0||(o&4)!==0)&&Zl(n,t,l),i=i.next}while(i!==r)}Mt(e,t,n);break;case 1:if(!Te&&(Nn(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){ae(n,t,a)}Mt(e,t,n);break;case 21:Mt(e,t,n);break;case 22:n.mode&1?(Te=(r=Te)||n.memoizedState!==null,Mt(e,t,n),Te=r):Mt(e,t,n);break;default:Mt(e,t,n)}}function ms(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new h0),t.forEach(function(r){var i=E0.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function at(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,l=t,a=l;e:for(;a!==null;){switch(a.tag){case 5:Ce=a.stateNode,st=!1;break e;case 3:Ce=a.stateNode.containerInfo,st=!0;break e;case 4:Ce=a.stateNode.containerInfo,st=!0;break e}a=a.return}if(Ce===null)throw Error(S(160));Md(o,l,i),Ce=null,st=!1;var u=i.alternate;u!==null&&(u.return=null),i.return=null}catch(c){ae(i,t,c)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)$d(t,e),t=t.sibling}function $d(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(at(t,e),ht(e),r&4){try{gr(3,e,e.return),oo(3,e)}catch(w){ae(e,e.return,w)}try{gr(5,e,e.return)}catch(w){ae(e,e.return,w)}}break;case 1:at(t,e),ht(e),r&512&&n!==null&&Nn(n,n.return);break;case 5:if(at(t,e),ht(e),r&512&&n!==null&&Nn(n,n.return),e.flags&32){var i=e.stateNode;try{Sr(i,"")}catch(w){ae(e,e.return,w)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,l=n!==null?n.memoizedProps:o,a=e.type,u=e.updateQueue;if(e.updateQueue=null,u!==null)try{a==="input"&&o.type==="radio"&&o.name!=null&&ec(i,o),Cl(a,l);var c=Cl(a,o);for(l=0;l<u.length;l+=2){var v=u[l],g=u[l+1];v==="style"?oc(i,g):v==="dangerouslySetInnerHTML"?rc(i,g):v==="children"?Sr(i,g):ma(i,v,g,c)}switch(a){case"input":yl(i,o);break;case"textarea":tc(i,o);break;case"select":var h=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var k=o.value;k!=null?An(i,!!o.multiple,k,!1):h!==!!o.multiple&&(o.defaultValue!=null?An(i,!!o.multiple,o.defaultValue,!0):An(i,!!o.multiple,o.multiple?[]:"",!1))}i[Tr]=o}catch(w){ae(e,e.return,w)}}break;case 6:if(at(t,e),ht(e),r&4){if(e.stateNode===null)throw Error(S(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(w){ae(e,e.return,w)}}break;case 3:if(at(t,e),ht(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{_r(t.containerInfo)}catch(w){ae(e,e.return,w)}break;case 4:at(t,e),ht(e);break;case 13:at(t,e),ht(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(Ka=se())),r&4&&ms(e);break;case 22:if(v=n!==null&&n.memoizedState!==null,e.mode&1?(Te=(c=Te)||v,at(t,e),Te=c):at(t,e),ht(e),r&8192){if(c=e.memoizedState!==null,(e.stateNode.isHidden=c)&&!v&&(e.mode&1)!==0)for(M=e,v=e.child;v!==null;){for(g=M=v;M!==null;){switch(h=M,k=h.child,h.tag){case 0:case 11:case 14:case 15:gr(4,h,h.return);break;case 1:Nn(h,h.return);var x=h.stateNode;if(typeof x.componentWillUnmount=="function"){r=h,n=h.return;try{t=r,x.props=t.memoizedProps,x.state=t.memoizedState,x.componentWillUnmount()}catch(w){ae(r,n,w)}}break;case 5:Nn(h,h.return);break;case 22:if(h.memoizedState!==null){vs(g);continue}}k!==null?(k.return=h,M=k):vs(g)}v=v.sibling}e:for(v=null,g=e;;){if(g.tag===5){if(v===null){v=g;try{i=g.stateNode,c?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(a=g.stateNode,u=g.memoizedProps.style,l=u!=null&&u.hasOwnProperty("display")?u.display:null,a.style.display=ic("display",l))}catch(w){ae(e,e.return,w)}}}else if(g.tag===6){if(v===null)try{g.stateNode.nodeValue=c?"":g.memoizedProps}catch(w){ae(e,e.return,w)}}else if((g.tag!==22&&g.tag!==23||g.memoizedState===null||g===e)&&g.child!==null){g.child.return=g,g=g.child;continue}if(g===e)break e;for(;g.sibling===null;){if(g.return===null||g.return===e)break e;v===g&&(v=null),g=g.return}v===g&&(v=null),g.sibling.return=g.return,g=g.sibling}}break;case 19:at(t,e),ht(e),r&4&&ms(e);break;case 21:break;default:at(t,e),ht(e)}}function ht(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Ad(n)){var r=n;break e}n=n.return}throw Error(S(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(Sr(i,""),r.flags&=-33);var o=hs(e);bl(e,o,i);break;case 3:case 4:var l=r.stateNode.containerInfo,a=hs(e);Jl(e,a,l);break;default:throw Error(S(161))}}catch(u){ae(e,e.return,u)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function g0(e,t,n){M=e,Rd(e)}function Rd(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var i=M,o=i.child;if(i.tag===22&&r){var l=i.memoizedState!==null||li;if(!l){var a=i.alternate,u=a!==null&&a.memoizedState!==null||Te;a=li;var c=Te;if(li=l,(Te=u)&&!c)for(M=i;M!==null;)l=M,u=l.child,l.tag===22&&l.memoizedState!==null?ys(i):u!==null?(u.return=l,M=u):ys(i);for(;o!==null;)M=o,Rd(o),o=o.sibling;M=i,li=a,Te=c}gs(e)}else(i.subtreeFlags&8772)!==0&&o!==null?(o.return=i,M=o):gs(e)}}function gs(e){for(;M!==null;){var t=M;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Te||oo(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Te)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:ut(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&bu(t,o,r);break;case 3:var l=t.updateQueue;if(l!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}bu(t,l,n)}break;case 5:var a=t.stateNode;if(n===null&&t.flags&4){n=a;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var c=t.alternate;if(c!==null){var v=c.memoizedState;if(v!==null){var g=v.dehydrated;g!==null&&_r(g)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(S(163))}Te||t.flags&512&&ql(t)}catch(h){ae(t,t.return,h)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function vs(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function ys(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{oo(4,t)}catch(u){ae(t,n,u)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(u){ae(t,i,u)}}var o=t.return;try{ql(t)}catch(u){ae(t,o,u)}break;case 5:var l=t.return;try{ql(t)}catch(u){ae(t,l,u)}}}catch(u){ae(t,t.return,u)}if(t===e){M=null;break}var a=t.sibling;if(a!==null){a.return=t.return,M=a;break}M=t.return}}var v0=Math.ceil,Wi=Tt.ReactCurrentDispatcher,Ya=Tt.ReactCurrentOwner,et=Tt.ReactCurrentBatchConfig,V=0,ve=null,de=null,Ee=0,We=0,Ln=en(0),he=0,Fr=null,pn=0,lo=0,Ga=0,vr=null,Ie=null,Ka=0,Vn=1/0,wt=null,Qi=!1,ea=null,Qt=null,ai=!1,Dt=null,Yi=0,yr=0,ta=null,Si=-1,ki=0;function Re(){return(V&6)!==0?se():Si!==-1?Si:Si=se()}function Yt(e){return(e.mode&1)===0?1:(V&2)!==0&&Ee!==0?Ee&-Ee:e0.transition!==null?(ki===0&&(ki=vc()),ki):(e=X,e!==0||(e=window.event,e=e===void 0?16:Ec(e.type)),e)}function ft(e,t,n,r){if(50<yr)throw yr=0,ta=null,Error(S(185));Br(e,n,r),((V&2)===0||e!==ve)&&(e===ve&&((V&2)===0&&(lo|=n),he===4&&jt(e,Ee)),Ue(e,r),n===1&&V===0&&(t.mode&1)===0&&(Vn=se()+500,no&&tn()))}function Ue(e,t){var n=e.callbackNode;ep(e,t);var r=Li(e,e===ve?Ee:0);if(r===0)n!==null&&Pu(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Pu(n),t===1)e.tag===0?bp(xs.bind(null,e)):Vc(xs.bind(null,e)),Xp(function(){(V&6)===0&&tn()}),n=null;else{switch(yc(r)){case 1:n=wa;break;case 4:n=mc;break;case 16:n=Ni;break;case 536870912:n=gc;break;default:n=Ni}n=Ud(n,Od.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function Od(e,t){if(Si=-1,ki=0,(V&6)!==0)throw Error(S(327));var n=e.callbackNode;if(Fn()&&e.callbackNode!==n)return null;var r=Li(e,e===ve?Ee:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=Gi(e,r);else{t=r;var i=V;V|=2;var o=jd();(ve!==e||Ee!==t)&&(wt=null,Vn=se()+500,un(e,t));do try{w0();break}catch(a){Fd(e,a)}while(1);$a(),Wi.current=o,V=i,de!==null?t=0:(ve=null,Ee=0,t=he)}if(t!==0){if(t===2&&(i=Nl(e),i!==0&&(r=i,t=na(e,i))),t===1)throw n=Fr,un(e,0),jt(e,r),Ue(e,se()),n;if(t===6)jt(e,r);else{if(i=e.current.alternate,(r&30)===0&&!y0(i)&&(t=Gi(e,r),t===2&&(o=Nl(e),o!==0&&(r=o,t=na(e,o))),t===1))throw n=Fr,un(e,0),jt(e,r),Ue(e,se()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(S(345));case 2:rn(e,Ie,wt);break;case 3:if(jt(e,r),(r&130023424)===r&&(t=Ka+500-se(),10<t)){if(Li(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){Re(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=Fl(rn.bind(null,e,Ie,wt),t);break}rn(e,Ie,wt);break;case 4:if(jt(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var l=31-dt(r);o=1<<l,l=t[l],l>i&&(i=l),r&=~o}if(r=i,r=se()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*v0(r/1960))-r,10<r){e.timeoutHandle=Fl(rn.bind(null,e,Ie,wt),r);break}rn(e,Ie,wt);break;case 5:rn(e,Ie,wt);break;default:throw Error(S(329))}}}return Ue(e,se()),e.callbackNode===n?Od.bind(null,e):null}function na(e,t){var n=vr;return e.current.memoizedState.isDehydrated&&(un(e,t).flags|=256),e=Gi(e,t),e!==2&&(t=Ie,Ie=n,t!==null&&ra(t)),e}function ra(e){Ie===null?Ie=e:Ie.push.apply(Ie,e)}function y0(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!pt(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function jt(e,t){for(t&=~Ga,t&=~lo,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-dt(t),r=1<<n;e[n]=-1,t&=~r}}function xs(e){if((V&6)!==0)throw Error(S(327));Fn();var t=Li(e,0);if((t&1)===0)return Ue(e,se()),null;var n=Gi(e,t);if(e.tag!==0&&n===2){var r=Nl(e);r!==0&&(t=r,n=na(e,r))}if(n===1)throw n=Fr,un(e,0),jt(e,t),Ue(e,se()),n;if(n===6)throw Error(S(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,rn(e,Ie,wt),Ue(e,se()),null}function Xa(e,t){var n=V;V|=1;try{return e(t)}finally{V=n,V===0&&(Vn=se()+500,no&&tn())}}function hn(e){Dt!==null&&Dt.tag===0&&(V&6)===0&&Fn();var t=V;V|=1;var n=et.transition,r=X;try{if(et.transition=null,X=1,e)return e()}finally{X=r,et.transition=n,V=t,(V&6)===0&&tn()}}function Za(){We=Ln.current,te(Ln)}function un(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,Kp(n)),de!==null)for(n=de.return;n!==null;){var r=n;switch(Ta(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Ri();break;case 3:Hn(),te(Be),te(Ae),Da();break;case 5:Ia(r);break;case 4:Hn();break;case 13:te(re);break;case 19:te(re);break;case 10:Ra(r.type._context);break;case 22:case 23:Za()}n=n.return}if(ve=e,de=e=Gt(e.current,null),Ee=We=t,he=0,Fr=null,Ga=lo=pn=0,Ie=vr=null,ln!==null){for(t=0;t<ln.length;t++)if(n=ln[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var l=o.next;o.next=i,r.next=l}n.pending=r}ln=null}return e}function Fd(e,t){do{var n=de;try{if($a(),yi.current=Vi,Ui){for(var r=ie.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ui=!1}if(fn=0,ge=pe=ie=null,mr=!1,$r=0,Ya.current=null,n===null||n.return===null){he=1,Fr=t,de=null;break}e:{var o=e,l=n.return,a=n,u=t;if(t=Ee,a.flags|=32768,u!==null&&typeof u=="object"&&typeof u.then=="function"){var c=u,v=a,g=v.tag;if((v.mode&1)===0&&(g===0||g===11||g===15)){var h=v.alternate;h?(v.updateQueue=h.updateQueue,v.memoizedState=h.memoizedState,v.lanes=h.lanes):(v.updateQueue=null,v.memoizedState=null)}var k=ls(l);if(k!==null){k.flags&=-257,as(k,l,a,o,t),k.mode&1&&os(o,c,t),t=k,u=c;var x=t.updateQueue;if(x===null){var w=new Set;w.add(u),t.updateQueue=w}else x.add(u);break e}else{if((t&1)===0){os(o,c,t),qa();break e}u=Error(S(426))}}else if(ne&&a.mode&1){var R=ls(l);if(R!==null){(R.flags&65536)===0&&(R.flags|=256),as(R,l,a,o,t),Aa(Un(u,a));break e}}o=u=Un(u,a),he!==4&&(he=2),vr===null?vr=[o]:vr.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var d=xd(o,u,t);Ju(o,d);break e;case 1:a=u;var s=o.type,f=o.stateNode;if((o.flags&128)===0&&(typeof s.getDerivedStateFromError=="function"||f!==null&&typeof f.componentDidCatch=="function"&&(Qt===null||!Qt.has(f)))){o.flags|=65536,t&=-t,o.lanes|=t;var y=wd(o,a,t);Ju(o,y);break e}}o=o.return}while(o!==null)}Dd(n)}catch(C){t=C,de===n&&n!==null&&(de=n=n.return);continue}break}while(1)}function jd(){var e=Wi.current;return Wi.current=Vi,e===null?Vi:e}function qa(){(he===0||he===3||he===2)&&(he=4),ve===null||(pn&268435455)===0&&(lo&268435455)===0||jt(ve,Ee)}function Gi(e,t){var n=V;V|=2;var r=jd();(ve!==e||Ee!==t)&&(wt=null,un(e,t));do try{x0();break}catch(i){Fd(e,i)}while(1);if($a(),V=n,Wi.current=r,de!==null)throw Error(S(261));return ve=null,Ee=0,he}function x0(){for(;de!==null;)Id(de)}function w0(){for(;de!==null&&!Qf();)Id(de)}function Id(e){var t=Hd(e.alternate,e,We);e.memoizedProps=e.pendingProps,t===null?Dd(e):de=t,Ya.current=null}function Dd(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=f0(n,t,We),n!==null){de=n;return}}else{if(n=p0(n,t),n!==null){n.flags&=32767,de=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{he=6,de=null;return}}if(t=t.sibling,t!==null){de=t;return}de=t=e}while(t!==null);he===0&&(he=5)}function rn(e,t,n){var r=X,i=et.transition;try{et.transition=null,X=1,S0(e,t,n,r)}finally{et.transition=i,X=r}return null}function S0(e,t,n,r){do Fn();while(Dt!==null);if((V&6)!==0)throw Error(S(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(S(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(tp(e,o),e===ve&&(de=ve=null,Ee=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||ai||(ai=!0,Ud(Ni,function(){return Fn(),null})),o=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||o){o=et.transition,et.transition=null;var l=X;X=1;var a=V;V|=4,Ya.current=null,m0(e,n),$d(n,e),Hp(Rl),Ti=!!$l,Rl=$l=null,e.current=n,g0(n),Yf(),V=a,X=l,et.transition=o}else e.current=n;if(ai&&(ai=!1,Dt=e,Yi=i),o=e.pendingLanes,o===0&&(Qt=null),Xf(n.stateNode),Ue(e,se()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(Qi)throw Qi=!1,e=ea,ea=null,e;return(Yi&1)!==0&&e.tag!==0&&Fn(),o=e.pendingLanes,(o&1)!==0?e===ta?yr++:(yr=0,ta=e):yr=0,tn(),null}function Fn(){if(Dt!==null){var e=yc(Yi),t=et.transition,n=X;try{if(et.transition=null,X=16>e?16:e,Dt===null)var r=!1;else{if(e=Dt,Dt=null,Yi=0,(V&6)!==0)throw Error(S(331));var i=V;for(V|=4,M=e.current;M!==null;){var o=M,l=o.child;if((M.flags&16)!==0){var a=o.deletions;if(a!==null){for(var u=0;u<a.length;u++){var c=a[u];for(M=c;M!==null;){var v=M;switch(v.tag){case 0:case 11:case 15:gr(8,v,o)}var g=v.child;if(g!==null)g.return=v,M=g;else for(;M!==null;){v=M;var h=v.sibling,k=v.return;if(Td(v),v===c){M=null;break}if(h!==null){h.return=k,M=h;break}M=k}}}var x=o.alternate;if(x!==null){var w=x.child;if(w!==null){x.child=null;do{var R=w.sibling;w.sibling=null,w=R}while(w!==null)}}M=o}}if((o.subtreeFlags&2064)!==0&&l!==null)l.return=o,M=l;else e:for(;M!==null;){if(o=M,(o.flags&2048)!==0)switch(o.tag){case 0:case 11:case 15:gr(9,o,o.return)}var d=o.sibling;if(d!==null){d.return=o.return,M=d;break e}M=o.return}}var s=e.current;for(M=s;M!==null;){l=M;var f=l.child;if((l.subtreeFlags&2064)!==0&&f!==null)f.return=l,M=f;else e:for(l=s;M!==null;){if(a=M,(a.flags&2048)!==0)try{switch(a.tag){case 0:case 11:case 15:oo(9,a)}}catch(C){ae(a,a.return,C)}if(a===l){M=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,M=y;break e}M=a.return}}if(V=i,tn(),vt&&typeof vt.onPostCommitFiberRoot=="function")try{vt.onPostCommitFiberRoot(qi,e)}catch{}r=!0}return r}finally{X=n,et.transition=t}}return!1}function ws(e,t,n){t=Un(n,t),t=xd(e,t,1),e=Wt(e,t,1),t=Re(),e!==null&&(Br(e,1,t),Ue(e,t))}function ae(e,t,n){if(e.tag===3)ws(e,e,n);else for(;t!==null;){if(t.tag===3){ws(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Qt===null||!Qt.has(r))){e=Un(n,e),e=wd(t,e,1),t=Wt(t,e,1),e=Re(),t!==null&&(Br(t,1,e),Ue(t,e));break}}t=t.return}}function k0(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=Re(),e.pingedLanes|=e.suspendedLanes&n,ve===e&&(Ee&n)===n&&(he===4||he===3&&(Ee&130023424)===Ee&&500>se()-Ka?un(e,0):Ga|=n),Ue(e,t)}function Bd(e,t){t===0&&((e.mode&1)===0?t=1:(t=qr,qr<<=1,(qr&130023424)===0&&(qr=4194304)));var n=Re();e=Nt(e,t),e!==null&&(Br(e,t,n),Ue(e,n))}function C0(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Bd(e,n)}function E0(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(S(314))}r!==null&&r.delete(t),Bd(e,n)}var Hd;Hd=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Be.current)De=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return De=!1,d0(e,t,n);De=(e.flags&131072)!==0}else De=!1,ne&&(t.flags&1048576)!==0&&Wc(t,ji,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;wi(e,t),e=t.pendingProps;var i=In(t,Ae.current);On(t,n),i=Ha(null,t,r,e,i,n);var o=Ua();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,He(r)?(o=!0,Oi(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Fa(t),i.updater=ro,t.stateNode=i,i._reactInternals=t,Vl(t,r,e,n),t=Yl(null,t,r,!0,o,n)):(t.tag=0,ne&&o&&La(t),$e(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(wi(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=z0(r),e=ut(r,e),i){case 0:t=Ql(null,t,r,e,n);break e;case 1:t=cs(null,t,r,e,n);break e;case 11:t=us(null,t,r,e,n);break e;case 14:t=ss(null,t,r,ut(r.type,e),n);break e}throw Error(S(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),Ql(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),cs(e,t,r,i,n);case 3:e:{if(Ed(t),e===null)throw Error(S(387));r=t.pendingProps,o=t.memoizedState,i=o.element,Kc(e,t),Bi(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Un(Error(S(423)),t),t=ds(e,t,r,n,i);break e}else if(r!==i){i=Un(Error(S(424)),t),t=ds(e,t,r,n,i);break e}else for(Qe=Vt(t.stateNode.containerInfo.firstChild),Ye=t,ne=!0,ct=null,n=Jc(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Dn(),r===i){t=Lt(e,t,n);break e}$e(e,t,r,n)}t=t.child}return t;case 5:return bc(t),e===null&&Bl(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,l=i.children,Ol(r,i)?l=null:o!==null&&Ol(r,o)&&(t.flags|=32),Cd(e,t),$e(e,t,l,n),t.child;case 6:return e===null&&Bl(t),null;case 13:return _d(e,t,n);case 4:return ja(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Bn(t,null,r,n):$e(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),us(e,t,r,i,n);case 7:return $e(e,t,t.pendingProps,n),t.child;case 8:return $e(e,t,t.pendingProps.children,n),t.child;case 12:return $e(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,l=i.value,b(Ii,r._currentValue),r._currentValue=l,o!==null)if(pt(o.value,l)){if(o.children===i.children&&!Be.current){t=Lt(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var a=o.dependencies;if(a!==null){l=o.child;for(var u=a.firstContext;u!==null;){if(u.context===r){if(o.tag===1){u=_t(-1,n&-n),u.tag=2;var c=o.updateQueue;if(c!==null){c=c.shared;var v=c.pending;v===null?u.next=u:(u.next=v.next,v.next=u),c.pending=u}}o.lanes|=n,u=o.alternate,u!==null&&(u.lanes|=n),Hl(o.return,n,t),a.lanes|=n;break}u=u.next}}else if(o.tag===10)l=o.type===t.type?null:o.child;else if(o.tag===18){if(l=o.return,l===null)throw Error(S(341));l.lanes|=n,a=l.alternate,a!==null&&(a.lanes|=n),Hl(l,n,t),l=o.sibling}else l=o.child;if(l!==null)l.return=o;else for(l=o;l!==null;){if(l===t){l=null;break}if(o=l.sibling,o!==null){o.return=l.return,l=o;break}l=l.return}o=l}$e(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,On(t,n),i=nt(i),r=r(i),t.flags|=1,$e(e,t,r,n),t.child;case 14:return r=t.type,i=ut(r,t.pendingProps),i=ut(r.type,i),ss(e,t,r,i,n);case 15:return Sd(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:ut(r,i),wi(e,t),t.tag=1,He(r)?(e=!0,Oi(t)):e=!1,On(t,n),Zc(t,r,i),Vl(t,r,i,n),Yl(null,t,r,!0,e,n);case 19:return zd(e,t,n);case 22:return kd(e,t,n)}throw Error(S(156,t.tag))};function Ud(e,t){return hc(e,t)}function _0(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function be(e,t,n,r){return new _0(e,t,n,r)}function Ja(e){return e=e.prototype,!(!e||!e.isReactComponent)}function z0(e){if(typeof e=="function")return Ja(e)?1:0;if(e!=null){if(e=e.$$typeof,e===va)return 11;if(e===ya)return 14}return 2}function Gt(e,t){var n=e.alternate;return n===null?(n=be(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Ci(e,t,n,r,i,o){var l=2;if(r=e,typeof e=="function")Ja(e)&&(l=1);else if(typeof e=="string")l=5;else e:switch(e){case xn:return sn(n.children,i,o,t);case ga:l=8,i|=8;break;case pl:return e=be(12,n,t,i|2),e.elementType=pl,e.lanes=o,e;case hl:return e=be(13,n,t,i),e.elementType=hl,e.lanes=o,e;case ml:return e=be(19,n,t,i),e.elementType=ml,e.lanes=o,e;case qs:return ao(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case Xs:l=10;break e;case Zs:l=9;break e;case va:l=11;break e;case ya:l=14;break e;case Rt:l=16,r=null;break e}throw Error(S(130,e==null?e:typeof e,""))}return t=be(l,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function sn(e,t,n,r){return e=be(7,e,r,t),e.lanes=n,e}function ao(e,t,n,r){return e=be(22,e,r,t),e.elementType=qs,e.lanes=n,e.stateNode={isHidden:!1},e}function al(e,t,n){return e=be(6,e,null,t),e.lanes=n,e}function ul(e,t,n){return t=be(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function P0(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uo(0),this.expirationTimes=Uo(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uo(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ba(e,t,n,r,i,o,l,a,u){return e=new P0(e,t,n,a,u),t===1?(t=1,o===!0&&(t|=8)):t=0,o=be(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Fa(o),e}function N0(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:yn,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Vd(e){if(!e)return Jt;e=e._reactInternals;e:{if(gn(e)!==e||e.tag!==1)throw Error(S(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(He(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(S(171))}if(e.tag===1){var n=e.type;if(He(n))return Uc(e,n,t)}return t}function Wd(e,t,n,r,i,o,l,a,u){return e=ba(n,r,!0,e,i,o,l,a,u),e.context=Vd(null),n=e.current,r=Re(),i=Yt(n),o=_t(r,i),o.callback=t!=null?t:null,Wt(n,o,i),e.current.lanes=i,Br(e,i,r),Ue(e,r),e}function uo(e,t,n,r){var i=t.current,o=Re(),l=Yt(i);return n=Vd(n),t.context===null?t.context=n:t.pendingContext=n,t=_t(o,l),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=Wt(i,t,l),e!==null&&(ft(e,i,l,o),vi(e,i,l)),l}function Ki(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function Ss(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function eu(e,t){Ss(e,t),(e=e.alternate)&&Ss(e,t)}function L0(){return null}var Qd=typeof reportError=="function"?reportError:function(e){console.error(e)};function tu(e){this._internalRoot=e}so.prototype.render=tu.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(S(409));uo(e,t,null,null)};so.prototype.unmount=tu.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;hn(function(){uo(null,e,null,null)}),t[Pt]=null}};function so(e){this._internalRoot=e}so.prototype.unstable_scheduleHydration=function(e){if(e){var t=Sc();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Ft.length&&t!==0&&t<Ft[n].priority;n++);Ft.splice(n,0,e),n===0&&Cc(e)}};function nu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function co(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function ks(){}function T0(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var c=Ki(l);o.call(c)}}var l=Wd(t,r,e,0,null,!1,!1,"",ks);return e._reactRootContainer=l,e[Pt]=l.current,Nr(e.nodeType===8?e.parentNode:e),hn(),l}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var c=Ki(u);a.call(c)}}var u=ba(e,0,!1,null,null,!1,!1,"",ks);return e._reactRootContainer=u,e[Pt]=u.current,Nr(e.nodeType===8?e.parentNode:e),hn(function(){uo(t,u,n,r)}),u}function fo(e,t,n,r,i){var o=n._reactRootContainer;if(o){var l=o;if(typeof i=="function"){var a=i;i=function(){var u=Ki(l);a.call(u)}}uo(t,l,e,i)}else l=T0(n,t,e,i,r);return Ki(l)}xc=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ur(t.pendingLanes);n!==0&&(Sa(t,n|1),Ue(t,se()),(V&6)===0&&(Vn=se()+500,tn()))}break;case 13:hn(function(){var r=Nt(e,1);if(r!==null){var i=Re();ft(r,e,1,i)}}),eu(e,1)}};ka=function(e){if(e.tag===13){var t=Nt(e,134217728);if(t!==null){var n=Re();ft(t,e,134217728,n)}eu(e,134217728)}};wc=function(e){if(e.tag===13){var t=Yt(e),n=Nt(e,t);if(n!==null){var r=Re();ft(n,e,t,r)}eu(e,t)}};Sc=function(){return X};kc=function(e,t){var n=X;try{return X=e,t()}finally{X=n}};_l=function(e,t,n){switch(t){case"input":if(yl(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=to(r);if(!i)throw Error(S(90));bs(r),yl(r,i)}}}break;case"textarea":tc(e,n);break;case"select":t=n.value,t!=null&&An(e,!!n.multiple,t,!1)}};uc=Xa;sc=hn;var A0={usingClientEntryPoint:!1,Events:[Ur,Cn,to,lc,ac,Xa]},ir={findFiberByHostInstance:on,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},M0={bundleType:ir.bundleType,version:ir.version,rendererPackageName:ir.rendererPackageName,rendererConfig:ir.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Tt.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=fc(e),e===null?null:e.stateNode},findFiberByHostInstance:ir.findFiberByHostInstance||L0,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ui=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ui.isDisabled&&ui.supportsFiber)try{qi=ui.inject(M0),vt=ui}catch{}}Ke.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A0;Ke.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!nu(t))throw Error(S(200));return N0(e,t,null,n)};Ke.createRoot=function(e,t){if(!nu(e))throw Error(S(299));var n=!1,r="",i=Qd;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=ba(e,1,!1,null,null,n,!1,r,i),e[Pt]=t.current,Nr(e.nodeType===8?e.parentNode:e),new tu(t)};Ke.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(S(188)):(e=Object.keys(e).join(","),Error(S(268,e)));return e=fc(t),e=e===null?null:e.stateNode,e};Ke.flushSync=function(e){return hn(e)};Ke.hydrate=function(e,t,n){if(!co(t))throw Error(S(200));return fo(null,e,t,!0,n)};Ke.hydrateRoot=function(e,t,n){if(!nu(e))throw Error(S(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",l=Qd;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(l=n.onRecoverableError)),t=Wd(t,null,e,1,n!=null?n:null,i,!1,o,l),e[Pt]=t.current,Nr(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new so(t)};Ke.render=function(e,t,n){if(!co(t))throw Error(S(200));return fo(null,e,t,!1,n)};Ke.unmountComponentAtNode=function(e){if(!co(e))throw Error(S(40));return e._reactRootContainer?(hn(function(){fo(null,null,e,!1,function(){e._reactRootContainer=null,e[Pt]=null})}),!0):!1};Ke.unstable_batchedUpdates=Xa;Ke.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!co(n))throw Error(S(200));if(e==null||e._reactInternals===void 0)throw Error(S(38));return fo(e,t,n,!1,r)};Ke.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Ke})(Ws);var Cs=Ws.exports;dl.createRoot=Cs.createRoot,dl.hydrateRoot=Cs.hydrateRoot;var ru={exports:{}},Z={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var iu=Symbol.for("react.element"),ou=Symbol.for("react.portal"),po=Symbol.for("react.fragment"),ho=Symbol.for("react.strict_mode"),mo=Symbol.for("react.profiler"),go=Symbol.for("react.provider"),vo=Symbol.for("react.context"),$0=Symbol.for("react.server_context"),yo=Symbol.for("react.forward_ref"),xo=Symbol.for("react.suspense"),wo=Symbol.for("react.suspense_list"),So=Symbol.for("react.memo"),ko=Symbol.for("react.lazy"),R0=Symbol.for("react.offscreen"),Yd;Yd=Symbol.for("react.module.reference");function it(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case iu:switch(e=e.type,e){case po:case mo:case ho:case xo:case wo:return e;default:switch(e=e&&e.$$typeof,e){case $0:case vo:case yo:case ko:case So:case go:return e;default:return t}}case ou:return t}}}Z.ContextConsumer=vo;Z.ContextProvider=go;Z.Element=iu;Z.ForwardRef=yo;Z.Fragment=po;Z.Lazy=ko;Z.Memo=So;Z.Portal=ou;Z.Profiler=mo;Z.StrictMode=ho;Z.Suspense=xo;Z.SuspenseList=wo;Z.isAsyncMode=function(){return!1};Z.isConcurrentMode=function(){return!1};Z.isContextConsumer=function(e){return it(e)===vo};Z.isContextProvider=function(e){return it(e)===go};Z.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===iu};Z.isForwardRef=function(e){return it(e)===yo};Z.isFragment=function(e){return it(e)===po};Z.isLazy=function(e){return it(e)===ko};Z.isMemo=function(e){return it(e)===So};Z.isPortal=function(e){return it(e)===ou};Z.isProfiler=function(e){return it(e)===mo};Z.isStrictMode=function(e){return it(e)===ho};Z.isSuspense=function(e){return it(e)===xo};Z.isSuspenseList=function(e){return it(e)===wo};Z.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===po||e===mo||e===ho||e===xo||e===wo||e===R0||typeof e=="object"&&e!==null&&(e.$$typeof===ko||e.$$typeof===So||e.$$typeof===go||e.$$typeof===vo||e.$$typeof===yo||e.$$typeof===Yd||e.getModuleId!==void 0)};Z.typeOf=it;(function(e){e.exports=Z})(ru);function O0(e){function t(P,N,A,j,m){for(var U=0,z=0,le=0,Y=0,K,B,we=0,je=0,Q,Pe=Q=K=0,G=0,Se=0,Xn=0,ke=0,Qr=A.length,Zn=Qr-1,lt,D="",ue="",Oo="",Fo="",At;G<Qr;){if(B=A.charCodeAt(G),G===Zn&&z+Y+le+U!==0&&(z!==0&&(B=z===47?10:47),Y=le=U=0,Qr++,Zn++),z+Y+le+U===0){if(G===Zn&&(0<Se&&(D=D.replace(h,"")),0<D.trim().length)){switch(B){case 32:case 9:case 59:case 13:case 10:break;default:D+=A.charAt(G)}B=59}switch(B){case 123:for(D=D.trim(),K=D.charCodeAt(0),Q=1,ke=++G;G<Qr;){switch(B=A.charCodeAt(G)){case 123:Q++;break;case 125:Q--;break;case 47:switch(B=A.charCodeAt(G+1)){case 42:case 47:e:{for(Pe=G+1;Pe<Zn;++Pe)switch(A.charCodeAt(Pe)){case 47:if(B===42&&A.charCodeAt(Pe-1)===42&&G+2!==Pe){G=Pe+1;break e}break;case 10:if(B===47){G=Pe+1;break e}}G=Pe}}break;case 91:B++;case 40:B++;case 34:case 39:for(;G++<Zn&&A.charCodeAt(G)!==B;);}if(Q===0)break;G++}switch(Q=A.substring(ke,G),K===0&&(K=(D=D.replace(g,"").trim()).charCodeAt(0)),K){case 64:switch(0<Se&&(D=D.replace(h,"")),B=D.charCodeAt(1),B){case 100:case 109:case 115:case 45:Se=N;break;default:Se=xt}if(Q=t(N,Se,Q,B,m+1),ke=Q.length,0<_&&(Se=n(xt,D,Xn),At=a(3,Q,Se,N,xe,fe,ke,B,m,j),D=Se.join(""),At!==void 0&&(ke=(Q=At.trim()).length)===0&&(B=0,Q="")),0<ke)switch(B){case 115:D=D.replace(L,l);case 100:case 109:case 45:Q=D+"{"+Q+"}";break;case 107:D=D.replace(s,"$1 $2"),Q=D+"{"+Q+"}",Q=ze===1||ze===2&&o("@"+Q,3)?"@-webkit-"+Q+"@"+Q:"@"+Q;break;default:Q=D+Q,j===112&&(Q=(ue+=Q,""))}else Q="";break;default:Q=t(N,n(N,D,Xn),Q,j,m+1)}Oo+=Q,Q=Xn=Se=Pe=K=0,D="",B=A.charCodeAt(++G);break;case 125:case 59:if(D=(0<Se?D.replace(h,""):D).trim(),1<(ke=D.length))switch(Pe===0&&(K=D.charCodeAt(0),K===45||96<K&&123>K)&&(ke=(D=D.replace(" ",":")).length),0<_&&(At=a(1,D,N,P,xe,fe,ue.length,j,m,j))!==void 0&&(ke=(D=At.trim()).length)===0&&(D="\0\0"),K=D.charCodeAt(0),B=D.charCodeAt(1),K){case 0:break;case 64:if(B===105||B===99){Fo+=D+A.charAt(G);break}default:D.charCodeAt(ke-1)!==58&&(ue+=i(D,K,B,D.charCodeAt(2)))}Xn=Se=Pe=K=0,D="",B=A.charCodeAt(++G)}}switch(B){case 13:case 10:z===47?z=0:1+K===0&&j!==107&&0<D.length&&(Se=1,D+="\0"),0<_*F&&a(0,D,N,P,xe,fe,ue.length,j,m,j),fe=1,xe++;break;case 59:case 125:if(z+Y+le+U===0){fe++;break}default:switch(fe++,lt=A.charAt(G),B){case 9:case 32:if(Y+U+z===0)switch(we){case 44:case 58:case 9:case 32:lt="";break;default:B!==32&&(lt=" ")}break;case 0:lt="\\0";break;case 12:lt="\\f";break;case 11:lt="\\v";break;case 38:Y+z+U===0&&(Se=Xn=1,lt="\f"+lt);break;case 108:if(Y+z+U+Ve===0&&0<Pe)switch(G-Pe){case 2:we===112&&A.charCodeAt(G-3)===58&&(Ve=we);case 8:je===111&&(Ve=je)}break;case 58:Y+z+U===0&&(Pe=G);break;case 44:z+le+Y+U===0&&(Se=1,lt+="\r");break;case 34:case 39:z===0&&(Y=Y===B?0:Y===0?B:Y);break;case 91:Y+z+le===0&&U++;break;case 93:Y+z+le===0&&U--;break;case 41:Y+z+U===0&&le--;break;case 40:if(Y+z+U===0){if(K===0)switch(2*we+3*je){case 533:break;default:K=1}le++}break;case 64:z+le+Y+U+Pe+Q===0&&(Q=1);break;case 42:case 47:if(!(0<Y+U+le))switch(z){case 0:switch(2*B+3*A.charCodeAt(G+1)){case 235:z=47;break;case 220:ke=G,z=42}break;case 42:B===47&&we===42&&ke+2!==G&&(A.charCodeAt(ke+2)===33&&(ue+=A.substring(ke,G+1)),lt="",z=0)}}z===0&&(D+=lt)}je=we,we=B,G++}if(ke=ue.length,0<ke){if(Se=N,0<_&&(At=a(2,ue,Se,P,xe,fe,ke,j,m,j),At!==void 0&&(ue=At).length===0))return Fo+ue+Oo;if(ue=Se.join(",")+"{"+ue+"}",ze*Ve!==0){switch(ze!==2||o(ue,2)||(Ve=0),Ve){case 111:ue=ue.replace(y,":-moz-$1")+ue;break;case 112:ue=ue.replace(f,"::-webkit-input-$1")+ue.replace(f,"::-moz-$1")+ue.replace(f,":-ms-input-$1")+ue}Ve=0}}return Fo+ue+Oo}function n(P,N,A){var j=N.trim().split(R);N=j;var m=j.length,U=P.length;switch(U){case 0:case 1:var z=0;for(P=U===0?"":P[0]+" ";z<m;++z)N[z]=r(P,N[z],A).trim();break;default:var le=z=0;for(N=[];z<m;++z)for(var Y=0;Y<U;++Y)N[le++]=r(P[Y]+" ",j[z],A).trim()}return N}function r(P,N,A){var j=N.charCodeAt(0);switch(33>j&&(j=(N=N.trim()).charCodeAt(0)),j){case 38:return N.replace(d,"$1"+P.trim());case 58:return P.trim()+N.replace(d,"$1"+P.trim());default:if(0<1*A&&0<N.indexOf("\f"))return N.replace(d,(P.charCodeAt(0)===58?"":"$1")+P.trim())}return P+N}function i(P,N,A,j){var m=P+";",U=2*N+3*A+4*j;if(U===944){P=m.indexOf(":",9)+1;var z=m.substring(P,m.length-1).trim();return z=m.substring(0,P).trim()+z+";",ze===1||ze===2&&o(z,1)?"-webkit-"+z+z:z}if(ze===0||ze===2&&!o(m,1))return m;switch(U){case 1015:return m.charCodeAt(10)===97?"-webkit-"+m+m:m;case 951:return m.charCodeAt(3)===116?"-webkit-"+m+m:m;case 963:return m.charCodeAt(5)===110?"-webkit-"+m+m:m;case 1009:if(m.charCodeAt(4)!==100)break;case 969:case 942:return"-webkit-"+m+m;case 978:return"-webkit-"+m+"-moz-"+m+m;case 1019:case 983:return"-webkit-"+m+"-moz-"+m+"-ms-"+m+m;case 883:if(m.charCodeAt(8)===45)return"-webkit-"+m+m;if(0<m.indexOf("image-set(",11))return m.replace(me,"$1-webkit-$2")+m;break;case 932:if(m.charCodeAt(4)===45)switch(m.charCodeAt(5)){case 103:return"-webkit-box-"+m.replace("-grow","")+"-webkit-"+m+"-ms-"+m.replace("grow","positive")+m;case 115:return"-webkit-"+m+"-ms-"+m.replace("shrink","negative")+m;case 98:return"-webkit-"+m+"-ms-"+m.replace("basis","preferred-size")+m}return"-webkit-"+m+"-ms-"+m+m;case 964:return"-webkit-"+m+"-ms-flex-"+m+m;case 1023:if(m.charCodeAt(8)!==99)break;return z=m.substring(m.indexOf(":",15)).replace("flex-","").replace("space-between","justify"),"-webkit-box-pack"+z+"-webkit-"+m+"-ms-flex-pack"+z+m;case 1005:return x.test(m)?m.replace(k,":-webkit-")+m.replace(k,":-moz-")+m:m;case 1e3:switch(z=m.substring(13).trim(),N=z.indexOf("-")+1,z.charCodeAt(0)+z.charCodeAt(N)){case 226:z=m.replace(C,"tb");break;case 232:z=m.replace(C,"tb-rl");break;case 220:z=m.replace(C,"lr");break;default:return m}return"-webkit-"+m+"-ms-"+z+m;case 1017:if(m.indexOf("sticky",9)===-1)break;case 975:switch(N=(m=P).length-10,z=(m.charCodeAt(N)===33?m.substring(0,N):m).substring(P.indexOf(":",7)+1).trim(),U=z.charCodeAt(0)+(z.charCodeAt(7)|0)){case 203:if(111>z.charCodeAt(8))break;case 115:m=m.replace(z,"-webkit-"+z)+";"+m;break;case 207:case 102:m=m.replace(z,"-webkit-"+(102<U?"inline-":"")+"box")+";"+m.replace(z,"-webkit-"+z)+";"+m.replace(z,"-ms-"+z+"box")+";"+m}return m+";";case 938:if(m.charCodeAt(5)===45)switch(m.charCodeAt(6)){case 105:return z=m.replace("-items",""),"-webkit-"+m+"-webkit-box-"+z+"-ms-flex-"+z+m;case 115:return"-webkit-"+m+"-ms-flex-item-"+m.replace(T,"")+m;default:return"-webkit-"+m+"-ms-flex-line-pack"+m.replace("align-content","").replace(T,"")+m}break;case 973:case 989:if(m.charCodeAt(3)!==45||m.charCodeAt(4)===122)break;case 931:case 953:if(I.test(P)===!0)return(z=P.substring(P.indexOf(":")+1)).charCodeAt(0)===115?i(P.replace("stretch","fill-available"),N,A,j).replace(":fill-available",":stretch"):m.replace(z,"-webkit-"+z)+m.replace(z,"-moz-"+z.replace("fill-",""))+m;break;case 962:if(m="-webkit-"+m+(m.charCodeAt(5)===102?"-ms-"+m:"")+m,A+j===211&&m.charCodeAt(13)===105&&0<m.indexOf("transform",10))return m.substring(0,m.indexOf(";",27)+1).replace(w,"$1-webkit-$2")+m}return m}function o(P,N){var A=P.indexOf(N===1?":":"{"),j=P.substring(0,N!==3?A:10);return A=P.substring(A+1,P.length-1),O(N!==2?j:j.replace(W,"$1"),A,N)}function l(P,N){var A=i(N,N.charCodeAt(0),N.charCodeAt(1),N.charCodeAt(2));return A!==N+";"?A.replace($," or ($1)").substring(4):"("+N+")"}function a(P,N,A,j,m,U,z,le,Y,K){for(var B=0,we=N,je;B<_;++B)switch(je=Me[B].call(v,P,we,A,j,m,U,z,le,Y,K)){case void 0:case!1:case!0:case null:break;default:we=je}if(we!==N)return we}function u(P){switch(P){case void 0:case null:_=Me.length=0;break;default:if(typeof P=="function")Me[_++]=P;else if(typeof P=="object")for(var N=0,A=P.length;N<A;++N)u(P[N]);else F=!!P|0}return u}function c(P){return P=P.prefix,P!==void 0&&(O=null,P?typeof P!="function"?ze=1:(ze=2,O=P):ze=0),c}function v(P,N){var A=P;if(33>A.charCodeAt(0)&&(A=A.trim()),J=A,A=[J],0<_){var j=a(-1,N,A,A,xe,fe,0,0,0,0);j!==void 0&&typeof j=="string"&&(N=j)}var m=t(xt,A,N,0,0);return 0<_&&(j=a(-2,m,A,A,xe,fe,m.length,0,0,0),j!==void 0&&(m=j)),J="",Ve=0,fe=xe=1,m}var g=/^\0+/g,h=/[\0\r\f]/g,k=/: */g,x=/zoo|gra/,w=/([,: ])(transform)/g,R=/,\r+?/g,d=/([\t\r\n ])*\f?&/g,s=/@(k\w+)\s*(\S*)\s*/,f=/::(place)/g,y=/:(read-only)/g,C=/[svh]\w+-[tblr]{2}/,L=/\(\s*(.*)\s*\)/g,$=/([\s\S]*?);/g,T=/-self|flex-/g,W=/[^]*?(:[rp][el]a[\w-]+)[^]*/,I=/stretch|:\s*\w+\-(?:conte|avail)/,me=/([^-])(image-set\()/,fe=1,xe=1,Ve=0,ze=1,xt=[],Me=[],_=0,O=null,F=0,J="";return v.use=u,v.set=c,e!==void 0&&c(e),v}var F0={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function j0(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var I0=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,Es=j0(function(e){return I0.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),Gd={exports:{}},q={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ye=typeof Symbol=="function"&&Symbol.for,lu=ye?Symbol.for("react.element"):60103,au=ye?Symbol.for("react.portal"):60106,Co=ye?Symbol.for("react.fragment"):60107,Eo=ye?Symbol.for("react.strict_mode"):60108,_o=ye?Symbol.for("react.profiler"):60114,zo=ye?Symbol.for("react.provider"):60109,Po=ye?Symbol.for("react.context"):60110,uu=ye?Symbol.for("react.async_mode"):60111,No=ye?Symbol.for("react.concurrent_mode"):60111,Lo=ye?Symbol.for("react.forward_ref"):60112,To=ye?Symbol.for("react.suspense"):60113,D0=ye?Symbol.for("react.suspense_list"):60120,Ao=ye?Symbol.for("react.memo"):60115,Mo=ye?Symbol.for("react.lazy"):60116,B0=ye?Symbol.for("react.block"):60121,H0=ye?Symbol.for("react.fundamental"):60117,U0=ye?Symbol.for("react.responder"):60118,V0=ye?Symbol.for("react.scope"):60119;function Ze(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case lu:switch(e=e.type,e){case uu:case No:case Co:case _o:case Eo:case To:return e;default:switch(e=e&&e.$$typeof,e){case Po:case Lo:case Mo:case Ao:case zo:return e;default:return t}}case au:return t}}}function Kd(e){return Ze(e)===No}q.AsyncMode=uu;q.ConcurrentMode=No;q.ContextConsumer=Po;q.ContextProvider=zo;q.Element=lu;q.ForwardRef=Lo;q.Fragment=Co;q.Lazy=Mo;q.Memo=Ao;q.Portal=au;q.Profiler=_o;q.StrictMode=Eo;q.Suspense=To;q.isAsyncMode=function(e){return Kd(e)||Ze(e)===uu};q.isConcurrentMode=Kd;q.isContextConsumer=function(e){return Ze(e)===Po};q.isContextProvider=function(e){return Ze(e)===zo};q.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===lu};q.isForwardRef=function(e){return Ze(e)===Lo};q.isFragment=function(e){return Ze(e)===Co};q.isLazy=function(e){return Ze(e)===Mo};q.isMemo=function(e){return Ze(e)===Ao};q.isPortal=function(e){return Ze(e)===au};q.isProfiler=function(e){return Ze(e)===_o};q.isStrictMode=function(e){return Ze(e)===Eo};q.isSuspense=function(e){return Ze(e)===To};q.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===Co||e===No||e===_o||e===Eo||e===To||e===D0||typeof e=="object"&&e!==null&&(e.$$typeof===Mo||e.$$typeof===Ao||e.$$typeof===zo||e.$$typeof===Po||e.$$typeof===Lo||e.$$typeof===H0||e.$$typeof===U0||e.$$typeof===V0||e.$$typeof===B0)};q.typeOf=Ze;(function(e){e.exports=q})(Gd);var su=Gd.exports,W0={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Q0={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},Y0={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Xd={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},cu={};cu[su.ForwardRef]=Y0;cu[su.Memo]=Xd;function _s(e){return su.isMemo(e)?Xd:cu[e.$$typeof]||W0}var G0=Object.defineProperty,K0=Object.getOwnPropertyNames,zs=Object.getOwnPropertySymbols,X0=Object.getOwnPropertyDescriptor,Z0=Object.getPrototypeOf,Ps=Object.prototype;function Zd(e,t,n){if(typeof t!="string"){if(Ps){var r=Z0(t);r&&r!==Ps&&Zd(e,r,n)}var i=K0(t);zs&&(i=i.concat(zs(t)));for(var o=_s(e),l=_s(t),a=0;a<i.length;++a){var u=i[a];if(!Q0[u]&&!(n&&n[u])&&!(l&&l[u])&&!(o&&o[u])){var c=X0(t,u);try{G0(e,u,c)}catch{}}}}return e}var q0=Zd;function Et(){return(Et=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var Ns=function(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n},ia=function(e){return e!==null&&typeof e=="object"&&(e.toString?e.toString():Object.prototype.toString.call(e))==="[object Object]"&&!ru.exports.typeOf(e)},Xi=Object.freeze([]),Kt=Object.freeze({});function jr(e){return typeof e=="function"}function Ls(e){return e.displayName||e.name||"Component"}function du(e){return e&&typeof e.styledComponentId=="string"}var Wn=typeof process<"u"&&({}.REACT_APP_SC_ATTR||{}.SC_ATTR)||"data-styled",fu=typeof window<"u"&&"HTMLElement"in window,J0=Boolean(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&{}.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&{}.REACT_APP_SC_DISABLE_SPEEDY!==""?{}.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&{}.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&{}.SC_DISABLE_SPEEDY!==void 0&&{}.SC_DISABLE_SPEEDY!==""?{}.SC_DISABLE_SPEEDY!=="false"&&{}.SC_DISABLE_SPEEDY:!1);function Wr(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var b0=function(){function e(n){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=n}var t=e.prototype;return t.indexOfGroup=function(n){for(var r=0,i=0;i<n;i++)r+=this.groupSizes[i];return r},t.insertRules=function(n,r){if(n>=this.groupSizes.length){for(var i=this.groupSizes,o=i.length,l=o;n>=l;)(l<<=1)<0&&Wr(16,""+n);this.groupSizes=new Uint32Array(l),this.groupSizes.set(i),this.length=l;for(var a=o;a<l;a++)this.groupSizes[a]=0}for(var u=this.indexOfGroup(n+1),c=0,v=r.length;c<v;c++)this.tag.insertRule(u,r[c])&&(this.groupSizes[n]++,u++)},t.clearGroup=function(n){if(n<this.length){var r=this.groupSizes[n],i=this.indexOfGroup(n),o=i+r;this.groupSizes[n]=0;for(var l=i;l<o;l++)this.tag.deleteRule(i)}},t.getGroup=function(n){var r="";if(n>=this.length||this.groupSizes[n]===0)return r;for(var i=this.groupSizes[n],o=this.indexOfGroup(n),l=o+i,a=o;a<l;a++)r+=this.tag.getRule(a)+`/*!sc*/
`;return r},e}(),Ei=new Map,Zi=new Map,xr=1,si=function(e){if(Ei.has(e))return Ei.get(e);for(;Zi.has(xr);)xr++;var t=xr++;return Ei.set(e,t),Zi.set(t,e),t},e1=function(e){return Zi.get(e)},t1=function(e,t){t>=xr&&(xr=t+1),Ei.set(e,t),Zi.set(t,e)},n1="style["+Wn+'][data-styled-version="5.3.6"]',r1=new RegExp("^"+Wn+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),i1=function(e,t,n){for(var r,i=n.split(","),o=0,l=i.length;o<l;o++)(r=i[o])&&e.registerName(t,r)},o1=function(e,t){for(var n=(t.textContent||"").split(`/*!sc*/
`),r=[],i=0,o=n.length;i<o;i++){var l=n[i].trim();if(l){var a=l.match(r1);if(a){var u=0|parseInt(a[1],10),c=a[2];u!==0&&(t1(c,u),i1(e,c,a[3]),e.getTag().insertRules(u,r)),r.length=0}else r.push(l)}}},l1=function(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null},qd=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(a){for(var u=a.childNodes,c=u.length;c>=0;c--){var v=u[c];if(v&&v.nodeType===1&&v.hasAttribute(Wn))return v}}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(Wn,"active"),r.setAttribute("data-styled-version","5.3.6");var l=l1();return l&&r.setAttribute("nonce",l),n.insertBefore(r,o),r},a1=function(){function e(n){var r=this.element=qd(n);r.appendChild(document.createTextNode("")),this.sheet=function(i){if(i.sheet)return i.sheet;for(var o=document.styleSheets,l=0,a=o.length;l<a;l++){var u=o[l];if(u.ownerNode===i)return u}Wr(17)}(r),this.length=0}var t=e.prototype;return t.insertRule=function(n,r){try{return this.sheet.insertRule(r,n),this.length++,!0}catch{return!1}},t.deleteRule=function(n){this.sheet.deleteRule(n),this.length--},t.getRule=function(n){var r=this.sheet.cssRules[n];return r!==void 0&&typeof r.cssText=="string"?r.cssText:""},e}(),u1=function(){function e(n){var r=this.element=qd(n);this.nodes=r.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(n,r){if(n<=this.length&&n>=0){var i=document.createTextNode(r),o=this.nodes[n];return this.element.insertBefore(i,o||null),this.length++,!0}return!1},t.deleteRule=function(n){this.element.removeChild(this.nodes[n]),this.length--},t.getRule=function(n){return n<this.length?this.nodes[n].textContent:""},e}(),s1=function(){function e(n){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(n,r){return n<=this.length&&(this.rules.splice(n,0,r),this.length++,!0)},t.deleteRule=function(n){this.rules.splice(n,1),this.length--},t.getRule=function(n){return n<this.length?this.rules[n]:""},e}(),Ts=fu,c1={isServer:!fu,useCSSOMInjection:!J0},Jd=function(){function e(n,r,i){n===void 0&&(n=Kt),r===void 0&&(r={}),this.options=Et({},c1,{},n),this.gs=r,this.names=new Map(i),this.server=!!n.isServer,!this.server&&fu&&Ts&&(Ts=!1,function(o){for(var l=document.querySelectorAll(n1),a=0,u=l.length;a<u;a++){var c=l[a];c&&c.getAttribute(Wn)!=="active"&&(o1(o,c),c.parentNode&&c.parentNode.removeChild(c))}}(this))}e.registerId=function(n){return si(n)};var t=e.prototype;return t.reconstructWithOptions=function(n,r){return r===void 0&&(r=!0),new e(Et({},this.options,{},n),this.gs,r&&this.names||void 0)},t.allocateGSInstance=function(n){return this.gs[n]=(this.gs[n]||0)+1},t.getTag=function(){return this.tag||(this.tag=(i=(r=this.options).isServer,o=r.useCSSOMInjection,l=r.target,n=i?new s1(l):o?new a1(l):new u1(l),new b0(n)));var n,r,i,o,l},t.hasNameForId=function(n,r){return this.names.has(n)&&this.names.get(n).has(r)},t.registerName=function(n,r){if(si(n),this.names.has(n))this.names.get(n).add(r);else{var i=new Set;i.add(r),this.names.set(n,i)}},t.insertRules=function(n,r,i){this.registerName(n,r),this.getTag().insertRules(si(n),i)},t.clearNames=function(n){this.names.has(n)&&this.names.get(n).clear()},t.clearRules=function(n){this.getTag().clearGroup(si(n)),this.clearNames(n)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(n){for(var r=n.getTag(),i=r.length,o="",l=0;l<i;l++){var a=e1(l);if(a!==void 0){var u=n.names.get(a),c=r.getGroup(l);if(u&&c&&u.size){var v=Wn+".g"+l+'[id="'+a+'"]',g="";u!==void 0&&u.forEach(function(h){h.length>0&&(g+=h+",")}),o+=""+c+v+'{content:"'+g+`"}/*!sc*/
`}}}return o}(this)},e}(),d1=/(a)(d)/gi,As=function(e){return String.fromCharCode(e+(e>25?39:97))};function oa(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=As(t%52)+n;return(As(t%52)+n).replace(d1,"$1-$2")}var Tn=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},bd=function(e){return Tn(5381,e)};function f1(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(jr(n)&&!du(n))return!1}return!0}var p1=bd("5.3.6"),h1=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&f1(t),this.componentId=n,this.baseHash=Tn(p1,n),this.baseStyle=r,Jd.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.componentId,o=[];if(this.baseStyle&&o.push(this.baseStyle.generateAndInjectStyles(t,n,r)),this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(i,this.staticRulesId))o.push(this.staticRulesId);else{var l=Qn(this.rules,t,n,r).join(""),a=oa(Tn(this.baseHash,l)>>>0);if(!n.hasNameForId(i,a)){var u=r(l,"."+a,void 0,i);n.insertRules(i,a,u)}o.push(a),this.staticRulesId=a}else{for(var c=this.rules.length,v=Tn(this.baseHash,r.hash),g="",h=0;h<c;h++){var k=this.rules[h];if(typeof k=="string")g+=k;else if(k){var x=Qn(k,t,n,r),w=Array.isArray(x)?x.join(""):x;v=Tn(v,w+h),g+=w}}if(g){var R=oa(v>>>0);if(!n.hasNameForId(i,R)){var d=r(g,"."+R,void 0,i);n.insertRules(i,R,d)}o.push(R)}}return o.join(" ")},e}(),m1=/^\s*\/\/.*$/gm,g1=[":","[",".","#"];function v1(e){var t,n,r,i,o=e===void 0?Kt:e,l=o.options,a=l===void 0?Kt:l,u=o.plugins,c=u===void 0?Xi:u,v=new O0(a),g=[],h=function(w){function R(d){if(d)try{w(d+"}")}catch{}}return function(d,s,f,y,C,L,$,T,W,I){switch(d){case 1:if(W===0&&s.charCodeAt(0)===64)return w(s+";"),"";break;case 2:if(T===0)return s+"/*|*/";break;case 3:switch(T){case 102:case 112:return w(f[0]+s),"";default:return s+(I===0?"/*|*/":"")}case-2:s.split("/*|*/}").forEach(R)}}}(function(w){g.push(w)}),k=function(w,R,d){return R===0&&g1.indexOf(d[n.length])!==-1||d.match(i)?w:"."+t};function x(w,R,d,s){s===void 0&&(s="&");var f=w.replace(m1,""),y=R&&d?d+" "+R+" { "+f+" }":f;return t=s,n=R,r=new RegExp("\\"+n+"\\b","g"),i=new RegExp("(\\"+n+"\\b){2,}"),v(d||!R?"":R,y)}return v.use([].concat(c,[function(w,R,d){w===2&&d.length&&d[0].lastIndexOf(n)>0&&(d[0]=d[0].replace(r,k))},h,function(w){if(w===-2){var R=g;return g=[],R}}])),x.hash=c.length?c.reduce(function(w,R){return R.name||Wr(15),Tn(w,R.name)},5381).toString():"",x}var ef=Zt.createContext();ef.Consumer;var tf=Zt.createContext(),y1=(tf.Consumer,new Jd),la=v1();function x1(){return tt.exports.useContext(ef)||y1}function w1(){return tt.exports.useContext(tf)||la}var S1=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=la);var l=r.name+o.hash;i.hasNameForId(r.id,l)||i.insertRules(r.id,l,o(r.rules,l,"@keyframes"))},this.toString=function(){return Wr(12,String(r.name))},this.name=t,this.id="sc-keyframes-"+t,this.rules=n}return e.prototype.getName=function(t){return t===void 0&&(t=la),this.name+t.hash},e}(),k1=/([A-Z])/,C1=/([A-Z])/g,E1=/^ms-/,_1=function(e){return"-"+e.toLowerCase()};function Ms(e){return k1.test(e)?e.replace(C1,_1).replace(E1,"-ms-"):e}var $s=function(e){return e==null||e===!1||e===""};function Qn(e,t,n,r){if(Array.isArray(e)){for(var i,o=[],l=0,a=e.length;l<a;l+=1)(i=Qn(e[l],t,n,r))!==""&&(Array.isArray(i)?o.push.apply(o,i):o.push(i));return o}if($s(e))return"";if(du(e))return"."+e.styledComponentId;if(jr(e)){if(typeof(c=e)!="function"||c.prototype&&c.prototype.isReactComponent||!t)return e;var u=e(t);return Qn(u,t,n,r)}var c;return e instanceof S1?n?(e.inject(n,r),e.getName(r)):e:ia(e)?function v(g,h){var k,x,w=[];for(var R in g)g.hasOwnProperty(R)&&!$s(g[R])&&(Array.isArray(g[R])&&g[R].isCss||jr(g[R])?w.push(Ms(R)+":",g[R],";"):ia(g[R])?w.push.apply(w,v(g[R],R)):w.push(Ms(R)+": "+(k=R,(x=g[R])==null||typeof x=="boolean"||x===""?"":typeof x!="number"||x===0||k in F0?String(x).trim():x+"px")+";"));return h?[h+" {"].concat(w,["}"]):w}(e):e.toString()}var Rs=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function z1(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return jr(e)||ia(e)?Rs(Qn(Ns(Xi,[e].concat(n)))):n.length===0&&e.length===1&&typeof e[0]=="string"?e:Rs(Qn(Ns(e,n)))}var P1=function(e,t,n){return n===void 0&&(n=Kt),e.theme!==n.theme&&e.theme||t||n.theme},N1=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,L1=/(^-|-$)/g;function sl(e){return e.replace(N1,"-").replace(L1,"")}var T1=function(e){return oa(bd(e)>>>0)};function ci(e){return typeof e=="string"&&!0}var aa=function(e){return typeof e=="function"||typeof e=="object"&&e!==null&&!Array.isArray(e)},A1=function(e){return e!=="__proto__"&&e!=="constructor"&&e!=="prototype"};function M1(e,t,n){var r=e[n];aa(t)&&aa(r)?nf(r,t):e[n]=t}function nf(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var i=0,o=n;i<o.length;i++){var l=o[i];if(aa(l))for(var a in l)A1(a)&&M1(e,l[a],a)}return e}var rf=Zt.createContext();rf.Consumer;var cl={};function of(e,t,n){var r=du(e),i=!ci(e),o=t.attrs,l=o===void 0?Xi:o,a=t.componentId,u=a===void 0?function(s,f){var y=typeof s!="string"?"sc":sl(s);cl[y]=(cl[y]||0)+1;var C=y+"-"+T1("5.3.6"+y+cl[y]);return f?f+"-"+C:C}(t.displayName,t.parentComponentId):a,c=t.displayName,v=c===void 0?function(s){return ci(s)?"styled."+s:"Styled("+Ls(s)+")"}(e):c,g=t.displayName&&t.componentId?sl(t.displayName)+"-"+t.componentId:t.componentId||u,h=r&&e.attrs?Array.prototype.concat(e.attrs,l).filter(Boolean):l,k=t.shouldForwardProp;r&&e.shouldForwardProp&&(k=t.shouldForwardProp?function(s,f,y){return e.shouldForwardProp(s,f,y)&&t.shouldForwardProp(s,f,y)}:e.shouldForwardProp);var x,w=new h1(n,g,r?e.componentStyle:void 0),R=w.isStatic&&l.length===0,d=function(s,f){return function(y,C,L,$){var T=y.attrs,W=y.componentStyle,I=y.defaultProps,me=y.foldedComponentIds,fe=y.shouldForwardProp,xe=y.styledComponentId,Ve=y.target,ze=function(j,m,U){j===void 0&&(j=Kt);var z=Et({},m,{theme:j}),le={};return U.forEach(function(Y){var K,B,we,je=Y;for(K in jr(je)&&(je=je(z)),je)z[K]=le[K]=K==="className"?(B=le[K],we=je[K],B&&we?B+" "+we:B||we):je[K]}),[z,le]}(P1(C,tt.exports.useContext(rf),I)||Kt,C,T),xt=ze[0],Me=ze[1],_=function(j,m,U,z){var le=x1(),Y=w1(),K=m?j.generateAndInjectStyles(Kt,le,Y):j.generateAndInjectStyles(U,le,Y);return K}(W,$,xt),O=L,F=Me.$as||C.$as||Me.as||C.as||Ve,J=ci(F),P=Me!==C?Et({},C,{},Me):C,N={};for(var A in P)A[0]!=="$"&&A!=="as"&&(A==="forwardedAs"?N.as=P[A]:(fe?fe(A,Es,F):!J||Es(A))&&(N[A]=P[A]));return C.style&&Me.style!==C.style&&(N.style=Et({},C.style,{},Me.style)),N.className=Array.prototype.concat(me,xe,_!==xe?_:null,C.className,Me.className).filter(Boolean).join(" "),N.ref=O,tt.exports.createElement(F,N)}(x,s,f,R)};return d.displayName=v,(x=Zt.forwardRef(d)).attrs=h,x.componentStyle=w,x.displayName=v,x.shouldForwardProp=k,x.foldedComponentIds=r?Array.prototype.concat(e.foldedComponentIds,e.styledComponentId):Xi,x.styledComponentId=g,x.target=r?e.target:e,x.withComponent=function(s){var f=t.componentId,y=function(L,$){if(L==null)return{};var T,W,I={},me=Object.keys(L);for(W=0;W<me.length;W++)T=me[W],$.indexOf(T)>=0||(I[T]=L[T]);return I}(t,["componentId"]),C=f&&f+"-"+(ci(s)?s:sl(Ls(s)));return of(s,Et({},y,{attrs:h,componentId:C}),n)},Object.defineProperty(x,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(s){this._foldedDefaultProps=r?nf({},e.defaultProps,s):s}}),x.toString=function(){return"."+x.styledComponentId},i&&q0(x,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),x}var ua=function(e){return function t(n,r,i){if(i===void 0&&(i=Kt),!ru.exports.isValidElementType(r))return Wr(1,String(r));var o=function(){return n(r,i,z1.apply(void 0,arguments))};return o.withConfig=function(l){return t(n,r,Et({},i,{},l))},o.attrs=function(l){return t(n,r,Et({},i,{attrs:Array.prototype.concat(i.attrs,l).filter(Boolean)}))},o}(of,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){ua[e]=ua(e)});const ot=ua,lf="/ManuelChomer/assets/brand.5e063394.png",$o="/ManuelChomer/assets/brochure.8cdc36a4.pdf";var pu={exports:{}},Ro={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $1=tt.exports,R1=Symbol.for("react.element"),O1=Symbol.for("react.fragment"),F1=Object.prototype.hasOwnProperty,j1=$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I1={key:!0,ref:!0,__self:!0,__source:!0};function af(e,t,n){var r,i={},o=null,l=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(l=t.ref);for(r in t)F1.call(t,r)&&!I1.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:R1,type:e,key:o,ref:l,props:i,_owner:j1.current}}Ro.Fragment=O1;Ro.jsx=af;Ro.jsxs=af;(function(e){e.exports=Ro})(pu);const p=pu.exports.jsx,E=pu.exports.jsxs,D1=ot.header`
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
                width: 90px;
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
                    margin-left: 36px;
                    
                    & a {
                        color: white;
                        font-size: 15px;
                        font-weight: 400;
                    }
                }
            }
        }
    }

    @media only screen and (min-width: 1200px) {
        padding: 20px 200px;
    }
`;function B1(){tt.exports.useEffect(()=>{window.addEventListener("scroll",()=>{window.scrollY>=300||window.scrollY?document.querySelector("header").classList.add("add__scroll_effect"):document.querySelector("header").classList.remove("add__scroll_effect")})},[window.scrollY]);const e=()=>{document.querySelector("header").classList.toggle("open__menu")},t=()=>{document.querySelectorAll("ul li").forEach(()=>{document.querySelector("header").classList.remove("open__menu")})};return p(D1,{children:E("nav",{children:[p("a",{href:"#home",children:p("img",{src:lf,alt:"Sol Home - Micro Viviendas"})}),E("ul",{children:[p("li",{onClick:t,children:p("a",{href:"#home",children:"Inicio"})}),p("li",{onClick:t,children:p("a",{href:"#productos",children:"Productos"})}),p("li",{onClick:t,children:p("a",{href:"#beneficios",children:"Beneficios"})}),p("li",{onClick:t,children:p("a",{href:"#compania",children:"Compa\xF1\xEDa"})}),p("li",{onClick:t,children:p("a",{href:"#contacto",children:"Contacto"})}),E("div",{className:"data__header__mobile",children:[E("div",{children:[p("h5",{children:"Email"}),p("a",{href:"mailto:solhomearg@gmail.com",target:"_blank",rel:"noopener noreferrer",children:"solhomearg@gmail.com"})]}),E("div",{children:[p("h5",{children:"Descargas"}),p("a",{href:$o,target:"_blank",rel:"noopener noreferrer",children:"Brochure"})]})]})]}),E("div",{className:"burger__menu",onClick:e,children:[p("span",{}),p("span",{})]})]})})}var uf={color:void 0,size:void 0,className:void 0,style:void 0,attr:void 0},Os=Zt.createContext&&Zt.createContext(uf),Xt=globalThis&&globalThis.__assign||function(){return Xt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},Xt.apply(this,arguments)},H1=globalThis&&globalThis.__rest||function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n};function sf(e){return e&&e.map(function(t,n){return Zt.createElement(t.tag,Xt({key:n},t.attr),sf(t.child))})}function ce(e){return function(t){return p(U1,{...Xt({attr:Xt({},e.attr)},t),children:sf(e.child)})}}function U1(e){var t=function(n){var r=e.attr,i=e.size,o=e.title,l=H1(e,["attr","size","title"]),a=i||n.size||"1em",u;return n.className&&(u=n.className),e.className&&(u=(u?u+" ":"")+e.className),E("svg",{...Xt({stroke:"currentColor",fill:"currentColor",strokeWidth:"0"},n.attr,r,l,{className:u,style:Xt(Xt({color:e.color||n.color},n.style),e.style),height:a,width:a,xmlns:"http://www.w3.org/2000/svg"}),children:[o&&p("title",{children:o}),e.children]})};return Os!==void 0?p(Os.Consumer,{children:function(n){return t(n)}}):t(uf)}function V1(e){return ce({tag:"svg",attr:{viewBox:"0 0 320 512"},child:[{tag:"path",attr:{d:"M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"}}]})(e)}function W1(e){return ce({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z"}}]})(e)}function Q1(e){return ce({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{fill:"none",strokeLinejoin:"round",strokeWidth:"32",d:"M218.1 167.17c0 13 0 25.6 4.1 37.4-43.1 50.6-156.9 184.3-167.5 194.5a20.17 20.17 0 00-6.7 15c0 8.5 5.2 16.7 9.6 21.3 6.6 6.9 34.8 33 40 28 15.4-15 18.5-19 24.8-25.2 9.5-9.3-1-28.3 2.3-36s6.8-9.2 12.5-10.4 15.8 2.9 23.7 3c8.3.1 12.8-3.4 19-9.2 5-4.6 8.6-8.9 8.7-15.6.2-9-12.8-20.9-3.1-30.4s23.7 6.2 34 5 22.8-15.5 24.1-21.6-11.7-21.8-9.7-30.7c.7-3 6.8-10 11.4-11s25 6.9 29.6 5.9c5.6-1.2 12.1-7.1 17.4-10.4 15.5 6.7 29.6 9.4 47.7 9.4 68.5 0 124-53.4 124-119.2S408.5 48 340 48s-121.9 53.37-121.9 119.17zM400 144a32 32 0 11-32-32 32 32 0 0132 32z"}}]})(e)}function Y1(e){return ce({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"}}]})(e)}function G1(e){return ce({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"polygon",attr:{points:"13 19 22 12 13 5 13 19"}},{tag:"polygon",attr:{points:"2 19 11 12 2 5 2 19"}}]})(e)}function K1(e){return ce({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"path",attr:{d:"M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"}},{tag:"circle",attr:{cx:"12",cy:"10",r:"3"}}]})(e)}function X1(e){return ce({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M928 160H96c-17.7 0-32 14.3-32 32v640c0 17.7 14.3 32 32 32h832c17.7 0 32-14.3 32-32V192c0-17.7-14.3-32-32-32zm-40 110.8V792H136V270.8l-27.6-21.5 39.3-50.5 42.8 33.3h643.1l42.8-33.3 39.3 50.5-27.7 21.5zM833.6 232L512 482 190.4 232l-42.8-33.3-39.3 50.5 27.6 21.5 341.6 265.6a55.99 55.99 0 0 0 68.7 0L888 270.8l27.6-21.5-39.3-50.5-42.7 33.2z"}}]})(e)}function Z1(e){return ce({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M512 64L128 192v384c0 212.1 171.9 384 384 384s384-171.9 384-384V192L512 64zm312 512c0 172.3-139.7 312-312 312S200 748.3 200 576V246l312-110 312 110v330z"}},{tag:"path",attr:{d:"M378.4 475.1a35.91 35.91 0 0 0-50.9 0 35.91 35.91 0 0 0 0 50.9l129.4 129.4 2.1 2.1a33.98 33.98 0 0 0 48.1 0L730.6 434a33.98 33.98 0 0 0 0-48.1l-2.8-2.8a33.98 33.98 0 0 0-48.1 0L483 579.7 378.4 475.1z"}}]})(e)}function q1(e){return ce({tag:"svg",attr:{viewBox:"0 0 1024 1024"},child:[{tag:"path",attr:{d:"M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3zM664.8 561.6l36.1 210.3L512 672.7 323.1 772l36.1-210.3-152.8-149L417.6 382 512 190.7 606.4 382l211.2 30.7-152.8 148.9z"}}]})(e)}function J1(e){return ce({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"}}]})(e)}function b1(e){return ce({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"}}]})(e)}function di(e){return ce({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"}}]})(e)}function $t(e){return ce({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"}}]})(e)}function cf(e){return ce({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M4.406 1.342A5.53 5.53 0 0 1 8 0c2.69 0 4.923 2 5.166 4.579C14.758 4.804 16 6.137 16 7.773 16 9.569 14.502 11 12.687 11H10a.5.5 0 0 1 0-1h2.688C13.979 10 15 8.988 15 7.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 2.825 10.328 1 8 1a4.53 4.53 0 0 0-2.941 1.1c-.757.652-1.153 1.438-1.153 2.055v.448l-.445.049C2.064 4.805 1 5.952 1 7.318 1 8.785 2.23 10 3.781 10H6a.5.5 0 0 1 0 1H3.781C1.708 11 0 9.366 0 7.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"}},{tag:"path",attr:{d:"M7.646 15.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 14.293V5.5a.5.5 0 0 0-1 0v8.793l-2.146-2.147a.5.5 0 0 0-.708.708l3 3z"}}]})(e)}function eh(e){return ce({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"}}]})(e)}function th(e){return ce({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M10.804 8 5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"}}]})(e)}function nh(e){return ce({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"}}]})(e)}function hu(e){return ce({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"}}]})(e)}function rh(e){return ce({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M0 3.5A1.5 1.5 0 0 1 1.5 2h9A1.5 1.5 0 0 1 12 3.5V5h1.02a1.5 1.5 0 0 1 1.17.563l1.481 1.85a1.5 1.5 0 0 1 .329.938V10.5a1.5 1.5 0 0 1-1.5 1.5H14a2 2 0 1 1-4 0H5a2 2 0 1 1-3.998-.085A1.5 1.5 0 0 1 0 10.5v-7zm1.294 7.456A1.999 1.999 0 0 1 4.732 11h5.536a2.01 2.01 0 0 1 .732-.732V3.5a.5.5 0 0 0-.5-.5h-9a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .294.456zM12 10a2 2 0 0 1 1.732 1h.768a.5.5 0 0 0 .5-.5V8.35a.5.5 0 0 0-.11-.312l-1.48-1.85A.5.5 0 0 0 13.02 6H12v4zm-9 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm9 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"}}]})(e)}function df(e){return ce({tag:"svg",attr:{fill:"currentColor",viewBox:"0 0 16 16"},child:[{tag:"path",attr:{d:"M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"}}]})(e)}function ih(e){return ce({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM9 9H5V5h4v4zm5 2h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1zm1-6h4v4h-4V5zM3 20a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v6zm2-5h4v4H5v-4zm8 5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1h-6a1 1 0 0 0-1 1v6zm2-5h4v4h-4v-4z"}}]})(e)}const oh="/ManuelChomer/assets/video.e815485d.mp4",lh=ot.div`
    position: fixed;
    top: 0;
    left: 0;
    z-index: -1;

    width: 100%;
    height: 100vh;
    padding: 20px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: #00000078;

    visibility: hidden;

    &.active {
        z-index: 100;   

        visibility: visible;
    }

    & div.modal__container {
        position: relative;

        width: 100%;
        min-width: 280px;
        max-width: 500px;
        height: 100%;
        min-height: 200px;
        max-height: 400px;

        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        & span {
            position: absolute;
            top: -40px;
            right: 0;

            width: 28px;
            height: 28px;

            display: flex;
            align-items: center;
            justify-content: center;

            border: 1px solid white;
            border-radius: 50%;
            cursor: pointer;

            svg {
                color: white;
                font-size: 22px;
            }
        }

        & video {
            width: 100%;
            height: 100%;

            border: none;
            border-radius: 1px;

            object-fit: cover;
        }
    }
`;function ah({openModal:e,handleClose:t}){return p(lh,{className:e&&"active",children:E("div",{className:"modal__container",children:[p("span",{children:p(W1,{onClick:()=>t()})}),p("video",{src:e?oh:"",controls:!0})]})})}const uh=ot.main`
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
`;function sh(){const[e,t]=tt.exports.useState(!1);return E(uh,{id:"home",children:[p("h6",{children:"Sol Home"}),E("h1",{children:["Fabricantes de ",p("strong",{children:"micro viviendas"})," modulares."]}),p("p",{children:"Calidad, rapidez y confort al alcance de tus manos."}),E("div",{children:[E("a",{href:"#contacto",children:["Conoce m\xE1s ",p(hu,{})]}),p("button",{onClick:()=>{t(!0)},children:p(th,{})}),p(ah,{openModal:e,handleClose:()=>{t(!1)}})]})]})}const ff="/ManuelChomer/assets/image6.6648be0c.jpg",ch="/ManuelChomer/assets/image1.f4d06093.jpg",dh="/ManuelChomer/assets/image2.98e3056c.jpg",fh="/ManuelChomer/assets/image3.9a5fbf02.jpg",ph="/ManuelChomer/assets/image4.f7a2c849.jpg",hh="/ManuelChomer/assets/image5.b47d3f7d.jpg",mh="/ManuelChomer/assets/image7.b7026c60.jpg",or=[ch,dh,fh,ph,hh,ff,mh],gh=ot.div`
    position: relative;

    width: 100%;
    height: max-content;


    & button {
        position: absolute;
        bottom: 4px;
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
            height: 520px;
            object-fit: cover;
        }
    }
`;function vh(){const[e,t]=tt.exports.useState(0),n=or==null?void 0:or.length;if(!Array.isArray(or)||n===0)return;const r=()=>{t(e===n-1?0:e+1)};return E(gh,{children:[p("button",{onClick:()=>{t(e===0?n-1:e-1)},children:p(J1,{})}),or.map((o,l)=>p("div",{className:e===l?"active":"",children:e===l&&p("img",{src:o,alt:"Galer\xEDa de fotos - Sol Home"})},l)),p("button",{onClick:r,children:p(b1,{})})]})}const yh=ot.div`
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
`,xh=ot.div`
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
`;function wh(){return E("div",{children:[E(yh,{id:"productos",children:[E("div",{children:[p("h6",{children:"Productos"}),E("h3",{children:["Conoce nuestra ",p("strong",{children:"micro vivienda"}),"."]}),p("h4",{children:"La micro vivienda Sol Home es una unidad monol\xEDtica completa, que cumple con todas las especificaciones y necesidades de habitabilidad, seguridad, comodidad y confort habitacional."}),E("div",{children:[E("p",{children:[p("span",{children:p(di,{})}),"Los modulos cuentan con aproximamente 26 m2."]}),E("p",{children:[p("span",{children:p(di,{})}),"Tienen un tiempo estimado de fabricaci\xF3n de apenas 30 d\xEDas."]}),E("p",{children:[p("span",{children:p(di,{})}),"Ofrecen una soluci\xF3n creativa y moderna a las necesidades habitacionales, logrando un \xF3ptimo uso del espacio con el que se cuenta."]}),E("p",{children:[p("span",{children:p(di,{})}),"Un hogar confortable y funcional para sus necesidades, con lo m\xE1s elemental sin sacrificar su comodidad."]})]}),E("a",{href:$o,target:"_blank",rel:"noopener noreferrer",children:["Brochure ",p(cf,{})]})]}),p("img",{src:ff,alt:"Sol Home - Micro Viviendas"})]}),E(xh,{id:"galeria",children:[E("span",{children:[p("h6",{children:"Galer\xEDa"}),E("h3",{children:["No son simples casas. Son mini casas ",p("strong",{children:"Sol Home"}),"."]})]}),p(vh,{})]})]})}const Sh=ot.div`
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

                & span {
                    width: 100%;
                    
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;

                    & h4 {
                        width: 100%;
                        margin-left: 28px;

                        color: white;
                        font-size: 24px;
                        font-weight: 400;
                    }

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
                    & span svg {
                        transform: rotate(180deg);
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

        .benefits__container {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;

            .benefits__box {
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
`;function kh(){const e=t=>{document.querySelectorAll(".benefits__container .benefits__box").forEach(n=>{n==t.target.parentNode.parentNode.parentNode?n.classList.toggle("active"):n.classList.remove("active")})};return E(Sh,{id:"beneficios",children:[p("h6",{children:"Beneficios"}),E("h3",{children:["Sol Home te ofrece una soluci\xF3n ",p("span",{children:"\xFAnica"}),"."]}),E("div",{className:"benefits__container",children:[E("div",{className:"benefits__box",children:[E("div",{children:[p(q1,{}),E("span",{onClick:e,children:[p("h4",{children:"Calidad"}),p($t,{})]})]}),p("p",{children:"Estos m\xF3dulos habitacionales cuentan con calidad de primera mano en todas sus materiales y terminaciones."})]}),E("div",{className:"benefits__box",children:[E("div",{children:[p(G1,{}),E("span",{onClick:e,children:[p("h4",{children:"Rapidez"}),p($t,{})]})]}),p("p",{children:"El modulo se fabrica en solamente 30 dias, siendo la empresa N\xB01 en este aspecto en el mercado."})]}),E("div",{className:"benefits__box",children:[E("div",{children:[p(Q1,{}),E("span",{onClick:e,children:[p("h4",{children:"Llave en mano & 100% equipado"}),p($t,{})]})]}),p("p",{children:"El Modulo se entrega completamente equipado, listo para ser habitado. Viene con electrodom\xE9sticos como heladera, TV Smart 32\u2019, aire acondicionado, microondas y horno. Adem\xE1s, viene completo en muebler\xEDa de primera calidad y alto dise\xF1o."})]}),E("div",{className:"benefits__box",children:[E("div",{children:[p(Y1,{}),E("span",{onClick:e,children:[p("h4",{children:"Economico"}),p($t,{})]})]}),p("p",{children:"Una de las virtudes de estas novedosas viviendas es que tiene costos m\xE1s bajos de los que se encuentran en el mercado, ofreciendo una oportunidad para pensar creativamente una soluci\xF3n que sea econ\xF3mica."})]}),E("div",{className:"benefits__box",children:[E("div",{children:[p(ih,{}),E("span",{onClick:e,children:[p("h4",{children:"Ampliable"}),p($t,{})]})]}),p("p",{children:"Es una construcci\xF3n ver vers\xE1til, siempre se podr\xE1 ampliar con nuevos m\xF3dulos, por lo que se puede empezar con un proyecto peque\xF1o y luego planificar nuevos anexos."})]}),E("div",{className:"benefits__box",children:[E("div",{children:[p(nh,{}),E("span",{onClick:e,children:[p("h4",{children:"Excelente aislamiento"}),p($t,{})]})]}),p("p",{children:"Cuenta con termo paneles compuesto de aislaci\xF3n de espuma de poliuretano expandido de 50 mm en todas sus caras, otorgando un gran aislamiento t\xE9rmico para temperaturas extremas."})]}),E("div",{className:"benefits__box",children:[E("div",{children:[p(rh,{}),E("span",{onClick:e,children:[p("h4",{children:"Transportable"}),p($t,{})]})]}),p("p",{children:"Estos m\xF3dulos se caracterizan por ser movibles, asentandose sobre pilotes, siendo f\xE1cil de transportar y de instalar."})]}),E("div",{className:"benefits__box",children:[E("div",{children:[p(Z1,{}),E("span",{onClick:e,children:[p("h4",{children:"Confort"}),p($t,{})]})]}),p("p",{children:"Est\xE1n dise\xF1adas para lograr un \xF3ptimo uso del espacio con el que se cuenta, siendo una soluci\xF3n creativa y moderna a las necesidades habitacionales de aquellos que quieren vivir con lo m\xE1s elemental sin sacrificar su comodidad."})]})]})]})}const Ch="/ManuelChomer/assets/main.4f3a63b1.jpg",Eh=ot.div`
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
`;function _h(){return E(Eh,{id:"compania",children:[p("div",{children:p("img",{src:Ch,alt:"Sol Home - Micro Viviendas"})}),E("div",{children:[p("h6",{children:"Compa\xF1\xEDa"}),E("h3",{children:["Tu empresa de ",p("strong",{children:"confianza"}),"."]}),p("p",{children:"Sol Home es una empresa dedicada a la fabricaci\xF3n y comercializaci\xF3n de Micro Viviendas modulares, las cuales se caracterizan por su alta calidad de estructura y dise\xF1o, por su poco tiempo de fabricaci\xF3n y por la oportunidad econ\xF3mica que representa. Dedicados toda la vida a la construcci\xF3n, comenzamos esta nueva etapa con el deseo de abastecer espacios habitacionales \xF3ptimos para vivir y disfrutar."}),E("a",{href:"#contacto",children:["Conoce m\xE1s ",p(hu,{})]})]})]})}const zh=ot.div`
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
`;function Ph(){return p(zh,{children:E("div",{children:[E("span",{children:[p("h4",{children:"Conoce m\xE1s nuestras micro viviendas"}),p("p",{children:"Descargate nuestro brochure para enterarte de todos los detalles y sacarte todas tus dudas."})]}),E("a",{href:$o,target:"_blank",rel:"noopener noreferrer",children:["Descargar ",p(cf,{})]})]})})}const Ir={_origin:"https://api.emailjs.com"},Nh=(e,t="https://api.emailjs.com")=>{Ir._userID=e,Ir._origin=t},pf=(e,t,n)=>{if(!e)throw"The public key is required. Visit https://dashboard.emailjs.com/admin/account";if(!t)throw"The service ID is required. Visit https://dashboard.emailjs.com/admin";if(!n)throw"The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";return!0};class Fs{constructor(t){this.status=t?t.status:0,this.text=t?t.responseText:"Network Error"}}const hf=(e,t,n={})=>new Promise((r,i)=>{const o=new XMLHttpRequest;o.addEventListener("load",({target:l})=>{const a=new Fs(l);a.status===200||a.text==="OK"?r(a):i(a)}),o.addEventListener("error",({target:l})=>{i(new Fs(l))}),o.open("POST",Ir._origin+e,!0),Object.keys(n).forEach(l=>{o.setRequestHeader(l,n[l])}),o.send(t)}),Lh=(e,t,n,r)=>{const i=r||Ir._userID;pf(i,e,t);const o={lib_version:"3.10.0",user_id:i,service_id:e,template_id:t,template_params:n};return hf("/api/v1.0/email/send",JSON.stringify(o),{"Content-type":"application/json"})},Th=e=>{let t;if(typeof e=="string"?t=document.querySelector(e):t=e,!t||t.nodeName!=="FORM")throw"The 3rd parameter is expected to be the HTML form element or the style selector of form";return t},Ah=(e,t,n,r)=>{const i=r||Ir._userID,o=Th(n);pf(i,e,t);const l=new FormData(o);return l.append("lib_version","3.10.0"),l.append("service_id",e),l.append("template_id",t),l.append("user_id",i),hf("/api/v1.0/email/send-form",l)},Mh={init:Nh,send:Lh,sendForm:Ah},$h=ot.div`
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
`;function Rh(){const e=tt.exports.useRef();return E($h,{id:"contacto",children:[p("h6",{children:"Contacto"}),p("h2",{children:"Coordina tu visita en Sol Home."}),p("p",{children:"Te invitamos a conocer tu pr\xF3xima vivienda para comprobar la alta calidad constructiva. Contactanos en cualquiera de nuestros medios de comunicaci\xF3n o llena el siguiente formulario y nuestro equipo se pondra en contacto con vos para responder todas tus dudas."}),E("span",{children:[E("a",{href:"https://api.whatsapp.com/send?phone=+5491141403663&text=\xA1Hola%20Sol%20Home!%20Quiero%20m\xE1s%20informaci\xF3n%20acerca%20de%20la%20micro%20vivienda.",target:"_blank",rel:"noopener noreferrer",children:[p(df,{}),"Whastapp"]}),E("a",{href:"mailto:solhomearg@gmail.com",children:[p(X1,{}),"Email"]}),E("a",{href:"tel:+5491141403663",children:[p(hu,{}),"Tel\xE9fono"]}),E("a",{href:"https://goo.gl/maps/56xMuLBH1Sko2VwV7",target:"_blank",rel:"noopener noreferrer",children:[p(K1,{}),"Showroom"]})]}),E("form",{ref:e,onSubmit:n=>{n.preventDefault(),Mh.sendForm("service_e6bwg0p","template_qp5qslq",e.current,"hwH8wj1eN-3bQW7te").then(()=>{document.querySelector("form button").classList.add("sendMail"),document.querySelector("form button").innerHTML="Enviado",setTimeout(()=>{location.reload()},2500)},r=>{console.log(r.text)})},children:[E("div",{children:[p("label",{htmlFor:"name",children:"Nombre completo"}),p("input",{type:"text",name:"name",id:"name",placeholder:"Nombre completo",minLength:"4",maxLength:"30",required:!0})]}),E("div",{children:[p("label",{htmlFor:"phone",children:"Tel\xE9fono"}),p("input",{type:"tel",name:"phone",id:"phone",placeholder:"Tel\xE9fono",minLength:"8",maxLength:"20",required:!0})]}),E("div",{children:[p("label",{htmlFor:"email",children:"Email"}),p("input",{type:"email",name:"email",id:"email",placeholder:"Email",minLength:"6",maxLength:"48",required:!0})]}),E("div",{className:"InputRadioDiv",children:[p("label",{htmlFor:"contact",children:"Elegi tu forma de contacto"}),E("div",{children:[E("div",{children:[p("input",{type:"radio",name:"contact",id:"whatsapp",value:"Whatsapp",required:!0}),p("label",{htmlFor:"wsp",children:"Whatsapp"})]}),E("div",{children:[p("input",{type:"radio",name:"contact",id:"mail",value:"Email",required:!0}),p("label",{htmlFor:"mail",children:"Email"})]})]})]}),E("div",{className:"TextAreaDiv",children:[p("label",{htmlFor:"message",children:"Mensaje"}),p("textarea",{name:"message",id:"message",placeholder:"Mensaje",minLength:"6",maxLength:"240",required:!0})]}),p("button",{type:"submit",children:"Enviar"})]})]})}const Oh=ot.footer`
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
      width: 120px;
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
`;function Fh(){return E(Oh,{children:[E("div",{className:"FooterBrand",children:[p("a",{href:"#home",children:p("img",{src:lf,alt:"Sol Home - Micro Viviendas"})}),p("h4",{children:"Proximamente en"}),p("a",{href:"https://goo.gl/maps/56xMuLBH1Sko2VwV7",target:"_blank",rel:"noopener noreferrer",children:"Shopping Remeros Plaza. Ruta 27 y Camino de los Remeros 1648. Tigre, Buenos Aires"})]}),E("div",{className:"FooterNavigation",children:[E("div",{children:[p("h4",{children:"Productos"}),p("a",{href:"#productos",children:"Modulos"}),p("a",{href:"#galeria",children:"Galer\xEDa"}),p("a",{href:$o,target:"_blank",rel:"noopener noreferrer",children:"Brochure"})]}),E("div",{children:[p("h4",{children:"Nosotros"}),p("a",{href:"#compania",children:"Compa\xF1\xEDa"}),p("a",{href:"#beneficios",children:"Beneficios"})]}),E("div",{children:[p("h4",{children:"Conoce m\xE1s"}),p("a",{href:"#contacto",children:"Contacto"}),p("a",{href:"https://api.whatsapp.com/send?phone=+5491141403663&text=\xA1Hola%20Sol%20Home!%20Quiero%20m\xE1s%20informaci\xF3n%20acerca%20de%20la%20micro%20vivienda.",target:"_blank",rel:"noopener noreferrer",children:"Chat ahora"})]})]}),E("div",{className:"FooterDatos",children:[p("a",{href:"mailto:solhomearg@gmail.com",children:"solhomearg@gmail.com"}),p("a",{href:"https://api.whatsapp.com/send?phone=+5491141403663&text=\xA1Hola%20Sol%20Home!%20Quiero%20m\xE1s%20informaci\xF3n%20acerca%20de%20la%20micro%20vivienda.",target:"_blank",rel:"noopener noreferrer",children:"+54 (11) 41403663"}),E("div",{children:[p("a",{href:"/",target:"_blank",rel:"noopener noreferrer",children:p(eh,{})}),p("a",{href:"/",target:"_blank",rel:"noopener noreferrer",children:p(V1,{})})]})]}),p("div",{className:"FooterCopyright",children:p("h6",{children:"Todos los derechos reservados. \xA9 Sol Home 2022"})})]})}const jh=ot.a`
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
`;function Ih(){return p(jh,{href:"https://api.whatsapp.com/send?phone=+5491141403663&text=\xA1Hola%20Sol%20Home!%20Quiero%20m\xE1s%20informaci\xF3n%20acerca%20de%20la%20micro%20vivienda.",target:"_blank",rel:"noopener noreferrer",children:p(df,{})})}function Dh(){return E("div",{children:[p(B1,{}),p(sh,{}),p(wh,{}),p(kh,{}),p(_h,{}),p(Ph,{}),p(Rh,{}),p(Fh,{}),p(Ih,{})]})}dl.createRoot(document.getElementById("root")).render(p(Zt.StrictMode,{children:p(Dh,{})}));
