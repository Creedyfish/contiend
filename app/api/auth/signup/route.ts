
import { NextRequest,NextResponse } from "next/server";
import signup from "@/controllers/userSignUp";

export async function POST(req:NextRequest,res:NextResponse){
  try {
    const data = await req.json()
    
    const response = await signup(data)

    return NextResponse.json(response)
  } catch (error) {
    return NextResponse.json({ status: 500, message: error })
  }

}

