import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ConfigService } from '@nestjs/config';
import { GraphQLConfig } from '../config/config.interface';
import { DateScalar } from '../common/scalar/date.scalar';

@Module({
  imports: [
    GraphQLModule.forRootAsync({
      useFactory: async (configService: ConfigService) => {
        const gqlConfig = configService.get<GraphQLConfig>('graphql');
        return {
          autoSchemaFile: gqlConfig.schema,
          debug: gqlConfig.debug,
          playground: gqlConfig.playground,
          buildSchemaOptions: {
            numberScalarMode: 'integer',
          },
          context: ({ req }) => ({ req }),
        };
      },
      inject: [ConfigService],
    }),
  ],
  providers: [DateScalar],
})
export class ApiModule {}
