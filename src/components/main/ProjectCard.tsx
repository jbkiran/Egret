import React from 'react'


interface ProjectCardProps {
    title:string;
    company:string;
    summary:string;
    responsibilities: string[];
    techStack:string[];
    link?:string;
}
const ProjectCard = ({title,company,summary,responsibilities,techStack,link}:ProjectCardProps) => {
   return (
    <div className="bg-[var(--color-card)] shadow-lg rounded-2xl p-6 mb-8 border border-[var(--color-secondary)] hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-start justify-between mb-4">
            <div>
                <h3 className="text-xl font-semibold text-[var(--color-primary)]">{title}</h3>
                <p className="text-sm text-[var(--color-secondary)]">{company}</p>
            </div>
            {/* <span className="text-sm font-medium text-[var(--color-secondary)]">{timeline}</span> */}
            <span className="text-sm font-medium underline text-[var(--color-secondary)]">
                {link && (
                    <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-blue-600 dark:text-blue-400 text-sm font-semibold hover:underline"
                    >
                    Visit Project 
                    </a>
                )}
            </span>
        </div>

        <p className="text-[var(--color-secondary)] mb-4">{summary}</p>

        <ul className="list-disc pl-5 text-[var(--color-secondary)] mb-4 space-y-1">
            {responsibilities.map((point, i) => (
            <li key={i}>{point}</li>
            ))}
        </ul>

        <div className="flex flex-wrap gap-2 mb-4">
            {techStack.map((tech, i) => (
            <span
                key={i}
                className="bg-[var(--color-primary)] text-[var(--color-background)] text-xs px-2 py-1 rounded-full font-medium"
            >
                {tech}
            </span>
            ))}
        </div>
    </div>
  );
}

export default ProjectCard
