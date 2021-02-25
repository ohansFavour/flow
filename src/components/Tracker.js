import React from 'react';
import { withRouter } from 'react-router-dom';
import ReactGA from 'react-ga';

const Tracker = ({ history }) => {
  history.listen((location, action) => {
    ReactGA.set({ page: location.pathname }, ['tracker1', 'tracker2']);
    ReactGA.pageview(location.pathname, ['tracker1', 'tracker2']);
  });

  return <div></div>;
};

export default withRouter(Tracker);
