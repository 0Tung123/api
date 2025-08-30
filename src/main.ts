import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { swaggerConfig } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const configService = app.get(ConfigService);
  const port = configService.get('app.port');

  // Enable CORS
  app.enableCors();

  // Global validation pipe
  app.useGlobalPipes(new ValidationPipe());

  // API prefix
  app.setGlobalPrefix('api');

  // Swagger documentation
  const document = SwaggerModule.createDocument(app, swaggerConfig);
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(port);
  console.log(`🚀 Application is running on: http://localhost:${port}/api`);
  console.log(`📚 Swagger documentation: http://localhost:${port}/api/docs`);
}
bootstrap();
