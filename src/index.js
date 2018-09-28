import React from 'react';
import { render } from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store, persistor } from "./redux/store.js";
import { PersistGate } from "redux-persist/es/integration/react";



render(
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
        <App />
        </PersistGate>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
