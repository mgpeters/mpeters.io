//https://www.youtube.com/watch?v=EPnBO8HgyRU Send Emails with React pt II 02/27/19

/*import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';*/

const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
var config = require('./config/secret');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/form', (req, res) => {
    nodemailer.createTestAccount((err, account) => { //https://nodemailer.com/about/
        const htmlEmail = `
            <h3>Contact Details</h3>
            <ul>
                <li>Name: ${req.body.name}</li>
                <li>Email: ${req.body.email}</li>
            </ul>
            <h3>Message</h3>
            <p>${req.body.message}</p>
        `

        // create reusable transporter object using the default SMTP transport
        let transporter = nodemailer.createTransport({
            host: "smtp.ethereal.email", //Change to gmail
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: config.user, // generated ethereal user
                pass: config.pass // generated ethereal password
            }
        });

        // setup email data with unicode symbols
        let mailOptions = {
            from: '"Fred Foo 👻" <foo@example.com>', // sender address
            to: "bar@example.com, baz@example.com",
            replyTo: 'test@testaccount.com', // list of receivers
            subject: "Hello ✔", // Subject line
            text: req.body.message, // plain text body
            html: htmlEmail// html body
        };

        transporter.sendMail(mailOptions, (err, info) => {
            if (err){
                return console.log(err);
            }
            console.log('Message Sent: %s', info.message);
            console.log('Message URL: %s', nodemailer.getTestMessageUrl(info));
        })
    })
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

