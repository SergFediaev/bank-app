import React from 'react'

type RatingPropsType = {
    value: 0 | 1 | 2 | 3 | 4 | 5
}

export const Rating = (props: RatingPropsType) => <div>
    <Star selected={props.value > 0}/>
    <button>1</button>
    <Star selected={props.value > 1}/>
    <button>2</button>
    <Star selected={props.value > 2}/>
    <button>3</button>
    <Star selected={props.value > 3}/>
    <button>4</button>
    <Star selected={props.value > 4}/>
    <button>5</button>
</div>

// debugger

type StarPropsType = {
    selected: boolean
}

// const Star = (props: any) => <span>Star *</span>;
function Star(props: StarPropsType) {
    console.log('Star rendering')
    // debugger
    if (props.selected) {
        return <span><b>Star* </b></span>
    } else {
        return <span>Star* </span>
    }
}