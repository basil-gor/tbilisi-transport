import{A as S,F as h}from"./FavoriteButton.434ebb35.js";import{d as v,f as b,r as y,c as a,b as t,i as N,t as n,u as e,x as g,h as k,F as p,g as x,y as B,o as s}from"./index.d54b0622.js";import{u as C}from"./transport-stops.e153c93d.js";const F=t("br",null,null,-1),T={style:{"text-align":"left",width:"100%"}},V=t("thead",null,[t("tr",null,[t("th",null,"Number"),t("th",null,"Destination"),t("th",null,"Time")])],-1),E=v({__name:"StopView",setup(w){const o=B().params.stopCode.toString(),{addOrRemoveStopInFavorites:d,isStopInFavorites:m,getStopByCode:c}=C(),f=b(()=>c(o)),r=y();return S.getArrivalTime(o).then(u=>r.value=u),(u,i)=>(s(),a(p,null,[t("h2",null,[N(" Stop "+n(e(o))+" ",1),e(f)!==void 0?(s(),g(h,{key:0,"is-full":e(m)(e(o)),style:{margin:"5px"},onClick:i[0]||(i[0]=l=>e(d)(e(o)))},null,8,["is-full"])):k("",!0)]),F,t("table",T,[V,t("tbody",null,[(s(!0),a(p,null,x(r.value,(l,_)=>(s(),a("tr",{key:l.routeNumber+_},[t("td",null,n(l.routeNumber),1),t("td",null,n(l.destinationStopName),1),t("td",null,n(l.arrivalTime),1)]))),128))])])],64))}});export{E as default};
