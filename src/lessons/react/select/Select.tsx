import {useState} from 'react'
import s from './Select.module.css'

type SelectPropsType = {
    value: any
    onChange: (value: any) => void
    items: ItemsType[]
}

type ItemsType = {
    title: string
    value: any
}

export const Select = ({
                           value,
                           onChange,
                           items,
                       }: SelectPropsType) => {
    console.log('Select rendering!')
    const [showMenu, setShowMenu] = useState<boolean>(false)

    const toggleMenuHandler = () => setShowMenu(!showMenu)

    const closeMenu = () => setShowMenu(false)

    const onClickHandler = (value: any) => {
        onChange(value)
        closeMenu()
    }

    const item = items.find(item => item.value === value)

    return <div className={s.selectMenu}>
        <h3 onClick={toggleMenuHandler}>{item?.title}{showMenu ? ' -' : ' +'}</h3>
        {showMenu && <ul onMouseLeave={closeMenu}>
            {items.map((item, index) => <li
                key={index}
                onClick={() => onClickHandler(item.value)}
            >{item.title}</li>)}
        </ul>}
    </div>
}