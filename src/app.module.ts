import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Next from 'next';
import { RenderModule } from 'nest-next';
import { ConfigModule } from '@nestjs/config';
import config from './config/config';

@Module({
  imports: [
    RenderModule.forRootAsync(
      Next({ dev: process.env.NODE_ENV !== 'production' }),
    ),
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
