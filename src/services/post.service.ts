import { Injectable } from '@nestjs/common';
import { PrismaService } from './prisma.service';

@Injectable()
export class postService {
  constructor(private readonly prisma: PrismaService) {}
}
