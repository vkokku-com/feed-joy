var express = require('express');
var path = require('path');
var nodemailer = require('nodemailer');
var bodyParser = require('body-parser');

var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.render('index', { title: 'Simple Express Site!' });
});
app.get('/home', (req, res) => {
    res.render('index', { title: 'Simple Express Site!' });
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/contact', (req, res) => {
    res.render('contact');
});
app.post('/contact/send', (req, res) => {
    var transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'your mail id',
            pass: 'your password'
        }
    });

    var mailOptions = {
        from: 'senders mail id',
        to: 'recepients mail id',
        subject: 'nodemailer Test mail',
        text: 'You have submitted a form with the following details:' + '\n' + 'Name' + '\t:' +
            req.body.name + '\n' + 'Email' + '\t:' + req.body.email + '\n' + 'Message' + '\t:' + req.body.message,
        html: '<p>You have submitted a form with the following details:</p><ul><li>Name:' + req.body.name + '</li><li>Email:' + req.body.email + '</li><li>Message:' + req.body.message + '</li></ul>'
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.redirect('/');
        } else {
            console.log('Message Sent:', info.response);
            res.redirect('/');
        }
    });
});

app.listen(3000);
console.log('Server is running on port 3000');
