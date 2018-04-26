import {CHANGE_CATEGORY} from '../constants';

export function changeCategory(numCategory){
    return { type: CHANGE_CATEGORY, payload: { numCategory }}
}

export function changePage(numPage){
    console.log(numPage)
    return { type: "CHANGE_PAGE", payload: { numPage }}
}