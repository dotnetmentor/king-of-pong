(window["webpackJsonpking-of-pong"]=window["webpackJsonpking-of-pong"]||[]).push([[0],{20:function(e,a,t){e.exports=t(40)},25:function(e,a,t){},26:function(e,a,t){},27:function(e,a,t){},28:function(e,a,t){},29:function(e,a,t){},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},33:function(e,a,t){},34:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(12),r=t.n(c),i=(t(25),t(13)),s=t(14),o=t(18),m=t(15),u=t(19),d=(t(26),t(2));t(27),t(28);var f=function(){var e=Object(n.useState)(""),a=Object(d.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(""),i=Object(d.a)(r,2),s=i[0],o=i[1],m=Object(n.useState)(""),u=Object(d.a)(m,2),f=u[0],E=u[1],h=s.length>0&&t.length>0&&f.length>0;return console.log(h),l.a.createElement("form",{action:"https://formspree.io/william.av.holmberg@gmail.com",method:"POST",acceptCharset:"UTF-8"},l.a.createElement("input",{onChange:function(e){return c(e.target.value)},type:"text",name:"name",placeholder:"Name"}),l.a.createElement("input",{onChange:function(e){return o(e.target.value)},type:"email",name:"email",placeholder:"Email"}),l.a.createElement("input",{onChange:function(e){return E(e.target.value)},type:"text",name:"phone",placeholder:"Phone"}),l.a.createElement("input",{onChange:function(e){return c(e.target.value)},type:"hidden",name:"_gotcha"}),l.a.createElement("button",{disabled:!h,className:h?"button enabled":"disabled"}," Submit "))};var E=function(e,a){var t=Object(n.useRef)();Object(n.useEffect)((function(){t.current=e}),[e]),Object(n.useEffect)((function(){if(null!==a){var e=setInterval((function(){t.current()}),a);return function(){return clearInterval(e)}}}),[a])};t(29);var h=function(e){var a=Object(n.useState)(0),t=Object(d.a)(a,2),c=t[0],r=t[1],i=Object(n.useState)(1),s=Object(d.a)(i,2),o=s[0],m=s[1];return E((function(){o>=e.array.length-1?m(0):m(o+1),r(55*-o)}),e.interval),l.a.createElement("div",{className:"content"},e.array.map((function(e,a){return l.a.createElement("h1",{className:"desc "+(0===a?"first ":"nein "),style:{marginTop:0===a?c+"px":"0px"}}," ",e)})))};var v=function(){var e=Object(n.useState)(!1),a=Object(d.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(!1),i=Object(d.a)(r,2),s=i[0],o=i[1],m=Object(n.useState)(["The first ever King of Pong","Music, Food & Drinks","23 October"]),u=Object(d.a)(m,2),E=u[0];return u[1],Object(n.useEffect)((function(){c(!0)}),[]),l.a.createElement("div",{className:"section hero"},l.a.createElement("div",{className:"left-side"},l.a.createElement("div",{className:"tagline "+(t?"show":"hidden")},l.a.createElement("h1",null,"MINI TABLE TENNIS",l.a.createElement("br",null),"CHAMPIONSHIP"),l.a.createElement("h2",null,"FOR THE IT CROWD")),l.a.createElement("span",{className:"divider "+(t?"show":"hidden")})),l.a.createElement("div",{className:"right-side"},l.a.createElement("div",{className:"right-side-content "+(t?"show ":"hidden ")+(s?"show-form ":"hide-form ")},l.a.createElement(h,{array:E,interval:3500}),l.a.createElement("div",{onClick:function(){return o(!0)},className:"show-interest-button button"},l.a.createElement("p",null,"Sign up Now")),l.a.createElement("div",{className:"form-side "+(s?"show-form ":"hide-form")},l.a.createElement(f,null),l.a.createElement("p",{className:"close button",onClick:function(){return o(!1)}},"X")))),l.a.createElement("div",{className:"read-more-button-container"},l.a.createElement("p",{onClick:function(){document.getElementById("social").scrollIntoView({behavior:"smooth"})},className:"read-more-button "+(t?"show":"hidden")}," Get To Know More ")))};t(30);var N=function(){return l.a.createElement("div",{id:"tournament",className:"section tournament-section"},l.a.createElement("div",{className:"left-side"},l.a.createElement("p",{className:"section-title"}," The Tournament "),l.a.createElement("span",{className:"divider "})),l.a.createElement("div",{className:"right-side"},l.a.createElement("div",{className:"info-row"},l.a.createElement("p",{className:"info-label"},"Played on 4 mini tables by Stiga")),l.a.createElement("div",{className:"info-row"},l.a.createElement("p",{className:"info-label"},"Professional match balls")),l.a.createElement("div",{className:"info-row"},l.a.createElement("p",{className:"info-label"},"Courts with judges tables and scoreboards")),l.a.createElement("div",{className:"info-row"},l.a.createElement("p",{className:"info-label"},"Winner, winner, ping pong dinner"))))};t(31);var b=function(){return l.a.createElement("div",{id:"social",className:"section social-section"},l.a.createElement("div",{className:"left-side"},l.a.createElement("p",{className:"section-title"},"What"),l.a.createElement("span",{className:"divider "})),l.a.createElement("div",{className:"right-side"},l.a.createElement("div",{className:"info-row"},l.a.createElement("h2",{className:"info-label"},"Social Gathering & ",l.a.createElement("br",null),"Mini Table Tennis Tournament"),l.a.createElement("img",{src:"https://blog.joypixels.com/content/images/2019/06/clinking_beer_mugs_1024.gif",style:{height:"150px",marginLeft:"20px"}})),l.a.createElement("p",{className:"info-text"},"Enjoy a night of ",l.a.createElement("strong",null,"music"),", ",l.a.createElement("strong",null,"food")," and ",l.a.createElement("strong",null,"drinks")," while meeting new people and ",l.a.createElement("strong",null,"compete")," for the grand prize in our first ever tournament!")),l.a.createElement("div",{className:"read-more-button-container"},l.a.createElement("p",{onClick:function(){document.getElementById("social").scrollIntoView({behavior:"smooth"})},className:"read-more-button "},"Get To Know More")))};t(32);var p=function(){return l.a.createElement("div",{id:"when-where",className:"section when-where-section"},l.a.createElement("div",{className:"left-side"},l.a.createElement("h2",{className:"section-title"},"When & Where"),l.a.createElement("span",{className:"divider "})),l.a.createElement("div",{className:"right-side"},l.a.createElement("div",{className:"info-row"},l.a.createElement("p",{className:"info-label"},"Time: ",l.a.createElement("strong",null,"18:00"))),l.a.createElement("div",{className:"info-row"},l.a.createElement("p",{className:"info-label"},"Date: ",l.a.createElement("strong",null,"23 October"))),l.a.createElement("div",{className:"info-row"},l.a.createElement("p",{className:"info-label"},"Address: ",l.a.createElement("strong",null,"F\xf6rsta L\xe5nggatan 22, Gothenburg"))),l.a.createElement("div",{className:"info-row"},l.a.createElement("p",{className:"info-label"},"Place: ",l.a.createElement("strong",null,"The office of Dotnet Mentor on the 7th floor")))))};t(33);var g=function(){return l.a.createElement("div",{id:"faq",className:"section faq-section"},l.a.createElement("div",{className:"left-side"},l.a.createElement("h2",{className:"section-title"},"FAQ"),l.a.createElement("span",{className:"divider "})),l.a.createElement("div",{className:"right-side"},l.a.createElement("div",{className:"info-row"},l.a.createElement("p",{className:"info-label"},"Played on 4 mini tables by Stiga")),l.a.createElement("div",{className:"info-row"},l.a.createElement("p",{className:"info-label"},"Professional match balls")),l.a.createElement("div",{className:"info-row"},l.a.createElement("p",{className:"info-label"},"Courts with judges tables and scoreboards")),l.a.createElement("div",{className:"info-row"},l.a.createElement("p",{className:"info-label"},"Winner, winner, ping pong dinner")),l.a.createElement("div",{className:"info-row"},l.a.createElement("p",{className:"info-label"},"ITTF rules modified for net height")),l.a.createElement("div",{className:"info-row"},l.a.createElement("p",{className:"info-label"},"Best of 3 in group, Best of 5 in knockouts"))))};t(34);var w=function(){return l.a.createElement("div",{id:"sign-up",className:"section sign-up-section"},l.a.createElement("div",{className:"left-side"},l.a.createElement("h2",{className:"section-title"},"Sign up"),l.a.createElement("span",{className:"divider"})),l.a.createElement("div",{className:"right-side"},l.a.createElement(f,null)))};var O=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(v,null),l.a.createElement(b,null),l.a.createElement(p,null),l.a.createElement(N,null),l.a.createElement(g,null),l.a.createElement(w,null))},j=t(4),y=Object(j.a)(),T=t(8),S=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(T.b,{history:y},l.a.createElement(T.a,{path:"",component:O})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(S,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[20,1,2]]]);
//# sourceMappingURL=main.e80bfa24.chunk.js.map