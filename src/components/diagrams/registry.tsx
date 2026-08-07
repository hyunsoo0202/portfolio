// 다이어그램은 프로젝트마다 박스·화살표 배치가 완전히 달라 데이터로 일반화하지
// 않는다. DiagramRef.id로 여기서 실제 SVG 컴포넌트를 찾아 그린다.
//
// 아직 어떤 다이어그램도 그리지 않았다. id를 등록하기 전까지는 Placeholder가
// 대신 자리를 채워서, 텍스트 콘텐츠(문제/결정/회고)를 먼저 완성해도 상세
// 페이지가 깨지지 않는다.
//
// 제작 방법 (Mermaid):
// 1. mermaid.live 등에서 다이어그램을 그린다.
// 2. SVG로 export해 public/diagrams/<DiagramRef.id>.svg로 저장한다.
//    (output: 'export' 정적 빌드라 SVGR 없이 <img>로 바로 서빙한다.)
// 3. 아래처럼 registry에 한 줄 추가한다.
//
//   export const diagramRegistry: Record<string, React.ComponentType> = {
//     "japan-crm-infra": svgDiagram("/diagrams/japan-crm-infra.svg", "인프라 구성도"),
//   };

function Placeholder({ title }: { title: string }) {
  return (
    <div className="flex aspect-video items-center justify-center rounded-lg border border-dashed border-rule text-sm text-muted">
      {title} — 다이어그램 준비 중
    </div>
  );
}

function svgDiagram(src: string, alt: string): React.ComponentType {
  return function SvgDiagram() {
    // eslint-disable-next-line @next/next/no-img-element -- 정적 export 빌드라 next/image 최적화 대상이 아니다
    return <img src={src} alt={alt} className="w-full rounded-lg border border-rule" />;
  };
}

export const diagramRegistry: Record<string, React.ComponentType> = {
  "japan-crm-infra": svgDiagram("/diagrams/japan-crm-infra.svg", "인프라 구성도"),
  "japan-crm-input-flow": svgDiagram("/diagrams/japan-crm-input-flow.svg", "매장 응대 입력 플로우"),
  "japan-crm-scan-input": svgDiagram("/diagrams/japan-crm-scan-input.svg", "스캔 입력 이원화"),
  "backoffice-before-after": svgDiagram(
    "/diagrams/backoffice-before-after.svg",
    "통합 전/후 시스템 구성도",
  ),
  "backoffice-order-flow": svgDiagram("/diagrams/backoffice-order-flow.svg", "발주 조회 2단 구조"),
  "backoffice-membership": svgDiagram(
    "/diagrams/backoffice-membership.svg",
    "멤버십 연동 전/후 시퀀스",
  ),
  "dicom-shared-structure": svgDiagram("/diagrams/dicom-shared-structure.svg", "제품 간 공유 구조"),
  "dicom-parsing-roles": svgDiagram("/diagrams/dicom-parsing-roles.svg", "파싱 레이어 역할 분담"),
  "dicom-recursive-flow": svgDiagram(
    "/diagrams/dicom-recursive-flow.svg",
    "재귀 탐색 + 순차 검증 흐름",
  ),
  "bible-upload-sequence": svgDiagram("/diagrams/bible-upload-sequence.svg", "업로드 3단계 시퀀스"),
};

export function getDiagramComponent(id: string): React.ComponentType | null {
  return diagramRegistry[id] ?? null;
}

export { Placeholder as DiagramPlaceholder };
