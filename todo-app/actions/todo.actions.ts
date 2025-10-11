'use server';

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTodosActions = async () => {
    return await prisma.post.findMany();
    // => Error handling
}

export const createTodoActions = async ({title, body} : {title: string, body: string}) => {
    await prisma.post.create({
        data: {
            title,
            body,
        }
    });
}

export const updateTodoActions = async () => {
    
}

export const deleteTodoActions = async () => {
    
}