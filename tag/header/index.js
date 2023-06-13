"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react/jsx-runtime"),t=require("react"),n=require("react-dom");function a(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var i=a(t),c=a(n),o=function(){return o=Object.assign||function(e){for(var t,n=1,a=arguments.length;n<a;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e},o.apply(this,arguments)};function r(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(a=Object.getOwnPropertySymbols(e);i<a.length;i++)t.indexOf(a[i])<0&&Object.prototype.propertyIsEnumerable.call(e,a[i])&&(n[a[i]]=e[a[i]])}return n}function d(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var a,i,c=n.call(e),o=[];try{for(;(void 0===t||t-- >0)&&!(a=c.next()).done;)o.push(a.value)}catch(e){i={error:e}}finally{try{a&&!a.done&&(n=c.return)&&n.call(c)}finally{if(i)throw i.error}}return o}var s=function(e){var t=e.className,n=e.children,a=r(e,["className","children"]),c=null;return n&&(c=i.default.cloneElement(n,o(o(o({},n.props),a),{className:"header-logo ".concat(n.props.className||""," ").concat(t||"")}))),c},l=function(n){var a=n.show,i=n.children,c=n.title,d=n.action,s=n.onClose,l=n.showCloseButton,u=n.onAction,h=n.className,f=n.parentRef,m=r(n,["show","children","title","action","onClose","showCloseButton","onAction","className","parentRef"]),p=t.useRef(null),v=function(e){e&&e.target&&(p&&p.current&&!p.current.contains(e.target)&&!f||p&&p.current&&!p.current.contains(e.target)&&f&&f.current&&!f.current.contains(e.target))&&a&&s()};return t.useEffect((function(){return l||m&&m["data-handlecloseclick"]?document.addEventListener("click",v):document.addEventListener("mousemove",v),function(){document.removeEventListener("mousemove",v),document.removeEventListener("click",v)}})),a?e.jsxs("div",o({ref:p,className:"overflow-menu ".concat(h||""),"data-testid":m["data-testid"]?m["data-testid"]:void 0},m,{children:[e.jsxs("div",o({className:"overflow-menu-header"},{children:[c&&e.jsx("div",o({className:"small-title mr3"},{children:c})),d&&e.jsx("div",o({className:"overflow-menu-action link_small",onClick:u,"data-testid":m["data-testid"]?m["data-testid"]+"-action-button":void 0},{children:d})),l&&e.jsx("button",o({type:"button",className:"overflow-menu-close",onClick:s,"data-testid":m["data-testid"]?m["data-testid"]+"-close-button":void 0},{children:e.jsx("span",o({className:"material-icons"},{children:"close"}))}))]})),e.jsx("div",o({className:"overflow-menu-body"},{children:i}))]})):null},u=function(n){var a=n.children,c=n.name,s=n.onClick,l=n.disabled,u=n.className,h=n.arrow,f=void 0===h?"left":h,m=n.icon,p=r(n,["children","name","onClick","disabled","className","arrow","icon"]),v=d(t.useState(!1),2),g=v[0],x=v[1];return e.jsxs(e.Fragment,{children:[e.jsx("button",o({type:"button",disabled:l,className:"list-icon tree-element ".concat(u||""),onClick:function(e){x(!g),"function"==typeof s&&s(e)}},p,{children:e.jsxs("li",o({className:"item-condensed tree-li"},{children:[a||m?e.jsx("span",o({className:"material-icons icon-order"},{children:m||(m||"left"!==f?"":"arrow_right")})):e.jsx("span",{className:"icon-order"}),c,"right"===f&&a&&(g?e.jsx("span",o({className:"material-icons tree-element-icon-right"},{children:"keyboard_arrow_up"})):e.jsx("span",o({className:"material-icons tree-element-icon-right"},{children:"keyboard_arrow_down"})))]}))})),a&&g&&i.default.Children.toArray(a).map((function(t,n){return e.jsx("div",o({className:"tree-element-item"},{children:t}),n)}))]})},h=function(t){var n=t.children,a=t.className,c=r(t,["children","className"]);return i.default.Children.toArray(n).every((function(e){return e.type===u}))?e.jsx("div",o({className:"tree-container ".concat(a||"")},c,{children:n})):null},f=function(n){var a=n.className,i=n.children,c=n.id,s=n.selected,f=n.onClick,m=n.options,p=n.disabled,v=n.optionsDivider,g=r(n,["className","children","id","selected","onClick","options","disabled","optionsDivider"]),x=d(t.useState(!1),2),w=x[0],b=x[1],j=t.useRef(null),N=function(e){m&&(g&&g["data-mobile"]&&(null==e||e.stopPropagation()),b(!w)),"function"==typeof f&&f()};return g&&g["data-mobile"]?e.jsx(h,{children:e.jsx(u,o({name:i,arrow:"right",onClick:N},g,{children:m&&m.map((function(t,n){return t.href?e.jsx("a",o({"data-testid":g&&g["data-testid"]?"".concat(g["data-testid"],"-option-").concat(n):void 0,href:t.href},{children:t.label}),t.id||"header-item-option-".concat(n)):e.jsx("div",o({"data-testid":g&&g["data-testid"]?"".concat(g["data-testid"],"-option-").concat(n):void 0,onClick:function(){"function"==typeof t.onClick&&t.onClick()}},{children:t.label}),t.id||"header-item-option-".concat(n))}))}))}):e.jsxs("button",o({type:"button",ref:j,id:c,"data-testid":g&&g["data-testid"]?g["data-testid"]:void 0,disabled:p,onClick:N,className:"tab-list-item ".concat(s?"active":""," ").concat(a||"")},{children:[i,m&&e.jsx(l,o({className:"header-item-overflow-menu".concat(v?"_divider":""),title:i,show:w,onClose:function(){return b(!1)},parentRef:j,"data-handlecloseclick":!0,"data-testid":g&&g["data-testid"]?"".concat(g["data-testid"],"-overflow-menu"):void 0},{children:m.map((function(t,n){return t.href?e.jsx("a",o({"data-testid":g&&g["data-testid"]?"".concat(g["data-testid"],"-overflow-menu-item-").concat(n):void 0,className:"dropdown-item",href:t.href},{children:t.label}),t.id||"header-item-option-".concat(n)):e.jsx("div",o({className:"dropdown-item",onClick:function(){"function"==typeof t.onClick&&t.onClick()},"data-testid":g&&g["data-testid"]?"".concat(g["data-testid"],"-overflow-menu-item-").concat(n):void 0},{children:t.label}),t.id||"header-item-option-".concat(n))}))}))]}),"button-"+c)},m=i.default.memo((function(n){var a=n.children,c=n.className,d=n.disabled,s=r(n,["children","className","disabled"]),l=x(),u=l.onToggleMenu,h=l.setDropdownButtonDimensions,f=l.showMenu,m=i.default.useRef(null);return t.useEffect((function(){if(m&&m.current){var e=m.current.getBoundingClientRect();e&&h({width:e.width,height:e.height})}}),[f]),e.jsx("div",o({className:"dropdown-button".concat(d?"_disabled":""," ").concat(c||""),onClick:u,ref:m},s,{children:a}))})),p=function(n){var a=n.className,d=n.children,s=r(n,["className","children"]),l=i.default.useRef(null),u=x(),h=u.showMenu,f=u.setDropdownMenuDimensions,m=u.position,p=u.dropdownRef,v=u.handleClickMenu;t.useEffect((function(){if(l&&l.current){var e=l.current.getBoundingClientRect();e&&f({width:e.width,height:e.height})}}),[h]);var g=e.jsx("div",o({ref:l,className:"dropdown-menu ".concat(h?"":"hidden"," ").concat(a||""),style:m,onClick:v},s,{children:d}));if(p&&p.current){var w=document.getElementById("root");return c.default.createPortal(g,p.current||w||document.body)}return null},v=i.default.createContext({}),g=function(n){var a=n.children,i=n.className,c=n.onChangeToggleMenu,s=n.itemsDivider,l=n.forceRefresh,u=n.defaultShow,h=n.keepShown,f=void 0!==h&&h,m=n.placement,p=void 0===m?"bottom":m,g=r(n,["children","className","onChangeToggleMenu","itemsDivider","forceRefresh","defaultShow","keepShown","placement"]),x=d(t.useState(!1),2),w=x[0],b=x[1],j=d(t.useState(l||0),2),N=j[0],y=j[1],k=d(t.useState({width:0,height:0}),2),C=k[0],S=k[1],E=d(t.useState({width:0,height:0}),2),M=E[0],R=E[1],D=t.useRef(null);t.useEffect((function(){void 0!==u&&u!==w&&b(u)}),[u]),t.useEffect((function(){l&&N!==l&&y(l)}),[l,N]);var O=function(e){e&&e.target&&D&&D.current&&"true"===D.current.getAttribute("data-show")&&!D.current.contains(e.target)&&(b(!1),"function"==typeof c&&c(!1))};t.useEffect((function(){return document.addEventListener("click",O),document.addEventListener("scroll",(function(){return y((function(e){return e++}))})),function(){document.removeEventListener("click",O),document.removeEventListener("scroll",(function(){return y((function(e){return e++}))}))}}),[]);var _=function(e,t){return"calc(".concat(e,"px - ").concat(t,"px - var(--unit))")},L=function(e,t){return"calc(".concat(e,"px + ").concat(t,"px + var(--unit))")},B=function(e,t){return"calc(".concat(e,"px + ").concat(t,"px + var(--unit))")},P=function(e,t){return"calc(".concat(e,"px - ").concat(t,"px - var(--unit))")},T=function(e){return"".concat(e,"px")},A=function(e,t,n){return"calc(".concat(e,"px + ").concat(n,"px - ").concat(t,"px)")},F=function(e){return"".concat(e,"px")},q=function(e,t,n){return"calc(".concat(e,"px + ").concat(n,"px - ").concat(t,"px)")},H=t.useMemo((function(){var e,t="",n=0;if(D&&D.current){var a=D.current.getBoundingClientRect();n=C.width<M.width?M.width:C.width;var i=document.body,c=i.clientHeight,o=i.clientWidth;switch(p){case"top":t=a.top-C.height-8<0?L(a.top,M.height):_(a.top,C.height),e=a.left+n>o?A(a.left,n,M.width):T(a.left);break;case"right":e=a.left+n+8>o?P(a.left,n):B(a.left,M.width),t=a.top+C.height>c?q(a.top,C.height,M.height):F(a.top);break;case"bottom":t=a.top+C.height+8>c?_(a.top,C.height):L(a.top,M.height),e=a.left+n>o?A(a.left,n,M.width):T(a.left);break;case"left":e=a.left-n-8<0?B(a.left,M.width):P(a.left,n),t=a.top+C.height>c?q(a.top,C.height,M.height):F(a.top)}}return{left:e,top:t,width:"".concat(n,"px")}}),[C,M]);return e.jsx(v.Provider,o({value:{showMenu:w,setDropdownMenuDimensions:S,setDropdownButtonDimensions:R,handleClickMenu:function(){f||(b(!1),"function"==typeof c&&c(!1))},itemsDivider:s,dropdownRef:D,onChangeToggleMenu:c,onToggleMenu:function(){b((function(e){return"function"==typeof c&&c(!e),!e}))},position:H}},{children:e.jsx("div",o({ref:D,className:"dropdown ".concat(i||""),"data-show":w},g,{children:a}))}))},x=function(){return t.useContext(v)};exports.HeaderItem=f,exports.HeaderLogo=s,exports.default=function(n){var a,c,l,u,h,v,x=n.className,w=n.children,b=n.languages,j=n.contact,N=n.onSearch,y=n.onClickLanguage,k=r(n,["className","children","languages","contact","onSearch","onClickLanguage"]),C=function(){var e=d(t.useState(!1),2),n=e[0],a=e[1],i=d(t.useState(!1),2),c=i[0],o=i[1],r=d(t.useState(!1),2),s=r[0],l=r[1];return t.useEffect((function(){var e=function(){window.innerWidth<=672?(a(!0),o(!1),l(!1)):window.innerWidth<=1024?(a(!1),o(!0),l(!1)):(a(!1),o(!1),l(!0))};return e(),function(){return e()}}),[]),{isMobile:n,isTablet:c,isDesktop:s}}().isMobile;return e.jsx("div",o({className:"header ".concat(x||""),style:j&&!C?{display:"block"}:void 0},k,{children:(c=null,l=[],u=null,h=null,v=null,i.default.Children.forEach(w,(function(e){if(e.type===s)c=e;else if(e.type===f)if(C){var t=i.default.cloneElement(e,o(o({},e.props),{"data-mobile":!0,key:e.props.id||"header-item-".concat(l.length),onClick:function(){var t;"function"==typeof(null===(t=e.props)||void 0===t?void 0:t.onClick)&&e.props.onClick()}}));l.push(t)}else l.push(e)})),b&&(a=b.find((function(e){return e.selected})),u=e.jsxs(g,o({className:"header-languages","data-testid":k&&k["data-testid"]?"".concat(k["data-testid"],"-languages-dropdown"):void 0},{children:[e.jsx(m,o({"data-testid":k&&k["data-testid"]?"".concat(k["data-testid"],"-languages-dropdown-btn"):void 0},{children:e.jsxs(e.Fragment,{children:[null==a?void 0:a.label,e.jsx("span",o({className:"material-icons"},{children:"expand_more"}))]})})),e.jsx(p,{children:e.jsx("ul",{children:b.map((function(t,n){return e.jsx("li",o({className:"dropdown-item ".concat(t.selected?"selected":""),id:t.id||"language-".concat(n),onClick:function(){"function"==typeof y&&y(t.id)},"data-testid":k&&k["data-testid"]?"".concat(k["data-testid"],"-language-").concat(n):void 0},{children:t.label}),t.id||"language-".concat(n))}))})})]}),"header-languages-dropdown")),"function"==typeof N&&(h=e.jsx("button",o({type:"button",className:"header-search",onClick:N,"data-testid":k&&k["data-testid"]?"".concat(k["data-testid"],"-search-btn"):void 0},{children:e.jsx("span",o({className:"material-icons"},{children:"search"}))}))),j&&(v=C?e.jsxs(g,o({className:"header-contact-dropdown",keepShown:!0,"data-testid":k&&k["data-testid"]?"".concat(k["data-testid"],"-contact-dropdown"):void 0},{children:[e.jsx(m,o({"data-testid":k&&k["data-testid"]?"".concat(k["data-testid"],"-contact-dropdown-btn"):void 0},{children:e.jsx("span",o({className:"material-icons"},{children:"person"}))})),e.jsx(p,{children:e.jsx("a",o({"data-testid":k&&k["data-testid"]?"".concat(k["data-testid"],"-contact-link"):void 0,className:"header-contact link_small",href:j.href},{children:j.label}),"header-contact")})]})):e.jsx("a",o({"data-testid":k&&k["data-testid"]?"".concat(k["data-testid"],"-contact-link"):void 0,className:"header-contact link_small",href:j.href},{children:j.label}),"header-contact")),C?e.jsxs(e.Fragment,{children:[c,e.jsxs("div",o({className:"header-content"},{children:[v,h,e.jsxs(g,o({keepShown:!0,className:"header-items-dropdown","data-testid":k&&k["data-testid"]?"".concat(k["data-testid"],"-items-dropdown"):void 0},{children:[e.jsx(m,o({"data-testid":k&&k["data-testid"]?"".concat(k["data-testid"],"-items-dropdown-btn"):void 0},{children:e.jsx("span",o({className:"material-icons"},{children:"menu"}))})),e.jsxs(p,{children:[e.jsx("div",o({className:"header-items"},{children:l})),u]})]}))]}))]}):v?e.jsxs(e.Fragment,{children:[e.jsxs("div",o({className:"header-top"},{children:[v,u]})),e.jsxs("div",o({className:"header-bottom"},{children:[c,e.jsx("div",o({className:"tab-list"},{children:l})),h]}))]}):e.jsxs(e.Fragment,{children:[c,e.jsx("div",o({className:"tab-list"},{children:l})),u,h]}))}))};
//# sourceMappingURL=index.js.map
