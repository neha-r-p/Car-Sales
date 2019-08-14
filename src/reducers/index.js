
export const initialState = { features: []}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_FEATURE':
            return{}
        case 'REMOVE_FEATURE':
            return{}
        default:
            return state;
    }
}