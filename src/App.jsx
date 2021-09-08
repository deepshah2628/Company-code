import React from 'react'
import { Redirect, Route, Switch } from 'react-router';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';
import Navbar from './Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <Switch>
        {/* Switch is used to match the first field and show the resultant page in the browser */}
        {/* So if the page is / it will always show home so for this purpose exact is used */}
        <Route exact path="/" component={Home} />
        <Route exact path="/About" component={About} />
        <Route exact path="/Service" component={Service} />
        <Route exact path="/Contact" component={Contact} />
        {/* If the path specified is not found than it will be redired to / */}
        <Redirect to="/" />
      </Switch>
    </>
  )
}

export default App


