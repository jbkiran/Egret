// app/components/AwardsGallery.tsx
'use client';

import { useState } from 'react';
import Image from 'next/image';

interface Award {
  title: string;
  company: string;
  date: string;
  description: string;
  image: string;
}
const awards: Award[] = [
  {
    title: 'Best Performer of Q2 2023',
    company: 'Equipo Business Solutions Pvt Ltd',
    date: 'Jun 2023',
    description:
      'Led delivery of patient-tracking MVP in under 3 months, earning 95% user satisfaction.',
    image: '/awards/q2-2023-certificate.jpg',
  },
  {
    title: 'Employee of the Quarter, Q4 2021',
    company: 'Mykademy Learning Pvt Ltd',
    date: 'Dec 2021',
    description:
      'Instrumental in architecting a multi-tenant LMS, boosting new client onboarding by 40%.',
    image: '/awards/q4-2021-certificate.jpg',
  },
  {
    title: 'Star Contributor Award, Sep 2019',
    company: 'Enfin Technologies India Pvt Ltd',
    date: 'Sep 2019',
    description:
      'Built core REST APIs supporting 500K+ concurrent users for a state-level LMS.',
    image: '/awards/sep-2019-certificate.jpg',
  },
];

export default function AwardsGallery() {
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  // Prevent lightbox click from triggering close when clicking the image
  const handlePreviewClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">
        🏆 Awards & Recognition
      </h2>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {awards.map((award, idx) => (
          <div
            key={idx}
            onClick={() => setPreviewImage(award.image)}
            className="cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-xl transition"
          >
            <div className="w-full h-60 relative">
              <Image
                src={award.image}
                alt={award.title}
                fill
                className="object-cover rounded-t-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">{award.title}</h3>
              <p className="text-sm text-gray-600">
                {award.company} — <span className="text-gray-500">{award.date}</span>
              </p>
              <p className="text-sm italic text-gray-700 mt-2">"{award.description}"</p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox-style preview */}
      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50"
        >
          <div
            onClick={handlePreviewClick}
            className="relative max-w-5xl w-full p-4"
          >
            <Image
              src={previewImage}
              alt="Certificate Preview"
              width={900}
              height={600}
              className="rounded-xl mx-auto max-h-[90vh] object-contain"
            />
            <button
              onClick={() => setPreviewImage(null)}
              className="absolute top-4 right-6 text-white text-4xl font-bold"
              aria-label="Close preview"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
