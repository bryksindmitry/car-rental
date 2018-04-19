import {offers as defaultOffers } from '../data';

export default (offersState = defaultOffers, action) => {
    const {type} = action;
    switch(type){
        case '1': return  offersState
    }
    return offersState
}