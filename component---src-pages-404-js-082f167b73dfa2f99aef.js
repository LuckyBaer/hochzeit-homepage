(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{Bl7J:function(e,t,a){"use strict";a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V");var n=a("Xr8k"),l=a("q1tI"),r=a.n(l),i=a("Wbzz"),s=(a("wcMv"),a("tUrg"),a("f3/d"),function(e){return r.a.createElement("nav",null,e.menuLinks.map((function(e){return e.items?r.a.createElement(r.a.Fragment,{key:e.name},r.a.createElement(i.Link,{className:"link depth-0",to:e.link},e.name),r.a.createElement("span",{className:"indent-0"}),e.items.map((function(e){return e.items?r.a.createElement(r.a.Fragment,{key:e.name},r.a.createElement(i.Link,{style:{marginLeft:"20px"},className:"link depth-0",to:e.link},e.name),e.items.map((function(e){return r.a.createElement("div",{key:e.name},r.a.createElement(i.Link,{style:{marginLeft:"40px"},className:"link depth-2",to:e.link},e.name))}))):r.a.createElement("div",{key:e.name},r.a.createElement(i.Link,{style:{marginLeft:"20px"},className:"link depth-1",to:e.link},e.name))}))):r.a.createElement("div",{key:e.name},r.a.createElement(i.Link,{className:"link depth-0",to:e.link},e.name))})))});var o=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).toggleHamburger=function(){a.setState({active:!a.state.active},(function(){a.state.active?a.setState({mobileActiveClass:"navPanel-visible"}):a.setState({mobileActiveClass:""})}))},a.enterButton=function(){a.setState({mouseOverButton:!0})},a.leaveButton=function(){setTimeout((function(){a.setState({mouseOverButton:!1})}),300)},a.enterMenu=function(){a.setState({mouseOverMenu:!0})},a.leaveMenu=function(){setTimeout((function(){a.setState({mouseOverMenu:!1})}),300)},a.enterSubButton=function(){a.setState({mouseOverSubButton:!0})},a.leaveSubButton=function(){setTimeout((function(){a.setState({mouseOverSubButton:!1})}),300)},a.enterSubMenu=function(){a.setState({mouseOverSubMenu:!0})},a.leaveSubMenu=function(){setTimeout((function(){a.setState({mouseOverSubMenu:!1})}),300)},a.state={active:!1,mobileActiveClass:"",mouseOverButton:!1,mouseOverMenu:!1,mouseOverSubButton:!1,mouseOverSubMenu:!1},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var l=n.prototype;return l.handleMouseHover=function(){this.setState(this.toggleHoverState)},l.toggleHoverState=function(e){return{isHovering:!e.isHovering}},l.render=function(){var e=this,t=this.props.siteTitle,a=this.props.menuLinks,n=this.state.mouseOverButton||this.state.mouseOverMenu,l=this.state.mouseOverSubButton||this.state.mouseOverSubMenu;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"navbar-menu "+this.state.mobileActiveClass},r.a.createElement("div",{id:"titleBar"},r.a.createElement("a",{role:"button",onClick:function(){return e.toggleHamburger()},className:"toggle","aria-label":"Open mobile menu"}),r.a.createElement("span",{className:"title"},r.a.createElement(i.Link,{to:"/"},t))),r.a.createElement("div",{id:"navPanel"},r.a.createElement(s,{siteTitle:t,menuLinks:a}))),r.a.createElement("header",{id:"header"},r.a.createElement("h1",{id:"logo"},r.a.createElement(i.Link,{to:"/"},t)),r.a.createElement("div",{className:"navbar-menu"},r.a.createElement("nav",null,r.a.createElement("ul",{style:{display:"flex",flex:1}},a.map((function(t){return t.items?r.a.createElement(r.a.Fragment,{key:t.name},r.a.createElement("li",{key:t.name},r.a.createElement(i.Link,{onMouseEnter:e.enterButton,onMouseLeave:e.leaveButton,className:t.cl,to:t.link},t.name),r.a.createElement("ul",{style:n?{display:"block",background:"rgba(39, 40, 51, 0.965)",position:"absolute",right:"55%",minWidth:"150px",borderRadius:"5px"}:{display:"none"},onMouseEnter:e.enterMenu,onMouseLeave:e.leaveMenu},t.items.map((function(t){return t.items?r.a.createElement(r.a.Fragment,{key:t.name},r.a.createElement("li",{key:t.name,style:{textAlign:"left",marginLeft:"0",paddingLeft:"0",fontSize:"14px",display:"block",lineHeight:"2.5"}},r.a.createElement(i.Link,{onMouseEnter:e.enterSubButton,onMouseLeave:e.leaveSubButton,to:t.link},t.name),r.a.createElement("ul",{style:l?{display:"block",background:"rgba(39, 40, 51, 0.965)",borderRadius:"5px",position:"absolute",right:"100%",width:"100%",marginTop:"-35px"}:{display:"none"},onMouseEnter:e.enterSubMenu,onMouseLeave:e.leaveSubMenu},t.items.map((function(e){return r.a.createElement("li",{key:e.name,style:{textAlign:"left",marginLeft:"0",paddingLeft:"0",fontSize:"14px",whiteSpace:"nowrap",lineHeight:"2.5",display:"block"}},r.a.createElement(i.Link,{to:e.link},e.name))}))))):r.a.createElement("li",{key:t.name,style:{textAlign:"left",marginLeft:"0",paddingLeft:"0",fontSize:"14px",lineHeight:"2.5",display:"block"}},r.a.createElement(i.Link,{to:t.link},t.name))}))))):r.a.createElement("li",{key:t.name},r.a.createElement(i.Link,{className:t.cl,to:t.link},t.name))})))))))},n}(r.a.Component),m=function(e){return r.a.createElement("footer",{id:"footer"},r.a.createElement("ul",{className:"icons"},r.a.createElement("li",null,r.a.createElement("a",{href:"/",className:"icon brands alt fa-twitter"},r.a.createElement("span",{className:"label"},"Twitter"))),r.a.createElement("li",null,r.a.createElement("a",{href:"/",className:"icon brands alt fa-facebook-f"},r.a.createElement("span",{className:"label"},"Facebook"))),r.a.createElement("li",null,r.a.createElement("a",{href:"/",className:"icon brands alt fa-linkedin-in"},r.a.createElement("span",{className:"label"},"LinkedIn"))),r.a.createElement("li",null,r.a.createElement("a",{href:"/",className:"icon brands alt fa-instagram"},r.a.createElement("span",{className:"label"},"Instagram"))),r.a.createElement("li",null,r.a.createElement("a",{href:"/",className:"icon brands alt fa-github"},r.a.createElement("span",{className:"label"},"GitHub"))),r.a.createElement("li",null,r.a.createElement("a",{href:"/",className:"icon solid alt fa-envelope"},r.a.createElement("span",{className:"label"},"Email")))),r.a.createElement("ul",{className:"copyright"},r.a.createElement("li",null,"© Untitled. All rights reserved."),r.a.createElement("li",null,"Design: ",r.a.createElement("a",{href:"http://html5up.net"},"HTML5 UP")),r.a.createElement("li",null,"Demo Images: ",r.a.createElement("a",{href:"https://unsplash.com"},"Unsplash"))))};t.a=function(e){var t=e.children,a=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["children"]);return r.a.createElement(i.StaticQuery,{query:"2800782681",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"/"==a.location?"landing":""},r.a.createElement("div",{id:"page-wrapper"},r.a.createElement(o,{menuLinks:e.site.siteMetadata.menuLinks,siteTitle:e.site.siteMetadata.title}),t,r.a.createElement(m,null))))},data:n})}},OGtf:function(e,t,a){var n=a("XKFU"),l=a("eeVq"),r=a("vhPU"),i=/"/g,s=function(e,t,a,n){var l=String(r(e)),s="<"+t;return""!==a&&(s+=" "+a+'="'+String(n).replace(i,"&quot;")+'"'),s+">"+l+"</"+t+">"};e.exports=function(e,t){var a={};a[e]=t(s),n(n.P+n.F*l((function(){var t=""[e]('"');return t!==t.toLowerCase()||t.split('"').length>3})),"String",a)}},Xr8k:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"title":"Bianca und Elias Bauer, 12.12.2020","description":"A Gatsby.js V2 Starter based on Landed by HTML5 UP","menuLinks":[{"name":"Home","link":"/","items":null},{"name":"Galerie","link":"#","items":[{"link":"/left-sidebar","name":"Standesamt"},{"link":"/right-sidebar","name":"Hochzeit"}]},{"name":"Anmeldung","link":"/no-sidebar","items":null},{"name":"Locations","link":"/locations","items":null}]}}}}')},"a/Iw":function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return i}));var n=function(){return"undefined"!=typeof window&&window.localStorage.getItem("gatsbyUser")?JSON.parse(window.localStorage.getItem("gatsbyUser")):{}},l=function(e){return window.localStorage.setItem("gatsbyUser",JSON.stringify(e))},r=function(e){var t=e.username,a=e.password;return"matze"===t&&"passed"===a&&l({username:"matze",name:"Matze",email:"Matze@example.org"})},i=function(){return!!n().username}},bVmY:function(e,t,a){"use strict";var n=a("q1tI"),l=a.n(n);t.a=function(e){var t=e.children;return l.a.createElement(l.a.Fragment,null,t)}},tUrg:function(e,t,a){"use strict";a("OGtf")("link",(function(e){return function(t){return e(this,"a","href",t)}}))},w2l6:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),l=a.n(n),r=a("Bl7J"),i=a("bVmY"),s=a("a/Iw");t.default=function(){return l.a.createElement(i.a,null,Object(s.b)()?l.a.createElement(r.a,null,l.a.createElement("div",{id:"main",className:"alt"},l.a.createElement("section",{id:"one"},l.a.createElement("div",{className:"inner"},l.a.createElement("h1",null,"NOT FOUND"),l.a.createElement("p",null,"You just hit a route that doesn't exist... the sadness."))))):l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{id:"main",className:"wrapper style1"},l.a.createElement("div",{className:"container"},l.a.createElement("header",{className:"major"},l.a.createElement("h2",null,"You should ",l.a.createElement("a",{href:"/hochzeit-homepage/login"},"log in")," to see restricted content")),l.a.createElement("p",{style:{textAlign:"center"}},l.a.createElement("a",{href:"/hochzeit-homepage/login"},"Log in"))))))}},wcMv:function(e,t,a){}}]);
//# sourceMappingURL=component---src-pages-404-js-082f167b73dfa2f99aef.js.map