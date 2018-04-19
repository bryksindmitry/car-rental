import {offers as defaultOffers } from '../data'
import {CHANGE_CATEGORY} from '../constants'

export default (offersState = defaultOffers, action) => {
    const {type, payload} = action;
    console.log(offersState);
    switch(type){
        case CHANGE_CATEGORY: return  offersState
    }
    return offersState
}