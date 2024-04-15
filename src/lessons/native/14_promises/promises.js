const wait = ms => new Promise(resolve => setTimeout(resolve, ms))

async function run() {
    await wait(1_000)
    console.log(1)
    await wait(1_000)
    console.log(2)
    await wait(1_000)
    console.log(3)
}

run()

// Напишите функцию delay(ms), которая возвращает промис, переходящий в состояние "resolved" через ms миллисекунд.
// Пример использования:
// delay(1000).then(() => alert("Hello!"))

const delay = ms => new Promise(resolved => setTimeout(resolved, ms))
delay(2_000).then(() => console.log('Resolved!'))