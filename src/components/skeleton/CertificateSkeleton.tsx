import React from 'react'
import { Skeleton } from '../ui/skeleton'

const CertificateSkeleton = () => {
  return (
    <>
      <div className="group relative">
          <div className="aspect-[4/3] relative border border-[var(--color-border)] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
            <Skeleton className='w-full h-full ' />
          </div>
          <div className="mt-3">
            <Skeleton className="font-medium text-[var(--color-primary)] line-clamp-1 w-full h-3" />
            <Skeleton className="text-sm text-[var(--color-secondary)] w-full h-2 mt-1" />
          </div>
        </div>
    </>
  )
}

export default CertificateSkeleton