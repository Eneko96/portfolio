"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t,e=require("react/jsx-runtime"),a=require("react"),n=function(){return n=Object.assign||function(t){for(var e,a=1,n=arguments.length;a<n;a++)for(var l in e=arguments[a])Object.prototype.hasOwnProperty.call(e,l)&&(t[l]=e[l]);return t},n.apply(this,arguments)};function l(t,e){var a={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var l=0;for(n=Object.getOwnPropertySymbols(t);l<n.length;l++)e.indexOf(n[l])<0&&Object.prototype.propertyIsEnumerable.call(t,n[l])&&(a[n[l]]=t[n[l]])}return a}function r(t,e){var a="function"==typeof Symbol&&t[Symbol.iterator];if(!a)return t;var n,l,r=a.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(n=r.next()).done;)i.push(n.value)}catch(t){l={error:t}}finally{try{n&&!n.done&&(a=r.return)&&a.call(r)}finally{if(l)throw l.error}}return i}!function(t){t[t.bb1=0]="bb1",t[t.bb2=1]="bb2"}(t||(t={}));var i=function(i){var s=i.min,c=void 0===s?0:s,u=i.max,o=void 0===u?100:u,d=i.onChange,v=i.disabled,f=i.label,p=i.tooltip,m=i.tooltipText,b=i.defaultValue,x=i.className;i.double;var h=l(i,["min","max","onChange","disabled","label","tooltip","tooltipText","defaultValue","className","double"]),y=a.useRef(null),g=r(a.useState((null==b?void 0:b.min)||c),2),j=g[0],N=g[1],w=r(a.useState((null==b?void 0:b.max)||o),2),O=w[0],S=w[1],k=a.useRef(null),C=a.useRef(null),E=a.useRef(null),R=a.useRef(null),_=[E,R],V=a.useCallback((function(t){return Math.round((t-c)/(o-c)*100)}),[c,o]);a.useEffect((function(){k.current&&C.current&&(T(t.bb1),T(t.bb2))}),[]);var T=function(t){var e=_[t],a=0===t?k:C;if((null==e?void 0:e.current)&&(null==k?void 0:k.current)&&(null==C?void 0:C.current)&&(null==a?void 0:a.current)&&+k.current.value<+C.current.value){var n=+a.current.value,l=Number(100*(n-c)/(o-c));e.current.style.left="calc(".concat(l,"% + (").concat(10-.213*l,"px))")}};return a.useEffect((function(){if(C.current){var t=V(j),e=V(+C.current.value);y.current&&(y.current.style.left="".concat(t,"%"),y.current.style.width="calc(".concat(e-t,"% ").concat(e-t<50&&e<50?"+ var(--unit) - 1%":"- 1%",")"))}}),[j,V]),a.useEffect((function(){if(k.current){var t=V(+k.current.value),e=V(O);y.current&&(y.current.style.width="calc(".concat(e-t,"% ").concat(e-t<50&&e<50?"+ var(--unit) - 1%":"- 1%",")"),y.current.style.left="calc(".concat(t,"%)"))}}),[O,V]),e.jsxs("div",n({className:"slider-wrapper ".concat(x||"")},h,{children:[e.jsx("div",{className:"slider-track"}),e.jsx("div",{ref:y,className:"slider-range".concat(v?"_disabled":"")}),e.jsxs("div",n({className:"slider-input-container"},{children:[e.jsx("input",{disabled:v,type:"range",className:"thumb".concat(v?"_disabled":""),ref:k,min:c,max:o,"data-testid":h["data-testid"]?h["data-testid"]+"-input-test":void 0,value:j,onInput:p?function(){return T(t.bb1)}:void 0,onChange:function(t){var e=Math.min(+t.target.value,O-1);N(e),d&&d({min:e,max:O}),t.target.value=e.toString()}}),(null==m?void 0:m.min)&&e.jsx("span",n({className:"tooltip top slider","data-testid":h["data-testid"]?h["data-testid"]+"-tooltip-test":void 0,ref:E},{children:null==m?void 0:m.min}))]})),e.jsxs("div",n({className:"slider-input-container"},{children:[e.jsx("input",{disabled:v,type:"range",className:"thumb".concat(v?"_disabled":""),ref:C,value:O,min:c,max:o,"data-testid":h["data-testid"]?h["data-testid"]+"-input2-test":void 0,onInput:p?function(){return T(t.bb2)}:void 0,onChange:function(t){var e=Math.max(+t.target.value,j+1);S(e),d&&d({min:j,max:e}),t.target.value=e.toString()}}),(null==m?void 0:m.max)&&e.jsx("span",n({className:"tooltip top slider","data-testid":h["data-testid"]?h["data-testid"]+"-tooltip2-test":void 0,ref:R},{children:m.max}))]})),e.jsxs("div",n({className:"slider-label","data-testid":h["data-testid"]?h["data-testid"]+"-label-test":void 0},{children:[e.jsx("small",{children:null==f?void 0:f.left}),e.jsx("small",{children:null==f?void 0:f.right})]}))]}))};exports.default=function(t){var s=t.disabled,c=t.tooltip,u=t.defaultValue,o=void 0===u?0:u,d=t.tooltipText,v=t.min,f=void 0===v?0:v,p=t.max,m=void 0===p?100:p,b=t.label,x=t.double,h=t.onChange,y=t.className,g=t.withValueTrack,j=l(t,["disabled","tooltip","defaultValue","tooltipText","min","max","label","double","onChange","className","withValueTrack"]),N=a.useRef(null),w=a.useRef(null),O=a.useRef(null),S=r(a.useState(o),2),k=S[0],C=S[1];a.useEffect((function(){if(w.current){R();var t=w.current;t.addEventListener("keydown",(function(e){document.activeElement===t&&e.shiftKey&&(e.preventDefault(),"ArrowUp"===e.key&&C((function(e){return e+5<m?(t.value=(e+5).toString(),e+5):e})),"ArrowDown"===e.key&&C((function(e){return e-5>f?(t.value=(e-5).toString(),e-5):e})))}))}}),[]);var E=a.useCallback((function(t){return Math.round((t-f)/(m-f)*100)}),[f,m]);a.useEffect((function(){if(w.current){var t=E(f),e=E(k);N.current&&(N.current.style.width="calc(".concat(e-t,"% ").concat(e-t<50&&e<50?"+ var(--unit) - 1%":"- 1%",")"))}}),[f,k,E]);var R=function(){if((null==O?void 0:O.current)&&(null==w?void 0:w.current)){var t=w.current.value,e=Number(100*(+t-f)/(m-f));O.current.style.left="calc(".concat(e,"% + (").concat(12-.26*e,"px))")}};return x?e.jsx(i,n({},t)):e.jsx("div",n({className:"slider-wrapper ".concat(y||"")},{children:e.jsxs("div",n({},j,{className:"slider-input-container".concat(s?"_disabled":"")},{children:[e.jsx("div",{className:"slider-track"}),e.jsx("div",{ref:N,className:"slider-range".concat(s?"_disabled":"")}),e.jsx("input",{"data-testid":j["data-testid"]?j["data-testid"]+"-input-test":void 0,className:"thumb".concat(s?"_disabled":""),onChange:function(t){C(+t.target.value),h&&h(+t.target.value)},ref:w,defaultValue:o,disabled:s,"aria-label":j["aria-label"]?"".concat(j["aria-label"],"-input"):"slider-input",type:"range",onInput:c?R:void 0,min:f,max:m,list:"items"}),d&&"string"==typeof d&&e.jsx("span",n({className:"tooltip top slider","data-testid":j["data-testid"]?j["data-testid"]+"-tooltip-test":void 0,ref:O},{children:d})),g&&m&&"number"==typeof f&&e.jsx("div",n({className:"tooltip-value-track","data-testid":j["data-testid"]?j["data-testid"]+"-value-track-test":void 0},{children:Array.from(Array(m+1),(function(t,e){return e})).map((function(t){return e.jsx("option",{className:"small",value:t.toString(),label:t.toString(),style:{left:"calc(".concat(100*(t-f)/(m-f),"% + ").concat(12-100*(t-f)/(m-f)," * 0.26px)"),position:"absolute"}},t)}))})),e.jsxs("div",n({"data-testid":j["data-testid"]?j["data-testid"]+"-label-test":void 0,className:"slider-label"},{children:[e.jsx("small",{children:null==b?void 0:b.left}),e.jsx("small",{children:null==b?void 0:b.right})]}))]}))}))};
//# sourceMappingURL=index.js.map
