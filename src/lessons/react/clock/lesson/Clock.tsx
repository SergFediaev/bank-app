import {useEffect, useState} from 'react'

type ClockPropsType = {}

const get2DigitsString = (number: number) => number < 10 ? '0' + number : number

export const Clock = (props: ClockPropsType) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('Tick')
            setDate(new Date())
        }, 1_000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    return <div>
        <span>{get2DigitsString(date.getHours())}</span>
        :
        <span>{get2DigitsString(date.getMinutes())}</span>
        :
        <span>{get2DigitsString(date.getSeconds())}</span>
    </div>
}