import React, {useState} from 'react'
import './App.css'
import {Select} from './lessons/react/select/Select'

function App() {
    console.log('App rendering')

    // let [ratingValue, setRatingValue] = useState<RatingValueType>(0)

    const [enabled, setEnabled] = useState<boolean>(false)

    const [collapsed, setCollapsed] = useState<boolean>(false)

    const [selectedValue, setSelectedValue] = useState(1)

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
        {/*<ControlledOnOff enabled={enabled} setEnabled={setEnabled}/>*/}
        {/*<ControlledAccordion title="Users" collapsed={collapsed} setCollapsed={setCollapsed}/>*/}
        {/*<UncontrolledOnOff onChange={setEnabled}/> {enabled.toString()}*/}
        {/*<Associative/>*/}
        <Select
            value={selectedValue}
            onChange={(value) => setSelectedValue(value)}
            items={selectItems}
        />
    </div>
}

export const selectItems = [
    {title: 'Moscow', value: 1},
    {title: 'Minsk', value: 2},
    {title: 'Kiev', value: 3},
]

export default App