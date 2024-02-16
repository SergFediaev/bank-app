import React, {useState} from 'react'

type AccordionPropsType = {
    title: string
    collapsed?: boolean
}

type AccordionTitlePropsType = {
    titleValue: string
    toggleCollapsed: () => void
}

export const UncontrolledAccordion = (props: AccordionPropsType) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    const toggleCollapsedHandler = () => setCollapsed(!collapsed)

    return <div>
        <AccordionTitle toggleCollapsed={toggleCollapsedHandler} titleValue={props.title}/>
        {!collapsed && <AccordionMenu/>}
    </div>
}

const AccordionTitle = ({toggleCollapsed, titleValue}: AccordionTitlePropsType) => <h3
    onClick={toggleCollapsed} style={{cursor: 'pointer'}}>{titleValue}</h3>

const AccordionMenu = () => <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>