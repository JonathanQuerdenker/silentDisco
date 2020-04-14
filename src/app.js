import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";

import SignInSide from "./components/modules/services/Welcome";
import PickUserRole from "./components/modules/services/PickUserRole";
import Room from "./components/modules/guest/Room";
import ChooseRoom from "./components/modules/guest/ChooseRoom";
import DjControlPanel from "./components/modules/dj/DiskJockeyControlPanel";



export default function App() {
    return (
        <React.Fragment>
            <Router>
                <div>
                    <Route exact path='/' component={SignInSide}/>
                    <Route path='/guest-or-dj' component={PickUserRole}/>
                    <Route path='/lobby' component={ChooseRoom}/>
                    <Route path='/dj/:id' component={DjControlPanel}/>
                    <Route path='/stage/:id' component={Room}/>
                </div>
            </Router>
        </React.Fragment>
    );
};