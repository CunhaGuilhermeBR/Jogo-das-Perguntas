var mongoose = require('mongoose')
var Schema = mongoose.Schema;

var questionSchema = new Schema({
    area: {
        type: String,
        require: true
    },
    rigthAnswer: {
        type: String,
        require: true
    },
    wrongAnswer1: {
        type: String,
        require: true
    },
    wrongAnswer2: {
        type: String,
        require: true
    },
    wrongAnswer3: {
        type: String,
        require: true
    },
    question: {
        type: String,
        require: true
    }
})

module.exports = mongoose.model('Question', questionSchema)