import { combineReducers } from 'redux';
import offers from './offers';
import cars from './cars';
import filters from './filter'

export default combineReducers({
    offers,
    cars,
    filters
})