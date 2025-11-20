import { Injectable } from '@nestjs/common';

@Injectable()
export class MsTercerosService {
  getHello(): string {
    return 'Hello World!';
  }
}
