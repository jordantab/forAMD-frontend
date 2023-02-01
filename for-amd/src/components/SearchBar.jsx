import './SearchBar.css';
import React from 'react';
import { Link , useNavigate} from "react-router-dom";
import { useEffect , useState } from 'react';
import axios from 'axios';

const Icon = () => {
    return (
      <svg height="20" width="20" viewBox="0 0 20 20">
        <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
      </svg>
    );
  };

function SearchBar({placeHolder, options}) {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null)
    const [searchClicked, setSearchClicked] = useState(false)
    const hist = useNavigate();
    const [photo1, setPhoto1] = useState("");
    const [photoUrls, setPhotoUrls] = useState([])
    const [videoUrls, setVideoUrls] = useState([])

    useEffect(() => {
        const handler = () => setShowMenu(false);

        window.addEventListener("click", handler);
        return () => {
            window.removeEventListener("click", handler);
        };
    })

    const handleInputClick = (e) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    }

    const getDisplay = () => {
        if (selectedValue) {
            return selectedValue.label;
        }
        return placeHolder;
    };

    const onItemClick = (option) => {
        setSelectedValue(option)
    }

    const isSelected = (option) => {
        if (!selectedValue) {
            return false
        }

        return selectedValue.value === option.value;
    }

    function fetchAlbum() {
        setSearchClicked(!searchClicked)

        if (selectedValue.value === 'Surprise') {
            // console.log(selectedValue.value);
            hist('/surprise')
        }
        else{
        axios.post('http://127.0.0.1:8000/fetchAlbum/', selectedValue).then((response => {
            console.log(response.data)
            // const photo = response.data
            // setPhoto1(photo)
            setPhotoUrls(response.data.photos)
            if ('videos' in response.data){
                setVideoUrls(response.data.videos)
            }
        }
        ))
        }
    }
    return (
        <div>
            {/* {searchClicked ?
            <>
            {photoUrls.map(url => (
                <img key={url} src={url} alt="" controls/>
            ))}
            {videoUrls.map(url => (
                <video key={url} src={url} alt="" controls/>
            ))}
            </>
            :
            <>  */}
            <div className="dropdown-container">
                <div onClick={handleInputClick} className="dropdown-input">
                <div className="dropdown-selected-value">{getDisplay()}</div>
                <div className="dropdown-tools">
                        <div className="dropdown-tool">
                            <Icon />
                        </div>
                        </div>
                        </div>
                        {showMenu && (
                            <div className='dropdown-menu'>
                    {options.map((option) => (
                        <div 
                        onClick={() => onItemClick(option)}
                        key={option.value} 
                        className={'dropdown-item ${isSelected(option) && "selected"}'}>
                            {option.label}
                        </div>
                    ))}
                    </div>)}
                    <button onClick={fetchAlbum}>Search</button>
            </div>
            
                    {photoUrls.map(url => (
                        <img key={url} src={url} alt="" controls/>
                    ))}
                    {videoUrls.map(url => (
                        <video key={url} src={url} alt="" controls/>
                    ))}
            {/* </> */}
            
    </div>
    );
}

export default SearchBar