import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import morgan from 'morgan' 
import methodOverride from 'method-override' 
import Sequelize from 'sequelize'
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(methodOverride('_method'))

require('dotenv-safe').config()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'src/view'))

require('./src/model/index')
require('./src/index')(app)

app.listen(3000, () => {
    console.log('Express has been ignite...')
})