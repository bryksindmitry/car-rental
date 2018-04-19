import {CHANGE_CATEGORY} from '../constants';

export function changeCategory(numCategory){
    return { type: CHANGE_CATEGORY, payload: { numCategory }}
}