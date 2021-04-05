import { Injectable } from '@nestjs/common';
import { Post } from 'src/models/post.model';
import { PrismaService } from './prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async getTopPost(type: 'link' | 'job' | 'ask') {
    const topPosts = await this.prisma.post.findMany({
      where: {
        type: type,
      },
      orderBy: {
        updatedAt: 'desc',
      },
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
    return topPosts;
  }
}
