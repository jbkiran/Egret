export const navMenuItems = [
    {id: "about", label: "About"},
    {id: "skills", label: "Skills"},
    {id: "projects", label: "Projects"},       
    {id: "experience", label: "Experience"},
    {id: "testimonials", label: "Testimonials"},
    {id: "certifications", label: "Certifications"},
] as const;

export const sectionContent = {
  about: {
    title: 'About Me',
    content: '(<div className="space-y-4">{/* Add About Me here */}</div>)',
  },
  skills: {
    title: 'Skills',
    content: '(<div className="space-y-4">{/* Add Skills here */}</div>)',
  },
  projects: {
    title: 'Projects',
    content: '(<div className="space-y-4">{/* Add Projects here */}</div>)',
  },
  experience: {
    title: 'Experience',
    content: '(<div className="space-y-4">{/* Add Experience here */}</div>)',
  },
  testimonials: {
    title: 'Testimonials',
    content: '(<div className="space-y-4">{/* Add Testimonials here */}</div>)',
  },
  certifications: {
    title: 'Certifications',
    content: '(<div className="space-y-4">{/* Add Certifications here */}</div>)',
  },
};