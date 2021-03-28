import { Query, Resolver } from '@nestjs/graphql';
import { User } from '../../../models/user.model';
import { UserEntity } from '../../decorators/user.decorator';
import { UseGuards } from '@nestjs/common';
import { GQLAuthGuard } from '../auth/guards/auth.guard';

@Resolver((of) => User)
@UseGuards(GQLAuthGuard)
export class UserResolver {
  @Query((returns) => User)
  async me(@UserEntity() user: User): Promise<User> {
    return user;
  }
}
