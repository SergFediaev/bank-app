import React, {ChangeEvent, MouseEvent, useState} from 'react';

type FullInputPropsType = {
    addMessage: (value: string) => void
}

export const FullInput = (props: FullInputPropsType) => {
    let [title, setTitle] = useState('')
    console.log('useState title: ', title)

    const onChangeInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
        // console.log(event.currentTarget.value)
        setTitle(event.currentTarget.value)
        // console.log('useState title: ', title)
    }

    const onClickButtonHandler = (event: MouseEvent<HTMLButtonElement>) => {
        // debugger
        props.addMessage(title)
        setTitle('')
    }

    return <div>
        <input onChange={onChangeInputHandler} value={title}/>
        <button onClick={onClickButtonHandler}>+</button>
    </div>
}