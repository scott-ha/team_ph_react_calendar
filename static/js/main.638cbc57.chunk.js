(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{49:function(e,t,n){},68:function(e,t,n){},71:function(e,t,n){"use strict";n.r(t);var a=n(3),s=n(4),c=n.n(s),r=n(31),o=n.n(r),i=n(32),l=n(15),h=n(16),u=n(18),g=n(17),j=n(33),b=function(e){Object(u.a)(n,e);var t=Object(g.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(h.a)(n,[{key:"render",value:function(){var e=this.props,t=e.range,n=e.onChange;e.onToggle;return Object(a.jsx)(j.DateRange,{ranges:t,onChange:n,moveRangeOnFirstSelection:!1})}}]),n}(s.Component),d=n(5),m=(n(49),function(e){var t=e.value,n=e.onChange;return Object(a.jsxs)("div",{className:"form",children:[Object(a.jsx)("h1",{className:"h1-tc",children:"\uc774\ub984\uacfc \uc77c\uc815\uc744 \uc785\ub825\ud574\uc8fc\uc138\uc694."}),Object(a.jsx)("br",{}),Object(a.jsx)("input",{type:"search",onChange:n,value:t})]})}),O=n(34),v=n.n(O),f=n(35),p=n.n(f),C=(n(68),n(69),n(70),function(e){Object(u.a)(n,e);var t=Object(g.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={name:"",ranges:[{startDate:Object(d.a)(new Date,2),endDate:Object(d.a)(new Date,4)}]},e.handleNameChange=function(t){e.setState({name:t.target.value})},e.handleRangeChange=function(t){var n=Object.getOwnPropertyNames(t)[0];console.log(t);var a=Number(n.charAt(n.length-1));e.setState({ranges:v()(e.state.ranges,Object(i.a)({},a-1,{startDate:{$set:t[n].startDate},endDate:{$set:t[n].endDate}}))})},e.handleCreate=function(){var t=e.state.ranges;e.setState({ranges:t.concat({startDate:Object(d.a)(new Date,7),endDate:Object(d.a)(new Date,8)})})},e.handleRemove=function(){var t=e.state.ranges;0!==t.length&&e.setState({ranges:t.slice(0,t.length-1)}),console.log(t.length-1)},e.handleSubmit=function(t){t.preventDefault();var n={name:e.state.name,ranges:e.state.ranges};p.a.post("http://localhost:3001/name",{user:n}).then((function(e){console.log(e),console.log(e.data)})),alert("name: "+n.name+"\ndate: "+JSON.stringify(n.ranges)+"\nsubmitted")},e}return Object(h.a)(n,[{key:"render",value:function(){var e=this.state,t=e.input,n=e.ranges,s=this.handleNameChange,c=this.handleRangeChange,r=this.handleSubmit,o=this.handleCreate,i=this.handleRemove;return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsx)(m,{value:t,onChange:s}),Object(a.jsx)(b,{range:n,onChange:c}),Object(a.jsxs)("div",{children:[Object(a.jsx)("button",{className:"Btn-date",onClick:o,children:"\uc77c\uc815 \ucd94\uac00"}),Object(a.jsx)("button",{className:"Btn-date",onClick:i,children:"\uc77c\uc815 \uc0ad\uc81c"}),Object(a.jsx)("form",{onSubmit:r,children:Object(a.jsx)("button",{className:"Btn-complete",type:"submit",children:"\uc644\ub8cc"})})]})]})}}]),n}(s.Component)),x=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,72)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,c=t.getLCP,r=t.getTTFB;n(e),a(e),s(e),c(e),r(e)}))};o.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(C,{})}),document.getElementById("root")),x()}},[[71,1,2]]]);
//# sourceMappingURL=main.638cbc57.chunk.js.map