import { combineReducers } from 'redux';
import offers from './offers';
import cars from './cars';

export default combineReducers({
    offers,
    cars
})