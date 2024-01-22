import {connect} from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"

connect()

export async function POST(req:NextRequest){
    try {
        const reqBody = await req.json();
        const {email,password} = reqBody;
        console.log(reqBody);

        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({error:"User does not exist"},{status:400});
        }
        
        // check if password is correct
        const validPassword = await bcryptjs.compare(password,user.password);

        // create token data
        const tokenData = {
            id:user._id,
            username: user.name,
            email: user.email
        }

        // create token
        const token = await jwt.sign(tokenData,process.env.JWT_SECRET_KEY!, {expiresIn:"1h"})
        
        const response = NextResponse.json({
            message:"Login successful",
            success: true
        })

        response.cookies.set("token",token,{
            httpOnly:true
        })
        
        return response;
    } catch (error:any) {
        return NextResponse.json({error:error.message},{status:500});

        
    }
}