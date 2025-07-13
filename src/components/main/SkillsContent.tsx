import React from 'react'
import SkillCard from '@/components/main/SkillCard';
import { useSkills } from '@/libs/supabase/hooks/portfolioSlice';
import SkillSkeleton from '@/components/skeleton/SkillSkeleton';


const SkillsContent = () => {

  const { data: skills, isLoading, error } = useSkills();console.log(skills);

  if (isLoading) return (
    <div className="grid grid-row-1 gap-3">
      {Array.from({length:4}).map((_, index) => (
          <SkillSkeleton key={index}/>
      ))}
    </div>
  );
  if (error) return <p className="text-red-600">Error: {error.message}</p>;
  
  return (
    <>
    {skills?.map((skill) => ( 
      <SkillCard key={skill.id} title={skill.category} skills={skill.skills} />
    ))}
    </>
  )
}

export default SkillsContent