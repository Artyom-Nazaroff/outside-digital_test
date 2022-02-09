import React, {useContext} from "react";
import StartScreen from "./components/StartScreen/StartScreen";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import {StartScreenContext} from "./context/startScreenContext/startScreenContext";

function App() {
    const {appState} = useContext(StartScreenContext);

    return (
        <div>
            {appState.visibleStartScreen
                ?
                <StartScreen/>
                :
                <ModalWindow/>
            }
        </div>
    );
}

export default App;
