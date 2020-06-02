import Sequelize from 'sequelize'

const sequelize = new Sequelize(
    'mysql://root:myrootsql@172.17.0.3:3306/sequelize', { 
        operatorAliases: Sequelize.Op 
    })
    
// const sequelize = new Sequelize('sequelize', 'root', 'myrootsql', {
//     host: '172.17.0.3', 
//     dialect: 'mysql', 
//     operatorAliases: Sequelize.Op
// })

sequelize
    .authenticate()
    .then(() => console.log('OK!'))
    .catch(() => console.log('ERROR!'))

sequelize.sync()

export default sequelize    