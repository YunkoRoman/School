import {Request} from 'express';
import {ITeacherAttributes} from "./teacher.interface";



export interface IRequestExtended extends Request{
  teacher?: ITeacherAttributes
}
