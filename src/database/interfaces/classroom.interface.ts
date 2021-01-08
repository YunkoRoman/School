import {Model, BuildOptions} from "sequelize";
import {OnlinePlatformEnum} from "../enums";

export interface IClassroomAttributes {
    id: number,
    chatId: number,
    platform: OnlinePlatformEnum
}

export interface ClassroomModel extends Model<IClassroomAttributes>, IClassroomAttributes {
}

// export class Classroom extends Model<ClassroomModel, IClassroomAttributes> {
// }

export type ClassroomStatic = typeof Model & {
    new(values?: object, options?: BuildOptions): ClassroomModel;
};