import{u as f,A as S}from"./transport.275ce726.js";import{d as h,p as b,r as y,c as s,b as t,t as o,u as e,j as C,F as p,i as N,q as k,o as a}from"./index.5d01a30b.js";const T=t("br",null,null,-1),g={style:{"text-align":"left",width:"100%"}},B=t("thead",null,[t("tr",null,[t("th",null,"Number"),t("th",null,"Destination"),t("th",null,"Time")])],-1),w=h({__name:"StopView",setup(F){const l=k().params.stopCode.toString(),{addOrRemoveStopInFavorites:m,isStopInFavorites:c,getStopByCode:v}=f(),r=b(()=>v(l)),u=y();return S.getArrivalTime(l).then(i=>u.value=i),(i,d)=>(a(),s(p,null,[t("h2",null,"Stop "+o(e(l)),1),e(r)!==void 0?(a(),s("div",{key:0,onClick:d[0]||(d[0]=()=>e(r)!==void 0&&e(m)(e(r))),style:{cursor:"pointer",color:"#0aa0c9"}},o(e(c)(e(r))?"Remove from favorites":"Add to favorites"),1)):C("",!0),T,t("table",g,[B,t("tbody",null,[(a(!0),s(p,null,N(u.value,(n,_)=>(a(),s("tr",{key:n.routeNumber+_},[t("td",null,o(n.routeNumber),1),t("td",null,o(n.destinationStopName),1),t("td",null,o(n.arrivalTime),1)]))),128))])])],64))}});export{w as default};
