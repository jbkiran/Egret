import { SkillType } from '@/types/interface';
import React from 'react'
import { Icon } from '@/components/ui/Icon';

const SkillCard = ({title, skills} : SkillType) => {
  return (

    <div className="bg-[var(--color-card)] rounded-xl shadow-md p-4 text-[var(--color-primary)] w-full max-w-2xl mx-auto">
      <h3 className="text-lg font-semibold mb-4">{title}</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 w-full">
        {skills.map((tech) => (
          <div key={tech.id} className="flex items-center space-x-2">
            <Icon name={tech.icon.iconName} fill={tech.icon.fill} stroke={tech.icon.stroke} />
            <span>{tech.skill_name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SkillCard