import React, {useState} from 'react'

type ValueType = 0 | 1 | 2 | 3 | 4 | 5

type StarPropsType = {
    selected: boolean
    onClickHandler: () => void
}

export const UncontrolledRating = () => {
    const [value, setValue] = useState<ValueType>(0)

    const onClickHandler = (value: ValueType) => {
        setValue(value)
    }

    return <div>
        <Star onClickHandler={() => onClickHandler(1)} selected={value > 0}/>
        <Star onClickHandler={() => onClickHandler(2)} selected={value > 1}/>
        <Star onClickHandler={() => onClickHandler(3)} selected={value > 2}/>
        <Star onClickHandler={() => onClickHandler(4)} selected={value > 3}/>
        <Star onClickHandler={() => onClickHandler(5)} selected={value > 4}/>
    </div>
}

const Star = ({onClickHandler, selected}: StarPropsType) => <span
    onClick={onClickHandler}
    style={{
        fontWeight: selected ? '900' : 'normal',
        cursor: 'pointer'
    }}>Star {selected && '*'}</span>