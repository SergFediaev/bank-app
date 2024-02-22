import React, {useState} from 'react'
import './App.css'
import {RatingValueType} from './lessons/samurai_way/ControlledRating/ControlledRating'
import {UncontrolledAccordion} from './lessons/samurai_way/UncontrolledAccordion/UncontrolledAccordion'

function App() {
    console.log('App rendering')

    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

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
        <UncontrolledAccordion title="Menu"/>
        <UncontrolledAccordion title="User"/>
        {/*<UncontrolledRating/>*/}
        {/*<UncontrolledRating/>*/}
        {/*<UncontrolledRating/>*/}
        {/*<UncontrolledRating/>*/}
        {/*<UncontrolledRating/>*/}
        {/*<User/>*/}
        {/*<LessonUncontrolledRating/>*/}
    </div>
}

export default App