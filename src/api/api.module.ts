import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigService } from '@nestjs/config';
import { GraphQLConfig } from '../config/config.interface';
import { DateScalar } from '../common/scalar/date.scalar';
import { AuthModule } from './resolvers/auth/auth.module';
import { AuthController } from './controllers/auth/auth.controller';
import { ServicesModule } from '../services/services.module';
import { UserModule } from './resolvers/user/user.module';
import { PostModule } from './resolvers/post/post.module';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        const gqlConfig = configService.get<GraphQLConfig>('graphql');
        return {
          autoSchemaFile: gqlConfig.schema,
          debug: gqlConfig.debug,
          playground: gqlConfig.playground,
          sortSchema: true,
          buildSchemaOptions: {
            numberScalarMode: 'integer',
          },
          context: ({ req }) => ({ req }),
        };
      },
      inject: [ConfigService],
    }),
    AuthModule,
    UserModule,
    PostModule,
    ServicesModule,
  ],
  controllers: [AuthController],
  providers: [
    /*DateScalar*/
  ],
})
export class ApiModule {}
