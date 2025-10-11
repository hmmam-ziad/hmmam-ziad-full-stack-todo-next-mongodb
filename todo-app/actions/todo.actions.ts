'use server';

import { ITodo } from "@/interfaces";
import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

const prisma = new PrismaClient();

export const getTodosActions = async ({userId}: {userId: string | null})=> {
    return await prisma.todo.findMany({
        where: {
            user_id: userId as string,
        },
        orderBy: {
            createdAt: "desc",
        },
    });
    // => Error handling
}

export const createTodoActions = async ({title, body, completed, userId} : {title: string, body: string, completed: boolean, userId: string | null}) => {
    await prisma.todo.create({
        data: {
            title,
            body,
            completed,
            user_id: userId as string,
        }
    });
    revalidatePath('/');
}

export const updateTodoActions = async ({id, title, body, completed}: ITodo) => {
    await prisma.todo.update({
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
    await prisma.todo.delete({
        where: {
            id,
        }
    });
    revalidatePath('/');
}