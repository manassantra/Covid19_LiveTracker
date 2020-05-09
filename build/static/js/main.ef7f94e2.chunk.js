(this.webpackJsonpmyapp=this.webpackJsonpmyapp||[]).push([[0],{206:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(73),o=a.n(c),u=a(6),s=a.n(u),i=a(11),l=a(74),d=a(75),m=a(83),p=a(82),f=a(223),v=a(227),h=a(224),b=a(225),E=a(9),y=a.n(E),_=a(32),C=a.n(_),g=a(33),x=a.n(g),j=function(e){var t=e.data,a=t.confirmed,n=t.recovered,c=t.deaths,o=t.lastUpdate;return a?r.a.createElement("div",{className:y.a.container},r.a.createElement(f.a,{container:!0,spacing:2,justify:"center"},r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:x()(y.a.card,y.a.infected)},r.a.createElement(h.a,null,r.a.createElement(b.a,{className:y.a.t1,gutterBottom:!0},"Infected"),r.a.createElement(b.a,{variant:"h4"},r.a.createElement(C.a,{start:0,end:a.value,duration:5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of Active Cases"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:x()(y.a.card,y.a.recovered)},r.a.createElement(h.a,null,r.a.createElement(b.a,{className:y.a.t2,gutterBottom:!0},"Recovered"),r.a.createElement(b.a,{variant:"h4"},r.a.createElement(C.a,{start:0,end:n.value,duration:5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of Recovered People"))),r.a.createElement(f.a,{item:!0,component:v.a,xs:12,md:3,className:x()(y.a.card,y.a.deaths)},r.a.createElement(h.a,null,r.a.createElement(b.a,{className:y.a.t3,gutterBottom:!0},"Deaths"),r.a.createElement(b.a,{variant:"h4"},r.a.createElement(C.a,{start:0,end:c.value,duration:5,separator:","})),r.a.createElement(b.a,{color:"textSecondary"},new Date(o).toDateString()),r.a.createElement(b.a,{variant:"body2"},"Number of Deaths"))))):r.a.createElement(f.a,{container:!0,spacing:2,justify:"center"},r.a.createElement("h4",{className:y.a.t3},"No Internet Connection..."))},w=a(31),N=a(34),O=a.n(N),k="https://covid19.mathdro.id/api",D=function(){var e=Object(i.a)(s.a.mark((function e(t){var a,n,r,c,o,u,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=k,t&&(a="".concat(k,"/countries/").concat(t)),e.prev=2,e.next=5,O.a.get(a);case 5:return n=e.sent,r=n.data,c=r.confirmed,o=r.recovered,u=r.deaths,i=r.lastUpdate,e.abrupt("return",{confirmed:c,recovered:o,deaths:u,lastUpdate:i});case 14:return e.prev=14,e.t0=e.catch(2),e.abrupt("return",e.t0);case 17:case"end":return e.stop()}}),e,null,[[2,14]])})));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(k,"/daily"));case 3:return t=e.sent,a=t.data,e.abrupt("return",a.map((function(e){var t=e.confirmed,a=e.deaths,n=e.reportDate;return{confirmed:t.total,deaths:a.total,date:n}})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),I=function(){var e=Object(i.a)(s.a.mark((function e(){var t,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.a.get("".concat(k,"/countries"));case 3:return t=e.sent,a=t.data.countries,e.abrupt("return",a.map((function(e){return e.name})));case 8:return e.prev=8,e.t0=e.catch(0),e.abrupt("return",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),B=a(46),J=a(81),U=a.n(J),A=function(e){var t=e.data,a=t.confirmed,c=t.recovered,o=t.deaths,u=e.country,l=Object(n.useState)([]),d=Object(w.a)(l,2),m=d[0],p=d[1];Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=p,e.next=3,S();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}));var f=a?r.a.createElement(B.a,{data:{labels:["Infected","Recovered","Deaths"],datasets:[{label:"People",backgroundColor:["rgba(0, 0, 255, 0.5)","rgba(0, 255, 0, 0.5)","rgba(255, 0, 0, 0.5)"],data:[a.value,c.value,o.value]}]},options:{legend:{display:!1},title:{display:!0,text:"Current state in ".concat(u)}}}):null,v=m.length?r.a.createElement(B.b,{data:{labels:m.map((function(e){return e.date})),datasets:[{data:m.map((function(e){return e.confirmed})),label:"Infected",borderColor:"#3333ff",fill:!0},{data:m.map((function(e){return e.deaths})),label:"Deaths",borderColor:"red",backgroundColor:"rgba (255, 0, 0, 0.5)",fill:!0}]}}):null;return r.a.createElement("div",{className:U.a.container},u?f:v)},P=a(228),Q=a(226),R=a(47),q=a.n(R),H=function(e){var t=e.handleCountryChange,a=Object(n.useState)([]),c=Object(w.a)(a,2),o=c[0],u=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(i.a)(s.a.mark((function e(){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=u,e.next=3,I();case 3:e.t1=e.sent,(0,e.t0)(e.t1);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[u]),r.a.createElement("div",{className:q.a.container},r.a.createElement(P.a,{className:q.a.formControl},r.a.createElement(Q.a,{defaultValue:"",onChange:function(e){return t(e.target.value)}},r.a.createElement("option",{value:""},"Global"),o.map((function(e,t){return r.a.createElement("option",{key:t,value:e},e)})))))},M=a(35),T=a.n(M),X=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(l.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={data:{},country:""},e.handleCountryChange=function(){var t=Object(i.a)(s.a.mark((function t(a){var n;return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,D(a);case 2:n=t.sent,e.setState({data:n,country:a});case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,D();case 2:t=e.sent,this.setState({data:t});case 4:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.data,a=e.country;return r.a.createElement("div",null,r.a.createElement(j,{className:T.a.container,data:t}),r.a.createElement(H,{className:T.a.container,handleCountryChange:this.handleCountryChange}),r.a.createElement(A,{className:T.a.container,data:t,country:a}))}}]),a}(r.a.Component);o.a.render(r.a.createElement(X,null),document.getElementById("root"))},35:function(e,t,a){e.exports={container:"App_container__q52Zj"}},47:function(e,t,a){e.exports={container:"CountryPicker_container__2XeiQ",formControl:"CountryPicker_formControl__20ohY"}},81:function(e,t,a){e.exports={container:"Charts_container__2HJFe"}},86:function(e,t,a){e.exports=a(206)},9:function(e,t,a){e.exports={container:"Cards_container__2Ueoa",card:"Cards_card__jHITb",infected:"Cards_infected__1Ag-U",recovered:"Cards_recovered__1J2di",deaths:"Cards_deaths__21STB",t1:"Cards_t1__2qEQy",t2:"Cards_t2__2rJXf",t3:"Cards_t3__1QC8M"}}},[[86,1,2]]]);
//# sourceMappingURL=main.ef7f94e2.chunk.js.map