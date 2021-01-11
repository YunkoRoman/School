import {Op} from "sequelize";

import {ITeacherAttributes, IteacherFilterAttributes} from '../../database/interfaces'
import {Classroom, Lesson, Teacher, Teacher_workhours} from "../../database";


class TeacherService {

    teacherFilter(data: IteacherFilterAttributes) {
        const {chatId, day, endTime, startTime, subject, yearsOfExperience} = data;

        return Teacher_workhours.findAll({
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
    }

    addNewTeacher(teacher: ITeacherAttributes): Promise<ITeacherAttributes> {
        return Teacher.create(teacher)
    }

    findTeacher(id: number): Promise<ITeacherAttributes | null> {
        return Teacher.findOne({
            where: {
                id
            }
        });
    }

    deleteTeacher(id: number) {
        return Teacher.destroy({
            where: {
                id
            }
        });
    }

    updateTeacher(teacher: ITeacherAttributes) {

        return Teacher.update(teacher, {
            where: {
                id: teacher.id
            }
        });
    }


}

export const teacherService = new TeacherService();