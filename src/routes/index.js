import { Switch } from 'react-router-dom';

import HomePage from './home';
import ResultPage from './result';
const routeList = [
    HomePage,
    ResultPage
];

export default (
    <Switch>
        {routeList}
    </Switch>
);