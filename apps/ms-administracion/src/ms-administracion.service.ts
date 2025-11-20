import { Injectable } from '@nestjs/common';

@Injectable()
export class MsAdministracionService {
  getHello(): string {
    return 'Hello World!';
  }
}
