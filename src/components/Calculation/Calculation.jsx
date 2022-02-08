import React from 'react';
import stl from './Calculation.module.css';

const Calculation = () => {
    return (
        <div className={stl.calcWrapper}>
            <h2 className={stl.calcTitle}>Итого можете внести в качестве досрочных:</h2>
            <ul className={stl.calcItems}>
                <li className={stl.calcItem}>
                    <input type="checkbox" id={'first'} className={stl.calcCheckbox}/>
                    <label htmlFor={'first'} className={stl.calcLabel}>78 000 рублей <span>в 1-ый год</span></label>
                </li>
                <li className={stl.calcItem}>
                    <input type="checkbox" id={'second'} className={stl.calcCheckbox}/>
                    <label htmlFor={'second'} className={stl.calcLabel}>78 000 рублей <span>в 1-ый год</span></label>
                </li>
            </ul>
        </div>
    );
};

export default Calculation;