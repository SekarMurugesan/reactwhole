"use strict";(self.webpackChunkreactworld=self.webpackChunkreactworld||[]).push([[733],{6733:function(e,n,t){t.r(n);var i=t(2982),r=t(885),s=t(2791),c=(t(7632),t(9089)),a=t(7625),d=t(184);n.default=function(){var e,n=(0,s.useState)(""),t=(0,r.Z)(n,2),o=t[0],u=t[1],l=a.Z.cardData.filter((function(e){return Object.keys(e).some((function(n){return e[n].toString().toLowerCase().includes(o.toString().toLowerCase())}))})),f=[{id:12,service:[45,50]},{id:5,service:[7,8,9]}],h=f.find((function(e){return 12===e.id})).service,x=f.find((function(e){return 5===e.id})).service,j=(f.find((function(e){return 12===e.id})).id,f.find((function(e){return 5===e.id})).id,f.find((function(e){return 12===e.id})).service,f.find((function(e){return 5===e.id})).service,{one:h,resultss:x}),m=(e="id",function(n){return n.reduce((function(n,t){var i=t[e];return n[i]=(n[i]||[]).concat(t),n}),{})}),v=(0,s.useState)([]),g=(0,r.Z)(v,2),b=g[0],p=g[1],w=(0,s.useState)(0),Z=(0,r.Z)(w,2),y=Z[0],S=Z[1],N=[],k=(0,s.useState)([]),L=(0,r.Z)(k,2),C=L[0],O=L[1],J=(0,s.useState)(0),E=(0,r.Z)(J,2),D=E[0],z=E[1],H=[];return(0,s.useEffect)((function(){var e=function(e){if(window.innerHeight+window.scrollY>=document.body.offsetHeight){z((function(e){return e+3}));var n=a.Z.cardData.slice(0,D+3);H=[].concat((0,i.Z)(H),(0,i.Z)(n)),O(H)}};return window.addEventListener("scroll",e),function(){window.removeEventListener("scroll",e)}}),[D]),(0,d.jsx)(d.Fragment,{children:(0,d.jsxs)("div",{id:"scrollheight",children:[(0,d.jsx)("input",{type:"text",placeholder:"Search...",value:o,onChange:function(e){u(e.target.value)}}),(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),(0,d.jsx)("section",{className:"p-4 container",children:(0,d.jsx)("div",{className:"row justify-content-center",children:l.map((function(e,n){return(0,d.jsxs)(c.Z,{style:{width:"18rem"},children:[(0,d.jsx)(c.Z.Img,{variant:"top",src:e.img,style:{height:"15rem"}}),(0,d.jsxs)(c.Z.Body,{children:[(0,d.jsx)(c.Z.Title,{children:e.title}),(0,d.jsx)(c.Z.Text,{children:"Some quick example text to build on the card title and make up the bulk of the card's content."}),(0,d.jsx)("button",{variant:"primary",children:"Go somewhere"})]})]},e.id)}))})}),JSON.stringify(h),JSON.stringify(x),(0,d.jsx)("br",{}),JSON.stringify(j),(0,d.jsx)("br",{}),JSON.stringify(function(e){var n=[],t=[];return e.forEach((function(e){var i={};t[e.id]||(t[e.id]=[],i[e.id]=t[e.id],n.push(i)),t[e.id].push(e.service)})),n}(f),void 0,4),(0,d.jsx)("br",{}),JSON.stringify(m(f)),(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),(0,d.jsx)("div",{className:"heading",children:"Lazy loading-load more"}),(0,d.jsxs)("div",{className:"text-center",children:[b.map((function(e){return(0,d.jsx)("img",{src:e.img,alt:"img of nature",width:"400px",height:"300px"})})),(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),(0,d.jsx)("button",{onClick:function(){!function(e,n){var t=a.Z.cardData.slice(e,n);N=[].concat((0,i.Z)(N),(0,i.Z)(t)),p(N)}(0,y+3),S(y+3)},disabled:y>=21,children:"Load more"})]}),(0,d.jsx)("br",{}),(0,d.jsx)("div",{className:"heading",children:"Lazy loading-infinite scroll"}),(0,d.jsxs)("div",{className:"text-center",children:[C.map((function(e){return(0,d.jsx)("img",{src:e.img,alt:"img of nature",width:"400px",height:"300px"})})),(0,d.jsx)("br",{}),(0,d.jsx)("br",{})]}),(0,d.jsx)("br",{})]})})}}}]);
//# sourceMappingURL=733.c646215b.chunk.js.map