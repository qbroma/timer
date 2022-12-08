import './App.css';

const App = () => {
    const isModalOpen = false;
    return (
        <>
            {isModalOpen && (
                <div className="modal">
                    <div className="content">

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