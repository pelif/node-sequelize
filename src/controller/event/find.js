import sequelize from './../../model/index'
const Event = sequelize.import('./../../model/event')

export default (req, res) => {

    Event
        .findAll()
        .then((events) => {
            return res.render('event/index', {
                title: 'List all Events', 
                msg: 'All events', 
                events: events
        })

   
    })
}