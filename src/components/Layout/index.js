import React from 'react';
import Image from 'react-bootstrap/Image'
import "./style.css"
import loginImage from '../../ASSETS/altof-login-image.png';
import signUpImage from '../../ASSETS/altof-signup-image.png';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  if (props.children.props.className === 'login') { 
    var style = {
        background: `url(${loginImage}) no-repeat center center fixed #000`,
        WebkitBackgroundsize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        backgroundSize: 'cover',
    }
  } else {
      console.log(props.children.props.className, 'signup')
    style = {
        background: `url(${signUpImage}) no-repeat center center fixed #000`,
        WebkitBackgroundsize: 'cover',
        MozBackgroundSize: 'cover',
        OBackgroundSize: 'cover',
        BackgroundSize: 'cover',
    }
  }
  
  return(
    <div className="loginContainer" style={style}>
        <div className="card2">
           {props.children}
        </div>  
        <div className="image-overlay">
              <span>
                 <Image  src={require('../../ASSETS/logo-white.png')} fluid />   
               </span>
               <span className="rewiring">
                 Rewiring Work
               </span>
         </div>
    </div>
    // <div className="image-overlay">
    //           <div>
    //             <Image  src={require('../../ASSETS/img10.png')} fluid />   
    //           </div>
    //           <div className="rewiring">
    //             Rewiring Work
    //           </div>
    //         </div > 
    //     </div>
    //     <div className="card2">
    //       {props.children}
    //     </div> 
  )
}

export default Layout