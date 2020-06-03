import sequelize from './../../model/index'
const Event = sequelize.import('./../../model/event')

export default (req, res) => {
    Event
        .update(req.body, {
            where: {
                id: req.params.id
            } 
        })
        .then(() => res.redirect('/events'))
}