import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Clients from './Pages/Clients/Index';
import Testimonials from "./Pages/Testimonials/Index";
import ContactUs from "./Pages/ContactUs/Index";
import Footer from "./Pages/Footer/Index"
import Hero from "./Pages/Hero/Index";
import React, { Fragment } from "react";
import Navbar from "./Pages/MainHeader/Index"
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './Pages/Home/Index';
import Career from './Pages/Career/Index';


function App() {
  return (
    <div>
      <Router>
        <Fragment>
          <Navbar />


          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/about' component={About} />
            <Route exact path='/services' component={Services} />
            <Route exact path='/testimonials' component={Testimonials} />
            <Route exact path='/contactUs' component={ContactUs} />
            <Route exact path='/career' component={Career} />
          </Switch>

          <Footer />
        </Fragment>
      </Router>

    </div>
  );
}

export default App;
