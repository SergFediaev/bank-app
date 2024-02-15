import React from 'react'

type AccordionPropsType = {
    title: string
    collapsed?: boolean
}

export const AccordionTern = (props: AccordionPropsType) => props.collapsed ?
    <AccordionTitle titleValue={props.title}/> :
    <div>
        <AccordionTitle titleValue={props.title}/>
        <AccordionMenu/>
    </div>

export const UncontrolledAccordion = (props: AccordionPropsType) => {
    console.log('Accordion rendering')

    const collapsed = false

    return <div>
        <AccordionTitle titleValue={props.title}/>
        <button>Toggle</button>
        {!collapsed && <AccordionMenu/>}
    </div>
}

type AccordionTitlePropsType = {
    titleValue: string
}

const AccordionTitle = (props: AccordionTitlePropsType) =>
    // <h3>{console.log('Rendering Acc title')}{props.titleValue} RIGHT?</h3>
    <h3>{props.titleValue}</h3>

// function AccordionTitle(props: any) {
//     return <h3>Title is: {props.title}</h3>
// }

const AccordionMenu = () => <ul>
    {/*{console.log('Rendering Acc menu')}*/}
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
</ul>

function sum(a: number, b: number) {
    return a + b
}

sum(10, 5)