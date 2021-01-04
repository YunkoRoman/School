import * as sequelize from 'sequelize';
import {ClassroomFactory, LessonFactory, TeacherFactory} from './models'
import {config} from "../config";

export const dbConfig = new sequelize.Sequelize(config.DB_NAME, config.DB_USER, config.DB_PASSWORD,

    {
        host: config.DB_HOST,
        dialect: "mysql",

    }
);

export const Classroom = ClassroomFactory(dbConfig);
export const Lesson = LessonFactory(dbConfig);
export const Teacher = TeacherFactory(dbConfig);