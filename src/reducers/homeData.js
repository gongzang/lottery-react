import { SET_HOME_DATA } from '../constants/actionTypes';

const initialState = {
    newestLotteryData:{}
};

export default function homeData(state = initialState, action) {
    switch (action.type) {
        case SET_HOME_DATA:
            return { ...state, ...action.homeData };
        // return { ...state, menuList: action.menuList, menuData: action.menuData };
        default:
            return state;
    }
}