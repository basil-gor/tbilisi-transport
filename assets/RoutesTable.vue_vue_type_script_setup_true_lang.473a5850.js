import{u}from"./transport.62601bd9.js";import{d as c,c as o,b as e,F as d,i as p,o as s,t as n,u as r}from"./index.d58d2666.js";const m={style:{"text-align":"left",width:"100%"}},_=e("thead",null,[e("tr",null,[e("th",null,"Number"),e("th",null,"Route"),e("th",null,"Actions")])],-1),f=["onClick"],R=c({__name:"RoutesTable",props:{routes:{type:Array,required:!0}},setup(l){const{addOrRemoveRouteInFavorites:a,isRouteInFavorites:i}=u();return(h,b)=>(s(),o("table",m,[_,e("tbody",null,[(s(!0),o(d,null,p(l.routes,t=>(s(),o("tr",{key:t.id},[e("td",null,n(t.routeNumber),1),e("td",null,n(t.stopA===t.stopB?t.stopA:`${t.stopA} - ${t.stopB}`),1),e("td",{onClick:v=>r(a)(t),style:{cursor:"pointer",color:"blue"}},n(r(i)(t)?"Remove from favorites":"Add to favorites"),9,f)]))),128))])]))}});export{R as _};
