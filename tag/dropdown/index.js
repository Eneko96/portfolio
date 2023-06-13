"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var t=require("react/jsx-runtime"),e=require("react"),n=require("react-dom");function o(t){return t&&"object"==typeof t&&"default"in t?t:{default:t}}var r=o(e),c=o(n),i=function(){return i=Object.assign||function(t){for(var e,n=1,o=arguments.length;n<o;n++)for(var r in e=arguments[n])Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t},i.apply(this,arguments)};function u(t,e){var n={};for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&e.indexOf(o)<0&&(n[o]=t[o]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(o=Object.getOwnPropertySymbols(t);r<o.length;r++)e.indexOf(o[r])<0&&Object.prototype.propertyIsEnumerable.call(t,o[r])&&(n[o[r]]=t[o[r]])}return n}function a(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var o,r,c=n.call(t),i=[];try{for(;(void 0===e||e-- >0)&&!(o=c.next()).done;)i.push(o.value)}catch(t){r={error:t}}finally{try{o&&!o.done&&(n=c.return)&&n.call(c)}finally{if(r)throw r.error}}return i}var l=r.default.memo((function(n){var o=n.children,c=n.className,a=n.disabled,l=u(n,["children","className","disabled"]),f=d(),s=f.onToggleMenu,h=f.setDropdownButtonDimensions,p=f.showMenu,g=r.default.useRef(null);return e.useEffect((function(){if(g&&g.current){var t=g.current.getBoundingClientRect();t&&h({width:t.width,height:t.height})}}),[p]),t.jsx("div",i({className:"dropdown-button".concat(a?"_disabled":""," ").concat(c||""),onClick:s,ref:g},l,{children:o}))})),f=r.default.createContext({}),d=function(){return e.useContext(f)};exports.DropdownButton=l,exports.DropdownMenu=function(n){var o=n.className,a=n.children,l=u(n,["className","children"]),f=r.default.useRef(null),s=d(),h=s.showMenu,p=s.setDropdownMenuDimensions,g=s.position,v=s.dropdownRef,w=s.handleClickMenu;e.useEffect((function(){if(f&&f.current){var t=f.current.getBoundingClientRect();t&&p({width:t.width,height:t.height})}}),[h]);var m=t.jsx("div",i({ref:f,className:"dropdown-menu ".concat(h?"":"hidden"," ").concat(o||""),style:g,onClick:w},l,{children:a}));if(v&&v.current){var x=document.getElementById("root");return c.default.createPortal(m,v.current||x||document.body)}return null},exports.default=function(n){var o=n.children,r=n.className,c=n.onChangeToggleMenu,l=n.itemsDivider,d=n.forceRefresh,s=n.defaultShow,h=n.keepShown,p=void 0!==h&&h,g=n.placement,v=void 0===g?"bottom":g,w=u(n,["children","className","onChangeToggleMenu","itemsDivider","forceRefresh","defaultShow","keepShown","placement"]),m=a(e.useState(!1),2),x=m[0],y=m[1],b=a(e.useState(d||0),2),M=b[0],D=b[1],j=a(e.useState({width:0,height:0}),2),O=j[0],C=j[1],S=a(e.useState({width:0,height:0}),2),k=S[0],E=S[1],R=e.useRef(null);e.useEffect((function(){void 0!==s&&s!==x&&y(s)}),[s]),e.useEffect((function(){d&&M!==d&&D(d)}),[d,M]);var N=function(t){t&&t.target&&R&&R.current&&"true"===R.current.getAttribute("data-show")&&!R.current.contains(t.target)&&(y(!1),"function"==typeof c&&c(!1))};e.useEffect((function(){return document.addEventListener("click",N),document.addEventListener("scroll",(function(){return D((function(t){return t++}))})),function(){document.removeEventListener("click",N),document.removeEventListener("scroll",(function(){return D((function(t){return t++}))}))}}),[]);var B=function(t,e){return"calc(".concat(t,"px - ").concat(e,"px - var(--unit))")},P=function(t,e){return"calc(".concat(t,"px + ").concat(e,"px + var(--unit))")},T=function(t,e){return"calc(".concat(t,"px + ").concat(e,"px + var(--unit))")},L=function(t,e){return"calc(".concat(t,"px - ").concat(e,"px - var(--unit))")},q=function(t){return"".concat(t,"px")},_=function(t,e,n){return"calc(".concat(t,"px + ").concat(n,"px - ").concat(e,"px)")},I=function(t){return"".concat(t,"px")},A=function(t,e,n){return"calc(".concat(t,"px + ").concat(n,"px - ").concat(e,"px)")},H=e.useMemo((function(){var t,e="",n=0;if(R&&R.current){var o=R.current.getBoundingClientRect();n=O.width<k.width?k.width:O.width;var r=document.body,c=r.clientHeight,i=r.clientWidth;switch(v){case"top":e=o.top-O.height-8<0?P(o.top,k.height):B(o.top,O.height),t=o.left+n>i?_(o.left,n,k.width):q(o.left);break;case"right":t=o.left+n+8>i?L(o.left,n):T(o.left,k.width),e=o.top+O.height>c?A(o.top,O.height,k.height):I(o.top);break;case"bottom":e=o.top+O.height+8>c?B(o.top,O.height):P(o.top,k.height),t=o.left+n>i?_(o.left,n,k.width):q(o.left);break;case"left":t=o.left-n-8<0?T(o.left,k.width):L(o.left,n),e=o.top+O.height>c?A(o.top,O.height,k.height):I(o.top)}}return{left:t,top:e,width:"".concat(n,"px")}}),[O,k]);return t.jsx(f.Provider,i({value:{showMenu:x,setDropdownMenuDimensions:C,setDropdownButtonDimensions:E,handleClickMenu:function(){p||(y(!1),"function"==typeof c&&c(!1))},itemsDivider:l,dropdownRef:R,onChangeToggleMenu:c,onToggleMenu:function(){y((function(t){return"function"==typeof c&&c(!t),!t}))},position:H}},{children:t.jsx("div",i({ref:R,className:"dropdown ".concat(r||""),"data-show":x},w,{children:o}))}))},exports.useDropdown=d;
//# sourceMappingURL=index.js.map
