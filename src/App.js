import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import '../node_modules/bootstrap/scss/bootstrap.scss';
import { EmptyBox,IncomingBox, Detail } from './pages';
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={EmptyBox} />
          <Route  path="/incoming" component={IncomingBox} />
          <Route path="/detail/:id" component={Detail}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
