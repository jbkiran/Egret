import { sectionContent } from "@/types/constants";
import { MainContentProps } from "@/types/interface";
import { memo, useMemo } from "react";


const MainContent : React.FC<MainContentProps> = memo(({ section }) => {

  const { title, content } = useMemo(() => sectionContent[section], [section]);
  return (
      <main className="flex-1 bg-[#2B2B2B] rounded-2xl shadow-lg p-6 h-[300px] md:h-auto w-full sm:w-1/2 md:flex-1 sm:h-auto">
        <section id={section}>
          <h3 className="text-xl font-bold mb-4 text-[#F0ECE2]">{title}</h3>
          <div className="text-[#A9A9A9]">{content}</div>
        </section>
      </main>
  );
});

export default MainContent;