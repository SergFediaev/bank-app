console.log("TS import value test")

export const value01_01 = "01_01";

export function sum(a: number, b: number) {
    return a + b;
}

export function multiply(a: number, b: number) {
    return a * b;
}

export function splitIntoWords(sentense: string) {
    // return ["hello", "my", "friends"]
    return sentense.toLowerCase().split(" ")
        .filter(word => word !== "" && word !== "-")
        .map(word => word
            .replace("!", "")
            .replace(".", "")
            .replace(",", ""))
}