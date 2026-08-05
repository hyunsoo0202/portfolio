// 종이 한 장. 스크롤하면 다음 장이 아래에서 올라와 이 장을 덮는다.
//
// 덮이는 동작은 JS가 아니라 position: sticky다(globals.css의 .sheet).
// 브라우저 기본 스크롤을 그대로 쓰기 때문에 키보드·트랙패드·스크린리더가
// 평소대로 동작하고, 스크롤 이벤트를 가로챌 때 생기는 관성 깨짐도 없다.
//
// data-sheet는 SheetNav가 시트를 찾는 표식이다. class로 찾지 않는 이유는
// 스타일 클래스가 바뀌어도 동작이 따라 깨지지 않게 하기 위해서다.
export function Sheet({
  id,
  mesh,
  first = false,
  bleed = false,
  className = "",
  children,
}: {
  id: string;
  /** 배경 색조. globals.css의 .mesh-* 중 하나 (예: "mesh-career") */
  mesh: string;
  /** 첫 장은 위에 덮을 것이 없으므로 둥근 모서리와 상단 그림자를 뺀다 */
  first?: boolean;
  /** 히어로처럼 좌우 여백 없이 폭을 꽉 채우는 장 */
  bleed?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <>
      {/* 이 장이 문서에서 실제로 놓인 자리를 알려주는 표식.
          시트 자신은 sticky라 화면 위에 붙는 순간 좌표가 전부 '현재 화면 위치'로
          바뀐다(getBoundingClientRect는 물론 offsetTop도 따라간다). 그래서
          목차가 이동 목표를 물어볼 대상이 필요하다. 형제인 이 빈 요소는
          sticky의 영향을 받지 않아 원래 위치를 그대로 유지한다. */}
      <div data-sheet-anchor={id} aria-hidden className="h-0" />

      <section
        id={id}
        data-sheet
        className={`sheet mesh ${mesh} relative min-h-dvh ${
          first ? "" : "rounded-t-3xl sheet-edge"
        } ${className}`}
      >
        {bleed ? (
          children
        ) : (
          <div className="sheet-body mx-auto flex min-h-dvh max-w-5xl flex-col justify-center px-6 py-24">
            {children}
          </div>
        )}

        {/* 덮이는 동안 이 장을 어둡게 만드는 막. 콘텐츠가 아니라 접근성 트리에서 뺀다.
            투명도는 CSS 스크롤 타임라인이 움직인다 — 스크롤 핸들러가 없으므로
            메인 스레드를 쓰지 않는다. */}
        <div
          aria-hidden
          className="sheet-shade pointer-events-none absolute inset-0 rounded-t-3xl"
        />
      </section>
    </>
  );
}
