import React from 'react'
import { BiLogoJavascript, BiLogoMongodb, BiLogoTypescript } from 'react-icons/bi';
import SkillWrapper from '@/components/main/SkillCard';
import { SiCodeigniter, SiCss3, SiExpress, SiGraphql, SiHeadlessui, SiJquery, SiMariadb, SiMysql, SiPhp, SiRedux, SiShadcnui } from 'react-icons/si';
import { FaAws, FaGit, FaGithub, FaHtml5, FaJsSquare, FaReact } from 'react-icons/fa';
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri';
import { DiNodejs, DiRedis } from 'react-icons/di';
import { IoLogoLaravel } from 'react-icons/io5';
import { FaSquareGitlab } from 'react-icons/fa6';
import { MemcacheIcon } from '../ui/svg';

const languageSkills = [
  { icon: <FaJsSquare size={23} fill='#ffff00' stroke='white'/>, name: "JavaScript", level: 45 },
  { icon: <BiLogoTypescript size={30} fill='#115694' stroke='white'/>, name: "Typescript", level: 45 },
  { icon: <SiPhp size={40} fill='#7377ad' stroke='white'/>, name: "PHP", level: 45 },
];

const frontendSkills = [
  { icon: <FaReact  size={25} fill='#5ed3f3'/>, name: "React.js", level: 45 },
  { icon: <RiNextjsFill  size={30} />, name: "Next.js", level: 45 },
  { icon: <RiTailwindCssFill  size={30} fill='#16b4b3' />, name: "Tailwind CSS", level: 45 },
  { icon: <FaHtml5  size={20} fill='#df5126'/>, name: "HTML5", level: 45 },
  { icon: <SiCss3  size={20} fill='#264ee0'/>, name: "CSS3", level: 45 },
  { icon: <SiJquery  size={23} fill='#0865a7'/>, name: "jQuery", level: 45 },
];

const backendSkills = [
  { icon: <DiNodejs  size={50} fill='#74ad5e'/>, name: "Node.js", level: 45 },
  { icon: <SiExpress  size={30} />, name: "Express JS", level: 45 },
  { icon: <IoLogoLaravel  size={30} fill='#f72c1f'/>, name: "Laravel", level: 45 },
  { icon: <SiCodeigniter  size={20} fill='#e74122'/>, name: "CodeIgniter", level: 45 },
  { icon: <BiLogoJavascript size={20} />, name: "Slim", level: 45 },
]

const databaseSkills = [
  { icon: <SiMysql  size={40} fill='#124c5e'/>, name: "MySQL", level: 45 },
  { icon: <SiMariadb  size={30} fill='#be9469'/>, name: "MariaDB", level: 45 },
  { icon: <BiLogoMongodb  size={30} fill='#118d4d'/>, name: "MongoDB", level: 45 }
]

const stateSkills = [
  { icon: <SiRedux  size={20} fill='#7248b6'/>, name: "Redux", level: 45 },
  { icon: <SiRedux  size={20} fill='#7248b6'/>, name: "RTK Query", level: 45 }
]

const integrationSkills = [
  { icon: <BiLogoJavascript size={20} />, name: "RESTful APIs", level: 45 },
  { icon: <SiGraphql  size={30} fill='#ee0097'/>, name: "GraphQL", level: 45 },
  { icon: <BiLogoJavascript size={30} />, name: "Webhooks", level: 45 }
]

const cloudSkills = [
  { icon: <FaAws  size={30} />, name: "AWS (EC2, S3)", level: 45 }
]

const performanceSkills = [
  { icon: <DiRedis  size={30} fill='#c02e2a'/>, name: "Redis", level: 45 },
  { icon: <DiRedis  size={30} />, name: "Memcache", level: 45 },
]

const versionSkills = [
  { icon: <FaGit  size={20} fill='#e41c23'/>, name: "Git", level: 45 },
  { icon: <FaGithub  size={30} />, name: "GitHub", level: 45 },
  { icon: <FaSquareGitlab  size={30} fill='#ef8225'/>, name: "GitLab", level: 45 }
]

const librarySkills = [
  { icon: <SiShadcnui  size={20} />, name: "ShadCN/UI", level: 45 },
  { icon: <SiHeadlessui  size={20} fill='#65b6f6' />, name: "Headless UI", level: 45 }
]

const SkillsContent = () => {
  return (
    <>
      <SkillWrapper title={'Languages :'} skills={languageSkills} />
      <SkillWrapper title={'Frontend Technologies :'} skills={frontendSkills} />
      <SkillWrapper title={'Backend Frameworks :'} skills={backendSkills} />
      <SkillWrapper title={'Databases :'} skills={databaseSkills} />
      <SkillWrapper title={'State Management :'} skills={stateSkills} />
      <SkillWrapper title={'API & Integration :'} skills={integrationSkills} />
      <SkillWrapper title={'DevOps & Cloud :'} skills={cloudSkills} />
      <SkillWrapper title={'Caching & Performance :'} skills={performanceSkills} />
      <SkillWrapper title={'Version Control & Collaboration :'} skills={versionSkills} />
      <SkillWrapper title={'UI & Component Libraries :'} skills={librarySkills} />

    </>
  )
}

export default SkillsContent