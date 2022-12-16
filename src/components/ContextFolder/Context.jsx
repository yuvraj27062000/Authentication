import React from 'react'
import { useState } from 'react'

import { createContext } from 'react'

export   const userInfoContext = createContext();

export  function Context(Props) {
    // let data = {
    //     name: 'Default',
    //     age: 'Default'
    // }
        const [userData,setUserData] = useState([
    ])    



    


    return (
        <userInfoContext.Provider value={ {userData:userData,setUserData:setUserData} }  >
            {Props.children}
        </userInfoContext.Provider>
    )


}


