import AboutContent from "@/components/main/AboutContent";
import SkillsContent from "@/components/main/SkillsContent";
import { SectionContentType } from "@/types/interface";

export const navMenuItems = [
    {id: "about", label: "About"},
    {id: "skills", label: "Skills"},
    {id: "projects", label: "Projects"},       
    {id: "experience", label: "Experience"},
    {id: "testimonials", label: "Testimonials"},
    {id: "certifications", label: "Certifications"},
] as const;


export const profileData = {
  name: "Kiran JB",
  title: "Senior Software Engineer",
  email: "kiranjb@hotmail.com",
  phone: "+91-9633770528",
  location: "Thiruvananthapuram",
  profileImage: "profile.webp",
  resumeUrl: "resume2025.pdf",
  socialLinks: {
    linkedin: "https://linkedin.com/in/jbkiran",
    github: "https://github.com/jbkiran",
  },
};