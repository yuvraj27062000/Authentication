import React, { useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'


import { userInfoContext } from '../ContextFolder/Context'

import { useContext } from 'react'

function LoginForm() {
    const Email = useRef()
    const Password = useRef()
    const navigate = useNavigate()
    const [Userpresent, setUserPresent] = useState(false)
    const {authUserData,setauthUserData, setShow} = useContext(userInfoContext)

    
    const DataCheck = (value) => {
        let data = JSON.parse(localStorage.getItem('userData'))
     
        if (data) {
            const UserDataFromLocatStorage = data.find((val) => {
                return (val.Email === value.Email)

            })
            if (UserDataFromLocatStorage) {
                if (UserDataFromLocatStorage.Password === value.Password) {
                    setUserPresent(false)
                    setauthUserData(UserDataFromLocatStorage)
                    setShow(true)
                    navigate('/profile')
                }
                else {
                    setUserPresent(false)
                    setShow(false)
                    alert('Password Not Matched ')
                    
                }
            }
            else{
                console.log('Email Not Present ');
                setUserPresent(true)
            }


        }
    }


    const UperCaseCheck = (value) => {
        let check = value[0].toUpperCase()
        if (value[0] !== check) {
            return false
        }
        else {
            return true
        }
    }
    function containsNumbers(str) {
        return /\d/.test(str);
    }

    const LoginuserData = {
        Email: '',
        Password: ''
    }

    const ValiDateUser = (e) => {
        e.preventDefault()

        if (Password.current.value.length < 8) {
            alert("PASSWORD Must be 8 charecter and More")
            return
        }
        else if (!UperCaseCheck(Password.current.value)) {
            alert("First Latter of Password Should be Capital")
            return
        }
        else if (!containsNumbers(Password.current.value)) {
            alert("Password Should contain at least 1 numeric Digit")
            return
        }

        LoginuserData[Email.current.name] = Email.current.value;
        LoginuserData[Password.current.name] = Password.current.value;
        DataCheck(LoginuserData)
        

    }

    return (
        <div>
            <h1>LoginForm</h1>

            <form onSubmit={ValiDateUser}>
                <lable>Email :
                    <input type={'Email'} name='Email' id='Email' ref={Email} required />
                </lable><br /><br />
                <lable>Password :
                    <input type={'password'} name='Password' id='Password' ref={Password} required />
                </lable><br /><br />
                <button type='submit' value='submit'>Login </button>
            </form>

            { Userpresent && <><h5>Email Not Present SignUp First <button onClick={()=> navigate('/signup')}>SignUp</button></h5> </>}
        </div>
    )
}

export { LoginForm }
