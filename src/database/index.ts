import * as sequelize from 'sequelize';
import {ClassroomFactory, LessonFactory, Teacher_workhoursFactory, TeacherFactory} from './models'
import {config} from "../config";

export const dbConfig = new sequelize.Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD,
    {
        host: config.DB_HOST,
        dialect: "mysql",
        define: {
            timestamps: false
        }

    }
);

export const Classroom = ClassroomFactory(dbConfig);
export const Lesson = LessonFactory(dbConfig);
export const Teacher = TeacherFactory(dbConfig);
export const Teacher_workhours = Teacher_workhoursFactory(dbConfig);

//  Associated models
Teacher_workhours.belongsTo(Teacher,  {foreignKey: 'teacher_id'});
Teacher_workhours.belongsTo(Lesson, {foreignKey: 'lesson_id'});
Lesson.belongsTo(Classroom, {foreignKey: 'classroomId'});