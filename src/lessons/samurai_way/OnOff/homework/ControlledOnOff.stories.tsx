import {ControlledOnOff} from './ControlledOnOff'
import {useState} from 'react'
import {action} from '@storybook/addon-actions'

export default {
    title: 'ControlledOnOff stories',
    component: ControlledOnOff,
}

const onClickHandler = action('Clicked!')

export const OnMode = () => <ControlledOnOff enabled={true} setEnabled={onClickHandler}/>

export const OffMode = () => <ControlledOnOff enabled={false} setEnabled={onClickHandler}/>

export const ChangeableMode = () => {
    const [enabled, setEnabled] = useState<boolean>(true)
    return <ControlledOnOff enabled={enabled} setEnabled={setEnabled}/>
}