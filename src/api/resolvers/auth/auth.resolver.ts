import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Auth } from '../../../models/auth.model';
import { AuthService } from '../../../services/auth.service';
import { MagicLinkDto } from './dto/magic-link.dto';

@Resolver((of) => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation((returns) => MagicLinkDto)
  async sendMagicLink(@Args('email') email: string): Promise<MagicLinkDto> {
    return this.authService.sendMagicLink({ email });
  }

  @Query((returns) => Boolean)
  async dummyQuery(): Promise<boolean> {
    return true;
  }
}
