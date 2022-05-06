import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import { UserContextProvider } from './context/userContext';
import './scss/app.scss';


ReactDOM.render(

<UserContextProvider>
<Router>
  <App />
</Router>
</UserContextProvider>,




  document.getElementById('root')
);


