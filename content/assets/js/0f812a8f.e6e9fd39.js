"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2211],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>k});var n=a(67294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var i=n.createContext({}),c=function(e){var t=n.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(a),d=l,k=h["".concat(i,".").concat(d)]||h[d]||p[d]||o;return a?n.createElement(k,r(r({ref:t},u),{},{components:a})):n.createElement(k,r({ref:t},u))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=a.length,r=new Array(o);r[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[h]="string"==typeof e?e:l,r[1]=s;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},52498:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=a(87462),l=(a(67294),a(3905));const o={layout:"post",title:"Apache CloudStack Weekly News - 4 February 2013",slug:"apache_cloudstack_weekly_news_4"},r=void 0,s={permalink:"/blog/apache_cloudstack_weekly_news_4",editUrl:"https://github.com/apache/cloudstack-www/tree/main/blog/2013-02-05-apache_cloudstack_weekly_news_4.md",source:"@site/blog/2013-02-05-apache_cloudstack_weekly_news_4.md",title:"Apache CloudStack Weekly News - 4 February 2013",description:"Another busy week in Apache CloudStack land! Javelin has been merged with master, the 4.1 branch has been created, and the 4.0.1-incubating release has passed its second round vote to go on to the IPMC vote.",date:"2013-02-05T00:00:00.000Z",formattedDate:"February 5, 2013",tags:[],hasTruncateMarker:!1,authors:[],frontMatter:{layout:"post",title:"Apache CloudStack Weekly News - 4 February 2013",slug:"apache_cloudstack_weekly_news_4"},prevItem:{title:"Apache CloudStack Weekly News - 11 February 2013",permalink:"/blog/apache_cloudstack_weekly_news_11"},nextItem:{title:"Apache CloudStack Weekly News - 28 January 2013",permalink:"/blog/apache_cloudstack_weekly_news_28"}},i={authorsImageUrls:[]},c=[],u={toc:c},h="wrapper";function p(e){let{components:t,...a}=e;return(0,l.kt)(h,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Another busy week in Apache CloudStack land! Javelin has been merged with master, the 4.1 branch has been created, and the 4.0.1-incubating release has passed its second round vote to go on to the IPMC vote."),(0,l.kt)("h3",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-4February2013-MajorDiscussionsandIssues"}),"Major Discussions and Issues"),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-4February2013-JavelinMerged"}),"Javelin Merged"),(0,l.kt)("p",null,"The Javelin branch has been ",(0,l.kt)("a",{href:"http://markmail.org/message/wl7it77lgrsllipu",class:"external-link",rel:"nofollow"},"merged into master")," by Kelven Yang. Kelven ",(0,l.kt)("a",{href:"http://markmail.org/message/bpnxze6edj4bikvr",class:"external-link",rel:"nofollow"},"has noted that developers should increase the amount of memory available to the JVM")," if running the management server under Maven:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",null,"For linux/Mac users"),(0,l.kt)("p",null,'MAVEN_OPTS="-XX:MaxPermSize=512m -Xmx2g"',(0,l.kt)("br",null),"export MAVEN_OPTS"),(0,l.kt)("p",null,"For Windows users"),(0,l.kt)("p",null,"Add similar settings to windows environment settings (via Windows control panel)")),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-4February2013-4.1BranchCreated"}),"4.1 Branch Created"),(0,l.kt)("p",null,"Following the Javelin merge, Chip Childers has ",(0,l.kt)("a",{href:"http://markmail.org/message/6wpcd5kg2bvdpufy",class:"external-link",rel:"nofollow"},"created the 4.1 branch"),', and has asked committers "to respect the feature and improvement freeze in that branch. Bug fixes, doc updates and other release stabilization activities are obviously expected." Chip also says that committers should continue committing directly to the 4.1 branch until code freeze. (Code freeze, excepting fixes for blocker bugs and so forth, is on February 28th.) '),(0,l.kt)("p",null,"If you're a non-committer and wish to send in a patch against 4.1.0, send in a patch built against the 4.1 branch. Chip says:"),(0,l.kt)("blockquote",null,(0,l.kt)("p",null,"Committers taking these fixes should also consider applying them to master.  If there are conflicts in master (which may happen, as there were a",(0,l.kt)("br",null),"couple of code-base refactoring activities, like switching packages from com.cloud to org.apache.cloudstack), apply the fix into 4.1 anyway, and inform the submitter that the patch has conflicts with master to get that sorted out (or you can fix it yourself).")),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-4February2013-4.0.1incubatingVote"}),"4.0.1-incubating Vote"),(0,l.kt)("p",null,"The 4.0.1-incubating release has passed the ",(0,l.kt)("a",{href:"http://markmail.org/message/zxvynd72xfansmho",class:"external-link",rel:"nofollow"},"vote")," on cloudstack-dev, and is now in the 72-hour IPMC vote. Going into the vote on general@incubator.apache.org, the release artifacts already have 3 +1 mentor votes, so it should pass barring any -1 votes. "),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-4February2013-PreparingforTranslation"}),"Preparing for Translation"),(0,l.kt)("p",null,"With the feature freeze in place, it's time to get docs into shape and start getting things ready for translations. Sebastien Goasguen ",(0,l.kt)("a",{href:"http://markmail.org/thread/rq7pbo3tn4ur4lu5",class:"external-link",rel:"nofollow"},"has created a new /pot directory")," with the .pot (portable object templates). "),(0,l.kt)("p",null,"Sebastien notes that contributors ",(0,l.kt)("a",{href:"http://markmail.org/message/ykxnxp3r5bffzqrg",class:"external-link",rel:"nofollow"},"need to remember the 50-character limit for XML filenames"),", as Transifex doesn't support longer file names. Contributors will also need to run ",(0,l.kt)("b",null,(0,l.kt)("em",null,"publican update_pot"))," when updating doc files and/or creating new files."),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-4February2013-Packagingin4.1"}),"Packaging in 4.1"),(0,l.kt)("p",null,"Hugo Trippaers ",(0,l.kt)("a",{href:"http://markmail.org/message/jlvpt3dgefcwacxl",class:"external-link",rel:"nofollow"},"sent out an update"),' about the discussion on packaging for 4.1. Hugo says the main goal for redoing the current way of packaging CloudStack is to get "rid of ant and waf completely." The secondary goal "is to create a reference set of packages which in itself should be enough to get anyone going with CloudStack, but will hardly depend on the underlying distro. Real distro specific stuff should be handled by packagers from those distros. We just aim to provide a reference implementation."'),(0,l.kt)("p",null,'Hugo also says that the plan is to rename the packages "to make it perfectly clear what somebody is installing." That\'s going to change the location of a number of files, but Hugo says "we intend to include symlinks for backwards compatibility." '),(0,l.kt)("blockquote",null,(0,l.kt)("p",null,"The planned packages for now are cloudstack-management, cloudstack-agent, cloudstack-common, cloudstack-cli, cloudstack-docs, cloudstack-awsapi and",(0,l.kt)("br",null),"cloudstack-usage. You might already have seen these names in some of the checkins.")),(0,l.kt)("p",null,"One of the side-effects of the new packaging plan is that ",(0,l.kt)("a",{href:"http://markmail.org/message/47yguo5rfrszpie7",class:"external-link",rel:"nofollow"},"CloudMonkey may not be installed with the RPMs"),", but instead require that admins use PIP to grab CloudMonkey. "),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-4February2013-SupportVMSnapshotHeldto4.2"}),"Support VM Snapshot Held to 4.2"),(0,l.kt)("p",null,"Mice Xia ",(0,l.kt)("a",{href:"http://markmail.org/message/tctez5xpur2bzswe",class:"external-link",rel:"nofollow"},"proposed merging the VM Snapshot branch")," to master ahead of the 4.1 branching/feature freeze on January 28th. However, there were a ",(0,l.kt)("a",{href:"http://markmail.org/message/bmwbjet5q7nlav6j",class:"external-link",rel:"nofollow"},"number of questions")," ",(0,l.kt)("a",{href:"http://markmail.org/message/nk525qhfdwqqil6n",class:"external-link",rel:"nofollow"},"about the feature's implementation")," and ",(0,l.kt)("a",{href:"http://markmail.org/message/yjaddguj67dqzbhe",class:"external-link",rel:"nofollow"},"consensus was not reached")," in time for the 4.1 branch's creation."),(0,l.kt)("p",null,"On the plus side, this is why we have time-based releases. While it will delay inclusion into CloudStack ",(0,l.kt)("b",null,"slightly"),", the feature will be well-poised to go into 4.2 and the additional attention that the discussion has raised will likely make it that much better a feature when merged to master. It also means that a single feature won't delay the 4.1 release, which already has quite a lot of improvements and new features that CloudStack users will want to have ready when it's scheduled for release."),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-4February2013-ProposaltoDeprecatethenonRESTfulAPIsandAPIServer"}),"Proposal to Deprecate the non-RESTful APIs and API Server"),(0,l.kt)("p",null,"Rohit Yadav has ",(0,l.kt)("a",{href:"http://markmail.org/message/3nmgl5peuxeo4mvm",class:"external-link",rel:"nofollow"},"proposed deprecating CloudStack's non-RESTful APIs and API server")," over a reasonable timeline. The reaction has been positive, and Min Chen ",(0,l.kt)("a",{href:"http://markmail.org/message/xnjf5ylpn55ddneb",class:"external-link",rel:"nofollow"},"has offered to share an architecture design that's in-progress"),", when it's ready."),(0,l.kt)("h5",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-4February2013-HelpReviewingRunbook"}),"Help Reviewing Runbook"),(0,l.kt)("p",null,"David Nalley has ",(0,l.kt)("a",{href:"http://markmail.org/message/jint25r5gwgnx6ju",class:"external-link",rel:"nofollow"},"sent out a request")," for help reviewing his runbook, which is an opinionated guide to setting up a simple CloudStack install on a single CentOS 6.3 server using KVM. Other CloudStack users and contributors have expressed interest in creating similar runbooks for Ubuntu-based systems."),(0,l.kt)("h3",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-4February2013-UpcomingEvents"}),"Upcoming Events"),(0,l.kt)("ul",null,(0,l.kt)("li",null,(0,l.kt)("b",null,"India User Group Meet-up"),": Citrix, ShapeBlue, and CloudByte are\xa0combinedly\xa0organizing a ",(0,l.kt)("a",{href:"http://www.meetup.com/CloudStack-Bangalore-Group/events/99690432/",class:"external-link",rel:"nofollow"},"CloudStack India User Group Meetup"),"\xa0in Bangalore (5 February, 2013)."),(0,l.kt)("li",null,(0,l.kt)("b",null,"Build a Cloud Day (BACD)"),": Full day ",(0,l.kt)("a",{href:"http://buildacloud.org/about-cloudstack/cloudstack-events/viewevent/138-build-a-cloud-day-scale11x-.html",class:"external-link",rel:"nofollow"},"BACD")," at SCALE on Friday (22 February 2013)."),(0,l.kt)("li",null,(0,l.kt)("b",null,"CloudStack Booth at SCALE"),": Meet with CloudStack folks at SCALE (23-24 February 2013), also Joe Brockmeier is ",(0,l.kt)("a",{href:"http://www.socallinuxexpo.org/scale11x/presentations/taking-open-cloud-11-cloudstack",class:"external-link",rel:"nofollow"},"speaking about CloudStack at SCALE"),".")),(0,l.kt)("h3",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-4February2013-Jira"}),"Jira "),(0,l.kt)("p",null,"Be sure to check the list of 4.1.0 ",(0,l.kt)("a",{href:"https://issues.apache.org/jira/issues/?jql=project%20%3D%20CLOUDSTACK%20AND%20resolution%20%3D%20Unresolved%20AND%20fixVersion%20%3D%20%224.1.0%22%20ORDER%20BY%20priority%20DESC",class:"external-link",rel:"nofollow"},"bugs")," to see if there are any open issues assigned to you, or any unassigned issues that you could take on. "),(0,l.kt)("h3",null,(0,l.kt)("a",{name:"ApacheCloudStackWeeklyNews-4February2013-NewCommittersandPPMCMembers"}),"New Committers and PPMC Members"),(0,l.kt)("p",null,"The Apache CloudStack project is pleased to welcome ",(0,l.kt)("a",{href:"http://markmail.org/thread/p5b76rrp5h3j4k2u",class:"external-link",rel:"nofollow"},"Koushik Das")," as a committer this week. Well done, Koushik!"))}p.isMDXComponent=!0}}]);