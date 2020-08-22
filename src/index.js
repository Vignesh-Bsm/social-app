import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import { reduxFirestore, getFirestore } from 'redux-firestore'
import "firebase/firestore";
import "firebase/auth";
import {getFirebase} from 'react-redux-firebase';
import thunk from 'redux-thunk'
import rootReducer from './store/reducers/rootReducer'
import fbConfig from './config/fbConfig';

const store = createStore(rootReducer, 
    compose(
 applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
 reduxFirestore(fbConfig),
))


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();