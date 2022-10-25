(this.webpackJsonpmeet=this.webpackJsonpmeet||[]).push([[0],{31:function(e,t,n){},50:function(e,t,n){},51:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(24),r=n.n(a),o=(n(31),n(7)),s=n(8),c=n(2),i=n(3),l=n(5),u=n(4),d=n(1),h=n(0),f=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={detailsVisible:!1},e.handleDetailsToggled=function(){e.state.detailsVisible?e.setState({detailsVisible:!1}):e.setState({detailsVisible:!0})},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.event;return Object(h.jsxs)("div",{className:"event",children:[Object(h.jsx)("h2",{className:"summary",children:e.summary}),Object(h.jsxs)("p",{className:"information",children:[e.start.dateTime," ",e.start.timeZone," ",e.location]}),this.state.detailsVisible?Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"details",children:[Object(h.jsx)("h3",{className:"details-title",children:"About event:"}),Object(h.jsx)("a",{href:e.htmlLink,className:"details-link",children:"See details on Google Calendar"}),Object(h.jsx)("p",{className:"details-description",children:e.description})]}),Object(h.jsx)("button",{className:"hide-details",onClick:this.handleDetailsToggled,children:"hide details"})]}):Object(h.jsx)("button",{className:"show-details",onClick:this.handleDetailsToggled,children:"show details"})]})}}]),n}(d.Component),p=f,v=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){return Object(c.a)(this,n),t.apply(this,arguments)}return Object(i.a)(n,[{key:"render",value:function(){var e=this.props.events;return Object(h.jsx)("ul",{className:"EventList",children:e.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)(p,{event:e})},e.id)}))})}}]),n}(d.Component),b=v,m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).getStyle=function(){return{color:a.color}},a.color=null,a}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsx)("div",{className:"Alert",children:Object(h.jsx)("p",{style:this.getStyle(),children:this.props.text})})}}]),n}(d.Component),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="blue",a}return Object(i.a)(n)}(m),g=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="orange",a}return Object(i.a)(n)}(m),w=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(c.a)(this,n),(a=t.call(this,e)).color="red",a}return Object(i.a)(n)}(m),O=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={query:"",suggestions:[],showSuggestions:void 0,infoText:""},e.handleInputChanged=function(t){var n=t.target.value,a=e.props.locations.filter((function(e){return e.toUpperCase().indexOf(n.toUpperCase())>-1}));if(0!==a.length)return e.setState({query:n,suggestions:a,infoText:""});e.setState({query:n,infoText:"There is no such city as '".concat(n,"'. Please try another city")})},e.handleItemClicked=function(t){e.setState({query:t,showSuggestions:!1}),e.props.updateEvents(t,e.props.numberOfEvents)},e}return Object(i.a)(n,[{key:"render",value:function(){var e=this;return Object(h.jsxs)("div",{className:"CitySearch",children:[Object(h.jsx)(j,{text:this.state.infoText}),Object(h.jsx)("input",{type:"text",className:"city",placeholder:"Enter a city",value:this.state.query,onChange:this.handleInputChanged,onFocus:function(){e.setState({showSuggestions:!0})}}),Object(h.jsxs)("ul",{className:"suggestions",style:this.state.showSuggestions?{}:{display:"none"},children:[this.state.suggestions.map((function(t){return Object(h.jsx)("li",{onClick:function(){return e.handleItemClicked(t)},children:t},t)})),Object(h.jsx)("li",{className:"suggestions-all",onClick:function(){return e.handleItemClicked("all")},children:Object(h.jsx)("b",{children:"See all cities"})},"all")]})]})}}]),n}(d.Component),x=O,y=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={numberOfEvents:32,errorText:""},e.handleInputChanged=function(t){var n=t.target.value;n<1||n>32?e.setState({numberOfEvents:n,errorText:"Enter number from 1 to 32"}):(e.setState({numberOfEvents:n,errorText:""}),e.props.updateEvents(void 0,n))},e}return Object(i.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("div",{children:[Object(h.jsx)("div",{className:"numberOfEvents",children:Object(h.jsxs)("label",{children:["Number of Events:",Object(h.jsx)("input",{type:"number",className:"number-of-events-input",min:"1",value:this.state.numberOfEvents,onChange:this.handleInputChanged})]})}),Object(h.jsx)(w,{text:this.state.errorText})]})}}]),n}(d.Component),k=y,S=n(26),T=[{kind:"calendar#event",etag:'"3181161784712000"',id:"4eahs9ghkhrvkld72hogu9ph3e_20200519T140000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=NGVhaHM5Z2hraHJ2a2xkNzJob2d1OXBoM2VfMjAyMDA1MTlUMTQwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:17:46.000Z",updated:"2020-05-27T12:01:32.356Z",summary:"Learn JavaScript",description:"Have you wondered how you can ask Google to show you the list of the top ten must-see places in London? And how Google presents you the list? How can you submit the details of an application? Well, JavaScript is doing these. :) \n\nJavascript offers interactivity to a dull, static website. Come, learn JavaScript with us and make those beautiful websites.",location:"London, UK",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-19T17:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"4eahs9ghkhrvkld72hogu9ph3e",originalStartTime:{dateTime:"2020-05-19T16:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"4eahs9ghkhrvkld72hogu9ph3e@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"},{kind:"calendar#event",etag:'"3181159875584000"',id:"3qtd6uscq4tsi6gc7nmmtpqlct_20200520T120000Z",status:"confirmed",htmlLink:"https://www.google.com/calendar/event?eid=M3F0ZDZ1c2NxNHRzaTZnYzdubW10cHFsY3RfMjAyMDA1MjBUMTIwMDAwWiBmdWxsc3RhY2t3ZWJkZXZAY2FyZWVyZm91bmRyeS5jb20",created:"2020-05-19T19:14:30.000Z",updated:"2020-05-27T11:45:37.792Z",summary:"React is Fun",description:"Love HTML, CSS, and JS? Want to become a cool front-end developer? \n\nReact is one of the most popular front-end frameworks. There is a huge number of job openings for React developers in most cities. \n\nJoin us in our free React training sessions and give your career a new direction. ",location:"Berlin, Germany",creator:{email:"fullstackwebdev@careerfoundry.com",self:!0},organizer:{email:"fullstackwebdev@careerfoundry.com",self:!0},start:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},end:{dateTime:"2020-05-20T15:00:00+02:00",timeZone:"Europe/Berlin"},recurringEventId:"3qtd6uscq4tsi6gc7nmmtpqlct",originalStartTime:{dateTime:"2020-05-20T14:00:00+02:00",timeZone:"Europe/Berlin"},iCalUID:"3qtd6uscq4tsi6gc7nmmtpqlct@google.com",sequence:0,reminders:{useDefault:!0},eventType:"default"}],E=n(14),C=n.n(E),N=n(9),W=n.n(N),A=function(e){var t=e.map((function(e){return e.location}));return Object(S.a)(new Set(t))},Z=function(){var e=Object(s.a)(Object(o.a)().mark((function e(t){var n,a,r,s;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n=encodeURIComponent(t),e.next=4,fetch("https://qk1kwyhee0.execute-api.eu-central-1.amazonaws.com/dev/api/token/"+n);case 4:if((a=e.sent).ok){e.next=7;break}throw new Error("HTTP error! status: ".concat(a.status));case 7:return e.next=9,a.json();case 9:return r=e.sent,(s=r.access_token)&&localStorage.setItem("access_token",s),e.abrupt("return",s);case 15:e.prev=15,e.t0=e.catch(0),e.t0.json();case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),I=function(){var e=Object(s.a)(Object(o.a)().mark((function e(t){var n;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=".concat(t)).then((function(e){return e.json()})).catch((function(e){return e.json()}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),L=function(){if(window.history.pushState&&window.location.pathname){var e=window.location.protocol+"//"+window.location.host+window.location.pathname;window.history.pushState("","",e)}else e=window.location.protocol+"//"+window.location.host,window.history.pushState("","",e)},q=function(){var e=Object(s.a)(Object(o.a)().mark((function e(){var t,n,a,r,s;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(W.a.start(),!window.location.href.startsWith("http://localhost")){e.next=4;break}return W.a.done(),e.abrupt("return",T);case 4:if(navigator.onLine){e.next=9;break}return t=localStorage.getItem("lastEvents"),W.a.done(),e.abrupt("return",t?JSON.parse(t).events:[]);case 9:return e.next=11,M();case 11:if(!(n=e.sent)){e.next=21;break}return L(),a="https://qk1kwyhee0.execute-api.eu-central-1.amazonaws.com/dev/api/get-events/"+n,e.next=17,C.a.get(a);case 17:return(r=e.sent).data&&(s=A(r.data.events),localStorage.setItem("lastEvents",JSON.stringify(r.data)),localStorage.setItem("locations",JSON.stringify(s))),W.a.done(),e.abrupt("return",r.data.events);case 21:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),M=function(){var e=Object(s.a)(Object(o.a)().mark((function e(){var t,n,a,r,s,c;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=localStorage.getItem("access_token"),e.t0=t,!e.t0){e.next=6;break}return e.next=5,I(t);case 5:e.t0=e.sent;case 6:if(n=e.t0,t&&!n.error){e.next=21;break}return e.next=10,localStorage.removeItem("access_token");case 10:return a=new URLSearchParams(window.location.search),e.next=13,a.get("code");case 13:if(r=e.sent){e.next=20;break}return e.next=17,C.a.get("https://qk1kwyhee0.execute-api.eu-central-1.amazonaws.com/dev/api/get-auth-url");case 17:return s=e.sent,c=s.data.authUrl,e.abrupt("return",window.location.href=c);case 20:return e.abrupt("return",r&&Z(r));case 21:return e.abrupt("return",t);case 22:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();n(50);var J=function(e){return e.showWelcomeScreen?Object(h.jsxs)("div",{className:"WelcomeScreen",children:[Object(h.jsx)("h1",{children:"Welcome to the Meet app"}),Object(h.jsx)("h4",{children:"Log in to see upcoming events around the world for full-stack developers"}),Object(h.jsx)("div",{className:"button_cont",align:"center",children:Object(h.jsxs)("div",{class:"google-btn",children:[Object(h.jsx)("div",{class:"google-icon-wrapper",children:Object(h.jsx)("img",{class:"google-icon",src:"https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Log\no.svg",alt:"Google sign-in"})}),Object(h.jsx)("button",{onClick:function(){e.getAccessToken()},rel:"nofollow noopener",class:"btn-text",children:Object(h.jsx)("b",{children:"Sign in with google"})})]})}),Object(h.jsx)("a",{href:"https://andreyshmalun.github.io/meet/privacy.html",rel:"nofollow noopener",children:"Privacy policy"})]}):null},U=(n(51),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={events:[],locations:[],numberOfEvents:32,selectedLocation:"all",offlineAlertText:"",showWelcomeScreen:void 0},e.updateEvents=function(t,n){var a=e.state.numberOfEvents;navigator.onLine?e.setState({offlineAlertText:""}):e.setState({offlineAlertText:"You are currently offline. Events have been loaded from your last session"}),void 0===t&&(t=e.state.selectedLocation),q().then((function(r){var o="all"===t?r:r.filter((function(e){return e.location===t}));n=void 0===n?a:n,e.setState({events:o.slice(0,n),selectedLocation:t,numberOfEvents:n})}))},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=Object(s.a)(Object(o.a)().mark((function e(){var t,n,a,r,s=this;return Object(o.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.mounted=!0,t=localStorage.getItem("access_token"),e.next=4,I(t);case 4:if(!e.sent.error){e.next=8;break}e.t0=!1,e.next=9;break;case 8:e.t0=!0;case 9:n=e.t0,a=new URLSearchParams(window.location.search),r=a.get("code"),this.setState({showWelcomeScreen:!(r||n)}),(r||n)&&this.mounted&&q().then((function(e){s.mounted&&s.setState({events:e,locations:A(e)})}));case 14:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentWillUnmount",value:function(){this.mounted=!1}},{key:"render",value:function(){var e=this.state.numberOfEvents;return void 0===this.state.showWelcomeScreen?Object(h.jsx)("div",{className:"App"}):Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)("h1",{children:"Meet App"}),Object(h.jsx)("h4",{children:"Choose your nearest city"}),Object(h.jsx)(g,{text:this.state.offlineAlertText}),Object(h.jsx)(x,{locations:this.state.locations,updateEvents:this.updateEvents}),Object(h.jsx)(k,{numberOfEvents:e,updateEvents:this.updateEvents}),Object(h.jsx)("div",{className:"eventObject",children:Object(h.jsx)(b,{events:this.state.events})}),Object(h.jsx)(J,{showWelcomeScreen:this.state.showWelcomeScreen,getAccessToken:function(){M()}})]})}}]),n}(d.Component)),B=U,D=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var F=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,54)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,o=t.getLCP,s=t.getTTFB;n(e),a(e),r(e),o(e),s(e)}))};n(25).config("1ba347b880ed494baf5dac2813ade01d").install(),r.a.render(Object(h.jsx)(B,{}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/meet",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("/meet","/service-worker.js");D?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):R(t,e)}))}}(),F()}},[[53,1,2]]]);
//# sourceMappingURL=main.d940360b.chunk.js.map