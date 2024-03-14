import React, {useState} from 'react'

export default {
    title: 'React.memo demo',
}

const NewMessagesCounter = (props: any) => <div>{props.count}</div>

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UsersSecret rendering!')
    return <div>{props.users.map((user, index) => <div key={index}>{user}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log('Example1 rendering!')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])

    const addUser = () => setUsers([...users, 'Sveta ' + new Date().getTime()])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={addUser}>Add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}