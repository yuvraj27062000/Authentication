import React, { useRef } from 'react'
import { useNavigate } from 'react-router-dom'

function SignUpForm() {

    const navigate = useNavigate()

    const UserName = useRef()
    const Email = useRef()
    const Password = useRef()
    const Mobile = useRef()
    const Address = useRef()

    const UperCaseCheck = (value)=>{
        let check = value[0].toUpperCase()
        if(value[0]!==check){
            return false
        }
        else{
            return true
        }
    }
    function containsNumbers(str) {
        return /\d/.test(str);
      }

    const SaveData = (value)=>{

        let data  =  JSON.parse(localStorage.getItem('userData'))
        

        if(!data){
            let userList = []
            userList.push(value);
            localStorage.setItem('userData', JSON.stringify(userList));
            

        }
        else{
            data.filter((val)=>{
                if(val.Email === value.Email){
                    alert('This Mail is Already Taken ')
                    return true

                }
                else if(val.Mobile === value.Mobile){
                    alert('This Mobile No. is Already Taken ')
                    return true
                }
                else{
                    data.push(value);
                    localStorage.setItem('userData', JSON.stringify(data))
                    return false
                }
            })
             
        }

    }
    
    const userData = {
        UserName:'',
        Email:'',
        Password:'',
        Mobile:'',
        Address:''
    }


    const valiDateUser = (e)=>{
        e.preventDefault()
       
        console.log(Mobile.current.value.length);
    if(UserName.current.value.length<4){
        alert("Name at least  4 charecter Length")
        return
    }
     
    else if(Password.current.value.length < 8){
        alert("PASSWORD Must be 8 charecter and More")
        return
    }
    else if(!UperCaseCheck(Password.current.value)){
        alert("First Latter of Password Should be Capital")
        return
    }
    else if(!containsNumbers(Password.current.value)){
        alert("Password Should contain at least 1 numeric Digit")
        return
    }
    
     


    userData[UserName.current.name] = UserName.current.value;
    userData[Email.current.name] = Email.current.value;
    userData[Password.current.name] = Password.current.value;
    userData[Mobile.current.name] = Mobile.current.value;
    userData[Address.current.name] = Address.current.value;
    

    if(SaveData(userData)){
        return false
    }
    else{
        console.log('userData' , userData);
        navigate('/login')
    }
   
    }

    return (
        <div>
            <h1>SignUpForm </h1>
            <form  onSubmit={valiDateUser}>
                <lable>Name :
                    <input type={'text'} name='UserName' id='UserName' ref={UserName} required/>
                </lable><br/><br/>
                <lable>Email :
                    <input type={'Email'} name='Email' id='Email' ref={Email} required/>
                </lable><br/><br/>
                <lable>Password :
                    <input type={'password'} name='Password' id='Password' ref={Password} required />
                </lable><br/><br/>
                <lable>Mobile :
                    <input type={'text'} name='Mobile' id='Mobile' ref={Mobile} required />
                </lable><br/><br/>
                <lable>Address :
                    <input type={'text'} name='Address' id='Address' ref={Address} required />
                </lable><br/><br/>
                <button type='submit' value='submit'>SugnUP</button>
            </form>

        </div>
    )
}

export { SignUpForm }
