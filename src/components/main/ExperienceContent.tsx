import React from 'react'
import ExperienceCard from '@/components/main/ExperienceCard';
import { useExperience } from '@/libs/supabase/hooks/portfolioSlice';
import ExperienceSkeleton from '@/components/skeleton/ExperienceSkeleton';

const ExperienceContent = () => {
  const {data : experiences = [], isLoading, error } = useExperience();

  if (isLoading) return (<ExperienceSkeleton /> );
  if (error) return <p className="text-red-600">Error: {error.message}</p>;

  return (
    <div className="relative max-w-5xl mx-auto px-4 py-12">
      <div className="absolute left-[7vh] md:left-[5vh] h-full w-1 bg-[var(--color-secondary)] z-0" />
      <div className="space-y-18 relative">
        {experiences.map((experience) => (
          <ExperienceCard key={experience.id} experience={experience} />
        ))}
      </div>
    </div>
  );
}

export default ExperienceContent