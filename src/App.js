import About from './Pages/About/About';
import Services from './Pages/Services/Services'
import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path='/' component={About} />
            <Route exact path='/services' component={Services} />
          </Switch>

        </Fragment>
      </Router>

    </div>
  );
}

export default App;
