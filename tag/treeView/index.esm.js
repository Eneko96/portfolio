import{jsxs as r,Fragment as e,jsx as n}from"react/jsx-runtime";import t,{useState as o}from"react";var a=function(){return a=Object.assign||function(r){for(var e,n=1,t=arguments.length;n<t;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(r[o]=e[o]);return r},a.apply(this,arguments)};function i(r,e){var n={};for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&e.indexOf(t)<0&&(n[t]=r[t]);if(null!=r&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(t=Object.getOwnPropertySymbols(r);o<t.length;o++)e.indexOf(t[o])<0&&Object.prototype.propertyIsEnumerable.call(r,t[o])&&(n[t[o]]=r[t[o]])}return n}var l=function(l){var c=l.children,s=l.name,d=l.onClick,f=l.disabled,u=l.className,m=l.arrow,p=void 0===m?"left":m,y=l.icon,h=i(l,["children","name","onClick","disabled","className","arrow","icon"]),b=function(r,e){var n="function"==typeof Symbol&&r[Symbol.iterator];if(!n)return r;var t,o,a=n.call(r),i=[];try{for(;(void 0===e||e-- >0)&&!(t=a.next()).done;)i.push(t.value)}catch(r){o={error:r}}finally{try{t&&!t.done&&(n=a.return)&&n.call(a)}finally{if(o)throw o.error}}return i}(o(!1),2),v=b[0],O=b[1];return r(e,{children:[n("button",a({type:"button",disabled:f,className:"list-icon tree-element ".concat(u||""),onClick:function(r){O(!v),"function"==typeof d&&d(r)}},h,{children:r("li",a({className:"item-condensed tree-li"},{children:[n("span",c||y?a({className:"material-icons icon-order"},{children:y||(y||"left"!==p?"":"arrow_right")}):{className:"icon-order"}),s,"right"===p&&c&&n("span",a({className:"material-icons tree-element-icon-right"},v?{children:"keyboard_arrow_up"}:{children:"keyboard_arrow_down"}))]}))})),c&&v&&t.Children.toArray(c).map((function(r,e){return n("div",a({className:"tree-element-item"},{children:r}),e)}))]})},c=function(r){var e=r.children,o=r.className,c=i(r,["children","className"]);return t.Children.toArray(e).every((function(r){return r.type===l}))?n("div",a({className:"tree-container ".concat(o||"")},c,{children:e})):null};export{l as TreeViewElement,c as default};
//# sourceMappingURL=index.esm.js.map