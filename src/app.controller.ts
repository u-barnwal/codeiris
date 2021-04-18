import { Controller, Get, Redirect, Render } from '@nestjs/common';
import { PostService } from './services/post.service';

@Controller()
export class AppController {
  constructor(private readonly post: PostService) {}

  @Get()
  @Redirect('posts/ask')
  redirect() {}

  @Get('/login')
  @Render('login')
  async Login() {
    return {};
  }
}
