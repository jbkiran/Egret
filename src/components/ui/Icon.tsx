'use client';

import { memo } from 'react';
import * as Bi from 'react-icons/bi';
import * as Si from 'react-icons/si';
import * as Ri from 'react-icons/ri';
import * as Di from 'react-icons/di';
import * as I5 from 'react-icons/io5';
import * as Fa from 'react-icons/fa6';
import * as Tb from 'react-icons/tb';
import { IconProps } from '@/types/interface';
import * as IO from "react-icons/io";

// Combine all icons into one lookup object
const Icons = {
  ...Fa,
  ...Si,
  ...Ri,
  ...Bi,
  ...Di,
  ...I5,
  ...Tb,
  ...IO
};

export const Icon = memo(({ name, fill = 'currentColor', size = 30, className = '', stroke = 'currentColor' }: IconProps) => {
    
  const IconComponent = Icons[name as keyof typeof Icons];
  
  if (!IconComponent) {
    console.warn(`Icon "${name}" not found`);
    return <div style={{ width: size, height: size, backgroundColor: '#eee' }} className={className} />;
  }

  return <IconComponent fill={fill} size={size} className={className} stroke={stroke}/>;
});

Icon.displayName = 'Icon';