import React, { useEffect, useState } from 'react';
import s from './Slider.module.scss';

const Slider = ({ min, max }) => {
    const [value, setValue] = useState(0);

    return (
        <div className={s.slidercontainer}>
            <input
                type={'range'}
                min={min}
                max={max}
                value={value}
                step={1}
                className={s.slider}
                onChange={(e) => setValue(e.target.value)}
            />
            {value}
        </div>
    );
};

export default Slider;
