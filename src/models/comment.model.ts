import { Field, ObjectType } from '@nestjs/graphql';
import { BaseModel } from './base.model';
import { Post } from './post.model';
import { User } from './user.model';

@ObjectType()
export class Comment extends BaseModel {
  @Field()
  body: string;
  @Field(() => [Comment])
  children: Comment[];
  @Field(() => Comment)
  parent: Comment;
  @Field()
  parentId: string;
  @Field(() => User)
  user: User;
  @Field()
  userId: string;
  @Field(() => Post)
  post: Post;
  @Field()
  postId: string;
}
