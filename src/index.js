import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux'
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'
import { BrowserRouter as Router } from 'react-router-dom'
import { configureStore } from './store/store'

const store = configureStore()
const persistor = persistStore(store)

ReactDOM.render(
    <Provider store={store}>
        <PersistGate
            loading={<div>Loading...</div>}
            persistor={persistor}>
            <Router>
                <App/>
            </Router>
        </PersistGate>
    </Provider>,
  document.getElementById('root')
);
