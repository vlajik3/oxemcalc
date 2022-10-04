import React, { useEffect, useState } from 'react';
import s from './Slider.module.scss';

const Slider = ({ min, max }) => {
    const [value, setValue] = useState(0);

    const handleChange = (e) => {
        if (e.target.value < min && e.target.value !== '') {
            setValue(1);
        } else if (e.target.value > max) {
            setValue(100);
        } else {
            setValue(e.target.value);
        }
    };

    return (
        <div className={s.slidercontainer}>
            <input type="number" className={s.input_number} value={value} onChange={handleChange} />
            <input
                type={'range'}
                min={min}
                max={max}
                value={value || 0}
                step={1}
                onChange={handleChange}
                className={s.input}
            />
            {value || 0}
        </div>
    );
};

export default Slider;
