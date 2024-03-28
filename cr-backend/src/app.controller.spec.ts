// ! app.controller.spec.ts ใช้สำหรับทดสอบหน่วย (unit testing) ของ app.controller.ts ซึ่งเป็นคลาส Controller หลักของแอปพลิเคชัน NestJS

// TODO: การนำเข้าโมดูล
import { Test, TestingModule } from '@nestjs/testing'; // * Test และ TestingModule: นำเข้าจาก @nestjs/testing เพื่อเตรียมพร้อมสำหรับทดสอบ
import { AppController } from './app.controller'; // * นำเข้าจาก ./app.controller เพื่อทดสอบ Controller
import { AppService } from './app.service'; // * นำเข้าคลาส Service ที่ AppController พึ่งพา (Dependency Injection) จาก ./app.service

// TODO: การกำหนดชุดการทดสอบ
describe('AppController', () => {
  // * กำหนดชุดการทดสอบสำหรับ AppController โดยใช้ describe
  let appController: AppController;

  // TODO: การเตรียมพร้อมสำหรับการทดสอบ
  beforeEach(async () => {
    // * ฟังก์ชันนี้จะรันก่อนการทดสอบแต่ละกรณี
    const app: TestingModule = await Test.createTestingModule({
      // * สร้างโมดูล TestingModule สำหรับการทดสอบ
      controllers: [AppController], // * ระบุคลาส Controller ที่ต้องการทดสอบ
      providers: [AppService], // *ระบุคลาส Service ที่ AppController พึ่งพา
    }).compile();

    appController = app.get<AppController>(AppController); // * ดึงอินสแตนซ์ของ AppController จากโมดูล TestingModule
  });

  // TODO: การกำหนดชุดการทดสอบ
  describe('root', () => {
    // * กำหนดกรณีทดสอบสำหรับ getHello method ของ AppController
    it('should return', () => {
      // * กำหนดกรณีทดสอบ
      expect(appController.getHello()).toBe('Hello World!'); // * ตรวจสอบว่าผลลัพธ์ของ getHello method เป็น Hello World!
    });
  });
});
