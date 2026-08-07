import { portfolio } from "@/data/profile";
import { projects } from "@/data/projects";
import { Hero } from "@/components/Hero";
import { Profile } from "@/components/Profile";
import { Career } from "@/components/Career";
import { TechStack } from "@/components/TechStack";
import { ProjectSection } from "@/components/ProjectSection";
import { Workflow } from "@/components/Workflow";
import { Activities } from "@/components/Activities";
import { Education } from "@/components/Education";
import { Sheet } from "@/components/Sheet";
import { SheetNav } from "@/components/SheetNav";
import { SiteHeader } from "@/components/SiteHeader";

// 페이지는 Sheet(섹션 블록)를 위에서 아래로 순서대로 나열한다. 스크롤은
// 브라우저 기본 동작 그대로고, 우측 SheetNav가 지금 보고 있는 장을 표시하며
// 클릭하면 그 장으로 이동한다.
//
// 한 장에 두 항목이 들어가는 경우가 있다(경력+기술 스택, 활동+교육).
// 짧은 항목을 각자 한 장씩 차지하게 두면 빈 장을 여러 번 넘기게 된다.
export default function Home() {
  const { profile, intro, careers, skills, workflow, activities, certificates, education } =
    portfolio;

  return (
    <>
      <SiteHeader profile={profile} />
      <SheetNav />

      <main>
        <Sheet id="top" mesh="mesh-top" bleed>
          <Hero profile={profile}>
            <Profile profile={profile} intro={intro} />
          </Hero>
        </Sheet>

        <Sheet id="career" mesh="mesh-career">
          <div className="space-y-14">
            <Career careers={careers} years={profile.career} />
            <TechStack skills={skills} />
          </div>
        </Sheet>

        <Sheet id="projects" mesh="mesh-projects">
          <ProjectSection projects={projects} />
        </Sheet>

        <Sheet id="workflow" mesh="mesh-workflow">
          <Workflow workflow={workflow} />
        </Sheet>

        <Sheet id="extra" mesh="mesh-extra">
          <div className="space-y-14">
            <Activities activities={activities} certificates={certificates} />
            <Education education={education} />
          </div>
        </Sheet>
      </main>
    </>
  );
}
