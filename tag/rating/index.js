"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react/jsx-runtime");function r(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var e=r(require("react")),n=function(){return n=Object.assign||function(t){for(var r,e=1,n=arguments.length;e<n;e++)for(var a in r=arguments[e])Object.prototype.hasOwnProperty.call(r,a)&&(t[a]=r[a]);return t},n.apply(this,arguments)};exports.default=function(r){var a=r.amount,i=r.onRate,l=r.className,o=void 0===l?"":l,c=r.label,u=function(t,r){var e="function"==typeof Symbol&&t[Symbol.iterator];if(!e)return t;var n,a,i=e.call(t),l=[];try{for(;(void 0===r||r-- >0)&&!(n=i.next()).done;)l.push(n.value)}catch(t){a={error:t}}finally{try{n&&!n.done&&(e=i.return)&&e.call(i)}finally{if(a)throw a.error}}return l}(e.default.useState(0),2),s=u[0],f=u[1],d=function(t){return function(){f(t),i(t)}};return t.jsxs("div",n({className:"rating ".concat(o)},{children:[t.jsx("div",n({className:"rating-container"},{children:Array.from({length:a+1},(function(r,e){return t.jsx("button",n({className:"rating-button ".concat(s===e?"active":""),type:"button",onClick:d(e)},{children:e}),e+"rating-button")}))})),c&&t.jsxs("div",n({className:"rating-label"},{children:[t.jsx("small",{children:c.left}),t.jsx("small",{children:c.right})]}))]}))};
//# sourceMappingURL=index.js.map