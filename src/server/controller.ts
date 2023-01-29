
import { PrismaClient } from "@prisma/client"
import { NextApiRequest, NextApiResponse } from "next"

const prisma = new PrismaClient()
export async function getUsers(req: NextApiRequest, res: NextApiResponse){
    try {
        const users = await prisma.user.findFirst({})
        if(!users) return res.status(404).json({error: "Data Not found"})
        res.status(200).json(users)
    } catch(err: any){
        res.status(404).json({err : "Error While Fetching Data"})
    }
}

export async function getUser(req: NextApiRequest, res: NextApiResponse) {
    try {
        const {userId}: any = req.query;

        if(userId){
            const user = await prisma.user.findUnique({
                where: {
                    id: userId
                }
            })
            res.status(200).json(user)
        }
        res.status(404).json({error: "User not Selected"})
    } catch (error) {
        res.status(404).json({error: "Users Not Found"})
    }
}