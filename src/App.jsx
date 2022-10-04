import React from 'react';
import style from './App.module.scss';
import Slider from './components/slider/Slider';

function App() {
    return (
        <body className={style.app}>
            <Slider min={1} max={100} />
        </body>
    );
}

export default App;
