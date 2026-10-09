# 一起練・壺鈴日常

可直接部署到 GitHub Pages 的雙人 PWA。純 HTML／CSS／JavaScript，不需 npm、不需編譯、不使用 Sites。

## 已包含

- 各自帳號、雙人配對、互看完整訓練／量測與摘要；只有本人能修改自己的紀錄。
- 起步 10 分鐘／培養 15 分鐘／穩定 20 分鐘，疲累日另有 5 分鐘短版。
- 六種動作的三階段姿勢圖、肌群區域圖、要領與替代方式。
- 計時、手動暫停、課間休息；切到背景會暫停，不把背景時間假裝成運動。
- 每組實際次數、秒數、總重量與費力程度；不把自動計時當成動作次數。
- 個別週目標、還差幾次、週／月／全部／自訂日期統計。
- 體重、體脂率、腰圍選填與趨勢圖；訓練與量測 CSV 可用 Excel 開啟。
- Firebase 即時同步，IndexedDB 待送佇列；斷線不假裝已上傳。
- 單機試用可先查看及操作；試用與正式帳號資料分開，不會自動混入雲端。

## 檔案

|檔案|用途|
|---|---|
|index.html、style.css、app.js|主要介面與功能|
|data.js|課表、動作要領與引用來源|
|cloud.js|Firebase 登入、配對、讀寫|
|store.js|離線暫存與待同步佇列|
|config.js|填入你自己的 Firebase Web 設定|
|sw.js、manifest.webmanifest|PWA 安裝與離線快取|
|assets/|六種動作圖、肌群圖與手機圖示|
|firestore.rules|本工具專用 Firestore 安全規則|
|DEPLOY.md|逐步部署說明|
|TRAINING.md|課表邏輯與權威資料來源|

先閱讀 DEPLOY.md。你的 Firebase 專案資訊尚未填入，也尚未部署至你的 GitHub；雲端實際登入、配對與跨手機同步要在設定後驗證。
