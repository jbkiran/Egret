import { SkillItemType } from '@/types/interface';
import React from 'react'

const SkillItem = ({icon: Icon, name, level} : SkillItemType) => {
    return (
    <div className="flex items-center gap-4">
      <Icon size={40} />
      <div className="font-medium dark:text-white w-full">
        <div>{name}</div>
        <div className="flex items-center gap-2 mb-4">
          <div className="w-full bg-gray-200 rounded-full h-1.5 dark:bg-gray-700">
            <div
              className="bg-blue-600 h-1.5 rounded-full"
              style={{ width: `${level}%` }}
            ></div>
          </div>
          <span className="text-xs text-white-700 dark:text-gray-300">{level}%</span>
        </div>
      </div>
    </div>
  );
}

export default SkillItem