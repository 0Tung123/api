import { applyDecorators } from '@nestjs/common';
import { ApiResponse as SwaggerApiResponse } from '@nestjs/swagger';

export const ApiResponse = (options: {
  status: number;
  description: string;
  type?: any;
}) => {
  return applyDecorators(
    SwaggerApiResponse({
      status: options.status,
      description: options.description,
      type: options.type,
    }),
  );
};