"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1279],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,o=function(e,t){if(null==e)return{};var r,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||n;return r?a.createElement(h,i(i({ref:t},u),{},{components:r})):a.createElement(h,i({ref:t},u))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=r.length,i=new Array(n);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1182:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>s,toc:()=>l});var a=r(87462),o=(r(67294),r(3905));const n={layout:"post",title:"Building a Disaster Recovery Solution with Apache CloudStack & CEPH Storage",tags:["case-studies"],authors:["jamie"],slug:"disaster-recovery-cloudstack-ceph"},i=void 0,s={permalink:"/blog/disaster-recovery-cloudstack-ceph",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2024-02-16-building-disaster-recovery-with-cloudstack-and-ceph-storage/index.md",source:"@site/blog/2024-02-16-building-disaster-recovery-with-cloudstack-and-ceph-storage/index.md",title:"Building a Disaster Recovery Solution with Apache CloudStack & CEPH Storage",description:"StackBill is a provider of self-service intuitive Cloud Management Portals (CMP) designed to meet the diverse needs of data centers, enterprises, telecom companies, and cloud service providers. The company has leveraged the capabilities of Apache CloudStack to deliver a robust and scalable cloud infrastructure management solution to their customers. They also  developed is a Disaster Recovery solution, based on Apache CloudStack and Ceph.",date:"2024-02-16T00:00:00.000Z",formattedDate:"February 16, 2024",tags:[{label:"case-studies",permalink:"/blog/tags/case-studies"}],hasTruncateMarker:!0,authors:[{name:"Jamie Pell",title:"Community Contributor",url:"https://github.com/jamiepell10",imageURL:"https://github.com/jamiepell10.png",key:"jamie"}],frontMatter:{layout:"post",title:"Building a Disaster Recovery Solution with Apache CloudStack & CEPH Storage",tags:["case-studies"],authors:["jamie"],slug:"disaster-recovery-cloudstack-ceph"},nextItem:{title:"Apache CloudStack 4.19.0.0 Release",permalink:"/blog/cloudstack-4.19.0.0-release"}},c={authorsImageUrls:[void 0]},l=[],u={toc:l},p="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(p,(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/blog/disaster-recovery-cloudstack-ceph"},(0,o.kt)("img",{src:r(20154).Z,title:"Building a Disaster Recovery Solution with Apache CloudStack & CEPH Storage",width:"2300",height:"1196"}))),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.stackbill.com/"},"StackBill")," is a provider of self-service intuitive Cloud Management Portals (CMP) designed to meet the diverse needs of data centers, enterprises, telecom companies, and cloud service providers. The company has leveraged the capabilities of Apache CloudStack to deliver a robust and scalable cloud infrastructure management solution to their customers. They also  developed is a Disaster Recovery solution, based on Apache CloudStack and Ceph."))}d.isMDXComponent=!0},20154:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/banner-0bdaf2175e55cd79871856b600eabd0c.png"}}]);