import React, {useState} from "react";
import StartScreen from "./components/StartScreen/StartScreen";
import ModalWindow from "./components/ModalWindow/ModalWindow";

function App() {
    const [state, setState] = useState(true);


    return (
        <div>
            {!state ? <StartScreen/> : <ModalWindow/>}
        </div>
    );
}

export default App;
