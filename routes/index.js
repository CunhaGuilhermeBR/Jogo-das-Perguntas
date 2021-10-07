const express = require('express')
const router = express.Router()
const actions = require('../methods/actions')

//@desc Rota padrão
//@route GET /
router.get('/', (req, res) => {res.render('menu')})

router.get('/createQuestion', (req,res) => {res.render('createQuestion')})

router.post('/cadQuestion', actions.createQuestion)

module.exports = router;