"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import type { Project } from "@/types/portfolio";
import { hasProjectDetail, hasProjectSummary } from "@/lib/project-detail";
import { ProjectDetailContent } from "@/components/ProjectDetailContent";
import { ProjectSummaryContent } from "@/components/ProjectSummaryContent";

// 네이티브 <dialog>를 쓴다. Esc로 닫힘·포커스 트랩·backdrop이 브라우저 기본 제공이라
// 라이브러리 없이도 접근성이 맞다. project가 바뀔 때마다 showModal/close를 호출해
// React 상태(부모의 selectedProject)와 dialog의 열림 상태를 맞춘다.
//
// /projects/[slug] 라우트는 detail이 있는 프로젝트만 갖는다 — 직접 URL 접근과
// 검색엔진 색인은 그 라우트가 담당하고, 카드 클릭으로 들어오는 앱 내 탐색만
// 이 모달이 대신한다. summary만 있는 프로젝트는 애초에 라우트가 없어 모달이 유일한 진입점이다.
export function ProjectDetailModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (project) {
      if (!dialog.open) dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      if (dialog.open) dialog.close();
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  return (
    <dialog
      ref={dialogRef}
      onClose={onClose}
      onClick={(event) => {
        // dialog 엘리먼트 자체를 클릭했다는 건 backdrop을 클릭했다는 뜻이다
        // (내용은 안쪽 div가 이벤트를 먼저 받아 여기까지 안 올라온다).
        if (event.target === dialogRef.current) dialogRef.current?.close();
      }}
      className="m-auto max-h-[85dvh] w-full max-w-3xl rounded-2xl border-0 bg-surface p-0 backdrop:bg-ink/60"
    >
      {project && (
        // dialog 자체에는 position을 건드리지 않는다 — 브라우저 기본값이
        // position: fixed + margin: auto로 화면 중앙에 띄우는 트릭이라,
        // 여기 relative를 걸면 그 fixed가 깨져 dialog가 문서 흐름 속
        // 아무 데나 렌더링된다(backdrop만 보이고 내용이 안 보이던 원인).
        // 버튼의 absolute 기준점은 이 안쪽 div가 대신 잡는다.
        <div className="relative">
          {/* 스크롤 컨테이너 밖, 이 div 기준 absolute라 스크롤해도 항상 우측 상단에 남는다. */}
          <button
            type="button"
            onClick={() => dialogRef.current?.close()}
            className="absolute right-4 top-4 z-10 flex size-8 items-center justify-center rounded-full bg-surface text-muted hover:bg-band hover:text-ink"
            aria-label="닫기"
          >
            <X className="size-4" aria-hidden />
          </button>

          <div className="max-h-[85dvh] overflow-y-auto px-6 py-10 pr-14 sm:px-10 sm:pr-16">
            <header>
              <p className="font-mono text-sm text-muted">
                {project.affiliation} · {project.period}
              </p>
              <h1 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
                {project.title}
              </h1>
              <ul className="mt-4 flex flex-wrap gap-1.5">
                {project.tags.map((tag) => (
                  <li
                    key={tag}
                    className="rounded-md bg-band px-2 py-1 font-mono text-[11px] leading-none text-ink"
                  >
                    {tag}
                  </li>
                ))}
              </ul>
            </header>

            <div className="mt-16">
              {hasProjectDetail(project) ? (
                <ProjectDetailContent project={project} />
              ) : hasProjectSummary(project) ? (
                <ProjectSummaryContent summary={project.summary} />
              ) : null}
            </div>
          </div>
        </div>
      )}
    </dialog>
  );
}
