import {DataTypes, Sequelize} from 'sequelize';
import {TeacherStatic} from '../interfaces'

export function TeacherFactory(sequelize: Sequelize): TeacherStatic {

    return <TeacherStatic>sequelize.define("teachers", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
        },
        surname: {
            type: DataTypes.STRING,
        },
        age: {
            type: DataTypes.STRING
        },
        canTeach_Subject: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING
        },
        sex: {
            type: DataTypes.STRING,
        },
        workedInUniversity: {
            type: DataTypes.BOOLEAN,
        },
        yearsOfExperience: {
            type: DataTypes.INTEGER
        }
    })

}