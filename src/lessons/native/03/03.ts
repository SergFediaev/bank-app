import {StudentType} from "../02/02";
import {CityTestType, GovernmentBuildingType, HouseTestType} from "../02/02.test";

// debugger

export const sum = (a: number, b: number) => {
    return a + b;
}

const result = sum(sum(1, 2), sum(3, 4))

export const addTechnology = (student: StudentType, technology: string) => {
    // debugger
    student.technologies.push({
        id: new Date().getDate(),
        title: technology,
    });
}

export function makeStudentActive(student: StudentType) {
    student.isActive = true;
}

export const doesStudentLiveIn = (student: StudentType, cityName: string) => {
    return student.address.city.title === cityName;
}

export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
    building.budget += budget;
}

export const repairHouse = (house: HouseTestType) => {
    house.repaired = true;
}

export function toFireStaff(building: GovernmentBuildingType, staffCountToFire: number) {
    building.staffCount -= staffCountToFire;
}

export const toHireStaff = (building: GovernmentBuildingType, staffCountToHire: number) => {
    building.staffCount += staffCountToHire
}

export function createMessage(props: CityTestType) {
    // return "Hello " + props.title + " citizens. I want you be happy. All " + props.citizensNumber + " men";
    return `Hello ${props.title} citizens. I want you be happy. All ${props.citizensNumber} men`;
}