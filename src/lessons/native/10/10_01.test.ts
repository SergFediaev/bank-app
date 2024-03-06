import {
    addCompany,
    addNewBooksToUser,
    makeHairStyle,
    moveUser,
    moveUserToOtherHouse,
    removeBook,
    updateBook,
    updateCompany,
    updateCompanyAssociative,
    updateUserSkill,
    upgradeUserLaptop,
    UserType,
    UserWithBooksType,
    UserWithLaptopType,
    UserWithSkills,
    WithCompaniesType,
} from './10_01'

test('Reference type test', () => {
    let user: UserType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
        },
    }

    const awesomeUser = makeHairStyle(user, 2)

    // user = awesomeUser

    expect(user.hair).toBe(32)
    expect(awesomeUser.hair).toBe(16)
    expect(awesomeUser.address).toBe(user.address)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook',
        },
    }

    const movedUser = moveUser(user, 'Kiev')

    expect(user).not.toBe(movedUser)
    expect(user.address).not.toBe(movedUser.address)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(movedUser.address.city).toBe('Kiev')
})

test('upgrade laptop to macbook', () => {
    let user: UserWithLaptopType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook',
        },
    }

    const userWithUpgradedLaptop = upgradeUserLaptop(user, 'Macbook')

    expect(user).not.toBe(userWithUpgradedLaptop)
    expect(user.address).toBe(userWithUpgradedLaptop.address)
    expect(user.laptop).not.toBe(userWithUpgradedLaptop.laptop)
    expect(user.laptop.title).toBe('ZenBook')
    expect(userWithUpgradedLaptop.laptop.title).toBe('Macbook')
})

test('move user with books to other house', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook',
        },
        books: ['css', 'html', 'js', 'react'],
    }

    const movedUser = moveUserToOtherHouse(user, 99)

    expect(user).not.toBe(movedUser)
    expect(user.books).toBe(movedUser.books)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(user.address).not.toBe(movedUser.address)
    expect(movedUser.address.house).toBe(99)
})

test('add new books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook',
        },
        books: ['css', 'html', 'js', 'react'],
    }

    const movedUser = addNewBooksToUser(user, ['ts', 'rest api'])

    expect(user).not.toBe(movedUser)
    expect(user.laptop).toBe(movedUser.laptop)
    expect(user.address).toBe(movedUser.address)
    expect(user.books).not.toBe(movedUser.books)
    expect(movedUser.books[4]).toBe('ts')
    expect(movedUser.books[5]).toBe('rest api')
})

test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook',
        },
        books: ['css', 'html', 'js', 'react'],
    }

    const userCopy = updateBook(user, 'js', 'ts')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('ts')
})

test(`update user skill`, () => {
    const user: UserWithSkills = {
        name: 'Ivan',
        skills: {
            html: 100,
            css: 80,
            js: 40,
            ts: 27,
        },
    }

    const copyUser = updateUserSkill(user, 'js', 66)

    expect(user).not.toBe(copyUser)
    expect(user.skills).not.toBe(copyUser.skills)
    expect(user.skills.js).toBe(40)
    expect(copyUser.skills.js).toBe(66)
})

test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook',
        },
        books: ['css', 'html', 'js', 'react'],
    }

    const userCopy = removeBook(user, 'js')

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.books).not.toBe(userCopy.books)
    expect(userCopy.books[2]).toBe('react')
})

test('user add company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook',
        },
        companies: [
            {
                id: 1,
                title: 'Epam',
            },
            {
                id: 2,
                title: 'IT-Incubator',
            },
        ],
    }

    const userCopy = addCompany(user, {title: 'Google'})

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[2].id).toBe(3)
    expect(userCopy.companies[2].title).toBe('Google')
})

test('update company', () => {
    let user: UserWithLaptopType & WithCompaniesType = {
        name: 'Dymich',
        hair: 32,
        address: {
            city: 'Minsk',
            house: 12,
        },
        laptop: {
            title: 'ZenBook',
        },
        companies: [
            {
                id: 1,
                title: 'Epam',
            },
            {
                id: 2,
                title: 'IT-Incubator',
            },
        ],
    }

    const userCopy = updateCompany(user, 1, 'EPAM') as UserWithLaptopType & WithCompaniesType

    expect(user).not.toBe(userCopy)
    expect(user.laptop).toBe(userCopy.laptop)
    expect(user.address).toBe(userCopy.address)
    expect(user.companies).not.toBe(userCopy.companies)
    expect(userCopy.companies[0].id).toBe(1)
    expect(userCopy.companies[0].title).toBe('EPAM')
})

test('update company associative', () => {
    let companies = {
        'Dimych': [
            {
                id: 1,
                title: 'Epam',
            },
            {
                id: 2,
                title: 'IT-Incubator',
            },
        ],
        'Artem': [{id: 1, title: 'IT-INCUBATOR'}],
    }

    const copy = updateCompanyAssociative(companies, 'Dimych', 1, 'EPAM')

    expect(copy['Dimych']).not.toBe(companies['Dimych'])
    expect(copy['Artem']).toBe(companies['Artem'])
    expect(copy['Dimych'][0].title).toBe('EPAM')
})