import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async getTopPost(
    type: 'link' | 'job' | 'ask',
    orderBy = {},
    include = {},
    take = 10,
  ) {
    const topPosts = await this.prisma.post.findMany({
      take: take,
      where: {
        type: type,
      },
      orderBy: orderBy,
      include: include,
    });
    return topPosts;
  }
}
