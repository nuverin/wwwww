import { Prisma, PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient()
export const findUniqueUser = async(
    where: Prisma.UserWhereUniqueInput,
    select? :Prisma.UserSelect,
) => {
    return (await prisma.user.findUnique({
        where,
        select
    })) as User
}