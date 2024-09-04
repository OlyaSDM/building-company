import './contact.css';
import phone from "../../icons/icon-phone.png";
import email from "../../icons/email.png";
import local from "../../icons/icon-local.png";

const Contact = () => {
  return (
      <main className="contact-page" id="contact">

          <div className="left">

                  <div className="contact-top">
                      Contacts
                  </div>

                  <div className="svg-contact">  <svg width="137" height="8" viewBox="0 0 137 8" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 3.87676C4.375 -0.211524 11.125 -0.211524 14.5 3.87676C17.875 7.96504 24.625 7.96504 28 3.87676C31.375 -0.211524 38.125 -0.211524 41.5 3.87676C44.875 7.96504 51.625 7.96504 55 3.87676C58.375 -0.211524 65.125 -0.211524 68.5 3.87676C71.875 7.96504 78.625 7.96504 82 3.87676C85.375 -0.211524 92.125 -0.211524 95.5 3.87676C98.875 7.96504 105.625 7.96504 109 3.87676C112.375 -0.211524 119.125 -0.211524 122.5 3.87676C125.875 7.96504 132.625 7.96504 136 3.87676" stroke="#FFC60D" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round"></path></svg>
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
                      <div className="contact-info">13509 Feldspar Dr
                      </div>

                  </div>

                  <div className="contact-details">

                      <div className="contact-info address">Austin, TX 78729
                      </div>

                  </div>

          </div>

          <div className="right">
              If you have any questions, please write to us.
          </div>

      </main>

  )
}

export default Contact;