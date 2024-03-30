import { Controller, Get } from '@nestjs/common';


@Controller('courses') // ! เป็นการระบุ rout
export class CoursesController {

  @Get() // ! ไม่มีการระบุ rout
  findAll() {
    console.log('get data')
    return { message: 'Hello word' };
  }
}
