import React, {memo, useState} from 'react'

type ValueType = 0 | 1 | 2 | 3 | 4 | 5

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

export const LessonUncontrolledRating = () => {
    const [value, setValue] = useState<ValueType>(0)

    return <div>
        <StarMemo selected={value > 0} setValue={() => setValue(1)}/>
        <StarMemo selected={value > 1} setValue={() => setValue(2)}/>
        <StarMemo selected={value > 2} setValue={() => setValue(3)}/>
        <StarMemo selected={value > 3} setValue={() => setValue(4)}/>
        <StarMemo selected={value > 4} setValue={() => setValue(5)}/>
    </div>
}

function Star({selected, setValue}: StarPropsType) {
    return <span onClick={setValue}>{selected ? <b>Star * </b> : 'Star '}</span>
}

const StarMemo = memo(Star)