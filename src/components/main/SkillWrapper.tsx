import { SkillItemType } from '@/types/interface';
import React from 'react'
import SkillItem from '@/components/main/SkillItem';

interface SkillWrapperSection{
    title: string;
    skills: SkillItemType[]
}
const SkillWrapper = ({title, skills} : SkillWrapperSection) => {
  return (
    <div>
        <h2 className="mb-2 text-lg font-semibold text-[--color-primary]">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
            {skills.map((skill, id) => (
                <SkillItem key={id} {...skill} />
            ))}
        </div>
    </div>
  );
}

export default SkillWrapper