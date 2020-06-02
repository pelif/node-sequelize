import homeController from './controller/home/index'

module.exports = (app) => {
    app.use('/', homeController)
}
