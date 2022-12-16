import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function LoginForm() {
    const Email = useRef()
    const Password = useRef()
    const navigate = useNavigate()

    const DataCheck = () => {
        let data = JSON.parse(localStorage.getItem('userData'))
        console.log(data);
        if (data) {
            data.filter((val) => {
                if (!val.Email === Email) {
                    console.log('Email  Not Present')
                    return false
                }
                else if (!val.Password == Password) {
                    console.log('Password Not Present')
                    return false
                }
                else {
                    console.log('Email Present')
                    return true

                }
            })
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
        if (!DataCheck()) {
            navigate('/')
             
        }
        else {
             
            console.log('Not present');
            alert('Invalid Email and  Password ')
        }

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
     

        </div>
    )
}

export { LoginForm }
