import React, {useState} from 'react';
import {Input} from "./Input";
import {ButtonInput} from "./ButtonInput";

const InputClasswork = () => {
    const [message, setMessage] = useState([
            {message: 'message1'},
            {message: 'message2'},
            {message: 'message3'},
            {message: 'message4'},
            {message: 'message5'}
        ]
    )

    // let messages = [
    //     ...message
    // ]

    const addMessage = (value: string) => {
        debugger
        // messages.push({message: input})

        const newMessage = {message: value}

        setMessage([
            newMessage,
            ...message
        ])
    }

    let [title, setTitle] = useState('')
    console.log('useState title: ', title)

    const callbackButtonHandler = () => {
        addMessage(title)
        setTitle('')
    }

    return (
        <div className="App">
            <Input title={title} setTitle={setTitle}/><ButtonInput name={'+'} callback={callbackButtonHandler}/>

            {/*<FullInput addMessage={addMessage}/>*/}
            {message.map((el, index) => {
                return (
                    <div key={index}>{el.message}</div>
                )
            })}
        </div>
    )
};

export default InputClasswork;