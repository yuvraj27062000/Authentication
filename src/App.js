
import './App.css';
import {
  
  Routes,
  Route,
  NavLink,
  Link
} from 'react-router-dom';
import { Profile } from "./components/Routers/Profile"
import { Address } from "./components/Routers/Address"
import { Activity } from "./components/Routers/Activity"
import { Home } from './components/Routers/Home';
import { Context } from './components/ContextFolder/Context'
import { LoginForm } from './components/Routers/LoginForm';
import { SignUpForm } from './components/Routers/SignUpForm';
import { NavigateUser} from './components/Routers/Navigator/Navigate'

function App() {

 


  return (
    <div className="App">

      <div className="header ">


        <Link   to=" "><h1 style={{ textAlign: 'left', paddingLeft: '40px' }}> Home  </h1></Link>
         

    
        <ul className="header2 "  >

          <li>
            {/* <Link to="/profile">profile</Link> */}
            <NavLink    to="/profile">profile</NavLink>
          </li>
          <li>
            {/* <Link to="/addresjustifyContents">Address</Link> */}
            <NavLink    to="/address">Address</NavLink>
          </li>
          <li>
            {/* <Link to="exact/activity">Activity</Link> */}
            <NavLink    to="/activity">Activity</NavLink>

          </li>
          <li>
            {/* <Link to="exact/activity">Activity</Link> */}
            <NavLink    to="/login">Login</NavLink>

          </li>
          <li>
            {/* <Link to="exact/activity">Activity</Link> */}
            <NavLink    to="/signup">SignUp</NavLink>

          </li>
          <li>
            {/* <Link to="exact/activity">Activity</Link> */}
            
            
          </li>
        </ul>
      </div>
       
      <Context>
        <Routes>
          <Route   path='' element={<Home />}></Route>
          <Route   path='/profile' element={<NavigateUser>< Profile /></NavigateUser>}></Route>
          <Route   path='/address' element={<NavigateUser>< Address /></NavigateUser> }></Route>
          <Route   path='/activity' element={<NavigateUser>< Activity /></NavigateUser>}></Route>
          <Route   path='/login' element={< LoginForm />}></Route>
          <Route   path='/signup' element={< SignUpForm />}></Route>
          <Route   path='*' element={<div>  Page Not Found </div>}></Route>
        </Routes>
      </Context>


    </div>

  );
}

export default App;
