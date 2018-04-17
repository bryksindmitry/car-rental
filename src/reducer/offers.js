import {offers as defaultOffers } from '../data'
import {CHANGE_CATEGORY} from '../constants'

export default (offersState = defaultOffers, action) => {
    const {type} = action;
    console.log('112')
    switch(type){
        case CHANGE_CATEGORY: console.log(11)
    }
    return offersState
}