import homeController from './controller/home/index'
import eventIndexCcontroller from './controller/event/index'

module.exports = (app) => {
    app.use('/', homeController)
    app.use('/events', eventIndexCcontroller)
}
