import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { ServicesModule } from '../../../services/services.module';

@Module({
  imports: [ServicesModule],
  providers: [UserResolver],
})
export class UserModule {}
