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
    //var htmlHelper = new Html();
    app.get('/',function(req,res,next){
      homeController(req,res);
    });
    app.get('/api/users',function(req,res,next){
      var UserController = new User(req,res,next);
      UserController.list();
    });
    app.get('/users',function(req,res,next){

      request('http://localhost:4000/api/users', (error, response, body) => {
         res.render('app', {
          markup: ReactDOMServer.renderToString(<UserComponent users={body}/>), // Pass rendered react markup
          state: JSON.stringify(body) // Pass current state to client side
        });
      })
      //let markup = htmlHelper.renderComponent(usersList,UserComponent);
      //htmlHelper.renderSection(res,'app',markup,usersList);
    });
    app.post('/users',function(req,res,next){

      var UserController = new User(req,res,next);
      UserController.create({"name":"Piero","surname":"Manna"});
    });
}
export { Routes as default}
