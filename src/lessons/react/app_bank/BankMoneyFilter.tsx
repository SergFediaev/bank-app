import React from "react";
import {InputMoneyType} from "./Bank";
import {BankButton, ButtonType} from "./BankButton";

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
    {props.buttons.map((button, index) => <BankButton key={index} name={button.name}
                                                      callback={button.callback}/>)}
</>