import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from '@prisma/client'
import { findUniqueUser } from "~/services";

const prisma = new PrismaClient()
export default async(req: NextApiRequest, res: NextApiResponse) => {
    try {
        const {login : data}  = req.body;

        const user = await findUniqueUser({email: data.email})

        if(!user) throw new Error("Users not valid");

    } catch(err: any){
        res.status(200).json({error: {message: err.message}})
    }
    
}