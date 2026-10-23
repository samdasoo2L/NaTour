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
    { id: "hotel-transfer-1", date: "2026-10-29", time: "도착 후 약 1시간", timeStatus: "대략", category: "기타", title: "호텔 이동", place: "하바나 나트랑 호텔", transport: "택시", note: "교통 상황에 따라 변동" },
    { id: "hotel-checkin-1", date: "2026-10-30", time: "약 01:00", timeStatus: "대략", category: "기타", title: "체크인 및 취침", place: "하바나 나트랑 호텔", note: "예상 체크인 시각" },

    { id: "breakfast-1", date: "2026-10-30", time: "시간 미정", timeStatus: "시간 미정", category: "식사", title: "조식 식사", place: "하바나 나트랑 호텔", detailId: "havana-breakfast" },
    { id: "hotel-departure-1", date: "2026-10-30", time: "약 10:30", timeStatus: "대략", category: "기타", title: "호텔 출발", place: "하바나 나트랑 호텔", transport: "도보", note: "11:00 식사 장소 도착 목표" },
    { id: "kuukuu-lunch", date: "2026-10-30", time: "11:00", timeStatus: "확정", category: "식사", title: "점심 식사", place: "쿠우쿠우", reservation: "예약 완료", detailId: "kuukuu" },
    { id: "lotte-shopping", date: "2026-10-30", time: "약 12:30", timeStatus: "대략", category: "쇼핑", title: "마트 쇼핑", place: "롯데마트", transport: "도보 예정", detailId: "lotte-mart" },
    { id: "dam-shopping", date: "2026-10-30", time: "약 14:00", timeStatus: "대략", category: "쇼핑", title: "시장 쇼핑", place: "담시장", transport: "도보 예정", detailId: "dam-market" },
    { id: "massage-cafe-1", date: "2026-10-30", time: "15:00 이후 · 시간 미정", timeStatus: "시간 미정", category: "기타", title: "발 마사지 및 카페", place: "마사지샵·주변 카페", note: "샵과 예약 여부 미정" },
    { id: "moc-restaurant", date: "2026-10-30", time: "18:00", timeStatus: "확정", category: "식사", title: "저녁 식사", place: "목식당", transport: "택시 예정", reservation: "예약 완료", detailId: "moc-restaurant" },
    { id: "hotel-rooftop", date: "2026-10-30", time: "약 20:30", timeStatus: "대략", category: "기타", title: "루프탑 방문", place: "하바나 나트랑 호텔", transport: "택시 예정" },

    { id: "breakfast-2", date: "2026-10-31", time: "시간 미정", timeStatus: "시간 미정", category: "식사", title: "조식 식사", place: "하바나 나트랑 호텔", detailId: "havana-breakfast" },
    { id: "havana-checkout", date: "2026-10-31", time: "10:30", timeStatus: "확정", category: "기타", title: "체크아웃", place: "하바나 나트랑 호텔", note: "짐 보관·운반 방법 확인 필요" },
    { id: "an-thoi-lunch", date: "2026-10-31", time: "11:00", timeStatus: "확정", category: "식사", title: "점심 식사", place: "안토이", transport: "전세 버스 예정", detailId: "an-thoi" },
    { id: "long-son", date: "2026-10-31", time: "12:30~14:00 사이", timeStatus: "대략", category: "관광", title: "1순위 관광 후보", place: "롱선사", detailId: "long-son-pagoda", note: "시간이 부족하면 우선순위에 따라 방문지 선택" },
    { id: "ponagar", date: "2026-10-31", time: "12:30~14:00 사이", timeStatus: "대략", category: "관광", title: "2순위 관광 후보", place: "포나가르 사원", detailId: "ponagar-towers", note: "시간이 부족하면 우선순위에 따라 방문지 선택" },
    { id: "hon-chong", date: "2026-10-31", time: "12:30~14:00 사이", timeStatus: "대략", category: "관광", title: "3순위 관광 후보", place: "혼총곶", detailId: "hon-chong", note: "시간이 부족하면 우선순위에 따라 방문지 선택" },
    { id: "alibu-checkin", date: "2026-10-31", time: "14:00", timeStatus: "확정", category: "기타", title: "체크인", place: "알리부 리조트", transport: "전세 버스 예정" },
    { id: "resort-time", date: "2026-10-31", time: "14:00~19:00", timeStatus: "계획 시간", category: "관광", title: "리조트 즐기기", place: "알리부 리조트", note: "스노클링·해변 이용 예정", detailId: "alibu-resort" },
    { id: "veteran-departure", date: "2026-10-31", time: "18:30", timeStatus: "확정", category: "기타", title: "호텔 출발", place: "알리부 리조트", transport: "택시 · 베테랑까지 약 30분" },
    { id: "veteran-dinner", date: "2026-10-31", time: "19:00", timeStatus: "확정", category: "식사", title: "저녁 식사", place: "베테랑", transport: "택시", reservation: "예약 완료", detailId: "veteran" },
    { id: "sailing-club", date: "2026-10-31", time: "21:00", timeStatus: "확정", category: "관광", title: "세일링클럽 방문", place: "세일링클럽", transport: "도보 예정", detailId: "sailing-club" },
    { id: "resort-return", date: "2026-10-31", time: "22:30", timeStatus: "시간 안내됨", category: "기타", title: "숙소 복귀", place: "알리부 리조트", transport: "택시 · 약 30분" },

    { id: "breakfast-3", date: "2026-11-01", time: "시간 미정", timeStatus: "시간 미정", category: "식사", title: "조식 식사", place: "알리부 리조트", detailId: "alibu-breakfast" },
    { id: "alibu-checkout", date: "2026-11-01", time: "12:00", timeStatus: "확정", category: "기타", title: "체크아웃", place: "알리부 리조트", transport: "전일 대절 차량" },
    { id: "pho-hanh-phuc", date: "2026-11-01", time: "13:00", timeStatus: "시간 안내됨", category: "식사", title: "점심 식사", place: "포한푹", transport: "전일 대절 차량", detailId: "pho-hanh-phuc" },
    { id: "free-time", date: "2026-11-01", time: "점심 후~17:00", timeStatus: "시간 미정", category: "기타", title: "일정 미정", place: "미정", note: "일정 확정 후 추가 예정" },
    { id: "massage-final", date: "2026-11-01", time: "17:00", timeStatus: "확정", category: "기타", title: "마사지", place: "마사지샵 미정" },
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
        { name: "하바나 호텔 조식", photo: "assets/menus/하바나1.png", description: "호텔 조식으로 든든하게 하루를 시작해요. 사진 속 다양한 메뉴를 살펴보고 취향에 맞게 골라 여유로운 아침을 즐겨보세요." }
      ]
    },
    "alibu-breakfast": {
      name: "알리부 리조트 조식",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Alibu+Resort+Nha+Trang",
      photo: "assets/restaurants/알리부메인.png",
      menus: [
        { name: "알리부 리조트 조식", photo: "assets/menus/알리부1.png", description: "리조트에서 맞는 아침, 조식을 즐기며 여유롭게 하루를 시작해요. 사진 속 메뉴를 참고해 든든하게 식사하세요." }
      ]
    },
    "kuukuu": {
      name: "쿠우쿠우",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Kuu+Kuu+Nha+Trang",
      photo: "assets/restaurants/쿠우쿠우메인.jpeg",
      menus: [
        { name: "해산물 뷔페", photo: "assets/menus/쿠우쿠우1.jpeg", description: "맛있는 메뉴를 잘 찾아서 먹어보세요. 맛있는 음식을 발견하면 서로 공유하기!" }
      ]
    },
    "moc-restaurant": {
      name: "목식당",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Moc+Seafood+Restaurant+Nha+Trang",
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
      mapUrl: "https://www.google.com/maps/search/?api=1&query=An+Thoi+Nha+Trang",
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
        { name: "한식", photo: "assets/menus/베테랑1.png", description: "다 맛있다는 후기가 있어요. 한식이 생각날 때 든든하게 즐겨보세요." }
      ]
    },
    "pho-hanh-phuc": {
      name: "포한푹",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Pho+Hanh+Phuc+Nha+Trang",
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

  // 물품명·가격은 예시용 목업이며 담시장/마트의 실제 판매 가격이 아닙니다.
  shopping: {
    "lotte-mart": {
      name: "롯데마트 (목업)",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Lotte+Mart+Nha+Trang",
      photo: "assets/shopping/shopping-mock.svg",
      items: [
        { name: "커피·간식류 (목업)", photo: "assets/shopping/item-mock.svg", priceRange: "가격 정보 입력 예정 (목업)" },
        { name: "여행용 소품 (목업)", photo: "assets/shopping/item-mock.svg", priceRange: "가격 정보 입력 예정 (목업)" }
      ]
    },
    "dam-market": {
      name: "담시장 (목업)",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Dam+Market+Nha+Trang",
      photo: "assets/shopping/shopping-mock.svg",
      items: [
        { name: "말린 과일 (목업)", photo: "assets/shopping/item-mock.svg", priceRange: "가격 조사 후 입력 (목업)" },
        { name: "라탄·기념품 소품 (목업)", photo: "assets/shopping/item-mock.svg", priceRange: "가격 조사 후 입력 (목업)" },
        { name: "의류·가방 (목업)", photo: "assets/shopping/item-mock.svg", priceRange: "가격 조사 후 입력 (목업)" }
      ]
    }
  },

  // 설명과 관람 시간은 화면 예시용 목업입니다. 실제 정보로 검증·수정하세요.
  attractions: {
    "long-son-pagoda": {
      name: "롱선사 (목업)",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Long+Son+Pagoda+Nha+Trang",
      photo: "assets/attractions/attraction-mock.svg",
      description: "나트랑의 사찰 관광지 카드 예시입니다. 정확한 역사·관람 안내는 확인 후 추가하세요.",
      visitDuration: "목업: 약 30~60분"
    },
    "ponagar-towers": {
      name: "포나가르 사원 (목업)",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Po+Nagar+Cham+Towers+Nha+Trang",
      photo: "assets/attractions/attraction-mock.svg",
      description: "유적 관광지 설명 영역을 보여주는 임시 문구입니다. 검증한 소개로 바꿔주세요.",
      visitDuration: "목업: 약 45~75분"
    },
    "hon-chong": {
      name: "혼총곶 (목업)",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Hon+Chong+Nha+Trang",
      photo: "assets/attractions/attraction-mock.svg",
      description: "해안 관광지 카드의 임시 설명입니다. 방문 전 관람 정보와 이동 계획을 확인하세요.",
      visitDuration: "목업: 약 30~60분"
    },
    "alibu-resort": {
      name: "알리부 리조트 (목업)",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Alibu+Resort+Nha+Trang",
      photo: "assets/attractions/attraction-mock.svg",
      description: "알리부 리조트에서 스노클링과 해변을 즐길 예정입니다. 이용 가능 시설과 운영 시간은 리조트에 확인해 주세요.",
      visitDuration: "14:00~19:00 예정"
    },
    "sailing-club": {
      name: "세일링클럽 (목업)",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Sailing+Club+Nha+Trang",
      photo: "assets/attractions/attraction-mock.svg",
      description: "나트랑 해변에 있는 세일링클럽을 방문할 예정입니다. 영업 시간과 입장 조건은 방문 전에 확인해 주세요.",
      visitDuration: "방문 시간에 따라 조정"
    }
  }
};
