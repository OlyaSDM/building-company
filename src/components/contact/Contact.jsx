import './contact.css';
import phone from "../../icons/icon-phone.png";
import email from "../../icons/email.png";
import local from "../../icons/icon-local.png";

const Contact = () => {
  return (
      <main className="contact-page">

          <div className="left">
                  <div className="contact-top">
                      Contacts
                      <svg width="137" height="8" viewBox="0 0 137 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 3.87676C4.375 -0.211524 11.125 -0.211524 14.5 3.87676C17.875 7.96504 24.625 7.96504 28 3.87676C31.375 -0.211524 38.125 -0.211524 41.5 3.87676C44.875 7.96504 51.625 7.96504 55 3.87676C58.375 -0.211524 65.125 -0.211524 68.5 3.87676C71.875 7.96504 78.625 7.96504 82 3.87676C85.375 -0.211524 92.125 -0.211524 95.5 3.87676C98.875 7.96504 105.625 7.96504 109 3.87676C112.375 -0.211524 119.125 -0.211524 122.5 3.87676C125.875 7.96504 132.625 7.96504 136 3.87676" stroke="#FFC60D" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </div>
                  <div className="contact-details">
                      <div className="contact-image">
                          <img src={phone} alt="phone-icon"/>
                      </div>
                      <div className="contact-info"> 737-347-3987 </div>
                  </div>
                  <div className="contact-details">
                      <div className="contact-image">
                          <img src={email} alt="email-sign"/>
                      </div>
                      <div className="contact-info"> info@emalgroup.com </div>

                  </div>
                  <div className="contact-details">
                      <div className="contact-image">
                          <img src={local} alt="icon-local"/>
                      </div>
                      <div className="contact-info">Austin, TX </div>
                  </div>
          </div>

          <div className="right">
              TEST
          </div>

          {/*<iframe*/}
          {/*    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d220449.196165526!2d-97.75574245!3d30.3077609!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8644b599a0cc032f%3A0x5d9b464bd469d57a!2sAustin%2C%20TX!5e0!3m2!1sen!2sus!4v1724896984226!5m2!1sen!2sus"*/}
          {/*    width="400" height="300" style="border:0;" allowFullScreen="" loading="lazy"*/}
          {/*    referrerPolicy="no-referrer-when-downgrade"></iframe>*/}

      </main>

  )
}

export default Contact;