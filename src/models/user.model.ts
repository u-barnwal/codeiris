import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { BaseModel } from './base.model';

export enum UserStatus {
  active = 'active',
  blocked = 'blocked',
  inactive = 'inactive',
}

registerEnumType(UserStatus, {
  name: 'UserStatus',
});

@ObjectType()
export class User extends BaseModel {
  @Field()
  email: string;
  @Field()
  firstName: string;
  @Field()
  middleName?: string;
  @Field()
  lastName?: string;
  @Field(() => UserStatus)
  status?: 'active' | 'blocked' | 'inactive';
  @Field()
  googleToken?: string;
  @Field()
  githubToken?: string;
}
