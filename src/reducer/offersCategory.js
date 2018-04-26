
import {CHANGE_CATEGORY} from '../constants';

const defaultCategory = {
    selected: null
};

export default (categorysState = defaultCategory, action) => {
    const { type, payload } = action;
    switch(type){
        case CHANGE_CATEGORY: return  { selected: payload.numCategory }
    }
    return categorysState
}