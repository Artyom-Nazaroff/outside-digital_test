import React from 'react';
import stl from './StartScreen.module.css';

const StartScreen = () => {
    return (
        <div className={stl.wrapper}>
            <button className={stl.btn}>Налоговый вычет</button>
        </div>
    );
};

export default StartScreen;