'use server';

import { ITodo } from "@/interfaces";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getTodosActions = async () => {
    return await prisma.post.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });
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
    revalidatePath('/');
}

export const updateTodoActions = async ({id, title, body, completed}: ITodo) => {
    await prisma.post.update({
        where: {
            id,
        },
        data: {
            title,
            body,
            completed,
        }
    });
    revalidatePath('/');
}

export const deleteTodoActions = async ({ id }: {id: string}) => {
    await prisma.post.delete({
        where: {
            id,
        }
    });
    revalidatePath('/');
}