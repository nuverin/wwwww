import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";

const prisma = new PrismaClient()
export default async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const {userId} = req.body;
        const user = await prisma.user.update({
            where: {
                id: userId
            },
            data: {
             id: userId   
            }
        })
    }
}