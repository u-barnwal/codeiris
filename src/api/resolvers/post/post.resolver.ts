import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { Resolver, Query, Args, ResolveField, Parent } from '@nestjs/graphql';
import { User } from '../../../models/user.model';
import { PaginationArgs } from '../../../common/pagination/pagination.args';
import { PostOrder } from '../../../models/input/post-order.input';
import { PostConnection } from '../../../models/pagination/post-connection.model';
import { Post } from '../../../models/post.model';
import { PrismaService } from '../../../services/prisma.service';
import { Ctx } from '../../decorators/request-context.decorator';
import { RequestContext } from '../../common/request-context';

@Resolver((of) => Post)
export class PostResolver {
  constructor(private readonly prisma: PrismaService) {}
  @Query((returns) => PostConnection)
  async getPosts(
    @Args() { skip, after, before, first, last }: PaginationArgs,
    @Args({
      name: 'orderBy',
      type: () => PostOrder,
      nullable: true,
    })
    orderBy: PostOrder,
  ) {
    const postCursors = findManyCursorConnection(
      (args) =>
        this.prisma.post.findMany({
          orderBy: orderBy && { [orderBy.field]: orderBy.direction },
          ...args,
        }),
      () => this.prisma.post.count(),
      { first, last, before, after },
    );
    return postCursors;
  }

  @Query((returns) => PostConnection)
  async getMePosts(
    @Args() { skip, after, before, first, last }: PaginationArgs,
    @Ctx() context: RequestContext,
    @Args({
      name: 'orderBy',
      type: () => PostOrder,
      nullable: true,
    })
    orderBy: PostOrder,
  ) {
    const postCursors = findManyCursorConnection(
      (args) =>
        this.prisma.post.findMany({
          where: {
            user: {
              id: {
                equals: context.user.id,
              },
            },
          },
          orderBy: orderBy && { [orderBy.field]: orderBy.direction },
          ...args,
        }),
      () => this.prisma.post.count(),
      { first, last, before, after },
    );
    return postCursors;
  }

  @ResolveField('user', (returns) => User)
  async user(@Parent() post: Post) {
    const { userId } = post;
    return this.prisma.user.findUnique({ where: { id: userId } });
  }
}
