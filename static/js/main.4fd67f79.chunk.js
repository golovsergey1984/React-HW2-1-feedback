(this["webpackJsonphw-02-feedback"]=this["webpackJsonphw-02-feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={title:"Feedback_title__1lDW_",msg:"Feedback_msg__22k2d",buttonGood:"Feedback_buttonGood__1Y1QW",buttonNeutral:"Feedback_buttonNeutral__1BRos",buttonBad:"Feedback_buttonBad__3qRTJ",button:"Feedback_button__39SWG",boild:"Feedback_boild__3ShYq"}},10:function(e,t,a){e.exports=a(15)},15:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(3),r=a.n(o),c=a(4),u=a(5),i=a(6),b=a(8),s=a(7),d=a(9),m=a(1),E=a.n(m),p=function(e){var t=e.good,a=e.neutral,o=e.bad,r=e.total,c=e.positivePercentage;return e.isOpen?l.a.createElement(n.Fragment,null,l.a.createElement("ul",null,l.a.createElement("li",null,"Good: ",t),l.a.createElement("li",null,"Neutral: ",a),l.a.createElement("li",null," Bad: ",o),l.a.createElement("li",{className:E.a.boild},"Total: ",r),l.a.createElement("li",{className:E.a.boild},"Positive feedback: ",c))):null},f=function(e){var t=e.onLeaveFeedback;return l.a.createElement(n.Fragment,null,l.a.createElement("button",{type:"button",name:"good",className:E.a.buttonGood+" "+E.a.button,onClick:t},"Good"),l.a.createElement("button",{type:"button",name:"neutral",className:E.a.buttonNeutral+" "+E.a.button,onClick:t},"Neutral"),l.a.createElement("button",{type:"button",name:"bad",className:E.a.buttonBad+" "+E.a.button,onClick:t},"Bad"))},k=function(e){return l.a.createElement("section",null,l.a.createElement("p",{className:E.a.title},e.title),l.a.createElement("div",null,e.children))},_=function(e){return e.isOpen?null:l.a.createElement("div",null,l.a.createElement("p",{className:E.a.title+" "+E.a.msg},e.message))},g=function(e){function t(){var e,a;Object(u.a)(this,t);for(var n=arguments.length,l=new Array(n),o=0;o<n;o++)l[o]=arguments[o];return(a=Object(b.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(l)))).state={good:0,neutral:0,bad:0},a.onLeaveFeedback=function(e){var t=e.target.name;a.setState((function(e,a){return Object(c.a)({},t,e[t]+a.step)}))},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,o=e.bad,r=function(e,t,a){return e+t+a}(t,a,o),c=function(e,t){return Math.round(e/t*100)+"%"}(t,r),u=function(e){return e>0}(r);return l.a.createElement(n.Fragment,null,l.a.createElement(k,{title:"Please Leave your feedback"},l.a.createElement(f,{onLeaveFeedback:this.onLeaveFeedback})),l.a.createElement(k,{title:"Statistics"},l.a.createElement(p,{good:t,neutral:a,bad:o,total:r,positivePercentage:c,isOpen:u})),l.a.createElement(_,{message:"No feedback given",isOpen:u}))}}]),t}(n.Component);g.defaultProps={step:1};var v=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(g,null))};r.a.render(l.a.createElement(v,null),document.getElementById("root"))}},[[10,1,2]]]);
//# sourceMappingURL=main.4fd67f79.chunk.js.map