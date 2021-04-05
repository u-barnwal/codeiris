import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { Resolver, Query, Args } from '@nestjs/graphql';
import { PaginationArgs } from '../../../common/pagination/pagination.args';
import { PostOrder } from '../../../models/input/post-order.input';
import { PostConnection } from '../../../models/pagination/post-connection.model';
import { Post } from '../../../models/post.model';
import { PrismaService } from '../../../services/prisma.service';

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
}
