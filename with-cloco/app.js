var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var expressValidator = require('express-validator');
var session = require('express-session');
var bunyan = require('bunyan');
var cloco = require('cloco-node-client');

var routes = require('./routes/index');

// Init App
var app = express();

// View Engine
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', exphbs({
    defaultLayout: 'layout'
}));
app.set('view engine', 'handlebars');

// BodyParser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false
}));
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
    errorFormatter: function (param, msg, value) {
        var namespace = param.split('.'),
            root = namespace.shift(),
            formParam = root;

        while (namespace.length) {
            formParam += '[' + namespace.shift() + ']';
        }
        return {
            param: formParam,
            msg: msg,
            value: value
        };
    }
}));

// set the menu data as a starting point, before it's loaded from the server.
var menu = {};

// set up the cloco client.
var logger = bunyan.createLogger({
    name: 'cloco-node-example',
    level: process.env.CLOCO_LOG_LEVEL || "info"
});

// cloco initialization options.  Check the README on cloco-node-client for the full list of options.
var options = {
    log: logger,
    environment: 'dev', // this could be set from the cloco --init command
    application: 'cloco-cafe', // this could also be set from the cloco --init command, but probably constant for your app
    ttl: 60 // the interval in seconds between checks for updates
};

// check for the encryption key as an environment variable, and if set then use the encryption option.
if (process.env.CLOCO_ENCRYPTION_KEY) {
    options.encryptor = cloco.createAesEncryptor(process.env.CLOCO_ENCRYPTION_KEY);
}

// initialize the credentials if supplied via environment variables.
if (process.env.CLOCO_CLIENT_KEY && process.env.CLOCO_CLIENT_SECRET) {
    options.credentials = {
        key: process.env.CLOCO_CLIENT_KEY,
        secret: process.env.CLOCO_CLIENT_SECRET
    };
}

// instantiate the client and subscribe to the menu.
var client = cloco.createClient(options);
client.onConfigurationLoaded.subscribe((sender, arg) => {
    if (arg.key === "menu") {
        menu = arg.value;
    }

    // change the log level dynamically
    if (arg.key === "logging") {
        logger.level(arg.value.log_level);
    }
});

client.init()
    .then(() => {
        logger.trace("cloco cafe initialized.");
    })
    .catch((error) => {
        logger.warn("Error initializing cloco cafe. Exiting.");
        process.exit(1);
    });

// Global Vars
app.use(function (req, res, next) {
    res.locals.menu = menu;
    res.locals.section = {};
    next();
});

app.use('/', routes);

// Set Port
app.set('port', (process.env.PORT || 8003));

app.listen(app.get('port'), function () {
    console.log('cloco-node-example web server started on port ' + app.get('port'));
});
