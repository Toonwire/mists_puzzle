(this.webpackJsonpmists_puzzle=this.webpackJsonpmists_puzzle||[]).push([[0],{24:function(e,t,n){e.exports=n.p+"static/media/LeafEmpty.a38170c5.png"},25:function(e,t,n){e.exports=n.p+"static/media/LeafFull.e50c0522.png"},26:function(e,t,n){e.exports=n.p+"static/media/CircledLeafEmpty.0656893d.png"},27:function(e,t,n){e.exports=n.p+"static/media/CircledLeafFull.2d6045fb.png"},28:function(e,t,n){e.exports=n.p+"static/media/FlowerEmpty.508aaf16.png"},29:function(e,t,n){e.exports=n.p+"static/media/FlowerFull.1d5cf613.png"},30:function(e,t,n){e.exports=n.p+"static/media/CircledFlowerEmpty.f37a309d.png"},31:function(e,t,n){e.exports=n.p+"static/media/CircledFlowerFull.dfd139c0.png"},43:function(e,t,n){e.exports=n(53)},48:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(12),o=n.n(c),i=(n(48),n(20)),s=n(73),u=n(74),l=n(37),m=n(24),f=n.n(m),d=n(25),p=n.n(d),g=n(26),h=n.n(g),b=n(27),E=n.n(b),v=n(28),x=n.n(v),y=n(29),j=n.n(y),w=n(30),O=n.n(w),C=n(31),F=n.n(C);var k=function(e){var t=e.src,n=Object(l.a)(e,["src"]);return r.a.createElement("img",Object.assign({src:t,alt:"mists_symbol"},n))},I=n(77),S=n(76),L=n(75),M={"0,0,0":f.a,"0,1,0":p.a,"0,0,1":h.a,"0,1,1":E.a,"1,0,0":x.a,"1,1,0":j.a,"1,0,1":O.a,"1,1,1":F.a};var W=[];(function e(t,n){var a,r,c,o,i;if(n>t.length||n<=0)return[];if(n===t.length)return[t];if(1===n){c=[];for(var s=0;s<t.length;s++)c.push([t[s]]);return c}for(c=[],a=0;a<t.length-n+1;a++)for(o=t.slice(a,a+1),i=e(t.slice(a+1),n-1),r=0;r<i.length;r++)c.push(o.concat(i[r]));return c})(Object.keys(M),4).forEach((function(e){for(var t=e.map((function(e){return e.split(",").map((function(e){return Number(e)}))})),n=-1,a=0,r=function(e){var r=t.map((function(t){return t[e]})),c=r.reduce((function(e,t){return e+t}),0);1===c?(n=r.findIndex((function(e){return 1===e})),a++):c===r.length-1&&(n=r.findIndex((function(e){return 0===e})),a++)},c=0;c<t[0].length;c++)r(c);1===a&&-1!==n&&W.push({combination:t.map((function(e){return{data:e,img:M[e]}})),uniqueIndex:n})}));var z={msg:"Correct guess"},N={msg:"Wrong guess"},B={msg:"Find the odd one out!"},D=Object(s.a)((function(e){return{img:{margin:"auto",maxWidth:"100%"},symbolContainer:{display:"flex",width:300,height:300,minWidth:300,minHeight:300,borderRadius:"50%",cursor:"pointer"},score:{color:"#dedede"}}}));var _=function(){var e=D(),t=Object(a.useState)(),n=Object(i.a)(t,2),c=n[0],o=n[1],s=Object(a.useState)(0),l=Object(i.a)(s,2),m=l[0],f=l[1],d=Object(a.useState)(-1),p=Object(i.a)(d,2),g=p[0],h=p[1],b=Object(a.useState)(B),E=Object(i.a)(b,2),v=E[0],x=E[1];return Object(a.useEffect)((function(){o(W[Math.floor(Math.random()*W.length)])}),[m]),Object(a.useEffect)((function(){var e=setTimeout((function(){x(B)}),2e3);return function(){return clearTimeout(e)}}),[v]),r.a.createElement(I.a,{display:"flex",flexDirection:"column",p:4,style:{backgroundColor:"#1e1e1e"}},r.a.createElement(u.a,{container:!0,spacing:3,justify:"center"},c&&c.combination.map((function(t,n){return r.a.createElement(u.a,{item:!0,key:n},r.a.createElement(I.a,{className:e.symbolContainer,bgcolor:g!==n?"#bbdefb":"inherit",onClick:function(){return function(e){e===c.uniqueIndex?(f(m+1),x(z)):(f(0),x(N))}(n)},onMouseEnter:function(){return h(n)},onMouseLeave:function(){return h(-1)}},r.a.createElement(k,{src:t.img,className:e.img,hidden:g!==n})))}))),r.a.createElement(I.a,{display:"flex",flexDirection:"column",alignItems:"center",width:400,m:"auto",mb:5},r.a.createElement(L.a,{variant:"h6",gutterBottom:!0},"Score: ".concat(m)),v===z&&r.a.createElement(S.a,{severity:"success"},z.msg),v===N&&r.a.createElement(S.a,{severity:"error"},N.msg),v===B&&r.a.createElement(S.a,{severity:"info"},B.msg)),r.a.createElement(I.a,{display:"flex",flexDirection:"column",alignItems:"center",color:"#f2f2f2"},r.a.createElement(L.a,{className:e.score,variant:"h4"},"Score: ".concat(m))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(_,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[43,1,2]]]);
//# sourceMappingURL=main.21d79ff1.chunk.js.map