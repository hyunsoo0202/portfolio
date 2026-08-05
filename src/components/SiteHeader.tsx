"use client";

import { Mail, Github, NotebookPen } from "lucide-react";
import type { Profile } from "@/types/portfolio";
import { scrollToY } from "@/lib/scroll";

// 페이지 맨 위에 항상 떠 있는 서명 줄.
//
// 시트가 한 장씩 덮여 올라가면 첫 장(이름이 있는 장)은 금세 가려진다.
// 그래서 이름은 스크롤과 무관한 자리에 따로 둔다 — 어느 장을 보고 있든
// 이 페이지가 누구 것인지 남는다.
//
// 배경을 반투명 + blur로 두는 이유: 밑으로 시트가 계속 지나가는데 배경이
// 완전히 투명하면 글자와 본문이 겹쳐 읽히고, 불투명한 막대를 깔면 시트가
// 화면 위 끝까지 이어지는 '한 장'으로 보이지 않는다.
export function SiteHeader({ profile }: { profile: Profile }) {
  const { contact } = profile;

  // 주소가 없는 항목은 칸 자체를 만들지 않는다.
  // 아이콘만 남으므로 이름(aria-label)이 유일한 설명이다 — 비워두면
  // 스크린리더에는 목적지 없는 링크 세 개로 들린다.
  const links = [
    { label: "이메일", href: contact.email ? `mailto:${contact.email}` : "", Icon: Mail },
    { label: "GitHub", href: contact.github ?? "", Icon: Github },
    { label: "블로그", href: contact.blog ?? "", Icon: NotebookPen },
  ].filter((link) => link.href);

  return (
    <header className="fixed inset-x-0 top-0 z-40 backdrop-blur-sm">
      <div className="border-b border-rule/60 bg-surface/70">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-x-4 px-6 py-3 text-sm">
          {/* 첫 장으로 돌아가는 링크를 겸한다.
              기본 앵커 이동으로는 돌아가지지 않는다 — 첫 장은 sticky로 화면 맨 위에
              붙어 있어서 브라우저가 "이미 보이는 중"으로 판단하고 아무것도 하지 않는다.
              그래서 스크롤 위치를 직접 0으로 준다. */}
          <p className="flex min-w-0 items-baseline gap-x-2">
            <a
              href="#top"
              onClick={(event) => {
                if (event.metaKey || event.ctrlKey || event.shiftKey) return;
                event.preventDefault();
                scrollToY(0);
              }}
              className="font-bold"
            >
              {profile.name}
            </a>
            <span aria-hidden className="text-rule">
              |
            </span>
            <span className="truncate text-muted">{profile.role}</span>
          </p>

          {/* 연락처는 아이콘만. 첫 장에는 주소를 그대로 보여주는 블록이 따로 있고,
              여기는 어느 장에서든 바로 누를 수 있는 자리로만 둔다. */}
          <ul className="flex shrink-0 items-center gap-1">
            {links.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  aria-label={label}
                  title={label}
                  target={href.startsWith("mailto:") ? undefined : "_blank"}
                  rel="noopener noreferrer"
                  className="flex size-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-band hover:text-ink"
                >
                  {/* 아이콘은 라벨을 이미 aria-label로 갖고 있어 접근성 트리에서 뺀다 */}
                  <Icon aria-hidden size={16} strokeWidth={1.75} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}
