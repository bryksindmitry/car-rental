import { offers } from '../data';
import {CHANGE_CATEGORY, CHANGE_PAGE } from '../constants';

const defaultOffers = {
    data: offers,
    page:1,
    selected:null
};

export default (offersState = defaultOffers, action) => {
    const { type, payload  } = action;

    switch(type){
        case CHANGE_PAGE: return  { data: offersState.data , page: payload.numPage };
        case CHANGE_CATEGORY: return  {data: offersState.data, selected: payload.numCategory, page: 1 }
    }
    return offersState
}