import React from 'react';
import stl from '../Calculation.module.css';

const CheckboxItem = ({year, amount}) => {
    return (
        <li className={stl.calcItem}>
            <input type="checkbox" id={year} className={stl.calcCheckbox}/>
            <label htmlFor={year} className={stl.calcLabel}>
                {amount} рублей <span>{year === 2 ? 'во' : 'в'} {year}-й год</span>
            </label>
        </li>
    );
};

export default CheckboxItem;