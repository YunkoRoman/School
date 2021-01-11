import {DataTypes, Sequelize} from 'sequelize';
import {Teacher_workhoursStatic} from '../interfaces';


export function Teacher_workhoursFactory(sequelize: Sequelize): Teacher_workhoursStatic {

    return <Teacher_workhoursStatic>sequelize.define("teacher_workhours", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        teacher_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        lesson_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        timeStartLesson: {
            type: DataTypes.TIME,
            allowNull: false
        },
        timeEndLesson: {
            type: DataTypes.TIME,
            allowNull: false
        },
        day: {
            type: DataTypes.STRING
        }

    });
}
