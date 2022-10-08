import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
// @ts-ignore
import { SwaggerModule } from '@nestjs/swagger';
import { contract } from '@nx-test-rest/contracts';
// @ts-ignore
import { generateOpenApi } from '@ts-rest/open-api';
import cors = require('cors');
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = 3333;

  app.use(cors());

  SwaggerModule.setup(
    'api',
    app,
    generateOpenApi(contract, {
      info: { title: 'Api', version: '0.1' },
    })
  );

  await app.listen(port);
  Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();
