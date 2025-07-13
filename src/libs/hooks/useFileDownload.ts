import { useCallback } from "react";
import { getPublicFileUrl } from "@/libs/supabase/getSupabaseUrls";
import { DownloadType } from "@/types/interface";

export const useFileDownload = () => {

    const download = useCallback(async (options : DownloadType) => {
        const { bucket, fileName, onSuccess, onError} = options;

        try{
            const fileUrl   = await getPublicFileUrl(bucket, fileName);
            const response  = await fetch(fileUrl);

            if(!response.ok){
                throw new Error(`Failed to fetch : ${response.status}`);
            }

            const blob      = await response.blob();
            const blobUrl   = URL.createObjectURL(blob);

            const link      = document.createElement('a');
            link.href       = blobUrl;
            link.download   = fileName.split('/').pop() || 'download';

            document.body.appendChild(link);
            link.click();

            requestAnimationFrame(() => {
                document.body.removeChild(link);
                URL.revokeObjectURL(blobUrl);
            });

            onSuccess?.();
            return true;

        }
        catch(error){
            console.error('Download failed:', error);
            onError?.(error instanceof Error ? error : new Error('Download failed'));
            return false;
        }
    }, []);
    
    return download;
}
