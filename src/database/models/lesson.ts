import {DataTypes, Sequelize} from 'sequelize';
import {LessonStatic} from '../interfaces'

export function LessonFactory(sequelize: Sequelize): LessonStatic {

    return <LessonStatic>sequelize.define("lessons", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        classroomId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        subject: {
            type: DataTypes.STRING,
            allowNull: false
        },
        url: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })

}