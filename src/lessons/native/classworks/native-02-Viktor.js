const students = [
    {
        name: 'Bob',
        age: 17,
        isMarried: true,
        scores: 85,
        getName: () => {
        }
    },
    {
        name: 'Alex',
        age: 21,
        isMarried: true,
        scores: 89,
    },
    {
        name: 'Nick',
        age: 16,
        isMarried: false,
        scores: 120,
    },
    {
        name: 'John',
        age: 19,
        isMarried: false,
        scores: 100,
    },
]

console.log(students)
// students[0].getName().name

const newArrayByLiteral = []
const newArrayByConstructorFunction = new Array(5) // Array of 5 undefined elements.
console.log(newArrayByLiteral, newArrayByConstructorFunction)

console.log(Array)
console.dir(Array)

console.dir(newArrayByLiteral.__proto__)
console.dir(newArrayByLiteral.__proto__ === Array.prototype) // true

Array.prototype.hey = function () {
    // alert('Hey')
    console.log('Hey')
}

newArrayByLiteral.hey()

const charArray = Array.from('Test.')
console.log(charArray) // ['T', 'e', etc...

console.log(typeof charArray)
console.log(Array.isArray(charArray))

function customLength() {
    // this - тот, кто вызовет эту функцию.
    return `Длина массива равна ${this.length}.`
}

Array.prototype.customLength = customLength
newArrayByLiteral.push(1, 2, 3)
console.log(newArrayByLiteral.customLength())

Array.prototype.customMap = function (callback) {
    const result = new Array()

    for (let index = 0; index < this.length; index++) {
        result[index] = callback(this[index])
        // result.push(callback(this[index]))
    }

    return result
}

console.log([1, 2, 3, 4, 5].customMap(number => String(number)));
console.log('Original students: ', students)
console.log('Custom mapped students: ', students.customMap(student => ({...student, scores: student.scores + 10})))

Array.prototype.customFilter = function (predicateIsStudentOlderThan18) {
    const result = new Array()

    for (let index = 0; index < this.length; index++) {
        if (predicateIsStudentOlderThan18(this[index])) result.push(this[index])
    }

    return result
}

console.log('Original students: ', students)
console.log('Custom filtered students: ', students.customFilter(student => student.age > 18))

Array.prototype.customSearch = function (predicateSearch1stElementEntry) {
    for (let index = 0; index < this.length; index++) {
        if (predicateSearch1stElementEntry(this[index])) return this[index]
    }

    return undefined
}

console.log('Search 1st Nick from students: ', students.customSearch(student => student.name === 'Nick'));