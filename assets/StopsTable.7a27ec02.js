import{u as k}from"./transport-stops.0c2073fd.js";import{F as w}from"./FavoriteButton.a0e7bbaf.js";import{d as C,r as h,c as a,b as t,F as I,g as T,h as F,o as n,i as d,w as m,j as f,t as y,u as x,p as V,k as B,l as N,_ as E}from"./index.14b61233.js";const L=o=>(V("data-v-785a1edc"),o=o(),B(),o),R={style:{"text-align":"left"}},$=L(()=>t("thead",null,[t("tr",null,[t("th",{style:{width:"60px"}},"Code"),t("th",{class:"table-middle-td"},"Name"),t("th",{style:{width:"50px"}})])],-1)),A={style:{width:"60px"}},M={class:"table-middle-td"},j={style:{"text-align":"center"}},D={key:0},O=C({__name:"StopsTable",props:{stops:null},setup(o){const s=o,r=s.stops.length>100,S=h(),l=100;let c=1;const i=h(r?s.stops.slice(0,l):s.stops),v=()=>{const p=c*l;c+=1;const _=s.stops.slice(p,c*l);i.value.push(..._)},{addOrRemoveStopInFavorites:b,isStopInFavorites:g}=k();return(p,_)=>{const u=N("RouterLink");return n(),a("table",R,[$,t("tbody",{ref_key:"tbodyElement",ref:S},[(n(!0),a(I,null,T(i.value,e=>(n(),a("tr",{key:e.id},[t("td",A,[d(u,{to:`/stop/${e.code}`},{default:m(()=>[f(y(e.code),1)]),_:2},1032,["to"])]),t("td",M,[d(u,{to:`/stop/${e.code}`},{default:m(()=>[f(y(e.name),1)]),_:2},1032,["to"])]),t("td",j,[d(w,{"is-full":x(g)(e.code),onClick:P=>x(b)(e.code)},null,8,["is-full","onClick"])])]))),128)),r?(n(),a("tr",D,[t("td",{style:{"text-align":"center",cursor:"pointer",color:"lightblue"},colspan:"3",onClick:v}," Show More ")])):F("",!0)],512)])}}});const H=E(O,[["__scopeId","data-v-785a1edc"]]);export{H as S};