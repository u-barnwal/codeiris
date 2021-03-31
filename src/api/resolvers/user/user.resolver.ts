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
<<<<<<< HEAD

  @Query(() => UserConnection)
  async getUsers(
    @UserEntity() user: User,
    @Args() { skip, after, before, first, last }: PaginationArgs,
    @Args({
      name: 'orderBy',
      type: () => UserOrder,
      nullable: true,
    })
    orderBy: UserOrder,
  ) {
    if (user.role === UserRole.user) {
      throw new UnauthorizedException(
        'Your are not authorized to access this function!',
      );
    }
    const userCursors = findManyCursorConnection(
      (args) =>
        this.prisma.user.findMany({
          orderBy: orderBy && { [orderBy.field]: orderBy.direction },
          ...args,
        }),
      () => this.prisma.user.count(),
      { first, last, before, after },
    );
    return userCursors;
  }
=======
>>>>>>> parent of 83664be (add pagination and order gql interfaces, implemented it for users)
}
