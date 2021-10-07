var jwt = require('jwt-simple')
var Question = require('../models/question')

var functions = {
    createQuestion: function(req, res){
       console.log(req.body.question)
       console.log(req.body.area)
       console.log(req.body.rightAnswer)
       console.log(req.body.wrongAnswer1)
       console.log(req.body.wrongAnswer2)
       console.log(req.body.wrongAnswer3)
        if(!req.body.question || !req.body.area || !req.body.rightAnswer || !req.body.wrongAnswer1 || !req.body.wrongAnswer2 || !req.body.wrongAnswer3)
        res.render('menu', {error: true, msg: 'Preencha todos os campos.'})
        else{
            var newQuestion = Question ({
                area: req.body.area,
                rightAnswer: req.body.rightAnswer,
                wrongAnswer1: req.body.wrongAnwser1,
                wrongAnswer2: req.body.wrongAnswer2,
                wrongAnswer3: req.body.wrongAnswer3,
                question: req.body.question

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
    }
}

module.exports = functions