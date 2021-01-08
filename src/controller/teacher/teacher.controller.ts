import {NextFunction, Request, Response} from "express";
import {Teacher} from '../../database'
import {ITeacherAttributes} from "../../database/interfaces";

class TeacherController {

    async addNewTeacher(req: Request, res: Response, next: NextFunction) {
        try {
            const teacher: ITeacherAttributes = req.body;

            await Teacher.create(teacher);

            res.json({
                success: true,
                msg: 'Teacher created'
            })

        } catch (e) {
            next(e);
            res.json({
                success: false,
                msg: e
            })
        }
    }

    async findTeacher(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params;

            const teacher = await Teacher.findOne({
                where: {
                    id
                }
            });

            res.json({
                success: true,
                msg: teacher
            })

        } catch (e) {
            next(e);
            res.json({
                success: false,
                msg: e
            })
        }
    }

    async deleteTeacher(req: Request, res: Response, next: NextFunction) {
        try {
            const {id} = req.params;

            await Teacher.destroy({
                where: {
                    id
                }
            });

            res.json({
                success: true,
                msg: 'Teacher deleted'
            })

        } catch (e) {
            next(e);
            res.json({
                success: false,
                msg: e
            })
        }
    }

    async updateTeacher(req: Request, res: Response, next: NextFunction) {
        try {
            const teacher: ITeacherAttributes = req.body;

            const updTeacher = await Teacher.update(teacher, {
                where: {
                    id: teacher.id
                }
            });
            res.json({
                success: true,
                msg: updTeacher
            })

        } catch (e) {
            next(e);
            res.json({
                success: false,
                msg: e
            })
        }
    }

}

export const teacherController = new TeacherController();