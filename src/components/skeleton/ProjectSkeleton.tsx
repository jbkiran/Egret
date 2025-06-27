import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const ProjectSkeleton = () => {
  return (
    <div className="bg-[var(--color-card)] shadow-lg rounded-2xl p-6 mb-8 border border-[var(--color-secondary)] hover:shadow-2xl transition-shadow duration-300">
        <div className="flex items-start justify-between mb-4">
            <div>
            <Skeleton className="w-60 h-6" />
            <Skeleton className="w-50 h-4 mt-2" />
            </div>
            <span className="text-sm font-medium underline ">
            <Skeleton className='w-[150px] h-4' />
            </span>
        </div>
        <ul className="list-disc pl-5 mb-4 space-y-1">
            <Skeleton className='w-full h-3' />
            <Skeleton className='w-full h-3' />
            <Skeleton className='w-full h-3' />
            <Skeleton className='w-full h-3' />
            <Skeleton className='w-full h-3' />
        </ul>
        <div className="flex flex-wrap gap-2 mb-4">
            <Skeleton className="w-20 h-4 px-2 py-1 rounded-full" />
            <Skeleton className="w-20 h-4 px-2 py-1 rounded-full" />
            <Skeleton className="w-20 h-4 px-2 py-1 rounded-full" />
            <Skeleton className="w-20 h-4 px-2 py-1 rounded-full" />
            <Skeleton className="w-20 h-4 px-2 py-1 rounded-full" />
        </div>
    </div>
  )
}

export default ProjectSkeleton