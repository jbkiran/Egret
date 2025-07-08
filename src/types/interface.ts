export type SectionId =
  | 'about'
  | 'skills'
  | 'projects'
  | 'experience'
  | 'testimonials'
  | 'certifications';

export interface NavMenuProps{
    active: string;
    onSelect: (section: SectionId) => void;
    open: boolean;
    onClose : () => void;
}

export interface MainContentProps {
  section: SectionId;
}

export interface SectionContentItem {
  title: string;
  content: React.ReactNode;
}

export type SectionContentType = {
  [key: string]: SectionContentItem;
};

export type SkillItemType = {
    icon: React.ReactNode,
    name: string,
    level: number
}

export interface Testimonials{
  id: number;
  name: string;
  position: string;
  testimonial: string;
  company:string;
}

export type TestimonialsType = {
  testimonialData:Testimonials
}

interface ProjectCardProps {
    id:number;
    project_title:string;
    company:string;
    description:string;
    responsibilities: string[];
    tech_stack:string[];
    project_link?:string;
}

export type ProjectType = {
  project:ProjectCardProps
}

interface ExperienceProps{
  id : number;
  designation : string;
  company   : string;
  location  : string;
  from  : string;
  to    : string;
}

export type ExperienceType = {
  experience : ExperienceProps
}

export type DownloadType = {
    bucket      : string;
    fileName    : string;
    onSuccess?  : () => void;
    onError?    : (error : Error) => void;
}