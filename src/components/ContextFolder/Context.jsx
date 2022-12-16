import React from 'react'
import { useState } from 'react'
import './Context.css'
import { createContext } from 'react'

export const userInfoContext = createContext();

export function Context(Props) {

    const [authUserData, setauthUserData] = useState({})



    const [show , setShow] = useState(false);

     


    return (
        <>
            {show && <div className='AuthUser'>
                <p> {authUserData.UserName} </p><span></span>

                <button className='logoutbutton' onClick={() => { setauthUserData({})
                 setShow(false) }} > Logout </button>
            </div>}

            <userInfoContext.Provider value={{ authUserData, setauthUserData ,setShow}}  >
                {Props.children}
            </userInfoContext.Provider>
        </>
    )


}


