import React, { useState } from 'react';
import Layout from '../../components/Layout';
import { signup } from '../../actions';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image'
import { NavLink } from 'react-router-dom';

/**
* @author
* @function RegisterPage
**/

const RegisterPage = (props) => {


  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');



  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);


  const registerUser = (e) => {
    
    e.preventDefault();

    const user = {
      "first_name":firstName,
      "last_name": lastName,
      "email_id":email,
      "password_token": password
    }    
    dispatch(signup(user))
  }


  if(auth.authenticated){
    return <Redirect to={`/`} />
  }

  return(
    <Layout>
      <div className="signup">
         <form onSubmit={registerUser}>
            <div className="icon-heading">
            <Image src={require('../../ASSETS/logo-login.png')} fluid />  
            </div>
            <h3 className="login-heading">Sign up</h3>
            <Form.Group controlId='time'>
                <label className="label">First Name</label>
                <Form.Control  name="firstName"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="First Name"
              />
              <span style={{ position:'relative', top: '-40px', left: '10px' }}>
                            <Image className="icon" src={require('../../ASSETS/man-user.png')} fluid />   
              </span>
            </Form.Group>
            <Form.Group controlId='time'>
                <label className="label">Last Name</label>
                <Form.Control  name="lastName"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Last Name"
              />
              <span style={{ position:'relative', top: '-40px', left: '10px' }}>
                            <Image className="icon" src={require('../../ASSETS/man-user.png')} fluid />   
              </span>
            </Form.Group>
            
            <Form.Group controlId='time'>
              <label className="label">Email address</label>
              <Form.Control  name="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
            />
            <span style={{ position:'relative', top: '-40px', left: '10px' }}>
                <Image className="icon" src={require('../../ASSETS/at.png')} fluid />   
            </span>
            </Form.Group>
              <Form.Group controlId='time'>
                <label className="label">Create Password</label>
                <Form.Control  name="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
              />
              <span style={{ position:'relative', top: '-40px', left: '10px' }}>
                            <Image className="icon" src={require('../../ASSETS/padlock.png')} fluid />   
              </span>
            </Form.Group>
            <div>
              <button className="login-btn">Sign up</button>
            </div>
          </form>
            <div className="LoginWith">Login With</div>
              <div className="Loginicon">
                <Image className="icon" src={require('../../ASSETS/img4.png')} fluid />   
                <Image className="icon" src={require('../../ASSETS/img7.png')} fluid />  
                <Image className="icon" src={require('../../ASSETS/github1.png')} fluid />   
                <Image  className="icon" src={require('../../ASSETS/linkedin.png')} fluid /> 
              </div>
            <div className="signupheading">
              To create a new account <span className="signup"><NavLink to={'/login'}>login</NavLink></span>
            </div>
      </div>
    </Layout>
   )

 }

export default RegisterPage