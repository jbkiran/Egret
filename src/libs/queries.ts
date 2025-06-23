import { supabase } from "@/libs/supabase"

export async function getTestimonials() {

    const { data, error } = await supabase
    .from('testimonials')
    .select('id, testimonial, name, position, company')
    .order('id', { ascending: true })

  if (error) throw new Error(error.message)
    console.log('✅ Supabase data:', data);
  return data
}
