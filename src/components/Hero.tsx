import type { Profile } from "@/types/portfolio";

// 첫 장. 인사말과 소개가 한 화면에 같이 있다.
// 배경은 Sheet가 그린다(.mesh). 이미지 파일이 아니라 CSS 그라디언트라
// 정적 배포에 파일이 하나도 늘지 않고, 화면 폭이 바뀌어도 다시 그려진다.
//
// 액센트 색은 이 화면의 이름 한 곳에서만 쓴다. 나머지 페이지는 무채색이라
// 색이 나오는 자리가 곧 "여기가 시작점"이라는 뜻이 된다.
//
// 소개는 children으로 받는다. 한 장 안에 같이 놓되 Hero가 소개의 내용까지
// 알 필요는 없어서, 자리만 내주고 무엇을 넣을지는 페이지가 정한다.
export function Hero({
  profile,
  children,
}: {
  profile: Profile;
  children?: React.ReactNode;
}) {
  return (
    <header className="relative isolate min-h-dvh overflow-hidden">
      {/* 배경(.mesh)은 이제 Sheet가 그린다. 모든 장이 같은 방식으로 칠해져야
          색만 다른 같은 종이로 읽힌다. */}
      {/* 서명 줄은 SiteHeader가 화면 맨 위에 고정으로 갖고 있다.
          여기에 또 두면 같은 문장이 두 줄 겹쳐 보인다. pt는 그 헤더 높이만큼. */}
      <div className="mx-auto flex min-h-dvh max-w-5xl flex-col px-6 pt-20 pb-10">
        {/* 인사말과 소개가 한 장을 나눠 쓴다. 인사말을 가운데 정렬로 두면
            아래 왼쪽 정렬 본문과 축이 어긋나 두 덩어리가 따로 놀아서,
            둘 다 왼쪽 축에 맞춘다. */}
        <div className="flex flex-1 flex-col justify-center gap-12 py-12">
          <h1 className="text-3xl font-bold leading-[1.3] tracking-tight sm:text-4xl lg:text-[2.75rem]">
            안녕하세요,
            <br />
            {profile.roleKo ?? profile.role} <span className="text-accent">{profile.name}</span>
            입니다.
          </h1>

          {children}
        </div>
      </div>
    </header>
  );
}
