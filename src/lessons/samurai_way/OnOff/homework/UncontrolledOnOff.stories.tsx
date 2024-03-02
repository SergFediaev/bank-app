import {UncontrolledOnOff} from '../lesson/UncontrolledOnOff'
import {action} from '@storybook/addon-actions'

export default {
    title: 'UncontrolledOnOff stories',
    component: UncontrolledOnOff,
}

const onClickHandler = () => action('Clicked!')

export const ChangeableUncontrolledOnOff = () => <UncontrolledOnOff onChange={onClickHandler}/>