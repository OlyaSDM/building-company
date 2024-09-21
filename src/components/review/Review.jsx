import './review.css';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from './Card';


const Review = () => {
  const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1600 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1600 , min: 1300 },
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

// const reviewData = [
//   {
//     id: 1,
//     title: "Terrace Construction on a Steep Cliff",
//     text: "I had my doubts about building a terrace on such a steep slope, but the team handled everything with professionalism and skill. The view from the new terrace is breathtaking, and the construction feels incredibly sturdy. I’m amazed at how they managed to make it look so seamless!",
//     name: "Michael Johnson"
//   },
//   {
//     id: 2,
//     title: "Balcony Construction on a Cliffside",
//     text: "Building a balcony on the side of a cliff seemed impossible, but these guys made it happen! The structure is safe, the design is beautiful, and we now have a fantastic outdoor space with panoramic views. Couldn't be happier!",
//     name: "Jessica Carter"
//   },
//   {
//     id: 3,
//     title: "Repairing the Roof Structure",
//     text: "Our roof was in desperate need of repair, and they did an amazing job replacing the damaged trusses and reinforcing the whole structure. The house feels much more secure now, and the job was done quickly and efficiently.",
//     name: "James Anderson"
//   },
//   {
//     id: 4,
//     title: "House Painting",
//     text: "I couldn’t be more pleased with the way our house turned out after the paint job! The attention to detail was top-notch, and they helped me pick the perfect color. Our home looks brand new again.",
//     name: "Emily Davis"
//   },
//   {
//     id: 5,
//     title: "Vinyl Flooring Installation",
//     text: "They installed vinyl flooring throughout our entire house, and the result is stunning! It was done in just a couple of days, with minimal disruption. The new floors are durable and easy to maintain, and they’ve totally transformed our home.",
//     name: "Robert Miller"
//   },
//   {
//     id: 1,
//     title: "Terrace Construction on a Steep Cliff",
//     text: "I had my doubts about building a terrace on such a steep slope, but the team handled everything with professionalism and skill. The view from the new terrace is breathtaking, and the construction feels incredibly sturdy. I’m amazed at how they managed to make it look so seamless!",
//     name: "Michael Johnson"
//   },
//   {
//     id: 1,
//     title: "Terrace Construction on a Steep Cliff",
//     text: "I had my doubts about building a terrace on such a steep slope, but the team handled everything with professionalism and skill. The view from the new terrace is breathtaking, and the construction feels incredibly sturdy. I’m amazed at how they managed to make it look so seamless!",
//     name: "Michael Johnson"
//   },
//   {
//     id: 1,
//     title: "Terrace Construction on a Steep Cliff",
//     text: "I had my doubts about building a terrace on such a steep slope, but the team handled everything with professionalism and skill. The view from the new terrace is breathtaking, and the construction feels incredibly sturdy. I’m amazed at how they managed to make it look so seamless!",
//     name: "Michael Johnson"
//   },
//   {
//     id: 1,
//     title: "Terrace Construction on a Steep Cliff",
//     text: "I had my doubts about building a terrace on such a steep slope, but the team handled everything with professionalism and skill. The view from the new terrace is breathtaking, and the construction feels incredibly sturdy. I’m amazed at how they managed to make it look so seamless!",
//     name: "Michael Johnson"
//   },
//   {
//     id: 1,
//     title: "Terrace Construction on a Steep Cliff",
//     text: "I had my doubts about building a terrace on such a steep slope, but the team handled everything with professionalism and skill. The view from the new terrace is breathtaking, and the construction feels incredibly sturdy. I’m amazed at how they managed to make it look so seamless!",
//     name: "Michael Johnson"
//   },
//   {
//     id: 1,
//     title: "Terrace Construction on a Steep Cliff",
//     text: "I had my doubts about building a terrace on such a steep slope, but the team handled everything with professionalism and skill. The view from the new terrace is breathtaking, and the construction feels incredibly sturdy. I’m amazed at how they managed to make it look so seamless!",
//     name: "Michael Johnson"
//   },
//   {
//     id: 1,
//     title: "Terrace Construction on a Steep Cliff",
//     text: "I had my doubts about building a terrace on such a steep slope, but the team handled everything with professionalism and skill. The view from the new terrace is breathtaking, and the construction feels incredibly sturdy. I’m amazed at how they managed to make it look so seamless!",
//     name: "Michael Johnson"
//   },
//   {
//     id: 1,
//     title: "Terrace Construction on a Steep Cliff",
//     text: "I had my doubts about building a terrace on such a steep slope, but the team handled everything with professionalism and skill. The view from the new terrace is breathtaking, and the construction feels incredibly sturdy. I’m amazed at how they managed to make it look so seamless!",
//     name: "Michael Johnson"
//   }
// ]
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
      {/* <div className='review-cards'>
        <div className='review-card'>
          <h5>Mike</h5>
          <p>
            "I used a handyman service for door repair and was impressed by their professionalism, quality of work, and reasonable pricing."
          </p>
        </div>
        <div className='review-card'>
          <h5>James Gallagher</h5>
          <p>
            "I hired a team to repair my porch, and they exceeded my expectations. They were punctual, worked efficiently, and paid attention to every detail. My porch looks better than ever, and the entire process was hassle-free. Highly recommend their services!"
          </p>
        </div>
        <div className='review-card'>
          <h5>Emily Carter</h5>
          <p>
            "I recently had my living room painted, and I couldn't be happier with the results. The painters were professional, meticulous, and worked efficiently. The attention to detail and the smooth finish really transformed the space. I would definitely hire them again!"
          </p>
        </div>
      </div> */}
      <Carousel responsive={responsive}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        
      </Carousel>
    </div>
  )
}

export default Review;
