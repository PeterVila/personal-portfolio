import "./Contact.scss";
import emailjs from "emailjs-com";

const Contact = () => {

  const sendEmail = e => {
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
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
      e.target.reset();
  }
  return (
    <div className="contact" data-aos="fade-up">
      <h1 id="contact">Contact me!</h1>
      <section className="container contact__form">
        <form onSubmit={sendEmail}>
          <div className="row">
            <input type="text" placeholder="Name" name="from_name" />
          </div>
          <div className="row">
            <input type="email" placeholder="Email Address" name="from_email" />
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
        </form>
      </section>
    </div>
  );
};

export default Contact;
