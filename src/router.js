import React, { Component }  from 'react';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom'
import Home from './pages/Home/Home';
import TrialCars from './pages/TrialCars/TrialCars';
import TrialCar from './pages/TrialCar/TrialCar';
import Login from './pages/Login/Login';


export default class Routes extends Component{
    render(){
        return(
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/login" component={Login}/>
					<Route exact path="/trial_cars" component={TrialCars}/>
					<Route exact path="/trial_cars/:id" component={TrialCar}/>
					<Redirect to="/"/>
				</Switch>
			</BrowserRouter>
        )
    }
}
