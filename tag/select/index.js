"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react/jsx-runtime"),t=require("react"),n=require("react-dom");function r(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var c=r(t),i=r(n),o=function(){return o=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var c in t=arguments[n])Object.prototype.hasOwnProperty.call(t,c)&&(e[c]=t[c]);return e},o.apply(this,arguments)};function a(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(r=Object.getOwnPropertySymbols(e);c<r.length;c++)t.indexOf(r[c])<0&&Object.prototype.propertyIsEnumerable.call(e,r[c])&&(n[r[c]]=e[r[c]])}return n}function l(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,c,i=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(r=i.next()).done;)o.push(r.value)}catch(e){c={error:e}}finally{try{r&&!r.done&&(n=i.return)&&n.call(i)}finally{if(c)throw c.error}}return o}function s(e,t,n){if(n||2===arguments.length)for(var r,c=0,i=t.length;c<i;c++)!r&&c in t||(r||(r=Array.prototype.slice.call(t,0,c)),r[c]=t[c]);return e.concat(r||Array.prototype.slice.call(t))}var u=c.default.memo((function(n){var r=n.children,i=n.className,l=n.disabled,s=a(n,["children","className","disabled"]),u=p(),d=u.onToggleMenu,f=u.setDropdownButtonDimensions,h=u.showMenu,m=c.default.useRef(null);return t.useEffect((function(){if(m&&m.current){var e=m.current.getBoundingClientRect();e&&f({width:e.width,height:e.height})}}),[h]),e.jsx("div",o({className:"dropdown-button".concat(l?"_disabled":""," ").concat(i||""),onClick:d,ref:m},s,{children:r}))})),d=function(n){var r=n.className,l=n.children,s=a(n,["className","children"]),u=c.default.useRef(null),d=p(),f=d.showMenu,h=d.setDropdownMenuDimensions,m=d.position,v=d.dropdownRef,x=d.handleClickMenu;t.useEffect((function(){if(u&&u.current){var e=u.current.getBoundingClientRect();e&&h({width:e.width,height:e.height})}}),[f]);var g=e.jsx("div",o({ref:u,className:"dropdown-menu ".concat(f?"":"hidden"," ").concat(r||""),style:m,onClick:x},s,{children:l}));if(v&&v.current){var b=document.getElementById("root");return i.default.createPortal(g,v.current||b||document.body)}return null},f=c.default.createContext({}),h=function(n){var r=n.children,c=n.className,i=n.onChangeToggleMenu,s=n.itemsDivider,u=n.forceRefresh,d=n.defaultShow,h=n.keepShown,p=void 0!==h&&h,m=n.placement,v=void 0===m?"bottom":m,x=a(n,["children","className","onChangeToggleMenu","itemsDivider","forceRefresh","defaultShow","keepShown","placement"]),g=l(t.useState(!1),2),b=g[0],j=g[1],y=l(t.useState(u||0),2),w=y[0],N=y[1],C=l(t.useState({width:0,height:0}),2),k=C[0],S=C[1],O=l(t.useState({width:0,height:0}),2),M=O[0],E=O[1],R=t.useRef(null);t.useEffect((function(){void 0!==d&&d!==b&&j(d)}),[d]),t.useEffect((function(){u&&w!==u&&N(u)}),[u,w]);var D=function(e){e&&e.target&&R&&R.current&&"true"===R.current.getAttribute("data-show")&&!R.current.contains(e.target)&&(j(!1),"function"==typeof i&&i(!1))};t.useEffect((function(){return document.addEventListener("click",D),document.addEventListener("scroll",(function(){return N((function(e){return e++}))})),function(){document.removeEventListener("click",D),document.removeEventListener("scroll",(function(){return N((function(e){return e++}))}))}}),[]);var _=function(e,t){return"calc(".concat(e,"px - ").concat(t,"px - var(--unit))")},I=function(e,t){return"calc(".concat(e,"px + ").concat(t,"px + var(--unit))")},P=function(e,t){return"calc(".concat(e,"px + ").concat(t,"px + var(--unit))")},T=function(e,t){return"calc(".concat(e,"px - ").concat(t,"px - var(--unit))")},V=function(e){return"".concat(e,"px")},B=function(e,t,n){return"calc(".concat(e,"px + ").concat(n,"px - ").concat(t,"px)")},q=function(e){return"".concat(e,"px")},A=function(e,t,n){return"calc(".concat(e,"px + ").concat(n,"px - ").concat(t,"px)")},L=t.useMemo((function(){var e,t="",n=0;if(R&&R.current){var r=R.current.getBoundingClientRect();n=k.width<M.width?M.width:k.width;var c=document.body,i=c.clientHeight,o=c.clientWidth;switch(v){case"top":t=r.top-k.height-8<0?I(r.top,M.height):_(r.top,k.height),e=r.left+n>o?B(r.left,n,M.width):V(r.left);break;case"right":e=r.left+n+8>o?T(r.left,n):P(r.left,M.width),t=r.top+k.height>i?A(r.top,k.height,M.height):q(r.top);break;case"bottom":t=r.top+k.height+8>i?_(r.top,k.height):I(r.top,M.height),e=r.left+n>o?B(r.left,n,M.width):V(r.left);break;case"left":e=r.left-n-8<0?P(r.left,M.width):T(r.left,n),t=r.top+k.height>i?A(r.top,k.height,M.height):q(r.top)}}return{left:e,top:t,width:"".concat(n,"px")}}),[k,M]);return e.jsx(f.Provider,o({value:{showMenu:b,setDropdownMenuDimensions:S,setDropdownButtonDimensions:E,handleClickMenu:function(){p||(j(!1),"function"==typeof i&&i(!1))},itemsDivider:s,dropdownRef:R,onChangeToggleMenu:i,onToggleMenu:function(){j((function(e){return"function"==typeof i&&i(!e),!e}))},position:L}},{children:e.jsx("div",o({ref:R,className:"dropdown ".concat(c||""),"data-show":b},x,{children:r}))}))},p=function(){return t.useContext(f)},m=c.default.createContext({}),v=function(){return t.useContext(m)};exports.Option=function(t){var n=t.id,r=t.value,c=t.label,i=a(t,["id","value","label"]),l=v(),s=l.selectedValue,u=l.filterValue,d=l.multiple,f=l.onSelectItem,h=l.onRemoveItem,p=function(){if(s)return d?"object"==typeof s&&void 0!==s.find((function(e){return e===r})):s===r};return!u||c.toUpperCase().includes(u.toUpperCase())?d?e.jsxs("li",o({className:"dropdown-item checkbox-container dropdown-item"},{children:[e.jsx("input",o({id:n||r,type:"checkbox",checked:p(),onChange:function(){p()?h(r):f(r)}},i)),e.jsx("label",o({htmlFor:n||r},{children:c}))]})):e.jsx("li",o({id:n,className:"dropdown-item ".concat(p()?"selected":""),onClick:function(){p()?h(r):f(r)}},i,{children:c})):null},exports.default=function(n){var r=n.large,i=n.required,f=n.filter,p=n.multiple,v=n.disabled,x=n.error,g=n.label,b=n.placeholder,j=n.helperText,y=n.helperIcon,w=n.name,N=n.className,C=n.value,k=n.onChange,S=n.filterValue,O=n.onChangeFilter,M=n.children,E=a(n,["large","required","filter","multiple","disabled","error","label","placeholder","helperText","helperIcon","name","className","value","onChange","filterValue","onChangeFilter","children"]),R=t.useRef(),D=function(){return Array.isArray(C)&&p?C:"string"==typeof C||"number"==typeof C?p?[C]:C:p?[]:""},_=l(c.default.useState(D()),2),I=_[0],P=_[1],T=l(t.useState(S||void 0),2),V=T[0],B=T[1],q=l(t.useState(!1),2),A=q[0],L=q[1];t.useEffect((function(){D()!==I&&P(D())}),[C]),t.useEffect((function(){f&&"function"==typeof O&&S!==V&&B(S)}),[S]);var F,U=function(){p?(P([]),k&&k([])):(P(""),k&&k([]))},H=function(e){"function"==typeof O?O(e.target.value):B(e.target.value)},W=function(){"function"==typeof O?O(""):(R&&R.current&&(R.current.value=""),B(""))},z=function(){var t;if(p&&"object"==typeof I&&I.length)return e.jsx("span",o({className:"placeholder"},{children:"".concat(I.length," Options selected")}));if(I&&M){var n=M.find((function(e){var t;return(null===(t=e.props)||void 0===t?void 0:t.value)===I}));if(n)return null===(t=n.props)||void 0===t?void 0:t.label}return e.jsx("span",o({className:"placeholder"},{children:b}))};return e.jsx(m.Provider,o({value:{multiple:p,selectedValue:I,filterValue:V,onSelectItem:function(e){if(p){var t=I;t.some((function(t){return t===e}))||(t=s(s([],l(t),!1),[e],!1)),P(t),k&&k(t)}else P(e),k&&k(e)},onRemoveItem:function(e){var t;if(p){var n=I;"object"==typeof n&&(t=n&&n.length&&n.filter((function(t){return t!==e})))}else t="",k&&k("");P(t),k&&k(t)}}},{children:e.jsxs("div",o({className:"input-wrapper".concat(v?"_disabled":""," ").concat(x?"error":"","  ").concat(N||"")},{children:[g&&e.jsxs("label",o({className:"caption"},{children:[i&&e.jsx("small",{children:"*"}),g]})),e.jsxs(h,o({onChangeToggleMenu:function(e){return L(e)},keepShown:p},{children:[e.jsx(u,o({"data-testid":E&&E["data-testid"]?E["data-testid"]:void 0,disabled:v},{children:f?e.jsxs("div",o({className:"input-container"},{children:[e.jsx("input",{"data-testid":E&&E["data-testid"]?"".concat(E["data-testid"],"-input"):void 0,className:"input ".concat(r?"large":""),placeholder:I&&I.length&&p?"".concat(I.length," Options selected"):b,ref:R,type:"text",defaultValue:V,onChange:H,disabled:v}),V?e.jsx("span",o({"data-testid":E&&E["data-testid"]?"".concat(E["data-testid"],"-remove-filter-btn"):void 0,className:"material-icons input-icon-box",onClick:W},{children:"close"})):e.jsx("span",o({className:"material-icons input-icon-box"},{children:"search"}))]})):e.jsxs("div",o({className:"input-container"},{children:[e.jsx("div",o({className:r?"input_large":"input"},{children:z()})),A?e.jsx("span",o({className:"material-icons input-icon-box"},{children:"expand_less"})):e.jsx("span",o({className:"material-icons input-icon-box"},{children:"expand_more"}))]}))})),e.jsx(d,{children:e.jsx("ul",{children:M})})]})),e.jsx("input",{type:"hidden",readOnly:!0,name:w,disabled:v,value:I}),(F=null,(f||p)&&I&&I.length?(f&&!p&&(F=e.jsxs("button",o({type:"button","data-testid":E&&E["data-testid"]?"".concat(E["data-testid"],"-remove-btn"):void 0,className:"chip_active".concat(v?"_disabled":""),onClick:U},{children:[z(),e.jsx("span",o({className:"material-icons right"},{children:"close"}))]}))),p&&(F=e.jsxs("button",o({type:"button","data-testid":E&&E["data-testid"]?"".concat(E["data-testid"],"-remove-btn"):void 0,className:"chip_active".concat(v?"_disabled":""),onClick:U},{children:["".concat(I.length," Options selected"),e.jsx("span",o({className:"material-icons right"},{children:"close"}))]}))),e.jsxs("div",o({className:"select-bottom-container"},{children:[F,j&&e.jsxs("p",o({className:"input-helper-text"},{children:[y&&e.jsx("span",o({className:"material-icons"},{children:y})),j]}))]}))):j&&e.jsxs("p",o({className:"input-helper-text"},{children:[y&&e.jsx("span",o({className:"material-icons"},{children:y})),j]})))]}))}))},exports.useSelect=v;
//# sourceMappingURL=index.js.map
