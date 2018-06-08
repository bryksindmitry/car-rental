

const defaultFilters = {
    location: "",
    checkIn: "",
    checkOut:"",
    priceRange:"",
};

export default (stateFilter = defaultFilters, action) =>{
    const { type , payload} = action;
    switch(type){
        case "SUBMIT": return stateFilter;
    }
    return stateFilter;
}