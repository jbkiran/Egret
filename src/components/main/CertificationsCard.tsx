import React, { useState, useCallback, memo } from 'react';
import Image from 'next/image';
import { CertificateProps } from '@/types/interface';
import { getPublicFileUrl } from '@/libs/supabase/getSupabaseUrls';

const CertificationsCard = memo(({ certificate, onClick }: CertificateProps ) => (
  <div className="group relative cursor-pointer" onClick={onClick}>
    <div className="aspect-[4/3] relative border border-[var(--color-border)] rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
      <Image
        src={getPublicFileUrl('certificates',certificate.imageUrl)}
        alt={`${certificate.title} certificate`}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        loading="lazy"
      />
    </div>
    <div className="mt-3">
      <h4 className="font-medium text-[var(--color-primary)] line-clamp-1">{certificate.title}</h4>
      <p className="text-sm text-[var(--color-secondary)]">
        {certificate.organisation} 
        {/* • {certificate.date_of_award} */}
      </p>
    </div>
  </div>
));

export default CertificationsCard;