import{d as D,g as B,r as v,c as d,b as u,l as T,m as F,u as t,a as f,D as r,y as q,F as y,E as A,o as s,p as O,q as E,G as $,_ as G}from"./index.581cf3fe.js";import{A as b,F as H}from"./FavoriteButton.969c48f0.js";import{S as C}from"./StopsTable.037aee29.js";import{u as W}from"./transport-routes.3dde5bf7.js";import{u as j}from"./transport-stops.d9089dbe.js";const k=h=>(O("data-v-209669a8"),h=h(),E(),h),z={class:"route-view-header"},J={class:"route-view-header__title"},K={key:0,class:"route-view-header__direction-switcher"},L=["checked"],M=k(()=>u("br",null,null,-1)),P={key:0},Q=k(()=>u("br",null,null,-1)),U={key:0},X=k(()=>u("br",null,null,-1)),Y=D({__name:"RouteView",setup(h){const m=A(),l=m.params.routeNumber.toString(),_=m.query.stopCode?m.query.stopCode.toString():void 0,{addOrRemoveRouteInFavorites:x,isRouteInFavorites:I,getRouteByNumber:N}=W(),{getStopByCode:S}=j(),V=B(()=>N(l)),g=v(),w=v(),n=v([]),i=v([]),a=v(!0),R=(c,e)=>e!==void 0?c.some(o=>o.code===e):!1;b.getRouteScheme(l,!0).then(c=>{var e;g.value=c,n.value=(e=g.value)==null?void 0:e.stops.map(o=>S(o.code)).filter(o=>o!==void 0),R(n.value,_)&&(a.value=!0)}),b.getRouteScheme(l,!1).then(c=>{var e;w.value=c,i.value=(e=w.value)==null?void 0:e.stops.map(o=>S(o.code)).filter(o=>o!==void 0),R(i.value,_)&&(a.value=!1)});const p=B(()=>n.value.length===0||i.value.length===0);return(c,e)=>(s(),d(y,null,[u("div",z,[u("h2",J,[T(" Route "+F(t(l))+" ",1),t(V)!==void 0?(s(),f(H,{key:0,"is-full":t(I)(t(l)),style:{margin:"5px"},onClick:e[0]||(e[0]=o=>t(x)(t(l)))},null,8,["is-full"])):r("",!0)]),t(p)?r("",!0):(s(),d("label",K,[q(u("input",{type:"checkbox",checked:a.value,onInput:e[1]||(e[1]=o=>a.value=!a.value)},null,40,L),[[$,!1]]),u("span",null,F(a.value?"\u2B07 Forward direction showed":"\u2B06 Backward direction showed"),1)]))]),M,g.value!==void 0&&n.value.length!==0&&(a.value||t(p))?(s(),d(y,{key:0},[t(p)?r("",!0):(s(),d("h3",P,"Forward:")),n.value.length!==0?(s(),f(C,{key:1,stops:n.value,"highlighted-stop-code":t(_)},null,8,["stops","highlighted-stop-code"])):r("",!0),Q],64)):r("",!0),w.value!==void 0&&i.value.length!==0&&(!a.value||t(p))?(s(),d(y,{key:1},[t(p)?r("",!0):(s(),d("h3",U,"Backward:")),i.value.length!==0?(s(),f(C,{key:1,stops:i.value,"highlighted-stop-code":t(_)},null,8,["stops","highlighted-stop-code"])):r("",!0),X],64)):r("",!0)],64))}});const ae=G(Y,[["__scopeId","data-v-209669a8"]]);export{ae as default};