import{g as u,h as e}from"./index.39e8d67a.js";import{A as n}from"./arriving.dfdb1a8b.js";const f=u("transport",()=>{const o=e([]);n.getAllRoutes().then(t=>o.value=t);const r=e([]);n.getAllStops().then(t=>r.value=t.sort((l,p)=>parseInt(l.code)>parseInt(p.code)?1:-1));const s=e(0);function a(){s.value++}return{allRoutes:o,allStops:r,increment:a}});export{f as u};
