import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TagController } from './tags/tag.controller';
import { TagModule } from './tags/tag.module';
import { TagService } from './tags/tag.service';
import { UserController } from './user/user.controller';
import ormconfig from '../src/ormconfig';

@Module({
  imports: [TypeOrmModule.forRoot(ormconfig), TagModule],
  controllers: [AppController, UserController, TagController],
  providers: [AppService, TagService],
})
export class AppModule {}
