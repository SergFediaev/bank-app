import React from 'react'
import './App.css'
import {UncontrolledRating} from './lessons/samurai_way/UncontrolledRating/UncontrolledRating'
import {UncontrolledAccordion} from './lessons/samurai_way/UncontrolledAccordion/UncontrolledAccordion'

function App() {
    console.log('App rendering')

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
        {/*<Rating value={3}/>*/}
        {/*<Rating value={4}/>*/}
        {/*<Rating value={5}/>*/}
        {/*<OnOff enabled={true}/>*/}
        {/*<OnOff enabled={false}/>*/}
        {/*<InputClasswork/>*/}
        {/*<OnOff/>*/}
        <UncontrolledAccordion title="Menu"/>
        <UncontrolledAccordion title="User"/>
        <UncontrolledRating/>
        <UncontrolledRating/>
        <UncontrolledRating/>
        <UncontrolledRating/>
        <UncontrolledRating/>
        {/*<User/>*/}
    </div>
}

export default App