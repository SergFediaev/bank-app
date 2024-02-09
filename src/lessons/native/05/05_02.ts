import {GovernmentBuildingType, HouseTestType} from "../02/02.test";

export const getStreetsTitlesOfGovernmentBuildings = (buildings: Array<GovernmentBuildingType>) => {
    return buildings.map(building => building.address.street.title)
}

export const getStreetsTitlesOfHouses = (houses: Array<HouseTestType>) => {
    return houses.map(house => house.address.street.title)
}

export function createMessages(houses: Array<HouseTestType>) {
    return houses.map(house => `Hello guys from ${house.address.street.title}`)
}