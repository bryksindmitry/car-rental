import  React, { Component } from 'react';

import InputString from "../InputString";
import TextArea from "../TextArea";
import InputSubmit from "../InputSubmit";
export default class Contact extends Component{
    render(){
        return(
            <div className="contact">
                <div className="contact__description">
                    Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit.
                </div>
                <div className="contact__string">
                    <InputString type={"text"} labelText={"Name"} />
                </div>
                <div className="contact__string">
                    <InputString type={"email"} labelText={"E-mail"} />
                </div>
                <div className="contact__phone">
                    <InputString type={"phone"} labelText={"Phone"}/>
                </div>
                <div className="contact__string">
                    <TextArea labelText={"Question / Message:"}/>
                </div>
                <div className="contact__button">
                    <InputSubmit value="Send"/>
                </div>
            </div>
        )
    }
}