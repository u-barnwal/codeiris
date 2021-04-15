import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import Next from 'next';
import { RenderModule } from 'nest-next';
import { ConfigModule, ConfigService } from '@nestjs/config';
import config from './config/config';
import { ApiModule } from './api/api.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ServicesModule } from './services/services.module';
import { MagicLinkGateway } from './api/gateway/magiclink.gateway';
import { EventBusModule } from './event-bus/event-bus.module';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath:
        process.env.NODE_ENV === 'production'
          ? join(__dirname, '../../..', 'public')
          : join(__dirname, '..', 'public'),
    }),
    ConfigModule.forRoot({ isGlobal: true, load: [config] }),
    ApiModule,
    RenderModule.forRootAsync(
      Next({ dev: process.env.NODE_ENV !== 'production' }),
    ),
    ServicesModule,
    EventBusModule,
  ],
  controllers: [AppController],
  providers: [AppService, MagicLinkGateway],
})
export class AppModule {}
