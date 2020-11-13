import { Controller, Get } from '@nestjs/common';
import { T2.Example.ComService } from './t2.example.com.service';

@Controller()
export class T2.Example.ComController {
  constructor(private readonly t2ExampleComService: T2.Example.ComService) {}

  @Get()
  getHello(): string {
    return this.t2ExampleComService.getHello();
  }
}
