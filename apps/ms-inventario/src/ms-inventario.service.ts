import { Injectable } from '@nestjs/common';

@Injectable()
export class MsInventarioService {
  getHello(): string {
    return 'Hello World!';
  }
}
