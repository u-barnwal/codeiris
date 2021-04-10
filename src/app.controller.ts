import { Controller, Get, Redirect } from '@nestjs/common';
import { PostService } from './services/post.service';

@Controller()
export class AppController {
  constructor(private readonly post: PostService) {}

  @Get()
  @Redirect('/posts/ask')
  async home() {
    return;
  }
}
