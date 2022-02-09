import {ACTIVATE_FIRST_BTN, ACTIVATE_SECOND_BTN, ACTIVATE_WARNING, OPEN_CALC_WINDOW, UPDATE_VALUE} from "../constants";

export const initialState = {
    inputValue: '',
    isWarningActive: false,
    isCalculateWindowOpen: false,
    checkboxes: [],
    isFirstBtnActive: true,
    isSecondBtnActive: false,
};

const modalWindowReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_VALUE: return { ...state, inputValue: action.value, isWarningActive: false};
        case ACTIVATE_WARNING: return { ...state, isWarningActive: true};
        case OPEN_CALC_WINDOW: return { ...state, isCalculateWindowOpen: true, checkboxes: action.array};
        case ACTIVATE_FIRST_BTN: return { ...state, isFirstBtnActive: true, isSecondBtnActive: false};
        case ACTIVATE_SECOND_BTN: return { ...state, isFirstBtnActive: false, isSecondBtnActive: true};
        default: return state;
    }
};

export default modalWindowReducer;
