'use server';

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTodosActions = async () => {
    return await prisma.post.findMany();
    // => Error handling
}

export const createTodoActions = async ({title, body, completed} : {title: string, body: string, completed: boolean}) => {
    await prisma.post.create({
        data: {
            title,
            body,
            completed
        }
    });
}

export const updateTodoActions = async () => {
    
}

export const deleteTodoActions = async ({ id }: {id: string}) => {
    await prisma.post.delete({
        where: {
            id,
        }
    });
}