
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { appRepository } from './app.repository';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigMySql } from './config/db';


@Module({
  imports: [  TypeOrmModule.forRootAsync({ useClass: ConfigMySql })  ],
  controllers: [AppController],
  providers: [AppService , appRepository],
})
export class AppModule {}






