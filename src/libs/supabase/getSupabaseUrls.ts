export function getPublicFileUrl(folder: string, filename: string) {
  return `${process.env.NEXT_PUBLIC_SUPABASE_URL}/storage/v1/object/public/egret/${folder}/${filename}`;
}
