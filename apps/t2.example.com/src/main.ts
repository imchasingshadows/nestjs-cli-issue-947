import { NestFactory } from '@nestjs/core';
import { T2.Example.ComModule } from './t2.example.com.module';

async function bootstrap() {
  const app = await NestFactory.create(T2.Example.ComModule);
  await app.listen(3000);
}
bootstrap();
