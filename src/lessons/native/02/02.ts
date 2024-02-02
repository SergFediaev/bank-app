console.log("test2")

export const value02 = "02";

const nameString = "Name";
const age = 12;
const isStudent = true;

const school = {
    name: "It-incubator.by",
    isOpen: true,
    mentors: []
}

export type StudentType = {
    id: number
    "name example": string
    age: number
    isActive: boolean
    address: AddressType
    technologies: Array<TechnologiesType>
}

type CityType = {
    title: string
    countryTitle: string
}

type AddressType = {
    streetTitle: string
    city: CityType
}

type TechnologiesType = {
    id: number
    title: string
}

const student: StudentType = {
    id: 1,
    "name example": "Dymich",
    age: 32,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus",
        },
    },
    technologies: [
        {
            id: 1,
            title: "HTML",
        },
        {
            id: 2,
            title: "CSS",
        },
        {
            id: 3,
            title: "React",
        }
    ]
}

console.log(student.age)
console.log(student["name example"])

