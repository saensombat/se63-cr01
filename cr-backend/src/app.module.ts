import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import {CoursesController} from './courses/courses.controller'
import { CousesService } from './couses.service';

@Module({
  imports: [],
  controllers: [AppController, CoursesController],
  providers: [AppService, CousesService],
})
export class AppModule {}
