import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { AuthService } from './auth.service';

@Module({
  providers: [PrismaService, AuthService],
  exports: [PrismaService, AuthService],
})
export class ServicesModule {}
