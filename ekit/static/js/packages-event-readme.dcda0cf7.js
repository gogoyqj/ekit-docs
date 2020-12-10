(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./packages/event-center/lib/index.js":function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var r=t("./node_modules/tslib/tslib.es6.js").__importDefault(t("./packages/event-center/node_modules/eventemitter3/index.js"));n.default=new r.default},"./packages/event/README.mdx":function(e,n,t){"use strict";t.r(n),t.d(n,"default",(function(){return f}));var r=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),a=t("./node_modules/react/index.js"),s=t.n(a),o=t("./node_modules/@mdx-js/react/dist/esm.js"),p=t("./node_modules/docz/dist/index.esm.js"),c=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),i=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createClass.js"),l=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/inherits.js"),b=t("./node_modules/babel-preset-react-app/node_modules/@babel/runtime/helpers/esm/createSuper.js"),u=t("./packages/event-center/lib/index.js"),m=t.n(u);"undefined"!==typeof EventCenter&&EventCenter&&EventCenter===Object(EventCenter)&&Object.isExtensible(EventCenter)&&Object.defineProperty(EventCenter,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"EventCenter",filename:"packages/event/src/event.ts"}}),"undefined"!==typeof IEventWrapperProps&&IEventWrapperProps&&IEventWrapperProps===Object(IEventWrapperProps)&&Object.isExtensible(IEventWrapperProps)&&Object.defineProperty(IEventWrapperProps,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"IEventWrapperProps",filename:"packages/event/src/EventWrapper.tsx"}});var d=function(e){Object(l.a)(t,e);var n=Object(b.a)(t);function t(e){var r;return Object(c.a)(this,t),(r=n.call(this,e)).observerList=void 0,r.on=void 0,r.once=void 0,r.emit=void 0,r.observerList=[],r.on=function(e,n){m.a.on(e,n);var t=function(){return m.a.removeListener(e,n)};return r.observerList.push(t),t},r.once=function(e,n){m.a.once(e,n);var t=function(){return m.a.removeListener(e,n)};return r.observerList.push(t),t},r.emit=function(e,n){m.a.emit(e,n)},r}return Object(i.a)(t,[{key:"componentWillUnmount",value:function(){this.observerList.forEach((function(e){return e()}))}},{key:"render",value:function(){var e=this.props,n=e.Cp,t=e.originProps;return s.a.createElement(n,Object.assign({},t,{on:this.on,once:this.once,emit:this.emit}))}}]),t}(s.a.PureComponent);function v(e){return function(n){return s.a.createElement(d,{Cp:e,originProps:n})}}"undefined"!==typeof d&&d&&d===Object(d)&&Object.isExtensible(d)&&Object.defineProperty(d,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"EventWrapper",filename:"packages/event/src/EventWrapper.tsx"}}),v&&v===Object(v)&&Object.isExtensible(v)&&Object.defineProperty(v,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"EventWrapperDecorator",filename:"packages/event/src/EventWrapper.tsx"}});var j={};function f(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object.assign({},j,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h1",{id:"event"},"Event"),Object(o.b)("p",null,"\u89c2\u5bdf\u8005\u6a21\u5f0f\u5c01\u88c5\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{}),"npm i -S @ekit/event\n")),Object(o.b)("p",null,"\u6240\u6709\u4e8b\u4ef6\u5171\u4eab\u4e00\u4e2a\u89c2\u5bdf\u8005\u6a21\u5f0f\uff0c\u6240\u4ee5\u8bf7\u786e\u4fdd\u4e8b\u4ef6\u540d\u547d\u540d\u552f\u4e00\u6027\uff0c\u5efa\u8bae\u4f7f\u7528:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"e:moduleName.eventName\n")),Object(o.b)("p",null,"\u4f8b\u5982:"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-shell"}),"e:User.login\ne:User.logout\n")),Object(o.b)("h2",{id:"2-api"},"2. API"),Object(o.b)("h2",{id:"--21-useevent"},"- 2.1 useEvent"),Object(o.b)("p",null,"\u4f7f\u7528 useEvent Hooks\uff0c\u5b9e\u73b0\u4e86 Emit & Callback \u7c7b\u578b\u7684\u6253\u901a\uff0c\u4ee5\u53ca\u4e8b\u4ef6\u7684\u81ea\u52a8\u89e3\u9664\u7ed1\u5b9a\u3002"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import { useEvent } from '@ekit/event';\n\n...\nconst [emit, off] = useEvent('e:eventName', callback);\n...\n")),Object(o.b)("h2",{id:"--22-eventwrapper"},"- 2.2. EventWrapper"),Object(o.b)("p",null,"\u5bf9\u4e8e Class \u7ec4\u4ef6\u4f7f\u7528\u7684\u88c5\u9970\u5668\u3002"),Object(o.b)("h3",{id:"eventwrapper-props"},"EventWrapper Props"),Object(o.b)(p.d,{of:d,mdxType:"Props"}),Object(o.b)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),Object(o.b)("pre",null,Object(o.b)("code",Object.assign({parentName:"pre"},{className:"language-ts"}),"import React from 'react';\nimport EventWrapperDecorator, { EventCenter, IEventWrapperProps } from '@ekit/event';\n\n@EventWrapperDecorator\nclass A extends React.Component<{} & IEventWrapperProps> {\n  public constructor(props) {\n    super(props);\n    props.on('LOAD', () => console.log('load'));\n  }\n\n  public componentDidMount() {\n    this.props.emit('LOAD');\n    // or \u5168\u5c40\u5e7f\u64ad\n    EventCenter.emit('LOAD');\n  }\n\n  public render() {\n    return null;\n  }\n}\n")))}f&&f===Object(f)&&Object.isExtensible(f)&&Object.defineProperty(f,"__filemeta",{enumerable:!0,configurable:!0,value:{name:"MDXContent",filename:"packages/event/README.mdx"}}),f.isMDXComponent=!0}}]);
//# sourceMappingURL=packages-event-readme.fd34d535cd7184f1a80b.js.map