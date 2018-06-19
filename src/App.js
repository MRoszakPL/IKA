import React, { Component } from 'react';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';


import './sass/main.css'

import NavBar from './js/navigation';
import Main from './js/main';
import Blog from './js/blogPage';
import Shop from './js/shop';
import Contact from './js/contact';
import LogIn from './js/login';
import NoMatch from './js/nomatch';
import Footer from "./js/footer";

class App extends Component {
  render() {
    return (
      <div>
        <HashRouter>
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route path='/blog' component={Blog}/>
                    <Route path='/shop' component={Shop}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/login' component={LogIn}/>
                    <Route component={NoMatch}/>
                </Switch>
                <footer>
                    <Footer/>
                </footer>
            </div>
        </HashRouter>
      </div>
    );
  }
}

export default App;
