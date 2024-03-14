import React, {memo, useState} from 'react'

type ValueType = 0 | 1 | 2 | 3 | 4 | 5

type StarPropsType = {
    selected: boolean
    onClickHandler: () => void
}

export const UncontrolledRating = ({defaultValue, onChange}: {
    defaultValue?: ValueType,
    onChange?: (value: ValueType) => void
}) => {
    const [value, setValue] = useState<ValueType>(defaultValue ? defaultValue : 0)
    const [rated, setRated] = useState<boolean>(false)

    const onClickHandler = (value: ValueType, isRated?: boolean) => {
        if (onChange) onChange(value)
        setRated(isRated ?? false)
        setValue(value)
    }

    return <div>
        <StarMemo onClickHandler={() => onClickHandler(rated ? 0 : 1, !rated)} selected={value > 0}/>
        <StarMemo onClickHandler={() => onClickHandler(2)} selected={value > 1}/>
        <StarMemo onClickHandler={() => onClickHandler(3)} selected={value > 2}/>
        <StarMemo onClickHandler={() => onClickHandler(4)} selected={value > 3}/>
        <StarMemo onClickHandler={() => onClickHandler(5)} selected={value > 4}/>
    </div>
}

const Star = ({onClickHandler, selected}: StarPropsType) => <span
    onClick={onClickHandler}
    style={{
        fontWeight: selected ? '900' : 'normal',
        color: selected ? 'red' : 'black',
        cursor: 'pointer',
    }}>Star {selected && '* '}</span>

const StarMemo = memo(Star)