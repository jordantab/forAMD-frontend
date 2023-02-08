import './EventsPage.css'
import { useNavigate } from "react-router-dom";
import arrow from '../images/arrow.png';
import axios from 'axios';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';


function EventsPage() {
    const hist = useNavigate()
    const [photoUrls, setPhotoUrls] = useState([])
    const [clickedWord, setClickedWord] = useState(null);

    const options = [
        'Newport',
        'Nextdoor',
        'Icon',
        'Brookline Park',
        'TITS',
        'Red Sox Game',
        'Bay State Bench',
        'Manti, Wine, Face Masks',
        'Korean BBQ',
        'Celtics Game',
        'Halloween',
        'Lola42',
        'Italian Cooking Class',
        'Athlete Formal',
        'JT 22nd Birthday',
        'Christmas',
        'NYE'
    ]
    function goBack() {
        hist('/decisions')
    }
    
    const Word = ({word}) => {
        const [isHovered, setIsHovered] = useState(false)
        const isClicked = word === clickedWord

        return (
            <li
            style={{
              display: 'flex',
              alignItems: 'center',
              fontSize: isHovered || isClicked ? '1.2em' : '1em',
              fontWeight: isHovered || isClicked ? 'bold' : 'normal'
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={() => {
              setClickedWord(word);
              fetchAlbum(word);
            }}
          >
              {word}
            {(isHovered || isClicked) && (
                <FontAwesomeIcon icon={faArrowRight} style={{ marginLeft: '5px' }} />
                )}
          </li>
        )
        }
      

    function fetchAlbum(selectedValue) {
        console.log(selectedValue)
        axios.post('https://for-amd.herokuapp.com/fetchAlbum/', selectedValue).then((response => {
            setPhotoUrls(response.data.photos)
        }
        ))
        }

    return (
        <div>
            <div className="backArrowImage">
                <img src={arrow}/>
            </div>
            <div className="backArrowButton">
                <button onClick={goBack}></button>
            </div>
            <div className="events">
                <ul style={{listStyleType: 'none'}}>
                    {options.map((option) => (
                        <Word key={option} word={option} />
                    ))}
                </ul>
            </div>
            <div className="photos">
                {photoUrls.map(url => (
                    <img key={url} src={url} alt="" controls/>
                ))}
            </div>
            
            {/* <SearchBar placeHolder='Select...' options={options}/> */}
        </div>
    )
}

export default EventsPage