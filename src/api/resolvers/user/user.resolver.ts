import { Args, Query, Resolver } from '@nestjs/graphql';
import { User, UserRole } from '../../../models/user.model';
import { UserEntity } from '../../decorators/user.decorator';
import { UnauthorizedException, UseGuards } from '@nestjs/common';
import { GQLAuthGuard } from '../auth/guards/auth.guard';
import { UserConnection } from '../../../models/pagination/user-connection.model';
import { PaginationArgs } from '../../../common/pagination/pagination.args';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { PrismaService } from '../../../services/prisma.service';
import { UserOrder } from '../../../models/input/user-order.input';

@Resolver((of) => User)
@UseGuards(GQLAuthGuard)
export class UserResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query((returns) => User)
  async me(@UserEntity() user: User): Promise<User> {
    return user;
  }
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
}
