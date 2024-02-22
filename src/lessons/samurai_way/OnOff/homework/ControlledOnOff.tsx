type ControlledOnOffPropsType = {
    enabled: boolean
    setEnabled: (value: boolean) => void
}

export function ControlledOnOff({enabled, setEnabled}: ControlledOnOffPropsType) {

    const blockStyle = {
        display: 'inline-flex',
        border: '5px double black',
        backgroundColor: 'lightgray',
    }

    const elementsStyle = {
        width: '30px',
        height: '30px',
        border: '2px solid black',
        display: 'inline-block',
        padding: '5px',
        cursor: 'pointer',
        margin: '10px 15px',
    }

    const onStyle = {
        backgroundColor: enabled ? 'lightgreen' : 'white',
        fontWeight: enabled ? 'bold' : 'normal',
    }

    const offStyle = {
        backgroundColor: enabled ? 'white' : 'lightcoral',
        fontWeight: enabled ? 'normal' : 'bold',
    }

    const indicatorStyle = {
        borderRadius: '50%',
        backgroundColor: enabled ? '#0f0' : 'red',
    }

    const onClickHandler = () => setEnabled(!enabled)

    return <div style={blockStyle}>
        <div style={{...elementsStyle, ...onStyle}} onClick={onClickHandler}>On</div>
        <div style={{...elementsStyle, ...offStyle}} onClick={onClickHandler}>Off</div>
        <div style={{...elementsStyle, ...indicatorStyle}}></div>
    </div>
}