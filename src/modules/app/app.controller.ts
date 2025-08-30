import { Controller, Get } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppService } from './app.service';
import { AppInfoDto } from './dto/app-info.dto';

@ApiTags('app')
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @ApiOperation({ summary: 'Get application info' })
  @ApiResponse({
    status: 200,
    description: 'Returns application information',
    type: AppInfoDto,
  })
  getAppInfo(): AppInfoDto {
    return this.appService.getAppInfo();
  }

  @Get('health')
  @ApiOperation({ summary: 'Health check' })
  @ApiResponse({
    status: 200,
    description: 'Application health status',
  })
  getHealth() {
    return this.appService.getHealth();
  }
}