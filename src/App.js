import React, { useState } from 'react';

const ColorToggle = () => {
    const [colors, setColors] = useState({ square1: 'red', square2: 'blue' });

    const toggleColors = (square) => {
        setColors((prevColors) => ({
            ...prevColors,
            [square]: prevColors[square] === 'red' ? 'blue' : 'red',
        }));
    };

    return (
        <div>
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: colors.square1,
                    margin: '10px',
                    cursor: 'pointer',
                }}
                onClick={() => toggleColors('square1')}
            ></div>
            <div
                style={{
                    width: '100px',
                    height: '100px',
                    backgroundColor: colors.square2,
                    margin: '10px',
                    cursor: 'pointer',
                }}
                onClick={() => toggleColors('square2')}
            ></div>
        </div>
    );
};

export default ColorToggle;
