import { Injectable } from "@nestjs/common";
import { Course } from "./interface/course.interface";

@Injectable()
export class CousesService {
   async findAll(): Promise<Course[]> {
        return [{
            id: 15,
            number: '0112587',
            title: 'Computer',
        },
        {
            id: 16,
            number: '0112588',
            title: 'ABC',
        },
        {
            id: 17,
            number: '0112589',
            title: 'Design',
        },
        {
            id: 18,
            number: '0111129',
            title: 'Test',
        },
        {
            id: 19,
            number: '01AA589',
            title: 'Test0000',
        },
        {
            id: 20,
            number: 'GE7554154',
            title: 'Test05205151',
        },
        ];
    }
}