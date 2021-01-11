import {SubjectEnum} from '../enums'
import {BuildOptions, Model} from "sequelize";


export interface ILessonAttributes {
    id: number,
    url: string,
    classroomId: number
    subject: SubjectEnum,
}

export interface LessonModel extends Model<ILessonAttributes>, ILessonAttributes {
}


export type LessonStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): LessonModel;
};