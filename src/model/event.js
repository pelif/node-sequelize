import sequelize from './index' 

export default (sequelize, DataTypes) => {
    return sequelize.define('event', {
        name: DataTypes.STRING, 
        description: DataTypes.TEXT
    }, {
        timestamps: false
    })
}