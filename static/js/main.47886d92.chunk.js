(window["webpackJsonpking-of-pong"]=window["webpackJsonpking-of-pong"]||[]).push([[0],{20:function(e,t,a){e.exports=a(40)},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},40:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(12),o=a.n(r),s=(a(25),a(13)),c=a(14),i=a(18),m=a(15),u=a(19),d=(a(26),a(2));a(27),a(28);var f=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(""),s=Object(d.a)(o,2),c=s[0],i=s[1],m=Object(n.useState)(""),u=Object(d.a)(m,2),f=u[0],h=u[1],E=c.length>0&&a.length>0&&f.length>0;return console.log(E),l.a.createElement("form",{action:"https://formspree.io/william.av.holmberg@gmail.com",method:"POST",acceptCharset:"UTF-8"},l.a.createElement("input",{onChange:function(e){return r(e.target.value)},type:"text",name:"name",placeholder:"Name"}),l.a.createElement("input",{onChange:function(e){return i(e.target.value)},type:"email",name:"email",placeholder:"Email"}),l.a.createElement("input",{onChange:function(e){return h(e.target.value)},type:"text",name:"phone",placeholder:"Phone"}),l.a.createElement("input",{onChange:function(e){return r(e.target.value)},type:"hidden",name:"_gotcha"}),l.a.createElement("button",{disabled:!E,className:E?"button enabled":"disabled"}," Submit "))};var h=function(e,t){var a=Object(n.useRef)();Object(n.useEffect)((function(){a.current=e}),[e]),Object(n.useEffect)((function(){if(null!==t){var e=setInterval((function(){a.current()}),t);return function(){return clearInterval(e)}}}),[t])};a(29);var E=function(e){var t=Object(n.useState)(0),a=Object(d.a)(t,2),r=a[0],o=a[1],s=Object(n.useState)(1),c=Object(d.a)(s,2),i=c[0],m=c[1];return h((function(){i>=e.array.length-1?m(0):m(i+1),o(55*-i)}),e.interval),l.a.createElement("div",{className:"content"},e.array.map((function(e,t){return l.a.createElement("h1",{className:"desc "+(0===t?"first ":"nein "),style:{marginTop:0===t?r+"px":"0px"}},e)})))};var N=function(){var e=Object(n.useState)(!1),t=Object(d.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)(!1),s=Object(d.a)(o,2),c=s[0],i=s[1],m=Object(n.useState)(["The first ever King of Pong","Music, Food & Drinks","23 October"]),u=Object(d.a)(m,2),h=u[0];return u[1],Object(n.useEffect)((function(){r(!0)}),[]),l.a.createElement("div",{className:"section hero"},l.a.createElement("div",{className:"left-side"},l.a.createElement("div",{className:"tagline "+(a?"show":"hidden")},l.a.createElement("h1",null,"MINI TABLE TENNIS",l.a.createElement("br",null),"CHAMPIONSHIP"),l.a.createElement("h2",null,"FOR THE IT CROWD")),l.a.createElement("span",{className:"divider "+(a?"show":"hidden")})),l.a.createElement("div",{className:"right-side"},l.a.createElement("div",{className:"right-side-content "+(a?"show ":"hidden ")+(c?"show-form ":"hide-form ")},l.a.createElement(E,{array:h,interval:3500}),l.a.createElement("div",{onClick:function(){return i(!0)},className:"show-interest-button button"},l.a.createElement("p",null,"Sign up Now")),l.a.createElement("div",{className:"form-side "+(c?"show-form ":"hide-form")},l.a.createElement(f,null),l.a.createElement("p",{className:"close button",onClick:function(){return i(!1)}},"X")))),l.a.createElement("div",{className:"read-more-button-container"},l.a.createElement("p",{onClick:function(){document.getElementById("social").scrollIntoView({behavior:"smooth"})},className:"read-more-button "+(a?"show":"hidden")}," Get To Know More ")))};a(30);var v=function(){return l.a.createElement("div",{id:"tournament",className:"section tournament-section"},l.a.createElement("div",{className:"left-side"},l.a.createElement("p",{className:"section-title"}," The Tournament "),l.a.createElement("span",{className:"divider "})),l.a.createElement("div",{className:"right-side"},l.a.createElement("div",{className:"info-row"},l.a.createElement("p",{className:"info-text"},"Played on 4 mini tables by Stiga")),l.a.createElement("div",{className:"info-row"},l.a.createElement("p",{className:"info-text"},"Professional match balls")),l.a.createElement("div",{className:"info-row"},l.a.createElement("p",{className:"info-text"},"Courts with judges tables and scoreboards")),l.a.createElement("div",{className:"info-row"},l.a.createElement("p",{className:"info-text"},"Prizes (TODO: ...)"))),l.a.createElement("div",{className:"read-more-button-container"},l.a.createElement("p",{onClick:function(){document.getElementById("faq").scrollIntoView({behavior:"smooth"})},className:"read-more-button "},"Get To Know More")))};a(31);var b=function(){return l.a.createElement("div",{id:"social",className:"section social-section"},l.a.createElement("div",{className:"left-side"},l.a.createElement("h2",{className:"section-title"},"What"),l.a.createElement("span",{className:"divider "})),l.a.createElement("div",{className:"right-side"},l.a.createElement("div",{className:"info-row"},l.a.createElement("h3",{className:"info-label"},"Social Gathering & ",l.a.createElement("br",null),"Mini Table Tennis Tournament")),l.a.createElement("div",{className:"info-row"},l.a.createElement("p",{className:"info-text"},"Enjoy a night of ",l.a.createElement("strong",null,"music"),", ",l.a.createElement("strong",null,"food")," and ",l.a.createElement("strong",null,"drinks")," while meeting new people and ",l.a.createElement("strong",null,"compete")," for the grand prize in our first ever tournament!"))),l.a.createElement("div",{className:"read-more-button-container"},l.a.createElement("p",{onClick:function(){document.getElementById("when-where").scrollIntoView({behavior:"smooth"})},className:"read-more-button "},"Get To Know More")))};a(32);var p=function(){return l.a.createElement("div",{id:"when-where",className:"section when-where-section"},l.a.createElement("div",{className:"left-side"},l.a.createElement("h2",{className:"section-title"},"When & Where"),l.a.createElement("span",{className:"divider "})),l.a.createElement("div",{className:"right-side"},l.a.createElement("div",{className:"info-row"},l.a.createElement("p",{className:"info-text"},"Date: ",l.a.createElement("strong",null,"23 October, 2019"))),l.a.createElement("div",{className:"info-row"},l.a.createElement("p",{className:"info-text"},"Time: ",l.a.createElement("strong",null,"18:00"))),l.a.createElement("div",{className:"info-row"},l.a.createElement("p",{className:"info-text"},"Address: ",l.a.createElement("strong",null,"F\xf6rsta L\xe5nggatan 22, Gothenburg"))),l.a.createElement("div",{className:"info-row"},l.a.createElement("p",{className:"info-text"},"Place: ",l.a.createElement("strong",null,"The office of Dotnet Mentor on the 7th floor")))),l.a.createElement("div",{className:"read-more-button-container"},l.a.createElement("p",{onClick:function(){document.getElementById("tournament").scrollIntoView({behavior:"smooth"})},className:"read-more-button "},"Get To Know More")))};a(33);var g=function(){return l.a.createElement("div",{id:"faq",className:"section faq-section"},l.a.createElement("div",{className:"left-side"},l.a.createElement("h2",{className:"section-title"},"FAQ"),l.a.createElement("span",{className:"divider "})),l.a.createElement("div",{className:"right-side"},l.a.createElement("div",{className:"info-row"},l.a.createElement("h3",{className:"info-label"},"What matchballs will be used?"),l.a.createElement("p",{className:"info-text"},"Stiga Perform 40+ (white)")),l.a.createElement("div",{className:"info-row"},l.a.createElement("h3",{className:"info-label"},"What tables will we be playing on?"),l.a.createElement("p",{className:"info-text"},"4 tables of type X (size) (TODO: ...)")),l.a.createElement("div",{className:"info-row"},l.a.createElement("h3",{className:"info-label"},"What format is used for the tournament?"),l.a.createElement("p",{className:"info-text"},"Groups with 2 players advancing to the knockout stage.")),l.a.createElement("div",{className:"info-row"},l.a.createElement("h3",{className:"info-label"},"Will there be any prizes?"),l.a.createElement("p",{className:"info-text"},"(TODO: ...)")),l.a.createElement("div",{className:"info-row"},l.a.createElement("h3",{className:"info-label"},"Who's judging the competition?"),l.a.createElement("p",{className:"info-text"},"In group games, players take turn judging the matches. In the knockout stage, a judge will be provided for you.")),l.a.createElement("div",{className:"info-row"},l.a.createElement("h3",{className:"info-label"},"When do I need to arrive?"),l.a.createElement("p",{className:"info-text"},"If you're competing, you need to register at least 30 minutes before the tournament starts. In other words, you need to be there at 17.30.")),l.a.createElement("div",{className:"info-row"},l.a.createElement("h3",{className:"info-label"},"Are you using any tournament software?"),l.a.createElement("p",{className:"info-text"},"Yes, Konkuri will be used to draw groups and to generate the knockout tree. (TODO: ...)")),l.a.createElement("div",{className:"info-row"},l.a.createElement("h3",{className:"info-label"},"Do I need to bring a bat?"),l.a.createElement("p",{className:"info-text"},"If you have an ITTF approved table tennis bat, you should bring it. However, there will be a limited number of bats to borrow if you don't have one. (TODO: ...)")),l.a.createElement("div",{className:"info-row"},l.a.createElement("h3",{className:"info-label"},"Can I wear anything I want?"),l.a.createElement("p",{className:"info-text"},"Anything but white is OK. However, we suggest dressing for comfort in your finest sporting outfit.")),l.a.createElement("div",{className:"info-row"},l.a.createElement("h3",{className:"info-label"},"Is there an entry fee?"),l.a.createElement("p",{className:"info-text"},"No! We do this for the love of the game and to bring likeminded people together for a night of fun and ping pong.")),l.a.createElement("div",{className:"info-row"},l.a.createElement("h3",{className:"info-label"},"Can I bring a friend?"),l.a.createElement("p",{className:"info-text"},"Sure, just make sure they register as an attendee for the event. (TODO: ...)")),l.a.createElement("div",{className:"info-row"},l.a.createElement("h3",{className:"info-label"},"How many sets are played?"),l.a.createElement("p",{className:"info-text"},"Best of 3 sets in group matches and best of 5 in the knockout stage. (TODO: Kolla Konkuri f\xf6rst)")),l.a.createElement("div",{className:"info-row"},l.a.createElement("h3",{className:"info-label"},"Are sets played to 21 like in the good old days?"),l.a.createElement("p",{className:"info-text"},"Sets are played to 11. Players take turn serving 2 serves each. If there is a tie at 10-10, players take turn serving 1 serve each until one player wins the set by 2 points.")),l.a.createElement("div",{className:"info-row"},l.a.createElement("h3",{className:"info-label"},"Where can I learn about the rules?"),l.a.createElement("p",{className:"info-text"},"We use the rules of ",l.a.createElement("a",{href:"http://www.svenskbordtennis.com/",target:"_blank"},"SBTF")," with adjustments for the size and net height of a mini table. ",l.a.createElement("a",{href:"http://www.svenskbordtennis.com/globalassets/svenska-bordtennisforbundet/dokument/tavlingsdokument/2-spelregler.pdf",target:"_blank"},"You'll find the rules here."))),l.a.createElement("div",{className:"info-row"},l.a.createElement("h3",{className:"info-label"},"Is coaching allowed?"),l.a.createElement("p",{className:"info-text"},"Yes, coaching between sets are allowed.")),l.a.createElement("div",{className:"info-row"},l.a.createElement("h3",{className:"info-label"},"What about timeouts?"),l.a.createElement("p",{className:"info-text"},"1 timeout per match and player is allowed. A timeout must not last longer than 1 minute."))))};a(34);var w=function(){return l.a.createElement("div",{id:"sign-up",className:"section sign-up-section"},l.a.createElement("div",{className:"left-side"},l.a.createElement("h2",{className:"section-title"},"Sign up"),l.a.createElement("span",{className:"divider"})),l.a.createElement("div",{className:"right-side"},l.a.createElement(f,null)))};var y=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(N,null),l.a.createElement(b,null),l.a.createElement(p,null),l.a.createElement(v,null),l.a.createElement(g,null),l.a.createElement(w,null))},O=a(4),k=Object(O.a)(),j=a(8),I=function(e){function t(){return Object(s.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(j.b,{history:k},l.a.createElement(j.a,{path:"",component:y})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(I,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.47886d92.chunk.js.map