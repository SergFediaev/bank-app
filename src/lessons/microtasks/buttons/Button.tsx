import React from "react";

export type ButtonType = {
    name: string
    callback: () => void
    // buttonFilter: string
}

export const Button = (props: ButtonType) => {
    const onClickHandler = () => {
        props.callback()
        // console.log("Subscriber name: ")
    }

    return <button onClick={onClickHandler}>{props.name}</button>
};