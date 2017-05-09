import React from 'react';
import ReactDOM from 'react-dom';
import './styles/app.scss';

import App from './components/App';
import { AppContainer } from 'react-hot-loader';




/* RENDER */
function render(Component, props={}) {
  return ReactDOM.render(
    <AppContainer>
      <Component {...props}/>
    </AppContainer>,
    document.getElementById('root')
  );
}

render(App);




/* HOT REPLACEMENT */
if(module.hot)
  module.hot.accept('./components/App', () => { render(App) });
