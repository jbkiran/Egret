import React from 'react'
import { Skeleton } from '@/components/ui/skeleton'

const ExperienceSkeleton = () => {
  return (
    <>
      <div className="relative max-w-5xl mx-auto px-4 py-12">
        <div className="absolute left-[7vh] h-full w-1 bg-[var(--color-secondary)] z-0" />
        <div className="space-y-12 relative">
         {Array.from({length:3}).map((_,index) => (
            <div className="relative flex items-start" key={index}>
              <div className="absolute left-[calc(3vh+6px)] mt-9 z-10">
                <div className="w-3 h-3 bg-[var(--color-accent-primary)] rounded-full ring-4 ring-[var(--color-secondary)]" />
              </div>
              <div className={`ml-[10vh] w-full max-w-xl text-left `}>
                <div className="bg-[var(--color-card)] p-5 rounded-lg shadow-md">
                  <Skeleton className="w-70 h-5 mb-2" />
                  <Skeleton className="block mb-2 text-sm font-normal leading-none w-50 h-4" />
                  <Skeleton className="w-70 h-3 mt-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ExperienceSkeleton