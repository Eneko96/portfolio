import{jsx as e,Fragment as r,jsxs as i}from"react/jsx-runtime";import a from"react";var c=function(){return c=Object.assign||function(e){for(var r,i=1,a=arguments.length;i<a;i++)for(var c in r=arguments[i])Object.prototype.hasOwnProperty.call(r,c)&&(e[c]=r[c]);return e},c.apply(this,arguments)};function l(e,r){var i={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&r.indexOf(a)<0&&(i[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var c=0;for(a=Object.getOwnPropertySymbols(e);c<a.length;c++)r.indexOf(a[c])<0&&Object.prototype.propertyIsEnumerable.call(e,a[c])&&(i[a[c]]=e[a[c]])}return i}var n=function(r){var i=r.children,a=r.className,n=l(r,["children","className"]);return e("div",c({className:"video-preview-image ".concat(a||"")},n,{children:i}))},t=function(r){var i=r.children,a=r.className,n=l(r,["children","className"]);return e("div",c({className:"video-preview-title ".concat(a||"")},n,{children:i}))},o=function(r){var i=r.children,a=r.className,n=l(r,["children","className"]);return e("div",c({className:"video-preview-subtitle ".concat(a||"")},n,{children:i}))},s=function(r){var i=r.children,a=r.className,n=l(r,["children","className"]);return e("div",c({className:"status-tag ".concat(a||"")},n,{children:i}))},d=function(r){var i=r.children,a=r.className,n=l(r,["children","className"]);return e("div",c({className:"video-preview-timer ".concat(a||"")},n,{children:i}))},v=function(v){var m,p,h,f,u,N=v.className,w=v.large,y=v.small,b=v.onClick,g=v.children,O=l(v,["className","large","small","onClick","children"]),k=function(r,a,l){return l||a||r||y?i("div",c({className:"video-preview-footer"},y?{children:[e("div",c({className:"video-preview-footer-left"},{children:l})),e("div",c({className:"video-preview-footer-right"},{children:i("div",c({className:"video-preview-play-button-container"},{children:[e("div",c({className:"video-preview-small-play-title"},{children:"play video"})),e("span",c({className:"material-icons video-preview-small-play-button",onClick:b},{children:"play_circle_filled"}))]}))}))]}:w?{children:[i("div",c({className:"video-preview-footer-left"},{children:[r,a]})),e("div",c({className:"video-preview-footer-right"},{children:l}))]}:{children:[e("div",c({className:"video-preview-footer-left"},{children:r})),e("div",c({className:"video-preview-footer-right"},{children:l}))]})):null};return e(r,{children:(a.Children.forEach(g,(function(e){switch(e.type){case t:p=e;break;case o:h=e;break;case s:f=e;break;case n:m=e;break;case d:u=e}})),i("div",c({className:"video-preview".concat(w?"_large":y?"_small":""," ").concat(N||"")},O,{children:[!y&&f,k(p,h,u),!y&&e("span",c({className:"material-icons video-preview-play-button ".concat(w?"":"video-preview-medium-play-button"),onClick:b},{children:"play_circle_filled"})),m]})))})};export{n as VideoPreviewImage,o as VideoPreviewSubtitle,s as VideoPreviewTag,d as VideoPreviewTimer,t as VideoPreviewTitle,v as default};
//# sourceMappingURL=index.esm.js.map
