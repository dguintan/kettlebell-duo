const VERSION='duo-v1.0.0';
const SHELL=['./','./index.html','./style.css','./app.js','./data.js','./cloud.js','./store.js','./config.js','./manifest.webmanifest','./assets/icon-192.png','./assets/icon-512.png','./assets/carry.svg','./assets/suitcase.svg','./assets/hinge.svg','./assets/squat.svg','./assets/push.svg','./assets/walk.svg','./assets/muscles.svg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(VERSION).then(c=>c.addAll(SHELL))));
self.addEventListener('message',e=>{if(e.data==='ACTIVATE')self.skipWaiting();});
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('duo-')&&k!==VERSION).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 const u=new URL(e.request.url); if(e.request.method!=='GET')return;
 if(u.origin===self.location.origin){
   e.respondWith(fetch(e.request).then(r=>{if(r.ok){const copy=r.clone();caches.open(VERSION).then(c=>c.put(e.request,copy));}return r;}).catch(async()=>{const cached=await caches.match(e.request);if(cached)return cached;if(e.request.mode==='navigate')return caches.match('./index.html');return Response.error();}));
 }else if(u.origin==='https://www.gstatic.com'&&u.pathname.startsWith('/firebasejs/13.0.0/')){
   e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{if(res.ok){const copy=res.clone();caches.open(VERSION).then(c=>c.put(e.request,copy));}return res;})));
 }
 // 登入、Firestore 資料與跨來源私人回應不放進 Service Worker 快取。
});
