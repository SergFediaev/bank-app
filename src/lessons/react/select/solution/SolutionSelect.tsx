import s from './SolutionSelect.module.css'
import {KeyboardEvent, useEffect, useState} from 'react'

type SolutionSelectPropsType = {
    value?: any
    onChange: (value: any) => void
    items: ItemsType[]
}

type ItemsType = {
    title: string
    value: any
}

export const SolutionSelect = (props: SolutionSelectPropsType) => {
    console.log('SolutionSelect rendering!')
    const [active, setActive] = useState(false)
    const [hoveredElementValue, setHoveredElementValue] = useState(props.value)

    const selectedItem = props.items.find(item => item.value === props.value)
    const hoveredItem = props.items.find(item => item.value === hoveredElementValue)

    useEffect(() => {
        setHoveredElementValue(props.value)
    }, [props.value])

    const toggleItems = () => setActive(!active)

    const onItemClick = (value: any) => {
        props.onChange(value)
        toggleItems()
    }

    const onKeyUpHandler = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            for (let iteration = 0; iteration < props.items.length; iteration++) {
                if (props.items[iteration].value === hoveredElementValue) {
                    const pretenderElement = event.key === 'ArrowDown' ? props.items[iteration + 1] : props.items[iteration - 1]

                    if (pretenderElement) {
                        props.onChange(pretenderElement.value)
                        return
                    }
                }
            }

            if (!selectedItem) props.onChange(props.items[0].value)
        }

        if (event.key === 'Enter' || event.key === 'Escape') setActive(false)

        // My solution:
        /*        for (let iteration = 0; iteration < props.items.length; iteration++) {
                    if (props.items[iteration].value === hoveredElementValue) {
                        if (event.key === 'ArrowUp') {
                            let step
                            if (iteration - 1 < 0) {
                                step = props.items.length - 1
                            } else {
                                step = iteration - 1
                            }
                            setHoveredElementValue(props.items[step].value)
                            break
                        } else if (event.key === 'ArrowDown') {
                            let step
                            if (iteration + 1 === props.items.length) {
                                step = 0
                            } else {
                                step = iteration + 1
                            }
                            setHoveredElementValue(props.items[step].value)
                            break
                        }
                    }
                }*/
    }

    return <div
        tabIndex={0}
        className={s.select}
        onKeyUp={onKeyUpHandler}
    >
        <span
            className={s.main}
            onClick={toggleItems}
        >{selectedItem && selectedItem.title}</span>
        {active && <div className={s.items}>
            {props.items.map(item => <div
                onMouseEnter={() => setHoveredElementValue(item.value)}
                className={s.item + ' ' + (hoveredItem === item ? s.selected : '')}
                key={item.value}
                onClick={() => onItemClick(item.value)}
            >{item.title}</div>)}
        </div>}
    </div>
}