import { db } from "@/config/db";
import bcrypt from "bcrypt"
import { error } from "console";
import { NextResponse } from "next/server";

interface UserCredentials{
    email:string
    username:string
    password:string
}

export default async function signup({email,username,password}:UserCredentials) {
    try {
        const existingUser = await db.user.findUnique({ where: { email } });
  
        if (existingUser) {
            throw error;
        }
    // Hash the password before storing it in the database
    const hashedPassword = await bcrypt.hash(password, 10);
  
    // Create a new user
    const user = await db.user.create({
      data: {
        name: username,
        email: email,
        password: hashedPassword,
      },
    });
  
    // Create a new account for the user
    const account = await db.account.create({
      data: {
        userId: user.id,
        type: 'credentials',
        provider: 'credentials',
        providerAccountId: email
      },
    });
    return ({user, account});
    } catch (error) {
        return ("User Already Exists")
    }
}