
import React from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';

class Html {
  constructor() {

  }

  renderComponent(data,component){
    console.log(component);
    var markup = ReactDOMServer.renderToString(
      ({
        component:data
      })
    );

    return markup;
  }

  renderSection(res,section,markup,data){
    res.render(section, {
      markup: markup, // Pass rendered react markup
      state: JSON.stringify(data) // Pass current state to client side
    });
  }
}

export { Html as default};
