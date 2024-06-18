import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// import { ConfigService } from '@nestjs/config';
import { Logger, ValidationPipe } from '@nestjs/common';
const logger = new Logger('Gateway Service');
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // const configService = new ConfigService();
  // const port = parseInt(configService.get('API_PORT', '3000'), 10);
  // const apiRoutePrefix = configService.get('API_ROUTE_PREFIX', 'api');

  app.useGlobalPipes(new ValidationPipe({ exceptionFactory: (errors) => errors, transform: true, whitelist: true }));

  // app.enable('trust proxy');

  // await app.listen(port, () => {
  //   logger.log(`Gateway Service is running at http://localhost:${port}/${apiRoutePrefix}`);
  // });

  // const natsToken = configService.get('NATS_TOKEN');
  // const natsHost = configService.get('NATS_HOST', 'localhost');
  // const natsPort = configService.get('NATS_PORT', '4222');

  // const natsMicroservice = app.connectMicroservice<MicroserviceOptions>({
  //   transport: Transport.NATS,
  //   options: {
  //     servers: [`nats://${natsHost}:${natsPort}`],
  //     token: natsToken,
  //   },
  // });

  // await app.startAllMicroservices();

  // await app.listen(port);
  // logger.debug(`API Server started at http://localhost:${port}/${apiRoutePrefix}`);
  app.useGlobalPipes(new ValidationPipe());
  const PORT = process.env.PORT || 3000;
  await app.listen(PORT, () => {
    console.log(`  🚀   Microservice is running at port ${PORT}`);
  });
}
bootstrap().catch((error) => {
  logger.error(error);
});
