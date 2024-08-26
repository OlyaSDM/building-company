import './service.css';
import cardOne from "..//..//images/1.png";
import cardSecond from "..//..//images/2.png";
import cardThird from "..//..//images/3.png";
import cardFourth from "..//..//images/4.png";
import cardFifth from "..//..//images/5.png";
import cardSixth from "..//..//images/6.png";
import cardSeventh from "..//..//images/7.png";
import cardEighth from "..//..//images/8.png";
import cardNinth from "..//..//images/9.png";
import cardTenth from "..//..//images/10.png";

const Service = () => {
  return (
    <div className='service-container'>
      <h2>Our services</h2>
      <svg width="137" height="8" viewBox="0 0 137 8" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M1 3.87676C4.375 -0.211524 11.125 -0.211524 14.5 3.87676C17.875 7.96504 24.625 7.96504 28 3.87676C31.375 -0.211524 38.125 -0.211524 41.5 3.87676C44.875 7.96504 51.625 7.96504 55 3.87676C58.375 -0.211524 65.125 -0.211524 68.5 3.87676C71.875 7.96504 78.625 7.96504 82 3.87676C85.375 -0.211524 92.125 -0.211524 95.5 3.87676C98.875 7.96504 105.625 7.96504 109 3.87676C112.375 -0.211524 119.125 -0.211524 122.5 3.87676C125.875 7.96504 132.625 7.96504 136 3.87676" stroke="#FFC60D" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
</svg>

<div className='cards'>
  <a href='https://emalgroup.app/form/authentication' className=''>
  <div className='card'>
<img className='img-card' src={cardOne} alt='card'/>
<p className='card-name'>Plumbing fixes and installations</p>
  </div>
  </a>
  <div className='card'>
<img className='img-card' src={cardSecond} alt='card'/>
<p className='card-name'>Furniture assembly</p>
  </div>
  <div className='card'>
<img className='img-card' src={cardThird} alt='card'/>
<p className='card-name'>Tile installation and repair</p>
  </div>
  <div className='card'>
<img className='img-card' src={cardFourth} alt='card'/>
<p className='card-name'>Property Maintenance Services for Airbnb</p>
  </div>
  <div className='card'>
<img className='img-card' src={cardFifth} alt='card'/>
<p className='card-name'>Door installation or repair</p>
  </div>
  <div className='card'>
<img className='img-card' src={cardSixth} alt='card'/>
<p className='card-name'>Painting and repair</p>
  </div>
  <div className='card'>
<img className='img-card' src={cardSeventh} alt='card'/>
<p className='card-name'>Painting and drywall repair</p>
  </div>
  <div className='card'>
<img className='img-card' src={cardEighth} alt='card'/>
<p className='card-name'>Construction and repair of fences</p>
  </div>
  <div className='card'>
<img className='img-card' src={cardNinth} alt='card'/>
<p className='card-name'>Construction and repair of terraces</p>
  </div>
  <div className='card'>
<img className='img-card' src={cardTenth} alt='card'/>
<p className='card-name'>Other types of work</p>
  </div>
</div>
    </div>
  )
}

export default Service;