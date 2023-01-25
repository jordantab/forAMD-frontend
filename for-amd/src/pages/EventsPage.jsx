import './EventsPage.css'
import SearchBar from '../components/SearchBar';
// import axios from 'axios';
// import { useEffect, useState } from 'react';


function EventsPage() {

    const options = [
        {value: 'Newport', label:'Newport'},
        {value: 'Nextdoor', label:'Nextdoor'},
        {value: 'Icon', label:'Icon'},
        {value: 'Brookline Park', label:'Brookline Park'},
        {value: 'TITS', label:'TITS'},
        {value: 'Red Sox Game', label:'Red Sox Game'},
        {value: 'Bay State Bench', label:'Bay State Bench'},
        {value: 'Manti, Wine, Face Masks', label:'Manti, Wine, Face Masks'},
        {value: 'Korean BBQ', label:'Korean BBQ'},
        {value: 'Celtics Game', label:'Celtics Game'},
        {value: 'Halloween', label:'Halloween'},
        {value: 'Lola42', label:'Lola42'},
        {value: 'Italian Cooking Class', label:'Italian Cooking Class'},
        {value: 'Athlete Formal', label:'Athlete Formal'},
        {value: 'JT 22nd Birthday', label:'JT 22nd Birthday'},
        {value: 'Christmas', label:'Christmas'},
        {value: 'NYE', label:'NYE'},
        {value: 'Surprise', label:'Surprise'},
    ]
    
    return (
        <div>
            <h2>Pick an Event</h2>
            <SearchBar placeHolder='Select...' options={options}/>
        </div>
    )
}

export default EventsPage