# API Documentation

## Cấu trúc dự án

```
src/
├── common/                 # Các utilities, decorators, pipes chung
│   ├── decorators/        # Custom decorators
│   ├── guards/           # Authentication/Authorization guards
│   └── pipes/            # Validation pipes
├── config/               # Cấu hình ứng dụng
│   ├── app.config.ts     # Cấu hình app
│   ├── database.config.ts # Cấu hình database
│   └── swagger.config.ts # Cấu hình Swagger
├── modules/              # Các feature modules
│   └── app/             # App module chính
│       ├── dto/         # Data Transfer Objects
│       ├── app.controller.ts
│       ├── app.service.ts
│       └── app.module.ts
├── app.module.ts        # Root module
└── main.ts             # Entry point
```

## Cài đặt

```bash
# Cài đặt dependencies
npm install

# Copy file môi trường
cp .env.example .env

# Chỉnh sửa file .env theo cấu hình của bạn
```

## Chạy ứng dụng

```bash
# Development
npm run start:dev

# Production
npm run build
npm run start:prod
```

## API Documentation

Sau khi chạy ứng dụng, truy cập:
- API: http://localhost:3002/api
- Swagger Documentation: http://localhost:3002/api/docs

## Endpoints

### GET /api
Thông tin ứng dụng

### GET /api/health  
Kiểm tra trạng thái ứng dụng

## Cấu hình môi trường

Tất cả cấu hình nhạy cảm được lưu trong file `.env`:
- Không commit file `.env` lên git
- Sử dụng `.env.example` làm template
- Cấu hình production qua environment variables

## Thêm module mới

1. Tạo thư mục trong `src/modules/`
2. Tạo controller, service, module files
3. Thêm DTOs trong thư mục `dto/`
4. Import module vào `app.module.ts`

## Validation

Sử dụng `class-validator` và `class-transformer`:
- Tạo DTOs với decorators validation
- Global validation pipe đã được cấu hình

## Swagger

- Sử dụng `@ApiTags()` cho controller
- Sử dụng `@ApiOperation()` cho endpoints  
- Sử dụng `@ApiResponse()` để define response
- DTOs tự động generate schema