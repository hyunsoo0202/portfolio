import type { Profile as ProfileType, PortfolioData } from "@/types/portfolio";

// 소개 블록. 히어로와 같은 첫 장 아래쪽에 붙는다.
// headline이 이 블록의 제목이다 — 히어로 가운데에 따로 떠 있을 때는 한 줄짜리
// 장식이었지만, 본문 위에 올리면 아래 문단이 그 문장의 근거로 읽힌다.
export function Profile({
  profile,
  intro,
}: {
  profile: ProfileType;
  intro: PortfolioData["intro"];
}) {
  const { contact } = profile;

  // 주소가 비어 있는 링크는 칸 자체를 만들지 않는다.
  const links = [
    { label: "email", href: `mailto:${contact.email}` },
    { label: "github", href: contact.github },
    { label: "blog", href: contact.blog },
  ].filter((link): link is { label: string; href: string } => Boolean(link.href));

  return (
    <div>
      {/* 이름과 인사말은 히어로가 맡는다. h1이 거기 있으므로 여기는 h2다. */}
      <div className="max-w-3xl">
        <h2 className="text-lg font-bold leading-snug tracking-tight sm:text-xl">
          {intro.headline}
        </h2>
        <p className="mt-4 font-mono text-sm text-muted">{profile.career}</p>
        <p className="mt-3 leading-loose">{intro.body}</p>
      </div>

      {/* 연락처 한 행. 칸을 가르는 선 없이 열 간격만으로 나눈다. */}
      <div className="mt-8 grid gap-6 sm:grid-cols-3 sm:gap-10">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target={link.href.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="group flex min-w-0 flex-col gap-1.5"
          >
            <span className="font-mono text-[11px] lowercase text-muted">{link.label}</span>
            <span className="truncate text-sm underline decoration-rule underline-offset-4 transition-colors group-hover:decoration-ink">
              {link.href}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
