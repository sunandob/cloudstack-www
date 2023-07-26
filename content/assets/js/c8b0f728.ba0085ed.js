"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4129],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},f=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(r),f=n,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return r?a.createElement(m,i(i({ref:t},u),{},{components:r})):a.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},9709:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=r(7462),n=(r(7294),r(3905));const o={layout:"post",title:"Apache CloudStack and Terraform Solution Brief",tags:["case-studies"],authors:["jamie"],slug:"terraform-solution-brief"},i=void 0,s={permalink:"/blog/terraform-solution-brief",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2023-07-14-terraform-solution-brief/index.md",source:"@site/blog/2023-07-14-terraform-solution-brief/index.md",title:"Apache CloudStack and Terraform Solution Brief",description:"IT solution providers need to satisfy the demand for the delivery of diverse",date:"2023-07-14T00:00:00.000Z",formattedDate:"July 14, 2023",tags:[{label:"case-studies",permalink:"/blog/tags/case-studies"}],hasTruncateMarker:!0,authors:[{name:"Jamie Pell",title:"Community Contributor",url:"https://github.com/jamiepell10",imageURL:"https://github.com/jamiepell10.png",key:"jamie"}],frontMatter:{layout:"post",title:"Apache CloudStack and Terraform Solution Brief",tags:["case-studies"],authors:["jamie"],slug:"terraform-solution-brief"},prevItem:{title:"CloudStack India User Group 2023",permalink:"/blog/cloudstack-india-user-group-meetup-2023"},nextItem:{title:"Bringing Digital Services to 1.3 Billion People with Apache CloudStack",permalink:"/blog/bringing-digital-services-to-billions-with-apache-cloudstack"}},l={authorsImageUrls:[void 0]},c=[],u={toc:c},p="wrapper";function d(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/blog/terraform-solution-brief"},(0,n.kt)("img",{src:r(2299).Z,title:"CSC",width:"904",height:"472"}))),(0,n.kt)("p",null,"IT solution providers need to satisfy the demand for the delivery of diverse\nservices in the short-term. Time-to-market when offering IT solutions, IaaS or\njust provisioning infrastructure is a key factor for the company\u2019s\ncompetitiveness. This requires companies to utilize tools capable of providing\nthe agility to deliver new features, scalability, and infrastructure anywhere\nalmost instantly."),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://www.terraform.io/"},"Terraform")," is an open-source infrastructure-as-code\ntool created by Hashicorp and Licensed through the Apache 2 License. By using\nTerraform, end users can easily create complex infrastructures anywhere, since\nTerraform has a huge list of providers supported, including Apache CloudStack."),(0,n.kt)("p",null,"HashiCorp Terraform helps organizations improve productivity, reduce risk, and\nincrease business velocity as they integrate cloud into their IT environments.\nAccording to them, it improves IT Ops productivity up to 75%."),(0,n.kt)("h1",{id:"apache-cloudstack-and-terraform-integration"},"Apache CloudStack and Terraform Integration"),(0,n.kt)("p",null,"Terraform relies on a set of plugins known as Providers in order to provision or\nmanage resources and cloud services. As part of the integration of Terraform and\nApache CloudStack, Terraform requires a specific CloudStack provider, which acts\nas a transition layer between Terraform and Apache CloudStack. This provider was\nwritten to provision and manage resources such as virtual machines, networks,\ntemplates, volumes etc., using the CloudStack APIs."),(0,n.kt)("p",null,"There are two main working components here:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Terraform Core"),(0,n.kt)("li",{parentName:"ul"},"CloudStack's Provider")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(4112).Z,title:"CloudStack Terraform Integration",width:"1384",height:"406"})),(0,n.kt)("a",{class:"button button--primary",href:"/files/terraform-solution-brief 2023.pdf",target:"_blank"},"DOWNLOAD THE SOLUTION BRIEF"),(0,n.kt)("br",null),(0,n.kt)("br",null),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(1518).Z,title:"Tamara",width:"128",height:"164"})),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u201cCloudStack and Terraform bring scalability and flexibility. The immediate\nbenefit out of them is that you can have tested and proven blueprints and roll\nout environments quickly. Terraform is perfect for quickly creating Test/Dev\nenvironments."),(0,n.kt)("p",{parentName:"blockquote"},"In distributed teams, collaboration is extremely important. Infrastructure as\ncode is a huge boost, helping teams to collaborate on code.\u201d"),(0,n.kt)("p",{parentName:"blockquote"},"-",(0,n.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/muryshkin/"},"Tamara Muryshkin"),", Enterprise Service Manager at Fraunhofer-Gesellschaft")),(0,n.kt)("h1",{id:"about-terraform"},(0,n.kt)("a",{parentName:"h1",href:"https://www.terraform.io/"},"About Terraform")),(0,n.kt)("p",null,"Terraform is an ",(0,n.kt)("strong",{parentName:"p"},"open-source infrastructure as code software tool")," that provides a\nconsistent CLI workflow to ",(0,n.kt)("strong",{parentName:"p"},"manage hundreds of cloud services"),". Terraform codifies\ncloud APIs into declarative configuration files."),(0,n.kt)("p",null,"Terraform allows infrastructure to be expressed as code in a simple,\nhuman-readable language called HCL (HashiCorp Configuration Language). It reads\nconfiguration files and provides an execution plan of changes, which can be\nreviewed for safety and then applied and provisioned. ",(0,n.kt)("strong",{parentName:"p"},"Extensible providers allow\nTerraform to manage a broad range of resources, including IaaS, PaaS, SaaS, and\nhardware services.")),(0,n.kt)("a",{class:"button button--primary",href:"/files/terraform-solution-brief 2023.pdf",target:"_blank"},"DOWNLOAD THE SOLUTION BRIEF"),(0,n.kt)("br",null))}d.isMDXComponent=!0},2299:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/banner-f764b7dbd111c1ab9f0570cd7366ae0f.png"},1518:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/tamara-686196c4467fd39f89fec80c14519d0d.png"},4112:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/terraform-1a484db84988e35f418015b5b39328df.png"}}]);