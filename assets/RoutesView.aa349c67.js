import{A as n}from"./arriving.6f44cab0.js";import{d as i,r as l,c as r,a as c,F as u,o,b as p,t,f as m}from"./index.f5dd4576.js";const _=m("br",null,null,-1),v=i({__name:"RoutesView",setup(d){const s=l([]);return n.getAllRoutes().then(a=>s.value=a),(a,f)=>(o(!0),r(u,null,c(s.value,e=>(o(),r("div",{key:e.id},[p(t(e.routeNumber)+": "+t(e.stopA)+" - "+t(e.stopB)+" ",1),_]))),128))}});export{v as default};