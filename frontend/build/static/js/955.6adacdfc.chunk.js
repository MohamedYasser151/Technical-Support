"use strict";(self.webpackChunkproject1=self.webpackChunkproject1||[]).push([[955],{6955:function(e,r,t){t.r(r),t.d(r,{default:function(){return _}});var n=t(4165),a=t(5861),c=t(9439),s=t(390),i=(t(4743),t(5545)),o=t(8046),l={nav:"employee_nav__iK9UE",bodyenplo:"employee_bodyenplo__QL+Xt",tablee:"employee_tablee__NOTfg",h1:"employee_h1__XG7wI",email:"employee_email__fsv0A"},d=t(7105),h=t(1413),u=t(5987),x=t(7715),m=t.n(x),j=t(4914),p=t(6047),f=t(2559),v=["as","bsPrefix","variant","size","active","disabled","className"],b=s.forwardRef((function(e,r){var t=e.as,n=e.bsPrefix,a=e.variant,s=void 0===a?"primary":a,i=e.size,o=e.active,l=void 0!==o&&o,d=e.disabled,x=void 0!==d&&d,b=e.className,y=(0,u.Z)(e,v),_=(0,p.vE)(n,"btn"),g=(0,j.FT)((0,h.Z)({tagName:t,disabled:x},y)),N=(0,c.Z)(g,2),Z=N[0],k=N[1].tagName;return(0,f.jsx)(k,(0,h.Z)((0,h.Z)((0,h.Z)({},Z),y),{},{ref:r,disabled:x,className:m()(b,_,l&&"active",s&&"".concat(_,"-").concat(s),i&&"".concat(_,"-").concat(i),y.href&&x&&"disabled")}))}));b.displayName="Button";var y=b;var _=function(){var e=(0,s.useState)([]),r=(0,c.Z)(e,2),t=r[0],h=r[1];(0,i.s0)(),(0,s.useEffect)((function(){fetch("http://localhost:8083/services").then((function(e){return e.json()})).then((function(e){Array.isArray(e)?h(e):console.error("Expected data to be an array, but got:",e)})).catch((function(e){return console.log(e)}))}),[]);var u=function(e){if(!Array.isArray(e))return console.error("Expected data to be an array, but got:",e),{};var r={};return e.forEach((function(e){r[e.namedoctor]?r[e.namedoctor].push(e):r[e.namedoctor]=[e]})),r}(t),x=function(){var e=(0,a.Z)((0,n.Z)().mark((function e(r){return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.delete("http://localhost:8083/removetest/".concat(r));case 3:window.location.reload(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error("Error deleting record:",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(r){return e.apply(this,arguments)}}();return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("div",{className:l.nav,children:[(0,f.jsx)("img",{src:d,alt:""}),(0,f.jsx)("h5",{children:"Technical Support"})]}),(0,f.jsx)("div",{className:l.bodyenplo,children:(0,f.jsxs)("div",{className:l.tablee,children:[(0,f.jsxs)("h1",{className:l.h1,children:["Technical Support",(0,f.jsx)("h1",{children:" IT"})]}),(0,f.jsxs)("table",{children:[(0,f.jsx)("thead",{children:(0,f.jsxs)("tr",{children:[(0,f.jsx)("th",{children:"id"}),(0,f.jsx)("th",{children:"Name Doctor"}),(0,f.jsx)("th",{children:"Devices"}),(0,f.jsx)("th",{children:"Name Devices"}),(0,f.jsx)("th",{children:"Reports"}),(0,f.jsx)("th",{children:"Delete"})]})}),(0,f.jsx)("tbody",{children:Object.keys(u).map((function(e){return(0,f.jsxs)(s.Fragment,{children:[(0,f.jsx)("tr",{children:(0,f.jsx)("td",{colSpan:"7"})}),u[e].map((function(r,t){return(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{children:r.id}),(0,f.jsx)("td",{children:e}),(0,f.jsx)("td",{children:r.nameimages}),(0,f.jsx)("td",{children:(0,f.jsx)("img",{src:r.images,alt:"",className:l.image})}),(0,f.jsx)("td",{children:r.textarea}),(0,f.jsx)("td",{children:(0,f.jsx)(y,{onClick:function(){return x(r.id)},children:"Delete"})})]},t)}))]},e)}))})]})]})})]})}}}]);
//# sourceMappingURL=955.6adacdfc.chunk.js.map