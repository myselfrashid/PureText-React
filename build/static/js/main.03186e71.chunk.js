(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),c=t(3),r=t.n(c),o=(t(13),t(1));t(15);function s(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-".concat(e.mode," bg-").concat(e.mode)},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"/"},e.Title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"nazvbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNav"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"/"},"Home")))),l.a.createElement("div",{className:"form-check form-switch text-".concat("light"===e.mode?"dark":"light")},l.a.createElement("input",{className:"form-check-input",onClick:e.toggleMode,type:"checkbox",role:"definition",id:"flexSwitchCheckDefault"}),l.a.createElement("label",{className:"form-check-label",htmlFor:"flexSwitchCheckDefault"},"Enable Dark Mode"))))}function m(e){var a=Object(n.useState)(""),t=Object(o.a)(a,2),c=t[0],r=t[1];return l.a.createElement("div",null,l.a.createElement("h1",{style:{color:"dark"===e.mode?"white":"black"}},e.Heading),l.a.createElement("div",{className:"mb-3 my-2"},l.a.createElement("textarea",{className:"form-control",id:"myBox",rows:"8",value:c,onChange:function(e){r(e.target.value)},style:{backgroundColor:"dark"===e.mode?"#2a2d30":"white",color:"dark"===e.mode?"white":"black"}})),l.a.createElement("div",null,l.a.createElement("button",{className:"btn btn-primary my-1 mx-1",onClick:function(){var a=c.toUpperCase();r(a),e.showAlert("Converted to uppercase","success")}},"Convert to Uppercase"),l.a.createElement("button",{className:"btn btn-primary my-1 mx-1",onClick:function(){var a=c.toLowerCase();r(a),e.showAlert("Converted to lowercase","success")}},"Convert to Lowercase"),l.a.createElement("button",{className:"btn btn-secondary my-1 mx-1",onClick:function(){r(""),e.showAlert("Text Cleared","success")}},"Clear"),l.a.createElement("button",{className:"btn btn-primary my-1 mx-1",onClick:function(){var a=document.getElementById("myBox");a.select(),a.setSelectionRange(0,99999),navigator.clipboard.writeText(a.value),console.log("handle copy was clicked"),e.showAlert("Copied to Clipboard","success")}},"Copy to Clipboard")),l.a.createElement("div",{className:"container my-3",style:{color:"dark"===e.mode?"white":"black"}},l.a.createElement("h2",null,"Your Text Summary"),l.a.createElement("p",null,"Text contains: ",c.length," characters"),l.a.createElement("p",null,"Text contains: ",c.split(" ").length-1," word(s)")))}var i=function(e){return e.alert&&l.a.createElement("div",{className:"alert alert-".concat(e.alert.type," alert-dismissible fade show"),role:"alert"},l.a.createElement("strong",null,function(e){var a=e.toLowerCase();return a.charAt(0).toUpperCase()+a.slice(1)}(e.alert.type)),": ",e.alert.msg)};var u=function(){var e=Object(n.useState)("light"),a=Object(o.a)(e,2),t=a[0],c=a[1],r=Object(n.useState)(null),u=Object(o.a)(r,2),d=u[0],b=u[1],g=function(e,a){b({msg:e,type:a}),setTimeout(function(){b(null)},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,{Title:"PureText",About:"About Us",mode:t,toggleMode:function(){"light"===t?(c("dark"),document.body.style.backgroundColor="#2a2d30",g("Dark mode enabled","success")):(c("light"),document.body.style.backgroundColor="white",g("Light mode enabled","success")),console.log("clicked")}}),l.a.createElement(i,{alert:d}),l.a.createElement("div",{className:"container"},l.a.createElement(m,{Heading:"Enter text below to analyse",mode:t,showAlert:g})))},d=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,18)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,c=a.getLCP,r=a.getTTFB;t(e),n(e),l(e),c(e),r(e)})};r.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,a,t){e.exports=t(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.03186e71.chunk.js.map