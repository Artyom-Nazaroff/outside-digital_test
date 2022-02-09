import React, {useReducer} from 'react';
import {StartScreenContext} from "./startScreenContext";
import startScreenReducer, {initialState} from "./startScreenReducer";
import {hideModal, showModal} from "../actionCreators";

const StartScreenState = ({children}) => {
    const [state, dispatch] = useReducer(startScreenReducer, initialState);

    const showModalWindow = () => dispatch(showModal());
    const hideModalWindow = () => dispatch(hideModal());

    return (
        <>
            <StartScreenContext.Provider value={{showModalWindow, hideModalWindow, appState: state}}>
                {children}
            </StartScreenContext.Provider>
        </>
    );
};

export default StartScreenState;