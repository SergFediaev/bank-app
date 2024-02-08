import {CityTestType, GovernmentBuildingType} from "../02/02.test";

export function demolishHousesOnTheStreet(city: CityTestType, street: string) {
    city.houses = city.houses.filter(house => !(house.address.street.title === street))
}

export const getBuildingsWithStaffCountGreaterThen = (buildings: Array<GovernmentBuildingType>, number: number) => {
    return buildings.filter(building => building.staffCount > number)
}