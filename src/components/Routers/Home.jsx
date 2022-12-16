import React from 'react'

import { userInfoContext } from '../ContextFolder/Context'

import { useContext } from 'react'
function Home() {
  const { authUserData, setauthUserData } = useContext(userInfoContext)
  let data  =  JSON.parse(localStorage.getItem('userData'))
  console.log(data);
  if(data){
    return (
      <div className='tabledetail' >
      <h3>Home Page View </h3> 
      <table className='tabledetail1'  >
        <tr>
        <th>Id</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone No. </th>
          <th>Address</th>
        </tr>
  
        { data.map((val,i)=>  <tr  >
          <td>{i+1}</td>
            <td>{val.UserName}</td>
            <td>{val.Email}</td>
            <td>{val.Mobile}</td>
            <td>{val.Address}</td>
  
          </tr>) }
          
      
      </table>
    </div>
    )
  }
  else{
    return (
      <div className='tabledetail' >
      <h3>Home Page View </h3> 
      <table className='tabledetail1'  >
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone No. </th>
          <th>Address</th>
        </tr>
  
        
      
      </table>
    </div>
    )
  }
  
}

export { Home }
