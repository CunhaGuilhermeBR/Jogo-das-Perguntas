const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const connectDB = require('./config/db')
var bodyParser = require('body-parser')
const routes = require('./routes/index')
const handlebars = require('express-handlebars')
const app = express()


//Configurações
  // Conecta-se ao banco mongoDB
  connectDB()

  if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
  }

  // View Engine
  app.engine('handlebars', handlebars({defaultLayout: 'main'}))
  app.set('view engine', 'handlebars')
  app.use(cors())
  // Body Parser
  app.use(bodyParser.json({limit: "50mb"}));
  app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:50000}));
  // Routes
  app.use(routes)
  // Static files
  app.use(express.static('views/images'))
  app.use(express.static('views/'))
 // Session
 

const PORT = process.env.PORT || 3000

app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`))
