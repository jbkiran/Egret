import React from 'react'
import { BiLogoJavascript, BiLogoPhp, BiLogoTypescript } from 'react-icons/bi';
import SkillWrapper from '@/components/main/SkillWrapper';

const languageSkills = [
  { icon: BiLogoJavascript, name: "JavaScript", level: 45 },
  { icon: BiLogoTypescript, name: "Typescript", level: 45 },
  { icon: BiLogoPhp, name: "PHP", level: 45 },
];

const frontendSkills = [
  { icon: BiLogoJavascript, name: "React.js", level: 45 },
  { icon: BiLogoTypescript, name: "Next.js", level: 45 },
  { icon: BiLogoPhp, name: "Tailwind CSS", level: 45 },
  { icon: BiLogoPhp, name: "HTML5", level: 45 },
  { icon: BiLogoPhp, name: "CSS3", level: 45 },
  { icon: BiLogoPhp, name: "jQuery", level: 45 },
];

const backendSkills = [
  { icon: BiLogoPhp, name: "Node.js", level: 45 },
  { icon: BiLogoPhp, name: "Express JS", level: 45 },
  { icon: BiLogoPhp, name: "Laravel", level: 45 },
  { icon: BiLogoPhp, name: "CodeIgniter", level: 45 },
  { icon: BiLogoPhp, name: "Slim", level: 45 },
]

const databaseSkills = [
  { icon: BiLogoPhp, name: "MySQL", level: 45 },
  { icon: BiLogoPhp, name: "MariaDB", level: 45 },
  { icon: BiLogoPhp, name: "MongoDB", level: 45 }
]

const stateSkills = [
  { icon: BiLogoPhp, name: "Redux", level: 45 },
  { icon: BiLogoPhp, name: "RTK Query", level: 45 }
]

const integrationSkills = [
  { icon: BiLogoPhp, name: "RESTful APIs", level: 45 },
  { icon: BiLogoPhp, name: "GraphQL", level: 45 },
  { icon: BiLogoPhp, name: "Webhooks", level: 45 }
]

const cloudSkills = [
  { icon: BiLogoPhp, name: "AWS (EC2, S3)", level: 45 }
]

const performanceSkills = [
  { icon: BiLogoPhp, name: "Redis", level: 45 },
  { icon: BiLogoPhp, name: "Memcached", level: 45 }
]

const versionSkills = [
  { icon: BiLogoPhp, name: "Git", level: 45 },
  { icon: BiLogoPhp, name: "GitHub", level: 45 },
  { icon: BiLogoPhp, name: "GitLab", level: 45 }
]

const librarySkills = [
  { icon: BiLogoPhp, name: "ShadCN/UI", level: 45 },
  { icon: BiLogoPhp, name: "Headless UI", level: 45 }
]

const SkillsContent = () => {
  return (
    <>
      <SkillWrapper title={'Languages :'} skills={languageSkills} />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
      <SkillWrapper title={'Frontend Technologies :'} skills={frontendSkills} />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
      <SkillWrapper title={'Backend Frameworks :'} skills={backendSkills} />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
      <SkillWrapper title={'Databases :'} skills={databaseSkills} />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
      <SkillWrapper title={'State Management :'} skills={stateSkills} />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
      <SkillWrapper title={'API & Integration :'} skills={integrationSkills} />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
      <SkillWrapper title={'DevOps & Cloud :'} skills={cloudSkills} />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
      <SkillWrapper title={'Caching & Performance :'} skills={performanceSkills} />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
      <SkillWrapper title={'Version Control & Collaboration :'} skills={versionSkills} />
      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"/>
      <SkillWrapper title={'UI & Component Libraries :'} skills={librarySkills} />

    </>
  )
}

export default SkillsContent