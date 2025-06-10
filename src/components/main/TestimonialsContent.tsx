import React from 'react';
import TestimonialsCard from './TestimonialsCard';

const TestimonialsContent = () => {
  const testimonials = [
    {
      id: 1,
      name: "Renjith R",
      role: "Senior Software Engineer, QBurst",
      content: "Working with Kiran has been a true privilege. His ability for solving complex problems with clean, maintainable code across the front-end, back-end, and full-stack projects is consistently impressive. Kiran combines strong technical expertise with a user-centric mindset, delivering thoughtful solutions that elevate the end-user experience. He’s also a clear communicator and a dependable team player who consistently goes above and beyond to ensure project success. Any team would be fortunate to work with him",
    }
  ];

  return (
    <>
      <div className="grid grid-row-1">
        {testimonials.map((testimonial) => (
          <TestimonialsCard key={testimonial.id} testimonialData={testimonial}/>
        ))}
      </div>
    </>
  );
};

export default TestimonialsContent;