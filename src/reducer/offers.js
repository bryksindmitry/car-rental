import { offers } from '../data';

const defaultOffers = {
    data: offers,
    page:1
};

export default (offersState = defaultOffers, action) => {
    const { type, payload  } = action;

    switch(type){
        case "CHANGE_PAGE": return  { data: offersState.data , page: payload.numPage }
    }
    return offersState
}