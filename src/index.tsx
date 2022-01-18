import { BrowserRouter } from 'react-router-dom';

import * as ReactDOM from 'react-dom';

import App from './App';

const container = document.getElementById('app');
ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  container,
);
