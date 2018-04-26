import { combineReducers } from 'redux';
import offers from './offers';
import offersCategory from "./offersCategory";
import page from './page'

export default combineReducers({
    offers,
    offersCategory,
    page
})