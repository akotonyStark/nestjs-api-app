import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
  findAll(): string[] {
    return ['ReactJS', 'NodeJS', 'NestJS', 'From Service'];
  }
}
