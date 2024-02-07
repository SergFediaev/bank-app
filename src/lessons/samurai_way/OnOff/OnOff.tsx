import React from 'react';
import './OnOff.css'

type OnOffPropsType = {
    enabled: boolean
}

type ButtonColorType = {
    color: 'lightgreen' | 'lightcoral'
}

type IndicatorColorType = {
    color: 'lime' | 'red'
}

export const OnOff = ({enabled}: OnOffPropsType) => <div className='container'>
    <ButtonOn enabled={enabled}/>
    <ButtonOff enabled={enabled}/>
    {enabled && <Indicator color='lime'/>}
    {!enabled && <Indicator color='red'/>}
</div>

const ButtonOn = ({enabled}: OnOffPropsType) => <div className='button'>
    {enabled && <Background color='lightgreen'/>}
    <span className='inner'>On</span>
</div>

const ButtonOff = ({enabled}: OnOffPropsType) => <div className='button'>
    {!enabled && <Background color='lightcoral'/>}
    <span className='inner'>Off</span>
</div>

const Background = (props: ButtonColorType) => <div className='background' style={{backgroundColor: props.color}}></div>

const Indicator = (props: IndicatorColorType) => <div className='indicator' style={{backgroundColor: props.color}}></div>