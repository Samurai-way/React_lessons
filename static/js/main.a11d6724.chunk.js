(this["webpackJsonpit-incubator-todolist-ts"]=this["webpackJsonpit-incubator-todolist-ts"]||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),o=n(5),i=n.n(o),r=(n(12),n(6)),l=n(2);n(13);function u(e){var t=function(){i&&e.addTasks(i),r("")},n=Object(a.useState)(""),o=Object(l.a)(n,2),i=o[0],r=o[1],u=e.tasks.map((function(t){return c.a.createElement("li",{key:t.id},c.a.createElement("input",{type:"checkbox",checked:e.tasks[0].isDone}),c.a.createElement("span",null,e.tasks[0].title),c.a.createElement("button",{onClick:function(){return e.removeTask(t.id)}}," Delete"))}));return c.a.createElement("div",null,c.a.createElement("h3",null,e.title),c.a.createElement("div",null,c.a.createElement("input",{onKeyDown:function(e){"Enter"===e.key&&t()},value:i,onChange:function(e){return r(e.currentTarget.value)}}),c.a.createElement("button",{onClick:t},"+")),c.a.createElement("ul",null,u),c.a.createElement("div",null,c.a.createElement("button",{onClick:function(){return e.changeFilter("all")}},"All"),c.a.createElement("button",{onClick:function(){return e.changeFilter("active")}},"Active"),c.a.createElement("button",{onClick:function(){return e.changeFilter("completed")}},"Completed"),c.a.createElement("p",null,"\u0425\u0430\u0439!")))}var s=n(16);var m=function(){var e,t=Object(a.useState)([{id:Object(s.a)(),title:"CSS",isDone:!1},{id:Object(s.a)(),title:"JS",isDone:!0},{id:Object(s.a)(),title:"ReactJS",isDone:!1}]),n=Object(l.a)(t,2),o=n[0],i=n[1],m=Object(a.useState)("all"),d=Object(l.a)(m,2),f=d[0],b=d[1];switch(console.log(),f){case"completed":e=o.filter((function(e){return e.isDone}));break;case"active":e=o.filter((function(e){return!e.isDone}));break;default:e=o}return c.a.createElement("div",{className:"App"},c.a.createElement(u,{title:"What to learn",tasks:e,removeTask:function(e){i(o.filter((function(t){return t.id!==e})))},changeFilter:function(e){b(e)},addTasks:function(e){i([].concat(Object(r.a)(o),[{id:Object(s.a)(),title:e,isDone:!1}]))}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(m,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},7:function(e,t,n){e.exports=n(14)}},[[7,1,2]]]);
//# sourceMappingURL=main.a11d6724.chunk.js.map