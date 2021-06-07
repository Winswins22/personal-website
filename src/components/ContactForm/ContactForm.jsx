// This component uses EmailJS.
// Visit 'https://www.emailjs.com/docs/tutorial/overview/' if you are wondering what 
// 'emailjs.sendForm('service_r7ffpo6', 'template_sbrnsmx', e.target, 'user_EJ2UEZuXpkUROE2gEEqxW')' 
// represents in the code.

// If you are reusing this code, you'll want to create an EmailJS account and re-create parts of this component.
// Here's a quick YT tutorial for EmallJS: https://www.youtube.com/watch?v=NgWGllOjkbs

import React, {useState, useEffect} from 'react'
import emailjs from 'emailjs-com'

import {
    FormInput,
    FormInputBox,
    FlexContainer,
    FormItem,
    FormButton
} from './ContactFormElems'

export default function ContactForm() {

  const [emailState, setEmailState] = useState(null);
  const [buttonMessage, setMessage] = useState("Send Message");
  const [buttonColor, setColor] = useState("white")

  useEffect(()=>{
    if((emailState === null)){
        setMessage("Send Message");
    }
    else if (emailState){
        setMessage("Sent!");
        setColor("#2ec02e");

        setTimeout(() =>{
            setEmailState(null);
        }, 5000)
    }
    else{
        setMessage("Send failed. (Oops!) Please email me at winswins2222@gmail.com");
        setColor("#d12a2a");
    }
  }, [emailState])

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_r7ffpo6', 'template_sbrnsmx', e.target, 'user_EJ2UEZuXpkUROE2gEEqxW')
      .then((result) => {
          console.log(result.text);
          setEmailState(true);
      }, (error) => {
          console.log(error.text);
          setEmailState(false);
      });
    
    e.target.reset();
  }

  return(
    <>
        <form onSubmit={(e) =>{
            sendEmail(e);
            setMessage("Sending...");
        }}>
            <FlexContainer>
                <FormItem>
                    <FormInput type="text" placeholder="Name" name="name"/>
                </FormItem>
                <FormItem>
                    <FormInput type="email" placeholder="Email" name="email"/>
                </FormItem>
                <FormItem>
                    <FormInput type="text" placeholder="Subject" name="subject"/>
                </FormItem>
                <FormItem>
                    <FormInputBox cols="30" rows="8" placeholder="Your message" name="message"></FormInputBox>
                </FormItem>
                <div style={{display: "flex", alignItems:"center", flexDirection: "column"}}>
                    <FormItem>
                        {
                            ((emailState === null)) ?
                                <FormButton emailState={emailState} type="submit" value={buttonMessage}></FormButton>
                            :
                                <FormButton style={{backgroundColor:buttonColor}} emailState={emailState} type="submit" value={buttonMessage}></FormButton>
                        }
                    </FormItem>
                </div>
            </FlexContainer>
        </form>
    </>
    )
}