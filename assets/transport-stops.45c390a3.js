import{e as u,r as f,f as v,g as d}from"./index.3adf3495.js";import{A as S}from"./FavoriteButton.36f4fa36.js";const m=u("transport-stops",()=>{const o=f([]);S.getAllStops().then(e=>o.value=e.sort((r,p)=>parseInt(r.code)>parseInt(p.code)?1:-1));function s(e){return o.value.find(r=>r.code===e)}const t=v("favoritesStopsCodes",new Set);function a(e){return t.value.has(e)}function n(e){a(e)?t.value.delete(e):t.value.add(e)}const i=d(()=>Array.from(t.value).map(e=>s(e)).filter(e=>e!==void 0));return{allStops:o,getStopByCode:s,isStopInFavorites:a,addOrRemoveStopInFavorites:n,favoritesStops:i}});export{m as u};
