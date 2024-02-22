import React, {useState} from 'react'
import './App.css'
import {ControlledOnOff} from './lessons/samurai_way/OnOff/homework/ControlledOnOff'
import {ControlledAccordion} from './lessons/samurai_way/OnOff/homework/ControlledAccordion'
import {UncontrolledOnOff} from './lessons/samurai_way/OnOff/lesson/UncontrolledOnOff'

function App() {
    console.log('App rendering')

    // let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    const [enabled, setEnabled] = useState<boolean>(false)

    const [collapsed, setCollapsed] = useState<boolean>(false)

    return <div className="App">
        {/*<Map/>*/}
        {/*<Buttons/>*/}
        {/*<UseState/>*/}
        {/*<FilterClasswork/>*/}
        {/*<Native01/>*/}
        {/*<AppBank/>*/}
        {/*<Accordion title="Menu" collapsed={true}/>*/}
        {/*<Accordion title="Users" collapsed={false}/>*/}
        {/*<Rating value={1}/>*/}
        {/*<Rating value={2}/>*/}
        {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
        {/*<Rating value={4}/>*/}
        {/*<Rating value={5}/>*/}
        {/*<OnOff enabled={true}/>*/}
        {/*<OnOff enabled={false}/>*/}
        {/*<InputClasswork/>*/}
        {/*<OnOff/>*/}
        {/*<UncontrolledAccordion title="Menu"/>*/}
        {/*<UncontrolledAccordion title="User"/>*/}
        {/*<UncontrolledRating/>*/}
        {/*<UncontrolledRating/>*/}
        {/*<UncontrolledRating/>*/}
        {/*<UncontrolledRating/>*/}
        {/*<UncontrolledRating/>*/}
        {/*<User/>*/}
        {/*<LessonUncontrolledRating/>*/}
        <ControlledOnOff enabled={enabled} setEnabled={setEnabled}/>
        <ControlledAccordion title="Users" collapsed={collapsed} setCollapsed={setCollapsed}/>
        <UncontrolledOnOff onChange={setEnabled}/> {enabled.toString()}
    </div>
}

export default App