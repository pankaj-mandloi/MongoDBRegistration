const express = require('express');
const userRoute = express.Router();
var fs = require('fs');
const User = require('./user.model');
const multer = require('multer');

// Register
userRoute.route('/register').post((req, res) => {
    var user = new User(req.body);
    user.save()
        .then(user => {
            res.send("Registration Success");
        })
        .catch(err => {
            res.send(err);
            res.end(); 
        });
});

// Login
userRoute.route('/login').post((req, res) => {
    var user = new User(req.body);
    User.findOne({$and:[{"userid":user.userid},{"userpass":user.userpass}]})
        .then(user => {
            res.send(user);
            res.end();
        })
        .catch(err => {
            res.send(err);
            res.end();
        });
});

// Code to save user image
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'userimage/');
    },
    filename: (req, file, cb) => {
        cb(null, file.originalname);
    }
});

const upload = multer({ storage: storage });

userRoute.route("/saveuserimage").post(upload.single('file'),(req,res)=>{ 
    res.send("File Uploaded");
    res.end();
});

// Get user image
userRoute.route('/getuserimage/:picname').get((req, res)=>{
    res.sendFile("D:/MERN/MongoDbRegistrationfrom/backend/server-app/userimage" + req.params.picname)
});

module.exports = userRoute;



