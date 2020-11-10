import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Clients from './Pages/Clients/Index';
import Testimonials from "./Pages/Testimonials/Index";
import ContactUs from "./Pages/ContactUs/Index"
import React, { Fragment } from "react";
import Navbar from "./Pages/MainHeader/Index"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <div>
      <Router>

        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={About} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/clients' component={Clients} />
            <Route exact path='/testimonials' component={Testimonials} />
            <Route exact path='/contactUs' component={ContactUs} />

          </Switch>

        </Fragment>
      </Router>

    </div>
  );
}

export default App;
