import { createStore } from 'redux';
import {wpScoreApp} from './reducers';

export const store = createStore(wpScoreApp);