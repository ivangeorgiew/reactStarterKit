import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.scss';

import App from './components/App';




/* RENDER */
function render(Component, props={}) {
  return ReactDOM.render(
    <Component {...props}/>,
    document.getElementById('root')
  );
}

render(App);
