import{u as a}from"./transport.db85710e.js";import{d as r,c as s,a as e,F as u,r as p,u as i,o as n,t as l}from"./index.2f1a8dac.js";import"./arriving.dfdb1a8b.js";const c={style:{"text-align":"left",width:"100%"}},d=e("thead",null,[e("tr",null,[e("th",null,"Number"),e("th",null,"Route")])],-1),y=r({__name:"RoutesView",setup(m){const{allRoutes:o}=a();return(_,f)=>(n(),s("table",c,[d,e("tbody",null,[(n(!0),s(u,null,p(i(o),t=>(n(),s("tr",{key:t.id},[e("td",null,l(t.routeNumber),1),e("td",null,l(t.stopA===t.stopB?t.stopA:`${t.stopA} - ${t.stopB}`),1)]))),128))])]))}});export{y as default};
