import UserComponent from '../components/user.react.js';
import Application from '../components/MainApp.react.js';
import homeController from '../controllers/home.js';
import User from '../controllers/user.js';
import Usermodel from '../models/users.js';
//import Html from '../helpers/Html.js';
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

      request('http://localhost:4000/api/users', (error, response, body) => {
         res.render('app', {
          markup: ReactDOMServer.renderToString(<UserComponent users={body}/>), // Pass rendered react markup
          state: JSON.stringify(body) // Pass current state to client side
        });
      })
    });
    app.post('/users',function(req,res,next){
      UserController.create({"name":"Piero","surname":"Manna"},req,res,next);
    });
}
export { Routes as default}
