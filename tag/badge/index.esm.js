import{jsx as r}from"react/jsx-runtime";import{useState as t,useEffect as e}from"react";var n=function(){return n=Object.assign||function(r){for(var t,e=1,n=arguments.length;e<n;e++)for(var o in t=arguments[e])Object.prototype.hasOwnProperty.call(t,o)&&(r[o]=t[o]);return r},n.apply(this,arguments)};function o(r,t){var e="function"==typeof Symbol&&r[Symbol.iterator];if(!e)return r;var n,o,a=e.call(r),c=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)c.push(n.value)}catch(r){o={error:r}}finally{try{n&&!n.done&&(e=a.return)&&e.call(a)}finally{if(o)throw o.error}}return c}var a=function(a){var c=a.children,i=a.error,l=a.success,s=a.small,u=a.className,f=function(r,t){var e={};for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&t.indexOf(n)<0&&(e[n]=r[n]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(r);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(r,n[o])&&(e[n[o]]=r[n[o]])}return e}(a,["children","error","success","small","className"]),p=function(){var r=o(t(!1),2),n=r[0],a=r[1],c=o(t(!1),2),i=c[0],l=c[1],s=o(t(!1),2),u=s[0],f=s[1];return e((function(){var r=function(){window.innerWidth<=672?(a(!0),l(!1),f(!1)):window.innerWidth<=1024?(a(!1),l(!0),f(!1)):(a(!1),l(!1),f(!0))};return r(),function(){return r()}}),[]),{isMobile:n,isTablet:i,isDesktop:u}}().isMobile;return r("span",c?n({className:"badge".concat(s||p?"_small":"").concat(i?"_error":"").concat(l?"_success":""," ").concat(u||"")},f,{children:c}):n({className:"badge_empty ".concat(u||"")},f))};export{a as default};
//# sourceMappingURL=index.esm.js.map
