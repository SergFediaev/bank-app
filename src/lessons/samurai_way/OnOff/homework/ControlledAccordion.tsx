import React from 'react'

type ControlledAccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
}

export const ControlledAccordion = ({title, collapsed, setCollapsed}: ControlledAccordionPropsType) => {

    const onTitleClickHandler = () => setCollapsed(!collapsed)

    return <div>
        <AccordionTitle title={title} onClick={onTitleClickHandler}/>
        {!collapsed && <AccordionMenu/>}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

const AccordionTitle = ({title, onClick}: AccordionTitlePropsType) => <h3
    style={{cursor: 'pointer'}}
    onClick={onClick}>{title}</h3>

const AccordionMenu = () => <ul>
    <li>User 1</li>
    <li>User 2</li>
    <li>User 3</li>
    <li>User 4</li>
    <li>User 5</li>
</ul>