import React from "react";


import { useRef } from "react";
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator';
import { useState , useEffect   } from "react";
toast.configure()

export default function Footer(){

    // const App = () => {
        const [defaultcolor, setNewColor] = useState('')
        const [emailError, setEmailError] = useState('')
        const validateEmail = (e) => {
          var email = e.target.value
        
          if (validator.isEmail(email)) {
            setEmailError('Valid Email!')
            setNewColor('green')

          } else {
            setEmailError('Enter valid Email!')
            setNewColor('red')
          }
        }

    const toastId = React.useRef(null);

    const newsletterEmailInput = useRef(null);

    const newsletterAddEmailHandler = () => {
        const emailValue = newsletterEmailInput.current.value;

        if(!emailValue) { // test email valide
            if(! toast.isActive(toastId.current)) {
                toastId.current = toast.error("Please Enter your email address!" , {position: toast.POSITION.TOP_RIGHT});
          }
            return;
        }

        axios.post(
            '/marketing/api/newsletter/add-email', 
            //if(email != emailValue){
                { email: emailValue }
            
           

            //{ email: emailValue, subject: subjectValue, message: messageValue } // /marketing/api/contact-us/save
            )
            .then(response => {
                console.log(response.data);
        
                if(! toast.isActive(toastId.current)) {
                    toastId.current = toast.success("Your email has been successfully sent!" , {position: toast.POSITION.TOP_RIGHT});
                  }
                return;

            }
            )
            .catch(error => {
                console.log(error)
                if(! toast.isActive(toastId.current)) {
                       toastId.current = toast.error("Please enter valid Email!" , {position: toast.POSITION.TOP_RIGHT});
                      }
            });

            
                //if(! toast.isActive(toastId.current)) {
                 //       toastId.current = toast.error("Please Enter your email address correctly!" , {position: toast.POSITION.TOP_RIGHT});
                 // }
                 
        
           

    };


    return(
<div className="footer">
    <div className="footer-section">
<p className="title">Join the Engitech Experience
</p>
<div className="section"><input type="text" placeholder="Email" className="textEmail" ref={newsletterEmailInput} id="userEmail" onChange={(e) => validateEmail(e)} /><button onClick={newsletterAddEmailHandler} className="btnRun"><img src="./PNG/vuesax-bulk-send-2.png" alt="INFLEXIT" width="22" height="22"></img></button>
</div>
<br/><span style={{
    paddingLeft:'1em',
          fontWeight: 'bold',
          color: defaultcolor
        }}>{emailError}</span>

    </div>
    <span className="footer2">
    <div className="footer-section">
<p className="small-title">Support</p>
<p>FAQ</p>
<p>About Us</p>
<p>Contact Us</p>
    </div>
    <div className="footer-section">
<p className="small-title">Legal</p>
<p>Privacy Policy</p>
<p>Returns</p>
<p>Terms of Use</p>
    </div>
    <div className="footer-section">
<p className="small-title">Socials</p>
<p>Facebook</p>
<p>Twitter</p>
<p>LinkedIn</p>
    </div>
    </span>
</div>
    )
}