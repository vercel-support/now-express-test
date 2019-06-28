import {TOGGLE_NOTIFICATION} from './actions'

const toggleNotification = (state) => { 
    return { ...state, displayNotification: !state.displayNotification };

};
export const notificationReducer = (state, action) => {
    switch (action.type) {
        case TOGGLE_NOTIFICATION:
            return toggleNotification(state);
        default:
            return state
    }
}