"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react/jsx-runtime"),r=function(){return r=Object.assign||function(e){for(var r,a=1,c=arguments.length;a<c;a++)for(var n in r=arguments[a])Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n]);return e},r.apply(this,arguments)};function a(e,r){var a={};for(var c in e)Object.prototype.hasOwnProperty.call(e,c)&&r.indexOf(c)<0&&(a[c]=e[c]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(c=Object.getOwnPropertySymbols(e);n<c.length;n++)r.indexOf(c[n])<0&&Object.prototype.propertyIsEnumerable.call(e,c[n])&&(a[c[n]]=e[c[n]])}return a}exports.TeaserCardBody=function(c){var n=c.id,t=c.children,s=c.className,i=a(c,["id","children","className"]);return e.jsx("div",r({id:n||"",className:"card-body ".concat(s||"")},i,{children:t}))},exports.TeaserCardFooter=function(c){var n=c.id,t=c.children,s=c.className,i=a(c,["id","children","className"]);return e.jsx("div",r({id:n||"",className:"card-footer ".concat(s||"")},i,{children:t}))},exports.TeaserCardHeader=function(c){var n=c.id,t=c.children,s=c.className,i=a(c,["id","children","className"]);return e.jsx("div",r({id:n||"",className:"card-header ".concat(s||"")},i,{children:t}))},exports.TeaserCardImg=function(c){var n=c.id,t=c.children,s=c.className,i=a(c,["id","children","className"]),d=i.hoverButton,l=a(i,["hoverButton"]);return e.jsxs("div",r({id:n||"",className:"card-img ".concat(s||"")},l,{children:[t,d]}),n||"card-img")},exports.TeaserCardTop=function(c){var n=c.id,t=c.children,s=c.className,i=a(c,["id","children","className"]);return e.jsx("div",r({id:n||"",className:"card-top ".concat(s||"")},i,{children:t}))},exports.default=function(c){var n=c.id,t=c.children,s=c.className,i=c.selected,d=c.onClick,l=a(c,["id","children","className","selected","onClick"]);return e.jsx("div",r({id:n||"",className:"card_teaser".concat(i?"_selected":""," ").concat(s||""),onClick:d},l,{children:t}))};
//# sourceMappingURL=index.js.map
