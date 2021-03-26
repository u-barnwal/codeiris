import { Resolver } from '@nestjs/graphql';
import { Auth } from '../../../models/auth.model';

@Resolver((of) => Auth)
export class AuthResolver {}
