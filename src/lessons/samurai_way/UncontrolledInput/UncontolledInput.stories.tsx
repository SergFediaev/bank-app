import {ChangeEvent, useRef, useState} from 'react'

export default {
    title: 'UncontrolledInput',
}

export const UncontrolledInput = () => <input/>

export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.currentTarget.value)
    }

    return <>
        <input onChange={onChange}/>
        {value}
    </>
}

export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')

    const inputRef = useRef<HTMLInputElement>(null)

    const save = () => {
        const elementRef = inputRef.current as HTMLInputElement
        setValue(elementRef.value)
    }

    return <>
        <input ref={inputRef}/>
        <button onClick={save}>Save</button>
        Input actual value: {value}
    </>
}

export const ControlledInputWithFixedValue = () => <input value={'it-incubator.by'}/>