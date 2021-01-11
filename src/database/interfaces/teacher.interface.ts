import {SubjectEnum, SexEnum} from "../enums";
import {BuildOptions, Model} from "sequelize";

export interface ITeacherAttributes {
    id: number,
    name: string,
    surname: string,
    email?: string,
    age: number,
    sex?: SexEnum,
    canTeach_Subject: SubjectEnum,
    yearsOfExperience: number,
    workedInUniversity?: boolean
}

export interface TeacherModel extends Model<ITeacherAttributes>, ITeacherAttributes {
}


export type TeacherStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): TeacherModel;
}