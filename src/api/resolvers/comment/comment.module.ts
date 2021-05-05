import { Module } from '@nestjs/common';
import { CommentResolver } from './comment.resolver';
import { ServicesModule } from '../../../services/services.module';
import { EventBusModule } from '../../../event-bus/event-bus.module';

@Module({
  imports: [ServicesModule, EventBusModule],
  providers: [CommentResolver],
})
export class CommentModule {}
