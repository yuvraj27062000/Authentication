
import React from 'react'
import { useContext } from 'react'
import {userInfoContext} from '../../ContextFolder/Context'
import {Navigate} from 'react-router-dom'

function NavigateUser({children}) {
    const { authUserData, setauthUserData } = useContext(userInfoContext)
    if(!authUserData.Email){
        return <Navigate to='/login/' />
    }
   else{
    return children
   }
}

export   {NavigateUser}
