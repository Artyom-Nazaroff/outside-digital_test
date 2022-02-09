import React, {useContext} from 'react';
import stl from './StartScreen.module.css';
import {StartScreenContext} from "../../context/startScreenContext/startScreenContext";

const StartScreen = () => {
    const {showModalWindow} = useContext(StartScreenContext);

    return (
        <div className={stl.wrapper}>
            <button
                className={stl.btn}
                onClick={showModalWindow}
            >
                Налоговый вычет
            </button>
        </div>
    );
};

export default StartScreen;