import{a as I,F as g}from"./FavoriteButton.b5e8f842.js";import{u as N}from"./transport-routes.6535fcb6.js";import{d as k,t as B,r as u,w as T,c as d,b as t,F as A,g as C,o as i,h as c,i as h,j as v,k as f,u as b,p as F,l as S,m as V,_ as $}from"./index.e2d6e5b9.js";const L=s=>(F("data-v-04e066b7"),s=s(),S(),s),j={style:{"text-align":"left",width:"100%"}},q=L(()=>t("thead",null,[t("tr",null,[t("th",{style:{width:"60px"}},"Number"),t("th",{class:"table-middle-td"},"Route"),t("th",{style:{width:"50px"}})])],-1)),D={style:{width:"60px"}},E={class:"table-middle-td"},M={style:{"text-align":"center"}},O=k({__name:"RoutesTable",props:{routes:{type:Array,required:!0}},setup(s){const x=s,{routes:o}=B(x),a=u(!1),l=50;let n=1;const r=u([]);T(o,()=>{a.value=o.value.length>100,r.value=a.value?o.value.slice(0,l):o.value},{deep:!0,immediate:!0});const R=()=>{const p=n*l;n+=1;const _=o.value.slice(p,n*l);r.value.push(..._)};I(u(document),()=>{!a.value||R()},{distance:10});const{addOrRemoveRouteInFavorites:y,isRouteInFavorites:w}=N();return(p,_)=>{const m=V("RouterLink");return i(),d("table",j,[q,t("tbody",null,[(i(!0),d(A,null,C(r.value,e=>(i(),d("tr",{key:e.id},[t("td",D,[c(m,{to:`/route/${e.routeNumber}`},{default:h(()=>[v(f(e.routeNumber),1)]),_:2},1032,["to"])]),t("td",E,[c(m,{to:`/route/${e.routeNumber}`},{default:h(()=>[v(f(e.stopA===e.stopB?e.stopA:`${e.stopA} - ${e.stopB}`),1)]),_:2},1032,["to"])]),t("td",M,[c(g,{"is-full":b(w)(e.routeNumber),onClick:P=>b(y)(e.routeNumber)},null,8,["is-full","onClick"])])]))),128))])])}}});const J=$(O,[["__scopeId","data-v-04e066b7"]]);export{J as R};