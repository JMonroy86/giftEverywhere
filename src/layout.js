import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './view/home'
import Boxes from './view/boxes'
import Footer from './components/footer'

const Layout = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Boxes" component={Boxes} />
            </Switch>
            <Footer/>

        </BrowserRouter>
    )
}

export default Layout;