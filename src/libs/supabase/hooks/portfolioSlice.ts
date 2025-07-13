import { useQuery } from "@tanstack/react-query";
import { getExperiences, getProjects, getRecognitions, getSkills, getTestimonials } from "@/libs/supabase/queries";



export function useTestimonials() {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: getTestimonials,
    staleTime: 60 * 1000, // 1 minute
    retry: 1,
    refetchOnWindowFocus: false,
  });
}

export function useProjects(){
  return useQuery({
    queryKey: ['projects'],
    queryFn: getProjects,
    staleTime: 60 * 1000,
    retry: 1,
    refetchOnWindowFocus: false
  });
}

export function useExperience(){
  return useQuery({
    queryKey : ['experiences'],
    queryFn : getExperiences,
    staleTime: 60 * 1000,
    retry : 1,
    refetchOnWindowFocus: false
  });
}

export function useSkills(){
  return useQuery({
    queryKey : ['skills'],
    queryFn : getSkills,
    staleTime: 60 * 1000,
    retry : 1,
    refetchOnWindowFocus: false
  });
}

export function useRecognitions(){
  return useQuery({
    queryKey : ['recognitions'],
    queryFn : getRecognitions,
    staleTime: 60 * 1000,
    retry : 1,
    refetchOnWindowFocus: false
  });
}