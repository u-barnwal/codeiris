import { Args, Parent, Query, ResolveField, Resolver } from '@nestjs/graphql';
import { Comment } from '../../../models/comment.model';
import { PrismaService } from '../../../services/prisma.service';
import { CommentConnection } from '../../../models/pagination/comment-connection.model';
import { PaginationArgs } from '../../../common/pagination/pagination.args';
import { findManyCursorConnection } from '@devoxa/prisma-relay-cursor-connection';
import { Ctx } from '../../decorators/request-context.decorator';
import { RequestContext } from '../../common/request-context';
import { CommentOrder } from '../../../models/input/comment-order.input';
import { User } from '../../../models/user.model';
import { Post } from '../../../models/post.model';

@Resolver(() => Comment)
export class CommentResolver {
  constructor(private readonly prisma: PrismaService) {}

  @Query(() => CommentConnection)
  async getMeComments(
    @Args() { skip, after, before, first, last }: PaginationArgs,
    @Ctx() context: RequestContext,
    @Args({
      name: 'orderBy',
      type: () => CommentOrder,
      nullable: true,
    })
    orderBy: CommentOrder,
  ) {
    const commentCursor = findManyCursorConnection(
      (args) =>
        this.prisma.comment.findMany({
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
      () => this.prisma.comment.count(),
      { first, last, before, after },
    );
    return commentCursor;
  }

  @Query(() => CommentConnection)
  async getComments(
    @Args() { skip, after, before, first, last }: PaginationArgs,
    @Args('postId', { nullable: true, type: () => String }) postId: string,
    @Args({
      name: 'orderBy',
      type: () => CommentOrder,
      nullable: true,
    })
    orderBy: CommentOrder,
  ) {
    const commentCursor = findManyCursorConnection(
      (args) =>
        this.prisma.comment.findMany({
          where: {
            post: {
              id: {
                contains: postId ? postId : '',
              },
            },
          },
          orderBy: orderBy && { [orderBy.field]: orderBy.direction },
          ...args,
        }),
      () => this.prisma.comment.count(),
      { first, last, before, after },
    );
    return commentCursor;
  }

  @ResolveField('children', (returns) => [Comment])
  async children(@Parent() comment: Comment) {
    return this.prisma.comment.findMany({
      where: { parent: { id: { equals: comment.id } } },
    });
  }

  @ResolveField('parent', (returns) => Comment)
  async parent(@Parent() comment: Comment) {
    return this.prisma.comment.findFirst({
      where: { children: { some: { id: comment.id } } },
    });
  }
}
