import{d as f,r as m,c as t,b as c,t as r,u as y,l as s,F as u,j as l,i as v,q as R,o,a as h,k as p,m as g}from"./index.6a6331c3.js";import{A as k}from"./arriving.e2f468c4.js";const w=c("br",null,null,-1),D=c("br",null,null,-1),b={key:0},B=c("br",null,null,-1),V={key:0},x=c("br",null,null,-1),L=f({__name:"RouteView",setup(C){const d=R().params.routeId.toString(),n=m(),a=m();return k.getRouteScheme(d,!0).then(i=>n.value=i),k.getRouteScheme(d,!1).then(i=>a.value=i),(i,N)=>{const _=g("RouterLink");return o(),t(u,null,[c("h2",null,"Route "+r(y(d)),1),w,s(" // TODO add to favorites "),D,n.value!==void 0?(o(),t(u,{key:0},[s(" Forward: "),n.value.directionDescription?(o(),t("div",b,r(n.value.directionDescription),1)):l("",!0),(o(!0),t(u,null,v(n.value.stops,e=>(o(),t("div",{key:e.code},[h(_,{to:`/stop/${e.code}`},{default:p(()=>[s(r(e.code)+": "+r(e.name),1)]),_:2},1032,["to"])]))),128)),B],64)):l("",!0),a.value!==void 0?(o(),t(u,{key:1},[s(" Backward: "),a.value.directionDescription?(o(),t("div",V,r(a.value.directionDescription),1)):l("",!0),(o(!0),t(u,null,v(a.value.stops,e=>(o(),t("div",{key:e.code},[h(_,{to:`/stop/${e.code}`},{default:p(()=>[s(r(e.code)+": "+r(e.name),1)]),_:2},1032,["to"])]))),128)),x],64)):l("",!0)],64)}}});export{L as default};
