import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const SkillSkeleton = () => {
  return (
    <>
      <div className="bg-[var(--color-card)] rounded-xl shadow-md p-4 text-[var(--color-primary)] w-full max-w-2xl mx-auto">
        <Skeleton className="w-2/4 h-5 mb-4" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
          {Array.from({length:4}).map((_, index) => (
            <div key={index} className="flex items-center space-x-2">
              <Skeleton className='w-28 h-4' />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default SkillSkeleton