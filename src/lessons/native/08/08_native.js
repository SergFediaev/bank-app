let user = {
    name: 'Dymich',
    age: 12,
    address: {
        city: {
            title: 'Minsk',
        },
    },
}

console.log(user.address.city.title)

console.log(user['address']['city']['title'])

const users = ['Ivan', 'Vasya']

console.log(users['1'])
console.log(users['map']((user) => user.toUpperCase()))

let objectWithNumberNameAndValue = {1: 1}
console.log(objectWithNumberNameAndValue)

let usersObject = {
    '0': 'Dymich',
    '1': 'Natasha',
    '2': 'Valera',
    '3': 'Katya',
}

console.log(usersObject[1])
console.log(usersObject['1'])

console.log(usersObject['Название свойства с пробелами '] = 'Значение')
console.log(usersObject?.['Название свойства с пробелами '])

const newObject = new Object('Value')
console.log(newObject)

usersObject[{test: 'Test value'}] = 'Object as key in object'
usersObject[{
    newTest: 'New test value', toString() {
        return 'Переопределённое значение метода toString()'
    }
}] = 'Object as key in object'
usersObject[undefined] = 'Undefined as key in object'
usersObject[null] = 'Null as key in object'
usersObject[NaN] = 'NaN as key in object'
usersObject[Infinity] = 'Infinity as key in object'
console.log(usersObject)

const associateArray = {
    '101': {id: 101, name: 'Dymich'},
    '3': {id: 3, name: 'Natasha'},
    '112301': {id: 112301, name: 'Valera'},
    '1': {id: 1, name: 'Katya'},
}

const newUserFromServer = {id: 1324, name: 'New user from server'}
usersObject[newUserFromServer.id] = newUserFromServer
console.log(usersObject)