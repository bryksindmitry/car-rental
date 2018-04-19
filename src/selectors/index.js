import { createSelector } from 'reselect'

const categoryGetter = state => state.offersCategory
const offersGetter = state => state.offers

export const filteredOffersSelector = createSelector(offersGetter, categoryGetter, (offers, offersCategory)=>{

    let { selected } = offersCategory;
    let filtredOffers = offers.filter(item=> selected ? item.category === selected : item )
    return filtredOffers
})