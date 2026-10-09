# GitHub Pages 與 Firebase 部署步驟

## 1. 準備 Firebase（建議使用獨立的新專案）

你已使用過 Firebase，可以沿用操作方式。為了避免覆蓋另一個 PWA 的安全規則，這份說明建議建立獨立專案。若要共用原專案，必須先保留原有完整 rules，把本工具的 duoUsers、duoHomes、duoInvites 規則合併到同一個 documents 區塊；**不要直接覆蓋原專案的規則，也不要保留任何全庫 allow read, write: if true。**

1. 開啟 https://console.firebase.google.com/ → 新增專案。這個工具不用 Analytics。
2. 在專案內新增「網頁應用程式」（`</>` 圖示）。不用 Firebase Hosting，網頁會放 GitHub。
3. 複製 firebaseConfig 中的 apiKey、authDomain、projectId、storageBucket、messagingSenderId、appId。
4. 編輯 `config.js`，把 `window.FIREBASE_CONFIG = null;` 改成以下格式，填你自己的值：

```js
window.FIREBASE_CONFIG = {
  apiKey: "你的網頁 apiKey",
  authDomain: "你的專案.firebaseapp.com",
  projectId: "你的專案 ID",
  storageBucket: "Firebase 提供的值",
  messagingSenderId: "Firebase 提供的值",
  appId: "Firebase 提供的值"
};
```

這是公開網頁連線設定，可以放在 GitHub；保護資料的是登入與安全規則。不要貼服務帳號 JSON、private_key、管理員密鑰或個人密碼。也可不編輯檔案，在兩支手機「設定與同步」分別貼入同一份 JSON；不能貼整段 `const firebaseConfig = ...`。

5. Build → Authentication → Get started → Sign-in method → 啟用 **Email/Password（電子郵件／密碼）**。本版不使用 Google 彈出登入。
6. Authentication → Settings → Authorized domains 加入你的 `帳號.github.io` 網域，不加 `/儲存庫名稱`。如果有自訂網域，也加入該網域。
7. Build → Firestore Database → 建立資料庫，使用預設資料庫 `(default)`。選擇正式／鎖定模式，區域選最適合你的位置；不要使用公開測試規則。
8. Firestore → Rules：若為新的專案，把 `firestore.rules` 全文貼上，按 Publish。介面若顯示規則錯誤，先不要進行正式紀錄，保留錯誤訊息以便排查。

這版不需要 Cloud Functions、Storage 或管理員後端。Firebase 的方案與額度以你主控台當下顯示為準，不保證永遠免費。起步不必為本工具主動開啟付費服務；遇到額度限制先查看 Usage。

## 2. 上傳 GitHub

1. 在 GitHub 建立新的儲存庫，例如 `kettlebell-duo`。一般免費帳號可使用公開儲存庫。
2. 解壓縮下載檔，進入 `kettlebell-pwa` 資料夾。
3. 在儲存庫頁選 Add file → Upload files，將資料夾內的檔案及 `assets` 資料夾一起拖入。
4. `index.html` 必須在儲存庫最上層；不要再外包一層 `kettlebell-pwa`。
5. 確認 `assets` 內的 `.svg`、`.png` 都有上傳；`sw.js` 和 `config.js` 也要上傳。提交 Commit changes。
6. 儲存庫 Settings → Pages → Build and deployment → Source 選 **Deploy from a branch**。
7. Branch 選 **main**，資料夾選 **/(root)**，按 Save。
8. 待 GitHub 顯示發布成功後，開啟它提供的網址，形式是 `https://你的帳號.github.io/kettlebell-duo/`。不要直接雙擊 index.html；PWA 與模組需要 HTTPS 或 localhost。

公開的是程式與教學內容；私人運動紀錄存於受規則保護的 Firebase，不會自動寫進 GitHub。

## 3. 兩人第一次配對

1. 你在自己的手機開啟網址 → 設定與同步 → 用自己的信箱和至少 8 字元密碼註冊。
2. 登入後按「建立雙人空間（我）」。建立者對應「我」分頁。
3. 複製配對碼，私下交給太太；不要貼在公開 GitHub、留言或網頁。
4. 太太在自己的手機開啟同一網址，以**不同的信箱**註冊另一個帳號。
5. 太太貼上配對碼，按「加入空間（伴侶）」。加入者對應「伴侶」分頁。
6. 配對碼七天有效。過期且還沒配對時，由你按「更新配對碼」。加入後空間最多兩人，不允許第三人加入。
7. 各自在設定填名稱、年齡、身高、體重及週目標。不要把兩人的個人資料填進公開程式檔案。
8. 可切換兩人分頁查看全部紀錄與摘要；查看另一人時不能代為開始訓練或修改資料。

## 4. 安裝與第一次驗證

Android：Chrome 的選單 → 安裝／新增至主畫面。iPhone：Safari → 分享 → 加入主畫面。

建議在開始正式訓練前完成以下驗證：

- 兩人各記一筆測試活動與量測，確認另一支手機即時看到。
- 兩人切到對方分頁，確認不能修改對方資料。
- 你關閉網路後記一筆，畫面应顯示待同步。重開網路並保留應用程式開啟，待送筆數應歸零，太太看到同一筆且沒有重複。
- 下載 CSV，確認日期、動作次數、重量及量測值。
- 測試後可在訓練明細刪掉自己的測試訓練。量測更正請新增正確量測或在 Firebase 主控台刪除測試量測；本版尚未提供量測刪除按鈕。

首次登入、配對、載入 Firebase SDK 需要網路。完成過連線的同一裝置，離線時使用本機快取與待送佇列；無痕模式、清除瀏覽器資料或卸載可能刪掉尚未同步的本機資料。自動同步是應用程式開啟且恢復網路時執行，不保證關閉手機應用程式時仍在背景上傳。

## 5. 日後更新

更新時一併上傳所有變動檔案，尤其 `sw.js`。修改 `sw.js` 的 VERSION，例如 `duo-v1.0.1`，確保新快取與舊版分開。完成訓練後關閉所有此網站頁籤，再重新開啟。不要先清除資料，先確認待同步筆數為零。

## 常見狀況

|狀況|檢查方式|
|---|---|
|仍顯示單機試用|確認 config.js 有填值，重新載入，再登入|
|auth/operation-not-allowed|啟用電子郵件／密碼登入|
|permission-denied|確認貼入的是本版完整 rules；不要為排錯改成全庫公開|
|配對失敗|兩人不同帳號、同一 Firebase 專案；碼未過期、空間還未加入伴侶|
|圖解不見|assets 資料夾與檔案名稱大小寫是否完整|
|手機還是舊版|一起更新 sw.js 的 VERSION，關閉全部頁籤後重開|
|離線有紀錄、另一人看不到|先恢復網路並開啟 app，查看待同步筆數；按重新連線／同步|

官方參考：
- https://firebase.google.com/docs/web/setup
- https://firebase.google.com/docs/web/alt-setup
- https://firebase.google.com/docs/firestore/security/get-started
- https://firebase.google.com/docs/firestore/security/rules-conditions
- https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site
