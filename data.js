/*
 * 박이강 투어 시즌1 — 정적 웹용 목업 데이터
 *
 * 중요: 카드 설명·추천 메뉴·물품·가격은 화면 구조를 미리 확인하기 위한 임시 목업입니다.
 * 여행 전에 실제 정보로 반드시 교체하고, 가격은 판매처에서 확인한 값으로 업데이트하세요.
 * 사진은 assets/ 안의 SVG 목업 일러스트입니다. 실제 사진 파일로 바꿔도 경로를 유지하면 됩니다.
 * 사용: index.html에서 이 파일을 script.js보다 먼저 불러오세요.
 */
const TRIP_DATA = {
  meta: {
    title: "박이강 투어 시즌1",
    destination: "베트남 나트랑",
    dateRange: "2026.10.29 — 2026.11.01",
    travelers: "8명 · 이모 가족 4명 + 엄마 가족 4명(사용자 포함)",
    isMockData: true,
    mockNotice: "사진·메뉴 설명·쇼핑 물품·가격대는 목업 예시입니다. 여행 전 실제 정보로 교체하세요."
  },

  // 일정은 날짜별 타임라인에 사용합니다.
  // category는 식사/쇼핑/관광/기타 중 하나이며, detailId는 해당 팝업 데이터와 연결됩니다.
  schedule: [
    { id: "outbound-flight", date: "2026-10-29", time: "20:25 (한국 시간)", timeStatus: "확정", category: "기타", title: "나트랑행 항공편 출발", place: "대구공항", transport: "트리니티항공 · 대구 → 나트랑" },
    { id: "arrival", date: "2026-10-29", time: "23:35 (나트랑 시간)", timeStatus: "확정", category: "기타", title: "나트랑 도착", place: "나트랑 공항", transport: "트리니티항공" },
    { id: "hotel-transfer-1", date: "2026-10-29", time: "약 24:00", timeStatus: "대략", category: "기타", title: "호텔 이동", place: "하바나 나트랑 호텔", transport: "택시", note: "1시간 이동, 교통 상황에 따라 변동" },
    { id: "hotel-checkin-1", date: "2026-10-30", time: "약 01:00", timeStatus: "대략", category: "기타", title: "체크인 및 취침", place: "하바나 나트랑 호텔", note: "예상 체크인 시각" },

    { id: "breakfast-1", date: "2026-10-30", time: "약 8:00", timeStatus: "대략", category: "식사", title: "조식 식사", place: "하바나 나트랑 호텔", detailId: "havana-breakfast" },
    { id: "hotel-departure-1", date: "2026-10-30", time: "약 10:30", timeStatus: "대략", category: "기타", title: "호텔 출발", place: "하바나 나트랑 호텔", transport: "도보 예정", note: "11:00 식사 장소 도착 목표" },
    { id: "kuukuu-lunch", date: "2026-10-30", time: "11:00", timeStatus: "확정", category: "식사", title: "점심 식사", place: "쿠우쿠우", reservation: "예약 완료", detailId: "kuukuu" },
    { id: "lotte-shopping", date: "2026-10-30", time: "약 12:30", timeStatus: "대략", category: "쇼핑", title: "마트 쇼핑", place: "롯데마트", detailId: "lotte-mart" },
    { id: "dam-shopping", date: "2026-10-30", time: "약 14:00", timeStatus: "대략", category: "쇼핑", title: "시장 쇼핑", place: "담시장", detailId: "dam-market" },
    { id: "massage-cafe-1", date: "2026-10-30", time: "약 15:00", timeStatus: "대략", category: "기타", title: "발 마사지 및 카페", place: "마사지샵·주변 카페" },
    { id: "moc-restaurant", date: "2026-10-30", time: "18:00", timeStatus: "확정", category: "식사", title: "저녁 식사", place: "목식당", transport: "택시 예정", reservation: "예약 완료", detailId: "moc-restaurant" },
    { id: "hotel-rooftop", date: "2026-10-30", time: "약 20:30", timeStatus: "대략", category: "관광", title: "루프탑 방문", place: "하바나 나트랑 호텔", transport: "택시 예정", detailId: "havana-rooftop" },

    { id: "breakfast-2", date: "2026-10-31", time: "약 8:00", timeStatus: "대략", category: "식사", title: "조식 식사", place: "하바나 나트랑 호텔", detailId: "havana-breakfast" },
    { id: "havana-checkout", date: "2026-10-31", time: "10:30", timeStatus: "확정", category: "기타", title: "체크아웃", place: "하바나 나트랑 호텔", note: "전세 버스 예정 (짐 보관)" },
    { id: "an-thoi-lunch", date: "2026-10-31", time: "11:00", timeStatus: "확정", category: "식사", title: "점심 식사", place: "안토이", transport: "전세 버스 예정", detailId: "an-thoi" },
    { id: "hon-chong", date: "2026-10-31", time: "약 13:00", timeStatus: "대략", category: "관광", title: "혼총곶 방문", place: "혼총곶", transport: "전세 버스 예정", detailId: "hon-chong" },
    { id: "alibu-checkin", date: "2026-10-31", time: "14:00", timeStatus: "확정", category: "기타", title: "체크인", place: "알리부 리조트", transport: "전세 버스 예정" },
    { id: "resort-time", date: "2026-10-31", time: "14:00~18:00", timeStatus: "대략", category: "관광", title: "리조트 즐기기", place: "알리부 리조트", note: "스노클링·해변 이용 예정", detailId: "alibu-resort" },
    { id: "veteran-departure", date: "2026-10-31", time: "18:30", timeStatus: "확정", category: "기타", title: "호텔 출발", place: "알리부 리조트", transport: "택시 · 베테랑까지 약 30분" },
    { id: "veteran-dinner", date: "2026-10-31", time: "19:00", timeStatus: "확정", category: "식사", title: "저녁 식사", place: "베테랑", transport: "택시", reservation: "예약 완료", detailId: "veteran" },
    { id: "sailing-club", date: "2026-10-31", time: "약 21:00", timeStatus: "대략", category: "관광", title: "세일링클럽 방문", place: "세일링클럽", transport: "도보 예정", detailId: "sailing-club" },
    { id: "resort-return", date: "2026-10-31", time: "약 23:00", timeStatus: "대략", category: "기타", title: "숙소 복귀", place: "알리부 리조트", transport: "택시 · 약 30분" },

    { id: "breakfast-3", date: "2026-11-01", time: "약 8:00", timeStatus: "대략", category: "식사", title: "조식 식사", place: "알리부 리조트", detailId: "alibu-breakfast" },
    { id: "alibu-checkout", date: "2026-11-01", time: "12:00", timeStatus: "확정", category: "기타", title: "체크아웃", place: "알리부 리조트", transport: "전일 대절 차량" },
    { id: "pho-hanh-phuc", date: "2026-11-01", time: "약 13:00", timeStatus: "대략", category: "식사", title: "점심 식사", place: "포한푹", transport: "전일 대절 차량", detailId: "pho-hanh-phuc" },
    { id: "long-son", date: "2026-11-01", time: "약 14:30", timeStatus: "대략", category: "관광", title: "롱선사 방문", place: "롱선사", transport: "전일 대절 차량", detailId: "long-son-pagoda" },
    { id: "ponagar", date: "2026-11-01", time: "약 15:30", timeStatus: "대략", category: "관광", title: "포나가르 사원 방문", place: "포나가르 사원", transport: "전일 대절 차량", detailId: "ponagar-towers" },
    { id: "massage-final", date: "2026-11-01", time: "17:00", timeStatus: "확정", category: "기타", title: "마사지", place: "마사지샵", transport: "전일 대절 차량" },
    { id: "chon-chon-kim", date: "2026-11-01", time: "19:00", timeStatus: "확정", category: "식사", title: "저녁 식사", place: "촌촌킴", transport: "전일 대절 차량", reservation: "예약 완료", detailId: "chon-chon-kim" },
    { id: "airport-departure", date: "2026-11-01", time: "21:00", timeStatus: "확정", category: "기타", title: "공항 출발", place: "나트랑 공항", transport: "전일 대절 차량" },
    { id: "airport-arrival", date: "2026-11-01", time: "약 22:00", timeStatus: "대략", category: "기타", title: "공항 도착 예정", place: "나트랑 공항" },
    { id: "return-flight", date: "2026-11-02", time: "00:35 (나트랑 시간)", timeStatus: "확정", category: "기타", title: "대구행 항공편 출발", place: "나트랑 공항", transport: "트리니티항공 · 나트랑 → 대구" },
    { id: "return-arrival", date: "2026-11-02", time: "07:10 (한국 시간)", timeStatus: "확정", category: "기타", title: "대구 도착 예정", place: "대구공항", transport: "트리니티항공" }
  ],

  // 아래 식사 내용·메뉴는 모두 목업 예시이며 실제 식당 메뉴와 다를 수 있습니다.
  meals: {
    "havana-breakfast": {
      name: "하바나 나트랑 호텔 조식",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Havana+Nha+Trang+Hotel",
      photo: "assets/restaurants/하바나메인.png",
      menus: [
        { name: "하바나 호텔 조식", photo: "assets/menus/하바나1.png", description: "조식 운영 시간은 06:00~10:00입니다. 오전 8시에 든든하게 식사하며 여유롭게 하루를 시작해요." }
      ]
    },
    "alibu-breakfast": {
      name: "알리부 리조트 조식",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Alibu+Resort+Nha+Trang",
      photo: "assets/restaurants/알리부메인.png",
      menus: [
        { name: "알리부 리조트 조식", photo: "assets/menus/알리부1.png", description: "조식 운영 시간은 06:30~10:00입니다. 오전 8시에 리조트에서 여유로운 아침 식사를 즐겨요." }
      ]
    },
    "kuukuu": {
      name: "쿠우쿠우",
      mapUrl: "https://maps.app.goo.gl/3p8PRkm9mazzVdXm8?g_st=ic",
      photo: "assets/restaurants/쿠우쿠우메인.jpeg",
      menus: [
        { name: "해산물 뷔페", photo: "assets/menus/쿠우쿠우1.jpeg", description: "맛있는 메뉴를 잘 찾아서 먹어보세요. 맛있는 음식을 발견하면 서로 공유하기!" }
      ]
    },
    "moc-restaurant": {
      name: "목식당",
      mapUrl: "https://maps.app.goo.gl/f5JPEdVGNekSchTe7?g_st=ic",
      photo: "assets/restaurants/목식당메인.jpeg",
      menus: [
        { name: "맛조개 모닝글로리", photo: "assets/menus/목식당1.png", description: "짭조름한 모닝글로리 볶음에 큼직한 맛조개가 들어가 반찬으로 딱이에요." },
        { name: "크레이피쉬", photo: "assets/menus/목식당2.png", description: "미슐랭 목식당의 하이라이트 메뉴! 치즈맛은 담백하고, 마늘버터맛은 단짠단짠해서 계속 손이 가요." },
        { name: "마늘볶음밥", photo: "assets/menus/목식당3.png", description: "갈릭버터새우 소스와 함께 먹으면 더욱 맛있어요." },
        { name: "갈릭버터새우", photo: "assets/menus/목식당4.png", description: "목식당에 이 메뉴를 먹으러 간다는 후기가 많아요. 시그니처 메뉴이며 새우 껍질도 손질해 준다고 해요." },
        { name: "양념삼겹살구이", photo: "assets/menus/목식당5.png", description: "의외의 추천 메뉴! 매콤달콤한 맛이 매력적이에요." }
      ]
    },
    "an-thoi": {
      name: "안토이",
      mapUrl: "https://maps.app.goo.gl/Qj5B78Vt3iEs4v2M6?g_st=ic",
      photo: "assets/restaurants/안토이메인.png",
      menus: [
        { name: "치즈 얹은 가리비", photo: "assets/menus/안토이1.png", description: "고소하고 맛있어요. 뜨끈할 때 먹는 것을 추천해요!" },
        { name: "파인애플 볶음밥", photo: "assets/menus/안토이2.png", description: "비주얼도 좋고 맛도 좋아요. 달콤하고 고소하며 양도 넉넉해요." },
        { name: "곱창 쌀국수", photo: "assets/menus/안토이3.png", description: "맵지만 정말 맛있다는 후기가 가득해요. 곱창도 넉넉하게 들어 있어 해장 메뉴로도 인기예요. 매운 음식이 어렵다면 도가니 쌀국수도 추천해요." },
        { name: "반쎄오", photo: "assets/menus/안토이4.png", description: "바삭하고 속재료가 알차요. 안토이는 반쎄오로 유명하다고 해요." },
        { name: "파기름 굴구이", photo: "assets/menus/안토이5.png", description: "향긋한 파기름과 땅콩의 고소한 맛이 잘 어울려요." },
        { name: "짜조 분짜 콤보", photo: "assets/menus/안토이6.png", description: "짜조가 특히 맛있다는 후기가 있어요." },
        { name: "모닝글로리 덮밥", photo: "assets/menus/안토이7.png", description: "매콤한 소스와 강하지 않은 향신료로 누구나 부담 없이 즐길 수 있어요." }
      ]
    },
    "veteran": {
      name: "베테랑",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Veteran+Restaurant+Nha+Trang",
      photo: "assets/restaurants/베테랑메인.jpeg",
      menus: [
        { name: "한식", photo: "assets/menus/베테랑1.png", description: "다 맛있다는 후기가 있어요. 슬슬 한식이 그리워질 타이밍! 베테랑에서 힐링해보세요." }
      ]
    },
    "pho-hanh-phuc": {
      name: "포한푹",
      mapUrl: "https://maps.app.goo.gl/JDDKAZ5MJropJFt98?g_st=ic",
      photo: "assets/restaurants/포한푹메인.jpeg",
      menus: [
        { name: "뚝배기 쌀국수", photo: "assets/menus/포한푹1.jpeg", description: "샤브샤브처럼 고기를 넣어 익혀 먹는 방식이에요. 갈비탕처럼 깊은 맛이 나는 쌀국수라고 해요." }
      ]
    },
    "chon-chon-kim": {
      name: "촌촌킴",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Chon+Chon+Kim+Nha+Trang",
      photo: "assets/restaurants/촌촌킴메인.jpeg",
      menus: [
        { name: "모닝글로리", photo: "assets/menus/촌촌킴1.png", description: "마늘과 간장 향의 조합이 일품이라 늘 시켜 먹는 메뉴라고 해요." },
        { name: "돼지갈비조림", photo: "assets/menus/촌촌킴2.png", description: "촌촌킴의 인기 메인 메뉴예요. 양이 적다는 후기가 있어 넉넉히 주문하는 것을 추천해요." },
        { name: "반쎄오", photo: "assets/menus/촌촌킴3.png", description: "맛있다는 후기가 있는 베트남식 바삭한 부침 요리예요." },
        { name: "새우 마늘버터볶음", photo: "assets/menus/촌촌킴4.png", description: "솔솔 풍기는 마늘 향과 버터 풍미, 통통한 새우살이 매력적이에요." },
        { name: "허브 드라이루브 구이", photo: "assets/menus/촌촌킴5.png", description: "돼지고기 메뉴 중 추천 후기가 있어요. 궁금해서 한번 주문해 보고 싶은 메뉴예요." },
        { name: "닭고기 코코넛 커리", photo: "assets/menus/촌촌킴6.png", description: "코코넛 밀크를 베이스로 한 부드러운 닭고기 커리예요." }
      ]
    }
  },

  // 쇼핑 정보와 시세는 사용자가 제공한 여행 참고 정보입니다.
  shopping: {
    "lotte-mart": {
      name: "롯데마트 추천 쇼핑",
      mapUrl: "https://maps.app.goo.gl/yNre7ciHtE8AXi469?g_st=ipc",
      photo: "assets/shopping/롯데마트메인.jpeg",
      items: [
        { name: "코코넛칩", photo: "assets/shopping/롯데마트1.png", description: "바삭하고 고소해서 정말 맛있어요." },
        { name: "옥수수 과자", photo: "assets/shopping/롯데마트2.png", description: "이것도 정말 맛있어서 추천해요." },
        { name: "HAKU 코코넛 과자", photo: "assets/shopping/롯데마트3.png", description: "코코넛 풍미가 맛있는 과자예요." },
        { name: "마카로니 과자", photo: "assets/shopping/롯데마트4.png", description: "짭짤하고 고소하며 살짝 매콤하고 바삭해요." },
        { name: "Archcafe 코코넛 커피", photo: "assets/shopping/롯데마트5.png", description: "12스틱 한 박스예요. 파란색 박스 제품을 추천해요." },
        { name: "Chin-Su 칠리소스", photo: "assets/shopping/롯데마트6.png", description: "250g 튜브형이에요. 튀김이나 만두를 먹을 때 감칠맛을 살려주는 마법 소스예요." },
        { name: "Golden Farm 과일청", photo: "assets/shopping/롯데마트7.png", description: "과일 본연의 진한 맛을 살린 과일청이에요. 탄산수·요거트·칵테일 등에 섞어 즐길 수 있어요.", priceRange: "사진 속 가격 참고: 패션후르츠 135,000동 · 망고 129,000동 · 딸기 115,000동 · 복숭아 122,000동 · 리치 155,000동 · 블루베리 162,000동 · 오디·키위 129,000동 · 핑크 구아바 135,000동 · 라즈베리 155,000동" },
        { name: "Orion An 해초 구운 쌀 과자", photo: "assets/shopping/롯데마트8.png", description: "짭조름해서 간단한 안주로 딱 좋아요." }
      ]
    },
    "dam-market": {
      name: "담시장 시세",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Dam+Market+Nha+Trang",
      photo: "assets/shopping/담시장메인.png",
      description: "신관(네모 건물)으로 가세요. 구관(둥근 건물)은 이번 일정에서 방문하지 않아도 됩니다.\n\n신관 1층: 건어물·커피·과자·젤리\n신관 2층: 캐리어·의류·크록스·잡화\n신관 3층: 이미테이션 의류·골프웨어\n\n참고: 화장실 이용료는 5,000동이며 위생 상태가 좋지 않다고 해요.",
      items: [
        { name: "크록스", photo: "assets/shopping/담시장의류.png", priceRange: "크록스 100,000~150,000동" },
        { name: "반팔 티셔츠", photo: "assets/shopping/담시장의류.png", priceRange: "80,000~120,000동" },
        { name: "긴팔·후드티", photo: "assets/shopping/담시장의류.png", priceRange: "150,000~220,000동" },
        { name: "바람막이", photo: "assets/shopping/담시장의류.png", priceRange: "110,000~150,000동" },
        { name: "원피스", photo: "assets/shopping/담시장의류.png", priceRange: "100,000~150,000동" },
        { name: "캐리어 20인치", photo: "assets/shopping/담시장캐리어.png", priceRange: "280,000동" },
        { name: "캐리어 24인치", photo: "assets/shopping/담시장캐리어.png", priceRange: "300,000동" },
        { name: "캐리어 28인치", photo: "assets/shopping/담시장캐리어.png", priceRange: "480,000동" },
        { name: "샤오커오라", photo: "assets/shopping/담시장간식.png", priceRange: "500g 60,000동 · 1kg 110,000동 · 2.5kg 280,000동" },
        { name: "체리쉬 푸딩", photo: "assets/shopping/담시장간식.png", priceRange: "800g 40,000동" },
        { name: "체리쉬 젤리", photo: "assets/shopping/담시장간식.png", priceRange: "280g 25,000동" },
        { name: "건망고", photo: "assets/shopping/담시장간식.png", priceRange: "500g 60,000동" },
        { name: "애플 건망고", photo: "assets/shopping/담시장간식.png", priceRange: "500g 80,000동" },
        { name: "마카다미아", photo: "assets/shopping/담시장간식.png", priceRange: "500g 100,000동" },
        { name: "캐슈넛", photo: "assets/shopping/담시장간식.png", priceRange: "70,000동" },
        { name: "컹커피", photo: "assets/shopping/담시장간식.png", priceRange: "100개 320,000동" },
        { name: "하트 치약", photo: "assets/shopping/담시장간식.png", priceRange: "50,000~60,000동" },
        { name: "베리 수박 치약", photo: "assets/shopping/담시장간식.png", priceRange: "45,000동" },
        { name: "마그넷", photo: "assets/shopping/담시장간식.png", priceRange: "30,000동" },
        { name: "거북이 줄자", photo: "assets/shopping/담시장간식.png", priceRange: "30,000동" },
        { name: "담시장 시세 종합표", photo: "assets/shopping/담시장종합.png", priceRange: "글씨가 작으면 이미지를 눌러 확대해서 확인하세요.", zoomable: true }
      ]
    }
  },

  // 설명과 관람 시간은 화면 예시용 목업입니다. 실제 정보로 검증·수정하세요.
  attractions: {
    "long-son-pagoda": {
      name: "롱선사",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Long+Son+Pagoda+Nha+Trang",
      photo: "assets/attractions/롱선사.png",
      description: "입장료는 무료예요. 높이 24m의 대형 좌불상과 나트랑 시내 전경을 볼 수 있어요. 사원 방문 시 복장 규정이 있어 반바지는 피해주세요. 오토바이를 타고 올라가는 방법도 추천해요(왕복 5,000동).",
      visitDuration: "보통 약 45분"
    },
    "ponagar-towers": {
      name: "포나가르 사원",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Po+Nagar+Cham+Towers+Nha+Trang",
      photo: "assets/attractions/포나가르 사원.png",
      description: "풍요의 여신 포나가르를 모시는 힌두교 사원이에요. 아름다운 건축물을 감상하고, 카이강 하구와 나트랑 시내 풍경을 한눈에 볼 수 있어요.",
      visitDuration: "보통 약 30분"
    },
    "hon-chong": {
      name: "혼총곶",
      mapUrl: "https://maps.app.goo.gl/nu1H7jYJaevZnF7m8?g_st=ic",
      photo: "assets/attractions/혼총곶.jpeg",
      description: "바위 해안과 탁 트인 바다 전망을 가볍게 즐길 수 있는 풍경 좋은 관광지예요. 가족사진은 꼭 남기고, 햇빛을 가릴 양산도 챙겨가세요!",
      visitDuration: "보통 약 1시간"
    },
    "alibu-resort": {
      name: "알리부 리조트",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Alibu+Resort+Nha+Trang",
      photo: "assets/attractions/알리부 리조트.png",
      description: "야외 수영장 두 곳과 바다를 오가며 여유로운 시간을 보내요. 프라이빗 해변에서 스노클링은 필수! 전용 해변에서 스노클링 장비와 구명조끼를 무료로 대여할 수 있어요. 황홀한 경험이었다는 후기가 많은 곳이에요.",
      visitDuration: "14:00~18:00 예정"
    },
    "sailing-club": {
      name: "세일링클럽",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Sailing+Club+Nha+Trang",
      photo: "assets/attractions/세일링클럽.png",
      description: "밤 야경과 흥겨운 음악, 눈을 사로잡는 불쇼를 즐겨요. 불쇼는 오후 10시부터 시작해 약 15분간 진행돼요. 음료는 무난하게 맛있고, 음식은 가격대가 높은 편이라고 해요.",
      visitDuration: "불쇼 약 15분 (오후 10시 시작)"
    },
    "havana-rooftop": {
      name: "하바나 호텔 루프탑",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Havana+Nha+Trang+Hotel+rooftop",
      photo: "assets/attractions/루프탑.jpeg",
      description: "저녁 식사 후 하바나 나트랑 호텔 루프탑을 방문해 나트랑의 야경을 즐겨요.",
      visitDuration: "약 20:30 방문 예정"
    }
  }
};
