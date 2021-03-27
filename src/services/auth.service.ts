import { Injectable } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from './prisma.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { MagicLinkDto } from "../api/resolvers/auth/dto/magic-link.dto";

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
    private readonly jwtService: JwtService,
  ) {}

  /**
   *
   * @param userId - String
   */
  async validateUser({ userId }): Promise<User> {
    return this.prisma.user.findUnique({ where: { id: userId } });
  }

  /**
   *
   * @param email - String
   */
  async sendMagicLink({ email }): Promise<MagicLinkDto> {
    const token = this.generateMagicToken({ email });
    // TODO emit send magic link event
    return { status: true };
  }

  /**
   *
   * @param payload - { email: String}
   * @private
   */
  private generateMagicToken(payload: { email: string }): string {
    const secret = this.config.get<string>('MAGIC_SECRET');
    const token = this.jwtService.sign(payload, {
      expiresIn: '10m',
    });
    return token;
  }
}
