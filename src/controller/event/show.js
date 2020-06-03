import sequelize from './../../model/index'
const Event = sequelize.import('./../../model/event')

export default (req, res) => {
    Event 
        .findByPk(req.params.id)
        .then((event) => {
            console.log(event)
            let eventName = (event != null) ? event.name : ''
            return res.render('event/show', {
                title: 'Event - ' + eventName, 
                msg: 'Show - ' + eventName, 
                event: event
            })
        })
}