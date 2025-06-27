import React from 'react'
import ProjectCard from './ProjectCard'
import { useProjects } from '@/libs/supabase/hooks/portfolioSlice'
import ProjectSkeleton from '@/components/skeleton/ProjectSkeleton';

const ProjectsContent = () => {

  const { data: projects, isLoading, error } = useProjects();

  if(isLoading)
    return (
      <>
      {Array.from({length:3}).map((_, index) => (
        <ProjectSkeleton key={index} />
      ))}
      </>
    );

  if(error) return <p className='text-red-600'>Error : {error.message}</p>;

  return (
    <>
      {projects?.map((project) => (
        <ProjectCard
          project={project}
          key={project.id}
        />
      ))}
    </>
  )
}

export default ProjectsContent