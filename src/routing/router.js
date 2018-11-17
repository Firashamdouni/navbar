import React, { Component } from 'react';
import { BrowserRouter, Route,Link}from'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Second from'../contact/contact';
import entrepreneurs from '../dropdown/entrepreneurs';
import hobbyists from '../dropdown/hobbyists';
import students from '../dropdown/students';
import '../App.css';
const New = () =><p>this is my Home!</p>
class Router extends Component {
    render() {
      return ( 
    
        <BrowserRouter>
     <div>
         <div className="App">
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <a className="navbar-brand" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation" disabled>
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active mr-2">
     < Link className="nav-link hvr-grow-shadow hvr-ripple-out " to="/home">Home<span className="sr-only">(current)</span></Link>
        </li>
        <li className="nav-item dropdown mr-2">
        <Link  className="nav-link dropdown-toggle hvr-grow-shadow hvr-ripple-out" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" to="/services">Services</Link>
          <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <Link className="dropdown-item" to="/services/Forentrepreneurs">For entrepreneurs</Link>
            <Link className="dropdown-item" to="/services/Forstudents">For students</Link>
            <Link className="dropdown-item" to="/services/Forhobbyists">For hobbyists</Link>
          </div>
        </li>
        <li className="nav-item ">
       <Link className="nav-link hvr-grow-shadow hvr-ripple-out" to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  
  </nav>
  </div>
         
            <Route path="/home" exact component={New} />
           <Route path="/services/Forentrepreneurs"  component={entrepreneurs} />
           <Route path="/services/Forstudents"  component={students} />
           <Route path="/services/Forhobbyists"  component={hobbyists} />
           <Route path="/contact" exact component={Second} />
           </div>
           </BrowserRouter> 
     
      );
    }
  }

  export default Router;