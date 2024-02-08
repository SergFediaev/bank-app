import React from "react";
import {MoneyType} from "./FilterClasswork";
import {Button, ButtonType} from "../buttons/Button";

type FilterHomeworkPropsType = {
    money: Array<MoneyType>
    buttons: Array<ButtonType>
    // onClickFilterHandler: (name: string) => void
}

export const FilterHomework = (props: FilterHomeworkPropsType) => {
    return <>
        <ul>
            {props.money.map((item, index) => {
                return <li key={index}>
                    <span>{item.banknote} </span>
                    <span>{item.nominal} </span>
                    <span>{item.number}</span>
                </li>
            })}
        </ul>
        {props.buttons.map((button, index) => <Button key={index} name={button.name}
                                                      callback={button.callback}/>)}
    </>
};