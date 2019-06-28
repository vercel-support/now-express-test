import React, { useState, useReducer } from 'react';
import notificationContext from './notificationContext';
import LocationContext from './locationContext';
import rootReducer from './reducers';
import { TOGGLE_NOTIFICATION, SET_LOCATION } from './actions.js';

const GlobalState = (props) => {

  const initialState = {
    notification: {
      displayNotification: false
    },
    location: null
  }
  
  // const [appState, dispatch] = useReducer(rootReducer, { displayNotification: false, location: null });
  const [appState, dispatch] = useReducer(rootReducer, initialState);

  console.log('*** appState ***', appState)

  const toggleNotification = () => {
    setTimeout(() => { 
      // this.setState(updatedCart);
      dispatch({ type: TOGGLE_NOTIFICATION })
    }, 200);
  };

  const setLocation = (location) => {
    dispatch({ type: SET_LOCATION, location })
  };

  return (
    <notificationContext.Provider
      value={{
        displayNotification: appState.notification.displayNotification,
        toggleNotification: toggleNotification,
        location: appState.location,
        setLocation
      }}
    >
      {props.children}
    </notificationContext.Provider>
  );
}

export default GlobalState;