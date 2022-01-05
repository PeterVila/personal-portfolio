import React, {useState} from "react";
import "./Contact.scss";
import emailjs from "emailjs-com";

const Contact = () => {

  const [isUpdating, setIsUpdating] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_p5qofyn",
        "email",
        e.target,
        "user_VL03stNeuAEV39uep9Qa2"
      )
      .then(
        (result) => {
    setIsUpdating(true);
    setIsUpdating(false);
    setShowAlert(true); // setting to true to display hte alert
      },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  let alertClass = showAlert ? "modal-alert animate" : "modal-alert";
  let alertStyles = showAlert
    ? {}
    : { opacity: 0, visibility: "hidden", pointerEvents: "none" };

  return (
    <div id="contact" className="contact container row" data-aos="fade-up">
      <section className="container contact__form contact-half">
        <h2>Contact Me!</h2>
        <form onSubmit={sendEmail}>
          <div className="row">
            <input type="text" placeholder="Name" name="name" />
          </div>
          <div className="row">
            <input type="email" placeholder="Email Address" name="email" />
          </div>
          <div className="row">
            <input type="text" placeholder="Subject" name="subject" />
          </div>
          <div className="row">
            <textarea
              cols="64"
              rows="8"
              placeholder="Your message"
              name="message"
            ></textarea>
          </div>
          <div className="row">
            <input type="submit" value="Send Message"></input>
          </div>
          <section
            className={alertClass}
            style={alertStyles}
            variant='success'
          >
            Thanks for the message!
          </section>
        </form>
      </section>
      <div className="contact-half contact-me">
        <h2>Contact Info</h2>
        <div className="row contacts">
          <div className="contact-image">
            <img src="https://visualpharm.com/assets/198/Location-595b40b85ba036ed117da637.svg" />
          </div>
          <div className="contact-info">
            <p className="contact-info-headers">Location</p>
            <p>Los Angeles County, CA</p>
          </div>
        </div>
        <div className="row contacts">
          <div className="contact-image">
            <img src="https://visualpharm.com/assets/616/Callback-595b40b65ba036ed117d3880.svg" />
          </div>
          <div className="contact-info">
            <p className="contact-info-headers">Phone</p>
            <p>(626) 848-3055</p>
          </div>
        </div>
        <div className="row contacts">
          <div className="contact-image">
            <img src="https://visualpharm.com/assets/499/Mail-595b40b75ba036ed117d9f3d.svg" />
          </div>
          <div className="contact-info">
            <p className="contact-info-headers">Email</p>
            <p>peterdvila@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
