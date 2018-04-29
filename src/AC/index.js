import {CHANGE_CATEGORY, CHANGE_PAGE} from '../constants';

export function changeCategory(numCategory){
    return { type: CHANGE_CATEGORY, payload: { numCategory }}
}

export function changePage(numPage){
    return { type: CHANGE_PAGE, payload: { numPage }}
}