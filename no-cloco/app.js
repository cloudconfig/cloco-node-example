var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var session = require('express-session');

var routes = require('./routes/index');

// Init App
var app = express();

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({defaultLayout:'layout'}));
app.set('view engine', 'handlebars');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Express Session
app.use(session({
    secret: 'secret',
    saveUninitialized: true,
    resave: true
}));

// Express Validator
app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.')
      , root    = namespace.shift()
      , formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

// set the menu data as a starting point, before it's loaded from the server.
var menu = {
  sections: [
    {
      name: "Starters",
      description: "Have a little something while you wait.",
      items: [
        {
          title: "Soup of the Day",
          description: "Please ask your server for the soup of the day.",
          price: 3.99
        },
        {
          title: "Beef Carpaccio",
          description: "Wafer thin slices of cured beef, with garnish.",
          price: 6.99
        }
      ]
    },
    {
      name: "Mains",
      description: "Hearty, satisfying main dishes.",
      items: [
        {
          title: "Rack of Lamb",
          description: "Trimmed rack of lamb, served medium with a selection of potatoes and vegetables.",
          price: 14.99
        },
        {
          title: "Fillet of Salmon",
          description: "Fillet of Atlantic salmon, baked and served with home-made Hollandaise and asparagus.",
          price: 12.99
        }
      ]
    }
  ]
};

// Global Vars
app.use(function (req, res, next) {
  res.locals.menu = menu;
  res.locals.section = {};
  next();
});

app.use('/', routes);

// Set Port
app.set('port', (process.env.PORT || 8001));

app.listen(app.get('port'), function(){
	console.log('cloco-node-example web server started on port '+ app.get('port'));
});
