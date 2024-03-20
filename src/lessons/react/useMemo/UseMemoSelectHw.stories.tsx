import {memo, useMemo, useState} from 'react'
import {SolutionSelect} from '../select/solution/SolutionSelect'
import {items} from '../select/solution/SolutionSelect.stories'

export default {
    title: 'Homework: useMemo select',
}

const SelectMemo = memo(SolutionSelect)

export const useMemoSelect = () => {
    console.log('useMemoSelect rendering!')

    const [value, setValue] = useState('2')
    const [counter, setCounter] = useState<number>(0)
    const [cities, setCities] = useState(items)

    const memoFilterM = useMemo(() => cities.filter(city => city.title.indexOf('M') > -1), [cities])

    const memoFilterK = useMemo(() => cities.filter(city => city.title.indexOf('K') > -1), [cities])

    const memoFilterAll = useMemo(() => cities.map(city => city), [cities])

    return <>
        <SelectMemo
            value={value}
            onChange={setValue}
            items={memoFilterM}
        />
        <SelectMemo
            value={value}
            onChange={setValue}
            items={memoFilterK}
        />
        <SelectMemo
            value={value}
            onChange={setValue}
            items={memoFilterAll}
        />
        <button onClick={() => setCounter(counter + 1)}>Increment count: {counter}</button>
    </>
}