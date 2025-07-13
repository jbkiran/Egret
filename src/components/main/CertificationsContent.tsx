import React, { useCallback, useState } from 'react'
import { useRecognitions } from '@/libs/supabase/hooks/portfolioSlice';
import CertificateSkeleton from '@/components/skeleton/CertificateSkeleton';
import Lightbox from '@/components/ui/Lightbox';
import { Certificate } from '@/types/interface';
import CertificationsCard from './CertificationsCard';

const CertificationsContent = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const { data: recognitions, isLoading, error } = useRecognitions();

  const recognitionsData = recognitions || [];

  // Memoized handlers
  const openLightbox = useCallback((index: number) => {
    if (index < 0 || index >= recognitionsData.length) return;
    setSelectedCert(recognitionsData[index]);
    setCurrentIndex(index);
  }, [recognitionsData]);

  const closeLightbox = useCallback(() => setSelectedCert(null), []);

  const navigate = useCallback((direction: 'prev' | 'next') => {
    if (recognitionsData.length === 0) return;

    setCurrentIndex(prevIndex => {
      const newIndex = direction === 'next' 
        ? (prevIndex + 1) % recognitionsData.length 
        : (prevIndex - 1 + recognitionsData.length) % recognitionsData.length;
      
      setSelectedCert(recognitionsData[newIndex]);
      return newIndex;
    });
  }, [recognitionsData]);

  if (isLoading) return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, index) => (
        <CertificateSkeleton key={index} />
      ))}
    </div>
  );

  if (error) return (
    <div className="text-center py-10">
      <p className="text-red-500 font-medium">Error loading certificates</p>
      <p className="text-[var(--color-secondary)] mt-2">
        {error.message || 'Please try again later'}
      </p>
    </div>
  );

  return (
    <>
      {/* Certificate Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recognitionsData?.map((certificate, index) => (
          <CertificationsCard 
            key={certificate.id} 
            certificate={certificate} 
            onClick={() => openLightbox(index)} 
          />
        ))}
      </div>

      {/* Lightbox */}
      {selectedCert && (
        <Lightbox 
          certificate={selectedCert}
          onClose={closeLightbox}
          onPrev={() => navigate('prev')}
          onNext={() => navigate('next')}
        />
      )}
    </>
  );
};

export default React.memo(CertificationsContent);