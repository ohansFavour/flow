import React from "react";

import { Route, Switch } from "react-router-dom";
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
import Form from "./components/Form";

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
            {/* <Steps /> */}
            <Process />
            <Begin />
            <Footer />
            <Last />
          </div>
        </Route>
        <Route exact path="/sign-up">
          <div className="AppForm">
            <Header notHome={true} />
            <Form />
          </div>
        </Route>
      </Switch>

      {/*  */}
    </div>
  );
}

export default App;
