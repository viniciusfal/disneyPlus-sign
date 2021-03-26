import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Email from '../pages/Email';
import Password from '../pages/Password';
import Dashboard from '../pages/Dashboard';

const Routes: React.FC = () => {
    return (
        <Switch>
            <Route path="/" exact component={Email} />
            <Route path="/password" component={Password} />
            <Route path="/dashboard" component={Dashboard} />
        </Switch>
    );
};
export default Routes;
