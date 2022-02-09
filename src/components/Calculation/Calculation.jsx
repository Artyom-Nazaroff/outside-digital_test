import React, {useContext} from 'react';
import stl from './Calculation.module.css';
import {ModalWindowContext} from "../../context/modalWindowContext/modalWindowContext";
import CheckboxItem from "./CheckboxItem/CheckboxItem";

const Calculation = () => {
    const {modalState} = useContext(ModalWindowContext);

    return (
        <div className={stl.calcWrapper}>
            <h2 className={stl.calcTitle}>Итого можете внести в качестве досрочных:</h2>
            <ul className={stl.calcItems}>
                {modalState.checkboxes.map(item =>
                    <CheckboxItem
                        key={item.year}
                        year={item.year}
                        amount={item.amount}
                    />
                )}
            </ul>
        </div>
    );
};

export default Calculation;