import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './style.css';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../actions';
import Image from 'react-bootstrap/Image'

/**
* @author
* @function Header
**/

const Header = (props) => {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  // const logout = () => {
  //   dispatch(logout())
  // }

  return(
   
        <ul className="menu">
            {
              auth.authenticated ?
              <li>
                <Link to={'#'} onClick={() => {
                  dispatch(logout(auth.uid))
                }}>Logout</Link>
              </li> : null
            } 
        </ul>
   )

 }

export default Header