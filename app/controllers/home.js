import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import Application from '../components/MainApp.react.js';
export default function homeController (req,res) {
  res.render('app', {
  markup: ReactDOMServer.renderToString(<Application />)
});
}
