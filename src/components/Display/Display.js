import React from 'react';

function Receive({ data }) {
    return (
        <div>
            <h2>Child B</h2>
            <p>Received Data: {data}</p>
        </div>
    );
}

export default Receive;

