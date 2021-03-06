import React from 'react';
import { BrowserRouter, Switch,Route} from 'react-router-dom';

import {Car,Home} from './pages';


function Routes() {
    return(
        <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/car" component={Car}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Routes;