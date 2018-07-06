import React, { Component } from 'react';
import {
    HashRouter,
    Route,
    Switch
} from 'react-router-dom';


import './sass/main.css'

import NavBar from './js/navigation';
import MainPage from './js/mainPage';
import Blog from './js/blogPage';
import Shop from './js/shop';
import Contact from './js/contact';
import LoginPage from './js/loginPage';
import Basket from "./js/basket";
import NoMatch from './js/nomatch';
import Footer from "./js/footer";
import MyAccount from "./js/myAccount";
import Product from "./js/product";
import SubCategory from "./js/subcategory";
import MyOrders from "./js/myOrders";
import MainCategories from "./js/mainCategories";
import BlogPost from "./js/blogPost.js";
import searchPage from "./js/searchPage";

class App extends Component {
  render() {
    return (

        <HashRouter>
            <main>
                <NavBar/>
                <Switch>
                    <Route exact path='/' component={MainPage}/>
                    <Route path='/blog' component={Blog}/>
                    <Route exact path='/shop' component={Shop}/>
                    <Route exact path='/shop/:mainTheme' component={MainCategories}/>
                    <Route path='/contact' component={Contact}/>
                    <Route path='/login' component={LoginPage}/>
                    <Route path='/basket' component={Basket}/>
                    <Route path='/myAccount' component={MyAccount}/>
                    <Route path='/shop/:mainTheme/:product' component={SubCategory}/>
                    <Route path='/product/:id' component={Product}/>
                    <Route path='/myOrders' component={MyOrders}/>
                    <Route path='/blogPost' component={BlogPost}/>
                    <Route path='/search/:searchValue' component={searchPage}/>
                    <Route component={NoMatch}/>
                </Switch>
                <Footer/>
            </main>
        </HashRouter>

    );
  }
}

export default App;
