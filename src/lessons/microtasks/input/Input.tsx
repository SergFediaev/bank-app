import React, {ChangeEvent} from 'react';

type InputPropsType = {
    setTitle: (title: string) => void
    title: string
}

export const Input = ({setTitle, title}: InputPropsType) => {

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setTitle(event.currentTarget.value)
    }

    return <input value={title} onChange={onChangeInputHandler}/>
}