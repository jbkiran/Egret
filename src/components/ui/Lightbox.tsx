import { FaTimes } from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import Image from 'next/image';
import { LightboxProps } from "@/types/interface";
import { getPublicFileUrl } from "@/libs/supabase/getSupabaseUrls";

const Lightbox = ({ certificate, onClose, onPrev, onNext}: LightboxProps) => (

    <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
        <button 
        onClick={onClose}
        className="absolute top-6 right-6 text-white text-2xl"
        aria-label="Close certificate view"
        >
            <FaTimes />
        </button>
    
        <button 
        onClick={onPrev}
        className="absolute left-6 text-white text-2xl md:left-12"
        aria-label="Previous certificate"
        >
            <FaChevronLeft size={28} />
        </button>
    
        <div className="max-w-4xl w-full">
            <div className="relative aspect-[4/3] bg-white p-1 rounded-lg shadow-xl">
                <Image
                src={getPublicFileUrl('certificates',certificate.imageUrl)}
                alt={`${certificate.title} certificate`}
                fill
                className="object-contain"
                quality={90}
                priority
                />
            </div>
            <div className="mt-4 text-white text-center">
                <h3 className="text-xl font-bold text-center">{certificate.title}</h3>
                <p className="text-[var(--color-secondary)]">
                {certificate.organisation} 
                {/* • {certificate.date_of_award} */}
                </p>
                {certificate.description && (
                <p className="mt-2 max-w-2xl mx-auto">{certificate.description}</p>
                )}
            </div>
        </div>
    
        <button 
        onClick={onNext}
        className="absolute right-6 text-white text-2xl md:right-12"
        aria-label="Next certificate"
        >
            <FaChevronRight size={28} />
        </button>
    </div>
);

export default Lightbox;