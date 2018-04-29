import { createSelector } from 'reselect'

const categoryGetter = state => state.offersCategory
const offersGetter = state => state.offers

export const filteredOffersSelector = createSelector(offersGetter, categoryGetter, (offers, offersCategory)=>{
    let { data, page,  selected} = offers;
    let filtredOffers = data.filter(item=> selected ? item.category === selected : item );

    let allPages = [];
    let lengthOffers = 0;
    for(let y = 0; y < Math.ceil(filtredOffers.length/10); y++) {
        let page = [];
        for (let i = lengthOffers; i < filtredOffers.length; i++) {
            if(page.length == 10)break;
            page.push(filtredOffers[i]);
            lengthOffers++;
        }
        allPages.push(page);
    }

    return {allPagesLength:allPages.length,offersPage: allPages[page-1], page}
});

//const categoryGetter = state => state.offersCategory
//const offersGetter = state => state.cars


export const filteredCarsSelector = createSelector(offersGetter, categoryGetter, (cars, offersCategory)=>{
    let { data , page,  category} = cars;
    let filtredCars = data.filter(item=> category ? item.category === category : item );

    let allPages = [];
    let lengthOffers = 0;
    for(let y = 0; y < Math.ceil(filtredCars.length/10); y++) {
        let page = [];
        for (let i = lengthOffers; i < filtredCars.length; i++) {
            if(page.length == 10)break;
            page.push(filtredCars[i]);
            lengthOffers++;
        }
        allPages.push(page);
    }

    return {allPagesLength:allPages.length, carsPage: allPages[page-1], page}
});