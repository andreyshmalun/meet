(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{31:function(e,t,n){},50:function(e,t,n){},52:function(e,t,n){"use strict";n.r(t);var a=n(24),r=n.n(a),s=(n(31),n(2)),o=n(3),c=n(5),i=n(4),l=n(1),u=n(0),d=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={detailsVisible:!1},e.handleDetailsToggled=function(){e.state.detailsVisible?e.setState({detailsVisible:!1}):e.setState({detailsVisible:!0})},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.event;return Object(u.jsxs)("div",{className:"event",children:[Object(u.jsx)("h2",{className:"summary",children:e.summary}),Object(u.jsxs)("p",{className:"information",children:[e.start.dateTime," ",e.start.time," ",e.location]}),this.state.detailsVisible?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsxs)("div",{className:"details",children:[Object(u.jsx)("h3",{className:"details-title",children:"About event:"}),Object(u.jsx)("a",{href:e.htmlLink,className:"details-link",children:"See details on Google Calendar"}),Object(u.jsx)("p",{className:"details-description",children:e.description})]}),Object(u.jsx)("button",{className:"hide-details",onClick:this.handleDetailsToggled,children:"hide details"})]}):Object(u.jsx)("button",{className:"show-details",onClick:this.handleDetailsToggled,children:"show details"})]})}}]),n}(l.Component),h=d,m=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){return Object(s.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(u.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(u.jsx)("li",{children:Object(u.jsx)(h,{event:e})},e.id)}))})}}]),n}(l.Component),p=m,f=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsx)("div",{className:"Alert",children:Object(u.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(l.Component),b=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="blue",a}return Object(o.a)(n)}(f),v=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(e){var a;return Object(s.a)(this,n),(a=t.call(this,e)).color="red",a}return Object(o.a)(n)}(f),j=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"There is no such city as '".concat(n,"'. Please try another city")})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t,e.props.numberOfEvents)},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this;return Object(u.jsxs)("div",{className:"CitySearch",children:[Object(u.jsx)(b,{text:this.state.infoText}),Object(u.jsx)("input",{type:"text",className:"city",placeholder:"Enter a city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(u.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(u.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(u.jsx)("li",{className:"suggestions-all",onClick:function(){return e.handleItemClicked("all")},children:Object(u.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(l.Component),g=j,O=function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32,errorText:""},e.handleInputChanged=function(t){var n=t.target.value;n<1||n>32?e.setState({numberOfEvents:n,errorText:"Enter number from 1 to 32"}):e.setState({numberOfEvents:n,errorText:""})},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"numberOfEvents",children:Object(u.jsxs)("label",{children:["Number of Events:",Object(u.jsx)("input",{type:"number",className:"number-of-events-input",min:"1",value:this.state.numberOfEvents,onChange:this.handleInputChanged})]})}),Object(u.jsx)(v,{text:this.state.errorText})]})}}]),n}(l.Component),w=O,y=n(7),x=n(8),k=n(26),T=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],S=n(14),E=n.n(S),C=n(12),N=n.n(C),Z=function(e){var t=e.map((function(e){return e.location}));return Object(k.a)(new Set(t))},I=function(){var e=Object(x.a)(Object(y.a)().mark((function e(t){var n,a,r,s;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=encodeURIComponent(t),e.next=4,fetch("https://qk1kwyhee0.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n);case 4:if((a=e.sent).ok){e.next=7;break}throw new Error("HTTP error! status: ".concat(a.status));case 7:return e.next=9,a.json();case 9:return r=e.sent,(s=r.access_token)&&localStorage.setItem("access_token",s),e.abrupt("return",s);case 15:e.prev=15,e.t0=e.catch(0),e.t0.json();case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),q=function(){var e=Object(x.a)(Object(y.a)().mark((function e(t){var n;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},L=function(){var e=Object(x.a)(Object(y.a)().mark((function e(){var t,n,a,r;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(N.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return N.a.done(),e.abrupt("return",T);case 4:return e.next=6,M();case 6:if(!(t=e.sent)){e.next=16;break}return A(),n="https://qk1kwyhee0.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+t,e.next=12,E.a.get(n);case 12:return(a=e.sent).data&&(r=Z(a.data.events),localStorage.setItem("lastEvents",JSON.stringify(a.data)),localStorage.setItem("locations",JSON.stringify(r))),N.a.done(),e.abrupt("return",a.data.events);case 16:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(x.a)(Object(y.a)().mark((function e(){var t,n,a,r,s,o;return Object(y.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,q(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,E.a.get("https://qk1kwyhee0.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return s=e.sent,o=s.data.authUrl,e.abrupt("return",window.location.href=o);case 20:return e.abrupt("return",r&&I(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=(n(50),function(e){Object(c.a)(n,e);var t=Object(i.a)(n);function n(){var e;Object(s.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:32,selectedLocation:"all"},e.updateEvents=function(t,n){var a=e.state.numberOfEvents;void 0===t&&(t=e.state.selectedLocation),L().then((function(r){var s="all"===t?r:r.filter((function(e){return e.location===t}));n=void 0===n?a:n,e.setState({events:s.slice(0,n),selectedLocation:t,numberOfEvents:n})}))},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.mounted=!0,L().then((function(t){e.mounted&&e.setState({events:t,locations:Z(t)})}))}},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state.numberOfEvents;return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsxs)("div",{className:"navbar",children:[Object(u.jsx)(g,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(u.jsx)(w,{numberOfEvents:e,updateEvents:this.updateEvents})]}),Object(u.jsx)("div",{className:"eventObject",children:Object(u.jsx)(p,{events:this.state.events})})]})}}]),n}(l.Component)),B=W;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var D=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,53)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),s(e),o(e)}))};n(25).config("1ba347b880ed494baf5dac2813ade01d").install(),r.a.render(Object(u.jsx)(B,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),D()}},[[52,1,2]]]);
//# sourceMappingURL=main.84d25c73.chunk.js.map