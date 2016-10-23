import path from 'path';
import express from "express";
import React from 'react';
import handlebars from 'express-handlebars';
import Routes from './app/routes/routes.js';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();

var db = mongoose.connect("mongodb://localhost/users");
var hbs = handlebars.create({
    defaultLayout: 'main',
    layoutsDir:'app/views/layouts'
});
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.set('views', __dirname + '/app/views');
app.use(bodyParser.json());
app.use("/", express.static(__dirname + "/public/"));

app.listen(4000);
Routes(app);
console.log('listening on port 4000');
