"use strict";(self.webpackChunkrelay_website=self.webpackChunkrelay_website||[]).push([[97827],{3905:(e,n,t)=>{t.r(n),t.d(n,{MDXContext:()=>d,MDXProvider:()=>c,mdx:()=>h,useMDXComponents:()=>p,withMDXComponents:()=>s});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},o.apply(this,arguments)}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function m(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var d=a.createContext({}),s=function(e){return function(n){var t=p(n.components);return a.createElement(e,o({},n,{components:t}))}},p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):m(m({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},g=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),s=p(t),c=r,g=s["".concat(i,".").concat(c)]||s[c]||u[c]||o;return t?a.createElement(g,m(m({ref:n},d),{},{components:t})):a.createElement(g,m({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=g;var m={};for(var l in n)hasOwnProperty.call(n,l)&&(m[l]=n[l]);m.originalType=e,m.mdxType="string"==typeof e?e:r,i[1]=m;for(var d=2;d<o;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}g.displayName="MDXCreateElement"},70901:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>l,default:()=>u,frontMatter:()=>m,metadata:()=>d,toc:()=>p});var a=t(83117),r=t(80102),o=(t(67294),t(3905)),i=["components"],m={id:"fragment-container",title:"Fragment Container",original_id:"fragment-container"},l=void 0,d={unversionedId:"fragment-container",id:"version-v7.1.0/fragment-container",title:"Fragment Container",description:"A Fragment Container is a higher-order component that allows components to specify their data requirements. A container does not directly fetch data, but instead declares a specification of the data needed for rendering, and then Relay will guarantee that this data is available before rendering occurs.",source:"@site/versioned_docs/version-v7.1.0/Modern-FragmentContainer.md",sourceDirName:".",slug:"/fragment-container",permalink:"/docs/v7.1.0/fragment-container",draft:!1,editUrl:"https://github.com/facebook/relay/tree/main/website/versioned_docs/version-v7.1.0/Modern-FragmentContainer.md",tags:[],version:"v7.1.0",lastUpdatedBy:"Andrey Lunyov",lastUpdatedAt:1697123276,formattedLastUpdatedAt:"Oct 12, 2023",frontMatter:{id:"fragment-container",title:"Fragment Container",original_id:"fragment-container"},sidebar:"version-v7.1.0/docs",previous:{title:"QueryRenderer",permalink:"/docs/v7.1.0/query-renderer"},next:{title:"Refetch Container",permalink:"/docs/v7.1.0/refetch-container"}},s={},p=[{value:"<code>createFragmentContainer</code>",id:"createfragmentcontainer",level:2},{value:"Arguments",id:"arguments",level:3},{value:"Available Props",id:"available-props",level:3},{value:"Example",id:"example",level:2},{value:"React Component",id:"react-component",level:3},{value:"Data Dependencies With GraphQL",id:"data-dependencies-with-graphql",level:3},{value:"Defining Containers",id:"defining-containers",level:3},{value:"Container Composition",id:"container-composition",level:2},{value:"Composing Views",id:"composing-views",level:3},{value:"Composing Fragments",id:"composing-fragments",level:3},{value:"Passing Arguments to a Fragment",id:"passing-arguments-to-a-fragment",level:3},{value:"<code>@argumentDefinitions</code>",id:"argumentdefinitions",level:4},{value:"<code>@arguments</code>",id:"arguments-1",level:4},{value:"Rendering Containers",id:"rendering-containers",level:2}],c={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,i);return(0,o.mdx)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.mdx)("p",null,"A Fragment Container is a ",(0,o.mdx)("a",{parentName:"p",href:"https://reactjs.org/docs/higher-order-components.html"},"higher-order component")," that allows components to specify their data requirements. A container does not directly fetch data, but instead declares a ",(0,o.mdx)("em",{parentName:"p"},"specification")," of the data needed for rendering, and then Relay will guarantee that this data is available ",(0,o.mdx)("em",{parentName:"p"},"before")," rendering occurs."),(0,o.mdx)("p",null,"Table of Contents:"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#createfragmentcontainer"},(0,o.mdx)("inlineCode",{parentName:"a"},"createFragmentContainer"))),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#example"},"Example")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#container-composition"},"Container Composition")),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("a",{parentName:"li",href:"#rendering-containers"},"Rendering Containers"))),(0,o.mdx)("h2",{id:"createfragmentcontainer"},(0,o.mdx)("inlineCode",{parentName:"h2"},"createFragmentContainer")),(0,o.mdx)("p",null,(0,o.mdx)("inlineCode",{parentName:"p"},"createFragmentContainer")," has the following signature:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"createFragmentContainer(\n  component: ReactComponentClass,\n  fragmentSpec: {[string]: GraphQLTaggedNode},\n): ReactComponentClass;\n")),(0,o.mdx)("h3",{id:"arguments"},"Arguments"),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"component"),": The React Component ",(0,o.mdx)("em",{parentName:"li"},"class")," of the component requiring the fragment data."),(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"fragmentSpec"),": Specifies the data requirements for the Component via a GraphQL fragment. The required data will be available on the component as props that match the shape of the provided fragment. ",(0,o.mdx)("inlineCode",{parentName:"li"},"fragmentSpec")," should be an object whose keys are prop names and values are ",(0,o.mdx)("inlineCode",{parentName:"li"},"graphql")," tagged fragments. Each key specified in this object will correspond to a prop available to the resulting Component.",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("strong",{parentName:"li"},"Note:")," ",(0,o.mdx)("inlineCode",{parentName:"li"},"relay-compiler")," enforces fragments to be named as ",(0,o.mdx)("inlineCode",{parentName:"li"},"<FileName>_<propName>"),".")))),(0,o.mdx)("h3",{id:"available-props"},"Available Props"),(0,o.mdx)("p",null,"The Component resulting from ",(0,o.mdx)("inlineCode",{parentName:"p"},"createFragmentContainer")," will receive the following ",(0,o.mdx)("inlineCode",{parentName:"p"},"props"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre"},"\ntype Props = {\n  relay: {\n    environment: Environment,\n  },\n  // Additional props as specified by the fragmentSpec\n}\n")),(0,o.mdx)("ul",null,(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"relay"),":",(0,o.mdx)("ul",{parentName:"li"},(0,o.mdx)("li",{parentName:"ul"},(0,o.mdx)("inlineCode",{parentName:"li"},"environment"),": The current ",(0,o.mdx)("a",{parentName:"li",href:"/docs/v7.1.0/relay-environment"},"Relay Environment"))))),(0,o.mdx)("h2",{id:"example"},"Example"),(0,o.mdx)("p",null,"To start, let's build the plain React version of a hypothetical ",(0,o.mdx)("inlineCode",{parentName:"p"},"<TodoItem />")," component that displays the text and completion status of a ",(0,o.mdx)("inlineCode",{parentName:"p"},"Todo"),"."),(0,o.mdx)("h3",{id:"react-component"},"React Component"),(0,o.mdx)("p",null,"Here's a basic implementation of ",(0,o.mdx)("inlineCode",{parentName:"p"},"<TodoItem />")," that ignores styling in order to highlight the functionality:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"// TodoItem.js\nclass TodoItem extends React.Component {\n  render() {\n    // Expects the `item` prop to have the following shape:\n    // {\n    //   item: {\n    //     text,\n    //     isComplete\n    //   }\n    // }\n    const item = this.props.item;\n    return (\n      <View>\n        <Checkbox checked={item.isComplete} />\n        <Text>{item.text}</Text>\n      </View>\n    );\n  }\n}\n")),(0,o.mdx)("h3",{id:"data-dependencies-with-graphql"},"Data Dependencies With GraphQL"),(0,o.mdx)("p",null,"In Relay, data dependencies are described using ",(0,o.mdx)("a",{parentName:"p",href:"https://github.com/facebook/graphql"},"GraphQL"),". For ",(0,o.mdx)("inlineCode",{parentName:"p"},"<TodoItem />"),", the dependency can be expressed as follows. Note that this exactly matches the shape that the component expected for the ",(0,o.mdx)("inlineCode",{parentName:"p"},"item")," prop."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"graphql`\n  # This fragment only applies to objects of type 'Todo'.\n  fragment TodoItem_item on Todo {\n    text\n    isComplete\n  }\n`\n\n")),(0,o.mdx)("h3",{id:"defining-containers"},"Defining Containers"),(0,o.mdx)("p",null,"Given the plain React component and a GraphQL fragment, we can now define a Fragment Container to specify this component's data requirements. Let's look at the code first and then see what's happening:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"// TodoItem.js\nimport {createFragmentContainer, graphql} from 'react-relay';\n\nclass TodoItem extends React.Component // as above\n\n// Export a *new* React component that wraps the original `<TodoItem>`.\nexport default createFragmentContainer(TodoItem, {\n  // For each of the props that depend on server data, we define a corresponding\n  // key in this object. Here, the component expects server data to populate the\n  // `item` prop, so we'll specify the fragment from above at the `item` key.\n  item: graphql`\n    fragment TodoItem_item on Todo {\n      text\n      isComplete\n    }\n  `,\n});\n")),(0,o.mdx)("h2",{id:"container-composition"},"Container Composition"),(0,o.mdx)("p",null,"React and Relay support creating arbitrarily complex applications through ",(0,o.mdx)("em",{parentName:"p"},"composition"),". Larger components can be created by composing smaller components, helping us to create modular, robust applications."),(0,o.mdx)("p",null,"Let's explore how this works via a ",(0,o.mdx)("inlineCode",{parentName:"p"},"<TodoList />")," component that composes the ",(0,o.mdx)("inlineCode",{parentName:"p"},"<TodoItem />")," we defined above."),(0,o.mdx)("h3",{id:"composing-views"},"Composing Views"),(0,o.mdx)("p",null,"View composition is ",(0,o.mdx)("em",{parentName:"p"},"exactly")," what you're used to \u2014 Relay containers are just standard React components. Here's the ",(0,o.mdx)("inlineCode",{parentName:"p"},"<TodoList />")," component:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"class TodoList extends React.Component {\n  render() {\n    // Expects a `list` with a string `title`, as well as the information\n    // for the `<TodoItem>`s (we'll get that next).\n    const list = this.props.list;\n    return (\n      <View>\n        <Text>{list.title}</Text>\n        {list.todoItems.map(item => <TodoItem\n          // It works just like a React component, because it is one!\n          item={item}\n        />)}\n      </View>\n    );\n  }\n}\n")),(0,o.mdx)("h3",{id:"composing-fragments"},"Composing Fragments"),(0,o.mdx)("p",null,"Fragment composition works similarly \u2014 a parent container's fragment composes the fragment for each of its children. In this case, ",(0,o.mdx)("inlineCode",{parentName:"p"},"<TodoList />")," needs to fetch information about the ",(0,o.mdx)("inlineCode",{parentName:"p"},"Todo"),"s that are required by ",(0,o.mdx)("inlineCode",{parentName:"p"},"<TodoItem />"),"."),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-javascript"},"class TodoList extends React.Component // as above\n\nexport default createFragmentContainer(TodoList, {\n  // This `list` fragment corresponds to the prop named `list` that is\n  // expected to be populated with server data by the `<TodoList>` component.\n  list: graphql`\n    fragment TodoList_list on TodoList {\n      # Specify any fields required by '<TodoList>' itself.\n      title\n      # Include a reference to the fragment from the child component.\n      todoItems {\n        ...TodoItem_item\n      }\n    }\n  `,\n});\n")),(0,o.mdx)("p",null,"Note that when composing fragments, the type of the composed fragment must match the field on the parent in which it is embedded. For example, it wouldn't make sense to embed a fragment of type ",(0,o.mdx)("inlineCode",{parentName:"p"},"Story")," into a parent's field of type ",(0,o.mdx)("inlineCode",{parentName:"p"},"User"),". Relay and GraphQL will provide helpful error messages if you get this wrong (and if they aren't helpful, let us know!)."),(0,o.mdx)("h3",{id:"passing-arguments-to-a-fragment"},"Passing Arguments to a Fragment"),(0,o.mdx)("h4",{id:"argumentdefinitions"},(0,o.mdx)("inlineCode",{parentName:"h4"},"@argumentDefinitions")),(0,o.mdx)("p",null,"When defining a fragment, you can use the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/v7.1.0/graphql-in-relay#argumentdefinitions"},(0,o.mdx)("inlineCode",{parentName:"a"},"@argumentDefinitions"))," directive to specify any arguments, with potentially default values, that the fragment expects."),(0,o.mdx)("p",null,"For example, let's redefine our ",(0,o.mdx)("inlineCode",{parentName:"p"},"TodoList_list")," fragment to take some arguments using ",(0,o.mdx)("inlineCode",{parentName:"p"},"@argumentDefinitions"),":"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},'fragment TodoList_list on TodoList @argumentDefinitions(\n  count: {type: "Int", defaultValue: 10},  # Optional argument\n  userID: {type: "ID"},                    # Required argument\n) {\n  title\n  todoItems(userID: $userID, first: $count) {  # Use fragment arguments here as variables\n    ...TodoItem_item\n  }\n}\n')),(0,o.mdx)("p",null,"Any arguments defined inside ",(0,o.mdx)("inlineCode",{parentName:"p"},"@argumentDefinitions")," will be local variables available inside the fragment's scope. However, a fragment can also reference global variables that were defined in the root query."),(0,o.mdx)("h4",{id:"arguments-1"},(0,o.mdx)("inlineCode",{parentName:"h4"},"@arguments")),(0,o.mdx)("p",null,"In order to pass arguments to a fragment that has ",(0,o.mdx)("inlineCode",{parentName:"p"},"@argumentDefinitions"),", you need to use the ",(0,o.mdx)("a",{parentName:"p",href:"/docs/v7.1.0/graphql-in-relay#arguments"},(0,o.mdx)("inlineCode",{parentName:"a"},"@arguments"))," directive."),(0,o.mdx)("p",null,"Following our ",(0,o.mdx)("inlineCode",{parentName:"p"},"TodoList_list")," example, we would pass arguments to the fragment like so:"),(0,o.mdx)("pre",null,(0,o.mdx)("code",{parentName:"pre",className:"language-graphql"},"query TodoListQuery($count: Int, $userID: ID) {\n  ...TodoList_list @arguments(count: $count, userID: $userID) # Pass arguments here\n}\n")),(0,o.mdx)("h2",{id:"rendering-containers"},"Rendering Containers"),(0,o.mdx)("p",null,"As we've learned, Relay fragment containers only declare data requirements as GraphQL fragments. In order to actually fetch and render the specified data, we need to use a ",(0,o.mdx)("inlineCode",{parentName:"p"},"QueryRenderer")," component to render a root query and any fragment containers included within. Please refer to our ",(0,o.mdx)("a",{parentName:"p",href:"/docs/v7.1.0/query-renderer"},(0,o.mdx)("inlineCode",{parentName:"a"},"QueryRenderer"))," docs for more details."))}u.isMDXComponent=!0}}]);