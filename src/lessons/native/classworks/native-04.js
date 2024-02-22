function createObject(key, values) {
    let newObj = {}
    newObj[key] = values
    return newObj
}

console.log(createObject('car', 'Audi'))

function createObject2(key, values) {
    return {
        [key]: values
    }
}

console.log(createObject2('car', 'BMW'))


let propertyName = 'age' // это в качестве ключа юзаем.

let person = {
    name: 'Elena', // статическое свойство, которое задали явно.
    [propertyName]: '25' // Динамическое свойство
}

console.log('Person: ', person)

const returnString = (str) => str

const person1 = {
    [returnString('testKey')]: 'testValue'
}

console.log('Person1: ', person1)

let prefix = ' person'

const person3 = {
    ['test' + '_age']: 67,
    ['test ' + prefix]: 'Ivan'
}

console.log('Person 3: ', person3)

let index = 2

let obj = {
    [index + 1]: 'Third element'
}

console.log('Obj: ', obj)

function createObject3(key, values) {
    return {
        [key.toUpperCase()]: values.toUpperCase()
    }
}

console.log(createObject3('car', 'Lada'))

const person3Values = Object.values(person3)

console.log('Person 3 values: ', person3Values)

const STATUS_BUSY = 'busy'
const STATUS_READY = 'ready'

const STATUS_LABELS = {
    [STATUS_BUSY]: 'Waiting',
    [STATUS_READY]: 'Done'
}

const drivers = [
    {name: 'Ivan', status: 'busy'},
    {name: 'Nina', status: 'ready'},
]

const driversStatuses = drivers.map((driver) => {
    const {status} = driver
    console.log('Status: ', status)
    return STATUS_LABELS[status]
})

console.log('Drivers: ', driversStatuses)

const user = {
    name: 'Ivan',
    age: '25',
    isStudent: false,
    city: {
        street: 'Paper st.',
        home: 123,
        family: {
            father: 'Ivan',
            mother: 'Nina'
        }
    }
}

const keys = Object.keys(user)

console.log('User keys: ', keys)

const userValues = Object.values(user)

console.log('User values: ', userValues)

const userEntries = Object.entries(user)
console.log('User entries: ', userEntries)


const map = new Map()
console.log('Map: ', map)

map.set('car', 'Audi')
map.set(true, 'Bolean value')
map.set(1, 'Number value')
map.set('String key', {name: 'Obj value'})
console.log('Map: ', map)


const set = new Set()

console.log(set)

set.add('1')
set.add('3')
set.add('4')
set.add('3')

console.log('Set: ', set)

set.add(1).add(9).add(9).add(0)

const numbers = [1, 2, 2, 3, 4, 5, 5, 5, 6]
const uniqueNumber = [...new Set(numbers)]
console.log('Unique numbers: ', uniqueNumber)