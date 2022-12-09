import './App.css';

const App = () => {
    const isModalOpen = true;
    return (
        <>
            {isModalOpen && (
                <div className="modal">
                    <div className="content">
                        <div className="header">Time</div>
                        <div className="inputs">
                            <div className="textInput">
                                <span className="textBeforeInput">Hours:</span>
                                <input className="input"/>
                            </div>
                            <div className="textInput">
                                <span className="textBeforeInput">Minutes:</span>
                                <input className="input"/>
                            </div>
                            <div className="textInput">
                                <span className="textBeforeInput">Seconds:</span>
                                <input className="input"/>
                            </div>
                        </div>
                        <div className="buttons">
                            <div className="btnTime applyBtn">Apply</div>
                            <div className="btnTime cancelBtn">Cancel</div>
                        </div>
                    </div>
                </div>
            )}
            <div className="container">
                <div className="wrapper">
                    <div className="time">00:00:00</div>
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