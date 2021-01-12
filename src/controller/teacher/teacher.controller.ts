import {NextFunction, Request, Response} from "express";
import {ITeacherAttributes, IteacherFilterAttributes} from "../../database/interfaces";
import {teacherService} from "../../services/teacher";

class TeacherController {

    async addNewTeacher(req: Request, res: Response, next: NextFunction) {
        try {
            const teacher: ITeacherAttributes = req.body;

            const createTeacher = await teacherService.addNewTeacher(teacher);

            res.json({
                success: true,
                msg: createTeacher
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
            const teacher_id = Number(id);

            const teacher = await teacherService.findTeacher(teacher_id);

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
            const teacher_id = Number(id);
            await teacherService.deleteTeacher(teacher_id);

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

            const result = await teacherService.updateTeacher(teacher);
            if (result[0] === 1){
                const updTeacher = await teacherService.findTeacher(teacher.id);
                res.json({
                    success: true,
                    msg: updTeacher
                })
            } else
                res.json({
                success: false,
                msg: 'Some error'
            })
        } catch (e) {
            next(e);
            res.json({
                success: false,
                msg: e
            })
        }
    }

    async getTargetMathTeachers(req: Request, res: Response, next: NextFunction) {
        try {
            const data: IteacherFilterAttributes = req.body;

            const result = await teacherService.teacherFilter(data);
            res.json({
                success: true,
                msg: result
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