import {ChangeEvent, MouseEvent} from 'react'

const callback = (): number => {
    // alert('window.setTimeout()')
    return 12
}

window.setTimeout(callback, 1_000)

export const User = () => {

    const deleteUser = (event: MouseEvent<HTMLButtonElement>) => {
        debugger
        alert('User deleted by element: ' + event.currentTarget.name)
    }

    const saveUser = () => {
        alert('User saved.')
    }

    const onNameChanged = () => {
        console.log('Name changed')
    }

    const focusLostHandler = () => {
        console.log('Focus lost')
    }

    const onAgeChanged = (event: ChangeEvent<HTMLInputElement>) => {
        console.log('Age changed to: ' + event.currentTarget.value)
    }

    return (
        <div>
            <textarea
                onChange={onNameChanged}
                onBlur={focusLostHandler}>Dimych</textarea>
            <input
                type="text"
                onChange={onAgeChanged}/>
            <button name="delete" onClick={deleteUser}>Delete</button>
            <button name="save" onClick={saveUser}>Save</button>
        </div>
    )
}