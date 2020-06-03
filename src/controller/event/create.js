import sequelize from './../../model/index'
const Event = sequelize.import('./../../model/event')

export default (req, res) => {
    Event
        .create(req.body)
        .then(() => res.redirect('/events'))
}