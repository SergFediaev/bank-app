export type UsersType = {
    [key: string]: { id: number, name: string }
}

const usersObject: UsersType = {
    '101': {id: 101, name: 'Dymich'},
    '3': {id: 3, name: 'Natasha'},
    '112301': {id: 112301, name: 'Valera'},
    '1': {id: 1, name: 'Katya'},
}

const newUserFromServer = {id: 1324, name: 'New user from server'}
usersObject[newUserFromServer.id] = newUserFromServer
console.log(usersObject)