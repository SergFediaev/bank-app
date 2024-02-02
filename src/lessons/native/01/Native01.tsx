import React from 'react';
import {splitIntoWords, value01_01} from "./01";

const a = value01_01;
const sentence = "Hello my friends!";

const result = splitIntoWords(sentence)
console.log(result)
console.log(result[0] === "hello")
console.log(result[1] === "my")
console.log(result[2] === "friends")

export const Native01 = () => {
    return (
        <div>

        </div>
    );
};