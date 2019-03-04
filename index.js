//https://www.youtube.com/watch?v=EPnBO8HgyRU Send Emails with React pt II 02/27/19

import express from 'express';
import bodyParser from 'body-parser';
import nodemailer from 'nodemailer';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.post('/api/form', (req, res) => {
    console.log(req.body);
})

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

