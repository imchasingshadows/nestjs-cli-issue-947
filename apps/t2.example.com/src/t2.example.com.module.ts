import { Module } from '@nestjs/common';
import { T2.Example.ComController } from './t2.example.com.controller';
import { T2.Example.ComService } from './t2.example.com.service';

@Module({
  imports: [],
  controllers: [T2.Example.ComController],
  providers: [T2.Example.ComService],
})
export class T2.Example.ComModule {}
