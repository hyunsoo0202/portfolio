"use client";

import { useEffect, useRef, useState } from "react";
import { SECTIONS } from "@/data/sections";
import { scrollToAnchor } from "@/lib/scroll";

// 우측 목차. 두 가지를 한다.
//  1) 지금 보고 있는 섹션을 표시한다.
//  2) 목차 클릭을 가로채 그 섹션으로 스크롤한다.

/** 판정선: 뷰포트 위에서부터 이 비율 지점을 지나야 그 장을 "보고 있다"고 친다 */
const ACTIVE_LINE_RATIO = 0.4;

function getActiveIndex(rects: DOMRect[], viewportHeight: number): number {
  const line = viewportHeight * ACTIVE_LINE_RATIO;

  for (let i = rects.length - 1; i >= 0; i -= 1) {
    if (rects[i].top <= line) return i;
  }

  // 맨 위로 튕겨 올라간 경우(스크롤 바운스 등) 첫 장으로 둔다.
  // -1을 주면 목차에서 활성 표시가 통째로 사라져 깜빡이는 것처럼 보인다.
  return 0;
}

export function SheetNav() {
  const [active, setActive] = useState(0);
  const sheetsRef = useRef<HTMLElement[]>([]);

  useEffect(() => {
    const sheets = Array.from(document.querySelectorAll<HTMLElement>("[data-sheet]"));
    if (sheets.length === 0) return;
    sheetsRef.current = sheets;

    // 스크롤 핸들러는 rAF로 묶는다. 스크롤 이벤트는 프레임당 여러 번 올 수 있는데
    // 우리가 하는 일(getBoundingClientRect)은 레이아웃을 강제로 계산시키므로
    // 프레임마다 한 번으로 제한하지 않으면 스크롤이 끊긴다.
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        const rects = sheets.map((sheet) => sheet.getBoundingClientRect());
        setActive(getActiveIndex(rects, window.innerHeight));
      });
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  // 목차 클릭. href는 그대로 두고(자바스크립트가 죽어도, 새 탭으로 열어도 동작한다)
  // 스크립트가 살아 있을 때만 기본 동작을 대신한다.
  const jumpTo = (index: number) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    const sheet = sheetsRef.current[index];
    if (!sheet || event.metaKey || event.ctrlKey || event.shiftKey || event.button !== 0) return;

    event.preventDefault();
    scrollToAnchor(sheet);
    // 도착 표시를 기다리지 않고 먼저 옮긴다. 스무스 스크롤이 끝날 때까지
    // 목차가 출발한 자리에 남아 있으면 클릭이 안 먹은 것처럼 보인다.
    setActive(index);
  };

  return (
    <nav
      aria-label="섹션 목차"
      className="fixed right-8 top-1/2 z-50 hidden -translate-y-1/2 md:block"
    >
      <ol className="space-y-3">
        {SECTIONS.map((section, i) => {
          const current = i === active;
          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={jumpTo(i)}
                aria-current={current ? "true" : undefined}
                className="group flex items-center justify-end gap-3"
              >
                <span
                  className={`font-mono text-[11px] transition-all duration-300 ${
                    current
                      ? "text-ink opacity-100"
                      : "text-muted opacity-0 group-hover:opacity-100"
                  }`}
                >
                  {section.label}
                </span>
                {/* 선 길이로 현재 위치를 알린다. 색만 바꾸면 축소된 화면이나
                    저대비 환경에서 구분이 사라진다. */}
                <span
                  aria-hidden
                  className={`h-px transition-all duration-300 ${
                    current ? "w-8 bg-ink" : "w-4 bg-rule group-hover:bg-muted"
                  }`}
                />
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
