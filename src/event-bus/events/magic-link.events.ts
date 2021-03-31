import { CodeirisEvents } from '../codeiris-events';

export class MagicLinkEvent extends CodeirisEvents {
  constructor(public token: string, public email: string) {
    super();
  }
}
