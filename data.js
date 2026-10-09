export const modes=[
 {id:'start',name:'習慣起步',minutes:10,days:2,rounds:2,work:30,rest:30,warm:90,cool:30,description:'先完成兩次，安排在不連續的日子。其他日子選擇輕鬆散步 5–10 分鐘。'},
 {id:'build',name:'習慣培養',minutes:15,days:2,rounds:3,work:35,rest:30,warm:90,cool:30,description:'維持每週兩次肌力，另選 3 天步行 10–15 分鐘。一次只增加一項。'},
 {id:'steady',name:'穩定累積',minutes:20,days:3,rounds:4,work:40,rest:25,warm:100,cool:60,description:'恢復良好再選每週三次肌力。步行逐步累積，長期朝每週 150 分鐘中等強度活動前進。'}
];
export const exercises=[
 {id:'carry',name:'雙手農夫走路',tag:'負重行走',muscles:['前臂握力','軀幹穩定','臀腿'],zones:['arms','core','legs'],equipment:'兩顆壺鈴；僅在兩手各 10 公斤都能穩定控制時使用',steps:['先徒手練髖折；用髖腿出力拿起壺鈴，避免彎腰猛拉。','兩手垂在身側、手腕自然，肩膀放鬆，身體保持直立。','小步慢走，正常呼吸；停穩後用髖折方式放下。'],cues:'地面清空、目視前方、不聳肩、不憋氣。轉彎先減速，小步轉向。',wrong:'身體側傾、彎腰或步伐凌亂：停止，減輕負荷。',alternative:'若 20 公斤總重太重，先徒手步行或使用兩件更輕且重量相近的器材。',rep:'每組 15–30 秒，提早放下也可以；不可為追秒數硬撐。',source:'https://www.acefitness.org/resources/everyone/exercise-library/359/farmer-s-carry/'},
 {id:'suitcase',name:'單手提箱行走',tag:'左右各練',muscles:['前臂握力','腹斜肌／軀幹穩定','臀腿'],zones:['arms','core','legs'],equipment:'一顆壺鈴；10 公斤過重就換輕器材',steps:['先用雙手與髖腿出力把壺鈴安全拿起，再由一手提在身側。','身體保持直立，肩膀與骨盆不往一邊歪。','小步前進，停穩放下後換手，左右分別記錄。'],cues:'負重不是越重越好；保持呼吸、步伐平穩。',wrong:'用另一邊身體抵消重量、肩膀被拉低：停止或換輕。',alternative:'先做徒手步行；若沒有更輕器材，先不做負重版。',rep:'左右各 10–15 秒起步，休息後再換邊。',source:'https://www.acefitness.org/continuing-education/certified/october-2022/8147/kettlebells-kick-butt-in-more-ways-than-one/'},
 {id:'hinge',name:'徒手髖折／壺鈴硬舉',tag:'先學髖折',muscles:['臀肌','大腿後側','軀幹穩定'],zones:['core','hips','legs'],equipment:'先徒手；熟悉後才考慮一顆壺鈴',steps:['雙腳約髖寬，膝蓋微彎；壺鈴置於雙腳之間。','臀部向後移，背部保持自然直線；髖部帶動身體前傾。','腳掌穩定踩地，吐氣站直，不往後仰；同一路徑慢慢放下。'],cues:'先用臀部輕碰後方牆壁練習；下去吸氣、起來吐氣。',wrong:'背部拱圓、用腰猛拉、頂端過度後仰：退回徒手髖折。',alternative:'壺鈴太低或拿取不舒服時，不強行伸手觸地；先徒手練習。',rep:'每組 5–8 次起步，慢慢做；計時結束前做不完可提早休息。',source:'https://www.acefitness.org/resources/everyone/exercise-library/6/deadlift/'},
 {id:'squat',name:'椅子坐站',tag:'徒手起步',muscles:['大腿前側','臀肌'],zones:['hips','legs'],equipment:'穩固、無輪子的椅子，靠牆固定',steps:['坐在椅子前段，雙腳約髖寬、踩穩地面。','上身稍向前傾，用腿部力量吐氣站起。','臀部向後，緩慢坐回；必要時可扶穩固支撐。'],cues:'膝蓋朝腳尖方向；高度以能舒適坐站為準。',wrong:'往椅子摔坐、膝蓋內夾：減慢速度、調高座面或扶支撐。',alternative:'先扶穩固桌面做較小幅度坐站；疼痛就停止。',rep:'每組 5–8 次，不必追求深蹲幅度。',source:'https://www.acefitness.org/resources/everyone/exercise-library/135/bodyweight-squat/'},
 {id:'push',name:'牆壁伏地挺身',tag:'上肢推力',muscles:['胸肌','手臂後側','肩部'],zones:['chest','arms'],equipment:'穩固牆面，止滑鞋',steps:['面向牆站立，手掌約肩高、略比肩寬，身體保持一直線。','吸氣，慢慢彎手肘讓胸口靠近牆；手肘斜向後，不大幅外張。','吐氣推回原位，不塌腰；先站近一些降低負荷。'],cues:'肩膀不聳起，腳掌不滑動，過程不憋氣。',wrong:'腰部塌下、頭先伸到牆上：站近牆，保持頭與身體同一直線。',alternative:'縮小幅度或更靠近牆；手腕或肩膀疼痛就停止。',rep:'每組 5–8 次，留下還能做 2–3 次的餘裕。',source:'https://www.nhs.uk/live-well/exercise/strength-exercises/'},
 {id:'walk',name:'輕鬆步行／原地踏步',tag:'恢復與有氧',muscles:['下肢活動','心肺活動'],zones:['legs'],equipment:'平坦、安全且沒有障礙物的空間',steps:['站穩後以舒服步速走路，或扶穩固支撐輕輕踏步。','保持正常呼吸；開始時應能輕鬆講完整句子。','若喘得不舒服就減速或停下，等恢復再決定是否繼續。'],cues:'太太先用輕鬆步速，不用爬樓梯或快走來追強度。',wrong:'為追進度硬撐喘促：改慢、縮短，或停止。',alternative:'更短的步行段落，分次累積；不要忽略異常症狀。',rep:'可從 3–5 分鐘起步；另有獨立步行計時模式。',source:'https://www.cdc.gov/physical-activity-basics/adding-adults/index.html'}
];
export const sources=[
 ['CDC 成人活動指引','肌力至少每週兩天；有氧長期朝每週 150 分鐘中等強度累積。短版是起步，並不等於已達完整建議。','https://www.cdc.gov/physical-activity-basics/guidelines/adults.html'],
 ['NIH／NIDDK 體重管理','飲食與活動一起調整；不由課程次數保證減重幅度。','https://www.niddk.nih.gov/health-information/weight-management/adult-overweight-obesity/eating-physical-activity'],
 ['2024 系統性回顧：84 項隨機試驗','多種運動可改善過重或肥胖族群的內臟脂肪；不能直接推算這兩位使用者的效果，也不能證明農夫走路特別有效。','https://pubmed.ncbi.nlm.nih.gov/38031812/'],
 ['ACE 動作資料庫','圖解為自行繪製的姿勢示意；硬舉、椅子坐站為入門調整，非原來源照片。','https://www.acefitness.org/resources/everyone/exercise-library/'],
 ['NHS 呼吸困難資訊','日常活動時呼吸困難加重應評估；嚴重喘促或伴胸痛需立即求助。','https://www.nhs.uk/symptoms/shortness-of-breath/']
];
export function makePlan(modeId,person,loaded=false,short=false){
 const m=modes.find(m=>m.id===modeId)||modes[0];
 const ids=person==='me'&&loaded?['hinge','squat','carry','push']:['hinge','squat','push','walk'];
 const work=short?30:m.work,rest=short?30:m.rest,rounds=short?1:m.rounds;
 const plan=[{id:'warm',title:'暖身：輕鬆走動、肩部活動、徒手髖折',seconds:short?45:m.warm,kind:'warm'}];
 for(let r=0;r<rounds;r++)for(const id of ids){plan.push({id,title:exercises.find(e=>e.id===id).name,seconds:work,kind:'work',round:r+1,kg:loaded&&['carry','hinge'].includes(id)?(id==='carry'?20:10):0});plan.push({id:'rest',title:'休息・正常呼吸，必要時延長',seconds:rest,kind:'rest'});}
 plan.push({id:'cool',title:'緩和：慢走、放鬆呼吸',seconds:short?15:m.cool,kind:'cool'});return plan;
}
export const today=()=>new Date().toLocaleDateString('sv-SE',{timeZone:'Asia/Taipei'});
export function weekStart(){const d=new Date();const t=new Date(d.toLocaleString('en-US',{timeZone:'Asia/Taipei'}));const day=(t.getDay()+6)%7;t.setDate(t.getDate()-day);return `${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,'0')}-${String(t.getDate()).padStart(2,'0')}`;}
