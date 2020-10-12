import React from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import SignInSide from "./components/modules/services/Welcome";
import PickUserRole from "./components/modules/services/PickUserRole";
import Room from "./components/modules/guest/Room";
import ChooseRoom from "./components/modules/guest/ChooseRoom";
import DjControlPanel from "./components/modules/dj/DiskJockeyControlPanel";



export default function App() {
    return (
        <React.Fragment>
            <Router>
                <Switch>
                    <Route exact path='/' component={SignInSide}/>
                    <Route path='/guest-or-dj' component={PickUserRole}/>
                    <Route path='/stage/:id' component={Room}/>
                    <Route path='/stage/' component={ChooseRoom}/>
                    <Route path='/dj/:id' component={DjControlPanel}/>
                    <Route path='/dj/' component={ChooseRoom}/>
                </Switch>
            </Router>
        </React.Fragment>
    );
};