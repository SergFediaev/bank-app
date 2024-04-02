import {useEffect, useState} from 'react'

export default {
    title: 'useEffect demo',
}

export const UseEffectExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    console.log('UseEffectExample')

    useEffect(() => {
        console.log('useEffect every render')
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only 1st render (componentDidMount)')
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect 1st render & every counter change')
        document.title = counter.toString()
    }, [counter])

    return <>
        Hello, counter: {counter}, fake: {fake}
        <button onClick={() => setCounter(counter + 1)}>Counter +</button>
        <button onClick={() => setFake(fake + 1)}>Fake +</button>
    </>
}