import React, {memo} from 'react'
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

export const OnOff = ({enabled}: OnOffPropsType) => <div className="container">
    <ButtonOnMemo enabled={enabled}/>
    <ButtonOffMemo enabled={enabled}/>
    {enabled && <IndicatorMemo color="lime"/>}
    {!enabled && <IndicatorMemo color="red"/>}
</div>

const ButtonOn = ({enabled}: OnOffPropsType) => <div className="button">
    {enabled && <BackgroundMemo color="lightgreen"/>}
    <span className="inner">On</span>
</div>

const ButtonOff = ({enabled}: OnOffPropsType) => <div className="button">
    {!enabled && <BackgroundMemo color="lightcoral"/>}
    <span className="inner">Off</span>
</div>

const Background = ({color}: ButtonColorType) => <div className="background" style={{backgroundColor: color}}></div>

const Indicator = ({color}: IndicatorColorType) => <div className="indicator" style={{backgroundColor: color}}></div>

const ButtonOnMemo = memo(ButtonOn)
const ButtonOffMemo = memo(ButtonOff)
const BackgroundMemo = memo(Background)
const IndicatorMemo = memo(Indicator)