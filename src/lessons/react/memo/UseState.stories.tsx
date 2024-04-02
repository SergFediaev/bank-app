import React, {useState} from 'react'

export default {
    title: 'useState demo',
}

function generateDate() {
    // Heavy calculating.
    console.log(generateDate)
    return 1
}

export const Example1 = () => {
    console.log('useState demo rendering!')
    // const initValue = generateDate()
    // const initValue = useMemo(generateDate, [])
    const [counter, setCounter] = useState(generateDate)

    const changer = (state: number) => {
        return state + 1
    }

    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}