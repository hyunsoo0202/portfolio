// 모든 섹션이 공유하는 껍데기.
// 섹션은 바탕보다 한 단계 밝은 블록이다.
//
// bare는 프로젝트 섹션 전용 예외다. 카드가 이미 같은 톤의 블록이라
// 그 밑에 블록을 한 겹 더 깔면 같은 색이 겹쳐 경계가 사라진다.
//
// 번호(01 / 02)는 붙이지 않는다 — 섹션들이 순서를 가진 절차가 아니라서
// 번호가 실제로는 아무 정보도 나르지 못한다.

export function Section({
  label,
  children,
  bare = false,
  className = "",
}: {
  // 문자열이 기본이지만, 라벨 옆에 작은 부가 정보(예: 연차)를 붙이는 섹션이
  // 있어서 ReactNode로 받는다.
  label: React.ReactNode;
  children: React.ReactNode;
  bare?: boolean;
  className?: string;
}) {
  const shell = bare ? "" : "rounded-lg bg-surface p-6 sm:p-8";

  return (
    <section className={`${shell} ${className}`}>
      {/* 요소는 h2로 둔다. h1(이름) 바로 아래 계층이라 h3으로 내리면
          제목 단계가 건너뛰어져 스크린리더의 구조 탐색이 끊긴다.
          바꾼 건 크기뿐이다. */}
      <h2 className="mb-8 text-xl font-bold tracking-tight sm:text-2xl">{label}</h2>
      {children}
    </section>
  );
}
