
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { appRepository } from './app.repository';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService , appRepository],
})
export class AppModule {}






