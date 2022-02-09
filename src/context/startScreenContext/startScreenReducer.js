import {HIDE_MODAL, SHOW_MODAL} from "../constants";

export const initialState = {
    visibleStartScreen: true,
};

const startScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW_MODAL: return { ...state, visibleStartScreen: false};
        case HIDE_MODAL: return { ...state, visibleStartScreen: true};
        default: return state;
    }
};

export default startScreenReducer;