import { ObjectType, registerEnumType } from '@nestjs/graphql';
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
  email: string;
  firstName: string;
  middleName?: string;
  lastName?: string;
  status?: 'active' | 'blocked' | 'inactive';
  googleToken?: string;
  githubToken?: string;
}
