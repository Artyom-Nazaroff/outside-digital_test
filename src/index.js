import React from 'react';
import ReactDOM from 'react-dom';
import './reset.css';
import './index.css';
import App from './App';
import StartScreenState from "./context/startScreenContext/startScreenState";
import ModalWindowState from "./context/modalWindowContext/modalWindowState";

ReactDOM.render(
    <React.StrictMode>
        <ModalWindowState>
            <StartScreenState>
                <App/>
            </StartScreenState>
        </ModalWindowState>
    </React.StrictMode>,
    document.getElementById('root')
);

