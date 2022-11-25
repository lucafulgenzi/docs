"use strict";(self.webpackChunkcontabo_docs=self.webpackChunkcontabo_docs||[]).push([[9783],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,a=function(e,t){if(null==e)return{};var r,o,a={},s=Object.keys(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)r=s[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=o.createContext({}),l=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),h=a,g=p["".concat(i,".").concat(h)]||p[h]||d[h]||s;return r?o.createElement(g,n(n({ref:t},u),{},{components:r})):o.createElement(g,n({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,n=new Array(s);n[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,n[1]=c;for(var l=2;l<s;l++)n[l]=r[l];return o.createElement.apply(null,n)}return o.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9115:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>n,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>l});var o=r(7462),a=(r(7294),r(3905));const s={sidebar_position:5},n="Share Object Storage with selected users",c={unversionedId:"products/Object-Storage/Tutorial/shareWithUserManagement",id:"products/Object-Storage/Tutorial/shareWithUserManagement",title:"Share Object Storage with selected users",description:"Users have the opportunity to share their object storage with the public (see here) or with selected users.",source:"@site/docs/products/Object-Storage/Tutorial/shareWithUserManagement.md",sourceDirName:"products/Object-Storage/Tutorial",slug:"/products/Object-Storage/Tutorial/shareWithUserManagement",permalink:"/docs/products/Object-Storage/Tutorial/shareWithUserManagement",draft:!1,editUrl:"https://github.com/contabo/docs/tree/main/docs/products/Object-Storage/Tutorial/shareWithUserManagement.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5},sidebar:"productSidebar",previous:{title:"Share Object Storage with public",permalink:"/docs/products/Object-Storage/Tutorial/shareWithPublic"},next:{title:"Generate Access Key and Secret Key",permalink:"/docs/products/Object-Storage/HowTo/access_secret_key"}},i={},l=[{value:"How do I share Object Storage with selected users?",id:"how-do-i-share-object-storage-with-selected-users",level:2},{value:"How do I revoke access to Storage from selected users?",id:"how-do-i-revoke-access-to-storage-from-selected-users",level:2}],u={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"share-object-storage-with-selected-users"},"Share Object Storage with selected users"),(0,a.kt)("p",null,"Users have the opportunity to share their object storage with the public (see ",(0,a.kt)("a",{parentName:"p",href:"/docs/products/Object-Storage/Tutorial/shareWithPublic"},"here"),") or with selected users."),(0,a.kt)("h2",{id:"how-do-i-share-object-storage-with-selected-users"},"How do I share Object Storage with selected users?"),(0,a.kt)("p",null,"It is possible to give access to buckets, files and folders to selected users rather than to the public.\nFor this, access for the selected user needs to be unlocked for the Object Storage Panel and API in User Management, a tool each Contabo customer using the Contabo Object Storage panel has access to."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/products/object-storage/tutorial/usermanagement2.png?raw=true",alt:"usermanagement2"})),(0,a.kt)("p",null,"To create and add a new user to your User Management list, follow these steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Log into your Object Storage Panel"),(0,a.kt)("li",{parentName:"ul"},"Open the menu 'Account' and select 'User Management' (see image above)"),(0,a.kt)("li",{parentName:"ul"},"Select 'Create User'. The following menu appears:",(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/img/products/object-storage/tutorial/usermanagementoverview.png",alt:"Usermanagement Overview"})))),(0,a.kt)("p",null,"By specifying all mandatory information, the user's corresponding role (e.g. S3 Object Storage Read and Write) and confirming with 'Create' you grant access to buckets, files and folders."),(0,a.kt)("p",null,"The user will receive an invitation via email. The status of the user is displayed in the account overview (see first image above)."),(0,a.kt)("h2",{id:"how-do-i-revoke-access-to-storage-from-selected-users"},"How do I revoke access to Storage from selected users?"),(0,a.kt)("p",null,"To revoke a selected user's access to Storage, you can either delete the user in your User Management or disable user's access by editing the settings (see checkbox in image above)."))}d.isMDXComponent=!0}}]);