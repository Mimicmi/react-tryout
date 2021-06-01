(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var a=n(0),s=n.n(a),o=n(21),c=n.n(o),r=(n(29),n(15)),l=n(24),i=n(9),d=n(10),m=n(12),u=n(11),p=n(13),j=n(2),b=n(8),h=n(1),f=function(t){Object(m.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={completed:t.props.task.completed},t.toggleCompleted=function(){t.setState((function(t){return{completed:!t.completed}})),t.props.onToggleCompleted(t.props.task.id)},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return Object(h.jsxs)("li",{className:"list-group-item "+(this.state.completed?"bg-success text-white":null),children:[this.props.task.name,Object(h.jsx)("button",{className:"btn btn-sm btn-outline-success float-end "+(this.state.completed?"btn-outline-light":null),onClick:function(){return t.toggleCompleted()},children:Object(h.jsx)(b.a,{})})]})}}]),n}(s.a.Component),O=function(t){var e,n=t.tasks,a=t.match,o=t.onToggleCompleted;switch(a.params.filter){case"completed":e=n.filter((function(t){return t.completed}));break;default:e=n}return 0===e.length?Object(h.jsxs)(s.a.Fragment,{children:[Object(h.jsx)("h1",{className:"m-3",children:"My to-do-list app"}),Object(h.jsx)("li",{className:"list-group-item",children:"No task to display here"})]}):Object(h.jsxs)(s.a.Fragment,{children:[Object(h.jsx)("h1",{className:"m-3",children:"My to-do-list app"}),Object(h.jsx)("ul",{className:"list-group m-3",children:e.map((function(t){return Object(h.jsx)(f,{task:t,onToggleCompleted:o},t.id)}))})]})},g=function(t){var e=t.onDeleteCompleted;return Object(h.jsxs)("footer",{className:"p-3 bg-light",children:[Object(h.jsxs)("div",{className:"btn-group",children:[Object(h.jsx)(p.b,{to:"/",className:"btn btn-outline-dark",exact:!0,children:Object(h.jsx)(b.c,{})}),Object(h.jsx)(p.b,{to:"/completed",className:"btn btn-outline-dark",children:Object(h.jsx)(b.b,{})}),Object(h.jsx)(p.b,{to:"/add-task",className:"btn btn-outline-dark",children:Object(h.jsx)(b.d,{})})]}),Object(h.jsx)("button",{className:"btn btn-sm btn-outline-dark float-end",onClick:e,children:Object(h.jsx)(b.e,{})})]})},k=function(t){Object(m.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).handleSubmit=function(e){e.preventDefault(),t.props.onAddTask(t.newTask.value),t.props.history.push("/")},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h1",{className:"m-3",children:"New Task"}),Object(h.jsx)("div",{className:"card m-3",children:Object(h.jsxs)("form",{className:"card m-3",onSubmit:function(e){return t.handleSubmit(e)},children:[Object(h.jsxs)("div",{className:"form-group m-2",children:[Object(h.jsx)("label",{htmlFor:"taskName",children:"Task Name"}),Object(h.jsx)("input",{type:"text",className:"form-control",name:"taskName",id:"taskName",required:!0,ref:function(e){return t.newTask=e}})]}),Object(h.jsx)("button",{type:"submit",className:"btn btn-primary m-2",children:"Add Task"})]})})]})}}]),n}(s.a.Component),x=[{id:"123456a",name:"Wake up",completed:!1},{id:"123456b",name:"Take a coffee",completed:!1},{id:"123456c",name:"Shower",completed:!1},{id:"123456d",name:"Breakfast",completed:!1},{id:"123456e",name:"Start working",completed:!1}],N=n(23),v=n.n(N),y=function(t){Object(m.a)(n,t);var e=Object(u.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,s=new Array(a),o=0;o<a;o++)s[o]=arguments[o];return(t=e.call.apply(e,[this].concat(s))).state={tasks:localStorage.getItem("data")?JSON.parse(localStorage.getItem("data")):x},t.onAddTask=function(e){var n={id:v.a.process(),name:e,completed:!1};t.setState((function(t){return{tasks:[].concat(Object(l.a)(t.tasks),[n])}})),setTimeout((function(){localStorage.setItem("data",JSON.stringify(t.state.tasks))}),500)},t.onToggleCompleted=function(e){var n=t.state.tasks.find((function(t){return t.id===e}));n.completed=!n.completed,t.setState((function(t){return t.tasks.map((function(t){return t.id===e?n:t}))})),localStorage.setItem("data",JSON.stringify(t.state.tasks))},t.onDeleteCompleted=function(){t.setState((function(t){return{tasks:t.tasks.filter((function(t){return!t.completed}))}})),setTimeout((function(){localStorage.setItem("data",JSON.stringify(t.state.tasks))}),500)},t.componentDidMount=function(){return console.log("ComponentDidMount"),!0},t.shouldComponentUpdate=function(){return console.log("shouldComponentUpdate"),!0},t.componentDidUpdate=function(){return console.log("componentDidUpdate"),!0},t.componentWillUnmount=function(){return console.log("componentWillUnmount"),!0},t}return Object(d.a)(n,[{key:"render",value:function(){var t=this;return Object(h.jsx)("section",{children:Object(h.jsxs)(p.a,{children:[Object(h.jsxs)(j.c,{children:[Object(h.jsx)(j.a,{path:"/add-task",render:function(e){return Object(h.jsx)(k,Object(r.a)(Object(r.a)({},e),{},{onAddTask:t.onAddTask}))}}),Object(h.jsx)(j.a,{path:"/:filter?",render:function(e){return Object(h.jsx)(O,Object(r.a)(Object(r.a)({},e),{},{tasks:t.state.tasks,onToggleCompleted:t.onToggleCompleted}))}}),Object(h.jsx)(j.a,{path:"/",component:O})]}),Object(h.jsx)(g,{onDeleteCompleted:this.onDeleteCompleted})]})})}}]),n}(s.a.Component);n(37);c.a.render(Object(h.jsx)(y,{}),document.getElementById("root"))}},[[38,1,2]]]);
//# sourceMappingURL=main.bae8d259.chunk.js.map