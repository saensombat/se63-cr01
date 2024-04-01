import { Controller, Get } from '@nestjs/common';
import { Course } from 'src/interface/course.interface';
import { CousesService } from 'src/couses.service';


@Controller('courses') // ! เป็นการระบุ rout
export class CoursesController {
  constructor(private coursesService: CousesService) {} //! <<== เป็น Injectable ที่ส่งมาจาก couses.service ความหมายคือ จะมีการสร้าง CoursesController ให้ส่ง CousesService ตูด้วยนะ service



  @Get() // ! ไม่มีการระบุ rout
  async findAll(): Promise<Course[]>{
    return this.coursesService.findAll();
  }
}
