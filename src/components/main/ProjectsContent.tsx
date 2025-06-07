import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectsContent = () => {
  return (
    <>
      <ProjectCard
        title="Tody – Patient Engagement Platform"
        company="Digicare (Client Project via Equipo)"
        timeline="Feb 2024 – Dec 2024"
        summary="A bilingual (English/Spanish) digital health tracking and patient education platform targeted at users in Puerto Rico. Designed to personalize healthcare journeys, increase engagement, and foster proactive self-care."
        responsibilities={[
          "Led a distributed dev team to architect and deliver a mobile-first web app integrated with real-time EMR data.",
          "Built secure WebSocket-based chat modules enabling live provider-patient interaction.",
          "Developed a health education engine that delivers condition-specific content to users in a personalized, trackable manner.",
          "Oversaw API integration and React/Next.js frontend development, ensuring mobile-first UX parity with the Flutter mobile app.",
          "Ensured healthcare data privacy and multilingual support throughout the platform"
        ]}
        techStack={[
          "Next.js", "TypeScript", "React.js", "Tailwind CSS", "RTK Query", "WebSocket", "Python Django"
        ]}
        link="https://www.todysalud.com/"
      />
      <ProjectCard
        title="Equipo Health"
        company="Equipo Business Solutions PVT LTD"
        timeline="Dec 2021 – Jan 2024"
        summary="A next-generation integrated care delivery platform designed to bridge gaps across fragmented EMR systems, unify patient records, and empower healthcare providers with AI-driven preventive insights."
        responsibilities={[
          "Spearheaded the development of mission-critical frontend and backend modules across a scalable care delivery system.",
          "Architected and optimized HIPAA-compliant data flows enabling seamless clinical documentation, reporting, and cross-system referrals.",
          "Led the integration of third-party EMRs into a centralized dashboard with support for intelligent referral workflows.",
          "Improved patient data visibility, real-time health tracking, and predictive care features via AI-enhanced modules.",
          "Ensured end-to-end compliance and security at scale across multi-regional healthcare data infrastructures."
        ]}
        techStack={[
          "PHP", "JavaScript", "PHP Symfony", "Python Django", "MySQL", "jQuery", "Bootstrap", "HTML", "CSS"
        ]}
        link="https://www.equipo.io/"
      />
      <ProjectCard
        title="Mykademy LMS"
        company="Enfin / Mykademy (Olive Group)"
        timeline="2018 – 2021 (Enfin), 2021 – 2022 (Mykademy)"
        summary="A robust, multi-tenant Learning Management System enabling educators and institutions to launch personalized e-learning platforms with content authoring, live sessions, and analytics."
        responsibilities={[
          "Core team contributor from product inception through acquisition by Olive Group.",
          "Designed and implemented reusable components and dashboards for student tracking, tutor analytics, and platform-wide reporting.",
          "Delivered performance-optimized content delivery features, supporting video/audio/live classes and recorded sessions.",
          "Played a key role in building multi-tenant architecture to support both B2B and B2C customers with isolated learning spaces.",
          "Led backend logic for quiz systems, course structure management, and secure access control across multiple user types."
        ]}
        techStack={[
          "PHP", "CodeIgniter", "React.js", "Node.js", "MariaDB", "jQuery", "Bootstrap", "JavaScript", "HTML", "CSS"
        ]}
        link="https://mykademy.com/"
      />
      <ProjectCard
        title="Skill Delivery Platform of Kerala (SDPK)"
        company="Enfin Technologies in collaboration with ICTAK"
        timeline="2017 (6 months)"
        summary="A state-sponsored Learning Management System (LMS) developed for the Government of Kerala to deliver high-quality, technology-enabled skill training to students across 150 engineering colleges. The platform aimed to bridge academia-industry gaps via centralized course delivery, live sessions, and high-capacity student engagement."
        responsibilities={[
        "Contributed as a core full-stack developer, involved from inception to deployment in a high-stakes, time-constrained environment.",
        "Built and optimized core modules including the course creation system, supporting rich content types: videos, audio lectures, live streaming, recorded sessions, quizzes, documents, and assignments.",
        "Implemented both frontend and backend logic to ensure seamless delivery across institutions, with code quality enforced via daily peer reviews.",
        "Contributed to code efficiency, reusability, and architectural stability for scaling to 50,000 concurrent student users."
        ]}
        techStack={[
          "PHP", "CodeIgniter", "React.js", "Node.js", "MariaDB", "jQuery", "Bootstrap", "JavaScript", "HTML", "CSS"
        ]}
        link=""
      />
    </>
  )
}

export default ProjectsContent