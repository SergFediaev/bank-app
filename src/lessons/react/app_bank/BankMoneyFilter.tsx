import React from "react";
import {Button, ButtonType} from "../buttons/Button";
import {InputMoneyType} from "./Bank";

type FilterHomeworkPropsType = {
    money: InputMoneyType
    buttons: Array<ButtonType>
}

export const BankMoneyFilter = (props: FilterHomeworkPropsType) => <>
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