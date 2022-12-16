import React, { useEffect, useState } from 'react'


import { userInfoContext } from '../ContextFolder/Context'

import { useContext } from 'react'
// import { useNavigate } from 'react-router-dom'


function Profile() {
  const [authUser, setAuthUser] = useState(false)
 
  const { authUserData, setauthUserData } = useContext(userInfoContext)
  
      

  return (
    <div className='tabledetail' >
      <h3>Profile Page View </h3> 
      <table className='tabledetail1'  >
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone No. </th>

        </tr>

        
          <tr  >
            <td>{authUserData.UserName}</td>
            <td>{authUserData.Email}</td>
            <td>{authUserData.Password}</td>
          </tr>
      
      </table>
    </div>
  )
}

export { Profile }
