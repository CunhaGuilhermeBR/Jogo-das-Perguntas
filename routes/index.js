const express = require('express')
const router = express.Router()

//@desc Rota padrão
//@route GET /
router.get('/', (req, res) => {res.render('menu')})

router.get('/createQuestion', (req,res) => {res.render('createQuestion')})

module.exports = router;