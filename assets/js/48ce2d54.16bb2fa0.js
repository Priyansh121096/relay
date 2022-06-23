(self.webpackChunk=self.webpackChunk||[]).push([[99028],{3905:(e,r,n)=>{"use strict";n.r(r),n.d(r,{MDXContext:()=>s,MDXProvider:()=>p,mdx:()=>y,useMDXComponents:()=>c,withMDXComponents:()=>d});var t=n(67294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(){return i=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var n=arguments[r];for(var t in n)Object.prototype.hasOwnProperty.call(n,t)&&(e[t]=n[t])}return e},i.apply(this,arguments)}function o(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?o(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function u(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),d=function(e){return function(r){var n=c(r.components);return t.createElement(e,i({},r,{components:n}))}},c=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},p=function(e){var r=c(e.components);return t.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},f=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(n),p=a,f=d["".concat(o,".").concat(p)]||d[p]||m[p]||i;return n?t.createElement(f,l(l({ref:r},s),{},{components:n})):t.createElement(f,l({ref:r},s))}));function y(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=f;var l={};for(var u in r)hasOwnProperty.call(r,u)&&(l[u]=r[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}f.displayName="MDXCreateElement"},36742:(e,r,n)=>{"use strict";n.r(r),n.d(r,{default:()=>m});var t=n(79973),a=n(67294),i=n(73727),o=n(52263),l=n(13919),u=n(10412),s=(0,a.createContext)({collectLink:function(){}}),d=n(44996),c=n(18780),p=["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"];const m=function(e){var r,n,m=e.isNavLink,f=e.to,y=e.href,h=e.activeClassName,v=e.isActive,g=e["data-noBrokenLinkCheck"],w=e.autoAddBaseUrl,b=void 0===w||w,x=(0,t.Z)(e,p),N=(0,o.default)().siteConfig,k=N.trailingSlash,q=N.baseUrl,C=(0,d.useBaseUrlUtils)().withBaseUrl,O=(0,a.useContext)(s),Q=f||y,P=(0,l.Z)(Q),E=null==Q?void 0:Q.replace("pathname://",""),R=void 0!==E?(n=E,b&&function(e){return e.startsWith("/")}(n)?C(n):n):void 0;R&&P&&(R=(0,c.applyTrailingSlash)(R,{trailingSlash:k,baseUrl:q}));var T=(0,a.useRef)(!1),j=m?i.OL:i.rU,A=u.default.canUseIntersectionObserver,L=(0,a.useRef)();(0,a.useEffect)((function(){return!A&&P&&null!=R&&window.docusaurus.prefetch(R),function(){A&&L.current&&L.current.disconnect()}}),[L,R,A,P]);var U=null!==(r=null==R?void 0:R.startsWith("#"))&&void 0!==r&&r,D=!R||!P||U;return R&&P&&!U&&!g&&O.collectLink(R),D?a.createElement("a",Object.assign({href:R},Q&&!P&&{target:"_blank",rel:"noopener noreferrer"},x)):a.createElement(j,Object.assign({},x,{onMouseEnter:function(){T.current||null==R||(window.docusaurus.preload(R),T.current=!0)},innerRef:function(e){var r,n;A&&e&&P&&(r=e,n=function(){null!=R&&window.docusaurus.prefetch(R)},L.current=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(L.current.unobserve(r),L.current.disconnect(),n())}))})),L.current.observe(r))},to:R||""},m&&{isActive:v,activeClassName:h}))}},13919:(e,r,n)=>{"use strict";function t(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!t(e)}n.d(r,{b:()=>t,Z:()=>a})},44996:(e,r,n)=>{"use strict";n.r(r),n.d(r,{useBaseUrlUtils:()=>i,default:()=>o});var t=n(52263),a=n(13919);function i(){var e=(0,t.default)().siteConfig,r=(e=void 0===e?{}:e).baseUrl,n=void 0===r?"/":r,i=e.url;return{withBaseUrl:function(e,r){return function(e,r,n,t){var i=void 0===t?{}:t,o=i.forcePrependBaseUrl,l=void 0!==o&&o,u=i.absolute,s=void 0!==u&&u;if(!n)return n;if(n.startsWith("#"))return n;if((0,a.b)(n))return n;if(l)return r+n;var d=n.startsWith(r)?n:r+n.replace(/^\//,"");return s?e+d:d}(i,n,e,r)}}}function o(e,r){return void 0===r&&(r={}),(0,i().withBaseUrl)(e,r)}},8802:(e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e,r){var n=r.trailingSlash,t=r.baseUrl;if(e.startsWith("#"))return e;if(void 0===n)return e;var a,i=e.split(/[#?]/)[0],o="/"===i||i===t?i:(a=i,n?function(e){return e.endsWith("/")?e:e+"/"}(a):function(e){return e.endsWith("/")?e.slice(0,-1):e}(a));return e.replace(i,o)}},18780:function(e,r,n){"use strict";var t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.uniq=r.applyTrailingSlash=void 0;var a=n(8802);Object.defineProperty(r,"applyTrailingSlash",{enumerable:!0,get:function(){return t(a).default}});var i=n(29964);Object.defineProperty(r,"uniq",{enumerable:!0,get:function(){return t(i).default}})},29964:(e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default=function(e){return Array.from(new Set(e))}},68629:(e,r,n)=>{"use strict";n.d(r,{Z:()=>m});var t=n(36742),a=n(44256),i=n(67294);function o(){var e=window.encodeURI(JSON.stringify({title:"Feedback about "+window.location.pathname,description:"**!!! Required !!!**\n\nPlease modify the task description to let us know how the docs can be improved.\n\n**Please do not ask support questions via this form! Instead, ask in fburl.com/relay_support**",tag_ids:{add:[0xac96423e5b680,0x64079768ac750]}}));window.open("https://www.internalfb.com/tasks/?n="+e)}function l(e){var r=e.children;return i.createElement("div",{className:"docsRating",id:"docsRating"},i.createElement("hr",null),r)}var u=function(){var e=i.useState(!1),r=e[0],n=e[1],t=function(e){n(!0),function(e){window.ga&&window.ga("send",{hitType:"event",eventCategory:"button",eventAction:"feedback",eventValue:e})}(e)};return r?"Thank you for letting us know!":i.createElement(i.Fragment,null,"Is this page useful?",i.createElement("svg",{className:"i_thumbsup",alt:"Like",id:"docsRating-like",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return t(1)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})),i.createElement("svg",{className:"i_thumbsdown",alt:"Dislike",id:"docsRating-dislike",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 81.13 89.76",onClick:function(){return t(0)}},i.createElement("path",{d:"M22.9 6a18.57 18.57 0 002.67 8.4 25.72 25.72 0 008.65 7.66c3.86 2 8.67 7.13 13.51 11 3.86 3.11 8.57 7.11 11.54 8.45s13.59.26 14.64 1.17c1.88 1.63 1.55 9-.11 15.25-1.61 5.86-5.96 10.55-6.48 16.86-.4 4.83-2.7 4.88-10.93 4.88h-1.35c-3.82 0-8.24 2.93-12.92 3.62a68 68 0 01-9.73.5c-3.57 0-7.86-.08-13.25-.08-3.56 0-4.71-1.83-4.71-4.48h8.42a3.51 3.51 0 000-7H12.28a2.89 2.89 0 01-2.88-2.88 1.91 1.91 0 01.77-1.78h16.46a3.51 3.51 0 000-7H12.29c-3.21 0-4.84-1.83-4.84-4a6.41 6.41 0 011.17-3.78h19.06a3.5 3.5 0 100-7H9.75A3.51 3.51 0 016 42.27a3.45 3.45 0 013.75-3.48h13.11c5.61 0 7.71-3 5.71-5.52-4.43-4.74-10.84-12.62-11-18.71-.15-6.51 2.6-7.83 5.36-8.56m0-6a6.18 6.18 0 00-1.53.2c-6.69 1.77-10 6.65-9.82 14.5.08 5.09 2.99 11.18 8.52 18.09H9.74a9.52 9.52 0 00-6.23 16.9 12.52 12.52 0 00-2.07 6.84 9.64 9.64 0 003.65 7.7 7.85 7.85 0 00-1.7 5.13 8.9 8.9 0 005.3 8.13 6 6 0 00-.26 1.76c0 6.37 4.2 10.48 10.71 10.48h13.25a73.75 73.75 0 0010.6-.56 35.89 35.89 0 007.58-2.18 17.83 17.83 0 014.48-1.34h1.35c4.69 0 7.79 0 10.5-1 3.85-1.44 6-4.59 6.41-9.38.2-2.46 1.42-4.85 2.84-7.62a41.3 41.3 0 003.42-8.13 48 48 0 001.59-10.79c.1-5.13-1-8.48-3.35-10.55-2.16-1.87-4.64-1.87-9.6-1.88a46.86 46.86 0 01-6.64-.29c-1.92-.94-5.72-4-8.51-6.3l-1.58-1.28c-1.6-1.3-3.27-2.79-4.87-4.23-3.33-3-6.47-5.79-9.61-7.45a20.2 20.2 0 01-6.43-5.53 12.44 12.44 0 01-1.72-5.36 6 6 0 00-6-5.86z"})))},s=function(){return i.createElement("p",null,"Let us know how these docs can be improved by",i.createElement("a",{className:"button",role:"button",tabIndex:0,onClick:o},"Filing a task"))},d=function(){return i.createElement("p",null,"Help us make the site even better by"," ",i.createElement(t.default,{to:"https://www.surveymonkey.com/r/FYC9TCJ"},"answering a few quick questions"),".")},c=function(){return i.createElement(l,null,i.createElement(s,null),i.createElement(u,null),i.createElement(d,null))},p=function(){return i.createElement(l,null,i.createElement(u,null),i.createElement(d,null))};const m=function(){return(0,a.fbContent)({internal:i.createElement(c,null),external:i.createElement(p,null)})}},94566:(e,r,n)=>{"use strict";n.r(r),n.d(r,{frontMatter:()=>u,contentTitle:()=>s,metadata:()=>d,toc:()=>c,default:()=>m});var t=n(74034),a=n(79973),i=(n(67294),n(3905)),o=n(68629),l=["components"],u={id:"use-preloaded-query",title:"usePreloadedQuery",slug:"/api-reference/use-preloaded-query/"},s=void 0,d={unversionedId:"api-reference/hooks/use-preloaded-query",id:"version-v11.0.0/api-reference/hooks/use-preloaded-query",isDocsHomePage:!1,title:"usePreloadedQuery",description:"usePreloadedQuery",source:"@site/versioned_docs/version-v11.0.0/api-reference/hooks/use-preloaded-query.md",sourceDirName:"api-reference/hooks",slug:"/api-reference/use-preloaded-query/",permalink:"/docs/v11.0.0/api-reference/use-preloaded-query/",editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v11.0.0/api-reference/hooks/use-preloaded-query.md",tags:[],version:"v11.0.0",lastUpdatedBy:"Terence Bezman",lastUpdatedAt:1656014261,formattedLastUpdatedAt:"6/23/2022",frontMatter:{id:"use-preloaded-query",title:"usePreloadedQuery",slug:"/api-reference/use-preloaded-query/"},sidebar:"version-v11.0.0/docs",previous:{title:"useRelayEnvironment",permalink:"/docs/v11.0.0/api-reference/use-relay-environment/"},next:{title:"useQueryLoader",permalink:"/docs/v11.0.0/api-reference/use-query-loader/"}},c=[{value:"<code>usePreloadedQuery</code>",id:"usepreloadedquery",children:[{value:"Arguments",id:"arguments",children:[],level:3},{value:"Flow Type Parameters",id:"flow-type-parameters",children:[],level:3},{value:"Return Value",id:"return-value",children:[],level:3}],level:2}],p={toc:c};function m(e){var r=e.components,n=(0,a.Z)(e,l);return(0,i.mdx)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,i.mdx)("h2",{id:"usepreloadedquery"},(0,i.mdx)("inlineCode",{parentName:"h2"},"usePreloadedQuery")),(0,i.mdx)("p",null,"Hook used to access data fetched by an earlier call to ",(0,i.mdx)("a",{parentName:"p",href:"../load-query"},(0,i.mdx)("inlineCode",{parentName:"a"},"loadQuery"))," or with the help of ",(0,i.mdx)("a",{parentName:"p",href:"../use-query-loader"},(0,i.mdx)("inlineCode",{parentName:"a"},"useQueryLoader")),'. This implements the "render-as-you-fetch" pattern:'),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},"Call the ",(0,i.mdx)("inlineCode",{parentName:"li"},"loadQuery")," callback returned from ",(0,i.mdx)("inlineCode",{parentName:"li"},"useQueryLoader"),". This will store a query reference in React state.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"You can also call the imported ",(0,i.mdx)("inlineCode",{parentName:"li"},"loadQuery")," directly, which returns a query reference. In that case, store the item in state or in a React ref, and call ",(0,i.mdx)("inlineCode",{parentName:"li"},"dispose()")," on the value when you are no longer using it."))),(0,i.mdx)("li",{parentName:"ul"},"Then, in your render method, consume the query reference with ",(0,i.mdx)("inlineCode",{parentName:"li"},"usePreloadedQuery()"),". This call will suspend if the query is still pending, throw an error if it failed, and otherwise return the query results."),(0,i.mdx)("li",{parentName:"ul"},"This pattern is encouraged over ",(0,i.mdx)("inlineCode",{parentName:"li"},"useLazyLoadQuery()")," as it can allow fetching data earlier while not blocking rendering.")),(0,i.mdx)("p",null,"For more information, see the ",(0,i.mdx)("a",{parentName:"p",href:"../../guided-tour/rendering/queries"},"Rendering Queries")," guide."),(0,i.mdx)("pre",null,(0,i.mdx)("code",{parentName:"pre",className:"language-js"},"import type {AppQuery as AppQueryType} from 'AppQuery.graphql';\n\nconst React = require('React');\n\nconst {graphql, useQueryLoader, usePreloadedQuery} = require('react-relay');\n\nconst AppQuery = graphql`\n  query AppQuery($id: ID!) {\n    user(id: $id) {\n      name\n    }\n  }\n`;\n\ntype Props = {\n  initialQueryRef: PreloadedQuery<AppQueryType>,\n};\n\nfunction NameLoader(props) {\n  const [queryReference, loadQuery] = useQueryLoader(\n    AppQuery,\n    props.initialQueryRef, /* e.g. provided by router */\n  );\n\n  return (<>\n    <Button\n      onClick={() => loadQuery({id: '4'})}\n      disabled={queryReference != null}\n    >\n      Reveal your name!\n    </Button>\n    <Suspense fallback=\"Loading...\">\n      {queryReference != null\n        ? <NameDisplay queryReference={queryReference} />\n        : null\n      }\n    </Suspense>\n  </>);\n}\n\nfunction NameDisplay({ queryReference }) {\n  const data = usePreloadedQuery<AppQueryType>(AppQuery, queryReference);\n\n  return <h1>{data.user?.name}</h1>;\n}\n")),(0,i.mdx)("h3",{id:"arguments"},"Arguments"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"query"),": GraphQL query specified using a ",(0,i.mdx)("inlineCode",{parentName:"li"},"graphql")," template literal."),(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"preloadedQueryReference"),": A ",(0,i.mdx)("inlineCode",{parentName:"li"},"PreloadedQuery")," query reference, which can be acquired from ",(0,i.mdx)("a",{parentName:"li",href:"../use-query-loader"},(0,i.mdx)("inlineCode",{parentName:"a"},"useQueryLoader"))," or by calling ",(0,i.mdx)("a",{parentName:"li",href:"../load-query"},(0,i.mdx)("inlineCode",{parentName:"a"},"loadQuery()"))," .")),(0,i.mdx)("h3",{id:"flow-type-parameters"},"Flow Type Parameters"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"TQuery"),": Type parameter that should correspond to the Flow type for the specified query. This type is available to import from the the auto-generated file: ",(0,i.mdx)("inlineCode",{parentName:"li"},"<query_name>.graphql.js"),".")),(0,i.mdx)("h3",{id:"return-value"},"Return Value"),(0,i.mdx)("ul",null,(0,i.mdx)("li",{parentName:"ul"},(0,i.mdx)("inlineCode",{parentName:"li"},"data"),": Object that contains data which has been read out from the Relay store; the object matches the shape of specified query.",(0,i.mdx)("ul",{parentName:"li"},(0,i.mdx)("li",{parentName:"ul"},"The Flow type for data will also match this shape, and contain types derived from the GraphQL Schema. For example, the type of ",(0,i.mdx)("inlineCode",{parentName:"li"},"data")," above is: ",(0,i.mdx)("inlineCode",{parentName:"li"},"{ user: ?{ name: ?string } }"),".")))),(0,i.mdx)(o.Z,{mdxType:"DocsRating"}))}m.isMDXComponent=!0}}]);