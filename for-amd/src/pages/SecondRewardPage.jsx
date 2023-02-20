import BoardingPass from '../components/BoardingPass.jsx'
import emailjs from 'emailjs-com';
import './SecondRewardPage.css'
import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


function SecondRewardPage () {
    const [buttonClicked, setButtonClicked] = useState(false)
    const hist = useNavigate()

    function NextPuzzleCountdown () {
        hist('/thirdpuzzlecountdown')
    }

    function GetBoardingPass () {
        const serviceID = 'service_bf951rj';
        const templateID = 'template_kfowqrq';
        const userID = 'zmoPJucrxBZpB4YS2'
            // Send the email
        const templateParams = {
            to_name: 'Alexandra',
            to_email: 'alexandradaddabbo@gmail.com', // Replace with the user's email address
            from_name: 'Jordan Tab',
        }

        emailjs.send(serviceID, templateID, templateParams, userID)
            .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            }, (error) => {
            console.log('FAILED...', error);
            });
        setButtonClicked(true)
    }
    return (
        <div>
            {buttonClicked ?
                <>
                    <div className='reward-background'>
                        <h2>Proud of you! Just one more step to go</h2>
                    </div>
                    <BoardingPass/>
                    <button onClick={GetBoardingPass} className='boarding-pass-button'></button>
                    <div className="email">
                        <h2>Check your email!</h2>
                    </div>
                    <FontAwesomeIcon icon={faArrowRight} onClick={NextPuzzleCountdown} className='right-arrow'/>
                </>
                :
                <>
                    <div className='reward-background'>
                        <h2>Proud of you! Just one more step to go</h2>
                    </div>
                    <BoardingPass/>
                    <button onClick={GetBoardingPass} className='boarding-pass-button'></button>
                </>
                }
        </div>
    )
}

export default SecondRewardPage