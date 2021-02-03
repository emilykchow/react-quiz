(this.webpackJsonpapp=this.webpackJsonpapp||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},16:function(e,t,a){},18:function(e,t,a){"use strict";a.r(t);var n,c=a(0),s=a(1),i=a.n(s),r=a(7),o=a.n(r),l=(a(14),a(2)),u=(a(15),a(16),function(e){e.onQuizStart,e.toggleTheme;var t=e.onChangeThemeName,a=e.togglingTheme;return Object(c.jsxs)("div",{className:"start-wrapper",children:[Object(c.jsx)("div",{children:Object(c.jsxs)("button",{className:"button is-info2 is-medium toggle-btn",onClick:a,children:["Change Theme ",t]})}),Object(c.jsx)("div",{className:"card",children:Object(c.jsx)("div",{className:"card-content",children:Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("h1",{className:"start-h1",children:"Start the quiz"}),Object(c.jsx)("p",{children:"Good Luck!"}),Object(c.jsx)("br",{}),Object(c.jsx)("br",{}),Object(c.jsx)("button",{className:"button is-info2 is-medium",children:"Start"})]})})})]})}),j=a(8),h=function(e){var t=e.data,a=e.onAnswerUpdate,n=e.numberOfQuestions,i=e.activeQuestion,r=e.onSetActiveQuestion,o=e.onSetStep,u=e.toggleTheme,h=Object(s.useState)(""),d=Object(l.a)(h,2),b=d[0],m=d[1],O=Object(s.useState)(""),g=Object(l.a)(O,2),f=g[0],x=g[1],p=Object(s.useRef)();Object(s.useEffect)((function(){var e=p.current.querySelector("input:checked");e&&(e.checked=!1)}),[t]);var v=function(e){m(e.target.value),f&&x("")};return Object(c.jsxs)("div",{className:"question-wrapper",children:[Object(c.jsx)("div",{children:Object(c.jsx)("button",{className:"button is-info2 is-medium toggle-btn",onClick:u,children:"Toggle"})}),Object(c.jsx)("div",{className:"card",children:Object(c.jsx)("div",{className:"card-content",children:Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("h2",{className:"mb-5",children:t.question}),Object(c.jsx)("div",{className:"control",ref:p,children:t.choices.map((function(e,t){return Object(c.jsxs)("label",{className:"radio has-background-light",children:[Object(c.jsx)("input",{type:"radio",name:"answer",value:e,onChange:v}),e]},t)}))}),f&&Object(c.jsx)("div",{className:"has-text-danger",children:f}),Object(c.jsx)("button",{className:"button is-link is-medium is-fullwidth mt-4 next-btn",onClick:function(e){if(""===b)return x("please enter value");a((function(e){return[].concat(Object(j.a)(e),[{q:t.question,a:b}])})),m(""),i<n-1?r(i+1):o(3)},children:"Next"})]})})})]})},d=function(e){return e<60?e<10?"0".concat(e,"s"):"".concat(e,"s"):Math.floor(e/60)+"m"+e%60+"s"},b=function(e){var t=e.results,a=e.data,n=e.onReset,i=e.onAnswerUpdate,r=e.time,o=e.toggleTheme,u=Object(s.useState)(""),j=Object(l.a)(u,2),h=j[0],b=j[1];return Object(s.useEffect)((function(){var e=0;t.forEach((function(t,n){t.a===a[n].answer&&e++})),b(e)}),[]),Object(c.jsxs)("div",{className:"end-wrapper",children:[Object(c.jsx)("div",{children:Object(c.jsx)("button",{className:"button is-info2 is-medium toggle-btn",onClick:o,children:"Toggle"})}),Object(c.jsx)("div",{className:"card",children:Object(c.jsx)("div",{className:"card-content",children:Object(c.jsxs)("div",{className:"content",children:[Object(c.jsx)("h1",{children:"Results:"}),Object(c.jsxs)("p",{children:["You scored ",h," out of ",a.length]}),Object(c.jsxs)("p",{children:[" ",Math.floor(h/a.length*100)," %"]}),Object(c.jsxs)("p",{children:[" The time you took to finish the quiz: ",d(r)]}),Object(c.jsx)("button",{className:"button is-primary",onClick:n,children:" Try Again"}),Object(c.jsx)("button",{className:"button is-link",onClick:i,children:" Check Answer"})]})})})]})},m=function(e){var t=e.onClose,a=e.results,n=e.data;return Object(c.jsxs)("div",{className:"modal is-active",children:[Object(c.jsx)("div",{className:"modal-background",onClick:t}),Object(c.jsxs)("div",{className:"modal-card",children:[Object(c.jsxs)("header",{className:"modal-card-head",children:[Object(c.jsx)("p",{className:"modal-card-title",children:"Your answers"}),Object(c.jsx)("button",{className:"delete",onClick:t})]}),Object(c.jsx)("section",{className:"modal-card-body content",children:Object(c.jsx)("ul",{children:a.map((function(e,t){return Object(c.jsxs)("li",{className:"mb-6",children:[Object(c.jsx)("p",{children:Object(c.jsx)("strong",{children:e.q})}),Object(c.jsxs)("p",{className:e.a===n[t].answer?"has-background-success has-text-white p-2":"has-background-danger has-text-white p-2",children:["Your answer: ",e.a]}),e.a!==n[t].answer&&Object(c.jsxs)("p",{className:"has-background-link has-text-white p-2",children:["Correct answer: ",n[t].answer]})]},t)}))})})]})]})},O=a(4);var g=function(){var e=Object(s.useState)(1),t=Object(l.a)(e,2),a=t[0],i=t[1],r=Object(s.useState)(0),o=Object(l.a)(r,2),j=o[0],d=o[1],g=Object(s.useState)([]),f=Object(l.a)(g,2),x=f[0],p=f[1],v=Object(s.useState)(0),N=Object(l.a)(v,2),S=N[0],k=N[1],w=Object(s.useState)(function(){var e="light-theme";return localStorage.getItem("theme")&&(e=localStorage.getItem("theme")),e}()),C=Object(l.a)(w,2),T=C[0],q=C[1],B=Object(s.useState)(),z=Object(l.a)(B,2),A=z[0],W=z[1],y=Object(s.useState)(!1),I=Object(l.a)(y,2),E=I[0],Q=I[1];Object(s.useEffect)((function(){document.documentElement.className=T,localStorage.setItem("theme",T)}),[T]);var L=function(){W("Dark"===A?"Light":"Dark")},M=function(){q("light-theme"===T?"dark-theme":"light-theme")};return Object(s.useEffect)((function(){3===a&&clearInterval(n)}),[a]),Object(c.jsxs)("div",{className:"App",children:[1===a&&Object(c.jsx)(u,{onQuizStart:function(){i(2),n=setInterval((function(){k((function(e){return e+1}))}),1e3)},toggleTheme:M,onChangeThemeName:A,togglingTheme:function(){M(),L()}}),2===a&&Object(c.jsx)(h,{data:O.data[j],onAnswerUpdate:p,numberOfQuestions:O.data.length,activeQuestion:j,onSetActiveQuestion:d,onSetStep:i,toggleTheme:M}),3===a&&Object(c.jsx)(b,{results:x,data:O.data,onReset:function(){d(0),p([]),i(2),k(0),n=setInterval((function(){k((function(e){return e+1}))}),1e3)},onAnswerUpdate:function(){return Q(!0)},time:S,toggleTheme:M}),E&&Object(c.jsx)(m,{onClose:function(){return Q(!1)},results:x,data:O.data,toggleTheme:M})]})},f=(a(17),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,19)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,s=t.getLCP,i=t.getTTFB;a(e),n(e),c(e),s(e),i(e)}))});o.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(g,{})}),document.getElementById("root")),f()},4:function(e){e.exports=JSON.parse('{"data":[{"question":"What is the capital of Croatia ?","choices":["Split","Osijek","Zagreb","Rijeka"],"answer":"Zagreb"},{"question":"What is the capital of Slovenia ?","choices":["Celje","Ljubljana","Maribor","Koper"],"answer":"Ljubljana"},{"question":"What is the capital of Austria ?","choices":["Graz","Salzburg","Innsbruck","Vienna"],"answer":"Vienna"},{"question":"What is the capital of Serbia ?","choices":["Belgrade","Novi Sad","Ni\u0161","Subotica"],"answer":"Belgrade"},{"question":"What is the capital of Bosnia and Herzegovina ?","choices":["Mostar","Sarajevo","Banja Luka","Tuzla"],"answer":"Sarajevo"},{"question":"What is the capital of Hungary ?","choices":["Zalaegerszeg","Eger","Szeged","Budapest"],"answer":"Budapest"},{"question":"What is the capital of Slovakia ?","choices":["Ko\u0161ice","Nitra","Bratislava","Poprad"],"answer":"Bratislava"},{"question":"What is the capital of Romania ?","choices":["Bucharest","Craiova","Constanta","Braila"],"answer":"Bucharest"},{"question":"What is the capital of Germany ?","choices":["Wolfsburg","Munich","Berlin","Frankfurt"],"answer":"Berlin"}]}')}},[[18,1,2]]]);
//# sourceMappingURL=main.a76f7cfc.chunk.js.map