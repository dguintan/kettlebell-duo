// SDK 版本依 Firebase 官方 CDN 文件固定；只在啟用雲端時載入。
let api;
export async function connect(config,onAuth){
 const base='https://www.gstatic.com/firebasejs/13.0.0/';
 const [A,U,F]=await Promise.all([import(base+'firebase-app.js'),import(base+'firebase-auth.js'),import(base+'firebase-firestore.js')]);
 const app=A.initializeApp(config);const auth=U.getAuth(app),db=F.getFirestore(app);api={U,F,auth,db};
 await U.setPersistence(auth,U.browserLocalPersistence);
 return U.onAuthStateChanged(auth,onAuth);
}
export const login=(email,password)=>api.U.signInWithEmailAndPassword(api.auth,email,password);
export const register=(email,password)=>api.U.createUserWithEmailAndPassword(api.auth,email,password);
export const logout=()=>api.U.signOut(api.auth);
export const resetPassword=email=>api.U.sendPasswordResetEmail(api.auth,email);
const ref=(...parts)=>api.F.doc(api.db,...parts);
const randomCode=()=>Array.from(crypto.getRandomValues(new Uint8Array(16)),b=>b.toString(16).padStart(2,'0')).join('');
export async function getMembership(uid){const d=await api.F.getDoc(ref('duoUsers',uid));return d.exists()?d.data():null;}
export async function createHome(uid){
 const existing=await getMembership(uid);if(existing)return existing;
 const home=crypto.randomUUID(),code=randomCode(),batch=api.F.writeBatch(api.db);
 batch.set(ref('duoHomes',home),{owner:uid,partner:null,joinProof:null,invite:code,createdAt:Date.now()});
 batch.set(ref('duoInvites',code),{home,owner:uid,expiresAt:Date.now()+7*86400000});
 batch.set(ref('duoUsers',uid),{home,role:'me'});
 batch.set(ref('duoHomes',home,'profiles','me'),{name:'我',mode:'start',loaded:false});
 batch.set(ref('duoHomes',home,'profiles','wife'),{name:'伴侶',mode:'start',loaded:false});
 await batch.commit();return {home,role:'me'};
}
export async function joinHome(uid,code){
 code=code.trim().toLowerCase();if(!/^[a-f0-9]{32}$/.test(code))throw Error('配對碼應為 32 個英數字元。');
 const existing=await getMembership(uid);if(existing)throw Error('此帳號已加入雙人空間，不能重複配對。');
 const d=await api.F.getDoc(ref('duoInvites',code));if(!d.exists())throw Error('找不到配對碼。');const invite=d.data();
 if(invite.owner===uid)throw Error('請伴侶使用另一個帳號加入。');if(invite.expiresAt<Date.now())throw Error('配對碼已過期，請建立者更新配對碼。');
 const batch=api.F.writeBatch(api.db);batch.update(ref('duoHomes',invite.home),{partner:uid,joinProof:code});batch.set(ref('duoUsers',uid),{home:invite.home,role:'wife'});await batch.commit();return {home:invite.home,role:'wife'};
}
export async function renewInvite(home,uid){const code=randomCode(),batch=api.F.writeBatch(api.db);batch.set(ref('duoInvites',code),{home,owner:uid,expiresAt:Date.now()+7*86400000});batch.update(ref('duoHomes',home),{invite:code});await batch.commit();return code;}
export function listen(home,cb,error){
 const F=api.F;return [
 F.onSnapshot(ref('duoHomes',home),d=>cb('home',d.data()),error),
 F.onSnapshot(F.collection(api.db,'duoHomes',home,'profiles'),q=>cb('profiles',Object.fromEntries(q.docs.map(d=>[d.id,d.data()]))),error),
 F.onSnapshot(F.query(F.collection(api.db,'duoHomes',home,'records'),F.orderBy('endedAt','desc')),q=>cb('records',q.docs.map(d=>({id:d.id,...d.data()}))),error),
 F.onSnapshot(F.query(F.collection(api.db,'duoHomes',home,'cheers'),F.orderBy('createdAt','desc'),F.limit(30)),q=>cb('cheers',q.docs.map(d=>({id:d.id,...d.data()}))),error),
 F.onSnapshot(F.query(F.collection(api.db,'duoHomes',home,'measurements'),F.orderBy('createdAt','desc')),q=>cb('measurements',q.docs.map(d=>({id:d.id,...d.data()}))),error)
 ];
}
export async function save(home,collection,id,value){await api.F.setDoc(ref('duoHomes',home,collection,id),value);}
export async function remove(home,collection,id){await api.F.deleteDoc(ref('duoHomes',home,collection,id));}
