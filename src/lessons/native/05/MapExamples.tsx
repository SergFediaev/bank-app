import React from 'react';

export const MapExamples = () => {
    const names = ['Dimych', 'Sveta', 'Katya', 'Viktor', 'Ignat']
    const liElements = names.map(name => <li>{name}</li>)

    const users = [{id: 1, name: 'Dimych'}, {id: 2, name: 'Sveta'}, {id: 3, name: 'Katya'}, {
        id: 4,
        name: 'Viktor'
    }, {id: 5, name: 'Ignat'}]
    const usersListItems = users.map((user, index) => <div key={user.id}>
        <li>{index} - {user.name}</li>
    </div>)

    return (
        <div>
            <ul>
                {liElements}
                {usersListItems}
            </ul>
        </div>
    );
};