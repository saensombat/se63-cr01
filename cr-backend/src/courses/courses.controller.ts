import { Controller, Get } from '@nestjs/common';


@Controller('courses') // ! เป็นการระบุ patch
export class CoursesController {

  @Get() // ! ไม่มีการระบุ patch
  findAll() {
    return { message: 'Hello word' };
  }
}
