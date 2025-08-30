import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppInfoDto } from './dto/app-info.dto';

@Injectable()
export class AppService {
  constructor(private configService: ConfigService) {}

  getAppInfo(): AppInfoDto {
    return {
      name: this.configService.get<string>('app.name') || 'API',
      version: '1.0.0',
      environment: this.configService.get<string>('app.nodeEnv') || 'development',
      message: 'API is running successfully!',
    };
  }

  getHealth() {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
    };
  }
}