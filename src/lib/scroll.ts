// 시트 스택에서 특정 위치로 스크롤시키는 헬퍼.
//
// 두 가지를 우회한다.
//
// 1) sticky. 지나온 시트는 화면 맨 위에 붙어 있어 rect.top이 0이다. 브라우저의
//    기본 앵커 이동(#id)은 "이미 보이는 중"으로 판단해 아무것도 하지 않는다.
//    offsetTop으로 바꿔도 마찬가지다 — offsetTop 역시 sticky로 이동한 위치를
//    따라가므로 "지금 있는 자리로 가라"가 된다. 그래서 좌표는 시트가 아니라
//    시트 앞에 놓인 표식(data-sheet-anchor)에서 읽는다. 표식은 sticky가 아니라
//    문서에 붙박여 있어 그 장의 원래 자리를 알려준다.
//
// 2) scroll-snap. proximity 스냅이 켜진 상태에서 프로그램으로 스크롤하면,
//    스크롤이 끝나는 순간 브라우저가 가장 가까운 스냅 지점으로 다시 당긴다.
//    시트가 스택이라 지금 화면(고정된 시트)이 늘 가장 가까운 후보라서,
//    뒤로 이동한 결과가 원래 자리로 되돌려진다 — 클릭이 먹지 않는 것처럼 보인다.
//    이동하는 동안만 스냅을 끄고, 끝나면 되돌린다.

/** 문서 최상단부터 잰 요소의 위치. sticky가 아닌 요소에만 쓴다. */
export function documentTop(el: HTMLElement): number {
  return el.getBoundingClientRect().top + window.scrollY;
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

let restoreTimer = 0;

export function scrollToY(top: number) {
  const root = document.documentElement;

  // 이동 중에 또 클릭이 들어올 수 있다. 그때 인라인 스타일("none")을 원래 값으로
  // 착각해 저장하면 스냅이 영영 꺼진 채로 남으므로, 복구는 항상 "인라인 해제"다.
  root.style.scrollSnapType = "none";

  window.scrollTo({ top, behavior: prefersReducedMotion() ? "auto" : "smooth" });

  const restore = () => {
    window.clearTimeout(restoreTimer);
    root.style.removeProperty("scroll-snap-type");
  };

  window.clearTimeout(restoreTimer);
  // 목표가 지금 위치와 같으면 스크롤이 아예 일어나지 않아 scrollend도 오지 않는다.
  // 타이머는 그 경우의 안전장치다.
  restoreTimer = window.setTimeout(restore, 1000);

  if ("onscrollend" in window) {
    window.addEventListener("scrollend", restore, { once: true });
  }
}

/** 시트 앞의 표식 위치로 스크롤한다 = 그 장을 화면 맨 위에 놓는다. */
export function scrollToAnchor(anchor: HTMLElement) {
  scrollToY(documentTop(anchor));
}
