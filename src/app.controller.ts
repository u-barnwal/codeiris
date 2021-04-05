import {
  BadRequestException,
  Controller,
  Get,
  Param,
  Render,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Post } from './models/post.model';
import { PostService } from './services/post.service';
import { PrismaService } from './services/prisma.service';

@Controller()
export class AppController {
  constructor(private readonly post: PostService) {}

  @Get('/post/:postType')
  @Render('home')
  async homeWithParams(@Param('postType') postType: string) {
    if (postType === 'link' || postType === 'job' || postType === 'ask') {
      const initialPosts = await this.post.getTopPost(postType);
      return {
        data: 'world',
        initialPosts: JSON.stringify(initialPosts),
      };
    }
    throw new BadRequestException('Invalid URL');
  }

  @Get()
  @Render('home')
  async home() {
    const initialPosts = await this.post.getTopPost('ask');
    return {
      data: 'world',
      initialPosts: JSON.stringify(initialPosts),
    };
  }
}
