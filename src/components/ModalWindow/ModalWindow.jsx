import React from 'react';
import stl from './ModalWindow.module.css';
import closeWindow from '../../assets/images/closeWindow.svg';
import Calculation from "../Calculation/Calculation";

const ModalWindow = () => {
    return (
        <div className={stl.background}>
            <div className={stl.form}>
                <div className={stl.formTop}>
                    <h2 className={stl.formTitle}>Налоговый вычет</h2>
                    <span>
                        <img className={stl.formClose} src={closeWindow} alt="cross"/>
                    </span>
                </div>
                <p className={stl.formText}>
                    Используйте налоговый вычет чтобы погасить ипотеку досрочно.
                    Размер налогового вычета составляет не
                    более 13% от своего официального годового дохода.
                </p>
                <div className={stl.formSalary}>
                    <h3 className={stl.salaryTitle}>Ваша зарплата в месяц</h3>
                    <input className={stl.salaryInput} type="text" placeholder={'Введите данные'}/>
                    <button className={stl.salaryBtn}>Рассчитать</button>
                </div>

                <Calculation/>

                <div className={stl.choice}>
                    <h3 className={stl.choiceTitle}>Что уменьшаем?</h3>
                    <button className={stl.firstBtn}>Платёж</button>
                    <button className={stl.secondBtn}>Срок</button>
                </div>
                <div className={stl.addBtnContainer}>
                    <button className={stl.addBtn}><span>Добавить</span></button>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;