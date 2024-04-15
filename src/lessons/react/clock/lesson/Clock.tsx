import {useEffect, useState} from 'react'
import {DigitalClockView} from './DigitalClockView'
import {AnalogClockView} from './AnalogClockView'

type ClockPropsType = { mode?: 'digital' | 'analog' }

export const Clock = ({mode = 'digital'}: ClockPropsType) => {
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

    let view
    switch (mode) {
        case 'analog':
            view = <AnalogClockView date={date}/>
            break
        case 'digital':
        default:
            view = <DigitalClockView date={date}/>
    }

    return <div>{view}</div>
}

export type ClockViewPropsType = {
    date: Date
}