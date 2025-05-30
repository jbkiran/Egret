'use client'
import MainContent from "@/components/MainContent";
import NavMenu from "@/components/NavMenu";
import Profile from "@/components/Profile";
import { SectionId } from "@/types/interface";
import { useState } from "react";

export default function Home() {

  const [activeSection, setActiveSection] = useState<SectionId>('about');
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="gap-3 max-w-[1600px] mx-auto flex flex-col md:flex-row px-3 box-border min-h-screen">
      <button
        onClick={() => setNavOpen(true)}
        className="lg:hidden absolute top-4 left-4 bg-gray-800 text-white p-2 rounded z-40"
        aria-label="Open Menu"
      >
        ☰
      </button>
      <Profile />
      <MainContent section={activeSection}/>
      <NavMenu 
        active={activeSection}
        onSelect={(sectionPhase) => {
          setActiveSection(sectionPhase as SectionId);
          setNavOpen(false);
        }}
        open={navOpen}
        onClose={() => setNavOpen(false)}
      />

    </div>
  );
}
