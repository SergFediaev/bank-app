import type {StoryObj} from '@storybook/react'
import {ControlledAccordion} from './ControlledAccordion'
import React, {useState} from 'react'
import {action} from '@storybook/addon-actions'

/*const meta: Meta<typeof ControlledAccordion> = {
    component: ControlledAccordion,
}

export default meta*/

export default {
    // title: 'Accordion stories',
    component: ControlledAccordion,
}

type Story = StoryObj<typeof ControlledAccordion>

export const FirstStory: Story = {
    args: {
        title: 'Accordion stories',
        collapsed: true,
    },
}

const setCollapsedHandler = action('setCollapsedHandler()')

export const CollapsedControlledAccordion = () => {
    return <ControlledAccordion
        title={'Collapsed controlled accordion'}
        collapsed={true}
        setCollapsed={setCollapsedHandler}
    />
}

export const OpenedControlledAccordion = () => {
    return <ControlledAccordion
        title={'Opened controlled accordion'}
        collapsed={false}
        setCollapsed={setCollapsedHandler}
    />
}

export const ClickableControlledAccordion = () => {
    const [collapsed, setCollapsed] = useState(false)
    return <ControlledAccordion
        title={'Clickable controlled accordion'}
        collapsed={collapsed}
        setCollapsed={setCollapsed}
    />
}