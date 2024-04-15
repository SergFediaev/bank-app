import {ClockViewPropsType} from './Clock'

const get2DigitsString = (number: number) => number < 10 ? '0' + number : number

export const DigitalClockView = ({date}: ClockViewPropsType) => {
    return <>
        <span>{get2DigitsString(date.getHours())}</span>
        :
        <span>{get2DigitsString(date.getMinutes())}</span>
        :
        <span>{get2DigitsString(date.getSeconds())}</span>
    </>
}