const {createConnection} = require('./config/database');
const express = require('express');
const app = express();
const path = require('path')
const exphbs = require('express-handlebars');
const indexRoutes = require('./routes/index');
require('dotenv').config({path: '.env'});
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

createConnection();
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', path.join(__dirname, 'views'));
app.engine('hbs',
exphbs({
  defaultLayout: 'layout',
  layoutsDir: path.join(app.get("views"), "layouts"),
  partialsDir: path.join(app.get("views"), "partials"),
  extname: '.hbs'
})
)

app.set('view engine', 'hbs');
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRoutes());
app.listen(process.env.PORT);