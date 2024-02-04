import React, {useState} from 'react';
import {FilterHomework} from "./FilterHomework";

export type MoneyType = {
    banknote: string
    nominal: number
    number: string
}

type FilterType = 'all' | 'dollar' | 'ruble'

export const FilterClasswork = () => {
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

    const onClickFilterHandler = (filterName: FilterType) => {
        debugger

        // localButtonState = filterName

        setFilter(filterName)

        console.log("Отконсолим, отконсолить кнопку: ", filterName)
        // currentMoney = money.filter(filteredMoney => filteredMoney.banknote === filter.toLowerCase())
        // setMoney(currentMoney)

        // currentMoney = money.filter(filteredMoney => filteredMoney.banknote === filter)
    }

    return <>
        {/* Classwork */}
        <>
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
        </>

        {/* Homework*/}
        <>
            <FilterHomework
                money={currentMoney}
                buttons={
                    [
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
                    ]
                }/>
        </>
    </>
};