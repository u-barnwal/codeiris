import { Injectable, OnModuleInit } from '@nestjs/common';
import { EventBus } from '../event-bus/event-bus';

@Injectable()
export class NotificationService implements OnModuleInit {
  constructor(private eventBus: EventBus) {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onModuleInit(): any {}
}
