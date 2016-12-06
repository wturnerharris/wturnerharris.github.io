import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import 'current-input';

import App from './components/App';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import Dress from './components/Dress';
import Resources from './components/Resources';
import Registry from './components/Registry';

const routes = (
  <Route path="/" mapMenuTitle="Home" component={App}>
    <IndexRoute component={Home} />

    <Route path="dress" mapMenuTitle="Dress" component={Dress}/>
    <Route path="resources" mapMenuTitle="Resources" component={Resources}/>
    <Route path="registry" mapMenuTitle="Registry" component={Registry}/>
    <Route path="*" mapMenuTitle="Page Not Found" component={PageNotFound} />
  </Route>
);
//    <Route path="registry" mapMenuTitle="Registry" component={Registry}/>
//    <Route path="see-hear-do" mapMenuTitle="See+Hear+Do" component={SeeHearDo}/>
//    <Route path="next-day-brunch" mapMenuTitle="Next-day Brunch" component={NextDayBrunch}/>


render(
  <Router
    history={browserHistory}
    routes={routes}
  />,
  document.getElementById('root')
);
