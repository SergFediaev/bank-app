import {ChangeEvent, useRef, useState} from 'react'
import {action} from '@storybook/addon-actions'

export default {
    title: 'Inputs',
}

const onChangeHandler = action('Element wanna change value!')

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

export const ControlledInput = () => {
    const [parentValue, setParentValue] = useState<string>('')

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setParentValue(event.currentTarget.value)

    return <input
        value={parentValue}
        onChange={onChangeHandler}
    />
}

export const ControlledCheckbox = () => {
    const [parentValue, setParentValue] = useState<boolean>(true)

    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => setParentValue(event.currentTarget.checked)

    return <input
        type="checkbox"
        checked={parentValue}
        onChange={onChangeHandler}
    />
}

export const ControlledSelect = () => {
    const [parentValue, setParentValue] = useState<string | undefined>('2')

    const onChangeHandler = (event: ChangeEvent<HTMLSelectElement>) => setParentValue(event.currentTarget.value)

    return <select
        value={parentValue}
        onChange={onChangeHandler}
    >
        <option>None</option>
        <option value="1">Minsk</option>
        <option value="2">Moscow</option>
        <option value="3">Kiev</option>
    </select>
}

export const ControlledInputWithFixedValue = () => <input value={'it-incubator.by'}/>