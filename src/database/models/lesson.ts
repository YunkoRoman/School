import {DataTypes, Sequelize} from 'sequelize';
import {LessonStatic} from '../interfaces'

export function LessonFactory(sequelize: Sequelize): LessonStatic {

    return <LessonStatic>sequelize.define("lesson", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        platform: {
            type: DataTypes.STRING
        },
        classroomId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: false
        },
        teacherId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })

}