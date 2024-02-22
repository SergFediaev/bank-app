import React, {useState} from 'react'

type ValueType = 0 | 1 | 2 | 3 | 4 | 5

type StarPropsType = {
    selected: boolean
    onClickHandler: () => void
}

export const UncontrolledRating = () => {
    const [value, setValue] = useState<ValueType>(0)
    const [rated, setRated] = useState<boolean>(false)

    const onClickHandler = (value: ValueType, isRated?: boolean) => {
        setRated(isRated ?? false)
        setValue(value)
    }

    return <div>
        <Star onClickHandler={() => onClickHandler(rated ? 0 : 1, !rated)} selected={value > 0}/>
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
        color: selected ? 'red' : 'black',
        cursor: 'pointer',
    }}>Star {selected && '* '}</span>