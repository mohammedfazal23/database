const express = require('express')
const router = express.Router()

const studentcontroller = require('../controllers/studentcontroller')

router.get('/', studentcontroller.index)
router.post('/show', studentcontroller.show)
router.post('/store', studentcontroller.store)
router.post('/update', studentcontroller.update)
router.post('/delete', studentcontroller.destroy)

module.exports = router