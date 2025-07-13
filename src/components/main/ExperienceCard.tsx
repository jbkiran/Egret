import { dateToMonthYear } from '@/libs/utils';
import { ExperienceType } from '@/types/interface';
import React from 'react'

const ExperienceCard = ({experience} : ExperienceType) => {

  const timeline = dateToMonthYear(experience.from) +" - "+ dateToMonthYear(experience.to);
  return (
    <>
      <div className="relative flex items-start">
        <div className="absolute left-[calc(3vh+6px)] mt-9 z-10">
          <div className="w-3 h-3 bg-[var(--color-accent-primary)] rounded-full ring-4 ring-[var(--color-secondary)]" />
        </div>
        <div className={`ml-[10vh] w-full max-w-xl text-left `}>
          <div className="bg-[var(--color-card)] p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-[var(--color-primary)]">{experience.designation}</h3>
            <div className="block mb-2 text-sm font-normal leading-none text-[var(--color-secondary)]">
              {timeline}
            </div>
            <p className="text-base font-normal text-[var(--color-secondary)]">
              {experience.company}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ExperienceCard;