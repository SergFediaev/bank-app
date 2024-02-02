import React, {useState} from 'react';
import {Button} from "./Buttons";

type FilterType = 'all' | 'dollar' | 'ruble'

export const Filter = () => {
    const [money, setMoney] = useState([
        {banknote: "dollar", nominal: 100, number: "a123456789"},
        {banknote: "dollar", nominal: 50, number: "b123456789"},
        {banknote: "ruble", nominal: 100, number: "c123456789"},
        {banknote: "dollar", nominal: 100, number: "d123456789"},
        {banknote: "dollar", nominal: 50, number: "e123456789"},
        {banknote: "ruble", nominal: 100, number: "f123456789"},
        {banknote: "dollar", nominal: 50, number: "j123456789"},
        {banknote: "ruble", nominal: 50, number: "h123456789"}
    ])

    // let currentMoney = money.filter(filteredMoney => filteredMoney.banknote === 'ruble')

    // if (buttonName === "All") {
    //
    // } else if (buttonName=== "Rubles") {
    //
    // } else if (buttonName==="Dollars") {
    //
    // }
    let currentMoney = money;

    // let localButtonState;

    const [filter, setFilter] = useState<FilterType>("all")

    if (filter === "dollar") {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === "dollar")
    }

    if (filter === "ruble") {
        currentMoney = money.filter(filteredMoney => filteredMoney.banknote === "ruble")
    }

    // currentMoney = money.filter(filteredMoney => filteredMoney.banknote === filter)

    const onClickFilterHandler = (buttonName: FilterType) => {
        debugger

        // localButtonState = buttonName

        setFilter(buttonName)

        console.log("Отконсолим, отконсолить кнопку: ", buttonName)
        // currentMoney = money.filter(filteredMoney => filteredMoney.banknote === filter.toLowerCase())
        // setMoney(currentMoney)

        // currentMoney = money.filter(filteredMoney => filteredMoney.banknote === filter)
    }

    return <>
        <ul>
            {currentMoney.map((objFromMoneyArr, index) => {
                return (
                    <li key={index}>
                        <span>{objFromMoneyArr.banknote} </span>
                        <span>{objFromMoneyArr.nominal} </span>
                        <span>{objFromMoneyArr.number}</span>
                    </li>
                )
            })}
        </ul>
        {/*<div style={{display: "flex", gap: "30px", justifyContent: "center", marginLeft: "10px"}}>*/}
        <button onClick={() => onClickFilterHandler("all")}>All</button>
        <button onClick={() => onClickFilterHandler("ruble")}>Rubles</button>
        <button onClick={() => onClickFilterHandler("dollar")}>Dollars</button>

        <FilterHomework
            currentMoney={currentMoney}
            buttons={
                [
                    {
                        name: "All",
                        filter: () => onClickFilterHandler("all"),
                    },
                    {
                        name: "Rubles",
                        filter: () => onClickFilterHandler("ruble"),

                    },
                    {
                        name: "Dollars",
                        filter: () => onClickFilterHandler("dollar"),

                    },
                ]
            }/>
    </>
};

type CurrentMoneyType = {
    banknote: string
    nominal: number
    number: string
}

type FilterHomeworkPropsType = {
    currentMoney: Array<CurrentMoneyType>
    buttons: Array<ButtonsType>
    // onClickFilterHandler: (name: string) => void
}

type ButtonsType = {
    name: string
    // buttonFilter: string
    filter: () => void
}

export const FilterHomework = (props: FilterHomeworkPropsType) => {
    return <>
        <ul>
            {props.currentMoney.map((objFromMoneyArr, index) => {
                return <li key={index}>
                    <span>{objFromMoneyArr.banknote} </span>
                    <span>{objFromMoneyArr.nominal} </span>
                    <span>{objFromMoneyArr.number}</span>
                </li>
            })}
        </ul>
        {props.buttons.map((button, index) => <Button key={index} name={button.name} callBack={button.filter}/>)}
    </>
};