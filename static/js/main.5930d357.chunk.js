(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{60:function(e,t,a){e.exports=a(72)},72:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(9),c=a.n(r),l=a(118),i=a(113),s=a(38),d=a(116),u=a(12),m=a(39),h=a(26),p=a(14),g=a(31),f=a(32),b=a(37),k=a(47),v=a.n(k),E=a(4),S=a(114),O=a(112),y=a(103),j=a(107),C=a(108),N=a(110),x=a(111),I=a(117),J=a(109),D=a(48),w=a.n(D),A=function(e){function t(){return Object(h.a)(this,t),Object(g.a)(this,Object(f.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,a=e.todos,n=e.handleChecked,r=e.handleDelete;return o.a.createElement(y.a,null,a.map((function(e,a){return o.a.createElement(j.a,{dense:!0,button:!0,role:void 0,key:a,onClick:function(){return n(a)},className:"".concat(a%2===0?t.even:null," ").concat(!0===e.checked?t.checked:null)},o.a.createElement(C.a,null,o.a.createElement(I.a,{edge:"start",tabIndex:-1,disableRipple:!0,color:"primary",checked:e.checked})),o.a.createElement(N.a,{primary:e.text,className:!0===e.checked?t.strikeThrough:null}),o.a.createElement(x.a,null,o.a.createElement(J.a,{edge:"end",onClick:function(){return r(e)},className:!0===e.checked?t.checked:null},o.a.createElement(w.a,null))))})))}}]),t}(n.Component),F=Object(E.a)((function(e){return{strikeThrough:{textDecoration:"line-through"},even:{backgroundColor:"rgba(0, 0, 0, 0.02)"},checked:{opacity:.4}}}))(A),B=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(g.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(o)))).state={data:{input:""},todos:[]},a.handleChange=function(e){var t=e.target,n=Object(m.a)({},a.state.data);n[t.name]=t.value,a.setState({data:n}),localStorage.setItem("input",JSON.stringify(n))},a.handleSubmit=function(e){e.preventDefault();var t=Object(m.a)({},a.state.data),n=Object(u.a)(a.state.todos),o={id:v()(),text:t.input,checked:!1};n.push(o),t.input="",localStorage.removeItem("input"),a.setState({data:t,todos:n}),localStorage.setItem("todos",JSON.stringify(n))},a.handleChecked=function(e){var t=Object(u.a)(a.state.todos);!1===t[e].checked?t[e].checked=!0:t[e].checked=!1,a.setState({todos:t}),localStorage.setItem("todos",JSON.stringify(t))},a.handleDelete=function(e){var t=a.state.todos.filter((function(t){return t.id!==e.id}));a.setState({todos:t}),localStorage.setItem("todos",JSON.stringify(t))},a}return Object(b.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=localStorage.getItem("todos"),t=JSON.parse(e),a=localStorage.getItem("input"),n=JSON.parse(a);return t&&this.setState({todos:t}),n&&this.setState({data:n}),null}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.data,r=t.todos;return o.a.createElement(n.Fragment,null,o.a.createElement("form",{className:e.form,autoComplete:"off",onSubmit:this.handleSubmit},o.a.createElement(d.a,{display:"flex"},o.a.createElement(S.a,{name:"input",placeholder:"E.g. Adopt a dog",variant:"outlined",className:e.textField,onChange:this.handleChange,value:a.input}),o.a.createElement(O.a,{variant:"contained",size:"large",color:"primary",disableElevation:!0,className:e.button,type:"submit",disabled:0===a.input.length},"Add"))),o.a.createElement(F,{todos:r,handleChecked:this.handleChecked,handleDelete:this.handleDelete}))}}]),t}(n.Component),M=Object(E.a)((function(e){return{form:{marginBottom:36},textField:{width:"100%",marginRight:12},button:{width:120}}}))(B);c.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(l.a,null),o.a.createElement((function(){return o.a.createElement(i.a,{maxWidth:"sm"},o.a.createElement(d.a,{my:4},o.a.createElement(s.a,{variant:"h4",component:"h1",gutterBottom:!0},"Mylist Cyrus"),o.a.createElement(s.a,{component:"p",gutterBottom:!0},"Add a todo"),o.a.createElement(M,null)))}),null)),document.querySelector("#root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.5930d357.chunk.js.map