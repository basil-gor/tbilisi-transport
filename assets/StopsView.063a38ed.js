import{u as c}from"./transport.db85710e.js";import{d as i,c as o,a as e,F as _,r as m,u as p,o as n,b as r,w as s,e as l,t as u,f}from"./index.2f1a8dac.js";import"./arriving.dfdb1a8b.js";const h={style:{"text-align":"left",width:"100%"}},k=e("thead",null,[e("tr",null,[e("th",null,"Code"),e("th",null,"Name")])],-1),V=i({__name:"StopsView",setup(x){const{allStops:d}=c();return(w,y)=>{const a=f("RouterLink");return n(),o("table",h,[k,e("tbody",null,[(n(!0),o(_,null,m(p(d),t=>(n(),o("tr",{key:t.id},[e("td",null,[r(a,{to:`/stop/${t.code}`},{default:s(()=>[l(u(t.code),1)]),_:2},1032,["to"])]),e("td",null,[r(a,{to:`/stop/${t.code}`},{default:s(()=>[l(u(t.name),1)]),_:2},1032,["to"])])]))),128))])])}}});export{V as default};
