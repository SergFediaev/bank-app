import React, {useMemo, useState} from 'react'

export default {
    title: 'useMemo with users and counter',
}

export const CounterUsersExample = () => {
    const [a, setA] = useState(5)
    const [b, setB] = useState(5)

    let resultA = 1
    let resultB = 1

    resultA = useMemo(() => {
        let tempResultA = 1 // Чтобы не происходило замыкания.

        for (let i = 1; i <= a; i++) {
            // let fake = 0
            // while (fake < 100_000_000) {
            //     fake++
            //     const fakeValue = Math.random()
            // }

            tempResultA *= i
        }

        return tempResultA
    }, [a])

    for (let i = 1; i <= b; i++) {
        resultB *= i
    }

    return <>
        <input value={a} onChange={(event) => setA(Number(event.currentTarget.value))}/>
        <input value={b} onChange={(event) => setB(+event.currentTarget.value)}/>
        <hr/>
        <div>Result A: {resultA}</div>
        <div>Result B: {resultB}</div>
    </>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log('UsersSecret rendering!')
    return <div>{props.users.map((user, index) => <div key={index}>{user}</div>)}</div>
}

const Users = React.memo(UsersSecret)

export const HeplsToReactMemo = () => {
    console.log('HeplsToReactMemo rendering!')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem'])

    const newArray = useMemo(() => users.filter(u => u.toLowerCase().indexOf('a') > -1), [users])

    const addUser = () => setUsers([...users, 'Sveta ' + new Date().getTime()])

    return <>
        <button onClick={() => setCounter(counter + 1)}>+</button>
        <button onClick={() => addUser()}>Add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}