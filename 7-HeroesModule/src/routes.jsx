import React from 'react';
import { IndexRoute, Route } from 'react-router';
import { App, HeroList, HeroDetails } from './containers';

export default () => (
  <Route path="/" component={App}>
    {/* Home (main) route */}
    <IndexRoute component={HeroList} />

    {/* Routes */}
    <Route path="details" component={HeroDetails} />

    {/* Catch all route */}
    <Route path="*" component={'Not found!'} status={404} />
  </Route>
);
