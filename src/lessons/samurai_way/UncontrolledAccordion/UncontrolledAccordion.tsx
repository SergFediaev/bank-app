import React, {memo, useReducer} from 'react'
import {reducer, TOGGLE_COLLAPSED} from './reducer'

type AccordionPropsType = {
    title: string
    collapsed?: boolean
}

type AccordionTitlePropsType = {
    titleValue: string
    toggleCollapsed: () => void
}

export const UncontrolledAccordion = (props: AccordionPropsType) => {
    // const [collapsed, setCollapsed] = useState<boolean>(false)
    const [state, dispatch] = useReducer(reducer, {collapsed: false})

    // const toggleCollapsedHandler = () => setCollapsed(!collapsed)
    const toggleCollapsedHandler = () => dispatch({type: TOGGLE_COLLAPSED})

    return <div>
        <AccordionTitleMemo toggleCollapsed={() => {
            debugger;
            toggleCollapsedHandler()
        }} titleValue={props.title}/>
        {!state.collapsed && <AccordionMenuMemo/>}
    </div>
}

const AccordionTitle = ({toggleCollapsed, titleValue}: AccordionTitlePropsType) => <h3
    onClick={toggleCollapsed} style={{cursor: 'pointer'}}>{titleValue}</h3>

const AccordionMenu = () => <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

const AccordionTitleMemo = memo(AccordionTitle)
const AccordionMenuMemo = memo(AccordionMenu)