import {SubjectEnum, OnlinePlatformEnum} from '../enums'
import {BuildOptions, Model} from "sequelize";


export interface ILessonAttributes {
    id: number,
    platform: OnlinePlatformEnum,
    url: string,
    classroomId: number|string
    teacherId: number
    subject: SubjectEnum,
}

export interface LessonModel extends Model<ILessonAttributes>, ILessonAttributes {
}

export class Lesson extends Model<LessonModel, ILessonAttributes> {
}

export type LessonStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): LessonModel;
};