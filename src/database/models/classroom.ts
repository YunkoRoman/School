import { DataTypes, Sequelize } from 'sequelize';
import {ClassroomStatic} from '../interfaces'

export function ClassroomFactory(sequelize: Sequelize): ClassroomStatic {

    return<ClassroomStatic>sequelize.define("classrooms", {
        id:{
            type:DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        chatId: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        platform: {
            type: DataTypes.STRING
        }
    })
    
}