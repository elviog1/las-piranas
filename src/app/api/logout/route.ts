import { NextResponse } from "next/server";

export async function POST(){
    try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/auth/logout`,{
            method:'POST',
            credentials:"include"
        })
        if(!response.ok){
            return NextResponse.json({message:"Error al cerrar sesion"},{status:400})
        }
        const headers = new Headers()
        headers.append(
            "Set-Cookie",
      "access_token=; HttpOnly; Secure; Path=/; Max-Age=0; SameSite=Strict"
        )
        return NextResponse.json({message:"Session cerrada exitosamente"},{headers})
    } catch (error) {
        return NextResponse.json({message:"Error interno del servidor",error},{status:500})
    }
}