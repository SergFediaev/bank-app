import React from 'react';
import './App.css';
import {Accordion} from "./lessons/samurai_way/Accordion/Accordion";
import {Rating} from "./lessons/samurai_way/Rating/Rating";

function App() {
    return <>
        {/*<Map/>*/}
        {/*<Buttons/>*/}
        {/*<UseState/>*/}
        {/*<FilterClasswork/>*/}
        {/*<Native01/>*/}
        {/*<AppBank/>*/}
        <Accordion title={"Menu"} collapsed={true}/>
        <Accordion title={"Users"} collapsed={false}/>
        <Rating value={1}/>
        <Rating value={2}/>
        <Rating value={3}/>
        <Rating value={4}/>
        <Rating value={5}/>
    </>
}

export default App;