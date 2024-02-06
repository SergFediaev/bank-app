import React from "react";

export type ButtonType = {
    name: string
    callback: () => void
}

export const BankButton = (props: ButtonType) => {
    const onClickHandler = () => {
        props.callback()
    }

    return <button onClick={onClickHandler}>{props.name}</button>
};