import './home.css';
import location from '..//..//images/location.png';





const Home = () => {
return (
<main className="main-page">
   <section className='main'>
      <div className='block-text'>
         <h1>Your reliable assistant at home</h1>
         <h2>Handyman service near you</h2>
         <img className='location' src={location}  alt='location'/>    
      </div>
   </section>
   {/* 
   <section className='about-us'>
      <div className='about-text'>
         <h2>About us</h2>
         <div className='line'>
            <svg  width="137" height="8" viewBox="0 0 137 8" fill="none" xmlns="http://www.w3.org/2000/svg">
               <path d="M1 4C4.375 7.8366e-08 11.125 7.8366e-08 14.5 4C17.875 8 24.625 8 28 4C31.375 7.8366e-08 38.125 7.8366e-08 41.5 4C44.875 8 51.625 8 55 4C58.375 7.8366e-08 65.125 7.8366e-08 68.5 4C71.875 8 78.625 8 82 4C85.375 7.8366e-08 92.125 7.8366e-08 95.5 4C98.875 8 105.625 8 109 4C112.375 7.8366e-08 119.125 7.8366e-08 122.5 4C125.875 8 132.625 8 136 4" stroke="#FFC60D" stroke-width="1.3" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
         </div>
         <p className='text-about'>We offer quality construction and repair services to all cities in Texas. Our group cconsists of professionals, each of           
            whom has extensive experience and high qualifications. Regardless of the volume and complexity of the work, we              
            guarantee reliability, quality and timeliness of work.
         </p>
         <div className='icons'>
            <div className='icon-main'>
               <img className='icon' src={icon1} alt='icon1' />
               <p className='p-main'>Quality and reliability: 
               </p>
               <p className='p-ather'>High standards of work.</p>
            </div>
         </div>
      </div>
   </section>
   */}
</main>
)
}
export default Home;