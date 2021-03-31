import { Controller, Get, Param, Render, Res } from '@nestjs/common';
import { AuthService } from '../../../services/auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get(':token')
  @Render('magicLinkLanding')
  async getMagicLinkUser(
    @Param('token') token: string,
    @Res() response: Response,
  ) {
    const validate = await this.authService.validateMagicLink({ token });
    if (!validate.isRegistered) {
      response.send(validate.auth);
    } else {
      // TODO update url
      response.redirect('http://codeiris.com');
    }
  }
}
