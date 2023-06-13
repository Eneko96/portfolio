import{jsxs as e,jsx as t}from"react/jsx-runtime";import r,{useState as n,useEffect as a}from"react";var i=function(){return i=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},i.apply(this,arguments)};function c(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r}function s(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,a,i=r.call(e),c=[];try{for(;(void 0===t||t-- >0)&&!(n=i.next()).done;)c.push(n.value)}catch(e){a={error:e}}finally{try{n&&!n.done&&(r=i.return)&&r.call(i)}finally{if(a)throw a.error}}return c}var l=function(r){var n=r.name,a=r.detail,s=r.status,l=c(r,["name","detail","status"]),o="";return"success"===s?o="check":"error"===s&&(o="error_outline"),e("div",i({className:"stepper-step-container ".concat(s),onClick:function(){return(null==l?void 0:l.onClick)&&l.onClick(l["data-idx"])},"data-testid":l&&l["data-testid"]?"".concat(l["data-testid"],"-item-").concat(l["data-idx"]):void 0},{children:[t("div",i({className:"stepper-item-content"},{children:t("div",i({className:"stepper-step"},{children:(null==l?void 0:l.numbered)?t("span",i({className:"step-number"},{children:l["data-idx"]+1})):t("span","success"===s||"error"===s?i({className:"material-icons"},{children:o}):{})}))})),e("div",i({className:"stepper-text-content"},{children:[t("p",i({className:"stepper-title"},{children:n})),t("p",i({className:"stepper-subtitle"},{children:a}))]}))]}))},o=function(o){var d=o.vertical,p=o.numbered,u=o.onClickStep,m=o.className,f=o.children,v=c(o,["vertical","numbered","onClickStep","className","children"]),h=function(){var e=s(n(!1),2),t=e[0],r=e[1],i=s(n(!1),2),c=i[0],l=i[1],o=s(n(!1),2),d=o[0],p=o[1];return a((function(){var e=function(){window.innerWidth<=672?(r(!0),l(!1),p(!1)):window.innerWidth<=1024?(r(!1),l(!0),p(!1)):(r(!1),l(!1),p(!0))};return e(),function(){return e()}}),[]),{isMobile:t,isTablet:c,isDesktop:d}}().isMobile,b=function(e){"function"==typeof u&&u(e)},y=r.Children.map(f,(function(e,t){var n={"data-idx":t,numbered:p,onClick:b,vertical:d};return r.isValidElement(e)&&e.type===l?r.cloneElement(e,n):f}));if(h){var N=r.Children.toArray(f),x=N.length,O=N.findIndex((function(e){return"active"===e.props.status}));return e("div",i({className:"stepper-mobile"},{children:[e("div",i({className:"stepper-mobile-text-container"},{children:[t("p",i({className:"stepper-title"},{children:N[O].props.name})),e("div",i({className:"stepper-mobile-steps"},{children:[O+1,"/",x]}))]})),t("div",i({className:"stepper-mobile-progress"},{children:t("div",{className:"stepper-mobile-progress_fill",style:{transform:"translateX(-".concat(100-100*(O+1/x),"%)")}})}))]}))}return t("div",i({className:"stepper".concat(d?"_vertical":""," ").concat(m||""),"data-testid":v&&v["data-testid"]?v["data-testid"]:void 0},{children:y}))};export{l as Step,o as default};
//# sourceMappingURL=index.esm.js.map
