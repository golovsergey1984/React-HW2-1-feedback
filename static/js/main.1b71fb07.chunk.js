(this["webpackJsonphw-02-feedback"]=this["webpackJsonphw-02-feedback"]||[]).push([[0],{1:function(e,t,a){e.exports={title:"Feedback_title__1lDW_",msg:"Feedback_msg__22k2d",buttonGood:"Feedback_buttonGood__1Y1QW",buttonNeutral:"Feedback_buttonNeutral__1BRos",buttonBad:"Feedback_buttonBad__3qRTJ",button:"Feedback_button__39SWG",boild:"Feedback_boild__3ShYq"}},12:function(e,t,a){e.exports=a(25)},25:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(4),r=a.n(c),o=a(5),i=a(6),u=a(7),s=a(10),b=a(8),d=a(11),m=a(1),k=a.n(m),p=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,r=e.positivePercentage;return e.isOpen?l.a.createElement("ul",null,l.a.createElement("li",null,"Good: ",t),l.a.createElement("li",null,"Neutral: ",a),l.a.createElement("li",null," Bad: ",n),l.a.createElement("li",{className:k.a.boild},"Total: ",c),l.a.createElement("li",{className:k.a.boild},"Positive feedback: ",r)):null},f=function(e){var t=e.onLeaveFeedback,a=e.btnValue;return l.a.createElement(n.Fragment,null,l.a.createElement("button",{type:"button",name:a,className:k.a.button,onClick:t},a))},E=function(e){return l.a.createElement("section",null,l.a.createElement("p",{className:k.a.title},e.title),e.children)},_=function(e){return e.isOpen?null:l.a.createElement("div",null,l.a.createElement("p",{className:k.a.title+" "+k.a.msg},e.message))},g=a(9),h=a.n(g),v=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(l)))).state={good:0,neutral:0,bad:0},a.countTotalFeedback=function(e,t,a){return e+t+a},a.isOpendDetermine=function(e){return e>0},a.countPositiveFeedbackPercentage=function(e,t){return Math.round(e/t*100)+"%"},a.onLeaveFeedback=function(e){var t=e.target.name;a.setState((function(e,a){return Object(o.a)({},t,e[t]+a.step)}))},a}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.state,a=t.good,c=t.neutral,r=t.bad,o=this.countTotalFeedback.bind(this)(a,c,r),i=this.countPositiveFeedbackPercentage.bind(this)(a,o),u=this.isOpendDetermine.bind(this)(o);return l.a.createElement(n.Fragment,null,l.a.createElement(E,{title:"Please Leave your feedback"},Object.keys(this.state).map((function(t){return l.a.createElement(f,{onLeaveFeedback:e.onLeaveFeedback,btnValue:t,key:h.a.generate()})}))),l.a.createElement(E,{title:"Statistics"},l.a.createElement(p,{good:a,neutral:c,bad:r,total:o,positivePercentage:i,isOpen:u})),l.a.createElement(_,{message:"No feedback given",isOpen:u}))}}]),t}(n.Component);v.defaultProps={step:1};var F=function(){return l.a.createElement(n.Fragment,null,l.a.createElement(v,null))};r.a.render(l.a.createElement(F,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.1b71fb07.chunk.js.map