import {useMemo, useState} from 'react'

export default {
    title: 'useMemo difficult counting',
}

export const DifficultCountingExample = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1 // чтобы не происходило замыкания.

        for (let i = 1; i <= a; i++) {
            let fake = 0
            while (fake < 100_000_000) {
                fake++
                const fakeValue = Math.random()
            }

            tempResultA *= i
        }

        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={(event) => setA(Number(event.currentTarget.value))}/>
        <input value={b} onChange={(event) => setB(+event.currentTarget.value)}/>
        <hr/>
        <div>Result A: {resultA}</div>
        <div>Result B: {resultB}</div>
    </>
}