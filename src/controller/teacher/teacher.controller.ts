import {NextFunction, Request, Response} from "express";
import {Classroom, Lesson, Teacher, Teacher_workhours} from '../../database'
import {ITeacherAttributes} from "../../database/interfaces";
import {Op} from "sequelize";

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

    async getTargetMathTeachers(req: Request, res: Response, next: NextFunction) {
        try {
            const {startTime, endTime, day, subject, chatId, yearsOfExperience} = req.body;

            const result = await Teacher_workhours.findAll({
                include: [{
                    model: Teacher,
                    where: {
                        yearsOfExperience: {
                            [Op.gt]: yearsOfExperience
                        }
                    }
                },
                    {
                        model: Lesson,
                        where: {
                            subject
                        },
                        include: [{
                            model: Classroom,
                            where: {
                                chatId
                            }
                        }]
                    }],
                where: {
                    timeStartLesson: {
                        [Op.gte]: startTime,
                        [Op.lte]: endTime
                    },
                    day
                }
            });
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