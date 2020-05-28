import express from "express"
import bodyParser from 'body-parser'
import morgan from 'morgan' 
import methodOverride from 'method-override'
const app = express()

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())
app.use(methodOverride('_method'))

app.listen(3000, () => {
    console.log('Express has been ignite...')
})