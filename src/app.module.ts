import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppModule as AppFeatureModule } from './modules/app/app.module';
import { appConfig, databaseConfig } from './config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [appConfig, databaseConfig],
      envFilePath: '.env',
    }),
    AppFeatureModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
