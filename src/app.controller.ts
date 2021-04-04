import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service';
import { Post } from './models/post.model';
import { PrismaService } from './services/prisma.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly prismaService: PrismaService,
  ) {}

  @Get()
  @Render('home')
  async home() {
    const initialPosts = await this.prismaService.post.findMany({
      include: {
        user: {
          select: {
            firstName: true,
            lastName: true,
            image: true,
          },
        },
      },
    });
    return {
      data: 'world',
      initialPosts: initialPosts.map((ele) => ({
        ...ele,
        createdAt: ele.createdAt.toString(),
        updatedAt: ele.updatedAt.toString(),
      })),
    };
  }
}
