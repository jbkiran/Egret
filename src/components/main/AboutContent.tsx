import React from "react";

const AboutContent = () => {
  return (
    <div className=" mx-auto text-left space-y-6">

        {/* Updated Description */}
        <p className="text-base md:text-lg text-[var(--color-primary)] leading-relaxed indent-6">
          With almost nine years of hands-on experience in the IT industry, I specialize in building powerful
          digital platforms that deliver exceptional user experiences and business value.
          I’ve worked across the full software lifecycle from ideation to launch, leading teams,
          mentoring developers, and driving innovation through thoughtful architecture and execution.
        </p>

        <p className="text-base md:text-lg text-[var(--color-primary)] leading-relaxed">
          Having played pivotal roles in product-first companies, I’ve consistently delivered results
          by aligning business goals with robust system design, process efficiency,
          and clean, scalable code. My work has supported large-scale platforms in health-tech and
          ed-tech, touching thousands of users and shaping how real-world problems are solved through technology.
        </p>

        {/* What Sets Me Apart */}
        <h3 className="text-2xl font-bold mt-8 text-[var(--color-secondary)]">
          What sets me apart:
        </h3>
        <ul className="list-disc pl-6 space-y-3 text-base md:text-lg text-[var(--color-primary)]">
          <li><strong className="text-[var(--color-accent)]">Strategic Thinker : </strong> Long-term vision, extensible and maintainable systems.</li>
          <li><strong className="text-[var(--color-accent)]">Team Leadership : </strong> Mentored cross-functional teams, encouraged ownership and technical excellence.</li>
          <li><strong className="text-[var(--color-accent)]">Product-Focused Mindset :</strong> Strong stakeholder collaboration and real-world solution focus.</li>
          <li><strong className="text-[var(--color-accent)]">Quality & Precision : </strong> Focus on code quality, performance, and detailed execution.</li>
          <li><strong className="text-[var(--color-accent)]">Growth-Oriented : </strong> Evolving into a Software Architect with deep system design skills.</li>
        </ul>

        <p className="text-base md:text-lg text-[var(--color-secondary)] leading-relaxed mt-6">
          Today, I’m looking to collaborate with forward-thinking teams and organizations
          that value innovation, craftsmanship, and long-term engineering excellence.
        </p>
    </div>
  );
};

export default AboutContent;
