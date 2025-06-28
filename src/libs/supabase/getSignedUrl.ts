import { supabase } from "@/libs/supabase/supabase";
import { NextResponse } from "next/server";

export async function getSignedUrl(path:string){
    const {data, error} = await supabase.storage
    .from('egret')
    .createSignedUrl(path, 60);

    if(error){
        return NextResponse.json({error:error.message}, {status:500});
    }

    return NextResponse.json({url:data.signedUrl});

}
