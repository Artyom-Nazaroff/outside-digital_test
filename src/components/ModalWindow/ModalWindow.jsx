import React, {useContext} from 'react';
import stl from './ModalWindow.module.css';
import closeWindow from '../../assets/images/closeWindow.svg';
import Calculation from "../Calculation/Calculation";
import {StartScreenContext} from "../../context/startScreenContext/startScreenContext";
import {ModalWindowContext} from "../../context/modalWindowContext/modalWindowContext";

const ModalWindow = () => {
    const {hideModalWindow} = useContext(StartScreenContext);
    const {modalState, inputText, calculate, activateFirstBtn, activateSecondBtn} = useContext(ModalWindowContext);

    const inputClass = modalState.isWarningActive ? `${stl.salaryInput} ${stl.salaryInputWarning}` : `${stl.salaryInput}`;
    const activeBtn = `${stl.choiceBtn} ${stl.choiceBtnActive}`;
    const inactiveBtn = `${stl.choiceBtn}`;
    const firstBtnClass = modalState.isFirstBtnActive && !modalState.isSecondBtnActive ? activeBtn : inactiveBtn;
    const secondBtnClass = !modalState.isFirstBtnActive && modalState.isSecondBtnActive ? activeBtn : inactiveBtn;


    return (
        <div className={stl.wrapper}>
            <div className={stl.background}>
                <div className={stl.form}>
                    <div className={stl.formTop}>
                        <h2 className={stl.formTitle}>Налоговый вычет</h2>
                        <span>
                        <img
                            onClick={hideModalWindow}
                            className={stl.formClose}
                            src={closeWindow}
                            alt="cross"
                        />
                    </span>
                    </div>
                    <p className={stl.formText}>
                        Используйте налоговый вычет чтобы погасить ипотеку досрочно.
                        Размер налогового вычета составляет не
                        более 13% от своего официального годового дохода.
                    </p>
                    <div className={stl.formSalary}>
                        <h3 className={stl.salaryTitle}>Ваша зарплата в месяц</h3>
                        <input
                            className={inputClass}
                            type="text"
                            placeholder={'Введите данные'}
                            value={modalState.inputValue}
                            onChange={event => inputText(event.target.value)}
                        />
                        {modalState.isWarningActive
                            ? <div className={stl.salaryWarning}>Введите числовое значение</div>
                            : null
                        }
                        <button
                            className={stl.salaryBtn}
                            disabled={!modalState.inputValue}
                            onClick={calculate}
                        >
                            Рассчитать
                        </button>
                    </div>
                    {modalState.isCalculateWindowOpen
                        ? <Calculation/>
                        : null
                    }
                    <div className={stl.choice}>
                        <h3 className={stl.choiceTitle}>Что уменьшаем?</h3>
                        <button
                            className={`${stl.firstBtn} ${firstBtnClass}`}
                            onClick={activateFirstBtn}
                        >
                            Платёж
                        </button>
                        <button
                            className={secondBtnClass}
                            onClick={activateSecondBtn}
                        >
                            Срок
                        </button>
                    </div>
                    <div className={stl.addBtnContainer}>
                        <button className={stl.addBtn}><span>Добавить</span></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ModalWindow;