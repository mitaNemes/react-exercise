import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { Store } from './redux/store';

import './index.css';
import Landing from './routes/Landing';
import Home from './routes/Home';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route} from 'react-router-dom';

ReactDOM.render((
  <Provider store={Store()}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={Landing}/>
        <Route path="/home" component={Home}/>
      </div>
    </BrowserRouter>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
