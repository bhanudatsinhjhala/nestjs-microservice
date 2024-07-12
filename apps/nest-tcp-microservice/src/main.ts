import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const logger = new Logger('NEST_TCP_MICROSERVICE');
  const app = await NestFactory.create(AppModule);

  await app.startAllMicroservices();
  await app.listen(process.env.APP_PORT, async () => {
    logger.log(`Server is running on ~ ${await app.getUrl()}`);
  });
}
bootstrap();
