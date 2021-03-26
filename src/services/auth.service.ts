import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from './prisma.service';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async validateUser({ userId }): Promise<User> {
    return this.prisma.user.findUnique({ where: { id: userId } });
  }
}
