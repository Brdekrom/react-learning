import React, { useState } from 'react';

function Display({ sendDataToParent }) {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        setInputValue(e.target.value);
        sendDataToParent(e.target.value); 
    };

    return (
        <div>
            <h2>Child A</h2>
            <input
                type="text"
                value={inputValue}
                onChange={handleChange}
                placeholder="Type something..."
            />
        </div>
    );
}

export default Display;
