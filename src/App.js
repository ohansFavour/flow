import React from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import { NotificationContainer } from "react-notifications";

import "react-notifications/lib/notifications.css";

import "./App.css";

// import Barb from "./components/Barb/Barb";
import TestVid from "./components/TestVid";
import Begin from "./components/Begin/Begin";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
// import Intro from "./components/Intro/Intro";

import Last from "./components/Last/Last";
import Process from "./components/Process/Process";
import Steps from "./components/Steps";
import SignupPage from "./components/signupPage";
import SuccessfulRegisteration from "./components/SuccessfulRegisteration";

function App() {
  return (
    <div className="AppMain">
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
