import React, {useState} from 'react'

type PropsType = {
    title: string
    man: ManType
    food: Array<string>
    car: {
        title: string,
        model: string
    }
}

function customUseState(msg: string) {
    return [msg, function () {
    }]
}

export const Destructuring: React.FC<PropsType> = ({title, man: {name}, ...props}) => {

    const {food, car, ...restProps} = props
    const restProps2 = {
        food: props.food,
        car: props.car
    }

    // const {title, man: {name}} = props
    // const {title, man} = props
    // const name = man.name

    const [message, setMessage] = useState<string>('Hey')

    const [msg, setMsg] = customUseState('Hello')

    return <div>
        <h1>{title}</h1>
        <hr/>
        <div>{name}</div>
    </div>
}