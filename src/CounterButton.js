import React, { useRef } from 'react';

function CounterButton() {
    const clickCountRef = useRef(0);

    const handleClick = () => {
        clickCountRef.current += 1;
        alert(`Button clicked ${clickCountRef.current} times`);
    };

    return (
        <button onClick={handleClick}>
        Click me!
        </button>
    );
}

export default CounterButton;
