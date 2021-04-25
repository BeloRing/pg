import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { MessagesModule } from './messages/messages.module';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Module({
    imports: [
        GraphQLModule.forRoot({
            typePaths: ['./**/*.graphql'],
            resolverValidationOptions: {
                requireResolversForResolveType: 'ignore'
            },
            context: ({ req }) => ({
                ...req,
                prisma
            })
        }),
        MessagesModule,
    ],
})
export class AppModule {

}
