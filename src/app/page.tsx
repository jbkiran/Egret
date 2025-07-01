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
    // <div className="gap-3 max-w-[1600px] mx-auto flex flex-col sm:flex-row p-3 box-border min-h-screen">
    <div className="gap-3 max-w-[1600px] mx-auto flex flex-col md:flex-row sm:flex-row lg:flex-row p-3 box-border min-h-screen">
      {!navOpen && (<button
        onClick={() => setNavOpen(true)}
        className="lg:hidden absolute top-4 right-2 bg-[var(--color-background)] text-[var(--color-primary)] p-2 rounded-lg z-40 mr-3 mt-1"
        aria-label="Open Menu"
      >
        &#9776;
      </button>)}
      
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
