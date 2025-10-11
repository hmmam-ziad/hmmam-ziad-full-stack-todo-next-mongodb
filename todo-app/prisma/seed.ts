import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {

    // await prisma.todo.createMany({
    //     data: Array.from({ length: 25 }, () => {
    //         return {
    //             title: faker.lorem.sentence(),
    //             body: faker.lorem.paragraph(),
    //             completed: faker.datatype.boolean(),
    //             user_Id: ""
    //         };
    //     })
    // });

    // await prisma.user.createMany({
    //         data: Array.from({ length: 25 }, () => {
    //             return {
    //                 email: faker.internet.email(),
    //                 name: faker.internet.username(),
    //                 prfileImage: "https://avatars.githubusercontent.com/u/44652353?v=4",
    //                 address: {
    //                     street: faker.location.street(),
    //                     city: faker.location.city(),
    //                     state: faker.location.state(),
    //                     zipCode: faker.location.zipCode(),
    //                 },
    //             };
    //         })
    //     });
}

main()
    .catch(async e => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });