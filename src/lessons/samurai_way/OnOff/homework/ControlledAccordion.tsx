import React, {memo} from 'react'

type ControlledAccordionPropsType = {
    title: string
    collapsed: boolean
    setCollapsed: (collapsed: boolean) => void
    items: ItemType[]
    onClick: (value: any) => void
}

type ItemType = {
    title: string
    value: any
}

export const ControlledAccordion = ({
                                        title,
                                        collapsed,
                                        setCollapsed,
                                        items,
                                        onClick,
                                    }: ControlledAccordionPropsType) => {

    const onTitleClickHandler = () => setCollapsed(!collapsed)

    return <div>
        <AccordionTitleMemo title={title} onClick={onTitleClickHandler}/>
        {!collapsed && <AccordionMenuMemo
            items={items}
            onClick={onClick}
        />}
    </div>
}

type AccordionTitlePropsType = {
    title: string
    onClick: () => void
}

const AccordionTitle = ({title, onClick}: AccordionTitlePropsType) => <h3
    style={{cursor: 'pointer'}}
    onClick={onClick}>{title}</h3>

type AccordionMenuPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}

const AccordionMenu = ({items, onClick}: AccordionMenuPropsType) => <ul>
    {items.map((item, index) => <li
        key={index}
        onClick={() => onClick(item.value)}
    >{item.title}</li>)}
</ul>

const AccordionTitleMemo = memo(AccordionTitle)
const AccordionMenuMemo = memo(AccordionMenu)