import { ApiProperty } from '@nestjs/swagger';

export class AppInfoDto {
  @ApiProperty({
    description: 'Application name',
    example: 'API',
  })
  name: string;

  @ApiProperty({
    description: 'Application version',
    example: '1.0.0',
  })
  version: string;

  @ApiProperty({
    description: 'Current environment',
    example: 'development',
  })
  environment: string;

  @ApiProperty({
    description: 'Welcome message',
    example: 'API is running successfully!',
  })
  message: string;
}