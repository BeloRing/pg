import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Resolver()
export class MessagesResolver {

    @Query('messages')
    async getMessages() {
        const allMessages = await prisma.messages.findMany();
        return allMessages;
    }

    @Mutation()
    async createMessage(@Args('description') description: string) {
        const id = this.messagesAdd.length;
        const newMessage = { id, description };
        this.messagesAdd.push(newMessage);
        const messageCreated = await prisma.messages.create({
            data: newMessage,
        });
        return messageCreated;
    }
}
