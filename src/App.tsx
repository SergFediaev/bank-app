import React from 'react'
import './App.css'
import {OnOff} from './lessons/samurai_way/OnOff/lesson/OnOff'
import {UncontrolledAccordion} from './lessons/samurai_way/UncontrolledAccordion/UncontrolledAccordion'
import {Accordion} from './lessons/samurai_way/Accordion/Accordion'
import {Rating} from './lessons/samurai_way/Rating/Rating'
import {UncontrolledRating} from './lessons/samurai_way/UncontrolledRating/UncontrolledRating'

function App() {
    console.log('App rendering')

    return <div className="App">
        {/*<Map/>*/}
        {/*<Buttons/>*/}
        {/*<UseState/>*/}
        {/*<FilterClasswork/>*/}
        {/*<Native01/>*/}
        {/*<AppBank/>*/}
        <Accordion title="Menu" collapsed={true}/>
        <Accordion title="Users" collapsed={false}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
        {/*<OnOff enabled={true}/>*/}
        {/*<OnOff enabled={false}/>*/}
        {/*<InputClasswork/>*/}
        <OnOff/>
        <UncontrolledAccordion title="Menu"/>
        <UncontrolledAccordion title="User"/>
        <UncontrolledRating/>
        <UncontrolledRating/>
        <UncontrolledRating/>
        <UncontrolledRating/>
        <UncontrolledRating/>
    </div>
}

export default App