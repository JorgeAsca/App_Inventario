import { Injectable } from '@nestjs/common';

@Injectable()
export class MsVentasService {
  getHello(): string {
    return 'Hello World!';
  }
}
