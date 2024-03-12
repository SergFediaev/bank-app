import {Select} from './Select'
import {selectItems} from '../../../App'
import {action} from '@storybook/addon-actions'
import {useState} from 'react'

export default {
    title: 'Select homework',
    component: Select,
}

export const ClickableSelectMenu = () => {
    const [selectedValue, setSelectedValue] = useState(2)

    const onChangeHandler = (value: any) => {
        action(`Item value: ${value} selected!`)
        setSelectedValue(value)
    }

    return <Select
        value={selectedValue}
        onChange={onChangeHandler}
        items={selectItems}
    />
}