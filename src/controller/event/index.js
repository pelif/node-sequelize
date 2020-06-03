import express from 'express'
import newEvent from './new' 
import create from './create'
import find from './find'
import show from './show'
import edit from './edit'
import update from './update'
import remove from './remove'

const router = express.Router()

router.get('/', find)
router.get('/new', newEvent)
router.post('/', create)
router.get('/edit/:id', edit)
router.put('/:id', update)
router.delete('/:id', remove)
router.get('/:id', show)

export default router