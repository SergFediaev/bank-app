const promise = new Promise((resolve, reject) => {
})

// js 17
const foo2 = newAsync(function* () {
    const dataFromYahoo = yield fetch("https://yahoo.com/?query=js");
    console.log("dataFromYahoo", dataFromYahoo.url);
    return fetch("https://google.com/?query=js");
});

function newAsync(generationFunction) {
    return function () {
        const generator = generationFunction();

        console.log("generator", generator);

        function nextStep(next) {
            if (next.done) {
                return Promise.resolve(next.value);
            }
            return Promise.resolve(next.value).then((res) => {
                return nextStep(generator.next(res));
            });
        }

        return nextStep(generator.next());
    };
}

console.log("start foo2");
foo2();
console.log("end foo2");