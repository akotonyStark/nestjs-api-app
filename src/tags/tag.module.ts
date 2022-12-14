import { Module } from '@nestjs/common';
import { TagController } from './tag.controller';
import { TagService } from './tag.service';

@Module({
  imports: [],
  providers: [TagService],
  controllers: [TagController],
})
export class TagModule {}
