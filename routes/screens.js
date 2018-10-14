const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Screens = require('../models/screen');

const screenRouter = express.Router();

screenRouter.use(bodyParser.json());

screenRouter.route('/')
.get((req,res,next) => {
    Screens.find({})
    .then((Screens) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(Screens);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req, res, next) => {
    var ob = req.body;
    Screens.create(req.body)
    .then((screen) => {
        console.log('screen Created ', screen);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(screen);
    }, (err) => next(err))
    .catch((err) => next(err));
})


screenRouter.route('/:screenName/reserve')
.get((req,res,next) => {
    var query = {name : req.params.screenName};
    Screens.find(query)
    .then((screen) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(screen);
    }, (err) => next(err))
    .catch((err) => next(err));
})
.post((req,res,next) => {
    console.log(req.body);
    var x= (req.body.seats.B);
    var query = {name : req.params.screenName};
    res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
next();
    /*Screens.findOneAndUpdate(query,  { safe: true, upsert: true})
    .then((screen) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
    }, (err) => next(err))
    .catch((err) => next(err));*/
});

screenRouter.route('/:screenName/seats')
.get((req,res,next)=>{
    if(req.query.status==='unreserved'){
        var q = {name : req.params.screenName};
        Screens.find(q)
    .then((screen) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        console.log(screen.name);
        res.json(screen);
    }, (err) => next(err))
    .catch((err) => next(err));
    }else{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        console.log("iu");
        next();
    }
})

module.exports = screenRouter;