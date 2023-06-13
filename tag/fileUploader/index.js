"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("react/jsx-runtime"),t=require("react"),a=function(){return a=Object.assign||function(e){for(var t,a=1,r=arguments.length;a<r;a++)for(var n in t=arguments[a])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},a.apply(this,arguments)};function r(e,t){var a={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(a[r[n]]=e[r[n]])}return a}function n(e,t,a,r){return new(a||(a=Promise))((function(n,s){function i(e){try{c(r.next(e))}catch(e){s(e)}}function l(e){try{c(r.throw(e))}catch(e){s(e)}}function c(e){var t;e.done?n(e.value):(t=e.value,t instanceof a?t:new a((function(e){e(t)}))).then(i,l)}c((r=r.apply(e,t||[])).next())}))}function s(e,t){var a,r,n,s,i={label:0,sent:function(){if(1&n[0])throw n[1];return n[1]},trys:[],ops:[]};return s={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function l(s){return function(l){return function(s){if(a)throw new TypeError("Generator is already executing.");for(;i;)try{if(a=1,r&&(n=2&s[0]?r.return:s[0]?r.throw||((n=r.return)&&n.call(r),0):r.next)&&!(n=n.call(r,s[1])).done)return n;switch(r=0,n&&(s=[2&s[0],n.value]),s[0]){case 0:case 1:n=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,r=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(n=i.trys,(n=n.length>0&&n[n.length-1])||6!==s[0]&&2!==s[0])){i=0;continue}if(3===s[0]&&(!n||s[1]>n[0]&&s[1]<n[3])){i.label=s[1];break}if(6===s[0]&&i.label<n[1]){i.label=n[1],n=s;break}if(n&&i.label<n[2]){i.label=n[2],i.ops.push(s);break}n[2]&&i.ops.pop(),i.trys.pop();continue}s=t.call(e,i)}catch(e){s=[6,e],r=0}finally{a=n=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,l])}}}function i(e,t){var a="function"==typeof Symbol&&e[Symbol.iterator];if(!a)return e;var r,n,s=a.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(r=s.next()).done;)i.push(r.value)}catch(e){n={error:e}}finally{try{r&&!r.done&&(a=s.return)&&a.call(s)}finally{if(n)throw n.error}}return i}var l=function(n){var s=n.disabled,i=n.children,l=n.className,c=n.onClick,o=r(n,["disabled","children","className","onClick"]),d=t.useRef(null),u=function(e){e.preventDefault(),e.stopPropagation()},f=function(e){e.preventDefault(),e.stopPropagation()},p=function(e){e.preventDefault(),e.stopPropagation()},v=function(e){var t,a,r;e.preventDefault(),e.stopPropagation(),!s&&(null===(t=null==e?void 0:e.dataTransfer)||void 0===t?void 0:t.files)&&e.dataTransfer.files.length>0&&("function"==typeof n.handleDrop&&n.handleDrop(e.dataTransfer.files),(null===(a=null==e?void 0:e.dataTransfer)||void 0===a?void 0:a.items)?e.dataTransfer.items.clear():"function"==typeof(null===(r=null==e?void 0:e.dataTransfer)||void 0===r?void 0:r.clearData)&&e.dataTransfer.clearData())};return t.useEffect((function(){var e=d.current;if(e)return e.addEventListener("dragenter",f),e.addEventListener("dragleave",p),e.addEventListener("dragover",u),e.addEventListener("drop",v),function(){e&&(e.removeEventListener("dragenter",f),e.removeEventListener("dragleave",p),e.removeEventListener("dragover",u),e.removeEventListener("drop",v))}})),e.jsx("div",a({"data-testid":o["data-testid"]?o["data-testid"]:void 0,className:"drag-drop ".concat(l),style:{display:"inline-block",position:"relative",width:"100%"},ref:d,onClick:function(){s||"function"!=typeof c||c()}},{children:i}))},c=function(n){var s=n.percentage,i=n.HasText,l=n.error,c=n.success,o=n.className,d=r(n,["percentage","HasText","error","success","className"]),u=t.useRef(null),f=t.useRef(null);t.useEffect((function(){u.current&&(u.current.style.animationDelay="0",u.current.style.transition="stroke-dashoffset 0.2s linear",u.current.style.strokeDashoffset="".concat((100-s)/100*87+213),100===s&&f.current&&u.current&&(l?f.current.classList.add("error"):c&&f.current.classList.add("success")))}),[s,l,c]);return e.jsxs("div",a({className:"loader-wrapper ".concat(o||""),"data-testid":d&&d["data-testid"]?d["data-testid"]:void 0},{children:[e.jsx("div",a({ref:f,className:"svg-container_circular ".concat(l?"error":c?"success":""),"data-testid":d&&d["data-testid"]?"".concat(d["data-testid"],"-svg-container"):void 0},{children:e.jsx("svg",a({className:"svg-content",width:"32",height:"32",viewBox:"0 0 32 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:e.jsx("path",{className:"circle-svg",ref:u,d:"M16 30C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2C23.732 2 30 8.26801 30 16C30 23.732 23.732 30 16 30Z",stroke:"rgb(0, 154, 204)",strokeWidth:"4"})}))})),i]}))},o=function(n){var s=n.percentage,i=n.HasText,l=n.error,c=n.success,o=n.className,d=r(n,["percentage","HasText","error","success","className"]),u=t.useRef(null),f=t.useRef(null);t.useEffect((function(){u.current&&(u.current.style.animationDelay="0",u.current.style.transition="stroke-dashoffset 0.2s linear",u.current.style.strokeDashoffset="".concat((100-s)/100*135+165),100===s&&f.current&&u.current&&(l?f.current.classList.add("error"):c&&f.current.classList.add("success")))}),[s,l,c]);return e.jsxs("div",a({className:"loader-wrapper ".concat(o||""),"data-testid":d&&d["data-testid"]?d["data-testid"]:void 0},{children:[e.jsx("div",a({className:"svg-container ".concat(function(){if(100!==s){if(l)return"error";if(c)return"success"}return""}()),"data-percentage":"".concat(s,"%"),ref:f,"data-testid":d&&d["data-testid"]?"".concat(d["data-testid"],"-svg-container"):void 0},{children:e.jsx("svg",a({className:"svg-content",width:f&&f.current&&"24px"===f.current.style.width?"32":"56",height:"32",viewBox:f&&f.current&&"24px"===f.current.style.width?"0 0 32 32":"0 0 56 32",fill:"none",xmlns:"http://www.w3.org/2000/svg"},{children:e.jsx("path",{className:"oval-svg",ref:u,d:"M28 2H40C47.732 2 54 8.26801 54 16C54 23.732 47.732 30 40\n            30H28H16C8.26801 30 2 23.732 2 16C2 8.26801 8.26801 2 16 2H28Z",stroke:"rgb(0, 154, 204)",strokeWidth:"4",strokeLinecap:"round"})}))})),i]}))},d=function(n){var s=n.title,l=n.subtitle,d=n.spinner,u=n.percentage,f=void 0===u?{value:0,show:!1}:u,p=n.error,v=n.success,h=n.automatic,m=n.className,x=r(n,["title","subtitle","spinner","percentage","error","success","automatic","className"]),g=i(t.useState(h?0:null),2),y=g[0],b=g[1];t.useEffect((function(){var e;return h&&(e=setInterval((function(){b((function(e){return e<100?e+5:e}))}),250)),function(){clearInterval(e)}}));var j=function(){return s?e.jsxs("div",a({className:"loader-text-wrapper"},{children:[e.jsx("span",a({className:"loader-title","data-testid":x&&x["data-testid"]?"".concat(x["data-testid"],"-title"):void 0},{children:s})),l&&e.jsx("span",a({className:"loader-subtitle","data-testid":x&&x["data-testid"]?"".concat(x["data-testid"],"-subtitle"):void 0},{children:l}))]})):null};return d?s?e.jsxs("div",a({className:"loader-wrapper ".concat(m||""),"data-testid":x&&x["data-testid"]?x["data-testid"]:void 0},{children:[e.jsx("div",{className:"spinner","data-testid":x&&x["data-testid"]?"".concat(x["data-testid"],"-spinner"):void 0}),e.jsx(j,{})]})):e.jsx("div",{className:"spinner ".concat(m||""),"data-testid":x&&x["data-testid"]?"".concat(x["data-testid"],"-spinner"):void 0}):f.show?e.jsx(o,{className:m,percentage:h?y:f.value,HasText:e.jsx(j,{}),error:h?y>=95&&p:p,success:h?y>=95&&v:v,"data-testid":x&&x["data-testid"]?x["data-testid"]:null}):e.jsx(c,{className:m,percentage:h?y:f.value,HasText:e.jsx(j,{}),error:h?y>=95&&p:p,success:h?y>=95&&v:v,"data-testid":x&&x["data-testid"]?x["data-testid"]:null})};exports.default=function(c){var o=c.small,u=c.secondary,f=c.multiple,p=c.dragAndDrop,v=c.fullWidth,h=c.id,m=c.label,x=c.className,g=c.formats,y=c.max,b=c.disabled,j=c.value,N=c.onChange,w=r(c,["small","secondary","multiple","dragAndDrop","fullWidth","id","label","className","formats","max","disabled","value","onChange"]),k=i(t.useState(j||void 0),2),C=k[0],D=k[1],E=t.useRef(null);t.useEffect((function(){(f&&(null==j?void 0:j.length)>0||j)&&D(j)}),[j,f]);var O=function(e){if(e&&e.length>0){var t=Array.from(e);if(f&&(null==C?void 0:C.length)>0){var a=C.map((function(e){return e.file}));a=a.concat(t),N(a)}else N(t)}},T=function(){E&&E.current&&E.current.click()},L=p?"_drag-drop":"",_=o?"_small":"",H=v?"_full":"",P=b?"_disabled":"";return e.jsxs("div",a({className:"file-uploader-wrapper".concat(L||_).concat(H).concat(P," ").concat(x||"")},{children:[m&&e.jsx("label",a({className:"caption mb1 ".concat(b?"disabled":""),htmlFor:h},{children:m})),p?e.jsx(l,a({"data-testid":w&&w["data-testid"]?"".concat(w["data-testid"],"-drag-and-drop"):"",className:"file-uploader-drag-and-drop",disabled:b,handleDrop:O,onClick:T},{children:e.jsx("span",{children:"Click or drag-and-drop files here to upload"})})):e.jsxs("button",a({type:"button","data-testid":w&&w["data-testid"]?"".concat(w["data-testid"],"-upload-btn"):void 0,className:"".concat(u?"button-secondary":"button-primary").concat(o?"_small":"_large"),onClick:T,disabled:b},{children:["Add files",e.jsx("span",a({className:"material-icons right"},{children:"file_upload"}))]})),e.jsxs("small",a({className:"file-uploader-helper-text ".concat(b?"disabled":"")},{children:["Max file size is ",y,"MB. Only ",g]})),e.jsx("input",{id:h,"data-testid":w&&w["data-testid"]?"".concat(w["data-testid"],"-input"):void 0,ref:E,type:"file",onChange:function(e){return n(void 0,void 0,void 0,(function(){var t,a;return s(this,(function(r){return e.target.files&&e.target.files.length>0&&(t=Array.from(e.target.files),f&&(null==C?void 0:C.length)>0?(a=(a=C.map((function(e){return e.file}))).concat(t),N(a)):N(t)),[2]}))}))},accept:g,disabled:b,multiple:f}),(!f&&j||f&&j&&j.length>0)&&e.jsx("div",a({className:"file-uploader-files-container mt2"},{children:f&&C&&C.length>0?C.map((function(t,r){return t&&e.jsxs("div",a({className:"file-uploader-file-container"},{children:[e.jsxs("div",a({className:"file-uploader-file".concat(t.error?"_error":"")},{children:[e.jsx("span",a({className:"file-uploader-file-name"},{children:t.file.name})),t.loading?e.jsx(d,{spinner:!0}):e.jsxs(e.Fragment,{children:[t.error&&e.jsx("span",a({className:"material-icons error"},{children:"error"})),e.jsx("button",a({type:"button","data-testid":w&&w["data-testid"]?"".concat(w["data-testid"],"-file-").concat(r,"-delete-btn"):"",onClick:function(){return function(e){if(f&&C.length>0){var t=C.map((function(e){return e.file}));t.splice(e,1),N(t)}}(r)},disabled:b},{children:e.jsx("span",a({className:"material-icons cancel"},{children:"cancel"}))}))]})]})),t.error&&e.jsx("small",a({className:"mt1"},{children:t.error}))]}),"file-".concat(r))})):C&&e.jsxs("div",a({className:"file-uploader-file-container"},{children:[e.jsxs("div",a({className:"file-uploader-file".concat(C.error?"_error":"")},{children:[e.jsx("span",a({className:"file-uploader-file-name"},{children:C.file.name}))," ",C.loading?e.jsx(d,{spinner:!0}):C.error?e.jsx("span",a({className:"material-icons error"},{children:"error"})):e.jsx("span",a({className:"material-icons check"},{children:"check_circle"}))]})),C.error&&e.jsx("small",{children:C.error})]}))}))]}))};
//# sourceMappingURL=index.js.map
