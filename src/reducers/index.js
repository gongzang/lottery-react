import { combineReducers } from 'redux'
import menu from './menu';
import homeData from './homeData';

const Reducers = combineReducers({
    menu,
    homeData
})

export default Reducers;
