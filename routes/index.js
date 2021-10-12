const express = require('express')
const router = express.Router()
const actions = require('../methods/actions')
const storage = require('node-sessionstorage')

//@desc Rota padrão
//@route GET /
router.get('/', (req, res) => {res.render('menu')})

//@desc Rota que redireciona para o cadastro de perguntas
//@route GET /
router.get('/createQuestion', (req,res) => {res.render('createQuestion')})

//@desc Rota que redireciona para o tutorial do jogo
//@route GET /
router.get('/howToPlay', (req,res) => res.render('howToPlay'))

//@desc Rota que pega uma pergunta do banco de dados
//@route POST /
router.post('/getQuestion', actions.makeQuestion)

//@desc Rota que redireciona para a tela do jogo e define a pontuação inicial como 0.
//@route GET /
router.get('/beginGame', (req,res) => {
 storage.setItem('Score', 0)
 res.render('game',{score: 0})
})

//@desc Rota que faz o cadastro de uma pergunta no banco de dados
//@route POST /
router.post('/cadQuestion', actions.createQuestion)

module.exports = router;