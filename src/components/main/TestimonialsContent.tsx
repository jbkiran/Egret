import React from 'react';
import TestimonialsCard from '@/components/main/TestimonialsCard';
import { useTestimonials } from '@/libs/supabase/hooks/portfolioSlice';
import TestimonialSkeleton from '@/components/skeleton/TestimonialSkeleton';

const TestimonialsContent = () => {
  const { data: testimonials, isLoading, error } = useTestimonials();

  if (isLoading) return (
    <div className="grid grid-row-1 gap-3">
      {Array.from({length:2}).map((_, index) => (
          <TestimonialSkeleton key={index}/>
      ))}
    </div>
  );
  if (error) return <p className="text-red-600">Error: {error.message}</p>;

  return (
    <>
      <div className="grid grid-row-1 gap-3">
        {testimonials?.map((testimonial) => (
          <TestimonialsCard key={testimonial.id} testimonialData={testimonial}/>
        ))}
      </div>
    </>
  );
};

export default TestimonialsContent;