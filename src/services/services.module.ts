import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { SecurityConfig } from '../config/config.interface';
import { EventBusModule } from '../event-bus/event-bus.module';
import { EmailService } from './email.service';
import { PostService } from './post.service';
import { AwsSdkModule } from 'nest-aws-sdk';
import { Credentials, S3, SES } from 'aws-sdk';
import { EmailGeneratorService } from './email-generator.service';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      useFactory: async (configService: ConfigService) => {
        const config = configService.get<SecurityConfig>('security');
        return {
          secret: configService.get<string>('JWT_SECRET'),
          signOptions: {
            expiresIn: config.expiresIn,
          },
        };
      },
      inject: [ConfigService],
    }),
    AwsSdkModule.forRootAsync({
      defaultServiceOptions: {
        useFactory: (configService: ConfigService) => {
          const awsKey = configService.get<string>('SES_KEY');
          const awsSecret = configService.get<string>('SES_SECRET');
          return {
            region: 'ap-southeast-1',
            credentials: new Credentials({
              accessKeyId: awsKey,
              secretAccessKey: awsSecret,
            }),
          };
        },
        imports: [ConfigService],
        inject: [ConfigService],
      },
      services: [SES, S3],
    }),
    EventBusModule,
  ],
  providers: [
    PrismaService,
    AuthService,
    EmailService,
    PostService,
    EmailGeneratorService,
  ],
  exports: [PrismaService, AuthService, EmailService, PostService],
})
export class ServicesModule {}
