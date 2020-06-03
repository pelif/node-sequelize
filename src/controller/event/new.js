import sequelize from './../../model/index'
const Event = sequelize.import('./../../model/event')

export default (req, res)  => {
    return res.render('event/new', {
        title: 'New Event', 
        msg: 'Create a new event', 
        event: new Event()
    })
}