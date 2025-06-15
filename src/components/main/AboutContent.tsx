import React from "react";
import { Typewriter } from 'react-simple-typewriter';

const AboutContent = () => {
  return (
    <div className="mx-auto text-left space-y-6 max-w-3xl">
      
      <div className="text-left space-y-4">
        <h1 className="text-5xl font-bold leading-tight text-[var(--color-primary)]">
          <span className="text-[var(--color-secondary)]">Hi, I’m </span>
          <Typewriter words={['Kiran JB. ']} cursorStyle={"_"} typeSpeed={60} deleteSpeed={0} delaySpeed={1000} cursor/>
        </h1>
      </div>

      {/* Intro Paragraph */}
      <p className="text-base text-[var(--color-primary)] leading-relaxed indent-6 text-justify">
        A Full-Stack Developer based in Thiruvananthapuram, Kerala, India. I bring nearly nine years of experience in the software industry and hold a Bachelor’s degree in Computer Science and Engineering. I specialize in developing scalable, high-performance web applications that address real-world challenges.
      </p>

      {/* Career Highlights */}
      <p className="text-base text-[var(--color-primary)] leading-relaxed text-justify">
        Over the years, I’ve driven end‑to‑end product development, owning key modules, guiding teams, and delivering solutions that are both functional and thoughtfully engineered. My experience spans healthcare and ed‑tech platforms, with a focus on performance, maintainability, and user‑centered design. I take pride in writing clean, modular code and tackling challenges with a pragmatic, problem‑solving mindset. I also mentor peers, promote continuous learning, and foster a culture of ownership and accountability.
      </p>

      <h3 className="text-xl font-bold mt-8 text-[var(--color-secondary)]">
        What sets me apart :
      </h3>
      <ul className="list-disc pl-6 space-y-3 text-base text-[var(--color-secondary)] text-justify">
        <li>
          <strong className="text-[var(--color-accent)]">Strategic Thinking:</strong> Architecting systems with long‑term scalability, maintainability, and business alignment.
        </li>
        <li>
          <strong className="text-[var(--color-accent)]">Hands‑on Leadership:</strong> Leading cross‑functional teams, mentoring developers, and nurturing growth.
        </li>
        <li>
          <strong className="text-[var(--color-accent)]">Product‑Centric Focus:</strong> Bridging business goals and engineering execution to deliver real user value.
        </li>
        <li>
          <strong className="text-[var(--color-accent)]">Engineering Discipline:</strong> Emphasizing clean code, robust testing, and high standards in every line I write.
        </li>
      </ul>

      <p className="text-base text-[var(--color-primary)] leading-relaxed text-justify">
        Currently, I’m expanding my expertise in architecture and system design to deepen my full-stack capabilities and contribute at a strategic level.
      </p>
      
      <p className="text-base text-[var(--color-primary)] leading-relaxed mt-6">
        I’m eager to partner with forward‑thinking teams that value innovation, craftsmanship, and long‑term impact. Let’s build the next generation of powerful software together!
      </p>
    </div>
  );
};

export default AboutContent;
