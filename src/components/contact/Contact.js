import React from "react";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";
import "./Contact.css";
const Contact = (props) => {

 const onMarkerClick = (props, marker, e) => {
    // ..
  }

  return (
    <section className="box-shadow-beeb  " id="contact">
      <div className="container">
        <div className="title-section">&#60;Contact&#62;</div>

        <div className="form-wrapper">
          <div className="from-inner">
            <input type="text" placeholder="Name" className="name-form" />
            <input type="text" placeholder="Email" className="name-form" />
            <input type="text" placeholder="Subject" className="subject-form" />
            <textarea placeholder="Message" className="message-form"></textarea>
            <button className="msg-btn">Send Message</button>
          </div>

          <div className="form-inner-right">
            <Map google={props.google} zoom={14}>
              <Marker onClick={onMarkerClick} name={"Current location"} />

            </Map>
          </div>
        </div>

        <div className="title-section">&#60;/Contact&#62;</div>
      </div>
    </section>
  );
};




export default GoogleApiWrapper({
  apiKey: ("AIzaSyAl6gRPEgpOYzYew78MSR2ahG2coz4NsC4")
})(Contact)
