import { Injectable, UnauthorizedException } from '@nestjs/common';
import { User } from '@prisma/client';
import { PrismaService } from './prisma.service';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { MagicLinkDto } from '../api/resolvers/auth/dto/magic-link.dto';
import { Auth } from '../models/auth.model';
import { Token } from '../models/token.model';
import { SecurityConfig } from '../config/config.interface';
import { EventBus } from '../event-bus/event-bus';
import { MagicLinkEvent } from '../event-bus/events';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
    private readonly jwtService: JwtService,
    private eventBus: EventBus,
  ) {}

  /**
   *
   * @param token - String
   */
  getUserFromToken(token: string): Promise<User> {
    const id = this.jwtService.decode(token)['userId'];
    return this.prisma.user.findUnique({ where: { id } });
  }

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
    this.eventBus.publish(new MagicLinkEvent(token, email));
    return { status: true };
  }

  async validateMagicLink({
    token,
  }): Promise<{ auth: Auth; isRegistered: boolean }> {
    const extractedToken = await this.validateMagicToken({ token });
    const user = await this.prisma.user.findUnique({
      where: { email: extractedToken.email },
    });

    // eslint-disable-next-line
    const currentUser = user ? user
      : await this.prisma.user.create({
          data: {
            email: extractedToken.email,
            firstName: '',
          },
        });
    const accessToken = this.generateAccessToken({ userId: currentUser.id });
    return {
      auth: {
        user: currentUser,
        accessToken: accessToken.accessToken,
      },
      isRegistered: !!user,
    };
  }

  /**
   *
   * @param payload - String
   * @private
   */
  private generateAccessToken(payload: { userId: string }): Token {
    const security = this.config.get<SecurityConfig>('security');
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: security.expiresIn,
    });
    return {
      accessToken,
    };
  }

  /**
   *
   * @param token - String
   * @private
   */
  private validateMagicToken({ token }): Promise<{ email: string }> {
    try {
      const validate: any = this.jwtService.decode(token);
      return validate;
    } catch (e) {
      throw new UnauthorizedException('Expired or Invalid Link!');
    }
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
