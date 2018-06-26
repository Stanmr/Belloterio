import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';

//Components
import App from './App';
import Features from './components/features/features';
import Solutions from './components/solutions/solutions';
import Stories from './components/stories/stories';
import Partners from './components/partners/partners';
import About from './components/about/about';
import Blog from './components/blog/blog';
import Home from './components//pages/homePage';
import Page404 from './components/page404/page404';

const AppRoutes = () =>

<App>
    <Switch>
        <Route exact path="/features" component ={Features}/>
        <Route exact path="/solutions" component ={Solutions}/>
        <Route exact path="/stories" component ={Stories}/>
        <Route exact path="/partners" component ={Partners}/>
        <Route exact path="/about" component ={About}/>
        <Route exact path="/blog" component ={Blog}/>
        <Route exact path="/" component ={Home}/>
        <Route component ={Page404}/>
    </Switch>
</App>

export default AppRoutes;