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