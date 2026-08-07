// 한 섹션 블록. 일반 문서 흐름대로 위에서 아래로 쌓인다.
//
// data-sheet는 SheetNav가 시트를 찾는 표식이다. class로 찾지 않는 이유는
// 스타일 클래스가 바뀌어도 동작이 따라 깨지지 않게 하기 위해서다.
export function Sheet({
  id,
  mesh,
  bleed = false,
  className = "",
  children,
}: {
  id: string;
  /** 배경 색조. globals.css의 .mesh-* 중 하나 (예: "mesh-career") */
  mesh: string;
  /** 히어로처럼 좌우 여백 없이 폭을 꽉 채우는 장 */
  bleed?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} data-sheet className={`mesh ${mesh} relative min-h-dvh ${className}`}>
      {bleed ? (
        children
      ) : (
        <div className="sheet-body mx-auto flex min-h-dvh max-w-5xl flex-col justify-center px-6 py-24">
          {children}
        </div>
      )}
    </section>
  );
}
