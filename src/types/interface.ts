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