import React from 'react'

const ExperienceContent = () => {
  const items = [
    {
      "company": "Equipo Business Solutions Pvt Ltd",
      "location": "Trivandrum, Kerala",
      "designation": "Senior Software Engineer / Project Lead",
      "timeline": "Jan 2022 – Dec 2024",
    },
    {
      "company": "Mykademy Learning Pvt Ltd (Acquired by Olive Group, Dublin, Ireland)",
      "location": "Trivandrum, Kerala",
      "designation": "Senior Software Engineer / Team Lead",
      "timeline": "Jan 2021 – Dec 2021",
    },
    {
      "company": "Enfin Technologies India Pvt Ltd",
      "location": "Trivandrum, Kerala",
      "designation": "Software Engineer",
      "timeline": "Mar 2018 – Dec 2020",
    },
    {
      "company": "Quest Innovative Solutions Pvt Ltd",
      "location": "Ernakulam, Kerala",
      "designation": "Junior Software Engineer",
      "timeline": "Mar 2016 – Mar 2018",
    }
  ];

  return (
    <div className="relative max-w-5xl mx-auto px-4 py-12">
  {/* Timeline vertical line at fixed position */}
  <div className="absolute left-[7vh] h-full w-1 bg-[var(--color-secondary)] z-0" />

  <div className="space-y-20 relative">
    {items.map((item, index) => (
      <div key={index} className="relative flex items-start">
        <div className="absolute left-[calc(3vh+6px)] mt-9 z-10">
          <div className="w-3 h-3 bg-[var(--color-accent-primary)] rounded-full ring-4 ring-[var(--color-secondary)]" />
        </div>
        <div
          className={`ml-[10vh] w-full max-w-xl text-left `}
        >
          <div className="bg-[var(--color-card)] p-5 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-[var(--color-primary)]">{item.designation}</h3>
            <div className="block mb-2 text-sm font-normal leading-none text-[var(--color-secondary)]">
              {item.timeline}
            </div>
            <p className="text-base font-normal text-[var(--color-secondary)]">
              {item.company}
            </p>
          </div>
        </div>
      </div>
    ))}
  </div>
</div>


  );
}

export default ExperienceContent