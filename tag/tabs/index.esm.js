import{jsx as t,Fragment as e,jsxs as n}from"react/jsx-runtime";import i,{createElement as o,useEffect as r,useContext as c,useState as a,useRef as l,useMemo as d}from"react";import u from"react-dom";var s=function(){return s=Object.assign||function(t){for(var e,n=1,i=arguments.length;n<i;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},s.apply(this,arguments)};function h(t,e){var n={};for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.indexOf(i)<0&&(n[i]=t[i]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(i=Object.getOwnPropertySymbols(t);o<i.length;o++)e.indexOf(i[o])<0&&Object.prototype.propertyIsEnumerable.call(t,i[o])&&(n[i[o]]=t[i[o]])}return n}function f(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var i,o,r=n.call(t),c=[];try{for(;(void 0===e||e-- >0)&&!(i=r.next()).done;)c.push(i.value)}catch(t){o={error:t}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(o)throw o.error}}return c}var p=function(n){var i=n.id,r=n.activeTab,c=n.children,a=n.title,l=h(n,["id","activeTab","children","title"]);return r?o("div",s({},l,{"data-testid":l&&l["data-testid"]?"".concat(l["data-testid"],"-content"):void 0,id:"".concat(i||a,"-content"),key:"".concat(i||a,"-content"),className:"tab-content"}),c):t(e,{})},v=i.memo((function(e){var n=e.children,o=e.className,c=e.disabled,a=h(e,["children","className","disabled"]),l=w(),d=l.onToggleMenu,u=l.setDropdownButtonDimensions,f=l.showMenu,p=i.useRef(null);return r((function(){if(p&&p.current){var t=p.current.getBoundingClientRect();t&&u({width:t.width,height:t.height})}}),[f]),t("div",s({className:"dropdown-button".concat(c?"_disabled":""," ").concat(o||""),onClick:d,ref:p},a,{children:n}))})),m=function(e){var n=e.className,o=e.children,c=h(e,["className","children"]),a=i.useRef(null),l=w(),d=l.showMenu,f=l.setDropdownMenuDimensions,p=l.position,v=l.dropdownRef,m=l.handleClickMenu;r((function(){if(a&&a.current){var t=a.current.getBoundingClientRect();t&&f({width:t.width,height:t.height})}}),[d]);var b=t("div",s({ref:a,className:"dropdown-menu ".concat(d?"":"hidden"," ").concat(n||""),style:p,onClick:m},c,{children:o}));if(v&&v.current){var g=document.getElementById("root");return u.createPortal(b,v.current||g||document.body)}return null},b=i.createContext({}),g=function(e){var n=e.children,i=e.className,o=e.onChangeToggleMenu,c=e.itemsDivider,u=e.forceRefresh,p=e.defaultShow,v=e.keepShown,m=void 0!==v&&v,g=e.placement,w=void 0===g?"bottom":g,y=h(e,["children","className","onChangeToggleMenu","itemsDivider","forceRefresh","defaultShow","keepShown","placement"]),k=f(a(!1),2),x=k[0],C=k[1],N=f(a(u||0),2),T=N[0],M=N[1],D=f(a({width:0,height:0}),2),O=D[0],E=D[1],R=f(a({width:0,height:0}),2),S=R[0],j=R[1],B=l(null);r((function(){void 0!==p&&p!==x&&C(p)}),[p]),r((function(){u&&T!==u&&M(u)}),[u,T]);var P=function(t){t&&t.target&&B&&B.current&&"true"===B.current.getAttribute("data-show")&&!B.current.contains(t.target)&&(C(!1),"function"==typeof o&&o(!1))};r((function(){return document.addEventListener("click",P),document.addEventListener("scroll",(function(){return M((function(t){return t++}))})),function(){document.removeEventListener("click",P),document.removeEventListener("scroll",(function(){return M((function(t){return t++}))}))}}),[]);var A=function(t,e){return"calc(".concat(t,"px - ").concat(e,"px - var(--unit))")},L=function(t,e){return"calc(".concat(t,"px + ").concat(e,"px + var(--unit))")},W=function(t,e){return"calc(".concat(t,"px + ").concat(e,"px + var(--unit))")},I=function(t,e){return"calc(".concat(t,"px - ").concat(e,"px - var(--unit))")},_=function(t){return"".concat(t,"px")},H=function(t,e,n){return"calc(".concat(t,"px + ").concat(n,"px - ").concat(e,"px)")},q=function(t){return"".concat(t,"px")},z=function(t,e,n){return"calc(".concat(t,"px + ").concat(n,"px - ").concat(e,"px)")},F=d((function(){var t,e="",n=0;if(B&&B.current){var i=B.current.getBoundingClientRect();n=O.width<S.width?S.width:O.width;var o=document.body,r=o.clientHeight,c=o.clientWidth;switch(w){case"top":e=i.top-O.height-8<0?L(i.top,S.height):A(i.top,O.height),t=i.left+n>c?H(i.left,n,S.width):_(i.left);break;case"right":t=i.left+n+8>c?I(i.left,n):W(i.left,S.width),e=i.top+O.height>r?z(i.top,O.height,S.height):q(i.top);break;case"bottom":e=i.top+O.height+8>r?A(i.top,O.height):L(i.top,S.height),t=i.left+n>c?H(i.left,n,S.width):_(i.left);break;case"left":t=i.left-n-8<0?W(i.left,S.width):I(i.left,n),e=i.top+O.height>r?z(i.top,O.height,S.height):q(i.top)}}return{left:t,top:e,width:"".concat(n,"px")}}),[O,S]);return t(b.Provider,s({value:{showMenu:x,setDropdownMenuDimensions:E,setDropdownButtonDimensions:j,handleClickMenu:function(){m||(C(!1),"function"==typeof o&&o(!1))},itemsDivider:c,dropdownRef:B,onChangeToggleMenu:o,onToggleMenu:function(){C((function(t){return"function"==typeof o&&o(!t),!t}))},position:F}},{children:t("div",s({ref:B,className:"dropdown ".concat(i||""),"data-show":x},y,{children:n}))}))},w=function(){return c(b)},y=function(e){var c=e.defaultActiveTab,l=e.vertical,d=e.children,u=e.className,b=e.onChangeTab,w=h(e,["defaultActiveTab","vertical","children","className","onChangeTab"]),y=function(){var t=f(a(!1),2),e=t[0],n=t[1],i=f(a(!1),2),o=i[0],c=i[1],l=f(a(!1),2),d=l[0],u=l[1];return r((function(){var t=function(){window.innerWidth<=672?(n(!0),c(!1),u(!1)):window.innerWidth<=1024?(n(!1),c(!0),u(!1)):(n(!1),c(!1),u(!0))};return t(),function(){return t()}}),[]),{isMobile:e,isTablet:o,isDesktop:d}}().isMobile,k=f(a(c||""),2),x=k[0],C=k[1];r((function(){c&&c!==x&&C(c)}),[c]);var N=function(t){var e=t.currentTarget.id;C(e),"function"==typeof b&&b(e)},T=function(e,i){var o=e.filter((function(t){var e;return null===(e=t.props)||void 0===e?void 0:e.disabled})),r=e.filter((function(t){var e,n=null===(e=t.props)||void 0===e?void 0:e.className.split(" ");return"active"===n[n.length-1]}));return n(g,s({itemsDivider:!l},{children:[t(v,s({disabled:o.length===e.length},{children:t("button",s({type:"button",className:r.length?"active":""},{children:t("span",s({className:"material-icons"},{children:"more_vert"}))}))})),t(m,{children:e})]}),"dropdown-"+i)};return n("div",s({className:"".concat(l?"tabs-vertical":"tabs"," ").concat(u||"")},w,{children:[function(){var e,n=[],r=[],c=0;if(d)if(i.Children.toArray(d).length>1)i.Children.forEach(d,(function(t,e){if(t&&t.type===p){var i=t.props,a=i.id,l=i.disabled,d=i.title,u=i.collapsed,f=h(i,["id","disabled","title","collapsed"]);(!y&&e-c<=5||y&&e-c<3)&&!u?n.push(o("button",s({type:"button"},f,{id:a,key:"".concat(a,"-key"),disabled:l,onClick:N,className:"tab-list-item ".concat(x===a||!x&&0===e?"active":"")}),d)):(c++,r.push(o("button",s({type:"button"},f,{id:a,key:"".concat(a,"-key"),disabled:l,onClick:N,className:"dropdown-item tab-list-item ".concat(x===a||!x&&1===e?"active":"")}),d)))}}));else{var a=d;if(a&&a.type===p){var l=a.props,u=l.title,f=l.id,v=l.disabled,m=h(l,["title","id","disabled"]);(null===(e=a.props)||void 0===e?void 0:e.collapsed)?r=o("button",s({},m,{type:"button",id:f,key:"".concat(f,"-key"),disabled:v,onClick:N,className:"dropdown-item tab-list-item active"}),u):n=o("button",s({},m,{type:"button",id:f,key:"".concat(f,"-key"),disabled:v,onClick:N,className:"tab-list-item active"}),u)}}return r&&r.length&&n.push(T(r,n.length-1)),t("div",s({className:"tab-list"},{children:n}))}(),function(){var t;if(d)if(i.Children.toArray(d).length>1)t=i.Children.map(d,(function(t,e){var n;return i.cloneElement(t,{activeTab:x===(null===(n=t.props)||void 0===n?void 0:n.id)||!x&&0===e})}));else{var e=d;if(e.type===p)t=i.cloneElement(e,{activeTab:!0})}return t}()]}))};export{p as TabItem,y as default};
//# sourceMappingURL=index.esm.js.map
