import fastify from "fastify";
import { PrismaClient } from "@prisma/client";
import { fdatasync } from "node:fs";
import { defineDmmfProperty } from "@prisma/client/runtime/library";

export const app = fastify();

const prisma = new PrismaClient();

prisma.user.create({
    data: {
        name: "matheus juan",
        email: 'matheus123@gmail.com'
        
    }
})

