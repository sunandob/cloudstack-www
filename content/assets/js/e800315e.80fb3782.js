"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5400],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,f=u["".concat(l,".").concat(d)]||u[d]||h[d]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8315:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(7462),o=(r(7294),r(3905));const a={layout:"post",title:"CloudStack's realhostip service to retire in less than a week!",slug:"cloudstack_s_realhostip_service_to"},i=void 0,c={permalink:"/blog/cloudstack_s_realhostip_service_to",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2014-09-26-cloudstack_s_realhostip_service_to.md",source:"@site/blog/2014-09-26-cloudstack_s_realhostip_service_to.md",title:"CloudStack's realhostip service to retire in less than a week!",description:"As previously mentioned, the realhostip.com dynamic DNS service is being retired at the end of September.",date:"2014-09-26T00:00:00.000Z",formattedDate:"September 26, 2014",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"CloudStack's realhostip service to retire in less than a week!",slug:"cloudstack_s_realhostip_service_to"},prevItem:{title:"Announcing Apache\u2122 CloudStack\u2122 v4.4.1",permalink:"/blog/announcing_apache_cloudstack_v4_4"},nextItem:{title:"Announcing Apache\u2122 CloudMonkey\u2122 v5.2.0",permalink:"/blog/announcing_apache_cloudmonkey_v5_2"}},l={authorsImageUrls:[]},s=[],p={toc:s},u="wrapper";function h(e){let{components:t,...r}=e;return(0,o.kt)(u,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"As ",(0,o.kt)("a",{href:"https://blogs.apache.org/cloudstack/entry/realhostip_service_is_being_retired"},"previously")," ",(0,o.kt)("a",{href:"https://blogs.apache.org/cloudstack/entry/realhostip_reprieve"},"mentioned"),", the realhostip.com dynamic DNS service is being retired at the end of September."),(0,o.kt)("p",null,"Citrix is reporting that they are still seeing DNS queries against the domain; Those who have not reconfigured their CloudStack installations will find part of their installations breaking once the realhostip service is retired on September 30th."),(0,o.kt)("p",null,"If you are running a version of CloudStack older than 4.3 and you have not reconfigured your installation to not use realhostip.com, please take the time to do so now before users are affected. Instructions are available in the ",(0,o.kt)("a",{href:"https://cwiki.apache.org/confluence/display/CLOUDSTACK/Procedure+to+Replace+realhostip.com+with+Your+Own+Domain+Name"},"CloudStack Wiki")," as well as other blogs on the Internet."))}h.isMDXComponent=!0}}]);