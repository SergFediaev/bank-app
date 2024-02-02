import {multiply, splitIntoWords, sum} from "./01";

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be correct', () => {
    // Initial data.
    // const a = 1;
    // const b = 2;
    // const c = 3;

    // Test action.
    const result1 = sum(a, b);
    const result2 = sum(b, c);

    // Expected result.
    expect(result1).toBe(3);
    expect(result2).toBe(5);
})

test('multiply should be correct', () => {
    // Test action.
    const result1 = multiply(a, b);
    const result2 = multiply(b, c);

    // Expected result.
    expect(result1).toBe(2);
    expect(result2).toBe(6);
})

test('splitting into words should be correct', () => {
    const sentence1 = "Hello my friends!"
    const sentence2 = "JS - the best  programming language."

    const result1 = splitIntoWords(sentence1)
    const result2 = splitIntoWords(sentence2)

    expect(result1.length).toBe(3)
    expect(result1[0]).toBe("hello")
    expect(result1[1]).toBe("my")
    expect(result1[2]).toBe("friends")

    expect(result2.length).toBe(5)
    expect(result2[0]).toBe("js")
    expect(result2[1]).toBe("the")
    expect(result2[2]).toBe("best")
    expect(result2[3]).toBe("programming")
    expect(result2[4]).toBe("language")
})