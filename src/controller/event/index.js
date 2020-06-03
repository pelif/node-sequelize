import express from 'express'
import newEvent from './new' 
import create from './create'
import find from './find'
import show from './show'
import edit from './edit'
import update from './update'

const router = express.Router()

router.get('/', find)
router.get('/new', newEvent)
router.post('/', create)
router.get('/edit/:id', edit)
router.put('/:id', update)
router.get('/:id', show)

export default router