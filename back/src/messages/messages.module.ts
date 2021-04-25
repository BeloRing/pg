import { Module } from '@nestjs/common';
import { MessagesResolver } from 'src/messages/messages.resolver';

@Module({
    providers: [MessagesResolver],
    exports: [MessagesResolver]
})
export class MessagesModule {}
