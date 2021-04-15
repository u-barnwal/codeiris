import { Controller, Get, Redirect, Render } from '@nestjs/common';
import { PostService } from './services/post.service';

@Controller()
export class AppController {
  constructor(private readonly post: PostService) {}

  @Get()
  @Render('home')
  async home() {
    return {};
  }

  @Get('/login')
  @Render('login')
  async Login() {
    return {};
  }

  @Get('/save_post')
  @Render('save_post')
  async SavePost() {
    return {};
  }
}
