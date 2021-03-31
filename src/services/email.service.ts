import { Injectable, OnModuleInit } from '@nestjs/common';
import { EventBus } from '../event-bus/event-bus';
import { MagicLinkEvent } from '../event-bus/events';
import { merge } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Injectable()
export class EmailService implements OnModuleInit {
  constructor(private eventBus: EventBus) {}

  onModuleInit() {
    const magicLinkEvent$ = this.eventBus.ofType(MagicLinkEvent);
    merge(magicLinkEvent$)
      .pipe(debounceTime(50))
      .subscribe(async (event: MagicLinkEvent) => {
        this.sendMagicLink({ email: event.email, token: event.token });
      });
  }

  async sendMagicLink({ token, email }) {
    // TODO implementation
    console.log(token, email);
  }
}
