"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react/jsx-runtime");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=r(require("react")),n=function(){return n=Object.assign||function(e){for(var r,c=1,n=arguments.length;c<n;c++)for(var a in r=arguments[c])Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);return e},n.apply(this,arguments)};function a(e,r){var c={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&r.indexOf(n)<0&&(c[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)r.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(c[n[a]]=e[n[a]])}return c}var t=function(r){var c=r.id,t=r.children,i=r.className,d=a(r,["id","children","className"]);return e.jsx("div",n({id:c||"",className:"card-top ".concat(i||"")},d,{children:t}))},i=function(r){var c=r.id,t=r.children,i=r.className,d=a(r,["id","children","className"]);return e.jsx("div",n({id:c||"",className:"card-icon ".concat(i||"")},d,{children:t}))},d=function(r){var c=r.id,t=r.children,i=r.className,d=a(r,["id","children","className"]);return e.jsx("div",n({id:c||"",className:"card-header ".concat(i||"")},d,{children:t}))},o=function(r){var c=r.id,t=r.children,i=r.className,d=a(r,["id","children","className"]);return e.jsx("div",n({id:c||"",className:"card-body ".concat(i||"")},d,{children:t}))},s=function(r){var c=r.id,t=r.children,i=r.className,d=a(r,["id","children","className"]);return e.jsx("div",n({id:c||"",className:"card-footer ".concat(i||"")},d,{children:t}))};exports.IconCardBody=o,exports.IconCardFooter=s,exports.IconCardHeader=d,exports.IconCardIcon=i,exports.IconCardTop=t,exports.default=function(r){var l,u,p=r.id,h=r.children,f=r.className,m=r.selected,v=r.onClick,y=a(r,["id","children","className","selected","onClick"]);return u=[],c.default.Children.forEach(h,(function(e){e&&(e.type===t||e.type===d||e.type===o||e.type===s?u.push(e):e.type===i&&(l=e))})),e.jsxs("div",n({id:p||"",className:"card_icon".concat(m?"_selected":""," ").concat(f||""),onClick:v},y,{children:[l,u&&u.length>0&&e.jsx("div",n({className:"card_icon-content"},{children:u}))]}))};
//# sourceMappingURL=index.js.map