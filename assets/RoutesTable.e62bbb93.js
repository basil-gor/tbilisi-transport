import{F as p}from"./FavoriteButton.45ae1062.js";import{u as m}from"./transport-routes.9253e600.js";import{d as h,c as s,b as e,F as b,g as f,o as a,i as r,w as l,j as d,t as c,u,p as y,k as x,l as R,_ as v}from"./index.8e262825.js";const N=o=>(y("data-v-cac7549d"),o=o(),x(),o),k={style:{"text-align":"left",width:"100%"}},w=N(()=>e("thead",null,[e("tr",null,[e("th",{style:{width:"60px"}},"Number"),e("th",{class:"table-middle-td"},"Route"),e("th",{style:{width:"50px"}})])],-1)),g={style:{width:"60px"}},B={class:"table-middle-td"},F={style:{"text-align":"center"}},I=h({__name:"RoutesTable",props:{routes:{type:Array,required:!0}},setup(o){const{addOrRemoveRouteInFavorites:i,isRouteInFavorites:_}=m();return(C,S)=>{const n=R("RouterLink");return a(),s("table",k,[w,e("tbody",null,[(a(!0),s(b,null,f(o.routes,t=>(a(),s("tr",{key:t.id},[e("td",g,[r(n,{to:`/route/${t.routeNumber}`},{default:l(()=>[d(c(t.routeNumber),1)]),_:2},1032,["to"])]),e("td",B,[r(n,{to:`/route/${t.routeNumber}`},{default:l(()=>[d(c(t.stopA===t.stopB?t.stopA:`${t.stopA} - ${t.stopB}`),1)]),_:2},1032,["to"])]),e("td",F,[r(p,{"is-full":u(_)(t.routeNumber),onClick:T=>u(i)(t.routeNumber)},null,8,["is-full","onClick"])])]))),128))])])}}});const V=v(I,[["__scopeId","data-v-cac7549d"]]);export{V as R};
