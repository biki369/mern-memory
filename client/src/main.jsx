import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux';
import { thunk } from 'redux-thunk';
import reducers from '../redux/reducers/index.js'
import { GoogleOAuthProvider } from '@react-oauth/google';
const store = createStore(reducers, compose(applyMiddleware(thunk)));
const googleId = "731765194061-76dgbjh2089cathmba2p013qbp7as827.apps.googleusercontent.com";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <GoogleOAuthProvider clientId={googleId}>
        <App />
      </GoogleOAuthProvider>
    </Provider>
  </React.StrictMode>,
)
