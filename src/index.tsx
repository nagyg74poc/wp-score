import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import './index.scss';
import './assets/fonts/bebas/bebas.scss';
import App from './components/app/App';
import * as serviceWorker from './serviceWorker';
import { store } from './store/store';

// import './store/store-test';

render(<Provider store={store}>
    <App/>
</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
