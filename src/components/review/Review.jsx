import './review.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Card';
import data from './reviewData.jsx';


const Review = () => {
  const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 1700 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1700 , min: 1300 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1300, min: 800 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 800, min: 0 },
    items: 1
  }
  };

  const review = data.map(item => (
    <Card 
      key={item.id} 
      title={item.title} 
      text={item.text} 
      name={item.name} 
    />
  ))

  return (
    <div className='review-container' id="review">
      <div className='review-header'>
        <div className='review-header-header'>
          <h2>Client Reviews</h2>
          <svg className='svg-services' width="137" height="8" viewBox="0 0 137 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 3.87676C4.375 -0.211524 11.125 -0.211524 14.5 3.87676C17.875 7.96504 24.625 7.96504 28 3.87676C31.375 -0.211524 38.125 -0.211524 41.5 3.87676C44.875 7.96504 51.625 7.96504 55 3.87676C58.375 -0.211524 65.125 -0.211524 68.5 3.87676C71.875 7.96504 78.625 7.96504 82 3.87676C85.375 -0.211524 92.125 -0.211524 95.5 3.87676C98.875 7.96504 105.625 7.96504 109 3.87676C112.375 -0.211524 119.125 -0.211524 122.5 3.87676C125.875 7.96504 132.625 7.96504 136 3.87676" stroke="#FFC60D" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
         <h3>
          We are happy to receive feedback from satisfied clients. We sincerely thank you for each review.
        </h3>
      </div>
      
      <Carousel 
        responsive={responsive} 
        partialVisible={false}
        centerMode={false}
        customTransition="all 0.5s ease"
      >
        {review}
      </Carousel>
    </div>
  )
}

export default Review;
