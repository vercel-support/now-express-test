import {SET_LOCATION} from './actions'

const setLocation = (state, location) => { 
    return location;
};

export const locationReducer = (state, action) => {
    switch (action.type) {
        case SET_LOCATION:
            return setLocation(state, action.location);
        default:
            return state
    }
}