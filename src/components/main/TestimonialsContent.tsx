import React from 'react';
import TestimonialsCard from './TestimonialsCard';

const TestimonialsContent = () => {
  const testimonials = [
    {
      id: 1,
      name: "Renjith R",
      role: "Senior Software Engineer, QBurst",
      content: "Working with Kiran has been a true privilege. His ability for solving complex problems with clean, maintainable code across the front-end, back-end, and full-stack projects is consistently impressive. Kiran combines strong technical expertise with a user-centric mindset, delivering thoughtful solutions that elevate the end-user experience. He’s also a clear communicator and a dependable team player who consistently goes above and beyond to ensure project success. Any team would be fortunate to work with him",
    },
    {
      id: 2,
      name: "Sourav R S",
      role: "Software Engineer, Cartedo",
      content: "I had the pleasure of working with Kiran on several projects, and I can confidently say that he is a remarkable talent. His creativity and attention to detail consistently elevate the quality of our work. Kiran approaches every challenge with a positive attitude and a collaborative spirit, making the entire process enjoyable and productive. His ability to think outside the box and deliver innovative solutions has been invaluable to our team. I highly recommend Kiran for any project; his dedication and skill will undoubtedly lead to outstanding results.",
    }
  ];

  return (
    <>
      <div className="grid grid-row-1 gap-3">
        {testimonials.map((testimonial) => (
          <TestimonialsCard key={testimonial.id} testimonialData={testimonial}/>
        ))}
      </div>
    </>
  );
};

export default TestimonialsContent;