import{jsxs as e,jsx as a}from"react/jsx-runtime";import{useState as t,useEffect as l}from"react";var n=function(){return n=Object.assign||function(e){for(var a,t=1,l=arguments.length;t<l;t++)for(var n in a=arguments[t])Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n]);return e},n.apply(this,arguments)};function r(e,a){var t="function"==typeof Symbol&&e[Symbol.iterator];if(!t)return e;var l,n,r=t.call(e),o=[];try{for(;(void 0===a||a-- >0)&&!(l=r.next()).done;)o.push(l.value)}catch(e){n={error:e}}finally{try{l&&!l.done&&(t=r.return)&&t.call(r)}finally{if(n)throw n.error}}return o}var o=function(o){var c=o.id,i=void 0===c?"toggle":c,s=o.name,d=o.checked,p=void 0!==d&&d,f=o.className,u=o.disabled,h=o.readOnly,g=o.helperTextOff,m=o.helperTextOn,b=o.label,y=o.onChange,O=o.small,v=function(e,a){var t={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&a.indexOf(l)<0&&(t[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(l=Object.getOwnPropertySymbols(e);n<l.length;n++)a.indexOf(l[n])<0&&Object.prototype.propertyIsEnumerable.call(e,l[n])&&(t[l[n]]=e[l[n]])}return t}(o,["id","name","checked","className","disabled","readOnly","helperTextOff","helperTextOn","label","onChange","small"]),x=r(t(p),2),N=x[0],j=x[1];l((function(){N!==p&&j(p)}),[p]);var k=r(t(p?m:g),2),w=k[0],P=k[1],C=function(){P(w===g?m:g)},S="toggle-pill".concat(O?"_small":"",N?"_checked":"",u||h?"_disabled":"");return e("div",n({className:"toggle ".concat(f||"")},v,{children:[b&&!O&&a("p",n({className:"toggle-label"},{children:b})),e("div",n({className:"toggle-container"},{children:[e("label",n({id:"".concat(i,"-label"),className:S,htmlFor:i,"aria-label":v["aria-label"]?"".concat(v["aria-label"],"-label"):"toggle-label",onClick:function(e){return e.stopPropagation()}},{children:[a("input",{id:i,name:s,"data-testid":v["data-testid"]&&v["data-testid"]+"-input"||void 0,className:"toggle-input",onChange:function(){j(!N),C(),"function"==typeof y&&y(!N)},checked:N,disabled:u,readOnly:h,type:"checkbox"}),a("span",{className:"toggle-handle"})]})),w&&a("span",n({className:"toggle-text-helper".concat(O?"_small":"")},{children:w}))]}))]}))};export{o as default};
//# sourceMappingURL=index.esm.js.map