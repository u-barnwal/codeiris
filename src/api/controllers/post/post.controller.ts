import { PostType } from '.prisma/client';
import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Render,
} from '@nestjs/common';
import { PostService } from '../../../services/post.service';

@Controller('posts')
export class PostController {
  constructor(private readonly post: PostService) {}

  @Get(':type')
  @Render('home')
  async getPostList(@Param('type') postType: string) {
    if (
      postType === PostType.job ||
      postType === PostType.ask ||
      postType === PostType.link
    ) {
      let orderBy = {};
      switch (postType) {
        case PostType.job:
          orderBy = { updatedAt: 'desc' };
          break;
        case PostType.ask:
          orderBy = {
            votes: {
              count: 'desc',
            },
          };
          break;
        case PostType.link:
          orderBy = { updatedAt: 'desc' };
          break;
        default:
      }
      const include = {
        user: {
          select: {
            firstName: true,
            lastName: true,
            image: true,
          },
        },
      };
      const initialPosts = await this.post.getTopPost(
        postType,
        orderBy,
        include,
        10,
      );
      return {
        data: 'word',
        initialPosts: JSON.stringify(initialPosts),
      };
    }
    throw new BadRequestException('Invalid URL');
  }
}
