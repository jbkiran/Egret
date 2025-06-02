import { MainContentProps,SectionContentType } from "@/types/interface";
import { memo, useMemo } from "react";
import AboutContent from "@/components/main/AboutContent";
import SkillsContent from "@/components/main/SkillsContent";
import ProjectsContent from "@/components/main/ProjectsContent";
import ExperienceContent from "./main/ExperienceContent";
import TestimonialsContent from "./main/TestimonialsContent";
import CertificationsContent from "./main/CertificationsContent";

export const sectionContent: SectionContentType = {
  about: {
    title: 'About Me',
    content: <AboutContent />
  },
  skills: {
    title: 'Skills',
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
    title: 'Certifications',
    content: <CertificationsContent />
  },
};

const MainContent : React.FC<MainContentProps> = memo(({ section }) => {

  const { title, content } = useMemo(() => sectionContent[section], [section]);

  return (
      <main className="flex-1 bg-[var(--color-foreground)] rounded-2xl shadow-lg p-6 h-[300px] md:h-auto w-full sm:w-1/2 md:flex-1 sm:h-auto">
        <section id={section}>
          <h3 className="text-xl font-bold mb-4 text-[var(--color-primary)]">{title}</h3>
          <div className="text-[var(--color-secondary)]">
            <div className="space-y-4">
              {content}
            </div>
          </div>
        </section>
      </main>
  );
});

export default MainContent;