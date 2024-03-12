import {SolutionSelect} from './SolutionSelect'
import {useState} from 'react'

export default {
    title: 'Select solution',
    component: SolutionSelect,
}

export const items = [
    {value: '1', title: 'Minsk'},
    {value: '2', title: 'Moscow'},
    {value: '3', title: 'Kiev'},
]

export const WithValue = () => {
    const [value, setValue] = useState('2')

    return <SolutionSelect
        value={value}
        onChange={setValue}
        items={items}
    />
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)

    return <SolutionSelect
        onChange={setValue}
        value={value}
        items={items}
    />
}