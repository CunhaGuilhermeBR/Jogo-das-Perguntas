var jwt = require('jwt-simple')
var Question = require('../models/question')

var functions = {
    createQuestion: function(req, res){
        if(!req.body.difficulty || !req.body.area || !req.body.rightAnswer || !req.body.wrongAnswer1 || !req.body.wrongAnswer2 || !req.body.wrongAnswer3)
        res.render('menu', {error: true, msg: 'Preencha todos os campos.'})
        else{
            var newQuestion = Question ({
                area: req.body.area,
                rightAnswer: req.body.rightAnswer,
                wrongAnswer1: req.body.wrongAnwser1,
                wrongAnswer2: req.body.wrongAnswer2,
                wrongAnswer3: req.body.wrongAnswer3,
                question: req.body.question,
                difficulty: req.body.difficulty

            })
            newQuestion.save(function (err, newQuestion) {
                if (err) {
                    res.render('menu', { error: true, msg: 'Erro na hora de salvar ' + err })
                }
                else {
                    res.render('menu', { success: true, msg: 'Pergunta cadastrada com sucesso.' })
                }
            })
        }
    },
    makeQuestion: function (req,res){
        Question.find()
    },
}

module.exports = functions