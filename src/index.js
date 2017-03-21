import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {AppContainer} from 'react-hot-loader';

import App from './app/components/App/App';

const initRoot = (id = 'intercom_root') => {
  return new Promise(resolve => {
    let elem = document.getElementById('root');
    if (!elem) {
      elem = document.createElement('div');
      elem.setAttribute('id', id);
      const parent = document.body;
      parent.appendChild(elem);
    }
    resolve(elem);
  });
};

window.initIntercom = (params = {}) => {
  const {containerId, ...other} = params;
  initRoot(containerId).then(elem => {
    render(
      <AppContainer>
        <App params={JSON.stringify(other)}/>
      </AppContainer>,
      elem
    );

    if (module.hot) {
      module.hot.accept('./app/components/App/App', () => {
        const RootContainer = require('./app/components/App/App').default;
        render(
          <AppContainer>
            <RootContainer params={JSON.stringify(other)}/>
          </AppContainer>,
          elem
        );
      });
    }
  });
};
