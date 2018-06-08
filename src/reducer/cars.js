import { cars } from '../data';
import {CHANGE_CATEGORY, CHANGE_PAGE } from '../constants';

const defaultCars = {
    data : cars,
    page:1,
    category: null
};

export default (stateCars = defaultCars, action) => {
    const { type, payload } = action;
    switch(type){
        case CHANGE_PAGE: return { data: stateCars.data, page: payload.numPage };
        case CHANGE_CATEGORY: return { data: stateCars.data, category: payload.numCategory, page: 1 }
    }
    return stateCars;
}