// export const TOGGLE_NOTIFICATION = 'TOGGLE_NOTIFICATION';

// const toggleNotification = (state) => { 
//     return { ...state, displayNotification: !state.displayNotification };
// };

// export const notificationReducer = (state, action) => {
//     switch (action.type) {
//         case TOGGLE_NOTIFICATION:
//           return toggleNotification(state);
//     }
// }

import combineReducers from "../utils/combineReducers";
import {locationReducer} from './locationReducer';
import {notificationReducer} from './notificationReducer';

const rootReducer = combineReducers({
  notification: notificationReducer,
  location: locationReducer
});

export default rootReducer;