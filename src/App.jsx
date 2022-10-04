import React from 'react';
import style from './App.module.scss';
import Slider from './components/slider/Slider';

function App() {
    return (
        <body className={style.app}>
            <Slider
                min={1000000}
                max={6000000}
                step={100000}
                title={'Стоимость автомобиля'}
                description={'Сумма договора лизинга'}
            />
        </body>
    );
}

export default App;
