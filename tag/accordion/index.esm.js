import{jsx as n,jsxs as e}from"react/jsx-runtime";import r,{useState as t,useEffect as o,useContext as c}from"react";var a=function(){return a=Object.assign||function(n){for(var e,r=1,t=arguments.length;r<t;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(n[o]=e[o]);return n},a.apply(this,arguments)};function l(n,e){var r={};for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&e.indexOf(t)<0&&(r[t]=n[t]);if(null!=n&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(n);o<t.length;o++)e.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(n,t[o])&&(r[t[o]]=n[t[o]])}return r}var i=function(e){var r=u().showContent,t=e.children,o=e.className,c=l(e,["children","className"]);return r?n("div",a({className:"accordion-content ".concat(o||"")},c,{children:t})):null},s=function(r){var t=u(),o=t.showContent,c=t.toggleContent,i=r.children,s=r.className,d=l(r,["children","className"]);return e("div",a({className:"accordion-header ".concat(s||""),onClick:c},d,{children:[i,n("span",a({className:"material-icons accordion-icon"},o?{children:"expand_less"}:{children:"expand_more"}))]}))},d=r.createContext({}),f=function(e){var r=e.id,c=e.filled,i=e.defaultShow,s=void 0!==i&&i,f=e.children,u=e.className,h=e.onClick,p=l(e,["id","filled","defaultShow","children","className","onClick"]),m=function(n,e){var r="function"==typeof Symbol&&n[Symbol.iterator];if(!r)return n;var t,o,c=r.call(n),a=[];try{for(;(void 0===e||e-- >0)&&!(t=c.next()).done;)a.push(t.value)}catch(n){o={error:n}}finally{try{t&&!t.done&&(r=c.return)&&r.call(c)}finally{if(o)throw o.error}}return a}(t(s),2),v=m[0],y=m[1];o((function(){s!==v&&y(s)}),[s]);return n(d.Provider,a({value:{showContent:v,toggleContent:function(){y((function(n){return!n})),"function"==typeof h&&h()}}},{children:n("div",a({id:r,className:"accordion".concat(c?"_filled":""," ").concat(u||""," ").concat(v?"show":""," ")},p,{children:f}))}))},u=function(){return c(d)};export{i as AccordionContent,s as AccordionHeader,f as default,u as useAccordion};
//# sourceMappingURL=index.esm.js.map
