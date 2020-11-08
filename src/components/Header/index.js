import React , { useState }from 'react';
import {  Link } from 'react-router-dom';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions';

/**
* @author
* @function Header
**/

const Header = (props) => {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();
  const [popUp, onPopUp] = useState(false)
  // const logout = () => {
  //   dispatch(logout())
  // }
  function showPopUp  () {
    onPopUp(!popUp)
  }
  console.log(auth,'header')

  return(
        <div>
          <div className="profile-icon" onClick={() => showPopUp()}>
            {auth.firstName[0]}{auth.lastName[0]}
          </div>
          {
          popUp ? 
            <div className="logout-popup">
              <Link to={'#'} onClick={() => {
                            dispatch(logout(auth.emailid))
              }}>Logout</Link>
            </div> : null
          }
        </div>
    
       
        // <ul className="menu">
        //     {
        //       auth.authenticated ?
        //       <li>
        //         <Link to={'#'} onClick={() => {
        //           dispatch(logout(auth.uid))
        //         }}>Logout</Link>
        //       </li> : null
        //     } 
        // </ul>
   )

 }

export default Header