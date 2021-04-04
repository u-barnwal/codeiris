import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Next from 'next';
import { RenderModule } from 'nest-next';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './config/config';
import { ApiModule } from './api/api.module';
import { PrismaService } from './services/prisma.service';
import { DateScalar } from './common/scalar/date.scalar';

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({ dev: process.env.NODE_ENV !== 'production' }),
    ),
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    ApiModule,
  ],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
