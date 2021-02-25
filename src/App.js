import React from 'react';

import { Route, Switch } from 'react-router-dom';
import { NotificationContainer } from 'react-notifications';
import ReactGA from 'react-ga';

import 'react-notifications/lib/notifications.css';

import './App.css';

// import Barb from "./components/Barb/Barb";
import TestVid from './components/TestVid';
import Begin from './components/Begin/Begin';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
// import Intro from "./components/Intro/Intro";

import Last from './components/Last/Last';
import Process from './components/Process/Process';
import Steps from './components/Steps';
import SignupPage from './components/signupPage';
import SuccessfulRegisteration from './components/SuccessfulRegisteration';
import Tracker from './components/Tracker';

const TRACKING_ID_NG = 'UA-190288342-2'; // www.learnworknow.ng
const TRACKING_ID_COM = 'UA-190288342-1'; // www.learnworknow.com

ReactGA.initialize(
  [
    {
      trackingId: TRACKING_ID_NG,
      gaOptions: {
        name: 'tracker1',
        userId: 123,
      },
    },
    {
      trackingId: TRACKING_ID_COM,
      gaOptions: { name: 'tracker2' },
    },
  ],
  { debug: true, alwaysSendToDefaultTracker: false }
);

function App() {
  return (
    <div className="AppMain">
      <Tracker />
      <NotificationContainer />
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Header />
            {/* <Intro /> */}
            <TestVid />
            {/* <Barb /> */}
            <Steps />
            <Process />
            <Begin />
            <Footer />
            <Last />
          </div>
        </Route>
        <Route exact path="/signup">
          <SignupPage />
        </Route>
        <Route exact path="/registration-complete">
          <SuccessfulRegisteration />
        </Route>
      </Switch>

      {/*  */}
    </div>
  );
}

export default App;
