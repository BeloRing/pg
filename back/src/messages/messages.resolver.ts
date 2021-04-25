import { Args, Context, Mutation, Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class MessagesResolver {

    @Query('messages')
    getMessages(@Context() context) {
        const allMessages = context.prisma.messages.findMany();
        return allMessages;
    }

    @Mutation()
    createMessage(@Args('description') description: string, @Context() context) {
        const messageCreated = context.prisma.messages.create({
            data: {description},
        });
        return messageCreated;
    }
}
