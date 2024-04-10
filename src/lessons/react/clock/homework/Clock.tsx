import {useEffect, useState} from 'react'
import s from './Clock.module.css'

const get2DigitsString = (number: number) => number < 10 ? '0' + number : number

export const Clock = () => {
    const [date, setDate] = useState<Date>(new Date())
    const [isAnalogMode, setIsAnalogMode] = useState<boolean>(true)

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('Tick')
            setDate(new Date())
        }, 1_000)

        return () => {
            clearInterval(intervalId)
        }
    }, [])

    const toggleMode = () => setIsAnalogMode(!isAnalogMode)

    const renderDigitalClock = () => <div>
        <span>{get2DigitsString(date.getHours())}</span>:
        <span>{get2DigitsString(date.getMinutes())}</span>:
        <span>{get2DigitsString(date.getSeconds())}</span>
    </div>

    const renderAnalogClock = () => {
        const hourRotation = (date.getHours() % 12) * 30 + date.getMinutes() / 2
        const minuteRotation = date.getMinutes() * 6 + date.getSeconds() / 10
        const secondRotation = date.getSeconds() * 6

        return <div className={s.analogClock}>
            <div className={s.hourHand}
                 style={{transform: `translate(-50%, -100%) rotate(${hourRotation}deg)`}}/>
            <div className={s.minuteHand}
                 style={{transform: `translate(-50%, -100%) rotate(${minuteRotation}deg)`}}/>
            <div className={s.secondHand}
                 style={{transform: `translate(-50%, -100%) rotate(${secondRotation}deg)`}}/>
        </div>
    }

    return <div>
        {isAnalogMode ? renderAnalogClock() : renderDigitalClock()}
        <button onClick={toggleMode}>{isAnalogMode ? 'Switch to Digital' : 'Switch to Analog'}</button>
    </div>
}