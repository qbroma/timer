import './App.css';
import { useState } from 'react';

const twoDigits = (number) => {
    if (number < 10) {
        return `0${number}`;
    }
    return number;
};

const App = () => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };
    const stopPropagation = (event) => {
        event.stopPropagation();
    };
    const handleChangeHours = (event) => {
        const value = +event.target.value;
        if (value < 24) {
            setHours(value);
        } else {
            setHours(23);
        }
    };

    const handleChangeMinutes = (event) => {
        const value = +event.target.value;
        if (value < 60) {
            setMinutes(value);
        } else {
            setMinutes(59);
        }
    };

    const handleChangeSeconds = (event) => {
        const value = +event.target.value;
        if (value < 60) {
            setSeconds(value);
        } else {
            setSeconds(59);
        }
    };

    return (
        <>
            {isModalOpen && (
                <div className="modal" onClick={handleCloseModal}>
                    <div className="content" onClick={stopPropagation}>
                        <div className="header"/>
                        <div className="inputs">
                            <div className="textInput">
                                <span className="textBeforeInput">Hours:</span>
                                <input className="input" type="number" value={hours.toString()}
                                       onChange={handleChangeHours}/>
                            </div>
                            <div className="textInput">
                                <span className="textBeforeInput">Minutes:</span>
                                <input className="input" type="number" value={minutes.toString()}
                                       onChange={handleChangeMinutes}/>
                            </div>
                            <div className="textInput">
                                <span className="textBeforeInput">Seconds:</span>
                                <input className="input" type="number" value={seconds.toString()}
                                       onChange={handleChangeSeconds}/>
                            </div>
                        </div>
                        <div className="textInput">
                            <div className="btnTime applyBtn" onClick={handleCloseModal}>Apply</div>
                            <div className="btnTime cancelBtn" onClick={handleCloseModal}>Cancel</div>
                        </div>
                    </div>
                </div>
            )}
            <div className="container">
                <div className="wrapper">
                    <div
                        className="time"
                        onClick={handleOpenModal}
                    >
                        {twoDigits(hours)}:{twoDigits(minutes)}:{twoDigits(seconds)}
                    </div>
                    <div className="controls">
                        <button className="btn startBtn">Start</button>
                        <button className="btn resetBtn">Reset</button>
                    </div>
                    <div className="progressWrapper">
                        <div className="progressValue"></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default App;