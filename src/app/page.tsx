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

// 페이지는 섹션의 나열이 아니라 종이 한 장씩의 더미다.
// 각 Sheet가 화면 한 장을 차지하고, 다음 장이 아래에서 올라와 앞 장을 덮는다.
// 덮는 동작·순서·판정은 전부 Sheet와 globals.css의 .sheet 규칙에 있다.
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
        <Sheet id="top" mesh="mesh-top" first bleed>
          <Hero profile={profile}>
            <Profile profile={profile} intro={intro} />
          </Hero>
        </Sheet>

        <Sheet id="career" mesh="mesh-career">
          <div className="space-y-14">
            <Career careers={careers} />
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
