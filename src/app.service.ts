import { Injectable } from '@nestjs/common';
import { createKernelAccountClient } from '@zerodev/sdk';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
