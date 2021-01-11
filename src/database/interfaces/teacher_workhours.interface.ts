import {BuildOptions, Model} from "sequelize";


export interface Iteacher_workhoursAttributes {
    id: number,
    lesson_id: number,
    teacher_id: number,
    timeStartLesson: any,
    timeEndLesson: any,
    day: string
}

export interface Teacher_workhoursModel extends Model<Iteacher_workhoursAttributes>, Iteacher_workhoursAttributes {
}


export type Teacher_workhoursStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): Teacher_workhoursModel;
};