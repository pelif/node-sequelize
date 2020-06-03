import sequelize from './../../model/index'
const Event = sequelize.import('./../../model/event')

export default (req, res) => {
    Event
        .findByPk(req.params.id)
        .then((event) => {
            return res.render('event/edit', {
                title: 'Edit - ' + event.name, 
                msg: 'Editing - ' + event.name, 
                event: event
            })
        })
}