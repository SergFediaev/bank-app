import React, {useState} from 'react';

export const UseState = () => {
    // let a = 1;
    let [a, setA] = useState(1)

    const onNumberClickHandler = () => {
        setA(++a)
        console.log(a)
    }

    const resetCounter = () => {
        setA(0)
    }

    return <>
        <h1>{a}</h1>
        <button onClick={onNumberClickHandler}>++</button>
        <button onClick={resetCounter}>0</button>
    </>
};