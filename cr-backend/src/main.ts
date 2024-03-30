import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); // ! <<<===== เป็นการเปิดฟังก์ชั่น cors API จากกที่อื่น
  await app.listen(3888);
}
bootstrap();
