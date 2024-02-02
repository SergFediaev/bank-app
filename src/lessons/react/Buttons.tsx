import React, {MouseEvent} from 'react';

type ButtonPropsType = {
    name: string
    callBack: () => void
}

export const Button = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callBack()
        // console.log("Subscriber name: ")
    }

    return <button onClick={onClickHandler}>{props.name}</button>
};

export const Buttons = () => {

    const myFirstSubscriber = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("Hello im subscriber")
    }

    const subscribe = (event: MouseEvent<HTMLButtonElement>) => {
        console.log("New subscriber name: Ivan")
    }

    const onClickHandler = (name: string) => {
        console.log(name)
    }

    const forOne = () => {
        console.log(100200)
    }

    const forTwo = (number: number) => {
        console.log(number)
    }

    const buttonOneFun = (name: string) => {
        console.log(name)
    }

    const buttonTwoFun = (name: string, age: number) => {
        console.log(name, age)
    }

    const buttonThreeFun = () => {
        console.log("Just button")
    }

    return <>
        <button onClick={(event) => {
        }}>YouTube channel 1
        </button>

        <button onClick={subscribe}>YouTube channel 2
        </button>

        <button onClick={(event: MouseEvent<HTMLButtonElement>) => onClickHandler("Petya")}>YouTube channel 2
        </button>

        <button onClick={() => onClickHandler("Serg")}>Subscribe on YouTube channel</button>

        <button onClick={forOne}>1</button>
        <button onClick={() => forTwo(100200)}>2</button>

        <Button name="YouTube channel 1" callBack={() => buttonOneFun("Vasya")}/>

        <Button name="YouTube channel 2" callBack={() => buttonTwoFun("Petya", 21)}/>

        <Button name="Just button" callBack={() => buttonThreeFun()}/>
    </>
};