import { DocumentBuilder } from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('API Documentation')
  .setDescription('The API description')
  .setVersion('1.0')
  .addTag('app')
  .addBearerAuth()
  .build();