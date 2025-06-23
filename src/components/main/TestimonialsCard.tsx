import { TestimonialsType } from '@/types/interface'
import React from 'react'
import { FaQuoteLeft } from 'react-icons/fa6'


const TestimonialsCard = ({testimonialData}:TestimonialsType) => {
  return (
    <div className="bg-[var(--color-card)] border border-[var(--color-border-color)] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex items-start gap-4">
        <div className="bg-[var(--color-accent-primary)] text-[var(--color-accent-text)] p-3 rounded-full">
          <FaQuoteLeft className="w-5 h-5" />
        </div>
        <div>
          <p className="text-[var(--color-primary)] italic mb-4">
              &ldquo;{testimonialData.testimonial}&rdquo;
          </p>
          <div className="border-t border-[var(--color-border-color)] pt-3">
            <div className="float-start">
              <h4 className="font-bold text-[var(--color-primary)]">{testimonialData.name}</h4>
              <p className="text-sm text-[var(--color-secondary)]">{testimonialData.position}, {testimonialData.company}</p>
            </div>
              
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsCard