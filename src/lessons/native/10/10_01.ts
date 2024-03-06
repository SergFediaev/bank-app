export type UserType = {
    name: string;
    hair: number;
    address: {
        city: string
        house?: number
    };
}

export type UserWithSkills = {
    name: string
    skills: {
        html: number
        css: number
        js: number
        ts: number
    }
}

export type LaptopType = {
    title: string
}

export  type UserWithLaptopType = UserType & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType & {
    books: string[]
}

export type WithCompaniesType = {
    companies: CompanyType[]
}

export type CompanyType = {
    id?: number
    title: string
}

export function makeHairStyle(u: UserType, power: number) {
    const userCopy = {
        ...u,
        hair: u.hair / power,
    }

    // userCopy.hair = u.hair / power

    return userCopy
}

export function moveUser(user: UserWithLaptopType, city: string): UserWithLaptopType {
    return {
        ...user, address: {
            ...user.address, city,
        },
    }
}

export function moveUserToOtherHouse(user: UserWithLaptopType & UserWithBooksType, house: number) {
    return {
        ...user, address: {
            ...user.address, house,
        },
    }
}

export const upgradeUserLaptop = (user: UserWithLaptopType, title: string): UserWithLaptopType => ({
    ...user, laptop: {
        ...user.laptop, title,
    },
})

export const addNewBooksToUser = (user: UserWithLaptopType & UserWithBooksType, books: string[]) => ({
    ...user, books: [
        ...user.books, ...books,
    ],
})

export const updateBook = (user: UserWithLaptopType & UserWithBooksType, originalBook: string, newBook: string) => ({
    ...user, books: user.books.map(book => book === originalBook ? newBook : book),
})

export const updateUserSkill = (user: UserWithSkills, skill: string, level: number) => ({
    ...user, skills: {
        ...user.skills, [skill]: level,
    },
})

export const removeBook = (user: UserWithLaptopType & UserWithBooksType, bookToRemove: string) => ({
    ...user, books: user.books.filter(book => book !== bookToRemove),
})

export const addCompany = (user: UserWithLaptopType & WithCompaniesType, company: CompanyType) => ({
    ...user, companies: [...user.companies, {id: ++user.companies.length, ...company}],
})

export const updateCompany = (user: WithCompaniesType, id: number, title: string) => ({
    ...user, companies: user.companies.map(company => company.id === id ? {...company, title} : company),
})

export const updateCompanyAssociative = (companies: { [key: string]: CompanyType[] },
                                         userName: string,
                                         companyId: number,
                                         newTitle: string) => {
    let companyCopy = {...companies}
    companyCopy[userName] = companyCopy[userName].map(company => company.id === companyId ? {
        ...company,
        title: newTitle,
    } : company)

    return companyCopy
}