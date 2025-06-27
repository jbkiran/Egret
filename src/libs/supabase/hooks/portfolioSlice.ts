import { useQuery } from "@tanstack/react-query";
import { getProjects, getTestimonials } from "@/libs/supabase/queries";



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