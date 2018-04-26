const defaultPage = {
    page: 0
};

export default (pageState = defaultPage, action) => {
    const { type, payload } = action;
    switch(type){
        case "CHANGE_PAGE": return  { page: payload.numPage }
    }
    return pageState
}