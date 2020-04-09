import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import SignInSide from "./components/modules/shared_components/welcome";
import PickUserRole from "./components/modules/shared_components/pickUserRole";


export default function App() {
    return (
        <React.Fragment>
            <header>

            </header>
            <Router>
                <div>
                    <Route exact path='/' component={PickUserRole}/>
                    <Route path='/guest_or_dj' component={SignInSide}/>
                    {/*<Route path='/lobby' component={SetStage}/>*/}
                    {/*<Route path='/dj/:id' component={DjControlPanel}/>*/}
                    {/*<Route path='/stage/:id' component={Room}/>*/}
                    {/*<Route path='guest_or_dj' component={pickUserRole}/>*/}
                </div>
            </Router>
        </React.Fragment>
    );
};