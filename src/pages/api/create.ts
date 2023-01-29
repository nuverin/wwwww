import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { IUserCreate } from "~/typed";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    const prisma = new PrismaClient();
    const {name, email, password} = req.body;
    const user = await prisma.user.create({
        data: {
            name: name,
            email: email,
            password: password
        }
    })
    console.log(user)
   
}