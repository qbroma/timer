import './App.css';
import { useState } from 'react';
const App = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const handleOpenModal = () => {
        setIsModalOpen(true);
    }
    const handleCloseModal = () => {
        setIsModalOpen(false);
    }
    const stopPropagation = (event) => {
        event.stopPropagation();
    }
    return (
        <>
            {isModalOpen && (
                <div className="modal" onClick={handleCloseModal}>
                    <div className="content" onClick={stopPropagation}>
                        <div className="header"/>
                        <div className="inputs">
                            <div className="textInput">
                                <span className="textBeforeInput">Hours:</span>
                                <input className="input" type="number"/>
                            </div>
                            <div className="textInput">
                                <span className="textBeforeInput">Minutes:</span>
                                <input className="input" type="number"/>
                            </div>
                            <div className="textInput">
                                <span className="textBeforeInput">Seconds:</span>
                                <input className="input" type="number"/>
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
                    <div className="time" onClick={handleOpenModal}>00:00:00</div>
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