import React, { useEffect, useState } from 'react';
import s from './Slider.module.scss';

const Slider = ({ min, max, step, title, description }) => {
    const [value, setValue] = useState(min);

    const handleChange = (e) => {
        if (e.target.value < min && e.target.value !== '') {
            setValue(min);
        } else if (e.target.value > max && e.target.value !== '') {
            setValue(max);
        } else {
            setValue(e.target.value);
        }
    };

    return (
        <div className={s.slidercontainer}>
            <h3>{title}</h3>
            <span>₽</span>
            <input type="number" className={s.input_number} value={value} onChange={handleChange} />
            <input
                type={'range'}
                min={min}
                max={max}
                value={value || 0}
                step={step}
                onChange={handleChange}
                className={s.input}
            />
            <h4>
                {description}
                <br />
                {value || 0} ₽
            </h4>
        </div>
    );
};

export default Slider;
