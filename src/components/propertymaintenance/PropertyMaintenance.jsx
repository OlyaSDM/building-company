import "./propertymaintenance.css";
import maintenancePicture from '../../images/18.jpg';

const PropertyMaintenance = () => {
  return (
    <div className="maintenance-container">
      <h2>Property Maintenance Services for Airbnb</h2>
      <svg width="137" height="8" viewBox="0 0 137 8" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1 3.87676C4.375 -0.211524 11.125 -0.211524 14.5 3.87676C17.875 7.96504 24.625 7.96504 28 3.87676C31.375 -0.211524 38.125 -0.211524 41.5 3.87676C44.875 7.96504 51.625 7.96504 55 3.87676C58.375 -0.211524 65.125 -0.211524 68.5 3.87676C71.875 7.96504 78.625 7.96504 82 3.87676C85.375 -0.211524 92.125 -0.211524 95.5 3.87676C98.875 7.96504 105.625 7.96504 109 3.87676C112.375 -0.211524 119.125 -0.211524 122.5 3.87676C125.875 7.96504 132.625 7.96504 136 3.87676" stroke="#FFC60D" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
      <div className="maintenance-boxes">
        <div className="maintenance-box-one">
          <img src={ maintenancePicture } alt='living room picture' />
        </div>
        <div className="maintenance-box-two">
          <h3>
            Are you an Airbnb listing owner looking to provide your gests with the perfect stay?
          </h3>
          <br/>
          <h4>
            Our Property Maintenance Services for Airbnb is the solution!
          </h4>
          <br/>
          <p>
            We understand that keeping your property in tip-top condition is key to your 
            success on Airbnb. Our team of professionals offers a full range of repair and 
            maintenance services for your property. From quick fixes to regular inspections 
            and preventative maintenance, we take care of all the hassle of maintaining 
            your property.
          </p>
          <br/>
          <p>
            With our services, you can be sure that your home will always be in perfect 
            condition, ready to receive guests. Professional cleaning, prompt repairs 
            and reliable maintenance will all help you get high ratings and positive reviews 
            from your guests.
          </p>
          <br/>
          <p>
            Let us take care of your Airbnb property and we will ensure that it is in perfect condition. 
          </p>
          <br/>
          <h4>
            Contact us today to learn more about our services and make your property the best choice for renters!
          </h4>
        </div>
      </div>
    </div>
  )
}

export default PropertyMaintenance;
