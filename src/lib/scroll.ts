// 목차(SheetNav)에서 특정 섹션으로 스크롤시키는 헬퍼.

export function documentTop(el: HTMLElement): number {
  return el.getBoundingClientRect().top + window.scrollY;
}

function prefersReducedMotion(): boolean {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function scrollToY(top: number) {
  window.scrollTo({ top, behavior: prefersReducedMotion() ? "auto" : "smooth" });
}

/** 섹션 위치로 스크롤한다 = 그 장을 화면 맨 위에 놓는다. */
export function scrollToAnchor(section: HTMLElement) {
  scrollToY(documentTop(section));
}
