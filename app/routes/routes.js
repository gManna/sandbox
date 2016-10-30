import UsersListComponent from '../components/User/users-list.react.js';
import Application from '../components/MainApp.react.js';
import homeController from '../controllers/home.js';
import User from '../controllers/user.js';
import Usermodel from '../models/users.js';
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import request from 'request';

function Routes(app) {
    var UserController = new User();
    app.get('/',function(req,res,next){
      homeController(req,res);
    });
    app.get('/api/users',function(req,res,next){
      UserController.list(req,res,next);
    });
    app.get('/users',function(req,res,next){

      request('http://localhost:4000/api/users', (error, response, data) => {
        var response = JSON.parse(data);
         res.render('app', {
          markup: ReactDOMServer.renderToString(<UsersListComponent users={response}/>), // Pass rendered react markup
          state: response // Pass current state to client side
        });
      })
    });
    app.post('/users',function(req,res,next){
      UserController.create({"name":"Piero","surname":"Manna"},req,res,next);
    });
}
export { Routes as default}
