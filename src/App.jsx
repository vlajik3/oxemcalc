import React from 'react';
import style from './App.module.scss';
import Slider from './components/slider/Slider';

function App() {
    return (
        <div className={style.app}>
            <Slider min={1} max={100} />
        </div>
    );
}

export default App;
