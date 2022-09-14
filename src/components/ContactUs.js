import React from "react";


import { useRef } from "react";
import axios from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import validator from 'validator';
import { useState } from "react";
toast.configure()

export default function ContactUs(){

        // const App = () => {
            const [defaultcolor, setNewColor] = useState('')
            const [defaultcolor2, setNewColor2] = useState('')
            const [defaultcolor3, setNewColor3] = useState('')
            const [emailError, setEmailError] = useState('')
            const [messageErrror, setMessageError] = useState('')
            const [subjectError, setSubjectError] = useState('')
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

            const validateMessage = (e) => {
                var message = e.target.value
                if (message=="")
                {
                    setMessageError('Enter a message please!')
                    setNewColor2('red')                  
                }
                else
                {
                    setMessageError('Valid Message!')
                    setNewColor2('green')
                }
            }

            const validateSubject = (e) => {
                var subject = e.target.value
                if (subject=="")
                {
                    setSubjectError('Enter a name please!')
                    setNewColor3('red')                  
                }
                else
                {
                    setSubjectError('Valid name!')
                    setNewColor3('green')
                }
            }
    
        const toastId = React.useRef(null);
    
        const newsletterEmailInput = useRef(null);
 
        const newsMessageInput =useRef(null);

        const newSubjectInput =useRef(null);
    
        const newsletterAddEmailHandler = () => {
            const emailValue = newsletterEmailInput.current.value;
            const messageValue = newsMessageInput.current.value;
            const subjectValue = newSubjectInput.current.value;


    
            if(!emailValue || !messageValue || !subjectValue) { // test email valide
                if(! toast.isActive(toastId.current)) {
                    toastId.current = toast.error("Please fill in the informations correctly!" , {position: toast.POSITION.TOP_RIGHT});
                  }
                return;
            }
            if( emailValue.splite){

            }



            //   url : http://api-marketing-test.inflexit.com/marketing/api/contact-us/add
            // {
                //"email": "email.valid@gmail.com",
                // "subject": "Formation",
                // "message": "I will learn PHP & Symfony, why not ReactJS and NextJS of course"
             // }
    
            axios.post(
                // '/marketing/api/newsletter/add-email', 
                    '/marketing/api/contact-us/add' ,
                    // { email: emailValue }
                    {
                email: emailValue,
                 subject: subjectValue,
                 message: messageValue
               
                }
                //{ email: emailValue, subject: subjectValue, message: messageValue } // /marketing/api/contact-us/save
                )
                .then(response => {
                                         
                        console.log(response.data);
                        if(! toast.isActive(toastId.current)) {
                            toastId.current = toast.success("Thank you for participating!" , {position: toast.POSITION.TOP_RIGHT});
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
                //    toastId.current = toast.error("Please fill in the informations correctly!" , {position: toast.POSITION.TOP_RIGHT});
                //  }
    
        };
    return(
        <div className="section">
            <div className="col padding ">
            <div><p className="title2 profile-details-name">Contact Us</p></div>
            <div><p className="info">Share The details of your project – like scope, timeframes, or business challenges you’d like to solve.</p></div>
            <div><p>Le lorem ipsum est, en imprimerie, une suite de mots sans signification
                utilisée à titre provisoire pour calibrer une mise en page, le texte définitif
venant remplacer le faux-texte dès qu’il est prêt ou que la mise en page
est achevée. Généralement, on utilise un texte en faux latin,</p></div>
            </div>
            <div className="changeColor">
            <div className="col ">
            <div><p className="contactUs profile-details-name">Contact Us</p></div>
            <div><input type="text" className="text1" placeholder="Name" ref={newSubjectInput} id="userName" onChange={(e) => validateSubject(e)}/><br/><span style={{
         marginLeft: '2em',
         fontWeight: 'bold',
          color: defaultcolor3
        }}>{subjectError}</span></div>
            
            <div><input type="text" placeholder="Email" className="text2" ref={newsletterEmailInput} id="userEmail" onChange={(e) => validateEmail(e)} />
            <br/><span style={{
                marginLeft: '2em',
          fontWeight: 'bold',
          color: defaultcolor
        }}>{emailError}</span></div>
            

            <div><textarea name="adresse" placeholder="Message" rows="10" cols="70" className="text3" ref={newsMessageInput} id="userMessage" onChange={(e) => validateMessage(e)}/>
            <br/><span style={{
                marginLeft: '2em',
          fontWeight: 'bold',
          color: defaultcolor2
        }}>{messageErrror}</span></div>
           
            <div><button className="btn3" onClick={newsletterAddEmailHandler}>Lorem upsem</button></div>
            </div>
            </div>
        </div>
    )
}