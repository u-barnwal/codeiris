import { CodeirisEvents } from '../codeiris-events';
import { Comment } from '../../models/comment.model';

export class CreateCommentsEvents extends CodeirisEvents {
  constructor(public post: Comment) {
    super();
  }
}
