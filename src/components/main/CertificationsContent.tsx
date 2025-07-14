import React, { useCallback, useState, useMemo } from 'react';
import { useRecognitions } from '@/libs/supabase/hooks/portfolioSlice';
import CertificateSkeleton from '@/components/skeleton/CertificateSkeleton';
import Lightbox from '@/components/ui/Lightbox';
import { Certificate } from '@/types/interface';
import CertificationsCard from './CertificationsCard';

const CertificationsContent = () => {
  const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
  const { data: recognitions, isLoading, error } = useRecognitions();

  // Memoize the recognitions data to prevent unnecessary recalculations
  const recognitionsData = useMemo(() => recognitions ?? [], [recognitions]);

  // Memoized handlers with stable dependencies
  const openLightbox = useCallback((certificate: Certificate) => {
    setSelectedCert(certificate);
  }, []);

  const closeLightbox = useCallback(() => setSelectedCert(null), []);

  const navigate = useCallback((direction: 'prev' | 'next') => {
    if (!selectedCert || recognitionsData.length === 0) return;

    const currentIndex = recognitionsData.findIndex(c => c.id === selectedCert.id);
    if (currentIndex === -1) return;

    const newIndex = direction === 'next' 
      ? (currentIndex + 1) % recognitionsData.length 
      : (currentIndex - 1 + recognitionsData.length) % recognitionsData.length;
    
    setSelectedCert(recognitionsData[newIndex]);
  }, [selectedCert, recognitionsData]);

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, index) => (
          <CertificateSkeleton key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500 font-medium">Error loading certificates</p>
        <p className="text-[var(--color-secondary)] mt-2">
          {error.message || 'Please try again later'}
        </p>
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recognitionsData.map((certificate) => (
          <CertificationsCard 
            key={certificate.id} 
            certificate={certificate} 
            onClick={() => openLightbox(certificate)} 
          />
        ))}
      </div>

      {selectedCert && (
        <Lightbox 
          certificate={selectedCert}
          // totalItems={recognitionsData.length}
          onClose={closeLightbox}
          onPrev={() => navigate('prev')}
          onNext={() => navigate('next')}
        />
      )}
    </>
  );
};

export default React.memo(CertificationsContent);