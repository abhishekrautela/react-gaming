import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/dist/jquery.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';
import Home from '../Containers/Home/Home';
import Games from '../Containers/Games/Games';
import Slots from '../Containers/Slots/Slots';
import LiveCasino from '../Containers/LiveCasino/LiveCasino';
import SportsBook from '../Containers/SportsBook/SportsBook';
import Error from '../Containers/Error/Error';
import { Route, Switch } from 'react-router-dom';
class Routing extends React.Component {
    render() {
        return (
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/games" exact component={Games} />
                <Route path="/slots" exact component={Slots} />
                <Route path="/livecasino" exact component={LiveCasino} />
                <Route path="/sportsbook" exact component={SportsBook} />
                <Route component={Error} />
            </Switch>

        )
    }

}
export default Routing;