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
  status: UserStatus;
  googleToken?: string;
  githubToken?: string;

  get getFullName() {
    return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
  }

  get getName() {
    return this.firstName + ' ' + this.lastName;
  }
}
