"use strict";(self.webpackChunkcontabo_docs=self.webpackChunkcontabo_docs||[]).push([[9823],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=o.createContext({}),p=function(e){var t=o.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return r?o.createElement(g,a(a({ref:t},l),{},{components:r})):o.createElement(g,a({ref:t},l))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1885:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=r(7462),n=(r(7294),r(3905));const i={title:"Pre-signed URL",sidebar_position:3},a="Pre-signed URL",s={unversionedId:"products/Object-Storage/HowTo/presigned-url",id:"products/Object-Storage/HowTo/presigned-url",title:"Pre-signed URL",description:"A pre-signed URL is special S3 compliant URL in order to share an object for a specific duration for everyone who has the URL. Thus the URL contains some more query parameters holding that specific information.",source:"@site/docs/products/Object-Storage/HowTo/presigned-url.md",sourceDirName:"products/Object-Storage/HowTo",slug:"/products/Object-Storage/HowTo/presigned-url",permalink:"/docs/products/Object-Storage/HowTo/presigned-url",draft:!1,editUrl:"https://github.com/contabo/docs/tree/main/docs/products/Object-Storage/HowTo/presigned-url.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Pre-signed URL",sidebar_position:3},sidebar:"productSidebar",previous:{title:"Mounting S3 Object Storage Files",permalink:"/docs/products/Object-Storage/HowTo/mount"},next:{title:"Automate Public Sharing",permalink:"/docs/products/Object-Storage/HowTo/public-sharing"}},c={},p=[{value:"Create a pre-signed URL",id:"create-a-pre-signed-url",level:2},{value:"Format of supported pre-signed URLs",id:"format-of-supported-pre-signed-urls",level:2}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"pre-signed-url"},"Pre-signed URL"),(0,n.kt)("p",null,"A pre-signed URL is special S3 compliant URL in order to share an object for a specific duration for everyone who has the URL. Thus the URL contains some more query parameters holding that specific information."),(0,n.kt)("h2",{id:"create-a-pre-signed-url"},"Create a pre-signed URL"),(0,n.kt)("p",null,"The easiest way is to use a tool as creating such pre-signed URLs requires coding skills. E.g. using ",(0,n.kt)("a",{parentName:"p",href:"/docs/products/Object-Storage/Tools/cyberduck"},"Cyberduck")," makes that task very easy."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Naviagte to a file of your choice"),(0,n.kt)("li",{parentName:"ul"},"Select ",(0,n.kt)("inlineCode",{parentName:"li"},"Edit")," -> ",(0,n.kt)("inlineCode",{parentName:"li"},"Copy URL")," and choose one of the pre-signed URLs which are matching your duration"),(0,n.kt)("li",{parentName:"ul"},"You can alternatively right-click  and select either ",(0,n.kt)("inlineCode",{parentName:"li"},"Copy URL")," or ",(0,n.kt)("inlineCode",{parentName:"li"},"Open URL"))),(0,n.kt)("h2",{id:"format-of-supported-pre-signed-urls"},"Format of supported pre-signed URLs"),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"https://<region>.contabostorage.com/<bucketname>/path/to/file?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=<credential>&X-Amz-Date=<datetime>&X-Amz-Expires=<duration>X-Amz-SignedHeaders=host&X-Amz-Signature=<signature>")))}u.isMDXComponent=!0}}]);