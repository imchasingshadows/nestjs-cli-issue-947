import { Test, TestingModule } from '@nestjs/testing';
import { T2.Example.ComController } from './t2.example.com.controller';
import { T2.Example.ComService } from './t2.example.com.service';

describe('T2.Example.ComController', () => {
  let t2ExampleComController: T2.Example.ComController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [T2.Example.ComController],
      providers: [T2.Example.ComService],
    }).compile();

    t2ExampleComController = app.get<T2.Example.ComController>(T2.Example.ComController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(t2ExampleComController.getHello()).toBe('Hello World!');
    });
  });
});
