import React, { useState, useEffect, useContext } from 'react';
import { Switch, Route } from 'react-router';
import { withScreenSize } from '@vx/responsive';

import Notification from './components/Notification/Notification';

import Signup from './components/Auth/Signup';
import Login from './components/Auth/Login';
import Home from './components/Home/Home';

import './App.css';
import GlobalState from './context/GlobalState';
import NotificationContext from './context/notificationContext';

import { useHttp } from './hooks/http';

// if (process.env.BROWSER) {
//   var Geosuggest = require('react-geosuggest');
// }

import Profile from './components/Profile/Profile';

const google = window.google;

const App = (props) => {

  const handleLocationSelect = (context, location) => {
      //set location on backend
      //fetch location api
  }

  const { screenWidth, screenHeight } = props;

  console.log('app process.env.NODE_ENV', process.env.NODE_ENV);
  console.log('app REACT_APP_API_URL', process.env.REACT_APP_API_URL);

  const apiUrl = process.env.NODE_ENV === 'production' ? process.env.REACT_APP_API_URL : '';

  const config = {
    apiUrl
  }

  return (
    <GlobalState>
      <NotificationContext.Consumer>
      {context => (
          <div className="App">
            Auth Test
            {
              context.displayNotification?
              <Notification toggleNotification={context.toggleNotification}>
                <Signup apiUrl={config.apiUrl} />
                <Login apiUrl={config.apiUrl} />
              </Notification>
                :
              null
            }
            <button onClick={context.toggleNotification}>
                Singup/login
            </button>
            <main>
              <Switch>
                <Route exact path='/' render={() => (
                    <Home screenWidth={screenWidth} screenHeight={screenHeight}/>
                )}/>
                <Route path='/account' render={() => ( 
                    <Profile apiUrl={config.apiUrl}/>
                )}/>
              </Switch>
            </main>
          </div>
        )
      }
      </NotificationContext.Consumer>
    </GlobalState>
  );
}

export default withScreenSize(App);