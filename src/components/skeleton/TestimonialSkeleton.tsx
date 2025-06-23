import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'
import { FaQuoteLeft } from 'react-icons/fa'

const TestimonialSkeleton = () => {
  return (
    <div className="bg-[var(--color-card)] border border-[var(--color-border-color)] rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
        <div className="flex items-start gap-4">
            <div className="bg-[var(--color-accent-primary)] p-3 rounded-full">
                <FaQuoteLeft className="w-5 h-5" />
            </div>
            <div className='w-full'>
                <Skeleton className='w-full h-3 mb-1' />
                <Skeleton className='w-full h-3 mb-1' />
                <Skeleton className='w-full h-3 mb-1' />
                <Skeleton className='w-full h-3 mb-1' />
                <Skeleton className='w-full h-3 mb-1' />
                <Skeleton className='w-full h-3 mb-4' />
            <div className="border-t pt-3">
                <div className="float-start">
                    <Skeleton className='w-40 h-5 mb-2' />
                    <Skeleton className='w-52 h-4 mb-2' />
                </div> 
            </div>
            </div>
        </div>
        </div>
  )
}

export default TestimonialSkeleton