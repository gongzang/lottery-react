import { SET_MENU } from '../constants/actionTypes';

const initialState = {
    menuList: [],
    menuData: {}
};

export default function menu(state = initialState, action) {
    switch (action.type) {
        case SET_MENU:
        console.log({ ...state, ...action.menu });
            return { ...state, ...action.menu };
        // return { ...state, menuList: action.menuList, menuData: action.menuData };
        default:
            return state;
    }
}