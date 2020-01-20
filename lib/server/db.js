var mongoose = require( 'mongoose' );
var DB_URL = process.env.DB_URL || 'mongodb+srv://admin:pass@cluster0-xlews.mongodb.net/chessMEAN?retryWrites=true&w=majority';
mongoose.connect(DB_URL);

mongoose.connection.on('connected', function () { 
 console.log('Mongoose connected to ' + DB_URL); 
}); 

mongoose.connection.on('error', function (err) { 
 console.log('Mongoose connection error: ' + err); 
}); 

mongoose.connection.on('disconnected', function () { 
 console.log('Mongoose disconnected'); 
});

var user = require('./models/users');
var game = require('./models/games');

exports.user = user; 
exports.game = game;
