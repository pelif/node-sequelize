import sequelize from './../../model/index'
const Event = sequelize.import('./../../model/event')

export default (req, res) => {
    return res.render('home/index', {
        title: 'Home Page', 
        subtitle: 'This is my subtitle', 
        msg: 'Welcome to Events App'
    })
}
