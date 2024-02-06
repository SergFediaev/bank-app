import React, {useState} from 'react';
import {BankMoneyFilter} from "./BankMoneyFilter";
import {ButtonType} from "../buttons/Button";

type MoneyType = {
    banknote: string
    nominal: number
    number: string
}

export type InputMoneyType = Array<MoneyType>

type FilterType = 'all' | 'dollar' | 'ruble' | 'euro'

export const Bank = (props: { inputMoney: InputMoneyType }) => {
    const [money] = useState<InputMoneyType>(props.inputMoney);
    const filterButtons: Array<ButtonType> = [
        {
            name: "All",
            callback: () => onClickFilterHandler("all"),
        },
        {
            name: "Rubles",
            callback: () => onClickFilterHandler("ruble"),
        },
        {
            name: "Dollars",
            callback: () => onClickFilterHandler("dollar"),
        },
        {
            name: "Euro",
            callback: () => onClickFilterHandler("euro"),
        },
    ]

    let currentMoney: InputMoneyType;
    const [filter, setFilter] = useState<FilterType>("all")

    switch (filter) {
        case "dollar":
            currentMoney = money.filter(filteredMoney => filteredMoney.banknote === "dollar")
            break;
        case "ruble":
            currentMoney = money.filter(filteredMoney => filteredMoney.banknote === "ruble")
            break;
        case "euro":
            currentMoney = money.filter(filteredMoney => filteredMoney.banknote === "euro")
            break;
        default:
            currentMoney = money;
            break;
    }

    const onClickFilterHandler = (filterName: FilterType) => setFilter(filterName)

    return <BankMoneyFilter money={currentMoney} buttons={filterButtons}/>
};