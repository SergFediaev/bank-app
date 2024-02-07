import React from 'react';
import './App.css';
import {OnOff} from "./lessons/samurai_way/OnOff/OnOff";

function App() {
    return <>
        {/*<Map/>*/}
        {/*<Buttons/>*/}
        {/*<UseState/>*/}
        {/*<FilterClasswork/>*/}
        {/*<Native01/>*/}
        {/*<AppBank/>*/}
        {/*<Accordion title={"Menu"} collapsed={true}/>*/}
        {/*<Accordion title={"Users"} collapsed={false}/>*/}
        {/*<Rating value={1}/>*/}
        {/*<Rating value={2}/>*/}
        {/*<Rating value={3}/>*/}
        {/*<Rating value={4}/>*/}
        {/*<Rating value={5}/>*/}
        <OnOff enabled={true}/>
        <OnOff enabled={false}/>
    </>
}

export default App;