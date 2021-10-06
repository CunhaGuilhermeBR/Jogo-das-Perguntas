var functions = {
    createQuestion: function(req, res){
        if(!req.body.area || !req.body.rightAnswer || !req.body.wrongAnswer1 || !req.body.wrongAnswer2 || !req.body.wrongAnswer3)
        res.render('menu', {error: true, msg: 'Preencha todos os campos.'})
        else{
            var newQuestion = Question ({
                area = req.body.area,
                rightAnswer = req.body.rightAnswer,
                wrongAnswer1 = req.body.wrongAnwser1,
                wrongAnswer2 = req.body.wrongAnswer2,
                wrongAnswer3 = req.body.wrongAnswer3
            })

        }
    }
}

module.exports = functions