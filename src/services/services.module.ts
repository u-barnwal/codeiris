import { Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { SecurityConfig } from '../config/config.interface';

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
  ],
  providers: [PrismaService, AuthService],
  exports: [PrismaService, AuthService],
})
export class ServicesModule {}
