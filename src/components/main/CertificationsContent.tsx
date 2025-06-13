import React, { useState } from 'react';
import Image from 'next/image';
import { FaTimes, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

interface Certificate {
  id: number;
  imageUrl: string;
  title: string;
  organization: string;
  date: string;
  description?: string;
}

const CertificatesGallery = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const certificates: Certificate[] = [
    {
      id: 1,
      imageUrl: "/certificates/best-employee-2022.jpg",
      title: "Employee of the Year",
      organization: "Tech Innovations Inc.",
      date: "Dec 2022",
      description: "Awarded to top 1% of performers company-wide"
    },
    // Add your certificates here
  ];

  const openLightbox = (cert: Certificate, index: number) => {
    setSelectedCert(cert);
    setCurrentIndex(index);
  };

  const closeLightbox = () => setSelectedCert(null);

  const navigate = (direction: 'prev' | 'next') => {
    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % certificates.length 
      : (currentIndex - 1 + certificates.length) % certificates.length;
    setCurrentIndex(newIndex);
    setSelectedCert(certificates[newIndex]);
  };

  return (
    <>
      {/* Certificate Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <div 
            key={cert.id}
            className="group relative cursor-pointer"
            onClick={() => openLightbox(cert, index)}
          >
            <div className="aspect-[4/3] relative border border-[var(--color-border)] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
              <Image
                src={cert.imageUrl}
                alt={`${cert.title} certificate`}
                width={150}
                height={150}
                className="object-cover w-full"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
              />
            </div>
            <div className="mt-3">
              <h4 className="font-medium text-[var(--color-primary)]">{cert.title}</h4>
              <p className="text-sm text-[var(--color-secondary)]">
                {cert.organization} • {cert.date}
              </p>
            </div>
            
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedCert && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white text-2xl"
            aria-label="Close certificate view"
          >
            <FaTimes />
          </button>
          
          <button 
            onClick={() => navigate('prev')}
            className="absolute left-6 text-white text-2xl md:left-12"
            aria-label="Previous certificate"
          >
            <FaChevronLeft size={28} />
          </button>
          
          <div className="max-w-4xl w-full">
            <div className="relative aspect-[4/3] bg-white p-1 rounded-lg shadow-xl">
              <Image
                src={selectedCert.imageUrl}
                alt={`${selectedCert.title} certificate`}
                width={600}
                height={600}
                className="object-contain w-full"
                quality={100}
                priority
              />
            </div>
            <div className="mt-4 text-white text-center">
              <h3 className="text-xl font-bold">{selectedCert.title}</h3>
              <p className="text-[var(--color-secondary)]">
                {selectedCert.organization} • {selectedCert.date}
              </p>
              {selectedCert.description && (
                <p className="mt-2 max-w-2xl mx-auto">{selectedCert.description}</p>
              )}
            </div>
          </div>
          
          <button 
            onClick={() => navigate('next')}
            className="absolute right-6 text-white text-2xl md:right-12"
            aria-label="Next certificate"
          >
            <FaChevronRight size={28} />
          </button>
        </div>
      )}
    </>
  );
};

export default CertificatesGallery;