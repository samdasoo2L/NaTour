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

    { id: "breakfast-1", date: "2026-10-30", time: "시간 미정", timeStatus: "시간 미정", category: "식사", title: "조식 식사", place: "하바나 나트랑 호텔", detailId: "hotel-breakfast" },
    { id: "hotel-departure-1", date: "2026-10-30", time: "약 10:30", timeStatus: "대략", category: "기타", title: "호텔 출발", place: "하바나 나트랑 호텔", transport: "도보", note: "11:00 식사 장소 도착 목표" },
    { id: "kuukuu-lunch", date: "2026-10-30", time: "11:00", timeStatus: "확정", category: "식사", title: "점심 식사", place: "쿠우쿠우", reservation: "예약 완료", detailId: "kuukuu" },
    { id: "lotte-shopping", date: "2026-10-30", time: "약 12:30", timeStatus: "대략", category: "쇼핑", title: "마트 쇼핑", place: "롯데마트", transport: "도보 예정", detailId: "lotte-mart" },
    { id: "dam-shopping", date: "2026-10-30", time: "약 14:00", timeStatus: "대략", category: "쇼핑", title: "시장 쇼핑", place: "담시장", transport: "도보 예정", detailId: "dam-market" },
    { id: "massage-cafe-1", date: "2026-10-30", time: "15:00 이후 · 시간 미정", timeStatus: "시간 미정", category: "기타", title: "발 마사지 및 카페", place: "마사지샵·주변 카페", note: "샵과 예약 여부 미정" },
    { id: "moc-restaurant", date: "2026-10-30", time: "18:00", timeStatus: "확정", category: "식사", title: "저녁 식사", place: "목식당", transport: "택시 예정", reservation: "예약 완료", detailId: "moc-restaurant" },
    { id: "hotel-rooftop", date: "2026-10-30", time: "약 20:30", timeStatus: "대략", category: "기타", title: "루프탑 방문", place: "하바나 나트랑 호텔", transport: "택시 예정" },

    { id: "breakfast-2", date: "2026-10-31", time: "시간 미정", timeStatus: "시간 미정", category: "식사", title: "조식 식사", place: "하바나 나트랑 호텔", detailId: "hotel-breakfast" },
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

    { id: "breakfast-3", date: "2026-11-01", time: "시간 미정", timeStatus: "시간 미정", category: "식사", title: "조식 식사", place: "알리부 리조트", detailId: "hotel-breakfast" },
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
    "hotel-breakfast": {
      name: "호텔 조식 (목업)",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Havana+Nha+Trang+Hotel",
      photo: "assets/restaurants/restaurant-mock.svg",
      menus: [
        { name: "베트남식 조식 메뉴 (목업)", photo: "assets/menus/menu-mock.svg", description: "조식 메뉴를 소개하기 위한 임시 설명입니다. 실제 제공 메뉴를 확인해 교체하세요." }
      ]
    },
    "kuukuu": {
      name: "쿠우쿠우 (목업)",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Kuu+Kuu+Nha+Trang",
      photo: "assets/restaurants/restaurant-mock.svg",
      menus: [
        { name: "모둠 스시 (목업)", photo: "assets/menus/menu-mock.svg", description: "메뉴 사진과 소개 문구를 배치하기 위한 임시 항목입니다. 실제 메뉴판을 기준으로 수정하세요." },
        { name: "구이·핫푸드 (목업)", photo: "assets/menus/menu-mock.svg", description: "대표 메뉴 설명을 보여주기 위한 목업입니다." }
      ]
    },
    "moc-restaurant": {
      name: "목식당 (목업)",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Moc+Seafood+Restaurant+Nha+Trang",
      photo: "assets/restaurants/restaurant-mock.svg",
      menus: [
        { name: "해산물 요리 (목업)", photo: "assets/menus/menu-mock.svg", description: "유명 메뉴 소개용 목업입니다. 실제 대표 메뉴와 설명으로 바꿔주세요." }
      ]
    },
    "an-thoi": {
      name: "안토이 (목업)",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=An+Thoi+Nha+Trang",
      photo: "assets/restaurants/restaurant-mock.svg",
      menus: [
        { name: "베트남 가정식 메뉴 (목업)", photo: "assets/menus/menu-mock.svg", description: "점심 식당 팝업 레이아웃 확인용 임시 설명입니다." }
      ]
    },
    "veteran": {
      name: "베테랑 (목업)",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Veteran+Restaurant+Nha+Trang",
      photo: "assets/restaurants/restaurant-mock.svg",
      menus: [
        { name: "대표 식사 메뉴 (목업)", photo: "assets/menus/menu-mock.svg", description: "실제 메뉴 정보로 교체할 목업 설명입니다." }
      ]
    },
    "pho-hanh-phuc": {
      name: "포한푹 (목업)",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Pho+Hanh+Phuc+Nha+Trang",
      photo: "assets/restaurants/restaurant-mock.svg",
      menus: [
        { name: "쌀국수 (목업)", photo: "assets/menus/menu-mock.svg", description: "쌀국수 메뉴 소개용 임시 문구입니다. 실제 메뉴와 다를 수 있습니다." }
      ]
    },
    "chon-chon-kim": {
      name: "촌촌킴 (목업)",
      mapUrl: "https://www.google.com/maps/search/?api=1&query=Chon+Chon+Kim+Nha+Trang",
      photo: "assets/restaurants/restaurant-mock.svg",
      menus: [
        { name: "베트남 요리 (목업)", photo: "assets/menus/menu-mock.svg", description: "저녁 식당 팝업의 구성 확인을 위한 예시입니다." }
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
