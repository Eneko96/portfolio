import{jsxs as e,jsx as t}from"react/jsx-runtime";import{useState as a,useRef as r}from"react";var n=function(){return n=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},n.apply(this,arguments)};var l=function(l){var o=l.id,c=l.placeholder,i=l.name,s=l.onChange,u=l.defaultValue,d=l.small,p=l.className,f=l.value,m=function(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}(l,["id","placeholder","name","onChange","defaultValue","small","className","value"]),h=function(e,t){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var r,n,l=a.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=l.next()).done;)o.push(r.value)}catch(e){n={error:e}}finally{try{r&&!r.done&&(a=l.return)&&a.call(l)}finally{if(n)throw n.error}}return o}(a(!(!u&&!f)),2),v=h[0],y=h[1],b=r(null);return e("div",n({className:"input-container ".concat(p||""),"data-testid":m&&m["data-testid"]?"".concat(m["data-testid"],"-wrapper"):void 0},{children:[t("span",n({className:"material-icons search"},{children:"search"})),t("input",n({id:o,name:i,className:"searchbox".concat(d?"_small":""),placeholder:c,defaultValue:u,value:f,type:"search",onChange:function(e){e.target.value?y(!0):y(!1),s(e)},ref:b},m)),v&&t("button",n({type:"button",className:"button-interactive",style:{pointerEvents:"none"},"data-testid":m&&m["data-testid"]?"".concat(m["data-testid"],"-remove-btn"):void 0},{children:t("span",n({className:"material-icons"},{children:"close"}))}))]}))};export{l as default};
//# sourceMappingURL=index.esm.js.map