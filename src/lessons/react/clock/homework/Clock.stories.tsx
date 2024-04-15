import {Clock} from '../lesson/Clock'

export default {
    title: 'Clock lesson',
    component: Clock,
}

export const BaseAnalogClockExample = () => {
    return <Clock mode="analog"/>
}

export const BaseDigitalClockExample = () => {
    return <Clock mode="digital"/>
}