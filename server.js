var log = require('logger')(module);
var db = require('./db');
db.connect();

//TODO @Wisecrucianм

var User = require('./user');


function run() {
    var vasya = new User("Вася");
    var petya = new User("Петя");

    vasya.hello(petya);
    log(db.GetPhrase("Run succesful"));
}

if (module.parent) {
    exports.run = run;
} else {
    run();
}