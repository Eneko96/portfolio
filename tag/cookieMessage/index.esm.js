import{jsx as e,jsxs as r}from"react/jsx-runtime";import n from"react";var c=function(){return c=Object.assign||function(e){for(var r,n=1,c=arguments.length;n<c;n++)for(var a in r=arguments[n])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},c.apply(this,arguments)};function a(e,r){var n={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&r.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(c=Object.getOwnPropertySymbols(e);a<c.length;a++)r.indexOf(c[a])<0&&Object.prototype.propertyIsEnumerable.call(e,c[a])&&(n[c[a]]=e[c[a]])}return n}var t=function(r){var n=r.children,t=r.className,o=a(r,["children","className"]);return e("div",c({className:"cookie-message-footer ".concat(t||"")},o,{children:n}))},o=function(r){var n=r.children,t=r.className,o=a(r,["children","className"]);return e("h4",c({className:t||""},o,{children:n}))},i=function(r){var n=r.children,t=r.className,o=a(r,["children","className"]);return e("div",c({className:"cookie-message-body ".concat(t||"")},o,{children:n}))},s=function(r){var n=r.children,t=r.className,o=a(r,["children","className"]);return e("div",c({className:"cookie-message-right ".concat(t||"")},o,{children:n}))},l=function(r){var n=r.children,t=r.className,o=a(r,["children","className"]);return e("div",c({className:t||""},o,{children:n}))},m=function(m){var d,u,f,h,p=m.children,N=m.className,v=m.moreInfo,y=m.onToggleMoreInfo,g=a(m,["children","className","moreInfo","onToggleMoreInfo"]),b=n.Children.toArray(p);return r("div",c({className:"cookie-message ".concat(N||"")},g,{children:[v?r("div",c({className:"cookie-message-back"},{children:[e("button",c({type:"button",onClick:function(){"function"==typeof y&&y()},className:"cookie-message-back-button"},{children:e("span",c({className:"material-icons"},{children:"keyboard_backspace"}))})),e("div",c({className:"cookie-message-back-helper"},{children:"Back"}))]})):null,(d=b.filter((function(e){return e.type===o})),u=b.filter((function(e){return e.type===i})),f=b.filter((function(e){return e.type===t})),h=b.filter((function(e){return e.type===s})),r("div",c({className:"cookie-message-container"},{children:[r("div",{children:[d,u,f]}),e("div",c({className:"cookie-message-right"},{children:h}))]}))),v?b.find((function(e){return e.type===l})):null]}))};export{i as CookieMessageBody,t as CookieMessageFooter,o as CookieMessageHeader,s as CookieMessageRight,l as CookieMoreInfo,m as default};
//# sourceMappingURL=index.esm.js.map
