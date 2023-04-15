import{F as A,A as S}from"./FavoriteButton.36f4fa36.js";import{d as D,g as L,r as _,B as $,C as E,w as U,c as r,b as t,l as m,m as s,u as o,a as j,D as k,F as h,i as w,E as q,o as a,j as N,k as I,p as z,n as M,q as V,_ as W}from"./index.3adf3495.js";import{u as G}from"./transport-stops.45c390a3.js";import{u as H}from"./transport-routes.41682643.js";const d=p=>(z("data-v-df53993d"),p=p(),M(),p),J={key:0,style:{opacity:"0.7"}},K=d(()=>t("br",null,null,-1)),P={style:{"text-align":"left",width:"100%"}},Q=d(()=>t("thead",null,[t("tr",null,[t("th",null,"Number"),t("th",null,"Destination"),t("th",{style:{"text-align":"right"}},"Time")])],-1)),X={style:{"text-align":"right"}},Y=d(()=>t("br",null,null,-1)),Z=d(()=>t("h3",null,"Routes on this stop:",-1)),O={class:"routes-block"},tt=d(()=>t("div",{style:{"font-size":"10px","font-style":"italic",display:"flex","flex-direction":"row","flex-wrap":"nowrap"}},[t("span",{style:{color:"#ff7758"}}," Note: "),t("div",{style:{display:"flex","flex-direction":"row","flex-wrap":"wrap",margin:"0 10px"}},[t("span",null," There are more routes possible. "),t("span",null,"We have no more actual available data. ")])],-1)),et=D({__name:"StopView",setup(p){const i=q().params.stopCode.toString(),{addOrRemoveStopInFavorites:T,isStopInFavorites:B,getStopByCode:C}=G(),{getRouteByNumber:R}=H(),c=L(()=>C(i)),y=_([]),F=_([]),f=_([]),b=_(),x=()=>S.getArrivalTime(i).then(n=>{y.value=n});return $(()=>{x().then(()=>{b.value=setInterval(x,15e3)})}),E(()=>{clearInterval(b.value)}),U(c,(n,l)=>{n===void 0||n.id===(l==null?void 0:l.id)||S.getRoutesNumbersAtStop(n.id).then(u=>{F.value=u,f.value=u.map(e=>R(e)).filter(e=>e!==void 0)})},{immediate:!0}),(n,l)=>{const u=V("RouterLink");return a(),r(h,null,[t("h2",null,[m(" Stop "+s(o(i))+" ",1),o(c)!==void 0?(a(),j(A,{key:0,"is-full":o(B)(o(i)),style:{margin:"5px"},onClick:l[0]||(l[0]=e=>o(T)(o(i)))},null,8,["is-full"])):k("",!0)]),o(c)!==void 0?(a(),r("h4",J,s(o(c).name),1)):k("",!0),K,t("table",P,[Q,t("tbody",null,[(a(!0),r(h,null,w(y.value,(e,v)=>(a(),r("tr",{key:e.routeNumber+v},[t("td",null,[N(u,{to:`/route/${e.routeNumber}`},{default:I(()=>[m(s(e.routeNumber),1)]),_:2},1032,["to"])]),t("td",null,s(e.destinationStopName),1),t("td",X,s(e.arrivalTime),1)]))),128))])]),Y,Z,t("div",O,[(a(!0),r(h,null,w(f.value,(e,v)=>{var g;return a(),r("span",{key:e.id,class:"routes-block__route-item"},[N(u,{to:`/route/${e.routeNumber}`},{default:I(()=>[m(s(e.routeNumber),1)]),_:2},1032,["to"]),m(" "+s(v+1===((g=f.value)==null?void 0:g.length)?".":","),1)])}),128))]),tt],64)}}});const rt=W(et,[["__scopeId","data-v-df53993d"]]);export{rt as default};