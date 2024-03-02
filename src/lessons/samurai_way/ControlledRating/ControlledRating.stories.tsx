import {ControlledRating, RatingValueType} from './ControlledRating'
import {useState} from 'react'

export default {
    title: 'ControlledRating stories',
    component: ControlledRating,
}

export const EmptyRating = () => <ControlledRating value={0} onClick={() => {
}}/>

export const Rating1 = () => <ControlledRating value={1} onClick={() => {
}}/>

export const Rating2 = () => <ControlledRating value={2} onClick={x => x}/>

export const Rating3 = () => <ControlledRating value={3} onClick={x => x}/>

export const Rating4 = () => <ControlledRating value={4} onClick={x => x}/>

export const Rating5 = () => <ControlledRating value={5} onClick={x => x}/>

export const ChangeableRating = () => {
    const [rating, setRating] = useState<RatingValueType>(3)

    return <ControlledRating value={rating} onClick={setRating}/>
}