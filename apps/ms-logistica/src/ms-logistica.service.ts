import { Injectable } from '@nestjs/common';

@Injectable()
export class MsLogisticaService {
  getHello(): string {
    return 'Hello World!';
  }
}
