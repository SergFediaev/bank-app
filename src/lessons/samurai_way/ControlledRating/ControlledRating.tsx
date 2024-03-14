import React, {memo} from 'react'

export type RatingValueType = 0 | 1 | 2 | 3 | 4 | 5

type RatingPropsType = {
    value: RatingValueType
    onClick: (value: RatingValueType) => void
}

export const ControlledRating = (props: RatingPropsType) => <div>
    <StarMemo selected={props.value > 0} onClick={props.onClick} value={1}/>
    <StarMemo selected={props.value > 1} onClick={props.onClick} value={2}/>
    <StarMemo selected={props.value > 2} onClick={props.onClick} value={3}/>
    <StarMemo selected={props.value > 3} onClick={props.onClick} value={4}/>
    <StarMemo selected={props.value > 4} onClick={props.onClick} value={5}/>
</div>

// debugger

type StarPropsType = {
    selected: boolean
    onClick: (value: RatingValueType) => void
    value: RatingValueType
}

// const Star = (props: any) => <span>Star *</span>;
function Star(props: StarPropsType) {
    console.log('Star rendering')
    // debugger

    return <span onClick={() => {
        props.onClick(props.value)
    }}> {props.selected ? <b>Star * </b> : 'Star '}</span>
}

const StarMemo = memo(Star)