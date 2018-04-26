


const defaultPage = {
    page: 1
};

export default (pageState = defaultPage, action) => {
    const { type, payload } = action;
    console.log(payload)
    switch(type){
        case "CHANGE_PAGE": return  { page: payload.numPage }
    }
    return pageState
}