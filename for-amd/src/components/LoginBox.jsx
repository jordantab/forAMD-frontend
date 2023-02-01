import './LoginBox.css';
import { Link , useNavigate} from "react-router-dom";
import {useRef, useState} from 'react';
import axios from 'axios';

function LoginBox() {
    const username = useRef();
    const password = useRef();

    const hist = useNavigate();

    function onSubmit(){

        const inputs = {
            username : username.current.value,
            password : password.current.value
        }

        axios.post('http://127.0.0.1:8000/verifyLogin/',inputs).then((response => {
            if (response.data == 'True'){
                hist('/decisions')
            }
            else if (response.data == "False") {
                hist('/error')
            }
        }
        ))
    }
    return (
        <div>
            <div className="Box">
                <div className='Welcome'>
                    <h2>Welcome</h2>
                </div>
                
                <div className="Username">
                    <p>Username</p>
                </div>
                <div className='usernameInput'>
                    <input
                    type="text"
                    id="header-search"
                    placeholder='Username'
                    name="username"
                    ref={username}
                    />
                </div>

                <div className="Password">
                    <p>Password</p>
                </div>
                <div className='passwordInput'>
                    <input
                    type="password"
                    id="header-search"
                    placeholder='Password'
                    name="password"
                    ref={password}
                    />
                </div>
                <button onClick={onSubmit}>Login</button>
            </div>
        </div>
    
    )
}

export default LoginBox