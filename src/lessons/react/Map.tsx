import React, {useState} from 'react';

type StudentPropsType = {
    id: number
    name: string
    age: number
}

type NewComponentPropsType = {
    students: Array<StudentPropsType>
    // students: StudentPropsType[]
}

export const Map = () => {
    const [students, setStudents] = useState([
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]);

    return <NewComponentStyle students={students}/>
};

const NewComponentStyle = (props: NewComponentPropsType) => {
    return <>
        <ul>
            {props.students.map(student => {
                return <li key={student.id}>Name: {student.name}<br/>Age: {student.age}</li>
            })}
        </ul>
        <MapHomework/>
    </>
}

const MapHomework = () => {
    const topCars = [
        {manufacturer: 'BMW', model: 'm5cs'},
        {manufacturer: 'Mercedes', model: 'e63s'},
        {manufacturer: 'Audi', model: 'rs6'},
    ]

    return <TopCarsList topCars={topCars}/>
};

type CarPropsType = {
    manufacturer: string
    model: string
}

type TopCarsListPropsType = {
    topCars: Array<CarPropsType>
}

const TopCarsList = (props: TopCarsListPropsType) => {
    return <table>
        <thead>
        <tr>
            <td>#</td>
            <td>Manufacturer</td>
            <td>Model</td>
        </tr>
        </thead>
        <tbody>
        {props.topCars.map((car, index) => {
            return <tr key={index}>
                <td>{++index}</td>
                <td>{car.manufacturer}</td>
                <td>{car.model}</td>
            </tr>
        })}
        </tbody>
    </table>
}