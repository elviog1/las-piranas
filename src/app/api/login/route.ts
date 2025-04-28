import { NextRequest, NextResponse } from "next/server";

export async function POST(req:NextRequest) {
  try {
    const body = await req.json();
    const { name, password } = body;

    if (!name || !password) {
      return NextResponse.json(
        {
          message: "Nombre y contraseña son obligatorias",
        },
        { status: 400 }
      );
    }
    const response = await fetch(`${process.env.NEXT_PUBLIC_URL_BACKEND}/auth/login`,{
        method:'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body:JSON.stringify({name,password})
    })
    const data = await response.json()
    if(!response.ok){
        return NextResponse.json(
            {message:data.message || "Error al iniciar sesion"},
            {status:response.status}
        )
    }

    const headers = new Headers()
    headers.append("Set-Cookie",
        `access_token=${data.access_token}; HttpOnly; Secure; Path=/; Max-Age=3600; SameSite=Strict`
    )
    return NextResponse.json({message:"Inicio de sesion exitoso"},{headers})
  } catch (error) {
    console.log(error);
    return NextResponse.json({message:"Ocurrio un error con el servidor"},{status:500})
  }
}
