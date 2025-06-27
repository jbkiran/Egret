import { MainContentProps,SectionContentType } from "@/types/interface";
import { memo, useMemo } from "react";
import AboutContent from "@/components/main/AboutContent";
import SkillsContent from "@/components/main/SkillsContent";
import ProjectsContent from "@/components/main/ProjectsContent";
import ExperienceContent from "@/components/main/ExperienceContent";
import TestimonialsContent from "@/components/main/TestimonialsContent";
import CertificationsContent from "@/components/main/CertificationsContent";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export const sectionContent: SectionContentType = {
  about: {
    title: '',
    content: <AboutContent />
  },
  skills: {
    title: 'Skills I Know',
    content: <SkillsContent />
  },
  projects: {
    title: 'Projects',
    content: <ProjectsContent />
  },
  experience: {
    title: 'Experience',
    content: <ExperienceContent />
  },
  testimonials: {
    title: 'Testimonials',
    content: <TestimonialsContent />
  },
  certifications: {
    title: 'Awards & Recognitions',
    content: <CertificationsContent />
  },
};

const MainContent : React.FC<MainContentProps> = memo(({ section }) => {

  const { title, content } = useMemo(() => sectionContent[section], [section]);

  return (
      <main className="flex-1 min-w-0 bg-[var(--color-foreground)] rounded-2xl shadow-lg py-6 pl-6 h-[calc(100vh-23px)] w-full sm:w-1/2 md:flex-1 sm:h-auto">
        <section id={section}>
          <h3 className="text-xl font-bold mb-4 text-[var(--color-secondary)]">{title}</h3>
          {/* <div className="relative"> */}
            <ScrollArea className="h-[calc(100vh-130px)] w-full pr-6 pl-2">
              <div className="text-[var(--color-primary)] space-y-4 ">
                {content}
              </div>
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          {/* </div> */}
        </section>
      </main>
  );
});

MainContent.displayName = "MainContent";

export default MainContent;