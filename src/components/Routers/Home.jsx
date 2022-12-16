import React, { useEffect } from 'react'

import { userInfoContext } from '../ContextFolder/Context'

import { useContext } from 'react'
function Home() {
  const data = useContext(userInfoContext)
  


  let mydata = data.userData;
  if(data.userData.length===0){
    var all = true
  }
  else{
    var all = false
  }
  return (
    <div className='tabledetail' >
      <h3>Home Page View </h3>
      <table className='tabledetail1'  >
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
        <tr  >
                <td></td>
                <td></td>
              </tr>
        {all && 
              <tr  >
                <td>Default</td>
                <td>Default</td>
              </tr>
             }

        {
        
          mydata.map((val,i) => {
            return (
              <tr key={i}>
                <td>{val.name}</td>
                <td> {val.age}</td>
              </tr>
            )
          })
        }


      </table>
    </div>
  )
}

export { Home }
