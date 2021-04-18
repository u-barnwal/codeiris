import { Controller, Get, Param, Post, Render, Req, Res } from '@nestjs/common';
import { AuthService } from '../../../services/auth.service';
import { Response } from 'express';
import { SessionService } from '../../../services/session.service';
import { ConfigService } from '@nestjs/config';
import { Auth } from '../../../models/auth.model';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly sessionService: SessionService,
    private readonly configService: ConfigService,
  ) {}

  @Get('validationError')
  @Render('magicLinkError')
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  async magicLinkError() {}

  @Get(':token')
  @Render('magicLinkValidating')
  async getMagicLinkUser(@Param('token') token: string) {
    const validate = await this.authService.validateMagicLink({ token });
    if (!validate.invalid) {
      return {
        invalid: false,
        auth: {
          accessToken: validate.auth.refreshToken,
          refreshToken: validate.auth.refreshToken,
        },
      };
    }
    return {
      invalid: true,
    };
  }

  @Post('/refresh-token')
  async refreshToken(@Req() req, @Res() res: Response): Promise<any> {
    const serverPath = this.configService.get<string>(
      'NEXT_PUBLIC_SERVER_PATH',
    );
    const reftoken = req.headers.refresh_token;
    if (reftoken !== undefined) {
      const sessioninfo = await this.sessionService.revalidateSession(reftoken);
      res.setHeader('Content-Type', 'application/json');
      res.setHeader('Cache-Control', 'no-cache');
      res.setHeader('Access-Control-Allow-Origin', serverPath);
      res.setHeader('Access-Control-Allow-Credentials', 'true');
      if (sessioninfo) {
        res.send({
          tokens: {
            jwt_token: sessioninfo?.authToken,
            refresh_token: sessioninfo?.refreshToken,
            invalid: false,
          },
        });
      } else {
        res.send({
          tokens: {
            jwt_token: undefined,
            refresh_token: undefined,
            invalid: true,
          },
        });
      }
    } else {
      res.send({
        tokens: {
          jwt_token: undefined,
          refresh_token: undefined,
          invalid: true,
        },
      });
    }
  }
}
