import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppModule as AppFeatureModule } from './modules/app/app.module';
import { RedisModule } from './modules/redis/redis.module';
import { appConfig, databaseConfig, typeormConfig, redisConfig } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig, typeormConfig, redisConfig],
      envFilePath: '.env',
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => {
        const typeormConfig = configService.get('typeorm');
        if (!typeormConfig) {
          throw new Error('TypeORM configuration is missing');
        }
        return typeormConfig;
      },
    }),
    RedisModule,
    AppFeatureModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
