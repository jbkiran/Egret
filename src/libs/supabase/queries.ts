import { supabase } from "@/libs/supabase/supabase"

export async function getTestimonials() {

    const { data, error } = await supabase
    .from('testimonials')
    .select('id, testimonial, name, position, company')
    .order('id', { ascending: true });

  if (error) throw new Error(error.message);
  return data
}

export async function getProjects() {

  const { data, error } = await supabase
  .from('projects')
  .select('id, project_title, description, project_link, company, tech_stack, responsibilities')
  .order('id', {ascending:true});

  if(error) throw new Error(error.message);

  return data;
}

export async function getExperiences(){

  const { data, error } = await supabase
  .from('experiences')
  .select('id, designation, company, location, from, to')
  .order('id',{ascending:false});

  if(error) throw new Error(error.message);

  return data;
}

export async function getSkills(){

  const { data, error } = await supabase
  .from('skills_category')
  .select(`
    id,
    category,
    skills:skills(
      id,
      skill_name,
      icon
    )
  `)
  .order('id', { ascending: true });

  if(error) throw new Error(error.message);

  return data;
}