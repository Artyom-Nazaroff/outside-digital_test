import React, {useReducer} from 'react';
import {ModalWindowContext} from "./modalWindowContext";
import modalWindowReducer, {initialState} from "./modalWindowReducer";
import {activateWarning, firstBtnActive, openCalcWindow, secondBtnActive, updateValue} from "../actionCreators";

const ModalWindowState = ({children}) => {
    const [state, dispatch] = useReducer(modalWindowReducer, initialState);

    const inputText = (value) => {
        if (/\d+/.test(Number(value))) {
            dispatch(updateValue(value));
        } else {
            dispatch(activateWarning());
        }
    };

    const calculate = () => {
        let total = 260000;
        const taxDeduction = state.inputValue * 12 * 0.13;
        const itemsAmount = Math.ceil(total / taxDeduction);
        const checkboxesArr = [];
        for (let i = 0; i < itemsAmount; i++) {
            const newItem = {};
            if (total - taxDeduction > 0) {
                newItem.amount = taxDeduction.toFixed(0);
                total -= taxDeduction;
            } else {
                newItem.amount = total.toFixed(0);
            }
            newItem.year = i + 1;
            checkboxesArr.push(newItem);
        }
        dispatch(openCalcWindow(checkboxesArr));
    };

    const activateFirstBtn = () => {
        dispatch(firstBtnActive());
    };

    const activateSecondBtn = () => {
        dispatch(secondBtnActive());
    };

    return (
        <>
            <ModalWindowContext.Provider
                value={{modalState: state, inputText, calculate, activateFirstBtn, activateSecondBtn}}>
                {children}
            </ModalWindowContext.Provider>
        </>
    );
};

export default ModalWindowState;