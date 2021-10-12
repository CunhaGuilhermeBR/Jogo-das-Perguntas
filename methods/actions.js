var Question = require('../models/question')
const storage = require('node-sessionstorage')


var functions = {
    createQuestion: function (req, res) {
        if (!req.body.difficulty || !req.body.area || !req.body.rigthAnswer || !req.body.wrongAnswer1 || !req.body.wrongAnswer2 || !req.body.wrongAnswer3)
            res.render('menu', { error: true, msg: 'Preencha todos os campos.' })
        else {
            var newQuestion = Question({
                area: req.body.area,
                rigthAnswer: req.body.rigthAnswer,
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
    makeQuestion: function (req, res) {
        Question.find({ "area": req.body.area, "difficulty": req.body.difficulty }).lean().then((questions) => {
            let quest = questions[Math.floor(Math.random() * questions.length)];
            storage.setItem('rigthAnswer', quest.rigthAnswer)
            storage.setItem('difficulty', quest.difficulty)
            var answers = shuffle([quest.rigthAnswer, quest.wrongAnswer1, quest.wrongAnswer2, quest.wrongAnswer3])
            res.render('answer', { question: quest.question, answers: answers })
        }).catch((err) => {
            console.log('erro ' + err)
            res.redirect('/')
        })
    },
    verifyAnswer: function (req, res) {
        var answer = storage.getItem('rigthAnswer')
        var score = storage.getItem('score')
        var difficulty = storage.getItem('difficulty')
        if (req.params.answer == answer) {
            switch (difficulty) {
                case 'Fácil':
                    score += 1
                    break;
                case 'Médio':
                    score += 2
                    breal;
                case 'Difícil':
                    score += 3
                    break;
            }
            storage.setItem('score', score)
            res.render('game', {score: score, right: true, msg: 'Resposta certa' })
        }else{
            res.render('game', {score: score, wrong: true, msg: 'Resposta errada'})
        }
    }
}


// Função para embaralhar as respostas
function shuffle(array) {
    let currentIndex = array.length, randomIndex;

    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

module.exports = functions