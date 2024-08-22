import React, { useState } from 'react';
import Receive from '../Receive/Receive';
import Display from '../Display/Display';

function Parent() {
    const [dataFromReceive, setDataFromReceive] = useState('');

    const handleDataFromReceive = (data) => {
        setDataFromReceive(data);
    };

    return (
        <div>
            <h1>Parent Component</h1>
            <Receive sendDataToParent={handleDataFromReceive} />
            <Display data={dataFromReceive} />
        </div>
    );
}

export default Parent;
