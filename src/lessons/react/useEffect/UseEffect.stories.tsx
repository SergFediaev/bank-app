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

export const SetTimeoutExample = () => {
    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    console.log('SetTimeoutExample')

    /*    useEffect(() => {
            setTimeout(() => {
                console.log('setTimeout')
                document.title = counter.toString()
            }, 1_000)
        }, [counter])*/

    useEffect(() => {
        setInterval(() => {
            console.log('setTimeout tick: ', counter)
            // setCounter(counter + 1) // Из-за замыкания counter зациклится на значении 1 каждую секунду.
            setCounter((state) => state + 1) // Реакт всегда передаёт актуальное состояние в переменную state.
        }, 1_000)
    }, [])

    return <>
        Hello, counter: {counter}, fake: {fake}
        {/*<button onClick={() => setCounter(counter + 1)}>Counter +</button>*/}
        {/*<button onClick={() => setFake(fake + 1)}>Fake +</button>*/}
    </>
}

export const TimeHomework = () => {
    const [time, setTime] = useState('00:00:00')

    useEffect(() => {
        setInterval(() => {
            console.log('TimeHomework useEffect date')
            const date = new Date()
            const finalTime = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`
            setTime(finalTime)
        }, 1_000)
    }, [])

    return <>Time: {time}</>
}