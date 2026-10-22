(() => {
  "use strict";

  const trip = typeof TRIP_DATA !== "undefined" ? TRIP_DATA : null;
  if (!trip || !Array.isArray(trip.schedule)) return;

  const dayDefinitions = [
    { date: "2026-10-29", day: "목요일", label: "10월 29일", index: "DAY 01", heading: "나트랑으로 출발", summary: "대구에서 출발해 나트랑에 도착하는 첫날" },
    { date: "2026-10-30", day: "금요일", label: "10월 30일", index: "DAY 02", heading: "시장과 나트랑의 하루", summary: "쿠우쿠우 점심부터 담시장, 마사지와 저녁까지" },
    { date: "2026-10-31", day: "토요일", label: "10월 31일", index: "DAY 03", heading: "나트랑 관광과 리조트", summary: "시내 관광 후 알리부 리조트에서 여유롭게" },
    { date: "2026-11-01", day: "일요일", label: "11월 1일", index: "DAY 04", heading: "마지막 날, 나트랑 안녕", summary: "리조트 체크아웃 후 식사와 마사지, 공항으로" },
    { date: "2026-11-02", day: "월요일", label: "11월 2일", index: "RETURN", heading: "대구 도착", summary: "자정 이후 출발하는 귀국편 일정" }
  ];

  const tabs = document.querySelector("#day-tabs");
  const timeline = document.querySelector("#timeline");
  const daySummary = document.querySelector("#day-summary");
  const modal = document.querySelector("#detail-modal");
  const modalContent = document.querySelector("#modal-content");
  let activeIndex = 0;
  let lastFocusedElement = null;

  const categoryClass = { 식사: "meal", 쇼핑: "shop", 관광: "sight", 기타: "other" };
  const categoryIcon = { 식사: "🍽️", 쇼핑: "🛍️", 관광: "🏝️", 기타: "✦" };
  const detailsByCategory = { 식사: trip.meals || {}, 쇼핑: trip.shopping || {}, 관광: trip.attractions || {} };

  function makeElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined && text !== null) element.textContent = String(text);
    return element;
  }

  function appendIf(parent, tag, className, value) {
    if (value === undefined || value === null || value === "") return null;
    const element = makeElement(tag, className, value);
    parent.append(element);
    return element;
  }

  function configureImage(img, src, alt, fallback) {
    img.src = src || fallback;
    img.alt = alt || "";
    img.loading = "lazy";
    img.addEventListener("error", () => {
      if (img.dataset.fallbackApplied) {
        img.hidden = true;
        return;
      }
      img.dataset.fallbackApplied = "true";
      img.src = fallback;
    }, { once: true });
  }

  function getCurrentTripDate() {
    try {
      const parts = new Intl.DateTimeFormat("en-CA", {
        timeZone: "Asia/Ho_Chi_Minh", year: "numeric", month: "2-digit", day: "2-digit"
      }).formatToParts(new Date());
      const part = Object.fromEntries(parts.map(({ type, value }) => [type, value]));
      return `${part.year}-${part.month}-${part.day}`;
    } catch {
      return "";
    }
  }

  function initialDayIndex() {
    const today = getCurrentTripDate();
    const found = dayDefinitions.findIndex(day => day.date === today);
    return found >= 0 ? found : 0;
  }

  function renderTabs() {
    tabs.replaceChildren();
    dayDefinitions.forEach((day, index) => {
      const button = makeElement("button", "day-tab");
      button.type = "button";
      button.id = `day-tab-${index}`;
      button.setAttribute("role", "tab");
      button.setAttribute("aria-controls", "timeline");
      button.setAttribute("aria-selected", String(index === activeIndex));
      button.tabIndex = index === activeIndex ? 0 : -1;
      const dateCopy = makeElement("span", "tab-date");
      dateCopy.append(makeElement("strong", "", day.label));
      dateCopy.append(makeElement("small", "", day.day));
      button.append(dateCopy, makeElement("span", "tab-index", day.index));
      button.addEventListener("click", () => selectDay(index));
      button.addEventListener("keydown", onTabKeydown);
      tabs.append(button);
    });
  }

  function onTabKeydown(event) {
    let next = activeIndex;
    if (event.key === "ArrowRight") next = (activeIndex + 1) % dayDefinitions.length;
    else if (event.key === "ArrowLeft") next = (activeIndex - 1 + dayDefinitions.length) % dayDefinitions.length;
    else if (event.key === "Home") next = 0;
    else if (event.key === "End") next = dayDefinitions.length - 1;
    else return;
    event.preventDefault();
    selectDay(next, true);
  }

  function selectDay(index, moveFocus = false) {
    activeIndex = index;
    renderTabs();
    renderDay();
    if (moveFocus) document.querySelector(`#day-tab-${index}`)?.focus();
    const activeTab = document.querySelector(`#day-tab-${index}`);
    activeTab?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "nearest" });
  }

  function renderDay() {
    const day = dayDefinitions[activeIndex];
    daySummary.replaceChildren();
    daySummary.append(makeElement("h3", "", day.heading));
    daySummary.append(makeElement("p", "", day.summary));

    const entries = trip.schedule.filter(item => item.date === day.date);
    timeline.replaceChildren();
    if (!entries.length) {
      timeline.append(makeElement("p", "empty-state", "이 날짜에 등록된 일정이 없습니다."));
      return;
    }

    entries.forEach(item => timeline.append(renderScheduleItem(item)));
  }

  function renderScheduleItem(item) {
    const category = categoryClass[item.category] || "other";
    const wrapper = makeElement("article", `timeline-item category-${item.category || "기타"}`);
    const time = makeElement("div", "timeline-time");
    const timeText = makeElement("span", "", item.time || "시간 미정");
    time.append(timeText);

    const rail = makeElement("div", "timeline-rail");
    rail.setAttribute("aria-hidden", "true");
    rail.append(makeElement("span", "rail-dot"));

    const hasDetail = item.detailId && detailsByCategory[item.category]?.[item.detailId];
    const card = makeElement(hasDetail ? "button" : "div", `schedule-card${hasDetail ? " interactive" : " static"}`);
    if (hasDetail) {
      card.type = "button";
      card.setAttribute("aria-haspopup", "dialog");
      card.setAttribute("aria-label", `${item.category} 상세 보기: ${item.title}, ${item.place}`);
      card.addEventListener("click", () => openDetail(item));
    }

    const main = makeElement("div", "schedule-main");
    const topLine = makeElement("div", "schedule-topline");
    const categoryBadge = makeElement("span", `category-badge ${category}`);
    const categorySymbol = makeElement("span", "category-icon", categoryIcon[item.category] || categoryIcon.기타);
    categorySymbol.setAttribute("aria-hidden", "true");
    categoryBadge.append(categorySymbol, makeElement("span", "", item.category || "기타"));
    topLine.append(categoryBadge);
    if (item.timeStatus) topLine.append(makeElement("span", "status-badge", item.timeStatus));
    if (item.reservation) topLine.append(makeElement("span", "reservation-badge", item.reservation));
    main.append(topLine);
    main.append(makeElement("h4", "schedule-title", item.title));
    appendIf(main, "p", "schedule-place", item.place);
    appendIf(main, "p", "schedule-place", item.transport);
    appendIf(main, "p", "schedule-note", item.note);
    card.append(main);
    if (hasDetail) card.append(makeElement("span", "schedule-arrow", "↗"));
    wrapper.append(time, rail, card);
    return wrapper;
  }

  function openDetail(scheduleItem) {
    const data = detailsByCategory[scheduleItem.category]?.[scheduleItem.detailId];
    if (!data) return;
    lastFocusedElement = document.activeElement;
    modalContent.replaceChildren();

    const heroImage = document.createElement("img");
    heroImage.className = "modal-hero";
    configureImage(heroImage, data.photo, `${data.name} 대표 사진`, "assets/cover/nhatrang-cover.svg");
    modalContent.append(heroImage);

    const body = makeElement("div", "modal-body");
    const title = makeElement("h2", "", data.name);
    title.id = "modal-title";
    body.append(title);

    const mapLink = document.createElement("a");
    mapLink.className = "map-link";
    mapLink.href = data.mapUrl || "#";
    mapLink.target = "_blank";
    mapLink.rel = "noopener noreferrer";
    mapLink.textContent = "지도에서 보기 ↗";
    if (!data.mapUrl) mapLink.setAttribute("aria-disabled", "true");
    body.append(mapLink);

    if (scheduleItem.category === "식사") renderMealContent(body, data);
    if (scheduleItem.category === "쇼핑") renderShoppingContent(body, data);
    if (scheduleItem.category === "관광") renderAttractionContent(body, data);

    modalContent.append(body);
    if (!modal.open) modal.showModal();
    document.body.classList.add("modal-open");
    modal.querySelector(".modal-close")?.focus();
  }

  function renderMealContent(body, data) {
    const list = makeElement("div", "modal-list");
    (data.menus || []).forEach(menu => {
      const entry = makeElement("article", "detail-entry");
      const image = document.createElement("img");
      configureImage(image, menu.photo, menu.name, "assets/menus/menu-mock.svg");
      const copy = makeElement("div", "");
      copy.append(makeElement("h3", "", menu.name));
      appendIf(copy, "p", "", menu.description);
      entry.append(image, copy);
      list.append(entry);
    });
    body.append(list);
  }

  function renderShoppingContent(body, data) {
    const list = makeElement("div", "modal-list");
    (data.items || []).forEach(item => {
      const entry = makeElement("article", "detail-entry");
      const image = document.createElement("img");
      configureImage(image, item.photo, item.name, "assets/shopping/item-mock.svg");
      const copy = makeElement("div", "");
      copy.append(makeElement("h3", "", item.name));
      appendIf(copy, "p", "price-range", item.priceRange);
      entry.append(image, copy);
      list.append(entry);
    });
    body.append(list);
  }

  function renderAttractionContent(body, data) {
    appendIf(body, "p", "attraction-description", data.description);
    const duration = makeElement("div", "visit-duration");
    duration.append(makeElement("span", "", "관람 예상 시간"));
    duration.append(makeElement("strong", "", data.visitDuration || "미정"));
    body.append(duration);
  }

  modal.addEventListener("click", event => {
    if (event.target === modal) modal.close();
  });
  modal.addEventListener("close", () => {
    document.body.classList.remove("modal-open");
    if (lastFocusedElement instanceof HTMLElement) lastFocusedElement.focus();
  });
  modal.querySelector(".modal-close")?.addEventListener("click", () => modal.close());

  activeIndex = initialDayIndex();
  renderTabs();
  renderDay();
})();
