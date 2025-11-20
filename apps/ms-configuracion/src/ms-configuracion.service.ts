import { Injectable } from '@nestjs/common';

@Injectable()
export class MsConfiguracionService {
  getHello(): string {
    return 'Hello World!';
  }
}
