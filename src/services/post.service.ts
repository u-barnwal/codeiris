import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class PostService {
  constructor(private readonly prisma: PrismaService) {}

  async getSinglePost(id: string) {
    return this.prisma.post.findUnique({
      where: { id },
      include: {
        user: true,
        tags: true,
        flag: true,
        _count: {
          select: {
            comments: true,
          },
        },
      },
    });
  }

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

  // async addPost(type: 'link' | 'job' | 'ask', title, body, url) {
  //   const result = await this.prisma.post.create({
  //     data: {
  //       type,
  //       title,
  //       body,
  //       // TODO: generate random slug
  //       slug: '',
  //       url,
  //     },
  //   });
  //   return result;
  // }
}
