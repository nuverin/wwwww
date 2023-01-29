import { NextApiRequest, NextApiResponse } from "next";
import { getUser } from "~/server/controller";

export async function handler(req: NextApiRequest, res: NextApiResponse) {
    if(req.method === "POST"){
        await getUser(req, res)
    }
}