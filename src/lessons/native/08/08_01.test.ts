import {UsersType} from './08'

let usersObject: UsersType

beforeEach(() => {
    usersObject = {
        '101': {id: 101, name: 'Dymich'},
        '3': {id: 3, name: 'Natasha'},
        '112301': {id: 112301, name: 'Valera'},
        '1': {id: 1, name: 'Katya'},
    }
})

test('should update corresponding user', () => {
    usersObject[1].name = 'Ekaterina'

    expect(usersObject[1].name).toBe('Ekaterina')
    expect(usersObject[1]).toEqual({id: 1, name: 'Ekaterina'})
})

test('should delete corresponding user', () => {
    delete usersObject[1]

    expect(usersObject[1]).toBeUndefined()
})