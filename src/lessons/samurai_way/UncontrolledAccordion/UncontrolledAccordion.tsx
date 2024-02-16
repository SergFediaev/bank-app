import React, {useState} from 'react'

type AccordionPropsType = {
    title: string
    collapsed?: boolean
}

type AccordionTitlePropsType = {
    titleValue: string
}

export const UncontrolledAccordion = (props: AccordionPropsType) => {
    const [collapsed, setCollapsed] = useState<boolean>(false)

    return <div>
        <AccordionTitle titleValue={props.title}/>
        <button onClick={() => setCollapsed(!collapsed)}>Toggle</button>
        {!collapsed && <AccordionMenu/>}
    </div>
}

const AccordionTitle = (props: AccordionTitlePropsType) =>
    <h3>{props.titleValue}</h3>

const AccordionMenu = () => <ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>