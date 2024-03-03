import {UncontrolledOnOff} from '../lesson/UncontrolledOnOff'
import {action} from '@storybook/addon-actions'

export default {
    title: 'UncontrolledOnOff stories',
    component: UncontrolledOnOff,
}

const onClickHandler = () => action('Clicked!')

export const EnabledUncontrolledOnOff = () => <UncontrolledOnOff defaultOn={true} onChange={onClickHandler}/>

export const DisabledUncontrolledOnOff = () => <UncontrolledOnOff defaultOn={false} onChange={onClickHandler}/>

export const DefaultInputValue = () => <input type="text" defaultValue="Default changeable input text."/>