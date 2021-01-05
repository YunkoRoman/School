import {IRequestExtended} from "../../database/interfaces/request-extended.interface";
import {NextFunction, Response} from "express";


class TeacherController {

    async addNewTeacher (req: IRequestExtended, res: Response, next: NextFunction ){
        try {
            console.log(req);


        } catch (e) {
            next(e)
        }
    }

}

export const teacherController = new TeacherController();