import {
    ACTIVATE_FIRST_BTN, ACTIVATE_SECOND_BTN,
    ACTIVATE_WARNING,
    HIDE_MODAL,
    OPEN_CALC_WINDOW,
    SHOW_MODAL,
    UPDATE_VALUE
} from "./constants";

export const showModal = () => ({type: SHOW_MODAL});
export const hideModal = () => ({type: HIDE_MODAL});

export const updateValue = (value) => ({type: UPDATE_VALUE, value});
export const activateWarning = () => ({type: ACTIVATE_WARNING});
export const openCalcWindow = (array) => ({type: OPEN_CALC_WINDOW, array});
export const firstBtnActive = () => ({type: ACTIVATE_FIRST_BTN});
export const secondBtnActive = () => ({type: ACTIVATE_SECOND_BTN});