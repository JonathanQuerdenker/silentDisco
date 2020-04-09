import React from 'react';
import { BrowserRouter as Router} from "react-router-dom";
import Route from 'react-router-dom/Route'//WARNING: THIS TYPE OF IMPORT IS DEPRECATED

import SignInSide from "./components/modules/shared_components/welcome";
import PickUserRole from "./components/modules/shared_components/pickUserRole";
import Room from "./components/modules/guest/room";
import ChooseRoom from "./components/modules/guest/chooseRoom";



export default function App() {
    return (
        <React.Fragment>
            <Router>
                <div>
                    <Route exact path='/' component={SignInSide}/>
                    <Route path='/guest_or_dj' component={PickUserRole}/>
                    <Route path='/lobby' component={ChooseRoom}/>
                    {/*<Route path='/dj/:id' component={DjControlPanel}/>*/}
                    <Route path='/stage/:id' component={Room}/>
                    {/*<Route path='guest_or_dj' component={pickUserRole}/>*/}
                </div>
            </Router>
        </React.Fragment>
    );
};