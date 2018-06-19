import { SET_MENU,SET_HOME_DATA } from '../constants/actionTypes';

export function setMenu(menu) {
    return {
        type: SET_MENU,
        menu
    };
}

export function setHomeData(homeData) {
    return {
        type:SET_HOME_DATA,
        homeData
    }
}