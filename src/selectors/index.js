import { createSelector } from 'reselect'

const categoryGetter = state => state.offersCategory
const offersGetter = state => state.offers
const filtersGetter = state => state.filters;


export const filteredOffersSelector = createSelector(offersGetter, categoryGetter,filtersGetter, (offers, offersCategory, filters)=>{
    const { location, checkIn, } = filters;
    const { data, page,  selected} = offers;
    const filtOf = data.filter(item=> location ? item.location === location : item );
    const filtredOffers = filtOf.filter(item=> selected ? item.category === selected : item );

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

const carsGetter = state => state.cars


export const filteredCarsSelector = createSelector(carsGetter, (cars)=>{
    let { data , page,  category} = cars;
    let filtredCars = data.filter(item => category ? item.category == category : item );
    let allPages = [];
    let lengthOffers = 0;
    for(let y = 0; y < Math.ceil(filtredCars.length/3); y++){
        let page = [];
        for (let i = lengthOffers; i < filtredCars.length; i++){
            if(page.length == 3)break;
            page.push(filtredCars[i]);
            lengthOffers++;
        }
        allPages.push(page);
    }
    console.log(page)
    return {allPagesLength:allPages.length, carsPage: allPages[page-1], page}
});

const pagination = (rows,num = 0, array = []) =>{

}