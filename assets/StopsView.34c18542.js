import{u as d}from"./transport.19fcb74e.js";import{d as i,s as _,c as o,a as e,F as m,r as p,u as f,o as a,b as s,w as r,e as l,t as u,f as h}from"./index.e75a53a0.js";import"./arriving.dfdb1a8b.js";const k={style:{"text-align":"left",width:"100%"}},x=e("thead",null,[e("tr",null,[e("th",null,"Code"),e("th",null,"Name")])],-1),b=i({__name:"StopsView",setup(w){const{allStops:c}=_(d());return(y,C)=>{const n=h("RouterLink");return a(),o("table",k,[x,e("tbody",null,[(a(!0),o(m,null,p(f(c).slice(0,5),t=>(a(),o("tr",{key:t.id},[e("td",null,[s(n,{to:`/stop/${t.code}`},{default:r(()=>[l(u(t.code),1)]),_:2},1032,["to"])]),e("td",null,[s(n,{to:`/stop/${t.code}`},{default:r(()=>[l(u(t.name),1)]),_:2},1032,["to"])])]))),128))])])}}});export{b as default};
