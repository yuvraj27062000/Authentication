import React from 'react'

import { useRef } from 'react'

import { userInfoContext } from '../ContextFolder/Context'

import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

// import {usenavigate} from  'react'

function Profile() {
  const data = useContext(userInfoContext)

  const navigate =  useNavigate()
  console.log( data);

   let mydata = {
        name: '',
        age: ''
    }
  const nameRef = useRef();
  const ageRef = useRef();


  const saveData = (e) => {
    e.preventDefault()


    mydata.name = nameRef.current.value
    mydata.age = ageRef.current.value
    data.setUserData([...data.userData, mydata])
     
    e.target.reset();

    navigate("/")
  }

  return (
    <div>
      <h3>profile page</h3>
      <form  onSubmit={saveData} >
        <input type="text" name='Name' placeholder='Full name' ref={nameRef} />
        <input type="text" name='age' placeholder=' Age ' ref={ageRef} />
        <input    type="submit"  value='submit'/>
      
      </form>
    </div>
  )
}

export { Profile }
