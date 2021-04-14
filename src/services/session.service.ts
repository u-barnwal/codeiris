import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import uniqid from 'uniqid';
import ms from 'ms';
import { PrismaService } from './prisma.service';
import { Session } from '../models/session.model';
import { User } from '../models/user.model';
import { Token } from '../models/token.model';
import { SecurityConfig } from '../config/config.interface';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SessionService {
  private readonly sessionDurationInMs: number;

  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: PrismaService,
    private readonly config: ConfigService,
  ) {
    this.sessionDurationInMs = ms('1d');
  }

  async getSessionData(sessionToken: string): Promise<Session> {
    const session = await this.prisma.session.findUnique({
      where: { token: sessionToken },
      include: { user: true },
    });
    return session;
  }

  async createMagicSession(payload): Promise<Session> {
    const sessionToken = await this.generateSessionToken();
    const token = this.jwtService.sign(
      { session: sessionToken, ...payload },
      {
        expiresIn: '10m',
      },
    );
    return this.prisma.session.create({
      data: {
        token: sessionToken,
        authToken: token,
        type: 'MAGIC',
        expires: await this.getExpiryDate(ms('10m')),
      },
      include: {
        user: true,
      },
    });
  }

  async authenticate(user: User) {
    return this.createNewAuthenticatedSession({ user });
  }

  async createNewAuthenticatedSession({ user }): Promise<Session> {
    const token = await this.generateSessionToken();
    const session = await this.prisma.session.create({
      data: {
        token,
        user: {
          connect: {
            id: user.id,
          },
        },
        expires: this.getExpiryDate(this.sessionDurationInMs),
        invalidate: false,
        type: 'AUTHENTICATED',
      },
    });
    const authToken = await this.generateAccessToken({
      userId: user.id,
      session: session.id,
    });
    return this.prisma.session.update({
      where: { id: session.id },
      data: {
        authToken: authToken.accessToken,
        refreshToken: authToken.refreshToken,
      },
      include: {
        user: true,
      },
    });
  }

  async createAnonymousSession(): Promise<Session> {
    const token = await this.generateSessionToken();
    const anonymousSessionDurationInMs = ms('1y');
    return await this.prisma.session.create({
      data: {
        token,
        expires: this.getExpiryDate(anonymousSessionDurationInMs),
        invalidate: false,
        type: 'ANONYMOUS',
      },
      include: {
        user: true,
      },
    });
  }

  async revalidateSession(sessionToken: string): Promise<Session | undefined> {
    const session = await this.prisma.session.findUnique({
      where: { token: sessionToken },
      include: {
        user: true,
      },
    });
    if (session && session.expires > new Date() && !session.invalidate) {
      const { user }: any = this.jwtService.decode(session.authToken);
      await this.updateSessionExpiry(session);
      const newTokens = await this.generateAccessToken({
        userId: user,
        session: session.id,
      });
      return this.prisma.session.update({
        where: {
          id: session.id,
        },
        data: {
          authToken: newTokens.accessToken,
          refreshToken: newTokens.refreshToken,
        },
        include: {
          user: true,
        },
      });
    } else {
      return undefined;
    }
  }

  async validateSession(token: string): Promise<Session> {
    const { session }: any = this.jwtService.decode(token);
    const existSession = await this.prisma.session.findFirst({
      where: {
        token,
        invalidate: false,
      },
      include: {
        user: true,
      },
    });
    if (existSession && existSession.expires > new Date()) {
      await this.updateSessionExpiry(existSession);
      return existSession;
    }
  }

  private async updateSessionExpiry(session) {
    const now = new Date().getTime();
    if (session.expires.getTime() - now < this.sessionDurationInMs / 2) {
      await this.prisma.session.update({
        where: { id: session.id },
        data: { expires: this.getExpiryDate(this.sessionDurationInMs) },
      });
    }
  }

  private generateSessionToken(): Promise<string> {
    return new Promise<string>((resolve) => resolve(uniqid('session-')));
  }

  private getExpiryDate(timeToExpireInMs: number): Date {
    return new Date(Date.now() + timeToExpireInMs);
  }

  /**
   *
   * @param payload - String
   * @private
   */
  generateAccessToken(payload: { userId: string; session: string }): Token {
    const security = this.config.get<SecurityConfig>('security');
    const accessToken = this.jwtService.sign(payload, {
      expiresIn: security.expiresIn,
    });
    const refreshToken = this.jwtService.sign(
      { session: payload.session },
      { expiresIn: '30d' },
    );
    return {
      accessToken,
      refreshToken,
    };
  }
}
