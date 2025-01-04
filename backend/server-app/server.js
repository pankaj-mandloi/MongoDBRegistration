const express = require('express');
const app = express();
const bodyParser = require('body-parser'); 
const PORT = 6090;
const cors = require('cors'); 
const mongoose = require('mongoose');
const config = require('./DB');
const userRoute = require('./user.route');

mongoose.connect(config.URL, { useNewUrlParser: true }) 
    .then(() => {
        console.log('Database is Connected' + config.URL); 
    })
    .catch(err => {
        console.log('Can Not Connect to the database' + err); 
    });

app.use(cors()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use('/user', userRoute);

app.listen(PORT, function() {
    console.log('Server is running on port', PORT);
});