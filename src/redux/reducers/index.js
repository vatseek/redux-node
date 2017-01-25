import {authStateReducer} from 'redux-oauth';
import counterReducer from './counterReducer';
import timeReducer from './timeReducer';


export const auth = authStateReducer;

export const counter = counterReducer;

export const time = timeReducer;
